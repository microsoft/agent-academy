<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c04b3587170139bc23e3b5cfc24c89ac",
  "translation_date": "2025-10-21T00:02:24+00:00",
  "source_file": "docs/recruit/07-add-new-topic-with-trigger/README.md",
  "language_code": "sl"
}
-->
# 🚨 Misija 07: Dodaj novo temo s sprožilcem in vozlišči

## 🕵️‍♂️ KODNO IME: `OPERACIJA OSTANI PRI TEMI`

> **⏱️ Časovni okvir operacije:** `~60 minut`

🎥 **Oglejte si video vodič**

[![Sličica videa sprožilca](../../../../../translated_images/video-thumbnail.a84cf7cb473be282861469420c5e2c16adb53bcfd64c7c07fbd579e8d32bf8b2.sl.jpg)](https://www.youtube.com/watch?v=7iPAZaA8nJs "Oglejte si vodič na YouTubu")

## 🎯 Povzetek misije

Ustvarili ste agenta. Posluša, se uči in odgovarja na vprašanja - zdaj pa je čas, da postanete bolj taktični. V tej misiji boste podrobneje raziskali delovanje in naučili svojega agenta, kako natančno odgovarjati na specifične zahteve.

S pomočjo tem in sprožilcev lahko vaš agent:

- Prepozna namen

- Usmerja pogovore z logiko

- Zbira in shranjuje spremenljivke

- Sproži tokove in izvede dejanja

Ne ustvarjate le dialoga, temveč povezujete njegov odločevalni center. Dobrodošli v Nevronskem jedru.

## 🔎 Cilji

V tej misiji se boste naučili:

1. Razumeti, kaj so teme in kakšno vlogo imajo pri ustvarjanju strukturiranih pogovorov za vašega agenta
1. Spoznati anatomijo tem, vključno s sprožilnimi frazami in pogovornimi vozlišči
1. Raziskati različne vrste pogovornih vozlišč in uporabo Power Fx za dinamično logiko
1. Ustvariti prilagojene teme od začetka za obravnavo specifičnih zahtev in nalog uporabnikov
1. Zgraditi funkcionalno temo, ki se povezuje s podatki SharePointa z uporabo konektorjev in orodij

## 🤔 Kaj je tema?

Tema je strukturiran pogovor, ki pomaga vašemu agentu odgovarjati na specifična vprašanja ali naloge uporabnikov. Pomislite na temo kot na mini-pogovor ali nalogo, ki jo vaš agent lahko obravnava. Vsaka tema je zasnovana tako, da odgovarja na specifično vprašanje ali zahtevo uporabnika.

### 🌌 Namen teme

Obstajajo trije pogosti nameni tem, ki temeljijo na potrebah uporabnikov:

**Informativno** - odgovarja na vprašanja, kot so:

- `Kaj je …?`
- `Kdaj bo …?`
- `Zakaj …?`
- `Ali mi lahko poveste …?`

**Izpolnjevanje nalog** - pomaga uporabnikom _nekaj narediti_:

- `"Želim …"`
- `"Kako naj …?"`
- `"Potrebujem …?"`

**Odpravljanje težav** - rešuje težave:

- `Nekaj ne deluje …`
- `Pojavlja se mi sporočilo o napaki …`
- `Vidim nekaj nepričakovanega …?`

Lahko ustvarite tudi teme za dvoumna vprašanja, kot je `Potrebujem pomoč`, ki od uporabnikov zahtevajo več podrobnosti, preden nadaljujete.

## 🐦 Zakaj so teme koristne?

Teme vam pomagajo:

- Organizirati znanje vašega agenta.

- Narediti pogovore naravne.

- Učinkovito reševati težave uporabnikov.

## 🪺 Vrste tem

1. **Sistemske teme** - te so vgrajene in obravnavajo pogoste dogodke, kot so:
    - Začetek pogovora
    - Konec pogovora
    - Obvladovanje napak
    - Zahteva za prijavo uporabnika
    - Preusmeritev na človeškega agenta

1. **Prilagojene teme** - te ustvarite za obravnavo specifičnih nalog ali vprašanj, kot so:
    - Zahteva za dopust zaposlenega
    - Zahteva za nov ali nadomestni napravo

![Vrste tem](../../../../../translated_images/7.0_01_Topics.6e55d2e01c1cc0994b7af05be3c1629b78d46b37cc82f59c7893d4ad90af707e.sl.png)

## 🧬 Anatomija teme

Vsaka tema običajno vsebuje naslednje.

### 🗣️ Sprožilne fraze

To so besede ali stavki, ki jih uporabniki lahko izgovorijo, da sprožijo temo.

**Primeri:**

Za temo zahteve za dopust bi lahko bile sprožilne fraze:

- `Želim vzeti dopust`
- `Zahteva za dopust`
- `Prijava za prosti čas`
- `Kako oddam zahtevo za dopust?`

Za temo zahteve za napravo bi lahko bile sprožilne fraze:

- `Potrebujem novo napravo`
- `Ali lahko zahtevam napravo?`
- `Ali mi lahko pomagate pri zahtevi za napravo`

### 💬 Pogovorna vozlišča

Tema je sestavljena iz vozlišč, ki so koraki, ki jih agent sledi, ko je tema sprožena. Ta koraka povežete, da zgradite tok pogovora, ki ga vaš agent sledi pri interakciji z uporabniki.

Pomislite na to kot na navodila ali dejanja, kot so:

- Postavljanje vprašanj uporabniku
- Pošiljanje sporočil
- Klicanje zunanjih storitev, kot je sistem za upravljanje dopustov
- Nastavljanje ali preverjanje spremenljivk
- Uporaba pogojev za razvejanje pogovora
- Usmerjanje na drugo temo

![Pogovorna vozlišča](../../../../../translated_images/7.0_03_ConversationNodes.7b1d93b7d4522d544d7f9eed597a5ef30b9f96ee1670efd048528ce13423481a.sl.png)

Sledi glavnim vrstam vozlišč, ki jih lahko dodate agentu:

#### Pošlji sporočilo

- **Namen** - pošlje sporočilo uporabniku.
- **Primer** - `Hvala za vašo zahtevo! Pomagal vam bom pri tem.`

To vozlišče omogoča vašemu agentu pošiljanje sporočil uporabnikom, ki so lahko preprosto besedilo ali bogata vsebina, kot so slike, videi, kartice, hitri odgovori in prilagodljive kartice.

Sporočila lahko personalizirate z uporabo spremenljivk, dodate več različic sporočil za raznolikost in celo prilagodite glasovni izhod za kanale, ki omogočajo glasovno komunikacijo.

!!! tip
    Pomislite na to kot na blok "nekaj povej", ki pomaga vašemu agentu jasno in interaktivno komunicirati z uporabniki.

#### Postavi vprašanje

- **Namen** - postavi uporabniku vprašanje in počaka na njegov odgovor.
- **Primer** - `Kateri so vaši datumi dopusta?`

To vozlišče se uporablja za pridobivanje specifičnih informacij od uporabnikov med pogovorom in shranjevanje njihovih odgovorov v spremenljivke za kasnejšo uporabo.

Lahko prilagodite vrsto vprašanja, kot je vnos besedila, ali uporabite entitete za definirane vrednosti, med katerimi uporabnik izbere, ter določite, kako naj se agent obnaša, če uporabnik poda neveljaven odgovor ali preskoči vprašanje.

Podpira tudi bogato vsebino, kot so slike in hitri odgovori, ter omogoča fino nastavitev validacije, ponovnega vprašanja in nastavitev prekinitve, da pogovor teče gladko.

!!! tip
    Pomislite na to kot na blok "vprašaj in poslušaj", ki pomaga vašemu agentu strukturirano komunicirati z uporabniki na način, ki ga določite vi.

#### Vprašaj s prilagodljivo kartico

- **Namen** - pošlje bogato, interaktivno kartico z uporabo JSON.
- **Primer** - kartica, ki prikazuje izbirnik datuma na koledarju, da uporabnik izbere datum.

To vozlišče prikazuje bogate, interaktivne kartice, ki jih uporabniki lahko izpolnijo in oddajo, kot so obrazci z besedilnimi polji, gumbi in slikami. Zajame uporabnikov vnos in ga shrani v spremenljivke, ki jih vaš agent lahko uporabi kasneje v pogovoru.

!!! tip
    Pomislite na to kot na prilagodljiv blok "graditelj obrazcev", ki naredi vašega agenta bolj interaktivnega in sposobnega zbiranja podrobnih informacij od uporabnikov.

#### Dodaj pogoj

- **Namen** - dodaj logiko v pogovor. Preveri nekaj in odloči, kaj narediti naprej.
- **Primer** - če uporabnik reče `Da`, pojdi na naslednji korak. Če `Ne`, končaj pogovor.

To vozlišče ustvari odločevalne točke v toku pogovora vašega agenta, tako da preveri, ali spremenljivka izpolnjuje določene kriterije. Glede na to, ali je pogoj resničen ali napačen, agent sledi različnim potem.

!!! tip
    Pomislite na to kot na blok "če-drugače", ki pomaga vašemu agentu sprejemati odločitve glede na vnos uporabnika ali shranjene podatke v spremenljivkah.

#### Upravljanje spremenljivk

- **Namen** - shrani ali izbriše informacije (imenovane spremenljivke) med pogovorom.
- **Primer** - shrani datum, ki ga je uporabnik izbral v vozlišču Postavi vprašanje, ki prikazuje prilagodljivo kartico.

To vozlišče omogoča shranjevanje in upravljanje informacij med pogovorom, kot so ime uporabnika, odgovor ali preference. Uporabite lahko različne vrste spremenljivk, kot so besedilo, številke ali datumi, in te lahko omejite na eno temo, delite med temami (globalno) ali celo pridobite iz sistema ali okolja.

!!! tip
    Pomislite na to kot na "škatlo za spomine", ki pomaga vašemu agentu zapomniti si informacije in jih uporabljati med nadaljevanjem pogovora z uporabnikom.

#### Upravljanje tem

- **Namen** - premakne pogovor na drugo temo ali korak znotraj teme, prenese pogovor ali zaključi temo ali pogovor.
- **Primer** - preusmeritev na temo "Politika dopustov".

To vozlišče omogoča vašemu agentu, da preklopi iz ene teme na drugo brez ponovnega zagona pogovora, zaključi temo, prenese ali zaključi pogovor ali preide na drug korak znotraj iste teme. Pomaga usmerjati uporabnike skozi različne dele toka pogovora z gladkim prehodom med temami, pri čemer lahko prenesete spremenljivke med njimi, da ohranite kontekst.

!!! tip
    Pomislite na to kot na blok "pojdi na drug odsek/korak", ki pomaga vašemu agentu biti prilagodljiv pri klepetu z uporabniki.

#### Dodaj orodje

- **Namen** - poveže se z orodji, kot so konektorji, agentni tokovi, pozivi, prilagojeno iskanje, iskalne poizvedbe, veščine, protokol konteksta modela.
- **Primer** - Agentni tok se izvede po tem, ko uporabnik odda zahtevo za dopust.

To vozlišče daje vašemu agentu sposobnosti za interakcijo z zunanjimi sistemi ali izvajanje specifičnih nalog, kot so pošiljanje e-pošte, preverjanje vremena ali dostop do podatkovnih baz. Orodja lahko dodate z uporabo vgrajenih konektorjev, prilagojenih API-jev, agentnih tokov, pozivov ali povezave s strežniki protokola konteksta modela (MCP), ter celo avtomatizacijo grafičnega uporabniškega vmesnika za namizne aplikacije z uporabo orodja za uporabo računalnika.

!!! tip
    Pomislite na orodja kot na "akcijske bloke", ki dajejo vašemu agentu supermoči za izvajanje stvari, ki presegajo _klepetanje_, kot so klicanje API-ja, izvajanje procesa ali samodejno zbiranje uporabniškega vnosa.

#### Vozlišče za generativne odgovore

- **Namen** - uporablja velik jezikovni model za generiranje naravnih, človeškim podobnih odgovorov na podlagi vprašanja uporabnika in povezanih podatkov.
- **Primer** - uporablja povezani vir znanja, ki vsebuje informacije o pravicah do dopusta, za odgovarjanje na vprašanja uporabnikov glede zahtev za dopust.

To vozlišče omogoča vašemu agentu, da odgovarja na vprašanja uporabnikov z uporabo informacij iz različnih virov znanja, kot so spletne strani, dokumenti, SharePoint ali prilagojeni podatki. Lahko se uporablja kot rezervna možnost, ko ni najdena nobena ustrezna tema, ali znotraj teme za podrobnejše, dinamične odgovore na podlagi specifičnih virov, ki ste jih konfigurirali za uporabo vašega agenta.

!!! tip
    Pomislite na to kot na "pameten blok za odgovore", ki pomaga vašemu agentu podajati koristne, natančne odgovore z iskanjem zaupanja vredne vsebine, ki jo določite vi.

#### Vozlišče za HTTP zahtevo

- **Namen** - poveže vašega agenta z zunanjimi sistemi z pošiljanjem API klicev (na primer `GET` ali `POST`) za pridobivanje ali posodabljanje podatkov.
- **Primer** - ko uporabnik vpraša za stanje svojih dopustnih dni, agent izvede `GET` zahtevo v sistem za upravljanje dopustov, izloči `remainingLeaveDays` iz odgovora API-ja in uporabniku odgovori z vrednostjo.

To vozlišče omogoča vašemu agentu povezovanje z zunanjimi sistemi z pošiljanjem REST API klicev, kot so `GET` ali `POST` zahteve. Zahtevo lahko prilagodite z glavi, vsebino telesa in celo uporabite Power Fx za vključitev dinamičnih podatkov, nato pa shranite odgovor v spremenljivke za kasnejšo uporabo v pogovoru.

!!! tip
    Pomislite na to kot na blok "dosezi in pridobi informacije", ki pomaga vašemu agentu komunicirati z drugimi storitvami, kot je pridobivanje podrobnosti o uporabniku ali pošiljanje podatkov v drug sistem.

#### Pošlji dogodek

- **Namen** - omogoča vašemu agentu pošiljanje ne-sporočilnih dejanj, kot so sistemske posodobitve ali sprožilci orodij - stranki ali kanalu, kar mu omogoča izvajanje nalog.
- **Primer** - reagiranje na uporabnika, ki se pridruži klepetu, z prikazom pozdravnega sporočila.

To vozlišče omogoča vašemu agentu pošiljanje ne-sporočilnih dejanj zunanjim sistemom ali kanalom, ki se nato odločijo, kako se odzvati. Vsakemu dogodku dodelite ime in vrednost, ki je lahko preprosta številka ali besedilo, spremenljivka ali formula Power Fx, in se pošlje kot JSON objekt.

!!! tip
    Pomislite na to kot na blok "tihi sprožilec", ki pomaga vašemu agentu izvajati stvari v ozadju ali komunicirati z zunanjimi orodji, ne da bi uporabnik moral kaj reči.

## 🏋🏻‍♀️ Uporaba Power Fx v vaših vozliščih

V Copilot Studio je Power Fx programski jezik z nizko kodo, ki se uporablja za dodajanje logike in dinamičnega vedenja vašemu agentu. To je isti jezik, ki se uporablja v Microsoft Power Apps, zasnovan pa je tako, da je preprost in podoben Excelovim formulam, kar olajša uporabo tako razvijalcem kot ne-razvijalcem.

![Izraz Power Fx](../../../../../translated_images/7.3_13_EnterFormula.d17cc9f73e01e1cab8e2420a55bcb726ae0a0e55673f81ee3d7fe12d20148b92.sl.png)

### Kaj lahko Power Fx naredi v temah

- Nastavi in manipulira spremenljivke
      - Primer: `Set(userName, "Adele Vance")`
- Ustvari pogoje
      - Primer: `If(score > 80, "Pass", "Fail")`
- Formatira in preoblikuje podatke
      - Primer: `Text(DateValue, "dd/mm/yyyy")`

### Zakaj uporabljati Power Fx?

- **Prilagodljiv:** logiko lahko zgradite brez pisanja celotnih vrstic kode.

- **Znano:** če ste uporabljali Excelove formule, se vam bo zdelo zelo podobno.

- **Močno:** omogoča personalizacijo pogovorov, validacijo vnosa in nadzor nad vedenjem vašega agenta na podlagi uporabniških podatkov.

## 🏗️ Kako ustvarim in urejam teme?

Obstajata dva načina za ustvarjanje in urejanje tem za vaše agente.

### 1. Ustvarite iz praznega

To vam omogoča, da zgradite prilagojene tokove pogovorov od začetka, in lahko dodate ali odstranite vozlišča po potrebi med urejanjem vaše teme.

![Dodaj temo](../../../../../translated_images/7.0_04_AddATopic.111df124a4a7ff8b41e3f577fbef08885ac52d9d6c0c705a82f5968e5ccc384d.sl.png)

#### Zakaj je to koristno

- Omogoča vam popoln nadzor nad tem, kako vaš agent odgovarja.
- Logiko lahko prilagodite z uporabo spremenljivk, Power Fx in pogojev.
- Idealno za ustvarjanje prilagojenih izkušenj za specifične poslovne potrebe.

### 2. Ustvarite s Copilot
To vam omogoča, da opišete, kaj želite, z uporabo naravnega jezika, Copilot pa bo za vas sestavil pogovor. Enako velja pri urejanju vaše teme – uporabite naravni jezik, Copilot pa bo pregledal in prilagodil temo za vas.

#### Kaj podpira Copilot

- Lahko ustvari in ureja:
      - Vozlišča sporočil
      - Vozlišča vprašanj
      - Vozlišča pogojev
- Ne podpira naprednih nastavitev, kot so ponovna vprašanja uporabniku, če ne odgovori, ali upravljanje prekinitev med vprašanjem. Te nastavitve lahko še vedno ročno prilagodite, če je potrebno.

#### Zakaj je to koristno

- Pospeši razvoj s pomočjo umetne inteligence.
- Omogoča osredotočanje na logiko in uporabniško izkušnjo namesto na ponavljajoče se nastavitve.
- Olajša iteracijo in izboljšanje pogovornih tokov z minimalnim naporom.

#### ✨ Primeri pozivov

- **Ustvarite temo**
      - `Sprejmite uporabnikovo ime, starost in datum rojstva ter nato ponovite njihove odgovore nazaj`
      - `Zberite uporabnikov naslov, državo in poštno številko. Uporabnik naj ima možnost ponoviti vsako vprašanje do 4-krat`

- **Uredite temo**
      - `Dodajte vprašanje o datumu rojstva uporabnika`
      - `Povzemite zbrane informacije v prilagodljivi kartici.`

## 👩🏻‍🎨 OK, kako oblikujem teme za svojega agenta?

### 🧙🏻‍♂️ Korak 1 - Razumeti, kaj uporabniki potrebujejo

Začnite z identifikacijo pogostih vprašanj ali nalog, ki jih bodo uporabniki zastavljali vašemu agentu. To so lahko:

- Vprašanja, ki jih uporabniki pogosto postavljajo, kot na primer: `kakšne so moje pravice do bolniške odsotnosti?`
- Pogoste naloge, ki jih uporabniki želijo opraviti, kot je oddaja obrazca
- Težave, s katerimi se uporabniki pogosto soočajo, kot so težave pri prijavi

### 📦 Korak 2 - Razvrstite scenarije

Organizirajte potrebe uporabnikov v tri kategorije glede na to, kar smo se naučili prej – namen teme:

- Informativno - uporabnik želi izvedeti nekaj
- Izpolnjevanje nalog - uporabnik želi nekaj opraviti
- Reševanje težav - uporabnik potrebuje pomoč pri reševanju težave

### 🗺️ Korak 3 - Načrtujte pogovor

Narišite preprost tok pogovora, kako naj agent odgovarja:

- Začnite z pozdravom ali potrditvijo
- Postavite nadaljnja vprašanja za pridobitev podrobnosti
- Zagotovite odgovore ali izvedite dejanja

!!! tip
    Pogovor naj bo kratek in osredotočen. Sprašujte le, kar je nujno.

### 🔀 Korak 4 - Obdelajte različne vrste pogovorov

Oblikujte za oba:

- **Eno vprašanje, en odgovor** - enostaven pogovor

- **Večkratni pogovor** - pogovor z več vprašanji in odgovori

Primer:

- Uporabnik: `Želim zaprositi za dopust.`

- Agent: `Seveda! Kateri datum želite, da se vaš dopust začne?`

- Uporabnik: `15. julij`

- Agent: `Razumem. In kdaj se bo vaš dopust končal?`

- Uporabnik: `22. julij.`

- Agent: `Hvala! Kakšen je razlog za vaš dopust?`

- Uporabnik: `Družinski dopust.`

- Agent: `Hvala za podrobnosti. Vaša prošnja za dopust od 15. julija do 22. julija za družinski dopust je bila oddana. Kmalu boste prejeli potrditev.`

### 🤖 Korak 5 - Uporabite AI za nepričakovana vprašanja

Tudi če ste oblikovali temo za prošnje za dopust, lahko uporabniki postavijo vprašanja, ki niso neposredno zajeta. Tukaj pridejo prav funkcije umetne inteligence, kot je sistemska tema _Conversational boosting_.

Ta tema vključuje vozlišče za generativne odgovore, ki omogoča vašemu agentu, da takoj začne uporabljati povezane vire znanja. Vsi viri znanja, dodani na ravni agenta, so samodejno vključeni v vozlišče generativnih odgovorov znotraj sistemske teme _Conversational boosting_.

#### Primer

- Uporabnik: `Ali lahko prenesem neizkoriščene dni dopusta v naslednje leto?`

To vprašanje morda ni del vašega vnaprej določenega toka teme, še posebej, če vaša tema obravnava le oddajo prošenj za dopust.

#### Kako pomaga AI

Če je vaš agent povezan z dokumenti o politiki kadrovske službe vaše organizacije ali z notranjo spletno stranjo, lahko AI:

- Poišče ustrezno politiko dopusta
- Razume in povzame pravila
- Agent odgovori: `V skladu s politiko kadrovske službe lahko prenesete neizkoriščene dni dopusta v naslednje koledarsko leto. Za več podrobnosti si oglejte razdelek o politiki dopusta na portalu kadrovske službe.`

#### Zakaj je to koristno

- Ni vam treba ročno ustvariti teme za vsako vprašanje, povezano s politiko.
- AI lahko pridobi natančne odgovore iz zaupanja vrednih virov znanja.
- Izboljša uporabniško izkušnjo, saj agent deluje pametneje in bolj odzivno.

### 🔬 Korak 6 - Preizkusite temo, tok pogovora

Preden objavite svojo temo:

- Preizkusite z resničnimi vprašanji ali resničnimi vzorčnimi vnosi.
- Prepričajte se, da zveni naravno in je koristna.

!!! tip
    Ustrezno izboljšajte svojo temo med testiranjem, na primer z dodajanjem več vozlišč ali odstranjevanjem vozlišč in preusmeritvijo na drugo temo.

### ⚠️ Korak 7 - Izogibajte se podvajanju vsebine spletne strani

Ne kopirajte tistega, kar je že na vaši spletni strani.

- Osredotočite se na teme, o katerih uporabniki pogosto sprašujejo.
- Dodajte nove teme na podlagi zgodovine klepeta ali zahtev za podporo.

### ✨ Primer toka pogovora

Spodaj je primer teme, ki obravnava prošnje za dopust.

#### Korak 1: Sprožilna fraza

Uporabnik napiše,

`Želim zaprositi za dopust`

#### Korak 2: Agent zahteva podrobnosti z uporabo prilagodljive kartice

Agent vpraša,

`Seveda! Kateri datumi želite vzeti dopust?`

Prilagodljiva kartica ima kontrolnik za izbiro začetnega in končnega datuma.

#### Korak 3: Uporabnik poda datume

Uporabnik izbere začetni datum 5. avgust 2025 in končni datum 10. avgust 2025 ter odda kartico. Vrednosti datumov se shranijo v izhod prilagodljive kartice kot spremenljivke.

#### Korak 4: Izveden oblačni tok

Izveden je oblačni tok Power Automate, ki ustvari novo prošnjo v sistemu za upravljanje dopustov in pošlje e-pošto za obvestilo vodji o prošnji za dopust.

#### Korak 5: Pošlji potrditveno sporočilo uporabniku

Agent odgovori,

`Vaša prošnja za dopust od 5. avgusta do 10. avgusta je bila oddana. Vaš vodja jo bo pregledal in se kmalu odzval.`

## 🧪 Laboratorij 07 - Dodajte novo temo z vozlišči pogovora

Zdaj se bomo naučili, kako dodati novo temo s sprožilcem in orodji. Ta laboratorij bo zajemal ustvarjanje teme iz nič, da boste razumeli, kako prilagoditi teme svojim potrebam.

- [7.1 Dodajte novo temo iz nič](../../../../../docs/recruit/07-add-new-topic-with-trigger)
- [7.2 Določite sprožilne vnose in izhode](../../../../../docs/recruit/07-add-new-topic-with-trigger)
- [7.3 Dodajte orodje z uporabo konektorja](../../../../../docs/recruit/07-add-new-topic-with-trigger)

### ✨ Primer uporabe

**Kot** zaposleni

**Želim** vedeti, katera naprave so na voljo

**Da bi** imel seznam razpoložljivih naprav

Začnimo!

### Predpogoji

1. **Seznam SharePoint**

    Uporabili bomo seznam **Devices** v SharePointu iz [Lekcija 00 - Nastavitev tečaja - Korak 3: Ustvarite novo SharePoint stran](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Če seznama **Devices** v SharePointu še niste nastavili, se vrnite na [Lekcija 00 - Nastavitev tečaja - Korak 3: Ustvarite novo SharePoint stran](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. **Agent za pomoč uporabnikom Contoso**

    Uporabili bomo istega agenta, ki je bil ustvarjen prej v [Lekcija 06 - Ustvarite prilagojenega agenta z uporabo naravnega jezika s Copilotom in ga povežite z vašimi podatki](../06-create-agent-from-conversation/README.md).

### 7.1 Dodajte novo temo iz nič

1. Izberite **Zavihek Teme** blizu imena agenta. Če ga ne vidite, izberite **+6** in videli boste **Teme** na seznamu.

    ![Izberite Teme](../../../../../translated_images/7.1_01_Topics.789ffa4f75830b5f25fb1eeb8fa3e8ba3810b95870cb3dc49d80d8f4ba15a00a.sl.png)

1. Zavihek **Teme** se bo naložil, privzeto pa bodo prikazane _Prilagojene_ teme. Teme lahko filtrirate po Vse, Prilagojene in Sistemske. Prilagojene in sistemske teme, ki jih trenutno vidite, so bile samodejno ustvarjene, ko je bil agent nastavljen.

    Izberite **+ Dodaj temo** in izberite **Iz nič**.

    ![Ustvarite temo iz nič](../../../../../translated_images/7.1_02_FromBlank.f3fe83fad24825f8eb498b19af8e472810f657868613b96b3b4e033fa1042e75.sl.png)

1. Vnesite ime za temo. Kopirajte in prilepite naslednje.

    ```text
    Available devices
    ```

    ![Poimenujte temo](../../../../../translated_images/7.1_03_TopicName.06eb34ebe94516c1d898b5dff183f9586f7526f9316bc122dca641ac29967966.sl.png)

1. Vnesite opis sprožilca, ki opisuje, kaj tema počne. Kopirajte in prilepite naslednje.

    ```text
    This topic helps users find devices that are available from our SharePoint Devices list. User can ask to see available devices and it will return a list of devices that are available which can include laptops, smartphones, accessories and more.
    ```

    ![Vnesite ime in opis za sprožilec](../../../../../translated_images/7.1_04_TriggerDescription.cb748c0358b3af249fcc0fdb0b262185ffed14d8cf628186b8a65ad4bbf14172.sl.png)

### 7.2 Določite sprožilne vnose in izhode

1. Nato bomo dodali novo vhodno spremenljivko, ki jo bo generativna AI uporabila v svoji orkestraciji za pridobitev vrednosti vrste naprave iz uporabnikovega sporočila. Izberite **Več elips (...)** v temi in izberite **Podrobnosti**, da si ogledate podrobnosti teme.

    ![Izberite Podrobnosti teme](../../../../../translated_images/7.2_01_SelectTopicDetails.cc1b97a86718e101084c366514cc306fe82243a014a44c579394e0f70ba5ca53.sl.png)

1. Zdaj se je naložil **Podrobnosti teme**. Izberite zavihek **Vhod**.

    ![Zavihek Vhod](../../../../../translated_images/7.2_02_SelectInputTab.d0b900eb02a8f982324f59e3b7aca34c2cdba78263acdc9301225e1c3e6338b6.sl.png)

1. Izberite **Ustvari novo spremenljivko**.

    ![Ustvarite novo vhodno spremenljivko](../../../../../translated_images/7.2_03_CreateANewVariable.0d45780268d9b6250617c45a9ddd557cdaa23945b66539b313ca8d74f2c96cc2.sl.png)

1. Vnesite ime za spremenljivko. Kopirajte in prilepite naslednje.

    ```text
    VarDeviceType
    ```

    ![Ime vhodne spremenljivke](../../../../../translated_images/7.2_04_VariableName.56555922eab13cad52fa29d846f4e515d82c2e9bf61c86705f080a1ba4f3b1af.sl.png)

1. Zdaj moramo določiti naše vhodne in izhodne spremenljivke. Naslednje so lastnosti, ki jih je mogoče določiti za vhodne in izhodne spremenljivke teme.

    | Polje    | Vrednost |
    | ---------- | :--------- |
    | Kako bo agent zapolnil ta vhod? | Določa, kako agent zapolni to spremenljivko z vrednostjo, preden zažene temo. Privzeto je nastavljeno na _Dinamično zapolni z najboljšo možnostjo_. Sicer lahko preglasite vhod z vrednostjo namesto da vprašate uporabnika |
    | Podatkovni tip spremenljivke  | Podatkovni tip spremenljivke. Podprti podatkovni tipi so `String`, `Boolean`, `Number`, `Date`, `DateTime`, `DateTimeNoTimeZone`, `Time`, `Record`, `Table`, `Unspecified`, `From sample data` |
    | Prikazno ime   | Ime spremenljivke   |
    | Identificiraj kot  | Vrsta entitete, da agent zajame pravilno vrsto vrednosti  |
    | Opis    | Opis pomaga agentu samodejno zapolniti vhode pred zagonom teme ali generirati vprašanja za pridobitev vrednosti   |

    Polja _Kako bo agent zapolnil ta vhod?_, _Podatkovni tip spremenljivke_ in _Prikazno ime_ lahko ostanejo nespremenjena. Posodobite lastnost **Identificiraj kot** na **Celoten odgovor uporabnika**.

    ![Posodobite Identificiraj kot](../../../../../translated_images/7.2_05_IdentifyAs.a502101e6f60c27ed8c8b1eff049b8ceedd0531845b932f9b7608ad3d8220090.sl.png)

1. Kopirajte in prilepite naslednje kot opis.

    ```text
    List of possible values: Laptop, Desktop, Smartphone
    ```

    ![Opis](../../../../../translated_images/7.2_06_InputDescription.844e1776080e595c6c221bcc33d7a269abcc7e4755c8f11b284c3950f42166b5.sl.png)

1. Nato določimo naš izhod za temo. Izberite zavihek **Izhod**.

    ![Izberite zavihek Izhod](../../../../../translated_images/7.2_07_SelectOutputTab.ab5aa0a2f385f1492df5a67f8f2cbed752dc0258c1e1ddb9928d204405ec403a.sl.png)

1. Izberite **Ustvari novo spremenljivko**.

    ![Ustvarite novo izhodno spremenljivko](../../../../../translated_images/7.2_08_CreateANewVariable.5518205f121014ff4757af062bedfd38ce768c8f38291dd9d6489d67cd5d5dc8.sl.png)

1. Posodobite naslednje lastnosti.

    **Ime spremenljivke** - Kopirajte in prilepite naslednje.

    ```text
    VarAvailableDevices
    ```

    **Podatkovni tip spremenljivke** - Izberite **Tabela** kot podatkovni tip.

    **Opis spremenljivke** - Kopirajte in prilepite naslednje.

    ```text
    List of available devices by device type
    ```

    ![Lastnosti izhoda](../../../../../translated_images/7.2_09_OutputVariable.fb0e159fbad5052280040090352c50faf4d91228095c3762e75440b2842e0d29.sl.png)

1. Zdaj smo zaključili z določanjem vhodov in izhodov teme. Izberite **X ikono**, da zaprete **Podrobnosti teme**.

    ![Zaprite podrobnosti teme.](../../../../../translated_images/7.2_10_ExitTopicDetailsPane.6e8981434f04049bef7ab93f9545ee433087e1c99cdfe27b355ee9858ddfde99.sl.png)

### 7.3 Dodajte orodje z uporabo konektorja

1. Nato dodajmo vozlišče, ki omogoča agentu pridobitev seznama naprav iz seznama **Devices** v SharePointu. Izberite **+ ikono** pod sprožilcem.

    ![Dodajte orodje](../../../../../translated_images/7.3_01_AddNode.4656328835f7a28bc5f66c440d620a0990bf098e858619ff2c32a9b14fae7c4f.sl.png)

1. Izberite vozlišče **Dodaj orodje**, nato izberite zavihek **Konektor**. Poiščite `Get items` in izberite akcijo konektorja **Get items** v SharePointu.

    ![Izberite Get items](../../../../../translated_images/7.3_02_GetItems.a6bdfb122449de789e7c58592f4c3e3a0f38b7bdcec2e0e5eab34b2d9d991f97.sl.png)

1. Ustvariti je treba novo povezavo za konektor. Izberite ikono **puščica dol** in nato **Ustvari novo povezavo**.

    ![Dodajte orodje](../../../../../translated_images/7.3_03_CreateNewConnection.03f49fab97e5f5f2a298e4b1b2e5081304c9c98c5f3ad5be0302c241c3d83d94.sl.png)

1. Prikazali se bosta dve možnosti, ki omogočata neposredno povezavo s SharePoint Online ali z lokalnim SharePointom. Privzeto bo izbrana možnost **Neposredno povezovanje (storitev v oblaku)**, kar bomo uporabili za našo povezavo.
Izberite **Ustvari**.

![Izberite Ustvari](../../../../../translated_images/7.3_04_SelectCreate.f2216f1e276ed153e06d5b5d47f170a0f9cc6854aa05f0736623acb3aeee1229.sl.png)

1. Izberite svoj prijavljen uporabniški račun.

![Izberite prijavljen uporabniški račun](../../../../../translated_images/7.3_05_SelectSignedInUserAccount.e27a0ada918a1cf4477f3966adcc5f1d033a8998a2589d02d1208f21f5d93938.sl.png)

1. Nato morate potrditi, da se vaš uporabniški račun lahko uporablja za povezavo s SharePoint konektorjem. Izberite **Dovoli dostop**.

![Izberite dovoli dostop](../../../../../translated_images/7.3_06_AllowAccess.69f012dbcedf7ebc1869e648a5eaa661d085b15aa7a2eb69e69c5b63adfa36dd.sl.png)

1. Izberite **Pošlji**, da se akcija **Pridobi elemente** SharePoint konektorja doda kot vozlišče v temo.

![Pošlji](../../../../../translated_images/7.3_07_ConnectedSelectSubmit.16ec31ef062696cabb6e7964879debd177f2b9162f88ef95ae1b4eed85e08a21.sl.png)

1. Akcija **Pridobi elemente** SharePoint konektorja je zdaj dodana v temo. Zdaj lahko začnemo konfigurirati vnose za akcijo. Izberite **ikono z elipsami (...)** in nato **Lastnosti**.

![Izberite Lastnosti](../../../../../translated_images/7.3_08_GetItemsProperties.32bdda34a1d73a55eb2893695e4b4cf15cd899806e616d0b0b5015471414c9d7.sl.png)

1. Pojavi se konfiguracijska plošča **Pridobi elemente**, privzeto pa boste videli zavihek **Vnosi**. Izberite zavihek **Začetek** in v polje **Opis uporabe** vnesite opis. Kopirajte in prilepite naslednje.

    ```text
    Retrieves devices from SharePoint list
    ```

> To bo koristno, ko si bomo ogledali stran _Upravljanje vaših povezav_ našega agenta. K temu se bomo kmalu vrnili.

![Opis Pridobi elemente](../../../../../translated_images/7.3_09_UpdateDescription.76a8d2ebddd4c3e4ca423daad7485afa60f31f37c97e16529d94e224f9709d60.sl.png)

1. Izberite zavihek **Vnosi** in izberite mesto **Contoso IT** ter seznam **Naprave**, ki ste ga nastavili v [Lekcija 00 - Nastavitev tečaja - Korak 3: Ustvarite novo SharePoint mesto](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

![Konfigurirajte vnose Pridobi elemente](../../../../../translated_images/7.3_10_GetItemsInputs.17f8689e660c480dd405ab2ab57db34dcd2b8e697ec09d54c8f8649eb619c58b.sl.png)

1. Zdaj, da prikažete samo naprave s seznama SharePoint na podlagi
   - izbrane vrednosti,
   - in samo naprave, kjer je status _Na voljo_,

moramo uporabiti filter. To dosežemo z vnosom poizvedbe filtra s pomočjo Power Fx. Izberite **ikono z elipsami (...)**.

![Izberite ikono z elipsami](../../../../../translated_images/7.3_11_SelectVariable.33bfe876cc230569ea0f6cc5e1efa100432509e44342e9b3d6a9e65ee2bc525f.sl.png)

1. Privzeto boste v zavihku **Po meri**. Izberite zavihek **Formula**.

![Izberite zavihek Formula](../../../../../translated_images/7.3_12_SelectFormula.a7aba25c95956d113865da3f30da3f3872e12c7a7a8f3c65098a3e3fac9616a4.sl.png)

1. Izberite **ikono za razširitev**, da povečate polje **Formula**. Kopirajte in prilepite naslednji izraz Power Fx.

Uporabljamo funkcijo `Concatenate`, da ustvarimo izraz, ki bo filtriral
   - stolpec SharePoint **Status**, ki je enak _Na voljo_,
   - in stolpec SharePoint **Vrsta sredstva**, ki je enak _izbrani napravi iz vozlišča vprašanja_.

    ```text
    Concatenate("Status eq 'Available' and AssetType eq '", Topic.VarDeviceType, "'")
    ```

Izberite **Vstavi**.

![Vnesite izraz Power Fx in izberite vstavi](../../../../../translated_images/7.3_13_EnterFormula.d17cc9f73e01e1cab8e2420a55bcb726ae0a0e55673f81ee3d7fe12d20148b92.sl.png)

1. Izraz Power Fx bo zdaj uporabljen v vhodnem parametru Filter Query akcije **Pridobi elemente**. Nato izberite pogled **Vsi elementi** v **Omeji stolpce po pogledu**. To bo pridobilo samo stolpce na seznamu na podlagi izbranega pogleda.

![Seznam stolpcev po pogledu](../../../../../translated_images/7.3_14_LimitColumnsByView.5537126aaa087bd7f81cc35dfe182aa72cdbec4fe1fb5c2e15823a1275dcaa71.sl.png)

1. Nato bomo posodobili ime spremenljivke za izhod. Izberite zavihek **Izhodi** in izberite spremenljivko `GetItems`.

![Posodobite spremenljivko](../../../../../translated_images/7.3_15_ConfigureOutputs.d4cb0c5c8e37d1859ed705bd1582fce2d063e7f4d65cc036127a846d743ff391.sl.png)

1. Posodobite ime na naslednje.

    ```text
    VarDevices
    ```

![Posodobite ime spremenljivke](../../../../../translated_images/7.3_16_RenameVariable.55d7adb355808d39fe515bf980af123c60e218fa427354079e86efc412dc0f83.sl.png)

1. Pomaknite se navzdol in v razdelku **Uporaba** izberite **Globalno**. To bo omogočilo dostop do spremenljivke v kateri koli temi.

![Posodobite na globalno spremenljivko](../../../../../translated_images/7.3_17_UpdateToGlobalVariable.09bdb05c0938898a04e48b6bcebee1584f17080b63b2577594be74f9f77a5bc3.sl.png)

1. **Zaprite** ploščo **Lastnosti spremenljivke**.

![Zaprite ploščo Lastnosti spremenljivke](../../../../../translated_images/7.3_18_ExitVariablePropertiesPane.b1a5e76dfe490bdf1274d8e8c78df44f9b3e3542180fa52fb6f903a980ef31ab.sl.png)

1. Izberite **plus +** ikono za vstavljanje novega vozlišča, izberite **Upravljanje spremenljivk**, nato pa izberite **Nastavi vrednost spremenljivke**.

![Dodajte vozlišče Nastavi vrednost spremenljivke](../../../../../translated_images/7.3_19_AddSetAVariableValueNode.958d21c21727ef92506fe76cf0458f05ac8508d84d0a4917077d2889410330e2.sl.png)

1. Izberite ikono **večje od** za vhodni parameter **Nastavi spremenljivko**.

![Nastavi spremenljivko](../../../../../translated_images/7.3_20_SelectAVariable.9d3beb144002569b947c90cbec22afcc9cb34f277b21e3f65dcaf69831abc438.sl.png)

1. Izberite izhod teme, ustvarjen prej kot spremenljivko, **VarAvailableDevices**.

![Shrani temo](../../../../../translated_images/7.3_21_SelectVarAvailableDevicesOutput.8d7259eb6ce1bc7c89de10b768b62dc3008ad7468c094249282bfe66436d1672.sl.png)

1. Nato izberite **ikono z elipsami (...)**, da določite vrednost spremenljivke.

![Izberite vrednost spremenljivke](../../../../../translated_images/7.3_22_SelectVariable.f16319e644afc97d24a8cddaf64a7df9fcc52acd7e284b21f20b685a6e53887a.sl.png)

1. Zdaj bomo uporabili izraz PowerFx za nastavitev vrednosti spremenljivke kot lastnosti `value`, vrnjene v odgovoru **Pridobi elemente**, in naredili [obseg spremenljivke](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172618-ebenitez) globalen z dodajanjem predpone `Global`.

Izberite **Vstavi** in **shrani** temo.

![Power Fx formula za vrednost spremenljivke](../../../../../translated_images/7.3_23_PowerFxFormula.f860daa2c8423021926f0697177279ede3d8d443714d471a77e655c3c42edb07.sl.png)

1. Nato moramo posodobiti navodila agenta. Izberite zavihek **Pregled** in nato **Uredi**.

![Uredi navodila](../../../../../translated_images/7.3_24_EditInstructions.ce65a6cbcd74792885230af1da432fbb4079fd8b0f5af24ab840453a900b67a8.sl.png)

1. Dodajte novo vrstico v navodila, kopirajte in prilepite naslednje.

    ```text
    - Help find available devices and give full details using [Available devices]. Always extract the VarDeviceType from the inputs. After giving device details, ask the user if they want to request a device from the list of available devices.
    ```

To navodilo bo usmerjalo generativno AI, da sproži **Na voljo naprave**, da prikaže seznam razpoložljivih naprav s seznama **Naprave** v SharePointu. Izberite celotno mesto za temo v oglatih oklepajih.

![Dodajte navodila](../../../../../translated_images/7.3_25_AddInstructions.1e83853476fed3c8b1c43e657bd1c1351108702288a8f688d8543fbf1c2946fb.sl.png)

1. Vnesite znak poševnice `/` in prikazal se bo seznam tem. Izberite temo **Na voljo naprave**.

![Referenca sprožilca](../../../../../translated_images/7.3_26_SelectAvailableDevicesTopic.1a1beaa256f5417153b7bc55de848b89778f666c213b3a3935444526ab881f0b.sl.png)

1. **Shrani** posodobljena navodila.

![Shrani navodila](../../../../../translated_images/7.3_27_SaveUpdatedInstructions.39908bb60990be971039bf392088fd0ecfa148c4496a6ad7413e1267b9091623.sl.png)

1. Zdaj bomo testirali našega posodobljenega agenta. Izberite **Testiraj** v zgornjem desnem kotu, da prikažete testno ploščo, in **osvežite** testno ploščo. Vnesite naslednje sporočilo agentu.

    ```text
    I need a laptop
    ```

![Testiraj](../../../../../translated_images/7.3_28_Test.a273496de273bf3bebb9ac1504c1cedd8947c250ccf8454cf38b2effbdf66f71.sl.png)

1. Preden agent lahko nadaljuje, mora uporabnik potrditi, da se lahko njegova povezava uporabi. Izberite **Dovoli**.

![Izberite dovoli](../../../../../translated_images/7.3_29_SelectAllow.9f508c4001270252924d889792ecf0cc2a984954b903bb00f7ce6b2dc43d08e3.sl.png)

1. Agent bo izvedel orodje SharePoint, ki pridobi filtriran seznam naprav, kjer je vrsta naprave "prenosnik" in status "na voljo", na podlagi uporabljenega izraza Power Fx. Uporabniku bo vrnjen odgovor v obliki označenih točk.

![Odgovor testa](../../../../../translated_images/7.3_30_TestResponse.b60253568edc8b68d737a62960f4a3fa3620d2ba4658b05aa2503ad5fd763383.sl.png)

1. Zadnja stvar, ki se jo moramo naučiti, je ogled povezav, ki jih uporabljamo, z ogledom strani _Upravljanje vaših povezav_ agenta. Izberite **ikono z elipsami (...)** in nato **Upravljanje povezave**.

![Upravljanje povezave](../../../../../translated_images/7.3_31_ManageConnections.151932ec4f907e020b67c418cf591806da164c74f6b1d9b73c04d7374d9fc505.sl.png)

1. Na tej strani lahko vidimo vse povezave, ki jih uporablja agent. Trenutno je naveden samo en povezava, ki je povezana z orodjem SharePoint, ki je bilo dodano v temo. Izberite **1 orodje** v stolpcu **Uporablja**.

![Uporablja](../../../../../translated_images/7.3_32_UsedBy.1e5ff032f1e02a565a0dafdde4f9436486ed3f012fcc23b824871a71b6de543e.sl.png)

1. Tukaj lahko vidimo podrobnosti akcije Pridobi elemente in se spomnimo _opisa uporabe_, ki smo ga vnesli prej? Tukaj bomo videli opis uporabe. Izberite **Zapri**.

> To nam pove, katere akcije se uporabljajo in njihov namen. To ohranja naše povezave organizirane 📁.

![Opis uporabe](../../../../../translated_images/7.3_33_UsedByInformation.74a42aedb6dc906c678ff8b281a8706e1c0156ee7375111ed20e02d1a1dfd808.sl.png)

1. Vrnite se na zavihek brskalnika s Copilot Studio in **osvežite** testno ploščo, da počistite test.

## ✅ Misija zaključena

Čestitke! 👏🏻 Naučili ste se, kako dodati novo temo iz nič, kako dodati orodje, ki kliče akcijo Pridobi elemente SharePoint konektorja, in uporabiti Power Fx za filtriranje odgovora, da vrne samo naprave, kjer je status na voljo in vrsta naprave prenosnik. 🙌🏻

To je konec **Laboratorija 07 - Dodaj novo temo z vozlišči pogovora**, izberite spodnjo povezavo za prehod na naslednjo lekcijo. V naslednjem laboratoriju bomo razširili primer uporabe iz tega laboratorija.

⏭️ [Pojdi na lekcijo **Izboljšajte interakcije z uporabniki z adaptivnimi karticami**](../08-add-adaptive-card/README.md)

## 📚 Taktični viri

🔗 [Uporaba sistemskih tem](https://learn.microsoft.com/microsoft-copilot-studio/authoring-system-topics?mc_id=power-172618-ebenitez)

🔗 [Teme v Microsoft Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/guidance/topics-overview?WT.mc_id=power-172618-ebenitez)

🔗 [Nastavitev sprožilcev tem](https://learn.microsoft.com/microsoft-copilot-studio/authoring-triggers?WT.mc_id=power-172618-ebenitez)

🔗 [Določanje tem agentov](https://learn.microsoft.com/microsoft-copilot-studio/guidance/defining-chatbot-topics?WT.mc_id=power-172618-ebenitez)

🔗 [Ustvarjanje izrazov z uporabo Power Fx](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172618-ebenitez)

📺 [Avtorstvo tem z uporabo naravnega jezika](https://aka.ms/ai-in-action/copilot-studio/ep6)

📺 [Dodajanje akcij agentom z uporabo konektorjev](https://aka.ms/ai-in-action/copilot-studio/ep4)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/07-add-new-topic-with-trigger" alt="Analitika" />

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje AI [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku naj se šteje za avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne odgovarjamo za morebitna nesporazumevanja ali napačne razlage, ki izhajajo iz uporabe tega prevoda.