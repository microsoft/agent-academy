<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-22T00:44:52+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "hk"
}
-->
# 🚨 任務 03：部署 Microsoft 365 Copilot 的宣告式代理

## 🕵️‍♂️ 行動代號：`OPERATION COPILOT EXTENSION`

> **⏱️ 行動時間窗口：** `~60 分鐘`

🎥 **觀看操作指南**

[![建立宣告式代理影片縮圖](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.hk.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "在 YouTube 上觀看操作指南")

## 🎯 任務簡介

歡迎來到您的首次外勤任務，代理製作者。您已被選中設計、裝備並部署一個宣告式代理——一個直接嵌入 Microsoft 365 Copilot 和 Microsoft Teams 的專業操作員。

與傳統代理不同，宣告式代理以明確的任務（指令）、工具（提示/連接器）以及對內部情報的策略性訪問（如 SharePoint、Dataverse 等知識來源）運作。您的工作是使用 Microsoft Copilot Studio 建立這個代理——一個無需編碼的指揮中心，讓代理的技能和目的得以實現。

讓我們開始吧。

## 🔎 目標

在此任務中，您將學習：

1. 了解什麼是宣告式代理，以及如何透過自定義功能擴展 Microsoft 365 Copilot
1. 比較 Microsoft Copilot Studio 與 Copilot Studio 代理建構器在建立宣告式代理方面的差異
1. 使用自然語言透過對話式建立體驗來創建宣告式代理
1. 添加 AI 提示作為工具，以增強代理的專業知識和解決問題的能力
1. 在 Microsoft 365 Copilot 和 Microsoft Teams 中發布並測試您的宣告式代理

## 🕵🏻‍♀️ Microsoft 365 Copilot 的宣告式代理是什麼？

宣告式代理是 Microsoft 365 Copilot 的定制版本。您可以透過提供支持特定流程的指令、基於企業知識進行操作，以及利用工具進行更廣泛的擴展，來自定義 Microsoft 365 Copilot，以滿足特定的業務需求。這使得組織能夠為其用戶創造更具功能性的個性化體驗。

## 🤔 為什麼要使用 Microsoft Copilot Studio 建立宣告式代理？

作為製作者，您可能已經探索過 [Copilot Studio 代理建構器](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez) 在 Microsoft 365 Copilot 中的功能，因此您可能會想知道 _為什麼要在 Microsoft Copilot Studio 中建立宣告式代理？_

Microsoft Copilot Studio 提供了一套全面的工具和功能，超越了 Copilot Studio 代理建構器的限制。與 Copilot Studio 代理建構器類似，您不需要了解程式設計或軟體開發即可在 Microsoft Copilot Studio 中進行建構。讓我們進一步了解 Copilot Studio 代理建構器與 Copilot Studio 在建立宣告式代理方面的差異。

### 功能比較

以下表格突出了在 Copilot Studio 代理建構器和 Copilot Studio 中建立宣告式代理的差異。

| 功能                   | Microsoft 365 Copilot 中的 Copilot Studio 代理建構器                          | 在 Copilot Studio 中擴展 Microsoft 365 Copilot                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **知識**       | 網頁、SharePoint、Microsoft Teams 聊天、Outlook 電郵、Copilot 連接器     | 網頁搜尋（透過 Bing）、SharePoint、Dataverse、Dynamics 365、Copilot 連接器  |
| **工具**       | 程式碼解釋器、圖像生成器     | 1400+ Power Platform 連接器、自定義連接器、提示、電腦使用、REST API、模型上下文協議   |
| **起始提示**         | 配置提示以便用戶快速開始   | 配置提示以便用戶快速開始  |
| **頻道**           | 代理僅發布到 Microsoft 365 Copilot     | 代理發布到 Microsoft 365 Copilot 和 Microsoft Teams      |
| **共享權限**         | 用戶僅為查看者    | 用戶可以是編輯者或查看者   |

Microsoft Copilot Studio 提供了更多功能來建立宣告式代理，接下來我們將進一步了解。

!!! tip
    - 想了解更多關於 Copilot Studio 代理建構器的資訊，請前往 [Copilot Developer Camp: Lab MAB1 - 建立您的第一個代理](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/)
    - 想進一步開發超越 Copilot Studio 代理建構器的宣告式代理，請前往 [Copilot Developer Camp: Lab MAB1 - 建立您的第一個代理](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/)

### 使用 Copilot Studio 建立的宣告式代理擴展 Microsoft 365 Copilot

讓我們擴展從功能比較表中學到的內容。

#### 自定義

- **詳細指令**：您可以提供詳細的指令和功能，精確定義代理的目的和行為。
  - 包括僅使用自然語言調用工具。

- **企業知識訪問**：啟用對尊重用戶權限的企業知識的訪問。
  - SharePoint 整合
  - Dataverse 整合
  - Dynamics 365 整合
  - 由您的組織管理員啟用的 Microsoft 365 Copilot 連接器

   ![自定義](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.hk.png)

#### 高級功能

- **與外部服務整合**：允許您從 1400+ Power Platform 連接器中選擇，與外部服務整合，提供更複雜和強大的功能。
  - 示例包括 [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez)、[ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez)、[Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez)、[SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) 等
  - 或者，您也可以直接在您的宣告式代理中利用模型上下文協議伺服器和 REST API

- **AI 提示**：使用提示透過自然語言和 AI 推理分析和轉換文本、文件、圖像和數據。
  - 選擇聊天模型，從基本（預設）、標準、高級中選擇
  - 選擇使用您自己的 Azure AI Foundry 模型來支持您的提示

- **更多部署配置選項**：選擇頻道並定義用戶權限。
  - 發布到 Microsoft Teams，為您的用戶提供熟悉的界面以便更快採用
  - 編輯用戶權限可以共享，以防止代理所有者的單一依賴點

   ![高級功能](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.hk.png)

總結來說，Microsoft Copilot Studio 中的宣告式代理允許透過整合企業知識系統、工具連接外部服務或 AI GPT 模型來定制 Microsoft 365 Copilot，以滿足業務需求。

## 🧪 實驗室 03：在 Microsoft Copilot Studio 中為 Microsoft 365 Copilot 建立宣告式代理

接下來我們將學習如何為 "企業對員工" 使用案例建立宣告式代理，該代理將充當 **IT 幫助台代理**。

- [3.1 建立宣告式代理](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 為您的宣告式代理建立並添加提示](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 更新指令並測試您的宣告式代理](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 將您的宣告式代理發布到 Microsoft 365 Copilot 和 Microsoft Teams](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    本實驗室將概述添加提示作為工具的步驟。接下來的課程將深入探討添加知識來源和其他可用工具。簡化您的學習 😊

### 👩🏻‍💼 理解企業對員工 (B2E)

企業對員工 (B2E) 是指企業直接向其員工提供的互動和服務。在代理的背景下，這意味著使用 Copilot Studio 的高級功能來支持和提升員工在組織內的工作體驗。

### ✨ 使用案例場景

**作為** 員工

**我希望** 從 IT 幫助台代理獲得快速且準確的幫助，例如設備問題、網絡故障排除、打印機設置等

**以便我能** 保持高效並快速解決技術問題

讓我們開始吧！

### 先決條件

- 製作者必須擁有在 Copilot Studio 環境中創建和訪問的權限。

!!! note "授權注意事項"
    本實驗室將概述添加提示作為工具的步驟。接下來的課程將深入探討添加知識來源和其他可用工具。簡化您的學習 😊
  
    您不需要 Microsoft 365 Copilot 使用者授權即可將您在 Copilot Studio 中建立的宣告式代理發布到 Microsoft 365 Copilot。然而，**使用者** 使用 _已發布的宣告式代理_ 在 Microsoft 365 Copilot 中需要 Microsoft 365 Copilot 使用者授權。

### 3.1 建立宣告式代理

!!! warning "Copilot 問題可能因會話而有所不同"

    Copilot 的對話式建立體驗可能每次都會有所不同，提供的指導問題可能與之前略有不同。

1. 前往 [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/) 並使用您的憑據登錄。確保切換到您用於這些實驗室的環境。

1. 從菜單中選擇 **Agents**，然後選擇 **Copilot for Microsoft 365**。

       ![Copilot for Microsoft 365](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.hk.png)

1. 接下來，我們將通過選擇 **+ Add** 代理來創建一個宣告式代理。

       ![添加代理](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.hk.png)

1. 然後我們將看到對話式建立體驗加載，您可以與 Copilot 進行自然語言聊天，描述您想要建立的宣告式代理，並使用提供的問題進行指導。

       請輸入詳細描述，概述以下內容，  
       - 代理的任務  
       - 它可以處理的查詢類型  
       - 它的回應格式  
       - 代理的目標  
    
       ```text
       您是一位專業且經驗豐富的 IT 專家，專精於各種電腦系統、網絡和網絡安全。您能夠診斷並解決技術問題，以清晰易懂的方式向各種技術水平的用戶解釋解決方案，並提供最佳實踐指導。您應該簡潔且信息豐富，必要時使用分步指導和項目符號。您的目標是幫助用戶理解問題並有效解決。
       ```
    
       ![建立提示](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.hk.png)

1. 提交提示後，右側窗格將顯示代理的詳細信息和指令，這些指令是根據提示定義的。接下來，您將被要求確認代理的名稱，Copilot 會建議一個名稱。

       您可以輸入 `yes` 接受建議的名稱，也可以輸入其他名稱，例如以下，
    
       ```text
       Contoso Tech Support Pro
       ```
    
       ![指令已更新](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.hk.png)

    !!! warning "提醒：Copilot 問題可能因會話而有所不同"

        Copilot 的對話式建立體驗可能每次都會有所不同，提供的指導問題可能與之前略有不同。

1. 代理的名稱現在已更新，如右側窗格所示。我們現在被要求完善代理的指令。Copilot 建議的內容聽起來不錯，因此我們會要求它使用自己的建議。我們將輸入以下內容，

      ```text
      Focus on the IT issues and scenarios you've identified
      ```

      ![名稱已更新](../../../../../translated_images/3.1_06_NameUpdated.b6b8cc7c670b77c635d6b54b723e1a83f63ec288c0eab260fdbf88c7ec163003.hk.png)

1. 接下來我們會被問到是否希望添加任何公開可訪問的網站或知識。我們將回答 `No`，因為在本實驗室中我們只會為宣告式代理添加提示。未來課程中的後續實驗室將涵蓋知識來源。

      ![未添加網站或知識來源](../../../../../translated_images/3.1_07_KnowledgeSources.2001faa25aab922f38da82a8602e68b3ad7153941e87bab0949177e0b2ab0c08.hk.png)

1. 接著我們會看到 Copilot 的回應，表示我們已完成使用 Copilot 對話式建立體驗配置代理。然而，讓我們進一步完善，概述它應該簡潔且信息豐富，使用項目符號，溝通時表現出同理心，並在提供解決方案後詢問反饋。

    ```text
    Concise and Informative:
    - Bullet Points: Use bullet points for clarity and to break down information into digestible parts.
    - Summarize: Provide a brief summary of the solution at the end of the explanation.
   
    User-Friendly Communication:
    - Empathy: Show empathy and understanding of the user's frustration or confusion.
    - Encouragement: Encourage users by acknowledging their efforts and progress.
   
    Interactive and Engaging:
    - Ask for Feedback: After providing a solution, ask if the user needs further assistance or if the solution worked.
    ```

      ![更新代理指令](../../../../../translated_images/3.1_08_FurtherRefinements.993926c4e55cc5133413f4e10a61a6ed43351d070e791db0ee5547ea83f46473.hk.png)

1. Copilot 確認指令已更新。點擊 **Create** 以為 Microsoft 365 Copilot 配置宣告式代理。

      ![建立代理](../../../../../translated_images/3.1_09_CreateDeclarativeAgent.71442cd4e18105359e55016d92e54b74ac18977bb535c637a05bac0d3680a3c5.hk.png)

    !!! warning "提醒：Copilot 問題可能因會話而有所不同"

        Copilot 的對話式建立體驗可能每次都會有所不同，提供的指導問題可能與之前略有不同。

1. 代理配置完成後，您將看到代理的詳細信息，其中包含在 Copilot 對話式建立體驗中定義的描述和指令。
      ![代理詳細資料](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.hk.png)

      向下滾動窗格，您還可以看到添加知識、啟用網絡搜索（通過 Bing）、起始提示以及 Microsoft 365 Copilot 的聲明式代理的發布詳細信息。起始提示也會顯示在右側的測試窗格中。用戶可以選擇這些起始提示來開始與代理互動。

      ![建議提示](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.hk.png)

1. 在代理的詳細信息部分，您還可以更改代理圖標。選擇 **編輯**。

      ![編輯詳細資料](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.hk.png)

      在這裡，您可以更改圖標和背景顏色。選擇 **保存**，然後再次選擇 **保存** 以更新代理的詳細信息。

      ![更改圖標](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.hk.png)

1. 讓我們快速測試一下我們創建的代理。在右側的測試窗格中選擇一個 **起始提示**。

      ![測試起始提示](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.hk.png)

1. 我們的代理將作出回應。注意它如何遵循指示，將信息分成易於理解的要點，並在回應中表現出同理心。

    如果向下滾動消息底部，注意它在提供解決方案後也根據指示要求反饋。

      ![測試回應](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.hk.png)

幾分鐘內，您已經在 Copilot Studio 中添加了一個 Microsoft 365 Copilot 的聲明式代理 🙌🏻

接下來，我們將學習如何向代理添加工具，並創建一個提示。

### 3.2 為聲明式代理創建並添加提示

1. 向下滾動到 **工具** 部分，選擇 **+ 添加工具**

      ![添加工具](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.hk.png)

1. 工具模態窗口將出現，並顯示 Power Platform 連接器的列表。要添加提示，選擇 **+ 新工具**。

      ![新工具](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.hk.png)

1. 顯示其他工具的列表 - 提示、自定義連接器、REST API 和模型上下文協議。如果您的組織符合 [電腦使用要求](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez)，這也會出現在列表中。選擇 **提示**。

      ![選擇提示](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.hk.png)

1. 為提示輸入一個名稱。我們將提示命名為 `IT Expert`。

      ![輸入名稱](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.hk.png)

1. 選擇 **Model** 旁邊的 **箭頭圖標**，查看您可以選擇的不同聊天模型。默認情況下，選擇了 **Basic GPT-4.1 mini** 模型，您還可以使用 Azure AI Foundry Models 自帶模型。我們將保持選擇的默認模型。

      ![更改模型](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.hk.png)

1. 接下來，我們將為提示提供指示。有三種方法可供選擇：

      - 使用 Copilot 根據您描述的提示功能生成指示。
      - 使用提示庫中的預設模板創建提示。
      - 手動輸入自己的指示。

1. 我們先嘗試使用 Copilot 根據輸入的描述生成指示。在 Copilot 字段中輸入以下內容並提交。

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

      ![使用 Copilot 開始](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.hk.png)

1. Copilot 將開始為我們生成提示。

      ![Copilot 草擬提示](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.hk.png)

1. Copilot 生成的草稿指示將顯示出來。

      ![Copilot 生成的草稿指示](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.hk.png)

1. 向下滾動到指示底部，您會看到 Copilot 已經定義的用戶輸入參數。您可以選擇：
    - 保留生成的草稿指示。
    - 使用 Copilot 刷新草稿指示。
    - 清除草稿指示。

        通過選擇 **垃圾桶圖標** 清除草稿指示，接下來我們將嘗試提示庫。

        ![提示指示](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.hk.png)

1. 選擇 **提示模板** 連結。

    ![選擇提示模板](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.hk.png)

1. 您將看到一系列提示模板可供選擇。這些來自 [Power Platform 提示庫](https://aka.ms/power-prompts)。

    ![提示庫](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.hk.png)

1. 搜索 `IT expert` 提示並選擇它。

    ![選擇 IT expert 提示](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.hk.png)

1. 提示將作為指示添加，並由提示模板定義輸入參數。與我們在使用 Copilot 進行對話創建代理時提供指示的方法類似，該提示模板概述了：
    - 任務，
    - 它可以處理的查詢類型，
    - 以及回應的格式和提示的目標。

    ![提示指示](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.hk.png)

1. 清除指示，接下來我們將嘗試手動輸入指示。我們將使用 [IT Expert 提示](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/) 從 [Power Platform 提示庫](https://aka.ms/power-prompts)。複製並粘貼提示。

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

    ![提示指示](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.hk.png)

1. 接下來，我們可以定義提示的用戶輸入參數。這些可以是文本和圖片，以及測試用的示例數據。還可以使用 Dataverse 表中的知識來支持提示。在這個練習中，我們只有一個用戶輸入需要定義，即問題輸入。這目前是我們提示中的佔位符 `[Problem]`。現在我們將配置此輸入，方法是輸入 `/` 字符或選擇 **+添加內容**，然後選擇 **文本**。

    ![文本輸入](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.hk.png)

1. 我們現在可以為輸入參數和示例數據輸入名稱。

    輸入以下內容作為名稱：

    ```text
    problem input
    ```

    輸入以下內容作為示例數據：

    ```text
    My laptop gets an error with a blue screen
    ```

    然後選擇 **關閉**。

    ![配置問題輸入](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.hk.png)

1. 問題輸入參數現在將添加到指示中，並配置了示例數據。我們現在可以測試我們的提示！

    ![問題輸入已添加](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.hk.png)

1. 選擇 **測試** 以測試提示。

    ![測試指示](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.hk.png)

1. 回應將顯示出來。注意回應如何根據指示提供帶有要點的標題。向下滾動並查看模型回應的其餘部分。

    ![模型回應](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.hk.png)

1. 在保存提示之前，讓我們了解可以為此提示配置的設置。選擇 **省略號（...）圖標**。

    ![提示設置](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.hk.png)

1. 在這裡，我們將看到三個可以配置的設置。

    - **溫度**：較低的溫度會產生可預測的結果，而較高的溫度則允許更具多樣性或創造性的回應。
    - **記錄檢索**：指定為知識來源檢索的記錄數量。
    - **在回應中包含連結**：選擇後，回應中將包含檢索記錄的連結引用。

    選擇 **X** 圖標退出設置。

    ![配置設置](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.hk.png)

1. 選擇 **保存** 以保存提示。

    ![保存提示](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.hk.png)

1. 接下來，選擇 **添加到代理**，將提示添加到我們的聲明式代理。

    ![提示指示](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.hk.png)

1. 提示現在將顯示在工具部分 🙌🏻

    ![提示已添加](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.hk.png)

接下來，我們將更新指示以調用提示並測試我們的聲明式代理。

### 3.3 更新指示並測試您的聲明式代理

1. 向上滾動到 **詳細信息** 部分，選擇 **編輯**。這將使字段可編輯。

      ![選擇編輯](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.hk.png)

1. 我們現在可以更新指示以調用提示，方法是引用提示的名稱。清除指示，然後複製並粘貼以下內容。

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

      注意最後一句話如何指示代理使用用戶提出的問題作為問題輸入參數的值。代理將使用該問題作為提示的問題輸入。接下來，選擇 **保存**。

      ![更新指示以調用提示](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.hk.png)

1. 我們現在準備好測試聲明式代理的更新指示。選擇測試窗格中的 **刷新圖標**。

      ![選擇刷新圖標](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.hk.png)

1. 接下來，輸入以下提示並提交。

       ```text
       你能幫幫我嗎？我的筆記本電腦遇到了藍屏問題
       ```

      ![執行測試](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.hk.png)

1. 代理調用提示並作出回應。

      ![提示指示](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.hk.png)

現在讓我們發布我們的聲明式代理 😃

### 3.4 將聲明式代理發布到 Microsoft 365 Copilot 和 Microsoft Teams

1. 選擇 **發布**。

      ![發布代理](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.hk.png)

1. 一個模態窗口將出現，顯示可以更新的頻道和發布詳細信息。

   - 頻道：代理將發布到 Microsoft 365 Copilot 和 Microsoft Teams。
   - 代理應用信息：這是用戶在 Microsoft 365 Copilot 或 Microsoft Teams 中添加代理時顯示的內容。這些字段可以根據需要進行更新。

      ![代理應用詳細信息](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.hk.png)

1. 例如，您可以更新 **簡短描述**、**詳細描述**、**開發者名稱** 為您的名字。

    !!! tip
        如果您的瀏覽器中未顯示所有字段，請嘗試縮小比例，例如 75%。

    選擇 **發布**。Copilot Studio 隨後將開始發布代理。

      ![正在發布代理](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.hk.png)

1. 發布完成後，我們將看到代理的 [可用性選項](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez)。

      | 可用性選項    | 描述 |
      | ---------- | ---------- |
      | 分享連結 | 複製連結並與共享用戶分發，以便在 Microsoft 365 Copilot 中打開代理 |
      | 向我的團隊成員和共享用戶顯示  | 允許您授予其他人參與代理創作的權限，或向安全組授予他們在 Microsoft 365 Chat 或 Microsoft Teams 中使用代理的權限。  |
      | 向我的組織中的所有人顯示   | 提交給租戶管理員以添加到組織目錄中，供所有租戶用戶添加代理。代理將顯示在 Microsoft 365 Copilot 和 Microsoft Teams 中的 "由您的組織創建" 下。    |
      | 下載為 .zip    | 下載為 zip 文件以作為自定義應用上傳到 Microsoft Teams    |

      ![可用性選項](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.hk.png)

1. 讓我們看看如何分享代理。選擇 **向我的團隊成員和共享用戶顯示**。一個窗格將出現，您可以通過輸入姓名、電子郵件或安全組搜索您希望分享代理的用戶。您可以隨時查看此列表以編輯誰有權訪問代理。

      還有兩個選項框：
      - _向新用戶發送電子郵件邀請_ - 新用戶將收到電子郵件邀請。
      - _在 Teams 應用商店的 "由 Power Platform 創建" 部分中可見_ - 代理將在 Teams 應用商店的 "由 Power Platform 創建" 部分中可用。
如需更多詳情，請參閱[連接並配置 Teams 和 Microsoft 365 的代理](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez)。

選擇 **取消** 或 **X** 圖標以退出窗格。

![分享代理](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.hk.png)

1. 選擇 **複製**，並在新的瀏覽器標籤中粘貼該鏈接。

![複製鏈接](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.hk.png)

1. Microsoft 365 Copilot 將加載，並彈出一個模態窗口，顯示代理應用的詳細信息。
   注意開發者名稱、簡短描述和詳細描述的顯示方式。這些是之前步驟中更新的發布詳細信息。

選擇 **添加**。

![可用性選項](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.hk.png)

1. 我們的聲明式代理將接著加載。我們可以看到快速選擇的啟動提示，幫助用戶迅速獲得即時幫助。

選擇其中一個啟動提示。在我的啟動提示中，我將選擇 **軟件安裝幫助** 提示，這將自動填充 Copilot 消息字段。提交問題給 Copilot。

![選擇啟動提示](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.hk.png)

1. 選擇 **始終允許**，授予您的聲明式代理調用 IT 專家提示的權限。

![選擇始終允許](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.hk.png)

1. 代理將調用我們的 **IT 專家** 提示，我們將看到模型響應作為消息返回到我們的聲明式代理。

![響應](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.hk.png)

向下滾動查看響應的完整詳細信息。

![響應](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.hk.png)

1. 但 _我們如何知道_ 聲明式代理調用了提示？👀 這裡有個小提示！

!!! tip
    您可以通過啟用 [開發者模式](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez) 在 Microsoft 365 Copilot 中測試和調試代理。

在 Copilot 消息字段中輸入以下內容並提交。

    ```text
    -developer on
    ```

確認消息將出現，告知您開發者模式已啟用。

![開發者模式已啟用](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.hk.png)

1. 提交以下問題以調用提示。

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![輸入問題](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.hk.png)

1. 我們將再次看到來自 **IT 專家** 提示的模型響應作為消息返回。向下滾動消息底部，顯示一個帶有調試信息的卡片。

通過選擇展開 **代理調試信息**。

![代理調試信息](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.hk.png)

1. 在這裡，您將找到運行時發生的代理元數據信息。

![代理調試信息展開](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.hk.png)

在我們的使用案例中，我們將重點關注 _操作_ 部分。

- **匹配的操作** 突出顯示應用搜索期間找到的功能的當前狀態。
- **選擇的操作** 突出顯示基於應用決策過程選擇運行的功能的當前狀態。

![代理調試信息展開](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.hk.png)

因此，我們可以看到代理協調器根據我們聲明式代理的指示選擇調用 IT 專家提示。這在 _執行的操作_ 部分中進一步概述，該部分還告訴我們它成功調用了提示。

![查看代理調試信息](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.hk.png)

1. 要關閉開發者模式，請在 Copilot 消息字段中輸入以下內容並提交。

    ```text
    -developer off
    ```

確認消息將出現，告知您開發者模式已禁用。太棒了，現在您知道如何驗證您的聲明式代理在 Microsoft 365 Copilot 中是否調用了您的提示 🌞

![開發者模式已禁用](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.hk.png)

1. 我們現在將在 Microsoft Teams 中測試我們的代理。使用左側菜單導航到 **應用**，並在 _應用_ 部分下選擇 **Teams**。

![在應用中選擇 Teams](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.hk.png)

1. Microsoft Teams 將在新的瀏覽器標籤中加載，然後顯示 Microsoft 365 Copilot 的使用條款，選擇 **同意**。

![選擇同意](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.hk.png)

1. Microsoft 365 Copilot 將默認加載，右側窗格列出所有可用代理，包括 **Contoso Tech Support Pro** 聲明式代理。

![Microsoft 365 Copilot 在 Teams 中](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.hk.png)

1. 選擇左側菜單中的 **省略號圖標 (...)**。在搜索字段中搜索 **Contoso Tech Support Pro**，或者如果您看到代理，選擇它。

您也可以右鍵單擊鼠標以 **固定** 代理，方便在 Microsoft Teams 左側菜單中快速訪問。

![選擇並固定代理](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.hk.png)

1. 我們將看到代理加載。接下來測試代理。輸入以下提示並提交。

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![固定代理](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.hk.png)

1. 提示的模型響應將顯示。

![Teams 中的響應](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.hk.png)

幾分鐘內，您已學會如何在 Microsoft 365 Copilot 和 Microsoft Teams 中發布您的聲明式代理並進行測試 😊

## ✅ 任務完成

恭喜！👏🏻 您已在 Copilot Studio 中構建了一個聲明式代理，添加了提示，指導代理使用提示，並學會如何測試和發布您的代理到 Microsoft 365 Copilot 和 Microsoft Teams。

您的代理現在已準備就緒——隨時為內部用戶提供幫助、排除故障和服務。

這是 **Lab 03 - 在 Microsoft Copilot Studio 中為 Microsoft 365 Copilot 構建聲明式代理** 的結尾，選擇以下鏈接進入下一課程。

⏭️ [進入 **創建新解決方案** 課程](../04-creating-a-solution/README.md)

下次再見，保持敏銳。企業工作的未來由代理驅動——現在您知道如何構建一個。

## 📚 策略資源

🔗 [在 Microsoft Copilot Studio 中為 Microsoft 365 Copilot 構建聲明式代理](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [添加提示](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [與其他用戶共享代理](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [為您的代理構建提示](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="分析" />

---

**免責聲明**：  
此文件已使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於重要信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。