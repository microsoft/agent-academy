---
hide: true
preview: true
prev:
  text: Publish your agent
  link: /recruit-nextgen/08-publish-your-agent
next:
  text: Securing Your Recruit Badge
  link: /recruit-nextgen/course-completion-badges-recruit
short-description: Learn how licensing and usage-based billing work for the GitHub Copilot harness
difficulty: 1
codename: OPERATION KNOW WHAT YOU OWE
time: 20
tags:
  - licensing
products:
  - copilot-studio
  - microsoft-365
industries:
  - it
created-date: 2025-08-20
last-edited-date: 2026-08-04
---
# 🚨 Mission 09: Understanding Licensing {#mission-09-understanding-licensing}

<mission-meta />

## 🎯 Mission Brief {#mission-brief}

Welcome, Recruit. Before you deploy an agent, you need to know which **harness** powers it. The harness affects capabilities, architecture, and billing.

The agent and workflows in this course run on the **GitHub Copilot harness**. They use **Copilot Credits for usage-based billing** during LLM-powered creation experiences and runtime execution. This differs from the billing exceptions available to eligible Microsoft 365 Copilot users with standard or Copilot chat harness agents in authenticated employee scenarios.

That distinction matters before a pilot becomes a production service. Costs aren't determined only by how many employees can open the agent. The models, managed runtime, organizational context, tools, task complexity, and LLM-powered maker experiences all affect consumption. Teams need to understand those factors so they can estimate usage, monitor actual spend, and manage credits across the organization.

You'll compare the billing models associated with each Copilot Studio harness, identify which GitHub Copilot harness activities consume credits, and review how administrators purchase and manage capacity. You'll also separate user licensing from usage capacity: an employee's Microsoft 365 Copilot license doesn't replace the Copilot Credits required by this course's agent.

This mission closes the build path with the operational context needed to run the `Contoso IT Concierge` responsibly. You won't calculate a detailed budget, but you will leave with the vocabulary and decision points needed to discuss harness choice, expected consumption, and capacity planning with platform owners.

## 🔎 Objectives {#objectives}

In this lesson, you'll learn:

1. Why harness choice changes the Copilot Studio billing model
1. What usage can consume Copilot Credits on the GitHub Copilot harness
1. How models, runtime, context, and tools drive GitHub Copilot harness consumption
1. How administrators purchase, allocate, and monitor credits
1. How GitHub Copilot harness billing differs from standard and Copilot chat harness billing

## 🧠 Harness Choice Determines Billing {#harness-choice-determines-billing}

Every agent or workflow in Copilot Studio runs on a harness:

| Harness | Best for | Billing model |
| --- | --- | --- |
| **GitHub Copilot harness** | End-to-end business processes and agentic experiences | **Copilot Credits** during LLM-powered creation and runtime execution |
| **Standard harness** | Rule-based agents with predefined topics and flows | **Copilot Credits**; published rates don't apply to licensed Microsoft 365 Copilot users in authenticated business-to-employee scenarios |
| **Copilot chat harness** | Extending Microsoft 365 Copilot Chat with organizational knowledge | **Copilot Credits**; published rates don't apply to licensed Microsoft 365 Copilot users in authenticated business-to-employee scenarios |

> [!IMPORTANT]
> The authenticated business-to-employee billing exception for eligible Microsoft 365 Copilot users applies to standard and Copilot chat harness rates. It doesn't apply to GitHub Copilot harness usage, which consumes Copilot Credits during LLM-powered creation and runtime execution.

## 💳 What Drives Runtime Consumption {#what-drives-runtime-consumption}

For GitHub Copilot harness agents and workflows, runtime consumption increases with the complexity of the work. The guide identifies four cost drivers:

- **Models:** The AI models selected for each task, which can vary in quality, speed, and cost.
- **Runtime:** The managed cloud orchestration that runs agents, including long-running work.
- **Context:** Organizational context drawn from sources such as emails, files, meetings, and past interactions.
- **Tools:** Actions the system takes, such as retrieving data, sending email, scheduling meetings, or updating documents.

Because these factors interact, use representative scenarios to estimate consumption. Actual usage varies with task complexity.

## 🛠️ Billing Starts While You Build {#billing-starts-while-you-build}

GitHub Copilot harness agents and workflows consume credits during LLM-powered creation experiences and runtime execution. Creation usage includes:

- **Natural-language authoring:** Consumption is based on conversation turns during a creation session. More iterative sessions generally use more credits.
- **Preview and Evaluation:** Consumption is equivalent to agent runtime usage.

Manual configuration, including work performed in the **Build** and **Monitor** tabs, doesn't consume Copilot Credits. Published agents and workflows consume credits during runtime execution.

> [!TIP]
> Estimate consumption with representative scenarios that reflect the models, context, tools, and task complexity expected in production. Preview and Evaluation are useful evidence because their consumption is equivalent to runtime usage.

## 🧾 Purchasing and Managing Copilot Credits {#purchasing-and-managing-copilot-credits}

The August 2026 guide identifies two primary purchase options:

- **Microsoft Copilot Studio Pay-As-You-Go Copilot Credit:** Organizations pay after the billing month for the credits agents consumed. The meter can be provisioned in the **Power Platform admin center**.
- **Copilot Credit Pre-Purchase Plan (P3):** Organizations purchase an annual pool of credits in advance. Credits are deducted from the pool as they are used, and unused credits expire at the end of the annual term. The plan can be provisioned in the **Azure admin portal**.

Copilot Credits are pooled at the tenant level. Microsoft also offers other purchasing constructs, so confirm the appropriate option in the current Copilot Studio licensing documentation.

Because pricing and purchase options can change, use the current Microsoft licensing documentation rather than hard-coding a rate into an architecture decision.

## 📊 Monitoring Usage {#monitoring-usage}

Copilot Credit usage and spend are centrally governed through the **Microsoft 365 admin center** across supported workloads, services, and agents. Administrators can:

- Monitor organization-wide usage and spend
- Configure spend policies
- Define usage thresholds
- Manage Copilot Credit allocation across the organization

For Copilot Studio-specific capacity management, use the **Power Platform admin center** to review consumption by agent and environment, allocate prepaid credits to environments, configure overage behavior, and set agent limits.

Review natural-language authoring, Preview, Evaluation, and runtime usage so production estimates reflect representative agent behavior.

## 🧭 Applying This to the Recruit Course {#applying-this-to-the-recruit-course}

The `Contoso IT Concierge` uses the GitHub Copilot harness because it combines goal-driven orchestration with knowledge, a skill, connector tools, and a workflow.

For this course:

- Natural-language authoring consumes Copilot Credits based on conversation turns.
- Preview and Evaluation consume credits at rates equivalent to runtime usage.
- Manual configuration in the **Build** and **Monitor** tabs doesn't consume Copilot Credits.
- Runtime consumption is driven by models, runtime, context, tools, and task complexity.
- An existing Microsoft 365 Copilot user license doesn't replace GitHub Copilot harness usage-based billing.

## ✅ Mission Complete {#mission-complete}

You now understand that Copilot Studio doesn't have one universal billing treatment. This course's GitHub Copilot harness consumes Copilot Credits during LLM-powered creation and runtime execution, while manual Build and Monitor configuration doesn't.

You can now:

✅ **Compare harness licensing models**: Explain why billing and entitlements differ across Copilot Studio harnesses.

✅ **Identify Copilot Credit usage**: Recognize which authoring, testing, and runtime activities consume credits.

✅ **Plan usage-based billing**: Describe how GitHub Copilot harness consumption is funded and managed.

✅ **Distinguish licenses from capacity**: Explain why a Microsoft 365 Copilot user license doesn't replace Copilot Credit capacity.

⏭️ [Move to **Securing Your Recruit Badge**](../course-completion-badges-recruit/index.md) to complete the Recruit path.

## 📚 Tactical Resources {#tactical-resources}

- 📘 [Microsoft Copilot Credits Guide - August 2026](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/bade/documents/products-and-services/en-us/ai/Microsoft-Copilot-Credits-Guide-August-2026.pdf)
- 🧭 [Choose a harness in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview)
- 💳 [Usage-based billing for the GitHub Copilot harness](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/billing-credit-overview)
- 🧾 [Purchase and manage Copilot Credits](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/billing-manage-buy-credits)
- 📊 [Manage Copilot Studio credits and capacity](https://learn.microsoft.com/en-us/power-platform/admin/manage-copilot-studio-messages-capacity)
- 📄 [Standard harness licensing and billing](https://learn.microsoft.com/en-us/microsoft-copilot-studio/billing-licensing)

<analytics-tag section="recruit-nextgen" mission="09-understanding-licensing" />
