<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cd99a76bcb7372ac2771b6ae178b023d",
  "translation_date": "2025-10-22T19:19:59+00:00",
  "source_file": "docs/recruit/10-add-event-triggers/README.md",
  "language_code": "tw"
}
-->
# 🚨 任務 10：新增事件觸發器 - 啟用自主代理功能

## 🕵️‍♂️ 行動代號：`幽靈例行作業`

> **⏱️ 行動時間窗口：** `~45 分鐘`

🎥 **觀看操作指南**

[![事件觸發器影片縮圖](../../../../../translated_images/video-thumbnail.0d5b477d69adfe668fab9aa8ef5b199377b46788948b33b1969bf19c099b6469.tw.jpg)](https://www.youtube.com/watch?v=ZgwHL8PQ1nY "在 YouTube 上觀看操作指南")

## 🎯 任務簡介

是時候讓你的代理從對話助手升級為自主行動者了。你的任務是讓代理能夠在未被召喚的情況下行動——以精準和快速的方式回應來自數位領域的信號。

透過事件觸發器，你將訓練你的代理監控外部系統，例如 SharePoint、Teams 和 Outlook，並在接收到信號的瞬間執行智能操作。這項行動將你的代理轉變為完全運作的現場資產——沉默、迅速且隨時待命。

成功的關鍵在於打造能主動創造價值的代理，而不僅僅是回應需求。

## 🔎 目標

📖 本課程將涵蓋：

- 了解事件觸發器如何啟用自主代理行為
- 學習事件觸發器與主題觸發器的區別，包括觸發器工作流程和負載
- 探索常見的事件觸發器場景
- 了解事件驅動代理的身份驗證、安全性和發布考量
- 建立一個自主的 IT 幫助台代理，回應 SharePoint 事件並發送電子郵件確認

## 🤔 什麼是事件觸發器？

**事件觸發器**是一種機制，允許你的代理在不需要直接使用者輸入的情況下自主回應外部事件。可以將其視為讓你的代理“監視”特定事件，並在事件發生時自動採取行動。

與主題觸發器不同，主題觸發器需要使用者輸入內容以啟動對話，而事件觸發器則基於連接系統中的事件進行啟動。例如：

- 當在 SharePoint 或 OneDrive for Business 中創建新檔案時
- 當在 Dataverse 中創建新記錄時
- 當在 Planner 中完成任務時
- 當提交新的 Microsoft Form 回應時
- 當新增 Microsoft Teams 訊息時
- 基於定期排程（例如每日提醒）  
![新增觸發器](../../../../../translated_images/10_AddTriggerDialog.d665fde7e50d106d693110cd80e6c6b569bdad34ea985eb72fee7e0fccb3ef26.tw.png)

### 為什麼事件觸發器對自主代理至關重要

事件觸發器將你的代理從被動助手轉變為主動、自主的幫手：

1. **自主運作** - 你的代理可以全天候工作，無需人工干預，並在事件發生時立即回應。
    - *範例：* 當新成員加入團隊時自動歡迎。

1. **即時回應** - 不再等待使用者提問，代理能立即回應相關事件。
    - *範例：* 當 SharePoint 文件被修改時通知 IT 團隊。

1. **工作流程自動化** - 基於單一觸發事件串聯多個操作。
    - *範例：* 當創建新支援票證時，創建任務、通知管理者並更新追蹤儀表板。

1. **一致性流程** - 通過自動回應關鍵事件，確保重要步驟不被遺漏。
    - *範例：* 每位新員工自動獲得入職材料和訪問請求。

1. **數據驅動的行動** - 使用觸發事件中的信息做出智能決策並採取適當行動。
    - *範例：* 根據觸發負載中的優先級將緊急票證分配給高級員工。

## ⚙️ 事件觸發器如何運作？

事件觸發器通過三步工作流程運作，使你的代理能夠自主回應外部事件：

### 觸發器工作流程

1. **事件檢測** - 在連接系統（如 SharePoint、Teams、Outlook 等）中發生特定事件
1. **觸發器啟動** - 事件觸發器檢測到此事件並通過 Power Automate Cloud Flow 將負載發送給你的代理
1. **代理回應** - 你的代理接收到負載並執行你定義的指令

### 事件觸發器與主題觸發器的區別

了解這兩種觸發器類型的區別至關重要：

| **事件觸發器** | **主題觸發器** |
|-------------------|-------------------|
| 由外部系統事件啟動 | 由使用者輸入/短語啟動 |
| 啟用自主代理行為 | 啟用對話回應 |
| 使用創建者的身份驗證 | 可選擇使用者的身份驗證 |
| 無需使用者互動即可運行 | 需要使用者啟動對話 |
| 範例：檔案創建、收到電子郵件 | 範例：“天氣如何？” |

## 📦 了解觸發器負載

當事件發生時，觸發器會向你的代理發送包含事件信息和回應指令的**負載**。

### 預設負載與自訂負載

每種觸發器類型都有預設的負載結構，但你可以自訂它：

**預設負載** - 使用標準格式，例如 `使用 {Body} 的內容`

- 包含基本事件信息
- 使用通用處理指令
- 適合簡單場景

**自訂負載** - 添加特定指令和數據格式

- 包括詳細的代理指令
- 明確指定要使用的數據及其處理方式
- 更適合複雜工作流程

### 代理指令與自訂負載指令

你有兩個地方可以指導代理在事件觸發器中的行為：

**代理指令**（全局）

- 適用於所有觸發器的廣泛指導
- 範例：“處理票證時，始終先檢查是否有重複項”
- 最適合一般行為模式

**負載指令**（特定觸發器）

- 為單一觸發器類型提供具體指令  
- 範例：“針對此 SharePoint 更新，向專案頻道發送摘要”
- 最適合具有多個觸發器的複雜代理

💡 **專業提示：** 避免在這兩個層級之間出現衝突指令，因為這可能導致意外行為。

## 🎯 常見的事件觸發器場景

以下是事件觸發器如何提升代理功能的實際範例：

### IT 幫助台代理

- **觸發器：** 新的 SharePoint 列表項目（支援票證）
- **行動：** 自動分類、分配優先級並通知相關團隊成員

### 員工入職代理

- **觸發器：** 新使用者添加到 Dataverse
- **行動：** 發送歡迎訊息，創建入職任務並配置訪問權限

### 專案管理代理

- **觸發器：** 在 Planner 中完成任務
- **行動：** 更新專案儀表板，通知利益相關者並檢查阻礙因素

### 文件管理代理

- **觸發器：** 上傳檔案到特定 SharePoint 資料夾
- **行動：** 提取元數據，應用標籤並通知文件所有者

### 會議助手代理

- **觸發器：** 創建日曆事件
- **行動：** 發送會前提醒和議程，預訂資源

## ⚠️ 發布與身份驗證考量

在你的代理能夠在生產環境中使用事件觸發器之前，你需要了解身份驗證和安全性影響。

### 創建者身份驗證

事件觸發器使用**代理創建者的憑證**進行所有身份驗證：

- 你的代理使用你的權限訪問系統
- 使用者可能通過你的憑證訪問數據
- 所有操作均以“你的身份”執行，即使使用者與代理互動

### 數據保護最佳實踐

為了在發布具有事件觸發器的代理時保持安全性：

1. **評估數據訪問** - 審查觸發器可以訪問的系統和數據
1. **徹底測試** - 了解觸發器包含的負載信息
1. **縮小觸發器範圍** - 使用特定參數限制觸發事件的範圍
1. **審查負載數據** - 確保觸發器不暴露敏感信息
1. **監控使用情況** - 跟蹤觸發器活動和資源消耗

## ⚠️ 疑難排解與限制

在使用事件觸發器時，請注意以下重要事項：

### 配額與計費影響

- 每次觸發器啟動都計入你的訊息消耗
- 頻繁觸發（例如每分鐘一次）可能迅速消耗配額
- 監控使用情況以避免節流

### 技術要求

- 僅適用於啟用了生成式編排的代理
- 需要在你的環境中啟用解決方案感知的雲端流程共享

### 數據丟失防護（DLP）

- 你的組織的 DLP 政策決定哪些觸發器可用
- 管理員可以完全阻止事件觸發器
- 如果預期的觸發器不可用，請聯繫你的管理員

## 🧪 實驗室 10 - 新增事件觸發器以啟用自主代理行為

### 🎯 使用案例

你將增強你的 IT 幫助台代理以自動回應新的支援請求。當有人在你的 SharePoint 支援票證列表中創建新項目時，你的代理將：

1. 當 SharePoint 票證被創建時自主觸發
1. 提供票證詳細信息並指示你希望它執行的步驟
1. 通過 AI 生成的電子郵件自動確認票證

此實驗室展示了事件觸發器如何啟用真正的自主代理行為。

### 先決條件

在開始此實驗室之前，請確保你已完成以下事項：

- ✅ 完成之前的實驗室（尤其是實驗室 6-8 的 IT 幫助台代理）
- ✅ 擁有 IT 支援票證列表的 SharePoint 網站訪問權限
- ✅ Copilot Studio 環境中啟用了事件觸發器
- ✅ 你的代理已啟用生成式編排
- ✅ 在 SharePoint 和 Copilot Studio 環境中擁有適當的權限

### 10.1 啟用生成式 AI 並創建 SharePoint 項目創建觸發器

1. 在 **Copilot Studio** 中打開你的 **IT 幫助台代理**

1. 首先，確保你的代理已啟用 **生成式 AI**：
   - 導航到 **概覽** 標籤
   - 在編排部分，將 **生成式編排** 切換為 **開啟**（如果尚未啟用）  
     ![啟用生成式 AI](../../../../../translated_images/10_EnableGenerativeAI.a58904a7599016a94b89a11d6c1cd59022ae686ef553d17f89ebfb6c275cc900.tw.png)

1. 導航到 **概覽** 標籤並找到 **觸發器** 部分

1. 點擊 **+ 新增觸發器** 以打開觸發器庫  
    ![導航到觸發器](../../../../../translated_images/10_NavigateToTrigger.f5907762b93236a72d2f89cdb7c903608adb61763888ba1d3b4998f46473240c.tw.png)

1. 搜索並選擇 **當創建項目時**（SharePoint）  
    ![選擇 SharePoint 觸發器](../../../../../translated_images/10_SelectSharePointTrigger.d63e7cb0f06cf33e664c0e2316952aeac4adf507d7e0f87254cffebbfa5b3007.tw.png)

1. 配置觸發器名稱和連接：

   - **觸發器名稱：** 在 SharePoint 中創建的新支援票證

1. 等待連接配置完成，然後選擇 **下一步** 繼續。  
   ![配置觸發器名稱和連接](../../../../../translated_images/10_ConfigureTriggerNameAndConnections.f526dfc7a9e0dcc31bf791623e6431230f29ae001acb0f5075e175401bebb0f2.tw.png)

1. 配置觸發器參數：

   - **網站地址：** 選擇你的 "Contoso IT" SharePoint 網站

   - **列表名稱：** 選擇你的 "票證" 列表

   - **當觸發器啟動時向代理提供的額外指令：**

     ```text
     New Support Ticket Created in SharePoint: {Body}
     
     Use the 'Acknowledge SharePoint Ticket' tool to generate the email body automatically and respond.
     
     IMPORTANT: Do not wait for any user input. Work completely autonomously.
     ```

     ![配置觸發器參數](../../../../../translated_images/10_ConfigureTriggerParams.a67406d4a892ba1f59a04641cbb2f7226a329b9813b04676f92bf18c6003fd23.tw.png)

1. 選擇 **創建觸發器** 完成觸發器創建。系統會自動創建一個 Power Automate Cloud Flow，以自主觸發代理。

1. 選擇 **關閉**。

### 10.2 編輯觸發器

1. 在 **概覽** 標籤的 **觸發器** 部分內，選擇 **...** 菜單，找到 **在 SharePoint 中創建的新支援票證** 觸發器

1. 選擇 **在 Power Automate 中編輯**  
   ![在 Power Automate 中編輯觸發器](../../../../../translated_images/10_EditTriggerInPowerAutomate.d99effb8145d40bd4d655021e0a34abf59ba23ff5e94bcae07e7e6711a52eff0.tw.png)

1. 選擇 **向指定的 Copilot 發送提示進行處理** 節點

1. 在 **正文/訊息** 欄位中，移除正文內容，**按下斜線鍵** (/) 並選擇 **插入表達式**  
   ![插入觸發器表達式](../../../../../translated_images/10_InsertExpressionForTrigger.adb940d8fa6e0bc50b325cedc3e3c085b5670e5cf2b275bf7b4ada1180d3ba01.tw.png)

1. 輸入以下表達式，向代理提供有關票證的具體詳細信息：

    ```text
    concat('Submitted By Name: ', first(triggerOutputs()?['body/value'])?['Author/DisplayName'], '\nSubmitted By Email: ', first(triggerOutputs()?['body/value'])?['Author/Email'], '\nTitle: ', first(triggerOutputs()?['body/value'])?['Title'], '\nIssue Description: ', first(triggerOutputs()?['body/value'])?['Description'], '\nPriority: ', first(triggerOutputs()?['body/value'])?['Priority/Value'],'\nTicket ID : ', first(triggerOutputs()?['body/value'])?['ID'])
    ```

1. 選擇 **新增**  
   ![觸發器輸出表達式](../../../../../translated_images/10_TriggerOutputExpression.3b120eaa26cc9a4cd5451bb2ca658ce1a7192eb7a46c7c2b4d7431d20e982187.tw.png)

1. 在右上方工具欄中選擇 **發布**。

### 10.3 創建電子郵件確認工具

1. **返回** 到你的 Copilot Studio 中的代理

1. 導航到代理的 **工具** 標籤

1. 點擊 **+ 新增工具** 並選擇 **連接器**

1. 搜索並選擇 **發送電子郵件 (V2)** 連接器  
    ![選擇 Outlook 連接器](../../../../../translated_images/10_SelectOutlookConnector.0bf4270b1d25c691574881514f162fd74e10206bc5efd798e5cb15741b73c063.tw.png)

1. 等待連接配置完成，然後選擇 **新增並配置**

1. 配置工具設置：

   - **名稱：** 確認 SharePoint 票證
   - **描述：** 此工具發送電子郵件確認票證已被接收。

1. 選擇 **自訂**，然後按以下方式配置輸入參數：

    **收件人：**

    - **描述：** 提交 SharePoint 票證的人的電子郵件地址
    - **識別為：** 電子郵件

    **正文：**

    - **描述：** 確認票證已被接收，我們將在 3 個工作日內回覆。

    ![配置輸入參數](../../../../../translated_images/10_ConfigureInputParameters.cc8b602c0dc244734cb8eac43f8d7fcf88f4158dcdc7f7ae15658ad93c03beae.tw.png)

1. 選擇 **保存**

### 10.4 測試觸發器

1. 在你的 **幫助台代理** 中，選擇 **概覽** 標籤
1. 點擊 **測試觸發器** 圖標，位於 **在 SharePoint 中創建的新支援票證** 觸發器旁邊。這將加載 **測試你的觸發器** 視窗。
1. 開啟新的瀏覽器分頁，並前往您的 **SharePoint IT 支援票務清單**  
1. 點擊 **+ 新增項目** 以建立測試票務：  
   - **標題**: "無法連接到 VPN"  
   - **描述**: "最近更新後無法連接到公司 WIFI 網路"  
   - **優先級**: "普通"  

1. **儲存** SharePoint 項目  
    ![建立測試票務](../../../../../translated_images/10_CreateTestTicket.137beedc82d337ef0a467c67d3b53249ec469ce1ce91d88a72fb2f8729a14fce.tw.png)  
1. 返回 **Copilot Studio** 並在 **測試您的觸發器** 面板中監控觸發器的啟動情況。使用 **刷新** 圖示載入觸發事件，這可能需要幾分鐘。  
    ![監控觸發器測試](../../../../../translated_images/10_MonitorTriggerTest.f9883de55ba1c9817121c7f801e29715fa74918603f96312dfcb0f16f9af44e0.tw.png)  
1. 當觸發器出現時，選擇 **開始測試**  
1. 點擊 **活動地圖圖示**，位於 **測試您的代理** 面板頂部  
1. 驗證您的代理是否：  
   - 收到觸發器的有效負載  
   - 呼叫了 "確認 SharePoint 票務" 工具  
     ![測試觸發器](../../../../../translated_images/10_TestTrigger.f68b063d3fa221601f61484aec9bf68aa17761366aa1efe8c3cad554ce3da902.tw.png)  
1. 檢查提交者的電子郵件收件箱，確認已發送確認電子郵件  
    ![測試電子郵件已發送](../../../../../translated_images/10_TestEmailSent.1efe77ca636ca8b8c2593216539edfe11555f7e002a6dcb5e2024b36b40e12b3.tw.png)  
1. 在 Copilot Studio 的 **活動** 標籤中查看完整的觸發器和工具執行記錄  

## ✅ 任務完成  

🎉 **恭喜！** 您已成功實現使用連接器工具的事件觸發器，讓您的代理能夠自主運作，自動發送電子郵件確認並處理支援票務，無需使用者介入。一旦您的代理發布，它將代表您自主行動。  

🚀 **下一步**: 在下一課中，您將學習如何 [發布您的代理](../11-publish-your-agent/README.md) 到 Microsoft Teams 和 Microsoft 365 Copilot，讓整個組織都能使用！  

⏭️ [前往 **發布您的代理** 課程](../11-publish-your-agent/README.md)  

## 📚 策略資源  

準備深入了解事件觸發器和自主代理嗎？查看以下資源：  

- **Microsoft Learn**: [在 Copilot Studio 中讓您的代理自主運作](https://learn.microsoft.com/training/modules/autonomous-agents-online-workshop/?WT.mc_id=power-177340-scottdurow)  
- **文件**: [新增事件觸發器](https://learn.microsoft.com/microsoft-copilot-studio/authoring-trigger-event?WT.mc_id=power-177340-scottdurow)  
- **最佳實踐**: [Power Automate 觸發器介紹](https://learn.microsoft.com/power-automate/triggers-introduction?WT.mc_id=power-177340-scottdurow)  
- **進階場景**: [使用 Power Automate 流程與代理](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create?WT.mc_id=power-177340-scottdurow)  
- **安全性**: [Copilot Studio 的資料遺失防護](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention?WT.mc_id=power-177340-scottdurow)  

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/10-add-event-triggers" alt="分析" />  

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們致力於提供準確的翻譯，請注意自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵資訊，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。