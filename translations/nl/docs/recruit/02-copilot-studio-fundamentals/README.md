<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "90a3c5122f5687bbc8cc819990f175d4",
  "translation_date": "2025-10-17T06:00:15+00:00",
  "source_file": "docs/recruit/02-copilot-studio-fundamentals/README.md",
  "language_code": "nl"
}
-->
# 🚨 Missie 02: Copilot Studio Basisprincipes

## 🕵️‍♂️ CODENAAM: `OPERATIE KERNPROTOCOL`

> **⏱️ Operatietijdvenster:** `~30 minuten – alleen informatie, geen veldwerk vereist`  

🎥 **Bekijk de Uitleg**

[![Copilot Studio basisprincipes video thumbnail](../../../../../translated_images/video-thumbnail.60293a065d12abc483567901321099335595e0b8bd4e42177bdb05db16db335b.nl.jpg)](https://www.youtube.com/watch?v=x4OCwDRGeLE "Bekijk de uitleg op YouTube")

## 🎯 Missiebriefing

Welkom, Rekruut. Deze missie voorziet je van de basiskennis om te begrijpen hoe Copilot Studio werkt en hoe je intelligente agents kunt bouwen die echte zakelijke waarde leveren.

Voordat je je eerste agent bouwt, moet je de vier belangrijkste componenten begrijpen die elke aangepaste AI-agent vormen: Kennis, Tools, Onderwerpen en Instructies. Je leert ook hoe deze elementen samenwerken in de Copilot Studio orchestrator.

## 🔎 Doelstellingen

In deze missie leer je:

- **Wat Copilot Studio is**
- **Wanneer en waarom je agents gebruikt**
- **De vier bouwstenen van agents verkennen**
      - **Kennis**
      - **Tools**
      - **Onderwerpen**
      - **Instructies**
- **Begrijpen hoe deze componenten samenwerken** om een intelligente, geautomatiseerde agent te creëren

---

## Wat zijn Agents in Copilot Studio?

Een **agent** is een gespecialiseerde AI-assistent die je ontwerpt om specifieke taken of vragen af te handelen. In tegenstelling tot een algemene chatbot:

- **Kent de agent bedrijfsspecifieke gegevens** (beleid, documenten, databases)  
- **Voert echte taken uit** (berichten verzenden, agenda-afspraken maken, records bijwerken)  
- **Behoudt conversatiecontext** zodat het kan voortbouwen op eerdere vragen  

Omdat Copilot Studio low-code is, kun je vooraf gebouwde componenten slepen en neerzetten—geen diepgaande programmeervaardigheden vereist. Zodra je agent is gebouwd, kunnen mensen deze oproepen in Teams, Slack of zelfs een aangepaste webpagina om antwoorden te krijgen of workflows automatisch te activeren.

---

## Wanneer en Waarom Copilot Studio Gebruiken

Hoewel Microsoft 365 Copilot algemene AI-assistentie biedt in Office-apps, wil je een aangepaste agent gebruiken wanneer:

### Je domeinspecifieke kennis nodig hebt

- De standaard Copilot kent mogelijk niet de interne procedures of gegevens van je bedrijf. Een agent kan je SharePoint-sites, databases of aangepaste bronnen raadplegen om nauwkeurige, actuele antwoorden te geven.  

### Je meerstapsworkflows wilt automatiseren

- Bijvoorbeeld: "Wanneer iemand een onkostendeclaratie indient, stuur deze ter goedkeuring, werk de financiële tracker bij en informeer de manager." Een aangepaste agent kan elke stap afhandelen, geactiveerd door een enkel commando of evenement.  

### Je een contextuele, in-tool ervaring nodig hebt  

- Stel je een Onboarding-agent voor nieuwe medewerkers in Teams voor die HR-medewerkers door elk beleid begeleidt, de benodigde formulieren verzendt en oriëntatiebijeenkomsten plant—allemaal binnen je bestaande samenwerkingsplatform.  

---

## Vier Bouwstenen van een Agent

Elke Copilot Studio-agent is opgebouwd uit vier kerncomponenten:

1. **Kennis**  
1. **Tools (Acties)**  
1. **Onderwerpen**  
1. **Instructies**

Hieronder definiëren we elke bouwsteen en laten we zien hoe ze samenwerken om een effectieve agent te maken.

### 1. Kennis

**Kennis** is de data en context die je agent gebruikt om vragen nauwkeurig te beantwoorden. Het bestaat uit twee delen:

#### Aangepaste Instructies & Context

- Je schrijft een korte beschrijving van het doel en de toon van de agent. Bijvoorbeeld:  

    ```text
    You are an IT support agent. You help employees troubleshoot common software issues, provide troubleshooting steps, and escalate urgent tickets.
    ```

- Tijdens een gesprek onthoudt de agent eerdere beurten, zodat het kan verwijzen naar wat al is besproken (bijvoorbeeld als de gebruiker eerst zegt: "Mijn printer is offline," en later vraagt: "Heb je het inktniveau gecontroleerd?" herinnert de agent zich de printercontext).

#### Kennisbronnen (Onderbouwde Data)

- Je verbindt je agent met meerdere databronnen—SharePoint-bibliotheken, documentatiesites, wiki's of andere databases.  
- Wanneer een gebruiker een vraag stelt, haalt de agent relevante fragmenten uit die bronnen, zodat antwoorden **onderbouwd** zijn met de werkelijke beleidsregels, handleidingen of andere eigendomsinformatie van je organisatie.  
- Je kunt de agent zelfs dwingen alleen te reageren met informatie uit die bronnen, zodat het niet gokt of "hallucineert".

!!! voorbeeld
    Een "Beleidsassistent"-agent kan verbinding maken met je HR-SharePoint-site. Als een gebruiker vraagt: "Wat is ons PTO-opbouwpercentage?" haalt de agent de exacte tekst uit het HR-beleidsdocument in plaats van te vertrouwen op een generiek AI-antwoord.

---

### 2. Tools (Acties)

**Tools (Acties)** definiëren wat de agent kan doen naast chatten. Elke actie is een taak die de agent programmeerbaar uitvoert, zoals:

- Een e-mail of Teams-bericht verzenden  
- Een agenda-afspraak maken of bijwerken  
- Een record toevoegen of bewerken in een database (bijv. een SharePoint-lijst of Dataverse-tabel)  
- Een Power Automate-flow of REST API aanroepen  

#### Hoe Acties Werken

- **Definieer Invoer & Uitvoer**  
      - Bijvoorbeeld, een E-mail Verzenden-actie kan vereisen:  
        - `OntvangerEmailAdres`  
        - `OnderwerpRegel`  
        - `EmailInhoud`  

- **Combineer Acties in Workflows**  
      - Vaak omvat het vervullen van een gebruikersverzoek meerdere stappen.  
      - Je kunt acties in volgorde zetten zodat:  
             1. De agent gegevens ophaalt uit een SharePoint-lijst.  
             2. Het een samenvatting genereert met behulp van de LLM.  
             3. Het een Teams-bericht verzendt met die samenvatting.  

- **Verbind met Externe Systemen**  
      - Als je een CRM moet bijwerken of een interne API moet aanroepen, maak je een aangepaste actie om dat af te handelen.  
      - Copilot Studio kan integreren met het Power Platform of elk HTTP-gebaseerd eindpunt.

!!! voorbeeld "Een "Onkostenhulp"-agent kan:"  
    1. Luisteren naar een "Onkosten Indienen"-verzoek.  
    2. De onkostendetails van de gebruiker ophalen uit een formulier.  
    3. Een "Toevoegen aan SharePoint-lijst"-actie gebruiken om de gegevens op te slaan.  
    4. Een "E-mail Verzenden"-actie activeren om de goedkeurder te informeren.  

---

### 3. Onderwerpen

**Onderwerpen** definiëren de conversatietriggers of startpunten voor je agent. Elk onderwerp komt overeen met een functionaliteit of een vraagcategorie.

#### Conversatietriggers  

- Een onderwerp kan zijn "IT Ticket Indienen," "Vakantiesaldo Controleren," of "Verkooprapport Maken."  
- Onder de motorkap gebruikt Copilot Studio **generatieve orkestratie**: in plaats van te vertrouwen op exacte trefwoorden, interpreteert de AI de intentie van de gebruiker en kiest het juiste onderwerp op basis van een korte beschrijving die je geeft.  

#### Onderwerp Beschrijvingen  

- In elk onderwerp schrijf je een duidelijke, beknopte beschrijving van wat dat onderwerp omvat.

!!! voorbeeld "Voorbeeld van onderwerp beschrijving"
    Dit onderwerp helpt gebruikers een IT-ondersteuningsticket in te dienen door de details van het probleem, de prioriteit en de contactinformatie te verzamelen.

- De AI gebruikt die beschrijving om te beslissen wanneer dit onderwerp moet worden geactiveerd, zelfs als de bewoording van de gebruiker niet exact overeenkomt.

#### Onderwerpen Koppelen aan Acties  

- Elk onderwerp is verbonden met een of meer acties of gegevensophaalstappen.  
- Wanneer de AI een onderwerp kiest, begeleidt het de conversatie door de door jou gedefinieerde volgorde (stel vervolgvragen, roep acties aan, geef resultaten terug).

!!! voorbeeld
    Als een gebruiker zegt: "Ik heb hulp nodig bij het instellen van mijn nieuwe laptop," kan de AI die intentie koppelen aan het onderwerp "IT Ticket Indienen." De agent vraagt vervolgens naar het laptopmodel, gebruikersdetails en plaatst automatisch een ticket in het helpdesksysteem.

---

### 4. Instructies

**Instructies** (soms "Prompts" of "Systeemberichten" genoemd) sturen de toon, stijl en grenzen van de LLM. Ze bepalen hoe de agent in elke situatie reageert.

#### Rol & Persona  

- Je vertelt de AI wie het is (bijv. "Je bent een klantenserviceagent voor Contoso Retail").  
- Dit bepaalt de toon—vriendelijk, beknopt, formeel of informeel—afhankelijk van je gebruikssituatie.

#### Reactierichtlijnen  

- Specificeer regels die de agent moet volgen, zoals:  
      - "Vat beleidsinformatie altijd samen in opsommingstekens."  
      - "Als je het antwoord niet weet, zeg dan: ‘Het spijt me, ik heb die informatie niet.’"  
      - "Noem nooit vertrouwelijke gegevens buiten de context."

#### Geheugen- & Contextrichtlijnen

- Je kunt de agent instrueren hoeveel beurten van het gesprek het moet onthouden.  
- Bijvoorbeeld: "Onthoud details van de verzoeken van deze gebruiker voor maximaal drie vervolgvragen."

!!! voorbeeld "In een "Voordelenadviseur"-agent kun je opnemen:"
    "Verwijs altijd naar het meest recente HR-handboek bij het beantwoorden van vragen. Als er wordt gevraagd naar inschrijvingsdeadlines, geef dan de specifieke data uit het beleid. Houd antwoorden onder de 150 woorden."

---

## Hoe de Vier Bouwstenen Samenwerken

Wanneer je **Kennis**, **Tools**, **Onderwerpen** en **Instructies** samenstelt, creëert de AI-orchestrator van Copilot Studio een agent die:

1. **Luistert naar een relevant Onderwerp** (geleid door je onderwerp beschrijvingen).  
1. **Instructies toepast** om de toon in te stellen, te beslissen wanneer vervolgvragen te stellen en regels af te dwingen.  
1. **Kennisbronnen gebruikt** om antwoorden te onderbouwen met de gegevens van je organisatie.  
1. **Tools (Acties) aanroept** indien nodig om taken uit te voeren—berichten verzenden, records bijwerken of API's aanroepen.  

Onder de motorkap gebruikt de orchestrator een **generatieve planningsaanpak**: het beslist welke stappen te nemen, in welke volgorde, om een gebruikersverzoek te vervullen. Als een actie mislukt (bijvoorbeeld, een e-mail kan niet worden verzonden), volgt de agent je richtlijnen voor foutafhandeling (stel een verduidelijkende vraag of rapporteer de fout). Omdat de LLM zich aanpast aan de context van het gesprek, kan de agent geheugen behouden over meerdere beurten en nieuwe informatie opnemen naarmate het gesprek vordert.

**Visueel Stroomvoorbeeld:**  
<!--
1. **Gebruiker:** "Laat me mijn PTO-saldo zien."
1. **AI (Onderwerpen):** Koppelt aan het onderwerp "PTO-saldo Controleren."  
1. **AI (Instructies):** Gebruikt een vriendelijke, beknopte toon.  
1. **Agent (Kennis):** Vraagt het HR-SharePoint-lijst op voor het saldo van de gebruiker.  
1. **Agent (Acties):** Haalt de waarde op en verzendt een Teams-bericht:  
   > "Je huidige PTO-saldo is 12 dagen."  
-->

``` mermaid
sequenceDiagram
    participant User
    participant AI
    participant Agent

    User->>AI: "Show me my PTO balance."
    AI->>AI: Match topic: "Check PTO Balance"
    Note over AI: Instructions: Apply friendly, concise tone
    AI->>Agent: Request user's PTO balance
    Note right of Agent: Knowledge: Query HR SharePoint list
    Agent-->>AI: PTO balance = 12 days
    AI->>Agent: Send message to user (Teams)
    Note right of Agent: Action: Deliver notification
    Agent-->>User: "Your current PTO balance is 12 days."
```

---

## 🎉 Missie Voltooid

Je hebt je basisbriefing met succes voltooid. Je hebt nu de vier essentiële bouwstenen van elke agent in Copilot Studio geleerd:

1. **Kennis** – Waar de agent feitelijke informatie opzoekt en gesprekscontext behoudt.  
1. **Tools** – De taken die de agent kan uitvoeren om dingen automatisch te laten gebeuren.  
1. **Onderwerpen** – Hoe de agent gebruikersintentie herkent en beslist welke workflow moet worden uitgevoerd.  
1. **Instructies** – De regels, toon en grenzen die elke reactie sturen.

Met deze componenten kun je een basisagent bouwen die vragen beantwoordt en eenvoudige workflows uitvoert. In de volgende les doorlopen we een stapsgewijze tutorial om een "Service Desk"-agent te maken—van het verbinden van je eerste kennisbron tot het definiëren van een onderwerp en het koppelen van een actie.

Wat volgt: Je gaat je [eerste declaratieve agent voor M365 Copilot bouwen](../03-create-a-declarative-agent-for-M365Copilot/README.md).

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/02-copilot-studio-fundamentals" alt="Analytics" />

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.