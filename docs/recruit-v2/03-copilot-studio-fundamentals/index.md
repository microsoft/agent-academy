---
hide: true
preview: true
prev:
  text: 'Declarative Agents in M365 Copilot'
  link: '/recruit-v2/02-declarative-agent'
next:
  text: 'Creating a Solution'
  link: '/recruit-v2/04-creating-a-solution/'
---

# 🛠️ Mission 03: Copilot Studio Fundamentals

## 🕵️‍♂️ CODENAME: `OPERATION TOOLBOX`

> **⏱️ Operation Time Window:** `~20 minutes – intel + a tour of HQ, no fieldwork yet`

## 🎯 Mission Brief

In [Mission 01](../01-introduction-to-agents/index.md) you learned *how to think about agents*. This mission is the **toolbox**: what Microsoft Copilot Studio actually is, the parts you assemble into an agent in the **new agent experience**, and, just as important, **how to decide** which part to reach for.

We're not building yet. The hands-on missions (04 onward) do that. This is the map you'll keep open in another tab while you build, so the panels in the product line up with the ideas in your head.

> [!IMPORTANT] This module describes the **new agent experience**
> Copilot Studio now has a redesigned authoring experience built on an **enhanced orchestration runtime**. It runs *alongside* the older "classic" experience, and you pick which one to use when you create an agent, but they don't convert to each other. **This course uses the new experience**, so if a screenshot online still shows **topics, flows, and branching**, that's classic. The building blocks below are the new ones.

## 🔎 Objectives

By the end of this mission you'll be able to:

1. Place Copilot Studio in the wider Microsoft AI stack
1. Choose between a **declarative** and a **custom** agent with confidence
1. Name the **building blocks** of the new agent experience and what each is for
1. Understand how **Work IQ**, **Skills**, and **Workflows** change what an agent can do
1. Know when to use a **workflow** instead of letting the orchestrator decide
1. Understand the **channels** and **governance** story at a high level

## What Copilot Studio Is (and Isn't)

**Microsoft Copilot Studio** is the place you **build, test, publish, and monitor agents**. Think of it less as a "chatbot designer" and more as a low-code **agent platform** that sits at the center of several things you already know:

- It **extends Microsoft 365 Copilot** — agents you build can show up right inside Teams and the M365 Copilot experience.
- It's **part of the Power Platform** — so it inherits environments, solutions, connectors, and Dataverse.
- It **reaches into Azure AI** — bring your own models and search/knowledge when you need them.

> [!INFO] The repositioning that matters
> In the new experience you don't script conversations, you **describe** the agent, point it at knowledge, give it skills and tools, and let the orchestrator reason. The skills that pay off are **writing clear instructions and choosing the right capabilities**, not drawing dialog trees.

## First Decision: Which Build Surface?

Copilot Studio isn't the only place to build an agent in the Microsoft stack. Think of the build surfaces as **one spectrum of control**, from "I just want a Q&A bot for my team" to "I'm shipping a custom AI application":

> **Microsoft 365 Copilot (consume) → Agent Builder → Copilot Studio → Microsoft Foundry**
> *no build · no-code · low-code · pro-code*

| | **Agent Builder** *(in M365 Copilot)* | **Copilot Studio** | **Microsoft Foundry** |
|---|---|---|---|
| **Build style** | No-code, natural language, in-context | Low-code → pro-code | Code-first / pro-code |
| **Who it's for** | Information workers | Makers & developers | Developers & engineers |
| **Reach** | **Microsoft 365 Copilot only** (you/your team) | Dept, org, or external—Teams, web, voice, custom apps | Custom apps (can publish to M365 Copilot) |
| **What it builds** | Lightweight Q&A agents grounded in your M365 content | Workflows, connectors, MCP, autonomous behavior—**both** agent types | Custom orchestration, custom models, lowest latency |
| **Governed in** | Microsoft 365 admin center | Power Platform admin center + ALM (dev/test/prod) | Azure (RBAC, Entra Agent ID, Foundry control plane) |
| **Time to value** | Immediate | Days to weeks | Weeks to months |

### Agent Builder: Copilot Studio's lightweight cousin

This is the one most people get confused about. **Agent Builder** lives *inside* the Microsoft 365 Copilot app (in Copilot chat, Teams, microsoft365.com). It's part of the same Microsoft agent family and produces **declarative agents** that are scoped to Microsoft 365 Copilot and only Microsoft 365 Copilot. No separate portal, no code, no broad publishing: you describe an agent in natural language, point it at some public websites or Work IQ content, and it's live for you or your team in minutes. It runs on the **M365 Copilot orchestrator and foundation models**, and it's governed from the **M365 admin center**.

> [!TIP] The graduation path is the whole point
> Start in **Agent Builder** when the job is "a Q&A agent over our content, for our team." The moment you need **broad/external publishing, multi-step workflows, custom connectors, autonomous triggers, etc**, you **copy the agent into Copilot Studio**, its core configuration and instructions carry over, so you don't start from scratch.

### When to move to Foundry instead

Go the *other* direction, past Copilot Studio to **Microsoft Foundry**, when you need **code-first control over orchestration**, your own **model and inference stack**, sub-100ms latency, an **Azure data boundary**, or you're really building a **custom AI application** rather than a business agent. Foundry can still publish to Microsoft 365 Copilot, so "pro-code" doesn't mean "leaves the ecosystem." *(Beyond Foundry, we also have the pure-SDK options like Microsoft Agent Framework and the M365 Agents SDK. Use these when you want full code ownership; that's a deeper dive than this mission.)*

## Second Decision: Declarative vs. Custom Agent

Once you've chosen **Copilot Studio** as your surface, the next fork is *which kind of agent* to build. This course builds **both**, so here's the opinionated guidance:

| | **Declarative agent** | **Custom agent** |
|---|---|---|
| **Runs on** | Microsoft 365 Copilot's orchestrator & models | Copilot Studio's orchestrator, with your model choice |
| **You provide** | Instructions, knowledge, skills, actions | Everything—model, knowledge, tools, skills, workflows, channels |
| **Lives in** | Microsoft 365 Copilot (Teams, M365 Copilot) | Wherever you publish—Teams, web, voice, custom apps |
| **Best when** | You want fast value inside M365, on Microsoft's stack | You need control: a specific model, custom logic, or a non-M365 channel |
| **In this course** | Mission 02 | Mission 03 onward |

> [!TIP] Rule of thumb
> **Start declarative.** Reach for a custom agent the moment you hit a wall the M365 Copilot orchestrator can't scale like needing a particular model, bespoke business logic, autonomous behavior, or a channel outside Microsoft 365. Don't pay for the flexibility until you need it.

## The Anatomy of an Agent

In the new experience, an agent is organized around a handful of **core components**, all configured from the **Build** tab.

### 1. Instructions

The agent's standing brief: its **identity, personality, tone, scope, and behavioral rules**. In the new experience there are no conversation trees to fall back on, so **instructions are your primary steering wheel**, they shape every plan the orchestrator makes. Write them like contracts, not suggestions.

### 2. Knowledge (including Work IQ & Memory)

What the agent can draw on to answer. Three flavors:

- **Connected data sources** — SharePoint, OneDrive, Dataverse, websites, databases, and more. This is classic RAG, wired in, with **cited** answers.
- **Work IQ (Microsoft IQ)** — the headline addition. Where connected sources are documents, **Work IQ is your organization's *work*.**
- **Memory** — persistent context so the agent stays aligned to priorities across sessions instead of starting cold every time.

> [!INFO] What Work IQ actually is
> **Work IQ** is Microsoft's **intelligence layer** that grounds Copilot and your agents in **real-time, shared organizational context**. It's built on three layers—**Data** (signals from files, emails, meetings, chats, business systems), **Memory** (a persistent understanding of how people and teams work), and **Inference** (models, skills, and tools that reason and act). Instead of every agent re-plumbing its own context and permissions, it **inherits** them. In Copilot Studio you add Work IQ through **MCP tools** (currently in **preview**, and it requires a Microsoft 365 Copilot license). Think of it as the difference between an agent that *knows your documents* and one that *understands your work*.

### 3. Tools & Skills

The agent's hands.

- **Tools** let the agent **perform actions** like calling an API, running a **workflow**, or connecting to an external **MCP server**. The orchestrator picks tools largely by their **name and description**, so naming isn't cosmetic, it's logic.
- **Skills** define **reusable, structured behaviors**. They provide a packaged capability the agent can invoke consistently, rather than re-deriving it from scratch each time. Reach for a skill when you want a known, repeatable behavior available to the orchestrator. Where you would use a child agent in the "classic" experience, you would now use a Skill.

> [!INFO] MCP, briefly
> **Model Context Protocol (MCP)** is an open standard for plugging external tools and data into an agent. In Copilot Studio you connect MCP servers as tools, which is exactly how **Work IQ** is wired in, so your agent can reach systems Microsoft never shipped a dedicated connector for.

### 4. Workflows

**Deterministic, step-by-step automation** for the parts of a process that must happen the same way every time (approvals, payments, record updates). Tools can *run* a workflow, and the redesigned workflow canvas even lets you drop an **agent node** into an otherwise rigid flow—reliable structure where you need it, AI reasoning only at the step that genuinely needs judgment. *(Hands-on in Mission 08.)*

### 5. Model

Choose the **AI model** that powers the agent's reasoning, including current GPT models and **reasoning models** for heavier planning. Match the model to the job: fast and economical for chat, reasoning for multi-step work.

### 6. Connected Agents

Specialized agents your agent can **delegate to**. Instead of one bloated agent that does everything, you compose a *team*: a coordinator hands subtasks to focused experts and stitches their results together.

> [!NOTE] Wait...what happened to Topics, Triggers, and branching?
> In the **classic** experience you authored **topics**, conversation **flows**, and **branching logic**, and you wired **triggers** by hand. The **new experience replaces all of that**: you describe the agent in natural language and the **enhanced orchestrator** generates and runs the plan over your knowledge, skills, tools, and connected agents. Classic still exists for teams that need it, but if you're learning today, learn the new model.

## The New Agent Experience: How You Build

Mission 01 covered the orchestration *idea*. Here's how it shows up when you build in Copilot Studio:

- **Natural-language-first, single surface.** You describe what you want; Copilot Studio generates the configuration. No topic inventory to maintain.
- **One orchestrator, always on.** Unlike the classic experience, where you *configured* orchestration, the new experience uses the **enhanced orchestration runtime with deep reasoning for every agent**. You steer it through *instructions and capabilities*, not branches.
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

You publish the agent at least once, then connect channels. *(Full walkthrough in Mission 09.)* Don't skip the design implications: an agent for a public website needs different guardrails than one for your internal Teams.

## Governance & ALM, at a Glance

You don't need to master this yet, but know the shape because "it works in my environment" is where agent projects go to die:

- **Solutions & environments** — Package your agent (and everything it depends on) into a **solution** so you can move it cleanly from dev to test to production. *(Mission 04.)*
- **Identity & permissions** — Agents respect Microsoft 365 identity; users only ever see what they're allowed to. Work IQ enforces this at the platform level, per user.
- **Central oversight** — As an org's agent estate grows, **Microsoft Agent 365** acts as a control plane for inventory, permissions, behavior, and cost across the ecosystem.
- **Licensing** — Agentic work (and Work IQ) consumes **Copilot credits** via usage-based billing; knowing the model up front avoids surprises. *(Mission 10.)*

## 🎉 Mission Complete

You've toured the Copilot Studio HQ. You can now:

1. **Place Copilot Studio** — an agent platform that extends M365 Copilot, lives in Power Platform, and reaches into Azure AI.
1. **Make the first decision** — declarative for speed inside M365; custom for control.
1. **Name the new building blocks** — instructions, knowledge (incl. **Work IQ** & memory), **tools & skills**, **workflows**, model, and connected agents.
1. **Steer the orchestrator** — via instructions and well-named capabilities, using Preview, Evaluate, and Monitor.
1. **Choose deterministic vs. generative** — workflows for the repeatable, orchestration for the ambiguous.
1. **See the whole lifecycle** — channels, solutions, identity, governance, licensing.

Time to stop reading and start building. Next: [**Creating a Solution**](../04-creating-a-solution/index.md).

Stay sharp, Recruit, the toolbox is yours now.

## 📚 Tactical Resources

🔗 [Agents overview — the new agent experience](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/overview)

🔗 [Work IQ MCP overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/use-work-iq) — the intelligence layer, and how to add it

🔗 [Use the agent design framework](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/agent-design-canvas-framework) — a blueprint for scoping an agent before you build

🔗 [Connect an agent to Teams & Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams)

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit-v2/03-copilot-studio-fundamentals" alt="Analytics" />
