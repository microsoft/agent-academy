<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-17T01:16:18+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "nl"
}
-->
# 🚨 Missie 03: Een Declaratieve Agent implementeren voor Microsoft 365 Copilot

## 🕵️‍♂️ CODENAAM: `OPERATIE COPILOT UITBREIDING`

> **⏱️ Operatietijdvenster:** `~60 minuten`

🎥 **Bekijk de Uitleg**

[![Declaratieve Agent video thumbnail](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.nl.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "Bekijk de uitleg op YouTube")

## 🎯 Missieoverzicht

Welkom bij je eerste veldopdracht, Agent Maker. Je bent geselecteerd om een Declaratieve Agent te ontwerpen, uit te rusten en te implementeren—een gespecialiseerde agent die direct is ingebed in Microsoft 365 Copilot en Microsoft Teams.

In tegenstelling tot traditionele agents werken declaratieve agents met een gedefinieerde missie (instructies), tools (prompts/connectors) en strategische toegang tot interne intelligentie (kennisbronnen zoals SharePoint, Dataverse en meer). Jouw taak is om deze agent te bouwen met Microsoft Copilot Studio—een no-code commandocentrum waar de vaardigheden en het doel van je agent tot leven komen.

Laten we beginnen.

## 🔎 Doelstellingen

In deze missie leer je:

1. Begrijpen wat declaratieve agents zijn en hoe ze Microsoft 365 Copilot uitbreiden met aangepaste mogelijkheden
1. Vergelijken van Microsoft Copilot Studio versus Copilot Studio agent builder voor het bouwen van declaratieve agents
1. Een declaratieve agent maken met natuurlijke taal via de conversatie-creatie-ervaring
1. AI-prompts toevoegen als tools om de gespecialiseerde kennis en probleemoplossende vaardigheden van je agent te verbeteren
1. Je declaratieve agent publiceren en testen in Microsoft 365 Copilot en Microsoft Teams

## 🕵🏻‍♀️ Wat is een declaratieve agent voor Microsoft 365 Copilot?

Declaratieve agents zijn op maat gemaakte versies van Microsoft 365 Copilot. Je kunt Microsoft 365 Copilot aanpassen aan specifieke zakelijke behoeften door het instructies te geven om een bepaald proces te ondersteunen, het te baseren op bedrijfskennis en tools te gebruiken voor bredere uitbreidbaarheid. Dit stelt organisaties in staat om gepersonaliseerde ervaringen te creëren met meer functionaliteit voor hun gebruikers.

## 🤔 Waarom zou ik Microsoft Copilot Studio gebruiken om een declaratieve agent te bouwen?

Als maker is de kans groot dat je al hebt geëxperimenteerd met [Copilot Studio agent builder](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez) in Microsoft 365 Copilot, en je vraagt je waarschijnlijk af _waarom een declaratieve agent bouwen in Microsoft Copilot Studio?_

Microsoft Copilot Studio biedt een uitgebreide set tools en functies voor declaratieve agents die verder gaan dan de beperkingen van Copilot Studio agent builder. Net als bij Copilot Studio agent builder hoef je geen kennis te hebben van programmeren of softwareontwikkeling om te bouwen in Microsoft Copilot Studio. Laten we dit verder uitwerken om de verschillen tussen Copilot Studio Agent Builder en Copilot Studio voor het bouwen van declaratieve agents te begrijpen.

### Functievergelijking

De volgende tabel benadrukt de verschillen bij het bouwen van een declaratieve agent in Copilot Studio agent builder en Copilot Studio.

| Functie                   | Copilot Studio agent builder in Microsoft 365 Copilot                          | Microsoft 365 Copilot uitbreiden in Copilot Studio                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **Kennis**       | Web, SharePoint, Microsoft Teams chats, Outlook e-mails, Copilot connectors     | Web search (via Bing), SharePoint, Dataverse, Dynamics 365, Copilot connectors  |
| **Tools**       | Code interpreter, image generator     | 1400+ Power Platform connectors, custom connectors, prompt, computergebruik, REST API, Model Context Protocol   |
| **Startprompts**         | Prompts configureren zodat gebruikers snel kunnen beginnen   | Prompts configureren zodat gebruikers snel kunnen beginnen  |
| **Kanaal**           | Agent alleen gepubliceerd naar Microsoft 365 Copilot     | Agent gepubliceerd naar Microsoft 365 Copilot en Microsoft Teams      |
| **Deelrechten**         | Gebruikers zijn alleen kijkers    | Gebruikers kunnen bewerkers of kijkers zijn   |

Er zijn meer mogelijkheden beschikbaar voor declaratieve agents die in Microsoft Copilot Studio zijn gebouwd, waar we hierna meer over zullen leren.

!!! tip
    - Om meer te leren over Copilot Studio agent builder, ga naar [Copilot Developer Camp: Lab MAB1 - Bouw je eerste agent](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/)
    - Voor pro-ontwikkeling van het uitbreiden van een declaratieve agent voorbij Copilot Studio agent builder voor Microsoft 365 Copilot, ga naar [Copilot Developer Camp: Lab MAB1 - Bouw je eerste agent](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/)

### Microsoft 365 Copilot uitbreiden met declaratieve agents gebouwd in Copilot Studio

Laten we verder ingaan op wat we hebben geleerd uit de functievergelijkingstabel.

#### Aanpassing

- **Gedetailleerde Instructies**: Je kunt gedetailleerde instructies en mogelijkheden geven om het doel en gedrag van de agent precies te definiëren.
  - Dit omvat het oproepen van tools simpelweg door natuurlijke taal te gebruiken.

- **Toegang tot Bedrijfskennis**: Maakt toegang tot bedrijfskennis mogelijk die gebruikersrechten respecteert.
  - SharePoint-integratie
  - Dataverse-integratie
  - Dynamics 365-integratie
  - Microsoft 365 Copilot connectors ingeschakeld door je organisatiebeheerder

   ![Aanpassing](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.nl.png)

#### Geavanceerde Mogelijkheden

- **Integratie met Externe Diensten**: Hiermee kun je kiezen uit 1400+ Power Platform connectors die integreren met externe diensten, wat meer complexe en krachtige functionaliteiten biedt.
  - Voorbeelden zijn [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez), [ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez), [Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez), [SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) en meer
  - Alternatief kun je ook Model Context Protocol servers en REST API's direct binnen je declaratieve agent gebruiken

- **AI-prompts**: Gebruik een prompt om tekst, documenten, afbeeldingen en gegevens te analyseren en te transformeren met natuurlijke taal en AI-redenering.
  - Selecteer het chatmodel, kies uit Basic (Standaard), Standaard, Premium
  - Optie om je eigen Azure AI Foundry-model te gebruiken om je prompt te baseren

- **Meer configuratieopties voor implementatie**: Selecteer kanalen en definieer gebruikersrechten.
  - Publiceer naar Microsoft Teams, een vertrouwde gebruikersinterface voor je gebruikers voor snellere adoptie
  - Deel bewerkrechten om te voorkomen dat er een enkel punt van afhankelijkheid is van de eigenaar van de agent

   ![Aanpassing](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.nl.png)

Samenvattend stellen declaratieve agents in Microsoft Copilot Studio je in staat om Microsoft 365 Copilot aan te passen aan zakelijke behoeften door integratie van bedrijfskennis, tools om verbinding te maken met externe diensten of AI GPT-modellen.

## 🧪 Lab 03: Bouw een declaratieve agent in Microsoft Copilot Studio voor Microsoft 365 Copilot

We leren nu hoe we een declaratieve agent kunnen bouwen voor een "Business-to-Employee"-gebruiksscenario die zal fungeren als een **IT-helpdeskagent**.

- [3.1 Maak een declaratieve agent](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 Maak en voeg een prompt toe aan je declaratieve agent](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 Werk instructies bij en test je declaratieve agent](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 Publiceer je declaratieve agent naar Microsoft 365 Copilot en Microsoft Teams](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    Deze lab zal stappen beschrijven om een Prompt toe te voegen als tool. De volgende lessen zullen dieper ingaan op het toevoegen van kennisbronnen en andere beschikbare tools. We houden het simpel voor je leerproces 😊

### 👩🏻‍💼 Begrijpen van Business-to-Employee (B2E)

Business-to-Employee (B2E) verwijst naar de interacties en diensten die een bedrijf direct aan zijn werknemers biedt. In de context van een agent betekent dit het gebruik van de geavanceerde mogelijkheden van Copilot Studio om de werkervaring van werknemers binnen de organisatie te ondersteunen en te verbeteren.

### ✨ Gebruiksscenario

**Als** werknemer

**Wil ik** snel en nauwkeurige hulp krijgen van de IT-helpdeskagent voor problemen zoals apparaatstoringen, netwerkproblemen, printerinstellingen

**Zodat ik** productief kan blijven en technische problemen zonder vertraging kan oplossen

Laten we beginnen!

### Vereisten

- Makers moeten toestemming hebben om te creëren in en toegang hebben tot een Copilot Studio-omgeving.

!!! note "Licentie-opmerking"
    Deze lab zal stappen beschrijven om een Prompt toe te voegen als tool. De volgende lessen zullen dieper ingaan op het toevoegen van kennisbronnen en andere beschikbare tools. We houden het simpel voor je leerproces 😊
  
    Je hebt geen Microsoft 365 Copilot-gebruikerslicentie nodig om je declaratieve agent gebouwd in Copilot Studio te publiceren naar Microsoft 365 Copilot. Echter, **gebruikers** van de _gepubliceerde declaratieve agent_ in Microsoft 365 Copilot hebben een Microsoft 365 Copilot-gebruikerslicentie nodig.

### 3.1 Maak een declaratieve agent

!!! warning "Copilot-vragen kunnen verschillen per sessie"

    De Copilot conversatie-creatie-ervaring kan elke keer variëren waarbij de verstrekte vragen voor begeleiding enigszins kunnen verschillen van eerder.

1. Navigeer naar [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/) en log in met je inloggegevens. Zorg ervoor dat je overschakelt naar de omgeving die je gebruikt voor deze labs.

1. Selecteer **Agents** in het menu en kies **Copilot voor Microsoft 365**.

       ![Copilot voor Microsoft 365](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.nl.png)

1. Vervolgens gaan we een declaratieve agent maken door **+ Agent toevoegen** te selecteren.

       ![Agent toevoegen](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.nl.png)

1. We zien dan de conversatie-creatie-ervaring laden waar we in natuurlijke taal met Copilot kunnen chatten om de declaratieve agent te beschrijven die we willen bouwen, en gebruik kunnen maken van de verstrekte vragen voor begeleiding.

       Laten we een gedetailleerde beschrijving invoeren die het volgende beschrijft,  
       - de taak van de agent  
       - wat voor soort vragen het kan behandelen  
       - het formaat van zijn antwoord  
       - het doel van de agent  
    
       ```text
       Je bent een hoogopgeleide en ervaren IT-professional die gespecialiseerd is in een breed scala aan computersystemen, netwerken en cybersecurity. Je kunt technische problemen diagnosticeren en oplossen, oplossingen duidelijk en begrijpelijk uitleggen voor gebruikers van alle technische niveaus, en richtlijnen geven over best practices. Je moet beknopt en informatief zijn, met stapsgewijze instructies en opsommingstekens waar nodig. Je doel is om de gebruiker te helpen het probleem te begrijpen en effectief op te lossen.
       ```
    
       ![Prompt maken](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.nl.png)

1. Na het indienen van de prompt verschijnt er een merkbare update in het rechterpaneel met de details en instructies van de agent zoals gedefinieerd door de prompt. Vervolgens wordt gevraagd om de naam van je agent te bevestigen en Copilot heeft een naam voorgesteld.

       Voer `ja` in om de voorgestelde naam te accepteren of voer een andere naam in, zoals het volgende,
    
       ```text
       Contoso Tech Support Pro
       ```
    
       ![Instructies bijgewerkt](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.nl.png)

    !!! warning "Herinnering: Copilot-vragen kunnen verschillen per sessie"

        De Copilot conversatie-creatie-ervaring kan elke keer variëren waarbij de verstrekte vragen voor begeleiding enigszins kunnen verschillen van eerder.

1. De naam van de agent is nu bijgewerkt zoals te zien is in het rechterpaneel. We worden nu gevraagd om de instructies voor de agent te verfijnen. Wat Copilot heeft voorgesteld klinkt goed, dus we vragen hem om zijn eigen suggesties te gebruiken. We voeren het volgende in,

      ```text
      Focus on the IT issues and scenarios you've identified
      ```

      ![Naam bijgewerkt](../../../../../translated_images/3.1_06_NameUpdated.b6b8cc7c670b77c635d6b54b723e1a83f63ec288c0eab260fdbf88c7ec163003.nl.png)

1. Vervolgens wordt gevraagd of we openbare websites of kennis willen toevoegen. We reageren met `Nee`, omdat we in deze lab alleen een prompt zullen toevoegen aan onze declaratieve agent. Latere labs in toekomstige lessen zullen kennisbronnen behandelen.

      ![Geen websites of kennisbronnen toegevoegd](../../../../../translated_images/3.1_07_KnowledgeSources.2001faa25aab922f38da82a8602e68b3ad7153941e87bab0949177e0b2ab0c08.nl.png)

1. We zien dan een reactie van Copilot dat we nu klaar zijn met het configureren van onze agent via de Copilot conversatie-creatie-ervaring. Laten we het echter nog wat verfijnen door te benadrukken dat het beknopt en informatief moet zijn met opsommingstekens, empathie moet gebruiken in communicatie, en om feedback moet vragen na het geven van oplossingen.

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

      ![Agentinstructies bijwerken](../../../../../translated_images/3.1_08_FurtherRefinements.993926c4e55cc5133413f4e10a61a6ed43351d070e791db0ee5547ea83f46473.nl.png)

1. Copilot bevestigt dat de instructies zijn bijgewerkt. Klik op **Maken** om de declaratieve agent voor Microsoft 365 Copilot te provisioneren.

      ![Agent maken](../../../../../translated_images/3.1_09_CreateDeclarativeAgent.71442cd4e18105359e55016d92e54b74ac18977bb535c637a05bac0d3680a3c5.nl.png)

    !!! warning "Herinnering: Copilot-vragen kunnen verschillen per sessie"

        De Copilot conversatie-creatie-ervaring kan elke keer variëren waarbij de verstrekte vragen voor begeleiding enigszins kunnen verschillen van eerder.

1. Zodra de agent is geprovisioneerd, zie je de details van de agent die de beschrijving en de instructies bevat die tijdens de Copilot conversatie-creatie-ervaring zijn gedefinieerd.
![Agent details](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.nl.png)

Scroll naar beneden in het paneel en je ziet ook de mogelijkheden om kennis toe te voegen, webzoekopdrachten in te schakelen (via Bing), startprompts en de publicatiedetails van de declaratieve agent voor Microsoft 365 Copilot. De startprompts worden ook weergegeven in het testpaneel aan de rechterkant. Gebruikers kunnen deze startprompts selecteren om interactie met de agent te beginnen.

![Suggested prompts](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.nl.png)

1. In de sectie Details van de agent kun je ook het pictogram van de agent wijzigen. Selecteer **Bewerken**.

![Edit details](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.nl.png)

Hier kun je het pictogram en de achtergrondkleur wijzigen. Selecteer **Opslaan** en selecteer vervolgens nogmaals **Opslaan** om de details van de agent bij te werken.

![Change icon](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.nl.png)

1. Laten we een snelle test doen van de agent die we hebben gemaakt. Selecteer een van de **Startprompts** in het testpaneel aan de rechterkant.

![Test starter prompt](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.nl.png)

1. Onze agent zal vervolgens reageren. Let op hoe het de instructies volgt door bulletpoints te gebruiken om de informatie overzichtelijk te maken en empathie te tonen in zijn antwoord.

Als je naar de onderkant van het bericht scrolt, zie je hoe de agent ook om feedback vraagt nadat het een oplossing heeft geboden, zoals geïnstrueerd.

![Response from testing](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.nl.png)

In een paar minuten heb je een declaratieve agent toegevoegd voor Microsoft 365 Copilot in Copilot Studio 🙌🏻

Vervolgens leren we hoe we een tool aan onze agent kunnen toevoegen en een prompt kunnen maken.

### 3.2 Maak en voeg een prompt toe aan je declaratieve agent

1. Scroll naar beneden naar de sectie **Tools** en selecteer **+ Tool toevoegen**.

![Add tool](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.nl.png)

1. Het Tools-venster verschijnt en een lijst met Power Platform-connectors wordt weergegeven. Om een prompt toe te voegen, selecteer **+ Nieuwe tool**.

![New tool](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.nl.png)

1. Er wordt een lijst met andere tools weergegeven - Prompt, Aangepaste connector, REST API en Model Context Protocol. Als jouw organisatie voldoet aan de [vereisten voor computergebruik](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez), zal dit ook in de lijst verschijnen. Selecteer **Prompt**.

![Select prompt](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.nl.png)

1. Voer een naam in voor de prompt. Laten we onze prompt `IT Expert` noemen.

![Enter name](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.nl.png)

1. Selecteer het **chevron-pictogram** naast het **Model** om de verschillende chatmodellen te bekijken die je kunt kiezen. Standaard is het **Basic GPT-4.1 mini**-model geselecteerd en je hebt ook de optie om je eigen model te gebruiken via Azure AI Foundry Models. We houden het bij het standaard geselecteerde model.

![Change model](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.nl.png)

1. Vervolgens geven we onze prompt instructies. Er zijn 3 methoden waaruit je kunt kiezen:

   - Gebruik Copilot om instructies voor je te genereren op basis van jouw beschrijving van wat je wilt dat de prompt doet.
   - Gebruik een vooraf ingesteld sjabloon uit de promptbibliotheek om een prompt te maken.
   - Voer handmatig je eigen instructies in.

1. Laten we eerst proberen Copilot te gebruiken om instructies te genereren op basis van een ingevoerde beschrijving. Voer het volgende in het Copilot-veld in en dien het in.

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

![Get started with Copilot](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.nl.png)

1. Copilot begint vervolgens een prompt voor ons te genereren.

![Copilot drafts prompts](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.nl.png)

1. De door Copilot gegenereerde conceptinstructies verschijnen vervolgens.

![Copilot generated draft instructions](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.nl.png)

1. Scroll naar de onderkant van de instructies en je ziet de door Copilot al gedefinieerde gebruikersinvoerparameter. Je hebt dan de optie om:
   - De gegenereerde conceptinstructies te behouden.
   - De conceptinstructies te vernieuwen met Copilot.
   - De conceptinstructies te verwijderen.

   Verwijder de conceptinstructies door het **prullenbakpictogram** te selecteren en we proberen vervolgens de promptbibliotheek.

![Prompt instructions](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.nl.png)

1. Selecteer de link **prompt template**.

![Select prompt template](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.nl.png)

1. Je ziet een lijst met promptsjablonen waaruit je kunt kiezen. Deze komen uit de [Power Platform Prompt-bibliotheek](https://aka.ms/power-prompts).

![Prompt library](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.nl.png)

1. Zoek naar de `IT expert`-prompt en selecteer deze.

![Select IT expert prompt](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.nl.png)

1. De prompt wordt vervolgens toegevoegd als de instructies met de invoerparameter zoals gedefinieerd door het promptsjabloon. Net zoals we deden bij het geven van instructies aan onze agent tijdens de conversatiecreatie-ervaring met Copilot, schetst dit promptsjabloon:
   - een taak,
   - wat voor soort vragen het kan behandelen,
   - en het formaat van de reactie en het doel van de prompt.

![Prompt instructions](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.nl.png)

1. Verwijder de instructies en we proberen vervolgens handmatig de instructies in te voeren. We gebruiken de [IT Expert-prompt](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/) uit de [Power Platform Prompt-bibliotheek](https://aka.ms/power-prompts). Kopieer en plak de prompt.

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

![Prompt instructions](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.nl.png)

1. Vervolgens kunnen we de gebruikersinvoerparameters van onze prompt definiëren. Dit kunnen tekst en afbeeldingen zijn, en voorbeeldgegevens om mee te testen. Er is ook de mogelijkheid om de prompt te koppelen aan kennis uit Dataverse-tabellen. Voor deze oefening hebben we slechts één gebruikersinvoer te definiëren, namelijk de probleem-invoer. Dit is momenteel een placeholder in onze prompt als `[Problem]`. We configureren deze invoer nu door het `/`-teken in te voeren of **+Inhoud toevoegen** te selecteren en vervolgens **Tekst** te kiezen.

![Text input](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.nl.png)

1. We kunnen nu een naam invoeren voor onze invoerparameter en voorbeeldgegevens.

Voer het volgende in als naam:

    ```text
    problem input
    ```

Voer het volgende in als voorbeeldgegevens:

    ```text
    My laptop gets an error with a blue screen
    ```

Selecteer vervolgens **Sluiten**.

![Configure problem input](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.nl.png)

1. De probleem-invoerparameter wordt nu toegevoegd aan de instructies met de geconfigureerde voorbeeldgegevens. We kunnen nu onze prompt testen!

![Problem input added](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.nl.png)

1. Selecteer **Test** om de prompt te testen.

![Test instructions](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.nl.png)

1. De reactie wordt vervolgens weergegeven. Let op hoe de reactie koppen en bulletpoints bevat, zoals aangegeven in de instructies. Scroll naar beneden en bekijk de rest van de modelreactie.

![Model response](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.nl.png)

1. Voordat we onze prompt opslaan, leren we over de instellingen die kunnen worden geconfigureerd voor deze prompt. Selecteer het **ellips (...)-pictogram**.

![Prompt settings](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.nl.png)

1. Hier zien we drie instellingen die kunnen worden geconfigureerd:

   - **Temperatuur**: Lagere temperaturen leiden tot voorspelbare resultaten, terwijl hogere temperaturen meer diverse of creatieve reacties mogelijk maken.
   - **Record ophalen**: Specificeer het aantal records dat wordt opgehaald voor je kennisbronnen.
   - **Links opnemen in de reactie**: Wanneer geselecteerd, bevat de reactie linkverwijzingen naar de opgehaalde records.

   Selecteer het **X**-pictogram om de instellingen te verlaten.

![Configure settings](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.nl.png)

1. Selecteer **Opslaan** om de prompt op te slaan.

![Save prompt](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.nl.png)

1. Selecteer vervolgens **Toevoegen aan agent** om de prompt toe te voegen aan onze declaratieve agent.

![Prompt instructions](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.nl.png)

1. De prompt verschijnt nu onder Tools 🙌🏻

![Prompt added](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.nl.png)

We zullen nu onze instructies bijwerken om de prompt aan te roepen en onze declaratieve agent testen.

### 3.3 Werk instructies bij en test je declaratieve agent

1. Scroll omhoog naar de sectie **Details** en selecteer **Bewerken**. Hierdoor worden de velden bewerkbaar.

![Select Edit](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.nl.png)

1. We kunnen nu onze instructies bijwerken om onze prompt aan te roepen door te verwijzen naar de naam van de prompt. Verwijder de instructies, kopieer en plak vervolgens het volgende.

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

Let op hoe de laatste zin de agent instrueert om de vraag die door de gebruiker is gesteld te gebruiken als waarde voor de probleem-invoerparameter. De agent zal de vraag gebruiken als probleem-invoer voor de prompt. Selecteer vervolgens **Opslaan**.

![Update instructions to invoke prompt](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.nl.png)

1. We zijn nu klaar om onze bijgewerkte instructies van onze declaratieve agent te testen. Selecteer het **verversingspictogram** in het testpaneel.

![Select refresh icon](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.nl.png)

1. Voer vervolgens de volgende prompt in en dien deze in.

```text
Kun je me helpen, mijn laptop heeft een blauw scherm
```

![Perform test](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.nl.png)

1. De agent roept de prompt aan en reageert.

![Prompt instructions](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.nl.png)

Laten we nu onze declaratieve agent publiceren 😃

### 3.4 Publiceer je declaratieve agent naar Microsoft 365 Copilot en Microsoft Teams

1. Selecteer **Publiceren**.

![Publish agent](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.nl.png)

1. Er verschijnt een venster waarin de kanalen en publicatiedetails worden weergegeven die kunnen worden bijgewerkt.

   - Kanalen: De agent wordt gepubliceerd naar Microsoft 365 Copilot en Microsoft Teams.
   - Agent-appinformatie: Dit is wat wordt weergegeven wanneer de gebruiker de agent toevoegt aan Microsoft 365 Copilot of in Microsoft Teams. Dit zijn velden die indien nodig kunnen worden bijgewerkt.

![Agent app details](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.nl.png)

1. Je kunt bijvoorbeeld de **Korte beschrijving**, **Lange beschrijving**, **Naam ontwikkelaar** bijwerken met jouw naam.

!!! tip
    Als je niet alle velden in je browser ziet, probeer dan uit te zoomen, bijvoorbeeld naar 75%.

Selecteer **Publiceren**. Copilot Studio begint dan met het publiceren van de agent.

![Publishing agent](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.nl.png)

1. Wanneer het publiceren is voltooid, zien we de [Beschikbaarheidsopties](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez) van de agent.

| Beschikbaarheidsoptie | Beschrijving |
| ---------------------- | ------------ |
| Deel link | Kopieer de link om deze te delen met gebruikers zodat zij de agent kunnen openen in Microsoft 365 Copilot |
| Toon aan mijn teamleden en gedeelde gebruikers | Hiermee kun je anderen toegang geven om deel te nemen aan het maken van de agent, of aan beveiligingsgroepen om hen toegang te geven tot het gebruik van de agent in Microsoft 365 Chat of Microsoft Teams. |
| Toon aan iedereen in mijn organisatie | Dien in bij de tenantbeheerder om toe te voegen aan de organisatielijst zodat alle gebruikers in de tenant de agent kunnen toevoegen. De agent wordt weergegeven onder Gemaakt door jouw organisatie in Microsoft 365 Copilot en in Microsoft Teams. |
| Download als .zip | Download als een zip-bestand om te uploaden als een aangepaste app in Microsoft Teams. |

![Availability options](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.nl.png)

1. Laten we eens kijken naar het delen van de agent. Selecteer **Toon aan mijn teamleden en gedeelde gebruikers**. Er verschijnt een paneel waarin je kunt zoeken naar gebruikers met wie je de agent wilt delen, door hun naam, e-mailadres of een beveiligingsgroep in te voeren. Je kunt deze lijst op elk moment bekijken om te zien wie toegang heeft tot de agent.

Er zijn ook twee selectievakjes:
- _Stuur een e-mailuitnodiging naar nieuwe gebruikers_ - nieuwe gebruikers ontvangen een e-mailuitnodiging.
- _Zichtbaar in Gemaakt met Power Platform_ - de agent wordt beschikbaar in de sectie Gemaakt met Power Platform van de Teams-appwinkel.
Voor meer details, raadpleeg [Connect and configure an agent for Teams and Microsoft 365](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez).

Selecteer **Annuleren** of het **X**-pictogram om het paneel te sluiten.

![Agent delen](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.nl.png)

1. Selecteer **Kopiëren** en plak de link in een nieuw browsertabblad.

![Link kopiëren](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.nl.png)

1. Microsoft 365 Copilot wordt geladen en er verschijnt een venster met de details van de agent-app. Let op hoe de naam van de ontwikkelaar, de korte beschrijving en de lange beschrijving worden weergegeven. Deze komen uit de publicatiedetails die in een eerdere stap zijn bijgewerkt.

Selecteer **Toevoegen**.

![Beschikbaarheidsopties](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.nl.png)

1. Onze declaratieve agent wordt vervolgens geladen. We zien de startprompts waaruit gebruikers snel kunnen kiezen om direct hulp te krijgen.

Selecteer een van de startprompts. In mijn startprompts kies ik de prompt **Hulp bij software-installatie**, die automatisch het berichtveld van Copilot invult. Dien de vraag in bij Copilot.

![Startprompt selecteren](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.nl.png)

1. Selecteer **Altijd toestaan** om je declaratieve agent toestemming te geven om de IT Expert-prompt op te roepen.

![Altijd toestaan selecteren](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.nl.png)

1. De agent roept vervolgens onze **IT Expert**-prompt op en we zien de modelrespons als een bericht in onze declaratieve agent.

![Respons](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.nl.png)

Scroll naar beneden om de volledige details van de respons te bekijken.

![Respons](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.nl.png)

1. Maar _hoe weten we_ dat de declaratieve agent de prompt heeft opgeroepen? 👀 Hier is een tip!

!!! tip
    Je kunt agents testen en debuggen in Microsoft 365 Copilot door [ontwikkelaarsmodus](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez) in te schakelen.

Voer het volgende in het berichtveld van Copilot in en dien het in.

    ```text
    -developer on
    ```

Er verschijnt een bevestigingsbericht om je te laten weten dat de ontwikkelaarsmodus nu is ingeschakeld.

![Ontwikkelaarsmodus ingeschakeld](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.nl.png)

1. Dien de volgende vraag in om de prompt op te roepen.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Vraag invoeren](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.nl.png)

1. We zien opnieuw een modelrespons van onze **IT Expert**-prompt als bericht. Scroll naar beneden in het bericht en er wordt een kaart met debuginformatie weergegeven.

Vouw **Agent Debug Info** uit door erop te klikken.

![Agent debug info](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.nl.png)

1. Hier vind je informatie over de agentmetadata die tijdens runtime is gegenereerd.

![Agent debug info uitgebreid](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.nl.png)

In ons geval richten we ons op de sectie _Acties_.

- **Overeenkomende acties** laten de huidige status zien van functies die tijdens de zoekopdracht van de app zijn gevonden.
- **Geselecteerde acties** laten de huidige status zien van functies die zijn gekozen om uit te voeren op basis van het besluitvormingsproces van de app.

![Agent debug info uitgebreid](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.nl.png)

Hier zien we dat de agentorchestrator ervoor heeft gekozen om de IT Expert-prompt op te roepen volgens de instructies van onze declaratieve agent. Dit wordt verder uitgelegd in de sectie _Uitgevoerde acties_, die ook aangeeft dat de prompt succesvol is opgeroepen.

![Agent debug info bekijken](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.nl.png)

1. Om de ontwikkelaarsmodus uit te schakelen, voer het volgende in het berichtveld van Copilot in en dien het in.

    ```text
    -developer off
    ```

Er verschijnt een bevestigingsbericht om je te laten weten dat de ontwikkelaarsmodus is uitgeschakeld. Geweldig, nu weet je hoe je kunt verifiëren of je declaratieve agent in Microsoft 365 Copilot je prompt heeft opgeroepen 🌞

![Ontwikkelaarsmodus uitgeschakeld](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.nl.png)

1. We gaan nu onze agent testen in Microsoft Teams. Navigeer naar **Apps** via het menu aan de linkerkant en selecteer **Teams** onder de sectie _Apps_.

![Teams selecteren in Apps](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.nl.png)

1. Microsoft Teams wordt vervolgens geladen in een nieuw browsertabblad en we krijgen de gebruiksvoorwaarden voor Microsoft 365 Copilot te zien. Selecteer **Akkoord**.

![Akkoord selecteren](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.nl.png)

1. Microsoft 365 Copilot wordt vervolgens standaard geladen, met het paneel aan de rechterkant dat al je beschikbare agents weergeeft, inclusief de declaratieve agent **Contoso Tech Support Pro**.

![Microsoft 365 Copilot in Teams](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.nl.png)

1. Selecteer **ellips-pictogram (...)** in het menu aan de linkerkant. Zoek naar **Contoso Tech Support Pro** in het zoekveld of selecteer de agent als je deze ziet.

Je kunt ook met de rechtermuisknop klikken om de agent te **Vastpinnen** voor snelle toegang in het menu aan de linkerkant in Microsoft Teams.

![Agent selecteren en vastpinnen](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.nl.png)

1. Vervolgens wordt onze agent geladen. 1. Laten we nu onze agent testen. Voer de volgende prompt in en dien deze in.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Agent vastpinnen](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.nl.png)

1. Een modelrespons van onze prompt wordt vervolgens weergegeven.

![Respons in Teams](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.nl.png)

In een paar minuten heb je geleerd hoe je je declaratieve agent publiceert en test in Microsoft 365 Copilot en Microsoft Teams 😊

## ✅ Missie Voltooid

Gefeliciteerd! 👏🏻 Je hebt een declaratieve agent gebouwd in Copilot Studio, waarbij je een Prompt hebt toegevoegd, de agent hebt geïnstrueerd om de Prompt te gebruiken en hebt geleerd hoe je je agent test en publiceert naar Microsoft 365 Copilot en Microsoft Teams.

Je agent is nu operationeel—klaar om te helpen, problemen op te lossen en interne gebruikers direct van dienst te zijn.

Dit is het einde van **Lab 03 - Bouw een declaratieve agent in Microsoft Copilot Studio voor Microsoft 365 Copilot**, selecteer de onderstaande link om door te gaan naar de volgende les.

⏭️ [Ga naar de les **Een nieuwe oplossing maken**](../04-creating-a-solution/README.md)

Tot de volgende keer, blijf scherp. De toekomst van zakelijk werk draait om agents—en nu weet je hoe je er een bouwt.

## 📚 Tactische Bronnen

🔗 [Bouw een declaratieve agent in Microsoft Copilot Studio voor Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Prompts toevoegen](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Agents delen met andere gebruikers](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [Bouw prompts voor je agent](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="Analytics" />

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.