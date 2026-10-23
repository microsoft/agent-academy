# Lab Rewrite Evaluation — operative/06-ai-safety

**Original lab:** 🚨 Mission 06: AI Safety and Content Moderation (OPERATION SAFE HARBOR)
**Date evaluated:** 2026-06-29
**Environment:** <https://copilotstudio.preview.microsoft.com/environments/aab8f8eb-e060-e28b-958f-2ea6fd0ab517> (April (Preview), has the Operative solution; Interview Agent `a4952ccd-28d7-4704-a396-3e1a7319bc64`)
**Plugin:** AgentAcademyLabTestPlugin — rewrite-lab (local-only, no PR)

## Summary

| Metric | Count |
|---|---|
| Total hands-on labs | 8 (6.1–6.8) |
| Unchanged | 0 |
| Modified (UI changes) | 4 (6.1, 6.2, 6.5, 6.6) |
| New flow required | 0 |
| Removed/Not possible | 2 (6.3, 6.4) |
| Relocated (governance/admin) | 2 (6.7, 6.8) |

**Headline:** This mission was the most classic-dependent of the Operative course. The new experience
has **no Topics tab** — so the two labs that authored topics (6.3 On Error topic, 6.4 Generative
Answers node) are **blocked** with no direct equivalent. Greeting and moderation moved into the agent
**Settings** dialog; the custom flagged-response message field was **removed**; and the Protection
Status column / Security Analytics moved out of the authoring Agents list into governance/admin surfaces.

## ⚠️ Blockers & Removed Capabilities

### Lab 6.3: Adding custom error handling (edit System → On Error topic)

- **Status:** blocked / removed
- **Reason:** The new experience has no **Topics** tab and no **System → On Error** topic. Navigating to
  the agent's `/topics` URL falls back to the **Build** page (tabs: Build / Preview / Evaluate / Monitor).
  There is no `System.Conversation.InTestMode` branch or Message node to edit.
- **Alternative:** None for a *custom* content-filtered error message — the agent returns the platform's
  built-in moderation response. Instruction-based refusals (Lab 6.5) shape how the agent declines
  off-scope/sensitive requests, but they do not replace the content-filter response text.
- **Impact:** Learners lose the ability to author a custom "content filtered" fallback message and the
  exposure to System topics / `InTestMode`.

### Lab 6.4: Generative Answers content moderation level + prompt modification

- **Status:** blocked / removed
- **Reason:** No Topics, no **Add a topic → From blank**, and no **Generative Answers** node. Content
  moderation is **agent-level only** (Settings → AI & behavior → Safety → Moderation level). There is no
  per-node **Content moderation level → Customize** and no per-node **prompt-modification** text box.
- **Alternative:** Fold the per-node guidance (e.g., "age should not be used to discriminate") into the
  agent **Instructions** (now included in the rewritten Lab 6.5).
- **Impact:** Learners lose per-knowledge-call moderation tuning and prompt modification; the same intent
  is now expressed less granularly at the agent level.

## Relocated Capabilities

### Lab 6.7: Protection Status column on the Agents page

- **Status:** modified / relocated
- **Reason:** The new-experience **Agents** list columns are **Name / Channel / Status / Owner / Last
  modified** — there is **no Protection Status column** and no click-through protection summary dialog.
- **Alternative:** Agent runtime protection is reported via **Agent Ops** / **Power Platform admin
  center** governance surfaces.
- **Screenshot:** ![Screenshot of agents list no protection status](./assets/validation/agents-list-no-protection-status.png)

### Lab 6.8: Security Analytics / Threat detection

- **Status:** modified / relocated
- **Reason:** The dashboard (Threat detection, Protection Categories, Reason-for-Block / Session Block
  Rate Trend charts) is a governance/admin feature reached through Agent Ops / PPAC, not through a
  Protection Status column on the Agents list. The metrics themselves are unchanged.

## Step-by-Step Comparison

### Lab 6.1 — AI safety disclosure in greeting

- **Original:** Topics → System → Conversation Start → edit greeting message → Save → Test/Refresh.
- **Status:** modified
- **New instruction:** ⋯ More options → **Settings → Greeting & prompts → Greeting message** → paste the
  disclosure text → close (auto-saves) → confirm in the **Preview** tab.
- **What changed:** The greeting is no longer a Topic; it is a single textbox in Settings.
- **Screenshot:** ![Screenshot of greeting prompts](./assets/validation/greeting-prompts.png)

### Lab 6.2 — Content moderation level + custom flagged message

- **Original:** Settings → Moderation → set High → add a custom **"When potential responses get flagged…"**
  message → Save → test in Test panel.
- **Status:** modified (moved) + removed (custom message)
- **New instruction:** **Settings → AI & behavior → Safety → Moderation level** dropdown. Levels expanded
  from 3 (Low/Medium/High) to **5: Minimum / Low / Medium / High / Maximum** (Medium is the default). Set
  to **High**. The custom flagged-response message field **no longer exists** anywhere in Settings
  (verified: AI & behavior = Moderation level only; Safety & access = Authentication / Web channel
  security / User feedback). Test in the **Preview** tab.
- **What changed:** Moderation relocated and gained 2 levels; custom message removed; no Activity-map note.
- **Screenshot:** ![Screenshot of moderation levels](./assets/validation/moderation-levels.png)

### Lab 6.3 — Custom error handling (On Error topic)

- **Original:** Edit System → On Error topic Message node; Publish; test in Teams.
- **Status:** **blocked** (see Blockers above).

### Lab 6.4 — Generative Answers node moderation + prompt modification

- **Original:** Custom topic + Generative Answers node + per-node moderation level + prompt modification.
- **Status:** **blocked** (see Blockers above).

### Lab 6.5 — Agent instructions to control scope

- **Original:** Overview → Instructions → Edit → append PROHIBITED TOPICS → Save.
- **Status:** modified
- **New instruction:** **Build** tab → **Instructions** field → append PROHIBITED TOPICS (now also folds
  in the "age should not be used to discriminate" guidance from the blocked Lab 6.4) → save.
- **What changed:** Instructions moved from the removed Overview tab to the Build page (same pattern as
  Mission 05). Same Instructions editor toolbar (no Power Fx picker).

### Lab 6.6 — Testing instruction-based blocking

- **Original:** Test prompts in the Test panel; observe filter vs. instruction refusal vs. Unknown Intent
  fallback topic.
- **Status:** modified
- **New instruction:** Test in the **Preview** tab. The "Unknown Intent → fallback topic" framing no
  longer applies (no authorable fallback topic); out-of-scope handling is governed by Instructions +
  generative orchestration.

### Lab 6.7 — Protection Status column

- **Status:** modified / relocated (see Relocated above).

### Lab 6.8 — Security Analytics

- **Status:** modified / relocated (see Relocated above).

## Validation notes

- **Topics confirmed absent:** Left navigation shows only Home / Agent Ops / Agents / Workflows. The
  agent editor tabs are Build / Preview / Evaluate / Monitor. The legacy `/agents/<id>/topics` URL
  redirects to the Build page.
- **Custom flagged-message field confirmed removed:** inspected both **AI & behavior** (Moderation level
  only) and **Safety & access** (Authentication, Web channel security, User feedback).
- **Throwaway live edits** (greeting text, moderation level, instructions) were exploratory and left
  unpublished/discarded — the Interview Agent was not saved/published as part of this rewrite.
