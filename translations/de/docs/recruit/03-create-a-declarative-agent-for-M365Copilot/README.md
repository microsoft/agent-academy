<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-17T18:55:47+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "de"
}
-->
# 🚨 Mission 03: Einen deklarativen Agenten für Microsoft 365 Copilot bereitstellen

## 🕵️‍♂️ CODENAME: `OPERATION COPILOT EXTENSION`

> **⏱️ Zeitfenster der Operation:** `~60 Minuten`

🎥 **Schauen Sie sich die Anleitung an**

[![Video-Thumbnail zum Erstellen eines deklarativen Agenten](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.de.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "Schauen Sie sich die Anleitung auf YouTube an")

## 🎯 Missionsbriefing

Willkommen bei Ihrem ersten Außeneinsatz, Agent Maker. Sie wurden ausgewählt, um einen deklarativen Agenten zu entwerfen, auszustatten und bereitzustellen – einen spezialisierten Agenten, der direkt in Microsoft 365 Copilot und Microsoft Teams eingebettet ist.

Im Gegensatz zu traditionellen Agenten arbeiten deklarative Agenten mit einer definierten Mission (Anweisungen), Werkzeugen (Prompts/Connectors) und strategischem Zugang zu interner Intelligenz (Wissensquellen wie SharePoint, Dataverse und mehr). Ihre Aufgabe ist es, diesen Agenten mithilfe von Microsoft Copilot Studio zu erstellen – einem No-Code-Kommandozentrum, in dem die Fähigkeiten und der Zweck Ihres Agenten zum Leben erweckt werden.

Los geht’s.

## 🔎 Ziele

In dieser Mission lernen Sie:

1. Verstehen, was deklarative Agenten sind und wie sie Microsoft 365 Copilot mit benutzerdefinierten Funktionen erweitern
1. Vergleich zwischen Microsoft Copilot Studio und Copilot Studio Agent Builder für die Erstellung deklarativer Agenten
1. Erstellen eines deklarativen Agenten mithilfe natürlicher Sprache durch die konversationelle Erstellungserfahrung
1. Hinzufügen von KI-Prompts als Werkzeuge zur Verbesserung des spezialisierten Wissens und der Problemlösungsfähigkeiten Ihres Agenten
1. Veröffentlichen und Testen Ihres deklarativen Agenten in Microsoft 365 Copilot und Microsoft Teams

## 🕵🏻‍♀️ Was ist ein deklarativer Agent für Microsoft 365 Copilot?

Deklarative Agenten sind maßgeschneiderte Versionen von Microsoft 365 Copilot. Sie können Microsoft 365 Copilot an spezifische Geschäftsanforderungen anpassen, indem Sie ihm Anweisungen geben, um einen bestimmten Prozess zu unterstützen, ihn mit Unternehmenswissen verankern und Werkzeuge für eine breitere Erweiterbarkeit nutzen. Dies ermöglicht es Organisationen, personalisierte Erfahrungen mit größerer Funktionalität für ihre Benutzer zu schaffen.

## 🤔 Warum sollte ich Microsoft Copilot Studio verwenden, um einen deklarativen Agenten zu erstellen?

Als Entwickler haben Sie möglicherweise bereits [Copilot Studio Agent Builder](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez) in Microsoft 365 Copilot erkundet und fragen sich daher wahrscheinlich: _Warum sollte ich einen deklarativen Agenten in Microsoft Copilot Studio erstellen?_

Microsoft Copilot Studio bietet eine umfassende Palette von Werkzeugen und Funktionen für deklarative Agenten, die über die Einschränkungen des Copilot Studio Agent Builders hinausgehen. Ähnlich wie beim Copilot Studio Agent Builder benötigen Sie keine Programmier- oder Softwareentwicklungskenntnisse, um in Microsoft Copilot Studio zu arbeiten. Lassen Sie uns dies weiter aufschlüsseln, um die Unterschiede zwischen Copilot Studio Agent Builder und Copilot Studio für die Erstellung deklarativer Agenten zu verstehen.

### Funktionsvergleich

Die folgende Tabelle hebt die Unterschiede bei der Erstellung eines deklarativen Agenten in Copilot Studio Agent Builder und Copilot Studio hervor.

| Funktion                   | Copilot Studio Agent Builder in Microsoft 365 Copilot                          | Microsoft 365 Copilot in Copilot Studio erweitern                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **Wissen**       | Web, SharePoint, Microsoft Teams-Chats, Outlook-E-Mails, Copilot-Connectors     | Websuche (über Bing), SharePoint, Dataverse, Dynamics 365, Copilot-Connectors  |
| **Werkzeuge**       | Code-Interpreter, Bildgenerator     | 1400+ Power Platform Connectors, benutzerdefinierte Connectors, Prompt, Computeranwendung, REST-API, Model Context Protocol   |
| **Starter-Prompts**         | Prompts für Benutzer konfigurieren, um schnell zu starten   | Prompts für Benutzer konfigurieren, um schnell zu starten  |
| **Kanal**           | Agent nur für Microsoft 365 Copilot veröffentlicht     | Agent für Microsoft 365 Copilot und Microsoft Teams veröffentlicht      |
| **Freigabeberechtigungen**         | Benutzer sind nur Betrachter    | Benutzer können Bearbeiter oder Betrachter sein   |

Es gibt weitere Funktionen für deklarative Agenten, die in Microsoft Copilot Studio erstellt wurden und die wir als Nächstes kennenlernen werden.

!!! tip
    - Um mehr über den Copilot Studio Agent Builder zu erfahren, besuchen Sie [Copilot Developer Camp: Lab MAB1 - Build your first agent](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/)
    - Für die professionelle Entwicklung zur Erweiterung eines deklarativen Agenten über den Copilot Studio Agent Builder für Microsoft 365 Copilot hinaus besuchen Sie [Copilot Developer Camp: Lab MAB1 - Build your first agent](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/)

### Microsoft 365 Copilot mit deklarativen Agenten in Copilot Studio erweitern

Lassen Sie uns das, was wir aus der Funktionsvergleichstabelle gelernt haben, erweitern.

#### Anpassung

- **Detaillierte Anweisungen**: Sie können detaillierte Anweisungen und Fähigkeiten bereitstellen, um den Zweck und das Verhalten des Agenten genau zu definieren.
  - Dazu gehört das Aufrufen von Werkzeugen einfach durch die Verwendung natürlicher Sprache.

- **Zugriff auf Unternehmenswissen**: Ermöglicht den Zugriff auf Unternehmenswissen unter Berücksichtigung der Benutzerberechtigungen.
  - SharePoint-Integration
  - Dataverse-Integration
  - Dynamics 365-Integration
  - Microsoft 365 Copilot-Connectors, die vom Administrator Ihrer Organisation aktiviert wurden

   ![Anpassung](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.de.png)

#### Erweiterte Funktionen

- **Integration mit externen Diensten**: Ermöglicht die Auswahl aus über 1400 Power Platform Connectors, die mit externen Diensten integriert sind und komplexere und leistungsstärkere Funktionen bieten.
  - Beispiele umfassen [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez), [ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez), [Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez), [SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) und mehr
  - Alternativ können Sie auch Model Context Protocol-Server und REST-APIs direkt in Ihrem deklarativen Agenten nutzen

- **KI-Prompts**: Verwenden Sie einen Prompt, um Text, Dokumente, Bilder und Daten mit natürlicher Sprache und KI-Logik zu analysieren und zu transformieren.
  - Wählen Sie das Chat-Modell aus, wählen Sie zwischen Basic (Standard), Standard, Premium
  - Möglichkeit, Ihr eigenes Azure AI Foundry-Modell einzubringen, um Ihren Prompt zu verankern

- **Mehr Optionen für die Bereitstellungskonfiguration**: Wählen Sie Kanäle aus und definieren Sie Benutzerberechtigungen.
  - Veröffentlichung in Microsoft Teams, einer vertrauten Benutzeroberfläche für Ihre Benutzer für eine schnellere Akzeptanz
  - Bearbeitungsberechtigungen können geteilt werden, um eine Abhängigkeit von einer einzigen Person zu vermeiden

   ![Anpassung](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.de.png)

Zusammenfassend ermöglichen deklarative Agenten in Microsoft Copilot Studio die Anpassung von Microsoft 365 Copilot an Geschäftsanforderungen durch die Integration von Unternehmenswissenssystemen, Werkzeugen zur Verbindung mit externen Diensten oder KI-GPT-Modellen.

## 🧪 Lab 03: Einen deklarativen Agenten in Microsoft Copilot Studio für Microsoft 365 Copilot erstellen

Als Nächstes lernen wir, wie man einen deklarativen Agenten für einen "Business-to-Employee"-Anwendungsfall erstellt, der als **IT-Helpdesk-Agent** fungiert.

- [3.1 Einen deklarativen Agenten erstellen](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 Einen Prompt für Ihren deklarativen Agenten erstellen und hinzufügen](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 Anweisungen aktualisieren und Ihren deklarativen Agenten testen](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 Ihren deklarativen Agenten in Microsoft 365 Copilot und Microsoft Teams veröffentlichen](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    Dieses Lab wird Schritte zum Hinzufügen eines Prompts als Werkzeug skizzieren. Die folgenden Lektionen werden sich mit dem Hinzufügen von Wissensquellen und anderen verfügbaren Werkzeugen befassen. Einfach gehalten für Ihr Lernen 😊

### 👩🏻‍💼 Verständnis von Business-to-Employee (B2E)

Business-to-Employee (B2E) bezieht sich auf die Interaktionen und Dienstleistungen, die ein Unternehmen direkt seinen Mitarbeitern bietet. Im Kontext eines Agenten bedeutet dies, die erweiterten Fähigkeiten von Copilot Studio zu nutzen, um die Arbeitserfahrung der Mitarbeiter innerhalb der Organisation zu unterstützen und zu verbessern.

### ✨ Anwendungsfall-Szenario

**Als** Mitarbeiter

**Möchte ich** schnelle und präzise Hilfe vom IT-Helpdesk-Agenten für Probleme wie Geräteprobleme, Netzwerkprobleme, Druckereinrichtung erhalten

**Damit ich** produktiv bleiben und technische Probleme ohne Verzögerungen lösen kann

Lassen Sie uns beginnen!

### Voraussetzungen

- Entwickler müssen Berechtigungen haben, um in einer Copilot Studio-Umgebung zu erstellen und darauf zuzugreifen.

!!! note "Lizenzhinweis"
    Dieses Lab wird Schritte zum Hinzufügen eines Prompts als Werkzeug skizzieren. Die folgenden Lektionen werden sich mit dem Hinzufügen von Wissensquellen und anderen verfügbaren Werkzeugen befassen. Einfach gehalten für Ihr Lernen 😊
  
    Sie benötigen keine Microsoft 365 Copilot-Benutzerlizenz, um Ihren in Copilot Studio erstellten deklarativen Agenten in Microsoft 365 Copilot zu veröffentlichen. **Benutzer** des _veröffentlichten deklarativen Agenten_ in Microsoft 365 Copilot benötigen jedoch eine Microsoft 365 Copilot-Benutzerlizenz.

### 3.1 Einen deklarativen Agenten erstellen

!!! warning "Copilot-Fragen können sich zwischen Sitzungen unterscheiden"

    Die konversationelle Erstellungserfahrung von Copilot kann sich jedes Mal ändern, wobei die bereitgestellten Fragen zur Anleitung möglicherweise leicht anders sind als zuvor.

1. Navigieren Sie zu [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/) und melden Sie sich mit Ihren Zugangsdaten an. Stellen Sie sicher, dass Sie zu Ihrer Umgebung wechseln, die Sie für diese Labs verwenden.

1. Wählen Sie **Agenten** aus dem Menü und wählen Sie **Copilot für Microsoft 365**.

       ![Copilot für Microsoft 365](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.de.png)

1. Als Nächstes erstellen wir einen deklarativen Agenten, indem wir **+ Agent hinzufügen** auswählen.

       ![Agent hinzufügen](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.de.png)

1. Anschließend wird die konversationelle Erstellungserfahrung geladen, bei der wir in natürlicher Sprache mit Copilot chatten können, um den deklarativen Agenten zu beschreiben, den wir erstellen möchten, und die bereitgestellten Fragen zur Anleitung nutzen.

       Geben Sie eine detaillierte Beschreibung ein, die Folgendes umfasst,  
       - die Aufgabe des Agenten  
       - welche Art von Anfragen er bearbeiten kann  
       - das Format seiner Antwort  
       - das Ziel des Agenten  
    
       ```text
       Sie sind ein hochqualifizierter und erfahrener IT-Experte, der sich auf eine Vielzahl von Computersystemen, Netzwerken und Cybersicherheit spezialisiert hat. Sie können technische Probleme diagnostizieren und lösen, Lösungen klar und verständlich für Benutzer aller technischen Niveaus erklären und Anleitungen zu Best Practices geben. Sie sollten prägnant und informativ sein, Schritt-für-Schritt-Anweisungen mit Aufzählungspunkten verwenden, wenn dies angebracht ist. Ihr Ziel ist es, dem Benutzer zu helfen, das Problem zu verstehen und es effektiv zu lösen.
       ```
    
       ![Prompt erstellen](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.de.png)

1. Nach dem Einreichen des Prompts erscheint eine auffällige Aktualisierung im rechten Bereich mit den Details und Anweisungen des Agenten, wie im Prompt definiert. Als Nächstes werden Sie aufgefordert, den Namen Ihres Agenten zu bestätigen, und Copilot wird einen Namen vorschlagen.

       Geben Sie entweder `ja` ein, um den vorgeschlagenen Namen zu akzeptieren, oder geben Sie einen anderen Namen wie den folgenden ein,
    
       ```text
       Contoso Tech Support Pro
       ```
    
       ![Anweisungen aktualisiert](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.de.png)

    !!! warning "Erinnerung: Copilot-Fragen können sich zwischen Sitzungen unterscheiden"

        Die konversationelle Erstellungserfahrung von Copilot kann sich jedes Mal ändern, wobei die bereitgestellten Fragen zur Anleitung möglicherweise leicht anders sind als zuvor.

1. Der Name des Agenten wurde nun aktualisiert, wie im rechten Bereich zu sehen ist. Jetzt werden wir aufgefordert, die Anweisungen für den Agenten zu verfeinern. Was Copilot vorgeschlagen hat, klingt großartig, also werden wir es bitten, seine eigenen Vorschläge zu verwenden. Wir geben Folgendes ein,

      ```text
      Focus on the IT issues and scenarios you've identified
      ```

      ![Name aktualisiert](../../../../../translated_images/3.1_06_NameUpdated.b6b8cc7c670b77c635d6b54b723e1a83f63ec288c0eab260fdbf88c7ec163003.de.png)

1. Als Nächstes werden wir gefragt, ob wir öffentlich zugängliche Websites oder Wissen hinzufügen möchten. Wir antworten mit `Nein`, da wir in diesem Lab nur einen Prompt für unseren deklarativen Agenten hinzufügen werden. Nachfolgende Labs in zukünftigen Lektionen werden Wissensquellen behandeln.

      ![Keine Websites oder Wissensquellen hinzugefügt](../../../../../translated_images/3.1_07_KnowledgeSources.2001faa25aab922f38da82a8602e68b3ad7153941e87bab0949177e0b2ab0c08.de.png)

1. Anschließend erhalten wir eine Antwort von Copilot, dass wir die Konfiguration unseres Agenten mithilfe der konversationellen Erstellungserfahrung abgeschlossen haben. Lassen Sie uns jedoch noch etwas verfeinern, indem wir festlegen, dass er prägnant und informativ mit Aufzählungspunkten sein sollte, Empathie in der Kommunikation verwenden und nach der Bereitstellung von Lösungen um Feedback bitten sollte.

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

      ![Agent-Anweisungen aktualisieren](../../../../../translated_images/3.1_08_FurtherRefinements.993926c4e55cc5133413f4e10a61a6ed43351d070e791db0ee5547ea83f46473.de.png)

1. Copilot bestätigt, dass die Anweisungen aktualisiert wurden. Klicken Sie auf **Erstellen**, um den deklarativen Agenten für Microsoft 365 Copilot bereitzustellen.

      ![Agent erstellen](../../../../../translated_images/3.1_09_CreateDeclarativeAgent.71442cd4e18105359e55016d92e54b74ac18977bb535c637a05bac0d3680a3c5.de.png)

    !!! warning "Erinnerung: Copilot-Fragen können sich zwischen Sitzungen unterscheiden"

        Die konversationelle Erstellungserfahrung von Copilot kann sich jedes Mal ändern, wobei die bereitgestellten Fragen zur Anleitung möglicherweise leicht anders sind als zuvor.

1. Sobald der Agent bereitgestellt wurde, sehen Sie die Details des Agenten, die die Beschreibung und die während der konversationellen Erstellungserfahrung definierten Anweisungen enthalten.
![Agentendetails](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.de.png)

Scrollen Sie nach unten im Bereich, und Sie sehen auch die Möglichkeiten, Wissen hinzuzufügen, die Websuche (über Bing) zu aktivieren, Starter-Prompts und die Veröffentlichungsdetails des deklarativen Agenten für Microsoft 365 Copilot. Die Starter-Prompts werden auch im Testbereich auf der rechten Seite angezeigt. Benutzer können diese Starter-Prompts auswählen, um mit dem Agenten zu interagieren.

![Vorgeschlagene Prompts](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.de.png)

1. Im Abschnitt „Details“ des Agenten haben Sie auch die Möglichkeit, das Agenten-Symbol zu ändern. Wählen Sie **Bearbeiten**.

![Details bearbeiten](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.de.png)

Hier können Sie das Symbol und die Hintergrundfarbe ändern. Wählen Sie **Speichern** und anschließend erneut **Speichern**, um die Details des Agenten zu aktualisieren.

![Symbol ändern](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.de.png)

1. Lassen Sie uns einen kurzen Test des erstellten Agenten durchführen. Wählen Sie einen der **Starter-Prompts** im Testbereich auf der rechten Seite aus.

![Starter-Prompt testen](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.de.png)

1. Unser Agent wird dann antworten. Beachten Sie, wie er den Anweisungen folgt, indem er Informationen in übersichtliche Punkte unterteilt und Empathie in seiner Antwort zeigt.

Wenn Sie zum Ende der Nachricht scrollen, sehen Sie, dass er auch nach Feedback gefragt hat, nachdem er eine Lösung bereitgestellt hat, wie angewiesen.

![Antwort aus dem Test](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.de.png)

In wenigen Minuten haben Sie einen deklarativen Agenten für Microsoft 365 Copilot in Copilot Studio hinzugefügt 🙌🏻

Als Nächstes lernen wir, wie man ein Tool zu unserem Agenten hinzufügt und einen Prompt erstellt.

### 3.2 Erstellen und Hinzufügen eines Prompts für Ihren deklarativen Agenten

1. Scrollen Sie nach unten zum Abschnitt **Tools** und wählen Sie **+ Tool hinzufügen**.

![Tool hinzufügen](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.de.png)

1. Das Tools-Modul wird angezeigt, und eine Liste der Power Platform-Connectoren wird angezeigt. Um einen Prompt hinzuzufügen, wählen Sie **+ Neues Tool**.

![Neues Tool](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.de.png)

1. Eine Liste anderer Tools wird angezeigt – Prompt, benutzerdefinierter Connector, REST-API und Model Context Protocol. Wenn Ihre Organisation die [Anforderungen für Computerverwendung](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez) erfüllt, wird dies ebenfalls in der Liste angezeigt. Wählen Sie **Prompt**.

![Prompt auswählen](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.de.png)

1. Geben Sie einen Namen für den Prompt ein. Nennen wir unseren Prompt `IT-Experte`.

![Name eingeben](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.de.png)

1. Wählen Sie das **Chevron-Symbol** neben dem **Modell**, um die verschiedenen Chat-Modelle anzuzeigen, aus denen Sie wählen können. Standardmäßig ist das Modell **Basic GPT-4.1 mini** ausgewählt, und Sie haben auch die Möglichkeit, Ihr eigenes Modell mit Azure AI Foundry Models zu verwenden. Wir bleiben beim ausgewählten Standardmodell.

![Modell ändern](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.de.png)

1. Als Nächstes geben wir unserem Prompt Anweisungen. Es gibt drei Methoden, aus denen Sie wählen können:

   - Verwenden Sie Copilot, um Anweisungen basierend auf Ihrer Beschreibung dessen, was der Prompt tun soll, zu generieren.
   - Verwenden Sie eine Vorlage aus der Prompt-Bibliothek, um einen Prompt zu erstellen.
   - Geben Sie Ihre eigenen Anweisungen manuell ein.

1. Probieren wir zunächst aus, wie Copilot Anweisungen basierend auf einer eingegebenen Beschreibung generiert. Geben Sie Folgendes in das Copilot-Feld ein und senden Sie es ab.

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

![Mit Copilot beginnen](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.de.png)

1. Copilot beginnt dann, einen Prompt für uns zu erstellen.

![Copilot entwirft Prompts](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.de.png)

1. Die von Copilot generierten Entwurfsanweisungen werden dann angezeigt.

![Von Copilot generierte Entwurfsanweisungen](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.de.png)

1. Scrollen Sie nach unten zu den Anweisungen, und Sie sehen den von Copilot bereits definierten Benutzer-Eingabeparameter. Sie haben dann die Möglichkeit:
   - Die generierten Entwurfsanweisungen beizubehalten.
   - Die Entwurfsanweisungen mit Copilot zu aktualisieren.
   - Die Entwurfsanweisungen zu löschen.

Löschen Sie die Entwurfsanweisungen, indem Sie das **Papierkorb-Symbol** auswählen, und probieren wir als Nächstes die Prompt-Bibliothek aus.

![Prompt-Anweisungen](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.de.png)

1. Wählen Sie den Link **Prompt-Vorlage**.

![Prompt-Vorlage auswählen](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.de.png)

1. Sie sehen eine Liste von Prompt-Vorlagen, aus denen Sie wählen können. Diese stammen aus der [Power Platform Prompt-Bibliothek](https://aka.ms/power-prompts).

![Prompt-Bibliothek](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.de.png)

1. Suchen Sie nach dem Prompt `IT-Experte` und wählen Sie ihn aus.

![IT-Experte-Prompt auswählen](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.de.png)

1. Der Prompt wird dann als Anweisungen mit dem Eingabeparameter hinzugefügt, wie in der Prompt-Vorlage definiert. Ähnlich wie bei der Vorgehensweise, die wir bei der Bereitstellung von Anweisungen für unseren Agenten während der Konversationserstellung mit Copilot angewendet haben, beschreibt diese Prompt-Vorlage:
   - eine Aufgabe,
   - welche Art von Anfragen sie bearbeiten kann,
   - und das Format ihrer Antwort sowie das Ziel des Prompts.

![Prompt-Anweisungen](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.de.png)

1. Löschen Sie die Anweisungen, und probieren wir als Nächstes aus, wie man die Anweisungen manuell eingibt. Wir verwenden den [IT-Experte-Prompt](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/) aus der [Power Platform Prompt-Bibliothek](https://aka.ms/power-prompts). Kopieren und fügen Sie den Prompt ein.

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

![Prompt-Anweisungen](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.de.png)

1. Als Nächstes können wir die Benutzer-Eingabeparameter unseres Prompts definieren. Diese können Text und Bilder sowie Beispieldaten zum Testen umfassen. Es besteht auch die Möglichkeit, den Prompt mit Wissen aus Dataverse-Tabellen zu verknüpfen. Für diese Übung haben wir nur eine Benutzer-Eingabe zu definieren, nämlich die Problem-Eingabe. Diese ist derzeit ein Platzhalter in unserem Prompt als `[Problem]`. Wir konfigurieren diese Eingabe jetzt, indem wir das Zeichen `/` eingeben oder **+Inhalt hinzufügen** auswählen und dann **Text** wählen.

![Text-Eingabe](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.de.png)

1. Wir können jetzt einen Namen für unseren Eingabeparameter und Beispieldaten eingeben.

Geben Sie Folgendes als Namen ein:

    ```text
    problem input
    ```

Geben Sie Folgendes als Beispieldaten ein:

    ```text
    My laptop gets an error with a blue screen
    ```

Wählen Sie anschließend **Schließen**.

![Problem-Eingabe konfigurieren](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.de.png)

1. Der Problem-Eingabeparameter wird nun mit den konfigurierten Beispieldaten zu den Anweisungen hinzugefügt. Wir können unseren Prompt jetzt testen!

![Problem-Eingabe hinzugefügt](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.de.png)

1. Wählen Sie **Testen**, um den Prompt zu testen.

![Anweisungen testen](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.de.png)

1. Die Antwort wird dann angezeigt. Beachten Sie, wie die Antwort gemäß den Anweisungen Überschriften mit Aufzählungspunkten enthält. Scrollen Sie nach unten und überprüfen Sie den Rest der Modellantwort.

![Modellantwort](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.de.png)

1. Bevor wir unseren Prompt speichern, lernen wir die Einstellungen kennen, die für diesen Prompt konfiguriert werden können. Wählen Sie das **Ellipsen-Symbol (...)**.

![Prompt-Einstellungen](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.de.png)

1. Hier sehen wir drei Einstellungen, die konfiguriert werden können:

   - **Temperatur**: Niedrigere Temperaturen führen zu vorhersehbaren Ergebnissen, während höhere Temperaturen vielfältigere oder kreativere Antworten ermöglichen.
   - **Datensatzabruf**: Geben Sie die Anzahl der abgerufenen Datensätze für Ihre Wissensquellen an.
   - **Links in der Antwort einfügen**: Wenn ausgewählt, enthält die Antwort Link-Zitate für die abgerufenen Datensätze.

Wählen Sie das **X-Symbol**, um die Einstellungen zu verlassen.

![Einstellungen konfigurieren](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.de.png)

1. Wählen Sie **Speichern**, um den Prompt zu speichern.

![Prompt speichern](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.de.png)

1. Wählen Sie als Nächstes **Zum Agenten hinzufügen**, um den Prompt zu unserem deklarativen Agenten hinzuzufügen.

![Prompt-Anweisungen](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.de.png)

1. Der Prompt wird nun unter Tools angezeigt 🙌🏻

![Prompt hinzugefügt](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.de.png)

Als Nächstes aktualisieren wir unsere Anweisungen, um den Prompt aufzurufen und unseren deklarativen Agenten zu testen.

### 3.3 Anweisungen aktualisieren und Ihren deklarativen Agenten testen

1. Scrollen Sie nach oben zum Abschnitt **Details** und wählen Sie **Bearbeiten**. Dadurch werden die Felder bearbeitbar.

![Bearbeiten auswählen](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.de.png)

1. Wir können jetzt unsere Anweisungen aktualisieren, um unseren Prompt durch Referenzierung des Namens des Prompts aufzurufen. Löschen Sie die Anweisungen und kopieren und fügen Sie Folgendes ein:

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

Beachten Sie, wie der letzte Satz den Agenten anweist, die vom Benutzer gestellte Frage als Wert für den Problem-Eingabeparameter zu verwenden. Der Agent wird die Frage als Problem-Eingabe für den Prompt verwenden. Wählen Sie als Nächstes **Speichern**.

![Anweisungen aktualisieren, um Prompt aufzurufen](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.de.png)

1. Wir sind jetzt bereit, die aktualisierten Anweisungen unseres deklarativen Agenten zu testen. Wählen Sie das **Aktualisieren-Symbol** im Testbereich.

![Aktualisieren-Symbol auswählen](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.de.png)

1. Geben Sie als Nächstes den folgenden Prompt ein und senden Sie ihn ab:

```text
Können Sie mir helfen, mein Laptop hat einen Bluescreen.
```

![Test durchführen](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.de.png)

1. Der Agent ruft den Prompt auf und antwortet.

![Prompt-Anweisungen](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.de.png)

Lassen Sie uns nun unseren deklarativen Agenten veröffentlichen 😃

### 3.4 Veröffentlichen Sie Ihren deklarativen Agenten für Microsoft 365 Copilot und Microsoft Teams

1. Wählen Sie **Veröffentlichen**.

![Agent veröffentlichen](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.de.png)

1. Ein Modal wird angezeigt, das die Kanäle und Veröffentlichungsdetails anzeigt, die aktualisiert werden können.

   - Kanäle: Der Agent wird für Microsoft 365 Copilot und Microsoft Teams veröffentlicht.
   - Informationen zur Agenten-App: Dies wird angezeigt, wenn der Benutzer den Agenten zu Microsoft 365 Copilot oder Microsoft Teams hinzufügt. Diese Felder können bei Bedarf aktualisiert werden.

![Details zur Agenten-App](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.de.png)

1. Beispielsweise können Sie die **Kurzbeschreibung**, **Langbeschreibung**, **Entwicklername** mit Ihrem Namen aktualisieren.

!!! tip
    Wenn nicht alle Felder in Ihrem Browser angezeigt werden, versuchen Sie, herauszuzoomen, z. B. auf 75 %.

Wählen Sie **Veröffentlichen**. Copilot Studio beginnt dann mit der Veröffentlichung des Agenten.

![Agent veröffentlichen](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.de.png)

1. Nach Abschluss der Veröffentlichung sehen wir die [Verfügbarkeitsoptionen](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez) des Agenten.

| Verfügbarkeitsoption | Beschreibung |
| --------------------- | ------------ |
| Link teilen | Kopieren Sie den Link, um ihn mit freigegebenen Benutzern zu teilen, damit sie den Agenten in Microsoft 365 Copilot öffnen können. |
| Meinen Teamkollegen und freigegebenen Benutzern anzeigen | Ermöglicht es Ihnen, anderen die Teilnahme an der Erstellung des Agenten zu gewähren oder Sicherheitsgruppen Zugriff zu gewähren, damit sie den Agenten in Microsoft 365 Chat oder Microsoft Teams verwenden können. |
| Allen in meiner Organisation anzeigen | Reichen Sie den Agenten beim Tenant-Administrator ein, um ihn dem Organisationskatalog hinzuzufügen, damit alle Tenant-Benutzer den Agenten hinzufügen können. Der Agent wird unter „Von Ihrer Organisation erstellt“ in Microsoft 365 Copilot und in Microsoft Teams angezeigt. |
| Als .zip herunterladen | Als ZIP-Datei herunterladen, um sie als benutzerdefinierte App in Microsoft Teams hochzuladen. |

![Verfügbarkeitsoptionen](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.de.png)

1. Schauen wir uns an, wie der Agent geteilt werden kann. Wählen Sie **Meinen Teamkollegen und freigegebenen Benutzern anzeigen**. Ein Bereich wird angezeigt, in dem Sie nach Benutzern suchen können, mit denen Sie den Agenten teilen möchten, indem Sie entweder ihren Namen, ihre E-Mail-Adresse oder eine Sicherheitsgruppe eingeben. Sie können diese Liste jederzeit überprüfen, um zu bearbeiten, wer Zugriff auf den Agenten hat.

Es gibt auch zwei Kontrollkästchen:
- _Eine E-Mail-Einladung an neue Benutzer senden_ – neue Benutzer erhalten eine E-Mail-Einladung.
- _Sichtbar unter „Mit Power Platform erstellt“_ – der Agent wird im Abschnitt „Mit Power Platform erstellt“ des Teams-App-Stores verfügbar.
Für weitere Details siehe [Verbinden und Konfigurieren eines Agenten für Teams und Microsoft 365](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez).

Wählen Sie **Abbrechen** oder das **X**-Symbol, um das Fenster zu schließen.

![Agent teilen](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.de.png)

1. Wählen Sie **Kopieren** und fügen Sie den Link in einem neuen Browser-Tab ein.

![Link kopieren](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.de.png)

1. Microsoft 365 Copilot wird geladen und ein Modal erscheint mit den Details der Agenten-App. Beachten Sie, wie der Entwicklername, die kurze Beschreibung und die ausführliche Beschreibung angezeigt werden. Diese stammen aus den Veröffentlichungsdetails, die in einem früheren Schritt aktualisiert wurden.

Wählen Sie **Hinzufügen**.

![Verfügbarkeitsoptionen](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.de.png)

1. Unser deklarativer Agent wird als Nächstes geladen. Wir sehen die Startaufforderungen, aus denen wir auswählen können, um den Benutzern schnell zu helfen.

Wählen Sie eine der Startaufforderungen aus. In meinen Startaufforderungen wähle ich die Aufforderung **Hilfe bei der Softwareinstallation**, die das Nachrichtenfeld von Copilot automatisch ausfüllt. Senden Sie die Frage an Copilot.

![Startaufforderung auswählen](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.de.png)

1. Wählen Sie **Immer erlauben**, um Ihrem deklarativen Agenten die Berechtigung zu erteilen, die IT-Experten-Aufforderung aufzurufen.

![Immer erlauben auswählen](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.de.png)

1. Der Agent ruft dann unsere **IT-Experten**-Aufforderung auf und wir sehen die Modellantwort, die als Nachricht in unserem deklarativen Agenten zurückgegeben wird.

![Antwort](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.de.png)

Scrollen Sie nach unten, um die vollständigen Details der Antwort zu sehen.

![Antwort](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.de.png)

1. Aber _wie wissen wir_, dass der deklarative Agent die Aufforderung aufgerufen hat? 👀 Hier ein Tipp!

!!! tip
    Sie können Agenten in Microsoft 365 Copilot testen und debuggen, indem Sie den [Entwicklermodus aktivieren](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez).

Geben Sie Folgendes in das Nachrichtenfeld von Copilot ein und senden Sie es ab.

    ```text
    -developer on
    ```

Eine Bestätigungsmeldung erscheint, die Ihnen mitteilt, dass der Entwicklermodus jetzt aktiviert ist.

![Entwicklermodus aktiviert](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.de.png)

1. Senden Sie die folgende Frage, um die Aufforderung aufzurufen.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Frage eingeben](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.de.png)

1. Wir sehen erneut eine Modellantwort von unserer **IT-Experten**-Aufforderung, die als Nachricht zurückgegeben wird. Scrollen Sie bis zum Ende der Nachricht und eine Karte mit Debug-Informationen wird angezeigt.

Erweitern Sie **Agent Debug Info**, indem Sie darauf klicken.

![Agent Debug Info](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.de.png)

1. Hier finden Sie Informationen zu den Agenten-Metadaten, die zur Laufzeit aufgetreten sind.

![Agent Debug Info erweitert](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.de.png)

In unserem Anwendungsfall konzentrieren wir uns auf den Abschnitt _Aktionen_.

- **Übereinstimmende Aktionen** zeigen den aktuellen Status der während der App-Suche gefundenen Funktionen.
- **Ausgewählte Aktionen** zeigen den aktuellen Status der Funktionen, die basierend auf dem Entscheidungsprozess der App ausgewählt wurden.

![Agent Debug Info erweitert](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.de.png)

Hier sehen wir, dass der Agent-Orchestrator die IT-Experten-Aufforderung gemäß den Anweisungen unseres deklarativen Agenten aufgerufen hat. Dies wird im Abschnitt _Ausgeführte Aktionen_ weiter erläutert, der uns auch mitteilt, dass die Aufforderung erfolgreich aufgerufen wurde.

![Agent Debug Info überprüfen](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.de.png)

1. Um den Entwicklermodus zu deaktivieren, geben Sie Folgendes in das Nachrichtenfeld von Copilot ein und senden Sie es ab.

    ```text
    -developer off
    ```

Eine Bestätigungsmeldung erscheint, die Ihnen mitteilt, dass der Entwicklermodus deaktiviert ist. Cool, jetzt wissen Sie, wie Sie überprüfen können, ob Ihr deklarativer Agent in Microsoft 365 Copilot Ihre Aufforderung aufgerufen hat 🌞

![Entwicklermodus deaktiviert](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.de.png)

1. Wir testen nun unseren Agenten in Microsoft Teams. Navigieren Sie zu **Apps** über das Menü auf der linken Seite und wählen Sie **Teams** unter dem Abschnitt _Apps_.

![Teams in Apps auswählen](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.de.png)

1. Microsoft Teams wird dann in einem neuen Browser-Tab geladen und wir werden mit den Nutzungsbedingungen für Microsoft 365 Copilot konfrontiert. Wählen Sie **Zustimmen**.

![Zustimmen auswählen](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.de.png)

1. Microsoft 365 Copilot wird dann standardmäßig geladen, mit dem rechten Seitenbereich, der alle Ihre verfügbaren Agenten auflistet, einschließlich des deklarativen Agenten **Contoso Tech Support Pro**.

![Microsoft 365 Copilot in Teams](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.de.png)

1. Wählen Sie das **Ellipsen-Symbol (...)** im Menü auf der linken Seite. Suchen Sie entweder nach **Contoso Tech Support Pro** im Suchfeld oder wählen Sie den Agenten aus, wenn Sie ihn sehen.

Sie können auch mit der rechten Maustaste klicken, um den Agenten **Anzuheften** für schnellen Zugriff im Menü auf der linken Seite in Microsoft Teams.

![Agent auswählen und anheften](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.de.png)

1. Unser Agent wird dann geladen. 1. Lassen Sie uns als Nächstes unseren Agenten testen. Geben Sie die folgende Aufforderung ein und senden Sie sie ab.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Agent anheften](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.de.png)

1. Eine Modellantwort von unserer Aufforderung wird dann angezeigt.

![Antwort in Teams](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.de.png)

In wenigen Minuten haben Sie gelernt, wie Sie Ihren deklarativen Agenten veröffentlichen und ihn in Microsoft 365 Copilot und Microsoft Teams testen 😊

## ✅ Mission abgeschlossen

Herzlichen Glückwunsch! 👏🏻 Sie haben einen deklarativen Agenten in Copilot Studio erstellt, bei dem Sie eine Aufforderung hinzugefügt, den Agenten angewiesen haben, die Aufforderung zu verwenden, und gelernt haben, wie Sie Ihren Agenten testen und veröffentlichen können, sowohl in Microsoft 365 Copilot als auch in Microsoft Teams.

Ihr Agent ist jetzt einsatzbereit—bereit, interne Benutzer auf Abruf zu unterstützen, Probleme zu lösen und zu helfen.

Dies ist das Ende von **Lab 03 - Erstellen eines deklarativen Agenten in Microsoft Copilot Studio für Microsoft 365 Copilot**, wählen Sie den untenstehenden Link, um zur nächsten Lektion zu gelangen.

⏭️ [Weiter zur Lektion **Erstellen einer neuen Lösung**](../04-creating-a-solution/README.md)

Bis zum nächsten Mal, bleiben Sie aufmerksam. Die Zukunft der Unternehmensarbeit führt über Agenten—und jetzt wissen Sie, wie man einen erstellt.

## 📚 Taktische Ressourcen

🔗 [Deklarativen Agenten in Microsoft Copilot Studio für Microsoft 365 Copilot erstellen](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Aufforderungen hinzufügen](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Agenten mit anderen Benutzern teilen](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [Aufforderungen für Ihren Agenten erstellen](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="Analytics" />

---

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.