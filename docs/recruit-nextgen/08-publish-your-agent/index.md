---
hide: false
preview: false
prev:
  text: 'Automate with Workflows'
  link: '/recruit-nextgen/07-automate-with-workflows'
next:
  text: 'Understanding Licensing'
  link: '/recruit-nextgen/09-understanding-licensing'
short-description: 'Publish your agent'
difficulty: 1
codename: OPERATION ROLL OUT
time: 15
harness: github-copilot
credits: [200, 600]
tags:
  - publishing
products:
  - copilot-studio
  - microsoft-365
  - teams
industries:
  - it
created-date: 2026-08-05
last-edited-date: 2026-08-24
---

# 🚨 Mission 08: Publish Your Agent {#mission-08-publish-your-agent}

<mission-meta />

<mission-credits />

## 🎯 Mission Brief {#mission-brief}

Your **Contoso IT Concierge** has knowledge, tools, skills, and a workflow, but employees can only use it after you publish it to a channel. In this mission, you'll move the agent from the Copilot Studio authoring experience into the apps where employees already work.

You'll publish the agent to **Teams + Microsoft 365**, configure the listing employees see before adding it, and make it available in Microsoft 365 Copilot. Finally, you'll install and test the published agent in both Teams and Microsoft 365 Copilot to confirm that it behaves as expected outside the Copilot Studio preview.

Publishing is more than making the agent visible. The name, description, icon, and developer details help employees understand what the agent does and whether it fits their task. Channel configuration determines where they can discover and use it, while organization policies may affect availability and approval.

The final tests are equally important. Authentication, knowledge access, tools, and workflows can behave differently when invoked through a live channel instead of the authoring preview. You'll verify the employee-facing experience in each destination and confirm that grounded troubleshooting still works after deployment. This gives you a release baseline for future updates: revise the agent, publish a new version, and validate the channels again.

## 🔎 Objectives {#objectives}

In this mission, you'll learn:

1. How publishing channels make an agent available outside Copilot Studio
1. How to configure an agent's listing and Teams settings
1. How to publish an agent to Teams and Microsoft 365 Copilot
1. How to install and test a published agent in both channels

## 📡 Publishing and channels {#publishing-and-channels}

Publishing creates a version of your agent that users can access through enabled **channels**. Each channel connects the agent to a destination, such as a website, custom web app, Teams, or Microsoft 365 Copilot.

Publishing and sharing are related, but they are not the same. Publishing makes the latest version available to a channel. Your organization's sharing and admin policies determine who can discover, install, or use it. When you update the agent later, publish it again so users receive the newest version.

Publishing to Teams or Microsoft 365 Copilot changes where employees access the agent; it doesn't change the agent's harness. The Contoso IT Concierge agent remains powered by the GitHub Copilot harness in each channel.

> [!IMPORTANT]
> Test the agent after publishing. A successful preview in Copilot Studio doesn't guarantee that authentication, knowledge, tools, and workflows will behave identically in every channel.

## 🧪 Lab 08 - Publish your agent {#lab-08-publish-your-agent}

In this lab, you'll configure the Teams + Microsoft 365 channel, publish the agent, and verify the employee experience in both destinations.

### Prerequisites

1. **Contoso IT Concierge agent** - the agent created in [Mission 07 - Automate with Workflows](../07-automate-with-workflows/index.md).

### 8.1 Publish the agent

1. Select the **arrow** next to the **Publish** button.

   ![Open publishing options for the agent](./assets/08-open-publishing-options-for-the-agent.png)

1. Review the available publishing options. Because this agent provides internal support and troubleshooting, you'll deploy it to Teams and Microsoft 365.

1. Select **Teams + Microsoft 365**, then select **Make agent available in Microsoft 365 Copilot**.

   ![Select Teams and Microsoft 365 channel](./assets/08-select-teams-and-microsoft-365-channel.png)

1. Select **Save and publish**.

   ![Save the selected publishing channel](./assets/08-save-the-selected-publishing-channel.png)

1. Confirm that the green **Channel enabled** message appears, then select **Edit details** to configure the agent listing.

   ![Edit the published agent listing details](./assets/08-edit-the-published-agent-listing-details.png)

1. Replace the **Short description** with the following text:

   ```text
   Resolve IT issues, find devices, and submit requests for approval.
   ```

   ![Update the agent short description](./assets/08-update-the-agent-short-description.png)

1. Replace the **Long description** with the following text:

   ```text
   Contoso IT Concierge helps employees resolve common technical issues and request workplace devices. It uses approved Contoso and Microsoft knowledge sources to provide concise, step-by-step troubleshooting, relevant support links, and safe next steps. If an issue remains unresolved, it suggests additional troubleshooting paths, recommends escalation, and prepares a clear ticket summary.

   For device requests, the agent checks current options in SharePoint, helps employees select an available device, gathers requirements such as RAM and storage, and sends the request to the employee's manager for approval.

   The agent is limited to approved IT help desk scenarios. It will not ask for passwords or one-time passcodes, help bypass security controls, or invent guidance it cannot verify.
   ```

   ![Update the agent long description](./assets/08-update-the-agent-long-description.png)

1. Under **Teams settings**, select **Users can add this agent to a team** and **Use this agent for group and meeting chats**.

   ![Configure the agent Teams settings](./assets/08-configure-the-agent-teams-settings.png)

1. Expand **More**.

   ![Expand the additional agent listing details](./assets/08-expand-the-additional-agent-listing-details.png)

1. Replace the **Developer name** with the following text:

   ```text
   Contoso IT
   ```

   ![Update the agent developer name](./assets/08-update-the-agent-developer-name.png)

1. Select **Save** to apply the listing changes.

   ![Save the agent listing details](./assets/08-save-the-agent-listing-details.png)

1. Select the **back** arrow to return to the Teams + Microsoft 365 channel page.

   ![Return to the channel settings](./assets/08-return-to-the-channel-settings.png)

1. Select **Save and publish** to publish the updated listing.

   ![Save and publish the updated listing](./assets/08-save-and-publish-the-updated-listing.png)

### 8.2 Test the agent in Teams

1. After publishing finishes, select the **See agent in Teams** text.

   ![Open the published agent in Teams](./assets/08-open-the-published-agent-in-teams.png)

1. Review the short and long descriptions displayed in the agent listing.

   ![Review the agent listing in Teams](./assets/08-review-the-agent-listing-in-teams.png)

1. Scroll to **Details** and confirm that **Created by** displays **Contoso IT**.

   ![Confirm the agent developer name](./assets/08-confirm-the-agent-developer-name.png)

1. Select **Add**.

   ![Add the agent to Teams](./assets/08-add-the-agent-to-teams.png)

1. After the agent is added successfully, select **Open**.

   ![Open the installed agent in Teams](./assets/08-open-the-installed-agent-in-teams.png)

1. Enter the following troubleshooting request and submit it to the agent:

   ```text
   I get an access denied when trying to open this file in SharePoint
   ```

1. Confirm that the agent asks a focused follow-up question and provides safe troubleshooting steps.

   ![Test the published agent in Teams](./assets/08-test-the-published-agent-in-teams.png)

### 8.3 Test the agent in Microsoft 365 Copilot

1. Return to the Teams + Microsoft 365 channel page in Copilot Studio, then select **See agent in Microsoft 365**.

   ![Open the agent in Microsoft 365 Copilot](./assets/08-open-the-agent-in-microsoft-365-copilot.png)

1. Confirm that the Teams test appears in the agent's activity history, then enter the following troubleshooting request:

   ```text
   My laptop keeps freezing up and crashing
   ```

   ![Test the agent in Microsoft 365 Copilot](./assets/08-test-the-agent-in-microsoft-365-copilot.png)

1. To review the citations, select Sources. A panel opens and lists the web pages referenced in the agent's response.

   ![Review citations](./assets/08-review-citations.png)

1. Confirm that the agent provides troubleshooting guidance grounded in its approved knowledge sources and asks for details to narrow down the issue.

   ![Review the grounded troubleshooting response](./assets/08-review-the-grounded-troubleshooting-response.png)

## ✅ Mission Complete {#mission-complete}

Mission accomplished, Recruit! You moved the **Contoso IT Concierge** from the authoring environment into the apps where employees work.

You can now:

✅ **Configure channels**: Make an agent available in Teams and Microsoft 365 Copilot

✅ **Create an agent listing**: Add clear descriptions, Teams settings, and developer information

✅ **Publish updates**: Release the latest agent configuration to enabled channels

✅ **Validate the employee experience**: Install and test the published agent in Teams and Microsoft 365 Copilot

⏭️ [Move to **Understanding Licensing**](../09-understanding-licensing/index.md) to learn how GitHub Copilot harness usage is billed and managed.

## 🪙 Copilot Credits Estimate {#copilot-credits-estimate}

The **200 - 600 credits** shown at the top of this mission is a planning estimate, not a bill. Here's where the range comes from.

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
| Publishing the agent and configuring channels | Build-tab configuration | 0 |
| Teams test in step 8.2 | Light. One troubleshooting request | 100 - 300 |
| Microsoft 365 Copilot test in step 8.3 | Light. One troubleshooting request | 100 - 300 |
| **Total** | | **200 - 600** |

Where you land inside that range depends on how much work each task turns out to be. Going **over** the top of the range is entirely possible: repeating a test, asking extra follow-up questions, or redoing a lab after a configuration mistake each add another task on top of the ones counted here.

> [!IMPORTANT] Estimates aren't a commitment
> These numbers apply the guide's published bands to the steps in this mission. They aren't measured in your tenant, and both rates and product behavior can change. Use them to decide how much credit capacity to have available before you start, not to predict an invoice. [Mission 09](../09-understanding-licensing/index.md) explains what drives consumption and how to monitor it.

## 📚 Tactical Resources {#tactical-resources}

- 🔗 [Publish overview for agents](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/publication-fundamentals-publish-channels)

- 🔗 [Publish an agent](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/publication-publish-agent)

- 🔗 [Available channels for agents](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/publication-channels-overview)

<analytics-tag section="recruit-nextgen" mission="08-publish-your-agent" />
