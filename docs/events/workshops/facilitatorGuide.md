---
title: Facilitator Guide
---

## Facilitator Guide

Everything you need to deliver Agent Academy as a live workshop from timing plans, environment setup, to common issues, and pro tips from facilitators who've been in the room.

**Product and licensing review: November 13, 2026.** Recheck the [Microsoft sources](#product-and-licensing-sources) before each delivery. Availability, licensing, model choices, and preview features can change.

::: tip Before you facilitate
Work through the full curriculum yourself before delivering it live. There's no substitute for having personally hit the friction points your participants will hit.
:::

## Using the slide decks

Choose a [speaker deck](./presentationMaterials) and the matching curriculum before planning your event:

| Workshop | Harness and building blocks | Curriculum |
|---|---|---|
| Recruit (standard course) | Standard harness: topics, knowledge, tools, instructions, and agent flows. Mission 03 separately introduces a declarative agent for Microsoft 365 Copilot. | [Recruit standard course](/recruit/standard/) |
| Operative (standard course) | Standard harness: child and connected agents, prompts, agent flows, and Dataverse grounding. | [Operative standard course](/operative/standard/) |
| Recruit NextGen | Microsoft Copilot harness: instructions, knowledge, tools, skills, and workflows. | [Recruit NextGen](/recruit-nextgen/) |
| Operative NextGen | Microsoft Copilot harness: a Hiring Agent, connected Interview Agent, Dataverse MCP, Python skills, workflows, and evaluations. | [Operative NextGen](/operative-nextgen/) |

Use **Microsoft Copilot harness** for the runtime and **Microsoft Copilot harness experience** for the authoring surface. The product might still show **GitHub Copilot** during the naming rollout; quote the label participants actually need to select. This does not rename the GitHub Copilot coding assistant.

The standard harness is still supported. It can use **classic or generative orchestration**; generative orchestration does not turn it into the Microsoft Copilot harness. Topics and maker-authored child agents belong to the standard course; don't replace them with NextGen skills while delivering that course. See the [harness overview][harnesses] and [Microsoft Copilot harness FAQ][harness-faq].

::: info Open the right authoring surface
For standard courses, open the home page's **…** menu and select **Open classic experience**, or use **Other ways to build** to create a standard-harness agent or agent flow. There is no New Experience on/off toggle to instruct participants to use. See [Access standard harness agents and agent flows][standard-access].
:::

::: info Delivering a NextGen workshop?
Use the full-day agenda in the matching NextGen deck, not the standard-course schedules below. Review [Recruit NextGen setup](/recruit-nextgen/00-course-setup/) or the [Operative NextGen prerequisites](/operative-nextgen/#prerequisites) and [Hiring Hub setup](/operative-nextgen/01-get-started/) before delivery. Operative NextGen builds on Recruit NextGen. Confirm Microsoft 365 Copilot access and Copilot Credits before participants arrive.
:::

Each deck contains: title slide, welcome/agenda/setup/scenario, then for each module: a **divider slide**, a **concept slide** (the "brief presentation"), and a **walkthrough slide** (objectives + steps for the lab).

**How to use them:**

- Open on divider slide while learners settle in from a break
- Show the concept slide as your "stand-and-deliver" intro (3–5 min)
- Leave the walkthrough slide up on a side monitor during the lab
- Recap + Resources slides for wrap-up

## When instructor demos make sense

| Demo when… | Skip the demo when… |
|---|---|
| The UI has > 5 clicks before the first meaningful action | The lab is short (< 15 min) and self-explanatory |
| A failure mode is non-obvious (e.g., schema name conflicts, connection consent, or credit capacity) | Learners can recover from a wrong click in < 30 sec |
| The output is invisible (background flows, triggers firing) | The lab is mostly text authoring (instructions, prompts) |
| > 25% of learners get stuck at the same step in prior runs | Concept slide already shows the end state clearly |

**Rule of thumb:** demo the *first 90 seconds* of any lab where the entry point is ambiguous (where do I click first?). After that, let them work.

## Environment prerequisites

This is the most critical section. Environment issues are the number one reason workshops stall. Get this sorted before anyone arrives.

### What every participant needs

| Requirement | Notes |
|-------------|-------|
| Work or school Microsoft 365 account | Personal @outlook.com, @gmail.com accounts **do not work** |
| Copilot Studio access and environment permissions | Ask the administrator to confirm author access and appropriate Dataverse roles for the chosen course. The Copilot Studio authors setting controls maker access; it does not upgrade a trial license. |
| An administrator-approved lab environment with Dataverse | Use a sandbox, an appropriate trial environment, or a properly licensed managed developer environment. Confirm permissions to create/import solutions, agents, connections, and flows. Don't use production hiring data. |
| Appropriate licenses and credit capacity | Validate authoring, publishing, data-service, and runtime entitlements separately. Use the licensing guidance below rather than assuming a trial covers every lab. |
| Supported, up-to-date browser | Edge or Chrome is convenient for facilitator support; current Firefox and Safari are also [supported][access]. |
| Required service access | SharePoint for Recruit; Dataverse, Outlook, and Teams for Operative. Verify connector consent and tenant data policies in advance. |

::: warning Developer environment changes
Do not require a new unmanaged developer environment or present the Power Apps Developer Plan as a universal setup route. Microsoft has deprecated unmanaged developer environments: new creation ends **November 15, 2026**, suspension starts **December 15, 2026**, and deletion starts **January 15, 2027**. Ask the administrator to provide an approved alternative and export existing lab solutions before suspension. See the [Developer Plan guidance][developer-plan].

Managed Environments do **not** categorically block agent flows. They have licensing and governance requirements; the Developer Plan alone does not include Managed Environments use rights. Follow [Managed Environments licensing][managed-licensing] instead of disabling governance controls.
:::

### Licensing and Copilot Credits

| Scenario | What to arrange before the workshop |
|---|---|
| Standard-harness authoring and embedded test chat | A Copilot Studio trial can create and test agents, but **a trial license alone cannot publish**. Don't promise a fixed trial duration; verify the offer shown at enrollment. |
| Publishing and connected-agent labs | Confirm a non-trial publishing entitlement and tenant/environment capacity or billing setup with the administrator. The authors setting alone is not a publishing entitlement. If unavailable, demonstrate publishing and any dependent connected-agent tests from the facilitator's licensed environment. |
| Standard-harness embedded test chat | The agent's own test-chat activity is not billed in Copilot Credits. Flows and prompt tools can still consume credits; check their meters separately. |
| Standard-harness published employee interactions | Eligible authenticated Microsoft 365 Copilot users have included usage, subject to fair use. For agent flows, inclusion requires **When an agent calls the flow** and the eligible user's authenticated interaction. Other triggers and autonomous activity consume credits. |
| Microsoft Copilot harness (both NextGen courses) | Arrange Microsoft 365 Copilot access and funded Copilot Credits. LLM-powered creation, Preview, testing, evaluations, tools, and runtime execution consume credits. Do not apply the standard-harness employee billing exception to these labs. |
| SharePoint, Teams, Outlook, and the Hiring Hub model-driven app | Check the underlying service entitlements, mailbox provisioning, Dataverse access, and app-use rights. Copilot Credits are not a replacement for every service license. |

Sources: [access and trial restrictions][access], [publishing and test-chat billing FAQ][licensing-faq], [standard-harness billing][standard-billing], [billing rates and inclusion conditions][rates], and [Microsoft Copilot harness usage-based billing][harness-billing]. The [Copilot Credits Guide][credits-guide] and applicable Product Terms govern licensing decisions. Avoid promising a universal cost per interaction or a "free workshop."

### Recruit prerequisites by harness

| Requirement | Notes |
|-------------|-------|
| Standard Recruit | Prepare the IT Help Desk SharePoint site, **Devices** and **Tickets** lists, sample device rows, and the **Image** hyperlink column from [standard setup](/recruit/00-course-setup/). Mission 07 retrieves devices; Mission 08 uses them in Adaptive Cards. Plan appropriate access for Mission 03's declarative-agent exercise and Mission 11's publishing exercise. |
| Recruit NextGen | Complete [NextGen setup](/recruit-nextgen/00-course-setup/), including the **EmployeeAssets** list and course files. Confirm Microsoft 365 Copilot access and Copilot Credits. Don't substitute the standard Devices-list schema for NextGen assets. |

### Operative prerequisites by harness

| Requirement | Notes |
|-------------|-------|
| Standard Operative | Complete standard Recruit or equivalent experience. Download the [Mission 01 solution and sample data](/operative/01-get-started/) and confirm import permissions. Preflight connected-agent publishing, prompt tools, Outlook, Teams, and model-driven app access. |
| Standard Operative Mission 10 | Treat the older User/Calendar MCP exercise as an **optional compatibility lab**. Microsoft now advises against these application-specific preview tools for production or new projects. Verify availability, consent, a configured manager, provisioned test mailboxes, and calendar data before delivery. |
| Operative NextGen | Complete Recruit NextGen and [Hiring Hub setup](/operative-nextgen/01-get-started/). Verify the Dataverse MCP server, connected-agent publishing, Python skills, Outlook/Teams connections, Work IQ access, and funded credits for evaluations. Use synthetic resume data. |

MCP support itself is not a blanket Frontier requirement. Standard-harness MCP requires **generative orchestration**; access to a particular preview service depends on its current requirements and tenant policy. The older standard Mission 10 still describes Frontier enrollment, so do not guarantee that enrollment will make those servers available. If absent, skip that optional lab. For new Microsoft 365 integrations, use [Work IQ on the Microsoft Copilot harness][work-iq] and the NextGen course instead of silently substituting it into standard lab steps. See the [User][user-tools] and [Calendar][calendar-tools] compatibility notices.

## Pre-workshop setup checklist

Arrange approved lab environments with the tenant administrator if possible. Send the checklist **at least 3–5 days before** delivery; provisioning, licensing, consent, and feature availability need time to resolve. Rehearse with the same permissions participants will have, not only a tenant administrator account.

```plaintext
□ Create or confirm a work/school Microsoft 365 account
□ Confirm the course, harness, speaker deck, and curriculum URL
□ Confirm Copilot Studio access, environment roles, and solution permissions
□ Confirm the approved environment and any Managed Environments licenses
□ Confirm publishing entitlement; a trial alone cannot publish
□ Fund and monitor Copilot Credits for the selected labs
□ Verify SharePoint, Outlook, Teams, Dataverse, and app-use entitlements as needed
□ Prepare Devices/Tickets (standard Recruit) or EmployeeAssets (Recruit NextGen)
□ Download/import the matching hiring solution and seed data (Operative)
□ Preflight connector consent, data policies, models, and any preview tools
□ Run a representative flow, prompt, and connected-agent call
□ Test publishing and the target channel, or plan a licensed facilitator demo
□ Use synthetic data; disable workshop triggers and clean up afterward
```

::: warning Setup pages may describe older product behavior
Some linked course setup pages and standard missions still mention the removed New Experience toggle, unmanaged developer environments, or enabling trial publishing through the authors setting. Use the current preflight and Microsoft sources above for those requirements. Keep the actual lab schema and harness consistent; don't ask participants to bypass tenant policy to reproduce an older screenshot.
:::

## Recruit workshop formats

These optional schedules are for the **standard course**. Recruit has Missions 00–12 plus its badge page. The standard deck lists the agenda without fixed timings; treat the guide's times as facilitation targets, not a guarantee that every participant will finish. Reserve extra time for setup and agent flows. For Recruit NextGen, use its deck's separate agenda.

### Full day (7.5 hours)

Best for: Intro to Copilot Studio conference workshops, corporate team training days.

Covers: Missions 01–12, with Mission 00 completed as pre-work. The mission order matches the standard Recruit deck. If you have less time, select missions explicitly or use demonstrations for publishing-dependent exercises rather than promising the full track.

| Time | Activity | Module(s) |
|------|----------|-----------|
| 0:00 | Welcome, logistics, environment check | — |
| 0:15 | Presentation: Introduction to Agents | [01](/recruit/01-introduction-to-agents/) |
| 0:30 | Presentation: Copilot Studio Fundamentals | [02](/recruit/02-copilot-studio-fundamentals/) |
| 0:50 | **Lab: Create a Declarative Agent + Prompt** | [03](/recruit/03-create-a-declarative-agent-for-M365Copilot/) |
| 1:35 | Break | — |
| 1:50 | **Lab: Create a Solution** | [04](/recruit/04-creating-a-solution/) |
| 2:10 | **Lab: Customize the Safe Travels Template** | [05](/recruit/05-using-prebuilt-agents/) |
| 2:45 | Lunch | — |
| 3:30 | **Lab: Create the Custom Agent + Knowledge** | [06](/recruit/06-create-agent-from-conversation/) |
| 4:10 | **Lab: Add the Available Devices Topic + Tool** | [07](/recruit/07-add-new-topic-with-trigger/) |
| 4:45 | Break | — |
| 5:00 | **Lab: Add the Device Request Card** | [08](/recruit/08-add-adaptive-card/) |
| 5:30 | **Lab: Add the Device Request Agent Flow** | [09](/recruit/09-add-an-agent-flow/) |
| 6:05 | **Lab: Add the SharePoint Ticket Event Trigger** | [10](/recruit/10-add-event-triggers/) |
| 6:35 | **Lab: Publish Your Agent** | [11](/recruit/11-publish-your-agent/) |
| 7:00 | Discussion: Licensing and Copilot Credits | [12](/recruit/12-understanding-licensing/) |
| 7:15 | Wrap-up, Q&A, badge guidance | — |
| 7:30 | End | — |

::: tip Full-day tip
Mission 09 (Agent Flows) is the most technically complex in Recruit and the one most likely to run long. Reserve an extra 15 minutes around that lab if your schedule allows.
:::

## Operative workshop formats

These optional schedules are for **standard Operative**, which has 11 hands-on missions plus its badge page. The standard deck omits fixed timings. Use the two-day format to cover the full track; the accelerated day below defers Mission 11. For Operative NextGen, use the separate agenda in its deck.

### Accelerated day (6.5 hours)

Best for: 200 - 300 level Copilot Studio workshops

Covers: Missions 01–09, an optional Mission 10 compatibility demonstration, and wrap-up. Complete Mission 11 afterward or in the two-day format. Do not promise production readiness from a workshop prototype.

| Time | Activity | Module(s) |
|------|----------|-----------|
| 0:00 | Welcome, environment check, solution import | — |
| 0:20 | **Lab: Get started with the Hiring Agent** | [01](/operative/01-get-started/) |
| 0:50 | **Lab: Authoring Agent Instructions** | [02](/operative/02-agent-instructions/) |
| 1:20 | **Lab: Multi-agent with Connected Agents** | [03](/operative/03-multi-agent/) |
| 2:00 | Break | — |
| 2:15 | **Lab: Automate with Triggers** | [04](/operative/04-automate-triggers/) |
| 2:55 | **Lab: Understanding Agent Models** | [05](/operative/05-model-selection/) |
| 3:20 | **Lab: AI Safety and Content Moderation** | [06](/operative/06-ai-safety/) |
| 3:50 | Lunch | — |
| 4:20 | **Lab: Extracting Resume Contents** | [07](/operative/07-multimodal-prompts/) |
| 4:50 | **Lab: Dataverse Grounding** | [08](/operative/08-dataverse-grounding/) |
| 5:20 | Break | — |
| 5:35 | **Lab: Generate an Interview Prep Document** | [09](/operative/09-document-generation/) |
| 6:00 | **Optional demo: MCP compatibility lab** | [10](/operative/10-mcp/) |
| 6:20 | Wrap-up, Q&A, badge submission | — |
| 6:30 | End | — |

### Two-day (Full Operative)

Best for: Deep-dive training where participants want to complete the entire track with discussion time.

#### Day 1 — Operative core

| Time | Activity | Module(s) |
|------|----------|-----------|
| 0:00 | Welcome, environment check | — |
| 0:20 | **Lab: Get started with the Hiring Agent** | [01](/operative/01-get-started/) |
| 0:50 | **Lab: Authoring Agent Instructions** | [02](/operative/02-agent-instructions/) |
| 1:30 | **Lab: Multi-agent with Connected Agents** | [03](/operative/03-multi-agent/) |
| 2:20 | Break | — |
| 2:35 | **Lab: Automate with Triggers** | [04](/operative/04-automate-triggers/) |
| 3:25 | **Lab: Understanding Agent Models** | [05](/operative/05-model-selection/) |
| 4:00 | Lunch | — |
| 4:30 | **Lab: AI Safety and Content Moderation** | [06](/operative/06-ai-safety/) |
| 5:10 | **Lab: Extracting Resume Contents** | [07](/operative/07-multimodal-prompts/) |
| 5:50 | Wrap-up Day 1 | — |
| 6:00 | End | — |

#### Day 2 — Operative advanced

| Time | Activity | Module(s) |
|------|----------|-----------|
| 0:00 | Day 2 welcome, recap | — |
| 0:15 | **Lab: Dataverse Grounding** | [08](/operative/08-dataverse-grounding/) |
| 0:55 | **Lab: Generate an Interview Prep Document** | [09](/operative/09-document-generation/) |
| 1:35 | Break | — |
| 1:50 | **Optional lab: MCP compatibility exercise**, or supervised catch-up if unavailable | [10](/operative/10-mcp/) |
| 2:40 | **Lab: Obtain User Feedback with Adaptive Cards** | [11](/operative/11-obtain-user-feedback/) |
| 3:20 | Open lab / catch-up time | — |
| 4:20 | Discussion: production patterns, what's next | — |
| 5:00 | Badge submission, wrap-up | — |
| 5:30 | End | — |

## Common issues and how to handle them

These are the problems that come up most often in live delivery. Have these answers ready before anyone asks.

### Environment and setup

::: details Trial enrollment fails or shows an error
**Check:** Work/school account eligibility, existing entitlements, and tenant self-service sign-up policy.
**Action:** Ask the tenant administrator to provision approved access. Don't bypass an organization's policy by asking participants to create another tenant. Personal email accounts are not accepted for this trial.
:::

::: details Copilot Studio trial activates but they can't publish agents
**Check:** A trial license alone does not permit publishing. Also check the maker's entitlement, environment roles, and available tenant/environment capacity.
**Action:** Have the administrator validate the supported publishing configuration in the [licensing FAQ][licensing-faq]. The authors setting controls access; it does not remove a trial's publishing restriction. Use a licensed facilitator demonstration if publishing cannot be provisioned.
:::

::: details Environment or flow access is blocked
**Check:** Appropriate licenses for Managed Environments, environment membership, Dataverse roles, connector connections, and tenant data policies.
**Action:** Resolve the specific error with the administrator. Don't turn off Managed Environments or data policies as a generic workaround. If using a legacy unmanaged developer environment, arrange migration before the retirement dates above.
:::

::: details Can't import a solution
**Check:** Correct target environment, provisioned Dataverse, import privileges, capacity, and solution dependencies.
**Action:** Read the import error and resolve its stated dependency or permission issue with the administrator. Confirm that the solution package matches the selected course.
:::

### Recruit-specific (standard course)

::: details SharePoint site URL not working as knowledge source (Mission 06)
**Check:** Site URL, source processing status, authentication, user access, and tenant data policies. Don't promise a fixed indexing time.
**Action:** Use the correct site URL and verify access with the identity used by the agent. Prepare and test the site before workshop day; use a prepared source or demonstration while processing completes.
:::

::: details Devices list Adaptive Card not showing images (Mission 08)
**Cause:** The Image column hyperlink URL is malformed or the device image URLs weren't copied correctly.
**Fix:** Double-check that the Image column was created as type Hyperlink and that the full raw GitHub URLs were used for the device images. Direct image URL should end in `.png`.
:::

::: details Agent flow not appearing as a tool in the agent (Mission 09)
**Check:** The flow must be in the correct environment, published, and configured with **When an agent calls the flow** and **Respond to the agent**. Responses must be synchronous and return within the 100-second action limit.
**Action:** Check the trigger, response settings, connections, and run history. The **Asynchronous response** setting must be **Off**. See [Add an agent flow as a tool][flow-tool]; Managed Environments alone is not the diagnosis.
:::

### Operative-specific

::: details Can't find the Operative starter solution to import
**Cause:** They're looking in the wrong place or haven't downloaded the starter solution.
**Fix:** Point them to the Mission 01 download for **Operative_1_0_0_0.zip**. They import it via Power Apps → Solutions → Import. **Hiring Hub** is the model-driven app inside that solution, not the solution package name.
:::

::: details User/Calendar MCP server is missing or fails (standard Mission 10)
**Check:** This exercise uses older application-specific preview tools now documented for backward compatibility only. Check availability, generative orchestration, authentication/consent, and tenant policies; don't diagnose every MCP error as missing Frontier enrollment.
**Action:** Skip the optional compatibility lab if unavailable. For new projects, direct learners to Work IQ on the Microsoft Copilot harness and Operative NextGen. Never imply that a preview exercise is production-ready.
:::

::: details Dataverse grounding returns no results (standard Mission 08)
**Check:** Standard Mission 08 grounds the **Summarize Resume prompt**, not the agent's Knowledge tab. Check the prompt's Dataverse connection, tables, relationship selection, filters, and seeded rows.
**Action:** Test the prompt with a known record before invoking the agent flow. Check the configured connection identity's permissions; don't assume that a maker-owned tool automatically uses the chat user's identity.
:::

::: details A connected agent's changes are not visible
**Check:** The specialist must be published before the calling agent can use its latest version. Check sharing, authentication, and that both agents use a supported harness combination.
**Action:** Republish the specialist and retest the parent. Standard and Microsoft Copilot harness agents cannot currently invoke each other directly as connected agents. See the [harness FAQ][harness-faq].
:::

::: details Interview document generation or download fails (standard Mission 09)
**Check:** This lab uses the prompt builder's **Document (preview)** output, a supported model, and the supplied Word layout, not a separate "Generate Word doc" flow action. Re-upload the layout after importing a solution; it does not move with the prompt. Current placeholder guidance uses `{{FieldName}}` with no spaces.
**Action:** Test the saved prompt, then the **Doc Prep** intermediary flow, then the **Interview Agent** topic and target channel. The lab returns a file from the flow; if the host cannot deliver it, Microsoft's current article also documents saving the output and returning an access-controlled download link. Rehearse that alternative with the administrator rather than creating publicly accessible resume documents. See [Document output][document-output].
:::

::: details NextGen Preview or evaluations cannot run
**Check:** Copilot Credits, access permissions, model availability, connections, and the error on the failed run.
**Action:** Have the administrator check capacity and any consumption limits. Start with one evaluation case and synthetic data before running a full set. Repeated tests and evaluations on the Microsoft Copilot harness can consume credits.
:::

## Facilitator tips

**Do an environment check before you start.** Reserve the first 15–20 minutes for confirming everyone can access Copilot Studio and is in the right environment. This investment pays back in saved time later.

**Pair people up without sharing credentials.** If someone's environment isn't working, let them observe or co-design with a participant whose environment works while the administrator resolves access.

**Standard Recruit Mission 09 (Agent Flows) needs a buffer.** Participants new to Power Automate need time for connections, expressions, and testing. NextGen workflows have a different authoring surface; rehearse the matching course.

**Standard Operative Mission 10 is optional compatibility content.** Skip unavailable legacy preview tools rather than holding up the workshop. Dataverse MCP and Work IQ in NextGen are different dependencies; preflight them separately.

**Pre-create the SharePoint site the night before.** If you have a demo account, create the Contoso IT SharePoint site, populate the Devices list, and show participants a working version. They can follow along while theirs provisions.

**Have the right badge route ready.** Use the [workshop badge process](./#how-to-get-badges-for-your-event) for Live Graduate and Live Instructor badges. Self-paced course badges have separate completion requirements and forms on each course's badge page.

**Set expectations on progressive difficulty.** Tell participants upfront: it's completely normal not to finish every module. The curriculum is designed to stretch. Better to go deep on fewer modules than rush through all of them.

**Close the lab safely.** Disable event triggers and scheduled workflows, remove test calendar invitations and synthetic hiring data as appropriate, review credit usage, and preserve solutions before trial expiry or environment retirement.

## Resources

- [Agent Academy Curriculum](https://aka.ms/agent-academy)
- [Recruit standard course](/recruit/standard/) and [Recruit NextGen](/recruit-nextgen/)
- [Operative standard course](/operative/standard/) and [Operative NextGen](/operative-nextgen/)
- [Speaker decks](./presentationMaterials)
- [Live workshop badge process](./#how-to-get-badges-for-your-event)
- [Global AI Community account](https://globalai.community/auth/login) — required for badge delivery
- [GitHub Issues](https://github.com/microsoft/agent-academy/issues) — report bugs or content problems

## Product and licensing sources

Reviewed November 13, 2026. These Microsoft pages, the applicable Product Terms, and your licensing agreement take precedence over a deck or an older lab screenshot.

- [Harness overview][harnesses], [standard authoring access][standard-access], and [Microsoft Copilot harness FAQ][harness-faq]
- [Copilot Studio access and trial restrictions][access] and [publishing and test-chat licensing FAQ][licensing-faq]
- [Standard-harness licensing][standard-billing] and [billing rates and included usage conditions][rates]
- [Microsoft Copilot harness usage-based billing][harness-billing] and [Copilot Credits Guide][credits-guide]
- [Developer Plan changes][developer-plan] and [Managed Environments licensing][managed-licensing]
- [Agent flow tool requirements][flow-tool] and [standard-harness MCP requirements][mcp]
- [User tools compatibility notice][user-tools], [Calendar tools compatibility notice][calendar-tools], and [Work IQ on the Microsoft Copilot harness][work-iq]
- [Model availability and release status][models]
- [Prompt document output, layout limits, and flow-mediated delivery][document-output]

[harnesses]: https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview
[standard-access]: https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/switch-experiences
[harness-faq]: https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/faqs-copilot-harness
[access]: https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-licensing-subscriptions
[licensing-faq]: https://learn.microsoft.com/en-us/microsoft-copilot-studio/faq-billing-licensing
[standard-billing]: https://learn.microsoft.com/en-us/microsoft-copilot-studio/billing-licensing
[rates]: https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management
[harness-billing]: https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/billing-credit-overview
[credits-guide]: https://aka.ms/CopilotCredits/LicensingGuide
[developer-plan]: https://learn.microsoft.com/en-us/power-platform/developer/plan
[managed-licensing]: https://learn.microsoft.com/en-us/power-platform/admin/managed-environment-licensing
[flow-tool]: https://learn.microsoft.com/en-us/microsoft-copilot-studio/flow-agent
[mcp]: https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-mcp
[user-tools]: https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-user-tools
[calendar-tools]: https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-calendar-tools
[work-iq]: https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/add-work-iq
[models]: https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-select-agent-model
[document-output]: https://learn.microsoft.com/en-us/microsoft-copilot-studio/generate-document-output-prompt

---

*Have tips from your own delivery? [Open an issue](https://github.com/microsoft/agent-academy/issues) or submit a PR — this guide gets better with every workshop.*
