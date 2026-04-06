# Contributing to Special Ops

Special Ops are **standalone, one-off missions** designed to sharpen skills in a specific area. Unlike course missions, they have no sequential navigation and are self-contained.

For general tooling setup (markdown linting, spell checking, local preview), see [CONTRIBUTING-GENERAL.md](./CONTRIBUTING-GENERAL.md).
For writing style rules, see [WRITING_STYLE.md](./WRITING_STYLE.md).
For custom component reference, see [CUSTOM-COMPONENTS.md](./CUSTOM-COMPONENTS.md).

## Folder structure

```text
docs/special-ops/
├── index.md                          ← Landing page (uses <missions /> component)
├── assets/                           ← Shared badge images for all missions
│   ├── MCP_Joker_Badge.png
│   ├── YAML_Specialist_Badge.png
│   └── ...
├── mcs-mcp/
│   ├── index.md                      ← Mission content
│   ├── assets/                       ← Mission-specific screenshots
│   └── source/                       ← Optional: deployable code (Dockerfile, src/, etc.)
├── yaml-specialist/
│   ├── index.md
│   └── assets/
└── ...
```

### Naming conventions

- Mission folders: `kebab-case/` (no numbering — missions are standalone)
- Main content file: always `index.md`
- Mission-specific assets: `assets/` subfolder inside the mission folder
- Badge images: stored in the **shared** `docs/special-ops/assets/` folder, named `Mission_Name_Badge.png`
- Screenshot filenames: `description.png` in lowercase with hyphens
- All filenames lowercase with hyphens, no spaces

## Required frontmatter

Every Special Ops mission requires the following YAML frontmatter:

```yaml
---
tags:
  - yaml
difficulty: 3
time: 60
description: 'Build and extend Copilot Studio agents entirely from VS Code using the YAML agent definition language.'
badge: ../assets/YAML_Specialist_Badge.png
products:
  - copilot-studio
  - visual-studio-code
  - github-copilot
industries:
  - it
created-date: 2026-03-30
last-edited-date: 2026-04-02
---
```

### Field reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `tags` | string[] | Yes | Array of tag slugs from `docs/.vitepress/data/tags.json`. |
| `difficulty` | number (1–5) | Yes | Difficulty level from 1 (beginner) to 5 (expert). |
| `time` | number | Yes | Estimated completion time in minutes. Must be greater than 0. |
| `description` | string | Yes | Mission description (minimum 10 characters). Used in mission cards and the `<missions />` grid. |
| `badge` | string | Yes | Relative path to the badge image in the shared assets folder (for example `../assets/Badge_Name.png`). |
| `products` | string[] | Yes | Array of product slugs from `docs/.vitepress/data/products.json`. |
| `industries` | string[] | Yes | Array of industry slugs from `docs/.vitepress/data/industries.json`. |
| `created-date` | date | Yes | ISO date when the mission was first published. |
| `last-edited-date` | date | Yes | ISO date of the most recent edit. Update this on every change. |

> [!IMPORTANT]
> Special Ops missions do **not** use `prev`, `next`, `short-description`, `codename`, or `section` in their frontmatter. They are standalone — there is no sequential navigation.

### Frontmatter validation

Special Ops frontmatter is validated automatically by `scripts/validate-frontmatter.mjs`. The script checks:

- `difficulty` is a number between 1 and 5
- `time` is a number greater than 0
- `description` is a string with at least 10 characters
- `created-date` and `last-edited-date` are valid dates

Run the validation locally:

```bash
node scripts/validate-frontmatter.mjs
```

## Mission content structure

Special Ops missions follow this layout:

```markdown
# 🧬 Mission Title {#mission-slug}

<mission-meta />

![Badge image](../assets/Mission_Badge.png){ width="300" }

Welcome, agent. Your mission, should you choose to accept it...

[1-2 paragraphs introducing the mission context and what the agent will accomplish]

## Mission objectives

- Objective one
- Objective two
- Objective three

## ⚙️ Prerequisites

- [Tool/access requirement with link](https://example.com)
- Another requirement

## Concept Section Title

Conceptual content explaining the topic.

> [!INFO] What is X?
> Brief explanation of the core concept.

## Lab 1.1: First Lab Section

1. Step one
1. Step two

    ![Screenshot description](./assets/screenshot-name.png)

1. Step three

## ✅ Mission Accomplished

You completed this Special Ops mission! Here is what you accomplished:

✅ **Skill One**: Description
✅ **Skill Two**: Description

## 📚 Tactical Resources

- 📖 [Resource title](https://learn.microsoft.com/...)

## 🏅 Claim your completion badge

![Badge](../assets/Mission_Badge.png){ width="200" }

[Submit the completion form](https://forms.example.com)

<analytics-tag section="special-ops" mission="mission-slug" />
```

### Key differences from course missions

| Aspect | Courses | Special Ops |
|--------|---------|-------------|
| Navigation | Sequential (`prev`/`next` in frontmatter) | Standalone (no navigation links) |
| Codename | Required (`OPERATION NAME`) | Not used |
| Folder naming | `NN-kebab-case/` (numbered) | `kebab-case/` (no numbers) |
| Description field | `short-description` | `description` (validated, min 10 chars) |
| Badge location | Course-level `course-completion-badges-*/assets/` | Shared `docs/special-ops/assets/` |
| Source code | Not included | Optional `source/` folder for deployable code |

### Content patterns

- **Mission intro**: Use a dramatic, agent-themed opener: "Welcome, agent. Your mission..."
- **Prerequisites**: Always include a dedicated section listing tools, accounts, and access requirements with direct links.
- **Concept explanations**: Special Ops missions are self-contained, so they must explain all prerequisite concepts within the mission itself. Use `[!INFO]` callouts for quick definitions and comparison tables for decision points.
- **Badge claim**: Every mission ends with a badge claim section showing the badge image and a link to the completion form.

## Adding a new Special Ops mission

1. Create a folder: `docs/special-ops/your-mission-name/`
1. Create `index.md` with the required frontmatter and content structure.
1. Create an `assets/` subfolder for screenshots.
1. Add the badge image to the shared `docs/special-ops/assets/` folder.
1. Add any new tags, products, or industries to the corresponding JSON files in `docs/.vitepress/data/`.
1. Run frontmatter validation:

   ```bash
   node scripts/validate-frontmatter.mjs
   ```

1. Run `npm run docs:dev` and verify your mission appears on the [Special Ops landing page](docs/special-ops/index.md) and renders correctly.
1. Run linting and spell check:

   ```bash
   markdownlint-cli2 "docs/special-ops/your-mission-name/**/*.md"
   cspell "docs/special-ops/your-mission-name/**/*.md"
   ```
