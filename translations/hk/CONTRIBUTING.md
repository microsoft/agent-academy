<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-21T23:41:15+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "hk"
}
-->
# 貢獻 MCS Agent Academy

感謝您對 MCS Agent Academy 的貢獻感興趣！本指南將幫助您設置開發環境並了解我們的文檔標準。

## 文檔標準

我們遵循 Microsoft 的文檔標準，以確保內容的一致性和高質量。欲了解撰寫有效文檔的全面指南，請參閱：

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - 撰寫符合 Microsoft 風格和標準的文檔完整指南。

此資源涵蓋：

- 撰寫清晰、簡潔的內容
- 使用正確的 markdown 語法
- 遵循一致的術語
- 有效地結構化文檔
- 無障礙最佳實踐

## Markdown 格式檢查

我們使用 markdownlint 來確保所有文檔的格式和質量一致。這有助於在整個存儲庫中保持可讀性和專業標準。

### 安裝 markdownlint-cli2

要在本地運行 markdownlint 並匹配我們的 GitHub 工作流程，請安裝 markdownlint-cli2：

```powershell
npm install -g markdownlint-cli2
```

### 在本地運行 markdownlint

安裝完成後，您可以在存儲庫中的所有 markdown 文件上運行 markdownlint：

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### 配置

我們的 markdownlint 配置定義在存儲庫根目錄的 `.markdownlint.jsonc` 文件中。此配置：

- 禁用行長檢查 (MD013)，因為我們尚未定義標準
- 允許僅在兄弟節點中重複標題 (MD024)，以適應常見模板部分
- 全局禁用有序列表前綴驗證 (MD029)，因為縮進內容會重置編號
- 允許將代碼塊用於文本 (MD046)

### 為 markdownlint 規則添加內聯例外

雖然我們的全局配置處理了大多數常見場景，但您可能會遇到需要在個別文件中為特定 markdownlint 規則添加內聯例外的情況。以下是如何執行此操作的示例：

#### 選項 1：忽略下一行

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### 選項 2：忽略特定範圍

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

#### 選項 3：忽略整個文件

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> 將這些放在 markdown 文件的最頂部，以禁用整個文檔的特定規則

### 何時使用內聯例外

在以下情況下，您可能需要為各種 markdownlint 規則添加例外：

1. **MD029 (有序列表編號)**：在其他內容之後繼續編號列表、有意不從 1 開始編號或處理複雜的嵌套內容
2. **MD013 (行長)**：代碼示例、URL 或無法合理分行的技術內容
3. **MD033 (內聯 HTML)**：需要特定 HTML 元素進行格式化，而 markdown 無法實現
4. **MD041 (首行標題)**：模板文件或有意不以標題開頭的文檔

### 最佳實踐

1. **謹慎使用例外**：僅在文檔清晰性需要時添加例外
2. **為例外添加註解**：使用例外時，考慮添加簡短註解說明原因
3. **偏好 `markdownlint-disable-next-line`**：比禁用整個部分更精確
4. **提交前運行格式檢查**：始終在提交更改前運行 `markdownlint-cli2 "**/*.md"`

> **提示**：您可以使用提供的 `scripts/validate-markdown.ps1` PowerShell 腳本快速檢查 markdown 文件的 markdownlint 和 cSpell。此腳本有助於自動化常見格式和拼寫檢查，確保您的貢獻符合我們的指南。

您可以在存儲庫根目錄使用 PowerShell 運行它：

```powershell
./scripts/validate-markdown.ps1
```

### 常見 markdownlint 錯誤及修復

- **MD036**：使用正確的標題 (`## 標題`) 而非強調 (`**加粗文本**`)
- **MD007**：修復無序列表縮進（使用 2 個空格，而非 4 個）
- **MD022**：在標題前後添加空行
- **MD032**：在列表前後添加空行
- **MD009**：移除行尾的多餘空格

### GitHub 工作流程

我們的存儲庫包含一個 GitHub 工作流程，會自動在所有拉取請求上運行 markdownlint。該工作流程：

- 使用與您本地運行的相同 markdownlint-cli2 工具
- 排除 `SUPPORT.md`、`SECURITY.md` 和 `CODE_OF_CONDUCT.md` 文件
- 使用我們的 `.markdownlint.jsonc` 配置
- 將問題報告為警告，允許合併 PR 同時突出格式化改進機會

### VS Code markdownlint 擴展

如果您使用 VS Code，我們建議安裝 [markdownlint 擴展](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) 以進行實時 markdown 格式檢查：

1. **安裝擴展** - 在 VS Code 擴展市場搜索 David Anson 的 "markdownlint"
2. **自動配置** - 擴展會自動使用您的 `.markdownlint.jsonc` 配置文件
3. **實時反饋** - 在您輸入時，看到 markdown 格式問題的波浪下劃線
4. **快速修復** - 使用 `Ctrl+.`（Mac 上為 Cmd+.）查看許多問題的可用自動修復
5. **問題面板** - 在 VS Code 問題面板查看所有 markdown 問題

這提供了即時反饋，使您在提交更改之前更容易遵循 markdown 標準。

## 拼寫檢查

我們使用 cSpell（代碼拼寫檢查器）來保持文檔中的拼寫一致性。這有助於確保專業品質並減少存儲庫中的拼寫錯誤。

### 安裝 cSpell

要在本地運行 cSpell，請全局安裝它：

```powershell
npm install -g cspell
```

### 在本地運行 cSpell

安裝完成後，您可以運行 cSpell 來檢查文檔中的拼寫：

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

### 配置

我們的 cSpell 配置定義在存儲庫根目錄的 `cspell.json` 文件中。此配置：

- 包含特定於我們領域的自定義詞（如 Copilot、SharePoint、Dataverse 等）
- 忽略不需要拼寫檢查的常見文件類型（如圖片、構建文件）
- 設置拼寫檢查語言為英語

### 添加新詞

如果您遇到 cSpell 標記為拼寫錯誤但實際上正確的詞（如產品名稱、技術術語或專有名詞），您可以將其添加到 `cspell.json` 的 `words` 數組中：

```json
{
  "words": [
    "Contoso",
    "Dataverse",
    "YourNewWord"
  ]
}
```

### VS Code cSpell 擴展

如果您使用 VS Code 並安裝了 [Code Spell Checker 擴展](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)，您可以快速將詞添加到配置中：

1. **查看拼寫錯誤** - 查找拼寫錯誤詞的波浪下劃線
1. **使用快速修復** - 右鍵點擊下劃線詞或使用 `Ctrl+.`（Mac 上為 Cmd+.）
1. **添加到配置** - 從上下文菜單中選擇 "Spelling -> Add to cSpell configuration"
1. **選擇位置** - 擴展會自動將詞添加到您的 `cspell.json` 文件中

這比手動編輯配置文件以添加單個詞更快。

### 拼寫最佳實踐

1. **提交前運行拼寫檢查**：始終在提交更改前運行 `cspell "docs/**/*.md"`
1. **修復拼寫錯誤而非忽略**：盡可能修復實際拼寫錯誤，而不是將其添加到詞列表
1. **使用一致術語**：遵循已建立的產品名稱和技術術語

## 使用 MkDocs 本地預覽文檔

我們使用 MkDocs 和 Material 主題生成文檔網站。您可以在本地運行它以預覽更改，然後再提交拉取請求。

📖 **了解更多**：[MkDocs 文檔](https://www.mkdocs.org/) | [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)

### 在 VS Code 中設置 Python 環境

我們建議使用虛擬環境來隔離此項目的依賴項。VS Code 使此過程變得簡單，並且如果需要，會處理 Python 安裝。

> **GitHub Codespaces**：這些指導在 GitHub Codespaces 中完美運行，該環境預裝了 Python 並準備好使用 VS Code。

📖 **了解更多**：[VS Code 中的 Python](https://code.visualstudio.com/docs/languages/python) | [VS Code 中的 Python 環境](https://code.visualstudio.com/docs/python/environments)

#### 先決條件

**安裝 Python 擴展**：從 VS Code 市場安裝 Microsoft 的 [Python 擴展](https://marketplace.visualstudio.com/items?itemName=ms-python.python)，如果尚未安裝。

#### 在 VS Code 中設置

1. **創建虛擬環境**：
   - 打開命令面板（Windows/Linux 上按 `Ctrl+Shift+P`，Mac 上按 `Cmd+Shift+P`）
   - 輸入 "Python: Create Environment" 並選擇它
   - 選擇 "Venv"（虛擬環境）
   - 如果沒有可用的 Python 解釋器，VS Code 會引導您安裝 Python
   - 選擇您的 Python 解釋器（Python 3.8+）
   - VS Code 會創建 `.venv` 文件夾並自動激活它

2. **驗證設置**：
   - 打開新的集成終端（Windows/Linux 上按 `` Ctrl+Shift+` ``，Mac 上按 `` Cmd+Shift+` `` 或選擇 `View > Terminal`）
   - 您應該在終端提示符中看到 `(.venv)`
   - 運行：`python --version` 以驗證

> **注意**：打開新終端可確保 Python 環境正確激活。如果您更喜歡使用現有的 Python 環境而不是創建新的虛擬環境，可以使用命令面板中的 "Python: Select Interpreter" 並選擇您偏好的環境。

### 在 VS Code 中安裝 MkDocs

在 VS Code 中設置 Python 環境後，安裝 MkDocs 和 Material 主題：

1. **打開 VS Code 的集成終端**（按 `Ctrl+`` ` 或選擇 `View > Terminal`）
2. **確保您的虛擬環境已激活**（您應該在提示符中看到 `(.venv)`）
3. **安裝包**：

   ```bash
   pip install mkdocs mkdocs-material
   ```

### 在 VS Code 中運行 MkDocs

要啟動具有熱重載功能的本地開發服務器：

1. **在 VS Code 的集成終端中**，運行：

   ```bash
   mkdocs serve
   ```

2. **網站將可用於**：`http://127.0.0.1:8000/agent-academy/`

### 在 VS Code 簡易瀏覽器中預覽

為了獲得最佳的開發體驗而不離開 VS Code：

1. **在集成終端中啟動 MkDocs 服務器**（如上所示）
2. **打開簡易瀏覽器**：
   - **方法 1**：打開命令面板（`Ctrl+Shift+P` / `Cmd+Shift+P`）
   - 輸入 "Simple Browser: Show" 並選擇它
   - 輸入 URL：`http://127.0.0.1:8000/agent-academy/`

   - **方法 2**：右鍵點擊終端輸出中的 URL 並選擇 "Follow Link"

   - **方法 3**：在終端中的 URL 上使用 `Ctrl+Click`（Windows）或 `Cmd+Click`（Mac）

3. **調整瀏覽器位置**：您可以將簡易瀏覽器停靠在編輯器旁邊，以便並排編輯和預覽

### VS Code 工作區的優勢

完全在 VS Code 中工作提供以下優勢：

- **集成終端**：無需在應用程序之間切換
- **並排預覽**：編輯 markdown 並同時查看更改  
- **鏈接導航**：直接點擊終端 URL 打開簡易瀏覽器
- **擴展集成**：Python、markdownlint 和 cSpell 擴展協同工作
- **Git 集成**：內置源代碼控制面板，用於提交和拉取請求

### 熱重載功能

運行 `mkdocs serve` 時，您將獲得：

- **自動刷新**：對 `docs/` 文件夾中的任何 `.md` 文件的更改會自動刷新瀏覽器
- **配置更新**：對 `mkdocs.yml` 的更改也會觸發重建
- **實時預覽**：即時查看您的格式、鏈接和內容更改
- **鏈接驗證**：MkDocs 會警告您有關內部鏈接的問題

### 在 VS Code 中使用的有用 MkDocs 命令

在 VS Code 的集成終端中運行以下命令：

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

> **提示**：要在本地預覽文檔並檢查所有依賴項，請使用 `scripts/serve-docs.ps1` PowerShell 腳本。

### 本地預覽的好處

- **即時反饋**：查看您的 markdown 在 Material 主題中的渲染效果
- **鏈接驗證**：在鏈接上線之前捕捉斷鏈
- **導航測試**：驗證您的內容是否出現在正確的部分
- **移動預覽**：測試您的內容在不同屏幕尺寸上的顯示效果
- **性能檢查**：確保圖片和資產正常加載

## 有問題嗎？

如果您對 markdown 格式或貢獻指南有疑問，請：

1. 查看本貢獻指南
1. 檢查現有問題是否有類似問題
1. 開啟新問題

祝您貢獻愉快！🚀

---

**免責聲明**：  
此文件已使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於重要信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。