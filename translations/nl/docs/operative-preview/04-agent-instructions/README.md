<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "66d1f5ea2cc33dc690a5fc4a8e2a666e",
  "translation_date": "2025-10-17T01:54:49+00:00",
  "source_file": "docs/operative-preview/04-agent-instructions/README.md",
  "language_code": "nl"
}
-->
# 🕵️‍♂️ Missie 04: Instructies voor het aansturen van agenten

--8<-- "disclaimer.md"

## 🕵️‍♂️ CODENAAM: `OPERATIE GEHEIME RICHTLIJN`

> **⏱️ Operatietijdvenster:** `~45 minuten`

## 🎯 Missieoverzicht

Agent, je volgende opdracht is **Operatie Geheime Richtlijn** - het beheersen van de kunst van communicatie en controle van agenten door middel van nauwkeurige instructies en beschrijvingen.

Je missie, als je deze accepteert, is om de essentiële vaardigheden te leren voor het schrijven van duidelijke, uitvoerbare instructies die je agenten begeleiden bij het nemen van intelligente beslissingen, het gebruik van de juiste tools en kennisbronnen, en het naadloos samenwerken met andere agenten. Je zult ook de kunst beheersen van het opstellen van hoogwaardige beschrijvingen die agenten helpen hun middelen te begrijpen en met chirurgische precisie te reageren op gebruikersvragen.

Beschouw dit als je geavanceerde training in agentenpsychologie en gedragsmodificatie. Net zoals een veldagent duidelijke missieparameters nodig heeft om te slagen, hebben je AI-agenten deskundig opgestelde instructies nodig om met helderheid, precisie en waardevolle intelligentie te handelen in real-world scenario's.

---

## 🔎 Doelstellingen

Door deze missie te voltooien, zul je:

- **Beheersing van Instructies**: De kunst en wetenschap van het schrijven van agentinstructies in Copilot Studio begrijpen  
- **Strategische Richtlijnen**: Leren hoe je agenten kunt aansturen om tools, kennisbronnen te gebruiken en samen te werken met andere agenten  
- **Operationele Helderheid**: Zorgen dat je agenten handelen met precisie, transparantie en efficiëntie  

---

## 📝 Instructies voor Agenten Schrijven

Effectieve instructies schrijven voor agenten is de sleutel tot succesvol gedrag van agenten. Instructies worden door agenten gebruikt om:

- Te beslissen welke tool, onderwerp of kennisbron te gebruiken voor een gebruikersvraag of autonome trigger  
- Invoer in te vullen voor een tool op basis van de beschikbare context  
- Een reactie te genereren voor de eindgebruiker  

### Hoe Instructies Werken

Instructies moeten gebaseerd zijn op de tools, onderwerpen en kennisbronnen die voor je agent zijn geconfigureerd. Agenten kunnen geen instructies uitvoeren voor middelen die ze niet hebben. Bijvoorbeeld, als je je agent instrueert om een FAQ van een website te doorzoeken, moet je die FAQ als kennisbron toevoegen.

Je kunt specifieke tools, onderwerpen, variabelen of Power Fx-uitdrukkingen refereren met behulp van `/` in je instructies. Dit helpt de agent precies te weten wat te gebruiken en wanneer.

### Wat Opnemen in Instructies

- Voeg instructies toe voor gevallen waarin je de keuzes van de agent wilt sturen, vooral wanneer er sprake is van ambiguïteit.  
- Gebruik instructies om richtlijnen te stellen, zoals het beperken van onderwerpen of het specificeren van antwoordformaten.  
- Geef hints voor het invullen van toolinvoer, bijvoorbeeld: "Gebruik het e-mailadres uit het contactveld van de lead bij het helpen van de gebruiker met het opstellen van een e-mail."  
- Specificeer hoe antwoorden moeten worden geformatteerd, bijvoorbeeld: "Geef altijd antwoorden over orderstatus in een tabelvorm."  
- Gebruik beperkingen om acties van agenten te beperken, bijvoorbeeld: "Reageer alleen op verzoeken over werknemersvoordelen."  

### Praktische Voorbeelden

- "Gebruik alleen de FAQ-documenten als de vraag niet relevant is voor Openingstijden, Afspraken of Facturering."  
- "Gebruik het onderwerp ticketaanmaak alleen voor het aanmaken van tickets; voor andere verzoeken met betrekking tot het oplossen van problemen, gebruik het onderwerp probleemoplossing."  
- "Geef altijd antwoorden over orderstatus in een tabelvorm."  

### Testen en Verbeteren

- Na het bewerken van instructies, gebruik het testpaneel om het gedrag van de agent te valideren.  
- Werk wijzigingen bij en publiceer ze indien nodig.  

### Geavanceerde Richtlijnen

- Nummer of gebruik opsommingstekens voor je instructies en specificeer dat ze in volgorde moeten worden gevolgd.  
- Gebruik markdown-opmaak voor leesbaarheid en om generatieve AI te helpen je instructies te verwerken.  
- Als je wilt dat je agent zeer specifiek is, overweeg dan een onderwerp te maken voor dat gebruiksscenario.  
- Gebruik exacte namen voor tools en onderwerpen in instructies om verwarring te voorkomen.  

### Veiligheid en Moderatie

- Beperk welke tools de agent mag gebruiken bij het verwijzen naar kennisbronnen.  
- Beperk welke parameters moeten worden gebruikt voor tools (bijvoorbeeld, alleen e-mailen naar een opgegeven lijst van personen).  
- Gebruik instructies om ongewenst gedrag of problemen met inhoudsfiltering te voorkomen.  

---

## ✍️ Beschrijvingen Opstellen voor Tools, Onderwerpen en Agenten

Hoogwaardige beschrijvingen zijn essentieel voor generatieve orkestratie. Je agent gebruikt deze beschrijvingen om de juiste tools, onderwerpen en agenten te selecteren om te reageren op gebruikersvragen en triggers. Volg deze best practices:

- **Gebruik Eenvoudige, Directe Taal**: Vermijd jargon, slang of overdreven technische termen. Schrijf in actieve stem en tegenwoordige tijd.  
- **Wees Specifiek en Relevant**: Voeg trefwoorden toe die gerelateerd zijn aan de functionaliteit en gebruikersintentie. Zorg ervoor dat beschrijvingen vergelijkbare tools of onderwerpen duidelijk onderscheiden om ambiguïteit te voorkomen.  
- **Houd Het Kort en Informatief**: Beperk beschrijvingen tot één of twee zinnen. Vat samen wat de tool, het onderwerp of de agent doet en hoe het de gebruiker ten goede komt.  
- **Gebruik Unieke, Beschrijvende Namen**: Vermijd generieke namen. Bijvoorbeeld, gebruik "Weersvoorspelling voor Morgen" in plaats van alleen "Weer".  
- **Acties of Overwegingen Opsommen**: Gebruik opsommingstekens of genummerde lijsten voor duidelijkheid bij het beschrijven van meerdere functies of stappen.  
- **Test op Overlap**: Als meerdere onderwerpen vergelijkbare beschrijvingen hebben, kan je agent ze allemaal oproepen. Test en verbeter om overlap te voorkomen.  

!!! example "Goede en Slechte Beschrijving Voorbeelden"
    **Goed:** Dit onderwerp biedt weersinformatie voor elke locatie ter wereld voor de volgende dag. Het geeft de temperatuur weer. Het haalt niet het huidige weer voor vandaag op.  
    **Slecht:** Deze tool kan vragen beantwoorden. *(Te vaag)*  

---

## 🛠️ Best Practices voor Instructies en Beschrijvingen

Om je instructies en beschrijvingen echt effectief te maken, houd deze principes in gedachten:

- Gebruik actieve stem en tegenwoordige tijd (bijv. "Deze tool biedt weersinformatie").  
- Vermijd jargon, slang of onnodige technische termen, tenzij nodig voor het publiek.  
- Gebruik opsommingstekens of genummerde lijsten om acties, functies of overwegingen te scheiden.  
- Voeg trefwoorden toe die overeenkomen met de intentie van de gebruiker en de functionaliteit van de tool of het onderwerp.  
- Zorg voor onderscheidende namen en beschrijvingen voor vergelijkbare middelen om verwarring en overlap te voorkomen.  

---

## 🗂️ Voorbeeldstructuur van Instructies

Bij het schrijven van instructies kun je de volgende structuur overwegen voor duidelijkheid en volledigheid:

1. **Overzicht**: Beschrijf kort de missie en rol van de agent  
1. **Processtappen**: Geef de belangrijkste stappen die de agent moet volgen  
1. **Samenwerkingspunten**: Geef aan wanneer andere agenten moeten worden ingeschakeld of specifieke tools moeten worden gebruikt  
1. **Veiligheid en Moderatie**: Neem eventuele nalevings- of veiligheidsvereisten op  
1. **Feedbackloop**: Specificeer hoe de agent feedback moet verzamelen of problemen moet escaleren  

---

## 🧪 Lab: Instructies voor Agenten Opstellen

*Lab-inhoud binnenkort beschikbaar...*

---

## 🎉 Missie Voltooid

Missie 04 is voltooid! Je hebt nu:

✅ **Beheersing van Instructies**: Geleerd hoe je duidelijke, uitvoerbare agentinstructies schrijft  
✅ **Strategische Richtlijnen**: Agenten aangestuurd om tools te gebruiken en effectief samen te werken  
✅ **Operationele Helderheid**: Zorgen dat agenten handelen met precisie en transparantie  

De volgende missie is [Missie 05](../05-agent-responses/README.md): Het aanpassen van agentreacties voor maximale impact.

---

## 📚 Tactische Bronnen

📖 [Microsoft Copilot Studio - Instructies Opstellen](https://learn.microsoft.com/microsoft-copilot-studio/authoring-instructions)  
📖 [Richtlijnen voor Generatieve Modus](https://learn.microsoft.com/microsoft-copilot-studio/guidance/generative-mode-guidance)  

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.