<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "180f9cc0b40527f61be092c9b0f72aba",
  "translation_date": "2025-10-22T00:38:38+00:00",
  "source_file": "docs/recruit/06-create-agent-from-conversation/README.md",
  "language_code": "lt"
}
-->
# 🚨 Misija 06: Sukurkite pritaikytą agentą naudodami natūralią kalbą su Copilot ir susiekite jį su savo duomenimis

## 🕵️‍♂️ SLAPTAŽODIS: `OPERACIJA AGENTŲ KALVĖ`

> **⏱️ Operacijos laiko langas:** `~75 minutės`

🎥 **Žiūrėkite vaizdo įrašą**

[![Sukurti pritaikytą agentą vaizdo įrašo miniatiūra](../../../../../translated_images/video-thumbnail.9d5fddc1190fd4a04537488795821ac2f88fdcfe00e017f6e575a33f724e39cb.lt.jpg)](https://www.youtube.com/watch?v=qZTtQVncGFg "Žiūrėkite vaizdo įrašą YouTube")

## 🎯 Misijos aprašymas

Sveiki sugrįžę, Agentų Kūrėjau. Ši misija suteikia jums galimybę valdyti galingiausią Copilot Studio funkciją - sukurti pritaikytą agentą nuo nulio naudojant tik natūralią kalbą… ir sustiprinti jį savo duomenimis.

Tai nėra tiesiog dar vienas pokalbių robotas. Jūs kuriate žinių pagrindu veikiančią skaitmeninę kolegą - tokią, kuri gali mąstyti, atsakyti ir remtis realia įmonės informacija.

Jūsų pasirinktas ginklas? Natūrali kalba. Jūsų misija? Sukurti, apmokyti ir išbandyti visiškai pritaikytą pagalbos tarnybos agentą, kuris atsako į IT klausimus naudodamas SharePoint, įkeltus failus ar įmonės URL.

Sukurkime jūsų agentą nuo nulio.

## 🔎 Tikslai

Šioje misijoje jūs išmoksite:

1. Suprasti, kas yra pritaikyti agentai ir kuo jie skiriasi nuo iš anksto sukurtų šablonų
1. Kurti agentus naudojant natūralios kalbos užklausas ir pokalbių dizainą su Copilot
1. Susieti agentus su įmonės žinių šaltiniais, įskaitant SharePoint, dokumentus ir svetaines
1. Sužinoti apie generatyvinę orkestraciją ir kaip agentai dinamiškai ieško ir atsako naudodami kelis duomenų šaltinius
1. Sukurti ir išbandyti visiškai funkcionalų IT pagalbos tarnybos agentą, kuris gali atsakyti į klausimus iš jūsų duomenų

## 🤔 Kas yra _pritaikytas_ agentas?

Pritaikytas agentas yra pokalbių robotas arba virtualus asistentas, kurį jūs sukuriate ir suprojektuojate Copilot Studio, kad padėtų vartotojams atlikti specifines užduotis ar atsakyti į klausimus. Jis vadinamas pritaikytu, nes:

- **Jūs nusprendžiate tikslą** - padėti vartotojams prašyti atostogų, patikrinti užsakymo būseną, suteikti pagalbą IT klausimais.
- **Jūs apibrėžiate pokalbį** - ką agentas sako ir kaip jis turėtų reaguoti.
- **Jūs susiejate jį su savo duomenimis** - prisijungiate prie įmonės duomenų per integruotus palaikomus žinių šaltinius.
- **Jūs prijungiate jį prie savo sistemų ar programų** - pasirenkate iš jungčių, srautų, REST API ir modelio konteksto protokolo serverių.

!!! note
    Pagalvokite apie tai taip: jūs kuriate savo skaitmeninį pagalbininką, kuris gali kalbėtis su vartotojais ir atlikti užduotis už juos, pavyzdžiui, atsakyti į klausimus, rinkti informaciją, reikalingą procesui, arba prisijungti prie jūsų įmonės duomenų.

### 🤖 Ką gali pritaikytas agentas?

Pritaikytas agentas gali atlikti šiuos veiksmus:

- Klausti vartotojų informacijos, tokios kaip vardai, datos ar pageidavimai.
- Išsaugoti tą informaciją duomenų bazėje ar lentelėje.
- Ieškoti duomenų pagal užduotus klausimus ir atsakyti į juos.
- Dirbti savarankiškai be tiesioginio vartotojų įsikišimo.
- Sukelti veiksmus pagal poreikį per tiesioginį vartotojo sąveiką arba savarankiškai, pavyzdžiui, siųsti el. laiškus ar kurti įrašus.

### 👩🏻‍💻 Kodėl verta naudoti pritaikytą agentą?

- Taupo laiką automatizuojant pasikartojančias užduotis.
- Suteikia vartotojams draugišką, vadovaujamą patirtį.
- Pritaikomas pagal jūsų verslo ar projekto poreikius.

### ✨ Pavyzdys

Jūs sukuriate pritaikytą agentą, kuris padeda darbuotojams prašyti atostogų.

Jis klausia jų vardo, atostogų datų ir jų vadovo vardo, tada išsaugo informaciją į paskirtą sistemą, kuri tvarko atostogų prašymus, pavyzdžiui, SharePoint sąrašą.

Dabar, užuot naršę SharePoint sąraše ir kūrę naują elementą, darbuotojai tiesiog bendrauja su agentu.

## 🗣️ Naudokite natūralią kalbą agentams kurti

Anksčiau jūs išmokote greitai kurti agentus Copilot Studio naudodami iš anksto sukurtus agentų šablonus [Pamokoje 05 - Greitas startas su iš anksto sukurtais agentais](../05-using-prebuilt-agents/README.md). Šioje pamokoje mes gilinsimės į pokalbių kūrimo patirtį su Copilot. Copilot Studio leidžia lengvai kurti agentus bendraujant su Copilot, tarsi turėtumėte pokalbį.

Copilot Studio nereikia rašyti kodo, kad sukurtumėte agentą. Vietoj to, jūs aprašote, ką norite, kad jūsų agentas darytų, paprasta kalba, o Copilot padeda jums jį sukurti žingsnis po žingsnio per pokalbio tipo patirtį.

## 🌱 Bet aš naujokas „aprašant, ko noriu“ - ką daryti?

Aprašymas natūralia kalba kuriant pritaikytą agentą gali būti nauja koncepcija jums. Kiekvieną kartą, kai naudojate Copilot per Microsoft produktus ir paslaugas, jūs naudojate natūralią kalbą kaip _užklausą_.

Užklausa yra pranešimas arba instrukcija, kurią pateikiate AI agentui, kad pasakytumėte, ką norite, kad jis darytų. Pagalvokite apie tai kaip nurodymų davimą asistentui. Kuo aiškesnės jūsų instrukcijos, tuo lengviau jūsų asistentui suprasti ir veikti pagal jas.

### 🪄 Kodėl užklausos svarbios

- Jos nukreipia agento elgesį.
- Jos padeda agentui suprasti, kokio tipo pokalbį turėti.
- Gera užklausa daro agentą naudingesnį ir tikslesnį.

### 📝 Patarimai, kaip parašyti gerą užklausą

- Būkite aiškūs ir konkretūs - pasakykite tiksliai, ką norite, kad agentas darytų.
- Galvokite kaip vartotojas - ką vartotojas pasakys? Ką agentas turėtų atsakyti?
- Įtraukite pavyzdžius - jei įmanoma, pateikite pavyzdinę sąveiką.

### ✨ Pavyzdys

Tarkime, HR komanda reikia agento, kuris padėtų su atostogų prašymais.

Užklausa galėtų būti:

    „Noriu sukurti agentą, kuris padėtų vartotojams pateikti atostogų prašymą. Kai vartotojas sako, kad nori prašyti laisvo laiko, agentas turėtų paklausti jų vardo, atostogų pradžios datos, atostogų pabaigos datos ir jų vadovo vardo. Kai vartotojas pateikia šią informaciją, agentas turėtų ją išsaugoti SharePoint sąraše, pavadintame ‘Atostogų prašymai’, ir paskelbti pranešimą dedikuotame Microsoft Teams kanale.“

Kodėl ši užklausa veikia:

- **Aiškiai nurodo tikslą** - pateikti atostogų prašymą
- **Aprašo vartotojo sąveiką** - ką vartotojas sako ir ką agentas turėtų klausti
- **Nurodo reikalingus duomenis** - vardas, pradžios data, pabaigos data, vadovas
- **Paminėta, kur duomenys keliauja** - SharePoint sąrašas, pavadintas Atostogų prašymai

## 🔮 Gerai, sukūriau savo agentą... kaip jį susieti su žiniomis?

Copilot Studio žinių šaltiniai yra vietos, kur jūsų agentas gali rasti informaciją, kad pateiktų geresnius atsakymus. Kai pridėsite šiuos šaltinius, jūsų agentas galės įtraukti jūsų įmonės duomenis iš tokių vietų kaip Power Platform, Dynamics 365, svetainės ir kitos jūsų įmonės naudojamos sistemos ar paslaugos.

Šie šaltiniai veikia kartu su AI, kad padėtų jūsų agentui atsakyti tiksliau į vartotojų klausimus, tai pasiekiama per vadinamąją **generatyvinę orkestraciją**.

### 🌿 Kas yra generatyvinė orkestracija agentų kontekste?

Generatyvinė orkestracija reiškia, kad agentas naudoja AI dinamiškai nuspręsti, kaip atsakyti į klausimą, derindamas savo įgimtus kalbos įgūdžius su informacija iš jūsų pridėtų žinių šaltinių.

Kai vartotojas užduoda klausimą, agentas:

- Supranta klausimą naudodamas AI.
- Gali paklausti vartotojų trūkstamos informacijos, generuodamas klausimus vietoje.
- Pasirenka tinkamiausius žinių šaltinius.
- Ieško tuose šaltiniuose atsakymų.
- Generuoja natūralų, naudingą atsakymą naudodamas rastą informaciją.

### 🏦 Kodėl žinių šaltiniai svarbūs?

1. **Protingesni atsakymai** - kai pridėsite žinių šaltinius, jūsų agentas galės pateikti geresnius, tikslesnius atsakymus naudodamas realius jūsų organizacijos duomenis.

1. **Mažiau rankinio darbo** - jums nereikia rašyti kiekvieno galimo atsakymo. Agentas gali ieškoti jūsų pridėtuose šaltiniuose ir atsakyti automatiškai.

1. **Naudokite patikimą informaciją** - jūsų agentas gali gauti atsakymus iš sistemų, kurias jau naudojate, tokių kaip Dataverse, SharePoint ar įmonės svetainės, kad vartotojai gautų patikimą informaciją iš patikimo šaltinio.

1. **Veikia su generatyviniu AI** - žinių šaltiniai ir AI padeda jūsų agentui suprasti klausimus ir atsakyti natūraliai, net jei klausimas nebuvo iš anksto užprogramuotas ar pridėtas kaip pradinė užklausa.

1. **Lankstus ir plečiamas** - galite pridėti žinių šaltinius bet kuriuo metu nustatymo metu arba vėliau, jūsų agentas tampa protingesnis, kai keičiasi jūsų poreikiai.

### ✨ Pavyzdys

Įsivaizduokite, kad sukuriate agentą, kuris padeda darbuotojams su HR klausimais. Jūs pridedate savo įmonės HR politikos dokumentą ir SharePoint svetainę kaip žinių šaltinius.

Kai darbuotojas klausia, _„Kiek atostogų dienų man priklauso?“_, agentas naudoja generatyvinę orkestraciją, kad ieškotų tuose šaltiniuose ir atsakytų teisingą politiką, nereikalaujant, kad jūs rankiniu būdu parašytumėte tą atsakymą. Tai taupo jūsų laiką, nes nereikia numatyti kiekvieno galimo klausimo, kurį darbuotojas gali užduoti apie savo teises.

## Žinių šaltinių tipai, kuriuos galima pridėti

1. **Viešos svetainės**
    - **Ką tai daro:** Ieško specifinėse svetainėse (pvz., jūsų įmonės svetainėje) naudodamas Bing.
    - **Kodėl tai naudinga:** Puikiai tinka viešai prieinamos informacijos, pvz., DUK ar produktų detalių, įtraukimui.

1. **Dokumentai**
    - **Ką tai daro:** Naudoja dokumentus, kuriuos įkeliate tiesiai į savo agentą, pvz., PDF ar Word failus. Šie įkelti failai saugomi saugiai Dataverse.
    - **Kodėl tai naudinga:** Leidžia jūsų agentui atsakyti į klausimus, remiantis vidiniais vadovais, instrukcijomis ar politikomis.

1. **SharePoint**
    - **Ką tai daro:** Prisijungia prie SharePoint aplankų ar failų naudodamas Microsoft Graph Search.
    - **Kodėl tai naudinga:** Idealu norint pasiekti komandos dokumentus, HR politiką ar projekto failus, saugomus SharePoint.

1. **Dataverse**
    - **Ką tai daro:** Naudoja struktūrizuotus duomenis iš jūsų Dataverse aplinkos lentelių ir eilučių, gali taikyti sinonimus ir žodynų apibrėžimus lentelėms ir stulpeliams, kad pagerintų agento atsakymus.
    - **Kodėl tai naudinga:** Kai reikia ieškoti įmonės duomenų, saugomų Dataverse, pvz., klientų informacijos.

1. **Realaus laiko žinios su jungtimis**
    - **Ką tai daro:** Leidžia jūsų agentui pasiekti tiesioginius duomenis iš kitų įmonės sistemų, tokių kaip Salesforce, ServiceNow, Dynamics 365, AzureSQL, Databricks ir daugiau pokalbio metu, naudojant vartotojo leidimus.
    - **Kodėl tai naudinga:** Tai suteikia naujausius, saugius ir tikslius atsakymus, nedubliuojant duomenų, todėl jūsų agentas tampa protingesnis ir saugesnis.

1. **Azure AI Search**
    - **Ką tai daro:** Leidžia jūsų agentui ieškoti dideliuose dokumentų rinkiniuose, saugomuose Azure, naudojant semantinę ir vektorinę paiešką, kad suprastų vartotojo klausimus.
    - **Kodėl tai naudinga:** Pateikia tikslius, patikimus atsakymus iš sudėtingų duomenų šaltinių, palaiko citatas ir gerai skalėja dideliems dokumentų rinkiniams su saugiais prieigos kontrolės mechanizmais.

## 🔒 Pastaba apie saugumą

### Žinių šaltinių autentifikacija

Kai kurie šaltiniai, tokie kaip SharePoint ir Dataverse, reikalauja vartotojo autentifikacijos. Tai reiškia, kad agentas atsakymuose nurodys tik tuos duomenis, kuriuos vartotojas turi teisę matyti. Tuo tarpu kiti šaltiniai gali reikalauti papildomos konfigūracijos, kad agentas galėtų prisijungti, pvz., Azure AI Search, kuris reikalauja Azure paskyros ir autentifikacijos tipo nurodymo.

## Agentų atsakymų tobulinimas Copilot Studio

Po to, kai jūsų agentas sukuriamas per pokalbių kūrimo patirtį, norėsite išbandyti savo agentą pagal instrukcijas, kurias Copilot sugeneravo iš jūsų užklausos. Agentų atsakymų tobulinimas Copilot Studio yra apie tai, kad įsitikintumėte, jog jis aiškiai supranta jūsų tikslus ir turi tinkamą informaciją darbui.

1. **Patobulinkite agento instrukcijas** - čia jūs nurodote savo agentui, kaip jis turėtų elgtis. Naudokite aiškią, konkrečią kalbą.

    Pavyzdžiui:

    ✅ „Elkis kaip draugiškas klientų aptarnavimo agentas, kuris paprastai paaiškina dalykus.“

    ❌ „Būk naudingas.“ (Per daug neaišku)

1. **Patikrinkite toną ir kalbą** - įsitikinkite, kad agento tonas atitinka jūsų auditoriją.

    Galite nustatyti, kad jis būtų:

    - Draugiškas ir neformalus.
    - Profesionalus ir glaustas.
    - Palaikantis ir kantrus.

1. **Pridėkite arba atnaujinkite žinių šaltinius** - jei jūsų agentui reikia atsakyti į klausimus apie temą, įsitikinkite, kad jis turi prieigą prie
Naudosime tą patį naudojimo atvejį iš [Pamoka 03 - Sukurkite deklaratyvų agentą Microsoft 365 Copilot](../03-create-a-declarative-agent-for-M365Copilot/README.md#use-case-scenario)

**Kaip** darbuotojas

**Noriu** greitai ir tiksliai gauti pagalbą iš IT pagalbos tarnybos agento dėl tokių problemų kaip įrenginių gedimai, tinklo trikčių šalinimas, spausdintuvo nustatymas

**Kad galėčiau** išlikti produktyvus ir išspręsti technines problemas be vėlavimų

Pradėkime!

### ✨ Būtinos sąlygos

- **SharePoint svetainė**

Naudosime **Contoso IT** SharePoint svetainę iš [Pamoka 00 - Kurso nustatymas - 3 žingsnis: Sukurkite naują SharePoint svetainę](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

Jei dar nesukūrėte **Contoso IT** SharePoint svetainės, grįžkite į [Pamoka 00 - Kurso nustatymas - 3 žingsnis: Sukurkite naują SharePoint svetainę](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

- **Sprendimas**

Naudosime **Contoso Helpdesk Agent** sprendimą iš [Pamoka 04 - Sukurkite sprendimą savo agentui](../04-creating-a-solution/README.md#41-create-a-solution-publisher).

Jei dar nesukūrėte **Contoso Agent** sprendimo, grįžkite į [Pamoka 04 - Sukurkite sprendimą savo agentui](../04-creating-a-solution/README.md#41-create-a-solution-publisher).

### 6.1 Naudokite natūralią kalbą agentui sukurti su Copilot

!!! warning "Copilot klausimai gali skirtis tarp sesijų"

    Copilot pokalbių kūrimo patirtis gali kaskart skirtis, kur pateikti klausimai vadovavimui gali būti šiek tiek kitokie nei anksčiau.

1. Eikite į Copilot Studio pagrindinį puslapį ir lauke įveskite šią užklausą, apibūdinančią IT pagalbos tarnybos agentą. Užklausoje pateikiamas agento tikslas, kontekstas, numatytos užduotys ir agento atsakymo formatas.

    ```text
    You are an IT help desk agent. Your goal is to assist users with their IT issues. You can access information from our company's knowledge base at https://support.microsoft.com/en-us. Your responses should be polite and helpful. If a user reports a slow computer, ask about the age of the device, current software versions, and if they've recently installed any new programs. If a user is experiencing trouble logging into their email, guide them through password reset procedures. You should be concise and informative, using step-by-step instructions with bullet points when appropriate.
    ```

      ![Įveskite užklausą](../../../../../translated_images/6.1_01_Prompt.c4be2ff2cac9fde3659f2e7016e48f01860b55523d3320b3b8450ef2fcb1f51a.lt.png)

1. Toliau įkeliama Copilot pokalbių kūrimo patirtis. Matysite, kad Copilot vykdo atsakymo procesą.

      ![Copilot pokalbių kūrimo patirtis](../../../../../translated_images/6.1_02_ConversationalCreationExperienceLoads.115eaf4e5a15c1b60bc0d25c97a0d97d462d6c740cfed5de369b2bd8fd1cc8bc.lt.png)

1. Copilot patvirtina, kad agentas buvo sukurtas pagal pateiktas instrukcijas, ir prašo patvirtinti agento pavadinimą. Paprašysime Copilot pavadinti mūsų agentą taip:

       ```text
       Contoso Helpdesk Agent
       ```

      ![Pervadinkite agentą](../../../../../translated_images/6.1_03_AgentName.a848acea10cd1d3d6ba68fea2b0e094ecbd130a124413e3c8134198c81654833.lt.png)

1. Copilot vykdo užklausą ir matysime, kad agento pavadinimas buvo atnaujintas agento skydelyje. Toliau Copilot prašo patikslinti instrukcijas. Jis klausia, kaip turėtume reaguoti į tam tikras problemas, ir paprašysime, kad jis pripažintų problemą, pateiktų pavyzdžių temoms atsakyti ir formatuotų atsakymą kaip sąrašą su ženkleliais.

    Nukopijuokite ir įklijuokite šią užklausą, tada pateikite ją Copilot.

       ```text
       Prioritetą teikite skubiems prašymams. IT problemų ar scenarijų, kuriems padėti, pavyzdžiai: įrenginių problemos, tinklo ryšio problemos, prisijungimo problemos. Trikčių šalinimo metu pirmiausia pripažinkite jų problemą ir atsakykite su empatija, tada pateikite žingsnis po žingsnio instrukcijas naudodami sąrašą su ženkleliais ir paklauskite, ar jiems reikia papildomos pagalbos.
       ```

      ![Patikslinkite agento instrukcijas](../../../../../translated_images/6.1_04_RefineInstructions.9575407dbc12e0399691068d20e0d0252bb8b8f839cf53ee9d715fe2c16afa70.lt.png)

1. Agentas atnaujins instrukcijas po to, kai Copilot gaus užklausą. Atkreipkite dėmesį, kaip dešinėje pusėje atsirado pradinės užklausos. Jos buvo suformuotos remiantis mūsų instrukcijomis.

    Toliau Copilot prašo viešų svetainių, kad pagrįstų agento žinias.

    Nukopijuokite ir įklijuokite šią užklausą, tada pateikite ją Copilot.

      ```text
      https://support.microsoft.com
      ```

      ![Pridėkite viešai prieinamą svetainę](../../../../../translated_images/6.1_05_KnowledgeSource.3aec8d869b73d273f88c62cf99bb2f731df83a83c1ca54d92d6e96b86a570637.lt.png)

1. Vieša svetainė bus pridėta kaip žinių šaltinis. Copilot klausia, ar reikia pridėti papildomų žinių šaltinių. Papildomų viešų svetainių pridėti nereikia.

    Nukopijuokite ir įklijuokite šią užklausą, tada pateikite ją Copilot.

      ```text
      Proceed with setup
      ```

      ![Tęskite nustatymą](../../../../../translated_images/6.1_06_ProceedWithSetup.11ceb9ccccccd19418711681d42b602ee223ebd017d6bf300088de84d1d35f1d.lt.png)

1. Copilot patvirtina, kad mūsų Contoso Helpdesk Agent nustatymas baigtas, tačiau pridėsime dar vieną pakeitimą – paprašysime, kad mūsų agentas neatsakinėtų į klausimus, susijusius su personalo klausimais. Tai leidžia mūsų agentui žinoti, kad jis neturėtų atsakyti į vartotojų užduodamus klausimus, susijusius su personalo klausimais.

    Nukopijuokite ir įklijuokite šią užklausą, tada pateikite ją Copilot.

       ```text
       Nesuteikite pagalbos klausimams, susijusiems su personalo klausimais, pavyzdžiai: Koks mano atostogų likutis? Kiek turiu nedarbingumo dienų? Koks yra mūsų atlyginimų portalo URL?
       ```

      ![Neatsakinėkite į personalo klausimus](../../../../../translated_images/6.1_07_DoNotTalkAbout.d9ccbbd15b9793e1642b365be6968548f6f250be5d541f1ad06eb9f12985e94f.lt.png)

1. Instrukcijos bus atnaujintos, kad nebūtų teikiama pagalba klausimams, susijusiems su personalo klausimais. Daugiau atnaujinimų daryti nereikia, mūsų agentas yra pasiruošęs būti sukurtas.

      ![Agentas instrukcijos atnaujintos](../../../../../translated_images/6.1_08_AgentInstructionsUpdated.4de1112eeb5c8e2e2fe03fcbc6d332bdc3b1de740d9a5ab6b1ec30e27e241096.lt.png)

1. Prieš sukurdami agentą, atlikime kelis dalykus.

    Pirmiausia pasirinkite **Konfigūruoti** skirtuką, kad peržiūrėtumėte agento detales, apibrėžtas mūsų pokalbyje su Copilot. Čia matysite pavadinimą, aprašymą, instrukcijas, žinias ir siūlomas/pradines užklausas.

      ![Peržiūrėkite agento detales](../../../../../translated_images/6.1_09_ViewAgentDetails.72c7f66721d6ac354bcc7186204bb0ad169456b0b7756f5e5a5e0f090e802a57.lt.png)

1. Antra, išbandykime mūsų agentą. Nukopijuokite ir įklijuokite šią užklausą, tada pateikite klausimą mūsų agentui.

       ```text
       Kaip galiu patikrinti savo Surface garantijos būseną?
       ```

      ![Išbandykite agentą](../../../../../translated_images/6.1_10_TestAgent.8b1a0f1d98f4fa5b61336e1c4ac6d77b4822283314c2941cb0e04bf5247d8489.lt.png)

1. Klausimo atsakymas bus rodomas, kur atsakymai pateikiami žingsnis po žingsnio vadovo formatu, naudojant sąrašą su ženkleliais. Puiku, mūsų agentas veikia! 🙌🏻

      ![Agentas atsako](../../../../../translated_images/6.1_11_AgentResponse.c5fb305335b8e9b456b0f75ec9e237d4abbc3e9a1a6976e14bb656f1adffb14a.lt.png)

1. Galiausiai dar kartą patikrinkime, ar sprendimas, kuriame bus sukurtas mūsų agentas, yra tas sprendimas, kurį sukūrėme ir pasirinkome kaip pageidaujamą sprendimą [Pamoka 04 - Sukurkite naują sprendimą](../04-creating-a-solution/README.md#42-create-a-new-solution).

    Pasirinkite **trijų taškų piktogramą (...)** ir pasirinkite **Atnaujinti išplėstinius nustatymus**.

      ![Atnaujinkite išplėstinius nustatymus](../../../../../translated_images/6.1_12_UpdateAdvancedSettings.5943949ae7c9f492fb90779b0284283deb4186f14cd6588c46920f8e50d8d6d0.lt.png)

1. Atsiras **Išplėstinių nustatymų** modalas, ir matysime, kad mūsų anksčiau sukurtas sprendimas yra pasirinktas pagal numatytąjį. Taip yra dėl to, kad pasirinkome savo sprendimą kaip pageidaujamą sprendimą [Pamoka 04 - Sukurkite naują sprendimą](../04-creating-a-solution/README.md#42-create-a-new-solution).

    Pasirinkite **Atšaukti.**

      ![Išplėstinių nustatymų peržiūra](../../../../../translated_images/6.1_13_AdvancedSettings.fff0861831346d5bef4e7731fed83073aca6d17aa940633040f65b1f300aee15.lt.png)

1. Dabar sukurkime mūsų pasirinktą agentą! Pasirinkite **Sukurti**.

      ![Pasirinkite Sukurti](../../../../../translated_images/6.1_14_CreateAgent.7330a5fbe44a0664f35c5b5502e499f6dd3bad55d13094ef6c22608e8f8831b1.lt.png)

1. Copilot Studio pradės kurti mūsų agentą.

      ![Agentas kuriamas](../../../../../translated_images/6.1_15_SettingUpAgent.34028a37bc2922eae13d0a18bb468bd738608b4de948192d89c3a2680fff2496.lt.png)

1. Kai mūsų agentas bus sukurtas, galėsime peržiūrėti agento detales, kurios atitinka mūsų prašymus pokalbių kūrimo patirtyje su Copilot. Slinkite žemyn, kad peržiūrėtumėte agentą, kur matysite pavadinimą, aprašymą, instrukcijas, žinių šaltinius ir siūlomas užklausas. Orkestravimo režimas yra įjungtas pagal numatytąjį, o atsakymų modelio numatytasis modelis yra naudojamas.

      ![Agentas sukurtas](../../../../../translated_images/6.1_16_AgentCreated.91edb1939b33d158930cd385c0d97c320958504e224ffc163ed5030b0cdc72a7.lt.png)

      ![Žinių šaltiniai](../../../../../translated_images/6.1_17_KnowledgeSources.00f1ed0b7f405e4820971834fb75e39a80659cf1b9eeeee42d861bfc4656240f.lt.png)

      ![Siūlomos užklausos](../../../../../translated_images/6.1_18_SuggestedPrompts.20b84b9420858de8485460cc50a8e73798b08bb2022c946899adcbf9b484e0f0.lt.png)

1. Dabar išbandykime naujai sukurtą agentą. Dešinėje pusėje esančiame **Testavimo** skydelyje pasirinkite **Veiklos žemėlapio** piktogramą.

      ![Pasirinkite Veiklos žemėlapį](../../../../../translated_images/6.1_19_ActivityMap.b2e6c77c69fd953818dc73b4dbe2e6d46529cf105d7a4a18c590d15c0b717cf4.lt.png)

1. Įveskite šį klausimą į **Testavimo** skydelį.

       ```text
       Kaip rasti savo Windows 11 produkto raktą?
       ```

      ![Išbandykite naujai sukurtą agentą](../../../../../translated_images/6.1_20_TestAgent.a9d3a761477c9b79facd132c173ec886d808320ad2cbc0347066a20c0f9dd669.lt.png)

1. Tada įkels Veiklos žemėlapį, kuris realiu laiku parodys, kokį kelią agentas apdoroja. Šiuo atveju mūsų agentas suprato klausimą ir ieško žinių šaltinių. Šiuo metu turime vieną šaltinį – viešą svetainę, kurią anksčiau pridėjome naudodami Copilot, ir būtent ją agentas peržiūri.

      ![Peržiūrimi žinių šaltiniai](../../../../../translated_images/6.1_21_ReviewingSources.78068042898e2960667393c931e120dbe80f6b74c9af222b79446f7a82d5c757.lt.png)

1. Mūsų agentas tada atsako į klausimus, pateikdamas atsakymus, kurie yra išdėstyti kaip sąrašas su ženkleliais, kaip nurodyta instrukcijose. Atsakyme yra nuorodų į tinklalapius, iš kurių agentas suformavo savo atsakymą. Tai leidžia vartotojams patikrinti atsakymo šaltinį.

      ![Nuorodos atsakyme](../../../../../translated_images/6.1_22_Response.44a088e80f2a9fac74bcd364571f1ebb900b43e9e647089ef51d39b809b0f0e9.lt.png)

1. Taip pat galite peržiūrėti atsakymą ir jo šaltinius, slinkdami žemyn **Žinių modalą** Veiklos žemėlapyje.

      ![Nuorodų šaltiniai](../../../../../translated_images/6.1_23_ReferencedSources.ca8e41855284446d121a34fd9d8d667e05016f5eda741adcf7f356ac2c59c559.lt.png)

Sveikiname! Jūs sukūrėte savo pirmąjį pasirinktą agentą su Copilot Copilot Studio 🙌🏻

### 6.2 Pridėkite vidinį žinių šaltinį naudodami SharePoint svetainę

Anksčiau su Copilot pridėjome viešą svetainę kaip išorinį žinių šaltinį mūsų agentui pokalbių kūrimo patirties metu. Dabar pridėsime vidinį žinių šaltinį, naudodami SharePoint svetainę. Tai bus SharePoint svetainė, kurią sukūrėte [Pamoka 00 - Kurso nustatymas](../00-course-setup/README.md#step-4-create-new-sharepoint-site) metu.

1. Pasirinkite **+ Pridėti žinias**.

      ![Pasirinkite Pridėti žinias](../../../../../translated_images/6.2_01_AddKnowledge.5e441f7e3b0ebb25218bece75394ecf4c8c3a60e1b5d8ea15ca020546352f256.lt.png)

1. Pasirinkite **SharePoint**.

      ![Pasirinkite SharePoint](../../../../../translated_images/6.2_02_SelectSharePoint.5bd29d31cc76f581db3eef474731fc2dfce4ef1dab86d9cc11716323ba726408.lt.png)

1. Įklijuokite **SharePoint svetainės adresą**, sukurtą [Pamoka 00 - Kurso nustatymas](../00-course-setup/README.md#step-4-create-new-sharepoint-site), į SharePoint URL lauką ir pasirinkite **Pridėti**.

      ![Įveskite SharePoint svetainės URL](../../../../../translated_images/6.2_03_AddSharePointURL.974c251d9690524a8bfa4c9dd930af3d834245749fb9f1fda508c3b1f9773827.lt.png)

1. Atnaujinkite **SharePoint svetainės pavadinimą** į `Contoso IT` ir pasirinkite **Pridėti**.

      ![Atnaujinkite SharePoint svetainės pavadinimą ir pridėkite prie agento](../../../../../translated_images/6.2_04_UpdateNameAddToAgent.46a814c09586fe135bffb77814ba13d0593f25feaaa989174c97e80345f03866.lt.png)

1. SharePoint svetainė dabar buvo pridėta kaip žinių šaltinis su būsena _Paruošta_. Stulpelyje Būsena bus rodoma, ar žinių šaltinis buvo sėkmingai įkeltas/prijungtas, ar yra problema.

      ![SharePoint svetainės būsena](../../../../../translated_images/6.2_05_SharePointStatus.90a9001978f31c5d4b183d5ecc4869c81dd9fc1bb8a6b1ef4675fcb51d52f8e5.lt.png)

### 6.3 Pridėkite vidinį žinių šaltinį įkeldami dokumentą

Dabar pridėsime dar vieną vidinį žinių šaltinį, tiesiogiai įkeldami dokumentą į mūsų agentą.

1. Pasirinkite **Pridėti žinias**.

      ![Pasirinkite Pridėti žinias](../../../../../translated_images/6.3_01_AddKnowledge.d93caa805efb7e2a433d9777f8eb1789dc5daf4f9ebe95da2a74a2b57cffdd33.lt.png)

1. Pasirinkite **Įkelti failą** arba **Pasirinkti naršymui**.

      ![Pasirinkite įkelti failus](../../../../../translated_images/6.3_02_UploadFile.662de4f3916bfa3f34a6699a9a45846e64e71a70dfecbc656fb5b511792de6b6.lt.png)

1. Atsisiųskite šį [pavyzdinį failą](../../../../../docs/recruit/06-create-agent-from-conversation/assets/Contoso_Guest_WiFi_Connection_Guide.docx "download") ir pasirinkite jį savo failų naršyklėje. Pasirinkite **Atidaryti**.

      ![Pasirinkite dokumentą](../../../../../translated_images/6.3_03_SelectFile.077d73491dc6ff1f6114d259261ee68334c4da182c3b55233468637d1989f14c.lt.png)

1. Failas buvo pasirinktas įkėlimui. Toliau pasirinkite **Pridėti prie agento**.

      ![Pasirinkite Pridėti prie agento](../../../../../translated_images/6.3_04_AddToAgent.1eec469d6d28c22959c8d7f3ad39aa0df5e07adfdb85ce1e21c0c4fe31c27db5.lt.png)

1. Dokumentas bus įkeltas į agentą. Palaukite, kol įkėlimas bus baigtas, neuždarykite naršyklės lango. Dokumento būsena iš pradžių bus _Vykdoma_, palaukite, kol būsena bus atnaujinta į **Paruošta**, prieš testuodami savo agentą.

      ![Failo būsena](../../../../../translated_images/6.3_05_FileStatus.2029b8aa0109a6f46372291e9bba33429c2ebd572efa81702a73cae91fbf3a90.lt.png)

Dabar išbandykime mūsų agentą!

### 6.4 Testuokite agentą

Išbandysime tris žinių šaltinius, užduodami klausimus mūsų Contoso Helpdesk Agent.

1. Pasirinkite **atnaujinimo** piktogramą testavimo skydelyje, po to pasirinkite **veiklos žemėlapio** piktogramą.

      ![Atnaujinimo piktograma](../../../../../translated_images/6.4_01_RefreshAndActivityMap.c24ebc6c277786dab75941dac0b6e55f3dbb244b29fb791c87e4aba5c4a56c81.lt.png)

1. Įveskite šį klausimą, kad išbandytumėte mūsų viešos svetainės (išorinio) žinių šaltinį.

      ```text
      How can I find the serial number on my Surface device?
      ```

      ![Įveskite užklausą, kad išbandytumėte svetainės žinių šaltinį](../../../../../translated_images/6.4_02_TestQuestion1.3a5aeaaa72a9578a05edd4575275e1ba60ecaf8c7377ab13872619580e0309f9.lt.png)

1. Tada matysite, kaip agentas peržiūri žinių šaltinius ir pateikia atsakymą, naudodamasis svetainės žinių šaltiniu.
![Interneto puslapis, nurodytas atsakyme](../../../../../translated_images/6.4_03_ReviewingSources.a56742505402eab51b423b543c814242728ff7947e443360740b3e5dac82ba65.lt.png)

1. Atsakymas bus pateiktas, ir pastebėsite, kad yra nuorodų į interneto puslapį, iš kurio buvo suformuotas atsakymas. Jei slinksite žemyn žinių modalą veiklos žemėlapyje, pamatysite kitus žinių šaltinius, kuriuos agentas peržiūrėjo, tai yra SharePoint svetainė ir įkeltas failas.

    Tačiau jie nebuvo panaudoti, nes **Nuorodų šaltinių** skiltyje buvo nurodytas tik interneto svetainės žinių šaltinis. Atsakymas buvo pagrįstas interneto svetainės žinių šaltiniu. Jei pasirinksite nuorodas, būsite nukreipti į interneto puslapį.

![Nuorodų šaltiniai, nurodyti ir peržiūrėti](../../../../../translated_images/6.4_04_ReferencedSources.2fb91e8ed7cac8196c3cc1e43006512d4138adb4f240bdab66cd2af5fd1ec7c6.lt.png)

1. Dabar išbandykime tiek mūsų SharePoint svetainės žinių šaltinį, tiek dokumento žinių šaltinį viename pranešime. Įveskite šį klausimą.

      ```text
      How can I access our company Contoso VPN? How do guests connect to the Contoso Guest wifi?
      ```

![Testuokite SharePoint ir dokumento žinių šaltinius](../../../../../translated_images/6.4_05_TestQuestion2.f77ce87578b59386ec5491716996aff9247c5e5ad458a51226276238adb282f3.lt.png)

1. Dar kartą pamatysite, kaip agentas peržiūri tris žinių šaltinius, kad sugeneruotų atsakymą į klausimus iš mūsų vieno pranešimo. Agentas atsako į abu klausimus viename pranešime ir atskirai nurodo SharePoint puslapį bei dokumentą, iš kurio buvo suformuotas atsakymas.

    Žinių modaliniame lange veiklos žemėlapyje pamatysite, kad SharePoint svetainė ir dokumentas buvo naudojami kaip nuorodų šaltiniai. Jūs turite pilną matomumą, kokie žinių šaltiniai buvo panaudoti atsakant į abu klausimus.

![Nuorodų šaltiniai, nurodyti](../../../../../translated_images/6.4_06_ReferencedSources.caf049dac28b4317c39b074b481f5d7d5b1b92fd792fc4b796fec0c1575f9581.lt.png)

1. Visada verta patikrinti, ar sugeneruotas atsakymas yra teisingas. Pasirinkite SharePoint svetainės nuorodą, ir bus įkeltas SharePoint puslapis su DUK, kur galėsite slinkti žemyn ir peržiūrėti VPN instrukcijas.

![Peržiūrėkite SharePoint puslapį](../../../../../translated_images/6.4_07_VerifySharePoint.6ee48515fedf37a62564ddc388c2452751ed5777cda321d887c315c2de78d293.lt.png)

1. Tada pasirinkite dokumento nuorodą, ir pasirodys modalinis langas su tekstu iš dokumento, kuris atspindi atsakymą.

![Peržiūrėkite dokumentą](../../../../../translated_images/6.4_08_VerifyDocument.0f0680b63e6bdd0b558eb287e85965b87ab820e12b25b1e0965f8ebbde795222.lt.png)

Agentas gali atsakyti į kelis klausimus viename pranešime, peržiūrėti žinių šaltinius ir nurodyti juos savo atsakyme. Visada įsitikinkite, kad atsakymas yra teisingas, peržiūrėdami nuorodas.

## ✅ Misija įvykdyta

Sveikiname! 👏🏻 Jūs išmokote naudoti natūralią kalbą, kad sukurtumėte savo individualų agentą, kuris gali bendrauti su jūsų duomenimis iš trijų skirtingų žinių šaltinių 🙌🏻

Tai yra **Laboratorijos 06 - Sukurkite agentą su Copilot** pabaiga, pasirinkite žemiau esančią nuorodą, kad pereitumėte į kitą pamoką. Jūsų sukurtas agentas šioje laboratorijoje bus naudojamas kitos pamokos laboratorijoje.

⏭️ [Pereiti į pamoką **Pridėti naują temą su trigeriu**](../07-add-new-topic-with-trigger/README.md)

Sveiki atvykę į elitą. Dabar jūs žinote, kaip kurti skaitmeninius agentus, kurie kalba jūsų kalba, remiasi jūsų duomenimis ir palaiko jūsų komandą. Tęskite—jūsų misija tik prasideda.

## 📚 Taktiniai ištekliai

🔗 [Greitas startas: Sukurkite ir įdiekite agentą](https://learn.microsoft.com/microsoft-copilot-studio/fundamentals-get-started?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172617-ebenitez)

🔗 [Sukurti ir ištrinti agentus](https://learn.microsoft.com/microsoft-copilot-studio/authoring-first-bot?WT.mc_id=power-172617-ebenitez)

🔗 [Pagrindinės sąvokos - Agentų kūrimas](https://learn.microsoft.com/microsoft-copilot-studio/authoring-fundamentals/?WT.mc_id=power-172617-ebenitez)

📺 [Sukurkite individualų agentą naudodami natūralią kalbą](https://aka.ms/ai-in-action/copilot-studio/ep1)

📺 [Pridėkite žinių savo agentams](https://aka.ms/ai-in-action/copilot-studio/ep2)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/06-create-agent-from-conversation" alt="Analitika" />

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Dėl svarbios informacijos rekomenduojama profesionali žmogaus vertimo paslauga. Mes neprisiimame atsakomybės už nesusipratimus ar neteisingus aiškinimus, atsiradusius naudojant šį vertimą.