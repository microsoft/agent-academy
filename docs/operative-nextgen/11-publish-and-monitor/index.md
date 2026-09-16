---
prev:
  text: "Schedule Interviews with Work IQ"
  link: "/operative-nextgen/10-work-iq-scheduling"
next:
   text: "Securing Your Operative Badge"
   link: "/operative-nextgen/course-completion-badges-operative"
hide: false
preview: true
short-description: Run your evaluation sets, publish to Microsoft 365 Copilot and Teams, share the agent, then watch real sessions in Monitor
difficulty: 3
codename: OPERATION HOMECOMING
time: 50
tags:
  - evaluation
  - compliance
products: [copilot-studio, dataverse, teams, microsoft-365-copilot]
industries:
  - hr
created-date: 2026-01-14
last-edited-date: 2026-08-14
---

# 🚨 Mission 11: Evaluate, Publish, and Monitor Your Agent {#mission-11-evaluate-publish-and-monitor-your-agent}

<mission-meta />

## 🎯 Mission Brief {#mission-brief}

Welcome back, Operative. In this mission you'll run the evaluation sets you've been accumulating since Mission 02, stamp a version into the agent's greeting, publish it to **Microsoft 365 Copilot** and **Teams**, share it with the right people, test the whole system the way a recruiter will actually use it, and then open **Monitor** to read back the sessions those real users produced.

## 🔎 Objectives {#objectives}

In this mission, you'll learn:

1. Why a **Connected user** changes what an evaluation's tool calls can see
1. How to version an agent and verify which release a **published channel** is serving
1. How to publish an agent to **Microsoft 365 Copilot** and **Teams**, and share it
1. How **Evaluate** before release and **Monitor** after it answer different questions
1. How user **reactions** feed back into the test sets you keep re-running

## 🏗️ What you built {#what-you-built}

```mermaid
---
config:
   flowchart:
   useMaxWidth: true
---
flowchart LR
   MAIL["Inbound email"] --> WF["Intake Workflow"]
   WF --> HA
   M365["Microsoft 365 Copilot"] --> HA
   TeamsChat["Teams chat"] --> HA
  HA["Hiring Agent<br/>orchestrator + skills"] --> MCP["Dataverse MCP server"]
  HA --> IA["Interview Agent<br/>(connected)"]
  HA --> DOC["Python doc skill"]
  IA --> MCP
  IA --> CAL["Work IQ Calendar MCP"]
  MCP --> DV[("Dataverse")]
   WF --> DV
    WF --> TeamsCard["Teams recruiter card"]
  classDef a fill:#e8f9ef,stroke:#10b981,color:#064e3b
  class HA,IA,WF a
```

| Capability | How you built it |
| --- | --- |
| Data model | Imported the **Operative** solution and its sample roles + criteria |
| Orchestrator | **Hiring Agent** with instructions + a **skill** |
| Data layer | **Microsoft Dataverse MCP server** (read + write) |
| Multi-agent | Published, **connected Interview Agent** grounded via MCP |
| Multimodal intake | **Native** document reading + skill + MCP |
| Matching & applications | **Rubric-based** weighted matching via MCP (Mission 05) |
| Documents | **Python skill** with a code-defined Word layout (`python-docx`) |
| Automation | A native **Workflow** (email → Dataverse → Teams card) |
| Extensibility | **Work IQ** MCP servers for scheduling (Mission 10) |
| Quality | Questions about intended behavior and a known-data MCP case in **Evaluate**, plus reactions and **Monitor** |
| Error handling & observability | Explicit stop and not-found behavior in skills + **Run after** handling in the workflow, traceable in **Monitor** |

## 🧭 Release readiness {#release-readiness}

Use **Evaluate** before publishing, **Reactions** to investigate individual responses, and **Monitor** to inspect published sessions. Each provides different evidence:

| Tool | Answers | When you use it |
| --- | --- | --- |
| **Evaluate** | *Does the agent still do what I built it to do?* | **Before** release, and after every change |
| **Reactions** | *Did this particular answer help the person who got it?* | Continuously, once real users have it |
| **Monitor** | *What actually happened in real sessions?* | **After** release |

Reactions add thumbs-up and thumbs-down controls to published responses, with an optional written comment. Treat each reaction as a signal to investigate, not a score on its own. Use the comments to understand what the user expected, then reproduce important issues in **Preview** or an evaluation.

> [!IMPORTANT] Evaluations consume Copilot Credits
> Building, testing **and evaluating** agents all draw on **Copilot Credits**. This mission runs three full evaluation sets and a published end-to-end test, so confirm your environment has credit capacity before you start.

::: details 🔄 Coming from the classic Operative course?
This mission merges classic **Mission 10: Integrate with MCP Servers** and classic **Mission 11: Collecting feedback from users**. The standard harness checks quality mainly through ad-hoc conversations in the test pane, with deeper runtime investigation pushed out to Application Insights telemetry, and it reaches calendars and people through a custom connector or a purpose-built agent flow for each action. The Powered by GitHub Copilot experience replaces all of that with **Evaluate** for reusable scored test sets, built-in **reactions** for user feedback, **Monitor** for published sessions and tool calls, and reusable evaluation sets you re-run after every change. What you do differently is treat evaluation as a regression suite you re-run after every change rather than a final sign-off, and read your published behavior in Monitor instead of instrumenting it yourself.
:::

## 🧪 Lab 11 - Evaluate, publish, and monitor {#lab-11-evaluate-publish-and-monitor}

### Prerequisites

Before you start this lab you need:

- The **Hiring Agent** and **Interview Agent** from the previous missions, with their evaluation sets
- Permission to **publish** an agent to Microsoft 365 Copilot and Teams - see [Recruit Course Setup Step 4](../../recruit-nextgen/00-course-setup/index.md)
- Microsoft 365 Copilot access for the end-to-end test in Lab 11.6

### 11.1 Re-run your evaluation sets before you publish

The previous missions established three evaluation lineages. Run all three before release: **Hiring Agent baseline** with six cases, **Interview Agent baseline** with five cases, and **Interview Agent - AI Safety Evals** with eleven cases. Every set uses **Single response**, **Compare meaning**, and **Pass score: 70/100**.

1. Open the **Hiring Agent**, go to **Evaluate**, and open **Hiring Agent baseline**. Confirm it contains six cases and its saved configuration is **Single response**, **Compare meaning**, and **70/100**.

   ![Hiring Agent baseline configuration with six test cases](./assets/m11-11-1-1-build-26-evaluate-landing.png)

1. Confirm the connected user profile, run all six cases, and investigate any **failed test** before continuing.

1. Open the **Interview Agent** and review **Interview Agent baseline**. It should contain the four specialist cases from Mission 03 and the scheduling case from Mission 10. Confirm the saved configuration is **Single response**, **Compare meaning**, and **Pass score: 70/100**.

   ![The self-knowledge cases in the test set](./assets/m11-11-1-3-self-knowledge-cases.png)

1. Under **User profile**, select **Manage** and confirm your account is selected. Complete any connection prompts, then select **Save**. The evaluation run calls every tool as that account.

   ![The Manage dialog with the evaluation account selected](./assets/m11-11-1-5-evaluation-profile-connected.png)

1. Select **Evaluate**. Wait for the cases to progress from 0/5 to 5/5 - one set runs at a time, and each case takes a minute or two. When the run finishes, read the **Evaluation summary** for the overall **Score %**, **Pass/Fail** badge, duration, cases completed, test set, data type, user profile, and who ran it.

   ![The self-knowledge set after every case has run](./assets/m11-11-1-6-self-knowledge-run.png)

1. Open **Interview Agent - AI Safety Evals**, confirm it contains eleven cases with the same Compare meaning configuration, select the connected profile, and run it.

   ![The per-case results table for the run](./assets/m11-11-1-8-evaluation-case-table.png)

1. Read the AI Safety **Evaluation summary**. All eleven cases must pass and the score must be at least **70%**.

   ![Interview Agent AI Safety summary with eleven passing cases](./assets/m11-11-1-9-evaluation-case-detail.png)

Do not publish unless all three suites are green. Read a failed case's actual and expected responses before deciding whether the agent or the test needs to change.

> [!TIP] See the full evaluation trace
> In **Preview**, select **History** and open an evaluation conversation to inspect its complete trace,
> including orchestration decisions, tool calls, and responses.

### 11.2 Evaluating tool-using agents

So far, every case in both baselines answers from the agent's own instructions, so neither set has ever proved the agent can actually **call** anything.

A tool case is different. It runs against a real system, as a real identity, over real records, so it can fail for reasons that have nothing to do with the agent. Before you write one, pin down four things:

| Tool | Reason |
| --- | --- |
| **Which identity runs it** | An evaluation calls tools as the account selected under **User profile**, not as you. That account needs its own working connection |
| **Which records it reads** | Name the exact rows and the state you expect them in. A case that reads "the first job role" breaks the day someone adds one |
| **Whether it writes** | A read is repeatable without changing records. A write needs synthetic data, a unique key so re-runs don't collide, and a cleanup step you have actually tested |
| **What counts as evidence** | A green judge score says the *answer* looked good. It doesn't say which tool ran, or whether one ran at all |

The case below is read-only, against a sample row from Mission 01 that nothing in the course changes.

1. Open **Hiring Hub** (see [Mission 01](../01-get-started/index.md#lab-01-set-up-the-hiring-hub) if you need the route), go to **Job Roles**, and confirm **J1001** is still **Power BI Analyst** and **Active**. If your data differs, pick another stable row and adjust the Question and Expected response to match.

   ![The J1001 sample row in the Job Roles list](./assets/m11-11-2-1-j1001-test-data.png)

1. Open the **Interview Agent**, go to **Evaluate**, and open the five-case **Interview Agent baseline** set. Confirm **Single response**, **Compare meaning**, and **Pass score: 70/100**, then add this sixth case:

   | Question | Expected response |
   | --- | --- |
   | *Using the Microsoft Dataverse MCP Server, retrieve job role J1001. Return exactly: role number \| title \| status.* | *J1001 \| Power BI Analyst \| Active* |

   ![The saved Dataverse MCP case in the set](./assets/m11-11-2-2-mcp-test-set-config.png)

1. Select **Manage** under **User profile**, open the **User** list, and select your signed-in account. Complete any connection prompts, then select **Save**.

   ![The account selected for the MCP evaluation](./assets/m11-11-2-3-mcp-profile-connected.png)

1. **Save** the six-case set and select **Evaluate**. All six cases must pass and the score must be at least **70%**.

   ![The extended run passing with the live case](./assets/m11-11-2-4-mcp-run-pass.png)

1. When the run finishes, open the MCP case. The **Agent response** must contain the live values - `J1001 | Power BI Analyst | Active` - and **Tools** must list **Microsoft Dataverse MCP Server**, so you know the tool really ran.

   ![The J1001 case response and the tool it called](./assets/m11-11-2-5-mcp-case-detail.png)

### 11.3 Stamp a version into the greeting

Once the agent is installed from a store card, the person using it has whatever version they installed. A user reporting "the agent did the wrong thing" is only useful if you know which version they were talking to. So before you publish, put the release version into the agent's own greeting, and teach the agent to answer the question directly.

1. In the left navigation select **Agents**, open the **Hiring Agent**, and on the command bar select the **…** menu, then **Settings**.

    ![Hiring Agent command menu with Settings open](./assets/m11-11-3-1-settings-menu.png)

1. Select **Greeting and prompts**. Replace the greeting with the text below, and add `What version are you?` as a **suggested prompt** so the question is one click away in Microsoft 365 Copilot.

   ```text
   👋 Hi! You're chatting with the Hiring Agent - version 1.0.0. I file
   candidate resumes, match candidates to open roles using each role's weighted
   criteria, create job applications, and prepare interviewers. If you don't see
   "version 1.0.0" here, ask your admin to publish the latest version. Attach a
   resume or ask what I can do to get started.
   ```

    ![Greeting and prompts with the versioned welcome](./assets/m11-11-3-2-greeting-prompts.png)

1. Close the Settings dialog and add the same release to the agent's **Instructions**, on a new line at the end. The greeting only appears at the start of a chat, so an agent asked mid-conversation needs the version somewhere it can actually read.

   ```text
   Release identification:
   - The current release is version 1.0.0.
   - When a user asks which version they are using, state this exact version.
   - Never claim a different release version.
   ```

   Select **Save**. The greeting and the instructions now carry the same version, which is the point - one of them is what a user sees, the other is what the agent knows.

    ![Build canvas saved with the release version](./assets/m11-11-3-3-version-release-saved.png)

1. Start a **new** Preview chat and read the greeting back. It should open on **version 1.0.0**, and asking *What version are you?* should return the same answer. An existing chat keeps the old greeting, so this only proves anything in a fresh one.

    ![Preview greeting showing version 1.0.0](./assets/m11-11-3-4-version-greeting.png)

> [!TIP] Bump it every time you republish
> Change the version in both the greeting and instructions before each publish.

### 11.4 Publish to Microsoft 365 Copilot and Teams

The **Hiring Agent** is already published - you published it in Mission 06 so its skills would run, and again in Missions 07 to 09 so the workflow could call it. But publishing only makes the current draft live for connected agents, workflows and skills. Nobody outside Copilot Studio can reach it yet. Adding a **channel** is what puts it in front of users.

1. In the left navigation select **Agents** and open the **Hiring Agent**.

1. On the **Build** tab find the **Channels** area. Select **Add channel** to see what this agent can be published to - **Teams + Microsoft 365**, **Demo website** and **App**. A channel already added is marked **Added**, and a channel your authentication settings rule out is shown but cannot be selected.

   ![The Add a channel dialog listing the available channels](./assets/m11-11-4-2-channel-picker.png)

1. Select **Teams + Microsoft 365** and confirm with **Add channel**.

   ![Teams and Microsoft 365 Add channel confirmation](./assets/m11-11-4-3-channel-confirmation.png)

1. The **Microsoft 365 and Microsoft Teams** dialog has four tabs: **Availability**, **About info**, **Use and share** and **App manifest**.

   ![Published agent channel details dialog](./assets/m11-11-4-4-channel-details.png)

1. Select **Availability**, choose **Microsoft 365 Copilot and Microsoft Teams**, then confirm the selection. This lists the agent in the Agent Store and makes it available in Teams.

   Read the warning above the choice before you continue: **this setting cannot be changed after publishing**.

   ![Teams and Microsoft 365 publication and Copilot availability enabled](./assets/m11-11-4-5-channel-prepared.png)

1. Before you publish, select **About info** and review the **Short description**, **Long description**, **Show an agent disclaimer in Microsoft 365 Copilot**, **Developer name**, **Website**, and **Terms of use** fields.

   ![About info for the Agent Store listing](./assets/m11-11-4-6-about-info.png)

1. Select **Save** and wait. When it completes, the **Use and share** tab offers **View in Copilot** and **View in Teams**.

   ![The Use and share tab offering both host links](./assets/m11-11-4-7-channel-enabled.png)

1. Select **View in Teams**. Teams opens the agent's store card with the supported client and a link to the requested permissions. The action reads **Open** if you already installed this version during an earlier run.

   ![The Hiring Agent store card in Teams](./assets/m11-11-4-8-teams-agent-details.png)

1. Select **Add**. Teams installs the agent for **you only** and opens it as its own chat. If the action reads **Open**, select it to return to the installed agent's chat.

1. Send it a question that can only be answered from your data, so you are testing the *published* agent rather than the model:

   ```text
   Which open roles are we hiring for right now? List the role number and title
   for each.
   ```

   The reply should name real role numbers (**J####**) from your Job Roles table.

   ![The published agent answering from Dataverse in Teams](./assets/m11-11-4-10-teams-first-reply.png)

1. Back on the **Use and share** tab, select **View in Copilot** to open the **Agent Store** card, then **Add**. The private install shows the app **version**, cross-client support, and requested permissions before it installs. It now appears as an agent you can chat with in M365 Copilot.

   ![The Hiring Agent installed from its Agent Store card](./assets/m11-11-4-11-agent-store-add.png)

**If Teams tries to open the desktop app.** The **View in Teams** link goes through a launcher that offers to open the Teams desktop client.
Choose **Use the web app instead** if you want to stay in the browser - the agent behaves identically
in both.

<!-- Separate adjacent callouts for Markdownlint. -->
> [!WARNING] Publish from a training tenant
> Publishing and adding the agent makes it available to users in your tenant, so do this only in a
> **sandbox/training** tenant.

### 11.5 Share with the right people

Publishing makes the agent *available*, while **sharing** decides *who can use it*. The **Share** button stays disabled until the agent is **published to Microsoft 365** - which you just did - so it's now live.

Sharing with a colleague or group is optional for this lab. You can keep access limited to yourself.

1. On the **Hiring Agent** toolbar, select **Share** to open **Share Hiring Agent**.

   ![Share Hiring Agent access dialog](./assets/m11-11-5-1-share-dialog-open.png)

1. Optionally, in **Add a name, group, or email**, type a colleague or security group and select them from the directory. They're added under **People who can use the agent** - you (the **Owner**) are already listed and role-locked.

1. Decide **organization-wide** access. Under **Organization**, **Everyone in your organization**, select the role control to choose between **No permissions, unless specified** (default - only invited people) and **End user access** (anyone in the org can use it and manage their own connections).

   ![The organization access menu with both role options](./assets/m11-11-5-3-share-roles.png)

1. If you changed access, select **Share**. Otherwise, close the dialog. If you granted someone access, you can use **Choose a channel to copy a link** to send an install link - note that a link only works for users who **already have access**.

   ![The sharing list with only the owner granted access](./assets/m11-11-5-4-sharing-saved.png)

### 11.6 End-to-end test from Microsoft 365 Copilot

Now pretend that we are shipping a second release, then run the main hiring chain from the surface a hiring manager would use.

1. On the Hiring Agent's **Build** tab select **Settings**, then **Greeting and prompts**, and change the version in the greeting to **1.1.0**. Change the same version under *Release identification* in **Instructions**. Select **Save**, then **Publish**.

1. Open the **Hiring Agent** in **Microsoft 365 Copilot** and select the **What version are you?** starter you added in Lab 11.3:

   ```text
   What version are you?
   ```

   It should answer **1.1.0**. If it still says **1.0.0**, wait for publishing to finish and ask again in a **new** chat.

1. **Attach a resume** - use one of the sample resumes you downloaded in [Mission 05](../05-intake-matching-applications/index.md).

1. File the candidate first:

   ```text
   File this candidate.
   ```

1. Watch the **skill + Dataverse MCP** intake the candidate and report the Candidate and Resume numbers (C#####/R#####).

   In the following prompts, replace `«candidate number»` and `«resume number»` with the numbers returned by intake.

1. Ask for the weighted match in a separate turn:

   ```text
   Match candidate «candidate number» to the best open role.
   ```

1. Review the recommendation, then explicitly confirm the matched role before creating a Job Application:

   ```text
   I confirm job role J1004. Create the application for candidate «candidate number»
   using resume «resume number». If this candidate already has an application for
   J1004, I confirm updating that application's Resume lookup to «resume number».
   Reuse its Application Number and do not create a duplicate. Verify the saved
   Candidate, Resume, and Job Role links before reporting the Application Number.
   ```

1. Confirm that the agent reports the Job Application number (A#####). A candidate used in an earlier mission may already have an application for this role. In the **Hiring Hub**, open the reported application and check that its **Candidate**, **Resume**, and **Job Role** lookups match the numbers confirmed above. The **Resume** must be the one returned by this intake before we generate the document.

1. Now ask for the interview preparation, so the connected agent and the document skill work from a completed application:

   ```text
   Now prepare interview questions for that role and generate the interview-prep
   document.
   ```

1. Watch the **connected Interview Agent** prepare questions and the **Python document skill** return the **`.docx`**.

1. Verify in the **Hiring Hub** app that the Candidate, Resume, and Job Application rows remain linked, and check that the downloaded document names the reported application and uses the current resume.

1. Email the monitored mailbox a resume and confirm the **autonomous intake workflow** files a row and posts the **Teams card**. Open the workflow's **Activity** tab and select the newest run to inspect it node by node.

You have just tested **orchestration, skills, MCP, multimodal intake, matching, applications, a connected agent, and a Python document** from the published channel.

### 11.7 Review published sessions in Monitor

Use **Evaluate** to compare saved cases before release. Use **Monitor** to inspect sessions from the published agent.

1. Open **Monitor**.

1. The **Summary** and **Overview** cards show published **Conversation sessions**, **Total reactions**, and **Average DAU** for the selected time range. Average DAU is the average number of daily active users during that range. Preview conversations do not appear here, and with low traffic you may see *Not enough traffic to generate AI Summary*.

   ![Monitor showing published session and run activity](./assets/m11-11-7-1-monitor-published-activity.png)

1. Review **Total runs**, **Success rate**, and **Avg run duration** when those metrics are available.

1. Set the **Time range**, choose the **Channel** filter, and select **See all** to inspect the available sessions. New activity can take up to 30 minutes to appear. If **Download Sessions** is available, choose the UTC date range containing the conversation, then filter **ChatTranscript** by a reported record number (R#####, C#####, or A#####), or use **SessionId** to identify it.

## ✅ Mission Complete {#mission-complete}

Your hiring system is live, measured, and observable - and you finished the Operative course.

You can now:

✅ **Regression testing**: You re-ran all three evaluation sets and read the results properly.

✅ **Identity-aware evaluation**: You added a tool case with a **Connected user**.

✅ **A traceable release**: You stamped version 1.0.0 into the greeting and instructions, then published version 1.1.0.

✅ **Release**: You published to **Microsoft 365 Copilot** and **Teams**, and shared the agent deliberately.

✅ **Post-release observability**: You read real published sessions in **Monitor**.

⏭️ [Move to **Securing Your Operative Badge**](../course-completion-badges-operative/index.md) to complete the Operative path.

## 📚 Tactical Resources {#tactical-resources}

🔗 [Analytics overview in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/analytics-overview)

🔗 [Analyze autonomous agent health](https://learn.microsoft.com/microsoft-copilot-studio/analytics-improve-agent-health)

🔗 [Publish your agent to channels](https://learn.microsoft.com/microsoft-copilot-studio/publication-fundamentals-publish-channels)

🔗 [Share an agent](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots)

🔗 [Add your agent to Microsoft Teams](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams)

🔗 [Copilot Studio documentation](https://learn.microsoft.com/microsoft-copilot-studio/)

<analytics-tag section="operative-nextgen" mission="11-publish-and-monitor" />
