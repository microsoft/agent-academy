<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "180f9cc0b40527f61be092c9b0f72aba",
  "translation_date": "2025-10-18T03:01:11+00:00",
  "source_file": "docs/recruit/06-create-agent-from-conversation/README.md",
  "language_code": "zh"
}
-->
# 🚨 任务 06：使用自然语言和您的数据在 Copilot 中创建自定义代理

## 🕵️‍♂️ 代号：`代理锻造行动`

> **⏱️ 行动时间窗口：** `~75分钟`

🎥 **观看操作演示**

[![创建自定义代理视频缩略图](../../../../../translated_images/video-thumbnail.9d5fddc1190fd4a04537488795821ac2f88fdcfe00e017f6e575a33f724e39cb.zh.jpg)](https://www.youtube.com/watch?v=qZTtQVncGFg "在 YouTube 上观看操作演示")

## 🎯 任务简报

欢迎回来，代理制造者。这次任务将让您掌控 Copilot Studio 中最强大的功能——仅使用自然语言从零开始创建自定义代理，并通过您自己的数据为其赋能。

这不仅仅是另一个聊天机器人。您正在构建一个知识驱动的数字同事——一个能够推理、响应并参考真实企业信息的助手。

您的武器是什么？自然语言。您的任务是什么？设计、训练并测试一个完全定制的 IT 帮助台代理，它可以使用 SharePoint、上传的文件或公司 URL 来回答 IT 问题。

让我们从头开始构建您的代理。

## 🔎 目标

在本次任务中，您将学习：

1. 了解什么是自定义代理以及它们与预构建模板的不同之处
1. 使用自然语言提示和 Copilot 的对话设计创建代理
1. 使用企业知识源（包括 SharePoint、文档和网站）为代理赋能
1. 了解生成式编排以及代理如何动态搜索和使用多个数据源进行响应
1. 构建并测试一个完全功能的 IT 帮助台代理，它可以从您的数据中回答问题

## 🤔 什么是_自定义_代理？

自定义代理是您在 Copilot Studio 中创建和设计的聊天机器人或虚拟助手，用于帮助用户完成特定任务或回答问题。之所以称为自定义，是因为：

- **您决定用途** - 帮助用户申请休假、检查订单状态、提供 IT 相关问题的帮助。
- **您定义对话** - 代理的说话内容以及响应方式。
- **您用自己的数据赋能它** - 通过内置支持的知识资源连接到您的企业数据。
- **您将其连接到自己的系统或应用程序** - 选择连接器、流程、REST API 和模型上下文协议服务器。

!!! note
    可以这样理解：您正在构建自己的数字助手，它可以与用户对话并为他们完成任务，例如回答问题、收集流程所需的信息或连接到您的企业数据。

### 🤖 自定义代理可以做什么？

自定义代理可以完成以下任务：

- 向用户询问信息，例如姓名、日期或偏好。
- 将这些信息保存到数据库或表中。
- 根据问题查找数据并回答。
- 在没有用户直接交互的情况下自主工作。
- 触发操作，可以是用户直接交互时按需触发，也可以是自主触发，例如发送电子邮件或创建记录。

### 👩🏻‍💻 为什么使用自定义代理？

- 通过自动化重复任务节省时间。
- 为用户提供友好且引导式的体验。
- 根据您的业务或项目需求进行定制。

### ✨ 示例

您创建了一个帮助员工申请休假的自定义代理。

它会询问员工的姓名、休假日期以及经理的姓名，然后将信息保存到管理休假申请的指定系统中，例如 SharePoint 列表。

现在，员工无需导航到 SharePoint 列表并创建新项目，而是直接与代理聊天即可。

## 🗣️ 使用自然语言创建代理

之前您已经学习了如何在 Copilot Studio 中使用预构建代理模板快速构建代理（参见[第05课 - 使用预构建代理快速入门](../05-using-prebuilt-agents/README.md)）。在本课中，我们将深入探讨使用 Copilot 进行对话式创建的体验。Copilot Studio 使您可以通过与 Copilot 聊天轻松构建代理，就像进行对话一样。

在 Copilot Studio 中，您无需编写代码来创建代理。相反，您只需用简单的语言描述您希望代理完成的任务，Copilot 会通过类似聊天的体验一步步帮助您构建。

## 🌱 但我对“描述我想要的内容”还不熟悉——该怎么办？

用自然语言描述以创建自定义代理可能对您来说是一个新概念。每当您在 Microsoft 产品和服务中使用 Copilot 时，您实际上是在使用一种形式的_提示_。

提示是您给 AI 代理的消息或指令，用来告诉它您希望它完成什么任务。可以将其理解为给助手指示。您的指令越清晰，助手就越容易理解并执行。

### 🪄 为什么提示很重要

- 它们指导代理的行为。
- 它们帮助代理理解应该进行什么样的对话。
- 一个好的提示可以让代理更有帮助、更准确。

### 📝 编写好提示的技巧

- 清晰且具体——明确说明您希望代理完成的任务。
- 从用户的角度思考——用户会说什么？代理应该如何回复？
- 包含示例——如果可能，提供一个示例互动。

### ✨ 示例

假设 HR 团队需要一个代理来帮助处理休假申请。

提示可以是：

    “我想创建一个代理来帮助用户提交休假申请。当用户说他们想申请休假时，代理应该询问他们的姓名、休假的开始日期、结束日期以及他们经理的姓名。一旦用户提供了这些信息，代理应该将其保存到名为‘休假申请’的 SharePoint 列表中，并在专门的 Microsoft Teams 频道中发布通知。”

为什么这个提示有效：

- **明确说明目标** - 提交休假申请
- **描述用户互动** - 用户说什么，代理应该询问什么
- **列出所需数据** - 姓名、开始日期、结束日期、经理
- **提到数据存储位置** - 名为“休假申请”的 SharePoint 列表

## 🔮 好的，我已经创建了我的代理……接下来如何用知识赋能它？

在 Copilot Studio 中，知识源是代理可以查找信息以提供更好答案的地方。当您添加这些源时，您的代理可以从 Power Platform、Dynamics 365、网站以及您的公司使用的其他系统或服务中提取企业数据。

这些源与 AI 协同工作，帮助您的代理更准确地响应用户问题，这通过所谓的**生成式编排**实现。

### 🌿 在代理上下文中，什么是生成式编排？

生成式编排意味着代理使用 AI 动态决定如何回答问题，通过结合其内置语言技能和您添加的知识源信息来完成。

当用户提出问题时，代理会：

- 使用 AI 理解问题。
- 可以通过动态生成问题向用户询问缺失信息。
- 选择最相关的知识源。
- 搜索这些源以获取答案。
- 使用找到的信息生成自然且有帮助的响应。

### 🏦 为什么知识源很重要？

1. **更智能的答案** - 添加知识源后，您的代理可以使用来自组织的真实数据提供更好、更准确的答案。

1. **减少手动工作** - 您无需编写每一个可能的响应。代理可以自动搜索您添加的源并进行回复。

1. **使用可信信息** - 您的代理可以从您已经使用的系统（如 Dataverse、SharePoint 或公司网站）中提取答案，确保用户获得可靠的信息。

1. **与生成式 AI 协作** - 知识源和 AI 帮助您的代理理解问题并自然地响应，即使问题没有预先编程或作为初始提示添加。

1. **灵活且可扩展** - 您可以在设置期间或之后随时添加知识源，代理会随着您的需求变化变得更智能。

### ✨ 示例

假设您创建了一个帮助员工处理 HR 问题的代理。您添加了公司的 HR 政策文档和 SharePoint 网站作为知识源。

当员工问，“我有多少天的年假？”时，代理使用生成式编排搜索这些源，并根据正确的政策回复，而无需您手动编写答案。这节省了您为员工可能提出的每个问题编写答案的时间。

## 可添加的知识源类型

1. **公共网站**
    - **功能：** 使用 Bing 搜索特定网站（如公司网站）。
    - **用途：** 非常适合提取公共信息，例如常见问题解答或产品详情。

1. **文档**
    - **功能：** 使用您直接上传到代理的文档，例如 PDF 或 Word 文件。这些上传的文件安全存储在 Dataverse 中。
    - **用途：** 使代理能够根据内部指南、手册或政策回答问题。

1. **SharePoint**
    - **功能：** 使用 Microsoft Graph Search 连接到 SharePoint 文件夹或文件。
    - **用途：** 非常适合访问存储在 SharePoint 中的团队文档、HR 政策或项目文件。

1. **Dataverse**
    - **功能：** 使用来自 Dataverse 环境表和行的结构化数据，并可以应用表和列的同义词和术语表定义以改善代理响应。
    - **用途：** 当需要查找存储在 Dataverse 中的企业数据（如客户信息）时。

1. **实时知识与连接器**
    - **功能：** 允许您的代理在对话期间使用用户自己的权限访问其他企业系统（如 Salesforce、ServiceNow、Dynamics 365、AzureSQL、Databricks 等）的实时数据。
    - **用途：** 提供最新、安全且准确的响应，无需存储或复制数据，使您的代理更智能、更安全。

1. **Azure AI Search**
    - **功能：** 允许您的代理使用语义和向量搜索，通过 Azure 中存储的大量文档集搜索以理解用户问题。
    - **用途：** 从复杂数据源中提供准确、可信的答案，支持引用，并且在具有安全访问控制的大型文档集合中具有良好的扩展性。

## 🔒 关于安全的说明

### 知识源认证

某些源（如 SharePoint 和 Dataverse）需要用户认证。这意味着代理只会在其响应中引用用户有权限查看的数据。而其他源可能需要额外的配置，例如 Azure AI Search 需要 Azure 账户并指定认证类型。

## 在 Copilot Studio 中改进代理的响应

在通过对话式创建体验生成代理后，您需要根据 Copilot 从您的提示生成的指令测试您的代理。在 Copilot Studio 中改进代理的响应是确保它清楚理解您的目标并拥有正确信息的关键。

1. **优化代理指令** - 这是您告诉代理如何表现的地方。使用清晰、具体的语言。

    例如：

    ✅ “表现得像一个友好的客户支持代理，简单地解释问题。”

    ❌ “要有帮助。”（太模糊）

1. **检查语气和语言** - 确保代理的语气与您的受众匹配。

    您可以设置为：

    - 友好且随意。
    - 专业且简洁。
    - 支持性且耐心。

1. **添加或更新知识源** - 如果您的代理需要回答某个主题的问题，请确保它可以访问正确的信息。

    - 添加网站、文档或常见问题解答的链接。
    - 保持内容的最新。
    - 使用清晰、结构良好的信息。

1. **使用主题和触发器** - 如果您的代理需要处理特定任务或对话，您可以创建带有触发短语的主题。这有助于更精确地引导对话。我们将在后续课程中学习更多相关内容。

1. **用真实问题进行测试** - 尝试向您的代理提出用户可能会问的问题。

    如果答案不够好：

    - 调整系统指令。
    - 添加更多示例或知识。
    - 重新措辞您的问题，看看它如何响应。

1. **审查和迭代** - 改进代理是一个持续的过程！

    发布后：

    - 收集用户反馈。
    - 关注常见问题或困惑。
    - 不断优化代理的设置。

## 🧪 实验 06：在 Copilot Studio 中创建自定义代理

现在我们将学习如何创建一个可以基于您的数据进行聊天的自定义代理

- [6.1 使用自然语言在 Copilot 中创建代理](../../../../../docs/recruit/06-create-agent-from-conversation)
- [6.2 使用 SharePoint 网站添加内部知识源](../../../../../docs/recruit/06-create-agent-from-conversation)
- [6.3 通过上传文档添加内部知识源](../../../../../docs/recruit/06-create-agent-from-conversation)
- [6.4 测试代理](../../../../../docs/recruit/06-create-agent-from-conversation)

### ✨ 使用场景
我们将使用[第03课 - 为Microsoft 365 Copilot创建声明式代理](../03-create-a-declarative-agent-for-M365Copilot/README.md#use-case-scenario)中的相同用例。

**作为**一名员工

**我希望**从IT服务台代理处快速准确地获得设备问题、网络故障排除、打印机设置等问题的帮助

**以便我可以**保持高效工作，快速解决技术问题

让我们开始吧！

### ✨ 前提条件

- **SharePoint站点**

我们将使用[第00课 - 课程设置 - 第3步：创建新的SharePoint站点](../00-course-setup/README.md#step-4-create-new-sharepoint-site)中的**Contoso IT** SharePoint站点。

如果您尚未设置**Contoso IT** SharePoint站点，请返回[第00课 - 课程设置 - 第3步：创建新的SharePoint站点](../00-course-setup/README.md#step-4-create-new-sharepoint-site)。

- **解决方案**

我们将使用[第04课 - 为您的代理创建解决方案](../04-creating-a-solution/README.md#41-create-a-solution-publisher)中的**Contoso Helpdesk Agent**解决方案。

如果您尚未设置**Contoso Agent**解决方案，请返回[第04课 - 为您的代理创建解决方案](../04-creating-a-solution/README.md#41-create-a-solution-publisher)。

### 6.1 使用自然语言通过Copilot创建代理

!!! warning "Copilot问题可能因会话而异"

    Copilot的对话创建体验可能每次都会有所不同，提供的指导问题可能与之前略有不同。

1. 进入Copilot Studio的主页，在字段中输入以下提示，描述IT服务台代理。提示包括代理的目标、上下文、预期任务以及代理响应的格式。

    ```text
    You are an IT help desk agent. Your goal is to assist users with their IT issues. You can access information from our company's knowledge base at https://support.microsoft.com/en-us. Your responses should be polite and helpful. If a user reports a slow computer, ask about the age of the device, current software versions, and if they've recently installed any new programs. If a user is experiencing trouble logging into their email, guide them through password reset procedures. You should be concise and informative, using step-by-step instructions with bullet points when appropriate.
    ```

      ![输入提示](../../../../../translated_images/6.1_01_Prompt.c4be2ff2cac9fde3659f2e7016e48f01860b55523d3320b3b8450ef2fcb1f51a.zh.png)

1. 接下来将加载Copilot的对话创建体验。您会看到Copilot正在响应您的请求。

      ![Copilot对话创建体验](../../../../../translated_images/6.1_02_ConversationalCreationExperienceLoads.115eaf4e5a15c1b60bc0d25c97a0d97d462d6c740cfed5de369b2bd8fd1cc8bc.zh.png)

1. Copilot确认代理已根据提供的指令设置，并询问代理的名称确认。我们将要求Copilot将代理命名为：

       ```text
       Contoso Helpdesk Agent
       ```

      ![重命名代理](../../../../../translated_images/6.1_03_AgentName.a848acea10cd1d3d6ba68fea2b0e094ecbd130a124413e3c8134198c81654833.zh.png)

1. Copilot执行请求，我们会看到代理的名称已在代理面板中更新。接下来，Copilot要求我们完善指令。它询问我们如何应对特定问题，我们将要求它确认问题、提供示例主题，并以项目符号格式化响应。

    复制并粘贴以下内容，并提交请求给Copilot。

       ```text
       优先处理紧急请求。帮助解决的IT问题或场景示例：设备问题、网络连接问题、登录问题。在故障排除时，首先确认他们的问题并表示同情，然后使用项目符号提供逐步指导，并询问是否需要进一步的帮助。
       ```

      ![完善代理指令](../../../../../translated_images/6.1_04_RefineInstructions.9575407dbc12e0399691068d20e0d0252bb8b8f839cf53ee9d715fe2c16afa70.zh.png)

1. Copilot收到请求后将更新代理的指令。注意右侧面板中，现在出现了初始提示。这些提示是根据我们的指令生成的。

    接下来，Copilot要求提供公共网站以支持代理的知识。

    复制并粘贴以下内容，并提交请求给Copilot。

      ```text
      https://support.microsoft.com
      ```

      ![添加公共可访问网站](../../../../../translated_images/6.1_05_KnowledgeSource.3aec8d869b73d273f88c62cf99bb2f731df83a83c1ca54d92d6e96b86a570637.zh.png)

1. 公共网站将被添加为知识来源。Copilot询问是否需要添加其他知识来源。我们不需要添加其他公共网站。

    复制并粘贴以下内容，并提交请求给Copilot。

      ```text
      Proceed with setup
      ```

      ![继续设置](../../../../../translated_images/6.1_06_ProceedWithSetup.11ceb9ccccccd19418711681d42b602ee223ebd017d6bf300088de84d1d35f1d.zh.png)

1. Copilot确认我们的Contoso Helpdesk Agent设置已完成，但我们将进行最后一次修改，我们将要求代理不回答与人力资源相关的问题。这让我们的代理知道它不应该回答用户提出的与人力资源相关的问题。

    复制并粘贴以下内容，并提交请求给Copilot。

       ```text
       不提供与人力资源相关问题的帮助，例如：我的休假余额是多少？我有多少病假？我们的工资门户的URL是什么？
       ```

      ![不回答与人力资源相关的问题](../../../../../translated_images/6.1_07_DoNotTalkAbout.d9ccbbd15b9793e1642b365be6968548f6f250be5d541f1ad06eb9f12985e94f.zh.png)

1. 指令将被更新为不提供与人力资源相关问题的帮助。我们不需要进一步更新，代理已准备好创建。

      ![代理指令已更新](../../../../../translated_images/6.1_08_AgentInstructionsUpdated.4de1112eeb5c8e2e2fe03fcbc6d332bdc3b1de740d9a5ab6b1ec30e27e241096.zh.png)

1. 在创建代理之前，让我们做几件事。

    首先，选择**配置**选项卡以查看我们与Copilot对话中定义的代理详细信息。在这里您可以看到名称、描述、指令、知识和建议/初始提示。

      ![查看代理详细信息](../../../../../translated_images/6.1_09_ViewAgentDetails.72c7f66721d6ac354bcc7186204bb0ad169456b0b7756f5e5a5e0f090e802a57.zh.png)

1. 其次，让我们测试我们的代理。复制并粘贴以下内容，并提交问题给我们的代理。

       ```text
       如何检查我的Surface的保修状态？
       ```

      ![测试代理](../../../../../translated_images/6.1_10_TestAgent.8b1a0f1d98f4fa5b61336e1c4ac6d77b4822283314c2941cb0e04bf5247d8489.zh.png)

1. 问题的响应将显示，答案以项目符号的逐步指南格式呈现。太棒了，我们的代理可以正常工作！ 🙌🏻

      ![代理响应](../../../../../translated_images/6.1_11_AgentResponse.c5fb305335b8e9b456b0f75ec9e237d4abbc3e9a1a6976e14bb656f1adffb14a.zh.png)

1. 最后，我们将再次检查代理创建的解决方案是否是我们在[第04课 - 创建新解决方案](../04-creating-a-solution/README.md#42-create-a-new-solution)中创建并选择为首选解决方案的那个。

    选择**省略号图标(...)**，然后选择**更新高级设置**。

      ![更新高级设置](../../../../../translated_images/6.1_12_UpdateAdvancedSettings.5943949ae7c9f492fb90779b0284283deb4186f14cd6588c46920f8e50d8d6d0.zh.png)

1. **高级设置**模式将出现，我们可以看到之前创建的解决方案默认被选中。这是因为我们在[第04课 - 创建新解决方案](../04-creating-a-solution/README.md#42-create-a-new-solution)中选择了我们的解决方案作为首选解决方案。

    选择**取消**。

      ![高级设置视图](../../../../../translated_images/6.1_13_AdvancedSettings.fff0861831346d5bef4e7731fed83073aca6d17aa940633040f65b1f300aee15.zh.png)

1. 现在让我们创建我们的自定义代理！选择**创建**。

      ![选择创建](../../../../../translated_images/6.1_14_CreateAgent.7330a5fbe44a0664f35c5b5502e499f6dd3bad55d13094ef6c22608e8f8831b1.zh.png)

1. Copilot Studio将开始配置我们的代理。

      ![设置代理](../../../../../translated_images/6.1_15_SettingUpAgent.34028a37bc2922eae13d0a18bb468bd738608b4de948192d89c3a2680fff2496.zh.png)

1. 一旦代理配置完成，我们可以看到代理的详细信息反映了我们在Copilot对话创建体验中请求的内容。向下滚动查看代理，您会看到名称、描述、指令、知识来源和建议的提示。编排模式默认启用，默认模型用于代理的响应模型。

      ![代理已创建](../../../../../translated_images/6.1_16_AgentCreated.91edb1939b33d158930cd385c0d97c320958504e224ffc163ed5030b0cdc72a7.zh.png)

      ![知识来源](../../../../../translated_images/6.1_17_KnowledgeSources.00f1ed0b7f405e4820971834fb75e39a80659cf1b9eeeee42d861bfc4656240f.zh.png)

      ![建议的提示](../../../../../translated_images/6.1_18_SuggestedPrompts.20b84b9420858de8485460cc50a8e73798b08bb2022c946899adcbf9b484e0f0.zh.png)

1. 现在让我们测试新创建的代理。在右侧的**测试**面板中，选择**活动地图**图标。

      ![选择活动地图](../../../../../translated_images/6.1_19_ActivityMap.b2e6c77c69fd953818dc73b4dbe2e6d46529cf105d7a4a18c590d15c0b717cf4.zh.png)

1. 在**测试**面板中输入以下问题。

       ```text
       如何找到我的Windows 11产品密钥？
       ```

      ![测试新创建的代理](../../../../../translated_images/6.1_20_TestAgent.a9d3a761477c9b79facd132c173ec886d808320ad2cbc0347066a20c0f9dd669.zh.png)

1. 活动地图将加载，实时显示代理正在处理的路径。在此场景中，我们的代理已理解问题并搜索知识来源。目前我们有一个来源，即我们之前使用Copilot添加的公共网站，这是代理正在审查的内容。

      ![审查知识来源](../../../../../translated_images/6.1_21_ReviewingSources.78068042898e2960667393c931e120dbe80f6b74c9af222b79446f7a82d5c757.zh.png)

1. 我们的代理随后以项目符号形式提供了答案，正如指令中定义的那样。响应中引用了代理形成其响应的网页。这使用户能够验证答案的来源。

      ![响应中的参考](../../../../../translated_images/6.1_22_Response.44a088e80f2a9fac74bcd364571f1ebb900b43e9e647089ef51d39b809b0f0e9.zh.png)

1. 您还可以通过向下滚动活动地图中的**知识模式**来查看响应及其来源。

      ![引用的来源](../../../../../translated_images/6.1_23_ReferencedSources.ca8e41855284446d121a34fd9d8d667e05016f5eda741adcf7f356ac2c59c559.zh.png)

恭喜！您已经在Copilot Studio中构建了您的第一个自定义代理 🙌🏻

### 6.2 使用SharePoint站点添加内部知识来源

之前通过Copilot，我们在对话创建体验中添加了一个公共网站作为代理的外部知识来源。现在我们将使用SharePoint站点添加一个内部知识来源。这将是您在[第00课 - 课程设置](../00-course-setup/README.md#step-4-create-new-sharepoint-site)中创建的SharePoint站点。

1. 选择**+ 添加知识**。

      ![选择添加知识](../../../../../translated_images/6.2_01_AddKnowledge.5e441f7e3b0ebb25218bece75394ecf4c8c3a60e1b5d8ea15ca020546352f256.zh.png)

1. 选择**SharePoint**。

      ![选择SharePoint](../../../../../translated_images/6.2_02_SelectSharePoint.5bd29d31cc76f581db3eef474731fc2dfce4ef1dab86d9cc11716323ba726408.zh.png)

1. 在SharePoint URL字段中粘贴您在[第00课 - 课程设置](../00-course-setup/README.md#step-4-create-new-sharepoint-site)中创建的SharePoint站点地址，然后选择**添加**。

      ![输入SharePoint站点URL](../../../../../translated_images/6.2_03_AddSharePointURL.974c251d9690524a8bfa4c9dd930af3d834245749fb9f1fda508c3b1f9773827.zh.png)

1. 将SharePoint站点的名称更新为`Contoso IT`，然后选择**添加**。

      ![更新SharePoint站点名称并添加到代理](../../../../../translated_images/6.2_04_UpdateNameAddToAgent.46a814c09586fe135bffb77814ba13d0593f25feaaa989174c97e80345f03866.zh.png)

1. SharePoint站点现在已作为知识来源添加，状态为_准备就绪_。状态列将显示知识来源是否已成功加载/连接，或者是否存在问题。

      ![SharePoint站点状态](../../../../../translated_images/6.2_05_SharePointStatus.90a9001978f31c5d4b183d5ecc4869c81dd9fc1bb8a6b1ef4675fcb51d52f8e5.zh.png)

### 6.3 通过上传文档添加内部知识来源

现在我们将通过直接上传文档到我们的代理来添加另一个内部知识来源。

1. 选择**添加知识**。

      ![选择添加知识](../../../../../translated_images/6.3_01_AddKnowledge.d93caa805efb7e2a433d9777f8eb1789dc5daf4f9ebe95da2a74a2b57cffdd33.zh.png)

1. 选择**上传文件**或**选择浏览**。

      ![选择上传文件](../../../../../translated_images/6.3_02_UploadFile.662de4f3916bfa3f34a6699a9a45846e64e71a70dfecbc656fb5b511792de6b6.zh.png)

1. 下载此[示例文件](../../../../../docs/recruit/06-create-agent-from-conversation/assets/Contoso_Guest_WiFi_Connection_Guide.docx "下载")并在文件资源管理器中选择它。选择**打开**。

      ![选择文档](../../../../../translated_images/6.3_03_SelectFile.077d73491dc6ff1f6114d259261ee68334c4da182c3b55233468637d1989f14c.zh.png)

1. 文件已被选中上传。接下来选择**添加到代理**。

      ![选择添加到代理](../../../../../translated_images/6.3_04_AddToAgent.1eec469d6d28c22959c8d7f3ad39aa0df5e07adfdb85ce1e21c0c4fe31c27db5.zh.png)

1. 文档将被添加到代理中。等待上传完成，不要关闭浏览器窗口。文档的状态最初显示为_进行中_，等待状态更新为**准备就绪**后再测试您的代理。

      ![文件状态](../../../../../translated_images/6.3_05_FileStatus.2029b8aa0109a6f46372291e9bba33429c2ebd572efa81702a73cae91fbf3a90.zh.png)

现在让我们测试我们的代理！

### 6.4 测试代理

我们将通过向Contoso Helpdesk Agent提问来测试我们的三个知识来源。

1. 在测试面板中选择**刷新**图标，然后选择**活动地图**图标。

      ![刷新图标](../../../../../translated_images/6.4_01_RefreshAndActivityMap.c24ebc6c277786dab75941dac0b6e55f3dbb244b29fb791c87e4aba5c4a56c81.zh.png)

1. 输入以下问题以测试我们的公共网站（外部）知识来源。

      ```text
      How can I find the serial number on my Surface device?
      ```

      ![输入提示以测试网站知识来源](../../../../../translated_images/6.4_02_TestQuestion1.3a5aeaaa72a9578a05edd4575275e1ba60ecaf8c7377ab13872619580e0309f9.zh.png)

1. 接下来您会看到代理正在审查知识来源，并使用网站知识来源提供响应。
![网页参考响应](../../../../../translated_images/6.4_03_ReviewingSources.a56742505402eab51b423b543c814242728ff7947e443360740b3e5dac82ba65.zh.png)

1. 返回的响应中可以看到答案引用了其来源的网页。如果向下滚动活动地图中的知识模态窗口，可以看到代理搜索的其他知识来源，包括 SharePoint 站点和上传的文件。

   然而，这些并未被使用，因为在 **引用的来源** 部分中，仅引用了网站知识来源。答案是基于网站知识来源生成的。如果选择这些引用，将会跳转到相关的网页。

![引用和搜索的知识来源](../../../../../translated_images/6.4_04_ReferencedSources.2fb91e8ed7cac8196c3cc1e43006512d4138adb4f240bdab66cd2af5fd1ec7c6.zh.png)

1. 现在我们来测试 SharePoint 站点知识来源和文档知识来源在单条消息中的表现。输入以下问题。

      ```text
      How can I access our company Contoso VPN? How do guests connect to the Contoso Guest wifi?
      ```

![测试 SharePoint 和文档知识来源](../../../../../translated_images/6.4_05_TestQuestion2.f77ce87578b59386ec5491716996aff9247c5e5ad458a51226276238adb282f3.zh.png)

1. 再次可以看到代理在三个知识来源中进行审查，以生成对单条消息中问题的响应。代理在单条消息中回答了两个问题，并分别引用了生成响应的 SharePoint 页面和文档。

   在活动地图中的知识模态窗口中，可以看到 SharePoint 站点和文档被用作参考来源。您可以完全了解哪些知识来源被用来回答这两个问题。

![引用的知识来源](../../../../../translated_images/6.4_06_ReferencedSources.caf049dac28b4317c39b074b481f5d7d5b1b92fd792fc4b796fec0c1575f9581.zh.png)

1. 验证生成的响应是否正确总是很重要的。选择 SharePoint 站点引用，加载 FAQs SharePoint 页面，您可以向下滚动查看 VPN 指南。

![查看 SharePoint 页面](../../../../../translated_images/6.4_07_VerifySharePoint.6ee48515fedf37a62564ddc388c2452751ed5777cda321d887c315c2de78d293.zh.png)

1. 接下来，选择文档引用，一个模态窗口会出现，显示与答案相关的文档内容。

![查看文档](../../../../../translated_images/6.4_08_VerifyDocument.0f0680b63e6bdd0b558eb287e85965b87ab820e12b25b1e0965f8ebbde795222.zh.png)

代理可以在单条消息中回答多个问题，并搜索知识来源，同时在响应中引用知识来源。确保通过查看引用来验证响应的正确性。

## ✅ 任务完成

恭喜！👏🏻 您已经学会如何使用自然语言创建自己的定制代理，它可以基于三个不同的知识来源与您的数据进行对话 🙌🏻

这是 **实验室 06 - 使用 Copilot 创建代理** 的结束，点击以下链接进入下一课。您在本实验室中创建的定制代理将在下一课的实验室中使用。

⏭️ [进入 **添加新主题和触发器** 课程](../07-add-new-topic-with-trigger/README.md)

欢迎加入精英团队。您现在已经掌握了打造能够与您对话、引用您的数据并支持您的团队的数字代理的技能。继续前进——您的任务才刚刚开始。

## 📚 战术资源

🔗 [快速入门：创建和部署代理](https://learn.microsoft.com/microsoft-copilot-studio/fundamentals-get-started?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172617-ebenitez)

🔗 [创建和删除代理](https://learn.microsoft.com/microsoft-copilot-studio/authoring-first-bot?WT.mc_id=power-172617-ebenitez)

🔗 [关键概念 - 创建代理](https://learn.microsoft.com/microsoft-copilot-studio/authoring-fundamentals/?WT.mc_id=power-172617-ebenitez)

📺 [使用自然语言创建定制代理](https://aka.ms/ai-in-action/copilot-studio/ep1)

📺 [为代理添加知识](https://aka.ms/ai-in-action/copilot-studio/ep2)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/06-create-agent-from-conversation" alt="分析" />

---

**免责声明**：  
本文档使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。原始语言的文档应被视为权威来源。对于重要信息，建议使用专业人工翻译。我们对因使用此翻译而产生的任何误解或误读不承担责任。