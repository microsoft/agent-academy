<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-22T00:42:35+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "lt"
}
-->
# 🚨 Misija 03: Diegti Deklaratyvų Agentą Microsoft 365 Copilot

## 🕵️‍♂️ SLAPTAŽODIS: `OPERACIJA COPILOT PRATĘSIMAS`

> **⏱️ Operacijos laiko langas:** `~60 minučių`

🎥 **Žiūrėkite Vaizdo Įrašą**

[![Sukurti Deklaratyvų Agentą vaizdo įrašo miniatiūra](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.lt.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "Žiūrėkite vaizdo įrašą YouTube")

## 🎯 Misijos Aprašymas

Sveiki atvykę į savo pirmąją užduotį, Agentų Kūrėjau. Jūs buvote pasirinktas sukurti, aprūpinti ir diegti Deklaratyvų Agentą—specializuotą operatyvą, tiesiogiai integruotą į Microsoft 365 Copilot ir Microsoft Teams.

Skirtingai nuo tradicinių agentų, deklaratyvūs agentai veikia pagal apibrėžtą misiją (instrukcijas), įrankius (užklausas/jungtis) ir strateginę prieigą prie vidinės informacijos (žinių šaltinių, tokių kaip SharePoint, Dataverse ir kt.). Jūsų užduotis yra sukurti šį agentą naudojant Microsoft Copilot Studio—be kodo valdymo centrą, kuriame jūsų agento įgūdžiai ir tikslas tampa realybe.

Pradėkime.

## 🔎 Tikslai

Šios misijos metu išmoksite:

1. Suprasti, kas yra deklaratyvūs agentai ir kaip jie praplečia Microsoft 365 Copilot su individualizuotomis galimybėmis
1. Palyginti Microsoft Copilot Studio ir Copilot Studio agentų kūrimo įrankius deklaratyvių agentų kūrimui
1. Sukurti deklaratyvų agentą naudojant natūralią kalbą per pokalbių kūrimo patirtį
1. Pridėti AI užklausas kaip įrankius, kad pagerintumėte agento specializuotas žinias ir problemų sprendimo gebėjimus
1. Publikuoti ir išbandyti savo deklaratyvų agentą Microsoft 365 Copilot ir Microsoft Teams

## 🕵🏻‍♀️ Kas yra deklaratyvus agentas Microsoft 365 Copilot?

Deklaratyvūs agentai yra pritaikytos Microsoft 365 Copilot versijos. Galite pritaikyti Microsoft 365 Copilot, kad atitiktų specifinius verslo poreikius, suteikdami jam instrukcijas, palaikančias tam tikrą procesą, integruodami įmonės žinias ir naudodami įrankius platesniam funkcionalumui. Tai leidžia organizacijoms kurti personalizuotas patirtis su didesne funkcionalumu jų vartotojams.

## 🤔 Kodėl turėčiau naudoti Microsoft Copilot Studio deklaratyvaus agento kūrimui?

Kaip kūrėjas, tikėtina, kad jau tyrinėjote [Copilot Studio agentų kūrimo įrankį](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez) Microsoft 365 Copilot, todėl galbūt klausiate savęs _kodėl kurti deklaratyvų agentą Microsoft Copilot Studio?_

Microsoft Copilot Studio siūlo išsamų įrankių ir funkcijų rinkinį deklaratyviems agentams, kuris viršija Copilot Studio agentų kūrimo įrankio ribas. Panašiai kaip Copilot Studio agentų kūrimo įrankis, jums nereikia žinoti programavimo ar programinės įrangos kūrimo, kad galėtumėte kurti Microsoft Copilot Studio. Pažvelkime į skirtumus tarp Copilot Studio agentų kūrimo įrankio ir Copilot Studio deklaratyvių agentų kūrimui.

### Funkcijų palyginimas

Šioje lentelėje pateikiami skirtumai, kai kuriamas deklaratyvus agentas Copilot Studio agentų kūrimo įrankyje ir Copilot Studio.

| Funkcija                   | Copilot Studio agentų kūrimo įrankis Microsoft 365 Copilot                          | Praplėsti Microsoft 365 Copilot Copilot Studio                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **Žinios**       | Internetas, SharePoint, Microsoft Teams pokalbiai, Outlook el. laiškai, Copilot jungtys     | Interneto paieška (per Bing), SharePoint, Dataverse, Dynamics 365, Copilot jungtys  |
| **Įrankiai**       | Kodo interpretatorius, vaizdų generatorius     | 1400+ Power Platform jungčių, individualios jungtys, užklausos, kompiuterio naudojimas, REST API, Model Context Protocol   |
| **Pradžios užklausos**         | Konfigūruoti užklausas, kad vartotojai galėtų greitai pradėti   | Konfigūruoti užklausas, kad vartotojai galėtų greitai pradėti  |
| **Kanalas**           | Agentas publikuojamas tik Microsoft 365 Copilot     | Agentas publikuojamas Microsoft 365 Copilot ir Microsoft Teams      |
| **Dalijimosi teisės**         | Vartotojai yra tik peržiūrėtojai    | Vartotojai gali būti redaktoriai arba peržiūrėtojai   |

Microsoft Copilot Studio siūlo daugiau galimybių deklaratyviems agentams, apie kurias sužinosime toliau.

!!! tip
    - Norėdami sužinoti daugiau apie Copilot Studio agentų kūrimo įrankį, apsilankykite [Copilot Developer Camp: Lab MAB1 - Sukurkite savo pirmąjį agentą](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/)
    - Norėdami profesionaliai praplėsti deklaratyvų agentą už Copilot Studio agentų kūrimo įrankio ribų Microsoft 365 Copilot, apsilankykite [Copilot Developer Camp: Lab MAB1 - Sukurkite savo pirmąjį agentą](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/)

### Microsoft 365 Copilot praplėtimas su deklaratyviais agentais, sukurtais Copilot Studio

Pažvelkime giliau į tai, ką išmokome iš funkcijų palyginimo lentelės.

#### Pritaikymas

- **Detalios Instrukcijos**: Galite pateikti detalias instrukcijas ir galimybes, kad tiksliai apibrėžtumėte agento tikslą ir elgesį.
  - Tai apima įrankių naudojimą tiesiog natūralia kalba.

- **Prieiga prie Įmonės Žinių**: Leidžia prieigą prie įmonės žinių, kurios gerbia vartotojų teises.
  - SharePoint integracija
  - Dataverse integracija
  - Dynamics 365 integracija
  - Microsoft 365 Copilot jungtys, kurias įgalino jūsų organizacijos administratorius

   ![Pritaikymas](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.lt.png)

#### Pažangios Galimybės

- **Integracija su Išorinėmis Paslaugomis**: Leidžia pasirinkti iš 1400+ Power Platform jungčių, kurios integruojasi su išorinėmis paslaugomis, suteikdamos sudėtingesnes ir galingesnes funkcijas.
  - Pavyzdžiai: [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez), [ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez), [Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez), [SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) ir kt.
  - Alternatyviai, galite naudoti Model Context Protocol serverius ir REST API tiesiogiai savo deklaratyviame agente

- **AI Užklausos**: Naudokite užklausą analizuoti ir transformuoti tekstą, dokumentus, vaizdus ir duomenis naudojant natūralią kalbą ir AI logiką.
  - Pasirinkite pokalbių modelį, rinkitės iš Basic (Numatytasis), Standard, Premium
  - Galimybė naudoti savo Azure AI Foundry modelį, kad užklausa būtų pagrįsta

- **Daugiau diegimo konfigūracijos parinkčių**: Pasirinkite kanalus ir apibrėžkite vartotojų teises.
  - Publikuokite Microsoft Teams, pažįstamą vartotojo sąsają jūsų vartotojams, kad greičiau prisitaikytų
  - Redagavimo vartotojų teisės gali būti dalijamos, kad būtų išvengta vieno priklausomybės taško nuo agento savininko

   ![Pritaikymas](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.lt.png)

Apibendrinant, deklaratyvūs agentai Microsoft Copilot Studio leidžia pritaikyti Microsoft 365 Copilot, kad atitiktų verslo poreikius, integruojant įmonės žinių sistemas, įrankius, jungiančius su išorinėmis paslaugomis ar AI GPT modeliais.

## 🧪 Laboratorija 03: Sukurti deklaratyvų agentą Microsoft Copilot Studio Microsoft 365 Copilot

Toliau mokysimės, kaip sukurti deklaratyvų agentą "Verslas-Darbuotojui" naudojimo atveju, kuris veiks kaip **IT pagalbos tarnybos agentas**.

- [3.1 Sukurti deklaratyvų agentą](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 Sukurti ir pridėti užklausą savo deklaratyviam agentui](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 Atnaujinti instrukcijas ir išbandyti savo deklaratyvų agentą](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 Publikuoti savo deklaratyvų agentą Microsoft 365 Copilot ir Microsoft Teams](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    Ši laboratorija aprašys veiksmus, kaip pridėti Užklausą kaip įrankį. Tolimesnės pamokos gilinsis į žinių šaltinių pridėjimą ir kitų galimų įrankių pridėjimą. Paprastai mokymuisi 😊

### 👩🏻‍💼 Suprasti Verslas-Darbuotojui (B2E)

Verslas-Darbuotojui (B2E) reiškia sąveikas ir paslaugas, kurias verslas teikia tiesiogiai savo darbuotojams. Agentų kontekste tai reiškia Copilot Studio pažangių galimybių naudojimą, siekiant palaikyti ir pagerinti darbuotojų darbo patirtį organizacijoje.

### ✨ Naudojimo atvejo scenarijus

**Kaip** darbuotojas

**Noriu** gauti greitą ir tikslią pagalbą iš IT pagalbos tarnybos agento dėl tokių problemų kaip įrenginių gedimai, tinklo trikčių šalinimas, spausdintuvo nustatymas

**Kad galėčiau** išlikti produktyvus ir išspręsti technines problemas be vėlavimų

Pradėkime!

### Būtinos sąlygos

- Kūrėjai turi turėti leidimus kurti ir turėti prieigą prie Copilot Studio aplinkos.

!!! note "Licencijavimo pastaba"
    Ši laboratorija aprašys veiksmus, kaip pridėti Užklausą kaip įrankį. Tolimesnės pamokos gilinsis į žinių šaltinių pridėjimą ir kitų galimų įrankių pridėjimą. Paprastai mokymuisi 😊
  
    Jums nereikia Microsoft 365 Copilot vartotojo licencijos, kad publikuotumėte savo deklaratyvų agentą, sukurtą Copilot Studio, Microsoft 365 Copilot. Tačiau **vartotojai** publikuoto _deklaratyvaus agento_ Microsoft 365 Copilot reikalauja Microsoft 365 Copilot vartotojo licencijos.

### 3.1 Sukurti deklaratyvų agentą

!!! warning "Copilot klausimai gali skirtis tarp sesijų"

    Copilot pokalbių kūrimo patirtis gali skirtis kiekvieną kartą, kai pateikiami klausimai vadovavimui gali būti šiek tiek kitokie nei anksčiau.

1. Eikite į [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/) ir prisijunkite naudodami savo prisijungimo duomenis. Įsitikinkite, kad perjungėte į aplinką, kurią naudojate šioms laboratorijoms.

1. Pasirinkite **Agentai** iš meniu ir pasirinkite **Copilot Microsoft 365**.

       ![Copilot Microsoft 365](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.lt.png)

1. Toliau mes sukursime deklaratyvų agentą, pasirinkdami **+ Pridėti** agentą.

       ![Pridėti Agentą](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.lt.png)

1. Tada pamatysime pokalbių kūrimo patirtį, kur galime bendrauti natūralia kalba su Copilot, aprašydami deklaratyvų agentą, kurį norime sukurti, ir naudodami pateiktus klausimus vadovavimui.

       Įveskime detalų aprašymą, kuris apima šiuos dalykus,  
       - agento užduotį  
       - kokius klausimus jis gali spręsti  
       - jo atsakymų formatą  
       - agento tikslą  
    
       ```text
       Jūs esate aukštos kvalifikacijos ir patyręs IT specialistas, specializuojantis įvairiose kompiuterinėse sistemose, tinklų srityje ir kibernetinio saugumo srityje. Jūs galite diagnozuoti ir spręsti technines problemas, aiškiai ir suprantamai paaiškinti sprendimus vartotojams, turintiems įvairius techninius įgūdžius, ir pateikti rekomendacijas dėl geriausios praktikos. Jūs turėtumėte būti glaustas ir informatyvus, naudodamas žingsnis po žingsnio instrukcijas su sąrašais, kai tai tinkama. Jūsų tikslas yra padėti vartotojui suprasti problemą ir kaip ją efektyviai išspręsti.
       ```
    
       ![Sukurti Užklausą](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.lt.png)

1. Pateikus užklausą, pastebimas atnaujinimas pasirodys dešinėje pusėje su agento detalėmis ir instrukcijomis, kaip apibrėžta užklausoje. Toliau jūsų bus paprašyta patvirtinti agento pavadinimą, o Copilot pasiūlys pavadinimą.

       Įveskite `taip`, kad priimtumėte siūlomą pavadinimą, arba įveskite kitą pavadinimą, pvz., šį,
    
       ```text
       Contoso Tech Support Pro
       ```
    
       ![Instrukcijos atnaujintos](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.lt.png)

    !!! warning "Primename: Copilot klausimai gali skirtis tarp sesijų"

        Copilot pokalbių kūrimo patirtis gali skirtis kiekvieną kartą, kai pateikiami klausimai vadovavimui gali būti šiek tiek kitokie nei anksčiau.

1. Agentas dabar turi atnaujintą pavadinimą, kaip matyti dešinėje pusėje. Dabar mūsų prašoma patikslinti agento instrukcijas. Copilot pasiūlymai skamba puikiai, todėl paprašysime naudoti jo pasiūlymus. Įveskime šiuos,

      ```text
      Focus on the IT issues and scenarios you've identified
      ```

      ![Pavadinimas atnaujintas](../../../../../translated_images/3.1_06_NameUpdated.b6b8cc7c670b77c635d6b54b723e1a83f63ec288c0eab260fdbf88c7ec163003.lt.png)

1. Toliau mūsų bus klausiama, ar norime pridėti viešai prieinamus tinklalapius ar žinias. Atsakysime `Ne`, nes šioje laboratorijoje pridėsime tik užklausą savo deklaratyviam agentui. Vėlesnės laboratorijos ateities pamokose apims žinių šaltinius.

      ![Nepridėti tinklalapių ar žinių šaltinių](../../../../../translated_images/3.1_07_KnowledgeSources.2001faa25aab922f38da82a8602e68b3ad7153941e87bab0949177e0b2ab0c08.lt.png)

1. Tada gausime atsakymą iš Copilot, kad dabar baigėme konfigūruoti savo agentą naudojant Copilot pokalbių kūrimo patirtį. Tačiau patikslinkime jį dar labiau, nurodydami, kad jis turėtų būti glaustas ir informatyvus su sąrašais, naudoti empatiją komunikacijoje ir prašyti atsiliepimų po sprendimų pateikimo.

    ```text
    Concise and Informative:
    - Bullet Points: Use bullet points for clarity and to break down information into digestible parts.
    - Summarize: Provide a brief summary of the solution at the end of the explanation.
   
    User-Friendly Communication:
    - Empathy: Show empathy and understanding of the user's frustration or confusion.
    - Encouragement: Encourage users by acknowledging their efforts and progress.
   
    Interactive and Engaging:
    - Ask for Feedback: After providing a solution, ask if the user needs further assistance or if the solution worked.
    ```

      ![Atnaujinti agento instrukcijas](../../../../../translated_images/3.1_08_FurtherRefinements.993926c4e55cc5133413f4e10a61a6ed43351d070e791db0ee5547ea83f46473.lt.png)

1. Copilot patvirtina, kad instrukcijos buvo atnaujintos. Spustelėkite **Sukurti**, kad sukurtumėte deklaratyvų agentą Microsoft 365 Copilot.

      ![Sukurti agent
![Agent details](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.lt.png)

Slinkite žemyn lange ir pamatysite galimybes pridėti žinių, įjungti interneto paiešką (per Bing), pradinių užklausų ir deklaratyvaus agento publikavimo detales Microsoft 365 Copilot. Pradinės užklausos taip pat bus rodomos testavimo lange dešinėje pusėje. Vartotojai gali pasirinkti šias pradines užklausas, kad pradėtų sąveiką su agentu.

![Suggested prompts](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.lt.png)

1. Agentų detalių skiltyje taip pat galite pakeisti agento piktogramą. Pasirinkite **Edit**.

![Edit details](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.lt.png)

Čia galite pakeisti piktogramą ir fono spalvą. Pasirinkite **Save**, o tada dar kartą **Save**, kad atnaujintumėte agento detales.

![Change icon](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.lt.png)

1. Atlikime greitą testą su sukurtu agentu. Pasirinkite vieną iš **Starter Prompts** testavimo lange dešinėje pusėje.

![Test starter prompt](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.lt.png)

1. Mūsų agentas atsakys. Pastebėkite, kaip jis laikosi instrukcijų, pateikdamas punktus lengvai suprantamomis dalimis ir naudodamas empatiją atsakyme.

Jei slinksite žemyn žinutėje, pastebėsite, kad jis taip pat prašo atsiliepimų po sprendimo pateikimo, kaip buvo nurodyta.

![Response from testing](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.lt.png)

Per kelias minutes pridėjote deklaratyvų agentą Microsoft 365 Copilot Copilot Studio 🙌🏻

Toliau išmoksime, kaip pridėti įrankį mūsų agentui, sukursime užklausą.

### 3.2 Sukurkite ir pridėkite užklausą savo deklaratyviam agentui

1. Slinkite žemyn iki **Tools** skilties ir pasirinkite **+ Add tool**

![Add tool](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.lt.png)

1. Atsiras įrankių langas, kuriame bus rodomas Power Platform jungčių sąrašas. Norėdami pridėti užklausą, pasirinkite **+ New tool**.

![New tool](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.lt.png)

1. Bus rodomas kitų įrankių sąrašas - Prompt, Custom connector, REST API ir Model Context Protocol. Jei jūsų organizacija atitinka [kompiuterio naudojimo reikalavimus](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez), tai taip pat bus rodomas sąraše. Pasirinkite **Prompt**.

![Select prompt](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.lt.png)

1. Įveskite užklausos pavadinimą. Pavadinkime mūsų užklausą `IT Expert`.

![Enter name](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.lt.png)

1. Pasirinkite **chevron icon** šalia **Model**, kad pamatytumėte skirtingus pokalbių modelius, kuriuos galite pasirinkti. Pagal numatymą pasirinktas **Basic GPT-4.1 mini** modelis, taip pat turite galimybę naudoti savo modelį per Azure AI Foundry Models. Pasirinksime numatytąjį modelį.

![Change model](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.lt.png)

1. Toliau pateiksime savo užklausai instrukcijas. Yra 3 metodai, kuriuos galite pasirinkti:

- Naudoti Copilot, kad sugeneruotų instrukcijas pagal jūsų aprašymą, ką norite, kad užklausa atliktų.
- Naudoti iš anksto nustatytą šabloną iš užklausų bibliotekos, kad sukurtumėte užklausą.
- Rankiniu būdu įvesti savo instrukcijas.

1. Pirmiausia pabandykime naudoti Copilot, kad sugeneruotų instrukcijas pagal įvestą aprašymą. Įveskite šį tekstą į Copilot lauką ir pateikite.

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

![Get started with Copilot](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.lt.png)

1. Copilot pradės generuoti užklausą.

![Copilot drafts prompts](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.lt.png)

1. Copilot sugeneruotos instrukcijos pasirodys.

![Copilot generated draft instructions](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.lt.png)

1. Slinkite žemyn instrukcijose ir pamatysite vartotojo įvesties parametrą, jau apibrėžtą Copilot. Tada turite galimybę:
- Išlaikyti sugeneruotas instrukcijas.
- Atnaujinti instrukcijas naudojant Copilot.
- Išvalyti instrukcijas.

Išvalykite instrukcijas pasirinkdami **trash bin** ikoną, o tada pabandysime užklausų biblioteką.

![Prompt instructions](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.lt.png)

1. Pasirinkite **prompt template** nuorodą.

![Select prompt template](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.lt.png)

1. Pamatysite užklausų šablonų sąrašą, iš kurio galite pasirinkti. Jie yra iš [Power Platform Prompt library](https://aka.ms/power-prompts).

![Prompt library](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.lt.png)

1. Ieškokite `IT expert` užklausos ir pasirinkite ją.

![Select IT expert prompt](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.lt.png)

1. Užklausa bus pridėta kaip instrukcijos su įvesties parametru, apibrėžtu užklausos šablone. Panašiai kaip ir tada, kai pateikėme instrukcijas savo agentui per pokalbių kūrimo patirtį su Copilot, šis užklausos šablonas apibrėžia:
- užduotį,
- kokio tipo klausimus ji gali spręsti,
- atsakymo formatą ir užklausos tikslą.

![Prompt instructions](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.lt.png)

1. Išvalykite instrukcijas ir pabandysime rankiniu būdu įvesti instrukcijas. Naudosime [IT Expert prompt](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/) iš [Power Platform Prompt library](https://aka.ms/power-prompts). Nukopijuokite ir įklijuokite užklausą.

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

![Prompt instructions](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.lt.png)

1. Toliau galime apibrėžti vartotojo įvesties parametrus mūsų užklausai. Tai gali būti tekstas ir vaizdai, taip pat pavyzdiniai duomenys testavimui. Taip pat yra galimybė susieti užklausą su žiniomis iš Dataverse lentelių. Šiam pratimu turime apibrėžti tik vieną vartotojo įvestį, kuri yra problemos įvestis. Šiuo metu tai yra vietos rezervacija mūsų užklausoje kaip `[Problem]`. Dabar konfigūruosime šią įvestį, įvesdami `/` simbolį arba pasirinkdami **+Add content**, o tada **Text**.

![Text input](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.lt.png)

1. Dabar galime įvesti pavadinimą mūsų įvesties parametrui ir pavyzdinius duomenis.

Įveskite šį pavadinimą:

    ```text
    problem input
    ```

Įveskite šiuos pavyzdinius duomenis:

    ```text
    My laptop gets an error with a blue screen
    ```

Tada pasirinkite **Close**.

![Configure problem input](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.lt.png)

1. Problemos įvesties parametras bus pridėtas prie instrukcijų su konfigūruotais pavyzdiniais duomenimis. Dabar galime testuoti mūsų užklausą!

![Problem input added](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.lt.png)

1. Pasirinkite **Test**, kad testuotumėte užklausą.

![Test instructions](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.lt.png)

1. Atsakymas bus rodomas. Pastebėkite, kaip atsakymas pateikia antraštes su punktų sąrašais pagal instrukcijas. Slinkite žemyn ir peržiūrėkite likusį modelio atsakymą.

![Model response](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.lt.png)

1. Prieš išsaugodami užklausą, sužinokime apie nustatymus, kuriuos galima konfigūruoti šiai užklausai. Pasirinkite **ellipsis (...) icon**.

![Prompt settings](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.lt.png)

1. Čia matysime tris nustatymus, kuriuos galima konfigūruoti:

- **Temperature**: Mažesnės temperatūros lemia nuspėjamus rezultatus, o didesnės temperatūros leidžia įvairesnius ar kūrybiškesnius atsakymus.
- **Record retrieval**: Nurodykite įrašų skaičių, gautą iš jūsų žinių šaltinių.
- **Include links in the response**: Kai pasirinkta, atsakyme pateikiamos nuorodos į gautus įrašus.

Pasirinkite **X** ikoną, kad išeitumėte iš nustatymų.

![Configure settings](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.lt.png)

1. Pasirinkite **Save**, kad išsaugotumėte užklausą.

![Save prompt](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.lt.png)

1. Toliau pasirinkite **Add to agent**, kad pridėtumėte užklausą prie mūsų deklaratyvaus agento.

![Prompt instructions](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.lt.png)

1. Užklausa dabar bus rodoma skiltyje Tools 🙌🏻

![Prompt added](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.lt.png)

Toliau atnaujinsime instrukcijas, kad iškviestume užklausą ir testuotume mūsų deklaratyvų agentą.

### 3.3 Atnaujinkite instrukcijas ir testuokite savo deklaratyvų agentą

1. Slinkite aukštyn iki **Details** skilties ir pasirinkite **Edit**. Tai leis redaguoti laukus.

![Select Edit](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.lt.png)

1. Dabar galime atnaujinti instrukcijas, kad iškviestume mūsų užklausą, nurodydami užklausos pavadinimą. Išvalykite instrukcijas, tada nukopijuokite ir įklijuokite šį tekstą.

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

Pastebėkite, kaip paskutinis sakinys nurodo agentui naudoti vartotojo užduotą klausimą kaip problemos įvesties parametro vertę. Agentas naudos klausimą kaip problemos įvestį užklausai. Toliau pasirinkite **Save**.

![Update instructions to invoke prompt](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.lt.png)

1. Dabar esame pasiruošę testuoti atnaujintas mūsų deklaratyvaus agento instrukcijas. Pasirinkite **refresh icon** testavimo lange.

![Select refresh icon](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.lt.png)

1. Toliau įveskite šią užklausą ir pateikite.

```text
Ar galite man padėti, mano nešiojamas kompiuteris rodo mėlyną ekraną
```

![Perform test](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.lt.png)

1. Agentas iškviečia užklausą ir atsako.

![Prompt instructions](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.lt.png)

Dabar paskelbkime mūsų deklaratyvų agentą 😃

### 3.4 Paskelbkite savo deklaratyvų agentą Microsoft 365 Copilot ir Microsoft Teams

1. Pasirinkite **Publish**.

![Publish agent](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.lt.png)

1. Atsiras langas, kuriame bus rodomi kanalai ir publikavimo detalės, kurias galima atnaujinti.

- Kanalai: Agentas bus paskelbtas Microsoft 365 Copilot ir Microsoft Teams.
- Agent app information: Tai bus rodoma, kai vartotojas pridės agentą prie Microsoft 365 Copilot arba Microsoft Teams. Tai yra laukai, kuriuos galima atnaujinti pagal poreikį.

![Agent app details](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.lt.png)

1. Pavyzdžiui, galite atnaujinti **Short description**, **Long description**, **Developer name** savo vardu.

!!! tip
Jei nematote visų laukų savo naršyklėje, pabandykite sumažinti mastelį, pvz., iki 75%.

Pasirinkite **Publish**. Copilot Studio pradės agento publikavimą.

![Publishing agent](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.lt.png)

1. Kai publikavimas bus baigtas, pamatysime [Availability options](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez) agentui.

| Availability option | Aprašymas |
| ---------- | ---------- |
| Share Link | Nukopijuokite nuorodą, kad ją galėtumėte dalintis su vartotojais, kurie galės atidaryti agentą Microsoft 365 Copilot |
| Show to my teammates and shared users | Leidžia suteikti prieigą kitiems dalyvauti agento kūrime arba saugumo grupėms suteikti prieigą naudoti agentą Microsoft 365 Chat arba Microsoft Teams. |
| Show to everyone in my org | Pateikite tenant admin, kad pridėtų į organizacijos katalogą visiems tenant vartotojams, kad jie galėtų pridėti agentą. Agentas bus rodomas skiltyje Built by your org Microsoft 365 Copilot ir Microsoft Teams |
| Download as a .zip | Atsisiųskite kaip zip failą, kad galėtumėte įkelti kaip pritaikytą programą Microsoft Teams |

![Availability options](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.lt.png)

1. Pažvelkime į agento dalinimąsi. Pasirinkite **Show to my teammates and shared users**. Atsiras langas, kuriame galite ieškoti vartotojų, su kuriais norite dalintis agentu, įvesdami jų vardą, el. paštą arba saugumo grupę. Šį sąrašą galite peržiūrėti bet kada, kad redaguotumėte, kas turi prieigą prie agento.

Taip pat yra du žymimieji langeliai:
- _Send an email invitation to new users_ - nauji vartotojai gaus kvietimą el. paštu.
- _Visible Built with Power Platform_ - agentas tampa prieinamas skiltyje Built with Power Platform Teams programų parduotuvėje.
Daugiau informacijos rasite [Prisijungimas ir agento konfigūravimas Teams ir Microsoft 365](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez).

Pasirinkite **Atšaukti** arba **X** ikoną, kad išeitumėte iš lango.

![Dalintis agentu](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.lt.png)

1. Pasirinkite **Kopijuoti** ir naujame naršyklės lange įklijuokite nuorodą.

![Kopijuoti nuorodą](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.lt.png)

1. Microsoft 365 Copilot įsikraus ir pasirodys modalinis langas su agento programos detalėmis. Atkreipkite dėmesį, kaip rodomas kūrėjo vardas, trumpas aprašymas ir ilgas aprašymas. Tai yra informacija, atnaujinta ankstesniame žingsnyje.

Pasirinkite **Pridėti**.

![Pasirinkimo galimybės](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.lt.png)

1. Mūsų deklaratyvus agentas įsikraus toliau. Matysime pradinius pasiūlymus, iš kurių galima pasirinkti, kad vartotojai greitai gautų pagalbą.

Pasirinkite vieną iš pradinio pasiūlymo. Mano pradiniuose pasiūlymuose pasirinksiu **Pagalba programinės įrangos diegimui**, kuris automatiškai užpildys Copilot lauko žinutę. Pateikite klausimą Copilot.

![Pasirinkti pradinį pasiūlymą](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.lt.png)

1. Pasirinkite **Visada leisti**, kad suteiktumėte savo deklaratyviam agentui leidimą iškviesti IT Eksperto pasiūlymą.

![Pasirinkti visada leisti](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.lt.png)

1. Agentas tada iškvies mūsų **IT Eksperto** pasiūlymą, ir matysime modelio atsakymą, pateiktą kaip žinutę mūsų deklaratyviame agente.

![Atsakymas](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.lt.png)

Slinkite žemyn, kad pamatytumėte visą atsakymo informaciją.

![Atsakymas](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.lt.png)

1. Bet _kaip mes žinome_, kad deklaratyvus agentas iškvietė pasiūlymą? 👀 Na, štai patarimas!

!!! tip
Galite testuoti ir derinti agentus Microsoft 365 Copilot įjungdami [kūrėjo režimą](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez).

Įveskite šį tekstą į Copilot žinutės lauką ir pateikite.

    ```text
    -developer on
    ```

Pasirodys patvirtinimo žinutė, informuojanti, kad kūrėjo režimas dabar įjungtas.

![Kūrėjo režimas įjungtas](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.lt.png)

1. Pateikite šį klausimą, kad iškviestumėte pasiūlymą.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Įvesti klausimą](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.lt.png)

1. Vėl matysime modelio atsakymą iš mūsų **IT Eksperto** pasiūlymo, pateiktą kaip žinutę. Slinkite žemyn iki žinutės apačios, kur bus rodomas kortelė su derinimo informacija.

Išplėskite **Agent Debug Info** pasirinkdami ją.

![Agent derinimo informacija](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.lt.png)

1. Čia rasite informaciją apie agento metaduomenis, kurie buvo sukurti vykdymo metu.

![Agent derinimo informacija išplėsta](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.lt.png)

Mūsų atveju, mes sutelksime dėmesį į _Veiksmų_ sekciją.

- **Atitikę veiksmai** parodo dabartinę funkcijų būseną, rastą programos paieškos metu.
- **Pasirinkti veiksmai** parodo dabartinę funkcijų būseną, pasirinktas vykdyti pagal programos sprendimų priėmimo procesą.

![Agent derinimo informacija išplėsta](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.lt.png)

Taigi čia matome, kad agento orkestratorius pasirinko iškviesti IT Eksperto pasiūlymą pagal mūsų deklaratyvaus agento instrukcijas. Tai dar labiau išdėstyta _Vykdytų veiksmų_ sekcijoje, kuri taip pat nurodo, kad pasiūlymas buvo sėkmingai iškviestas.

![Peržiūrėti agento derinimo informaciją](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.lt.png)

1. Norėdami išjungti kūrėjo režimą, įveskite šį tekstą į Copilot žinutės lauką ir pateikite.

    ```text
    -developer off
    ```

Pasirodys patvirtinimo žinutė, informuojanti, kad kūrėjo režimas yra išjungtas. Puiku, dabar žinote, kaip patikrinti, ar jūsų deklaratyvus agentas Microsoft 365 Copilot iškvietė jūsų pasiūlymą 🌞

![Kūrėjo režimas išjungtas](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.lt.png)

1. Dabar išbandysime savo agentą Microsoft Teams. Naršykite į **Programos** naudodami kairės pusės meniu ir pasirinkite **Teams** skiltyje _Programos_.

![Pasirinkti Teams programose](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.lt.png)

1. Microsoft Teams įsikraus naujame naršyklės lange, ir tada bus pateiktos Microsoft 365 Copilot naudojimo sąlygos, pasirinkite **Sutinku**.

![Pasirinkti Sutinku](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.lt.png)

1. Microsoft 365 Copilot įsikraus pagal numatytąją parinktį, dešinėje pusėje bus rodomi visi jūsų turimi agentai, įskaitant **Contoso Tech Support Pro** deklaratyvų agentą.

![Microsoft 365 Copilot Teams](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.lt.png)

1. Pasirinkite **trijų taškų ikoną (...)** kairės pusės meniu. Galite ieškoti **Contoso Tech Support Pro** paieškos lauke arba, jei matote agentą, pasirinkite jį.

Taip pat galite dešiniuoju pelės klavišu **Prisegti** agentą, kad greitai pasiektumėte jį kairės pusės meniu Microsoft Teams.

![Pasirinkti ir prisegti agentą](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.lt.png)

1. Tada pamatysime, kaip įsikrauna mūsų agentas. 1. Dabar išbandykime mūsų agentą. Įveskite šį pasiūlymą ir pateikite.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Prisegti agentą](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.lt.png)

1. Tada bus rodomas modelio atsakymas iš mūsų pasiūlymo.

![Atsakymas Teams](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.lt.png)

Per kelias minutes išmokote, kaip publikuoti savo deklaratyvų agentą ir išbandyti jį Microsoft 365 Copilot ir Microsoft Teams 😊

## ✅ Misija įvykdyta

Sveikiname! 👏🏻 Jūs sukūrėte deklaratyvų agentą Copilot Studio, pridėjote pasiūlymą, nurodėte agentui naudoti pasiūlymą ir išmokote testuoti bei publikuoti savo agentą Microsoft 365 Copilot ir Microsoft Teams.

Jūsų agentas dabar aktyvus—pasiruošęs padėti, spręsti problemas ir aptarnauti vidinius vartotojus pagal poreikį.

Tai yra **Laboratorijos 03 - Sukurkite deklaratyvų agentą Microsoft Copilot Studio Microsoft 365 Copilot** pabaiga, pasirinkite žemiau esančią nuorodą, kad pereitumėte prie kitos pamokos.

⏭️ [Pereiti prie **Naujo sprendimo kūrimo** pamokos](../04-creating-a-solution/README.md)

Iki kito karto, būkite budrūs. Įmonių darbo ateitis priklauso nuo agentų—ir dabar jūs žinote, kaip sukurti vieną.

## 📚 Taktiniai ištekliai

🔗 [Sukurti deklaratyvų agentą Microsoft Copilot Studio Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Pridėti pasiūlymus](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Dalintis agentais su kitais vartotojais](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [Sukurti pasiūlymus savo agentui](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="Analitika" />

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama profesionali žmogaus vertimo paslauga. Mes neprisiimame atsakomybės už nesusipratimus ar neteisingus aiškinimus, atsiradusius dėl šio vertimo naudojimo.