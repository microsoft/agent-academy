---
search: false
hide: true
preview: true
prev:
  text: 'Build the Zava Data Foundation'
  link: /intelligence-officer/02-data-foundation/
next:
  text: 'Load Data and Extend the App'
  link: /intelligence-officer/04-data-and-model-driven-app/
short-description: 'Separate service, approval, and fulfillment responsibilities with explicit Dataverse role privileges.'
difficulty: 3
codename: OPERATION CLEARANCE CHECK
time: 45
tags:
  - compliance
  - solutions
products:
  - dataverse
  - github-copilot
industries:
  - retail
  - security
created-date: 2026-10-25
last-edited-date: 2026-10-25
---

# Mission 03: Define the Security Model {#mission-03-security-model}

<mission-meta />

## Mission Brief

Zava's service agents submit requests, approvers record decisions, and fulfillment specialists complete approved actions. Those responsibilities should not all receive the same access.

**Operation Clearance Check** turns those personas into explicit Dataverse security roles. You'll ask a coding agent to configure privileges, then read the roles back rather than assume the operation succeeded.

A role is a building access pass, not a complete operating procedure. Giving someone access to a room does not constrain which cabinet they open. In the same way, table Write permission alone does not restrict edits to a particular status or column.

## Objectives

In this mission, you'll learn:

1. How privilege and access depth combine in a Dataverse role.
1. Why role permissions are cumulative across users and teams.
1. How to configure three distinct personas without broadening table access.
1. What role inspection can and cannot prove.

## Roles, Records, and Business Rules

**User** depth applies to records owned by the user, subject to other access mechanisms. **Organization** depth applies across the environment. **Append** allows associating a record with another; **Append To** allows other records to reference it.

Permissions from multiple roles accumulate. A restrictive course role cannot remove rights granted by System Administrator, another role, a team, or sharing.

| Persona | Intended responsibility | Lab role limitation |
| --- | --- | --- |
| Zava Service Agent | Create and maintain own requests | User Write is not limited to Draft records |
| Zava Approver | Read context and create decisions | User Write does not make prior decisions immutable |
| Zava Fulfillment Specialist | Review approved requests and record fulfillment | Organization Write is not limited to fulfillment columns; Read is not filtered to Approved |

> [!WARNING]
> These roles demonstrate the workshop's table-level privilege model, not production-complete process enforcement. Status-transition checks, column security where supported, server-side authorization, record sharing/ownership design, and separate-user testing are additional work. The routing plugin in Mission 05 is **not** that authorization layer.

The Service Agent's User-level Approval Decision Read privilege also does not automatically grant access to decisions owned by approvers merely because their parent request is owned by the agent. Production access requires a deliberate sharing or ownership design.

## Lab 3: Create the Persona Roles

### Lab 3.1: Establish role-authoring rules

1. Confirm your environment identity.
1. Enter:

    ```text
    Create the three course roles in my current user's business unit.
    Include App Opener's necessary platform privileges, but preserve the
    table privilege matrices I supply exactly. Do not copy broader table
    permissions from another role.

    Use Direct User (Basic) access and Team privileges for member privilege
    inheritance where this setting is available. Add each role to existing
    solution ZavaWarrantyGoodwillApproval. Do not create another solution,
    assign roles to users or teams, or change my current roles.

    For each role, read back business unit, solution membership, platform
    privileges, and every specified table privilege and depth. Report
    differences or failures explicitly.
    ```

### Lab 3.2: Create Zava Service Agent

1. Enter:

    ```text
    Create or verify role Zava Service Agent.
    Description: Creates and submits warranty and goodwill requests.

    Use this exact matrix. Every unlisted privilege on these tables is None.
    "User" and "Organization" are access depths.

    zava_warrantygoodwillrequest:
      Create User; Read User; Write User; Append User; Append To User.
      Delete None; Assign None; Share None.
    zava_product: Read Organization; Append To Organization.
    zava_exceptionpolicy: Read Organization; Append To Organization.
    zava_approvaldecision: Read User.
    account: Read Organization; Append To Organization.
    support_incident: Read Organization; Append To Organization.
    systemuser: Read Organization; Append To Organization.

    Apply our shared role-authoring rules and verify the resulting role.
    ```

1. Open **Settings** > **Users + permissions** > **Security roles** for your environment in the admin center.
1. Open **Zava Service Agent** and compare its table privileges with the prompt.

### Lab 3.3: Create Zava Approver

1. Enter:

    ```text
    Create or verify role Zava Approver.
    Description: Reviews warranty and goodwill requests and records decisions.

    Use this exact matrix. Every unlisted privilege on these tables is None.
    zava_warrantygoodwillrequest: Read Organization; Append To Organization.
    zava_product: Read Organization.
    zava_exceptionpolicy: Read Organization.
    zava_approvaldecision:
      Create User; Read Organization; Write User; Append User; Append To User.
      Delete None; Assign None; Share None.
    account: Read Organization.
    support_incident: Read Organization.
    systemuser: Read Organization; Append To Organization.

    Apply our shared role-authoring rules and verify the resulting role.
    Do not give the approver Write permission on requests or policies.
    ```

1. Open **Zava Approver** in **Security roles** and compare its privileges with the prompt.

### Lab 3.4: Create Zava Fulfillment Specialist

1. Enter:

    ```text
    Create or verify role Zava Fulfillment Specialist.
    Description: Records approved warranty and goodwill fulfillment outcomes.

    Use this exact matrix. Every unlisted privilege on these tables is None.
    zava_warrantygoodwillrequest: Read Organization; Write Organization.
    zava_product: Read Organization.
    zava_exceptionpolicy: Read Organization.
    zava_approvaldecision: Read Organization.
    account: Read Organization.
    support_incident: Read Organization.
    systemuser: Read Organization.

    Apply our shared role-authoring rules and verify the resulting role.
    Do not grant Create, Delete, Assign, or Share on requests, or approval
    decision Write permission.
    ```

1. Open **Zava Fulfillment Specialist** in **Security roles** and compare its privileges with the prompt.

## Lab 4: Inspect Without Expanding Access

### Lab 4.1: Audit the configured roles

1. Enter:

    ```text
    Read-only audit of Zava Service Agent, Zava Approver, and
    Zava Fulfillment Specialist in the confirmed environment:
    compare every table privilege and depth with our matrices;
    verify business unit, App Opener platform privileges, and membership
    in ZavaWarrantyGoodwillApproval.

    Flag extra privileges, missing privileges, and any inability to inspect.
    Explain that table Write is not status- or column-specific, that
    parent-request ownership does not automatically grant access to a
    separately owned decision, and that other roles can broaden access.
    Do not modify or assign any role.
    ```

1. Compare each result with the role editor.
1. Record any discrepancy and make only a reviewed, scoped correction.
1. Record that this mission verifies **configuration**, not effective persona isolation.

> [!NOTE]
> Do not remove your own administrative role to simulate a persona. Effective-access testing needs approved separate test users and a review of all their roles, team memberships, sharing, ownership, and app access. It is not proven by a successful administrator query.

## Mission Complete

You have configured **three distinct roles**, inspected **their privilege depths**, and identified **the controls that table privileges do not provide**.

Next: [Mission 04: Load Data and Extend the App](../04-data-and-model-driven-app/).

## Tactical Resources

- [Dataverse security](https://learn.microsoft.com/power-platform/admin/wp-security)
- [Security roles and privileges](https://learn.microsoft.com/power-platform/admin/security-roles-privileges)
- [Assign security roles](https://learn.microsoft.com/power-platform/admin/assign-security-roles)

<analytics-tag section="intelligence-officer" mission="03-security-model" />
