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
last-edited-date: 2026-10-29
---

# 🚨 Mission 10: Schedule Interviews with Work IQ {#mission-10-schedule-interviews-with-work-iq}

<mission-meta />

## 🎯 Mission Brief {#mission-brief}

Welcome back, Agent. Your Interview Agent can prepare an interview, but it cannot book one.

In this mission you'll turn on **Work IQ** - a ready-made capability pack that gives the agent your organization's calendars, people, and work context - then use it to find times both interviewers are free and create the meeting. You'll make the agent *offer* to book once it has delivered its questions, and finish by adding a case to the evaluation set so the new behavior is covered by the same regression suite as everything else.

By the end of this mission the Interview Agent prepares questions, offers to book the prep meeting, and creates a real calendar invitation - only after you confirm the slot.

## 🔎 Objectives {#objectives}

In this mission, you'll learn:

1. What the **Work IQ** MCP server provides, and which sources scheduling needs
1. How to add supervised scheduling instructions before testing the agent in **Preview**
1. How to ask the agent when you and a colleague are both free
1. Why creating a calendar event deserves the same care as writing to Dataverse - it sends real invitations
1. How to test the new scheduling behavior without booking anything real

## 🧠 Work IQ - choose the sources {#microsoft-iq}

You already saw the "one server, all its actions" pattern with the Dataverse MCP server in [Mission 02](../02-instructions-skills-dataverse-mcp/index.md). **Work IQ** groups its capabilities under **Sources**. Filter the tool catalog to **MCP** and select **Work IQ** to choose which sources the agent can use:

| The source | What it brings in |
| --- | --- |
| **People** | People in your organization - who someone is, who they report to, how to reach them |
| **Calendar** | Microsoft **Outlook Calendar** operations, including free/busy lookups and creating events |
| **Outlook mail**, **Teams**, **OneDrive**, **SharePoint** | The matching mail, chat and file capabilities |

Keep only the sources a scenario needs and set each source's **Access level**. Scheduling needs **People** at **Read-only** to resolve a colleague's account, and **Calendar** at **Read-write** to read free/busy and create the event.

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
- A **second test user** in your tenant with a provisioned mailbox and **at least one appointment with you in the next 24 hours**, so the availability lookups have something to find
- A **controlled course identity** for Work IQ - never a personal or production account

### 10.1 Add Work IQ and supervised scheduling

First we need to give the Interview Agent the Work IQ sources scheduling needs, set their access levels, and add the rules that govern when it may send an invitation.

1. In the left navigation select **Agents**, open the **Interview Agent**, and go to its **Build** tab. In the right-hand configuration panel, find **Tools** and select **Add tool**.

   ![The Interview Agent Build tab with its Tools section](./assets/m10-10-1-1-interview-agent-build-ready.png)

1. Select **MCP** to filter the catalog to MCP servers.

   ![The tool catalog filtered to MCP servers](./assets/m10-10-1-2-work-iq-catalog.png)

1. Select **Work IQ** and review its **Sources**.

   ![The Work IQ detail panel with its Sources](./assets/m10-10-1-3-user-connection.png)

1. Remove **SharePoint**, **OneDrive**, **Outlook mail** and **Teams**, leaving **People** and **Calendar** selected. Select **Configure People** and set **Access level** to **Read-only**.

   ![The People source with Read-only access](./assets/m10-10-1-4-user-only-connected.png)

1. Select **Back to Sources**, then **Configure Calendar**. Set **Access level** to **Read-write** so the agent can check availability and create the confirmed meeting.

   ![The Calendar source with Read-write access](./assets/m10-10-1-5-calendar-connection.png)

1. Select **Back to Sources**, confirm only **People** and **Calendar** are selected with those access levels, then select **Add**. Confirm **Work IQ** appears under **Tools** beside Dataverse.

   ![Work IQ installed under Tools beside Dataverse](./assets/m10-10-1-6-calendar-connected.png)

1. On the **Build** tab, select **Instructions**.

   ![The Interview Agent Build tab with Instructions open](./assets/m10-10-3-1-interview-agent-build.png)

1. Replace the complete **Instructions** with the scheduling version below. The Dataverse tool remains read-only; the calendar can send an invitation only after the user confirms a slot.

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
   - JobRoleNumber (ppa_jobrolenumber) -> format J####

   ApplicationNumber is generated by Dataverse. Omit ppa_applicationnumber
   entirely from create_record; never send null or text for it, or the row is
   created with an unusable number. When creating a Job Application, set
   ppa_applicationtitle to the candidate's name, a hyphen, and the job title.

   How to work:
   - Ask clarifying questions if required information is missing (for example,
     if asked for interview questions without a role, ask for the role).
   - Use the hiring data to ground every answer. Do not invent or guess facts.
   - Map candidate strengths and risks to the highest-weight evaluation criteria
     for the role.
   - Be concise, professional, and evidence-based. Never address or message a
     candidate.

   Response formatting rules (follow exactly):
   - Format every date as 'MMM dd, yyyy' (for example, Jan 06, 2026).
   - When you summarize a resume or job role, start with its valid identifier in
     bold as a heading, then use bullet points for the details.
   - When you list interview questions, group them by evaluation criterion and
     show the criterion's weighting in parentheses.
   - Use bold only for the single most important value in an answer; do not bold
     whole sentences.

   Prohibited topics - never assess, request, or use any of the following, and
   politely refuse if asked,
   explaining you focus only on job-relevant, legally compliant interview
   practices:
   - Personal demographics (age, gender, race, religion, national origin)
   - Medical conditions or disabilities
   - Family status or pregnancy
   - Political or personal beliefs
   - Salary history

   Stay in scope: only help with interview preparation and questions about the
   company's hiring data. Politely decline unrelated requests (weather, general
   trivia, marketing, etc.).

   Hiring records are read-only: never create, update, or delete a candidate,
   resume, job application or job role. If asked, explain that hiring-record
   changes are made by a person in the Hiring Hub app. This limit covers hiring
   data only, and does not stop you sending a meeting invitation.

   After you deliver interview questions for a candidate, offer to book a
   30-minute interview-prep meeting with the interviewers. If the user accepts,
   ask who should attend and for a timeframe, find mutually free times, and send
   the meeting invitation only after the user confirms one specific slot. When
   the user says do not book yet, still offer to book a 30-minute interview-prep
   meeting after the questions; offering is not booking. Never contact the
   candidate, and never send an invitation without an explicit confirmation.
   ```

   ![Scheduling instructions configured on the Interview Agent](./assets/m10-10-3-2-scheduling-instructions.png)

1. Select **Save**, then **Publish**, and confirm with **Publish agent**.

   ![The completed scheduling instructions ready to save and publish](./assets/m10-10-3-3-scheduling-instructions-published.png)

### 10.2 Find times and book a meeting from the agent's Preview pane

Next we put those tools to work in **Preview**, where we can watch the availability calls before letting the agent write anything to a calendar.

1. In **Preview**, resolve an **interviewer** and check availability. Replace `«interviewer email»` with the second test user's email address from this lab's prerequisites:

   ```text
   Who is «interviewer email», and find 3 times for a 30-minute interview prep
   meeting with them in the next five business days. Use Calendar
   FindMeetingTimes to verify that the organizer and attendee are both free. If
   you cannot verify mutual availability, do not propose times. Do not create an
   event yet. Reply with their name and a concise table of three mutually free
   dates and times in the UTC time zone.
   ```

   With an already authorized Work IQ connection, permitted operations can proceed directly to the tool trace. If a **Permission Required** card appears, select **Allow** for the requested people lookup or calendar operation. Review each request as it arrives.

   ![Authorized Work IQ calls in the Preview trace](./assets/m10-10-2-1-consent-cards.png)

1. Start a **New chat** to check the calendar independently of the people lookup. Send the following prompt using the same interviewer's email address:

   ```text
   Use only Calendar FindMeetingTimes to find 3 mutually free times for a
   30-minute interview-prep meeting with «interviewer email» in the next five
   business days. Verify both organizer and attendee availability. Use the
   supplied email directly; do not look up people, access Dataverse, or perform
   any unrelated operation. If Calendar is unavailable or mutual availability
   cannot be verified, say so and stop without proposing times. Do not create,
   update, delete, send, or book anything. Reply with a concise table of three
   mutually free dates and times in UTC.
   ```

   Allow any requested calendar operation, then review the three mutually free options. If the agent cannot verify availability, stop before booking.

   ![Three mutually free times returned by Work IQ](./assets/m10-10-2-2-availability-options.png)

1. Confirm one of the slots the agent actually offered, to create the event:

   ```text
   Book the exact UTC slot confirmed below and title it 'Interview prep - Power
   Platform Developer - Agent Academy M10'. If that exact event already exists
   in that slot, do not create a duplicate. Confirm briefly with the title,
   attendees, date, time and time zone. Do not include join links, meeting IDs
   or passcodes in your reply.

   I confirm this exact slot: «start UTC timestamp» to «end UTC timestamp»
   (UTC). The organizer is «your email», the only attendee is
   «interviewer email», and the exact title is 'Interview prep - Power Platform
   Developer - Agent Academy M10'. Do not substitute another time. Check this
   exact slot for an existing event before creating one; reuse only an exact
   title, start, end, organizer and attendee match. After creating or reusing
   it, read the calendar event back with ListCalendarView, including id,
   subject, start, end, attendees, organizer and isCancelled. Send the
   invitation when creating the event. Keep the final confirmation concise and
   do not include join links, meeting IDs or passcodes.
   ```

   Replace `«start UTC timestamp»` and `«end UTC timestamp»` with one currently offered slot in ISO 8601 UTC format ending in `Z`. Set `«your email»` to the calendar organizer and `«interviewer email»` to the same second test user. Send the complete block as one message in the same conversation. Check the returned event's start and end against your confirmation. An adjacent meeting with the same title is not a match, and a follow-up question about whether to create the event is not a completed booking.

   ![The agent confirming the booked interview prep meeting](./assets/m10-10-2-3-booking-confirmed.png)

1. Verify the invitation appears in the attendee's mailbox.

   Creating a calendar event **sends a real invitation to a real person**. That makes it a write like any other, so the same rules apply as when you wrote to Dataverse: do it with controlled identities in a sandbox, and read back the attendees and the time before you let the agent book anything.

### 10.3 Verify the supervised scheduling offer

Next we will check that the published rules make the agent offer the meeting after preparing the interview, without creating an event before the user confirms a slot.

1. Open **Job Applications** in Hiring Hub and locate Avery Example's application for **J1004 Power Platform Developer**. Check both the **Candidate** and **Job Role**.

1. In the Interview Agent's **Preview**, send:

   ```text
   Prepare five interview questions for Avery Example (Fictitious), using her
   application for job role J1004. Keep each question to one sentence and do not
   book a meeting yet.
   ```

   The agent should end its answer by offering to book the prep meeting, and wait for your confirmation before creating an event.

   ![The agent offers the prep meeting without booking it](./assets/m10-10-3-4-scheduling-offer-preview.png)

### 10.4 Add the scheduling case to your evaluation set

Next we will add a scheduling case to the saved evaluation set, so the agent's scheduling steps stay covered by the regression run.

1. Keep the **Interview Agent baseline** set all-green by adding a case the agent answers from its instructions - no calendar call, no invitation. In the left navigation select **Agents**, open the **Interview Agent**, go to its **Evaluate** tab and open that set.

   ![The Interview Agent baseline set ready to be extended](./assets/m10-10-4-1-evaluate-agent-open.png)

1. Add this Question and Expected response:

   | Question | Expected response |
   | --- | --- |
   | How do you schedule an interview-prep meeting, and what do you need from me? | Resolve the internal attendee, ask for a duration or timeframe, find mutually free times, and present the available slots. Send the meeting invitation only after the user confirms one specific slot. Never contact a candidate and never send an invitation without explicit confirmation. |

   Select **Save**.

   ![The scheduling case saved into the Interview Agent baseline set](./assets/m10-10-4-2-scheduling-evaluation-case.png)

1. Select **Run** to run it. Each case must meet the configured **Pass score of 70/100**. All five cases must pass, giving an overall **100% pass rate**, without booking anything.

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
