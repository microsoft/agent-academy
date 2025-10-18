<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-18T02:40:56+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "zh"
}
-->
# 贡献指南：MCS Agent Academy

感谢您对 MCS Agent Academy 的贡献感兴趣！本指南将帮助您设置开发环境并了解我们的文档标准。

## 文档标准

我们遵循微软的文档标准，以确保内容的一致性和高质量。有关撰写有效文档的全面指导，请参考：

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - 遵循微软风格和标准的文档撰写完整指南。

此资源涵盖以下内容：

- 撰写清晰简洁的内容
- 使用正确的 Markdown 语法
- 遵循一致的术语
- 有效地组织文档结构
- 无障碍最佳实践

## Markdown 代码检查

我们使用 markdownlint 来确保所有文档的格式和质量一致。这有助于维护整个代码库的可读性和专业标准。

### 安装 markdownlint-cli2

要在本地运行 markdownlint 并与我们的 GitHub 工作流程保持一致，请安装 markdownlint-cli2：

```powershell
npm install -g markdownlint-cli2
```

### 本地运行 markdownlint

安装完成后，您可以在代码库中的所有 Markdown 文件上运行 markdownlint：

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### 配置

我们的 markdownlint 配置定义在代码库根目录的 `.markdownlint.jsonc` 文件中。此配置：

- 禁用行长度检查 (MD013)，因为我们尚未定义标准
- 允许仅在兄弟节点中重复标题 (MD024)，以适应常见的模板部分
- 全局禁用有序列表前缀验证 (MD029)，因为缩进内容会重置编号
- 允许将代码块用于文本 (MD046)

### 为 markdownlint 规则添加内联例外

虽然我们的全局配置处理了大多数常见场景，但在某些情况下，您可能需要在单个文件中为特定的 markdownlint 规则添加内联例外。以下是一些示例：

#### 选项 1：忽略下一行

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### 选项 2：忽略特定范围

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

#### 选项 3：忽略整个文件

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> 将这些放在 Markdown 文件的最顶部，以禁用整个文档的特定规则

### 何时使用内联例外

在以下情况下，您可能需要为 markdownlint 规则添加例外：

1. **MD029（有序列表编号）**：在其他内容之后继续编号列表、不从 1 开始的有意编号或复杂的嵌套内容
2. **MD013（行长度）**：代码示例、URL 或无法合理分行的技术内容
3. **MD033（内联 HTML）**：需要特定 HTML 元素来实现 Markdown 无法完成的格式
4. **MD041（首行标题）**：模板文件或有意不以标题开头的文档

### 最佳实践

1. **谨慎使用例外**：仅在文档清晰性需要时添加例外
2. **为例外添加注释**：使用例外时，请考虑添加简短的注释说明原因
3. **优先使用 `markdownlint-disable-next-line`**：比禁用整个部分更精确
4. **提交前运行代码检查**：在提交更改之前，始终运行 `markdownlint-cli2 "**/*.md"`

> **提示**：您可以使用提供的 `scripts/validate-markdown.ps1` PowerShell 脚本快速对 Markdown 文件运行 markdownlint 和 cSpell 检查。此脚本有助于自动化常见的格式和拼写检查，以确保您的贡献符合我们的指南。

您可以在代码库根目录使用 PowerShell 运行：

```powershell
./scripts/validate-markdown.ps1
```

### 常见的 markdownlint 错误及修复

- **MD036**：使用正确的标题（`## 标题`）而不是强调（`**加粗文本**`）
- **MD007**：修复无序列表缩进（使用 2 个空格，而不是 4 个）
- **MD022**：在标题前后添加空行
- **MD032**：在列表前后添加空行
- **MD009**：删除行尾的多余空格

### GitHub 工作流程

我们的代码库包含一个 GitHub 工作流程，会自动在所有拉取请求上运行 markdownlint。该工作流程：

- 使用与您本地运行的相同 markdownlint-cli2 工具
- 排除 `SUPPORT.md`、`SECURITY.md` 和 `CODE_OF_CONDUCT.md` 文件
- 使用我们的 `.markdownlint.jsonc` 配置
- 将问题报告为警告，允许合并 PR，同时突出显示格式改进的机会

### VS Code markdownlint 扩展

如果您使用 VS Code，我们建议安装 [markdownlint 扩展](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) 以实现实时 Markdown 代码检查：

1. **安装扩展** - 在 VS Code 扩展市场中搜索 David Anson 的 "markdownlint"
2. **自动配置** - 扩展会自动使用您的 `.markdownlint.jsonc` 配置文件
3. **实时反馈** - 在输入时看到 Markdown 格式问题的波浪下划线
4. **快速修复** - 使用 `Ctrl+.`（Mac 上为 Cmd+.）查看许多问题的自动修复选项
5. **问题面板** - 在 VS Code 的问题面板中查看所有 Markdown 问题

这提供了即时反馈，使您在提交更改之前更容易遵循 Markdown 标准。

## 拼写检查

我们使用 cSpell（代码拼写检查器）来维护文档中的一致拼写。这有助于确保专业质量并减少代码库中的拼写错误。

### 安装 cSpell

要在本地运行 cSpell，请全局安装它：

```powershell
npm install -g cspell
```

### 本地运行 cSpell

安装完成后，您可以运行 cSpell 检查文档中的拼写：

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

我们的 cSpell 配置定义在代码库根目录的 `cspell.json` 文件中。此配置：

- 包含特定于我们领域的自定义词汇（如 Copilot、SharePoint、Dataverse 等）
- 忽略不需要拼写检查的常见文件类型（如图片、构建文件）
- 设置语言为英语进行拼写检查

### 添加新词汇

如果您遇到 cSpell 标记为拼写错误但实际上正确的词汇（如产品名称、技术术语或专有名词），可以将其添加到 `cspell.json` 的 `words` 数组中：

```json
{
  "words": [
    "Contoso",
    "Dataverse",
    "YourNewWord"
  ]
}
```

### VS Code cSpell 扩展

如果您在 VS Code 中使用 [Code Spell Checker 扩展](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)，可以快速将词汇添加到您的配置中：

1. **查看拼写错误** - 查找拼写错误单词上的波浪下划线
1. **使用快速修复** - 右键单击带下划线的单词或使用 `Ctrl+.`（Mac 上为 Cmd+.）
1. **添加到配置** - 从上下文菜单中选择 "Spelling -> Add to cSpell configuration"
1. **选择位置** - 扩展会自动将单词添加到您的 `cspell.json` 文件中

这比手动编辑配置文件更快。

### 拼写检查最佳实践

1. **提交前运行拼写检查**：在提交更改之前，始终运行 `cspell "docs/**/*.md"`
1. **修复拼写错误而不是忽略**：尽可能修复实际的拼写错误，而不是将其添加到词汇列表
1. **使用一致术语**：坚持使用已建立的产品名称和技术术语

## 使用 MkDocs 本地预览文档

我们使用带有 Material 主题的 MkDocs 来生成我们的文档网站。您可以在本地运行它以预览更改，然后再提交拉取请求。

📖 **了解更多**：[MkDocs 文档](https://www.mkdocs.org/) | [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)

### 在 VS Code 中设置 Python 环境

我们建议使用虚拟环境来隔离此项目的依赖项。VS Code 使此过程变得简单，并将在需要时处理 Python 安装。

> **GitHub Codespaces**：这些说明在 GitHub Codespaces 中完美适用，Python 已预安装，VS Code 环境已准备就绪。

📖 **了解更多**：[VS Code 中的 Python](https://code.visualstudio.com/docs/languages/python) | [VS Code 中的 Python 环境](https://code.visualstudio.com/docs/python/environments)

#### 前提条件

**安装 Python 扩展**：从 VS Code 市场安装 Microsoft 的 [Python 扩展](https://marketplace.visualstudio.com/items?itemName=ms-python.python)，如果尚未安装。

#### 在 VS Code 中设置

1. **创建虚拟环境**：
   - 打开命令面板（Windows/Linux 上按 `Ctrl+Shift+P`，Mac 上按 `Cmd+Shift+P`）
   - 输入 "Python: Create Environment" 并选择它
   - 选择 "Venv"（虚拟环境）
   - 如果没有可用的 Python 解释器，VS Code 会引导您安装 Python
   - 选择您的 Python 解释器（Python 3.8+）
   - VS Code 会创建 `.venv` 文件夹并自动激活它

2. **验证设置**：
   - 打开新的集成终端（Windows/Linux 上按 `` Ctrl+Shift+` ``，Mac 上按 `` Cmd+Shift+` `` 或选择 `View > Terminal`）
   - 您应该在终端提示符中看到 `(.venv)`
   - 运行：`python --version` 进行验证

> **注意**：打开新终端可确保正确激活 Python 环境。如果您更喜欢使用现有的 Python 环境而不是创建新的虚拟环境，可以从命令面板中使用 "Python: Select Interpreter" 并选择您喜欢的环境。

### 在 VS Code 中安装 MkDocs

在 VS Code 中设置好 Python 环境后，安装 MkDocs 和 Material 主题：

1. **打开 VS Code 的集成终端**（按 `Ctrl+`` ` 或选择 `View > Terminal`）
2. **确保您的虚拟环境已激活**（您应该在提示符中看到 `(.venv)`）
3. **安装相关包**：

   ```bash
   pip install mkdocs mkdocs-material
   ```

### 在 VS Code 中运行 MkDocs

要启动带有热重载功能的本地开发服务器：

1. **在 VS Code 的集成终端中**运行：

   ```bash
   mkdocs serve
   ```

2. **网站将可通过以下地址访问**：`http://127.0.0.1:8000/agent-academy/`

### 在 VS Code Simple Browser 中预览

为了获得最佳的开发体验而无需离开 VS Code：

1. **在集成终端中启动 MkDocs 服务器**（如上所示）
2. **打开 Simple Browser**：
   - **方法 1**：打开命令面板（`Ctrl+Shift+P` / `Cmd+Shift+P`）
   - 输入 "Simple Browser: Show" 并选择它
   - 输入 URL：`http://127.0.0.1:8000/agent-academy/`

   - **方法 2**：右键单击终端输出中的 URL 并选择 "Follow Link"

   - **方法 3**：在终端中的 URL 上使用 `Ctrl+Click`（Windows）或 `Cmd+Click`（Mac）

3. **调整浏览器位置**：您可以将 Simple Browser 停靠在编辑器旁边，以便并排编辑和预览

### VS Code 工作区的优势

完全在 VS Code 中工作具有以下优势：

- **集成终端**：无需在应用程序之间切换
- **并排预览**：编辑 Markdown 并同时查看更改  
- **链接导航**：直接点击终端 URL 打开 Simple Browser
- **扩展集成**：Python、markdownlint 和 cSpell 扩展协同工作
- **Git 集成**：内置的源代码控制面板，用于提交和拉取请求

### 热重载功能

运行 `mkdocs serve` 时，您将获得：

- **自动刷新**：对 `docs/` 文件夹中的任何 `.md` 文件的更改会自动刷新浏览器
- **配置更新**：对 `mkdocs.yml` 的更改也会触发重建
- **实时预览**：即时查看格式、链接和内容的更改
- **链接验证**：MkDocs 会警告您关于内部链接的错误

### 在 VS Code 中使用的有用 MkDocs 命令

在 VS Code 的集成终端中运行以下命令：

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

> **提示**：要在本地预览文档并检查所有依赖项，请使用 `scripts/serve-docs.ps1` PowerShell 脚本。

### 本地预览的优势

- **即时反馈**：查看您的 Markdown 在 Material 主题下的渲染效果
- **链接验证**：在上线之前捕获断开的链接
- **导航测试**：验证您的内容是否出现在正确的部分
- **移动端预览**：测试您的内容在不同屏幕尺寸上的显示效果
- **性能检查**：确保图片和资源正确加载

## 有问题？

如果您对 Markdown 格式或贡献指南有疑问，请：

1. 查看本贡献指南
1. 检查现有问题是否有类似问题
1. 开一个新问题

祝您贡献愉快！🚀

---

**免责声明**：  
本文档使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。原始语言的文档应被视为权威来源。对于关键信息，建议使用专业人工翻译。我们不对因使用此翻译而产生的任何误解或误读承担责任。