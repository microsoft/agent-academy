---
description: 'Turn Dataverse business data into governed decisions with Business Applications in Work IQ.'
search: false
hide: true
preview: 'Draft course: preview feature access is required. Badge claiming is not available yet.'
next:
  text: 'Course Setup'
  link: /intelligence-officer/00-course-setup/
lastUpdated: false
---

# Welcome, Intelligence Officer

**Your assignment: turn scattered business records into intelligence people can trust.** Build a governed service-recovery process for **Zava**, a premium coffee brand, using **Dataverse**, **Business Applications in Work IQ**, **GitHub Copilot**, **Power Apps**, and **Copilot Cowork**.

Zava sells connected espresso machines, commercial brewers, accessories, and subscriptions. When something goes wrong, its service team must decide whether to request a replacement, refund, or goodwill credit. Today, those requests disappear into spreadsheets, email, and informal approvals.

In **Operation Recovery Intelligence**, you'll connect the customer story to policy, approval history, and the next responsible action. You'll build the data foundation, enforce routing with a server-side plugin, and teach agents to explain the evidence without making decisions on someone's behalf.

> [!IMPORTANT]
> This is a draft, direct-link-only course adapted from the **PPCC 2026 workshop, Agents Meet Business Applications in Work IQ**. It isn't listed in the site's navigation, mission grids, or local search. Its pages and downloads are still public to anyone with their URLs.

## Mission Objective

By completing this course, you'll be able to:

1. Build a solution-aware Dataverse application with explicit schema contracts.
1. Separate service, approval, and fulfillment responsibilities.
1. Apply deterministic approval-routing rules across apps and integrations.
1. Ground business skills in live records, approval history, and a documented procedure.
1. Enrich natural-language data access with semantic models, views, and glossary terms.
1. Use Copilot Cowork to recommend next actions and draft customer updates without inventing approvals.

## Who This Is For

This course is for makers, developers, and solution architects who understand basic Power Platform concepts and want to connect business applications to agents. Familiarity with [Recruit](/recruit/) is helpful; the Zava setup does not require completing the Operative hiring scenario.

The course uses **one learning path**. GitHub Copilot CLI is a development tool in these missions, not a choice between Copilot Studio authoring harnesses.

## Prerequisites

| Requirement | Why you need it |
| --- | --- |
| A work or school tenant and a nonproduction Dataverse environment | Create tables, roles, skills, and a model-driven app without changing production data |
| Administrator assistance and environment customization permissions | Enable Work IQ participation, configure access, create roles, and register a plugin |
| Power Apps rights covering Dataverse and model-driven apps | Build and run Zava Support |
| GitHub Copilot access that includes Copilot CLI | Use the Dataverse plugin for coding agents |
| Windows, PowerShell, Python, VS Code, .NET SDK, and .NET Framework developer tools | Use the supplied Windows-based loader and build the Dataverse plugin |
| Business Applications in Work IQ preview access | Use business skills and semantic models |
| Microsoft 365 Copilot and Copilot Cowork access, with the Business apps integration permitted | Complete the chat and Cowork missions |

> [!WARNING]
> A developer environment alone does **not** grant Work IQ, the workshop's newer Skill Builder UI, or Cowork access. Confirm availability with your administrator in [Mission 00](./00-course-setup/). If a capability is unavailable, stop at that checkpoint rather than substitute a different tenant or claim the mission is complete.

Underlying services can incur usage charges during preview. Review the [Work IQ licensing requirements](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview#licensing-requirements) and your organization's GitHub, Power Apps, and Microsoft 365 entitlements. This course does not provide a conference account, a tenant, or a license.

## Curriculum Overview

Complete the missions in order. Every mission includes theory, copyable prompts or UI steps, and evidence checkpoints.

| Mission | Title | Operation briefing |
| --- | --- | --- |
| `00` | [Prepare Your Environment](./00-course-setup/) | Confirm access, tools, environment identity, and preview prerequisites |
| `01` | [Understand Business Applications in Work IQ](./01-business-applications-work-iq/) | Map Zava's process and establish human decision boundaries |
| `02` | [Build the Zava Data Foundation](./02-data-foundation/) | Create the support foundation, solution, tables, and relationships |
| `03` | [Define the Security Model](./03-security-model/) | Configure and inspect three persona roles |
| `04` | [Load Data and Extend the App](./04-data-and-model-driven-app/) | Import the supplied records and expose them in Zava Support |
| `05` | [Enforce Approval Routing](./05-approval-routing-plugin/) | Build and verify a deterministic server-side plugin |
| `06` | [Author Business Skills with GitHub Copilot](./06-business-skills/) | Create the summary and readiness skills |
| `07` | [Enrich Business Meaning](./07-semantic-model/) | Add views, glossary terms, and semantic-model context |
| `08` | [Manage Skills in Power Apps](./08-skill-builder/) | Build and evolve a procedure-driven follow-through skill |
| `09` | [Apply Recovery Skills in Cowork](./09-cowork-recovery/) | Turn request evidence into recommendations and customer drafts |
| Completion | [Draft Badge Completion](./course-completion-badges-intelligence-officer/) | Review your evidence; badge artwork and claiming are pending |

## Your Field Kit

Download the [Zava sample data](./04-data-and-model-driven-app/#lab-41-load-the-sample-records) when you reach Mission 04 and the [recovery follow-through procedure](./08-skill-builder/#lab-81-create-the-follow-through-planner) in Mission 08. The data package includes its Python loader; keep its files together and preserve their names.

There is no prebuilt support app to import. Mission 02 creates the custom Case table and Zava Support app assumed by the original workshop.

## Rules of Engagement

**The tables hold the facts. The plugin routes. The skills explain. Authorized people approve and fulfill.**

Use only the confirmed development environment. Review every proposed write and permission request. Do not paste passwords into prompts, grant persistent blanket permissions, or treat an agent's confident answer as evidence that an operation succeeded.

<analytics-tag section="intelligence-officer" />
