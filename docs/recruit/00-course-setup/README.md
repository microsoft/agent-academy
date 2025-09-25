# 🚨 Mission 00: Course Setup

## 🕵️‍♂️ CODENAME: `OPERATION DEPLOYMENT READY`

> **⏱️ Operation Time Window:** `~30 minutes`  

## 🎯 Mission Brief

Welcome to the first mission of your training as a Copilot Studio Agent.  
Before you can start building your first AI agent, you need to establish your **field-ready development environment**.

This briefing outlines the systems, access credentials, and setup steps required to successfully operate in the Microsoft 365 ecosystem.

## 🔎 Objectives

Your mission includes:

1. Getting a Microsoft 365 account  
1. Gaining access to Microsoft Copilot Studio  
1. (Optional) Securing a Microsoft 365 Copilot license for production publishing
1. Creating a developer environment as your Copilot Studio environment to build in  
1. Creating a SharePoint site to serve as your data source in later missions

---

## 🔍 Prerequisites

Before you begin, ensure you have:

1. A **work or school email address** (personal @outlook.com, @gmail.com, etc., are not supported).
1. Access to the internet and a modern browser (Edge, Chrome, or Firefox recommended).  
1. Basic familiarity with Microsoft 365 (for example, signing into Office apps or Teams).  
1. (Optional) A credit card or billing method if you plan to purchase paid licenses.

---

## Step 1: Get a Microsoft 365 Account

Copilot Studio resides within Microsoft 365, so you need a Microsoft 365 account to access it. You can either use an existing account if you have one or follow these steps to get an appropriate license:

1. **Acquire a Paid Microsoft 365 Business Subscription**  
   1. Go to the [Microsoft 365 Business Plans and Pricing Page](https://www.microsoft.com/microsoft-365/business/microsoft-365-plans-and-pricing)
   1. The cheapest option to get you started is the Microsoft 365 Business Basic plan. Select `Try for free` and walk through the guided form to fill in your subscription and account details and payment information.
   ![Microsoft 365 Signup](./images/m365-freetrial.png)
   1. Once you have your new account, login.

    !!! Tip
        If you plan to publish agents into Microsoft 365 Copilot Chat or connect to organizational data (SharePoint, OneDrive, Dataverse), a Microsoft 365 Copilot license is required. This is an add-on license which you can learn more about [on the licensing site](https://www.microsoft.com/microsoft-365/copilot#plans)

---

## Step 2: Start a Copilot Studio Trial

Once you have your Microsoft 365 Tenant, you need to get access to Copilot Studio. You can get a free 30 day trial by following these steps:

1. Navigate to [aka.ms/TryCopilotStudio](https://aka.ms/TryCopilotStudio).  
1. Enter the email address from the new account you configured in the previous step and select `Next`.  
![Microsoft 365 Signup](./images/mcs-trial-screen.png)
1. It should recognize your account. Select `Sign In`.
![Microsoft 365 Signup](./images/mcs-trial-signin.png)  
1. Select `Start Free Trial`.
![Microsoft 365 Signup](./images/mcs-start-trial.png)

!!! info "Trial Notes"  
     1. The free trial provides **full Copilot Studio capabilities**.
     1. You will receive email notifications about your trial expiration. You can extend the trial in 30-day increments (up to 90 days of agent runtime).  
     1. If your tenant administrator disabled self-service sign-up, you’ll see an error—contact your Microsoft 365 admin to re-enable it.

---

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

!!! Note
    If you are using an existing Microsoft 365 account and did not create one in Step 1, for example - using your own account in your work organization, your IT administrator (or the equivalent) team who manages your tenant/environments might have turned off the sign up process. In this case, please contact your administrator, or create a test tenant as per Step 1.

---

## Step 4: Create new SharePoint site

A new SharePoint site needs to be created  which will be used in [Lesson 06 - Create a custom agent using the conversational creation experience with Copilot and grounding it with your data](../06-create-agent-from-conversation/README.md#62-add-an-internal-knowledge-source-using-a-sharepoint-site).

1. Select the waffle icon on the top left hand side of Microsoft Copilot Studio to view the menu. Select SharePoint from the menu.

    ![Select SharePoint](images/0.4_01_SelectSharePoint.png)

1. SharePoint will load. Select **+ Create  site** to create a new SharePoint site.

    ![Create site](images/0.4_02_CreateSite.png)

1. A dialog will appear to guide you in creating a new SharePoint site. Select **Team site**.

    ![Team site](images/0.4_03_SelectTeamOrCommunicationSite.png)

1. In the next step, a list of Microsoft templates will load by default. Scroll down and select the **IT help desk** template.

    ![IT help desk template](images/0.4_04_SelectITHelpDeskTemplate.png)

1. Select **Use template** to create a new SharePoint site using the IT help desk template.

    ![Use template](images/0.4_05_SelectUseTemplate.png)

1. Enter information for your site. The following is an example:

    | Field | Value |
    | --- | --- |
    | Site name | Contoso IT |
    | Site description | Copilot Studio for Beginners |
    | Site address | ContosoIT |

    ![Site information](images/0.4_06_SiteDetails.png)

1. In the final step, a language can be selected for the SharePoint site. By default it will be **English**. Leave the Language as **English** and select **Create site**.

    ![Language and other options](images/0.4_07_LanguageOtherOptions.png)

1. The SharePoint site will provision for the next few seconds. In the mean time, you can choose to add other users to your site by entering their email address in the **Add members** field. When completed, select **Finish**.

    ![Select finish](images/0.4_08_SelectFinish.png)

1. The SharePoint site home page will next load. **Copy** the SharePoint site URL.

1. This template provides pages with sample data about various IT policies and two sample lists (Tickets and Devices).

### Use Devices SharePoint list

We will use the **Devices** list for in [Mission 07 - Add new topic with trigger and nodes](../07-add-new-topic-with-trigger/README.md#73-add-a-tool-using-a-connector).

### Add new column

Scroll to the far right in the list and select the **+ Add column** button.  Choose the **hyperlink** type, enter **Image** for the column name, and select add.

### Create sample data in Devices SharePoint list

You need to make sure you fill in this list with at least 4 sample data items and add one additional column to this list.  

When adding sample data, make sure that the following fields are filled out:

- Device photo - use the images from the [device images folder](https://github.com/microsoft/agent-academy/tree/main/docs/recruit/00-course-setup/images/device-images)
- Title
- Status
- Manufacturer
- Model
- Asset Type
- Color
- Serial Number
- Purchase Date
- Purchase Price,
- Order #
- Image - use the following links

|Device  |URL  |
|---------|---------|
|Surface Laptop 13     | [https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Laptop-13.png](https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Laptop-13.png)        |
|Surface Laptop 15     | [https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Laptop-15.png](https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Laptop-15.png)        |
|Surface Pro    | [https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Pro-12.png](https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Pro-12.png)        |
|Surface Studio    | [https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Studio.png](https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Studio.png)        |

---

## ✅ Mission Complete

You’ve successfully:

- Set up a Microsoft 365 dev environment  
- Activated your Copilot Studio trial  
- Created a SharePoint site for grounding agents  
- Populated the Devices list for use in future missions

You're officially cleared to begin your **Recruit-level agent training** in [Lesson 01](../01-introduction-to-agents/README.md).  

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/00-course-setup" alt="Analytics" />
