<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "dcbcd9396b076da0a0f5d389e9ec1b12",
  "translation_date": "2025-10-17T05:56:50+00:00",
  "source_file": "docs/recruit/08-add-adaptive-card/README.md",
  "language_code": "nl"
}
-->
# 🚨 Missie 08: Verbeter gebruikersinteracties in Topics met Adaptive Cards

## 🕵️‍♂️ CODENAAM: `OPERATIE INTERFACE UPLIFT`

> **⏱️ Operatietijdvenster:** `~45 minuten`

🎥 **Bekijk de walkthrough**

[![Adaptive cards video thumbnail](../../../../../translated_images/video-thumbnail.3fb3463f411ef1f440a0fd0e67d217a67bcca1d39a98b2c2bff4e13cbc1b6f4e.nl.jpg)](https://www.youtube.com/watch?v=RhIlzYHPCXo "Bekijk de walkthrough op YouTube")

## 🎯 Missiebriefing

Agenten, jullie missie is om de statische gebruikerservaring te infiltreren en te vervangen door rijke, dynamische en actiegerichte Adaptive Cards. Jullie zullen JSON-payloads en Power Fx-formules inzetten om gesprekken in Copilot Studio te transformeren van eenvoudige vraag-en-antwoord naar volledig interactieve interacties. Jullie doel is om gebruikersinput te verzamelen, gegevens mooi te presenteren en gesprekken met precisie en stijl te sturen. Als jullie je niet aanpassen, kunnen gebruikers overstappen naar minder intelligente interfaces.

## 🔎 Doelstellingen

In deze missie leer je:

1. Begrijpen wat Adaptive Cards zijn en hoe ze gebruikersinteracties in Copilot Studio verbeteren
1. Leren interactieve kaarten te bouwen met JSON en Power Fx-formules voor dynamische inhoud
1. Verkennen van de Adaptive Card Designer en de belangrijkste componenten voor visuele kaartcreatie
1. Rijke, interactieve formulieren en gegevensverzamelingservaringen creëren binnen agent topics
1. Beste praktijken implementeren voor het ontwerpen van responsieve en gebruiksvriendelijke Adaptive Cards

## 🤔 Wat is een Adaptive Card?

Een **Adaptive Card** is een manier om interactieve, visueel rijke UI-elementen te maken die kunnen worden ingebed in apps zoals Microsoft Teams, Microsoft Outlook of agents. Het is een gestructureerd JSON-object dat de lay-out en inhoud van een kaart definieert:

- Welke elementen op de kaart verschijnen - tekst, afbeeldingen, knoppen
- Hoe die elementen worden gerangschikt
- Welke acties gebruikers kunnen ondernemen, zoals het indienen van een formulier of het openen van een link

    ![Adaptive Card](../../../../../translated_images/8.0_01_AdaptiveCard.3ae99605ab7ef4b35ee0d00649ba0fc1a8166620183f82f20258c32fbef2bb3e.nl.png)

### Waarom Adaptive Cards belangrijk zijn in Copilot Studio

Stel je voor dat je een agent bouwt die gebruikers vraagt naar hun naam, e-mail of feedback. Als je alleen gewone tekst gebruikt, kan het gesprek saai of moeilijk te volgen zijn. Daar komen Adaptive Cards om de hoek kijken!

1. **Maakt gesprekken interactief** - in plaats van tekst als berichten naar de gebruiker te sturen, kun je knoppen, formulieren, afbeeldingen en meer tonen.
    - Voorbeeld: een kaart kan de gebruiker vragen om hun naam en e-mailadres in een overzichtelijk formulier in te vullen.

1. **Ziet er overal goed uit** - Adaptive Cards passen automatisch de stijl aan van de app waarin ze zich bevinden, zoals Microsoft 365 Copilot chat of Microsoft Teams. Je hoeft je geen zorgen te maken over donkere modus, lettertype of lay-outs - het past zich aan.

1. **Eenvoudig te bouwen met JSON** - je definieert de kaart met JSON-code (denk aan een _recept_ voor de UI). Copilot Studio helpt je de kaart te bekijken voordat je deze aan het topic toevoegt.

1. **Gegevens verzamelen en gebruiken** - je kunt de kaart gebruiken om vragen te stellen, antwoorden te verzamelen en die gegevens te gebruiken in de gespreksflow.
    - Voorbeeld: Vraag om het telefoonnummer van een gebruiker en toon vervolgens een bevestigingskaart met hun telefoonnummer.

1. **Verbeter de gebruikerservaring** - kaarten maken je agent interactiever. Het is een schonere, klikbare en gebruiksvriendelijke interface.

## 🐱 Is _JSON_ een persoon?

Uitgesproken als "Jason," is het geen persoon 😅

JSON, ook wel bekend als _JavaScript Object Notation_, is een lichtgewicht formaat dat wordt gebruikt om gegevens te structureren. Het is gemakkelijk te lezen en te schrijven en ziet eruit als een reeks sleutel-waardeparen binnen accolades {}.

Dit is een van de opties die je kunt gebruiken bij het toevoegen van een Adaptive Card aan je topic.

![Adaptive card node properties](../../../../../translated_images/8.0_02_AdaptiveCardPropertiesPane.cf6bde2350f83ac84bf3fe5c077b2b01ee707af19a8d2f417b1ecc658318fe45.nl.png)

## 👀 Ik zie een andere optie om een Adaptive Card te bouwen met _formule_

Herinner je je nog hoe we leerden over Power Fx in [Missie 07 - Power Fx gebruiken in je nodes](../07-add-new-topic-with-trigger/README.md#what-power-fx-can-do-in-topics)? Hetzelfde kan worden toegepast in Adaptive Cards binnen Copilot Studio.

Ter herinnering,

!!! note
    Power Fx is een low-code programmeertaal die wordt gebruikt om logica en dynamisch gedrag toe te voegen aan je agent. Het is dezelfde taal die wordt gebruikt in Microsoft Power Apps en is ontworpen om eenvoudig en Excel-achtig te zijn, waardoor het gemakkelijk is voor ontwikkelaars en niet-ontwikkelaars.

### Hoe Power Fx werkt in Adaptive Cards

Wanneer je een Adaptive Card ontwerpt in Copilot Studio, kun je Power Fx-formules gebruiken om:

- Dynamisch waarden in te voegen zoals gebruikersnamen, datums of status.
- Tekst of cijfers opmaken, zoals valuta tonen of cijfers afronden.
- Elementen weergeven of verbergen op basis van voorwaarden.
- Reacties aanpassen op basis van gebruikersinput, variabelen, outputs van gespreksnodes.

Bijvoorbeeld,

"`Hallo`" & `System.User.DisplayName`

Deze formule combineert het woord "Hallo" met de naam van de gebruiker dynamisch.

### Waarom het nuttig is

1. **Personalisatie**

    Je kunt berichten afstemmen op elke gebruiker, waardoor interacties natuurlijker en relevanter aanvoelen.

1. **Dynamische inhoud**

    Kaarten kunnen echte gegevens tonen uit variabelen en outputs van gespreksnodes.

1. **Slimme logica**

    Je kunt bepalen wat gebruikers zien of mee interacteren op basis van voorwaarden, wat de bruikbaarheid verbetert en fouten vermindert.

1. **Low-code vriendelijk**

    Power Fx is een low-code programmeertaal. Zoals eerder vermeld, is het leesbaar, intuïtief en vergelijkbaar met Excel-formules.

## 👷🏻‍♀️ Bouwen met de Adaptive Card Designer

De **Adaptive Card Designer** is een visuele tool waarmee je interactieve berichtkaarten kunt bouwen met drag-and-drop elementen zoals tekst, afbeeldingen, knoppen en invoervelden. Het doel is om rijke, dynamische berichten te creëren zonder complexe code te schrijven, waardoor het gemakkelijker wordt om gebruiksvriendelijke interfaces te ontwerpen.

De ontwerptool helpt je de kaart visueel te bouwen, maar achter de schermen genereert het de JSON-objecten voor je. Je kunt ook overschakelen naar _formule_, waarmee Power Fx-uitdrukkingen in de kaart kunnen worden gebruikt om gegevens van elders weer te geven.

## 🎨 Begrijpen van de Adaptive Card Designer

![Adaptive Card Designer](../../../../../translated_images/8.0_03_AdaptiveCardPropertiesPane.e97dad10daf78959c15acb61ca17f0178f2716a75bb85c491c80866720cb1e99.nl.png)

### A) Kaartelementen

Dit zijn de bouwstenen van je Adaptive Card. Je kunt elementen zoals de volgende slepen en neerzetten:

- **TextBlock** om tekst weer te geven.
- **Image** om afbeeldingen te tonen.
- **FactSet** voor sleutel-waardeparen.
- **Invoervelden** om tekstvakken, datumkiezers, schakelaars weer te geven.
- **Acties** om knoppen weer te geven zoals _Submit_, _Open URL_, of _Show Card_.

Elk element heeft zijn eigen doel en kan worden gestyled of geconfigureerd.

### B) Kaartviewer

Dit is het **Preview**-gebied waar je in realtime kunt zien hoe je kaart eruit zal zien. Terwijl je elementen toevoegt of bewerkt, werkt de viewer onmiddellijk bij om wijzigingen weer te geven. Dit stelt je in staat om iteratieve updates te maken en tegelijkertijd het ontwerpresultaat te zien.

### C) Kaartstructuur

Dit toont de **hiërarchie en lay-out** van je kaart. Bijvoorbeeld:

- Een kaart kan beginnen met een **TextBlock** voor de titel.
- Vervolgens een **ColumnSet** met een afbeelding aan de ene kant en tekst aan de andere kant.
- Gevolgd door een **FactSet** en enkele **Actieknoppen**.

Het helpt je te begrijpen hoe elementen zijn genest en georganiseerd.

### D) Elementeigenschappen

Wanneer je op een element in de kaart klikt, kun je in dit paneel de **instellingen aanpassen**:

- Tekstgrootte, gewicht of kleur wijzigen.
- Afbeeldings-URL's of alt-tekst instellen.
- Invoermogelijkheden configureren zoals plaatshoudertekst of standaardwaarden.

Hier kun je elk element verfijnen.

### E) Kaartpayload-editor

Dit is de **ruwe JSON-code** achter je kaart. Geavanceerde gebruikers kunnen dit direct bewerken om:

- Templating-functies te gebruiken.
- Kaartdefinities kopiëren/plakken.

Zelfs als je nieuw bent in de Adaptive Card Designer, is het handig om te zien hoe het visuele ontwerp wordt vertaald naar code.

!!! tip "Tip - Bekijk de Adaptive Card voorbeelden"

    1. Ga naar [https://adaptivecards.microsoft.com/designer](https://adaptivecards.microsoft.com/designer).
    2. Selecteer **Nieuwe kaart** om een lijst met voorbeelden te zien die je kunt kiezen en aanpassen.
    3. Merk op dat deze designer extern (webgebaseerd) is. Wanneer je je kaart bouwt in de webgebaseerde Adaptive Card Designer, kopieer de JSON uit de Kaartpayload-editor.
    4. Plak de JSON in je Adaptive Card in je agent in Copilot Studio.

    ![Adaptive Card Designer Samples](../../../../../translated_images/8.0_04_AdaptiveCardDesignerSamples.c003b545de5ccfd72ca0c5fa4607addb19d265e8f7105393c652249182754ba9.nl.png)

## 🌵 Veelvoorkomende toepassingen

De volgende zijn veelvoorkomende toepassingen voor Adaptive Cards in Copilot Studio wanneer ze worden gebruikt in de **Stuur een bericht** of **Stel een vraag**-nodes.

1. **Formulieren en gegevensverzameling**

    Gebruik Adaptive Cards om gestructureerde input van gebruikers te verzamelen, zoals:

    - Verlofaanvragen
    - Feedbackformulieren
    - Contactinformatie
    - Afspraakplanning

1. **Dynamische informatie weergeven**

    Toon gebruikers gepersonaliseerde of realtime gegevens in een overzichtelijk, leesbaar formaat uit bedrijfsbronnen zoals ServiceNow, SAP, Dynamics 365, SharePoint, enz.

    - Besteloverzichten
    - Rekeningstanden
    - Ticket- of casestatus
    - Komende evenementen of deadlines

1. **Interactieve keuzes**

    Laat gebruikers direct in het gesprek keuzes maken:

    - Kies uit een lijst met opties, bijvoorbeeld productcategorieën, ondersteuningsthema's.
    - Bevestig of annuleer een actie.
    - Beoordeel een dienst of ervaring.

1. **Acties activeren**

    Voeg knoppen toe die verdere stappen in het gesprek intern of extern activeren.

    - "Verzoek indienen"
    - "Details bekijken"

## ⭐ Beste praktijken

Hier zijn enkele beste praktijken voor het maken van Adaptive Cards voor agents in Copilot Studio.

1. **Houd het eenvoudig en gefocust**

    - Ontwerp kaarten met een duidelijk doel, overlaad ze niet met te veel elementen.
    - Gebruik beknopte tekst en intuïtieve lay-outs om gebruikers door de interactie te leiden.

1. **Wees doelgericht met invoer**

    - Voeg alleen de noodzakelijke invoerelementen toe, zoals tekst, datumkeuzes, om gebruikers niet te overweldigen.
    - Gebruik labels om invoer gemakkelijk te begrijpen te maken.

1. **Structuur voor leesbaarheid**

    - Gebruik **TextBlocks** voor koppen en instructies.
    - Groepeer gerelateerde elementen met **Containers** of **ColumnSets** om de visuele flow te verbeteren.

1. **Maak Actie-elementen duidelijk**

    - Gebruik **Action.Submit** en/of **Action.OpenUrl** met duidelijke knoptitels zoals "Verzoek indienen" of "Details bekijken".
    - Vermijd vage labels zoals "Klik hier".

1. **Ontwerp voor aanpasbaarheid**

    - Ga ervan uit dat de kaart op verschillende schermformaten kan worden bekeken.
    - Vermijd vaste breedtes en gebruik flexibele lay-outs zoals **ColumnSets** voor responsiviteit.

1. **Gebruik waar mogelijk dynamische inhoud**

    - Bind kaartelementen aan variabelen of outputs van nodes met Power Fx om de gebruikerservaring te personaliseren.
    - Bijvoorbeeld, toon de naam of huidige status van de gebruiker dynamisch.

## 🧪 Lab 08 - Voeg Adaptive Cards toe en verbeter topicmogelijkheden

We gaan nu leren hoe we ons topic kunnen verbeteren met Adaptive Cards en geavanceerde functionaliteit van topics en nodes kunnen gebruiken.

- [8.1 Maak een nieuw topic met een Adaptive Card voor gebruikers om hun verzoek in te dienen](../../../../../docs/recruit/08-add-adaptive-card)
- [8.2 Werk agentinstructies bij om het topic Verzoek apparaat op te roepen](../../../../../docs/recruit/08-add-adaptive-card)

### ✨ Gebruiksscenario

**Als** medewerker

**Wil ik** een apparaat aanvragen

**Zodat ik** een apparaat kan aanvragen uit de lijst met beschikbare apparaten

Laten we beginnen!

### Vereisten

1. **SharePoint-lijst**

    We zullen de **Apparaten** SharePoint-lijst gebruiken van [Les 00 - Cursusinstelling - Stap 3: Maak een nieuwe SharePoint-site](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Als je de **Apparaten** SharePoint-lijst nog niet hebt ingesteld, ga dan terug naar [Les 00 - Cursusinstelling - Stap 3: Maak een nieuwe SharePoint-site](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. **Contoso Helpdesk Copilot**

    We gaan dezelfde agent gebruiken die eerder is gemaakt in [Les 06 - Maak een aangepaste agent met natuurlijke taal met Copilot en verbind deze met je gegevens](../06-create-agent-from-conversation/README.md).

### 8.1 Maak een nieuw topic met een Adaptive Card voor gebruikers om hun verzoek in te dienen

We gaan een nieuw topic maken dat het apparaatverzoek van een gebruiker afhandelt. Dit nieuwe topic zal een **Vraag met Adaptive Card**-node bevatten om gebruikersinteractie met de agent mogelijk te maken.

Laten we beginnen!

1. Selecteer het tabblad **Topics** en selecteer vervolgens **+ Voeg een topic toe vanaf blanco**.

    ![Selecteer Topics tabblad](../../../../../translated_images/8.1_01_NewTopic.f16b94d274f8a7f561f257d9e15483fa56f6fc451a194f26bed03fceb24beb14.nl.png)

1. Geef het topic de volgende naam,

    ```text
    Request device
    ```

    Voer de volgende beschrijving in voor de trigger.

    ```text
    This topic helps users request a device when they answer yes to the question that asks the user if they would like to request one of these devices.
    ```

    ![Topicnaam en triggerbeschrijving](../../../../../translated_images/8.1_02_TopicNameAndTriggerDescription.3cdbb3ea9a3a480b8cdb23faa47d3a607273c79cbd406ae82dbb100603233879.nl.png)
1. Voeg vervolgens een **Vraag met adaptieve kaart**-node toe. Deze node toont een interactieve kaart waarmee de gebruiker kan selecteren welk apparaat hij wil aanvragen.

    ![Selecteer Vraag met adaptieve kaart-node](../../../../../translated_images/8.1_03_AddAskWithAdaptiveCard.4b8e29223fbce16e4440152c0e7f6827fb88097e2a819a489878cf6254f215a4.nl.png)

1. Selecteer de node en het **Eigenschappenpaneel van de adaptieve kaart-node** verschijnt. We gaan nu de JSON bewerken. Selecteer **Bewerk adaptieve kaart**. Selecteer **Bewerk adaptieve kaart**.

    ![Bewerk adaptieve kaart](../../../../../translated_images/8.1_04_EditAdaptiveCard.40d31318a2300d467838b0126d72d336a9abb58ba5fd6f62f51170dfb9760992.nl.png)

1. Dit is de **Ontwerper voor adaptieve kaarten**, waar je je kaart kunt ontwerpen en het ontwerp in real-time kunt bekijken.

    Probeer de **TextBlock**- en **FactSet**-kaartelementen naar het bewerkingscanvas, het kaartweergavegebied, te slepen. Merk op hoe de kaartstructuur en de payload-editor van de kaart worden bijgewerkt zodra de twee kaartelementen zijn toegevoegd. Je kunt de payload-editor van de kaart en het eigenschappenpaneel van de elementen direct bijwerken.

    ![Sleep en plaats kaartelementen](../../../../../translated_images/8.1_05_DragAndDropCardElements.a9fea2dcf7ec6d235ef7b4f717bdc4fee6536a04a3bdb26fb458678fba79acb9.nl.png)

1. Selecteer **Voorbeeld** om de kaart in verschillende breedtes te bekijken.

    ![Selecteer voorbeeld](../../../../../translated_images/8.1_06_PreviewAdaptiveCard.647091529c1fd44ed5eff21738c780bc3bf07e1cbe6434695d206a4aca9b4b25.nl.png)

1. Het voorbeeld wordt geladen, waar je verschillende kaartuitvoeringen per breedte kunt zien.

    ![Voorbeeld kaart in verschillende breedtes](../../../../../translated_images/8.1_07_PreviewCardWidths.bf9059b79ef07c1c108308e904bbfaa6742db99fcb30cb18004086f3c7fed086.nl.png)

1. Sluit **Voorbeeld** door op het **x-icoon** te klikken en selecteer **Ongedaan maken** in de ontwerper om de eerder toegevoegde kaartelementen te verwijderen.

    ![Ongedaan maken](../../../../../translated_images/8.1_08_Undo.ddcce9dbb87d876e47a932c73229d4fdc98e182d602af256275e2456cd9054eb.nl.png)

1. Klik in de **Payload-editor van de kaart** en selecteer alle regels met de Windows-sneltoets _Ctrl + A_ of de Mac-sneltoets _Command + A_, gevolgd door het verwijderen van de regels. **Plak** de JSON uit het [Request devices .JSON-bestand](../../../../../docs/recruit/08-add-adaptive-card/assets/8.1_RequestDevice.json).

    ![Payload-editor van de kaart wissen](../../../../../translated_images/8.1_09_SelectAll.6aaf936d81c3356870679a7ae5b6fd1298812cc492ca3250fa01179164483e1e.nl.png)

1. Merk op hoe de **Kaartvoorbeeld** nu elementen bevat die tekst en een lijst met beschikbare apparaten weergeven.

    Deze JSON is momenteel een tijdelijke aanduiding en een voorbeeld van wat we als basis voor onze kaart zullen gebruiken, maar dan in de vorm van een formule in plaats van JSON, omdat we de **globale variabele**, `Global.VarDevices.value`, gaan refereren die de respons van de **Get items** SharePoint-connectoractie opslaat.

    Selecteer **Opslaan** en selecteer **Sluiten** om de modal van de ontwerper voor adaptieve kaarten te sluiten.

    ![Selecteer Opslaan](../../../../../translated_images/8.1_10_DeviceRequestCard.711ce0bdfbfecf2f221cb7fc4c6aecdefd7467afcfad43f2414e8230fc0d8470.nl.png)

1. Sluit het **Eigenschappenpaneel van de adaptieve kaart-node** door op het **X**-icoon te klikken.

    ![Eigenschappenpaneel van de adaptieve kaart-node sluiten](../../../../../translated_images/8.1_11_ExitAdaptiveCardNodeProperties.fe8760d8df1c22f9a73b7860e9473a4f350e0cb0d83824e9f55a143593ca9c58.nl.png)

1. In het bewerkingscanvas van het onderwerp zie je de adaptieve kaart.

    ![Aanvraagkaart voor apparaten](../../../../../translated_images/8.1_12_DeviceRequestCard.f4e3961a0fd282aeb37017f8cb49018c839805d375e2fc5a1220321156012b48.nl.png)

1. Scroll naar de onderkant van de node en je ziet uitvoervariabelen. De `commentsId` en de `deviceSelectionId` zijn gedefinieerd in het eigenschappenpaneel van de elementen. Deze twee variabelen slaan waarden op van de kaartelementen waarmee gebruikers interactie hebben. Deze waarden worden verderop in het onderwerp gebruikt, wat we in de volgende les zullen leren.

    ![Uitvoer van node-variabelen](../../../../../translated_images/8.1_13_DeviceRequestCardOutputs.d4580e9384b74e4273f83b52e1fd256a893c49b0cf398e33ac244906edd44b35.nl.png)

1. Laten we nu de kaart bijwerken van JSON naar formule, omdat we Power Fx opnieuw zullen gebruiken om door de items te lopen die zijn geretourneerd in de **Get items** SharePoint-connectoractie, opgeslagen in de **globale variabele**, `Global.VarDevices.value`, via de `value`-eigenschap van de JSON-respons.

    > We hebben deze globale variabele gemaakt in [Lab 07 - Een nieuw onderwerp toevoegen met gespreksnodes, 7.3 Een tool toevoegen met een connector](../07-add-new-topic-with-trigger/README.md#73-add-a-tool-using-a-connector).

    Selecteer de kaart in de **Vraag met adaptieve kaart**-node, gevolgd door het selecteren van het **chevron**-icoon en selecteer **Formule**.

    ![Wijzig naar formule](../../../../../translated_images/8.1_14_ChangeToFormula.03acaccb20320557926f0854e006a2e6a6475eb06ecdb031f429e50d0303f0cf.nl.png)

1. Klik op het **uitvouw-icoon** om het Formuleveld te vergroten.

    ![Klik op uitvouw-icoon](../../../../../translated_images/8.1_15_SelectExpand.65dcefe6ec10e6b8c9741c254d303a47f5c0fae7bf586facbf768f820786c839.nl.png)

1. Klik in de **Payload-editor van de kaart** en selecteer alle regels met de Windows-sneltoets _Ctrl + A_ of de Mac-sneltoets _Command + A_, gevolgd door het verwijderen van de regels.

    ![Klik in payload-editor van de kaart](../../../../../translated_images/8.1_16_SelectAll.689cea259e1541f21e87df32ce271bb478c7f88f8e96ba7e02329cc0015a037c.nl.png)

    Plak de formule uit het [Request Devices formulebestand](../../../../../docs/recruit/08-add-adaptive-card/assets/8.1_RequestDeviceFormula.txt).

1. In de formule zullen we door elk SharePoint-lijstitem lopen met behulp van de `For All`-functie om de waarden van `Model` weer te geven in de titel van de keuzeoptie, en het SharePoint-item `ID` wordt gerefereerd als de waarde. We omhullen de waarden ook met de `If(IsBlank()`-functies omdat de formule een waarde verwacht om de adaptieve kaart weer te geven in het bewerkingscanvas van het onderwerp. Anders verschijnt er een bericht: "Property cannot be null".

    **Sluit** de kaartmodal.

    ![Power Fx Formule](../../../../../translated_images/8.1_17_PowerFxFormula.c68848b0af594819636bf70aa6b03c7ec8f4190b285e798fdcb02232be0ca146.nl.png)

1. **Sluit** het **Eigenschappenpaneel van de adaptieve kaart-node**.

1. **Sla** het onderwerp op.

    ![Onderwerp opslaan](../../../../../translated_images/8.1_18_SaveTopic.da41cfc240e80d46f7f1379f271be8dafa0c3060868b862535bb4bec87591f6c.nl.png)

### 8.2 Update agentinstructies om het onderwerp Aanvraag apparaat aan te roepen

Nu we het nieuwe onderwerp hebben gemaakt dat de apparaatverzoeken afhandelt, moeten we de **agentinstructies** bijwerken om het onderwerp aan te roepen.

1. Selecteer het tabblad **Overzicht** en in de **agentinstructies** selecteer **Bewerken**.

    ![Instructies bewerken](../../../../../translated_images/8.2_01_EditInstructions.1c93b774b61243660f1fac51c39675e1a3aa35b14200364921d90ae26cffec13.nl.png)

1. Voeg een nieuwe regel toe onder de vorige instructie uit [Lab 07 - Een nieuw onderwerp toevoegen met gespreksnodes, 7.3 Een tool toevoegen met een connector](../07-add-new-topic-with-trigger/README.md#73-add-a-tool-using-a-connector).

    ```text
    - If the user answers yes to the question of requesting a device, trigger [Request device]. Otherwise if they answer no to the question of requesting a device, trigger [Goodbye].
    ```

    Selecteer de hele onderwerpplaceholder tussen vierkante haken en verwijder de placeholder.

    ![Placeholder voor aanvraag apparaat](../../../../../translated_images/8.2_02_ReplaceRequestDevicePlaceholder.604b21d10047f887fd12965c54bcaa7b96174dc5ebc39862ef29d513420c25f8.nl.png)

1. Typ `/Req` en selecteer het onderwerp **Aanvraag apparaten**.

    ![Onderwerp Aanvraag apparaten](../../../../../translated_images/8.2_03_ReferenceRequestDeviceTopic.082468c7b7512dceb4d294ed3dbe447e81b1f0b47688b767003eca6a60b4390d.nl.png)

1. Herhaal dezelfde stappen voor de volgende onderwerpplaceholder, **[Goodbye]**. Selecteer de hele onderwerpplaceholder tussen vierkante haken en verwijder de placeholder. Typ `/Goodbye` en selecteer het onderwerp **Goodbye**.

    - Wanneer de gebruiker **Ja** antwoordt op de vraag van de agent of hij een apparaat wil aanvragen, zal de agent doorverwijzen van het onderwerp **Beschikbare apparaten** naar het onderwerp **Aanvraag apparaten**.

    - Anders, als de gebruiker **Nee** antwoordt, zal de agent doorverwijzen van het onderwerp **Beschikbare apparaten** naar het onderwerp **Goodbye**.

    **Sla** de bijgewerkte instructies op.

    ![Doorverwijzen naar onderwerp Aanvraag apparaten](../../../../../translated_images/8.2_04_ReferenceGoodbyeTopic.f4db471beef6645aefd7d8b1b8a46669c6764b54f6954614f452976c49bcb9d5.nl.png)

1. Laten we nu testen of de doorverwijzing van het onderwerp _Beschikbare apparaten_ naar het onderwerp _Aanvraag apparaten_ werkt. Selecteer **Testen** om het testpaneel te laden en selecteer **Vernieuwen**.

    Selecteer vervolgens het **Activiteitenkaart**-icoon in het testpaneel, gevolgd door het inschakelen van **Volg tussen onderwerpen**. Hiermee kunnen we zien dat het onderwerp _Beschikbare apparaten_ is doorverwezen naar het onderwerp _Aanvraag apparaten_.

    Oké, we zijn klaar om te testen! Voer het volgende in het testpaneel in.

    ```text
    I need a laptop
    ```

    ![Agent testen](../../../../../translated_images/8.2_05_TestAgent.21b4ed7f831866736edc0b35def2856066bf61082487a6d63952e8635eae8c99.nl.png)

1. De agent zal reageren met de lijst van beschikbare apparaten, gevolgd door de vraag of de gebruiker een apparaat wil aanvragen. Kopieer en plak het volgende,

    ```text
    yes please
    ```

    ![Test onderwerp Aanvraag apparaten](../../../../../translated_images/8.2_06_TestRequestDeviceTopic.60f161f89dc2793bc4b40a6d29a06a7cffe156c50e8517de242f1dacbadf5682.nl.png)

1. Vervolgens zien we dat de agent is doorverwezen naar het onderwerp **Aanvraag apparaten**. De agent heeft dit onderwerp aangeroepen volgens de instructies die we hebben toegevoegd.

    De adaptieve kaart met de interactieve elementen wordt nu als bericht aan de gebruiker weergegeven.

    ![Vraag-node](../../../../../translated_images/8.2_07_AdaptiveCardQuestion.f07775130cfea9a75c5842c48a56bf506e0b5967e4349571b682266c85c02748.nl.png)

1. We hebben nu met succes getest 😄 dat het onderwerp _Beschikbare apparaten_ doorverwijst naar het onderwerp _Aanvraag apparaten_. We zullen in de volgende les meer verbeteringen aan dit onderwerp toevoegen.

    Vernieuw het testpaneel.

    ![Testpaneel vernieuwen](../../../../../translated_images/8.2_08_RefreshTestPane.84d8c1174a9e6cc28a87f2663fb72838e8c6fd216df46153bd4f995b8527227a.nl.png)

## ✅ Missie Voltooid

Gefeliciteerd! 👏🏻 Je hebt geleerd hoe je adaptieve kaarten toevoegt met Power Fx-formules om gegevens uit variabelen weer te geven, en je hebt ook geleerd hoe je van het ene onderwerp naar het andere kunt doorverwijzen. Het maken van kleine onderwerpen maakt je agent beter georganiseerd, maar helpt ook gebruikers door verschillende delen van de gespreksstroom met de agent te navigeren.

Dit is het einde van **Lab 08 - Verbeter gebruikersinteracties met adaptieve kaarten**, selecteer de onderstaande link om naar de volgende les te gaan. We zullen in de volgende les verder bouwen op de use case uit dit lab.

⏭️ [Ga naar **Voeg een agentstroom toe aan je onderwerp voor automatisering** les](../09-add-an-agent-flow/README.md)

## 📚 Tactische Bronnen

🔗 [Adaptieve kaarten gebruiken in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/guidance/adaptive-cards-overview?WT.mc_id=power-172619-ebenitez)

🔗 [Voeg een adaptieve kaart toe in de Verstuur een bericht-node](https://learn.microsoft.com/microsoft-copilot-studio/authoring-send-message#add-an-adaptive-card?WT.mc_id=power-172619-ebenitez)

🔗 [Maak expressies met Power Fx](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172619-ebenitez)

📺 [Adaptieve kaarten bouwen met Power FX](https://aka.ms/ai-in-action/copilot-studio/ep8)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/08-add-adaptive-card" alt="Analytics" />

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.