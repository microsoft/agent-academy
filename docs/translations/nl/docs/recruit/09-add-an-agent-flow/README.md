<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cc4afa4a5a11c9d03896decfbcbd4060",
  "translation_date": "2025-10-17T01:24:22+00:00",
  "source_file": "docs/recruit/09-add-an-agent-flow/README.md",
  "language_code": "nl"
}
-->
# 🚨 Missie 09: Voeg een agent flow toe aan je onderwerp voor automatisering

## 🕵️‍♂️ CODENAAM: `OPERATIE AUTOMATISERING POWERHOUSE`

> **⏱️ Tijdvenster voor de operatie:** `~30 minuten`  

🎥 **Bekijk de walkthrough**

[![Agent flow video thumbnail](../../../../../translated_images/video-thumbnail.ede12df9aaebcc8996680c8b6555d309b53bdf33d1b0165cae3b5173a6bcdd73.nl.jpg)](https://www.youtube.com/watch?v=vtLZJT3eBXg "Bekijk de walkthrough op YouTube")

## 🎯 Missieoverzicht

Je agent kan nu met gebruikers communiceren en informatie verstrekken, maar echte operationele uitmuntendheid vereist dat je agent actie onderneemt. Deze missie zal je conversatie-agent transformeren in een automatiseringskrachtpatser door hem uit te rusten met agent flows.

Aan het einde van de missie heb je een end-to-end automatisering voor apparaatverzoeken gecreëerd die gebruikersinput vastlegt via een adaptieve kaart, gegevens ophaalt uit SharePoint, meldingen naar managers stuurt via e-mail en naadloze gebruikersfeedback biedt - allemaal gecoördineerd door je agent via intelligente workflow-automatisering.

## 🔎 Doelstellingen

In deze missie leer je:

1. Begrijpen wat agent flows zijn en hoe ze verschillen van Power Automate cloud flows voor automatisering.
1. De belangrijkste functies ontdekken die agent flows krachtig maken, zoals AI-acties en natuurlijke taalverwerking.
1. De agent flow designer verkennen en leren hoe je expressies gebruikt voor dynamische gegevensverwerking.
1. Een complete automatisering voor apparaatverzoeken maken die SharePoint-gegevens en e-mailmeldingen integreert.

## 🤔 Wat is een agent flow?

Agent flows zijn een krachtige manier om repetitieve taken te automatiseren en je apps en services te integreren. Zie ze als gestructureerde, stapsgewijze workflows die je agent kan uitvoeren om taken te automatiseren of verbinding te maken met andere applicaties en services. Je kunt ze beschouwen als mini-workflows die je agent helpen dingen te doen zoals meldingen verzenden, records bijwerken of reageren op gebeurtenissen.

In tegenstelling tot autonome agents die AI gebruiken om beslissingen te nemen, zijn agent flows **deterministische workflows** - wat betekent dat ze elke keer hetzelfde pad volgen, wat consistente en betrouwbare resultaten garandeert.

Kort gezegd:

- Ze helpen je agent _dingen te doen_, niet alleen _dingen te zeggen_ tegen gebruikers.
- Ze zijn herbruikbaar in verschillende onderwerpen en agents en kunnen worden geactiveerd door gebruikersberichten, gebeurtenissen of andere applicaties en services.

## 🙋🏽 Ja, maar hoe verschilt dit van Power Automate cloud flows?

Zowel agent flows als Power Automate cloud flows helpen bij het automatiseren van taken. Ze zijn ontworpen voor verschillende doeleinden en werken op verschillende manieren.

### 🤖 Agent flows in Copilot Studio

**Waarvoor ze bedoeld zijn:**

- Ontworpen voor conversatie- en autonome agents (via agentinstructies) in Copilot Studio.
- Gericht op slimme, AI-gedreven automatisering die interactie heeft met bedrijfssystemen.

**Waarom ze nuttig zijn:**

- Eenvoudig te bouwen en beheren rechtstreeks in Copilot Studio.
- Ideaal voor het automatiseren van taken die plaatsvinden _tijdens het gesprek_ met gebruikers, zoals het indienen van een verlofaanvraag.
- Je hebt geen aparte Power Automate-licentie nodig, omdat de facturering gebaseerd is op gebruik binnen Copilot Studio. Dit kan tijd en kosten besparen voor ondernemingen.

**Beperkingen:**

- Je kunt ze niet delen, kopiëren of mede-eigenaren toewijzen.
- Agent flows zijn alleen zichtbaar en bruikbaar binnen Copilot Studio.
- Momenteel kunnen gebeurtenistriggers voor agents worden bewerkt in het Power Automate maker portal.

### ☁️ Power Automate cloud flows

**Waarvoor ze bedoeld zijn:**

- Ontworpen voor algemene automatisering over veel apps en services.
- Kunnen onafhankelijk werken of samenwerken met agent flows.

**Waarom ze nuttig zijn:**

- Biedt een breed scala aan connectors.
- Ideaal voor het automatiseren van processen buiten agents.
- Kunnen worden gedeeld, hergebruikt en beheerd binnen teams.

**Vereisten:**

- Je hebt een Power Automate-licentie nodig om ze te gebruiken.

### 📗 Samenvatting

| Gebruik dit | Wanneer je wilt |
| :- | :- |
| Agent flows | Taken automatiseren binnen een agent, AI gebruiken en alles in Copilot Studio houden |  
| Power Automate cloud flows | Automatiseren over apps en services, of workflows buiten agents bouwen |

## 👍🏻 Waarom agent flows gebruiken

Agent flows volgen altijd een vast pad - ze doen elke keer hetzelfde bij dezelfde input.

Dit maakt ze:

- **Betrouwbaar** - je kunt erop vertrouwen dat ze elke keer hetzelfde gedrag vertonen.
- **Voorspelbaar** - je weet welk resultaat je kunt verwachten wanneer de flow wordt uitgevoerd.
- **Regelgebaseerd** - ze volgen stappen die je definieert.

Andere voordelen zijn:

- **Automatisering** - stelt je agent in staat om repetitieve taken uit te voeren, zoals formulieren indienen of meldingen verzenden.
- **Verbonden** - verbinding maken met meer dan 1400 connectors zoals ServiceNow, SharePoint, Salesforce. Anders kun je je eigen aangepaste connector bouwen.
- **Nauw geïntegreerd** - agent flows maken deel uit van de logica van de agent, ze worden direct geactiveerd door gebruikersberichten of acties in het gesprek.
- **Schaalbaarheid** - flows hergebruiken over meerdere agents of scenario's.
- **No-code of low-code** - je kunt flows bouwen met natuurlijke taal of een visuele ontwerper.
- **Alles-in-één-platform** - je kunt agent flows ontwerpen, testen en implementeren op één plek - Copilot Studio. Geen noodzaak om tussen platforms te schakelen.

## 🏄🏻‍♂️ Hoe verbeteren agent flows je agent?

Agent flows breiden uit wat je agent kan doen, voorbij "chatten" met gebruikers. Ze stellen hem in staat om actie te ondernemen en met systemen te communiceren.

Stel dat je werkt op een financiële afdeling en je ontvangt veel facturen van leveranciers. Normaal gesproken moet iemand elke factuur lezen, de belangrijke details eruit halen - het bedrag, de datum, van wie het afkomstig is, en controleren of alles overeenkomt met je gegevens. Vervolgens moet het naar de juiste persoon worden gestuurd voor goedkeuring. Dit kost tijd en moeite.

Met agent flows in Copilot Studio kun je dit proces automatiseren. Zodra de factuur binnenkomt, doet de agent:

1. Leest het document met intelligente documentverwerking om de belangrijkste informatie te vinden.
1. Controleert de details aan de hand van je bedrijfsgegevens om te zorgen dat alles klopt.
1. Stuurt het ter goedkeuring naar de juiste persoon/personen.

Dit bespaart tijd, vermindert fouten en maakt het hele proces veel soepeler.

### Denk er zo over

- **Agents**: de slimme besluitvormers
- **Agent flows**: de betrouwbare uitvoerders

### Waarom het belangrijk is

- Je krijgt het beste van beide werelden: betrouwbare automatisering en flexibele AI.
- Het is eenvoudig om flows te bouwen en bij te werken naarmate de behoeften van je bedrijf veranderen.
- Je kunt automatisering opschalen over teams.

## 🔌 Belangrijke functies die agent flows krachtig maken

1. **Natuurlijke taalverwerking**
    - Je kunt beschrijven wat je wilt dat de flow doet in gewone taal.
    - Copilot begrijpt je intentie en bouwt de flow voor je.
    - Geen code nodig - leg je idee uit.

1. **AI-acties**

    Gebruik AI om:

    - Documenten of afbeeldingen te lezen en te begrijpen.
    - Lange inhoud samen te vatten in korte, nuttige antwoorden.
    - Slimme aanbevelingen of beslissingen te maken.

1. **Generatieve acties**
    - Hiermee kan de flow zich in realtime aanpassen.
    - De agent kan stappen plannen en aanpassen op basis van veranderende informatie.

1. **Integratie-acties**
    - Verbind je flow met andere tools zoals Outlook, Microsoft Teams, ServiceNow, SharePoint en andere applicaties en services, via meer dan 1400 ingebouwde connectors of je eigen aangepaste connector.
    - Dit helpt je agent samen te werken met de apps die je team al gebruikt.

1. **Menselijke tussenkomst**
    - Voeg goedkeuringsstappen toe waarbij iemand iets moet beoordelen of bevestigen.
    - [Geavanceerde goedkeuringen](https://learn.microsoft.com/microsoft-copilot-studio/flows-advanced-approvals?WT.mc_id=power-172621-ebenitez) ondersteunt herinneringen, delegatie en meerfasige goedkeuringen.

## ⚙️ Hoe werken ze?

1. **Trigger**

    Een gebeurtenis start de flow - zoals een gebruiker die een vraag stelt, de flow activeert vanuit een onderwerp, een geplande tijd, of een gebeurtenis in een ander systeem.

1. **Acties**

    Dit zijn stappen die de agent vervolgens volgt - een e-mail verzenden, een API aanroepen, een ticket bijwerken in ServiceNow.

## 🧶 Hoe maak je een agent flow

1. **Natuurlijke taal**: beschrijf wat je wilt dat de agent doet, en Copilot bouwt het voor je.
1. **Ontwerpcanvas**: sleep en plaats acties, voorwaarden en loops in de agent flow designer om je agent flow te bouwen.

## 🎨 Wat is de agent flow designer?

Het is een visuele tool in Copilot Studio die je helpt bij het bouwen, bewerken en beheren van agent flows die stapsgewijze instructies bieden die je agent volgt om taken uit te voeren. Het is ontworpen om eenvoudig te gebruiken te zijn, zelfs als je nieuw bent met agent flows.

### Belangrijke functies van de agent flow designer

1. **Visueel canvas**
    - Je kunt je hele flow zien als een diagram.
    - Eenvoudig in-/uitzoomen, het beeld aanpassen of een minimap gebruiken om grote flows te navigeren.

1. **Acties toevoegen en verwijderen**
    - Klik op de _plus (+)_ knop om een nieuwe actie toe te voegen, zoals een bericht verzenden of een item bijwerken in een SharePoint-lijst.
    - Je kunt zoeken naar acties van connectors en ze configureren via de instellingen.
    - Om een actie te verwijderen, klik op de _drie stippen (⋮)_ en selecteer _Verwijderen_.

1. **Parameters controleren**
    - Klik op een actie om de instellingen, genaamd _parameters_, te bekijken of te bewerken.
    - Je kunt waarden handmatig invoeren of _expressies_ gebruiken om ze dynamisch te maken.

1. **Versiegeschiedenis**
    - Elke keer dat je je flow opslaat, wordt er een versie geregistreerd.
    - Je kunt teruggaan en eerdere versies bekijken of herstellen indien nodig.

1. **Foutcontrole**
    - De _Flow Checker_ markeert eventuele fouten.
    - Alle fouten moeten worden opgelost voordat je je flow publiceert.

1. **Publiceren en testen**
    - Zodra je flow foutvrij is, publiceer je hem om hem live te maken.
    - Gebruik de _Test_-functie om je flow handmatig of automatisch uit te voeren en te controleren of hij werkt zoals verwacht.

### Waarom de agent flow designer gebruiken?

- **Visueel en intuïtief** - je kunt flows bouwen door te slepen en te klikken.
- **Veilig om te experimenteren** - versiegeschiedenis laat je wijzigingen ongedaan maken.
- **Ingebouwd testen** - helpt je ervoor te zorgen dat alles werkt voordat het live gaat.

## 🔤 Je noemde _expressies_ - wat zijn expressies?

Expressies zijn kleine formules of commando's die je agent flow helpen omgaan met gegevens. Je gebruikt ze om waarden te berekenen, tekst te formatteren, beslissingen te nemen of specifieke informatie uit inputs te halen.

### Waarom expressies gebruiken?

Expressies laten je:

- **Gegevensverwerking aanpassen** - namen combineren, datums formatteren.
- **Beslissingen nemen** - als een waarde groter is dan 10, doe iets.
- **Gegevens transformeren** - tekst naar kleine letters veranderen, een deel van een string extraheren.
- **Logica automatiseren** - zonder volledige code te schrijven.

### Hoe zien expressies eruit?

Expressies gebruiken functies. Ik ga een uitleg lenen van voormalig Microsoft MVP, Jerry Weinstock.

!!! quote
    Functies zijn ingebouwde logica om je gegevens te transformeren, zowel via eenvoudige als complexe bewerkingen in je expressie.

Functies stellen je in staat om expressies te bouwen zonder dat je code hoeft te schrijven.

Hoe ik het graag beschrijf, is dat een functie in agent flows vergelijkbaar is met Excel-functies. Je kunt een bewerking uitvoeren op gegevens om ze te transformeren naar een gewenst resultaat. Bij het bouwen van je formule in Excel selecteer je je invoerwaarde uit de cellen in een tabel of een bereik, en pas je functies toe om de gegevensuitvoer te manipuleren. Een voorbeeld is het gebruik van de `COUNT`-functie om het aantal cellen te berekenen dat nummers bevat uit een bereik.

In agent flows, in plaats van gegevens uit cellen in een tabel te refereren, verwijs je naar gegevensuitvoer van de trigger of acties bij het bouwen van je expressies. Voortbordurend op het vorige voorbeeld, gebruik de functie `length` om het aantal items op te halen dat is geretourneerd door de _Get items_ SharePoint connector actie.

### Waarom zijn functies belangrijk?

Het gebruik van functies maakt je agent flows:

- **Slimmer** - ze kunnen reageren op verschillende inputs of omstandigheden.
- **Flexibeler** - je kunt aanpassen hoe gegevens worden verwerkt.
- **Efficiënter** - je vermijdt handmatige stappen door logica te automatiseren.

### Meest nuttige functies

De volgende zijn veelgebruikte functies in agent flows. Voor de volledige lijst met functies, ga naar de [referentiegids](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez).

#### 🔡 Tekst

- `concat()` - Voegt twee of meer stukken tekst samen.
      - Voorbeeld: `concat('Hallo ', firstName)` → “Hallo John”

- `toLower()` / `toUpper()` - Verandert tekst naar kleine of hoofdletters.
      - Handig voor standaardisatie van input.

- `substring()` - Haalt een deel van een string op.
      - Voorbeeld: Haal de eerste 3 letters van een naam op.

- `trim()` - Verwijdert spaties aan het begin en einde van tekst.

#### 🔢 Wiskunde en getallen

- `add()`, `sub()`, `mul()`, `div()` - Basis wiskundige bewerkingen.
      - Voorbeeld: `add(5, 3)` - de output is 8

#### 📅 Datum en tijd

- `utcNow()` - Haalt de huidige datum en tijd op in UTC.
      - Geweldig voor tijdstempels.

- `addDays()`, `addHours()` - Voegt tijd toe aan een datum.
- Voorbeeld: `addDays(utcNow(), 7)` output is 7 dagen vanaf nu.

- `formatDateTime()` - Formatteert een datum naar een leesbare tekst.
      - Voorbeeld: Maandag, 7 juli 2025

#### ✅ Logisch

- `if()` - Voert een waarde uit als waar, een andere als onwaar.
      - Voorbeeld: `if(score > 50, 'Geslaagd', 'Gezakt')`

- `equals()` - Controleert of twee waarden hetzelfde zijn.

- `and()`, `or()`, `not()` - Combineert meerdere voorwaarden.

#### 🪣 Andere handige functies

- `coalesce()` - Geeft de eerste niet-lege waarde terug.
      - Handig voor fallback/standaardwaarden.

- `guid()` - Genereert een unieke ID.
      - Handig voor tracking of logging.

- `length()` - Telt hoeveel tekens of items er in een string of array zitten.

## ⭐ Beste praktijken

Hier zijn enkele beste praktijken voor het bouwen van agentflows in Copilot Studio.

1. **Begin eenvoudig en bouw geleidelijk op**

    - Start met een kleine, duidelijke taak zoals het verzenden van een bericht.
    - Voeg meer stappen toe nadat je de basis van je automatisering hebt getest.

1. **Gebruik duidelijke en beschrijvende actienamen**

    - Label elke stap duidelijk zodat jij en je team begrijpen wat het doet.
    - Voorbeeld: in plaats van de standaardnaam "Item bijwerken" voor de SharePoint-connectoractie, hernoem het naar wat het bijwerkt, zoals "Apparaatstatus bijwerken."

1. **Controleer op fouten voordat je publiceert**

    - Gebruik de **flow checker** om eventuele problemen te vinden en op te lossen.
    - Je kunt geen flows publiceren als er fouten zijn, dus probeer ze op te lossen zodra ze zich voordoen.

1. **Test je flow grondig**

    - Alleen omdat het opslaat en publiceert, betekent niet dat het werkt zoals verwacht.
    - Gebruik de _Test_-functie om je flow handmatig of automatisch uit te voeren en de resultaten te controleren.

1. **Gebruik Versiegeschiedenis**

    - Sla je flow vaak op zodat je indien nodig terug kunt naar eerdere versies.
    - Je kunt eerdere versies bekijken en herstellen via het _Versiegeschiedenis_-paneel.

1. **Gebruik parameters en expressies verstandig**

    - Gebruik bij het configureren van acties parameters om je flow dynamisch te maken.
    - Je kunt waarden handmatig invoeren of expressies gebruiken om ze te berekenen, of combineren met waarden van acties stroomopwaarts door de _dynamische inhoud_-kiezer te gebruiken.

1. **Verwijder ongebruikte acties**

    - Als je een actie toevoegt en later besluit dat je deze niet nodig hebt, verwijder deze om je flow overzichtelijk te houden.

## 🧪 Lab 09 - Voeg een agentflow toe voor automatisering en verbeter de mogelijkheden van onderwerpen

We gaan nu leren hoe we ons onderwerp kunnen verbeteren met adaptieve kaarten en het gebruik van geavanceerde functionaliteiten van onderwerpen en knooppunten.

- [9.1 Maak een agentflow](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.2 Voeg agentflow toe aan onderwerp](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.3 Werk het onderwerp "Apparaat aanvragen" bij met meerdere knooppunten voor een betere gebruikerservaring](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.4 Test agent met verschillende scenario's](../../../../../docs/recruit/09-add-an-agent-flow)

### ✨ Gebruikssituatie

**Als** manager van een medewerker

**Wil ik** apparaataanvragen ontvangen

**Zodat ik** het aangevraagde apparaat van de medewerker kan beoordelen.

Laten we beginnen!

### Vereisten

1. **SharePoint-lijst**

    We gebruiken de **Apparaten** SharePoint-lijst van [Les 00 - Cursusinstelling - Stap 3: Nieuwe SharePoint-site maken](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Als je de **Apparaten** SharePoint-lijst nog niet hebt ingesteld, ga dan terug naar [Les 00 - Cursusinstelling - Stap 3: Nieuwe SharePoint-site maken](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. **Contoso Helpdesk Agent**

    We gaan dezelfde agent gebruiken die eerder is gemaakt in [Les 06 - Maak een aangepaste agent met natuurlijke taal met Copilot en verbind deze met je gegevens](../06-create-agent-from-conversation/README.md).

### 9.1 Maak een agentflow

In deze oefening maken we een agentflow die het SharePoint-item van het geselecteerde apparaat ophaalt en een e-mail naar een manager stuurt met de apparaatgegevens.

1. In het onderwerp **Apparaat aanvragen**, scroll naar beneden naar het knooppunt **Vraag met adaptieve kaart** en voeg een nieuw knooppunt toe. Selecteer **Een tool toevoegen** en in het tabblad **Basis tools** van het uitvouwpaneel, selecteer **Nieuwe Agentflow**.

    ![Nieuwe Agentflow toevoegen](../../../../../translated_images/9.1_01_AddNewAgentFlow.2b9078604a054d1f022f9c73adaf10fe430e81875ec8717a7f70ef7b05f11c15.nl.png)

1. De **Designer** van Agentflows wordt geladen met een trigger en actie.

    - **Trigger** - Wanneer een agent de flow oproept
        - Dit triggert een flow vanuit een Copilot Studio-agent.

    - **Actie** - Reageer op de agent
        - Dit stuurt een reactie die outputwaarden kan bevatten terug naar de Copilot Studio-agent.

    Selecteer de trigger.

    ![Selecteer de trigger](../../../../../translated_images/9.1_02_SelectTrigger.92dc20442add764c8aa4b7f737f28416a3223e4471562462ed6dcba2dc7c7936.nl.png)

1. Vervolgens gaan we meerdere invoerwaarden toevoegen voor de agentflow.

    - `DeviceSharePointId` - dit zal de waarde, ID, van het SharePoint-item opslaan. Deze ID-waarde is een output van het knooppunt Vraag met adaptieve kaart waar de gebruiker het apparaat selecteerde.

    - `User` - dit zal de naam van de gebruiker zijn, afkomstig van een systeemvariabele van de agent.

    - `AdditionalComments` - dit zal de opmerking zijn die door de gebruiker is ingevoerd, wat een output is van het knooppunt Vraag met adaptieve kaart.

    We voegen eerst de `DeviceSharePointId` toe als invoer voor onze trigger. Selecteer **+ Een invoer toevoegen**.

    ![Een invoer toevoegen](../../../../../translated_images/9.1_03_AddInput.fd1e0a99ecb5e20f3a518cb23fc0d22c6db1435c5ffb2e183fce3b8a056287bb.nl.png)

1. Voor het type gebruikersinvoer, selecteer **Tekst**.

    ![Selecteer Tekst](../../../../../translated_images/9.1_04_SelectText.47ca776822ec5a6c1339c012d51e0eb6eac6bf8315d4ac6f25498b10ada16df9.nl.png)

1. Voor de naam van de invoer, voer het volgende in.

    ```text
    DeviceSharePointId
    ```

    ![DeviceSharePointId invoer](../../../../../translated_images/9.1_05_DeviceSharePointIdInput.caf77f8eb60a1b8649ea8b0abf05dfce9fa4bef9d9c465cd8906395e5b44842e.nl.png)

1. We voegen nu de tweede invoer toe, `User`. Herhaal dezelfde stappen, selecteer **+ Een invoer toevoegen** en selecteer **Tekst**.

    ![Een invoer toevoegen](../../../../../translated_images/9.1_06_AddInput.3ca4bff9991b6e8a331bd909ff58038387696ce7b6ee7a932a88316aff41bc57.nl.png)

1. Voor de naam van de invoer, voer het volgende in.

    ```text
    User
    ```

    ![User invoer](../../../../../translated_images/9.1_07_UserInput.16b2405f2d5744ea14a6a67b69539ba24719aaf642ddfc2b281e784d74d8c1ea.nl.png)

1. We voegen nu de derde invoer toe, `AdditionalComments`. Herhaal dezelfde stappen, selecteer **+ Een invoer toevoegen** en selecteer **Tekst**.

    ![Een invoer toevoegen](../../../../../translated_images/9.1_08_AddInput.4685bb77618e6d9cfca7a42a0945d10f59825b1ca42de372dcf07c9170451680.nl.png)

1. Voor de naam van de invoer, voer het volgende in.

    ```text
    AdditionalComments
    ```

    ![AdditionalComments invoer](../../../../../translated_images/9.1_09_AdditionalComments.a4587b59b85450ca0566615c9473132dd6447e6c7513e4926942655aa0e80195.nl.png)

1. Voor de invoer `AdditionalComments` maken we deze optioneel. Selecteer het **ellips (...) icoon** en selecteer **Maak het veld optioneel**.

    ![Maak het veld optioneel](../../../../../translated_images/9.1_10_Optional.753bd03817c2eb37bb44a7bfd7d29314aa7109cde02e3f619c01c42bc9170b71.nl.png)

1. Goed gedaan! De trigger is nu geconfigureerd, laten we doorgaan. Selecteer het **plus + icoon** onder de trigger om een nieuwe actie in te voegen.

    ![Actie toevoegen](../../../../../translated_images/9.1_11_AddAction.86c14acd1ce22e99b7244e0001f0039362ff6ac3efafe03956788aaa31e705af.nl.png)

1. Het **Acties-paneel** verschijnt waar je acties kunt bekijken van meer dan 1400 ingebouwde connectors naar Microsoft- en externe services. Voer in het **zoekveld** het volgende in,

    ```text
    Get item
    ```

    Een lijst met acties wordt weergegeven in de zoekresultaten. Selecteer de actie **Item ophalen** van de **SharePoint-connector**.

    ![Item ophalen actie](../../../../../translated_images/9.1_12_AddGetItemAction.434cdcb822e1f72993fc4a0c0ad753e1220456f9dab8fc307d42f5711071d45b.nl.png)

1. We kunnen nu beginnen met het configureren van de actie **Item ophalen**.

    Selecteer het **Ellips (...)** icoon in de actie **Item ophalen**.

    ![Selecteer ellips](../../../../../translated_images/9.1_13_SelectEllipsis.88bf304067f3103825f183f8962634af831460541290533e5670f4c014a97c46.nl.png)

1. Selecteer **Hernoemen**.

    ![Selecteer Hernoemen](../../../../../translated_images/9.1_14_SelectRename.74d99c883418b7dbf58758304976cac1d0f2afd30e4cd1992830f00775a46b18.nl.png)

1. Hernoem de actie naar,

    ```text
    Get Device
    ```

    ![Actie hernoemen](../../../../../translated_images/9.1_15_RenameAction.ff64b79f6e6603ae89f272f91d84ff4432c04ba103c401a2808a767e3ceb5617.nl.png)

1. In het veld **Siteadres**, selecteer het **Siteadres** van de Contoso IT SharePoint-site die is gemaakt in [Les 00 - Cursusinstelling - Stap 3: Nieuwe SharePoint-site maken](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    In het veld **Lijstnaam**, selecteer de **Apparaten** SharePoint-lijst.

    ![Invoerparameters](../../../../../translated_images/9.1_16_SharePointSiteAndListParameters.af6e0b112eb4bfb210f9259da02b459097a06307afa6ca269cb33aa9ecc1c1e4.nl.png)

1. In het veld **Id**, selecteer het **bliksemschicht-icoon** of **fx-icoon** aan de rechterkant.

    ![Dynamische inhoud kiezer](../../../../../translated_images/9.1_17_InsertExpressionIcon.6e250bb84e7b8884de7b2052005f7ff3cd95f2c28671d2da7965001b3f621902.nl.png)

1. In het tabblad **Dynamische inhoud** van het uitvouwpaneel, voer het volgende in,

    ```text
    sharepoint
    ```

    De zoekresultaten tonen invoerparameters die overeenkomen met de ingevoerde waarde. Selecteer de parameter **DeviceSharePointId** van de trigger.

    Selecteer vervolgens **Toevoegen** om de invoer van dynamische inhoud toe te voegen aan de parameter **Id** van de actie.

    ![Selecteer DeviceSharePointId invoer](../../../../../translated_images/9.1_18_DeviceSharePointId.b9be8e7c3c6b0ab710a8f662e62a0ec0133a530f6877b6cea3c48acc8022fec5.nl.png)

1. De invoer van dynamische inhoud van de trigger wordt nu verwezen in de parameter **Id** van de actie. We gaan een van de geavanceerde parameters bijwerken. Selecteer **Alles weergeven** om de geavanceerde parameters te bekijken.

    ![Bekijk geavanceerde parameters](../../../../../translated_images/9.1_19_AdvancedParameters.4bb8e0c11e7864625ad6c30ab1b9021d367cd77374c56985df7b3d43845a1883.nl.png)

1. De parameter **Kolommen beperken op weergave** wordt weergegeven en standaard ingesteld op **Alle kolommen gebruiken (Niet beperken)**. We werken deze waarde bij naar een weergave om de kolommen die worden geretourneerd in de respons van de actie te beperken. Selecteer de parameter **Kolommen beperken op weergave** om de lijst met weergaven te bekijken.

    ![Selecteer parameter](../../../../../translated_images/9.1_20_LimitColumnsByView.4d30f532f1e1033323d39df5c9b8e803788ea785ed58de2efca2faa5df4b26fc.nl.png)

1. Selecteer de weergave **Alle items**.

    ![Selecteer Alle items weergave](../../../../../translated_images/9.1_21_SelectView.d180e83d5e62f5fb6994a7071d5e6ce8f88143d8cc833cb55b208c6fee41bc02.nl.png)

1. Selecteer het **plus + icoon** onder de actie _Apparaat ophalen_ om een nieuwe actie in te voegen.

    ![Nieuwe actie toevoegen](../../../../../translated_images/9.1_22_AddAnAction.904b79142347fe927168036ade55d842fa088deef53710944272c681421e0e84.nl.png)

1. Voer in het zoekveld het volgende in,

    ```text
    send an email
    ```

    Een lijst met acties wordt weergegeven in de zoekresultaten. Selecteer de actie **E-mail verzenden (V2)** van de **Office 365 Outlook-connector**.

    ![E-mail verzenden actie](../../../../../translated_images/9.1_23_SendAnEmail.f1019365131658b0e71b5b58b57d7d8b3f3a0c670ddb3cca0838bf0b4f8cd354.nl.png)

1. We moeten een verbinding maken voor de connectoractie. Selecteer **Inloggen**.

    ![Verbinding maken](../../../../../translated_images/9.1_24_CreateConnection.9e968ad4de9d13d81e95779c4fa60809fd40de5f65dbd014f1dc39663c935806.nl.png)

1. Selecteer je ingelogde gebruikersaccount.

    ![Selecteer gebruikersaccount](../../../../../translated_images/9.1_25_SelectUserAccount.f3c96ac1a377c4b42a6301ba38c21469eb7bd3f48633f04200f1610902f8bdbe.nl.png)

1. Selecteer **Toegang toestaan**. Er is nu een verbinding gemaakt.

    ![Selecteer toegang toestaan](../../../../../translated_images/9.1_26_AllowAccess.1abcaea31b9846279cafafd7160baea6bec60cdfac8224df7082ceee3ef22a26.nl.png)

1. Hernoem de actie naar het volgende,

    ```text
    Send an email to manager
    ```

    Laten we vervolgens de invoerparameters van onze actie definiëren.

    Voor de invoerparameter **Aan**, selecteer jezelf. Normaal gesproken zou dit je manager zijn of zouden we een andere actie gebruiken die je manager ophaalt op basis van je Entra ID-profiel, maar voor de doeleinden van deze les selecteer je jezelf.

    Voor de invoerparameter **Onderwerp**, voer het volgende in,

    ```text
    Request type: new device
    ```

    Voor de invoerparameter **Body**, voer het volgende in,

    ```text
    Hi,

    New device requested from

    Manufacturer:
    Model:
    Link to item in SharePoint
    Additional comments from:

    This is an automated email from Contoso Helpdesk Copilot
    ```

    ![Actie hernoemen en invoer configureren](../../../../../translated_images/9.1_27_RenameAndConfigureParameters.c3d29a3481fb5c0240cca85db4119387e6b750546ed12e2af4a9ac62d7454f89.nl.png)

1. Vervolgens gaan we de invoerparameter **Body** bijwerken met verwijzingen naar dynamische inhoud van de **trigger** of **Item ophalen** actie. Voer een spatie in na de tweede regel, omdat we de naam van de gebruiker uit de triggerinvoer, **User**, gaan invoegen.

    Selecteer het **bliksemschicht-icoon** of **fx-icoon** aan de rechterkant.

    ![Voeg User invoer toe als dynamische inhoud](../../../../../translated_images/9.1_28_AddUserInput.f38d3df648faef75f1985bdcc23db16e197ccb1ddc015210c43bbb2569fcf654.nl.png)

1. In het tabblad **Dynamische inhoud** van het uitvouwpaneel, selecteer de invoer **User** van de trigger.

    Selecteer **Toevoegen** om de dynamische inhoud **User** invoer toe te voegen aan de parameter **Body** van de actie.

    ![Selecteer User invoer](../../../../../translated_images/9.1_29_SelectUserInput.4efc79f52d74fa7ae13132ea13f7d51b3f4aab6413afc41a8354c5e59852b9fc.nl.png)
1. De dynamische inhoud van de trigger wordt nu verwezen in de **Body**-parameter van de actie. We herhalen hetzelfde voor de resterende regels in de e-mailtekst.

    ![Gebruikersinvoer toegevoegd](../../../../../translated_images/9.1_30_UserInputAdded.905ec0489e4f1bbe7cc071826050834aa1e5acf53f8a65ad59532ea13b81c607.nl.png)

1. Klik in de ruimte naast `Fabrikant:`. Selecteer het **bliksemschicht-icoon** of **fx-icoon** aan de rechterkant.

    In het tabblad **Dynamische inhoud** van het uitklapvenster, voer het volgende in het zoekveld in,

    ```text
    manufacturer
    ```

    Selecteer de **Fabrikantwaarde** invoer van de trigger en klik op **Toevoegen**.

    ![Fabrikantwaarde invoer toevoegen als dynamische inhoud](../../../../../translated_images/9.1_31_ManufacturerValueAdded.db2cf35a35a20590d80d7f0191d771a045bf55e40ce98982d0e099588e260712.nl.png)

1. Klik in de ruimte naast `Model:`. Selecteer het **bliksemschicht-icoon** of **fx-icoon** aan de rechterkant.

    In het tabblad **Dynamische inhoud** van het uitklapvenster, voer het volgende in het zoekveld in,

    ```text
    model
    ```

    Selecteer de **Model** invoer van de **Get item** actie en klik op **Toevoegen**.

    ![Model invoer toevoegen als dynamische inhoud](../../../../../translated_images/9.1_32_ModelAdded.ff9d858648ddb85fe70eaaafa6e23d0560500e7327ccb29ee56ecac0d8d36cab.nl.png)

1. Voor de tekst `Link naar item in SharePoint` gaan we dit bijwerken naar een hyperlink in de e-mailtekst. Klik aan het begin van de regel en selecteer het **bliksemschicht-icoon** of **fx-icoon** aan de rechterkant.

    ![Dynamische inhoud toevoegen](../../../../../translated_images/9.1_33_AddDynamicContent.c662d682377af82adc52de18e05baf9b6aa5a972882dcf6274f3979f14641627.nl.png)

1. Klik na de HTML-anchor tag en selecteer het **bliksemschicht-icoon** of **fx-icoon** aan de rechterkant.

    In het tabblad **Dynamische inhoud** van het uitklapvenster, voer het volgende in het zoekveld in,

    ```text
    link to item
    ```

    Selecteer de **Link naar item** invoer van de **Get item** actie en klik op **Toevoegen**.

    ![Link naar item toevoegen als dynamische inhoud](../../../../../translated_images/9.1_34_AddLinkToItem.6827bd3bad484f7382d060435bb0ef45e9bb1c3ad4774529559bb4c5f9bbca8c.nl.png)

1. We moeten overschakelen naar de HTML-editor door het **&lt;/&gt;** icoon te selecteren.

    ![Gebruikersinvoer toevoegen](../../../../../translated_images/9.1_35_ToggleCodeView.ae3a9caf213f2c6366487e10092ad1fad3494f110936219258d842c23e7f46d9.nl.png)

1. De HTML-editor is nu ingeschakeld. Klik vóór de tekst `Link naar item in SharePoint`, voeg een HTML-anchor tag toe om een hyperlink te maken. Kopieer en plak het volgende.

    ```text
    <a href="
    ```

    ![HTML-tag](../../../../../translated_images/9.1_36_AddHTMLTag.146220ae5c33eaf9915c393c37d62b9d4b258413e9f4dc42a1ab005437669443.nl.png)

1. De dynamische inhoud van **Link naar item** wordt nu verwezen in de **Body**-parameter. Klik na de **Link naar item** invoer, kopieer en plak het volgende.

    ```text
    ">
    ```

    ![HTML-tag](../../../../../translated_images/9.1_37_AddHTMLTag.48f73b302f6a84bb6a51e0666fd30baf1f8d9d906947d44dc4095ededed18a2d.nl.png)

1. Klik na de tekst `Link naar item in SharePoint`, sluit de HTML-anchor tag. Kopieer en plak het volgende.

    ```text
    </a>
    ```

    ![HTML-tag](../../../../../translated_images/9.1_38_AddHTMLTag.47d2f0521e6aba9d609bfe65d86ebae5786e4ad5465fefb7ae0370db6e924c96.nl.png)

1. Selecteer het **&lt;/&gt;** icoon om de codeweergave uit te schakelen.

    ![Codeweergave uitschakelen](../../../../../translated_images/9.1_39_ToggleCodeView.88606eb37d702a686904b2dd8943fcf144cec462b37ee781e8ee0415e62bd951.nl.png)

1. Selecteer vervolgens opnieuw het **&lt;/&gt;** icoon om de codeweergave weer in te schakelen.

    ![Terug naar codeweergave](../../../../../translated_images/9.1_40_ToggleCodeViewAgain.32da9b9804adbbfaf8d85bdaa6fa51d2ae5fc1fbb97f75084813972c66d0c4d9.nl.png)

1. Merk op dat er verschillende extra tekens `&lt;br&gt;` zijn. Verwijder deze tekens.

    ![Tekens verwijderen](../../../../../translated_images/9.1_41_DeleteCharacters.f1ef3830b186c2cd9974ea05e336c83c0706d72ab1010d06283716dc4e982875.nl.png)

1. We hebben nu een hyperlink toegevoegd aan onze e-mailtekst 😎 Selecteer het **&lt;/&gt;** icoon om de codeweergave uit te schakelen.

    ![HTML-tag opgeruimd](../../../../../translated_images/9.1_42_HTMLTagTidiedUp.1b27fa2c4dc65c3f1a7151abcf6e388f64cb83745b10cd22769c1f9af3421fc6.nl.png)

1. Klik na de tekst `Aanvullende opmerkingen van` vóór het dubbelepunt en selecteer het **bliksemschicht-icoon** of **fx-icoon** aan de rechterkant.

    ![Gebruikersparameter toevoegen](../../../../../translated_images/9.1_43_AddUserInput.6f0d26739c1b9039383aa37cc46fa1149a269bd4268fb54b897d144afc49c515.nl.png)

1. In het tabblad **Dynamische inhoud** van het uitklapvenster, voer het volgende in het zoekveld in,

    ```text
    user
    ```

    Selecteer de **Gebruikers**-parameter van de trigger en klik op **Toevoegen**.

    ![Gebruikersparameter toevoegen als dynamische inhoud](../../../../../translated_images/9.1_44_AddUserDynamicContent.bb7c76e92650001207712b3447d3275d584f3ebf739034369869c3facf38eacf.nl.png)

1. We gaan nu een expressie invoegen die de waarde van Aanvullende opmerkingen weergeeft als deze door de gebruiker is opgegeven in de **Vraag een adaptieve kaart**-node, anders wordt "Geen" weergegeven als de gebruiker geen opmerkingen heeft opgegeven.

    Klik na het dubbelepunt en selecteer het **bliksemschicht-icoon** of **fx-icoon** aan de rechterkant.

    ![Expressie toevoegen](../../../../../translated_images/9.1_45_AddExpression.c4c92dc4a56fab75c78ec2c5087682521e562264c1710c8dfaa24134adc3a112.nl.png)

1. In het tabblad **Functie** van het uitklapvenster en in het expressieveld bovenaan, voer het volgende in,

    ```text
    if(empty())
    ```

    Deze expressie gebruikt de `if`-functie voor een if-else statement.

    De volgende functie die wordt gebruikt is `empty`, die controleert of er een waarde bestaat in een stringparameter. De stringparameter die wordt verwezen is de waarde van de invoerparameter `AdditionalComments` van de trigger.

    ![Als leeg](../../../../../translated_images/9.1_46_IfEmptyFunctions.95d21ad01f6f7c290cb8d5a57ccbca9c9532df7ce57f800554dea541d503ddc6.nl.png)

1. Klik vervolgens **binnen de haakjes** na de `empty`-functie. We gaan de invoerparameter `AdditionalComments` van de trigger invoegen.

    Selecteer het tabblad **Dynamische inhoud**. Voer het volgende in het zoekveld in,

    ```text
    Additional
    ```

    Scroll naar beneden in het venster en selecteer de invoer **AdditionalComments** van de trigger. De parameter wordt nu toegevoegd als een stringparameter in de expressie.

    ![AdditionalComments toevoegen als dynamische inhoud](../../../../../translated_images/9.1_47_AdditionalCommentsDynamicContent.f9632f09779888c18a58df8e97ef677ed885b0eaa88c252b13b22c0e4c67495b.nl.png)

1. Vervolgens definiëren we de **_true_** logica, waarbij als de stringparameter `AdditionalComments` leeg is, we een string (tekst) van `Geen` willen weergeven.

    Na de haakjes die de stringparameter omsluiten, voer het volgende in,

    ```text
    , 'None',
    ```

    ![True logica](../../../../../translated_images/9.1_48_None.31978299f29e07ef3257eedd5dcee09c8675f8b3f61aea8102900118e0b6ca70.nl.png)

1. Tot slot definiëren we de **_false_** logica, waarbij als de stringparameter `AdditionalComments` niet leeg is, we de waarde van de invoerparameter **AdditionalComments** van onze trigger willen weergeven.

    > Een herinnering: deze waarde komt uit het veld Aanvullende opmerkingen van de adaptieve kaart in de **Vraag met adaptieve kaart**-node in het **Vraag apparaat**-onderwerp.

    Na de komma na onze **_true_** logica, selecteer het tabblad **Dynamische inhoud**. Voer het volgende in het zoekveld in,

    ```text
    Additional
    ```

    Scroll naar beneden in het venster en selecteer de invoer **AdditionalComments** van de trigger. De parameter wordt nu toegevoegd als een stringparameter in de expressie.

    Voeg het nu toe aan onze **Body**-parameter door op **Toevoegen** te klikken.

    ![False logica](../../../../../translated_images/9.1_49_AdditionalCommentsDynamicContent.d42c7fc29f65d901bb26dcbc13408c387633ea185cdd79c35d6439231b7363d5.nl.png)

1. Uitstekend, onze expressie is compleet! De expressie is nu toegevoegd aan de **Body**-parameter. Format de laatste regel als cursief.

    ![Cursief](../../../../../translated_images/9.1_50_Italics.a0c01aa33ef4e83167e1fbc21c1d833f95addd60c8f531411cf9c58a96a31b02.nl.png)

1. We gaan nu de actie **Reageer op de agent** bijwerken om de waarde van de **Modelwaarde**-parameter van de **Get item**-actie terug te sturen naar de agent.

    Houd de linkermuisknop ingedrukt en beweeg omhoog in de ontwerper om de actie **Reageer op de agent** te bekijken.

    Selecteer de actie **Reageer op de agent** en selecteer de **Tekst**-uitvoer als type.

    ![Selecteer Tekst-uitvoer](../../../../../translated_images/9.1_51_RespondToTheAgentAction.4c682a440e19a0fcd6d6f51ef9cdbfe76f482a39d635b8905d9b0cbbf33d945f.nl.png)

1. Voer het volgende in als naam van de uitvoer.

    ```text
    ModelValue
    ```

    ![ModelValue uitvoer](../../../../../translated_images/9.1_52_ModelValueInput.20609429eb323281051607b090319adc5315c0245c7d61158eb119714fe4318f.nl.png)

1. Selecteer het waardeveld en selecteer het **bliksemschicht-icoon** of **fx-icoon** aan de rechterkant.

    ![Expressie invoegen](../../../../../translated_images/9.1_53_InsertDynamicContent.108ba565696f9f52d742323e0f4c46c308f322ac4bd67802e3196430155c7443.nl.png)

1. In het tabblad **Dynamische inhoud** van het uitklapvenster, voer het volgende in het zoekveld in,

    ```text
    model
    ```

    Selecteer de **Model**-parameter van de **Get item**-actie en klik op **Toevoegen**.

    ![Modelparameter toevoegen als dynamische inhoud](../../../../../translated_images/9.1_54_ModelParameter.f231fd0ec089ac6b9ac1b7fd2e6a60a35b08484ed10b0098cff6b3ce0c7760cb.nl.png)

1. De **Model**-parameter is nu de waarde van de tekstuitvoer. Selecteer **Concept opslaan** om onze agentflow op te slaan.

    We hebben onze agentflow nu voltooid 👏🏻

    ![Concept opslaan](../../../../../translated_images/9.1_55_SaveDraftAgentFlow.5ab97895a901458362881fc9ee576762bdb0883b37a6cbd7a631ddc2750705af.nl.png)

1. Laten we nog één update maken aan onze agentflow voordat we publiceren. Selecteer het tabblad **Overzicht** en klik op **Bewerken**.

    ![Bewerken selecteren](../../../../../translated_images/9.1_56_EditAgentFlowDetails.023e8149284b9ae79dd3d95f574ff90bbcc1cc4a9fff4be56664ccbe0698f310.nl.png)

1. Voor de **Flownaam**, kopieer en plak het volgende.

    ```text
    Send device request email
    ```

    Voor de **Beschrijving**, selecteer het **vernieuwingsicoon** om AI te gebruiken om automatisch een beschrijving voor je te genereren op basis van de trigger en acties in de agentflow.

    Klik op **Opslaan** om de bijgewerkte naam en beschrijving van de agentflow op te slaan.

    ![Naam wijzigen, beschrijving toevoegen en details opslaan](../../../../../translated_images/9.1_57_RenameAndDescription.57a190396550bf998d62c49ca359b66211ae50042ac5f8739b32f8b9bc292607.nl.png)

1. Selecteer het tabblad **Ontwerper** en klik op **Publiceren** om de agentflow te publiceren zodat deze kan worden toegevoegd als een node in het **Vraag apparaat**-onderwerp.

    ![Publiceren](../../../../../translated_images/9.1_58_Publish.8f43271718c662deee7afea6fb283f64005b277b3a62086e6d91cc0c3ac4f79c.nl.png)

1. Er verschijnt binnenkort een bevestigingsbericht om te bevestigen dat de agentflow is gepubliceerd.

    ![Bevestigingsbericht](../../../../../translated_images/9.1_59_Confirmation.d406bde76c31b27f794d5742c992b8c84283f46b2e54524f1e500d0688a33716.nl.png)

### 9.2 Agentflow toevoegen aan onderwerp

Laten we nu de agentflow toevoegen aan het **Vraag apparaat**-onderwerp.

1. Selecteer **Agents** in het menu aan de linkerkant en selecteer de **Contoso Helpdesk Agent**.

    ![Agents selecteren](../../../../../translated_images/9.2_01_SelectAgent.b8a6fd3a8970d6b0c8e78bf0a5411257206612d53acdf9b44f78b2c9c2fe91fc.nl.png)

1. Selecteer het tabblad **Onderwerpen**.

    ![Tabblad Onderwerpen selecteren](../../../../../translated_images/9.2_02_SelectTopics.3e8618aba5f4a1ddf3dee726b6da9a66ed89d04a2e8ca36b52112a6675c2885c.nl.png)

1. Selecteer het **Vraag apparaat**-onderwerp.

    ![Vraag apparaat onderwerp selecteren](../../../../../translated_images/9.2_03_SelectRequestDevice.df10472702258708b3d069e718e695b9fcabc61d42901d524dc302a03b3fa4a9.nl.png)

1. Scroll naar beneden naar de **Vraag met adaptieve kaart**-node en voeg een nieuwe node toe.

    Selecteer **Een tool toevoegen** en in het tabblad **Basis tools** van het uitklapvenster, selecteer de agentflow **Verzend e-mail voor apparaatverzoek** die we onlangs hebben gemaakt en gepubliceerd.

    ![Agentflow selecteren](../../../../../translated_images/9.2_04_SelectAgentFlow.15deca87db95fff1c9d904855d237d22a72c260adf3343d9e78695f07c42a8e0.nl.png)

1. Voor de triggerinputs van onze agentflow moeten we de variabele outputs selecteren van de **Vraag met adaptieve kaart**-node.

    Selecteer het **ellips (...) icoon** voor de **DeviceSharePointId**-invoer.

    ![Variabele selecteren](../../../../../translated_images/9.2_05_SelectVariable.8fe53cbc0f950f732b9e9002b21d8762ddfe74fb601d61c2a5119e32383450a2.nl.png)

1. Selecteer de **deviceSelectionId**-variabele, een van de outputs die is gedefinieerd in de **Vraag met adaptieve kaart**-node.

    ![deviceSelectionId selecteren](../../../../../translated_images/9.2_06_SelectdeviceSelectionIdVariable.67c0091e0de9442d3cffbfe3b2cace8d76be37ea67815ddfc99af03ae4b37391.nl.png)

1. Selecteer vervolgens het **ellips (...) icoon** voor de **Gebruiker**-invoer.

    ![Variabele selecteren](../../../../../translated_images/9.2_07_SelectVariable.bf851128bec5e0255c6cf361a837ce9701d0afac84ed3d5b89665d111a098386.nl.png)

1. Selecteer het tabblad **Systeem** in het uitklapvenster en selecteer **User.DisplayName**. Deze variabele slaat de weergavenaam op van de interne gebruiker die met de agent communiceert.

    ![User.DisplayName systeemvariabele selecteren](../../../../../translated_images/9.2_08_SelectUser.DisplayNameVariable.926a2a7560402fbd7b224e2bf0ff11df9e5612803b7ce51e36f58201a09bbfd7.nl.png)

1. Selecteer vervolgens het **groter dan icoon** voor **Geavanceerde inputs** om de **AdditionalComments**-invoer uit te klappen en te bekijken.

    ![Geavanceerde inputs uitklappen](../../../../../translated_images/9.2_09_ExpandAdvancedInputs.bded22f83fe4eb21237daa254725e12a81ea75be34bcb0e8ab322037a4e6f418.nl.png)

1. Selecteer het **ellips (...) icoon** voor de AdditionalComments-invoer.

    ![Variabele selecteren](../../../../../translated_images/9.2_10_SelectVariable.86286cc06323e65fb3874b9fd0ea62d140b9e9b9a2b5116d667192a6dca3815f.nl.png)

1. Selecteer het tabblad **Formule** en het uitklapicoon in het uitklapvenster, omdat we een Power Fx-expressie gaan gebruiken.

    ![Formule tabblad](../../../../../translated_images/9.2_11_SelectFormulaAndExpandIcon.3fcd07bfccc4f0779a5d26313b571e60be792da7fd28e937b3e888f8aaeda7e0.nl.png)

1. Net zoals de expressie in de agentflow die een voorwaardelijke controle uitvoert met behulp van de _if_-functie, maar deze keer
    - met behulp van Power Fx-functies,
    - en het invoegen van ofwel geen waarde, of de waarde van de `commentsId` uitvoer variabele van de **Vraag met adaptieve kaart**-node.

    Voer de volgende functies in het Power Fx-veld in,

    ```text
    If(IsBlank())
    ```

Deze expressie gebruikt de functie `If` voor een if-else statement.

De volgende functie die wordt gebruikt is `IsBlank`, waarmee wordt gecontroleerd of een waarde wel of niet bestaat in een stringparameter. De te refereren stringparameter is de uitvoervariabele `commentsId` van de **Vraag met adaptieve kaart**-node.

![If en IsBlank functies](../../../../../translated_images/9.2_12_IfIsBlank.07f7516c7e1f7579239a8b3833d64a14eb88dc245cae714b3e07d6298e907d51.nl.png)

1. Klik vervolgens **binnen de haakjes** na de functie `IsBlank`. We gaan de uitvoervariabele `commentsId` van de **Vraag met adaptieve kaart**-node invoegen.

Voer het volgende in binnen de haakjes,

    ```text
    Topic.commentsId
    ```

En voeg een komma toe na het haakje.

![Referentie naar commentsId uitvoer](../../../../../translated_images/9.2_13_Topic.commentsId.1a04dc190dac334ebf6c4dbc1b6df1aad2e4bbdeeb3ef960871e93614381f079.nl.png)

1. Vervolgens definiëren we de logica:

    - wanneer **_true_** - als de stringparameter `Topic.commentsId` leeg is, willen we geen waarde invoegen.
    - wanneer **_false_** - als de stringparameter `Topic.commentsId` niet leeg is, voegen we de waarde van de variabele commentsId in.

Na het haakje dat de stringparameter omsluit, voer het volgende in,

    ```text
    "", Topic.commentsId)
    ```

De Power Fx-expressie zou als volgt moeten zijn,

    ```text
    If(IsBlank(Topic.commentsId), "", Topic.commentsId)
    ```

Goed gedaan, onze expressie is compleet! 🙌🏻 Selecteer nu **Invoegen** om de invoerparameter van de agentflow in te stellen op de Power Fx-expressie.

![Power Fx expressie](../../../../../translated_images/9.2_14_PowerFxExpression.80e76ea59bdb8f131d26edf2657923f4af9000768d44b06c0947115fd218698e.nl.png)

1. **Sla** het onderwerp op.

### 9.3 Update het onderwerp "Apparaat aanvragen" met meerdere nodes voor een betere gebruikerservaring

We voegen nu twee extra nodes toe:

- **Bericht verzenden** - dit fungeert als een bevestigingsbericht dat verwijst naar het geselecteerde apparaat en dat de aanvraag is ingediend.
- **Onderwerpbeheer** - om het gesprek te beëindigen, leiden we door naar de **Einde van gesprek**-node.

Laten we beginnen!

1. Selecteer het **plus + icoon** onder de agentflownode en selecteer de **Bericht verzenden**-node.

![Bericht verzenden node toevoegen](../../../../../translated_images/9.3_01_AddSendAMessageNode.ac4111729a2602f8301ecffbcb263d692ecb43478aa9da63cae0dd58160f56c8.nl.png)

1. Voer het volgende in het berichtveld in,

    ```text
    Thanks
    ```

Selecteer vervolgens **Variabele invoegen**, omdat we de naam van de gebruiker gaan refereren.

![Variabele invoegen](../../../../../translated_images/9.3_02_InsertVariable.c5c9ebce61d1f442413d05f4437f74ee1d9c3a8c2ab696244937c56b5171f310.nl.png)

1. Selecteer het tabblad **Systeem** en zoek naar `User` in het zoekveld. Selecteer de variabele **User.DisplayName**.

![Systeemvariabele selecteren](../../../../../translated_images/9.3_03_SelectSystemVariable.47cfac2f3a727dbaf32ae960cbafe43ce9ed00f73edf01ac6d48e5b2b167e5fc.nl.png)

1. Voer het volgende in het berichtveld in,

    ```text
    . Your selected device,
    ```

Selecteer vervolgens **Variabele invoegen** en dit keer in het tabblad **Aangepast**, selecteer de variabele **ModelValue**.

Voer vervolgens het volgende in om het bericht af te maken.

    ```text
    , has been submitted and will be reviewed by your manager.
    ```

Het bericht zou er als volgt uit moeten zien.

![Bericht verzenden](../../../../../translated_images/9.3_04_SendAMessage.3f6c4b5e53da9c7f9fcf9d0c453a9b65e44e35ea4c1124947fb638d0b682d96d.nl.png)

1. Selecteer ten slotte het **plus + icoon** onder de **Bericht verzenden**-node en selecteer **Onderwerpbeheer**, gevolgd door **Ga naar een ander onderwerp** en selecteer **Einde van gesprek**.

![Onderwerpbeheer](../../../../../translated_images/9.3_05_EndOfConversation.3c6c96d03b29a4d0904dea09d96c62d6ad450fe60dd8d6b2fe9d31681d6cb147.nl.png)

1. **Sla** het onderwerp op.

![Opslaan](../../../../../translated_images/9.3_06_SaveTopic.8c9201fabce9f41af03d9f1beb9ce321e4ee9880a94edabe58b592bffebda80a.nl.png)

### 9.4 Test de agent met verschillende scenario's

Goed gedaan!!! 😁 We kunnen nu onze agent testen.

#### 9.4.1 Vraag een apparaat aan en voer een opmerking in op de adaptieve kaart

1. **Vernieuw** het testpaneel, selecteer het **activiteitskaart**-icoon en voer het volgende in als bericht aan de agent.

    ```text
    I need a laptop
    ```

![Agent testen](../../../../../translated_images/9.4_01_TestAgent_RequestDevice_Yes.e73a5076dcd7179901dc0536624a039e372e405a6aac7ab89a632ce81bacdc2e.nl.png)

1. De agent activeert **Beschikbare apparaten** en reageert met de lijst van beschikbare apparaten. We voeren het volgende in als antwoord op de vraag of we een apparaat willen aanvragen.

    ```text
    Yes
    ```

![Ja](../../../../../translated_images/9.4_02_RequestDevice_Yes.25c34743bc168fde33f91743316e7bad87ee0e47150c93e9b82c4662404dcaba.nl.png)

1. Merk op hoe de agent de **Apparaat aanvragen** heeft geactiveerd volgens de instructies van de agent en dat de adaptieve kaart nu wordt weergegeven in het bericht van de agent.

Selecteer het apparaat **Surface Laptop 15** en voeg het volgende in als opmerking.

    ```text
    I need 16GB of RAM please
    ```

![Apparaat selecteren en opmerking invoeren](../../../../../translated_images/9.4_03_SelectDeviceAndEnterComment.570ea590309bf97edc40c6f7b53dbdc1174365860d8e8a4c32cfb7f1837621c2.nl.png)

1. Scroll naar beneden totdat je de knop **Aanvraag indienen** ziet en selecteer deze om de adaptieve kaart naar de agent te verzenden.

![Aanvraag indienen](../../../../../translated_images/9.4_04_SubmitRequest.ce3f4f44b90243a18dbfb401548b9b3cefd3ea17d8293a1bc3377323e3449da9.nl.png)

1. Selecteer **Toestaan** zodat de agent je inloggegevens kan gebruiken voor de authenticatie van de verbinding van de twee connectoracties.

![Toestaan](../../../../../translated_images/9.4_05_SelectAllow.f7b5bda068fbaee83dcb1cff03a52c946fb4d879137c55f4e5f9eb3953985e0e.nl.png)

1. De agent toont vervolgens het bevestigingsbericht met het geselecteerde model, gevolgd door een doorverwijzing naar het onderwerp **Einde van gesprek**. Cool!

![Aanvraag ingediend](../../../../../translated_images/9.4_06_RequestSubmitted.1d4d2e9afbc222a5ba79a4c254e7b2364d6eafc1a200ad6ac0aa142f9f10642d.nl.png)

1. Selecteer **Ja** om de rest van het onderwerp **Einde van gesprek** te verifiëren.

![Ja selecteren](../../../../../translated_images/9.4_07_RedirectNode.e7b1390e4eafe8c2c815fc8ce7fdda56617d9fbeccb0d59423ad2899a8e5f897.nl.png)

1. Beoordeel de ervaring door een van de sterren in de beoordelingskaart te selecteren.

De agent gaat vervolgens door naar de laatste **Vraag**-node in het onderwerp **Einde van gesprek**. Selecteer **Nee**.

![Einde van gesprek onderwerp](../../../../../translated_images/9.4_08_EndOfConversation.b35507f7f561633c0cb3b6c15dc007ae4197a72d58afd8ae616bea439bd6e148.nl.png)

1. Het onderwerp wordt vervolgens afgerond en een laatste bericht wordt weergegeven in het testpaneel.

![Einde van gesprek onderwerp](../../../../../translated_images/9.4_09_EndOfConversation.438891b82e322b8a2648533200fbcd01c660ab049223b0920cdd0fbfcdeeb888.nl.png)

1. Controleer je inbox van je e-mailaccount om de e-mail te bekijken die door de agentflow naar de manager is verzonden. Je kunt de details van het geselecteerde apparaat en de opmerking die is ingevoerd in de adaptieve kaart zien.

![E-mail ontvangen](../../../../../translated_images/9.4_10_ReviewEmailMessageWithComment.b0138b0bb9d08aacbd8bbb02fdb633a6796b4131cf8d83212adeabaa1ce04a18.nl.png)

1. Klik op de hyperlink en de browser zou het SharePoint-item van het apparaat moeten laden. Super!

![Klik op hyperlink in e-mail](../../../../../translated_images/9.4_11_SelectLinkInEmail.2179f17165b61ba1e8aee68e8de4c752d64b0780ad86e0fe9054580d9c24e208.nl.png)

#### 9.4.2 Vraag een apparaat aan en voer geen opmerking in op de adaptieve kaart

Laten we nu het scenario testen waarin geen opmerking wordt ingevoerd.

1. Herhaal dezelfde stappen:

    - **Vernieuw** het testpaneel en selecteer het **activiteitskaart**-icoon
    - Voer het bericht in, `Ik heb een laptop nodig`
    - Reageer met `Ja` op de vraag of je een apparaat wilt aanvragen

![Apparaat aanvragen](../../../../../translated_images/9.4_12_RequestDevice_Yes.1e369b8a52547fade4b84a4e36b399ee0692c6edbaa778ba90fe9c15cae75c5c.nl.png)

1. Selecteer dit keer **Surface Laptop 13** als apparaat en voer geen opmerking in.

![Apparaat selecteren](../../../../../translated_images/9.4_13_SelectDevice.d9ad15d17de3f06fd948bd529f116f7c05bedf79c016180d8a1dd7e378322b0e.nl.png)

1. **Dien** de aanvraag in door de knop **Aanvraag indienen** te selecteren.

![Aanvraag indienen](../../../../../translated_images/9.4_14_SubmitRequest.a783ad8460bfb4485cfd2e97db2c065d9d6bf803279e3bd1569fe3e93548a578.nl.png)

1. Dit keer toont de e-mail die je in je inbox ontvangt **Geen** als opmerking.

![E-mail ontvangen](../../../../../translated_images/9.4_15_ReviewEmailMessage.137f35152c9da4b4a02bebec5f0cc9e55cfa25679770ace003aa19482ed0f3eb.nl.png)

#### 9.4.3 Vraag geen apparaat aan

Laten we het laatste scenario testen waarin geen apparaat wordt aangevraagd en het onderwerp **Afscheid** wordt geactiveerd volgens de instructies van de agent.

1. Herhaal dezelfde stappen:

    - **Vernieuw** het testpaneel en selecteer het **activiteitskaart**-icoon
    - Voer het bericht in, `Ik heb een laptop nodig`
    - Reageer dit keer met `Nee` op de vraag of je een apparaat wilt aanvragen

![Agent testen](../../../../../translated_images/9.4_16_TestAgent_RequestDevice_No.85f205968f1d4083f20cc890a707748f8e06c01a19536cd299a13bdde2350de7.nl.png)

1. De agent activeert het onderwerp **Afscheid** en de vraag zoals gedefinieerd in het onderwerp wordt gesteld.

![Afscheid onderwerp geactiveerd](../../../../../translated_images/9.4_17_Goodbye.05ee598a987237e02866647a9699b0efa7ac58d1f448497f956af2ee815cb961.nl.png)

## ✅ Missie Voltooid

Gefeliciteerd! 👏🏻 Je hebt geleerd hoe je je agentflow kunt bouwen en deze kunt toevoegen aan ons bestaande onderwerp **Apparaat aanvragen**, en hoe je de agent kunt doorverwijzen naar een ander onderwerp.

Dit is het einde van **Lab 09 - Voeg een agentflow toe voor automatisering en verbeter de mogelijkheden van onderwerpen**, selecteer de onderstaande link om door te gaan naar de volgende les. We zullen de use case in dit lab uitbreiden in de lab van de volgende les.

⏭️ [Ga naar **Triggers voor evenementen toevoegen - Autonome agentmogelijkheden inschakelen** les](../10-add-event-triggers/README.md)

## 📚 Tactische Bronnen

🔗 [Agentflows introduceren: Automatisering transformeren met AI-first workflows](https://www.microsoft.com/microsoft-copilot/blog/copilot-studio/introducing-agent-flows-transforming-automation-with-ai-first-workflows/)

🔗 [Overzicht van agentflows](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview?WT.mc_id=power-172621-ebenitez)

🔗 [Gebruik agentflows met je agent](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-172621-ebenitez)

🔗 [Lijst van functies in de referentiegids](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez)

📺 [Agent Flows in Copilot Studio](https://www.youtube.com/watch?v=VJTKyk3Pr7s)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/09-add-an-agent-flow" alt="Analytics" />

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.