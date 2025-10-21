<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "75efaf515d5694d4fd549bfd6518901a",
  "translation_date": "2025-10-20T23:16:48+00:00",
  "source_file": "docs/operative-preview/03-automate-triggers/README.md",
  "language_code": "sl"
}
-->
# Misija 03: Dodajanje sprožilcev dogodkov za avtonomno delovanje

--8<-- "disclaimer.md"

## 🕵️‍♂️ KODNO IME: `OPERACIJA SIGNALNA TOČKA`

> **⏱️ Časovni okvir operacije:** `~45 minut`

## 🎯 Povzetek misije

Dobrodošli nazaj, agent. V [Misiji 02](../02-multi-agent/README.md) ste se naučili, kako zgraditi otroškega agenta za sprejem aplikacij in povezanega agenta za pripravo na intervju, da razširite zmogljivosti vašega glavnega agenta za zaposlovanje.

Vaša naloga, če jo sprejmete, je **Operacija Signalna Točka** - poglobitev v **sprožilce dogodkov** - dvig vašega sistema agentov iz reaktivnega v **avtonomno delovanje**. Vaše agente boste preoblikovali iz tistih, ki _odgovarjajo na vprašanja_, v tiste, ki _predvidevajo potrebe_ in _delujejo neodvisno_. S pomočjo sprožilcev dogodkov in avtomatiziranih delovnih tokov bo vaš agent za zaposlovanje zaznal prihajajoče e-pošte z življenjepisi, samodejno obdelal priloge, shranil podatke v Dataverse in obvestil vašo ekipo za zaposlovanje prek Microsoft Teams - vse to, medtem ko se vi osredotočate na naloge z višjo vrednostjo.

Dobrodošli v svetu, kjer se avtomatizacija sreča z inteligenco.

## 🔎 Cilji

V tej misiji se boste naučili:

1. Kako sprožilci dogodkov omogočajo avtonomno vedenje agentov brez interakcije uporabnika
1. Razlike med interaktivnimi in avtonomnimi agenti v Copilot Studio
1. Kako ustvariti sprožilce dogodkov, ki samodejno obdelajo e-poštne priloge in naložijo datoteke v Dataverse
1. Kako zgraditi delovne tokove agentov, ki objavljajo prilagodljive kartice v kanalih Teams za obvestila
1. Kako prenašati podatke med sprožilci dogodkov in delovnimi tokovi agentov za avtomatizacijo od začetka do konca

## 🤔 Kaj je sprožilec dogodka?

Prej v [Recruit](../../recruit/10-add-event-triggers/README.md) smo se naučili o sprožilcih dogodkov. Naredimo kratek povzetek, če ste to zamudili.

**Sprožilci dogodkov** omogočajo agentu, da _deluje_ samostojno, ko se nekaj zgodi v drugem sistemu - brez potrebe po sporočilu uporabnika. Ko se sproži konfiguriran dogodek - na primer "nov element v SharePointu", "nova e-pošta", "dodeljena naloga v Plannerju" ali celo časovno ponavljajoč dogodek, konektor pošlje sprožilni paket vašemu agentu. Agent nato sledi vašim navodilom, da se odloči, katere ukrepe ali teme bo izvedel.

### Ključne značilnosti

- **Avtonomna aktivacija:**
      - Za razliko od sprožilcev tem, ki se začnejo, ko uporabnik piše agentu, se sprožilci dogodkov sprožijo zaradi zunanjih dogodkov, kar omogoča proaktivno vedenje.

- **Pogon s podatki:**
      - Vsak dogodek dostavi paket (spremenljivke + opcijska navodila) prek konektorja. Agent uporabi vaša določena navodila in paket, da izbere, kaj bo naredil naprej.
      - Na primer _pokliče temo_ ali _izvede ukrepe, določene z orodji_.

- **Primeri iz škatle:**
      - Datoteka ali element ustvarjen v SharePoint/OneDrive
      - Naloga v Plannerju zaključena/dodeljena
      - Odgovor na Microsoft Forms poslan
      - Ponavljanje/urnik

    Razpoložljivost je odvisna od podatkovnih politik vaše organizacije, konfiguriranih v Power Automate.

- **Zahteva generativno orkestracijo:**
      - Sprožilci dogodkov so na voljo le, ko je za agenta omogočena generativna orkestracija.

- **Obračunavanje/uporaba:**
      - Vsaka dostava sprožilca šteje kot sporočilo v zmogljivosti Copilot Studio.
      - Na primer, ponavljanje vsakih 10 minut pošlje sporočilo vsakih 10 minut.

- **Model avtentikacije in nastavitev:**
      - Sprožilce dodate v pregled agenta, pod _Sprožilci_. Avtentikacija za konektor sprožilca uporablja račun ustvarjalca agenta ("avtentikacija avtorja agenta").
      - Parametre sprožilca in paket lahko urejate v portalu Power Automate.

- **Testiranje in opazovanje:**
      - Sprožilce lahko testirate iz testnega okna agenta in preverite vedenje z aktivnostnim zemljevidom pred objavo.

!!! info "Povzetek za razvijalce"

    Pomislite na sprožilce dogodkov kot na **signale podobne webhookom**, ki potisnejo strukturiran paket v vašega agenta, kar mu omogoča, da _začne_ delo in poveže ukrepe med sistemi - brez čakanja na zahtevo uporabnika.

### Sprožilci tem - kako se razlikujejo

Prej ste se naučili o sprožilcih tem v [Recruit](../../recruit/07-add-new-topic-with-trigger/README.md), vendar se morda še vedno sprašujete, kako se _sprožilci tem_ razlikujejo od _sprožilcev dogodkov_ in zakaj je ta razlika pomembna za razumevanje, kaj naredi agenta avtonomnega.

Sprožilci tem nadzorujejo _kdaj_ se tema zažene, običajno kot odziv na sporočilo uporabnika.

- V generativni orkestraciji je privzeti sprožilec **Po agentu** - načrtovalec izbere temo, katere ime/opis najbolje ustreza sporočilu uporabnika.
- V klasični orkestraciji je privzeti sprožilec **Fraze** - načrtovalec izbere temo, ko ena ali več sprožilnih fraz najbolje ustreza sporočilu uporabnika.

Drugi tipi sprožilcev vključujejo `Prejeto sporočilo`, `Prejet dogodek`, `Prejeta aktivnost`, `Posodobitev pogovora`, `Prejeto povabilo`, `Preusmeritev`, `Neaktivnost` in `Zaključen načrt`.

!!! info "Osnovna razlika"

    Sprožilci tem so _začetniki aktivnosti pogovora_ znotraj klepeta.
    
    Sprožilci dogodkov so _začetniki sistemskih dogodkov_, dostavljeni prek konektorjev, ki lahko zaženejo agenta brez kakršnegakoli pogovora.

### Hiter vodič: Sprožilec teme vs. Sprožilec dogodka

- **Sprožilec teme:** Uporabnik (ali aktivnost v klepetu) reče/naredi X ➡️ zaženi temo T.
- **Sprožilec dogodka:** SharePoint/Planner/E-pošta/Časovnik sproži dogodek s paketom P ➡️ agent oceni navodila ➡️ ustrezno pokliče ukrepe/teme.

## 🏓 Primerjava interaktivnega agenta in avtonomnega agenta

Zdaj, ko poznate razliko med sprožilci dogodkov in sprožilci tem, se naučimo še razlike med interaktivnim agentom in avtonomnim agentom.

V terminologiji Copilot Studio "interaktivni" pomeni agente, ki se primarno vključujejo prek **tem** v klepetu ali kanalu. "Avtonomni" pa pomeni agente, ki uporabljajo tudi **sprožilce dogodkov**, da delujejo brez vnosa uporabnika.

Naslednja tabela povzema njihove razlike in podobnosti.

| Dimenzija                           | Interaktivni agent     | Avtonomni agent                                                                                              |
|-------------------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------|
| Kako se začne                       | Uporabnik (ali aktivnost v klepetu) sproži temo. Primer: Po agentu, Fraze, Prejeto sporočilo.   | Zunanji sprožilec dogodka pošlje paket prek konektorja agentu. Primer: SharePoint, Planner, e-pošta, urnik itd. |
| Primarna uporaba                    | Vprašanja in odgovori, vodeni delovni tokovi, zahteve v klepetu - Teams, splet itd.  | Proaktivne operacije in avtomatizacija v ozadju - odziv na spremembe sistema in nato obveščanje, shranjevanje ali organizacija nalog. |
| Površina sprožilca                  | Sprožilci tem: Po agentu / Fraze / Prejeto sporočilo / Tipi aktivnosti / Povabilo / Neaktivnost / Zaključen načrt | Knjižnica sprožilcev dogodkov prek konektorjev; paket vključuje podatke dogodka + opcijska navodila. |
| Načrtovalec (generativna orkestracija) | Močno uporabljen za sprožilce Po agentu in Zaključen načrt za izbiro/sekvenciranje tem. | Zahtevano za sprožilce dogodkov; agent uporablja navodila + paket za odločitev, katere ukrepe/teme poklicati. |
| Tipičen primer                     | Uporabnik vpraša "Kakšna je naša politika vračila?" → Tema se zažene, poizveduje po znanju, odgovori. | Nova naloga v Plannerju dodeljena → Sprožilec dogodka se sproži → Agent objavi sporočilo v Teams, posodobi zapis ali pokliče temo. |
| Pot nastavitve                      | Ustvarite teme, določite tip sprožilca, napišite dialog/ukrepe; objavite v kanalih. | Dodajte sprožilec dogodka (Pregled → Sprožilci), avtenticirajte konektor z avtorjevim računom agenta, konfigurirajte paket/navodila; testirajte prek testnega okna; objavite. |
| Avtentikacija in upravljanje        | Deluje v kontekstu kanala/avtentikacije; sprožilci tem se odzivajo na aktivnosti klepeta v dovoljenih kanalih. | Razpoložljivost sprožilcev je odvisna od podatkovnih politik Power Automate; konektorji delujejo pod računom ustvarjalca agenta. |
| Opazovanje                         | Testirajte teme znotraj Copilot Studio, preverite transkripte pogovorov/aktivnosti. | Uporabite Testni sprožilec in aktivnostni zemljevid za preverjanje izvedbe pred objavo, spremljajte aktivnosti po objavi. |
| Vpliv na zmogljivost                | Vsako sporočilo uporabnika/odziv agenta je sporočilo, ki porabi zmogljivost. | Vsaka dostava dogodka je prav tako sporočilo, plus morebitni nadaljnji ukrepi. Primer: ponavljanje vsakih 10 minut = 6 sporočil/uro |

### Kdaj uporabiti katerega?

- Izberite **sprožilce tem (interaktivni)**, ko uporabniki začnejo pogovor z agentom - FAQ, vodeni sprejem, ali naloge v slogu ukazov znotraj klepeta. Sprožilec Po agentu zmanjša ročno kuriranje fraz.
- Dodajte **sprožilce dogodkov (avtonomni)**, ko naj bi agent začel pogovor ali sam izvedel ukrep - ob posodobitvah v SharePoint/Dataverse, prihajajoči e-pošti ali po urniku. To vas premakne iz reaktivnih v proaktivne operacije.

## Nasveti za razvijalce in opozorila

1. **Omogočite generativno orkestracijo** za vsakega agenta, ki ga želite narediti avtonomnega. Sprožilci dogodkov se sicer ne bodo prikazali.

1. **Modelirajte paket zgodaj.** Odločite se, katere minimalne podatke vaš agent potrebuje od sprožilca, kot so `itemId`, `assignedTo`, `dueDate`, in dodajte jedrnata navodila, ki agentu povedo, kateri ukrep/temo naj pokliče glede na vrednosti paketa.

1. **Obseg avtentikacije je pomemben.** Sprožilci se avtenticirajo z uporabo računa ustvarjalca agenta. Prepričajte se, da ima ta račun ustrezna dovoljenja za konektor in da je v skladu s podatkovnimi politikami Power Automate.

1. **Nadzorujte stroške in šum.** Visokofrekvenčna ponavljanja ali zelo "klepetavi" viri lahko hitro povečajo porabo sporočil - kjer je mogoče, omejite ali dodajte pogoje v sprožilec za filtriranje dogodkov.

1. **Testirajte pred objavo.** Uporabite **Testni sprožilec** in aktivnostni zemljevid za spremljanje načrta in izvedenih ukrepov - iterirajte navodila/paket, dokler vedenje ni stabilno.

## 🧪 Laboratorij 03 - Avtomatizacija e-poštnih sporočil s prijavami kandidatov

Naslednje bomo dodali sprožilec dogodka v **Agenta za zaposlovanje** in zgradili delovni tok agenta v otroškem **Agentu za sprejem aplikacij**, da omogočimo nadaljnjo obdelavo za avtonomijo.

### ✨ Scenarij uporabe

!!! info ""

    **Kot** HR kadrovik

    **Želim** biti obveščen, ko v moj nabiralnik prispe e-pošta z življenjepisom, ki je bila samodejno naložena v Dataverse

    **Da lahko** ostanem obveščen o življenjepisih, poslanih po e-pošti za prijave, ki so samodejno naloženi v Dataverse

To bomo dosegli z dvema tehnikama:

1. Sprožilec dogodka, ko prispe e-pošta,
    1. Preverite, ali je `contentType` datoteke enak `PDF` kot tip formata.
    1. Izvlecite datoteko in jo naložite v Dataverse z ukrepi prek konektorja Dataverse.
    1. Nato pošljite poziv agentu za nadaljnjo obdelavo s prenosom vhodnih parametrov iz ukrepov Dataverse.

1. Delovni tok agenta bo dodan otroškemu **Agentu za sprejem aplikacij**, ki ga sproži poziv v sprožilcu dogodka.
    1. Uporabite vhodne parametre, poslane iz poziva sprožilca dogodka, v prilagodljivi kartici, objavljeni v kanalu Microsoft Teams, da obvestite ekipo za zaposlovanje. Prilagodljiva kartica bo vsebovala povezavo do vrstice v Dataverse, ki bo vidna v **Agentu za zaposlovanje**.

Začnimo!

### ✨ Predpogoji za dokončanje te misije

Potrebovali boste **bodisi**:

- **Zaključeno Misijo 01 in Misijo 02** ter pripravljenega Agenta za zaposlovanje, **ALI**
- **Uvožen začetni paket za Misijo 03**, če začenjate na novo ali morate nadoknaditi. [Prenesi začetni paket za Misijo 03](https://aka.ms/agent-academy)

!!! note "Uvoz rešitve in vzorčni podatki"
    Če uporabljate začetni paket, si oglejte [Misijo 01](../01-get-started/README.md) za podrobna navodila o tem, kako uvoziti rešitve in vzorčne podatke v vaše okolje.

Potrebovali boste tudi dostop do **Microsoft Teams**, da dokončate drugi del laboratorijske vaje za objavo prilagodljive kartice v Microsoft Teams.

### Laboratorij 3.1 - Avtomatizacija nalaganja življenjepisov v Dataverse, prejetih po e-pošti

1. V Agentu za zaposlovanje se pomaknite navzdol na **Pregledni zavihek** in izberite **+ Dodaj sprožilec**.

       ![Dodaj sprožilec agentu](../../../../../translated_images/3.1_01_AddTrigger.4d5f4d13a4a6b19fe9ff89e3a483601199d7643236d6df65ff81dfea76d1d443.sl.png)

1. Prikazal se bo seznam sprožilcev. Izberite **Ko prispe nova e-pošta (V3)** in izberite **Naprej**.

       ![Izberite sprožilec Ko prispe nova e-pošta (V3)](../../../../../translated_images/3.1_02_WhenANewEmailArrives.a250875915165d97c1af6eebba70f16fbfc845a37d4d354c9f35a55aa459035e.sl.png)

1. Zdaj boste videli **Ime sprožilca** in **Prijavo** za povezave aplikacij.

       Preimenujte ime sprožilca v naslednje,
    
       ```text
       Ko prispe nova e-pošta od kandidata
       ```

       Prepričajte se, da vidite zeleno kljukico pri vsaki od povezav aplikacij. Če ne vidite zelene kljukice, se prijavite prek elipse (...) in izberite **+ Nova povezava** za ustvarjanje nove povezave.

       ![Posodobite podrobnosti za ime sprožilca in preverite povezave](../../../../../translated_images/3.1_03_RenameTriggerName.3eb80b25bea5f874a51aab600ffd333359de3a981e41eed1b4fc7c8f27eef323.sl.png)

1. Zadnji korak je nastavitev vhodnih lastnosti sprožilca. Posodobite naslednje lastnosti na naslednje vrednosti,

     | Lastnost | Kako nastaviti | Podrobnosti |
     |----------|----------------|-------------|
     | **Vklju
Zdaj bomo posodobili sprožilec dogodka, da dodamo več avtomatizacijskih zmogljivosti. Izberite **tri pike (...)** pri sprožilcu in izberite **Uredi v Power Automate**.

![Izberite Uredi v Power Automate](../../../../../translated_images/3.1_05_SelectEditInPowerAutomate.d298b51d7980cf2fd20a9d8193745aef4ce8097a4a2d33341e2dc159b9bfc099.sl.png)

1. Sprožilec se bo nato naložil kot tok v portalu za ustvarjanje Power Automate. Kar vidite, je oblikovalec tokov v portalu za ustvarjanje Power Automate. Tukaj lahko dodamo dodatno logiko in dejanja za večjo avtomatizacijo. Sprožilec se bo pojavil na vrhu, sledilo pa bo **Pošlje poziv določenemu copilotu za obdelavo** kot zadnje dejanje v toku.

![Oblikovalec tokov v portalu za ustvarjanje Power Automate](../../../../../translated_images/3.1_06_EditInPowerAutomate.f8967ace56354224574517f31a2a2ce0a5b5d3ab85bfb9ec6cf70e83ab1b8e6d.sl.png)

1. Privzeto lahko sprožilec **Ko prispe novo e-poštno sporočilo** v Power Automate obdeluje več e-poštnih sporočil hkrati, če jih več prispe naenkrat, in za celoten paket zažene tok le enkrat.

   Da zagotovite, da se tok zažene ločeno za vsako e-pošto, omogočite nastavitev **Split On** v nastavitvah sprožilca in v polju za spustni seznam izberite `@triggerOutputs()?['body/value']`.

   Z omogočeno nastavitvijo **Split On** in poljem za niz nastavljenim na `@triggerOutputs()?['body/value']` se bo tok izvajal posamično za vsako sporočilo, tudi če jih več prispe hkrati.

![Omogočite nastavitve Split On v sprožilcu](../../../../../translated_images/3.1_07_UpdateTriggerSettings.0f363c4f4655276732575fa795bf1ad1568df34d34b703c85073591cc8585609.sl.png)

1. Nato bomo dodali nekaj logike za preverjanje vrste datoteke priloge. Želimo naložiti samo priloge datotek .PDF in ne slik (te bi lahko bile iz podpisov e-pošte). Izberite ikono **+** pod sprožilcem in izberite **Control** v razdelku **Vgrajena orodja**.

![Izberite Control](../../../../../translated_images/3.1_08_Control.2fa6987b64ae20d5c8343d1b15937432ab6c893750c4b1427df56067023fd437.sl.png)

1. Izberite dejanje **Condition**.

![Izberite dejanje Condition](../../../../../translated_images/3.1_09_AddConditionAction.a7eec0b2a42d4a7c54bd305f0c480b72e3feec155a4e2468e12279082257f21f.sl.png)

1. Zdaj konfiguriramo pogoj za preverjanje, ali je vrsta datoteke priloge .PDF. V polju **Izberite vrednost** izberite **ikono strele** ali **ikono fx** na desni strani.

   1. V polju **Iskanje** vnesite naslednje,

      ```text
      content type
      ```

   1. Nato izberite parameter **Attachments Content-Type** iz sprožilca.

   1. Nato izberite **Dodaj**, da dodate dinamični vhod vsebine v parameter **Id** dejanja.

![Konfigurirajte dejanje Condition](../../../../../translated_images/3.1_10_SetDynamicContentValue_V2.23c3d0438146a5ff0d695077e65a3b1c8b230b54c51ded8a099c6e99a948e9ed.sl.png)

1. Tukaj se za trenutek ustavimo, verjetno ste opazili, da se je samodejno pojavilo dejanje **For each**.

   Izberite dejanje **For each**. To dejanje predstavlja zanko skozi vsako prilogo v e-pošti, saj je parameter **Attachments Content-Type** iz sprožilca povezan z vsako prilogo.

   V ozadju je to niz, zato je bilo dejanje **For each** samodejno dodano, ko smo izbrali parameter **Attachments Content-Type** v dejanju **Condition**.

   Če želite izvedeti več o tem, razširite naslednji dodatni učni blok.

??? info "Dodatno učenje: Samodejno pojavljanje dejanja For each"

🤔 **Zakaj se "Apply to each" ali "For each" samodejno pojavi?**

Ko izberete parameter (dinamično vsebino), ki predstavlja seznam ali niz elementov - na primer seznam prilog, e-poštnih sporočil ali vrstic - Power Automate prepozna, da morda želite obdelati vsak element posebej.

Da bi vam pri tem pomagal, Power Automate samodejno doda zanko **“Apply to each”** (ali **For each**) okoli vašega dejanja. To zagotavlja, da se vaše dejanje izvede enkrat za vsak element na seznamu, namesto da bi poskušalo obdelati celoten seznam naenkrat (kar bi lahko povzročilo napake).

🦋 **Primer**

- Če izberete "Attachments" iz prejšnjega dejanja (kar je niz) in poskušate uporabiti v dejanju, ki pričakuje eno datoteko, Power Automate ovije vaše dejanje v zanko **"Apply to each"** (ali **For each**). 
- Na ta način se vaše dejanje izvede za **vsako prilogo** - eno za drugo.

💡 **Ključne točke**

- **Samodejno:** Zanka se pojavi samodejno, da vam pomaga obdelati vsak element v zbirki.
- **Preprečuje napake:** Brez zanke bi vaše dejanje lahko spodletelo, ker ne more obdelati več elementov hkrati.
- **Vizualni namig:** To je vizualni način, ki prikazuje, da se bo vaš tok ponovil za vsak element na seznamu.

![Razlaga dejanja For Each](../../../../../translated_images/3.1_11_ForEach.82bd7b62b815fdbcd67acff0a633137cf03175940c670361ea8669b0df892927.sl.png)

1. Nato v drugo polje **Izberite vrednost** vnesite naslednje,

   ```text
   application/pdf
   ```

   To bo zagotovilo, da bo za vsako datoteko priloge preverjeno, ali je format datotečne končnice .PDF.

![EqualToValue](../../../../../translated_images/3.1_12_EqualToValue.66c107cb8105c1cd3d166b8a5bf690b8dfc30aa2bd2af83c438a9e44d1b544b0.sl.png)

1. Zdaj bomo konfigurirali pot **True**, da izvlečemo datoteko iz e-pošte in jo naložimo v tabelo **Resume** v Dataverse.

   Dodajte novo dejanje spodaj v poti **True** in poiščite `html to text`. Izberite dejanje **Html to text**.

   Če želite izvedeti več o dejanju **Html to text**, razširite naslednji dodatni učni blok.

??? info "Dodatno učenje: Dejanje Html to text"

🤔 **Kaj je dejanje "HTML to text"?**

Dejanje **HTML to text** v Power Automate se uporablja za pretvorbo vsebine, oblikovane v HTML, v navadno besedilo. To je še posebej uporabno, ko prejmete podatke (kot so e-poštna sporočila, spletna vsebina ali odgovori API), ki vsebujejo HTML oznake, in želite izvleči samo berljivo besedilo brez kakršnega koli oblikovanja ali kode.

⚙️ **Kako deluje?**

- **Vhod:** Posredujete niz HTML vsebine (na primer telo e-pošte).
- **Izhod:** Dejanje odstrani vse HTML oznake in vrne samo navadno besedilo.

👍🏻 **Kdaj ga uporabiti?**

- Ko želite izvleči berljivo besedilo iz e-poštnih sporočil, spletnih strani ali odgovorov API, ki vsebujejo HTML.
- Pred pošiljanjem vsebine sistemom, ki ne podpirajo HTML oblikovanja (kot so SMS, Teams sporočila ali baze podatkov).
- Za čiščenje podatkov za nadaljnjo obdelavo ali analizo.

🔭 **Kje ga najti?**

- V Power Automate za Agent Flows poiščite dejanje z imenom `HTML to text`. Nahaja se pod konektorjem **Data Operations**.

💡 **Ključne točke**

- Odstrani vse HTML oznake in pusti samo besedilo.
- Ne interpretira ali izvaja skriptov/stilov - samo odstrani oznake.
- Uporabno za čiščenje podatkov in pripravo vsebine za izhode v navadnem besedilu.

![Dodajte dejanje HTML to text](../../../../../translated_images/3.1_13_AddHTMLToTextAction.2aa9468b87dbeb847c083f24da0fe99438b39f826b13a70982ec255a97c2aa80.sl.png)

1. Nato moramo ustvariti novo referenco povezave za dejanje **Html to text** z izbiro **Dodaj novo**.

![Dodajte novo referenco povezave](../../../../../translated_images/3.1_14_AddNewConnection.4a23546976b62e7f0e882ac1379950e5bfdcaa702070313cb84a1d22b06a79a7.sl.png)

1. Dejanje je zdaj mogoče konfigurirati. Dodajmo parameter **Body** iz sprožilca. V polju **Vsebina** izberite **ikono strele** ali **ikono fx** na desni strani.

![Dodajte dinamično vsebino](../../../../../translated_images/3.1_15_AddDynamicContent.0624a9808f55b993efb6d00bf941a88389655e2ab9970ba2b9a1538272fe9643.sl.png)

1. Na zavihku **Dinamična vsebina** poiščite `body` in izberite parameter **Body**, nato izberite **Dodaj**.

![Dodajte parameter Body](../../../../../translated_images/3.1_16_AddDynamicContent.40b7eccc080c20513eed5663062b2a63d40d6482eaf2d42fe4e29cb94797f098.sl.png)

1. Konfiguracijo tega dejanja smo zaključili, zato izberite dvojne kotne oklepaje («), ki kažejo na levo, da zaprete ploščo.

![Zaprite ploščo dejanja](../../../../../translated_images/3.1_17_CollapseAction.ca2c346efb58f8240372c3d145fa10ba609cab1c2075d7df1a9388c82fab79f5.sl.png)

1. Dodali bomo novo dejanje z izbiro **ikone +** pod dejanjem **Html to text**, kar bo naložilo ploščo za dodajanje dejanj. Izberite konektor **Microsoft Dataverse**.

![Dodajte novo dejanje](../../../../../translated_images/3.1_18_AddDataverseAction.5f4be9eb96e22dac239e5545bab5ad9d08b138c2cbcbc700680f33445e132506.sl.png)

1. Izberite dejanje **Dodaj novo vrstico**.

![Dodajte dejanje Dodaj novo vrstico](../../../../../translated_images/3.1_19_AddANewRow.48e0a3868821e59ed2a299ccb6a521af27b2430082381d48be38087be62c7c15.sl.png)

1. Preimenujte dejanje z izbiro **Tri pike (...)**, kopirajte in prilepite naslednje kot ime,

```text
Dodaj novo vrstico za življenjepis
```

Za parameter **Ime tabele** poiščite `res` in izberite tabelo **Resumes**.

![Preimenujte dejanje in konfigurirajte parameter Ime tabele](../../../../../translated_images/3.1_20_RenameAndSelectResumesTable.89f8485653abb7fda1d6eb44210951f05a05ed6f7450a51895079dfd8e72c8bf.sl.png)

1. Nato izberite polje **Naslov življenjepisa** in izberite **ikono strele** ali **ikono fx** na desni strani.

![Konfigurirajte parameter Naslov življenjepisa](../../../../../translated_images/3.1_21_AddDynamicContent.9ee1f89420d5a4aa56797944166208f6e9b0ec67116625168fbcefb907850224.sl.png)

1. Na zavihku **Funkcija** vnesite naslednji izraz, ki uporablja funkcijo `item()`.

```text
item()?['name']
```

Če želite izvedeti več o funkciji `item()`, razširite naslednji dodatni učni blok.

??? info "Dodatno učenje: Funkcija `item()`"

🤔 **Kaj je funkcija `item()`?**

- Ko uporabite dejanje **Apply to each**, Power Automate prehaja skozi vsak element v zbirki (nizu).
- Najpogosteje se uporablja znotraj dejanj, kot so **Apply to each** (ali **For each**), **Select** ali **Filter array**.

⚙️ **Kako deluje?**

- Funkcija `item()` vrne trenutni element, ki se obdeluje v zanki ali operaciji niza.
- Znotraj te zanke `item()` se nanaša na _trenutni element_, ki se obdeluje.

📌 **Kje jo uporabiti?**

- **Apply to each:** za dostop do lastnosti trenutnega elementa.
- **Select:** za pretvorbo vsakega elementa v nizu.
- **Filter array:** za sklicevanje na trenutni element, ki se ocenjuje.

🦋 **Primer**

- Izraz znotraj zanke:
       -  `item()?['Email']`
- To pridobi lastnost `Email` trenutnega elementa.

💡 **Ključne točke**

- `item()` je _odvisen od konteksta_: vedno se nanaša na trenutni element v zanki ali operaciji niza, v kateri ste.
- Če gnezite zanke, lahko uporabite `items('ImeZanke')`, da se sklicujete na elemente v določeni zanki.

Izberite **Dodaj**, da dodate izraz v parameter **Naslov življenjepisa**.

![Dodajte izraz za parameter Naslov življenjepisa](../../../../../translated_images/3.1_22_ResumeTitleParameter.9e4fa71a5251cb899e7b09bcc3052eeda1e512841f929118eb9e2b1d232ecb07.sl.png)

1. Še vedno moramo konfigurirati več parametrov, izberite **Prikaži vse** in v polju **Motivacijsko pismo** izberite **ikono strele** ali **ikono fx** na desni strani.

Na zavihku **Funkcija** vnesite naslednji izraz, ki uporablja isti izraz kot v prejšnji [misiji](../02-multi-agent/README.md).

```text
if(greater(length(body('Html_to_text')), 2000), substring(body('Html_to_text'), 0, 2000), body('Html_to_text'))
```

Ta izraz preveri, ali je _besedilo_ iz dejanja **Html to text** daljše od 2000 znakov, in če je, vrne le prvih 2000 znakov; sicer vrne celotno besedilo.

![Dodajte izraz za parameter Motivacijsko pismo](../../../../../translated_images/3.1_23_CoverLetterParameter.d2b521d6b37d05ac4760c91de2964b6d062585a333af6989d9ac0794a4139463.sl.png)

1. Izraz bo zdaj dodan v polje **Motivacijsko pismo**.

![Izraz dodan v parameter Motivacijsko pismo](../../../../../translated_images/3.1_24_ExpressionForCoverLetter.3d18124b10b76bad92db61c529ae395b0bb05f3215e3b783771e76ef7677664e.sl.png)

1. Za polje **E-poštni naslov pošiljatelja** poiščite `from` in izberite parameter **From** iz sprožilca, saj vsebuje vrednost e-poštnega naslova.

![Parameter E-poštni naslov pošiljatelja](../../../../../translated_images/3.1_25_FromParameter.1ed1be46711f6705fb807996f6f1e873adc22e285186a851272e0cf3855487ef.sl.png)

1. Za polje **Datum nalaganja** izberite **ikono strele** ali **ikono fx** na desni strani. Na zavihku **Funkcija** vnesite naslednji izraz, ki uporablja funkcijo `utcNow()`.

```text
utcNow()
```

Če želite izvedeti več o funkciji `utcNow`, razširite naslednji dodatni učni blok.

??? info "Dodatno učenje: Funkcija `utcNow`"

🤔 **Kaj je funkcija `utcNow()`?**

- Funkcija utcnow() v Power Automate vrne trenutni datum in čas v koordiniranem univerzalnem času (UTC) v formatu ISO 8601, kot je: `2025-09-23T04:32:14Z`

🦋 **Primer**

- Izraz:
       -  `concat('Poročilo ustvarjeno dne ', utcnow())`
- Izhod je:
       - Poročilo ustvarjeno dne `2025-09-23T04:32:14Z`

💡 **Ključne točke**
- **Brez potrebnih argumentov (vhodnih parametrov):** vedno vrne trenutni UTC časovni žig.
   - **Uporaba**
       - Dodajanje časovnih žigov v dnevnike ali imena datotek
       - Primerjava trenutnega časa z drugimi datumi
       - Načrtovanje ali pogoji, ki temeljijo na času

![Parameter datuma nalaganja](../../../../../translated_images/3.1_26_UploadDateParameter.21b0afc9807bf680c1c432066f1644d4d018cb4988ad0c0788b5186cea285e02.sl.png)

1. Zdaj smo zaključili konfiguracijo akcije **Dodaj novo vrstico življenjepisa**, zato zapustimo ploščo tako, da jo zapremo.

![Izhod iz plošče z akcijami](../../../../../translated_images/3.1_27_CollapseAction.c033a86e4d8501b10fc454ba7f9c5e08d71d6d881fc72f58011152e1c5d7a7bb.sl.png)

1. Dodali bomo novo akcijo tako, da izberemo **ikono +** pod akcijo **Dodaj novo vrstico življenjepisa**, kar bo naložilo ploščo za dodajanje akcij. Ponovno izberite konektor **Microsoft Dataverse**.

![Dodaj Dataverse akcijo](../../../../../translated_images/3.1_28_AddDataverseAction.1af4dedc95001bfb56b0a642231e9c82b57459b10c68bf6fc177382339a0a221.sl.png)

1. Izberite akcijo **Naloži datoteko ali sliko**.

![Dodaj akcijo Naloži datoteko ali sliko](../../../../../translated_images/3.1_29_AddUploadAFileOrAnImage.e40ab21b735e37bd1fdb5020b7433d1a2f01d6e387bc43a437e970c6e20ee779.sl.png)

1. Preimenujte akcijo tako, da izberete **Tri pike (...)**, kopirate in prilepite naslednje kot ime:

```text
Naloži datoteko življenjepisa
```

![Preimenuj akcijo](../../../../../translated_images/3.1_30_RenameAction.c316fdf225f88e5c3ee26649e672472829c3372c804b544a1372b0455937c204.sl.png)

1. Nato izberite polje **Ime vsebine** in izberite **ikono strele** ali **ikono fx** na desni strani.

V zavihku **Funkcija** vnesite naslednji izraz, ki uporablja funkcijo `item()`. Ta pridobi lastnost `name` trenutnega elementa (priponka datoteke).

```text
item()?['name']
```

![Konfiguriraj parameter Ime vsebine](../../../../../translated_images/3.1_31_ContentNameParameter.c6606773f1e82dbcea93d7c2f52dff7a2168f9f04d6b865f699f56d62a41d4ec.sl.png)

1. Za parameter **Ime tabele** poiščite `res` in izberite tabelo **Življenjepisi**.

![Konfiguriraj parameter Ime tabele](../../../../../translated_images/3.1_32_SelectResumesTable.6a00bf6d585002219003da47f6e1042dc67cbdb3fbaf7d959253550035e27520.sl.png)

1. Nato izberite polje **ID vrstice** in izberite **ikono strele** ali **ikono fx** na desni strani.

Poiščite `ID` in izberite parameter **Življenjepis** iz akcije _Dodaj novo vrstico_ Dataverse, saj ta vsebuje vrednost ID vrstice, v katero želite naložiti datoteko PDF.

Izberite **Dodaj**.

![Izberi parameter ID vrstice](../../../../../translated_images/3.1_33_RowIDParameter.9824c6b5ea5edf0ce018140c20431a97c2e750d61bcb787f67da260acb6a3838.sl.png)

1. Izberite polje **Ime stolpca** in izberite možnost **PDF življenjepisa**.

![Konfiguriraj parameter Ime stolpca](../../../../../translated_images/3.1_34_ColumnNameParameter.ef4f770cbd84cae5c15cfe06d1bdbe028d0c6d54a2286dab30769fa01c948b71.sl.png)

1. Izberite polje **Vsebina** in izberite **ikono strele** ali **ikono fx** na desni strani.

V zavihku **Funkcija** vnesite naslednji izraz, ki uporablja funkcijo `item()`. Ta pridobi lastnost `contentBytes` trenutnega elementa (priponka datoteke). `contentBytes` se nanaša na surove binarne podatke datoteke ali priponke, kodirane kot Base64 niz.

```text
item()?['contentBytes']
```

1. Zaključili smo konfiguracijo te akcije, zato zapustimo akcijo tako, da izberemo dvojne kotne oklepaje («), ki kažejo na levo, da zapremo ploščo.

![Zapri ploščo z akcijami](../../../../../translated_images/3.1_36_CollapseAction.1813a7219f0f37b87f80c2cd9f5a9626c3a320858d08a0e62cf14736f97db4c6.sl.png)

1. Nato izberite **Pošlji poziv določenemu copilotu za obdelavo**, nato pa povlecite in spustite to akcijo pod akcijo **Naloži datoteko življenjepisa** na _True_ poti pogoja.

![Povleci in spusti akcijo na True pot](../../../../../translated_images/3.1_37_DragAndDropAction.57dc2e9f9d25ed892a4fc072a72c55eca6c38e313ab48fb9db37e9371995440f.sl.png)

1. Izberite **Pošlji poziv določenemu copilotu za obdelavo**, da ga konfigurirate.

![Izberi akcijo](../../../../../translated_images/3.1_38_SelectAction.d125bdf661f66b6397542c75efbc6a78b8c4862e03dce4002776c251f1c48382.sl.png)

1. V polju **Telo/sporočilo** izberite vso vsebino polja in jo izbrišite.

![Počisti parameter Telo](../../../../../translated_images/3.1_39_ClearBodyParameter.6a345b2e5dbe5510184d7bae7cd406b8cec72c714f34bb40e30741e445a491c0.sl.png)

1. Kopirajte in prilepite naslednje besedilo v polje **Telo/sporočilo** ter označite `RESUME ID PLACEHOLDER`.

```text
Pošlji [ResumeId (text)] = "RESUME ID PLACEHOLDER" in [ResumeTitle (text_1)] = "RESUME TITLE PLACEHOLDER" in [ResumeNumber (text_2)]= "RESUME NUMBER PLACEHOLDER" orodju "Obvesti kanal Teams Applicant" v podrejenem agentu "Agent za sprejem prijav"
```

![Zamenjaj besedilo za ID življenjepisa](../../../../../translated_images/3.1_40_ReplaceResumeIDPlaceholder.eb61590503cb37d89121aaed6d979a4272aa30c87700206e04db8005e60b294f.sl.png)

1. Izberite **ikono strele** ali **ikono fx** na desni strani.

Poiščite `resume` in izberite parameter **Življenjepis** iz akcije _Dodaj novo vrstico Dataverse_, saj ta vsebuje vrednost `ID` vrstice življenjepisa, ki je bila ustvarjena.

Izberite **Dodaj**.

![Izberi parameter Življenjepis](../../../../../translated_images/3.1_41_SelectResumeParameter.61c4457c33e5d1b596169857535bfc560ef677264f8798e9148ceac999eeaeb9.sl.png)

1. Označite `RESUME TITLE PLACEHOLDER`. Izberite **ikono strele** ali **ikono fx** na desni strani.

Poiščite `title` in izberite parameter **Naslov življenjepisa** iz akcije _Dodaj novo vrstico Dataverse_, saj ta vsebuje vrednost `naslov življenjepisa` vrstice življenjepisa, ki je bila ustvarjena.

Izberite **Dodaj**.

![Izberi parameter Naslov življenjepisa](../../../../../translated_images/3.1_42_SelectResumeTitleParameter.6c887607128f928da15c4cf6c22254d0473bc22514aa883462fd812bf14245e0.sl.png)

1. Označite `RESUME NUMBER PLACEHOLDER`. Izberite **ikono strele** ali **ikono fx** na desni strani.

Poiščite `resume number` in izberite parameter **Številka življenjepisa** iz akcije _Dodaj novo vrstico Dataverse_, saj ta vsebuje vrednost `Številka življenjepisa` vrstice življenjepisa, ki je bila ustvarjena.

Izberite **Dodaj**.

![Izberi parameter Številka življenjepisa](../../../../../translated_images/3.1_43_SelectResumeNumberParameter.ca19197525250483a7e94598b621072b47ebdf5deb939e1387c979e807ddc554.sl.png)

1. Zaključili smo konfiguracijo te akcije in našega toka agenta 🙌🏻 Odlično vam gre! Zdaj shranimo tok sprožilca dogodka tako, da izberemo **Shrani osnutek**.

![Shrani osnutek](../../../../../translated_images/3.1_44_SaveDraft.0c9eee19f0c7cb8483b8d31bc17e1dd54075352d22f0f44603a9d52b52429188.sl.png)

1. Zdaj moramo urediti podrobnosti toka agenta, izberite **Nazaj**.

![Izberi Nazaj](../../../../../translated_images/3.1_45_Back.3f85535977bdb02231a0fdb8465e0e8b7d86fd5342ff933e4ae8bf9610279989.sl.png)

1. V razdelku **Podrobnosti** izberite **Uredi** in posodobite **Načrt** na možnost **Copilot Studio**.

Izberite **Shrani**.

![Spremeni načrt Copilot Studio](../../../../../translated_images/3.1_46_ChangePlanDetails.6ab15f1f8bd9ebe55b2c1576c3495f47d1a29d7435e343d4c590e46647601269.sl.png)

1. Pojavi se modalno okno, ki vas vpraša, ali želite potrditi preklop na načrt Copilot Studio. Izberite **Potrdi**.

![Potrdi spremembo načrta Copilot Studio](../../../../../translated_images/3.1_47_ConfirmCopilotStudioPlan.bc6ab52e7c982127154b0fb743f85ff9cc05dcab944dffc9485bdbcbe0811397.sl.png)

1. Načrt je zdaj posodobljen na **Copilot Studio**. Izberite **Uredi**, saj moramo objaviti tok sprožilca dogodka za našega agenta.

![Uredi tok](../../../../../translated_images/3.1_48_PlanChangedAndEdit.3c3207766a648817f7a7878c3a6f684cf41cdceea4dca8f6fc43b7315c8dd648.sl.png)

1. Izberite **Objavi**.

![Objavi](../../../../../translated_images/3.1_49_Publish.38ff814cfce6b3be1076cafb0c28e4e344f75d8cd4117fabed13ad361d4fde3f.sl.png)

Hura! Tok sprožilca dogodka je zdaj objavljen 😃

![Objavljeno](../../../../../translated_images/3.1_50_Published.449e7867f7b027ae8a524c749357a1b931955062828bacc3b5a51e979755ef4a.sl.png)

Nadaljujmo z ustvarjanjem novega toka agenta, ki ga bo sprožil podrejeni **Agent za sprejem prijav**.

### Lab 3.2 - Obvesti kanal Teams z uporabo prilagodljive kartice

Zdaj bomo ustvarili nov tok agenta za podrejenega **Agent za sprejem prijav**, ki bo uporabil vrednosti, posredovane s sprožilcem dogodka, za objavo prilagodljive kartice v kanalu Teams. Ta prilagodljiva kartica bo opozorila ekipo za zaposlovanje HR o PDF-ju, ki je bil samodejno naložen, da ga lahko pregledajo.

Začnimo!

1. V **Agent za zaposlovanje** izberite zavihek **Agenti** in izberite **Agent za sprejem prijav**.

![Izberi Agent za sprejem prijav](../../../../../translated_images/3.2_01_SelectApplicationIntakeAgent.0e9dd3da5c52e9f59ab3a4545c01897ad830853b650ec42f7f8424aa530e0409.sl.png)

1. Pomaknite se navzdol do **Orodja** in izberite **+ Dodaj**.

![Dodaj orodje](../../../../../translated_images/3.2_02_AddNewTool.7c62275fd9f28cdc1923ea056a148171048dc568ff78056958fd54862133f90e.sl.png)

1. Pojavi se modalno okno **Dodaj orodje**. Izberite **+ Novo orodje**.

![Izberi Novo orodje](../../../../../translated_images/3.2_03_SelectNewTool.215e7637a9f065a3799a1ecf248eed1e859f201d2dfdfab71a7c1dc18e454e2d.sl.png)

1. Izberite **Tok agenta**.

![Izberi Tok agenta](../../../../../translated_images/3.2_04_SelectAgentFlow.7bc12b3435efccc0cfee8f563640562f87d173b436b3313a3d1256fe35024907.sl.png)

1. Nato se bo naložil **oblikovalec toka agenta**. V sprožilcu **Ko agent pokliče tok** izberite **+ Dodaj vnos**.

![Izberi dodaj vnos](../../../../../translated_images/3.2_05_SelectAddAnInput.f3dc8465f490929baccb0f2dc72b50629b1435ff8a3861f7974885d1d36cdeb1.sl.png)

1. Izberite **Besedilo** kot vrsto uporabniškega vnosa.

![Izberi Besedilo](../../../../../translated_images/3.2_06_SelectText.93585b4af8c4e277c11c2052b638e249508a24a075987026a6ec346e75184217.sl.png)

1. V polje za vnos besedila kopirajte in prilepite naslednje za ime parametra vnosa.

```text
ResumeId
```

![Vnos ID življenjepisa](../../../../../translated_images/3.2_07_ResumeIdInput.a9e127e343856d6c6d45dd1251cade0503bad9484bc563c02155390951b1faa5.sl.png)

1. Ponovite iste korake za dodajanje drugega besedilnega vnosa. Kopirajte in prilepite naslednje za ime parametra vnosa.

```text
ResumeTitle
```

![Vnos Naslov življenjepisa](../../../../../translated_images/3.2_08_ResumeTitleInput.c71ecd364a974a93abb0de876807c2e9bde59fcea6df317babeb20764b636f26.sl.png)

1. Ponovite iste korake za dodajanje tretjega besedilnega vnosa. Kopirajte in prilepite naslednje za ime parametra vnosa.

```text
ResumeNumber
```
![Vnos Številka življenjepisa](../../../../../translated_images/3.2_09_ResumeNumberInput.a6c060000354deab51dffef3c1ad9f13378cfeabdafdb7a33c2a591bfd044709.sl.png)

1. Se spomnite, kako smo v [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request) dodali prilagodljivo kartico v temo za našega agenta? Tokrat bomo dodali prilagodljivo kartico v tok agenta. Zdaj bomo dodali še eno akcijo v naš tok agenta, ki bo objavila prilagodljivo kartico v kanalu Teams.

Izberite **ikono +** pod sprožilcem.

![Dodaj novo akcijo](../../../../../translated_images/3.2_10_AddNewAction.4474a2150991cac246d5e4091a74ba91e76e1c5bafa34ad985a8567c09dcdd35.sl.png)

1. Izberite akcijo **Objavi kartico v klepetu ali kanalu**.

![Izberi akcijo Objavi kartico v klepetu ali kanalu](../../../../../translated_images/3.2_11_SelectPostCardInAChatOrChannel.97de43ed1c883b14d0150ae65efaa90f53f0815bdf57ec10e0e22cbd3e22ce06.sl.png)

1. Referenca povezave z Microsoft Teams mora biti ustvarjena z vašim prijavljenim uporabniškim računom. Izberite **Prijava**.

![Izberi prijavo](../../../../../translated_images/3.2_12_SignInToCreateConnectionReference.2297f8b702d71508f1b21a3ed4046df4846dc03b13932a20e5c445403559ac1f.sl.png)

1. Izberite svoj uporabniški račun in nato izberite **Dovoli dostop**.

![Izberi Dovoli dostop](../../../../../translated_images/3.2_13_AllowAccess.31cbf82606d75231108bd4f2bfeafffda3cd7e7e760cd46004c2705afe050aaf.sl.png)

1. Za naslednje vhodne parametre,

| Parameter | Kako nastaviti | Podrobnosti |
|----------|------------|---------|
| **Objavi kot** | Spustni meni | Izberite možnost `Flow bot` |
| **Objavi v** | Spustni meni | Izberite možnost `Kanal` |
| **Ekipa** | Spustni meni | Izberite ekipo, ki je na voljo v vašem okolju in do katere imate dostop za namen dokončanja te laboratorijske vaje |
| **Kanal** | Spustni meni | Izberite kanal, ki je na voljo v vašem okolju in do katerega imate dostop za namen dokončanja te laboratorijske vaje |

![Konfiguriraj vhodne parametre](../../../../../translated_images/3.2_14_ConfigureParameters.8c21924f90db3acaa33d4e35ef43c70556ba4cc37207a195ac654e55a43400a6.sl.png)

1. Nato bomo konfigurirali polje **Prilagodljiva kartica**. Izberite polje **Prilagodljiva kartica**.

![Izberi polje Prilagodljiva kartica](../../../../../translated_images/3.2_15_SelectAdaptiveCardParameter.65323056be6174d2eed7422650aaa70fc16396148f90b8af1801110d7a30d66f.sl.png)

1. Odprite [Posodobljena JSON datoteka tabele življenjepisa](../../../../../docs/operative-preview/03-automate-triggers/assets/3.2_ResumeTableUpdated.json), kopirajte celotno vsebino in jo prilepite v polje Prilagodljiva kartica.

![Kopiraj in prilepi JSON](../../../../../translated_images/3.2_16_JSON.f022097fb7139bd12514abb8fdc518309ea940f005cc94a11ba159359cde784b.sl.png)

1. Podobno kot smo storili v [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request), bomo zamenjali obstoječe vrednosti v JSON podatkih z dejanskimi vrednostmi ali dinamično vsebino.

Najprej posodobimo URL za lastnost `url` znotraj lastnosti `selectAction`. Ta URL bo zamenjan z URL-jem sistemskega pogleda Življenjepisi v modelno vodeni aplikaciji **Hiring Hub**. To bo omogočilo rekruterju, da izbere akcijo in bo preusmerjen na sistemski pogled Življenjepisi v modelno vodeni aplikaciji.

Označite trenutno vrednost URL-ja in jo izbrišite.

![Izberi vrednost URL-ja](../../../../../translated_images/3.2_17_SystemViewURL.5e51fd894ac916f436107c7b668d66ca87ca8bdfd7affeb7dae1b10fa8ff5afb.sl.png)

1. V modelno vodeni aplikaciji **Hiring Hub** pojdite na sistemski pogled **Življenjepisi** z uporabo menija na levi strani in kopirajte URL. Nato se vrnite na tok agenta in prilepite kopirani URL v lastnost **url** znotraj lastnosti `selectAction`.

![Kopiraj URL sistemskega pogleda Življenjepisi](../../../../../translated_images/3.2_18_CopyResumesSystemViewURL.14d9f55c7db15977a12dfe2a5df95aab5cf241e646b08f9838cff31aaa27a381.sl.png)
1. Videti bi morali naslednje, kjer so podrobnosti o vašem okolju modelno vodene aplikacije **Hiring Hub** označene z rumeno.

     | Parameter | Vrednost | Pojasnilo |
     |----------|------------|---------|
     | **Organizacijski URI** | GUID | URL organizacije okolja Dataverse/Dynamics 365 |
     | **appid** | GUID | Za odprtje določene modelno vodene aplikacije se uporablja parameter poizvedbe bodisi appid ali appname. V tem primeru se uporablja appid |
     | **viewid** | GUID | Parameter poizvedbe, ki je ID pogleda |

       ![Prilepi URL](../../../../../translated_images/3.2_19_PasteURL.41f3fdd66190c8ba478857f91c90eb05ee9621243bda7b7ad26eb5802b8e970d.sl.png)

1. Nato bomo dodali vrednosti dinamične vsebine za več lastnosti. Začnimo z besedilom, ki bo prikazalo referenco številke življenjepisa vrstice, ki jo je sprožilec dogodka samodejno ustvaril.

      Izberite ikono **panel**, da naložite akcijski panel.

       ![Izberite ikono panela](../../../../../translated_images/3.2_20_SelectPannelIcon.786a4147ba12e0e62648c66f14fb2b9a7f89b27c3a610f43420e31cb0c9fb5da.sl.png)

1. Pomaknite se navzdol do vrstice, kjer vidite lastnost `text` za `RESUME NUMBER PLACEHOLDER`. Označite vrednost rezerviranega mesta in jo izbrišite.

       ![Izbriši rezervirano mesto](../../../../../translated_images/3.2_21_DeleteResumeNumberPlaceholder.6ffd7a5a073f9d9a11e0e119c87e827243de237f70ebc3ab37dfdd36de615130.sl.png)

1. Kliknite med dvema narekovajema in na desni strani izberite ikono **strele** ali **fx ikono**.

      V zavihku **Dynamic Content** izberite parameter **ResumeNumber** in kliknite **Add**.

       ![Dodaj parameter ResumeNumber](../../../../../translated_images/3.2_22_SelectResumeNumberParameter.de5a6eecb3ee092441d841ad137dfecd9f8d503a370ff60eb5ccdc0267e37df0.sl.png)

1. Parameter **ResumeNumber** bo zdaj dodan kot dinamična vsebina lastnosti `text`.

       ![Dinamična vsebina ResumeNumber](../../../../../translated_images/3.2_23_ResumeNumberDynamicContent.129a566ac6e9d448b268b828da5766a7056779ac167f65b498e2ca21d703b7f0.sl.png)

1. Enake korake bomo ponovili za `RESUME NAME PLACEHOLDER`. Pomaknite se navzdol do vrstice, kjer vidite lastnost `text` za `RESUME NAME PLACEHOLDER`. Označite vrednost rezerviranega mesta in jo izbrišite.

       ![Rezervirano mesto za ime življenjepisa](../../../../../translated_images/3.2_24_ResumeNamePlaceholder.6c879b99ae375892f7e0a511bfedd5fa9e60a8dea71ea2a44c2a7a04c8389f43.sl.png)

1. Kliknite med dvema narekovajema in na desni strani izberite ikono **strele** ali **fx ikono**.

      V zavihku **Dynamic Content** izberite parameter **ResumeTitle** in kliknite **Add**.

       ![Dodaj parameter ResumeTitle](../../../../../translated_images/3.2_25_SelectResumeTitleParameter.18c769bbd2c60e362a56f6055e151ed6287903cb625addcdfbb43044828d7378.sl.png)

1. Parameter **ResumeTitle** bo zdaj dodan kot dinamična vsebina lastnosti `text`.

       ![Dinamična vsebina ResumeTitle](../../../../../translated_images/3.2_26_ResumeTitleDynamicContent.7219e078f71fc0d5d4a6bb228ba2d53f0898ba26a27c5eb859df90d12dd52c70.sl.png)

1. Enake korake bomo ponovili za vrednost **Due Date**, ki predstavlja, kdaj naj kadrovnik pregleda življenjepis. Pomaknite se navzdol do vrstice, kjer vidite lastnost `text` za `May 21, 2023`.

       ![Izberite Dovoli dostop](../../../../../translated_images/3.2_27_DueDatePlaceholder.17c6003cc9ec1141b0aeb5cde203098a7f5534fa11f01a3cbffb66206ed1633a.sl.png)

1. Izbrišite to vrednost rezerviranega mesta za datum in kliknite med dvema narekovajema.

       ![Izbriši](../../../../../translated_images/3.2_28_DeleteDueDatePlaceholder.9a3df55fb3c9ed72e61e0a60dc3344335b0444ff537c9fb51036b0442a85d268.sl.png)

1. Na desni strani izberite ikono **strele** ali **fx ikono** in v zavihku **Function** vnesite naslednji izraz in kliknite **Add**.

       ```text
       addDays(utcNow(), 3, 'MMM dd, yyyy')
       ```

      Ta izraz uporablja dve funkciji.

     | Funkcija | Pojasnilo |
     |----------|------------|
     | **addDays** | Doda določeno število dni k danemu datumu in vrne rezultat v obliki niza |
     | **utcNow** | Vrne trenutni datum in čas v formatu Coordinated Universal Time (UTC) kot niz. |

      Za vrednost utcNow formatiramo datum, da je prikazan mesec in dan, sledi leto.

       ![Izraz za rok](../../../../../translated_images/3.2_29_01_ExpressionDueDate.a4fa31985f5500971f2fc6da0e81e008af12be19d54a30a240764b74a4b2dbcb.sl.png)

      Izraz bo zdaj dodan lastnosti `text`.

       ![Izraz za rok](../../../../../translated_images/3.2_29_02_ExpressionDueDate.6159288450731c7b09628af70f0c9a6d92590ca7c7e39e8a524ae8af7c511f2c.sl.png)

1. Na koncu bomo posodobili URL za lastnost `url` znotraj lastnosti `actions` array na dnu JSON payloada. Trenutni URL rezerviranega mesta bo zamenjan z URL-jem vrstice življenjepisa v modelno vodeni aplikaciji **Hiring Hub**. To bo kadrovniku omogočilo, da izbere akcijo `Action.OpenURL` prilagodljive kartice in se usmeri na življenjepis v modelno vodeni aplikaciji.

       ![Izbriši rezervirano mesto za URL ogleda življenjepisa](../../../../../translated_images/3.2_30_ViewResumeURLPlaceholder.f27af6cadfb54fb977f0b46ea3ec42ee0638d38ebc5d294eff5da52abf9d4a1b.sl.png)

1. V modelno vodeni aplikaciji **Hiring Hub** odprite vrstico v sistemskem pogledu **Resumes** z uporabo menija na levi strani. Vrstica življenjepisa se bo naložila kot obrazec v modelno vodeni aplikaciji.

      Kopirajte URL vrstice življenjepisa.

    ??? info "Kako se vrniti v modelno vodeno aplikacijo **Hiring Hub**, če ste jo zapustili/zaprli"

        1. Obiščite [https://make.powerapps.com](https://make.powerapps.com) in se prepričajte, da ste v svojem razvijalskem okolju, ki ga uporabljate za te laboratorijske vaje, sicer preklopite nanj.
        
        ![Obiščite make.powerapps.com](../../../../../translated_images/3.2_31_Note_01_BrowseToURL.a13dfc8b05a0b34f3a4c853f3d3e418864176b52b1b40c069da7712af5562aa5.sl.png)

        1. Izberite **Apps** v meniju na levi strani in za modelno vodeno aplikacijo **Hiring Hub** izberite ikono **Play**, da jo naložite v brskalniku.
        
        ![Izberite modelno vodeno aplikacijo Hiring Hub](../../../../../translated_images/3.2_31_Note_02_HiringHubApp.a09b6ea28b4fea8932809cb847cb0ea3d8faeb7b7b5604852de1f46ab1e9741b.sl.png)

       ![Kopiraj URL vrstice življenjepisa](../../../../../translated_images/3.2_31_CopyResumeURL.f6156f8792526129c2613922f0137221b2944fa8ffe7c04766d710521ad8765b.sl.png)

1. Nato se vrnite v tok agenta, označite trenutno vrednost rezerviranega mesta za URL in jo izbrišite.

       ![Izbriši rezervirano mesto za URL vrstice življenjepisa](../../../../../translated_images/3.2_32_SelectResumeURLPlaceHolder.8db783de292428eaa8937242eba4a54ebb1df7bf4c1bc9391b016ee545fb2b9f.sl.png)

1. Nato prilepite kopirani URL v lastnost **url** znotraj lastnosti `url property`.

       ![Prilepi kopirani URL vrstice življenjepisa](../../../../../translated_images/3.2_33_PasteResumeRowURL.d7ba92493d7597b89f75e2f17f76846ac17a9ba89c2e36729dc6b5dc1599b047.sl.png)

1. Videti bi morali naslednje. Izbrišite vrednost ID-ja `GUID` na koncu. Zamenjali bomo to dinamično vsebino - parameter **ResumeId**.

       ![Izbriši rezervirano mesto za URL ogleda življenjepisa](../../../../../translated_images/3.2_34_DeleteViewResumePlaceholderURL.7b26209eaeef6dc0a21b16140d05fe2f0e38de5f714575edd24d21dded58102a.sl.png)

1. Izberite ikono **strele** ali **fx ikono** na desni strani.

      V zavihku **Dynamic Content** izberite parameter **ResumeId** in kliknite **Add**.

       ![Parameter ResumeId](../../../../../translated_images/3.2_35_ResumeIdParameter.3dc710a7f5216944387f4d5f82c0a372eee23ee5259dec04147ad00e9c454d7d.sl.png)

1. Parameter **ResumeId** bo dodan kot dinamična vsebina. Naslednje, označeno z rumeno, so podrobnosti vašega okolja modelno vodene aplikacije **Hiring Hub**.

     | Parameter | Vrednost | Pojasnilo |
     |----------|------------|---------|
     | **Organizacijski URI** | GUID | URL organizacije okolja Dataverse/Dynamics 365 |
     | **appid** | GUID | Za odprtje določene modelno vodene aplikacije se uporablja parameter poizvedbe bodisi appid ali appname. V tem primeru se uporablja appid |
     | **id** | GUID | Parameter poizvedbe, ki je ID vrstice življenjepisa |

       ![Dinamična vsebina ResumeId](../../../../../translated_images/3.2_36_ResumeIdDynamicContent.a1a40dfb4a83b60f1b75b02160890e3fec41c2c7df8adf32e02d652a57c1ee87.sl.png)

1. Zaključili smo konfiguracijo akcije **Post card in a chat or channel** 👏🏻 Zaprite konfiguracijski panel akcije z izbiro ikone **x**.

       ![Zapri panel](../../../../../translated_images/3.2_37_CloseActionPanel.23d07107381411aa9494ef36fb240682a0727a63e6f15082074b34a1defd517b.sl.png)

1. Na koncu bomo konfigurirali zadnjo akcijo, **Respond to the agent**, tako da pošljemo besedilo nazaj agentu za zaključek obdelave.

      V akciji **Respond to the agent** izberite **+Add an output**.

       ![Izberite Dodaj izhod](../../../../../translated_images/3.2_38_AddAnOutput.de1a0e49033cb077eb5d2c226152bbb06dc12fb95d0496c69d469eecdb46c0ae.sl.png)

1. Izberite **Text** kot vrsto izhoda.

       ![Izberite besedilo kot vrsto izhoda](../../../../../translated_images/3.2_39_SelectText.4e1e82c35fe9d1b569b668092d405aa9b0c81fbe67e7de68a660f2083ed3afdd.sl.png)

1. Vnesite naslednje kot ime izhoda.

       ![Izhod za zaključek pogovora](../../../../../translated_images/3.2_40_EndConversationOutput.e392b58847d8439443c89459fccbbd88d4ea5e5fa562749b77407c46b9ff4ca4.sl.png)

1. Vnesite naslednje kot vrednost za izhod.

       ```text
       Finished
       ```

       ![Vrednost izhoda za zaključek pogovora](../../../../../translated_images/3.2_41_EndConversationOutputValue.2cb836900ee9fca802926676e613b077938f1106cc16e77ddd77af64ce92dcc8.sl.png)

1. Zdaj smo zaključili konfiguracijo toka agenta. Izberite **Save draft**, da shranite tok agenta. Ko bo shranjen, se bo prikazalo potrditveno sporočilo.

       ![Shrani osnutek](../../../../../translated_images/3.2_42_SaveDraft.1bb26eec40faf5d2c244d93f869344915e90423623e07e02cac2c1f8c73d1a4a.sl.png)

1. Pred objavo toka agenta moramo posodobiti podrobnosti toka agenta. Izberite zavihek **Overview** in kliknite **Edit**.

      V polje za ime toka vnesite naslednje.

       ```text
       Notify Teams Applicant channel
       ```      

      Nato izberite ikono **Refresh**, da posodobite opis toka agenta z uporabo AI.

      Nato izberite **Save**, da shranite posodobljene podrobnosti toka agenta.

       ![Uredi in shrani podrobnosti](../../../../../translated_images/3.2_43_EditDetails.f0c9b53a9c1b29e4aa3c34774680559ae9173f77b3a37817bab2296b77ffcca7.sl.png)

1. Pomaknite se nazaj na zavihek **Designer** in izberite **Publish**, da objavite tok agenta. Ko bo shranjen, se bo prikazalo potrditveno sporočilo.

       ![Objavi tok agenta](../../../../../translated_images/3.2_44_PublishAgentFlow.3014e6de5e53aa5fc2021bf6e11b901c4990b4fbb4d4cee33cc6d5b6cc641ed8.sl.png)

1. Tok agenta je zdaj treba dodati kot orodje v **Application Intake Agent**. Pomaknite se nazaj na **Hiring Agent** in izberite zavihek **Agents**, nato izberite **Application Intake Agent**.

       ![Izberite Application Intake Agent](../../../../../translated_images/3.2_45_ApplicationIntakeAgent.0446b1762d0f499e880e7984f59669639193566f72539cd4fba5c62cd1fe8726.sl.png)

1. V razdelku **Details** agenta bomo posodobili polje **Description**. Kopirajte naslednje in prilepite na konec besedila opisa.

       ```text
       and also notify the Teams Applicant channel
       ```

       ![Posodobi opis agenta](../../../../../translated_images/3.2_46_UpdateAgentDescription.56344699cd3cc5e417e8f95362ed2288d0c0391f33bd98872e7e008a545175f0.sl.png)

1. Nato bomo dodali tok agenta kot orodje. Pomaknite se navzdol in izberite **+ Add**.

       ![Izberite Dodaj](../../../../../translated_images/3.2_47_AddTools.c7557e272bd731129dffe9edebba3b04170d27806aaa14fffbe3d66b7b61808b.sl.png)

1. Izberite prej ustvarjeni tok agenta, **Notify Teams Applicant Channel**.

       ![Izberite tok agenta](../../../../../translated_images/3.2_48_NotifyTeamsApplicantChannelAgentFlow.5985f570786edef4eac93455f7a07978c0daf54e1371660bfd56a4c16b6aaf79.sl.png)

1. Nato izberite **Add and configure**.

       ![Izberite Dodaj in konfiguriraj](../../../../../translated_images/3.2_49_AddAndConfigure.c2d6cccfa9e4bb23ff58b615ad16d0b3ade4ef867b73b9196a45df6990d8072f.sl.png)

1. V razdelku **Inputs** toka agenta so vidni trije vnosi, ki smo jih prej konfigurirali v toku agenta. Privzeto je konfiguracija **Fill using** nastavljena na **Dynamically fill with AI**. To nastavitev bomo ohranili, saj bo poziv iz sprožilca dogodka (v zadnji akciji, **Sends a prompt to the specified copilot for processing** - to so koraki 38-44 iz **Lab 3.1 - Automate uploading resumes to Dataverse received by email**) vseboval vrednosti parametrov, ki jih bo AI izvlekel.

       ![Vnosi orodja toka agenta](../../../../../translated_images/3.2_50_Inputs.9fbb57b83b533d5a60f957505bb1e5430886ec9e6c70c10ed1c641d6b33fcc21.sl.png)

1. Zdaj, ko je orodje dodano v **Application Intake Agent**, je treba posodobiti navodila agenta. Izberite ikono **back arrow**, da se vrnete na seznam agentov.

       ![Izberite ikono nazaj](../../../../../translated_images/3.2_51_SelectBack.6a9a55176d931895777822d3f9276d5d12ffe379a8860dd521e1c895e8188bba.sl.png)

1. Izberite **Application Intake Agent** v zavihku **Agents** znotraj **Hiring Agent**.

       ![Izberite Application Intake Agent](../../../../../translated_images/3.2_52_SelectApplicationIntakeAgent.039140313422e833389fd134b3a70a0eed11ba175ede5dbdc4abcce6004c7d2d.sl.png)

1. V polju **Instructions** vnesite novo vrstico po navodilih `2.Post-Upload`. Kopirajte in prilepite naslednja navodila.

       ```text
       Process for Resume Upload via Email
       1. When you receive a message, **Send [ResumeId (text)] = "1680265f-5793-f011-b41b-7c1e525be9f7" and [ResumeTitle (text_1)] = "TAYLOR TESTPERSON (FICTITIOUS).pdf" and [ResumeNumber (text_2)]= "R01026" to the Tool "Notify Teams Applicant channel"** in the child agent "Application Intake Agent", call [AGENT FLOW PLACEHOLDER]
       ```

       ![Posodobi navodila za Application Intake Agent](../../../../../translated_images/3.2_53_PasteCopiedInstructions.f24ed715e907cf023449a54b894354ca1252b198e9be694eec2875f7f647f9c2.sl.png)

1. Označite besedilo `[AGENT FLOW PLACEHOLDER`.

       ![Označi rezervirano mesto](../../../../../translated_images/3.2_54_HighlightPlaceholder.6c3fcac3c8f4fb6e5cce2dbd6b6548b84652d009e20fa4a01183a9a1b42b24fb.sl.png)

1. Vnesite znak poševnice, `/`, in izberite orodje **Notify Teams Applicant Channel**.

       ![Izberite orodje Notify Teams Applicant Channel](../../../../../translated_images/3.2_55_NotifyTeamsApplicatnChannelTool.2e3dd1e9ee9b2dfe10e1f2feb7e3b74b08856ce3afb16dafae1f2c4b73da904f.sl.png)
1. Tok agentov bo zdaj sprožen s strani **Application Intake Agent** v skladu z navodili, po zadnjem dejanju (**Pošlje poziv določenemu copilotu za obdelavo**) v sprožilcu dogodka, ki pošlje poziv z vrednostmi parametrov nazaj agentu.

      Izberite **Save** za shranjevanje posodobljenih navodil za **Application Intake Agent**.

       ![Izberite Save](../../../../../translated_images/3.2_56_Save.6abb0131f96b20d3753b5990313eaea6a237bef2bf0e2103a2ee5ba570fd7c04.sl.png)

1. Navodila bodo zdaj posodobljena, ko bo agent shranjen.

       ![Navodila posodobljena](../../../../../translated_images/3.2_57_InstructionsUpdated.5bfbfe2ca1da16284358a9917246bd8676cd6c095839ed1c69361d992cacd2b3.sl.png)

1. Zdaj moramo **Publish** za **Hiring Agent**. Izberite **Publish** v zgornjem desnem kotu, nato pa v modalnem oknu _Publish this agent_, ki se prikaže, izberite **Publish**.

       ![Objavi Hiring Agent](../../../../../translated_images/3.2_58_PublishAgent.e7ec81c81b735de0cd11516aa944c759ea510e2b0bc9acf9f00d42d788896991.sl.png)

1. Ko je objavljeno, se prikaže potrditveno sporočilo, da je agent objavljen.

       ![Potrditveno sporočilo](../../../../../translated_images/3.2_59_AgentPublished.d15e01232544cf08943260dfbf61c92339dbd187620349e7c5a43add4796ed12.sl.png)

Zdaj lahko testiramo agenta!

### Lab 3.3 - Testiranje sprožilca dogodka

1. Za izvedbo sprožilca dogodka je treba poslati e-pošto s priloženo datoteko PDF življenjepisa. V Outlooku sestavite novo e-poštno sporočilo.

     | Komponenta e-pošte | Podrobnosti |
     |--------------------|-------------|
     | **Prejemnik** | Uporabite svoj prijavljen uporabniški račun kot vrednost |
     | **Priloga datoteke** | Naložite datoteko [TAYLOR TESTPERSON (FICTITIOUS)](../../../../../docs/operative-preview/test-data/resumes/TAYLOR%20TESTPERSON%20(FICTITIOUS).pdf) |
     | **Telo sporočila** | Kopirajte in prilepite naslednje besedilo kot telo e-pošte |

       ```text
       Spoštovani vodja zaposlovanja,

       Pišem vam, da izrazim svoje zanimanje za delovno mesto Senior Power Platform Engineer v vaši organizaciji. Z več kot devetimi leti izkušenj pri zagotavljanju varnih in skalabilnih rešitev na Microsoftovih oblačnih platformah sem prepričan, da lahko učinkovito prispevam k vaši ekipi.

       V svoji zadnji vlogi kot Lead Power Platform Engineer sem razvil avtomatiziran postopek sprejema življenjepisov, zmanjšal ročno razvrščanje in izboljšal iskalnost. Dostavil sem aplikacije za upravljanje HR primerov, uvedel rešitve zavedne tokove in implementiral PR preverjanja za izboljšanje časa uvajanja. Moje strokovno znanje vključuje Power Apps, Power Automate, Power Pages, Dataverse ter vrsto storitev Microsoft 365, kot tudi integracijo z Graph/REST API-ji in Azure Functions.

       Prej sem razvil odobritve v Teams z adaptivnimi karticami, skrajšal čas odobritve na isti dan in ustvaril robustne okvire za obravnavo napak. Moje ozadje vključuje tudi migracijo zastarelih delovnih tokov na Power Automate ter gradnjo portalov za samopostrežbo, ki jih je sprejelo na stotine zaposlenih.

       Imam diplomo iz računalništva in sem certificiran kot Power Platform Developer (PL-400) in Solution Architect (PL-600). Prav tako sem strasten mentor in sem prostovoljno sodeloval z lokalnimi skupinami ustvarjalcev.

       Priložen je moj življenjepis za vašo obravnavo. Vesel bi bil priložnosti, da razpravljam o tem, kako se moje veščine in izkušnje ujemajo z vašimi potrebami.

       Hvala za vaš čas in obravnavo.

       Lep pozdrav,
       Taylor Testperson
       ```

       **Pošljite** e-pošto, ko jo sestavite.

       ![Sestavite e-pošto s priloženo datoteko PDF](../../../../../translated_images/3.3_01_ComposeEmailWithAttachment.eccba1bbcc276b4373277b193a66d8818b712c6ab9468ee12902545522b670f7.sl.png)

1. V portalu Power Automate maker za tok sprožilca dogodka izberite ikono **Refresh**, da si ogledate uspešno izveden tok za poslano e-pošto.

       ![Izberite ikono za osvežitev za ogled izvedenega toka](../../../../../translated_images/3.3_02_FlowRun.0e99756ebc5fba371dc72719b0619736626934461e58db2dc153535cbabcc1e8.sl.png)

1. V Copilot Studio v **Hiring Agent** izberite zavihek **Activity**.

       ![Izberite zavihek Activity](../../../../../translated_images/3.3_03_SelectActivity.11d78735a8a2a1f64443d285deb47f2bacc5bd53ded039791215f9465dbc3f76.sl.png)

1. Zavihek **Activity** se bo naložil in prikazal vse aktivnosti **Hiring Agent**. Obstajala bo aktivnost z imenom **Automated**, ki ima status **Complete**. Ta aktivnost predstavlja sprožilec dogodka in tok agenta, ki je bil sprožen.

       ![Aktivnost zaključena](../../../../../translated_images/3.3_04_StatusComplete.dbe14ffb9414b0f4d869841426c4ca595d7a664bf13f4b5e2e29a4e251b9064c.sl.png)

1. Izberite aktivnost in nato sprožilec dogodka na zemljevidu aktivnosti. Na desni strani panela opazite, kako vhodni parametri v pozivu vsebujejo vrednosti parametrov `Resume Id`, `Resume Title` in `Resume Number` iz vrstice **Dataverse**, ki je bila ustvarjena. To je bilo iz dinamičnih vrednosti vsebine, konfiguriranih prej v korakih 18 - 27 **Lab 3.1 - Avtomatizacija nalaganja življenjepisov v Dataverse, prejetih po e-pošti**.

       ![Sprožilec dogodka](../../../../../translated_images/3.3_05_EventTrigger.cbd73cd43a79e88e782d1e47ac8ddacdbe30d582a4da61a31010f44a9dacdd12.sl.png)

1. Vrnite se v aplikacijo **Hiring Hub** in v sistemskem pogledu **Resumes** izberite **Refresh**, da osvežite pogled. Na novo ustvarjena vrstica za življenjepis, ki je bila poslana po e-pošti, bo zdaj navedena, saj je bila ustvarjena prek sprožilca dogodka.

       ![Vrstica življenjepisa ustvarjena](../../../../../translated_images/3.3_06_ResumeRowCreated.9ab850d8d7c066aad8531409b00a4de5f214b4d8d209d39fa0d493d5c55e041d.sl.png)

1. Vrnite se v Copilot Studio in izberite tok agenta **Notify Teams Applicant Channel** znotraj **Application Intake Agent** na zemljevidu aktivnosti. Na desni strani panela opazite, kako imajo vhodne vrednosti vrednosti iz vrstice Dataverse. To je bilo iz poziva, poslanega z zadnjim dejanjem (**Pošlje poziv določenemu copilotu za obdelavo**) v sprožilcu dogodka, ki vsebuje vrednosti parametrov iz na novo ustvarjene vrstice Dataverse. Tako lahko prenesemo vrednosti parametrov iz sprožilcev dogodkov v tokove agentov.

       ![Izberite tok agenta](../../../../../translated_images/3.3_07_NotifyTeamsApplicantChannel.9b6c4654197efca9c88dde72cfb38812038ef5f6bdce8c309046c02643092bb6.sl.png)

1. Na koncu si oglejmo adaptivno kartico, objavljeno v kanalu **Microsoft Teams**. V kanalu bomo videli adaptivno kartico, ki prikazuje informacije o na novo ustvarjeni vrstici življenjepisa v Dataverse. Premaknite kazalec nad hiperpovezavo na začetku adaptivne kartice, opazite, kako je URL sistemski pogled Resumes, ki smo ga prej konfigurirali v JSON (koraki 15 - 19 **Lab 3.2 - Obvestilo kanalu Teams z adaptivno kartico**) vsebini adaptivne kartice.

       ![URL sistemskega pogleda tabele življenjepisov na adaptivni kartici](../../../../../translated_images/3.3_08_AdaptiveCardResumeTableURL.5a59821d60c8698e5c9e4746806b975bbdf3c4400dc0bb02a53f350bdea569e9.sl.png)

1. Izberite hiperpovezavo in boste preusmerjeni na sistemski pogled Resumes v aplikaciji **Hiring Hub** na vašem brskalniku.

       ![Sistemski pogled življenjepisov v aplikaciji Hiring Hub](../../../../../translated_images/3.3_09_ResumeTableSystemView.81f52ab85aadda7d9131ced31d024fb4b411ccf600dd230d9d7e931c476e271c.sl.png)

1. Vrnite se na adaptivno kartico, objavljeno v kanalu Microsoft Teams. Tokrat premaknite kazalec nad **View Resume**, kar je `Action.OpenURL` akcija adaptivne kartice. Opazite, kako je URL vrstica življenjepisa, ki smo jo prej konfigurirali v JSON (koraki 30 - 36 **Lab 3.2 - Obvestilo kanalu Teams z adaptivno kartico**) vsebini adaptivne kartice.

       ![URL vrstice življenjepisa na adaptivni kartici](../../../../../translated_images/3.3_10_AdaptiveCardResumeRowURL.2063a075c2d4adec27dfcc2ea4c01a385d791e0c4fc127caba912bde14bf77d6.sl.png)

1. Izberite akcijo in boste preusmerjeni na obrazec vrstice življenjepisa v aplikaciji **Hiring Hub** na vašem brskalniku.

       ![Vrstica življenjepisa v aplikaciji Hiring Hub](../../../../../translated_images/3.3_11_ResumeRow.6f051ed512d396712a04ee98319d6643516e0bbfbf8a9de07d3df7d264563b9c.sl.png)

## ✅ Misija zaključena

Čestitke! 👏🏻 Odlično opravljeno, operativec.

✅ Sprožilec dogodka: ustvarili ste sprožilec dogodka, ki prenese vrednosti parametrov Dataverse v tok agenta.  
✅ Zgradili tok agenta: porabi vrednosti parametrov Dataverse za objavo adaptivne kartice v kanalu Microsoft Teams za obveščanje HR ekipe za zaposlovanje.  
✅ Posodobili navodila podrejenega agenta: za sprožitev toka, ko se sprožilec dogodka zaključi.

To omogoča **Hiring Agent**, da deluje samostojno, kadar so življenjepisi prejeti kot priloge e-pošte, in obvesti HR ekipo za zaposlovanje za ročni pregled.

To je konec **Lab 03 - Avtomatizacija e-poštnih sporočil s prijavami kandidatov**, izberite spodnjo povezavo za prehod na naslednjo lekcijo.

⏭️ [Premakni se na lekcijo **Navodila za avtorstvo agenta**](../04-agent-instructions/README.md)

## 📚 Taktični viri

📖 [Naredite svojega agenta avtonomnega v Copilot Studio](https://learn.microsoft.com/training/modules/autonomous-agents-online-workshop/?WT.mc_id=power-188561-ebenitez)  

📖 [Dodaj sprožilec dogodka](https://learn.microsoft.com/microsoft-copilot-studio/authoring-trigger-event?WT.mc_id=power-188561-ebenitez)  

📖 [Uporaba tokov agentov z vašim agentom](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-188561-ebenitez)  

📖 [Uvod v sprožilce Power Automate](https://learn.microsoft.com/power-automate/triggers-introduction?WT.mc_id=power-188561-ebenitez)  

📖 [Uporaba tokov Power Automate z agenti](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create?WT.mc_id=power-188561-ebenitez)  

📖 [Preprečevanje izgube podatkov za Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention?WT.mc_id=power-188561-ebenitez)  

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne odgovarjamo za morebitne nesporazume ali napačne razlage, ki bi nastale zaradi uporabe tega prevoda.