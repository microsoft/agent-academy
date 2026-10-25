---
search: false
hide: true
preview: true
prev:
  text: 'Define the Security Model'
  link: /intelligence-officer/03-security-model/
next:
  text: 'Enforce Approval Routing'
  link: /intelligence-officer/05-approval-routing-plugin/
short-description: 'Load the supplied Zava records, verify their relationships, and expose recovery data in the app.'
difficulty: 2
codename: OPERATION CASE FILES
time: 45
tags:
  - python
  - grounding
  - solutions
products:
  - dataverse
  - github-copilot
  - power-platform
industries:
  - retail
created-date: 2026-10-25
last-edited-date: 2026-10-25
---

# Mission 04: Load Data and Extend the App {#mission-04-data-and-model-driven-app}

<mission-meta />

## Mission Brief

An empty schema cannot tell Zava's customer stories. You need realistic records with different outcomes: pending reviews, missing information, and an approval that supersedes an earlier question.

In **Operation Case Files**, you'll load the supplied fictional records and inspect their actual relationships. You'll then add the recovery tables to Zava Support and prepare the application for semantic modeling.

Loading data is a write operation. The destination, rerun behavior, and verification criteria matter as much as the command itself.

## Objectives

In this mission, you'll learn:

1. How the loader resolves dependencies and reuses source identifiers.
1. Why exit status and total counts alone do not prove a successful load.
1. How incomplete and historical records support later skill tests.
1. How to extend and publish a model-driven app.

## What the Loader Does

The Python script uses an **already-authenticated Dataverse CLI**. It launches Windows PowerShell to issue API requests; it does not display a login prompt.

It processes accounts, custom service cases, products, policies, requests, and decisions in dependency order. Existing accounts are reused by name. Cases are reused by their source Case Number, not title. Custom Zava records are upserted by their alternate keys.

Rerunning can overwrite changes to the sample Zava records. Some failed operations are printed as `FAIL` without forcing a nonzero process exit. Inspect all output and verify the records, not just the script's exit code.

| File | Contents |
| --- | --- |
| `Account.csv` | Six fictional customer accounts |
| `ServiceCase.csv` | Six custom support cases |
| `ZavaProduct.csv` | Five products |
| `ExceptionPolicy.csv` | Six policies |
| `WarrantyGoodwillRequest.csv` | Six requests, including an incomplete draft |
| `ApprovalDecision.csv` | Six decisions, including pending and historical reviews |
| `load_zava_data.py` | Windows-based loader using the Dataverse CLI |

> [!IMPORTANT]
> The loader creates missing sample accounts and cases. This is intentional for a self-contained development environment. Never use it against production or a shared environment with ambiguous customer names. It maps choice labels from metadata and requires the exact lookup navigation names created in Mission 02.

## Lab 4: Load and Verify the Evidence

### Lab 4.1: Load the sample records {#lab-41-load-the-sample-records}

<download-files path="intelligence-officer/04-data-and-model-driven-app/assets/zava-data" filename="zava-data.zip" />

1. Download and extract the Zava data package.
1. Confirm all seven files are together in one folder.
1. Open that folder in VS Code.
1. Confirm `python --version` and `dataverse --help` work in the terminal.
1. Start Copilot CLI and enter:

    ```text
    Prepare to load the supplied Zava data using load_zava_data.py.
    Ask me for the development environment URL and confirm the exact target.
    Verify Python, Windows PowerShell, and the Dataverse CLI are available.
    Verify the CLI is already authenticated to this environment using WhoAmI.

    Check account, support_incident, and the four Zava tables exist.
    Check exact loader-required columns/navigation properties, choice labels,
    and all source-code alternate keys are present and Active.

    Explain that this creates missing sample accounts/cases and upserts Zava
    records, and that rerunning can overwrite sample changes. Obtain my
    confirmation before loading. Stop on a failed prerequisite.

    Run from the script-and-CSV folder:
    python .\load_zava_data.py --environment "https://<confirmed-environment>.crm.dynamics.com"

    Inspect stdout and stderr for every FAIL or error even if exit status
    is zero. Report unresolved failures explicitly. Do not delete records,
    alter schema, or substitute another environment.
    ```

1. Review the proposed target and write scope before approving the load.
1. Inspect the reported result for all failures.

If a prerequisite fails, resolve it before rerunning. Do not "fix" a failed import by changing sample identifiers or filling intentionally missing values.

### Lab 4.2: Verify values and relationships

1. Enter:

    ```text
    Use read-only queries in the confirmed environment to compare the
    stored sample records with all six local CSV files.
    For each check report Met, Not met, or Unable to verify, with evidence.

    Expect 6 sample accounts, 6 sample cases, 5 products, 6 policies,
    6 requests, and 6 decisions. Distinguish sample counts from table totals.
    Compare actual values and relationships, not only counts.
    Match cases by support_ticketnumber in support_incident, not incident.
    Verify each request's account, case, product, and policy lookup.
    Verify Active/Inactive matches the ActiveStatus source fields.

    REQ-3004 must remain Draft with Unknown warranty, blank impact,
    blank submitted date, no policy, and no required approval level.
    REQ-3006 must have DEC-4005 (Needs More Information, 2026-09-08)
    followed by DEC-4006 (Approved, 2026-09-10, approved amount 749).
    DEC-4003 and DEC-4004 are Pending with no approver, decision date,
    or approved amount. Dated decisions reference the user who ran the load.

    Report duplicates, missing values, incorrect values/relationships,
    and any loader behavior that differs from the CSV contract.
    Do not repair or change any record.
    ```

1. Resolve load failures before continuing; do not mistake intentionally blank fields for failures.
1. Record the following baseline for later tests:

| Request | Evidence to preserve |
| --- | --- |
| `REQ-3001` | $1,299 commercial downtime replacement; Executive review pending |
| `REQ-3002` | $150 goodwill credit; outstanding questions about tenure and prior credits |
| `REQ-3003` | $75 shipment credit; Approved status but notes say credit issued |
| `REQ-3004` | Incomplete Draft; no routing |
| `REQ-3005` | $89 damaged-accessory refund; Manager decision pending |
| `REQ-3006` | $749 replacement; later Finance approval supersedes the information request |

> [!NOTE]
> Keep REQ-3003's status/notes inconsistency visible. Later skills must flag conflicting fulfillment evidence rather than recommend another credit. Missing fulfillment notes would not, by themselves, prove either completion or non-completion.

The loader seeds the recorded statuses before the routing plugin exists. It does not establish that the later plugin routed these historical records, and it does not populate Routing Notes. Use separate test records in Mission 05.

## Lab 5: Extend Zava Support

### Lab 5.1: Add recovery pages

1. Open [Power Apps](https://make.powerapps.com) and confirm your environment.
1. Open **Solutions** > **Zava Warranty & Goodwill Approval**.
1. Open **Zava Support** in the app designer.
1. Select **Add page** or **New** > **Dataverse table**.
1. Select **Zava Product**, **Zava Exception Policy**, **Warranty Goodwill Request**, and **Approval Decision**.
1. Select **Add** with navigation enabled.
1. Select **Save**, then **Publish**.
1. Select **Play** and open each table's page.
1. Confirm the sample records are visible.

If a default view does not show a source code, open the record or inspect it using a read-only query. Do not assume row order identifies a sample record.

### Lab 5.2: Enable app participation

1. Return to the app designer.
1. Open **Settings** > **Features**.
1. Review **Enable M365 Copilot in Model Driven Apps**, if shown in your experience, and enable it only for this lab app when approved.
1. Select **Save**, then **Publish**.
1. Verify the app participates under your administrator's current [Work IQ application participation controls](https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation#application-participation-in-work-iq).

App participation, environment data participation, and client access remain separate controls. If the workshop setting is not shown, follow the current participation documentation with your administrator rather than assume a publish operation enabled access.

### Lab 5.3: Initialize the semantic model

1. Open [Power Apps preview](https://make.preview.powerapps.com).
1. Confirm the same development environment.
1. Select **More** > **Discover all**.
1. Under **AI**, select **Semantic Model (preview)**.
1. Select the entry associated with **Zava Support** to begin model creation.
1. Review its initial status and the included tables.

You will enrich this model in Mission 07. If the app is missing, verify publication, participation, permissions, and preview availability; do not generate a model over a different application.

## Mission Complete

You have **verified sample evidence**, **extended the model-driven app**, and **initialized the semantic-model workflow**. The intentional gaps and decision history remain intact for later tests.

Next: [Mission 05: Enforce Approval Routing](../05-approval-routing-plugin/).

## Tactical Resources

- [Use alternate keys to create or update records](https://learn.microsoft.com/power-apps/developer/data-platform/use-upsert-insert-update-record)
- [Model-driven app designer](https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-designer-overview)
- [Semantic model overview](https://learn.microsoft.com/power-apps/maker/data-platform/semantic-model-overview)

<analytics-tag section="intelligence-officer" mission="04-data-and-model-driven-app" />
