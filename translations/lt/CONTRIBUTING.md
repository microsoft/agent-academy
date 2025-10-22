<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-21T23:40:17+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "lt"
}
-->
# Prisidėjimas prie MCS Agent Academy

Ačiū, kad domitės prisidėjimu prie MCS Agent Academy! Šis vadovas padės jums nustatyti savo kūrimo aplinką ir suprasti mūsų dokumentacijos standartus.

## Dokumentacijos standartai

Mes laikomės „Microsoft“ dokumentacijos standartų, kad užtikrintume nuoseklų ir aukštos kokybės turinį. Išsamias rekomendacijas, kaip rašyti efektyvią dokumentaciją, rasite:

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - Išsamus vadovas, kaip rašyti dokumentaciją, atitinkančią „Microsoft“ stilių ir standartus.

Šiame šaltinyje aptariama:

- Aiškaus ir glausto turinio rašymas
- Tinkamos markdown sintaksės naudojimas
- Nuoseklios terminologijos laikymasis
- Dokumentacijos struktūravimas
- Geriausios prieinamumo praktikos

## Markdown formatavimo tikrinimas

Mes naudojame markdownlint, kad užtikrintume nuoseklų formatavimą ir kokybę visoje dokumentacijoje. Tai padeda išlaikyti skaitomumą ir profesionalumo standartus visame saugykloje.

### markdownlint-cli2 diegimas

Norėdami vietoje paleisti markdownlint ir suderinti su mūsų GitHub darbo eiga, įdiekite markdownlint-cli2:

```powershell
npm install -g markdownlint-cli2
```

### markdownlint paleidimas vietoje

Kai įdiegsite, galėsite paleisti markdownlint visiems markdown failams saugykloje:

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### Konfigūracija

Mūsų markdownlint konfigūracija apibrėžta `.markdownlint.jsonc` failu saugyklos šaknyje. Ši konfigūracija:

- Išjungia eilutės ilgio patikrinimus (MD013), nes mes neapibrėžėme standarto
- Leidžia pasikartojančias antraštes tik broliuose (MD024) bendrų šablonų skyriuose
- Visuotinai išjungia numeruotų sąrašų prefikso patikrinimą (MD029) dėl įtraukto turinio, kuris iš naujo nustato numeraciją
- Leidžia naudoti kodo blokus tekstui (MD046)

### Įterptinių išimčių pridėjimas markdownlint taisyklėms

Nors mūsų bendroji konfigūracija apima daugumą įprastų scenarijų, galite susidurti su situacijomis, kai reikia pridėti įterptines išimtis tam tikroms markdownlint taisyklėms atskiruose failuose. Štai pavyzdžiai, kaip tai padaryti:

#### 1 variantas: Ignoruoti kitą eilutę

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### 2 variantas: Ignoruoti tam tikrą diapazoną

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

#### 3 variantas: Ignoruoti visą failą

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> Šias išimtis įrašykite pačioje markdown failo pradžioje, kad išjungtumėte tam tikras taisykles visam dokumentui.

### Kada naudoti įterptines išimtis

Jums gali prireikti išimčių įvairioms markdownlint taisyklėms, kai:

1. **MD029 (Numeruotų sąrašų numeracija)**: tęsiate numeruotus sąrašus po kito turinio, tyčinė numeracija, kuri neprasideda nuo 1, arba sudėtingas įdėtas turinys
2. **MD013 (Eilutės ilgis)**: Kodo pavyzdžiai, URL arba techninis turinys, kurio negalima pagrįstai suskaidyti į eilutes
3. **MD033 (Įterptinis HTML)**: Kai reikia specifinių HTML elementų formatavimui, kurio negalima pasiekti naudojant markdown
4. **MD041 (Pirmoji eilutė - antraštė)**: Šablonų failai arba dokumentai, kurie tyčia neprasideda nuo antraštės

### Geriausios praktikos

1. **Naudokite išimtis saikingai**: Pridėkite išimtis tik tada, kai tai būtina dokumentacijos aiškumui
2. **Komentuokite savo išimtis**: Naudodami išimtis, pridėkite trumpą komentarą, paaiškinantį priežastį
3. **Pirmenybę teikite `markdownlint-disable-next-line`**: Tai yra tikslesnis būdas nei išjungti taisykles visam skyriui
4. **Paleiskite tikrintuvą prieš įsipareigojimą**: Visada paleiskite `markdownlint-cli2 "**/*.md"` prieš pateikdami pakeitimus

> **Patarimas:** Galite greitai paleisti tiek markdownlint, tiek cSpell patikrinimus savo markdown failams naudodami pateiktą `scripts/validate-markdown.ps1` PowerShell scenarijų. Šis scenarijus padeda automatizuoti bendrus formatavimo ir rašybos patikrinimus, kad jūsų indėlis atitiktų mūsų gaires.

Galite paleisti jį iš saugyklos šaknies naudodami PowerShell:

```powershell
./scripts/validate-markdown.ps1
```

### Dažnos markdownlint klaidos ir jų taisymai

- **MD036**: Naudokite tinkamas antraštes (`## Antraštė`) vietoj paryškinimo (`**Paryškintas tekstas**`)
- **MD007**: Ištaisykite nenumeruotų sąrašų įtrauką (naudokite 2 tarpus, o ne 4)
- **MD022**: Pridėkite tuščias eilutes prieš ir po antraščių
- **MD032**: Pridėkite tuščias eilutes prieš ir po sąrašų
- **MD009**: Pašalinkite tarpus eilutės pabaigoje

### GitHub darbo eiga

Mūsų saugykla apima GitHub darbo eigą, kuri automatiškai paleidžia markdownlint visiems „pull request“. Darbo eiga:

- Naudoja tą patį markdownlint-cli2 įrankį, kurį galite paleisti vietoje
- Neapima `SUPPORT.md`, `SECURITY.md` ir `CODE_OF_CONDUCT.md` failų
- Naudoja mūsų `.markdownlint.jsonc` konfigūraciją
- Praneša apie problemas kaip įspėjimus, leidžiant PR susijungti, tuo pačiu pabrėžiant formatavimo galimybes

### VS Code markdownlint plėtinys

Jei naudojate VS Code, rekomenduojame įdiegti [markdownlint plėtinį](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) realaus laiko markdown tikrinimui:

1. **Įdiekite plėtinį** - VS Code plėtinių rinkoje ieškokite „markdownlint“ David Anson
2. **Automatinė konfigūracija** - Plėtinys automatiškai naudos jūsų `.markdownlint.jsonc` konfigūracijos failą
3. **Realaus laiko grįžtamasis ryšys** - Matykite bangeles po markdown formatavimo problemomis rašydami
4. **Greiti pataisymai** - Naudokite `Ctrl+.` (Cmd+. Mac) norėdami pamatyti galimus automatinio taisymo variantus
5. **Problemų skydelis** - Peržiūrėkite visas markdown problemas VS Code problemų skydelyje

Tai suteikia tiesioginį grįžtamąjį ryšį rašant, todėl lengviau laikytis markdown standartų prieš pateikiant pakeitimus.

## Rašybos tikrinimas

Mes naudojame cSpell (Code Spell Checker), kad išlaikytume nuoseklią rašybą visoje dokumentacijoje. Tai padeda užtikrinti profesionalią kokybę ir sumažinti rašybos klaidas visoje saugykloje.

### cSpell diegimas

Norėdami paleisti cSpell vietoje, įdiekite jį globaliai:

```powershell
npm install -g cspell
```

### cSpell paleidimas vietoje

Kai įdiegsite, galėsite paleisti cSpell, kad patikrintumėte dokumentacijos rašybą:

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

### Konfigūracija

Mūsų cSpell konfigūracija apibrėžta `cspell.json` failu saugyklos šaknyje. Ši konfigūracija:

- Apima pasirinktinius žodžius, specifinius mūsų sričiai (Copilot, SharePoint, Dataverse ir kt.)
- Ignoruoja įprastus failų tipus, kuriems nereikia rašybos tikrinimo (vaizdus, kūrimo failus)
- Nustato kalbą anglų kalbai rašybos tikrinimui

### Naujų žodžių pridėjimas

Jei susiduriate su žodžiu, kurį cSpell pažymi kaip neteisingai parašytą, bet jis iš tikrųjų yra teisingas (pvz., produktų pavadinimai, techniniai terminai ar tikriniai daiktavardžiai), galite pridėti jį į `words` masyvą `cspell.json` faile:

```json
{
  "words": [
    "Contoso",
    "Dataverse",
    "YourNewWord"
  ]
}
```

### VS Code cSpell plėtinys

Jei naudojate VS Code su [Code Spell Checker plėtiniu](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker), galite greitai pridėti žodžius į savo konfigūraciją:

1. **Peržiūrėkite rašybos klaidas** - Ieškokite bangelių po neteisingai parašytais žodžiais
1. **Naudokite greitą pataisymą** - Dešiniuoju pelės mygtuku spustelėkite pabrauktą žodį arba naudokite `Ctrl+.` (Cmd+. Mac)
1. **Pridėkite į konfigūraciją** - Kontekstiniame meniu pasirinkite „Spelling -> Add to cSpell configuration“
1. **Pasirinkite vietą** - Plėtinys automatiškai pridės žodį į jūsų `cspell.json` failą

Tai yra daug greičiau nei rankiniu būdu redaguoti konfigūracijos failą atskiriems žodžiams.

### Geriausios rašybos praktikos

1. **Paleiskite rašybos tikrinimą prieš įsipareigojimą**: Visada paleiskite `cspell "docs/**/*.md"` prieš pateikdami pakeitimus
1. **Taisykite klaidas, o ne ignoruokite**: Kai įmanoma, taisykite tikras rašybos klaidas, o ne pridėkite jas į žodžių sąrašą
1. **Naudokite nuoseklią terminologiją**: Laikykitės nustatytų produktų pavadinimų ir techninių terminų

## Vietinis dokumentacijos peržiūrėjimas su MkDocs

Mes naudojame MkDocs su Material tema, kad sukurtume mūsų dokumentacijos svetainę. Galite ją paleisti vietoje, kad peržiūrėtumėte savo pakeitimus prieš pateikdami „pull request“.

📖 **Sužinokite daugiau**: [MkDocs dokumentacija](https://www.mkdocs.org/) | [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)

### Python aplinkos nustatymas VS Code

Rekomenduojame naudoti virtualią aplinką, kad izoliuotumėte priklausomybes šiam projektui. VS Code palengvina šį procesą ir, jei reikia, pasirūpins Python diegimu.

> **GitHub Codespaces**: Šios instrukcijos puikiai veikia GitHub Codespaces, kuris jau turi iš anksto įdiegtą Python ir paruoštą VS Code aplinką.

📖 **Sužinokite daugiau**: [Python VS Code](https://code.visualstudio.com/docs/languages/python) | [Python aplinkos VS Code](https://code.visualstudio.com/docs/python/environments)

#### Reikalavimai

**Įdiekite Python plėtinį**: Įdiekite [Python plėtinį](https://marketplace.visualstudio.com/items?itemName=ms-python.python) iš Microsoft VS Code rinkos, jei dar to nepadarėte.

#### Nustatymas VS Code

1. **Sukurkite virtualią aplinką**:
   - Atidarykite komandų paletę (`Ctrl+Shift+P` Windows/Linux, `Cmd+Shift+P` Mac)
   - Įveskite „Python: Create Environment“ ir pasirinkite
   - Pasirinkite „Venv“ (virtuali aplinka)
   - Jei nėra Python interpretatorių, VS Code padės jums įdiegti Python
   - Pasirinkite savo Python interpretatorių (Python 3.8+)
   - VS Code sukurs `.venv` aplanką ir automatiškai jį aktyvuos

2. **Patikrinkite nustatymą**:
   - Atidarykite naują integruotą terminalą (`` Ctrl+Shift+` `` Windows/Linux, `` Cmd+Shift+` `` Mac arba `View > Terminal`)
   - Turėtumėte matyti `(.venv)` terminalo eilutės pradžioje
   - Paleiskite: `python --version`, kad patikrintumėte

> **Pastaba**: Atidarius naują terminalą užtikrinama, kad Python aplinka tinkamai aktyvuota. Jei norite naudoti esamą Python aplinką, o ne kurti naują virtualią aplinką, galite naudoti „Python: Select Interpreter“ iš komandų paletės ir pasirinkti norimą aplinką.

### MkDocs diegimas VS Code

Kai jūsų Python aplinka nustatyta VS Code, įdiekite MkDocs ir Material temą:

1. **Atidarykite VS Code integruotą terminalą** (`Ctrl+`` ` arba `View > Terminal`)
2. **Įsitikinkite, kad jūsų virtuali aplinka aktyvi** (turėtumėte matyti `(.venv)` eilutės pradžioje)
3. **Įdiekite paketus**:

   ```bash
   pip install mkdocs mkdocs-material
   ```

### MkDocs paleidimas VS Code

Norėdami paleisti vietinį kūrimo serverį su automatiniais atnaujinimais:

1. **VS Code integruotame terminale**, paleiskite:

   ```bash
   mkdocs serve
   ```

2. **Svetainė bus pasiekiama adresu**: `http://127.0.0.1:8000/agent-academy/`

### Peržiūra VS Code Simple Browser

Geriausiam kūrimo patyrimui neišeinant iš VS Code:

1. **Paleiskite MkDocs serverį** integruotame terminale (kaip parodyta aukščiau)
2. **Atidarykite Simple Browser**:
   - **1 metodas**: Atidarykite komandų paletę (`Ctrl+Shift+P` / `Cmd+Shift+P`)
   - Įveskite „Simple Browser: Show“ ir pasirinkite
   - Įveskite URL: `http://127.0.0.1:8000/agent-academy/`

   - **2 metodas**: Dešiniuoju pelės mygtuku spustelėkite URL terminalo išvestyje ir pasirinkite „Follow Link“

   - **3 metodas**: Naudokite `Ctrl+Click` (Windows) arba `Cmd+Click` (Mac) ant URL terminale

3. **Naršyklės pozicionavimas**: Galite pritvirtinti Simple Browser šalia savo redaktoriaus, kad galėtumėte redaguoti ir peržiūrėti vienu metu

### VS Code darbo aplinkos privalumai

Darbas visiškai VS Code suteikia šiuos privalumus:

- **Integruotas terminalas**: Nereikia perjungti tarp programų
- **Šalia esančios peržiūros**: Redaguokite markdown ir matykite pakeitimus vienu metu  
- **Nuorodų navigacija**: Spustelėkite terminalo URL tiesiogiai, kad atidarytumėte Simple Browser
- **Plėtinių integracija**: Python, markdownlint ir cSpell plėtiniai veikia kartu
- **Git integracija**: Įmontuotas šaltinio kontrolės skydelis įsipareigojimams ir „pull request“

### Automatinio atnaujinimo funkcijos

Kai paleidžiate `mkdocs serve`, gaunate:

- **Automatinis atnaujinimas**: Pakeitimai bet kuriame `.md` faile `docs/` aplanke automatiškai atnaujina naršyklę
- **Konfigūracijos atnaujinimai**: Pakeitimai `mkdocs.yml` taip pat sukelia perstatymus
- **Realaus laiko peržiūra**: Matykite savo formatavimo, nuorodų ir turinio pakeitimus iš karto
- **Nuorodų tikrinimas**: MkDocs įspės apie sugadintas vidines nuorodas

### Naudingi MkDocs komandų VS Code

Paleiskite šias komandas VS Code integruotame terminale:

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

> **Patarimas:** Norėdami vietoje peržiūrėti dokumentaciją su visomis priklausomybėmis, naudokite `scripts/serve-docs.ps1` PowerShell scenarijų.

### Vietinės peržiūros pr

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama profesionali žmogaus vertimo paslauga. Mes neprisiimame atsakomybės už nesusipratimus ar neteisingus aiškinimus, atsiradusius dėl šio vertimo naudojimo.