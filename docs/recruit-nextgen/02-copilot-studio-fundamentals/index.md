---
hide: false
preview: false
prev:
  text: 'Introduction to Agents'
  link: '/recruit-nextgen/01-introduction-to-agents'
next:
  text: 'Creating a Solution'
  link: '/recruit-nextgen/03-creating-a-solution/'
short-description: 'Explore Copilot Studio harnesses, agent building blocks, workflows, publishing, and governance'
difficulty: 1
codename: OPERATION TOOLBOX
time: 20
harness: github-copilot
credits: 0
tags:
  - fundamentals
products:
  - copilot-studio
  - microsoft-365-copilot
industries:
  - general
created-date: 2026-08-05
last-edited-date: 2026-08-24
---

# 🛠️ Mission 02: Copilot Studio Fundamentals

<mission-meta />

<mission-credits />

## 🎯 Mission Brief

In [Mission 01](../01-introduction-to-agents/index.md) you learned *how to think about agents*. This mission is the **toolbox**: what Microsoft Copilot Studio actually is, how its three harnesses differ, and which building blocks are available when you build on the **GitHub Copilot harness**.

Although we're not building yet, this mission is the map you'll keep open in another tab while you build, so the panels in the product line up with the ideas in your head.

The foundational concepts covered here matter because the same business request can lead to very different designs. A knowledge question, a repeatable approval, and a multi-step support task don't need the same harness or capability. By learning the platform vocabulary now, you'll be able to make deliberate choices when the `Contoso IT Concierge` solution begins using organizational knowledge, SharePoint tools, reusable skills, and workflows in later missions.

> [!IMPORTANT] This module uses the **GitHub Copilot harness**
> Copilot Studio offers three harnesses: **GitHub Copilot** for reasoning-heavy, multi-step work; **standard** for structured agents that can use classic or generative orchestration; and **Copilot chat** for extending Microsoft 365 Copilot Chat. This course uses the GitHub Copilot harness. In the current product UI, turn on the **New experience** toggle when instructed to select this authoring surface.
>
> Here, **GitHub Copilot harness** means the runtime environment used by the agent in Copilot Studio. It is different from the GitHub Copilot coding assistant used in development environments such as Visual Studio Code.

## 🔎 Objectives

By the end of this mission you'll be able to:

1. Place Copilot Studio in the wider Microsoft AI stack
1. Choose among the **GitHub Copilot**, **standard**, and **Copilot chat** harnesses
1. Name the building blocks available on the **GitHub Copilot harness** and what each is for
1. Understand how **Work IQ**, **Skills**, and **Workflows** change what an agent can do
1. Know when to use a **workflow** instead of letting the orchestrator decide
1. Understand the **channels** and **governance** story at a high level

## What Copilot Studio Is (and Isn't)

**Microsoft Copilot Studio** is the place you **build, test, publish, and monitor agents**. Think of it less as a "chatbot designer" and more as a low-code **agent platform** that sits at the center of several things you already know:

- It **extends Microsoft 365 Copilot** — agents you build can show up right inside Teams and the Microsoft 365 Copilot experience.
- It's **part of the Power Platform** — so it inherits environments, solutions, connectors, and Dataverse.
- It **reaches into Azure AI** — bring your own models and search/knowledge when you need them.

> [!INFO] The repositioning that matters
> On the GitHub Copilot harness you don't script conversation paths. You **describe** the agent, point it at knowledge, give it skills and tools, and let the harness reason through the goal. The skills that pay off are **writing clear instructions and choosing the right capabilities**, not drawing dialog trees.

## First Decision: Which Build Surface?

Copilot Studio isn't the only place to build an agent in the Microsoft stack. Think of the build surfaces as **one spectrum of control**, from "I just want a Q&A bot for my team" to "I'm shipping a custom AI application":

> **Microsoft 365 Copilot (consume) → Agent Builder → Copilot Studio → Microsoft Foundry**
> *no build · no-code · low-code · pro-code*

| | **Agent Builder** *(in Microsoft 365 Copilot)* | **Copilot Studio** | **Microsoft Foundry** |
|---|---|---|---|
| **Build style** | No-code, natural language, in-context | Low-code → pro-code | Code-first / pro-code |
| **Who it's for** | Information workers | Makers & developers | Developers & engineers |
| **Reach** | **Microsoft 365 Copilot only** (you/your team) | Department, organization, or external—Teams, web, voice, custom apps | Custom apps (can publish to Microsoft 365 Copilot) |
| **What it builds** | Lightweight Q&A agents grounded in your Microsoft 365 content | Business agents and workflows with connectors, MCP, and end-to-end automation | Custom AI applications, orchestration, models, and infrastructure |
| **Governed in** | Microsoft 365 admin center | Power Platform admin center + ALM (dev/test/prod) | Azure (RBAC, Entra Agent ID, Foundry control plane) |
| **Time to value** | Immediate | Days to weeks | Weeks to months |

![Agent build surfaces ranging from Agent Builder to Copilot Studio and Microsoft Foundry as control and engineering investment increase](./assets/02-agent-build-surface-spectrum.png)

### Agent Builder: Copilot Studio's lightweight cousin

This is the one most people get confused about. **Agent Builder** lives *inside* the Microsoft 365 Copilot app (in Copilot Chat, Teams, and microsoft365.com). It provides a simple way to build agents that extend Microsoft 365 Copilot Chat through the **Copilot chat harness**. No separate portal, no code, no broad publishing: you describe an agent in natural language, point it at public websites or Work IQ content, and it's live for you or your team in minutes. It's governed from the **Microsoft 365 admin center**.

> [!NOTE] Learn Agent Builder in Copilot Developer Camp
> Agent Builder isn't part of this course's hands-on path. To build one yourself, complete [Declarative Agent Foundation with Agent Builder](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/01-first-agent-builder/), a Copilot Developer Camp lab covering creation, grounding, testing, and governance basics.

<!-- Separate adjacent callouts for Markdownlint. -->

> [!TIP] Move to Copilot Studio when the requirements grow
> Start in **Agent Builder** when the job is "a focused agent over our content, for our team." Choose **Copilot Studio** when you need broader publishing, multi-step workflows, custom connectors, or end-to-end business automation. Treat that move as an architecture decision; don't assume every Agent Builder configuration or capability transfers directly.

### When to move to Foundry instead

Go the *other* direction, past Copilot Studio to **Microsoft Foundry**, when you need **code-first control over orchestration**, your own **model and inference stack**, an **Azure data boundary**, or you're building a **custom AI application** rather than a business agent. Foundry can still publish to Microsoft 365 Copilot, so "pro-code" doesn't mean "leaves the ecosystem." *(Beyond Foundry, Microsoft also provides SDK options such as Microsoft Agent Framework and the Microsoft 365 Agents SDK. Use these when you want full code ownership; that's a deeper dive than this mission.)*

## Second Decision: Which Harness?

Mission 01 introduced a useful distinction:

- The **model** provides reasoning and language generation.
- The **harness** is the runtime environment around the model. It controls which components are available, what context reaches the model, how responses are interpreted, how tools are called, and how execution is managed.
- **Orchestration** is the decision-making approach inside the harness. It directs what the agent does next.

A harness is therefore broader than orchestration. It includes an orchestration approach along with capabilities such as tools, memory, skills, file handling, monitoring, and secure execution.

Once you've chosen **Copilot Studio** as your build surface, choose the harness that matches the work:

| | **Copilot chat harness** | **Standard harness** | **GitHub Copilot harness** |
|---|---|---|---|
| **Best when** | The goal is to ground Microsoft 365 Copilot Chat in enterprise knowledge | The experience needs structured conversations, maker-defined components, or predictable control | The agent must reason through complex, multi-step work |
| **Orchestration** | Uses the Microsoft 365 Copilot Chat experience | Configurable classic or generative orchestration over topics and other maker-defined capabilities | Enhanced, goal-driven orchestration that plans, acts, reviews results, and adjusts |
| **Key capabilities** | Enterprise knowledge inside Microsoft 365 Copilot Chat | Topics, knowledge, tools, prompts, branches, and structured conversations | Skills, memory, connected agents, tools, workflows, and file creation |
| **Publishing** | Internal teams | Internal teams or external customers | Internal teams or external customers |
| **Billing** | Consumption-based or included in eligible Microsoft 365 Copilot user licenses | Standard Copilot Studio licensing | Usage-based Copilot Credits |
| **In this course** | Not built here | Not built here | **Mission 02 onward** |

![Decision map for choosing the Copilot chat, Standard, or GitHub Copilot harness based on the work an agent must perform](./assets/02-harness-decision.png)

### Apply the Decision to IT Support

The same business scenario can be implemented with different harnesses depending on its requirements:

| If the IT support agent needs to... | Consider... |
| --- | --- |
| Answer questions grounded in internal policies and documentation | **Copilot chat harness** or Agent Builder |
| Use authored topics or controlled troubleshooting paths, with classic or generative selection of capabilities | **Standard harness** |
| Interpret varied requests and dynamically combine troubleshooting guidance, live data, reusable skills, and workflows | **GitHub Copilot harness** |

In this course, the completed `Contoso IT Concierge` will use the third approach. It will interpret an employee's request, select the appropriate skill and tool, gather missing information, and invoke a workflow when the request is ready. The scenario is intentionally straightforward so you can learn the architecture before applying it to more complex business processes.

## Why is it called the "GitHub Copilot" Harness

You may be wondering why it's called the **GitHub Copilot harness**.

The name reflects the orchestration technology used by the harness which is built around the Github Copilot SDK. It does **not** mean your agent runs inside GitHub Enterprise Cloud or requires GitHub services to function.

When you build an agent using the GitHub Copilot harness:

- Your agent remains a Microsoft Copilot Studio agent
- Your agent is managed within Copilot Studio
- Your agent follows the governance model of your Copilot Studio environment

You do **not** need:

- A GitHub Copilot subscription
- A GitHub Enterprise Cloud deployment
- GitHub-specific administration or governance

The harness determines how an agent plans, reasons, and executes work. Copilot Studio continues to determine how the solution is built, governed, managed, and deployed.

## Why the GitHub Copilot Harness Is Different

The GitHub Copilot harness is designed for complex, **long-horizon work** where the path can't always be defined in advance. It runs an **agentic loop**: planning the work, taking action, reviewing the results, and adjusting its approach until it reaches the goal.

The difference isn't simply that it uses generative orchestration; the Standard harness can use generative orchestration too. The GitHub Copilot harness combines enhanced, goal-driven orchestration with a runtime and capability set designed for longer, more complex work.

This enables agents to:

- Reason through dynamic problems and ambiguous decision points
- Coordinate multiple tools across many steps and data sources
- Analyze files and business artifacts as part of a broader process
- Produce rich, multipart outputs instead of a single response
- Connect to tools and agents on other platforms

Microsoft's business-process evaluations showed performance and quality gains in multi-tool use, file analysis, code analysis, and knowledge quality when using the GitHub Copilot harness.

## The Anatomy of a GitHub Copilot Harness Agent

On the GitHub Copilot harness, an agent is organized around a handful of **core components**, all configured from the **Build** tab.

### 1. Instructions

The agent's standing brief: its **identity, personality, tone, scope, and behavioral rules**. On the GitHub Copilot harness there are no authored conversation trees to fall back on, so **instructions are your primary steering wheel**, they shape every plan the orchestrator makes. Write them like contracts, not suggestions.

### 2. Knowledge and Memory

The context the agent can draw on when it reasons and responds:

- **Connected knowledge sources** — SharePoint, OneDrive, Dataverse, websites, databases, and other sources. The agent retrieves relevant information from these sources to ground its answers, often with citations.
- **Memory** — Persistent context that helps the agent retain useful information across tasks and sessions instead of starting from scratch each time.

Connected knowledge and memory both provide context, but they serve different purposes. Knowledge lets the agent retrieve information from configured sources, while memory helps it retain relevant context over time.

### 3. Tools and Skills

The capabilities the agent can use to perform work:

- **Tools** let the agent perform actions such as calling an API, running a workflow, or connecting to an external MCP server. The orchestrator relies heavily on tool names and descriptions when deciding which capability to use.
- **Skills** define reusable, structured behaviors that the agent can invoke consistently instead of reasoning through the same task from scratch each time. Skills package focused instructions and capabilities for a particular kind of work.

> [!INFO] MCP, briefly
> **Model Context Protocol (MCP)** is an open standard for connecting agents to external tools and data. In Copilot Studio, MCP servers are added as tools so the agent can use capabilities beyond built-in connectors.

#### Work IQ

**Work IQ** is Microsoft's intelligence layer for grounding Copilot and agents in real-time organizational context. It connects signals from files, email, meetings, chats, calendars, and business systems through three layers: **Data**, **Memory**, and **Inference**.

In Copilot Studio, you add Work IQ as an **MCP tool**. This gives the agent access to relevant work context while respecting configured permissions, policies, and governance controls.

> [!IMPORTANT] Work IQ is in preview
> Work IQ in Copilot Studio is a preview capability powered by the GitHub Copilot harness. Its use is subject to usage-based billing through Copilot Credits. Work IQ is read-only unless an administrator explicitly enables write operations in the Microsoft 365 admin center.

### 4. Model

Choose the **AI model** that powers the agent's reasoning, including current GPT models and **reasoning models** for heavier planning. Match the model to the job: fast and economical for chat, reasoning for multi-step work.

### 5. Connected Agents

Specialized agents your agent can **delegate to**. Instead of one bloated agent that does everything, you compose a *team*: a coordinator hands subtasks to focused experts and stitches their results together.

### Related capability: Workflows

Workflows aren't a core component configured on the agent's **Build** tab. They're related automation artifacts that work alongside agents. An agent can invoke a workflow through a tool, and a workflow can include an agent node when one step requires AI reasoning.

Use workflows for deterministic, step-by-step parts of a process that must run consistently, such as approvals, payments, or record updates. You'll build one in [Mission 07](../07-automate-with-workflows/index.md).

> [!NOTE] Wait...what happened to Topics, Triggers, and branching?
> The **standard harness** supports authored **topics**, conversation paths, and branching logic. With classic orchestration, you control how requests route through them; with generative orchestration, an LLM can select among topics and other capabilities dynamically. The **GitHub Copilot harness** uses natural-language instructions and enhanced, goal-driven orchestration over knowledge, skills, tools, and connected agents. Neither is universally better: choose the harness that matches the work.

## Building on the GitHub Copilot Harness

Mission 01 covered the orchestration *idea*. Here's how it shows up when you build in Copilot Studio:

- **Natural-language-first, single surface.** You describe what you want; Copilot Studio generates the configuration. No topic inventory to maintain.
- **Goal-driven orchestration.** The GitHub Copilot harness can break a goal into steps, call the right capabilities, and adjust when a request changes or a step fails. You steer it through *instructions and capabilities*, not branches.
- **A tab-based workspace.** **Build** (identity, knowledge, tools, skills, model), **Preview** (test it interactively), **Evaluate** (run test sets to measure quality), and **Monitor** (review tasks, files accessed, and activity after you ship).

> [!TIP] How you actually steer the orchestrator
> Three dials, in order of impact: **(1)** tighten the **instructions**, **(2)** fix **tool/skill names and descriptions** so the planner picks the right one, **(3)** **remove** capabilities that are irrelevant or risky so they stop confusing it. A small, well-described toolkit beats an exhaustive, overlapping one every time. Use **Preview** to watch behavior live and **Evaluate** to keep it honest as you iterate.

## Workflows vs. Orchestration: Knowing When to Be Deterministic

The orchestrator is powerful *because* it decides at runtime. Sometimes that's exactly what you **don't** want.

> [!INFO] The opinionated heuristic
> **Reasoning for the ambiguous, workflows for the repeatable.** If you can draw the steps on a whiteboard and they never change, make it a **workflow**. If the path depends on what the user said or what the data shows, let the **orchestrator** plan it. Mixing the two, a deterministic workflow with an **agent node** for the one fuzzy step, is often the best answer.

## Channels: Where Your Agent Shows Up

Building an agent is half the job; **publishing it where people work** is the other half. Copilot Studio agents can surface in:

- **Microsoft 365 Copilot & Microsoft Teams** — the headline channels for this course.
- **Web** — embedded on a site or in a custom app.

You publish the agent at least once, then connect channels. *(Full walkthrough in Mission 08.)* Don't skip the design implications: an agent for a public website needs different guardrails than one for your internal Teams.

## Governance & ALM, at a Glance

You don't need to master this yet, but know the shape because "it works in my environment" is where agent projects go to die:

- **Solutions & environments** — Package your agent (and everything it depends on) into a **solution** so you can move it cleanly from dev to test to production. You'll learn more about this in [Mission 3](../03-creating-a-solution/index.md).
- **Identity & permissions** — Agents respect Microsoft 365 identity; users only ever see what they're allowed to. Work IQ enforces this at the platform level, per user.
- **Central oversight** — As an org's agent estate grows, **Microsoft Agent 365** acts as a control plane for inventory, permissions, behavior, and cost across the ecosystem.
- **Licensing** — Each harness has a different licensing and billing model. The GitHub Copilot harness uses a usage-based approach, while the Standard and Copilot Chat harnesses have different entitlements and billing options. You'll compare all three in [Mission 09](../09-understanding-licensing/index.md).

## ✅ Mission Complete {#mission-complete}

You've toured the Copilot Studio HQ. You can now:

✅ **Place Copilot Studio in the Microsoft ecosystem**: Explain how it connects Microsoft 365 Copilot, Power Platform, and Azure AI.

✅ **Choose a harness**: Match GitHub Copilot, standard, and Copilot chat harnesses to their intended scenarios.

✅ **Identify the GitHub Copilot harness building blocks**: Recognize instructions, knowledge, memory, tools, skills, models, and connected agents.

✅ **Steer the orchestrator**: Use clear instructions, well-named capabilities, Preview, Evaluate, and Monitor.

✅ **Choose deterministic or generative behavior**: Use workflows for repeatable processes and orchestration for ambiguous requests.

⏭️ [Move to **Creating a Solution**](../03-creating-a-solution/index.md) to start building the solution that will contain your agent and its components.

Stay sharp, Recruit, the toolbox is yours now.

## 📚 Tactical Resources

🔗 [Choose a harness in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview)

🔗 [GitHub Copilot harness agents overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/overview)

🔗 [Work IQ MCP overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/use-work-iq) — the intelligence layer, and how to add it

🔗 [Use the agent design framework](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/agent-design-canvas-framework) — a blueprint for scoping an agent before you build

🔗 [Connect an agent to Teams & Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams)

🔗 [Copilot Developer Camp: Declarative Agent Foundation with Agent Builder](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/01-first-agent-builder/) — hands-on Agent Builder lab

<analytics-tag section="recruit-nextgen" mission="02-copilot-studio-fundamentals" />
