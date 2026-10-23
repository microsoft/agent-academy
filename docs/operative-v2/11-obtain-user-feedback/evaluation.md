# Lab Rewrite Evaluation — operative/11-obtain-user-feedback

**Original lab:** Mission 11: Collecting feedback from users
**Date evaluated:** 2026-06-30
**Environment:** <https://copilotstudio.preview.microsoft.com/environments/aab8f8eb-e060-e28b-958f-2ea6fd0ab517> (April (Preview), new experience, Operative solution installed)
**Plugin version:** AgentAcademyLabTestPlugin (rewrite-lab)

## Summary

| Metric | Count |
|---|---|
| Total steps / sections | ~50 |
| Unchanged (conceptual prose) | ~12 sections (importance, thumbs concepts, adaptive-card concepts, comparison, best practices) |
| Modified (UI moved) | 11.0 settings, 11.1 built-in feedback, 11.2 analytics |
| New flow required | 0 |
| Removed/Not possible | — |
| **Blocked** | **Lab 11.3 (custom adaptive card via Topics) + Lab 11.4 (App Insights telemetry node)** |

**Headline:** This mission is **split**. The *built-in feedback* half (concepts + Labs
11.1–11.2) is fully doable with **modified navigation** — feedback settings, the
Like/Dislike UI, and the reactions analytics have all **moved** but work the same. The
*custom Adaptive Card* half (Labs 11.3–11.4) is **blocked**: it is built entirely on the
classic **Topics authoring canvas**, which **does not exist** in the new experience.

## ⚠️ Blockers & Removed Capabilities

### Labs 11.3 & 11.4 — Custom Adaptive Card feedback + Application Insights telemetry

- **Status:** blocked
- **Reason:** The new agent **Build** surface has **no Topics tab**. The exercise requires:
  - the **End of Conversation** and **CSAT Question** *system topics* (gone),
  - **Add a topic → From blank** to create the *Capture CSAT dissatisfied feedback* topic (gone),
  - topic nodes **Ask with adaptive card**, **Condition**, **Set a variable value**,
    **Go to another topic**, and **Log a custom telemetry event** (all gone).

  The new model replaces topic authoring with **Instructions + Skills + Tools + Knowledge
  - Connected agents** under autonomous orchestration. There is no end-of-conversation
  CSAT survey trigger to branch on, and no topic-level telemetry node.
- **Alternative:** No 1:1 equivalent. Forward-looking option documented in the rewrite:
  build a **Workflow** that posts an Adaptive Card, attach it via **Tools → Add a tool →
  Workflows**, and instruct the agent to call it after answering; telemetry would move
  into that Workflow. But the "only when CSAT rating is 1–2 stars" routing has no direct
  replacement because the CSAT system topic trigger is gone.
- **Impact:** Learners lose the hands-on custom-card build and the App Insights/KQL
  telemetry exercise. Built-in Like/Dislike (Lab 11.1) + Monitor reactions (Lab 11.2)
  still cover per-response feedback end-to-end. Original classic steps are preserved in a
  collapsed `:::: details` block in `index.md` for users who switch to the classic
  experience.

## Step-by-Step Comparison

### Conceptual sections (importance of feedback, thumbs concepts, adaptive-card concepts, why/best-practices, comparison & summary tables)

- **Status:** unchanged — preserved verbatim. (Light terminology touch-ups only; these
  are channel-agnostic educational content.)

### Managing the reactions feature (the user-feedback toggle)

- **Original:** **Generative AI Settings → User feedback** → *Collect user reactions to
  agent messages* toggle, plus a free-text **disclaimer** field.
- **Status:** modified (validated live)
- **New instruction:** **More options ⋯ → Settings → Safety & access tab → Feedback →
  User feedback** toggle ("Show thumbs up/down on each response so users can rate
  quality"). **The separate disclaimer field is no longer present** on this surface.
- **Screenshot:** `./assets/validation/m11-settings-user-feedback.png`

### Lab 11.1 — User feedback through built-in interactions

- **Original:** In Microsoft Teams, use **thumbs up / thumbs down** with a comment.
- **Status:** modified (validated live)
- **New instruction:** Two paths. (1) **Preview** tab → ask a question → response shows
  **Like / Dislike**; selecting **Dislike** opens a **"What went wrong?"** comment panel
  (with an optional "share prompt/response/logs" checkbox) → **Submit**. (2) Once
  **published**, the same Like/Dislike-with-comment flow works in **Microsoft Teams**.
- **What changed:** "thumbs up/down" → **Like / Dislike**; the comment prompt is a
  *"What went wrong?"* panel surfaced on **Dislike**; the **Test** pane is now **Preview**.
- **Screenshot:** `./assets/validation/m11-preview-dislike-comment.png`

### Lab 11.2 — Reviewing built-in analytics

- **Original:** **Analytics** tab → **Satisfaction** → **Reactions** → **See details**.
- **Status:** modified (validated live)
- **New instruction:** **Monitor** tab → **Performance** → **Total reactions** tile +
  **Reactions** card (reads "No reactions yet" until users react).
- **What changed:** The **Analytics** tab is replaced by the **Monitor** tab; the
  Satisfaction/Reactions "See details" page is now the **Reactions** card. Per-comment
  detail still flows to Dataverse `conversationtranscript`.
- **Screenshot:** `./assets/validation/m11-monitor-reactions.png`

### Lab 11.3 — Build adaptive card to collect custom feedback → **BLOCKED** (Topics removed)
### Lab 11.4 — BONUS: Log telemetry to Application Insights → **BLOCKED** (Topics removed)

- See Blockers section above. Preserved verbatim in a collapsed details block.

## Validation evidence (env aab8f8eb, Interview Agent a4952ccd)

- **Settings:** Confirmed **Safety & access → Feedback → User feedback** toggle exists;
  no disclaimer field. 4-tab Settings dialog (Agent details / AI & behavior / Safety &
  access / Greeting & prompts).
- **Preview feedback:** Sent a message, response showed **Like/Dislike**; clicking
  **Dislike** opened a "What went wrong?" panel with comment box + Submit. (Cancelled —
  no feedback actually sent to Microsoft.)
- **Monitor analytics:** Monitor tab (`/analytics`) → Performance → **Reactions** card +
  **Total reactions** tile ("No reactions yet").
- **Topics absence:** Build surface exposes only Instructions + Model/Microsoft IQ/Skills/
  Tools/Knowledge/Connected agents/Memory and tabs Build/Preview/Evaluate/Monitor — **no
  Topics tab** anywhere → 11.3/11.4 unbuildable.

## Cleanup

- No agent state was changed for this mission (settings dialog closed without saving;
  feedback dialog cancelled). Baseline intact; agent NOT published.
