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
harness: microsoft-copilot
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
last-edited-date: 2026-10-29
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

Publishing to Teams or Microsoft 365 Copilot changes where employees access the agent; it doesn't change the agent's harness. The Contoso IT Concierge agent remains powered by the Microsoft Copilot harness in each channel.

> [!IMPORTANT]
> Test the agent after publishing. A successful preview in Copilot Studio doesn't guarantee that authentication, knowledge, tools, and workflows will behave identically in every channel.

## 🧪 Lab 08 - Publish your agent {#lab-08-publish-your-agent}

In this lab, you'll configure the Teams + Microsoft 365 channel, publish the agent, and verify the employee experience in both destinations.

### Prerequisites

1. **Contoso IT Concierge agent** - the agent created in [Mission 07 - Automate with Workflows](../07-automate-with-workflows/index.md).

### 8.1 Publish the agent

1. On the agent's **Build** page, select **Publish**.

   ![Open publishing options for the agent](./assets/08-open-publishing-options-for-the-agent.png)

1. Select **Publish agent** in the confirmation dialog and wait for publication to finish.

1. Select **Add channels**, then choose the Teams and Microsoft 365 channel.

1. Select **Microsoft 365 Copilot and Microsoft Teams** under **Availability**, then select **Add channel**.

1. Open **Teams + Microsoft 365** from the agent's **Channels** section. Confirm that **Microsoft 365 Copilot and Microsoft Teams** is selected.

   ![Select Teams and Microsoft 365 channel](./assets/08-select-teams-and-microsoft-365-channel.png)

1. Select **About info** to configure the agent listing.

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

1. Replace the **Developer name** with the following text:

   ```text
   Contoso IT
   ```

1. Select **Save** to apply the listing changes.

   ![Save the updated channel listing](./assets/08-save-and-publish-the-updated-listing.png)

1. Select **Publish**, then **Publish agent**, to release the updated listing. Wait for publication to finish.

### 8.2 Test the agent in Teams

1. Open **Teams + Microsoft 365** in Copilot Studio and select **Use and share**.

1. Select **View in Teams** to open the published agent's listing.

1. Select **See more** in the agent listing, then review the full description.

   ![Review the agent listing in Teams](./assets/08-review-the-agent-listing-in-teams.png)

1. Confirm that the listing identifies **Contoso IT** as the developer.

1. Select **Add**.

1. After the agent is added successfully, select **Open**.

   ![Open the installed agent in Teams](./assets/08-open-the-installed-agent-in-teams.png)

1. Enter the following troubleshooting request and submit it to the agent:

   ```text
   I get an access denied when trying to open this file in SharePoint.
   ```

1. Confirm that the agent asks a focused follow-up question and provides safe troubleshooting steps.

   ![Test the published agent in Teams](./assets/08-test-the-published-agent-in-teams.png)

### 8.3 Test the agent in Microsoft 365 Copilot

1. Return to **Teams + Microsoft 365** in Copilot Studio and select **Use and share**.

1. Select **View in Copilot** to open the published agent in Microsoft 365 Copilot.

1. Enter the following troubleshooting request:

   ```text
   My laptop keeps freezing up and crashing
   ```

   ![Test the agent in Microsoft 365 Copilot](./assets/08-test-the-agent-in-microsoft-365-copilot.png)

1. Submit the request and wait for the response.

1. Review the referenced web pages in **Citations** below the response, expanding the section if needed. Confirm that the response includes a relevant **support.microsoft.com** source and troubleshooting steps for the reported issue.

   ![Review the grounded troubleshooting response](./assets/08-review-the-grounded-troubleshooting-response.png)

## ✅ Mission Complete {#mission-complete}

Mission accomplished, Recruit! You moved the **Contoso IT Concierge** from the authoring environment into the apps where employees work.

You can now:

✅ **Configure channels**: Make an agent available in Teams and Microsoft 365 Copilot

✅ **Create an agent listing**: Add clear descriptions, Teams settings, and developer information

✅ **Publish updates**: Release the latest agent configuration to enabled channels

✅ **Validate the employee experience**: Install and test the published agent in Teams and Microsoft 365 Copilot

⏭️ [Move to **Understanding Licensing**](../09-understanding-licensing/index.md) to learn how Microsoft Copilot harness usage is billed and managed.

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
