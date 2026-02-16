# Mission Authoring Guide

This guide provides prescriptive instructions for creating missions across all Agent Academy tracks (Recruit, Operative, Commander).

## Required Mission Structure

Every mission must follow this structure in order:

1. YAML frontmatter with prev/next navigation
1. Mission title (H1)
1. Codename (H2 with OPERATION NAME in backticks)
1. Time estimate (blockquote with approximate minutes)
1. Video Walkthrough (optional)
1. Mission Brief section explaining context and what will be accomplished
1. Objectives section listing 3-5 learning outcomes
1. Theory sections explaining concepts (2-5 sections)
1. Lab sections providing hands-on practice (1-3 labs)
1. Mission Complete section summarizing achievements and linking to next mission
1. Tactical Resources section with Microsoft Learn documentation links
1. Analytics tracking image

## YAML Frontmatter

Include navigation links at the top of every mission file. Use single quotes for text and absolute paths starting with `/recruit/`, `/operative/`, or `/commander/` depending on your track.

## Mission Brief

Write 2-3 paragraphs (150-250 words) providing context and motivation. Address the learner directly. Explain why this mission matters before diving into how.

**Example:**
> Welcome back, Agent. In Mission 01, you built your main Hiring Agent giving you a solid foundation for managing recruitment workflows. But one agent can only do so much.
>
> Your assignment, should you choose to accept it, is **Operation Symphony** - transforming your single agent into a **multi-agent system**: an orchestrated team of specialized agents that work together to handle complex hiring challenges. Think of it as upgrading from a solo operator to commanding a specialized task force.
>
> Like a symphony orchestra where each musician plays their part in perfect harmony, you'll add two critical specialists to your existing Hiring Agent: an Application Intake Agent to process resumes automatically, and an Interview Prep Agent to create comprehensive interview materials. These agents will work together seamlessly under your main orchestrator.

## Objectives

Start with "In this mission, you'll learn:" followed by numbered list. Use parallel structure. Focus on skills gained, not tasks performed. Keep to 3-5 items maximum.

**Example:**
> In this mission, you'll learn:
>
> 1. When to use **child agents** vs **connected agents**
> 1. How to design **multi-agent architectures** that scale
> 1. Creating **child agents** for focused tasks
> 1. Establishing **communication patterns** between agents
> 1. Building the Application Intake Agent and Interview Prep Agent

## Theory Before Practice

Always explain concepts in theory sections before applying them in labs.

- Theory sections use H2 headings
- Break complex topics into sub-sections using H3 headings
- Include callouts for key points:
  - **TIP** for best practices
  - **INFO** for important concepts
  - **NOTE** for additional context
  - **WARNING** for cautions
  - **IMPORTANT** for critical information
- Use tables to compare options or patterns
- Keep theory sections 200-500 words each

**Callout Examples:**

```markdown
> [!TIP] Best Practice
> Use child agents when you need tight control over the conversation flow and want to reuse specific capabilities across multiple scenarios.

> [!INFO] Learn more
> Connected agents communicate through handoffs, passing context and conversation history between specialized agents.

> [!NOTE]
> You can have up to 10 child agents per parent agent in Copilot Studio.

> [!WARNING]
> Be careful not to create circular references when connecting agents - Agent A should not hand off to Agent B if Agent B can hand off back to Agent A.

> [!IMPORTANT]
> For this lab, you need to make sure that you are part of the Frontier preview program to get early access to Microsoft Agent 365.
```

**Theory Section Example:**

> ## What are connected agents?
>
> In Copilot Studio, you're not limited to building single, monolithic agents. You can create **multi-agent systems** - networks of specialized agents that work together to handle complex workflows.
>
> Think of it like a real-world organization: instead of one person doing everything, you have specialists who excel at specific tasks and collaborate when needed.
>
> ### Why multi-agent systems matter
>
> - **Scalability:** Each agent can be developed, tested, and maintained independently by different teams.
> - **Specialization:** Agents can focus on what they do best. Perhaps one for data processing, another for user interaction, another for decision-making.
> - **Flexibility:** You can mix and match agents, reuse them across projects, and evolve your system incrementally.
> - **Maintainability:** Changes to one agent don't necessarily affect others, making updates safer and easier.

## Lab Structure

Labs use H2 headings with "Lab" prefix and sequential numbering. Begin each lab with 1-2 sentences explaining what will be accomplished. Use sub-labs (H3) with decimal numbering for logical groupings within a lab.

The H2 headings with "Lab" prefix and sequential numbering will also be used in the video chapter markers.
Example: [https://www.youtube.com/watch?v=BVNUmLXFCq8](https://www.youtube.com/watch?v=BVNUmLXFCq8)

**Example:**

> ## Lab 1: Setup the Hiring Agent
>
> In this hands-on lab, you'll establish the foundation for your hiring automation system. You'll begin by importing a pre-configured solution that contains all the necessary Dataverse tables and data structure for managing candidates, job positions, and hiring workflows.
>
> ### Lab 1.1: Import solution
>
> 1. Go to **[Copilot Studio](https://copilotstudio.microsoft.com)**
> 1. Select the **...** in the left navigation and select **Solutions**
>
> 1. Select the **Import Solution** button on the top

## Lab Steps

Number all steps starting with `1.` - markdown auto-numbers. Start every step with an action verb: Select, Enter, Navigate, Configure, Choose, Upload, Expand. Use exact UI text in **bold** for buttons, fields, and menu items. Keep steps atomic - one clear action per step. Indent supporting content (images, notes, code blocks) with 4 spaces under the step.

## Screenshots

Include a screenshot after every significant UI interaction. Place images after the step they illustrate, indented with 4 spaces. Use descriptive alt text (5-10 words). Save as PNG in `./assets/` folder. Name files: `[mission-number]-[description].png` in lowercase with hyphens.

**Screenshot requirements:**

- Don't show entire screen unless needed to explain multiple things or show location - focus on targeted sections
- Don't show browser frame - give readers only the context they need
- Use Microsoft red #e91c1c (RGB 233, 28, 28) for highlight boxes with 4px border
- Always use light theme with white background before capturing
- Don't show cursor
- For numbered callouts: use black text on Microsoft red circle (#e91c1c), no arrows or other shapes

## Mission Complete

Summarize 3-5 key skills learned with check-marks. Include link to next mission using relative path. Follow with Tactical Resources section linking to official Microsoft Learn documentation. Include Azure DevOps tracking codes in Microsoft Learn URLs. End file with analytics tracking pixel.

**Example:**

> Mission 01 is completed! You now have mastered the following skills:
>
> ✅ **Scenario Understanding**: Comprehensive knowledge of hiring automation challenges and the solution you will be building
> ✅ **Solution Deployment**: Successfully imported and configured the building blocks of the hiring management system
> ✅ **Agent Creation**: Built a hiring agent that is the start of the scenario you're going to build as an Agent Academy Operative
>
> Next up is [Mission 02](../02-agent-instructions/index.md): Agent Instructions
>
> ## Tactical Resources
>
> - 📖 [Microsoft Copilot Studio - Create an agent](https://learn.microsoft.com/microsoft-copilot-studio/authoring-first-bot?WT.mc_id=power-172621-ebenitez)
> - 📖 [Microsoft Dataverse Documentation](https://learn.microsoft.com/power-apps/maker/data-platform)

## Writing Style

Use active voice and present tense. Address learner as "you". Write in imperative mood for lab steps. Keep sentences 15-25 words. Break long paragraphs into shorter ones. Use conversational but professional tone with mission-themed language.

**Accessibility:** Use "Select" (not "click") for UI interactions and "Field" (not "textbox") for form inputs. Users may interact via keyboard, touch, or screen readers rather than mouse clicks.

For markdown formatting standards, spell checking, and general style conventions, see [CONTRIBUTING.md](./CONTRIBUTING.md).

## File Organization

Each mission in numbered folder: `01-[mission-name]/` with `index.md` and `assets/` subfolder. All images and data files in assets folder. Use lowercase with hyphens for all filenames.

## Additional Resources

- [Contributing Guide](./CONTRIBUTING.md) - Markdown linting, spell checking, and general contribution standards
- [Microsoft Writing Style Guide](https://learn.microsoft.com/style-guide/welcome/) - Official Microsoft style and terminology guide
