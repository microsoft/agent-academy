---
search: false
hide: true
preview: true
prev:
  text: 'Load Data and Extend the App'
  link: /intelligence-officer/04-data-and-model-driven-app/
next:
  text: 'Author Business Skills with GitHub Copilot'
  link: /intelligence-officer/06-business-skills/
short-description: 'Build a synchronous Dataverse plugin that routes submitted requests using explicit policy rules.'
difficulty: 3
codename: OPERATION POLICY GUARD
time: 75
tags:
  - automation
  - triggers
  - evaluation
products:
  - dataverse
  - github-copilot
industries:
  - retail
created-date: 2026-10-25
last-edited-date: 2026-10-25
---

# Mission 05: Enforce Approval Routing {#mission-05-approval-routing-plugin}

<mission-meta />

## Mission Brief

Your tables store the rules, but storing a rule does not enforce it. Without a control point, every service agent or integration could interpret Zava's approval thresholds differently.

**Operation Policy Guard** adds a server-side Dataverse plugin. It runs before a submitted request is saved, evaluates active policies, and records the required approval path in the same transaction.

Think of the plugin as a sorting gate, not an approver. It sends a well-defined request to the right authority and diverts incomplete or ambiguous requests for manual review. It never grants a replacement, refund, or credit.

## Objectives

In this mission, you'll learn:

1. Why synchronous PreOperation execution keeps routing consistent across clients.
1. How exact matching, amount boundaries, and specificity determine a policy.
1. Why partial updates need a merged target and pre-image.
1. How to combine local rule tests with scoped live routing checks.

## Deterministic Rules, Configurable Data

The matching algorithm lives in code; thresholds and approval levels live in policy records. Administrators can update policy data without rebuilding the assembly. A change to the algorithm still requires a code change.

| Rule | Required behavior |
| --- | --- |
| Eligibility | Consider only policies whose built-in status is Active |
| Amount | Minimum is inclusive; maximum is exclusive |
| Conditions | Request Type, Warranty Status Condition, and Customer Impact Condition match exactly unless the policy explicitly says Any |
| Reason | Exact match; Reason Code has no Any option |
| Specificity | Count Any conditions in the three permitted columns; lowest count wins |
| Tied best matches | Needs Manual Review; never choose by policy code or query order |
| Missing required matching input | Needs Manual Review with an explanation |
| Valid unique match | Set policy, required approval level, Routed status, and Routing Notes |

The matching request inputs are Request Type, Reason Code, Requested Amount, Warranty Status, and Customer Impact. **Unknown** warranty is insufficient for automatic routing. A zero amount is a value, not missing data.

## Registration Is Part of the Implementation

A plugin type is not active until its processing steps are registered. Both steps must run synchronously in **PreOperation**, with **sandbox isolation**, and be included in the solution.

An Update target contains only submitted attributes. Register a pre-image with the matching inputs and prior Request Status, then merge the target over it. Otherwise, changing only Request Status could make a complete request look incomplete.

| Message | Registration and execution condition |
| --- | --- |
| Create | PreOperation, synchronous; route only when the new status is Submitted |
| Update | PreOperation, synchronous; filtering attribute `zava_requeststatus`; route only when the old status differs and the new status is Submitted |

Set routing fields on the target itself; do not call Update recursively on the same request. An unchanged Submitted status must not reroute merely because a client included that attribute.

> [!WARNING]
> This plugin is not a complete state-transition authorization system. It does not restrict which user may approve a request, edit a protected field, or fulfill it. Do not treat successful routing as approval.

## Lab 5: Build and Register the Plugin

### Lab 5.1: Generate and review the implementation

1. Open your local workspace in VS Code.
1. Confirm the environment identity in Copilot CLI.
1. Enter:

    ```text
    Build a C# Dataverse server-side plugin for
    zava_warrantygoodwillrequest in ZavaWarrantyGoodwillApproval.
    Use the supported Dataverse plugin SDK and .NET Framework 4.6.2 target.
    Inspect our actual table metadata and choice values; do not guess numeric
    option values or map choices from different columns by numeric equality.

    Route on Create only if Request Status is Submitted.
    Route on Update only when Request Status transitions from another value
    to Submitted. Use a pre-image containing prior status and all matching
    inputs, and merge Target over it. Ignore unrelated or unchanged updates.

    Query all relevant active zava_exceptionpolicy records, accounting for
    pagination. Match request type, reason code, warranty status, customer
    impact, and requested amount. Only policy Request Type, Warranty Status
    Condition, and Customer Impact Condition support Any. Reason is exact.
    Use decimal amounts: minimum <= amount < maximum.
    Select the match with the fewest Any conditions. If the best matches tie,
    select none. Never break a tie by code, name, or query order.

    On one best match: set zava_exceptionpolicyid,
    zava_requiredapprovallevel, zava_requeststatus=Routed,
    and explanatory zava_routingnotes naming the policy.

    If request type, reason, amount, warranty, or impact is missing; warranty
    is Unknown; no policy matches; or best policies tie: clear policy and
    approval level, set Needs Manual Review, and explain the blocker.
    Treat zero as an amount, not a missing value.

    Write changes directly to Target in synchronous PreOperation.
    Do not approve requests, create decisions, or perform fulfillment.
    Surface unexpected infrastructure errors explicitly through the standard
    plugin exception/tracing mechanism; do not disguise them as successful
    routing or a business-data mismatch.

    Create local unit tests for the matching and event-handling requirements.
    Sign and build the assembly. Keep signing keys and local authentication
    material out of source-control deliverables. Do not deploy or modify
    business data until I review the build and tests.
    ```

1. Review the generated code, target framework, SDK references, and actual metadata mappings.
1. Run the generated local unit tests and inspect failures before proceeding.

### Lab 5.2: Verify the local test matrix

1. Ask Copilot to report which tests establish each requirement:

| Area | Cases that must be covered |
| --- | --- |
| Amounts | Exact minimum, just below minimum, just below maximum, exact maximum, zero |
| Conditions | Each exact condition; each permitted Any; reason mismatch |
| Policy eligibility | Inactive policy ignored; no match; paginated candidates |
| Specificity | More specific policy wins; equal best matches require manual review |
| Missing inputs | Blank warranty, Unknown warranty, blank impact, missing amount/type/reason |
| Stale output | Manual review clears a previously assigned policy and approval level |
| Events | Create Submitted; Create Draft; transition to Submitted; unchanged status; unrelated update |
| Partial update | Target containing only status still uses pre-image matching inputs |
| Failure handling | Unexpected query/permission failures are surfaced, not reported as a match |

1. Confirm the tests assert returned policy, approval level, status, and useful Routing Notes, not merely "no exception."

### Lab 5.3: Register and inspect the plugin

1. Enter:

    ```text
    Propose registration of the reviewed signed assembly in the confirmed
    development environment and solution ZavaWarrantyGoodwillApproval.
    Use sandbox isolation. Register the plugin type and synchronous
    PreOperation Create and Update steps for zava_warrantygoodwillrequest.
    Update filtering attribute is zava_requeststatus. Register the pre-image
    required by our implementation with prior status and matching inputs.
    Obtain my approval before deploying.

    After registration, read back assembly, type, isolation, messages, table,
    stage, execution mode, filtering attributes, pre-image alias/columns,
    and solution membership of the assembly and steps.
    Do not create, update, or delete business records during registration.
    ```

1. Review and approve only the specified development-environment registration.
1. Inspect the read-back and resolve registration differences.

## Lab 6: Test Live Routing Without Altering the Baseline

### Lab 6.1: Create separate test requests

1. Enter:

    ```text
    Prepare a live routing test plan using new clearly labeled course-test
    requests, never REQ-3001 through REQ-3006. Use unique Request Codes
    within the 20-character limit and include all required fields:
    name, code, request type, reason, amount, business justification,
    requested by, and Request Status.

    Use only the existing course policies. For each scenario below create a
    new Submitted request, then read it back. Obtain my approval for the
    proposed test records before writing. Report policy code, approval level,
    status, and Routing Notes for every record.

    Do not approve, fulfill, delete, or modify baseline records or policies.
    ```

1. Supply this scenario table:

| Request Type | Reason | Warranty | Impact | Amount | Expected policy / level / status |
| --- | --- | --- | --- | --- | --- |
| Replacement | Commercial Downtime | In Warranty | Critical | 1299 | POL-2004 / Executive / Routed |
| Goodwill Credit | Loyal Customer Save | Expired | Medium | 150 | POL-2003 / Manager / Routed |
| Refund | Damaged Item | In Warranty | Medium | 89 | POL-2006 / Manager / Routed |
| Replacement | Product Defect | In Warranty | High | 749 | POL-2002 / Finance / Routed |
| Replacement | Product Defect | In Warranty | High | 500 | POL-2002 / Finance / Routed |
| Replacement | Product Defect | In Warranty | High | 1499.99 | POL-2002 / Finance / Routed |
| Replacement | Product Defect | In Warranty | High | 1500 | No policy / no level / Needs Manual Review |
| Replacement | Product Defect | Unknown | blank | 1299 | No policy / no level / Needs Manual Review |

1. Compare every saved result with the expected outcome, including cleared fields on manual review.

### Lab 6.2: Test a partial update

1. Create one additional, clearly labeled **Draft** test request with complete matching inputs for POL-2002.
1. Confirm that creation did not route it.
1. Update **only Request Status** to **Submitted**, with approval for that scoped write.
1. Read it back and verify **POL-2002**, **Finance**, **Routed**, and explanatory notes.
1. Update an unrelated description on that test record and confirm routing output is unchanged.

> [!NOTE]
> The six supplied policies do not provide overlapping best matches for a live tie test. Establish specificity and ties in local unit tests instead of editing baseline policies. Leave test records clearly labeled and record their codes; any later cleanup is a separate, reviewed operation.

## Mission Complete

You have implemented **deterministic policy matching**, **transactional server-side routing**, and **local plus live evidence checks**. Requests now carry their route or a clear reason for manual review.

Next: [Mission 06: Author Business Skills with GitHub Copilot](../06-business-skills/).

## Tactical Resources

- [Write a plugin](https://learn.microsoft.com/power-apps/developer/data-platform/write-plug-in)
- [Register a plugin](https://learn.microsoft.com/power-apps/developer/data-platform/register-plug-in)
- [Event framework](https://learn.microsoft.com/power-apps/developer/data-platform/event-framework)
- [Plugin exceptions](https://learn.microsoft.com/power-apps/developer/data-platform/handle-exceptions)

<analytics-tag section="intelligence-officer" mission="05-approval-routing-plugin" />
