<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-18T02:41:16+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "ja"
}
-->
# MCS Agent Academyへの貢献

MCS Agent Academyへの貢献に興味を持っていただきありがとうございます！このガイドでは、開発環境のセットアップ方法やドキュメント標準について説明します。

## ドキュメント標準

私たちは、Microsoftのドキュメント標準に従い、一貫性のある高品質なコンテンツを提供しています。効果的なドキュメント作成に関する包括的なガイダンスについては、以下をご参照ください：

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - Microsoftのスタイルと標準に従ったドキュメント作成の完全ガイド。

このリソースでは以下をカバーしています：

- 明確で簡潔な内容の書き方
- 適切なMarkdown構文の使用
- 一貫した用語の使用
- 効果的なドキュメント構造
- アクセシビリティのベストプラクティス

## Markdownのリント

私たちはmarkdownlintを使用して、すべてのドキュメントのフォーマットと品質を一貫して維持しています。これにより、リポジトリ全体の読みやすさとプロフェッショナルな標準を保つことができます。

### markdownlint-cli2のインストール

markdownlintをローカルで実行し、GitHubのワークフローと一致させるには、markdownlint-cli2をインストールしてください：

```powershell
npm install -g markdownlint-cli2
```

### markdownlintをローカルで実行する

インストール後、リポジトリ内のすべてのMarkdownファイルでmarkdownlintを実行できます：

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### 設定

markdownlintの設定は、リポジトリのルートにある`.markdownlint.jsonc`で定義されています。この設定では以下を行っています：

- 標準が定義されていないため、行の長さチェック（MD013）を無効化
- 一般的なテンプレートセクションのため、兄弟間でのみ見出しの重複を許可（MD024）
- インデントされたコンテンツが番号をリセットするため、順序付きリストの接頭辞検証（MD029）を全体的に無効化
- テキストにコードブロックを使用することを許可（MD046）

### markdownlintルールのインライン例外を追加する

グローバル設定でほとんどの一般的なシナリオを処理しますが、特定のMarkdownファイルで特定のmarkdownlintルールに対してインライン例外を追加する必要がある場合があります。以下はその方法の例です：

#### オプション1：次の行を無視する

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### オプション2：特定の範囲を無視する

```markdown
<!-- markdownlint-disable MD029 -->
1. First item
5. Fifth item (skips numbers but won't trigger MD029)
10. Tenth item
<!-- markdownlint-enable MD029 -->

<!-- markdownlint-disable MD013 -->
Multiple very long lines that exceed the character limit
can be placed between disable and enable comments
<!-- markdownlint-enable MD013 -->
```

#### オプション3：ファイル全体を無視する

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> これらをMarkdownファイルの最上部に配置して、ドキュメント全体の特定のルールを無効にします。

### インライン例外を使用するタイミング

以下のような場合にmarkdownlintルールの例外が必要になることがあります：

1. **MD029（順序付きリストの番号付け）**：他のコンテンツの後に番号付きリストを続ける場合、意図的に番号を1から始めない場合、または複雑なネストされたコンテンツの場合
2. **MD013（行の長さ）**：コード例、URL、または技術的な内容で行を分割するのが現実的でない場合
3. **MD033（インラインHTML）**：Markdownでは達成できないフォーマットのために特定のHTML要素が必要な場合
4. **MD041（最初の行の見出し）**：テンプレートファイルや意図的に見出しから始まらないドキュメントの場合

### ベストプラクティス

1. **例外は慎重に使用する**：ドキュメントの明確さのために必要な場合のみ例外を追加する
2. **例外にコメントを追加する**：例外を使用する場合、その理由を簡単に説明するコメントを追加する
3. **`markdownlint-disable-next-line`を優先する**：セクション全体を無効にするよりも正確
4. **コミット前にリントを実行する**：変更を提出する前に必ず`markdownlint-cli2 "**/*.md"`を実行する

> **Tip:** 提供されている`scripts/validate-markdown.ps1`PowerShellスクリプトを使用して、MarkdownファイルのmarkdownlintとcSpellチェックを迅速に実行できます。このスクリプトは、一般的なフォーマットとスペルチェックを自動化し、貢献がガイドラインに準拠していることを確認します。

リポジトリのルートからPowerShellを使用して実行できます：

```powershell
./scripts/validate-markdown.ps1
```

### よくあるmarkdownlintエラーと修正

- **MD036**：強調（`**太字テキスト**`）の代わりに適切な見出し（`## 見出し`）を使用する
- **MD007**：箇条書きのインデントを修正（4スペースではなく2スペースを使用）
- **MD022**：見出しの前後に空行を追加
- **MD032**：リストの前後に空行を追加
- **MD009**：行末の余分なスペースを削除

### GitHubワークフロー

リポジトリには、すべてのプルリクエストで自動的にmarkdownlintを実行するGitHubワークフローが含まれています。このワークフローでは：

- ローカルで実行できるmarkdownlint-cli2ツールを使用
- `SUPPORT.md`、`SECURITY.md`、`CODE_OF_CONDUCT.md`ファイルを除外
- `.markdownlint.jsonc`設定を使用
- 問題を警告として報告し、PRをマージ可能にしつつフォーマットの改善点を強調

### VS Code markdownlint拡張機能

VS Codeを使用している場合は、リアルタイムのMarkdownリントを行うために[markdownlint拡張機能](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)をインストールすることをお勧めします：

1. **拡張機能をインストール** - VS Code拡張機能マーケットプレイスでDavid Ansonの「markdownlint」を検索してインストール
2. **自動設定** - 拡張機能は自動的に`.markdownlint.jsonc`設定ファイルを使用
3. **リアルタイムフィードバック** - タイピング中にMarkdownフォーマットの問題を示す波線が表示される
4. **クイック修正** - `Ctrl+.`（MacではCmd+.`）を使用して多くの問題の自動修正を確認
5. **問題パネル** - VS Codeの問題パネルですべてのMarkdown問題を確認

これにより、変更をコミットする前にMarkdown標準に従うのが簡単になります。

## スペルチェック

私たちはcSpell（Code Spell Checker）を使用して、すべてのドキュメントで一貫したスペルを維持しています。これにより、リポジトリ全体でプロフェッショナルな品質を確保し、タイポを減らすことができます。

### cSpellのインストール

cSpellをローカルで実行するには、グローバルにインストールしてください：

```powershell
npm install -g cspell
```

### cSpellをローカルで実行する

インストール後、ドキュメントのスペルチェックを行うためにcSpellを実行できます：

```powershell
# Check all markdown files in the docs folder
cspell "docs/**/*.md"

# Check all markdown files in the repository
cspell "**/*.md"

# Check a specific file
cspell "docs/recruit/README.md"

# Show suggestions for misspelled words
cspell --show-suggestions "docs/**/*.md"

# Check with minimal output (cleaner display)
cspell --no-progress --no-summary "docs/**/*.md"
```

### 設定

cSpellの設定はリポジトリのルートにある`cspell.json`で定義されています。この設定では：

- Copilot、SharePoint、Dataverseなど、ドメイン固有のカスタム単語を含む
- スペルチェックが不要な一般的なファイルタイプ（画像、ビルドファイル）を無視
- スペルチェックの言語を英語に設定

### 新しい単語の追加

cSpellが誤字としてフラグを立てたが実際には正しい単語（製品名、技術用語、固有名詞など）に出会った場合は、`cspell.json`の`words`配列に追加できます：

```json
{
  "words": [
    "Contoso",
    "Dataverse",
    "YourNewWord"
  ]
}
```

### VS Code cSpell拡張機能

[Code Spell Checker拡張機能](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)を使用している場合、設定に単語を迅速に追加できます：

1. **スペルエラーを確認** - 誤字の下に波線が表示される
1. **クイック修正を使用** - 波線のある単語を右クリックするか、`Ctrl+.`（MacではCmd+.`）を使用
1. **設定に追加** - コンテキストメニューから「Spelling -> Add to cSpell configuration」を選択
1. **場所を選択** - 拡張機能が単語を自動的に`cspell.json`ファイルに追加

これにより、個々の単語のために設定ファイルを手動で編集するよりもはるかに速くなります。

### スペルのベストプラクティス

1. **コミット前にスペルチェックを実行**：変更を提出する前に必ず`cspell "docs/**/*.md"`を実行する
1. **誤字を無視するのではなく修正する**：可能であれば、実際のスペルエラーを修正し、単語リストに追加しない
1. **一貫した用語を使用する**：確立された製品名や技術用語に従う

## MkDocsを使用したローカルドキュメントプレビュー

私たちはMaterialテーマを使用したMkDocsを使用してドキュメントサイトを生成しています。プルリクエストを提出する前に変更をプレビューするためにローカルで実行できます。

📖 **詳細はこちら**: [MkDocs Documentation](https://www.mkdocs.org/) | [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)

### VS CodeでのPython環境のセットアップ

このプロジェクトの依存関係を分離するために仮想環境を使用することをお勧めします。VS Codeはこのプロセスを簡単にし、必要に応じてPythonのインストールを処理します。

> **GitHub Codespaces**: これらの手順はPythonが事前インストールされているGitHub Codespacesでも完全に機能します。

📖 **詳細はこちら**: [Python in VS Code](https://code.visualstudio.com/docs/languages/python) | [Python environments in VS Code](https://code.visualstudio.com/docs/python/environments)

#### 前提条件

**Python拡張機能をインストール**: Microsoftの[Python拡張機能](https://marketplace.visualstudio.com/items?itemName=ms-python.python)をVS Codeマーケットプレイスからインストールしてください。

#### VS Codeでのセットアップ

1. **仮想環境を作成**:
   - コマンドパレットを開く（Windows/Linuxでは`Ctrl+Shift+P`、Macでは`Cmd+Shift+P`）
   - 「Python: Create Environment」と入力して選択
   - 「Venv」（仮想環境）を選択
   - Pythonインタープリターが利用可能でない場合、VS CodeがPythonのインストールを案内
   - Pythonインタープリター（Python 3.8以上）を選択
   - VS Codeが`.venv`フォルダーを作成し、自動的にアクティブ化

2. **セットアップを確認**:
   - 新しい統合ターミナルを開く（Windows/Linuxでは`` Ctrl+Shift+` ``、Macでは`` Cmd+Shift+` ``、または`View > Terminal`）
   - ターミナルプロンプトに`(.venv)`が表示されるはず
   - `python --version`を実行して確認

> **Note**: 新しいターミナルを開くことでPython環境が正しくアクティブ化されます。新しい仮想環境を作成する代わりに既存のPython環境を使用したい場合は、コマンドパレットで「Python: Select Interpreter」を使用して希望の環境を選択できます。

### VS CodeでMkDocsをインストール

VS CodeでPython環境をセットアップした後、MkDocsとMaterialテーマをインストールします：

1. **VS Codeの統合ターミナルを開く**（`Ctrl+`` `または`View > Terminal`）
2. **仮想環境がアクティブであることを確認**（プロンプトに`(.venv)`が表示されるはず）
3. **パッケージをインストール**：

   ```bash
   pip install mkdocs mkdocs-material
   ```

### VS CodeでMkDocsを実行

ホットリロード付きのローカル開発サーバーを開始するには：

1. **VS Codeの統合ターミナルで以下を実行**：

   ```bash
   mkdocs serve
   ```

2. **サイトは以下で利用可能**: `http://127.0.0.1:8000/agent-academy/`

### VS Code Simple Browserでのプレビュー

VS Codeを離れることなく最適な開発体験を得るために：

1. **統合ターミナルでMkDocsサーバーを開始**（上記の手順を参照）
2. **Simple Browserを開く**:
   - **方法1**: コマンドパレットを開く（`Ctrl+Shift+P` / `Cmd+Shift+P`）
   - 「Simple Browser: Show」と入力して選択
   - URLを入力: `http://127.0.0.1:8000/agent-academy/`

   - **方法2**: ターミナル出力のURLを右クリックして「リンクをフォロー」を選択

   - **方法3**: ターミナルのURLを`Ctrl+クリック`（Windows）または`Cmd+クリック`（Mac）で開く

3. **ブラウザの位置を調整**: Simple Browserをエディタの横にドッキングして、編集とプレビューを並べて表示

### VS Codeワークスペースの利点

VS Code内で作業することで以下の利点があります：

- **統合ターミナル**: アプリケーション間を切り替える必要がない
- **並列プレビュー**: Markdownを編集しながら変更を同時に確認  
- **リンクナビゲーション**: ターミナルのURLを直接クリックしてSimple Browserを開く
- **拡張機能の統合**: Python、markdownlint、cSpell拡張機能が連携
- **Git統合**: コミットやプルリクエストのための組み込みソースコントロールパネル

### ホットリロード機能

`mkdocs serve`を実行すると以下が得られます：

- **自動リフレッシュ**: `docs/`フォルダー内の任意の`.md`ファイルへの変更がブラウザを自動的にリロード
- **設定の更新**: `mkdocs.yml`への変更も再ビルドをトリガー
- **リアルタイムプレビュー**: フォーマット、リンク、コンテンツの変更を即座に確認
- **リンク検証**: MkDocsが内部リンクの破損を警告

### VS Codeでの便利なMkDocsコマンド

VS Codeの統合ターミナルで以下のコマンドを実行してください：

```bash
# Start development server
mkdocs serve

# Build static site (for production)
mkdocs build

# Serve with strict mode (treats warnings as errors)
mkdocs serve --strict

# Show version
mkdocs --version
```

> **Tip:** すべての依存関係をチェックしながらローカルでドキュメントをプレビューするには、`scripts/serve-docs.ps1`PowerShellスクリプトを使用してください。

### ローカルプレビューの利点

- **即時フィードバック**: MaterialテーマでMarkdownがどのようにレンダリングされるかを確認
- **リンク検証**: 公開前に壊れたリンクを検出
- **ナビゲーションテスト**: コンテンツが正しいセクションに表示されることを確認
- **モバイルプレビュー**: 異なる画面サイズでコンテンツの見え方をテスト
- **パフォーマンスチェック**: 画像やアセットが正しく読み込まれることを確認

## 質問がありますか？

Markdownのフォーマットや貢献ガイドラインについて質問がある場合は：

1. この貢献ガイドを確認してください
1. 既存の問題で類似の質問を確認してください
1. 新しい問題を開いてください

貢献を楽しんでください！ 🚀

---

**免責事項**:  
この文書はAI翻訳サービス[Co-op Translator](https://github.com/Azure/co-op-translator)を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があります。元の言語で記載された文書を正式な情報源としてお考えください。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤認について、当社は一切の責任を負いません。