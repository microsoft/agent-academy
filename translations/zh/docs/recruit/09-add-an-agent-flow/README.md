<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cc4afa4a5a11c9d03896decfbcbd4060",
  "translation_date": "2025-10-18T02:51:20+00:00",
  "source_file": "docs/recruit/09-add-an-agent-flow/README.md",
  "language_code": "zh"
}
-->
# 🚨 任务09：为主题添加代理流程实现自动化

## 🕵️‍♂️ 代号：`自动化动力中心行动`

> **⏱️ 行动时间窗口：** `~30分钟`  

🎥 **观看操作演示**

[![代理流程视频缩略图](../../../../../translated_images/video-thumbnail.ede12df9aaebcc8996680c8b6555d309b53bdf33d1b0165cae3b5173a6bcdd73.zh.jpg)](https://www.youtube.com/watch?v=vtLZJT3eBXg "在YouTube上观看操作演示")

## 🎯 任务简报

您的代理现在可以与用户对话并提供信息，但要实现真正的运营卓越，您的代理需要能够采取行动。通过这次任务，您将把您的对话代理转变为自动化动力中心，为其配备代理流程。

任务结束时，您将创建一个端到端的设备请求自动化流程，该流程通过自适应卡片捕获用户输入，从SharePoint检索数据，通过电子邮件向经理发送通知，并提供无缝的用户反馈——所有这些都由您的代理通过智能工作流自动化进行协调。

## 🔎 目标

在本次任务中，您将学习：

1. 了解什么是代理流程以及它们与Power Automate云流程的自动化有何不同
1. 学习使代理流程强大的关键功能，包括AI操作和自然语言创作
1. 探索代理流程设计器以及如何使用表达式进行动态数据处理
1. 创建一个完整的设备请求自动化流程，集成SharePoint数据和电子邮件通知

## 🤔 什么是代理流程？

代理流程是一种强大的工具，用于自动化重复任务并集成您的应用程序和服务。可以将它们视为结构化的逐步工作流，您的代理可以执行这些工作流来自动化任务或与其他应用程序和服务连接。它们类似于迷你工作流，帮助您的代理完成发送通知、更新记录或响应事件等任务。

与使用AI实时决策的自主代理不同，代理流程是**确定性工作流**——这意味着它们每次都遵循相同的路径，确保结果的一致性和可靠性。

简单来说：

- 它们帮助您的代理完成任务，而不仅仅是与用户对话。
- 它们可以在多个主题和代理之间重复使用，并可以通过用户消息、事件或其他应用程序和服务触发。

## 🙋🏽 是的，但它与Power Automate云流程有何不同？

代理流程和Power Automate云流程都可以帮助自动化任务。它们的设计目的不同，工作方式也有所不同。

### 🤖 Copilot Studio中的代理流程

**用途：**

- 专为Copilot Studio中的对话和自主代理（通过代理指令）构建。
- 专注于与业务系统交互的智能AI驱动自动化。

**优势：**

- 可以直接在Copilot Studio中轻松构建和管理。
- 非常适合在与用户对话期间发生的任务自动化，例如提交请假申请。
- 不需要单独的Power Automate许可证，因为计费基于Copilot Studio内的使用情况。这可以为企业团队节省时间和成本。

**限制：**

- 无法共享、复制或分配共同所有者。
- 代理流程仅在Copilot Studio中可见和可用。
- 目前，代理的事件触发器可以在Power Automate创建者门户中编辑。

### ☁️ Power Automate云流程

**用途：**

- 设计用于跨多个应用程序和服务的通用自动化。
- 可以独立运行或与代理流程协同工作。

**优势：**

- 提供广泛的连接器。
- 非常适合在代理之外自动化流程。
- 可以在团队之间共享、重复使用和管理。

**要求：**

- 使用它需要Power Automate许可证。

### 📗 总结

| 使用此项 | 当您想要 |
| :- | :- |
| 代理流程 | 在代理内部自动化任务，使用AI，并在Copilot Studio中完成所有操作 |  
| Power Automate云流程 | 在应用程序和服务之间自动化，或在代理之外构建工作流 |

## 👍🏻 为什么使用代理流程

代理流程始终遵循固定路径——在输入相同时，每次都会执行相同的操作。

这使得它们：

- **可靠** - 您可以信任它们每次都表现一致。
- **可预测** - 您知道流程运行时会得到什么结果。
- **基于规则** - 它们遵循您定义的步骤。

其他优势包括：

- **自动化** - 使您的代理能够处理重复任务，例如提交表单或发送通知。
- **连接性** - 可连接1400多个连接器，如ServiceNow、SharePoint、Salesforce。或者您可以构建自己的自定义连接器。
- **紧密集成** - 代理流程是代理逻辑的一部分，直接由用户消息或对话中的操作触发。
- **可扩展性** - 在多个代理或场景中重复使用流程。
- **无代码或低代码** - 您可以使用自然语言或可视化设计器构建流程。
- **一体化平台** - 您可以在一个地方设计、测试和部署代理流程——Copilot Studio。无需在平台之间切换。

## 🏄🏻‍♂️ 代理流程如何增强您的代理？

代理流程扩展了您的代理在与用户“聊天”之外的功能。它们使代理能够采取行动并与系统交互。

假设您在财务部门工作，经常收到供应商的发票。通常情况下，需要有人阅读每张发票，提取重要信息——金额、日期、发件人，并检查是否与您的记录匹配。然后将其发送给相关人员审批。这需要耗费时间和精力。

通过Copilot Studio中的代理流程，您可以自动化此过程。当发票到达时，代理会：

1. 使用智能文档处理读取文档，找到关键信息。
1. 根据企业数据检查详细信息，确保一切正确。
1. 将发票发送给相关人员进行审批。

这节省了时间，减少了错误，使整个过程更加顺畅。

### 可以这样理解

- **代理**：智能决策者
- **代理流程**：可靠的执行者

### 为什么重要

- 您可以同时获得可靠的自动化和灵活的AI。
- 随着业务需求的变化，可以轻松构建和更新流程。
- 您可以在团队之间扩展自动化。

## 🔌 使代理流程强大的关键功能

1. **自然语言创作**
    - 您可以用简单的语言描述您希望流程完成的任务。
    - Copilot理解您的意图并为您构建流程。
    - 无需编写代码——只需解释您的想法。

1. **AI操作**

    使用AI来：

    - 阅读和理解文档或图像。
    - 将冗长的内容总结为简短有用的答案。
    - 提供智能建议或决策。

1. **生成操作**
    - 这些操作使流程能够实时适应。
    - 代理可以根据变化的信息规划和调整步骤。

1. **集成操作**
    - 通过1400多个内置连接器或自定义连接器，将您的流程连接到其他工具，如Outlook、Microsoft Teams、ServiceNow、SharePoint以及其他应用程序和服务。
    - 这使您的代理能够与团队已经使用的应用程序协同工作。

1. **人工参与**
    - 添加需要人工审核或确认的审批步骤。
    - [高级审批](https://learn.microsoft.com/microsoft-copilot-studio/flows-advanced-approvals?WT.mc_id=power-172621-ebenitez)支持提醒、委托和多阶段审批。

## ⚙️ 它们如何工作

1. **触发器**

    一个事件启动流程——例如用户提问、从主题中调用流程、计划时间或其他系统中发生的事件。

1. **操作**

    这些是代理接下来执行的步骤——发送电子邮件、调用API、更新ServiceNow中的工单。

## 🧶 如何创建代理流程

1. **自然语言**：描述您希望代理完成的任务，Copilot会为您构建流程。
1. **设计器画布**：在代理流程设计器中拖放操作、条件和循环来构建您的代理流程。

## 🎨 什么是代理流程设计器？

这是Copilot Studio中的一个可视化工具，帮助您构建、编辑和管理代理流程，为您的代理提供逐步指令以完成任务。即使您是代理流程的新手，它的设计也非常直观易用。

### 代理流程设计器的关键功能

1. **可视化画布**
    - 您可以像查看图表一样查看整个流程。
    - 可以轻松放大/缩小、调整视图或使用小地图导航大型流程。

1. **添加和删除操作**
    - 点击_加号（+）_按钮添加新操作，例如发送消息或更新SharePoint列表中的项目。
    - 您可以从连接器中搜索操作，并通过其设置进行配置。
    - 要删除操作，请点击_三点（⋮）_并选择_删除_。

1. **检查参数**
    - 点击任意操作以查看或编辑其设置，称为_参数_。
    - 您可以手动输入值或使用_表达式_使其动态化。

1. **版本历史**
    - 每次保存流程时都会记录一个版本。
    - 如果需要，您可以回溯查看或恢复之前的版本。

1. **错误检查**
    - _流程检查器_会突出显示任何错误。
    - 所有错误需要在发布流程之前解决。

1. **发布和测试**
    - 一旦流程无错误，发布即可使其上线。
    - 使用_测试_功能手动或自动运行流程，检查其是否按预期工作。

### 为什么使用代理流程设计器？

- **可视化且直观** - 您可以通过拖动和点击来构建流程。
- **安全试验** - 版本历史允许您撤销更改。
- **内置测试** - 帮助您确保一切在上线前正常工作。

## 🔤 您提到_表达式_ - 什么是表达式？

表达式是帮助代理流程处理数据的小型公式或命令。您可以使用它们来计算值、格式化文本、做出决策或从输入中提取特定信息。

### 为什么使用表达式？

表达式可以让您：

- **自定义数据处理方式** - 合并名称、格式化日期。
- **做出决策** - 如果某个值大于10，则执行某些操作。
- **转换数据** - 将文本转换为小写，提取字符串的一部分。
- **自动化逻辑** - 无需编写完整代码。

### 表达式是什么样的？

表达式使用函数。我借用前微软MVP Jerry Weinstock对函数的解释。

!!! 引用
    函数是内置逻辑，用于通过简单或复杂的操作在表达式中转换数据。

函数使您能够构建表达式，而无需编写任何代码。

我喜欢这样描述，代理流程中的函数类似于Excel函数。您可以对数据执行操作，将其转换为所需的输出。在Excel中构建公式时，您从表格中的单元格或范围选择输入值，然后应用函数来操作数据输出。例如，使用`COUNT`函数计算范围内包含数字的单元格数量。

在代理流程中，您不是引用表格中的单元格数据，而是引用触发器或操作的输出数据来构建表达式。继续前面的例子，使用函数`length`来获取从_Get items_ SharePoint连接器操作返回的项目数量。

### 为什么函数很重要？

使用函数使您的代理流程：

- **更智能** - 它们可以对不同的输入或条件做出反应。
- **更灵活** - 您可以自定义数据处理方式。
- **更高效** - 通过自动化逻辑避免手动步骤。

### 最有用的函数

以下是代理流程中常用的函数。完整的函数列表请参阅[参考指南](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez)。

#### 🔡 文本

- `concat()` - 将两个或多个文本片段连接在一起。
      - 示例：`concat('Hello ', firstName)` → “Hello John”

- `toLower()` / `toUpper()` - 将文本转换为小写或大写。
      - 用于标准化输入。

- `substring()` - 提取字符串的一部分。
      - 示例：获取名字的前三个字母。

- `trim()` - 删除文本开头和结尾的空格。

#### 🔢 数学和数字

- `add()`、`sub()`、`mul()`、`div()` - 基本数学运算。
      - 示例：`add(5, 3)` - 输出为8

#### 📅 日期和时间

- `utcNow()` - 获取当前UTC日期和时间。
      - 非常适合时间戳。

- `addDays()`、`addHours()` - 向日期添加时间。
- 示例：`addDays(utcNow(), 7)` 的输出是从现在起的7天后。

- `formatDateTime()` - 将日期格式化为可读字符串。
  - 示例：星期一，2025年7月7日

#### ✅ 逻辑

- `if()` - 如果条件为真则运行一个值，否则运行另一个值。
  - 示例：`if(score > 50, 'Pass', 'Fail')`

- `equals()` - 检查两个值是否相同。

- `and()`、`or()`、`not()` - 组合多个条件。

#### 🪣 其他实用函数

- `coalesce()` - 返回第一个非空值。
  - 用于回退/默认值。

- `guid()` - 生成唯一标识符。
  - 用于跟踪或记录。

- `length()` - 计算字符串或数组中的字符或项目数量。

## ⭐ 最佳实践

以下是一些在Copilot Studio中构建代理流程的最佳实践。

1. **从简单开始，逐步构建**

   - 从一个小而明确的任务开始，比如发送消息。
   - 在测试自动化的基本功能后再添加更多步骤。

1. **使用清晰且描述性的操作名称**

   - 清楚地标记每个步骤，以便您和您的团队了解它的功能。
   - 示例：与其为SharePoint连接器操作使用默认名称“更新项目”，不如将其重命名为具体更新的内容，例如“更新设备状态”。

1. **在发布前检查错误**

   - 使用 **流程检查器** 找出并修复任何问题。
   - 如果存在错误，您无法发布流程，因此请在问题出现时解决它们。

1. **彻底测试您的流程**

   - 保存和发布流程并不意味着它会按预期工作。
   - 使用 _测试_ 功能手动或自动运行您的流程，并检查结果。

1. **使用版本历史记录**

   - 经常保存您的流程，以便在需要时可以回到早期版本。
   - 您可以使用 _版本历史记录_ 面板查看和恢复以前的版本。

1. **明智地使用参数和表达式**

   - 配置操作时，使用参数使您的流程更具动态性。
   - 您可以手动输入值，也可以使用表达式进行计算，或者通过使用 _动态内容_ 选择器将其与上游操作的值结合。

1. **删除未使用的操作**

   - 如果您添加了一个操作，后来决定不需要它，请将其删除以保持流程整洁。

## 🧪 实验09 - 添加代理流程以实现自动化并增强主题功能

现在我们将学习如何通过自适应卡片和使用主题和节点的高级功能来增强我们的主题。

- [9.1 创建代理流程](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.2 将代理流程添加到主题](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.3 更新请求设备主题，添加多个节点以改善用户体验](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.4 使用多个场景测试代理](../../../../../docs/recruit/09-add-an-agent-flow)

### ✨ 使用场景

**作为** 一名员工的经理

**我希望** 接收设备请求

**以便** 我可以审核员工请求的设备。

让我们开始吧！

### 前提条件

1. **SharePoint 列表**

   我们将使用 [课程设置第00课 - 第3步：创建新的SharePoint站点](../00-course-setup/README.md#step-4-create-new-sharepoint-site) 中的 **设备** SharePoint 列表。

   如果您尚未设置 **设备** SharePoint 列表，请返回 [课程设置第00课 - 第3步：创建新的SharePoint站点](../00-course-setup/README.md#step-4-create-new-sharepoint-site)。

1. **Contoso帮助台代理**

   我们将使用之前在 [第06课 - 使用Copilot和您的数据创建自定义代理](../06-create-agent-from-conversation/README.md) 中创建的代理。

### 9.1 创建代理流程

在本练习中，我们将创建一个代理流程，用于检索所选设备的SharePoint项目，并向经理发送包含设备详细信息的电子邮件。

1. 在 **请求设备** 主题中，向下滚动到 **使用自适应卡片询问** 节点并添加一个新节点。选择 **添加工具**，在弹出窗的 **基本工具** 选项卡中，选择 **新建代理流程**。

    ![添加新代理流程](../../../../../translated_images/9.1_01_AddNewAgentFlow.2b9078604a054d1f022f9c73adaf10fe430e81875ec8717a7f70ef7b05f11c15.zh.png)

1. 代理流程 **设计器** 将加载触发器和操作。

    - **触发器** - 当代理调用流程时
        - 这将从Copilot Studio代理触发流程。

    - **操作** - 响应代理
        - 这将发送包含输出值的响应回到Copilot Studio代理。

    选择触发器。

    ![选择触发器](../../../../../translated_images/9.1_02_SelectTrigger.92dc20442add764c8aa4b7f737f28416a3223e4471562462ed6dcba2dc7c7936.zh.png)

1. 接下来，我们将为代理流程添加多个输入。

    - `DeviceSharePointId` - 这将存储SharePoint项目的值，即ID。此ID值是用户选择设备时从使用自适应卡片询问节点的输出。

    - `User` - 这将是用户的姓名，来自代理的系统变量。

    - `AdditionalComments` - 这是用户输入的评论，是使用自适应卡片询问节点的输出。

    我们首先将 `DeviceSharePointId` 添加为触发器的输入。选择 **+ 添加输入**。

    ![添加输入](../../../../../translated_images/9.1_03_AddInput.fd1e0a99ecb5e20f3a518cb23fc0d22c6db1435c5ffb2e183fce3b8a056287bb.zh.png)

1. 对于用户输入的类型，选择 **文本**。

    ![选择文本](../../../../../translated_images/9.1_04_SelectText.47ca776822ec5a6c1339c012d51e0eb6eac6bf8315d4ac6f25498b10ada16df9.zh.png)

1. 对于输入的名称，输入以下内容。

    ```text
    DeviceSharePointId
    ```

    ![DeviceSharePointId 输入](../../../../../translated_images/9.1_05_DeviceSharePointIdInput.caf77f8eb60a1b8649ea8b0abf05dfce9fa4bef9d9c465cd8906395e5b44842e.zh.png)

1. 我们现在将添加第二个输入，`User`。重复相同的步骤，选择 **+ 添加输入** 并选择 **文本**。

    ![添加输入](../../../../../translated_images/9.1_06_AddInput.3ca4bff9991b6e8a331bd909ff58038387696ce7b6ee7a932a88316aff41bc57.zh.png)

1. 对于输入的名称，输入以下内容。

    ```text
    User
    ```

    ![User 输入](../../../../../translated_images/9.1_07_UserInput.16b2405f2d5744ea14a6a67b69539ba24719aaf642ddfc2b281e784d74d8c1ea.zh.png)

1. 我们现在将添加第三个输入，`AdditionalComments`。重复相同的步骤，选择 **+ 添加输入** 并选择 **文本**。

    ![添加输入](../../../../../translated_images/9.1_08_AddInput.4685bb77618e6d9cfca7a42a0945d10f59825b1ca42de372dcf07c9170451680.zh.png)

1. 对于输入的名称，输入以下内容。

    ```text
    AdditionalComments
    ```

    ![AdditionalComments 输入](../../../../../translated_images/9.1_09_AdditionalComments.a4587b59b85450ca0566615c9473132dd6447e6c7513e4926942655aa0e80195.zh.png)

1. 对于 `AdditionalComments` 输入，我们将其更新为可选。选择 **省略号 (...) 图标** 并选择 **将字段设为可选**。

    ![将字段设为可选](../../../../../translated_images/9.1_10_Optional.753bd03817c2eb37bb44a7bfd7d29314aa7109cde02e3f619c01c42bc9170b71.zh.png)

1. 干得好！触发器现已配置完成，继续操作。选择触发器下方的 **加号 + 图标** 以插入新操作。

    ![添加操作](../../../../../translated_images/9.1_11_AddAction.86c14acd1ce22e99b7244e0001f0039362ff6ac3efafe03956788aaa31e705af.zh.png)

1. **操作面板** 将出现，您可以在其中查看Microsoft和第三方服务的1400多个内置连接器的操作。在 **搜索字段** 中输入以下内容，

    ```text
    Get item
    ```

    搜索结果中将显示一系列操作。选择 **SharePoint连接器** 中的 **获取项目** 操作。

    ![获取项目操作](../../../../../translated_images/9.1_12_AddGetItemAction.434cdcb822e1f72993fc4a0c0ad753e1220456f9dab8fc307d42f5711071d45b.zh.png)

1. 我们现在可以开始配置 **获取项目** 操作。

    在 **获取项目** 操作中选择 **省略号 (...)** 图标。

    ![选择省略号](../../../../../translated_images/9.1_13_SelectEllipsis.88bf304067f3103825f183f8962634af831460541290533e5670f4c014a97c46.zh.png)

1. 选择 **重命名**。

    ![选择重命名](../../../../../translated_images/9.1_14_SelectRename.74d99c883418b7dbf58758304976cac1d0f2afd30e4cd1992830f00775a46b18.zh.png)

1. 将操作重命名为，

    ```text
    Get Device
    ```

    ![重命名操作](../../../../../translated_images/9.1_15_RenameAction.ff64b79f6e6603ae89f272f91d84ff4432c04ba103c401a2808a767e3ceb5617.zh.png)

1. 在 **站点地址** 字段中，选择在 [课程设置第00课 - 第3步：创建新的SharePoint站点](../00-course-setup/README.md#step-4-create-new-sharepoint-site) 中创建的Contoso IT SharePoint站点的 **站点地址**。

    在 **列表名称** 字段中，选择 **设备** SharePoint 列表。

    ![输入参数](../../../../../translated_images/9.1_16_SharePointSiteAndListParameters.af6e0b112eb4bfb210f9259da02b459097a06307afa6ca269cb33aa9ecc1c1e4.zh.png)

1. 在 **Id** 字段中，选择右侧的 **闪电图标** 或 **fx图标**。

    ![动态内容选择器](../../../../../translated_images/9.1_17_InsertExpressionIcon.6e250bb84e7b8884de7b2052005f7ff3cd95f2c28671d2da7965001b3f621902.zh.png)

1. 在弹出窗的 **动态内容** 选项卡中，输入以下内容，

    ```text
    sharepoint
    ```

    搜索结果将显示与搜索值匹配的输入参数。选择触发器中的 **DeviceSharePointId** 参数。

    接着，选择 **添加** 将动态内容输入添加到操作的 **Id** 参数中。

    ![选择 DeviceSharePointId 输入](../../../../../translated_images/9.1_18_DeviceSharePointId.b9be8e7c3c6b0ab710a8f662e62a0ec0133a530f6877b6cea3c48acc8022fec5.zh.png)

1. 触发器中的动态内容输入现在已被引用到操作的 **Id** 参数中。接下来我们将更新一个高级参数。选择 **显示全部** 以查看高级参数。

    ![查看高级参数](../../../../../translated_images/9.1_19_AdvancedParameters.4bb8e0c11e7864625ad6c30ab1b9021d367cd77374c56985df7b3d43845a1883.zh.png)

1. **按视图限制列** 参数将显示，默认设置为 **使用所有列（不限制）**。我们将更新此值为一个视图，以限制操作响应中返回的列。选择 **按视图限制列** 参数以查看视图列表。

    ![选择参数](../../../../../translated_images/9.1_20_LimitColumnsByView.4d30f532f1e1033323d39df5c9b8e803788ea785ed58de2efca2faa5df4b26fc.zh.png)

1. 选择 **所有项目** 视图。

    ![选择所有项目视图](../../../../../translated_images/9.1_21_SelectView.d180e83d5e62f5fb6994a7071d5e6ce8f88143d8cc833cb55b208c6fee41bc02.zh.png)

1. 选择 _获取设备_ 操作下方的 **加号 + 图标** 以插入新操作。

    ![添加新操作](../../../../../translated_images/9.1_22_AddAnAction.904b79142347fe927168036ade55d842fa088deef53710944272c681421e0e84.zh.png)

1. 在搜索字段中输入以下内容，

    ```text
    send an email
    ```

    搜索结果中将显示一系列操作。选择 **Office 365 Outlook连接器** 中的 **发送电子邮件 (V2)** 操作。

    ![发送电子邮件操作](../../../../../translated_images/9.1_23_SendAnEmail.f1019365131658b0e71b5b58b57d7d8b3f3a0c670ddb3cca0838bf0b4f8cd354.zh.png)

1. 接下来我们需要为连接器操作创建一个连接。选择 **登录**。

    ![创建连接](../../../../../translated_images/9.1_24_CreateConnection.9e968ad4de9d13d81e95779c4fa60809fd40de5f65dbd014f1dc39663c935806.zh.png)

1. 选择您已登录的用户账户。

    ![选择用户账户](../../../../../translated_images/9.1_25_SelectUserAccount.f3c96ac1a377c4b42a6301ba38c21469eb7bd3f48633f04200f1610902f8bdbe.zh.png)

1. 选择 **允许访问**。连接现已创建。

    ![选择允许访问](../../../../../translated_images/9.1_26_AllowAccess.1abcaea31b9846279cafafd7160baea6bec60cdfac8224df7082ceee3ef22a26.zh.png)

1. 将操作重命名为以下内容，

    ```text
    Send an email to manager
    ```

    接下来定义操作的输入参数。

    对于 **收件人** 输入参数，选择您自己。通常这会是您的经理，或者我们会使用另一个操作根据您的Entra ID配置文件获取您的经理，但在本课程中，请选择您自己。

    对于 **主题** 输入参数，输入以下内容，

    ```text
    Request type: new device
    ```

    对于 **正文** 输入参数，输入以下内容，

    ```text
    Hi,

    New device requested from

    Manufacturer:
    Model:
    Link to item in SharePoint
    Additional comments from:

    This is an automated email from Contoso Helpdesk Copilot
    ```

    ![重命名操作并配置输入](../../../../../translated_images/9.1_27_RenameAndConfigureParameters.c3d29a3481fb5c0240cca85db4119387e6b750546ed12e2af4a9ac62d7454f89.zh.png)

1. 接下来，我们将更新 **正文** 输入参数，引用来自 **触发器** 或 **获取项目** 操作的动态内容输入。在第二行后输入一个空格，我们将插入触发器输入中的用户名称 **User**。

    选择右侧的 **闪电图标** 或 **fx图标**。

    ![添加 User 输入作为动态内容](../../../../../translated_images/9.1_28_AddUserInput.f38d3df648faef75f1985bdcc23db16e197ccb1ddc015210c43bbb2569fcf654.zh.png)

1. 在弹出窗的 **动态内容** 选项卡中，选择触发器中的 **User** 输入。

    选择 **添加** 将动态内容 **User** 输入添加到操作的 **正文** 参数中。

    ![选择 User 输入](../../../../../translated_images/9.1_29_SelectUserInput.4efc79f52d74fa7ae13132ea13f7d51b3f4aab6413afc41a8354c5e59852b9fc.zh.png)
1. 触发器中的动态内容输入现在已引用到操作的 **Body** 参数中。我们将在电子邮件正文的剩余行中重复相同的操作。

    ![用户输入已添加](../../../../../translated_images/9.1_30_UserInputAdded.905ec0489e4f1bbe7cc071826050834aa1e5acf53f8a65ad59532ea13b81c607.zh.png)

1. 点击 `Manufacturer:` 旁边的空白处。选择右侧的 **闪电图标** 或 **fx 图标**。

    在弹出窗的 **动态内容** 选项卡中，在搜索字段中输入以下内容，

    ```text
    manufacturer
    ```

    从触发器中选择 **Manufacturer value** 输入并选择 **添加**。

    ![添加 Manufacturer value 输入作为动态内容](../../../../../translated_images/9.1_31_ManufacturerValueAdded.db2cf35a35a20590d80d7f0191d771a045bf55e40ce98982d0e099588e260712.zh.png)

1. 点击 `Model:` 旁边的空白处。选择右侧的 **闪电图标** 或 **fx 图标**。

    在弹出窗的 **动态内容** 选项卡中，在搜索字段中输入以下内容，

    ```text
    model
    ```

    从 **Get item** 操作中选择 **Model** 输入并选择 **添加**。

    ![添加 Model 输入作为动态内容](../../../../../translated_images/9.1_32_ModelAdded.ff9d858648ddb85fe70eaaafa6e23d0560500e7327ccb29ee56ecac0d8d36cab.zh.png)

1. 对于 `Link to item in SharePoint` 文本，我们将其更新为电子邮件正文中的超链接。在行的开头点击，并选择右侧的 **闪电图标** 或 **fx 图标**。

    ![添加动态内容](../../../../../translated_images/9.1_33_AddDynamicContent.c662d682377af82adc52de18e05baf9b6aa5a972882dcf6274f3979f14641627.zh.png)

1. 在 HTML 锚点标签后点击，并选择右侧的 **闪电图标** 或 **fx 图标**。

    在弹出窗的 **动态内容** 选项卡中，在搜索字段中输入以下内容，

    ```text
    link to item
    ```

    从 **Get item** 操作中选择 **Link to item** 输入并选择 **添加**。

    ![添加 Link to item 作为动态内容](../../../../../translated_images/9.1_34_AddLinkToItem.6827bd3bad484f7382d060435bb0ef45e9bb1c3ad4774529559bb4c5f9bbca8c.zh.png)

1. 我们需要通过选择 **&lt;/&gt;** 图标切换到 HTML 编辑器。

    ![添加用户输入](../../../../../translated_images/9.1_35_ToggleCodeView.ae3a9caf213f2c6366487e10092ad1fad3494f110936219258d842c23e7f46d9.zh.png)

1. HTML 编辑器现在已启用。在 `Link to item in SharePoint` 文本之前点击，添加一个 HTML 锚点标签以创建超链接。复制并粘贴以下内容。

    ```text
    <a href="
    ```

    ![HTML 标签](../../../../../translated_images/9.1_36_AddHTMLTag.146220ae5c33eaf9915c393c37d62b9d4b258413e9f4dc42a1ab005437669443.zh.png)

1. **Link to item** 的动态内容输入现在已引用到 **Body** 参数中。在 **Link to item** 输入后点击，复制并粘贴以下内容。

    ```text
    ">
    ```

    ![HTML 标签](../../../../../translated_images/9.1_37_AddHTMLTag.48f73b302f6a84bb6a51e0666fd30baf1f8d9d906947d44dc4095ededed18a2d.zh.png)

1. 在 `Link to item in SharePoint` 文本后点击，关闭 HTML 锚点标签。复制并粘贴以下内容。

    ```text
    </a>
    ```

    ![HTML 标签](../../../../../translated_images/9.1_38_AddHTMLTag.47d2f0521e6aba9d609bfe65d86ebae5786e4ad5465fefb7ae0370db6e924c96.zh.png)

1. 选择 **&lt;/&gt;** 图标以切换代码视图。

    ![禁用代码视图](../../../../../translated_images/9.1_39_ToggleCodeView.88606eb37d702a686904b2dd8943fcf144cec462b37ee781e8ee0415e62bd951.zh.png)

1. 然后再次选择 **&lt;/&gt;** 图标以切换回代码视图。

    ![切换回代码视图](../../../../../translated_images/9.1_40_ToggleCodeViewAgain.32da9b9804adbbfaf8d85bdaa6fa51d2ae5fc1fbb97f75084813972c66d0c4d9.zh.png)

1. 注意到有几个额外的字符 `&lt;br&gt;`。删除这些字符。

    ![删除字符](../../../../../translated_images/9.1_41_DeleteCharacters.f1ef3830b186c2cd9974ea05e336c83c0706d72ab1010d06283716dc4e982875.zh.png)

1. 我们现在已经完成了在电子邮件正文中添加超链接的操作 😎 选择 **&lt;/&gt;** 图标以切换代码视图。

    ![HTML 标签整理完成](../../../../../translated_images/9.1_42_HTMLTagTidiedUp.1b27fa2c4dc65c3f1a7151abcf6e388f64cb83745b10cd22769c1f9af3421fc6.zh.png)

1. 在冒号字符之前的 `Additional comments from` 文本后点击，并选择右侧的 **闪电图标** 或 **fx 图标**。

    ![添加用户参数](../../../../../translated_images/9.1_43_AddUserInput.6f0d26739c1b9039383aa37cc46fa1149a269bd4268fb54b897d144afc49c515.zh.png)

1. 在弹出窗的 **动态内容** 选项卡中，在搜索字段中输入以下内容，

    ```text
    user
    ```

    从触发器中选择 **User** 参数并选择 **添加**。

    ![添加用户参数作为动态内容](../../../../../translated_images/9.1_44_AddUserDynamicContent.bb7c76e92650001207712b3447d3275d584f3ebf739034369869c3facf38eacf.zh.png)

1. 我们现在将插入一个表达式，该表达式将在用户在 **Ask an adaptive card** 节点中提供了额外评论时显示其值，否则如果用户未提供任何评论，则显示 "None"。

    在冒号后点击，并选择右侧的 **闪电图标** 或 **fx 图标**。

    ![添加表达式](../../../../../translated_images/9.1_45_AddExpression.c4c92dc4a56fab75c78ec2c5087682521e562264c1710c8dfaa24134adc3a112.zh.png)

1. 在弹出窗的 **函数** 选项卡和上方的表达式字段中，输入以下内容，

    ```text
    if(empty())
    ```

    此表达式使用 `if` 函数进行 if-else 语句。

    接下来使用的函数是 `empty`，它检查字符串参数中是否存在值。要引用的字符串参数是触发器中的 `AdditionalComments` 输入参数值。

    ![如果为空](../../../../../translated_images/9.1_46_IfEmptyFunctions.95d21ad01f6f7c290cb8d5a57ccbca9c9532df7ce57f800554dea541d503ddc6.zh.png)

1. 接下来，点击 `empty` 函数后的括号内。我们将插入触发器中的 `AdditionalComments` 输入参数。

    选择 **动态内容** 选项卡。在搜索字段中输入以下内容，

    ```text
    Additional
    ```

    向下滚动窗格并选择触发器中的 **AdditionalComments** 输入。该参数现在将作为表达式中的字符串参数添加。

    ![添加 AdditionalComments 作为动态内容](../../../../../translated_images/9.1_47_AdditionalCommentsDynamicContent.f9632f09779888c18a58df8e97ef677ed885b0eaa88c252b13b22c0e4c67495b.zh.png)

1. 接下来我们将定义 **_true_** 逻辑，如果 `AdditionalComments` 字符串参数为空，则我们希望显示字符串（文本）`None`。

    在括号封闭字符串参数后，输入以下内容，

    ```text
    , 'None',
    ```

    ![True 逻辑](../../../../../translated_images/9.1_48_None.31978299f29e07ef3257eedd5dcee09c8675f8b3f61aea8102900118e0b6ca70.zh.png)

1. 最后我们将定义 **_false_** 逻辑，如果 `AdditionalComments` 字符串参数不为空，则我们希望显示触发器中 **AdditionalComments** 输入参数的值。

    > 提醒：此值将来自 **Request device** 主题中 **Ask with adaptive card** 节点的额外评论字段。

    在 **_true_** 逻辑后的逗号后，选择 **动态内容** 选项卡。在搜索字段中输入以下内容，

    ```text
    Additional
    ```

    向下滚动窗格并选择触发器中的 **AdditionalComments** 输入。该参数现在将作为表达式中的字符串参数添加。

    现在通过选择 **添加** 将其添加到我们的 **Body** 参数中。

    ![False 逻辑](../../../../../translated_images/9.1_49_AdditionalCommentsDynamicContent.d42c7fc29f65d901bb26dcbc13408c387633ea185cdd79c35d6439231b7363d5.zh.png)

1. 太棒了，我们的表达式完成了！表达式现在已添加到 **Body** 参数中。最后，将最后一行格式化为斜体。

    ![斜体](../../../../../translated_images/9.1_50_Italics.a0c01aa33ef4e83167e1fbc21c1d833f95addd60c8f531411cf9c58a96a31b02.zh.png)

1. 我们现在将更新 **Respond to the agent** 操作，以将 **Get item** 操作中的 **Model value** 参数值发送回代理。

    按住鼠标左键并在设计器中向上移动以查看 **Respond to the agent** 操作。

    选择 **Respond to the agent** 操作并选择 **Text** 输出作为类型。

    ![选择文本输出](../../../../../translated_images/9.1_51_RespondToTheAgentAction.4c682a440e19a0fcd6d6f51ef9cdbfe76f482a39d635b8905d9b0cbbf33d945f.zh.png)

1. 输入以下内容作为输出的名称。

    ```text
    ModelValue
    ```

    ![ModelValue 输出](../../../../../translated_images/9.1_52_ModelValueInput.20609429eb323281051607b090319adc5315c0245c7d61158eb119714fe4318f.zh.png)

1. 选择值字段并选择右侧的 **闪电图标** 或 **fx 图标**。

    ![插入表达式](../../../../../translated_images/9.1_53_InsertDynamicContent.108ba565696f9f52d742323e0f4c46c308f322ac4bd67802e3196430155c7443.zh.png)

1. 在弹出窗的 **动态内容** 选项卡中，在搜索字段中输入以下内容，

    ```text
    model
    ```

    从 **Get item** 操作中选择 **Model** 参数并选择 **添加**。

    ![添加 Model 参数作为动态内容](../../../../../translated_images/9.1_54_ModelParameter.f231fd0ec089ac6b9ac1b7fd2e6a60a35b08484ed10b0098cff6b3ce0c7760cb.zh.png)

1. **Model** 参数现在是文本输出的值。选择 **保存草稿** 以保存我们的代理流程。

    我们现在完成了代理流程 👏🏻

    ![选择保存草稿](../../../../../translated_images/9.1_55_SaveDraftAgentFlow.5ab97895a901458362881fc9ee576762bdb0883b37a6cbd7a631ddc2750705af.zh.png)

1. 在发布之前，让我们对代理流程进行最后一次更新。选择 **概览** 选项卡并选择 **编辑**。

    ![选择编辑](../../../../../translated_images/9.1_56_EditAgentFlowDetails.023e8149284b9ae79dd3d95f574ff90bbcc1cc4a9fff4be56664ccbe0698f310.zh.png)

1. 对于 **流程名称**，复制并粘贴以下内容。

    ```text
    Send device request email
    ```

    对于 **描述**，选择 **刷新图标**，以使用 AI 根据代理流程中的触发器和操作自动生成描述。

    选择 **保存** 以保存代理流程的更新名称和描述。

    ![重命名、添加描述并保存详细信息](../../../../../translated_images/9.1_57_RenameAndDescription.57a190396550bf998d62c49ca359b66211ae50042ac5f8739b32f8b9bc292607.zh.png)

1. 选择 **设计器** 选项卡并选择 **发布**，以发布代理流程，使其可以作为 **Request device** 主题中的节点添加。

    ![发布](../../../../../translated_images/9.1_58_Publish.8f43271718c662deee7afea6fb283f64005b277b3a62086e6d91cc0c3ac4f79c.zh.png)

1. 不久后将出现确认消息，确认代理流程已发布。

    ![确认消息](../../../../../translated_images/9.1_59_Confirmation.d406bde76c31b27f794d5742c992b8c84283f46b2e54524f1e500d0688a33716.zh.png)

### 9.2 将代理流程添加到主题

现在让我们将代理流程添加到 **Request device** 主题中。

1. 在左侧菜单中选择 **Agents**，然后选择 **Contoso Helpdesk Agent**。

    ![选择 Agents](../../../../../translated_images/9.2_01_SelectAgent.b8a6fd3a8970d6b0c8e78bf0a5411257206612d53acdf9b44f78b2c9c2fe91fc.zh.png)

1. 选择 **Topics** 选项卡。

    ![选择 Topics 选项卡](../../../../../translated_images/9.2_02_SelectTopics.3e8618aba5f4a1ddf3dee726b6da9a66ed89d04a2e8ca36b52112a6675c2885c.zh.png)

1. 选择 **Request device** 主题。

    ![选择 Request device 主题](../../../../../translated_images/9.2_03_SelectRequestDevice.df10472702258708b3d069e718e695b9fcabc61d42901d524dc302a03b3fa4a9.zh.png)

1. 向下滚动到 **Ask with adaptive card** 节点并添加一个新节点。

    选择 **添加工具**，在弹出窗的 **基本工具** 选项卡中，选择我们最近创建并发布的 **Send device request email** 代理流程。

    ![选择代理流程](../../../../../translated_images/9.2_04_SelectAgentFlow.15deca87db95fff1c9d904855d237d22a72c260adf3343d9e78695f07c42a8e0.zh.png)

1. 对于代理流程的触发器输入，我们需要选择 **Ask with adaptive card** 节点定义的变量输出。

    选择 **DeviceSharePointId** 输入的 **省略号 (...) 图标**。

    ![选择变量](../../../../../translated_images/9.2_05_SelectVariable.8fe53cbc0f950f732b9e9002b21d8762ddfe74fb601d61c2a5119e32383450a2.zh.png)

1. 选择 **deviceSelectionId** 变量，这是 **Ask with adaptive card** 节点中定义的输出之一。

    ![选择 deviceSelectionId 变量](../../../../../translated_images/9.2_06_SelectdeviceSelectionIdVariable.67c0091e0de9442d3cffbfe3b2cace8d76be37ea67815ddfc99af03ae4b37391.zh.png)

1. 接下来，选择 **User** 输入的 **省略号 (...) 图标**。

    ![选择变量](../../../../../translated_images/9.2_07_SelectVariable.bf851128bec5e0255c6cf361a837ce9701d0afac84ed3d5b89665d111a098386.zh.png)

1. 在弹出变量窗的 **系统** 选项卡中选择 **User.DisplayName**。此变量存储与代理交互的内部用户的显示名称。

    ![选择 User.DisplayName 系统变量](../../../../../translated_images/9.2_08_SelectUser.DisplayNameVariable.926a2a7560402fbd7b224e2bf0ff11df9e5612803b7ce51e36f58201a09bbfd7.zh.png)

1. 接下来，选择 **大于图标** 查看 **高级输入**，以展开并查看 **AdditionalComments** 输入。

    ![展开高级输入](../../../../../translated_images/9.2_09_ExpandAdvancedInputs.bded22f83fe4eb21237daa254725e12a81ea75be34bcb0e8ab322037a4e6f418.zh.png)

1. 选择 AdditionalComments 输入的 **省略号 (...) 图标**。

    ![选择变量](../../../../../translated_images/9.2_10_SelectVariable.86286cc06323e65fb3874b9fd0ea62d140b9e9b9a2b5116d667192a6dca3815f.zh.png)

1. 选择弹出变量窗的 **公式** 选项卡，并选择展开图标，因为我们将使用 Power Fx 表达式。

    ![公式选项卡](../../../../../translated_images/9.2_11_SelectFormulaAndExpandIcon.3fcd07bfccc4f0779a5d26313b571e60be792da7fd28e937b3e888f8aaeda7e0.zh.png)

1. 类似于代理流程中使用 _if_ 函数进行条件检查的表达式，但这次
    - 使用 Power Fx 函数，
    - 并插入空值或来自 **Ask with adaptive card** 节点的 `commentsId` 输出变量的值。

    在 Power Fx 字段中输入以下函数，

    ```text
    If(IsBlank())
    ```

此表达式使用 `If` 函数来实现一个条件语句。

接下来使用的函数是 `IsBlank`，它用于检查字符串参数中是否存在值。要引用的字符串参数是 **Ask with adaptive card** 节点的 `commentsId` 输出变量。

![If 和 IsBlank 函数](../../../../../translated_images/9.2_12_IfIsBlank.07f7516c7e1f7579239a8b3833d64a14eb88dc245cae714b3e07d6298e907d51.zh.png)

1. 接下来，点击 `IsBlank` 函数后面的 **括号内**。我们将插入 **Ask with adaptive card** 节点的 `commentsId` 输出变量。

   在括号内输入以下内容：

    ```text
    Topic.commentsId
    ```

   然后在括号后添加一个逗号。

   ![引用 commentsId 输出](../../../../../translated_images/9.2_13_Topic.commentsId.1a04dc190dac334ebf6c4dbc1b6df1aad2e4bbdeeb3ef960871e93614381f079.zh.png)

1. 接下来我们定义逻辑：

   - 当 **_true_** 时——如果 `Topic.commentsId` 字符串参数为空，则我们不插入任何值。
   - 当 **_false_** 时——如果 `Topic.commentsId` 字符串参数不为空，则插入 commentsId 变量的值。

   在括号封闭字符串参数后，输入以下内容：

    ```text
    "", Topic.commentsId)
    ```

   Power Fx 表达式应如下所示：

    ```text
    If(IsBlank(Topic.commentsId), "", Topic.commentsId)
    ```

   太棒了，我们的表达式完成了！🙌🏻 现在选择 **Insert** 来将代理流程的输入参数设置为 Power Fx 表达式。

   ![Power Fx 表达式](../../../../../translated_images/9.2_14_PowerFxExpression.80e76ea59bdb8f131d26edf2657923f4af9000768d44b06c0947115fd218698e.zh.png)

1. **保存**主题。

### 9.3 使用多个节点更新“请求设备”主题以优化用户体验

接下来我们将添加两个节点：

- **发送消息**——这将作为确认消息，引用所选设备并确认请求已提交。
- **主题管理**——关闭对话，将重定向到 **结束对话** 节点。

让我们开始吧！

1. 选择代理流程节点下方的 **加号 + 图标**，然后选择 **发送消息** 节点。

   ![添加发送消息节点](../../../../../translated_images/9.3_01_AddSendAMessageNode.ac4111729a2602f8301ecffbcb263d692ecb43478aa9da63cae0dd58160f56c8.zh.png)

1. 在消息字段中输入以下内容：

    ```text
    Thanks
    ```

   然后选择 **插入变量**，我们将引用用户的姓名。

   ![插入变量](../../../../../translated_images/9.3_02_InsertVariable.c5c9ebce61d1f442413d05f4437f74ee1d9c3a8c2ab696244937c56b5171f310.zh.png)

1. 选择 **系统** 标签页，在搜索字段中搜索 `User`。选择 **User.DisplayName** 变量。

   ![选择系统变量](../../../../../translated_images/9.3_03_SelectSystemVariable.47cfac2f3a727dbaf32ae960cbafe43ce9ed00f73edf01ac6d48e5b2b167e5fc.zh.png)

1. 在消息字段中输入以下内容：

    ```text
    . Your selected device,
    ```

   然后选择 **插入变量**，这次在 **自定义** 标签页中选择 **ModelValue** 变量。

   然后输入以下内容以完成消息：

    ```text
    , has been submitted and will be reviewed by your manager.
    ```

   消息应如下所示：

   ![发送消息](../../../../../translated_images/9.3_04_SendAMessage.3f6c4b5e53da9c7f9fcf9d0c453a9b65e44e35ea4c1124947fb638d0b682d96d.zh.png)

1. 最后，选择 **发送消息** 节点下方的 **加号 + 图标**，选择 **主题管理**，然后选择 **转到另一个主题** 并选择 **结束对话**。

   ![主题管理](../../../../../translated_images/9.3_05_EndOfConversation.3c6c96d03b29a4d0904dea09d96c62d6ad450fe60dd8d6b2fe9d31681d6cb147.zh.png)

1. **保存**主题。

   ![保存](../../../../../translated_images/9.3_06_SaveTopic.8c9201fabce9f41af03d9f1beb9ce321e4ee9880a94edabe58b592bffebda80a.zh.png)

### 9.4 使用多个场景测试代理

太棒了！！！😁 我们现在可以测试我们的代理了。

#### 9.4.1 请求设备并在自适应卡中输入评论

1. **刷新**测试面板，选择 **活动地图** 图标，并输入以下内容作为对代理的消息：

    ```text
    I need a laptop
    ```

   ![测试代理](../../../../../translated_images/9.4_01_TestAgent_RequestDevice_Yes.e73a5076dcd7179901dc0536624a039e372e405a6aac7ab89a632ce81bacdc2e.zh.png)

1. 代理触发 **可用设备** 并响应可用设备列表。我们将输入以下内容作为是否请求设备问题的答案：

    ```text
    Yes
    ```

   ![是](../../../../../translated_images/9.4_02_RequestDevice_Yes.25c34743bc168fde33f91743316e7bad87ee0e47150c93e9b82c4662404dcaba.zh.png)

1. 注意代理根据指令调用了 **请求设备**，并且自适应卡现在显示在代理消息中。

   选择 **Surface Laptop 15** 设备并添加以下内容作为评论：

    ```text
    I need 16GB of RAM please
    ```

   ![选择设备并输入评论](../../../../../translated_images/9.4_03_SelectDeviceAndEnterComment.570ea590309bf97edc40c6f7b53dbdc1174365860d8e8a4c32cfb7f1837621c2.zh.png)

1. 向下滚动直到看到 **提交请求** 按钮，然后选择它以将自适应卡提交给代理。

   ![提交请求](../../../../../translated_images/9.4_04_SubmitRequest.ce3f4f44b90243a18dbfb401548b9b3cefd3ea17d8293a1bc3377323e3449da9.zh.png)

1. 选择 **允许**，让代理使用您的凭据进行两个连接器操作的连接认证。

   ![允许](../../../../../translated_images/9.4_05_SelectAllow.f7b5bda068fbaee83dcb1cff03a52c946fb4d879137c55f4e5f9eb3953985e0e.zh.png)

1. 代理随后会显示确认消息，其中包括所选的型号，然后重定向到 **结束对话** 主题。太棒了！

   ![请求已提交](../../../../../translated_images/9.4_06_RequestSubmitted.1d4d2e9afbc222a5ba79a4c254e7b2364d6eafc1a200ad6ac0aa142f9f10642d.zh.png)

1. 选择 **是** 以验证其余的 **结束对话** 主题。

   ![选择是](../../../../../translated_images/9.4_07_RedirectNode.e7b1390e4eafe8c2c815fc8ce7fdda56617d9fbeccb0d59423ad2899a8e5f897.zh.png)

1. 接下来，通过在评分卡中选择任意星级来评价体验。

   代理随后会进入 **结束对话** 主题中的最终 **问题** 节点。选择 **否**。

   ![结束对话主题](../../../../../translated_images/9.4_08_EndOfConversation.b35507f7f561633c0cb3b6c15dc007ae4197a72d58afd8ae616bea439bd6e148.zh.png)

1. 主题随后完成，测试面板中会显示最终消息。

   ![结束对话主题](../../../../../translated_images/9.4_09_EndOfConversation.438891b82e322b8a2648533200fbcd01c660ab049223b0920cdd0fbfcdeeb888.zh.png)

1. 检查您的电子邮件账户收件箱，查看代理流程发送给经理的电子邮件。您可以看到所选设备的详细信息以及在自适应卡中输入的备注。

   ![收到邮件](../../../../../translated_images/9.4_10_ReviewEmailMessageWithComment.b0138b0bb9d08aacbd8bbb02fdb633a6796b4131cf8d83212adeabaa1ce04a18.zh.png)

1. 点击超链接，浏览器应加载设备的 SharePoint 项目。太棒了！

   ![点击邮件中的超链接](../../../../../translated_images/9.4_11_SelectLinkInEmail.2179f17165b61ba1e8aee68e8de4c752d64b0780ad86e0fe9054580d9c24e208.zh.png)

#### 9.4.2 请求设备但未在自适应卡中输入评论

现在我们测试未输入评论的场景。

1. 重复以下步骤：

   - **刷新**测试面板并选择 **活动地图** 图标
   - 输入消息 `I need a laptop`
   - 对请求设备问题回答 `Yes`

   ![请求设备](../../../../../translated_images/9.4_12_RequestDevice_Yes.1e369b8a52547fade4b84a4e36b399ee0692c6edbaa778ba90fe9c15cae75c5c.zh.png)

1. 这次选择 **Surface Laptop 13** 作为设备，并且不输入评论。

   ![选择设备](../../../../../translated_images/9.4_13_SelectDevice.d9ad15d17de3f06fd948bd529f116f7c05bedf79c016180d8a1dd7e378322b0e.zh.png)

1. 通过选择 **提交请求** 按钮 **提交** 请求。

   ![提交请求](../../../../../translated_images/9.4_14_SubmitRequest.a783ad8460bfb4485cfd2e97db2c065d9d6bf803279e3bd1569fe3e93548a578.zh.png)

1. 这次您收到的电子邮件中，评论将显示为 **无**。

   ![收到邮件](../../../../../translated_images/9.4_15_ReviewEmailMessage.137f35152c9da4b4a02bebec5f0cc9e55cfa25679770ace003aa19482ed0f3eb.zh.png)

#### 9.4.3 不请求设备

最后我们测试不请求设备的场景，根据代理指令应触发 **再见** 主题。

1. 重复以下步骤：

   - **刷新**测试面板并选择 **活动地图** 图标
   - 输入消息 `I need a laptop`
   - 这次对请求设备问题回答 `No`

   ![测试代理](../../../../../translated_images/9.4_16_TestAgent_RequestDevice_No.85f205968f1d4083f20cc890a707748f8e06c01a19536cd299a13bdde2350de7.zh.png)

1. 代理触发了 **再见** 主题，并询问主题中定义的问题。

   ![触发再见主题](../../../../../translated_images/9.4_17_Goodbye.05ee598a987237e02866647a9699b0efa7ac58d1f448497f956af2ee815cb961.zh.png)

## ✅ 任务完成

恭喜！👏🏻 您已经学会了如何构建代理流程并将其添加到现有的 **请求设备** 主题中，以及如何将代理重定向到另一个主题。

这是 **实验室 09 - 添加代理流程以实现自动化并增强主题功能** 的结束，点击以下链接进入下一课。在接下来的实验室中，我们将扩展本实验室的用例。

⏭️ [进入 **添加事件触发器 - 启用自主代理功能** 课程](../10-add-event-triggers/README.md)

## 📚 战术资源

🔗 [介绍代理流程：通过 AI 优先工作流实现自动化转型](https://www.microsoft.com/microsoft-copilot/blog/copilot-studio/introducing-agent-flows-transforming-automation-with-ai-first-workflows/)

🔗 [代理流程概述](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview?WT.mc_id=power-172621-ebenitez)

🔗 [在代理中使用代理流程](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-172621-ebenitez)

🔗 [参考指南中的函数列表](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez)

📺 [Copilot Studio 中的代理流程](https://www.youtube.com/watch?v=VJTKyk3Pr7s)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/09-add-an-agent-flow" alt="分析" />

---

**免责声明**：  
本文档使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。原始语言的文档应被视为权威来源。对于重要信息，建议使用专业人工翻译。我们不对因使用此翻译而产生的任何误解或误读承担责任。