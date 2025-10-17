<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c04b3587170139bc23e3b5cfc24c89ac",
  "translation_date": "2025-10-17T01:19:33+00:00",
  "source_file": "docs/recruit/07-add-new-topic-with-trigger/README.md",
  "language_code": "nl"
}
-->
# 🚨 Missie 07: Voeg een nieuw onderwerp toe met triggers en knooppunten

## 🕵️‍♂️ CODENAAM: `OPERATIE BLIJF BIJ HET ONDERWERP`

> **⏱️ Operatietijdvenster:** `~60 minuten`

🎥 **Bekijk de walkthrough**

[![Trigger video thumbnail](../../../../../translated_images/video-thumbnail.a84cf7cb473be282861469420c5e2c16adb53bcfd64c7c07fbd579e8d32bf8b2.nl.jpg)](https://www.youtube.com/watch?v=7iPAZaA8nJs "Bekijk de walkthrough op YouTube")

## 🎯 Missieoverzicht

Je hebt een agent gebouwd. Hij luistert, leert en beantwoordt vragen - maar nu is het tijd om tactischer te worden. In deze missie duik je diep onder de motorkap en leer je je agent hoe hij met precisie op specifieke prompts kan reageren.

Met Onderwerpen en Triggers kan je agent:

- Intentie herkennen

- Gesprekken sturen met logica

- Variabelen verzamelen en opslaan

- Flows activeren en actie ondernemen

Je bouwt niet alleen een dialoog, je geeft je agent een beslissingscentrum. Welkom bij de Neurale Nexus.

## 🔎 Doelstellingen

In deze missie leer je:

1. Begrijpen wat onderwerpen zijn en hun rol in het creëren van gestructureerde gesprekken voor je agent
1. De anatomie van onderwerpen leren, inclusief triggerzinnen en gespreksknooppunten
1. Verschillende soorten gespreksknooppunten verkennen en Power Fx gebruiken voor dynamische logica
1. Aangepaste onderwerpen vanaf nul maken om specifieke gebruikersverzoeken en taken af te handelen
1. Een functioneel onderwerp bouwen dat verbinding maakt met SharePoint-data via connectors en tools

## 🤔 Wat is een onderwerp?

Een onderwerp is een gestructureerd gesprek dat je agent helpt om te reageren op specifieke gebruikersvragen of -taken. Denk aan een onderwerp als een mini-gesprek of taak die je agent kan afhandelen. Elk onderwerp is ontworpen om te reageren op een specifieke gebruikersvraag of -verzoek.

### 🌌 Doel van een onderwerp

Er zijn drie veelvoorkomende doelen voor onderwerpen gebaseerd op wat gebruikers nodig hebben:

**Informatief** - beantwoordt vragen zoals:

- `Wat is …?`
- `Wanneer zal …?`
- `Waarom …?`
- `Kun je me vertellen …?`

**Taakuitvoering** - helpt gebruikers iets _te doen_:

- `"Ik wil …"`
- `"Hoe doe ik …?"`
- `"Ik heb nodig …?"`

**Probleemoplossing** - lost problemen op:

- `Er werkt iets niet …`
- `Ik krijg een foutmelding …`
- `Ik zie iets onverwachts …?`

Je kunt ook onderwerpen maken voor vage vragen zoals `Ik heb hulp nodig`, waarbij gebruikers om meer details wordt gevraagd voordat je verder gaat.

## 🐦 Waarom zijn onderwerpen nuttig?

Onderwerpen helpen je:

- De kennis van je agent organiseren.

- Gesprekken natuurlijk laten aanvoelen.

- Gebruikersproblemen effectief oplossen.

## 🪺 Soorten onderwerpen

1. **Systeemonderwerpen** - deze zijn ingebouwd en behandelen veelvoorkomende gebeurtenissen zoals:
    - Een gesprek starten
    - Een gesprek beëindigen
    - Fouten afhandelen
    - Gebruikers vragen om in te loggen
    - Escaleren naar een menselijke agent

1. **Aangepaste onderwerpen** - deze maak je om specifieke taken of vragen af te handelen zoals:
    - Verlofaanvraag van werknemers
    - Verzoek om een nieuw of vervangend apparaat

![Soorten onderwerpen](../../../../../translated_images/7.0_01_Topics.6e55d2e01c1cc0994b7af05be3c1629b78d46b37cc82f59c7893d4ad90af707e.nl.png)

## 🧬 Anatomie van een onderwerp

Elk onderwerp bevat meestal het volgende.

### 🗣️ Triggerzinnen

Dit zijn woorden of zinnen die gebruikers kunnen zeggen om het onderwerp te starten.

**Voorbeelden:**

Voor een verlofaanvraagonderwerp kunnen triggerzinnen zijn:

- `Ik wil vakantieverlof aanvragen`
- `Verzoek vakantie`
- `Verlof aanvragen`
- `Hoe dien ik een verlofaanvraag in?`

Voor een apparaatverzoekonderwerp kunnen triggerzinnen zijn:

- `Ik heb een nieuw apparaat nodig`
- `Kan ik een apparaat aanvragen?`
- `Kun je me helpen met een apparaatverzoek`

### 💬 Gespreksknooppunten

Een onderwerp bestaat uit knooppunten die stappen zijn die de agent volgt zodra het onderwerp wordt geactiveerd. Je verbindt deze stappen om een gespreksflow te bouwen die je agent volgt bij interactie met gebruikers.

Denk aan deze stappen als instructies of acties zoals:

- De gebruiker vragen stellen
- Berichten verzenden
- Een externe service aanroepen, zoals een verlofbeheersysteem
- Variabelen instellen of controleren
- Voorwaarden gebruiken om het gesprek te splitsen
- Doorverwijzen naar een ander onderwerp

![Gespreksknooppunten](../../../../../translated_images/7.0_03_ConversationNodes.7b1d93b7d4522d544d7f9eed597a5ef30b9f96ee1670efd048528ce13423481a.nl.png)

De volgende zijn de belangrijkste soorten knooppunten die je aan een agent kunt toevoegen:

#### Een bericht verzenden

- **Doel** - stuurt een bericht naar de gebruiker.
- **Voorbeeld** - `Bedankt voor je verzoek! Ik help je daarmee.`

Dit knooppunt laat je agent berichten naar gebruikers sturen, die eenvoudige tekst of rijke inhoud zoals afbeeldingen, video's, kaarten, snelle antwoorden en adaptieve kaarten kunnen zijn.

Je kunt berichten personaliseren met variabelen, meerdere berichtvariaties toevoegen voor afwisseling en zelfs spraakuitvoer aanpassen voor spraakgestuurde kanalen.

!!! tip
    Zie het als een "zeg iets"-blok dat je agent helpt om duidelijk en interactief met gebruikers te communiceren.

#### Een vraag stellen

- **Doel** - stelt de gebruiker een vraag en wacht op hun antwoord.
- **Voorbeeld** - `Wat zijn je vakantiedata?`

Dit knooppunt wordt gebruikt om gebruikers om specifieke informatie te vragen tijdens een gesprek en hun antwoorden op te slaan in variabelen voor later gebruik.

Je kunt het type vraag aanpassen, zoals tekstinvoer, of entiteiten gebruiken voor een gedefinieerde lijst van waarden waaruit een gebruiker kan kiezen, en definiëren hoe de agent moet reageren als de gebruiker een ongeldig antwoord geeft of de vraag overslaat.

Het ondersteunt ook rijke inhoud zoals afbeeldingen en snelle antwoorden, en stelt je in staat om validatie, herhaling en onderbrekingsinstellingen fijn af te stemmen om de gespreksflow soepel te laten verlopen.

!!! tip
    Zie het als een "vraag en luister"-blok dat je agent helpt om op een gestructureerde manier met gebruikers te communiceren.

#### Vraag met adaptieve kaart

- **Doel** - verstuurt een rijke, interactieve kaart met behulp van JSON.
- **Voorbeeld** - een kaart die een kalenderdatumkiezer weergeeft voor een gebruiker om een datum te selecteren.

Dit knooppunt toont rijke, interactieve kaarten die gebruikers kunnen invullen en indienen, zoals formulieren met tekstvakken, knoppen en afbeeldingen. Het legt de invoer van de gebruiker vast en slaat deze op in variabelen, die je agent later in het gesprek kan gebruiken.

!!! tip
    Zie het als een aanpasbaar "formulierbouwer"-blok dat je agent boeiender maakt en in staat stelt om gedetailleerde informatie van gebruikers te verzamelen.

#### Een voorwaarde toevoegen

- **Doel** - voegt logica toe aan het gesprek. Het controleert iets en beslist wat er vervolgens moet gebeuren.
- **Voorbeeld** - als de gebruiker `Ja` zegt, ga naar de volgende stap. Als `Nee`, beëindig het gesprek.

Dit knooppunt creëert beslissingspunten in de gespreksflow van je agent door te controleren of een variabele aan bepaalde criteria voldoet. Afhankelijk van of de voorwaarde waar of onwaar is, volgt de agent verschillende paden.

!!! tip
    Zie het als een "als-dan"-blok dat je agent helpt beslissingen te nemen op basis van gebruikersinvoer of opgeslagen gegevens in variabelen.

#### Variabelenbeheer

- **Doel** - slaat informatie op of wist deze (variabelen genoemd) tijdens het gesprek.
- **Voorbeeld** - slaat de datum op die de gebruiker heeft geselecteerd in het Vraag een vraag-knooppunt dat een adaptieve kaart weergeeft.

Dit knooppunt laat je informatie opslaan en beheren tijdens een gesprek, zoals de naam, het antwoord of de voorkeuren van een gebruiker. Je kunt verschillende soorten variabelen gebruiken, zoals tekst, nummers of datums, en ze kunnen beperkt zijn tot één onderwerp, gedeeld worden tussen onderwerpen (globaal), of zelfs worden opgehaald uit het systeem of de omgeving.

!!! tip
    Zie het als een "geheugenbox" die je agent helpt om informatie te onthouden en te gebruiken terwijl het gesprek met de gebruiker doorgaat.

#### Onderwerpbeheer

- **Doel** - verplaatst het gesprek naar een ander onderwerp of stap binnen het onderwerp, draagt het gesprek over, of beëindigt het onderwerp of gesprek.
- **Voorbeeld** - doorverwijzen naar een "Verlofbeleid"-onderwerp.

Dit knooppunt stelt je agent in staat om van het ene onderwerp naar het andere te springen zonder het gesprek opnieuw te starten, het onderwerp te beëindigen, het gesprek over te dragen of te beëindigen, of naar een andere stap binnen hetzelfde onderwerp te gaan. Het helpt gebruikers door verschillende delen van de gespreksflow te navigeren door soepel tussen onderwerpen te schakelen, en je kunt variabelen tussen hen doorgeven om de context te behouden.

!!! tip
    Zie het als een "ga naar een andere sectie/stap"-blok dat je agent helpt flexibel te zijn in het chatten met gebruikers.

#### Een tool toevoegen

- **Doel** - verbindt met tools zoals connectors, agentflows, prompts, aangepaste zoekopdrachten, zoekquery's, vaardigheden, modelcontextprotocol.
- **Voorbeeld** - Agentflow uitgevoerd nadat de gebruiker zijn vakantieverlofaanvraag heeft ingediend.

Dit knooppunt geeft je agent de mogelijkheid om te communiceren met externe systemen of specifieke taken uit te voeren, zoals e-mails verzenden, het weer controleren of toegang krijgen tot databases. Je kunt tools toevoegen met ingebouwde connectors, aangepaste API's, agentflows, prompts, of verbinding maken met Model Context Protocol (MCP)-servers, en zelfs _grafische gebruikersinterface_-automatisering voor desktop-apps via de computergebruiktool.

!!! tip
    Zie tools als "actieblokken" die je agent superkrachten geven om dingen te doen buiten _chatten_, zoals een API aanroepen, een proces uitvoeren of automatisch gebruikersinvoer verzamelen.

#### Generatief antwoord-knooppunt

- **Doel** - gebruikt een groot taalmodel om natuurlijke, mensachtige antwoorden te genereren op basis van de vraag van de gebruiker en eventuele gekoppelde gegevens.
- **Voorbeeld** - gebruikt de gekoppelde kennisbron die informatie bevat over vakantieverlofrechten om vragen van gebruikers over vakantieaanvragen te beantwoorden.

Dit knooppunt stelt je agent in staat om te reageren op gebruikersvragen met informatie uit verschillende kennisbronnen, zoals websites, documenten, SharePoint of aangepaste gegevens. Het kan worden gebruikt als een back-up wanneer er geen overeenkomend onderwerp wordt gevonden, of binnen een onderwerp om meer gedetailleerde, dynamische antwoorden te geven op basis van specifieke bronnen die je hebt geconfigureerd voor je agent.

!!! tip
    Zie het als een "slim antwoordblok" dat je agent helpt om nuttige, nauwkeurige antwoorden te geven door te zoeken in betrouwbare inhoud die je definieert.

#### HTTP-verzoekknooppunt

- **Doel** - verbindt je agent met externe systemen door API-aanroepen te verzenden (bijvoorbeeld `GET` of `POST`) om gegevens op te halen of bij te werken.
- **Voorbeeld** - wanneer een gebruiker vraagt naar zijn saldo van vakantiedagen, voert de agent een `GET`-verzoek uit naar het verlofbeheersysteem, haalt de `remainingLeaveDays` op uit de API-reactie en antwoordt de gebruiker met de waarde.

Dit knooppunt laat je agent verbinding maken met externe systemen door REST API-aanroepen te verzenden, zoals `GET`- of `POST`-verzoeken. Je kunt het verzoek aanpassen met headers, inhoud van de body en zelfs Power Fx gebruiken om dynamische gegevens op te nemen, en vervolgens de reactie opslaan in variabelen voor later gebruik in het gesprek.

!!! tip
    Zie het als een "informatie ophalen"-blok dat je agent helpt om met andere diensten te communiceren, zoals gebruikersgegevens ophalen of gegevens naar een ander systeem verzenden.

#### Een gebeurtenis verzenden

- **Doel** - laat je agent niet-berichtacties verzenden, zoals systeemupdates of tooltriggers - naar de client of het kanaal, zodat het taken kan uitvoeren.
- **Voorbeeld** - reageren op een gebruiker die een chat binnenkomt door een welkomstbericht weer te geven.

Dit knooppunt laat je agent niet-berichtacties verzenden naar externe systemen of kanalen, die vervolgens kunnen beslissen hoe ze moeten reageren. Je geeft elke gebeurtenis een naam en voegt een waarde toe, die een eenvoudig nummer of tekst, een variabele of een Power Fx-formule kan zijn, en deze wordt verzonden als een JSON-object.

!!! tip
    Zie het als een "stille trigger"-blok dat je agent helpt dingen achter de schermen te doen of te communiceren met externe tools zonder dat een gebruiker iets hoeft te zeggen.

## 🏋🏻‍♀️ Power Fx gebruiken in je knooppunten

In Copilot Studio is Power Fx een low-code programmeertaal die wordt gebruikt om logica en dynamisch gedrag aan je agent toe te voegen. Het is dezelfde taal die wordt gebruikt in Microsoft Power Apps en is ontworpen om eenvoudig en Excel-achtig te zijn, waardoor het gemakkelijk is voor ontwikkelaars en niet-ontwikkelaars.

![Power Fx expressie](../../../../../translated_images/7.3_13_EnterFormula.d17cc9f73e01e1cab8e2420a55bcb726ae0a0e55673f81ee3d7fe12d20148b92.nl.png)

### Wat Power Fx kan doen in onderwerpen

- Variabelen instellen en manipuleren
      - Voorbeeld: `Set(userName, "Adele Vance")`
- Voorwaarden maken
      - Voorbeeld: `If(score > 80, "Geslaagd", "Gezakt")`
- Gegevens formatteren en transformeren
      - Voorbeeld: `Text(DateValue, "dd/mm/yyyy")`

### Waarom Power Fx gebruiken?

- **Flexibel:** je kunt logica bouwen zonder volledige regels code te schrijven.

- **Vertrouwd:** als je Excel-formules hebt gebruikt, voelt het heel vergelijkbaar.

- **Krachtig:** het laat je gesprekken personaliseren, invoer valideren en bepalen hoe je agent zich gedraagt op basis van gebruikersgegevens.

## 🏗️ Hoe maak en bewerk ik onderwerpen?

Er zijn twee manieren waarop je onderwerpen kunt maken en bewerken voor je agents.

### 1. Maak vanaf nul

Hiermee kun je aangepaste gespreksflows vanaf nul bouwen, en je kunt knooppunten toevoegen of verwijderen zoals nodig bij het bewerken van je onderwerp.

![Een onderwerp toevoegen](../../../../../translated_images/7.0_04_AddATopic.111df124a4a7ff8b41e3f577fbef08885ac52d9d6c0c705a82f5968e5ccc384d.nl.png)

#### Waarom dit nuttig is

- Het geeft je volledige controle over hoe je agent reageert.
- Je kunt logica aanpassen met variabelen, Power Fx en voorwaarden.
- Het is perfect voor het bouwen van op maat gemaakte ervaringen voor specifieke zakelijke behoeften.

### 2. Maak met Copilot
Hiermee kun je beschrijven wat je wilt met behulp van natuurlijke taal, en Copilot bouwt het gesprek voor je. Hetzelfde geldt voor het bewerken van je onderwerp; gebruik natuurlijke taal en Copilot zal het onderwerp voor je beoordelen en aanpassen.

#### Wat Copilot ondersteunt

- Kan maken en bewerken:
      - Berichtknooppunten
      - Vraagknooppunten
      - Voorwaardelijke knooppunten
- Ondersteunt geen geavanceerde instellingen zoals hoe de gebruiker opnieuw te vragen als ze niet reageren of hoe onderbrekingen tijdens een vraag te beheren. Je kunt deze instellingen nog steeds handmatig aanpassen indien nodig.

#### Waarom dit handig is

- Versnelt de ontwikkeling met AI-assistentie.
- Laat je focussen op logica en gebruikerservaring in plaats van repetitieve instellingen.
- Maakt het eenvoudiger om gesprekstromen te verbeteren en aan te passen met minimale inspanning.

#### ✨ Voorbeelden van prompts

- **Een onderwerp maken**
      - `Accepteer de naam, leeftijd en geboortedatum van een gebruiker en herhaal vervolgens hun antwoorden terug naar hen`
      - `Verzamel het adres, de staat en de postcode van een gebruiker. De gebruiker moet elke vraag tot 4 keer opnieuw kunnen proberen`

- **Een onderwerp bewerken**
      - `Voeg een vraag toe waarin wordt gevraagd naar de geboortedatum van de gebruiker`
      - `Vat verzamelde informatie samen in een Adaptive Card.`

## 👩🏻‍🎨 Oké, hoe ontwerp ik onderwerpen voor mijn agent?

### 🧙🏻‍♂️ Stap 1 - Begrijp wat gebruikers nodig hebben

Begin met het identificeren van veelgestelde vragen of taken die gebruikers aan je agent zullen stellen. Dit kunnen zijn:

- Vragen die gebruikers vaak stellen, zoals: `Wat is mijn recht op ziektedagen?`
- Veelvoorkomende taken die gebruikers willen voltooien, zoals het indienen van een formulier
- Problemen die gebruikers vaak tegenkomen, zoals inlogproblemen

### 📦 Stap 2 - Groepeer de scenario's

Organiseer de behoeften van gebruikers in drie categorieën op basis van wat we eerder hebben geleerd - het doel van een onderwerp:

- Informatief - de gebruiker wil iets weten
- Taakuitvoering - de gebruiker wil iets doen
- Probleemoplossing - de gebruiker heeft hulp nodig bij het oplossen van een probleem

### 🗺️ Stap 3 - Breng het gesprek in kaart

Schets een eenvoudige gesprekstroom van hoe de agent zou moeten reageren:

- Begin met een begroeting of bevestiging
- Stel vervolgvragen om details te verzamelen
- Geef antwoorden of voer acties uit

!!! tip
    Houd het gesprek kort en gefocust. Vraag alleen wat nodig is.

### 🔀 Stap 4 - Behandel verschillende gesprekstypen

Ontwerp voor zowel:

- **Single-turn** - één vraag, één antwoord

- **Multi-turn** - een heen-en-weer gesprek met vervolgvragen

Voorbeeld:

- Gebruiker: `Ik wil verlof aanvragen.`

- Agent: `Natuurlijk! Op welke datum wil je dat je verlof begint?`

- Gebruiker: `15 juli`

- Agent: `Begrepen. En wanneer eindigt je verlof?`

- Gebruiker: `22 juli.`

- Agent: `Bedankt! Wat is de reden voor je verlof?`

- Gebruiker: `Familievakantie.`

- Agent: `Bedankt voor de details. Ik heb je verlofaanvraag van 15 juli tot 22 juli voor een familievakantie ingediend. Je ontvangt binnenkort een bevestiging.`

### 🤖 Stap 5 - Gebruik AI voor onverwachte vragen

Zelfs als je een onderwerp hebt ontworpen voor verlofaanvragen, kunnen gebruikers vragen stellen die niet direct worden behandeld. Hier komt de AI-functie zoals het _Conversational boosting_ systeemonderwerp van pas.

Dit onderwerp bevat een generatief antwoordknooppunt, waarmee je agent direct gebruik kan maken van verbonden kennisbronnen. Alle kennisbronnen die op agentniveau zijn toegevoegd, worden automatisch opgenomen in het generatieve antwoordknooppunt binnen het _Conversational boosting_ systeemonderwerp.

#### Voorbeeld

- Gebruiker: `Kan ik ongebruikte vakantiedagen meenemen naar volgend jaar?`

Deze vraag maakt mogelijk geen deel uit van je vooraf gedefinieerde onderwerpstroom, vooral als je onderwerp alleen verlofaanvragen behandelt.

#### Hoe AI helpt

Als je agent is verbonden met de HR-beleidsdocumenten of interne website van je bedrijf, kan AI:

- Zoeken naar het relevante verlofbeleid
- De regels begrijpen en samenvatten
- Agent reageert met: `Volgens het HR-beleid kun je ongebruikte vakantiedagen meenemen naar het volgende kalenderjaar. Voor meer details, bekijk de sectie verlofbeleid op het HR-portaal.`

#### Waarom dit handig is

- Je hoeft niet handmatig een onderwerp te maken voor elke beleidsgerelateerde vraag.
- AI kan nauwkeurige antwoorden halen uit vertrouwde kennisbronnen.
- Het verbetert de gebruikerservaring door de agent slimmer en responsiever te maken.

### 🔬 Stap 6 - Test het onderwerp, de gesprekstroom

Voordat je je onderwerp publiceert:

- Test met echte vragen of echte voorbeeldinvoer.
- Zorg ervoor dat het natuurlijk en behulpzaam klinkt.

!!! tip
    Pas verbeteringen toe op je onderwerp terwijl je test, zoals het toevoegen van meer knooppunten of het verwijderen van knooppunten ten gunste van doorverwijzing naar een ander onderwerp.

### ⚠️ Stap 7 - Vermijd duplicatie van website-inhoud

Kopieer niet wat al op je website staat.

- Focus op onderwerpen waar gebruikers vaak naar vragen.
- Voeg nieuwe onderwerpen toe op basis van chatgeschiedenis of ondersteuningsverzoeken.

### ✨ Voorbeeld van gesprekstroom

Hieronder staat een voorbeeld van een onderwerp dat verlofaanvragen behandelt.

#### Stap 1: Triggerzin

Gebruiker typt,

`Ik wil vakantieverlof aanvragen`

#### Stap 2: Agent vraagt om details met behulp van een Adaptive Card

Agent vraagt,

`Natuurlijk! Welke data wil je vrij nemen?`

Adaptive Card heeft een startdatum en einddatum kalenderkiezer.

#### Stap 3: Gebruiker geeft data op

Gebruiker selecteert startdatum als 5 augustus 2025 en einddatum als 10 augustus 2025, en dient de kaart in. Datumwaarden worden opgeslagen in de uitvoer van de Adaptive Card als variabelen.

#### Stap 4: Cloudflow uitgevoerd

Een Power Automate cloudflow is uitgevoerd die een nieuwe aanvraag in het verlofbeheersysteem aanmaakt en een e-mail stuurt om de manager te informeren over de verlofaanvraag.

#### Stap 5: Stuur een bevestigingsbericht naar de gebruiker

Agent reageert met,

`Je vakantieverlofaanvraag van 5 augustus tot 10 augustus is ingediend. Je manager zal dit beoordelen en binnenkort contact met je opnemen.`

## 🧪 Lab 07 - Voeg een nieuw onderwerp toe met gespreksknooppunten

We gaan nu leren hoe je een nieuw onderwerp toevoegt met een trigger en tools. In deze lab behandelen we het maken van een onderwerp vanaf nul, zodat je begrijpt hoe je onderwerpen kunt aanpassen aan je behoeften.

- [7.1 Voeg een nieuw onderwerp toe vanaf nul](../../../../../docs/recruit/07-add-new-topic-with-trigger)
- [7.2 Definieer de triggerinputs en -outputs](../../../../../docs/recruit/07-add-new-topic-with-trigger)
- [7.3 Voeg een tool toe met een connector](../../../../../docs/recruit/07-add-new-topic-with-trigger)

### ✨ Gebruiksscenario

**Als** medewerker

**Wil ik** weten welke apparaten beschikbaar zijn

**Zodat ik** een lijst heb van beschikbare apparaten

Laten we beginnen!

### Vereisten

1. **SharePoint-lijst**

    We gebruiken de **Apparaten** SharePoint-lijst van [Les 00 - Cursusinstelling - Stap 3: Maak een nieuwe SharePoint-site](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Als je de **Apparaten** SharePoint-lijst nog niet hebt ingesteld, ga dan terug naar [Les 00 - Cursusinstelling - Stap 3: Maak een nieuwe SharePoint-site](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. **Contoso Helpdesk Agent**

    We gaan dezelfde agent gebruiken die eerder is gemaakt in [Les 06 - Maak een aangepaste agent met natuurlijke taal met Copilot en verbind deze met je data](../06-create-agent-from-conversation/README.md).

### 7.1 Voeg een nieuw onderwerp toe vanaf nul

1. Selecteer het **Tabblad Onderwerpen** naast de naam van de agent. Als je het niet zichtbaar ziet, selecteer **+6** en je ziet **Onderwerpen** vermeld.

    ![Selecteer Onderwerpen](../../../../../translated_images/7.1_01_Topics.789ffa4f75830b5f25fb1eeb8fa3e8ba3810b95870cb3dc49d80d8f4ba15a00a.nl.png)

1. Het **Tabblad Onderwerpen** wordt geladen en standaard worden de _Aangepaste_ onderwerpen weergegeven. Je kunt onderwerpen filteren op Alles, Aangepast en Systeem. De aangepaste en systeemonderwerpen die je momenteel ziet, zijn automatisch gemaakt toen de agent werd ingericht.

    Selecteer **+ Voeg een onderwerp toe** en selecteer **Vanaf nul**.

    ![Maak onderwerp vanaf nul](../../../../../translated_images/7.1_02_FromBlank.f3fe83fad24825f8eb498b19af8e472810f657868613b96b3b4e033fa1042e75.nl.png)

1. Voer een naam in voor het onderwerp. Kopieer en plak het volgende.

    ```text
    Available devices
    ```

    ![Geef het onderwerp een naam](../../../../../translated_images/7.1_03_TopicName.06eb34ebe94516c1d898b5dff183f9586f7526f9316bc122dca641ac29967966.nl.png)

1. Voer een triggerbeschrijving in die beschrijft wat het onderwerp doet. Kopieer en plak het volgende.

    ```text
    This topic helps users find devices that are available from our SharePoint Devices list. User can ask to see available devices and it will return a list of devices that are available which can include laptops, smartphones, accessories and more.
    ```

    ![Voer een naam en beschrijving in voor de trigger](../../../../../translated_images/7.1_04_TriggerDescription.cb748c0358b3af249fcc0fdb0b262185ffed14d8cf628186b8a65ad4bbf14172.nl.png)

### 7.2 Definieer de triggerinputs en -outputs

1. Vervolgens gaan we een nieuwe invoervariabele toevoegen die generatieve AI zal gebruiken in zijn orkestratie om de waarde van het apparaattype uit het bericht van een gebruiker te halen. Selecteer de **Meer ellipsen (...)** in het onderwerp en selecteer **Details** om het detailvenster van het onderwerp te bekijken.

    ![Selecteer Onderwerpdetails](../../../../../translated_images/7.2_01_SelectTopicDetails.cc1b97a86718e101084c366514cc306fe82243a014a44c579394e0f70ba5ca53.nl.png)

1. Het **Detailvenster van het onderwerp** is nu geladen. Selecteer het **Invoer**-tabblad.

    ![Invoer-tabblad](../../../../../translated_images/7.2_02_SelectInputTab.d0b900eb02a8f982324f59e3b7aca34c2cdba78263acdc9301225e1c3e6338b6.nl.png)

1. Selecteer **Maak een nieuwe variabele**.

    ![Maak een nieuwe invoervariabele](../../../../../translated_images/7.2_03_CreateANewVariable.0d45780268d9b6250617c45a9ddd557cdaa23945b66539b313ca8d74f2c96cc2.nl.png)

1. Voer een naam in voor de variabele. Kopieer en plak het volgende.

    ```text
    VarDeviceType
    ```

    ![Naam invoervariabele](../../../../../translated_images/7.2_04_VariableName.56555922eab13cad52fa29d846f4e515d82c2e9bf61c86705f080a1ba4f3b1af.nl.png)

1. We moeten nu onze invoer- en uitvoervariabelen definiëren. De volgende eigenschappen kunnen worden gedefinieerd voor onderwerpinputs en -outputs.

    | Veld    | Waarde |
    | ---------- | :--------- |
    | Hoe vult de agent deze invoer? | Bepaalt hoe de agent deze variabele vult met een waarde voordat het onderwerp wordt uitgevoerd. Standaard is ingesteld op _Dynamisch vullen met de beste optie_. Anders kun je een invoer overschrijven met een waarde in plaats van de gebruiker te vragen |
    | Variabele datatype  | Het datatype van de variabele. Ondersteunde datatypes zijn `String`, `Boolean`, `Number`, `Date`, `DateTime`, `DateTimeNoTimeZone`, `Time`, `Record`, `Table`, `Unspecified`, `From sample data` |
    | Weergavenaam   | Naam van variabele   |
    | Identificeer als  | Entiteitstype voor de agent om de juiste waarde te vangen  |
    | Beschrijving    | De beschrijving helpt de agent automatisch inputs te vullen voordat het onderwerp wordt uitgevoerd of vragen te genereren om naar de waarden te vragen   |

    De _Hoe vult de agent deze invoer?_, _Variabele datatype_ en _Weergavenaam_ kunnen blijven zoals ze zijn. Werk de eigenschap **Identificeer als** bij naar **Volledige reactie van gebruiker**.

    ![Werk Identificeer als bij](../../../../../translated_images/7.2_05_IdentifyAs.a502101e6f60c27ed8c8b1eff049b8ceedd0531845b932f9b7608ad3d8220090.nl.png)

1. Kopieer en plak het volgende als de beschrijving.

    ```text
    List of possible values: Laptop, Desktop, Smartphone
    ```

    ![Beschrijving](../../../../../translated_images/7.2_06_InputDescription.844e1776080e595c6c221bcc33d7a269abcc7e4755c8f11b284c3950f42166b5.nl.png)

1. Laten we vervolgens onze uitvoer voor het onderwerp definiëren. Selecteer het **Uitvoer**-tabblad.

    ![Selecteer Uitvoer-tabblad](../../../../../translated_images/7.2_07_SelectOutputTab.ab5aa0a2f385f1492df5a67f8f2cbed752dc0258c1e1ddb9928d204405ec403a.nl.png)

1. Selecteer **Maak een nieuwe variabele**.

    ![Maak een nieuwe uitvoervariabele](../../../../../translated_images/7.2_08_CreateANewVariable.5518205f121014ff4757af062bedfd38ce768c8f38291dd9d6489d67cd5d5dc8.nl.png)

1. Werk de volgende eigenschappen bij.

    **Variabelenaam** - Kopieer en plak het volgende.

    ```text
    VarAvailableDevices
    ```

    **Variabele datatype** - Selecteer **Tabel** als datatype.

    **Variabele beschrijving** - Kopieer en plak het volgende.

    ```text
    List of available devices by device type
    ```

    ![Uitvoereigenschappen](../../../../../translated_images/7.2_09_OutputVariable.fb0e159fbad5052280040090352c50faf4d91228095c3762e75440b2842e0d29.nl.png)

1. We hebben nu de inputs en outputs van het onderwerp gedefinieerd. Selecteer het **X-icoon** om te sluiten vanuit het **Detailvenster van het onderwerp**.

    ![Sluit het detailvenster van het onderwerp.](../../../../../translated_images/7.2_10_ExitTopicDetailsPane.6e8981434f04049bef7ab93f9545ee433087e1c99cdfe27b355ee9858ddfde99.nl.png)

### 7.3 Voeg een tool toe met een connector

1. Laten we vervolgens een knooppunt toevoegen waarmee de agent de lijst met apparaten uit de **Apparaten** SharePoint-lijst kan ophalen. Selecteer het **+ icoon** onder de trigger.

    ![Voeg een tool toe](../../../../../translated_images/7.3_01_AddNode.4656328835f7a28bc5f66c440d620a0990bf098e858619ff2c32a9b14fae7c4f.nl.png)

1. Selecteer het **Voeg een tool toe**-knooppunt en selecteer vervolgens het **Connector**-tabblad. Zoek naar `Get items` en selecteer de **Get items** SharePoint-connectoractie.

    ![Selecteer get items](../../../../../translated_images/7.3_02_GetItems.a6bdfb122449de789e7c58592f4c3e3a0f38b7bdcec2e0e5eab34b2d9d991f97.nl.png)

1. Er moet een nieuwe verbinding worden gemaakt voor de connector. Selecteer het **chevron**-icoon en selecteer **Maak nieuwe verbinding**.

    ![Voeg een tool toe](../../../../../translated_images/7.3_03_CreateNewConnection.03f49fab97e5f5f2a298e4b1b2e5081304c9c98c5f3ad5be0302c241c3d83d94.nl.png)

1. Er worden twee opties weergegeven waarmee je direct verbinding kunt maken met SharePoint Online of met een on-premises SharePoint. Standaard is de optie **Direct verbinden (cloud-services)** geselecteerd, wat we zullen gebruiken voor onze verbinding.
Selecteer **Maken**.

![Selecteer Maken](../../../../../translated_images/7.3_04_SelectCreate.f2216f1e276ed153e06d5b5d47f170a0f9cc6854aa05f0736623acb3aeee1229.nl.png)

1. Selecteer je ingelogde gebruikersaccount.

![Selecteer ingelogde gebruikersaccount](../../../../../translated_images/7.3_05_SelectSignedInUserAccount.e27a0ada918a1cf4477f3966adcc5f1d033a8998a2589d02d1208f21f5d93938.nl.png)

1. Vervolgens moet je bevestigen dat je gebruikersaccount kan worden gebruikt voor de verbinding met de SharePoint-connector. Selecteer **Toegang toestaan**.

![Selecteer toegang toestaan](../../../../../translated_images/7.3_06_AllowAccess.69f012dbcedf7ebc1869e648a5eaa661d085b15aa7a2eb69e69c5b63adfa36dd.nl.png)

1. Selecteer **Verzenden** om de **Get items**-actie van de SharePoint-connector toe te voegen als een knooppunt aan het onderwerp.

![Verzenden](../../../../../translated_images/7.3_07_ConnectedSelectSubmit.16ec31ef062696cabb6e7964879debd177f2b9162f88ef95ae1b4eed85e08a21.nl.png)

1. De **Get items**-actie van de SharePoint-connector is nu toegevoegd aan het onderwerp. We kunnen nu beginnen met het configureren van de invoer van de actie. Selecteer het **ellipsis (...)-pictogram** en selecteer **Eigenschappen**.

![Selecteer Eigenschappen](../../../../../translated_images/7.3_08_GetItemsProperties.32bdda34a1d73a55eb2893695e4b4cf15cd899806e616d0b0b5015471414c9d7.nl.png)

1. Het configuratievenster van **Get items** verschijnt en standaard zie je het tabblad **Inputs**. Selecteer het tabblad **Initiatie** en voer een beschrijving in het veld **Gebruik Beschrijving** in. Kopieer en plak het volgende.

    ```text
    Retrieves devices from SharePoint list
    ```

> Dit komt van pas wanneer we de pagina _Beheer je verbindingen_ van onze agent bekijken. We komen hier zo op terug.

![Get items beschrijving](../../../../../translated_images/7.3_09_UpdateDescription.76a8d2ebddd4c3e4ca423daad7485afa60f31f37c97e16529d94e224f9709d60.nl.png)

1. Selecteer het tabblad **Inputs** en selecteer de **Contoso IT**-site en de **Devices**-lijst die je hebt ingesteld in [Les 00 - Cursusinstelling - Stap 3: Nieuwe SharePoint-site maken](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

![Configureer Get items invoer](../../../../../translated_images/7.3_10_GetItemsInputs.17f8689e660c480dd405ab2ab57db34dcd2b8e697ec09d54c8f8649eb619c58b.nl.png)

1. Om alleen apparaten weer te geven uit de SharePoint-lijst op basis van:
   - de geselecteerde waarde,
   - en alleen apparaten waarvan de status _Beschikbaar_ is,

moeten we een filter toepassen. Dit wordt bereikt door een filterquery in te voeren met behulp van Power Fx. Selecteer het **ellipsis (...)-pictogram**.

![Selecteer ellipsis-pictogram](../../../../../translated_images/7.3_11_SelectVariable.33bfe876cc230569ea0f6cc5e1efa100432509e44342e9b3d6a9e65ee2bc525f.nl.png)

1. Standaard bevind je je op het tabblad **Aangepast**. Selecteer het tabblad **Formule**.

![Selecteer Formule-tabblad](../../../../../translated_images/7.3_12_SelectFormula.a7aba25c95956d113865da3f30da3f3872e12c7a7a8f3c65098a3e3fac9616a4.nl.png)

1. Selecteer het **uitvouwpictogram** om het **Formule**-veld te vergroten. Kopieer en plak de volgende Power Fx-uitdrukking.

We gebruiken de functie `Concatenate` om een uitdrukking te maken die filtert:
   - de SharePoint-kolom **Status** is gelijk aan _Beschikbaar_,
   - en de SharePoint-kolom **Asset type** is gelijk aan _het geselecteerde apparaat van het vraagknooppunt_.

    ```text
    Concatenate("Status eq 'Available' and AssetType eq '", Topic.VarDeviceType, "'")
    ```

Selecteer **Invoegen**.

![Voer Power Fx-uitdrukking in en selecteer invoegen](../../../../../translated_images/7.3_13_EnterFormula.d17cc9f73e01e1cab8e2420a55bcb726ae0a0e55673f81ee3d7fe12d20148b92.nl.png)

1. De Power Fx-uitdrukking wordt nu toegepast in de Filter Query-invoerparameter van de **Get items**-actie. Selecteer vervolgens de **Alle items**-weergave in **Kolommen beperken op weergave**. Dit haalt alleen de kolommen in de lijst op op basis van de geselecteerde weergave.

![Lijstkolommen op weergave](../../../../../translated_images/7.3_14_LimitColumnsByView.5537126aaa087bd7f81cc35dfe182aa72cdbec4fe1fb5c2e15823a1275dcaa71.nl.png)

1. Vervolgens werken we de naam van de variabele voor de uitvoer bij. Selecteer het tabblad **Outputs** en selecteer de `GetItems`-variabele.

![Werk variabele bij](../../../../../translated_images/7.3_15_ConfigureOutputs.d4cb0c5c8e37d1859ed705bd1582fce2d063e7f4d65cc036127a846d743ff391.nl.png)

1. Werk de naam bij naar het volgende.

    ```text
    VarDevices
    ```

![Werk variabelenaam bij](../../../../../translated_images/7.3_16_RenameVariable.55d7adb355808d39fe515bf980af123c60e218fa427354079e86efc412dc0f83.nl.png)

1. Scroll naar beneden en selecteer in de sectie **Gebruik** de optie **Globaal**. Hierdoor wordt de variabele toegankelijk voor elk onderwerp.

![Werk bij naar globale variabele](../../../../../translated_images/7.3_17_UpdateToGlobalVariable.09bdb05c0938898a04e48b6bcebee1584f17080b63b2577594be74f9f77a5bc3.nl.png)

1. **Sluit** het **Variabele-eigenschappen**-venster.

![Sluit Variabele-eigenschappen-venster](../../../../../translated_images/7.3_18_ExitVariablePropertiesPane.b1a5e76dfe490bdf1274d8e8c78df44f9b3e3542180fa52fb6f903a980ef31ab.nl.png)

1. Selecteer het **plus +**-pictogram om een nieuw knooppunt in te voegen, selecteer **Variabelebeheer** en selecteer vervolgens **Stel een variabelewaarde in**.

![Voeg Stel een variabelewaarde in-knooppunt toe](../../../../../translated_images/7.3_19_AddSetAVariableValueNode.958d21c21727ef92506fe76cf0458f05ac8508d84d0a4917077d2889410330e2.nl.png)

1. Selecteer het **groter dan**-pictogram voor de invoerparameter **Stel variabele in**.

![Stel variabele in](../../../../../translated_images/7.3_20_SelectAVariable.9d3beb144002569b947c90cbec22afcc9cb34f277b21e3f65dcaf69831abc438.nl.png)

1. Selecteer de eerder gemaakte onderwerpuitvoer als de variabele, **VarAvailableDevices**.

![Sla onderwerp op](../../../../../translated_images/7.3_21_SelectVarAvailableDevicesOutput.8d7259eb6ce1bc7c89de10b768b62dc3008ad7468c094249282bfe66436d1672.nl.png)

1. Selecteer vervolgens het **ellipsis (...)-pictogram** om de waarde van de variabele te definiëren.

![Selecteer variabelewaarde](../../../../../translated_images/7.3_22_SelectVariable.f16319e644afc97d24a8cddaf64a7df9fcc52acd7e284b21f20b685a6e53887a.nl.png)

1. We gebruiken nu een PowerFx-uitdrukking om de variabelewaarde in te stellen als de `value`-eigenschap die wordt geretourneerd in de **Get items**-reactie, en maken de [scope van de variabele](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172618-ebenitez) globaal door het voorvoegsel `Global` toe te voegen.

Selecteer **Invoegen** en **sla** het onderwerp op.

![Power Fx-formule voor variabelewaarde](../../../../../translated_images/7.3_23_PowerFxFormula.f860daa2c8423021926f0697177279ede3d8d443714d471a77e655c3c42edb07.nl.png)

1. Vervolgens moeten we de instructies van de agent bijwerken. Selecteer het tabblad **Overzicht** en selecteer **Bewerken**.

![Bewerk instructies](../../../../../translated_images/7.3_24_EditInstructions.ce65a6cbcd74792885230af1da432fbb4079fd8b0f5af24ab840453a900b67a8.nl.png)

1. Voeg een nieuwe regel toe in de instructies, kopieer en plak het volgende.

    ```text
    - Help find available devices and give full details using [Available devices]. Always extract the VarDeviceType from the inputs. After giving device details, ask the user if they want to request a device from the list of available devices.
    ```

Deze instructie zal generatieve AI begeleiden om de **Beschikbare apparaten**-trigger aan te roepen om de lijst met beschikbare apparaten uit de **Devices** SharePoint-lijst weer te geven. Selecteer de gehele onderwerpplaatsaanduiding tussen vierkante haken.

![Voeg instructies toe](../../../../../translated_images/7.3_25_AddInstructions.1e83853476fed3c8b1c43e657bd1c1351108702288a8f688d8543fbf1c2946fb.nl.png)

1. Typ het schuine streep-teken `/` en de lijst met onderwerpen verschijnt. Selecteer het onderwerp **Beschikbare apparaten**.

![Verwijs naar trigger](../../../../../translated_images/7.3_26_SelectAvailableDevicesTopic.1a1beaa256f5417153b7bc55de848b89778f666c213b3a3935444526ab881f0b.nl.png)

1. **Sla** de bijgewerkte instructies op.

![Sla instructies op](../../../../../translated_images/7.3_27_SaveUpdatedInstructions.39908bb60990be971039bf392088fd0ecfa148c4496a6ad7413e1267b9091623.nl.png)

1. We gaan nu onze bijgewerkte agent testen. Selecteer **Test** rechtsboven om het testvenster weer te geven en **ververs** het testvenster. Voer het volgende bericht in bij de agent.

    ```text
    I need a laptop
    ```

![Test](../../../../../translated_images/7.3_28_Test.a273496de273bf3bebb9ac1504c1cedd8947c250ccf8454cf38b2effbdf66f71.nl.png)

1. Voordat de agent verder kan gaan, moet de gebruiker verifiëren dat hun verbinding kan worden gebruikt. Selecteer **Toestaan**.

![Selecteer toestaan](../../../../../translated_images/7.3_29_SelectAllow.9f508c4001270252924d889792ecf0cc2a984954b903bb00f7ce6b2dc43d08e3.nl.png)

1. De agent zal de SharePoint-tool uitvoeren die een gefilterde lijst van apparaten ophaalt waarbij het apparaattype gelijk is aan "laptop" en de status gelijk is aan "beschikbaar," op basis van de gebruikte Power Fx-uitdrukking. Een reactie in de vorm van opsommingstekens wordt geretourneerd voor de gebruiker om te lezen.

![Reactie van test](../../../../../translated_images/7.3_30_TestResponse.b60253568edc8b68d737a62960f4a3fa3620d2ba4658b05aa2503ad5fd763383.nl.png)

1. Het laatste wat we leren is het bekijken van de gebruikte verbindingen door de pagina _Beheer je verbindingen_ van de agent te bekijken. Selecteer het **ellipsis (...)** en selecteer **Beheer verbinding**.

![Beheer verbinding](../../../../../translated_images/7.3_31_ManageConnections.151932ec4f907e020b67c418cf591806da164c74f6b1d9b73c04d7374d9fc505.nl.png)

1. Op deze pagina kunnen we alle verbindingen zien die door de agent worden gebruikt. Momenteel wordt slechts één verbinding vermeld die is gekoppeld aan de SharePoint-tool die aan het onderwerp is toegevoegd. Selecteer **1 tool** in de kolom **Gebruikt door**.

![Gebruikt door](../../../../../translated_images/7.3_32_UsedBy.1e5ff032f1e02a565a0dafdde4f9436486ed3f012fcc23b824871a71b6de543e.nl.png)

1. Hier kunnen we de details van de Get items-actie zien en herinner je je de _gebruik beschrijving_ die we eerder hebben ingevoerd? Hier zien we de gebruik beschrijving. Selecteer **Sluiten**.

> Dit laat ons weten welke acties worden gebruikt en wat het doel ervan is. Dit houdt onze verbindingen georganiseerd 📁.

![Gebruik beschrijving](../../../../../translated_images/7.3_33_UsedByInformation.74a42aedb6dc906c678ff8b281a8706e1c0156ee7375111ed20e02d1a1dfd808.nl.png)

1. Ga terug naar je browsertabblad met Copilot Studio en **ververs** het testvenster om de test te wissen.

## ✅ Missie Voltooid

Gefeliciteerd! 👏🏻 Je hebt geleerd hoe je een nieuw onderwerp vanaf nul kunt toevoegen, hoe je een tool kunt toevoegen die de Get items SharePoint-connectoractie aanroept en Power Fx kunt gebruiken om de reactie te filteren zodat alleen apparaten worden geretourneerd waarvan de status beschikbaar is en het apparaattype laptop is. 🙌🏻

Dit is het einde van **Lab 07 - Voeg een nieuw onderwerp toe met gespreksknooppunten**, selecteer de onderstaande link om door te gaan naar de volgende les. We zullen de use case in dit lab uitbreiden in de lab van de volgende les.

⏭️ [Ga naar **Verbeter gebruikersinteracties met Adaptive Cards** les](../08-add-adaptive-card/README.md)

## 📚 Tactische Bronnen

🔗 [Gebruik systeemonderwerpen](https://learn.microsoft.com/microsoft-copilot-studio/authoring-system-topics?mc_id=power-172618-ebenitez)

🔗 [Onderwerpen in Microsoft Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/guidance/topics-overview?WT.mc_id=power-172618-ebenitez)

🔗 [Stel onderwerptriggers in](https://learn.microsoft.com/microsoft-copilot-studio/authoring-triggers?WT.mc_id=power-172618-ebenitez)

🔗 [Definieer agentonderwerpen](https://learn.microsoft.com/microsoft-copilot-studio/guidance/defining-chatbot-topics?WT.mc_id=power-172618-ebenitez)

🔗 [Maak uitdrukkingen met Power Fx](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172618-ebenitez)

📺 [Onderwerpen maken met natuurlijke taal](https://aka.ms/ai-in-action/copilot-studio/ep6)

📺 [Acties toevoegen aan agents met connectors](https://aka.ms/ai-in-action/copilot-studio/ep4)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/07-add-new-topic-with-trigger" alt="Analytics" />

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.