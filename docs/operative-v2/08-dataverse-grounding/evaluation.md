# Lab Rewrite Evaluation — operative/08-dataverse-grounding

**Original lab:** Mission 08: Enhanced prompts with Dataverse grounding
**Date evaluated:** 2026-06-30
**Environment:** <https://copilotstudio.preview.microsoft.com/environments/aab8f8eb-e060-e28b-958f-2ea6fd0ab517> (April (Preview) — has the Operative solution)
**Plugin:** AgentAcademyLabTestPlugin (rewrite-lab)

## Summary

| Metric | Count |
|---|---|
| Total labs | 7 (8.1–8.7) |
| Unchanged | 1 (8.1) |
| Modified (UI changes) | 3 (8.3, 8.6, 8.7) |
| New flow required | 2 (8.2, 8.4) |
| Removed/Not possible | 1 (8.5) |
| Blocked | 0 |

## ⚠️ Headline change

The classic mission depended on two constructs that **no longer exist** in the new Copilot Studio experience:

1. **AI Builder Prompt + Dataverse grounding** (Labs 8.2–8.3) — the standalone Prompt construct and its
   "+ Add content → Dataverse → columns/Filter/Record-retrieval" grounding UI are gone (consistent with
   Mission 07's "Prompt is now called Agent").
1. **Create Job Application Agent Flow** (Labs 8.4–8.5) — still buildable, but unnecessary.

Both are replaced by a single capability: the **Microsoft Dataverse MCP Server** tool
(**Tools → Add a tool → Model Context Protocol (MCP)**) combined with a **Skill**. The agent's model
calls the MCP tools directly:

- **Grounding/read** → `search` → `describe` → `read_query` (validated live: returned all 5 active Job Roles).
- **Write** → `create_record` (validated live: created a record, returned GUID, read back, then deleted via
  `delete_record`).

## Removed / Replaced Capabilities

### Lab 8.2–8.3: AI Builder Prompt with Dataverse grounding

- **Status:** new_flow (capability removed → replaced)
- **Reason:** AI Builder Prompts don't exist in the new experience; there's no Prompt to edit and no
  "+ Add content → Dataverse" grounding UI / Record-retrieval slider.
- **Replacement:** Add the **Microsoft Dataverse MCP Server** tool to the agent, then instruct a **Skill**
  to read live Job Roles (filter Status = Active) + related Evaluation Criteria via `read_query`.
- **Impact:** Learners no longer configure grounding through a dedicated UI; grounding is expressed as
  Skill instructions. The agent performs the equivalent reads itself. **Validated live.**

### Lab 8.4–8.5: Create Job Application Agent Flow + attach to agent

- **Status:** 8.4 new_flow / 8.5 removed
- **Reason:** The 4-node Agent Flow (List rows → List rows → Add a new row → Respond) is no longer needed —
  the MCP `create_record` tool inserts the Job Application row directly. Nothing separate to attach.
- **Replacement:** Skill instructions that call `create_record` per confirmed Job Role (describe first;
  link Candidate/Job Role/Resume; Application Date = utcNow).
- **Impact:** Removes ~30 lines of fragile expression-binding steps. **`create_record` validated live.**

## Step-by-Step Comparison

### Lab 8.1 — Examine the Dataverse tables

- **Status:** unchanged
- **New instruction:** Same as original (Power Apps → Tables → Job Roles / Evaluation Criteria). This is a
  Power Apps operation, unaffected by the Copilot Studio UI change.

### Lab 8.2 — Add the Dataverse MCP tool and ground your Skill

- **Status:** new_flow
- **New instruction:** Open Hiring Agent → Build → Tools → **+ Add a tool** → **Model Context Protocol (MCP)**
  tab → **Microsoft Dataverse MCP Server** → connection → **Add to agent** → **Save** (verify Save button
  goes disabled). Then update the `summarize-resume` Skill instructions to read live Job Roles (filter
  Active) + Evaluation Criteria via `read_query`.
- **What changed:** Replaces the entire AI Builder Prompt grounding flow.
- **Screenshot:** ![Screenshot of mcp grounding jobroles](./assets/validation/mcp-grounding-jobroles.png)

### Lab 8.3 — Test the grounded Skill

- **Status:** modified
- **New instruction:** Test in the agent **Preview** pane (New chat to refresh tool context). Agent calls
  `search` → `describe` → `read_query` and returns live roles; upload a resume to see MatchedRoles.
- **What changed:** Classic test ran inside the Prompt editor with a "Knowledge used" tab; now tested in
  Preview. **Validated live** (5 active Job Roles J1000–J1004 returned).
- **Screenshot:** ![Screenshot of mcp grounding jobroles](./assets/validation/mcp-grounding-jobroles.png)

### Lab 8.4 — Create Job Applications via the Dataverse MCP

- **Status:** new_flow
- **New instruction:** Add application-creation instructions to the Skill: on user confirmation, call
  `create_record` on Job Applications per Job Role (describe first; link Candidate/Job Role/Resume;
  Application Date = utcNow). No Agent Flow built.
- **What changed:** Replaces the 4-node Agent Flow. **`create_record` validated live** (created Candidate
  C01000 GUID 830601a1-…, read back, deleted via `delete_record`).
- **Screenshot:** ![Screenshot of mcp create record](./assets/validation/mcp-create-record.png)

### Lab 8.5 — Attach the Create Job Application flow

- **Status:** removed
- **New instruction:** Not needed — the MCP tool from 8.2 already exposes `create_record`.
- **What changed:** No separate flow to attach.

### Lab 8.6 — Confirm application-creation behavior

- **Status:** modified
- **New instruction:** The Skill instructions (8.4) drive the conversational loop: present roles → confirm →
  `create_record` per role → summarize. Strict identifier rules preserved (R/C/A/J #####).
- **What changed:** Same generative-orchestration looping, but the loop calls the MCP tool instead of an
  Agent Flow.

### Lab 8.7 — Test your agent

- **Status:** modified
- **New instruction:** Test in **Preview**: upload resume → get suggested roles → confirm → agent calls
  `create_record` per role (visible in the Activity map), returning Application Numbers.
- **What changed:** "Create Job Application tool" runs are now Dataverse MCP `create_record` calls.
- **Note:** Full upload → match → create chain not run end-to-end because Resumes/Candidates tables are
  empty in this environment; each MCP operation confirmed working individually.
- **Screenshot:** ![Screenshot of mcp create record](./assets/validation/mcp-create-record.png)

## Notes / Not validated end-to-end

- Resumes and Candidates tables are empty in the env (Mission 07 only validated extraction, never persisted),
  so the complete resume-upload → match → create-application chain wasn't run in one pass. `read_query`,
  `create_record`, and `delete_record` were each validated individually live.
- `update_record` is present on the MCP tool but was not exercised.
- Live changes (MCP tool on the Hiring Agent) were made to a **draft** and discarded after validation; the
  agent was not published. Test Candidate C01000 was deleted.
