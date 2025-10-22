<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c04b3587170139bc23e3b5cfc24c89ac",
  "translation_date": "2025-10-22T19:51:01+00:00",
  "source_file": "docs/recruit/07-add-new-topic-with-trigger/README.md",
  "language_code": "tw"
}
-->
# 🚨 任務 07：新增主題及觸發器與節點

## 🕵️‍♂️ 行動代號：`保持主題行動`

> **⏱️ 行動時間窗口：** `~60 分鐘`

🎥 **觀看操作指南**

[![觸發器影片縮圖](../../../../../translated_images/video-thumbnail.a84cf7cb473be282861469420c5e2c16adb53bcfd64c7c07fbd579e8d32bf8b2.tw.jpg)](https://www.youtube.com/watch?v=7iPAZaA8nJs "在 YouTube 上觀看操作指南")

## 🎯 任務簡介

你已經建立了一個代理，它能聆聽、學習並回答問題——但現在是時候更具策略性了。在這次任務中，你將深入了解代理的運作方式，並教它如何精準地回應特定的提示。

透過主題和觸發器，你的代理可以：

- 辨識意圖

- 使用邏輯引導對話

- 收集並儲存變數

- 觸發流程並採取行動

你不僅僅是在建立對話，而是在構建它的決策核心。歡迎來到神經連結中心。

## 🔎 目標

在這次任務中，你將學到：

1. 了解什麼是主題以及它在為代理創建結構化對話中的角色
1. 學習主題的結構，包括觸發短語和對話節點
1. 探索不同類型的對話節點以及如何使用 Power Fx 實現動態邏輯
1. 從零開始創建自定義主題以處理特定的使用者請求和任務
1. 建立一個功能性主題，透過連接器和工具連接到 SharePoint 資料

## 🤔 什麼是主題？

主題是一種結構化的對話，幫助你的代理回應特定的使用者問題或任務。可以將主題視為代理可以處理的小型對話或任務。每個主題都設計用來回應特定的使用者問題或請求。

### 🌌 主題的目的

根據使用者需求，主題通常有三種常見目的：

**資訊性** - 回答以下類型的問題：

- `什麼是…？`
- `什麼時候…？`
- `為什麼…？`
- `你能告訴我…？`

**任務完成** - 幫助使用者完成某些事情：

- `"我想要…"`
- `"我該如何…？"`
- `"我需要…？"`

**故障排除** - 解決問題：

- `某些東西無法正常運作…`
- `我遇到錯誤訊息…`
- `我看到一些意外的情況…？`

你也可以為模糊的問題創建主題，例如 `我需要幫助`，這些問題會在繼續之前向使用者詢問更多細節。

## 🐦 為什麼主題很有用？

主題幫助你：

- 組織代理的知識。

- 讓對話更自然。

- 有效解決使用者問題。

## 🪺 主題的類型

1. **系統主題** - 這些是內建的，處理常見事件，例如：
    - 開始對話
    - 結束對話
    - 處理錯誤
    - 要求使用者登入
    - 升級至人工代理

1. **自定義主題** - 你可以創建這些主題來處理特定的任務或問題，例如：
    - 員工請假申請
    - 申請新設備或更換設備

![主題的類型](../../../../../translated_images/7.0_01_Topics.6e55d2e01c1cc0994b7af05be3c1629b78d46b37cc82f59c7893d4ad90af707e.tw.png)

## 🧬 主題的結構

每個主題通常包含以下內容。

### 🗣️ 觸發短語

這些是使用者可能說出的用來啟動主題的詞或句子。

**範例：**

對於請假申請主題，觸發短語可能是：

- `我想申請休假`
- `申請休假`
- `請假申請`
- `如何提交請假申請？`

對於設備申請主題，觸發短語可能是：

- `我需要一個新設備`
- `我可以申請設備嗎？`
- `你能幫我申請設備嗎？`

### 💬 對話節點

主題由節點組成，這些節點是代理在主題被觸發後遵循的步驟。你可以連接這些步驟來建立代理在與使用者互動時遵循的對話流程。

可以將這些節點視為指令或行動，例如：

- 向使用者提問
- 發送訊息
- 呼叫外部服務，例如請假管理系統
- 設定或檢查變數
- 使用條件分支對話
- 導向其他主題

![對話節點](../../../../../translated_images/7.0_03_ConversationNodes.7b1d93b7d4522d544d7f9eed597a5ef30b9f96ee1670efd048528ce13423481a.tw.png)

以下是代理中可以添加的主要節點類型：

#### 發送訊息

- **目的** - 向使用者發送訊息。
- **範例** - `感謝您的申請！我會幫助您完成。`

此節點讓代理向使用者發送訊息，可以是簡單的文字或豐富的內容，例如圖片、影片、卡片、快速回覆和自適應卡片。

你可以使用變數個性化訊息，添加多種訊息變化以增加多樣性，甚至可以為語音啟用的頻道自訂語音輸出。

!!! tip
    將其視為一個「說些什麼」的區塊，幫助代理清晰且互動地與使用者溝通。

#### 提問

- **目的** - 向使用者提問並等待回答。
- **範例** - `您的休假日期是什麼時候？`

此節點用於在對話中向使用者詢問特定資訊，並將其回答儲存在變數中以供後續使用。

你可以自訂問題類型，例如文字輸入，或使用實體來定義使用者可選擇的值列表，並定義代理在使用者提供無效答案或跳過問題時的行為。

它還支援豐富的內容，例如圖片和快速回覆，並允許你微調驗證、重新提示和中斷設置，以使對話流程順暢。

!!! tip
    將其視為一個「詢問並傾聽」的區塊，幫助代理以你定義的結構化方式與使用者互動。

#### 使用自適應卡片提問

- **目的** - 使用 JSON 發送豐富的互動式卡片。
- **範例** - 顯示日曆日期選擇器的卡片，供使用者選擇日期。

此節點顯示豐富的互動式卡片，使用者可以填寫並提交，例如包含文字框、按鈕和圖片的表單。它捕捉使用者的輸入並將其儲存在變數中，代理可以在後續對話中使用。

!!! tip
    將其視為一個可自訂的「表單生成器」區塊，讓代理更具吸引力並能收集使用者的詳細資訊。

#### 添加條件

- **目的** - 為對話添加邏輯。檢查某些條件並決定下一步。
- **範例** - 如果使用者說 `是`，則進入下一步。如果說 `否`，則結束對話。

此節點透過檢查變數是否符合某些條件，在代理的對話流程中創建決策點。根據條件是否為真或假，代理會遵循不同的路徑。

!!! tip
    將其視為一個「如果-否則」區塊，幫助代理根據使用者輸入或儲存的資料做出決策。

#### 變數管理

- **目的** - 在對話中儲存或清除資訊（稱為變數）。
- **範例** - 儲存使用者在顯示自適應卡片的提問節點中選擇的日期。

此節點讓代理在對話中儲存和管理資訊，例如使用者的姓名、回答或偏好。你可以使用不同類型的變數，例如文字、數字或日期，這些變數可以限定於單一主題、跨主題共享（全域），甚至可以從系統或環境中提取。

!!! tip
    將其視為一個「記憶盒子」，幫助代理記住資訊並在與使用者的對話中持續使用。

#### 主題管理

- **目的** - 將對話移至另一個主題或主題內的步驟，轉移對話或結束主題或對話。
- **範例** - 轉向「休假政策」主題。

此節點允許代理在不重新開始對話的情況下從一個主題跳到另一個主題，結束主題，轉移或結束對話，或進入同一主題中的不同步驟。它幫助使用者順利地在對話流程的不同部分之間過渡，並且你可以在它們之間傳遞變數以保持上下文。

!!! tip
    將其視為一個「轉到另一部分/步驟」區塊，幫助代理在與使用者聊天時更具靈活性。

#### 添加工具

- **目的** - 連接到工具，例如連接器、代理流程、提示、自定義搜尋、搜尋查詢、技能、模型上下文協議。
- **範例** - 使用者提交休假申請後執行代理流程。

此節點賦予代理與外部系統互動或執行特定任務的能力，例如發送電子郵件、檢查天氣或訪問資料庫。你可以使用內建連接器、自定義 API、代理流程、提示或連接到模型上下文協議（MCP）伺服器添加工具，甚至透過電腦使用工具進行桌面應用程式的圖形使用者介面自動化。

!!! tip
    將工具視為「行動區塊」，賦予代理超能力，能執行超越聊天的事情，例如調用 API、執行流程或自動收集使用者輸入。

#### 生成答案節點

- **目的** - 使用大型語言模型根據使用者問題和任何連接的資料生成自然、人性化的回應。
- **範例** - 使用包含休假權益資訊的連接知識來源回答使用者關於休假申請的問題。

此節點使代理能夠使用來自各種知識來源（例如網站、文件、SharePoint 或自定義資料）的資訊回應使用者問題。當未找到匹配的主題時，它可以用作備援，或者在主題內提供更詳細、動態的回答，基於你配置代理使用的特定來源。

!!! tip
    將其視為「智能回答區塊」，幫助代理透過搜尋你定義的可信內容提供有用且準確的回應。

#### HTTP 請求節點

- **目的** - 透過發送 API 呼叫（例如 `GET` 或 `POST`）連接代理到外部系統以獲取或更新資料。
- **範例** - 當使用者詢問其剩餘休假天數時，代理執行 `GET` 請求至請假管理系統，從 API 回應中提取 `remainingLeaveDays` 並將值回覆給使用者。

此節點讓代理透過發送 REST API 呼叫（例如 `GET` 或 `POST` 請求）連接到外部系統。你可以使用標頭、正文內容自訂請求，甚至使用 Power Fx 包含動態資料，然後將回應儲存在變數中以供後續對話使用。

!!! tip
    將其視為「伸手獲取資訊」區塊，幫助代理與其他服務交流，例如檢索使用者詳細資訊或向另一系統發送資料。

#### 發送事件

- **目的** - 讓代理發送非訊息行動，例如系統更新或工具觸發，至客戶端或頻道，幫助其執行任務。
- **範例** - 回應使用者加入聊天時顯示歡迎訊息。

此節點讓代理向外部系統或頻道發送非訊息行動，這些系統或頻道可以決定如何回應。你為每個事件命名並附加一個值，可以是簡單的數字或文字、變數或 Power Fx 公式，並以 JSON 物件形式發送。

!!! tip
    將其視為「靜默觸發」區塊，幫助代理在幕後執行任務或與外部工具交流，而不需要使用者說任何話。

## 🏋🏻‍♀️ 在節點中使用 Power Fx

在 Copilot Studio 中，Power Fx 是一種低代碼程式語言，用於為代理添加邏輯和動態行為。它與 Microsoft Power Apps 中使用的語言相同，設計簡單且類似 Excel，使開發者和非開發者都能輕鬆使用。

![Power Fx 表達式](../../../../../translated_images/7.3_13_EnterFormula.d17cc9f73e01e1cab8e2420a55bcb726ae0a0e55673f81ee3d7fe12d20148b92.tw.png)

### Power Fx 在主題中的功能

- 設定和操作變數
      - 範例：`Set(userName, "Adele Vance")`
- 創建條件
      - 範例：`If(score > 80, "通過", "未通過")`
- 格式化和轉換資料
      - 範例：`Text(DateValue, "dd/mm/yyyy")`

### 為什麼使用 Power Fx？

- **靈活性：** 你可以在不編寫完整代碼的情況下構建邏輯。

- **熟悉感：** 如果你使用過 Excel 公式，會感覺非常相似。

- **強大功能：** 它讓你能個性化對話、驗證輸入，並根據使用者資料控制代理的行為。

## 🏗️ 如何創建和編輯主題？

有兩種方式可以為代理創建和編輯主題。

### 1. 從空白開始創建

這允許你從零開始構建自定義的對話流程，並且在編輯主題時可以根據需要添加或移除節點。

![添加主題](../../../../../translated_images/7.0_04_AddATopic.111df124a4a7ff8b41e3f577fbef08885ac52d9d6c0c705a82f5968e5ccc384d.tw.png)

#### 為什麼這很有用

- 它讓你完全控制代理的回應方式。
- 你可以使用變數、Power Fx 和條件自訂邏輯。
- 非常適合為特定業務需求構建量身定制的體驗。

### 2. 使用 Copilot 創建
這允許您使用自然語言描述您的需求，Copilot將為您建立對話。同樣適用於編輯主題，使用自然語言，Copilot將審查並修改主題。

#### Copilot支援的功能

- 可以建立和編輯：
      - 訊息節點
      - 問題節點
      - 條件節點
- 不支援進階設定，例如如何在使用者未回應時重新提示或如何在提問期間管理中斷。若有需要，您仍然可以手動調整這些設定。

#### 為什麼這很有用

- 借助AI協助加速開發。
- 讓您專注於邏輯和使用者體驗，而非重複的設置。
- 使對話流程的迭代和改進更加輕鬆。

#### ✨ 範例提示

- **建立主題**
      - `接受使用者的姓名、年齡和出生日期，然後重複他們的回答`
      - `收集使用者的街道地址、州和郵遞區號。使用者應能最多重試每個問題4次`

- **編輯主題**
      - `新增一個問題，詢問使用者的出生日期`
      - `在Adaptive Card中總結收集的信息。`

## 👩🏻‍🎨 好的，我該如何為我的代理設計主題？

### 🧙🏻‍♂️ 第一步 - 了解使用者需求

首先識別使用者可能向您的代理提出的常見問題或任務。這些可能包括：

- 使用者經常詢問的問題，例如，`我的病假津貼是多少？`
- 使用者希望完成的常見任務，例如提交表單
- 使用者經常遇到的問題，例如登入問題

### 📦 第二步 - 將情境分組

根據之前學到的主題目的，將使用者需求分為三類：

- 資訊型 - 使用者想要了解某些資訊
- 任務完成 - 使用者想要完成某些事情
- 疑難排解 - 使用者需要幫助解決問題

### 🗺️ 第三步 - 繪製對話流程

繪製代理應如何回應的簡單對話流程

- 從問候或確認開始
- 提出後續問題以獲取詳細信息
- 提供答案或執行操作

!!! tip
    保持對話簡短且專注。只問必要的問題。

### 🔀 第四步 - 處理不同類型的對話

設計以下兩種情境：

- **單輪對話** - 一個問題，一個答案

- **多輪對話** - 有後續問題的來回對話

範例：

- 使用者：`我想申請休假。`

- 代理：`好的！您希望休假從哪一天開始？`

- 使用者：`7月15日`

- 代理：`收到。您的休假將於何時結束？`

- 使用者：`7月22日。`

- 代理：`謝謝！請問您的休假原因是什麼？`

- 使用者：`家庭旅行。`

- 代理：`感謝您的詳細信息。我已提交您的休假申請，從7月15日到7月22日，原因是家庭旅行。您很快會收到確認。`

### 🤖 第五步 - 使用AI處理意外問題

即使您已設計了休假申請的主題，使用者可能會提出不直接涵蓋的問題。這時AI功能如_對話增強_系統主題就派上用場了。

此主題包含生成答案節點，讓您的代理可以立即使用已連接的知識來源。在代理層級添加的任何知識來源都會自動包含在_對話增強_系統主題的生成答案節點中。

#### 範例

- 使用者：`我可以將未使用的休假天數延至明年嗎？`

這個問題可能不在您預定的主題流程中，尤其是如果您的主題僅處理提交休假申請。

#### AI如何幫助

如果您的代理已連接到公司的人力資源政策文件或內部網站，AI可以：

- 搜索相關的休假政策
- 理解並總結規則
- 代理回應：`根據人力資源政策，您可以將未使用的休假天數延至下一個日曆年。如需更多詳細信息，請查看人力資源門戶的休假政策部分。`

#### 為什麼這很有用

- 您不需要為每個與政策相關的問題手動建立主題。
- AI可以從可信的知識來源中提取準確答案。
- 通過使代理更智能、更具回應性來改善使用者體驗。

### 🔬 第六步 - 測試主題和對話流程

在發布主題之前：

- 使用真實問題或真實範例輸入進行測試。
- 確保它聽起來自然且有幫助。

!!! tip
    根據測試結果對主題進行改進，例如新增更多節點或移除節點並重定向到其他主題。

### ⚠️ 第七步 - 避免重複網站內容

不要複製網站上已有的內容。

- 專注於使用者經常詢問的主題。
- 根據聊天記錄或支援請求新增主題。

### ✨ 對話流程範例

以下是一個處理休假申請的主題範例。

#### 第一步：觸發詞

使用者輸入，

`我想申請休假`

#### 第二步：代理使用Adaptive Card詢問詳細信息

代理詢問，

`好的！您希望休假從哪一天開始？`

Adaptive Card包含開始日期和結束日期的日曆選擇控制。

#### 第三步：使用者提供日期

使用者選擇開始日期為2025年8月5日，結束日期為2025年8月10日，並提交卡片。日期值存儲在Adaptive Card的輸出中作為變數。

#### 第四步：執行雲端流程

執行了一個Power Automate雲端流程，該流程在休假管理系統中創建了一個新申請，並發送電子郵件通知經理休假申請。

#### 第五步：向使用者發送確認訊息

代理回應，

`您的休假申請從8月5日到8月10日已提交。您的經理將審核並很快回覆您。`

## 🧪 實驗室07 - 新增一個包含對話節點的主題

我們現在將學習如何新增一個包含觸發和工具的主題。本實驗室將涵蓋從空白開始建立主題，以便您了解如何根據需求自訂主題。

- [7.1 從空白新增主題](../../../../../docs/recruit/07-add-new-topic-with-trigger)
- [7.2 定義觸發輸入和輸出](../../../../../docs/recruit/07-add-new-topic-with-trigger)
- [7.3 使用連接器新增工具](../../../../../docs/recruit/07-add-new-topic-with-trigger)

### ✨ 使用案例

**作為** 一名員工

**我希望** 知道有哪些可用的設備

**以便** 我能獲得可用設備的清單

讓我們開始吧！

### 先決條件

1. **SharePoint清單**

    我們將使用[課程設置第00課 - 第3步：建立新的SharePoint網站](../00-course-setup/README.md#step-4-create-new-sharepoint-site)中的**Devices** SharePoint清單。

    如果您尚未設置**Devices** SharePoint清單，請返回[課程設置第00課 - 第3步：建立新的SharePoint網站](../00-course-setup/README.md#step-4-create-new-sharepoint-site)。

1. **Contoso客服代理**

    我們將使用之前在[第06課 - 使用Copilot和您的數據建立自訂代理](../06-create-agent-from-conversation/README.md)中建立的代理。

### 7.1 從空白新增主題

1. 在代理名稱附近選擇**主題標籤**。如果看不到，請選擇**+6**，然後您會看到**主題**列出。

    ![選擇主題](../../../../../translated_images/7.1_01_Topics.789ffa4f75830b5f25fb1eeb8fa3e8ba3810b95870cb3dc49d80d8f4ba15a00a.tw.png)

1. **主題**標籤將載入，預設顯示_自訂_主題。您可以根據全部、自訂和系統篩選主題。您目前看到的自訂和系統主題是在代理配置時自動建立的。

    選擇**+新增主題**並選擇**從空白開始**。

    ![從頭開始建立主題](../../../../../translated_images/7.1_02_FromBlank.f3fe83fad24825f8eb498b19af8e472810f657868613b96b3b4e033fa1042e75.tw.png)

1. 為主題輸入名稱。複製並貼上以下內容。

    ```text
    Available devices
    ```

    ![命名主題](../../../../../translated_images/7.1_03_TopicName.06eb34ebe94516c1d898b5dff183f9586f7526f9316bc122dca641ac29967966.tw.png)

1. 輸入概述主題功能的觸發描述。複製並貼上以下內容。

    ```text
    This topic helps users find devices that are available from our SharePoint Devices list. User can ask to see available devices and it will return a list of devices that are available which can include laptops, smartphones, accessories and more.
    ```

    ![輸入觸發名稱和描述](../../../../../translated_images/7.1_04_TriggerDescription.cb748c0358b3af249fcc0fdb0b262185ffed14d8cf628186b8a65ad4bbf14172.tw.png)

### 7.2 定義觸發輸入和輸出

1. 接下來，我們將新增一個輸入變數，生成式AI將在其編排中使用該變數從使用者的訊息中提取設備類型的值。選擇主題中的**更多省略號（...）**並選擇**詳細信息**以查看主題詳細信息窗格。

    ![選擇主題詳細信息](../../../../../translated_images/7.2_01_SelectTopicDetails.cc1b97a86718e101084c366514cc306fe82243a014a44c579394e0f70ba5ca53.tw.png)

1. **主題詳細信息**窗格現在已載入。選擇**輸入**標籤。

    ![輸入標籤](../../../../../translated_images/7.2_02_SelectInputTab.d0b900eb02a8f982324f59e3b7aca34c2cdba78263acdc9301225e1c3e6338b6.tw.png)

1. 選擇**建立新變數**。

    ![建立新輸入變數](../../../../../translated_images/7.2_03_CreateANewVariable.0d45780268d9b6250617c45a9ddd557cdaa23945b66539b313ca8d74f2c96cc2.tw.png)

1. 為變數輸入名稱。複製並貼上以下內容。

    ```text
    VarDeviceType
    ```

    ![輸入變數名稱](../../../../../translated_images/7.2_04_VariableName.56555922eab13cad52fa29d846f4e515d82c2e9bf61c86705f080a1ba4f3b1af.tw.png)

1. 我們現在需要定義輸入和輸出變數。以下是可以為主題輸入和輸出定義的屬性。

    | 欄位    | 值 |
    | ---------- | :--------- |
    | 代理如何填充此輸入？ | 決定代理在執行主題之前如何填充此變數的值。預設設置為_動態填充最佳選項_。否則，您可以覆蓋輸入值而不是詢問使用者 |
    | 變數資料類型  | 變數的資料類型。支援的資料類型包括`String`、`Boolean`、`Number`、`Date`、`DateTime`、`DateTimeNoTimeZone`、`Time`、`Record`、`Table`、`Unspecified`、`From sample data` |
    | 顯示名稱   | 變數名稱   |
    | 識別為  | 代理捕捉正確值類型的實體類型  |
    | 描述    | 描述有助於代理在執行主題之前自動填充輸入或生成問題以詢問值   |

    _代理如何填充此輸入？_、_變數資料類型_和_顯示名稱_可以保持原樣。更新**識別為**屬性為**使用者的完整回應**。

    ![更新識別為](../../../../../translated_images/7.2_05_IdentifyAs.a502101e6f60c27ed8c8b1eff049b8ceedd0531845b932f9b7608ad3d8220090.tw.png)

1. 複製並貼上以下內容作為描述。

    ```text
    List of possible values: Laptop, Desktop, Smartphone
    ```

    ![描述](../../../../../translated_images/7.2_06_InputDescription.844e1776080e595c6c221bcc33d7a269abcc7e4755c8f11b284c3950f42166b5.tw.png)

1. 接下來，讓我們定義主題的輸出。選擇**輸出**標籤。

    ![選擇輸出標籤](../../../../../translated_images/7.2_07_SelectOutputTab.ab5aa0a2f385f1492df5a67f8f2cbed752dc0258c1e1ddb9928d204405ec403a.tw.png)

1. 選擇**建立新變數**。

    ![建立新輸出變數](../../../../../translated_images/7.2_08_CreateANewVariable.5518205f121014ff4757af062bedfd38ce768c8f38291dd9d6489d67cd5d5dc8.tw.png)

1. 更新以下屬性。

    **變數名稱** - 複製並貼上以下內容。

    ```text
    VarAvailableDevices
    ```

    **變數資料類型** - 選擇**Table**作為資料類型。

    **變數描述** - 複製並貼上以下內容。

    ```text
    List of available devices by device type
    ```

    ![輸出屬性](../../../../../translated_images/7.2_09_OutputVariable.fb0e159fbad5052280040090352c50faf4d91228095c3762e75440b2842e0d29.tw.png)

1. 我們現在已完成主題的輸入和輸出的定義。選擇**X圖示**退出**主題詳細信息**窗格。

    ![退出主題詳細信息窗格](../../../../../translated_images/7.2_10_ExitTopicDetailsPane.6e8981434f04049bef7ab93f9545ee433087e1c99cdfe27b355ee9858ddfde99.tw.png)

### 7.3 使用連接器新增工具

1. 接下來，我們將新增一個節點，使代理能夠從**Devices** SharePoint清單中檢索設備清單。選擇觸發下方的**+圖示**。

    ![新增工具](../../../../../translated_images/7.3_01_AddNode.4656328835f7a28bc5f66c440d620a0990bf098e858619ff2c32a9b14fae7c4f.tw.png)

1. 選擇**新增工具**節點，然後選擇**連接器**標籤。搜索`Get items`並選擇**Get items** SharePoint連接器操作。

    ![選擇Get items](../../../../../translated_images/7.3_02_GetItems.a6bdfb122449de789e7c58592f4c3e3a0f38b7bdcec2e0e5eab34b2d9d991f97.tw.png)

1. 需要為連接器建立新的連接。選擇**箭頭圖示**並選擇**建立新連接**。

    ![新增工具](../../../../../translated_images/7.3_03_CreateNewConnection.03f49fab97e5f5f2a298e4b1b2e5081304c9c98c5f3ad5be0302c241c3d83d94.tw.png)

1. 會顯示兩個選項，允許您直接連接到SharePoint Online或本地SharePoint。預設選擇**直接連接（雲端服務）**選項，這也是我們將用於連接的選項。
選擇 **建立**。

![選擇建立](../../../../../translated_images/7.3_04_SelectCreate.f2216f1e276ed153e06d5b5d47f170a0f9cc6854aa05f0736623acb3aeee1229.tw.png)

1. 選擇您已登入的使用者帳戶。

![選擇已登入的使用者帳戶](../../../../../translated_images/7.3_05_SelectSignedInUserAccount.e27a0ada918a1cf4477f3966adcc5f1d033a8998a2589d02d1208f21f5d93938.tw.png)

1. 接下來，您需要確認您的使用者帳戶可以用於連接到 SharePoint 連接器。選擇 **允許存取**。

![選擇允許存取](../../../../../translated_images/7.3_06_AllowAccess.69f012dbcedf7ebc1869e648a5eaa661d085b15aa7a2eb69e69c5b63adfa36dd.tw.png)

1. 選擇 **提交**，將 **取得項目** SharePoint 連接器動作新增為主題中的一個節點。

![提交](../../../../../translated_images/7.3_07_ConnectedSelectSubmit.16ec31ef062696cabb6e7964879debd177f2b9162f88ef95ae1b4eed85e08a21.tw.png)

1. **取得項目** SharePoint 連接器動作現在已新增至主題。我們現在可以開始配置動作的輸入。選擇 **省略號 (...) 圖示**，然後選擇 **屬性**。

![選擇屬性](../../../../../translated_images/7.3_08_GetItemsProperties.32bdda34a1d73a55eb2893695e4b4cf15cd899806e616d0b0b5015471414c9d7.tw.png)

1. **取得項目** 配置窗格將出現，預設情況下，您會看到 **輸入** 標籤。選擇 **啟動** 標籤，並在 **使用描述** 欄位中輸入描述。複製並貼上以下內容。

    ```text
    Retrieves devices from SharePoint list
    ```

> 當我們查看代理的 _管理您的連接_ 頁面時，這將非常有用。我們稍後會回到這裡。

![取得項目描述](../../../../../translated_images/7.3_09_UpdateDescription.76a8d2ebddd4c3e4ca423daad7485afa60f31f37c97e16529d94e224f9709d60.tw.png)

1. 選擇 **輸入** 標籤，並選擇您在 [課程設置 - 第 3 步：建立新的 SharePoint 網站](../00-course-setup/README.md#step-4-create-new-sharepoint-site) 中設置的 **Contoso IT** 網站和 **Devices** 清單。

![配置取得項目輸入](../../../../../translated_images/7.3_10_GetItemsInputs.17f8689e660c480dd405ab2ab57db34dcd2b8e697ec09d54c8f8649eb619c58b.tw.png)

1. 現在，僅顯示 SharePoint 清單中基於以下條件的設備：
   - 選定的值，
   - 且僅顯示狀態為 _可用_ 的設備，

我們需要應用篩選器。這可以通過使用 Power Fx 輸入篩選查詢來實現。選擇 **省略號 (...) 圖示**。

![選擇省略號圖示](../../../../../translated_images/7.3_11_SelectVariable.33bfe876cc230569ea0f6cc5e1efa100432509e44342e9b3d6a9e65ee2bc525f.tw.png)

1. 預設情況下，您將位於 **自訂** 標籤。選擇 **公式** 標籤。

![選擇公式標籤](../../../../../translated_images/7.3_12_SelectFormula.a7aba25c95956d113865da3f30da3f3872e12c7a7a8f3c65098a3e3fac9616a4.tw.png)

1. 選擇 **展開** 圖示以放大 **公式** 欄位。複製並貼上以下 Power Fx 表達式。

我們使用 `Concatenate` 函數來建立一個表達式，用於篩選：
   - SharePoint 欄位 **Status** 等於 _Available_
   - 且 SharePoint 欄位 **Asset type** 等於 _從問題節點選擇的設備_。

    ```text
    Concatenate("Status eq 'Available' and AssetType eq '", Topic.VarDeviceType, "'")
    ```

選擇 **插入**。

![輸入 Power Fx 表達式並選擇插入](../../../../../translated_images/7.3_13_EnterFormula.d17cc9f73e01e1cab8e2420a55bcb726ae0a0e55673f81ee3d7fe12d20148b92.tw.png)

1. Power Fx 表達式現在將應用於 **取得項目** 動作的篩選查詢輸入參數。接下來，在 **限制欄位依據檢視** 中選擇 **所有項目** 檢視。這將僅根據選定的檢視檢索清單中的欄位。

![依據檢視列出欄位](../../../../../translated_images/7.3_14_LimitColumnsByView.5537126aaa087bd7f81cc35dfe182aa72cdbec4fe1fb5c2e15823a1275dcaa71.tw.png)

1. 接下來，我們將更新輸出的變數名稱。選擇 **輸出** 標籤並選擇 `GetItems` 變數。

![更新變數](../../../../../translated_images/7.3_15_ConfigureOutputs.d4cb0c5c8e37d1859ed705bd1582fce2d063e7f4d65cc036127a846d743ff391.tw.png)

1. 將名稱更新為以下內容。

    ```text
    VarDevices
    ```

![更新變數名稱](../../../../../translated_images/7.3_16_RenameVariable.55d7adb355808d39fe515bf980af123c60e218fa427354079e86efc412dc0f83.tw.png)

1. 向下滾動，在 **使用** 部分中選擇 **全域**。這將使變數可供任何主題使用。

![更新為全域變數](../../../../../translated_images/7.3_17_UpdateToGlobalVariable.09bdb05c0938898a04e48b6bcebee1584f17080b63b2577594be74f9f77a5bc3.tw.png)

1. **關閉** **變數屬性** 窗格。

![關閉變數屬性窗格](../../../../../translated_images/7.3_18_ExitVariablePropertiesPane.b1a5e76dfe490bdf1274d8e8c78df44f9b3e3542180fa52fb6f903a980ef31ab.tw.png)

1. 選擇 **加號 +** 圖示以插入新節點，選擇 **變數管理**，然後選擇 **設定變數值**。

![新增設定變數值節點](../../../../../translated_images/7.3_19_AddSetAVariableValueNode.958d21c21727ef92506fe76cf0458f05ac8508d84d0a4917077d2889410330e2.tw.png)

1. 在 **設定變數** 輸入參數中選擇 **大於** 圖示。

![設定變數](../../../../../translated_images/7.3_20_SelectAVariable.9d3beb144002569b947c90cbec22afcc9cb34f277b21e3f65dcaf69831abc438.tw.png)

1. 選擇先前建立的主題輸出作為變數，**VarAvailableDevices**。

![儲存主題](../../../../../translated_images/7.3_21_SelectVarAvailableDevicesOutput.8d7259eb6ce1bc7c89de10b768b62dc3008ad7468c094249282bfe66436d1672.tw.png)

1. 接下來，選擇 **省略號 (...) 圖示** 以定義變數的值。

![選擇變數值](../../../../../translated_images/7.3_22_SelectVariable.f16319e644afc97d24a8cddaf64a7df9fcc52acd7e284b21f20b685a6e53887a.tw.png)

1. 我們現在將使用 PowerFx 表達式將變數值設定為 **取得項目** 回應中的 `value` 屬性，並通過添加 `Global` 前綴使變數的[範圍](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172618-ebenitez)全域化。

選擇 **插入** 並 **儲存** 主題。

![變數值的 Power Fx 公式](../../../../../translated_images/7.3_23_PowerFxFormula.f860daa2c8423021926f0697177279ede3d8d443714d471a77e655c3c42edb07.tw.png)

1. 接下來，我們需要更新代理指示。選擇 **概述** 標籤並選擇 **編輯**。

![編輯指示](../../../../../translated_images/7.3_24_EditInstructions.ce65a6cbcd74792885230af1da432fbb4079fd8b0f5af24ab840453a900b67a8.tw.png)

1. 在指示中新增一行，複製並貼上以下內容。

    ```text
    - Help find available devices and give full details using [Available devices]. Always extract the VarDeviceType from the inputs. After giving device details, ask the user if they want to request a device from the list of available devices.
    ```

此指示將引導生成式 AI 調用 **可用設備** 觸發器，以顯示來自 **Devices** SharePoint 清單的可用設備清單。選擇方括號中的整個主題佔位符。

![新增指示](../../../../../translated_images/7.3_25_AddInstructions.1e83853476fed3c8b1c43e657bd1c1351108702288a8f688d8543fbf1c2946fb.tw.png)

1. 輸入斜線字符 `/`，將出現主題清單。選擇 **可用設備** 主題。

![參考觸發器](../../../../../translated_images/7.3_26_SelectAvailableDevicesTopic.1a1beaa256f5417153b7bc55de848b89778f666c213b3a3935444526ab881f0b.tw.png)

1. **儲存** 更新的指示。

![儲存指示](../../../../../translated_images/7.3_27_SaveUpdatedInstructions.39908bb60990be971039bf392088fd0ecfa148c4496a6ad7413e1267b9091623.tw.png)

1. 我們現在要測試更新後的代理。選擇右上角的 **測試** 以顯示測試窗格並 **刷新** 測試窗格。向代理輸入以下訊息。

    ```text
    I need a laptop
    ```

![測試](../../../../../translated_images/7.3_28_Test.a273496de273bf3bebb9ac1504c1cedd8947c250ccf8454cf38b2effbdf66f71.tw.png)

1. 在代理繼續之前，使用者需要驗證其連接是否可用。選擇 **允許**。

![選擇允許](../../../../../translated_images/7.3_29_SelectAllow.9f508c4001270252924d889792ecf0cc2a984954b903bb00f7ce6b2dc43d08e3.tw.png)

1. 代理將執行 SharePoint 工具，根據使用的 Power Fx 表達式檢索篩選後的設備清單，其中設備類型等於 "laptop"，狀態等於 "available"。將以項目符號的形式返回格式化的回應供使用者閱讀。

![測試回應](../../../../../translated_images/7.3_30_TestResponse.b60253568edc8b68d737a62960f4a3fa3620d2ba4658b05aa2503ad5fd763383.tw.png)

1. 最後一件需要學習的事情是查看代理的 _管理您的連接_ 頁面中使用的連接。選擇 **省略號 (...)**，然後選擇 **管理連接**。

![管理連接](../../../../../translated_images/7.3_31_ManageConnections.151932ec4f907e020b67c418cf591806da164c74f6b1d9b73c04d7374d9fc505.tw.png)

1. 此頁面顯示代理使用的所有連接。目前僅列出一個與主題中新增的 SharePoint 工具相關聯的連接。在 **使用者** 欄中選擇 **1 工具**。

![使用者](../../../../../translated_images/7.3_32_UsedBy.1e5ff032f1e02a565a0dafdde4f9436486ed3f012fcc23b824871a71b6de543e.tw.png)

1. 這裡可以查看 **取得項目** 動作的詳細資訊，還記得我們之前輸入的 _使用描述_ 嗎？這裡可以看到使用描述。選擇 **關閉**。

> 這讓我們知道使用了哪些動作及其用途。這有助於我們組織連接 📁。

![使用描述](../../../../../translated_images/7.3_33_UsedByInformation.74a42aedb6dc906c678ff8b281a8706e1c0156ee7375111ed20e02d1a1dfd808.tw.png)

1. 返回您的 Copilot Studio 瀏覽器標籤，並 **刷新** 測試窗格以清除測試。

## ✅ 任務完成

恭喜！👏🏻 您已學會如何從頭開始新增新主題，如何新增調用 **取得項目** SharePoint 連接器動作的工具，並使用 Power Fx 篩選回應以僅返回狀態為可用且設備類型為筆記型電腦的設備。🙌🏻

這是 **Lab 07 - 新增具有對話節點的新主題** 的結尾，選擇以下連結移至下一課程。在接下來的課程實驗中，我們將擴展本實驗的使用案例。

⏭️ [移至 **使用自適應卡增強使用者互動** 課程](../08-add-adaptive-card/README.md)

## 📚 策略資源

🔗 [使用系統主題](https://learn.microsoft.com/microsoft-copilot-studio/authoring-system-topics?mc_id=power-172618-ebenitez)

🔗 [Microsoft Copilot Studio 中的主題](https://learn.microsoft.com/microsoft-copilot-studio/guidance/topics-overview?WT.mc_id=power-172618-ebenitez)

🔗 [設定主題觸發器](https://learn.microsoft.com/microsoft-copilot-studio/authoring-triggers?WT.mc_id=power-172618-ebenitez)

🔗 [定義代理主題](https://learn.microsoft.com/microsoft-copilot-studio/guidance/defining-chatbot-topics?WT.mc_id=power-172618-ebenitez)

🔗 [使用 Power Fx 建立表達式](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172618-ebenitez)

📺 [使用自然語言撰寫主題](https://aka.ms/ai-in-action/copilot-studio/ep6)

📺 [使用連接器新增動作至代理](https://aka.ms/ai-in-action/copilot-studio/ep4)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/07-add-new-topic-with-trigger" alt="分析" />

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而產生的任何誤解或誤釋不承擔責任。