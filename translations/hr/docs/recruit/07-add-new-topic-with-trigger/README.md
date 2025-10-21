<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c04b3587170139bc23e3b5cfc24c89ac",
  "translation_date": "2025-10-21T00:01:15+00:00",
  "source_file": "docs/recruit/07-add-new-topic-with-trigger/README.md",
  "language_code": "hr"
}
-->
# 🚨 Misija 07: Dodavanje nove teme s okidačem i čvorovima

## 🕵️‍♂️ KODNO IME: `OPERACIJA OSTANI NA TEMI`

> **⏱️ Vrijeme trajanja operacije:** `~60 minuta`

🎥 **Pogledajte vodič**

[![Sličica videa okidača](../../../../../translated_images/video-thumbnail.a84cf7cb473be282861469420c5e2c16adb53bcfd64c7c07fbd579e8d32bf8b2.hr.jpg)](https://www.youtube.com/watch?v=7iPAZaA8nJs "Pogledajte vodič na YouTubeu")

## 🎯  Kratak opis misije

Izradili ste agenta. Sluša, uči i odgovara na pitanja - ali sada je vrijeme da postanete taktičniji. U ovoj misiji ćete se detaljno pozabaviti i naučiti svog agenta kako precizno odgovarati na specifične upite.

Uz Teme i Okidače, vaš agent može:

- Prepoznati namjeru

- Usmjeravati razgovore logikom

- Prikupljati i pohranjivati varijable

- Pokretati tokove i poduzimati akcije

Ne gradite samo dijalog, već povezujete njegovu odluku s "moždanim korteksom". Dobrodošli u Neuralni Nexus.

## 🔎 Ciljevi

U ovoj misiji naučit ćete:

1. Razumjeti što su teme i njihovu ulogu u stvaranju strukturiranih razgovora za vašeg agenta
1. Učiti anatomiju tema, uključujući okidače i čvorove razgovora
1. Istraživati različite vrste čvorova razgovora i kako koristiti Power Fx za dinamičku logiku
1. Kreirati prilagođene teme od nule za rukovanje specifičnim korisničkim zahtjevima i zadacima
1. Izgraditi funkcionalnu temu koja se povezuje s podacima SharePointa koristeći konektore i alate

## 🤔 Što je Tema?

Tema je strukturirani razgovor koji pomaže vašem agentu da odgovori na specifična korisnička pitanja ili zadatke. Zamislite temu kao mini-razgovor ili zadatak koji vaš agent može obraditi. Svaka tema je dizajnirana da odgovori na specifično korisničko pitanje ili zahtjev.

### 🌌 Svrha teme

Postoje tri uobičajene svrhe tema, ovisno o potrebama korisnika:

**Informativna** - odgovara na pitanja poput:

- `Što je …?`
- `Kada će …?`
- `Zašto …?`
- `Možete li mi reći …?`

**Izvršenje zadatka** - pomaže korisnicima _nešto učiniti_:

- `"Želim …"`
- `"Kako da …?"`
- `"Trebam …?"`

**Rješavanje problema** - rješava probleme:

- `Nešto ne radi …`
- `Pojavljuje mi se poruka o grešci …`
- `Vidim nešto neočekivano …?`

Također možete kreirati teme za nejasna pitanja poput `Trebam pomoć`, koja traže od korisnika više detalja prije nastavka.

## 🐦 Zašto su teme korisne?

Teme pomažu:

- Organizirati znanje vašeg agenta.

- Učiniti razgovore prirodnijima.

- Učinkovito rješavati korisničke probleme.

## 🪺 Vrste tema

1. **Sistemske teme** - ugrađene su i obrađuju uobičajene događaje poput:
    - Započinjanja razgovora
    - Završavanja razgovora
    - Rukovanja greškama
    - Traženja prijave korisnika
    - Eskalacije prema ljudskom agentu

1. **Prilagođene teme** - kreirate ih za rukovanje specifičnim zadacima ili pitanjima poput:
    - Zahtjev za dopust zaposlenika
    - Zahtjev za novim ili zamjenskim uređajem

![Vrste tema](../../../../../translated_images/7.0_01_Topics.6e55d2e01c1cc0994b7af05be3c1629b78d46b37cc82f59c7893d4ad90af707e.hr.png)

## 🧬 Anatomija teme

Svaka tema obično sadrži sljedeće.

### 🗣️ Okidači

To su riječi ili rečenice koje korisnici mogu izgovoriti kako bi pokrenuli temu.

**Primjeri:**

Za temu zahtjeva za dopust, okidači mogu biti:

- `Želim uzeti godišnji odmor`
- `Zahtjev za godišnji`
- `Podnošenje zahtjeva za dopust`
- `Kako podnijeti zahtjev za dopust?`

Za temu zahtjeva za uređaj, okidači mogu biti:

- `Trebam novi uređaj`
- `Mogu li zatražiti uređaj?`
- `Možete li mi pomoći s zahtjevom za uređaj?`

### 💬 Čvorovi razgovora

Tema se sastoji od čvorova koji su koraci koje agent slijedi nakon što se tema pokrene. Povezujete ove korake kako biste izgradili tok razgovora koji vaš agent slijedi tijekom interakcije s korisnicima.

Zamislite ih kao upute ili radnje poput:

- Postavljanje pitanja korisniku
- Slanje poruka
- Pozivanje vanjske usluge poput sustava za upravljanje dopustima
- Postavljanje ili provjera varijabli
- Korištenje uvjeta za grananje razgovora
- Usmjeravanje na drugu temu

![Čvorovi razgovora](../../../../../translated_images/7.0_03_ConversationNodes.7b1d93b7d4522d544d7f9eed597a5ef30b9f96ee1670efd048528ce13423481a.hr.png)

Slijede glavne vrste čvorova koje možete dodati agentu:

#### Slanje poruke

- **Svrha** - šalje poruku korisniku.
- **Primjer** - `Hvala na vašem zahtjevu! Pomoći ću vam s tim.`

Ovaj čvor omogućuje vašem agentu slanje poruka korisnicima, koje mogu biti jednostavan tekst ili bogat sadržaj poput slika, videa, kartica, brzih odgovora i prilagodljivih kartica.

Možete personalizirati poruke koristeći varijable, dodati više varijacija poruka za raznolikost, pa čak i prilagoditi govor za kanale s glasovnim mogućnostima.

!!! tip
    Zamislite to kao blok "reci nešto" koji pomaže vašem agentu da jasno i interaktivno komunicira s korisnicima.

#### Postavljanje pitanja

- **Svrha** - postavlja korisniku pitanje i čeka njegov odgovor.
- **Primjer** - `Koji su vaši datumi godišnjeg odmora?`

Ovaj čvor se koristi za postavljanje specifičnih informacija korisnicima tijekom razgovora i pohranjivanje njihovih odgovora u varijable za kasniju upotrebu.

Možete prilagoditi vrstu pitanja poput unosa teksta ili koristiti entitete za definirani popis vrijednosti koje korisnik odabire, te definirati kako bi se agent trebao ponašati ako korisnik da nevažeći odgovor ili preskoči pitanje.

Također podržava bogat sadržaj poput slika i brzih odgovora, te omogućuje fino podešavanje validacije, ponovnog postavljanja pitanja i postavki prekida kako bi tok razgovora bio gladak.

!!! tip
    Zamislite to kao blok "pitaj i slušaj" koji pomaže vašem agentu da strukturirano komunicira s korisnicima prema vašim uputama.

#### Postavljanje s prilagodljivom karticom

- **Svrha** - šalje bogatu, interaktivnu karticu koristeći JSON.
- **Primjer** - kartica koja prikazuje kalendar za odabir datuma.

Ovaj čvor prikazuje bogate, interaktivne kartice koje korisnici mogu ispuniti i poslati, poput obrazaca s tekstualnim poljima, gumbima i slikama. Prikuplja unos korisnika i pohranjuje ga u varijable koje vaš agent može koristiti kasnije u razgovoru.

!!! tip
    Zamislite to kao prilagodljivi "graditelj obrazaca" blok koji čini vašeg agenta zanimljivijim i sposobnim za prikupljanje detaljnih informacija od korisnika.

#### Dodavanje uvjeta

- **Svrha** - dodaje logiku u razgovor. Provjerava nešto i odlučuje što dalje.
- **Primjer** - ako korisnik kaže `Da`, prijeđi na sljedeći korak. Ako `Ne`, završi razgovor.

Ovaj čvor stvara točke odluke u toku razgovora vašeg agenta provjeravajući zadovoljava li varijabla određene kriterije. Na temelju toga je li uvjet istinit ili lažan, agent slijedi različite putanje.

!!! tip
    Zamislite to kao blok "ako-onda" koji pomaže vašem agentu donositi odluke ovisno o unosu korisnika ili pohranjenim podacima u varijablama.

#### Upravljanje varijablama

- **Svrha** - pohranjuje ili briše informacije (nazvane varijable) tijekom razgovora.
- **Primjer** - sprema datum koji je korisnik odabrao u čvoru Postavljanje pitanja koji prikazuje prilagodljivu karticu.

Ovaj čvor omogućuje pohranjivanje i upravljanje informacijama tijekom razgovora, to može biti ime korisnika, odgovor ili preferencije. Možete koristiti različite vrste varijabli poput teksta, brojeva ili datuma, a mogu biti ograničene na jednu temu, dijeljene između tema (globalne) ili čak preuzete iz sustava ili okruženja.

!!! tip
    Zamislite to kao "kutiju za pamćenje" koja pomaže vašem agentu da zapamti informacije i koristi ih dok razgovor s korisnikom traje.

#### Upravljanje temama

- **Svrha** - premješta razgovor na drugu temu ili korak unutar teme, prenosi razgovor ili završava temu ili razgovor.
- **Primjer** - preusmjeravanje na temu "Politika dopusta".

Ovaj čvor omogućuje vašem agentu da prelazi s jedne teme na drugu bez ponovnog pokretanja razgovora, završava temu, prenosi ili završava razgovor, ili ide na drugi korak unutar iste teme. Pomaže korisnicima da se glatko kreću kroz različite dijelove toka razgovora, a možete prenositi varijable između njih kako biste zadržali kontekst.

!!! tip
    Zamislite to kao blok "idi na drugi odjeljak/korak" koji pomaže vašem agentu da bude fleksibilan u komunikaciji s korisnicima.

#### Dodavanje alata

- **Svrha** - povezuje se s alatima poput konektora, tokova agenta, upita, prilagođenog pretraživanja, pretraživanja, vještina, protokola konteksta modela.
- **Primjer** - Tok agenta se izvršava nakon što korisnik podnese zahtjev za godišnji odmor.

Ovaj čvor daje vašem agentu mogućnost interakcije s vanjskim sustavima ili obavljanja specifičnih zadataka, poput slanja e-mailova, provjere vremenskih uvjeta ili pristupa bazama podataka. Možete dodati alate koristeći ugrađene konektore, prilagođene API-je, tokove agenta, upite ili se povezati s poslužiteljima Model Context Protocol (MCP), pa čak i _grafičkim korisničkim sučeljem_ za automatizaciju desktop aplikacija putem alata za korištenje računala.

!!! tip
    Zamislite alate kao "blokove akcije" koji daju vašem agentu supermoći da radi stvari izvan _razgovora_, poput pozivanja API-ja, pokretanja procesa ili automatskog prikupljanja korisničkog unosa.

#### Čvor generativnih odgovora

- **Svrha** - koristi veliki jezični model za generiranje prirodnih, ljudskih odgovora na temelju korisničkog pitanja i povezanih podataka.
- **Primjer** - koristi povezani izvor znanja koji sadrži informacije o pravima na godišnji odmor kako bi odgovorio na korisnička pitanja o zahtjevima za godišnji odmor.

Ovaj čvor omogućuje vašem agentu da odgovara na korisnička pitanja koristeći informacije iz različitih izvora znanja, poput web stranica, dokumenata, SharePointa ili prilagođenih podataka. Može se koristiti kao rezervna opcija kada se ne pronađe odgovarajuća tema, ili unutar teme za pružanje detaljnijih, dinamičnih odgovora na temelju specifičnih izvora koje ste konfigurirali za vašeg agenta.

!!! tip
    Zamislite to kao "pametan blok odgovora" koji pomaže vašem agentu da daje korisne, točne odgovore pretražujući pouzdane sadržaje koje definirate.

#### Čvor HTTP zahtjeva

- **Svrha** - povezuje vašeg agenta s vanjskim sustavima slanjem API poziva (na primjer `GET` ili `POST`) za dohvaćanje ili ažuriranje podataka.
- **Primjer** - kada korisnik pita za stanje svojih dana godišnjeg odmora, agent izvršava `GET` zahtjev prema sustavu za upravljanje dopustima, izvlači `remainingLeaveDays` iz odgovora API-ja i odgovara korisniku s vrijednošću.

Ovaj čvor omogućuje vašem agentu povezivanje s vanjskim sustavima slanjem REST API poziva, poput `GET` ili `POST` zahtjeva. Možete prilagoditi zahtjev s zaglavljima, sadržajem tijela, pa čak i koristiti Power Fx za uključivanje dinamičkih podataka, zatim pohraniti odgovor u varijable za kasniju upotrebu u razgovoru.

!!! tip
    Zamislite to kao blok "dohvati informacije" koji pomaže vašem agentu da komunicira s drugim uslugama, poput dohvaćanja korisničkih detalja ili slanja podataka u drugi sustav.

#### Slanje događaja

- **Svrha** - omogućuje vašem agentu slanje ne-poruka akcija, poput ažuriranja sustava ili pokretanja alata - prema klijentu ili kanalu, pomažući mu da obavlja zadatke.
- **Primjer** - reagiranje na korisnika koji se pridružuje chatu prikazivanjem poruke dobrodošlice.

Ovaj čvor omogućuje vašem agentu slanje ne-poruka akcija vanjskim sustavima ili kanalima, koji zatim odlučuju kako reagirati. Svakom događaju dajete ime i pridružujete vrijednost, koja može biti jednostavan broj ili tekst, varijabla ili Power Fx formula, a šalje se kao JSON objekt.

!!! tip
    Zamislite to kao blok "tihi okidač" koji pomaže vašem agentu da obavlja stvari u pozadini ili komunicira s vanjskim alatima bez potrebe da korisnik išta kaže.

## 🏋🏻‍♀️ Korištenje Power Fx u vašim čvorovima

U Copilot Studiju, Power Fx je low-code programski jezik koji se koristi za dodavanje logike i dinamičkog ponašanja vašem agentu. To je isti jezik koji se koristi u Microsoft Power Apps, a dizajniran je da bude jednostavan i sličan Excelu, što ga čini lakim za programere i ne-programere.

![Power Fx izraz](../../../../../translated_images/7.3_13_EnterFormula.d17cc9f73e01e1cab8e2420a55bcb726ae0a0e55673f81ee3d7fe12d20148b92.hr.png)

### Što Power Fx može učiniti u temama

- Postavljanje i manipulacija varijablama
      - Primjer: `Set(userName, "Adele Vance")`
- Kreiranje uvjeta
      - Primjer: `If(score > 80, "Pass", "Fail")`
- Formatiranje i transformacija podataka
      - Primjer: `Text(DateValue, "dd/mm/yyyy")`

### Zašto koristiti Power Fx?

- **Fleksibilan:** možete graditi logiku bez pisanja punih linija koda.

- **Poznat:** ako ste koristili Excel formule, osjećaj je vrlo sličan.

- **Moćan:** omogućuje personalizaciju razgovora, validaciju unosa i kontrolu ponašanja vašeg agenta na temelju korisničkih podataka.

## 🏗️ Kako kreirati i uređivati teme?

Postoje dva načina na koja možete kreirati i uređivati teme za vaše agente.

### 1. Kreiranje od nule

Ovo vam omogućuje izgradnju prilagođenih tokova razgovora od nule, a možete dodavati ili uklanjati čvorove prema potrebi tijekom uređivanja vaše teme.

![Dodavanje teme](../../../../../translated_images/7.0_04_AddATopic.111df124a4a7ff8b41e3f577fbef08885ac52d9d6c0c705a82f5968e5ccc384d.hr.png)

#### Zašto je ovo korisno

- Omogućuje vam potpunu kontrolu nad načinom na koji vaš agent odgovara.
- Možete prilagoditi logiku koristeći varijable, Power Fx i uvjete.
- Savršeno za izgradnju prilagođenih iskustava za specifične poslovne potrebe.

### 2. Kreiranje s Copilotom
Ovo vam omogućuje da opišete što želite koristeći prirodni jezik, a Copilot će za vas izgraditi razgovor. Isto vrijedi i kada uređujete svoju temu, koristite prirodni jezik i Copilot će pregledati i izmijeniti temu za vas.

#### Što Copilot podržava

- Može kreirati i uređivati:
      - Čvorove poruka
      - Čvorove pitanja
      - Čvorove uvjeta
- Ne podržava napredne postavke poput ponovnog postavljanja pitanja korisniku ako ne odgovori ili upravljanja prekidima tijekom pitanja. Te postavke i dalje možete ručno prilagoditi ako je potrebno.

#### Zašto je ovo korisno

- Ubrzava razvoj uz pomoć AI asistencije.
- Omogućuje vam da se usredotočite na logiku i korisničko iskustvo umjesto na ponavljajuće postavke.
- Olakšava iteraciju i poboljšanje tijeka razgovora uz minimalan napor.

#### ✨ Primjeri upita

- **Kreiraj temu**
      - `Prihvati ime korisnika, dob i datum rođenja, a zatim ponovi njihove odgovore`
      - `Prikupi adresu korisnika, državu i poštanski broj. Korisnik bi trebao moći ponoviti svako pitanje do 4 puta`

- **Uredi temu**
      - `Dodaj pitanje o datumu rođenja korisnika`
      - `Sažmi prikupljene informacije u Adaptive Card.`

## 👩🏻‍🎨 U redu, kako dizajnirati teme za mog agenta?

### 🧙🏻‍♂️ Korak 1 - razumjeti što korisnici trebaju

Započnite identificiranjem uobičajenih pitanja ili zadataka koje će korisnici postavljati vašem agentu. To mogu biti:

- Pitanja koja korisnici često postavljaju, poput `koje su moje pogodnosti za bolovanje?`
- Uobičajeni zadaci koje korisnici žele obaviti, poput podnošenja obrasca
- Problemi s kojima se korisnici često suočavaju, poput problema s prijavom

### 📦 Korak 2 - Grupirajte scenarije

Organizirajte potrebe korisnika u tri kategorije na temelju onoga što smo ranije naučili - svrha teme:

- Informativno - korisnik želi saznati nešto
- Završetak zadatka - korisnik želi nešto obaviti
- Rješavanje problema - korisniku je potrebna pomoć u rješavanju problema

### 🗺️ Korak 3 - Mapirajte razgovor

Skicirajte jednostavan tijek razgovora o tome kako bi agent trebao odgovoriti

- Započnite pozdravom ili potvrdom
- Postavite dodatna pitanja za prikupljanje detalja
- Pružite odgovore ili izvršite radnje

!!! tip
    Neka razgovor bude kratak i usmjeren. Pitajte samo ono što je potrebno.

### 🔀 Korak 4 - Rukovanje različitim vrstama razgovora

Dizajnirajte za oba:

- **Jednokratni** - jedno pitanje, jedan odgovor

- **Višekratni** - razgovor s više pitanja i odgovora

Primjer:

- Korisnik: `Želim podnijeti zahtjev za godišnji odmor.`

- Agent: `Naravno! Koji datum želite da vaš odmor započne?`

- Korisnik: `15. srpnja`

- Agent: `Razumijem. A kada će vaš odmor završiti?`

- Korisnik: `22. srpnja.`

- Agent: `Hvala! Koji je razlog vašeg odmora?`

- Korisnik: `Obiteljski odmor.`

- Agent: `Hvala na detaljima. Podnio sam vaš zahtjev za odmor od 15. srpnja do 22. srpnja za obiteljski odmor. Uskoro ćete dobiti potvrdu.`

### 🤖 Korak 5 - Koristite AI za neočekivana pitanja

Čak i ako ste dizajnirali temu za zahtjeve za odmor, korisnici mogu postavljati pitanja koja nisu izravno obuhvaćena. Tu dolaze do izražaja AI značajke poput sustavne teme _Conversational boosting_.

Ova tema uključuje čvor generativnih odgovora, koji omogućuje vašem agentu da odmah koristi povezane izvore znanja. Svi izvori znanja dodani na razini agenta automatski se uključuju u čvor generativnih odgovora unutar sustavne teme _Conversational boosting_.

#### Primjer

- Korisnik: `Mogu li prenijeti neiskorištene dane godišnjeg odmora u sljedeću godinu?`

Ovo pitanje možda nije dio unaprijed definiranog tijeka teme, posebno ako vaša tema pokriva samo podnošenje zahtjeva za odmor.

#### Kako AI pomaže

Ako je vaš agent povezan s dokumentima o HR politici vaše tvrtke ili internom web stranicom, AI može:

- Pretražiti relevantnu politiku o godišnjem odmoru
- Razumjeti i sažeti pravila
- Agent odgovara: `Prema HR politici, možete prenijeti neiskorištene dane godišnjeg odmora u sljedeću kalendarsku godinu. Za više detalja, pogledajte odjeljak o politici odmora na HR portalu.`

#### Zašto je ovo korisno

- Ne morate ručno kreirati temu za svako pitanje vezano uz politiku.
- AI može izvući točne odgovore iz pouzdanih izvora znanja.
- Poboljšava korisničko iskustvo čineći da se agent čini pametnijim i responzivnijim.

### 🔬 Korak 6 - Testirajte temu, tijek razgovora

Prije objavljivanja vaše teme:

- Testirajte koristeći stvarna pitanja ili stvarne uzorke unosa.
- Provjerite zvuči li prirodno i korisno.

!!! tip
    Primijenite poboljšanja na svoju temu prema potrebi dok testirate, poput dodavanja više čvorova ili uklanjanja čvorova umjesto preusmjeravanja na drugu temu.

### ⚠️ Korak 7 - Izbjegavajte dupliciranje sadržaja web stranice

Nemojte kopirati ono što je već na vašoj web stranici.

- Usredotočite se na teme o kojima korisnici često pitaju.
- Dodajte nove teme na temelju povijesti razgovora ili zahtjeva za podršku.

### ✨ Primjer tijeka razgovora

Ispod je primjer teme koja obrađuje zahtjeve za odmor.

#### Korak 1: Okidač

Korisnik upisuje,

`Želim podnijeti zahtjev za godišnji odmor`

#### Korak 2: Agent traži detalje koristeći Adaptive card

Agent pita,

`Naravno! Koje datume želite uzeti slobodno?`

Adaptive card ima kontrolu za odabir datuma početka i završetka.

#### Korak 3: Korisnik daje datume

Korisnik odabire datum početka kao 5. kolovoza 2025. i datum završetka kao 10. kolovoza 2025., te šalje karticu. Vrijednosti datuma se pohranjuju u izlaz Adaptive card-a kao varijable.

#### Korak 4: Izvršava se Cloud flow

Izvršen je Power Automate cloud flow koji kreira novi zahtjev u sustavu za upravljanje odmorima i šalje e-mail kako bi obavijestio menadžera o zahtjevu za odmor.

#### Korak 5: Pošaljite poruku potvrde korisniku

Agent odgovara,

`Vaš zahtjev za godišnji odmor od 5. kolovoza do 10. kolovoza je podnesen. Vaš menadžer će ga pregledati i uskoro će vam se javiti.`

## 🧪 Laboratorij 07 - Dodajte novu temu s čvorovima razgovora

Sada ćemo naučiti kako dodati novu temu s okidačem i alatima. Ovaj laboratorij će pokriti kreiranje teme od nule kako biste razumjeli kako prilagoditi teme svojim potrebama.

- [7.1 Dodajte novu temu od nule](../../../../../docs/recruit/07-add-new-topic-with-trigger)
- [7.2 Definirajte ulazne i izlazne okidače](../../../../../docs/recruit/07-add-new-topic-with-trigger)
- [7.3 Dodajte alat koristeći konektor](../../../../../docs/recruit/07-add-new-topic-with-trigger)

### ✨ Primjer korištenja

**Kao** zaposlenik

**Želim** znati koji su uređaji dostupni

**Kako bih** imao popis dostupnih uređaja

Krenimo!

### Preduvjeti

1. **SharePoint lista**

    Koristit ćemo **Devices** SharePoint listu iz [Lekcija 00 - Postavljanje tečaja - Korak 3: Kreirajte novu SharePoint stranicu](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Ako niste postavili **Devices** SharePoint listu, vratite se na [Lekcija 00 - Postavljanje tečaja - Korak 3: Kreirajte novu SharePoint stranicu](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. **Contoso Helpdesk Agent**

    Koristit ćemo istog agenta kreiranog ranije u [Lekcija 06 - Kreirajte prilagođenog agenta koristeći prirodni jezik s Copilotom i povezivanjem s vašim podacima](../06-create-agent-from-conversation/README.md).

### 7.1 Dodajte novu temu od nule

1. Odaberite **Karticu Teme** blizu imena agenta. Ako je ne vidite, odaberite **+6** i vidjet ćete **Teme** navedene.

    ![Odaberite Teme](../../../../../translated_images/7.1_01_Topics.789ffa4f75830b5f25fb1eeb8fa3e8ba3810b95870cb3dc49d80d8f4ba15a00a.hr.png)

1. Kartica **Teme** će se učitati i prema zadanim postavkama prikazat će se _Prilagođene_ teme. Možete filtrirati teme prema Sve, Prilagođene i Sustavne. Prilagođene i sustavne teme koje trenutno vidite automatski su kreirane kada je agent postavljen.

    Odaberite **+ Dodaj temu** i odaberite **Od nule**.

    ![Kreirajte temu od početka](../../../../../translated_images/7.1_02_FromBlank.f3fe83fad24825f8eb498b19af8e472810f657868613b96b3b4e033fa1042e75.hr.png)

1. Unesite naziv za temu. Kopirajte i zalijepite sljedeće.

    ```text
    Available devices
    ```

    ![Nazovite temu](../../../../../translated_images/7.1_03_TopicName.06eb34ebe94516c1d898b5dff183f9586f7526f9316bc122dca641ac29967966.hr.png)

1. Unesite opis okidača koji opisuje što tema radi. Kopirajte i zalijepite sljedeće.

    ```text
    This topic helps users find devices that are available from our SharePoint Devices list. User can ask to see available devices and it will return a list of devices that are available which can include laptops, smartphones, accessories and more.
    ```

    ![Unesite naziv i opis za okidač](../../../../../translated_images/7.1_04_TriggerDescription.cb748c0358b3af249fcc0fdb0b262185ffed14d8cf628186b8a65ad4bbf14172.hr.png)

### 7.2 Definirajte ulazne i izlazne okidače

1. Sljedeće, dodajemo novu ulaznu varijablu koju će generativni AI koristiti u svojoj orkestraciji za izdvajanje vrijednosti vrste uređaja iz korisničke poruke. Odaberite **Više elipsa (...)** u temi i odaberite **Detalji** za prikaz okna s detaljima teme.

    ![Odaberite Detalji teme](../../../../../translated_images/7.2_01_SelectTopicDetails.cc1b97a86718e101084c366514cc306fe82243a014a44c579394e0f70ba5ca53.hr.png)

1. **Okno s detaljima teme** sada je učitano. Odaberite karticu **Ulaz**.

    ![Kartica Ulaz](../../../../../translated_images/7.2_02_SelectInputTab.d0b900eb02a8f982324f59e3b7aca34c2cdba78263acdc9301225e1c3e6338b6.hr.png)

1. Odaberite **Kreiraj novu varijablu**.

    ![Kreirajte novu ulaznu varijablu](../../../../../translated_images/7.2_03_CreateANewVariable.0d45780268d9b6250617c45a9ddd557cdaa23945b66539b313ca8d74f2c96cc2.hr.png)

1. Unesite naziv za varijablu. Kopirajte i zalijepite sljedeće.

    ```text
    VarDeviceType
    ```

    ![Naziv ulazne varijable](../../../../../translated_images/7.2_04_VariableName.56555922eab13cad52fa29d846f4e515d82c2e9bf61c86705f080a1ba4f3b1af.hr.png)

1. Sada trebamo definirati naše ulazne i izlazne varijable. Sljedeće su svojstva koja se mogu definirati za ulaze i izlaze teme.

    | Polje    | Vrijednost |
    | ---------- | :--------- |
    | Kako će agent popuniti ovaj ulaz? | Određuje kako agent popunjava ovu varijablu vrijednošću prije pokretanja teme. Prema zadanim postavkama postavljeno je na _Dinamički popuni najboljom opcijom_. Inače možete nadjačati ulaz vrijednošću umjesto da pitate korisnika |
    | Tip podataka varijable  | Tip podataka varijable. Podržani tipovi podataka su `String`, `Boolean`, `Number`, `Date`, `DateTime`, `DateTimeNoTimeZone`, `Time`, `Record`, `Table`, `Unspecified`, `From sample data` |
    | Prikazni naziv   | Naziv varijable   |
    | Identificiraj kao  | Tip entiteta za agenta kako bi uhvatio ispravnu vrijednost tipa  |
    | Opis    | Opis pomaže agentu automatski popuniti ulaze prije pokretanja teme ili generirati pitanja za traženje vrijednosti   |

    Polja _Kako će agent popuniti ovaj ulaz?_, _Tip podataka varijable_ i _Prikazni naziv_ mogu ostati nepromijenjena. Ažurirajte svojstvo **Identificiraj kao** na **Cijeli korisnički odgovor**.

    ![Ažurirajte Identificiraj kao](../../../../../translated_images/7.2_05_IdentifyAs.a502101e6f60c27ed8c8b1eff049b8ceedd0531845b932f9b7608ad3d8220090.hr.png)

1. Kopirajte i zalijepite sljedeće kao opis.

    ```text
    List of possible values: Laptop, Desktop, Smartphone
    ```

    ![Opis](../../../../../translated_images/7.2_06_InputDescription.844e1776080e595c6c221bcc33d7a269abcc7e4755c8f11b284c3950f42166b5.hr.png)

1. Sljedeće, definirajmo naš izlaz za temu. Odaberite karticu **Izlaz**.

    ![Odaberite karticu Izlaz](../../../../../translated_images/7.2_07_SelectOutputTab.ab5aa0a2f385f1492df5a67f8f2cbed752dc0258c1e1ddb9928d204405ec403a.hr.png)

1. Odaberite **Kreiraj novu varijablu**.

    ![Kreirajte novu izlaznu varijablu](../../../../../translated_images/7.2_08_CreateANewVariable.5518205f121014ff4757af062bedfd38ce768c8f38291dd9d6489d67cd5d5dc8.hr.png)

1. Ažurirajte sljedeća svojstva.

    **Naziv varijable** - Kopirajte i zalijepite sljedeće.

    ```text
    VarAvailableDevices
    ```

    **Tip podataka varijable** - Odaberite **Tablica** kao tip podataka.

    **Opis varijable** - Kopirajte i zalijepite sljedeće.

    ```text
    List of available devices by device type
    ```

    ![Svojstva izlaza](../../../../../translated_images/7.2_09_OutputVariable.fb0e159fbad5052280040090352c50faf4d91228095c3762e75440b2842e0d29.hr.png)

1. Sada smo završili s definiranjem ulaza i izlaza teme. Odaberite **X ikonu** za izlazak iz okna **Detalji teme**.

    ![Izlazak iz okna detalja teme.](../../../../../translated_images/7.2_10_ExitTopicDetailsPane.6e8981434f04049bef7ab93f9545ee433087e1c99cdfe27b355ee9858ddfde99.hr.png)

### 7.3 Dodajte alat koristeći konektor

1. Sljedeće, dodajmo čvor koji omogućuje agentu da preuzme popis uređaja iz **Devices** SharePoint liste. Odaberite **+ ikonu** ispod okidača.

    ![Dodajte alat](../../../../../translated_images/7.3_01_AddNode.4656328835f7a28bc5f66c440d620a0990bf098e858619ff2c32a9b14fae7c4f.hr.png)

1. Odaberite čvor **Dodaj alat**, zatim odaberite karticu **Konektor**. Potražite `Get items` i odaberite akciju konektora **Get items** za SharePoint.

    ![Odaberite get items](../../../../../translated_images/7.3_02_GetItems.a6bdfb122449de789e7c58592f4c3e3a0f38b7bdcec2e0e5eab34b2d9d991f97.hr.png)

1. Potrebno je kreirati novu vezu za konektor. Odaberite **chevron** ikonu i odaberite **Kreiraj novu vezu**.

    ![Dodajte alat](../../../../../translated_images/7.3_03_CreateNewConnection.03f49fab97e5f5f2a298e4b1b2e5081304c9c98c5f3ad5be0302c241c3d83d94.hr.png)

1. Prikazat će se dvije opcije koje vam omogućuju povezivanje izravno s SharePoint Online ili s lokalnim SharePointom. Prema zadanim postavkama odabrana je opcija **Poveži se izravno (cloud-services)**, što ćemo koristiti za našu vezu.
Odaberite **Create**.

![Odaberite Create](../../../../../translated_images/7.3_04_SelectCreate.f2216f1e276ed153e06d5b5d47f170a0f9cc6854aa05f0736623acb3aeee1229.hr.png)

1. Odaberite svoj prijavljeni korisnički račun.

![Odaberite prijavljeni korisnički račun](../../../../../translated_images/7.3_05_SelectSignedInUserAccount.e27a0ada918a1cf4477f3966adcc5f1d033a8998a2589d02d1208f21f5d93938.hr.png)

1. Zatim trebate potvrditi da se vaš korisnički račun može koristiti za povezivanje s SharePoint konektorom. Odaberite **Allow access**.

![Odaberite Allow access](../../../../../translated_images/7.3_06_AllowAccess.69f012dbcedf7ebc1869e648a5eaa661d085b15aa7a2eb69e69c5b63adfa36dd.hr.png)

1. Odaberite **Submit** kako bi se akcija **Get items** SharePoint konektora dodala kao čvor u temu.

![Submit](../../../../../translated_images/7.3_07_ConnectedSelectSubmit.16ec31ef062696cabb6e7964879debd177f2b9162f88ef95ae1b4eed85e08a21.hr.png)

1. Akcija **Get items** SharePoint konektora sada je dodana u temu. Sada možemo početi konfigurirati ulazne podatke za akciju. Odaberite **ikonu s tri točke (...)** i zatim **Properties**.

![Odaberite Properties](../../../../../translated_images/7.3_08_GetItemsProperties.32bdda34a1d73a55eb2893695e4b4cf15cd899806e616d0b0b5015471414c9d7.hr.png)

1. Pojavit će se ploča za konfiguraciju **Get items**, a prema zadanim postavkama vidjet ćete karticu **Inputs**. Odaberite karticu **Initiation** i unesite opis u polje **Usage Description**. Kopirajte i zalijepite sljedeće.

    ```text
    Retrieves devices from SharePoint list
    ```

> Ovo će biti korisno kada pregledamo stranicu _Manage your connections_ našeg agenta. Uskoro ćemo se vratiti na ovo.

![Opis Get items](../../../../../translated_images/7.3_09_UpdateDescription.76a8d2ebddd4c3e4ca423daad7485afa60f31f37c97e16529d94e224f9709d60.hr.png)

1. Odaberite karticu **Inputs** i odaberite web-mjesto **Contoso IT** i popis **Devices** koji ste postavili u [Lekcija 00 - Postavljanje tečaja - Korak 3: Kreirajte novo SharePoint web-mjesto](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

![Konfigurirajte ulazne podatke za Get items](../../../../../translated_images/7.3_10_GetItemsInputs.17f8689e660c480dd405ab2ab57db34dcd2b8e697ec09d54c8f8649eb619c58b.hr.png)

1. Sada, kako bismo prikazali samo uređaje s popisa SharePointa na temelju
   - odabrane vrijednosti,
   - i samo uređaje čiji je status _Available_,

   trebamo primijeniti filter. To se postiže unosom upita za filtriranje uz pomoć Power Fx-a. Odaberite **ikonu s tri točke (...)**.

![Odaberite ikonu s tri točke](../../../../../translated_images/7.3_11_SelectVariable.33bfe876cc230569ea0f6cc5e1efa100432509e44342e9b3d6a9e65ee2bc525f.hr.png)

1. Prema zadanim postavkama, bit ćete na kartici **Custom**. Odaberite karticu **Formula**.

![Odaberite karticu Formula](../../../../../translated_images/7.3_12_SelectFormula.a7aba25c95956d113865da3f30da3f3872e12c7a7a8f3c65098a3e3fac9616a4.hr.png)

1. Odaberite **ikonu za proširenje** kako biste povećali polje **Formula**. Kopirajte i zalijepite sljedeći Power Fx izraz.

Koristimo funkciju `Concatenate` za stvaranje izraza koji će filtrirati
   - stupac SharePointa **Status** koji je jednak _Available_
   - i stupac SharePointa **Asset type** koji je jednak _odabranom uređaju iz čvora pitanja_.

    ```text
    Concatenate("Status eq 'Available' and AssetType eq '", Topic.VarDeviceType, "'")
    ```

Odaberite **Insert**.

![Unesite Power Fx izraz i odaberite insert](../../../../../translated_images/7.3_13_EnterFormula.d17cc9f73e01e1cab8e2420a55bcb726ae0a0e55673f81ee3d7fe12d20148b92.hr.png)

1. Power Fx izraz sada će biti primijenjen u parametar ulaznog filtra akcije **Get items**. Zatim odaberite prikaz **All items** u **Limit Columns by View**. Ovo će dohvatiti samo stupce s popisa na temelju odabranog prikaza.

![List Columns by View](../../../../../translated_images/7.3_14_LimitColumnsByView.5537126aaa087bd7f81cc35dfe182aa72cdbec4fe1fb5c2e15823a1275dcaa71.hr.png)

1. Zatim ćemo ažurirati naziv varijable za izlaz. Odaberite karticu **Outputs** i odaberite varijablu `GetItems`.

![Ažurirajte varijablu](../../../../../translated_images/7.3_15_ConfigureOutputs.d4cb0c5c8e37d1859ed705bd1582fce2d063e7f4d65cc036127a846d743ff391.hr.png)

1. Ažurirajte naziv na sljedeće.

    ```text
    VarDevices
    ```

![Ažurirajte naziv varijable](../../../../../translated_images/7.3_16_RenameVariable.55d7adb355808d39fe515bf980af123c60e218fa427354079e86efc412dc0f83.hr.png)

1. Pomaknite se dolje i u odjeljku **Usage** odaberite **Global**. Ovo će omogućiti da varijabla bude dostupna bilo kojoj temi.

![Ažurirajte na Global varijablu](../../../../../translated_images/7.3_17_UpdateToGlobalVariable.09bdb05c0938898a04e48b6bcebee1584f17080b63b2577594be74f9f77a5bc3.hr.png)

1. **Zatvorite** ploču **Variable properties**.

![Zatvorite ploču Variable properties](../../../../../translated_images/7.3_18_ExitVariablePropertiesPane.b1a5e76dfe490bdf1274d8e8c78df44f9b3e3542180fa52fb6f903a980ef31ab.hr.png)

1. Odaberite **plus +** ikonu za umetanje novog čvora, odaberite **Variable management**, a zatim odaberite **Set a variable value**.

![Dodajte čvor Set a variable value](../../../../../translated_images/7.3_19_AddSetAVariableValueNode.958d21c21727ef92506fe76cf0458f05ac8508d84d0a4917077d2889410330e2.hr.png)

1. Odaberite **ikonu veće od** za ulazni parametar **Set variable**.

![Postavite varijablu](../../../../../translated_images/7.3_20_SelectAVariable.9d3beb144002569b947c90cbec22afcc9cb34f277b21e3f65dcaf69831abc438.hr.png)

1. Odaberite izlaz teme koji ste ranije kreirali kao varijablu, **VarAvailableDevices**.

![Spremite temu](../../../../../translated_images/7.3_21_SelectVarAvailableDevicesOutput.8d7259eb6ce1bc7c89de10b768b62dc3008ad7468c094249282bfe66436d1672.hr.png)

1. Zatim odaberite **ikonu s tri točke (...)** kako biste definirali vrijednost varijable.

![Odaberite vrijednost varijable](../../../../../translated_images/7.3_22_SelectVariable.f16319e644afc97d24a8cddaf64a7df9fcc52acd7e284b21f20b685a6e53887a.hr.png)

1. Sada ćemo koristiti PowerFx izraz kako bismo postavili vrijednost varijable kao svojstvo `value` koje se vraća u odgovoru **Get items**, i učiniti [domet varijable](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172618-ebenitez) globalnim dodavanjem prefiksa `Global`.

Odaberite **Insert** i **save** za temu.

![Power Fx formula za vrijednost varijable](../../../../../translated_images/7.3_23_PowerFxFormula.f860daa2c8423021926f0697177279ede3d8d443714d471a77e655c3c42edb07.hr.png)

1. Zatim trebamo ažurirati upute za agenta. Odaberite karticu **Overview** i odaberite **Edit**.

![Uredite upute](../../../../../translated_images/7.3_24_EditInstructions.ce65a6cbcd74792885230af1da432fbb4079fd8b0f5af24ab840453a900b67a8.hr.png)

1. Dodajte novi redak u upute, kopirajte i zalijepite sljedeće.

    ```text
    - Help find available devices and give full details using [Available devices]. Always extract the VarDeviceType from the inputs. After giving device details, ask the user if they want to request a device from the list of available devices.
    ```

Ova uputa će voditi generativnu AI da pokrene okidač **Available devices** kako bi prikazala popis dostupnih uređaja s popisa **Devices** u SharePointu. Odaberite cijeli rezervirani prostor za temu u uglatim zagradama.

![Dodajte upute](../../../../../translated_images/7.3_25_AddInstructions.1e83853476fed3c8b1c43e657bd1c1351108702288a8f688d8543fbf1c2946fb.hr.png)

1. Upišite znak kosu crtu `/` i pojavit će se popis tema. Odaberite temu **Available devices**.

![Referenca na okidač](../../../../../translated_images/7.3_26_SelectAvailableDevicesTopic.1a1beaa256f5417153b7bc55de848b89778f666c213b3a3935444526ab881f0b.hr.png)

1. **Spremite** ažurirane upute.

![Spremite upute](../../../../../translated_images/7.3_27_SaveUpdatedInstructions.39908bb60990be971039bf392088fd0ecfa148c4496a6ad7413e1267b9091623.hr.png)

1. Sada ćemo testirati naš ažurirani agent. Odaberite **Test** u gornjem desnom kutu kako biste prikazali ploču za testiranje i **osvježite** ploču za testiranje. Unesite sljedeću poruku agentu.

    ```text
    I need a laptop
    ```

![Test](../../../../../translated_images/7.3_28_Test.a273496de273bf3bebb9ac1504c1cedd8947c250ccf8454cf38b2effbdf66f71.hr.png)

1. Prije nego što agent može nastaviti, korisnik mora potvrditi da se njihova veza može koristiti. Odaberite **Allow**.

![Odaberite Allow](../../../../../translated_images/7.3_29_SelectAllow.9f508c4001270252924d889792ecf0cc2a984954b903bb00f7ce6b2dc43d08e3.hr.png)

1. Agent će izvršiti alat SharePoint koji dohvaća filtrirani popis uređaja gdje je tip uređaja "laptop", a status "available", na temelju korištenog Power Fx izraza. Korisniku će biti vraćen odgovor u obliku popisa s točkama.

![Odgovor testa](../../../../../translated_images/7.3_30_TestResponse.b60253568edc8b68d737a62960f4a3fa3620d2ba4658b05aa2503ad5fd763383.hr.png)

1. Posljednja stvar koju trebamo naučiti je pregled veza koje se koriste putem stranice _Manage your connections_ agenta. Odaberite **ikonu s tri točke (...)** i zatim **Manage Connection**.

![Upravljanje vezom](../../../../../translated_images/7.3_31_ManageConnections.151932ec4f907e020b67c418cf591806da164c74f6b1d9b73c04d7374d9fc505.hr.png)

1. Ova stranica prikazuje sve veze koje agent koristi. Trenutno je navedena samo jedna veza koja je povezana s alatom SharePoint koji je dodan u temu. Odaberite **1 tool** u stupcu **Used By**.

![Used By](../../../../../translated_images/7.3_32_UsedBy.1e5ff032f1e02a565a0dafdde4f9436486ed3f012fcc23b824871a71b6de543e.hr.png)

1. Ovdje možemo vidjeti detalje o akciji Get items i sjetiti se _opisa upotrebe_ koji smo ranije unijeli? Ovdje ćemo vidjeti taj opis upotrebe. Odaberite **Close**.

> Ovo nam pokazuje koje se akcije koriste i njihovu svrhu. Ovo nam pomaže da organiziramo naše veze 📁.

![Opis upotrebe](../../../../../translated_images/7.3_33_UsedByInformation.74a42aedb6dc906c678ff8b281a8706e1c0156ee7375111ed20e02d1a1dfd808.hr.png)

1. Vratite se na karticu preglednika s Copilot Studiom i **osvježite** ploču za testiranje kako biste je očistili.

## ✅ Misija završena

Čestitamo! 👏🏻 Naučili ste kako dodati novu temu od početka, kako dodati alat koji poziva akciju Get items SharePoint konektora i koristiti Power Fx za filtriranje odgovora kako bi se vratili samo uređaji čiji je status dostupan i tip uređaja laptop. 🙌🏻

Ovo je kraj **Lab 07 - Dodavanje nove teme s čvorovima razgovora**, odaberite donju poveznicu kako biste prešli na sljedeću lekciju. Proširit ćemo slučaj upotrebe iz ove lekcije u laboratoriju sljedeće lekcije.

⏭️ [Prijeđite na lekciju **Poboljšanje interakcija s korisnicima pomoću prilagodljivih kartica**](../08-add-adaptive-card/README.md)

## 📚 Taktički resursi

🔗 [Korištenje sistemskih tema](https://learn.microsoft.com/microsoft-copilot-studio/authoring-system-topics?mc_id=power-172618-ebenitez)

🔗 [Teme u Microsoft Copilot Studiu](https://learn.microsoft.com/microsoft-copilot-studio/guidance/topics-overview?WT.mc_id=power-172618-ebenitez)

🔗 [Postavljanje okidača za teme](https://learn.microsoft.com/microsoft-copilot-studio/authoring-triggers?WT.mc_id=power-172618-ebenitez)

🔗 [Definiranje tema agenta](https://learn.microsoft.com/microsoft-copilot-studio/guidance/defining-chatbot-topics?WT.mc_id=power-172618-ebenitez)

🔗 [Kreiranje izraza pomoću Power Fx](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172618-ebenitez)

📺 [Kreiranje tema pomoću prirodnog jezika](https://aka.ms/ai-in-action/copilot-studio/ep6)

📺 [Dodavanje akcija agentima pomoću konektora](https://aka.ms/ai-in-action/copilot-studio/ep4)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/07-add-new-topic-with-trigger" alt="Analytics" />

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.