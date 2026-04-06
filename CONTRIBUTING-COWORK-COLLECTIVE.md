# Contributing to Cowork Collective

Cowork Collective missions are **standalone, hands-on labs** focused on **Copilot Cowork** — a way to delegate work to Copilot so it takes action on your behalf across Microsoft 365.

For general tooling setup (markdown linting, spell checking, local preview), see [CONTRIBUTING-GENERAL.md](./CONTRIBUTING-GENERAL.md).
For writing style rules, see [WRITING_STYLE.md](./WRITING_STYLE.md).
For custom component reference, see [CUSTOM-COMPONENTS.md](./CUSTOM-COMPONENTS.md).

## Folder structure

```text
docs/cowork-collective/
├── index.md                          ← Landing page (uses <missions /> component)
├── assets/                           ← Shared badge images for all missions
│   ├── BadgeBandit-badge.png
│   ├── Vacay-badge.png
│   └── ...
├── badge-check/
│   ├── index.md                      ← Mission content
│   └── assets/                       ← Mission-specific screenshots and data files
├── out-of-office-prep/
│   ├── index.md
│   └── assets/
└── ...
```

### Naming conventions

- Mission folders: `kebab-case/` (no numbering — missions are standalone)
- Main content file: always `index.md`
- Mission-specific assets: `assets/` subfolder inside the mission folder
- Badge images: stored in the **shared** `docs/cowork-collective/assets/` folder
- All filenames lowercase with hyphens, no spaces

## Required frontmatter

Every Cowork Collective mission requires the following YAML frontmatter:

```yaml
---
tags:
  - automation
difficulty: 1
time: 20
description: >-
  Use Copilot Cowork to handle your entire out-of-office handoff — emails,
  meeting reschedules, and delegate setup — in one conversation.
section: cowork-collective
badge: ../assets/Vacay-badge.png
products:
  - microsoft-365-copilot
  - copilot-cowork
industries:
  - general
created-date: 2026-04-06
last-edited-date: 2026-04-06
---
```

### Field reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `tags` | string[] | Yes | Array of tag slugs from `docs/.vitepress/data/tags.json`. |
| `difficulty` | number (1–5) | Yes | Difficulty level from 1 (beginner) to 5 (expert). |
| `time` | number | Yes | Estimated completion time in minutes. Must be greater than 0. |
| `description` | string | Yes | Mission description (minimum 10 characters). Used in mission cards. |
| `section` | string | Yes | Must be `cowork-collective`. Identifies this mission as part of the Cowork Collective. |
| `badge` | string | Yes | Relative path to the badge image in the shared assets folder (for example `../assets/Badge-name.png`). |
| `products` | string[] | Yes | Array of product slugs from `docs/.vitepress/data/products.json`. Typically includes `microsoft-365-copilot` and `copilot-cowork`. |
| `industries` | string[] | Yes | Array of industry slugs from `docs/.vitepress/data/industries.json`. |
| `created-date` | date | Yes | ISO date when the mission was first published. |
| `last-edited-date` | date | Yes | ISO date of the most recent edit. Update this on every change. |

> [!IMPORTANT]
> Cowork Collective missions require `section: cowork-collective` — this is what makes the mission appear on the Cowork Collective landing page. They do **not** use `prev`, `next`, `short-description`, or `codename`.

### Frontmatter validation

Cowork Collective frontmatter is validated automatically by `scripts/validate-frontmatter.mjs`. The script checks:

- `difficulty` is a number between 1 and 5
- `time` is a number greater than 0
- `description` is a string with at least 10 characters
- `created-date` and `last-edited-date` are valid dates

Run the validation locally:

```bash
node scripts/validate-frontmatter.mjs
```

## Mission content structure

Cowork Collective missions follow this layout:

```markdown
# 🏢 Mission Title

<mission-meta />

![Badge image](../assets/Mission-badge.png){ width="300" }

Welcome, agent. Your mission...

[1-2 paragraphs introducing the mission and what it automates]

## 🔍 The Problem

Brief description of the real-world pain point this mission solves.

## 📋 What You'll Produce

By the end of this mission you will have:

- ✅ Outcome one
- ✅ Outcome two
- ✅ Outcome three

## ⚙️ Prerequisites

- Microsoft 365 license with Copilot
- Access to the [Frontier preview program](https://adoption.microsoft.com/en-us/copilot/frontier-program/)
- Another requirement

## 🤝 What is Copilot Cowork?

Brief explanation of Copilot Cowork and the capabilities relevant to this mission.

## 🎯 The Scenario

Narrative context setting up the business situation the learner will solve.

## 📁 Lab Assets

| File | What it contains |
|------|------------------|
| `sample-data.csv` | Description of the sample data |

## 🧪 Lab 1.1 - Discovery

1. Navigate to **[Microsoft 365 Copilot](https://m365.cloud.microsoft/chat)**
1. Enter the following prompt:

    ```text
    Your prompt text here. Be specific about what you want Copilot Cowork to do.
    ```

1. Review the proposed actions and select **Approve** for each step.

## 🧪 Lab 1.2 - Enhanced Execution

Further hands-on steps building on the first lab.

## 🏆 Mission Accomplished

Summary of what was achieved:

- ✅ Outcome one
- ✅ Outcome two

## 🏅 Claim Your Badge

![Badge](../assets/Mission-badge.png){ width="200" }

[Submit the completion form](https://forms.example.com)

## 📚 Related Content

- 📖 [Resource title](https://learn.microsoft.com/...)

<analytics-tag section="cowork-collective" mission="mission-slug" />
```

### Key differences from other sections

| Aspect | Courses | Special Ops | Cowork Collective |
|--------|---------|-------------|-------------------|
| Navigation | Sequential (`prev`/`next`) | Standalone | Standalone |
| `section` field | Not used | Not used | Required: `cowork-collective` |
| Focus | Copilot Studio | Varied tools | Copilot Cowork |
| Codename | Required | Not used | Not used |
| Folder naming | `NN-kebab-case/` | `kebab-case/` | `kebab-case/` |

### Content patterns specific to Cowork Collective

#### Problem and scenario narrative

Every Cowork Collective mission starts by describing a real-world problem and a concrete scenario. This grounds the mission in a relatable business situation rather than abstract concepts.

#### Prompt blocks

Since Copilot Cowork is prompt-driven, missions include full prompt text in code blocks that learners can copy and paste:

```markdown
1. Enter the following prompt:

    ```text
    Analyze the attached CSV file. Identify anyone who checked out after 11 PM
    more than once this month. Send me a summary email with their names,
    dates, and checkout times.
    ```
```

#### Approval flow documentation

Copilot Cowork proposes actions and waits for approval. Document each approval step:

```markdown
1. Copilot Cowork will propose a plan. Review the steps.
1. Select **Approve** for each action you want to execute.
1. If an action looks incorrect, select **Reject** and refine your prompt.
```

#### Optional seeding labs

Some missions include an optional "seed your environment" lab for learners who don't have real data to work with. Mark these clearly:

```markdown
## 🧪 Lab 1.1 - Seed Your M365 Environment

> [!NOTE]
> This lab is optional. If you already have relevant data in your Microsoft 365
> environment, skip to Lab 2.1.

Provide sample data tables, email templates, calendar events, or Planner tasks
that learners can create to have a working dataset.
```

#### Lab assets table

When the mission uses sample data files, list them in a table before the labs:

```markdown
## 📁 Lab Assets

| File | What it contains |
|------|------------------|
| `badge_check.csv` | Building access records with check-in/check-out times |
| `team_roster.xlsx` | Department and contact details for security follow-up |
```

Place asset files in the mission's `assets/` subfolder.

## Adding a new Cowork Collective mission

1. Create a folder: `docs/cowork-collective/your-mission-name/`
1. Create `index.md` with the required frontmatter (don't forget `section: cowork-collective`).
1. Create an `assets/` subfolder for screenshots and data files.
1. Add the badge image to the shared `docs/cowork-collective/assets/` folder.
1. Add any new tags, products, or industries to the corresponding JSON files in `docs/.vitepress/data/`.
1. Run frontmatter validation:

   ```bash
   node scripts/validate-frontmatter.mjs
   ```

1. Run `npm run docs:dev` and verify your mission appears on the [Cowork Collective landing page](docs/cowork-collective/index.md) and renders correctly.
1. Run linting and spell check:

   ```bash
   markdownlint-cli2 "docs/cowork-collective/your-mission-name/**/*.md"
   cspell "docs/cowork-collective/your-mission-name/**/*.md"
   ```
