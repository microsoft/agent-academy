<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6f05e50f132514dcd264bd48fae3f1ef",
  "translation_date": "2025-10-22T01:01:12+00:00",
  "source_file": "docs/recruit/12-understanding-licensing/README.md",
  "language_code": "hk"
}
-->
# 🚨 任務 12：了解授權

## 🕵️‍♂️ 行動代號：`了解你的費用`

> **⏱️ 行動時間窗口：** `~15 分鐘`

## 🎯 任務簡介

歡迎，招募者。在你派遣代理進入現場之前，你需要了解**使用量如何計算、授權及收費**。此任務將拆解基於訊息的收費模式，解釋 Microsoft 365 Copilot 授權包含的內容，並教你如何使用估算工具進行規劃。

---

## 🎯 目標：掌握基於訊息的模式

Copilot Studio 不按使用者或功能收費——它根據**代理消耗的訊息數量**進行計費。一個“訊息”是代理與使用者（或系統）之間的互動。

- 💬 每次使用者與代理的互動至少計算為**1個訊息**
- 🔄 複雜的互動（例如基礎設置、生成式 AI 或流程）會消耗**多個訊息**
- 💼 你可以通過**預付套餐**或**按使用付費（PAYGO）**支付訊息費用

---

## 授權選項

### 1. **Copilot Studio 訊息套餐**

- 預付選項：**每月 25,000 個訊息，費用 $200**
- 適合可預測的使用量——容量在租戶內共享

### 2. **按使用付費（PAYGO）**

- 後付選項：**每個訊息 $0.01**
- 無需提前承諾；使用量在月底通過 Azure 計費

---

## 如果你擁有 M365 Copilot 授權？

如果你的團隊擁有**Microsoft 365 Copilot 授權**，你的代理**可以在關鍵場景中免除額外費用**：

- 經典回答、生成式回應、基於圖表的訊息以及基本代理操作對於已驗證的 M365 Copilot 使用者在 Teams 和 Outlook 等應用中是**免收費**的  
- 但：如果啟用高級功能，例如自主觸發器、超出基本操作的代理流程，或使用外部渠道/API，這些**會消耗可計費的訊息**

| 場景                                       | 是否額外計費訊息？                           |
|-------------------------------------------|----------------------------------------------|
| M365 Copilot 使用者在 Teams 中詢問代理     | ❌ 不計費                                     |
| 代理調用外部 API 或流程                   | ✅ 計費（5 + 訊息）                          |
| 代理使用自主觸發器或基礎設置              | ✅ 計費                                       |

---

## 🧮 精準規劃：使用估算工具

在啟動代理之前，使用我們的**Copilot Studio 使用量估算工具**來預測在現實場景下的訊息消耗：

[👉 使用 Copilot Studio 使用量估算工具](https://aka.ms/mcs-estimator){ .md-button .md-button--primary }

它可以幫助你：

- 🔢 指定你的**使用者數量**
- ⚙️ 選擇**代理功能**（基礎設置、操作、流程、記憶）
- 📈 估算每月每個代理的**總訊息量**
- 🧠 優化設計，避免收費驚喜

!!! tip
    ✅ 早期使用——並在建置後再次使用——比較預期與實際使用量。

---

## 💼 範例場景

**環境**：IT 幫助台代理，使用基礎設置 + 一個 Power Automate 流程  
**會話**：每次會話 5 次使用者互動  
**假設**：基礎設置（10 個訊息）+ 操作（5 個訊息）+ 5 次生成式回應（10 個訊息）  
**總計**：每次會話約 25 個訊息  
**規模**：每月 500 次會話 = 約 12,500 個訊息（½ 訊息套餐）

---

## 🧠 成本控制專業提示

- 通過 Power Platform 管理中心監控使用量
- 在開發/測試環境中開始，然後再正式上線
- 禁用未使用的操作和連接器
- 儘可能為內部使用啟用**Microsoft 365 Copilot 授權**
- 當使用量變得可預測時使用訊息套餐
- 使用**Copilot Studio 使用量估算工具**來預測使用量

---

## 🏁 任務完成

你現在了解：

- 使用量如何計算和收費
- M365 Copilot 何時涵蓋使用量——以及何時不涵蓋
- 如何預測和管理你的訊息消耗

🎓 擁有這些知識，你已準備好高效且聰明地部署你的代理

---

## 📚 策略資源

了解更多有關 Copilot Studio 的授權和收費資訊

- 📄 [Copilot Studio 授權與訊息費率](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing?WT.mc_id=power-170631-apdunnam)
- 📘 [Power Platform 授權指南（2025年7月）](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp//microsoft/bade/documents/products-and-services/en-us/bizapps/Power-Platform-Licensing-Guide-July-2025.pdf?WT.mc_id=power-170631-apdunnam)
- 📊 [訊息管理與容量監控](https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity?WT.mc_id=power-170631-apdunnam)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/12-understanding-licensing" alt="分析" />

---

**免責聲明**：  
此文件已使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於重要信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。