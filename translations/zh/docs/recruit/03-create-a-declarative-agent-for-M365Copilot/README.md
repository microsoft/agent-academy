<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-18T02:44:31+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "zh"
}
-->
# 🚨 任务 03：为 Microsoft 365 Copilot 部署声明式代理

## 🕵️‍♂️ 代号：`COPILOT 扩展行动`

> **⏱️ 行动时间窗口：** `~60分钟`

🎥 **观看操作演示**

[![创建声明式代理视频缩略图](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.zh.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "在 YouTube 上观看操作演示")

## 🎯 任务简报

欢迎来到您的第一次实地任务，代理制造者。您已被选中设计、装备并部署一个声明式代理——一种直接嵌入到 Microsoft 365 Copilot 和 Microsoft Teams 中的专业操作员。

与传统代理不同，声明式代理通过定义的任务（指令）、工具（提示/连接器）以及对内部情报（如 SharePoint、Dataverse 等知识源）的战略访问来运行。您的任务是使用 Microsoft Copilot Studio 构建此代理——一个无需编程的指挥中心，让您的代理技能和目标得以实现。

让我们开始吧。

## 🔎 目标

在本次任务中，您将学习：

1. 了解什么是声明式代理以及它如何通过自定义功能扩展 Microsoft 365 Copilot
1. 比较 Microsoft Copilot Studio 和 Copilot Studio 代理构建器在构建声明式代理方面的区别
1. 通过对话式创建体验使用自然语言创建声明式代理
1. 添加 AI 提示作为工具，以增强代理的专业知识和解决问题的能力
1. 在 Microsoft 365 Copilot 和 Microsoft Teams 中发布并测试您的声明式代理

## 🕵🏻‍♀️ 什么是 Microsoft 365 Copilot 的声明式代理？

声明式代理是 Microsoft 365 Copilot 的定制版本。您可以通过提供支持特定流程的指令、结合企业知识以及利用工具进行更广泛的扩展，来定制 Microsoft 365 Copilot 以满足特定的业务需求。这使组织能够为用户创建具有更高功能的个性化体验。

## 🤔 为什么要使用 Microsoft Copilot Studio 构建声明式代理？

作为制造者，您可能已经探索过 [Copilot Studio 代理构建器](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez) 在 Microsoft 365 Copilot 中的功能，因此您可能会想 _为什么要在 Microsoft Copilot Studio 中构建声明式代理？_

Microsoft Copilot Studio 提供了一套全面的工具和功能，用于构建声明式代理，超越了 Copilot Studio 代理构建器的限制。与 Copilot Studio 代理构建器类似，您无需掌握编程或软件开发知识即可在 Microsoft Copilot Studio 中构建代理。让我们进一步了解 Copilot Studio 代理构建器和 Copilot Studio 在构建声明式代理方面的区别。

### 功能比较

以下表格突出了在 Copilot Studio 代理构建器和 Copilot Studio 中构建声明式代理时的差异。

| 功能                   | Microsoft 365 Copilot 中的 Copilot Studio 代理构建器                          | 在 Copilot Studio 中扩展 Microsoft 365 Copilot                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **知识**       | Web、SharePoint、Microsoft Teams 聊天、Outlook 邮件、Copilot 连接器     | Web 搜索（通过 Bing）、SharePoint、Dataverse、Dynamics 365、Copilot 连接器  |
| **工具**       | 代码解释器、图像生成器     | 1400+ Power Platform 连接器、自定义连接器、提示、计算机使用、REST API、模型上下文协议   |
| **入门提示**         | 配置提示以便用户快速入门   | 配置提示以便用户快速入门  |
| **渠道**           | 代理仅发布到 Microsoft 365 Copilot     | 代理发布到 Microsoft 365 Copilot 和 Microsoft Teams      |
| **共享权限**         | 用户仅为查看者    | 用户可以是编辑者或查看者   |

在 Microsoft Copilot Studio 中构建的声明式代理提供了更多功能，我们将在接下来的内容中详细了解。

!!! tip
    - 要了解有关 Copilot Studio 代理构建器的更多信息，请访问 [Copilot Developer Camp: Lab MAB1 - Build your first agent](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/)
    - 要深入开发以扩展 Microsoft 365 Copilot 的声明式代理，请访问 [Copilot Developer Camp: Lab MAB1 - Build your first agent](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/)

### 使用 Copilot Studio 构建的声明式代理扩展 Microsoft 365 Copilot

让我们从功能比较表中扩展所学内容。

#### 自定义

- **详细指令**：您可以提供详细的指令和功能，以精确定义代理的目标和行为。
  - 这包括通过自然语言简单调用工具。

- **企业知识访问**：启用对尊重用户权限的企业知识的访问。
  - SharePoint 集成
  - Dataverse 集成
  - Dynamics 365 集成
  - 由组织管理员启用的 Microsoft 365 Copilot 连接器

   ![自定义](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.zh.png)

#### 高级功能

- **与外部服务集成**：允许您从 1400+ Power Platform 连接器中选择，与外部服务集成，提供更复杂和强大的功能。
  - 示例包括 [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez)、[ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez)、[Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez)、[SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) 等
  - 或者，您还可以直接在声明式代理中利用模型上下文协议服务器和 REST API

- **AI 提示**：使用提示通过自然语言和 AI 推理分析和转换文本、文档、图像和数据。
  - 选择聊天模型，可从基础（默认）、标准、高级中选择
  - 可选择使用您自己的 Azure AI Foundry 模型来支持您的提示

- **更多部署配置选项**：选择渠道并定义用户权限。
  - 发布到 Microsoft Teams，为用户提供熟悉的用户界面以便更快地采用
  - 编辑用户权限可以共享，以防止代理所有者成为单一依赖点

   ![高级功能](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.zh.png)

总之，Microsoft Copilot Studio 中的声明式代理通过集成企业知识系统、连接外部服务的工具或 AI GPT 模型，允许根据业务需求定制 Microsoft 365 Copilot。

## 🧪 实验 03：在 Microsoft Copilot Studio 中为 Microsoft 365 Copilot 构建声明式代理

接下来我们将学习如何为“企业对员工”用例构建声明式代理，该代理将充当一个 **IT 服务台代理**。

- [3.1 创建声明式代理](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 为声明式代理创建并添加提示](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 更新指令并测试声明式代理](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 将声明式代理发布到 Microsoft 365 Copilot 和 Microsoft Teams](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    本实验将概述添加提示作为工具的步骤。接下来的课程将深入探讨添加知识源和其他可用工具。为了便于学习，我们将保持简单 😊

### 👩🏻‍💼 理解企业对员工（B2E）

企业对员工（B2E）是指企业直接为其员工提供的互动和服务。在代理的背景下，这意味着利用 Copilot Studio 的高级功能来支持和增强组织内员工的工作体验。

### ✨ 用例场景

**作为** 一名员工

**我希望** 从 IT 服务台代理处快速准确地获得设备问题、网络故障排除、打印机设置等问题的帮助

**以便我可以** 保持高效工作，快速解决技术问题

让我们开始吧！

### 前提条件

- 制造者必须拥有在 Copilot Studio 环境中创建的权限并能够访问该环境。

!!! note "许可说明"
    本实验将概述添加提示作为工具的步骤。接下来的课程将深入探讨添加知识源和其他可用工具。为了便于学习，我们将保持简单 😊
  
    您无需 Microsoft 365 Copilot 用户许可即可将您在 Copilot Studio 中构建的声明式代理发布到 Microsoft 365 Copilot。然而，**使用已发布声明式代理** 的 Microsoft 365 Copilot 用户需要拥有 Microsoft 365 Copilot 用户许可。

### 3.1 创建声明式代理

!!! warning "Copilot 问题可能因会话而有所不同"

    Copilot 的对话式创建体验可能会有所不同，提供的指导问题可能与之前的会话略有不同。

1. 访问 [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/) 并使用您的凭据登录。确保切换到您用于这些实验的环境。

1. 从菜单中选择 **Agents**，然后选择 **Copilot for Microsoft 365**。

       ![Microsoft 365 的 Copilot](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.zh.png)

1. 接下来，我们将通过选择 **+ Add** agent 来创建一个声明式代理。

       ![添加代理](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.zh.png)

1. 然后我们会看到加载的对话式创建体验，在这里我们可以通过与 Copilot 的自然语言聊天来描述我们想要构建的声明式代理，并使用提供的问题进行指导。

       让我们输入一个详细的描述，概述以下内容：  
       - 代理的任务  
       - 它可以处理的查询类型  
       - 响应的格式  
       - 代理的目标  
    
       ```text
       您是一位经验丰富的 IT 专业人士，专注于各种计算机系统、网络和网络安全。您能够诊断和解决技术问题，以清晰易懂的方式向各技术水平的用户解释解决方案，并提供最佳实践指导。您应该简洁明了，必要时使用分步骤说明和项目符号。您的目标是帮助用户理解问题并有效解决问题。
       ```
    
       ![创建提示](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.zh.png)

1. 提交提示后，右侧面板将显著更新，显示根据提示定义的代理详细信息和指令。接下来，您将被要求确认代理的名称，Copilot 会建议一个名称。

       可以输入 `yes` 接受建议的名称，也可以输入其他名称，例如以下内容，
    
       ```text
       Contoso Tech Support Pro
       ```
    
       ![指令已更新](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.zh.png)

    !!! warning "提醒：Copilot 问题可能因会话而有所不同"

        Copilot 的对话式创建体验可能会有所不同，提供的指导问题可能与之前的会话略有不同。

1. 代理的名称现在已更新，如右侧面板所示。接下来我们被要求完善代理的指令。Copilot 的建议听起来很不错，所以我们会要求它使用自己的建议。我们将输入以下内容，

      ```text
      Focus on the IT issues and scenarios you've identified
      ```

      ![名称已更新](../../../../../translated_images/3.1_06_NameUpdated.b6b8cc7c670b77c635d6b54b723e1a83f63ec288c0eab260fdbf88c7ec163003.zh.png)

1. 接下来我们会被问到是否要添加任何公开可访问的网站或知识。我们将回答 `No`，因为在本实验中我们只会为声明式代理添加一个提示。后续课程中的实验将涵盖知识源。

      ![未添加网站或知识源](../../../../../translated_images/3.1_07_KnowledgeSources.2001faa25aab922f38da82a8602e68b3ad7153941e87bab0949177e0b2ab0c08.zh.png)

1. 然后我们会看到 Copilot 的响应，表明我们已经完成了使用 Copilot 对话式创建体验配置代理的过程。然而，我们可以进一步完善，明确指出它应该简洁明了，使用项目符号表达同理心，并在提供解决方案后询问反馈。

    ```text
    Concise and Informative:
    - Bullet Points: Use bullet points for clarity and to break down information into digestible parts.
    - Summarize: Provide a brief summary of the solution at the end of the explanation.
   
    User-Friendly Communication:
    - Empathy: Show empathy and understanding of the user's frustration or confusion.
    - Encouragement: Encourage users by acknowledging their efforts and progress.
   
    Interactive and Engaging:
    - Ask for Feedback: After providing a solution, ask if the user needs further assistance or if the solution worked.
    ```

      ![更新代理指令](../../../../../translated_images/3.1_08_FurtherRefinements.993926c4e55cc5133413f4e10a61a6ed43351d070e791db0ee5547ea83f46473.zh.png)

1. Copilot 确认指令已更新。点击 **Create** 以为 Microsoft 365 Copilot 配置声明式代理。

      ![创建代理](../../../../../translated_images/3.1_09_CreateDeclarativeAgent.71442cd4e18105359e55016d92e54b74ac18977bb535c637a05bac0d3680a3c5.zh.png)

    !!! warning "提醒：Copilot 问题可能因会话而有所不同"

        Copilot 的对话式创建体验可能会有所不同，提供的指导问题可能与之前的会话略有不同。

1. 代理配置完成后，您将看到代理的详细信息，其中包含在 Copilot 对话式创建体验期间定义的描述和指令。
![代理详情](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.zh.png)

向下滚动面板，您还可以看到添加知识、启用网页搜索（通过 Bing）、启动提示以及 Microsoft 365 Copilot 声明式代理的发布详情的功能。启动提示也会显示在右侧的测试面板中。用户可以选择这些启动提示来开始与代理互动。

![建议的提示](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.zh.png)

1. 在代理的详情部分，您还可以更改代理图标。选择 **编辑**。

![编辑详情](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.zh.png)

在这里，您可以更改图标和背景颜色。选择 **保存**，然后再次选择 **保存**以更新代理的详情。

![更改图标](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.zh.png)

1. 让我们快速测试一下我们创建的代理。在右侧的测试面板中选择一个 **启动提示**。

![测试启动提示](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.zh.png)

1. 我们的代理将会响应。注意它如何遵循指示，将信息分成易于理解的要点，并在响应中体现同理心。

向下滚动消息底部，注意它在提供解决方案后也按照指示询问反馈。

![测试响应](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.zh.png)

几分钟内，您已经在 Copilot Studio 中为 Microsoft 365 Copilot 添加了一个声明式代理 🙌🏻

接下来我们将学习如何为代理添加工具，并创建一个提示。

### 3.2 为声明式代理创建并添加提示

1. 向下滚动到 **工具** 部分，选择 **+ 添加工具**。

![添加工具](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.zh.png)

1. 工具弹窗将会出现，并显示 Power Platform 连接器的列表。要添加提示，选择 **+ 新工具**。

![新工具](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.zh.png)

1. 显示其他工具的列表 - 提示、自定义连接器、REST API 和模型上下文协议。如果您的组织满足[计算机使用要求](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez)，这也会出现在列表中。选择 **提示**。

![选择提示](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.zh.png)

1. 为提示输入一个名称。我们将提示命名为 `IT Expert`。

![输入名称](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.zh.png)

1. 选择 **模型**旁边的 **下拉箭头图标**，查看可选择的不同聊天模型。默认情况下，选择了 **Basic GPT-4.1 mini** 模型，您也可以使用 Azure AI Foundry 模型自带模型。我们将保持默认选择。

![更改模型](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.zh.png)

1. 接下来，我们将为提示提供指示。您可以选择以下三种方法：

   - 使用 Copilot 根据您描述的提示功能生成指示。
   - 使用提示库中的预设模板创建提示。
   - 手动输入自己的指示。

1. 我们先尝试使用 Copilot 根据输入的描述生成指示。在 Copilot 字段中输入以下内容并提交。

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

![使用 Copilot 开始](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.zh.png)

1. Copilot 将开始为我们生成提示。

![Copilot 起草提示](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.zh.png)

1. Copilot 生成的草稿指示将会出现。

![Copilot 生成的草稿指示](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.zh.png)

1. 向下滚动到指示底部，您会看到用户输入参数已由 Copilot 定义。您可以选择：
   - 保留生成的草稿指示。
   - 使用 Copilot 刷新草稿指示。
   - 清除草稿指示。

清除草稿指示，选择 **垃圾桶图标**，接下来我们尝试使用提示库。

![提示指示](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.zh.png)

1. 选择 **提示模板**链接。

![选择提示模板](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.zh.png)

1. 您将看到一系列提示模板可供选择。这些来自 [Power Platform 提示库](https://aka.ms/power-prompts)。

![提示库](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.zh.png)

1. 搜索 `IT expert` 提示并选择它。

![选择 IT expert 提示](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.zh.png)

1. 提示将作为指示添加，并由提示模板定义输入参数。与我们在使用 Copilot 创建对话体验时为代理提供指示的方法类似，此提示模板概述了：
   - 任务，
   - 它可以处理的查询类型，
   - 以及响应的格式和提示的目标。

![提示指示](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.zh.png)

1. 清除指示，接下来我们尝试手动输入指示。我们将使用 [Power Platform 提示库](https://aka.ms/power-prompts)中的[IT Expert 提示](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/)。复制并粘贴提示。

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

![提示指示](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.zh.png)

1. 接下来，我们可以定义提示的用户输入参数。这些可以是文本和图像，以及用于测试的示例数据。还可以通过 Dataverse 表的知识来支持提示。在本练习中，我们只有一个用户输入需要定义，即问题输入。目前在提示中作为占位符 `[Problem]`。我们现在将通过输入 `/` 字符或选择 **+添加内容**，然后选择 **文本** 来配置此输入。

![文本输入](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.zh.png)

1. 我们现在可以为输入参数和示例数据输入名称。

输入以下内容作为名称：

    ```text
    problem input
    ```

输入以下内容作为示例数据：

    ```text
    My laptop gets an error with a blue screen
    ```

然后选择 **关闭**。

![配置问题输入](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.zh.png)

1. 问题输入参数现在将添加到指示中，并配置了示例数据。我们现在可以测试我们的提示！

![问题输入已添加](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.zh.png)

1. 选择 **测试**以测试提示。

![测试指示](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.zh.png)

1. 然后会显示响应。注意响应如何根据指示提供标题和要点。向下滚动并查看模型响应的其余部分。

![模型响应](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.zh.png)

1. 在保存提示之前，让我们了解可以为此提示配置的设置。选择 **省略号 (...) 图标**。

![提示设置](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.zh.png)

1. 在这里我们会看到三个可以配置的设置：

   - **温度**：较低的温度会产生可预测的结果，而较高的温度允许更具多样性或创造性的响应。
   - **记录检索**：指定检索知识来源的记录数量。
   - **在响应中包含链接**：选中后，响应中会包含检索记录的链接引用。

选择 **X** 图标退出设置。

![配置设置](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.zh.png)

1. 选择 **保存**以保存提示。

![保存提示](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.zh.png)

1. 接下来，选择 **添加到代理**以将提示添加到我们的声明式代理。

![提示指示](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.zh.png)

1. 提示现在将显示在工具部分下 🙌🏻

![提示已添加](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.zh.png)

接下来我们将更新指示以调用提示并测试我们的声明式代理。

### 3.3 更新指示并测试您的声明式代理

1. 向上滚动到 **详情**部分并选择 **编辑**。这将使字段变为可编辑状态。

![选择编辑](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.zh.png)

1. 我们现在可以更新指示以通过引用提示名称来调用提示。清除指示，然后复制并粘贴以下内容。

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

注意最后一句话如何指示代理使用用户提出的问题作为问题输入参数的值。代理将使用问题作为提示的问题输入。接下来，选择 **保存**。

![更新指示以调用提示](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.zh.png)

1. 我们现在准备测试更新后的声明式代理指示。选择测试面板中的 **刷新图标**。

![选择刷新图标](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.zh.png)

1. 接下来，输入以下提示并提交。

```text
你能帮帮我吗？我的笔记本电脑出现蓝屏问题
```

![进行测试](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.zh.png)

1. 代理调用提示并响应。

![提示指示](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.zh.png)

现在让我们发布我们的声明式代理 😃

### 3.4 将声明式代理发布到 Microsoft 365 Copilot 和 Microsoft Teams

1. 选择 **发布**。

![发布代理](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.zh.png)

1. 一个弹窗将会出现，显示可以更新的频道和发布详情。

   - 频道：代理将发布到 Microsoft 365 Copilot 和 Microsoft Teams。
   - 代理应用信息：这是用户在 Microsoft 365 Copilot 或 Microsoft Teams 中添加代理时显示的信息。这些字段可以根据需要更新。

![代理应用详情](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.zh.png)

1. 例如，您可以更新 **简短描述**、**详细描述**、**开发者名称**为您的名字。

!!! tip
如果您在浏览器中没有看到所有字段，请尝试缩小页面，例如 75%。

选择 **发布**。Copilot Studio 将开始发布代理。

![发布代理](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.zh.png)

1. 发布完成后，我们将看到代理的[可用性选项](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez)。

| 可用性选项 | 描述 |
| ---------- | ---------- |
| 分享链接 | 复制链接，与共享用户分发以在 Microsoft 365 Copilot 中打开代理 |
| 显示给我的团队成员和共享用户 | 允许您授予其他人参与代理创作的权限，或授予安全组权限以允许他们在 Microsoft 365 Chat 或 Microsoft Teams 中使用代理。 |
| 显示给我组织中的所有人 | 提交给租户管理员以添加到组织目录中，供所有租户用户添加代理。代理将显示在 Microsoft 365 Copilot 和 Microsoft Teams 的“由您的组织创建”部分中。 |
| 下载为 .zip | 下载为 zip 文件以作为自定义应用上传到 Microsoft Teams。 |

![可用性选项](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.zh.png)

1. 让我们看看如何分享代理。选择 **显示给我的团队成员和共享用户**。一个面板将会出现，您可以通过输入他们的名字、电子邮件或安全组来搜索您想要分享代理的用户。您可以随时查看此列表以编辑谁可以访问代理。

还有两个复选框：
- _向新用户发送电子邮件邀请_ - 新用户将收到电子邮件邀请。
- _在 Teams 应用商店的“由 Power Platform 创建”部分中可见_ - 代理将在 Teams 应用商店的“由 Power Platform 创建”部分中可用。
有关更多详细信息，请参阅[连接并配置适用于 Teams 和 Microsoft 365 的代理](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez)。

选择 **取消** 或 **X** 图标以退出窗格。

![共享代理](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.zh.png)

1. 选择 **复制**，然后在新的浏览器标签页中粘贴链接。

![复制链接](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.zh.png)

1. Microsoft 365 Copilot 将加载，并弹出一个模态窗口显示代理应用的详细信息。
   注意开发者名称、简短描述和详细描述的显示方式。这些信息来自之前步骤中更新的发布详情。

选择 **添加**。

![可用性选项](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.zh.png)

1. 接下来会加载我们的声明式代理。我们可以看到快速选择的启动提示，用户可以快速获得即时帮助。

选择一个启动提示。在我的启动提示中，我选择了 **软件安装帮助** 提示，它会自动填充 Copilot 消息字段。将问题提交给 Copilot。

![选择启动提示](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.zh.png)

1. 选择 **始终允许**，为您的声明式代理授予调用 IT 专家提示的权限。

![选择始终允许](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.zh.png)

1. 代理随后会调用我们的 **IT 专家** 提示，我们会看到模型响应作为消息返回到我们的声明式代理中。

![响应](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.zh.png)

向下滚动查看响应的完整详细信息。

![响应](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.zh.png)

1. 但是我们如何知道声明式代理调用了提示呢？👀 这里有一个小提示！

!!! tip
    您可以通过启用 [开发者模式](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez) 在 Microsoft 365 Copilot 中测试和调试代理。

在 Copilot 消息字段中输入以下内容并提交。

    ```text
    -developer on
    ```

确认消息会出现，告知您开发者模式现已启用。

![开发者模式已启用](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.zh.png)

1. 提交以下问题以调用提示。

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![输入问题](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.zh.png)

1. 我们会再次看到来自 **IT 专家** 提示的模型响应作为消息返回。向下滚动到消息底部，会显示一个带有调试信息的卡片。

通过选择展开 **代理调试信息**。

![代理调试信息](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.zh.png)

1. 在这里您会找到运行时发生的代理元数据信息。

![代理调试信息展开](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.zh.png)

在我们的使用案例中，我们将重点关注 _Actions_ 部分。

- **匹配的操作** 突出显示应用搜索过程中找到的功能的当前状态。
- **选择的操作** 突出显示应用决策过程中选择运行的功能的当前状态。

![代理调试信息展开](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.zh.png)

在这里我们可以看到代理协调器根据声明式代理的指令选择调用了 IT 专家提示。这在 _Executed Actions_ 部分中进一步概述，并告诉我们它成功调用了提示。

![查看代理调试信息](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.zh.png)

1. 要关闭开发者模式，请在 Copilot 消息字段中输入以下内容并提交。

    ```text
    -developer off
    ```

确认消息会出现，告知您开发者模式已禁用。太棒了，现在您知道如何验证 Microsoft 365 Copilot 中的声明式代理是否调用了您的提示 🌞

![开发者模式已禁用](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.zh.png)

1. 我们现在将在 Microsoft Teams 中测试我们的代理。使用左侧菜单导航到 **应用**，然后在 _应用_ 部分选择 **Teams**。

![在应用中选择 Teams](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.zh.png)

1. Microsoft Teams 将在新的浏览器标签页中加载，然后会显示 Microsoft 365 Copilot 的使用条款，选择 **同意**。

![选择同意](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.zh.png)

1. Microsoft 365 Copilot 将默认加载，右侧窗格列出所有可用代理，包括 **Contoso Tech Support Pro** 声明式代理。

![Microsoft 365 Copilot 在 Teams 中](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.zh.png)

1. 在左侧菜单中选择 **省略号图标 (...)**。可以在搜索字段中搜索 **Contoso Tech Support Pro**，或者如果您看到代理，直接选择它。

您还可以右键单击鼠标，将代理 **固定** 到左侧菜单中以便快速访问。

![选择并固定代理](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.zh.png)

1. 我们的代理将加载。接下来测试我们的代理。输入以下提示并提交。

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![固定代理](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.zh.png)

1. 提示的模型响应将显示。

![Teams 中的响应](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.zh.png)

几分钟内，您已经学会了如何发布声明式代理并在 Microsoft 365 Copilot 和 Microsoft Teams 中进行测试 😊

## ✅ 任务完成

恭喜！ 👏🏻 您已经在 Copilot Studio 中构建了一个声明式代理，添加了提示，指示代理使用提示，并学会了如何测试和发布您的代理到 Microsoft 365 Copilot 和 Microsoft Teams。

您的代理现在已准备就绪——随时为内部用户提供帮助、解决问题和服务。

这就是 **实验室 03 - 在 Microsoft Copilot Studio 中为 Microsoft 365 Copilot 构建声明式代理** 的结束，点击以下链接进入下一课。

⏭️ [进入 **创建新解决方案** 课程](../04-creating-a-solution/README.md)

下次再见，保持敏锐。企业工作的未来依赖于代理——现在您知道如何构建一个。

## 📚 战术资源

🔗 [在 Microsoft Copilot Studio 中为 Microsoft 365 Copilot 构建声明式代理](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [添加提示](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [与其他用户共享代理](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [为您的代理构建提示](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="分析" />

---

**免责声明**：  
本文档使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。原始语言的文档应被视为权威来源。对于重要信息，建议使用专业人工翻译。我们对因使用此翻译而产生的任何误解或误读不承担责任。