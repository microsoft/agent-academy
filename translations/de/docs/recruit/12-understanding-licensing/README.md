<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6f05e50f132514dcd264bd48fae3f1ef",
  "translation_date": "2025-10-17T19:10:31+00:00",
  "source_file": "docs/recruit/12-understanding-licensing/README.md",
  "language_code": "de"
}
-->
# 🚨 Mission 12: Lizenzierung verstehen

## 🕵️‍♂️ CODENAME: `OPERATION WISSEN, WAS DU SCHULDIG BIST`

> **⏱️ Zeitfenster der Operation:** `~15 Minuten`

## 🎯 Missionsbriefing

Willkommen, Rekrut. Bevor Sie Ihre Agenten ins Feld schicken, müssen Sie wissen, **wie die Nutzung gemessen, lizenziert und abgerechnet wird**. Diese Mission erklärt das nachrichtenbasierte Abrechnungsmodell, was Microsoft 365 Copilot-Lizenzen beinhalten, und wie Sie mit Ihrem Schätzer planen können.

---

## 🎯 Ziel: Das nachrichtenbasierte Modell verstehen

Copilot Studio berechnet keine Gebühren pro Benutzer oder Funktion – die Abrechnung erfolgt basierend auf **der Anzahl der Nachrichten, die Ihre Agenten verbrauchen**. Eine „Nachricht“ ist eine Interaktion zwischen Ihrem Agenten und dem Benutzer (oder einem System).

- 💬 Jede Benutzerinteraktion mit Ihrem Agenten zählt mindestens als **1 Nachricht**
- 🔄 Komplexe Interaktionen (wie Grounding, generative KI oder Flows) verbrauchen **mehrere Nachrichten**
- 💼 Sie zahlen für Nachrichten entweder über **Prepaid-Pakete** oder **Pay-As-You-Go (PAYGO)**

---

## Lizenzierungsoptionen

### 1. **Copilot Studio Nachrichtenpakete**

- Prepaid-Option: **25.000 Nachrichten/Monat für 200 $**
- Am besten geeignet für vorhersehbare Nutzung – Kapazität wird über den Tenant hinweg geteilt

### 2. **Pay-As-You-Go (PAYGO)**

- Nachträgliche Abrechnung: **0,01 $ pro Nachricht**
- Keine Vorauszahlung; Nutzung wird am Monatsende über Azure abgerechnet

---

## Was ist, wenn Sie M365 Copilot-Lizenzen haben?

Wenn Ihr Team über **Microsoft 365 Copilot-Lizenzen** verfügt, können Ihre Agenten **ohne zusätzliche Abrechnung für wichtige Szenarien arbeiten**:

- Klassische Antworten, generative Antworten, graphbasierte Nachrichten und grundlegende Agentenaktionen sind **kostenfrei** für authentifizierte M365 Copilot-Nutzer in Apps wie Teams und Outlook  
- Aber: Wenn Sie erweiterte Funktionen wie autonome Trigger, Agenten-Flows über grundlegende Aktionen hinaus oder externe Kanäle/APIs aktivieren, verbrauchen diese **abrechenbare Nachrichten**

| Szenario                                     | Zusätzliche Nachrichten abgerechnet?         |
|---------------------------------------------|----------------------------------------------|
| M365 Copilot-Nutzer fragt Agenten in Teams  | ❌ Nicht abgerechnet                          |
| Agent ruft externe API oder Flow auf        | ✅ Abgerechnet (5 + Nachrichten)             |
| Agent nutzt autonomen Trigger oder Grounding| ✅ Abgerechnet                                |

---

## 🧮 Präzise planen: Verwenden Sie den Schätzer

Bevor Sie Ihren Agenten starten, nutzen Sie unseren **Copilot Studio Usage Estimator**, um den Nachrichtenverbrauch unter realistischen Szenarien vorherzusagen:

[👉 Copilot Studio Usage Estimator verwenden](https://aka.ms/mcs-estimator){ .md-button .md-button--primary }

Er ermöglicht Ihnen:

- 🔢 Die **Anzahl der Benutzer** anzugeben
- ⚙️ **Agentenfunktionen** auszuwählen (Grounding, Aktionen, Flows, Speicher)
- 📈 Den **Gesamtverbrauch an Nachrichten pro Agent und Monat** zu schätzen
- 🧠 Das Design zu optimieren und Überraschungen bei der Abrechnung zu vermeiden

!!! tip
    ✅ Führen Sie ihn frühzeitig aus – und erneut nach der Erstellung – um erwartete und tatsächliche Nutzung zu vergleichen.

---

## 💼 Beispiel-Szenario

**Umgebung**: IT-Helpdesk-Agent mit Grounding + einem Power Automate Flow  
**Sitzungen**: 5 Benutzerinteraktionen pro Sitzung  
**Annahmen**: Grounding (10 Nachrichten) + Aktion (5 Nachrichten) + 5 generative Antworten (10 Nachrichten)  
**Gesamt**: ~25 Nachrichten pro Sitzung  
**Skalierung**: 500 Sitzungen/Monat = ~12.500 Nachrichten (½ Nachrichtenpaket)

---

## 🧠 Profi-Tipps zur Kostenkontrolle

- Überwachen Sie die Nutzung über das Power Platform Admin Center
- Beginnen Sie in der Entwicklungs-/Testphase, bevor Sie live gehen
- Deaktivieren Sie nicht genutzte Aktionen und Konnektoren
- Nutzen Sie **Microsoft 365 Copilot-Lizenzen**, wenn möglich, für interne Nutzung
- Verwenden Sie Nachrichtenpakete, wenn die Skalierung vorhersehbar wird
- Nutzen Sie den **Copilot Studio Usage Estimator**, um die Nutzung vorherzusagen

---

## 🏁 Mission abgeschlossen

Sie verstehen jetzt:

- Wie die Nutzung berechnet und abgerechnet wird
- Wann M365 Copilot die Nutzung abdeckt – und wann nicht
- Wie Sie Ihren Nachrichtenverbrauch vorhersagen und verwalten können

🎓 Mit diesem Wissen sind Sie bereit, Ihre Agenten **effizient und klug** einzusetzen.

---

## 📚 Taktische Ressourcen

Erfahren Sie mehr über Lizenzierung und Abrechnung in Copilot Studio

- 📄 [Copilot Studio Lizenzierung & Nachrichtentarife](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing?WT.mc_id=power-170631-apdunnam)
- 📘 [Power Platform Lizenzierungsleitfaden (Juli 2025)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp//microsoft/bade/documents/products-and-services/en-us/bizapps/Power-Platform-Licensing-Guide-July-2025.pdf?WT.mc_id=power-170631-apdunnam)
- 📊 [Nachrichtenverwaltung & Kapazitätsüberwachung](https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity?WT.mc_id=power-170631-apdunnam)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/12-understanding-licensing" alt="Analytics" />

---

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.