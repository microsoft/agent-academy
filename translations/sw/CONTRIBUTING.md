<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-20T00:28:34+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "sw"
}
-->
# Kuchangia kwa MCS Agent Academy

Asante kwa nia yako ya kuchangia katika MCS Agent Academy! Mwongozo huu utakusaidia kuandaa mazingira ya maendeleo na kuelewa viwango vyetu vya nyaraka.

## Viwango vya Nyaraka

Tunafuata viwango vya nyaraka vya Microsoft ili kuhakikisha maudhui yenye ubora wa juu na yanayofanana. Kwa mwongozo wa kina kuhusu jinsi ya kuandika nyaraka bora, tafadhali rejelea:

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - Mwongozo kamili wa kuandika nyaraka zinazofuata mtindo na viwango vya Microsoft.

Rasilimali hii inashughulikia:

- Kuandika maudhui wazi na mafupi
- Kutumia sintaksia sahihi ya markdown
- Kufuatilia istilahi inayofanana
- Kuweka muundo wa nyaraka kwa ufanisi
- Mazoea bora ya upatikanaji

## Uhakiki wa Markdown

Tunatumia markdownlint kuhakikisha muundo na ubora unaofanana katika nyaraka zetu zote. Hii husaidia kudumisha usomaji na viwango vya kitaalamu katika hifadhi nzima.

### Kusakinisha markdownlint-cli2

Ili kuendesha markdownlint kwa ndani na kulinganisha na mtiririko wa kazi wa GitHub, sakinisha markdownlint-cli2:

```powershell
npm install -g markdownlint-cli2
```

### Kuendesha markdownlint kwa ndani

Baada ya kusakinishwa, unaweza kuendesha markdownlint kwenye faili zote za markdown katika hifadhi:

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### Usanidi

Usanidi wetu wa markdownlint umefafanuliwa katika `.markdownlint.jsonc` kwenye mzizi wa hifadhi. Usanidi huu:

- Unazima ukaguzi wa urefu wa mistari (MD013) kwa kuwa hatujafafanua kiwango
- Unaruhusu vichwa vya kurudia katika ndugu tu (MD024) kwa sehemu za kiolezo cha kawaida
- Unazima uthibitishaji wa awali wa orodha iliyoamriwa (MD029) kimataifa kutokana na maudhui yaliyopangwa upya
- Unaruhusu vitalu vya msimbo kutumika kwa maandishi (MD046)

### Kuongeza ubaguzi wa ndani kwa sheria za markdownlint

Ingawa usanidi wetu wa kimataifa unashughulikia hali nyingi za kawaida, unaweza kukutana na hali ambapo unahitaji kuongeza ubaguzi wa ndani kwa sheria maalum za markdownlint katika faili za mtu binafsi. Hapa kuna mifano ya jinsi ya kufanya hivyo:

#### Chaguo 1: Puuza kwa mstari unaofuata

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### Chaguo 2: Puuza kwa safu maalum

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

#### Chaguo 3: Puuza kwa faili nzima

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> Weka hizi juu kabisa ya faili yako ya markdown ili kuzima sheria maalum kwa hati nzima

### Wakati wa kutumia ubaguzi wa ndani

Unaweza kuhitaji ubaguzi kwa sheria mbalimbali za markdownlint wakati:

1. **MD029 (Nambari ya orodha iliyoamriwa)**: Kuendelea na orodha za nambari baada ya maudhui mengine, nambari za makusudi ambazo hazianzi na 1, au maudhui magumu yaliyopangwa kwa ndani
2. **MD013 (Urefu wa mstari)**: Mifano ya msimbo, URL, au maudhui ya kiufundi ambayo hayawezi kugawanywa kwa mistari kwa urahisi
3. **MD033 (HTML ya ndani)**: Wakati unahitaji vipengele maalum vya HTML kwa muundo ambao hauwezi kupatikana kwa markdown
4. **MD041 (Kichwa cha mstari wa kwanza)**: Faili za kiolezo au nyaraka ambazo kwa makusudi hazianzi na kichwa

### Mazoea bora

1. **Tumia ubaguzi kwa nadra**: Ongeza ubaguzi tu pale inapohitajika kwa uwazi wa nyaraka
2. **Toa maoni kuhusu ubaguzi wako**: Unapotumia ubaguzi, fikiria kuongeza maoni mafupi kuelezea sababu
3. **Pendelea `markdownlint-disable-next-line`**: Hii ni sahihi zaidi kuliko kuzima kwa sehemu nzima
4. **Endesha linter kabla ya kuwasilisha**: Daima endesha `markdownlint-cli2 "**/*.md"` kabla ya kuwasilisha mabadiliko

> **Kidokezo:** Unaweza kuendesha haraka ukaguzi wa markdownlint na cSpell kwenye faili zako za markdown kwa kutumia hati ya PowerShell `scripts/validate-markdown.ps1`. Hati hii husaidia kuendesha ukaguzi wa muundo na tahajia ili kuhakikisha michango yako inakidhi miongozo yetu.

Unaweza kuiendesha kutoka mzizi wa hifadhi kwa kutumia PowerShell:

```powershell
./scripts/validate-markdown.ps1
```

### Makosa ya kawaida ya markdownlint na marekebisho

- **MD036**: Tumia vichwa sahihi (`## Kichwa`) badala ya msisitizo (`**Maandishi yenye msisitizo**`)
- **MD007**: Rekebisha upangaji wa orodha isiyo na mpangilio (tumia nafasi 2, si 4)
- **MD022**: Ongeza mistari tupu kabla na baada ya vichwa
- **MD032**: Ongeza mistari tupu kabla na baada ya orodha
- **MD009**: Ondoa nafasi za ziada mwishoni mwa mistari

### Mtiririko wa kazi wa GitHub

Hifadhi yetu inajumuisha mtiririko wa kazi wa GitHub ambao huendesha markdownlint moja kwa moja kwenye maombi yote ya kuvuta. Mtiririko wa kazi:

- Unatumia zana sawa ya markdownlint-cli2 unayoweza kuendesha kwa ndani
- Unatoa nje faili za `SUPPORT.md`, `SECURITY.md`, na `CODE_OF_CONDUCT.md`
- Unatumia usanidi wetu wa `.markdownlint.jsonc`
- Unaripoti masuala kama maonyo, kuruhusu PRs kuunganishwa huku ukionyesha fursa za kuboresha muundo

### Kiendelezi cha markdownlint cha VS Code

Ikiwa unatumia VS Code, tunapendekeza usakinishe [kiendelezi cha markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) kwa ukaguzi wa markdown wa wakati halisi:

1. **Sakinisha kiendelezi** - Tafuta "markdownlint" na David Anson katika soko la viendelezi vya VS Code
2. **Usanidi wa kiotomatiki** - Kiendelezi kitatumia faili yako ya usanidi ya `.markdownlint.jsonc` kiotomatiki
3. **Maoni ya wakati halisi** - Tazama mistari ya chini ya makosa ya muundo wa markdown unapoandika
4. **Marekebisho ya haraka** - Tumia `Ctrl+.` (Cmd+. kwenye Mac) kuona marekebisho ya kiotomatiki yanayopatikana kwa masuala mengi
5. **Paneli ya Matatizo** - Tazama masuala yote ya markdown katika paneli ya Matatizo ya VS Code

Hii inatoa maoni ya haraka wakati wa kuandika, na kufanya iwe rahisi kufuata viwango vya markdown kabla ya kuwasilisha mabadiliko yako.

## Ukaguzi wa Tahajia

Tunatumia cSpell (Code Spell Checker) kudumisha tahajia inayofanana katika nyaraka zetu zote. Hii husaidia kuhakikisha ubora wa kitaalamu na kupunguza makosa ya tahajia katika hifadhi nzima.

### Kusakinisha cSpell

Ili kuendesha cSpell kwa ndani, sakinisha kwa ujumla:

```powershell
npm install -g cspell
```

### Kuendesha cSpell kwa ndani

Baada ya kusakinishwa, unaweza kuendesha cSpell ili kukagua tahajia katika nyaraka:

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

### Usanidi

Usanidi wetu wa cSpell umefafanuliwa katika `cspell.json` kwenye mzizi wa hifadhi. Usanidi huu:

- Unajumuisha maneno maalum yanayohusiana na uwanja wetu (Copilot, SharePoint, Dataverse, nk.)
- Unapuuza aina za faili za kawaida ambazo hazihitaji ukaguzi wa tahajia (picha, faili za ujenzi)
- Unaset lugha kuwa Kiingereza kwa ukaguzi wa tahajia

### Kuongeza maneno mapya

Ikiwa utakutana na neno ambalo cSpell linaonyesha kuwa limekosewa lakini ni sahihi (kama majina ya bidhaa, istilahi za kiufundi, au majina sahihi), unaweza kuliongeza kwenye safu ya `words` katika `cspell.json`:

```json
{
  "words": [
    "Contoso",
    "Dataverse",
    "YourNewWord"
  ]
}
```

### Kiendelezi cha VS Code cSpell

Ikiwa unatumia VS Code na [kiendelezi cha Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker), unaweza kuongeza maneno haraka kwenye usanidi wako:

1. **Tazama makosa ya tahajia** - Tafuta mistari ya chini ya maneno yaliyokosewa
1. **Tumia Marekebisho ya Haraka** - Bofya kulia kwenye neno lililopigwa mstari au tumia `Ctrl+.` (Cmd+. kwenye Mac)
1. **Ongeza kwenye usanidi** - Chagua "Spelling -> Add to cSpell configuration" kutoka kwenye menyu ya muktadha
1. **Chagua eneo** - Kiendelezi kitaongeza neno kiotomatiki kwenye faili yako ya `cspell.json`

Hii ni haraka zaidi kuliko kuhariri faili ya usanidi kwa maneno ya mtu binafsi.

### Mazoea bora ya tahajia

1. **Endesha ukaguzi wa tahajia kabla ya kuwasilisha**: Daima endesha `cspell "docs/**/*.md"` kabla ya kuwasilisha mabadiliko
1. **Rekebisha makosa badala ya kupuuza**: Ikiwezekana, rekebisha makosa halisi ya tahajia badala ya kuyaongeza kwenye orodha ya maneno
1. **Tumia istilahi inayofanana**: Shikamana na majina ya bidhaa yaliyowekwa na istilahi za kiufundi

## Muonekano wa Nyaraka za Ndani na MkDocs

Tunatumia MkDocs na mandhari ya Material kuunda tovuti ya nyaraka zetu. Unaweza kuiendesha kwa ndani ili kuona mabadiliko yako kabla ya kuwasilisha ombi la kuvuta.

📖 **Jifunze zaidi**: [MkDocs Documentation](https://www.mkdocs.org/) | [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)

### Kuweka Mazingira ya Python katika VS Code

Tunapendekeza kutumia mazingira ya kawaida ili kutenganisha utegemezi wa mradi huu. VS Code hufanya mchakato huu kuwa rahisi na itashughulikia usakinishaji wa Python ikiwa inahitajika.

> **GitHub Codespaces**: Maelekezo haya yanakubaliana kikamilifu na GitHub Codespaces, ambayo huja na Python iliyosakinishwa awali na mazingira ya VS Code tayari kutumika.

📖 **Jifunze zaidi**: [Python in VS Code](https://code.visualstudio.com/docs/languages/python) | [Python environments in VS Code](https://code.visualstudio.com/docs/python/environments)

#### Mahitaji ya awali

**Sakinisha Kiendelezi cha Python**: Sakinisha [kiendelezi cha Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) na Microsoft kutoka soko la viendelezi vya VS Code ikiwa hujafanya hivyo.

#### Usanidi katika VS Code

1. **Unda mazingira ya kawaida**:
   - Fungua Command Palette (`Ctrl+Shift+P` kwenye Windows/Linux, `Cmd+Shift+P` kwenye Mac)
   - Andika "Python: Create Environment" na uchague
   - Chagua "Venv" (mazingira ya kawaida)
   - Ikiwa hakuna tafsiri za Python zinazopatikana, VS Code itakuongoza kupitia usakinishaji wa Python
   - Chagua tafsiri yako ya Python (Python 3.8+)
   - VS Code itaunda folda ya `.venv` na kuiwasha kiotomatiki

2. **Thibitisha usanidi**:
   - Fungua terminal mpya iliyojumuishwa (`` Ctrl+Shift+` `` kwenye Windows/Linux, `` Cmd+Shift+` `` kwenye Mac, au `View > Terminal`)
   - Unapaswa kuona `(.venv)` kwenye kidokezo cha terminal
   - Endesha: `python --version` kuthibitisha

> **Kumbuka**: Kufungua terminal mpya kunahakikisha mazingira ya Python yamewashwa vizuri. Ikiwa unapendelea kutumia mazingira ya Python yaliyopo badala ya kuunda mazingira mapya, unaweza kutumia "Python: Select Interpreter" kutoka Command Palette na kuchagua mazingira unayopendelea.

### Kusakinisha MkDocs katika VS Code

Kwa mazingira yako ya Python yaliyosakinishwa katika VS Code, sakinisha MkDocs na mandhari ya Material:

1. **Fungua terminal iliyojumuishwa ya VS Code** (`Ctrl+`` ` au `View > Terminal`)
2. **Hakikisha mazingira yako ya kawaida yamewashwa** (unapaswa kuona `(.venv)` kwenye kidokezo)
3. **Sakinisha vifurushi**:

   ```bash
   pip install mkdocs mkdocs-material
   ```

### Kuendesha MkDocs katika VS Code

Ili kuanza seva ya maendeleo ya ndani na upakiaji wa haraka:

1. **Katika terminal iliyojumuishwa ya VS Code**, endesha:

   ```bash
   mkdocs serve
   ```

2. **Tovuti itapatikana katika**: `http://127.0.0.1:8000/agent-academy/`

### Muonekano wa awali katika Simple Browser ya VS Code

Kwa uzoefu bora wa maendeleo bila kuondoka VS Code:

1. **Anzisha seva ya MkDocs** katika terminal iliyojumuishwa (kama ilivyoonyeshwa hapo juu)
2. **Fungua Simple Browser**:
   - **Njia ya 1**: Fungua Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
   - Andika "Simple Browser: Show" na uchague
   - Ingiza URL: `http://127.0.0.1:8000/agent-academy/`

   - **Njia ya 2**: Bofya kulia kwenye URL katika matokeo ya terminal na uchague "Follow Link"

   - **Njia ya 3**: Tumia `Ctrl+Click` (Windows) au `Cmd+Click` (Mac) kwenye URL katika terminal

3. **Panga kivinjari**: Unaweza kuweka Simple Browser kando ya mhariri wako kwa kuhariri na kuangalia mabadiliko kwa wakati mmoja

### Faida za Workspace ya VS Code

Kufanya kazi kikamilifu ndani ya VS Code kunatoa faida hizi:

- **Terminal iliyojumuishwa**: Hakuna haja ya kubadilisha kati ya programu
- **Muonekano wa kando kwa kando**: Hariri markdown na uone mabadiliko kwa wakati mmoja  
- **Urambazaji wa viungo**: Bofya URL za terminal moja kwa moja kufungua Simple Browser
- **Muunganiko wa viendelezi**: Viendelezi vya Python, markdownlint, na cSpell vinafanya kazi pamoja
- **Muunganiko wa Git**: Paneli ya udhibiti wa chanzo iliyojumuishwa kwa ahadi na maombi ya kuvuta

### Vipengele vya upakiaji wa haraka

Unapoendesha `mkdocs serve`, unapata:

- **Upakiaji wa kiotomatiki**: Mabadiliko kwa faili yoyote ya `.md` katika folda ya `docs/` yanapakia kivinjari kiotomatiki
- **Sasisho za usanidi**: Mabadiliko kwa `mkdocs.yml` pia husababisha ujenzi upya
- **Muonekano wa wakati halisi**: Tazama muundo wako, viungo, na mabadiliko ya maudhui mara moja
- **Uthibitishaji wa viungo**: MkDocs itakuonya kuhusu viungo vya ndani vilivyovunjika

### Amri muhimu za MkDocs katika VS Code

Endesha amri hizi katika terminal iliyojumuishwa ya VS Code:

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

> **Kidokezo:** Ili kuangalia nyaraka kwa ndani na utegemezi wote ukaguliwe, tumia hati ya PowerShell `scripts/serve-docs.ps1`.

### Faida za muonekano wa ndani

- **Maoni ya haraka**: Tazama jinsi markdown yako inavyoonekana na mandhari ya Material
- **Uthibitishaji wa viungo**: Tambua viungo vilivyovunjika kabla ya kwenda hewani
- **Jaribio la urambazaji**: Hakikisha maudhui yako yanaonekana katika sehemu sahihi
- **Muonekano wa simu**: Jaribu jinsi maudhui yako yanavyoonekana kwenye ukubwa tofauti wa skrini
- **Ukaguzi wa utendaji**: Hakikisha picha na mali zinapakia vizuri

## Maswali?

Ikiwa una maswali kuhusu muundo wa markdown au miongozo ya kuchangia, tafadhali:

1. Pitia mwongozo huu wa kuchangia
1. Angalia masuala yaliyopo kwa maswali yanayofanana
1. Fungua suala jipya

Changia kwa furaha! 🚀

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya kiasili inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.