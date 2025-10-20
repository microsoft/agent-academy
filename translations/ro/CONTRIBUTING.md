<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-20T17:03:33+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "ro"
}
-->
# Contribuirea la MCS Agent Academy

Mulțumim pentru interesul acordat contribuției la MCS Agent Academy! Acest ghid vă va ajuta să configurați mediul de dezvoltare și să înțelegeți standardele noastre de documentare.

## Standardele de Documentare

Urmăm standardele de documentare ale Microsoft pentru a asigura conținut consistent și de înaltă calitate. Pentru îndrumări complete despre cum să scrieți documentație eficientă, consultați:

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - Ghid complet pentru redactarea documentației conform stilului și standardelor Microsoft.

Acest ghid acoperă:

- Scrierea unui conținut clar și concis
- Utilizarea corectă a sintaxei markdown
- Folosirea unei terminologii consistente
- Structurarea eficientă a documentației
- Cele mai bune practici pentru accesibilitate

## Verificarea Markdown

Folosim markdownlint pentru a asigura o formatare și o calitate consistentă în întreaga documentație. Acest lucru ajută la menținerea lizibilității și standardelor profesionale în întregul depozit.

### Instalarea markdownlint-cli2

Pentru a rula markdownlint local și a se potrivi cu fluxul nostru de lucru GitHub, instalați markdownlint-cli2:

```powershell
npm install -g markdownlint-cli2
```

### Rularea markdownlint local

După instalare, puteți rula markdownlint pe toate fișierele markdown din depozit:

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### Configurare

Configurația markdownlint este definită în `.markdownlint.jsonc` la rădăcina depozitului. Această configurație:

- Dezactivează verificările lungimii liniei (MD013), deoarece nu am definit un standard
- Permite titluri duplicate doar în secțiuni surori (MD024) pentru secțiuni comune de șablon
- Dezactivează validarea prefixului listelor ordonate (MD029) global din cauza conținutului indentat care resetează numerotarea
- Permite utilizarea blocurilor de cod pentru text (MD046)

### Adăugarea excepțiilor inline pentru regulile markdownlint

Deși configurația noastră globală gestionează cele mai multe scenarii comune, este posibil să întâlniți situații în care trebuie să adăugați excepții inline pentru reguli markdownlint specifice în fișiere individuale. Iată exemple despre cum să faceți acest lucru:

#### Opțiunea 1: Ignorare pentru linia următoare

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### Opțiunea 2: Ignorare pentru un interval specific

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

#### Opțiunea 3: Ignorare pentru întregul fișier

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> Plasați aceste excepții în partea de sus a fișierului markdown pentru a dezactiva reguli specifice pentru întregul document

### Când să utilizați excepții inline

Este posibil să aveți nevoie de excepții pentru diverse reguli markdownlint atunci când:

1. **MD029 (Numerotarea listelor ordonate)**: Continuarea listelor numerotate după alt conținut, numerotarea intenționată care nu începe de la 1 sau conținut complex în formă de cuiburi
2. **MD013 (Lungimea liniei)**: Exemple de cod, URL-uri sau conținut tehnic care nu poate fi împărțit rezonabil pe linii
3. **MD033 (HTML inline)**: Când aveți nevoie de elemente HTML specifice pentru formatare care nu pot fi realizate cu markdown
4. **MD041 (Titlu pe prima linie)**: Fișiere șablon sau documente care intenționat nu încep cu un titlu

### Cele mai bune practici

1. **Utilizați excepțiile cu moderație**: Adăugați excepții doar atunci când este necesar pentru claritatea documentației
2. **Comentați excepțiile**: Când utilizați excepții, adăugați un comentariu scurt care explică motivul
3. **Preferați `markdownlint-disable-next-line`**: Este mai precis decât dezactivarea pentru secțiuni întregi
4. **Rulați linter-ul înainte de a face commit**: Rulați întotdeauna `markdownlint-cli2 "**/*.md"` înainte de a trimite modificări

> **Sfat:** Puteți rula rapid verificările markdownlint și cSpell pe fișierele markdown utilizând scriptul PowerShell `scripts/validate-markdown.ps1`. Acest script ajută la automatizarea verificărilor comune de formatare și ortografie pentru a vă asigura că contribuțiile respectă liniile noastre directoare.

Puteți rula scriptul din rădăcina depozitului utilizând PowerShell:

```powershell
./scripts/validate-markdown.ps1
```

### Erori comune markdownlint și soluții

- **MD036**: Utilizați titluri corecte (`## Titlu`) în loc de accentuare (`**Text îngroșat**`)
- **MD007**: Corectați indentarea listelor neordonate (folosiți 2 spații, nu 4)
- **MD022**: Adăugați linii goale înainte și după titluri
- **MD032**: Adăugați linii goale înainte și după liste
- **MD009**: Eliminați spațiile de la sfârșitul liniilor

### Fluxul de lucru GitHub

Depozitul nostru include un flux de lucru GitHub care rulează automat markdownlint pe toate cererile de pull. Fluxul de lucru:

- Folosește același instrument markdownlint-cli2 pe care îl puteți rula local
- Exclude fișierele `SUPPORT.md`, `SECURITY.md` și `CODE_OF_CONDUCT.md`
- Utilizează configurația noastră `.markdownlint.jsonc`
- Raportează problemele ca avertismente, permițând fuziunea PR-urilor în timp ce evidențiază oportunitățile de formatare

### Extensia markdownlint pentru VS Code

Dacă utilizați VS Code, vă recomandăm să instalați [extensia markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) pentru verificarea markdown în timp real:

1. **Instalați extensia** - Căutați "markdownlint" de David Anson în piața de extensii VS Code
2. **Configurare automată** - Extensia va utiliza automat fișierul dvs. de configurare `.markdownlint.jsonc`
3. **Feedback în timp real** - Veți vedea sublinieri ondulate pe problemele de formatare markdown pe măsură ce scrieți
4. **Corecții rapide** - Utilizați `Ctrl+.` (Cmd+. pe Mac) pentru a vedea corecțiile automate disponibile pentru multe probleme
5. **Panoul de probleme** - Vizualizați toate problemele markdown în panoul de probleme din VS Code

Acest lucru oferă feedback imediat în timp ce scrieți, făcând mai ușor să respectați standardele markdown înainte de a face commit modificărilor.

## Verificarea Ortografică

Folosim cSpell (Code Spell Checker) pentru a menține o ortografie consistentă în întreaga documentație. Acest lucru ajută la asigurarea calității profesionale și la reducerea greșelilor de tipar în depozit.

### Instalarea cSpell

Pentru a rula cSpell local, instalați-l global:

```powershell
npm install -g cspell
```

### Rularea cSpell local

După instalare, puteți rula cSpell pentru a verifica ortografia în documentație:

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

### Configurare

Configurația cSpell este definită în `cspell.json` la rădăcina depozitului. Această configurație:

- Include cuvinte personalizate specifice domeniului nostru (Copilot, SharePoint, Dataverse etc.)
- Ignoră tipuri comune de fișiere care nu necesită verificare ortografică (imagini, fișiere de construcție)
- Setează limba la engleză pentru verificarea ortografică

### Adăugarea de cuvinte noi

Dacă întâlniți un cuvânt pe care cSpell îl marchează ca greșit, dar este de fapt corect (cum ar fi numele produselor, termeni tehnici sau nume proprii), îl puteți adăuga în array-ul `words` din `cspell.json`:

```json
{
  "words": [
    "Contoso",
    "Dataverse",
    "YourNewWord"
  ]
}
```

### Extensia cSpell pentru VS Code

Dacă utilizați VS Code cu extensia [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker), puteți adăuga rapid cuvinte în configurație:

1. **Vizualizați erorile de ortografie** - Căutați sublinieri ondulate pe cuvintele greșite
1. **Utilizați Corecția Rapidă** - Faceți clic dreapta pe cuvântul subliniat sau utilizați `Ctrl+.` (Cmd+. pe Mac)
1. **Adăugați în configurație** - Selectați "Spelling -> Add to cSpell configuration" din meniul contextual
1. **Alegeți locația** - Extensia va adăuga automat cuvântul în fișierul dvs. `cspell.json`

Acest lucru este mult mai rapid decât editarea manuală a fișierului de configurație pentru cuvinte individuale.

### Cele mai bune practici pentru ortografie

1. **Rulați verificarea ortografică înainte de commit**: Rulați întotdeauna `cspell "docs/**/*.md"` înainte de a trimite modificări
1. **Corectați greșelile în loc să le ignorați**: Când este posibil, corectați greșelile reale de ortografie în loc să le adăugați în lista de cuvinte
1. **Utilizați terminologia consistentă**: Respectați numele produselor și termenii tehnici stabiliți

## Previzualizarea Documentației Local cu MkDocs

Folosim MkDocs cu tema Material pentru a genera site-ul nostru de documentație. Puteți rula MkDocs local pentru a previzualiza modificările înainte de a trimite o cerere de pull.

📖 **Aflați mai multe**: [Documentația MkDocs](https://www.mkdocs.org/) | [Material pentru MkDocs](https://squidfunk.github.io/mkdocs-material/)

### Configurarea Mediului Python în VS Code

Recomandăm utilizarea unui mediu virtual pentru a izola dependențele acestui proiect. VS Code face acest proces simplu și va gestiona instalarea Python dacă este necesar.

> **GitHub Codespaces**: Aceste instrucțiuni funcționează perfect în GitHub Codespaces, care vine cu Python preinstalat și mediul VS Code gata de utilizare.

📖 **Aflați mai multe**: [Python în VS Code](https://code.visualstudio.com/docs/languages/python) | [Mediile Python în VS Code](https://code.visualstudio.com/docs/python/environments)

#### Cerințe preliminare

**Instalați Extensia Python**: Instalați [extensia Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) de la Microsoft din piața de extensii VS Code, dacă nu ați făcut-o deja.

#### Configurare în VS Code

1. **Creați un mediu virtual**:
   - Deschideți Paleta de Comenzi (`Ctrl+Shift+P` pe Windows/Linux, `Cmd+Shift+P` pe Mac)
   - Tastați "Python: Create Environment" și selectați opțiunea
   - Alegeți "Venv" (mediu virtual)
   - Dacă nu sunt disponibile interpreți Python, VS Code vă va ghida prin instalarea Python
   - Selectați interpretul Python (Python 3.8+)
   - VS Code va crea un folder `.venv` și îl va activa automat

2. **Verificați configurarea**:
   - Deschideți un terminal integrat nou (`` Ctrl+Shift+` `` pe Windows/Linux, `` Cmd+Shift+` `` pe Mac sau `View > Terminal`)
   - Ar trebui să vedeți `(.venv)` în promptul terminalului
   - Rulați: `python --version` pentru verificare

> **Notă**: Deschiderea unui terminal nou asigură activarea corectă a mediului Python. Dacă preferați să utilizați un mediu Python existent în loc să creați unul nou, puteți folosi "Python: Select Interpreter" din Paleta de Comenzi și să alegeți mediul preferat.

### Instalarea MkDocs în VS Code

Cu mediul Python configurat în VS Code, instalați MkDocs și tema Material:

1. **Deschideți terminalul integrat al VS Code** (`Ctrl+`` ` sau `View > Terminal`)
2. **Asigurați-vă că mediul virtual este activ** (ar trebui să vedeți `(.venv)` în prompt)
3. **Instalați pachetele**:

   ```bash
   pip install mkdocs mkdocs-material
   ```

### Rularea MkDocs în VS Code

Pentru a porni serverul de dezvoltare local cu reîncărcare automată:

1. **În terminalul integrat al VS Code**, rulați:

   ```bash
   mkdocs serve
   ```

2. **Site-ul va fi disponibil la**: `http://127.0.0.1:8000/agent-academy/`

### Previzualizare în Simple Browser din VS Code

Pentru cea mai bună experiență de dezvoltare fără a părăsi VS Code:

1. **Porniți serverul MkDocs** în terminalul integrat (așa cum este arătat mai sus)
2. **Deschideți Simple Browser**:
   - **Metoda 1**: Deschideți Paleta de Comenzi (`Ctrl+Shift+P` / `Cmd+Shift+P`)
   - Tastați "Simple Browser: Show" și selectați opțiunea
   - Introduceți URL-ul: `http://127.0.0.1:8000/agent-academy/`

   - **Metoda 2**: Faceți clic dreapta pe URL-ul din ieșirea terminalului și selectați "Follow Link"

   - **Metoda 3**: Utilizați `Ctrl+Click` (Windows) sau `Cmd+Click` (Mac) pe URL-ul din terminal

3. **Poziționați browserul**: Puteți fixa Simple Browser alături de editorul dvs. pentru editare și previzualizare simultană

### Beneficiile Workspace-ului VS Code

Lucrul complet în VS Code oferă aceste avantaje:

- **Terminal integrat**: Nu este nevoie să comutați între aplicații
- **Previzualizare alături**: Editați markdown și vedeți modificările simultan  
- **Navigare prin linkuri**: Faceți clic pe URL-urile din terminal pentru a deschide Simple Browser
- **Integrarea extensiilor**: Extensiile Python, markdownlint și cSpell funcționează împreună
- **Integrarea Git**: Panoul de control al sursei încorporat pentru commit-uri și cereri de pull

### Funcții de reîncărcare automată

Când rulați `mkdocs serve`, beneficiați de:

- **Reîmprospătare automată**: Modificările la orice fișier `.md` din folderul `docs/` reîncarcă automat browserul
- **Actualizări de configurare**: Modificările la `mkdocs.yml` declanșează, de asemenea, reconstruiri
- **Previzualizare în timp real**: Vedeți formatările, linkurile și modificările de conținut instantaneu
- **Validarea linkurilor**: MkDocs vă va avertiza despre linkurile interne rupte

### Comenzi utile MkDocs în VS Code

Rulați aceste comenzi în terminalul integrat al VS Code:

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

> **Sfat:** Pentru a previzualiza documentația local cu toate dependențele verificate, utilizați scriptul PowerShell `scripts/serve-docs.ps1`.

### Beneficiile previzualizării locale

- **Feedback imediat**: Vedeți cum se redă markdown-ul dvs. cu tema Material
- **Validarea linkurilor**: Identificați linkurile rupte înainte de a fi publicate
- **Testarea navigării**: Verificați dacă conținutul dvs. apare în secțiunile corecte
- **Previzualizare mobilă**: Testați cum arată conținutul dvs. pe diferite dimensiuni de ecran
- **Verificarea performanței**: Asigurați-vă că imaginile și resursele se încarcă corect

## Întrebări?

Dacă aveți întrebări despre formatarea markdown sau liniile directoare de contribuție, vă rugăm:

1. Să revizuiți acest ghid de contribuție
1. Să verificați problemele existente pentru întrebări similare
1. Să deschideți o problemă nouă

Contribuție plăcută! 🚀

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.