---
hide: false
preview: false
prev:
    text: 'Add Tools'
    link: '/recruit-nextgen/05-add-tools'
next:
    text: 'Automate with Workflows'
    link: '/recruit-nextgen/07-automate-with-workflows'
short-description: Use a GitHub Copilot harness Skill to create a reusable device guidance capability
difficulty: 1
codename: OPERATION SKILL BOOST
time: 30
harness: github-copilot
credits: [1000, 1800]
tags:
    - custom-skills
    - instructions
products:
  - copilot-studio
  - power-platform
industries:
  - it
created-date: 2026-08-05
last-edited-date: 2026-08-05

---

# 🚨 Mission 06: Add Skills {#mission-06-add-skills}

<mission-meta />

<mission-credits />

> [!NOTE]
> **Skills are unique to agents powered by the GitHub Copilot harness** in Copilot Studio. They aren't available to agents powered by the standard or Copilot chat harness.

## 🎯 Mission Brief {#mission-brief}

Your Contoso IT Concierge Agent can answer questions, but a reliable helpdesk also needs focused, reusable behavior for specific tasks. The **GitHub Copilot harness** introduces **Skills** for this purpose: self-contained capabilities that package a name, description, and task-specific instructions so the harness can activate the right behavior when it's needed.

In this mission, you'll explore this GitHub Copilot harness capability by iteratively refining two skills: one for troubleshooting and another for device guidance. The skills will guide the agent to call SharePoint correctly, recover from query issues, map user-selected options to the correct item, and capture additional requirements.

This work turns a general-purpose agent into a more dependable support experience. Instead of placing every procedure in the agent's global instructions, you'll keep task-specific guidance in focused packages that the harness can activate when relevant. You'll inspect the generated skill files, improve their instructions, and test how small wording changes affect tool calls and responses. The result is behavior that is easier to review, reuse, and refine without overloading the agent's core prompt.

> [!IMPORTANT]
> In the current Copilot Studio UI, make sure the **New experience** toggle in the upper-right corner is turned **on** to use the GitHub Copilot harness authoring surface.

## 🔎 Objectives {#objectives}

1. Understand why **Skills** are unique to agents powered by the GitHub Copilot harness
1. Understand how skills provide reusable, task-specific behavior without authored topic paths
1. Review and refine an AI-generated skill to improve instruction quality
1. Validate the updated skill behavior in **Preview**, including tool input handling and follow-up requirements

## 🧠 What is a skill? {#what-is-a-skill}

Skills are reusable capabilities available to **GitHub Copilot harness agents** in Copilot Studio. Each skill provides focused guidance for a specific scenario, business process, or task by defining when it should be used, what information to collect, which tools to call, and how the agent should respond.

Skills are part of what distinguishes the GitHub Copilot harness from the other Copilot Studio harnesses:

- The **standard harness** uses topics, prompts, rules, and defined conversation paths for structured behavior.
- The **Copilot chat harness** focuses on extending Microsoft 365 Copilot Chat with enterprise knowledge.
- The **GitHub Copilot harness** can activate modular Skills as it reasons through complex, multi-step work.

Skills provide repeatable behavior for focused tasks inside an agent. They are also reusable and shareable: you can package a skill as a `SKILL.md` file or ZIP package and add it to other agents powered by the GitHub Copilot harness.

A troubleshooting process defined in a skill is a perfect fit: it's multi-step, judgment-driven, and should behave identically every time.

> [!IMPORTANT]
> Skills run as part of the GitHub Copilot harness. Building, testing, evaluating, and using these agents can consume Copilot Credits through usage-based billing.

## 📄 Authoring Skills {#authoring-skills}

Skills use a portable Markdown-based format. A `SKILL.md` file contains the following sections:

| Section | Purpose | What it should contain |
| --- | --- | --- |
| Name | The skill's identity | A short, descriptive title that helps the model recognize when the skill is relevant. Example: `IT Troubleshooting Procedure`. |
| Description | The skill's trigger and intent | A concise summary of what the skill does and when it should be used. This helps the model decide whether to invoke the skill. Example: `Guides employees through diagnose-fix-escalate steps for IT issues such as login, Wi-Fi, and device problems.` |
| Optional frontmatter | Skill metadata and configuration | Structured YAML metadata such as author, version, tags, examples, dependencies, or other settings used for organization and governance. Not typically used for procedural instructions. |
| Instructions | The skill's execution logic | Detailed guidance the model follows after selecting the skill. This can include procedure steps, decision logic, tool usage instructions, validation rules, response formats, escalation paths, and success criteria. |

When a user submits a request, the GitHub Copilot harness evaluates the available skills and uses each skill's name and description to determine which one is relevant. When the harness activates a skill, its instructions guide the agent through that task. By separating specialized capabilities into reusable skills, builders can create agents that are more accurate, maintainable, and aligned to business requirements.

## 🧩 Principles for Effective Skill Instructions {#principles}

### 1. Start with the Purpose

Begin by explaining what the skill does and when it should be used.

Example:

```text
Troubleshooting Procedure

Use this procedure when an employee reports a technical issue and needs assistance diagnosing or resolving the problem.
```

This provides context before the model starts executing steps.

### 2. Use Clear Step-by-Step Actions

Break the process into logical, ordered steps.

Example:

```text
## Steps

- **Understand the Issue** - Ask the employee to describe the problem if sufficient information has not already been provided.
  - What application or device is affected?
  - What error message are you seeing?
  - When did the issue start?
  - Can the issue be reproduced?
```

Avoid:

```text
Help the employee resolve the problem.
```

Specific instructions produce more consistent outcomes.

### 3. Define Decision Points

Tell the model what to do when different conditions occur.

Example:

```text
- **Troubleshooting Decision Rules**
  - If an error message is provided, use it to identify relevant troubleshooting steps.
  - If no error message is available, ask follow-up questions to gather more information.
  - If the issue is resolved, confirm the solution and end the procedure.
  - If the issue cannot be resolved after available troubleshooting steps, recommend escalation.
```

Good instructions define:

- If `X` happens, do `Y`
- Otherwise, do `Z`

### 4. Specify Required Inputs

If information is required, state exactly what needs to be collected.

Example:

```text
- **Troubleshooting Information** - Before starting diagnostics, collect:
  - Device type
  - Operating system
  - Application or service affected
  - Error message (if available)
  - Steps that reproduce the issue
```

This prevents the model from skipping important information gathering.

### 5. Define Tool Usage

When a skill uses actions or connectors, tell the model when and how to use them.

Example:

```text
- **Use the `X` tool** - Only use information returned from the tool, do not invent troubleshooting steps
  - Retrieve troubleshooting procedures
  - Find known issues
  - Identify recommended fixes
```

Be explicit about parameters, field names, and expected inputs.

### 6. Describe the Expected Output

Specify how results should be presented to the user.

Example:

```text
Present troubleshooting guidance using the following format.

| Step | Action |
| --- | --- |
| 1 | Verify network connectivity |
| 2 | Restart the affected application |
| 3 | Confirm whether the issue persists |
```

Included:

- Clear actions
- Expected outcomes
- Next steps if the action fails

Without output instructions, responses may become inconsistent.

### 7. Include Validation Rules

Define what constitutes valid information and successful completion.

Example:

```text
- Only present troubleshooting steps returned from approved sources.
- Do not recommend fixes that are not documented.
- Verify whether each step resolved the issue before proceeding.
- Do not assume the issue is resolved unless the employee confirms it.
```

Validation rules help prevent hallucinations and incorrect recommendations.

### 8. Define Scope and Boundaries

Tell the model what it can and cannot do.

Example:

```text
This procedure only supports troubleshooting approved enterprise applications and devices.
Do not:
- Perform account administration tasks
- Reset passwords
- Approve software requests
- Answer unrelated HR or policy questions
```

Scope boundaries help keep the agent focused and predictable.

### 9. Include Escalation Paths

Tell the model what to do when it cannot continue.

Example:

```text
If the issue remains unresolved after all available troubleshooting steps:
- Recommend escalation to the IT Help Desk.
- Provide a concise summary including:
  - Device or application affected
  - Symptoms reported
  - Troubleshooting steps attempted
  - Results of each step
```

This ensures a smooth handoff to support teams.

### 10. Define Success Criteria

Explain when the procedure is considered complete.

Example:

```text
The troubleshooting procedure is complete when:

- The issue is resolved and confirmed by the employee, or
- The issue is escalated with a complete support summary
```

Clear success criteria tell the model when to stop.

> [!TIP]
> For Copilot Studio skills specifically, the strongest instructions are usually those that answer four questions clearly:
>
> - When should this skill be used?
> - What information must be collected?
> - What actions or tools should be called?
> - What should the final response look like?
>
> If those four areas are well-defined, the skill tends to behave much more consistently.

## 🧪 Lab 06 - Add the skills {#lab-06-add-skills}

In this lab, you will extend the agent you created in [Mission 04 - Build an agent with the GitHub Copilot harness](../04-build-a-custom-agent/index.md#lab-04-create-an-agent-with-the-github-copilot-harness) by creating a series of custom skills.

### ✨ Use case {#use-case}

**As an** employee

**I want to** get quick and accurate IT support for common issues and device requests

**So that I can** stay productive and resolve technical issues faster

### Prerequisites

1. **Contoso IT Concierge** - the agent created in [Mission 04 - Build an agent with the GitHub Copilot harness](../04-build-a-custom-agent/index.md#lab-04-create-an-agent-with-the-github-copilot-harness).

### 6.1 Create a device request skill and test

The first skill we're going to create is one to handle device requests. We'll take an iterative approach showing how to test and refine a skill.

1. Download the skill package using the button below.

    <download-files path="recruit-nextgen/06-add-skills/assets/device-guidance-v1-0-1" />

    Download `device-guidance-v1-0-1.zip` and extract it.

    ![Select the device guidance skill file](./assets/06-select-the-device-guidance-skill-file.png)

1. In the **Build** tab of your agent, select the **Add +** button next to the **Skills** section.

    ![Add a new skill to agent](./assets/06-add-a-new-skill-to-agent.png)

1. Make sure the **Upload a skill** tab is selected. Then drag and drop the extracted `SKILL.md` file, or locate the file and upload it.

    ![Upload the selected device guidance skill](./assets/06-upload-the-selected-device-guidance-skill.png)

1. The skill will then be uploaded. Select the skill in the right-hand panel to review the instructions.

    - The description references the name of the tool
    - The instructions outline steps including
        - the purpose and trigger
        - clear step-by-step actions, including aligning the selected device option to the corresponding SharePoint Item ID
        - tool usage where the `Get Employee Assets` tool is referenced
        - expected output that outlines the format of the response
        - validation rules
        - exception and escalation paths
        - success criteria

    Select the **X** icon when you're done reviewing to close the skill.

    ![Review the imported device guidance instructions](./assets/06-review-the-imported-device-guidance-instructions.png)

    > [!NOTE] Reminder of the skill structure
    >
    > A skill consists of four main components.
    > 1. The `Name` identifies the skill.
    > 1. The `Description` tells the model when the skill is applicable.
    > 1. The `Optional Frontmatter` stores metadata and configuration information.
    > 1. The `Instructions` contain the operational workflow the model follows to complete the task.
    >
    > Together, these components help the model determine when to use the skill and how to execute it correctly.

1. Next, update the agent instructions to explicitly reference the skill for device requests. Under the `For device requests:` heading, delete the existing bullet points.

    ![Delete device request bullet points](./assets/06-DeleteDeviceRequestBulletPoints.png)

1. Copy and paste the following text as a new bullet point under the `For device requests:` heading.

    ```text
    Refer to the `device-guidance-v1-0-1` skill
    ```

    **Save** the agent.

    ![Update agent instructions and save](./assets/06-InstructionsUpdatedToReferenceSkill.png)

1. Select **Preview** at the top center of the agent and select **New chat** to test the updated skill.

    Copy and paste the following text and submit it to the agent.

    ```text
    I need a laptop
    ```

    The agent invokes the skill according to the updated instructions.

    ![Test the imported device guidance skill](./assets/06-test-the-imported-device-guidance-skill.png)

1. You may encounter an error if the model guesses a column name that doesn't exist in the SharePoint list.

    The following are examples of errors you may encounter.

    Example 1:

    ![Example of a SharePoint query error](./assets/06-review-the-sharepoint-query-error-ex1.png)

    Example 2:

    ![Another example of a SharePoint query error](./assets/06-review-the-sharepoint-query-error-ex2.png)

1. However, what happens next is that the model uses reasoning and dynamic planning to determine the next appropriate action when it encounters an issue.

    In this step, the model applies reasoning and uses the correct SharePoint internal column name, `field_4` (the **Asset Type** column), to filter for the device type `Laptop`.

    ![Review agent reasoning after query error](./assets/06-review-agent-reasoning-after-query-error.png)

1. The agent then displays the available laptops from the SharePoint list.

    ![Review devices returned from SharePoint list](./assets/06-review-devices-returned-from-sharepoint-list.png)

1. Regardless of whether you encountered an error, refine the skill inputs. As you learned in the **Define Tool Usage** principle, effective skill instructions should explicitly define parameters, field names, and expected inputs.

    Download the skill package using the button below.

    <download-files path="recruit-nextgen/06-add-skills/assets/device-guidance-v1-0-2" />

    Download `device-guidance-v1-0-2.zip` and extract it.

1. In the **Build** tab, select the `device-guidance-v1-0-1` skill, select the **ellipsis**, select **Replace**

    ![Replace the existing device guidance skill](./assets/06-replace-the-existing-device-guidance-skill.png)

1. Upload the extracted `SKILL.md` file into the agent.

    The updated skill now explicitly maps SharePoint display names to their internal column names. This prevents the model from guessing field names and ensures OData filters use valid columns, such as `field_4` for the **Asset Type** column. It also includes an example showing how to construct a filter correctly.

    ![Replace skill and review input instructions](./assets/06-replace-skill-and-review-input-instructions.png)

    > [!NOTE] How to find the SharePoint column schema name
    >
    > 1. In your SharePoint list, select the **Settings** icon, and then select **List settings**.
    > 1. Under **Columns**, select the column whose internal name you want to find, such as **Asset Type**.
    > 1. In the edit-column page URL, locate the `Field` query parameter. For example:
    >
    >     ```text
    >     .../FldEdit.aspx?List={LIST-ID}&Field=field%5F4
    >     ```
    >
    > The value of `Field` is the column's internal schema name. SharePoint URL-encodes `_` as `%5F`, so `Field=field%5F4` corresponds to the internal name `field_4`. Use this internal name when constructing the OData filter query.

1. Next, update the agent instructions to reference the updated skill. Replace the bullet point under the `For device requests:` heading with the following text.

    ```text
    Refer to the `device-guidance-v1-0-2` skill
    ```

    **Save** the agent.

    ![Update agent instructions and save](./assets/06-ReferenceSkill-v1-0-2.png)

1. Test the updated skill by navigating to **Preview**.

    Copy and paste the following text and submit it to the agent.

    ```text
    I need a laptop
    ```

    The agent invokes the skill. Expand the skill details and confirm that `device-guidance-v1-0-2` is referenced.

    ![device-guidance-v1-0-2 skill invoked](./assets/06-device-guidance-v1-0-2-invoked.png)

1. The error should no longer appear because the updated skill instructions guide the model to use the correct tool inputs when constructing the filter query.

    ![Review devices returned by device-guidance-v1-0-2 skill](./assets/06-review-devices-returned-by-updated-skill.png)

1. In this test, respond to the agent by providing the device option you want to proceed with.

    Copy and paste the following text and submit it to the agent.

    ```text
    A
    ```

    ![Confirm the device selected by user](./assets/06-confirm-the-device-selected-by-user.png)

1. Following the skill instructions, the agent summarizes the device selection in its response.

    ![Review the selected device summary](./assets/06-review-the-selected-device-summary.png)

    We're not done refining the skill yet. If a user wants to provide an additional comment as part of the request, that behavior also needs to be captured in the skill instructions. Let's update the skill again.

1. Download the skill package using the button below.

    <download-files path="recruit-nextgen/06-add-skills/assets/device-guidance-v1-0-3" />

    Download `device-guidance-v1-0-3.zip` and extract it.

    Repeat the same steps to replace the skill:

    - In **Build**, select the `device-guidance` skill
    - Select the **ellipsis** icon and select **Replace**
    - Upload the extracted `SKILL.md` file into the agent

    The updated skill now instructs the agent to ask about additional device requirements after the user selects an option. It captures specifications such as RAM or storage capacity and includes them in the device request. In the next mission, you'll pass this information into a workflow for the `Contoso IT Concierge` agent.

    ![Replace skill and review additional requirements instructions](./assets/06-replace-skill-and-review-additional-requirements-instructions.png)

1. Next, update the agent instructions to reference the updated skill. Replace the bullet point under the `For device requests:` heading with the following text.

    ```text
    Refer to the `device-guidance-v1-0-3` skill
    ```

    **Save** the agent.

    ![Update agent instructions to invoke device-guidance-v1-0-3 skill and save](./assets/06-ReferenceSkill-v1-0-3.png)


1. Test the updated skill by navigating to **Preview**.

    Copy and paste the following text and submit it to the agent.

    ```text
    I need a laptop
    ```

    The agent invokes the skill. Expand the skill details and confirm that `device-guidance-v1-0-3` is referenced.

    ![device-guidance-v1-0-3 skill invoked](./assets/06-device-guidance-v1-0-3-invoked.png)

1. In the response, copy and paste the following text and submit it to the agent.

    ```text
    A
    ```

    The agent responds by next asking the user for any additional requirements they may have for their device.

    ![Test the refined device guidance skill](./assets/06-test-the-refined-device-guidance-skill.png)

1. Copy and paste the following text and submit it to the agent.

    ```text
    16GB of RAM
    ```

    ![Agent asks about additional device requirements](./assets/06-agent-asks-about-additional-device-requirements.png)

1. The agent responds by summarizing the selected device and the additional requirement.

    ![Device summary includes additional user requirements](./assets/06-device-summary-includes-additional-user-requirements.png)

Notice that the agent can't complete the device request because it hasn't been configured to submit requests. In the next mission, you'll add a workflow that enables the agent to proceed with submitting the device request.

### 6.2 Create a troubleshooting skill and test

Now we'll work on a separate skill that specializes in troubleshooting issues.

1. To use the troubleshooting skill, download the skill package using the button below.

    <download-files path="recruit-nextgen/06-add-skills/assets/it-troubleshooting-procedure" />

    Download `it-troubleshooting-procedure.zip` and extract it.

1. In the **Build** tab of your agent, select the **Add +** button next to the **Skills** section.

    ![Add another skill to the agent](./assets/06-add-another-skill-to-the-agent.png)

1. Make sure the **Upload a skill** tab is selected. Then drag and drop the extracted `SKILL.md` file, or locate the file and upload it.

    ![Upload the IT troubleshooting skill](./assets/06-upload-the-selected-device-guidance-skill.png)

1. The skill will then be uploaded. Select the skill in the right-hand panel to review the instructions.

    Select the **X** icon when you're done reviewing to close the skill.

    ![Review the IT troubleshooting skill instructions](./assets/06-review-the-it-troubleshooting-skill-instructions.png)

    > [!NOTE] Reminder of the skill structure
    >
    > A skill consists of four main components.
    > 1. The `Name` identifies the skill.
    > 1. The `Description` tells the model when the skill is applicable.
    > 1. The `Optional Frontmatter` stores metadata and configuration information.
    > 1. The `Instructions` contain the operational workflow the model follows to complete the task.
    >
    > Together, these components help the model determine when to use the skill and how to execute it correctly.

1. Next, update the agent instructions to reference the updated skill. Replace the bullet point under the `For troubleshooting:` heading with the following text.

    ```text
    Refer to the `troubleshooting-procedure` skill
    ```

    **Save** the agent.

    ![Update agent instructions to reference `troubleshooting-procedure` skill and save](./assets/06-Reference-troubleshooting-procedure-skill.png)

1. Select **Preview** at the top center of the agent to test the updated skill.

    Copy and paste the following text and submit it to the agent.

    ```text
    I'm not getting new emails anymore
    ```

    The agent invokes the skill. Expand the skill details and confirm that `troubleshooting-procedure` skill is referenced.

    ![Test the IT troubleshooting skill](./assets/06-test-the-it-troubleshooting-skill.png)

1. The agent asks a follow-up question.

    ![Review the initial troubleshooting response](./assets/06-review-the-initial-troubleshooting-response.png)

1. In this test, respond with the following:

    ```text
    Happening on both outlook on windows and outlook mobile on my ios device
    ```

    ![Reply to the troubleshooting question](./assets/06-reply-to-the-troubleshooting-question.png)

1. Following the skill instructions, check that it responds with a numbered list of troubleshooting steps to try and asks another follow-up question. Reply with the following:

    ```text
    The Windows Outlook status bar is showing working offline
    ```

    ![Review the second troubleshooting response](./assets/06-review-the-second-troubleshooting-response.png)

1. Check that it replies with a suggested fix and reply with the following:

    ```text
    That fixed it, I'm receiving email now!
    ```

    ![Review the troubleshooting resolution response](./assets/06-review-the-troubleshooting-resolution-response.png)

1. The agent should then close out with a message confirming the fix.

    ![Confirm the troubleshooting skill closes successfully](./assets/06-confirm-the-troubleshooting-skill-closes-successfully.png)

## ✅ Mission Complete {#mission-complete}

Mission accomplished, Recruit! You used a capability unique to the GitHub Copilot harness and iteratively refined a reusable skill so the `Contoso IT Concierge` agent can reliably map tool inputs, recover from OData filter errors, match user-selected options to SharePoint item IDs, and capture additional device requirements.

You can now:

✅ **Create a reusable agent skill**: Package focused instructions and supporting files for a defined task.

✅ **Guide tool usage**: Map skill inputs to the SharePoint tool and handle OData filter errors.

✅ **Validate user selections**: Match selected device options to SharePoint item IDs and collect additional requirements.

✅ **Define reliable outcomes**: Add validation rules, escalation paths, and success criteria that improve consistency.

⏭️ [Move to **Automate with Workflows**](../07-automate-with-workflows/index.md) to get started.

## 🪙 Copilot Credits Estimate {#copilot-credits-estimate}

The **1,000 - 1,800 credits** shown at the top of this mission is a planning estimate, not a bill. Here's where the range comes from.

The [Copilot Credits Guide](https://aka.ms/CopilotCredits/LicensingGuide) publishes the figures we used, and two of its statements shape this entire mission:

- **No credits for manual configuration.** Work performed in the **Build** and **Monitor** tabs is free, so pasting instructions, connecting knowledge, configuring tools, and changing settings cost nothing.
- **Preview and Evaluation bill at runtime rates.** The conversations you run yourself while testing cost the same as a real user's conversations.

So this mission's cost is essentially the cost of the agent tasks you run in **Preview**. The guide bands runtime usage by how much work a task involves:

| Agent scenario | Shape of the task | Est. credits |
| -------------- | ----------------- | ------------ |
| Light | Few sources, light reasoning, one or fewer outputs | 100 - 300 |
| Medium | Many sources, structured reasoning, two or more outputs | 300 - 500 |
| Heavy | Broad aggregation, deep reasoning, many outputs | 500+ |

We classified every task this mission asks you to run, then added up the low and high ends of each band. That's why the estimate is a range rather than a single figure.

| What you run | Classification | Est. credits |
| ------------ | -------------- | ------------ |
| Uploading the skill packages and editing instructions | Build-tab configuration | 0 |
| First device guidance test, before the skill is refined | Light. One SharePoint tool call returning a device list | 100 - 300 |
| Second device guidance test, including the device selection | Medium. Tool call plus a structured selection summary | 300 - 500 |
| Third device guidance test, including the additional requirement | Medium. Tool call plus a summary that carries the extra requirement | 300 - 500 |
| Troubleshooting skill test in step 6.2 | Medium. Four turns of structured, knowledge-grounded diagnosis | 300 - 500 |
| **Total** | | **1,000 - 1,800** |

Where you land inside that range depends on how much work each task turns out to be. Going **over** the top of the range is entirely possible: repeating a test, asking extra follow-up questions, or redoing a lab after a configuration mistake each add another task on top of the ones counted here.

> [!IMPORTANT] Estimates aren't a commitment
> These numbers apply the guide's published bands to the steps in this mission. They aren't measured in your tenant, and both rates and product behavior can change. Use them to decide how much credit capacity to have available before you start, not to predict an invoice. [Mission 09](../09-understanding-licensing/index.md) explains what drives consumption and how to monitor it.

## 📚 Tactical Resources {#tactical-resources}

🔗 [Skills in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/skills-overview)

🔗 [Write effective instructions](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/skills-create#write-effective-skill-instructions)

<analytics-tag section="recruit-nextgen" mission="06-add-skills" />
