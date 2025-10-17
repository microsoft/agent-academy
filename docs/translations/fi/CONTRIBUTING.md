<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-17T01:11:35+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "fi"
}
-->
# Osallistuminen MCS Agent Academyyn

Kiitos kiinnostuksestasi osallistua MCS Agent Academyyn! Tämä opas auttaa sinua kehitysympäristön asennuksessa ja dokumentaatiostandardiemme ymmärtämisessä.

## Dokumentaatiostandardit

Noudatamme Microsoftin dokumentaatiostandardeja varmistaaksemme sisällön johdonmukaisuuden ja korkean laadun. Kattavaa ohjeistusta tehokkaan dokumentaation kirjoittamiseen löydät täältä:

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - Täydellinen opas dokumentaation kirjoittamiseen Microsoftin tyylin ja standardien mukaisesti.

Tämä resurssi kattaa:

- Selkeän ja ytimekkään sisällön kirjoittamisen
- Oikean markdown-syntaksin käytön
- Johdonmukaisen terminologian noudattamisen
- Dokumentaation tehokkaan rakenteen
- Parhaat käytännöt saavutettavuuden suhteen

## Markdown-tarkistus

Käytämme markdownlint-työkalua varmistamaan dokumentaation johdonmukaisen muotoilun ja laadun. Tämä auttaa ylläpitämään luettavuutta ja ammattimaisia standardeja koko repositorion läpi.

### markdownlint-cli2:n asentaminen

Jotta voit käyttää markdownlintia paikallisesti ja vastata GitHub-työnkulkuamme, asenna markdownlint-cli2:

```powershell
npm install -g markdownlint-cli2
```

### markdownlintin suorittaminen paikallisesti

Kun asennus on valmis, voit suorittaa markdownlintin kaikille repositorion markdown-tiedostoille:

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### Konfiguraatio

Markdownlint-konfiguraatiomme on määritelty tiedostossa `.markdownlint.jsonc` repositorion juurihakemistossa. Tämä konfiguraatio:

- Poistaa rivin pituuden tarkistukset käytöstä (MD013), koska standardia ei ole määritelty
- Sallii päällekkäiset otsikot vain sisaruksissa (MD024) yleisten malliosioiden vuoksi
- Poistaa järjestetyn listan etuliitteen validoinnin (MD029) globaalisti sisennetyn sisällön numeroinnin nollaamisen vuoksi
- Sallii koodilohkojen käytön tekstille (MD046)

### Poikkeusten lisääminen markdownlint-sääntöihin

Vaikka globaalit konfiguraatiomme käsittelevät useimmat yleiset tilanteet, saatat kohdata tilanteita, joissa sinun täytyy lisätä poikkeuksia yksittäisiin markdown-tiedostoihin. Tässä esimerkkejä, miten tämä tehdään:

#### Vaihtoehto 1: Ohita seuraava rivi

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### Vaihtoehto 2: Ohita tietty alue

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

#### Vaihtoehto 3: Ohita koko tiedosto

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> Aseta nämä markdown-tiedoston alkuun poistaaksesi tietyt säännöt koko dokumentista.

### Milloin käyttää poikkeuksia

Saatat tarvita poikkeuksia markdownlint-sääntöihin seuraavissa tilanteissa:

1. **MD029 (Järjestetyn listan numerointi)**: Jatka numerointia muun sisällön jälkeen, tarkoituksellinen numerointi, joka ei ala ykkösestä, tai monimutkainen sisäkkäinen sisältö
2. **MD013 (Rivin pituus)**: Koodiesimerkit, URL-osoitteet tai tekninen sisältö, jota ei voi järkevästi jakaa riveille
3. **MD033 (Inline HTML)**: Kun tarvitset tiettyjä HTML-elementtejä muotoiluun, jota ei voi saavuttaa markdownilla
4. **MD041 (Ensimmäinen rivi otsikko)**: Mallitiedostot tai dokumentit, jotka tarkoituksellisesti eivät ala otsikolla

### Parhaat käytännöt

1. **Käytä poikkeuksia säästeliäästi**: Lisää poikkeuksia vain, kun se on dokumentaation selkeyden kannalta välttämätöntä
2. **Kommentoi poikkeuksesi**: Kun käytät poikkeuksia, lisää lyhyt selitys syystä
3. **Suosi `markdownlint-disable-next-line`**: Tämä on tarkempi kuin koko osioiden poistaminen käytöstä
4. **Suorita tarkistus ennen sitouttamista**: Suorita aina `markdownlint-cli2 "**/*.md"` ennen muutosten lähettämistä

> **Vinkki:** Voit nopeasti suorittaa sekä markdownlint- että cSpell-tarkistukset markdown-tiedostoillesi käyttämällä mukana tulevaa `scripts/validate-markdown.ps1` PowerShell-skriptiä. Tämä skripti automatisoi yleiset muotoilu- ja oikeinkirjoitustarkistukset varmistaakseen, että panoksesi täyttävät ohjeemme.

Voit suorittaa sen repositorion juuresta PowerShellillä:

```powershell
./scripts/validate-markdown.ps1
```

### Yleiset markdownlint-virheet ja korjaukset

- **MD036**: Käytä oikeita otsikoita (`## Otsikko`) korostuksen (`**Lihavoitu teksti**`) sijaan
- **MD007**: Korjaa järjestämättömän listan sisennys (käytä 2 välilyöntiä, ei 4)
- **MD022**: Lisää tyhjät rivit ennen ja jälkeen otsikoiden
- **MD032**: Lisää tyhjät rivit ennen ja jälkeen listojen
- **MD009**: Poista rivien lopussa olevat ylimääräiset välilyönnit

### GitHub-työnkulku

Repositoriomme sisältää GitHub-työnkulun, joka suorittaa markdownlintin automaattisesti kaikille pull requesteille. Työnkulku:

- Käyttää samaa markdownlint-cli2-työkalua, jonka voit suorittaa paikallisesti
- Sulkee pois `SUPPORT.md`, `SECURITY.md` ja `CODE_OF_CONDUCT.md` tiedostot
- Käyttää `.markdownlint.jsonc`-konfiguraatiotamme
- Raportoi ongelmat varoituksina, jolloin PR:t voivat yhdistyä samalla kun korjausmahdollisuudet korostetaan

### VS Code markdownlint-laajennus

Jos käytät VS Codea, suosittelemme asentamaan [markdownlint-laajennuksen](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) reaaliaikaista markdown-tarkistusta varten:

1. **Asenna laajennus** - Etsi "markdownlint" David Ansonin tekemänä VS Code -laajennusmarkkinapaikasta
2. **Automaattinen konfiguraatio** - Laajennus käyttää automaattisesti `.markdownlint.jsonc`-konfiguraatiotiedostoasi
3. **Reaaliaikainen palaute** - Näet aaltoviivoja markdown-muotoiluvirheistä kirjoittaessasi
4. **Nopeat korjaukset** - Käytä `Ctrl+.` (Cmd+. Macilla) nähdäksesi saatavilla olevat automaattiset korjaukset monille virheille
5. **Ongelmat-paneeli** - Näet kaikki markdown-ongelmat VS Coden Ongelmat-paneelissa

Tämä tarjoaa välitöntä palautetta kirjoittaessasi, mikä helpottaa markdown-standardien noudattamista ennen muutosten sitouttamista.

## Oikeinkirjoituksen tarkistus

Käytämme cSpell-työkalua (Code Spell Checker) ylläpitämään johdonmukaista oikeinkirjoitusta kaikessa dokumentaatiossamme. Tämä auttaa varmistamaan ammattimaisen laadun ja vähentämään kirjoitusvirheitä repositorion läpi.

### cSpellin asentaminen

Jotta voit suorittaa cSpellin paikallisesti, asenna se globaalisti:

```powershell
npm install -g cspell
```

### cSpellin suorittaminen paikallisesti

Kun asennus on valmis, voit suorittaa cSpellin tarkistaaksesi dokumentaation oikeinkirjoituksen:

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

### Konfiguraatio

cSpell-konfiguraatiomme on määritelty tiedostossa `cspell.json` repositorion juurihakemistossa. Tämä konfiguraatio:

- Sisältää mukautettuja sanoja, jotka liittyvät alamme erityispiirteisiin (Copilot, SharePoint, Dataverse jne.)
- Ohittaa yleiset tiedostotyypit, joita ei tarvitse tarkistaa (kuvat, rakennustiedostot)
- Asettaa kielen englanniksi oikeinkirjoituksen tarkistusta varten

### Uusien sanojen lisääminen

Jos kohtaat sanan, jonka cSpell merkitsee väärin kirjoitetuksi, mutta joka on oikeasti oikein (kuten tuotenimet, tekniset termit tai erisnimet), voit lisätä sen `words`-taulukkoon tiedostossa `cspell.json`:

```json
{
  "words": [
    "Contoso",
    "Dataverse",
    "YourNewWord"
  ]
}
```

### VS Code cSpell-laajennus

Jos käytät VS Codea [Code Spell Checker -laajennuksen](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) kanssa, voit nopeasti lisätä sanoja konfiguraatioosi:

1. **Näytä oikeinkirjoitusvirheet** - Etsi aaltoviivoja väärin kirjoitetuista sanoista
1. **Käytä Quick Fix -toimintoa** - Napsauta oikealla hiiren painikkeella alleviivattua sanaa tai käytä `Ctrl+.` (Cmd+. Macilla)
1. **Lisää konfiguraatioon** - Valitse "Spelling -> Add to cSpell configuration" kontekstivalikosta
1. **Valitse sijainti** - Laajennus lisää sanan automaattisesti `cspell.json`-tiedostoosi

Tämä on paljon nopeampaa kuin konfiguraatiotiedoston manuaalinen muokkaaminen yksittäisten sanojen osalta.

### Parhaat käytännöt oikeinkirjoituksessa

1. **Suorita oikeinkirjoitustarkistus ennen sitouttamista**: Suorita aina `cspell "docs/**/*.md"` ennen muutosten lähettämistä
1. **Korjaa kirjoitusvirheet mieluummin kuin ohita**: Korjaa mahdollisuuksien mukaan todelliset kirjoitusvirheet sen sijaan, että lisäisit ne sanalistaan
1. **Käytä johdonmukaista terminologiaa**: Pysy vakiintuneissa tuotenimissä ja teknisissä termeissä

## Paikallinen dokumentaation esikatselu MkDocsilla

Käytämme MkDocsia Material-teemalla dokumentaatiosivustomme luomiseen. Voit suorittaa sen paikallisesti esikatsellaksesi muutoksiasi ennen pull requestin lähettämistä.

📖 **Lisätietoja**: [MkDocs Documentation](https://www.mkdocs.org/) | [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)

### Python-ympäristön asennus VS Codessa

Suosittelemme virtuaalisen ympäristön käyttöä projektin riippuvuuksien eristämiseksi. VS Code tekee tästä prosessista sujuvan ja hoitaa Pythonin asennuksen tarvittaessa.

> **GitHub Codespaces**: Nämä ohjeet toimivat täydellisesti GitHub Codespacesissa, jossa Python on esiasennettu ja VS Code -ympäristö valmiina käyttöön.

📖 **Lisätietoja**: [Python in VS Code](https://code.visualstudio.com/docs/languages/python) | [Python environments in VS Code](https://code.visualstudio.com/docs/python/environments)

#### Esivaatimukset

**Asenna Python-laajennus**: Asenna [Python-laajennus](https://marketplace.visualstudio.com/items?itemName=ms-python.python) Microsoftilta VS Code -markkinapaikasta, jos et ole jo tehnyt niin.

#### Asennus VS Codessa

1. **Luo virtuaalinen ympäristö**:
   - Avaa komentopaletti (`Ctrl+Shift+P` Windows/Linux, `Cmd+Shift+P` Mac)
   - Kirjoita "Python: Create Environment" ja valitse se
   - Valitse "Venv" (virtuaalinen ympäristö)
   - Jos Python-tulkkeja ei ole saatavilla, VS Code ohjaa sinut Pythonin asennukseen
   - Valitse Python-tulkki (Python 3.8+)
   - VS Code luo `.venv`-kansion ja aktivoi sen automaattisesti

2. **Varmista asennus**:
   - Avaa uusi integroitu terminaali (`` Ctrl+Shift+` `` Windows/Linux, `` Cmd+Shift+` `` Mac tai `View > Terminal`)
   - Näet `(.venv)` terminaalin kehotteessa
   - Suorita: `python --version` varmistaaksesi

> **Huom:** Uuden terminaalin avaaminen varmistaa, että Python-ympäristö on oikein aktivoitu. Jos haluat käyttää olemassa olevaa Python-ympäristöä uuden virtuaalisen ympäristön luomisen sijaan, voit käyttää "Python: Select Interpreter" -toimintoa komentopaletista ja valita haluamasi ympäristön.

### MkDocsin asentaminen VS Codessa

Kun Python-ympäristösi on asennettu VS Codessa, asenna MkDocs ja Material-teema:

1. **Avaa VS Coden integroitu terminaali** (`Ctrl+`` ` tai `View > Terminal`)
2. **Varmista, että virtuaalinen ympäristösi on aktiivinen** (näet `(.venv)` kehotteessa)
3. **Asenna paketit**:

   ```bash
   pip install mkdocs mkdocs-material
   ```

### MkDocsin suorittaminen VS Codessa

Käynnistääksesi paikallisen kehityspalvelimen hot reload -toiminnolla:

1. **VS Coden integroidussa terminaalissa**, suorita:

   ```bash
   mkdocs serve
   ```

2. **Sivusto on saatavilla osoitteessa**: `http://127.0.0.1:8000/agent-academy/`

### Esikatselu VS Coden Simple Browserilla

Parhaan kehityskokemuksen saamiseksi ilman VS Codesta poistumista:

1. **Käynnistä MkDocs-palvelin** integroidussa terminaalissa (kuten yllä)
2. **Avaa Simple Browser**:
   - **Tapa 1**: Avaa komentopaletti (`Ctrl+Shift+P` / `Cmd+Shift+P`)
   - Kirjoita "Simple Browser: Show" ja valitse se
   - Syötä URL: `http://127.0.0.1:8000/agent-academy/`

   - **Tapa 2**: Napsauta URL-osoitetta hiiren oikealla painikkeella terminaalin tulosteessa ja valitse "Follow Link"

   - **Tapa 3**: Käytä `Ctrl+Click` (Windows) tai `Cmd+Click` (Mac) URL-osoitteessa terminaalissa

3. **Sijoita selain**: Voit kiinnittää Simple Browserin editorin viereen rinnakkaista muokkausta ja esikatselua varten

### VS Code -työtilan edut

Työskentely kokonaan VS Codessa tarjoaa seuraavat edut:

- **Integroitu terminaali**: Ei tarvitse vaihtaa sovellusten välillä
- **Rinnakkainen esikatselu**: Muokkaa markdownia ja näe muutokset samanaikaisesti  
- **Linkkien navigointi**: Napsauta terminaalin URL-osoitteita suoraan avataksesi Simple Browserin
- **Laajennusten integrointi**: Python-, markdownlint- ja cSpell-laajennukset toimivat yhdessä
- **Git-integraatio**: Sisäänrakennettu lähdekontrollipaneeli sitoumuksia ja pull requesteja varten

### Hot reload -ominaisuudet

Kun suoritat `mkdocs serve`, saat:

- **Automaattinen päivitys**: Muutokset mihin tahansa `docs/`-kansion `.md`-tiedostoon päivittävät selaimen automaattisesti
- **Konfiguraatiopäivitykset**: Muutokset `mkdocs.yml`-tiedostoon käynnistävät myös uudelleenrakennuksen
- **Reaaliaikainen esikatselu**: Näe muotoilu-, linkki- ja sisältömuutokset välittömästi
- **Linkkien validointi**: MkDocs varoittaa rikkinäisistä sisäisistä linkeistä

### Hyödylliset MkDocs-komennot VS Codessa

Suorita nämä komennot VS Coden integroidussa terminaalissa:

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

> **Vinkki:** Esikatsoaksesi dokumentaation paikallisesti kaikkien riippuvuuksien tarkistuksen kanssa, käytä `scripts/serve-docs.ps1` PowerShell-skriptiä.

### Paikallisen esikatselun edut

- **Välitön palaute**: Näe, miten markdownisi renderöityy Material-teemalla
- **Linkkien validointi**: Havaitse rikkinäiset linkit ennen kuin ne menevät liveksi
- **Navigoinnin testaus**: Varmista, että sisältösi näkyy oikeissa osioissa
- **Mobiiliesikatselu**: Testaa, miltä sisältösi näyttää eri näytön ko'oilla
- **Suorituskyvyn tarkistus**: Varmista, että kuvat ja resurssit latautuvat oikein

## Kysymyksiä?

Jos sinulla on kysymyksiä markdown-muotoilusta tai osallistumisohjeista, voit:

1. Tutustua tähän osallistumisoppaaseen
1. Tarkistaa olemassa olevat ongelmat samankaltaisten kysymysten varalta
1. Avata uuden ongelman

Mukavaa osallistumista! 🚀

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.