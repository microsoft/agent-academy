---
prev:
  text: "Human Oversight and Handling Alternative Flows"
  link: "/operative-nextgen/09-human-oversight"
next:
  text: "Evaluate, Publish, and Monitor Your Agent"
  link: "/operative-nextgen/11-publish-and-monitor"
hide: true
preview: true
short-description: Turn on Work IQ so the Interview Agent can resolve colleagues, read calendars, and book a supervised interview-prep meeting
difficulty: 2
codename: OPERATION CLOCKWORK
time: 30
tags:
  - mcp
  - prebuilt-agents
products: [copilot-studio, microsoft-365, outlook]
industries:
  - hr
created-date: 2026-08-14
last-edited-date: 2026-08-14
---

# 🚨 Mission 10: Schedule Interviews with Work IQ {#mission-10-schedule-interviews-with-work-iq}

<mission-meta />

## 🎯 Mission Brief {#mission-brief}

Welcome back, Agent. Your Interview Agent can prepare an interview, but it cannot book one. That is the last capability gap in the hiring system.

In this mission you'll turn on **Work IQ** - a ready-made capability pack that gives the agent your organization's calendars, people, and work context - then use it to find times both interviewers are free and create the meeting. You'll make the agent *offer* to book once it has delivered its questions, and finish by adding a case to the evaluation set so the new behavior is covered by the same regression suite as everything else.

By the end of this mission the Interview Agent prepares questions, offers to book the prep meeting, and creates a real calendar invitation - only after you confirm the slot.

## 🔎 Objectives {#objectives}

In this mission, you'll learn:

1. What the **Work IQ** MCP servers are, and which ones scheduling needs
1. How to ask the agent, in its **Preview** pane, when you and a colleague are both free
1. Why creating a calendar event deserves the same care as writing to Dataverse - it sends real invitations
1. How to make the agent offer to book the meeting instead of waiting to be asked
1. How to test the new scheduling behavior without booking anything real

## 🧠 Work IQ - one server per capability {#microsoft-iq}

You already saw the "one server, all its actions" pattern with the Dataverse MCP server in [Mission 02](../02-instructions-skills-dataverse-mcp/index.md). **Work IQ** follows exactly the same pattern, except that it is published as a **family of servers** rather than one. Filter the tool catalog to **Model Context Protocol (MCP)** and you will see them listed individually:

| The server | What it brings in |
| --- | --- |
| **User** | People in your organization - who someone is, who they report to, how to reach them |
| **Calendar** | Microsoft **Outlook Calendar** operations, including free/busy lookups and creating events |
| **Mail**, **Teams**, **OneDrive**, **SharePoint** | The matching mail, chat and file capabilities |

You add only the servers a scenario needs, and each one carries its own connection. Scheduling needs two. Add **User** so the agent can resolve a colleague's name to their account, and **Calendar** so it can read free/busy and create the event.

## 📅 Scheduling inside and outside your organization {#internal-and-external-scheduling}

Work IQ reads free/busy for people **in your organization**, so "find a time we are both free" works for **interviewers**. This mission books an internal prep meeting between you and a colleague.

> [!TIP] Try this next
> Scheduling with an external **candidate** is different, because you cannot read their
> calendar. If you want to take that further after this mission, build a workflow that emails a
> candidate three proposed times, waits for their answer with a **Human review** step, and only then
> asks the Interview Agent to create the event. That split is the point, because the agent does the
> reasoning about which times fit, and the workflow does the waiting. All the techniques you need
> you have learned already in Missions 07 and 09.

## 🧪 Lab 10 - Add scheduling to the Interview Agent {#lab-10-add-scheduling-to-the-interview-agent}

### Prerequisites

Before you start this lab you need:

- The **Interview Agent** from [Mission 03](../03-connected-agent/index.md), published, with its **Interview Agent baseline** evaluation set
- A **second test user** in your tenant with a provisioned mailbox and **at least one appointment in the next 24 hours**, so the availability lookups have something to find
- A **controlled course identity** for the Work IQ connection - never a personal or production account

### 10.1 Add the Work IQ tools to the Interview Agent

First we need to give the Interview Agent the two Work IQ servers scheduling needs, and to configure the user account that is used to connect.

1. In the left navigation select **Agents**, open the **Interview Agent**, and go to its **Build** tab. In the right-hand configuration panel, find **Tools** and select **Add tool**.

   ![The Interview Agent Build tab with its Tools section](../assets/screenshot-placeholder.png)

1. Select **Model Context Protocol (MCP)** to filter the catalog to MCP servers.

   The Work IQ servers are listed individually by capability - **Calendar**, **Mail**, **OneDrive**, **SharePoint**, **Teams** and **User** - so filtering is more useful here than searching.

   ![The tool catalog filtered to MCP servers](../assets/screenshot-placeholder.png)

1. Select **User** and review its detail panel.

   The agent reads people and calendars **as the identity on this connection**, so it inherits that person's permissions - it can see exactly what they can see, and nothing more. Use a controlled course identity for this connection rather than a personal or production account, so that the calendars the agent can reach are limited to the ones you intend it to use.

   ![The User MCP detail panel showing its connection requirement](../assets/screenshot-placeholder.png)

1. Create or select the controlled **connection**, then select **Add**. Confirm **User** appears under **Tools**.

   ![The User server installed under Tools](../assets/screenshot-placeholder.png)

1. Select **Add tool** again, filter to **Model Context Protocol (MCP)** once more, and select **Calendar**. Its description reads *"MCP server for Microsoft Outlook Calendar operations"*.

   This is the server that actually writes to the calendar. Without it the agent can find times but cannot create the event.

   ![The Calendar MCP detail panel](../assets/screenshot-placeholder.png)

1. Create or select the same controlled **connection**, select **Add**, then **Save** and **Publish** the agent. Confirm both **User** and **Calendar** appear under **Tools**.

   ![Both Work IQ servers installed under Tools](../assets/screenshot-placeholder.png)

### 10.2 Find times and book a meeting from the agent's Preview pane

Next we put those tools to work in **Preview**, where we can watch the availability calls before letting the agent write anything to a calendar.

1. In **Preview**, resolve an **interviewer** and check availability. Replace `«interviewer»` with the name of a colleague in your organization - the second test user from this lab's prerequisites:

   ```text
   Who is «interviewer», and find 3 times for a 30-minute interview prep meeting
   with them this week.
   ```

   The first call to each new MCP server raises a **Permission Required** card and suspends the turn until you answer it. You will see one for the **Calendar** server and one for the **User** server. Select **Allow** on each.

   ![The Work IQ consent cards pausing the first calls](../assets/screenshot-placeholder.png)

1. With both servers allowed, the turn resumes.

   The agent uses the Work IQ servers to resolve that person, then its *find meeting times* action against **your and the interviewer's calendars - both inside your organization** - and returns three options with their tool calls shown in the trace.

   ![Three mutually free times returned by Work IQ](../assets/screenshot-placeholder.png)

1. Confirm one of the slots the agent actually offered, to create the event:

   ```text
   Book the «time» option and title it "Interview prep - Power Platform
   Developer".
   ```

   Replace `«time»` with one of the three times it returned - don't assume a particular slot, because the options depend on both calendars. The agent calls the *create event* action and confirms the meeting.

   ![The agent confirming the booked interview prep meeting](../assets/screenshot-placeholder.png)

1. Verify the invitation appears in the attendee's mailbox.

   Creating a calendar event **sends a real invitation to a real person**. That makes it a write like any other, so the same rules apply as when you wrote to Dataverse: do it with controlled identities in a sandbox, and read back the attendees and the time before you let the agent book anything.

### 10.3 Let the agent offer to book

Now we can turn that insight into action. Rather than waiting to be asked, the agent will **offer** to book the prep meeting as soon as it has delivered its questions.

1. You should still be in the **Interview Agent** from the previous lab. On its **Build** tab, select **Instructions**.

   ![The Interview Agent Build tab with Instructions open](../assets/screenshot-placeholder.png)

1. Add this to the end of the existing text:

   ```text
   After you deliver interview questions for a candidate, offer to book a
   30-minute interview-prep meeting with the interviewers. If the user accepts,
   ask who should attend and for a timeframe, find mutually free times, and send
   the meeting invitation only after the user confirms one specific slot. Never
   contact the candidate, and never send an invitation without an explicit
   confirmation.
   ```

   ![The scheduling instructions appended to the agent](../assets/screenshot-placeholder.png)

1. Select **Save**, then **Publish**.

   ![The saved and published scheduling instructions](../assets/screenshot-placeholder.png)

1. In **Preview**, ask for interview questions for a candidate. The agent should end its answer by offering to book the prep meeting, and still wait for your confirmation before it creates anything.

   ![The agent offers the prep meeting without booking it](../assets/screenshot-placeholder.png)

### 10.4 Add the scheduling case to your evaluation set

Next we will add a scheduling case to the saved evaluation set, so the agent's scheduling steps stay covered by the regression run. We will test a real booking separately, with controlled users - calendar availability changes minute to minute and creating an event sends invitations, so a case that really called the tools would need named users, a known calendar state, and a cleanup plan.

1. Keep the **Interview Agent baseline** set all-green by adding a case the agent answers from its instructions - no calendar call, no invitation. In the left navigation select **Agents**, open the **Interview Agent**, go to its **Evaluate** tab and open that set.

   ![The Interview Agent baseline set ready to be extended](../assets/screenshot-placeholder.png)

1. Select **Add conversations**, **Write**, choose **Edit conversation** on the new row, enter the case below, and select **Done**:

   | Question | A passing answer describes… |
   | --- | --- |
   | *"How do you schedule an interview-prep meeting, and what do you need from me?"* | Its scheduling flow - resolve the person, find mutually free times, confirm a slot, create the event - and that it needs the attendee plus a duration/timeframe |

   ![The scheduling case saved into the Interview Agent baseline set](../assets/screenshot-placeholder.png)

1. **Save** the test set and select **Evaluate** to run it. It stays **green** because the agent explains its process without booking anything.

   ![The five-case evaluation passing every case](../assets/screenshot-placeholder.png)

1. Confirm a real booking end to end, supervised. In **Preview**, ask the agent to find three 30-minute times with your second test user this week, then confirm one of them to book it. You should see three proposed slots with the Work IQ MCP calls in the trace and, after you confirm, a **calendar invitation in the attendee's mailbox**.

> [!NOTE] Keep booking supervised
> Booking sends real calendar invitations, so this course books only with controlled users and checks
> the resulting event by hand. That is also why the evaluation case above asks the agent to *describe*
> its scheduling process instead of running it: a case that really read a calendar would need named
> test accounts, a fixed time window and a known calendar state, and one that really booked would need
> to clean up after itself every run.

## ✅ Mission Complete {#mission-complete}

The Interview Agent can now take an interview from preparation to a booked meeting, without leaving the conversation.

You can now:

✅ **Work IQ**: You turned on **Work IQ** and gave the agent your organization's people and calendars.

✅ **Supervised booking**: You had the agent find mutually free times, and confirmed one slot before it created the event.

✅ **Offering the next step**: You changed the agent's instructions so it offers the prep meeting instead of waiting to be asked.

✅ **Evaluation coverage**: You added a scheduling case that checks the process without touching a real calendar.

⏭️ [Move to **Evaluate, Publish, and Monitor Your Agent** mission](../11-publish-and-monitor/index.md)

## 📚 Tactical Resources {#tactical-resources}

🔗 [Work IQ in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/)

🔗 [Add tools to an agent](https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent)

🔗 [Model Context Protocol](https://modelcontextprotocol.io/)

<analytics-tag section="operative-nextgen" mission="10-work-iq-scheduling" />
