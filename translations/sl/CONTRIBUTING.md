<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-20T22:38:34+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "sl"
}
-->
# Prispevanje k MCS Agent Academy

Hvala za vaše zanimanje za prispevanje k MCS Agent Academy! Ta vodič vam bo pomagal nastaviti razvojno okolje in razumeti naše standarde dokumentacije.

## Standardi dokumentacije

Sledimo Microsoftovim standardom dokumentacije, da zagotovimo dosledno in kakovostno vsebino. Za podrobna navodila o pisanju učinkovite dokumentacije si oglejte:

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - Celovit vodič za pisanje dokumentacije, ki sledi Microsoftovemu slogu in standardom.

Ta vir zajema:

- Pisanje jasne in jedrnate vsebine
- Uporabo pravilne sintakse markdown
- Sledenje dosledni terminologiji
- Učinkovito strukturiranje dokumentacije
- Najboljše prakse za dostopnost

## Lintanje Markdown

Za zagotavljanje doslednega formatiranja in kakovosti v naši dokumentaciji uporabljamo markdownlint. To pomaga ohranjati berljivost in profesionalne standarde v celotnem repozitoriju.

### Namestitev markdownlint-cli2

Za lokalno izvajanje markdownlint in uskladitev z našim GitHub delovnim tokom namestite markdownlint-cli2:

```powershell
npm install -g markdownlint-cli2
```

### Lokalno izvajanje markdownlint

Ko je nameščen, lahko markdownlint zaženete na vseh markdown datotekah v repozitoriju:

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### Konfiguracija

Naša konfiguracija markdownlint je definirana v `.markdownlint.jsonc` v korenskem imeniku repozitorija. Ta konfiguracija:

- Onemogoča preverjanje dolžine vrstic (MD013), saj nismo določili standarda
- Dovoljuje podvojene naslove samo pri sorodnih odsekih (MD024) za pogoste predloge
- Globalno onemogoča preverjanje predpone oštevilčenih seznamov (MD029) zaradi ponastavitve številčenja pri zamaknjenih vsebinah
- Dovoljuje uporabo blokov kode za besedilo (MD046)

### Dodajanje izjem za pravila markdownlint

Čeprav naša globalna konfiguracija pokriva večino pogostih scenarijev, se lahko pojavijo situacije, kjer boste morali dodati izjeme za specifična pravila markdownlint v posameznih datotekah. Tukaj so primeri, kako to storiti:

#### Možnost 1: Prezri za naslednjo vrstico

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### Možnost 2: Prezri za določen obseg

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

#### Možnost 3: Prezri za celotno datoteko

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> Te izjeme postavite na sam vrh markdown datoteke, da onemogočite specifična pravila za celoten dokument.

### Kdaj uporabiti izjeme

Izjeme za različna pravila markdownlint boste morda potrebovali, ko:

1. **MD029 (Oštevilčenje seznamov)**: Nadaljujete oštevilčene sezname po drugi vsebini, namerno številčenje, ki se ne začne z 1, ali kompleksne ugnezdene vsebine
2. **MD013 (Dolžina vrstic)**: Primeri kode, URL-ji ali tehnična vsebina, ki je ni mogoče smiselno razdeliti na več vrstic
3. **MD033 (Vgrajeni HTML)**: Ko potrebujete specifične HTML elemente za oblikovanje, ki jih ni mogoče doseči z markdown
4. **MD041 (Prvi naslov)**: Predloge ali dokumenti, ki namerno ne začnejo z naslovom

### Najboljše prakse

1. **Uporabljajte izjeme zmerno**: Dodajte izjeme le, kadar so potrebne za jasnost dokumentacije
2. **Komentirajte svoje izjeme**: Ko uporabljate izjeme, dodajte kratek komentar, ki pojasnjuje razlog
3. **Raje uporabite `markdownlint-disable-next-line`**: To je bolj natančno kot onemogočanje za celotne odseke
4. **Zaženite linter pred oddajo**: Vedno zaženite `markdownlint-cli2 "**/*.md"` pred oddajo sprememb

> **Nasvet:** Markdownlint in cSpell preverjanja lahko hitro zaženete na svojih markdown datotekah z uporabo priloženega PowerShell skripta `scripts/validate-markdown.ps1`. Ta skript avtomatizira pogosta preverjanja formatiranja in črkovanja, da zagotovi, da vaši prispevki ustrezajo našim smernicam.

Zaženete ga lahko iz korena repozitorija z uporabo PowerShell:

```powershell
./scripts/validate-markdown.ps1
```

### Pogoste napake markdownlint in popravki

- **MD036**: Uporabite pravilne naslove (`## Naslov`) namesto poudarka (`**Krepko besedilo**`)
- **MD007**: Popravite zamik neurejenih seznamov (uporabite 2 presledka, ne 4)
- **MD022**: Dodajte prazne vrstice pred in po naslovih
- **MD032**: Dodajte prazne vrstice pred in po seznamih
- **MD009**: Odstranite presledke na koncu vrstic

### GitHub delovni tok

Naš repozitorij vključuje GitHub delovni tok, ki samodejno izvaja markdownlint na vseh pull requestih. Delovni tok:

- Uporablja isto orodje markdownlint-cli2, ki ga lahko zaženete lokalno
- Izključuje datoteke `SUPPORT.md`, `SECURITY.md` in `CODE_OF_CONDUCT.md`
- Uporablja našo konfiguracijo `.markdownlint.jsonc`
- Poročila o težavah prikazuje kot opozorila, kar omogoča združitev PR-jev, hkrati pa izpostavlja priložnosti za izboljšave formatiranja

### Razširitev markdownlint za VS Code

Če uporabljate VS Code, priporočamo namestitev [razširitve markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) za sprotno preverjanje markdown:

1. **Namestite razširitev** - Poiščite "markdownlint" avtorja David Anson v tržnici razširitev za VS Code
2. **Samodejna konfiguracija** - Razširitev bo samodejno uporabila vašo konfiguracijsko datoteko `.markdownlint.jsonc`
3. **Sprotne povratne informacije** - Vidite valovite podčrtaje pri težavah z markdown formatiranjem med tipkanjem
4. **Hitri popravki** - Uporabite `Ctrl+.` (Cmd+. na Macu) za ogled razpoložljivih samodejnih popravkov za številne težave
5. **Plošča težav** - Oglejte si vse težave z markdown v plošči Težave v VS Code

To omogoča takojšnje povratne informacije med pisanjem, kar olajša sledenje markdown standardom pred oddajo sprememb.

## Preverjanje črkovanja

Za ohranjanje doslednega črkovanja v naši dokumentaciji uporabljamo cSpell (Code Spell Checker). To pomaga zagotavljati profesionalno kakovost in zmanjšuje tipkarske napake v celotnem repozitoriju.

### Namestitev cSpell

Za lokalno izvajanje cSpell ga namestite globalno:

```powershell
npm install -g cspell
```

### Lokalno izvajanje cSpell

Ko je nameščen, lahko cSpell zaženete za preverjanje črkovanja v dokumentaciji:

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

### Konfiguracija

Naša konfiguracija cSpell je definirana v `cspell.json` v korenskem imeniku repozitorija. Ta konfiguracija:

- Vključuje prilagojene besede, specifične za našo domeno (Copilot, SharePoint, Dataverse itd.)
- Prezre pogoste vrste datotek, ki ne potrebujejo preverjanja črkovanja (slike, gradbene datoteke)
- Nastavi jezik na angleščino za preverjanje črkovanja

### Dodajanje novih besed

Če naletite na besedo, ki jo cSpell označi kot napačno črkovano, vendar je dejansko pravilna (kot so imena izdelkov, tehnični izrazi ali lastna imena), jo lahko dodate v polje `words` v `cspell.json`:

```json
{
  "words": [
    "Contoso",
    "Dataverse",
    "YourNewWord"
  ]
}
```

### Razširitev cSpell za VS Code

Če uporabljate VS Code z [razširitvijo Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker), lahko hitro dodate besede v svojo konfiguracijo:

1. **Ogled napak črkovanja** - Poiščite valovite podčrtaje pri napačno črkovanih besedah
1. **Uporabite Hitri popravek** - Z desno tipko miške kliknite na podčrtano besedo ali uporabite `Ctrl+.` (Cmd+. na Macu)
1. **Dodajte v konfiguracijo** - Izberite "Spelling -> Add to cSpell configuration" iz kontekstnega menija
1. **Izberite lokacijo** - Razširitev bo samodejno dodala besedo v vašo datoteko `cspell.json`

To je veliko hitreje kot ročno urejanje konfiguracijske datoteke za posamezne besede.

### Najboljše prakse za črkovanje

1. **Zaženite preverjanje črkovanja pred oddajo**: Vedno zaženite `cspell "docs/**/*.md"` pred oddajo sprememb
1. **Popravite tipkarske napake namesto ignoriranja**: Kadar je mogoče, popravite dejanske napake črkovanja namesto dodajanja v seznam besed
1. **Uporabljajte dosledno terminologijo**: Držite se uveljavljenih imen izdelkov in tehničnih izrazov

## Lokalni predogled dokumentacije z MkDocs

Za generiranje naše spletne strani z dokumentacijo uporabljamo MkDocs s temo Material. Lokalno jo lahko zaženete za predogled sprememb pred oddajo pull requesta.

📖 **Več informacij**: [Dokumentacija MkDocs](https://www.mkdocs.org/) | [Material za MkDocs](https://squidfunk.github.io/mkdocs-material/)

### Nastavitev Python okolja v VS Code

Priporočamo uporabo virtualnega okolja za izolacijo odvisnosti tega projekta. VS Code ta postopek poenostavi in bo po potrebi poskrbel za namestitev Pythona.

> **GitHub Codespaces**: Ta navodila delujejo odlično v GitHub Codespaces, ki že vključuje prednameščen Python in pripravljeno okolje VS Code.

📖 **Več informacij**: [Python v VS Code](https://code.visualstudio.com/docs/languages/python) | [Python okolja v VS Code](https://code.visualstudio.com/docs/python/environments)

#### Predpogoji

**Namestite razširitev Python**: Namestite [razširitev Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) avtorja Microsoft iz tržnice razširitev za VS Code, če je še nimate.

#### Nastavitev v VS Code

1. **Ustvarite virtualno okolje**:
   - Odprite ukazno paleto (`Ctrl+Shift+P` na Windows/Linux, `Cmd+Shift+P` na Macu)
   - Vnesite "Python: Create Environment" in izberite
   - Izberite "Venv" (virtualno okolje)
   - Če ni na voljo nobenih Python interpreterjev, vas bo VS Code vodil skozi namestitev Pythona
   - Izberite svoj Python interpreter (Python 3.8+)
   - VS Code bo ustvaril mapo `.venv` in jo samodejno aktiviral

2. **Preverite nastavitev**:
   - Odprite nov integriran terminal (`` Ctrl+Shift+` `` na Windows/Linux, `` Cmd+Shift+` `` na Macu ali `View > Terminal`)
   - Videti bi morali `(.venv)` v pozivu terminala
   - Zaženite: `python --version` za preverjanje

> **Opomba**: Odprtje novega terminala zagotavlja, da je Python okolje pravilno aktivirano. Če raje uporabljate obstoječe Python okolje namesto ustvarjanja novega virtualnega okolja, lahko uporabite "Python: Select Interpreter" iz ukazne palete in izberete želeno okolje.

### Namestitev MkDocs v VS Code

Ko je vaše Python okolje nastavljeno v VS Code, namestite MkDocs in temo Material:

1. **Odprite integriran terminal v VS Code** (`Ctrl+`` ` ali `View > Terminal`)
2. **Prepričajte se, da je vaše virtualno okolje aktivno** (videti bi morali `(.venv)` v pozivu)
3. **Namestite pakete**:

   ```bash
   pip install mkdocs mkdocs-material
   ```

### Zagon MkDocs v VS Code

Za zagon lokalnega razvojnega strežnika s funkcijo vročega osveževanja:

1. **V integriranem terminalu VS Code** zaženite:

   ```bash
   mkdocs serve
   ```

2. **Spletna stran bo na voljo na**: `http://127.0.0.1:8000/agent-academy/`

### Predogled v preprostem brskalniku VS Code

Za najboljšo izkušnjo razvoja brez zapuščanja VS Code:

1. **Zaženite strežnik MkDocs** v integriranem terminalu (kot je prikazano zgoraj)
2. **Odprite preprost brskalnik**:
   - **Metoda 1**: Odprite ukazno paleto (`Ctrl+Shift+P` / `Cmd+Shift+P`)
   - Vnesite "Simple Browser: Show" in izberite
   - Vnesite URL: `http://127.0.0.1:8000/agent-academy/`

   - **Metoda 2**: Z desno tipko miške kliknite na URL v izhodu terminala in izberite "Follow Link"

   - **Metoda 3**: Uporabite `Ctrl+Klik` (Windows) ali `Cmd+Klik` (Mac) na URL v terminalu

3. **Postavite brskalnik**: Preprost brskalnik lahko postavite poleg urejevalnika za vzporedno urejanje in predogled

### Prednosti delovnega prostora VS Code

Delo v celoti znotraj VS Code ponuja te prednosti:

- **Integriran terminal**: Ni potrebe po preklapljanju med aplikacijami
- **Vzporedni predogled**: Urejajte markdown in hkrati vidite spremembe  
- **Navigacija po povezavah**: Kliknite URL-je terminala neposredno za odpiranje preprostega brskalnika
- **Integracija razširitev**: Razširitve Python, markdownlint in cSpell delujejo skupaj
- **Git integracija**: Vgrajena plošča za nadzor izvorne kode za commit-e in pull requeste

### Funkcije vročega osveževanja

Ko zaženete `mkdocs serve`, dobite:

- **Samodejno osveževanje**: Spremembe v kateri koli `.md` datoteki v mapi `docs/` samodejno osvežijo brskalnik
- **Posodobitve konfiguracije**: Spremembe v `mkdocs.yml` prav tako sprožijo ponovne gradnje
- **Predogled v realnem času**: Takoj vidite svoje formatiranje, povezave in spremembe vsebine
- **Preverjanje povezav**: MkDocs vas bo opozoril na prekinjene notranje povezave

### Uporabni ukazi MkDocs v VS Code

Zaženite te ukaze v integriranem terminalu VS Code:

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

> **Nasvet:** Za lokalni predogled dokumentacije z vsemi preverjenimi odvisnostmi uporabite PowerShell skript `scripts/serve-docs.ps1`.

### Prednosti lokalnega predogleda

- **Takojšnje povratne informacije**: Vidite, kako se vaš markdown prikazuje s temo Material
- **Preverjanje povezav**: Ujemite prekinjene povezave, preden gredo v živo
- **Testiranje navigacije**: Preverite, ali se vaša vsebina pojavi v pravih odsekih
- **Predogled za mobilne naprave**: Preizkusite, kako vaša vsebina izgleda na različnih velikostih zaslona
- **Preverjanje zmogljivosti**: Prepričajte se, da se slike in sredstva pravilno nalagajo

## Imate vprašanja?

Če imate vprašanja o markdown formatiranju ali smernicah za prispevanje, prosimo:

1. Preglejte ta vodič za prispevanje
1. Preverite obstoječe težave za podobna vprašanja
1. Odprite novo težavo

Srečno prispevanje! 🚀

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku naj se šteje za avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne odgovarjamo za morebitna nesporazumevanja ali napačne razlage, ki izhajajo iz uporabe tega prevoda.