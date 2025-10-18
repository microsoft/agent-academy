<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cc4afa4a5a11c9d03896decfbcbd4060",
  "translation_date": "2025-10-18T02:52:29+00:00",
  "source_file": "docs/recruit/09-add-an-agent-flow/README.md",
  "language_code": "ja"
}
-->
# 🚨 ミッション09: トピックにエージェントフローを追加して自動化を実現

## 🕵️‍♂️ コードネーム: `OPERATION AUTOMATION POWERHOUSE`

> **⏱️ 実行時間:** `約30分`  

🎥 **ウォークスルーを見る**

[![エージェントフロー動画サムネイル](../../../../../translated_images/video-thumbnail.ede12df9aaebcc8996680c8b6555d309b53bdf33d1b0165cae3b5173a6bcdd73.ja.jpg)](https://www.youtube.com/watch?v=vtLZJT3eBXg "YouTubeでウォークスルーを見る")

## 🎯 ミッション概要

あなたのエージェントは、ユーザーと会話し情報を提供することができますが、真の業務効率化を実現するには、エージェントが行動を起こす必要があります。このミッションでは、エージェントフローを活用して、会話型エージェントを自動化のパワーハウスに変身させます。

ミッション終了時には、アダプティブカードを通じてユーザー入力を取得し、SharePointからデータを取得し、メールでマネージャーに通知を送り、シームレスなユーザーへのフィードバックを提供する、エンドツーエンドのデバイスリクエスト自動化を作成することができます。これらすべてが、インテリジェントなワークフロー自動化を通じてエージェントによってオーケストレーションされます。

## 🔎 目標

このミッションでは以下を学びます:

1. エージェントフローとは何か、そして自動化のためのPower Automateクラウドフローとの違いを理解する
1. AIアクションや自然言語による作成など、エージェントフローを強力にする主要な機能を学ぶ
1. エージェントフローデザイナーを探索し、動的データ処理のための式の使い方を学ぶ
1. SharePointデータとメール通知を統合した完全なデバイスリクエスト自動化を作成する

## 🤔 エージェントフローとは？

エージェントフローは、繰り返しのタスクを自動化し、アプリやサービスを統合する強力な方法です。エージェントがタスクを自動化したり、他のアプリケーションやサービスと接続したりするために実行できる構造化されたステップバイステップのワークフローと考えてください。通知を送信したり、レコードを更新したり、イベントに応答したりするなど、エージェントが行うことを助けるミニワークフローのようなものです。

AIがその場で意思決定を行う自律型エージェントとは異なり、エージェントフローは**決定論的なワークフロー**です。つまり、毎回同じパスをたどり、一貫性と信頼性のある結果を保証します。

簡単に言えば:

- エージェントがユーザーに対して「話す」だけでなく、「行動する」ことを助けます。
- トピックやエージェント全体で再利用可能で、ユーザーのメッセージ、イベント、または他のアプリケーションやサービスによってトリガーされます。

## 🙋🏽 でも、Power Automateクラウドフローとはどう違うの？

エージェントフローとPower Automateクラウドフローはどちらもタスクの自動化を助けますが、それぞれ異なる目的のために設計されており、異なる方法で動作します。

### 🤖 Copilot Studioのエージェントフロー

**目的:**

- Copilot Studio内の会話型および自律型エージェント（エージェント指示を通じて）向けに構築。
- ビジネスシステムと対話するスマートなAI駆動型自動化に焦点を当てる。

**利点:**

- Copilot Studio内で直接簡単に構築・管理可能。
- ユーザーとの会話中に発生するタスク（例: 休暇申請の提出）を自動化するのに最適。
- Copilot Studio内での使用に基づく課金で、別途Power Automateライセンスが不要。これにより、企業チームの時間とコストを節約可能。

**制限:**

- 共有、コピー、共同所有者の割り当てができない。
- エージェントフローはCopilot Studio内でのみ表示・使用可能。
- 現在、エージェントのイベントトリガーはPower Automateメーカーポータルで編集可能。

### ☁️ Power Automateクラウドフロー

**目的:**

- 多くのアプリやサービス間での汎用的な自動化を目的として設計。
- 独立して動作するか、エージェントフローと連携して動作可能。

**利点:**

- 幅広いコネクタを提供。
- エージェント外でのプロセス自動化に最適。
- チーム間で共有、再利用、管理可能。

**要件:**

- 使用するにはPower Automateライセンスが必要。

### 📗 まとめ

| 使用するもの | 目的 |
| :- | :- |
| エージェントフロー | エージェント内でタスクを自動化し、AIを活用し、すべてをCopilot Studio内で管理する |  
| Power Automateクラウドフロー | アプリやサービス間で自動化する、またはエージェント外でワークフローを構築する |

## 👍🏻 エージェントフローを使用する理由

エージェントフローは固定されたパスを常にたどります。同じ入力が与えられると、毎回同じことを実行します。

これにより以下の特性を持ちます:

- **信頼性** - 毎回同じ動作をすることが保証されます。
- **予測可能性** - フローが実行されるときに期待される結果がわかります。
- **ルールベース** - 定義したステップに従います。

その他の利点:

- **自動化** - フォームの提出や通知の送信など、繰り返しのタスクをエージェントが処理可能。
- **接続性** - ServiceNow、SharePoint、Salesforceなど1400以上のコネクタと接続可能。独自のカスタムコネクタを作成することも可能。
- **緊密な統合** - エージェントフローはエージェントのロジックの一部であり、ユーザーのメッセージや会話中のアクションによって直接トリガーされます。
- **スケーラビリティ** - 複数のエージェントやシナリオでフローを再利用可能。
- **ノーコードまたはローコード** - 自然言語やビジュアルデザイナーを使用してフローを構築可能。
- **オールインワンプラットフォーム** - Copilot Studio内でフローを設計、テスト、展開可能。プラットフォーム間を切り替える必要なし。

## 🏄🏻‍♂️ エージェントフローはエージェントをどのように強化するのか？

エージェントフローは、ユーザーとの「会話」以上のことをエージェントができるようにします。エージェントが行動を起こし、システムと対話できるようにします。

例えば、あなたが財務部で働いていて、ベンダーから多くの請求書を受け取るとします。通常、誰かが各請求書を読み、重要な詳細（金額、日付、送信者）を抽出し、記録と一致しているか確認し、承認のために適切な人に送る必要があります。これには時間と労力がかかります。

Copilot Studioのエージェントフローを使用すると、このプロセスを自動化できます。請求書が届くとすぐに、エージェントは以下を行います:

1. インテリジェントなドキュメント処理を使用して、重要な情報を読み取り抽出。
1. 企業データと詳細を照合して、すべてが正しいか確認。
1. 承認のために適切な人にルーティング。

これにより、時間を節約し、ミスを減らし、プロセス全体がスムーズになります。

### このように考えてみてください

- **エージェント**: 賢い意思決定者
- **エージェントフロー**: 信頼できる実行者

### なぜ重要なのか

- 信頼性のある自動化と柔軟なAIの両方を活用できます。
- ビジネスニーズの変化に応じてフローを簡単に構築・更新できます。
- チーム全体で自動化を拡大できます。

## 🔌 エージェントフローを強力にする主な機能

1. **自然言語による作成**
    - フローに何をしてほしいかを簡単な言葉で説明できます。
    - Copilotが意図を理解し、フローを構築します。
    - コードを書く必要はありません - アイデアを説明するだけ。

1. **AIアクション**

    AIを使用して:

    - ドキュメントや画像を読み取り、理解する。
    - 長いコンテンツを短く有用な回答に要約する。
    - 賢い推奨や意思決定を行う。

1. **生成アクション**
    - フローがリアルタイムで適応可能。
    - エージェントが変化する情報に基づいてステップを計画・調整可能。

1. **統合アクション**
    - Outlook、Microsoft Teams、ServiceNow、SharePointなどのツールにフローを接続。
    - 1400以上の組み込みコネクタや独自のカスタムコネクタを使用可能。
    - チームが既に使用しているアプリとエージェントを連携。

1. **人間の介入**
    - 誰かがレビューや確認を行う必要がある承認ステップを追加。
    - [高度な承認](https://learn.microsoft.com/microsoft-copilot-studio/flows-advanced-approvals?WT.mc_id=power-172621-ebenitez)はリマインダー、委任、複数段階の承認をサポート。

## ⚙️ 仕組み

1. **トリガー**

    フローを開始するイベント - ユーザーが質問をする、トピックからフローを呼び出す、スケジュールされた時間、または他のシステムでイベントが発生する。

1. **アクション**

    エージェントが次に従うステップ - メールを送信する、APIを呼び出す、ServiceNowでチケットを更新する。

## 🧶 エージェントフローの作成方法

1. **自然言語**: エージェントにしてほしいことを説明すると、Copilotがフローを構築します。
1. **デザイナーキャンバス**: エージェントフローデザイナーでアクション、条件、ループをドラッグ＆ドロップしてフローを構築します。

## 🎨 エージェントフローデザイナーとは？

Copilot Studio内のビジュアルツールで、エージェントがタスクを完了するために従うステップバイステップの指示を構築、編集、管理するのに役立ちます。エージェントフローに不慣れな場合でも使いやすいように設計されています。

### エージェントフローデザイナーの主な機能

1. **ビジュアルキャンバス**
    - フロー全体を図のように表示できます。
    - 簡単にズームイン/アウト、ビューの調整、大きなフローをナビゲートするためのミニマップを使用可能。

1. **アクションの追加と削除**
    - _プラス（+）_ ボタンをクリックして、メッセージ送信やSharePointリストのアイテム更新などの新しいアクションを追加。
    - コネクタからアクションを検索し、その設定を通じて構成可能。
    - アクションを削除するには、_三点（⋮）_ をクリックして _削除_ を選択。

1. **パラメータの確認**
    - 任意のアクションをクリックして、その設定（_パラメータ_）を表示または編集。
    - 値を手動で入力するか、_式_ を使用して動的に設定可能。

1. **バージョン履歴**
    - フローを保存するたびにバージョンが記録されます。
    - 必要に応じて以前のバージョンを確認または復元可能。

1. **エラーチェック**
    - _フローチェッカー_ がエラーを強調表示。
    - フローを公開する前にすべてのエラーを解決する必要があります。

1. **公開とテスト**
    - フローがエラーなしになったら公開してライブに。
    - _テスト_ 機能を使用してフローを手動または自動で実行し、期待通りに動作するか確認。

### エージェントフローデザイナーを使用する理由

- **視覚的で直感的** - ドラッグ＆クリックでフローを構築可能。
- **実験が安全** - バージョン履歴で変更を元に戻せる。
- **組み込みテスト** - ライブになる前にすべてが機能することを確認可能。

## 🔤 _式_ とは？

式は、エージェントフローがデータを操作するのを助ける小さな数式やコマンドです。値を計算したり、テキストをフォーマットしたり、意思決定を行ったり、入力から特定の情報を引き出したりするために使用します。

### 式を使用する理由

式を使用すると以下が可能になります:

- **データの処理をカスタマイズ** - 名前を結合したり、日付をフォーマットしたり。
- **意思決定** - 値が10より大きい場合に何かを実行。
- **データの変換** - テキストを小文字に変更したり、文字列の一部を抽出したり。
- **ロジックの自動化** - 完全なコードを書かずに。

### 式の見た目は？

式は関数を使用します。元Microsoft MVPのJerry Weinstockによる関数の説明を引用します。

!!! quote
    関数は、式内で単純または複雑な操作を通じてデータを変換するための組み込みロジックです。

関数を使用すると、コードを書く必要なく式を構築できます。

私が説明する方法としては、エージェントフローの関数はExcelの関数に似ています。データに操作を加えて、希望する出力に変換することができます。Excelで数式を構築する際には、表や範囲内のセルから入力値を選択し、データ出力を操作するために関数を適用します。例として、`COUNT`関数を使用して、範囲内の数値を含むセルの数を計算することができます。

エージェントフローでは、Excelのセルではなく、トリガーやアクションのデータ出力を参照して式を構築します。前述の例を続けると、`length`関数を使用して、SharePointコネクタアクションの_Get items_から返されたアイテム数を取得できます。

### 関数が重要な理由

関数を使用するとエージェントフローが以下のようになります:

- **スマート** - 異なる入力や条件に反応可能。
- **柔軟** - データの処理方法をカスタマイズ可能。
- **効率的** - ロジックを自動化することで手動の手間を省ける。

### 最も役立つ関数

以下はエージェントフローでよく使用される一般的な関数です。関数の完全なリストについては、[リファレンスガイド](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez)をご覧ください。

#### 🔡 テキスト

- `concat()` - 複数のテキストを結合。
      - 例: `concat('Hello ', firstName)` → “Hello John”

- `toLower()` / `toUpper()` - テキストを小文字または大文字に変更。
      - 入力を標準化するのに便利。

- `substring()` - 文字列の一部を
- 例: `addDays(utcNow(), 7)` の出力は現在から7日後です。

- `formatDateTime()` - 日付を読みやすい文字列にフォーマットします。
  - 例: 月曜日, 2025年7月7日

#### ✅ 論理

- `if()` - 条件が真の場合は1つの値を、偽の場合は別の値を実行します。
  - 例: `if(score > 50, 'Pass', 'Fail')`

- `equals()` - 2つの値が同じかどうかを確認します。

- `and()`, `or()`, `not()` - 複数の条件を組み合わせます。

#### 🪣 その他便利な関数

- `coalesce()` - 最初の空でない値を返します。
  - フォールバックやデフォルト値に便利です。

- `guid()` - 一意のIDを生成します。
  - トラッキングやログ記録に便利です。

- `length()` - 文字列や配列内の文字や項目の数を数えます。

## ⭐ ベストプラクティス

Copilot Studioでエージェントフローを構築する際のベストプラクティスを以下に示します。

1. **シンプルに始めて徐々に構築する**

    - メッセージを送信するなどの小さく明確なタスクから始めましょう。
    - 自動化の基本をテストした後に、さらにステップを追加してください。

1. **明確でわかりやすいアクション名を使用する**

    - 各ステップに明確なラベルを付けて、何をするのか自分やチームが理解できるようにしましょう。
    - 例: SharePointコネクタアクションのデフォルト名「アイテムを更新」ではなく、「デバイスステータスを更新」など、更新内容を示す名前に変更します。

1. **公開前にエラーを確認する**

    - **フローチェッカー**を使用して問題を見つけて修正してください。
    - エラーがある場合、フローを公開することはできませんので、発生した際に解決するようにしてください。

1. **フローを徹底的にテストする**

    - 保存して公開されたからといって、期待通りに動作するとは限りません。
    - _テスト_ 機能を使用してフローを手動または自動で実行し、結果を確認してください。

1. **バージョン履歴を活用する**

    - 必要に応じて以前のバージョンに戻れるように、フローを頻繁に保存してください。
    - _バージョン履歴_ パネルを使用して、以前のバージョンを表示および復元できます。

1. **パラメータと式を賢く使う**

    - アクションを設定する際は、パラメータを使用してフローを動的にしましょう。
    - 値を手動で入力するか、式を使用して計算したり、上流のアクションからの値と組み合わせたりすることができます。これには _動的コンテンツ_ ピッカーを使用します。

1. **不要なアクションを削除する**

    - アクションを追加した後で不要だと判断した場合は、フローを整理するために削除してください。

## 🧪 ラボ 09 - エージェントフローを追加してトピック機能を強化する

これから、適応型カードを使用してトピックを強化し、トピックとノードの高度な機能を活用する方法を学びます。

- [9.1 エージェントフローを作成する](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.2 トピックにエージェントフローを追加する](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.3 ユーザー体験を向上させるために複数のノードでデバイスリクエストトピックを更新する](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.4 複数のシナリオでエージェントをテストする](../../../../../docs/recruit/09-add-an-agent-flow)

### ✨ ユースケース

**役職** 従業員のマネージャー

**目的** デバイスリクエストを受け取る

**理由** 従業員がリクエストしたデバイスを確認するため

さあ始めましょう！

### 前提条件

1. **SharePointリスト**

    [レッスン00 - コースセットアップ - ステップ3: 新しいSharePointサイトを作成する](../00-course-setup/README.md#step-4-create-new-sharepoint-site)で作成した**Devices** SharePointリストを使用します。

    **Devices** SharePointリストをまだ設定していない場合は、[レッスン00 - コースセットアップ - ステップ3: 新しいSharePointサイトを作成する](../00-course-setup/README.md#step-4-create-new-sharepoint-site)に戻ってください。

1. **Contosoヘルプデスクエージェント**

    [レッスン06 - Copilotを使用して自然言語でカスタムエージェントを作成し、データで基盤を固める](../06-create-agent-from-conversation/README.md)で以前に作成したエージェントを使用します。

### 9.1 エージェントフローを作成する

この演習では、選択されたデバイスのSharePointアイテムを取得し、デバイスの詳細を含むメールをマネージャーに送信するエージェントフローを作成します。

1. **Request device**トピックで、**Ask with adaptive card**ノードまでスクロールし、新しいノードを追加します。**Add a tool**を選択し、フライアウトペインの**Basic tools**タブで**New Agent flow**を選択します。

    ![新しいエージェントフローを追加](../../../../../translated_images/9.1_01_AddNewAgentFlow.2b9078604a054d1f022f9c73adaf10fe430e81875ec8717a7f70ef7b05f11c15.ja.png)

1. エージェントフローの**Designer**がトリガーとアクションを含む状態で読み込まれます。

    - **トリガー** - エージェントがフローを呼び出したとき
        - Copilot Studioエージェントからフローをトリガーします。

    - **アクション** - エージェントに応答する
        - Copilot Studioエージェントに出力値を含む応答を送信します。

    トリガーを選択します。

    ![トリガーを選択](../../../../../translated_images/9.1_02_SelectTrigger.92dc20442add764c8aa4b7f737f28416a3223e4471562462ed6dcba2dc7c7936.ja.png)

1. 次に、エージェントフローにいくつかの入力を追加します。

    - `DeviceSharePointId` - これはSharePointアイテムのID値を格納します。このID値は、ユーザーがデバイスを選択した**Ask with adaptive card**ノードからの出力です。

    - `User` - これはエージェントのシステム変数から取得されるユーザーの名前です。

    - `AdditionalComments` - これはユーザーが入力したコメントで、**Ask with adaptive card**ノードからの出力です。

    まず、トリガーの入力として`DeviceSharePointId`を追加します。**+ Add an input**を選択します。

    ![入力を追加](../../../../../translated_images/9.1_03_AddInput.fd1e0a99ecb5e20f3a518cb23fc0d22c6db1435c5ffb2e183fce3b8a056287bb.ja.png)

1. ユーザー入力のタイプとして**Text**を選択します。

    ![Textを選択](../../../../../translated_images/9.1_04_SelectText.47ca776822ec5a6c1339c012d51e0eb6eac6bf8315d4ac6f25498b10ada16df9.ja.png)

1. 入力の名前を以下のように入力します。

    ```text
    DeviceSharePointId
    ```

    ![DeviceSharePointId入力](../../../../../translated_images/9.1_05_DeviceSharePointIdInput.caf77f8eb60a1b8649ea8b0abf05dfce9fa4bef9d9c465cd8906395e5b44842e.ja.png)

1. 次に2つ目の入力`User`を追加します。同じ手順を繰り返し、**+ Add an input**を選択し、**Text**を選択します。

    ![入力を追加](../../../../../translated_images/9.1_06_AddInput.3ca4bff9991b6e8a331bd909ff58038387696ce7b6ee7a932a88316aff41bc57.ja.png)

1. 入力の名前を以下のように入力します。

    ```text
    User
    ```

    ![User入力](../../../../../translated_images/9.1_07_UserInput.16b2405f2d5744ea14a6a67b69539ba24719aaf642ddfc2b281e784d74d8c1ea.ja.png)

1. 次に3つ目の入力`AdditionalComments`を追加します。同じ手順を繰り返し、**+ Add an input**を選択し、**Text**を選択します。

    ![入力を追加](../../../../../translated_images/9.1_08_AddInput.4685bb77618e6d9cfca7a42a0945d10f59825b1ca42de372dcf07c9170451680.ja.png)

1. 入力の名前を以下のように入力します。

    ```text
    AdditionalComments
    ```

    ![AdditionalComments入力](../../../../../translated_images/9.1_09_AdditionalComments.a4587b59b85450ca0566615c9473132dd6447e6c7513e4926942655aa0e80195.ja.png)

1. `AdditionalComments`入力については、オプションにするために更新します。**省略記号 (...) アイコン**を選択し、**Make the field optional**を選択します。

    ![フィールドをオプションにする](../../../../../translated_images/9.1_10_Optional.753bd03817c2eb37bb44a7bfd7d29314aa7109cde02e3f619c01c42bc9170b71.ja.png)

1. 素晴らしいです！トリガーが設定されましたので、続けましょう。トリガーの下にある**プラス + アイコン**を選択して新しいアクションを挿入します。

    ![アクションを追加](../../../../../translated_images/9.1_11_AddAction.86c14acd1ce22e99b7244e0001f0039362ff6ac3efafe03956788aaa31e705af.ja.png)

1. **Actions pane**が表示され、Microsoftやサードパーティサービスの1400以上の組み込みコネクタからアクションを確認できます。**検索フィールド**に以下を入力します。

    ```text
    Get item
    ```

    検索結果にアクションのリストが表示されます。**SharePointコネクタ**の**Get item**アクションを選択します。

    ![Get itemアクション](../../../../../translated_images/9.1_12_AddGetItemAction.434cdcb822e1f72993fc4a0c0ad753e1220456f9dab8fc307d42f5711071d45b.ja.png)

1. 次に**Get item**アクションを設定します。

    **Get item**アクションの**省略記号 (...)**アイコンを選択します。

    ![省略記号を選択](../../../../../translated_images/9.1_13_SelectEllipsis.88bf304067f3103825f183f8962634af831460541290533e5670f4c014a97c46.ja.png)

1. **Rename**を選択します。

    ![Renameを選択](../../../../../translated_images/9.1_14_SelectRename.74d99c883418b7dbf58758304976cac1d0f2afd30e4cd1992830f00775a46b18.ja.png)

1. アクションの名前を以下のように変更します。

    ```text
    Get Device
    ```

    ![アクションの名前を変更](../../../../../translated_images/9.1_15_RenameAction.ff64b79f6e6603ae89f272f91d84ff4432c04ba103c401a2808a767e3ceb5617.ja.png)

1. **Site Address**フィールドで、[レッスン00 - コースセットアップ - ステップ3: 新しいSharePointサイトを作成する](../00-course-setup/README.md#step-4-create-new-sharepoint-site)で作成したContoso IT SharePointサイトの**Site address**を選択します。

    **List Name**フィールドでは、**Devices** SharePointリストを選択します。

    ![パラメータを入力](../../../../../translated_images/9.1_16_SharePointSiteAndListParameters.af6e0b112eb4bfb210f9259da02b459097a06307afa6ca269cb33aa9ecc1c1e4.ja.png)

1. **Id**フィールドで、右側の**稲妻アイコン**または**fxアイコン**を選択します。

    ![動的コンテンツピッカー](../../../../../translated_images/9.1_17_InsertExpressionIcon.6e250bb84e7b8884de7b2052005f7ff3cd95f2c28671d2da7965001b3f621902.ja.png)

1. フライアウトペインの**Dynamic content**タブで以下を入力します。

    ```text
    sharepoint
    ```

    検索結果には、検索した値に一致する入力パラメータが表示されます。トリガーの**DeviceSharePointId**パラメータを選択します。

    次に、**Add**を選択して動的コンテンツ入力をアクションの**Id**パラメータに追加します。

    ![DeviceSharePointId入力を選択](../../../../../translated_images/9.1_18_DeviceSharePointId.b9be8e7c3c6b0ab710a8f662e62a0ec0133a530f6877b6cea3c48acc8022fec5.ja.png)

1. トリガーからの動的コンテンツ入力がアクションの**Id**パラメータに参照されました。次に、詳細パラメータの1つを更新します。**Show all**を選択して詳細パラメータを表示します。

    ![詳細パラメータを表示](../../../../../translated_images/9.1_19_AdvancedParameters.4bb8e0c11e7864625ad6c30ab1b9021d367cd77374c56985df7b3d43845a1883.ja.png)

1. **Limit Columns by View**パラメータが表示され、デフォルトでは**Use all columns (Do not limit)**に設定されています。この値をビューに更新して、アクションの応答で返される列を制限します。**Limit Columns by View**パラメータを選択してビューのリストを表示します。

    ![パラメータを選択](../../../../../translated_images/9.1_20_LimitColumnsByView.4d30f532f1e1033323d39df5c9b8e803788ea785ed58de2efca2faa5df4b26fc.ja.png)

1. **All Items**ビューを選択します。

    ![All Itemsビューを選択](../../../../../translated_images/9.1_21_SelectView.d180e83d5e62f5fb6994a7071d5e6ce8f88143d8cc833cb55b208c6fee41bc02.ja.png)

1. _Get Device_アクションの下にある**プラス + アイコン**を選択して新しいアクションを挿入します。

    ![新しいアクションを追加](../../../../../translated_images/9.1_22_AddAnAction.904b79142347fe927168036ade55d842fa088deef53710944272c681421e0e84.ja.png)

1. 検索フィールドに以下を入力します。

    ```text
    send an email
    ```

    検索結果にアクションのリストが表示されます。**Office 365 Outlookコネクタ**の**Send an email (V2)**アクションを選択します。

    ![Send an emailアクション](../../../../../translated_images/9.1_23_SendAnEmail.f1019365131658b0e71b5b58b57d7d8b3f3a0c670ddb3cca0838bf0b4f8cd354.ja.png)

1. 次にコネクタアクションの接続を作成する必要があります。**Sign in**を選択します。

    ![接続を作成](../../../../../translated_images/9.1_24_CreateConnection.9e968ad4de9d13d81e95779c4fa60809fd40de5f65dbd014f1dc39663c935806.ja.png)

1. サインインしているユーザーアカウントを選択します。

    ![ユーザーアカウントを選択](../../../../../translated_images/9.1_25_SelectUserAccount.f3c96ac1a377c4b42a6301ba38c21469eb7bd3f48633f04200f1610902f8bdbe.ja.png)

1. **Allow access**を選択します。これで接続が作成されました。

    ![アクセスを許可](../../../../../translated_images/9.1_26_AllowAccess.1abcaea31b9846279cafafd7160baea6bec60cdfac8224df7082ceee3ef22a26.ja.png)

1. アクションの名前を以下のように変更します。

    ```text
    Send an email to manager
    ```

    次にアクションの入力パラメータを定義します。

    **To**入力パラメータには、自分自身を選択してください。通常はマネージャーを選択するか、Entra IDプロファイルに基づいてマネージャーを取得する別のアクションを使用しますが、このレッスンでは自分自身を選択してください。

    **Subject**入力パラメータには以下を入力します。

    ```text
    Request type: new device
    ```

    **Body**入力パラメータには以下を入力します。

    ```text
    Hi,

    New device requested from

    Manufacturer:
    Model:
    Link to item in SharePoint
    Additional comments from:

    This is an automated email from Contoso Helpdesk Copilot
    ```

    ![アクションの名前を変更し、入力を設定](../../../../../translated_images/9.1_27_RenameAndConfigureParameters.c3d29a3481fb5c0240cca85db4119387e6b750546ed12e2af4a9ac62d7454f89.ja.png)

1. 次に、**Body**入力パラメータをトリガー入力または**Get item**アクションからの動的コンテンツ参照で更新します。2行目の後にスペースを入力し、トリガー入力**User**の名前を挿入します。

    右側の**稲妻アイコン**または**fxアイコン**を選択します。

    ![User入力を動的コンテンツとして追加](../../../../../translated_images/9.1_28_AddUserInput.f38d3df648faef75f1985bdcc23db16e197ccb1ddc015210c43bbb2569fcf654.ja.png)

1. フライアウトペインの**Dynamic content**タブでトリガーの**User**入力を選択します。

    **Add**を選択して動的コンテンツ**User**入力をアクションの**Body**パラメータに追加します。

    ![User入力を選択](../../../../../translated_images/9.1_29_SelectUserInput.4efc79f52d74fa7ae13132ea13f7d51b3f4aab6413afc41a8354c5e59852b9fc.ja.png)
1. トリガーからの動的コンテンツ入力が、アクションの**Body**パラメータで参照されるようになりました。メールメッセージ本文の残りの行についても同様に繰り返します。

    ![ユーザー入力が追加されました](../../../../../translated_images/9.1_30_UserInputAdded.905ec0489e4f1bbe7cc071826050834aa1e5acf53f8a65ad59532ea13b81c607.ja.png)

1. `Manufacturer:`の横のスペースをクリックします。右側の**稲妻アイコン**または**fxアイコン**を選択します。

    フライアウトペインの**Dynamic content**タブで、検索フィールドに以下を入力します。

    ```text
    manufacturer
    ```

    トリガーから**Manufacturer value**入力を選択し、**Add**をクリックします。

    ![動的コンテンツとしてManufacturer value入力を追加](../../../../../translated_images/9.1_31_ManufacturerValueAdded.db2cf35a35a20590d80d7f0191d771a045bf55e40ce98982d0e099588e260712.ja.png)

1. `Model:`の横のスペースをクリックします。右側の**稲妻アイコン**または**fxアイコン**を選択します。

    フライアウトペインの**Dynamic content**タブで、検索フィールドに以下を入力します。

    ```text
    model
    ```

    **Get item**アクションから**Model**入力を選択し、**Add**をクリックします。

    ![動的コンテンツとしてModel入力を追加](../../../../../translated_images/9.1_32_ModelAdded.ff9d858648ddb85fe70eaaafa6e23d0560500e7327ccb29ee56ecac0d8d36cab.ja.png)

1. `Link to item in SharePoint`テキストについて、これをメールメッセージ本文内のハイパーリンクに更新します。行の先頭をクリックし、右側の**稲妻アイコン**または**fxアイコン**を選択します。

    ![動的コンテンツを追加](../../../../../translated_images/9.1_33_AddDynamicContent.c662d682377af82adc52de18e05baf9b6aa5a972882dcf6274f3979f14641627.ja.png)

1. HTMLアンカータグの後をクリックし、右側の**稲妻アイコン**または**fxアイコン**を選択します。

    フライアウトペインの**Dynamic content**タブで、検索フィールドに以下を入力します。

    ```text
    link to item
    ```

    **Get item**アクションから**Link to item**入力を選択し、**Add**をクリックします。

    ![動的コンテンツとしてLink to itemを追加](../../../../../translated_images/9.1_34_AddLinkToItem.6827bd3bad484f7382d060435bb0ef45e9bb1c3ad4774529559bb4c5f9bbca8c.ja.png)

1. **&lt;/&gt;**アイコンを選択してHTMLエディタに切り替えます。

    ![ユーザー入力を追加](../../../../../translated_images/9.1_35_ToggleCodeView.ae3a9caf213f2c6366487e10092ad1fad3494f110936219258d842c23e7f46d9.ja.png)

1. HTMLエディタが有効になりました。`Link to item in SharePoint`テキストの前をクリックし、ハイパーリンクを作成するためにHTMLアンカータグを追加します。以下をコピーして貼り付けます。

    ```text
    <a href="
    ```

    ![HTMLタグ](../../../../../translated_images/9.1_36_AddHTMLTag.146220ae5c33eaf9915c393c37d62b9d4b258413e9f4dc42a1ab005437669443.ja.png)

1. **Link to item**の動的コンテンツ入力が**Body**パラメータで参照されるようになりました。**Link to item**入力の後をクリックし、以下をコピーして貼り付けます。

    ```text
    ">
    ```

    ![HTMLタグ](../../../../../translated_images/9.1_37_AddHTMLTag.48f73b302f6a84bb6a51e0666fd30baf1f8d9d906947d44dc4095ededed18a2d.ja.png)

1. `Link to item in SharePoint`テキストの後をクリックし、HTMLアンカータグを閉じます。以下をコピーして貼り付けます。

    ```text
    </a>
    ```

    ![HTMLタグ](../../../../../translated_images/9.1_38_AddHTMLTag.47d2f0521e6aba9d609bfe65d86ebae5786e4ad5465fefb7ae0370db6e924c96.ja.png)

1. **&lt;/&gt;**アイコンを選択してコードビューを切り替えます。

    ![コードビューを無効化](../../../../../translated_images/9.1_39_ToggleCodeView.88606eb37d702a686904b2dd8943fcf144cec462b37ee781e8ee0415e62bd951.ja.png)

1. 再度**&lt;/&gt;**アイコンを選択してコードビューを切り替えます。

    ![コードビューに戻る](../../../../../translated_images/9.1_40_ToggleCodeViewAgain.32da9b9804adbbfaf8d85bdaa6fa51d2ae5fc1fbb97f75084813972c66d0c4d9.ja.png)

1. いくつかの余分な文字`&lt;br&gt;`があることに気づきます。これらの文字を削除してください。

    ![文字を削除](../../../../../translated_images/9.1_41_DeleteCharacters.f1ef3830b186c2cd9974ea05e336c83c0706d72ab1010d06283716dc4e982875.ja.png)

1. メールメッセージ本文にハイパーリンクを追加する作業が完了しました 😎 **&lt;/&gt;**アイコンを選択してコードビューを切り替えます。

    ![HTMLタグが整理されました](../../../../../translated_images/9.1_42_HTMLTagTidiedUp.1b27fa2c4dc65c3f1a7151abcf6e388f64cb83745b10cd22769c1f9af3421fc6.ja.png)

1. コロン文字の前の`Additional comments from`テキストの後をクリックし、右側の**稲妻アイコン**または**fxアイコン**を選択します。

    ![ユーザーパラメータを追加](../../../../../translated_images/9.1_43_AddUserInput.6f0d26739c1b9039383aa37cc46fa1149a269bd4268fb54b897d144afc49c515.ja.png)

1. フライアウトペインの**Dynamic content**タブで、検索フィールドに以下を入力します。

    ```text
    user
    ```

    トリガーから**User**パラメータを選択し、**Add**をクリックします。

    ![動的コンテンツとしてUserパラメータを追加](../../../../../translated_images/9.1_44_AddUserDynamicContent.bb7c76e92650001207712b3447d3275d584f3ebf739034369869c3facf38eacf.ja.png)

1. ユーザーが**Ask an adaptive card**ノードで提供した場合は追加コメントの値を表示し、提供されていない場合は「None」と表示する式を挿入します。

    コロンの後をクリックし、右側の**稲妻アイコン**または**fxアイコン**を選択します。

    ![式を追加](../../../../../translated_images/9.1_45_AddExpression.c4c92dc4a56fab75c78ec2c5087682521e562264c1710c8dfaa24134adc3a112.ja.png)

1. フライアウトペインの**Function**タブで、上部の式フィールドに以下を入力します。

    ```text
    if(empty())
    ```

    この式は`if`関数を使用してif-else文を作成します。

    次に使用する関数は`empty`で、文字列パラメータに値が存在するかどうかを確認します。参照する文字列パラメータはトリガーからの`AdditionalComments`入力パラメータ値です。

    ![空の場合](../../../../../translated_images/9.1_46_IfEmptyFunctions.95d21ad01f6f7c290cb8d5a57ccbca9c9532df7ce57f800554dea541d503ddc6.ja.png)

1. 次に、`empty`関数の後の括弧内をクリックします。トリガーからの`AdditionalComments`入力パラメータを挿入します。

    **Dynamic content**タブを選択し、検索フィールドに以下を入力します。

    ```text
    Additional
    ```

    ペインをスクロールし、トリガーから**AdditionalComments**入力を選択します。このパラメータが式内の文字列パラメータとして追加されます。

    ![動的コンテンツとしてAdditionalCommentsを追加](../../../../../translated_images/9.1_47_AdditionalCommentsDynamicContent.f9632f09779888c18a58df8e97ef677ed885b0eaa88c252b13b22c0e4c67495b.ja.png)

1. 次に**_true_**ロジックを定義します。`AdditionalComments`文字列パラメータが空の場合、`None`という文字列（テキスト）を表示します。

    文字列パラメータを囲む括弧の後に以下を入力します。

    ```text
    , 'None',
    ```

    ![Trueロジック](../../../../../translated_images/9.1_48_None.31978299f29e07ef3257eedd5dcee09c8675f8b3f61aea8102900118e0b6ca70.ja.png)

1. 最後に**_false_**ロジックを定義します。`AdditionalComments`文字列パラメータが空でない場合、トリガーからの**AdditionalComments**入力パラメータの値を表示します。

    > この値は**Request device**トピックの**Ask with adaptive card**ノード内の追加コメントフィールドから取得されます。

    **_true_**ロジックの後のカンマの後に、**Dynamic content**タブを選択します。検索フィールドに以下を入力します。

    ```text
    Additional
    ```

    ペインをスクロールし、トリガーから**AdditionalComments**入力を選択します。このパラメータが式内の文字列パラメータとして追加されます。

    **Body**パラメータに追加するには**Add**を選択します。

    ![Falseロジック](../../../../../translated_images/9.1_49_AdditionalCommentsDynamicContent.d42c7fc29f65d901bb26dcbc13408c387633ea185cdd79c35d6439231b7363d5.ja.png)

1. 素晴らしい、式が完成しました！式が**Body**パラメータに追加されました。最後に、最後の行をイタリック体にフォーマットします。

    ![イタリック体](../../../../../translated_images/9.1_50_Italics.a0c01aa33ef4e83167e1fbc21c1d833f95addd60c8f531411cf9c58a96a31b02.ja.png)

1. **Respond to the agent**アクションを更新して、**Get item**アクションからの**Model value**パラメータの値をエージェントに送信します。

    マウスの左キーを押しながらデザイナー内で上方向に移動し、**Respond to the agent**アクションを表示します。

    **Respond to the agent**アクションを選択し、出力タイプとして**Text**を選択します。

    ![Text出力を選択](../../../../../translated_images/9.1_51_RespondToTheAgentAction.4c682a440e19a0fcd6d6f51ef9cdbfe76f482a39d635b8905d9b0cbbf33d945f.ja.png)

1. 出力の名前として以下を入力します。

    ```text
    ModelValue
    ```

    ![ModelValue出力](../../../../../translated_images/9.1_52_ModelValueInput.20609429eb323281051607b090319adc5315c0245c7d61158eb119714fe4318f.ja.png)

1. 値フィールドを選択し、右側の**稲妻アイコン**または**fxアイコン**を選択します。

    ![式を挿入](../../../../../translated_images/9.1_53_InsertDynamicContent.108ba565696f9f52d742323e0f4c46c308f322ac4bd67802e3196430155c7443.ja.png)

1. フライアウトペインの**Dynamic content**タブで、検索フィールドに以下を入力します。

    ```text
    model
    ```

    **Get item**アクションから**Model**パラメータを選択し、**Add**をクリックします。

    ![動的コンテンツとしてModelパラメータを追加](../../../../../translated_images/9.1_54_ModelParameter.f231fd0ec089ac6b9ac1b7fd2e6a60a35b08484ed10b0098cff6b3ce0c7760cb.ja.png)

1. **Model**パラメータがテキスト出力の値になりました。**Save draft**を選択してエージェントフローを保存します。

    エージェントフローが完了しました 👏🏻

    ![下書きを保存](../../../../../translated_images/9.1_55_SaveDraftAgentFlow.5ab97895a901458362881fc9ee576762bdb0883b37a6cbd7a631ddc2750705af.ja.png)

1. 公開前にエージェントフローをもう一度更新します。**Overview**タブを選択し、**Edit**をクリックします。

    ![編集を選択](../../../../../translated_images/9.1_56_EditAgentFlowDetails.023e8149284b9ae79dd3d95f574ff90bbcc1cc4a9fff4be56664ccbe0698f310.ja.png)

1. **Flow name**として以下をコピーして貼り付けます。

    ```text
    Send device request email
    ```

    **Description**については、**refresh icon**を選択して、トリガーとアクションに基づいてAIが自動的に説明を生成するようにします。

    **Save**を選択して、エージェントフローの名前と説明を保存します。

    ![名前を変更し、説明を追加して保存](../../../../../translated_images/9.1_57_RenameAndDescription.57a190396550bf998d62c49ca359b66211ae50042ac5f8739b32f8b9bc292607.ja.png)

1. **Designer**タブを選択し、**Publish**をクリックしてエージェントフローを公開し、**Request device**トピックのノードとして追加できるようにします。

    ![公開](../../../../../translated_images/9.1_58_Publish.8f43271718c662deee7afea6fb283f64005b277b3a62086e6d91cc0c3ac4f79c.ja.png)

1. まもなくエージェントフローが公開されたことを確認するメッセージが表示されます。

    ![確認メッセージ](../../../../../translated_images/9.1_59_Confirmation.d406bde76c31b27f794d5742c992b8c84283f46b2e54524f1e500d0688a33716.ja.png)

### 9.2 トピックにエージェントフローを追加する

次に、エージェントフローを**Request device**トピックに追加します。

1. 左側のメニューで**Agents**を選択し、**Contoso Helpdesk Agent**を選択します。

    ![Agentsを選択](../../../../../translated_images/9.2_01_SelectAgent.b8a6fd3a8970d6b0c8e78bf0a5411257206612d53acdf9b44f78b2c9c2fe91fc.ja.png)

1. **Topics**タブを選択します。

    ![Topicsタブを選択](../../../../../translated_images/9.2_02_SelectTopics.3e8618aba5f4a1ddf3dee726b6da9a66ed89d04a2e8ca36b52112a6675c2885c.ja.png)

1. **Request device**トピックを選択します。

    ![Request deviceトピックを選択](../../../../../translated_images/9.2_03_SelectRequestDevice.df10472702258708b3d069e718e695b9fcabc61d42901d524dc302a03b3fa4a9.ja.png)

1. **Ask with adaptive card**ノードまでスクロールし、新しいノードを追加します。

    **Add a tool**を選択し、フライアウトペインの**Basic tools**タブで、最近作成して公開した**Send device request email**エージェントフローを選択します。

    ![エージェントフローを選択](../../../../../translated_images/9.2_04_SelectAgentFlow.15deca87db95fff1c9d904855d237d22a72c260adf3343d9e78695f07c42a8e0.ja.png)

1. エージェントフローのトリガー入力について、**Ask with adaptive card**ノードからの変数出力を選択する必要があります。

    **DeviceSharePointId**入力の**省略記号（...）アイコン**を選択します。

    ![変数を選択](../../../../../translated_images/9.2_05_SelectVariable.8fe53cbc0f950f732b9e9002b21d8762ddfe74fb601d61c2a5119e32383450a2.ja.png)

1. **Ask with adaptive card**ノードで定義された出力の1つである**deviceSelectionId**変数を選択します。

    ![deviceSelectionId変数を選択](../../../../../translated_images/9.2_06_SelectdeviceSelectionIdVariable.67c0091e0de9442d3cffbfe3b2cace8d76be37ea67815ddfc99af03ae4b37391.ja.png)

1. 次に、**User**入力の**省略記号（...）アイコン**を選択します。

    ![変数を選択](../../../../../translated_images/9.2_07_SelectVariable.bf851128bec5e0255c6cf361a837ce9701d0afac84ed3d5b89665d111a098386.ja.png)

1. フライアウト変数ペインの**System**タブを選択し、**User.DisplayName**を選択します。この変数は、エージェントと対話している内部ユーザーの表示名を格納します。

    ![User.DisplayNameシステム変数を選択](../../../../../translated_images/9.2_08_SelectUser.DisplayNameVariable.926a2a7560402fbd7b224e2bf0ff11df9e5612803b7ce51e36f58201a09bbfd7.ja.png)

1. 次に、**Advanced inputs**を展開するために**右向きアイコン**を選択し、**AdditionalComments**入力を確認します。

    ![Advanced inputsを展開](../../../../../translated_images/9.2_09_ExpandAdvancedInputs.bded22f83fe4eb21237daa254725e12a81ea75be34bcb0e8ab322037a4e6f418.ja.png)

1. AdditionalComments入力の**省略記号（...）アイコン**を選択します。

    ![変数を選択](../../../../../translated_images/9.2_10_SelectVariable.86286cc06323e65fb3874b9fd0ea62d140b9e9b9a2b5116d667192a6dca3815f.ja.png)

1. フライアウト変数ペインで**Formula**タブと展開アイコンを選択します。Power Fx式を使用します。

    ![Formulaタブ](../../../../../translated_images/9.2_11_SelectFormulaAndExpandIcon.3fcd07bfccc4f0779a5d26313b571e60be792da7fd28e937b3e888f8aaeda7e0.ja.png)

1. エージェントフロー内の式と同様に、_if_関数を使用して条件チェックを行いますが、今回は
    - Power Fx関数を使用し、
    - 値がない場合、または**Ask with adaptive card**ノードからの`commentsId`出力変数の値を挿入します。

    Power Fxフィールドに以下の関数を入力します。

    ```text
    If(IsBlank())
    ```

この式では、`If`関数を使用してif-else文を作成しています。

次に使用する関数は`IsBlank`で、文字列パラメータに値が存在するかどうかを確認します。参照する文字列パラメータは、**Ask with adaptive card**ノードの`commentsId`出力変数です。

![IfとIsBlank関数](../../../../../translated_images/9.2_12_IfIsBlank.07f7516c7e1f7579239a8b3833d64a14eb88dc245cae714b3e07d6298e907d51.ja.png)

1. 次に、`IsBlank`関数の後の**括弧内**をクリックします。ここに**Ask with adaptive card**ノードの`commentsId`出力変数を挿入します。

   括弧内に以下を入力してください。

    ```text
    Topic.commentsId
    ```

   その後、括弧の後にコンマを追加します。

   ![commentsId出力を参照](../../../../../translated_images/9.2_13_Topic.commentsId.1a04dc190dac334ebf6c4dbc1b6df1aad2e4bbdeeb3ef960871e93614381f079.ja.png)

1. 次にロジックを定義します。

   - **_true_**の場合 - `Topic.commentsId`文字列パラメータが空の場合、値を挿入しない。
   - **_false_**の場合 - `Topic.commentsId`文字列パラメータが空でない場合、commentsId変数の値を挿入する。

   文字列パラメータを囲む括弧の後に以下を入力してください。

    ```text
    "", Topic.commentsId)
    ```

   Power Fx式は以下のようになります。

    ```text
    If(IsBlank(Topic.commentsId), "", Topic.commentsId)
    ```

   素晴らしい！式が完成しました！🙌🏻 次に**Insert**を選択して、エージェントフローの入力パラメータをPower Fx式に設定します。

   ![Power Fx式](../../../../../translated_images/9.2_14_PowerFxExpression.80e76ea59bdb8f131d26edf2657923f4af9000768d44b06c0947115fd218698e.ja.png)

1. **トピックを保存**します。

### 9.3 ユーザー体験を向上させるために複数のノードを追加してRequest deviceトピックを更新する

次に、以下の2つのノードを追加します：

- **メッセージを送信** - 選択されたデバイスを参照し、リクエストが送信されたことを確認するメッセージとして機能します。
- **トピック管理** - 会話を終了するために、**End of conversation**ノードにリダイレクトします。

始めましょう！

1. エージェントフローノードの下にある**プラス + アイコン**を選択し、**メッセージを送信**ノードを選択します。

   ![メッセージ送信ノードを追加](../../../../../translated_images/9.3_01_AddSendAMessageNode.ac4111729a2602f8301ecffbcb263d692ecb43478aa9da63cae0dd58160f56c8.ja.png)

1. メッセージフィールドに以下を入力してください。

    ```text
    Thanks
    ```

   次に**変数を挿入**を選択し、ユーザーの名前を参照します。

   ![変数を挿入](../../../../../translated_images/9.3_02_InsertVariable.c5c9ebce61d1f442413d05f4437f74ee1d9c3a8c2ab696244937c56b5171f310.ja.png)

1. **System**タブを選択し、検索フィールドで`User`を検索します。**User.DisplayName**変数を選択します。

   ![システム変数を選択](../../../../../translated_images/9.3_03_SelectSystemVariable.47cfac2f3a727dbaf32ae960cbafe43ce9ed00f73edf01ac6d48e5b2b167e5fc.ja.png)

1. メッセージフィールドに以下を入力してください。

    ```text
    . Your selected device,
    ```

   次に**変数を挿入**を選択し、今回は**Custom**タブで**ModelValue**変数を選択します。

   その後、以下を入力してメッセージを完成させます。

    ```text
    , has been submitted and will be reviewed by your manager.
    ```

   メッセージは以下のようになります。

   ![メッセージ送信](../../../../../translated_images/9.3_04_SendAMessage.3f6c4b5e53da9c7f9fcf9d0c453a9b65e44e35ea4c1124947fb638d0b682d96d.ja.png)

1. 最後に、**メッセージを送信**ノードの下にある**プラス + アイコン**を選択し、**トピック管理**を選択して、**Go to another topic**を選択し、**End of Conversation**を選択します。

   ![トピック管理](../../../../../translated_images/9.3_05_EndOfConversation.3c6c96d03b29a4d0904dea09d96c62d6ad450fe60dd8d6b2fe9d31681d6cb147.ja.png)

1. **トピックを保存**します。

   ![保存](../../../../../translated_images/9.3_06_SaveTopic.8c9201fabce9f41af03d9f1beb9ce321e4ee9880a94edabe58b592bffebda80a.ja.png)

### 9.4 複数のシナリオでエージェントをテストする

素晴らしい仕事です!!! 😁 これでエージェントをテストできます。

#### 9.4.1 デバイスをリクエストし、適応型カードにコメントを入力する

1. **テストペインを更新**し、**アクティビティマップ**アイコンを選択して、エージェントに以下のメッセージを入力します。

    ```text
    I need a laptop
    ```

   ![エージェントをテスト](../../../../../translated_images/9.4_01_TestAgent_RequestDevice_Yes.e73a5076dcd7179901dc0536624a039e372e405a6aac7ab89a632ce81bacdc2e.ja.png)

1. エージェントが**Available devices**をトリガーし、利用可能なデバイスのリストを応答します。デバイスをリクエストするかどうかの質問に以下を回答します。

    ```text
    Yes
    ```

   ![はい](../../../../../translated_images/9.4_02_RequestDevice_Yes.25c34743bc168fde33f91743316e7bad87ee0e47150c93e9b82c4662404dcaba.ja.png)

1. エージェントが指示通りに**Request device**を呼び出し、適応型カードがエージェントメッセージに表示されていることに注目してください。

   **Surface Laptop 15**デバイスを選択し、以下をコメントとして追加します。

    ```text
    I need 16GB of RAM please
    ```

   ![デバイスを選択してコメントを入力](../../../../../translated_images/9.4_03_SelectDeviceAndEnterComment.570ea590309bf97edc40c6f7b53dbdc1174365860d8e8a4c32cfb7f1837621c2.ja.png)

1. 下にスクロールして**Submit Request**ボタンが表示されるまで進み、それを選択して適応型カードをエージェントに送信します。

   ![リクエストを送信](../../../../../translated_images/9.4_04_SubmitRequest.ce3f4f44b90243a18dbfb401548b9b3cefd3ea17d8293a1bc3377323e3449da9.ja.png)

1. エージェントが2つのコネクターアクションの接続認証にあなたの資格情報を使用することを許可するために**Allow**を選択します。

   ![許可](../../../../../translated_images/9.4_05_SelectAllow.f7b5bda068fbaee83dcb1cff03a52c946fb4d879137c55f4e5f9eb3953985e0e.ja.png)

1. エージェントが選択されたモデルを含む確認メッセージを表示し、その後**End of Conversation**トピックにリダイレクトします。すごいですね！

   ![リクエスト送信済み](../../../../../translated_images/9.4_06_RequestSubmitted.1d4d2e9afbc222a5ba79a4c254e7b2364d6eafc1a200ad6ac0aa142f9f10642d.ja.png)

1. **Yes**を選択して、**End of Conversation**トピックの残りを確認します。

   ![はいを選択](../../../../../translated_images/9.4_07_RedirectNode.e7b1390e4eafe8c2c815fc8ce7fdda56617d9fbeccb0d59423ad2899a8e5f897.ja.png)

1. 評価スケールカードで星を選択して体験を評価します。

   エージェントは**End of Conversation**トピックの最終**Question**ノードに進みます。**No**を選択してください。

   ![会話終了トピック](../../../../../translated_images/9.4_08_EndOfConversation.b35507f7f561633c0cb3b6c15dc007ae4197a72d58afd8ae616bea439bd6e148.ja.png)

1. トピックが完了し、最終メッセージがテストペインに表示されます。

   ![会話終了トピック](../../../../../translated_images/9.4_09_EndOfConversation.438891b82e322b8a2648533200fbcd01c660ab049223b0920cdd0fbfcdeeb888.ja.png)

1. メールアカウントの受信トレイを確認して、エージェントフローによってマネージャーに送信されたメールを確認してください。選択されたデバイスの詳細と適応型カードに入力されたメモが表示されます。

   ![受信メール](../../../../../translated_images/9.4_10_ReviewEmailMessageWithComment.b0138b0bb9d08aacbd8bbb02fdb633a6796b4131cf8d83212adeabaa1ce04a18.ja.png)

1. ハイパーリンクをクリックすると、ブラウザがデバイスのSharePointアイテムを読み込むはずです。素晴らしい！

   ![メール内リンクをクリック](../../../../../translated_images/9.4_11_SelectLinkInEmail.2179f17165b61ba1e8aee68e8de4c752d64b0780ad86e0fe9054580d9c24e208.ja.png)

#### 9.4.2 適応型カードにコメントを入力しないでデバイスをリクエストする

次に、コメントを入力しない場合のシナリオをテストします。

1. 以下の手順を繰り返します：

   - **テストペインを更新**し、**アクティビティマップ**アイコンを選択
   - メッセージ`I need a laptop`を入力
   - デバイスをリクエストするかどうかの質問に`Yes`と回答

   ![デバイスをリクエスト](../../../../../translated_images/9.4_12_RequestDevice_Yes.1e369b8a52547fade4b84a4e36b399ee0692c6edbaa778ba90fe9c15cae75c5c.ja.png)

1. 今回は**Surface Laptop 13**をデバイスとして選択し、コメントを入力しないでください。

   ![デバイスを選択](../../../../../translated_images/9.4_13_SelectDevice.d9ad15d17de3f06fd948bd529f116f7c05bedf79c016180d8a1dd7e378322b0e.ja.png)

1. **Submit Request**ボタンを選択してリクエストを送信します。

   ![リクエストを送信](../../../../../translated_images/9.4_14_SubmitRequest.a783ad8460bfb4485cfd2e97db2c065d9d6bf803279e3bd1569fe3e93548a578.ja.png)

1. 今回は受信トレイに届いたメールに、コメントとして**None**が表示されます。

   ![受信メール](../../../../../translated_images/9.4_15_ReviewEmailMessage.137f35152c9da4b4a02bebec5f0cc9e55cfa25679770ace003aa19482ed0f3eb.ja.png)

#### 9.4.3 デバイスをリクエストしない

最後のシナリオとして、デバイスをリクエストしない場合をテストします。この場合、エージェントの指示通りに**Goodbye**トピックが呼び出されるはずです。

1. 以下の手順を繰り返します：

   - **テストペインを更新**し、**アクティビティマップ**アイコンを選択
   - メッセージ`I need a laptop`を入力
   - 今回はデバイスをリクエストするかどうかの質問に`No`と回答

   ![エージェントをテスト](../../../../../translated_images/9.4_16_TestAgent_RequestDevice_No.85f205968f1d4083f20cc890a707748f8e06c01a19536cd299a13bdde2350de7.ja.png)

1. エージェントが**Goodbye**トピックを呼び出し、トピックで定義された質問が表示されます。

   ![Goodbyeトピックが呼び出される](../../../../../translated_images/9.4_17_Goodbye.05ee598a987237e02866647a9699b0efa7ac58d1f448497f956af2ee815cb961.ja.png)

## ✅ ミッション完了

おめでとうございます！👏🏻 エージェントフローを構築し、既存の**Request device**トピックに追加する方法、そしてエージェントを別のトピックにリダイレクトする方法を学びました。

これで**Lab 09 - Add an agent flow for automation and enhance topic capabilities**は終了です。次のレッスンに進むには、以下のリンクを選択してください。このレッスンのラボでのユースケースを次のレッスンでさらに拡張します。

⏭️ [次のレッスンへ進む **Add Event Triggers - Enable autonomous agent capabilities**](../10-add-event-triggers/README.md)

## 📚 実践的リソース

🔗 [エージェントフローの紹介: AIファーストワークフローによる自動化の変革](https://www.microsoft.com/microsoft-copilot/blog/copilot-studio/introducing-agent-flows-transforming-automation-with-ai-first-workflows/)

🔗 [エージェントフローの概要](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview?WT.mc_id=power-172621-ebenitez)

🔗 [エージェントフローをエージェントで使用する](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-172621-ebenitez)

🔗 [リファレンスガイドの関数一覧](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez)

📺 [Copilot Studioのエージェントフロー](https://www.youtube.com/watch?v=VJTKyk3Pr7s)

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/09-add-an-agent-flow" alt="Analytics" />

---

**免責事項**:  
この文書はAI翻訳サービス[Co-op Translator](https://github.com/Azure/co-op-translator)を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があります。元の言語で記載された文書を正式な情報源としてお考えください。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤解について、当社は責任を負いません。