---
title: Facilitator Guide
---

## Facilitator Guide

Everything you need to deliver Agent Academy as a live workshop from timing plans, environment setup, to common issues, and pro tips from facilitators who've been in the room.

::: tip Before you facilitate
Work through the full curriculum yourself before delivering it live. There's no substitute for having personally hit the friction points your participants will hit.
:::

## Environment prerequisites

This is the most critical section. Environment issues are the number one reason workshops stall. Get this sorted before anyone arrives.

### What every participant needs

| Requirement | Notes |
|-------------|-------|
| Work or school Microsoft 365 account | Personal @outlook.com, @gmail.com accounts **do not work** |
| Microsoft Copilot Studio trial or license | [aka.ms/TryCopilotStudio](https://aka.ms/TryCopilotStudio) — 30-day free trial |
| Power Apps Developer Plan | Required to create a dev environment — [aka.ms/PowerAppsDevPlan](https://aka.ms/PowerAppsDevPlan) |
| A dedicated developer environment | **Not** a managed environment — managed environments block agent flows |
| Modern browser | Edge or Chrome recommended. Firefox works. Safari has known issues |
| Copilot Studio Authors role enabled | Required to publish agents in free trial environments (see setup steps below) |

### Recruit Path Prerequisites

| Requirement | Notes |
|-------------|-------|
| SharePoint site with IT Help Desk template | Created during the [Course Setup Mission](https://microsoft.github.io/agent-academy/recruit/00-course-setup/) |
| Devices list with 4+ sample items + Image column | Required for Mission 07 (Adaptive Cards) |

### Operative Path Prerequisites

| Requirement | Notes |
|-------------|-------|
| Imported solution | Provided in [Getting Started Module](https://microsoft.github.io/agent-academy/operative/01-get-started/) |
| Frontier program access | Required for Mission 10 (MCP) — participants must join [Frontier](https://adoption.microsoft.com/en-us/copilot/frontier-program/) in advance |
| M365 Copilot license (optional) | Required only for publishing to M365 Copilot Chat |

## Pre-workshop setup checklist

We recommend that you provide participants with an environment and do all of the course setup steps if possible. If you require participants to bring their own environment, we suggest you send this to participants **at least 3–5 days before** the event to have them ensure their environment is created. Environment provisioning takes time and trials need to activate.

```plaintext
□ Create or confirm a work/school Microsoft 365 account
□ Sign up for Copilot Studio trial at aka.ms/TryCopilotStudio
□ Sign up for Power Apps Developer Plan at aka.ms/PowerAppsDevPlan
□ Confirm developer environment is created (not a managed environment)
□ Enable Copilot Studio Authors role:
    □ Create a security group in admin.cloud.microsoft
    □ Add yourself to the group
    □ Assign the group to the Copilot Studio Authors role in admin.powerplatform.com
□ Create SharePoint IT Help Desk site (Recruit only)
□ Add Devices list data + Image column (Recruit only)
□ Copy and save your SharePoint site URL (Recruit only)
□ Join the Frontier program (Operative MCP module only)
```

## Recruit workshop formats

The Recruit track has 13 modules (00–12). Total self-paced time is approximately 6–8 hours. Here's how to scope it for a full day workshop.

### Full day (6.5 hours)

Best for: Intro to Copilot Studio conference workshops, corporate team training days.

Covers: Full Recruit track minus licensing discussion.

| Time | Activity | Module(s) |
|------|----------|-----------|
| 0:00 | Welcome, logistics, environment check | — |
| 0:15 | Presentation: Introduction to Agents | 01 |
| 0:35 | Presentation: Copilot Studio Fundamentals | 02 |
| 0:55 | **Lab: Create a Declarative Agent** | 03 |
| 1:25 | **Lab: Creating a Solution** | 04 |
| 1:45 | **Lab: Using a Prebuilt Agent** | 05 |
| 2:00 | Break | — |
| 2:15 | **Lab: Create Agent from Conversation** | 06 |
| 2:55 | **Lab: Add a Topic with Trigger** | 07 |
| 3:35 | Lunch | — |
| 4:05 | **Lab: Add Adaptive Cards** | 08 |
| 4:45 | **Lab: Add an Agent Flow** | 09 |
| 5:25 | Break | — |
| 5:40 | **Lab: Add Event Triggers** | 10 |
| 6:00 | **Lab: Publish Your Agent** | 11 |
| 6:20 | Wrap-up, Q&A, badge submission | — |
| 6:30 | End | — |

::: tip Full-day tip
Mission 09 (Agent Flows) is the most technically complex in Recruit and the one most likely to run long. Build a 15-minute buffer before lunch if you can.
:::

## Operative workshop formats

The Operative track has 11 modules. Total self-paced time is approximately 7–9 hours.

### Full day (6.5 hours)

Best for: 200 - 300 level Copilot Studio workshops

Covers: Full Operative track.

| Time | Activity | Module(s) |
|------|----------|-----------|
| 0:00 | Welcome, environment check, solution import | — |
| 0:20 | **Lab: Get started with the Hiring Agent** | 01 |
| 0:50 | **Lab: Authoring Agent Instructions** | 02 |
| 1:20 | **Lab: Multi-agent with Connected Agents** | 03 |
| 2:00 | Break | — |
| 2:15 | **Lab: Automate with Triggers** | 04 |
| 2:55 | **Lab: Understanding Agent Models** | 05 |
| 3:20 | **Lab: AI Safety and Content Moderation** | 06 |
| 3:50 | Lunch | — |
| 4:20 | **Lab: Extracting Resume Contents** | 07 |
| 4:50 | **Lab: Dataverse Grounding** | 08 |
| 5:20 | Break | — |
| 5:35 | **Lab: Generate an Interview Prep Document** | 09 |
| 6:00 | **Lab: Integrate with MCP Servers** | 10 |
| 6:20 | Wrap-up, Q&A, badge submission | — |
| 6:30 | End | — |

### Two-day (Full Operative)

Best for: Deep-dive training where participants want to complete the entire track with discussion time.

## Day 1 — Operative core

| Time | Activity | Module(s) |
|------|----------|-----------|
| 0:00 | Welcome, environment check | — |
| 0:20 | **Lab: Get started with the Hiring Agent** | 01 |
| 0:50 | **Lab: Authoring Agent Instructions** | 02 |
| 1:30 | **Lab: Multi-agent with Connected Agents** | 03 |
| 2:20 | Break | — |
| 2:35 | **Lab: Automate with Triggers** | 04 |
| 3:25 | **Lab: Understanding Agent Models** | 05 |
| 4:00 | Lunch | — |
| 4:30 | **Lab: AI Safety and Content Moderation** | 06 |
| 5:10 | **Lab: Extracting Resume Contents** | 07 |
| 5:50 | Wrap-up Day 1 | — |
| 6:00 | End | — |

## Day 2 — Operative advanced

| Time | Activity | Module(s) |
|------|----------|-----------|
| 0:00 | Day 2 welcome, recap | — |
| 0:15 | **Lab: Dataverse Grounding** | 08 |
| 0:55 | **Lab: Generate an Interview Prep Document** | 09 |
| 1:35 | Break | — |
| 1:50 | **Lab: Integrate with MCP Servers** | 10 |
| 2:40 | **Lab: Obtain User Feedback with Adaptive Cards** | 11 |
| 3:20 | Open lab / catch-up time | — |
| 4:20 | Discussion: production patterns, what's next | — |
| 5:00 | Badge submission, wrap-up | — |
| 5:30 | End | — |

## Common issues and how to handle them

These are the problems that come up most often in live delivery. Have these answers ready before anyone asks.

### Environment and setup

::: details Trial enrollment fails or shows an error
**Cause:** The tenant admin has disabled self-service sign-up.
**Fix:** The participant needs their IT admin to re-enable self-service purchases, or they need to work in a fresh personal trial tenant created with a work email. Personal @gmail or @outlook accounts won't work.
:::

::: details Copilot Studio trial activates but they can't publish agents
**Cause:** The Copilot Studio Authors role isn't assigned. The trial changed to restrict publishing by default.
**Fix:** Walk them through creating a security group in admin.cloud.microsoft, adding themselves, and assigning it to the Copilot Studio Authors role in admin.powerplatform.com. This is a 10-minute fix but has many steps — ideally done in pre-work.
:::

::: details Developer environment is a managed environment
**Cause:** Organizational IT policy. Managed environments block adding Power Automate flows as agent tools.
**Fix:** They need to create a new non-managed developer environment via the Power Apps Developer Plan. They cannot use a managed environment for these labs.
:::

::: details Can't import a solution
**Cause:** Missing Dataverse access or wrong environment selected.
**Fix:** Confirm they're in their developer environment (not the default environment) and that Dataverse is provisioned. Check the environment selector in the top-right of Power Apps.
:::

### Recruit-specific

::: details SharePoint site URL not working as knowledge source (Mission 06)
**Cause:** Either the site hasn't finished indexing or the URL was copied incorrectly.
**Fix:** Make sure they copy the base SharePoint site URL (e.g. `https://[tenant].sharepoint.com/sites/ContosoIT`) not the URL of a specific page. SharePoint indexing can take a few minutes after site creation — have participants create the site at the start of the day, not when they hit Mission 06.
:::

::: details Devices list Adaptive Card not showing images (Mission 08)
**Cause:** The Image column hyperlink URL is malformed or the device image URLs weren't copied correctly.
**Fix:** Double-check that the Image column was created as type Hyperlink and that the full raw GitHub URLs were used for the device images. Direct image URL should end in `.png`.
:::

::: details Agent flow not appearing as a tool in the agent (Mission 09)
**Cause:** Almost always a managed environment issue.
**Fix:** Confirm they're in a non-managed developer environment. If they are, try refreshing the Copilot Studio page. If the flow still doesn't appear, confirm the flow is in the same environment as the agent.
:::

### Operative-specific

::: details Can't find the Hiring Agent solution to import
**Cause:** They're looking in the wrong place or haven't downloaded the starter solution.
**Fix:** Point them to the Mission 01 instructions which link to the starter solution file. They import it via Power Apps → Solutions → Import.
:::

::: details MCP server connection fails (Mission 10)
**Cause 1:** Participant hasn't joined the Frontier program.
**Cause 2:** Frontier access hasn't propagated yet (can take 24–48 hours after enrollment).
**Fix:** If they don't have Frontier access, skip Mission 10 for now and have them bookmark it for self-paced completion. Don't let this block the rest of the group.
:::

::: details Dataverse grounding returns no results (Mission 08)
**Cause:** The Dataverse table used in the prompt doesn't have data or the connection wasn't set up correctly.
**Fix:** Confirm the AI prompt is connected to the correct Dataverse environment and that the table has rows. The participant may have created the prompt in the wrong environment.
:::

## Facilitator tips

**Do an environment check before you start.** Reserve the first 15–20 minutes for confirming everyone can access Copilot Studio and is in the right environment. This investment pays back in saved time later.

**Pair people up.** If someone's environment isn't working, pair them with someone whose is. They can still learn by co-piloting, and you avoid leaving anyone behind while you troubleshoot.

**Mission 09 (Agent Flows) will take longer than expected.** There are many steps, some UI lag, and participants who've never used Power Automate need orientation. Build extra buffer before and after this one.

**The Frontier/MCP module is an advanced bonus, not a required gate.** If participants don't have Frontier access, skip Mission 10. Don't let it derail your day.

**Pre-create the SharePoint site the night before.** If you have a demo account, create the Contoso IT SharePoint site, populate the Devices list, and show participants a working version. They can follow along while theirs provisions.

**Have the completion badge form link ready.** Many participants finish the track but don't know how to claim their badge. Post the link in chat at the end and walk through it once.

**Set expectations on progressive difficulty.** Tell participants upfront: it's completely normal not to finish every module. The curriculum is designed to stretch. Better to go deep on fewer modules than rush through all of them.

## Resources

- [Agent Academy Curriculum](https://aka.ms/agent-academy)
- [Recruit track](https://microsoft.github.io/agent-academy/recruit/)
- [Operative track](https://microsoft.github.io/agent-academy/operative/)
- [Badge claim form](https://aka.ms/agent-academy-recruit/form)
- [Global AI Community account](https://globalai.community/auth/login) — required for badge delivery
- [GitHub Issues](https://github.com/microsoft/agent-academy/issues) — report bugs or content problems

---

*Have tips from your own delivery? [Open an issue](https://github.com/microsoft/agent-academy/issues) or submit a PR — this guide gets better with every workshop.*
