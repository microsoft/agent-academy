---
next:
  text: "Establish the Hiring Hub"
  link: "/operative-nextgen/01-get-started"
hide: true
preview: true
lastUpdated: false
---

# Operative - New Copilot Studio Experience

![Copilot Studio Agent Academy Operative](../images/banner_operative.png)

**Welcome, Operative.**

In this course, you'll build a **multi-agent hiring system** using the **new Microsoft Copilot Studio experience**.

You'll start by importing the hiring data model and creating a new **Hiring Agent**, then add resume intake, weighted matching, safety controls, autonomous workflows, and evaluations. The finished system uses **skills**, the **Microsoft Dataverse MCP server**, **connected agents**, and **workflows**.

Everything here runs on the **GitHub Copilot harness** - the runtime that gives an agent its orchestrator, its tool-calling behavior, and its reasoning loop. Copilot Studio also offers a **standard harness**, which the classic Operative missions were built upon, and a **GitHub Copilot harness**; this course builds on the GitHub Copilot harness throughout.

> [!INFO] Coming from the classic Operative course?
> This edition covers the **GitHub Copilot harness** at `https://copilotstudio.preview.microsoft.com` - keep the **New experience** toggle **on** throughout every mission. It reuses the same hiring scenario as the [classic Agent Academy Operative course](../operative/index.md) on purpose: building the same system twice is the clearest way to see what the new building blocks replace. Watch out for collapsible sections titled *Coming from the classic Operative course?* - they give you insights into the differences between the standard harness and the GitHub Copilot harness. If you've never used the classic experience, you can skip those sections without missing any required steps.

<!-- Separate adjacent callouts for Markdownlint. -->
> [!WARNING] This course consumes Copilot Credits
> Building, testing **and evaluating** agents and workflows all draw on **Copilot Credits**. This course leans heavily on **Preview** and **Evaluate**, and runs evaluation sets in most of its missions. Confirm your environment has credit capacity before you start.

## 🎯 Mission Objective {#mission-objective}

By completing this course, you'll be able to:

- Design and implement **multi-agent systems** with a central orchestrator and connected specialists
- Use the **Microsoft Dataverse MCP server** with agent instructions to perform complex multi-step operations
- Package reusable behavior and **Python scripts** as **skills**
- Automate resume intake and role matching with **workflows** and weighted evaluation criteria
- Add human review, failed-run alerts, **evaluations**, and published-session checks in **Monitor**

## 🧪 Prerequisites {#prerequisites}

To complete all missions, you'll need:

- Completion of **[Agent Academy Recruit (new experience)](../recruit-nextgen/index.md)** - this course builds on those foundations
- Access to the **new Copilot Studio experience** at `https://copilotstudio.preview.microsoft.com`
- A Power Platform environment with **Microsoft Dataverse** and a Copilot Studio license or trial
- Permission to **create solutions, agents, and workflows**
- The **Microsoft Dataverse MCP Server** available under *Add tool*, in the **Model Context Protocol (MCP)** category (enabled by default in most tenants)

This course has no environment setup of its own. If you need a trial Microsoft 365 tenant, a Copilot Studio trial, or a Power Apps developer environment, work through **Steps 1 to 4** of the [Recruit Course Setup](../recruit-nextgen/00-course-setup/index.md) - Step 5 builds a SharePoint site for a different scenario and isn't needed here. If you already have a Microsoft 365 business tenant with Power Platform and Copilot Studio access, you're good to go.

## 🧭 Curriculum Overview {#curriculum-overview}

Each mission extends the same hiring system, so the agent, skills, data, and workflows accumulate as you progress through the course. Good luck, Operative.

| Lesson | Title | Mission Briefing |
| --- | --- | --- |
| `01` | 🚨 [Establish the Hiring Hub](./01-get-started/index.md) | Import the data model and create the central **Hiring Agent** orchestrator |
| `02` | 📝 [Instructions, Skills and Dataverse MCP](./02-instructions-skills-dataverse-mcp/index.md) | Author instructions and a reusable **skill**, then add the **Dataverse MCP server** that makes it executable |
| `03` | 🎭 [Add a Connected Interview Agent](./03-connected-agent/index.md) | Add a published **connected agent** grounded via the **Dataverse MCP server** |
| `04` | 🛡 [Model, Response and Safety](./04-model-response-and-safety/index.md) | Choose the model, shape responses, then red-team moderation, guardrails and AI disclosure |
| `05` | 📥 [Resume Intake, Matching and Applications](./05-intake-matching-applications/index.md) | Read resumes natively, upsert records via MCP, match on live criteria, and create Job Applications |
| `06` | 🧠 [Generate Documents with a Python Skill](./06-document-skill/index.md) | Generate an interview-prep **Word document** with a code-defined layout in a **Python skill** |
| `07` | ⚡ [Automate Resume Intake with a Workflow](./07-workflow-trigger/index.md) | An email-triggered **workflow** that screens the inbox and files resumes and their PDFs |
| `08` | 🤖 [Add Agents to a Workflow](./08-workflow-agents/index.md) | Put an inline agent and your published Hiring Agent inside the pipeline, then notify Teams |
| `09` | 🧯 [Human Oversight and Handling Alternative Flows](./09-human-oversight/index.md) | **Human review**, alternate flows, observability and a regression pass |
| `10` | 📅 [Schedule Interviews with Work IQ](./10-work-iq-scheduling/index.md) | Turn on **Work IQ** so the Interview Agent can read calendars and book a supervised meeting |
| `11` | 🏅 [Evaluate, Publish, and Monitor Your Agent](./11-publish-and-monitor/index.md) | Evaluation sets, publishing to **Microsoft 365 Copilot** and **Teams**, **Monitor**, and your badge |

> [!NOTE]
> Completing the curriculum earns you the **New Copilot Studio Operative** badge, claimed at the end of Mission 11.

<analytics-tag section="operative-nextgen" />
