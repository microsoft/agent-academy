<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cc4afa4a5a11c9d03896decfbcbd4060",
  "translation_date": "2025-10-20T23:30:28+00:00",
  "source_file": "docs/recruit/09-add-an-agent-flow/README.md",
  "language_code": "sl"
}
-->
# 🚨 Misija 09: Dodajte tok agenta svoji temi za avtomatizacijo

## 🕵️‍♂️ KODNO IME: `OPERACIJA MOČ AVTOMATIZACIJE`

> **⏱️ Časovni okvir operacije:** `~30 minut`  

🎥 **Oglejte si predstavitev**

[![Sličica videa toka agenta](../../../../../translated_images/video-thumbnail.ede12df9aaebcc8996680c8b6555d309b53bdf33d1b0165cae3b5173a6bcdd73.sl.jpg)](https://www.youtube.com/watch?v=vtLZJT3eBXg "Oglejte si predstavitev na YouTubu")

## 🎯 Kratek opis misije

Vaš agent lahko zdaj komunicira z uporabniki in zagotavlja informacije, vendar prava operativna odličnost zahteva, da vaš agent ukrepa. Ta misija bo vašega pogovornega agenta spremenila v avtomatizacijsko moč z opremljanjem z tokovi agenta.

Do konca misije boste ustvarili celovito avtomatizacijo zahteve za napravo, ki zajame uporabniške vnose prek prilagodljive kartice, pridobi podatke iz SharePointa, pošlje obvestila vodjem prek e-pošte in zagotovi nemotene povratne informacije uporabnikom - vse to bo vaš agent orkestriral prek inteligentne avtomatizacije delovnih tokov.

## 🔎 Cilji

V tej misiji se boste naučili:

1. Razumevanje, kaj so tokovi agenta in kako se razlikujejo od oblačnih tokov Power Automate za avtomatizacijo
1. Spoznanje ključnih funkcij, ki tokove agenta naredijo močne, vključno z AI akcijami in naravnim jezikovnim avtorstvom
1. Raziskovanje oblikovalca tokov agenta in kako uporabljati izraze za dinamično obdelavo podatkov
1. Ustvarjanje celovite avtomatizacije zahteve za napravo, ki vključuje podatke SharePointa in e-poštna obvestila

## 🤔 Kaj je tok agenta?

Tokovi agenta so močan način za avtomatizacijo ponavljajočih se nalog in integracijo vaših aplikacij ter storitev. Predstavljajte si jih kot strukturirane, korak za korakom delovne tokove, ki jih vaš agent lahko izvede za avtomatizacijo nalog ali povezovanje z drugimi aplikacijami in storitvami. Lahko jih obravnavate kot mini delovne tokove, ki pomagajo vašemu agentu pri opravljanju nalog, kot so pošiljanje obvestil, posodabljanje zapisov ali odzivanje na dogodke.

Za razliko od avtonomnih agentov, ki uporabljajo AI za sprejemanje odločitev sproti, so tokovi agenta **deterministični delovni tokovi** - kar pomeni, da vedno sledijo isti poti, kar zagotavlja dosledne in zanesljive rezultate.

Preprosto povedano:

- Pomagajo vašemu agentu _opravljati naloge_, ne le _govoriti stvari_ uporabnikom.
- So večkrat uporabni v različnih temah in agentih ter jih lahko sprožijo uporabniška sporočila, dogodki ali druge aplikacije in storitve.

## 🙋🏽 Ja, ampak kako se razlikujejo od oblačnih tokov Power Automate?

Tako tokovi agenta kot oblačni tokovi Power Automate pomagajo pri avtomatizaciji nalog. Namenjeni so različnim namenom in delujejo na različne načine.

### 🤖 Tokovi agenta v Copilot Studiu

**Za kaj so namenjeni:**

- Zasnovani za pogovorne in avtonomne agente (prek navodil agenta) v Copilot Studiu.
- Osredotočeni na pametno, AI-podprto avtomatizacijo, ki komunicira s poslovnimi sistemi.

**Zakaj so uporabni:**

- Enostavni za izdelavo in upravljanje neposredno v Copilot Studiu.
- Odlični za avtomatizacijo nalog, ki se zgodijo _med pogovorom_ z uporabniki, kot je oddaja prošnje za dopust.
- Ni potrebna ločena licenca za Power Automate, saj se obračunava na podlagi uporabe znotraj Copilot Studia. To lahko prihrani čas in stroške za podjetja.

**Omejitve:**

- Ne morete jih deliti, kopirati ali dodeliti so-lastnikov.
- Tokovi agenta so vidni in uporabni samo znotraj Copilot Studia.
- Trenutno je mogoče sprožilce dogodkov za agente urejati v portalu za ustvarjanje Power Automate.

### ☁️ Oblačni tokovi Power Automate

**Za kaj so namenjeni:**

- Zasnovani za splošno avtomatizacijo med številnimi aplikacijami in storitvami.
- Lahko delujejo samostojno ali v povezavi s tokovi agenta.

**Zakaj so uporabni:**

- Ponuja širok nabor konektorjev.
- Idealni za avtomatizacijo procesov zunaj agentov.
- Lahko jih delite, ponovno uporabite in upravljate med ekipami.

**Zahteve:**

- Za njihovo uporabo potrebujete licenco Power Automate.

### 📗 Povzetek

| Uporabite to | Ko želite |
| :- | :- |
| Tokovi agenta | Avtomatizirati naloge znotraj agenta, uporabljati AI in vse upravljati v Copilot Studiu |  
| Oblačni tokovi Power Automate | Avtomatizirati med aplikacijami in storitvami ali graditi delovne tokove zunaj agentov |

## 👍🏻 Zakaj uporabljati tokove agenta

Tokovi agenta vedno sledijo določeni poti - ob enakem vhodu vedno opravijo enako nalogo.

To jih naredi:

- **Zanesljive** - lahko zaupate, da se bodo vedno obnašali enako.
- **Predvidljive** - veste, kakšen rezultat pričakovati, ko se tok zažene.
- **Na pravilih temelječe** - sledijo korakom, ki jih določite.

Druge prednosti so:

- **Avtomatizacija** - omogoča vašemu agentu obravnavo ponavljajočih se nalog, kot so oddaja obrazcev ali pošiljanje obvestil.
- **Povezanost** - povezava z več kot 1400 konektorji, kot so ServiceNow, SharePoint, Salesforce. Lahko pa ustvarite svoj prilagojen konektor.
- **Tesna integracija** - tokovi agenta so del logike agenta, sprožijo jih neposredno uporabniška sporočila ali dejanja v pogovoru.
- **Razširljivost** - ponovno uporabite tokove med več agenti ali scenariji.
- **Brez kode ali z malo kode** - tokove lahko ustvarite z uporabo naravnega jezika ali vizualnega oblikovalca.
- **Vse na eni platformi** - tokove agenta lahko oblikujete, testirate in uvedete na enem mestu - Copilot Studio. Ni potrebe po preklapljanju med platformami.

## 🏄🏻‍♂️ Kako tokovi agenta izboljšajo vašega agenta?

Tokovi agenta razširijo zmožnosti vašega agenta onkraj "klepetanja" z uporabniki. Omogočajo mu ukrepanje in interakcijo s sistemi.

Recimo, da delate v finančnem oddelku in prejemate veliko računov od dobaviteljev. Običajno mora nekdo prebrati vsak račun, izluščiti pomembne podrobnosti - znesek, datum, od koga je, preveriti, ali se vse ujema z vašimi evidencami, nato pa ga poslati pravi osebi v odobritev. To zahteva čas in trud.

S tokovi agenta v Copilot Studiu lahko ta proces avtomatizirate. Takoj ko račun prispe, agent:

1. Prebere dokument z uporabo inteligentne obdelave dokumentov za iskanje ključnih informacij.
1. Preveri podrobnosti glede na vaše poslovne podatke, da se prepriča, da je vse pravilno.
1. Usmeri račun v odobritev pravi osebi.

To prihrani čas, zmanjša napake in naredi celoten proces veliko bolj gladek.

### Predstavljajte si to tako

- **Agenti**: pametni odločevalci
- **Tokovi agenta**: zanesljivi izvajalci

### Zakaj je to pomembno

- Dobite najboljše iz obeh svetov: zanesljivo avtomatizacijo in prilagodljiv AI.
- Enostavno je graditi in posodabljati tokove, ko se vaše poslovne potrebe spremenijo.
- Avtomatizacijo lahko razširite med ekipami.

## 🔌 Ključne funkcije, ki tokove agenta naredijo močne

1. **Naravno jezikovno avtorstvo**
    - Opisujete, kaj želite, da tok naredi, v preprostem jeziku.
    - Copilot razume vaš namen in ustvari tok za vas.
    - Ni potrebe po pisanju kode - samo razložite svojo idejo.

1. **AI akcije**

    Uporabite AI za:

    - Branje in razumevanje dokumentov ali slik.
    - Povzemanje dolge vsebine v kratke, uporabne odgovore.
    - Pametne priporočila ali odločitve.

1. **Generativne akcije**
    - Te omogočajo, da se tok prilagaja v realnem času.
    - Agent lahko načrtuje in prilagaja korake glede na spreminjajoče se informacije.

1. **Integracijske akcije**
    - Povežite svoj tok z drugimi orodji, kot so Outlook, Microsoft Teams, ServiceNow, SharePoint in druge aplikacije ter storitve, prek več kot 1400 vgrajenih konektorjev ali prek svojega prilagojenega konektorja.
    - To pomaga vašemu agentu delovati z aplikacijami, ki jih vaša ekipa že uporablja.

1. **Človek v zanki**
    - Dodajte korake za odobritev, kjer mora oseba nekaj pregledati ali potrditi.
    - [Napredne odobritve](https://learn.microsoft.com/microsoft-copilot-studio/flows-advanced-approvals?WT.mc_id=power-172621-ebenitez) podpirajo opomnike, delegacije in večstopenjske odobritve.

## ⚙️ Kako delujejo

1. **Sprožilec**

    Dogodek sproži tok - na primer, ko uporabnik postavi vprašanje, sproži tok iz teme, ob določenem času ali ob dogodku v drugem sistemu.

1. **Akcije**

    To so koraki, ki jih agent nato sledi - pošlje e-pošto, pokliče API, posodobi vstopnico v ServiceNow.

## 🧶 Kako ustvariti tok agenta

1. **Naravni jezik**: opišite, kaj želite, da agent naredi, in Copilot ga bo ustvaril za vas.
1. **Oblikovalsko platno**: povlecite in spustite akcije, pogoje in zanke v oblikovalcu tokov agenta, da ustvarite svoj tok agenta.

## 🎨 Kaj je oblikovalec tokov agenta?

To je vizualno orodje v Copilot Studiu, ki vam pomaga ustvariti, urejati in upravljati tokove agenta, ki zagotavljajo korak za korakom navodila, ki jih agent sledi za dokončanje nalog. Zasnovano je tako, da je enostavno za uporabo, tudi če ste novinec pri tokovih agenta.

### Ključne funkcije oblikovalca tokov agenta

1. **Vizualno platno**
    - Celoten tok lahko vidite razporejen kot diagram.
    - Enostavno povečujete/pomanjšujete, prilagodite pogled ali uporabite mini zemljevid za navigacijo po velikih tokovih.

1. **Dodajanje in odstranjevanje akcij**
    - Kliknite gumb _plus (+)_, da dodate novo akcijo, kot je pošiljanje sporočila ali posodabljanje elementa na seznamu SharePoint.
    - Akcije lahko iščete med konektorji in jih konfigurirate prek njihovih nastavitev.
    - Za odstranitev akcije kliknite _tri pike (⋮)_ in izberite _Izbriši_.

1. **Preverjanje parametrov**
    - Kliknite katero koli akcijo, da si ogledate ali uredite njene nastavitve, imenovane _parametri_.
    - Vrednosti lahko vnesete ročno ali uporabite _izraze_, da jih naredite dinamične.

1. **Zgodovina različic**
    - Vsakič, ko shranite svoj tok, se zabeleži različica.
    - Po potrebi se lahko vrnete nazaj in si ogledate ali obnovite prejšnjo različico.

1. **Preverjanje napak**
    - _Preverjevalnik toka_ označi morebitne napake.
    - Vse napake je treba odpraviti pred objavo vašega toka.

1. **Objava in testiranje**
    - Ko je vaš tok brez napak, ga objavite, da postane aktiven.
    - Uporabite funkcijo _Test_, da ročno ali samodejno zaženete svoj tok in preverite, ali deluje, kot je pričakovano.

### Zakaj uporabljati oblikovalca tokov agenta?

- **Vizualno in intuitivno** - tokove lahko gradite z vlečenjem in klikanjem.
- **Varno za eksperimentiranje** - zgodovina različic vam omogoča razveljavitev sprememb.
- **Vgrajeno testiranje** - pomaga vam zagotoviti, da vse deluje, preden gre v živo.

## 🔤 Omenili ste _izraze_ - kaj so izrazi?

Izrazi so majhne formule ali ukazi, ki pomagajo vašemu toku agenta pri delu s podatki. Uporabljate jih za izračun vrednosti, oblikovanje besedila, sprejemanje odločitev ali pridobivanje specifičnih informacij iz vhodnih podatkov.

### Zakaj uporabljati izraze?

Izrazi vam omogočajo:

- **Prilagoditev obdelave podatkov** - združevanje imen, oblikovanje datumov.
- **Sprejemanje odločitev** - če je vrednost večja od 10, naredite nekaj.
- **Pretvorba podatkov** - sprememba besedila v male črke, izvleček dela niza.
- **Avtomatizacija logike** - brez pisanja celotne kode.

### Kako izgledajo izrazi?

Izrazi uporabljajo funkcije. Tukaj si bom sposodil razlago o tem, kaj so funkcije, od nekdanjega Microsoftovega MVP-ja, Jerryja Weinstocka.

!!! citat
    Funkcije so vgrajena logika za pretvorbo vaših podatkov bodisi prek preprostih ali kompleksnih operacij v vašem izrazu.

Funkcije vam omogočajo, da gradite izraze, ne da bi morali pisati kodo.

Način, kako to rad opisujem, je, da je funkcija v tokovih agenta podobna funkcijam v Excelu. Na podatkih lahko izvedete operacijo, da jih pretvorite v želeni izhod. Ko gradite svojo formulo v Excelu, izberete vhodno vrednost iz celic v tabeli ali obsega, nato pa uporabite funkcije za manipulacijo izhodnih podatkov. Primer je uporaba funkcije `COUNT`, da ugotovite število celic, ki vsebujejo številke iz obsega.

V tokovih agenta namesto sklicevanja na podatke iz celic v tabeli sklicujete na izhode podatkov iz sprožilca ali akcij pri gradnji svojih izrazov. Nadaljujoč s prejšnjim primerom, uporabite funkcijo `length`, da pridobite število elementov, vrnjenih iz akcije konektorja _Get items_ v SharePointu.

### Zakaj so funkcije pomembne?

Uporaba funkcij naredi vaše tokove agenta:

- **Pametnejše** - lahko se odzivajo na različne vnose ali pogoje.
- **Prilagodljive** - lahko prilagodite obdelavo podatkov.
- **Učinkovite** - izognete se ročnim korakom z avtomatizacijo logike.

### Najbolj uporabne funkcije

Naslednje so pogoste funkcije, ki se uporabljajo v tokovih agenta. Za celoten seznam funkcij obiščite [referenčni vodič](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez).

#### 🔡 Besedilo

- `concat()` - Združi dva ali več delov besedila.
      - Primer: `concat('Pozdravljen ', firstName)` → “Pozdravljen Janez”

- `toLower()` / `toUpper()` - Spremeni besedilo v male ali velike črke.
      - Uporabno za standardizacijo vnosa.

- `substring()` - Izvleče del niza.
      - Primer: Pridobite prve 3 črke imena.

- `trim()` - Odstrani presledke na začetku in koncu besedila.

#### 🔢 Matematika in številke

- `add()`, `sub()`, `mul()`, `div()` - Osnovne matematične operacije.
      - Primer: `add(5, 3)` - izhod je 8

#### 📅 Datum in čas

- `utcNow()` - Pridobi trenutni datum in čas v UTC.
      - Odlično za časovne oznake.

- `addDays()`, `addHours()` - Doda čas datumu.
- Primer: `addDays(utcNow(), 7)` rezultat je 7 dni od danes.

- `formatDateTime()` - Formatira datum v berljivo besedilo.
      - Primer: Ponedeljek, 7. julij 2025

#### ✅ Logično

- `if()` - Izvede eno vrednost, če je res, drugo, če je napačno.
      - Primer: `if(score > 50, 'Pass', 'Fail')`

- `equals()` - Preveri, ali sta dve vrednosti enaki.

- `and()`, `or()`, `not()` - Združuje več pogojev.

#### 🪣 Druge uporabne funkcije

- `coalesce()` - Vrne prvo ne-prazno vrednost.
      - Uporabno za rezervne/privzete vrednosti.

- `guid()` - Ustvari edinstven ID.
      - Uporabno za sledenje ali beleženje.

- `length()` - Prešteje, koliko znakov ali elementov je v nizu ali tabeli.

## ⭐ Najboljše prakse

Tukaj je nekaj najboljših praks za gradnjo agentnih tokov v Copilot Studiu.

1. **Začnite preprosto in postopoma gradite**

    - Začnite z majhno, jasno nalogo, kot je pošiljanje sporočila.
    - Dodajte več korakov po testiranju osnov vaše avtomatizacije.

1. **Uporabljajte jasna in opisna imena akcij**

    - Jasno označite vsak korak, da boste vi in vaša ekipa razumeli, kaj počne.
    - Primer: namesto privzetega imena "Posodobi element" za akcijo SharePoint konektorja, ga preimenujte v to, kar posodablja, na primer "Posodobi status naprave."

1. **Preverite napake pred objavo**

    - Uporabite **preverjevalnik toka**, da najdete in odpravite morebitne težave.
    - Tokov ne morete objaviti, če so v njih napake, zato jih poskusite odpraviti takoj, ko se pojavijo.

1. **Temeljito preizkusite svoj tok**

    - Samo zato, ker se shrani in objavi, še ne pomeni, da deluje, kot je pričakovano.
    - Uporabite funkcijo _Test_, da ročno ali samodejno zaženete svoj tok in preverite rezultate.

1. **Uporabljajte zgodovino različic**

    - Pogosto shranjujte svoj tok, da se lahko po potrebi vrnete na prejšnje različice.
    - Prejšnje različice lahko pregledate in obnovite z uporabo plošče _Zgodovina različic_.

1. **Pametno uporabljajte parametre in izraze**

    - Pri konfiguriranju akcij uporabite parametre, da bo vaš tok dinamičen.
    - Vrednosti lahko vnesete ročno ali uporabite izraze za njihovo izračunavanje, ali pa jih kombinirate z vrednostmi iz prejšnjih akcij z uporabo izbirnika _dinamične vsebine_.

1. **Izbrišite neuporabljene akcije**

    - Če dodate akcijo in se kasneje odločite, da je ne potrebujete, jo odstranite, da ohranite svoj tok čist.

## 🧪 Laboratorij 09 - Dodajanje agentnega toka za avtomatizacijo in izboljšanje zmogljivosti tem

Zdaj se bomo naučili, kako izboljšati našo temo z adaptivnimi karticami in uporabo naprednih funkcionalnosti tem in vozlišč.

- [9.1 Ustvarite agentni tok](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.2 Dodajte agentni tok v temo](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.3 Posodobite temo Zahteva za napravo z več vozlišči za boljšo uporabniško izkušnjo](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.4 Testirajte agenta z več scenariji](../../../../../docs/recruit/09-add-an-agent-flow)

### ✨ Primer uporabe

**Kot** vodja zaposlenih

**Želim** prejemati zahteve za naprave

**Da lahko** pregledam naprave, ki jih zaposleni zahtevajo.

Začnimo!

### Predpogoji

1. **Seznam SharePoint**

    Uporabili bomo seznam **Naprave** v SharePointu iz [Lekcija 00 - Nastavitev tečaja - Korak 3: Ustvarite novo SharePoint mesto](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Če seznama **Naprave** v SharePointu še niste nastavili, se vrnite na [Lekcija 00 - Nastavitev tečaja - Korak 3: Ustvarite novo SharePoint mesto](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. **Agent za pomoč uporabnikom Contoso**

    Uporabili bomo istega agenta, ki smo ga ustvarili prej v [Lekcija 06 - Ustvarite prilagojenega agenta z naravnim jezikom s Copilotom in ga povežite z vašimi podatki](../06-create-agent-from-conversation/README.md).

### 9.1 Ustvarite agentni tok

V tej vaji bomo ustvarili agentni tok, ki pridobi element SharePointa iz izbrane naprave in pošlje e-pošto vodji s podrobnostmi o napravi.

1. V temi **Zahteva za napravo** se pomaknite navzdol do vozlišča **Vprašaj z adaptivno kartico** in dodajte novo vozlišče. Izberite **Dodaj orodje** in v zavihku **Osnovna orodja** v pojavnem oknu izberite **Nov agentni tok**.

    ![Dodaj nov agentni tok](../../../../../translated_images/9.1_01_AddNewAgentFlow.2b9078604a054d1f022f9c73adaf10fe430e81875ec8717a7f70ef7b05f11c15.sl.png)

1. Naložil se bo **Oblikovalec agentnih tokov** s sprožilcem in akcijo.

    - **Sprožilec** - Ko agent pokliče tok
        - To bo sprožilo tok iz agenta Copilot Studio.

    - **Akcija** - Odgovori agentu
        - To pošlje odgovor, ki lahko vsebuje izhodne vrednosti nazaj agentu Copilot Studio.

    Izberite sprožilec.

    ![Izberite sprožilec](../../../../../translated_images/9.1_02_SelectTrigger.92dc20442add764c8aa4b7f737f28416a3223e4471562462ed6dcba2dc7c7936.sl.png)

1. Nato bomo dodali več vnosov za agentni tok.

    - `DeviceSharePointId` - tukaj se bo shranila vrednost, ID, elementa SharePointa. Ta vrednost ID je izhod iz vozlišča Vprašaj z adaptivno kartico, kjer je uporabnik izbral napravo.

    - `User` - to bo ime uporabnika, ki bo iz sistemske spremenljivke agenta.

    - `AdditionalComments` - to bo komentar, ki ga je vnesel uporabnik, kar je izhod iz vozlišča Vprašaj z adaptivno kartico.

    Najprej bomo dodali `DeviceSharePointId` kot vnos za naš sprožilec. Izberite **+ Dodaj vnos**.

    ![Dodaj vnos](../../../../../translated_images/9.1_03_AddInput.fd1e0a99ecb5e20f3a518cb23fc0d22c6db1435c5ffb2e183fce3b8a056287bb.sl.png)

1. Za vrsto uporabniškega vnosa izberite **Besedilo**.

    ![Izberite Besedilo](../../../../../translated_images/9.1_04_SelectText.47ca776822ec5a6c1339c012d51e0eb6eac6bf8315d4ac6f25498b10ada16df9.sl.png)

1. Za ime vnosa vnesite naslednje.

    ```text
    DeviceSharePointId
    ```

    ![Vnos DeviceSharePointId](../../../../../translated_images/9.1_05_DeviceSharePointIdInput.caf77f8eb60a1b8649ea8b0abf05dfce9fa4bef9d9c465cd8906395e5b44842e.sl.png)

1. Zdaj bomo dodali drugi vnos, `User`. Ponovite iste korake, izberite **+ Dodaj vnos** in izberite **Besedilo**.

    ![Dodaj vnos](../../../../../translated_images/9.1_06_AddInput.3ca4bff9991b6e8a331bd909ff58038387696ce7b6ee7a932a88316aff41bc57.sl.png)

1. Za ime vnosa vnesite naslednje.

    ```text
    User
    ```

    ![Vnos User](../../../../../translated_images/9.1_07_UserInput.16b2405f2d5744ea14a6a67b69539ba24719aaf642ddfc2b281e784d74d8c1ea.sl.png)

1. Zdaj bomo dodali tretji vnos, `AdditionalComments`. Ponovite iste korake, izberite **+ Dodaj vnos** in izberite **Besedilo**.

    ![Dodaj vnos](../../../../../translated_images/9.1_08_AddInput.4685bb77618e6d9cfca7a42a0945d10f59825b1ca42de372dcf07c9170451680.sl.png)

1. Za ime vnosa vnesite naslednje.

    ```text
    AdditionalComments
    ```

    ![Vnos AdditionalComments](../../../../../translated_images/9.1_09_AdditionalComments.a4587b59b85450ca0566615c9473132dd6447e6c7513e4926942655aa0e80195.sl.png)

1. Za vnos `AdditionalComments` ga bomo posodobili, da bo neobvezen. Izberite **ikono s tremi pikami (...)** in izberite **Naredi polje neobvezno**.

    ![Naredi polje neobvezno](../../../../../translated_images/9.1_10_Optional.753bd03817c2eb37bb44a7bfd7d29314aa7109cde02e3f619c01c42bc9170b71.sl.png)

1. Odlično delo! Sprožilec je zdaj konfiguriran, nadaljujmo. Izberite **plus + ikono** pod sprožilcem, da vstavite novo akcijo.

    ![Dodaj akcijo](../../../../../translated_images/9.1_11_AddAction.86c14acd1ce22e99b7244e0001f0039362ff6ac3efafe03956788aaa31e705af.sl.png)

1. Pojavi se **Plošča z akcijami**, kjer si lahko ogledate akcije iz več kot 1400 vgrajenih konektorjev za Microsoftove in tretje stranke. V **iskalno polje** vnesite naslednje,

    ```text
    Get item
    ```

    Seznam akcij se bo prikazal v rezultatih iskanja. Izberite akcijo **Pridobi element** iz konektorja **SharePoint**.

    ![Akcija Pridobi element](../../../../../translated_images/9.1_12_AddGetItemAction.434cdcb822e1f72993fc4a0c0ad753e1220456f9dab8fc307d42f5711071d45b.sl.png)

1. Zdaj lahko začnemo konfigurirati akcijo **Pridobi element**.

    Izberite **Ikono s tremi pikami (...)** v akciji **Pridobi element**.

    ![Izberite ikono s tremi pikami](../../../../../translated_images/9.1_13_SelectEllipsis.88bf304067f3103825f183f8962634af831460541290533e5670f4c014a97c46.sl.png)

1. Izberite **Preimenuj**.

    ![Izberite Preimenuj](../../../../../translated_images/9.1_14_SelectRename.74d99c883418b7dbf58758304976cac1d0f2afd30e4cd1992830f00775a46b18.sl.png)

1. Preimenujte akcijo v,

    ```text
    Get Device
    ```

    ![Preimenuj akcijo](../../../../../translated_images/9.1_15_RenameAction.ff64b79f6e6603ae89f272f91d84ff4432c04ba103c401a2808a767e3ceb5617.sl.png)

1. V polju **Naslov mesta** izberite **Naslov mesta** SharePoint mesta Contoso IT, ustvarjenega v [Lekcija 00 - Nastavitev tečaja - Korak 3: Ustvarite novo SharePoint mesto](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    V polju **Ime seznama** izberite seznam **Naprave** v SharePointu.

    ![Vnos parametrov](../../../../../translated_images/9.1_16_SharePointSiteAndListParameters.af6e0b112eb4bfb210f9259da02b459097a06307afa6ca269cb33aa9ecc1c1e4.sl.png)

1. V polju **Id** izberite **ikono strele** ali **ikono fx** na desni strani.

    ![Izbirnik dinamične vsebine](../../../../../translated_images/9.1_17_InsertExpressionIcon.6e250bb84e7b8884de7b2052005f7ff3cd95f2c28671d2da7965001b3f621902.sl.png)

1. V zavihku **Dinamična vsebina** v pojavnem oknu vnesite naslednje,

    ```text
    sharepoint
    ```

    Rezultati iskanja bodo prikazali vhodne parametre, ki ustrezajo iskani vrednosti. Izberite parameter **DeviceSharePointId** iz sprožilca.

    Nato izberite **Dodaj**, da dodate vhod dinamične vsebine v parameter **Id** akcije.

    ![Izberite vnos DeviceSharePointId](../../../../../translated_images/9.1_18_DeviceSharePointId.b9be8e7c3c6b0ab710a8f662e62a0ec0133a530f6877b6cea3c48acc8022fec5.sl.png)

1. Vhod dinamične vsebine iz sprožilca je zdaj referenciran v parametru **Id** akcije. Naslednji korak je posodobitev enega od naprednih parametrov. Izberite **Prikaži vse**, da si ogledate napredne parametre.

    ![Ogled naprednih parametrov](../../../../../translated_images/9.1_19_AdvancedParameters.4bb8e0c11e7864625ad6c30ab1b9021d367cd77374c56985df7b3d43845a1883.sl.png)

1. Prikazan bo parameter **Omeji stolpce po pogledu**, ki je privzeto nastavljen na **Uporabi vse stolpce (Ne omejuj)**. To vrednost bomo posodobili na pogled, da omejimo stolpce, vrnjene v odgovoru akcije. Izberite parameter **Omeji stolpce po pogledu**, da si ogledate seznam pogledov.

    ![Izberite parameter](../../../../../translated_images/9.1_20_LimitColumnsByView.4d30f532f1e1033323d39df5c9b8e803788ea785ed58de2efca2faa5df4b26fc.sl.png)

1. Izberite pogled **Vsi elementi**.

    ![Izberite pogled Vsi elementi](../../../../../translated_images/9.1_21_SelectView.d180e83d5e62f5fb6994a7071d5e6ce8f88143d8cc833cb55b208c6fee41bc02.sl.png)

1. Izberite **plus + ikono** pod akcijo _Pridobi napravo_, da vstavite novo akcijo.

    ![Dodaj novo akcijo](../../../../../translated_images/9.1_22_AddAnAction.904b79142347fe927168036ade55d842fa088deef53710944272c681421e0e84.sl.png)

1. V iskalno polje vnesite naslednje,

    ```text
    send an email
    ```

    Seznam akcij se bo prikazal v rezultatih iskanja. Izberite akcijo **Pošlji e-pošto (V2)** iz konektorja **Office 365 Outlook**.

    ![Akcija Pošlji e-pošto](../../../../../translated_images/9.1_23_SendAnEmail.f1019365131658b0e71b5b58b57d7d8b3f3a0c670ddb3cca0838bf0b4f8cd354.sl.png)

1. Nato moramo ustvariti povezavo za akcijo konektorja. Izberite **Prijavi se**.

    ![Ustvari povezavo](../../../../../translated_images/9.1_24_CreateConnection.9e968ad4de9d13d81e95779c4fa60809fd40de5f65dbd014f1dc39663c935806.sl.png)

1. Izberite svoj prijavljen uporabniški račun.

    ![Izberite uporabniški račun](../../../../../translated_images/9.1_25_SelectUserAccount.f3c96ac1a377c4b42a6301ba38c21469eb7bd3f48633f04200f1610902f8bdbe.sl.png)

1. Izberite **Dovoli dostop**. Povezava je zdaj ustvarjena.

    ![Izberite dovoli dostop](../../../../../translated_images/9.1_26_AllowAccess.1abcaea31b9846279cafafd7160baea6bec60cdfac8224df7082ceee3ef22a26.sl.png)

1. Preimenujte akcijo v naslednje,

    ```text
    Send an email to manager
    ```

    Nato določimo vhodne parametre naše akcije.

    Za vhodni parameter **Za** izberite sebe. Običajno bi to bil vaš vodja ali pa bi uporabili drugo akcijo, ki bi pridobila vašega vodjo na podlagi vašega profila Entra ID, vendar za namen te lekcije izberite sebe.

    Za vhodni parameter **Zadeva** vnesite naslednje,

    ```text
    Request type: new device
    ```

    Za vhodni parameter **Telo** vnesite naslednje,

    ```text
    Hi,

    New device requested from

    Manufacturer:
    Model:
    Link to item in SharePoint
    Additional comments from:

    This is an automated email from Contoso Helpdesk Copilot
    ```

    ![Preimenuj akcijo in konfiguriraj vnose](../../../../../translated_images/9.1_27_RenameAndConfigureParameters.c3d29a3481fb5c0240cca85db4119387e6b750546ed12e2af4a9ac62d7454f89.sl.png)

1. Nato bomo posodobili vhodni parameter **Telo** z referencami na dinamične vsebine iz **sprožilca** ali akcije **Pridobi element**. Vnesite presledek po drugi vrstici, saj bomo vstavili ime uporabnika iz vhodnega sprožilca, **User**.

    Izberite **ikono strele** ali **ikono fx** na desni strani.

    ![Dodaj vnos User kot dinamično vsebino](../../../../../translated_images/9.1_28_AddUserInput.f38d3df648faef75f1985bdcc23db16e197ccb1ddc015210c43bbb2569fcf654.sl.png)

1. V zavihku **Dinamična vsebina** v pojavnem oknu izberite vhod **User** iz sprožilca.

    Izberite **Dodaj**, da dodate dinamično vsebino **User** v parameter **Telo** akcije.

    ![Izberite vnos User](../../../../../translated_images/9.1_29_SelectUserInput.4efc79f52d74fa7ae13132ea13f7d51b3f4aab6413afc41a8354c5e59852b9fc.sl.png)
1. Dinamična vsebina, ki jo sprožilec vnese, je zdaj referencirana v parametru **Telo** akcije. Enako bomo ponovili za preostale vrstice v telesu sporočila e-pošte.

    ![Uporabniški vnos dodan](../../../../../translated_images/9.1_30_UserInputAdded.905ec0489e4f1bbe7cc071826050834aa1e5acf53f8a65ad59532ea13b81c607.sl.png)

1. Kliknite v prostor poleg `Proizvajalec:`. Izberite **ikono strele** ali **ikono fx** na desni strani.

    V zavihku **Dinamična vsebina** v pojavnem oknu vnesite naslednje v iskalno polje,

    ```text
    manufacturer
    ```

    Izberite vhod **Vrednost proizvajalca** iz sprožilca in kliknite **Dodaj**.

    ![Dodaj vrednost proizvajalca kot dinamično vsebino](../../../../../translated_images/9.1_31_ManufacturerValueAdded.db2cf35a35a20590d80d7f0191d771a045bf55e40ce98982d0e099588e260712.sl.png)

1. Kliknite v prostor poleg `Model:`. Izberite **ikono strele** ali **ikono fx** na desni strani.

    V zavihku **Dinamična vsebina** v pojavnem oknu vnesite naslednje v iskalno polje,

    ```text
    model
    ```

    Izberite vhod **Model** iz akcije **Pridobi element** in kliknite **Dodaj**.

    ![Dodaj vhod Model kot dinamično vsebino](../../../../../translated_images/9.1_32_ModelAdded.ff9d858648ddb85fe70eaaafa6e23d0560500e7327ccb29ee56ecac0d8d36cab.sl.png)

1. Za besedilo `Povezava do elementa v SharePointu` bomo to posodobili v hiperpovezavo v telesu sporočila e-pošte. Kliknite na začetek vrstice in izberite **ikono strele** ali **ikono fx** na desni strani.

    ![Dodaj dinamično vsebino](../../../../../translated_images/9.1_33_AddDynamicContent.c662d682377af82adc52de18e05baf9b6aa5a972882dcf6274f3979f14641627.sl.png)

1. Kliknite za HTML oznako sidra in izberite **ikono strele** ali **ikono fx** na desni strani.

    V zavihku **Dinamična vsebina** v pojavnem oknu vnesite naslednje v iskalno polje,

    ```text
    link to item
    ```

    Izberite vhod **Povezava do elementa** iz akcije **Pridobi element** in kliknite **Dodaj**.

    ![Dodaj Povezavo do elementa kot dinamično vsebino](../../../../../translated_images/9.1_34_AddLinkToItem.6827bd3bad484f7382d060435bb0ef45e9bb1c3ad4774529559bb4c5f9bbca8c.sl.png)

1. Preklopiti moramo na urejevalnik HTML s klikom na ikono **&lt;/&gt;**.

    ![Dodaj uporabniški vnos](../../../../../translated_images/9.1_35_ToggleCodeView.ae3a9caf213f2c6366487e10092ad1fad3494f110936219258d842c23e7f46d9.sl.png)

1. Urejevalnik HTML je zdaj omogočen. Kliknite pred besedilom `Povezava do elementa v SharePointu`, dodajte HTML oznako sidra za ustvarjanje hiperpovezave. Kopirajte in prilepite naslednje.

    ```text
    <a href="
    ```

    ![HTML oznaka](../../../../../translated_images/9.1_36_AddHTMLTag.146220ae5c33eaf9915c393c37d62b9d4b258413e9f4dc42a1ab005437669443.sl.png)

1. Dinamični vhod **Povezava do elementa** je zdaj referenciran v parametru **Telo**. Kliknite za vhodom **Povezava do elementa**, kopirajte in prilepite naslednje.

    ```text
    ">
    ```

    ![HTML oznaka](../../../../../translated_images/9.1_37_AddHTMLTag.48f73b302f6a84bb6a51e0666fd30baf1f8d9d906947d44dc4095ededed18a2d.sl.png)

1. Kliknite za besedilom `Povezava do elementa v SharePointu`, zaprite HTML oznako sidra. Kopirajte in prilepite naslednje.

    ```text
    </a>
    ```

    ![HTML oznaka](../../../../../translated_images/9.1_38_AddHTMLTag.47d2f0521e6aba9d609bfe65d86ebae5786e4ad5465fefb7ae0370db6e924c96.sl.png)

1. Izberite ikono **&lt;/&gt;** za preklop pogleda kode.

    ![Onemogoči pogled kode](../../../../../translated_images/9.1_39_ToggleCodeView.88606eb37d702a686904b2dd8943fcf144cec462b37ee781e8ee0415e62bd951.sl.png)

1. Nato ponovno izberite ikono **&lt;/&gt;** za preklop nazaj na pogled kode.

    ![Preklopi nazaj na pogled kode](../../../../../translated_images/9.1_40_ToggleCodeViewAgain.32da9b9804adbbfaf8d85bdaa6fa51d2ae5fc1fbb97f75084813972c66d0c4d9.sl.png)

1. Opazite, da je prisotnih več dodatnih znakov `&lt;br&gt;`. Izbrišite te znake.

    ![Izbriši znake](../../../../../translated_images/9.1_41_DeleteCharacters.f1ef3830b186c2cd9974ea05e336c83c0706d72ab1010d06283716dc4e982875.sl.png)

1. Zdaj smo končali z dodajanjem hiperpovezave v telo sporočila e-pošte 😎 Izberite ikono **&lt;/&gt;** za preklop pogleda kode.

    ![HTML oznaka urejena](../../../../../translated_images/9.1_42_HTMLTagTidiedUp.1b27fa2c4dc65c3f1a7151abcf6e388f64cb83745b10cd22769c1f9af3421fc6.sl.png)

1. Kliknite za besedilom `Dodatni komentarji od` pred znakom dvopičja in izberite **ikono strele** ali **ikono fx** na desni strani.

    ![Dodaj uporabniški parameter](../../../../../translated_images/9.1_43_AddUserInput.6f0d26739c1b9039383aa37cc46fa1149a269bd4268fb54b897d144afc49c515.sl.png)

1. V zavihku **Dinamična vsebina** v pojavnem oknu vnesite naslednje v iskalno polje,

    ```text
    user
    ```

    Izberite parameter **Uporabnik** iz sprožilca in kliknite **Dodaj**.

    ![Dodaj uporabniški parameter kot dinamično vsebino](../../../../../translated_images/9.1_44_AddUserDynamicContent.bb7c76e92650001207712b3447d3275d584f3ebf739034369869c3facf38eacf.sl.png)

1. Zdaj bomo vstavili izraz, ki bo prikazal vrednost Dodatnih komentarjev, če jih uporabnik vnese v vozlišče **Vprašaj z adaptivno kartico**, sicer pa bo prikazal "Nobenega", če uporabnik ne vnese nobenih komentarjev.

    Kliknite za dvopičjem in izberite **ikono strele** ali **ikono fx** na desni strani.

    ![Dodaj izraz](../../../../../translated_images/9.1_45_AddExpression.c4c92dc4a56fab75c78ec2c5087682521e562264c1710c8dfaa24134adc3a112.sl.png)

1. V zavihku **Funkcija** v pojavnem oknu in v polju za izraze zgoraj vnesite naslednje,

    ```text
    if(empty())
    ```

    Ta izraz uporablja funkcijo `if` za if-else stavek.

    Naslednja uporabljena funkcija je `empty`, ki preverja, ali vrednost obstaja ali ne v parametru niza. Parameter niza, ki ga je treba referencirati, je vrednost vhodnega parametra `DodatniKomentarji` iz sprožilca.

    ![Če prazno](../../../../../translated_images/9.1_46_IfEmptyFunctions.95d21ad01f6f7c290cb8d5a57ccbca9c9532df7ce57f800554dea541d503ddc6.sl.png)

1. Nato kliknite **znotraj oklepajev** za funkcijo `empty`. Vstavili bomo vhodni parameter `DodatniKomentarji` iz sprožilca.

    Izberite zavihek **Dinamična vsebina**. V iskalno polje vnesite naslednje,

    ```text
    Additional
    ```

    Pomaknite se po pojavnem oknu navzdol in izberite vhod **DodatniKomentarji** iz sprožilca. Parameter bo zdaj dodan kot parameter niza v izrazu.

    ![Dodaj DodatneKomentarje kot dinamično vsebino](../../../../../translated_images/9.1_47_AdditionalCommentsDynamicContent.f9632f09779888c18a58df8e97ef677ed885b0eaa88c252b13b22c0e4c67495b.sl.png)

1. Nato bomo definirali logiko **_true_**, kjer če je parameter niza `DodatniKomentarji` prazen, želimo prikazati niz (besedilo) `Nobenega`.

    Po oklepaju, ki zapira parameter niza, vnesite naslednje,

    ```text
    , 'None',
    ```

    ![Logika true](../../../../../translated_images/9.1_48_None.31978299f29e07ef3257eedd5dcee09c8675f8b3f61aea8102900118e0b6ca70.sl.png)

1. Na koncu bomo definirali logiko **_false_**, kjer če parameter niza `DodatniKomentarji` ni prazen, želimo prikazati vrednost vhodnega parametra **DodatniKomentarji** iz našega sprožilca.

    > Opomnik: ta vrednost bo iz polja Dodatni komentarji na adaptivni kartici v vozlišču **Vprašaj z adaptivno kartico** v temi **Zahtevaj napravo**.

    Po vejici za našo logiko **_true_** izberite zavihek **Dinamična vsebina**. V iskalno polje vnesite naslednje,

    ```text
    Additional
    ```

    Pomaknite se po pojavnem oknu navzdol in izberite vhod **DodatniKomentarji** iz sprožilca. Parameter bo zdaj dodan kot parameter niza v izrazu.

    Zdaj ga dodajte v naš parameter **Telo** s klikom na **Dodaj**.

    ![Logika false](../../../../../translated_images/9.1_49_AdditionalCommentsDynamicContent.d42c7fc29f65d901bb26dcbc13408c387633ea185cdd79c35d6439231b7363d5.sl.png)

1. Odlično, naš izraz je dokončan! Izraz je zdaj dodan v parameter **Telo**. Na koncu formatirajte zadnjo vrstico v ležečem tisku.

    ![Ležeči tisk](../../../../../translated_images/9.1_50_Italics.a0c01aa33ef4e83167e1fbc21c1d833f95addd60c8f531411cf9c58a96a31b02.sl.png)

1. Zdaj bomo posodobili akcijo **Odgovori agentu**, da pošlje vrednost parametra **Vrednost modela** iz akcije **Pridobi element** nazaj agentu.

    Držite levi gumb miške in se premikajte navzgor znotraj oblikovalca, da si ogledate akcijo **Odgovori agentu**.

    Izberite akcijo **Odgovori agentu** in izberite **Besedilo** kot vrsto izhoda.

    ![Izberite izhod Besedilo](../../../../../translated_images/9.1_51_RespondToTheAgentAction.4c682a440e19a0fcd6d6f51ef9cdbfe76f482a39d635b8905d9b0cbbf33d945f.sl.png)

1. Vnesite naslednje kot ime izhoda.

    ```text
    ModelValue
    ```

    ![Izhod VrednostModela](../../../../../translated_images/9.1_52_ModelValueInput.20609429eb323281051607b090319adc5315c0245c7d61158eb119714fe4318f.sl.png)

1. Izberite polje vrednosti in izberite **ikono strele** ali **ikono fx** na desni strani.

    ![Vstavi izraz](../../../../../translated_images/9.1_53_InsertDynamicContent.108ba565696f9f52d742323e0f4c46c308f322ac4bd67802e3196430155c7443.sl.png)

1. V zavihku **Dinamična vsebina** v pojavnem oknu vnesite naslednje v iskalno polje,

    ```text
    model
    ```

    Izberite parameter **Model** iz akcije **Pridobi element** in kliknite **Dodaj**.

    ![Dodaj parameter Model kot dinamično vsebino](../../../../../translated_images/9.1_54_ModelParameter.f231fd0ec089ac6b9ac1b7fd2e6a60a35b08484ed10b0098cff6b3ce0c7760cb.sl.png)

1. Parameter **Model** je zdaj vrednost izhoda besedila. Izberite **Shrani osnutek**, da shranite tok agenta.

    Zdaj smo dokončali tok agenta 👏🏻

    ![Izberite shrani osnutek](../../../../../translated_images/9.1_55_SaveDraftAgentFlow.5ab97895a901458362881fc9ee576762bdb0883b37a6cbd7a631ddc2750705af.sl.png)

1. Naredimo še eno posodobitev našega toka agenta pred objavo. Izberite zavihek **Pregled** in kliknite **Uredi**.

    ![Izberite Uredi](../../../../../translated_images/9.1_56_EditAgentFlowDetails.023e8149284b9ae79dd3d95f574ff90bbcc1cc4a9fff4be56664ccbe0698f310.sl.png)

1. Za **Ime toka** kopirajte in prilepite naslednje.

    ```text
    Send device request email
    ```

    Za **Opis** izberite **ikono osvežitve**, da uporabite AI za samodejno generiranje opisa na podlagi sprožilca in akcij v toku agenta.

    Kliknite **Shrani**, da shranite posodobljeno ime in opis toka agenta.

    ![Preimenuj, dodaj opis in shrani podrobnosti](../../../../../translated_images/9.1_57_RenameAndDescription.57a190396550bf998d62c49ca359b66211ae50042ac5f8739b32f8b9bc292607.sl.png)

1. Izberite zavihek **Oblikovalec** in kliknite **Objavi**, da objavite tok agenta, da ga lahko dodate kot vozlišče v temo **Zahtevaj napravo**.

    ![Objavi](../../../../../translated_images/9.1_58_Publish.8f43271718c662deee7afea6fb283f64005b277b3a62086e6d91cc0c3ac4f79c.sl.png)

1. Kmalu se bo prikazalo potrditveno sporočilo, ki potrjuje, da je tok agenta objavljen.

    ![Potrditveno sporočilo](../../../../../translated_images/9.1_59_Confirmation.d406bde76c31b27f794d5742c992b8c84283f46b2e54524f1e500d0688a33716.sl.png)

### 9.2 Dodaj tok agenta v temo

Zdaj dodajmo tok agenta v temo **Zahtevaj napravo**.

1. Izberite **Agenti** v meniju na levi strani in izberite **Contoso Helpdesk Agent**.

    ![Izberite Agenti](../../../../../translated_images/9.2_01_SelectAgent.b8a6fd3a8970d6b0c8e78bf0a5411257206612d53acdf9b44f78b2c9c2fe91fc.sl.png)

1. Izberite zavihek **Teme**.

    ![Izberite zavihek Teme](../../../../../translated_images/9.2_02_SelectTopics.3e8618aba5f4a1ddf3dee726b6da9a66ed89d04a2e8ca36b52112a6675c2885c.sl.png)

1. Izberite temo **Zahtevaj napravo**.

    ![Izberite temo Zahtevaj napravo](../../../../../translated_images/9.2_03_SelectRequestDevice.df10472702258708b3d069e718e695b9fcabc61d42901d524dc302a03b3fa4a9.sl.png)

1. Pomaknite se navzdol do vozlišča **Vprašaj z adaptivno kartico** in dodajte novo vozlišče.

    Izberite **Dodaj orodje** in v zavihku **Osnovna orodja** v pojavnem oknu izberite tok agenta **Pošlji e-pošto z zahtevo za napravo**, ki smo ga pred kratkim ustvarili in objavili.

    ![Izberite tok agenta](../../../../../translated_images/9.2_04_SelectAgentFlow.15deca87db95fff1c9d904855d237d22a72c260adf3343d9e78695f07c42a8e0.sl.png)

1. Za vhodne sprožilce našega toka agenta moramo izbrati izhodne spremenljivke iz vozlišča **Vprašaj z adaptivno kartico**.

    Izberite **ikono z elipsami (...)** za vhod **DeviceSharePointId**.

    ![Izberite spremenljivko](../../../../../translated_images/9.2_05_SelectVariable.8fe53cbc0f950f732b9e9002b21d8762ddfe74fb601d61c2a5119e32383450a2.sl.png)

1. Izberite spremenljivko **deviceSelectionId**, ki je eden od izhodov, definiranih v vozlišču **Vprašaj z adaptivno kartico**.

    ![Izberite spremenljivko deviceSelectionId](../../../../../translated_images/9.2_06_SelectdeviceSelectionIdVariable.67c0091e0de9442d3cffbfe3b2cace8d76be37ea67815ddfc99af03ae4b37391.sl.png)

1. Nato izberite **ikono z elipsami (...)** za vhod **Uporabnik**.

    ![Izberite spremenljivko](../../../../../translated_images/9.2_07_SelectVariable.bf851128bec5e0255c6cf361a837ce9701d0afac84ed3d5b89665d111a098386.sl.png)

1. Izberite zavihek **Sistem** v pojavnem oknu spremenljivk in izberite **User.DisplayName**. Ta spremenljivka shranjuje prikazno ime notranjega uporabnika, ki komunicira z agentom.

    ![Izberite sistemsko spremenljivko User.DisplayName](../../../../../translated_images/9.2_08_SelectUser.DisplayNameVariable.926a2a7560402fbd7b224e2bf0ff11df9e5612803b7ce51e36f58201a09bbfd7.sl.png)

1. Nato izberite **ikono večje od** za **Napredni vhodi**, da razširite in si ogledate vhod **DodatniKomentarji**.

    ![Razširi napredne vhode](../../../../../translated_images/9.2_09_ExpandAdvancedInputs.bded22f83fe4eb21237daa254725e12a81ea75be34bcb0e8ab322037a4e6f418.sl.png)

1. Izberite **ikono z elipsami (...)** za vhod DodatniKomentarji.

    ![Izberite spremenljivko](../../../../../translated_images/9.2_10_SelectVariable.86286cc06323e65fb3874b9fd0ea62d140b9e9b9a2b5116d667192a6dca3815f.sl.png)

1. Izberite zavihek **Formula** in ikono za razširitev v pojavnem oknu spremenljivk, saj bomo uporabili izraz Power Fx.

    ![Zavihek Formula](../../../../../translated_images/9.2_11_SelectFormulaAndExpandIcon.3fcd07bfccc4f0779a5d26313b571e60be792da7fd28e937b3e888f8aaeda7e0.sl.png)

1. Podobno kot izraz v toku agenta, ki izvaja pogojno preverjanje z uporabo funkcije _if_, tokrat
    - z uporabo funkcij Power Fx,
    - in vstavljanjem bodisi nobene vrednosti bodisi vrednosti izhodne spremenljivke `commentsId` iz vozlišča **Vprašaj z adaptivno kartico**.

    V polje Power Fx vnesite naslednje funkcije,

    ```text
    If(IsBlank())
    ```

Ta izraz uporablja funkcijo `If` za izjavo if-else.

Naslednja uporabljena funkcija je `IsBlank`, ki preveri, ali vrednost obstaja ali ne obstaja v parametru niza. Parameter niza, na katerega se sklicujemo, je izhodna spremenljivka `commentsId` iz vozlišča **Ask with adaptive card**.

![Funkciji If in IsBlank](../../../../../translated_images/9.2_12_IfIsBlank.07f7516c7e1f7579239a8b3833d64a14eb88dc245cae714b3e07d6298e907d51.sl.png)

1. Nato kliknite **znotraj oklepajev** za funkcijo `IsBlank`. Vstavili bomo izhodno spremenljivko `commentsId` iz vozlišča **Ask with adaptive card**.

Vnesite naslednje znotraj oklepajev,

    ```text
    Topic.commentsId
    ```

In dodajte vejico za oklepajem.

![Sklic na izhod commentsId](../../../../../translated_images/9.2_13_Topic.commentsId.1a04dc190dac334ebf6c4dbc1b6df1aad2e4bbdeeb3ef960871e93614381f079.sl.png)

1. Nato bomo definirali logiko

   - ko je **_true_** - če je parameter niza `Topic.commentsId` prazen, ne želimo vnesti nobene vrednosti.
   - ko je **_false_** - če parameter niza `Topic.commentsId` ni prazen, vnesemo vrednost spremenljivke commentsId.

Po oklepaju, ki zapira parameter niza, vnesite naslednje,

    ```text
    "", Topic.commentsId)
    ```

Izraz Power Fx bi moral biti naslednji,

    ```text
    If(IsBlank(Topic.commentsId), "", Topic.commentsId)
    ```

Odlično delo, naš izraz je dokončan! 🙌🏻 Zdaj izberite **Insert**, da nastavite vhodni parameter toka agenta na izraz Power Fx.

![Izraz Power Fx](../../../../../translated_images/9.2_14_PowerFxExpression.80e76ea59bdb8f131d26edf2657923f4af9000768d44b06c0947115fd218698e.sl.png)

1. **Shrani** temo.

### 9.3 Posodobitev teme Request device z več vozlišči za boljšo uporabniško izkušnjo

Dodali bomo dve dodatni vozlišči:

- **Pošlji sporočilo** - to bo delovalo kot potrditveno sporočilo, ki se sklicuje na izbrano napravo in potrjuje, da je bila zahteva poslana.
- **Upravljanje teme** - za zaključek pogovora bomo preusmerili na vozlišče **End of conversation**.

Začnimo!

1. Izberite **plus + ikono** pod vozliščem toka agenta in izberite vozlišče **Send a message**.

![Dodaj vozlišče za pošiljanje sporočila](../../../../../translated_images/9.3_01_AddSendAMessageNode.ac4111729a2602f8301ecffbcb263d692ecb43478aa9da63cae0dd58160f56c8.sl.png)

1. Vnesite naslednje spodaj v polje za sporočilo,

    ```text
    Thanks
    ```

Nato izberite **Insert variable**, saj se bomo sklicevali na uporabnikovo ime.

![Vstavi spremenljivko](../../../../../translated_images/9.3_02_InsertVariable.c5c9ebce61d1f442413d05f4437f74ee1d9c3a8c2ab696244937c56b5171f310.sl.png)

1. Izberite zavihek **System** in v iskalnem polju poiščite `User`. Izberite spremenljivko **User.DisplayName**.

![Izberi sistemsko spremenljivko](../../../../../translated_images/9.3_03_SelectSystemVariable.47cfac2f3a727dbaf32ae960cbafe43ce9ed00f73edf01ac6d48e5b2b167e5fc.sl.png)

1. Vnesite naslednje spodaj v polje za sporočilo,

    ```text
    . Your selected device,
    ```

Nato izberite **Insert variable** in tokrat v zavihku **Custom** izberite spremenljivko **ModelValue**.

Nato vnesite naslednje spodaj, da dokončate sporočilo.

    ```text
    , has been submitted and will be reviewed by your manager.
    ```

Sporočilo bi moralo izgledati takole.

![Pošlji sporočilo](../../../../../translated_images/9.3_04_SendAMessage.3f6c4b5e53da9c7f9fcf9d0c453a9b65e44e35ea4c1124947fb638d0b682d96d.sl.png)

1. Na koncu izberite **plus + ikono** pod vozliščem **Send a message** in izberite **Topic management**, nato **Go to another topic** in izberite **End of Conversation**.

![Upravljanje teme](../../../../../translated_images/9.3_05_EndOfConversation.3c6c96d03b29a4d0904dea09d96c62d6ad450fe60dd8d6b2fe9d31681d6cb147.sl.png)

1. **Shrani** temo.

![Shrani](../../../../../translated_images/9.3_06_SaveTopic.8c9201fabce9f41af03d9f1beb9ce321e4ee9880a94edabe58b592bffebda80a.sl.png)

### 9.4 Testiranje agenta z več scenariji

Odlično delo!!! 😁 Zdaj lahko testiramo našega agenta.

#### 9.4.1 Zahteva za napravo in vnos komentarja v prilagodljivo kartico

1. **Osveži** testno okno, izberite ikono **activity map** in vnesite naslednje kot sporočilo agentu.

    ```text
    I need a laptop
    ```

![Testiranje agenta](../../../../../translated_images/9.4_01_TestAgent_RequestDevice_Yes.e73a5076dcd7179901dc0536624a039e372e405a6aac7ab89a632ce81bacdc2e.sl.png)

1. Agent sproži **Available devices** in odgovori s seznamom razpoložljivih naprav. Vnesemo naslednje kot odgovor na vprašanje, ali želimo zahtevati napravo.

    ```text
    Yes
    ```

![Da](../../../../../translated_images/9.4_02_RequestDevice_Yes.25c34743bc168fde33f91743316e7bad87ee0e47150c93e9b82c4662404dcaba.sl.png)

1. Opazite, kako je agent sprožil **Request device** v skladu z navodili agenta in da je prilagodljiva kartica zdaj prikazana v sporočilu agenta.

Izberite napravo **Surface Laptop 15** in dodajte naslednje kot komentar.

    ```text
    I need 16GB of RAM please
    ```

![Izberite napravo in vnesite komentar](../../../../../translated_images/9.4_03_SelectDeviceAndEnterComment.570ea590309bf97edc40c6f7b53dbdc1174365860d8e8a4c32cfb7f1837621c2.sl.png)

1. Pomaknite se navzdol, dokler ne vidite gumba **Submit Request**, in ga izberite, da pošljete prilagodljivo kartico agentu.

![Pošlji zahtevo](../../../../../translated_images/9.4_04_SubmitRequest.ce3f4f44b90243a18dbfb401548b9b3cefd3ea17d8293a1bc3377323e3449da9.sl.png)

1. Izberite **Allow**, da agent uporabi vaše poverilnice za avtentikacijo povezave dveh akcij konektorja.

![Dovoli](../../../../../translated_images/9.4_05_SelectAllow.f7b5bda068fbaee83dcb1cff03a52c946fb4d879137c55f4e5f9eb3953985e0e.sl.png)

1. Agent bo nato prikazal potrditveno sporočilo, ki vključuje izbrani model, nato pa preusmeril na temo **End of Conversation**. Super!

![Zahteva poslana](../../../../../translated_images/9.4_06_RequestSubmitted.1d4d2e9afbc222a5ba79a4c254e7b2364d6eafc1a200ad6ac0aa142f9f10642d.sl.png)

1. Izberite **Da**, da preverite preostanek teme **End of Conversation**.

![Izberite Da](../../../../../translated_images/9.4_07_RedirectNode.e7b1390e4eafe8c2c815fc8ce7fdda56617d9fbeccb0d59423ad2899a8e5f897.sl.png)

1. Nato ocenite izkušnjo z izbiro katere koli zvezdice na kartici za ocenjevanje.

Agent bo nato nadaljeval do zadnjega vozlišča **Question** v temi **End of Conversation**. Izberite **Ne**.

![Tema End of Conversation](../../../../../translated_images/9.4_08_EndOfConversation.b35507f7f561633c0cb3b6c15dc007ae4197a72d58afd8ae616bea439bd6e148.sl.png)

1. Tema se bo nato zaključila, saj bo v testnem oknu prikazano končno sporočilo.

![Tema End of Conversation](../../../../../translated_images/9.4_09_EndOfConversation.438891b82e322b8a2648533200fbcd01c660ab049223b0920cdd0fbfcdeeb888.sl.png)

1. Preverite svojo mapo Prejeto v e-poštnem računu, da pregledate e-pošto, ki jo je agent poslal upravitelju. Vidite lahko podrobnosti o izbrani napravi in opombo, vneseno v prilagodljivo kartico.

![Prejeta e-pošta](../../../../../translated_images/9.4_10_ReviewEmailMessageWithComment.b0138b0bb9d08aacbd8bbb02fdb633a6796b4131cf8d83212adeabaa1ce04a18.sl.png)

1. Kliknite hiperpovezavo in brskalnik bi moral naložiti element SharePoint izbrane naprave. Super!

![Kliknite hiperpovezavo v e-pošti](../../../../../translated_images/9.4_11_SelectLinkInEmail.2179f17165b61ba1e8aee68e8de4c752d64b0780ad86e0fe9054580d9c24e208.sl.png)

#### 9.4.2 Zahteva za napravo brez vnosa komentarja v prilagodljivo kartico

Zdaj testirajmo scenarij, ko komentar ni vnesen.

1. Ponovite iste korake:

   - **Osveži** testno okno in izberite ikono **activity map**
   - Vnesite sporočilo, `I need a laptop`
   - Odgovorite z `Yes` na vprašanje o zahtevi za napravo

![Zahteva za napravo](../../../../../translated_images/9.4_12_RequestDevice_Yes.1e369b8a52547fade4b84a4e36b399ee0692c6edbaa778ba90fe9c15cae75c5c.sl.png)

1. Tokrat izberite napravo **Surface Laptop 13** in ne vnesite komentarja.

![Izberite napravo](../../../../../translated_images/9.4_13_SelectDevice.d9ad15d17de3f06fd948bd529f116f7c05bedf79c016180d8a1dd7e378322b0e.sl.png)

1. **Pošljite** zahtevo z izbiro gumba **Submit Request**.

![Pošlji zahtevo](../../../../../translated_images/9.4_14_SubmitRequest.a783ad8460bfb4485cfd2e97db2c065d9d6bf803279e3bd1569fe3e93548a578.sl.png)

1. Tokrat bo e-pošta, prejeta v vaši mapi Prejeto, prikazala **None** kot komentar.

![Prejeta e-pošta](../../../../../translated_images/9.4_15_ReviewEmailMessage.137f35152c9da4b4a02bebec5f0cc9e55cfa25679770ace003aa19482ed0f3eb.sl.png)

#### 9.4.3 Ne zahtevajte naprave

Testirajmo končni scenarij, ko naprave ne zahtevamo, in tema **Goodbye** bi morala biti sprožena v skladu z navodili agenta.

1. Ponovite iste korake:

   - **Osveži** testno okno in izberite ikono **activity map**
   - Vnesite sporočilo, `I need a laptop`
   - Tokrat odgovorite z `No` na vprašanje o zahtevi za napravo

![Testiranje agenta](../../../../../translated_images/9.4_16_TestAgent_RequestDevice_No.85f205968f1d4083f20cc890a707748f8e06c01a19536cd299a13bdde2350de7.sl.png)

1. Agent je sprožil temo **Goodbye**, vprašanje, definirano v temi, pa je bilo zastavljeno.

![Sprožena tema Goodbye](../../../../../translated_images/9.4_17_Goodbye.05ee598a987237e02866647a9699b0efa7ac58d1f448497f956af2ee815cb961.sl.png)

## ✅ Misija zaključena

Čestitke! 👏🏻 Naučili ste se, kako zgraditi tok agenta in ga dodati obstoječi temi **Request device**, ter kako preusmeriti agenta na drugo temo.

To je konec **Lab 09 - Add an agent flow for automation and enhance topic capabilities**, izberite spodnjo povezavo za prehod na naslednjo lekcijo. V naslednji lekciji bomo razširili primer uporabe iz te lekcije.

⏭️ [Pojdi na lekcijo **Add Event Triggers - Enable autonomous agent capabilities**](../10-add-event-triggers/README.md)

## 📚 Taktični viri

🔗 [Predstavitev tokov agenta: Preoblikovanje avtomatizacije z AI-prvimi delovnimi tokovi](https://www.microsoft.com/microsoft-copilot/blog/copilot-studio/introducing-agent-flows-transforming-automation-with-ai-first-workflows/)

🔗 [Pregled tokov agenta](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview?WT.mc_id=power-172621-ebenitez)

🔗 [Uporaba tokov agenta z vašim agentom](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-172621-ebenitez)

🔗 [Seznam funkcij v referenčnem vodniku](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez)

📺 [Tokovi agenta v Copilot Studio](https://www.youtube.com/watch?v=VJTKyk3Pr7s)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/09-add-an-agent-flow" alt="Analitika" />

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku naj se šteje za avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne odgovarjamo za morebitne nesporazume ali napačne razlage, ki izhajajo iz uporabe tega prevoda.