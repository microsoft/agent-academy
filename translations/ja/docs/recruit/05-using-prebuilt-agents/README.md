<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8e2c64a7f9303e58329ec8bb468c80b4",
  "translation_date": "2025-10-18T02:43:26+00:00",
  "source_file": "docs/recruit/05-using-prebuilt-agents/README.md",
  "language_code": "ja"
}
-->
# 🧰 ミッション 05: 既存のエージェントを使用する  

## 🕵️‍♂️ コードネーム: `OPERATION SAFE TRAVELS`

> **⏱️ 作業時間の目安:** `約30分`

🎥 **ウォークスルーを見る**

[![既存エージェントの動画サムネイル](../../../../../translated_images/video-thumbnail.234ee62d2e4e837a7401776b5f092e5d5819f46a2e2859a92654b38f1381789f.ja.jpg)](https://www.youtube.com/watch?v=NmXsx8WjWuM "YouTubeでウォークスルーを見る")

## 🎯 ミッション概要

Copilot Studio Agent Academyの次のミッションへようこそ。今回は、Microsoftが提供する**既存エージェント**について学びます。これらのエージェントは、展開を迅速化し、価値を早く実現するために設計された、目的に特化したインテリジェントなエージェントです。

ゼロから構築するのではなく、既存エージェント（**エージェントテンプレート**とも呼ばれます）を使用することで、すぐにカスタマイズして数分で展開できるシナリオを提供します。

このミッションでは、**Safe Travels**エージェントを展開します。このエージェントは、ユーザーが出張の準備をしたり、会社のポリシーを理解したり、計画を効率化するのを支援します。

---

## 🧭 目標

このミッションでの目標は以下の通りです：

1. 既存エージェントとは何か、なぜ重要なのかを理解する  
1. **Safe Travels**エージェントテンプレートを展開する  
1. エージェントの応答とコンテンツをカスタマイズする  
1. エージェントをテストして公開する  

---

## 🧠 既存エージェントとは？

既存エージェントは、Microsoftが作成した即時利用可能なAIエージェントで、以下の特徴があります：

- 出張、HR、ITサポートなど、一般的なビジネスニーズに対応  
- 完全に機能するトピック、トリガーフレーズ、指示、サンプル知識を含む  
- 編集、拡張、独自のデータでの基盤化が可能  

これらのエージェントは、迅速に開始したり、エージェントの構造を学ぶのに最適です。

---

## 🧪 ラボ 05: 既存エージェントで迅速に開始する

これから、既存エージェントを選択してカスタマイズする方法を学びます。

- [5.1 Copilot Studioを起動する](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.2 Safe Travelsエージェントテンプレートを選択する](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.3 エージェントをカスタマイズする](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.4 テストと公開](../../../../../docs/recruit/05-using-prebuilt-agents)

前回の例に従い、専用のCopilot Studio環境でITヘルプデスクエージェントを構築するソリューションを作成します。

それでは始めましょう！

### 5.1 Copilot Studioを起動する

1. [https://copilotstudio.microsoft.com](https://copilotstudio.microsoft.com) にアクセスします。

1. Microsoft 365の職場または学校のアカウントでサインインします。

!!! warning
    Copilot Studioが有効になっているテナントである必要があります。Copilot Studioが表示されない場合は、[ミッション00](../00-course-setup/README.md)に戻り、セットアップを完了してください。

### 5.2 Safe Travelsエージェントテンプレートを選択する

1. Copilot Studioのホームページで、**+ Create**をクリックします。  
    ![エージェントを作成](../../../../../translated_images/create.ef22dd3e758823e9f17d69ef07c7db6fef8cbc00dd944ac65842bd3bd9f16efd.ja.png)

1. **Start with an agent template**セクションまでスクロールします。

1. **Safe Travels**を見つけて選択します。  

    ![Safe Travelsテンプレートを選択](../../../../../translated_images/choose_template.01c90e72076da7f14a9c93120dec6932b57a109a506823dd3b195d8f610afb07.ja.png)

1. テンプレートには、説明、指示、知識が事前にロードされていることを確認します。  

    ![テンプレートを確認](../../../../../translated_images/template-setup.0b2f5a8dd8c3e7e305d24461df3065a4ec435d3300df75287891830a9b91b974.ja.png)

1. **Create**をクリックします。  

    ![エージェントを作成](../../../../../translated_images/create-agent-setup.3383d353508b5e33593bd2961c1fbea29568a49868356844ab4cffdad584a655.ja.png)

これにより、Safe Travelsの設定に基づいた新しいエージェントが環境内に作成されます。

### 5.3 エージェントをカスタマイズする

エージェントが作成されたら、組織に合わせて調整しましょう：

1. **Enabled generative AI**を選択して、テンプレートに提供された指示を使用できるようにします。  

    ![生成回答を有効化](../../../../../translated_images/gen-answers.7e91d692123771a60b0b944956472a1323857f61ffa2c32231f12eeb9bec341c.ja.png)

1. 次に、エージェントに追加の知識ソースを装備し、ヨーロッパ旅行に関する質問に答えられるようにします。これを行うには、**knowledge**セクションまでスクロールし、**Add knowledge**を選択します。  

    ![知識を追加](../../../../../translated_images/knowledge.d85f70ad6cffe8700b2f33f76633c1c37ce45a960a33e42b3b48eca2759449b5.ja.png)

1. **Public websites**を選択します。  

    ![公開ウェブサイトを追加](../../../../../translated_images/public-website.cb547b2284c409058bbe7e0a46e503f2368911b0781eec530b9ae63cd174e0b9.ja.png)

1. テキスト入力欄に**<https://european-union.europa.eu/>**を貼り付け、**Add**を選択します。  

    ![ウェブサイトを追加](../../../../../translated_images/paste-add.bb80b0f0f9bcd47dfbf00ebcb0a5386fa892be795c2eee74a8348c0d2a6ab5ae.ja.png)

1. **Add to agent**を選択します。  

    ![エージェントに追加](../../../../../translated_images/add-to-agent.f139c87c5a79ddaa1eef244a93f76c6451c1374dbbf189c23ce24c49a65d6073.ja.png)

### 5.4 テストと公開

1. 右上の**Test**をクリックしてテストウィンドウを起動します。  

1. 以下のようなフレーズを試してみてください：

    - `“アメリカからアムステルダムに旅行するにはビザが必要ですか？”`
    - `“アメリカのパスポートを取得するにはどのくらい時間がかかりますか？”`
    - `“スペインのバレンシアにある最寄りのアメリカ大使館はどこですか？”`

1. エージェントが正確で役立つ情報を返すことを確認し、Activity Mapで情報が取得された場所を確認します。  

    ![エージェントに追加](../../../../../translated_images/response-passport.e91b05c561f49cf5edbbdc6d7a61fffdcc4ad3d413bd17b09cca3f521a578be8.ja.png)

1. 準備が整ったら、**Publish**をクリックします。  

    ![エージェントに追加](../../../../../translated_images/publish-1.0685cfdf10e365ee58a8d0160c5bab81aef8fa5fbd2eb65535d568f611532637.ja.png)

1. ダイアログボックスで再度**Publish**を選択します。  
    ![エージェントに追加](../../../../../translated_images/publish-2.9c3964d72347088eeaaf8c137921d5b67c9962bce0ad067f89e8999f75299aa2.ja.png)

1. 必要に応じて、組み込みの**Channels**機能を使用してエージェントをMicrosoft Teamsに追加します。

!!! note "🧳 ボーナス目標"
    Safe TravelsエージェントをSharePointサイトやFAQファイルで基盤化し、会社の旅行ポリシーにより関連性を持たせてみてください。

## ✅ ミッション完了

以下を成功裏に達成しました：

- Microsoftの既存エージェントを展開  
- エージェントをカスタマイズ  
- **Safe Travels**エージェントテンプレートの独自バージョンをテストして公開  

⏭️ [次のレッスン **カスタムエージェントをゼロから作成する** へ進む](../06-create-agent-from-conversation/README.md)。

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/05-using-prebuilt-agents" alt="分析" />

---

**免責事項**:  
この文書はAI翻訳サービス[Co-op Translator](https://github.com/Azure/co-op-translator)を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があります。元の言語で記載された文書を正式な情報源としてご参照ください。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤認について、当社は責任を負いません。