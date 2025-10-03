# Personalizing Agent Responses

--8<-- "disclaimer.md"

## 🕵️‍♂️ CODENAME: `OPERATION ARCHETYPE`

> **⏱️ Operation Time Window:** `~45 minutes`

## 🎯 Mission Brief

Welcome back, Agent. In [Mission 04](../04-agent-instructions/README.md) - you learnt how to define your agent with instructions and invoke tools to equip your agent in handling requests.

Your assignment, should you choose to accept it, is **Operation Archetype** - focusing on the model of the agent and format agent responses for maximum user understanding and shape your agent’s responses to be clear, effective, and on point..

TBC

Choose the right model for your agent and format responses to be impactful and easy to follow.

## 🔎 Objectives

In this mission, you'll learn:

1. TBC
1. TBC
1. TBC
1. TBC
1. TBC

## 🤔 What is the Agent Model?

The _agent model_ is the underlying generative AI engine powering your Copilot agent’s responses. Copilot Studio lets you select which model your agent uses, enabling you to leverage different strengths (speed, output quality, cost, etc.) depending on your scenario. The model you choose determines how your agent thinks and responds, for example, one model may respond faster, another may produce more detailed answers, while another might excel at complex reasoning.

### 🎭 Why it matters

Selecting the appropriate model ensures your agent performs optimally for your use case. Each available model has distinct capabilities and specializations, so aligning the model with your requirements (such as quick replies vs. deep analysis) can improve user satisfaction and manage costs.

### 🪁 Available models

AI capabilities evolve rapidly, and Copilot Studio keeps up by offering a range of Azure OpenAI models. As of 2025, the primary models to choose from include Microsoft’s GPT-4.1 family, the “o” series for reasoning, and the latest GPT-5 previews. The following table summarizes the main choices and what each is best suited for:

| Model Version | Status | Cost| Key Strengths | Ideal Use Cases |
|-------|----------|---------|-------------|-----------|
| **GPT‑4.1 Mini (Default)** | General Availability | Basic Pricing | - Fast, cost-effective responses. - Good for most standard tasks with moderate complexity | Everyday Q&A, summaries, routine helpdesk scenarios where quick answers matter and budget is limited |
| **GPT-4.1** | General Availability | Standard Pricing | - Higher-quality outputs, superior for complex tasks - Larger AI model with more advanced reasoning than GPT-4.1 Mini (may be slightly slower) | Complex queries, detailed content generation or analysis. Suitable for projects needing high accuracy and can afford higher latency or cost |
| **o3 (Generative OpenAI)** | General Availability | Premium Pricing | - Specialized for reasoning and decision logic - Excels at nuanced problem-solving and complex analysis tasks | Use when your agent must perform sophisticated reasoning, such as intricate planning, multi-step problem solving, or data analysis with critical thinking |
| **GPT‑5 Chat** | Preview (Experimental) | Standard Pricing | - Latest-generation model with improved context awareness and up-to-date training (Sept 2024) - Handles the highest complexity in planning and analytical tasks with slower, more methodical responses. | Cutting-edge scenarios needing the most context-aware answers or enhanced document/image processing. Use to evaluate advanced capabilities early, but not yet for mission-critical production due to preview status. |
| **GPT‑5 Reasoning** | Preview (Experimental) | Premium Pricing | - Latest model optimized for complex reasoning (trained up to Oct 2024) - High scores in document understanding and response accuracy | Advanced reasoning tasks where top-tier analytical capability is required (such as extensive planning, interpreting complex data). Again, use cautiously in testing since it’s a preview model. |

!!! warning

    Experimental/preview models (like GPT-5 Chat) are accessible for testing new capabilities before they’re production-ready. They may have limited testing and higher variability in performance.

    **They are not recommended for production use** because of possible instability (variable quality, latency, or even time-outs). Always review any _preview_ model’s limitations and consider using them only in non-critical environments. Use them in _Sandbox_ or _Developer_ environments. If you do publish an agent with an experimental model, usage will still be billed at that model’s established rate.

#### 🔢 Context length and data training

All the above models are capable with large context windows. For instance, GPT-4.1 (both Mini and full) supports up to 128K tokens of context, whereas the o3 and GPT-5 models go even further (o3 up to 200K, GPT-5 up to 400K tokens). They are all trained on data up to mid-2024 (GPT-5 on slightly later data). This means they “know” information up to those cut-off dates, which is useful for understanding their knowledge limitations when they generate answers.

### 🔧 Changing and updating the model of your agent

By default, a new Copilot agent starts on the GPT-4.1 Mini model, which is optimized as a balanced choice for most scenarios.

You can switch the agent’s primary model anytime via the agent’s **Settings** page ➡️ **Model** section in the **Generative AI** tab, using a simple dropdown to pick from available models.

[E to insert screenshot here]

This flexibility allows you to experiment with different models even after your agent is built. For example, switching to an experimental model to evaluate if it improves answer quality for your use case.

## 📶 Model updates and retired models

Microsoft periodically upgrades the available models to newer versions. Notably, in July 2025, several models were automatically upgraded:

- GPT-4.1 Mini **replaced** the older GPT-4o Mini as the Basic tier model (same cost).
- GPT-4.1 (full) **replaced** the GPT-4o model as the Standard tier, now generally available.
- The o3 model (GA) **replaced** the previous o1 model for Premium tier reasoning tasks.

!!! note ""

    Refer to [Model updates](https://learn.microsoft.com/en-us/ai-builder/prompt-modelsettings#model-updates) periodically to understand model updates made by Microsoft.

If your agent was using GPT-4o or o1, it would have been transparently moved to the new equivalent model with no change in billing rates. Additionally, in August 2025, the GPT-5 Chat and Reasoning models were added as previews.

### 🧶 Why might you continue using a "Retired" model?

With AI model upgrades happening automatically, Copilot Studio provides a safety valve for continuity. You may have cases where you need to stick with the previous model for a short time, even after an upgrade.

For example, to maintain compatibility, to meet compliance requirements, or simply because your solution’s behavior with the new model needs evaluation before fully switching over. Microsoft recognizes this and allows makers to continue using a retired model for up to **30 days** after an automatic upgrade.

- **Compatibility**: Perhaps the new model’s outputs differ in format or content. If your downstream systems or prompts expect the old model’s style, you might need time to adjust your logic. The grace period lets you run on the known model while you update and test your agent with the new model in a controlled way. You can make adjustments without disrupting users.

- **Compliance & Data Policies**: Some organizations have strict vetting for AI models. An experimental new model might not yet be approved for use, or it might handle data in a different way (for example, the new model might use data centres in different regions). If that’s a concern, an admin might decide to delay the switch until compliance checks are done.

- **Specific Business Needs**: You might have a mission-critical event (product launch, demo) where stability is more important than getting new features quickly. Sticking with the older model ensures no surprises during that period.

### 🌳 How to use a retired model

On your agent’s **Settings** page, in the **Model** section in the **Generative AI** tab, there is a toggle option labeled “Continue using retired models” (this becomes available when a model update is rolled out).

[E to insert screenshot here]

If you switch this on, your agent will remain on the previous model version for that 30-day window. During that window, you can toggle between the old and new model to compare responses and gradually roll over. After 30 days, the old model is fully removed from service, so you should plan to move to the new model by then. In practice, this feature offers a buffer to support a smooth transition.

#### Example

Suppose your agent was using GPT-4o and it got upgraded to GPT-4.1. If you notice the AI’s tone changed or it uses slightly different phrasing that doesn’t align with your established conversational style, you could toggle on “use retired model” to temporarily revert to GPT-4o.

You then have a few weeks to update your prompts/instructions to suit GPT-4.1’s style (maybe adding an instruction like “keep responses brief”) and test thoroughly. Test your agent on GPT-4.1 in a safe environment, and then disable the retired model toggle once confident. This way, your end users have a consistent experience during the transition.

## 🔐 Admin controls for AI model selection

It’s worth noting that not every copilot environment allows all model choices by default. There are organization-level settings that administrators control. This is especially relevant for experimental models. Organizations may want to restrict who can use preview AI models (since they might process data in non-standard ways or outside certain regions).

Here are the key admin controls affecting which models a maker/developer can select for an agent:

- **Allow Preview (Experimental) models**: An admin can toggle whether preview and experimental AI models are available in a given environment. If this is turned **off**, makers/developers will only see generally-available models (like GPT-4.1 and o3) in the dropdown. To use GPT-5 or any future preview, the admin must turn this setting **on** for that specific environment.

- **Move data across regions**: Because experimental models may not run in the same regional data centres as standard models, enabling them often requires allowing cross-region data movement. In the Power Platform admin centre (environment settings), there is a setting called **Move data across regions**. This must be turned on by the tenant admin if you want to permit experimental model usage. It acknowledges that data processed by these models may leave your organization's geographic boundaries. For example, if your environment is in Europe and an experimental model is only hosted in US datacenters, this setting needs to be enabled to let that data flow happen. If it’s disabled, Copilot won’t use those models.

These admin settings ensure that **organizations stay in control** of sensitive aspects like data residency and feature stability. As a developer building an agent, if you find that the option for GPT-5 (or any preview model) is missing or you see a warning about generative AI not being available, it could be that your admin has disabled experimental models or hasn’t enabled cross-region data movement. In such cases, you’d need to contact your platform admin to adjust the environment settings if experimental features are desired.

For a quick reference, here’s a summary of the admin controls related to model selection:

## Theory

This mission is all about customizing responses. This is the place to give your agent a personality.

## Lab

- Navigate to agent settings and put in a prompt to customize the tone, outputs and personality of the agent

[Multi-agent orchestration and more: Copilot Studio announcements](https://www.microsoft.com/microsoft-copilot/blog/copilot-studio/multi-agent-orchestration-maker-controls-and-more-microsoft-copilot-studio-announcements-at-microsoft-build-2025/#copilot-studio-enhancements)
(Scroll down a bit to the response section of the blog)
