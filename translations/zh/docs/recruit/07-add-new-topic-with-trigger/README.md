<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c04b3587170139bc23e3b5cfc24c89ac",
  "translation_date": "2025-10-18T02:47:16+00:00",
  "source_file": "docs/recruit/07-add-new-topic-with-trigger/README.md",
  "language_code": "zh"
}
-->
# 🚨 任务07：添加新主题、触发器和节点

## 🕵️‍♂️ 代号：`保持主题行动`

> **⏱️ 任务时间窗口：** `~60分钟`

🎥 **观看操作演示**

[![触发器视频缩略图](../../../../../translated_images/video-thumbnail.a84cf7cb473be282861469420c5e2c16adb53bcfd64c7c07fbd579e8d32bf8b2.zh.jpg)](https://www.youtube.com/watch?v=7iPAZaA8nJs "在YouTube上观看操作演示")

## 🎯 任务简报

你已经创建了一个智能代理。它可以倾听、学习并回答问题——但现在是时候更具策略性了。在这个任务中，你将深入了解其工作原理，并教会你的智能代理如何精准地响应特定的提示。

通过主题和触发器，你的智能代理可以：

- 识别意图

- 使用逻辑引导对话

- 收集和存储变量

- 触发流程并采取行动

你不仅仅是在构建对话，而是在为它的决策核心进行布线。欢迎来到神经枢纽。

## 🔎 目标

在这个任务中，你将学习：

1. 理解什么是主题以及它在为智能代理创建结构化对话中的作用
1. 学习主题的组成，包括触发短语和对话节点
1. 探索不同类型的对话节点以及如何使用Power Fx实现动态逻辑
1. 从头开始创建自定义主题以处理特定用户请求和任务
1. 构建一个功能性主题，通过连接器和工具连接到SharePoint数据

## 🤔 什么是主题？

主题是一种结构化的对话，帮助你的智能代理响应特定的用户问题或任务。可以将主题视为智能代理可以处理的小型对话或任务。每个主题都设计用于响应特定的用户问题或请求。

### 🌌 主题的目的

根据用户需求，主题通常有以下三种目的：

**信息型** - 回答以下问题：

- `什么是……？`
- `什么时候……？`
- `为什么……？`
- `你能告诉我……？`

**任务完成型** - 帮助用户完成某些事情：

- `"我想要……"`
- `"我该如何……？"`
- `"我需要……？"`

**故障排除型** - 解决问题：

- `某些东西无法正常工作……`
- `我遇到了一个错误信息……`
- `我看到了一些意外的情况……？`

你还可以为模糊问题创建主题，例如`我需要帮助`，这些问题会在继续之前询问用户更多细节。

## 🐦 为什么主题有用？

主题可以帮助你：

- 组织智能代理的知识。

- 让对话更自然。

- 有效解决用户问题。

## 🪺 主题的类型

1. **系统主题** - 这些是内置的，用于处理常见事件，例如：
    - 开始对话
    - 结束对话
    - 处理错误
    - 请求用户登录
    - 升级到人工客服

1. **自定义主题** - 你可以创建这些主题来处理特定任务或问题，例如：
    - 员工请假申请
    - 请求新设备或更换设备

![主题的类型](../../../../../translated_images/7.0_01_Topics.6e55d2e01c1cc0994b7af05be3c1629b78d46b37cc82f59c7893d4ad90af707e.zh.png)

## 🧬 主题的组成

每个主题通常包含以下内容。

### 🗣️ 触发短语

这些是用户可能会说出的用来启动主题的词或句子。

**示例：**

对于请假申请主题，触发短语可以是：

- `我想请假`
- `申请休假`
- `请假申请`
- `我该如何提交请假申请？`

对于设备请求主题，触发短语可以是：

- `我需要一个新设备`
- `我可以申请设备吗？`
- `你能帮我申请设备吗`

### 💬 对话节点

一个主题由多个节点组成，这些节点是智能代理在触发主题后遵循的步骤。你可以连接这些步骤来构建智能代理与用户互动时遵循的对话流程。

可以将这些节点视为指令或操作，例如：

- 向用户提问
- 发送消息
- 调用外部服务，例如请假管理系统
- 设置或检查变量
- 使用条件分支对话
- 跳转到另一个主题

![对话节点](../../../../../translated_images/7.0_03_ConversationNodes.7b1d93b7d4522d544d7f9eed597a5ef30b9f96ee1670efd048528ce13423481a.zh.png)

以下是可以添加到智能代理中的主要节点类型：

#### 发送消息

- **目的** - 向用户发送消息。
- **示例** - `感谢您的请求！我会帮助您解决问题。`

此节点允许智能代理向用户发送消息，可以是简单的文本或丰富的内容，如图片、视频、卡片、快速回复和自适应卡片。

你可以使用变量个性化消息，为多样性添加多个消息变体，甚至可以为支持语音的渠道自定义语音输出。

!!! tip
    可以将其视为一个“说点什么”的模块，帮助智能代理与用户进行清晰且互动的交流。

#### 提问

- **目的** - 向用户提问并等待他们的回答。
- **示例** - `您的休假日期是什么时候？`

此节点用于在对话中向用户询问特定信息，并将他们的回答存储在变量中以供后续使用。

你可以自定义问题类型，例如文本输入，或使用实体定义用户选择的值列表，并定义如果用户给出无效答案或跳过问题时智能代理的行为。

它还支持丰富的内容，例如图片和快速回复，并允许你微调验证、重新提示和中断设置，以使对话流程更加顺畅。

!!! tip
    可以将其视为一个“提问和倾听”的模块，帮助智能代理以结构化的方式与用户互动。

#### 使用自适应卡片提问

- **目的** - 使用JSON发送丰富的交互式卡片。
- **示例** - 显示一个带有日历日期选择器的卡片，供用户选择日期。

此节点显示丰富的交互式卡片，用户可以填写并提交，例如带有文本框、按钮和图片的表单。它会捕获用户的输入并将其存储在变量中，供智能代理在后续对话中使用。

!!! tip
    可以将其视为一个可定制的“表单构建器”模块，使智能代理更具互动性，并能够从用户那里收集详细信息。

#### 添加条件

- **目的** - 在对话中添加逻辑。检查某些条件并决定下一步操作。
- **示例** - 如果用户说`是`，则进入下一步。如果说`否`，则结束对话。

此节点通过检查变量是否满足某些条件，在智能代理的对话流程中创建决策点。根据条件是否为真或假，智能代理会遵循不同的路径。

!!! tip
    可以将其视为一个“如果-否则”模块，帮助智能代理根据用户输入或存储的数据做出决策。

#### 变量管理

- **目的** - 在对话中存储或清除信息（称为变量）。
- **示例** - 保存用户在显示自适应卡片的提问节点中选择的日期。

此节点允许你在对话中存储和管理信息，可以是用户的姓名、回答或偏好。你可以使用不同类型的变量，例如文本、数字或日期，它们可以限定在单个主题内、在多个主题间共享（全局），甚至可以从系统或环境中提取。

!!! tip
    可以将其视为一个“记忆盒”，帮助智能代理记住信息并在与用户的对话中继续使用。

#### 主题管理

- **目的** - 将对话转移到另一个主题或主题内的步骤，转移对话或结束主题或对话。
- **示例** - 跳转到“休假政策”主题。

此节点允许智能代理在不重新启动对话的情况下从一个主题跳转到另一个主题，结束当前主题，转移或结束对话，或进入同一主题内的不同步骤。它通过在主题之间平滑过渡来引导用户完成对话流程，并且可以在主题之间传递变量以保持上下文。

!!! tip
    可以将其视为一个“跳转到另一个部分/步骤”的模块，帮助智能代理在与用户聊天时更加灵活。

#### 添加工具

- **目的** - 连接到工具，例如连接器、智能代理流程、提示、自定义搜索、搜索查询、技能、模型上下文协议。
- **示例** - 用户提交休假申请后执行的智能代理流程。

此节点为智能代理提供与外部系统交互或执行特定任务的能力，例如发送电子邮件、查询天气或访问数据库。你可以使用内置连接器、自定义API、智能代理流程、提示或连接到模型上下文协议（MCP）服务器，甚至通过计算机使用工具进行桌面应用程序的图形用户界面自动化。

!!! tip
    可以将工具视为“动作模块”，赋予智能代理超能力，能够执行超越“聊天”的任务，例如调用API、运行流程或自动收集用户输入。

#### 生成答案节点

- **目的** - 使用大型语言模型根据用户问题和任何连接的数据生成自然、类似人类的响应。
- **示例** - 使用包含休假权利信息的知识源回答用户关于休假申请的问题。

此节点使智能代理能够使用来自各种知识源的信息（如网站、文档、SharePoint或自定义数据）回答用户问题。它可以作为没有匹配主题时的备用选项，也可以在主题中使用，以根据你为智能代理配置的特定来源提供更详细、动态的答案。

!!! tip
    可以将其视为一个“智能回答模块”，帮助智能代理通过搜索你定义的可信内容提供有用、准确的回答。

#### HTTP请求节点

- **目的** - 通过发送API调用（例如`GET`或`POST`）连接智能代理到外部系统以获取或更新数据。
- **示例** - 当用户询问其剩余休假天数时，智能代理执行`GET`请求到休假管理系统，从API响应中提取`remainingLeaveDays`并将值回复给用户。

此节点允许智能代理通过发送REST API调用（如`GET`或`POST`请求）连接到外部系统。你可以使用标题、正文内容自定义请求，甚至使用Power Fx包含动态数据，然后将响应存储在变量中以供后续对话使用。

!!! tip
    可以将其视为一个“获取信息”模块，帮助智能代理与其他服务进行交互，例如检索用户详细信息或向另一个系统发送数据。

#### 发送事件

- **目的** - 让智能代理发送非消息操作，例如系统更新或工具触发——到客户端或渠道，帮助其执行任务。
- **示例** - 用户加入聊天时显示欢迎消息。

此节点允许智能代理向外部系统或渠道发送非消息操作，这些系统或渠道可以决定如何响应。你为每个事件命名并附加一个值，可以是简单的数字或文本、变量或Power Fx公式，并以JSON对象形式发送。

!!! tip
    可以将其视为一个“静默触发”模块，帮助智能代理在后台执行任务或与外部工具通信，而无需用户说任何话。

## 🏋🏻‍♀️ 在节点中使用Power Fx

在Copilot Studio中，Power Fx是一种低代码编程语言，用于为智能代理添加逻辑和动态行为。它与Microsoft Power Apps中使用的语言相同，设计为简单且类似Excel，使开发人员和非开发人员都能轻松使用。

![Power Fx表达式](../../../../../translated_images/7.3_13_EnterFormula.d17cc9f73e01e1cab8e2420a55bcb726ae0a0e55673f81ee3d7fe12d20148b92.zh.png)

### Power Fx在主题中的功能

- 设置和操作变量
      - 示例：`Set(userName, "Adele Vance")`
- 创建条件
      - 示例：`If(score > 80, "Pass", "Fail")`
- 格式化和转换数据
      - 示例：`Text(DateValue, "dd/mm/yyyy")`

### 为什么使用Power Fx？

- **灵活性：** 你可以在不编写完整代码的情况下构建逻辑。

- **熟悉感：** 如果你使用过Excel公式，它感觉非常相似。

- **强大功能：** 它可以让你个性化对话、验证输入，并根据用户数据控制智能代理的行为。

## 🏗️ 如何创建和编辑主题？

你可以通过两种方式为智能代理创建和编辑主题。

### 1. 从空白开始创建

这允许你从头开始构建自定义对话流程，并且在编辑主题时可以根据需要添加或删除节点。

![添加主题](../../../../../translated_images/7.0_04_AddATopic.111df124a4a7ff8b41e3f577fbef08885ac52d9d6c0c705a82f5968e5ccc384d.zh.png)

#### 为什么这很有用

- 它让你完全控制智能代理的响应方式。
- 你可以使用变量、Power Fx和条件自定义逻辑。
- 非常适合为特定业务需求构建定制化体验。

### 2. 使用Copilot创建
这允许您使用自然语言描述您的需求，Copilot将为您构建对话。同样适用于编辑主题时，使用自然语言，Copilot将为您审查并修改主题。

#### Copilot支持的功能

- 可以创建和编辑：
      - 消息节点
      - 问题节点
      - 条件节点
- 不支持高级设置，例如用户未响应时如何重新提示或在提问期间如何处理中断。如果需要，您仍然可以手动调整这些设置。

#### 为什么这很有用

- 借助AI辅助加快开发速度。
- 让您专注于逻辑和用户体验，而不是重复设置。
- 使迭代和改进对话流程变得更加轻松。

#### ✨ 示例提示

- **创建一个主题**
      - `接受用户的姓名、年龄和出生日期，然后重复他们的回答`
      - `收集用户的街道地址、州和邮政编码。用户应该可以最多重试每个问题4次`

- **编辑一个主题**
      - `添加一个问题，询问用户的出生日期`
      - `在Adaptive Card中总结收集的信息。`

## 👩🏻‍🎨 好的，我该如何为我的代理设计主题？

### 🧙🏻‍♂️ 第一步 - 了解用户需求

首先，识别用户会向您的代理提出的常见问题或任务。这些可能包括：

- 用户经常问的问题，例如，`我的病假权益是什么？`
- 用户希望完成的常见任务，例如提交表单
- 用户经常遇到的问题，例如登录问题

### 📦 第二步 - 对场景进行分类

根据我们之前学到的内容，按照主题的目的将用户需求分为三类：

- 信息性 - 用户想要了解某些信息
- 任务完成 - 用户想要完成某些事情
- 故障排除 - 用户需要帮助解决问题

### 🗺️ 第三步 - 绘制对话流程

绘制一个简单的对话流程，说明代理应该如何响应

- 从问候或确认开始
- 提出后续问题以获取详细信息
- 提供答案或执行操作

!!! tip
    保持对话简短且专注。只问必要的问题。

### 🔀 第四步 - 处理不同类型的对话

设计以下两种对话类型：

- **单轮对话** - 一个问题，一个答案

- **多轮对话** - 包含后续问题的来回对话

示例：

- 用户：`我想申请休假。`

- 代理：`好的！您希望休假从哪一天开始？`

- 用户：`7月15日`

- 代理：`收到。那么您的休假将于哪一天结束？`

- 用户：`7月22日。`

- 代理：`谢谢！请问您的休假原因是什么？`

- 用户：`家庭度假。`

- 代理：`感谢您的详细信息。我已提交您的家庭度假申请，时间为7月15日至7月22日。您很快会收到确认信息。`

### 🤖 第五步 - 使用AI处理意外问题

即使您已经为休假申请设计了一个主题，用户可能会提出一些未直接涵盖的问题。这时，像_对话增强_系统主题这样的AI功能就派上用场了。

此主题包含一个生成答案节点，允许您的代理立即使用连接的知识源。任何在代理级别添加的知识源都会自动包含在_对话增强_系统主题的生成答案节点中。

#### 示例

- 用户：`我可以将未使用的假期天数转到下一年吗？`

这个问题可能不在您预定义的主题流程中，尤其是如果您的主题仅处理提交休假申请。

#### AI如何帮助

如果您的代理连接到公司的人力资源政策文件或内部网站，AI可以：

- 搜索相关的休假政策
- 理解并总结规则
- 代理响应：`根据人力资源政策，您可以将未使用的假期天数转到下一年。有关更多详细信息，请查看人力资源门户上的休假政策部分。`

#### 为什么这很有用

- 您不需要为每个与政策相关的问题手动创建一个主题。
- AI可以从可信的知识源中提取准确的答案。
- 通过让代理显得更智能和更具响应性，提升用户体验。

### 🔬 第六步 - 测试主题和对话流程

在发布您的主题之前：

- 使用真实问题或真实样本输入进行测试。
- 确保对话听起来自然且有帮助。

!!! tip
    根据测试结果对您的主题进行改进，例如添加更多节点或移除节点并重定向到其他主题。

### ⚠️ 第七步 - 避免重复网站内容

不要复制您网站上已有的内容。

- 专注于用户经常询问的主题。
- 根据聊天记录或支持请求添加新主题。

### ✨ 对话流程示例

以下是一个处理休假申请的主题示例。

#### 第一步：触发短语

用户输入，

`我想申请休假`

#### 第二步：代理使用Adaptive Card询问详细信息

代理询问，

`好的！您希望休假从哪一天开始？`

Adaptive Card包含一个开始日期和结束日期的日历选择控件。

#### 第三步：用户提供日期

用户选择开始日期为2025年8月5日，结束日期为2025年8月10日，并提交卡片。日期值存储在Adaptive Card的输出中作为变量。

#### 第四步：执行云流

执行了一个Power Automate云流，该流在休假管理系统中创建了一个新请求，并发送电子邮件通知经理休假申请。

#### 第五步：向用户发送确认消息

代理回应，

`您的2025年8月5日至8月10日的休假申请已提交。您的经理将审核并尽快回复您。`

## 🧪 实验07 - 添加一个带有对话节点的新主题

现在我们将学习如何通过触发器和工具添加一个新主题。本实验将涵盖从空白开始创建主题，以便您了解如何根据需求自定义主题。

- [7.1 从空白开始添加新主题](../../../../../docs/recruit/07-add-new-topic-with-trigger)
- [7.2 定义触发器输入和输出](../../../../../docs/recruit/07-add-new-topic-with-trigger)
- [7.3 使用连接器添加工具](../../../../../docs/recruit/07-add-new-topic-with-trigger)

### ✨ 使用场景

**作为** 一名员工

**我想要** 知道有哪些设备可用

**以便** 我能获得可用设备的列表

让我们开始吧！

### 前提条件

1. **SharePoint列表**

    我们将使用[课程设置 - 第3步：创建新的SharePoint站点](../00-course-setup/README.md#step-4-create-new-sharepoint-site)中的**Devices** SharePoint列表。

    如果您尚未设置**Devices** SharePoint列表，请返回[课程设置 - 第3步：创建新的SharePoint站点](../00-course-setup/README.md#step-4-create-new-sharepoint-site)。

1. **Contoso Helpdesk Agent**

    我们将使用之前在[第06课 - 使用Copilot和您的数据创建自定义代理](../06-create-agent-from-conversation/README.md)中创建的代理。

### 7.1 从空白开始添加新主题

1. 在代理名称附近选择**Topics标签**。如果看不到它，请选择**+6**，然后您会看到**Topics**列出。

    ![选择Topics](../../../../../translated_images/7.1_01_Topics.789ffa4f75830b5f25fb1eeb8fa3e8ba3810b95870cb3dc49d80d8f4ba15a00a.zh.png)

1. **Topics**标签将加载，默认情况下会显示_Custom_主题。您可以按All、Custom和System过滤主题。您当前看到的自定义和系统主题是在代理配置时自动创建的。

    选择**+ Add a topic**并选择**From blank**。

    ![从头创建主题](../../../../../translated_images/7.1_02_FromBlank.f3fe83fad24825f8eb498b19af8e472810f657868613b96b3b4e033fa1042e75.zh.png)

1. 输入主题名称。复制并粘贴以下内容。

    ```text
    Available devices
    ```

    ![命名主题](../../../../../translated_images/7.1_03_TopicName.06eb34ebe94516c1d898b5dff183f9586f7526f9316bc122dca641ac29967966.zh.png)

1. 输入一个触发器描述，概述主题的功能。复制并粘贴以下内容。

    ```text
    This topic helps users find devices that are available from our SharePoint Devices list. User can ask to see available devices and it will return a list of devices that are available which can include laptops, smartphones, accessories and more.
    ```

    ![为触发器输入名称和描述](../../../../../translated_images/7.1_04_TriggerDescription.cb748c0358b3af249fcc0fdb0b262185ffed14d8cf628186b8a65ad4bbf14172.zh.png)

### 7.2 定义触发器输入和输出

1. 接下来，我们将添加一个新的输入变量，生成式AI将在编排中使用它从用户消息中提取设备类型的值。选择主题中的**更多省略号(...)**，然后选择**Details**以查看主题详细信息面板。

    ![选择主题详细信息](../../../../../translated_images/7.2_01_SelectTopicDetails.cc1b97a86718e101084c366514cc306fe82243a014a44c579394e0f70ba5ca53.zh.png)

1. **Topic details**面板现已加载。选择**Input**标签。

    ![输入标签](../../../../../translated_images/7.2_02_SelectInputTab.d0b900eb02a8f982324f59e3b7aca34c2cdba78263acdc9301225e1c3e6338b6.zh.png)

1. 选择**Create a new variable**。

    ![创建新的输入变量](../../../../../translated_images/7.2_03_CreateANewVariable.0d45780268d9b6250617c45a9ddd557cdaa23945b66539b313ca8d74f2c96cc2.zh.png)

1. 输入变量名称。复制并粘贴以下内容。

    ```text
    VarDeviceType
    ```

    ![输入变量名称](../../../../../translated_images/7.2_04_VariableName.56555922eab13cad52fa29d846f4e515d82c2e9bf61c86705f080a1ba4f3b1af.zh.png)

1. 我们现在需要定义输入和输出变量。以下是可以为主题输入和输出定义的属性。

    | 字段    | 值 |
    | ---------- | :--------- |
    | 代理如何填充此输入？ | 确定代理在运行主题之前如何用值填充此变量。默认设置为_动态填充最佳选项_。否则，您可以覆盖输入值而不是询问用户 |
    | 变量数据类型  | 变量的数据类型。支持的数据类型包括`String`、`Boolean`、`Number`、`Date`、`DateTime`、`DateTimeNoTimeZone`、`Time`、`Record`、`Table`、`Unspecified`、`From sample data` |
    | 显示名称   | 变量名称   |
    | 标识为  | 代理捕获正确值类型的实体类型  |
    | 描述    | 描述有助于代理在运行主题之前自动填充输入或生成问题以询问值   |

    _代理如何填充此输入？_、_变量数据类型_和_显示名称_可以保持原样。将**标识为**属性更新为**用户的完整响应**。

    ![更新标识为](../../../../../translated_images/7.2_05_IdentifyAs.a502101e6f60c27ed8c8b1eff049b8ceedd0531845b932f9b7608ad3d8220090.zh.png)

1. 复制并粘贴以下内容作为描述。

    ```text
    List of possible values: Laptop, Desktop, Smartphone
    ```

    ![描述](../../../../../translated_images/7.2_06_InputDescription.844e1776080e595c6c221bcc33d7a269abcc7e4755c8f11b284c3950f42166b5.zh.png)

1. 接下来，让我们定义主题的输出。选择**Output**标签。

    ![选择输出标签](../../../../../translated_images/7.2_07_SelectOutputTab.ab5aa0a2f385f1492df5a67f8f2cbed752dc0258c1e1ddb9928d204405ec403a.zh.png)

1. 选择**Create a new variable**。

    ![创建新的输出变量](../../../../../translated_images/7.2_08_CreateANewVariable.5518205f121014ff4757af062bedfd38ce768c8f38291dd9d6489d67cd5d5dc8.zh.png)

1. 更新以下属性。

    **变量名称** - 复制并粘贴以下内容。

    ```text
    VarAvailableDevices
    ```

    **变量数据类型** - 选择**Table**作为数据类型。

    **变量描述** - 复制并粘贴以下内容。

    ```text
    List of available devices by device type
    ```

    ![输出属性](../../../../../translated_images/7.2_09_OutputVariable.fb0e159fbad5052280040090352c50faf4d91228095c3762e75440b2842e0d29.zh.png)

1. 我们现在已经完成了主题的输入和输出定义。选择**X图标**退出**Topic details**面板。

    ![退出主题详细信息面板](../../../../../translated_images/7.2_10_ExitTopicDetailsPane.6e8981434f04049bef7ab93f9545ee433087e1c99cdfe27b355ee9858ddfde99.zh.png)

### 7.3 使用连接器添加工具

1. 接下来，让我们添加一个节点，使代理能够从**Devices** SharePoint列表中检索设备列表。在触发器下方选择**+图标**。

    ![添加工具](../../../../../translated_images/7.3_01_AddNode.4656328835f7a28bc5f66c440d620a0990bf098e858619ff2c32a9b14fae7c4f.zh.png)

1. 选择**Add a tool**节点，然后选择**Connector**标签。搜索`Get items`并选择**Get items** SharePoint连接器操作。

    ![选择获取项目](../../../../../translated_images/7.3_02_GetItems.a6bdfb122449de789e7c58592f4c3e3a0f38b7bdcec2e0e5eab34b2d9d991f97.zh.png)

1. 需要为连接器创建一个新连接。选择**下拉箭头**图标，然后选择**Create new connection**。

    ![添加工具](../../../../../translated_images/7.3_03_CreateNewConnection.03f49fab97e5f5f2a298e4b1b2e5081304c9c98c5f3ad5be0302c241c3d83d94.zh.png)

1. 将显示两个选项，允许您直接连接到SharePoint Online或本地SharePoint。默认情况下，选择**直接连接（云服务）**选项，这是我们将用于连接的选项。
选择 **创建**。

![选择创建](../../../../../translated_images/7.3_04_SelectCreate.f2216f1e276ed153e06d5b5d47f170a0f9cc6854aa05f0736623acb3aeee1229.zh.png)

1. 选择已登录的用户账户。

    ![选择已登录的用户账户](../../../../../translated_images/7.3_05_SelectSignedInUserAccount.e27a0ada918a1cf4477f3966adcc5f1d033a8998a2589d02d1208f21f5d93938.zh.png)

1. 接下来，您需要确认您的用户账户可以用于连接到 SharePoint 连接器。选择 **允许访问**。

    ![选择允许访问](../../../../../translated_images/7.3_06_AllowAccess.69f012dbcedf7ebc1869e648a5eaa661d085b15aa7a2eb69e69c5b63adfa36dd.zh.png)

1. 选择 **提交**，将 **获取项目** SharePoint 连接器操作添加为主题的一个节点。

    ![提交](../../../../../translated_images/7.3_07_ConnectedSelectSubmit.16ec31ef062696cabb6e7964879debd177f2b9162f88ef95ae1b4eed85e08a21.zh.png)

1. **获取项目** SharePoint 连接器操作现已添加到主题中。我们现在可以开始配置操作的输入。选择 **省略号 (...) 图标**，然后选择 **属性**。

    ![选择属性](../../../../../translated_images/7.3_08_GetItemsProperties.32bdda34a1d73a55eb2893695e4b4cf15cd899806e616d0b0b5015471414c9d7.zh.png)

1. **获取项目** 配置面板将出现，默认情况下，您会看到 **输入** 选项卡。选择 **初始化** 选项卡，并在 **使用说明** 字段中输入描述。复制并粘贴以下内容。

    ```text
    Retrieves devices from SharePoint list
    ```

    > 当我们查看代理的 _管理您的连接_ 页面时，这将非常有用。我们稍后会回到这里。

    ![获取项目描述](../../../../../translated_images/7.3_09_UpdateDescription.76a8d2ebddd4c3e4ca423daad7485afa60f31f37c97e16529d94e224f9709d60.zh.png)

1. 选择 **输入** 选项卡，选择您在 [课程设置 - 第3步：创建新的 SharePoint 站点](../00-course-setup/README.md#step-4-create-new-sharepoint-site) 中设置的 **Contoso IT** 站点和 **设备** 列表。

    ![配置获取项目输入](../../../../../translated_images/7.3_10_GetItemsInputs.17f8689e660c480dd405ab2ab57db34dcd2b8e697ec09d54c8f8649eb619c58b.zh.png)

1. 现在，为了仅显示 SharePoint 列表中的设备，基于
    - 选定的值，
    - 并且仅显示状态为 _可用_ 的设备，

    我们需要应用一个筛选器。这可以通过使用 Power Fx 输入筛选查询来实现。选择 **省略号 (...) 图标**。

    ![选择省略号图标](../../../../../translated_images/7.3_11_SelectVariable.33bfe876cc230569ea0f6cc5e1efa100432509e44342e9b3d6a9e65ee2bc525f.zh.png)

1. 默认情况下，您会处于 **自定义** 选项卡。选择 **公式** 选项卡。

    ![选择公式选项卡](../../../../../translated_images/7.3_12_SelectFormula.a7aba25c95956d113865da3f30da3f3872e12c7a7a8f3c65098a3e3fac9616a4.zh.png)

1. 选择 **展开** 图标以放大 **公式** 字段。复制并粘贴以下 Power Fx 表达式。

    我们使用 `Concatenate` 函数创建一个表达式，用于筛选
    - SharePoint 列 **状态** 等于 _可用_
    - 以及 SharePoint 列 **资产类型** 等于 _问题节点中选定的设备_。

    ```text
    Concatenate("Status eq 'Available' and AssetType eq '", Topic.VarDeviceType, "'")
    ```

    选择 **插入**。

    ![输入 Power Fx 表达式并选择插入](../../../../../translated_images/7.3_13_EnterFormula.d17cc9f73e01e1cab8e2420a55bcb726ae0a0e55673f81ee3d7fe12d20148b92.zh.png)

1. Power Fx 表达式现在将应用于 **获取项目** 操作的筛选查询输入参数。接下来，在 **按视图限制列** 中选择 **所有项目** 视图。这将仅根据选定的视图检索列表中的列。

    ![按视图限制列](../../../../../translated_images/7.3_14_LimitColumnsByView.5537126aaa087bd7f81cc35dfe182aa72cdbec4fe1fb5c2e15823a1275dcaa71.zh.png)

1. 接下来，我们将更新输出变量的名称。选择 **输出** 选项卡，然后选择 `GetItems` 变量。

    ![更新变量](../../../../../translated_images/7.3_15_ConfigureOutputs.d4cb0c5c8e37d1859ed705bd1582fce2d063e7f4d65cc036127a846d743ff391.zh.png)

1. 将名称更新为以下内容。

    ```text
    VarDevices
    ```

    ![更新变量名称](../../../../../translated_images/7.3_16_RenameVariable.55d7adb355808d39fe515bf980af123c60e218fa427354079e86efc412dc0f83.zh.png)

1. 向下滚动，在 **使用** 部分选择 **全局**。这将使变量可以被任何主题访问。

    ![更新为全局变量](../../../../../translated_images/7.3_17_UpdateToGlobalVariable.09bdb05c0938898a04e48b6bcebee1584f17080b63b2577594be74f9f77a5bc3.zh.png)

1. **关闭** **变量属性** 面板。

    ![关闭变量属性面板](../../../../../translated_images/7.3_18_ExitVariablePropertiesPane.b1a5e76dfe490bdf1274d8e8c78df44f9b3e3542180fa52fb6f903a980ef31ab.zh.png)

1. 选择 **加号 +** 图标插入一个新节点，选择 **变量管理**，然后选择 **设置变量值**。

    ![添加设置变量值节点](../../../../../translated_images/7.3_19_AddSetAVariableValueNode.958d21c21727ef92506fe76cf0458f05ac8508d84d0a4917077d2889410330e2.zh.png)

1. 在 **设置变量** 输入参数中选择 **大于** 图标。

    ![设置变量](../../../../../translated_images/7.3_20_SelectAVariable.9d3beb144002569b947c90cbec22afcc9cb34f277b21e3f65dcaf69831abc438.zh.png)

1. 选择之前创建的主题输出作为变量，**VarAvailableDevices**。

    ![保存主题](../../../../../translated_images/7.3_21_SelectVarAvailableDevicesOutput.8d7259eb6ce1bc7c89de10b768b62dc3008ad7468c094249282bfe66436d1672.zh.png)

1. 接下来，选择 **省略号 (...) 图标** 来定义变量的值。

    ![选择变量值](../../../../../translated_images/7.3_22_SelectVariable.f16319e644afc97d24a8cddaf64a7df9fcc52acd7e284b21f20b685a6e53887a.zh.png)

1. 我们现在将使用 PowerFx 表达式将变量值设置为 **获取项目** 响应中返回的 `value` 属性，并通过添加 `Global` 前缀使变量的 [范围](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172618-ebenitez) 全局化。

    选择 **插入** 并 **保存** 主题。

    ![变量值的 Power Fx 公式](../../../../../translated_images/7.3_23_PowerFxFormula.f860daa2c8423021926f0697177279ede3d8d443714d471a77e655c3c42edb07.zh.png)

1. 接下来，我们需要更新代理说明。选择 **概览** 选项卡，然后选择 **编辑**。

    ![编辑说明](../../../../../translated_images/7.3_24_EditInstructions.ce65a6cbcd74792885230af1da432fbb4079fd8b0f5af24ab840453a900b67a8.zh.png)

1. 在说明中添加新行，复制并粘贴以下内容。

    ```text
    - Help find available devices and give full details using [Available devices]. Always extract the VarDeviceType from the inputs. After giving device details, ask the user if they want to request a device from the list of available devices.
    ```

    此说明将指导生成式 AI 调用 **可用设备** 触发器，以显示来自 **设备** SharePoint 列表的可用设备列表。选择方括号中的整个主题占位符。

    ![添加说明](../../../../../translated_images/7.3_25_AddInstructions.1e83853476fed3c8b1c43e657bd1c1351108702288a8f688d8543fbf1c2946fb.zh.png)

1. 输入斜杠字符 `/`，将显示主题列表。选择 **可用设备** 主题。

    ![引用触发器](../../../../../translated_images/7.3_26_SelectAvailableDevicesTopic.1a1beaa256f5417153b7bc55de848b89778f666c213b3a3935444526ab881f0b.zh.png)

1. **保存** 更新后的说明。

    ![保存说明](../../../../../translated_images/7.3_27_SaveUpdatedInstructions.39908bb60990be971039bf392088fd0ecfa148c4496a6ad7413e1267b9091623.zh.png)

1. 我们现在将测试更新后的代理。在右上角选择 **测试** 以显示测试面板并 **刷新** 测试面板。向代理输入以下消息。

    ```text
    I need a laptop
    ```

    ![测试](../../../../../translated_images/7.3_28_Test.a273496de273bf3bebb9ac1504c1cedd8947c250ccf8454cf38b2effbdf66f71.zh.png)

1. 在代理继续之前，用户需要验证其连接是否可以使用。选择 **允许**。

    ![选择允许](../../../../../translated_images/7.3_29_SelectAllow.9f508c4001270252924d889792ecf0cc2a984954b903bb00f7ce6b2dc43d08e3.zh.png)

1. 代理将执行 SharePoint 工具，从 Power Fx 表达式中检索设备类型为 "laptop" 且状态为 "available" 的设备的筛选列表。将以项目符号形式返回格式化的响应供用户阅读。

    ![测试响应](../../../../../translated_images/7.3_30_TestResponse.b60253568edc8b68d737a62960f4a3fa3620d2ba4658b05aa2503ad5fd763383.zh.png)

1. 最后一个需要学习的内容是查看代理的连接使用情况，通过查看代理的 _管理您的连接_ 页面。选择 **省略号 (...)**，然后选择 **管理连接**。

    ![管理连接](../../../../../translated_images/7.3_31_ManageConnections.151932ec4f907e020b67c418cf591806da164c74f6b1d9b73c04d7374d9fc505.zh.png)

1. 在此页面中，我们可以看到代理使用的所有连接。目前，仅列出了一个与添加到主题的 SharePoint 工具相关联的连接。在 **使用者** 列中选择 **1 个工具**。

    ![使用者](../../../../../translated_images/7.3_32_UsedBy.1e5ff032f1e02a565a0dafdde4f9436486ed3f012fcc23b824871a71b6de543e.zh.png)

1. 在这里我们可以看到 **获取项目** 操作的详细信息，还记得我们之前输入的 _使用说明_ 吗？这里可以看到使用说明。选择 **关闭**。

    > 这让我们知道使用了哪些操作以及它们的用途。这有助于我们更好地组织连接 📁。

    ![使用说明](../../../../../translated_images/7.3_33_UsedByInformation.74a42aedb6dc906c678ff8b281a8706e1c0156ee7375111ed20e02d1a1dfd808.zh.png)

1. 返回到您的 Copilot Studio 浏览器标签页，并 **刷新** 测试面板以清除测试。

## ✅ 任务完成

恭喜！ 👏🏻 您已经学会了如何从头开始添加一个新主题，如何添加调用 **获取项目** SharePoint 连接器操作的工具，并使用 Power Fx 筛选响应，仅返回状态为可用且设备类型为笔记本电脑的设备。 🙌🏻

这就是 **实验室 07 - 添加带有对话节点的新主题** 的结束，点击下面的链接进入下一课。在接下来的实验室中，我们将扩展本实验室的用例。

⏭️ [进入 **使用自适应卡增强用户交互** 课程](../08-add-adaptive-card/README.md)

## 📚 战术资源

🔗 [使用系统主题](https://learn.microsoft.com/microsoft-copilot-studio/authoring-system-topics?mc_id=power-172618-ebenitez)

🔗 [Microsoft Copilot Studio 中的主题](https://learn.microsoft.com/microsoft-copilot-studio/guidance/topics-overview?WT.mc_id=power-172618-ebenitez)

🔗 [设置主题触发器](https://learn.microsoft.com/microsoft-copilot-studio/authoring-triggers?WT.mc_id=power-172618-ebenitez)

🔗 [定义代理主题](https://learn.microsoft.com/microsoft-copilot-studio/guidance/defining-chatbot-topics?WT.mc_id=power-172618-ebenitez)

🔗 [使用 Power Fx 创建表达式](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172618-ebenitez)

📺 [使用自然语言创建主题](https://aka.ms/ai-in-action/copilot-studio/ep6)

📺 [使用连接器向代理添加操作](https://aka.ms/ai-in-action/copilot-studio/ep4)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/07-add-new-topic-with-trigger" alt="分析" />

---

**免责声明**：  
本文档使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。原始语言的文档应被视为权威来源。对于重要信息，建议使用专业人工翻译。我们不对因使用此翻译而产生的任何误解或误读承担责任。