---
hide: false
preview: false
prev:
   text: Add Skills
   link: /recruit-nextgen/06-add-skills
next:
  text: Publish your agent
  link: /recruit-nextgen/08-publish-your-agent
short-description: Automate a device request with a workflow and call it from your GitHub Copilot harness agent
difficulty: 1
codename: OPERATION AUTOMATION POWERHOUSE
time: 60
harness: github-copilot
credits: [700, 1300]
tags:
  - automation
  - triggers
products: [copilot-studio, power-automate, outlook, sharepoint]
industries:
  - it
created-date: 2026-08-05
last-edited-date: 2026-08-24

---

# 🚨 Mission 07: Automate with Workflows {#mission-07-automate-with-workflows}

<mission-meta />

<mission-credits />

> [!NOTE]
> This lab uses an agent and workflows powered by the **GitHub Copilot harness**.
> On this harness, workflows are standalone, reusable automations that an agent can call as a tool.
> In the current Copilot Studio UI, make sure the **New experience** toggle in the upper-right corner is **on**.

## 🎯 Mission Brief {#mission-brief}

Your agent can converse with users and provide information, but it needs a workflow to take action. In this mission, you'll build a device request workflow that your agent can call as a tool.

You'll configure trigger inputs, retrieve device details from SharePoint, send an email to a manager, and return the selected device model to the agent. You'll then connect the workflow to your **Contoso IT Concierge** agent, update its device request procedure skill, and test the experience from end to end.

This mission separates judgment from execution. The agent and its skill can interpret an employee's request, gather missing information, and decide when the process is ready. The workflow then performs the repeatable steps in a defined order. That division keeps conversational reasoning flexible while making the business transaction predictable and easier to test.

You'll also define the contract between the agent and the workflow. Trigger inputs carry the request into the automation, dynamic content passes values between actions, and response outputs return useful results to the conversation. Clear names and data types help the harness call the workflow correctly.

By the end, the device request scenario will connect reasoning, SharePoint data, procedural guidance, and deterministic automation in one experience. You'll validate successful requests, requests with additional requirements, and cancellation so the agent handles more than the ideal path.

> [!INFO] The architecture coming together
> This is where the reason for using the GitHub Copilot harness becomes most visible. The agent uses flexible reasoning to interpret the request, a skill to guide its behavior, a tool to retrieve current information, and a workflow to execute the transaction predictably. The agent decides **what** needs to happen; the workflow controls **how** the business action is completed.

## 🔎 Objectives {#objectives}

In this mission, you'll learn:

1. What **Workflows** are on the GitHub Copilot harness and how they differ from agent flows on the standard harness
1. How to configure workflow trigger inputs and response outputs
1. How to add and configure SharePoint and Outlook connector actions
1. How to pass values between workflow nodes by using dynamic content
1. How to publish a workflow, add it to an agent as a tool, and test it end to end



## 🤔 What are Workflows? {#what-are-workflows}

On the standard harness, **agent flows** can support topic-based, structured agent behavior. The GitHub Copilot harness instead uses standalone **workflows** for deterministic automation.

Instead, automations are first-class objects called **workflows**. A workflow is a standalone, reusable, step-by-step automation that lives in its own **Workflows** hub. You build it once on a visual canvas, publish it, and then any agent in your environment can call it as a **tool**.

Think of it this way:

- **Agents** are the smart decision-makers - they understand the user and decide _what_ to do.
- **Workflows** are the reliable executors - they do the same deterministic steps _every_ time.

Unlike the AI-driven agent, a workflow follows the **same path every time** for the same input, which makes it **reliable**, **predictable**, and **rule-based** - exactly what you want for actions like "look up a device and email a manager."

### Why build automations as workflows?

- **Reusable** - build once, attach to many agents. No more copy-pasting flows between topics.
- **Connected** - reach 1,400+ connectors (SharePoint, Outlook, ServiceNow, Salesforce…) or your own custom connector.
- **Tightly integrated** - an agent triggers the workflow as a tool during a conversation and reads its outputs back.
- **All-in-one** - design, test, publish, and monitor workflows in one place inside Copilot Studio. No separate Power Automate license is required, since billing is based on usage inside Copilot Studio.

### 🙋🏽 How is this different to Power Automate cloud flows? {#how-is-this-different-to-power-automate-cloud-flows}

| Use this                       | When you want to                                             |
| :----------------------------- | :----------------------------------------------------------- |
| **Workflows** (Copilot Studio) | Automate tasks an agent invokes during a conversation, use AI actions, and keep everything in Copilot Studio |
| **Power Automate cloud flows** | Automate across apps and services independently of an agent, and share/co-own across teams (requires a Power Automate license) |

## ⚙️ How workflows work {#how-workflows-work}

Every workflow has two ingredients:

1. **A trigger** - the event that starts the workflow. The new designer offers several trigger types:

   | Trigger type                         | Starts the workflow when…                                    |
   | :----------------------------------- | :----------------------------------------------------------- |
   | **Manual**                           | You run it on demand with a button click                     |
   | **Recurrence**                       | A schedule fires                                             |
   | **Connector**                        | An external service raises an event                          |
   | **When a HTTP request is received**  | An HTTP request arrives                                      |
   | **When an agent calls the workflow** | An agent invokes it as a tool - **this is the one we'll use** |

1. **Actions (nodes)** - the steps the workflow runs after the trigger. You add them from the **node palette** on the left of the canvas:

   | Node             | What it does                                                 |
   | :--------------- | :----------------------------------------------------------- |
   | **Agent**        | Hand work to an agent                                        |
   | **Classify**     | Categorize input with AI                                     |
   | **M365 Copilot** | Call Microsoft 365 Copilot                                   |
   | **Human review** | Add an approval / review step                                |
   | **Connector**    | Run an action from any of 1,400+ connectors (e.g., SharePoint, Outlook) |
   | **Function**     | Transform data with an expression                            |
   | **Variable**     | Store and reuse values                                       |
   | **If/Else**      | Branch on a condition                                        |
   | **Loop**         | Repeat over a collection                                     |
   | **Note**         | Document your workflow                                       |

### 🎨 The workflow designer

The designer is a **visual canvas**. You can zoom, fit-to-view, switch between horizontal/vertical layout, and tidy up nodes. A **Health Center** continuously checks for errors - you must resolve them before you can publish or test. Every save creates a **version** you can restore from **Version history**.

## 🔤 Expressions and functions {#expressions-and-functions}

Many parameters can be set to a static value, to **dynamic content** (an output from the trigger or an earlier action, inserted with the **lightning bolt ⚡** icon), or to an **expression / function** (inserted with the **fx** icon).

Expressions are small formulas that work with your data - much like Excel functions, but referencing workflow data instead of cells. Common ones:

- `concat()` - join text, e.g. `concat('Hello ', firstName)`
- `if()` - `if(condition, valueIfTrue, valueIfFalse)`
- `empty()` - checks whether a value is empty
- `coalesce()` - returns the first non-empty value
- `length()` - counts characters or items

For the full list, see the [functions reference guide](https://learn.microsoft.com/en-us/azure/logic-apps/expression-functions-reference).

## ⭐ Best practices {#best-practices}

1. **Start simple and build gradually** - get a basic action working, then add steps.
1. **Rename your nodes** - e.g. rename the SharePoint _Get item_ action to _Get Device_ so the canvas is self-documenting.
1. **Fix errors before publishing** - use the **Health Center**; you can't publish with unresolved errors.
1. **Test thoroughly** - saving and publishing doesn't guarantee correct behavior.
1. **Use version history** - save often so you can roll back.
1. **Use dynamic content and expressions** - make parameters dynamic instead of hard-coding values.

## 🧪 Lab 07 - Build a device request workflow and call it from your agent {#lab-07-build-a-device-request-workflow-and-call-it-from-your-agent}

### ✨ Use case {#use-case}

**As a** manager of an employee

**I want to** receive device requests by email

**So that I** can review the device requested by the employee.

### Prerequisites

1. **SharePoint list** - the **EmployeeAssets** SharePoint list from [Mission 00 - Course Setup](../00-course-setup/index.md#step-5-create-new-sharepoint-site). If you haven't set it up, head back and create it.

1. **Contoso IT Concierge agent** - the agent created in [Mission 04 - Build an agent with the GitHub Copilot harness](../04-build-a-custom-agent/index.md#lab-04-create-an-agent-with-the-github-copilot-harness).

### 7.1 Create a new workflow

On the GitHub Copilot harness, workflows are added to your agent as a **tool**.

1. In the left navigation, select **Workflows**, then select **Create your first workflow** or select **New workflow**.

   ![Select a new workflow in Copilot Studio](./assets/07-select-a-new-workflow-in-copilot-studio.png)

   > [!TIP]
   > The Workflows hub lists every workflow in your environment along with its status (Draft / Published).

1. Next, the workflow designer loads. Let's take a moment to familiarize ourselves with the workflow designer.

   Left:
   - Workflow name and status
   - Panel containing available workflow nodes
   - Canvas controls for zooming in, zooming out, and adjusting the view

   Center:
   - At the top, you can switch between **Build**, **Activity**, and **Monitor**
   - Canvas showing the workflow's trigger and action nodes

   Right:
   - Controls for undo, redo, version history, feedback, saving, testing, reviewing issues, and publishing
   - Configuration panel for the selected node

   ![Workflow loads in the designer](./assets/07-workflow-loads-in-the-designer.png)

1. Now that you're familiar with the designer, rename the workflow.

   Copy and paste the following text.

   ```text
   Send device request email
   ```

   ![Rename the device request workflow](./assets/07-rename-the-device-request-workflow.png)

1. In the **Start** trigger node, change the type from **Manual** to **When an agent calls the workflow**.

   The **Respond to the agent** node appears.

   > [!NOTE]
   > The **Respond to the agent** node acts as the return statement of an agent workflow. It sends workflow outputs back to the calling agent so the agent can continue the conversation or make decisions based on the result.

   ![Change the workflow trigger input type](./assets/07-change-the-workflow-trigger-input-type.png)

1. Next, add three `text` inputs to the workflow trigger:

   - `sharepointItemId` - stores the SharePoint item ID mapped from the device the user selected and confirmed during the device request procedure.

   - `additionalComment` - stores the comment provided by the user during the device request procedure.

   - `requestorName` - stores the authenticated user's name, retrieved according to the device request procedure skill.

   Start with `sharepointItemId`.

   For the first input, clear the current input name and replace with the following text.

   ```text
   sharepointItemId
   ```

1. In the corresponding details field, copy and paste the following text.

   ```text
   The ID of the SharePoint list item to retrieve
   ```

1. Add a new text input. Copy and paste the following text as the input name.

   ```text
   additionalComment
   ```

1. In the corresponding details field, copy and paste the following text.

   ```text
   Additional comment from the requestor
   ```

1. Add a new text input. Copy and paste the following text as the input name.

   ```text
   requestorName
   ```

1. In the corresponding details field, copy and paste the following text.

   ```text
   Name of the requestor
   ```

   These inputs will be used as dynamic content in the workflow's action nodes and referenced in the `SKILL.md` file later in this lab.

   ![Configure text inputs on workflow trigger](./assets/07-configure-text-inputs-on-workflow-trigger.png)

1. Next, add a step to the workflow. Select the **+** icon between the nodes.

   ![Add a new workflow action step](./assets/07-add-a-new-workflow-action-step.png)

1. The **Add** dialog opens. It contains actions that perform tasks in the workflow, including actions from more than 1,400 connectors for Microsoft and third-party services.

   In the **search field**, enter the following.

   ```text
   Get item
   ```

   Select the **Get item** action from the **SharePoint** connector in the search results.

   ![Select SharePoint Get item action](./assets/07-select-sharepoint-get-item-action.png)

1. Configure the **Get item** action. In the action's name field, enter the following text.

   ```text
   Get Device
   ```

1. In the **Site Address** field, select the Contoso IT SharePoint site created in [Mission 00 - Course Setup](../00-course-setup/index.md#step-5-create-new-sharepoint-site).

1. In the **List Name** field, select the **EmployeeAssets** SharePoint list.

   ![Configure the SharePoint Get item action](./assets/07-configure-the-sharepoint-get-item-action.png)

1. In the **Id** parameter field, we'll add dynamic content.

   > [!TIP] What is dynamic content
   > Dynamic content in workflows is data passed from previous triggers and actions. It lets you reuse values like email subjects, names, or IDs in later steps without writing code.

1. Add dynamic content by using one of the following options.

   - Option 1: Select the **lightning bolt** icon, then select a property from the dynamic content dialog.

   - Option 2: Enter a forward slash, `/`, then select a property from the list.

   Select the **sharepointItemId** property from the trigger. It appears in the **Id** parameter field.

1. Select **Show all** to view the advanced parameters. For **Limit Columns by View**, select **All Items** to limit the returned columns to those included in that SharePoint view.

   ![Update Limit Columns by View](./assets/07-update-limit-columns-by-view.png)

1. Add another node. Select the **+** icon between the **Get Device** and **Respond to the agent** nodes.

   ![Add another action to the workflow](./assets/07-add-another-action-to-the-workflow.png)

1. In the **search field**, enter the following.

   ```text
   send an email
   ```

   Select the **Send an email** action from the **Office 365 Outlook** connector.

   ![Select Send an email action](./assets/07-select-send-an-email-action.png)

1. In the action's name field, enter the following text.

   ```text
   Send an email to manager
   ```

   ![Rename the Send an email action](./assets/07-rename-the-send-an-email-action.png)

1. For **Connection**, select **Create new connection**, then follow the prompts in the dialog.

   ![Create a new Outlook connection](./assets/07-create-a-new-outlook-connection.png)

1. Configure the action's input parameters.

   For **To**, select your own email address.

   > [!NOTE]
   > In a production workflow, you could use the requestor's manager or retrieve the manager from their Microsoft Entra ID profile. For the purpose of this lab, use your own email address.

   For **Subject**, enter the following text.

   ```text
   Request type: new device
   ```

   ![Configure Send an email input parameters](./assets/07-configure-send-an-email-input-parameters.png)

1. For **Body**, enter the following text.

    ```text
    Hi,

    New device requested from

    Manufacturer:
    Model:
    Link to item in SharePoint
    Additional comment:

    This is an automated email from Contoso IT Concierge agent
    ```

   ![Configure the email body input parameter](./assets/07-configure-the-email-body-input-parameter.png)

1. Next, add dynamic content from the trigger and **Get Device** action to the email body. Enter a space after `New device requested from`.

   Add the **requestorName** property from the trigger after the space.

   ![Insert requestorName dynamic content token](./assets/07-insert-requestorname-dynamic-content-token.png)

   The email body now references dynamic content from the trigger. Repeat this process for the remaining fields.

1. Place the cursor after `Manufacturer:` and enter a space.

   Add the **Value** property for the **Manufacturer** object property from the **Get item** SharePoint action after the space.

   ![Insert Manufacturer value dynamic content token](./assets/07-insert-manufacturer-value-dynamic-content-token.png)

1. Place the cursor after `Model:` and enter a space.

   Add the **Model** property from the **Get item** SharePoint action after the space.

   ![Insert Model dynamic content token](./assets/07-insert-model-dynamic-content-token.png)

1. Place the cursor after `Link to item in SharePoint` and enter a space.

   Add the **Link to item** property from the **Get item** SharePoint action after the space.

   ![Link to item dynamic content](./assets/07-link-to-item-dynamic-content.png)

1. Place the cursor after `Additional comment:` and enter a space.

   Add the **additionalComment** property from the **trigger** after the space.

   ![Insert additional comment dynamic content token](./assets/07-insert-additional-comment-dynamic-content-token.png)

1. Highlight the text in the last sentence and select the **Italic** icon to italicize the sentence.

   ![Italicize the final email sentence](./assets/07-italicize-the-final-email-sentence.png)

1. The **Link to item** URL appears as plain text in the email. To make it a clickable hyperlink, switch the **Body** field to the HTML editor and add HTML anchor tags.

   Select the **ellipsis** icon in the editor and select the **HTML** icon.

   ![Toggle to HTML editor view](./assets/07-toggle-to-html-editor-view.png)

   > [!NOTE]
   > You can optionally skip these steps and display the link as plain text. The URL will remain visible in the email but won't be clickable.

1. Highlight the **Link to item** dynamic content and cut it by pressing `Ctrl + X` on Windows or `Command + X` on macOS.

   ![Cut the selected dynamic content token](./assets/07-cut-the-selected-dynamic-content-token.png)

1. Place the cursor before the **Link to item** text and add an HTML anchor tag.

   Copy and paste the following text.

   ```text
   <a href="
   ```

   ![Add HTML paragraph tag around content](./assets/07-add-html-paragraph-tag-around-content.png)

1. Place the cursor after the HTML anchor tag, `<a href="`, and paste the dynamic content.

   ![Paste dynamic content inside HTML tags](./assets/07-paste-dynamic-content-inside-html-tags.png)

1. Place the cursor after the **Link to item** dynamic content.

   Copy and paste the following text.

   ```text
   ">
   ```

   ![Add HTML emphasis tag around content](./assets/07-add-html-emphasis-tag-around-content.png)

1. Place the cursor after the **Link to item** text.

   Copy and paste the following text.

   ```text
   </a>
   ```

   This closes the HTML anchor tag, making the text a clickable hyperlink in the email.

   ![Close HTML emphasis tag around content](./assets/07-close-html-emphasis-tag-around-content.png)

1. Select the **eye** icon to toggle the editor view.

   ![Return to the visual email editor](./assets/07-return-to-the-visual-email-editor.png)

1. Lastly, for the **Sensitivity** input parameter, select the **General\All Employees (unrestricted)** label from the drop-down list.

   > [!TIP] Understanding sensitivity labels in Outlook emails
   > A sensitivity label is a classification that helps protect and manage emails and files according to your organization's information protection policies. It helps users identify sensitive content and apply the appropriate level of protection without impacting collaboration or productivity.

   ![Configure the email sensitivity label](./assets/07-configure-the-email-sensitivity-label.png)

1. Select the **Respond to the agent** node. Clear the current text output name and enter the following text.

   Copy and paste the following text.

   ```text
   ModelValue
   ```

1. In the details field, add the **Model** property from the **Get Device** action.

   This value from the SharePoint dynamic content will be sent back to the agent to use in its summarized response to the user.

   ![Configure the workflow text output](./assets/07-configure-the-workflow-text-output.png)

1. The workflow can now be saved and published. Select the **Save** icon on the upper-right.

   ![Save the configured device request workflow](./assets/07-save-the-configured-device-request-workflow.png)

1. When the confirmation displays that the workflow has been saved, select **Publish**.

   ![Publish the device request workflow](./assets/07-publish-the-device-request-workflow.png)

1. The workflow will now display a status of **Published**.

   ![Confirm the device request workflow is published](./assets/07-confirm-the-device-request-workflow-is-published.png)

You've created and published your first workflow. Next, add it to the agent as a tool.

### 7.2 Add the workflow to your agent

You can now add the workflow to your **Contoso IT Concierge** agent.

1. In the left navigation, select **Agents**, then open the **Contoso IT Concierge** agent.

   ![Open the Contoso IT Concierge agent](./assets/07-open-the-contoso-it-concierge-agent.png)

1. In the **Build** view, in the **Tools** section, select the **+** icon.

   ![Add a new tool to agent](./assets/07-add-a-new-tool-to-agent.png)

1. The **Add a tool** dialog loads. Select the **Workflows** pill and select the **Send device request email** workflow.

   ![Select the device request workflow](./assets/07-select-the-device-request-workflow.png)

The workflow is now available to the agent as a tool.

### 7.3 Update device request procedure skill and agent instructions

With the workflow added, update the device request skill and agent instructions to define when and how the agent should invoke it.

1. Select the **device-guidance-v1-0-3** skill.

   ![Select the device-guidance-v1-0-3 skill](./assets/07-select-the-device-guidance-v1-0-3-skill.png)

1. Select the **ellipsis** icon and select **Replace**.

   ![Replace the existing device guidance skill](./assets/07-replace-the-existing-device-guidance-skill.png)

1. Download the skill package using the button below.

   <download-files path="recruit-nextgen/07-automate-with-workflows/assets/device-guidance-v1-0-4" />

   Download `device-guidance-v1-0-4.zip`, extract it, then upload the `SKILL.md` file to the agent.

1. Review the updated skill instructions.

   The updated skill instructs the agent to:

   - confirm that the user wants to proceed after collecting any additional requirements

   ![Review the request confirmation instruction](./assets/07-review-the-request-confirmation-instruction.png)

   - retrieve the authenticated user's details

   ![Review instructions for retrieving user details](./assets/07-review-instructions-for-retrieving-user-details.png)

   - pass the device's SharePoint item ID, the additional requirements, and the user's name to the workflow

   ![Review instructions for passing request details](./assets/07-review-instructions-for-passing-request-details.png)

   - confirm completion by referencing the device model returned by the workflow and end the session

   ![Confirmation message and end session](./assets/07-confirmation-message-and-end-session.png)

1. Next, update the agent instructions to reference the updated skill. Replace the bullet point under the `For device requests:` heading with the following text.

    ```text
    Refer to the `device-guidance-v1-0-4` skill
    ```

    **Save** the agent.

    ![Update agent instructions and save](./assets/07-instructions-updated-and-save-agent.png)

The agent and workflow are now ready for end-to-end testing.

### 7.4 Test several scenarios

You're now going to run through the following test cases:

- Test Case 1: User selects a device and provides additional requirements
- Test Case 2: User selects a device and provides no additional requirements
- Test Case 3: User does not proceed with selecting a device

1. Select **Preview** and start a new chat.

1. Copy and paste the following text and submit it to the agent.

   ```text
   I need a new laptop
   ```

1. When the agent asks which device you want to request, enter the following text.

   Copy and paste the following text and submit it to the agent.

   ```text
   A
   ```

1. When the agent asks for additional requirements, enter the following text or provide your own requirement.

   ```text
   16GB of RAM
   ```

1. After the agent summarizes the request and asks for confirmation, enter the following text.

   Copy and paste the following text and submit it to the agent.

   ```text
   Yes please proceed
   ```

   ![Confirm user wants to proceed with request](./assets/07-confirm-user-wants-to-proceed-with-request.png)

1. The agent invokes the workflow. When it completes successfully, the agent confirms the request, includes the selected device model, explains that the manager will review it, and ends the session. This behavior follows the updated skill instructions.

   ![Test Case 1 summarized response](./assets/07-test-case-1-summarized-response.png)

1. Review the email sent to your address. Its subject, sensitivity label, and body should match the values configured earlier in the workflow’s **Send an email (V2)** action. The email body should also display the dynamic content values retrieved from the trigger and the **Get item** action.

   ![Review email generated for test case one](./assets/07-review-email-generated-for-test-case-one.png)

1. Select the **Link to Item** hyperlink. The SharePoint list item opens in a new browser tab.

   ![Review selected device in SharePoint list](./assets/07-review-selected-device-in-sharepoint-list.png)

1. In **Preview**, start a new chat to test a request with no additional requirements.

   Start a new chat. Copy and paste the following text and submit it to the agent.

   ```text
   I need a new laptop
   ```

   Next, copy and paste the following text for the device request and submit it to the agent.

   ```text
   B
   ```

   Copy and paste the following text and submit it to the agent for additional requirements.

   ```text
   None
   ```

   ![Submit device request test case two](./assets/07-submit-device-request-test-case-two.png)

1. The agent invokes the workflow and summarizes your request, just as it did in the first test case.

   ![Test Case 2 summarized response](./assets/07-test-case-2-summarized-response.png)

1. Review the email. **Additional Comment** displays `No additional requirements provided`, as defined in the updated skill instructions.

   ![Review test case 2 email](./assets/07-review-test-case-2-email.png)

1. For the final test case, start a new chat in **Preview**. Enter the following text.

   ```text
   I need a new laptop
   ```

   Next, copy and paste the following text for the device request and submit it to the agent.

   ```text
   B
   ```

   This time, cancel the request by entering the following text.

   ```text
   Cancel request, do not proceed.
   ```

   The agent cancels the request and ends the session, as defined in the updated skill instructions.

   ![Submit device request cancellation test case](./assets/07-submit-device-request-cancellation-test-case.png)

## ✅ Mission Complete {#mission-complete}

Mission accomplished, Recruit! You created and published a device request workflow that retrieves device details from SharePoint, sends an email with dynamic content, and returns the selected device model to your agent.

You can now:

✅ **Create and publish a workflow**: Build a repeatable device request process with SharePoint and email actions.

✅ **Return workflow results to an agent**: Pass the selected device model back to the calling agent.

✅ **Add a workflow as a tool**: Make deterministic automation available to the agent's orchestrator.

✅ **Test workflow paths**: Validate requests with additional requirements, without additional requirements, and with cancellation.

⏭️ [Move to **Publish your agent** mission](../08-publish-your-agent/index.md)

## 🪙 Copilot Credits Estimate {#copilot-credits-estimate}

The **700 - 1,300 credits** shown at the top of this mission is a planning estimate, not a bill. Here's where the range comes from.

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
| Building the workflow in the designer and adding it as a tool | Build-tab configuration | 0 |
| Test one: device request with additional requirements | Medium. Runs the workflow, reads SharePoint, and sends an email | 300 - 500 |
| Test two: device request with no additional requirements | Medium. Same workflow path, different branch | 300 - 500 |
| Test three: cancelling the request | Light. The agent ends the session without running the workflow | 100 - 300 |
| **Total** | | **700 - 1,300** |

Where you land inside that range depends on how much work each task turns out to be. Going **over** the top of the range is entirely possible: repeating a test, asking extra follow-up questions, or redoing a lab after a configuration mistake each add another task on top of the ones counted here.

> [!IMPORTANT] Estimates aren't a commitment
> These numbers apply the guide's published bands to the steps in this mission. They aren't measured in your tenant, and both rates and product behavior can change. Use them to decide how much credit capacity to have available before you start, not to predict an invoice. [Mission 09](../09-understanding-licensing/index.md) explains what drives consumption and how to monitor it.

## 📚 Tactical Resources {#tactical-resources}

🔗 [Workflows overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/workflows-experience/flows-overview)

🔗 [Add a workflow as a tool to an agent](https://learn.microsoft.com/en-us/microsoft-copilot-studio/workflows-experience/flow-agent)

🔗 [List of functions in the reference guide](https://learn.microsoft.com/en-us/azure/logic-apps/expression-functions-reference)

<analytics-tag section="recruit-nextgen" mission="07-automate-with-workflows" />
