<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-20T22:38:10+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "hr"
}
-->
# Doprinos MCS Agent Academy

Hvala vam na interesu za doprinos MCS Agent Academy! Ovaj vodič pomoći će vam da postavite razvojno okruženje i razumijete naše standarde dokumentacije.

## Standardi dokumentacije

Pratimo Microsoftove standarde dokumentacije kako bismo osigurali dosljedan i visokokvalitetan sadržaj. Za detaljne smjernice o pisanju učinkovite dokumentacije, pogledajte:

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - Kompletan vodič za pisanje dokumentacije koja slijedi Microsoftov stil i standarde.

Ovaj resurs pokriva:

- Pisanje jasnog i sažetog sadržaja
- Korištenje ispravne sintakse markdowna
- Praćenje dosljedne terminologije
- Učinkovito strukturiranje dokumentacije
- Najbolje prakse za pristupačnost

## Provjera sintakse markdowna

Koristimo markdownlint za osiguranje dosljednog formatiranja i kvalitete u cijeloj našoj dokumentaciji. To pomaže u održavanju čitljivosti i profesionalnih standarda u repozitoriju.

### Instalacija markdownlint-cli2

Kako biste lokalno pokrenuli markdownlint i uskladili ga s našim GitHub radnim procesom, instalirajte markdownlint-cli2:

```powershell
npm install -g markdownlint-cli2
```

### Pokretanje markdownlint-a lokalno

Nakon instalacije, možete pokrenuti markdownlint na svim markdown datotekama u repozitoriju:

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### Konfiguracija

Naša konfiguracija markdownlint-a definirana je u `.markdownlint.jsonc` na korijenu repozitorija. Ova konfiguracija:

- Onemogućuje provjeru duljine linija (MD013) jer nismo definirali standard
- Dopušta duplicirane naslove samo u povezanim sekcijama (MD024) za uobičajene predloške
- Globalno onemogućuje provjeru prefiksa numeriranih popisa (MD029) zbog resetiranja numeracije u uvučenom sadržaju
- Dopušta korištenje blokova koda za tekst (MD046)

### Dodavanje iznimki za markdownlint pravila

Iako naša globalna konfiguracija pokriva većinu uobičajenih scenarija, možda ćete naići na situacije u kojima trebate dodati iznimke za određena markdownlint pravila u pojedinačnim datotekama. Evo primjera kako to učiniti:

#### Opcija 1: Ignoriraj za sljedeću liniju

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### Opcija 2: Ignoriraj za određeni raspon

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

#### Opcija 3: Ignoriraj za cijelu datoteku

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> Postavite ovo na sam vrh vaše markdown datoteke kako biste onemogućili određena pravila za cijeli dokument.

### Kada koristiti iznimke

Možda ćete trebati iznimke za različita markdownlint pravila kada:

1. **MD029 (Numeriranje popisa)**: Nastavljate numerirane popise nakon drugog sadržaja, namjerno numeriranje koje ne počinje od 1 ili složenog uvučenog sadržaja
2. **MD013 (Duljina linije)**: Primjeri koda, URL-ovi ili tehnički sadržaj koji se ne može razumno podijeliti na više linija
3. **MD033 (Inline HTML)**: Kada su potrebni specifični HTML elementi za formatiranje koje nije moguće postići s markdownom
4. **MD041 (Naslov na prvoj liniji)**: Predlošci datoteka ili dokumenti koji namjerno ne počinju s naslovom

### Najbolje prakse

1. **Koristite iznimke štedljivo**: Dodajte iznimke samo kada je to potrebno za jasnoću dokumentacije
2. **Komentirajte svoje iznimke**: Kada koristite iznimke, razmislite o dodavanju kratkog komentara koji objašnjava razlog
3. **Preferirajte `markdownlint-disable-next-line`**: Ovo je preciznije od onemogućavanja za cijele sekcije
4. **Pokrenite linter prije predaje**: Uvijek pokrenite `markdownlint-cli2 "**/*.md"` prije predaje promjena

> **Savjet:** Brzo možete pokrenuti provjeru markdownlint-a i cSpell-a na vašim markdown datotekama koristeći priloženi PowerShell skript `scripts/validate-markdown.ps1`. Ovaj skript pomaže automatizirati uobičajene provjere formatiranja i pravopisa kako bi vaš doprinos bio u skladu s našim smjernicama.

Možete ga pokrenuti iz korijena repozitorija koristeći PowerShell:

```powershell
./scripts/validate-markdown.ps1
```

### Uobičajene greške i popravci markdownlint-a

- **MD036**: Koristite ispravne naslove (`## Naslov`) umjesto naglašavanja (`**Podebljani tekst**`)
- **MD007**: Ispravite uvlačenje nenumeriranih popisa (koristite 2 razmaka, ne 4)
- **MD022**: Dodajte prazne linije prije i poslije naslova
- **MD032**: Dodajte prazne linije prije i poslije popisa
- **MD009**: Uklonite razmake na kraju linija

### GitHub radni proces

Naš repozitorij uključuje GitHub radni proces koji automatski pokreće markdownlint na svim zahtjevima za povlačenje. Radni proces:

- Koristi isti markdownlint-cli2 alat koji možete pokrenuti lokalno
- Isključuje datoteke `SUPPORT.md`, `SECURITY.md` i `CODE_OF_CONDUCT.md`
- Koristi našu `.markdownlint.jsonc` konfiguraciju
- Prijavljuje probleme kao upozorenja, omogućujući spajanje PR-ova uz isticanje prilika za poboljšanje formatiranja

### VS Code markdownlint ekstenzija

Ako koristite VS Code, preporučujemo instalaciju [markdownlint ekstenzije](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) za provjeru markdowna u stvarnom vremenu:

1. **Instalirajte ekstenziju** - Potražite "markdownlint" autora David Anson u VS Code trgovini ekstenzija
2. **Automatska konfiguracija** - Ekstenzija će automatski koristiti vašu `.markdownlint.jsonc` konfiguracijsku datoteku
3. **Povratne informacije u stvarnom vremenu** - Vidjet ćete podcrtane greške u formatiranju markdowna dok pišete
4. **Brzi popravci** - Koristite `Ctrl+.` (Cmd+. na Macu) za prikaz dostupnih automatskih popravaka za mnoge probleme
5. **Panel problema** - Pregledajte sve markdown probleme u VS Code panelu problema

Ovo pruža trenutne povratne informacije tijekom pisanja, olakšavajući praćenje markdown standarda prije predaje promjena.

## Provjera pravopisa

Koristimo cSpell (Code Spell Checker) za održavanje dosljednog pravopisa u cijeloj našoj dokumentaciji. To pomaže osigurati profesionalnu kvalitetu i smanjiti pravopisne pogreške u repozitoriju.

### Instalacija cSpell-a

Kako biste lokalno pokrenuli cSpell, instalirajte ga globalno:

```powershell
npm install -g cspell
```

### Pokretanje cSpell-a lokalno

Nakon instalacije, možete pokrenuti cSpell za provjeru pravopisa u dokumentaciji:

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

Naša cSpell konfiguracija definirana je u `cspell.json` na korijenu repozitorija. Ova konfiguracija:

- Uključuje prilagođene riječi specifične za našu domenu (Copilot, SharePoint, Dataverse itd.)
- Ignorira uobičajene vrste datoteka koje ne trebaju provjeru pravopisa (slike, datoteke za izgradnju)
- Postavlja jezik na engleski za provjeru pravopisa

### Dodavanje novih riječi

Ako naiđete na riječ koju cSpell označi kao pogrešno napisanu, ali je zapravo točna (poput naziva proizvoda, tehničkih pojmova ili vlastitih imena), možete je dodati u niz `words` u `cspell.json`:

```json
{
  "words": [
    "Contoso",
    "Dataverse",
    "YourNewWord"
  ]
}
```

### VS Code cSpell ekstenzija

Ako koristite VS Code s [Code Spell Checker ekstenzijom](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker), možete brzo dodati riječi u svoju konfiguraciju:

1. **Pregledajte pravopisne greške** - Potražite podcrtane riječi označene kao pogrešno napisane
1. **Koristite brzi popravak** - Desni klik na podcrtanu riječ ili koristite `Ctrl+.` (Cmd+. na Macu)
1. **Dodajte u konfiguraciju** - Odaberite "Spelling -> Add to cSpell configuration" iz kontekstnog izbornika
1. **Odaberite lokaciju** - Ekstenzija će automatski dodati riječ u vašu `cspell.json` datoteku

Ovo je mnogo brže od ručnog uređivanja konfiguracijske datoteke za pojedinačne riječi.

### Najbolje prakse za pravopis

1. **Pokrenite provjeru pravopisa prije predaje**: Uvijek pokrenite `cspell "docs/**/*.md"` prije predaje promjena
1. **Ispravite pravopisne greške umjesto ignoriranja**: Kad god je moguće, ispravite stvarne pravopisne greške umjesto dodavanja u popis riječi
1. **Koristite dosljednu terminologiju**: Držite se utvrđenih naziva proizvoda i tehničkih pojmova

## Lokalni pregled dokumentacije s MkDocs

Koristimo MkDocs s Material temom za generiranje naše web stranice s dokumentacijom. Možete je pokrenuti lokalno kako biste pregledali svoje promjene prije predaje zahtjeva za povlačenje.

📖 **Saznajte više**: [MkDocs Dokumentacija](https://www.mkdocs.org/) | [Material za MkDocs](https://squidfunk.github.io/mkdocs-material/)

### Postavljanje Python okruženja u VS Code

Preporučujemo korištenje virtualnog okruženja za izolaciju ovisnosti za ovaj projekt. VS Code čini ovaj proces jednostavnim i automatski će instalirati Python ako je potrebno.

> **GitHub Codespaces**: Ove upute savršeno funkcioniraju u GitHub Codespaces, koji dolazi s unaprijed instaliranim Pythonom i spremnim VS Code okruženjem.

📖 **Saznajte više**: [Python u VS Code](https://code.visualstudio.com/docs/languages/python) | [Python okruženja u VS Code](https://code.visualstudio.com/docs/python/environments)

#### Preduvjeti

**Instalirajte Python ekstenziju**: Instalirajte [Python ekstenziju](https://marketplace.visualstudio.com/items?itemName=ms-python.python) od Microsofta iz VS Code trgovine ekstenzija ako to već niste učinili.

#### Postavljanje u VS Code

1. **Kreirajte virtualno okruženje**:
   - Otvorite Command Palette (`Ctrl+Shift+P` na Windows/Linux, `Cmd+Shift+P` na Macu)
   - Upišite "Python: Create Environment" i odaberite opciju
   - Odaberite "Venv" (virtualno okruženje)
   - Ako nema dostupnih Python interpretera, VS Code će vas voditi kroz instalaciju Pythona
   - Odaberite svoj Python interpreter (Python 3.8+)
   - VS Code će kreirati `.venv` mapu i automatski je aktivirati

2. **Provjerite postavke**:
   - Otvorite novi integrirani terminal (`` Ctrl+Shift+` `` na Windows/Linux, `` Cmd+Shift+` `` na Macu ili `View > Terminal`)
   - Trebali biste vidjeti `(.venv)` u promptu terminala
   - Pokrenite: `python --version` za provjeru

> **Napomena**: Otvaranje novog terminala osigurava da je Python okruženje pravilno aktivirano. Ako preferirate korištenje postojećeg Python okruženja umjesto kreiranja novog virtualnog okruženja, možete koristiti "Python: Select Interpreter" iz Command Palette i odabrati željeno okruženje.

### Instalacija MkDocs-a u VS Code

S vašim Python okruženjem postavljenim u VS Code, instalirajte MkDocs i Material temu:

1. **Otvorite integrirani terminal u VS Code-u** (`Ctrl+`` ` ili `View > Terminal`)
2. **Provjerite je li vaše virtualno okruženje aktivno** (trebali biste vidjeti `(.venv)` u promptu)
3. **Instalirajte pakete**:

   ```bash
   pip install mkdocs mkdocs-material
   ```

### Pokretanje MkDocs-a u VS Code-u

Za pokretanje lokalnog razvojnog servera s automatskim osvježavanjem:

1. **U integriranom terminalu VS Code-a**, pokrenite:

   ```bash
   mkdocs serve
   ```

2. **Web stranica će biti dostupna na**: `http://127.0.0.1:8000/agent-academy/`

### Pregled u Simple Browser-u VS Code-a

Za najbolje iskustvo razvoja bez napuštanja VS Code-a:

1. **Pokrenite MkDocs server** u integriranom terminalu (kao što je prikazano gore)
2. **Otvorite Simple Browser**:
   - **Metoda 1**: Otvorite Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
   - Upišite "Simple Browser: Show" i odaberite opciju
   - Unesite URL: `http://127.0.0.1:8000/agent-academy/`

   - **Metoda 2**: Desni klik na URL u izlazu terminala i odaberite "Follow Link"

   - **Metoda 3**: Koristite `Ctrl+Click` (Windows) ili `Cmd+Click` (Mac) na URL u terminalu

3. **Pozicionirajte preglednik**: Možete postaviti Simple Browser uz vaš editor za paralelno uređivanje i pregled

### Prednosti VS Code radnog prostora

Rad unutar VS Code-a pruža ove prednosti:

- **Integrirani terminal**: Nema potrebe za prebacivanjem između aplikacija
- **Paralelni pregled**: Uređujte markdown i istovremeno gledajte promjene  
- **Navigacija poveznicama**: Kliknite na URL-ove u terminalu za otvaranje u Simple Browser-u
- **Integracija ekstenzija**: Python, markdownlint i cSpell ekstenzije rade zajedno
- **Git integracija**: Ugrađeni panel za kontrolu izvornog koda za commitove i zahtjeve za povlačenje

### Značajke automatskog osvježavanja

Kada pokrenete `mkdocs serve`, dobivate:

- **Automatsko osvježavanje**: Promjene na bilo kojoj `.md` datoteci u mapi `docs/` automatski osvježavaju preglednik
- **Ažuriranja konfiguracije**: Promjene na `mkdocs.yml` također pokreću ponovno generiranje
- **Pregled u stvarnom vremenu**: Vidite svoje formatiranje, poveznice i promjene sadržaja odmah
- **Provjera poveznica**: MkDocs će vas upozoriti na neispravne interne poveznice

### Korisne MkDocs naredbe u VS Code-u

Pokrenite ove naredbe u integriranom terminalu VS Code-a:

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

> **Savjet:** Za lokalni pregled dokumentacije s provjerom svih ovisnosti, koristite PowerShell skript `scripts/serve-docs.ps1`.

### Prednosti lokalnog pregleda

- **Trenutne povratne informacije**: Vidite kako se vaš markdown prikazuje s Material temom
- **Provjera poveznica**: Uočite neispravne poveznice prije nego što postanu javne
- **Testiranje navigacije**: Provjerite pojavljuje li se vaš sadržaj u ispravnim sekcijama
- **Pregled na mobilnim uređajima**: Testirajte kako vaš sadržaj izgleda na različitim veličinama ekrana
- **Provjera performansi**: Osigurajte da se slike i resursi pravilno učitavaju

## Pitanja?

Ako imate pitanja o formatiranju markdowna ili smjernicama za doprinos, molimo:

1. Pregledajte ovaj vodič za doprinos
1. Provjerite postojeće probleme za slična pitanja
1. Otvorite novi problem

Sretno s doprinosom! 🚀

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne odgovaramo za nesporazume ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.