<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9dceeba2eae2bb73e328602a060eddab",
  "translation_date": "2025-10-18T02:55:13+00:00",
  "source_file": "docs/recruit/11-publish-your-agent/README.md",
  "language_code": "ja"
}
-->
# 🚨 ミッション11: エージェントを公開しよう

## 🕵️‍♂️ コードネーム: `OPERATION PUBLISH PUBLISH PUBLISH`

> **⏱️ 作業時間の目安:** `約30分`  

🎥 **ウォークスルーを視聴する**

[![エージェント公開ビデオのサムネイル](../../../../../translated_images/video-thumbnail.cb69abce792f4bd310436e8b46ebbfcada62f60c636bb894e4077046131f7023.ja.jpg)](https://www.youtube.com/watch?v=eVZmljhYlSI "YouTubeでウォークスルーを視聴する")

## 🎯 ミッション概要

いくつもの挑戦的なモジュールを完了したエージェントメーカーの皆さん、いよいよ最も重要なステップに進む準備が整いました。それは、エージェントの公開です。Microsoft TeamsやMicrosoft 365 Copilotを通じて、あなたの作成物をユーザーに提供する時が来ました。

明確なミッション、強力なツール、重要な知識源を備えたあなたのエージェントは、ユーザーをサポートする準備が整っています。Microsoft Copilot Studioを使用してエージェントを展開し、実際のユーザーが働く場で役立つようにしましょう。

さあ、エージェントを行動に移しましょう。

## 🔎 目標

📖 このレッスンでは以下を学びます:

1. エージェントを公開することの重要性
1. エージェントを公開すると何が起こるか
1. チャンネル（Microsoft Teams & Microsoft 365 Copilot）を追加する方法
1. Microsoft Teamsにエージェントを追加する方法
1. 組織全体でMicrosoft Teamsでエージェントを利用可能にする方法

## 🚀 エージェントを公開する

Copilot Studioでエージェントを作成するたびに、知識やツールを追加して更新することがあります。すべての変更が完了し、十分にテストしたら、エージェントを公開する準備が整います。公開することで、最新の更新が反映されます。新しいツールをエージェントに追加しても、公開ボタンを押さない限り、エンドユーザーにはまだ利用できません。

エージェントの更新をユーザーに提供したい場合は、必ず公開ボタンを押してください。エージェントにチャンネルが追加されている場合、公開ボタンを押すことで、追加されたすべてのチャンネルで更新が利用可能になります。

## ⚙️ チャンネルの設定

チャンネルは、ユーザーがエージェントにアクセスしてやり取りできる場所を決定します。エージェントを公開した後、複数のチャンネルで利用可能にすることができます。各チャンネルはエージェントのコンテンツを異なる方法で表示する場合があります。

以下のチャンネルにエージェントを追加できます:

- **Microsoft TeamsとMicrosoft 365 Copilot** - Teamsのチャットや会議、Microsoft 365 Copilotの体験内でエージェントを利用可能にする ([詳細はこちら](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams))
- **デモウェブサイト** - Copilot Studioが提供するデモウェブサイトでエージェントをテストする ([詳細はこちら](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-web-channels))
- **カスタムウェブサイト** - 自分のウェブサイトにエージェントを直接埋め込む ([詳細はこちら](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-web-channels))
- **モバイルアプリ** - カスタムモバイルアプリにエージェントを統合する ([詳細はこちら](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-custom-application))
- **SharePoint** - SharePointサイトにエージェントを追加し、ドキュメントやサイトのサポートを提供する ([詳細はこちら](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-sharepoint))
- **Facebook Messenger** - Facebookのメッセージングプラットフォームを通じてユーザーと接続する ([詳細はこちら](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-facebook))
- **Power Pages** - Power Pagesウェブサイトにエージェントを統合する ([詳細はこちら](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-power-pages))
- **Azure Bot Serviceチャンネル** - Slack、Telegram、Twilio SMSなどの追加チャンネルにアクセスする ([詳細はこちら](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-azure-bot-service-channels))

チャンネルを追加するには、エージェントの**Channels**タブに移動し、設定したいチャンネルを選択します。各チャンネルには特定の設定要件があり、追加の認証や設定手順が必要な場合があります。

![エージェントのチャンネルタブ](../../../../../translated_images/channels.01b4185735e1147c56dd9c6a9d33a751cdf45e44b3b8515b21e2c57a9c1fe9b8.ja.png)

## 📺 チャンネル体験

異なるチャンネルでは、ユーザー体験が異なります。複数のチャンネル向けにエージェントを構築する際は、各チャンネルごとの違いを理解しておくことが重要です。複数のチャンネルでエージェントをテストし、意図した通りに機能しているか確認するのが良い戦略です。

| 体験                              | ウェブサイト   | TeamsとMicrosoft 365 Copilot           | Facebook                 | Dynamics Omnichannel for Customer Service                   |
| --------------------------------- | ------------- | --------------------------------------- | ------------------------ | ----------------------------------------------------------- |
| [顧客満足度調査][1]               | アダプティブカード | テキストのみ                           | テキストのみ             | テキストのみ                                                 |
| [選択肢][1]                       | 対応           | [最大6つまで対応（ヒーローカードとして）][4] | [最大13個まで対応][6]    | [部分的に対応][8]                                            |
| [Markdown][2]                     | 対応           | [部分的に対応][5]                       | [部分的に対応][7]        | [部分的に対応][9]                                            |
| [ウェルカムメッセージ][1]         | 対応           | 対応                                   | 非対応                  | [チャット][10]では対応。他のチャンネルでは非対応。           |
| [Did-You-Mean][3]                 | 対応           | 対応                                   | 対応                     | [Microsoft Teams][11]、[チャット][10]、Facebook、テキストのみのチャンネル（[TeleSign][12]、[Twilio][13]、[WhatsApp][14]、[WeChat][15]、[Twitter][16]経由のSMS）で対応。提案アクションはテキストのみのリストとして表示され、ユーザーはオプションを再入力する必要があります。 |

[1]: https://learn.microsoft.com/microsoft-copilot-studio/authoring-create-edit-topics
[2]: https://daringfireball.net/projects/markdown/
[3]: https://learn.microsoft.com/microsoft-copilot-studio/advanced-ai-features
[4]: https://learn.microsoft.com/microsoftteams/platform/concepts/cards/cards-reference#hero-card
[5]: https://learn.microsoft.com/microsoftteams/platform/bots/how-to/format-your-bot-messages#text-only-messages
[6]: https://developers.facebook.com/docs/messenger-platform/send-messages/quick-replies/
[7]: https://www.facebook.com/help/147348452522644?helpref=related
[8]: https://learn.microsoft.com/dynamics365/customer-service/asynchronous-channels#suggested-actions-support
[9]: https://learn.microsoft.com/dynamics365/customer-service/asynchronous-channels#preview-support-for-formatted-messages
[10]: https://learn.microsoft.com/dynamics365/customer-service/set-up-chat-widget
[11]: https://learn.microsoft.com/dynamics365/customer-service/configure-microsoft-teams
[12]: https://learn.microsoft.com/dynamics365/customer-service/configure-sms-channel
[13]: https://learn.microsoft.com/dynamics365/customer-service/configure-sms-channel-twilio
[14]: https://learn.microsoft.com/dynamics365/customer-service/configure-whatsapp-channel
[15]: https://learn.microsoft.com/dynamics365/customer-service/configure-wechat-channel
[16]: https://learn.microsoft.com/dynamics365/customer-service/configure-twitter-channel

> [!NOTE]
> チャンネルごとに異なるロジックを使用する例があります。Power Platform Snippetsリポジトリにその例が掲載されています:
>
> Henry JammesがMicrosoft Teamsのチャンネルで異なるアダプティブカードを表示する方法の例を共有しています。 ([例へのリンク](https://github.com/pnp/powerplatform-snippets/blob/main/copilot-studio/multiple-topics-matched-topic/source/multiple-topics-matched.yaml#L40))

## 🧪 ラボ11: TeamsとMicrosoft 365 Copilotにエージェントを公開する

### 🎯 ユースケース

Contoso ITヘルプデスクエージェントは、SharePointの知識源へのアクセス、サポートチケットの作成、プロアクティブな通知の送信、ユーザーのクエリへのインテリジェントな応答など、強力な機能を備えて完全に構成されています。しかし、これらの機能は現在、エージェントを構築した開発環境でのみ利用可能です。

**課題:** エンドユーザーは、エージェントが適切に公開され、実際に使用するチャンネルでアクセス可能になるまで、その機能を利用することができません。

**解決策:** エージェントを公開することで、最新バージョンが実際のユーザーに利用可能になります。これにより、最近の更新、新しいトピック、強化された知識源、構成されたフローがすべて含まれます。公開しない場合、ユーザーは古いバージョンのエージェントとやり取りすることになり、重要な機能が欠けている可能性があります。

TeamsとMicrosoft 365 Copilotチャンネルを追加することも非常に重要です。なぜなら:

- **Teamsとの統合**: 組織の従業員は、コラボレーション、会議、コミュニケーションのために日々Microsoft Teamsを使用しています。エージェントをTeamsに追加することで、ユーザーは主要な作業環境を離れることなくITサポートを受けることができます。

- **Microsoft 365 Copilot**: ユーザーは、Officeアプリケーション全体で日常のワークフローにシームレスに統合されたMicrosoft 365 Copilot体験内で、専門的なITヘルプデスクエージェントに直接アクセスできます。

- **集中アクセス**: 別々のウェブサイトやアプリケーションを覚える必要がなくなり、ユーザーはすでに使用しているプラットフォームを通じてITサポートにアクセスできるため、利便性が向上し、採用率が上がります。

このミッションは、開発作業を本番環境で使用可能なソリューションに変え、組織のエンドユーザーに実際の価値を提供します。

### 前提条件

このラボを開始する前に、以下を確認してください:

- ✅ 前のラボを完了し、完全に構成されたContoso Helpdesk Agentを持っていること
- ✅ エージェントがテストされ、本番使用の準備が整っていること
- ✅ Copilot Studio環境でエージェントを公開する権限があること
- ✅ 組織内でMicrosoft Teamsにアクセスできること

### 11.1 エージェントを公開する

エージェントに関するすべての作業が完了したら、エンドユーザーがエージェントを利用できるようにする必要があります。コンテンツをすべてのユーザーに利用可能にするために、エージェントを公開する必要があります。

1. Copilot Studioの[Copilot Studio maker portal](https://copilotstudio.microsoft.com)を通じてContoso Helpdesk Agentにアクセスします。

    Copilot Studioでは、エージェントを簡単に公開できます。エージェント概要の上部にある公開ボタンを選択するだけです。

    ![エージェント概要の公開ボタン](../../../../../translated_images/publish.0ea13d92c5642af915bb3340c95d21fc560314f4df9de212039a9bfc90b91789.ja.png)

1. エージェントの**公開**ボタンを選択します。

    公開確認のポップアップが表示され、エージェントを本当に公開するかどうか確認します。

    ![公開確認ポップアップ](../../../../../translated_images/publish-popup.5c81be18b2a810270303f4020b0469152a40e006d26cb4aa50373ecaf5033777.ja.png)

1. **公開**を選択して、エージェントの公開を確定します。

    エージェントが公開中であることを示すメッセージが表示されます。このポップアップを開いたままにしておく必要はありません。エージェントが公開されると通知が届きます。

    ![エージェントが公開中](../../../../../translated_images/publishing.a459aaf38bc05b77198534174dc726b598c5270c5474227933f6a0f1a1efb299.ja.png)

    エージェントの公開が完了すると、エージェントページの上部に通知が表示されます。

    ![公開完了通知](../../../../../translated_images/publish-notification.19af02a64b396fb845fa86917f97f165bb2098b76de97cb039c6a9547323eee1.ja.png)

ただし、エージェントを公開しただけでは、まだチャンネルに追加されていません。これを今すぐ設定しましょう！

### 11.2 TeamsとMicrosoft 365 Copilotチャンネルを追加する

1. エージェントにTeamsとMicrosoft 365 Copilotチャンネルを追加するには、エージェントの上部ナビゲーションで**Channel**を選択します。

    ![チャンネルタブ](../../../../../translated_images/channels-tab.c0e6f94aec1578072eee8efd47e461d58cd685799de84a4ddc18cb418886f834.ja.png)

    ここで、このエージェントに追加できるすべてのチャンネルを確認できます。

1. **TeamsとMicrosoft 365**を選択します。

    ![TeamsとMicrosoft 365を選択](../../../../../translated_images/teams-m365-copilot.f0893e75ed6cfa7e41d8beb6b0131114d29a1b71dab2b2d888bde406d30fcff0.ja.png)

1. **Add channel**を選択してウィザードを完了し、エージェントにチャンネルを追加します。

    ![チャンネルを追加](../../../../../translated_images/add-channel.5fd407ac747e713cea43d87cfdc015c5d203a70e729619ca01a67e6868afdb03.ja.png)

    追加が完了するまで少し時間がかかります。追加が完了すると、サイドバーの上部に緑色の通知が表示されます。

    ![チャンネルが追加されました](../../../../../translated_images/channel-added.ce9c58eff88524ba2a74c37c7939350303e650d93f34c753dfe9636226e197f1.ja.png)

1. **See agent in Teams**を選択して新しいタブを開きます。

    ![Teamsでエージェントを見る](../../../../../translated_images/see-agent-teams.5f265c0babfccbe4ef18fbe6259df04ec8649d48fed94d42b3c330e37ca0a9d5.ja.png)

1. **Add**を選択してContoso Helpdesk AgentをTeamsに追加します。

    ![エージェントをTeamsに追加](../../../../../translated_images/add-teams.645ddf3b6719bd7edfcf453d77481c18afb7df478a4f655ef2452a0b77ab6944.ja.png)

    少し時間がかかります。その後、以下の画面が表示されるはずです。

    ![エージェントが正常に追加されました](../../../../../translated_images/teams-added.3cafc77c56381bdd977ea80a117795c6ea677b2d86568cd5da24338e3958f7ce.ja.png)

1. **Open**を選択してTeamsでエージェントを開きます。

    これにより、エージェントがTeams内でアプリとして開かれます。

    ![Microsoft Teamsでエージェントを開く](../../../../../translated_images/agent-teams-open.5a83151f38b31ebeccf7cabf36f2bfd03e7045bb902b4103f1d2126c6aec9498.ja.png)

これでエージェントがMicrosoft Teamsで利用できるようになりましたが、これをより多くの人々に利用可能にしたい場合があります。

### 11.3 テナント内のすべてのユーザーにエージェントを利用可能にする

1. Contoso Helpdesk Agentが開かれているブラウザタブを閉じます。

    これにより、Copilot Studioに戻ります。TeamsとMicrosoft 365 Copilotのサイドパネルはまだ開いています。現在はエージェントをTeamsで開いただけですが、ここでさらに多くのことができます。エージェントの詳細を編集したり、エージェントをより多くのユーザーに展開したりすることができます。

1. **Edit details**を選択します。

    ![詳細を編集](../../../../../translated_images/m365-teams-edit-details.317ee562b1b2aa75c093f2833b793610c3445f69dada7163f164674bad173ab5.ja.png)
これにより、エージェントの詳細や設定を変更できるペインが開きます。アイコンやアイコンの背景色、説明などの基本的な詳細を変更することができます。また、Teamsの設定（例えば、ユーザーがエージェントをチームに追加できるようにしたり、グループチャットや会議チャットでこのエージェントを使用できるようにする）も変更可能です。さらに、*詳細*を選択すると、開発者名、ウェブサイト、プライバシー声明、利用規約などの開発者情報も変更できます。

![詳細編集ペイン](../../../../../translated_images/edit-details.216f5c77105e190ca504c4c21152f32b0965450427d7cc175df370935b715510.ja.png)

1. **キャンセル**を選択して詳細編集ペインを閉じます。

1. **利用可能オプション**を選択します。

    ![利用可能オプション](../../../../../translated_images/m365-teams-availability-options.0ab161ab446293ef5c8f877df3457b87c8a02f5c9df21dc735fb9cddc6b58ed1.ja.png)

    これにより、利用可能オプションのペインが開きます。ここでは、ユーザーにエージェントを使用してもらうためのリンクをコピーしたり（注意：エージェントをユーザーと共有する必要があります）、Microsoft TeamsやMicrosoft 365ストアにエージェントを追加するためのファイルをダウンロードすることができます。ストアにエージェントを表示するには、他にもオプションがあります。例えば、チームメイトや共有ユーザーに表示する（*Power Platformで作成*セクションに表示する）か、組織内の全員に表示する（管理者の承認が必要）ことができます。

1. **組織内の全員に表示**を選択します。

    ![利用可能オプション](../../../../../translated_images/availability-options.a7043460dcbbcdbb6981c86cae687b0d4ecd3d7a8ef709dd267684b17d4a7b8e.ja.png)

1. **管理者承認を申請**を選択します。

    ![承認申請](../../../../../translated_images/submit-for-approval.6c7cfa08ed2637c8e0219dde1d69ac7e62e81b32289e77ff5b6cdeb730ab5e0b.ja.png)

    これで、管理者がエージェントの申請を承認する必要があります。管理者はTeams管理センターにアクセスし、アプリ内でContoso Helpdesk Agentを検索して承認を行います。以下のスクリーンショットは、管理者がTeams管理センターで見る画面の例です。

    ![Teamsアプリ承認待ち](../../../../../translated_images/pending-approval.ec9b6ebcdd1c9a8ca8f9bf20148ffa97e40d16720779c14f106dc3ddda170202.ja.png)

    管理者はContoso Helpdesk Agentを選択し、*公開*を選択してContoso Helpdesk Agentを全員に公開します。

    ![Teamsアプリ公開](../../../../../translated_images/teams-apps-publish.cccbf85984750c60cc7cc27fc20c152ef14d21e3dacb6fa3df01c024ac5fe7ad.ja.png)

    管理者がエージェントの申請を公開すると、Copilot Studioを更新することで、利用可能オプションに*アプリストアで利用可能*のバナーが表示されるはずです。

    ![アプリストアで利用可能](../../../../../translated_images/available-in-app-store.aeb2a875a164b537ee62d0ece51399e94986393837a1c6eec544b81c673e23b0.ja.png)

さらに多くの可能性があります。管理者はグローバル設定ポリシーを変更し、テナント内の全員に対してContoso Helpdesk Agentを自動インストールすることができます。それに加えて、Contoso Helpdesk Agentを左側のレールに固定して、全員が簡単にアクセスできるようにすることも可能です。

## ✅ ミッション完了

🎉 **おめでとうございます！** エージェントを無事に公開し、TeamsとMicrosoft 365 Copilotに追加することができました！次はコースの最後のミッションです：ライセンスの理解。

⏭️ [**ライセンスの理解**レッスンに進む](../12-understanding-licensing/README.md)

## 📚 戦略的リソース

🔗 [公開チャネルのドキュメント](https://learn.microsoft.com/microsoft-copilot-studio/publication-fundamentals-publish-channels)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/11-publish-your-agent" alt="分析" />

---

**免責事項**:  
この文書はAI翻訳サービス[Co-op Translator](https://github.com/Azure/co-op-translator)を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があります。元の言語で記載された文書を正式な情報源としてご参照ください。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤認について、当方は一切の責任を負いません。