<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "75efaf515d5694d4fd549bfd6518901a",
  "translation_date": "2025-10-22T00:18:15+00:00",
  "source_file": "docs/operative-preview/03-automate-triggers/README.md",
  "language_code": "hk"
}
-->
# 任務 03：新增事件觸發器以自主行動

--8<-- "disclaimer.md"

## 🕵️‍♂️ 行動代號：`信號點行動`

> **⏱️ 行動時間窗口：** `~45 分鐘`

## 🎯 任務簡介

歡迎回來，特工。在 [任務 02](../02-multi-agent/README.md) 中，你學會了如何建立應用程序接收子代理和面試準備連接代理，以擴展你的主要招聘代理的功能。

你的任務，若你選擇接受，就是 **信號點行動**——深入研究 **事件觸發器**，將你的代理系統從被動提升到 **自主運作**。你將把代理從等待人類輸入轉變為主動響應外部事件並在無需監督的情況下採取智能行動。

想像一下，從回答問題的代理升級到預測需求並獨立行動的代理。通過事件觸發器和自動化工作流程，你的招聘代理將能檢測到收到的簡歷郵件，自動處理附件，將數據存儲到 Dataverse，並通過 Microsoft Teams 通知你的 HR 招聘團隊——而你可以專注於更高價值的任務。

歡迎來到自動化與智能結合的世界。

## 🔎 目標

在這次任務中，你將學習：

1. 如何使用事件觸發器實現代理的自主行為，無需用戶交互
1. 在 Copilot Studio 中互動代理和自主代理的區別
1. 如何創建事件觸發器，自動處理電子郵件附件並將文件上傳到 Dataverse
1. 如何構建代理流程，將自適應卡片發佈到 Teams 頻道進行通知
1. 如何在事件觸發器和代理流程之間傳遞數據，實現端到端自動化

## 🤔 什麼是事件觸發器？

在之前的 [Recruit](../../recruit/10-add-event-triggers/README.md) 中，我們學習了事件觸發器。如果你錯過了，我們來快速回顧一下。

**事件觸發器** 讓代理在另一個系統中發生某些事情時能夠自主行動——不需要用戶消息。當配置的事件觸發時，例如“新增 SharePoint 項目”、“收到新郵件”、“分配了 Planner 任務”或基於時間的定期事件，連接器會向你的代理發送觸發器負載。然後代理根據你的指示決定要調用哪些操作或主題。

### 主要特徵

- **自主激活：**
      - 不同於用戶輸入啟動的主題觸發器，事件觸發器由外部事件觸發，實現主動行為。

- **基於負載：**
      - 每個事件通過連接器傳遞負載（變量 + 可選指令）。代理使用你定義的指令和負載來選擇下一步的操作。
      - 例如，_調用主題_ 或 _執行工具定義的操作_。

- **現成的示例：**
      - SharePoint/OneDrive 文件或項目創建
      - Planner 任務完成/分配
      - Microsoft Forms 回應提交
      - 定期/計劃

    可用性取決於你的組織在 Power Automate 中配置的數據政策。

- **需要生成式編排：**
      - 事件觸發器僅在代理啟用了生成式編排時可用。

- **計費/使用：**
      - 每次觸發器交付都計入 Copilot Studio 容量的消息。
      - 例如，每 10 分鐘的定期觸發會每 10 分鐘發送一條消息。

- **身份驗證模型和設置：**
      - 你可以在代理的概覽中添加觸發器，位於 _Triggers_ 下。觸發器連接器的身份驗證使用代理創建者的帳戶（“代理作者身份驗證”）。
      - 你可以在 Power Automate 創建者門戶中編輯觸發器參數和負載。

- **測試與可觀察性：**
      - 你可以從代理的測試面板測試觸發器，並在發布前使用活動地圖檢查行為。

!!! info "給開發者的簡要說明"

    將事件觸發器視為 **類似 webhook 的信號**，它將結構化的負載推送到你的代理，讓代理能夠 _啟動_ 工作並在系統之間鏈接操作——無需等待用戶的請求。

### 主題觸發器 - 它們有何不同

之前你在 [Recruit](../../recruit/07-add-new-topic-with-trigger/README.md) 中學習了主題觸發器，但你可能仍然想知道 _主題_ 觸發器與 _事件_ 觸發器有何不同，以及為什麼這種區別對理解代理的自主性至關重要。

主題觸發器控制 _主題何時運行_，通常是響應用戶消息。

- 在生成式編排中，默認觸發器是 **由代理**——規劃器選擇名稱/描述最符合用戶消息的主題。
- 在經典編排中，默認是 **短語**——規劃器選擇一個或多個觸發短語最符合用戶消息的主題。

其他觸發類型包括 `收到消息`、`收到事件`、`收到活動`、`會話更新`、`收到調用`、`重定向`、`不活躍` 和 `計劃完成`。

!!! info "核心區別"

    主題觸發器是聊天中的 _對話活動_ 啟動器。
    
    事件觸發器是系統通過連接器傳遞的 _事件_ 啟動器，可以在完全沒有對話的情況下運行代理。

### 主題觸發器與事件觸發器的快速指南

- **主題觸發器：** 用戶（或聊天活動）說/做了 X ➡️ 運行主題 T。
- **事件觸發器：** SharePoint/Planner/Email/Timer 發送了負載 P ➡️ 代理評估指令 ➡️ 根據情況調用操作/主題。

## 🏓 互動代理與自主代理 - 比較

現在你已經了解了事件觸發器和主題觸發器的區別，接下來我們來學習互動代理與自主代理的差異。

在 Copilot Studio 中，“互動”指主要通過聊天或頻道中的 **主題** 進行交互的代理。“自主”指也利用 **事件觸發器** 在無需用戶輸入的情況下運行的代理。

以下表格總結了它們的差異和相似之處。

| 維度                               | 互動代理               | 自主代理                                                                                              |
|-------------------------------------|-----------------------|-------------------------------------------------------------------------------------------------------|
| 如何啟動                           | 用戶（或聊天活動）觸發主題。例如：由代理、短語、收到消息。   | 外部事件觸發器通過連接器向代理發送負載。例如：SharePoint、Planner、電子郵件、計劃等。 |
| 主要用途                           | 問答、引導式工作流程、聊天中的請求驅動操作——Teams、網頁等。  | 主動操作和背景自動化——響應系統變更，然後通知、存檔或編排任務。 |
| 觸發表面                           | 主題觸發器：由代理 / 短語 / 收到消息 / 活動類型 / 調用 / 不活躍 / 計劃完成 | 事件觸發器庫通過連接器；負載包括事件數據 + 可選指令。 |
| 規劃器（生成式編排）               | 強烈依賴於由代理和計劃完成觸發器來選擇/排序主題。 | 事件觸發器需要；代理使用指令 + 負載來決定調用哪些操作/主題。 |
| 典型示例                           | 用戶詢問“我們的退款政策是什麼？” → 主題運行，查詢知識，回應。 | 新的 Planner 任務分配 → 事件觸發器啟動 → 代理發 Teams 消息、更新記錄或調用主題。 |
| 設置路徑                           | 創建主題，定義觸發類型，編寫對話/操作；發佈到頻道。 | 添加事件觸發器（概覽 → Triggers），使用代理作者憑證進行連接器身份驗證，配置負載/指令；通過測試面板測試；發佈。 |
| 身份驗證與治理                     | 在頻道/身份驗證上下文中運行；主題觸發器響應允許頻道中的聊天活動。 | 觸發器的可用性取決於 Power Automate 數據政策；連接器在代理創建者的帳戶下運行。 |
| 可觀察性                           | 在 Copilot Studio 中測試主題，檢查對話記錄/活動。 | 使用測試觸發器和活動地圖在發佈前驗證執行，發佈後監控活動。 |
| 容量影響                           | 每次用戶消息/代理回應都消耗容量消息。 | 每次事件交付也是一條消息，加上任何後續操作。例如：10 分鐘的定期觸發 = 每小時 6 條消息 |

### 什麼時候使用哪一種？

- 當用戶啟動代理對話時選擇 **主題觸發器（互動）**——FAQ、引導式接收或聊天中的命令式任務。規劃器的由代理觸發器減少了手動短語策劃。
- 當代理應該啟動對話或自行採取行動時添加 **事件觸發器（自主）**——例如在 SharePoint/Dataverse 中的更新、收到的電子郵件或計劃。這將你從被動操作轉變為主動操作。

## 開發者提示與注意事項

1. **啟用生成式編排** 對於任何你希望使其自主的代理。否則事件觸發器不會顯示。

1. **提前建模負載。** 決定代理需要的觸發器最少字段，例如 `itemId`、`assignedTo`、`dueDate`，並添加簡潔的指令，告訴代理根據負載值調用哪些操作/主題。

1. **身份驗證範圍很重要。** 觸發器使用代理創建者的帳戶進行身份驗證。確保該帳戶擁有正確的連接器權限並符合 Power Automate 數據政策。

1. **控制成本和噪音。** 高頻率的定期觸發或非常頻繁的來源可能會迅速增加消息消耗——盡可能進行節流或在觸發器中添加條件以過濾事件。

1. **在發佈前測試。** 使用 **測試觸發器** 和活動地圖觀察計劃和調用的操作——迭代指令/負載直到行為穩定。

## 🧪 實驗室 03 - 自動化處理候選人申請郵件

接下來我們將向 **招聘代理** 添加事件觸發器，並在子代理 **應用程序接收代理** 中構建代理流程，以進一步處理實現自主性。

### ✨ 使用場景

!!! info ""

    **作為** HR 招聘人員

    **我希望** 當收到包含簡歷的電子郵件並自動上傳到 Dataverse 時能收到通知

    **以便** 我能夠隨時了解通過電子郵件發送的申請簡歷已自動上傳到 Dataverse

我們將通過以下兩種技術來實現：

1. 當電子郵件到達時的事件觸發器，
    1. 檢查文件的 `contentType` 是否為 `PDF` 格式。
    1. 提取文件並通過 Dataverse 連接器的操作上傳到 Dataverse。
    1. 然後通過事件觸發器的輸入參數向代理發送提示以進一步處理。

1. 在子代理 **應用程序接收代理** 中添加代理流程，該流程由事件觸發器中的提示調用。
    1. 使用事件觸發器提示中傳遞的輸入參數，將自適應卡片發佈到 Microsoft Teams 的頻道，通知 HR 招聘團隊。自適應卡片將包含指向 Dataverse 中行的鏈接，該行將在 **招聘代理** 中查看。

讓我們開始吧！

### ✨ 完成此任務的先決條件

你需要 **以下其中之一**：

- **完成任務 01 和任務 02**，並準備好你的招聘代理，**或者**
- **導入任務 03 起始解決方案**，如果你是從頭開始或需要補課。[下載任務 03 起始解決方案](https://aka.ms/agent-academy)

!!! note "解決方案導入和示例數據"
    如果你使用起始解決方案，請參考 [任務 01](../01-get-started/README.md) 了解如何將解決方案和示例數據導入到你的環境。

你還需要訪問 **Microsoft Teams** 以完成第二個實驗室練習，將自適應卡片發佈到 Microsoft Teams。

### 實驗室 3.1 - 自動化上傳收到的簡歷到 Dataverse

1. 在招聘代理中，向下滾動到 **概覽標籤**，選擇 **+ 添加觸發器**。

       ![向代理添加觸發器](../../../../../translated_images/3.1_01_AddTrigger.4d5f4d13a4a6b19fe9ff89e3a483601199d7643236d6df65ff81dfea76d1d443.hk.png)

1. 觸發器列表將出現。選擇 **當收到新郵件 (V3)**，然後選擇 **下一步**。

       ![選擇當收到新郵件 (V3) 觸發器](../../../../../translated_images/3.1_02_WhenANewEmailArrives.a250875915165d97c1af6eebba70f16fbfc845a37d4d354c9f35a55aa459035e.hk.png)

1. 我們現在會看到 **觸發器名稱** 和應用程序的 **登錄** 連接參考。

       將觸發器名稱重命名為以下內容：
    
       ```text
       當收到來自申請者的新郵件
       ```

       確保每個應用程序的連接參考旁邊都有綠色勾號。如果沒有看到綠色勾號，請通過省略號（...）登錄並選擇 **+ 新建連接參考** 以創建新的連接參考。

       ![更新觸發器名稱和檢查連接參考](../../../../../translated_images/3.1_03_RenameTriggerName.3eb80b25bea5f874a51aab600ffd333359de3a981e41eed1b4fc7c8f27eef323.hk.png)

1. 最後一步是設置觸發器的輸入屬性。將以下屬性更新為以下內容：

     | 屬性 | 設置方式 | 詳細信息 |
     |------|----------|----------|
     | **包含附件（可選）** | 下拉選單 | 是 |
     | **主題篩選（可選）** | 鍵入/輸入 | Application |
     | **僅包含附件（可選）** | 下拉選單 | 是 |

       選擇 **創建觸發器**。

       ![配置觸發器輸入](../../../../../translated_images/3.1_04_ConfigureTriggerInputs.2151044f4953b31b40402c2a94fd63fb71fe8eede27a5cbf1d124d4300318446.hk.png)

1. 創建完成後，將出現確認消息，表示觸發器已添加到代理中。選擇 **關閉**，觸發器將列在 **觸發器** 部分中。
現在我們要更新事件觸發器，增加更多自動化功能。選擇觸發器旁邊的 **省略號 (...)**，然後選擇 **在 Power Automate 中編輯**。

![選擇在 Power Automate 中編輯](../../../../../translated_images/3.1_05_SelectEditInPowerAutomate.d298b51d7980cf2fd20a9d8193745aef4ce8097a4a2d33341e2dc159b9bfc099.hk.png)

1. 觸發器將作為流程在 Power Automate 製作門戶中加載。您現在看到的是 Power Automate 製作門戶中的流程設計器。在這裡，我們可以添加更多邏輯和操作以實現更高的自動化。觸發器將顯示在頂部，流程的最後一個操作是 **向指定的 Copilot 發送提示進行處理**。

![Power Automate 製作門戶中的流程設計器](../../../../../translated_images/3.1_06_EditInPowerAutomate.f8967ace56354224574517f31a2a2ce0a5b5d3ab85bfb9ec6cf70e83ab1b8e6d.hk.png)

1. 默認情況下，Power Automate 中的 **當新電子郵件到達時** 觸發器可能會一次處理多封電子郵件，如果多封電子郵件同時到達，流程只會為這批電子郵件運行一次。

為了確保流程為每封電子郵件分別運行，請在觸發器的設置中啟用 **Split On** 設置，並在下拉框的數組字段中選擇 `@triggerOutputs()?['body/value']`。

啟用 **Split On** 並將數組字段設置為 `@triggerOutputs()?['body/value']` 後，即使多封電子郵件同時到達，流程也會為每封郵件單獨運行。

![在觸發器中啟用 Split On 設置](../../../../../translated_images/3.1_07_UpdateTriggerSettings.0f363c4f4655276732575fa795bf1ad1568df34d34b703c85073591cc8585609.hk.png)

1. 接下來，我們添加一些邏輯來檢查附件的文件類型。我們只希望上傳 .PDF 文件附件，而不是圖片（這些可能來自電子郵件簽名）。選擇觸發器下方的 **+** 圖標，然後在 **內建工具** 部分中選擇 **控制**。

![選擇控制](../../../../../translated_images/3.1_08_Control.2fa6987b64ae20d5c8343d1b15937432ab6c893750c4b1427df56067023fd437.hk.png)

1. 選擇 **條件** 操作。

![選擇條件操作](../../../../../translated_images/3.1_09_AddConditionAction.a7eec0b2a42d4a7c54bd305f0c480b72e3feec155a4e2468e12279082257f21f.hk.png)

1. 現在我們配置條件以檢查文件附件的類型是否為 .PDF。在 **選擇值** 字段中，選擇右側的 **閃電圖標** 或 **fx 圖標**。

   1. 在 **搜索** 字段中輸入以下內容：

      ```text
      content type
      ```

   1. 然後從觸發器中選擇 **Attachments Content-Type** 參數。

   1. 接下來，選擇 **添加**，將動態內容輸入添加到操作的 **Id** 參數中。

![配置條件操作](../../../../../translated_images/3.1_10_SetDynamicContentValue_V2.23c3d0438146a5ff0d695077e65a3b1c8b230b54c51ded8a099c6e99a948e9ed.hk.png)

1. 我們先暫停一下，您可能已經注意到 **For each** 操作自動出現了。

選擇 **For each** 操作。此操作表示循環處理電子郵件中的每個附件，因為觸發器中的 **Attachments Content-Type** 參數與每個附件相關聯。

在底層，它是一個數組，這就是為什麼當我們在 **條件** 操作中選擇 **Attachments Content-Type** 參數時，**For each** 操作會自動添加。

要了解更多，請展開以下額外學習區塊。

??? info "額外學習：For each 操作自動出現"

🤔 **為什麼 "Apply to each" 或 "For each" 會自動出現？**

當您選擇代表列表或數組的參數（動態內容）時，例如附件列表、電子郵件或行，Power Automate 會識別您可能希望單獨處理每個項目。

為了幫助您完成此操作，Power Automate 自動在您的操作周圍添加 **“Apply to each”**（或 **For each**）循環。這確保您的操作將針對列表中的每個項目運行一次，而不是試圖一次處理整個列表（這可能會導致錯誤）。

🦋 **示例**

- 如果您選擇來自上一個操作的 "Attachments"（它是一個數組），並嘗試在期望單個文件的操作中使用它，Power Automate 會將您的操作包裹在 **"Apply to each"**（或 **For each**）循環中。
- 這樣，您的操作將針對 **每個附件** 運行——一次一個。

💡 **關鍵點**

- **自動化：** 循環自動出現以幫助您處理集合中的每個項目。
- **防止錯誤：** 沒有循環，您的操作可能會失敗，因為它無法一次處理多個項目。
- **可視化提示：** 它是一種可視化方式，顯示您的流程將針對列表中的每個項目重複操作。

![解釋 For Each 操作](../../../../../translated_images/3.1_11_ForEach.82bd7b62b815fdbcd67acff0a633137cf03175940c670361ea8669b0df892927.hk.png)

1. 接下來，在另一個 **選擇值** 字段中，輸入以下內容：

   ```text
   application/pdf
   ```

   這將確保對於每個文件附件，它會檢查文件擴展名格式是否為 .PDF。

![EqualToValue](../../../../../translated_images/3.1_12_EqualToValue.66c107cb8105c1cd3d166b8a5bf690b8dfc30aa2bd2af83c438a9e44d1b544b0.hk.png)

1. 現在我們將配置 **True** 路徑，從電子郵件中提取文件並將其上傳到 **Resume** Dataverse 表中。

在 **True** 路徑下添加一個新操作，然後搜索 `html to text`。選擇 **Html to text** 操作。

要了解更多關於 **Html to text** 操作的信息，請展開以下額外學習區塊。

??? info "額外學習：Html to text 操作"

🤔 **什麼是 "HTML to text" 操作？**

**HTML to text** 操作在 Power Automate 中用於將 HTML 格式的內容轉換為純文本。這在您接收到包含 HTML 標籤的數據（例如電子郵件、網頁內容或 API 響應）時特別有用，您希望提取僅可讀的文本而不包含任何格式或代碼。

⚙️ **它如何工作？**

- **輸入：** 您提供一段 HTML 內容（例如電子郵件正文）。
- **輸出：** 該操作移除所有 HTML 標籤，僅返回純文本。

👍🏻 **什麼時候應該使用它？**

- 當您希望從包含 HTML 的電子郵件、網頁或 API 響應中提取可讀文本時。
- 在將內容發送到不支持 HTML 格式的系統（例如 SMS、Teams 消息或數據庫）之前。
- 用於清理數據以進一步處理或分析。

🔭 **在哪裡可以找到它？**

- 在 Power Automate 的 Agent Flows 中，搜索名為 `HTML to text` 的操作。它位於 **數據操作** 連接器下。

💡 **關鍵點**

- 它移除所有 HTML 標籤，只留下文本。
- 它不解釋或執行腳本/樣式——僅移除標籤。
- 用於數據清理和準備內容以進行純文本輸出。

![添加 HTML to text 操作](../../../../../translated_images/3.1_13_AddHTMLToTextAction.2aa9468b87dbeb847c083f24da0fe99438b39f826b13a70982ec255a97c2aa80.hk.png)

1. 接下來，我們需要為 **Html to text** 操作創建一個新的連接引用，選擇 **添加新**。

![添加新連接引用](../../../../../translated_images/3.1_14_AddNewConnection.4a23546976b62e7f0e882ac1379950e5bfdcaa702070313cb84a1d22b06a79a7.hk.png)

1. 現在可以配置該操作。讓我們添加觸發器中的 **Body** 參數。在 **內容** 字段中，選擇右側的 **閃電圖標** 或 **fx 圖標**。

![添加動態內容](../../../../../translated_images/3.1_15_AddDynamicContent.0624a9808f55b993efb6d00bf941a88389655e2ab9970ba2b9a1538272fe9643.hk.png)

1. 在 **動態內容** 標籤中，搜索 `body` 並選擇 **Body** 參數，然後選擇 **添加**。

![添加 Body 參數](../../../../../translated_images/3.1_16_AddDynamicContent.40b7eccc080c20513eed5663062b2a63d40d6482eaf2d42fe4e29cb94797f098.hk.png)

1. 我們已完成配置此操作，因此選擇指向左側的兩個角括號（«）以折疊面板退出操作。

![折疊操作面板](../../../../../translated_images/3.1_17_CollapseAction.ca2c346efb58f8240372c3d145fa10ba609cab1c2075d7df1a9388c82fab79f5.hk.png)

1. 我們將通過選擇 **Html to text** 操作下方的 **+ 圖標** 添加新操作，這將加載添加操作的面板。選擇 **Microsoft Dataverse** 連接器。

![添加新操作](../../../../../translated_images/3.1_18_AddDataverseAction.5f4be9eb96e22dac239e5545bab5ad9d08b138c2cbcbc700680f33445e132506.hk.png)

1. 選擇 **添加新行** 操作。

![添加新行操作](../../../../../translated_images/3.1_19_AddANewRow.48e0a3868821e59ed2a299ccb6a521af27b2430082381d48be38087be62c7c15.hk.png)

1. 通過選擇 **省略號 (...)** 重命名操作，複製並粘貼以下內容作為名稱：

```text
添加新的 Resume 行
```

在 **表名** 參數中，搜索 `res` 並選擇 **Resumes** 表。

![重命名操作並配置表名參數](../../../../../translated_images/3.1_20_RenameAndSelectResumesTable.89f8485653abb7fda1d6eb44210951f05a05ed6f7450a51895079dfd8e72c8bf.hk.png)

1. 接下來選擇 **Resume Title** 字段，並選擇右側的 **閃電圖標** 或 **fx 圖標**。

![配置 Resume Title 參數](../../../../../translated_images/3.1_21_AddDynamicContent.9ee1f89420d5a4aa56797944166208f6e9b0ec67116625168fbcefb907850224.hk.png)

1. 在 **函數標籤** 中，輸入以下使用 `item()` 函數的表達式：

```text
item()?['name']
```

要了解更多關於 `item()` 函數的信息，請展開以下額外學習區塊。

??? info "額外學習：`item()` 函數"

🤔 **什麼是 `item()` 函數？**

- 當您使用 **Apply to each** 操作時，Power Automate 會遍歷集合（數組）中的每個元素。
- 它最常用於 **Apply to each**（或 **For each**）、**Select** 或 **Filter array** 等操作中。

⚙️ **它如何工作？**

- `item()` 是一個函數，返回當前正在循環或數組操作中處理的項目。
- 在該循環中，`item()` 指的是正在處理的 _當前元素_。

📌 **在哪裡使用它？**

- **Apply to each：** 訪問當前項目的屬性。
- **Select：** 轉換數組中的每個項目。
- **Filter array：** 引用正在評估的當前項目。

🦋 **示例**

- 循環中的表達式：
       -  `item()?['Email']`
- 這將獲取當前項目的 `Email` 屬性。

💡 **關鍵點**

- `item()` 是 _上下文敏感的_：它始終指向您所在循環或數組操作中的當前項目。
- 如果您嵌套循環，可以使用 `items('LoopName')` 引用特定循環中的項目。

選擇 **添加**，將表達式添加到 **Resume Title** 參數。

![為 Resume Title 參數添加表達式](../../../../../translated_images/3.1_22_ResumeTitleParameter.9e4fa71a5251cb899e7b09bcc3052eeda1e512841f929118eb9e2b1d232ecb07.hk.png)

1. 我們仍需配置幾個參數，選擇 **顯示全部**，在 **Cover Letter** 字段中，選擇右側的 **閃電圖標** 或 **fx 圖標**。

在 **函數標籤** 中，輸入以下表達式，使用之前 [任務](../02-multi-agent/README.md) 中的相同表達式：

```text
if(greater(length(body('Html_to_text')), 2000), substring(body('Html_to_text'), 0, 2000), body('Html_to_text'))
```

此表達式檢查來自 **Html to text** 操作的 _文本_ 是否超過 2000 個字符，如果是，則僅返回前 2000 個字符；否則返回完整文本。

![為 Cover Letter 參數添加表達式](../../../../../translated_images/3.1_23_CoverLetterParameter.d2b521d6b37d05ac4760c91de2964b6d062585a333af6989d9ac0794a4139463.hk.png)

1. 表達式現在已添加到 **Cover Letter** 字段。

![表達式已添加到 Cover Letter 參數](../../../../../translated_images/3.1_24_ExpressionForCoverLetter.3d18124b10b76bad92db61c529ae395b0bb05f3215e3b783771e76ef7677664e.hk.png)

1. 對於 **Source Email Address** 字段，搜索 `from` 並選擇觸發器中的 **From** 參數，因為它包含電子郵件地址值。

![Source Email Address 參數](../../../../../translated_images/3.1_25_FromParameter.1ed1be46711f6705fb807996f6f1e873adc22e285186a851272e0cf3855487ef.hk.png)

1. 對於 **Upload Date** 字段，選擇右側的 **閃電圖標** 或 **fx 圖標**。在 **函數標籤** 中，輸入以下使用 `utcNow()` 函數的表達式：

```text
utcNow()
```

要了解更多關於 `utcNow` 函數的信息，請展開以下額外學習區塊。

??? info "額外學習：`utcNow` 函數"

🤔 **什麼是 `utcNow()` 函數？**

- Power Automate 中的 `utcNow()` 函數返回當前日期和時間（以協調世界時 UTC）並以 ISO 8601 格式顯示，例如：`2025-09-23T04:32:14Z`

🦋 **示例**

- 表達式：
       -  `concat('報告生成於 ', utcNow())`
- 輸出為：
       - 報告生成於 `2025-09-23T04:32:14Z`

💡 **關鍵點**
- **不需要任何參數（輸入參數）：** 它總是返回當前的 UTC 時間戳。
   - **使用場景**
       - 為日誌或文件名添加時間戳
       - 與其他日期比較當前時間
       - 排程或基於時間的條件

   ![上傳日期參數](../../../../../translated_images/3.1_26_UploadDateParameter.21b0afc9807bf680c1c432066f1644d4d018cb4988ad0c0788b5186cea285e02.hk.png)

1. 我們已完成配置 **新增履歷行** 操作，現在可以通過折疊面板退出。

   ![退出操作面板](../../../../../translated_images/3.1_27_CollapseAction.c033a86e4d8501b10fc454ba7f9c5e08d71d6d881fc72f58011152e1c5d7a7bb.hk.png)

1. 我們將通過選擇 **新增履歷行** 操作下方的 **+ 圖標** 添加新操作，這將加載添加操作的面板。再次選擇 **Microsoft Dataverse** 連接器。

   ![添加 Dataverse 操作](../../../../../translated_images/3.1_28_AddDataverseAction.1af4dedc95001bfb56b0a642231e9c82b57459b10c68bf6fc177382339a0a221.hk.png)

1. 選擇 **上傳文件或圖片** 操作。

   ![添加上傳文件或圖片操作](../../../../../translated_images/3.1_29_AddUploadAFileOrAnImage.e40ab21b735e37bd1fdb5020b7433d1a2f01d6e387bc43a437e970c6e20ee779.hk.png)

1. 通過選擇 **省略號 (...)** 重命名操作，複製並粘貼以下內容作為名稱：

   ```text
   上傳履歷文件
   ```

   ![重命名操作](../../../../../translated_images/3.1_30_RenameAction.c316fdf225f88e5c3ee26649e672472829c3372c804b544a1372b0455937c204.hk.png)

1. 接下來選擇 **內容名稱** 欄位，然後選擇右側的 **閃電圖標** 或 **fx 圖標**。

   在 **函數選項卡** 中，輸入以下使用 `item()` 函數的表達式。這將獲取當前項目的 `name` 屬性（附件文件）。

   ```text
   item()?['name']
   ```

   ![配置內容名稱參數](../../../../../translated_images/3.1_31_ContentNameParameter.c6606773f1e82dbcea93d7c2f52dff7a2168f9f04d6b865f699f56d62a41d4ec.hk.png)

1. 對於 **表格名稱** 參數，搜索 `res` 並選擇 **履歷** 表格。

   ![配置表格名稱參數](../../../../../translated_images/3.1_32_SelectResumesTable.6a00bf6d585002219003da47f6e1042dc67cbdb3fbaf7d959253550035e27520.hk.png)

1. 接下來選擇 **行 ID** 欄位，然後選擇右側的 **閃電圖標** 或 **fx 圖標**。

   搜索 `ID` 並從 _新增行 Dataverse_ 操作中選擇 **履歷** 參數，因為它包含要上傳 PDF 文件的行的 ID 值。

   選擇 **添加**。

   ![選擇行 ID](../../../../../translated_images/3.1_33_RowIDParameter.9824c6b5ea5edf0ce018140c20431a97c2e750d61bcb787f67da260acb6a3838.hk.png)

1. 選擇 **列名稱** 欄位並選擇 **履歷 PDF** 選項。

   ![配置列名稱參數](../../../../../translated_images/3.1_34_ColumnNameParameter.ef4f770cbd84cae5c15cfe06d1bdbe028d0c6d54a2286dab30769fa01c948b71.hk.png)

1. 選擇 **內容** 欄位並選擇右側的 **閃電圖標** 或 **fx 圖標**。

   在 **函數選項卡** 中，輸入以下使用 `item()` 函數的表達式。這將獲取當前項目的 `contentBytes` 屬性（附件文件）。`contentBytes` 指的是文件或附件的原始二進制數據，編碼為 Base64 字符串。

   ```text
   item()?['contentBytes']
   ```

1. 我們已完成配置此操作，現在可以通過選擇指向左側的兩個尖括號 («) 折疊面板退出操作。

   ![折疊操作面板](../../../../../translated_images/3.1_36_CollapseAction.1813a7219f0f37b87f80c2cd9f5a9626c3a320858d08a0e62cf14736f97db4c6.hk.png)

1. 接下來，選擇 **向指定的 Copilot 發送提示進行處理**，然後將此操作拖放到條件的 _True_ 路徑中的 **上傳履歷文件** 操作下方。

   ![在 True 路徑中拖放操作](../../../../../translated_images/3.1_37_DragAndDropAction.57dc2e9f9d25ed892a4fc072a72c55eca6c38e313ab48fb9db37e9371995440f.hk.png)

1. 選擇 **向指定的 Copilot 發送提示進行處理** 以進行配置。

   ![選擇操作](../../../../../translated_images/3.1_38_SelectAction.d125bdf661f66b6397542c75efbc6a78b8c4862e03dce4002776c251f1c48382.hk.png)

1. 在 **正文/消息** 欄位中，選擇所有欄位內容並清除/刪除。

   ![清除正文參數](../../../../../translated_images/3.1_39_ClearBodyParameter.6a345b2e5dbe5510184d7bae7cd406b8cec72c714f34bb40e30741e445a491c0.hk.png)

1. 將以下文本複製並粘貼到 **正文/消息** 欄位中，並突出顯示 `RESUME ID PLACEHOLDER`。

   ```text
   發送 [ResumeId (text)] = "RESUME ID PLACEHOLDER" 和 [ResumeTitle (text_1)] = "RESUME TITLE PLACEHOLDER" 和 [ResumeNumber (text_2)] = "RESUME NUMBER PLACEHOLDER" 到工具 "通知 Teams 應聘者頻道" 在子代理 "申請接收代理"
   ```

   ![替換履歷 ID 佔位符文本](../../../../../translated_images/3.1_40_ReplaceResumeIDPlaceholder.eb61590503cb37d89121aaed6d979a4272aa30c87700206e04db8005e60b294f.hk.png)

1. 選擇右側的 **閃電圖標** 或 **fx 圖標**。

   搜索 `resume` 並從 _新增行 Dataverse_ 操作中選擇 **履歷** 參數，因為它包含創建的履歷行的 `ID` 值。

   選擇 **添加**。

   ![選擇履歷參數](../../../../../translated_images/3.1_41_SelectResumeParameter.61c4457c33e5d1b596169857535bfc560ef677264f8798e9148ceac999eeaeb9.hk.png)

1. 突出顯示 `RESUME TITLE PLACEHOLDER`。選擇右側的 **閃電圖標** 或 **fx 圖標**。

   搜索 `title` 並從 _新增行 Dataverse_ 操作中選擇 **履歷標題** 參數，因為它包含創建的履歷行的 `履歷標題` 值。

   選擇 **添加**。

   ![選擇履歷參數](../../../../../translated_images/3.1_42_SelectResumeTitleParameter.6c887607128f928da15c4cf6c22254d0473bc22514aa883462fd812bf14245e0.hk.png)

1. 突出顯示 `RESUME NUMBER PLACEHOLDER`。選擇右側的 **閃電圖標** 或 **fx 圖標**。

   搜索 `resume number` 並從 _新增行 Dataverse_ 操作中選擇 **履歷編號** 參數，因為它包含創建的履歷行的 `履歷編號` 值。

   選擇 **添加**。

   ![選擇履歷參數](../../../../../translated_images/3.1_43_SelectResumeNumberParameter.ca19197525250483a7e94598b621072b47ebdf5deb939e1387c979e807ddc554.hk.png)

1. 我們已完成配置此操作以及代理流程 🙌🏻 你做得很好！現在通過選擇 **保存草稿** 保存事件觸發流程。

   ![保存草稿](../../../../../translated_images/3.1_44_SaveDraft.0c9eee19f0c7cb8483b8d31bc17e1dd54075352d22f0f44603a9d52b52429188.hk.png)

1. 我們現在需要編輯代理流程的詳細信息，選擇 **返回**。

   ![選擇返回](../../../../../translated_images/3.1_45_Back.3f85535977bdb02231a0fdb8465e0e8b7d86fd5342ff933e4ae8bf9610279989.hk.png)

1. 在 **詳細信息** 部分選擇 **編輯**，並將 **計劃** 更新為 **Copilot Studio** 選項。

   選擇 **保存**。

   ![更改 Copilot Studio 計劃](../../../../../translated_images/3.1_46_ChangePlanDetails.6ab15f1f8bd9ebe55b2c1576c3495f47d1a29d7435e343d4c590e46647601269.hk.png)

1. 將出現一個模態窗口，要求您確認切換到 Copilot Studio 計劃。選擇 **確認**。

   ![確認更改 Copilot Studio 計劃](../../../../../translated_images/3.1_47_ConfirmCopilotStudioPlan.bc6ab52e7c982127154b0fb743f85ff9cc05dcab944dffc9485bdbcbe0811397.hk.png)

1. 計劃現在已更新為 **Copilot Studio**。選擇 **編輯**，因為我們需要發布事件觸發流程以供代理使用。

   ![編輯流程](../../../../../translated_images/3.1_48_PlanChangedAndEdit.3c3207766a648817f7a7878c3a6f684cf41cdceea4dca8f6fc43b7315c8dd648.hk.png)

1. 選擇 **發布**。

   ![發布](../../../../../translated_images/3.1_49_Publish.38ff814cfce6b3be1076cafb0c28e4e344f75d8cd4117fabed13ad361d4fde3f.hk.png)

   太棒了！事件觸發流程現在已發布 😃

   ![已發布](../../../../../translated_images/3.1_50_Published.449e7867f7b027ae8a524c749357a1b931955062828bacc3b5a51e979755ef4a.hk.png)

接下來，我們將創建一個新的代理流程，該流程將由子代理 **申請接收代理** 調用。

### 實驗 3.2 - 使用自適應卡通知 Teams 頻道

我們現在將為子代理 **申請接收代理** 創建一個新的代理流程，該流程使用事件觸發傳遞的值，向 Teams 頻道發布自適應卡。此自適應卡將提醒 HR 招聘團隊自動上傳的 PDF，以便他們進行審核。

讓我們開始吧！

1. 在 **招聘代理** 中選擇 **代理** 標籤，然後選擇 **申請接收代理**。

   ![選擇申請接收代理](../../../../../translated_images/3.2_01_SelectApplicationIntakeAgent.0e9dd3da5c52e9f59ab3a4545c01897ad830853b650ec42f7f8424aa530e0409.hk.png)

1. 向下滾動到 **工具** 並選擇 **+ 添加**。

   ![添加工具](../../../../../translated_images/3.2_02_AddNewTool.7c62275fd9f28cdc1923ea056a148171048dc568ff78056958fd54862133f90e.hk.png)

1. 將出現 **添加工具** 模態窗口。選擇 **+ 新工具**。

   ![選擇新工具](../../../../../translated_images/3.2_03_SelectNewTool.215e7637a9f065a3799a1ecf248eed1e859f201d2dfdfab71a7c1dc18e454e2d.hk.png)

1. 選擇 **代理流程**。

   ![選擇代理流程](../../../../../translated_images/3.2_04_SelectAgentFlow.7bc12b3435efccc0cfee8f563640562f87d173b436b3313a3d1256fe35024907.hk.png)

1. 接下來將加載 **代理流程設計器**。在 **當代理調用流程時** 觸發器中，選擇 **+ 添加輸入**。

   ![選擇添加輸入](../../../../../translated_images/3.2_05_SelectAddAnInput.f3dc8465f490929baccb0f2dc72b50629b1435ff8a3861f7974885d1d36cdeb1.hk.png)

1. 選擇 **文本** 作為用戶輸入類型。

   ![選擇文本](../../../../../translated_images/3.2_06_SelectText.93585b4af8c4e277c11c2052b638e249508a24a075987026a6ec346e75184217.hk.png)

1. 在輸入文本欄位中，複製並粘貼以下內容作為輸入參數名稱。

   ```text
   ResumeId
   ```

   ![ResumeId 輸入](../../../../../translated_images/3.2_07_ResumeIdInput.a9e127e343856d6c6d45dd1251cade0503bad9484bc563c02155390951b1faa5.hk.png)

1. 重複相同步驟添加第二個文本輸入。複製並粘貼以下內容作為輸入參數名稱。

   ```text
   ResumeTitle
   ```

   ![ResumeTitle 輸入](../../../../../translated_images/3.2_08_ResumeTitleInput.c71ecd364a974a93abb0de876807c2e9bde59fcea6df317babeb20764b636f26.hk.png)

1. 重複相同步驟添加第三個文本輸入。複製並粘貼以下內容作為輸入參數名稱。

   ```text
   ResumeNumber
   ```
   ![ResumeNumber 輸入](../../../../../translated_images/3.2_09_ResumeNumberInput.a6c060000354deab51dffef3c1ad9f13378cfeabdafdb7a33c2a591bfd044709.hk.png)

1. 還記得在 [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request) 中，我們在代理的主題中添加了一個自適應卡嗎？這次，我們將在代理流程中添加自適應卡。我們現在將向代理流程添加另一個操作，該操作將向 Teams 頻道發布自適應卡。

   選擇觸發器下方的 **+ 圖標**。

   ![添加新操作](../../../../../translated_images/3.2_10_AddNewAction.4474a2150991cac246d5e4091a74ba91e76e1c5bafa34ad985a8567c09dcdd35.hk.png)

1. 選擇 **在聊天或頻道中發布卡片** 操作。

   ![選擇在聊天或頻道中發布卡片操作](../../../../../translated_images/3.2_11_SelectPostCardInAChatOrChannel.97de43ed1c883b14d0150ae65efaa90f53f0815bdf57ec10e0e22cbd3e22ce06.hk.png)

1. 需要使用您的登錄用戶帳戶創建到 Microsoft Teams 的連接引用。選擇 **登錄**。

   ![選擇登錄](../../../../../translated_images/3.2_12_SignInToCreateConnectionReference.2297f8b702d71508f1b21a3ed4046df4846dc03b13932a20e5c445403559ac1f.hk.png)

1. 選擇您的用戶帳戶，然後選擇 **允許訪問**。

   ![選擇允許訪問](../../../../../translated_images/3.2_13_AllowAccess.31cbf82606d75231108bd4f2bfeafffda3cd7e7e760cd46004c2705afe050aaf.hk.png)

1. 對於以下輸入參數，

   | 參數 | 設置方式 | 詳細信息 |
   |------|----------|----------|
   | **以...身份發布** | 下拉選單 | 選擇 `Flow bot` 選項 |
   | **發布到** | 下拉選單 | 選擇 `頻道` 選項 |
   | **團隊** | 下拉選單 | 選擇您環境中可用的團隊，您有權訪問以完成此實驗練習 |
   | **頻道** | 下拉選單 | 選擇您環境中可用的頻道，您有權訪問以完成此實驗練習 |

   ![配置輸入參數](../../../../../translated_images/3.2_14_ConfigureParameters.8c21924f90db3acaa33d4e35ef43c70556ba4cc37207a195ac654e55a43400a6.hk.png)

1. 接下來，我們將配置 **自適應卡** 欄位。選擇 **自適應卡** 欄位。

   ![選擇自適應卡欄位](../../../../../translated_images/3.2_15_SelectAdaptiveCardParameter.65323056be6174d2eed7422650aaa70fc16396148f90b8af1801110d7a30d66f.hk.png)

1. 打開 [Resume Table Updated JSON 文件](../../../../../docs/operative-preview/03-automate-triggers/assets/3.2_ResumeTableUpdated.json)，複製其全部內容，並粘貼到自適應卡欄位中。

   ![複製並粘貼 JSON](../../../../../translated_images/3.2_16_JSON.f022097fb7139bd12514abb8fdc518309ea940f005cc94a11ba159359cde784b.hk.png)

1. 與我們在 [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request) 中所做的類似，我們將替換 JSON 貨幣中的現有值為實際值或動態內容。

   首先，讓我們更新 `selectAction` 屬性中的 `url` 屬性的 URL。此 URL 將替換為 **招聘中心** 模型驅動應用中的履歷系統視圖的 URL。這將允許招聘人員選擇操作並被定向到模型驅動應用中的履歷系統視圖。

   突出顯示當前的 URL 值並刪除它。

   ![選擇 URL 值](../../../../../translated_images/3.2_17_SystemViewURL.5e51fd894ac916f436107c7b668d66ca87ca8bdfd7affeb7dae1b10fa8ff5afb.hk.png)

1. 在 **招聘中心** 模型驅動應用中，使用左側菜單導航到 **履歷** 系統視圖並複製 URL。然後返回代理流程，並將複製的 URL 粘貼到 `selectAction` 屬性中的 **url** 屬性中。

   ![複製履歷系統視圖 URL](../../../../../translated_images/3.2_18_CopyResumesSystemViewURL.14d9f55c7db15977a12dfe2a5df95aab5cf241e646b08f9838cff31aaa27a381.hk.png)
1. 您應該看到以下內容，其中以黃色標示的是您的 **Hiring Hub** 模型驅動應用程式的環境詳細資料。

     | 參數 | 值 | 說明 |
     |----------|------------|---------|
     | **Organization URI** | GUID | Dataverse/Dynamics 365 環境的組織 URL |
     | **appid** | GUID | 要開啟特定的模型驅動應用程式，可使用 appid 或 appname 作為查詢參數。在此情況下，使用的是 appid |
     | **viewid** | GUID | 查詢參數，表示視圖的 ID |

       ![貼上 URL](../../../../../translated_images/3.2_19_PasteURL.41f3fdd66190c8ba478857f91c90eb05ee9621243bda7b7ad26eb5802b8e970d.hk.png)

1. 接下來，我們將為幾個屬性添加動態內容值。首先，設定顯示由事件觸發器自動創建的行的履歷編號參考的文字。

      選擇 **面板** 圖示以載入操作面板。

       ![選擇面板圖示](../../../../../translated_images/3.2_20_SelectPannelIcon.786a4147ba12e0e62648c66f14fb2b9a7f89b27c3a610f43420e31cb0c9fb5da.hk.png)

1. 向下滾動到 `RESUME NUMBER PLACEHOLDER` 的 `text` 屬性所在的行。選中佔位符值並刪除它。

       ![刪除佔位符](../../../../../translated_images/3.2_21_DeleteResumeNumberPlaceholder.6ffd7a5a073f9d9a11e0e119c87e827243de237f70ebc3ab37dfdd36de615130.hk.png)

1. 點擊雙引號之間，然後選擇右側的 **閃電圖示** 或 **fx 圖示**。

      在 **動態內容** 標籤中選擇 **ResumeNumber** 參數並選擇 **添加**。

       ![添加 ResumeNumber 參數](../../../../../translated_images/3.2_22_SelectResumeNumberParameter.de5a6eecb3ee092441d841ad137dfecd9f8d503a370ff60eb5ccdc0267e37df0.hk.png)

1. **ResumeNumber** 參數現在將作為動態內容添加到 `text` 屬性中。

       ![ResumeNumber 動態內容](../../../../../translated_images/3.2_23_ResumeNumberDynamicContent.129a566ac6e9d448b268b828da5766a7056779ac167f65b498e2ca21d703b7f0.hk.png)

1. 我們將對 `RESUME NAME PLACEHOLDER` 重複相同的步驟。向下滾動到 `RESUME NAME PLACEHOLDER` 的 `text` 屬性所在的行。選中佔位符值並刪除它。

       ![Resume Name Placeholder](../../../../../translated_images/3.2_24_ResumeNamePlaceholder.6c879b99ae375892f7e0a511bfedd5fa9e60a8dea71ea2a44c2a7a04c8389f43.hk.png)

1. 點擊雙引號之間，然後選擇右側的 **閃電圖示** 或 **fx 圖示**。

      在 **動態內容** 標籤中選擇 **ResumeTitle** 參數並選擇 **添加**。

       ![添加 ResumeTitle 參數](../../../../../translated_images/3.2_25_SelectResumeTitleParameter.18c769bbd2c60e362a56f6055e151ed6287903cb625addcdfbb43044828d7378.hk.png)

1. **ResumeTitle** 參數現在將作為動態內容添加到 `text` 屬性中。

       ![ResumeTitle 動態內容](../../../../../translated_images/3.2_26_ResumeTitleDynamicContent.7219e078f71fc0d5d4a6bb228ba2d53f0898ba26a27c5eb859df90d12dd52c70.hk.png)

1. 我們將對代表招聘人員應在何時審核履歷的 **Due Date** 值重複相同的步驟。向下滾動到 `May 21, 2023` 的 `text` 屬性所在的行。

       ![選擇允許訪問](../../../../../translated_images/3.2_27_DueDatePlaceholder.17c6003cc9ec1141b0aeb5cde203098a7f5534fa11f01a3cbffb66206ed1633a.hk.png)

1. 刪除此日期佔位符值，然後點擊雙引號之間。

       ![刪除](../../../../../translated_images/3.2_28_DeleteDueDatePlaceholder.9a3df55fb3c9ed72e61e0a60dc3344335b0444ff537c9fb51036b0442a85d268.hk.png)

1. 選擇右側的 **閃電圖示** 或 **fx 圖示**，並在 **函數** 標籤中輸入以下表達式並選擇 **添加**。

       ```text
       addDays(utcNow(), 3, 'MMM dd, yyyy')
       ```

      此表達式使用了兩個函數。

     | 函數 | 說明 |
     |----------|------------|
     | **addDays** | 將指定的天數添加到給定日期，並以字串格式返回結果日期 |
     | **utcNow** | 以字串格式返回當前的協調世界時 (UTC) 日期和時間 |

      對於 utcNow 值，我們將日期格式化為月份和日期，後接年份。

       ![表達式 Due Date](../../../../../translated_images/3.2_29_01_ExpressionDueDate.a4fa31985f5500971f2fc6da0e81e008af12be19d54a30a240764b74a4b2dbcb.hk.png)

      表達式現在將添加到 `text` 屬性中。

       ![表達式 Due Date](../../../../../translated_images/3.2_29_02_ExpressionDueDate.6159288450731c7b09628af70f0c9a6d92590ca7c7e39e8a524ae8af7c511f2c.hk.png)

1. 最後，我們將更新 JSON 貨物中 `actions` 陣列屬性底部的 `url` 屬性的 URL。當前的佔位符 URL 將替換為 **Hiring Hub** 模型驅動應用程式中履歷行的 URL。這將允許招聘人員選擇自適應卡的 `Action.OpenURL` 操作，並直接進入模型驅動應用程式中的履歷。

       ![刪除查看履歷 URL 佔位符](../../../../../translated_images/3.2_30_ViewResumeURLPlaceholder.f27af6cadfb54fb977f0b46ea3ec42ee0638d38ebc5d294eff5da52abf9d4a1b.hk.png)

1. 在 **Hiring Hub** 模型驅動應用程式中，使用左側菜單打開 **Resumes** 系統視圖中的一行。履歷行將作為表單載入到模型驅動應用程式中。

      複製履歷行的 URL。

    ??? info "如果您退出/關閉了 **Hiring Hub** 模型驅動應用程式，如何返回"

        1. 瀏覽至 [https://make.powerapps.com](https://make.powerapps.com)，並確保您處於用於這些實驗的開發者環境中，否則請切換到該環境。
        
        ![瀏覽至 make.powerapps.com](../../../../../translated_images/3.2_31_Note_01_BrowseToURL.a13dfc8b05a0b34f3a4c853f3d3e418864176b52b1b40c069da7712af5562aa5.hk.png)

        1. 在左側菜單窗格中選擇 **Apps**，然後選擇 **Hiring Hub** 模型驅動應用程式的 **播放** 圖示以在瀏覽器中載入。
        
        ![選擇 Hiring Hub 模型驅動應用程式](../../../../../translated_images/3.2_31_Note_02_HiringHubApp.a09b6ea28b4fea8932809cb847cb0ea3d8faeb7b7b5604852de1f46ab1e9741b.hk.png)

       ![複製履歷行 URL](../../../../../translated_images/3.2_31_CopyResumeURL.f6156f8792526129c2613922f0137221b2944fa8ffe7c04766d710521ad8765b.hk.png)

1. 然後返回代理流程，選中當前的佔位符 URL 值並刪除它。

       ![刪除履歷行 URL 佔位符](../../../../../translated_images/3.2_32_SelectResumeURLPlaceHolder.8db783de292428eaa8937242eba4a54ebb1df7bf4c1bc9391b016ee545fb2b9f.hk.png)

1. 然後將複製的 URL 貼到 `url` 屬性中的 `url property`。

       ![貼上複製的履歷行 URL](../../../../../translated_images/3.2_33_PasteResumeRowURL.d7ba92493d7597b89f75e2f17f76846ac17a9ba89c2e36729dc6b5dc1599b047.hk.png)

1. 您應該看到以下內容。刪除末尾的 `GUID` ID 值。我們將替換此動態內容 - **ResumeId** 參數。

       ![刪除查看履歷 URL 佔位符](../../../../../translated_images/3.2_34_DeleteViewResumePlaceholderURL.7b26209eaeef6dc0a21b16140d05fe2f0e38de5f714575edd24d21dded58102a.hk.png)

1. 選擇右側的 **閃電圖示** 或 **fx 圖示**。

      在 **動態內容** 標籤中選擇 **ResumeId** 參數並選擇 **添加**。

       ![ResumeId 參數](../../../../../translated_images/3.2_35_ResumeIdParameter.3dc710a7f5216944387f4d5f82c0a372eee23ee5259dec04147ad00e9c454d7d.hk.png)

1. **ResumeId** 現在將作為動態內容添加。以下以黃色標示的是您的 **Hiring Hub** 模型驅動應用程式的環境詳細資料。

     | 參數 | 值 | 說明 |
     |----------|------------|---------|
     | **Organization URI** | GUID | Dataverse/Dynamics 365 環境的組織 URL |
     | **appid** | GUID | 要開啟特定的模型驅動應用程式，可使用 appid 或 appname 作為查詢參數。在此情況下，使用的是 appid |
     | **id** | GUID | 查詢參數，表示履歷行的 ID |

       ![ResumeId 動態內容](../../../../../translated_images/3.2_36_ResumeIdDynamicContent.a1a40dfb4a83b60f1b75b02160890e3fec41c2c7df8adf32e02d652a57c1ee87.hk.png)

1. 我們已完成配置 **Post card in a chat or channel** 操作 👏🏻 點擊 **x** 圖示退出操作配置面板。

       ![關閉面板](../../../../../translated_images/3.2_37_CloseActionPanel.23d07107381411aa9494ef36fb240682a0727a63e6f15082074b34a1defd517b.hk.png)

1. 最後，我們將配置最後一個操作，**Respond to the agent**，通過發送文字回覆代理以結束處理。

      在 **Respond to the agent** 操作中，選擇 **+添加輸出**。

       ![選擇添加輸出](../../../../../translated_images/3.2_38_AddAnOutput.de1a0e49033cb077eb5d2c226152bbb06dc12fb95d0496c69d469eecdb46c0ae.hk.png)

1. 選擇 **文字** 作為輸出的類型。

       ![選擇文字作為輸出類型](../../../../../translated_images/3.2_39_SelectText.4e1e82c35fe9d1b569b668092d405aa9b0c81fbe67e7de68a660f2083ed3afdd.hk.png)

1. 輸入以下作為輸出的名稱。

       ![結束對話輸出](../../../../../translated_images/3.2_40_EndConversationOutput.e392b58847d8439443c89459fccbbd88d4ea5e5fa562749b77407c46b9ff4ca4.hk.png)

1. 輸入以下作為輸出的值。

       ```text
       Finished
       ```

       ![結束對話輸出值](../../../../../translated_images/3.2_41_EndConversationOutputValue.2cb836900ee9fca802926676e613b077938f1106cc16e77ddd77af64ce92dcc8.hk.png)

1. 我們現在已完成配置代理流程。選擇 **保存草稿** 以保存代理流程。保存後將出現確認消息。

       ![保存草稿](../../../../../translated_images/3.2_42_SaveDraft.1bb26eec40faf5d2c244d93f869344915e90423623e07e02cac2c1f8c73d1a4a.hk.png)

1. 在發布代理流程之前，我們需要更新代理流程的詳細資料。選擇 **概覽** 標籤並選擇 **編輯**。

      在流程名稱欄位中輸入以下內容。

       ```text
       Notify Teams Applicant channel
       ```      

      然後選擇 **刷新** 圖示以使用 AI 更新代理流程的描述。

      接著選擇 **保存** 以保存代理流程的更新詳細資料。

       ![編輯並保存詳細資料](../../../../../translated_images/3.2_43_EditDetails.f0c9b53a9c1b29e4aa3c34774680559ae9173f77b3a37817bab2296b77ffcca7.hk.png)

1. 返回 **設計器** 標籤並選擇 **發布** 以發布代理流程。保存後將出現確認消息。

       ![發布代理流程](../../../../../translated_images/3.2_44_PublishAgentFlow.3014e6de5e53aa5fc2021bf6e11b901c4990b4fbb4d4cee33cc6d5b6cc641ed8.hk.png)

1. 現在需要將代理流程作為工具添加到 **Application Intake Agent** 中。返回 **Hiring Agent** 並選擇 **Agents** 標籤，然後選擇 **Application Intake Agent**。

       ![選擇 Application Intake Agent](../../../../../translated_images/3.2_45_ApplicationIntakeAgent.0446b1762d0f499e880e7984f59669639193566f72539cd4fba5c62cd1fe8726.hk.png)

1. 在代理的 **詳細資料** 部分，我們將更新 **描述** 欄位。複製以下內容並貼到描述文字的末尾。

       ```text
       並通知 Teams Applicant 頻道
       ```

       ![更新代理描述](../../../../../translated_images/3.2_46_UpdateAgentDescription.56344699cd3cc5e417e8f95362ed2288d0c0391f33bd98872e7e008a545175f0.hk.png)

1. 接下來，我們將代理流程添加為工具。向下滾動並選擇 **+ 添加**。

       ![選擇添加](../../../../../translated_images/3.2_47_AddTools.c7557e272bd731129dffe9edebba3b04170d27806aaa14fffbe3d66b7b61808b.hk.png)

1. 選擇之前創建的代理流程，**Notify Teams Applicant Channel**。

       ![選擇代理流程](../../../../../translated_images/3.2_48_NotifyTeamsApplicantChannelAgentFlow.5985f570786edef4eac93455f7a07978c0daf54e1371660bfd56a4c16b6aaf79.hk.png)

1. 接著選擇 **添加並配置**。

       ![選擇添加並配置](../../../../../translated_images/3.2_49_AddAndConfigure.c2d6cccfa9e4bb23ff58b615ad16d0b3ade4ef867b73b9196a45df6990d8072f.hk.png)

1. 在代理流程的 **輸入** 部分，之前在代理流程中配置的三個輸入是可見的。默認情況下，**填充方式** 配置設置為 **使用 AI 動態填充**。我們將保持此設置不變，因為事件觸發器的提示（在最後一個操作中，**將提示發送到指定的協作機器人進行處理** - 這是 **Lab 3.1 - 自動上傳通過電子郵件接收的履歷到 Dataverse** 的第 38-44 步）將包含 AI 將提取的參數值。

       ![工具代理流程輸入](../../../../../translated_images/3.2_50_Inputs.9fbb57b83b533d5a60f957505bb1e5430886ec9e6c70c10ed1c641d6b33fcc21.hk.png)

1. 現在工具已添加到 **Application Intake Agent** 中，代理的指示需要更新。選擇 **返回箭頭** 圖示以返回代理列表。

       ![選擇返回箭頭圖示](../../../../../translated_images/3.2_51_SelectBack.6a9a55176d931895777822d3f9276d5d12ffe379a8860dd521e1c895e8188bba.hk.png)

1. 在 **Hiring Agent** 的 **Agents** 標籤中選擇 **Application Intake Agent**。

       ![選擇 Application Intake Agent](../../../../../translated_images/3.2_52_SelectApplicationIntakeAgent.039140313422e833389fd134b3a70a0eed11ba175ede5dbdc4abcce6004c7d2d.hk.png)

1. 在 **指示** 欄位中，在 `2.Post-Upload` 指示後新增一行。複製並貼上以下指示。

       ```text
       通過電子郵件上傳履歷的流程
       1. 當您收到消息時，**將 [ResumeId (text)] = "1680265f-5793-f011-b41b-7c1e525be9f7" 和 [ResumeTitle (text_1)] = "TAYLOR TESTPERSON (FICTITIOUS).pdf" 和 [ResumeNumber (text_2)]= "R01026" 發送到子代理 "Application Intake Agent" 中的工具 "Notify Teams Applicant channel"，調用 [AGENT FLOW PLACEHOLDER]
       ```

       ![更新 Application Intake Agent 的指示](../../../../../translated_images/3.2_53_PasteCopiedInstructions.f24ed715e907cf023449a54b894354ca1252b198e9be694eec2875f7f647f9c2.hk.png)

1. 選中 `[AGENT FLOW PLACEHOLDER` 文本。

       ![選中佔位符](../../../../../translated_images/3.2_54_HighlightPlaceholder.6c3fcac3c8f4fb6e5cce2dbd6b6548b84652d009e20fa4a01183a9a1b42b24fb.hk.png)

1. 輸入斜線字符 `/`，然後選擇 **Notify Teams Applicant Channel** 工具。

       ![選擇 Notify Teams Applicant Channel 工具](../../../../../translated_images/3.2_55_NotifyTeamsApplicatnChannelTool.2e3dd1e9ee9b2dfe10e1f2feb7e3b74b08856ce3afb16dafae1f2c4b73da904f.hk.png)
1. 根據指示，事件觸發器的最後一個動作（**向指定的 Copilot 發送提示進行處理**）將提示包含參數值發送回代理後，**Application Intake Agent** 現在將啟動代理流程。

   選擇 **Save** 以保存更新後的 **Application Intake Agent** 指示。

   ![選擇 Save](../../../../../translated_images/3.2_56_Save.6abb0131f96b20d3753b5990313eaea6a237bef2bf0e2103a2ee5ba570fd7c04.hk.png)

1. 保存代理後，指示將會更新。

   ![指示已更新](../../../../../translated_images/3.2_57_InstructionsUpdated.5bfbfe2ca1da16284358a9917246bd8676cd6c095839ed1c69361d992cacd2b3.hk.png)

1. 現在需要 **Publish** **Hiring Agent**。在右上角選擇 **Publish**，在出現的 _Publish this agent modal_ 中選擇 **Publish**。

   ![發布 Hiring Agent](../../../../../translated_images/3.2_58_PublishAgent.e7ec81c81b735de0cd11516aa944c759ea510e2b0bc9acf9f00d42d788896991.hk.png)

1. 發布後，將出現確認消息，表示代理已成功發布。

   ![確認消息](../../../../../translated_images/3.2_59_AgentPublished.d15e01232544cf08943260dfbf61c92339dbd187620349e7c5a43add4796ed12.hk.png)

現在可以測試代理了！

### Lab 3.3 - 測試事件觸發器

1. 要執行事件觸發器，需要發送一封附有簡歷 PDF 文件的電子郵件。在 Outlook 中，撰寫一封新郵件。

   | 電郵組件 | 詳情 |
   |----------|------------|
   | **收件人** | 使用您登入的用戶帳戶作為值 |
   | **文件附件** | 上傳 [TAYLOR TESTPERSON (FICTITIOUS)](../../../../../docs/operative-preview/test-data/resumes/TAYLOR%20TESTPERSON%20(FICTITIOUS).pdf) 文件 |
   | **正文** | 複製並粘貼以下內容作為電子郵件正文 |

   ```text
   Dear Hiring Manager,

   I am writing to express my interest in the Senior Power Platform Engineer position at your organization. With over nine years of experience delivering secure and scalable solutions on Microsoft cloud platforms, I am confident in my ability to contribute effectively to your team.

   In my most recent role as Lead Power Platform Engineer, I developed an automated resume-intake pipeline, reducing manual triage and improving searchability. I have delivered HR case management applications, introduced solution-aware flows, and implemented PR checks to enhance deployment lead times. My expertise includes Power Apps, Power Automate, Power Pages, Dataverse, and a range of Microsoft 365 services, as well as integration with Graph/REST APIs and Azure Functions.

   Previously, I developed Teams approvals with adaptive cards, cutting approval times to the same day, and created robust error-handling frameworks. My background also includes migrating legacy workflows to Power Automate and building self-service portals adopted by hundreds of employees.

   I hold a B.Sc. in Computer Science and am certified as a Power Platform Developer (PL-400) and Solution Architect (PL-600). I am also passionate about mentoring and have volunteered with local maker groups.

   Please find my CV attached for your consideration. I would welcome the opportunity to discuss how my skills and experience align with your needs.

   Thank you for your time and consideration.

   Kind regards,
   Taylor Testperson
   ```

   **發送**撰寫好的電子郵件。

   ![撰寫附有 PDF 文件的電子郵件](../../../../../translated_images/3.3_01_ComposeEmailWithAttachment.eccba1bbcc276b4373277b193a66d8818b712c6ab9468ee12902545522b670f7.hk.png)

1. 在 Power Automate 製作人門戶的事件觸發器流程中，選擇 **Refresh** 圖標以查看成功執行的流程。

   ![選擇刷新圖標查看流程執行](../../../../../translated_images/3.3_02_FlowRun.0e99756ebc5fba371dc72719b0619736626934461e58db2dc153535cbabcc1e8.hk.png)

1. 回到 Copilot Studio 的 **Hiring Agent**，選擇 **Activity** 標籤。

   ![選擇 Activity 標籤](../../../../../translated_images/3.3_03_SelectActivity.11d78735a8a2a1f64443d285deb47f2bacc5bd53ded039791215f9465dbc3f76.hk.png)

1. **Activity** 標籤將顯示 **Hiring Agent** 的所有活動。會有一個名為 **Automated** 且狀態為 **Complete** 的活動。此活動代表事件觸發器和已啟動的代理流程。

   ![活動已完成](../../../../../translated_images/3.3_04_StatusComplete.dbe14ffb9414b0f4d869841426c4ca595d7a664bf13f4b5e2e29a4e251b9064c.hk.png)

1. 選擇該活動，並在活動地圖中選擇事件觸發器。在右側面板中，注意提示中的輸入參數如何包含來自 **Dataverse** 行的 `Resume Id`、`Resume Title` 和 `Resume Number` 參數值。這些是之前在 **Lab 3.1 - Automate uploading resumes to Dataverse received by email** 的第 18 - 27 步中配置的動態內容值。

   ![事件觸發器](../../../../../translated_images/3.3_05_EventTrigger.cbd73cd43a79e88e782d1e47ac8ddacdbe30d582a4da61a31010f44a9dacdd12.hk.png)

1. 返回 **Hiring Hub** 模型驅動應用，在 **Resumes system view** 中選擇 **Refresh** 以刷新視圖。通過事件觸發器創建的簡歷新行現在將列出。

   ![簡歷行已創建](../../../../../translated_images/3.3_06_ResumeRowCreated.9ab850d8d7c066aad8531409b00a4de5f214b4d8d209d39fa0d493d5c55e041d.hk.png)

1. 回到 Copilot Studio，並在活動地圖中選擇 **Application Intake Agent** 的 **Notify Teams Applicant Channel** 代理流程。在右側面板中，注意輸入值來自 Dataverse 行。這是事件觸發器的最後一個動作（**向指定的 Copilot 發送提示進行處理**）發送的提示中包含的參數值，這些值來自新創建的 Dataverse 行。這就是如何將事件觸發器的參數值傳遞給代理流程。

   ![選擇代理流程](../../../../../translated_images/3.3_07_NotifyTeamsApplicantChannel.9b6c4654197efca9c88dde72cfb38812038ef5f6bdce8c309046c02643092bb6.hk.png)

1. 最後，查看在 **Microsoft Teams** 頻道中發布的自適應卡。在頻道中，我們會看到顯示新創建的 Dataverse 簡歷行信息的自適應卡。將鼠標懸停在自適應卡開頭的超鏈接上，注意 URL 是我們之前在 JSON（**Lab 3.2 - Notify a Teams channel using an adaptive card** 的第 15 - 19 步）中配置的簡歷系統視圖 URL。

   ![自適應卡簡歷表系統視圖 URL](../../../../../translated_images/3.3_08_AdaptiveCardResumeTableURL.5a59821d60c8698e5c9e4746806b975bbdf3c4400dc0bb02a53f350bdea569e9.hk.png)

1. 選擇超鏈接，您將被引導至瀏覽器中的 **Hiring Hub** 模型驅動應用的簡歷系統視圖。

   ![Hiring Hub 模型驅動應用中的簡歷系統視圖](../../../../../translated_images/3.3_09_ResumeTableSystemView.81f52ab85aadda7d9131ced31d024fb4b411ccf600dd230d9d7e931c476e271c.hk.png)

1. 返回 Microsoft Teams 頻道中發布的自適應卡。這次，將鼠標懸停在 **View Resume** 上，這是自適應卡的 `Action.OpenURL` 動作。注意 URL 是我們之前在 JSON（**Lab 3.2 - Notify a Teams channel using an adaptive card** 的第 30 - 36 步）中配置的簡歷行 URL。

   ![自適應卡簡歷行 URL](../../../../../translated_images/3.3_10_AdaptiveCardResumeRowURL.2063a075c2d4adec27dfcc2ea4c01a385d791e0c4fc127caba912bde14bf77d6.hk.png)

1. 選擇該動作，您將被引導至瀏覽器中的 **Hiring Hub** 模型驅動應用的簡歷行表單。

   ![Hiring Hub 模型驅動應用中的簡歷行](../../../../../translated_images/3.3_11_ResumeRow.6f051ed512d396712a04ee98319d6643516e0bbfbf8a9de07d3df7d264563b9c.hk.png)

## ✅ 任務完成

恭喜！👏🏻 幹得好，行動者。

✅ 事件觸發器：您已創建一個事件觸發器，將 Dataverse 參數值傳遞給代理流程。  
✅ 建立代理流程：使用 Dataverse 參數值向 Microsoft Teams 頻道發布自適應卡，通知 HR 招聘團隊。  
✅ 更新子代理指示：在事件觸發器完成後啟動流程。

這使得 **Hiring Agent** 能夠在收到附有簡歷的電子郵件時自動運作，並通知 HR 招聘團隊進行人工審查。

這是 **Lab 03 - Automating candidate application emails** 的結尾，點擊以下鏈接進入下一課程。

⏭️ [進入 **Authoring Agent Instructions** 課程](../04-agent-instructions/README.md)

## 📚 戰術資源

📖 [在 Copilot Studio 中使您的代理自主運作](https://learn.microsoft.com/training/modules/autonomous-agents-online-workshop/?WT.mc_id=power-188561-ebenitez)  
📖 [添加事件觸發器](https://learn.microsoft.com/microsoft-copilot-studio/authoring-trigger-event?WT.mc_id=power-188561-ebenitez)  
📖 [使用代理流程](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-188561-ebenitez)  
📖 [Power Automate 觸發器介紹](https://learn.microsoft.com/power-automate/triggers-introduction?WT.mc_id=power-188561-ebenitez)  
📖 [使用 Power Automate 流與代理](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create?WT.mc_id=power-188561-ebenitez)  
📖 [Copilot Studio 的數據丟失防護](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention?WT.mc_id=power-188561-ebenitez)  

---

**免責聲明**：  
此文件已使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於重要信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。