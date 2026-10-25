---
search: false
hide: true
preview: true
prev:
  text: 'Understand Business Applications in Work IQ'
  link: /intelligence-officer/01-business-applications-work-iq/
next:
  text: 'Define the Security Model'
  link: /intelligence-officer/03-security-model/
short-description: 'Create the support foundation and a solution-aware schema for warranty and goodwill requests.'
difficulty: 3
codename: OPERATION EVIDENCE LOCKER
time: 90
tags:
  - solutions
  - grounding
products:
  - dataverse
  - github-copilot
  - power-platform
industries:
  - retail
created-date: 2026-10-25
last-edited-date: 2026-10-25
---

# Mission 02: Build the Zava Data Foundation {#mission-02-data-foundation}

<mission-meta />

## Mission Brief

An approver needs the customer story, product details, requested amount, applicable policy, and review history. If those facts live in disconnected notes, an agent cannot reliably assemble them.

In **Operation Evidence Locker**, you'll use GitHub Copilot and the Dataverse plugin to build that structure. You'll create a publisher and solution, then explicit tables, columns, keys, and relationships. The supplied data loader depends on these contracts, so exact names matter.

The original workshop assumed an existing Zava Support app and custom Case table. This mission creates that foundation as well, allowing you to start in your own development environment without a conference image.

## Objectives

In this mission, you'll learn:

1. Why solution context and publisher prefixes must be explicit.
1. How alternate keys support repeatable sample-data loading.
1. How optional request fields and a separate decision history preserve incomplete work.
1. How to verify generated schema before using it.

## Schema Is a Contract

Dataverse has **display names**, **logical names**, **schema names**, and **entity-set names**. They serve different purposes. The loader queries logical names and discovers entity sets, but its relationship bindings depend on the specified lookup schema names.

Think of the schema as an evidence index: changing a label on a drawer is harmless only if every reference still identifies the right drawer. A coding agent should not substitute the system Product or Case table because it looks similar.

An alternate key makes a source code such as `REQ-3001` a stable upsert target. Wait until its index is **Active** before loading data. Making `Request` unique on Approval Decision would be wrong: one request must support multiple decisions.

| Table | Logical name | Purpose |
| --- | --- | --- |
| Account | `account` | Existing customer organization |
| Case | `support_incident` | Course-created support issue; not the standard `incident` table |
| Zava Product | `zava_product` | Product, warranty period, and cost |
| Zava Exception Policy | `zava_exceptionpolicy` | Active matching conditions and approval level |
| Warranty Goodwill Request | `zava_warrantygoodwillrequest` | Central recovery record |
| Approval Decision | `zava_approvaldecision` | Multiple review records per request |
| User | `systemuser` | Existing Dataverse user referenced as approver |

## Lab 2: Create the Solutions and Support Foundation

### Lab 2.1: Establish the Zava solution

1. Start Copilot CLI in your local course workspace.
1. Confirm the environment identity using the read-only check from Mission 00.
1. Enter:

    ```text
    In my confirmed development environment, create or verify a publisher:
    display name Zava, unique name zava, customization prefix zava,
    option value prefix 42000.

    Create or verify an unmanaged solution:
    display name Zava Warranty & Goodwill Approval,
    unique name ZavaWarrantyGoodwillApproval, version 1.0.0.0,
    using that publisher.

    If matching components already exist, inspect them. Do not replace,
    delete, or rename existing components. Report incompatible definitions
    and stop. Verify the publisher and solution records when finished.
    ```

1. Open **Solutions** in [Power Apps](https://make.powerapps.com) and verify the solution and publisher.
1. Enter the shared authoring contract:

    ```text
    For subsequent Zava tables, use exact zava_ logical and schema names
    inside ZavaWarrantyGoodwillApproval. Use the Dataverse CLI or Web API
    with MSCRM.SolutionUniqueName. Do not use a table-creation tool that
    silently applies the default publisher prefix.

    If solution-targeted creation is unavailable, add each created component
    to the solution immediately and verify membership. Stop if the required
    names or solution context cannot be honored.

    Tables are user-owned. Keep built-in Active/Inactive status.
    Do not create a separate Active Yes/No field.
    Assign each choice column values 42000, 42001, ... in its listed order,
    restarting at 42000 for each column. Do not use 420000000.
    Use currency column-level precision 2 and minimum 0.
    Keep default forms/views unchanged until the app lab.
    Do not create sample records. Do not publish until schema verification.

    For each table: create non-lookup columns, wait for metadata propagation,
    create its source-code alternate key, wait for its index to be Active,
    then create lookup relationships sequentially.
    ```

### Lab 2.2: Create the missing custom Case foundation

The sample loader deliberately targets a custom support table, not the Dynamics 365 Customer Service `incident` table. Its `support_` prefix represents Zava's pre-existing support application. Keep that contract in a separate support foundation solution.

1. Enter:

    ```text
    Create or verify a publisher named Zava Support Foundation, unique name
    zavasupport, customization prefix support, option value prefix 43000.
    Create an unmanaged solution Zava Support Foundation, unique name
    ZavaSupportFoundation, version 1.0.0.0, using that publisher.

    This is the intentional support_ exception to the Zava table contract.
    Do not change the main Zava solution's publisher.

    Verify the existing account table is available. Create a user-owned
    custom table Case, plural Cases, logical name support_incident,
    primary key support_incidentid, in ZavaSupportFoundation.
    Do not use or customize the standard incident table.

    Columns:
    - Title, support_title: primary name, required text, maximum 200.
    - Case Number, support_ticketnumber: required text, maximum 30.
      Use plain text, not autonumber. Create alternate key
      support_ticketnumber_key and wait until its index is Active.
    - Description, support_description: multiline text, maximum 4000.
    - Priority, support_prioritycode: choice with these exact values:
      High=1, Normal=2, Low=3. This intentionally differs from the Zava choices.
    - Account: optional lookup to account only, schema name support_AccountId,
      logical name support_accountid. Use Remove Link on delete.

    Keep built-in Active/Inactive status. Do not create sample records.
    Verify the exact names, types, choice values, key state, lookup navigation
    property support_AccountId, and solution membership. Stop on mismatch.
    ```

1. Confirm the custom table and active key exist before continuing.

> [!IMPORTANT]
> If an existing `support_incident` differs from this definition, do not modify it blindly. Use an empty course environment or have its owner resolve compatibility. The loader expects `support_title`, `support_ticketnumber`, `support_prioritycode`, `support_description`, and `support_AccountId`.

## Lab 3: Create the Recovery Tables

Run each prompt separately. Review its read-back before moving to the next table.

### Lab 3.1: Create Zava Product

1. Enter:

    ```text
    Apply our Zava authoring contract. Create Zava Product, plural
    Zava Products, logical name zava_product, primary name zava_name,
    in ZavaWarrantyGoodwillApproval. Do not use the system Product table.

    Columns:
    - Product Name (zava_name): required text, maximum 200.
    - Product Code (zava_productcode): required text, maximum 20;
      alternate key zava_productcode_key.
    - Product Type (zava_producttype): required choice: Machine,
      Subscription, Accessory, Consumable, Service Plan.
    - Model Number (zava_modelnumber): optional text, maximum 100.
    - Warranty Period Months (zava_warrantyperiodmonths): optional whole
      number, minimum 0, maximum 1200.
    - Replacement Cost (zava_replacementcost): optional currency.
    - Support Tier (zava_supporttier): optional choice: Standard,
      Premium, Priority, Commercial.
    - Notes (zava_notes): optional multiline text, maximum 4000.

    Verify solution membership, column names/types/required settings,
    actual choice values, and Active alternate key. Report differences.
    ```

### Lab 3.2: Create Zava Exception Policy

1. Enter:

    ```text
    Apply our Zava authoring contract. Create Zava Exception Policy,
    plural Zava Exception Policies, logical name zava_exceptionpolicy,
    in ZavaWarrantyGoodwillApproval.

    Columns:
    - Policy Name (zava_name): primary name, required text, maximum 200.
    - Policy Code (zava_policycode): required text, maximum 20;
      alternate key zava_policycode_key.
    - Request Type (zava_requesttype): required choice: Replacement,
      Goodwill Credit, Service Credit, Shipment Credit, Refund, Any.
    - Reason Code (zava_reasoncode): required choice: Product Defect,
      Loyal Customer Save, Commercial Downtime, Late Shipment, Damaged Item.
    - Minimum Amount (zava_minimumamount): required currency.
    - Maximum Amount (zava_maximumamount): required currency.
    - Required Approval Level (zava_requiredapprovallevel): required choice:
      Manager, Finance, Executive.
    - Warranty Status Condition (zava_warrantystatuscondition): required
      choice: In Warranty, Expired, Not Applicable, Any.
    - Customer Impact Condition (zava_customerimpactcondition): required
      choice: Low, Medium, High, Critical, Any.
    - Policy Description (zava_policydescription): optional multiline text,
      maximum 4000.

    Matching rules for the later plugin, not enforced by this table:
    only Active policies; minimum <= amount < maximum; Request Type,
    Warranty Status Condition, and Customer Impact Condition may use Any;
    Reason Code must match exactly. Prefer the matching policy with the
    fewest Any conditions. A tie must require manual review, not selection
    by code, name, or query order.

    Verify solution membership, names, types, required settings, choice
    values, precision, and Active alternate key. Do not implement routing yet.
    ```

The policy name "Replacement or credit $500 to $1500" is descriptive. Its actual Request Type is **Replacement**. Match stored conditions, not words in a name.

### Lab 3.3: Create Warranty Goodwill Request

1. Enter:

    ```text
    Apply our Zava authoring contract. Create Warranty Goodwill Request,
    plural Warranty Goodwill Requests, logical name zava_warrantygoodwillrequest,
    in ZavaWarrantyGoodwillApproval.

    Columns:
    - Request Name (zava_name): primary name, required text, maximum 200.
    - Request Code (zava_requestcode): required text, maximum 20;
      alternate key zava_requestcode_key.
    - Request Type (zava_requesttype): required choice: Replacement,
      Goodwill Credit, Service Credit, Shipment Credit, Refund.
    - Reason Code (zava_reasoncode): required choice: Product Defect,
      Loyal Customer Save, Commercial Downtime, Late Shipment, Damaged Item.
    - Warranty Status (zava_warrantystatus): optional choice: In Warranty,
      Expired, Not Applicable, Unknown.
    - Requested Amount (zava_requestedamount): required currency.
    - Business Justification (zava_businessjustification): required multiline
      text, maximum 4000.
    - Customer Impact (zava_customerimpact): optional choice:
      Low, Medium, High, Critical.
    - Requested By (zava_requestedby): required text, maximum 100.
    - Submitted Date (zava_submitteddate): optional Date Only format
      with DateOnly behavior.
    - Required Approval Level (zava_requiredapprovallevel): optional choice:
      Manager, Finance, Executive.
    - Request Status (zava_requeststatus): required choice: Draft,
      Submitted, Routed, Needs Manual Review, Approved, Rejected, Fulfilled.
    - Routing Notes (zava_routingnotes): optional multiline text, maximum 4000.
    - Fulfillment Notes (zava_fulfillmentnotes): optional multiline text,
      maximum 4000.

    After creating the non-lookup columns and Active key, create four
    optional lookups with Remove Link on delete:
    - Zava Product: schema zava_ProductId, logical zava_productid,
      target zava_product.
    - Exception Policy: schema zava_ExceptionPolicyId,
      logical zava_exceptionpolicyid, target zava_exceptionpolicy.
    - Customer: schema zava_CustomerId, logical zava_customerid,
      target account only, not a polymorphic customer lookup.
    - Related Service Case: schema zava_RelatedServiceCaseId,
      logical zava_relatedservicecaseid, target support_incident,
      whose primary key is support_incidentid.

    Keep the specified optional fields optional so incomplete drafts can
    exist. Request Status is separate from built-in Active/Inactive.
    Verify all columns, actual choice values, DateOnly behavior, key state,
    lookup navigation properties, delete behavior, and solution membership.
    Do not create records or enforce routing.
    ```

### Lab 3.4: Create Approval Decision

1. Enter:

    ```text
    Apply our Zava authoring contract. Create Approval Decision, plural
    Approval Decisions, logical name zava_approvaldecision,
    in ZavaWarrantyGoodwillApproval.

    Columns:
    - Decision Name (zava_name): primary name, required text, maximum 200.
    - Decision Code (zava_decisioncode): required text, maximum 20;
      alternate key zava_decisioncode_key.
    - Decision (zava_decision): required choice: Approved,
      Needs More Information, Pending.
    - Approval Level (zava_approvallevel): required choice:
      Manager, Finance, Executive.
    - Decision Date (zava_decisiondate): optional Date Only format,
      DateOnly behavior.
    - Approved Amount (zava_approvedamount): optional currency.
    - Comments (zava_comments): optional multiline text, maximum 4000.
    - Follow-Up Required (zava_followuprequired): optional Yes/No,
      default No, using Boolean values rather than choice numbering.

    After creating the non-lookup columns and Active key, create:
    - Request: required lookup, schema zava_RequestId, logical zava_requestid,
      target zava_warrantygoodwillrequest, Restrict on delete.
      Many decisions may reference a request. Do not create a unique key
      on Request.
    - Approver: optional lookup, schema zava_ApproverId,
      logical zava_approverid, target systemuser, Remove Link on delete.

    Keep Approver, Decision Date, and Approved Amount optional so Pending
    decisions do not invent completed reviews. Verify all metadata,
    navigation properties, relationship behavior, and solution membership.
    Do not add sample records or approval automation.
    ```

> [!NOTE]
> The supplied Decision choice does not include Rejected. Rejection is represented by the request's **Request Status** and its supporting explanation. Do not silently add a choice or claim that a Pending decision means rejection.

## Lab 4: Verify and Create the App Shell

### Lab 4.1: Audit the schema contract

1. Ask Copilot:

    ```text
    Read back the course schema without modifying it. Compare it against
    our table prompts. Report Met, Not met, or Unable to verify for:
    solution membership; exact names and types; required/optional fields;
    actual choice values; currency precision; DateOnly behavior;
    all five source-code alternate keys including support_ticketnumber_key;
    each key's Active index status; lookup targets and navigation names;
    Remove Link and Restrict delete behavior.

    Verify account and systemuser are existing system tables, Product is
    zava_product, and Case is support_incident rather than incident.
    List the discovered entity-set names. Do not fix differences automatically.
    ```

1. Resolve any reported incompatibility with a scoped correction before proceeding.
1. Ask Copilot to publish only the verified course table customizations.

### Lab 4.2: Create Zava Support

1. Open **Solutions** in Power Apps and select **Zava Warranty & Goodwill Approval**.
1. Select **Add existing** > **Table** and add the custom **Case** table from the support foundation.
1. Add the existing **Account** table to the solution without adding unrelated components.
1. Select **New** > **App** > **Model-driven app**.
1. Enter `Zava Support` for the name.
1. Select **Create**.
1. Select **Add page** or **New** > **Dataverse table**, depending on the app designer.
1. Add **Account** and the custom **Case** table as navigation pages.
1. Select **Save**, then **Publish**.
1. Select **Play** and verify the app opens with both pages.

> [!TIP]
> If both a standard Case and a custom Case appear, inspect the table's logical name before selecting it. The course requires `support_incident`. The recovery tables will be added in Mission 04.

The main solution now references support components. Keep **Zava Support Foundation** with your course assets; if you later move solutions, install the foundation before the main solution and review Dataverse's dependency report.

## Mission Complete

You now have **a support foundation**, **four recovery tables**, **active source-code keys**, and **a model-driven app shell**. The structure preserves incomplete drafts and multiple decisions instead of forcing missing facts into invented values.

Next: [Mission 03: Define the Security Model](../03-security-model/).

## Tactical Resources

- [Solutions overview](https://learn.microsoft.com/power-apps/maker/data-platform/solutions-overview)
- [Define alternate keys](https://learn.microsoft.com/power-apps/maker/data-platform/define-alternate-keys-reference-records)
- [Table relationships](https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-entity-relationships)
- [Build a model-driven app](https://learn.microsoft.com/power-apps/maker/model-driven-apps/build-first-model-driven-app)

<analytics-tag section="intelligence-officer" mission="02-data-foundation" />
