# Contributing to Courses (Recruit / Operative / Commander)

This guide covers how to author or update missions for the three ranked course tracks: **Recruit** (entry), **Operative** (intermediate), and **Commander** (advanced). Each course is a sequential learning path where every mission builds on the previous one.

For general tooling setup (markdown linting, spell checking, local preview), see [CONTRIBUTING-GENERAL.md](./CONTRIBUTING-GENERAL.md).
For writing style rules, see [WRITING_STYLE.md](./WRITING_STYLE.md).
For custom component reference, see [CUSTOM-COMPONENTS.md](./CUSTOM-COMPONENTS.md).

## Folder structure

Each course lives under `docs/` in its own directory:

```text
docs/
├── recruit/
│   ├── index.md                              ← Course landing page
│   ├── 00-course-setup/
│   │   ├── index.md                          ← Mission content
│   │   └── assets/                           ← Screenshots, data files
│   │       ├── 00-setup-screenshot.png
│   │       └── video-thumbnail.jpg
│   ├── 01-introduction-to-agents/
│   │   ├── index.md
│   │   └── images/                           ← Older naming; new missions use assets/
│   ├── ...
│   └── course-completion-badges-recruit/
│       ├── index.md
│       └── assets/
├── operative/
│   ├── index.md
│   ├── 01-get-started/
│   │   ├── index.md
│   │   └── assets/
│   ├── ...
│   ├── course-completion-badges-operative/
│   └── test-data/                            ← Shared sample data (CSV, etc.)
└── commander-preview/
    ├── index.md
    ├── 01-advanced-mcp/
    │   ├── index.md
    │   └── assets/
    └── ...
```

### Naming conventions

- Mission folders: `NN-kebab-case-name/` with zero-padded numbers (`00`, `01`, `02`, ...)
- Main content file: always `index.md`
- Asset folder: `assets/` (preferred) or `images/` (legacy — use `assets/` for new missions)
- Screenshot filenames: `NN-description.png` in lowercase with hyphens (for example `03-select-solution.png`)
- All filenames lowercase with hyphens, no spaces

## Required frontmatter

Every course mission requires the following YAML frontmatter at the top of `index.md`:

```yaml
---
prev:
  text: 'Previous Mission Title'
  link: /recruit/00-course-setup
next:
  text: 'Next Mission Title'
  link: /recruit/02-copilot-studio-fundamentals
short-description: 'A concise description of this mission'
difficulty: 1
codename: OPERATION AI AGENT DECODE
time: 30
tags:
  - fundamentals
products:
  - copilot-studio
industries:
  - it
created-date: 2025-08-20
last-edited-date: 2026-03-13
---
```

### Field reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `prev` | object | Yes (except first mission) | Navigation link to the previous mission. Contains `text` (display label) and `link` (absolute path). |
| `next` | object | Yes (except last mission) | Navigation link to the next mission. Same shape as `prev`. |
| `short-description` | string | Yes | Brief description shown in mission cards and metadata. |
| `difficulty` | number (1–5) | Yes | Difficulty level. Recruit = 1, Operative = 2, Commander = 3+. |
| `codename` | string | Yes | Thematic operation name in ALL CAPS (for example `OPERATION SECRET DIRECTIVE`). |
| `time` | number | Yes | Estimated completion time in minutes. |
| `tags` | string[] | Yes | Array of tag slugs from `docs/.vitepress/data/tags.json`. |
| `products` | string[] | Yes | Array of product slugs from `docs/.vitepress/data/products.json`. |
| `industries` | string[] | Yes | Array of industry slugs from `docs/.vitepress/data/industries.json`. |
| `created-date` | date | Yes | ISO date when the mission was first published (for example `2025-08-20`). |
| `last-edited-date` | date | Yes | ISO date of the most recent edit. Update this on every change. |

Use single quotes for string values. Paths in `prev`/`next` are absolute and start with `/recruit/`, `/operative/`, or `/commander-preview/`.

## Mission content structure

Every mission must follow this layout in order:

```markdown
# 🚨 Mission NN: Title {#mission-nn-title}

<mission-meta />

🎥 **Watch the Walkthrough**

[![Video thumbnail](./assets/video-thumbnail.jpg)](https://www.youtube.com/watch?v=VIDEO_ID "Watch the walkthrough on YouTube")

## 🎯 Mission Brief {#mission-brief}

2-3 paragraphs providing context, motivation, and what the learner will accomplish.

## 🔎 Objectives {#objectives}

In this mission, you'll learn:

1. First learning outcome
1. Second learning outcome
1. Third learning outcome

## Theory Section Title

Conceptual content explaining the "why" before the "how". 200-500 words per section.

## Lab 1: Lab Title

1-2 sentences explaining what will be accomplished.

### Lab 1.1: Sub-lab title

1. Step one
1. Step two

    ![Screenshot description](./assets/nn-screenshot-name.png)

1. Step three

## Mission Complete

Mission NN is completed! You now have mastered the following skills:

✅ **Skill One**: Description
✅ **Skill Two**: Description
✅ **Skill Three**: Description

Next up is [Mission NN+1](../next-mission/index.md): Next Mission Title

## Tactical Resources

- 📖 [Resource title](https://learn.microsoft.com/...)

<analytics-tag section="recruit" mission="nn-mission-name" />
```

### Key rules

- The `<mission-meta />` component renders the codename, difficulty stars, time estimate, and product/tag/industry pills automatically from the frontmatter. Place it directly after the H1 title.
- Always put theory (concept explanation) **before** the corresponding lab.
- Use H2 (`##`) for top-level labs: `## Lab 1: Title`.
- Use H3 (`###`) for sub-labs: `### Lab 1.1: Sub-title`.
- End every mission file with an `<analytics-tag />` component.

## Lab step guidelines

- Number all steps starting with `1.` — markdown handles auto-numbering.
- Start every step with an **action verb**: Select, Enter, Navigate, Configure, Choose, Upload, Expand.
- Use exact UI text in **bold** for buttons, fields, and menu items.
- Keep steps atomic — one clear action per step.
- Indent supporting content (images, notes, code blocks) with 4 spaces under the step.

**Accessibility:** Use "Select" (not "click") for UI interactions and "Field" (not "textbox") for form inputs. Users may interact with keyboard, touch, or screen readers.

## Screenshot requirements

Include a screenshot after every significant UI interaction:

- Focus on the relevant section — don't show the entire screen unless context requires it.
- Don't include the browser frame.
- Use Microsoft red `#e91c1c` (RGB 233, 28, 28) for highlight boxes with 4px border.
- Always capture in **light theme** with a white background.
- Don't show the cursor.
- For numbered callouts, use black text on a Microsoft red circle (`#e91c1c`) — no arrows or other shapes.
- Save as PNG in the `./assets/` folder.
- Use descriptive alt text (5‒10 words).

## Callouts

Use GitHub-flavored alert syntax for callout boxes:

```markdown
> [!TIP] Best Practice
> Content for tips and recommendations.

> [!INFO] Learn more
> Content for additional conceptual context.

> [!NOTE]
> Content for supplementary information.

> [!WARNING]
> Content for cautions the learner should heed.

> [!IMPORTANT]
> Content for critical information the learner must not miss.
```

## Badge completion pages

The final mission in each course is a badge claim page. It follows the same frontmatter format but with these conventions:

- `codename: OPERATION COURSE COMPLETION`
- `tags: [completion]`
- `time: 5`
- Content includes: submission protocol with numbered steps, required screenshots, badge validation form link, Global AI Community account link, and deployment timeline.

## Adding a new mission

1. Create a folder: `docs/<track>/NN-mission-name/`
1. Create `index.md` with the frontmatter and content structure above.
1. Create an `assets/` subfolder for screenshots and data files.
1. Update the **previous mission's** `next` frontmatter to point to your new mission.
1. Update the **next mission's** `prev` frontmatter (if applicable).
1. Add any new tags, products, or industries to the corresponding JSON files in `docs/.vitepress/data/`.
1. Run `npm run docs:dev` and verify your mission appears correctly in the navigation and renders properly.
1. Run linting and spell check before submitting:

   ```bash
   markdownlint-cli2 "docs/<track>/NN-mission-name/**/*.md"
   cspell "docs/<track>/NN-mission-name/**/*.md"
   ```
