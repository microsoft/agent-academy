---
hide: true
preview: true
prev:
  text: Add Tools
  link: /recruit-nextgen/07-add-tools
next:
  text: Publish your agent
  link: /recruit-nextgen/09-publish-your-agent
short-description: Automate a device request with the new Workflows experience and call it from your agent
difficulty: 1
codename: OPERATION AUTOMATION POWERHOUSE
time: 60
tags:
  - automation
  - triggers
products: [copilot-studio, power-automate, outlook, sharepoint]
industries:
  - it
created-date: 2026-06-28
last-edited-date: 2026-06-28

---

# 🚨 Mission 08: Automate with Workflows {#mission-08-automate-with-workflows}

<mission-meta />

> [!NOTE]
> This lab has been rewritten for the **new Copilot Studio experience** (2026-06-28).
> In the new experience, **topics no longer exist** — automations are built in the new
> **Workflows** experience as standalone, reusable workflows that your agent calls as a tool.
> Make sure the **New experience** toggle in the upper-right corner is **on**.

## 🎯 Mission Brief {#mission-brief}

Your agent can converse with users and provide information, but true operational excellence requires it to take action. This mission transforms your conversational agent into an automation powerhouse by equipping it with a **workflow**.

By mission's end, you'll have built an end-to-end device request automation in the new **Workflows** experience that retrieves data from SharePoint, sends a notification email to a manager, and returns a value to your agent — then connected that workflow to your **Contoso IT Concierge Agent** as a tool.

## 🔎 Objectives {#objectives}

In this mission, you'll learn:

1. What the new **Workflows** experience is and how it differs from the classic agent flows you built inside topics
1. How the **workflow designer**, **node palette**, and **triggers** work together
1. How to use connector actions, dynamic content, and expressions to handle data dynamically
1. How to build a complete device request automation and call it from an agent as a tool

## 🤔 What is the new Workflows experience? {#what-is-the-new-workflows-experience}

In the classic experience, automations called **agent flows** were created _inside a topic_ — you added a node to a conversation tree and the flow was tied to that topic. **In the new experience, topics are gone.**

Instead, automations are first-class objects called **workflows**. A workflow is a standalone, reusable, step-by-step automation that lives in its own **Workflows** hub. You build it once on a visual canvas, publish it, and then any agent in your environment can call it as a **tool**.

Think of it this way:

- **Agents** are the smart decision-makers — they understand the user and decide _what_ to do.
- **Workflows** are the reliable executors — they do the same deterministic steps _every_ time.

Unlike the AI-driven agent, a workflow follows the **same path every time** for the same input, which makes it **reliable**, **predictable**, and **rule-based** — exactly what you want for actions like "look up a device and email a manager."

### Why build automations as workflows?

- **Reusable** — build once, attach to many agents. No more copy-pasting flows between topics.
- **Connected** — reach 1,400+ connectors (SharePoint, Outlook, ServiceNow, Salesforce…) or your own custom connector.
- **Tightly integrated** — an agent triggers the workflow as a tool during a conversation and reads its outputs back.
- **All-in-one** — design, test, publish, and monitor workflows in one place inside Copilot Studio. No separate Power Automate license is required, since billing is based on usage inside Copilot Studio.

### 🙋🏽 How is this different to Power Automate cloud flows? {#how-is-this-different-to-power-automate-cloud-flows}

| Use this                       | When you want to                                             |
| :----------------------------- | :----------------------------------------------------------- |
| **Workflows** (Copilot Studio) | Automate tasks an agent invokes during a conversation, use AI actions, and keep everything in Copilot Studio |
| **Power Automate cloud flows** | Automate across apps and services independently of an agent, and share/co-own across teams (requires a Power Automate license) |

## ⚙️ How workflows work {#how-workflows-work}

Every workflow has two ingredients:

1. **A trigger** — the event that starts the workflow. The new designer offers several trigger types:

   | Trigger type                         | Starts the workflow when…                                    |
   | :----------------------------------- | :----------------------------------------------------------- |
   | **Manual**                           | You run it on demand with a button click                     |
   | **Recurrence**                       | A schedule fires                                             |
   | **Connector**                        | An external service raises an event                          |
   | **When a HTTP request is received**  | An HTTP request arrives                                      |
   | **When an agent calls the workflow** | An agent invokes it as a tool — **this is the one we'll use** |

1. **Actions (nodes)** — the steps the workflow runs after the trigger. You add them from the **node palette** on the left of the canvas:

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

The designer is a **visual canvas**. You can zoom, fit-to-view, switch between horizontal/vertical layout, and tidy up nodes. A **Health Center** continuously checks for errors — you must resolve them before you can publish or test. Every save creates a **version** you can restore from **Version history**.

## 🔤 Expressions and functions {#expressions-and-functions}

Many parameters can be set to a static value, to **dynamic content** (an output from the trigger or an earlier action, inserted with the **lightning bolt ⚡** icon), or to an **expression / function** (inserted with the **fx** icon).

Expressions are small formulas that work with your data — much like Excel functions, but referencing workflow data instead of cells. Common ones:

- `concat()` — join text, e.g. `concat('Hello ', firstName)`
- `if()` — `if(condition, valueIfTrue, valueIfFalse)`
- `empty()` — checks whether a value is empty
- `coalesce()` — returns the first non-empty value
- `length()` — counts characters or items

For the full list, see the [functions reference guide](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez).

## ⭐ Best practices {#best-practices}

1. **Start simple and build gradually** — get a basic action working, then add steps.
1. **Rename your nodes** — e.g. rename the SharePoint _Get item_ action to _Get Device_ so the canvas is self-documenting.
1. **Fix errors before publishing** — use the **Health Center**; you can't publish with unresolved errors.
1. **Test thoroughly** — saving and publishing doesn't guarantee correct behavior.
1. **Use version history** — save often so you can roll back.
1. **Use dynamic content and expressions** — make parameters dynamic instead of hard-coding values.

## 🧪 Lab 08 - Build a device request workflow and call it from your agent {#lab-08-build-a-device-request-workflow-and-call-it-from-your-agent}

### ✨ Use case {#use-case}

**As a** manager of an employee

**I want to** receive device requests by email

**So that I** can review the device requested by the employee.

### Prerequisites

1. **SharePoint list** — the **EmployeeAssets** SharePoint list from [Mission 00 - Course Setup](../00-course-setup/index.md#step-5-create-new-sharepoint-site). If you haven't set it up, head back and create it.

1. **Contoso IT Concierge agent** — the agent created in [Mission 05 - Build a custom agent](../05-build-a-custom-agent/index.md#51-create-a-new-agent-with-ai-based-authoring).

### 8.1 Create a new workflow

In the new experience, workflows are added to your agent as a **tool**.

1. In the **Build** view, in the **Tools** section, select the **+** icon.

   ![Add a tool](./assets/8.1_01_AddATool.png)

   > [!TIP]
   > You can also select **Workflows** in the left navigation and choose **New Workflow**. The Workflows hub lists every workflow in your environment along with its status (Draft / Published).
   >
   > ![Workflows hub](./assets/8.1_01_Tip.png)

1. The **Add a tool** dialog loads. Select **+ Add** and select **Workflow**.

   ![Select Workflow](./assets/8.1_02_AddWorkflow.png)

1. The AI-assisted authoring experience opens, similar to the one you used when creating your agent.

   Copy and paste the following prompt into the field.

   ```text
   Agent calls the workflow and passes the text inputs of `sharepointItemId`, `additionalComment`, and `requestorName`. Using the `sharepointItemId` text input from the trigger, get the SharePoint item from the list, extract details of Manufacturer Value, Model, Link to Item, and insert them in an email that is sent to a manager. Then send a response back to the agent with a text output of `ModelValue`.
   ```

   Submit the prompt to have the AI authoring experience build the workflow.

   ![AI authoring experience](./assets/8.1_03_AIAuthoringExperience.png)

1. The AI authoring experience analyses the user's request and determines that additional information is required before it can build the solution.

   Using reasoning, it identifies the missing input parameters and generates clarifying questions to collect them. For each question, the experience can associate an appropriate input control, such as a SharePoint site picker, allowing the maker to select a value rather than manually entering it. Once the required information is provided, the AI can continue building the solution.

   Select your SharePoint site created in the Course Setup.

   ![SharePoint site input parameter](./assets/8.1_04_ProvideSharePointSiteInputParameter.png)

1. Next, it identifies that an email address of the manager is required to send the email. For the purpose of this lab, enter your email address.

   ![Manager email address input parameter](./assets/8.1_05_ProvideManagerInputParameter.png)

1. Lastly, the SharePoint List is needed to retrieve the item details of the device. Select the `EmployeeAssets` list from the picker.

   Select **Submit**.

   ![Select SharePoint list](./assets/8.1_06_ProvideListInputParameter.png)

   > [!WARNING] AI authoring experience may differ across sessions
   >
   > Each session can vary on how the AI authoring experience interacts with you. During **Requesting information**, you may be asked to enter values as text rather than select them from a picker.

1. The AI authoring experience continues with the next step of building the workflow now that it has the information it requires.

   ![Building workflow in progress](./assets/8.1_07_BuildingWorkflowInProgress.png)

1. The AI authoring experience completes building the workflow.

   ![Completed](./assets/8.1_08_WorkflowCompleted.png)

1. Next, the workflows designer automatically loads with the trigger and actions based on the requirements provided in the prompt.

   Let's take a moment to familiarize ourselves with the workflow designer.

   Left:
   - Workflow name and status
   - Panel containing available workflow nodes
   - Canvas display controls

   Center:
   - At the top you can switch views to **Build**, **Activity**, to **Monitor**.
   - Canvas showing the workflow's trigger and actions

   Right:
   - Controls for undo, redo, version history, feedback, saving, testing, reviewing issues, and publishing
   - Configuration panel for the selected node

   ![Workflow loads in the designer](./assets/8.1_09_ReviewWorkflow.png)

1. The AI authoring experience has built the workflow, but a few details still need to be configured. Let's take care of those next. First rename the workflow.

   Copy and paste the following text.

   ```text
   Send device request email
   ```

   ![Rename workflow](./assets/8.1_10_RenameWorkflow.png)

1. Select the trigger, **When an agent calls the flow**.

   You'll see the text inputs configured as per the requirement provided in the prompt.

   - `SharePoint Item Id` - the **ID** of the selected SharePoint device item.
   - `Additional Comments` - an optional comment from the user.
   - `Requestor Name` - the display name of the user making the request.

   Clear the current input names and replace with the following.

   For the first input, copy and paste the following text.

   ```text
   sharepointItemId
   ```

   For the second input, copy and paste the following text.

   ```text
   additionalComment
   ```

   For the third input, copy and paste the following text.

   ```text
   requestorName
   ```

   These input names will be referenced in the skill file in a later lab exercise.

   ![Updated trigger input names](./assets/8.1_11_RenameTriggerInputs.png)

1. Select the **Get item** node. Clear the current action name.

   Copy and paste the following text in the name field.

   ```text
   Get device
   ```

   ![Rename Get item action](./assets/8.1_12_RenameGetItemAction.png)

1. In the **Id** parameter, clear the current dynamic content by selecting the **X** icon.

   > [!TIP] What is dynamic content
   > Dynamic content in workflows is data passed from previous triggers and actions. It lets you reuse values like email subjects, names, or IDs in later steps without writing code.

   ![Remove selected dynamic content](./assets/8.1_13_RemoveSelectedDynamicContent.png)

1. Option 1: Select the lightning bolt icon, then choose a property from the dynamic content modal.

   Option 1 is to select the **thunderbolt** icon and select the dynamic content in the modal that appears, which lists all the properties of the trigger or action.

   ![Option 1](./assets/8.1_14_Option1.png)

1. Option 2: Enter a forward slash, `/`, then choose a property from the list.

   ![Option 2](./assets/8.1_15_Option2.png)

1. Select the **sharepointItemId** property from the trigger. It appears in the **Id** parameter field.

   ![Dynamic Content selected in input parameter](./assets/8.1_16_DynamicContent.png)

1. Next, select the **Send an email (V2)** node and rename the action.

   Copy and paste the following text in the name field.

   ```text
   Send an email to manager
   ```

   ![Rename action](./assets/8.1_17_RenameSendAnEmailAction.png)

1. Update the **Subject** text.

   Copy and paste the following text.

   ```text
   Request type: new device
   ```

   ![Update Subject](./assets/8.1_18_Subject.png)

1. The AI authoring experience generates the content in the **Body** field based on your prompt.

   The first sentence may reference `item`. Copy and paste the following text to replace `item`.

   ```text
   device
   ```

   ![Update sentence in Body](./assets/8.1_19_UpdatedBody.png)

1. Next, update the dynamic content reference for the **View Item**.

   Delete the text `: View Item`.

   Add the **Link to item** dynamic content using either method described earlier.

   ![Insert dynamic content](./assets/8.1_20_InsertDynamicContent.png)

1. The SharePoint item URL will appear as plain text in the email. To make it a clickable hyperlink, the HTML hyperlink tags need to be added. This can be achieved by toggling the Body parameter field to the HTML editor.

   Select the **ellipsis** icon in the editor and select the **HTML** icon.

   ![Toggle to HTML editor view](./assets/8.1_21_ToggleToHTMLView.png)

   > [!NOTE]
   > You can optionally skip these steps and display the link as plain text. The URL will remain visible in the email but won't be clickable.

1. Highlight the **Link to item** dynamic content and **cut** the selected dynamic content text by pressing `Ctrl + X` on your keyboard for Windows. `Command-X` on your keyboard for Mac.

   ![Cut dynamic content](./assets/8.1_22_CutDynamicContent.png)

1. Click before the **Link to item** text and add an HTML anchor tag to create a hyperlink.

   Copy and paste the following text.

   ```text
   <a href="
   ```

   ![HTML tag](./assets/8.1_23_HTMLTag.png)

1. Click after the HTML anchor tag `<a href="` and paste the cut dynamic content.

   ![Paste dynamic content](./assets/8.1_24_PasteDynamicContent.png)

1. Click after the **Link to item** dynamic content.

   Copy and paste the following text.

   ```text
   ">
   ```

1. Click after the **Link to item** text.

   Copy and paste the following text.

   ```text
   </a>
   ```

   This closes the HTML anchor tag which results in the text showing as a clickable hyperlink instead of plain text in the email.

   ![HTML tag](./assets/8.1_26_EnterHTMLTag.png)

1. Select the **eye** icon to toggle the editor view.

   ![Toggle HTML view](./assets/8.1_27_ToggleHTMLView.png)

1. Next, add a sentence to the bottom of the message that indicates that the email was sent by an agent.

   Copy and paste the following text.

   ```text
   This is an automated email from Contoso IT Concierge agent.
   ```

   Highlight the text and select the **Italic** icon to italicize the sentence.

   ![Update body](./assets/8.1_28_UpdateBody.png)

1. Lastly, for the **Sensitivity** input parameter, select the **General\Anyone (unrestricted)** label from the drop-down list.

   > [!TIP] Understanding sensitivity labels in Outlook emails
   > A sensitivity label is a classification that helps protect and manage emails and files according to your organization's information protection policies. It helps users identify sensitive content and apply the appropriate level of protection without impacting collaboration or productivity.

   ![Sensitivity label](./assets/8.1_29_SensitivityLabelParameter.png)

1. Select the **Respond to the agent** node, clear and update the text output name.

   Copy and paste the following text.

   ```text
   ModelValue
   ```

   The dynamic content has already been correctly configured, it references the `Model` property from the **Get item** action. This value from the SharePoint dynamic content will be sent back to the agent to use in its summarized response to the user.

   ![Update Output text name](./assets/8.1_30_UpdateOutputTextName.png)

1. The workflow can now be saved and published. Select the **Save** icon on the upper-right.

   ![Save workflow](./assets/8.1_31_SaveWorkflow.png)

1. When the confirmation displays that the workflow has been saved, select **Publish**.

   ![Publish workflow](./assets/8.1_32_PublishWorkflow.png)

### 8.2 Add the workflow to your agent

You can now add the workflow to your **Contoso IT Concierge** agent.

1. Select **Agents** in the left menu navigation and open the **Contoso IT Concierge** agent.

   ![Open agent](./assets/8.2_01_OpenAgent.png)

1. In the **Build** view, in the **Tools** section, select the **+** icon.

   ![Add a tool](./assets/8.2_02_SelectAddATool.png)

1. The **Add a tool** dialog loads. Select the **Workflows** pill and select the **Send device request email** workflow.

   ![Select workflow](./assets/8.2_03_SelectWorkflow.png)

The workflow has now been added to the agent 👍🏻

### 8.3 Update device request procedure skill

With the workflow added, update the device request procedure skill so the agent knows when and how to call it.

1. Select the **device request procedure** skill.

   ![Select skill](./assets/8.3_01_ReplaceSkill.png)

1. Select the **ellipsis** icon and select **Replace**.

   Download the skill package using the button below.

   <download-files path="recruit-nextgen/08-automate-with-workflows/assets/device-guidance-v1-0-4" />

    Download `device-guidance-v1-0-4.zip`, extract it, then upload the `SKILL.md` file into the agent.

1. Review the updated skill instructions.

   The updated skill instructs the agent to:

   - confirm that the user wants to proceed after collecting any additional requirements

   ![Confirmation request instruction](./assets/8.3_02_ReviewSkillInstructions.png)

   - retrieve the authenticated user's details

   ![Retrieve user's details](./assets/8.3_03_ReviewSkillInstructions.png)

   - pass the device's SharePoint item ID, the additional requirements, and the user's name to the workflow

   ![pass request details](./assets/8.3_04_ReviewSkillInstructions.png)

   - confirm completion by referencing the device model returned by the workflow and end the session

   ![Confirmation message and end session](./assets/8.3_05_ReviewSkillInstructions.png)

The agent can now be tested end-to-end.

### 8.4 Test several scenarios

You're now going to run through the following test cases:

- Test Case 1: User selects a device and provides additional requirements
- Test Case 2: User selects a device and provides no additional requirements
- Test Case 3: User does not proceed with selecting a device

1. Select **Preview** and start a new chat.

1. Copy and paste the following text and submit it to the agent.

   ```text
   I need a new laptop
   ```

1. The agent will next ask which device you want to request.

   Copy and paste the following text and submit it to the agent.

   ```text
   A
   ```

1. Next, for the additional requirement, copy and paste the following text and submit it to the agent (or type your own requirement).

   ```text
   16GB of RAM
   ```

1. You'll then see the agent ask if you want to proceed with the request after it summarizes the request. This is from the updated instructions in the skill.

   Copy and paste the following text and submit it to the agent.

   ```text
   Yes please proceed
   ```

   ![Proceed with request](./assets/8.4_01_TestCase1.png)

1. The agent invokes the workflow. When it completes successfully, the agent confirms the request, includes the selected device model, explains that the manager will review it, and ends the session. This behavior follows the updated skill instructions.

   ![Test Case 1 summarized response](./assets/8.4_02_TestCase1SummarizedResponse.png)

1. Review the email sent to your address. Its subject, sensitivity label, and body should match the values configured earlier in the workflow’s **Send an email (V2)** action. The email body should also display the dynamic content values retrieved from the trigger and the **Get item** action.

   ![Test Case 1 email](./assets/8.4_03_TestCase1Email.png)

1. Click the **Link to Item** hyperlink. The SharePoint List item will load in a new browser tab. Cool!

   ![SharePoint List item](./assets/8.4_04_TestCase1Device.png)

1. In **Preview**, proceed with the next test case of providing no additional requirements.

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

   ![Test Case 2](./assets/8.4_05_TestCase2.png)

1. The agent invokes the workflow and summarizes your request, just as it did in the first test case.

   ![Test Case 2 summarized response](./assets/8.4_06_TestCase2SummarizedResponse.png)

1. Check the email and this time, you'll see the text for the **Additional Comment** as `No additional requirements provided` which is the expected behavior from the updated skill instructions.

   ![Review test case 2 email](./assets/8.4_07_TestCase2Email.png)

1. For the last test case, start a new chat in **Preview**. Copy and paste the following text and submit it to the agent.

   ```text
   I need a new laptop
   ```

   Next, copy and paste the following text for the device request and submit it to the agent.

   ```text
   B
   ```

   This time, you're not going to proceed with the request. Copy and paste the following text and submit it to the agent.

   ```text
   Cancel request, do not proceed.
   ```

   The agent cancels the request and ends the session, as defined in the updated skill instructions.

   ![Test Case 3](./assets/8.4_08_TestCase3.png)

## ✅ Mission Complete {#mission-complete}

Congratulations! 👏🏻 You've built an end-to-end device request automation in the **new Workflows experience**:

- Created a workflow that retrieves device details from SharePoint, composes an email with dynamic content, and sends it to a manager.
- Connected the workflow to your agent as a reusable tool.
- Updated your skill to call the workflow and pass user inputs.
- Tested three scenarios: with requirements, without requirements, and cancellation.

Your agent can now take action - reaching into line-of-business systems and triggering automations without needing to hand off to a human.

⏭️ [Move to **Publish your agent** lesson](../09-publish-your-agent/index.md)

## 📚 Tactical Resources {#tactical-resources}

🔗 [Introducing agent flows: Transforming automation with AI-first workflows](https://www.microsoft.com/microsoft-copilot/blog/copilot-studio/introducing-agent-flows-transforming-automation-with-ai-first-workflows/)

🔗 [Agent flows overview](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview?WT.mc_id=power-172621-ebenitez)

🔗 [Use workflows with your agent](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-172621-ebenitez)

🔗 [List of functions in the reference guide](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez)

🔗 [Data loss prevention for Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention?WT.mc_id=power-177340-scottdurow)

<analytics-tag section="recruit" mission="08-automate-with-workflows" />
