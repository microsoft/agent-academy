---
name: agent-academy-mission
description: Guidelines for creating new training missions for Agent Academy. Use this skill when developing new course missions (Operative, Recruit, Commander or Special Ops), including mission structure, formatting conventions, lab design, and content patterns.
---

# Agent Academy Mission Development Guidelines

This skill provides comprehensive guidelines for creating new training missions for the Agent Academy course. Follow these patterns and conventions to ensure consistency with existing missions.

## Mission Structure

Every mission follows a consistent structure. Use this template when creating new missions:

### Required Frontmatter

```yaml
---
prev:
  text: 'Previous Mission Title'
  link: '/[course-name]/XX-previous-mission'
next:
  text: 'Next Mission Title'
  link: '/[course-name]/XX-next-mission'
---
```

Where `[course-name]` is one of: `operative`, `recruit`, `commander`, or `special-ops`.

### Mission Header Pattern

```markdown
# 🚨 Mission XX: [Mission Title]

## 🕵️‍♂️ CODENAME: `OPERATION [CODENAME]`

> **⏱️ Operation Time Window:** `~XX minutes`

## 🎯 Mission Brief

Welcome back, Agent. [Context from previous mission].

Your assignment, should you choose to accept it, is **Operation [Codename]** - [brief description of what they'll accomplish].

[Elaborate on the mission's importance and what transformation the learner will experience]
```

### Objectives Section

Always use this format for objectives:

```markdown
## 🔎 Objectives

In this mission, you'll learn:

1. [First objective - conceptual understanding]
1. [Second objective - practical skill]
1. [Third objective - hands-on application]
1. [Additional objectives as needed]
```

## Codename Conventions

Each mission has a unique codename that reflects its theme:

| Mission Topic             | Example Codename             |
| ------------------------- | ---------------------------- |
| Getting started/setup     | `OPERATION TALENT SCOUT`     |
| Instructions/directives   | `OPERATION SECRET DIRECTIVE` |
| Multi-agent systems       | `OPERATION SYMPHONY`         |
| Event triggers/automation | `OPERATION SIGNAL POINT`     |
| Model selection           | `OPERATION ARCHETYPE`        |
| AI safety                 | `OPERATION SAFE HARBOR`      |
| Document analysis         | `OPERATION RESUME RECON`     |
| Data grounding            | `OPERATION GROUNDING CONTROL`|
| Document generation       | `OPERATION DOC ASSEMBLY`     |
| External integrations     | `OPERATION MCP RENDEZVOUS`   |
| Feedback collection       | `OPERATION ECHO`             |

Choose codenames that are:

- Memorable and thematic
- Related to the mission's core concept
- Written in ALL CAPS after "OPERATION"

## Time Estimates

Provide realistic time estimates:

- **~20 minutes**: Intel/theory-only missions (no hands-on labs)
- **~45 minutes**: Standard missions with 1-2 labs
- **~60 minutes**: Complex missions with multiple labs or advanced concepts

## Content Sections

### Conceptual Content

Before labs, include educational content explaining the concepts:

```markdown
## 🧠 Understanding [Concept]

### What is [Concept]?

[Clear explanation of the concept]

### Why [Concept] matters

- [Benefit 1]
- [Benefit 2]
- [Benefit 3]

### Key characteristics

- **[Characteristic 1]**: [Description]
- **[Characteristic 2]**: [Description]
```

### Comparison Tables

Use tables to compare options or explain categories:

```markdown
| Aspect | Option A | Option B |
|--------|----------|----------|
| **Use case** | [Description] | [Description] |
| **Complexity** | [Level] | [Level] |
| **Best for** | [Scenario] | [Scenario] |
```

## Lab Design

### Lab Header Format

```markdown
## 🧪 Lab X: [Lab Title]

[Brief description of what the learner will build or accomplish]

### Prerequisites to complete this mission

1. You'll need to:
    - **Have completed [Mission XX](../XX-previous-mission/index.md)** and have [specific artifact] ready
    - [Additional prerequisites]
```

### Lab Step Format

Use numbered steps with clear actions:

```markdown
### X.Y [Step Title]

1. Go to **[Location/URL]**
1. Select **[UI Element]** in the [location description]

    ![Descriptive alt text](./assets/XX-image-name.png)

1. [Next action with **bold** for UI elements]

    > [!NOTE]
    > [Additional context or explanation]

1. [Continue with remaining steps]
```

### Step Numbering Convention

- Major lab sections: `X.1`, `X.2`, `X.3`
- Sub-steps within sections use standard numbered lists (1, 2, 3...)
- Reference labs and steps as "Lab X.Y" in cross-references

## Callout Boxes

Use GitHub-flavored markdown callouts:

```markdown
> [!NOTE]
> Additional information that's helpful but not critical.

> [!TIP]
> Best practices or helpful suggestions.

> [!IMPORTANT]
> Critical information the learner must understand.

> [!WARNING]
> Potential issues or things that could go wrong.
```

> [!NOTE]
> VitePress supports NOTE, TIP, IMPORTANT, WARNING, and CAUTION callouts. There is no INFO callout - use NOTE for informational content.

### When to Use Each Callout

- **NOTE**: Clarifications, "On success you will see...", edge cases, background information
- **TIP**: Best practices, shortcuts, pro tips
- **IMPORTANT**: Prerequisites, critical configuration, must-do items
- **WARNING**: Common mistakes, preview/experimental features, data loss risks
- **CAUTION**: Serious warnings about irreversible actions or security concerns

### Collapsible Details Blocks

Use the `details` container for collapsible content. This is ideal for long content that would otherwise clutter the page:

```markdown
::: details Click to expand
This content is hidden by default and can be expanded by clicking.

You can include any markdown content here:
- Lists
- Code blocks
- Tables
:::
```

### Details with Custom Title

````markdown
::: details Click me to view the full JSON
```json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "TextBlock",
      "text": "Hello World"
    }
  ]
}
```
:::
````

### Details Open by Default

Add the `{open}` attribute to have the details block expanded by default:

````markdown
::: details Click me to toggle the code {open}
```js
console.log('Hello, VitePress!')
```
:::
````

### When to Use Collapsible Details

Use collapsible `details` containers for:

- **Long JSON examples**: Adaptive Card definitions, API responses
- **Extended code samples**: Full solution code that's optional to view
- **Supplementary information**: Background context that not all readers need
- **Step-by-step troubleshooting**: Detailed debugging steps for edge cases
- **Full error messages**: Complete stack traces or log outputs

### Code Groups

Use code groups to show multiple related code blocks with tabs:

```markdown
::: code-group

```json [AdaptiveCard.json]
{
  "type": "AdaptiveCard",
  "body": []
}
```

```txt [Formula.txt]
Set(varResult, "Hello World")
```

:::

```markdown

## Mission Completion Section

End every mission with:

```markdown
## 🎉 Mission Complete

Mission XX is completed! You now have:

✅ **[Achievement 1]**: [Description of what they learned/built]  
✅ **[Achievement 2]**: [Description of what they learned/built]  
✅ **[Achievement 3]**: [Description of what they learned/built]

[Transition sentence to next mission]

Next up is [Mission XX+1](../XX+1-next-mission/index.md): [Mission title].
```

## Tactical Resources Section

End with links to official documentation:

```markdown
## 📚 Tactical Resources

📖 [Resource Title](https://learn.microsoft.com/...)
📖 [Resource Title](https://learn.microsoft.com/...)

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/[course-name]/XX-mission-name" alt="Analytics" />
```

Where `[course-name]` is one of: `operative`, `recruit`, or `commander`.

### Analytics Image URL Pattern

The analytics image tracks page visits. Follow this exact pattern:

```text
https://m365-visitor-stats.azurewebsites.net/agent-academy/[course-name]/[folder-name]
```

Examples:

- `agent-academy/operative/03-multi-agent`
- `agent-academy/recruit/08-add-adaptive-card`
- `agent-academy/commander/01-getting-started`

> [!IMPORTANT]
> The path must match the folder name exactly (e.g., `03-multi-agent`, not `03` or `multi-agent`).

## Asset Management

### Folder Structure

```markdown
docs/[course-name]/XX-mission-name/
├── index.md           # Main mission content
└── assets/
    ├── screenshot.png    # Screenshots
    ├── adaptive-card.json   # JSON files for Adaptive Cards, etc.
    └── formula.txt    # Text files for formulas, etc.
```

Where `[course-name]` is one of: `operative`, `recruit`, or `commander`.

### Screenshot Guidelines

- Crop to show only relevant UI elements
- Highlight or annotate important areas when helpful
- Use consistent browser/window sizing
- Include just enough context to orient the learner

### Image Alt Text Guidelines

Write descriptive alt text that helps learners understand what they should see:

- **Do**: Describe the action or UI state: `"Copilot Studio topic editor with Add node button highlighted"`
- **Don't**: Use generic text: `"screenshot"` or `"image"`
- Include key UI elements mentioned in the step
- Keep alt text concise but informative (under 125 characters when possible)

Examples of good alt text:

- `"Power Platform admin center showing environment list with Dev environment selected"`
- `"Adaptive Card preview displaying candidate summary with Accept and Reject buttons"`
- `"Topic trigger configuration panel with 'When a message is received' selected"`

## Writing Style

### Tone and Voice

- Use second person ("you") to address the learner directly
- Maintain the spy/operative theme with phrases like:
  - "Welcome back, Agent"
  - "Your mission, should you choose to accept it"
  - "Operation [Codename]"
- Be encouraging and supportive
- Use active voice

### Formatting Conventions

- **Bold** for UI elements: buttons, menu items, field names
- `Code formatting` for: values to enter, file names, code snippets
- *Italics* for emphasis or introducing new terms
- Use emojis consistently:
  - 🚨 Mission header
  - 🕵️‍♂️ Codename
  - 🎯 Mission Brief
  - 🔎 Objectives
  - 🧠 Understanding/conceptual sections
  - 🧪 Labs
  - 🎉 Mission Complete
  - 📚 Tactical Resources

### Technical Accuracy

- Verify all steps work in current Copilot Studio version
- Include version/date notes for features that may change
- Test all provided code, JSON, and formulas
- Ensure screenshots match current UI

## Theory-Only Missions

Some missions don't have labs (like Mission 02). Structure these as:

```markdown
# 🚨 Mission XX: [Title]

## 🕵️‍♂️ CODENAME: `OPERATION [CODENAME]`

> **⏱️ Operation Time Window:** `~20 minutes – intel only, no fieldwork required`

## 🎯 Mission Brief

Agent, your next assignment is **Operation [Codename]**, a focused training mission on [topic].

This mission is not a hands-on lab. Instead, it gives you the foundational knowledge you'll need to [apply in later exercises].

[Rest of conceptual content organized into logical sections]

## 🎉 Mission Complete

[Summary of knowledge gained]

You will put your new [skill] skills to practice in the upcoming lessons.
```

## Cross-Referencing

### Linking to Other Missions

```markdown
In [Mission 03](../03-multi-agent/index.md), you learned about...

As covered in [Recruit](../../recruit/10-add-event-triggers/index.md)...
```

### Referencing Previous Work

Always remind learners what they built previously:

```markdown
Your multi-agent hiring system from Mission 03 is operational...

Building on the Summarize Resume prompt from Mission 07...
```

## Use Case Scenarios

For labs, consider including user story format:

```markdown
### ✨ Use case scenario

**As an** [role]

**I want to** [action/capability]

**So that I can** [benefit/outcome]
```

## Prerequisites Section

For missions that build on previous work:

```markdown
## 🔍 Prerequisites

Before embarking on this mission, ensure you have:

- [Completed previous mission or have specific artifact]
- [Required license or access]
- [Required permissions]

> [!TIP]
> **Prerequisites help**: If you need help with [topic], please reference the [relevant lab](./path/to/lab) which walks you through [setup process].
```

## Developer Tips Sections

Include practical guidance for developers:

```markdown
## Developer tips & gotchas

1. **[Tip title]**: [Explanation]
1. **[Tip title]**: [Explanation]
1. **[Tip title]**: [Explanation]
```

## Solution Downloads

When providing downloadable solutions:

```markdown
1. **[Download](https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/[course-name]/XX-mission/assets/Solution.zip)** the prepared solution
```

Where `[course-name]` is one of: `operative`, `recruit`, or `commander`.

Use raw GitHub links for direct downloads.

## Linking to Asset Files

When linking to JSON, TXT, or other asset files that users need to copy or download, always use raw GitHub links:

```markdown
<!-- For JSON files (e.g., Adaptive Cards) -->
[Download the Adaptive Card JSON](https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/[course-name]/XX-mission/assets/adaptive-card.json)

<!-- For TXT files (e.g., formulas) -->
[Download the formula](https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/[course-name]/XX-mission/assets/formula.txt)
```

### Raw GitHub Link Format

```text
https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/[course-name]/XX-mission/assets/[filename]
```

> [!IMPORTANT]
> Always use `raw.githubusercontent.com` for JSON and TXT files so users can directly view or download the raw content. Regular GitHub links show the file in the GitHub UI, which is not suitable for copying code or downloading.

## Mission Numbering

Missions are numbered sequentially within each course (01, 02, 03, etc.):

- Use two-digit numbering with leading zeros: `01`, `02`, ... `10`, `11`
- Folder naming convention: `XX-mission-name` (e.g., `03-multi-agent`)
- When inserting a new mission between existing ones:
  1. Renumber all subsequent mission folders
  1. Update `prev` and `next` frontmatter in all affected missions
  1. Update any cross-references to renumbered missions
  1. Update the analytics image URL in each affected mission

> [!WARNING]
> Renumbering missions is disruptive. Plan the course structure carefully before publishing to minimize future renumbering.

## Pre-Publish Checklist

Before publishing a new mission, verify the following:

### Content Quality

- [ ] All steps have been tested in current Copilot Studio version
- [ ] Screenshots match current UI
- [ ] All code, JSON, and formulas are tested and working
- [ ] Time estimate is realistic (test with a colleague if possible)
- [ ] Spy/operative theme is consistent throughout

### Structure and Links

- [ ] Frontmatter `prev` and `next` links are correct
- [ ] All internal links work (to other missions, assets)
- [ ] All external links work (Microsoft Learn, GitHub)
- [ ] Raw GitHub links used for downloadable assets
- [ ] Analytics image URL follows correct pattern

### Accessibility

- [ ] All images have descriptive alt text
- [ ] Callout boxes used appropriately
- [ ] Code blocks have language identifiers
- [ ] Tables are properly formatted

### Assets

- [ ] All screenshots are in the `assets/` folder
- [ ] Images are cropped and appropriately sized
- [ ] JSON/TXT files are valid and tested
- [ ] No sensitive data in screenshots or code samples

## Common Mistakes to Avoid

### Content Issues

- **Generic alt text**: Don't use `"screenshot"` or `"image"` - describe what the learner should see
- **Hardcoded dates**: Use `"current"` or `"latest"` instead of specific dates that will become outdated
- **Skipping the Mission Brief**: Every mission needs context and motivation
- **Inconsistent theming**: Maintain the spy/operative voice throughout

### Technical Issues

- **Regular GitHub links for assets**: Always use `raw.githubusercontent.com` for JSON, TXT, and downloadable files
- **Relative paths without `./`**: Use `./assets/image.png`, not `assets/image.png`
- **Missing language identifiers**: Always specify the language in code blocks (```json,```markdown, etc.)
- **Untested code samples**: Verify all code, JSON, and formulas work before publishing

### Structural Issues

- **Incorrect prev/next links**: Double-check frontmatter navigation links
- **Missing prerequisites**: Always specify what learners need before starting
- **Inconsistent step numbering**: Follow the X.Y pattern for lab sections
- **Orphaned assets**: Remove unused images and files from the assets folder
