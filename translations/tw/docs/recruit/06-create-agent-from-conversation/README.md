<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "180f9cc0b40527f61be092c9b0f72aba",
  "translation_date": "2025-10-22T19:33:54+00:00",
  "source_file": "docs/recruit/06-create-agent-from-conversation/README.md",
  "language_code": "tw"
}
-->
# 🚨 任務 06：使用自然語言和 Copilot 創建自定義代理並結合您的數據

## 🕵️‍♂️ 行動代號：`代理鍛造行動`

> **⏱️ 行動時間窗口：** `~75 分鐘`

🎥 **觀看操作指南**

[![創建自定義代理影片縮圖](../../../../../translated_images/video-thumbnail.9d5fddc1190fd4a04537488795821ac2f88fdcfe00e017f6e575a33f724e39cb.tw.jpg)](https://www.youtube.com/watch?v=qZTtQVncGFg "在 YouTube 上觀看操作指南")

## 🎯 任務簡介

歡迎回來，代理創造者。本次任務將您置於 Copilot Studio 最強大的功能的指揮席位——僅使用自然語言從零開始創建自定義代理……並使用您的數據為其增強能力。

這不僅僅是另一個聊天機器人。您正在構建一個知識驅動的數字同事——一個能夠推理、回應並引用真實企業信息的助手。

您的武器是什麼？自然語言。您的任務是什麼？設計、訓練並測試一個完全自定義的 IT 幫助台代理，能夠使用 SharePoint、上傳的文件或公司 URL 回答 IT 問題。

讓我們從零開始構建您的代理。

## 🔎 目標

在本次任務中，您將學習：

1. 理解什麼是自定義代理以及它們與預建模板的不同之處
1. 使用自然語言提示和 Copilot 的對話設計創建代理
1. 使用企業知識來源（包括 SharePoint、文件和網站）為代理提供支持
1. 了解生成式編排以及代理如何動態搜索並使用多個數據源回應
1. 構建並測試一個完全功能的 IT 幫助台代理，能夠從您的數據中回答問題

## 🤔 什麼是 _自定義_ 代理？

自定義代理是一個聊天機器人或虛擬助手，您可以在 Copilot Studio 中創建和設計，用於幫助用戶完成特定任務或回答問題。它之所以稱為自定義，是因為：

- **您決定用途** - 幫助用戶申請休假、檢查訂單狀態、提供 IT 相關問題的協助。
- **您定義對話** - 代理的說話內容以及它應如何回應。
- **您使用自己的數據支持它** - 通過內置支持的知識資源連接到您的企業數據。
- **您將其連接到自己的系統或應用程序** - 選擇連接器、流程、REST API 和模型上下文協議服務器。

!!! note
    想像一下：您正在構建自己的數字助手，它可以與用戶交談並為他們完成任務，例如回答問題、收集流程所需的信息或連接到您的企業數據。

### 🤖 自定義代理能做什麼？

自定義代理可以完成以下任務：

- 向用戶詢問信息，例如姓名、日期或偏好。
- 將信息保存到數據庫或表格中。
- 根據問題查找數據並回答。
- 在沒有用戶直接交互的情況下自主工作。
- 根據需求通過直接用戶交互或自主觸發操作，例如發送電子郵件或創建記錄。

### 👩🏻‍💻 為什麼要使用自定義代理？

- 通過自動化重複性任務節省時間。
- 為用戶提供友好且引導式的體驗。
- 根據您的業務或項目需求進行定制。

### ✨ 示例

您創建了一個幫助員工申請休假的自定義代理。

它會詢問員工的姓名、休假日期及其主管的姓名，然後將信息保存到管理休假申請的指定系統中，例如 SharePoint 列表。

現在，員工不需要導航到 SharePoint 列表並創建新項目，而是直接與代理聊天即可。

## 🗣️ 使用自然語言創建代理

之前您已學習如何在 Copilot Studio 中使用預建代理模板快速構建代理（請參考 [第 05 課 - 使用預建代理快速入門](../05-using-prebuilt-agents/README.md)）。在本課中，我們將深入探討使用 Copilot 的對話式創建體驗。Copilot Studio 使您能夠通過與 Copilot 聊天來輕鬆構建代理，就像進行對話一樣。

在 Copilot Studio 中，您不需要編寫代碼來創建代理。相反，您只需用簡單的語言描述您希望代理執行的操作，Copilot 會通過類似聊天的方式一步步幫助您完成構建。

## 🌱 但我對“描述我想要的東西”不熟悉——該怎麼辦？

用自然語言描述來創建自定義代理可能對您來說是一個新概念。每當您在 Microsoft 的產品和服務中使用 Copilot 時，您都在使用自然語言形式的 _提示_。

提示是您給 AI 代理的消息或指令，用來告訴它您希望它執行的操作。可以將其視為給助手指示。您的指令越清晰，助手越容易理解並執行。

### 🪄 為什麼提示很重要

- 它們引導代理的行為。
- 它們幫助代理理解應進行何種對話。
- 一個好的提示使代理更有幫助且更準確。

### 📝 撰寫良好提示的技巧

- 清晰且具體 - 明確說出您希望代理執行的操作。
- 從用戶的角度思考 - 用戶會說什麼？代理應該如何回應？
- 包括示例 - 如果可能，提供示例交互。

### ✨ 示例

假設 HR 團隊需要一個代理來幫助處理休假申請。

提示可以是：

    “我想創建一個代理，幫助用戶提交休假申請。當用戶說他們想申請休假時，代理應該詢問他們的姓名、休假的開始日期、結束日期以及他們主管的姓名。一旦用戶提供了這些信息，代理應該將其保存到名為‘休假申請’的 SharePoint 列表中，並在專用的 Microsoft Teams 頻道中發布通知。”

為什麼這個提示有效：

- **明確陳述目標** - 提交休假申請
- **描述用戶交互** - 用戶說什麼以及代理應該詢問什麼
- **列出所需數據** - 姓名、開始日期、結束日期、主管
- **提到數據存放位置** - 名為“休假申請”的 SharePoint 列表

## 🔮 好的，我已經創建了我的代理……接下來如何用知識支持它？

在 Copilot Studio 中，知識來源是代理可以找到信息以提供更好答案的地方。當您添加這些來源時，您的代理可以從 Power Platform、Dynamics 365、網站以及您的公司使用的其他系統或服務中提取企業數據。

這些來源與 AI 協同工作，幫助您的代理更準確地回應用戶問題，這是通過所謂的 **生成式編排** 實現的。

### 🌿 在代理上下文中，什麼是生成式編排？

生成式編排意味著代理使用 AI 動態決定如何回答問題，結合其內置的語言技能和您添加的知識來源的信息。

當用戶提出問題時，代理會：

- 使用 AI 理解問題。
- 通過即時生成問題向用戶詢問缺失的信息。
- 選擇最相關的知識來源。
- 搜索這些來源以尋找答案。
- 使用找到的信息生成自然且有幫助的回應。

### 🏦 為什麼知識來源很重要？

1. **更智能的答案** - 當您添加知識來源時，您的代理可以使用來自您組織的真實數據提供更好、更準確的答案。

1. **減少手動工作** - 您不需要編寫每一個可能的回應。代理可以自動搜索您添加的來源並回應。

1. **使用可信信息** - 您的代理可以從您已使用的系統（如 Dataverse、SharePoint 或公司網站）中提取答案，為用戶提供可靠的真實信息。

1. **與生成式 AI 協作** - 知識來源和 AI 幫助您的代理理解問題並自然地回應，即使問題未被預先編程或作為初始提示添加。

1. **靈活且可擴展** - 您可以在設置過程中或稍後添加知識來源，隨著需求的變化，您的代理會變得更智能。

### ✨ 示例

假設您構建了一個幫助員工解答 HR 問題的代理。您添加了公司的 HR 政策文件和 SharePoint 網站作為知識來源。

當員工問，_“我有多少天的休假？”_ 時，代理使用生成式編排搜索這些來源並回應正確的政策，而無需您手動編寫答案。這節省了您需要考慮員工可能提出的每一個問題的時間。

## 可添加的知識來源類型

1. **公共網站**
    - **功能：** 使用 Bing 搜索特定網站（如您公司的網站）。
    - **用途：** 非常適合提取公共信息，例如常見問題或產品詳情。

1. **文件**
    - **功能：** 使用您直接上傳到代理的文件，例如 PDF 或 Word 文件。這些上傳的文件安全地存儲在 Dataverse 中。
    - **用途：** 使您的代理能夠根據內部指南、手冊或政策回答問題。

1. **SharePoint**
    - **功能：** 使用 Microsoft Graph Search 連接到 SharePoint 文件夾或文件。
    - **用途：** 非常適合訪問存儲在 SharePoint 中的團隊文件、HR 政策或項目文件。

1. **Dataverse**
    - **功能：** 使用來自您的 Dataverse 環境表格和行的結構化數據，並可以應用表格和列的同義詞和詞彙定義以改善代理回應。
    - **用途：** 當需要查找存儲在 Dataverse 中的企業數據（如客戶信息）時。

1. **實時知識與連接器**
    - **功能：** 允許您的代理在對話期間使用用戶自己的權限訪問其他企業系統（如 Salesforce、ServiceNow、Dynamics 365、AzureSQL、Databricks 等）的實時數據。
    - **用途：** 提供最新、安全且準確的回應，無需存儲或複製數據，使您的代理更智能、更安全。

1. **Azure AI Search**
    - **功能：** 允許您的代理使用語義和向量搜索通過 Azure 中存儲的大量文件集進行搜索，以理解用戶問題。
    - **用途：** 從複雜的數據來源提供準確、可信的答案，支持引用，並且對於具有安全訪問控制的大型文件集合具有良好的擴展性。

## 🔒 安全性注意事項

### 知識來源身份驗證

某些來源（如 SharePoint 和 Dataverse）需要用戶身份驗證。這意味著代理僅在用戶有權查看的情況下才會在回應中引用數據。而其他來源可能需要額外的配置，例如 Azure AI Search 需要 Azure 帳戶並指定身份驗證類型，代理才能連接到它。

## 在 Copilot Studio 中改進代理的回應

在從對話式創建體驗中生成代理後，您需要根據 Copilot 從您的提示生成的指令測試您的代理。在 Copilot Studio 中改進代理的回應是確保它清楚地理解您的目標並擁有正確的信息以完成工作的關鍵。

1. **完善代理指令** - 這是您告訴代理應如何行為的地方。使用清晰、具體的語言。

    例如：

    ✅ “扮演一個友好的客戶支持代理，簡單地解釋事情。”

    ❌ “要有幫助。”（太模糊）

1. **檢查語氣和語言** - 確保代理的語氣符合您的受眾。

    您可以設置為：

    - 友好且隨意。
    - 專業且簡潔。
    - 支持且耐心。

1. **添加或更新知識來源** - 如果您的代理需要回答某個主題的問題，請確保它能夠訪問正確的信息。

    - 添加網站、文件或常見問題的鏈接。
    - 保持內容更新。
    - 使用清晰、結構良好的信息。

1. **使用主題和觸發器** - 如果您的代理需要處理特定任務或對話，您可以創建帶有觸發短語的主題。這有助於更精確地引導對話。我們將在後續課程中學習更多。

1. **用真實問題進行測試** - 嘗試向您的代理提出用戶可能會問的問題。

    如果答案不理想：

    - 調整系統指令。
    - 添加更多示例或知識。
    - 重新措辭您的問題，看看它如何回應。

1. **審查和迭代** - 改進代理是一個持續的過程！

    發佈後：

    - 收集用戶反饋。
    - 注意常見問題或困惑。
    - 不斷完善代理的設置。

## 🧪 實驗室 06：在 Copilot Studio 中創建自定義代理

我們現在將學習如何創建一個能夠基於您的數據進行聊天的自定義代理

- [6.1 使用自然語言在 Copilot 中創建代理](../../../../../docs/recruit/06-create-agent-from-conversation)
- [6.2 使用 SharePoint 網站添加內部知識來源](../../../../../docs/recruit/06-create-agent-from-conversation)
- [6.3 通過上傳文件添加內部知識來源](../../../../../docs/recruit/06-create-agent-from-conversation)
- [6.4 測試代理](../../../../../docs/recruit/06-create-agent-from-conversation)

### ✨ 使用案例
我們將使用[課程 03 - 為 Microsoft 365 Copilot 創建宣告式代理](../03-create-a-declarative-agent-for-M365Copilot/README.md#use-case-scenario)中的相同使用案例。

**作為**一名員工

**我希望**能快速且準確地從 IT 幫助台代理獲得幫助，解決像設備問題、網絡故障排除、打印機設置等問題。

**以便我能**保持高效工作，並且不延誤地解決技術問題。

讓我們開始吧！

### ✨ 先決條件

- **SharePoint 網站**

我們將使用[課程 00 - 課程設置 - 步驟 3：創建新的 SharePoint 網站](../00-course-setup/README.md#step-4-create-new-sharepoint-site)中的 **Contoso IT** SharePoint 網站。

如果您尚未設置 **Contoso IT** SharePoint 網站，請返回[課程 00 - 課程設置 - 步驟 3：創建新的 SharePoint 網站](../00-course-setup/README.md#step-4-create-new-sharepoint-site)。

- **解決方案**

我們將使用[課程 04 - 為您的代理創建解決方案](../04-creating-a-solution/README.md#41-create-a-solution-publisher)中的 **Contoso Helpdesk Agent** 解決方案。

如果您尚未設置 **Contoso Agent** 解決方案，請返回[課程 04 - 為您的代理創建解決方案](../04-creating-a-solution/README.md#41-create-a-solution-publisher)。

### 6.1 使用自然語言通過 Copilot 創建代理

!!! warning "Copilot 問題可能因會話而異"

    Copilot 的對話式創建體驗可能每次都會有所不同，提供的指導問題可能與之前略有不同。

1. 進入 Copilot Studio 的主頁，在字段中輸入以下提示，描述 IT 幫助台代理。提示包括代理的目標、背景、預期任務以及代理回應的格式。

    ```text
    You are an IT help desk agent. Your goal is to assist users with their IT issues. You can access information from our company's knowledge base at https://support.microsoft.com/en-us. Your responses should be polite and helpful. If a user reports a slow computer, ask about the age of the device, current software versions, and if they've recently installed any new programs. If a user is experiencing trouble logging into their email, guide them through password reset procedures. You should be concise and informative, using step-by-step instructions with bullet points when appropriate.
    ```

      ![輸入提示](../../../../../translated_images/6.1_01_Prompt.c4be2ff2cac9fde3659f2e7016e48f01860b55523d3320b3b8450ef2fcb1f51a.tw.png)

1. 接下來將加載 Copilot 的對話式創建體驗。您會看到 Copilot 正在回應您。

      ![Copilot 對話式創建體驗](../../../../../translated_images/6.1_02_ConversationalCreationExperienceLoads.115eaf4e5a15c1b60bc0d25c97a0d97d462d6c740cfed5de369b2bd8fd1cc8bc.tw.png)

1. Copilot 確認代理已根據提供的指示設置，並要求確認代理的名稱。我們將要求 Copilot 將代理命名為：

       ```text
       Contoso Helpdesk Agent
       ```

      ![重命名代理](../../../../../translated_images/6.1_03_AgentName.a848acea10cd1d3d6ba68fea2b0e094ecbd130a124413e3c8134198c81654833.tw.png)

1. Copilot 執行請求，我們會看到代理的名稱已在代理面板中更新。接下來，Copilot 要求我們完善指示。它詢問我們應如何回應特定問題，我們將要求它確認問題，提供回答的示例主題，並以項目符號格式化回應。

    複製並粘貼以下內容，並提交請求給 Copilot。

       ```text
       優先處理緊急請求。IT 問題或場景的示例包括：設備問題、網絡連接、登錄問題。在故障排除時，首先確認他們的問題並表達同理心，然後使用項目符號提供逐步指導，並詢問是否需要進一步協助。
       ```

      ![完善代理指示](../../../../../translated_images/6.1_04_RefineInstructions.9575407dbc12e0399691068d20e0d0252bb8b8f839cf53ee9d715fe2c16afa70.tw.png)

1. Copilot 接收到請求後，代理的指示將被更新。注意右側面板中現在出現了初始提示，這些提示是基於我們的指示形成的。

    接下來，Copilot 要求提供公共網站以作為代理知識的基礎。

    複製並粘貼以下內容，並提交請求給 Copilot。

      ```text
      https://support.microsoft.com
      ```

      ![添加公共可訪問網站](../../../../../translated_images/6.1_05_KnowledgeSource.3aec8d869b73d273f88c62cf99bb2f731df83a83c1ca54d92d6e96b86a570637.tw.png)

1. 公共網站將被添加為知識來源。Copilot 詢問是否需要添加其他知識來源。我們不需要添加其他公共網站。

    複製並粘貼以下內容，並提交請求給 Copilot。

      ```text
      Proceed with setup
      ```

      ![繼續設置](../../../../../translated_images/6.1_06_ProceedWithSetup.11ceb9ccccccd19418711681d42b602ee223ebd017d6bf300088de84d1d35f1d.tw.png)

1. Copilot 確認我們的 Contoso Helpdesk Agent 的設置已完成，但我們將添加一個修改，我們要請求代理不要回答與 HR 相關的問題。這讓代理知道它不應回答用戶提出的 HR 相關問題。

    複製並粘貼以下內容，並提交請求給 Copilot。

       ```text
       不要提供與 HR 相關問題的協助，例如：我的休假餘額是多少？我有多少病假？我們的薪資門戶的 URL 是什麼？
       ```

      ![不要回答 HR 相關問題](../../../../../translated_images/6.1_07_DoNotTalkAbout.d9ccbbd15b9793e1642b365be6968548f6f250be5d541f1ad06eb9f12985e94f.tw.png)

1. 指示將被更新為不提供與 HR 相關問題的協助。我們不需要進一步更新，我們的代理已準備好創建。

      ![代理指示已更新](../../../../../translated_images/6.1_08_AgentInstructionsUpdated.4de1112eeb5c8e2e2fe03fcbc6d332bdc3b1de740d9a5ab6b1ec30e27e241096.tw.png)

1. 在創建代理之前，我們先做幾件事。

    首先，選擇 **Configure** 標籤以查看我們與 Copilot 的對話中定義的代理詳細信息。在這裡，您可以看到名稱、描述、指示、知識和建議/初始提示。

      ![查看代理詳細信息](../../../../../translated_images/6.1_09_ViewAgentDetails.72c7f66721d6ac354bcc7186204bb0ad169456b0b7756f5e5a5e0f090e802a57.tw.png)

1. 其次，讓我們測試代理。複製並粘貼以下內容，並提交問題給代理。

       ```text
       如何檢查我的 Surface 的保修狀態？
       ```

      ![測試代理](../../../../../translated_images/6.1_10_TestAgent.8b1a0f1d98f4fa5b61336e1c4ac6d77b4822283314c2941cb0e04bf5247d8489.tw.png)

1. 問題的回應將顯示，答案以逐步指南的項目符號格式呈現。太棒了，我們的代理運作正常！🙌🏻

      ![代理回應](../../../../../translated_images/6.1_11_AgentResponse.c5fb305335b8e9b456b0f75ec9e237d4abbc3e9a1a6976e14bb656f1adffb14a.tw.png)

1. 最後，我們將再次檢查代理將被創建的解決方案是否是我們在[課程 04 - 創建新解決方案](../04-creating-a-solution/README.md#42-create-a-new-solution)中創建並選擇為首選解決方案的解決方案。

    選擇 **省略號圖標 (...)** 並選擇 **Update Advanced Settings**。

      ![更新高級設置](../../../../../translated_images/6.1_12_UpdateAdvancedSettings.5943949ae7c9f492fb90779b0284283deb4186f14cd6588c46920f8e50d8d6d0.tw.png)

1. **高級設置**模態窗口將出現，我們可以看到之前創建的解決方案已被默認選中。這是因為我們在[課程 04 - 創建新解決方案](../04-creating-a-solution/README.md#42-create-a-new-solution)中選擇了解決方案作為首選解決方案。

    選擇 **Cancel**。

      ![查看高級設置](../../../../../translated_images/6.1_13_AdvancedSettings.fff0861831346d5bef4e7731fed83073aca6d17aa940633040f65b1f300aee15.tw.png)

1. 現在讓我們創建自定義代理！選擇 **Create**。

      ![選擇創建](../../../../../translated_images/6.1_14_CreateAgent.7330a5fbe44a0664f35c5b5502e499f6dd3bad55d13094ef6c22608e8f8831b1.tw.png)

1. Copilot Studio 將開始配置代理。

      ![設置代理](../../../../../translated_images/6.1_15_SettingUpAgent.34028a37bc2922eae13d0a18bb468bd738608b4de948192d89c3a2680fff2496.tw.png)

1. 一旦代理配置完成，我們可以看到代理的詳細信息反映了我們在 Copilot 對話式創建體驗中提出的要求。向下滾動查看代理，您將看到名稱、描述、指示、知識來源和建議的提示。編排模式默認啟用，並且代理的回應模型使用默認模型。

      ![代理已創建](../../../../../translated_images/6.1_16_AgentCreated.91edb1939b33d158930cd385c0d97c320958504e224ffc163ed5030b0cdc72a7.tw.png)

      ![知識來源](../../../../../translated_images/6.1_17_KnowledgeSources.00f1ed0b7f405e4820971834fb75e39a80659cf1b9eeeee42d861bfc4656240f.tw.png)

      ![建議的提示](../../../../../translated_images/6.1_18_SuggestedPrompts.20b84b9420858de8485460cc50a8e73798b08bb2022c946899adcbf9b484e0f0.tw.png)

1. 現在讓我們測試新創建的代理。在右側的 **Test** 面板中，選擇 **Activity Map** 圖標。

      ![選擇活動地圖](../../../../../translated_images/6.1_19_ActivityMap.b2e6c77c69fd953818dc73b4dbe2e6d46529cf105d7a4a18c590d15c0b717cf4.tw.png)

1. 在 **Test** 面板中輸入以下問題。

       ```text
       如何找到我的 Windows 11 產品密鑰？
       ```

      ![測試新創建的代理](../../../../../translated_images/6.1_20_TestAgent.a9d3a761477c9b79facd132c173ec886d808320ad2cbc0347066a20c0f9dd669.tw.png)

1. 活動地圖將加載，顯示代理正在處理的路徑。在此場景中，我們的代理已理解問題並搜索知識來源。目前我們有一個來源，即之前使用 Copilot 添加的公共網站，代理正在審查該來源。

      ![審查知識來源](../../../../../translated_images/6.1_21_ReviewingSources.78068042898e2960667393c931e120dbe80f6b74c9af222b79446f7a82d5c757.tw.png)

1. 我們的代理接著以項目符號的形式提供答案，這是指示中定義的格式。回應中引用了代理形成答案的網頁，這使得用戶可以驗證答案的來源。

      ![回應中的引用](../../../../../translated_images/6.1_22_Response.44a088e80f2a9fac74bcd364571f1ebb900b43e9e647089ef51d39b809b0f0e9.tw.png)

1. 您還可以通過向下滾動活動地圖中的 **Knowledge modal** 查看回應及其來源。

      ![引用的來源](../../../../../translated_images/6.1_23_ReferencedSources.ca8e41855284446d121a34fd9d8d667e05016f5eda741adcf7f356ac2c59c559.tw.png)

恭喜！您已在 Copilot Studio 中創建了第一個自定義代理 🙌🏻

### 6.2 使用 SharePoint 網站添加內部知識來源

之前使用 Copilot 時，我們在對話式創建體驗中添加了一個公共網站作為代理的外部知識來源。現在我們將使用 SharePoint 網站添加內部知識來源。這將是您在[課程 00 - 課程設置](../00-course-setup/README.md#step-4-create-new-sharepoint-site)中創建的 SharePoint 網站。

1. 選擇 **+ Add knowledge**。

      ![選擇添加知識](../../../../../translated_images/6.2_01_AddKnowledge.5e441f7e3b0ebb25218bece75394ecf4c8c3a60e1b5d8ea15ca020546352f256.tw.png)

1. 選擇 **SharePoint**。

      ![選擇 SharePoint](../../../../../translated_images/6.2_02_SelectSharePoint.5bd29d31cc76f581db3eef474731fc2dfce4ef1dab86d9cc11716323ba726408.tw.png)

1. 在 SharePoint URL 字段中粘貼您在[課程 00 - 課程設置](../00-course-setup/README.md#step-4-create-new-sharepoint-site)中創建的 SharePoint 網站地址，然後選擇 **Add**。

      ![輸入 SharePoint 網站 URL](../../../../../translated_images/6.2_03_AddSharePointURL.974c251d9690524a8bfa4c9dd930af3d834245749fb9f1fda508c3b1f9773827.tw.png)

1. 將 SharePoint 網站的名稱更新為 `Contoso IT`，然後選擇 **Add**。

      ![更新 SharePoint 網站名稱並添加到代理](../../../../../translated_images/6.2_04_UpdateNameAddToAgent.46a814c09586fe135bffb77814ba13d0593f25feaaa989174c97e80345f03866.tw.png)

1. SharePoint 網站現在已作為知識來源添加，狀態為 _Ready_。狀態列將顯示知識來源是否已成功加載/連接，或者是否存在問題。

      ![SharePoint 網站狀態](../../../../../translated_images/6.2_05_SharePointStatus.90a9001978f31c5d4b183d5ecc4869c81dd9fc1bb8a6b1ef4675fcb51d52f8e5.tw.png)

### 6.3 通過上傳文件添加內部知識來源

現在我們將通過直接上傳文件到代理添加另一個內部知識來源。

1. 選擇 **Add knowledge**。

      ![選擇添加知識](../../../../../translated_images/6.3_01_AddKnowledge.d93caa805efb7e2a433d9777f8eb1789dc5daf4f9ebe95da2a74a2b57cffdd33.tw.png)

1. 選擇 **Upload file** 或 **Select to browse**。

      ![選擇上傳文件](../../../../../translated_images/6.3_02_UploadFile.662de4f3916bfa3f34a6699a9a45846e64e71a70dfecbc656fb5b511792de6b6.tw.png)

1. 下載此[示例文件](../../../../../docs/recruit/06-create-agent-from-conversation/assets/Contoso_Guest_WiFi_Connection_Guide.docx "download")並在文件管理器中選擇它。選擇 **Open**。

      ![選擇文件](../../../../../translated_images/6.3_03_SelectFile.077d73491dc6ff1f6114d259261ee68334c4da182c3b55233468637d1989f14c.tw.png)

1. 文件已選擇上傳。接下來選擇 **Add to agent**。

      ![選擇添加到代理](../../../../../translated_images/6.3_04_AddToAgent.1eec469d6d28c22959c8d7f3ad39aa0df5e07adfdb85ce1e21c0c4fe31c27db5.tw.png)

1. 文件將處於添加到代理的過程中。等待上傳完成，不要關閉瀏覽器窗口。文件的狀態最初顯示為 _In progress_，等待狀態更新為 **Ready** 後再測試您的代理。

      ![文件狀態](../../../../../translated_images/6.3_05_FileStatus.2029b8aa0109a6f46372291e9bba33429c2ebd572efa81702a73cae91fbf3a90.tw.png)

現在讓我們測試代理！

### 6.4 測試代理

我們將通過向 Contoso Helpdesk Agent 提問來測試三個知識來源。

1. 在測試面板中選擇 **刷新** 圖標，然後選擇 **活動地圖** 圖標。

      ![刷新圖標](../../../../../translated_images/6.4_01_RefreshAndActivityMap.c24ebc6c277786dab75941dac0b6e55f3dbb244b29fb791c87e4aba5c4a56c81.tw.png)

1. 輸入以下問題以測試我們的公共網站（外部）知識來源。

      ```text
      How can I find the serial number on my Surface device?
      ```

      ![輸入提示以測試網站知識來源](../../../../../translated_images/6.4_02_TestQuestion1.3a5aeaaa72a9578a05edd4575275e1ba60ecaf8c7377ab13872619580e0309f9.tw.png)

1. 接下來您會看到代理正在審查知識來源並使用網站知識來源提供回應。
![回應中引用的網頁](../../../../../translated_images/6.4_03_ReviewingSources.a56742505402eab51b423b543c814242728ff7947e443360740b3e5dac82ba65.tw.png)

1. 回應會被返回，注意其中引用了其答案來源的網頁。如果您向下滾動活動地圖中的知識模態，您會看到代理搜索的其他知識來源，包括 SharePoint 網站和上傳的文件。

   然而，這些並未被使用，因為在 **引用的來源** 部分中，僅引用了網站知識來源。答案是基於網站知識來源生成的。如果您選擇引用，將會被引導至該網頁。

![引用和搜索的知識來源](../../../../../translated_images/6.4_04_ReferencedSources.2fb91e8ed7cac8196c3cc1e43006512d4138adb4f240bdab66cd2af5fd1ec7c6.tw.png)

1. 現在我們來測試 SharePoint 網站知識來源和文件知識來源在單一訊息中的表現。輸入以下問題。

      ```text
      How can I access our company Contoso VPN? How do guests connect to the Contoso Guest wifi?
      ```

![測試 SharePoint 和文件知識來源](../../../../../translated_images/6.4_05_TestQuestion2.f77ce87578b59386ec5491716996aff9247c5e5ad458a51226276238adb282f3.tw.png)

1. 再次可以看到代理審查了三個知識來源，以生成對我們單一訊息中問題的回應。代理在單一訊息中回答了兩個問題，並分別引用了生成回應的 SharePoint 網頁和文件。

   在活動地圖中的知識模態中，您會看到 SharePoint 網站和文件被用作引用來源。您可以完全掌握用於回答這兩個問題的知識來源。

![引用的知識來源](../../../../../translated_images/6.4_06_ReferencedSources.caf049dac28b4317c39b074b481f5d7d5b1b92fd792fc4b796fec0c1575f9581.tw.png)

1. 確保生成的回應正確是很重要的。選擇 SharePoint 網站引用，FAQ 的 SharePoint 頁面將會加載，您可以向下滾動查看 VPN 指示。

![查看 SharePoint 頁面](../../../../../translated_images/6.4_07_VerifySharePoint.6ee48515fedf37a62564ddc388c2452751ed5777cda321d887c315c2de78d293.tw.png)

1. 接下來，選擇文件引用，模態將會出現，顯示反映答案的文件文本。

![查看文件](../../../../../translated_images/6.4_08_VerifyDocument.0f0680b63e6bdd0b558eb287e85965b87ab820e12b25b1e0965f8ebbde795222.tw.png)

代理可以在單一訊息中回答多個問題，並搜索知識來源 + 在回應中引用知識來源。請務必通過查看引用來驗證回應是否正確。

## ✅ 任務完成

恭喜！👏🏻 您已學會如何使用自然語言創建自己的自定義代理，並能夠基於三個不同的知識來源進行聊天 🙌🏻

這是 **Lab 06 - 使用 Copilot 創建代理** 的結尾，點擊以下連結進入下一課程。您在本實驗中創建的自定義代理將在下一課程的實驗中使用。

⏭️ [進入 **新增主題與觸發器** 課程](../07-add-new-topic-with-trigger/README.md)

歡迎加入精英行列。您現在已掌握如何打造能說您的語言、引用您的數據並支持您的團隊的數字代理。繼續前進——您的任務才剛剛開始。

## 📚 戰術資源

🔗 [快速入門：創建並部署代理](https://learn.microsoft.com/microsoft-copilot-studio/fundamentals-get-started?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172617-ebenitez)

🔗 [創建和刪除代理](https://learn.microsoft.com/microsoft-copilot-studio/authoring-first-bot?WT.mc_id=power-172617-ebenitez)

🔗 [關鍵概念 - 創建代理](https://learn.microsoft.com/microsoft-copilot-studio/authoring-fundamentals/?WT.mc_id=power-172617-ebenitez)

📺 [使用自然語言創建自定義代理](https://aka.ms/ai-in-action/copilot-studio/ep1)

📺 [為代理添加知識](https://aka.ms/ai-in-action/copilot-studio/ep2)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/06-create-agent-from-conversation" alt="分析" />

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們致力於提供準確的翻譯，請注意自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵資訊，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。