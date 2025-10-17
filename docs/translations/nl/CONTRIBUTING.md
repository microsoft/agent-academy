<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-17T01:12:05+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "nl"
}
-->
# Bijdragen aan MCS Agent Academy

Bedankt voor je interesse in het bijdragen aan de MCS Agent Academy! Deze gids helpt je bij het opzetten van je ontwikkelomgeving en het begrijpen van onze documentatiestandaarden.

## Documentatiestandaarden

We volgen de documentatiestandaarden van Microsoft om consistente, hoogwaardige inhoud te garanderen. Voor uitgebreide richtlijnen over het schrijven van effectieve documentatie, raadpleeg:

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - Complete gids voor het schrijven van documentatie volgens de stijl en standaarden van Microsoft.

Deze bron behandelt:

- Het schrijven van duidelijke, beknopte inhoud
- Het correct gebruiken van markdown-syntaxis
- Het hanteren van consistente terminologie
- Het effectief structureren van documentatie
- Best practices voor toegankelijkheid

## Markdown Linting

We gebruiken markdownlint om consistente opmaak en kwaliteit in al onze documentatie te waarborgen. Dit helpt de leesbaarheid en professionele standaarden in de hele repository te behouden.

### markdownlint-cli2 installeren

Om markdownlint lokaal uit te voeren en overeen te komen met onze GitHub-workflow, installeer markdownlint-cli2:

```powershell
npm install -g markdownlint-cli2
```

### markdownlint lokaal uitvoeren

Na installatie kun je markdownlint uitvoeren op alle markdown-bestanden in de repository:

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### Configuratie

Onze markdownlint-configuratie is gedefinieerd in `.markdownlint.jsonc` in de hoofdmap van de repository. Deze configuratie:

- Schakelt controle op regellengte (MD013) uit omdat we geen standaard hebben gedefinieerd
- Staat dubbele koppen alleen toe bij siblings (MD024) voor veelvoorkomende sjabloonsecties
- Schakelt validatie van genummerde lijstprefixen (MD029) wereldwijd uit vanwege inspringende inhoud die nummering reset
- Staat toe dat codeblokken worden gebruikt voor tekst (MD046)

### Inline uitzonderingen toevoegen voor markdownlint-regels

Hoewel onze globale configuratie de meeste veelvoorkomende scenario's afdekt, kun je situaties tegenkomen waarin je inline uitzonderingen moet toevoegen voor specifieke markdownlint-regels in individuele bestanden. Hier zijn voorbeelden van hoe je dit kunt doen:

#### Optie 1: Negeer voor de volgende regel

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### Optie 2: Negeer voor een specifiek bereik

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

#### Optie 3: Negeer voor het hele bestand

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> Plaats deze helemaal bovenaan je markdown-bestand om specifieke regels voor het hele document uit te schakelen.

### Wanneer inline uitzonderingen te gebruiken

Je hebt mogelijk uitzonderingen nodig voor verschillende markdownlint-regels wanneer:

1. **MD029 (Genummerde lijstnummering)**: Doorgaan met genummerde lijsten na andere inhoud, opzettelijke nummering die niet bij 1 begint, of complexe geneste inhoud
2. **MD013 (Regellengte)**: Codevoorbeelden, URL's of technische inhoud die niet redelijk over regels kan worden verdeeld
3. **MD033 (Inline HTML)**: Wanneer je specifieke HTML-elementen nodig hebt voor opmaak die niet met markdown kan worden bereikt
4. **MD041 (Eerste regel kop)**: Sjabloonbestanden of documenten die opzettelijk niet met een kop beginnen

### Best practices

1. **Gebruik uitzonderingen spaarzaam**: Voeg alleen uitzonderingen toe wanneer dit nodig is voor de duidelijkheid van de documentatie
2. **Geef commentaar bij je uitzonderingen**: Voeg bij het gebruik van uitzonderingen een korte uitleg toe
3. **Geef de voorkeur aan `markdownlint-disable-next-line`**: Dit is preciezer dan uitschakelen voor hele secties
4. **Voer de linter uit voordat je commit**: Voer altijd `markdownlint-cli2 "**/*.md"` uit voordat je wijzigingen indient

> **Tip:** Je kunt markdownlint en cSpell snel controleren op je markdown-bestanden met het PowerShell-script `scripts/validate-markdown.ps1`. Dit script automatiseert veelvoorkomende opmaak- en spellingscontroles om ervoor te zorgen dat je bijdragen aan onze richtlijnen voldoen.

Je kunt het uitvoeren vanuit de hoofdmap van de repository met PowerShell:

```powershell
./scripts/validate-markdown.ps1
```

### Veelvoorkomende markdownlint-fouten en oplossingen

- **MD036**: Gebruik correcte koppen (`## Kop`) in plaats van nadruk (`**Vetgedrukte tekst**`)
- **MD007**: Corrigeer inspringing van ongenummerde lijsten (gebruik 2 spaties, geen 4)
- **MD022**: Voeg lege regels toe voor en na koppen
- **MD032**: Voeg lege regels toe voor en na lijsten
- **MD009**: Verwijder spaties aan het einde van regels

### GitHub-workflow

Onze repository bevat een GitHub-workflow die automatisch markdownlint uitvoert op alle pull requests. De workflow:

- Gebruikt dezelfde markdownlint-cli2-tool die je lokaal kunt uitvoeren
- Sluit de bestanden `SUPPORT.md`, `SECURITY.md` en `CODE_OF_CONDUCT.md` uit
- Gebruikt onze `.markdownlint.jsonc`-configuratie
- Rapporteert problemen als waarschuwingen, zodat PR's kunnen worden samengevoegd terwijl opmaakmogelijkheden worden gemarkeerd

### VS Code markdownlint-extensie

Als je VS Code gebruikt, raden we aan de [markdownlint-extensie](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) te installeren voor realtime markdown-linting:

1. **Installeer de extensie** - Zoek naar "markdownlint" van David Anson in de VS Code-extensiemarktplaats
2. **Automatische configuratie** - De extensie gebruikt automatisch je `.markdownlint.jsonc`-configuratiebestand
3. **Realtime feedback** - Zie golvende onderstrepingen bij markdown-opmaakproblemen terwijl je typt
4. **Snelle oplossingen** - Gebruik `Ctrl+.` (Cmd+. op Mac) om beschikbare automatische oplossingen te zien
5. **Problemenpaneel** - Bekijk alle markdown-problemen in het problemenpaneel van VS Code

Dit biedt directe feedback tijdens het schrijven, waardoor het gemakkelijker wordt om markdown-standaarden te volgen voordat je je wijzigingen commit.

## Spellingscontrole

We gebruiken cSpell (Code Spell Checker) om consistente spelling in al onze documentatie te behouden. Dit helpt professionele kwaliteit te waarborgen en typefouten in de hele repository te verminderen.

### cSpell installeren

Om cSpell lokaal uit te voeren, installeer het globaal:

```powershell
npm install -g cspell
```

### cSpell lokaal uitvoeren

Na installatie kun je cSpell uitvoeren om spelling in de documentatie te controleren:

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

### Configuratie

Onze cSpell-configuratie is gedefinieerd in `cspell.json` in de hoofdmap van de repository. Deze configuratie:

- Bevat aangepaste woorden die specifiek zijn voor ons domein (Copilot, SharePoint, Dataverse, enz.)
- Negeert veelvoorkomende bestandstypen die geen spellingscontrole nodig hebben (afbeeldingen, buildbestanden)
- Stelt de taal in op Engels voor spellingscontrole

### Nieuwe woorden toevoegen

Als je een woord tegenkomt dat door cSpell als verkeerd gespeld wordt gemarkeerd, maar eigenlijk correct is (zoals productnamen, technische termen of eigennamen), kun je het toevoegen aan de `words`-array in `cspell.json`:

```json
{
  "words": [
    "Contoso",
    "Dataverse",
    "YourNewWord"
  ]
}
```

### VS Code cSpell-extensie

Als je VS Code gebruikt met de [Code Spell Checker-extensie](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker), kun je snel woorden toevoegen aan je configuratie:

1. **Bekijk spelfouten** - Zoek naar golvende onderstrepingen bij verkeerd gespelde woorden
1. **Gebruik Snelle Oplossing** - Klik met de rechtermuisknop op het onderstreepte woord of gebruik `Ctrl+.` (Cmd+. op Mac)
1. **Toevoegen aan configuratie** - Selecteer "Spelling -> Toevoegen aan cSpell-configuratie" in het contextmenu
1. **Kies locatie** - De extensie voegt het woord automatisch toe aan je `cspell.json`-bestand

Dit is veel sneller dan handmatig het configuratiebestand bewerken voor individuele woorden.

### Best practices voor spelling

1. **Voer spellingscontrole uit voordat je commit**: Voer altijd `cspell "docs/**/*.md"` uit voordat je wijzigingen indient
1. **Corrigeer typefouten in plaats van ze te negeren**: Corrigeer waar mogelijk echte spelfouten in plaats van ze aan de woordenlijst toe te voegen
1. **Gebruik consistente terminologie**: Houd je aan vastgestelde productnamen en technische termen

## Lokale documentatievoorvertoning met MkDocs

We gebruiken MkDocs met het Material-thema om onze documentatiesite te genereren. Je kunt het lokaal uitvoeren om je wijzigingen te bekijken voordat je een pull request indient.

📖 **Meer informatie**: [MkDocs Documentatie](https://www.mkdocs.org/) | [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)

### Python-omgeving instellen in VS Code

We raden aan een virtuele omgeving te gebruiken om afhankelijkheden voor dit project te isoleren. VS Code maakt dit proces eenvoudig en zal indien nodig Python installeren.

> **GitHub Codespaces**: Deze instructies werken perfect in GitHub Codespaces, dat vooraf geïnstalleerde Python en een gebruiksklare VS Code-omgeving biedt.

📖 **Meer informatie**: [Python in VS Code](https://code.visualstudio.com/docs/languages/python) | [Python-omgevingen in VS Code](https://code.visualstudio.com/docs/python/environments)

#### Vereisten

**Installeer Python-extensie**: Installeer de [Python-extensie](https://marketplace.visualstudio.com/items?itemName=ms-python.python) van Microsoft uit de VS Code-marktplaats als je dat nog niet hebt gedaan.

#### Instellen in VS Code

1. **Maak een virtuele omgeving aan**:
   - Open de Command Palette (`Ctrl+Shift+P` op Windows/Linux, `Cmd+Shift+P` op Mac)
   - Typ "Python: Create Environment" en selecteer het
   - Kies "Venv" (virtuele omgeving)
   - Als er geen Python-interpreters beschikbaar zijn, begeleidt VS Code je bij het installeren van Python
   - Selecteer je Python-interpreter (Python 3.8+)
   - VS Code maakt een `.venv`-map en activeert deze automatisch

2. **Controleer de installatie**:
   - Open een nieuwe geïntegreerde terminal (`` Ctrl+Shift+` `` op Windows/Linux, `` Cmd+Shift+` `` op Mac, of `View > Terminal`)
   - Je zou `(.venv)` in de terminalprompt moeten zien
   - Voer uit: `python --version` om te controleren

> **Opmerking**: Het openen van een nieuwe terminal zorgt ervoor dat de Python-omgeving correct wordt geactiveerd. Als je liever een bestaande Python-omgeving gebruikt in plaats van een nieuwe virtuele omgeving te maken, kun je "Python: Select Interpreter" gebruiken in de Command Palette en je gewenste omgeving kiezen.

### MkDocs installeren in VS Code

Met je Python-omgeving ingesteld in VS Code, installeer MkDocs en het Material-thema:

1. **Open de geïntegreerde terminal van VS Code** (`Ctrl+`` ` of `View > Terminal`)
2. **Zorg ervoor dat je virtuele omgeving actief is** (je zou `(.venv)` in de prompt moeten zien)
3. **Installeer de pakketten**:

   ```bash
   pip install mkdocs mkdocs-material
   ```

### MkDocs uitvoeren in VS Code

Om de lokale ontwikkelserver met automatische herlaadfunctie te starten:

1. **In de geïntegreerde terminal van VS Code**, voer uit:

   ```bash
   mkdocs serve
   ```

2. **De site is beschikbaar op**: `http://127.0.0.1:8000/agent-academy/`

### Voorvertoning in VS Code Simple Browser

Voor de beste ontwikkelervaring zonder VS Code te verlaten:

1. **Start MkDocs-server** in de geïntegreerde terminal (zoals hierboven getoond)
2. **Open Simple Browser**:
   - **Methode 1**: Open de Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
   - Typ "Simple Browser: Show" en selecteer het
   - Voer URL in: `http://127.0.0.1:8000/agent-academy/`

   - **Methode 2**: Klik met de rechtermuisknop op de URL in de terminaluitvoer en selecteer "Link volgen"

   - **Methode 3**: Gebruik `Ctrl+Klik` (Windows) of `Cmd+Klik` (Mac) op de URL in de terminal

3. **Positioneer de browser**: Je kunt de Simple Browser naast je editor plaatsen voor gelijktijdig bewerken en voorvertonen

### Voordelen van VS Code-werkruimte

Volledig werken binnen VS Code biedt deze voordelen:

- **Geïntegreerde terminal**: Geen noodzaak om tussen applicaties te schakelen
- **Voorvertoning naast elkaar**: Bewerk markdown en bekijk wijzigingen tegelijkertijd  
- **Linknavigatie**: Klik direct op terminal-URL's om Simple Browser te openen
- **Extensie-integratie**: Python-, markdownlint- en cSpell-extensies werken samen
- **Git-integratie**: Ingebouwd broncontrolepaneel voor commits en pull requests

### Functies van automatische herlaadfunctie

Bij het uitvoeren van `mkdocs serve` krijg je:

- **Automatisch vernieuwen**: Wijzigingen in een `.md`-bestand in de map `docs/` worden automatisch in de browser geladen
- **Configuratie-updates**: Wijzigingen in `mkdocs.yml` activeren ook herbouw
- **Realtime voorvertoning**: Bekijk direct je opmaak, links en inhoudswijzigingen
- **Linkvalidatie**: MkDocs waarschuwt je voor gebroken interne links

### Handige MkDocs-commando's in VS Code

Voer deze commando's uit in de geïntegreerde terminal van VS Code:

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

> **Tip:** Gebruik het PowerShell-script `scripts/serve-docs.ps1` om de documentatie lokaal te bekijken met alle afhankelijkheden gecontroleerd.

### Voordelen van lokale voorvertoning

- **Directe feedback**: Bekijk hoe je markdown wordt weergegeven met het Material-thema
- **Linkvalidatie**: Controleer gebroken links voordat ze live gaan
- **Navigatietests**: Controleer of je inhoud in de juiste secties verschijnt
- **Mobiele voorvertoning**: Test hoe je inhoud eruitziet op verschillende schermformaten
- **Prestatiecontrole**: Zorg ervoor dat afbeeldingen en middelen correct worden geladen

## Vragen?

Als je vragen hebt over markdown-opmaak of richtlijnen voor bijdragen, kun je:

1. Deze bijdragegids doornemen
1. Bestaande issues controleren op soortgelijke vragen
1. Een nieuw issue openen

Veel succes met bijdragen! 🚀

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.