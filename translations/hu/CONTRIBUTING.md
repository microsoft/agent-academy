<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-20T17:02:07+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "hu"
}
-->
# Hozzájárulás az MCS Agent Academy-hoz

Köszönjük, hogy érdeklődsz az MCS Agent Academy-hoz való hozzájárulás iránt! Ez az útmutató segít beállítani a fejlesztési környezetet és megérteni a dokumentációs szabványainkat.

## Dokumentációs szabványok

A Microsoft dokumentációs szabványait követjük, hogy egységes, magas színvonalú tartalmat biztosítsunk. Az alábbi útmutatóban részletes információkat találsz arról, hogyan írj hatékony dokumentációt:

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - Teljes útmutató a Microsoft stílusának és szabványainak megfelelő dokumentáció írásához.

Ez az erőforrás az alábbiakat tartalmazza:

- Világos, tömör tartalom írása
- Helyes markdown szintaxis használata
- Egységes terminológia követése
- Dokumentáció hatékony strukturálása
- Hozzáférhetőségi legjobb gyakorlatok

## Markdown lintelés

A markdownlint eszközt használjuk, hogy biztosítsuk az egységes formázást és minőséget az összes dokumentációnkban. Ez segít fenntartani az olvashatóságot és a professzionális színvonalat a teljes adattárban.

### markdownlint-cli2 telepítése

A markdownlint helyi futtatásához és a GitHub munkafolyamatunkkal való egyezéshez telepítsd a markdownlint-cli2-t:

```powershell
npm install -g markdownlint-cli2
```

### markdownlint helyi futtatása

A telepítés után futtathatod a markdownlint-et az adattár összes markdown fájlján:

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### Konfiguráció

A markdownlint konfigurációnk a `.markdownlint.jsonc` fájlban található az adattár gyökerében. Ez a konfiguráció:

- Kikapcsolja a sorhosszúság ellenőrzését (MD013), mivel nem határoztunk meg szabványt
- Engedélyezi az ismétlődő címsorokat csak testvérszakaszokban (MD024) a gyakori sablonrészekhez
- Globálisan kikapcsolja a számozott listák előtagjának ellenőrzését (MD029) a behúzott tartalom számozásának visszaállítása miatt
- Engedélyezi a kódrészletek szövegként való használatát (MD046)

### Inline kivételek hozzáadása markdownlint szabályokhoz

Bár a globális konfigurációnk a legtöbb általános helyzetet kezeli, előfordulhat, hogy inline kivételeket kell hozzáadnod bizonyos markdownlint szabályokhoz egyedi fájlokban. Íme néhány példa arra, hogyan teheted ezt meg:

#### Opció 1: Kivétel a következő sorra

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### Opció 2: Kivétel egy adott tartományra

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

#### Opció 3: Kivétel az egész fájlra

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> Ezeket a markdown fájl tetejére helyezd, hogy az egész dokumentumra vonatkozó szabályokat letiltsd.

### Mikor használj inline kivételeket

Lehet, hogy kivételekre van szükséged különböző markdownlint szabályok esetében, például:

1. **MD029 (Számozott lista számozása)**: Számozott listák folytatása más tartalom után, szándékos számozás, amely nem 1-től kezdődik, vagy összetett, beágyazott tartalom
2. **MD013 (Sorhosszúság)**: Kódpéldák, URL-ek vagy technikai tartalom, amelyet ésszerűen nem lehet sorokra bontani
3. **MD033 (Inline HTML)**: Ha speciális HTML elemekre van szükséged olyan formázáshoz, amelyet markdownnal nem lehet elérni
4. **MD041 (Első sor címsor)**: Sablonfájlok vagy dokumentumok, amelyek szándékosan nem címsorral kezdődnek

### Legjobb gyakorlatok

1. **Használj kivételeket takarékosan**: Csak akkor adj hozzá kivételeket, ha szükséges a dokumentáció érthetősége érdekében
2. **Kommentáld a kivételeidet**: Ha kivételeket használsz, adj hozzá rövid magyarázó megjegyzést
3. **Előnyben részesítsd a `markdownlint-disable-next-line` használatát**: Ez pontosabb, mint az egész szakaszok letiltása
4. **Futtasd a lintelőt beküldés előtt**: Mindig futtasd a `markdownlint-cli2 "**/*.md"` parancsot, mielőtt változtatásokat küldesz be

> **Tipp:** Gyorsan futtathatod a markdownlint és cSpell ellenőrzéseket a markdown fájlokon a `scripts/validate-markdown.ps1` PowerShell szkript segítségével. Ez a szkript automatizálja a gyakori formázási és helyesírási ellenőrzéseket, hogy biztosítsa a hozzájárulásaid megfelelőségét az irányelveinknek.

A szkriptet az adattár gyökeréből futtathatod PowerShell segítségével:

```powershell
./scripts/validate-markdown.ps1
```

### Gyakori markdownlint hibák és javítások

- **MD036**: Használj megfelelő címsorokat (`## Címsor`) hangsúlyozás helyett (`**Félkövér szöveg**`)
- **MD007**: Javítsd a rendezetlen lista behúzását (használj 2 szóközt, ne 4-et)
- **MD022**: Adj üres sorokat a címsorok előtt és után
- **MD032**: Adj üres sorokat a listák előtt és után
- **MD009**: Távolítsd el a sorok végén lévő felesleges szóközöket

### GitHub munkafolyamat

Az adattárunk tartalmaz egy GitHub munkafolyamatot, amely automatikusan futtatja a markdownlint-et minden pull request esetén. A munkafolyamat:

- Ugyanazt a markdownlint-cli2 eszközt használja, amelyet helyileg is futtathatsz
- Kizárja a `SUPPORT.md`, `SECURITY.md` és `CODE_OF_CONDUCT.md` fájlokat
- A `.markdownlint.jsonc` konfigurációnkat használja
- Figyelmeztetéseket jelent, lehetővé téve a PR-ek összevonását, miközben kiemeli a formázási lehetőségeket

### VS Code markdownlint bővítmény

Ha VS Code-ot használsz, javasoljuk a [markdownlint bővítmény](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) telepítését a valós idejű markdown linteléshez:

1. **Telepítsd a bővítményt** - Keress rá a "markdownlint" kifejezésre David Anson neve alatt a VS Code bővítmények piacán
2. **Automatikus konfiguráció** - A bővítmény automatikusan használja a `.markdownlint.jsonc` konfigurációs fájlodat
3. **Valós idejű visszajelzés** - Lásd a markdown formázási problémák aláhúzását gépelés közben
4. **Gyors javítások** - Használd a `Ctrl+.` (Mac-en Cmd+.) parancsot az elérhető automatikus javítások megtekintéséhez
5. **Problémák panel** - Tekintsd meg az összes markdown problémát a VS Code Problémák paneljén

Ez azonnali visszajelzést nyújt írás közben, megkönnyítve a markdown szabványok követését a változtatások beküldése előtt.

## Helyesírás-ellenőrzés

A cSpell (Code Spell Checker) eszközt használjuk, hogy fenntartsuk az egységes helyesírást az összes dokumentációnkban. Ez segít biztosítani a professzionális minőséget és csökkenti a helyesírási hibákat az adattárban.

### cSpell telepítése

A cSpell helyi futtatásához telepítsd globálisan:

```powershell
npm install -g cspell
```

### cSpell helyi futtatása

A telepítés után futtathatod a cSpell-t, hogy ellenőrizd a dokumentáció helyesírását:

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

### Konfiguráció

A cSpell konfigurációnk a `cspell.json` fájlban található az adattár gyökerében. Ez a konfiguráció:

- Tartalmazza a domainünkhöz kapcsolódó egyedi szavakat (Copilot, SharePoint, Dataverse stb.)
- Kizárja azokat a fájltípusokat, amelyek nem igényelnek helyesírás-ellenőrzést (képek, build fájlok)
- Az angol nyelvet állítja be helyesírás-ellenőrzéshez

### Új szavak hozzáadása

Ha olyan szót találsz, amelyet a cSpell hibásnak jelöl, de valójában helyes (például terméknevek, technikai kifejezések vagy tulajdonnevek), hozzáadhatod a `words` tömbhöz a `cspell.json` fájlban:

```json
{
  "words": [
    "Contoso",
    "Dataverse",
    "YourNewWord"
  ]
}
```

### VS Code cSpell bővítmény

Ha a VS Code-ot használod a [Code Spell Checker bővítménnyel](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker), gyorsan hozzáadhatsz szavakat a konfigurációhoz:

1. **Tekintsd meg a helyesírási hibákat** - Keresd a helytelen szavak aláhúzását
1. **Használd a Gyors Javítást** - Kattints jobb gombbal az aláhúzott szóra, vagy használd a `Ctrl+.` (Mac-en Cmd+.)
1. **Add hozzá a konfigurációhoz** - Válaszd a "Spelling -> Add to cSpell configuration" lehetőséget a helyi menüből
1. **Válaszd ki a helyet** - A bővítmény automatikusan hozzáadja a szót a `cspell.json` fájlhoz

Ez sokkal gyorsabb, mint egyedi szavak manuális hozzáadása a konfigurációs fájlhoz.

### Helyesírási legjobb gyakorlatok

1. **Futtasd a helyesírás-ellenőrzést beküldés előtt**: Mindig futtasd a `cspell "docs/**/*.md"` parancsot, mielőtt változtatásokat küldesz be
1. **Javítsd a hibákat, ne hagyd figyelmen kívül**: Ha lehetséges, javítsd a valódi helyesírási hibákat, ahelyett, hogy hozzáadnád őket a szavak listájához
1. **Használj egységes terminológiát**: Tartsd magad a már meglévő terméknevekhez és technikai kifejezésekhez

## Helyi dokumentációs előnézet MkDocs-szal

Az MkDocs-t használjuk a Material témával, hogy generáljuk a dokumentációs oldalunkat. Helyileg is futtathatod, hogy előnézetet kapj a változtatásaidról, mielőtt pull requestet küldesz be.

📖 **További információ**: [MkDocs Dokumentáció](https://www.mkdocs.org/) | [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)

### Python környezet beállítása VS Code-ban

Javasoljuk, hogy virtuális környezetet használj a projekt függőségeinek elkülönítésére. A VS Code megkönnyíti ezt a folyamatot, és szükség esetén kezeli a Python telepítését.

> **GitHub Codespaces**: Ezek az utasítások tökéletesen működnek a GitHub Codespaces-ben, amely előre telepített Python-t és kész VS Code környezetet biztosít.

📖 **További információ**: [Python a VS Code-ban](https://code.visualstudio.com/docs/languages/python) | [Python környezetek a VS Code-ban](https://code.visualstudio.com/docs/python/environments)

#### Előfeltételek

**Python bővítmény telepítése**: Telepítsd a [Python bővítményt](https://marketplace.visualstudio.com/items?itemName=ms-python.python) a Microsofttól a VS Code piactérről, ha még nem tetted meg.

#### Beállítás a VS Code-ban

1. **Hozz létre egy virtuális környezetet**:
   - Nyisd meg a Parancspalettát (`Ctrl+Shift+P` Windows/Linux rendszeren, `Cmd+Shift+P` Mac-en)
   - Írd be: "Python: Create Environment" és válaszd ki
   - Válaszd a "Venv" (virtuális környezet) lehetőséget
   - Ha nincs elérhető Python interpreter, a VS Code végigvezet a Python telepítésén
   - Válaszd ki a Python interpreteredet (Python 3.8+)
   - A VS Code létrehozza a `.venv` mappát és automatikusan aktiválja azt

2. **Ellenőrizd a beállítást**:
   - Nyiss meg egy új integrált terminált (`` Ctrl+Shift+` `` Windows/Linux rendszeren, `` Cmd+Shift+` `` Mac-en, vagy `View > Terminal`)
   - A terminál promptjában látnod kell a `(.venv)` jelölést
   - Futtasd: `python --version`, hogy ellenőrizd

> **Megjegyzés**: Egy új terminál megnyitása biztosítja, hogy a Python környezet megfelelően aktiválva legyen. Ha inkább meglévő Python környezetet használnál új virtuális környezet létrehozása helyett, használhatod a "Python: Select Interpreter" lehetőséget a Parancspalettában, és kiválaszthatod a preferált környezetet.

### MkDocs telepítése VS Code-ban

Miután beállítottad a Python környezetet a VS Code-ban, telepítsd az MkDocs-t és a Material témát:

1. **Nyisd meg a VS Code integrált terminálját** (`Ctrl+`` ` vagy `View > Terminal`)
2. **Győződj meg róla, hogy a virtuális környezeted aktív** (a promptban látnod kell a `(.venv)` jelölést)
3. **Telepítsd a csomagokat**:

   ```bash
   pip install mkdocs mkdocs-material
   ```

### MkDocs futtatása VS Code-ban

A helyi fejlesztési szerver indításához hot reload funkcióval:

1. **A VS Code integrált termináljában** futtasd:

   ```bash
   mkdocs serve
   ```

2. **Az oldal elérhető lesz itt**: `http://127.0.0.1:8000/agent-academy/`

### Előnézet a VS Code Simple Browser-ben

A legjobb fejlesztési élmény érdekében, anélkül hogy elhagynád a VS Code-ot:

1. **Indítsd el az MkDocs szervert** az integrált terminálban (ahogy fentebb bemutattuk)
2. **Nyisd meg a Simple Browser-t**:
   - **1. módszer**: Nyisd meg a Parancspalettát (`Ctrl+Shift+P` / `Cmd+Shift+P`)
   - Írd be: "Simple Browser: Show" és válaszd ki
   - Írd be az URL-t: `http://127.0.0.1:8000/agent-academy/`

   - **2. módszer**: Kattints jobb gombbal az URL-re a terminál kimenetében, és válaszd a "Follow Link" lehetőséget

   - **3. módszer**: Használd a `Ctrl+Click` (Windows) vagy `Cmd+Click` (Mac) parancsot az URL-re a terminálban

3. **Helyezd el a böngészőt**: A Simple Browser-t az editor mellett dokkolhatod, hogy párhuzamosan szerkeszthess és előnézetet kaphass

### VS Code munkaterület előnyei

A teljes munka a VS Code-ban az alábbi előnyöket nyújtja:

- **Integrált terminál**: Nem kell váltogatni az alkalmazások között
- **Párhuzamos előnézet**: Markdown szerkesztése és változások egyidejű megtekintése  
- **Link navigáció**: Kattints a terminál URL-jeire, hogy megnyisd a Simple Browser-t
- **Bővítmény integráció**: Python, markdownlint és cSpell bővítmények együttműködése
- **Git integráció**: Beépített verziókezelő panel a commitokhoz és pull requestekhez

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.