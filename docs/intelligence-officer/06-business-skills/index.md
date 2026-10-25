---
search: false
hide: true
preview: true
prev:
  text: 'Enforce Approval Routing'
  link: /intelligence-officer/05-approval-routing-plugin/
next:
  text: 'Enrich Business Meaning'
  link: /intelligence-officer/07-semantic-model/
short-description: 'Create read-only business skills that explain recovery evidence and assess approval readiness.'
difficulty: 2
codename: OPERATION APPROVAL BRIEF
time: 50
tags:
  - custom-skills
  - instructions
  - evaluation
products:
  - dataverse
  - github-copilot
industries:
  - retail
created-date: 2026-10-25
last-edited-date: 2026-10-25
---

# Mission 06: Author Business Skills with GitHub Copilot {#mission-06-business-skills}

<mission-meta />

## Mission Brief

The plugin can determine an approval path, but a manager still needs to understand the customer, issue, requested recovery, and earlier review questions.

In **Operation Approval Brief**, you'll create two Business Applications in Work IQ skills. **Zava Customer Recovery Summary** assembles the evidence. **Zava Approval Readiness Advisor** checks whether an approver has enough information to act.

A skill is an analyst's briefing checklist: it tells an agent what to retrieve, how to interpret it, and where to stop. It does not replace the plugin, grant data permissions, or make an approval decision.

## Objectives

In this mission, you'll learn:

1. How purpose, data scope, instructions, and response format shape a business skill.
1. How to handle omitted values, choice labels, and related-table results.
1. Why decision chronology matters more than record-code order.
1. How to verify useful behavior rather than merely successful record retrieval.

## Skills Explain; They Do Not Authorize

A business skill is reusable process knowledge stored in Dataverse and discoverable by supported agents. Creating its definition is a write; **executing these two skills must remain read-only**.

The data contract includes the central request, Account, custom Case, Product, assigned Exception Policy, and every related Approval Decision. Choice values may appear as a number plus a readable label. Joined columns can carry aliases, and empty columns can be omitted from results. Omitted means **not recorded**, not "No."

Ordering is equally important. REQ-3006 has an information request followed by a later approval. An earlier blocker must not remain the current outcome when the later decision supersedes it. Missing or tied decision dates do not permit sorting by decision code to invent chronology.

> [!IMPORTANT]
> "Ready" means ready for a human review, not approved. "Pending" means awaiting review, not declined. Approval is not fulfillment.

## Lab 6: Create Two Business Skills

### Lab 6.1: Create Customer Recovery Summary

1. Confirm the target environment and start Copilot CLI.
1. Enter:

    ```text
    Use the Dataverse plugin's supported business-skill tooling to create
    Zava Customer Recovery Summary, unique name zava_customerrecoverysummary,
    in the confirmed environment. Inspect actual schema before authoring.

    Description: Use when an approver asks for a summary or approval brief
    for one Zava warranty or goodwill request identified by Request Code.

    Input: one exact Request Code, for example REQ-3001.
    If missing, not found, or ambiguous, explain and ask for clarification.
    Do not guess another request.

    Read only the matching Warranty Goodwill Request and its related
    customer account, support_incident case (number, title, priority,
    description), Zava Product (type, model, warranty period, cost),
    assigned Exception Policy (code, name, conditions, thresholds, level,
    description), and every Approval Decision (decision, level, approver,
    date, approved amount, comments, follow-up required).
    Use available read-only SQL/query tooling, not data-changing actions.

    Respond in under 300 words using these headings:
    Customer and issue; Product and warranty; Request;
    Policy and approval path; Approval history; Recommended next action.
    Show recorded amounts as dollars and include Routing Notes when present.

    Use only recorded facts. Say "not recorded" for missing data.
    Handle numeric choice values with readable labels, joined aliases, and
    omitted empty columns. Do not confuse requested with approved amount.
    Explain the recorded routing; do not independently choose or assign a policy.
    A blank policy means routing is not established; use status and Routing
    Notes to distinguish an unrouted Draft from manual-review failure.

    Present dated decisions chronologically. Pending without approver/date
    means awaiting review, not rejected. A later decision can supersede an
    earlier information request. If dates are missing/tied or records
    materially conflict, explain the uncertainty and seek clarification;
    do not infer order from codes or choose a convenient outcome.

    Recommend a next action supported by status, required approval level,
    decision history, and fulfillment evidence. Do not claim a shipment,
    refund, or credit occurred solely because it was approved.
    Never approve, reject, send a message, fulfill, or change a record.

    Add the skill to ZavaWarrantyGoodwillApproval. Read back its name,
    unique name, instructions, activation state, and solution membership.
    Report failures explicitly.
    ```

1. Review the stored definition and its read-only boundaries.
1. Verify the skill appears under **Business skills (preview)** in Power Apps.

### Lab 6.2: Create Approval Readiness Advisor

1. Enter:

    ```text
    Create Zava Approval Readiness Advisor, unique name
    zava_approvalreadinessadvisor, using the actual schema and the same
    read-only data scope and safeguards as Zava Customer Recovery Summary.

    Description: Use when someone asks whether a specific Zava recovery
    request is ready for approval, what is missing, or what a reviewer needs.
    Input: exact Request Code. Missing, absent, or ambiguous codes require
    clarification, not a guessed match.

    Check each item and mark Pass, Fail, or Warning:
    customer, related custom service case, product, request type, reason,
    warranty (blank/Unknown fails), requested amount (missing fails; zero
    is a recorded amount), business justification (missing fails; vague
    one-line justification warns), customer impact (blank fails),
    submitted date, assigned policy, required approval level, and status.
    Draft and Needs Manual Review are not ready; explain Routing Notes.

    Compare with the assigned policy only: active state, amount within
    minimum-inclusive/maximum-exclusive range, matching type/reason/
    warranty/impact with Any only where supported, and matching approval
    level. If policy is absent, policy presence fails and those comparisons
    are Not checkable. Not checkable never counts as Pass.

    An unresolved latest Needs More Information decision fails and names
    the requested information. A later approval supersedes an earlier
    information request unless it retains an unresolved condition.
    Pending warns; it does not mean rejected.
    Missing/tied dates or materially conflicting records must be flagged
    for clarification, not resolved by record-code order.

    Verdict: Not ready if any Fail; Ready with concerns if no Fail and at
    least one Warning; Ready only when all applicable checks pass.
    If already Approved, Rejected, or Fulfilled, identify that state and
    explain that a new approval-readiness verdict is not authorization to
    repeat approval or fulfillment. For conflicting terminal-state evidence,
    mark the status/history consistency check Fail and seek clarification.

    Output the verdict, a table of checks with evidence, and numbered,
    specific fixes or next steps. Do not invent policy, amounts, decisions,
    reviewer confirmations, or fulfillment. Do not change records or send.
    Explain omitted empty fields, choice labels, and joined aliases.

    Add the skill to ZavaWarrantyGoodwillApproval. Read back the definition,
    activation state, and solution membership. Report failures explicitly.
    ```

1. Review the definition independently; do not assume "same safeguards" copied every requirement correctly.
1. Open the solution and verify both skills are included.
1. Confirm both skills are active for your own testing; if not, activate only these reviewed definitions.

## Lab 7: Test the Skills Against Live Evidence

Run one test at a time. Compare the answer with stored records, not a sample screenshot. Agent wording can vary; the invariants below must not.

### Lab 7.1: Understand a pending request

1. Enter:

    ```text
    In my confirmed Zava environment, retrieve and use the
    Zava Customer Recovery Summary business skill to summarize REQ-3001.
    Follow its stored instructions. Do not change any records.
    ```

1. Confirm the brief identifies **Contoso Coffee**, **CAS-9001**, the **Office Brewer 500**, **$1,299**, **POL-2004**, and **Executive** approval.
1. Confirm the Pending decision is described as awaiting review, not declined.
1. Confirm it does not promise a replacement or claim completed fulfillment.

### Lab 7.2: Find the incomplete draft

1. Enter:

    ```text
    Use Zava Approval Readiness Advisor to review REQ-3004.
    Explain whether it is ready for approval and what needs attention.
    Do not change any records.
    ```

1. Confirm **Not ready**, Unknown warranty, missing impact/submitted date/policy/level, and Draft status.
1. Confirm policy comparisons are **Not checkable**, not fabricated passes.
1. Confirm the vague justification is flagged and the next action is to complete the evidence before submission.

### Lab 7.3: Recognize an unresolved reviewer question

1. Enter:

    ```text
    Use Zava Approval Readiness Advisor to assess REQ-3002 for final approval.
    Explain outstanding reviewer questions. Do not change any records.
    ```

1. Confirm **Not ready** despite otherwise populated fields.
1. Confirm it requests evidence of **subscription tenure** and **credits in the last 12 months**.
1. Confirm the justification's reference to a three-year history is not treated as the reviewer's requested confirmation.

### Lab 7.4: Exercise chronology and guardrails

1. Run these additional read-only checks:

| Test | Required result |
| --- | --- |
| Summary of `REQ-3006` | Later $749 Finance approval supersedes the earlier information request; shipment remains unconfirmed |
| Summary of `REQ-3003` | Status and credit-issued notes are reconciled explicitly or flagged; no second-credit recommendation |
| Summary of `REQ-9999` | Not found; no invented substitute |
| Readiness of the manual-review test record from Mission 05 | Not ready; explain its actual Routing Notes |

1. Review tool activity, where the client exposes it, to verify the stored skill was retrieved and the expected read-only queries ran.
1. Refine a skill if a required invariant fails, then rerun the affected tests.

An agent's statement "I used the skill" is supporting context, not a substitute for observable retrieval/tool activity when available.

## Mission Complete

You have created **two reusable business skills**, verified **their solution membership**, and tested **readiness, chronology, missing data, and decision boundaries**.

Next: [Mission 07: Enrich Business Meaning](../07-semantic-model/).

## Tactical Resources

- [Create and use business skills](https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skills)
- [Business skills overview](https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skill-overview)
- [Dataverse query data](https://learn.microsoft.com/power-apps/developer/data-platform/webapi/query/overview)

<analytics-tag section="intelligence-officer" mission="06-business-skills" />
