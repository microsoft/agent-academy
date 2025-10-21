<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-21T17:31:22+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "my"
}
-->
# MCS Agent Academy သို့ အထောက်အကူပြုခြင်း

MCS Agent Academy သို့ အထောက်အကူပြုရန် စိတ်ဝင်စားမှုအတွက် ကျေးဇူးတင်ပါတယ်! ဒီလမ်းညွှန်စာတမ်းက သင့်ရဲ့ ဖွံ့ဖြိုးရေးပတ်ဝန်းကျင်ကို စတင်တည်ဆောက်ရန်နှင့် ကျွန်ုပ်တို့ရဲ့ စာတမ်းစံနှုန်းများကို နားလည်ရန် အကူအညီပေးပါမယ်။

## စာတမ်းစံနှုန်းများ

ကျွန်ုပ်တို့ Microsoft ရဲ့ စာတမ်းစံနှုန်းများကို လိုက်နာပြီး အဆင်ပြေပြီး အရည်အသွေးမြင့်သော အကြောင်းအရာများကို အတူတူတည်ဆောက်ပါသည်။ ထိရောက်သော စာတမ်းရေးသားမှုအတွက် လမ်းညွှန်ချက်များကို အပြည့်အစုံ သိရှိရန် အောက်ပါကို ရည်ညွှန်းပါ:

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - Microsoft ရဲ့ စတိုင်နှင့် စံနှုန်းများကို လိုက်နာသော စာတမ်းရေးသားမှုအတွက် လမ်းညွှန်ချက်များ။

ဒီအရင်းအမြစ်မှာ ပါဝင်တာတွေက:

- ရှင်းလင်းပြီး တိကျသော အကြောင်းအရာရေးသားခြင်း
- သင့်တော်သော markdown syntax ကို အသုံးပြုခြင်း
- တူညီသော အဓိပ္ပါယ်အမည်များကို လိုက်နာခြင်း
- စာတမ်းများကို ထိရောက်စွာ ဖွဲ့စည်းခြင်း
- လက်လှမ်းမီမှုအကောင်းဆုံး လုပ်နည်းများ

## Markdown Linting

ကျွန်ုပ်တို့ markdownlint ကို အသုံးပြုပြီး စာတမ်းများအားလုံးမှာ အဆင်ပြေမှုနှင့် အရည်အသွေးကို တူညီစွာ ထိန်းသိမ်းထားပါတယ်။ ဒါက repository တစ်ခုလုံးမှာ ဖတ်ရှုနိုင်မှုနှင့် ပရော်ဖက်ရှင်နယ်စံနှုန်းများကို ထိန်းသိမ်းထားနိုင်စေပါတယ်။

### markdownlint-cli2 ကို ထည့်သွင်းခြင်း

markdownlint ကို ဒေသတွင်းမှာ run လုပ်ပြီး ကျွန်ုပ်တို့ရဲ့ GitHub workflow နဲ့ ကိုက်ညီစေဖို့ markdownlint-cli2 ကို ထည့်သွင်းပါ:

```powershell
npm install -g markdownlint-cli2
```

### markdownlint ကို ဒေသတွင်းမှာ run လုပ်ခြင်း

ထည့်သွင်းပြီးနောက် repository ထဲမှာရှိတဲ့ markdown ဖိုင်အားလုံးကို markdownlint နဲ့ run လုပ်နိုင်ပါတယ်:

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### Configuration

ကျွန်ုပ်တို့ markdownlint configuration ကို repository ရဲ့ root မှာရှိတဲ့ `.markdownlint.jsonc` မှာ သတ်မှတ်ထားပါတယ်။ ဒီ configuration:

- Line length စစ်ဆေးမှု (MD013) ကို ပိတ်ထားပြီး standard မသတ်မှတ်ထားသေးပါ
- Template အပိုင်းများအတွက် siblings တွင်သာ duplicate headings ကို ခွင့်ပြုထားသည် (MD024)
- Indented content numbering ပြန်စတင်မှုကြောင့် ordered list prefix validation (MD029) ကို global ပိတ်ထားသည်
- Text အတွက် code blocks အသုံးပြုမှုကို ခွင့်ပြုထားသည် (MD046)

### markdownlint rule များအတွက် inline exceptions ထည့်သွင်းခြင်း

Global configuration က အများဆုံး scenario များကို ကိုင်တွယ်ပေးနိုင်သော်လည်း markdownlint rule များအတွက် individual ဖိုင်များတွင် inline exceptions ထည့်သွင်းရန် လိုအပ်နိုင်ပါသည်။ အောက်မှာ ဥပမာများကို ကြည့်ပါ:

#### Option 1: နောက်တစ်ကြောင်းအတွက် မထည့်ပါ

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### Option 2: အကွာအဝေးအတွက် မထည့်ပါ

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

#### Option 3: ဖိုင်တစ်ခုလုံးအတွက် မထည့်ပါ

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> Markdown ဖိုင်ရဲ့ အပေါ်ဆုံးမှာ ဒီအရာတွေကို ထည့်သွင်းပြီး စာတမ်းတစ်ခုလုံးအတွက် rule များကို ပိတ်ထားပါ

### inline exceptions ကို ဘယ်အချိန်မှာ အသုံးပြုမလဲ

markdownlint rule များအတွက် exceptions လိုအပ်နိုင်တဲ့ အခြေအနေများ:

1. **MD029 (Ordered list numbering)**: အခြား content အပြီး numbered lists ကို ဆက်လက်အသုံးပြုခြင်း၊ intentional numbering မ 1 မှ စတင်ခြင်း၊ nested content ရှုပ်ထွေးမှု
2. **MD013 (Line length)**: Code examples, URLs, သို့မဟုတ် line များအတွင်းမှာ reasonable မဖြတ်နိုင်တဲ့ technical content
3. **MD033 (Inline HTML)**: Markdown နဲ့ မရနိုင်တဲ့ formatting အတွက် HTML elements အသုံးပြုရန်
4. **MD041 (First line heading)**: Template ဖိုင်များ သို့မဟုတ် heading မပါသော စတင်စာတမ်းများ

### အကောင်းဆုံး လုပ်နည်းများ

1. **Exceptions ကို အနည်းငယ်သာ အသုံးပြုပါ**: Documentation ရဲ့ ရှင်းလင်းမှုအတွက် လိုအပ်သောအခါမှသာ exceptions ထည့်ပါ
2. **Exceptions ကို မှတ်ချက်ထည့်ပါ**: Exceptions အသုံးပြုတဲ့အခါ အကြောင်းပြချက်ကို မှတ်ချက်အနည်းငယ်ထည့်ပါ
3. **Prefer `markdownlint-disable-next-line`**: အပိုင်းတစ်ခုလုံးကို ပိတ်ထားတာထက် ပိုတိကျပါတယ်
4. **Commit မလုပ်ခင်မှာ linter ကို run လုပ်ပါ**: `markdownlint-cli2 "**/*.md"` ကို always run လုပ်ပြီး ပြောင်းလဲမှုများကို submit လုပ်ပါ

> **Tip:** `scripts/validate-markdown.ps1` PowerShell script ကို အသုံးပြုပြီး markdown ဖိုင်များမှာ markdownlint နှင့် cSpell စစ်ဆေးမှုများကို အလျင်အမြန် run လုပ်နိုင်ပါတယ်။ ဒီ script က သင့်ရဲ့ contribution များကို ကျွန်ုပ်တို့ရဲ့ guideline များနဲ့ ကိုက်ညီစေဖို့ common formatting နှင့် spelling စစ်ဆေးမှုများကို automate လုပ်ပေးပါတယ်။

Root မှာ PowerShell ကို run လုပ်နိုင်ပါတယ်:

```powershell
./scripts/validate-markdown.ps1
```

### markdownlint error များနှင့် ဖြေရှင်းနည်းများ

- **MD036**: Emphasis (`**Bold text**`) အစား Heading (`## Heading`) ကို သုံးပါ
- **MD007**: Unordered list indentation ကို 2 spaces သုံးပြီး 4 spaces မသုံးပါ
- **MD022**: Heading များအပေါ်နှင့် အောက်မှာ blank lines ထည့်ပါ
- **MD032**: List များအပေါ်နှင့် အောက်မှာ blank lines ထည့်ပါ
- **MD009**: Line များအဆုံးမှာ trailing spaces ကို ဖယ်ရှားပါ

### GitHub workflow

ကျွန်ုပ်တို့ repository မှာ pull requests အားလုံးမှာ markdownlint ကို auto run လုပ်တဲ့ GitHub workflow ပါဝင်ပါတယ်။ Workflow:

- markdownlint-cli2 tool ကို သင့်ရဲ့ local မှာ run လုပ်နိုင်ပါတယ်
- `SUPPORT.md`, `SECURITY.md`, `CODE_OF_CONDUCT.md` ဖိုင်များကို မပါဝင်ပါ
- ကျွန်ုပ်တို့ရဲ့ `.markdownlint.jsonc` configuration ကို အသုံးပြုပါ
- Formatting အခွင့်အရေးများကို highlight လုပ်ပြီး PR များကို merge ခွင့်ပြုပါ

### VS Code markdownlint Extension

VS Code ကို အသုံးပြုနေပါက [markdownlint extension](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) ကို install လုပ်ရန် အကြံပြုပါတယ်:

1. **Extension ကို install လုပ်ပါ** - VS Code extensions marketplace မှာ David Anson ရဲ့ "markdownlint" ကို ရှာပါ
2. **Automatic configuration** - Extension က သင့်ရဲ့ `.markdownlint.jsonc` configuration ဖိုင်ကို auto အသုံးပြုပါ
3. **Real-time feedback** - Markdown formatting issue များကို ရေးသားနေစဉ် squiggly underlines တွေ့နိုင်ပါသည်
4. **Quick fixes** - `Ctrl+.` (Mac မှာ Cmd+.) ကို အသုံးပြုပြီး auto-fixes များကို ကြည့်နိုင်ပါသည်
5. **Problems panel** - VS Code Problems panel မှ markdown issue များအားလုံးကို ကြည့်နိုင်ပါသည်

ဒီအရာက commit မလုပ်ခင် markdown စံနှုန်းများကို လိုက်နာရန် ပိုလွယ်ကူစေပါတယ်။

## စာလုံးပေါင်းစစ်ခြင်း

ကျွန်ုပ်တို့ cSpell (Code Spell Checker) ကို အသုံးပြုပြီး စာတမ်းများအားလုံးမှာ စာလုံးပေါင်းကို တူညီစွာ ထိန်းသိမ်းထားပါတယ်။ ဒါက repository တစ်ခုလုံးမှာ ပရော်ဖက်ရှင်နယ်အရည်အသွေးကို သေချာစေပြီး စာလုံးပေါင်းအမှားများကို လျှော့ချစေပါတယ်။

### cSpell ကို ထည့်သွင်းခြင်း

cSpell ကို ဒေသတွင်းမှာ run လုပ်ရန် global ထည့်သွင်းပါ:

```powershell
npm install -g cspell
```

### cSpell ကို ဒေသတွင်းမှာ run လုပ်ခြင်း

ထည့်သွင်းပြီးနောက် documentation မှာ spelling စစ်ဆေးရန် cSpell ကို run လုပ်နိုင်ပါတယ်:

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

### Configuration

ကျွန်ုပ်တို့ cSpell configuration ကို repository ရဲ့ root မှာရှိတဲ့ `cspell.json` မှာ သတ်မှတ်ထားပါတယ်။ ဒီ configuration:

- Copilot, SharePoint, Dataverse စတဲ့ ကျွန်ုပ်တို့ရဲ့ domain-specific custom words များကို ထည့်သွင်းထားသည်
- Spell checking မလိုအပ်တဲ့ file type များကို မပါဝင်စေရန် ပိတ်ထားသည် (images, build files)
- Spell checking အတွက် ဘာသာစကားကို English သတ်မှတ်ထားသည်

### စာလုံးအသစ်များ ထည့်သွင်းခြင်း

cSpell က misspelled ဖြစ်တယ်လို့ flag လုပ်တဲ့ စကားလုံးတစ်ခုကို တွေ့ရင် (product names, technical terms, proper nouns စသည်တို့) `cspell.json` ရဲ့ `words` array ထဲကို ထည့်သွင်းနိုင်ပါတယ်:

```json
{
  "words": [
    "Contoso",
    "Dataverse",
    "YourNewWord"
  ]
}
```

### VS Code cSpell Extension

[Code Spell Checker extension](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) ကို VS Code မှာ အသုံးပြုနေပါက configuration ကို အလျင်အမြန် စီမံနိုင်ပါတယ်:

1. **Spelling errors ကို ကြည့်ပါ** - Misspelled words တွေမှာ squiggly underlines ကို ရှာပါ
1. **Quick Fix ကို အသုံးပြုပါ** - Underlined word ကို right-click လုပ်ပါ သို့မဟုတ် `Ctrl+.` (Mac မှာ Cmd+.) ကို အသုံးပြုပါ
1. **Config ထဲကို ထည့်ပါ** - Context menu မှ "Spelling -> Add to cSpell configuration" ကို ရွေးပါ
1. **Location ကို ရွေးပါ** - Extension က စကားလုံးကို သင့်ရဲ့ `cspell.json` ဖိုင်ထဲကို auto ထည့်သွင်းပါမယ်

ဒီအရာက individual words အတွက် configuration ဖိုင်ကို manually edit လုပ်တာထက် ပိုမြန်ပါတယ်။

### စာလုံးပေါင်းအကောင်းဆုံး လုပ်နည်းများ

1. **Commit မလုပ်ခင်မှာ spell check run လုပ်ပါ**: Always run `cspell "docs/**/*.md"` ပြီး ပြောင်းလဲမှုများကို submit လုပ်ပါ
1. **Typos များကို ignore မလုပ်ပါနဲ့**: အမှန်တကယ် spelling error များကို အမြဲပြင်ပါ
1. **တူညီသော အဓိပ္ပါယ်အမည်များကို အသုံးပြုပါ**: Established product names နှင့် technical terms ကို stick လုပ်ပါ

## MkDocs နဲ့ ဒေသတွင်းစာတမ်း preview

ကျွန်ုပ်တို့ MkDocs ကို Material theme နဲ့ အသုံးပြုပြီး documentation site ကို generate လုပ်ပါတယ်။ Pull request တင်မယ့်အခါ ပြောင်းလဲမှုများကို preview လုပ်နိုင်ပါတယ်။

📖 **Learn more**: [MkDocs Documentation](https://www.mkdocs.org/) | [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)

### VS Code မှာ Python Environment ကို စတင်ခြင်း

ဒီ project အတွက် dependencies များကို isolate လုပ်ရန် virtual environment ကို အသုံးပြုရန် အကြံပြုပါတယ်။ VS Code က ဒီ process ကို seamless လုပ်ပြီး Python installation လိုအပ်ပါက handle လုပ်ပါမယ်။

> **GitHub Codespaces**: Python pre-installed နဲ့ VS Code environment အသုံးပြုနိုင်တဲ့ GitHub Codespaces မှာ ဒီလမ်းညွှန်ချက်တွေ အလုံးစုံအဆင်ပြေပါတယ်။

📖 **Learn more**: [Python in VS Code](https://code.visualstudio.com/docs/languages/python) | [Python environments in VS Code](https://code.visualstudio.com/docs/python/environments)

#### Prerequisites

**Python Extension ကို Install လုပ်ပါ**: Microsoft ရဲ့ [Python extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python) ကို VS Code marketplace မှာ install လုပ်ပါ။

#### VS Code မှာ Setup

1. **Virtual environment တစ်ခုကို ဖန်တီးပါ**:
   - Command Palette ကို ဖွင့်ပါ (`Ctrl+Shift+P` Windows/Linux, `Cmd+Shift+P` Mac)
   - "Python: Create Environment" ကို ရိုက်ပြီး ရွေးပါ
   - "Venv" (virtual environment) ကို ရွေးပါ
   - Python interpreters မရှိပါက VS Code က Python installation လုပ်ဖို့ guide လုပ်ပါမယ်
   - Python interpreter ကို ရွေးပါ (Python 3.8+)
   - VS Code က `.venv` folder ကို ဖန်တီးပြီး auto activate လုပ်ပါမယ်

2. **Setup ကို Verify လုပ်ပါ**:
   - Integrated terminal အသစ်ကို ဖွင့်ပါ (`` Ctrl+Shift+` `` Windows/Linux, `` Cmd+Shift+` `` Mac, သို့မဟုတ် `View > Terminal`)
   - Terminal prompt မှာ `(.venv)` ကို တွေ့ရပါမယ်
   - Run: `python --version` ကို verify လုပ်ပါ

> **Note**: Terminal အသစ်ကို ဖွင့်ခြင်းက Python environment ကို သေချာ activate လုပ်စေပါတယ်။ Virtual environment အသစ်တစ်ခုကို ဖန်တီးချင်မရင် Command Palette မှ "Python: Select Interpreter" ကို အသုံးပြုပြီး သင့်အကြိုက်ဆုံး environment ကို ရွေးနိုင်ပါတယ်။

### VS Code မှာ MkDocs ကို Install လုပ်ခြင်း

VS Code မှာ Python environment ကို setup လုပ်ပြီးနောက် MkDocs နဲ့ Material theme ကို install လုပ်ပါ:

1. **VS Code ရဲ့ integrated terminal ကို ဖွင့်ပါ** (`Ctrl+`` ` သို့မဟုတ် `View > Terminal`)
2. **သင့်ရဲ့ virtual environment ကို active ဖြစ်နေကြောင်း သေချာပါ** (`(.venv)` ကို prompt မှာ တွေ့ရပါမယ်)
3. **Packages များကို install လုပ်ပါ**:

   ```bash
   pip install mkdocs mkdocs-material
   ```

### VS Code မှာ MkDocs ကို Run လုပ်ခြင်း

Hot reload နဲ့ local development server ကို စတင်ရန်:

1. **VS Code ရဲ့ integrated terminal မှာ**, run လုပ်ပါ:

   ```bash
   mkdocs serve
   ```

2. **Site ကို**: `http://127.0.0.1:8000/agent-academy/` မှာ တွေ့နိုင်ပါမယ်

### VS Code Simple Browser မှာ Preview

VS Code ထဲမှာနေပြီး development အတွေ့အကြုံအကောင်းဆုံးရဖို့:

1. **MkDocs server ကို terminal မှာ စတင်ပါ** (အထက်မှာပြထားတဲ့အတိုင်း)
2. **Simple Browser ကို ဖွင့်ပါ**:
   - **Method 1**: Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) ကို ဖွင့်ပါ
   - "Simple Browser: Show" ကို ရိုက်ပြီး ရွေးပါ
   - URL: `http://127.0.0.1:8000/agent-academy/` ကို ထည့်ပါ

   - **Method 2**: Terminal output မှ URL ကို right-click လုပ်ပြီး "Follow Link" ကို ရွေးပါ

   - **Method 3**: Terminal မှ URL ကို `Ctrl+Click` (Windows) သို့မဟုတ် `Cmd+Click` (Mac) ကို အသုံးပြုပါ

3. **Browser ကို Position လုပ်ပါ**: Simple Browser ကို editor အနားမှာ dock လုပ်ပြီး side-by-side editing နဲ့ preview လုပ်နိုင်ပါတယ်

### VS Code Workspace အကျိုးကျေးဇူးများ

VS Code မှာ အလုပ်လုပ်ခြင်းက အောက်ပါ အကျိုးကျေးဇူးများပေးပါသည်:

- **Integrated terminal**: Applications များအကြား switch လုပ်စရာမလိုပါ
- **Side-by-side preview**: Markdown ကို edit လုပ်ပြီး ပြောင်းလဲမှုများကို တစ်ပြိုင်နက် preview လုပ်နိုင်သည်  
- **Link navigation**: Terminal URLs ကို click လုပ်ပြီး Simple Browser ကို ဖွင့်နိုင်သည်
- **Extension integration**: Python, markdownlint, နှင့် cSpell extensions တွေ အတူတူအလုပ်လုပ်သည်
- **Git integration**: Commit နှင့် pull requests အတွက် built-in source control panel

### Hot reload features

`mkdocs serve` ကို run လုပ်တဲ့အခါ:

- **Auto-refresh**: `docs/` folder ထဲမှာရှိတဲ့ `.md` ဖိုင်များကို ပြောင်းလဲမှုများအတွက် browser ကို auto

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရ အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်မှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။