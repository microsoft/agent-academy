# Lab Rewrite Evaluation — operative/10-mcp

**Original lab:** Mission 10: Integrate with MCP Servers
**Date evaluated:** 2026-06-30
**Environment:** <https://copilotstudio.preview.microsoft.com/environments/aab8f8eb-e060-e28b-958f-2ea6fd0ab517> (April (Preview), new experience, has Operative solution)
**Plugin version:** AgentAcademyLabTestPlugin (rewrite-lab)

## Summary

| Metric | Count |
|---|---|
| Total steps | ~30 |
| Unchanged (conceptual sections) | All "What is MCP" + "Agent 365" prose |
| Modified (UI changes) | Lab 10.1 add-tool flow, Calendar test, Lab 10.2 |
| New flow required | 0 |
| Removed/Not possible | 0 (logic unchanged) |
| Blocked (environment) | 1 (Work IQ User (Preview) server absent) |

**Headline:** This is a *minimal-logic-change* mission. The MCP concept, the
single-tool-per-server model, and the goal (read calendar, find times, create an
event) are all intact. The differences are almost entirely **UI location changes**
plus one **environment availability gap**:

1. **Tools moved** — classic "select **Tools** in the top navigation" → an **Add tool**
   button in the agent's right-side **Agent configuration** panel (Build page).
1. **Filter → Tab** — classic "select **Model Context Protocol** in the filters" → the
   **Model Context Protocol (MCP)** *tab* in the "Add a tool" dialog (tabs: All, MCP,
   Connectors, Workflows). Search box role `searchbox`, name "Search".
1. **Connection flow** — select server → **Select a connection** step → **Not connected**
   dropdown → **Create new connection** → **Create** → OAuth `select_account` popup
   (auto-completes if already signed in) → **Add**.
1. **"Add and configure" → "Add"** — the button is now just **Add**; there is no
   separate tool-overview/configure page.
1. **No separate consent card** — in the classic experience the first MCP call showed a
   consent card (select **Allow**); in the validated new-experience run the agent
   invoked the **ListCalendarView** tool directly using the connection created at
   add-time. No consent card appeared. The MCP tool button in the transcript exposes the
   request/response detail.
1. **Tool name** — classic referenced *getEvents*; the live tool surfaced as
   **ListCalendarView** (Work IQ Calendar Preview). *findMeetingTimes* / *createEvent*
   remain the conceptual tools for Lab 10.2.

## ⚠️ Blockers & Removed Capabilities

### Work IQ User (Preview) MCP server — blocked in this environment

- **Status:** blocked (environment availability)
- **Reason:** Searching the **Model Context Protocol (MCP)** tab for "Work IQ", "User",
  and "Work IQ User" returned only **Work IQ Mail, Teams, Calendar, SharePoint, and
  OneDrive (Preview)**. No **Work IQ User (Preview)** server was listed, so the
  *getMyManager* / user-profile capability ("Who is my manager?") could not be added or
  tested.
- **Alternative:** None in this environment. The server likely exists in tenants with
  the full Agent 365 / Frontier preview rollout; the rewrite preserves the original
  instructions in a collapsed note and tells learners to skip to the Calendar server if
  it is not listed (they can still complete the calendar half and earn the badge).
- **Impact:** Learners in this environment lose the "ask about people on your tenant"
  half of Lab 10.1 and the name-resolution convenience it provides for Lab 10.2. The
  Calendar MCP server still works with explicit attendee details.

## Step-by-Step Comparison

### Conceptual sections (What is MCP, Agent 365, roles, tooling servers)

- **Original:** Large prose sections explaining MCP, Agent 365, Entra Agent ID, roles.
- **Status:** unchanged
- **New instruction:** Same as original — preserved verbatim.

### Lab 10.1 — Add the Work IQ User (Preview) MCP Server

- **Original:** Add Work IQ User (Preview) via Tools → Add a tool → MCP filter → select →
  create connection → Add and configure → test "Who is my manager?".
- **Status:** blocked (server not present in env)
- **New instruction:** Flagged with a warning + comment block. If the server exists in
  your tenant, use the same add-tool flow as the Calendar server; otherwise skip to the
  Calendar server.

### Lab 10.1 — Add the Work IQ Calendar (Preview) MCP server

- **Original:** Tools (top nav) → Add a tool → MCP filter → Work IQ Calendar → Create new
  connection → Create → pick account → **Add and configure** → test "Get my meetings for
  today" → consent card **Allow** → response.
- **Status:** modified (validated live)
- **New instruction:** Build page → right-panel **Tools → Add tool** → **Model Context
  Protocol (MCP)** tab → search "Work IQ" → **Work IQ Calendar (Preview)** → **Select a
  connection** → **Not connected** → **Create new connection** → **Create** → pick account
  (auto-completes) → **Add** → **Save** (confirm button disabled) → **Preview** → **New
  chat** → "Get my meetings for today" → agent calls **ListCalendarView** and returns the
  result (no separate consent card observed).
- **What changed:** Tools location (top nav → right panel), filter → tab, "Add and
  configure" → "Add", explicit **Save** required, consent card absent, tool name
  *getEvents* → **ListCalendarView**.
- **Screenshots:** `./assets/validation/m10-mcp-add-connection.png`,
  `./assets/validation/m10-mcp-tool-added.png`,
  `./assets/validation/m10-mcp-preview-test.png`.

### Lab 10.2 — Plan an interview prep-meeting (findMeetingTimes / createEvent)

- **Original:** New test session → "find 3 meeting times…" (*findMeetingTimes*) → "schedule
  the one on 10:30 AM UTC" (*createEvent*) → meeting request in invitee's mailbox.
- **Status:** modified (UI references updated; end-to-end output not reproduced)
- **New instruction:** **Preview → New chat** instead of "New test session"; same prompts;
  inspect tool calls via the MCP tool button in the transcript.
- **What changed:** "New test session" → **New chat** in the Preview tab. The scheduling
  logic is unchanged. Could not reproduce the scheduling *output* because the validation
  environment lacked the prerequisite second provisioned user and calendar availability;
  documented as prerequisite-gated.

## Validation evidence

- Work IQ Calendar (Preview) added end-to-end on the **Interview Agent**
  (`a4952ccd-28d7-4704-a396-3e1a7319bc64`): connection created via OAuth, tool landed in
  Tools section, **Saved** (button went disabled).
- Live Preview test: "Get my meetings for today" → agent invoked **ListCalendarView** MCP
  tool → returned "no calendar events scheduled for today, June 30, 2026."
- Confirmed **Work IQ User (Preview)** absent via three searches ("Work IQ", "User",
  "Work IQ User") on the MCP tab.

## Cleanup

- Work IQ Calendar (Preview) tool removed from the Interview Agent and **Saved**
  (baseline restored: no tools/skills; agent NOT published).
