<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-22T18:44:13+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "tl"
}
-->
# Pag-aambag sa MCS Agent Academy

Salamat sa iyong interes na mag-ambag sa MCS Agent Academy! Ang gabay na ito ay tutulong sa iyo na i-set up ang iyong development environment at maunawaan ang aming mga pamantayan sa dokumentasyon.

## Pamantayan sa Dokumentasyon

Sinusunod namin ang pamantayan ng dokumentasyon ng Microsoft upang matiyak ang pare-pareho at mataas na kalidad na nilalaman. Para sa detalyadong gabay sa pagsusulat ng epektibong dokumentasyon, mangyaring bisitahin:

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - Kumpletong gabay sa pagsusulat ng dokumentasyon na sumusunod sa estilo at pamantayan ng Microsoft.

Saklaw nito ang:

- Pagsusulat ng malinaw at maikling nilalaman
- Paggamit ng tamang markdown syntax
- Pagsunod sa pare-parehong terminolohiya
- Epektibong pag-istruktura ng dokumentasyon
- Mga pinakamahusay na kasanayan sa accessibility

## Markdown Linting

Gumagamit kami ng markdownlint upang matiyak ang pare-parehong pag-format at kalidad sa lahat ng aming dokumentasyon. Nakakatulong ito na mapanatili ang readability at propesyonal na pamantayan sa buong repository.

### Pag-install ng markdownlint-cli2

Upang patakbuhin ang markdownlint nang lokal at tumugma sa aming GitHub workflow, i-install ang markdownlint-cli2:

```powershell
npm install -g markdownlint-cli2
```

### Pagpapatakbo ng markdownlint nang lokal

Kapag na-install na, maaari mong patakbuhin ang markdownlint sa lahat ng markdown files sa repository:

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### Konfigurasyon

Ang aming markdownlint configuration ay tinukoy sa `.markdownlint.jsonc` sa root ng repository. Ang konfigurasyong ito:

- Hindi pinapagana ang line length checks (MD013) dahil wala pa kaming tinukoy na pamantayan
- Pinapayagan ang duplicate headings sa mga kapatid na seksyon lamang (MD024) para sa mga karaniwang template na seksyon
- Hindi pinapagana ang ordered list prefix validation (MD029) globally dahil sa indented content na nagre-reset ng numbering
- Pinapayagan ang paggamit ng code blocks para sa text (MD046)

### Pagdaragdag ng inline exceptions para sa markdownlint rules

Habang ang aming global configuration ay humahawak sa karamihan ng mga karaniwang sitwasyon, maaaring may mga pagkakataon na kailangan mong magdagdag ng inline exceptions para sa partikular na markdownlint rules sa mga indibidwal na file. Narito ang mga halimbawa kung paano ito gawin:

#### Opsyon 1: I-ignore para sa susunod na linya

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### Opsyon 2: I-ignore para sa partikular na saklaw

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

#### Opsyon 3: I-ignore para sa buong file

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> Ilagay ang mga ito sa pinakataas ng iyong markdown file upang i-disable ang partikular na rules para sa buong dokumento

### Kailan gagamit ng inline exceptions

Maaaring kailanganin mo ng exceptions para sa iba't ibang markdownlint rules kapag:

1. **MD029 (Ordered list numbering)**: Pagpapatuloy ng numbered lists pagkatapos ng ibang nilalaman, intentional numbering na hindi nagsisimula sa 1, o kumplikadong nested content
2. **MD013 (Line length)**: Mga halimbawa ng code, URLs, o teknikal na nilalaman na hindi maaaring hatiin sa mga linya
3. **MD033 (Inline HTML)**: Kapag kailangan mo ng partikular na HTML elements para sa formatting na hindi maaaring makamit gamit ang markdown
4. **MD041 (First line heading)**: Mga template files o dokumento na sadyang hindi nagsisimula sa heading

### Mga pinakamahusay na kasanayan

1. **Gamitin ang exceptions nang matipid**: Magdagdag lamang ng exceptions kapag kinakailangan para sa kalinawan ng dokumentasyon
2. **Magkomento sa iyong mga exceptions**: Kapag gumagamit ng exceptions, magdagdag ng maikling paliwanag kung bakit
3. **Mas gusto ang `markdownlint-disable-next-line`**: Mas tiyak ito kaysa sa pag-disable para sa buong seksyon
4. **Patakbuhin ang linter bago mag-commit**: Laging patakbuhin ang `markdownlint-cli2 "**/*.md"` bago magsumite ng mga pagbabago

> **Tip:** Maaari mong mabilis na patakbuhin ang markdownlint at cSpell checks sa iyong markdown files gamit ang ibinigay na `scripts/validate-markdown.ps1` PowerShell script. Ang script na ito ay tumutulong sa pag-automate ng mga karaniwang formatting at spelling checks upang matiyak na ang iyong mga ambag ay sumusunod sa aming mga alituntunin.

Maaari mo itong patakbuhin mula sa root ng repository gamit ang PowerShell:

```powershell
./scripts/validate-markdown.ps1
```

### Karaniwang markdownlint errors at mga solusyon

- **MD036**: Gumamit ng tamang headings (`## Heading`) sa halip na emphasis (`**Bold text**`)
- **MD007**: Ayusin ang indentation ng unordered list (gumamit ng 2 spaces, hindi 4)
- **MD022**: Magdagdag ng blank lines bago at pagkatapos ng headings
- **MD032**: Magdagdag ng blank lines bago at pagkatapos ng lists
- **MD009**: Alisin ang trailing spaces sa dulo ng mga linya

### GitHub workflow

Ang aming repository ay may kasamang GitHub workflow na awtomatikong nagpapatakbo ng markdownlint sa lahat ng pull requests. Ang workflow:

- Gumagamit ng parehong markdownlint-cli2 tool na maaari mong patakbuhin nang lokal
- Hindi kasama ang mga file na `SUPPORT.md`, `SECURITY.md`, at `CODE_OF_CONDUCT.md`
- Gumagamit ng aming `.markdownlint.jsonc` configuration
- Nag-uulat ng mga isyu bilang warnings, pinapayagan ang PRs na mag-merge habang itinatampok ang mga oportunidad sa pag-format

### VS Code markdownlint Extension

Kung gumagamit ka ng VS Code, inirerekomenda namin ang pag-install ng [markdownlint extension](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) para sa real-time markdown linting:

1. **I-install ang extension** - Hanapin ang "markdownlint" ni David Anson sa VS Code extensions marketplace
2. **Awtomatikong konfigurasyon** - Awtomatikong gagamitin ng extension ang iyong `.markdownlint.jsonc` configuration file
3. **Real-time feedback** - Makikita ang squiggly underlines sa mga markdown formatting issues habang nagta-type
4. **Quick fixes** - Gamitin ang `Ctrl+.` (Cmd+. sa Mac) upang makita ang mga available na auto-fixes para sa maraming isyu
5. **Problems panel** - Tingnan ang lahat ng markdown issues sa VS Code Problems panel

Nagbibigay ito ng agarang feedback habang nagsusulat, na ginagawang mas madali ang pagsunod sa markdown standards bago mag-commit ng iyong mga pagbabago.

## Pag-check ng Spelling

Gumagamit kami ng cSpell (Code Spell Checker) upang mapanatili ang pare-parehong spelling sa lahat ng aming dokumentasyon. Nakakatulong ito upang matiyak ang propesyonal na kalidad at mabawasan ang mga typo sa buong repository.

### Pag-install ng cSpell

Upang patakbuhin ang cSpell nang lokal, i-install ito globally:

```powershell
npm install -g cspell
```

### Pagpapatakbo ng cSpell nang lokal

Kapag na-install na, maaari mong patakbuhin ang cSpell upang i-check ang spelling sa dokumentasyon:

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

### Konfigurasyon

Ang aming cSpell configuration ay tinukoy sa `cspell.json` sa root ng repository. Ang konfigurasyong ito:

- Kasama ang mga custom words na partikular sa aming domain (Copilot, SharePoint, Dataverse, atbp.)
- Hindi isinama ang mga karaniwang file types na hindi kailangang i-check ang spelling (mga imahe, build files)
- Itinakda ang wika sa English para sa spell checking

### Pagdaragdag ng bagong salita

Kung makakita ka ng salita na na-flag ng cSpell bilang mali ngunit tama naman (tulad ng mga pangalan ng produkto, teknikal na termino, o tamang pangngalan), maaari mo itong idagdag sa `words` array sa `cspell.json`:

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

Kung gumagamit ka ng VS Code na may [Code Spell Checker extension](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker), maaari mong mabilis na idagdag ang mga salita sa iyong configuration:

1. **Tingnan ang spelling errors** - Hanapin ang squiggly underlines sa mga maling spelling na salita
1. **Gamitin ang Quick Fix** - I-right-click ang underlined word o gamitin ang `Ctrl+.` (Cmd+. sa Mac)
1. **Idagdag sa config** - Piliin ang "Spelling -> Add to cSpell configuration" mula sa context menu
1. **Piliin ang lokasyon** - Awtomatikong idadagdag ng extension ang salita sa iyong `cspell.json` file

Mas mabilis ito kaysa sa manual na pag-edit ng configuration file para sa indibidwal na mga salita.

### Mga pinakamahusay na kasanayan para sa spelling

1. **Patakbuhin ang spell check bago mag-commit**: Laging patakbuhin ang `cspell "docs/**/*.md"` bago magsumite ng mga pagbabago
1. **Ayusin ang mga typo sa halip na i-ignore**: Kapag maaari, ayusin ang aktwal na spelling errors sa halip na idagdag ang mga ito sa word list
1. **Gumamit ng pare-parehong terminolohiya**: Sumunod sa mga itinatag na pangalan ng produkto at teknikal na termino

## Lokal na Preview ng Dokumentasyon gamit ang MkDocs

Gumagamit kami ng MkDocs na may Material theme upang bumuo ng aming documentation site. Maaari mo itong patakbuhin nang lokal upang i-preview ang iyong mga pagbabago bago magsumite ng pull request.

📖 **Matuto pa**: [MkDocs Documentation](https://www.mkdocs.org/) | [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)

### Pag-set up ng Python Environment sa VS Code

Inirerekomenda namin ang paggamit ng virtual environment upang i-isolate ang mga dependencies para sa proyektong ito. Ginagawang madali ng VS Code ang prosesong ito at hahawakan ang pag-install ng Python kung kinakailangan.

> **GitHub Codespaces**: Ang mga tagubiling ito ay perpektong gumagana sa GitHub Codespaces, na may pre-installed na Python at handa na ang VS Code environment.

📖 **Matuto pa**: [Python in VS Code](https://code.visualstudio.com/docs/languages/python) | [Python environments in VS Code](https://code.visualstudio.com/docs/python/environments)

#### Mga Kinakailangan

**I-install ang Python Extension**: I-install ang [Python extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python) ng Microsoft mula sa VS Code marketplace kung hindi mo pa ito na-install.

#### Setup sa VS Code

1. **Gumawa ng virtual environment**:
   - Buksan ang Command Palette (`Ctrl+Shift+P` sa Windows/Linux, `Cmd+Shift+P` sa Mac)
   - I-type ang "Python: Create Environment" at piliin ito
   - Piliin ang "Venv" (virtual environment)
   - Kung walang available na Python interpreters, gagabayan ka ng VS Code sa pag-install ng Python
   - Piliin ang iyong Python interpreter (Python 3.8+)
   - Gagawa ang VS Code ng `.venv` folder at awtomatikong ia-activate ito

2. **I-verify ang setup**:
   - Buksan ang bagong integrated terminal (`` Ctrl+Shift+` `` sa Windows/Linux, `` Cmd+Shift+` `` sa Mac, o `View > Terminal`)
   - Makikita mo ang `(.venv)` sa terminal prompt
   - Patakbuhin: `python --version` upang i-verify

> **Tandaan**: Ang pagbukas ng bagong terminal ay nagsisiguro na ang Python environment ay maayos na na-activate. Kung mas gusto mong gumamit ng umiiral na Python environment sa halip na gumawa ng bagong virtual environment, maaari mong gamitin ang "Python: Select Interpreter" mula sa Command Palette at piliin ang iyong preferred environment.

### Pag-install ng MkDocs sa VS Code

Kapag na-set up na ang iyong Python environment sa VS Code, i-install ang MkDocs at ang Material theme:

1. **Buksan ang integrated terminal ng VS Code** (`Ctrl+`` ` o `View > Terminal`)
2. **Siguraduhing active ang iyong virtual environment** (makikita mo ang `(.venv)` sa prompt)
3. **I-install ang mga packages**:

   ```bash
   pip install mkdocs mkdocs-material
   ```

### Pagpapatakbo ng MkDocs sa VS Code

Upang simulan ang lokal na development server na may hot reload:

1. **Sa integrated terminal ng VS Code**, patakbuhin:

   ```bash
   mkdocs serve
   ```

2. **Ang site ay magiging available sa**: `http://127.0.0.1:8000/agent-academy/`

### Preview sa VS Code Simple Browser

Para sa pinakamahusay na karanasan sa pag-develop nang hindi umaalis sa VS Code:

1. **Simulan ang MkDocs server** sa integrated terminal (tulad ng ipinakita sa itaas)
2. **Buksan ang Simple Browser**:
   - **Paraan 1**: Buksan ang Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
   - I-type ang "Simple Browser: Show" at piliin ito
   - Ipasok ang URL: `http://127.0.0.1:8000/agent-academy/`

   - **Paraan 2**: I-right-click ang URL sa terminal output at piliin ang "Follow Link"

   - **Paraan 3**: Gamitin ang `Ctrl+Click` (Windows) o `Cmd+Click` (Mac) sa URL sa terminal

3. **Iposisyon ang browser**: Maaari mong i-dock ang Simple Browser sa tabi ng iyong editor para sa side-by-side na pag-edit at preview

### Mga Benepisyo ng VS Code Workspace

Ang pagtatrabaho nang buo sa loob ng VS Code ay nagbibigay ng mga benepisyong ito:

- **Integrated terminal**: Hindi na kailangang magpalipat-lipat ng mga application
- **Side-by-side preview**: I-edit ang markdown at makita ang mga pagbabago nang sabay  
- **Link navigation**: I-click ang mga URL sa terminal upang direktang buksan ang Simple Browser
- **Extension integration**: Ang Python, markdownlint, at cSpell extensions ay nagtutulungan
- **Git integration**: Built-in na source control panel para sa commits at pull requests

### Mga tampok ng hot reload

Kapag nagpapatakbo ng `mkdocs serve`, makakakuha ka ng:

- **Auto-refresh**: Ang mga pagbabago sa anumang `.md` file sa `docs/` folder ay awtomatikong nire-reload ang browser
- **Mga update sa konfigurasyon**: Ang mga pagbabago sa `mkdocs.yml` ay nagti-trigger din ng rebuilds
- **Real-time preview**: Makikita ang iyong formatting, links, at content changes agad-agad
- **Link validation**: Magbibigay ng babala ang MkDocs tungkol sa mga sirang internal links

### Mga kapaki-pakinabang na MkDocs commands sa VS Code

Patakbuhin ang mga commands na ito sa integrated terminal ng VS Code:

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

> **Tip:** Upang i-preview ang dokumentasyon nang lokal na may lahat ng dependencies na naka-check, gamitin ang `scripts/serve-docs.ps1` PowerShell script.

### Mga Benepisyo ng lokal na preview

- **Agarang feedback**: Makikita kung paano nire-render ang iyong markdown gamit ang Material theme
- **Link validation**: Mahuhuli ang mga sirang links bago ito maging live
- **Navigation testing**: Ma-verify kung ang iyong nilalaman ay lumalabas sa tamang mga seksyon
- **Mobile preview**: Masusubukan kung paano lumalabas ang iyong nilalaman sa iba't ibang laki ng screen
- **Performance check**: Masisiguro na ang mga imahe at assets ay maayos na naglo-load

## Mga Tanong?

Kung mayroon kang mga tanong tungkol sa markdown formatting o mga alituntunin sa pag-aambag, mangyaring:

1. Basahin ang gabay na ito sa pag-aambag
1. Tingnan ang mga umiiral na isyu para sa mga katulad na tanong
1. Magbukas ng bagong isyu

Masayang pag-aambag! 🚀

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na mapagkakatiwalaang pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.