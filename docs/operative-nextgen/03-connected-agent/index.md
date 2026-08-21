---
prev:
  text: "Instructions, Skills and Dataverse MCP"
  link: "/operative-nextgen/02-instructions-skills-dataverse-mcp"
next:
  text: "Model, Response and Safety"
  link: "/operative-nextgen/04-model-response-and-safety"
hide: true
preview: true
short-description: Build a published Interview Agent grounded via MCP and connect it to the Hiring Agent for multi-agent delegation
difficulty: 2
codename: OPERATION SYMPHONY
time: 40
tags:
  - multi-agent
products: [copilot-studio, dataverse]
industries:
  - hr
created-date: 2026-01-14
last-edited-date: 2026-08-13
---

# 🚨 Mission 03: Add a Connected Interview Agent {#mission-03-add-a-connected-interview-agent}

<mission-meta />

## 🎯 Mission Brief {#mission-brief}

Welcome back, Agent. In this mission you'll add the **Interview Agent** as a connected specialist to the Hiring Agent.

Interview preparation has its own audience and responsibility. The **Hiring Agent** continues to coordinate intake and applications, while the **Interview Agent** answers grounded questions for interviewers and hiring managers. The Hiring Agent delegates to it when a request concerns interview preparation.

## 🔎 Objectives {#objectives}

In this mission, you'll learn:

1. What **connected agents** are and when to use one instead of folding everything into one agent
1. How to give a specialist agent access to your hiring data with the **Dataverse MCP server**
1. How to publish a specialist agent and make it **connectable**
1. How to **connect** the Interview Agent to the Hiring Agent and test **connected agent delegation**
1. How to build and run the specialist's own **evaluation** set

## 🔗 Connected agents {#connected-agents}

A **connected agent** is a full, independent agent that another agent can call for help - like a generalist bringing in a specialist colleague for one part of a job. The orchestrator stays in charge of the conversation and just *delegates* a well-defined task (here, interview preparation), then folds the specialist's answer back into its own reply.

An agent becomes connectable when:

- Its **AI & behavior**, **Orchestration**, **Allow other agents to connect** toggle is **on**, and
- It is **published** in the same environment.

Use a connected agent (rather than one giant agent) when the specialist has its own lifecycle, could be reused across solutions, or is maintained by a different team - all true for an interview-prep assistant.

::: details 🔄 Coming from the classic Operative course?
The classic course offered two ways to bring in a second agent: **child agents** and **connected agents**. The Powered by GitHub Copilot experience keeps connected agents and **drops child agents entirely** - where we might have used a child agent, we now use specialist **skills**.

A connected agent is a complete agent in its own right: it has its own instructions, its own tools, its own evaluation set, and its own publish cycle. Splitting work out is a decision about ownership and lifecycle, not about picking an authoring construct.

Grounding changed too. A specialist used to be grounded by adding **Dataverse** as a **Knowledge** source. Here you add the **Dataverse MCP server** as a **tool** instead, and the specialist reads live records rather than an indexed copy.
:::

## 🧪 Lab 03 - Build and connect the specialist {#lab-03-build-and-connect-the-specialist}

### Prerequisites

Before you start this lab you need:

- The **Hiring Agent** from [Mission 01](../01-get-started/index.md), with the `resume-intake` skill and the **Dataverse MCP server** added in [Mission 02](../02-instructions-skills-dataverse-mcp/index.md)
- Permission to **publish** an agent in this environment - see [Recruit Course Setup Step 4](../../recruit-nextgen/00-course-setup/index.md) if publishing is blocked
- The **Job Roles** and **Evaluation Criteria** sample data loaded in Dataverse

A connected agent can only take delegated work once it has its own instructions and data access, is published, and is connected to the orchestrator. Let's build that complete path for the **Interview Agent**, test the delegation in **Preview**, and give it its own evaluation set.

### 3.1 Create the Interview Agent

The Hiring Agent needs a separate specialist agent for interview preparation.

1. In the left navigation select **Agents**, then **New Agent**.

    ![New Agent control in the agents list command bar](../assets/screenshot-placeholder.png)

1. Name it:

   ```text
   Interview Agent
   ```

    ![New specialist named Interview Agent](../assets/screenshot-placeholder.png)

1. Set the **Instructions**:

   ```text
   You are the Interview Agent. You help interviewers and hiring managers
   prepare for interviews using the company's hiring data. You never contact
   candidates.

   You answer questions about Resumes, Candidates, Job Roles, Job Applications,
   and Evaluation Criteria, and you help prepare interviews.

   The only valid identifiers are:
   - ResumeNumber (ppa_resumenumber) -> format R#####
   - CandidateNumber (ppa_candidatenumber) -> format C#####
   - ApplicationNumber (ppa_applicationnumber) -> format A#####
   - JobRoleNumber (ppa_jobrolenumber) -> format J#####

   How to work:
   - Ask clarifying questions if required information is missing (for example,
     if asked for interview questions without a role, ask for the role).
   - Use the hiring data to ground every answer. Do not invent or guess facts.
   - Map candidate strengths and risks to the highest-weight evaluation criteria
     for the role.
   - Be concise, professional, and evidence-based. Never address or message a
     candidate.
   ```

   The Build canvas now shows the agent's **Instructions** - its identity, the identifier rules, and the
   rule that every answer has to be grounded in the hiring data. The **Tools**, **Knowledge**, and
   **Connected agents** panels are still empty, and you fill those in over the next two labs.

    ![Interview Agent instructions and empty component panels](../assets/screenshot-placeholder.png)

   > [!NOTE] The default model
   > As with the Hiring Agent in Mission 01, a new agent starts on the platform's default model - in
   > this build, **Claude Opus 5**, shown under **Model** on the right of the Build canvas. Leave it as
   > it is. Every step in this mission assumes that model, and you'll compare models and change this
   > deliberately in [Mission 04](../04-model-response-and-safety/index.md).

1. Before the first save, open the more options menu, **Settings**, **Agent details** and set the agent's **identity**. As with the Hiring Agent in Mission 01, these fields become read-only once you save:

   | Field | Value |
   | --- | --- |
   | **Schema name** | `ppa_interviewagent` |
   | **Solution** | Operative |
   | **Primary language** | English |

    ![Interview Agent schema and solution settings](../assets/screenshot-placeholder.png)

1. Close **Settings**, then select **Save**.

    ![The Save control on the Interview Agent command bar](../assets/screenshot-placeholder.png)

### 3.2 Configure Tools

Before the Hiring Agent can delegate tasks to it, the Interview Agent needs access to the hiring data and permission to accept connections. Configure both prerequisites, then publish it.

1. On the **Build** canvas, next to **Tools** select **➕ Add tool**.

    ![Add tool control in the Tools building block](../assets/screenshot-placeholder.png)

1. Select the **Model Context Protocol (MCP)** filter, then choose **Microsoft Dataverse MCP Server**. It's the same tool you gave the Hiring Agent in [Mission 02](../02-instructions-skills-dataverse-mcp/index.md#lab-02-author-the-skill-and-connect-the-data-layer), on a different authentication mode.

    ![Add a tool catalog filtered to MCP servers](../assets/screenshot-placeholder.png)

1. Select the connection, and select **Add**. Open the installed tool, set **Authentication mode** to **Maker**, then select **Confirm**.

    ![Dataverse MCP server with Maker authentication](../assets/screenshot-placeholder.png)

    > [!NOTE] Why Maker here, when the Hiring Agent uses User
    > **User** is normally the right default - every caller stays inside their own Dataverse
    > permissions. It works for the Hiring Agent because you talk to that agent *directly*, where its
    > consent card renders with working **Allow** and **Deny** buttons.
    >
    > Currently, a **connected** agent cannot show you that card. The Hiring Agent treats the delegated
    > call as successful, answers without the Interview Agent's data, and may even ask you to select an
    > **Allow** button that was never shown. **Maker** runs the delegated call on your own connection,
    > so no consent is ever requested.
    >
    > Because the call runs on your connection, anyone you share the agent with reads Dataverse through
    > *your* permissions. That's why the next step restricts the connection to three read-only actions:
    > with Maker authentication, that restriction is the only thing limiting what a user can reach.

1. Restrict the tool to the actions this agent actually needs. In the installed tool, turn **Enable all tools** off and enable only **search**, **describe** and **read_query**.

   The Interview Agent's own instructions say it must never create, update or delete a record, so restrict the tools to remove those that are not needed. This is the same least-privilege reasoning you applied to the Hiring Agent in [Mission 02](../02-instructions-skills-dataverse-mcp/index.md#lab-02-author-the-skill-and-connect-the-data-layer).

   ![Dataverse MCP restricted to three read actions](../assets/screenshot-placeholder.png)

1. Remove the default **"Search all websites"** knowledge source so the Interview Agent answers **only** from the hiring data: open the **Knowledge** panel, select the **Search all websites** entry, and delete it. Leaving it in would let the agent answer from the public web instead of grounding every answer in your Dataverse records.

    ![Knowledge panel listing the Search all websites source](../assets/screenshot-placeholder.png)

1. Open the more options menu, **Settings**.

    ![More options menu with Settings command](../assets/screenshot-placeholder.png)

1. Select the **AI & behavior** tab and confirm **Orchestration**, **Allow other agents to connect** is **on** - this is what lets the Hiring Agent invoke this agent as a tool.

    ![Allow other agents to connect enabled](../assets/screenshot-placeholder.png)

1. Select **Save**, then **Publish** the Interview Agent. When publishing finishes, the **Monitor** tab becomes available.

    ![Save and Publish on the Interview Agent command bar](../assets/screenshot-placeholder.png)

> [!NOTE] Publishing vs Channels
> This is the first of many publishes, so it's worth being precise about what one does. **Publishing**
> makes the current draft live for anything that calls the agent programmatically - connected agents,
> workflows, and its own skills. It does **not** put the agent in front of a single user.
>
> Getting it in front of users takes a **channel**, which you add in
> [Mission 11](../11-publish-and-monitor/index.md). Until then the agent is published and reachable only
> from inside Copilot Studio as a connected agent - which is what we need to be able to call the
> connected agent from the Hiring Agent.
>
> If the Interview Agent is greyed out when you try to connect it in the next lab, it wasn't published -
> return here and **Publish** it first.

### 3.3 Connect it to the Hiring Agent

With the specialist published and available for connections, we'll add it to the Hiring Agent and describe exactly which interview-prep requests the orchestrator should delegate.

1. In the left navigation select **Agents**, then open the **Hiring Agent**.

    ![Hiring Agent in the Copilot Studio agents list](../assets/screenshot-placeholder.png)

1. Go to its **Build** tab. Next to **Connected agents**, select **➕ Add connected agent**.

    ![Add connected agent control on the Build canvas](../assets/screenshot-placeholder.png)

1. Choose **Interview Agent** from the list of published agents.

    ![Published Interview Agent in connection picker](../assets/screenshot-placeholder.png)

1. Set the delegation **description**. This description is *critical*: the orchestrator reads it to decide when to hand work over, so scope it tightly to **interview preparation only** - otherwise it will also route data lookups and matching (which the Hiring Agent's own skill and tools handle) to the specialist:

   ```text
   Use ONLY to prepare interviewers for a specific candidate and role: generate
   tailored interview
    questions and an interviewer briefing grounded in the hiring data. Do NOT
    use for document or file generation, interview prep packs, requests handled
    by local skills, listing, counting, searching, matching or scoring
    candidates to roles, or creating records; the Hiring Agent handles those
    itself with its own skills and tools.
   ```

    ![Connected agent delegation description configuration](../assets/screenshot-placeholder.png)

   > [!IMPORTANT] A broad description causes misrouting
   > If the description says the specialist "answers questions about Resumes, Job Roles, Evaluation
   > Criteria…", the orchestrator will hand **data and matching** requests to it too - even a simple *"how
   > many criteria does J1004 have?"* - instead of using its own Dataverse MCP tool. Keep the description
   > strictly about **preparing interviewers**, and the orchestrator delegates only genuine interview-prep
   > work while handling data and matching itself.

1. Select **Connect**, then select **Save**. The Interview Agent now appears under **Connected agents**.

    ![Interview Agent listed under Connected agents](../assets/screenshot-placeholder.png)

### 3.4 Test multi-agent collaboration

To check the routing, send the Hiring Agent one request that needs its own data tools and the Interview Agent's specialist instructions. The trace should show which part the orchestrator delegates.

1. Still in the **Hiring Agent**, select the **Preview** tab.

    ![Hiring Agent Preview ready for collaboration test](../assets/screenshot-placeholder.png)

1. Ask for something that needs both agents. The candidate profile is supplied in the prompt because resume intake starts in Mission 05; the Hiring Agent still reads J1004 and its weighted criteria from Dataverse:

   ```text
   Prepare me to interview Jordan Example for the Power Platform Developer role
   J1004. For this test, Jordan has four years of Power Platform experience,
   PL-400 certification, strong Power Apps and Power Automate skills, and weaker
   stakeholder communication. Use J1004 evaluation criteria. Do not create
   records.
   ```

    Watch the orchestrator **delegate** the interview-prep part to the Interview Agent - you'll see a connected-agent call in the trace. Expand the **Interview Agent** call to see the exact context the Hiring Agent passed across:

   ![Hiring Agent delegation trace for Interview Agent](../assets/screenshot-placeholder.png)

1. Try a few more prompts and watch which ones the orchestrator keeps for itself and which it hands over:

   ```text
   Which job roles are currently open? List each role number and title.
    How many evaluation criteria does J1004 have, and what are their weights?
   ```

    ![Hiring Agent keeps an ordinary J1004 criteria lookup local](../assets/screenshot-placeholder.png)

> [!TIP] Distinct descriptions drive good delegation
> The orchestrator picks a connected agent using its **description** - the same rule as skills
> (Mission 02). Keep the Interview Agent's description focused on *interview preparation and questions
> about hiring data* so the Hiring Agent delegates only the right requests.

### 3.5 Evaluate the Interview Agent

The **Evaluate** tab tests one agent at a time, so the Hiring Agent's set from Mission 02 does not cover this specialist - the Interview Agent needs an evaluation set of its own.

Like the Hiring Agent's baseline in Mission 02, this first set asks the specialist about itself: who it is, which identifiers it uses, what it does when the hiring data doesn't support an answer, and where its boundaries are. None of those cases need live data, so the set behaves the same in any environment and you can re-run it after any change without setting anything up first.

1. If you are not already in the **Interview Agent**, select **Agents** in the left navigation and open it. Go to its **Evaluate** tab. The agent has no test sets yet, so it opens the **Data source** screen straight away.

    ![Evaluate tab open on the Data source screen](../assets/screenshot-placeholder.png)

1. Choose **Or, write some questions yourself**, keeping **Data type: Conversation** and the **General quality** test method.

    ![Manual Interview Agent evaluation ready for authored cases](../assets/screenshot-placeholder.png)

1. Select **Add conversations** (next to *Review your test cases*), then choose **Write**.

    ![Add conversations menu with Write highlighted](../assets/screenshot-placeholder.png)

1. Add these four **positive** cases. For each one, paste the **Question** and the **Expected answer** into the **Reference** box, then select **Done**:

   | # | Question | Reference answer |
   | --- | --- | --- |
   | 1 | Who are you, and what do you help interviewers with? | I am the Interview Agent. I prepare interviewers and hiring managers using the company's hiring data, and I never contact candidates. |
   | 2 | What identifier formats do you use for resumes, candidates, applications, and job roles? | Resume numbers use R#####, Candidate numbers use C#####, Application numbers use A#####, and Job Role numbers use J#####. |
   | 3 | What do you do when required information is missing or the hiring data does not support an answer? | I ask a clarifying question when required information is missing, ground every answer in the hiring data, and never invent or guess facts. |
   | 4 | Will you ever contact a candidate directly? Why or why not? | No. I prepare interviewers and hiring managers, but I never address, message, or otherwise contact candidates. |

    ![Write dialog with the first question and reference](../assets/screenshot-placeholder.png)

1. Check all four cases are listed before you go on.

    ![Four specialist baseline cases listed in the evaluation](../assets/screenshot-placeholder.png)

1. Select **Manage**, select your signed-in account as the **user profile**, open the **User** list and verify the account says **Connected**, then **Save** it. Saving the intended identity now gives any grounded case you add later a known account to call tools using.

    ![Connected evaluation profile for signed-in account](../assets/screenshot-placeholder.png)

1. Name the set `Interview Agent baseline` and **Save** it. Reopen it and confirm all four cases remain in the saved set:

    ![Saved Interview Agent test set with all four cases](../assets/screenshot-placeholder.png)

1. Select **Evaluate**. All four cases should come back **Pass** - each one asks about a rule that is
    already written into the agent's instructions, so there is nothing here the agent has to work out
    for itself:

    ![Interview Agent evaluation with four passing cases](../assets/screenshot-placeholder.png)

A **Fail** in this set therefore means the instructions aren't doing what you expect. A baseline should be green today, so that a red result tomorrow tells you something changed.

### 3.6 Re-run the whole set after every change

A **regression test** re-runs *all* our existing checks after a change so we catch anything the change broke. We do this every time we change an agent:

1. In the **Interview Agent**, go to the **Evaluate** tab and note the set's **current score** under **Recent results** before you re-run it - that's the number you'll compare against.

    ![Evaluate landing page with test sets and Recent results](../assets/screenshot-placeholder.png)

1. Find the saved **Interview Agent baseline** test set, then select **Evaluate** to run the **entire** set.

    ![Re-running the saved test set from Evaluate](../assets/screenshot-placeholder.png)

1. When the run finishes, compare its result with the score you noted. Confirm all four cases completed
    and inspect any case that changed from **Pass** to **Fail**:

    ![Latest Interview Agent rerun with four passes](../assets/screenshot-placeholder.png)

You'll do this over and over from here on. In **Mission 04**, for example, you give this agent new rules about date formats and protected topics. Once those rules exist you add cases that check them - and then re-run the *whole* set, so you can see the new behavior working and confirm at the same time that identity, identifiers, grounding and the contact boundary all still behave as they did before.

## ✅ Mission Complete {#mission-complete}

Mission 03 is complete. You can now:

✅ **Multi-agent understanding**: You learned connected agents and how to enable them (Allow other agents to connect + Publish).

✅ **A grounded specialist**: You built the **Interview Agent** grounded via the **Dataverse MCP server** (Dataverse is *not* a Knowledge source).

✅ **Delegation**: You connected it to the Hiring Agent and tested orchestrator → specialist delegation.

⏭️ [Move to **Model, Response and Safety** mission](../04-model-response-and-safety/index.md)

## 📚 Tactical Resources {#tactical-resources}

🔗 [Add connected agents](https://learn.microsoft.com/microsoft-copilot-studio/authoring-add-other-agents)

🔗 [Multi-agent orchestration in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/guidance/multi-agent-patterns)

<analytics-tag section="operative-nextgen" mission="03-connected-agent" />
