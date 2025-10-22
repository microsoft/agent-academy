<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cc4afa4a5a11c9d03896decfbcbd4060",
  "translation_date": "2025-10-22T19:22:50+00:00",
  "source_file": "docs/recruit/09-add-an-agent-flow/README.md",
  "language_code": "tw"
}
-->
# 🚨 任務 09：為主題新增代理流程以進行自動化

## 🕵️‍♂️ 行動代號：`自動化能量中心行動`

> **⏱️ 行動時間窗口：** `約 30 分鐘`

🎥 **觀看操作指南**

[![代理流程影片縮圖](../../../../../translated_images/video-thumbnail.ede12df9aaebcc8996680c8b6555d309b53bdf33d1b0165cae3b5173a6bcdd73.tw.jpg)](https://www.youtube.com/watch?v=vtLZJT3eBXg "在 YouTube 上觀看操作指南")

## 🎯 任務簡介

您的代理現在可以與使用者對話並提供資訊，但真正的運營卓越需要代理採取行動。本次任務將把您的對話代理轉變為自動化能量中心，透過代理流程賦予其能力。

完成任務後，您將建立一個端到端的設備請求自動化流程，該流程透過自適應卡捕捉使用者輸入，從 SharePoint 獲取資料，透過電子郵件向管理者發送通知，並提供流暢的使用者回饋——所有這些都由代理透過智能工作流程自動化進行協調。

## 🔎 目標

在本次任務中，您將學習：

1. 了解什麼是代理流程，以及它們與 Power Automate 雲端流程的自動化有何不同
1. 學習使代理流程強大的關鍵功能，包括 AI 操作和自然語言編寫
1. 探索代理流程設計器以及如何使用表達式進行動態資料處理
1. 建立一個完整的設備請求自動化流程，整合 SharePoint 資料和電子郵件通知

## 🤔 什麼是代理流程？

代理流程是一種強大的方式，用於自動化重複性任務並整合您的應用程式和服務。可以將它們視為結構化的逐步工作流程，您的代理可以執行這些流程以自動化任務或與其他應用程式和服務連接。您可以將它們視為迷你工作流程，幫助您的代理完成像發送通知、更新記錄或回應事件等操作。

與使用 AI 即時做出決策的自主代理不同，代理流程是**確定性工作流程**——這意味著它們每次都遵循相同的路徑，確保一致且可靠的結果。

簡單來說：

- 它們幫助您的代理完成_事情_，而不僅僅是向使用者_說事情_。
- 它們可在主題和代理之間重複使用，並可由使用者訊息、事件或其他應用程式和服務觸發。

## 🙋🏽 是的，但它與 Power Automate 雲端流程有何不同？

代理流程和 Power Automate 雲端流程都能幫助自動化任務。它們的設計目的不同，工作方式也不同。

### 🤖 Copilot Studio 中的代理流程

**用途：**

- 為 Copilot Studio 中的對話和自主代理（透過代理指令）而設計。
- 專注於智能、AI 驅動的自動化，與業務系統互動。

**優勢：**

- 可直接在 Copilot Studio 中輕鬆建立和管理。
- 非常適合在與使用者的對話中發生的任務自動化，例如提交請假申請。
- 不需要額外的 Power Automate 授權，因為計費基於 Copilot Studio 內的使用量。這可以為企業團隊節省時間和成本。

**限制：**

- 無法共享、複製或指派共同擁有者。
- 代理流程僅在 Copilot Studio 中可見和可用。
- 目前，代理的事件觸發器可在 Power Automate 製作人入口網站中進行編輯。

### ☁️ Power Automate 雲端流程

**用途：**

- 為跨多個應用程式和服務的一般用途自動化而設計。
- 可獨立運行或與代理流程一起工作。

**優勢：**

- 提供廣泛的連接器。
- 非常適合在代理之外自動化流程。
- 可共享、重用並在團隊間管理。

**需求：**

- 您需要 Power Automate 授權才能使用它們。

### 📗 總結

| 使用此工具 | 當您想要 |
| :- | :- |
| 代理流程 | 在代理內自動化任務，使用 AI，並將所有內容保留在 Copilot Studio 中 |  
| Power Automate 雲端流程 | 跨應用程式和服務進行自動化，或在代理之外建立工作流程 |

## 👍🏻 為什麼使用代理流程

代理流程始終遵循固定路徑——在給定相同輸入時，每次都執行相同的操作。

這使它們：

- **可靠** - 您可以信任它們每次都會以相同方式運行。
- **可預測** - 您知道流程運行時會得到什麼結果。
- **基於規則** - 它們遵循您定義的步驟。

其他優勢包括：

- **自動化** - 使您的代理能夠處理重複性任務，例如提交表單或發送通知。
- **連接性** - 可連接超過 1400 個連接器，例如 ServiceNow、SharePoint、Salesforce。或者您可以建立自己的自定義連接器。
- **緊密整合** - 代理流程是代理邏輯的一部分，直接由使用者訊息或對話中的操作觸發。
- **可擴展性** - 可在多個代理或場景中重複使用流程。
- **無需編碼或低代碼** - 您可以使用自然語言或視覺化設計器建立流程。
- **一站式平台** - 您可以在一個地方設計、測試和部署代理流程——Copilot Studio。無需在平台之間切換。

## 🏄🏻‍♂️ 代理流程如何提升您的代理？

代理流程擴展了代理的能力，使其不僅僅是與使用者“聊天”。它們使代理能夠採取行動並與系統互動。

假設您在財務部門工作，經常收到供應商的發票。通常需要有人閱讀每張發票，提取重要細節——金額、日期、發票來源，並檢查是否與您的記錄匹配。然後將其發送給合適的人進行批准。這需要時間和精力。

使用 Copilot Studio 中的代理流程，您可以自動化此過程。當發票到達時，代理可以：

1. 使用智能文件處理技術讀取文件，找出關鍵資訊。
1. 根據您的企業資料檢查細節，確保一切正確。
1. 將其路由到合適的人進行批准。

這節省了時間，減少了錯誤，使整個過程更加順暢。

### 這樣想

- **代理**：智能決策者
- **代理流程**：可靠執行者

### 為什麼重要

- 您可以同時擁有可靠的自動化和靈活的 AI。
- 隨著業務需求的變化，流程易於建立和更新。
- 您可以在團隊間擴展自動化。

## 🔌 使代理流程強大的關鍵功能

1. **自然語言編寫**
    - 您可以用簡單的英文描述您希望流程執行的操作。
    - Copilot 了解您的意圖並為您建立流程。
    - 無需編寫程式碼——只需解釋您的想法。

1. **AI 操作**

    使用 AI 來：

    - 讀取和理解文件或圖片。
    - 將冗長的內容摘要為簡短且有用的答案。
    - 提供智能建議或決策。

1. **生成操作**
    - 這些操作使流程能夠即時適應。
    - 代理可以根據不斷變化的資訊計劃和調整步驟。

1. **整合操作**
    - 將您的流程連接到其他工具，例如 Outlook、Microsoft Teams、ServiceNow、SharePoint 和其他應用程式和服務，透過超過 1400 個內建連接器或您自己的自定義連接器。
    - 這幫助您的代理與您的團隊已使用的應用程式協同工作。

1. **人工介入**
    - 添加需要人員審核或確認的批准步驟。
    - [進階批准](https://learn.microsoft.com/microsoft-copilot-studio/flows-advanced-approvals?WT.mc_id=power-172621-ebenitez) 支援提醒、委派和多階段批准。

## ⚙️ 它們如何運作

1. **觸發**

    一個事件啟動流程——例如使用者提問、從主題中調用流程、排定的時間或其他系統中發生的事件。

1. **操作**

    這些是代理接下來遵循的步驟——發送電子郵件、調用 API、更新 ServiceNow 中的票務。

## 🧶 如何建立代理流程

1. **自然語言**：描述您希望代理執行的操作，Copilot 為您建立流程。
1. **設計器畫布**：在代理流程設計器中拖放操作、條件和循環以建立您的代理流程。

## 🎨 什麼是代理流程設計器？

它是 Copilot Studio 中的一個視覺化工具，幫助您建立、編輯和管理代理流程，提供代理完成任務的逐步指令。即使您是代理流程的新手，它的設計也非常直觀易用。

### 代理流程設計器的主要功能

1. **視覺化畫布**
    - 您可以像查看圖表一樣查看整個流程。
    - 輕鬆放大/縮小、調整視圖或使用迷你地圖導航大型流程。

1. **添加和移除操作**
    - 點擊_加號（+）_按鈕添加新操作，例如發送訊息或更新 SharePoint 列表中的項目。
    - 您可以從連接器中搜索操作，並透過其設定進行配置。
    - 要移除操作，點擊_三個點（⋮）_並選擇_刪除_。

1. **檢查參數**
    - 點擊任意操作以查看或編輯其設定，稱為_參數_。
    - 您可以手動輸入值或使用_表達式_使其動態化。

1. **版本歷史**
    - 每次保存流程時，系統都會記錄一個版本。
    - 如果需要，您可以回溯並查看或恢復之前的版本。

1. **錯誤檢查**
    - _流程檢查器_會突出顯示任何錯誤。
    - 所有錯誤都需要在發布流程之前解決。

1. **發布和測試**
    - 一旦您的流程無錯誤，發布以使其生效。
    - 使用_測試_功能手動或自動運行您的流程，檢查其是否按預期工作。

### 為什麼使用代理流程設計器？

- **視覺化且直觀** - 您可以透過拖放建立流程。
- **安全試驗** - 版本歷史讓您可以撤銷更改。
- **內建測試** - 幫助您確保一切在上線前正常運行。

## 🔤 您提到_表達式_——什麼是表達式？

表達式是幫助代理流程處理資料的小型公式或指令。您可以使用它們來計算值、格式化文字、做出決策或從輸入中提取特定資訊。

### 為什麼使用表達式？

表達式讓您：

- **自訂資料處理方式** - 合併名稱、格式化日期。
- **做出決策** - 如果值大於 10，執行某些操作。
- **轉換資料** - 將文字轉為小寫，提取字串的一部分。
- **自動化邏輯** - 無需編寫完整程式碼。

### 表達式看起來像什麼？

表達式使用函數。我借用前 Microsoft MVP Jerry Weinstock 的解釋來說明什麼是函數。

!!! 引述
    函數是內建邏輯，用於透過簡單或複雜的操作在表達式中轉換您的資料。

函數使您能夠建立表達式，而無需編寫任何程式碼。

我喜歡的描述方式是，代理流程中的函數類似於 Excel 函數。您可以對資料執行操作，將其轉換為所需的輸出。在 Excel 中建立公式時，您從表格中的儲存格或範圍選擇輸入值，然後應用函數來操作資料輸出。例如使用 `COUNT` 函數計算範圍內包含數字的儲存格數量。

在代理流程中，您不是引用表格中的儲存格資料，而是引用觸發器或操作的資料輸出來建立表達式。延續之前的例子，使用函數 `length` 來檢索 _Get items_ SharePoint 連接器操作返回的項目數量。

### 為什麼函數重要？

使用函數使您的代理流程：

- **更智能** - 它們可以對不同的輸入或條件做出反應。
- **更靈活** - 您可以自訂資料處理方式。
- **更高效** - 您透過自動化邏輯避免手動步驟。

### 最有用的函數

以下是代理流程中常用的函數。完整函數列表請參考[參考指南](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez)。

#### 🔡 文字

- `concat()` - 將兩段或多段文字合併。
      - 範例：`concat('Hello ', firstName)` → “Hello John”

- `toLower()` / `toUpper()` - 將文字轉為小寫或大寫。
      - 用於標準化輸入。

- `substring()` - 提取字串的一部分。
      - 範例：提取名字的前三個字母。

- `trim()` - 移除文字開頭和結尾的空格。

#### 🔢 數學和數字

- `add()`, `sub()`, `mul()`, `div()` - 基本數學運算。
      - 範例：`add(5, 3)` - 輸出為 8

#### 📅 日期和時間

- `utcNow()` - 獲取當前 UTC 日期和時間。
      - 非常適合時間戳。

- `addDays()`, `addHours()` - 為日期添加時間。
- 範例：`addDays(utcNow(), 7)` 的輸出是從現在起的 7 天後。

- `formatDateTime()` - 將日期格式化為可讀的字串。
  - 範例：星期一，2025 年 7 月 7 日

#### ✅ 邏輯

- `if()` - 如果條件為真，執行一個值；如果為假，則執行另一個值。
  - 範例：`if(score > 50, 'Pass', 'Fail')`

- `equals()` - 檢查兩個值是否相同。

- `and()`、`or()`、`not()` - 結合多個條件。

#### 🪣 其他實用函數

- `coalesce()` - 返回第一個非空值。
  - 用於備援/預設值。

- `guid()` - 生成唯一 ID。
  - 用於追蹤或記錄。

- `length()` - 計算字串或陣列中的字元或項目數量。

## ⭐ 最佳實踐

以下是一些在 Copilot Studio 中建立代理流程的最佳實踐。

1. **從簡單開始，逐步構建**

   - 從一個小型、明確的任務開始，例如發送訊息。
   - 測試自動化的基本功能後再添加更多步驟。

1. **使用清晰且描述性的動作名稱**

   - 清楚地標記每個步驟，讓您和您的團隊了解它的功能。
   - 範例：將 SharePoint 連接器動作的預設名稱 "Update item" 改名為具體更新的內容，例如 "Update device status"。

1. **在發布前檢查錯誤**

   - 使用 **流程檢查器** 找出並修復任何問題。
   - 如果有錯誤，流程無法發布，因此請在問題出現時解決它們。

1. **徹底測試您的流程**

   - 儘管流程已保存並發布，但不代表它能如預期運作。
   - 使用 _測試_ 功能手動或自動執行流程，並檢查結果。

1. **使用版本歷史記錄**

   - 經常保存您的流程，以便在需要時回到早期版本。
   - 您可以使用 _版本歷史記錄_ 面板查看並恢復之前的版本。

1. **明智地使用參數和表達式**

   - 配置動作時，使用參數使流程更具動態性。
   - 您可以手動輸入值，或使用表達式計算它們，並通過 _動態內容_ 選擇器與上游動作的值結合。

1. **刪除未使用的動作**

   - 如果您添加了一個動作，後來決定不需要它，請將其移除以保持流程簡潔。

## 🧪 實驗室 09 - 添加代理流程以進行自動化並增強主題功能

現在我們將學習如何使用自適應卡片以及主題和節點的高級功能來增強主題。

- [9.1 建立代理流程](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.2 將代理流程添加到主題](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.3 更新請求設備主題，使用多個節點以改善使用者體驗](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.4 使用多種情境測試代理](../../../../../docs/recruit/09-add-an-agent-flow)

### ✨ 使用案例

**作為** 員工的經理

**我希望** 接收設備請求

**以便** 我能審核員工請求的設備。

讓我們開始吧！

### 先決條件

1. **SharePoint 清單**

   我們將使用 [Lesson 00 - 課程設置 - 步驟 3：建立新的 SharePoint 網站](../00-course-setup/README.md#step-4-create-new-sharepoint-site) 中的 **Devices** SharePoint 清單。

   如果您尚未設置 **Devices** SharePoint 清單，請返回 [Lesson 00 - 課程設置 - 步驟 3：建立新的 SharePoint 網站](../00-course-setup/README.md#step-4-create-new-sharepoint-site)。

1. **Contoso 客服代理**

   我們將使用之前在 [Lesson 06 - 使用 Copilot 和您的數據建立自定義代理](../06-create-agent-from-conversation/README.md) 中建立的代理。

### 9.1 建立代理流程

在此練習中，我們將建立一個代理流程，從選定設備的 SharePoint 項目中檢索資料，並通過電子郵件將設備詳細資訊發送給經理。

1. 在 **請求設備** 主題中，向下滾動到 **使用自適應卡片詢問** 節點並添加一個新節點。選擇 **添加工具**，在飛出面板的 **基本工具** 標籤中，選擇 **新代理流程**。

    ![添加新代理流程](../../../../../translated_images/9.1_01_AddNewAgentFlow.2b9078604a054d1f022f9c73adaf10fe430e81875ec8717a7f70ef7b05f11c15.tw.png)

1. 代理流程 **設計器** 將載入，包含觸發器和動作。

   - **觸發器** - 當代理調用流程時
     - 這將從 Copilot Studio 代理觸發流程。

   - **動作** - 回應代理
     - 這將發送包含輸出值的回應回到 Copilot Studio 代理。

   選擇觸發器。

    ![選擇觸發器](../../../../../translated_images/9.1_02_SelectTrigger.92dc20442add764c8aa4b7f737f28416a3223e4471562462ed6dcba2dc7c7936.tw.png)

1. 接下來，我們將為代理流程添加多個輸入。

   - `DeviceSharePointId` - 這將存儲 SharePoint 項目的值（ID）。此 ID 值是使用者在使用自適應卡片節點中選擇設備時的輸出。

   - `User` - 這將是使用者的名稱，來自代理的系統變數。

   - `AdditionalComments` - 這將是使用者輸入的評論，是使用自適應卡片節點的輸出。

   我們首先將 `DeviceSharePointId` 作為觸發器的輸入。選擇 **+ 添加輸入**。

    ![添加輸入](../../../../../translated_images/9.1_03_AddInput.fd1e0a99ecb5e20f3a518cb23fc0d22c6db1435c5ffb2e183fce3b8a056287bb.tw.png)

1. 對於使用者輸入的類型，選擇 **文字**。

    ![選擇文字](../../../../../translated_images/9.1_04_SelectText.47ca776822ec5a6c1339c012d51e0eb6eac6bf8315d4ac6f25498b10ada16df9.tw.png)

1. 對於輸入的名稱，輸入以下內容。

    ```text
    DeviceSharePointId
    ```

    ![DeviceSharePointId 輸入](../../../../../translated_images/9.1_05_DeviceSharePointIdInput.caf77f8eb60a1b8649ea8b0abf05dfce9fa4bef9d9c465cd8906395e5b44842e.tw.png)

1. 現在我們將添加第二個輸入 `User`。重複相同的步驟，選擇 **+ 添加輸入** 並選擇 **文字**。

    ![添加輸入](../../../../../translated_images/9.1_06_AddInput.3ca4bff9991b6e8a331bd909ff58038387696ce7b6ee7a932a88316aff41bc57.tw.png)

1. 對於輸入的名稱，輸入以下內容。

    ```text
    User
    ```

    ![User 輸入](../../../../../translated_images/9.1_07_UserInput.16b2405f2d5744ea14a6a67b69539ba24719aaf642ddfc2b281e784d74d8c1ea.tw.png)

1. 現在我們將添加第三個輸入 `AdditionalComments`。重複相同的步驟，選擇 **+ 添加輸入** 並選擇 **文字**。

    ![添加輸入](../../../../../translated_images/9.1_08_AddInput.4685bb77618e6d9cfca7a42a0945d10f59825b1ca42de372dcf07c9170451680.tw.png)

1. 對於輸入的名稱，輸入以下內容。

    ```text
    AdditionalComments
    ```

    ![AdditionalComments 輸入](../../../../../translated_images/9.1_09_AdditionalComments.a4587b59b85450ca0566615c9473132dd6447e6c7513e4926942655aa0e80195.tw.png)

1. 對於 `AdditionalComments` 輸入，我們將更新使其成為可選項。選擇 **省略號 (...) 圖示** 並選擇 **使字段為可選**。

    ![使字段為可選](../../../../../translated_images/9.1_10_Optional.753bd03817c2eb37bb44a7bfd7d29314aa7109cde02e3f619c01c42bc9170b71.tw.png)

1. 做得好！觸發器已配置完成，讓我們繼續。選擇觸發器下方的 **加號 + 圖示** 以插入新動作。

    ![添加動作](../../../../../translated_images/9.1_11_AddAction.86c14acd1ce22e99b7244e0001f0039362ff6ac3efafe03956788aaa31e705af.tw.png)

1. **動作面板** 將顯示，您可以查看 Microsoft 和第三方服務的 1400+ 內建連接器的動作。在 **搜索字段** 中輸入以下內容，

    ```text
    Get item
    ```

    搜索結果中將顯示動作列表。選擇 **SharePoint 連接器** 中的 **Get item** 動作。

    ![Get item 動作](../../../../../translated_images/9.1_12_AddGetItemAction.434cdcb822e1f72993fc4a0c0ad753e1220456f9dab8fc307d42f5711071d45b.tw.png)

1. 我們現在可以開始配置 **Get item** 動作。

   選擇 **Get item** 動作中的 **省略號 (...)** 圖示。

    ![選擇省略號](../../../../../translated_images/9.1_13_SelectEllipsis.88bf304067f3103825f183f8962634af831460541290533e5670f4c014a97c46.tw.png)

1. 選擇 **重命名**。

    ![選擇重命名](../../../../../translated_images/9.1_14_SelectRename.74d99c883418b7dbf58758304976cac1d0f2afd30e4cd1992830f00775a46b18.tw.png)

1. 將動作重命名為，

    ```text
    Get Device
    ```

    ![重命名動作](../../../../../translated_images/9.1_15_RenameAction.ff64b79f6e6603ae89f272f91d84ff4432c04ba103c401a2808a767e3ceb5617.tw.png)

1. 在 **網站地址** 字段中，選擇在 [Lesson 00 - 課程設置 - 步驟 3：建立新的 SharePoint 網站](../00-course-setup/README.md#step-4-create-new-sharepoint-site) 中建立的 Contoso IT SharePoint 網站的 **網站地址**。

   在 **清單名稱** 字段中，選擇 **Devices** SharePoint 清單。

    ![輸入參數](../../../../../translated_images/9.1_16_SharePointSiteAndListParameters.af6e0b112eb4bfb210f9259da02b459097a06307afa6ca269cb33aa9ecc1c1e4.tw.png)

1. 在 **Id** 字段中，選擇右側的 **閃電圖示** 或 **fx 圖示**。

    ![動態內容選擇器](../../../../../translated_images/9.1_17_InsertExpressionIcon.6e250bb84e7b8884de7b2052005f7ff3cd95f2c28671d2da7965001b3f621902.tw.png)

1. 在飛出面板的 **動態內容** 標籤中，輸入以下內容，

    ```text
    sharepoint
    ```

    搜索結果將顯示與搜索值匹配的輸入參數。選擇觸發器中的 **DeviceSharePointId** 參數。

    接下來，選擇 **添加** 將動態內容輸入添加到動作的 **Id** 參數中。

    ![選擇 DeviceSharePointId 輸入](../../../../../translated_images/9.1_18_DeviceSharePointId.b9be8e7c3c6b0ab710a8f662e62a0ec0133a530f6877b6cea3c48acc8022fec5.tw.png)

1. 現在，觸發器中的動態內容輸入已引用到動作的 **Id** 參數中。我們接下來將更新其中一個高級參數。選擇 **顯示全部** 以查看高級參數。

    ![查看高級參數](../../../../../translated_images/9.1_19_AdvancedParameters.4bb8e0c11e7864625ad6c30ab1b9021d367cd77374c56985df7b3d43845a1883.tw.png)

1. **按視圖限制列** 參數將顯示，預設設置為 **使用所有列（不限制）**。我們將更新此值為一個視圖，以限制動作回應中返回的列。選擇 **按視圖限制列** 參數以查看視圖列表。

    ![選擇參數](../../../../../translated_images/9.1_20_LimitColumnsByView.4d30f532f1e1033323d39df5c9b8e803788ea785ed58de2efca2faa5df4b26fc.tw.png)

1. 選擇 **所有項目** 視圖。

    ![選擇所有項目視圖](../../../../../translated_images/9.1_21_SelectView.d180e83d5e62f5fb6994a7071d5e6ce8f88143d8cc833cb55b208c6fee41bc02.tw.png)

1. 選擇 _Get Device_ 動作下方的 **加號 + 圖示** 以插入新動作。

    ![添加新動作](../../../../../translated_images/9.1_22_AddAnAction.904b79142347fe927168036ade55d842fa088deef53710944272c681421e0e84.tw.png)

1. 在搜索字段中輸入以下內容，

    ```text
    send an email
    ```

    搜索結果中將顯示動作列表。選擇 **Office 365 Outlook 連接器** 中的 **Send an email (V2)** 動作。

    ![Send an email 動作](../../../../../translated_images/9.1_23_SendAnEmail.f1019365131658b0e71b5b58b57d7d8b3f3a0c670ddb3cca0838bf0b4f8cd354.tw.png)

1. 接下來，我們需要為連接器動作創建連接。選擇 **登入**。

    ![創建連接](../../../../../translated_images/9.1_24_CreateConnection.9e968ad4de9d13d81e95779c4fa60809fd40de5f65dbd014f1dc39663c935806.tw.png)

1. 選擇您已登入的使用者帳戶。

    ![選擇使用者帳戶](../../../../../translated_images/9.1_25_SelectUserAccount.f3c96ac1a377c4b42a6301ba38c21469eb7bd3f48633f04200f1610902f8bdbe.tw.png)

1. 選擇 **允許存取**。現在已創建連接。

    ![選擇允許存取](../../../../../translated_images/9.1_26_AllowAccess.1abcaea31b9846279cafafd7160baea6bec60cdfac8224df7082ceee3ef22a26.tw.png)

1. 將動作重命名為以下內容，

    ```text
    Send an email to manager
    ```

    接下來讓我們定義動作的輸入參數。

    對於 **收件人** 輸入參數，選擇您自己。通常這將是您的經理，或者我們會使用另一個動作根據您的 Entra ID 配置文件拉取您的經理，但在本課程中，選擇您自己。

    對於 **主題** 輸入參數，輸入以下內容，

    ```text
    Request type: new device
    ```

    對於 **正文** 輸入參數，輸入以下內容，

    ```text
    Hi,

    New device requested from

    Manufacturer:
    Model:
    Link to item in SharePoint
    Additional comments from:

    This is an automated email from Contoso Helpdesk Copilot
    ```

    ![重命名動作並配置輸入](../../../../../translated_images/9.1_27_RenameAndConfigureParameters.c3d29a3481fb5c0240cca85db4119387e6b750546ed12e2af4a9ac62d7454f89.tw.png)

1. 接下來，我們將更新 **正文** 輸入參數，引用來自 **觸發器** 或 **Get item** 動作的動態內容輸入。在第二行後輸入一個空格，因為我們將插入來自觸發器輸入的使用者名稱 **User**。

    選擇右側的 **閃電圖示** 或 **fx 圖示**。

    ![添加 User 輸入作為動態內容](../../../../../translated_images/9.1_28_AddUserInput.f38d3df648faef75f1985bdcc23db16e197ccb1ddc015210c43bbb2569fcf654.tw.png)

1. 在飛出面板的 **動態內容** 標籤中，選擇觸發器中的 **User** 輸入。

    選擇 **添加** 將動態內容 **User** 輸入添加到動作的 **正文** 參數中。

    ![選擇 User 輸入](../../../../../translated_images/9.1_29_SelectUserInput.4efc79f52d74fa7ae13132ea13f7d51b3f4aab6413afc41a8354c5e59852b9fc.tw.png)
1. 觸發器中的動態內容輸入現在已引用到動作的 **Body** 參數中。我們將對電子郵件正文中的其餘行重複相同的操作。

    ![已添加使用者輸入](../../../../../translated_images/9.1_30_UserInputAdded.905ec0489e4f1bbe7cc071826050834aa1e5acf53f8a65ad59532ea13b81c607.tw.png)

1. 點擊 `Manufacturer:` 旁邊的空白處。選擇右側的 **閃電圖示** 或 **fx 圖示**。

    在彈出窗的 **動態內容** 標籤中，在搜尋欄位中輸入以下內容，

    ```text
    manufacturer
    ```

    選擇觸發器中的 **Manufacturer value** 輸入並選擇 **Add**。

    ![添加 Manufacturer value 作為動態內容](../../../../../translated_images/9.1_31_ManufacturerValueAdded.db2cf35a35a20590d80d7f0191d771a045bf55e40ce98982d0e099588e260712.tw.png)

1. 點擊 `Model:` 旁邊的空白處。選擇右側的 **閃電圖示** 或 **fx 圖示**。

    在彈出窗的 **動態內容** 標籤中，在搜尋欄位中輸入以下內容，

    ```text
    model
    ```

    選擇 **Get item** 動作中的 **Model** 輸入並選擇 **Add**。

    ![添加 Model 輸入作為動態內容](../../../../../translated_images/9.1_32_ModelAdded.ff9d858648ddb85fe70eaaafa6e23d0560500e7327ccb29ee56ecac0d8d36cab.tw.png)

1. 對於 `Link to item in SharePoint` 文本，我們將其更新為電子郵件正文中的超連結。點擊行的開頭並選擇右側的 **閃電圖示** 或 **fx 圖示**。

    ![添加動態內容](../../../../../translated_images/9.1_33_AddDynamicContent.c662d682377af82adc52de18e05baf9b6aa5a972882dcf6274f3979f14641627.tw.png)

1. 點擊 HTML 錨點標籤後，選擇右側的 **閃電圖示** 或 **fx 圖示**。

    在彈出窗的 **動態內容** 標籤中，在搜尋欄位中輸入以下內容，

    ```text
    link to item
    ```

    選擇 **Get item** 動作中的 **Link to item** 輸入並選擇 **Add**。

    ![添加 Link to item 作為動態內容](../../../../../translated_images/9.1_34_AddLinkToItem.6827bd3bad484f7382d060435bb0ef45e9bb1c3ad4774529559bb4c5f9bbca8c.tw.png)

1. 我們需要切換到 HTML 編輯器，選擇 **&lt;/&gt;** 圖示。

    ![添加使用者輸入](../../../../../translated_images/9.1_35_ToggleCodeView.ae3a9caf213f2c6366487e10092ad1fad3494f110936219258d842c23e7f46d9.tw.png)

1. HTML 編輯器現在已啟用。點擊 `Link to item in SharePoint` 文本之前，添加 HTML 錨點標籤以創建超連結。複製並貼上以下內容。

    ```text
    <a href="
    ```

    ![HTML 標籤](../../../../../translated_images/9.1_36_AddHTMLTag.146220ae5c33eaf9915c393c37d62b9d4b258413e9f4dc42a1ab005437669443.tw.png)

1. **Link to item** 的動態內容輸入現在已引用到 **Body** 參數中。點擊 **Link to item** 輸入後，複製並貼上以下內容。

    ```text
    ">
    ```

    ![HTML 標籤](../../../../../translated_images/9.1_37_AddHTMLTag.48f73b302f6a84bb6a51e0666fd30baf1f8d9d906947d44dc4095ededed18a2d.tw.png)

1. 點擊 `Link to item in SharePoint` 文本後，關閉 HTML 錨點標籤。複製並貼上以下內容。

    ```text
    </a>
    ```

    ![HTML 標籤](../../../../../translated_images/9.1_38_AddHTMLTag.47d2f0521e6aba9d609bfe65d86ebae5786e4ad5465fefb7ae0370db6e924c96.tw.png)

1. 選擇 **&lt;/&gt;** 圖示以切換代碼視圖。

    ![禁用代碼視圖](../../../../../translated_images/9.1_39_ToggleCodeView.88606eb37d702a686904b2dd8943fcf144cec462b37ee781e8ee0415e62bd951.tw.png)

1. 然後再次選擇 **&lt;/&gt;** 圖示以切換代碼視圖。

    ![切換回代碼視圖](../../../../../translated_images/9.1_40_ToggleCodeViewAgain.32da9b9804adbbfaf8d85bdaa6fa51d2ae5fc1fbb97f75084813972c66d0c4d9.tw.png)

1. 注意有幾個額外的字符 `&lt;br&gt;`。刪除這些字符。

    ![刪除字符](../../../../../translated_images/9.1_41_DeleteCharacters.f1ef3830b186c2cd9974ea05e336c83c0706d72ab1010d06283716dc4e982875.tw.png)

1. 我們現在已完成在電子郵件正文中添加超連結 😎 選擇 **&lt;/&gt;** 圖示以切換代碼視圖。

    ![HTML 標籤整理完成](../../../../../translated_images/9.1_42_HTMLTagTidiedUp.1b27fa2c4dc65c3f1a7151abcf6e388f64cb83745b10cd22769c1f9af3421fc6.tw.png)

1. 點擊 `Additional comments from` 文本後的冒號字符之前，選擇右側的 **閃電圖示** 或 **fx 圖示**。

    ![添加使用者參數](../../../../../translated_images/9.1_43_AddUserInput.6f0d26739c1b9039383aa37cc46fa1149a269bd4268fb54b897d144afc49c515.tw.png)

1. 在彈出窗的 **動態內容** 標籤中，在搜尋欄位中輸入以下內容，

    ```text
    user
    ```

    選擇觸發器中的 **User** 參數並選擇 **Add**。

    ![添加 User 參數作為動態內容](../../../../../translated_images/9.1_44_AddUserDynamicContent.bb7c76e92650001207712b3447d3275d584f3ebf739034369869c3facf38eacf.tw.png)

1. 我們現在要插入一個表達式，該表達式將顯示使用者在 **Ask an adaptive card** 節點中提供的 Additional Comments 值，如果使用者未提供任何評論，則顯示 "None"。

    點擊冒號後，選擇右側的 **閃電圖示** 或 **fx 圖示**。

    ![添加表達式](../../../../../translated_images/9.1_45_AddExpression.c4c92dc4a56fab75c78ec2c5087682521e562264c1710c8dfaa24134adc3a112.tw.png)

1. 在彈出窗的 **Function** 標籤中，在上方的表達式欄位中輸入以下內容，

    ```text
    if(empty())
    ```

    此表達式使用 `if` 函數進行 if-else 條件判斷。

    接下來使用的函數是 `empty`，該函數檢查字串參數中是否存在值。要引用的字串參數是觸發器中的 `AdditionalComments` 輸入參數值。

    ![如果為空](../../../../../translated_images/9.1_46_IfEmptyFunctions.95d21ad01f6f7c290cb8d5a57ccbca9c9532df7ce57f800554dea541d503ddc6.tw.png)

1. 接下來，點擊 `empty` 函數後的括號內部。我們將插入觸發器中的 `AdditionalComments` 輸入參數。

    選擇 **動態內容** 標籤。在搜尋欄位中輸入以下內容，

    ```text
    Additional
    ```

    向下滾動窗格並選擇觸發器中的 **AdditionalComments** 輸入。該參數現在將作為字串參數添加到表達式中。

    ![添加 AdditionalComments 作為動態內容](../../../../../translated_images/9.1_47_AdditionalCommentsDynamicContent.f9632f09779888c18a58df8e97ef677ed885b0eaa88c252b13b22c0e4c67495b.tw.png)

1. 接下來我們將定義 **_true_** 邏輯，如果 `AdditionalComments` 字串參數為空，則我們希望顯示字串（文本）`None`。

    在括號封閉字串參數後，輸入以下內容，

    ```text
    , 'None',
    ```

    ![True 邏輯](../../../../../translated_images/9.1_48_None.31978299f29e07ef3257eedd5dcee09c8675f8b3f61aea8102900118e0b6ca70.tw.png)

1. 最後我們將定義 **_false_** 邏輯，如果 `AdditionalComments` 字串參數不為空，則我們希望顯示觸發器中的 **AdditionalComments** 輸入參數的值。

    > 提醒：此值將來自 **Request device** 主題中的 **Ask with adaptive card** 節點的 Additional Comments 欄位。

    在 **_true_** 邏輯後的逗號後，選擇 **動態內容** 標籤。在搜尋欄位中輸入以下內容，

    ```text
    Additional
    ```

    向下滾動窗格並選擇觸發器中的 **AdditionalComments** 輸入。該參數現在將作為字串參數添加到表達式中。

    現在通過選擇 **Add** 將其添加到 **Body** 參數中。

    ![False 邏輯](../../../../../translated_images/9.1_49_AdditionalCommentsDynamicContent.d42c7fc29f65d901bb26dcbc13408c387633ea185cdd79c35d6439231b7363d5.tw.png)

1. 太棒了，我們的表達式完成了！該表達式現在已添加到 **Body** 參數中。最後，將最後一行格式化為斜體。

    ![斜體](../../../../../translated_images/9.1_50_Italics.a0c01aa33ef4e83167e1fbc21c1d833f95addd60c8f531411cf9c58a96a31b02.tw.png)

1. 我們現在要更新 **Respond to the agent** 動作，將 **Get item** 動作中的 **Model value** 參數的值發送回代理。

    按住滑鼠左鍵，向上移動設計器中的滑鼠以查看 **Respond to the agent** 動作。

    選擇 **Respond to the agent** 動作並選擇 **Text** 輸出作為類型。

    ![選擇 Text 輸出](../../../../../translated_images/9.1_51_RespondToTheAgentAction.4c682a440e19a0fcd6d6f51ef9cdbfe76f482a39d635b8905d9b0cbbf33d945f.tw.png)

1. 輸入以下內容作為輸出的名稱。

    ```text
    ModelValue
    ```

    ![ModelValue 輸出](../../../../../translated_images/9.1_52_ModelValueInput.20609429eb323281051607b090319adc5315c0245c7d61158eb119714fe4318f.tw.png)

1. 選擇值欄位並選擇右側的 **閃電圖示** 或 **fx 圖示**。

    ![插入表達式](../../../../../translated_images/9.1_53_InsertDynamicContent.108ba565696f9f52d742323e0f4c46c308f322ac4bd67802e3196430155c7443.tw.png)

1. 在彈出窗的 **動態內容** 標籤中，在搜尋欄位中輸入以下內容，

    ```text
    model
    ```

    選擇 **Get item** 動作中的 **Model** 參數並選擇 **Add**。

    ![添加 Model 參數作為動態內容](../../../../../translated_images/9.1_54_ModelParameter.f231fd0ec089ac6b9ac1b7fd2e6a60a35b08484ed10b0098cff6b3ce0c7760cb.tw.png)

1. **Model** 參數現在是文本輸出的值。選擇 **Save draft** 以保存我們的代理流程。

    我們現在已完成代理流程 👏🏻

    ![選擇保存草稿](../../../../../translated_images/9.1_55_SaveDraftAgentFlow.5ab97895a901458362881fc9ee576762bdb0883b37a6cbd7a631ddc2750705af.tw.png)

1. 在發布之前，讓我們對代理流程進行最後一次更新。選擇 **Overview** 標籤並選擇 **Edit**。

    ![選擇 Edit](../../../../../translated_images/9.1_56_EditAgentFlowDetails.023e8149284b9ae79dd3d95f574ff90bbcc1cc4a9fff4be56664ccbe0698f310.tw.png)

1. 對於 **Flow name**，複製並貼上以下內容。

    ```text
    Send device request email
    ```

    對於 **Description**，選擇 **refresh icon**，使用 AI 根據代理流程中的觸發器和動作自動生成描述。

    選擇 **Save** 以保存代理流程的更新名稱和描述。

    ![重命名、添加描述並保存詳細資訊](../../../../../translated_images/9.1_57_RenameAndDescription.57a190396550bf998d62c49ca359b66211ae50042ac5f8739b32f8b9bc292607.tw.png)

1. 選擇 **Designer** 標籤並選擇 **Publish** 以發布代理流程，使其可以作為 **Request device** 主題中的節點添加。

    ![發布](../../../../../translated_images/9.1_58_Publish.8f43271718c662deee7afea6fb283f64005b277b3a62086e6d91cc0c3ac4f79c.tw.png)

1. 不久後將出現確認消息，確認代理流程已發布。

    ![確認消息](../../../../../translated_images/9.1_59_Confirmation.d406bde76c31b27f794d5742c992b8c84283f46b2e54524f1e500d0688a33716.tw.png)

### 9.2 將代理流程添加到主題

現在讓我們將代理流程添加到 **Request device** 主題。

1. 在左側菜單中選擇 **Agents**，然後選擇 **Contoso Helpdesk Agent**。

    ![選擇 Agents](../../../../../translated_images/9.2_01_SelectAgent.b8a6fd3a8970d6b0c8e78bf0a5411257206612d53acdf9b44f78b2c9c2fe91fc.tw.png)

1. 選擇 **Topics** 標籤。

    ![選擇 Topics 標籤](../../../../../translated_images/9.2_02_SelectTopics.3e8618aba5f4a1ddf3dee726b6da9a66ed89d04a2e8ca36b52112a6675c2885c.tw.png)

1. 選擇 **Request device** 主題。

    ![選擇 Request device 主題](../../../../../translated_images/9.2_03_SelectRequestDevice.df10472702258708b3d069e718e695b9fcabc61d42901d524dc302a03b3fa4a9.tw.png)

1. 向下滾動到 **Ask with adaptive card** 節點並添加一個新節點。

    選擇 **Add a tool**，在彈出窗的 **Basic tools** 標籤中，選擇我們最近創建並發布的 **Send device request email** 代理流程。

    ![選擇代理流程](../../../../../translated_images/9.2_04_SelectAgentFlow.15deca87db95fff1c9d904855d237d22a72c260adf3343d9e78695f07c42a8e0.tw.png)

1. 對於代理流程的觸發器輸入，我們需要選擇 **Ask with adaptive card** 節點中定義的變數輸出。

    選擇 **DeviceSharePointId** 輸入的 **省略號 (...) 圖示**。

    ![選擇變數](../../../../../translated_images/9.2_05_SelectVariable.8fe53cbc0f950f732b9e9002b21d8762ddfe74fb601d61c2a5119e32383450a2.tw.png)

1. 選擇 **Ask with adaptive card** 節點中定義的輸出之一 **deviceSelectionId** 變數。

    ![選擇 deviceSelectionId 變數](../../../../../translated_images/9.2_06_SelectdeviceSelectionIdVariable.67c0091e0de9442d3cffbfe3b2cace8d76be37ea67815ddfc99af03ae4b37391.tw.png)

1. 接下來，選擇 **User** 輸入的 **省略號 (...) 圖示**。

    ![選擇變數](../../../../../translated_images/9.2_07_SelectVariable.bf851128bec5e0255c6cf361a837ce9701d0afac84ed3d5b89665d111a098386.tw.png)

1. 在彈出窗的變數窗格中選擇 **System** 標籤並選擇 **User.DisplayName**。此變數存儲與代理交互的內部使用者的顯示名稱。

    ![選擇 User.DisplayName 系統變數](../../../../../translated_images/9.2_08_SelectUser.DisplayNameVariable.926a2a7560402fbd7b224e2bf0ff11df9e5612803b7ce51e36f58201a09bbfd7.tw.png)

1. 接下來，選擇 **Advanced inputs** 的 **大於圖示** 以展開並查看 **AdditionalComments** 輸入。

    ![展開高級輸入](../../../../../translated_images/9.2_09_ExpandAdvancedInputs.bded22f83fe4eb21237daa254725e12a81ea75be34bcb0e8ab322037a4e6f418.tw.png)

1. 選擇 AdditionalComments 輸入的 **省略號 (...) 圖示**。

    ![選擇變數](../../../../../translated_images/9.2_10_SelectVariable.86286cc06323e65fb3874b9fd0ea62d140b9e9b9a2b5116d667192a6dca3815f.tw.png)

1. 選擇 **Formula** 標籤並展開彈出窗的變數窗格，因為我們將使用 Power Fx 表達式。

    ![公式標籤](../../../../../translated_images/9.2_11_SelectFormulaAndExpandIcon.3fcd07bfccc4f0779a5d26313b571e60be792da7fd28e937b3e888f8aaeda7e0.tw.png)

1. 與代理流程中的表達式類似，該表達式使用 _if_ 函數進行條件檢查，但這次
    - 使用 Power Fx 函數，
    - 並插入空值或來自 **Ask with adaptive card** 節點的 `commentsId` 輸出變數的值。

    在 Power Fx 欄位中輸入以下函數，

    ```text
    If(IsBlank())
    ```

此表達式使用 `If` 函數來進行 if-else 條件判斷。

接下來使用的函數是 `IsBlank`，它用來檢查字串參數中是否存在值或不存在值。要引用的字串參數是 **Ask with adaptive card** 節點的輸出變數 `commentsId`。

![If 和 IsBlank 函數](../../../../../translated_images/9.2_12_IfIsBlank.07f7516c7e1f7579239a8b3833d64a14eb88dc245cae714b3e07d6298e907d51.tw.png)

1. 接下來，點擊 `IsBlank` 函數後的**括號內部**。我們將插入 **Ask with adaptive card** 節點的 `commentsId` 輸出變數。

    在括號內輸入以下內容：

    ```text
    Topic.commentsId
    ```

    並在括號後添加逗號。

    ![引用 commentsId 輸出](../../../../../translated_images/9.2_13_Topic.commentsId.1a04dc190dac334ebf6c4dbc1b6df1aad2e4bbdeeb3ef960871e93614381f079.tw.png)

1. 接下來我們將定義邏輯：

    - 當 **_true_** 時 - 如果 `Topic.commentsId` 字串參數為空，則我們希望插入空值。
    - 當 **_false_** 時 - 如果 `Topic.commentsId` 字串參數不為空，則插入 commentsId 變數的值。

    在封閉字串參數的括號後輸入以下內容：

    ```text
    "", Topic.commentsId)
    ```

    Power Fx 表達式應如下所示：

    ```text
    If(IsBlank(Topic.commentsId), "", Topic.commentsId)
    ```

    太棒了，我們的表達式完成了！🙌🏻 現在選擇 **Insert** 以將代理流程的輸入參數設置為 Power Fx 表達式。

    ![Power Fx 表達式](../../../../../translated_images/9.2_14_PowerFxExpression.80e76ea59bdb8f131d26edf2657923f4af9000768d44b06c0947115fd218698e.tw.png)

1. **保存**主題。

### 9.3 更新請求設備主題，添加多個節點以提升使用者體驗

接下來我們將添加兩個節點：

- **發送訊息** - 這將作為確認訊息，引用所選設備並確認請求已提交。
- **主題管理** - 為結束對話，我們將重定向到 **End of conversation** 節點。

讓我們開始吧！

1. 選擇代理流程節點下方的 **加號 + 圖示**，然後選擇 **發送訊息** 節點。

    ![添加發送訊息節點](../../../../../translated_images/9.3_01_AddSendAMessageNode.ac4111729a2602f8301ecffbcb263d692ecb43478aa9da63cae0dd58160f56c8.tw.png)

1. 在訊息欄位中輸入以下內容：

    ```text
    Thanks
    ```

    然後選擇 **插入變數**，我們將引用使用者的名字。

    ![插入變數](../../../../../translated_images/9.3_02_InsertVariable.c5c9ebce61d1f442413d05f4437f74ee1d9c3a8c2ab696244937c56b5171f310.tw.png)

1. 選擇 **系統** 標籤，並在搜尋欄位中搜尋 `User`。選擇 **User.DisplayName** 變數。

    ![選擇系統變數](../../../../../translated_images/9.3_03_SelectSystemVariable.47cfac2f3a727dbaf32ae960cbafe43ce9ed00f73edf01ac6d48e5b2b167e5fc.tw.png)

1. 在訊息欄位中輸入以下內容：

    ```text
    . Your selected device,
    ```

    然後選擇 **插入變數**，這次在 **自訂** 標籤中選擇 **ModelValue** 變數。

    接著輸入以下內容以完成訊息。

    ```text
    , has been submitted and will be reviewed by your manager.
    ```

    訊息應如下所示：

    ![發送訊息](../../../../../translated_images/9.3_04_SendAMessage.3f6c4b5e53da9c7f9fcf9d0c453a9b65e44e35ea4c1124947fb638d0b682d96d.tw.png)

1. 最後，選擇 **發送訊息** 節點下方的 **加號 + 圖示**，然後選擇 **主題管理**，接著選擇 **轉到另一主題** 並選擇 **End of Conversation**。

    ![主題管理](../../../../../translated_images/9.3_05_EndOfConversation.3c6c96d03b29a4d0904dea09d96c62d6ad450fe60dd8d6b2fe9d31681d6cb147.tw.png)

1. **保存**主題。

    ![保存](../../../../../translated_images/9.3_06_SaveTopic.8c9201fabce9f41af03d9f1beb9ce321e4ee9880a94edabe58b592bffebda80a.tw.png)

### 9.4 使用多種情境測試代理

太棒了！！！😁 我們現在可以測試代理了。

#### 9.4.1 請求設備並在自適應卡中輸入評論

1. **刷新**測試面板，選擇 **活動地圖** 圖示，並輸入以下內容作為代理的訊息：

    ```text
    I need a laptop
    ```

    ![測試代理](../../../../../translated_images/9.4_01_TestAgent_RequestDevice_Yes.e73a5076dcd7179901dc0536624a039e372e405a6aac7ab89a632ce81bacdc2e.tw.png)

1. 代理觸發 **Available devices** 並回應可用設備清單。我們將輸入以下內容作為是否希望請求設備的回答：

    ```text
    Yes
    ```

    ![是](../../../../../translated_images/9.4_02_RequestDevice_Yes.25c34743bc168fde33f91743316e7bad87ee0e47150c93e9b82c4662404dcaba.tw.png)

1. 注意代理根據指示調用 **Request device**，並且自適應卡現在顯示在代理訊息中。

    選擇 **Surface Laptop 15** 設備並添加以下內容作為評論：

    ```text
    I need 16GB of RAM please
    ```

    ![選擇設備並輸入評論](../../../../../translated_images/9.4_03_SelectDeviceAndEnterComment.570ea590309bf97edc40c6f7b53dbdc1174365860d8e8a4c32cfb7f1837621c2.tw.png)

1. 向下滾動直到看到 **提交請求** 按鈕，然後選擇它以將自適應卡提交給代理。

    ![提交請求](../../../../../translated_images/9.4_04_SubmitRequest.ce3f4f44b90243a18dbfb401548b9b3cefd3ea17d8293a1bc3377323e3449da9.tw.png)

1. 選擇 **允許**，讓代理使用您的憑證進行兩個連接器操作的身份驗證。

    ![允許](../../../../../translated_images/9.4_05_SelectAllow.f7b5bda068fbaee83dcb1cff03a52c946fb4d879137c55f4e5f9eb3953985e0e.tw.png)

1. 代理將顯示包含所選型號的確認訊息，然後重定向到 **End of Conversation** 主題。太棒了！

    ![請求已提交](../../../../../translated_images/9.4_06_RequestSubmitted.1d4d2e9afbc222a5ba79a4c254e7b2364d6eafc1a200ad6ac0aa142f9f10642d.tw.png)

1. 選擇 **是**以驗證 **End of Conversation** 主題的其餘部分。

    ![選擇是](../../../../../translated_images/9.4_07_RedirectNode.e7b1390e4eafe8c2c815fc8ce7fdda56617d9fbeccb0d59423ad2899a8e5f897.tw.png)

1. 接下來，通過選擇評分卡中的任意星星來評價體驗。

    代理將進入 **End of Conversation** 主題中的最後 **問題** 節點。選擇 **否**。

    ![結束對話主題](../../../../../translated_images/9.4_08_EndOfConversation.b35507f7f561633c0cb3b6c15dc007ae4197a72d58afd8ae616bea439bd6e148.tw.png)

1. 主題將完成，最終訊息將顯示在測試面板中。

    ![結束對話主題](../../../../../translated_images/9.4_09_EndOfConversation.438891b82e322b8a2648533200fbcd01c660ab049223b0920cdd0fbfcdeeb888.tw.png)

1. 檢查您的電子郵件帳戶收件箱以查看代理流程發送給管理者的電子郵件。您可以看到所選設備的詳細資訊以及在自適應卡中輸入的備註。

    ![收到電子郵件](../../../../../translated_images/9.4_10_ReviewEmailMessageWithComment.b0138b0bb9d08aacbd8bbb02fdb633a6796b4131cf8d83212adeabaa1ce04a18.tw.png)

1. 點擊超連結，瀏覽器應加載設備的 SharePoint 項目。太棒了！

    ![點擊電子郵件中的超連結](../../../../../translated_images/9.4_11_SelectLinkInEmail.2179f17165b61ba1e8aee68e8de4c752d64b0780ad86e0fe9054580d9c24e208.tw.png)

#### 9.4.2 請求設備但未在自適應卡中輸入評論

現在我們測試未輸入評論的情境。

1. 重複以下步驟：

    - **刷新**測試面板並選擇 **活動地圖** 圖示
    - 輸入訊息 `I need a laptop`
    - 回答 `Yes` 表示希望請求設備

    ![請求設備](../../../../../translated_images/9.4_12_RequestDevice_Yes.1e369b8a52547fade4b84a4e36b399ee0692c6edbaa778ba90fe9c15cae75c5c.tw.png)

1. 這次選擇 **Surface Laptop 13** 作為設備，並且不輸入評論。

    ![選擇設備](../../../../../translated_images/9.4_13_SelectDevice.d9ad15d17de3f06fd948bd529f116f7c05bedf79c016180d8a1dd7e378322b0e.tw.png)

1. 通過選擇 **提交請求** 按鈕來提交請求。

    ![提交請求](../../../../../translated_images/9.4_14_SubmitRequest.a783ad8460bfb4485cfd2e97db2c065d9d6bf803279e3bd1569fe3e93548a578.tw.png)

1. 這次您收到的電子郵件中，評論將顯示為 **無**。

    ![收到電子郵件](../../../../../translated_images/9.4_15_ReviewEmailMessage.137f35152c9da4b4a02bebec5f0cc9e55cfa25679770ace003aa19482ed0f3eb.tw.png)

#### 9.4.3 不請求設備

我們來測試最後一個情境，即不請求設備，代理應根據指示調用 **Goodbye** 主題。

1. 重複以下步驟：

    - **刷新**測試面板並選擇 **活動地圖** 圖示
    - 輸入訊息 `I need a laptop`
    - 這次回答 `No` 表示不希望請求設備

    ![測試代理](../../../../../translated_images/9.4_16_TestAgent_RequestDevice_No.85f205968f1d4083f20cc890a707748f8e06c01a19536cd299a13bdde2350de7.tw.png)

1. 代理調用了 **Goodbye** 主題，並詢問主題中定義的問題。

    ![調用 Goodbye 主題](../../../../../translated_images/9.4_17_Goodbye.05ee598a987237e02866647a9699b0efa7ac58d1f448497f956af2ee815cb961.tw.png)

## ✅ 任務完成

恭喜！👏🏻 您已學會如何建立代理流程並將其添加到現有的 **Request device** 主題中，以及如何將代理重定向到其他主題。

這是 **Lab 09 - 添加代理流程以進行自動化並增強主題功能** 的結尾，點擊以下連結進入下一課程。我們將在下一課程的實驗中擴展此實驗的使用案例。

⏭️ [進入 **添加事件觸發器 - 啟用自主代理功能** 課程](../10-add-event-triggers/README.md)

## 📚 策略資源

🔗 [介紹代理流程：透過以 AI 為主的工作流程轉變自動化](https://www.microsoft.com/microsoft-copilot/blog/copilot-studio/introducing-agent-flows-transforming-automation-with-ai-first-workflows/)

🔗 [代理流程概述](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview?WT.mc_id=power-172621-ebenitez)

🔗 [使用代理流程與您的代理](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-172621-ebenitez)

🔗 [參考指南中的函數列表](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez)

📺 [Copilot Studio 中的代理流程](https://www.youtube.com/watch?v=VJTKyk3Pr7s)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/09-add-an-agent-flow" alt="分析" />

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們致力於提供準確的翻譯，請注意自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。