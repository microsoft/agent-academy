<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "75efaf515d5694d4fd549bfd6518901a",
  "translation_date": "2025-10-17T01:57:47+00:00",
  "source_file": "docs/operative-preview/03-automate-triggers/README.md",
  "language_code": "nl"
}
-->
# Missie 03: Voeg Event Triggers toe om autonoom te handelen

--8<-- "disclaimer.md"

## 🕵️‍♂️ CODENAAM: `OPERATIE SIGNAL POINT`

> **⏱️ Operatietijdvenster:** `~45 minuten`

## 🎯 Missieoverzicht

Welkom terug, Agent. In [Missie 02](../02-multi-agent/README.md) - leerde je hoe je een Application Intake subagent en een Interview Prep verbonden agent kunt bouwen om de mogelijkheden van je hoofd Hiring Agent uit te breiden.

Je opdracht, als je ervoor kiest om deze te accepteren, is **Operatie Signal Point** - dieper duiken in **event triggers** - je agentsysteem verheffen van reactief naar **autonome werking**. Je transformeert je agents van wachten op menselijke input naar proactief reageren op externe gebeurtenissen en intelligente acties ondernemen zonder toezicht.

Zie het als een upgrade van agents die _vragen beantwoorden_ naar agents die _behoeften anticiperen_ en _zelfstandig handelen_. Door event triggers en geautomatiseerde workflows zal je Hiring Agent inkomende cv-e-mails detecteren, bijlagen automatisch verwerken, gegevens opslaan in Dataverse en je HR-recruitmentteam via Microsoft Teams op de hoogte stellen - terwijl jij je richt op taken met hogere waarde.

Welkom in de wereld waar automatisering en intelligentie samenkomen.

## 🔎 Doelstellingen

In deze missie leer je:

1. Hoe event triggers autonoom gedrag van agents mogelijk maken zonder gebruikersinteractie
1. De verschillen tussen interactieve en autonome agents in Copilot Studio
1. Hoe je event triggers maakt die e-mailbijlagen automatisch verwerken en bestanden uploaden naar Dataverse
1. Hoe je agentflows bouwt die adaptieve kaarten posten naar Teams-kanalen voor meldingen
1. Hoe je gegevens doorgeeft tussen event triggers en agentflows voor end-to-end automatisering

## 🤔 Wat is een Event Trigger?

Eerder in [Recruit](../../recruit/10-add-event-triggers/README.md), leerden we over event triggers. Laten we dit snel herhalen voor het geval je het gemist hebt.

**Event triggers** laten een agent _zelf handelen_ wanneer er iets gebeurt in een ander systeem - geen gebruikersbericht vereist. Wanneer de geconfigureerde gebeurtenis plaatsvindt - zoals “nieuw SharePoint-item,” “nieuwe e-mail,” “Planner-taak toegewezen,” of zelfs een tijdgebaseerde herhaling, stuurt een connector een triggerpayload naar je agent. De agent volgt dan jouw instructies om te beslissen welke acties of onderwerpen opgeroepen moeten worden.

### Belangrijke kenmerken

- **Autonome activatie:**
      - In tegenstelling tot topic triggers die starten wanneer een gebruiker met de agent communiceert, worden event triggers geactiveerd door externe gebeurtenissen, wat proactief gedrag mogelijk maakt.

- **Payload-gestuurd:**
      - Elke gebeurtenis levert een payload (variabelen + optionele instructies) via een connector. De agent gebruikt jouw gedefinieerde instructies en de payload om te bepalen wat er vervolgens moet gebeuren.
      - Bijvoorbeeld _een onderwerp oproepen_ of _acties uitvoeren die door Tools zijn gedefinieerd_.

- **Voorbeelden standaard beschikbaar:**
      - SharePoint/OneDrive bestand of item aangemaakt
      - Planner-taak voltooid/toegewezen
      - Microsoft Forms-reactie ingediend
      - Herhaling/schema

    Beschikbaarheid hangt af van de databeleid van je organisatie die is geconfigureerd in Power Automate.

- **Vereist generatieve orkestratie:**
      - Event triggers zijn alleen beschikbaar wanneer generatieve orkestratie is ingeschakeld voor de agent.

- **Facturering/gebruik:**
      - Elke triggerlevering telt als een bericht binnen de capaciteit van Copilot Studio.
      - Bijvoorbeeld een herhaling van 10 minuten stuurt elke 10 minuten een bericht.

- **Authenticatiemodel en setup:**
      - Je voegt triggers toe binnen het agentoverzicht, onder _Triggers_. Authenticatie voor de triggerconnector gebruikt het account van de agentmaker (“authenticatie door agentauteur”).
      - Je kunt triggerparameters en payload bewerken in de Power Automate-makerportal.

- **Testen & observatie:**
      - Je kunt triggers testen vanuit het testpaneel van de agent en het gedrag inspecteren met de activiteitenkaart voordat je publiceert.

!!! info "TL;DR voor ontwikkelaars"

    Denk aan event triggers als **webhook-achtige signalen** die een gestructureerde payload naar je agent sturen, waardoor deze _werk kan starten_ en acties kan koppelen tussen systemen - zonder te wachten tot een gebruiker erom vraagt.

### Topic triggers - hoe ze verschillen

Eerder leerde je over topic triggers in [Recruit](../../recruit/07-add-new-topic-with-trigger/README.md), maar je vraagt je misschien nog steeds af hoe _Topic_ triggers verschillen van _Event_ triggers, en waarom dat onderscheid belangrijk is om te begrijpen wat een agent autonoom maakt.

Topic triggers bepalen _wanneer een onderwerp wordt uitgevoerd_, meestal als reactie op een gebruikersbericht.

- In generatieve orkestratie is de standaardtrigger **Door agent** - de planner kiest een onderwerp waarvan de naam/beschrijving het beste overeenkomt met het bericht van de gebruiker.
- In klassieke orkestratie is de standaardtrigger **Zinnen** - de planner kiest een onderwerp wanneer een of meerdere triggerzinnen het beste overeenkomen met het bericht van de gebruiker.

Andere triggertypes zijn `Bericht ontvangen`, `Event ontvangen`, `Activiteit ontvangen`, `Gespreksupdate`, `Invoke ontvangen`, `Inactiviteit`, en `Plan voltooid`.

!!! info "Belangrijk verschil"

    Topic triggers starten _gespreksactiviteiten_ binnen de chat.
    
    Event triggers starten _systeemevenementen_ geleverd via connectors die de agent kunnen laten werken zonder enige conversatie.

### Snelle gids voor Topic trigger vs Event trigger

- **Topic trigger:** Gebruiker (of chatactiviteit) zei/deed X ➡️ voer Onderwerp T uit.
- **Event trigger:** SharePoint/Planner/E-mail/Timer geactiveerd met payload P ➡️ agent evalueert instructies ➡️ voert Acties/Onderwerpen uit.

## 🏓 Interactieve agent vs Autonome agent - vergelijking

Nu je het verschil kent tussen event triggers en topic triggers, laten we verder leren over het verschil tussen een interactieve agent en een autonome agent.

In Copilot Studio termen, "interactief" verwijst naar agents die voornamelijk communiceren via **onderwerpen** in een chat of kanaal. "Autonoom" verwijst naar agents die ook gebruik maken van **event triggers** om te werken zonder gebruikersinput.

De volgende tabel vat hun verschillen en overeenkomsten samen.

| Dimensie                             | Interactieve agent     | Autonome agent                                                                                              |
|-------------------------------------|-----------------------|-------------------------------------------------------------------------------------------------------------|
| Hoe het start                       | Gebruiker (of chatactiviteit) triggert een onderwerp. Voorbeeld: Door agent, Zinnen, Bericht ontvangen.   | Externe event trigger stuurt een payload via connector naar de agent. Voorbeeld: SharePoint, Planner, e-mail, schema, etc. |
| Primaire gebruik                    | V&A, begeleide workflows, verzoekgestuurde acties in chat - Teams, web, etc.  | Proactieve operaties en achtergrondautomatisering - reageren op systeemwijzigingen en vervolgens melden, opslaan of taken orkestreren. |
| Triggeroppervlak                    | Topic triggers: Door agent / Zinnen / Bericht ontvangen / Activiteitstypes / Invoke / Inactiviteit / Plan voltooid | Event triggers bibliotheek via connectors; payload bevat gebeurtenisgegevens + optionele instructies. |
| Planner (generatieve orkestratie)   | Sterk gebruikt voor Door agent en Plan voltooid triggers om onderwerpen te selecteren/sequencen. | Vereist voor event triggers; de agent gebruikt instructies + payload om te bepalen welke acties/onderwerpen op te roepen. |
| Typisch voorbeeld                   | Gebruiker vraagt "Wat is ons restitutiebeleid?" → Onderwerp wordt uitgevoerd, kennis wordt opgevraagd, antwoord. | Nieuwe Planner-taak toegewezen → Event trigger wordt geactiveerd → Agent post een Teams-bericht, werkt een record bij, of roept een onderwerp op. |
| Instelpad                           | Maak onderwerpen, definieer triggertype, schrijf dialoog/acties; publiceer naar kanalen. | Voeg event trigger toe (Overzicht → Triggers), verifieer connector met agentauteurreferenties, configureer payload/instructies; test via testpaneel; publiceer. |
| Auth en governance                  | Werkt onder kanaal/auth context; topic triggers reageren op chatactiviteiten in toegestane kanalen. | Triggerbeschikbaarheid hangt af van Power Automate databeleid; connectors werken onder het account van de agentmaker. |
| Observatie                          | Test onderwerpen binnen Copilot Studio, inspecteer gespreksverslagen/activiteiten. | Gebruik Test trigger en activiteitenkaart om uitvoering te valideren voordat je publiceert, monitor activiteit na publicatie. |
| Capaciteitsimpact                   | Elk gebruikersbericht/agentantwoord is een bericht dat capaciteit verbruikt. | Elke gebeurtenislevering is ook een bericht, plus eventuele daaropvolgende acties. Voorbeeld: een herhaling van 10 minuten = 6 berichten/uur |

### Wanneer gebruik je wat?

- Kies **topic triggers (interactief)** wanneer gebruikers het agentgesprek starten - FAQ, begeleide intake, of opdrachtstijl taken binnen chat. De Door agent trigger van de planner vermindert handmatige zinnenverzameling.
- Voeg **event triggers (autonoom)** toe wanneer de agent het gesprek moet starten of zelf actie moet ondernemen - bij updates in SharePoint/Dataverse, inkomende e-mail, of op een schema. Dit verschuift je van reactieve naar proactieve operaties.

## Ontwikkelaarstips & aandachtspunten

1. **Schakel generatieve orkestratie in** voor elke agent die je autonoom wilt maken. Event triggers verschijnen anders niet.

1. **Modelleer de payload vroeg.** Bepaal welke minimale velden je agent nodig heeft van de trigger, zoals `itemId`, `assignedTo`, `dueDate`, en voeg beknopte instructies toe die de agent vertellen welke actie/onderwerp op te roepen op basis van payloadwaarden.

1. **Auth-scope is belangrijk.** Triggers verifiëren met het account van de agentmaker. Zorg ervoor dat dat account de juiste connectorrechten heeft en voldoet aan Power Automate databeleid.

1. **Beheers kosten en ruis.** Hoge frequentieherhalingen of zeer drukke bronnen kunnen snel berichtenverbruik veroorzaken - beperk waar mogelijk of voeg voorwaarden toe in de trigger om gebeurtenissen te filteren.

1. **Test voordat je publiceert.** Gebruik **Test trigger** en de activiteitenkaart om het plan en de opgeroepen acties te bekijken - herhaal instructies/payload totdat het gedrag stabiel is.

## 🧪 Lab 03 - Automatiseren van sollicitatie-e-mails

We gaan nu een event trigger toevoegen aan de **Hiring Agent** en een agentflow bouwen in de subagent **Application Intake Agent** om verdere verwerking voor autonomie te regelen.

### ✨ Gebruiksscenario

!!! info ""

    **Als** HR-recruiter

    **Wil ik** op de hoogte worden gesteld wanneer een e-mail met een cv in mijn inbox is aangekomen en automatisch is geüpload naar Dataverse

    **Zodat ik** op de hoogte blijf van cv's die per e-mail worden verzonden voor sollicitaties die automatisch naar Dataverse worden geüpload

We bereiken dit met twee technieken:

1. Een event trigger voor wanneer de e-mail arriveert,
    1. Controleer of de `contentType` van het bestand gelijk is aan `PDF` als bestandsformaat.
    1. Haal het bestand op en upload het naar Dataverse met acties via de Dataverse-connector.
    1. Stuur vervolgens een prompt naar de agent voor verdere verwerking door invoerparameters door te geven vanuit de Dataverse-acties.

1. Een agentflow wordt toegevoegd aan de subagent **Application Intake Agent** die wordt aangeroepen door de prompt in de event trigger.
    1. Gebruik de invoerparameters die zijn doorgegeven vanuit de prompt van de event trigger in een adaptieve kaart die wordt gepost naar een kanaal in Microsoft Teams om het HR-recruitmentteam te informeren. De adaptieve kaart bevat een link naar de rij in Dataverse die wordt bekeken in de **Hiring Agent**.

Laten we beginnen!

### ✨ Vereisten om deze missie te voltooien

Je moet **ofwel**:

- **Missie 01 en Missie 02 hebben voltooid** en je Hiring Agent klaar hebben, **OF**
- **De starteroplossing van Missie 03 importeren** als je opnieuw begint of moet inhalen. [Download Mission 03 Starter Solution](https://aka.ms/agent-academy)

!!! note "Oplossing importeren en voorbeeldgegevens"
    Als je de starteroplossing gebruikt, raadpleeg [Missie 01](../01-get-started/README.md) voor gedetailleerde instructies over het importeren van oplossingen en voorbeeldgegevens in je omgeving.

Je hebt ook toegang nodig tot **Microsoft Teams** om de tweede laboefening van het posten van een adaptieve kaart naar Microsoft Teams te voltooien.

### Lab 3.1 - Automatisch cv's uploaden naar Dataverse die per e-mail worden ontvangen

1. In de Hiring Agent, scroll naar beneden in het **Overzicht-tabblad** en selecteer **+ Trigger toevoegen**.

       ![Trigger toevoegen aan agent](../../../../../translated_images/3.1_01_AddTrigger.4d5f4d13a4a6b19fe9ff89e3a483601199d7643236d6df65ff81dfea76d1d443.nl.png)

1. Er verschijnt een lijst met triggers. Selecteer **Wanneer een nieuwe e-mail arriveert (V3)** en selecteer **Volgende**.

       ![Selecteer Wanneer een nieuwe e-mail arriveert (V3) trigger](../../../../../translated_images/3.1_02_WhenANewEmailArrives.a250875915165d97c1af6eebba70f16fbfc845a37d4d354c9f35a55aa459035e.nl.png)

1. We zien nu de **Triggernaam** en de **Aanmeldingsverbindingreferenties** voor de vermelde apps.

       Hernoem de triggernaam naar het volgende,
    
       ```text
       Wanneer een nieuwe e-mail arriveert van een sollicitant
       ```

       Zorg ervoor dat je een groen vinkje ziet bij elk van de verbindingreferenties van de vermelde apps. Als je geen groen vinkje ziet, meld je aan via de ellipsen (...) en selecteer **+ Nieuwe verbindingreferentie** om een nieuwe verbindingreferentie te maken.

       ![Details bijwerken voor triggernaam en controleer verbindingreferenties](../../../../../translated_images/3.1_03_RenameTriggerName.3eb80b25bea5f874a51aab600ffd333359de3a981e41eed1b4fc7c8f27eef323.nl.png)

1. De laatste stap is het instellen van de invoereigenschappen van de trigger. Werk de volgende eigenschappen bij naar het volgende,

     | Eigenschap | Hoe in te stellen | Details |
     |------------|-------------------|---------|
     | **Bijlagen opnemen (Optioneel)** | Dropdown | Ja |
     | **Onderwerpfilter (Optioneel)** | Typ/voer in met toetsenbord | Sollicitatie |
     | **Alleen met bijlagen (Optioneel)** | Dropdown | Ja |

       Selecteer **Trigger maken**.

       ![Triggerinvoer configureren](../../../../../translated_images/3.1_04_ConfigureTriggerInputs.2151044f4953b31b40402c2a94fd63fb71fe8eede27a5cbf1d124d4300318446.nl.png)

1. Zodra de trigger is gemaakt, verschijnt er een bevestigingsbericht dat de trigger is toegevoegd aan de agent. Selecteer **Sluiten** en de trigger wordt vermeld in de sectie **Triggers**.
We gaan nu de gebeurtenistrigger bijwerken om meer automatiseringsmogelijkheden toe te voegen. Selecteer de **ellipsen (...)** bij de trigger en kies **Bewerken in Power Automate**.

![Selecteer Bewerken in Power Automate](../../../../../translated_images/3.1_05_SelectEditInPowerAutomate.d298b51d7980cf2fd20a9d8193745aef4ce8097a4a2d33341e2dc159b9bfc099.nl.png)

1. De trigger wordt vervolgens geladen als een stroom in het Power Automate-makerportaal. Wat je ziet, is de stroomontwerper in het Power Automate-makerportaal. Hier kunnen we extra logica en acties toevoegen voor meer automatisering. De trigger verschijnt bovenaan, gevolgd door **Stuurt een prompt naar de opgegeven copilot voor verwerking** als laatste actie in de stroom.

![Stroomontwerper in Power Automate-makerportaal](../../../../../translated_images/3.1_06_EditInPowerAutomate.f8967ace56354224574517f31a2a2ce0a5b5d3ab85bfb9ec6cf70e83ab1b8e6d.nl.png)

1. Standaard kan de trigger **Wanneer een nieuwe e-mail arriveert** in Power Automate meerdere e-mails tegelijk verwerken als er meerdere tegelijk binnenkomen, waarbij de stroom slechts één keer wordt uitgevoerd voor de batch.

Om ervoor te zorgen dat de stroom afzonderlijk wordt uitgevoerd voor elke e-mail, schakel je de instelling **Split On** in de triggerinstellingen in en selecteer je `@triggerOutputs()?['body/value']` in het dropdown-arrayveld.

Met **Split On** ingeschakeld en het arrayveld ingesteld op `@triggerOutputs()?['body/value']`, wordt de stroom afzonderlijk uitgevoerd voor elk bericht, zelfs als er veel tegelijk binnenkomen.

![Schakel Split On-instellingen in de trigger in](../../../../../translated_images/3.1_07_UpdateTriggerSettings.0f363c4f4655276732575fa795bf1ad1568df34d34b703c85073591cc8585609.nl.png)

1. Laten we nu wat logica toevoegen om het bestandstype van de bijlage te controleren. We willen alleen .PDF-bestandsbijlagen uploaden en geen afbeeldingen (deze kunnen afkomstig zijn van e-mailhandtekeningen). Selecteer het **+**-pictogram onder de trigger en kies **Control** onder de sectie **Ingebouwde tools**.

![Selecteer Control](../../../../../translated_images/3.1_08_Control.2fa6987b64ae20d5c8343d1b15937432ab6c893750c4b1427df56067023fd437.nl.png)

1. Selecteer de actie **Voorwaarde**.

![Selecteer Voorwaarde-actie](../../../../../translated_images/3.1_09_AddConditionAction.a7eec0b2a42d4a7c54bd305f0c480b72e3feec155a4e2468e12279082257f21f.nl.png)

1. Nu configureren we de voorwaarde om te controleren of het bestandstype van de bijlage .PDF is. In het veld **Een waarde kiezen**, selecteer je het **bliksemschichtpictogram** of **fx-pictogram** aan de rechterkant.

1. Typ in het veld **Zoeken** het volgende:

```text
content type
```

1. Selecteer vervolgens de parameter **Bijlagen Content-Type** van de trigger.

1. Klik daarna op **Toevoegen** om de dynamische inhoud in te voegen in de parameter **Id** van de actie.

![Configureer Voorwaarde-actie](../../../../../translated_images/3.1_10_SetDynamicContentValue_V2.23c3d0438146a5ff0d695077e65a3b1c8b230b54c51ded8a099c6e99a948e9ed.nl.png)

1. Laten we hier even pauzeren, je hebt waarschijnlijk gemerkt dat de actie **Voor elk** automatisch is verschenen.

Selecteer de actie **Voor elk**. Deze actie vertegenwoordigt het doorlopen van elke bijlage in de e-mail, aangezien de parameter **Bijlagen Content-Type** van de trigger is gekoppeld aan elke bijlage.

Onder de motorkap is het een array en daarom is de actie **Voor elk** automatisch toegevoegd toen we de parameter **Bijlagen Content-Type** selecteerden in de actie **Voorwaarde**.

Om hier meer over te leren, vouw je het volgende extra leerblok uit.

??? info "Extra leren: Actie Voor elk automatisch verschijnen"

🤔 **Waarom verschijnt "Toepassen op elk" of "Voor elk" automatisch?**

Wanneer je een parameter (dynamische inhoud) selecteert die een lijst of array van items vertegenwoordigt - bijvoorbeeld een lijst van bijlagen, e-mails of rijen - herkent Power Automate dat je mogelijk elk item afzonderlijk wilt verwerken.

Om je hierbij te helpen, voegt Power Automate automatisch een **"Toepassen op elk"** (of **Voor elk**) lus toe rond je actie. Dit zorgt ervoor dat je actie één keer wordt uitgevoerd voor elk item in de lijst, in plaats van te proberen de hele lijst in één keer te verwerken (wat fouten kan veroorzaken).

🦋 **Voorbeeld**

- Als je "Bijlagen" selecteert van een vorige actie (wat een array is), en probeert deze te gebruiken in een actie die een enkel bestand verwacht, voegt Power Automate je actie in een **"Toepassen op elk"** (of **Voor elk**) lus.
- Op deze manier wordt je actie uitgevoerd voor **elke bijlage** - één tegelijk.

💡 **Belangrijke punten**

- **Automatisch:** De lus verschijnt automatisch om je te helpen elk item in een verzameling te verwerken.
- **Voorkomt fouten:** Zonder de lus kan je actie mislukken omdat deze mogelijk niet meerdere items tegelijk kan verwerken.
- **Visuele aanwijzing:** Het is een visuele manier om te laten zien dat je stroom de actie herhaalt voor elk item in de lijst.

![Voor elk actie uitgelegd](../../../../../translated_images/3.1_11_ForEach.82bd7b62b815fdbcd67acff0a633137cf03175940c670361ea8669b0df892927.nl.png)

1. Voer vervolgens in het andere veld **Een waarde kiezen** het volgende in:

```text
application/pdf
```

Dit zorgt ervoor dat voor elke bestandbijlage wordt gecontroleerd of het bestandsextensieformaat .PDF is.

![EqualToValue](../../../../../translated_images/3.1_12_EqualToValue.66c107cb8105c1cd3d166b8a5bf690b8dfc30aa2bd2af83c438a9e44d1b544b0.nl.png)

1. Nu configureren we het **True**-pad om het bestand uit de e-mail te halen en te uploaden naar de **CV**-tabel in Dataverse.

Voeg een nieuwe actie toe onder het **True**-pad en zoek naar `html to text`. Selecteer de actie **Html naar tekst**.

Om meer te leren over de actie **Html naar tekst**, vouw je het volgende extra leerblok uit.

??? info "Extra leren: Html naar tekst actie"

🤔 **Wat is de actie "HTML naar tekst"?**

De actie **HTML naar tekst** in Power Automate wordt gebruikt om HTML-geformatteerde inhoud om te zetten in platte tekst. Dit is vooral handig wanneer je gegevens ontvangt (zoals e-mails, webinhoud of API-reacties) die HTML-tags bevatten, en je alleen de leesbare tekst wilt extraheren zonder enige opmaak of code.

⚙️ **Hoe werkt het?**

- **Invoer:** Je geeft een string van HTML-inhoud op (bijvoorbeeld de tekst van een e-mail).
- **Uitvoer:** De actie verwijdert alle HTML-tags en geeft alleen de platte tekst terug.

👍🏻 **Wanneer gebruik je het?**

- Wanneer je leesbare tekst wilt extraheren uit e-mails, webpagina's of API-reacties die HTML bevatten.
- Voordat je inhoud verzendt naar systemen die geen HTML-opmaak ondersteunen (zoals SMS, Teams-berichten of databases).
- Om gegevens op te schonen voor verdere verwerking of analyse.

🔭 **Waar vind je het?**

- In Power Automate voor Agent Flows, zoek naar de actie genaamd `HTML naar tekst`. Het bevindt zich onder de connector **Gegevensbewerkingen**.

💡 **Belangrijke punten**

- Het verwijdert alle HTML-tags en laat alleen de tekst over.
- Het interpreteert of voert geen scripts/stijlen uit - het verwijdert alleen tags.
- Handig voor gegevensopschoning en het voorbereiden van inhoud voor uitvoer in platte tekst.

![Voeg HTML naar tekst actie toe](../../../../../translated_images/3.1_13_AddHTMLToTextAction.2aa9468b87dbeb847c083f24da0fe99438b39f826b13a70982ec255a97c2aa80.nl.png)

1. Vervolgens moeten we een nieuwe verbindingsreferentie maken voor de actie **Html naar tekst** door **Nieuw toevoegen** te selecteren.

![Nieuwe verbindingsreferentie toevoegen](../../../../../translated_images/3.1_14_AddNewConnection.4a23546976b62e7f0e882ac1379950e5bfdcaa702070313cb84a1d22b06a79a7.nl.png)

1. De actie kan nu worden geconfigureerd. Voeg de parameter **Body** van de trigger toe. In het veld **Inhoud**, selecteer je het **bliksemschichtpictogram** of **fx-pictogram** aan de rechterkant.

![Dynamische inhoud toevoegen](../../../../../translated_images/3.1_15_AddDynamicContent.0624a9808f55b993efb6d00bf941a88389655e2ab9970ba2b9a1538272fe9643.nl.png)

1. Zoek in het tabblad **Dynamische inhoud** naar `body` en selecteer de parameter **Body**, gevolgd door **Toevoegen**.

![Body-parameter toevoegen](../../../../../translated_images/3.1_16_AddDynamicContent.40b7eccc080c20513eed5663062b2a63d40d6482eaf2d42fe4e29cb94797f098.nl.png)

1. We hebben deze actie geconfigureerd, dus laten we de actie afsluiten door de twee naar links wijzende hoekige haakjes («) te selecteren om het paneel in te klappen.

![Actiepaneel inklappen](../../../../../translated_images/3.1_17_CollapseAction.ca2c346efb58f8240372c3d145fa10ba609cab1c2075d7df1a9388c82fab79f5.nl.png)

1. Voeg een nieuwe actie toe door het **+ icoon** onder de actie **Html naar tekst** te selecteren, waardoor het paneel wordt geladen om acties toe te voegen. Selecteer de connector **Microsoft Dataverse**.

![Nieuwe actie toevoegen](../../../../../translated_images/3.1_18_AddDataverseAction.5f4be9eb96e22dac239e5545bab5ad9d08b138c2cbcbc700680f33445e132506.nl.png)

1. Selecteer de actie **Een nieuwe rij toevoegen**.

![Een nieuwe rij toevoegen actie](../../../../../translated_images/3.1_19_AddANewRow.48e0a3868821e59ed2a299ccb6a521af27b2430082381d48be38087be62c7c15.nl.png)

1. Hernoem de actie door de **Ellipsen (...)** te selecteren, kopieer en plak het volgende als naam:

```text
Voeg een nieuwe CV-rij toe
```

Voor de parameter **Tabelnaam**, zoek naar `res` en selecteer de tabel **CV's**.

![Actie hernoemen en Tabelnaam-parameter configureren](../../../../../translated_images/3.1_20_RenameAndSelectResumesTable.89f8485653abb7fda1d6eb44210951f05a05ed6f7450a51895079dfd8e72c8bf.nl.png)

1. Selecteer het veld **CV-titel** en selecteer het **bliksemschichtpictogram** of **fx-pictogram** aan de rechterkant.

![CV-titel parameter configureren](../../../../../translated_images/3.1_21_AddDynamicContent.9ee1f89420d5a4aa56797944166208f6e9b0ec67116625168fbcefb907850224.nl.png)

1. Voer in het tabblad **Functie** de volgende expressie in die de functie `item()` gebruikt:

```text
item()?['name']
```

Om meer te leren over de functie `item()`, vouw je het volgende extra leerblok uit.

??? info "Extra leren: `item()` functie"

🤔 **Wat is de `item()` functie?**

- Wanneer je een actie **Toepassen op elk** gebruikt, doorloopt Power Automate elk element in een verzameling (array).
- Het wordt meestal gebruikt binnen acties zoals **Toepassen op elk** (of **Voor elk**), **Selecteren**, of **Filter array**.

⚙️ **Hoe werkt het?**

- `item()` is een functie die het huidige item retourneert dat wordt verwerkt in een lus of arraybewerking.
- Binnen die lus verwijst `item()` naar het _huidige element_ dat wordt verwerkt.

📌 **Waar gebruik je het?**

- **Toepassen op elk:** om eigenschappen van het huidige item te openen.
- **Selecteren:** om elk item in een array te transformeren.
- **Filter array:** om te verwijzen naar het huidige item dat wordt geëvalueerd.

🦋 **Voorbeeld**

- Expressie binnen een lus:
       -  `item()?['Email']`
- Dit haalt de eigenschap `Email` van het huidige item op.

💡 **Belangrijke punten**

- `item()` is _contextgevoelig_: het verwijst altijd naar het huidige item in de lus of arraybewerking waarin je je bevindt.
- Als je lussen nestelt, kun je `items('LoopName')` gebruiken om te verwijzen naar items in een specifieke lus.

Selecteer **Toevoegen** om de expressie toe te voegen aan de parameter **CV-titel**.

![Expressie toevoegen voor CV-titel parameter](../../../../../translated_images/3.1_22_ResumeTitleParameter.9e4fa71a5251cb899e7b09bcc3052eeda1e512841f929118eb9e2b1d232ecb07.nl.png)

1. We moeten nog enkele parameters configureren. Selecteer **Alles weergeven** en selecteer in het veld **Motivatiebrief** het **bliksemschichtpictogram** of **fx-pictogram** aan de rechterkant.

Voer in het tabblad **Functie** de volgende expressie in die dezelfde expressie gebruikt als in de vorige [missie](../02-multi-agent/README.md).

```text
if(greater(length(body('Html_to_text')), 2000), substring(body('Html_to_text'), 0, 2000), body('Html_to_text'))
```

Deze expressie controleert of de _tekst_ van de actie **Html naar tekst** langer is dan 2000 tekens, en als dat zo is, retourneert alleen de eerste 2000 tekens; anders retourneert het de volledige tekst.

![Expressie toevoegen voor Motivatiebrief-parameter](../../../../../translated_images/3.1_23_CoverLetterParameter.d2b521d6b37d05ac4760c91de2964b6d062585a333af6989d9ac0794a4139463.nl.png)

1. De expressie wordt nu toegevoegd aan het veld **Motivatiebrief**.

![Expressie toegevoegd aan de Motivatiebrief-parameter](../../../../../translated_images/3.1_24_ExpressionForCoverLetter.3d18124b10b76bad92db61c529ae395b0bb05f3215e3b783771e76ef7677664e.nl.png)

1. Voor het veld **Bron e-mailadres**, zoek naar `from` en selecteer de parameter **Van** van de trigger, aangezien deze de waarde van het e-mailadres bevat.

![Bron e-mailadres parameter](../../../../../translated_images/3.1_25_FromParameter.1ed1be46711f6705fb807996f6f1e873adc22e285186a851272e0cf3855487ef.nl.png)

1. Voor het veld **Uploaddatum**, selecteer het **bliksemschichtpictogram** of **fx-pictogram** aan de rechterkant. Voer in het tabblad **Functie** de volgende expressie in die de functie `utcNow()` gebruikt:

```text
utcNow()
```

Om meer te leren over de functie `utcNow`, vouw je het volgende extra leerblok uit.

??? info "Extra leren: `utcNow` functie"

🤔 **Wat is de `utcNow()` functie?**

- De functie utcNow() in Power Automate retourneert de huidige datum en tijd in Coordinated Universal Time (UTC) in een ISO 8601-formaat, zoals: `2025-09-23T04:32:14Z`

🦋 **Voorbeeld**

- Expressie:
       -  `concat('Rapport gegenereerd op ', utcNow())`
- Uitvoer is:
       - Rapport gegenereerd op `2025-09-23T04:32:14Z`

💡 **Belangrijke punten**
- **Geen argumenten (invoerparameters) vereist:** geeft altijd de huidige UTC-tijdstempel.
   - **Toepassingen**
       - Tijdsregistratie toevoegen aan logbestanden of bestandsnamen
       - Huidige tijd vergelijken met andere datums
       - Plannen of tijdsgebonden voorwaarden

![Uploaddatumparameter](../../../../../translated_images/3.1_26_UploadDateParameter.21b0afc9807bf680c1c432066f1644d4d018cb4988ad0c0788b5186cea285e02.nl.png)

1. We hebben nu de configuratie van de actie **Een nieuwe CV-rij toevoegen** voltooid, dus laten we het paneel sluiten door het in te klappen.

![Paneel verlaten](../../../../../translated_images/3.1_27_CollapseAction.c033a86e4d8501b10fc454ba7f9c5e08d71d6d881fc72f58011152e1c5d7a7bb.nl.png)

1. We voegen een nieuwe actie toe door op het **+ icoon** onder de actie **Een nieuwe CV-rij toevoegen** te klikken, waarmee het paneel voor het toevoegen van acties wordt geladen. Selecteer opnieuw de **Microsoft Dataverse**-connector.

![Dataverse-actie toevoegen](../../../../../translated_images/3.1_28_AddDataverseAction.1af4dedc95001bfb56b0a642231e9c82b57459b10c68bf6fc177382339a0a221.nl.png)

1. Selecteer de actie **Een bestand of afbeelding uploaden**.

![Actie Een bestand of afbeelding uploaden toevoegen](../../../../../translated_images/3.1_29_AddUploadAFileOrAnImage.e40ab21b735e37bd1fdb5020b7433d1a2f01d6e387bc43a437e970c6e20ee779.nl.png)

1. Hernoem de actie door op de **Ellipsis (...)** te klikken, kopieer en plak de volgende naam:

```text
Upload CV-bestand
```

![Actie hernoemen](../../../../../translated_images/3.1_30_RenameAction.c316fdf225f88e5c3ee26649e672472829c3372c804b544a1372b0455937c204.nl.png)

1. Selecteer vervolgens het veld **Inhoudsnaam** en klik op het **bliksemschicht-icoon** of **fx-icoon** aan de rechterkant.

In het **Functie-tabblad**, voer de volgende expressie in die de `item()`-functie gebruikt. Dit haalt de `name`-eigenschap op van het huidige item (het bijgevoegde bestand).

```text
item()?['name']
```

![Inhoudsnaamparameter configureren](../../../../../translated_images/3.1_31_ContentNameParameter.c6606773f1e82dbcea93d7c2f52dff7a2168f9f04d6b865f699f56d62a41d4ec.nl.png)

1. Voor de parameter **Tabelnaam**, zoek naar `res` en selecteer de tabel **CV's**.

![Tabelnaamparameter configureren](../../../../../translated_images/3.1_32_SelectResumesTable.6a00bf6d585002219003da47f6e1042dc67cbdb3fbaf7d959253550035e27520.nl.png)

1. Selecteer vervolgens het veld **Rij-ID** en klik op het **bliksemschicht-icoon** of **fx-icoon** aan de rechterkant.

Zoek naar `ID` en selecteer de parameter **CV** van de _Een nieuwe rij toevoegen_-Dataverse-actie, omdat deze de ID-waarde bevat van de rij waarnaar het PDF-bestand moet worden geüpload.

Klik op **Toevoegen**.

![Rij-ID selecteren](../../../../../translated_images/3.1_33_RowIDParameter.9824c6b5ea5edf0ce018140c20431a97c2e750d61bcb787f67da260acb6a3838.nl.png)

1. Selecteer het veld **Kolomnaam** en kies de optie **CV PDF**.

![Kolomnaamparameter configureren](../../../../../translated_images/3.1_34_ColumnNameParameter.ef4f770cbd84cae5c15cfe06d1bdbe028d0c6d54a2286dab30769fa01c948b71.nl.png)

1. Selecteer het veld **Inhoud** en klik op het **bliksemschicht-icoon** of **fx-icoon** aan de rechterkant.

In het **Functie-tabblad**, voer de volgende expressie in die de `item()`-functie gebruikt. Dit haalt de `contentBytes`-eigenschap op van het huidige item (het bijgevoegde bestand). `contentBytes` verwijst naar de ruwe binaire gegevens van een bestand of bijlage, gecodeerd als een Base64-string.

```text
item()?['contentBytes']
```

1. We hebben deze actie geconfigureerd, dus laten we het paneel sluiten door op de twee naar links wijzende hoekige haakjes («) te klikken.

![Actiepaneel sluiten](../../../../../translated_images/3.1_36_CollapseAction.1813a7219f0f37b87f80c2cd9f5a9626c3a320858d08a0e62cf14736f97db4c6.nl.png)

1. Selecteer vervolgens **Stuurt een prompt naar de opgegeven copilot voor verwerking**, en sleep deze actie onder de actie **Upload CV-bestand** in het _True_-pad van de voorwaarde.

![Actie slepen en neerzetten in True-pad](../../../../../translated_images/3.1_37_DragAndDropAction.57dc2e9f9d25ed892a4fc072a72c55eca6c38e313ab48fb9db37e9371995440f.nl.png)

1. Selecteer **Stuurt een prompt naar de opgegeven copilot voor verwerking** om deze te configureren.

![Actie selecteren](../../../../../translated_images/3.1_38_SelectAction.d125bdf661f66b6397542c75efbc6a78b8c4862e03dce4002776c251f1c48382.nl.png)

1. Selecteer alle inhoud in het veld **Body/bericht** en wis/verwijder deze.

![Bodyparameter wissen](../../../../../translated_images/3.1_39_ClearBodyParameter.6a345b2e5dbe5510184d7bae7cd406b8cec72c714f34bb40e30741e445a491c0.nl.png)

1. Kopieer en plak de volgende tekst in het veld **Body/bericht** en markeer de `CV-ID PLAATSHOUDER`.

```text
Stuur [CV-ID (tekst)] = "CV-ID PLAATSHOUDER" en [CV-Titel (tekst_1)] = "CV-TITEL PLAATSHOUDER" en [CV-Nummer (tekst_2)] = "CV-NUMMER PLAATSHOUDER" naar de Tool "Teams Bewerkerkanaal informeren" in de subagent "Aanvraagverwerkingsagent"
```

![CV-ID Plaatshoudertekst vervangen](../../../../../translated_images/3.1_40_ReplaceResumeIDPlaceholder.eb61590503cb37d89121aaed6d979a4272aa30c87700206e04db8005e60b294f.nl.png)

1. Klik op het **bliksemschicht-icoon** of **fx-icoon** aan de rechterkant.

Zoek naar `cv` en selecteer de parameter **CV** van de _Een nieuwe rij toevoegen Dataverse_-actie, omdat deze de `ID`-waarde bevat van de CV-rij die is aangemaakt.

Klik op **Toevoegen**.

![CV-parameter selecteren](../../../../../translated_images/3.1_41_SelectResumeParameter.61c4457c33e5d1b596169857535bfc560ef677264f8798e9148ceac999eeaeb9.nl.png)

1. Markeer de `CV-TITEL PLAATSHOUDER`. Klik op het **bliksemschicht-icoon** of **fx-icoon** aan de rechterkant.

Zoek naar `titel` en selecteer de parameter **CV-Titel** van de _Een nieuwe rij toevoegen Dataverse_-actie, omdat deze de `cv-titel`-waarde bevat van de CV-rij die is aangemaakt.

Klik op **Toevoegen**.

![CV-Titelparameter selecteren](../../../../../translated_images/3.1_42_SelectResumeTitleParameter.6c887607128f928da15c4cf6c22254d0473bc22514aa883462fd812bf14245e0.nl.png)

1. Markeer de `CV-NUMMER PLAATSHOUDER`. Klik op het **bliksemschicht-icoon** of **fx-icoon** aan de rechterkant.

Zoek naar `cv-nummer` en selecteer de parameter **CV-Nummer** van de _Een nieuwe rij toevoegen Dataverse_-actie, omdat deze de `CV-Nummer`-waarde bevat van de CV-rij die is aangemaakt.

Klik op **Toevoegen**.

![CV-Nummerparameter selecteren](../../../../../translated_images/3.1_43_SelectResumeNumberParameter.ca19197525250483a7e94598b621072b47ebdf5deb939e1387c979e807ddc554.nl.png)

1. We hebben deze actie geconfigureerd en onze agentflow is voltooid 🙌🏻 Goed bezig! Laten we nu onze gebeurtenistriggerflow opslaan door **Concept opslaan** te selecteren.

![Concept opslaan](../../../../../translated_images/3.1_44_SaveDraft.0c9eee19f0c7cb8483b8d31bc17e1dd54075352d22f0f44603a9d52b52429188.nl.png)

1. We moeten nu de details van de agentflow bewerken, selecteer **Terug**.

![Terug selecteren](../../../../../translated_images/3.1_45_Back.3f85535977bdb02231a0fdb8465e0e8b7d86fd5342ff933e4ae8bf9610279989.nl.png)

1. Selecteer **Bewerken** in de sectie **Details** en werk het **Plan** bij naar de optie **Copilot Studio**.

Klik op **Opslaan**.

![Copilot Studio-plan wijzigen](../../../../../translated_images/3.1_46_ChangePlanDetails.6ab15f1f8bd9ebe55b2c1576c3495f47d1a29d7435e343d4c590e46647601269.nl.png)

1. Er verschijnt een modal waarin wordt gevraagd om te bevestigen dat je wilt overschakelen naar het Copilot Studio-plan. Selecteer **Bevestigen**.

![Copilot Studio-planwijziging bevestigen](../../../../../translated_images/3.1_47_ConfirmCopilotStudioPlan.bc6ab52e7c982127154b0fb743f85ff9cc05dcab944dffc9485bdbcbe0811397.nl.png)

1. Het plan is nu bijgewerkt naar **Copilot Studio**. Selecteer **Bewerken**, omdat we de gebeurtenistriggerflow voor onze agent moeten publiceren.

![Flow bewerken](../../../../../translated_images/3.1_48_PlanChangedAndEdit.3c3207766a648817f7a7878c3a6f684cf41cdceea4dca8f6fc43b7315c8dd648.nl.png)

1. Selecteer **Publiceren**.

![Publiceren](../../../../../translated_images/3.1_49_Publish.38ff814cfce6b3be1076cafb0c28e4e344f75d8cd4117fabed13ad361d4fde3f.nl.png)

Hoera! De gebeurtenistriggerflow is nu gepubliceerd 😃

![Gepubliceerd](../../../../../translated_images/3.1_50_Published.449e7867f7b027ae8a524c749357a1b931955062828bacc3b5a51e979755ef4a.nl.png)

Laten we doorgaan met het maken van een nieuwe agentflow die wordt aangeroepen door de subagent **Aanvraagverwerkingsagent**.

### Lab 3.2 - Een Teams-kanaal informeren met een adaptieve kaart

We gaan nu een nieuwe agentflow maken voor de subagent **Aanvraagverwerkingsagent** die de waarden gebruikt die door de gebeurtenistrigger zijn doorgegeven, om een adaptieve kaart te posten in een Teams-kanaal. Deze adaptieve kaart zal het HR-recruitmentteam waarschuwen over de PDF die automatisch is geüpload, zodat ze deze kunnen beoordelen.

Laten we beginnen!

1. Selecteer in de **Wervingsagent** het tabblad **Agents** en kies de **Aanvraagverwerkingsagent**.

![Aanvraagverwerkingsagent selecteren](../../../../../translated_images/3.2_01_SelectApplicationIntakeAgent.0e9dd3da5c52e9f59ab3a4545c01897ad830853b650ec42f7f8424aa530e0409.nl.png)

1. Scroll naar beneden naar **Tools** en selecteer **+ Toevoegen**.

![Tool toevoegen](../../../../../translated_images/3.2_02_AddNewTool.7c62275fd9f28cdc1923ea056a148171048dc568ff78056958fd54862133f90e.nl.png)

1. De modal **Tool toevoegen** verschijnt. Selecteer **+ Nieuwe tool**.

![Nieuwe tool selecteren](../../../../../translated_images/3.2_03_SelectNewTool.215e7637a9f065a3799a1ecf248eed1e859f201d2dfdfab71a7c1dc18e454e2d.nl.png)

1. Selecteer **Agentflow**.

![Agentflow selecteren](../../../../../translated_images/3.2_04_SelectAgentFlow.7bc12b3435efccc0cfee8f563640562f87d173b436b3313a3d1256fe35024907.nl.png)

1. De **agentflow-ontwerper** wordt geladen. Selecteer in de trigger **Wanneer een agent de flow oproept** **+ Een invoer toevoegen**.

![Invoer toevoegen selecteren](../../../../../translated_images/3.2_05_SelectAddAnInput.f3dc8465f490929baccb0f2dc72b50629b1435ff8a3861f7974885d1d36cdeb1.nl.png)

1. Selecteer **Tekst** als type gebruikersinvoer.

![Tekst selecteren](../../../../../translated_images/3.2_06_SelectText.93585b4af8c4e277c11c2052b638e249508a24a075987026a6ec346e75184217.nl.png)

1. Kopieer en plak de volgende naam voor de invoerparameter in het tekstveld.

```text
CV-ID
```

![CV-ID invoer](../../../../../translated_images/3.2_07_ResumeIdInput.a9e127e343856d6c6d45dd1251cade0503bad9484bc563c02155390951b1faa5.nl.png)

1. Herhaal dezelfde stappen om een tweede tekstinvoer toe te voegen. Kopieer en plak de volgende naam voor de invoerparameter.

```text
CV-Titel
```

![CV-Titel invoer](../../../../../translated_images/3.2_08_ResumeTitleInput.c71ecd364a974a93abb0de876807c2e9bde59fcea6df317babeb20764b636f26.nl.png)

1. Herhaal dezelfde stappen om een derde tekstinvoer toe te voegen. Kopieer en plak de volgende naam voor de invoerparameter.

```text
CV-Nummer
```
![CV-Nummer invoer](../../../../../translated_images/3.2_09_ResumeNumberInput.a6c060000354deab51dffef3c1ad9f13378cfeabdafdb7a33c2a591bfd044709.nl.png)

1. Herinner je je nog hoe we in [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request) een adaptieve kaart hebben toegevoegd binnen een onderwerp voor onze agent? Deze keer gaan we een adaptieve kaart toevoegen in een agentflow. We gaan nu een andere actie toevoegen aan onze agentflow die een adaptieve kaart post in een Teams-kanaal.

Selecteer het **+ icoon** onder de trigger.

![Nieuwe actie toevoegen](../../../../../translated_images/3.2_10_AddNewAction.4474a2150991cac246d5e4091a74ba91e76e1c5bafa34ad985a8567c09dcdd35.nl.png)

1. Selecteer de actie **Kaart posten in een chat of kanaal**.

![Actie Kaart posten in een chat of kanaal selecteren](../../../../../translated_images/3.2_11_SelectPostCardInAChatOrChannel.97de43ed1c883b14d0150ae65efaa90f53f0815bdf57ec10e0e22cbd3e22ce06.nl.png)

1. Er moet een verbindingsreferentie naar Microsoft Teams worden gemaakt met je ingelogde gebruikersaccount. Selecteer **Inloggen**.

![Inloggen selecteren](../../../../../translated_images/3.2_12_SignInToCreateConnectionReference.2297f8b702d71508f1b21a3ed4046df4846dc03b13932a20e5c445403559ac1f.nl.png)

1. Selecteer je gebruikersaccount en klik vervolgens op **Toegang toestaan**.

![Toegang toestaan selecteren](../../../../../translated_images/3.2_13_AllowAccess.31cbf82606d75231108bd4f2bfeafffda3cd7e7e760cd46004c2705afe050aaf.nl.png)

1. Voor de volgende invoerparameters:

| Parameter | Hoe in te stellen | Details |
|----------|------------|---------|
| **Posten als** | Dropdown | Selecteer de optie `Flow bot` |
| **Posten in** | Dropdown | Selecteer de optie `Kanaal` |
| **Team** | Dropdown | Selecteer een team dat beschikbaar is in je omgeving en waartoe je toegang hebt voor het voltooien van deze laboefening |
| **Kanaal** | Dropdown | Selecteer een kanaal dat beschikbaar is in je omgeving en waartoe je toegang hebt voor het voltooien van deze laboefening |

![Invoerparameters configureren](../../../../../translated_images/3.2_14_ConfigureParameters.8c21924f90db3acaa33d4e35ef43c70556ba4cc37207a195ac654e55a43400a6.nl.png)

1. Vervolgens configureren we het veld **Adaptieve kaart**. Selecteer het veld **Adaptieve kaart**.

![Adaptieve kaartveld selecteren](../../../../../translated_images/3.2_15_SelectAdaptiveCardParameter.65323056be6174d2eed7422650aaa70fc16396148f90b8af1801110d7a30d66f.nl.png)

1. Open het [JSON-bestand met bijgewerkte CV-tabel](../../../../../docs/operative-preview/03-automate-triggers/assets/3.2_ResumeTableUpdated.json), kopieer de volledige inhoud en plak deze in het veld Adaptieve kaart.

![JSON kopiëren en plakken](../../../../../translated_images/3.2_16_JSON.f022097fb7139bd12514abb8fdc518309ea940f005cc94a11ba159359cde784b.nl.png)

1. Net zoals we deden in [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request), gaan we bestaande waarden in de JSON-payload vervangen door daadwerkelijke waarden of dynamische inhoud.

Laten we eerst de URL voor de `url`-eigenschap binnen de `selectAction`-eigenschap bijwerken. Deze URL wordt vervangen door de URL van de CV's systeemweergave in de **Hiring Hub** modelgestuurde app. Hierdoor kan de recruiter de actie selecteren en naar de CV's systeemweergave in de modelgestuurde app worden geleid.

Markeer de huidige URL-waarde en verwijder deze.

![URL-waarde selecteren](../../../../../translated_images/3.2_17_SystemViewURL.5e51fd894ac916f436107c7b668d66ca87ca8bdfd7affeb7dae1b10fa8ff5afb.nl.png)

1. Navigeer in de **Hiring Hub** modelgestuurde app naar de **CV's** systeemweergave via het menu aan de linkerkant en kopieer de URL. Navigeer vervolgens terug naar de agentflow en plak de gekopieerde URL in de **url**-eigenschap binnen de `selectAction`-eigenschap.

![URL van CV's systeemweergave kopiëren](../../../../../translated_images/3.2_18_CopyResumesSystemViewURL.14d9f55c7db15977a12dfe2a5df95aab5cf241e646b08f9838cff31aaa27a381.nl.png)
1. Je zou het volgende moeten zien, waarbij de geel gemarkeerde delen de details van jouw omgeving zijn in de **Hiring Hub** modelgestuurde app.

     | Parameter | Waarde | Uitleg |
     |----------|------------|---------|
     | **Organisatie-URI** | GUID | De URL van de Dataverse/Dynamics 365 omgeving |
     | **appid** | GUID | Om een specifieke modelgestuurde app te openen, wordt de queryparameter appid of appname gebruikt. In dit geval wordt appid gebruikt |
     | **viewid** | GUID | De queryparameter die de id van de weergave is |

       ![URL plakken](../../../../../translated_images/3.2_19_PasteURL.41f3fdd66190c8ba478857f91c90eb05ee9621243bda7b7ad26eb5802b8e970d.nl.png)

1. Vervolgens voegen we dynamische inhoudswaarden toe voor verschillende eigenschappen. Laten we beginnen met de tekst die het referentienummer van de cv weergeeft die autonoom is aangemaakt door de gebeurtenistrigger.

      Selecteer het **paneel**-icoon om het actiepaneel te laden.

       ![Selecteer paneel-icoon](../../../../../translated_images/3.2_20_SelectPannelIcon.786a4147ba12e0e62648c66f14fb2b9a7f89b27c3a610f43420e31cb0c9fb5da.nl.png)

1. Scroll naar de regel waar je de eigenschap `text` ziet voor `RESUME NUMBER PLACEHOLDER`. Markeer de placeholderwaarde en verwijder deze.

       ![Placeholder verwijderen](../../../../../translated_images/3.2_21_DeleteResumeNumberPlaceholder.6ffd7a5a073f9d9a11e0e119c87e827243de237f70ebc3ab37dfdd36de615130.nl.png)

1. Klik tussen de dubbele aanhalingstekens en selecteer het **bliksemschicht-icoon** of **fx-icoon** aan de rechterkant.

      In het tabblad **Dynamische inhoud** selecteer je de parameter **ResumeNumber** en klik op **Toevoegen**.

       ![ResumeNumber parameter toevoegen](../../../../../translated_images/3.2_22_SelectResumeNumberParameter.de5a6eecb3ee092441d841ad137dfecd9f8d503a370ff60eb5ccdc0267e37df0.nl.png)

1. De parameter **ResumeNumber** wordt nu toegevoegd als dynamische inhoud aan de eigenschap `text`.

       ![ResumeNumber dynamische inhoud](../../../../../translated_images/3.2_23_ResumeNumberDynamicContent.129a566ac6e9d448b268b828da5766a7056779ac167f65b498e2ca21d703b7f0.nl.png)

1. We herhalen dezelfde stappen voor de `RESUME NAME PLACEHOLDER`. Scroll naar de regel waar je de eigenschap `text` ziet voor `RESUME NAME PLACEHOLDER`. Markeer de placeholderwaarde en verwijder deze.

       ![Resume Name Placeholder](../../../../../translated_images/3.2_24_ResumeNamePlaceholder.6c879b99ae375892f7e0a511bfedd5fa9e60a8dea71ea2a44c2a7a04c8389f43.nl.png)

1. Klik tussen de dubbele aanhalingstekens en selecteer het **bliksemschicht-icoon** of **fx-icoon** aan de rechterkant.

      In het tabblad **Dynamische inhoud** selecteer je de parameter **ResumeTitle** en klik op **Toevoegen**.

       ![ResumeTitle parameter toevoegen](../../../../../translated_images/3.2_25_SelectResumeTitleParameter.18c769bbd2c60e362a56f6055e151ed6287903cb625addcdfbb43044828d7378.nl.png)

1. De parameter **ResumeTitle** wordt nu toegevoegd als dynamische inhoud aan de eigenschap `text`.

       ![ResumeTitle dynamische inhoud](../../../../../translated_images/3.2_26_ResumeTitleDynamicContent.7219e078f71fc0d5d4a6bb228ba2d53f0898ba26a27c5eb859df90d12dd52c70.nl.png)

1. We herhalen dezelfde stappen voor de waarde **Due Date**, die aangeeft wanneer een recruiter de cv moet beoordelen. Scroll naar de regel waar je de eigenschap `text` ziet voor `May 21, 2023`.

       ![Selecteer toegang toestaan](../../../../../translated_images/3.2_27_DueDatePlaceholder.17c6003cc9ec1141b0aeb5cde203098a7f5534fa11f01a3cbffb66206ed1633a.nl.png)

1. Verwijder deze placeholderwaarde en klik tussen de dubbele aanhalingstekens.

       ![Verwijderen](../../../../../translated_images/3.2_28_DeleteDueDatePlaceholder.9a3df55fb3c9ed72e61e0a60dc3344335b0444ff537c9fb51036b0442a85d268.nl.png)

1. Selecteer het **bliksemschicht-icoon** of **fx-icoon** aan de rechterkant en voer in het tabblad **Functie** de volgende expressie in en klik op **Toevoegen**.

       ```text
       addDays(utcNow(), 3, 'MMM dd, yyyy')
       ```

      Deze expressie maakt gebruik van twee functies.

     | Functie | Uitleg |
     |----------|------------|
     | **addDays** | Voegt een opgegeven aantal dagen toe aan een gegeven datum en retourneert de resulterende datum in stringformaat |
     | **utcNow** | Retourneert de huidige datum en tijd in Coordinated Universal Time (UTC) formaat als een string. |

      Voor de waarde utcNow formatteren we de datum als maand en dag, gevolgd door het jaar.

       ![Expressie Due Date](../../../../../translated_images/3.2_29_01_ExpressionDueDate.a4fa31985f5500971f2fc6da0e81e008af12be19d54a30a240764b74a4b2dbcb.nl.png)

      De expressie wordt nu toegevoegd aan de eigenschap `text`.

       ![Expressie Due Date](../../../../../translated_images/3.2_29_02_ExpressionDueDate.6159288450731c7b09628af70f0c9a6d92590ca7c7e39e8a524ae8af7c511f2c.nl.png)

1. Tot slot werken we de URL bij voor de eigenschap `url` binnen de eigenschap `actions` array onderaan de JSON-payload. Deze huidige placeholder-URL wordt vervangen door de URL van de cv-rij in de **Hiring Hub** modelgestuurde app. Dit stelt de recruiter in staat om de actie `Action.OpenURL` van de adaptieve kaart te selecteren en naar de cv in de modelgestuurde app te worden geleid.

       ![Placeholder URL voor cv bekijken verwijderen](../../../../../translated_images/3.2_30_ViewResumeURLPlaceholder.f27af6cadfb54fb977f0b46ea3ec42ee0638d38ebc5d294eff5da52abf9d4a1b.nl.png)

1. Open in de **Hiring Hub** modelgestuurde app een rij in de systeemweergave **Resumes** via het menu aan de linkerkant. De cv-rij wordt geladen als een formulier in de modelgestuurde app.

      Kopieer de URL van de cv-rij.

    ??? info "Hoe navigeer je terug naar de **Hiring Hub** modelgestuurde app als je deze hebt verlaten/gesloten"

        1. Ga naar [https://make.powerapps.com](https://make.powerapps.com) en zorg ervoor dat je in de ontwikkelaarsomgeving bent die je gebruikt voor deze lab-oefeningen, anders schakel je naar deze omgeving.
        
        ![Ga naar make.powerapps.com](../../../../../translated_images/3.2_31_Note_01_BrowseToURL.a13dfc8b05a0b34f3a4c853f3d3e418864176b52b1b40c069da7712af5562aa5.nl.png)

        1. Selecteer **Apps** in het menu aan de linkerkant en selecteer voor de **Hiring Hub** modelgestuurde app het **Afspelen**-icoon om deze in je browser te laden.
        
        ![Selecteer Hiring Hub modelgestuurde app](../../../../../translated_images/3.2_31_Note_02_HiringHubApp.a09b6ea28b4fea8932809cb847cb0ea3d8faeb7b7b5604852de1f46ab1e9741b.nl.png)

       ![Kopieer cv-rij URL](../../../../../translated_images/3.2_31_CopyResumeURL.f6156f8792526129c2613922f0137221b2944fa8ffe7c04766d710521ad8765b.nl.png)

1. Navigeer vervolgens terug naar de agent flow, markeer de huidige placeholder-URL-waarde en verwijder deze.

       ![Placeholder URL voor cv-rij verwijderen](../../../../../translated_images/3.2_32_SelectResumeURLPlaceHolder.8db783de292428eaa8937242eba4a54ebb1df7bf4c1bc9391b016ee545fb2b9f.nl.png)

1. Plak vervolgens de gekopieerde URL in de eigenschap **url** binnen de eigenschap `url`.

       ![Gekopieerde cv-rij URL plakken](../../../../../translated_images/3.2_33_PasteResumeRowURL.d7ba92493d7597b89f75e2f17f76846ac17a9ba89c2e36729dc6b5dc1599b047.nl.png)

1. Je zou het volgende moeten zien. Verwijder de `GUID` id-waarde aan het einde. We vervangen dit door dynamische inhoud - de parameter **ResumeId**.

       ![Placeholder URL voor cv bekijken verwijderen](../../../../../translated_images/3.2_34_DeleteViewResumePlaceholderURL.7b26209eaeef6dc0a21b16140d05fe2f0e38de5f714575edd24d21dded58102a.nl.png)

1. Selecteer het **bliksemschicht-icoon** of **fx-icoon** aan de rechterkant.

      In het tabblad **Dynamische inhoud** selecteer je de parameter **ResumeId** en klik op **Toevoegen**.

       ![ResumeId parameter](../../../../../translated_images/3.2_35_ResumeIdParameter.3dc710a7f5216944387f4d5f82c0a372eee23ee5259dec04147ad00e9c454d7d.nl.png)

1. De **ResumeId** wordt toegevoegd als dynamische inhoud. Het volgende, geel gemarkeerd, zijn jouw omgevingsdetails van de **Hiring Hub** modelgestuurde app.

     | Parameter | Waarde | Uitleg |
     |----------|------------|---------|
     | **Organisatie-URI** | GUID | De URL van de Dataverse/Dynamics 365 omgeving |
     | **appid** | GUID | Om een specifieke modelgestuurde app te openen, wordt de queryparameter appid of appname gebruikt. In dit geval wordt appid gebruikt |
     | **id** | GUID | De queryparameter die de id van de cv-rij is |

       ![ResumeId dynamische inhoud](../../../../../translated_images/3.2_36_ResumeIdDynamicContent.a1a40dfb4a83b60f1b75b02160890e3fec41c2c7df8adf32e02d652a57c1ee87.nl.png)

1. We hebben de configuratie van de actie **Post card in a chat or channel** voltooid 👏🏻 Sluit het configuratiepaneel van de actie door op het **x**-icoon te klikken.

       ![Paneel sluiten](../../../../../translated_images/3.2_37_CloseActionPanel.23d07107381411aa9494ef36fb240682a0727a63e6f15082074b34a1defd517b.nl.png)

1. Tot slot configureren we de laatste actie, **Respond to the agent**, door een tekst terug te sturen naar de agent om de verwerking te beëindigen.

      Selecteer in de actie **Respond to the agent** **+Een output toevoegen**.

       ![Output toevoegen selecteren](../../../../../translated_images/3.2_38_AddAnOutput.de1a0e49033cb077eb5d2c226152bbb06dc12fb95d0496c69d469eecdb46c0ae.nl.png)

1. Selecteer **Tekst** als het type output.

       ![Tekst als type output selecteren](../../../../../translated_images/3.2_39_SelectText.4e1e82c35fe9d1b569b668092d405aa9b0c81fbe67e7de68a660f2083ed3afdd.nl.png)

1. Voer het volgende in als naam van de output.

       ![Einde gesprek output](../../../../../translated_images/3.2_40_EndConversationOutput.e392b58847d8439443c89459fccbbd88d4ea5e5fa562749b77407c46b9ff4ca4.nl.png)

1. Voer het volgende in als waarde voor de output.

       ```text
       Finished
       ```

       ![Waarde einde gesprek output](../../../../../translated_images/3.2_41_EndConversationOutputValue.2cb836900ee9fca802926676e613b077938f1106cc16e77ddd77af64ce92dcc8.nl.png)

1. We hebben nu de configuratie van de agent flow voltooid. Selecteer **Concept opslaan** om de agent flow op te slaan. Er verschijnt een bevestigingsbericht zodra het is opgeslagen.

       ![Concept opslaan](../../../../../translated_images/3.2_42_SaveDraft.1bb26eec40faf5d2c244d93f869344915e90423623e07e02cac2c1f8c73d1a4a.nl.png)

1. Voordat we de agent flow publiceren, moeten we de details voor de agent flow bijwerken. Selecteer het tabblad **Overzicht** en klik op **Bewerken**.

      Voer in het veld voor de naam van de flow het volgende in.

       ```text
       Notify Teams Applicant channel
       ```      

      Selecteer daarna het **Vernieuwen**-icoon om de beschrijving van de agent flow bij te werken met behulp van AI.

      Klik vervolgens op **Opslaan** om de bijgewerkte details voor de agent flow op te slaan.

       ![Details bewerken en opslaan](../../../../../translated_images/3.2_43_EditDetails.f0c9b53a9c1b29e4aa3c34774680559ae9173f77b3a37817bab2296b77ffcca7.nl.png)

1. Navigeer terug naar het tabblad **Ontwerper** en selecteer **Publiceren** om de agent flow te publiceren. Er verschijnt een bevestigingsbericht zodra het is opgeslagen.

       ![Agent flow publiceren](../../../../../translated_images/3.2_44_PublishAgentFlow.3014e6de5e53aa5fc2021bf6e11b901c4990b4fbb4d4cee33cc6d5b6cc641ed8.nl.png)

1. De agent flow moet nu worden toegevoegd als een tool in de **Application Intake Agent**. Navigeer terug naar de **Hiring Agent** en selecteer het tabblad **Agents**, selecteer vervolgens de **Application Intake Agent**.

       ![Application Intake Agent selecteren](../../../../../translated_images/3.2_45_ApplicationIntakeAgent.0446b1762d0f499e880e7984f59669639193566f72539cd4fba5c62cd1fe8726.nl.png)

1. In de sectie **Details** van de agent werken we het veld **Beschrijving** bij. Kopieer het volgende en plak dit aan het einde van de beschrijvingstekst.

       ```text
       en ook de Teams Applicant channel notificeren
       ```

       ![Agent beschrijving bijwerken](../../../../../translated_images/3.2_46_UpdateAgentDescription.56344699cd3cc5e417e8f95362ed2288d0c0391f33bd98872e7e008a545175f0.nl.png)

1. Vervolgens voegen we de agent flow toe als een tool. Scroll naar beneden en selecteer **+ Toevoegen**.

       ![Toevoegen selecteren](../../../../../translated_images/3.2_47_AddTools.c7557e272bd731129dffe9edebba3b04170d27806aaa14fffbe3d66b7b61808b.nl.png)

1. Selecteer de eerder aangemaakte agent flow, **Notify Teams Applicant Channel**.

       ![Agent flow selecteren](../../../../../translated_images/3.2_48_NotifyTeamsApplicantChannelAgentFlow.5985f570786edef4eac93455f7a07978c0daf54e1371660bfd56a4c16b6aaf79.nl.png)

1. Selecteer vervolgens **Toevoegen en configureren**.

       ![Toevoegen en configureren selecteren](../../../../../translated_images/3.2_49_AddAndConfigure.c2d6cccfa9e4bb23ff58b615ad16d0b3ade4ef867b73b9196a45df6990d8072f.nl.png)

1. In de sectie **Inputs** van de agent flow zijn de drie inputs die we eerder hebben geconfigureerd zichtbaar. Standaard is de configuratie **Automatisch invullen met AI** ingesteld. We laten deze instelling zoals deze is, omdat de prompt van de gebeurtenistrigger (in de laatste actie, **Verstuurt een prompt naar de opgegeven copilot voor verwerking** - dit zijn stappen 38-44 van **Lab 3.1 - Automatisch cv's uploaden naar Dataverse ontvangen via e-mail**) de parameterwaarden bevat die AI zal extraheren.

       ![Tool agent flow inputs](../../../../../translated_images/3.2_50_Inputs.9fbb57b83b533d5a60f957505bb1e5430886ec9e6c70c10ed1c641d6b33fcc21.nl.png)

1. Nu de tool is toegevoegd aan de **Application Intake Agent**, moeten de instructies van de agent worden bijgewerkt. Selecteer het **terug-pijl**-icoon om terug te keren naar de lijst met agents.

       ![Terug-pijl icoon selecteren](../../../../../translated_images/3.2_51_SelectBack.6a9a55176d931895777822d3f9276d5d12ffe379a8860dd521e1c895e8188bba.nl.png)

1. Selecteer de **Application Intake Agent** in het tabblad **Agents** van de **Hiring Agent**.

       ![Application Intake Agent selecteren](../../../../../translated_images/3.2_52_SelectApplicationIntakeAgent.039140313422e833389fd134b3a70a0eed11ba175ede5dbdc4abcce6004c7d2d.nl.png)

1. In het veld **Instructies** voeg je een nieuwe regel toe na de `2.Post-Upload` instructies. Kopieer en plak de volgende instructies.

       ```text
       Proces voor het uploaden van cv's via e-mail
       1. Wanneer je een bericht ontvangt, **Stuur [ResumeId (text)] = "1680265f-5793-f011-b41b-7c1e525be9f7" en [ResumeTitle (text_1)] = "TAYLOR TESTPERSON (FICTIEF).pdf" en [ResumeNumber (text_2)]= "R01026" naar de tool "Notify Teams Applicant channel"** in de subagent "Application Intake Agent", roep [AGENT FLOW PLACEHOLDER] aan.
       ```

       ![Instructies van Application Intake Agent bijwerken](../../../../../translated_images/3.2_53_PasteCopiedInstructions.f24ed715e907cf023449a54b894354ca1252b198e9be694eec2875f7f647f9c2.nl.png)

1. Markeer de tekst `[AGENT FLOW PLACEHOLDER]`.

       ![Placeholder markeren](../../../../../translated_images/3.2_54_HighlightPlaceholder.6c3fcac3c8f4fb6e5cce2dbd6b6548b84652d009e20fa4a01183a9a1b42b24fb.nl.png)

1. Voer het schuine streepje, `/`, in en selecteer de tool **Notify Teams Applicant Channel**.

       ![Notify Teams Applicant Channel tool selecteren](../../../../../translated_images/3.2_55_NotifyTeamsApplicatnChannelTool.2e3dd1e9ee9b2dfe10e1f2feb7e3b74b08856ce3afb16dafae1f2c4b73da904f.nl.png)
1. De agentflow zal nu worden gestart door de **Application Intake Agent** volgens de instructies, nadat de laatste actie (**Stuurt een prompt naar de opgegeven copilot voor verwerking**) in de event trigger de prompt met de parameterwaarden terugstuurt naar de agent.

      Selecteer **Opslaan** om de bijgewerkte instructies voor de **Application Intake Agent** op te slaan.

       ![Selecteer Opslaan](../../../../../translated_images/3.2_56_Save.6abb0131f96b20d3753b5990313eaea6a237bef2bf0e2103a2ee5ba570fd7c04.nl.png)

1. De instructies worden nu bijgewerkt zodra de agent is opgeslagen.

       ![Instructies bijgewerkt](../../../../../translated_images/3.2_57_InstructionsUpdated.5bfbfe2ca1da16284358a9917246bd8676cd6c095839ed1c69361d992cacd2b3.nl.png)

1. We moeten nu de **Hiring Agent** publiceren. Selecteer **Publiceren** rechtsboven en selecteer **Publiceren** in de _Publiceer deze agent-modal_ die verschijnt.

       ![Publiceer Hiring Agent](../../../../../translated_images/3.2_58_PublishAgent.e7ec81c81b735de0cd11516aa944c759ea510e2b0bc9acf9f00d42d788896991.nl.png)

1. Na publicatie verschijnt een bevestigingsbericht dat de agent is gepubliceerd.

       ![Bevestigingsbericht](../../../../../translated_images/3.2_59_AgentPublished.d15e01232544cf08943260dfbf61c92339dbd187620349e7c5a43add4796ed12.nl.png)

We kunnen nu de agent testen!

### Lab 3.3 - Test event trigger

1. Om de event trigger uit te voeren, moet er een e-mail worden verzonden met een pdf-bestand van een cv. Stel een nieuwe e-mail op in Outlook.

     | E-mailonderdeel | Details |
     |----------|------------|
     | **Aan ontvanger** | Gebruik je ingelogde gebruikersaccount als waarde |
     | **Bestandsbijlage** | Upload het bestand [TAYLOR TESTPERSON (FICTIEF)](../../../../../docs/operative-preview/test-data/resumes/TAYLOR%20TESTPERSON%20(FICTITIOUS).pdf) |
     | **Tekst** | Kopieer en plak de onderstaande tekst als de inhoud van de e-mail |

       ```text
       Beste Hiring Manager,

       Ik schrijf u om mijn interesse kenbaar te maken in de functie van Senior Power Platform Engineer bij uw organisatie. Met meer dan negen jaar ervaring in het leveren van veilige en schaalbare oplossingen op Microsoft-cloudplatforms, ben ik ervan overtuigd dat ik effectief kan bijdragen aan uw team.

       In mijn meest recente rol als Lead Power Platform Engineer heb ik een geautomatiseerde cv-intake pipeline ontwikkeld, waardoor handmatige triage werd verminderd en de doorzoekbaarheid werd verbeterd. Ik heb HR-casebeheerapplicaties geleverd, oplossing-bewuste flows geïntroduceerd en PR-controles geïmplementeerd om de implementatietijden te verbeteren. Mijn expertise omvat Power Apps, Power Automate, Power Pages, Dataverse en een reeks Microsoft 365-diensten, evenals integratie met Graph/REST API's en Azure Functions.

       Eerder heb ik goedkeuringen in Teams ontwikkeld met adaptieve kaarten, waardoor goedkeuringstijden werden teruggebracht tot dezelfde dag, en robuuste foutafhandelingsframeworks gecreëerd. Mijn achtergrond omvat ook het migreren van legacy-workflows naar Power Automate en het bouwen van selfserviceportalen die door honderden medewerkers zijn geadopteerd.

       Ik heb een B.Sc. in Computer Science en ben gecertificeerd als Power Platform Developer (PL-400) en Solution Architect (PL-600). Daarnaast ben ik gepassioneerd over mentoring en heb ik vrijwilligerswerk gedaan bij lokale maker-groepen.

       Bijgevoegd vindt u mijn cv ter overweging. Ik zou graag de kans krijgen om te bespreken hoe mijn vaardigheden en ervaring aansluiten bij uw behoeften.

       Dank u voor uw tijd en overweging.

       Met vriendelijke groet,  
       Taylor Testperson
       ```

       **Verzend** de e-mail zodra deze is opgesteld.

       ![E-mail opstellen met PDF-bestandsbijlage](../../../../../translated_images/3.3_01_ComposeEmailWithAttachment.eccba1bbcc276b4373277b193a66d8818b712c6ab9468ee12902545522b670f7.nl.png)

1. Ga in het Power Automate-makerportaal naar de event trigger flow en selecteer het **Vernieuwen**-icoon om de geslaagde flowuitvoering voor de verzonden e-mail te bekijken.

       ![Selecteer vernieuwen-icoon om flowuitvoering te bekijken](../../../../../translated_images/3.3_02_FlowRun.0e99756ebc5fba371dc72719b0619736626934461e58db2dc153535cbabcc1e8.nl.png)

1. Ga terug naar Copilot Studio in de **Hiring Agent** en selecteer het tabblad **Activiteit**.

       ![Selecteer tabblad Activiteit](../../../../../translated_images/3.3_03_SelectActivity.11d78735a8a2a1f64443d285deb47f2bacc5bd53ded039791215f9465dbc3f76.nl.png)

1. Het tabblad **Activiteit** wordt geladen en toont alle activiteiten van de **Hiring Agent**. Er zal een activiteit zijn met de naamwaarde **Automated** en de status **Voltooid**. Deze activiteit vertegenwoordigt de event trigger en de agentflow die is gestart.

       ![Activiteit voltooid](../../../../../translated_images/3.3_04_StatusComplete.dbe14ffb9414b0f4d869841426c4ca595d7a664bf13f4b5e2e29a4e251b9064c.nl.png)

1. Selecteer de activiteit en selecteer de event trigger in de activiteitenkaart. In het paneel aan de rechterkant zie je hoe de invoerparameters in de prompt de waarden `Resume Id`, `Resume Title` en `Resume Number` bevatten van de **Dataverse**-rij die is aangemaakt. Dit komt voort uit de dynamische inhoudswaarden die eerder zijn geconfigureerd in stappen 18 - 27 van **Lab 3.1 - Automatisch cv's uploaden naar Dataverse die per e-mail zijn ontvangen**.

       ![Event trigger](../../../../../translated_images/3.3_05_EventTrigger.cbd73cd43a79e88e782d1e47ac8ddacdbe30d582a4da61a31010f44a9dacdd12.nl.png)

1. Navigeer terug naar de **Hiring Hub** modelgestuurde app en selecteer in de **Resumes system view** de optie **Vernieuwen** om de weergave te verversen. De nieuw aangemaakte rij voor het cv dat per e-mail is verzonden, wordt nu weergegeven omdat deze is aangemaakt via de event trigger.

       ![Cv-rij aangemaakt](../../../../../translated_images/3.3_06_ResumeRowCreated.9ab850d8d7c066aad8531409b00a4de5f214b4d8d209d39fa0d493d5c55e041d.nl.png)

1. Navigeer terug naar Copilot Studio en selecteer de **Notify Teams Applicant Channel** agentflow binnen de **Application Intake Agent** in de activiteitenkaart. In het paneel aan de rechterkant zie je hoe de invoerwaarden afkomstig zijn van de Dataverse-rij. Dit komt voort uit de prompt die is verzonden door de laatste actie (**Stuurt een prompt naar de opgegeven copilot voor verwerking**) in de event trigger die de parameterwaarden bevat van de nieuw aangemaakte Dataverse-rij. Zo kunnen we parameterwaarden doorgeven van event triggers naar agentflows.

       ![Selecteer agentflow](../../../../../translated_images/3.3_07_NotifyTeamsApplicantChannel.9b6c4654197efca9c88dde72cfb38812038ef5f6bdce8c309046c02643092bb6.nl.png)

1. Laten we tot slot kijken naar de adaptieve kaart die is gepost in het kanaal in **Microsoft Teams**. In het kanaal zien we de adaptieve kaart die informatie weergeeft over de nieuw aangemaakte cv-rij in Dataverse. Beweeg de muis over de hyperlink aan het begin van de adaptieve kaart en merk op hoe de URL de Resumes system view-URL is die we eerder hebben geconfigureerd in de JSON (stappen 15 - 19 van **Lab 3.2 - Een Teams-kanaal informeren met een adaptieve kaart**) payload van de adaptieve kaart.

       ![Adaptieve kaart Resumes Table system view URL](../../../../../translated_images/3.3_08_AdaptiveCardResumeTableURL.5a59821d60c8698e5c9e4746806b975bbdf3c4400dc0bb02a53f350bdea569e9.nl.png)

1. Selecteer de hyperlink en je wordt doorgestuurd naar de Resumes system view in de **Hiring Hub** modelgestuurde app in je browser.

       ![Cv-systeemweergave in Hiring Hub modelgestuurde app](../../../../../translated_images/3.3_09_ResumeTableSystemView.81f52ab85aadda7d9131ced31d024fb4b411ccf600dd230d9d7e931c476e271c.nl.png)

1. Navigeer terug naar de adaptieve kaart die is gepost in het kanaal in Microsoft Teams. Beweeg deze keer de muis over **View Resume**, wat de `Action.OpenURL`-actie is van de adaptieve kaart. Merk op hoe de URL de cv-rij is die we eerder hebben geconfigureerd in de JSON (stappen 30 - 36 van **Lab 3.2 - Een Teams-kanaal informeren met een adaptieve kaart**) payload van de adaptieve kaart.

       ![Adaptieve kaart cv-rij URL](../../../../../translated_images/3.3_10_AdaptiveCardResumeRowURL.2063a075c2d4adec27dfcc2ea4c01a385d791e0c4fc127caba912bde14bf77d6.nl.png)

1. Selecteer de actie en je wordt doorgestuurd naar het cv-rijformulier in de **Hiring Hub** modelgestuurde app in je browser.

       ![Cv-rij in Hiring Hub modelgestuurde app](../../../../../translated_images/3.3_11_ResumeRow.6f051ed512d396712a04ee98319d6643516e0bbfbf8a9de07d3df7d264563b9c.nl.png)

## ✅ Missie Voltooid

Gefeliciteerd! 👏🏻 Uitstekend werk, Operative.

✅ Event trigger: je hebt een event trigger gemaakt die Dataverse-parameterwaarden doorgeeft aan een agentflow.  
✅ Een agentflow gebouwd: gebruikt de Dataverse-parameterwaarden om een adaptieve kaart te posten in een kanaal in Microsoft Teams om het HR-recruitmentteam te waarschuwen.  
✅ Instructies voor onderliggende agent bijgewerkt: om de flow te starten zodra de event trigger is voltooid.

Dit stelt de **Hiring Agent** in staat om autonoom te werken wanneer cv's als e-mailbijlagen worden ontvangen en het HR-recruitmentteam te informeren voor handmatige beoordeling.

Dit is het einde van **Lab 03 - Automatiseren van sollicitatie-e-mails**, selecteer de onderstaande link om door te gaan naar de volgende les.

⏭️ [Ga naar de les **Agentinstructies opstellen**](../04-agent-instructions/README.md)

## 📚 Tactische Bronnen

📖 [Maak je agent autonoom in Copilot Studio](https://learn.microsoft.com/training/modules/autonomous-agents-online-workshop/?WT.mc_id=power-188561-ebenitez)  

📖 [Een event trigger toevoegen](https://learn.microsoft.com/microsoft-copilot-studio/authoring-trigger-event?WT.mc_id=power-188561-ebenitez)  

📖 [Agentflows gebruiken met je agent](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-188561-ebenitez)  

📖 [Introductie Power Automate triggers](https://learn.microsoft.com/power-automate/triggers-introduction?WT.mc_id=power-188561-ebenitez)  

📖 [Power Automate flows gebruiken met agents](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create?WT.mc_id=power-188561-ebenitez)  

📖 [Preventie van gegevensverlies voor Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention?WT.mc_id=power-188561-ebenitez)  

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.