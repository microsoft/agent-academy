<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6f05e50f132514dcd264bd48fae3f1ef",
  "translation_date": "2025-10-18T03:00:00+00:00",
  "source_file": "docs/recruit/12-understanding-licensing/README.md",
  "language_code": "zh"
}
-->
# 🚨 任务12：了解许可

## 🕵️‍♂️ 代号：`行动了解你的费用`

> **⏱️ 行动时间窗口：** `约15分钟`

## 🎯 任务简报

欢迎，招募者。在你将代理部署到现场之前，你需要了解**如何衡量使用情况、许可和计费**。本任务将分解基于消息的计费模型，解释 Microsoft 365 Copilot 许可证的内容，并教你如何使用估算工具进行规划。

---

## 🎯 目标：掌握基于消息的模型

Copilot Studio 不按用户或功能收费——它根据**你的代理消耗的消息数量**进行计费。“消息”是指你的代理与用户（或系统）之间的交互。

- 💬 每次用户与代理的交互至少计为**1条消息**
- 🔄 复杂交互（如基础数据、生成式AI或流程）会消耗**多条消息**
- 💼 你可以通过**预付包**或**按需付费（PAYGO）**支付消息费用

---

## 许可选项

### 1. **Copilot Studio 消息包**

- 预付选项：**每月25,000条消息，费用$200**
- 适合可预测的使用情况——容量在租户内共享

### 2. **按需付费（PAYGO）**

- 后付选项：**每条消息$0.01**
- 无需预付承诺；使用量在月末通过 Azure 计费

---

## 如果你拥有 M365 Copilot 许可证怎么办？

如果你的团队拥有**Microsoft 365 Copilot 许可证**，你的代理可以在关键场景下**无需额外计费运行**：

- 在 Teams 和 Outlook 等应用中，经典回答、生成式响应、基于图表的消息和基本代理操作对已认证的 M365 Copilot 用户是**免收费**的  
- 但如果启用高级功能，例如自动触发器、超出基本操作的代理流程或使用外部渠道/API，这些**会消耗计费消息**

| 场景                                       | 是否额外计费消息                              |
|---------------------------------------------|----------------------------------------------|
| M365 Copilot 用户在 Teams 中向代理提问      | ❌ 不计费                                     |
| 代理调用外部 API 或流程                     | ✅ 计费（5 + 消息）                           |
| 代理使用自动触发器或基础数据                | ✅ 计费                                       |

---

## 🧮 精确规划：使用估算工具

在启动代理之前，使用我们的**Copilot Studio 使用估算工具**在现实场景下预测消息消耗：

[👉 使用 Copilot Studio 使用估算工具](https://aka.ms/mcs-estimator){ .md-button .md-button--primary }

它可以帮助你：

- 🔢 指定你的**用户数量**
- ⚙️ 选择**代理功能**（基础数据、操作、流程、记忆）
- 📈 估算每月每个代理的**总消息量**
- 🧠 优化设计，避免计费意外

!!! tip
    ✅ 尽早运行——并在构建后再次运行——以比较预期与实际使用情况。

---

## 💼 示例场景

**环境**：IT 帮助台代理，启用基础数据 + 一个 Power Automate 流程  
**会话**：每次会话5次用户交互  
**假设**：基础数据（10条消息）+ 操作（5条消息）+ 5次生成式响应（10条消息）  
**总计**：每次会话约25条消息  
**规模**：每月500次会话 = 约12,500条消息（½ 消息包）

---

## 🧠 成本控制专业提示

- 通过 Power Platform 管理中心监控使用情况
- 在开发/测试环境中开始，之后再上线
- 禁用未使用的操作和连接器
- 尽可能为内部使用启用**Microsoft 365 Copilot 许可证**
- 当使用规模变得可预测时使用消息包
- 使用**Copilot Studio 使用估算工具**预测使用量

---

## 🏁 任务完成

你现在了解了：

- 如何计算和计费使用量
- M365 Copilot 何时覆盖使用量——以及何时不覆盖
- 如何预测和管理你的消息消耗

🎓 有了这些知识，你可以高效且智能地部署你的代理。

---

## 📚 战术资源

了解更多关于 Copilot Studio 的许可和计费信息

- 📄 [Copilot Studio 许可和消息费率](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing?WT.mc_id=power-170631-apdunnam)
- 📘 [Power Platform 许可指南（2025年7月）](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp//microsoft/bade/documents/products-and-services/en-us/bizapps/Power-Platform-Licensing-Guide-July-2025.pdf?WT.mc_id=power-170631-apdunnam)
- 📊 [消息管理和容量监控](https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity?WT.mc_id=power-170631-apdunnam)

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/12-understanding-licensing" alt="分析" />

---

**免责声明**：  
本文档使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。应以原始语言的文档作为权威来源。对于重要信息，建议使用专业人工翻译。我们对因使用此翻译而产生的任何误解或误读不承担责任。