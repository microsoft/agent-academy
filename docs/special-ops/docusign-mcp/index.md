---
tags: 
    - MCP
    - Copilot Studio
---
# Microsoft Copilot Studio ➕ Docusign MCP

Welcome, agent. Your objective is simple: reuse what already works. Connect Docusign MCP server to your Copilot Studio agent, and invoke a Maestro workflow to execute an _already-operational_ document automation workflow. You gather the intel. Maestro runs the op. Minimal new logic. Maximum leverage.

## 🎯 Mission Brief

TBC

## 🔎 Objectives

In this mission, you'll learn:

1. How to create Docusign Web Forms, Document Templates and a Maestro workflow
1. How to add the Docusign MCP server as a tool to your agent
1. How to add the Outlook MCP server as a tool to your agent
1. How to invoke the Maestro workflow from the agent
1. How to provide inputs in natural language for the Maestro workflow

## ❓ What is Docusign?

TBC

### Why should I use it?

TBC

## 🧪 Docusign MCP lab

For this Special Ops mission, we're going to:

- 1.0 Create templates and a Maestro workflow in docusign
- 2.0 Build an agent and add the Docusign MCP server as a tool in Copilot Studio
- 3.0 Add the Outlook MCP server as a tool in Copilot Studio
- 4.0 Test end-to-end

### ✅ Prerequisites

To complete this Special Ops mission, you'll need the following outlined in this section.

#### Docusign

- Sign up for a free **Docusign developer account**
  - Browse to [https://developers.docusign.com](https://developers.docusign.com)
  - Create a new **App and key** under **Admin**
  - In your **App and key**,
    - add a new **Secret** and _securely_ save the value as you'll be copying and pasting the value when we add the Docusign MCP server as a tool in a later lab exercise
    - scroll down to the **Allowed HTTP Methods** section and tick all the checkboxes for `GET`, `POST`, `PUT`, `DELETE` and `HEAD`
    - **Save** your app and key

#### Microsoft

- Copilot Studio license
- Access to a Microsoft Power Platform environment
- Administrative permissions to create solutions and agents
- A SharePoint site where you have permissions to create a new folder in the Documents library - this will be used in a Maestro workflow step

> [!TIP] Prerequisites help:
> If you need help getting a Copilot Studio license, please reference the [Recruit Course Setup lab](./../../recruit/00-course-setup/index.md) which walks you through setting up a Power Platform environment with a Copilot Studio trial.

#### Two email addresses

You'll need two different email addresses to complete this lab:

- Email address to use as the employee
- Email address to use as the hiring manager

### 1.1 Create a Docusign Web Form

> [!IMPORTANT]
> You need a Docusign developer account to complete these Docusign lab exercises. Sign up for free at [https://developers.docusign.com](https://developers.docusign.com)

1. From the Home page of Docusign developers portal, select **Templates**.

    ![Select Templates](assets/1.1_01_Templates.png)

1. On the left hand side navigation pane, select **Start**. Select **Web Forms** followed by **Create Web Form**.

    ![Select Create Web Forms](assets/1.1_02_CreateWebForm.png)

1. We'll now be asked how we want to create our Web Form. Select **Start From Scratch**.

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

1. We're now going to add fields to this page. Select the **plus icon** below the page title section in the middle of the designer.

    ![Select plus icon to add a field](assets/1.1_07_AddField.png)

1. Select **Text Field**.

    ![Select Text Field](assets/1.1_08_SelectTextField.png)

1. You'll now see different attributes of the field. The following are the attributes of the field to update,

    | Field name    | Field description | Required field | API reference name    |
    |---------------|-------------------|----------------|-----------------------|
    | `First Name`  | `Your first name` | Yes            | `TextBox_FirstName`   |

    ![Update field attributes](assets/1.1_09_FirstNameField.png)

    ![Update field attributes](assets/1.1_10_FirstNameField.png)

1. We'll repeat the same steps to add the remaining **Text Fields**. Select the **plus icon** and add new **Text Fields** using the following attributes for each one,

    | Field name    | Field description  | Required field | API reference name   |
    |---------------|--------------------|----------------|----------------------|
    | `Middle Name` | `Your middle name` | No             | `TextBox_MiddleName` |
    | `Surname`     | `Your surname`     | Yes            | `TextBox_Surname`    |
    | `Full Name`   | `Your fullname`    | Yes            | `TextBox_FullName`   |

    After the **Text Fields** have been added, select the **plus icon** on the left hand side pane and select **New Blank Page**.

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

    We'll repeat the same steps to add the remaining **Text Fields**. Select the **plus icon** and add new **Text Fields** using the following attributes for each one,

    | Field name    | Field description  | Required field | API reference name   |
    |---------------|--------------------|----------------|----------------------|
    | `Middle Name` | `Your middle name` | No             | `TextBox_MiddleName` |
    | `Surname`     | `Your surname`     | Yes            | `TextBox_Surname`    |
    | `Full Name`   | `Your fullname`    | Yes            | `TextBox_FullName`   |

    ![Update Address page details](assets/1.1_13_AddressPage.png)

1. After the **Text Fields** have been added, select the **Thank you page** on the left hand side pane.

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

1. Great, you've now finished configuring the Web Form. Let's take a look at what the Web Form will look like for the end user, select **Preview**.

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

1. A confirmation modal will appear with an **Access setting** field. We'll leave this as **Public** as the web form we'll be used in a step in the Maestro workflow we'll create in a later lab exercise. Select **Activate**.

    ![Select Activate](assets/1.1_24_Activate.png)

1. A confirmation message will appear to let you know that the web form has been successfully activated. Select **Go to Web Forms**.

    ![Select Go to Web Forms](assets/1.1_25_GoToWebForms.png)

1. The Web Form will appear with a status of **Active**. Hooray, you've built a web form! 👏🏻

    ![Web Form showing as Active](assets/1.1_26_ActiveWebForm.png)

> [!NOTE]
> 🚧 This mission is under construction. Check back soon for the full walkthrough.
