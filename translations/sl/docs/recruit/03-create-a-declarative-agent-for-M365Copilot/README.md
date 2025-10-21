<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-20T23:45:51+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "sl"
}
-->
# 🚨 Misija 03: Uvedba deklarativnega agenta za Microsoft 365 Copilot

## 🕵️‍♂️ KODNO IME: `OPERACIJA RAZŠIRITEV COPILOT`

> **⏱️ Časovni okvir operacije:** `~60 minut`

🎥 **Oglejte si navodila**

[![Sličica videa za ustvarjanje deklarativnega agenta](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.sl.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "Oglejte si navodila na YouTubu")

## 🎯 Kratek opis misije

Dobrodošli na vaši prvi terenski nalogi, Agent Maker. Izbrani ste bili, da oblikujete, opremite in uvedete deklarativnega agenta—specializiranega operativca, ki je neposredno vgrajen v Microsoft 365 Copilot in Microsoft Teams.

Za razliko od tradicionalnih agentov delujejo deklarativni agenti z določeno nalogo (navodila), orodji (pozivi/povezovalniki) in strateškim dostopom do notranjih virov znanja (viri znanja, kot so SharePoint, Dataverse in drugi). Vaša naloga je, da tega agenta zgradite z uporabo Microsoft Copilot Studio—nadzornega centra brez programiranja, kjer oživijo veščine in namen vašega agenta.

Začnimo.

## 🔎 Cilji

V tej misiji boste spoznali:

1. Razumevanje, kaj so deklarativni agenti in kako razširijo Microsoft 365 Copilot s prilagojenimi zmožnostmi
1. Primerjava Microsoft Copilot Studio in Copilot Studio agent builder za gradnjo deklarativnih agentov
1. Ustvarjanje deklarativnega agenta z uporabo naravnega jezika prek pogovornega ustvarjalnega vmesnika
1. Dodajanje AI pozivov kot orodij za izboljšanje specializiranega znanja in sposobnosti reševanja problemov vašega agenta
1. Objavljanje in testiranje vašega deklarativnega agenta v Microsoft 365 Copilot in Microsoft Teams

## 🕵🏻‍♀️ Kaj je deklarativni agent za Microsoft 365 Copilot?

Deklarativni agenti so prilagojene različice Microsoft 365 Copilot. Microsoft 365 Copilot lahko prilagodite specifičnim poslovnim potrebam tako, da mu zagotovite navodila za podporo določenemu procesu, ga povežete z znanjem podjetja in uporabite orodja za širšo razširljivost. To organizacijam omogoča ustvarjanje personaliziranih izkušenj z večjo funkcionalnostjo za njihove uporabnike.

## 🤔 Zakaj bi uporabil Microsoft Copilot Studio za gradnjo deklarativnega agenta?

Kot ustvarjalec ste morda že raziskali [Copilot Studio agent builder](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez) v Microsoft 365 Copilot in se morda sprašujete _zakaj graditi deklarativnega agenta v Microsoft Copilot Studio?_

Microsoft Copilot Studio ponuja celovit nabor orodij in funkcij za deklarativne agente, ki presegajo omejitve Copilot Studio agent builder. Podobno kot pri Copilot Studio agent builder ne potrebujete znanja programiranja ali razvoja programske opreme za gradnjo v Microsoft Copilot Studio. Poglejmo podrobneje razlike med Copilot Studio Agent Builder in Copilot Studio za gradnjo deklarativnih agentov.

### Primerjava funkcij

Naslednja tabela prikazuje razlike pri gradnji deklarativnega agenta v Copilot Studio agent builder in Copilot Studio.

| Funkcija                   | Copilot Studio agent builder v Microsoft 365 Copilot                          | Razširitev Microsoft 365 Copilot v Copilot Studio                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **Znanje**       | Splet, SharePoint, klepeti v Microsoft Teams, e-pošta Outlook, Copilot povezovalniki     | Spletno iskanje (prek Binga), SharePoint, Dataverse, Dynamics 365, Copilot povezovalniki  |
| **Orodja**       | Razlagalnik kode, generator slik     | 1400+ Power Platform povezovalnikov, prilagojeni povezovalniki, pozivi, uporaba računalnika, REST API, Model Context Protocol   |
| **Začetni pozivi**         | Konfigurirajte pozive za hitro začetek uporabe   | Konfigurirajte pozive za hitro začetek uporabe  |
| **Kanal**           | Agent je objavljen samo v Microsoft 365 Copilot     | Agent je objavljen v Microsoft 365 Copilot in Microsoft Teams      |
| **Dovoljenja za deljenje**         | Uporabniki so samo gledalci    | Uporabniki so lahko uredniki ali gledalci   |

Na voljo je več zmožnosti za deklarativne agente, zgrajene v Microsoft Copilot Studio, o katerih bomo izvedeli več v nadaljevanju.

!!! tip
    - Če želite izvedeti več o Copilot Studio agent builder, obiščite [Copilot Developer Camp: Lab MAB1 - Build your first agent](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/)
    - Za profesionalni razvoj razširitve deklarativnega agenta onkraj Copilot Studio agent builder za Microsoft 365 Copilot obiščite [Copilot Developer Camp: Lab MAB1 - Build your first agent](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/)

### Razširitev Microsoft 365 Copilot z deklarativnimi agenti, zgrajenimi v Copilot Studio

Razširimo, kar smo se naučili iz tabele primerjav funkcij.

#### Prilagoditev

- **Podrobna navodila**: Lahko zagotovite podrobna navodila in zmožnosti za natančno določitev namena in vedenja agenta.
  - To vključuje uporabo orodij z uporabo naravnega jezika.

- **Dostop do znanja podjetja**: Omogoča dostop do znanja podjetja, ki spoštuje uporabniška dovoljenja.
  - Integracija s SharePoint
  - Integracija z Dataverse
  - Integracija z Dynamics 365
  - Povezovalniki Microsoft 365 Copilot, ki jih omogoči skrbnik vaše organizacije

   ![Prilagoditev](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.sl.png)

#### Napredne zmožnosti

- **Integracija z zunanjimi storitvami**: Omogoča izbiro med 1400+ Power Platform povezovalniki, ki se integrirajo z zunanjimi storitvami in zagotavljajo bolj kompleksne in zmogljive funkcionalnosti.
  - Primeri vključujejo [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez), [ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez), [Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez), [SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) in več
  - Alternativno lahko uporabite tudi strežnike Model Context Protocol in REST API-je neposredno v vašem deklarativnem agentu

- **AI pozivi**: Uporabite poziv za analizo in preoblikovanje besedila, dokumentov, slik in podatkov z naravnim jezikom in AI razmišljanjem.
  - Izberite model klepeta, izbirajte med Basic (Privzeto), Standard, Premium
  - Možnost uporabe lastnega modela Azure AI Foundry za podlago vašega poziva

- **Več možnosti konfiguracije uvajanja**: Izberite kanale in določite uporabniška dovoljenja.
  - Objavite v Microsoft Teams, znanem uporabniškem vmesniku za hitrejšo sprejetje
  - Dovoljenja za urejanje lahko delite, da preprečite odvisnost od enega lastnika agenta

   ![Napredne zmožnosti](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.sl.png)

Skratka, deklarativni agenti v Microsoft Copilot Studio omogočajo prilagoditev Microsoft 365 Copilot za poslovne potrebe z integracijo sistemov znanja podjetja, orodij za povezovanje z zunanjimi storitvami ali AI GPT modeli.

## 🧪 Laboratorij 03: Zgradite deklarativnega agenta v Microsoft Copilot Studio za Microsoft 365 Copilot

Nato se bomo naučili, kako zgraditi deklarativnega agenta za primer uporabe "Business-to-Employee", ki bo deloval kot **IT helpdesk agent**.

- [3.1 Ustvarite deklarativnega agenta](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 Ustvarite in dodajte poziv za vašega deklarativnega agenta](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 Posodobite navodila in preizkusite vašega deklarativnega agenta](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 Objavite vašega deklarativnega agenta v Microsoft 365 Copilot in Microsoft Teams](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    Ta laboratorij bo opisal korake za dodajanje poziva kot orodja. Naslednje lekcije bodo obravnavale dodajanje virov znanja in drugih razpoložljivih orodij. Poenostavljeno za vaše učenje 😊

### 👩🏻‍💼 Razumevanje Business-to-Employee (B2E)

Business-to-Employee (B2E) se nanaša na interakcije in storitve, ki jih podjetje zagotavlja neposredno svojim zaposlenim. V kontekstu agenta to pomeni uporabo naprednih zmožnosti Copilot Studio za podporo in izboljšanje delovne izkušnje zaposlenih v organizaciji.

### ✨ Scenarij uporabe

**Kot** zaposleni

**Želim** hitro in natančno pomoč od IT helpdesk agenta za težave, kot so težave z napravami, odpravljanje težav z omrežjem, nastavitev tiskalnika

**Da lahko** ostanem produktiven in rešujem tehnične težave brez zamud

Začnimo!

### Predpogoji

- Ustvarjalci morajo imeti dovoljenja za ustvarjanje in dostop do okolja Copilot Studio.

!!! note "Opomba o licenciranju"
    Ta laboratorij bo opisal korake za dodajanje poziva kot orodja. Naslednje lekcije bodo obravnavale dodajanje virov znanja in drugih razpoložljivih orodij. Poenostavljeno za vaše učenje 😊
  
    Za objavo vašega deklarativnega agenta, zgrajenega v Copilot Studio, v Microsoft 365 Copilot ne potrebujete uporabniške licence za Microsoft 365 Copilot. Vendar pa **uporabniki** _objavljenega deklarativnega agenta_ v Microsoft 365 Copilot potrebujejo uporabniško licenco za Microsoft 365 Copilot.

### 3.1 Ustvarite deklarativnega agenta

!!! warning "Vprašanja Copilot se lahko razlikujejo med sejami"

    Izkušnja pogovornega ustvarjanja v Copilot se lahko razlikuje vsakič, kjer se lahko ponujena vprašanja za usmerjanje nekoliko razlikujejo od prejšnjih.

1. Obiščite [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/) in se prijavite s svojimi poverilnicami. Prepričajte se, da ste preklopili na okolje, ki ga uporabljate za te laboratorije.

1. Izberite **Agents** iz menija in nato izberite **Copilot for Microsoft 365**.

       ![Copilot for Microsoft 365](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.sl.png)

1. Nato bomo ustvarili deklarativnega agenta z izbiro **+ Add** agent.

       ![Dodaj agenta](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.sl.png)

1. Nato se bo naložila izkušnja pogovornega ustvarjanja, kjer se lahko z naravnim jezikom pogovarjamo s Copilot in opišemo deklarativnega agenta, ki ga želimo zgraditi, ter uporabimo ponujena vprašanja za usmerjanje.

       Vnesimo podroben opis, ki vključuje naslednje,  
       - nalogo agenta  
       - kakšne vrste poizvedb lahko obravnava  
       - obliko njegovega odgovora  
       - cilj agenta  
    
       ```text
       Vi ste visoko usposobljen in izkušen IT strokovnjak, specializiran za širok spekter računalniških sistemov, omrežij in kibernetske varnosti. Sposobni ste diagnosticirati in rešiti tehnične težave, jasno in razumljivo razložiti rešitve za uporabnike vseh tehničnih ravni ter nuditi smernice o najboljših praksah. Bodite jedrnati in informativni, uporabljajte navodila po korakih z alinejami, kadar je to primerno. Vaš cilj je pomagati uporabniku razumeti težavo in jo učinkovito rešiti.
       ```
    
       ![Ustvari poziv](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.sl.png)

1. Po oddaji poziva se bo na desni strani pojavila opazna posodobitev s podrobnostmi in navodili agenta, kot so bila opredeljena v pozivu. Nato boste pozvani, da potrdite ime svojega agenta, pri čemer bo Copilot predlagal ime.

       Vnesite `da`, da sprejmete predlagano ime, ali vnesite drugo ime, na primer naslednje,
    
       ```text
       Contoso Tech Support Pro
       ```
    
       ![Navodila posodobljena](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.sl.png)

    !!! warning "Opomnik: Vprašanja Copilot se lahko razlikujejo med sejami"

        Izkušnja pogovornega ustvarjanja v Copilot se lahko razlikuje vsakič, kjer se lahko ponujena vprašanja za usmerjanje nekoliko razlikujejo od prejšnjih.

1. Ime agenta je zdaj posodobljeno, kot je vidno na desni strani. Zdaj smo pozvani, da izpopolnimo navodila za agenta. Predlogi Copilot se zdijo odlični, zato ga bomo prosili, naj uporabi svoje predloge. Vnesli bomo naslednje:

      ```text
      Focus on the IT issues and scenarios you've identified
      ```

      ![Ime posodobljeno](../../../../../translated_images/3.1_06_NameUpdated.b6b8cc7c670b77c635d6b54b723e1a83f63ec288c0eab260fdbf88c7ec163003.sl.png)

1. Nato bomo vprašani, ali želimo dodati kakršne koli javno dostopne spletne strani ali vire znanja. Odgovorili bomo z `Ne`, saj bomo v tem laboratoriju za našega deklarativnega agenta dodali le poziv. Naslednji laboratoriji v prihodnjih lekcijah bodo obravnavali vire znanja.

      ![Brez dodanih spletnih strani ali virov znanja](../../../../../translated_images/3.1_07_KnowledgeSources.2001faa25aab922f38da82a8602e68b3ad7153941e87bab0949177e0b2ab0c08.sl.png)

1. Nato bomo prejeli odgovor od Copilot, da smo zdaj končali s konfiguracijo našega agenta z uporabo izkušnje pogovornega ustvarjanja v Copilot. Vendar pa ga še nekoliko izpopolnimo, tako da določimo, da mora biti jedrnat in informativen z alinejami, uporabljati empatijo v komunikaciji in po zagotovitvi rešitev prositi za povratne informacije.

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

      ![Posodobi navodila agenta](../../../../../translated_images/3.1_08_FurtherRefinements.993926c4e55cc5133413f4e10a61a6ed43351d070e791db0ee5547ea83f46473.sl.png)

1. Copilot potrdi, da so bila navodila posodobljena. Kliknite **Create**, da ustvarite deklarativnega agenta za Microsoft 365 Copilot.

      ![Ustvari agenta](../../../../../translated_images/3.1_09_CreateDeclarativeAgent.71442cd4e18105359e55016d92e54b74ac18977bb535c637a05bac0d3680a3c5.sl.png)

    !!! warning "Opomnik: Vprašanja Copilot se lahko razlikujejo med sejami"

        Izkušnja pogovornega ustvarjanja v Copilot se lahko razlikuje vsakič, kjer se lahko ponujena vprašanja za usmerjanje nekoliko razlikujejo od prejšnjih.

1. Ko je agent ustvarjen, boste videli podrobnosti agenta, ki vsebujejo opis in navodila, določena med izkušnjo pogovornega ustvarjanja v Copilot.
![Podrobnosti agenta](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.sl.png)

Pomaknite se navzdol po podoknu in videli boste tudi možnosti za dodajanje znanja, omogočanje spletnega iskanja (prek Binga), začetne pozive in podrobnosti o objavi deklarativnega agenta za Microsoft 365 Copilot. Začetni pozivi bodo prikazani tudi v testnem podoknu na desni strani. Uporabniki lahko izberejo te začetne pozive za začetek interakcije z agentom.

![Predlagani pozivi](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.sl.png)

1. V razdelku Podrobnosti agenta imate tudi možnost spremeniti ikono agenta. Izberite **Uredi**.

![Uredi podrobnosti](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.sl.png)

Tukaj lahko spremenite ikono in barvo ozadja. Izberite **Shrani** in nato ponovno izberite **Shrani**, da posodobite podrobnosti agenta.

![Spremeni ikono](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.sl.png)

1. Opravimo hitro testiranje agenta, ki smo ga ustvarili. V testnem podoknu na desni strani izberite enega od **Začetnih pozivov**.

![Testiraj začetni poziv](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.sl.png)

1. Naš agent bo nato odgovoril. Opazite, kako je upošteval navodila z razdelitvijo informacij v točke in uporabil empatijo v svojem odgovoru.

Če se pomaknete na dno sporočila, opazite, kako je po zagotovitvi rešitve, kot je bilo zahtevano, prosil za povratne informacije.

![Odgovor iz testiranja](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.sl.png)

V nekaj minutah ste dodali deklarativnega agenta za Microsoft 365 Copilot v Copilot Studio 🙌🏻

Naslednji korak je, da se naučimo, kako dodati orodje našemu agentu, in ustvarimo poziv.

### 3.2 Ustvarite in dodajte poziv za svojega deklarativnega agenta

1. Pomaknite se navzdol do razdelka **Orodja** in izberite **+ Dodaj orodje**.

![Dodaj orodje](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.sl.png)

1. Pojavi se modalno okno Orodja in prikaže se seznam konektorjev Power Platform. Če želite dodati poziv, izberite **+ Novo orodje**.

![Novo orodje](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.sl.png)

1. Prikaže se seznam drugih orodij - Poziv, Prilagojen konektor, REST API in Model Context Protocol. Če vaša organizacija izpolnjuje [zahteve za uporabo računalnika](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez), se bo to prav tako pojavilo na seznamu. Izberite **Poziv**.

![Izberite poziv](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.sl.png)

1. Vnesite ime za poziv. Poimenujmo naš poziv `IT strokovnjak`.

![Vnesite ime](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.sl.png)

1. Izberite **ikono puščice** poleg **Model**, da si ogledate različne modele klepeta, med katerimi lahko izbirate. Privzeto je izbran model **Osnovni GPT-4.1 mini**, prav tako pa imate možnost uporabe lastnega modela prek Azure AI Foundry Models. Ostali bomo pri izbranem privzetem modelu.

![Spremeni model](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.sl.png)

1. Nato bomo našemu pozivu dodali navodila. Na voljo so 3 metode, med katerimi lahko izbirate:

   - Uporabite Copilot za generiranje navodil na podlagi vašega opisa, kaj želite, da poziv naredi.
   - Uporabite predlogo iz knjižnice pozivov za ustvarjanje poziva.
   - Ročno vnesite svoja navodila.

1. Najprej poskusimo uporabiti Copilot za generiranje navodil na podlagi vnesenega opisa. Vnesite naslednje v polje Copilot in pošljite.

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

![Začnite s Copilotom](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.sl.png)

1. Copilot bo nato začel generirati poziv za nas.

![Copilot ustvarja osnutke pozivov](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.sl.png)

1. Nato se bodo prikazala osnutna navodila, ki jih je ustvaril Copilot.

![Osnutna navodila, ki jih je ustvaril Copilot](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.sl.png)

1. Pomaknite se na dno navodil in videli boste parameter uporabniškega vnosa, ki ga je že definiral Copilot. Nato imate možnost:
   - Obdržati ustvarjena osnutna navodila.
   - Osvežiti osnutna navodila z uporabo Copilota.
   - Počistiti osnutna navodila.

   Počistite osnutna navodila z izbiro ikone **koša za smeti**, nato pa bomo poskusili knjižnico pozivov.

![Navodila za poziv](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.sl.png)

1. Izberite povezavo **predloga poziva**.

![Izberite predlogo poziva](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.sl.png)

1. Prikazan bo seznam predlog pozivov, med katerimi lahko izbirate. Te so iz [Knjižnice pozivov Power Platform](https://aka.ms/power-prompts).

![Knjižnica pozivov](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.sl.png)

1. Poiščite poziv `IT strokovnjak` in ga izberite.

![Izberite poziv IT strokovnjak](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.sl.png)

1. Poziv bo nato dodan kot navodila s parametrom vnosa, kot je opredeljeno v predlogi poziva. Podobno kot pri pristopu, ki smo ga uporabili pri zagotavljanju navodil za našega agenta med izkušnjo ustvarjanja pogovora s Copilotom, ta predloga poziva opredeljuje:
   - nalogo,
   - kakšne vrste vprašanj lahko obravnava,
   - in obliko njegovega odgovora ter cilj poziva.

![Navodila za poziv](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.sl.png)

1. Počistite navodila in nato poskusimo ročno vnesti navodila. Uporabili bomo [poziv IT strokovnjak](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/) iz [Knjižnice pozivov Power Platform](https://aka.ms/power-prompts). Kopirajte in prilepite poziv.

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

![Navodila za poziv](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.sl.png)

1. Nato lahko definiramo parametre uporabniškega vnosa za naš poziv. Ti so lahko besedilo in slike ter vzorčni podatki za testiranje. Prav tako obstaja možnost, da poziv povežemo z znanjem iz tabel Dataverse. Za to vajo imamo samo en uporabniški vnos za definiranje, in sicer vnos težave. Trenutno je to nadomestno mesto v našem pozivu kot `[Problem]`. Zdaj bomo konfigurirali ta vnos bodisi z vnosom znaka `/` bodisi z izbiro **+Dodaj vsebino** in nato izberite **Besedilo**.

![Vnos besedila](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.sl.png)

1. Zdaj lahko vnesemo ime za naš parameter vnosa in vzorčne podatke.

   Vnesite naslednje kot ime:

    ```text
    problem input
    ```

   Vnesite naslednje kot vzorčne podatke:

    ```text
    My laptop gets an error with a blue screen
    ```

   Nato izberite **Zapri**.

![Konfigurirajte vnos težave](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.sl.png)

1. Parameter vnosa težave bo zdaj dodan navodilom z konfiguriranimi vzorčnimi podatki. Zdaj lahko testiramo naš poziv!

![Dodan vnos težave](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.sl.png)

1. Izberite **Testiraj**, da preizkusite poziv.

![Testiraj navodila](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.sl.png)

1. Nato se prikaže odgovor. Opazite, kako odgovor vključuje naslove s točkami v skladu z navodili. Pomaknite se navzdol in preglejte preostanek odgovora modela.

![Odgovor modela](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.sl.png)

1. Preden shranimo naš poziv, se naučimo o nastavitvah, ki jih je mogoče konfigurirati za ta poziv. Izberite ikono **tri pike (...)**.

![Nastavitve poziva](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.sl.png)

1. Tukaj bomo videli tri nastavitve, ki jih je mogoče konfigurirati.

   - **Temperatura**: Nižje temperature vodijo do predvidljivih rezultatov, medtem ko višje temperature omogočajo bolj raznolike ali ustvarjalne odgovore.
   - **Pridobivanje zapisov**: Določite število zapisov, pridobljenih za vaše vire znanja.
   - **Vključite povezave v odgovor**: Ko je izbrano, odgovor vključuje povezave do pridobljenih zapisov.

   Izberite ikono **X**, da zaprete Nastavitve.

![Konfigurirajte nastavitve](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.sl.png)

1. Izberite **Shrani**, da shranite poziv.

![Shrani poziv](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.sl.png)

1. Nato izberite **Dodaj agentu**, da dodate poziv našemu deklarativnemu agentu.

![Navodila za poziv](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.sl.png)

1. Poziv se bo zdaj pojavil pod Orodji 🙌🏻

![Dodano orodje](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.sl.png)

Nato bomo posodobili naša navodila za aktiviranje poziva in testirali našega deklarativnega agenta.

### 3.3 Posodobite navodila in testirajte svojega deklarativnega agenta

1. Pomaknite se navzgor do razdelka **Podrobnosti** in izberite **Uredi**. To bo omogočilo urejanje polj.

![Izberite Uredi](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.sl.png)

1. Zdaj lahko posodobimo naša navodila za aktiviranje našega poziva z referenco na ime poziva. Počistite navodila, nato kopirajte in prilepite naslednje.

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

   Opazite, kako zadnji stavek agentu naroča, naj uporabi vprašanje, ki ga je postavil uporabnik, kot vrednost za parameter vnosa težave. Agent bo uporabil vprašanje kot vnos težave za poziv. Nato izberite **Shrani**.

![Posodobite navodila za aktiviranje poziva](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.sl.png)

1. Zdaj smo pripravljeni testirati naša posodobljena navodila našega deklarativnega agenta. V testnem podoknu izberite ikono **osveži**.

![Izberite ikono osveži](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.sl.png)

1. Nato vnesite naslednji poziv in ga pošljite.

   ```text
   Mi lahko pomagate, moj prenosnik ima modri zaslon
   ```

![Izvedite test](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.sl.png)

1. Agent aktivira poziv in odgovori.

![Navodila za poziv](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.sl.png)

Zdaj objavimo našega deklarativnega agenta 😃

### 3.4 Objavite svojega deklarativnega agenta v Microsoft 365 Copilot in Microsoft Teams

1. Izberite **Objavi**.

![Objavi agenta](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.sl.png)

1. Pojavi se modalno okno, ki prikazuje Kanale in podrobnosti objave, ki jih je mogoče posodobiti.

   - Kanali: Agent bo objavljen v Microsoft 365 Copilot in Microsoft Teams.
   - Informacije o aplikaciji agenta: To je tisto, kar bo prikazano, ko uporabnik doda agenta v Microsoft 365 Copilot ali v Microsoft Teams. To so polja, ki jih je mogoče po potrebi posodobiti.

![Podrobnosti aplikacije agenta](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.sl.png)

1. Na primer, lahko posodobite **Kratek opis**, **Dolgi opis**, **Ime razvijalca** s svojim imenom.

    !!! tip
        Če v svojem brskalniku ne vidite vseh prikazanih polj, poskusite zmanjšati povečavo, npr. na 75%.

    Izberite **Objavi**. Copilot Studio bo nato začel objavljati agenta.

![Objavljanje agenta](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.sl.png)

1. Ko je objavljanje zaključeno, bomo videli [Možnosti razpoložljivosti](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez) agenta.

   | Možnost razpoložljivosti | Opis |
   | ---------- | ---------- |
   | Deli povezavo | Kopirajte povezavo, da jo delite z uporabniki, ki bodo odprli agenta v Microsoft 365 Copilot |
   | Prikaži mojim sodelavcem in deljenim uporabnikom | Omogoča vam, da drugim omogočite sodelovanje pri ustvarjanju agenta ali varnostnim skupinam, da jim omogočite dostop do uporabe agenta v Microsoft 365 Chat ali Microsoft Teams. |
   | Prikaži vsem v moji organizaciji | Pošljite skrbniku najemnika, da ga doda v organizacijski katalog za vse uporabnike najemnika, da dodajo agenta. Agent bo prikazan pod Zgrajeno z vašo organizacijo v Microsoft 365 Copilot in v Microsoft Teams. |
   | Prenesi kot .zip | Prenesite kot zip datoteko za nalaganje kot prilagojeno aplikacijo v Microsoft Teams. |

![Možnosti razpoložljivosti](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.sl.png)

1. Poglejmo, kako deliti agenta. Izberite **Prikaži mojim sodelavcem in deljenim uporabnikom**. Pojavi se podokno, kjer lahko poiščete uporabnike, s katerimi želite deliti agenta, bodisi z vnosom njihovega imena, e-pošte ali varnostne skupine. Ta seznam lahko kadar koli pregledate, da uredite, kdo ima dostop do agenta.

   Obstajata tudi dve potrditveni polji:
   - _Pošlji povabilo po e-pošti novim uporabnikom_ - novi uporabniki bodo prejeli povabilo po e-pošti.
   - _Vidno v Zgrajeno s Power Platform_ - agent postane na voljo v razdelku Zgrajeno s Power Platform v trgovini aplikacij Teams.
Za več podrobnosti si oglejte [Povezovanje in konfiguracija agenta za Teams in Microsoft 365](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez).

Izberite **Prekliči** ali ikono **X**, da zaprete podokno.

![Deljenje agenta](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.sl.png)

1. Izberite **Kopiraj** in prilepite povezavo v novem zavihku brskalnika.

![Kopiraj povezavo](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.sl.png)

1. Microsoft 365 Copilot se bo naložil, prikazalo se bo modalno okno s podrobnostmi aplikacije agenta. Opazite, kako so prikazani ime razvijalca, kratki opis in dolgi opis. Ti podatki so bili posodobljeni v prejšnjem koraku objave.

Izberite **Dodaj**.

![Možnosti razpoložljivosti](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.sl.png)

1. Nato se bo naložil naš deklarativni agent. Vidimo lahko začetne pozive, med katerimi lahko izbiramo, kar uporabnikom hitro omogoči takojšnjo pomoč.

Izberite enega od začetnih pozivov. V mojem primeru bom izbral poziv **Pomoč pri namestitvi programske opreme**, ki bo samodejno izpolnil polje za sporočilo Copilot. Pošljite vprašanje Copilotu.

![Izberite začetni poziv](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.sl.png)

1. Izberite **Vedno dovoli**, da svojemu deklarativnemu agentu omogočite dovoljenje za uporabo poziva IT strokovnjaka.

![Izberite vedno dovoli](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.sl.png)

1. Agent bo nato uporabil naš poziv **IT strokovnjak** in videli bomo odgovor modela, ki se bo prikazal kot sporočilo v našem deklarativnem agentu.

![Odgovor](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.sl.png)

Pomaknite se navzdol, da si ogledate celotne podrobnosti odgovora.

![Odgovor](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.sl.png)

1. Ampak _kako vemo_, da je deklarativni agent uporabil poziv? 👀 Tukaj je namig!

!!! tip
    Agente v Microsoft 365 Copilot lahko testirate in odpravljate napake tako, da omogočite [način razvijalca](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez).

Vnesite naslednje v polje za sporočilo Copilot in pošljite.

    ```text
    -developer on
    ```

Prikazalo se bo potrditveno sporočilo, ki vas bo obvestilo, da je način razvijalca zdaj omogočen.

![Način razvijalca omogočen](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.sl.png)

1. Pošljite naslednje vprašanje, da uporabite poziv.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Vnesite vprašanje](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.sl.png)

1. Spet bomo videli odgovor modela iz našega poziva **IT strokovnjak**, ki se bo prikazal kot sporočilo. Pomaknite se na dno sporočila, kjer bo prikazana kartica z informacijami o odpravljanju napak.

Razširite **Informacije o odpravljanju napak agenta** s klikom nanje.

![Informacije o odpravljanju napak agenta](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.sl.png)

1. Tukaj boste našli informacije o metapodatkih agenta, ki so se pojavili med izvajanjem.

![Razširjene informacije o odpravljanju napak agenta](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.sl.png)

V našem primeru se bomo osredotočili na razdelek _Dejanja_

- **Ujemajoča se dejanja** poudarjajo trenutni status funkcij, najdenih med iskanjem aplikacije.
- **Izbrana dejanja** poudarjajo trenutni status funkcij, izbranih za izvajanje na podlagi odločitvenega procesa aplikacije.

![Razširjene informacije o odpravljanju napak agenta](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.sl.png)

Tukaj lahko vidimo, da se je orkestrator agenta odločil uporabiti poziv IT strokovnjaka v skladu z navodili našega deklarativnega agenta. To je dodatno opisano v razdelku _Izvedena dejanja_, ki nam tudi pove, da je poziv uspešno izvedel.

![Pregled informacij o odpravljanju napak agenta](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.sl.png)

1. Če želite izklopiti način razvijalca, vnesite naslednje v polje za sporočilo Copilot in pošljite.

    ```text
    -developer off
    ```

Prikazalo se bo potrditveno sporočilo, ki vas bo obvestilo, da je način razvijalca onemogočen. Super, zdaj veste, kako preveriti, ali je vaš deklarativni agent v Microsoft 365 Copilot uporabil vaš poziv 🌞

![Način razvijalca onemogočen](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.sl.png)

1. Zdaj bomo testirali našega agenta v Microsoft Teams. Pomaknite se na **Aplikacije** z uporabo menija na levi strani in izberite **Teams** v razdelku _Aplikacije_.

![Izberite Teams v Aplikacijah](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.sl.png)

1. Microsoft Teams se bo nato naložil v novem zavihku brskalnika, kjer bodo prikazani pogoji uporabe za Microsoft 365 Copilot. Izberite **Strinjam se**.

![Izberite Strinjam se](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.sl.png)

1. Microsoft 365 Copilot se bo nato privzeto naložil, desno podokno pa bo prikazalo vse vaše razpoložljive agente, vključno z deklarativnim agentom **Contoso Tech Support Pro**.

![Microsoft 365 Copilot v Teams](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.sl.png)

1. Izberite **ikono s tremi pikami (...)** v meniju na levi strani. Poiščite **Contoso Tech Support Pro** v iskalnem polju ali, če vidite agenta, ga izberite.

Lahko tudi kliknete z desno tipko miške, da **Pripnete** agenta za hiter dostop v meniju na levi strani v Microsoft Teams.

![Izberite in pripnite agenta](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.sl.png)

1. Nato se bo naložil naš agent. 1. Zdaj testirajmo našega agenta. Vnesite naslednji poziv in pošljite.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Pripnite agenta](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.sl.png)

1. Prikazal se bo odgovor modela iz našega poziva.

![Odgovor v Teams](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.sl.png)

V nekaj minutah ste se naučili, kako objaviti svoj deklarativni agent in ga testirati v Microsoft 365 Copilot ter v Microsoft Teams 😊

## ✅ Misija zaključena

Čestitke! 👏🏻 Ustvarili ste deklarativnega agenta v Copilot Studiu, kjer ste dodali poziv, agenta usmerili k uporabi poziva ter se naučili, kako testirati in objaviti svojega agenta v Microsoft 365 Copilot in Microsoft Teams.

Vaš agent je zdaj pripravljen na akcijo—pripravljen pomagati, odpravljati težave in služiti notranjim uporabnikom na zahtevo.

To je konec **Laboratorija 03 - Ustvarjanje deklarativnega agenta v Microsoft Copilot Studiu za Microsoft 365 Copilot**, izberite spodnjo povezavo za prehod na naslednjo lekcijo.

⏭️ [Prehod na lekcijo **Ustvarjanje nove rešitve**](../04-creating-a-solution/README.md)

Do naslednjič, ostanite ostri. Prihodnost dela v podjetjih temelji na agentih—in zdaj veste, kako jih ustvariti.

## 📚 Taktični viri

🔗 [Ustvarjanje deklarativnega agenta v Microsoft Copilot Studiu za Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Dodajanje pozivov](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Deljenje agentov z drugimi uporabniki](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [Ustvarjanje pozivov za vašega agenta](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="Analitika" />

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje AI [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku naj se šteje za avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne odgovarjamo za morebitna nesporazumevanja ali napačne razlage, ki izhajajo iz uporabe tega prevoda.