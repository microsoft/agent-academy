---
hide: true
preview: true
prev:
  text: Recruit overview
  link: /recruit-nextgen
next:
  text: Introduction to Agents
  link: /recruit-nextgen/01-introduction-to-agents
short-description: 'Set up your dev environment, Copilot Studio trial, and SharePoint site'
difficulty: 1
codename: OPERATION DEPLOYMENT READY
time: 30
tags:
  - setup
products:
  - copilot-studio
  - sharepoint
  - microsoft-365
industries:
  - it
created-date: 2025-08-20
last-edited-date: 2026-07-16
---

# 🚨 Mission 00: Course Setup {#mission-00-course-setup}

<mission-meta />

## 🎯 Mission Brief {#mission-brief}

Welcome to the first mission of your training as a Copilot Studio Agent.  
Before you can start building your first AI agent, you need to establish your **field-ready development environment**.

This briefing outlines the systems, access credentials, and setup steps required to successfully operate in the Microsoft 365 ecosystem.

## 🔎 Objectives {#objectives}

Your mission includes:

1. Getting a Microsoft 365 account  
1. Gaining access to Microsoft Copilot Studio  
1. (Optional) Securing a Microsoft 365 Copilot license for production publishing
1. Creating a developer environment as your Copilot Studio environment to build in  
1. Creating a SharePoint site to serve as your data source in later missions

> [!IMPORTANT]
> **Already have access to Microsoft 365, Power Platform, and Copilot Studio?**
> Steps 1–4 below walk you through creating a **new trial environment from scratch**. If you already have a Microsoft 365 business tenant with access to Power Platform and Copilot Studio, you can **skip directly to [Step 5: Create new SharePoint site](#step-5-create-new-sharepoint-site)**. Steps 1–4 are only needed if you want to set up a dedicated trial environment to test these capabilities.

## 🔍 Prerequisites {#prerequisites}

Before you begin, ensure you have:

1. A **work or school email address** (personal @outlook.com, @gmail.com, etc., are not supported).
1. Access to the internet and a modern browser (Edge, Chrome, or Firefox recommended).  
1. Basic familiarity with Microsoft 365 (for example, signing into Office apps or Teams).  
1. (Optional) A credit card or billing method if you plan to purchase paid licenses.

## 🧪 Trial Environment Setup (Steps 1–4) {#trial-environment-setup-steps-14}

## Step 1: Get a Microsoft 365 Account

Copilot Studio resides within Microsoft 365, so you need a Microsoft 365 account to access it. You can either use an existing account if you have one or follow these steps to get an appropriate license:

1. **Acquire a Paid Microsoft 365 Business Subscription**  
   1. Go to the [Microsoft 365 Business Plans and Pricing Page](https://www.microsoft.com/microsoft-365/business/microsoft-365-plans-and-pricing)
   1. The cheapest option to get you started is the Microsoft 365 Business Basic plan. Select `Try for free` and walk through the guided form to fill in your subscription and account details and payment information.
   ![Microsoft 365 Signup](./images/m365-freetrial.png)
   1. Once you have your new account, login.

> [!TIP]
> If you plan to publish agents into Microsoft 365 Copilot Chat or connect to organizational data (SharePoint, OneDrive, Dataverse), a Microsoft 365 Copilot license is required. This is an add-on license which you can learn more about [on the licensing site](https://www.microsoft.com/microsoft-365/copilot#plans)

## Step 2: Start a Copilot Studio Trial

Once you have your Microsoft 365 Tenant, you need to get access to Copilot Studio. You can get a free 30 day trial by following these steps:

1. Navigate to [aka.ms/TryCopilotStudio](https://aka.ms/TryCopilotStudio).
1. Enter the email address from the new account you configured in the previous step and select `Next`.  

    ![Microsoft 365 Signup](./images/mcs-trial-screen.png)

1. It should recognize your account. Select `Sign In`.

    ![Microsoft 365 Signup](./images/mcs-trial-signin.png)  

1. Select `Start Free Trial`.

    ![Microsoft 365 Signup](./images/mcs-start-trial.png)

> [!INFO] Trial Notes
>
> 1. The free trial provides **full Copilot Studio capabilities**.
> 1. You will receive email notifications about your trial expiration. You can extend the trial in 30-day increments (up to 90 days of agent runtime).  
> 1. If your tenant administrator disabled self-service sign-up, you’ll see an error—contact your Microsoft 365 admin to re-enable it.

## Step 3: Create new developer environment

### Sign up for a Power Apps Developer Plan

Using the same Microsoft 365 tenant in Step 1, sign up for a Power Apps Developer Plan to create a free development environment to build and test with Copilot Studio.

1. Sign up on the [Power Apps Developer Plan website](https://aka.ms/PowerAppsDevPlan).

    - Enter your email address
    - Tick the checkbox
    - Select **Start free**

    ![Sign up for Power Apps Developer Plan](images/0.3_01_SignUp.png)

1. After signing up for the Developer Plan, you'll be redirected to [Power Apps](https://make.powerapps.com/). The environment uses your name, for example **Adele Vance's environment**. If there's already an environment with that name, the developer new environment is named **Adele Vance's (1)** environment.

    Use this developer environment in Copilot Studio when completing the labs.

> [!NOTE]
> If you are using an existing Microsoft 365 account and did not create one in Step 1, for example - using your own account in your work organization, your IT administrator (or the equivalent) team who manages your tenant/environments might have turned off the sign up process. In this case, please contact your administrator, or create a test tenant as per Step 1.
>
> If you are using an existing environment from your organization, ensure it is **not** a managed environment. Managed environment restrictions can prevent certain features — such as adding Power Automate flows as agent tools — from working correctly.

## Step 4: Enable Ability to Publish with the Copilot Studio Trial

The Copilot Studio trial recently changed and it does not allow publishing of agents by default. To enable publishing, you have to add yourself to the Copilot Studio Authors role in the Power Platform Admin Center.

First, you need a security group to hold everyone you want to be able to publish. This is what you'll associate with the Copilot Studio Authors role.

1. Navigate to [admin.cloud.microsoft](https://admin.cloud.microsoft)
1. Expand the **Teams & groups** tab and select **Active teams & groups**

    ![Teams and groups](images/admin-teams-groups.png)

1. Select the **Security groups** tab and select **Add a security group**

    ![Security Group](images/admin-securitygroup-tab.png)

1. Give the security group a name like **AgentCreators** and select the **Next** button.

    ![Security Group Name](images/admin-securitygroup-name.png)

1. Verify the name and select **Create group**

    ![Create group](images/admin-creategroup.png)

1. Select your newly created security group from the list

    ![Select group](images/admin-selectgroup.png)

1. Select the **members** tab and select **view all and manage members**

    ![Add members](images/admin-viewmembers.png)

1. Select **add members**

    ![Add members](images/admin-addmember.png)

1. Select your name from the list and click **Add** then **Add** again

    ![Select yourself](images/admin-selectname.png)

1. Navigate to **admin.powerplatform.com**
1. Select the **manage** tab

    ![Manage](images/pp-admin-managetab.png)

1. Select the **tenant settings** tab

    ![Tenant Settings](images/pp-admin-tenantsettings.png)

1. Select the ***copilot studio authors** option

    ![Authors](images/pp-authors.png)

1. Select the **pencil icon**

    ![Pencil](images/pp-pencil.png)

1. Select your security group from the list and click **Done**

    ![Select Security Group](images/pp-securitygroup.png)

1. Verify your security group is there and click **Save**

    ![Save](images/pp-save.png)

## 🔧 Required Setup (Everyone) {#required-setup-everyone}

The following steps are required regardless of whether you're using a trial or an existing environment.

## Step 5: Create new SharePoint site

A new SharePoint site is required for completing `Mission 05 - Mission 05: Build a custom engine agent`. In this step, you'll also create a new list in that site to store available devices.

1. Select the waffle icon in the top-left corner of [Power Apps](https://make.powerapps.com/) or the [Microsoft 365 admin center](https://admin.cloud.microsoft) to open the app menu, then select **SharePoint**.

    ![Select SharePoint in Power Apps](images/0.5_01_PowerApps.png)

    ![Select SharePoint in Microsoft 365 Admin Center](images/0.5_02_MAC.png)

1. After SharePoint loads, select **Build** in the left navigation menu, then select **Site** to create a new SharePoint site.

    ![Create site](images/0.5_03_SelectSite.png)

1. A dialog appears to guide site creation. Under the **Team site** option, select **IT help desk**.

    ![Select IT help desk site template](images/0.5_04_SelectITHelpDeskSiteTemplate.png)

1. Select **Use template** to create a new SharePoint site from the IT help desk template.

    ![Use template](images/0.5_05_SelectUseTemplate.png)

1. Enter your site details. Example:

    | Field | Value |
    | --- | --- |
    | Site name | Contoso IT |
    | Site description | Copilot Studio Agent Academy |
    | Site address | ContosoIT |

    Select **Create site**.

    ![Set up your site](images/0.5_06_SetUpSite.png)

1. After selecting **Create site**, SharePoint may take a few seconds to finish provisioning. In the meantime, you can optionally add users by entering email addresses in the **Add members** field.

    Once you see confirmation that the site is ready, select **Go to site**.

    ![Select go to site](images/0.5_07_SelectGoToSite.png)

1. Next, create a list to store device information. On the site's **Home** tab, select **+ New**, then select **List**.

    ![Create new list](images/0.5_08_CreateNewList.png)

1. Under the **Import from** section, select **Excel**.

    ![Select Excel](images/0.5_09_ImportFromExcel.png)

1. Select **Upload file**.

    ![Select upload file](images/0.5_10_UploadFile.png)

1. Download the following ZIP file, extract it, then upload `EmployeeAssets.xlsx` to the list by selecting **Open**.

    <download-files path="recruit-nextgen/00-course-setup/assets/employee-assets" label="Download Excel .zip file for List" />

    ![Select file](images/0.5_11_SelectFile.png)

1. Enter `EmployeeAssets` as the list name, select the **Show list in site navigation** checkbox, then select **Create**.

    ![Select Create](images/0.5_12_CreateList.png)

1. Add a new column with the type `Hyperlink`. Scroll across the list, select **+ Add column**, select **Hyperlink**, then select **Next**.

    ![Add new hyperlink column](images/0.5_13_AddNewHyperlinkColumn.png)

1. Enter the following information for the column and select **Save**.

    | Field | Value |
    | --- | --- |
    | Name | Image URL |
    | Description | The image URL of the employee asset |

    ![Create a column](images/0.5_14_CreateAColumn.png)

1. Copy each value from the **Image** column to the **Image URL** column. Select **Edit in grid view**.

    ![Select Edit in Grid View](images/0.5_15_SelectEditInGridView.png)

1. In the first row (the first item in the list), double-click the **Image** column and copy the value. Press the `Esc` key to exit editing.

    ![Double click column](images/0.5_16_DoubleClickColumn.png)

1. Double-click the corresponding **Image URL** column, paste the value in the **Link** field, then select the checkmark icon to save.

    ![Paste value into image URL column](images/0.5_17_PasteValueIntoImageURLColumn.png)

1. Repeat the same steps for the remaining three rows in the list.

1. Lastly, delete the Image text column. Select the column, then select **Column settings** followed by **Edit**.

    ![Select Edit](images/0.5_18_EditColumnSettings.png)

1. Select **Delete**.

    ![Select Delete](images/0.5_19_SelectDelete.png)

1. A confirmation dialog appears. Select **Delete** to confirm removing the column from the list.

    ![Confirm Deletion](images/0.5_20_ConfirmDeletion.png)

## ✅ Mission Complete {#mission-complete}

You’ve successfully:

- Set up a Microsoft 365 dev environment  
- Activated your Copilot Studio trial  
- Created a SharePoint site for grounding agents  
- Populated the Devices list for use in future missions

You're officially cleared to begin your **Recruit-level agent training** in [Lesson 01](../01-introduction-to-agents/index.md).  

<analytics-tag section="recruit" mission="00-course-setup" />
