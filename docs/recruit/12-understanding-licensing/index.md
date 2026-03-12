---
prev:
  text: 'Publish your agent'
  link: '/recruit/11-publish-your-agent'
next:
  text: 'Securing Your Recruit Badge'
  link: '/recruit/course-completion-badges-recruit'
---

# 🚨 Mission 12: Understanding Licensing

## 🕵️‍♂️ CODENAME: `OPERATION KNOW WHAT YOU OWE`

> **⏱️ Operation Time Window:** `~15 minutes – intel only, no fieldwork required`  

## 🎯 Mission Brief

Welcome, Recruit. Before you deploy agents into production, you need more than working prompts and polished responses. You need a clear picture of how those agents are measured and billed. Licensing surprises tend to show up *after* an agent goes live, when usage scales and costs climb faster than expected.

This mission exists to prevent that moment. You'll learn how Copilot Studio usage is tracked, how different deployment choices affect cost, and why planning before publishing matters. Get this right and you'll design agents that are not only effective, but sustainable.

Think of it as your cost-control briefing.

## 🔎 Objectives

In this lesson, you'll learn:

1. How Copilot Studio licensing works using the Copilot Credits consumption model
1. How Copilot Credits are acquired through pay-as-you-go, capacity packs, and prepaid commitments
1. What Microsoft 365 Copilot user licenses include and where Copilot Studio credits are still required
1. How different agent scenarios (internal, external, automated, and integrated) affect credit consumption
1. How to plan, estimate, and monitor usage to avoid unexpected costs when deploying agents at scale

## 🔎 What are Copilot Credits?

Copilot Credits are the **currency used to measure usage** in Copilot Studio. Think of them like a utility meter: the more work your agent does, the more the meter runs.

[Copilot Credits measure the time and effort your agent needs to retrieve information, respond to prompts, and use any actions or custom skills.](https://learn.microsoft.com/en-us/microsoft-copilot-studio/billing-licensing) Credits are consumed whenever an agent looks up information, answers a question, or runs workflows and actions. Every topic invocation, tool call, grounding operation, and custom skill uses Copilot Credits. Simple answers cost less than complex multi-step actions.

With the exception of testing in the embedded test chat, every time your agent does real work, it uses Copilot Credits.

> **Note:** [Starting September 1, 2025, the common currency for agents changed from *messages* to *Copilot Credits*. There is no change in the quantity per prepaid pack or to the pay-as-you-go rate.](https://learn.microsoft.com/en-us/microsoft-copilot-studio/billing-licensing)

## How Copilot Studio Licensing Works

[Copilot Credits are available through pay-as-you-go meters, pre-purchase plans, and Copilot Credit prepaid pack subscriptions.](https://learn.microsoft.com/en-us/microsoft-copilot-studio/billing-licensing)

### 1. Copilot Studio Pay-As-You-Go (PAYGO) Meter

[Pay-as-you-go is a way to pay for Copilot Studio using an Azure subscription, which allows you to get started building agents without any license commitment or upfront purchasing.](https://learn.microsoft.com/en-us/microsoft-copilot-studio/billing-licensing) At the end of each month, your organization pays only for the actual Copilot Credits its agents used.

- No upfront commitment
- Billed at **$0.01 per Copilot Credit** via Azure
- Requires an active **Azure subscription** linked to your Power Platform environment via a billing policy
- Good fit for early development, variable usage, or when you are not ready to predict monthly volume

### 2. Copilot Studio License (Copilot Credit Capacity Pack)

- Monthly subscription: **25,000 Copilot Credits per pack** at **$200/pack/month**
- Capacity pools at the tenant level; multiple packs can be purchased and stacked
- [Unused credits do not roll over month to month](https://learn.microsoft.com/en-us/microsoft-copilot-studio/billing-licensing)
- Works best for predictable, production-level usage
- Microsoft strongly recommends also setting up PAYGO as a backup, so agents keep running if you exceed pack capacity mid-month

### 3. Copilot Credit Pre-Purchase Plan (P3)

[This is a one-year, prepaid option for Copilot Credits. A pool of Copilot Credit Commit Units (CCCUs) is usable across Microsoft eligible products.](https://learn.microsoft.com/en-us/microsoft-copilot-studio/billing-licensing) This includes Copilot Studio, Dynamics 365 first-party agents, and Copilot Chat.

- Credits are purchased as **Copilot Credit Commit Units (CCCUs)**
- Each CCCU is worth **$1 and converts to 100 Copilot Credits**
- Annual tiered discounts make this the most cost-effective option at scale
- Unused CCCUs **expire at the end of the annual term** (different from capacity packs, which expire monthly)
- Best for large agent fleets or organizations that want simplified governance across multiple workloads

## 📌 Copilot Studio User Licenses

Even with capacity in place, your makers need the right access:

- **Copilot Studio Tenant License** (credit capacity pack or pay-as-you-go) enables Copilot Studio in your tenant
- **Copilot Studio User License** (no cost) must be assigned to any person who will create or manage agents

This separation lets admins control capacity while individual makers build agents independently.

> **Note for P3 customers:** When using the Pre-Purchase Plan, builder access is granted through the **Copilot Studio Author** setting in the Power Platform Admin Center. You create a security group in Azure/Entra, assign your makers to it, and then assign that group to the Copilot Studio Author setting. No individual user licenses are assigned.

## 🧠 What Microsoft 365 Copilot Licenses Include

Microsoft 365 Copilot ($30/user/month) gives licensed users:

- Copilot access in Word, Teams, Outlook, Excel, and other Microsoft 365 apps
- [Agent capabilities in Copilot Studio when used in Microsoft 365 Copilot, Teams, or SharePoint](https://learn.microsoft.com/en-us/microsoft-copilot-studio/billing-licensing) at no additional cost, subject to fair use limits

### When is usage actually free for M365 Copilot licensed users?

The billing rates table on Microsoft Learn shows "No charge" across every feature type — classic answers, generative answers, agent actions, agent flows, AI tools, all of it. That might look like a blanket free pass, but there is an important footnote attached to that column.

[The "No charge" rate applies to employee-facing (Business to Employee) scenarios when **both** of the following are true: the user interacting with the agent is licensed with Microsoft 365 Copilot, and the agent is operating using that user's authenticated Microsoft 365 Copilot identity.](https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management) Usage is also subject to fair use limits.

So the question is not "what feature is being used?" but "who is using the agent, and under what identity?"

**Copilot Studio credits are consumed when:**

- The user interacting with the agent does **not** have an M365 Copilot license
- The agent is published to an **external channel** (a website, app, or social platform) where it cannot operate under an authenticated M365 Copilot user identity
- The agent is running **autonomously** (not triggered by a licensed user's interaction)

**No Copilot Studio credits are consumed when:**

- An M365 Copilot-licensed user is interacting with the agent through Teams, SharePoint, or Microsoft 365 Copilot Chat, using their authenticated identity — regardless of whether the agent uses classic answers, generative answers, agent flows, or AI tools

### Simple rule of thumb

- **M365 Copilot-licensed user, authenticated, internal channel** → no Copilot Studio credits (fair use applies)
- **Unlicensed user, external channel, or autonomous trigger** → consumes Copilot Studio credits

## 💰 Credit Billing Rates at a Glance

[The number of Copilot Credits an agent consumes depends on the design of the agent, how often customers interact with it, and the features they use.](https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management) Here is what each feature type costs:

| Agent Feature | Cost | M365 Copilot Licensed User |
| ------------- | ---- | -------------------------- |
| Classic answer | 1 credit | No charge |
| Generative answer | 2 credits | No charge |
| Agent action | 5 credits | No charge |
| Tenant graph grounding | 10 credits | No charge |
| Agent flow actions (per 100 actions) | 13 credits | No charge |
| AI tools: basic (per 10 responses) | 1 credit | No charge |
| AI tools: standard (per 10 responses) | 15 credits | No charge |
| AI tools: premium / reasoning (per 10 responses) | 100 credits | No charge |
| Content processing tools (per page) | 8 credits | No charge |

A single agent interaction can hit multiple billing lines at once. For example, [an agent grounded in a tenant graph could use 12 Copilot Credits (10 for tenant graph grounding and 2 for a generative answer) to respond to a single complex prompt.](https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management)

> **Note on reasoning models:** When an agent uses a reasoning-capable model, [billing applies two meters: the standard feature rate for the action performed, plus the premium AI tools rate (100 credits per 10 responses) for the additional compute required for deep reasoning and multi-step inference.](https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management)

> **Note on bring-your-own models:** Azure Foundry (custom) models are billed separately and are not covered by these rates.

## ⚠️ Overage Enforcement

Capacity is enforced monthly. If you exceed your purchased credits:

- [Enforcement is triggered when a tenant reaches 125% of their prepaid capacity.](https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management)
- Custom agents are disabled. Active conversations finish, but all subsequent invocations are rejected until capacity is increased or reset.
- End users see a message like "This agent is currently unavailable. It has reached its usage limit."
- The tenant admin receives an email notification and a notice in the Power Platform Admin Center.

The fix: reallocate existing tenant capacity, purchase more packs, or set up PAYGO as a safety net so overages are billed rather than blocked.

## 📊 Capacity Planning Tips

Before you launch an agent:

- **Estimate consumption** using the [Copilot Studio Agent Usage Estimator](https://aka.ms/copilotstudioestimator) to forecast credits per agent per month
- **Disable unused tools**: tools you are not using still cost credits if left enabled
- **Combine credit packs + PAYGO** to avoid service interruptions if a pack runs dry mid-month
- **Assign Copilot Studio User Licenses** to all builders before they try to access the tool
- **Monitor consumption** in the Power Platform Admin Center under Billing > Licenses > Copilot Studio

> [!TIP]
> ✅ Run the Usage Estimator early in planning, then again after building your agent to compare projected vs. actual usage. The gap is usually instructive.

## 🧠 Real-World Licensing Scenarios

| Scenario | Licensing / Credits |
| -------- | ------------------- |
| M365 Copilot-licensed user interacting with an internal Teams agent (classic or generative answers, tenant graph grounding) | Covered by M365 Copilot license (fair use limits apply) |
| Agent with Power Automate/connector actions, used by M365 Copilot-licensed user in internal channel | No charge (fair use applies) |
| Agent with Power Automate/connector actions, used by unlicensed user or on external channel | Uses Copilot Credits |
| Autonomous agents (no authenticated M365 Copilot user identity) | Uses Copilot Credits |
| Published on external web or system | Uses Copilot Credits |
| Non-M365 Copilot licensed users interacting with any agent | Uses Copilot Credits |
| Agent using a reasoning model | Uses standard feature rate + premium AI tools rate |
| Maker building agents | Requires Copilot Studio User License (no cost) |

## 🏁 Mission Complete

You now understand:

- How **Copilot Credits** work and what changed in September 2025
- What Microsoft 365 Copilot licenses include and where they stop
- How to choose between capacity packs, pay-as-you-go, and the Pre-Purchase Plan
- What each feature type costs and how overage enforcement works

With this in place, you can design agents with cost in mind from the start, not after the bill arrives.

## 📚 Tactical Resources

- 📄 [Copilot Studio Licensing & Billing](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing?WT.mc_id=power-170631-apdunnam)
- 📄 [Billing Rates and Management](https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management?WT.mc_id=power-170631-apdunnam)
- 📘 [Power Platform Licensing Guide (November 2025)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/bade/documents/products-and-services/en-us/bizapps/Power-Platform-Licensing-Guide-November-2025.pdf?WT.mc_id=power-170631-apdunnam)
- 📊 [Message Management & Capacity Monitoring](https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity?WT.mc_id=power-170631-apdunnam)

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/12-understanding-licensing" alt="Analytics" />
