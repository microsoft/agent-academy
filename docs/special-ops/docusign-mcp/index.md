---
tags:
    - mcp
    - Docusign
difficulty: 2
time: 90
harness: github-copilot
description: >-
    Build a Copilot Studio agent that connects to the Docusign MCP Demo server to
    trigger Workflow Builder agreement automation.
badge: ../assets/Academy-Docusign_Badge.png
products: [copilot-studio, docusign, power-platform, sharepoint]
industries:
    - hr
created-date: 2026-06-16
last-edited-date: 2026-08-10
---
# 📄 Microsoft Copilot Studio + Docusign MCP {#mcs-docusign-mcp}

<mission-meta />

<!-- markdownlint-disable-next-line MD033 -->
<p align="center"><img src="../assets/Academy-Docusign_Badge.png" alt="Docusign MCP Badge" width="220" /></p>

Welcome, agent. Your objective is to reuse what already works: connect the Docusign MCP Demo server to your Copilot Studio agent and trigger an existing Workflow Builder workflow. Your agent gathers inputs. Workflow Builder executes the agreement process.

> [!IMPORTANT] This mission uses the GitHub Copilot harness
> The Copilot Studio steps require an agent powered by the **GitHub Copilot harness**. Turn on **New Experience** before you create the agent.

## 🎯 Mission objectives {#mcs-docusign-mcp-objectives}

In this mission, you'll learn:

- how to create Docusign Web Forms, Document Templates, and a workflow in Workflow Builder
- how to add the Docusign MCP Demo tool to your agent
- how to invoke the Workflow Builder workflow from the agent
- how to provide inputs in natural language for the workflow start step when testing the agent
- _bonus_: add a first-party Microsoft MCP tool (Work IQ Calendar) to extend the agent with multi-MCP capabilities

## ❓ What is Docusign? {#what-is-docusign}

[Docusign](https://www.docusign.com) is your agreement execution engine.

It enables organizations to create, send, sign, and manage agreements digitally, reducing manual and paper-based work. Beyond eSignatures, Docusign is an [Intelligent Agreement Management (IAM) platform](https://www.docusign.com/intelligent-agreement-management) that supports the full agreement lifecycle from creation to tracking and storage.

### 💼 Why it matters {#why-it-matters}

Agreements are business-critical, but manual handling causes delays and inconsistency. Docusign makes agreement processes faster, trackable, and scalable.

## 🏗️ What is Docusign Workflow Builder? {#what-is-docusign-workflow-builder}

Workflow Builder is where agreements become automated workflows.

It defines how agreements move from data collection to document generation and signing, without manual coordination. You design a workflow once and run it consistently.

### 💡 Common use cases {#common-use-cases}

- Employee onboarding
- Sales agreements
- Procurement approvals
- NDAs and compliance workflows

### ⚙️ What Workflow Builder does {#what-workflow-builder-does}

Workflow Builder helps you automate agreement processes by:

- Structuring multi-step workflows
- Collecting inputs through web forms
- Generating agreements from templates and data
- Routing documents between participants in the right order
- Connecting to third-party applications and services
- Providing visibility into workflow progress

### 🧩 Key Workflow Builder capabilities {#key-workflow-builder-capabilities}

#### Identity Verification
Confirm signer identity before agreement completion, adding security for sensitive or regulated processes.

#### Web Forms
Collect structured browser-based input before agreement generation. Captured data can automatically populate documents.

#### Document Generation
Automatically generate agreements and documents using collected data and reusable templates.

#### eSignature
Enable legally recognized electronic signatures directly in workflows.

#### App Center
Connect Workflow Builder to third-party apps and services to integrate into existing business processes.

#### Workflow Templates
Use pre-built templates for common scenarios to deploy standardized agreement flows faster.

#### Agreement Desk
Centralize agreement preparation, review, and collaboration across teams.

### 🚀 How this works with your agent {#how-this-works-with-your-agent}

Your Copilot Studio agent _does not_ replace the workflow — it triggers it. You're not reinventing the wheel or rebuilding agreement logic from scratch; you're reusing a workflow that's already built in Docusign. The agent collects inputs in natural language, then Workflow Builder runs the agreement process end-to-end.

## 🛡️ Certified MCP spotlight: Docusign MCP Demo {#certified-mcp-docusign-mcp-demo}

Before we jump into the lab, here's the key intel: the Docusign MCP Demo server is supported in Copilot Studio and is published as a certified MCP integration in Microsoft's connector ecosystem.

Why this matters for your mission:

- **Enterprise trust signal**: Certified MCP servers go through Microsoft validation and review stages before broad availability.
- **Security and compliance alignment**: Certification includes checks for packaging quality, behavior validation, and security/compliance readiness.
- **Responsible AI expectations**: Certification review includes safety evaluation, but safe usage in your tenant still depends on good implementation choices.

In practical terms, this means you're not wiring up an unknown endpoint. You're integrating a reviewed MCP server that can expose Docusign capabilities to your agent through natural language.

### 🔐 Security and governance guidance for this mission {#security-and-governance-guidance-for-this-mission}

Treat this as secure-by-design, not secure-by-default:

- Use the correct account and connector pairing
  - Docusign MCP Demo with Docusign developer account (can also be referred to interchangeably as a demo or sandbox account)
  - Docusign MCP with Docusign production account
- Use OAuth and least-privileged accounts whenever possible.
- Keep a human in the loop for high-impact actions.
- Validate prompts and outputs before scaling to production scenarios.

> [!WARNING] Your organization still owns governance
> Certification does not remove your organization's responsibility to configure and govern usage safely. You should still enforce least privilege, monitor usage, and keep human review in high-impact workflows.

### ✍🏻 Docusign MCP Demo connector notes {#docusign-mcp-demo-connector-notes}

The Docusign MCP Demo connector is intended for sandbox testing. It is separate from the Docusign MCP production connector, and workflows are not automatically migrated between Demo and Production environments.

For this Special Ops lab, that's exactly what we want: a safe development space to test prompt-driven agreement workflows before any production rollout. We'll be using the Docusign MCP Demo connector as a tool in the agent you build in Copilot Studio.

### 📚 Learn more about Docusign MCP and Microsoft MCP server certification {#learn-more-about-docusign-mcp-and-microsoft-mcp-server-certification}

- [Microsoft MCP server certification](https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-certification)
- [Docusign MCP Demo connector (Microsoft Learn)](https://learn.microsoft.com/en-us/connectors/docusignmcpdemo/)
- [Docusign MCP Overview](https://support.docusign.com/s/document-item?language=en_US&bundleId=ug3906200f-95c6-4a6b-90b1-f928c85961c6&topicId=con1438e5dd-ae84-435f-8b2e-028117782a6d.html&_LANG=enus)
- [Connect a Docusign account to Copilot Studio](https://support.docusign.com/s/document-item?language=en_US&elqTrackId=92dab223e52c434bb4d719365ec42701&elqTrack=true&bundleId=ug3906200f-95c6-4a6b-90b1-f928c85961c6&topicId=tsk6894353c-47ad-4dc9-8867-8a26ea379a65.html&_LANG=enus)

## 🧪 Docusign MCP lab {#docusign-mcp-lab}

In this Special Ops mission, you'll work through two practical use cases:

- First, automate a complete hiring agreement flow in Docusign.
- Second, optionally extend that flow with a calendar follow-up using a second MCP tool.

### ✨ Use case scenario {#use-case-scenario}

#### Use Case 1: Core hiring workflow (Labs 1.1 to 1.5) {#use-case-1}

**As a** recruiter,

**I want to** deliver an employment agreement and employee offer letter digitally,

**So that** the candidate can quickly review and complete signing.

To deliver this scenario, you will complete:

- 1.1 Create a Docusign Web Form
- 1.2 Create Document Templates
- 1.3 Create Docusign Workflow Builder workflow
- 1.4 Test the workflow
- 1.5 Build a custom agent in Microsoft Copilot Studio, connect to Docusign MCP Demo, and trigger the workflow

**Outcome**: your agent collects inputs, then triggers an already-built Docusign Workflow Builder workflow end-to-end.

#### Use Case 2: Multi-MCP extension (Lab 1.6) {#use-case-2}

For lab 1.6, the following is the use case:

**As a** recruiter,

**I want to** auto-schedule a prep meeting before the new hire's start date,

**So that** I have dedicated scheduled time in my calendar to complete onboarding tasks.

To extend the first scenario, you will optionally complete:

- 1.6 BONUS - Add Work IQ Calendar tool (Frontier program) for multi-MCP capabilities

**Outcome**: the same agent is enhanced with a second MCP tool for follow-up scheduling.

### 🪾 How this fits together {#how-this-fits-together}

This diagram shows how your agent connects users to real-world agreement workflows.

![Solution diagram showing a Copilot Studio agent triggering Docusign Workflow Builder via MCP and extending tasks with Work IQ Calendar](assets/0.0_02_SolutionDiagram.png)

Your agent is the control layer.

- Users interact with your Copilot Studio agent, which collects inputs and triggers Docusign Workflow Builder workflows through MCP.
- Docusign handles the agreement process end-to-end, while additional tools like Work IQ Calendar can extend the flow to supporting tasks.

One prompt. Multiple systems. Coordinated execution.

## ⚙️ Prerequisites {#docusign-mcp-lab-prerequisites}

To complete this Special Ops mission, you'll need the following prerequisites.

### Docusign

- Sign up for a free **Docusign developer account** if you don't already have one
  - Browse to [https://developers.docusign.com](https://developers.docusign.com) and on the upper right select **Create Account**.

    ![Select Create Account](assets/0.0_01_CreateDeveloperAccount.png)

### Microsoft

- Copilot Studio license
- Access to a Copilot Studio developer environment with the **GitHub Copilot harness** enabled
- Administrative permissions to create solutions and agents
- A SharePoint site where you have permissions to create a new folder in the Documents library - this will be used in a workflow step

> [!TIP] Prerequisites help:
> If you need help getting a Copilot Studio license, please reference the [Recruit Course Setup lab](./../../recruit/00-course-setup/index.md) which walks you through setting up a Power Platform environment with a Copilot Studio trial.

### Two email addresses

You'll need two different email addresses to complete this lab:

- Email address to use as the employee
- Email address to use as the hiring manager

> [!IMPORTANT] GitHub Copilot harness billing
> This mission uses the **GitHub Copilot harness in Microsoft Copilot Studio**, which uses usage-based billing. Building, testing in Preview, evaluating, and using the agent might consume **Copilot Credits**. Review the [Copilot Credits billing overview](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview) before you begin.

## 🧪 Lab 1.1: Create a Docusign Web Form {#lab-1-1-create-a-docusign-web-form}

> [!WARNING] IMPORTANT
> You need a Docusign developer account to complete these Docusign lab exercises. Follow the steps outlined in the **Prerequisites** section above (see **Docusign**).

Web Forms allow organizations to collect information through secure, browser-based forms that can automatically feed data into agreements and workflows. This helps reduce manual data entry, improve accuracy, and streamline processes such as onboarding, registrations, approvals, and contract generation.

To learn more about **Web Forms**, expand the following additional learning block.

::: details Web Forms: Collecting Data Before Agreements
🤔 **What is Web Forms?**

Within Workflow Builder, Web Forms provide a way to capture user input before generating or sending agreements.

Examples include:

- Customer application forms
- Employee onboarding questionnaires
- Vendor registration forms
- Service request forms
- Intake forms for legal or HR teams

Instead of manually entering information into contracts, users enter their own details directly into the form.

The collected data can then:

- Populate agreements automatically
- Trigger workflows
- Feed information into business systems
- Launch signing processes

🌱 Web Forms support:

- Text fields
- Dropdowns
- Checkboxes
- Conditional logic
- Required inputs
- Template field mapping

💡 **This helps minimize**

- Manual data entry
- Copy/paste errors
- Delays caused by incomplete submissions
:::

1. From the Home page of Docusign developers portal, select **Templates**.

    ![Select Templates](assets/1.1_01_Templates.png)

1. On the left-hand side navigation pane, select **Start**. Select **Web Forms** followed by **Create Web Form**.

    ![Select Create Web Forms](assets/1.1_02_CreateWebForm.png)

1. You'll be asked how you want to create your Web Form. Select **Start From Scratch**.

    ![Select Start from Scratch](assets/1.1_03_StartFromScratch.png)

1. Enter a name for the Web Form. For example,

    ```text
    Request for your contact information
    ```

    ![Enter name for Web Form](assets/1.1_04_NameWebForm.png)

1. The Web Form designer will next appear. This is where we can add pages and fields to the Web Form. By default there will be 3 pages - Welcome page, Untitled page, Thank you page.

    In the **Welcome page** update the following fields,

    **Page title**

    ```text
    👋🏻 Hey there!
    ```

    **Page subtitle**

    ```text
    As we kick-off the next stage in sending you an offer, we need some details from you.

    Please complete this form and shortly after you'll receive an Employment Agreement and Offer Letter.
    ```

    ![Update Welcome page details](assets/1.1_05_WelcomePageDetails.png)

1. Next, select the **Untitled** page and update the following fields,

    **Page title**

    ```text
    Your name
    ```

    **Page subtitle**

    ```text
    Please provide us with your name
    ```

    **API reference name**

    ```text
    Step_CandidateName
    ```

    ![Update Your Name page details](assets/1.1_06_YourNamePage.png)

1. Now add fields to this page. Select the **plus icon** below the page title section in the middle of the designer.

    ![Select plus icon to add a field](assets/1.1_07_AddField.png)

1. Select **Text Field**.

    ![Select Text Field](assets/1.1_08_SelectTextField.png)

1. You'll now see the field attributes. Update the following attributes:

    | Field name    | Field description | Required field | API reference name    |
    |---------------|-------------------|----------------|-----------------------|
    | `First Name`  | `Your first name` | Yes            | `TextBox_FirstName`   |

    ![Update field attributes](assets/1.1_09_FirstNameField.png)

    ![Update field attributes](assets/1.1_10_FirstNameField.png)

1. Repeat these steps to add the remaining **Text Fields**. Select the **plus icon** and add new **Text Fields** using the following attributes:

    | Field name    | Field description  | Required field | API reference name   |
    |---------------|--------------------|----------------|----------------------|
    | `Middle Name` | `Your middle name` | No             | `TextBox_MiddleName` |
    | `Surname`     | `Your surname`     | Yes            | `TextBox_Surname`    |
    | `Full Name`   | `Your full name`   | Yes            | `TextBox_FullName`   |

    After the **Text Fields** have been added, select the **plus icon** on the left-hand side pane and select **New Blank Page**.

    ![Add New Blank Page](assets/1.1_12_AddNewBlankPage.png)

1. Update the following fields for the new page,

    **Page title**

    ```text
    Address
    ```

    **Page subtitle**

    ```text
    Please provide us with your physical address
    ```

    **API reference name**

    ```text
    Step_CandidateAddress
    ```

    Repeat these steps to add the remaining **Text Fields**. Select the **plus icon** and add new **Text Fields** using the following attributes:

    ::: info Generic address format
    The table below shows a generic address format. You can adjust it, but keep track of any field changes because you'll need them in the Workflow Builder lab exercise. To avoid issues in later steps, use the following address format.
    :::

    | Field name       | Field description | Required field | API reference name      |
    |------------------|-------------------|----------------|-------------------------|
    | `Address Line 1` | `Street Address`  | Yes            | `TextBox_AddressLine1`  |
    | `Address Line 2` | `Suburb/District` | Yes            | `TextBox_AddressLine2`  |
    | `City`           | `City`            | Yes            | `TextBox_City`          |
    | `Post Code`      | `Post Code`       | Yes            | `TextBox_PostCode`      |

    ![Update Address page details](assets/1.1_13_AddressPage.png)

1. After the **Text Fields** have been added, select the **Thank you page** on the left-hand side pane.

    ![Select Thank you page](assets/1.1_14_FieldsAddedToAddressPage.png)

1. Update the following fields for the **Thank you page**.

    **Page title**

    ```text
    ✨ Thank you
    ```

    **Page subtitle**

    ```text
    We've received your form. Expect an email soon with documents to sign.
    ```

    ![Update Thank you page details](assets/1.1_15_ThankYouPageDetails.png)

1. You've finished configuring the Web Form. To see the end-user view, select **Preview**.

    ![Select **Preview** to see the Web Form in preview mode](assets/1.1_16_PreviewWebForm.png)

1. The Web Form is now enabled in preview mode where you can complete each page with the required information. Complete the **Your Name page** by entering a name and select **Next**.

    ![Complete Your Name page](assets/1.1_17_CompleteYourNamePage.png)

1. The next page to complete is the **Address page**.

    ![Address page of web form](assets/1.1_18_AddressPage.png)

1. Complete the **Address page** with information and select **Next**.

    ![Complete Address page](assets/1.1_19_CompleteAddressPage.png)

1. You'll then see a summary of the information entered for the two pages to review.

    ![Review entered information](assets/1.1_20_Review.png)

1. Scroll down and select **Next**.

    ![Select Next](assets/1.1_21_NextPage.png)

1. An error will appear next, this is fine as it's due to the web form being in preview mode. Select **Create**.

    ![Select Create](assets/1.1_22_Error.png)

1. We'll now activate the web form. Select **Activate** on the upper right of the designer.

    ![Select Activate](assets/1.1_23_Activate.png)

1. A confirmation modal will appear with an **Access setting** field. We'll leave this as **Public** since the web form will be used in a step in the workflow we'll create in a later lab exercise. Select **Activate**.

    ![Select Activate](assets/1.1_24_Activate.png)

1. A confirmation message will appear to let you know that the web form has been successfully activated. Select **Go to Web Forms**.

    ::: tip
    If you don't see the **Go to Web Forms** button, navigate back to the Web Forms page.
    :::

    ![Select Go to Web Forms](assets/1.1_25_GoToWebForms.png)

1. The Web Form will appear with a status of **Active**. You've successfully built a web form 👏🏻

    ![Web Form showing as Active](assets/1.1_26_ActiveWebForm.png)

## 🧪 Lab 1.2: Create Document Templates {#lab-1-2-create-document-templates}

Document Templates are a reusable setup for sending agreements that lets you pre‑define documents, recipient roles, routing order, and messages. This allows you to quickly create and send consistent envelopes without starting from scratch each time.

To learn more about **Document Templates**, expand the following additional learning block.

::: details Using Document Templates
📄 Workflow Builder works closely with document templates

Templates allow organizations to standardize frequently used agreements such as:

- NDAs
- Employment contracts
- Procurement forms
- Customer agreements
- Approval documents

📦 Templates can contain:

- Pre-configured documents
- Signer roles
- Signature fields
- Approval flows
- Workflow logic

This means teams no longer need to recreate documents every time.

For example:

- A customer fills out a Web Form
- Their information automatically populates a contract template
- Workflow Builder routes the agreement for approval
- The document is sent for eSignature
- Signed copies are stored automatically

💡 All of this can happen with minimal manual intervention.
:::

In this lab exercise, we'll create two Document Templates:

1. An employment agreement
1. An employee offer letter

Download both sample files for the Document Templates by selecting the button below.

<download-files path="special-ops/docusign-mcp/assets/sample-documents" />

These two Document Templates will be used in the next lab exercise when we create a workflow in Workflow Builder.

Let's begin. ⤵️

1. Navigate to **Templates** and select **Document Templates** in the left-hand side menu pane. Select **Create**.

    ![Create new Document Template](assets/1.2_01_SelectDocumentTemplates.png)

1. We can now select files to upload. Select **Upload**.

    ![Select Upload](assets/1.2_02_SelectUpload.png)

1. Select the **Sample Employment Agreement** file.

    ![Select Sample Employment Agreement files](assets/1.2_03_SelectSampleEmploymentAgreement.png)

1. The **Name** field is automatically populated with the file name. In the **Agreement Type** field, select the **chevron icon** and scroll down to the **Human Resources** list of values, select **Offer Letter**.

    ::: tip
    You can also type **Offer Letter** to quickly find the field.
    :::

    ![Select Offer Letter as the agreement type value](assets/1.2_04_AgreementType.png)

1. Next we'll define the roles for the document template. On the **Fields** left-hand side pane, select the **chevron icon** by **Sender 1** and select **Edit recipients** to update the signer role.

    ::: info What is a "Role" in a template? :thinking:
    A role is a placeholder in a template that represents an individual who will act on the document, such as signing or approving. Roles define _who_ is involved and _what action_ they take, while allowing the actual recipient to be assigned when the template is used.

    🐦 **What roles are used for**

    - Define who participates in the agreement
    - Enable reusability of templates across multiple envelopes
    - Allow documents and fields to be prepared without knowing the final recipients

    When someone uses the template, they assign real people (name and email) to each predefined role before sending.
    :::

    ![Edit recipients](assets/1.2_05_EditRecipients.png)

1. Rename the **Signer 1** role to,

    ```text
    Hiring Manager
    ```

    Add a new recipient and name the role as,

    ```text
    Employee
    ```

    ![Edit and Add Recipients](assets/1.2_06_EditAndAddRecipients.png)

1. Next, replace placeholders in the document with fields. Start by switching to the **Sender** role.

    ::: info What is a "Field" in a template? :thinking:
    A field is an interactive element added to a document that captures or displays information for a recipient. Fields are placed on documents so recipients can take action, such as signing or entering data when the envelope is sent.

    🐦 **What fields are used for**

    - Collect recipient input (for example, signatures or entered information)
    - Assign actions to specific recipients or roles (fields are tied to the individual who must act)
    - Pre‑fill information in documents when setting up a template

    In short:
    Fields define where and how recipients interact with the document during the signing process.

    The two fields types we'll be using in this lab exercise are,

    - Standard Fields: Displays the set of primary, out-of-the-box fields that you can add to your document.
    - Custom Fields: User-defined fields created to capture specific data not covered by standard options.
    :::

    ![Select Sender role to add fields](assets/1.2_07_SelectSender.png)

1. Highlight the first placeholder `{EffectiveDate}` and select the standard field, **Effective Date**, on the left-hand side menu.

    ::: warning Blue colored text in sample documents
    Each of the sample documents have blue colored text to easily identify the placeholders of where we'll be adding fields to the template. This is for the purpose of learning and completing the lab exercise so keep in mind you would not have colored text in **_Production-used_** templates.
    :::

    ![Effective Date field](assets/1.2_08_EffectiveDate.png)

1. Once selected, the **Effective Date** field will now be added to the template.

    ![Effective Date added](assets/1.2_09_EffectiveDateAdded.png)

1. The next field we'll add is a custom field. Highlight the `{EmployeeFullName}` placeholder and select the **+ icon** in the **Fields** pane. Select **Field**.

    ![Add custom field for Effective Full Name](assets/1.2_10_AddedEmployeeFullNameCustomField.png)

1. In the field attribute fly-out pane, enter the following in the **Field Name**.

    ```text
    Employee Full Name
    ```

    As you type a value into **Field Name**, the template designer searches for an existing field with the same name. If no results are found, you'll have the option to create a new custom field using the entered value.

    Select the **plus icon** to create a new custom field for Employee Full Name.

    ![Create new custom field for Employee Full Name](assets/1.2_11_CreateEmployeeFullNameCustomField.png)

1. Configure the remaining attributes. Enter the following in **Field Description**:

    ```text
    The full name of the employee
    ```

    Enable the **Required Field** option to ensure this field must be completed.

    By default the **Field type** is **Text**. We'll keep as **Text**.

    ![Configure the Employee Full Name field](assets/1.2_12_ConfigureEmployeeFullNameCustomField.png)

1. **Save** the **Employee Full Name** custom field.

    ![Save Employee Full name](assets/1.2_13_SaveEmployeeFullNameCustomField.png)

1. Repeat the same steps to add the remaining custom fields, using them in place of the Sender role placeholders.

    | Placeholder              | Field name             | Field description                      | Required field | Field Type         |
    |--------------------------|------------------------|----------------------------------------|----------------|--------------------|
    | **{EmployeePosition}**   | `Employee Position`    | `Position the employee is fulfilling`  | Yes            | Text               |
    | **{EmployeeStartDate}**  | `Start Date`  | `The start date of the employee`       | Yes            | Date               |
    | **{SalaryAmount}**       | `Salary`               | `The salary of the employee`           | Yes            | Text               |

    ![Create remaining custom fields](assets/1.2_14_CreateRemainingCustomFields.png)

1. Next, we'll add the **Employee Full Name** field to the _**16. Signatures**_ section of the template. Highlight the `{EmployeeFullName}` placeholder and select the corresponding field in the **Fields** left-hand side pane.

    ![Add Employee Full Name Field](assets/1.2_15_AddEmployeeFullNameField.png)

1. We'll now switch to the **Hiring Manager** role to define the fields that this recipient should complete. On the **Fields** left-hand side pane, select the **chevron icon** by **Sender** and select **Hiring Manager**.

    ![Select Hiring Manager role](assets/1.2_16_SwitchToHiringManagerRole.png)

1. Highlight the `{ManagerSignature}` placeholder and select **Signature** in the **Fields** left-hand side pane.

    ![Select Signature field for the Manager Signature placeholder](assets/1.2_17_AddSignatureField.png)

1. The **Signature** field will now be added.

    ![Signature field added](assets/1.2_18_SignatureFieldAdded.png)

1. Repeat the same steps to add the remaining fields for the **Hiring Manager** role and the **Employee** role.

    ::: tip :computer_mouse: Don't forget to switch roles
    Remember to switch to the Employee role using the chevron icon in the Fields left-hand side pane.

    ![Switch to Employee Role](assets/1.2_19_SwitchToEmployeeRole.png)
    :::

    | Role            | Placeholder                          | Field       |
    |-----------------|--------------------------------------|-------------|
    | Hiring Manager  | **{ManagerFullNameSignature}**       | Name        |
    | Hiring Manager  | **{ManagerSignedDateSignature}**     | Date Signed |
    | Employee        | **{EmployeeSignature}**              | Signature   |
    | Employee        | **{EmployeeFullNameSignature}**      | Name        |
    | Employee        | **{EmployeeSignedDateSignature}**    | Date Signed |

1. The Template should now look like the following after the fields for the **Hiring Manager** and **Employee** roles have been added.

    ![Fields added for all roles](assets/1.2_20_FieldsAddedForRoles.png)

1. Select **Save as Draft** on the upper right. You'll be redirected to the Document Templates page and see a bottom-left confirmation message. Then select the **ellipsis icon (...)** and choose **Publish**.

    ::: tip
    If you don't see the **Save As Draft** button, but see it labeled as **Save and Publish**, select the **Save and Publish** button.
    :::

    ![Publish document template](assets/1.2_21_PublishDocumentTemplate.png)

1. Another confirmation message on the bottom left will appear to let you know the Draft template has been Published.

    Now create the second Document Template using the **Sample Offer Letter** file.

    Select **+ Create new**.

    ![Create a new document template](assets/1.2_22_CreateNewDocumentTemplate.png)

1. Repeat the previous steps by uploading the **Sample Offer Letter** file and selecting **Offer Letter** as the **Agreement Type**.

    Select **Continue**.

    ![Upload Sample Offer Letter file to create a new document template](assets/1.2_23_OfferLetterAgreementType.png)

1. Repeat the previous steps to create two roles for the document template: Hiring Manager and Employee.

    On the **Fields** left-hand side pane, select the **chevron icon** by **Sender 1** and select **Edit recipients**.

    Rename the **Signer 1** role to,

    ```text
    Hiring Manager
    ```

    Add a new recipient and name the role as,

    ```text
    Employee
    ```

    ![Add roles](assets/1.2_24_Roles.png)

1. Next, we'll replace placeholders in the document with fields. We'll start by switching to the **Sender** role. Highlight the `{EmployeeFullName}` placeholder and select the Employee Full Name field on the left-hand side menu. The field will now display instead of the placeholder.

    ![Configure Sender fields](assets/1.2_25_ConfigureFields.png)

1. Repeat the same steps for the remainder of the placeholders for the **Sender** role by selecting existing fields on the left-hand side menu or creating new fields.

    | Placeholder                    | Field name                    | Create New Field | Field description                          | Required field | Field Type |
    |--------------------------------|-------------------------------|------------------|--------------------------------------------|----------------|------------|
    | **{EmployeeAddressLine1}**     | `Employee Address Line 1`     | Yes              | `Apt or House No. and street name`         | Yes            | Text       |
    | **{EmployeeAddressLine2}**     | `Employee Address Line 2`     | Yes              | `Suburb`                                   | Yes            | Text       |
    | **{EmployeeAddressCity}**      | `Employee Address City`       | Yes              | `City`                                     | Yes            | Text       |
    | **{Employee AddressPostCode}** | `Employee Address Post Code`  | Yes              | `Post code`                                | Yes            | Text       |
    | **{EmployeePosition}**         | `Employee Position`           | No               |                                            |                |            |
    | **{EmployeeStartDate}**        | `Start Date`                  | No               |                                            |                |            |
    | **{DueDate}**                  | `Signed Due Date`             | Yes              | `Due date of signed agreement by employee` | Yes            | Date       |

    ::: tip
    If you accidentally create a new field with the wrong field type (for example, you created **Signed Due Date** as `Text`), you won't be able to change the field type. You can, however, rename the field to `[Don't use] Signed Due Date`.
    :::


1. Next, we'll add the fields for the **Hiring Manager** and **Employee** roles using the same steps as last time.

    ::: tip :computer_mouse: Don't forget to switch roles
    Remember to switch to the Employee role using the chevron icon in the Fields left-hand side pane.
    :::

    | Role            | Placeholder                          | Field       |
    |-----------------|--------------------------------------|-------------|
    | Hiring Manager  | **{ManagerSignature}**               | Signature   |
    | Hiring Manager  | **{ManagerFullNameSignature}**       | Name        |
    | Employee        | **{EmployeeSignature}**              | Signature   |
    | Employee        | **{EmployeeFullNameSignature}**      | Name        |
    | Employee        | **{EmployeeSignedDateSignature}**    | Date Signed |

    Great, you've now finished configuring the second Document Template 👏🏻

    You can also view the **Preview** mode for the Document Template by selecting **Preview** on the upper right.

    ![All role fields configured](assets/1.2_28_FieldsConfigured.png)

1. Enter in values in the fields to see it appear on the template viewer.

    ![Select **Preview** to see the Document Template in preview mode](assets/1.2_29_PreviewMode.png)

1. Exit from **Preview** mode by selecting the **X icon** on the upper left and select **Save As Draft**.

    ::: tip
    If you don't see the **Save As Draft** button, but see it labeled as **Save and Publish**, select **Save and Publish** and skip the next two publishing steps.
    :::

    ![Select Save as Draft](assets/1.2_30_SaveAsDraft.png)

1. A confirmation message on the bottom left that the template has been saved as a draft. Next select the **ellipsis icon (...)** and select **Publish**.

    ![Publish Sampler Offer Letter document template](assets/1.2_31_Publish.png)

1. The **Sample Offer Letter** document template is now published.

    ![Sample Offer Letter document published](assets/1.2_32_Published.png)

🏃🏻‍♀️‍➡️ Next, let's move on to creating the workflow in Workflow Builder.

## 🧪 Lab 1.3: Create a Docusign Workflow Builder workflow {#lab-1-3-create-docusign-workflow-builder-workflow}

For our HR scenario, we need to process the following:

- Send the employment agreement and offer letter
- Get the candidate to sign it
- Then get the manager to sign
- Save the final document to SharePoint

Workflow Builder can automate all of this, instead of handling it manually. Let's build it. 🏗️

1. Navigate to **Agreements** and select **Workflows**. Then select **Create Workflow**.

    Note: The label on the menu has since changed from _Maestro Workflows_ to **Workflows**.

    ![Select Workflows](assets/1.3_01_CreateWorkflow.png)

1. Select **+Blank Workflow**

    ![Select Blank Workflow](assets/1.3_02_BlankWorkflow.png)

1. The Workflow Builder designer will now load. Select the ellipsis (...) icon and select **Rename** to name our workflow.

    ![Select Create Workflow](assets/1.3_03_RenameWorkflow.png)

1. Enter the following as the name of the workflow and select **Save**.

    ```text
    Send employment agreement and offer letter workflow
    ```

    ![Save workflow name](assets/1.3_04_SaveWorkflowName.png)

1. Select **Add workflow start**. This step in the workflow determines how the workflow will be initiated.

    ![Select Add workflow start](assets/1.3_05_AddWorkflowStart.png)

1. There are several start methods. Select **From an API Call** so the agent built in Microsoft Copilot Studio can invoke the workflow through the Docusign MCP Demo server.

   Select **Apply**.

    ![Workflow start method](assets/1.3_06_WorkflowStartMethod.png)

1. Select **Next**.

    ![Select Next](assets/1.3_07_NextConfigurationStep.png)

1. Now add variables that act as workflow input parameters. Data sent from the agent built in Microsoft Copilot Studio will be consumed by other workflow steps.

   Select **Text**.

    ![Select Text](assets/1.3_08_NewTextVariable.png)

1. Repeat the same steps to create the remaining variables listed in the table below.

    | Variable type | Value                       |
    |:--------------|:----------------------------|
    | Text          | `Employee Full Name`        |
    | Email         | `Employee Email`            |
    | Text          | `Employee Position`         |
    | Date          | `Effective Date`            |
    | Text          | `Salary`                    |
    | Text          | `Hiring Manager Full Name`  |
    | Email         | `Hiring Manager Email`      |
    | Date          | `Due Signed Date`           |
    | Date          | `Start Date`                |

    ![Workflow Start variables](assets/1.3_09_WorkflowStartVariables.png)

1. Now that the variables have been configured, we can proceed to the next configuration step. Select **Next**.

    ![Select Next](assets/1.3_10_SelectNext.png)

1. In this step, define how the API call is triggered. Select the second option, **Automated process**, since the agent built in Microsoft Copilot Studio will invoke the workflow through the Docusign MCP Demo server.

    Select **Apply**. This completes the workflow start step.

    ![Select Automated process](assets/1.3_11_SelectAutomatedProcess.png)

1. Select **Add a step** in the workflow designer.

    ![Select Add a step](assets/1.3_12_AddWorkflowStep.png)

1. Select **Set Up Invite** which enables participants to be added to the workflow steps.

    ![Select Set Up Invite](assets/1.3_13_SetUpInvite.png)

1. Select **Configure**.

    ![Select Configure](assets/1.3_14_SelectConfigure.png)

1. Select **Add Participant** as we'll create participants for the Employee and Hiring Manager.

    ![Select Add Participant](assets/1.3_15_SelectAddParticipant.png)

1. Enter `Employee` as the value in the **Employee role** field and select **Add**.

    ![Employee participant](assets/1.3_16_EmployeeParticipant.png)

1. You'll next see two fields appear, **Employee name** and **Employee email** which need to be mapped to either a workflow variable from the start step, or a different step. Since we added variables in the workflow start step, this is what we'll map the participant fields to.

    ![Select variables to map to](assets/1.3_17_SelectVariables.png)

1. Select the dropdown (chevron) icon for the **Employee name** field. In the list of **Variables from Workflow Start** select **Employee Full Name** variable.

    ![Select dropdown icon in the employee name field](assets/1.3_18_EmployeeFullNameVariable.png)

1. For the **Employee email** field, select the  **Employee Email** variable.

    ![Select employee email](assets/1.3_19_EmployeeEmailVariable.png)

1. Select **Apply**.

   You've now completed configuring the **Set Up Invite** step.

    ![Select Apply](assets/1.3_20_Apply.png)

1. Next, select **Add a step**.

    ![Select Add a step](assets/1.3_21_AddStep.png)

1. Select **Collect Data with Web Forms** as the next step.

    ![Select Collect Data with Web Forms](assets/1.3_22_SelectCollectDataWithWebForms.png)

1. Select **Configure** for the Web Form step.

    ![Select Configure](assets/1.3_23_SelectConfigure.png)

1. Select the web form created earlier: **Request for contact information**.

    ![Select Request for contact information web form](assets/1.3_24_ChooseForm.png)

1. Select **Next** to configure the Web Form participant.

    ![Select Next](assets/1.3_25_NextConfigurationStep.png)

1. Select **Employee** in the Participant dropdown field.

    ![Select Employee](assets/1.3_26_SelectEmployeeParticipant.png)

1. Select **Continue to map data fields**.

    ![Select Continue to map data fields](assets/1.3_27_ContinueToMapDataFields.png)

1. For the **Full Name** field, select the **Employee Full Name** variable from the workflow start list.

    ![Select Employee Full Name variable](assets/1.3_28_EmployeeFullNameVariable.png)

1. The Web Form step is now configured. Select **Apply** to continue.

    ![Select Apply](assets/1.3_29_Apply.png)

1. Select **Add a step**.

    ![Select Add a step](assets/1.3_30_AddAStep.png)

1. Scroll down to the **Documents** list and select **Prepare a Document Template** step.

    ![Select Prepare a Document Template step](assets/1.3_31_SelectPrepareDocumentTemplate.png)

1. Select **Configure** for the Document Template step.

    ![Select Configure](assets/1.3_32_SelectConfigure.png)

1. Rename the **Step Name** field to:

   ```text
   Generate Document - Employment Agreement
   ```

    Next, select the document template created earlier: **Sample Employment Agreement**.

    ![Select Sample Employment Agreement document template](assets/1.3_33_SelectSampleEmploymentAgreement.png)

1. Select **Next** to proceed with the rest of the configuration.

    ![Select Next](assets/1.3_34_SelectNext.png)

1. In this step, you can generate the document automatically without review. For this lab, leave it as **Yes** to show faster turnaround when sending an employment agreement with employee information. In production, the template and mapped input values would typically be approved internally.

   Select **Next**.

    ![Select Next](assets/1.3_35_SelectNext.png)

1. In this step, map values for document generation. Start with the `Effective Date` field. In **Variables from Workflow Start**, select **Effective Date**.

    ![Select Effective Date variable](assets/1.3_36_SelectEffectiveDate.png)

1. Repeat these steps for the remaining employment agreement fields using the table below. Make sure Employee Full Name is mapped to **Full Name** under **Collect Data with Web Forms**.

   Select **Next** to configure the naming of the file.

    | Agreement Field    | Workflow Component           | Component Field      |
    |:-------------------|:-----------------------------|:---------------------|
    | Effective Date     | Variables from Workflow Start| Effective Date       |
    | Employee Full Name | Collect Data with Web Forms  | Full Name            |
    | Employee Position  | Variables from Workflow Start| Employee Position    |
    | Start Date         | Variables from Workflow Start| Start Date  |
    | Salary             | Variables from Workflow Start| Salary               |

    ![Agreement Fields configured](assets/1.3_37_AgreementFieldsConfigured.png)

1. In this step, configure the generated file name. Keep it simple by using the employee's full name, the effective date, and appending `EmploymentAgreement`.

   Select the option **Use variables to customize a title** to reference values from our workflow steps. Select **Full Name** from the **Web Form** list.

    ![Select Full Name from the Web Form list](assets/1.3_38_TitleBuilder.png)

1. Select the **+** icon to select the **Effective Date** from the **Collect Data with Web Forms** list.

    ![Select Effective Date from the Collect with Web Forms list](assets/1.3_39_SelectEffectiveDate.png)

1. Next enter `_` in-between the two variables and at the end, enter the text value of `_EmploymentAgreement`.

    Update the file format to **.pdf** and select **Next**.

    ![Title Builder Field configured](assets/1.3_40_TitleBuilderFieldConfigured.png)

1. You've completed configuring the step. Select **Apply** to continue.

    ![Select Apply](assets/1.3_41_SelectApply.png)

1. Select **Add a step**.

    ![Select add a step](assets/1.3_42_AddAStep.png)

1. Repeat the same process to add the second document template, **Sample Offer Letter**, to the workflow. Select **Prepare Document Template**.

    ![Select Prepare a Document Template step](assets/1.3_43_SelectPrepareDocumentTemplate.png)

1. Rename the **Step Name** field to:

   ```text
   Generate Document - Offer Letter
   ```

   Next, select the **Sample Offer Letter** document template and configure the agreement fields mapping to the relevant workflow components using the below table as guidance.

   Make sure you select the relevant workflow component fields to map to, such as **Employee Full Name** from the **Collect Data with Web Forms** list.

    | Agreement Field            | Workflow Component            | Component Field   |
    |:---------------------------|:------------------------------|:------------------|
    | Employee Full Name         | Collect Data with Web Forms   | Full Name         |
    | Employee Address Line 1    | Collect Data with Web Forms   | Address Line 1    |
    | Employee Address Line 2    | Collect Data with Web Forms   | Address Line 2    |
    | Employee Address City      | Collect Data with Web Forms   | City              |
    | Employee Address Post Code | Collect Data with Web Forms   | Post Code         |
    | Employee Position          | Variables from Workflow Start | Employee Position |
    | Start Date                 | Variables from Workflow Start | Start Date        |
    | Signed Due Date            | Variables from Workflow Start | Due Signed Date   |

    ![Configured agreement fields](assets/1.3_44_ConfigureAgreementFields.png)

1. For the naming convention of the generated file, we'll apply the same references of **Employee Full Name** from **Collect Data with Web Forms**, the **Effective Date** from **Variables from Workflow Start** and append the text value of `_OfferLetter`.

   Update the file format to **.pdf**, select **Next** and select **Apply**.

    ![Configure the document file name](assets/1.3_45_NameDocumentConfigurationStep.png)

1. Add another step to send the documents for signature by selecting **Add a step**.

    ![Select Add a step](assets/1.3_46_AddAStep.png)

1. Select **Send Documents for Signature**.

    ![Select Send Documents for Signature](assets/1.3_47_SendDocumentsForSignature.png)

1. Select **Configure**.

    ![Select Configure](assets/1.3_48_SelectConfigure.png)

1. In this step, select the previous **Generate Document** steps so generated documents are added to an envelope and sent for signature.

   For the primary document, select the **Document** variable under **Generate Document - Employment Agreement**.

    ![Select Generate Document - Employment Agreement variable](assets/1.3_49_SelectGenerateDocumentEmploymentAgreement.png)

1. Next, we'll add the document variable for the Offer Letter as the secondary document for the envelope. Select **Add Document**.

    ![Select Add Document](assets/1.3_50_SelectAddDocument.png)

1. Select the **Document** variable under **Generate Document - Offer Letter**.

    ![Select Generate Document - Offer Letter variable](assets/1.3_51_SelectGenerateDocumentOfferLetter.png)

1. Select **Next** to continue configuring the workflow step.

    ![Select Next](assets/1.3_52_SelectNext.png)

1. For sending of the envelope, leave the setting as **Automatically** as the envelope with the attached documents are to be automatically sent. By default, the sender will be your Docusign developer user. Select **Next**.

    ![Select Next](assets/1.3_53_SendEnvelopeAutomatically.png)

1. Next you'll configure the recipients of the document agreements. These will be the Employee and Hiring Manager roles you defined earlier when the document templates were created. You'll map them to the Employee participant you set up earlier in the **Set Up Invite** step, and we'll also add a new participant for the Hiring Manager.

   Enable the **Set a signing order** setting to configure the Employee to receive the envelope first, followed by the Hiring Manager when the Employee completes signing the document agreements.

    ![Enable the setting of Set a signing order](assets/1.3_54_SetASigningOrder.png)

1. Update the integer value to `2` for the **Hiring Manager**.

    ![Set Hiring Manager as 2](assets/1.3_55_SetHiringManagerAs2.png)

1. Update the integer value to `1` for the **Employee**.

    ![Set Employee as 1](assets/1.3_56_SetEmployeeAs1.png)

1. For the Employee recipient, select the **Employee** variable in the dropdown field.

    ![Select Employee](assets/1.3_57_SelectEmployee.png)

1. Since we already mapped the participant fields in the **Set Up Invite** step, there's no need to configure mapping. Leave these as-is.

    ![Mapped Participant Fields for Employee](assets/1.3_58_MappedParticipantFields.png)

1. Next we'll add a new participant to the workflow for the Hiring Manager. Select **Add Participant**.

    ![Select Add Participant](assets/1.3_59_AddParticipant.png)

1. Enter `Hiring Manager` and select **Add**.

    ![Enter Hiring Manager and select Add](assets/1.3_60_HiringManager.png)

1. For the **Hiring Manager Name** participant field, map it to **Hiring Manager Full Name** under **Variables from Workflow Start**.

    ![Map Hiring Manager Name](assets/1.3_61_MapHiringManagerName.png)

1. For the **Hiring Manager Email** participant field, map it to **Hiring Manager Email** under **Variables from Workflow Start**.

   Select **Next** to continue with the configuration of the workflow step.

    ![Map Hiring Manager Email](assets/1.3_62_MapHiringManagerEmail.png)

1. For the signing session step, keep the default selection: Use a direct signing session.

   Select **Next**.

    ![Use a direct signing session](assets/1.3_63_UseADirectSigningSession.png)

1. The final step is to configure the message the Hiring Manager will see when they receive the email to sign the documents. Enter the following,

   For the Message title:

   ```text
   Complete with Docusign: Employment Agreement and Offer Letter
   ```

   For the Message:

   ```text
   Please review and sign the Employment Agreement and Offer Letter.
   ```

   Select **Next**.

    ![Configure Add message step and select Next](assets/1.3_106_AddMessage.png)

1. Select **Apply** to complete workflow step configuration.

    ![Select Apply](assets/1.3_107_SelectApply.png)

1. Select **Add a step**. Next, add a **Confirmation Screen** for the Employee participant that appears after signing is complete.

    ![Select Add a step](assets/1.3_65_AddAStep.png)

1. Select **Show a Confirmation Screen**.

    ![Select Show a Confirmation Screen](assets/1.3_66_SelectShowAConfirmationScreen.png)

1. Select **Configure** for this step.

    ![Select Configure](assets/1.3_67_SelectConfigure.png)

1. Select **Employee** as the participant for the confirmation screen.

    ![Select Employee](assets/1.3_68_SelectEmployee.png)

1. You can configure the message type, title, and body fields. Default values are already set, and you can keep them for this lab. Select **Apply**.

    ![Select Apply](assets/1.3_69_SelectApply.png)

1. In the final workflow step, upload the signed document agreements to SharePoint for visibility. To do this, set up and authorize a connection to your SharePoint site. Select **App Center** on the upper right of the designer.

    ![Select App Center](assets/1.3_70_SelectAppCenter.png)

1. A list of support services will appear. Scroll down and select **SharePoint**.

    ![Select SharePoint](assets/1.3_71_SelectSharePoint.png)

1. Select **Install App**.

    ![Select Install App](assets/1.3_72_SelectInstallApp.png)

1. Next, select **Install and Authorize**.

    ![Select Install and Authorize](assets/1.3_73_SelectInstallAndAuthorize.png)

1. Select **Connect Account**.

    ![Select Connect Account](assets/1.3_74_ConnectAccount.png)

1. You'll see options to connect a SharePoint account as either a private connection (individual use) or a shared connection (team access). For this lab, use **Private**.

   Select **Next**.

    ![Select Private](assets/1.3_75_SelectPrivateAndNext.png)

1. Enter a name for your SharePoint account such as `YourName_SharePoint_Docusign` or your Copilot Studio environment name.

   Select **Log In** on the bottom right.

    ![Enter name for SharePoint account](assets/1.3_76_NameTheSharePointConnection.png)

1. Enter your credentials for your SharePoint site when prompted to sign in, and tick the checkbox to allow permissions. Then select **Accept**.

    ![Allow consent](assets/1.3_77_Consent.png)

1. You'll see confirmation that you're signed in to your SharePoint account. Select the **X** icon to exit App Center and return to the workflow designer. If not, navigate to **Agreements** > **Workflows** and reopen the workflow.

    ![Select the x icon to exit from the App Center](assets/1.3_78_SelectUseThisApp.png)

1. Select **Add a step** as we'll add the SharePoint step as the final step for the workflow.

    ![Select Add a step](assets/1.3_79_SelectAddAStep.png)

1. Select the **Apps** tab and select **Store files in SharePoint**.

    ![Select Store files in SharePoint](assets/1.3_80_SelectStoreFilesInSharePoint.png)

1. Select **Configure** for this step.

    ![Select Configure](assets/1.3_81_SelectConfigure.png)

1. Select the **Combined Envelope File** variable in the dropdown field. This represents the signed document agreements from the **Send Documents for Signature** step.

    ![Select Combined Envelope File](assets/1.3_82_SelectCombinedEnvelopFile.png)

1. Next, select the **Connection** created earlier for your SharePoint site.

    ![Select connection](assets/1.3_83_SelectConnection.png)

1. Next select your SharePoint site from the **Select site** dropdown. If you have more than one site, it will be listed so select the one that you want to upload the signed document agreements to.

    ![Select SharePoint Site](assets/1.3_84_SelectHRTeam.png)

1. For the drive, select **Document**.

    ![Select Documents](assets/1.3_85_SelectDocuments.png)

1. For the folder, select the folder of your choice in your SharePoint site. For example in the screenshot, there's an existing folder - _Signed employees_ under _Documents_ in the _HR Team_ site.

    ![Select folder](assets/1.3_86_SelectSignedEmployees.png)

1. Select **Next**.

    ![Select Next](assets/1.3_87_SelectNext.png)

1. In the final configuration step, define the uploaded file naming convention using workflow variables. Keep it simple by referencing **Envelope ID** and **Employee Full Name**. Enter `env` and select **Envelope ID**.

    ![Select Envelope ID Variable](assets/1.3_88_SelectEnvelopeIDVariable.png)

1. Next, add an underscore character. Select **Add Text**.

    ![Select Add Text](assets/1.3_89_SelectText.png)

1. Enter `_` and select **Add**.

    ![Add underscore character](assets/1.3_90_AddUnderscoreCharacter.png)

1. Select **Add Variable** and enter `full name`. Select the **Full Name** variable under **Collect data with web forms**.

    ![Select Full Name variable](assets/1.3_91_SelectFullName.png)

1. You've completed naming the file 👏🏻 Select **Apply**.

    ![Select Apply](assets/1.3_92_SelectApply.png)

1. Now it's time to publish the workflow. Select **Save Draft** on the upper right of the designer.

    ![Select Save Draft](assets/1.3_93_SelectSaveDraft.png)

1. You'll see confirmation that the workflow has been saved. Select **Review & Publish**.

    ![Select Review and Publish](assets/1.3_94_SelectReviewAndPublish.png)

1. There will be confirmation on whether your workflow has errors. Select **Next**.

    ![Select Next](assets/1.3_95_SelectNext.png)

1. Next, name the workflow instance (the name for each workflow run). Use the name builder to insert variables as part of the naming convention. Select the **+** icon.

    ![Select plus icon to insert a variable](assets/1.3_96_InsertVariable.png)

1. Select the **Instance ID** variable.

    ![Select Instance ID variable](assets/1.3_97_SelectInstanceIDVariable.png)

1. Select the **+** icon again to insert another variable. Select the **Start Date and Time** variable.

    ![Select Start Date and Time variable](assets/1.3_98_SelectStartDateAndTimeVariable.png)

1. Between the variables, enter an underscore (`_`) to complete the naming convention.

   Select **Done**.

    ![Enter underscore character](assets/1.3_99_InsertUnderscoreCharacter.png)

1. Select **Publish**.

    ![Select Publish](assets/1.3_100_SelectPublish.png)

1. Next, authorize the workflow sender (your account). Select **Authorize My Account**.

    ![Select Authorize My Account](assets/1.3_101_SelectAuthorizeMyAccount.png)

1. You'll be prompted to allow access for Workflow Builder to use your account. Select **Allow Access**.

    ![Select Allow Access](assets/1.3_102_SelectAllowAccess.png)

1. Select **Publish**.

    ![Select Publish](assets/1.3_103_SelectPublish.png)

1. You'll see confirmation that the workflow has published successfully. Select **Go to Workflows**.

    ![Select Go to Workflows](assets/1.3_104_SelectGoToWorkflow.png)

1. The workflow will now show a status of **Published**.

    ![Workflow published](assets/1.3_105_WorkflowPublished.png)

## 🧪 Lab 1.4: Test the workflow {#lab-1-4-test-the-workflow}

Before we move onto building the agent in Microsoft Copilot Studio, it's best practice to run the workflow to test it. You can manually run the workflow by starting a new instance.

1. Open the workflow and on the upper right, select **Start Instance**.

    ![Select Start Instance](assets/1.4_01_StartInstance.png)

1. A new modal will appear where you'll be required to provide the variables for the workflow start step. Fill in the fields with some sample data.

    ::: info Reminder on email address values
    Use two different email addresses that you have access to for the employee and hiring manager.
    :::

    ![Enter the values for Workflow Start Variables](assets/1.4_02_EnterValuesForWorkflowStartVariables.png)

1. After you've entered the values for the variables, select **Start**.

    ![Enter the values for Workflow Start Variables](assets/1.4_03_EnterValuesForWorkflowStartVariables.png)

1. A confirmation will appear that the workflow instance has started.

    ![Confirmation of workflow instance](assets/1.4_04_ConfirmationOfInstance.png)

1. For the email address you entered for the Employee participant, navigate to the email Inbox and open the Docusign email - it should have the subject of `***Test Email*** Review and complete workflow`. Select **Review**.

    ::: warning Check your spam folder
    Check your spam folder for the email if you don't see it in your main Inbox.
    :::

    ![Select Review](assets/1.4_05_SelectReview.png)

1. The first page of the Web Form will load, select **Start**.

    ![Select Start](assets/1.4_06_SelectStart.png)

1. You'll now see the **Your Name** page of the Web Form. Enter the first and last name for the employee you used in the workflow start sample data.

    ![Provide name information](assets/1.4_07_ProvideNameInformation.png)

1. Enter sample address information in the **Address** page of the Web Form.

    ![Provide address information](assets/1.4_08_ProvideAddressInformation.png)

1. The final step of the Web Form is to review the information entered. Select **Next**.

    ![Select Next](assets/1.4_09_SelectNextToCompleteWebForm.png)

1. After the Web Form is submitted, the next workflow steps run automatically: generate the Employment Agreement and Offer Letter using form data, then request the Employee participant signature. As the Employee participant, you'll be directed to signing immediately.

    In minutes, the Employee participant goes from entering form data to signing documents, reducing turnaround time for HR teams.

   **Tick the terms and conditions checkbox** and select **Continue**.

    ![Agree and continue](assets/1.4_10_AgreeAndContinue.png)

1. You'll now see the Employment Agreement. Blue text shows values from **Workflow Start variables** and the **Web Form** you completed as the **Employee participant**. Review the agreement, then select **Start** to sign.

    ![Select Start](assets/1.4_11_ReviewDocumentAgreements.png)

1. Select the **Sign** icon to sign the Employment Agreement.

    ![Select Sign icon](assets/1.4_12_SignEmploymentAgreement.png)

1. A modal appears where you can confirm signature details and style. Options are default style, drawn signature, or uploaded signature. Continue with the default style and select **Adopt and Sign**.

    ![Select Adopt and Sign](assets/1.4_13_AdoptAndSign.png)

1. Review the Offer Letter next. Notice how the address information is now displayed - this is the information you entered on the Address page of the Web Form as the Employee participant. Select the **Sign** tab icon, which will direct you to the **Sign** icon in the Offer Letter.

   Select the **Sign** icon.

    ![Select Sign icon](assets/1.4_14_SignOfferLetter.png)

1. Select **Adopt and Sign** for the Offer Letter and then select **Finish**.

    ![Select Finish](assets/1.4_15_SelectFinish.png)

1. You'll next see the Confirmation Screen which is the step configured earlier.

    ![Confirmation screen displayed](assets/1.4_16_ConfirmationScreen.png)

1. Next, for the email address you entered for the Hiring Manager participant, navigate to the email Inbox and open the Docusign email - it should have the subject of `Complete with Docusign: Employment Agreement and Offer Letter`. Select **Review Documents**.

    ::: warning Check your spam folder
    Check your spam folder for the email if you don't see it in your main Inbox.
    :::

1. Sign the Employment Agreement and Offer Letter, then select **Finish**.

    ![Select Finish](assets/1.4_18_SelectFinish.png)

1. If you're using the same email address as your Docusign Developer user account, you may see the following modal appear. Select **No Thanks**.

    ![Select No Thanks](assets/1.4_19_OptionToLogIntoDocusign.png)

1. You'll see confirmation that the documents have been successfully signed.

    ![Confirmation of documents being successfully signed](assets/1.4_20_Configrmation.png)

1. For your Docusign Developer user account, if you navigate to the Inbox of the associated email address, you'll see an email with the signed document agreements.

    ![Received signed document agreements](assets/1.4_21_DocusignDeveloperUserAccount.png)

1. The final step in the workflow was uploading the signed document agreements to SharePoint. Navigate to your SharePoint location of the folder and you'll see the .PDF file of the signed document agreements listed.

    ![Signed document agreements uploaded into SharePoint](assets/1.4_22_SignedDocumentAgreementsUploadedToSharePoint.png)

1. Open the .PDF file to review the document. You've now completed an end-to-end manual workflow test. 🎉 Next, build the agent in Microsoft Copilot Studio.

    ![View signed document agreements](assets/1.4_23_ViewSignedDocumentAgreements.png)

## 🧪 Lab 1.5: Build a custom agent in Microsoft Copilot Studio, connect to Docusign MCP Demo, and trigger the workflow {#lab-1-5-build-custom-agent-docusign-mcp-demo-trigger-workflow}

### Prerequisites

- **New solution**: As a best practice, create a new solution for this agent before you create the agent itself. Refer to our [Recruit mission](../../recruit/04-creating-a-solution/index.md) to learn how to create a solution.
- **Use the GitHub Copilot harness**: This lab requires the GitHub Copilot harness because the Docusign MCP Demo tool is available there. Turn **New Experience** on before continuing.

    ![Toggle new experience](assets/1.5_00_ToggleNewExperience.png)

Let's begin!

1. Navigate to [https://copilotstudio.microsoft.com](https://copilotstudio.microsoft.com) and sign in with your Microsoft 365 work or school account.

   > [!WARNING]
   > You must be in a tenant where Copilot Studio is enabled.

1. Make sure you are in your developer environment and select **Agent**.

    ![Create blank agent](assets/1.5_01_SelectAgent.png)

1. Enter the following as the name of the agent.

   ```text
   Offer Management Agent
   ```

   Next, enter the following as the instructions of the agent.

   ```text
   You are the Offer Management Agent, an HR onboarding agent that automates offer workflows.

   Your goal is to streamline the process of sending, signing, and finalizing Employment Agreements and Offer Letters using Docusign Workflow Builder.

   ## Docusign Workflow Builder

   Assist users by identifying the correct workflow, collecting required inputs, and triggering document delivery to recipients.

   Be concise, professional, and proactive. Ask for missing information before proceeding, and confirm actions before triggering workflows.

   If the request cannot be fulfilled using available workflows or tools, clearly explain the limitation and suggest next steps.

   If the user needs to provide missing information, provide the field name from the variables of the workflow with a corresponding field description.

   Confirm with the user that all information is correct before triggering the workflow. If the user confirms the information is correct, trigger the workflow. If the user confirms the information is incorrect, do not trigger the workflow.
   ```

   ::: tip Purpose of the instructions
   These instructions define the Offer Management Agent’s role, tone, and decision flow so it can collect required workflow inputs, confirm accuracy with the user, and only trigger the Docusign Workflow Builder workflow when all information is complete and approved.
   :::

    Next, we'll add the **Docusign MCP Demo** tool to our agent. Under **Tools** select the **plus icon** on the right-hand side panel.

    ![Select Tools](assets/1.5_02_AgentNameInstructionsAddTool.png)

1. Select the **Model Context Protocol (MCP)** category to filter to the list of MCP tools. Scroll down and select **Docusign MCP Demo**.

    ![Select Docusign MCP Demo](assets/1.5_03_SelectDocusignMCPDemo.png)

   ::: warning
   In the new UI, searching for `Docusign MCP Demo` or `docusign` may return **Docusign MCP**, which is the production tool.

   ![Do not search and select Docusign MCP](assets/1.5_03_Warning_DoNotSearch.png)

   _Do not_ select Docusign MCP. Clear your search field and scroll down and choose **Docusign MCP Demo** instead.
   :::

1. Select **Docusign MCP Server**.

    ![Select Docusign MCP Server](assets/1.5_04_SelectDocusignMCPServer.png)

1. Next you'll need to add a new connection for your Docusign developer user account. Select the **chevron** icon and select **Create new connection**.

    ![Select create new connection](assets/1.5_05_SelectCreateNewConnection.png)

1. Select **Create** to enter your Docusign developer user account credentials.

    ![Select Create](assets/1.5_06_SelectCreate.png)

1. Enter your username and password for your Docusign developer user account.

    ![Enter credentials](assets/1.5_07_LogIn.png)

   You may be asked to verify your identity via an SMS code or a phone call. Once you complete the verification, continue to the next step.

1. The connection is created and you'll see a green tick icon. Select **Next**.

    ![Select Next](assets/1.5_08_ConnectionCreated.png)

1. You'll see a list of supported actions for the Docusign MCP Demo tool. Scroll down and notice how there's workflow operations, these will be used by the agent orchestration later when testing our agent. Select **Confirm**.

    ![Select Confirm](assets/1.5_09_ReviewDocusignMCPDemoCapabilities.png)

1. The tool is now added to our agent.

   Next, change the solution for this agent under **Settings**. Select the ellipsis icon on the upper right and select **Settings**.

   ![Select Settings](assets/1.5_10_SelectSettings.png)

1. Change the solution to the new solution you created earlier for this agent by selecting it in the drop-down field.

   ![Select target solution](assets/1.5_11_Solution.png)

1. Now **save** and test the agent. Select the **Preview** tab, enter the following and submit.

   ```text
   Send an employment agreement and offer letter to [employee name], [email address]
   ```

   - Replace the `[employee name]` with a name.
   - Replace the `[email address]` placeholder using an email address for the employee (use the same one for the Employee participant when you manually tested the workflow earlier in Docusign).

    ![Test agent](assets/1.5_12_TestOfferManagementAgent.png)

1. The orchestrator now uses the **Docusign MCP Demo** tool and the instructions you added to find the workflow requirements for **Send Employment agreement and offer letter**.

   It first verifies your Docusign developer account, then locates the correct workflow, and finally returns the required start-step variables you configured.

    ![Orchestrator in progress](assets/1.5_13_OrchestratorInProgress.png)

1. Since you only provided the employee name and the employee email address, the agent response prompts you to provide the information needed for the workflow.

    ![Workflow trigger requirements identified](assets/1.5_14_WorkflowTriggerRequirementsIdentified.png)

1. Enter the below text and submit.

   ```text
   employee position is [position], effective date and start date is [MMMM d], salary is [salary dollar amount], reporting to [manager full name] [manager email address], and due signed date is [MMMM d]
   ```

   - Replace the `[position]` placeholder with job position such as `Power Platform Engineer`.
   - Replace the `[MMMM d]` placeholder with the full month name and day such as `August 25`. NOTE: `d` means no leading zero (August 5).
   - Replace the `[salary dollar amount]` with a dollar amount value.
   - Replace the `[manager full name]` with a name of the manager.
   - Replace the `[manager email address]` placeholder using an email address for the manager (use the same one for the Hiring Manager participant when you manually tested the workflow earlier in Docusign).

    ![Variables provided](assets/1.5_15_VariablesProvided.png)

1. The agent then provides a summary of the variables based on the information you provided and asks for your confirmation that the information is correct. This is based on the instruction previously entered when you created the agent,

   _"Confirm with the user that all information is correct before triggering the workflow. If the user confirms the information is correct, trigger the workflow. If the user confirms the information is incorrect, do not trigger the workflow."_

    ![Review mapped information](assets/1.5_16_ReviewMappedInformation.png)

1. Enter the below text and submit.

   ```text
   Yes, information is correct.
   ```

   The orchestrator will next trigger the workflow.

    ![Trigger workflow](assets/1.5_17_ConfirmInformationIsCorrect.png)

1. When the workflow has been triggered, you'll see confirmation and a summary.

    ![Workflow successfully triggered](assets/1.5_18_WorkflowSuccessfullyTriggered.png)

1. Follow the same steps of completing the workflow.

    - First, go to the inbox for the Employee participant email address and open the Docusign message. It should have the subject `***Test Email*** Review and complete workflow`. Select **Review**, complete the web form, then sign the agreements.

      ::: warning Check your spam folder
      Check your spam folder for the email if you don't see it in your main Inbox.
      :::

    - Navigate to the email Inbox of the email address you entered for the Hiring Manager participant and open the Docusign email to sign the agreements.
    - Lastly the final signed agreements should be uploaded to SharePoint.

        ![Document uploaded to SharePoint](assets/1.5_19_SignedAgreementsUploadedToSharePoint.png)

        ![Review agreements](assets/1.5_20_ReviewAgreements.png)

1. You can also review the workflow instances in the Docusign developer portal, and you'll see progress status as **Completed**.

    ![Workflow progress status](assets/1.5_21_WorkflowProgressStatus.png)

**Congrats!** 🥳 You've now learned how to invoke a Workflow Builder workflow from your agent through the **Docusign MCP Demo** tool.

If you want to continue to the bonus exercise of this lab, feel free to do so.

## 🧪 Lab 1.6 (Optional): Add the Work IQ Calendar tool for multi-MCP capabilities {#lab-1-6-add-work-iq-calendar-tool}

If your tenant and user has been enabled to use Frontier features, try the following exercise for your agent to combine the power of a first-party Microsoft MCP server (Work IQ Calendar) with a third-party service MCP server (Docusign MCP Demo).

The agent will be updated to automatically create an Outlook meeting in your calendar to dedicate time in reviewing the HR pre-onboarding checklist. To achieve this, we'll use the Work IQ Calendar (Preview) tool.

::: tip IT Admin Guide to enabling Frontier
Refer to the [IT Admin Guide](https://www.microsoft.com/microsoft-365-copilot/frontier-it-admins) which outlines the requirements and details of enabling Frontier in your tenant.
:::

1. Update the agent instructions to include details in creating an Outlook meeting in your calendar after the Workflow Builder workflow has successfully triggered. Enter the following as a new line in the second paragraph of the instructions.

   ```text
   When the workflow has successfully been triggered, schedule an Outlook meeting.
   ```

    ![Update agent instructions](assets/1.6_01_UpdateInstructions.png)

1. Next, we'll add a section for scheduling the Outlook meeting where it will specify to follow a skill.

    ::: tip Why use a skill in addition to agent instructions?
   Agent instructions define what the agent should do and when to do it.
   A skill defines how to do a specific task reliably and consistently.
   Using both gives you better control: orchestration from instructions, repeatable execution from the skill.
   :::

   Enter the following text below the **Docusign Workflow Builder** section.

   ```text
   ## Schedule Outlook meeting
   When the workflow has successfully been triggered, use the `outlook-pre-onboarding-checklist-meeting` skill to create the Outlook meeting.
   ```

    ![Update instructions to include Outlook meeting section](assets/1.6_02_UpdateInstructionsToIncludeOutlookMeetingHeader.png)

    Make sure to select **Save** after updating the agent instructions.

1. On the right-hand side panel, under **Skills** select the **plus icon** to upload a skill file.

    ![Select Add Skill icon](assets/1.6_03_AddSkill.png)

1. Select the option to upload a file.

    ![Upload a file](assets/1.6_04_ClickToUploadSkill.png)

1. Download the sample skill package using the button below.

    <download-files path="special-ops/docusign-mcp/assets/sample-skill/sample-skill-outlook-pre-onboarding-checklist-meeting.zip" />

    Download `sample-skill-outlook-pre-onboarding-checklist-meeting.zip` and upload that ZIP directly into the agent. Do not extract it; the package already contains `SKILL.md`.

    ![Select Skill file](assets/1.6_05_SelectSkillFile.png)

1. The skill has now been added to the agent.

    ![Skill added](assets/1.6_06_SkillAdded.png)

    ::: tip What this skill does
   This skill is an automation recipe for the agent to schedule an Outlook pre-onboarding meeting after a Docusign Workflow Builder workflow succeeds.

   It tells the agent to:

   - Wait until the Docusign workflow trigger is confirmed successful.
   - Use the employee full name and effective date from workflow context.
   - Create a 1-hour Outlook meeting through Work IQ Calendar (Preview).
   - Schedule it exactly 2 workdays before the effective date.
   - Use the user’s work hours and force the timezone to UTC+12 Auckland/Wellington.
   - Set the subject to: Review pre-onboarding checklist for [Employee Full Name].
   - Confirm success, or return error details if meeting creation fails.
   - Never ask the user for extra meeting input.

   So the value is consistency: the agent can reliably run the same follow-up scheduling logic every time without manual prompting.

   Note: You can update the skill where relevant such as timezone details.
   :::

1. Next, add the **Work IQ Calendar (Preview)** tool. Under **Tools** select the **plus icon** on the right-hand side panel.

    ![Add new tool](assets/1.6_07_AddWorkIQCalendarTool.png)

1. Select the **Model Context Protocol (MCP)** category to filter to the list of MCP tools. Select the **Work IQ Calendar (Preview)** tool.

    ![Select Work IQ Calendar (Preview tool)](assets/1.6_08_SelectWorkIQCalendar.png)

1. Create a connection for the tool using your signed in user account for your developer environment. Select the **chevron icon** and select **Create new connection**.

    ![Select Create new connection](assets/1.6_09_CreateNewConnection.png)

1. Select **Create**.

    ![Select Create](assets/1.6_10_SelectCreate.png)

1. Select your signed in user account and select **Next**.

    ![Select next](assets/1.6_11_SelectNext.png)

1. You'll see a list of supported actions for the **Work IQ Calendar (Preview)** tool. Select **Confirm** to add the tool.

    ![Select confirm](assets/1.6_12_ReviewAndConfirm.png)

1. The tool is now added and the agent can be tested next. Select **Preview** and start a new test session by selecting the **+ New chat**. Enter the below text and submit.

   ```text
   Send an employment agreement and offer letter to [employee name], [email address]
   ```

   - Replace the `[employee name]` with a name.
   - Replace the `[email address]` placeholder using an email address for the employee (use the same one for the Employee participant when you manually tested the workflow earlier in Docusign).

    ![Test Work IQ Calendar tool](assets/1.6_13_TestWorkIQCalendarTool.png)

1. Next, the orchestrator will invoke the **Docusign MCP Demo** tool to retrieve the workflow and the workflow trigger requirements. Repeat the same step in the previous exercise by entering the below text, replacing the placeholders and submitting the information to the agent.

   Use an effective date and start date that fall on a Monday or Tuesday to confirm that the instruction is followed: creating the meeting 2 working days before the date.

   ```text
   employee position is [position], effective date and start date is [MMMM d], salary is [salary dollar amount], reporting to [manager full name] [manager email address], and due signed date is [MMMM d]
   ```

1. After you provide the required information to trigger the workflow, the orchestrator confirms the workflow was triggered successfully and then processes the skill, invoking the **Work IQ Calendar (Preview)** tool to create the Outlook meeting 2 working days before the Effective Date.

    ![Loaded skill](assets/1.6_14_LoadedSkill.png)

1. After the Outlook meeting has been created, a summary will be provided.

   First, you'll see confirmation that the workflow successfully triggered.

    ![Workflow successfully triggered](assets/1.6_15_CompletionOfWorkflowAndOutlookMeeting.png)

1. The second confirmation provides details of the Outlook meeting that has been created.

    ![Confirmation of Outlook meeting](assets/1.6_16_ConfirmationOfOutlookMeeting.png)

1. Navigate to your Outlook calendar and find the meeting invite. In the screenshot below the meeting has been created for the Friday, 2 working days before the Tuesday effective date.

    ![View Outlook meeting in calendar](assets/1.6_17_OutlookCalendar.png)

1. You can also dive deeper into the reasoning applied by the orchestrator by expanding the skill details in the test session.

   By expanding the loaded skill details, you can see exactly how the orchestrator applied the skill rules:

   - it calculated the meeting date as 2 workdays before the Effective Date
   - selected the configured time zone and work-hour start time
   - built the subject with the employee name
   - and then executed the CreateEvent action

    ![Agent reasoning using skill](assets/1.6_18_AgentReasoningUsingSkill.png)

1. After you completed the workflow process, once again the signed document will be uploaded to SharePoint.

## ✅ Mission Accomplished {#mission-accomplished}

Congrats, agent — you've completed the **Docusign MCP** mission! You have now mastered the following skills:

✅ **Workflow Foundation**: Built a Docusign Web Form, created reusable Document Templates, and assembled a full Workflow Builder process end-to-end

✅ **Process Validation**: Manually tested the workflow by running a real instance, collecting participant input, capturing signatures, and confirming document delivery

✅ **Agent Integration**: Built a custom Copilot Studio agent and connected the Docusign MCP Demo tool to trigger Workflow Builder from natural language

✅ **Input-Oriented Orchestration**: Provided workflow start variables through conversational prompts and validated successful workflow invocation

✅ **Multi-MCP Extension (Bonus)**: Added Work IQ Calendar (Preview) to combine first-party Microsoft and third-party MCP tools in one agent experience

## 🏅 Claim your completion badge {#claim-your-completion-badge}

<!-- markdownlint-disable-next-line MD033 -->
<p align="center"><img src="../assets/Academy-Docusign_Badge.png" alt="Docusign MCP Badge" width="220" /></p>

Congrats, agent — mission accomplished! Now it's time to claim your badge.

Simply submit the badge request form and answer all required questions:

[https://aka.ms/agent-academy-special-ops/docusign-mcp/form](https://aka.ms/agent-academy-special-ops/docusign-mcp/form)

<!--[https://aka.ms/tbc](https://aka.ms/tbc) -->

Once your submission is reviewed, you will receive an email from Global AI Community with instructions to claim your badge.

> [!TIP]
> If you do not see the email, check your spam or junk folder.

## 📚 Tactical Resources {#tactical-resources}

🔗 [Docusign for developers](https://developers.docusign.com)

🔗 [Create developer account](https://www.docusign.com/developers/sandbox)

🔗 [Build with Docusign MCP Server](https://developers.docusign.com/platform/mcp-server/microsoft-copilot)

🔗 [Docusign MCP Overview](https://support.docusign.com/s/document-item?language=en_US&bundleId=ug3906200f-95c6-4a6b-90b1-f928c85961c6&topicId=con1438e5dd-ae84-435f-8b2e-028117782a6d.html&_LANG=enus)

🔗 [Connect a Docusign account to Copilot Studio](https://support.docusign.com/s/document-item?language=en_US&elqTrackId=92dab223e52c434bb4d719365ec42701&elqTrack=true&bundleId=ug3906200f-95c6-4a6b-90b1-f928c85961c6&topicId=tsk6894353c-47ad-4dc9-8867-8a26ea379a65.html&_LANG=enus)

📖 [Microsoft MCP server certification](https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-certification)

📖 [Docusign MCP Demo connector (Microsoft Learn)](https://learn.microsoft.com/en-us/connectors/docusignmcpdemo/)

<analytics-tag section="special-ops" mission="docusign-mcp" />
