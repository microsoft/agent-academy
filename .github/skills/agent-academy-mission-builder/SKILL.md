---
name: agent-academy-mission-builder
description: >
  Scaffold and author content for the microsoft/agent-academy GitHub repo. Use this skill whenever
  the user wants to create a new mission, lab, or module for Agent Academy — whether that's a
  course mission (Recruit, Operative, Commander) or a standalone Special Ops mission. Trigger
  whenever the user says "write a mission", "scaffold a lab", "create a Special Ops", "new Agent
  Academy module", or describes an agent-building concept they want to turn into a hands-on lesson.
  Also trigger when the user says "add a module to agent academy", "I want to contribute a mission",
  or asks about badge creation for Special Ops. This skill handles: repo structure lookup,
  duplicate detection, mission naming, markdown scaffolding, step-by-step content drafting,
  cross-linking, tag/category suggestions, difficulty rating, and badge image generation for
  Special Ops missions.
---

# Agent Academy Mission Builder

This skill scaffolds new content for the **microsoft/agent-academy** repository at
https://github.com/microsoft/agent-academy. It covers two distinct mission types and handles
everything from naming to final markdown output, including badge generation for Special Ops.

Think of this skill like a mission briefing officer: it gets the concept from you, does the
reconnaissance (checks the repo, checks for duplicates, maps cross-links), then hands you back
a fully briefed document you only need to fill in the "boots on the ground" steps for.

---

## Phase 0: Gather Intel (Interview the User)

Before writing anything, collect the following. Ask in one message, not one question at a time:

**Required info:**
1. **Mission type**: Course mission (Recruit / Operative / Commander) OR Special Ops?
2. **Topic / feature**: What Copilot Studio capability, integration, or concept does this cover?
3. **Rough description**: What will the learner *build or do* by the end?
4. **Difficulty** (for Special Ops): Beginner / Intermediate / Advanced (maps to 1 / 2 / 3 stars)
5. **Prerequisites**: What must the learner have done or have access to?

For **course missions**, also ask:
- Which mission number does this follow? (sets the folder name like `07-`)
- What is the overall course scenario it fits into? (e.g., Operative = Hiring system)

For **Special Ops**, also ask:
- Industry or use-case context (healthcare, retail, HR, IT, finance, etc.)? Or "general"?
- Any specific integrations (SharePoint, Teams, Dataverse, Azure, MCP, etc.)?

If the user hasn't given you enough to go on, ask. Otherwise proceed.

---

## Phase 1: Reconnaissance (Repo Check)

Use `web_search` and `web_fetch` to:

1. **Check for duplicates**: Search `site:github.com/microsoft/agent-academy [topic keyword]`
   and `microsoft.github.io/agent-academy [topic keyword]`. If something very similar exists,
   flag it and ask the user whether to proceed anyway or pivot the angle.

2. **Map existing missions**: Fetch https://microsoft.github.io/agent-academy/recruit/ and
   https://microsoft.github.io/agent-academy/operative/ to get the current mission list.
   Use this to:
   - Assign the correct next mission number for course missions
   - Identify missions to cross-link (e.g., if this mission uses MCP, link to Mission 10 MCP)
   - Spot curriculum gaps the new mission fills

3. **Check Special Ops listing**: Fetch https://microsoft.github.io/agent-academy/special-ops/
   to see what already exists and identify tags/categories in use.

Report findings briefly before proceeding. If there's a close duplicate, surface it clearly.

---

## Phase 2: Mission Naming

Agent Academy missions use military/spy operation themed names. Rules:

- **Course missions**: Use `🚨 Mission XX: [Action Verb] + [What They Build]`
  Examples: `🚨 Mission 03: Create a Multi-Agent Orchestration System`
  The operation name appears in the briefing paragraph: `Operation [Codename]`
  Codenames are dramatic and thematic: "Operation Talent Scout", "Operation Symphony",
  "Operation MCP Rendezvous". They relate to what the mission accomplishes.

- **Special Ops**: The lab *title* is a punchy phrase, often with a symbol if relevant.
  Examples: `Microsoft Copilot Studio & MCP`, `Power Platform CLI MCP`
  The operation name in the briefing: same dramatic style.
  The **badge bottom banner name** is a clever play on the mission topic. See badge section.

**Naming formula for operation codenames**: [Military/Intelligence Term] + [Thematic Noun].
Examples:
- Adaptive Cards → "Operation Flash Card"
- Event Triggers → "Operation Trip Wire"
- AI Safety → "Operation Safe Harbor"
- Document Generation → "Operation Paper Trail"
- Dataverse Grounding → "Operation Deep Root"

Generate 2-3 name options and let the user pick, or auto-select the best one.

---

## Phase 3: Scaffold the Markdown

### Course Mission Template

File: `docs/[rank]/[NN]-[slug]/index.md`

```markdown
---
title: "Mission NN: [Title]"
---

# [Emoji] Mission [NN]: [Full Title]

**Welcome, [Rank].** [1-2 sentence scene-setter in mission briefing voice.]

Your assignment, should you choose to accept it, is **[Operation Codename]** —
[one sentence high-level goal].

[2-3 sentences expanding on what they'll build and how it connects to the course scenario.]

## Mission Objective

By the end of this mission, you will have:

- [Concrete deliverable 1]
- [Concrete deliverable 2]
- [Concrete deliverable 3]

## Prerequisites

Before embarking on this mission, ensure you have:

- Completed [Mission N-1: Title](../[folder]/)
- [Any specific access or setup]

> [!TIP]
> [Optional tip for getting access if stuck]

## Background Intel

> [!NOTE]
> [Key concept explanation — 2-4 paragraphs. Explain the why before the how. Include an analogy.]

## Mission Tasks

### Task 1: [Name]

[Brief intro sentence]

1. [Step 1]
2. [Step 2]
3. [Step 3]

> [!NOTE]
> [Callout with context or warning about a common mistake]

### Task 2: [Name]

[... repeat pattern ...]

## Mission Complete

**Mission [NN] is completed!** You now have mastered the following skills:

✅ **[Skill 1]**: [One sentence — what they can now do]
✅ **[Skill 2]**: [One sentence]
✅ **[Skill 3]**: [One sentence]

## Related Missions

- [Mission N-1: Title](../[prev-folder]/) — [Why it connects]
- [Mission N+1: Title](../[next-folder]/) — [What builds on this]

## Further Reading

- [Microsoft docs link]
- [Related Academy content]
```

### Special Ops Template

File: `docs/special-ops/[slug]/index.md`

```markdown
---
title: "[Mission Title]"
tags:
  - [technology-tag]
  - [industry-tag]
difficulty: [1|2|3]
---

# [Emoji] [Mission Title]

> **Difficulty**: [stars] | **Time**: ~[N] min | **Type**: Special Ops

![Badge](./assets/badge.png)

**Welcome, agent.** Your mission — should you choose to accept it — is [one-liner].

## What You'll Build

- [Specific deliverable 1]
- [Specific deliverable 2]
- [Specific deliverable 3]

## Prerequisites

- [Access/license requirement]
- [Tool requirement]

> [!WARNING]
> [Access barrier callout if needed]

## Concept Brief

[2-4 paragraphs on the core concept. Why does it exist? When would you use it?
Include an analogy.]

### Key Terms

| Term | Definition |
|------|------------|
| [Term] | [Plain-language definition] |

## The Scenario

> [!NOTE]
> **Scenario:** [Company] is a [industry] company that needs to [problem]. You are building
> an agent that [solution].

## Mission Tasks

### Task 1: [Name]

1. [Step]
2. [Step]

### Task 2: [Name]

[...]

## Mission Accomplished

Congrats, agent — mission accomplished! Claim your badge:
`https://aka.ms/agent-academy-special-ops/[slug]/form`

## Tags

**Technology**: [tag1], [tag2]
**Industry**: [industry]
**Difficulty**: [stars]

## Related Content

- [Relevant course mission link]
- [Official docs link]
```

---

## Phase 4: Auto-Draft Background Intel and Scenario

Don't leave these blank. Fill them in using knowledge of Copilot Studio and the feature:

1. Write 2-4 paragraphs of background. Voice: energetic, not dry docs.
2. Always include an analogy. Existing ones in the repo:
   - MCP = "USB-C of AI integration"
   - Orchestrator = "symphony conductor"
   - Agent = "digital coworker"
   Find a new one for the new concept.
3. For Special Ops: draft the fictional scenario with company name, industry, and problem.

---

## Phase 5: Step-by-Step Drafting

Fill in Mission Tasks based on Copilot Studio knowledge:

- One action per step, clear action verbs (Select, Navigate, Enter, Configure, Test)
- Bold UI element names: **Test your agent**, **Publish**, **Save**
- Code format for: values to type, field names, test messages to send
- Use `[!NOTE]`, `[!TIP]`, `[!WARNING]` callouts freely
- Where exact steps are unknown, add `<!-- TODO: Add screenshot -->` and
  `[FILL IN: describe what needs to happen here]` placeholders

---

## Phase 6: Tags and Cross-Links (Special Ops Only)

See `references/tags.md` for full tag taxonomy. Select 1-3 technology tags and 1-3 industry tags.

Difficulty = number of stars on the badge:
- 1 star: Beginner (single feature, under 30 min, no admin required)
- 2 stars: Intermediate (2-3 concepts, 30-60 min, some config)
- 3 stars: Advanced (multi-step, VSCode, Azure/admin required, 60+ min)

Always cross-link to the most relevant course mission. Check `docs/recruit/index.md`, `docs/operative/index.md`, `docs/commander/index.md`, and `docs/special-ops/index.md` for the current mission inventory.

---

## Phase 7: Deliver Output

1. **Scaffolded markdown file** create the mission file directly in the repo in the corresponding folder. If it's a recruit course mission, create a folder under `docs/recruit/` with the appropriate mission name and place an `index.md` file inside as well as an `assets` folder for images, for example, `docs/recruit/mcp-lab/index.md`. Repeat this pattern for operative and commander missions under their respective folders. For Special Ops, create the folder under `docs/special-ops/` with the slug name and place the `index.md` file and `assets` folder inside, for example, `docs/special-ops/mcp-lab/index.md`.
2. **Summary** of what was pre-filled vs. what needs manual work (be explicit about TODOs)
3. **Cross-link map** of which missions link here, and where this links
4. **For Special Ops**: Tags, difficulty, badge banner name, and image generation prompt
5. **Duplicate check result** with links to anything similar that exists

End every delivery with:
> "The bones are done. Fill in the step-by-step and swap in real screenshots. Want me to
> draft any specific task section in more detail?"

---

## Reference Files

Read these when needed:
- `WRITING_STYLE.md` (repo root) — Voice, tone, formatting rules
- `docs/recruit/index.md` — Recruit mission inventory for numbering and cross-linking
- `docs/operative/index.md` — Operative mission inventory
- `docs/commander/index.md` — Commander mission inventory
- `docs/special-ops/index.md` — Existing Special Ops for tag patterns and duplicate check