<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cc4afa4a5a11c9d03896decfbcbd4060",
  "translation_date": "2025-10-20T23:29:00+00:00",
  "source_file": "docs/recruit/09-add-an-agent-flow/README.md",
  "language_code": "hr"
}
-->
# 🚨 Misija 09: Dodajte tijek agenta svojoj temi za automatizaciju

## 🕵️‍♂️ KODNO IME: `OPERACIJA AUTOMATIZACIJA SNAGE`

> **⏱️ Vrijeme trajanja operacije:** `~30 minuta`  

🎥 **Pogledajte vodič**

[![Sličica videa tijeka agenta](../../../../../translated_images/video-thumbnail.ede12df9aaebcc8996680c8b6555d309b53bdf33d1b0165cae3b5173a6bcdd73.hr.jpg)](https://www.youtube.com/watch?v=vtLZJT3eBXg "Pogledajte vodič na YouTubeu")

## 🎯 Kratak opis misije

Vaš agent sada može komunicirati s korisnicima i pružati informacije, ali prava operativna izvrsnost zahtijeva da vaš agent poduzme akciju. Ova misija će transformirati vaš konverzacijski agent u moćan alat za automatizaciju opremanjem tijekovima agenta.

Na kraju misije, stvorit ćete cjelovitu automatizaciju zahtjeva za uređajima koja prikuplja korisničke podatke putem prilagodljive kartice, dohvaća podatke iz SharePointa, šalje obavijesti menadžerima putem e-pošte i pruža besprijekornu povratnu informaciju korisnicima - sve to orkestrirano od strane vašeg agenta kroz inteligentnu automatizaciju tijeka rada.

## 🔎 Ciljevi

U ovoj misiji naučit ćete:

1. Razumjeti što su tijekovi agenta i kako se razlikuju od Power Automate cloud tijekova za automatizaciju
1. Upoznati ključne značajke koje čine tijekove agenta moćnima, uključujući AI akcije i pisanje prirodnim jezikom
1. Istražiti dizajner tijeka agenta i kako koristiti izraze za dinamičko rukovanje podacima
1. Stvoriti cjelovitu automatizaciju zahtjeva za uređajima koja integrira podatke iz SharePointa i obavijesti putem e-pošte

## 🤔 Što je tijek agenta?

Tijekovi agenta su moćan način za automatizaciju ponavljajućih zadataka i integraciju vaših aplikacija i usluga. Zamislite ih kao strukturirane, korak-po-korak tijekove rada koje vaš agent može izvršavati kako bi automatizirao zadatke ili se povezao s drugim aplikacijama i uslugama. Možete ih smatrati mini tijekovima rada koji pomažu vašem agentu da obavlja zadatke poput slanja obavijesti, ažuriranja zapisa ili odgovaranja na događaje.

Za razliku od autonomnih agenata koji koriste AI za donošenje odluka u hodu, tijekovi agenta su **deterministički tijekovi rada** - što znači da uvijek slijede isti put, osiguravajući dosljedne i pouzdane rezultate.

Jednostavno rečeno:

- Pomažu vašem agentu da _radi stvari_, a ne samo da _govori stvari_ korisnicima.
- Ponovno su upotrebljivi u različitim temama i agentima te se mogu pokrenuti porukama korisnika, događajima ili drugim aplikacijama i uslugama.

## 🙋🏽 Da, ali kako se razlikuju od Power Automate cloud tijekova?

I tijekovi agenta i Power Automate cloud tijekovi pomažu u automatizaciji zadataka. Dizajnirani su za različite svrhe i rade na različite načine.

### 🤖 Tijekovi agenta u Copilot Studiju

**Za što su namijenjeni:**

- Izrađeni za konverzacijske i autonomne agente (putem uputa za agenta) u Copilot Studiju.
- Fokusirani na pametnu, AI-pokretanu automatizaciju koja komunicira s poslovnim sustavima.

**Zašto su korisni:**

- Jednostavni za izradu i upravljanje izravno u Copilot Studiju.
- Odlični za automatizaciju zadataka koji se događaju _tijekom razgovora_ s korisnicima, poput podnošenja zahtjeva za dopust.
- Ne trebate zasebnu Power Automate licencu jer se naplaćuje prema korištenju unutar Copilot Studija. To može uštedjeti vrijeme i troškove za timove u poduzeću.

**Ograničenja:**

- Ne možete ih dijeliti, kopirati ili dodijeliti su-vlasnike.
- Tijekovi agenta vidljivi su i upotrebljivi samo unutar Copilot Studija.
- Trenutno se okidači događaja za agente mogu uređivati u Power Automate maker portalu.

### ☁️ Power Automate cloud tijekovi

**Za što su namijenjeni:**

- Dizajnirani za opću automatizaciju među mnogim aplikacijama i uslugama.
- Mogu raditi neovisno ili zajedno s tijekovima agenta.

**Zašto su korisni:**

- Nude širok raspon konektora.
- Idealni za automatizaciju procesa izvan agenata.
- Mogu se dijeliti, ponovno koristiti i upravljati među timovima.

**Zahtjevi:**

- Potrebna je Power Automate licenca za njihovo korištenje.

### 📗 Sažetak

| Koristite ovo | Kada želite |
| :- | :- |
| Tijekovi agenta | Automatizirati zadatke unutar agenta, koristiti AI i zadržati sve u Copilot Studiju |  
| Power Automate cloud tijekovi | Automatizirati među aplikacijama i uslugama ili izraditi tijekove rada izvan agenata |

## 👍🏻 Zašto koristiti tijekove agenta

Tijekovi agenta uvijek slijede fiksni put - rade isto svaki put kad dobiju isti unos.

To ih čini:

- **Pouzdanima** - možete vjerovati da će se ponašati isto svaki put.
- **Predvidljivima** - znate kakav rezultat očekivati kada se tijek pokrene.
- **Temeljenima na pravilima** - slijede korake koje definirate.

Ostale prednosti su:

- **Automatizacija** - omogućuje vašem agentu da se bavi ponavljajućim zadacima poput podnošenja obrazaca ili slanja obavijesti.
- **Povezanost** - povezuje se s više od 1400 konektora poput ServiceNow, SharePoint, Salesforce. Također možete izraditi vlastiti prilagođeni konektor.
- **Čvrsta integracija** - tijekovi agenta dio su logike agenta, pokreću se izravno porukama korisnika ili radnjama u razgovoru.
- **Skalabilnost** - ponovno korištenje tijekova među više agenata ili scenarija.
- **Bez koda ili s malo koda** - možete izraditi tijekove koristeći prirodni jezik ili vizualni dizajner.
- **Sve-u-jednom platforma** - možete dizajnirati, testirati i implementirati tijekove agenta na jednom mjestu - Copilot Studio. Nema potrebe za prebacivanjem između platformi.

## 🏄🏻‍♂️ Kako tijekovi agenta poboljšavaju vašeg agenta?

Tijekovi agenta proširuju ono što vaš agent može učiniti izvan "razgovora" s korisnicima. Omogućuju mu da poduzme akciju i komunicira sa sustavima.

Recimo da radite u financijskom odjelu i primate puno računa od dobavljača. Obično netko mora pročitati svaki račun, izvući važne detalje - iznos, datum, tko ga šalje, provjeriti odgovara li sve vašim zapisima. Zatim ga poslati pravoj osobi na odobrenje. To oduzima vrijeme i trud.

Uz tijekove agenta u Copilot Studiju, možete automatizirati ovaj proces. Čim račun stigne, agent:

1. Čita dokument koristeći inteligentnu obradu dokumenata kako bi pronašao ključne informacije.
1. Provjerava detalje u odnosu na vaše poslovne podatke kako bi se osiguralo da je sve ispravno.
1. Usmjerava ga na odobrenje pravoj osobi.

To štedi vrijeme, smanjuje pogreške i čini cijeli proces mnogo glatkijim.

### Zamislite to ovako

- **Agenti**: pametni donositelji odluka
- **Tijekovi agenta**: pouzdani izvršitelji

### Zašto je to važno

- Dobivate najbolje od oba svijeta: pouzdanu automatizaciju i fleksibilni AI.
- Jednostavno je izraditi i ažurirati tijekove kako se mijenjaju poslovne potrebe.
- Možete skalirati automatizaciju među timovima.

## 🔌 Ključne značajke koje čine tijekove agenta moćnima

1. **Pisanje prirodnim jezikom**
    - Možete opisati što želite da tijek radi na običnom jeziku.
    - Copilot razumije vašu namjeru i izrađuje tijek za vas.
    - Nema potrebe za pisanjem koda - samo objasnite svoju ideju.

1. **AI akcije**

    Koristite AI za:

    - Čitanje i razumijevanje dokumenata ili slika.
    - Sažimanje dugog sadržaja u kratke, korisne odgovore.
    - Davanje pametnih preporuka ili odluka.

1. **Generativne akcije**
    - Omogućuju tijeku da se prilagodi u stvarnom vremenu.
    - Agent može planirati i prilagoditi korake na temelju promjenjivih informacija.

1. **Integracijske akcije**
    - Povežite svoj tijek s drugim alatima poput Outlooka, Microsoft Teamsa, ServiceNow, SharePointa i drugih aplikacija i usluga, putem više od 1400 ugrađenih konektora ili vlastitog prilagođenog konektora.
    - To pomaže vašem agentu da radi s aplikacijama koje vaš tim već koristi.

1. **Čovjek u procesu**
    - Dodajte korake odobrenja gdje osoba treba pregledati ili potvrditi nešto.
    - [Napredna odobrenja](https://learn.microsoft.com/microsoft-copilot-studio/flows-advanced-approvals?WT.mc_id=power-172621-ebenitez) podržavaju podsjetnike, delegiranje i višestupanjska odobrenja.

## ⚙️ Kako funkcioniraju

1. **Okidač**

    Događaj pokreće tijek - poput korisnika koji postavlja pitanje, pokretanja tijeka iz teme, zakazanog vremena ili događaja koji se događa u drugom sustavu.

1. **Akcije**

    To su koraci koje agent slijedi nakon toga - slanje e-pošte, pozivanje API-ja, ažuriranje zahtjeva u ServiceNow.

## 🧶 Kako stvoriti tijek agenta

1. **Prirodni jezik**: opišite što želite da agent učini, a Copilot će ga izraditi za vas.
1. **Dizajnersko platno**: povucite i ispustite akcije, uvjete i petlje u dizajneru tijeka agenta kako biste izradili svoj tijek.

## 🎨 Što je dizajner tijeka agenta?

To je vizualni alat u Copilot Studiju koji vam pomaže izraditi, uređivati i upravljati tijekovima agenta koji pružaju korak-po-korak upute koje vaš agent slijedi kako bi obavio zadatke. Dizajniran je da bude jednostavan za korištenje, čak i ako ste novi u tijekovima agenta.

### Ključne značajke dizajnera tijeka agenta

1. **Vizualno platno**
    - Možete vidjeti cijeli tijek prikazan kao dijagram.
    - Jednostavno zumirajte, prilagodite prikaz ili koristite mini kartu za navigaciju kroz velike tijekove.

1. **Dodavanje i uklanjanje akcija**
    - Kliknite gumb _plus (+)_ za dodavanje nove akcije poput slanja poruke ili ažuriranja stavke u SharePoint listi.
    - Možete pretraživati akcije iz konektora i konfigurirati ih putem njihovih postavki.
    - Za uklanjanje akcije, kliknite _tri točke (⋮)_ i odaberite _Izbriši_.

1. **Provjera parametara**
    - Kliknite na bilo koju akciju kako biste pregledali ili uredili njezine postavke, nazvane _parametri_.
    - Možete ručno unijeti vrijednosti ili koristiti _izraze_ kako biste ih učinili dinamičnima.

1. **Povijest verzija**
    - Svaki put kad spremite svoj tijek, bilježi se verzija.
    - Možete se vratiti i pregledati ili vratiti prethodnu verziju ako je potrebno.

1. **Provjera grešaka**
    - _Provjera tijeka_ ističe sve greške.
    - Sve greške moraju biti riješene prije objavljivanja tijeka.

1. **Objava i testiranje**
    - Kada je vaš tijek bez grešaka, objavite ga kako bi postao aktivan.
    - Koristite značajku _Test_ za ručno ili automatsko pokretanje tijeka i provjeru radi li kako treba.

### Zašto koristiti dizajner tijeka agenta?

- **Vizualno i intuitivno** - možete izraditi tijekove povlačenjem i klikom.
- **Sigurno za eksperimentiranje** - povijest verzija omogućuje poništavanje promjena.
- **Ugrađeno testiranje** - pomaže vam osigurati da sve radi prije nego što postane aktivno.

## 🔤 Spomenuli ste _izraze_ - što su izrazi?

Izrazi su male formule ili naredbe koje pomažu vašem tijeku agenta da radi s podacima. Koristite ih za izračunavanje vrijednosti, formatiranje teksta, donošenje odluka ili izvlačenje specifičnih informacija iz unosa.

### Zašto koristiti izraze?

Izrazi omogućuju:

- **Prilagodbu obrade podataka** - kombiniranje imena, formatiranje datuma.
- **Donošenje odluka** - ako je vrijednost veća od 10, učinite nešto.
- **Transformaciju podataka** - promjena teksta u mala slova, izdvajanje dijela niza.
- **Automatizaciju logike** - bez pisanja kompletnog koda.

### Kako izgledaju izrazi?

Izrazi koriste funkcije. Posudit ću objašnjenje o tome što su funkcije od bivšeg Microsoft MVP-a, Jerryja Weinstocka.

!!! citat
    Funkcije su ugrađena logika za transformaciju vaših podataka, bilo kroz jednostavne ili složene operacije u vašem izrazu.

Funkcije omogućuju izradu izraza bez potrebe za pisanjem koda.

Kako ja to volim opisati, funkcija u tijekovima agenta slična je Excel funkcijama. Možete izvršiti operaciju na podacima kako biste ih transformirali u željeni izlaz. Kada izrađujete svoju formulu u Excelu, odabirete ulaznu vrijednost iz ćelija u tablici ili rasponu, a zatim primjenjujete funkcije za manipulaciju izlaznim podacima. Primjer je korištenje funkcije `COUNT` za izračun broja ćelija koje sadrže brojeve iz raspona.

U tijekovima agenta, umjesto referenciranja podataka iz ćelija u tablici, referencirate izlazne podatke iz okidača ili akcija prilikom izrade svojih izraza. Nastavljajući s prethodnim primjerom, koristite funkciju `length` za dohvaćanje broja stavki koje vraća akcija konektora _Get items_ iz SharePointa.

### Zašto su funkcije važne?

Korištenje funkcija čini vaše tijekove agenta:

- **Pametnijima** - mogu reagirati na različite unose ili uvjete.
- **Fleksibilnima** - možete prilagoditi način na koji se podaci obrađuju.
- **Učinkovitima** - izbjegavate ručne korake automatizacijom logike.

### Najkorisnije funkcije

Sljedeće su uobičajene funkcije koje se koriste u tijekovima agenta. Za potpuni popis funkcija, posjetite [referentni vodič](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez).

#### 🔡 Tekst

- `concat()` - Spaja dva ili više dijelova teksta zajedno.
      - Primjer: `concat('Pozdrav ', firstName)` → “Pozdrav Ivane”

- `toLower()` / `toUpper()` - Mijenja tekst u mala ili velika slova.
      - Korisno za standardizaciju unosa.

- `substring()` - Izvlači dio niza.
      - Primjer: Dohvati prva 3 slova imena.

- `trim()` - Uklanja razmake s početka i kraja teksta.

#### 🔢 Matematika i brojevi

- `add()`, `sub()`, `mul()`, `div()` - Osnovne matematičke operacije.
      - Primjer: `add(5, 3)` - rezultat je 8

#### 📅 Datum i vrijeme

- `utcNow()` - Dohvaća trenutni datum i vrijeme u UTC formatu.
      - Odlično za vremenske oznake.

- `addDays()`, `addHours()` - Dodaje vrijeme datumu.
- Primjer: `addDays(utcNow(), 7)` rezultat je datum 7 dana od danas.

- `formatDateTime()` - Formatira datum u čitljiv niz znakova.
      - Primjer: Ponedjeljak, 7. srpnja 2025.

#### ✅ Logičke funkcije

- `if()` - Izvršava jednu vrijednost ako je uvjet istinit, drugu ako je lažan.
      - Primjer: `if(score > 50, 'Pass', 'Fail')`

- `equals()` - Provjerava jesu li dvije vrijednosti iste.

- `and()`, `or()`, `not()` - Kombinira više uvjeta.

#### 🪣 Ostale korisne funkcije

- `coalesce()` - Vraća prvu vrijednost koja nije prazna.
      - Korisno za rezervne/zadane vrijednosti.

- `guid()` - Generira jedinstveni ID.
      - Korisno za praćenje ili zapisivanje.

- `length()` - Broji koliko znakova ili stavki ima u nizu ili polju.

## ⭐ Najbolje prakse

Evo nekoliko najboljih praksi za izradu tijekova rada agenata u Copilot Studiju.

1. **Započnite jednostavno i postupno gradite**

    - Započnite s malim, jasnim zadatkom, poput slanja poruke.
    - Dodajte više koraka nakon što testirate osnovne funkcionalnosti automatizacije.

1. **Koristite jasne i opisne nazive akcija**

    - Jasno označite svaki korak kako biste vi i vaš tim razumjeli što on radi.
    - Primjer: umjesto zadanog naziva "Ažuriraj stavku" za akciju SharePoint konektora, preimenujte ga u ono što ažurira, poput "Ažuriraj status uređaja."

1. **Provjerite greške prije objavljivanja**

    - Koristite **provjeru tijeka** kako biste pronašli i ispravili sve probleme.
    - Ne možete objaviti tijekove ako postoje greške, stoga ih pokušajte riješiti čim se pojave.

1. **Temeljito testirajte svoj tijek**

    - Samo zato što se tijek sprema i objavljuje, ne znači da radi kako se očekuje.
    - Koristite značajku _Test_ za ručno ili automatsko pokretanje tijeka i provjeru rezultata.

1. **Koristite povijest verzija**

    - Često spremite svoj tijek kako biste se mogli vratiti na ranije verzije ako je potrebno.
    - Možete pregledati i vratiti prethodne verzije pomoću panela _Povijest verzija_.

1. **Pametno koristite parametre i izraze**

    - Prilikom konfiguriranja akcija koristite parametre kako biste učinili tijek dinamičnim.
    - Možete unositi vrijednosti ručno ili koristiti izraze za njihovo izračunavanje, ili ih kombinirati s vrijednostima iz prethodnih akcija pomoću alata za odabir _dinamičkog sadržaja_.

1. **Izbrišite neiskorištene akcije**

    - Ako dodate akciju i kasnije odlučite da vam nije potrebna, uklonite je kako biste tijek održali preglednim.

## 🧪 Laboratorij 09 - Dodavanje tijeka rada agenta za automatizaciju i poboljšanje funkcionalnosti teme

Sada ćemo naučiti kako poboljšati našu temu pomoću prilagodljivih kartica i korištenjem naprednih funkcionalnosti tema i čvorova.

- [9.1 Kreirajte tijek rada agenta](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.2 Dodajte tijek rada agenta u temu](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.3 Ažurirajte temu Zahtjev za uređajem s nekoliko čvorova za bolje korisničko iskustvo](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.4 Testirajte agenta koristeći nekoliko scenarija](../../../../../docs/recruit/09-add-an-agent-flow)

### ✨ Primjer upotrebe

**Kao** voditelj zaposlenika

**Želim** primati zahtjeve za uređajima

**Kako bih** mogao pregledati uređaje koje zaposlenik traži.

Krenimo!

### Preduvjeti

1. **SharePoint lista**

    Koristit ćemo **Devices** SharePoint listu iz [Lekcije 00 - Postavljanje tečaja - Korak 3: Kreirajte novu SharePoint stranicu](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Ako niste postavili **Devices** SharePoint listu, vratite se na [Lekciju 00 - Postavljanje tečaja - Korak 3: Kreirajte novu SharePoint stranicu](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. **Contoso Helpdesk Agent**

    Koristit ćemo istog agenta kreiranog ranije u [Lekciji 06 - Kreirajte prilagođenog agenta koristeći prirodni jezik s Copilotom i povezivanjem s vašim podacima](../06-create-agent-from-conversation/README.md).

### 9.1 Kreirajte tijek rada agenta

U ovoj vježbi kreirat ćemo tijek rada agenta koji dohvaća stavku iz SharePointa za odabrani uređaj i šalje e-mail menadžeru s detaljima o uređaju.

1. U temi **Zahtjev za uređajem**, pomaknite se dolje do čvora **Pitaj s prilagodljivom karticom** i dodajte novi čvor. Odaberite **Dodaj alat** i na kartici **Osnovni alati** u izborniku koji se otvara odaberite **Novi tijek rada agenta**.

    ![Dodaj novi tijek rada agenta](../../../../../translated_images/9.1_01_AddNewAgentFlow.2b9078604a054d1f022f9c73adaf10fe430e81875ec8717a7f70ef7b05f11c15.hr.png)

1. Učitava se **Dizajner tijekova rada agenta** s okidačem i akcijom.

    - **Okidač** - Kada agent pozove tijek rada
        - Ovo će pokrenuti tijek rada iz agenta Copilot Studija.

    - **Akcija** - Odgovor agentu
        - Ovo šalje odgovor koji može sadržavati izlazne vrijednosti natrag agentu Copilot Studija.

    Odaberite okidač.

    ![Odaberite okidač](../../../../../translated_images/9.1_02_SelectTrigger.92dc20442add764c8aa4b7f737f28416a3223e4471562462ed6dcba2dc7c7936.hr.png)

1. Zatim ćemo dodati nekoliko ulaznih parametara za tijek rada agenta.

    - `DeviceSharePointId` - ovo će pohraniti vrijednost, ID, stavke iz SharePointa. Ova ID vrijednost je izlaz iz čvora Pitaj s prilagodljivom karticom gdje je korisnik odabrao uređaj.

    - `User` - ovo će biti ime korisnika koje dolazi iz sistemske varijable agenta.

    - `AdditionalComments` - ovo će biti komentar koji je korisnik unio, a koji je izlaz iz čvora Pitaj s prilagodljivom karticom.

    Prvo ćemo dodati `DeviceSharePointId` kao ulaz za naš okidač. Odaberite **+ Dodaj ulaz**.

    ![Dodaj ulaz](../../../../../translated_images/9.1_03_AddInput.fd1e0a99ecb5e20f3a518cb23fc0d22c6db1435c5ffb2e183fce3b8a056287bb.hr.png)

1. Za vrstu korisničkog unosa odaberite **Tekst**.

    ![Odaberite Tekst](../../../../../translated_images/9.1_04_SelectText.47ca776822ec5a6c1339c012d51e0eb6eac6bf8315d4ac6f25498b10ada16df9.hr.png)

1. Za naziv ulaza unesite sljedeće.

    ```text
    DeviceSharePointId
    ```

    ![Ulaz DeviceSharePointId](../../../../../translated_images/9.1_05_DeviceSharePointIdInput.caf77f8eb60a1b8649ea8b0abf05dfce9fa4bef9d9c465cd8906395e5b44842e.hr.png)

1. Sada ćemo dodati drugi ulaz, `User`. Ponovite iste korake, odaberite **+ Dodaj ulaz** i odaberite **Tekst**.

    ![Dodaj ulaz](../../../../../translated_images/9.1_06_AddInput.3ca4bff9991b6e8a331bd909ff58038387696ce7b6ee7a932a88316aff41bc57.hr.png)

1. Za naziv ulaza unesite sljedeće.

    ```text
    User
    ```

    ![Ulaz User](../../../../../translated_images/9.1_07_UserInput.16b2405f2d5744ea14a6a67b69539ba24719aaf642ddfc2b281e784d74d8c1ea.hr.png)

1. Sada ćemo dodati treći ulaz, `AdditionalComments`. Ponovite iste korake, odaberite **+ Dodaj ulaz** i odaberite **Tekst**.

    ![Dodaj ulaz](../../../../../translated_images/9.1_08_AddInput.4685bb77618e6d9cfca7a42a0945d10f59825b1ca42de372dcf07c9170451680.hr.png)

1. Za naziv ulaza unesite sljedeće.

    ```text
    AdditionalComments
    ```

    ![Ulaz AdditionalComments](../../../../../translated_images/9.1_09_AdditionalComments.a4587b59b85450ca0566615c9473132dd6447e6c7513e4926942655aa0e80195.hr.png)

1. Za ulaz `AdditionalComments`, ažurirat ćemo ga kako bi bio opcionalan. Odaberite **ikonu s tri točke (...)** i odaberite **Učinite polje opcionalnim**.

    ![Učinite polje opcionalnim](../../../../../translated_images/9.1_10_Optional.753bd03817c2eb37bb44a7bfd7d29314aa7109cde02e3f619c01c42bc9170b71.hr.png)

1. Odlično! Okidač je sada konfiguriran, nastavimo dalje. Odaberite **plus + ikonu** ispod okidača kako biste umetnuli novu akciju.

    ![Dodaj akciju](../../../../../translated_images/9.1_11_AddAction.86c14acd1ce22e99b7244e0001f0039362ff6ac3efafe03956788aaa31e705af.hr.png)

1. Pojavit će se **Akcijski panel** gdje možete vidjeti akcije iz više od 1400 ugrađenih konektora za Microsoft i usluge trećih strana. U **polje za pretraživanje** unesite sljedeće,

    ```text
    Get item
    ```

    Popis akcija prikazat će se u rezultatima pretraživanja. Odaberite akciju **Dohvati stavku** iz **SharePoint konektora**.

    ![Akcija Dohvati stavku](../../../../../translated_images/9.1_12_AddGetItemAction.434cdcb822e1f72993fc4a0c0ad753e1220456f9dab8fc307d42f5711071d45b.hr.png)

1. Sada možemo početi konfigurirati akciju **Dohvati stavku**.

    Odaberite **Ikonu s tri točke (...)** u akciji **Dohvati stavku**.

    ![Odaberite ikonu s tri točke](../../../../../translated_images/9.1_13_SelectEllipsis.88bf304067f3103825f183f8962634af831460541290533e5670f4c014a97c46.hr.png)

1. Odaberite **Preimenuj**.

    ![Odaberite Preimenuj](../../../../../translated_images/9.1_14_SelectRename.74d99c883418b7dbf58758304976cac1d0f2afd30e4cd1992830f00775a46b18.hr.png)

1. Preimenujte akciju u,

    ```text
    Get Device
    ```

    ![Preimenujte akciju](../../../../../translated_images/9.1_15_RenameAction.ff64b79f6e6603ae89f272f91d84ff4432c04ba103c401a2808a767e3ceb5617.hr.png)

1. U polju **Adresa stranice**, odaberite **Adresu stranice** Contoso IT SharePoint stranice kreirane u [Lekciji 00 - Postavljanje tečaja - Korak 3: Kreirajte novu SharePoint stranicu](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    U polju **Naziv liste**, odaberite **Devices** SharePoint listu.

    ![Unos parametara](../../../../../translated_images/9.1_16_SharePointSiteAndListParameters.af6e0b112eb4bfb210f9259da02b459097a06307afa6ca269cb33aa9ecc1c1e4.hr.png)

1. U polju **Id**, odaberite **ikonu munje** ili **fx ikonu** s desne strane.

    ![Alat za odabir dinamičkog sadržaja](../../../../../translated_images/9.1_17_InsertExpressionIcon.6e250bb84e7b8884de7b2052005f7ff3cd95f2c28671d2da7965001b3f621902.hr.png)

1. U kartici **Dinamički sadržaj** izbornika koji se otvara, unesite sljedeće,

    ```text
    sharepoint
    ```

    Rezultati pretraživanja prikazat će ulazne parametre koji odgovaraju pretraženoj vrijednosti. Odaberite parametar **DeviceSharePointId** iz okidača.

    Zatim odaberite **Dodaj** kako biste dodali ulaz dinamičkog sadržaja u parametar **Id** akcije.

    ![Odaberite ulaz DeviceSharePointId](../../../../../translated_images/9.1_18_DeviceSharePointId.b9be8e7c3c6b0ab710a8f662e62a0ec0133a530f6877b6cea3c48acc8022fec5.hr.png)

1. Dinamički ulaz iz okidača sada je referenciran u parametru **Id** akcije. Sljedeće ćemo ažurirati jedan od naprednih parametara. Odaberite **Prikaži sve** kako biste vidjeli napredne parametre.

    ![Pregled naprednih parametara](../../../../../translated_images/9.1_19_AdvancedParameters.4bb8e0c11e7864625ad6c30ab1b9021d367cd77374c56985df7b3d43845a1883.hr.png)

1. Prikazat će se parametar **Ograniči stupce prema prikazu**, koji je prema zadanim postavkama postavljen na **Koristi sve stupce (Ne ograničavaj)**. Ažurirat ćemo ovu vrijednost na prikaz kako bismo ograničili stupce koji se vraćaju u odgovoru akcije. Odaberite parametar **Ograniči stupce prema prikazu** kako biste vidjeli popis prikaza.

    ![Odaberite parametar](../../../../../translated_images/9.1_20_LimitColumnsByView.4d30f532f1e1033323d39df5c9b8e803788ea785ed58de2efca2faa5df4b26fc.hr.png)

1. Odaberite prikaz **Svi stavci**.

    ![Odaberite prikaz Svi stavci](../../../../../translated_images/9.1_21_SelectView.d180e83d5e62f5fb6994a7071d5e6ce8f88143d8cc833cb55b208c6fee41bc02.hr.png)

1. Odaberite **plus + ikonu** ispod akcije _Dohvati uređaj_ kako biste umetnuli novu akciju.

    ![Dodaj novu akciju](../../../../../translated_images/9.1_22_AddAnAction.904b79142347fe927168036ade55d842fa088deef53710944272c681421e0e84.hr.png)

1. U polje za pretraživanje unesite sljedeće,

    ```text
    send an email
    ```

    Popis akcija prikazat će se u rezultatima pretraživanja. Odaberite akciju **Pošalji e-mail (V2)** iz **Office 365 Outlook konektora**.

    ![Akcija Pošalji e-mail](../../../../../translated_images/9.1_23_SendAnEmail.f1019365131658b0e71b5b58b57d7d8b3f3a0c670ddb3cca0838bf0b4f8cd354.hr.png)

1. Zatim trebamo stvoriti vezu za akciju konektora. Odaberite **Prijavi se**.

    ![Stvori vezu](../../../../../translated_images/9.1_24_CreateConnection.9e968ad4de9d13d81e95779c4fa60809fd40de5f65dbd014f1dc39663c935806.hr.png)

1. Odaberite svoj prijavljeni korisnički račun.

    ![Odaberite korisnički račun](../../../../../translated_images/9.1_25_SelectUserAccount.f3c96ac1a377c4b42a6301ba38c21469eb7bd3f48633f04200f1610902f8bdbe.hr.png)

1. Odaberite **Dopusti pristup**. Veza je sada stvorena.

    ![Odaberite dopusti pristup](../../../../../translated_images/9.1_26_AllowAccess.1abcaea31b9846279cafafd7160baea6bec60cdfac8224df7082ceee3ef22a26.hr.png)

1. Preimenujte akciju u sljedeće,

    ```text
    Send an email to manager
    ```

    Zatim definirajmo ulazne parametre naše akcije.

    Za ulazni parametar **Za**, odaberite sebe. Obično bi to bio vaš menadžer ili bismo koristili drugu akciju koja povlači vašeg menadžera na temelju vašeg Entra ID profila, ali za potrebe ove lekcije odaberite sebe.

    Za ulazni parametar **Predmet**, unesite sljedeće,

    ```text
    Request type: new device
    ```

    Za ulazni parametar **Tijelo**, unesite sljedeće,

    ```text
    Hi,

    New device requested from

    Manufacturer:
    Model:
    Link to item in SharePoint
    Additional comments from:

    This is an automated email from Contoso Helpdesk Copilot
    ```

    ![Preimenujte akciju i konfigurirajte ulaze](../../../../../translated_images/9.1_27_RenameAndConfigureParameters.c3d29a3481fb5c0240cca85db4119387e6b750546ed12e2af4a9ac62d7454f89.hr.png)

1. Zatim ćemo ažurirati ulazni parametar **Tijelo** referencama na dinamički sadržaj iz **okidača** ili akcije **Dohvati stavku**. Unesite razmak nakon druge linije jer ćemo umetnuti ime korisnika iz ulaza okidača, **User**.

    Odaberite **ikonu munje** ili **fx ikonu** s desne strane.

    ![Dodajte ulaz User kao dinamički sadržaj](../../../../../translated_images/9.1_28_AddUserInput.f38d3df648faef75f1985bdcc23db16e197ccb1ddc015210c43bbb2569fcf654.hr.png)

1. U kartici **Dinamički sadržaj** izbornika koji se otvara, odaberite ulaz **User** iz okidača.

    Odaberite **Dodaj** kako biste dodali dinamički ulaz **User** u parametar **Tijelo** akcije.

    ![Odaberite ulaz User](../../../../../translated_images/9.1_29_SelectUserInput.4efc79f52d74fa7ae13132ea13f7d51b3f4aab6413afc41a8354c5e59852b9fc.hr.png)
1. Dinamički unos sadržaja iz okidača sada je referenciran u parametru **Body** akcije. Isto ćemo ponoviti za preostale redove u tijelu poruke e-pošte.

    ![Korisnički unos dodan](../../../../../translated_images/9.1_30_UserInputAdded.905ec0489e4f1bbe7cc071826050834aa1e5acf53f8a65ad59532ea13b81c607.hr.png)

1. Kliknite u prostor pored `Proizvođač:`. Odaberite **ikonu munje** ili **fx ikonu** s desne strane.

    U kartici **Dinamički sadržaj** u prozoru koji se otvara, unesite sljedeće u polje za pretraživanje,

    ```text
    manufacturer
    ```

    Odaberite unos **Vrijednost proizvođača** iz okidača i kliknite **Dodaj**.

    ![Dodavanje unosa vrijednosti proizvođača kao dinamičkog sadržaja](../../../../../translated_images/9.1_31_ManufacturerValueAdded.db2cf35a35a20590d80d7f0191d771a045bf55e40ce98982d0e099588e260712.hr.png)

1. Kliknite u prostor pored `Model:`. Odaberite **ikonu munje** ili **fx ikonu** s desne strane.

    U kartici **Dinamički sadržaj** u prozoru koji se otvara, unesite sljedeće u polje za pretraživanje,

    ```text
    model
    ```

    Odaberite unos **Model** iz akcije **Dohvati stavku** i kliknite **Dodaj**.

    ![Dodavanje unosa modela kao dinamičkog sadržaja](../../../../../translated_images/9.1_32_ModelAdded.ff9d858648ddb85fe70eaaafa6e23d0560500e7327ccb29ee56ecac0d8d36cab.hr.png)

1. Za tekst `Poveznica na stavku u SharePointu`, ažurirat ćemo ga kako bi bio hiperveza u tijelu poruke e-pošte. Kliknite na početak linije i odaberite **ikonu munje** ili **fx ikonu** s desne strane.

    ![Dodavanje dinamičkog sadržaja](../../../../../translated_images/9.1_33_AddDynamicContent.c662d682377af82adc52de18e05baf9b6aa5a972882dcf6274f3979f14641627.hr.png)

1. Kliknite nakon HTML oznake sidra i odaberite **ikonu munje** ili **fx ikonu** s desne strane.

    U kartici **Dinamički sadržaj** u prozoru koji se otvara, unesite sljedeće u polje za pretraživanje,

    ```text
    link to item
    ```

    Odaberite unos **Poveznica na stavku** iz akcije **Dohvati stavku** i kliknite **Dodaj**.

    ![Dodavanje poveznice na stavku kao dinamičkog sadržaja](../../../../../translated_images/9.1_34_AddLinkToItem.6827bd3bad484f7382d060435bb0ef45e9bb1c3ad4774529559bb4c5f9bbca8c.hr.png)

1. Moramo se prebaciti na HTML uređivač odabirom ikone **&lt;/&gt;**.

    ![Dodavanje korisničkog unosa](../../../../../translated_images/9.1_35_ToggleCodeView.ae3a9caf213f2c6366487e10092ad1fad3494f110936219258d842c23e7f46d9.hr.png)

1. HTML uređivač je sada omogućen. Kliknite prije teksta `Poveznica na stavku u SharePointu`, dodajte HTML oznaku sidra kako biste stvorili hipervezu. Kopirajte i zalijepite sljedeće.

    ```text
    <a href="
    ```

    ![HTML oznaka](../../../../../translated_images/9.1_36_AddHTMLTag.146220ae5c33eaf9915c393c37d62b9d4b258413e9f4dc42a1ab005437669443.hr.png)

1. Dinamički unos sadržaja **Poveznica na stavku** sada je referenciran u parametru **Body**. Kliknite nakon unosa **Poveznica na stavku**, kopirajte i zalijepite sljedeće.

    ```text
    ">
    ```

    ![HTML oznaka](../../../../../translated_images/9.1_37_AddHTMLTag.48f73b302f6a84bb6a51e0666fd30baf1f8d9d906947d44dc4095ededed18a2d.hr.png)

1. Kliknite nakon teksta `Poveznica na stavku u SharePointu`, zatvorite HTML oznaku sidra. Kopirajte i zalijepite sljedeće.

    ```text
    </a>
    ```

    ![HTML oznaka](../../../../../translated_images/9.1_38_AddHTMLTag.47d2f0521e6aba9d609bfe65d86ebae5786e4ad5465fefb7ae0370db6e924c96.hr.png)

1. Odaberite ikonu **&lt;/&gt;** za prebacivanje na prikaz koda.

    ![Onemogućavanje prikaza koda](../../../../../translated_images/9.1_39_ToggleCodeView.88606eb37d702a686904b2dd8943fcf144cec462b37ee781e8ee0415e62bd951.hr.png)

1. Zatim ponovno odaberite ikonu **&lt;/&gt;** za povratak na prikaz koda.

    ![Povratak na prikaz koda](../../../../../translated_images/9.1_40_ToggleCodeViewAgain.32da9b9804adbbfaf8d85bdaa6fa51d2ae5fc1fbb97f75084813972c66d0c4d9.hr.png)

1. Primijetite kako postoji nekoliko dodatnih znakova `&lt;br&gt;`. Obrišite te znakove.

    ![Brisanje znakova](../../../../../translated_images/9.1_41_DeleteCharacters.f1ef3830b186c2cd9974ea05e336c83c0706d72ab1010d06283716dc4e982875.hr.png)

1. Sada smo završili s dodavanjem hiperveze u tijelo poruke e-pošte 😎 Odaberite ikonu **&lt;/&gt;** za prebacivanje na prikaz koda.

    ![HTML oznaka očišćena](../../../../../translated_images/9.1_42_HTMLTagTidiedUp.1b27fa2c4dc65c3f1a7151abcf6e388f64cb83745b10cd22769c1f9af3421fc6.hr.png)

1. Kliknite nakon teksta `Dodatni komentari od` prije znaka dvotočke i odaberite **ikonu munje** ili **fx ikonu** s desne strane.

    ![Dodavanje korisničkog parametra](../../../../../translated_images/9.1_43_AddUserInput.6f0d26739c1b9039383aa37cc46fa1149a269bd4268fb54b897d144afc49c515.hr.png)

1. U kartici **Dinamički sadržaj** u prozoru koji se otvara, unesite sljedeće u polje za pretraživanje,

    ```text
    user
    ```

    Odaberite parametar **Korisnik** iz okidača i kliknite **Dodaj**.

    ![Dodavanje korisničkog parametra kao dinamičkog sadržaja](../../../../../translated_images/9.1_44_AddUserDynamicContent.bb7c76e92650001207712b3447d3275d584f3ebf739034369869c3facf38eacf.hr.png)

1. Sada ćemo umetnuti izraz koji će prikazati vrijednost Dodatnih komentara ako ih je korisnik unio u čvor **Postavi adaptivnu karticu**, inače će prikazati "Nema" ako korisnik nije unio nikakve komentare.

    Kliknite nakon dvotočke i odaberite **ikonu munje** ili **fx ikonu** s desne strane.

    ![Dodavanje izraza](../../../../../translated_images/9.1_45_AddExpression.c4c92dc4a56fab75c78ec2c5087682521e562264c1710c8dfaa24134adc3a112.hr.png)

1. U kartici **Funkcija** u prozoru koji se otvara i u polju za unos izraza iznad, unesite sljedeće,

    ```text
    if(empty())
    ```

    Ovaj izraz koristi funkciju `if` za if-else uvjet.

    Sljedeća funkcija koja se koristi je `empty`, koja provjerava postoji li vrijednost ili ne u string parametru. String parametar koji treba referencirati je vrijednost ulaznog parametra `DodatniKomentari` iz okidača.

    ![Ako prazno](../../../../../translated_images/9.1_46_IfEmptyFunctions.95d21ad01f6f7c290cb8d5a57ccbca9c9532df7ce57f800554dea541d503ddc6.hr.png)

1. Zatim kliknite **unutar zagrada** nakon funkcije `empty`. Umetnut ćemo ulazni parametar `DodatniKomentari` iz okidača.

    Odaberite karticu **Dinamički sadržaj**. Unesite sljedeće u polje za pretraživanje,

    ```text
    Additional
    ```

    Pomaknite se dolje u prozoru i odaberite ulaz **DodatniKomentari** iz okidača. Parametar će sada biti dodan kao string parametar u izrazu.

    ![Dodavanje DodatnihKomentara kao dinamičkog sadržaja](../../../../../translated_images/9.1_47_AdditionalCommentsDynamicContent.f9632f09779888c18a58df8e97ef677ed885b0eaa88c252b13b22c0e4c67495b.hr.png)

1. Zatim ćemo definirati logiku **_true_**, gdje ako je string parametar `DodatniKomentari` prazan, želimo prikazati string (tekst) `Nema`.

    Nakon zagrade koja zatvara string parametar, unesite sljedeće,

    ```text
    , 'None',
    ```

    ![Logika true](../../../../../translated_images/9.1_48_None.31978299f29e07ef3257eedd5dcee09c8675f8b3f61aea8102900118e0b6ca70.hr.png)

1. Na kraju ćemo definirati logiku **_false_**, gdje ako string parametar `DodatniKomentari` nije prazan, želimo prikazati vrijednost ulaznog parametra **DodatniKomentari** iz našeg okidača.

    > Podsjetnik: ova vrijednost dolazi iz polja Dodatni komentari adaptivne kartice u čvoru **Postavi adaptivnu karticu** u temi **Zahtjev za uređajem**.

    Nakon zareza iza naše logike **_true_**, odaberite karticu **Dinamički sadržaj**. Unesite sljedeće u polje za pretraživanje,

    ```text
    Additional
    ```

    Pomaknite se dolje u prozoru i odaberite ulaz **DodatniKomentari** iz okidača. Parametar će sada biti dodan kao string parametar u izrazu.

    Sada ga dodajte u naš parametar **Body** odabirom **Dodaj**.

    ![Logika false](../../../../../translated_images/9.1_49_AdditionalCommentsDynamicContent.d42c7fc29f65d901bb26dcbc13408c387633ea185cdd79c35d6439231b7363d5.hr.png)

1. Odlično, naš izraz je dovršen! Izraz je sada dodan u parametar **Body**. Na kraju, formatirajte zadnju liniju u kurzivu.

    ![Kurziv](../../../../../translated_images/9.1_50_Italics.a0c01aa33ef4e83167e1fbc21c1d833f95addd60c8f531411cf9c58a96a31b02.hr.png)

1. Sada ćemo ažurirati akciju **Odgovori agentu** kako bismo poslali vrijednost parametra **Vrijednost modela** iz akcije **Dohvati stavku** natrag agentu.

    Držite lijevu tipku miša i pomičite se prema gore unutar dizajnera kako biste vidjeli akciju **Odgovori agentu**.

    Odaberite akciju **Odgovori agentu** i odaberite izlaz **Tekst** kao tip.

    ![Odabir izlaza Tekst](../../../../../translated_images/9.1_51_RespondToTheAgentAction.4c682a440e19a0fcd6d6f51ef9cdbfe76f482a39d635b8905d9b0cbbf33d945f.hr.png)

1. Unesite sljedeće kao naziv izlaza.

    ```text
    ModelValue
    ```

    ![Izlaz VrijednostModela](../../../../../translated_images/9.1_52_ModelValueInput.20609429eb323281051607b090319adc5315c0245c7d61158eb119714fe4318f.hr.png)

1. Odaberite polje za vrijednost i odaberite **ikonu munje** ili **fx ikonu** s desne strane.

    ![Umetanje izraza](../../../../../translated_images/9.1_53_InsertDynamicContent.108ba565696f9f52d742323e0f4c46c308f322ac4bd67802e3196430155c7443.hr.png)

1. U kartici **Dinamički sadržaj** u prozoru koji se otvara, unesite sljedeće u polje za pretraživanje,

    ```text
    model
    ```

    Odaberite parametar **Model** iz akcije **Dohvati stavku** i kliknite **Dodaj**.

    ![Dodavanje parametra Model kao dinamičkog sadržaja](../../../../../translated_images/9.1_54_ModelParameter.f231fd0ec089ac6b9ac1b7fd2e6a60a35b08484ed10b0098cff6b3ce0c7760cb.hr.png)

1. Parametar **Model** sada je vrijednost tekstualnog izlaza. Odaberite **Spremi nacrt** kako biste spremili tijek rada agenta.

    Sada smo završili naš tijek rada agenta 👏🏻

    ![Odabir spremanja nacrta](../../../../../translated_images/9.1_55_SaveDraftAgentFlow.5ab97895a901458362881fc9ee576762bdb0883b37a6cbd7a631ddc2750705af.hr.png)

1. Napravimo još jedno ažuriranje našeg tijeka rada agenta prije objavljivanja. Odaberite karticu **Pregled** i kliknite **Uredi**.

    ![Odabir Uredi](../../../../../translated_images/9.1_56_EditAgentFlowDetails.023e8149284b9ae79dd3d95f574ff90bbcc1cc4a9fff4be56664ccbe0698f310.hr.png)

1. Za **Naziv tijeka**, kopirajte i zalijepite sljedeće.

    ```text
    Send device request email
    ```

    Za **Opis**, odaberite **ikonu osvježavanja** kako biste koristili AI za automatsko generiranje opisa na temelju okidača i akcija u tijeku rada agenta.

    Odaberite **Spremi** kako biste spremili ažurirani naziv i opis tijeka rada agenta.

    ![Preimenovanje, dodavanje opisa i spremanje detalja](../../../../../translated_images/9.1_57_RenameAndDescription.57a190396550bf998d62c49ca359b66211ae50042ac5f8739b32f8b9bc292607.hr.png)

1. Odaberite karticu **Dizajner** i kliknite **Objavi** kako biste objavili tijek rada agenta i dodali ga kao čvor u temu **Zahtjev za uređajem**.

    ![Objavi](../../../../../translated_images/9.1_58_Publish.8f43271718c662deee7afea6fb283f64005b277b3a62086e6d91cc0c3ac4f79c.hr.png)

1. Ubrzo će se pojaviti poruka potvrde koja potvrđuje da je tijek rada agenta objavljen.

    ![Poruka potvrde](../../../../../translated_images/9.1_59_Confirmation.d406bde76c31b27f794d5742c992b8c84283f46b2e54524f1e500d0688a33716.hr.png)

### 9.2 Dodavanje tijeka rada agenta u temu

Sada ćemo dodati tijek rada agenta u temu **Zahtjev za uređajem**.

1. Odaberite **Agenti** u izborniku s lijeve strane i odaberite **Contoso Helpdesk Agent**.

    ![Odabir Agenti](../../../../../translated_images/9.2_01_SelectAgent.b8a6fd3a8970d6b0c8e78bf0a5411257206612d53acdf9b44f78b2c9c2fe91fc.hr.png)

1. Odaberite karticu **Teme**.

    ![Odabir kartice Teme](../../../../../translated_images/9.2_02_SelectTopics.3e8618aba5f4a1ddf3dee726b6da9a66ed89d04a2e8ca36b52112a6675c2885c.hr.png)

1. Odaberite temu **Zahtjev za uređajem**.

    ![Odabir teme Zahtjev za uređajem](../../../../../translated_images/9.2_03_SelectRequestDevice.df10472702258708b3d069e718e695b9fcabc61d42901d524dc302a03b3fa4a9.hr.png)

1. Pomaknite se dolje do čvora **Postavi adaptivnu karticu** i dodajte novi čvor.

    Odaberite **Dodaj alat** i u kartici **Osnovni alati** prozora koji se otvara, odaberite tijek rada agenta **Pošalji e-poštu za zahtjev uređaja** koji smo nedavno kreirali i objavili.

    ![Odabir tijeka rada agenta](../../../../../translated_images/9.2_04_SelectAgentFlow.15deca87db95fff1c9d904855d237d22a72c260adf3343d9e78695f07c42a8e0.hr.png)

1. Za ulazne parametre našeg tijeka rada agenta, trebamo odabrati izlazne varijable iz čvora **Postavi adaptivnu karticu**.

    Odaberite **ikonu s tri točke (...)** za ulaz **DeviceSharePointId**.

    ![Odabir varijable](../../../../../translated_images/9.2_05_SelectVariable.8fe53cbc0f950f732b9e9002b21d8762ddfe74fb601d61c2a5119e32383450a2.hr.png)

1. Odaberite varijablu **deviceSelectionId**, koja je jedan od izlaza definiranih u čvoru **Postavi adaptivnu karticu**.

    ![Odabir varijable deviceSelectionId](../../../../../translated_images/9.2_06_SelectdeviceSelectionIdVariable.67c0091e0de9442d3cffbfe3b2cace8d76be37ea67815ddfc99af03ae4b37391.hr.png)

1. Zatim odaberite **ikonu s tri točke (...)** za ulaz **Korisnik**.

    ![Odabir varijable](../../../../../translated_images/9.2_07_SelectVariable.bf851128bec5e0255c6cf361a837ce9701d0afac84ed3d5b89665d111a098386.hr.png)

1. Odaberite karticu **Sustav** u prozoru varijabli i odaberite **User.DisplayName**. Ova varijabla pohranjuje prikazno ime internog korisnika koji komunicira s agentom.

    ![Odabir sustavne varijable User.DisplayName](../../../../../translated_images/9.2_08_SelectUser.DisplayNameVariable.926a2a7560402fbd7b224e2bf0ff11df9e5612803b7ce51e36f58201a09bbfd7.hr.png)

1. Zatim odaberite **ikonu veće od** za **Napredni ulazi** kako biste proširili i vidjeli ulaz **DodatniKomentari**.

    ![Proširivanje naprednih ulaza](../../../../../translated_images/9.2_09_ExpandAdvancedInputs.bded22f83fe4eb21237daa254725e12a81ea75be34bcb0e8ab322037a4e6f418.hr.png)

1. Odaberite **ikonu s tri točke (...)** za ulaz DodatniKomentari.

    ![Odabir varijable](../../../../../translated_images/9.2_10_SelectVariable.86286cc06323e65fb3874b9fd0ea62d140b9e9b9a2b5116d667192a6dca3815f.hr.png)

1. Odaberite karticu **Formula** i ikonu za proširivanje u prozoru varijabli jer ćemo koristiti Power Fx izraz.

    ![Kartica Formula](../../../../../translated_images/9.2_11_SelectFormulaAndExpandIcon.3fcd07bfccc4f0779a5d26313b571e60be792da7fd28e937b3e888f8aaeda7e0.hr.png)

1. Slično izrazu u tijeku rada agenta koji provodi uvjetnu provjeru koristeći funkciju _if_, ali ovaj put
    - koristeći Power Fx funkcije,
    - i umećući ili praznu vrijednost, ili vrijednost varijable izlaza `commentsId` iz čvora **Postavi adaptivnu karticu**.

    Unesite sljedeće funkcije u Power Fx polje,

    ```text
    If(IsBlank())
    ```

Ovaj izraz koristi funkciju `If` za if-else uvjet.

Sljedeća funkcija koja se koristi je `IsBlank`, koja provjerava postoji li vrijednost ili ne u string parametru. String parametar koji se referencira je izlazna varijabla `commentsId` iz čvora **Ask with adaptive card**.

![Funkcije If i IsBlank](../../../../../translated_images/9.2_12_IfIsBlank.07f7516c7e1f7579239a8b3833d64a14eb88dc245cae714b3e07d6298e907d51.hr.png)

1. Zatim kliknite **unutar zagrada** nakon funkcije `IsBlank`. Ubacit ćemo izlaznu varijablu `commentsId` iz čvora **Ask with adaptive card**.

    Unesite sljedeće unutar zagrada,

    ```text
    Topic.commentsId
    ```

    I dodajte zarez nakon zagrade.

    ![Referenciranje izlazne varijable commentsId](../../../../../translated_images/9.2_13_Topic.commentsId.1a04dc190dac334ebf6c4dbc1b6df1aad2e4bbdeeb3ef960871e93614381f079.hr.png)

1. Sada ćemo definirati logiku

    - kada je **_true_** - ako je string parametar `Topic.commentsId` prazan, želimo unijeti praznu vrijednost.
    - kada je **_false_** - ako string parametar `Topic.commentsId` nije prazan, unesite vrijednost varijable commentsId.

    Nakon zagrade koja zatvara string parametar, unesite sljedeće,

    ```text
    "", Topic.commentsId)
    ```

    Power Fx izraz trebao bi izgledati ovako,

    ```text
    If(IsBlank(Topic.commentsId), "", Topic.commentsId)
    ```

    Odlično, naš izraz je gotov! 🙌🏻 Sada odaberite **Insert** kako biste postavili ulazni parametar toka agenta na Power Fx izraz.

    ![Power Fx izraz](../../../../../translated_images/9.2_14_PowerFxExpression.80e76ea59bdb8f131d26edf2657923f4af9000768d44b06c0947115fd218698e.hr.png)

1. **Spremite** temu.

### 9.3 Ažuriranje teme Zahtjev za uređajem s nekoliko čvorova za bolje korisničko iskustvo

Dodati ćemo dva nova čvora:

- **Pošalji poruku** - ovo će djelovati kao poruka potvrde koja referencira odabrani uređaj i potvrđuje da je njihov zahtjev poslan.

- **Upravljanje temom** - za zatvaranje razgovora, preusmjerit ćemo na čvor **Kraj razgovora**.

Krenimo!

1. Odaberite **plus + ikonu** ispod čvora toka agenta i odaberite čvor **Pošalji poruku**.

    ![Dodavanje čvora za slanje poruke](../../../../../translated_images/9.3_01_AddSendAMessageNode.ac4111729a2602f8301ecffbcb263d692ecb43478aa9da63cae0dd58160f56c8.hr.png)

1. Unesite sljedeće u polje za poruku,

    ```text
    Thanks
    ```

    Zatim odaberite **Umetni varijablu** jer ćemo referencirati korisničko ime.

    ![Umetni varijablu](../../../../../translated_images/9.3_02_InsertVariable.c5c9ebce61d1f442413d05f4437f74ee1d9c3a8c2ab696244937c56b5171f310.hr.png)

1. Odaberite karticu **Sustav** i pretražite `User` u polju za pretraživanje. Odaberite varijablu **User.DisplayName**.

    ![Odabir sistemske varijable](../../../../../translated_images/9.3_03_SelectSystemVariable.47cfac2f3a727dbaf32ae960cbafe43ce9ed00f73edf01ac6d48e5b2b167e5fc.hr.png)

1. Unesite sljedeće u polje za poruku,

    ```text
    . Your selected device,
    ```

    Zatim odaberite **Umetni varijablu**, a ovaj put na kartici **Prilagođeno**, odaberite varijablu **ModelValue**.

    Zatim unesite sljedeće kako biste dovršili poruku.

    ```text
    , has been submitted and will be reviewed by your manager.
    ```

    Poruka bi trebala izgledati ovako.

    ![Pošalji poruku](../../../../../translated_images/9.3_04_SendAMessage.3f6c4b5e53da9c7f9fcf9d0c453a9b65e44e35ea4c1124947fb638d0b682d96d.hr.png)

1. Na kraju, odaberite **plus + ikonu** ispod čvora **Pošalji poruku** i odaberite **Upravljanje temom**, zatim **Idi na drugu temu** i odaberite **Kraj razgovora**.

    ![Upravljanje temom](../../../../../translated_images/9.3_05_EndOfConversation.3c6c96d03b29a4d0904dea09d96c62d6ad450fe60dd8d6b2fe9d31681d6cb147.hr.png)

1. **Spremite** temu.

    ![Spremi](../../../../../translated_images/9.3_06_SaveTopic.8c9201fabce9f41af03d9f1beb9ce321e4ee9880a94edabe58b592bffebda80a.hr.png)

### 9.4 Testiranje agenta kroz nekoliko scenarija

Odlično! 😁 Sada možemo testirati našeg agenta.

#### 9.4.1 Zatražite uređaj i unesite komentar u prilagodljivu karticu

1. **Osvježite** testni panel, odaberite ikonu **karta aktivnosti** i unesite sljedeće kao poruku agentu.

    ```text
    I need a laptop
    ```

    ![Testiranje agenta](../../../../../translated_images/9.4_01_TestAgent_RequestDevice_Yes.e73a5076dcd7179901dc0536624a039e372e405a6aac7ab89a632ce81bacdc2e.hr.png)

1. Agent pokreće **Dostupni uređaji** i odgovara s popisom dostupnih uređaja. Unesite sljedeće kao odgovor na pitanje želite li zatražiti uređaj.

    ```text
    Yes
    ```

    ![Da](../../../../../translated_images/9.4_02_RequestDevice_Yes.25c34743bc168fde33f91743316e7bad87ee0e47150c93e9b82c4662404dcaba.hr.png)

1. Primijetite kako je agent pokrenuo **Zahtjev za uređajem** prema uputama agenta i kako se prilagodljiva kartica sada prikazuje u poruci agenta.

    Odaberite uređaj **Surface Laptop 15** i dodajte sljedeće kao komentar.

    ```text
    I need 16GB of RAM please
    ```

    ![Odaberite uređaj i unesite komentar](../../../../../translated_images/9.4_03_SelectDeviceAndEnterComment.570ea590309bf97edc40c6f7b53dbdc1174365860d8e8a4c32cfb7f1837621c2.hr.png)

1. Pomaknite se prema dolje dok ne vidite gumb **Podnesi zahtjev** i odaberite ga kako biste poslali prilagodljivu karticu agentu.

    ![Podnesi zahtjev](../../../../../translated_images/9.4_04_SubmitRequest.ce3f4f44b90243a18dbfb401548b9b3cefd3ea17d8293a1bc3377323e3449da9.hr.png)

1. Odaberite **Dopusti** kako bi agent koristio vaše vjerodajnice za autentifikaciju veze dviju akcija konektora.

    ![Dopusti](../../../../../translated_images/9.4_05_SelectAllow.f7b5bda068fbaee83dcb1cff03a52c946fb4d879137c55f4e5f9eb3953985e0e.hr.png)

1. Agent će tada prikazati poruku potvrde koja uključuje odabrani model, a zatim će preusmjeriti na temu **Kraj razgovora**. Super!

    ![Zahtjev podnesen](../../../../../translated_images/9.4_06_RequestSubmitted.1d4d2e9afbc222a5ba79a4c254e7b2364d6eafc1a200ad6ac0aa142f9f10642d.hr.png)

1. Odaberite **Da** kako biste provjerili ostatak teme **Kraj razgovora**.

    ![Odaberite Da](../../../../../translated_images/9.4_07_RedirectNode.e7b1390e4eafe8c2c815fc8ce7fdda56617d9fbeccb0d59423ad2899a8e5f897.hr.png)

1. Zatim ocijenite iskustvo odabirom bilo koje zvjezdice na kartici za ocjenjivanje.

    Agent će zatim prijeći na završni čvor **Pitanje** u temi **Kraj razgovora**. Odaberite **Ne**.

    ![Tema Kraj razgovora](../../../../../translated_images/9.4_08_EndOfConversation.b35507f7f561633c0cb3b6c15dc007ae4197a72d58afd8ae616bea439bd6e148.hr.png)

1. Tema će se zatim završiti jer će se završna poruka prikazati u testnom panelu.

    ![Tema Kraj razgovora](../../../../../translated_images/9.4_09_EndOfConversation.438891b82e322b8a2648533200fbcd01c660ab049223b0920cdd0fbfcdeeb888.hr.png)

1. Provjerite svoju pristiglu poštu na e-mail računu kako biste pregledali e-mail koji je agent poslao menadžeru. Možete vidjeti detalje odabranog uređaja i bilješku unesenu u prilagodljivu karticu.

    ![Primljen e-mail](../../../../../translated_images/9.4_10_ReviewEmailMessageWithComment.b0138b0bb9d08aacbd8bbb02fdb633a6796b4131cf8d83212adeabaa1ce04a18.hr.png)

1. Kliknite na hipervezu i preglednik bi trebao učitati SharePoint stavku uređaja. Sjajno!

    ![Kliknite na hipervezu u e-mailu](../../../../../translated_images/9.4_11_SelectLinkInEmail.2179f17165b61ba1e8aee68e8de4c752d64b0780ad86e0fe9054580d9c24e208.hr.png)

#### 9.4.2 Zatražite uređaj i ne unesite komentar u prilagodljivu karticu

Sada ćemo testirati scenarij kada komentar nije unesen.

1. Ponovite iste korake:

    - **Osvježite** testni panel i odaberite ikonu **karta aktivnosti**
    - Unesite poruku, `Trebam laptop`
    - Odgovorite s `Da` na pitanje o zahtjevu za uređajem

    ![Zahtjev za uređajem](../../../../../translated_images/9.4_12_RequestDevice_Yes.1e369b8a52547fade4b84a4e36b399ee0692c6edbaa778ba90fe9c15cae75c5c.hr.png)

1. Ovaj put odaberite uređaj **Surface Laptop 13** i ne unosite komentar.

    ![Odaberite uređaj](../../../../../translated_images/9.4_13_SelectDevice.d9ad15d17de3f06fd948bd529f116f7c05bedf79c016180d8a1dd7e378322b0e.hr.png)

1. **Podnesite** zahtjev odabirom gumba **Podnesi zahtjev**.

    ![Podnesi zahtjev](../../../../../translated_images/9.4_14_SubmitRequest.a783ad8460bfb4485cfd2e97db2c065d9d6bf803279e3bd1569fe3e93548a578.hr.png)

1. Ovaj put e-mail primljen u vašoj pristigloj pošti prikazat će **Nema** kao komentar.

    ![Primljen e-mail](../../../../../translated_images/9.4_15_ReviewEmailMessage.137f35152c9da4b4a02bebec5f0cc9e55cfa25679770ace003aa19482ed0f3eb.hr.png)

#### 9.4.3 Ne zatražite uređaj

Testirajmo završni scenarij u kojem ne zatražimo uređaj, a tema **Zbogom** bi trebala biti pokrenuta prema uputama agenta.

1. Ponovite iste korake:

    - **Osvježite** testni panel i odaberite ikonu **karta aktivnosti**
    - Unesite poruku, `Trebam laptop`
    - Ovaj put odgovorite s `Ne` na pitanje o zahtjevu za uređajem

    ![Testiranje agenta](../../../../../translated_images/9.4_16_TestAgent_RequestDevice_No.85f205968f1d4083f20cc890a707748f8e06c01a19536cd299a13bdde2350de7.hr.png)

1. Agent je pokrenuo temu **Zbogom**, a pitanje definirano u toj temi je postavljeno.

    ![Pokrenuta tema Zbogom](../../../../../translated_images/9.4_17_Goodbye.05ee598a987237e02866647a9699b0efa7ac58d1f448497f956af2ee815cb961.hr.png)

## ✅ Misija završena

Čestitamo! 👏🏻 Naučili ste kako izgraditi tok agenta i dodati ga u postojeću temu **Zahtjev za uređajem**, kao i kako preusmjeriti agenta na drugu temu.

Ovo je kraj **Laboratorija 09 - Dodavanje toka agenta za automatizaciju i poboljšanje mogućnosti teme**, odaberite donju poveznicu za prelazak na sljedeću lekciju. Proširit ćemo slučaj upotrebe iz ovog laboratorija u sljedećoj lekciji.

⏭️ [Prijeđite na lekciju **Dodavanje okidača događaja - Omogućavanje autonomnih mogućnosti agenta**](../10-add-event-triggers/README.md)

## 📚 Taktički resursi

🔗 [Predstavljanje tokova agenta: Transformacija automatizacije s AI-prvim radnim tokovima](https://www.microsoft.com/microsoft-copilot/blog/copilot-studio/introducing-agent-flows-transforming-automation-with-ai-first-workflows/)

🔗 [Pregled tokova agenta](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview?WT.mc_id=power-172621-ebenitez)

🔗 [Korištenje tokova agenta s vašim agentom](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-172621-ebenitez)

🔗 [Popis funkcija u referentnom vodiču](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez)

📺 [Tokovi agenta u Copilot Studiju](https://www.youtube.com/watch?v=VJTKyk3Pr7s)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/09-add-an-agent-flow" alt="Analitika" />

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.