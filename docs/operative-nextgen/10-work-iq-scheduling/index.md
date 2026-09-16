---
prev:
  text: "Human Oversight and Handling Alternative Flows"
  link: "/operative-nextgen/09-human-oversight"
next:
  text: "Evaluate, Publish, and Monitor Your Agent"
  link: "/operative-nextgen/11-publish-and-monitor"
hide: false
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

Welcome back, Agent. Your Interview Agent can prepare an interview, but it cannot book one.

In this mission you'll turn on **Work IQ** - a ready-made capability pack that gives the agent your organization's calendars, people, and work context - then use it to find times both interviewers are free and create the meeting. You'll make the agent *offer* to book once it has delivered its questions, and finish by adding a case to the evaluation set so the new behavior is covered by the same regression suite as everything else.

By the end of this mission the Interview Agent prepares questions, offers to book the prep meeting, and creates a real calendar invitation - only after you confirm the slot.

## 🔎 Objectives {#objectives}

In this mission, you'll learn:

1. What the **Work IQ** MCP servers are, and which ones scheduling needs
1. How to add supervised scheduling instructions before testing the agent in **Preview**
1. How to ask the agent when you and a colleague are both free
1. Why creating a calendar event deserves the same care as writing to Dataverse - it sends real invitations
1. How to test the new scheduling behavior without booking anything real

## 🧠 Work IQ - one server per capability {#microsoft-iq}

You already saw the "one server, all its actions" pattern with the Dataverse MCP server in [Mission 02](../02-instructions-skills-dataverse-mcp/index.md). **Work IQ** follows exactly the same pattern, except that it is published as a **family of servers** rather than one. Filter the tool catalog to **MCP** and you will see them listed individually:

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

### 10.1 Add Work IQ and supervised scheduling

First we need to give the Interview Agent the two Work IQ servers scheduling needs, configure the user account used to connect, and add the rules that govern when it may send an invitation.

1. In the left navigation select **Agents**, open the **Interview Agent**, and go to its **Build** tab. In the right-hand configuration panel, find **Tools** and select **Add tool**.

   ![The Interview Agent Build tab with its Tools section](./assets/m10-10-1-1-interview-agent-build-ready.png)

1. Select **MCP** to filter the catalog to MCP servers.

   The Work IQ servers are listed individually by capability - **Calendar**, **Mail**, **OneDrive**, **SharePoint**, **Teams** and **User** - so filtering is more useful here than searching.

   ![The tool catalog filtered to MCP servers](./assets/m10-10-1-2-work-iq-catalog.png)

1. Select **User** and review its detail panel.

   The **User** server resolves people using the permissions of its connection's identity. Select **Add** to open connection setup.

   ![The User MCP detail panel with Add available](./assets/m10-10-1-3-user-connection.png)

1. In **Creating a connection to use User**, enter a display name and select **Create**. Sign in with the controlled course account that meets this lab's prerequisites. If an existing connection is offered, select the connection for that account. After connection setup completes, confirm **User** appears under **Tools**.

   ![User installed beside Dataverse before adding Calendar](./assets/m10-10-1-4-user-only-connected.png)

1. Select **Add tool** again, filter to **MCP** once more, and select **Calendar**. Its description reads *"MCP server for Microsoft Outlook Calendar operations"*.

   The **User** server resolves people. The **Calendar** server supplies both availability lookups and event creation. Select **Add** to open Calendar connection setup.

   ![The Calendar MCP detail panel](./assets/m10-10-1-5-calendar-connection.png)

1. In **Creating a connection to use Calendar**, enter a display name and select **Create**. Sign in with the controlled course account, or select its existing Calendar connection if offered. After connection setup completes, confirm both **User** and **Calendar** appear under **Tools**. The User and Calendar connections are configured independently, even when they use the same account.

   ![Both Work IQ servers installed under Tools](./assets/m10-10-1-6-calendar-connected.png)

1. On the **Build** tab, select **Instructions**.

   ![The Interview Agent Build tab with Instructions open](./assets/m10-10-3-1-interview-agent-build.png)

1. Add this to the end of the existing text:

   ```text
   After you deliver interview questions for a candidate, offer to book a
   30-minute interview-prep meeting with the interviewers. If the user accepts,
   ask who should attend and for a timeframe, find mutually free times, and send
   the meeting invitation only after the user confirms one specific slot. Never
   contact the candidate, and never send an invitation without an explicit
   confirmation.
   ```

   ![The scheduling instructions appended to the agent](./assets/m10-10-3-2-scheduling-instructions.png)

1. Select **Save**, then **Publish**, and confirm with **Publish agent**.

   ![The completed scheduling instructions ready to save and publish](./assets/m10-10-3-3-scheduling-instructions-published.png)

### 10.2 Find times and book a meeting from the agent's Preview pane

Next we put those tools to work in **Preview**, where we can watch the availability calls before letting the agent write anything to a calendar.

1. In **Preview**, resolve an **interviewer** and check availability. Replace `«interviewer»` with the name of a colleague in your organization - the second test user from this lab's prerequisites:

   ```text
   Who is «interviewer», and find 3 times for a 30-minute interview prep meeting
   with them in the next five business days. Do not create an event yet.
   Reply with their name and a concise table of three mutually free dates,
   times in the UTC time zone.
   ```

   When a **Permission Required** card appears, select **Allow** for the requested **User** or **Calendar** operation. The cards can arrive together or one at a time.

   ![Work IQ permission requests with Allow available](./assets/m10-10-2-1-consent-cards.png)

1. With both servers allowed, the turn resumes.

   The agent uses the Work IQ servers to resolve that person, then its *find meeting times* action against **your and the interviewer's calendars - both inside your organization** - and returns three options with their tool calls shown in the trace.

   ![Three mutually free times returned by Work IQ](./assets/m10-10-2-2-availability-options.png)

1. Confirm one of the slots the agent actually offered, to create the event:

   ```text
   I confirm «start date and time» to «end date and time» UTC with «interviewer».
   Book this exact slot and title it "Interview prep - Power Platform Developer".
   Do not substitute another time. Reuse an existing event only if its title,
   start, end, organizer and attendee all match; otherwise create the event
   and send the invitation. Read the event back from the calendar to verify
   those fields and that it is not cancelled. Confirm briefly without join
   links, meeting IDs or passcodes.
   ```

   Replace the dates and times with one offered slot, and `«interviewer»` with the same colleague's email address. Check the returned event's start and end against your confirmation. An adjacent meeting with the same title is not a match, and a follow-up question about whether to create the event is not a completed booking.

   ![The agent confirming the booked interview prep meeting](./assets/m10-10-2-3-booking-confirmed.png)

1. Verify the invitation appears in the attendee's mailbox.

   Creating a calendar event **sends a real invitation to a real person**. That makes it a write like any other, so the same rules apply as when you wrote to Dataverse: do it with controlled identities in a sandbox, and read back the attendees and the time before you let the agent book anything.

### 10.3 Verify the supervised scheduling offer

Next we will check that the published rules make the agent offer the meeting after preparing the interview, without creating an event before the user confirms a slot.

1. Open **Job Applications** in Hiring Hub and locate Avery Example's application for **J1004 Power Platform Developer**. Check both the **Candidate** and **Job Role**, then copy its **Application Number**. Use the number from your environment, not a number from a screenshot.

1. In the Interview Agent's **Preview**, replace `«ApplicationNumber»` with that number and send:

   ```text
   Prepare interview questions for Avery Example's application «ApplicationNumber»
   for job role J1004 Power Platform Developer. Do not book a meeting yet.
   ```

   The agent should end its answer by offering to book the prep meeting, and wait for your confirmation before creating an event.

   ![The agent offers the prep meeting without booking it](./assets/m10-10-3-4-scheduling-offer-preview.png)

### 10.4 Add the scheduling case to your evaluation set

Next we will add a scheduling case to the saved evaluation set, so the agent's scheduling steps stay covered by the regression run.

1. Keep the **Interview Agent baseline** set all-green by adding a case the agent answers from its instructions - no calendar call, no invitation. In the left navigation select **Agents**, open the **Interview Agent**, go to its **Evaluate** tab and open that set.

   ![The Interview Agent baseline set ready to be extended](./assets/m10-10-4-1-evaluate-agent-open.png)

1. Add this Question and Expected response:

   | Question | A passing answer describes… |
   | --- | --- |
   | *"How do you schedule an interview-prep meeting, and what do you need from me?"* | Its scheduling flow - resolve the person, find mutually free times, confirm a slot, create the event - and that it needs the attendee plus a duration/timeframe |

   ![The scheduling case saved into the Interview Agent baseline set](./assets/m10-10-4-2-scheduling-evaluation-case.png)

1. **Save** the test set and select **Evaluate** to run it. Each case must meet the configured **Pass score of 70/100**. All five cases must pass, giving an overall **100% pass rate**, without booking anything.

   ![The five-case evaluation passing every case](./assets/m10-10-4-3-scheduling-evaluation-green.png)

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
