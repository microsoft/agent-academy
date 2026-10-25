---
search: false
hide: true
preview: 'Copilot Cowork and the Business apps integration must be available and permitted for your account.'
prev:
  text: 'Manage Skills in Power Apps'
  link: /intelligence-officer/08-skill-builder/
next:
  text: 'Draft Badge Completion'
  link: /intelligence-officer/course-completion-badges-intelligence-officer/
short-description: 'Use the activated recovery planner to recommend next actions and draft accurate customer updates.'
difficulty: 2
codename: OPERATION CUSTOMER SIGNAL
time: 30
tags:
  - custom-skills
  - evaluation
  - grounding
products:
  - copilot-cowork
  - dataverse
  - microsoft-365-copilot
industries:
  - retail
created-date: 2026-10-25
last-edited-date: 2026-10-25
---

# Mission 09: Apply Recovery Skills in Cowork {#mission-09-cowork-recovery}

<mission-meta />

## Mission Brief

You defined Zava's process once. Now a service lead should be able to use it without opening the editor or pasting the entire procedure into every conversation.

In **Operation Customer Signal**, you'll connect Copilot Cowork to Business apps and retrieve the activated Recovery Follow-through Planner. You'll compare an approved replacement with a goodwill request awaiting more information.

The same procedure should yield different recommendations because the evidence differs. Neither result should cross the line into issuing compensation or sending a customer message.

## Objectives

In this mission, you'll learn:

1. How to verify the environment and integration before querying business data.
1. How to establish that an activated skill was retrieved and used.
1. How current approval history changes the recommended next action.
1. How to review customer drafts for unsupported commitments.

## Discovery Is Not a Permission Grant

Cowork uses the connected identity's access to retrieve skills and data. Activating or sharing a skill does not bypass record security, and installing an integration does not prove it connected to the intended environment.

Think of Cowork as the briefing desk, not the fulfillment counter. It can assemble an actionable recommendation, but the action still needs its own authorization and evidence.

| Request | Current evidence | Appropriate next step |
| --- | --- | --- |
| REQ-3006 | Finance approved $749 after an earlier information request; shipment not confirmed | Fulfillment review |
| REQ-3002 | Reviewer still needs tenure and prior-credit confirmation | Gather information and return for Manager review |

## Lab 9: Connect and Verify

### Lab 9.1: Connect Business apps

1. Open [Microsoft Copilot](https://copilot.cloud.microsoft.com) with your approved work account.
1. Select **Cowork**.
1. Select **Customize** in the left navigation.
1. Under **Discover**, locate **Business apps (preview)**.
1. Review the integration and your administrator's approval requirements.
1. Select **Install** only if it is approved for your account.
1. Under **MCP servers**, select **Connect** for Business apps if needed.
1. Complete the Microsoft authentication flow with the same course account.
1. Return to Cowork and select **New task**.

If the integration is missing or blocked, ask your administrator to confirm availability and client access. Do not install an unrelated connector or switch to a different tenant.

### Lab 9.2: Establish the destination

1. Enter:

    ```text
    List the Dataverse environments I can access through Business apps.
    Do not change any records.
    ```

1. Compare the returned environment with the name, ID, and URL from Mission 00.
1. Enter:

    ```text
    Use only my Zava Support course environment:
    <environment name>, <environment ID>, <environment URL>.
    Confirm the target before retrieving data.
    Find the active Zava Recovery Follow-through Planner business skill
    in this environment and retrieve its instructions.
    Tell me if it cannot be found or retrieved. Do not substitute another
    environment, invent instructions, or change records.
    ```

1. Inspect the connection and skill-retrieval activity where the UI exposes it.

> [!IMPORTANT]
> Review permission prompts for the actual tool and action. Approve only the read-only retrieval needed by the exercise. Do not select **Always allow do action** merely because the workshop did. If the requested action could write, ask the agent to identify it and use the appropriate read-only operation.

If a connection is still initializing, retry the read-only check after it settles. A persistent authentication, policy, or environment error requires resolution, not a different target.

## Lab 10: Compare Two Recovery Plans

### Lab 10.1: Review the approved replacement

1. Enter:

    ```text
    In the confirmed Zava environment, use the active
    Zava Recovery Follow-through Planner business skill for REQ-3006.
    Retrieve and follow the stored instructions, including its
    Next-action handoff output. Read only.
    Do not approve, update, fulfill, send a message, or promise a delivery.
    ```

1. Verify the response uses the actual approval history:

| Evidence | Required interpretation |
| --- | --- |
| DEC-4005, September 8: Needs More Information | Historical request for service history |
| DEC-4006, September 10: Approved, Finance, $749 | Later approval after service history was confirmed |
| Request Status Approved; notes say replacement approved | Approval exists; shipment is not established |

1. Confirm the next step is **fulfillment review**, not gathering the already-resolved service history.
1. Inspect the customer draft for unsupported shipment or delivery claims.
1. Confirm the handoff names a responsible role and identifies information needed before proceeding.

An acceptable draft might say:

> Your replacement has been approved. Our service team will confirm the fulfillment arrangements and provide an update when those details are available.

This is a wording example, not a message to send. The response must remain consistent with the live records.

### Lab 10.2: Review the outstanding information request

1. Enter:

    ```text
    Use the same active recovery follow-through business skill for REQ-3002
    in the confirmed environment. Identify the current blocker and prepare
    a customer-response draft and Next-action handoff.
    Do not change records or send anything.
    ```

1. Verify the request is **$150**, **Goodwill Credit**, **Fabrikam Residences**, and **Manager** review.
1. Confirm the unresolved questions are **subscription tenure** and **credits in the last 12 months**.
1. Confirm it does not treat the justification's three-year history as the requested independent confirmation.
1. Confirm the customer draft says the request remains under review and does not promise the credit.
1. Confirm the handoff separates information the service team should verify internally from anything the customer must provide.

### Lab 10.3: Verify the shared skill, not a copied prompt

1. Inspect available activity details for skill discovery/retrieval and data reads.
1. Compare the returned **Next-action handoff** with the active skill definition from Mission 08.
1. Ask which stored skill was used if the client provides insufficient context.
1. Record any inability to verify retrieval rather than claim proof from the agent's assertion alone.
1. Confirm the exercise created no approvals, fulfillment actions, or sent messages.

## Debrief: What Your Intelligence System Now Does

You built the support foundation and recovery schema, separated persona privileges, and enforced policy-based routing at save time. You then added process knowledge and a shared vocabulary so agents can explain the same records responsibly.

The approved replacement and outstanding goodwill request illustrate the central lesson: **one procedure, different evidence, different next actions**. The system helps people act consistently without taking their decisions away.

## Mission Complete

You have demonstrated **skill discovery**, **evidence-based next actions**, and **customer drafts without unsupported commitments**.

Continue to [Draft Badge Completion](../course-completion-badges-intelligence-officer/) to review your course evidence. Badge claiming is not available yet.

## Tactical Resources

- [Use business skills](https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skills#use-business-skills)
- [Manage AI experience access](https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access)
- [Work IQ MCP overview](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/overview)

<analytics-tag section="intelligence-officer" mission="09-cowork-recovery" />
