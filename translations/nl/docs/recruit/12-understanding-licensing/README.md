<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6f05e50f132514dcd264bd48fae3f1ef",
  "translation_date": "2025-10-17T06:04:49+00:00",
  "source_file": "docs/recruit/12-understanding-licensing/README.md",
  "language_code": "nl"
}
-->
# 🚨 Missie 12: Begrijpen van Licenties

## 🕵️‍♂️ CODENAAM: `OPERATIE WEET WAT JE VERSCHULDIGD BENT`

> **⏱️ Operatietijdvenster:** `~15 minuten`

## 🎯 Missieoverzicht

Welkom, Rekruut. Voordat je je agenten inzet in het veld, moet je weten **hoe gebruik wordt gemeten, gelicenseerd en gefactureerd**. Deze missie legt het berichtgebaseerde factureringsmodel uit, wat Microsoft 365 Copilot-licenties omvat, en hoe je kunt plannen met je schatter.

---

## 🎯 Doel: Begrijp het berichtgebaseerde model

Copilot Studio rekent niet per gebruiker of per functie—je betaalt op basis van **hoeveel berichten je agenten verbruiken**. Een “bericht” is een interactie tussen je agent en de gebruiker (of een systeem).

- 💬 Elke gebruikersinteractie met je agent telt als minstens **1 bericht**
- 🔄 Complexe interacties (zoals grounding, generatieve AI of flows) verbruiken **meerdere berichten**
- 💼 Je betaalt voor berichten via **vooraf betaalde pakketten** of **pay-as-you-go (PAYGO)**

---

## Licentieopties

### 1. **Copilot Studio Berichtenpakketten**

- Vooraf betaald: **25.000 berichten/maand voor $200**
- Ideaal voor voorspelbaar gebruik — capaciteit wordt gedeeld binnen de tenant

### 2. **Pay-As-You-Go (PAYGO)**

- Achteraf betaald: **$0.01 per bericht**
- Geen voorafgaande verplichting; gebruik wordt aan het einde van de maand via Azure gefactureerd

---

## Wat als je M365 Copilot-licenties hebt?

Als je team **Microsoft 365 Copilot-licenties** heeft, kunnen je agenten **zonder extra kosten draaien voor belangrijke scenario's**:

- Klassieke antwoorden, generatieve reacties, op grafieken gebaseerde berichten en basisacties van agenten zijn **kosteloos** voor geauthenticeerde M365 Copilot-gebruikers in apps zoals Teams en Outlook  
- Echter: als je geavanceerde functies inschakelt zoals autonome triggers, agentflows buiten basisacties, of externe kanalen/API's gebruikt, dan **verbruiken deze wel betaalde berichten**

| Scenario                                     | Extra berichten gefactureerd?                |
|---------------------------------------------|----------------------------------------------|
| M365 Copilot-gebruiker stelt een vraag aan agent in Teams | ❌ Niet gefactureerd                          |
| Agent roept externe API of flow aan         | ✅ Gefactureerd (5 + berichten)               |
| Agent gebruikt autonome trigger of grounding | ✅ Gefactureerd                               |

---

## 🧮 Plan met precisie: Gebruik de schatter

Voordat je je agent lanceert, gebruik onze **Copilot Studio Usage Estimator** om het berichtenverbruik onder realistische scenario's te voorspellen:

[👉 Gebruik de Copilot Studio Usage Estimator](https://aka.ms/mcs-estimator){ .md-button .md-button--primary }

Hiermee kun je:

- 🔢 Je **aantal gebruikers** specificeren
- ⚙️ **Agentfuncties** selecteren (grounding, acties, flows, geheugen)
- 📈 **Totaal aantal berichten per agent per maand** schatten
- 🧠 Ontwerp optimaliseren en verrassingen in facturering vermijden

!!! tip
    ✅ Gebruik het vroeg — en opnieuw na het bouwen — om verwachte versus werkelijke gebruik te vergelijken.

---

## 💼 Voorbeeldscenario

**Omgeving**: IT-helpdeskagent met grounding + één Power Automate-flow  
**Sessies**: 5 gebruikersinteracties per sessie  
**Aannames**: grounding (10 berichten) + actie (5 berichten) + 5 generatieve reacties (10 berichten)  
**Totaal**: ~25 berichten per sessie  
**Schaal**: 500 sessies/maand = ~12.500 berichten (½ berichtenpakket)

---

## 🧠 Pro Tips voor kostenbeheersing

- Houd gebruik bij via Power Platform Admin Center
- Begin in ontwikkel/test voordat je live gaat
- Schakel ongebruikte acties en connectors uit
- Gebruik **Microsoft 365 Copilot-licenties** waar mogelijk voor intern gebruik
- Gebruik berichtenpakketten wanneer het gebruik voorspelbaar wordt
- Gebruik de **Copilot Studio Usage Estimator** om gebruik te voorspellen

---

## 🏁 Missie Voltooid

Je begrijpt nu:

- Hoe gebruik wordt berekend en gefactureerd
- Wanneer M365 Copilot gebruik dekt — en wanneer niet
- Hoe je je berichtenverbruik kunt voorspellen en beheren

🎓 Met deze kennis ben je klaar om je agenten **efficiënt en slim** in te zetten

---

## 📚 Tactische bronnen

Meer leren over licenties en facturering in Copilot Studio

- 📄 [Copilot Studio Licensing & Message Rates](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing?WT.mc_id=power-170631-apdunnam)
- 📘 [Power Platform Licensing Guide (July 2025)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp//microsoft/bade/documents/products-and-services/en-us/bizapps/Power-Platform-Licensing-Guide-July-2025.pdf?WT.mc_id=power-170631-apdunnam)
- 📊 [Message Management & Capacity Monitoring](https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity?WT.mc_id=power-170631-apdunnam)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/12-understanding-licensing" alt="Analytics" />

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.