<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-20T17:02:37+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "cs"
}
-->
# Přispívání do MCS Agent Academy

Děkujeme za váš zájem o přispívání do MCS Agent Academy! Tento průvodce vám pomůže nastavit vývojové prostředí a porozumět našim standardům dokumentace.

## Standardy dokumentace

Dodržujeme standardy dokumentace společnosti Microsoft, abychom zajistili konzistentní a kvalitní obsah. Pro podrobné pokyny, jak psát efektivní dokumentaci, navštivte:

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - Kompletní průvodce psaním dokumentace podle stylu a standardů Microsoftu.

Tento zdroj zahrnuje:

- Psaní jasného a stručného obsahu
- Používání správné syntaxe markdown
- Dodržování konzistentní terminologie
- Efektivní strukturování dokumentace
- Nejlepší postupy pro přístupnost

## Lintování Markdownu

Používáme markdownlint, abychom zajistili konzistentní formátování a kvalitu napříč veškerou dokumentací. To pomáhá udržovat čitelnost a profesionální standardy v celém repozitáři.

### Instalace markdownlint-cli2

Pro spuštění markdownlint lokálně a sladění s naším GitHub workflow nainstalujte markdownlint-cli2:

```powershell
npm install -g markdownlint-cli2
```

### Spuštění markdownlint lokálně

Po instalaci můžete spustit markdownlint na všech markdown souborech v repozitáři:

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### Konfigurace

Naše konfigurace markdownlint je definována v souboru `.markdownlint.jsonc` v kořenovém adresáři repozitáře. Tato konfigurace:

- Zakazuje kontrolu délky řádků (MD013), protože jsme nedefinovali standard
- Povolení duplicitních nadpisů pouze u sourozenců (MD024) pro běžné sekce šablon
- Globálně zakazuje validaci prefixu číslovaných seznamů (MD029) kvůli odsazenému obsahu, který resetuje číslování
- Povolení použití bloků kódu pro text (MD046)

### Přidávání výjimek pro markdownlint pravidla

Naše globální konfigurace pokrývá většinu běžných scénářů, ale můžete narazit na situace, kdy je potřeba přidat výjimky pro konkrétní markdownlint pravidla v jednotlivých souborech. Zde jsou příklady, jak to udělat:

#### Možnost 1: Ignorovat pro následující řádek

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### Možnost 2: Ignorovat pro konkrétní rozsah

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

#### Možnost 3: Ignorovat pro celý soubor

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> Umístěte tyto výjimky na úplný začátek vašeho markdown souboru, abyste deaktivovali konkrétní pravidla pro celý dokument.

### Kdy používat inline výjimky

Výjimky pro různá markdownlint pravidla můžete potřebovat, když:

1. **MD029 (Číslování seznamů)**: Pokračování číslovaných seznamů po jiném obsahu, záměrné číslování nezačínající od 1 nebo složitý vnořený obsah
2. **MD013 (Délka řádku)**: Příklady kódu, URL nebo technický obsah, který nelze rozumně rozdělit na více řádků
3. **MD033 (Inline HTML)**: Když potřebujete konkrétní HTML prvky pro formátování, které nelze dosáhnout pomocí markdown
4. **MD041 (První řádek nadpis)**: Šablonové soubory nebo dokumenty, které záměrně nezačínají nadpisem

### Nejlepší postupy

1. **Používejte výjimky střídmě**: Přidávejte výjimky pouze tehdy, když je to nezbytné pro jasnost dokumentace
2. **Komentujte své výjimky**: Při používání výjimek zvažte přidání stručného komentáře vysvětlujícího důvod
3. **Preferujte `markdownlint-disable-next-line`**: Je to přesnější než deaktivace pro celé sekce
4. **Spusťte linter před odesláním**: Vždy spusťte `markdownlint-cli2 "**/*.md"` před odesláním změn

> **Tip:** Rychle můžete spustit markdownlint i cSpell kontroly na vašich markdown souborech pomocí poskytnutého PowerShell skriptu `scripts/validate-markdown.ps1`. Tento skript pomáhá automatizovat běžné kontroly formátování a pravopisu, aby vaše příspěvky splňovaly naše pokyny.

Skript můžete spustit z kořenového adresáře repozitáře pomocí PowerShell:

```powershell
./scripts/validate-markdown.ps1
```

### Běžné chyby markdownlint a jejich opravy

- **MD036**: Používejte správné nadpisy (`## Nadpis`) místo zvýraznění (`**Tučný text**`)
- **MD007**: Opravte odsazení nečíslovaných seznamů (použijte 2 mezery, ne 4)
- **MD022**: Přidejte prázdné řádky před a za nadpisy
- **MD032**: Přidejte prázdné řádky před a za seznamy
- **MD009**: Odstraňte mezery na konci řádků

### GitHub workflow

Náš repozitář obsahuje GitHub workflow, který automaticky spouští markdownlint na všech pull requestech. Workflow:

- Používá stejný markdownlint-cli2 nástroj, který můžete spustit lokálně
- Vylučuje soubory `SUPPORT.md`, `SECURITY.md` a `CODE_OF_CONDUCT.md`
- Používá naši `.markdownlint.jsonc` konfiguraci
- Hlásí problémy jako varování, což umožňuje sloučení PR, zatímco upozorňuje na možnosti formátování

### Rozšíření markdownlint pro VS Code

Pokud používáte VS Code, doporučujeme nainstalovat [rozšíření markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) pro kontrolu markdownu v reálném čase:

1. **Nainstalujte rozšíření** - Vyhledejte "markdownlint" od Davida Ansona v marketplace rozšíření VS Code
2. **Automatická konfigurace** - Rozšíření automaticky použije váš konfigurační soubor `.markdownlint.jsonc`
3. **Zpětná vazba v reálném čase** - Uvidíte podtržení chyb formátování markdownu při psaní
4. **Rychlé opravy** - Použijte `Ctrl+.` (Cmd+. na Macu) pro zobrazení dostupných automatických oprav mnoha problémů
5. **Panel problémů** - Zobrazte všechny problémy s markdownem v panelu Problémy v VS Code

To poskytuje okamžitou zpětnou vazbu při psaní, což usnadňuje dodržování standardů markdownu před odesláním vašich změn.

## Kontrola pravopisu

Používáme cSpell (Code Spell Checker) k udržení konzistentního pravopisu napříč veškerou dokumentací. To pomáhá zajistit profesionální kvalitu a snižuje počet překlepů v celém repozitáři.

### Instalace cSpell

Pro spuštění cSpell lokálně jej nainstalujte globálně:

```powershell
npm install -g cspell
```

### Spuštění cSpell lokálně

Po instalaci můžete spustit cSpell pro kontrolu pravopisu v dokumentaci:

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

### Konfigurace

Naše konfigurace cSpell je definována v souboru `cspell.json` v kořenovém adresáři repozitáře. Tato konfigurace:

- Zahrnuje vlastní slova specifická pro naši oblast (Copilot, SharePoint, Dataverse atd.)
- Ignoruje běžné typy souborů, které nepotřebují kontrolu pravopisu (obrázky, soubory sestavení)
- Nastavuje jazyk na angličtinu pro kontrolu pravopisu

### Přidávání nových slov

Pokud narazíte na slovo, které cSpell označí jako chybné, ale je ve skutečnosti správné (např. názvy produktů, technické termíny nebo vlastní jména), můžete jej přidat do pole `words` v souboru `cspell.json`:

```json
{
  "words": [
    "Contoso",
    "Dataverse",
    "YourNewWord"
  ]
}
```

### Rozšíření cSpell pro VS Code

Pokud používáte VS Code s [rozšířením Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker), můžete rychle přidávat slova do své konfigurace:

1. **Zobrazení chyb pravopisu** - Hledejte podtržené chyby na nesprávně napsaných slovech
1. **Použijte rychlou opravu** - Klikněte pravým tlačítkem na podtržené slovo nebo použijte `Ctrl+.` (Cmd+. na Macu)
1. **Přidat do konfigurace** - Vyberte "Spelling -> Add to cSpell configuration" z kontextového menu
1. **Vyberte umístění** - Rozšíření automaticky přidá slovo do vašeho souboru `cspell.json`

To je mnohem rychlejší než ruční úprava konfiguračního souboru pro jednotlivá slova.

### Nejlepší postupy pro pravopis

1. **Spusťte kontrolu pravopisu před odesláním**: Vždy spusťte `cspell "docs/**/*.md"` před odesláním změn
1. **Opravte překlepy místo ignorování**: Pokud je to možné, opravte skutečné chyby pravopisu místo jejich přidávání do seznamu slov
1. **Používejte konzistentní terminologii**: Držte se zavedených názvů produktů a technických termínů

## Lokální náhled dokumentace s MkDocs

Používáme MkDocs s Material tématem k vytvoření našeho webu s dokumentací. Můžete jej spustit lokálně, abyste si mohli před odesláním pull requestu zobrazit náhled svých změn.

📖 **Více informací**: [Dokumentace MkDocs](https://www.mkdocs.org/) | [Material pro MkDocs](https://squidfunk.github.io/mkdocs-material/)

### Nastavení Python prostředí ve VS Code

Doporučujeme použít virtuální prostředí k izolaci závislostí pro tento projekt. VS Code tento proces usnadňuje a zajistí instalaci Pythonu, pokud je to potřeba.

> **GitHub Codespaces**: Tyto pokyny fungují perfektně v GitHub Codespaces, který má Python předinstalovaný a prostředí VS Code připravené k použití.

📖 **Více informací**: [Python ve VS Code](https://code.visualstudio.com/docs/languages/python) | [Python prostředí ve VS Code](https://code.visualstudio.com/docs/python/environments)

#### Předpoklady

**Instalace Python rozšíření**: Nainstalujte [Python rozšíření](https://marketplace.visualstudio.com/items?itemName=ms-python.python) od Microsoftu z marketplace VS Code, pokud jste tak ještě neučinili.

#### Nastavení ve VS Code

1. **Vytvořte virtuální prostředí**:
   - Otevřete Command Palette (`Ctrl+Shift+P` na Windows/Linux, `Cmd+Shift+P` na Macu)
   - Zadejte "Python: Create Environment" a vyberte tuto možnost
   - Zvolte "Venv" (virtuální prostředí)
   - Pokud nejsou dostupné žádné interprety Pythonu, VS Code vás provede instalací Pythonu
   - Vyberte svůj Python interpret (Python 3.8+)
   - VS Code vytvoří složku `.venv` a automaticky ji aktivuje

2. **Ověřte nastavení**:
   - Otevřete nový integrovaný terminál (`` Ctrl+Shift+` `` na Windows/Linux, `` Cmd+Shift+` `` na Macu nebo `View > Terminal`)
   - Měli byste vidět `(.venv)` v promptu terminálu
   - Spusťte: `python --version` pro ověření

> **Poznámka**: Otevření nového terminálu zajistí, že Python prostředí je správně aktivováno. Pokud dáváte přednost použití existujícího Python prostředí místo vytvoření nového virtuálního prostředí, můžete použít "Python: Select Interpreter" z Command Palette a vybrat preferované prostředí.

### Instalace MkDocs ve VS Code

S nastaveným Python prostředím ve VS Code nainstalujte MkDocs a Material téma:

1. **Otevřete integrovaný terminál VS Code** (`Ctrl+`` ` nebo `View > Terminal`)
2. **Ujistěte se, že vaše virtuální prostředí je aktivní** (měli byste vidět `(.venv)` v promptu)
3. **Nainstalujte balíčky**:

   ```bash
   pip install mkdocs mkdocs-material
   ```

### Spuštění MkDocs ve VS Code

Pro spuštění lokálního vývojového serveru s automatickým načítáním:

1. **V integrovaném terminálu VS Code** spusťte:

   ```bash
   mkdocs serve
   ```

2. **Web bude dostupný na adrese**: `http://127.0.0.1:8000/agent-academy/`

### Náhled ve VS Code Simple Browser

Pro nejlepší vývojový zážitek bez opuštění VS Code:

1. **Spusťte MkDocs server** v integrovaném terminálu (jak je uvedeno výše)
2. **Otevřete Simple Browser**:
   - **Metoda 1**: Otevřete Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
   - Zadejte "Simple Browser: Show" a vyberte tuto možnost
   - Zadejte URL: `http://127.0.0.1:8000/agent-academy/`

   - **Metoda 2**: Klikněte pravým tlačítkem na URL v terminálovém výstupu a vyberte "Follow Link"

   - **Metoda 3**: Použijte `Ctrl+Click` (Windows) nebo `Cmd+Click` (Mac) na URL v terminálu

3. **Umístění prohlížeče**: Můžete umístit Simple Browser vedle svého editoru pro paralelní úpravy a náhled

### Výhody pracovního prostoru VS Code

Práce výhradně ve VS Code poskytuje tyto výhody:

- **Integrovaný terminál**: Není potřeba přepínat mezi aplikacemi
- **Paralelní náhled**: Upravujte markdown a současně sledujte změny  
- **Navigace odkazů**: Klikněte na URL v terminálu přímo pro otevření Simple Browser
- **Integrace rozšíření**: Python, markdownlint a cSpell rozšíření spolupracují
- **Git integrace**: Vestavěný panel pro správu zdrojového kódu pro commity a pull requesty

### Funkce automatického načítání

Při spuštění `mkdocs serve` získáte:

- **Automatické obnovení**: Změny v jakémkoli `.md` souboru ve složce `docs/` automaticky obnoví prohlížeč
- **Aktualizace konfigurace**: Změny v `mkdocs.yml` také spustí přestavbu
- **Náhled v reálném čase**: Okamžitě vidíte své formátování, odkazy a změny obsahu
- **Validace odkazů**: MkDocs vás upozorní na nefunkční interní odkazy

### Užitečné příkazy MkDocs ve VS Code

Spusťte tyto příkazy v integrovaném terminálu VS Code:

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

> **Tip:** Pro lokální náhled dokumentace se všemi kontrolovanými závislostmi použijte PowerShell skript `scripts/serve-docs.ps1`.

### Výhody lokálního náhledu

- **Okamžitá zpětná vazba**: Vidíte, jak se váš markdown vykresluje s Material tématem
- **Validace odkazů**: Zjistíte nefunkční odkazy před jejich zveřejněním
- **Testování navigace**: Ověřte, že váš obsah se zobrazuje ve správných sekcích
- **Mobilní náhled**: Otestujte, jak váš obsah vypadá na různých velikostech obrazovky
- **Kontrola výkonu**: Ujistěte se, že obrázky a zdroje se načítají správně

## Dotazy?

Pokud máte dotazy ohledně formátování markdownu nebo pokynů pro přispívání, postupujte takto:

1. Projděte si tento průvodce přispíváním
1. Zkontrolujte existující problémy pro podobné dotazy
1. Otevřete nový problém

Šťastné přispívání! 🚀

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho rodném jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.