"""Load the Zava Warranty & Goodwill base data into a Dataverse environment.

Usage:  python load_zava_data.py --environment https://<yourorg>.crm.dynamics.com

Needs the Dataverse CLI already signed in to that environment (the script never prompts
for a login), the four zava_ tables and their active source-code alternate keys, and the
existing custom Case table support_incident. Rerunning upserts the Zava sample records
and may overwrite workshop changes. Accounts and cases are only created when missing.
"""
import argparse
import csv
import json
import os
import subprocess
import sys
import tempfile
import urllib.parse

HERE = os.path.dirname(os.path.abspath(__file__))
BASE = "/api/data/v9.2/"
ENV = ""
optmap_cache = {}


def call(method, path, body=None):
    cmd = (f'dataverse api request --target dataverse --environment {ENV} --method {method} '
           f'--path "{path}"'.replace("$", "`$"))
    tmp = None
    if body is not None:
        tmp = tempfile.NamedTemporaryFile("w", suffix=".json", delete=False, encoding="utf-8")
        json.dump(body, tmp)
        tmp.close()
        cmd += f' --body-file "{tmp.name}"'
    cmd += " -i"
    r = subprocess.run(["powershell", "-NoProfile", "-Command", cmd], capture_output=True,
                       text=True, encoding="utf-8")
    if tmp:
        os.unlink(tmp.name)
    return r.stdout + r.stderr


def get(path):
    out = call("GET", path)
    i = out.find("{")
    if i < 0:
        return {}
    try:
        return json.loads(out[i:])
    except json.JSONDecodeError:
        return {}


def rows(name):
    with open(os.path.join(HERE, name), encoding="utf-8-sig", newline="") as f:
        return list(csv.DictReader(f))


def q(v):
    return urllib.parse.quote(v.replace("'", "''"), safe="")


def optmap(entity, attr):
    d = get(BASE + f"EntityDefinitions(LogicalName='{entity}')/Attributes(LogicalName='{attr}')"
            f"/Microsoft.Dynamics.CRM.PicklistAttributeMetadata?$select=LogicalName&$expand=OptionSet($select=Options)")
    return {o["Label"]["UserLocalizedLabel"]["Label"]: o["Value"] for o in d["OptionSet"]["Options"]}


def load_maps(entity, cols):
    for c in cols:
        optmap_cache[(entity, c)] = optmap(entity, c)


def choices(entity, row, mapping):
    body = {}
    for col, csvcol in mapping.items():
        v = row.get(csvcol, "")
        if v != "":
            if v not in optmap_cache[(entity, col)]:
                raise SystemExit(f"Choice value '{v}' is not an option on {entity}.{col}. "
                                 "Check the table was built with the lab prompts.")
            body[col] = optmap_cache[(entity, col)][v]
    return body


def upsert(setname, keycol, keyval, body):
    out = call("PATCH", BASE + f"{setname}({keycol}='{keyval}')", body)
    ok = ("204" in out[:40]) or ("201" in out[:40])
    print(("OK    " if ok else "FAIL  ") + f"{setname} {keyval}" + ("" if ok else "  " + out[:300].replace("\n", " ")))
    return ok


def preflight(tables):
    who = get(BASE + "WhoAmI")
    if "UserId" not in who:
        raise SystemExit("Could not reach the environment with the Dataverse CLI. Make sure you are already "
                         f"signed in to {ENV} and the URL is correct. This script does not prompt for login.")
    sets = {}
    for t in tables:
        d = get(BASE + f"EntityDefinitions(LogicalName='{t}')?$select=EntitySetName")
        if "EntitySetName" not in d:
            raise SystemExit(f"Table '{t}' was not found. Create the Zava tables first (module 3), then rerun.")
        sets[t] = d["EntitySetName"]
    return who["UserId"], sets


def count(setname):
    out = call("GET", BASE + f"{setname}?$select=createdon&$count=true&$top=1")
    i = out.find("{")
    try:
        return json.loads(out[i:]).get("@odata.count", "?")
    except (ValueError, json.JSONDecodeError):
        return "?"


def main():
    global ENV
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--environment", required=True, help="Environment URL, e.g. https://org123.crm.dynamics.com")
    ENV = ap.parse_args().environment.rstrip("/")

    P, E, R, D = "zava_product", "zava_exceptionpolicy", "zava_warrantygoodwillrequest", "zava_approvaldecision"
    C = "support_incident"
    me, sets = preflight((P, E, R, D, C, "account"))
    load_maps(P, ["zava_producttype", "zava_supporttier"])
    load_maps(E, ["zava_requesttype", "zava_reasoncode", "zava_requiredapprovallevel",
                  "zava_warrantystatuscondition", "zava_customerimpactcondition"])
    load_maps(R, ["zava_requesttype", "zava_reasoncode", "zava_warrantystatus", "zava_customerimpact",
                  "zava_requiredapprovallevel", "zava_requeststatus"])
    load_maps(D, ["zava_decision", "zava_approvallevel"])

    acct = {}
    for r in rows("Account.csv"):
        name = r["AccountName"]
        d = get(BASE + f"accounts?$select=accountid&$filter=name eq '{q(name)}'")
        if d.get("value"):
            acct[name] = d["value"][0]["accountid"]
            print("EXISTS account", name)
            continue
        body = {"name": name, "telephone1": r["Phone"], "address1_city": r["City"]}
        if r["State"]:
            body["address1_stateorprovince"] = r["State"]
        if r["Website"]:
            body["websiteurl"] = r["Website"]
        call("POST", BASE + "accounts", body)
        d = get(BASE + f"accounts?$select=accountid&$filter=name eq '{q(name)}'")
        if not d.get("value"):
            raise SystemExit(f"Could not create account {name}.")
        acct[name] = d["value"][0]["accountid"]
        print("CREATED account", name)

    case = {}
    prio = {"High": 1, "Normal": 2, "Low": 3}
    for r in rows("ServiceCase.csv"):
        flt = f"support_ticketnumber eq '{q(r['CaseNumber'])}'"
        path = BASE + f"{sets[C]}?$select=support_incidentid,support_ticketnumber&$filter={flt}"
        d = get(path)
        if len(d.get("value", [])) > 1:
            raise SystemExit(f"Multiple custom cases have Case Number {r['CaseNumber']}. "
                             "Resolve the ambiguity before loading.")
        if d.get("value"):
            print("EXISTS case", r["CaseNumber"], "->", d["value"][0]["support_ticketnumber"])
        else:
            body = {"support_title": r["Title"], "support_description": r["Description"],
                    "support_prioritycode": prio[r["Priority"]], "support_ticketnumber": r["CaseNumber"],
                    "support_AccountId@odata.bind": f"/accounts({acct[r['AccountName']]})"}
            call("POST", BASE + sets[C], body)
            d = get(path)
            if not d.get("value"):
                raise SystemExit(f"Could not create case {r['CaseNumber']}.")
            if len(d["value"]) > 1:
                raise SystemExit(f"Multiple custom cases have Case Number {r['CaseNumber']}. "
                                 "Resolve the ambiguity before loading.")
            print("CREATED case", r["CaseNumber"], "->", d["value"][0]["support_ticketnumber"])
        case[r["CaseNumber"]] = d["value"][0]["support_incidentid"]

    for r in rows("ZavaProduct.csv"):
        b = choices(P, r, {"zava_producttype": "ProductType", "zava_supporttier": "SupportTier"})
        b.update({"zava_name": r["ProductName"], "zava_modelnumber": r["ModelNumber"],
                  "zava_warrantyperiodmonths": int(r["WarrantyPeriodMonths"]),
                  "zava_replacementcost": float(r["ReplacementCost"]), "zava_notes": r["Notes"]})
        upsert(sets[P], "zava_productcode", r["ProductCode"], b)

    for r in rows("ExceptionPolicy.csv"):
        b = choices(E, r, {"zava_requesttype": "RequestType", "zava_reasoncode": "ReasonCode",
                           "zava_requiredapprovallevel": "RequiredApprovalLevel",
                           "zava_warrantystatuscondition": "WarrantyStatusCondition",
                           "zava_customerimpactcondition": "CustomerImpactCondition"})
        b.update({"zava_name": r["PolicyName"], "zava_minimumamount": float(r["MinimumAmount"]),
                  "zava_maximumamount": float(r["MaximumAmount"]), "zava_policydescription": r["PolicyDescription"]})
        upsert(sets[E], "zava_policycode", r["PolicyCode"], b)

    for r in rows("WarrantyGoodwillRequest.csv"):
        b = choices(R, r, {"zava_requesttype": "RequestType", "zava_reasoncode": "ReasonCode",
                           "zava_warrantystatus": "WarrantyStatus", "zava_customerimpact": "CustomerImpact",
                           "zava_requiredapprovallevel": "RequiredApprovalLevel", "zava_requeststatus": "RequestStatus"})
        b.update({"zava_name": r["RequestName"], "zava_requestedamount": float(r["RequestedAmount"]),
                  "zava_businessjustification": r["BusinessJustification"], "zava_requestedby": r["RequestedBy"],
                  "zava_fulfillmentnotes": r["FulfillmentNotes"],
                  "zava_CustomerId@odata.bind": f"/accounts({acct[r['CustomerName']]})",
                  "zava_RelatedServiceCaseId@odata.bind": f"/{sets[C]}({case[r['RelatedServiceCaseNumber']]})",
                  "zava_ProductId@odata.bind": f"/{sets[P]}(zava_productcode='{r['ProductCode']}')"})
        if r["SubmittedDate"]:
            b["zava_submitteddate"] = r["SubmittedDate"]
        if r["ExceptionPolicyCode"]:
            b["zava_ExceptionPolicyId@odata.bind"] = f"/{sets[E]}(zava_policycode='{r['ExceptionPolicyCode']}')"
        upsert(sets[R], "zava_requestcode", r["RequestCode"], b)

    for r in rows("ApprovalDecision.csv"):
        b = choices(D, r, {"zava_decision": "Decision", "zava_approvallevel": "ApprovalLevel"})
        b.update({"zava_name": f"{r['DecisionCode']} {r['Decision']}", "zava_comments": r["Comments"],
                  "zava_followuprequired": r["FollowUpRequired"] == "Yes",
                  "zava_RequestId@odata.bind": f"/{sets[R]}(zava_requestcode='{r['RequestCode']}')"})
        if r["DecisionDate"]:
            b["zava_decisiondate"] = r["DecisionDate"]
            b["zava_ApproverId@odata.bind"] = f"/systemusers({me})"
        if r["ApprovedAmount"]:
            b["zava_approvedamount"] = float(r["ApprovedAmount"])
        upsert(sets[D], "zava_decisioncode", r["DecisionCode"], b)

    print("\nRecord counts in the environment (expect at least the seeded numbers):")
    for label, setname, want in (("Zava Product", sets[P], 5), ("Exception Policy", sets[E], 6),
                                 ("Warranty Goodwill Request", sets[R], 6), ("Approval Decision", sets[D], 6)):
        print(f"  {label:28} {count(setname):>4}  (seeded {want})")
    print("Approver on loaded decisions is the signed-in user running this script.")


if __name__ == "__main__":
    main()
