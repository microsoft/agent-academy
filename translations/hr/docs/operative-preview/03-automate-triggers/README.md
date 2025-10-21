<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "75efaf515d5694d4fd549bfd6518901a",
  "translation_date": "2025-10-20T23:15:00+00:00",
  "source_file": "docs/operative-preview/03-automate-triggers/README.md",
  "language_code": "hr"
}
-->
# Misija 03: Dodavanje okidača događaja za autonomno djelovanje

--8<-- "disclaimer.md"

## 🕵️‍♂️ KODNO IME: `OPERACIJA SIGNALNA TOČKA`

> **⏱️ Vremenski okvir operacije:** `~45 minuta`

## 🎯 Kratak opis misije

Dobrodošli nazad, agente. U [Misiji 02](../02-multi-agent/README.md) - naučili ste kako izraditi podagenta za prijem aplikacija i povezanog agenta za pripremu intervjua kako biste proširili mogućnosti vašeg glavnog agenta za zapošljavanje.

Vaš zadatak, ako ga odlučite prihvatiti, je **Operacija Signalna Točka** - dublje istraživanje **okidača događaja** - podizanje vašeg sustava agenata s reaktivnog na **autonomno djelovanje**. Transformirat ćete svoje agente iz onih koji _odgovaraju na pitanja_ u agente koji _predviđaju potrebe_ i _djeluju neovisno_. Kroz okidače događaja i automatizirane tijekove rada, vaš agent za zapošljavanje će otkriti dolazne e-mailove s životopisima, automatski obraditi privitke, pohraniti podatke u Dataverse i obavijestiti vaš HR tim za zapošljavanje putem Microsoft Teams-a - dok se vi fokusirate na zadatke veće vrijednosti.

Dobrodošli u svijet gdje se automatizacija susreće s inteligencijom.

## 🔎 Ciljevi

U ovoj misiji naučit ćete:

1. Kako okidači događaja omogućuju autonomno ponašanje agenta bez interakcije korisnika
1. Razlike između interaktivnih i autonomnih agenata u Copilot Studiju
1. Kako stvoriti okidače događaja koji automatski obrađuju privitke e-mailova i učitavaju datoteke u Dataverse
1. Kako izgraditi tijekove rada agenta koji objavljuju prilagodljive kartice u kanalima Teams-a za obavijesti
1. Kako prenijeti podatke između okidača događaja i tijekova rada agenta za automatizaciju od početka do kraja

## 🤔 Što je okidač događaja?

Ranije u [Recruit](../../recruit/10-add-event-triggers/README.md), naučili smo o okidačima događaja. Napravimo kratki pregled u slučaju da ste to propustili.

**Okidači događaja** omogućuju agentu da _djeluje_ samostalno kada se nešto dogodi u drugom sustavu - bez potrebe za porukom korisnika. Kada se konfigurirani događaj aktivira - poput "novi SharePoint element", "novi e-mail", "Planner zadatak dodijeljen" ili čak vremenski definirana ponavljanja, konektor šalje okidač s podacima vašem agentu. Agent tada slijedi vaše upute kako bi odlučio koje radnje ili teme treba pozvati.

### Ključne karakteristike

- **Autonomna aktivacija:**
      - Za razliku od okidača tema koji se pokreću kada korisnik komunicira s agentom, okidači događaja aktiviraju se vanjskim događajima, omogućujući proaktivno ponašanje.

- **Vođeno podacima:**
      - Svaki događaj dostavlja podatke (varijable + opcionalne upute) putem konektora. Agent koristi vaše definirane upute i podatke kako bi odlučio što dalje učiniti.
      - Na primjer, _pozvati temu_ ili _izvršiti radnje definirane alatima_.

- **Primjeri iz kutije:**
      - SharePoint/OneDrive datoteka ili element stvoren
      - Planner zadatak dovršen/dodijeljen
      - Microsoft Forms odgovor poslan
      - Ponavljanje/raspored

    Dostupnost ovisi o politikama podataka vaše organizacije konfiguriranim u Power Automate.

- **Zahtijeva generativnu orkestraciju:**
      - Okidači događaja dostupni su samo kada je generativna orkestracija omogućena za agenta.

- **Troškovi/upotreba:**
      - Svaka dostava okidača računa se kao poruka prema kapacitetu Copilot Studija.
      - Na primjer, ponavljanje svakih 10 minuta šalje poruku svakih 10 minuta.

- **Model autentifikacije i postavke:**
      - Dodajete okidače unutar pregleda agenta, pod _Okidači_. Autentifikacija za konektor okidača koristi račun autora agenta ("autentifikacija autora agenta").
      - Možete uređivati parametre okidača i podatke u Power Automate portalu za izradu.

- **Testiranje i pregled:**
      - Možete testirati okidače iz testnog panela agenta i pregledati ponašanje pomoću mape aktivnosti prije objavljivanja.

!!! info "Sažetak za programere"

    Zamislite okidače događaja kao **signale slične webhookovima** koji šalju strukturirane podatke vašem agentu, omogućujući mu da _započne_ rad i poveže radnje između sustava - bez čekanja da korisnik nešto zatraži.

### Okidači tema - kako se razlikuju

Ranije ste naučili o okidačima tema u [Recruit](../../recruit/07-add-new-topic-with-trigger/README.md), međutim, možda se još uvijek pitate kako se _okidači tema_ razlikuju od _okidača događaja_ i zašto je ta razlika važna za razumijevanje što čini agenta autonomnim.

Okidači tema kontroliraju _kada se tema pokreće_, obično kao odgovor na poruku korisnika.

- U generativnoj orkestraciji, zadani okidač je **Od strane agenta** - planer bira temu čije ime/opis najbolje odgovara poruci korisnika.
- U klasičnoj orkestraciji, zadani okidač su **Fraze** - planer bira temu kada jedna ili nekoliko fraza okidača najbolje odgovara poruci korisnika.

Ostale vrste okidača uključuju `Primljena poruka`, `Primljen događaj`, `Primljena aktivnost`, `Ažuriranje razgovora`, `Primljen poziv`, `Preusmjeravanje`, `Neaktivnost` i `Dovršen plan`.

!!! info "Osnovna razlika"

    Okidači tema su _pokretači aktivnosti razgovora_ unutar chata.
    
    Okidači događaja su _pokretači sustavskih događaja_ dostavljeni putem konektora koji mogu pokrenuti agenta bez ikakvog razgovora.

### Brzi vodič za razliku između okidača tema i okidača događaja

- **Okidač teme:** Korisnik (ili aktivnost u chatu) kaže/učini X ➡️ pokreni temu T.
- **Okidač događaja:** SharePoint/Planner/E-mail/Timer aktiviran s podacima P ➡️ agent procjenjuje upute ➡️ poziva radnje/teme prema potrebi.

## 🏓 Usporedba interaktivnog i autonomnog agenta

Sada kada znate razliku između okidača događaja i okidača tema, sljedeće ćemo naučiti razliku između interaktivnog i autonomnog agenta.

U terminima Copilot Studija, "interaktivni" se odnosi na agente koji prvenstveno komuniciraju putem **tema** u chatu ili kanalu. "Autonomni" se odnosi na agente koji također koriste **okidače događaja** za rad bez korisničkog unosa.

Sljedeća tablica sažima njihove razlike i sličnosti.

| Dimenzija                           | Interaktivni agent     | Autonomni agent                                                                                              |
|-------------------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------|
| Kako se pokreće                     | Korisnik (ili aktivnost u chatu) pokreće temu. Primjer: Od strane agenta, Fraze, Primljena poruka.   | Vanjski okidač događaja šalje podatke putem konektora agentu. Primjer: SharePoint, Planner, e-mail, raspored, itd. |
| Primarna upotreba                   | Pitanja i odgovori, vođeni tijekovi rada, radnje na zahtjev u chatu - Teams, web, itd.  | Proaktivne operacije i automatizacija u pozadini - reagiranje na promjene u sustavu, obavještavanje, pohrana ili organizacija zadataka. |
| Površina okidača                    | Okidači tema: Od strane agenta / Fraze / Primljena poruka / Tipovi aktivnosti / Poziv / Neaktivnost / Dovršen plan | Biblioteka okidača događaja putem konektora; podaci uključuju podatke o događaju + opcionalne upute. |
| Planer (generativna orkestracija)   | Snažno se koristi za okidače Od strane agenta i Dovršen plan za odabir/slijed tema. | Potrebno za okidače događaja; agent koristi upute + podatke za odlučivanje koje radnje/teme pozvati. |
| Tipičan primjer                     | Korisnik pita "Koja je naša politika povrata?" → Tema se pokreće, pretražuje znanje, odgovara. | Novi Planner zadatak dodijeljen → Okidač događaja aktiviran → Agent objavljuje poruku u Teams, ažurira zapis ili poziva temu. |
| Put postavljanja                    | Kreirajte teme, definirajte tip okidača, napišite dijalog/radnje; objavite u kanalima. | Dodajte okidač događaja (Pregled → Okidači), autentificirajte konektor s vjerodajnicama autora agenta, konfigurirajte podatke/upute; testirajte putem testnog panela; objavite. |
| Autentifikacija i upravljanje       | Radi pod kontekstom kanala/autentifikacije; okidači tema reagiraju na aktivnosti chata u dopuštenim kanalima. | Dostupnost okidača ovisi o politikama podataka Power Automate; konektori rade pod računom autora agenta. |
| Pregled                             | Testirajte teme unutar Copilot Studija, pregledajte transkripte razgovora/aktivnosti. | Koristite Test okidač i mapu aktivnosti za provjeru izvršenja prije objavljivanja, pratite aktivnosti nakon objavljivanja. |
| Utjecaj na kapacitet                | Svaka poruka korisnika/odgovor agenta je poruka koja troši kapacitet. | Svaka dostava događaja također je poruka, plus sve naknadne radnje. Primjer: ponavljanje svakih 10 minuta = 6 poruka/sat |

### Kada koristiti koji?

- Odaberite **okidače tema (interaktivni)** kada korisnici započinju razgovor s agentom - FAQ, vođeni unos ili zadaci u stilu naredbi unutar chata. Okidač Od strane agenta smanjuje ručno kuriranje fraza.
- Dodajte **okidače događaja (autonomni)** kada agent treba započeti razgovor ili samostalno poduzeti radnju - na ažuriranja u SharePoint/Dataverse, dolazni e-mail ili prema rasporedu. Ovo vas pomiče s reaktivnih na proaktivne operacije.

## Savjeti za programere i upozorenja

1. **Omogućite generativnu orkestraciju** za svakog agenta kojeg želite učiniti autonomnim. Okidači događaja neće se pojaviti inače.

1. **Modelirajte podatke rano.** Odlučite koja minimalna polja vaš agent treba od okidača, poput `itemId`, `assignedTo`, `dueDate` i dodajte sažete upute koje govore agentu koje radnje/teme treba pozvati na temelju vrijednosti podataka.

1. **Opseg autentifikacije je važan.** Okidači se autentificiraju pomoću računa autora agenta. Osigurajte da taj račun ima odgovarajuće dozvole za konektor i da je u skladu s politikama podataka Power Automate.

1. **Kontrolirajte troškove i buku.** Visokofrekventna ponavljanja ili izvori s puno aktivnosti mogu brzo povećati potrošnju poruka - ograničite gdje je moguće ili dodajte uvjete u okidač za filtriranje događaja.

1. **Testirajte prije objavljivanja.** Koristite **Test okidač** i mapu aktivnosti za praćenje plana i pozvanih radnji - iterirajte upute/podatke dok ponašanje ne postane stabilno.

## 🧪 Laboratorij 03 - Automatizacija e-mailova s prijavama kandidata

Sljedeće ćemo dodati okidač događaja u **Agenta za zapošljavanje** i izgraditi tijek rada agenta u podagentu **Agenta za prijem aplikacija** kako bismo omogućili daljnju obradu za autonomiju.

### ✨ Scenarij upotrebe

!!! info ""

    **Kao** HR regruter

    **Želim** biti obaviješten kada e-mail s životopisom stigne u moj Inbox i automatski se učita u Dataverse

    **Kako bih mogao** biti obaviješten o životopisima poslanim putem e-maila za prijave automatski učitane u Dataverse

Ovo ćemo postići koristeći dvije tehnike:

1. Okidač događaja za dolazak e-maila,
    1. Provjerite je li `contentType` datoteke jednak `PDF` kao format.
    1. Izvucite datoteku i učitajte je u Dataverse koristeći radnje putem konektora Dataverse.
    1. Zatim pošaljite upit agentu za daljnju obradu prosljeđivanjem ulaznih parametara iz radnji Dataverse-a.

1. Tijek rada agenta bit će dodan podagentu **Agenta za prijem aplikacija** koji se pokreće upitom u okidaču događaja.
    1. Koristite ulazne parametre proslijeđene iz upita okidača događaja u prilagodljivoj kartici objavljenoj u kanalu Microsoft Teams-a za obavještavanje HR tima za zapošljavanje. Prilagodljiva kartica će sadržavati poveznicu na redak u Dataverse-u koji će se pregledati u **Agentu za zapošljavanje**.

Krenimo!

### ✨ Preduvjeti za dovršetak ove misije

Trebat ćete **ili**:

- **Dovršiti Misiju 01 i Misiju 02** i imati spremnog svog Agenta za zapošljavanje, **ILI**
- **Uvesti početno rješenje za Misiju 03** ako počinjete od početka ili trebate nadoknaditi. [Preuzmite početno rješenje za Misiju 03](https://aka.ms/agent-academy)

!!! note "Uvoz rješenja i uzorci podataka"
    Ako koristite početno rješenje, pogledajte [Misiju 01](../01-get-started/README.md) za detaljne upute o tome kako uvesti rješenja i uzorke podataka u vaše okruženje.

Također ćete trebati pristup **Microsoft Teams-u** kako biste dovršili drugu vježbu laboratorija za objavljivanje prilagodljive kartice u Microsoft Teams.

### Laboratorij 3.1 - Automatizacija učitavanja životopisa u Dataverse primljenih putem e-maila

1. U Agentu za zapošljavanje, pomaknite se dolje na **Pregledni tab** i odaberite **+ Dodaj okidač**.

       ![Dodavanje okidača agentu](../../../../../translated_images/3.1_01_AddTrigger.4d5f4d13a4a6b19fe9ff89e3a483601199d7643236d6df65ff81dfea76d1d443.hr.png)

1. Pojavit će se popis okidača. Odaberite **Kada stigne novi e-mail (V3)** i odaberite **Dalje**.

       ![Odabir okidača Kada stigne novi e-mail (V3)](../../../../../translated_images/3.1_02_WhenANewEmailArrives.a250875915165d97c1af6eebba70f16fbfc845a37d4d354c9f35a55aa459035e.hr.png)

1. Sada ćemo vidjeti **Naziv okidača** i **Prijava** za referencu povezivanja aplikacija.

       Preimenujte naziv okidača u sljedeće,
    
       ```text
       Kada stigne novi e-mail od kandidata
       ```

       Provjerite je li uz svaku referencu povezivanja aplikacija prikazana zelena kvačica. Ako ne vidite zelenu kvačicu, prijavite se putem elipse (...) i odaberite **+ Nova referenca povezivanja** za stvaranje nove reference povezivanja.

       ![Ažuriranje detalja za naziv okidača i provjera referenci povezivanja](../../../../../translated_images/3.1_03_RenameTriggerName.3eb80b25bea5f874a51aab600ffd333359de3a981e41eed1b4fc7c8f27eef323.hr.png)

1. Posljednji korak je postavljanje ulaznih svojstava okidača. Ažurirajte sljedeća svojstva na sljedeće vrijednosti,

     | Svojstvo | Kako postaviti | Detalji |
     |----------|----------------|---------|
     | **Uključi privitke (Opcionalno)** | Padajući izbornik | Da |
     | **Filter predmeta (Opcionalno)** | Tipkajte/Unesite putem tipkovnice | Prijava |
     | **Samo s privitcima (Opcionalno)** | Padajući izbornik | Da |

       Odaberite **Kreiraj okidač**.

       ![Konfiguriranje ulaza okidača](../../../../../translated_images/3.1_04_ConfigureTriggerInputs.2151044f4953b31b40402c2a94fd63fb71fe8eede27a5cbf1d124d4300318446.hr.png)

1. Nakon kreiranja, pojavit će se poruka potvrde da je okidač dodan agentu. Odaberite **Zatvori** i okidač će biti naveden u sekciji **Okidači**.
Sada ćemo ažurirati okidač događaja kako bismo dodali još mogućnosti automatizacije. Odaberite **tri točke (...)** pored okidača i odaberite **Uredi u Power Automate**.

![Odaberite Uredi u Power Automate](../../../../../translated_images/3.1_05_SelectEditInPowerAutomate.d298b51d7980cf2fd20a9d8193745aef4ce8097a4a2d33341e2dc159b9bfc099.hr.png)

1. Okidač će se zatim učitati kao tok u Power Automate maker portalu. Ono što vidite je dizajner toka u Power Automate maker portalu. Ovdje možemo dodati dodatnu logiku i radnje za veću automatizaciju. Okidač će se pojaviti na vrhu, a zatim **Šalje upit određenom copilotu za obradu** kao posljednja radnja u toku.

![Dizajner toka u Power Automate maker portalu](../../../../../translated_images/3.1_06_EditInPowerAutomate.f8967ace56354224574517f31a2a2ce0a5b5d3ab85bfb9ec6cf70e83ab1b8e6d.hr.png)

1. Prema zadanim postavkama, okidač **Kad stigne novi e-mail** u Power Automate može obraditi više e-mailova zajedno ako nekoliko njih stigne odjednom, pokrećući tok samo jednom za cijeli paket.

Kako bismo osigurali da se tok pokreće zasebno za svaki e-mail, omogućite postavku **Split On** u postavkama okidača i odaberite `@triggerOutputs()?['body/value']` u polju za niz.

S uključenom postavkom **Split On** i poljem za niz postavljenim na `@triggerOutputs()?['body/value']`, tok će se pokretati pojedinačno za svaku poruku, čak i ako ih stigne više istovremeno.

![Uključite postavke Split On u okidaču](../../../../../translated_images/3.1_07_UpdateTriggerSettings.0f363c4f4655276732575fa795bf1ad1568df34d34b703c85073591cc8585609.hr.png)

1. Sljedeće ćemo dodati logiku za provjeru vrste datoteke privitka; želimo učitati samo privitke u .PDF formatu, a ne slike (koje bi mogle dolaziti iz potpisa e-maila). Odaberite ikonu **+** ispod okidača i odaberite **Kontrola** u odjeljku **Ugrađeni alati**.

![Odaberite Kontrola](../../../../../translated_images/3.1_08_Control.2fa6987b64ae20d5c8343d1b15937432ab6c893750c4b1427df56067023fd437.hr.png)

1. Odaberite radnju **Uvjet**.

![Odaberite radnju Uvjet](../../../../../translated_images/3.1_09_AddConditionAction.a7eec0b2a42d4a7c54bd305f0c480b72e3feec155a4e2468e12279082257f21f.hr.png)

1. Sada konfiguriramo uvjet za provjeru je li vrsta datoteke privitka .PDF. U polju **Odaberite vrijednost**, odaberite **ikonu munje** ili **fx ikonu** s desne strane.

1. U polju **Pretraži** unesite sljedeće:

```text
content type
```

1. Zatim odaberite parametar **Attachments Content-Type** iz okidača.

1. Zatim odaberite **Dodaj** kako biste dodali dinamički unos sadržaja u parametar **Id** radnje.

![Konfigurirajte radnju Uvjet](../../../../../translated_images/3.1_10_SetDynamicContentValue_V2.23c3d0438146a5ff0d695077e65a3b1c8b230b54c51ded8a099c6e99a948e9ed.hr.png)

1. Zastanimo ovdje na trenutak, vjerojatno ste primijetili da se radnja **Za svaki** automatski pojavila.

Odaberite radnju **Za svaki**. Ova radnja predstavlja petlju kroz svaki privitak u e-mailu, budući da je parametar **Attachments Content-Type** iz okidača povezan s svakim privitkom.

Ispod površine, to je niz i zato je radnja **Za svaki** automatski dodana kada smo odabrali parametar **Attachments Content-Type** u radnji **Uvjet**.

Za više informacija o ovome, proširite sljedeći dodatni blok za učenje.

??? info "Dodatno učenje: Automatsko pojavljivanje radnje Za svaki"

🤔 **Zašto se "Primijeni na svaki" ili "Za svaki" automatski pojavljuje?**

Kada odaberete parametar (dinamički sadržaj) koji predstavlja popis ili niz stavki - na primjer, popis privitaka, e-mailova ili redaka - Power Automate prepoznaje da biste mogli željeti obraditi svaku stavku pojedinačno.

Kako bi vam pomogao u tome, Power Automate automatski dodaje petlju **"Primijeni na svaki"** (ili **"Za svaki"**) oko vaše radnje. To osigurava da će vaša radnja biti izvršena jednom za svaku stavku na popisu, umjesto da pokušava obraditi cijeli popis odjednom (što bi moglo uzrokovati pogreške).

🦋 **Primjer**

- Ako odaberete "Privitci" iz prethodne radnje (što je niz), i pokušate ga koristiti u radnji koja očekuje jednu datoteku, Power Automate obavija vašu radnju u petlju **"Primijeni na svaki"** (ili **"Za svaki"**).
- Na taj način, vaša radnja će se izvršiti za **svaki privitak** - jedan po jedan.

💡 **Ključne točke**

- **Automatski:** Petlja se automatski pojavljuje kako bi vam pomogla obraditi svaku stavku u zbirci.
- **Sprječava pogreške:** Bez petlje, vaša radnja bi mogla propasti jer ne može obraditi više stavki odjednom.
- **Vizualni pokazatelj:** To je vizualni način prikazivanja da će vaš tok ponoviti radnju za svaku stavku na popisu.

![Objašnjenje radnje Za svaki](../../../../../translated_images/3.1_11_ForEach.82bd7b62b815fdbcd67acff0a633137cf03175940c670361ea8669b0df892927.hr.png)

1. Sljedeće, u drugom polju **Odaberite vrijednost**, unesite sljedeće:

```text
application/pdf
```

To će osigurati da za svaki privitak datoteke provjerava je li format ekstenzije datoteke .PDF.

![Jednako vrijednosti](../../../../../translated_images/3.1_12_EqualToValue.66c107cb8105c1cd3d166b8a5bf690b8dfc30aa2bd2af83c438a9e44d1b544b0.hr.png)

1. Sada ćemo konfigurirati put **True** za izdvajanje datoteke iz e-maila i učitavanje u tablicu **Resume** u Dataverseu.

Dodajte novu radnju ispod u putu **True** i potražite `html to text`. Odaberite radnju **Html to text**.

Za više informacija o radnji **Html to text**, proširite sljedeći dodatni blok za učenje.

??? info "Dodatno učenje: Radnja Html to text"

🤔 **Što je radnja "HTML to text"?**

Radnja **HTML to text** u Power Automate koristi se za pretvaranje sadržaja u HTML formatu u običan tekst. Ovo je posebno korisno kada primate podatke (poput e-mailova, web sadržaja ili odgovora API-ja) koji sadrže HTML oznake, a želite izdvojiti samo čitljiv tekst bez ikakvog formatiranja ili koda.

⚙️ **Kako funkcionira?**

- **Ulaz:** Unosite niz HTML sadržaja (na primjer, tijelo e-maila).
- **Izlaz:** Radnja uklanja sve HTML oznake i vraća samo običan tekst.

👍🏻 **Kada biste je trebali koristiti?**

- Kada želite izdvojiti čitljiv tekst iz e-mailova, web stranica ili odgovora API-ja koji sadrže HTML.
- Prije slanja sadržaja sustavima koji ne podržavaju HTML formatiranje (poput SMS-a, poruka u Teamsu ili baza podataka).
- Za čišćenje podataka za daljnju obradu ili analizu.

🔭 **Gdje je pronaći?**

- U Power Automate za Agent tokove, potražite radnju pod nazivom `HTML to text`. Nalazi se pod konektorom **Data Operations**.

💡 **Ključne točke**

- Uklanja sve HTML oznake i ostavlja samo tekst.
- Ne interpretira ili izvršava skripte/stilove - samo uklanja oznake.
- Korisno za čišćenje podataka i pripremu sadržaja za izlaze u običnom tekstu.

![Dodajte radnju HTML to text](../../../../../translated_images/3.1_13_AddHTMLToTextAction.2aa9468b87dbeb847c083f24da0fe99438b39f826b13a70982ec255a97c2aa80.hr.png)

1. Sljedeće, trebamo stvoriti novu referencu veze za radnju **Html to text** odabirom **Dodaj novu**.

![Dodaj novu referencu veze](../../../../../translated_images/3.1_14_AddNewConnection.4a23546976b62e7f0e882ac1379950e5bfdcaa702070313cb84a1d22b06a79a7.hr.png)

1. Radnja se sada može konfigurirati. Dodajmo parametar **Body** iz okidača. U polju **Sadržaj**, odaberite **ikonu munje** ili **fx ikonu** s desne strane.

![Dodajte dinamički sadržaj](../../../../../translated_images/3.1_15_AddDynamicContent.0624a9808f55b993efb6d00bf941a88389655e2ab9970ba2b9a1538272fe9643.hr.png)

1. U kartici **Dinamički sadržaj**, potražite `body` i odaberite parametar **Body**, nakon čega odaberite **Dodaj**.

![Dodajte parametar Body](../../../../../translated_images/3.1_16_AddDynamicContent.40b7eccc080c20513eed5663062b2a63d40d6482eaf2d42fe4e29cb94797f098.hr.png)

1. Završili smo konfiguraciju ove radnje pa izađimo iz radnje odabirom dvostrukih kutnih zagrada («) usmjerenih ulijevo kako bismo zatvorili panel.

![Zatvorite panel radnje](../../../../../translated_images/3.1_17_CollapseAction.ca2c346efb58f8240372c3d145fa10ba609cab1c2075d7df1a9388c82fab79f5.hr.png)

1. Dodajmo novu radnju odabirom **+ ikone** ispod radnje **Html to text**, što će učitati panel za dodavanje radnji. Odaberite konektor **Microsoft Dataverse**.

![Dodajte novu radnju](../../../../../translated_images/3.1_18_AddDataverseAction.5f4be9eb96e22dac239e5545bab5ad9d08b138c2cbcbc700680f33445e132506.hr.png)

1. Odaberite radnju **Dodaj novi redak**.

![Dodajte radnju Dodaj novi redak](../../../../../translated_images/3.1_19_AddANewRow.48e0a3868821e59ed2a299ccb6a521af27b2430082381d48be38087be62c7c15.hr.png)

1. Preimenujte radnju odabirom **Tri točke (...)**, kopirajte i zalijepite sljedeće kao naziv:

```text
Dodaj novi redak za životopis
```

Za parametar **Naziv tablice**, potražite `res` i odaberite tablicu **Resumes**.

![Preimenujte radnju i konfigurirajte parametar Naziv tablice](../../../../../translated_images/3.1_20_RenameAndSelectResumesTable.89f8485653abb7fda1d6eb44210951f05a05ed6f7450a51895079dfd8e72c8bf.hr.png)

1. Sljedeće, odaberite polje **Naslov životopisa** i odaberite **ikonu munje** ili **fx ikonu** s desne strane.

![Konfigurirajte parametar Naslov životopisa](../../../../../translated_images/3.1_21_AddDynamicContent.9ee1f89420d5a4aa56797944166208f6e9b0ec67116625168fbcefb907850224.hr.png)

1. U kartici **Funkcija**, unesite sljedeći izraz koji koristi funkciju `item()`.

```text
item()?['name']
```

Za više informacija o funkciji `item()`, proširite sljedeći dodatni blok za učenje.

??? info "Dodatno učenje: Funkcija `item()`"

🤔 **Što je funkcija `item()`?**

- Kada koristite radnju **Primijeni na svaki**, Power Automate prolazi kroz svaki element u zbirci (nizu).
- Najčešće se koristi unutar radnji poput **Primijeni na svaki** (ili **Za svaki**), **Odaberi** ili **Filtriraj niz**.

⚙️ **Kako funkcionira?**

- `item()` je funkcija koja vraća trenutnu stavku koja se obrađuje u petlji ili operaciji niza.
- Unutar te petlje, `item()` se odnosi na _trenutni element_ koji se obrađuje.

📌 **Gdje je koristite?**

- **Primijeni na svaki:** za pristup svojstvima trenutne stavke.
- **Odaberi:** za transformaciju svake stavke u nizu.
- **Filtriraj niz:** za referenciranje trenutne stavke koja se procjenjuje.

🦋 **Primjer**

- Izraz unutar petlje:
       -  `item()?['Email']`
- Ovo dohvaća svojstvo `Email` trenutne stavke.

💡 **Ključne točke**

- `item()` je _osjetljiv na kontekst_: uvijek se odnosi na trenutnu stavku u petlji ili operaciji niza u kojoj se nalazite.
- Ako ugnijezde petlje, možete koristiti `items('NazivPetlje')` za referenciranje stavki u određenoj petlji.

Odaberite **Dodaj** kako biste dodali izraz u parametar **Naslov životopisa**.

![Dodajte izraz za parametar Naslov životopisa](../../../../../translated_images/3.1_22_ResumeTitleParameter.9e4fa71a5251cb899e7b09bcc3052eeda1e512841f929118eb9e2b1d232ecb07.hr.png)

1. Još uvijek trebamo konfigurirati nekoliko parametara, odaberite **Prikaži sve**, a u polju **Motivacijsko pismo**, odaberite **ikonu munje** ili **fx ikonu** s desne strane.

U kartici **Funkcija**, unesite sljedeći izraz koji koristi isti izraz iz prethodne [misije](../02-multi-agent/README.md).

```text
if(greater(length(body('Html_to_text')), 2000), substring(body('Html_to_text'), 0, 2000), body('Html_to_text'))
```

Ovaj izraz provjerava je li _tekst_ iz radnje **Html to text** dulji od 2000 znakova, i ako jest, vraća samo prvih 2000 znakova; inače vraća cijeli tekst.

![Dodajte izraz za parametar Motivacijsko pismo](../../../../../translated_images/3.1_23_CoverLetterParameter.d2b521d6b37d05ac4760c91de2964b6d062585a333af6989d9ac0794a4139463.hr.png)

1. Izraz će sada biti dodan u polje **Motivacijsko pismo**.

![Izraz dodan u parametar Motivacijsko pismo](../../../../../translated_images/3.1_24_ExpressionForCoverLetter.3d18124b10b76bad92db61c529ae395b0bb05f3215e3b783771e76ef7677664e.hr.png)

1. Za polje **E-mail adresa izvora**, potražite `from` i odaberite parametar **From** iz okidača jer sadrži vrijednost e-mail adrese.

![Parametar E-mail adresa izvora](../../../../../translated_images/3.1_25_FromParameter.1ed1be46711f6705fb807996f6f1e873adc22e285186a851272e0cf3855487ef.hr.png)

1. Za polje **Datum učitavanja**, odaberite **ikonu munje** ili **fx ikonu** s desne strane. U kartici **Funkcija**, unesite sljedeći izraz koji koristi funkciju `utcNow()`.

```text
utcNow()
```

Za više informacija o funkciji `utcNow`, proširite sljedeći dodatni blok za učenje.

??? info "Dodatno učenje: Funkcija `utcNow`"

🤔 **Što je funkcija `utcNow()`?**

- Funkcija utcnow() u Power Automate vraća trenutni datum i vrijeme u koordiniranom univerzalnom vremenu (UTC) u ISO 8601 formatu, poput: `2025-09-23T04:32:14Z`

🦋 **Primjer**

- Izraz:
       -  `concat('Izvješće generirano na ', utcnow())`
- Izlaz je:
       - Izvješće generirano na `2025-09-23T04:32:14Z`

💡 **Ključne točke**
- **Nisu potrebni argumenti (ulazni parametri):** uvijek daje trenutni UTC vremenski žig.
   - **Primjene**
       - Dodavanje vremenskih žigova u zapise ili nazive datoteka
       - Usporedba trenutnog vremena s drugim datumima
       - Planiranje ili uvjeti temeljeni na vremenu

![Parametar datuma prijenosa](../../../../../translated_images/3.1_26_UploadDateParameter.21b0afc9807bf680c1c432066f1644d4d018cb4988ad0c0788b5186cea285e02.hr.png)

1. Sada smo završili konfiguraciju akcije **Dodaj novi redak životopisa**, pa izađimo iz panela tako da ga smanjimo.

![Izlaz iz panela akcije](../../../../../translated_images/3.1_27_CollapseAction.c033a86e4d8501b10fc454ba7f9c5e08d71d6d881fc72f58011152e1c5d7a7bb.hr.png)

1. Dodati ćemo novu akciju odabirom **+ ikone** ispod akcije **Dodaj novi redak životopisa**, što će učitati panel za dodavanje akcija. Ponovno odaberite konektor **Microsoft Dataverse**.

![Dodaj Dataverse akciju](../../../../../translated_images/3.1_28_AddDataverseAction.1af4dedc95001bfb56b0a642231e9c82b57459b10c68bf6fc177382339a0a221.hr.png)

1. Odaberite akciju **Prenesi datoteku ili sliku**.

![Dodaj akciju Prenesi datoteku ili sliku](../../../../../translated_images/3.1_29_AddUploadAFileOrAnImage.e40ab21b735e37bd1fdb5020b7433d1a2f01d6e387bc43a437e970c6e20ee779.hr.png)

1. Preimenujte akciju odabirom **Tri točke (...)**, kopirajte i zalijepite sljedeće kao naziv:

```text
Prenesi datoteku životopisa
```

![Preimenuj akciju](../../../../../translated_images/3.1_30_RenameAction.c316fdf225f88e5c3ee26649e672472829c3372c804b544a1372b0455937c204.hr.png)

1. Zatim odaberite polje **Naziv sadržaja** i odaberite **ikonu munje** ili **fx ikonu** s desne strane.

U **kartici Funkcija**, unesite sljedeći izraz koji koristi funkciju `item ()`. Ovo dohvaća svojstvo `name` trenutne stavke (datoteke privitka).

```text
item()?['name']
```

![Konfiguriraj parametar Naziv sadržaja](../../../../../translated_images/3.1_31_ContentNameParameter.c6606773f1e82dbcea93d7c2f52dff7a2168f9f04d6b865f699f56d62a41d4ec.hr.png)

1. Za parametar **Naziv tablice**, potražite `res` i odaberite tablicu **Životopisi**.

![Konfiguriraj parametar Naziv tablice](../../../../../translated_images/3.1_32_SelectResumesTable.6a00bf6d585002219003da47f6e1042dc67cbdb3fbaf7d959253550035e27520.hr.png)

1. Zatim odaberite polje **ID retka** i odaberite **ikonu munje** ili **fx ikonu** s desne strane.

Potražite `ID` i odaberite parametar **Životopis** iz akcije _Dodaj novi redak_ Dataverse jer sadrži ID vrijednost retka u koji se prenosi PDF datoteka.

Odaberite **Dodaj**.

![Odaberi ID retka](../../../../../translated_images/3.1_33_RowIDParameter.9824c6b5ea5edf0ce018140c20431a97c2e750d61bcb787f67da260acb6a3838.hr.png)

1. Odaberite polje **Naziv stupca** i odaberite opciju **PDF životopisa**.

![Konfiguriraj parametar Naziv stupca](../../../../../translated_images/3.1_34_ColumnNameParameter.ef4f770cbd84cae5c15cfe06d1bdbe028d0c6d54a2286dab30769fa01c948b71.hr.png)

1. Odaberite polje **Sadržaj** i odaberite **ikonu munje** ili **fx ikonu** s desne strane.

U **kartici Funkcija**, unesite sljedeći izraz koji koristi funkciju `item ()`. Ovo dohvaća svojstvo `contentBytes` trenutne stavke (datoteke privitka). `contentBytes` odnosi se na sirove binarne podatke datoteke ili privitka, kodirane kao Base64 string.

```text
item()?['contentBytes']
```

1. Završili smo konfiguraciju ove akcije, pa izađimo iz akcije odabirom dvostrukih kutnih zagrada («) koje pokazuju ulijevo kako bismo smanjili panel.

![Smanji panel akcije](../../../../../translated_images/3.1_36_CollapseAction.1813a7219f0f37b87f80c2cd9f5a9626c3a320858d08a0e62cf14736f97db4c6.hr.png)

1. Zatim odaberite **Šalje upit određenom copilotu za obradu**, zatim povucite i ispustite ovu akciju ispod akcije **Prenesi datoteku životopisa** u _True_ putu uvjeta.

![Povuci i ispusti akciju u True put](../../../../../translated_images/3.1_37_DragAndDropAction.57dc2e9f9d25ed892a4fc072a72c55eca6c38e313ab48fb9db37e9371995440f.hr.png)

1. Odaberite **Šalje upit određenom copilotu za obradu** kako biste ga konfigurirali.

![Odaberi akciju](../../../../../translated_images/3.1_38_SelectAction.d125bdf661f66b6397542c75efbc6a78b8c4862e03dce4002776c251f1c48382.hr.png)

1. U polju **Tijelo/poruka**, odaberite sav sadržaj polja i očistite/izbrišite ga.

![Očisti parametar Tijelo](../../../../../translated_images/3.1_39_ClearBodyParameter.6a345b2e5dbe5510184d7bae7cd406b8cec72c714f34bb40e30741e445a491c0.hr.png)

1. Kopirajte i zalijepite sljedeći tekst u polje **Tijelo/poruka** i istaknite `RESUME ID PLACEHOLDER`.

```text
Pošalji [ResumeId (text)] = "RESUME ID PLACEHOLDER" i [ResumeTitle (text_1)] = "RESUME TITLE PLACEHOLDER" i [ResumeNumber (text_2)]= "RESUME NUMBER PLACEHOLDER" alatu "Obavijesti Teams kanal za prijave" u pod-agentu "Agent za unos prijava"
```

![Zamijeni tekst za Resume ID Placeholder](../../../../../translated_images/3.1_40_ReplaceResumeIDPlaceholder.eb61590503cb37d89121aaed6d979a4272aa30c87700206e04db8005e60b294f.hr.png)

1. Odaberite **ikonu munje** ili **fx ikonu** s desne strane.

Potražite `resume` i odaberite parametar **Životopis** iz akcije _Dodaj novi redak Dataverse_ jer sadrži vrijednost `ID` retka stvorenog životopisa.

Odaberite **Dodaj**.

![Odaberi parametar Životopis](../../../../../translated_images/3.1_41_SelectResumeParameter.61c4457c33e5d1b596169857535bfc560ef677264f8798e9148ceac999eeaeb9.hr.png)

1. Istaknite `RESUME TITLE PLACEHOLDER`. Odaberite **ikonu munje** ili **fx ikonu** s desne strane.

Potražite `title` i odaberite parametar **Naslov životopisa** iz akcije _Dodaj novi redak Dataverse_ jer sadrži vrijednost `naslov životopisa` retka stvorenog životopisa.

Odaberite **Dodaj**.

![Odaberi parametar Naslov životopisa](../../../../../translated_images/3.1_42_SelectResumeTitleParameter.6c887607128f928da15c4cf6c22254d0473bc22514aa883462fd812bf14245e0.hr.png)

1. Istaknite `RESUME NUMBER PLACEHOLDER`. Odaberite **ikonu munje** ili **fx ikonu** s desne strane.

Potražite `resume number` i odaberite parametar **Broj životopisa** iz akcije _Dodaj novi redak Dataverse_ jer sadrži vrijednost `Broj životopisa` retka stvorenog životopisa.

Odaberite **Dodaj**.

![Odaberi parametar Broj životopisa](../../../../../translated_images/3.1_43_SelectResumeNumberParameter.ca19197525250483a7e94598b621072b47ebdf5deb939e1387c979e807ddc554.hr.png)

1. Završili smo konfiguraciju ove akcije i našeg tijeka rada agenta 🙌🏻 Odlično ti ide! Sada spremimo naš tijek rada za pokretanje događaja odabirom **Spremi nacrt**.

![Spremi nacrt](../../../../../translated_images/3.1_44_SaveDraft.0c9eee19f0c7cb8483b8d31bc17e1dd54075352d22f0f44603a9d52b52429188.hr.png)

1. Sada trebamo urediti detalje tijeka rada agenta, odaberite **Natrag**.

![Odaberi Natrag](../../../../../translated_images/3.1_45_Back.3f85535977bdb02231a0fdb8465e0e8b7d86fd5342ff933e4ae8bf9610279989.hr.png)

1. Odaberite **Uredi** u odjeljku **Detalji** i ažurirajte **Plan** na opciju **Copilot Studio**.

Odaberite **Spremi**.

![Promijeni plan Copilot Studio](../../../../../translated_images/3.1_46_ChangePlanDetails.6ab15f1f8bd9ebe55b2c1576c3495f47d1a29d7435e343d4c590e46647601269.hr.png)

1. Pojavit će se modalni prozor koji traži potvrdu za prelazak na plan Copilot Studio. Odaberite **Potvrdi**.

![Potvrdi promjenu plana Copilot Studio](../../../../../translated_images/3.1_47_ConfirmCopilotStudioPlan.bc6ab52e7c982127154b0fb743f85ff9cc05dcab944dffc9485bdbcbe0811397.hr.png)

1. Plan je sada ažuriran na **Copilot Studio**. Odaberite **Uredi** jer trebamo objaviti tijek rada za pokretanje događaja za našeg agenta.

![Uredi tijek rada](../../../../../translated_images/3.1_48_PlanChangedAndEdit.3c3207766a648817f7a7878c3a6f684cf41cdceea4dca8f6fc43b7315c8dd648.hr.png)

1. Odaberite **Objavi**.

![Objavi](../../../../../translated_images/3.1_49_Publish.38ff814cfce6b3be1076cafb0c28e4e344f75d8cd4117fabed13ad361d4fde3f.hr.png)

Bravo! Tijek rada za pokretanje događaja sada je objavljen 😃

![Objavljeno](../../../../../translated_images/3.1_50_Published.449e7867f7b027ae8a524c749357a1b931955062828bacc3b5a51e979755ef4a.hr.png)

Nastavimo s kreiranjem novog tijeka rada agenta koji će pokrenuti pod-agent **Agent za unos prijava**.

### Laboratorij 3.2 - Obavijesti Teams kanal pomoću prilagodljive kartice

Sada ćemo kreirati novi tijek rada agenta za pod-agent **Agent za unos prijava** koji koristi vrijednosti proslijeđene pokretanjem događaja, kako bi objavio prilagodljivu karticu na Teams kanal. Ova prilagodljiva kartica će obavijestiti HR tim za zapošljavanje o PDF-u koji je automatski prenesen kako bi ga mogli pregledati.

Krenimo!

1. U **Agent za zapošljavanje** odaberite karticu **Agenti** i odaberite **Agent za unos prijava**.

![Odaberi Agent za unos prijava](../../../../../translated_images/3.2_01_SelectApplicationIntakeAgent.0e9dd3da5c52e9f59ab3a4545c01897ad830853b650ec42f7f8424aa530e0409.hr.png)

1. Pomaknite se dolje do **Alati** i odaberite **+ Dodaj**.

![Dodaj alat](../../../../../translated_images/3.2_02_AddNewTool.7c62275fd9f28cdc1923ea056a148171048dc568ff78056958fd54862133f90e.hr.png)

1. Pojavit će se modalni prozor **Dodaj alat**. Odaberite **+ Novi alat**.

![Odaberi Novi alat](../../../../../translated_images/3.2_03_SelectNewTool.215e7637a9f065a3799a1ecf248eed1e859f201d2dfdfab71a7c1dc18e454e2d.hr.png)

1. Odaberite **Tijek rada agenta**.

![Odaberi Tijek rada agenta](../../../../../translated_images/3.2_04_SelectAgentFlow.7bc12b3435efccc0cfee8f563640562f87d173b436b3313a3d1256fe35024907.hr.png)

1. Zatim će se učitati **dizajner tijeka rada agenta**. U pokretaču **Kada agent pozove tijek rada**, odaberite **+ Dodaj unos**.

![Odaberi dodavanje unosa](../../../../../translated_images/3.2_05_SelectAddAnInput.f3dc8465f490929baccb0f2dc72b50629b1435ff8a3861f7974885d1d36cdeb1.hr.png)

1. Odaberite **Tekst** kao vrstu korisničkog unosa.

![Odaberi Tekst](../../../../../translated_images/3.2_06_SelectText.93585b4af8c4e277c11c2052b638e249508a24a075987026a6ec346e75184217.hr.png)

1. U polje za unos teksta kopirajte i zalijepite sljedeće za naziv parametra unosa.

```text
ResumeId
```

![Unos ResumeId](../../../../../translated_images/3.2_07_ResumeIdInput.a9e127e343856d6c6d45dd1251cade0503bad9484bc563c02155390951b1faa5.hr.png)

1. Ponovite iste korake za dodavanje drugog tekstualnog unosa. Kopirajte i zalijepite sljedeće za naziv parametra unosa.

```text
ResumeTitle
```

![Unos ResumeTitle](../../../../../translated_images/3.2_08_ResumeTitleInput.c71ecd364a974a93abb0de876807c2e9bde59fcea6df317babeb20764b636f26.hr.png)

1. Ponovite iste korake za dodavanje trećeg tekstualnog unosa. Kopirajte i zalijepite sljedeće za naziv parametra unosa.

```text
ResumeNumber
```
![Unos ResumeNumber](../../../../../translated_images/3.2_09_ResumeNumberInput.a6c060000354deab51dffef3c1ad9f13378cfeabdafdb7a33c2a591bfd044709.hr.png)

1. Sjećate li se kako smo u [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request) dodali prilagodljivu karticu unutar teme za našeg agenta? Ovaj put ćemo dodati prilagodljivu karticu u tijek rada agenta. Sada ćemo dodati još jednu akciju našem tijeku rada koja će objaviti prilagodljivu karticu na Teams kanal.

Odaberite **+ ikonu** ispod pokretača.

![Dodaj novu akciju](../../../../../translated_images/3.2_10_AddNewAction.4474a2150991cac246d5e4091a74ba91e76e1c5bafa34ad985a8567c09dcdd35.hr.png)

1. Odaberite akciju **Objavi karticu u chatu ili kanalu**.

![Odaberi akciju Objavi karticu u chatu ili kanalu](../../../../../translated_images/3.2_11_SelectPostCardInAChatOrChannel.97de43ed1c883b14d0150ae65efaa90f53f0815bdf57ec10e0e22cbd3e22ce06.hr.png)

1. Potrebno je stvoriti referencu za povezivanje s Microsoft Teams koristeći vaš prijavljeni korisnički račun. Odaberite **Prijavi se**.

![Odaberi prijavu](../../../../../translated_images/3.2_12_SignInToCreateConnectionReference.2297f8b702d71508f1b21a3ed4046df4846dc03b13932a20e5c445403559ac1f.hr.png)

1. Odaberite svoj korisnički račun, a zatim odaberite **Dopusti pristup**.

![Odaberi Dopusti pristup](../../../../../translated_images/3.2_13_AllowAccess.31cbf82606d75231108bd4f2bfeafffda3cd7e7e760cd46004c2705afe050aaf.hr.png)

1. Za sljedeće ulazne parametre,

| Parametar | Kako postaviti | Detalji |
|----------|------------|---------|
| **Objavi kao** | Padajući izbornik | Odaberite opciju `Flow bot` |
| **Objavi u** | Padajući izbornik | Odaberite opciju `Kanal` |
| **Tim** | Padajući izbornik | Odaberite tim koji je dostupan u vašem okruženju i kojem imate pristup za potrebe ovog laboratorijskog zadatka |
| **Kanal** | Padajući izbornik | Odaberite kanal koji je dostupan u vašem okruženju i kojem imate pristup za potrebe ovog laboratorijskog zadatka |

![Konfiguriraj ulazne parametre](../../../../../translated_images/3.2_14_ConfigureParameters.8c21924f90db3acaa33d4e35ef43c70556ba4cc37207a195ac654e55a43400a6.hr.png)

1. Zatim ćemo konfigurirati polje **Prilagodljiva kartica**. Odaberite polje **Prilagodljiva kartica**.

![Odaberi polje Prilagodljiva kartica](../../../../../translated_images/3.2_15_SelectAdaptiveCardParameter.65323056be6174d2eed7422650aaa70fc16396148f90b8af1801110d7a30d66f.hr.png)

1. Otvorite [JSON datoteku ažurirane tablice životopisa](../../../../../docs/operative-preview/03-automate-triggers/assets/3.2_ResumeTableUpdated.json), kopirajte cijeli njezin sadržaj i zalijepite ga u polje Prilagodljiva kartica.

![Kopiraj i zalijepi JSON](../../../../../translated_images/3.2_16_JSON.f022097fb7139bd12514abb8fdc518309ea940f005cc94a11ba159359cde784b.hr.png)

1. Slično kao što smo učinili u [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request), zamijenit ćemo postojeće vrijednosti u JSON payloadu stvarnim vrijednostima ili dinamičkim sadržajem.

Prvo, ažurirajmo URL za svojstvo `url` unutar svojstva `selectAction`. Ovaj URL će biti zamijenjen URL-om sustavskog prikaza Životopisa u aplikaciji **Hiring Hub**. To će omogućiti regruteru da odabere akciju i bude preusmjeren na sustavski prikaz Životopisa u aplikaciji.

Istaknite trenutnu vrijednost URL-a i izbrišite je.

![Odaberi vrijednost URL-a](../../../../../translated_images/3.2_17_SystemViewURL.5e51fd894ac916f436107c7b668d66ca87ca8bdfd7affeb7dae1b10fa8ff5afb.hr.png)

1. U aplikaciji **Hiring Hub**, navigirajte do sustavskog prikaza **Životopisi** koristeći izbornik na lijevoj strani i kopirajte URL. Zatim se vratite na tijek rada agenta i zalijepite kopirani URL u svojstvo **url** unutar svojstva `selectAction`.

![Kopiraj URL sustavskog prikaza Životopisa](../../../../../translated_images/3.2_18_CopyResumesSystemViewURL.14d9f55c7db15977a12dfe2a5df95aab5cf241e646b08f9838cff31aaa27a381.hr.png)
1. Trebali biste vidjeti sljedeće gdje su žuto označeni detalji vašeg okruženja za model-driven aplikaciju **Hiring Hub**.

     | Parametar | Vrijednost | Objašnjenje |
     |----------|------------|---------|
     | **Organization URI** | GUID | URL organizacije okruženja Dataverse/Dynamics 365 |
     | **appid** | GUID | Za otvaranje određene model-driven aplikacije koristi se upitni parametar appid ili appname. U ovom slučaju koristi se appid |
     | **viewid** | GUID | Upitni parametar koji predstavlja ID pogleda |

       ![Zalijepi URL](../../../../../translated_images/3.2_19_PasteURL.41f3fdd66190c8ba478857f91c90eb05ee9621243bda7b7ad26eb5802b8e970d.hr.png)

1. Zatim ćemo dodati vrijednosti dinamičkog sadržaja za nekoliko svojstava. Počnimo s tekstom koji će prikazivati referencu broja životopisa reda koji je autonomno kreiran okidačem događaja.

      Odaberite ikonu **panel** za učitavanje akcijskog panela.

       ![Odaberite ikonu panela](../../../../../translated_images/3.2_20_SelectPannelIcon.786a4147ba12e0e62648c66f14fb2b9a7f89b27c3a610f43420e31cb0c9fb5da.hr.png)

1. Pomaknite se dolje do linije gdje vidite svojstvo `text` za `RESUME NUMBER PLACEHOLDER`. Označite vrijednost rezerviranog mjesta i izbrišite je.

       ![Izbriši rezervirano mjesto](../../../../../translated_images/3.2_21_DeleteResumeNumberPlaceholder.6ffd7a5a073f9d9a11e0e119c87e827243de237f70ebc3ab37dfdd36de615130.hr.png)

1. Kliknite između dvostrukih navodnika i odaberite ikonu **munje** ili **fx ikonu** s desne strane.

      Na kartici **Dynamic Content** odaberite parametar **ResumeNumber** i kliknite **Add**.

       ![Dodaj parametar ResumeNumber](../../../../../translated_images/3.2_22_SelectResumeNumberParameter.de5a6eecb3ee092441d841ad137dfecd9f8d503a370ff60eb5ccdc0267e37df0.hr.png)

1. Parametar **ResumeNumber** sada će biti dodan kao dinamički sadržaj svojstvu `text`.

       ![Dinamički sadržaj ResumeNumber](../../../../../translated_images/3.2_23_ResumeNumberDynamicContent.129a566ac6e9d448b268b828da5766a7056779ac167f65b498e2ca21d703b7f0.hr.png)

1. Ponovit ćemo iste korake za `RESUME NAME PLACEHOLDER`. Pomaknite se dolje do linije gdje vidite svojstvo `text` za `RESUME NAME PLACEHOLDER`. Označite vrijednost rezerviranog mjesta i izbrišite je.

       ![Rezervirano mjesto za ime životopisa](../../../../../translated_images/3.2_24_ResumeNamePlaceholder.6c879b99ae375892f7e0a511bfedd5fa9e60a8dea71ea2a44c2a7a04c8389f43.hr.png)

1. Kliknite između dvostrukih navodnika i odaberite ikonu **munje** ili **fx ikonu** s desne strane.

      Na kartici **Dynamic Content** odaberite parametar **ResumeTitle** i kliknite **Add**.

       ![Dodaj parametar ResumeTitle](../../../../../translated_images/3.2_25_SelectResumeTitleParameter.18c769bbd2c60e362a56f6055e151ed6287903cb625addcdfbb43044828d7378.hr.png)

1. Parametar **ResumeTitle** sada će biti dodan kao dinamički sadržaj svojstvu `text`.

       ![Dinamički sadržaj ResumeTitle](../../../../../translated_images/3.2_26_ResumeTitleDynamicContent.7219e078f71fc0d5d4a6bb228ba2d53f0898ba26a27c5eb859df90d12dd52c70.hr.png)

1. Ponovit ćemo iste korake za vrijednost **Due Date** koja predstavlja kada regruter treba pregledati životopis. Pomaknite se dolje do linije gdje vidite svojstvo `text` za `May 21, 2023`.

       ![Odaberite Dopusti pristup](../../../../../translated_images/3.2_27_DueDatePlaceholder.17c6003cc9ec1141b0aeb5cde203098a7f5534fa11f01a3cbffb66206ed1633a.hr.png)

1. Izbrišite ovu vrijednost rezerviranog mjesta datuma i kliknite između dvostrukih navodnika.

       ![Izbriši](../../../../../translated_images/3.2_28_DeleteDueDatePlaceholder.9a3df55fb3c9ed72e61e0a60dc3344335b0444ff537c9fb51036b0442a85d268.hr.png)

1. Odaberite ikonu **munje** ili **fx ikonu** s desne strane i na kartici **Function** unesite sljedeći izraz i kliknite **Add**.

       ```text
       addDays(utcNow(), 3, 'MMM dd, yyyy')
       ```

      Ovaj izraz koristi dvije funkcije.

     | Funkcija | Objašnjenje |
     |----------|------------|
     | **addDays** | Dodaje određeni broj dana zadanom datumu i vraća rezultat u obliku stringa |
     | **utcNow** | Vraća trenutni datum i vrijeme u formatu koordiniranog univerzalnog vremena (UTC) kao string. |

      Za vrijednost utcNow formatiramo datum da bude mjesec i dan, praćeni godinom.

       ![Izraz Due Date](../../../../../translated_images/3.2_29_01_ExpressionDueDate.a4fa31985f5500971f2fc6da0e81e008af12be19d54a30a240764b74a4b2dbcb.hr.png)

      Izraz će sada biti dodan svojstvu `text`.

       ![Izraz Due Date](../../../../../translated_images/3.2_29_02_ExpressionDueDate.6159288450731c7b09628af70f0c9a6d92590ca7c7e39e8a524ae8af7c511f2c.hr.png)

1. Na kraju, ažurirat ćemo URL za svojstvo `url` unutar svojstva `actions` array na dnu JSON payloada. Trenutni rezervirani URL bit će zamijenjen URL-om reda životopisa u model-driven aplikaciji **Hiring Hub**. Ovo će omogućiti regruteru da odabere akciju `Action.OpenURL` adaptivne kartice i bude preusmjeren na životopis u model-driven aplikaciji.

       ![Izbriši rezervirano mjesto za URL pregleda životopisa](../../../../../translated_images/3.2_30_ViewResumeURLPlaceholder.f27af6cadfb54fb977f0b46ea3ec42ee0638d38ebc5d294eff5da52abf9d4a1b.hr.png)

1. U model-driven aplikaciji **Hiring Hub**, otvorite red u sustavnom pogledu **Resumes** koristeći izbornik s lijeve strane. Red životopisa će se učitati kao obrazac u model-driven aplikaciji.

      Kopirajte URL reda životopisa.

    ??? info "Kako se vratiti na model-driven aplikaciju **Hiring Hub** ako ste je zatvorili/izašli iz nje"

        1. Idite na [https://make.powerapps.com](https://make.powerapps.com) i provjerite jeste li u svom razvojnom okruženju koje koristite za ove laboratorijske vježbe, inače se prebacite na njega.
        
        ![Idite na make.powerapps.com](../../../../../translated_images/3.2_31_Note_01_BrowseToURL.a13dfc8b05a0b34f3a4c853f3d3e418864176b52b1b40c069da7712af5562aa5.hr.png)

        1. Odaberite **Apps** u izborniku s lijeve strane i za model-driven aplikaciju **Hiring Hub** odaberite ikonu **Play** za učitavanje u pregledniku.
        
        ![Odaberite model-driven aplikaciju Hiring Hub](../../../../../translated_images/3.2_31_Note_02_HiringHubApp.a09b6ea28b4fea8932809cb847cb0ea3d8faeb7b7b5604852de1f46ab1e9741b.hr.png)

       ![Kopiraj URL reda životopisa](../../../../../translated_images/3.2_31_CopyResumeURL.f6156f8792526129c2613922f0137221b2944fa8ffe7c04766d710521ad8765b.hr.png)

1. Zatim se vratite na tijek agenta, označite trenutnu vrijednost rezerviranog URL-a i izbrišite je.

       ![Izbriši rezervirano mjesto za URL reda životopisa](../../../../../translated_images/3.2_32_SelectResumeURLPlaceHolder.8db783de292428eaa8937242eba4a54ebb1df7bf4c1bc9391b016ee545fb2b9f.hr.png)

1. Zatim zalijepite kopirani URL u svojstvo **url** unutar svojstva `url property`.

       ![Zalijepi kopirani URL reda životopisa](../../../../../translated_images/3.2_33_PasteResumeRowURL.d7ba92493d7597b89f75e2f17f76846ac17a9ba89c2e36729dc6b5dc1599b047.hr.png)

1. Trebali biste vidjeti sljedeće. Izbrišite vrijednost ID-a `GUID` na kraju. Zamijenit ćemo je dinamičkim sadržajem - parametrom **ResumeId**.

       ![Izbriši rezervirano mjesto za URL pregleda životopisa](../../../../../translated_images/3.2_34_DeleteViewResumePlaceholderURL.7b26209eaeef6dc0a21b16140d05fe2f0e38de5f714575edd24d21dded58102a.hr.png)

1. Odaberite ikonu **munje** ili **fx ikonu** s desne strane.

      Na kartici **Dynamic Content** odaberite parametar **ResumeId** i kliknite **Add**.

       ![Parametar ResumeId](../../../../../translated_images/3.2_35_ResumeIdParameter.3dc710a7f5216944387f4d5f82c0a372eee23ee5259dec04147ad00e9c454d7d.hr.png)

1. **ResumeId** će biti dodan kao dinamički sadržaj. Sljedeće žuto označeno su detalji vašeg okruženja za model-driven aplikaciju **Hiring Hub**.

     | Parametar | Vrijednost | Objašnjenje |
     |----------|------------|---------|
     | **Organization URI** | GUID | URL organizacije okruženja Dataverse/Dynamics 365 |
     | **appid** | GUID | Za otvaranje određene model-driven aplikacije koristi se upitni parametar appid ili appname. U ovom slučaju koristi se appid |
     | **id** | GUID | Upitni parametar koji predstavlja ID reda životopisa |

       ![Dinamički sadržaj ResumeId](../../../../../translated_images/3.2_36_ResumeIdDynamicContent.a1a40dfb4a83b60f1b75b02160890e3fec41c2c7df8adf32e02d652a57c1ee87.hr.png)

1. Završili smo konfiguraciju akcije **Post card in a chat or channel** 👏🏻 Izađite iz panela za konfiguraciju akcije odabirom ikone **x**.

       ![Zatvori panel](../../../../../translated_images/3.2_37_CloseActionPanel.23d07107381411aa9494ef36fb240682a0727a63e6f15082074b34a1defd517b.hr.png)

1. Na kraju, konfigurirat ćemo posljednju akciju, **Respond to the agent**, slanjem teksta natrag agentu kako bismo završili obradu.

      U akciji **Respond to the agent**, odaberite **+Add an output**.

       ![Odaberite Dodaj izlaz](../../../../../translated_images/3.2_38_AddAnOutput.de1a0e49033cb077eb5d2c226152bbb06dc12fb95d0496c69d469eecdb46c0ae.hr.png)

1. Odaberite **Text** kao vrstu izlaza.

       ![Odaberite tekst kao vrstu izlaza](../../../../../translated_images/3.2_39_SelectText.4e1e82c35fe9d1b569b668092d405aa9b0c81fbe67e7de68a660f2083ed3afdd.hr.png)

1. Unesite sljedeće kao naziv izlaza.

       ![Naziv izlaza za završetak razgovora](../../../../../translated_images/3.2_40_EndConversationOutput.e392b58847d8439443c89459fccbbd88d4ea5e5fa562749b77407c46b9ff4ca4.hr.png)

1. Unesite sljedeće kao vrijednost za izlaz.

       ```text
       Finished
       ```

       ![Vrijednost izlaza za završetak razgovora](../../../../../translated_images/3.2_41_EndConversationOutputValue.2cb836900ee9fca802926676e613b077938f1106cc16e77ddd77af64ce92dcc8.hr.png)

1. Sada smo završili konfiguraciju tijeka agenta. Odaberite **Save draft** za spremanje tijeka agenta. Pojavit će se poruka o potvrdi nakon spremanja.

       ![Spremi nacrt](../../../../../translated_images/3.2_42_SaveDraft.1bb26eec40faf5d2c244d93f869344915e90423623e07e02cac2c1f8c73d1a4a.hr.png)

1. Prije objavljivanja tijeka agenta, moramo ažurirati detalje za tijek agenta. Odaberite karticu **Overview** i kliknite **Edit**.

      U polje za naziv tijeka unesite sljedeće.

       ```text
       Notify Teams Applicant channel
       ```      

      Zatim odaberite ikonu **Refresh** za ažuriranje opisa tijeka agenta pomoću AI-a.

      Zatim odaberite **Save** za spremanje ažuriranih detalja tijeka agenta.

       ![Uredi i spremi detalje](../../../../../translated_images/3.2_43_EditDetails.f0c9b53a9c1b29e4aa3c34774680559ae9173f77b3a37817bab2296b77ffcca7.hr.png)

1. Vratite se na karticu **Designer** i odaberite **Publish** za objavljivanje tijeka agenta. Pojavit će se poruka o potvrdi nakon spremanja.

       ![Objavi tijek agenta](../../../../../translated_images/3.2_44_PublishAgentFlow.3014e6de5e53aa5fc2021bf6e11b901c4990b4fbb4d4cee33cc6d5b6cc641ed8.hr.png)

1. Tijek agenta sada treba biti dodan kao alat u **Application Intake Agent**. Vratite se na **Hiring Agent** i odaberite karticu **Agents**, zatim odaberite **Application Intake Agent**.

       ![Odaberite Application Intake Agent](../../../../../translated_images/3.2_45_ApplicationIntakeAgent.0446b1762d0f499e880e7984f59669639193566f72539cd4fba5c62cd1fe8726.hr.png)

1. U odjeljku **Details** agenta, ažurirat ćemo polje **Description**. Kopirajte sljedeće i zalijepite na kraj teksta opisa.

       ```text
       i također obavijesti Teams Applicant kanal
       ```

       ![Ažuriraj opis agenta](../../../../../translated_images/3.2_46_UpdateAgentDescription.56344699cd3cc5e417e8f95362ed2288d0c0391f33bd98872e7e008a545175f0.hr.png)

1. Zatim ćemo dodati tijek agenta kao alat. Pomaknite se dolje i odaberite **+ Add**.

       ![Odaberite Dodaj](../../../../../translated_images/3.2_47_AddTools.c7557e272bd731129dffe9edebba3b04170d27806aaa14fffbe3d66b7b61808b.hr.png)

1. Odaberite tijek agenta kreiran ranije, **Notify Teams Applicant Channel**.

       ![Odaberite tijek agenta](../../../../../translated_images/3.2_48_NotifyTeamsApplicantChannelAgentFlow.5985f570786edef4eac93455f7a07978c0daf54e1371660bfd56a4c16b6aaf79.hr.png)

1. Zatim odaberite **Add and configure**.

       ![Odaberite Dodaj i konfiguriraj](../../../../../translated_images/3.2_49_AddAndConfigure.c2d6cccfa9e4bb23ff58b615ad16d0b3ade4ef867b73b9196a45df6990d8072f.hr.png)

1. U odjeljku **Inputs** tijeka agenta vidljivi su tri ulaza koje smo ranije konfigurirali u tijeku agenta. Prema zadanim postavkama, konfiguracija **Fill using** postavljena je na **Dynamically fill with AI**. Ovu postavku ćemo ostaviti nepromijenjenom jer će upit iz okidača događaja (u posljednjoj akciji, **Sends a prompt to the specified copilot for processing** - ovo su koraci 38-44 iz **Lab 3.1 - Automate uploading resumes to Dataverse received by email**) sadržavati vrijednosti parametara koje će AI izvući.

       ![Ulazi alata tijeka agenta](../../../../../translated_images/3.2_50_Inputs.9fbb57b83b533d5a60f957505bb1e5430886ec9e6c70c10ed1c641d6b33fcc21.hr.png)

1. Sada kada je alat dodan u **Application Intake Agent**, potrebno je ažurirati upute agenta. Odaberite ikonu **back arrow** za povratak na popis agenata.

       ![Odaberite ikonu strelice za povratak](../../../../../translated_images/3.2_51_SelectBack.6a9a55176d931895777822d3f9276d5d12ffe379a8860dd521e1c895e8188bba.hr.png)

1. Odaberite **Application Intake Agent** na kartici **Agents** u **Hiring Agent**.

       ![Odaberite Application Intake Agent](../../../../../translated_images/3.2_52_SelectApplicationIntakeAgent.039140313422e833389fd134b3a70a0eed11ba175ede5dbdc4abcce6004c7d2d.hr.png)

1. U polje **Instructions** unesite novi redak nakon uputa `2.Post-Upload`. Kopirajte i zalijepite sljedeće upute.

       ```text
       Proces za učitavanje životopisa putem e-pošte
       1. Kada primite poruku, **Pošaljite [ResumeId (text)] = "1680265f-5793-f011-b41b-7c1e525be9f7" i [ResumeTitle (text_1)] = "TAYLOR TESTPERSON (FICTITIOUS).pdf" i [ResumeNumber (text_2)]= "R01026" alatu "Notify Teams Applicant channel"** u podagentu "Application Intake Agent", pozovite [AGENT FLOW PLACEHOLDER]
       ```

       ![Ažuriraj upute za Application Intake Agent](../../../../../translated_images/3.2_53_PasteCopiedInstructions.f24ed715e907cf023449a54b894354ca1252b198e9be694eec2875f7f647f9c2.hr.png)

1. Označite tekst `[AGENT FLOW PLACEHOLDER`.

       ![Označi rezervirano mjesto](../../../../../translated_images/3.2_54_HighlightPlaceholder.6c3fcac3c8f4fb6e5cce2dbd6b6548b84652d009e20fa4a01183a9a1b42b24fb.hr.png)

1. Unesite znak kosu crtu, `/`, i odaberite alat **Notify Teams Applicant Channel**.

       ![Odaberite alat Notify Teams Applicant Channel](../../../../../translated_images/3.2_55_NotifyTeamsApplicatnChannelTool.2e3dd1e9ee9b2dfe10e1f2feb7e3b74b08856ce3afb16dafae1f2c4b73da904f.hr.png)
1. Tok agenta sada će biti pokrenut od strane **Application Intake Agent** prema uputama, nakon posljednje radnje (**Šalje upit određenom copilotu za obradu**) u okidaču događaja, koja šalje upit s vrijednostima parametara natrag agentu.

      Odaberite **Spremi** kako biste spremili ažurirane upute za **Application Intake Agent**.

       ![Odaberite Spremi](../../../../../translated_images/3.2_56_Save.6abb0131f96b20d3753b5990313eaea6a237bef2bf0e2103a2ee5ba570fd7c04.hr.png)

1. Upute će sada biti ažurirane nakon što je agent spremljen.

       ![Upute ažurirane](../../../../../translated_images/3.2_57_InstructionsUpdated.5bfbfe2ca1da16284358a9917246bd8676cd6c095839ed1c69361d992cacd2b3.hr.png)

1. Sada trebamo **Objaviti** **Hiring Agent**. Odaberite **Objavi** u gornjem desnom kutu, a u modalnom prozoru _Objavi ovog agenta_ koji se pojavi odaberite **Objavi**.

       ![Objavi Hiring Agent](../../../../../translated_images/3.2_58_PublishAgent.e7ec81c81b735de0cd11516aa944c759ea510e2b0bc9acf9f00d42d788896991.hr.png)

1. Nakon objave, pojavit će se poruka potvrde da je agent objavljen.

       ![Poruka potvrde](../../../../../translated_images/3.2_59_AgentPublished.d15e01232544cf08943260dfbf61c92339dbd187620349e7c5a43add4796ed12.hr.png)

Sada možemo testirati agenta!

### Lab 3.3 - Testiranje okidača događaja

1. Za izvršavanje okidača događaja, potrebno je poslati e-mail s priloženim PDF dokumentom životopisa. U Outlooku sastavite novu e-mail poruku.

     | Komponenta e-maila | Detalji |
     |----------|------------|
     | **Primatelj** | Koristite svoj prijavljeni korisnički račun kao vrijednost |
     | **Prilog datoteke** | Prenesite datoteku [TAYLOR TESTPERSON (FICTITIOUS)](../../../../../docs/operative-preview/test-data/resumes/TAYLOR%20TESTPERSON%20(FICTITIOUS).pdf)  |
     | **Tijelo poruke** | Kopirajte i zalijepite sljedeći tekst kao tijelo e-maila  |

       ```text
       Poštovani Voditelju zapošljavanja,

       Pišem kako bih izrazio svoj interes za poziciju Senior Power Platform Engineer u vašoj organizaciji. S više od devet godina iskustva u isporuci sigurnih i skalabilnih rješenja na Microsoftovim cloud platformama, uvjeren sam u svoju sposobnost da učinkovito doprinesem vašem timu.

       U svojoj posljednjoj ulozi kao Lead Power Platform Engineer, razvio sam automatizirani sustav za unos životopisa, smanjujući ručnu obradu i poboljšavajući pretraživanje. Isporučio sam aplikacije za upravljanje HR slučajevima, uveo tokove svjesne rješenja i implementirao PR provjere za poboljšanje vremena isporuke. Moje stručnosti uključuju Power Apps, Power Automate, Power Pages, Dataverse i niz Microsoft 365 usluga, kao i integraciju s Graph/REST API-ima i Azure Functions.

       Prije toga, razvio sam odobrenja za Teams s adaptivnim karticama, smanjujući vrijeme odobrenja na isti dan, te stvorio robusne okvire za rukovanje greškama. Moje iskustvo također uključuje migraciju zastarjelih tokova rada na Power Automate i izradu portala za samoposluživanje koje su usvojile stotine zaposlenika.

       Diplomirao sam računalne znanosti i certificiran sam kao Power Platform Developer (PL-400) i Solution Architect (PL-600). Također sam strastven u mentorstvu i volontirao sam s lokalnim grupama inovatora.

       U prilogu vam šaljem svoj životopis na razmatranje. Rado bih razgovarao o tome kako moje vještine i iskustvo odgovaraju vašim potrebama.

       Hvala vam na vremenu i razmatranju.

       Srdačan pozdrav,
       Taylor Testperson
       ```

       **Pošaljite** e-mail nakon što ga sastavite.

       ![Sastavite e-mail s priloženim PDF dokumentom](../../../../../translated_images/3.3_01_ComposeEmailWithAttachment.eccba1bbcc276b4373277b193a66d8818b712c6ab9468ee12902545522b670f7.hr.png)

1. U Power Automate maker portalu za tok okidača događaja, odaberite ikonu **Osvježi** kako biste vidjeli uspješno izvršen tok za poslani e-mail.

       ![Odaberite ikonu osvježi za pregled toka](../../../../../translated_images/3.3_02_FlowRun.0e99756ebc5fba371dc72719b0619736626934461e58db2dc153535cbabcc1e8.hr.png)

1. Vratite se u Copilot Studio u **Hiring Agent** i odaberite karticu **Aktivnosti**.

       ![Odaberite karticu Aktivnosti](../../../../../translated_images/3.3_03_SelectActivity.11d78735a8a2a1f64443d285deb47f2bacc5bd53ded039791215f9465dbc3f76.hr.png)

1. Kartica **Aktivnosti** će se učitati i prikazati sve aktivnosti **Hiring Agent**. Bit će aktivnost s nazivom **Automatski** koja ima status **Dovršeno**. Ova aktivnost predstavlja okidač događaja i tok agenta koji je pokrenut.

       ![Aktivnost dovršena](../../../../../translated_images/3.3_04_StatusComplete.dbe14ffb9414b0f4d869841426c4ca595d7a664bf13f4b5e2e29a4e251b9064c.hr.png)

1. Odaberite aktivnost i odaberite okidač događaja na karti aktivnosti. Na desnoj strani panela, primijetite kako ulazni parametri u upitu sadrže vrijednosti parametara `Resume Id`, `Resume Title` i `Resume Number` iz retka **Dataverse** koji je kreiran. Ovo je rezultat dinamičkih vrijednosti sadržaja konfiguriranih ranije u koracima 18 - 27 iz **Lab 3.1 - Automatizacija učitavanja životopisa u Dataverse primljenih putem e-maila**.

       ![Okidač događaja](../../../../../translated_images/3.3_05_EventTrigger.cbd73cd43a79e88e782d1e47ac8ddacdbe30d582a4da61a31010f44a9dacdd12.hr.png)

1. Vratite se u aplikaciju vođenu modelom **Hiring Hub** i u prikazu sustava **Resumes**, odaberite **Osvježi** kako biste osvježili prikaz. Novo kreirani redak za životopis koji je poslan e-mailom sada će biti naveden jer je kreiran putem okidača događaja.

       ![Redak životopisa kreiran](../../../../../translated_images/3.3_06_ResumeRowCreated.9ab850d8d7c066aad8531409b00a4de5f214b4d8d209d39fa0d493d5c55e041d.hr.png)

1. Vratite se u Copilot Studio i odaberite tok agenta **Notify Teams Applicant Channel** unutar **Application Intake Agent** na karti aktivnosti. Na desnoj strani panela, primijetite kako ulazi imaju vrijednosti iz retka Dataverse. Ovo je rezultat upita poslanog posljednjom radnjom (**Šalje upit određenom copilotu za obradu**) u okidaču događaja koji sadrži vrijednosti parametara iz novokreiranog retka Dataverse. Ovako možemo prenijeti vrijednosti parametara iz okidača događaja u tokove agenta.

       ![Odaberite tok agenta](../../../../../translated_images/3.3_07_NotifyTeamsApplicantChannel.9b6c4654197efca9c88dde72cfb38812038ef5f6bdce8c309046c02643092bb6.hr.png)

1. Na kraju, pogledajmo adaptivnu karticu objavljenu u kanalu u **Microsoft Teams**. U kanalu ćemo vidjeti adaptivnu karticu koja prikazuje informacije o novokreiranom retku životopisa u Dataverse. Pređite mišem preko hiperveze na početku adaptivne kartice, primijetite kako je URL prikaz sustava životopisa koji smo ranije konfigurirali u JSON (koraci 15 - 19 iz **Lab 3.2 - Obavijesti kanal Teams pomoću adaptivne kartice**) sadržaju adaptivne kartice.

       ![URL prikaza sustava tablice životopisa na adaptivnoj kartici](../../../../../translated_images/3.3_08_AdaptiveCardResumeTableURL.5a59821d60c8698e5c9e4746806b975bbdf3c4400dc0bb02a53f350bdea569e9.hr.png)

1. Odaberite hipervezu i bit ćete preusmjereni na prikaz sustava životopisa u aplikaciji vođenoj modelom **Hiring Hub** u vašem pregledniku.

       ![Prikaz sustava životopisa u aplikaciji vođenoj modelom Hiring Hub](../../../../../translated_images/3.3_09_ResumeTableSystemView.81f52ab85aadda7d9131ced31d024fb4b411ccf600dd230d9d7e931c476e271c.hr.png)

1. Vratite se na adaptivnu karticu objavljenu u kanalu u Microsoft Teams. Ovaj put, pređite mišem preko **Pogledaj životopis**, što je `Action.OpenURL` radnja adaptivne kartice. Primijetite kako je URL redak životopisa koji smo ranije konfigurirali u JSON (koraci 30 - 36 iz **Lab 3.2 - Obavijesti kanal Teams pomoću adaptivne kartice**) sadržaju adaptivne kartice.

       ![URL retka životopisa na adaptivnoj kartici](../../../../../translated_images/3.3_10_AdaptiveCardResumeRowURL.2063a075c2d4adec27dfcc2ea4c01a385d791e0c4fc127caba912bde14bf77d6.hr.png)

1. Odaberite radnju i bit ćete preusmjereni na obrazac retka životopisa u aplikaciji vođenoj modelom **Hiring Hub** u vašem pregledniku.

       ![Redak životopisa u aplikaciji vođenoj modelom Hiring Hub](../../../../../translated_images/3.3_11_ResumeRow.6f051ed512d396712a04ee98319d6643516e0bbfbf8a9de07d3df7d264563b9c.hr.png)

## ✅ Misija završena

Čestitamo! 👏🏻 Odličan posao, Operative.

✅ Okidač događaja: kreirali ste okidač događaja koji prenosi vrijednosti parametara Dataverse u tok agenta.  
✅ Izgradili tok agenta: koristi vrijednosti parametara Dataverse za objavu adaptivne kartice u kanalu u Microsoft Teams kako bi se obavijestio HR tim za zapošljavanje.  
✅ Ažurirali upute za podređene agente: za pokretanje toka nakon što je okidač događaja dovršen.  

Ovo omogućuje **Hiring Agent** da radi autonomno kad god se životopisi primaju kao privitci e-maila i obavještava HR tim za zapošljavanje za ručni pregled.

Ovo je kraj **Lab 03 - Automatizacija e-mailova prijava kandidata**, odaberite poveznicu ispod za prelazak na sljedeću lekciju.

⏭️ [Prijeđite na lekciju **Pisanje uputa za agente**](../04-agent-instructions/README.md)

## 📚 Taktički resursi

📖 [Učinite svog agenta autonomnim u Copilot Studio](https://learn.microsoft.com/training/modules/autonomous-agents-online-workshop/?WT.mc_id=power-188561-ebenitez)  

📖 [Dodavanje okidača događaja](https://learn.microsoft.com/microsoft-copilot-studio/authoring-trigger-event?WT.mc_id=power-188561-ebenitez)  

📖 [Korištenje tokova agenta s vašim agentom](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-188561-ebenitez)  

📖 [Uvod u okidače Power Automate](https://learn.microsoft.com/power-automate/triggers-introduction?WT.mc_id=power-188561-ebenitez)  

📖 [Korištenje tokova Power Automate s agentima](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create?WT.mc_id=power-188561-ebenitez)  

📖 [Prevencija gubitka podataka za Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention?WT.mc_id=power-188561-ebenitez)  

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.