<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-18T02:45:21+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "ja"
}
-->
# 🚨 ミッション 03: Microsoft 365 Copilot 用の宣言型エージェントを展開する

## 🕵️‍♂️ コードネーム: `OPERATION COPILOT EXTENSION`

> **⏱️ 作戦時間枠:** `約60分`

🎥 **ウォークスルーを見る**

[![宣言型エージェント作成のビデオサムネイル](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.ja.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "YouTubeでウォークスルーを見る")

## 🎯 ミッション概要

エージェントメーカーとしての初めての現場任務へようこそ。あなたは、Microsoft 365 CopilotとMicrosoft Teamsに直接埋め込まれる特別なオペレーターである宣言型エージェントを設計、装備、展開するために選ばれました。

従来のエージェントとは異なり、宣言型エージェントは明確なミッション（指示）、ツール（プロンプト/コネクタ）、内部情報への戦略的アクセス（SharePoint、Dataverseなどの知識ソース）を持って運用されます。あなたの仕事は、Microsoft Copilot Studioを使用して、このエージェントのスキルと目的を具現化することです。

さあ、始めましょう。

## 🔎 目標

このミッションでは以下を学びます：

1. 宣言型エージェントとは何か、そしてMicrosoft 365 Copilotをカスタム機能で拡張する方法
1. Microsoft Copilot StudioとCopilot Studioエージェントビルダーの比較
1. 会話型作成体験を通じて自然言語で宣言型エージェントを作成する方法
1. エージェントの専門知識と問題解決能力を強化するためのAIプロンプトを追加する方法
1. Microsoft 365 CopilotとMicrosoft Teamsで宣言型エージェントを公開し、テストする方法

## 🕵🏻‍♀️ Microsoft 365 Copilotの宣言型エージェントとは？

宣言型エージェントは、Microsoft 365 Copilotのカスタマイズ版です。特定のビジネスニーズに対応するプロセスをサポートする指示を提供し、企業の知識に基づいて運用し、ツールを活用して拡張性を高めることで、Microsoft 365 Copilotをカスタマイズできます。これにより、組織はユーザーにとってより機能的で個別化された体験を提供することが可能になります。

## 🤔 Microsoft Copilot Studioを使用して宣言型エージェントを構築する理由は？

作成者として、すでにMicrosoft 365 Copilotの[Copilot Studioエージェントビルダー](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez)を探索したことがあるかもしれません。そのため、_なぜMicrosoft Copilot Studioで宣言型エージェントを構築するのか？_ と疑問に思うかもしれません。

Microsoft Copilot Studioは、Copilot Studioエージェントビルダーの制限を超えた宣言型エージェントのための包括的なツールと機能を提供します。Copilot Studioエージェントビルダーと同様に、Microsoft Copilot Studioで構築するためにプログラミングやソフトウェア開発の知識は必要ありません。Copilot StudioエージェントビルダーとCopilot Studioの違いをさらに詳しく見てみましょう。

### 機能比較

以下の表は、Copilot StudioエージェントビルダーとCopilot Studioで宣言型エージェントを構築する際の違いを示しています。

| 機能                   | Microsoft 365 CopilotのCopilot Studioエージェントビルダー                          | Copilot StudioでMicrosoft 365 Copilotを拡張                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **知識**       | Web、SharePoint、Microsoft Teamsチャット、Outlookメール、Copilotコネクタ     | Web検索（Bing経由）、SharePoint、Dataverse、Dynamics 365、Copilotコネクタ  |
| **ツール**       | コードインタープリタ、画像生成     | 1400以上のPower Platformコネクタ、カスタムコネクタ、プロンプト、コンピュータ使用、REST API、Model Context Protocol   |
| **スタータープロンプト**         | ユーザーがすぐに開始できるようプロンプトを設定   | ユーザーがすぐに開始できるようプロンプトを設定  |
| **チャネル**           | エージェントはMicrosoft 365 Copilotにのみ公開     | エージェントはMicrosoft 365 CopilotとMicrosoft Teamsに公開      |
| **共有権限**         | ユーザーは閲覧者のみ    | ユーザーは編集者または閲覧者になれる   |

Copilot Studioで構築された宣言型エージェントには、さらに多くの機能が提供されており、次に学んでいきます。

!!! tip
    - Copilot Studioエージェントビルダーについて詳しく知りたい場合は、[Copilot Developer Camp: Lab MAB1 - 初めてのエージェントを構築する](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/)をご覧ください。
    - Microsoft 365 CopilotのCopilot Studioエージェントビルダーを超えて宣言型エージェントを拡張するプロ開発については、[Copilot Developer Camp: Lab MAB1 - 初めてのエージェントを構築する](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/)をご覧ください。

### Copilot Studioで構築された宣言型エージェントによるMicrosoft 365 Copilotの拡張

機能比較表から学んだ内容をさらに詳しく見ていきましょう。

#### カスタマイズ

- **詳細な指示**: エージェントの目的と行動を正確に定義するための詳細な指示と機能を提供できます。
  - 自然言語を使用してツールを呼び出すことが含まれます。

- **企業知識へのアクセス**: ユーザーの権限を尊重しながら企業知識にアクセスできます。
  - SharePointとの統合
  - Dataverseとの統合
  - Dynamics 365との統合
  - 組織管理者によって有効化されたMicrosoft 365 Copilotコネクタ

   ![カスタマイズ](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.ja.png)

#### 高度な機能

- **外部サービスとの統合**: 外部サービスと統合する1400以上のPower Platformコネクタから選択でき、より複雑で強力な機能を提供します。
  - 例: [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez)、[ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez)、[Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez)、[SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez)など
  - または、Model Context ProtocolサーバーやREST APIを直接活用することも可能です。

- **AIプロンプト**: プロンプトを使用して、自然言語とAI推論を活用してテキスト、ドキュメント、画像、データを分析・変換します。
  - チャットモデルを選択し、Basic（デフォルト）、Standard、Premiumから選択
  - Azure AI Foundryモデルを持ち込んでプロンプトを基盤にするオプション

- **より多くの展開構成オプション**: チャネルを選択し、ユーザー権限を定義します。
  - Microsoft Teamsに公開し、ユーザーが迅速に採用できる使い慣れたインターフェースを提供
  - エージェントの所有者に依存しないように、編集権限を共有可能

   ![高度な機能](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.ja.png)

要約すると、Microsoft Copilot Studioの宣言型エージェントは、企業知識システムの統合、外部サービスやAI GPTモデルへの接続ツールを通じて、ビジネスニーズに合わせてMicrosoft 365 Copilotをカスタマイズすることを可能にします。

## 🧪 ラボ 03: Microsoft 365 Copilot用の宣言型エージェントをMicrosoft Copilot Studioで構築する

次に、「Business-to-Employee」ユースケースのための宣言型エージェントを構築する方法を学びます。このエージェントは**ITヘルプデスクエージェント**として機能します。

- [3.1 宣言型エージェントを作成する](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 宣言型エージェントのプロンプトを作成して追加する](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 指示を更新して宣言型エージェントをテストする](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 宣言型エージェントをMicrosoft 365 CopilotとMicrosoft Teamsに公開する](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    このラボでは、ツールとしてプロンプトを追加する手順を説明します。次のレッスンでは、知識ソースの追加やその他のツールの追加について詳しく説明します。学習を簡単にするために😊

### 👩🏻‍💼 Business-to-Employee (B2E) の理解

Business-to-Employee (B2E)とは、企業が従業員に直接提供するインタラクションやサービスを指します。エージェントの文脈では、Copilot Studioの高度な機能を使用して、組織内の従業員の仕事の体験をサポートし、向上させることを意味します。

### ✨ ユースケースシナリオ

**私が** 従業員として

**したいことは** デバイスの問題、ネットワークのトラブルシューティング、プリンターのセットアップなどの問題について、ITヘルプデスクエージェントから迅速かつ正確な支援を受けること

**その理由は** 生産性を維持し、技術的な問題を遅延なく解決するため

さあ、始めましょう！

### 前提条件

- 作成者は、Copilot Studio環境で作成する権限を持ち、アクセスできる必要があります。

!!! note "ライセンスに関する注意"
    このラボでは、ツールとしてプロンプトを追加する手順を説明します。次のレッスンでは、知識ソースの追加やその他のツールの追加について詳しく説明します。学習を簡単にするために😊
  
    Copilot Studioで構築された宣言型エージェントをMicrosoft 365 Copilotに公開するためにMicrosoft 365 Copilotユーザーライセンスは必要ありません。ただし、_公開された宣言型エージェント_をMicrosoft 365 Copilotで使用する**ユーザー**にはMicrosoft 365 Copilotユーザーライセンスが必要です。

### 3.1 宣言型エージェントを作成する

!!! warning "Copilotの質問はセッションごとに異なる場合があります"

    Copilotの会話型作成体験は毎回異なる場合があり、提供されるガイダンスの質問が以前と少し異なることがあります。

1. [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/)にアクセスし、資格情報を使用してサインインします。このラボで使用する環境に切り替えてください。

1. メニューから**エージェント**を選択し、**Microsoft 365用Copilot**を選択します。

       ![Microsoft 365用Copilot](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.ja.png)

1. 次に、**+ エージェントを追加**を選択して宣言型エージェントを作成します。

       ![エージェントを追加](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.ja.png)

1. 次に、会話型作成体験がロードされ、Copilotと自然言語でチャットしながら、構築したい宣言型エージェントを説明し、提供される質問をガイドとして使用できます。

       以下の内容を含む詳細な説明を入力します。  
       - エージェントのタスク  
       - 対応可能な問い合わせの種類  
       - 応答の形式  
       - エージェントの目標  
    
       ```text
       あなたは、幅広いコンピュータシステム、ネットワーキング、サイバーセキュリティに特化した高度なスキルと経験を持つITプロフェッショナルです。技術的な問題を診断し解決し、すべての技術レベルのユーザーに対して解決策を明確かつ理解しやすい方法で説明し、ベストプラクティスについてのガイダンスを提供することができます。簡潔で情報豊富であり、適切な場合には箇条書きでステップバイステップの指示を使用してください。あなたの目標は、ユーザーが問題を理解し、効果的に解決する方法を提供することです。
       ```
    
       ![プロンプトを作成](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.ja.png)

1. プロンプトを送信すると、右側のパネルにエージェントの詳細と指示がプロンプトで定義された内容として更新されます。次に、エージェントの名前を確認するよう求められ、Copilotが名前を提案します。

       提案された名前を受け入れるには`yes`と入力するか、以下のような別の名前を入力します。
    
       ```text
       Contoso Tech Support Pro
       ```
    
       ![指示が更新されました](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.ja.png)

    !!! warning "注意: Copilotの質問はセッションごとに異なる場合があります"

        Copilotの会話型作成体験は毎回異なる場合があり、提供される質問が以前と少し異なることがあります。

1. エージェントの名前が右側のパネルに更新されました。次に、エージェントの指示を洗練するよう求められます。Copilotが提案した内容は素晴らしいので、自身の提案を使用するように指示します。以下を入力します。

      ```text
      Focus on the IT issues and scenarios you've identified
      ```

      ![名前が更新されました](../../../../../translated_images/3.1_06_NameUpdated.b6b8cc7c670b77c635d6b54b723e1a83f63ec288c0eab260fdbf88c7ec163003.ja.png)

1. 次に、公開されているウェブサイトや知識を追加するかどうか尋ねられます。このラボでは宣言型エージェントにプロンプトのみを追加するため、`No`と回答します。次のレッスンでは知識ソースの追加について学びます。

      ![ウェブサイトや知識ソースは追加されません](../../../../../translated_images/3.1_07_KnowledgeSources.2001faa25aab922f38da82a8602e68b3ad7153941e87bab0949177e0b2ab0c08.ja.png)

1. Copilotから、会話型作成体験を使用してエージェントの設定が完了したとの応答が表示されます。しかし、さらに洗練するために、簡潔で情報豊富で箇条書きを使用し、共感を持ったコミュニケーションを行い、解決策を提供した後にフィードバックを求めるように指示します。

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

      ![エージェント指示を更新](../../../../../translated_images/3.1_08_FurtherRefinements.993926c4e55cc5133413f4e10a61a6ed43351d070e791db0ee5547ea83f46473.ja.png)

1. Copilotが指示が更新されたことを確認します。**作成**をクリックして、Microsoft 365 Copilot用の宣言型エージェントをプロビジョニングします。

      ![エージェントを作成](../../../../../translated_images/3.1_09_CreateDeclarativeAgent.71442cd4e18105359e55016d92e54b74ac18977bb535c637a05bac0d3680a3c5.ja.png)

    !!! warning "注意: Copilotの質問はセッションごとに異なる場合があります"

        Copilotの会話型作成体験は毎回異なる場合があり、提供される質問が以前と少し異なる場合があります。

1. エージェントがプロビジョニングされると、会話型作成体験中に定義された説明と指示を含むエージェントの詳細が表示されます。
![エージェントの詳細](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.ja.png)

ペインをスクロールダウンすると、知識の追加、Web検索（Bing経由）の有効化、スタータープロンプト、Microsoft 365 Copilot用の宣言型エージェントの公開詳細などの機能が表示されます。スタータープロンプトは右側のテストペインにも表示されます。ユーザーはこれらのスタータープロンプトを選択してエージェントとの対話を開始できます。

![提案されたプロンプト](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.ja.png)

1. エージェントの詳細セクションでは、エージェントアイコンを変更することもできます。**編集**を選択してください。

![詳細を編集](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.ja.png)

ここでアイコンと背景色を変更できます。**保存**を選択し、もう一度**保存**を選択してエージェントの詳細を更新してください。

![アイコンを変更](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.ja.png)

1. 作成したエージェントを簡単にテストしてみましょう。右側のテストペインで**スタータープロンプト**の1つを選択してください。

![スタータープロンプトをテスト](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.ja.png)

1. エージェントが応答します。指示に従い、箇条書きで分かりやすく情報を提供し、共感を示していることに注目してください。

メッセージの最後までスクロールすると、指示通りに解決策を提供した後、フィードバックを求めていることがわかります。

![テスト結果の応答](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.ja.png)

数分でCopilot StudioでMicrosoft 365 Copilot用の宣言型エージェントを追加できました 🙌🏻

次は、エージェントにツールを追加し、プロンプトを作成する方法を学びます。

### 3.2 宣言型エージェント用のプロンプトを作成して追加する

1. **ツール**セクションまでスクロールし、**+ ツールを追加**を選択してください。

![ツールを追加](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.ja.png)

1. ツールモーダルが表示され、Power Platformコネクタのリストが表示されます。プロンプトを追加するには、**+ 新しいツール**を選択してください。

![新しいツール](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.ja.png)

1. 他のツールのリストが表示されます - プロンプト、カスタムコネクタ、REST API、モデルコンテキストプロトコル。組織が[コンピュータ使用の要件](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez)を満たしている場合、これもリストに表示されます。**プロンプト**を選択してください。

![プロンプトを選択](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.ja.png)

1. プロンプトの名前を入力してください。プロンプトの名前を`IT Expert`としましょう。

![名前を入力](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.ja.png)

1. **モデル**の横にある**シェブロンアイコン**を選択して、選択可能なチャットモデルを確認してください。デフォルトでは**Basic GPT-4.1 mini**モデルが選択されており、Azure AI Foundry Modelsを使用して独自のモデルを持ち込むオプションもあります。ここではデフォルトのモデルを選択したままにします。

![モデルを変更](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.ja.png)

1. 次に、プロンプトに指示を提供します。選択できる方法は3つあります。

   - プロンプトに何をさせたいかの説明に基づいてCopilotに指示を生成させる。
   - プロンプトライブラリのプリセットテンプレートを使用してプロンプトを作成する。
   - 独自の指示を手動で入力する。

1. まず、Copilotを使用して説明に基づいて指示を生成する方法を試してみましょう。以下をCopilotフィールドに入力して送信してください。

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

![Copilotで開始](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.ja.png)

1. Copilotがプロンプトを生成し始めます。

![Copilotがプロンプトを作成](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.ja.png)

1. Copilotが生成したドラフト指示が表示されます。

![Copilotが生成したドラフト指示](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.ja.png)

1. 指示の最後までスクロールすると、Copilotによってすでに定義されたユーザー入力パラメータが表示されます。次のオプションがあります：
   - 生成されたドラフト指示を保持する。
   - Copilotを使用してドラフト指示を更新する。
   - ドラフト指示をクリアする。

   **ゴミ箱アイコン**を選択してドラフト指示をクリアし、次にプロンプトライブラリを試してみましょう。

   ![プロンプト指示](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.ja.png)

1. **プロンプトテンプレート**リンクを選択してください。

![プロンプトテンプレートを選択](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.ja.png)

1. 選択可能なプロンプトテンプレートのリストが表示されます。これらは[Power Platform Promptライブラリ](https://aka.ms/power-prompts)から提供されています。

![プロンプトライブラリ](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.ja.png)

1. `IT expert`プロンプトを検索して選択してください。

![IT expertプロンプトを選択](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.ja.png)

1. プロンプトが指示として追加され、プロンプトテンプレートで定義された入力パラメータが含まれます。Copilotを使用した会話型作成体験でエージェントに指示を提供した際と同様に、このプロンプトテンプレートは以下を明確にします：
   - タスク、
   - 対応可能な問い合わせの種類、
   - 応答の形式とプロンプトの目的。

![プロンプト指示](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.ja.png)

1. 指示をクリアし、次に手動で指示を入力する方法を試してみましょう。[Power Platform Promptライブラリ](https://aka.ms/power-prompts)から[IT Expertプロンプト](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/)を使用します。プロンプトをコピーして貼り付けてください。

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

![プロンプト指示](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.ja.png)

1. 次に、プロンプトのユーザー入力パラメータを定義します。これらはテキストや画像、テスト用のサンプルデータを含むことができます。また、Dataverseテーブルからの知識でプロンプトを基盤とする機能もあります。この演習では、定義するユーザー入力は1つだけで、問題入力です。現在、プロンプト内のプレースホルダーとして`[Problem]`と記載されています。これを構成するには、`/`文字を入力するか、**+コンテンツを追加**を選択して**テキスト**を選択してください。

![テキスト入力](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.ja.png)

1. 入力パラメータの名前とサンプルデータを入力できます。

以下を名前として入力してください：

    ```text
    problem input
    ```

以下をサンプルデータとして入力してください：

    ```text
    My laptop gets an error with a blue screen
    ```

次に**閉じる**を選択してください。

![問題入力を構成](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.ja.png)

1. 問題入力パラメータが指示に追加され、構成されたサンプルデータが表示されます。これでプロンプトをテストできます！

![問題入力が追加](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.ja.png)

1. **テスト**を選択してプロンプトをテストしてください。

![指示をテスト](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.ja.png)

1. 応答が表示されます。指示に従い、応答が箇条書きで見出しを提供していることに注目してください。スクロールしてモデル応答の残りを確認してください。

![モデル応答](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.ja.png)

1. プロンプトを保存する前に、このプロンプトに設定できる設定について学びましょう。**省略記号（...）アイコン**を選択してください。

![プロンプト設定](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.ja.png)

1. ここでは、設定できる3つの設定が表示されます。

   - **温度**: 温度が低いほど予測可能な結果が得られ、高いほど多様性や創造性のある応答が得られます。
   - **レコード取得**: 知識ソースから取得するレコードの数を指定します。
   - **応答にリンクを含める**: 選択すると、応答に取得したレコードのリンク引用が含まれます。

   **Xアイコン**を選択して設定を終了してください。

![設定を構成](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.ja.png)

1. **保存**を選択してプロンプトを保存してください。

![プロンプトを保存](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.ja.png)

1. 次に、**エージェントに追加**を選択してプロンプトを宣言型エージェントに追加してください。

![プロンプト指示](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.ja.png)

1. プロンプトがツールの下に表示されます 🙌🏻

![プロンプトが追加](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.ja.png)

次に、プロンプトを呼び出すために指示を更新し、宣言型エージェントをテストします。

### 3.3 指示を更新して宣言型エージェントをテストする

1. **詳細**セクションまでスクロールし、**編集**を選択してください。これにより、フィールドが編集可能になります。

![編集を選択](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.ja.png)

1. プロンプトを呼び出すために指示を更新できます。指示をクリアし、次の内容をコピーして貼り付けてください。

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

最後の文が、ユーザーが尋ねた質問を問題入力パラメータの値として使用するようエージェントに指示していることに注目してください。エージェントは質問をプロンプトの問題入力として使用します。次に、**保存**を選択してください。

![プロンプトを呼び出す指示を更新](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.ja.png)

1. 宣言型エージェントの更新された指示をテストする準備が整いました。テストペインで**更新アイコン**を選択してください。

![更新アイコンを選択](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.ja.png)

1. 次に、以下のプロンプトを入力して送信してください。

```text
Can you help me, my laptop is encountering a blue screen
```

![テストを実行](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.ja.png)

1. エージェントがプロンプトを呼び出し、応答します。

![プロンプト指示](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.ja.png)

次に、宣言型エージェントを公開しましょう 😃

### 3.4 宣言型エージェントをMicrosoft 365 CopilotとMicrosoft Teamsに公開する

1. **公開**を選択してください。

![エージェントを公開](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.ja.png)

1. モーダルが表示され、更新可能なチャネルと公開の詳細が表示されます。

   - チャネル: エージェントはMicrosoft 365 CopilotとMicrosoft Teamsに公開されます。
   - エージェントアプリ情報: ユーザーがMicrosoft 365 CopilotまたはMicrosoft Teamsにエージェントを追加する際に表示される内容です。必要に応じてこれらのフィールドを更新できます。

![エージェントアプリの詳細](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.ja.png)

1. 例えば、**短い説明**、**長い説明**、**開発者名**をあなたの名前で更新できます。

!!! tip
    ブラウザですべてのフィールドが表示されない場合は、ズームアウトしてみてください（例: 75%）。

**公開**を選択してください。Copilot Studioがエージェントの公開を開始します。

![エージェントを公開中](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.ja.png)

1. 公開が完了すると、エージェントの[利用可能オプション](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez)が表示されます。

| 利用可能オプション | 説明 |
| ---------- | ---------- |
| リンクを共有 | 共有ユーザーにリンクを配布してMicrosoft 365 Copilotでエージェントを開く |
| チームメイトと共有ユーザーに表示 | エージェントの作成に参加する権限を他のユーザーに付与するか、セキュリティグループにアクセス権を付与してMicrosoft 365 ChatまたはMicrosoft Teamsでエージェントを使用できるようにする |
| 組織内の全員に表示 | テナント管理者に提出して、すべてのテナントユーザーがエージェントを追加できるように組織カタログに追加する。エージェントはMicrosoft 365 CopilotおよびMicrosoft Teamsの「Built by your org」セクションに表示されます |
| .zipとしてダウンロード | Microsoft Teamsでカスタムアプリとしてアップロードするために.zipファイルとしてダウンロード |

![利用可能オプション](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.ja.png)

1. エージェントの共有方法を見てみましょう。**チームメイトと共有ユーザーに表示**を選択してください。エージェントを共有したいユーザーを名前、メールアドレス、またはセキュリティグループを入力して検索できるペインが表示されます。このリストはいつでも確認して、エージェントへのアクセス権を持つユーザーを編集できます。

また、2つのチェックボックスがあります：
- _新しいユーザーにメール招待を送信する_ - 新しいユーザーにメール招待が送信されます。
- _Power Platformで作成されたものとして表示_ - エージェントがTeamsアプリストアの「Power Platformで作成されたもの」セクションで利用可能になります。
詳細については、[TeamsとMicrosoft 365用のエージェントを接続して構成する](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez)を参照してください。

**キャンセル**または**X**アイコンを選択してペインを終了します。

![エージェントを共有](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.ja.png)

1. **コピー**を選択し、新しいブラウザタブにリンクを貼り付けます。

![リンクをコピー](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.ja.png)

1. Microsoft 365 Copilotが読み込まれ、モーダルが表示され、エージェントアプリの詳細が確認できます。
   開発者名、短い説明、長い説明が表示されていることに注目してください。これらは以前のステップで更新された公開詳細からのものです。

   **追加**を選択します。

![利用可能なオプション](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.ja.png)

1. 次に宣言型エージェントが読み込まれます。ユーザーがすぐに助けを求めることができるようにするスタータープロンプトが表示されます。

   スタータープロンプトの1つを選択します。私のスタータープロンプトでは、**ソフトウェアインストールヘルプ**プロンプトを選択し、これによりCopilotフィールドにメッセージが自動入力されます。質問をCopilotに送信します。

![スタータープロンプトを選択](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.ja.png)

1. **常に許可**を選択して、宣言型エージェントにITエキスパートプロンプトを呼び出す権限を与えます。

![常に許可を選択](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.ja.png)

1. エージェントが**ITエキスパート**プロンプトを呼び出し、モデルの応答が宣言型エージェントのメッセージとして返されます。

![応答](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.ja.png)

   応答の詳細を確認するにはスクロールしてください。

![応答](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.ja.png)

1. しかし、_どうやって_宣言型エージェントがプロンプトを呼び出したことを確認するのでしょうか？👀 ここでヒントです！

    !!! tip
        [開発者モード](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez)を有効にすることで、Microsoft 365 Copilotでエージェントをテストおよびデバッグできます。

    メッセージCopilotフィールドに以下を入力して送信してください。

    ```text
    -developer on
    ```

    開発者モードが有効になったことを知らせる確認メッセージが表示されます。

![開発者モードが有効](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.ja.png)

1. 以下の質問を送信してプロンプトを呼び出します。

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![質問を入力](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.ja.png)

1. 再び**ITエキスパート**プロンプトからのモデル応答がメッセージとして返されます。メッセージの下部までスクロールすると、デバッグ情報が表示されたカードが確認できます。

   **エージェントデバッグ情報**を選択して展開します。

![エージェントデバッグ情報](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.ja.png)

1. 実行時に発生したエージェントメタデータの情報がここに表示されます。

![エージェントデバッグ情報展開](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.ja.png)

   このユースケースでは、_アクション_セクションに焦点を当てます。

   - **一致したアクション**は、アプリの検索中に見つかった機能の現在のステータスを示します。
   - **選択されたアクション**は、アプリの意思決定プロセスに基づいて実行するために選ばれた機能の現在のステータスを示します。

![エージェントデバッグ情報展開](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.ja.png)

   ここで、エージェントオーケストレーターが宣言型エージェントの指示に従ってITエキスパートプロンプトを呼び出すことを選択したことが確認できます。これはさらに_実行されたアクション_セクションで詳述されており、プロンプトが正常に呼び出されたことも示されています。

![エージェントデバッグ情報を確認](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.ja.png)

1. 開発者モードをオフにするには、メッセージCopilotフィールドに以下を入力して送信してください。

    ```text
    -developer off
    ```

    開発者モードが無効になったことを知らせる確認メッセージが表示されます。これで、Microsoft 365 Copilotの宣言型エージェントがプロンプトを呼び出したかどうかを確認する方法がわかりました🌞

![開発者モードが無効](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.ja.png)

1. 次にMicrosoft Teamsでエージェントをテストします。左側のメニューから**アプリ**に移動し、_アプリ_セクションで**Teams**を選択します。

![アプリでTeamsを選択](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.ja.png)

1. Microsoft Teamsが新しいブラウザタブで読み込まれ、Microsoft 365 Copilotの利用規約が表示されます。**同意する**を選択します。

![同意するを選択](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.ja.png)

1. Microsoft 365 Copilotがデフォルトで読み込まれ、右側のペインに利用可能なすべてのエージェントが表示されます。その中には**Contoso Tech Support Pro**宣言型エージェントも含まれています。

![Microsoft TeamsでのMicrosoft 365 Copilot](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.ja.png)

1. 左側のメニューで**省略記号アイコン（...）**を選択します。検索フィールドで**Contoso Tech Support Pro**を検索するか、エージェントが表示されている場合はそれを選択します。

   また、マウスの右クリックでエージェントを**ピン留め**して、Microsoft Teamsの左側メニューで簡単にアクセスできるようにすることもできます。

![エージェントを選択してピン留め](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.ja.png)

1. エージェントが読み込まれます。次にエージェントをテストします。以下のプロンプトを入力して送信してください。

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![エージェントをピン留め](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.ja.png)

1. プロンプトからのモデル応答が表示されます。

![Teamsでの応答](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.ja.png)

数分で、宣言型エージェントを公開し、Microsoft 365 CopilotとMicrosoft Teamsでテストする方法を学びました😊

## ✅ ミッション完了

おめでとうございます！ 👏🏻 Copilot Studioで宣言型エージェントを構築し、プロンプトを追加し、エージェントにプロンプトを使用するよう指示し、Microsoft 365 CopilotとMicrosoft Teamsにエージェントをテストして公開する方法を学びました。

あなたのエージェントは今、現場で活躍する準備が整いました。オンデマンドで内部ユーザーを支援し、問題解決に役立ちます。

これで**Lab 03 - Microsoft Copilot StudioでMicrosoft 365 Copilot用の宣言型エージェントを構築する**が終了しました。次のレッスンに進むには以下のリンクを選択してください。

⏭️ [**新しいソリューションを作成する**レッスンに進む](../04-creating-a-solution/README.md)

次回まで、しっかり学び続けてください。エンタープライズワークの未来はエージェントを通じて進化します—そして今、あなたはその作り方を知っています。

## 📚 戦略的リソース

🔗 [Microsoft 365 Copilot用の宣言型エージェントを構築する](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [プロンプトを追加する](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [他のユーザーとエージェントを共有する](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [エージェント用のプロンプトを構築する](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="Analytics" />

---

**免責事項**:  
この文書はAI翻訳サービス[Co-op Translator](https://github.com/Azure/co-op-translator)を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があります。元の言語で記載された文書を正式な情報源としてご参照ください。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤認について、当方は一切の責任を負いません。