---
hide: false
preview: false
prev:
  text: Publish your agent
  link: /recruit-nextgen/08-publish-your-agent
next:
  text: Securing Your Recruit NextGen Badge
  link: /recruit-nextgen/course-completion-badges-recruit
short-description: Learn how licensing and usage-based billing work for the GitHub Copilot harness
difficulty: 1
codename: OPERATION KNOW WHAT YOU OWE
time: 20
harness: github-copilot
credits: 0
tags:
  - licensing
products:
  - copilot-studio
  - microsoft-365
industries:
  - it
created-date: 2026-08-05
last-edited-date: 2026-08-24
---

# 🚨 Mission 09: Understanding Licensing {#mission-09-understanding-licensing}

<mission-meta />

<mission-credits />

## 🎯 Mission Brief {#mission-brief}

You've built and published the `Contoso IT Concierge`. Now it's time to step back from building and consider what operating it could mean for your organization.

This mission isn't another deployment step or a detailed pricing exercise. It's a conceptual follow-up that connects the choices you already made—harness, model, context, tools, and workflows—to their licensing and consumption implications.

The agent and workflow in this course use the **GitHub Copilot harness**. That means LLM-powered creation experiences and runtime execution consume **Copilot Credits**. Publishing can expand usage from a maker's tests to real employee interactions, so platform owners need to understand what drives consumption and how to monitor it.

By the end, you'll be able to explain why harness choice affects billing, recognize the activities and design choices that drive usage, and discuss funding and monitoring with your platform administrators. You won't calculate a production budget or memorize rates.

> [!IMPORTANT] Use the current guide as the source of truth
> Licensing, rates, purchase options, and included entitlements can change. Use the [Copilot Credits Guide](https://aka.ms/CopilotCredits/LicensingGuide) and applicable Microsoft Product Terms when making real licensing decisions. This mission explains the concepts; it doesn't replace those sources or advice from your Microsoft account team or partner.

## 🔎 Objectives {#objectives}

In this lesson, you'll learn:

1. Why harness choice changes the Copilot Studio billing model
1. What usage can consume Copilot Credits on the GitHub Copilot harness
1. How models, runtime, context, tools, and task complexity affect consumption
1. How organizations fund, govern, and monitor Copilot Credit usage

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

The August 2026 guide identifies two primary ways to fund usage:

- **Pay as you go:** Pay after the billing month for the Copilot Credits consumed, with no upfront commitment.
- **Copilot Credit Pre-Purchase Plan:** Purchase an annual pool of credits in advance and draw down from that balance as usage occurs.

Copilot Credits are pooled at the tenant level. Organizations can choose a funding approach based on expected demand, purchasing preferences, and continuity requirements.

Don't hard-code rates, discounts, plan names, or portal procedures into an architecture decision. Confirm those details in the current Copilot Credits Guide and Copilot Studio licensing documentation.

## 📊 Monitoring Usage {#monitoring-usage}

Copilot Credit usage and spend are centrally governed through the **Microsoft 365 admin center** across supported workloads, services, and agents. Administrators can:

- Monitor organization-wide usage and spend
- Configure spend policies
- Define usage thresholds
- Manage Copilot Credit allocation across the organization

For Copilot Studio-specific capacity management, use the **Power Platform admin center** to review consumption by agent and environment, allocate prepaid credits to environments, configure overage behavior, and set agent limits.

Review natural-language authoring, Preview, Evaluation, and runtime usage so production estimates reflect representative agent behavior.

## 🧭 What This Means for Your Published Agent {#what-this-means-for-your-published-agent}

The `Contoso IT Concierge` uses the GitHub Copilot harness because it combines goal-driven orchestration with knowledge, a skill, connector tools, and a workflow.

When thinking about a pilot or production rollout:

- Use representative tasks from the actual business scenario when estimating consumption.
- Include authoring, Preview, Evaluation, and runtime activity in the usage picture.
- Monitor real usage after publishing instead of relying only on an upfront estimate.
- Revisit model, context, and tool choices if consumption or performance differs from expectations.
- Remember that a Microsoft 365 Copilot user license doesn't replace usage-based billing for this GitHub Copilot harness agent.

## ✅ Mission Complete {#mission-complete}

You now understand that Copilot Studio doesn't have one universal billing treatment. This course's GitHub Copilot harness consumes Copilot Credits during LLM-powered creation and runtime execution, while manual Build and Monitor configuration doesn't.

You can now:

✅ **Compare harness licensing models**: Explain why billing and entitlements differ across Copilot Studio harnesses.

✅ **Identify Copilot Credit usage**: Recognize which authoring, testing, and runtime activities consume credits.

✅ **Plan usage-based billing**: Describe how GitHub Copilot harness consumption is funded and managed.

✅ **Distinguish licenses from capacity**: Explain why a Microsoft 365 Copilot user license doesn't replace Copilot Credit capacity.

⏭️ [Move to **Securing Your Recruit NextGen Badge**](../course-completion-badges-recruit/index.md) to complete the Recruit path.

## 📚 Tactical Resources {#tactical-resources}

- 📘 [Copilot Credits Guide](https://aka.ms/CopilotCredits/LicensingGuide)

- 🧭 [Choose a harness in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview)

- 💳 [Usage-based billing for the GitHub Copilot harness](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/billing-credit-overview)

- 🧾 [Purchase and manage Copilot Credits](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/billing-manage-buy-credits)

- 📊 [Manage Copilot Studio credits and capacity](https://learn.microsoft.com/en-us/power-platform/admin/manage-copilot-studio-messages-capacity)

- 📄 [Standard harness licensing and billing](https://learn.microsoft.com/en-us/microsoft-copilot-studio/billing-licensing)

<analytics-tag section="recruit-nextgen" mission="09-understanding-licensing" />
