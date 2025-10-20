<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-20T17:03:07+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "sk"
}
-->
# Prispievanie do MCS Agent Academy

Ďakujeme za váš záujem prispievať do MCS Agent Academy! Tento návod vám pomôže nastaviť vývojové prostredie a pochopiť naše štandardy dokumentácie.

## Štandardy dokumentácie

Dodržiavame štandardy dokumentácie spoločnosti Microsoft, aby sme zabezpečili konzistentný a kvalitný obsah. Pre podrobné pokyny na písanie efektívnej dokumentácie si pozrite:

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - Kompletný návod na písanie dokumentácie podľa štýlu a štandardov Microsoftu.

Tento zdroj pokrýva:

- Písanie jasného a stručného obsahu
- Používanie správnej syntaxe markdown
- Dodržiavanie konzistentnej terminológie
- Efektívne štruktúrovanie dokumentácie
- Najlepšie praktiky pre prístupnosť

## Markdown linting

Používame markdownlint na zabezpečenie konzistentného formátovania a kvality vo všetkej našej dokumentácii. To pomáha udržiavať čitateľnosť a profesionálne štandardy v celom repozitári.

### Inštalácia markdownlint-cli2

Ak chcete spustiť markdownlint lokálne a zosúladiť ho s naším GitHub workflow, nainštalujte markdownlint-cli2:

```powershell
npm install -g markdownlint-cli2
```

### Spúšťanie markdownlint lokálne

Po inštalácii môžete spustiť markdownlint na všetkých markdown súboroch v repozitári:

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### Konfigurácia

Naša konfigurácia markdownlint je definovaná v `.markdownlint.jsonc` v koreňovom adresári repozitára. Táto konfigurácia:

- Zakazuje kontrolu dĺžky riadkov (MD013), pretože sme nedefinovali štandard
- Umožňuje duplicitné nadpisy iba medzi súrodencami (MD024) pre bežné sekcie šablón
- Globálne zakazuje validáciu prefixov číslovaných zoznamov (MD029) kvôli odsadenému obsahu, ktorý resetuje číslovanie
- Umožňuje používanie blokov kódu pre text (MD046)

### Pridávanie výnimiek pre pravidlá markdownlint

Aj keď naša globálna konfigurácia pokrýva väčšinu bežných scenárov, môžete naraziť na situácie, kde je potrebné pridať výnimky pre konkrétne pravidlá markdownlint v jednotlivých súboroch. Tu sú príklady, ako to urobiť:

#### Možnosť 1: Ignorovať nasledujúci riadok

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### Možnosť 2: Ignorovať konkrétny rozsah

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

#### Možnosť 3: Ignorovať celý súbor

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> Umiestnite tieto výnimky na úplný začiatok markdown súboru, aby ste deaktivovali konkrétne pravidlá pre celý dokument.

### Kedy používať výnimky

Výnimky pre rôzne pravidlá markdownlint môžete potrebovať, keď:

1. **MD029 (Číslovanie zoznamov)**: Pokračovanie číslovaných zoznamov po inom obsahu, úmyselné číslovanie nezačínajúce od 1 alebo zložitý vnorený obsah
2. **MD013 (Dĺžka riadkov)**: Príklady kódu, URL adresy alebo technický obsah, ktorý nemožno rozumne rozdeliť na riadky
3. **MD033 (Inline HTML)**: Keď potrebujete konkrétne HTML prvky na formátovanie, ktoré nemožno dosiahnuť pomocou markdown
4. **MD041 (Prvý riadok nadpis)**: Šablónové súbory alebo dokumenty, ktoré úmyselne nezačínajú nadpisom

### Najlepšie praktiky

1. **Používajte výnimky striedmo**: Pridávajte výnimky len vtedy, keď je to potrebné pre jasnosť dokumentácie
2. **Komentujte svoje výnimky**: Pri používaní výnimiek zvážte pridanie stručného komentára, ktorý vysvetlí dôvod
3. **Uprednostnite `markdownlint-disable-next-line`**: Je presnejšie než deaktivácia pre celé sekcie
4. **Spustite linter pred commitom**: Vždy spustite `markdownlint-cli2 "**/*.md"` pred odoslaním zmien

> **Tip:** Môžete rýchlo spustiť markdownlint a cSpell kontroly na vašich markdown súboroch pomocou poskytnutého PowerShell skriptu `scripts/validate-markdown.ps1`. Tento skript pomáha automatizovať bežné kontroly formátovania a pravopisu, aby vaše príspevky spĺňali naše pokyny.

Môžete ho spustiť z koreňa repozitára pomocou PowerShell:

```powershell
./scripts/validate-markdown.ps1
```

### Bežné chyby markdownlint a ich opravy

- **MD036**: Používajte správne nadpisy (`## Nadpis`) namiesto zvýraznenia (`**Tučný text**`)
- **MD007**: Opravte odsadenie nečíslovaných zoznamov (používajte 2 medzery, nie 4)
- **MD022**: Pridajte prázdne riadky pred a po nadpisoch
- **MD032**: Pridajte prázdne riadky pred a po zoznamoch
- **MD009**: Odstráňte medzery na konci riadkov

### GitHub workflow

Náš repozitár obsahuje GitHub workflow, ktorý automaticky spúšťa markdownlint na všetkých pull requestoch. Workflow:

- Používa rovnaký markdownlint-cli2 nástroj, ktorý môžete spustiť lokálne
- Vylučuje súbory `SUPPORT.md`, `SECURITY.md` a `CODE_OF_CONDUCT.md`
- Používa našu `.markdownlint.jsonc` konfiguráciu
- Hlási problémy ako varovania, čo umožňuje zlúčenie PR, pričom upozorňuje na možnosti formátovania

### Rozšírenie markdownlint pre VS Code

Ak používate VS Code, odporúčame nainštalovať [markdownlint rozšírenie](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) pre kontrolu markdownu v reálnom čase:

1. **Nainštalujte rozšírenie** - Vyhľadajte "markdownlint" od Davida Ansona v marketplace rozšírení VS Code
2. **Automatická konfigurácia** - Rozšírenie automaticky použije váš `.markdownlint.jsonc` konfiguračný súbor
3. **Spätná väzba v reálnom čase** - Zobrazí vlnovkové podčiarknutia na problémoch s formátovaním markdownu počas písania
4. **Rýchle opravy** - Použite `Ctrl+.` (Cmd+. na Macu) na zobrazenie dostupných automatických opráv pre mnohé problémy
5. **Panel problémov** - Zobrazte všetky problémy markdownu v paneli Problémy v VS Code

Toto poskytuje okamžitú spätnú väzbu počas písania, čo uľahčuje dodržiavanie štandardov markdown pred odoslaním zmien.

## Kontrola pravopisu

Používame cSpell (Code Spell Checker) na udržanie konzistentného pravopisu vo všetkej našej dokumentácii. To pomáha zabezpečiť profesionálnu kvalitu a znižuje počet preklepov v celom repozitári.

### Inštalácia cSpell

Ak chcete spustiť cSpell lokálne, nainštalujte ho globálne:

```powershell
npm install -g cspell
```

### Spúšťanie cSpell lokálne

Po inštalácii môžete spustiť cSpell na kontrolu pravopisu v dokumentácii:

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

### Konfigurácia

Naša konfigurácia cSpell je definovaná v `cspell.json` v koreňovom adresári repozitára. Táto konfigurácia:

- Zahŕňa vlastné slová špecifické pre našu oblasť (Copilot, SharePoint, Dataverse, atď.)
- Ignoruje bežné typy súborov, ktoré nepotrebujú kontrolu pravopisu (obrázky, súbory buildu)
- Nastavuje jazyk na angličtinu pre kontrolu pravopisu

### Pridávanie nových slov

Ak narazíte na slovo, ktoré cSpell označí ako nesprávne napísané, ale je v skutočnosti správne (napríklad názvy produktov, technické termíny alebo vlastné mená), môžete ho pridať do poľa `words` v `cspell.json`:

```json
{
  "words": [
    "Contoso",
    "Dataverse",
    "YourNewWord"
  ]
}
```

### Rozšírenie cSpell pre VS Code

Ak používate VS Code s [rozšírením Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker), môžete rýchlo pridávať slová do svojej konfigurácie:

1. **Zobraziť chyby pravopisu** - Hľadajte vlnovkové podčiarknutia na nesprávne napísaných slovách
1. **Použiť rýchlu opravu** - Kliknite pravým tlačidlom na podčiarknuté slovo alebo použite `Ctrl+.` (Cmd+. na Macu)
1. **Pridať do konfigurácie** - Vyberte "Spelling -> Add to cSpell configuration" z kontextového menu
1. **Vybrať umiestnenie** - Rozšírenie automaticky pridá slovo do vášho súboru `cspell.json`

Toto je oveľa rýchlejšie než manuálne upravovanie konfiguračného súboru pre jednotlivé slová.

### Najlepšie praktiky pre pravopis

1. **Spustite kontrolu pravopisu pred commitom**: Vždy spustite `cspell "docs/**/*.md"` pred odoslaním zmien
1. **Opravte preklepy namiesto ignorovania**: Ak je to možné, opravte skutočné chyby pravopisu namiesto pridávania do zoznamu slov
1. **Používajte konzistentnú terminológiu**: Držte sa zavedených názvov produktov a technických termínov

## Lokálny náhľad dokumentácie s MkDocs

Používame MkDocs s Material témou na generovanie našej dokumentačnej stránky. Môžete ju spustiť lokálne na náhľad vašich zmien pred odoslaním pull requestu.

📖 **Viac informácií**: [Dokumentácia MkDocs](https://www.mkdocs.org/) | [Material pre MkDocs](https://squidfunk.github.io/mkdocs-material/)

### Nastavenie Python prostredia vo VS Code

Odporúčame používať virtuálne prostredie na izoláciu závislostí pre tento projekt. VS Code tento proces zjednodušuje a automaticky nainštaluje Python, ak je to potrebné.

> **GitHub Codespaces**: Tieto pokyny fungujú perfektne v GitHub Codespaces, ktoré majú predinštalovaný Python a pripravené prostredie VS Code.

📖 **Viac informácií**: [Python vo VS Code](https://code.visualstudio.com/docs/languages/python) | [Python prostredia vo VS Code](https://code.visualstudio.com/docs/python/environments)

#### Predpoklady

**Nainštalujte rozšírenie Python**: Nainštalujte [rozšírenie Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) od Microsoftu z marketplace VS Code, ak ste tak ešte neurobili.

#### Nastavenie vo VS Code

1. **Vytvorte virtuálne prostredie**:
   - Otvorte Command Palette (`Ctrl+Shift+P` na Windows/Linux, `Cmd+Shift+P` na Macu)
   - Napíšte "Python: Create Environment" a vyberte ho
   - Zvoľte "Venv" (virtuálne prostredie)
   - Ak nie sú dostupné žiadne Python interpretery, VS Code vás prevedie inštaláciou Pythonu
   - Vyberte svoj Python interpreter (Python 3.8+)
   - VS Code vytvorí priečinok `.venv` a automaticky ho aktivuje

2. **Overte nastavenie**:
   - Otvorte nový integrovaný terminál (`` Ctrl+Shift+` `` na Windows/Linux, `` Cmd+Shift+` `` na Macu alebo `View > Terminal`)
   - Mali by ste vidieť `(.venv)` v prompti terminálu
   - Spustite: `python --version` na overenie

> **Poznámka**: Otvorenie nového terminálu zabezpečí správnu aktiváciu Python prostredia. Ak preferujete používanie existujúceho Python prostredia namiesto vytvárania nového virtuálneho prostredia, môžete použiť "Python: Select Interpreter" z Command Palette a vybrať preferované prostredie.

### Inštalácia MkDocs vo VS Code

S nastaveným Python prostredím vo VS Code nainštalujte MkDocs a Material tému:

1. **Otvorte integrovaný terminál VS Code** (`Ctrl+`` ` alebo `View > Terminal`)
2. **Uistite sa, že vaše virtuálne prostredie je aktívne** (mali by ste vidieť `(.venv)` v prompti)
3. **Nainštalujte balíky**:

   ```bash
   pip install mkdocs mkdocs-material
   ```

### Spúšťanie MkDocs vo VS Code

Ak chcete spustiť lokálny vývojový server s automatickým načítaním:

1. **V integrovanom termináli VS Code** spustite:

   ```bash
   mkdocs serve
   ```

2. **Stránka bude dostupná na**: `http://127.0.0.1:8000/agent-academy/`

### Náhľad vo VS Code Simple Browser

Pre najlepší vývojový zážitok bez opustenia VS Code:

1. **Spustite MkDocs server** v integrovanom termináli (ako je uvedené vyššie)
2. **Otvorte Simple Browser**:
   - **Metóda 1**: Otvorte Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
   - Napíšte "Simple Browser: Show" a vyberte ho
   - Zadajte URL: `http://127.0.0.1:8000/agent-academy/`

   - **Metóda 2**: Kliknite pravým tlačidlom na URL v terminálovom výstupe a vyberte "Follow Link"

   - **Metóda 3**: Použite `Ctrl+Click` (Windows) alebo `Cmd+Click` (Mac) na URL v termináli

3. **Umiestnite prehliadač**: Môžete ukotviť Simple Browser vedľa vášho editora pre paralelné upravovanie a náhľad

### Výhody pracovného priestoru VS Code

Práca výhradne vo VS Code poskytuje tieto výhody:

- **Integrovaný terminál**: Nie je potrebné prepínať medzi aplikáciami
- **Paralelný náhľad**: Upraviť markdown a vidieť zmeny súčasne  
- **Navigácia odkazov**: Kliknite na URL v termináli priamo na otvorenie Simple Browser
- **Integrácia rozšírení**: Rozšírenia Python, markdownlint a cSpell spolupracujú
- **Git integrácia**: Zabudovaný panel na správu zdrojového kódu pre commity a pull requesty

### Funkcie automatického načítania

Pri spustení `mkdocs serve` získate:

- **Automatické obnovenie**: Zmeny v akomkoľvek `.md` súbore v priečinku `docs/` automaticky obnovia prehliadač
- **Aktualizácie konfigurácie**: Zmeny v `mkdocs.yml` tiež spustia opätovné zostavenie
- **Náhľad v reálnom čase**: Okamžite vidíte svoje formátovanie, odkazy a zmeny obsahu
- **Validácia odkazov**: MkDocs vás upozorní na nefunkčné interné odkazy

### Užitočné príkazy MkDocs vo VS Code

Spustite tieto príkazy v integrovanom termináli VS Code:

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

> **Tip:** Ak chcete lokálne zobraziť dokumentáciu so všetkými skontrolovanými závislosťami, použite PowerShell skript `scripts/serve-docs.ps1`.

### Výhody lokálneho náhľadu

- **Okamžitá spätná väzba**: Vidíte, ako sa váš markdown zobrazuje s Material témou
- **Validácia odkazov**: Zistite nefunkčné odkazy pred ich zverejnením
- **Testovanie navigácie**: Overte, že váš obsah sa zobrazuje v správnych sekciách
- **Náhľad na mobilných zariadeniach**: Otestujte, ako váš obsah vyzerá na rôznych veľkostiach obrazovky
- **Kontrola výkonu**: Uistite sa, že obrázky a zdroje sa načítavajú správne

## Otázky?

Ak máte otázky o formátovaní markdown alebo pokynoch na prispievanie, prosím:

1. Preštudujte si tento

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Aj keď sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za žiadne nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.