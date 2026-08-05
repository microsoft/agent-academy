---
hide: true
preview: true
prev:
  text: 'Course Setup'
  link: '/recruit-nextgen/00-course-setup'
next:
  text: 'Copilot Studio Fundamentals'
  link: '/recruit-nextgen/02-copilot-studio-fundamentals'
short-description: 'Learn how agents reason, use knowledge and tools, and operate within defined boundaries'
difficulty: 1
codename: OPERATION AI AGENT DECODE
time: 15
tags:
  - fundamentals
products:
  - copilot-studio
  - microsoft-365-copilot
industries:
  - general
created-date: 2026-06-23
last-edited-date: 2026-08-04
---

# 🚨 Mission 01: Introduction to Agents

<mission-meta />

## 🎯 Mission Brief

Welcome, Recruit.

This mission is about **how to think about agents**.

We aren't opening Copilot Studio just yet. Before you start building, you need the core concepts, because the product only really clicks once you understand the ideas behind it.

And those ideas have changed.

A couple of years ago, “building a bot” usually meant designing a conversation tree. You mapped out what the user might say, wrote scripted responses, and tried to predict every possible path.

Today, an **agent** works differently. It can reason over what someone is trying to accomplish, use trusted data, choose from available tools, and take action.

That means our job has changed too.

We aren't just scripting dialogue anymore. We're setting goals, providing capabilities, grounding the agent in the right knowledge, and defining the boundaries it needs to operate safely and effectively.

By the end of this mission, you will understand what makes agents different, why that shift matters, and how to start thinking like an agent builder.


## 🔎 Objectives

In this mission, you'll learn:

1. The difference between a chatbot, an AI assistant, and an **agent**
1. How Large Language Models (LLMs) act as an agent's "brain"
1. How Retrieval-Augmented Generation (RAG) keeps answers grounded and current
1. What **orchestration** is, and why generative orchestration replaced the topic tree
1. The **agent spectrum** from reactive to autonomous, and the control boundaries that keep it safe
1. The common Microsoft build surfaces for agents, from **no-code** to **pro-code**
1. The three Copilot Studio harnesses and when to use each one

Let's decode it.

## Chatbot vs. AI Assistant vs. Agent

These words often get used interchangeably but they're not the same.

- **Chatbot** — Matches your phrase to a pre-written answer or a branch in a scripted flow. Predictable, but brittle: say it differently and it breaks.
- **AI Assistant** — Uses an LLM to respond fluently to almost anything, but mostly helps through conversation. Some assistants can call tools (like agents, MCP servers, etc), but they usually do less planning, delegation, or autonomous follow-through than an agent.
- **Agent** — Reasons about your goal, decides which **knowledge** to consult and which **tools** to use, and may execute a multi-step plan. Some agents can also act on a **trigger**, like a schedule, new email, or new record, without you typing anything at all.

> [!INFO] The one-line definition
> An **agent** is an LLM given a goal, a set of tools and knowledge, and the autonomy to decide how to use them within boundaries you set.

## The Brain: Large Language Models (LLMs)

Modern agents are built around an LLM: a neural network trained on enormous amounts of text that predicts language one **token** at a time. A few concepts you'll lean on later:

- **Tokens & context window** — Models read and write in tokens (word fragments). The **context window** is how much it can "hold in mind" at once. These context windows are often pretty large, but not infinite. Long conversations and large documents can get summarized or dropped if the context window gets too big.
- **Instructions** — You don't just ask an agent a question; you give it standing **instructions** (its persona, rules, and how to behave). This is the single biggest lever on agent quality.
- **Not all models are equal** — Some are fast and cheap for chat. **Reasoning models** are optimized for more complex, multi-step tasks where planning, analysis, and careful tool use matter. Choosing the right model for the job is important.

> [!TIP] The autocomplete analogy
> An LLM is a "super-smart autocomplete": it doesn't *understand* like a human, it predicts the next best token. That's why **clear instructions and good grounding matter more than clever phrasing** because you're steering a prediction engine, not briefing a colleague.

## The Memory: Retrieval-Augmented Generation (RAG)

An LLM only knows what it was trained on, which is frozen in time and knows nothing about *your* organization. **RAG** fixes that by letting the agent look things up before it answers:

1. **Ask** — The user poses a question.
1. **Retrieve** — The agent searches a **knowledge source** (your SharePoint, OneDrive, Dataverse, a website, a database) for relevant information.
1. **Augment** — That information is added to the model's context.
1. **Generate** — The model answers using that retrieved evidence (ideally **with citations**) back to the source.

This is the difference between an agent that *guesses* and one that *cites its sources*. In Copilot Studio this is called the **knowledge layer**, and it's read-only by design: knowledge informs answers, **tools** take actions. Keep those two ideas separate, it'll save you grief later.

## The Director: Orchestration

Here's the concept that changed everything. **Orchestration** is the layer that decides *what the agent does* with a request: which knowledge to pull, which tools to call, in what order.

In the old world, *you* were the orchestrator. You hand-authored a **topic** for every path the conversation could take. It worked until it didn't: too many topics, too many exceptions, and the whole thing fell apart the moment a user phrased something unexpectedly.

**Generative orchestration** flips this. An LLM acts as a **planner**: it reads the user's intent, looks at the knowledge, tools, and sub-agents available to it, and composes a plan on the fly:

> **plan → act → observe → replan**

You no longer script the path. You supply good building blocks like clearly named tools, well-described knowledge, sharp instructions, and let the planner assemble them. This is the most important shift in the course, and it changes the job:

> [!INFO] Your job changed
> You've gone from **writing the script** to **defining the operating environment**. Agent quality now lives in the quality of your *instructions, tool names, and data boundaries*, not in how many conversation branches you drew. A vaguely described tool isn't bad documentation anymore; it's a bad instruction handed to the planner.

## The Agent Spectrum

It's tempting to sort agents into two bins: "conversational" and "autonomous." The better way to think of it is a **dial**. The same agent can answer a chat now and run a scheduled job later. What varies is *how much it decides on its own*.

|                 | More **reactive**                         | More **autonomous**                                       |
| --------------- | ----------------------------------------- | --------------------------------------------------------- |
| **Starts from** | A user message                            | A trigger (schedule, new email, new record)               |
| **Good for**    | Q&A, guided help, support                 | Multi-step jobs, monitoring, back-office automation       |
| **Human role**  | In the conversation                       | Reviewing outcomes, approving high-stakes steps           |
| **Example**     | Teams agent answering HR-policy questions | Agent that triages an inbox and drafts replies for review |

Because autonomy cuts both ways, you set **control boundaries**, deciding, per action, whether the agent can:

- **Just do it** (low-risk: look up an answer, summarize a doc),
- **Ask first** (medium-risk: confirm before sending or changing something), or
- **Escalate** (high-risk: a human must approve—e.g., a payment or a deletion).

> [!TIP] Opinion: design the boundaries before the capabilities
> The failure mode of agentic AI isn't a wrong sentence, it's a confident wrong *action* against a real system. Decide what the agent is allowed to do **before** you wire up what it *can* do.

## The Three Copilot Studio Harnesses

Whatever you build in Copilot Studio runs on a **harness**. The model supplies reasoning and generation; the harness is the runtime that decides when to call the model, which components to provide, how to interpret the result, and which tools to invoke.

| Harness | Best for | How it works |
| --- | --- | --- |
| **GitHub Copilot harness** | Complex, reasoning-heavy, multi-step business processes | Plans toward a goal, uses knowledge and tools, adjusts when conditions change, and supports skills, memory, connected agents, and file creation |
| **Standard harness** | Rule-based agents and structured, repeatable conversations | Follows the topics, prompts, branches, and paths you define |
| **Copilot chat harness** | Extending Microsoft 365 Copilot Chat with enterprise knowledge | Grounds Copilot Chat in organizational content for internal users |

This course builds an agent powered by the **GitHub Copilot harness**. That choice is why the later missions use natural-language instructions, skills, tools, and workflows rather than authored topic trees.

> [!INFO] Pro-code note
> For fully code-driven agents where you bring your own orchestration, models, runtime, and deployment architecture, use Microsoft 365 Agents SDK, Microsoft Agent Framework, or Microsoft Foundry.

## Where Agents Get Built

There are **multiple ways to build agents**, and they sit across a spectrum from **no-code** to **pro-code**.

- **Agent Builder in Microsoft 365 Copilot** — A simple, approachable starting point for creating agents right inside the Microsoft 365 experience. Good for quick experiments and lightweight productivity scenarios.
- **Copilot Studio** — Microsoft's low-code platform for building business-ready agents with instructions, knowledge, actions, orchestration, and governance controls.
- **Microsoft 365 Agents SDK + Agents Toolkit** — A pro-code path for developers who want to build agents in code and use Microsoft tooling to scaffold, test, and package them.
- **Microsoft Foundry / Foundry Agent Service** — An advanced AI agent platform for teams that need deeper control over models, frameworks, hosting, tools, runtime, infrastructure, and custom AI application architecture.

The simplest way to think about it is this: **Agent Builder** is a great starting point, **Copilot Studio** gives you more control without requiring a fully code-first approach, and the **SDK/toolkit** and **Foundry** paths are for teams that want deeper developer control.

Now that you've seen the harnesses, you can map the tools to them more clearly: **Agent Builder** creates agents that extend Microsoft 365 Copilot Chat. **Copilot Studio** lets you build on the Copilot chat, standard, or GitHub Copilot harness. **Microsoft 365 Agents SDK**, **Microsoft Agent Framework**, and **Microsoft Foundry** support code-first scenarios that need deeper control over models, frameworks, hosting, tools, runtime, or architecture.

These also aren't the only tools available. There are more specialized options, like **Custom SharePoint Agents** for SharePoint-centric scenarios, **Microsoft Agent Framework** for fully code-driven agent and workflow development, and other ecosystem-specific frameworks.

The important point is not memorizing every product. It's understanding that agent development spans **no-code, low-code, and pro-code approaches**, and each has strengths:

- **No-code** tools help you get started fast and validate ideas quickly.
- **Low-code** tools balance speed with more control, integration, and governance.
- **Pro-code** tools give developers the deepest flexibility when they need custom architectures, advanced logic, or specialized deployment patterns.

This course is focused on **building agents with Copilot Studio**. We'll go deeper into **what Copilot Studio is and how it works in Mission 02**, and we'll also touch on **Agent Builder** as a useful starting point for simpler scenarios and early experimentation.

## Why This Lands in Microsoft 365

Concepts are universal, but in this course the agents you build **meet people where they already work**: in **Microsoft Teams** and the **Microsoft 365 Copilot** experience, grounded in Work IQ, acting through your connected tools, and bound by your organization's identity and permissions. An agent that's brilliant in isolation but invisible in the flow of work doesn't get used. That integration is the payoff and the subject of the rest of the curriculum.

## ✅ Mission Complete {#mission-complete}

You now have the mental model. You can explain:

✅ **Distinguish agents from chatbots and AI assistants**: Explain how agents reason, retrieve information, use tools, and respond to triggers.

✅ **Describe the role of an LLM**: Explain how instructions and model choice steer an agent's reasoning.

✅ **Explain grounded retrieval**: Describe how RAG connects an agent to trusted organizational data.

✅ **Recognize generative orchestration**: Explain how an orchestrator selects and combines knowledge and tools.

✅ **Choose an appropriate harness**: Match Copilot chat, standard, and GitHub Copilot harnesses to their intended scenarios.

⏭️ [Move to **Copilot Studio Fundamentals**](../02-copilot-studio-fundamentals/index.md) to learn how its harnesses work and explore the building blocks you'll use throughout the course.

> [!TIP] Want to explore Agent Builder?
> This course focuses on the **GitHub Copilot harness** in Copilot Studio. If you'd like to build an agent that extends Microsoft 365 Copilot Chat, head over to Copilot Camp and work through the [**Declarative Agent Foundation with Agent Builder**](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/01-first-agent-builder/) lab.

Stay sharp, Recruit because your AI journey is just beginning!

## 📚 Tactical Resources

🔗 [AI Agents for Beginners](https://github.com/microsoft/ai-agents-for-beginners)

🔗 [Copilot Studio Documentation Home](https://learn.microsoft.com/microsoft-copilot-studio/)

🔗 [Choose a harness in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview)

🔗 [Copilot Developer Camp](https://aka.ms/copilot-camp) — hands-on learning paths for Agent Builder, Copilot Studio, Microsoft 365 Agents SDK, Agent Framework, and Foundry

🔗 [Apply generative orchestration capabilities](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/generative-orchestration) — the concept, in Microsoft's words

<!-- markdownlint-disable-next-line MD033 -->
<analytics-tag section="recruit-nextgen" mission="01-introduction-to-agents" />
