<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "75efaf515d5694d4fd549bfd6518901a",
  "translation_date": "2025-10-18T03:20:58+00:00",
  "source_file": "docs/operative-preview/03-automate-triggers/README.md",
  "language_code": "zh"
}
-->
# 任务03：添加事件触发器以实现自主操作

--8<-- "disclaimer.md"

## 🕵️‍♂️ 代号：`信号点行动`

> **⏱️ 行动时间窗口：** `~45分钟`

## 🎯 任务简报

欢迎回来，特工。在[任务02](../02-multi-agent/README.md)中，你学习了如何构建一个应用程序接收子代理和一个面试准备连接代理，以扩展你的主要招聘代理的能力。

如果你选择接受任务，那么你的任务是**信号点行动**——深入研究**事件触发器**，将你的代理系统从被动响应提升到**自主操作**。你将把代理从等待人类输入的状态转变为主动响应外部事件并在无人监督的情况下采取智能行动。

可以将其视为从仅仅“回答问题”的代理升级为能够“预见需求”和“独立行动”的代理。通过事件触发器和自动化工作流，你的招聘代理将能够检测到收到的简历邮件，自动处理附件，将数据存储到Dataverse，并通过Microsoft Teams通知你的HR招聘团队——而你可以专注于更高价值的任务。

欢迎来到自动化与智能相结合的世界。

## 🔎 目标

在本任务中，你将学习：

1. 事件触发器如何在没有用户交互的情况下实现代理的自主行为
2. Copilot Studio中交互式代理和自主代理的区别
3. 如何创建事件触发器以自动处理电子邮件附件并将文件上传到Dataverse
4. 如何构建代理流以将自适应卡片发布到Teams频道进行通知
5. 如何在事件触发器和代理流之间传递数据以实现端到端的自动化

## 🤔 什么是事件触发器？

在[Recruit](../../recruit/10-add-event-triggers/README.md)中，我们已经学习了事件触发器。如果你错过了，我们来快速回顾一下。

**事件触发器**允许代理在另一个系统中发生某些事情时自行“行动”——不需要用户消息。当配置的事件触发时，例如“新的SharePoint项目”、“新邮件”、“分配的Planner任务”甚至基于时间的周期性事件，连接器会将触发器的有效负载发送到你的代理。然后，代理会根据你的指令决定调用哪些操作或主题。

### 关键特性

- **自主激活：**
  - 与用户输入触发的主题触发器不同，事件触发器由外部事件触发，从而实现主动行为。

- **基于有效负载：**
  - 每个事件通过连接器传递一个有效负载（变量+可选指令）。代理使用你定义的指令和有效负载来决定接下来的操作。
  - 例如，_调用一个主题_或_执行工具定义的操作_。

- **内置示例：**
  - SharePoint/OneDrive文件或项目创建
  - Planner任务完成/分配
  - Microsoft Forms提交的响应
  - 定期/计划任务

  可用性取决于你的组织在Power Automate中配置的数据策略。

- **需要生成式编排：**
  - 事件触发器仅在为代理启用生成式编排时可用。

- **计费/使用：**
  - 每次触发器的传递都计为Copilot Studio容量中的一条消息。
  - 例如，每10分钟一次的周期性触发器每小时发送6条消息。

- **认证模型和设置：**
  - 你可以在代理的概览中添加触发器，位于_触发器_下。触发器连接器的认证使用代理创建者的账户（“代理作者认证”）。
  - 你可以在Power Automate创建者门户中编辑触发器参数和有效负载。

- **测试与可观察性：**
  - 你可以从代理的测试面板测试触发器，并在发布前通过活动图检查行为。

!!! info "开发者简要说明"

    可以将事件触发器视为**类似于Webhook的信号**，它将结构化的有效负载推送到你的代理中，让它能够_启动_工作并在系统之间链式执行操作——无需等待用户发起请求。

### 主题触发器 - 它们的不同之处

之前在[Recruit](../../recruit/07-add-new-topic-with-trigger/README.md)中，你已经学习了主题触发器。然而，你可能仍然想知道_主题_触发器与_事件_触发器的区别，以及为什么这种区别对于理解代理的自主性至关重要。

主题触发器控制_何时运行一个主题_，通常是响应用户消息。

- 在生成式编排中，默认触发器是**由代理**触发——计划器选择与用户消息的名称/描述最匹配的主题。
- 在经典编排中，默认触发器是**短语**——计划器选择与用户消息的触发短语最匹配的主题。

其他触发器类型包括`收到消息`、`收到事件`、`收到活动`、`会话更新`、`收到调用`、`重定向`、`不活动`和`计划完成`。

!!! info "核心区别"

    主题触发器是聊天中的_对话活动_启动器。
    
    事件触发器是通过连接器传递的系统_事件_启动器，可以在没有任何对话的情况下运行代理。

### 主题触发器与事件触发器的快速指南

- **主题触发器：** 用户（或聊天活动）说/做了X ➡️ 运行主题T。
- **事件触发器：** SharePoint/Planner/电子邮件/定时器触发并带有有效负载P ➡️ 代理评估指令 ➡️ 相应调用操作/主题。

## 🏓 交互式代理与自主代理 - 对比

现在你已经了解了事件触发器和主题触发器的区别，接下来我们来学习交互式代理和自主代理的区别。

在Copilot Studio中，“交互式”指主要通过聊天或频道中的**主题**进行交互的代理。“自主”则指也利用**事件触发器**在没有用户输入的情况下运行的代理。

以下表格总结了它们的异同。

| 维度                               | 交互式代理             | 自主代理                                                                                              |
|-------------------------------------|-----------------------|-------------------------------------------------------------------------------------------------------|
| 启动方式                           | 用户（或聊天活动）触发一个主题。例如：由代理、短语、收到消息。   | 外部事件触发器通过连接器向代理发送有效负载。例如：SharePoint、Planner、电子邮件、计划等。 |
| 主要用途                           | 问答、引导式工作流、聊天中的请求驱动操作 - Teams、网页等。  | 主动操作和后台自动化 - 响应系统变化，然后通知、存档或协调任务。 |
| 触发表面                           | 主题触发器：由代理/短语/收到消息/活动类型/调用/不活动/计划完成 | 通过连接器的事件触发器库；有效负载包括事件数据+可选指令。 |
| 计划器（生成式编排）               | 强烈依赖于由代理和计划完成触发器来选择/排序主题。 | 事件触发器需要；代理使用指令+有效负载来决定调用哪些操作/主题。 |
| 典型示例                           | 用户问“我们的退款政策是什么？”→ 主题运行，查询知识库，回复。 | 新的Planner任务被分配 → 事件触发器触发 → 代理发布Teams消息、更新记录或调用主题。 |
| 设置路径                           | 创建主题，定义触发类型，编写对话/操作；发布到频道。 | 添加事件触发器（概览 → 触发器），使用代理作者凭据认证连接器，配置有效负载/指令；通过测试面板测试；发布。 |
| 认证和治理                         | 在频道/认证上下文下运行；主题触发器响应允许频道中的聊天活动。 | 触发器的可用性取决于Power Automate数据策略；连接器在代理创建者的账户下运行。 |
| 可观察性                           | 在Copilot Studio中测试主题，检查对话记录/活动。 | 使用测试触发器和活动图在发布前验证执行，发布后监控活动。 |
| 容量影响                           | 每条用户消息/代理响应是一条消息，消耗容量。 | 每次事件传递也是一条消息，加上任何后续操作。例如：10分钟的周期性触发器=每小时6条消息。 |

### 何时使用哪种触发器？

- 当用户发起代理对话时，选择**主题触发器（交互式）**——FAQ、引导式接收或聊天中的命令式任务。计划器的“由代理”触发器减少了手动短语策划的需求。
- 当代理需要自己启动对话或采取行动时，添加**事件触发器（自主）**——例如在SharePoint/Dataverse中更新、收到电子邮件或按计划运行。这将代理从被动操作转变为主动操作。

## 开发者提示与注意事项

1. **启用生成式编排**，以便让代理实现自主化。否则事件触发器将不会显示。

1. **尽早建模有效负载。** 决定代理从触发器中需要的最小字段，例如`itemId`、`assignedTo`、`dueDate`，并添加简洁的指令，告诉代理根据有效负载值调用哪些操作/主题。

1. **认证范围很重要。** 触发器使用代理创建者的账户进行认证。确保该账户具有正确的连接器权限并符合Power Automate数据策略。

1. **控制成本和噪音。** 高频率的周期性触发或高频事件源可能会迅速消耗消息容量——尽可能限制频率或在触发器中添加条件以过滤事件。

1. **发布前测试。** 使用**测试触发器**和活动图观察计划和调用的操作——根据需要调整指令/有效负载，直到行为稳定。

## 🧪 实验03 - 自动化处理候选人申请邮件

接下来我们将为**招聘代理**添加一个事件触发器，并在子代理**应用程序接收代理**中构建一个代理流，以实现进一步的自主处理。

### ✨ 使用场景

!!! info ""

    **作为一名** HR招聘人员

    **我希望**在收到带有简历的电子邮件并自动上传到Dataverse时收到通知

    **以便我可以**随时了解通过电子邮件发送的申请简历并自动上传到Dataverse

我们将通过两种技术实现这一目标：

1. 一个用于邮件到达时的事件触发器：
    1. 检查文件的`contentType`是否为`PDF`格式。
    1. 提取文件并通过Dataverse连接器的操作上传到Dataverse。
    1. 然后通过从Dataverse操作传递输入参数向代理发送提示，以便进一步处理。

1. 在子代理**应用程序接收代理**中添加一个代理流，该流由事件触发器中的提示调用。
    1. 使用事件触发器提示传递的输入参数，在Microsoft Teams的频道中发布一个自适应卡片，通知HR招聘团队。自适应卡片将包含一个指向Dataverse中行的链接，可在**招聘代理**中查看。

让我们开始吧！

### ✨ 完成此任务的前提条件

你需要**以下之一**：

- **完成任务01和任务02**并准备好你的招聘代理，**或者**
- **导入任务03的起始解决方案**，如果你是从头开始或需要补课。[下载任务03起始解决方案](https://aka.ms/agent-academy)

!!! note "解决方案导入和示例数据"
    如果你使用起始解决方案，请参考[任务01](../01-get-started/README.md)获取有关如何将解决方案和示例数据导入到你的环境中的详细说明。

你还需要访问**Microsoft Teams**，以完成将自适应卡片发布到Microsoft Teams的第二个实验。

### 实验3.1 - 自动上传通过电子邮件接收的简历到Dataverse

1. 在招聘代理中，向下滚动到**概览选项卡**并选择**+ 添加触发器**。

       ![向代理添加触发器](../../../../../translated_images/3.1_01_AddTrigger.4d5f4d13a4a6b19fe9ff89e3a483601199d7643236d6df65ff81dfea76d1d443.zh.png)

1. 将出现触发器列表。选择**当新邮件到达时（V3）**并选择**下一步**。

       ![选择“当新邮件到达时（V3）”触发器](../../../../../translated_images/3.1_02_WhenANewEmailArrives.a250875915165d97c1af6eebba70f16fbfc845a37d4d354c9f35a55aa459035e.zh.png)

1. 现在我们将看到**触发器名称**和列出的应用程序的**登录**连接引用。

       将触发器名称重命名为以下内容：
    
       ```text
       当申请人发送新邮件时
       ```

       确保你看到每个列出的应用程序的连接引用旁边有一个绿色勾号。如果没有看到绿色勾号，请通过省略号（...）登录并选择**+ 新建连接引用**以创建一个新的连接引用。

       ![更新触发器名称并检查连接引用](../../../../../translated_images/3.1_03_RenameTriggerName.3eb80b25bea5f874a51aab600ffd333359de3a981e41eed1b4fc7c8f27eef323.zh.png)

1. 最后一步是设置触发器的输入属性。将以下属性更新为以下内容：

     | 属性 | 设置方式 | 详细信息 |
     |------|----------|----------|
     | **包含附件（可选）** | 下拉菜单 | 是 |
     | **主题过滤器（可选）** | 键盘输入 | Application |
     | **仅包含附件（可选）** | 下拉菜单 | 是 |

       选择**创建触发器**。

       ![配置触发器输入](../../../../../translated_images/3.1_04_ConfigureTriggerInputs.2151044f4953b31b40402c2a94fd63fb71fe8eede27a5cbf1d124d4300318446.zh.png)

1. 创建完成后，将出现确认消息，表明触发器已添加到代理中。选择**关闭**，触发器将列在**触发器**部分中。
我们现在将更新事件触发器，添加更多自动化功能。选择触发器旁边的 **省略号 (...)**，然后选择 **在 Power Automate 中编辑**。

![在 Power Automate 中编辑](../../../../../translated_images/3.1_05_SelectEditInPowerAutomate.d298b51d7980cf2fd20a9d8193745aef4ce8097a4a2d33341e2dc159b9bfc099.zh.png)

1. 触发器将作为流程加载到 Power Automate 制作门户中。您看到的是 Power Automate 制作门户中的流程设计器。在这里，我们可以添加更多逻辑和操作以实现更高级的自动化。触发器会显示在顶部，流程的最后一个操作是 **向指定的 Copilot 发送提示进行处理**。

![Power Automate 制作门户中的流程设计器](../../../../../translated_images/3.1_06_EditInPowerAutomate.f8967ace56354224574517f31a2a2ce0a5b5d3ab85bfb9ec6cf70e83ab1b8e6d.zh.png)

1. 默认情况下，Power Automate 中的 **当新邮件到达时** 触发器可能会同时处理多封邮件（如果多封邮件同时到达），并仅对这批邮件运行一次流程。

为了确保流程对每封邮件单独运行，请在触发器的设置中启用 **Split On** 设置，并在下拉数组字段中选择 `@triggerOutputs()?['body/value']`。

启用 **Split On** 设置并将数组字段设置为 `@triggerOutputs()?['body/value']` 后，即使同时收到多封邮件，流程也会对每封邮件单独运行。

![在触发器中启用 Split On 设置](../../../../../translated_images/3.1_07_UpdateTriggerSettings.0f363c4f4655276732575fa795bf1ad1568df34d34b703c85073591cc8585609.zh.png)

1. 接下来，我们添加一些逻辑来检查附件的文件类型。我们只希望上传 .PDF 文件附件，而不是图片（这些可能来自邮件签名）。选择触发器下方的 **+** 图标，然后在 **内置工具** 部分选择 **控制**。

![选择控制](../../../../../translated_images/3.1_08_Control.2fa6987b64ae20d5c8343d1b15937432ab6c893750c4b1427df56067023fd437.zh.png)

1. 选择 **条件** 操作。

![选择条件操作](../../../../../translated_images/3.1_09_AddConditionAction.a7eec0b2a42d4a7c54bd305f0c480b72e3feec155a4e2468e12279082257f21f.zh.png)

1. 现在我们配置条件以检查文件附件的类型是否为 .PDF。在 **选择一个值** 字段中，选择右侧的 **闪电图标** 或 **fx 图标**。

1. 在 **搜索** 字段中输入以下内容：

```text
content type
```

1. 然后从触发器中选择 **Attachments Content-Type** 参数。

1. 接着，选择 **添加** 将动态内容输入添加到操作的 **Id** 参数中。

![配置条件操作](../../../../../translated_images/3.1_10_SetDynamicContentValue_V2.23c3d0438146a5ff0d695077e65a3b1c8b230b54c51ded8a099c6e99a948e9ed.zh.png)

1. 我们先暂停一下，您可能已经注意到 **For each** 操作自动出现了。

选择 **For each** 操作。此操作表示循环处理邮件中的每个附件，因为触发器中的 **Attachments Content-Type** 参数与每个附件相关联。

从底层来看，它是一个数组，这就是为什么当我们在 **条件** 操作中选择 **Attachments Content-Type** 参数时，**For each** 操作会自动添加。

想了解更多信息，请展开以下额外学习模块。

??? info "额外学习：For each 操作自动出现"

🤔 **为什么“Apply to each”或“For each”会自动出现？**

当您选择一个表示项目列表或数组的参数（动态内容）时，例如附件列表、邮件或行，Power Automate 会识别您可能希望单独处理每个项目。

为了帮助您实现这一点，Power Automate 会自动在您的操作周围添加一个 **“Apply to each”**（或 **For each**）循环。这确保您的操作会针对列表中的每个项目运行一次，而不是尝试一次处理整个列表（这可能会导致错误）。

🦋 **示例**

- 如果您从之前的操作中选择“Attachments”（这是一个数组），并尝试在一个期望单个文件的操作中使用它，Power Automate 会将您的操作包装在一个 **“Apply to each”**（或 **For each**）循环中。
- 这样，您的操作会针对 **每个附件** 单独运行。

💡 **关键点**

- **自动化：** 循环会自动出现，帮助您处理集合中的每个项目。
- **防止错误：** 如果没有循环，您的操作可能会失败，因为它无法一次处理多个项目。
- **视觉提示：** 这是一个视觉化的方式，显示您的流程将对列表中的每个项目重复操作。

![解释 For Each 操作](../../../../../translated_images/3.1_11_ForEach.82bd7b62b815fdbcd67acff0a633137cf03175940c670361ea8669b0df892927.zh.png)

1. 接下来，在另一个 **选择一个值** 字段中，输入以下内容：

```text
application/pdf
```

这将确保对每个文件附件进行检查，确认文件扩展名格式是否为 .PDF。

![EqualToValue](../../../../../translated_images/3.1_12_EqualToValue.66c107cb8105c1cd3d166b8a5bf690b8dfc30aa2bd2af83c438a9e44d1b544b0.zh.png)

1. 现在我们将配置 **True** 路径，从邮件中提取文件并将其上传到 **Resume** Dataverse 表中。

在 **True** 路径下添加一个新操作，搜索 `html to text`。选择 **Html to text** 操作。

想了解更多关于 **Html to text** 操作的信息，请展开以下额外学习模块。

??? info "额外学习：Html to text 操作"

🤔 **什么是“HTML to text”操作？**

Power Automate 中的 **HTML to text** 操作用于将 HTML 格式的内容转换为纯文本。这在您接收到包含 HTML 标签的数据（如邮件、网页内容或 API 响应）时特别有用，您希望提取可读文本而不包含任何格式或代码。

⚙️ **它如何工作？**

- **输入：** 您提供一段 HTML 内容字符串（例如邮件正文）。
- **输出：** 操作会移除所有 HTML 标签，仅返回纯文本。

👍🏻 **什么时候使用它？**

- 当您希望从包含 HTML 的邮件、网页或 API 响应中提取可读文本时。
- 在将内容发送到不支持 HTML 格式的系统（如短信、Teams 消息或数据库）之前。
- 用于清理数据以进行进一步处理或分析。

🔭 **在哪里找到它？**

- 在 Power Automate 的 Agent Flows 中，搜索名为 `HTML to text` 的操作。它位于 **数据操作** 连接器下。

💡 **关键点**

- 它移除所有 HTML 标签，仅保留文本。
- 它不会解释或执行脚本/样式——仅去除标签。
- 对于数据清理和准备纯文本输出非常有用。

![添加 HTML to text 操作](../../../../../translated_images/3.1_13_AddHTMLToTextAction.2aa9468b87dbeb847c083f24da0fe99438b39f826b13a70982ec255a97c2aa80.zh.png)

1. 接下来，我们需要为 **Html to text** 操作创建一个新的连接引用，选择 **添加新连接**。

![添加新连接引用](../../../../../translated_images/3.1_14_AddNewConnection.4a23546976b62e7f0e882ac1379950e5bfdcaa702070313cb84a1d22b06a79a7.zh.png)

1. 现在可以配置操作了。我们将添加触发器中的 **Body** 参数。在 **内容** 字段中，选择右侧的 **闪电图标** 或 **fx 图标**。

![添加动态内容](../../../../../translated_images/3.1_15_AddDynamicContent.0624a9808f55b993efb6d00bf941a88389655e2ab9970ba2b9a1538272fe9643.zh.png)

1. 在 **动态内容** 标签中，搜索 `body` 并选择 **Body** 参数，然后选择 **添加**。

![添加 Body 参数](../../../../../translated_images/3.1_16_AddDynamicContent.40b7eccc080c20513eed5663062b2a63d40d6482eaf2d42fe4e29cb94797f098.zh.png)

1. 我们已完成此操作的配置，选择指向左侧的两个尖括号 («) 以折叠面板退出操作。

![折叠操作面板](../../../../../translated_images/3.1_17_CollapseAction.ca2c346efb58f8240372c3d145fa10ba609cab1c2075d7df1a9388c82fab79f5.zh.png)

1. 我们将通过选择 **Html to text** 操作下方的 **+ 图标** 添加一个新操作，这将加载添加操作的面板。选择 **Microsoft Dataverse** 连接器。

![添加新操作](../../../../../translated_images/3.1_18_AddDataverseAction.5f4be9eb96e22dac239e5545bab5ad9d08b138c2cbcbc700680f33445e132506.zh.png)

1. 选择 **添加新行** 操作。

![添加新行操作](../../../../../translated_images/3.1_19_AddANewRow.48e0a3868821e59ed2a299ccb6a521af27b2430082381d48be38087be62c7c15.zh.png)

1. 通过选择 **省略号 (...)** 重命名操作，复制并粘贴以下内容作为名称：

```text
Add a new Resume row
```

对于 **表名** 参数，搜索 `res` 并选择 **Resumes** 表。

![重命名操作并配置表名参数](../../../../../translated_images/3.1_20_RenameAndSelectResumesTable.89f8485653abb7fda1d6eb44210951f05a05ed6f7450a51895079dfd8e72c8bf.zh.png)

1. 接下来选择 **Resume Title** 字段，然后选择右侧的 **闪电图标** 或 **fx 图标**。

![配置 Resume Title 参数](../../../../../translated_images/3.1_21_AddDynamicContent.9ee1f89420d5a4aa56797944166208f6e9b0ec67116625168fbcefb907850224.zh.png)

1. 在 **函数标签** 中，输入以下使用 `item()` 函数的表达式：

```text
item()?['name']
```

想了解更多关于 `item()` 函数的信息，请展开以下额外学习模块。

??? info "额外学习：`item()` 函数"

🤔 **什么是 `item()` 函数？**

- 当您使用 **Apply to each** 操作时，Power Automate 会遍历集合（数组）中的每个元素。
- 它通常用于 **Apply to each**（或 **For each**）、**Select** 或 **Filter array** 等操作中。

⚙️ **它如何工作？**

- `item()` 是一个函数，用于返回循环或数组操作中正在处理的当前项目。
- 在该循环中，`item()` 指的是正在处理的当前元素。

📌 **在哪里使用它？**

- **Apply to each：** 访问当前项目的属性。
- **Select：** 转换数组中的每个项目。
- **Filter array：** 引用正在评估的当前项目。

🦋 **示例**

- 循环中的表达式：
       -  `item()?['Email']`
- 这将获取当前项目的 `Email` 属性。

💡 **关键点**

- `item()` 是 **上下文敏感的**：它始终指代您所在循环或数组操作中的当前项目。
- 如果嵌套循环，您可以使用 `items('LoopName')` 来引用特定循环中的项目。

选择 **添加** 将表达式添加到 **Resume Title** 参数中。

![为 Resume Title 参数添加表达式](../../../../../translated_images/3.1_22_ResumeTitleParameter.9e4fa71a5251cb899e7b09bcc3052eeda1e512841f929118eb9e2b1d232ecb07.zh.png)

1. 我们仍需配置几个参数，选择 **显示全部**，然后在 **Cover Letter** 字段中选择右侧的 **闪电图标** 或 **fx 图标**。

在 **函数标签** 中，输入以下表达式，该表达式使用了之前 [任务](../02-multi-agent/README.md) 中的相同表达式：

```text
if(greater(length(body('Html_to_text')), 2000), substring(body('Html_to_text'), 0, 2000), body('Html_to_text'))
```

此表达式检查来自 **Html to text** 操作的文本是否超过 2000 个字符，如果超过，则仅返回前 2000 个字符；否则返回完整文本。

![为 Cover Letter 参数添加表达式](../../../../../translated_images/3.1_23_CoverLetterParameter.d2b521d6b37d05ac4760c91de2964b6d062585a333af6989d9ac0794a4139463.zh.png)

1. 现在表达式已添加到 **Cover Letter** 字段中。

![表达式已添加到 Cover Letter 参数](../../../../../translated_images/3.1_24_ExpressionForCoverLetter.3d18124b10b76bad92db61c529ae395b0bb05f3215e3b783771e76ef7677664e.zh.png)

1. 对于 **Source Email Address** 字段，搜索 `from` 并选择触发器中的 **From** 参数，因为它包含电子邮件地址值。

![Source Email Address 参数](../../../../../translated_images/3.1_25_FromParameter.1ed1be46711f6705fb807996f6f1e873adc22e285186a851272e0cf3855487ef.zh.png)

1. 对于 **Upload Date** 字段，选择右侧的 **闪电图标** 或 **fx 图标**。在 **函数标签** 中，输入以下使用 `utcNow()` 函数的表达式：

```text
utcNow()
```

想了解更多关于 `utcNow` 函数的信息，请展开以下额外学习模块。

??? info "额外学习：`utcNow` 函数"

🤔 **什么是 `utcNow()` 函数？**

- Power Automate 中的 `utcNow()` 函数以 ISO 8601 格式返回当前的协调世界时 (UTC) 日期和时间，例如：`2025-09-23T04:32:14Z`

🦋 **示例**

- 表达式：
       -  `concat('报告生成时间：', utcnow())`
- 输出为：
       - 报告生成时间：`2025-09-23T04:32:14Z`

💡 **关键点**


- **无需参数（输入参数）：** 它总是返回当前的UTC时间戳。
   - **使用场景**
       - 为日志或文件名添加时间戳
       - 将当前时间与其他日期进行比较
       - 安排或基于时间的条件

![上传日期参数](../../../../../translated_images/3.1_26_UploadDateParameter.21b0afc9807bf680c1c432066f1644d4d018cb4988ad0c0788b5186cea285e02.zh.png)

1. 我们已经完成了配置 **添加新的简历行** 操作，现在可以通过折叠面板退出。

![退出操作面板](../../../../../translated_images/3.1_27_CollapseAction.c033a86e4d8501b10fc454ba7f9c5e08d71d6d881fc72f58011152e1c5d7a7bb.zh.png)

1. 我们将通过选择 **添加新的简历行** 操作下方的 **+ 图标** 来添加一个新操作，这将加载添加操作的面板。再次选择 **Microsoft Dataverse** 连接器。

![添加Dataverse操作](../../../../../translated_images/3.1_28_AddDataverseAction.1af4dedc95001bfb56b0a642231e9c82b57459b10c68bf6fc177382339a0a221.zh.png)

1. 选择 **上传文件或图片** 操作。

![添加上传文件或图片操作](../../../../../translated_images/3.1_29_AddUploadAFileOrAnImage.e40ab21b735e37bd1fdb5020b7433d1a2f01d6e387bc43a437e970c6e20ee779.zh.png)

1. 通过选择 **省略号（...）** 重命名操作，将以下内容复制并粘贴为名称：

```text
上传简历文件
```

![重命名操作](../../../../../translated_images/3.1_30_RenameAction.c316fdf225f88e5c3ee26649e672472829c3372c804b544a1372b0455937c204.zh.png)

1. 接下来选择 **内容名称** 字段，然后选择右侧的 **闪电图标** 或 **fx 图标**。

在 **函数选项卡** 中，输入以下使用 `item()` 函数的表达式。这将获取当前项（附件文件）的 `name` 属性。

```text
item()?['name']
```

![配置内容名称参数](../../../../../translated_images/3.1_31_ContentNameParameter.c6606773f1e82dbcea93d7c2f52dff7a2168f9f04d6b865f699f56d62a41d4ec.zh.png)

1. 对于 **表名称** 参数，搜索 `res` 并选择 **简历** 表。

![配置表名称参数](../../../../../translated_images/3.1_32_SelectResumesTable.6a00bf6d585002219003da47f6e1042dc67cbdb3fbaf7d959253550035e27520.zh.png)

1. 接下来选择 **行ID** 字段，然后选择右侧的 **闪电图标** 或 **fx 图标**。

搜索 `ID` 并从 _添加新行_ Dataverse 操作中选择 **简历** 参数，因为它包含上传PDF文件的行的ID值。

选择 **添加**。

![选择行ID](../../../../../translated_images/3.1_33_RowIDParameter.9824c6b5ea5edf0ce018140c20431a97c2e750d61bcb787f67da260acb6a3838.zh.png)

1. 选择 **列名称** 字段并选择 **简历PDF** 选项。

![配置列名称参数](../../../../../translated_images/3.1_34_ColumnNameParameter.ef4f770cbd84cae5c15cfe06d1bdbe028d0c6d54a2286dab30769fa01c948b71.zh.png)

1. 选择 **内容** 字段并选择右侧的 **闪电图标** 或 **fx 图标**。

在 **函数选项卡** 中，输入以下使用 `item()` 函数的表达式。这将获取当前项（附件文件）的 `contentBytes` 属性。`contentBytes` 指的是文件或附件的原始二进制数据，以Base64字符串编码。

```text
item()?['contentBytes']
```

1. 我们已经完成了此操作的配置，现在可以通过选择指向左侧的双角括号（«）退出操作并折叠面板。

![折叠操作面板](../../../../../translated_images/3.1_36_CollapseAction.1813a7219f0f37b87f80c2cd9f5a9626c3a320858d08a0e62cf14736f97db4c6.zh.png)

1. 接下来，选择 **向指定的Copilot发送提示进行处理**，然后将此操作拖放到条件的 _True_ 路径下的 **上传简历文件** 操作下方。

![在True路径中拖放操作](../../../../../translated_images/3.1_37_DragAndDropAction.57dc2e9f9d25ed892a4fc072a72c55eca6c38e313ab48fb9db37e9371995440f.zh.png)

1. 选择 **向指定的Copilot发送提示进行处理** 以进行配置。

![选择操作](../../../../../translated_images/3.1_38_SelectAction.d125bdf661f66b6397542c75efbc6a78b8c4862e03dce4002776c251f1c48382.zh.png)

1. 在 **正文/消息** 字段中，选择所有字段内容并清除/删除。

![清除正文参数](../../../../../translated_images/3.1_39_ClearBodyParameter.6a345b2e5dbe5510184d7bae7cd406b8cec72c714f34bb40e30741e445a491c0.zh.png)

1. 将以下文本复制并粘贴到 **正文/消息** 字段中，并突出显示 `RESUME ID PLACEHOLDER`。

```text
发送 [ResumeId (text)] = "RESUME ID PLACEHOLDER" 和 [ResumeTitle (text_1)] = "RESUME TITLE PLACEHOLDER" 和 [ResumeNumber (text_2)] = "RESUME NUMBER PLACEHOLDER" 到子代理 "Application Intake Agent" 中的工具 "通知Teams申请人频道"
```

![替换简历ID占位符文本](../../../../../translated_images/3.1_40_ReplaceResumeIDPlaceholder.eb61590503cb37d89121aaed6d979a4272aa30c87700206e04db8005e60b294f.zh.png)

1. 选择右侧的 **闪电图标** 或 **fx 图标**。

搜索 `resume` 并从 _添加新行Dataverse_ 操作中选择 **简历** 参数，因为它包含创建的简历行的 `ID` 值。

选择 **添加**。

![选择简历参数](../../../../../translated_images/3.1_41_SelectResumeParameter.61c4457c33e5d1b596169857535bfc560ef677264f8798e9148ceac999eeaeb9.zh.png)

1. 突出显示 `RESUME TITLE PLACEHOLDER`。选择右侧的 **闪电图标** 或 **fx 图标**。

搜索 `title` 并从 _添加新行Dataverse_ 操作中选择 **简历标题** 参数，因为它包含创建的简历行的 `简历标题` 值。

选择 **添加**。

![选择简历参数](../../../../../translated_images/3.1_42_SelectResumeTitleParameter.6c887607128f928da15c4cf6c22254d0473bc22514aa883462fd812bf14245e0.zh.png)

1. 突出显示 `RESUME NUMBER PLACEHOLDER`。选择右侧的 **闪电图标** 或 **fx 图标**。

搜索 `resume number` 并从 _添加新行Dataverse_ 操作中选择 **简历编号** 参数，因为它包含创建的简历行的 `简历编号` 值。

选择 **添加**。

![选择简历参数](../../../../../translated_images/3.1_43_SelectResumeNumberParameter.ca19197525250483a7e94598b621072b47ebdf5deb939e1387c979e807ddc554.zh.png)

1. 我们已经完成了此操作的配置以及我们的代理流程 🙌🏻 你做得很棒！现在通过选择 **保存草稿** 保存我们的事件触发器流程。

![保存草稿](../../../../../translated_images/3.1_44_SaveDraft.0c9eee19f0c7cb8483b8d31bc17e1dd54075352d22f0f44603a9d52b52429188.zh.png)

1. 我们现在需要编辑代理流程的详细信息，选择 **返回**。

![选择返回](../../../../../translated_images/3.1_45_Back.3f85535977bdb02231a0fdb8465e0e8b7d86fd5342ff933e4ae8bf9610279989.zh.png)

1. 在 **详细信息** 部分选择 **编辑**，并将 **计划** 更新为 **Copilot Studio** 选项。

选择 **保存**。

![更改Copilot Studio计划](../../../../../translated_images/3.1_46_ChangePlanDetails.6ab15f1f8bd9ebe55b2c1576c3495f47d1a29d7435e343d4c590e46647601269.zh.png)

1. 将出现一个模态窗口，要求您确认切换到Copilot Studio计划。选择 **确认**。

![确认更改Copilot Studio计划](../../../../../translated_images/3.1_47_ConfirmCopilotStudioPlan.bc6ab52e7c982127154b0fb743f85ff9cc05dcab944dffc9485bdbcbe0811397.zh.png)

1. 计划现已更新为 **Copilot Studio**。选择 **编辑**，因为我们需要为代理发布事件触发器流程。

![编辑流程](../../../../../translated_images/3.1_48_PlanChangedAndEdit.3c3207766a648817f7a7878c3a6f684cf41cdceea4dca8f6fc43b7315c8dd648.zh.png)

1. 选择 **发布**。

![发布](../../../../../translated_images/3.1_49_Publish.38ff814cfce6b3be1076cafb0c28e4e344f75d8cd4117fabed13ad361d4fde3f.zh.png)

太棒了！事件触发器流程现已发布 😃

![已发布](../../../../../translated_images/3.1_50_Published.449e7867f7b027ae8a524c749357a1b931955062828bacc3b5a51e979755ef4a.zh.png)

接下来，我们将创建一个新的代理流程，该流程将由子代理 **Application Intake Agent** 调用。

### 实验 3.2 - 使用自适应卡通知Teams频道

我们现在将为子代理 **Application Intake Agent** 创建一个新的代理流程，该流程使用事件触发器传递的值，将自适应卡发布到Teams频道。此自适应卡将提醒HR招聘团队自动上传的PDF，以便他们进行审核。

让我们开始吧！

1. 在 **Hiring Agent** 中选择 **代理** 标签，然后选择 **Application Intake Agent**。

![选择Application Intake Agent](../../../../../translated_images/3.2_01_SelectApplicationIntakeAgent.0e9dd3da5c52e9f59ab3a4545c01897ad830853b650ec42f7f8424aa530e0409.zh.png)

1. 向下滚动到 **工具** 并选择 **+ 添加**。

![添加工具](../../../../../translated_images/3.2_02_AddNewTool.7c62275fd9f28cdc1923ea056a148171048dc568ff78056958fd54862133f90e.zh.png)

1. 将出现 **添加工具** 模态窗口。选择 **+ 新工具**。

![选择新工具](../../../../../translated_images/3.2_03_SelectNewTool.215e7637a9f065a3799a1ecf248eed1e859f201d2dfdfab71a7c1dc18e454e2d.zh.png)

1. 选择 **代理流程**。

![选择代理流程](../../../../../translated_images/3.2_04_SelectAgentFlow.7bc12b3435efccc0cfee8f563640562f87d173b436b3313a3d1256fe35024907.zh.png)

1. 接下来将加载 **代理流程设计器**。在 **当代理调用流程时** 触发器中，选择 **+ 添加输入**。

![选择添加输入](../../../../../translated_images/3.2_05_SelectAddAnInput.f3dc8465f490929baccb0f2dc72b50629b1435ff8a3861f7974885d1d36cdeb1.zh.png)

1. 选择 **文本** 作为用户输入类型。

![选择文本](../../../../../translated_images/3.2_06_SelectText.93585b4af8c4e277c11c2052b638e249508a24a075987026a6ec346e75184217.zh.png)

1. 在输入文本字段中，复制并粘贴以下内容作为输入参数名称。

```text
ResumeId
```

![ResumeId输入](../../../../../translated_images/3.2_07_ResumeIdInput.a9e127e343856d6c6d45dd1251cade0503bad9484bc563c02155390951b1faa5.zh.png)

1. 重复相同的步骤以添加第二个文本输入。复制并粘贴以下内容作为输入参数名称。

```text
ResumeTitle
```

![ResumeTitle输入](../../../../../translated_images/3.2_08_ResumeTitleInput.c71ecd364a974a93abb0de876807c2e9bde59fcea6df317babeb20764b636f26.zh.png)

1. 重复相同的步骤以添加第三个文本输入。复制并粘贴以下内容作为输入参数名称。

```text
ResumeNumber
```
![ResumeNumber输入](../../../../../translated_images/3.2_09_ResumeNumberInput.a6c060000354deab51dffef3c1ad9f13378cfeabdafdb7a33c2a591bfd044709.zh.png)

1. 还记得在 [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request) 中我们如何在代理的主题中添加自适应卡吗？这次，我们将在代理流程中添加自适应卡。我们现在将向代理流程添加另一个操作，该操作将在Teams频道中发布自适应卡。

选择触发器下方的 **+ 图标**。

![添加新操作](../../../../../translated_images/3.2_10_AddNewAction.4474a2150991cac246d5e4091a74ba91e76e1c5bafa34ad985a8567c09dcdd35.zh.png)

1. 选择 **在聊天或频道中发布卡片** 操作。

![选择在聊天或频道中发布卡片操作](../../../../../translated_images/3.2_11_SelectPostCardInAChatOrChannel.97de43ed1c883b14d0150ae65efaa90f53f0815bdf57ec10e0e22cbd3e22ce06.zh.png)

1. 需要使用您的登录用户账户创建到Microsoft Teams的连接引用。选择 **登录**。

![选择登录](../../../../../translated_images/3.2_12_SignInToCreateConnectionReference.2297f8b702d71508f1b21a3ed4046df4846dc03b13932a20e5c445403559ac1f.zh.png)

1. 选择您的用户账户，然后选择 **允许访问**。

![选择允许访问](../../../../../translated_images/3.2_13_AllowAccess.31cbf82606d75231108bd4f2bfeafffda3cd7e7e760cd46004c2705afe050aaf.zh.png)

1. 对以下输入参数进行配置：

| 参数 | 设置方式 | 详情 |
|----------|------------|---------|
| **发布为** | 下拉菜单 | 选择 `Flow bot` 选项 |
| **发布到** | 下拉菜单 | 选择 `频道` 选项 |
| **团队** | 下拉菜单 | 选择您环境中可用的团队，以完成此实验练习 |
| **频道** | 下拉菜单 | 选择您环境中可用的频道，以完成此实验练习 |

![配置输入参数](../../../../../translated_images/3.2_14_ConfigureParameters.8c21924f90db3acaa33d4e35ef43c70556ba4cc37207a195ac654e55a43400a6.zh.png)

1. 接下来，我们将配置 **自适应卡** 字段。选择 **自适应卡** 字段。

![选择自适应卡字段](../../../../../translated_images/3.2_15_SelectAdaptiveCardParameter.65323056be6174d2eed7422650aaa70fc16396148f90b8af1801110d7a30d66f.zh.png)

1. 打开 [Resume Table Updated JSON 文件](../../../../../docs/operative-preview/03-automate-triggers/assets/3.2_ResumeTableUpdated.json)，复制其全部内容，并将其粘贴到自适应卡字段中。

![复制并粘贴JSON](../../../../../translated_images/3.2_16_JSON.f022097fb7139bd12514abb8fdc518309ea940f005cc94a11ba159359cde784b.zh.png)

1. 类似于我们在 [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request) 中所做的，我们将用实际值或动态内容替换JSON负载中的现有值。

首先，让我们更新 `selectAction` 属性中的 `url` 属性的URL。此URL将替换为 **Hiring Hub** 模型驱动应用中简历系统视图的URL。这将允许招聘人员选择操作并被引导到模型驱动应用中的简历系统视图。

突出显示当前的URL值并删除它。

![选择URL值](../../../../../translated_images/3.2_17_SystemViewURL.5e51fd894ac916f436107c7b668d66ca87ca8bdfd7affeb7dae1b10fa8ff5afb.zh.png)

1. 在 **Hiring Hub** 模型驱动应用中，使用左侧菜单导航到 **简历** 系统视图并复制URL。然后返回代理流程，并将复制的URL粘贴到 `selectAction` 属性中的 **url** 属性中。

![复制简历系统视图URL](../../../../../translated_images/3.2_18_CopyResumesSystemViewURL.14d9f55c7db15977a12dfe2a5df95aab5cf241e646b08f9838cff31aaa27a381.zh.png)
1. 您应该看到以下内容，其中黄色高亮部分是您的 **Hiring Hub** 模型驱动应用的环境详细信息。

     | 参数 | 值 | 说明 |
     |------|-----|------|
     | **Organization URI** | GUID | Dataverse/Dynamics 365 环境的组织 URL |
     | **appid** | GUID | 要打开特定的模型驱动应用，可以使用 appid 或 appname 查询参数。在此情况下，使用的是 appid |
     | **viewid** | GUID | 视图的 ID 查询参数 |

       ![粘贴 URL](../../../../../translated_images/3.2_19_PasteURL.41f3fdd66190c8ba478857f91c90eb05ee9621243bda7b7ad26eb5802b8e970d.zh.png)

1. 接下来，我们将为多个属性添加动态内容值。首先从显示由事件触发器自动创建的行的简历编号参考的文本开始。

      选择 **面板** 图标以加载操作面板。

       ![选择面板图标](../../../../../translated_images/3.2_20_SelectPannelIcon.786a4147ba12e0e62648c66f14fb2b9a7f89b27c3a610f43420e31cb0c9fb5da.zh.png)

1. 向下滚动到您看到 `RESUME NUMBER PLACEHOLDER` 的 `text` 属性的行。高亮占位符值并删除它。

       ![删除占位符](../../../../../translated_images/3.2_21_DeleteResumeNumberPlaceholder.6ffd7a5a073f9d9a11e0e119c87e827243de237f70ebc3ab37dfdd36de615130.zh.png)

1. 点击双引号之间的空白处，选择右侧的 **闪电图标** 或 **fx 图标**。

      在 **动态内容** 标签中选择 **ResumeNumber** 参数并点击 **添加**。

       ![添加 ResumeNumber 参数](../../../../../translated_images/3.2_22_SelectResumeNumberParameter.de5a6eecb3ee092441d841ad137dfecd9f8d503a370ff60eb5ccdc0267e37df0.zh.png)

1. **ResumeNumber** 参数现在将作为动态内容添加到 `text` 属性中。

       ![ResumeNumber 动态内容](../../../../../translated_images/3.2_23_ResumeNumberDynamicContent.129a566ac6e9d448b268b828da5766a7056779ac167f65b498e2ca21d703b7f0.zh.png)

1. 我们将对 `RESUME NAME PLACEHOLDER` 执行相同的步骤。向下滚动到您看到 `RESUME NAME PLACEHOLDER` 的 `text` 属性的行。高亮占位符值并删除它。

       ![简历名称占位符](../../../../../translated_images/3.2_24_ResumeNamePlaceholder.6c879b99ae375892f7e0a511bfedd5fa9e60a8dea71ea2a44c2a7a04c8389f43.zh.png)

1. 点击双引号之间的空白处，选择右侧的 **闪电图标** 或 **fx 图标**。

      在 **动态内容** 标签中选择 **ResumeTitle** 参数并点击 **添加**。

       ![添加 ResumeTitle 参数](../../../../../translated_images/3.2_25_SelectResumeTitleParameter.18c769bbd2c60e362a56f6055e151ed6287903cb625addcdfbb43044828d7378.zh.png)

1. **ResumeTitle** 参数现在将作为动态内容添加到 `text` 属性中。

       ![ResumeTitle 动态内容](../../../../../translated_images/3.2_26_ResumeTitleDynamicContent.7219e078f71fc0d5d4a6bb228ba2d53f0898ba26a27c5eb859df90d12dd52c70.zh.png)

1. 我们将对代表招聘人员需要在何时审阅简历的 **Due Date** 值执行相同的步骤。向下滚动到您看到 `May 21, 2023` 的 `text` 属性的行。

       ![选择允许访问](../../../../../translated_images/3.2_27_DueDatePlaceholder.17c6003cc9ec1141b0aeb5cde203098a7f5534fa11f01a3cbffb66206ed1633a.zh.png)

1. 删除此日期占位符值并点击双引号之间的空白处。

       ![删除](../../../../../translated_images/3.2_28_DeleteDueDatePlaceholder.9a3df55fb3c9ed72e61e0a60dc3344335b0444ff537c9fb51036b0442a85d268.zh.png)

1. 选择右侧的 **闪电图标** 或 **fx 图标**，然后在 **函数** 标签中输入以下表达式并点击 **添加**。

       ```text
       addDays(utcNow(), 3, 'MMM dd, yyyy')
       ```

      此表达式使用了两个函数。

     | 函数 | 说明 |
     |------|------|
     | **addDays** | 向给定日期添加指定天数，并以字符串格式返回结果日期 |
     | **utcNow** | 返回当前日期和时间，以协调世界时 (UTC) 格式作为字符串 |

      对于 utcNow 值，我们将日期格式化为月份和日期，后跟年份。

       ![表达式到期日期](../../../../../translated_images/3.2_29_01_ExpressionDueDate.a4fa31985f5500971f2fc6da0e81e008af12be19d54a30a240764b74a4b2dbcb.zh.png)

      表达式现在将添加到 `text` 属性中。

       ![表达式到期日期](../../../../../translated_images/3.2_29_02_ExpressionDueDate.6159288450731c7b09628af70f0c9a6d92590ca7c7e39e8a524ae8af7c511f2c.zh.png)

1. 最后，我们将更新 JSON 负载底部 `actions` 数组属性中的 `url` 属性的 URL。当前的占位符 URL 将被替换为 **Hiring Hub** 模型驱动应用中简历行的 URL。这将允许招聘人员选择自适应卡的 `Action.OpenURL` 操作并跳转到模型驱动应用中的简历。

       ![删除查看简历 URL 占位符](../../../../../translated_images/3.2_30_ViewResumeURLPlaceholder.f27af6cadfb54fb977f0b46ea3ec42ee0638d38ebc5d294eff5da52abf9d4a1b.zh.png)

1. 在 **Hiring Hub** 模型驱动应用中，使用左侧菜单打开 **Resumes** 系统视图中的一行。简历行将作为表单加载到模型驱动应用中。

      复制简历行的 URL。

    ??? 信息 "如果您退出/关闭了 **Hiring Hub** 模型驱动应用，如何导航回去"

        1. 浏览到 [https://make.powerapps.com](https://make.powerapps.com)，确保您处于用于这些实验的开发环境中，否则请切换到该环境。
        
        ![浏览到 make.powerapps.com](../../../../../translated_images/3.2_31_Note_01_BrowseToURL.a13dfc8b05a0b34f3a4c853f3d3e418864176b52b1b40c069da7712af5562aa5.zh.png)

        1. 在左侧菜单中选择 **Apps**，然后为 **Hiring Hub** 模型驱动应用选择 **播放** 图标以在浏览器中加载它。
        
        ![选择 Hiring Hub 模型驱动应用](../../../../../translated_images/3.2_31_Note_02_HiringHubApp.a09b6ea28b4fea8932809cb847cb0ea3d8faeb7b7b5604852de1f46ab1e9741b.zh.png)

       ![复制简历行 URL](../../../../../translated_images/3.2_31_CopyResumeURL.f6156f8792526129c2613922f0137221b2944fa8ffe7c04766d710521ad8765b.zh.png)

1. 然后导航回代理流程，突出显示当前占位符 URL 值并删除它。

       ![删除简历行 URL 占位符](../../../../../translated_images/3.2_32_SelectResumeURLPlaceHolder.8db783de292428eaa8937242eba4a54ebb1df7bf4c1bc9391b016ee545fb2b9f.zh.png)

1. 然后将复制的 URL 粘贴到 `url` 属性中。

       ![粘贴复制的简历行 URL](../../../../../translated_images/3.2_33_PasteResumeRowURL.d7ba92493d7597b89f75e2f17f76846ac17a9ba89c2e36729dc6b5dc1599b047.zh.png)

1. 您应该看到以下内容。删除末尾的 `GUID` ID 值。我们将用动态内容替换它 - **ResumeId** 参数。

       ![删除查看简历 URL 占位符](../../../../../translated_images/3.2_34_DeleteViewResumePlaceholderURL.7b26209eaeef6dc0a21b16140d05fe2f0e38de5f714575edd24d21dded58102a.zh.png)

1. 选择右侧的 **闪电图标** 或 **fx 图标**。

      在 **动态内容** 标签中选择 **ResumeId** 参数并点击 **添加**。

       ![ResumeId 参数](../../../../../translated_images/3.2_35_ResumeIdParameter.3dc710a7f5216944387f4d5f82c0a372eee23ee5259dec04147ad00e9c454d7d.zh.png)

1. **ResumeId** 将作为动态内容添加。以下黄色高亮部分是您的 **Hiring Hub** 模型驱动应用的环境详细信息。

     | 参数 | 值 | 说明 |
     |------|-----|------|
     | **Organization URI** | GUID | Dataverse/Dynamics 365 环境的组织 URL |
     | **appid** | GUID | 要打开特定的模型驱动应用，可以使用 appid 或 appname 查询参数。在此情况下，使用的是 appid |
     | **id** | GUID | 简历行的 ID 查询参数 |

       ![ResumeId 动态内容](../../../../../translated_images/3.2_36_ResumeIdDynamicContent.a1a40dfb4a83b60f1b75b02160890e3fec41c2c7df8adf32e02d652a57c1ee87.zh.png)

1. 我们已经完成了配置 **在聊天或频道中发布卡片** 操作 👏🏻 点击 **x** 图标退出操作配置面板。

       ![关闭面板](../../../../../translated_images/3.2_37_CloseActionPanel.23d07107381411aa9494ef36fb240682a0727a63e6f15082074b34a1defd517b.zh.png)

1. 最后，我们将配置最后一个操作 **响应代理**，通过发送文本给代理结束处理。

      在 **响应代理** 操作中，选择 **+添加输出**。

       ![选择添加输出](../../../../../translated_images/3.2_38_AddAnOutput.de1a0e49033cb077eb5d2c226152bbb06dc12fb95d0496c69d469eecdb46c0ae.zh.png)

1. 选择 **文本** 作为输出类型。

       ![选择文本作为输出类型](../../../../../translated_images/3.2_39_SelectText.4e1e82c35fe9d1b569b668092d405aa9b0c81fbe67e7de68a660f2083ed3afdd.zh.png)

1. 输入以下内容作为输出名称。

       ![结束对话输出](../../../../../translated_images/3.2_40_EndConversationOutput.e392b58847d8439443c89459fccbbd88d4ea5e5fa562749b77407c46b9ff4ca4.zh.png)

1. 输入以下内容作为输出值。

       ```text
       Finished
       ```

       ![结束对话输出值](../../../../../translated_images/3.2_41_EndConversationOutputValue.2cb836900ee9fca802926676e613b077938f1106cc16e77ddd77af64ce92dcc8.zh.png)

1. 我们现在已经完成了代理流程的配置。选择 **保存草稿** 以保存代理流程。保存后会出现确认消息。

       ![保存草稿](../../../../../translated_images/3.2_42_SaveDraft.1bb26eec40faf5d2c244d93f869344915e90423623e07e02cac2c1f8c73d1a4a.zh.png)

1. 在发布代理流程之前，我们需要更新代理流程的详细信息。选择 **概览** 标签并点击 **编辑**。

      在流程名称字段中输入以下内容。

       ```text
       Notify Teams Applicant channel
       ```      

      然后选择 **刷新** 图标以使用 AI 更新代理流程的描述。

      接着选择 **保存** 以保存代理流程的更新详细信息。

       ![编辑并保存详细信息](../../../../../translated_images/3.2_43_EditDetails.f0c9b53a9c1b29e4aa3c34774680559ae9173f77b3a37817bab2296b77ffcca7.zh.png)

1. 返回到 **设计器** 标签并选择 **发布** 以发布代理流程。保存后会出现确认消息。

       ![发布代理流程](../../../../../translated_images/3.2_44_PublishAgentFlow.3014e6de5e53aa5fc2021bf6e11b901c4990b4fbb4d4cee33cc6d5b6cc641ed8.zh.png)

1. 现在需要将代理流程作为工具添加到 **Application Intake Agent** 中。返回到 **Hiring Agent**，选择 **Agents** 标签，然后选择 **Application Intake Agent**。

       ![选择 Application Intake Agent](../../../../../translated_images/3.2_45_ApplicationIntakeAgent.0446b1762d0f499e880e7984f59669639193566f72539cd4fba5c62cd1fe8726.zh.png)

1. 在代理的 **详细信息** 部分，我们将更新 **描述** 字段。复制以下内容并粘贴到描述文本的末尾。

       ```text
       并通知 Teams Applicant 频道
       ```

       ![更新代理描述](../../../../../translated_images/3.2_46_UpdateAgentDescription.56344699cd3cc5e417e8f95362ed2288d0c0391f33bd98872e7e008a545175f0.zh.png)

1. 接下来，我们将代理流程添加为工具。向下滚动并选择 **+ 添加**。

       ![选择添加](../../../../../translated_images/3.2_47_AddTools.c7557e272bd731129dffe9edebba3b04170d27806aaa14fffbe3d66b7b61808b.zh.png)

1. 选择之前创建的代理流程 **Notify Teams Applicant Channel**。

       ![选择代理流程](../../../../../translated_images/3.2_48_NotifyTeamsApplicantChannelAgentFlow.5985f570786edef4eac93455f7a07978c0daf54e1371660bfd56a4c16b6aaf79.zh.png)

1. 接着选择 **添加并配置**。

       ![选择添加并配置](../../../../../translated_images/3.2_49_AddAndConfigure.c2d6cccfa9e4bb23ff58b615ad16d0b3ade4ef867b73b9196a45df6990d8072f.zh.png)

1. 在代理流程的 **输入** 部分，可以看到我们之前在代理流程中配置的三个输入。默认情况下，**填充方式** 配置设置为 **使用 AI 动态填充**。我们将保持此设置不变，因为事件触发器的提示（在最后一个操作中，**向指定的 Copilot 发送提示进行处理** - 这是 **Lab 3.1 - 自动上传通过电子邮件接收的简历到 Dataverse** 的步骤 38-44）将包含 AI 提取的参数值。

       ![工具代理流程输入](../../../../../translated_images/3.2_50_Inputs.9fbb57b83b533d5a60f957505bb1e5430886ec9e6c70c10ed1c641d6b33fcc21.zh.png)

1. 现在工具已添加到 **Application Intake Agent** 中，需要更新代理的说明。选择 **返回箭头** 图标以返回到代理列表。

       ![选择返回箭头图标](../../../../../translated_images/3.2_51_SelectBack.6a9a55176d931895777822d3f9276d5d12ffe379a8860dd521e1c895e8188bba.zh.png)

1. 在 **Hiring Agent** 的 **Agents** 标签中选择 **Application Intake Agent**。

       ![选择 Application Intake Agent](../../../../../translated_images/3.2_52_SelectApplicationIntakeAgent.039140313422e833389fd134b3a70a0eed11ba175ede5dbdc4abcce6004c7d2d.zh.png)

1. 在 **说明** 字段中，在 `2.Post-Upload` 说明后输入新的一行。复制并粘贴以下说明。

       ```text
       通过电子邮件上传简历的流程
       1. 当您收到消息时，**将 [ResumeId (text)] = "1680265f-5793-f011-b41b-7c1e525be9f7" 和 [ResumeTitle (text_1)] = "TAYLOR TESTPERSON (FICTITIOUS).pdf" 以及 [ResumeNumber (text_2)] = "R01026" 发送到子代理 "Application Intake Agent" 中的工具 "Notify Teams Applicant channel"，调用 [AGENT FLOW PLACEHOLDER]**
       ```

       ![更新 Application Intake Agent 的说明](../../../../../translated_images/3.2_53_PasteCopiedInstructions.f24ed715e907cf023449a54b894354ca1252b198e9be694eec2875f7f647f9c2.zh.png)

1. 高亮显示 `[AGENT FLOW PLACEHOLDER` 文本。

       ![高亮占位符](../../../../../translated_images/3.2_54_HighlightPlaceholder.6c3fcac3c8f4fb6e5cce2dbd6b6548b84652d009e20fa4a01183a9a1b42b24fb.zh.png)

1. 输入斜杠字符 `/`，然后选择 **Notify Teams Applicant Channel** 工具。

       ![选择 Notify Teams Applicant Channel 工具](../../../../../translated_images/3.2_55_NotifyTeamsApplicatnChannelTool.2e3dd1e9ee9b2dfe10e1f2feb7e3b74b08856ce3afb16dafae1f2c4b73da904f.zh.png)
1. 根据指示，现在由 **Application Intake Agent** 调用代理流程。在事件触发器的最后一个操作（**向指定的协作助手发送处理提示**）将包含参数值的提示发送回代理后，代理流程将被触发。

      选择 **保存** 以保存更新后的 **Application Intake Agent** 指令。

       ![选择保存](../../../../../translated_images/3.2_56_Save.6abb0131f96b20d3753b5990313eaea6a237bef2bf0e2103a2ee5ba570fd7c04.zh.png)

1. 一旦代理保存后，指令将会更新。

       ![指令已更新](../../../../../translated_images/3.2_57_InstructionsUpdated.5bfbfe2ca1da16284358a9917246bd8676cd6c095839ed1c69361d992cacd2b3.zh.png)

1. 现在我们需要 **发布** **Hiring Agent**。点击右上角的 **发布**，在弹出的 _发布此代理_ 模态窗口中选择 **发布**。

       ![发布 Hiring Agent](../../../../../translated_images/3.2_58_PublishAgent.e7ec81c81b735de0cd11516aa944c759ea510e2b0bc9acf9f00d42d788896991.zh.png)

1. 发布后，将会出现确认消息，提示代理已成功发布。

       ![确认消息](../../../../../translated_images/3.2_59_AgentPublished.d15e01232544cf08943260dfbf61c92339dbd187620349e7c5a43add4796ed12.zh.png)

现在我们可以测试代理了！

### 实验 3.3 - 测试事件触发器

1. 要执行事件触发器，需要发送一封带有简历 PDF 文件的电子邮件。在 Outlook 中，撰写一封新邮件。

     | 邮件组件 | 详细信息 |
     |----------|------------|
     | **收件人** | 使用您登录的用户账户作为值 |
     | **文件附件** | 上传 [TAYLOR TESTPERSON (FICTITIOUS)](../../../../../docs/operative-preview/test-data/resumes/TAYLOR%20TESTPERSON%20(FICTITIOUS).pdf) 文件 |
     | **正文** | 将以下内容复制并粘贴到邮件正文中 |

       ```text
       尊敬的招聘经理：

       我写信是为了表达我对贵公司高级 Power Platform 工程师职位的兴趣。凭借超过九年的经验，我在 Microsoft 云平台上交付了安全且可扩展的解决方案，我相信我能够为您的团队做出有效贡献。

       在我最近担任的首席 Power Platform 工程师职位中，我开发了一个自动化简历接收管道，减少了手动分类工作并提高了搜索效率。我交付了 HR 案例管理应用程序，引入了解决方案感知流，并实施了 PR 检查以缩短部署时间。我的专业领域包括 Power Apps、Power Automate、Power Pages、Dataverse，以及一系列 Microsoft 365 服务，同时还包括与 Graph/REST API 和 Azure Functions 的集成。

       此前，我开发了使用自适应卡片的 Teams 审批流程，将审批时间缩短至当天，并创建了强大的错误处理框架。我的背景还包括将遗留工作流迁移到 Power Automate，并构建了被数百名员工采用的自助服务门户。

       我拥有计算机科学学士学位，并获得了 Power Platform 开发者（PL-400）和解决方案架构师（PL-600）认证。我还热衷于指导，并曾与当地创客团体合作进行志愿服务。

       请查收附件中的简历以供参考。我期待有机会与您讨论我的技能和经验如何与您的需求相匹配。

       感谢您的时间和考虑。

       此致，
       Taylor Testperson
       ```

       **发送**邮件。

       ![撰写带有 PDF 文件附件的邮件](../../../../../translated_images/3.3_01_ComposeEmailWithAttachment.eccba1bbcc276b4373277b193a66d8818b712c6ab9468ee12902545522b670f7.zh.png)

1. 在 Power Automate 制作门户中，找到事件触发器流程，点击 **刷新** 图标以查看成功运行的流程。

       ![点击刷新图标查看流程运行](../../../../../translated_images/3.3_02_FlowRun.0e99756ebc5fba371dc72719b0619736626934461e58db2dc153535cbabcc1e8.zh.png)

1. 返回到 Copilot Studio 的 **Hiring Agent**，选择 **活动** 标签。

       ![选择活动标签](../../../../../translated_images/3.3_03_SelectActivity.11d78735a8a2a1f64443d285deb47f2bacc5bd53ded039791215f9465dbc3f76.zh.png)

1. **活动** 标签将加载，显示 **Hiring Agent** 的所有活动。会有一个名称为 **Automated** 且状态为 **完成** 的活动。此活动代表事件触发器以及被调用的代理流程。

       ![活动已完成](../../../../../translated_images/3.3_04_StatusComplete.dbe14ffb9414b0f4d869841426c4ca595d7a664bf13f4b5e2e29a4e251b9064c.zh.png)

1. 选择该活动，并在活动地图中选择事件触发器。在右侧面板中，可以看到提示中的输入参数包含 `Resume Id`、`Resume Title` 和 `Resume Number` 参数值，这些值来自之前创建的 **Dataverse** 行。这些是之前在 **实验 3.1 - 自动上传通过邮件接收的简历到 Dataverse** 的步骤 18 - 27 中配置的动态内容值。

       ![事件触发器](../../../../../translated_images/3.3_05_EventTrigger.cbd73cd43a79e88e782d1e47ac8ddacdbe30d582a4da61a31010f44a9dacdd12.zh.png)

1. 返回到 **Hiring Hub** 模型驱动应用，在 **Resumes 系统视图** 中选择 **刷新** 以刷新视图。通过事件触发器创建的简历新行现在会显示在列表中。

       ![简历行已创建](../../../../../translated_images/3.3_06_ResumeRowCreated.9ab850d8d7c066aad8531409b00a4de5f214b4d8d209d39fa0d493d5c55e041d.zh.png)

1. 返回到 Copilot Studio，在活动地图中选择 **Application Intake Agent** 的 **Notify Teams Applicant Channel** 代理流程。在右侧面板中，可以看到输入值来自 Dataverse 行。这些值来自事件触发器的最后一个操作（**向指定的协作助手发送处理提示**）发送的提示，其中包含新创建的 Dataverse 行的参数值。这就是我们如何将参数值从事件触发器传递到代理流程。

       ![选择代理流程](../../../../../translated_images/3.3_07_NotifyTeamsApplicantChannel.9b6c4654197efca9c88dde72cfb38812038ef5f6bdce8c309046c02643092bb6.zh.png)

1. 最后，让我们看看发布到 **Microsoft Teams** 频道的自适应卡片。在频道中，我们会看到显示新创建的 Dataverse 简历行信息的自适应卡片。将鼠标悬停在自适应卡片开头的超链接上，可以看到 URL 是我们之前在自适应卡片的 JSON（**实验 3.2 - 使用自适应卡片通知 Teams 频道** 的步骤 15 - 19）中配置的 Resumes 系统视图 URL。

       ![自适应卡片简历表系统视图 URL](../../../../../translated_images/3.3_08_AdaptiveCardResumeTableURL.5a59821d60c8698e5c9e4746806b975bbdf3c4400dc0bb02a53f350bdea569e9.zh.png)

1. 点击超链接，您将被引导到浏览器中的 **Hiring Hub** 模型驱动应用的 Resumes 系统视图。

       ![Hiring Hub 模型驱动应用中的简历系统视图](../../../../../translated_images/3.3_09_ResumeTableSystemView.81f52ab85aadda7d9131ced31d024fb4b411ccf600dd230d9d7e931c476e271c.zh.png)

1. 返回到发布到 Microsoft Teams 频道的自适应卡片。这次，将鼠标悬停在 **查看简历** 上，这是自适应卡片的 `Action.OpenURL` 操作。可以看到 URL 是我们之前在自适应卡片的 JSON（**实验 3.2 - 使用自适应卡片通知 Teams 频道** 的步骤 30 - 36）中配置的简历行 URL。

       ![自适应卡片简历行 URL](../../../../../translated_images/3.3_10_AdaptiveCardResumeRowURL.2063a075c2d4adec27dfcc2ea4c01a385d791e0c4fc127caba912bde14bf77d6.zh.png)

1. 点击该操作，您将被引导到浏览器中的 **Hiring Hub** 模型驱动应用的简历行表单。

       ![Hiring Hub 模型驱动应用中的简历行](../../../../../translated_images/3.3_11_ResumeRow.6f051ed512d396712a04ee98319d6643516e0bbfbf8a9de07d3df7d264563b9c.zh.png)

## ✅ 任务完成

恭喜！👏🏻 出色的工作，行动者。

✅ 事件触发器：您已创建一个事件触发器，将 Dataverse 参数值传递到代理流程。  
✅ 构建了代理流程：使用 Dataverse 参数值将自适应卡片发布到 Microsoft Teams 的频道，提醒 HR 招聘团队。  
✅ 更新了子代理指令：在事件触发器完成后调用流程。

这使得 **Hiring Agent** 能够在收到带有简历附件的电子邮件时自动工作，并通知 HR 招聘团队进行人工审核。

这就是 **实验 03 - 自动化候选人申请邮件** 的结束，点击下面的链接进入下一课。

⏭️ [进入 **编写代理指令** 课程](../04-agent-instructions/README.md)

## 📚 战术资源

📖 [在 Copilot Studio 中让您的代理实现自动化](https://learn.microsoft.com/training/modules/autonomous-agents-online-workshop/?WT.mc_id=power-188561-ebenitez)  

📖 [添加事件触发器](https://learn.microsoft.com/microsoft-copilot-studio/authoring-trigger-event?WT.mc_id=power-188561-ebenitez)  

📖 [将代理流程与您的代理一起使用](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-188561-ebenitez)  

📖 [Power Automate 触发器简介](https://learn.microsoft.com/power-automate/triggers-introduction?WT.mc_id=power-188561-ebenitez)  

📖 [在代理中使用 Power Automate 流程](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create?WT.mc_id=power-188561-ebenitez)  

📖 [Copilot Studio 的数据丢失防护](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention?WT.mc_id=power-188561-ebenitez)  

---

**免责声明**：  
本文档使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。原始语言的文档应被视为权威来源。对于重要信息，建议使用专业人工翻译。我们不对因使用此翻译而产生的任何误解或误读承担责任。