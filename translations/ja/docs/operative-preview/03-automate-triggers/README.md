<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "75efaf515d5694d4fd549bfd6518901a",
  "translation_date": "2025-10-18T03:24:16+00:00",
  "source_file": "docs/operative-preview/03-automate-triggers/README.md",
  "language_code": "ja"
}
-->
# ミッション03: イベントトリガーを追加して自律的に動作させる

--8<-- "disclaimer.md"

## 🕵️‍♂️ コードネーム: `OPERATION SIGNAL POINT`

> **⏱️ 作戦時間:** `約45分`

## 🎯 ミッション概要

エージェント、再びようこそ。[ミッション02](../02-multi-agent/README.md)では、アプリケーション受付子エージェントと面接準備連携エージェントを構築し、メインの採用エージェントの能力を拡張する方法を学びました。

今回の任務は、**Operation Signal Point**です。**イベントトリガー**を深く掘り下げ、エージェントシステムを反応型から**自律的な操作**へと進化させます。エージェントを人間の入力を待つだけでなく、外部イベントに積極的に反応し、監督なしで知的な行動を取るように変革します。

質問に答えるエージェントから、ニーズを予測し独立して行動するエージェントへのアップグレードと考えてください。イベントトリガーと自動化されたワークフローを通じて、採用エージェントは受信した履歴書メールを検出し、添付ファイルを自動的に処理し、Dataverseにデータを保存し、Microsoft Teamsを通じてHR採用チームに通知します。その間、あなたはより価値の高いタスクに集中できます。

ここは、オートメーションとインテリジェンスが融合する世界です。

## 🔎 目標

このミッションでは以下を学びます:

1. イベントトリガーがユーザーの操作なしで自律的なエージェントの動作を可能にする方法
1. Copilot Studioにおけるインタラクティブエージェントと自律エージェントの違い
1. メール添付ファイルを自動的に処理し、Dataverseにファイルをアップロードするイベントトリガーの作成方法
1. Teamsチャンネルに通知を投稿する適応型カードを構築するエージェントフローの作成方法
1. イベントトリガーとエージェントフロー間でデータを渡し、エンドツーエンドの自動化を実現する方法

## 🤔 イベントトリガーとは？

以前[Recruit](../../recruit/10-add-event-triggers/README.md)でイベントトリガーについて学びました。もし見逃していた場合のために、簡単に復習しましょう。

**イベントトリガー**は、エージェントが他のシステムで何かが起きたときに自動的に動作することを可能にします。ユーザーからのメッセージは必要ありません。設定されたイベントが発生すると、例えば「新しいSharePointアイテム」、「新しいメール」、「Plannerタスクの割り当て」、または時間ベースの繰り返しなど、コネクタがトリガーペイロードをエージェントに送信します。その後、エージェントは指示に従い、どのアクションやトピックを呼び出すかを決定します。

### 主な特徴

- **自律的な起動:**
      - ユーザーがエージェントにメッセージを送信することで開始されるトピックトリガーとは異なり、イベントトリガーは外部イベントから起動し、積極的な動作を可能にします。

- **ペイロード駆動型:**
      - 各イベントはコネクタを通じてペイロード（変数 + オプションの指示）をエージェントに送信します。エージェントは定義された指示とペイロードを使用して次に何をするかを決定します。
      - 例えば、_トピックを呼び出す_ または _ツールで定義されたアクションを実行する_。

- **標準的な例:**
      - SharePoint/OneDriveでファイルやアイテムが作成された場合
      - Plannerタスクが完了/割り当てられた場合
      - Microsoft Formsの回答が送信された場合
      - 繰り返し/スケジュール

    利用可能性は、Power Automateで設定された組織のデータポリシーに依存します。

- **生成的オーケストレーションが必要:**
      - イベントトリガーは、エージェントに生成的オーケストレーションが有効になっている場合にのみ利用可能です。

- **課金/使用量:**
      - 各トリガーの配信は、Copilot Studioの容量に対するメッセージとしてカウントされます。
      - 例えば、10分間隔の繰り返しは10分ごとにメッセージを送信します。

- **認証モデルと設定:**
      - トリガーはエージェントの概要タブ内の_トリガー_で追加します。トリガーコネクタの認証はエージェント作成者のアカウント（「エージェント作成者認証」）を使用します。
      - Power Automate作成者ポータルでトリガーのパラメータとペイロードを編集できます。

- **テストと観測性:**
      - エージェントのテストペインからトリガーをテストし、公開前に動作をアクティビティマップで確認できます。

!!! info "開発者向け要約"

    イベントトリガーは、エージェントに構造化されたペイロードをプッシュし、ユーザーが要求するのを待たずに作業を開始し、システム間でアクションを連鎖させる**Webhookのような信号**と考えてください。

### トピックトリガー - 違いについて

以前[Recruit](../../recruit/07-add-new-topic-with-trigger/README.md)でトピックトリガーについて学びましたが、トピックトリガーとイベントトリガーの違い、そしてその違いがエージェントを自律的にする理解においてなぜ重要なのかについて、まだ疑問があるかもしれません。

トピックトリガーは通常、ユーザーのメッセージに応答してトピックが実行されるタイミングを制御します。

- 生成的オーケストレーションでは、デフォルトのトリガーは**エージェントによる**であり、プランナーはユーザーのメッセージに最も一致するトピックの名前/説明を選択します。
- クラシックオーケストレーションでは、デフォルトは**フレーズ**であり、プランナーはトリガーフレーズがユーザーのメッセージに最も一致する場合にトピックを選択します。

その他のトリガータイプには、`メッセージ受信`、`イベント受信`、`アクティビティ受信`、`会話更新`、`呼び出し受信`、`リダイレクト時`、`非アクティブ`、`プラン完了`などがあります。

!!! info "核心的な違い"

    トピックトリガーはチャット内での_会話アクティビティ_の開始者です。
    
    イベントトリガーはコネクタを介して配信されるシステムの_イベント_の開始者であり、会話なしでエージェントを実行できます。

### トピックトリガーとイベントトリガーの簡易ガイド

- **トピックトリガー:** ユーザー（またはチャットアクティビティ）がXを言った/行った ➡️ トピックTを実行。
- **イベントトリガー:** SharePoint/Planner/メール/タイマーがペイロードPを発火 ➡️ エージェントが指示を評価 ➡️ アクション/トピックを適切に呼び出す。

## 🏓 インタラクティブエージェント vs 自律エージェント - 比較

イベントトリガーとトピックトリガーの違いを理解したところで、次にインタラクティブエージェントと自律エージェントの違いについて学びましょう。

Copilot Studioの用語では、「インタラクティブ」は主にチャットやチャンネルで**トピック**を通じてやり取りするエージェントを指します。「自律的」は**イベントトリガー**を活用してユーザー入力なしで動作するエージェントを指します。

以下の表はその違いと類似点をまとめたものです。

| 次元                                 | インタラクティブエージェント | 自律エージェント                                                                                              |
|-------------------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------|
| 開始方法                             | ユーザー（またはチャットアクティビティ）がトピックをトリガー。例: エージェントによる、フレーズ、メッセージ受信。 | 外部イベントトリガーがコネクタを介してペイロードをエージェントに送信。例: SharePoint、Planner、メール、スケジュールなど。 |
| 主な用途                             | Q&A、ガイド付きワークフロー、チャット内でのリクエスト駆動型アクション - Teams、Webなど。 | システム変更に反応し、通知、ファイル、またはタスクのオーケストレーションを行う積極的な操作とバックグラウンド自動化。 |
| トリガーの範囲                       | トピックトリガー: エージェントによる / フレーズ / メッセージ受信 / アクティビティタイプ / 呼び出し / 非アクティブ / プラン完了 | コネクタを介したイベントトリガーライブラリ; ペイロードにはイベントデータ + オプションの指示が含まれる。 |
| プランナー（生成的オーケストレーション） | エージェントによるトリガーやプラン完了トリガーでトピックを選択/シーケンスするために強く活用される。 | イベントトリガーに必要; エージェントは指示 + ペイロードを使用して、どのアクション/トピックを呼び出すかを決定する。 |
| 典型的な例                           | ユーザーが「返金ポリシーは何ですか？」と尋ねる → トピックが実行され、知識をクエリし、応答する。 | 新しいPlannerタスクが割り当てられる → イベントトリガーが発火 → エージェントがTeamsメッセージを投稿し、レコードを更新するか、トピックを呼び出す。 |
| 設定方法                             | トピックを作成し、トリガータイプを定義し、ダイアログ/アクションを作成; チャンネルに公開。 | イベントトリガーを追加（概要 → トリガー）、エージェント作成者の資格情報でコネクタを認証、ペイロード/指示を設定; テストペインでテスト; 公開。 |
| 認証とガバナンス                     | チャンネル/認証コンテキストで実行; トピックトリガーは許可されたチャンネル内のチャットアクティビティに応答。 | トリガーの利用可能性はPower Automateのデータポリシーに依存; コネクタはエージェント作成者のアカウントで実行。 |
| 観測性                               | Copilot Studio内でトピックをテストし、会話のトランスクリプト/アクティビティを確認。 | トリガーのテストとアクティビティマップを使用して公開前に実行を検証し、公開後のアクティビティを監視。 |
| 容量への影響                         | 各ユーザーメッセージ/エージェント応答は容量を消費するメッセージ。 | 各イベント配信もメッセージであり、その後のアクションも含む。例: 10分間隔の繰り返し = 1時間あたり6メッセージ |

### どちらを使うべきか？

- ユーザーがエージェントとの会話を開始する場合（FAQ、ガイド付き受付、チャット内のコマンド型タスクなど）は、**トピックトリガー（インタラクティブ）**を選択してください。プランナーのエージェントによるトリガーは手動のフレーズ作成を減らします。
- エージェントが会話を開始したり、SharePoint/Dataverseの更新、受信メール、またはスケジュールに基づいて自動的に行動を起こす必要がある場合は、**イベントトリガー（自律的）**を追加してください。これにより、反応型から積極的な操作に移行できます。

## 開発者向けのヒントと注意点

1. **生成的オーケストレーションを有効にする** 自律的なエージェントを作成したい場合は必須です。生成的オーケストレーションが有効でない場合、イベントトリガーは表示されません。

1. **ペイロードを早期にモデル化する。** トリガーからエージェントが必要とする最小限のフィールド（例: `itemId`、`assignedTo`、`dueDate`）を決定し、ペイロード値に基づいてエージェントがどのアクション/トピックを呼び出すべきかを指示する簡潔な指示を追加します。

1. **認証スコープに注意する。** トリガーはエージェント作成者のアカウントを使用して認証します。そのアカウントが適切なコネクタ権限を持ち、Power Automateのデータポリシーに準拠していることを確認してください。

1. **コストとノイズを制御する。** 高頻度の繰り返しや非常にチャットが多いソースは、メッセージ消費を急速に増加させる可能性があります。可能であればスロットリングを行うか、トリガーに条件を追加してイベントをフィルタリングしてください。

1. **公開前にテストする。** **トリガーテスト**とアクティビティマップを使用してプランと呼び出されたアクションを確認し、動作が安定するまで指示/ペイロードを繰り返し調整してください。

## 🧪 ラボ03 - 候補者の応募メールを自動化

次に、**採用エージェント**にイベントトリガーを追加し、子エージェントである**アプリケーション受付エージェント**にエージェントフローを構築して、自律的な処理を行います。

### ✨ ユースケースシナリオ

!!! info ""

    **HR採用担当者として**

    **応募者から履歴書が添付されたメールが受信され、Dataverseに自動的にアップロードされたことを通知されたい**

    **その結果、メールで送信された履歴書がDataverseに自動的にアップロードされたことを把握できるようにしたい**

これを以下の2つの技術を使用して実現します。

1. メールが届いたときのイベントトリガーを設定します。
    1. ファイルの`contentType`が`PDF`形式であることを確認します。
    1. ファイルを抽出し、Dataverseにアップロードします（Dataverseコネクタを使用）。
    1. その後、Dataverseアクションからの入力パラメータを渡してエージェントにプロンプトを送信し、さらに処理を進めます。

1. 子エージェントである**アプリケーション受付エージェント**にエージェントフローを追加します。このフローはイベントトリガーのプロンプトによって呼び出されます。
    1. イベントトリガーのプロンプトから渡された入力パラメータを使用して、Microsoft Teamsのチャンネルに適応型カードを投稿し、HR採用チームに通知します。適応型カードにはDataverseの行へのリンクが含まれ、**採用エージェント**で表示されます。

では始めましょう！

### ✨ このミッションを完了するための前提条件

以下のいずれかが必要です:

- **ミッション01とミッション02を完了している**こと、または採用エージェントが準備されていること、**または**
- **ミ
これからイベントトリガーを更新し、さらに自動化機能を追加していきます。トリガーの**省略記号 (...)**を選択し、**Power Automateで編集**を選択してください。

![Power Automateで編集を選択](../../../../../translated_images/3.1_05_SelectEditInPowerAutomate.d298b51d7980cf2fd20a9d8193745aef4ce8097a4a2d33341e2dc159b9bfc099.ja.png)

1. トリガーはPower Automateの作成ポータルでフローとして読み込まれます。これがPower Automateの作成ポータル内のフローデザイナーです。ここでさらにロジックやアクションを追加して自動化を強化できます。トリガーはフローの最上部に表示され、最後のアクションとして**指定されたコパイロットにプロンプトを送信して処理**が続きます。

![Power Automate作成ポータルのフローデザイナー](../../../../../translated_images/3.1_06_EditInPowerAutomate.f8967ace56354224574517f31a2a2ce0a5b5d3ab85bfb9ec6cf70e83ab1b8e6d.ja.png)

1. デフォルトでは、Power Automateの**新しいメールが届いたとき**トリガーは、複数のメールが一度に届いた場合にそれらをまとめて処理し、フローを一度だけ実行することがあります。

   フローが各メールごとに個別に実行されるようにするには、トリガーの設定で**Split On**設定を有効にし、ドロップダウンの配列フィールドで`@triggerOutputs()?['body/value']`を選択してください。

   **Split On**をオンにして配列フィールドを`@triggerOutputs()?['body/value']`に設定すると、多くのメールが同時に届いても、フローは各メッセージごとに個別に実行されます。

![トリガーでSplit On設定をオンにする](../../../../../translated_images/3.1_07_UpdateTriggerSettings.0f363c4f4655276732575fa795bf1ad1568df34d34b703c85073591cc8585609.ja.png)

1. 次に、添付ファイルのファイルタイプを確認するロジックを追加します。アップロードしたいのはPDFファイルの添付ファイルのみで、画像は除外します（これらはメール署名から来る可能性があります）。トリガーの下にある**+**アイコンを選択し、**組み込みツール**セクションの**コントロール**を選択してください。

![コントロールを選択](../../../../../translated_images/3.1_08_Control.2fa6987b64ae20d5c8343d1b15937432ab6c893750c4b1427df56067023fd437.ja.png)

1. **条件**アクションを選択してください。

![条件アクションを選択](../../../../../translated_images/3.1_09_AddConditionAction.a7eec0b2a42d4a7c54bd305f0c480b72e3feec155a4e2468e12279082257f21f.ja.png)

1. 次に、添付ファイルのタイプがPDFであるかどうかを確認する条件を設定します。**値を選択**フィールドで、右側の**稲妻アイコン**または**fxアイコン**を選択してください。

   1. **検索**フィールドに以下を入力します。

      ```text
      content type
      ```

   1. 次に、トリガーから**Attachments Content-Type**パラメータを選択します。

   1. 次に、**Id**パラメータに動的コンテンツ入力を追加するために**追加**を選択します。

![条件アクションを設定](../../../../../translated_images/3.1_10_SetDynamicContentValue_V2.23c3d0438146a5ff0d695077e65a3b1c8b230b54c51ded8a099c6e99a948e9ed.ja.png)

1. ここで一旦停止してみましょう。おそらく**For each**アクションが自動的に表示されたことに気づいたでしょう。

   **For each**アクションを選択してください。このアクションは、トリガーの**Attachments Content-Type**パラメータが各添付ファイルに関連付けられているため、メール内の各添付ファイルをループ処理することを表しています。

   内部的には配列であり、トリガーの**Attachments Content-Type**パラメータを**条件**アクションで選択した際に**For each**アクションが自動的に追加されました。

   これについて詳しく知りたい場合は、以下の追加学習ブロックを展開してください。

??? info "追加学習: For eachアクションが自動的に表示される理由"

    🤔 **なぜ「Apply to each」または「For each」が自動的に表示されるのか？**
    
    リストや配列のアイテムを表すパラメータ（動的コンテンツ）を選択すると、Power Automateは各アイテムを個別に処理する必要があると認識します。
    
    これを支援するために、Power Automateはアクションの周りに**“Apply to each”**（または**For each**）ループを自動的に追加します。これにより、リスト全体を一度に処理しようとしてエラーが発生するのを防ぎ、リスト内の各アイテムに対してアクションが1回ずつ実行されることが保証されます。

    🦋 **例**
    
    - 以前のアクションから「Attachments」（配列）を選択し、単一のファイルを期待するアクションで使用しようとすると、Power Automateはそのアクションを**"Apply to each"**（または**For each**）ループで囲みます。
    - これにより、アクションは**各添付ファイル**に対して1回ずつ実行されます。
       
    💡 **重要なポイント**
    
    - **自動的:** ループは、コレクション内の各アイテムを処理するのを助けるために自動的に表示されます。
    - **エラー防止:** ループがないと、アクションが複数のアイテムを一度に処理できず、失敗する可能性があります。
    - **視覚的な手がかり:** フローがリスト内の各アイテムに対してアクションを繰り返すことを視覚的に示します。

![For Eachアクションの説明](../../../../../translated_images/3.1_11_ForEach.82bd7b62b815fdbcd67acff0a633137cf03175940c670361ea8669b0df892927.ja.png)

1. 次に、もう一方の**値を選択**フィールドに以下を入力してください。

   ```text
   application/pdf
   ```

   これにより、各添付ファイルについて、ファイル拡張子の形式がPDFであるかどうかを確認します。

![EqualToValue](../../../../../translated_images/3.1_12_EqualToValue.66c107cb8105c1cd3d166b8a5bf690b8dfc30aa2bd2af83c438a9e44d1b544b0.ja.png)

1. 次に、**True**パスを設定して、メールからファイルを抽出し、**Resume** Dataverseテーブルにアップロードします。

   **True**パスの下に新しいアクションを追加し、`html to text`を検索してください。**Html to text**アクションを選択します。

   **Html to text**アクションについて詳しく知りたい場合は、以下の追加学習ブロックを展開してください。

??? info "追加学習: Html to textアクション"

    🤔 **"HTML to text"アクションとは？**
    
    Power Automateの**HTML to text**アクションは、HTML形式のコンテンツをプレーンテキストに変換するために使用されます。これは、HTMLタグを含むデータ（メール、ウェブコンテンツ、APIレスポンスなど）を受け取り、フォーマットやコードを除去して読みやすいテキストのみを抽出したい場合に特に役立ちます。

    ⚙️ **動作の仕組み**
    
    - **入力:** HTMLコンテンツの文字列を提供します（例: メールの本文）。
    - **出力:** アクションはすべてのHTMLタグを削除し、プレーンテキストのみを返します。
    
    👍🏻 **使用する場面**
    
    - HTMLタグを含むメール、ウェブページ、APIレスポンスから読みやすいテキストを抽出したい場合。
    - HTMLフォーマットをサポートしないシステム（SMS、Teamsメッセージ、データベースなど）にコンテンツを送信する前。
    - データをクリーンアップして、さらなる処理や分析の準備をする際。
    
    🔭 **どこで見つけるか**
    
    - Power AutomateのAgent Flowsで、`HTML to text`というアクションを検索してください。これは**Data Operations**コネクタの下にあります。
       
    💡 **重要なポイント**
    
    - すべてのHTMLタグを削除し、テキストのみを残します。
    - スクリプトやスタイルを解釈または実行しません - タグを削除するだけです。
    - データのクリーンアップやプレーンテキスト出力の準備に便利です。

![Html to textアクションを追加](../../../../../translated_images/3.1_13_AddHTMLToTextAction.2aa9468b87dbeb847c083f24da0fe99438b39f826b13a70982ec255a97c2aa80.ja.png)

1. 次に、**Html to text**アクションの新しい接続参照を作成するために**新規追加**を選択してください。

![新しい接続参照を追加](../../../../../translated_images/3.1_14_AddNewConnection.4a23546976b62e7f0e882ac1379950e5bfdcaa702070313cb84a1d22b06a79a7.ja.png)

1. アクションを設定できるようになります。トリガーから**Body**パラメータを追加します。**Content**フィールドで、右側の**稲妻アイコン**または**fxアイコン**を選択してください。

![動的コンテンツを追加](../../../../../translated_images/3.1_15_AddDynamicContent.0624a9808f55b993efb6d00bf941a88389655e2ab9970ba2b9a1538272fe9643.ja.png)

1. **動的コンテンツ**タブで`body`を検索し、トリガーから**Body**パラメータを選択して**追加**を選択してください。

![Bodyパラメータを追加](../../../../../translated_images/3.1_16_AddDynamicContent.40b7eccc080c20513eed5663062b2a63d40d6482eaf2d42fe4e29cb94797f098.ja.png)

1. このアクションの設定が完了したので、左向きの二重山括弧（«）を選択してパネルを折りたたんでください。

![アクションパネルを折りたたむ](../../../../../translated_images/3.1_17_CollapseAction.ca2c346efb58f8240372c3d145fa10ba609cab1c2075d7df1a9388c82fab79f5.ja.png)

1. **Html to text**アクションの下にある**+アイコン**を選択して新しいアクションを追加します。これにより、アクションを追加するためのパネルが表示されます。**Microsoft Dataverse**コネクタを選択してください。

![新しいアクションを追加](../../../../../translated_images/3.1_18_AddDataverseAction.5f4be9eb96e22dac239e5545bab5ad9d08b138c2cbcbc700680f33445e132506.ja.png)

1. **新しい行を追加**アクションを選択してください。

![新しい行を追加アクションを選択](../../../../../translated_images/3.1_19_AddANewRow.48e0a3868821e59ed2a299ccb6a521af27b2430082381d48be38087be62c7c15.ja.png)

1. **省略記号 (...)**を選択してアクションの名前を変更し、以下を名前としてコピー＆ペーストしてください。

   ```text
   Add a new Resume row
   ```

   **テーブル名**パラメータでは`res`を検索し、**Resumes**テーブルを選択してください。

![アクションの名前を変更し、テーブル名パラメータを設定](../../../../../translated_images/3.1_20_RenameAndSelectResumesTable.89f8485653abb7fda1d6eb44210951f05a05ed6f7450a51895079dfd8e72c8bf.ja.png)

1. 次に**Resume Title**フィールドを選択し、右側の**稲妻アイコン**または**fxアイコン**を選択してください。

![Resume Titleパラメータを設定](../../../../../translated_images/3.1_21_AddDynamicContent.9ee1f89420d5a4aa56797944166208f6e9b0ec67116625168fbcefb907850224.ja.png)

1. **関数タブ**で、以下の`item()`関数を使用した式を入力してください。

   ```text
   item()?['name']
   ```

   `item()`関数について詳しく知りたい場合は、以下の追加学習ブロックを展開してください。

??? info "追加学習: `item()`関数"

    🤔 **`item()`関数とは？**
    
    - **Apply to each**アクションを使用すると、Power Automateはコレクション（配列）の各要素を順番に処理します。
    - 主に**Apply to each**（または**For each**）、**Select**、**Filter array**などのアクション内で使用されます。

    ⚙️ **動作の仕組み**
    
    - `item()`は、ループや配列操作で処理されている現在のアイテムを返す関数です。
    - そのループ内では、`item()`は処理中の_現在の要素_を指します。
    
    📌 **使用する場面**
    
    - **Apply to each:** 現在処理中のアイテムのプロパティにアクセスする際。
    - **Select:** 配列内の各アイテムを変換する際。
    - **Filter array:** 評価されている現在のアイテムを参照する際。

    🦋 **例**
    
    - ループ内の式:
           -  `item()?['Email']`
    - 現在のアイテムの`Email`プロパティを取得します。
       
    💡 **重要なポイント**
    
    - `item()`は_コンテキスト依存_: 常にループや配列操作内で現在のアイテムを指します。
    - ループがネストされている場合、特定のループ内のアイテムを参照するには`items('LoopName')`を使用できます。

   **Resume Title**パラメータに式を追加するために**追加**を選択してください。

![Resume Titleパラメータの式を追加](../../../../../translated_images/3.1_22_ResumeTitleParameter.9e4fa71a5251cb899e7b09bcc3052eeda1e512841f929118eb9e2b1d232ecb07.ja.png)

1. まだいくつかのパラメータを設定する必要があります。**すべて表示**を選択し、**Cover Letter**フィールドで右側の**稲妻アイコン**または**fxアイコン**を選択してください。

   **関数タブ**で、前の[ミッション](../02-multi-agent/README.md)で使用したのと同じ式を入力してください。

   ```text
   if(greater(length(body('Html_to_text')), 2000), substring(body('Html_to_text'), 0, 2000), body('Html_to_text'))
   ```

   この式は、**Html to text**アクションからのテキストが2000文字を超える場合は最初の2000文字のみを返し、そうでない場合は全文を返します。

![Cover Letterパラメータの式を追加](../../../../../translated_images/3.1_23_CoverLetterParameter.d2b521d6b37d05ac4760c91de2964b6d062585a333af6989d9ac0794a4139463.ja.png)

1. この式が**Cover Letter**フィールドに追加されます。

![Cover Letterパラメータに追加された式](../../../../../translated_images/3.1_24_ExpressionForCoverLetter.3d18124b10b76bad92db61c529ae395b0bb05f3215e3b783771e76ef7677664e.ja.png)

1. **Source Email Address**フィールドでは、`from`を検索し、トリガーから**From**パラメータを選択してください。このパラメータにはメールアドレスの値が含まれています。

![Source Email Addressパラメータ](../../../../../translated_images/3.1_25_FromParameter.1ed1be46711f6705fb807996f6f1e873adc22e285186a851272e0cf3855487ef.ja.png)

1. **Upload Date**フィールドでは、右側の**稲妻アイコン**または**fxアイコン**を選択してください。**関数タブ**で、以下の`utcNow()`関数を使用した式を入力してください。

   ```text
   utcNow()
   ```

   `utcNow`関数について詳しく知りたい場合は、以下の追加学習ブロックを展開してください。

??? info "追加学習: `utcNow`関数"

    🤔 **`utcNow()`関数とは？**
    
    - Power Automateの`utcNow()`関数は、現在の日時を協定世界時（UTC）でISO 8601形式で返します。例: `2025-09-23T04:32:14Z`
    
    🦋 **例**
    
    - 式:
           -  `concat('Report generated on ', utcnow())`
    - 出力:
           - Report generated on `2025-09-23T04:32:14Z`
       
    💡 **重要なポイント**
    

- **引数（入力パラメータ）は不要です:** 常に現在のUTCタイムスタンプを返します。
  - **使用例**
    - ログやファイル名にタイムスタンプを追加する
    - 現在の時間を他の日付と比較する
    - スケジュールや時間ベースの条件設定

![アップロード日付パラメータ](../../../../../translated_images/3.1_26_UploadDateParameter.21b0afc9807bf680c1c432066f1644d4d018cb4988ad0c0788b5186cea285e02.ja.png)

1. **新しい履歴書の行を追加**アクションの設定が完了したので、パネルを折りたたんで終了します。

![アクションパネルを閉じる](../../../../../translated_images/3.1_27_CollapseAction.c033a86e4d8501b10fc454ba7f9c5e08d71d6d881fc72f58011152e1c5d7a7bb.ja.png)

1. **新しい履歴書の行を追加**アクションの下にある**+アイコン**を選択して新しいアクションを追加します。これによりアクションを追加するためのパネルが読み込まれます。再度**Microsoft Dataverse**コネクタを選択します。

![Dataverseアクションを追加](../../../../../translated_images/3.1_28_AddDataverseAction.1af4dedc95001bfb56b0a642231e9c82b57459b10c68bf6fc177382339a0a221.ja.png)

1. **ファイルまたは画像をアップロード**アクションを選択します。

![ファイルまたは画像をアップロードアクションを追加](../../../../../translated_images/3.1_29_AddUploadAFileOrAnImage.e40ab21b735e37bd1fdb5020b7433d1a2f01d6e387bc43a437e970c6e20ee779.ja.png)

1. **省略記号（...）**を選択してアクションの名前を変更します。以下の名前をコピーして貼り付けます。

```text
Upload Resume File
```

![アクションの名前を変更](../../../../../translated_images/3.1_30_RenameAction.c316fdf225f88e5c3ee26649e672472829c3372c804b544a1372b0455937c204.ja.png)

1. 次に**コンテンツ名**フィールドを選択し、右側の**稲妻アイコン**または**fxアイコン**を選択します。

   **関数タブ**で、以下の式を入力します。この式は`item()`関数を使用して、現在のアイテム（添付ファイル）の`name`プロパティを取得します。

```text
item()?['name']
```

![コンテンツ名パラメータを設定](../../../../../translated_images/3.1_31_ContentNameParameter.c6606773f1e82dbcea93d7c2f52dff7a2168f9f04d6b865f699f56d62a41d4ec.ja.png)

1. **テーブル名**パラメータでは、`res`を検索し、**Resumes**テーブルを選択します。

![テーブル名パラメータを設定](../../../../../translated_images/3.1_32_SelectResumesTable.6a00bf6d585002219003da47f6e1042dc67cbdb3fbaf7d959253550035e27520.ja.png)

1. 次に**行ID**フィールドを選択し、右側の**稲妻アイコン**または**fxアイコン**を選択します。

   `ID`を検索し、_新しい行を追加_ Dataverseアクションから**Resume**パラメータを選択します。このパラメータにはPDFファイルをアップロードする行のID値が含まれています。

   **追加**を選択します。

![行IDを選択](../../../../../translated_images/3.1_33_RowIDParameter.9824c6b5ea5edf0ce018140c20431a97c2e750d61bcb787f67da260acb6a3838.ja.png)

1. **列名**フィールドを選択し、**Resume PDF**オプションを選択します。

![列名パラメータを設定](../../../../../translated_images/3.1_34_ColumnNameParameter.ef4f770cbd84cae5c15cfe06d1bdbe028d0c6d54a2286dab30769fa01c948b71.ja.png)

1. **コンテンツ**フィールドを選択し、右側の**稲妻アイコン**または**fxアイコン**を選択します。

   **関数タブ**で、以下の式を入力します。この式は`item()`関数を使用して、現在のアイテム（添付ファイル）の`contentBytes`プロパティを取得します。`contentBytes`は、Base64文字列としてエンコードされたファイルまたは添付ファイルの生のバイナリデータを指します。

```text
item()?['contentBytes']
```

1. このアクションの設定が完了したので、左向きの二重山括弧（«）を選択してパネルを折りたたみ、アクションを終了します。

![アクションパネルを閉じる](../../../../../translated_images/3.1_36_CollapseAction.1813a7219f0f37b87f80c2cd9f5a9626c3a320858d08a0e62cf14736f97db4c6.ja.png)

1. 次に、**指定されたコパイロットにプロンプトを送信して処理を行う**を選択し、このアクションを条件の_True_パス内の**Upload Resume File**アクションの下にドラッグ＆ドロップします。

![Trueパスにアクションをドラッグ＆ドロップ](../../../../../translated_images/3.1_37_DragAndDropAction.57dc2e9f9d25ed892a4fc072a72c55eca6c38e313ab48fb9db37e9371995440f.ja.png)

1. **指定されたコパイロットにプロンプトを送信して処理を行う**を選択して設定します。

![アクションを選択](../../../../../translated_images/3.1_38_SelectAction.d125bdf661f66b6397542c75efbc6a78b8c4862e03dce4002776c251f1c48382.ja.png)

1. **本文/メッセージ**フィールドで、すべてのフィールド内容を選択してクリア/削除します。

![本文パラメータをクリア](../../../../../translated_images/3.1_39_ClearBodyParameter.6a345b2e5dbe5510184d7bae7cd406b8cec72c714f34bb40e30741e445a491c0.ja.png)

1. 以下のテキストを**本文/メッセージ**フィールドにコピーして貼り付け、`RESUME ID PLACEHOLDER`をハイライトします。

```text
Send [ResumeId (text)] = "RESUME ID PLACEHOLDER" and [ResumeTitle (text_1)] = "RESUME TITLE PLACEHOLDER" and [ResumeNumber (text_2)]= "RESUME NUMBER PLACEHOLDER" to the Tool "Notify Teams Applicant channel" in the child agent "Application Intake Agent"
```

![Resume IDプレースホルダーのテキストを置き換える](../../../../../translated_images/3.1_40_ReplaceResumeIDPlaceholder.eb61590503cb37d89121aaed6d979a4272aa30c87700206e04db8005e60b294f.ja.png)

1. 右側の**稲妻アイコン**または**fxアイコン**を選択します。

   `resume`を検索し、_新しい行を追加Dataverse_アクションから**Resume**パラメータを選択します。このパラメータには作成された履歴書行の`ID`値が含まれています。

   **追加**を選択します。

![Resumeパラメータを選択](../../../../../translated_images/3.1_41_SelectResumeParameter.61c4457c33e5d1b596169857535bfc560ef677264f8798e9148ceac999eeaeb9.ja.png)

1. `RESUME TITLE PLACEHOLDER`をハイライトします。右側の**稲妻アイコン**または**fxアイコン**を選択します。

   `title`を検索し、_新しい行を追加Dataverse_アクションから**Resume Title**パラメータを選択します。このパラメータには作成された履歴書行の`resume title`値が含まれています。

   **追加**を選択します。

![Resumeパラメータを選択](../../../../../translated_images/3.1_42_SelectResumeTitleParameter.6c887607128f928da15c4cf6c22254d0473bc22514aa883462fd812bf14245e0.ja.png)

1. `RESUME NUMBER PLACEHOLDER`をハイライトします。右側の**稲妻アイコン**または**fxアイコン**を選択します。

   `resume number`を検索し、_新しい行を追加Dataverse_アクションから**Resume Number**パラメータを選択します。このパラメータには作成された履歴書行の`Resume Number`値が含まれています。

   **追加**を選択します。

![Resumeパラメータを選択](../../../../../translated_images/3.1_43_SelectResumeNumberParameter.ca19197525250483a7e94598b621072b47ebdf5deb939e1387c979e807ddc554.ja.png)

1. このアクションの設定が完了し、エージェントフローが完成しました🙌🏻 素晴らしいですね！次に、**下書きを保存**を選択してイベントトリガーフローを保存しましょう。

![下書きを保存](../../../../../translated_images/3.1_44_SaveDraft.0c9eee19f0c7cb8483b8d31bc17e1dd54075352d22f0f44603a9d52b52429188.ja.png)

1. 次にエージェントフローの詳細を編集する必要があります。**戻る**を選択します。

![戻るを選択](../../../../../translated_images/3.1_45_Back.3f85535977bdb02231a0fdb8465e0e8b7d86fd5342ff933e4ae8bf9610279989.ja.png)

1. **詳細**セクションで**編集**を選択し、**プラン**を**Copilot Studio**オプションに更新します。

   **保存**を選択します。

![Copilot Studioプランを変更](../../../../../translated_images/3.1_46_ChangePlanDetails.6ab15f1f8bd9ebe55b2c1576c3495f47d1a29d7435e343d4c590e46647601269.ja.png)

1. Copilot Studioプランに切り替えることを確認するモーダルが表示されます。**確認**を選択します。

![Copilot Studioプラン変更を確認](../../../../../translated_images/3.1_47_ConfirmCopilotStudioPlan.bc6ab52e7c982127154b0fb743f85ff9cc05dcab944dffc9485bdbcbe0811397.ja.png)

1. プランが**Copilot Studio**に更新されました。イベントトリガーフローを公開するために**編集**を選択します。

![フローを編集](../../../../../translated_images/3.1_48_PlanChangedAndEdit.3c3207766a648817f7a7878c3a6f684cf41cdceea4dca8f6fc43b7315c8dd648.ja.png)

1. **公開**を選択します。

![公開](../../../../../translated_images/3.1_49_Publish.38ff814cfce6b3be1076cafb0c28e4e344f75d8cd4117fabed13ad361d4fde3f.ja.png)

   やった！イベントトリガーフローが公開されました😃

![公開済み](../../../../../translated_images/3.1_50_Published.449e7867f7b027ae8a524c749357a1b931955062828bacc3b5a51e979755ef4a.ja.png)

次に、子エージェント**Application Intake Agent**によって呼び出される新しいエージェントフローを作成します。

### Lab 3.2 - アダプティブカードを使用してTeamsチャンネルに通知する

次に、イベントトリガーで渡された値を使用して、アダプティブカードをTeamsチャンネルに投稿する子エージェント**Application Intake Agent**の新しいエージェントフローを作成します。このアダプティブカードは、HR採用チームに自動的にアップロードされたPDFについて通知し、レビューできるようにします。

始めましょう！

1. **Hiring Agent**で**Agents**タブを選択し、**Application Intake Agent**を選択します。

![Application Intake Agentを選択](../../../../../translated_images/3.2_01_SelectApplicationIntakeAgent.0e9dd3da5c52e9f59ab3a4545c01897ad830853b650ec42f7f8424aa530e0409.ja.png)

1. **ツール**までスクロールし、**+追加**を選択します。

![ツールを追加](../../../../../translated_images/3.2_02_AddNewTool.7c62275fd9f28cdc1923ea056a148171048dc568ff78056958fd54862133f90e.ja.png)

1. **ツールを追加**モーダルが表示されます。**+新しいツール**を選択します。

![新しいツールを選択](../../../../../translated_images/3.2_03_SelectNewTool.215e7637a9f065a3799a1ecf248eed1e859f201d2dfdfab71a7c1dc18e454e2d.ja.png)

1. **エージェントフロー**を選択します。

![エージェントフローを選択](../../../../../translated_images/3.2_04_SelectAgentFlow.7bc12b3435efccc0cfee8f563640562f87d173b436b3313a3d1256fe35024907.ja.png)

1. 次に**エージェントフローデザイナー**が読み込まれます。**エージェントがフローを呼び出したとき**トリガーで、**+入力を追加**を選択します。

![入力を追加を選択](../../../../../translated_images/3.2_05_SelectAddAnInput.f3dc8465f490929baccb0f2dc72b50629b1435ff8a3861f7974885d1d36cdeb1.ja.png)

1. ユーザー入力のタイプとして**テキスト**を選択します。

![テキストを選択](../../../../../translated_images/3.2_06_SelectText.93585b4af8c4e277c11c2052b638e249508a24a075987026a6ec346e75184217.ja.png)

1. 入力テキストフィールドに以下をコピーして貼り付け、入力パラメータ名として設定します。

```text
ResumeId
```

![ResumeId入力](../../../../../translated_images/3.2_07_ResumeIdInput.a9e127e343856d6c6d45dd1251cade0503bad9484bc563c02155390951b1faa5.ja.png)

1. 同じ手順を繰り返して2つ目のテキスト入力を追加します。以下をコピーして貼り付け、入力パラメータ名として設定します。

```text
ResumeTitle
```

![ResumeTitle入力](../../../../../translated_images/3.2_08_ResumeTitleInput.c71ecd364a974a93abb0de876807c2e9bde59fcea6df317babeb20764b636f26.ja.png)

1. 同じ手順を繰り返して3つ目のテキスト入力を追加します。以下をコピーして貼り付け、入力パラメータ名として設定します。

```text
ResumeNumber
```

![ResumeNumber入力](../../../../../translated_images/3.2_09_ResumeNumberInput.a6c060000354deab51dffef3c1ad9f13378cfeabdafdb7a33c2a591bfd044709.ja.png)

1. [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request)でエージェントのトピック内にアダプティブカードを追加したことを覚えていますか？今回は、エージェントフロー内にアダプティブカードを追加します。次に、エージェントフローに新しいアクションを追加し、Teamsチャンネルにアダプティブカードを投稿します。

   トリガーの下にある**+アイコン**を選択します。

![新しいアクションを追加](../../../../../translated_images/3.2_10_AddNewAction.4474a2150991cac246d5e4091a74ba91e76e1c5bafa34ad985a8567c09dcdd35.ja.png)

1. **チャットまたはチャンネルにカードを投稿**アクションを選択します。

![チャットまたはチャンネルにカードを投稿アクションを選択](../../../../../translated_images/3.2_11_SelectPostCardInAChatOrChannel.97de43ed1c883b14d0150ae65efaa90f53f0815bdf57ec10e0e22cbd3e22ce06.ja.png)

1. Microsoft Teamsへの接続参照をサインインして作成する必要があります。**サインイン**を選択します。

![サインインを選択](../../../../../translated_images/3.2_12_SignInToCreateConnectionReference.2297f8b702d71508f1b21a3ed4046df4846dc03b13932a20e5c445403559ac1f.ja.png)

1. ユーザーアカウントを選択し、**アクセスを許可**を選択します。

![アクセスを許可を選択](../../../../../translated_images/3.2_13_AllowAccess.31cbf82606d75231108bd4f2bfeafffda3cd7e7e760cd46004c2705afe050aaf.ja.png)

1. 以下の入力パラメータについて設定します。

   | パラメータ | 設定方法 | 詳細 |
   |----------|------------|---------|
   | **投稿者** | ドロップダウン | `Flow bot`オプションを選択 |
   | **投稿先** | ドロップダウン | `チャンネル`オプションを選択 |
   | **チーム** | ドロップダウン | このラボ演習を完了するためにアクセス可能な環境内のチームを選択 |
   | **チャンネル** | ドロップダウン | このラボ演習を完了するためにアクセス可能な環境内のチャンネルを選択 |

![入力パラメータを設定](../../../../../translated_images/3.2_14_ConfigureParameters.8c21924f90db3acaa33d4e35ef43c70556ba4cc37207a195ac654e55a43400a6.ja.png)

1. 次に**アダプティブカード**フィールドを設定します。**アダプティブカード**フィールドを選択します。

![アダプティブカードフィールドを選択](../../../../../translated_images/3.2_15_SelectAdaptiveCardParameter.65323056be6174d2eed7422650aaa70fc16396148f90b8af1801110d7a30d66f.ja.png)

1. [Resume Table Updated JSONファイル](../../../../../docs/operative-preview/03-automate-triggers/assets/3.2_ResumeTableUpdated.json)を開き、その内容をすべてコピーしてアダプティブカードフィールドに貼り付けます。

![JSONをコピーして貼り付け](../../../../../translated_images/3.2_16_JSON.f022097fb7139bd12514abb8fdc518309ea940f005cc94a11ba159359cde784b.ja.png)

1. [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request)で行ったように、JSONペイロード内の既存の値を実際の値や動的コンテンツに置き換えます。

   まず、`selectAction`プロパティ内の`url`プロパティのURLを更新します。このURLは、**Hiring Hub**モデル駆動型アプリの履歴書システムビューのURLに置き換えられます。これにより、採用担当者がアクションを選択し、モデル駆動型アプリの履歴書システムビューに移動できるようになります。

   現在のURL値をハイライトして削除します。

![URL値を選択](../../../../../translated_images/3.2_17_SystemViewURL.5e51fd894ac916f436107c7b668d66ca87ca8bdfd7affeb7dae1b10fa8ff5afb.ja.png)

1. **Hiring Hub**モデル駆動型アプリで、左側のメニューを使用して**Resumes**システムビューに移動し、URLをコピーします。その後、エージェントフローに戻り、コピーしたURLを`selectAction`プロパティ内の**url**プロパティに貼り付けます。

![ResumesシステムビューURLをコピー](../../../../../translated_images/3.2_18_CopyResumesSystemViewURL.14d9f55c7db15977a12dfe2a5df95aab5cf241e646b08f9838cff31aaa27a381.ja.png)
1. 次のような画面が表示されます。黄色でハイライトされている部分は、**Hiring Hub** モデル駆動型アプリの環境詳細です。

     | パラメータ | 値 | 説明 |
     |----------|------------|---------|
     | **Organization URI** | GUID | Dataverse/Dynamics 365 環境の組織 URL |
     | **appid** | GUID | 特定のモデル駆動型アプリを開くために、appid または appname のクエリパラメータが使用されます。この場合は appid が使用されます |
     | **viewid** | GUID | ビューの ID を示すクエリパラメータ |

       ![URLを貼り付け](../../../../../translated_images/3.2_19_PasteURL.41f3fdd66190c8ba478857f91c90eb05ee9621243bda7b7ad26eb5802b8e970d.ja.png)

1. 次に、いくつかのプロパティに動的コンテンツ値を追加します。まず、イベントトリガーによって自動的に作成された行の履歴書番号参照を表示するテキストを設定します。

      **パネル**アイコンを選択してアクションパネルを読み込みます。

       ![パネルアイコンを選択](../../../../../translated_images/3.2_20_SelectPannelIcon.786a4147ba12e0e62648c66f14fb2b9a7f89b27c3a610f43420e31cb0c9fb5da.ja.png)

1. `RESUME NUMBER PLACEHOLDER` の `text` プロパティが表示されている行までスクロールします。プレースホルダー値をハイライトして削除します。

       ![プレースホルダーを削除](../../../../../translated_images/3.2_21_DeleteResumeNumberPlaceholder.6ffd7a5a073f9d9a11e0e119c87e827243de237f70ebc3ab37dfdd36de615130.ja.png)

1. ダブルクォーテーションの間をクリックし、右側の **稲妻アイコン** または **fxアイコン** を選択します。

      **動的コンテンツ** タブで **ResumeNumber** パラメータを選択し、**追加** を選択します。

       ![ResumeNumber パラメータを追加](../../../../../translated_images/3.2_22_SelectResumeNumberParameter.de5a6eecb3ee092441d841ad137dfecd9f8d503a370ff60eb5ccdc0267e37df0.ja.png)

1. **ResumeNumber** パラメータが `text` プロパティに動的コンテンツとして追加されます。

       ![ResumeNumber 動的コンテンツ](../../../../../translated_images/3.2_23_ResumeNumberDynamicContent.129a566ac6e9d448b268b828da5766a7056779ac167f65b498e2ca21d703b7f0.ja.png)

1. 次に、`RESUME NAME PLACEHOLDER` の設定を同じ手順で行います。`RESUME NAME PLACEHOLDER` の `text` プロパティが表示されている行までスクロールし、プレースホルダー値をハイライトして削除します。

       ![履歴書名プレースホルダー](../../../../../translated_images/3.2_24_ResumeNamePlaceholder.6c879b99ae375892f7e0a511bfedd5fa9e60a8dea71ea2a44c2a7a04c8389f43.ja.png)

1. ダブルクォーテーションの間をクリックし、右側の **稲妻アイコン** または **fxアイコン** を選択します。

      **動的コンテンツ** タブで **ResumeTitle** パラメータを選択し、**追加** を選択します。

       ![ResumeTitle パラメータを追加](../../../../../translated_images/3.2_25_SelectResumeTitleParameter.18c769bbd2c60e362a56f6055e151ed6287903cb625addcdfbb43044828d7378.ja.png)

1. **ResumeTitle** パラメータが `text` プロパティに動的コンテンツとして追加されます。

       ![ResumeTitle 動的コンテンツ](../../../../../translated_images/3.2_26_ResumeTitleDynamicContent.7219e078f71fc0d5d4a6bb228ba2d53f0898ba26a27c5eb859df90d12dd52c70.ja.png)

1. 次に、採用担当者が履歴書を確認する期限を表す **Due Date** 値を設定します。`May 21, 2023` の `text` プロパティが表示されている行までスクロールします。

       ![アクセス許可を選択](../../../../../translated_images/3.2_27_DueDatePlaceholder.17c6003cc9ec1141b0aeb5cde203098a7f5534fa11f01a3cbffb66206ed1633a.ja.png)

1. この日付のプレースホルダー値を削除し、ダブルクォーテーションの間をクリックします。

       ![削除](../../../../../translated_images/3.2_28_DeleteDueDatePlaceholder.9a3df55fb3c9ed72e61e0a60dc3344335b0444ff537c9fb51036b0442a85d268.ja.png)

1. 右側の **稲妻アイコン** または **fxアイコン** を選択し、**関数** タブで次の式を入力して **追加** を選択します。

       ```text
       addDays(utcNow(), 3, 'MMM dd, yyyy')
       ```

      この式は2つの関数を使用しています。

     | 関数 | 説明 |
     |----------|------------|
     | **addDays** | 指定された日数を与えられた日付に追加し、結果の日付を文字列形式で返します |
     | **utcNow** | 現在の日付と時刻を協定世界時 (UTC) 形式の文字列として返します |

      utcNow 値については、日付を月と日、そして年の形式にフォーマットしています。

       ![Due Date 式](../../../../../translated_images/3.2_29_01_ExpressionDueDate.a4fa31985f5500971f2fc6da0e81e008af12be19d54a30a240764b74a4b2dbcb.ja.png)

      式が `text` プロパティに追加されます。

       ![Due Date 式](../../../../../translated_images/3.2_29_02_ExpressionDueDate.6159288450731c7b09628af70f0c9a6d92590ca7c7e39e8a524ae8af7c511f2c.ja.png)

1. 最後に、JSON ペイロードの `actions` 配列プロパティ内の `url` プロパティの URL を更新します。この現在のプレースホルダー URL を **Hiring Hub** モデル駆動型アプリ内の履歴書行の URL に置き換えます。これにより、採用担当者が適応型カードの `Action.OpenURL` アクションを選択し、モデル駆動型アプリ内の履歴書に移動できるようになります。

       ![履歴書URLプレースホルダーを削除](../../../../../translated_images/3.2_30_ViewResumeURLPlaceholder.f27af6cadfb54fb977f0b46ea3ec42ee0638d38ebc5d294eff5da52abf9d4a1b.ja.png)

1. **Hiring Hub** モデル駆動型アプリで、左側のメニューを使用して **Resumes** システムビュー内の行を開きます。履歴書の行がモデル駆動型アプリ内でフォームとして読み込まれます。

      履歴書行の URL をコピーします。

    ??? info "**Hiring Hub** モデル駆動型アプリに戻る方法（終了/閉じた場合）"

        1. [https://make.powerapps.com](https://make.powerapps.com) にアクセスし、これらのラボ演習に使用している開発環境にいることを確認してください。そうでない場合は切り替えてください。
        
        ![make.powerapps.com にアクセス](../../../../../translated_images/3.2_31_Note_01_BrowseToURL.a13dfc8b05a0b34f3a4c853f3d3e418864176b52b1b40c069da7712af5562aa5.ja.png)

        1. 左側のメニューパネルで **Apps** を選択し、**Hiring Hub** モデル駆動型アプリの **Play** アイコンを選択してブラウザで読み込みます。
        
        ![Hiring Hub モデル駆動型アプリを選択](../../../../../translated_images/3.2_31_Note_02_HiringHubApp.a09b6ea28b4fea8932809cb847cb0ea3d8faeb7b7b5604852de1f46ab1e9741b.ja.png)

       ![履歴書行のURLをコピー](../../../../../translated_images/3.2_31_CopyResumeURL.f6156f8792526129c2613922f0137221b2944fa8ffe7c04766d710521ad8765b.ja.png)

1. 次に、エージェントフローに戻り、現在のプレースホルダー URL 値をハイライトして削除します。

       ![履歴書行URLプレースホルダーを削除](../../../../../translated_images/3.2_32_SelectResumeURLPlaceHolder.8db783de292428eaa8937242eba4a54ebb1df7bf4c1bc9391b016ee545fb2b9f.ja.png)

1. コピーした URL を `url` プロパティに貼り付けます。

       ![コピーした履歴書行URLを貼り付け](../../../../../translated_images/3.2_33_PasteResumeRowURL.d7ba92493d7597b89f75e2f17f76846ac17a9ba89c2e36729dc6b5dc1599b047.ja.png)

1. 次のような画面が表示されます。最後にある `GUID` ID 値を削除します。この部分を動的コンテンツである **ResumeId** パラメータに置き換えます。

       ![履歴書URLプレースホルダーを削除](../../../../../translated_images/3.2_34_DeleteViewResumePlaceholderURL.7b26209eaeef6dc0a21b16140d05fe2f0e38de5f714575edd24d21dded58102a.ja.png)

1. 右側の **稲妻アイコン** または **fxアイコン** を選択します。

      **動的コンテンツ** タブで **ResumeId** パラメータを選択し、**追加** を選択します。

       ![ResumeId パラメータ](../../../../../translated_images/3.2_35_ResumeIdParameter.3dc710a7f5216944387f4d5f82c0a372eee23ee5259dec04147ad00e9c454d7d.ja.png)

1. **ResumeId** が動的コンテンツとして追加されます。黄色でハイライトされている部分は、**Hiring Hub** モデル駆動型アプリの環境詳細です。

     | パラメータ | 値 | 説明 |
     |----------|------------|---------|
     | **Organization URI** | GUID | Dataverse/Dynamics 365 環境の組織 URL |
     | **appid** | GUID | 特定のモデル駆動型アプリを開くために、appid または appname のクエリパラメータが使用されます。この場合は appid が使用されます |
     | **id** | GUID | 履歴書行の ID を示すクエリパラメータ |

       ![ResumeId 動的コンテンツ](../../../../../translated_images/3.2_36_ResumeIdDynamicContent.a1a40dfb4a83b60f1b75b02160890e3fec41c2c7df8adf32e02d652a57c1ee87.ja.png)

1. **Post card in a chat or channel** アクションの設定が完了しました 👏🏻 **x** アイコンを選択してアクション設定パネルを閉じます。

       ![パネルを閉じる](../../../../../translated_images/3.2_37_CloseActionPanel.23d07107381411aa9494ef36fb240682a0727a63e6f15082074b34a1defd517b.ja.png)

1. 最後に、**エージェントに応答** アクションを設定し、処理を終了するためにエージェントにテキストを送信します。

      **エージェントに応答** アクションで **+Add an output** を選択します。

       ![出力を追加を選択](../../../../../translated_images/3.2_38_AddAnOutput.de1a0e49033cb077eb5d2c226152bbb06dc12fb95d0496c69d469eecdb46c0ae.ja.png)

1. 出力のタイプとして **Text** を選択します。

       ![出力タイプとしてテキストを選択](../../../../../translated_images/3.2_39_SelectText.4e1e82c35fe9d1b569b668092d405aa9b0c81fbe67e7de68a660f2083ed3afdd.ja.png)

1. 出力の名前として次の内容を入力します。

       ![会話終了出力](../../../../../translated_images/3.2_40_EndConversationOutput.e392b58847d8439443c89459fccbbd88d4ea5e5fa562749b77407c46b9ff4ca4.ja.png)

1. 出力の値として次の内容を入力します。

       ```text
       Finished
       ```

       ![会話終了出力値](../../../../../translated_images/3.2_41_EndConversationOutputValue.2cb836900ee9fca802926676e613b077938f1106cc16e77ddd77af64ce92dcc8.ja.png)

1. これでエージェントフローの設定が完了しました。**Save draft** を選択してエージェントフローを保存します。保存が完了すると確認メッセージが表示されます。

       ![下書きを保存](../../../../../translated_images/3.2_42_SaveDraft.1bb26eec40faf5d2c244d93f869344915e90423623e07e02cac2c1f8c73d1a4a.ja.png)

1. エージェントフローを公開する前に、エージェントフローの詳細を更新する必要があります。**Overview** タブを選択し、**Edit** を選択します。

      フロー名のフィールドに次の内容を入力します。

       ```text
       Notify Teams Applicant channel
       ```      

      その後、**Refresh** アイコンを選択して AI を使用してエージェントフローの説明を更新します。

      次に **Save** を選択してエージェントフローの詳細を保存します。

       ![詳細を編集して保存](../../../../../translated_images/3.2_43_EditDetails.f0c9b53a9c1b29e4aa3c34774680559ae9173f77b3a37817bab2296b77ffcca7.ja.png)

1. **Designer** タブに戻り、**Publish** を選択してエージェントフローを公開します。保存が完了すると確認メッセージが表示されます。

       ![エージェントフローを公開](../../../../../translated_images/3.2_44_PublishAgentFlow.3014e6de5e53aa5fc2021bf6e11b901c4990b4fbb4d4cee33cc6d5b6cc641ed8.ja.png)

1. エージェントフローを **Application Intake Agent** のツールとして追加する必要があります。**Hiring Agent** に戻り、**Agents** タブを選択して **Application Intake Agent** を選択します。

       ![Application Intake Agent を選択](../../../../../translated_images/3.2_45_ApplicationIntakeAgent.0446b1762d0f499e880e7984f59669639193566f72539cd4fba5c62cd1fe8726.ja.png)

1. エージェントの **Details** セクションで **Description** フィールドを更新します。以下の内容をコピーして、説明文の最後に貼り付けます。

       ```text
       and also notify the Teams Applicant channel
       ```

       ![エージェントの説明を更新](../../../../../translated_images/3.2_46_UpdateAgentDescription.56344699cd3cc5e417e8f95362ed2288d0c0391f33bd98872e7e008a545175f0.ja.png)

1. 次に、エージェントフローをツールとして追加します。下にスクロールして **+ Add** を選択します。

       ![追加を選択](../../../../../translated_images/3.2_47_AddTools.c7557e272bd731129dffe9edebba3b04170d27806aaa14fffbe3d66b7b61808b.ja.png)

1. 先ほど作成したエージェントフロー **Notify Teams Applicant Channel** を選択します。

       ![エージェントフローを選択](../../../../../translated_images/3.2_48_NotifyTeamsApplicantChannelAgentFlow.5985f570786edef4eac93455f7a07978c0daf54e1371660bfd56a4c16b6aaf79.ja.png)

1. 次に **Add and configure** を選択します。

       ![Add and configure を選択](../../../../../translated_images/3.2_49_AddAndConfigure.c2d6cccfa9e4bb23ff58b615ad16d0b3ade4ef867b73b9196a45df6990d8072f.ja.png)

1. エージェントフローの **Inputs** セクションでは、先ほどエージェントフローで設定した3つの入力が表示されます。デフォルトでは、**Fill using** の設定が **Dynamically fill with AI** に設定されています。この設定はそのままにしておきます。イベントトリガー（最後のアクション **指定されたコパイロットにプロンプトを送信して処理を行う** - **Lab 3.1 - Automate uploading resumes to Dataverse received by email** のステップ38-44）からのプロンプトにAIがパラメータ値を抽出します。

       ![ツールエージェントフロー入力](../../../../../translated_images/3.2_50_Inputs.9fbb57b83b533d5a60f957505bb1e5430886ec9e6c70c10ed1c641d6b33fcc21.ja.png)

1. **Application Intake Agent** にツールが追加されたので、エージェントの指示を更新する必要があります。**戻る矢印** アイコンを選択してエージェントのリストに戻ります。

       ![戻る矢印アイコンを選択](../../../../../translated_images/3.2_51_SelectBack.6a9a55176d931895777822d3f9276d5d12ffe379a8860dd521e1c895e8188bba.ja.png)

1. **Hiring Agent** の **Agents** タブで **Application Intake Agent** を選択します。

       ![Application Intake Agent を選択](../../../../../translated_images/3.2_52_SelectApplicationIntakeAgent.039140313422e833389fd134b3a70a0eed11ba175ede5dbdc4abcce6004c7d2d.ja.png)

1. **Instructions** フィールドで、`2.Post-Upload` の指示の後に新しい行を追加します。以下の指示をコピーして貼り付けます。

       ```text
       Process for Resume Upload via Email
       1. When you receive a message, **Send [ResumeId (text)] = "1680265f-5793-f011-b41b-7c1e525be9f7" and [ResumeTitle (text_1)] = "TAYLOR TESTPERSON (FICTITIOUS).pdf" and [ResumeNumber (text_2)]= "R01026" to the Tool "Notify Teams Applicant channel"** in the child agent "Application Intake Agent", call [AGENT FLOW PLACEHOLDER]
       ```

       ![Application Intake Agent の指示を更新](../../../../../translated_images/3.2_53_PasteCopiedInstructions.f24ed715e907cf023449a54b894354ca1252b198e9be694eec2875f7f647f9c2.ja.png)

1. `[AGENT FLOW PLACEHOLDER` テキストをハイライトします。

       ![プレースホルダーをハイライト](../../../../../translated_images/3.2_54_HighlightPlaceholder.6c3fcac3c8f4fb6e5cce2dbd6b6548b84652d009e20fa4a01183a9a1b42b24fb.ja.png)

1. スラッシュ文字 `/` を入力し、**Notify Teams Applicant Channel** ツールを選択します。

       ![Notify Teams Applicant Channel ツールを選択](../../../../../translated_images/3.2_55_NotifyTeamsApplicatnChannelTool.2e3dd1e9ee9b2dfe10e1f2feb7e3b74b08856ce3afb16dafae1f2c4b73da904f.ja.png)
1. エージェントフローは、イベントトリガーの最後のアクション（**指定されたコパイロットにプロンプトを送信して処理**）がパラメータ値を含むプロンプトをエージェントに送り返した後、指示に従って**Application Intake Agent**によって呼び出されます。

   **Save**を選択して、**Application Intake Agent**の更新された指示を保存します。

   ![Saveを選択](../../../../../translated_images/3.2_56_Save.6abb0131f96b20d3753b5990313eaea6a237bef2bf0e2103a2ee5ba570fd7c04.ja.png)

1. エージェントが保存されると、指示が更新されます。

   ![指示が更新されました](../../../../../translated_images/3.2_57_InstructionsUpdated.5bfbfe2ca1da16284358a9917246bd8676cd6c095839ed1c69361d992cacd2b3.ja.png)

1. 次に、**Hiring Agent**を**Publish**する必要があります。右上の**Publish**を選択し、表示される_Publish this agent modal_で**Publish**を選択します。

   ![Hiring Agentを公開](../../../../../translated_images/3.2_58_PublishAgent.e7ec81c81b735de0cd11516aa944c759ea510e2b0bc9acf9f00d42d788896991.ja.png)

1. 公開されると、エージェントが公開されたことを確認するメッセージが表示されます。

   ![確認メッセージ](../../../../../translated_images/3.2_59_AgentPublished.d15e01232544cf08943260dfbf61c92339dbd187620349e7c5a43add4796ed12.ja.png)

これでエージェントをテストする準備が整いました！

### Lab 3.3 - イベントトリガーのテスト

1. イベントトリガーを実行するには、履歴書のPDFファイルを添付したメールを送信する必要があります。Outlookで新しいメールメッセージを作成します。

   | メールコンポーネント | 詳細 |
   |----------|------------|
   | **宛先** | サインインしているユーザーアカウントを使用 |
   | **ファイル添付** | [TAYLOR TESTPERSON (FICTITIOUS)](../../../../../docs/operative-preview/test-data/resumes/TAYLOR%20TESTPERSON%20(FICTITIOUS).pdf)ファイルをアップロード |
   | **本文** | 以下の内容をコピーしてメール本文に貼り付けてください |

   ```text
   採用担当者様

   貴社のシニアPower Platformエンジニア職に興味を持ち、応募させていただきます。Microsoftクラウドプラットフォームで安全でスケーラブルなソリューションを提供してきた9年以上の経験を活かし、貴社のチームに効果的に貢献できると確信しております。

   直近の役職では、リードPower Platformエンジニアとして、手動の選別を削減し検索性を向上させる自動履歴書受付パイプラインを開発しました。HRケース管理アプリケーションを提供し、ソリューション対応フローを導入し、展開リードタイムを短縮するためのPRチェックを実施しました。Power Apps、Power Automate、Power Pages、Dataverse、Microsoft 365サービスのほか、Graph/REST APIやAzure Functionsとの統合に精通しています。

   以前は、適応型カードを使用したTeams承認を開発し、承認時間を同日に短縮しました。また、堅牢なエラーハンドリングフレームワークを作成し、レガシーワークフローをPower Automateに移行し、数百人の従業員に採用されたセルフサービスポータルを構築しました。

   コンピュータサイエンスの学士号を取得しており、Power Platform Developer (PL-400)およびSolution Architect (PL-600)の資格を保有しています。また、メンター活動に情熱を持ち、地元のメイカーグループでボランティアをしています。

   履歴書を添付しておりますので、ご検討いただければ幸いです。私のスキルと経験が貴社のニーズにどのように合致するかについてお話しする機会をいただければ幸いです。

   お時間をいただき、ありがとうございます。

   敬具
   Taylor Testperson
   ```

   メールを作成したら**送信**してください。

   ![PDFファイルを添付したメールを作成](../../../../../translated_images/3.3_01_ComposeEmailWithAttachment.eccba1bbcc276b4373277b193a66d8818b712c6ab9468ee12902545522b670f7.ja.png)

1. イベントトリガーフローのPower Automateメーカー ポータルで、**Refresh**アイコンを選択して、送信されたメールのフロー実行が成功したか確認します。

   ![フロー実行を確認するためにリフレッシュアイコンを選択](../../../../../translated_images/3.3_02_FlowRun.0e99756ebc5fba371dc72719b0619736626934461e58db2dc153535cbabcc1e8.ja.png)

1. Copilot Studioに戻り、**Hiring Agent**の**Activity**タブを選択します。

   ![Activityタブを選択](../../../../../translated_images/3.3_03_SelectActivity.11d78735a8a2a1f64443d285deb47f2bacc5bd53ded039791215f9465dbc3f76.ja.png)

1. **Activity**タブが読み込まれ、**Hiring Agent**のすべてのアクティビティが表示されます。**Automated**という名前のアクティビティがあり、そのステータスは**Complete**です。このアクティビティはイベントトリガーと呼び出されたエージェントフローを表しています。

   ![アクティビティ完了](../../../../../translated_images/3.3_04_StatusComplete.dbe14ffb9414b0f4d869841426c4ca595d7a664bf13f4b5e2e29a4e251b9064c.ja.png)

1. アクティビティを選択し、アクティビティマップ内のイベントトリガーを選択します。右側のパネルで、プロンプトの入力パラメータに**Dataverse**で作成された行からの`Resume Id`、`Resume Title`、`Resume Number`のパラメータ値が含まれていることを確認します。これは、**Lab 3.1 - Automate uploading resumes to Dataverse received by email**のステップ18～27で以前に設定した動的コンテンツ値から取得されたものです。

   ![イベントトリガー](../../../../../translated_images/3.3_05_EventTrigger.cbd73cd43a79e88e782d1e47ac8ddacdbe30d582a4da61a31010f44a9dacdd12.ja.png)

1. **Hiring Hub**モデル駆動型アプリに戻り、**Resumes system view**で**Refresh**を選択してビューを更新します。メールで送信された履歴書の新しく作成された行がイベントトリガーを通じて作成されたため、リストに表示されます。

   ![履歴書の行が作成されました](../../../../../translated_images/3.3_06_ResumeRowCreated.9ab850d8d7c066aad8531409b00a4de5f214b4d8d209d39fa0d493d5c55e041d.ja.png)

1. Copilot Studioに戻り、アクティビティマップ内の**Application Intake Agent**の**Notify Teams Applicant Channel**エージェントフローを選択します。右側のパネルで、入力値がDataverse行からの値であることを確認します。これは、イベントトリガーの最後のアクション（**指定されたコパイロットにプロンプトを送信して処理**）によって送信されたプロンプトから取得されたもので、新しく作成されたDataverse行のパラメータ値を含んでいます。このようにして、イベントトリガーからエージェントフローにパラメータ値を渡すことができます。

   ![エージェントフローを選択](../../../../../translated_images/3.3_07_NotifyTeamsApplicantChannel.9b6c4654197efca9c88dde72cfb38812038ef5f6bdce8c309046c02643092bb6.ja.png)

1. 最後に、**Microsoft Teams**のチャンネルに投稿された適応型カードを確認します。チャンネル内には、Dataverseで新しく作成された履歴書行に関する情報を表示する適応型カードが表示されます。適応型カードの最初のハイパーリンクにカーソルを合わせると、URLが適応型カードのJSON（**Lab 3.2 - Notify a Teams channel using an adaptive card**のステップ15～19）ペイロードで以前に設定したResumes system view URLであることが確認できます。

   ![適応型カード履歴書テーブルシステムビューURL](../../../../../translated_images/3.3_08_AdaptiveCardResumeTableURL.5a59821d60c8698e5c9e4746806b975bbdf3c4400dc0bb02a53f350bdea569e9.ja.png)

1. ハイパーリンクを選択すると、ブラウザの**Hiring Hub**モデル駆動型アプリのResumes system viewに移動します。

   ![Hiring Hubモデル駆動型アプリの履歴書システムビュー](../../../../../translated_images/3.3_09_ResumeTableSystemView.81f52ab85aadda7d9131ced31d024fb4b411ccf600dd230d9d7e931c476e271c.ja.png)

1. Microsoft Teamsのチャンネルに投稿された適応型カードに戻ります。今度は、適応型カードの`Action.OpenURL`アクションである**View Resume**にカーソルを合わせます。URLが適応型カードのJSON（**Lab 3.2 - Notify a Teams channel using an adaptive card**のステップ30～36）ペイロードで以前に設定した履歴書行のURLであることを確認します。

   ![適応型カード履歴書行URL](../../../../../translated_images/3.3_10_AdaptiveCardResumeRowURL.2063a075c2d4adec27dfcc2ea4c01a385d791e0c4fc127caba912bde14bf77d6.ja.png)

1. アクションを選択すると、ブラウザの**Hiring Hub**モデル駆動型アプリの履歴書行フォームに移動します。

   ![Hiring Hubモデル駆動型アプリの履歴書行](../../../../../translated_images/3.3_11_ResumeRow.6f051ed512d396712a04ee98319d6643516e0bbfbf8a9de07d3df7d264563b9c.ja.png)

## ✅ ミッション完了

おめでとうございます！👏🏻 素晴らしい仕事です、オペラティブ。

✅ イベントトリガー：Dataverseのパラメータ値をエージェントフローに渡すイベントトリガーを作成しました。  
✅ エージェントフローの構築：Dataverseのパラメータ値を使用して、Microsoft Teamsのチャンネルに適応型カードを投稿し、HR採用チームに通知します。  
✅ 子エージェントの指示を更新：イベントトリガーが完了した後にフローを呼び出すように設定しました。

これにより、**Hiring Agent**は履歴書がメール添付として受信されるたびに自律的に動作し、HR採用チームに手動レビューを通知することが可能になります。

これで**Lab 03 - 応募メールの自動化**は終了です。以下のリンクを選択して次のレッスンに進んでください。

⏭️ [**エージェント指示の作成**レッスンに進む](../04-agent-instructions/README.md)

## 📚 戦術的リソース

📖 [Copilot Studioでエージェントを自律的にする](https://learn.microsoft.com/training/modules/autonomous-agents-online-workshop/?WT.mc_id=power-188561-ebenitez)  

📖 [イベントトリガーを追加する](https://learn.microsoft.com/microsoft-copilot-studio/authoring-trigger-event?WT.mc_id=power-188561-ebenitez)  

📖 [エージェントフローをエージェントで使用する](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-188561-ebenitez)  

📖 [Power Automateトリガーの紹介](https://learn.microsoft.com/power-automate/triggers-introduction?WT.mc_id=power-188561-ebenitez)  

📖 [エージェントでPower Automateフローを使用する](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create?WT.mc_id=power-188561-ebenitez)  

📖 [Copilot Studioのデータ損失防止](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention?WT.mc_id=power-188561-ebenitez)  

---

**免責事項**:  
この文書はAI翻訳サービス[Co-op Translator](https://github.com/Azure/co-op-translator)を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があります。元の言語で記載された文書を正式な情報源としてご参照ください。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤認について、当社は一切の責任を負いません。