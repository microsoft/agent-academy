---
hide: true
preview: true
prev:
   text: 'Build with the GitHub Copilot Harness'
   link: '/recruit-nextgen/04-build-a-custom-agent'
next:
   text: 'Add Skills'
   link: '/recruit-nextgen/06-add-skills'
short-description: Add a SharePoint Get items tool so your agent can take action on real data
difficulty: 1
codename: OPERATION TOOL UP
time: 30
tags:
   - automation
   - grounding
products:
  - copilot-studio
  - power-platform
industries:
  - it
created-date: 2025-08-20
last-edited-date: 2026-08-04

---

# 🚨 Mission 05: Add a Tool {#mission-05-add-a-tool}

<mission-meta />

> [!NOTE]
> This lab uses an agent powered by the **GitHub Copilot harness**.

## 🎯 Mission Brief {#mission-brief}

You’ve built an agent. It listens, learns, and answers questions, but now it’s time to get tactical and let it **take action**. In this mission you’ll connect your agent to a real data source so it can fetch live information and do something useful with it.

On the GitHub Copilot harness, that capability comes from **tools**. You’ll add a **SharePoint - Get items** tool so your Contoso IT Concierge agent can pull available devices straight from a SharePoint list.

This is the agent's first connection to live business data. Rather than copying device details into its instructions or relying on static knowledge, the agent can retrieve the current list when a request requires it. You'll give the tool a clear name and description so the harness can recognize when to use it, then map the required SharePoint inputs. Those choices matter because the orchestrator depends on capability metadata and configuration to select and call tools reliably.

The tool won't define the complete device request procedure by itself. In the next mission, you'll add reusable skills that tell the agent how to gather requirements, interpret results, and guide the employee through the task.

> [!IMPORTANT]
> If your Copilot Studio screen looks different from these screenshots, make sure the **New experience** toggle in the upper-right corner is turned **on** to use the GitHub Copilot harness authoring surface.

## 🔎 Objectives {#objectives}

In this mission, you’ll learn:

1. Why the GitHub Copilot harness uses instructions and tools instead of authored **Topics**
1. What **tools** are and how an agent decides when to use them
1. How to add the **SharePoint - Get items** connector action as a tool
1. How to rename the tool so its purpose is clear to the model
1. How to configure the tool's input parameters for the SharePoint site and list

## ✋🏻 Wait - where did Topics go? {#where-did-topics-go}

If you’ve used Copilot Studio before, you’ll remember **Topics**: hand-built conversation flows made of trigger phrases and connected **nodes** (send a message, ask a question, add a condition, call a tool, and so on). You routed conversations manually and stitched logic together node by node.

The GitHub Copilot harness doesn't use the **Topics** tab. Instead of you wiring conversations by hand, the agent’s **large language model orchestrates** the conversation for you. You give the agent:

- **Instructions** - plain-language guidance on how to behave, and
- **Tools, Knowledge, and Skills** - the capabilities it can draw on.

The model reads your instructions, understands the user’s intent, and decides which tool to call and when. No trigger phrases, no node graphs. This is simpler, faster to build, and far more flexible, which is exactly why we’re focusing on **tools** in this mission.

## 🔧 What are tools {#what-are-tools}

Tools give your agent the ability to do something beyond chatting, such as calling an API or MCP server, running a process, or reading and writing business data. Think of tools as "action blocks" that give your agent superpowers.

Tools can come from several places:

- **Connectors** for services such as SharePoint, Outlook, Dataverse, and other business systems
- **MCP servers** that expose external data and capabilities through the Model Context Protocol
- **Workflows** that perform repeatable, deterministic business processes
- **Other agents** that provide specialized capabilities

When a user asks something, the model matches the request to a tool’s description, fills in the tool’s inputs, runs it, and uses the result in its reply. Because the description helps the model choose the right tool, in this lab you’ll review the existing description and decide whether to keep it or update it for the scenario.

In this lab we’ll use the **SharePoint - Get items** connector action so the agent can read a list of devices.

> [!TIP] Choosing between Work IQ, SharePoint MCP, and a connector
> **Work IQ MCP** can give an agent broad, permission-trimmed context across Microsoft 365, including files, email, meetings, chats, and business systems. **SharePoint MCP** is another option when an agent needs broader SharePoint operations. For the `Contoso IT Concierge`, we want a narrower capability: retrieve items from one approved SharePoint site and list. The **SharePoint - Get items** connector lets us explicitly pin that scope. Use [Work IQ MCP](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/mcp/overview) when the scenario benefits from broader context across the user's permitted work data; use a specific connector action when the agent should access only a defined resource and operation.

## 🧪 Lab 05 - Add the SharePoint Get items tool {#lab-05-add-the-sharepoint-get-items-tool}

### ✨ Use case {#use-case}

**As an** employee

**I want to** know what devices are available

**So that I** have a list of available devices

### Prerequisites

1. **SharePoint list** - the **EmployeeAssets** list from [Mission 00 - Course Setup](../00-course-setup/index.md#step-5-create-new-sharepoint-site).
1. **Contoso IT Concierge** - the agent created in [Mission 04 - Build an agent with the GitHub Copilot harness](../04-build-a-custom-agent/index.md#lab-04-create-an-agent-with-the-github-copilot-harness).

Let's begin!

### 5.1 Add a tool using a connector

1. In the **Build** view, in the **Tools** section, select the **+** icon to add a tool.

   ![Select plus icon to add tool](./assets/05-select-plus-icon-to-add-tool.png)

1. The **Add a tool** dialog opens with **Featured**, **MCP**, **Connectors**, and **Workflows** pills.

    ![Available tool types in Copilot Studio](./assets/05-available-tool-types-in-copilot-studio.png)

1. Take a moment to review what's available under the different types of tools. Select the **Model Context Protocol (MCP)** pill. Here, you'll see a list of first-party and third-party Microsoft certified MCP tools to select from.

    ![Available MCP tools in Copilot Studio](./assets/05-available-mcp-tools-in-copilot-studio.png)

1. Next, select the **Connectors** pill. You'll see a larger list of first-party and third-party Microsoft certified connector tools to select from.

    ![Available connector tools in Copilot Studio](./assets/05-available-connector-tools-in-copilot-studio.png)

1. Copy and paste the following text in the search bar.

   ```text
   Get items
   ```

   Select the **Get items** tool.

    ![Select the SharePoint Get items tool](./assets/05-select-the-sharepoint-get-items-tool.png)

1. Select the **+ Add** button to add the tool to the agent.

   ![Select add button to add the tool](./assets/05-select-add-button-to-add-the-tool.png)

### 5.2 Configure the tool

1. The tool now appears in the **Tools** list. Select **Get items** to open **Tool details**.

   ![Select Get items to configure the tool](./assets/05-select-get-items-to-configure-the-tool.png)

1. On the **Details** tab, we'll rename the tool so that the model knows what the tool will be used for. Copy and paste the following text as the **Name**.

   ```text
   Get Employee Assets
   ```

   We usually provide a clear tool description so the model knows when to use it.

   In this scenario, the existing description already fits because the model will retrieve items from the configured SharePoint list, so we can leave it as-is.

    ![Rename the SharePoint Get items tool](./assets/05-rename-the-sharepoint-get-items-tool.png)

1. Select the **Inputs** tab. Each input parameter (**Site Address**, **List Name**, **Filter Query**, and so forth) can be filled by **AI** or pinned to a fixed **Value**. Leaving them as **AI** lets the agent populate them from the conversation and your instructions.

   For this use case, where the agent retrieves device information and returns it to the user, set **Site Address** and **List Name** to the SharePoint site and list created in the Course Setup mission.

   Update the **How is this filled?** field from `AI` to `Value`.

   Then select the **Value** drop-down field and select the **New** button.

    ![Update the Site Address input parameter](./assets/05-update-the-site-address-input-parameter.png)

1. In the **Site Address** drop-down field, select the SharePoint site you created in the Course Setup mission then select **Save**.

   ![Select SharePoint site for the variable configuration](./assets/05-select-sharepoint-site-for-the-variable-configuration.png)

1. Scroll down to the **List Name** input parameter and repeat the same steps:

   - In the **How is this filled?** field, select **Value**.
   - In the **Value** drop-down field, select **Add variable**.

   ![Configure List Name input parameter](./assets/05-configure-list-name-input-parameter.png)

1. Select the SharePoint List created in the Course Setup mission, **EmployeeAssets**, and select **Save**.

   ![Select List for the variable configuration](./assets/05-select-list-for-the-variable-configuration.png)

1. Select **Done** to close out of the configuration panel.

    ![Finish configuring the SharePoint tool inputs](./assets/05-finish-configuring-the-sharepoint-tool-inputs.png)

The input parameters for the **Get items** tool have been successfully configured. 👍🏻

## ✅ Mission Complete {#mission-complete}

Mission accomplished, Recruit! You added a **SharePoint - Get items** tool and configured its inputs for the `Contoso IT Concierge` agent.

You can now:

✅ **Explain capability-based orchestration**: Describe how the GitHub Copilot harness uses instructions and capabilities instead of authored topics.

✅ **Add a connector tool**: Extend an agent with the SharePoint **Get items** action.

✅ **Configure tool inputs**: Map the site, list, and query values required by the SharePoint connector.

⏭️ [Move to **Add Skills**](../06-add-skills/index.md)

## 📚 Tactical Resources {#tactical-resources}

🔗 [Add tools to agents](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/tools-overview?WT.mc_id=power-172618-apdunnam)

🔗 [SharePoint connector reference](https://learn.microsoft.com/connectors/sharepointonline/#get-items)

🔗 [Write effective agent instructions](https://learn.microsoft.com/microsoft-copilot-studio/authoring-instructions?WT.mc_id=power-172618-ebenitez)

<analytics-tag section="recruit-nextgen" mission="05-add-tools" />
