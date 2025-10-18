<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cc4afa4a5a11c9d03896decfbcbd4060",
  "translation_date": "2025-10-17T19:03:12+00:00",
  "source_file": "docs/recruit/09-add-an-agent-flow/README.md",
  "language_code": "de"
}
-->
# 🚨 Mission 09: Fügen Sie einen Agentenfluss zu Ihrem Thema für Automatisierung hinzu

## 🕵️‍♂️ CODENAME: `OPERATION AUTOMATION POWERHOUSE`

> **⏱️ Zeitfenster der Operation:** `~30 Minuten`  

🎥 **Schauen Sie sich die Anleitung an**

[![Agentenfluss Video Thumbnail](../../../../../translated_images/video-thumbnail.ede12df9aaebcc8996680c8b6555d309b53bdf33d1b0165cae3b5173a6bcdd73.de.jpg)](https://www.youtube.com/watch?v=vtLZJT3eBXg "Schauen Sie sich die Anleitung auf YouTube an")

## 🎯 Missionsbeschreibung

Ihr Agent kann jetzt mit Benutzern kommunizieren und Informationen bereitstellen, aber wahre operative Exzellenz erfordert, dass Ihr Agent auch handelt. Diese Mission wird Ihren Konversationsagenten in ein Automatisierungs-Kraftwerk verwandeln, indem Sie ihn mit Agentenflüssen ausstatten.

Am Ende der Mission haben Sie eine End-to-End-Geräteanforderungsautomatisierung erstellt, die Benutzereingaben über eine adaptive Karte erfasst, Daten aus SharePoint abruft, Benachrichtigungen per E-Mail an Manager sendet und nahtloses Benutzerfeedback bietet – alles orchestriert durch Ihren Agenten mittels intelligenter Workflow-Automatisierung.

## 🔎 Ziele

In dieser Mission lernen Sie:

1. Was Agentenflüsse sind und wie sie sich von Power Automate Cloud-Flows für die Automatisierung unterscheiden
1. Die wichtigsten Funktionen, die Agentenflüsse leistungsstark machen, einschließlich KI-Aktionen und natürlicher Sprachgestaltung
1. Den Agentenfluss-Designer und die Verwendung von Ausdrücken für die dynamische Datenverarbeitung
1. Wie man eine vollständige Geräteanforderungsautomatisierung erstellt, die SharePoint-Daten und E-Mail-Benachrichtigungen integriert

## 🤔 Was ist ein Agentenfluss?

Agentenflüsse sind eine leistungsstarke Möglichkeit, repetitive Aufgaben zu automatisieren und Ihre Apps und Dienste zu integrieren. Stellen Sie sie sich als strukturierte, schrittweise Workflows vor, die Ihr Agent ausführen kann, um Aufgaben zu automatisieren oder mit anderen Anwendungen und Diensten zu verbinden. Sie sind wie kleine Workflows, die Ihrem Agenten helfen, Dinge wie Benachrichtigungen zu senden, Datensätze zu aktualisieren oder auf Ereignisse zu reagieren.

Im Gegensatz zu autonomen Agenten, die KI verwenden, um Entscheidungen spontan zu treffen, sind Agentenflüsse **deterministische Workflows** – das bedeutet, dass sie jedes Mal denselben Weg gehen und konsistente und zuverlässige Ergebnisse liefern.

Einfach ausgedrückt:

- Sie helfen Ihrem Agenten, _Dinge zu tun_, nicht nur _Dinge zu sagen_.
- Sie sind wiederverwendbar über Themen und Agenten hinweg und können durch Benutzernachrichten, Ereignisse oder andere Anwendungen und Dienste ausgelöst werden.

## 🙋🏽 Ja, aber wie unterscheiden sie sich von Power Automate Cloud-Flows?

Sowohl Agentenflüsse als auch Power Automate Cloud-Flows helfen bei der Automatisierung von Aufgaben. Sie sind jedoch für unterschiedliche Zwecke konzipiert und funktionieren auf unterschiedliche Weise.

### 🤖 Agentenflüsse in Copilot Studio

**Wofür sie gedacht sind:**

- Entwickelt für konversationelle und autonome Agenten (über Agentenanweisungen) in Copilot Studio.
- Konzentriert auf intelligente, KI-gesteuerte Automatisierung, die mit Geschäftssystemen interagiert.

**Warum sie nützlich sind:**

- Einfach direkt in Copilot Studio zu erstellen und zu verwalten.
- Ideal für die Automatisierung von Aufgaben, die _während des Gesprächs_ mit Benutzern stattfinden, wie z. B. das Einreichen eines Urlaubsantrags.
- Sie benötigen keine separate Power Automate-Lizenz, da die Abrechnung auf der Nutzung innerhalb von Copilot Studio basiert. Dies kann Zeit und Kosten für Unternehmen sparen.

**Einschränkungen:**

- Sie können sie nicht teilen, kopieren oder Mitbesitzer zuweisen.
- Agentenflüsse sind nur innerhalb von Copilot Studio sichtbar und nutzbar.
- Derzeit können Ereignisauslöser für Agenten im Power Automate Maker-Portal bearbeitet werden.

### ☁️ Power Automate Cloud-Flows

**Wofür sie gedacht sind:**

- Entwickelt für allgemeine Automatisierung über viele Apps und Dienste hinweg.
- Können unabhängig ausgeführt oder zusammen mit Agentenflüssen verwendet werden.

**Warum sie nützlich sind:**

- Bietet eine breite Palette von Konnektoren.
- Ideal für die Automatisierung von Prozessen außerhalb von Agenten.
- Können geteilt, wiederverwendet und teamübergreifend verwaltet werden.

**Anforderungen:**

- Sie benötigen eine Power Automate-Lizenz, um sie zu nutzen.

### 📗 Zusammenfassung

| Verwenden Sie dies | Wenn Sie möchten |
| :- | :- |
| Agentenflüsse | Aufgaben innerhalb eines Agenten automatisieren, KI nutzen und alles in Copilot Studio behalten |  
| Power Automate Cloud-Flows | Automatisieren über Apps und Dienste hinweg oder Workflows außerhalb von Agenten erstellen |

## 👍🏻 Warum Agentenflüsse verwenden

Agentenflüsse folgen immer einem festen Pfad – sie tun jedes Mal dasselbe, wenn sie die gleichen Eingaben erhalten.

Das macht sie:

- **Zuverlässig** – Sie können darauf vertrauen, dass sie sich jedes Mal gleich verhalten.
- **Vorhersehbar** – Sie wissen, welches Ergebnis Sie erwarten können, wenn der Fluss ausgeführt wird.
- **Regelbasiert** – Sie folgen den von Ihnen definierten Schritten.

Weitere Vorteile sind:

- **Automatisierung** – ermöglicht Ihrem Agenten, repetitive Aufgaben wie das Einreichen von Formularen oder das Senden von Benachrichtigungen zu übernehmen.
- **Verbunden** – Verbindung mit über 1400 Konnektoren wie ServiceNow, SharePoint, Salesforce. Alternativ können Sie Ihren eigenen benutzerdefinierten Konnektor erstellen.
- **Eng integriert** – Agentenflüsse sind Teil der Logik des Agenten, sie werden direkt durch Benutzernachrichten oder Aktionen im Gespräch ausgelöst.
- **Skalierbarkeit** – Flüsse können über mehrere Agenten oder Szenarien hinweg wiederverwendet werden.
- **No-Code oder Low-Code** – Sie können Flüsse mit natürlicher Sprache oder einem visuellen Designer erstellen.
- **Alles-in-einer-Plattform** – Sie können Agentenflüsse an einem Ort entwerfen, testen und bereitstellen – Copilot Studio. Kein Wechsel zwischen Plattformen erforderlich.

## 🏄🏻‍♂️ Wie verbessern Agentenflüsse Ihren Agenten?

Agentenflüsse erweitern die Fähigkeiten Ihres Agenten über das "Chatten" mit Benutzern hinaus. Sie ermöglichen es ihm, Maßnahmen zu ergreifen und mit Systemen zu interagieren.

Angenommen, Sie arbeiten in einer Finanzabteilung und erhalten viele Rechnungen von Lieferanten. Normalerweise muss jemand jede Rechnung lesen, die wichtigen Details herausziehen – den Betrag, das Datum, von wem sie stammt – und prüfen, ob alles mit Ihren Unterlagen übereinstimmt. Dann muss sie zur Genehmigung an die richtige Person weitergeleitet werden. Das kostet Zeit und Mühe.

Mit Agentenflüssen in Copilot Studio können Sie diesen Prozess automatisieren. Sobald die Rechnung eingeht, kann der Agent:

1. Das Dokument mit intelligenter Dokumentenverarbeitung lesen, um die wichtigsten Informationen zu finden.
1. Die Details mit Ihren Unternehmensdaten abgleichen, um sicherzustellen, dass alles korrekt ist.
1. Sie zur Genehmigung an die richtige Person(en) weiterleiten.

Das spart Zeit, reduziert Fehler und macht den gesamten Prozess viel reibungsloser.

### Stellen Sie sich das so vor

- **Agenten**: die intelligenten Entscheidungsträger
- **Agentenflüsse**: die zuverlässigen Ausführer

### Warum es wichtig ist

- Sie erhalten das Beste aus beiden Welten: zuverlässige Automatisierung und flexible KI.
- Es ist einfach, Flüsse zu erstellen und zu aktualisieren, wenn sich Ihre Geschäftsanforderungen ändern.
- Sie können die Automatisierung teamübergreifend skalieren.

## 🔌 Wichtige Funktionen, die Agentenflüsse leistungsstark machen

1. **Natürliche Sprachgestaltung**
    - Sie können beschreiben, was der Fluss tun soll, in einfachem Deutsch.
    - Copilot versteht Ihre Absicht und erstellt den Fluss für Sie.
    - Kein Code erforderlich – erklären Sie einfach Ihre Idee.

1. **KI-Aktionen**

    Nutzen Sie KI, um:

    - Dokumente oder Bilder zu lesen und zu verstehen.
    - Lange Inhalte in kurze, nützliche Antworten zusammenzufassen.
    - Intelligente Empfehlungen oder Entscheidungen zu treffen.

1. **Generative Aktionen**
    - Diese ermöglichen es dem Fluss, sich in Echtzeit anzupassen.
    - Der Agent kann Schritte planen und anpassen, basierend auf sich ändernden Informationen.

1. **Integrationsaktionen**
    - Verbinden Sie Ihren Fluss mit anderen Tools wie Outlook, Microsoft Teams, ServiceNow, SharePoint und anderen Anwendungen und Diensten, über mehr als 1400 integrierte Konnektoren oder Ihren eigenen benutzerdefinierten Konnektor.
    - Dies hilft Ihrem Agenten, mit den Apps zu arbeiten, die Ihr Team bereits verwendet.

1. **Menschliche Eingriffe**
    - Fügen Sie Genehmigungsschritte hinzu, bei denen eine Person etwas überprüfen oder bestätigen muss.
    - [Erweiterte Genehmigungen](https://learn.microsoft.com/microsoft-copilot-studio/flows-advanced-approvals?WT.mc_id=power-172621-ebenitez) unterstützen Erinnerungen, Delegationen und mehrstufige Genehmigungen.

## ⚙️ Wie sie funktionieren

1. **Auslöser**

    Ein Ereignis startet den Fluss – wie z. B. eine Benutzerfrage, das Aufrufen des Flusses aus einem Thema, eine geplante Zeit oder ein Ereignis in einem anderen System.

1. **Aktionen**

    Dies sind die Schritte, die der Agent als Nächstes ausführt – eine E-Mail senden, eine API aufrufen, ein Ticket in ServiceNow aktualisieren.

## 🧶 Wie erstellt man einen Agentenfluss?

1. **Natürliche Sprache**: Beschreiben Sie, was der Agent tun soll, und Copilot erstellt ihn für Sie.
1. **Designer-Canvas**: Ziehen Sie Aktionen, Bedingungen und Schleifen in den Agentenfluss-Designer, um Ihren Agentenfluss zu erstellen.

## 🎨 Was ist der Agentenfluss-Designer?

Es ist ein visuelles Tool in Copilot Studio, das Ihnen hilft, Agentenflüsse zu erstellen, zu bearbeiten und zu verwalten, die Schritt-für-Schritt-Anweisungen enthalten, denen Ihr Agent folgt, um Aufgaben zu erledigen. Es ist so konzipiert, dass es einfach zu bedienen ist, auch wenn Sie neu in Agentenflüssen sind.

### Wichtige Funktionen des Agentenfluss-Designers

1. **Visuelles Canvas**
    - Sie können Ihren gesamten Fluss wie ein Diagramm sehen.
    - Einfaches Zoomen, Anpassen der Ansicht oder Verwenden einer Minikarte, um große Flüsse zu navigieren.

1. **Aktionen hinzufügen und entfernen**
    - Klicken Sie auf die _Plus (+)_-Schaltfläche, um eine neue Aktion hinzuzufügen, wie z. B. das Senden einer Nachricht oder das Aktualisieren eines Elements in einer SharePoint-Liste.
    - Sie können nach Aktionen aus Konnektoren suchen und diese über ihre Einstellungen konfigurieren.
    - Um eine Aktion zu entfernen, klicken Sie auf die _drei Punkte (⋮)_ und wählen Sie _Löschen_.

1. **Parameter überprüfen**
    - Klicken Sie auf eine beliebige Aktion, um ihre Einstellungen, sogenannte _Parameter_, anzuzeigen oder zu bearbeiten.
    - Sie können Werte manuell eingeben oder _Ausdrücke_ verwenden, um sie dynamisch zu gestalten.

1. **Versionsverlauf**
    - Jedes Mal, wenn Sie Ihren Fluss speichern, wird eine Version aufgezeichnet.
    - Sie können zurückgehen und frühere Versionen anzeigen oder wiederherstellen, falls erforderlich.

1. **Fehlerprüfung**
    - Der _Flow Checker_ hebt alle Fehler hervor.
    - Alle Fehler müssen vor der Veröffentlichung Ihres Flusses behoben werden.

1. **Veröffentlichen und Testen**
    - Sobald Ihr Fluss fehlerfrei ist, veröffentlichen Sie ihn, um ihn live zu schalten.
    - Verwenden Sie die _Test_-Funktion, um Ihren Fluss manuell oder automatisch auszuführen und zu überprüfen, ob er wie erwartet funktioniert.

### Warum den Agentenfluss-Designer verwenden?

- **Visuell und intuitiv** – Sie können Flüsse durch Ziehen und Klicken erstellen.
- **Sicheres Experimentieren** – Der Versionsverlauf ermöglicht es Ihnen, Änderungen rückgängig zu machen.
- **Integriertes Testen** – hilft Ihnen sicherzustellen, dass alles funktioniert, bevor es live geht.

## 🔤 Sie haben _Ausdrücke_ erwähnt – was sind Ausdrücke?

Ausdrücke sind kleine Formeln oder Befehle, die Ihrem Agentenfluss helfen, mit Daten zu arbeiten. Sie verwenden sie, um Werte zu berechnen, Text zu formatieren, Entscheidungen zu treffen oder spezifische Informationen aus Eingaben zu extrahieren.

### Warum Ausdrücke verwenden?

Ausdrücke ermöglichen es Ihnen:

- **Anpassung der Datenverarbeitung** – Namen kombinieren, Daten formatieren.
- **Entscheidungen treffen** – Wenn ein Wert größer als 10 ist, etwas tun.
- **Daten transformieren** – Text in Kleinbuchstaben ändern, einen Teil eines Strings extrahieren.
- **Logik automatisieren** – ohne vollständigen Code zu schreiben.

### Wie sehen Ausdrücke aus?

Ausdrücke verwenden Funktionen. Ich werde eine Erklärung von Jerry Weinstock, einem ehemaligen Microsoft MVP, übernehmen.

!!! Zitat
    Funktionen sind integrierte Logik, um Ihre Daten entweder durch einfache oder komplexe Operationen in Ihrem Ausdruck zu transformieren.

Funktionen ermöglichen es Ihnen, Ausdrücke zu erstellen, ohne dass Sie Code schreiben müssen.

Ich beschreibe es gerne so: Eine Funktion in Agentenflüssen ist ähnlich wie Excel-Funktionen. Sie können eine Operation auf Daten ausführen, um sie in eine gewünschte Ausgabe zu transformieren. Wenn Sie Ihre Formel in Excel erstellen, wählen Sie Ihren Eingabewert aus den Zellen in einer Tabelle oder einem Bereich aus und wenden dann Funktionen an, um die Datenausgabe zu manipulieren. Ein Beispiel ist die Verwendung der Funktion `COUNT`, um die Anzahl der Zellen zu ermitteln, die Zahlen aus einem Bereich enthalten.

In Agentenflüssen beziehen Sie sich beim Erstellen Ihrer Ausdrücke auf Datenausgaben aus dem Auslöser oder Aktionen, anstatt auf Daten aus Zellen in einer Tabelle. Im vorherigen Beispiel können Sie die Funktion `length` verwenden, um die Anzahl der Elemente zu ermitteln, die von der Aktion _Get items_ des SharePoint-Konnektors zurückgegeben werden.

### Warum sind Funktionen wichtig?

Die Verwendung von Funktionen macht Ihre Agentenflüsse:

- **Intelligenter** – sie können auf unterschiedliche Eingaben oder Bedingungen reagieren.
- **Flexibler** – Sie können anpassen, wie Daten verarbeitet werden.
- **Effizienter** – Sie vermeiden manuelle Schritte, indem Sie Logik automatisieren.

### Die nützlichsten Funktionen

Die folgenden sind häufig verwendete Funktionen in Agentenflüssen. Für die vollständige Liste der Funktionen besuchen Sie den [Referenzleitfaden](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez).

#### 🔡 Text

- `concat()` - Verbindet zwei oder mehr Textstücke miteinander.
      - Beispiel: `concat('Hallo ', firstName)` → “Hallo John”

- `toLower()` / `toUpper()` - Ändert Text in Klein- oder Großbuchstaben.
      - Nützlich zur Standardisierung von Eingaben.

- `substring()` - Extrahiert einen Teil eines Strings.
      - Beispiel: Die ersten 3 Buchstaben eines Namens erhalten.

- `trim()` - Entfernt Leerzeichen am Anfang und Ende des Textes.

#### 🔢 Mathematik und Zahlen

- `add()`, `sub()`, `mul()`, `div()` - Grundlegende mathematische Operationen.
      - Beispiel: `add(5, 3)` - die Ausgabe ist 8

#### 📅 Datum und Zeit

- `utcNow()` - Holt das aktuelle Datum und die aktuelle Uhrzeit in UTC.
      - Ideal für Zeitstempel.

- `addDays()`, `addHours()` - Fügt Zeit zu einem Datum hinzu.
- Beispiel: `addDays(utcNow(), 7)` gibt das Datum in 7 Tagen aus.

- `formatDateTime()` - Formatiert ein Datum in eine lesbare Zeichenkette.
      - Beispiel: Montag, 7. Juli 2025

#### ✅ Logisch

- `if()` - Führt einen Wert aus, wenn wahr, und einen anderen, wenn falsch.
      - Beispiel: `if(score > 50, 'Bestanden', 'Nicht bestanden')`

- `equals()` - Überprüft, ob zwei Werte gleich sind.

- `and()`, `or()`, `not()` - Kombiniert mehrere Bedingungen.

#### 🪣 Weitere nützliche Funktionen

- `coalesce()` - Gibt den ersten nicht-leeren Wert zurück.
      - Nützlich für Fallback-/Standardwerte.

- `guid()` - Generiert eine eindeutige ID.
      - Nützlich für Nachverfolgung oder Protokollierung.

- `length()` - Zählt, wie viele Zeichen oder Elemente sich in einer Zeichenkette oder einem Array befinden.

## ⭐ Beste Praktiken

Hier sind einige bewährte Vorgehensweisen für den Aufbau von Agenten-Flows in Copilot Studio.

1. **Einfach anfangen und schrittweise erweitern**

    - Beginnen Sie mit einer kleinen, klaren Aufgabe wie dem Versenden einer Nachricht.
    - Fügen Sie weitere Schritte hinzu, nachdem Sie die Grundlagen Ihrer Automatisierung getestet haben.

1. **Verwenden Sie klare und beschreibende Aktionsnamen**

    - Benennen Sie jeden Schritt klar, damit Sie und Ihr Team verstehen, was er tut.
    - Beispiel: Anstatt den Standardnamen "Element aktualisieren" für die SharePoint-Connector-Aktion zu verwenden, benennen Sie ihn um, um anzugeben, was aktualisiert wird, z. B. "Gerätestatus aktualisieren".

1. **Überprüfen Sie auf Fehler, bevor Sie veröffentlichen**

    - Verwenden Sie den **Flow-Checker**, um Probleme zu finden und zu beheben.
    - Sie können Flows nicht veröffentlichen, wenn Fehler vorliegen, also versuchen Sie, diese zu beheben, sobald sie auftreten.

1. **Testen Sie Ihren Flow gründlich**

    - Nur weil er gespeichert und veröffentlicht wird, bedeutet das nicht, dass er wie erwartet funktioniert.
    - Verwenden Sie die _Test_-Funktion, um Ihren Flow manuell oder automatisch auszuführen und die Ergebnisse zu überprüfen.

1. **Verwenden Sie die Versionshistorie**

    - Speichern Sie Ihren Flow häufig, damit Sie bei Bedarf zu früheren Versionen zurückkehren können.
    - Sie können frühere Versionen im _Versionshistorie_-Panel anzeigen und wiederherstellen.

1. **Verwenden Sie Parameter und Ausdrücke sinnvoll**

    - Verwenden Sie bei der Konfiguration von Aktionen Parameter, um Ihren Flow dynamisch zu gestalten.
    - Sie können Werte manuell eingeben oder Ausdrücke verwenden, um sie zu berechnen, oder sie mit Werten aus vorherigen Aktionen kombinieren, indem Sie den _Dynamischen Inhalt_-Picker verwenden.

1. **Löschen Sie nicht benötigte Aktionen**

    - Wenn Sie eine Aktion hinzufügen und später entscheiden, dass Sie sie nicht benötigen, entfernen Sie sie, um Ihren Flow übersichtlich zu halten.

## 🧪 Lab 09 - Einen Agenten-Flow für Automatisierung hinzufügen und Themenfunktionen erweitern

Jetzt lernen wir, wie wir unser Thema mit adaptiven Karten und erweiterten Funktionen von Themen und Knoten verbessern können.

- [9.1 Einen Agenten-Flow erstellen](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.2 Agenten-Flow zum Thema hinzufügen](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.3 Thema "Gerät anfordern" mit mehreren Knoten für eine bessere Benutzererfahrung aktualisieren](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.4 Agenten mit mehreren Szenarien testen](../../../../../docs/recruit/09-add-an-agent-flow)

### ✨ Anwendungsfall

**Als** Manager eines Mitarbeiters

**Möchte ich** Geräteanfragen erhalten

**Damit ich** das vom Mitarbeiter angeforderte Gerät überprüfen kann.

Legen wir los!

### Voraussetzungen

1. **SharePoint-Liste**

    Wir verwenden die **Geräte**-SharePoint-Liste aus [Lektion 00 - Kurssetup - Schritt 3: Neue SharePoint-Website erstellen](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Falls Sie die **Geräte**-SharePoint-Liste noch nicht eingerichtet haben, gehen Sie bitte zurück zu [Lektion 00 - Kurssetup - Schritt 3: Neue SharePoint-Website erstellen](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. **Contoso Helpdesk-Agent**

    Wir verwenden denselben Agenten, der zuvor in [Lektion 06 - Einen benutzerdefinierten Agenten mit natürlicher Sprache erstellen und mit Ihren Daten verknüpfen](../06-create-agent-from-conversation/README.md) erstellt wurde.

### 9.1 Einen Agenten-Flow erstellen

In dieser Übung erstellen wir einen Agenten-Flow, der das SharePoint-Element des ausgewählten Geräts abruft und eine E-Mail mit den Gerätedetails an einen Manager sendet.

1. Im Thema **Gerät anfordern** scrollen Sie nach unten zum **Fragen mit adaptiver Karte**-Knoten und fügen einen neuen Knoten hinzu. Wählen Sie **Tool hinzufügen** und im Tab **Basis-Tools** des Flyout-Panels wählen Sie **Neuer Agenten-Flow**.

    ![Neuen Agenten-Flow hinzufügen](../../../../../translated_images/9.1_01_AddNewAgentFlow.2b9078604a054d1f022f9c73adaf10fe430e81875ec8717a7f70ef7b05f11c15.de.png)

1. Der **Designer** für Agenten-Flows wird mit einem Trigger und einer Aktion geladen.

    - **Trigger** - Wenn ein Agent den Flow aufruft
        - Dies löst einen Flow von einem Copilot Studio-Agenten aus.

    - **Aktion** - Antwort an den Agenten
        - Dies sendet eine Antwort, die Ausgabewerte an den Copilot Studio-Agenten enthalten kann.

    Wählen Sie den Trigger aus.

    ![Trigger auswählen](../../../../../translated_images/9.1_02_SelectTrigger.92dc20442add764c8aa4b7f737f28416a3223e4471562462ed6dcba2dc7c7936.de.png)

1. Als Nächstes fügen wir mehrere Eingaben für den Agenten-Flow hinzu.

    - `DeviceSharePointId` - Dies speichert den Wert, die ID, des SharePoint-Elements. Dieser ID-Wert ist eine Ausgabe des "Fragen mit adaptiver Karte"-Knotens, bei dem der Benutzer das Gerät ausgewählt hat.

    - `User` - Dies wird der Name des Benutzers sein, der aus einer Systemvariable des Agenten stammt.

    - `AdditionalComments` - Dies wird der Kommentar sein, den der Benutzer eingegeben hat, und ist eine Ausgabe des "Fragen mit adaptiver Karte"-Knotens.

    Zuerst fügen wir `DeviceSharePointId` als Eingabe für unseren Trigger hinzu. Wählen Sie **+ Eingabe hinzufügen**.

    ![Eingabe hinzufügen](../../../../../translated_images/9.1_03_AddInput.fd1e0a99ecb5e20f3a518cb23fc0d22c6db1435c5ffb2e183fce3b8a056287bb.de.png)

1. Für den Typ der Benutzereingabe wählen Sie **Text**.

    ![Text auswählen](../../../../../translated_images/9.1_04_SelectText.47ca776822ec5a6c1339c012d51e0eb6eac6bf8315d4ac6f25498b10ada16df9.de.png)

1. Für den Namen der Eingabe geben Sie Folgendes ein.

    ```text
    DeviceSharePointId
    ```

    ![DeviceSharePointId Eingabe](../../../../../translated_images/9.1_05_DeviceSharePointIdInput.caf77f8eb60a1b8649ea8b0abf05dfce9fa4bef9d9c465cd8906395e5b44842e.de.png)

1. Jetzt fügen wir die zweite Eingabe, `User`, hinzu. Wiederholen Sie die gleichen Schritte, wählen Sie **+ Eingabe hinzufügen** und wählen Sie **Text**.

    ![Eingabe hinzufügen](../../../../../translated_images/9.1_06_AddInput.3ca4bff9991b6e8a331bd909ff58038387696ce7b6ee7a932a88316aff41bc57.de.png)

1. Für den Namen der Eingabe geben Sie Folgendes ein.

    ```text
    User
    ```

    ![User Eingabe](../../../../../translated_images/9.1_07_UserInput.16b2405f2d5744ea14a6a67b69539ba24719aaf642ddfc2b281e784d74d8c1ea.de.png)

1. Jetzt fügen wir die dritte Eingabe, `AdditionalComments`, hinzu. Wiederholen Sie die gleichen Schritte, wählen Sie **+ Eingabe hinzufügen** und wählen Sie **Text**.

    ![Eingabe hinzufügen](../../../../../translated_images/9.1_08_AddInput.4685bb77618e6d9cfca7a42a0945d10f59825b1ca42de372dcf07c9170451680.de.png)

1. Für den Namen der Eingabe geben Sie Folgendes ein.

    ```text
    AdditionalComments
    ```

    ![AdditionalComments Eingabe](../../../../../translated_images/9.1_09_AdditionalComments.a4587b59b85450ca0566615c9473132dd6447e6c7513e4926942655aa0e80195.de.png)

1. Für die Eingabe `AdditionalComments` aktualisieren wir sie, um sie optional zu machen. Wählen Sie das **Ellipsen-Symbol (...)** und dann **Feld optional machen**.

    ![Feld optional machen](../../../../../translated_images/9.1_10_Optional.753bd03817c2eb37bb44a7bfd7d29314aa7109cde02e3f619c01c42bc9170b71.de.png)

1. Gute Arbeit! Der Trigger ist jetzt konfiguriert, machen wir weiter. Wählen Sie das **Plus-Symbol +** unter dem Trigger, um eine neue Aktion einzufügen.

    ![Aktion hinzufügen](../../../../../translated_images/9.1_11_AddAction.86c14acd1ce22e99b7244e0001f0039362ff6ac3efafe03956788aaa31e705af.de.png)

1. Das **Aktions-Paneel** wird angezeigt, in dem Sie Aktionen aus über 1400 integrierten Connectors zu Microsoft- und Drittanbieterdiensten anzeigen können. Geben Sie im **Suchfeld** Folgendes ein,

    ```text
    Get item
    ```

    Eine Liste von Aktionen wird in den Suchergebnissen angezeigt. Wählen Sie die Aktion **Element abrufen** aus dem **SharePoint-Connector**.

    ![Element abrufen Aktion](../../../../../translated_images/9.1_12_AddGetItemAction.434cdcb822e1f72993fc4a0c0ad753e1220456f9dab8fc307d42f5711071d45b.de.png)

1. Jetzt können wir die Aktion **Element abrufen** konfigurieren.

    Wählen Sie das **Ellipsen-Symbol (...)** in der Aktion **Element abrufen**.

    ![Ellipsen auswählen](../../../../../translated_images/9.1_13_SelectEllipsis.88bf304067f3103825f183f8962634af831460541290533e5670f4c014a97c46.de.png)

1. Wählen Sie **Umbenennen**.

    ![Umbenennen auswählen](../../../../../translated_images/9.1_14_SelectRename.74d99c883418b7dbf58758304976cac1d0f2afd30e4cd1992830f00775a46b18.de.png)

1. Benennen Sie die Aktion um in,

    ```text
    Get Device
    ```

    ![Aktion umbenennen](../../../../../translated_images/9.1_15_RenameAction.ff64b79f6e6603ae89f272f91d84ff4432c04ba103c401a2808a767e3ceb5617.de.png)

1. Im Feld **Website-Adresse** wählen Sie die **Website-Adresse** der Contoso IT SharePoint-Website aus, die in [Lektion 00 - Kurssetup - Schritt 3: Neue SharePoint-Website erstellen](../00-course-setup/README.md#step-4-create-new-sharepoint-site) erstellt wurde.

    Im Feld **Listenname** wählen Sie die **Geräte**-SharePoint-Liste aus.

    ![Parameter eingeben](../../../../../translated_images/9.1_16_SharePointSiteAndListParameters.af6e0b112eb4bfb210f9259da02b459097a06307afa6ca269cb33aa9ecc1c1e4.de.png)

1. Im Feld **Id** wählen Sie das **Blitz-Symbol** oder das **fx-Symbol** rechts aus.

    ![Dynamischen Inhalt auswählen](../../../../../translated_images/9.1_17_InsertExpressionIcon.6e250bb84e7b8884de7b2052005f7ff3cd95f2c28671d2da7965001b3f621902.de.png)

1. Im Tab **Dynamischer Inhalt** des Flyout-Panels geben Sie Folgendes ein,

    ```text
    sharepoint
    ```

    Die Suchergebnisse zeigen Eingabeparameter an, die mit dem gesuchten Wert übereinstimmen. Wählen Sie den **DeviceSharePointId**-Parameter aus dem Trigger aus.

    Wählen Sie **Hinzufügen**, um die dynamische Inhaltseingabe in den **Id**-Parameter der Aktion einzufügen.

    ![DeviceSharePointId Eingabe auswählen](../../../../../translated_images/9.1_18_DeviceSharePointId.b9be8e7c3c6b0ab710a8f662e62a0ec0133a530f6877b6cea3c48acc8022fec5.de.png)

1. Die dynamische Inhaltseingabe aus dem Trigger wird jetzt im **Id**-Parameter der Aktion referenziert. Als Nächstes aktualisieren wir einen der erweiterten Parameter. Wählen Sie **Alle anzeigen**, um die erweiterten Parameter anzuzeigen.

    ![Erweiterte Parameter anzeigen](../../../../../translated_images/9.1_19_AdvancedParameters.4bb8e0c11e7864625ad6c30ab1b9021d367cd77374c56985df7b3d43845a1883.de.png)

1. Der Parameter **Spalten durch Ansicht begrenzen** wird angezeigt und ist standardmäßig auf **Alle Spalten verwenden (Nicht begrenzen)** eingestellt. Wir aktualisieren diesen Wert auf eine Ansicht, um die zurückgegebenen Spalten in der Antwort der Aktion zu begrenzen. Wählen Sie den Parameter **Spalten durch Ansicht begrenzen**, um die Liste der Ansichten anzuzeigen.

    ![Parameter auswählen](../../../../../translated_images/9.1_20_LimitColumnsByView.4d30f532f1e1033323d39df5c9b8e803788ea785ed58de2efca2faa5df4b26fc.de.png)

1. Wählen Sie die Ansicht **Alle Elemente**.

    ![Ansicht Alle Elemente auswählen](../../../../../translated_images/9.1_21_SelectView.d180e83d5e62f5fb6994a7071d5e6ce8f88143d8cc833cb55b208c6fee41bc02.de.png)

1. Wählen Sie das **Plus-Symbol +** unter der Aktion _Gerät abrufen_, um eine neue Aktion einzufügen.

    ![Neue Aktion hinzufügen](../../../../../translated_images/9.1_22_AddAnAction.904b79142347fe927168036ade55d842fa088deef53710944272c681421e0e84.de.png)

1. Geben Sie im Suchfeld Folgendes ein,

    ```text
    send an email
    ```

    Eine Liste von Aktionen wird in den Suchergebnissen angezeigt. Wählen Sie die Aktion **E-Mail senden (V2)** aus dem **Office 365 Outlook-Connector**.

    ![E-Mail senden Aktion](../../../../../translated_images/9.1_23_SendAnEmail.f1019365131658b0e71b5b58b57d7d8b3f3a0c670ddb3cca0838bf0b4f8cd354.de.png)

1. Als Nächstes müssen wir eine Verbindung für die Connector-Aktion erstellen. Wählen Sie **Anmelden**.

    ![Verbindung erstellen](../../../../../translated_images/9.1_24_CreateConnection.9e968ad4de9d13d81e95779c4fa60809fd40de5f65dbd014f1dc39663c935806.de.png)

1. Wählen Sie Ihr angemeldetes Benutzerkonto aus.

    ![Benutzerkonto auswählen](../../../../../translated_images/9.1_25_SelectUserAccount.f3c96ac1a377c4b42a6301ba38c21469eb7bd3f48633f04200f1610902f8bdbe.de.png)

1. Wählen Sie **Zugriff erlauben**. Eine Verbindung wurde nun erstellt.

    ![Zugriff erlauben auswählen](../../../../../translated_images/9.1_26_AllowAccess.1abcaea31b9846279cafafd7160baea6bec60cdfac8224df7082ceee3ef22a26.de.png)

1. Benennen Sie die Aktion um in,

    ```text
    Send an email to manager
    ```

    Definieren wir als Nächstes die Eingabeparameter unserer Aktion.

    Für den Eingabeparameter **An** wählen Sie sich selbst aus. Normalerweise wäre dies Ihr Manager oder wir würden eine andere Aktion verwenden, die Ihren Manager basierend auf Ihrem Entra-ID-Profil abruft, aber für den Zweck dieser Lektion wählen Sie sich selbst aus.

    Für den Eingabeparameter **Betreff** geben Sie Folgendes ein,

    ```text
    Request type: new device
    ```

    Für den Eingabeparameter **Text** geben Sie Folgendes ein,

    ```text
    Hi,

    New device requested from

    Manufacturer:
    Model:
    Link to item in SharePoint
    Additional comments from:

    This is an automated email from Contoso Helpdesk Copilot
    ```

    ![Aktion umbenennen und Eingaben konfigurieren](../../../../../translated_images/9.1_27_RenameAndConfigureParameters.c3d29a3481fb5c0240cca85db4119387e6b750546ed12e2af4a9ac62d7454f89.de.png)

1. Als Nächstes aktualisieren wir den Eingabeparameter **Text** mit Referenzen zu dynamischen Inhaltseingaben aus dem **Trigger** oder der Aktion **Element abrufen**. Geben Sie nach der zweiten Zeile ein Leerzeichen ein, da wir den Namen des Benutzers aus der Trigger-Eingabe, **User**, einfügen werden.

    Wählen Sie das **Blitz-Symbol** oder das **fx-Symbol** rechts aus.

    ![User-Eingabe als dynamischen Inhalt hinzufügen](../../../../../translated_images/9.1_28_AddUserInput.f38d3df648faef75f1985bdcc23db16e197ccb1ddc015210c43bbb2569fcf654.de.png)

1. Im Tab **Dynamischer Inhalt** des Flyout-Panels wählen Sie die Eingabe **User** aus dem Trigger aus.

    Wählen Sie **Hinzufügen**, um die dynamische Inhaltseingabe **User** in den Eingabeparameter **Text** der Aktion einzufügen.

    ![User-Eingabe auswählen](../../../../../translated_images/9.1_29_SelectUserInput.4efc79f52d74fa7ae13132ea13f7d51b3f4aab6413afc41a8354c5e59852b9fc.de.png)
1. Die dynamischen Inhalteingaben aus dem Trigger werden jetzt im **Body**-Parameter der Aktion referenziert. Wir wiederholen dies für die verbleibenden Zeilen im E-Mail-Nachrichtentext.

    ![Benutzereingabe hinzugefügt](../../../../../translated_images/9.1_30_UserInputAdded.905ec0489e4f1bbe7cc071826050834aa1e5acf53f8a65ad59532ea13b81c607.de.png)

1. Klicken Sie in den Bereich neben `Hersteller:`. Wählen Sie das **Blitzsymbol** oder das **fx-Symbol** rechts aus.

    Geben Sie im Tab **Dynamische Inhalte** des Flyout-Panels Folgendes in das Suchfeld ein,

    ```text
    manufacturer
    ```

    Wählen Sie die Eingabe **Herstellerwert** aus dem Trigger und klicken Sie auf **Hinzufügen**.

    ![Herstellerwert als dynamischen Inhalt hinzufügen](../../../../../translated_images/9.1_31_ManufacturerValueAdded.db2cf35a35a20590d80d7f0191d771a045bf55e40ce98982d0e099588e260712.de.png)

1. Klicken Sie in den Bereich neben `Modell:`. Wählen Sie das **Blitzsymbol** oder das **fx-Symbol** rechts aus.

    Geben Sie im Tab **Dynamische Inhalte** des Flyout-Panels Folgendes in das Suchfeld ein,

    ```text
    model
    ```

    Wählen Sie die Eingabe **Modell** aus der Aktion **Element abrufen** und klicken Sie auf **Hinzufügen**.

    ![Modell als dynamischen Inhalt hinzufügen](../../../../../translated_images/9.1_32_ModelAdded.ff9d858648ddb85fe70eaaafa6e23d0560500e7327ccb29ee56ecac0d8d36cab.de.png)

1. Für den Text `Link zu Element in SharePoint` werden wir diesen in der E-Mail-Nachricht als Hyperlink aktualisieren. Klicken Sie an den Anfang der Zeile und wählen Sie das **Blitzsymbol** oder das **fx-Symbol** rechts aus.

    ![Dynamischen Inhalt hinzufügen](../../../../../translated_images/9.1_33_AddDynamicContent.c662d682377af82adc52de18e05baf9b6aa5a972882dcf6274f3979f14641627.de.png)

1. Klicken Sie nach dem HTML-Anker-Tag und wählen Sie das **Blitzsymbol** oder das **fx-Symbol** rechts aus.

    Geben Sie im Tab **Dynamische Inhalte** des Flyout-Panels Folgendes in das Suchfeld ein,

    ```text
    link to item
    ```

    Wählen Sie die Eingabe **Link zu Element** aus der Aktion **Element abrufen** und klicken Sie auf **Hinzufügen**.

    ![Link zu Element als dynamischen Inhalt hinzufügen](../../../../../translated_images/9.1_34_AddLinkToItem.6827bd3bad484f7382d060435bb0ef45e9bb1c3ad4774529559bb4c5f9bbca8c.de.png)

1. Wechseln Sie zum HTML-Editor, indem Sie das Symbol **&lt;/&gt;** auswählen.

    ![Benutzereingabe hinzufügen](../../../../../translated_images/9.1_35_ToggleCodeView.ae3a9caf213f2c6366487e10092ad1fad3494f110936219258d842c23e7f46d9.de.png)

1. Der HTML-Editor ist jetzt aktiviert. Klicken Sie vor den Text `Link zu Element in SharePoint`, fügen Sie ein HTML-Anker-Tag hinzu, um einen Hyperlink zu erstellen. Kopieren und fügen Sie Folgendes ein.

    ```text
    <a href="
    ```

    ![HTML-Tag](../../../../../translated_images/9.1_36_AddHTMLTag.146220ae5c33eaf9915c393c37d62b9d4b258413e9f4dc42a1ab005437669443.de.png)

1. Die dynamische Inhalteingabe von **Link zu Element** wird jetzt im **Body**-Parameter referenziert. Klicken Sie nach der Eingabe **Link zu Element**, kopieren und fügen Sie Folgendes ein.

    ```text
    ">
    ```

    ![HTML-Tag](../../../../../translated_images/9.1_37_AddHTMLTag.48f73b302f6a84bb6a51e0666fd30baf1f8d9d906947d44dc4095ededed18a2d.de.png)

1. Klicken Sie nach dem Text `Link zu Element in SharePoint`, schließen Sie das HTML-Anker-Tag. Kopieren und fügen Sie Folgendes ein.

    ```text
    </a>
    ```

    ![HTML-Tag](../../../../../translated_images/9.1_38_AddHTMLTag.47d2f0521e6aba9d609bfe65d86ebae5786e4ad5465fefb7ae0370db6e924c96.de.png)

1. Wählen Sie das Symbol **&lt;/&gt;**, um die Code-Ansicht umzuschalten.

    ![Code-Ansicht deaktivieren](../../../../../translated_images/9.1_39_ToggleCodeView.88606eb37d702a686904b2dd8943fcf144cec462b37ee781e8ee0415e62bd951.de.png)

1. Wählen Sie dann erneut das Symbol **&lt;/&gt;**, um die Code-Ansicht wieder umzuschalten.

    ![Zurück zur Code-Ansicht wechseln](../../../../../translated_images/9.1_40_ToggleCodeViewAgain.32da9b9804adbbfaf8d85bdaa6fa51d2ae5fc1fbb97f75084813972c66d0c4d9.de.png)

1. Beachten Sie, dass mehrere zusätzliche Zeichen `&lt;br&gt;` vorhanden sind. Löschen Sie diese Zeichen.

    ![Zeichen löschen](../../../../../translated_images/9.1_41_DeleteCharacters.f1ef3830b186c2cd9974ea05e336c83c0706d72ab1010d06283716dc4e982875.de.png)

1. Wir haben jetzt einen Hyperlink zu unserem E-Mail-Nachrichtentext hinzugefügt 😎 Wählen Sie das Symbol **&lt;/&gt;**, um die Code-Ansicht umzuschalten.

    ![HTML-Tag aufgeräumt](../../../../../translated_images/9.1_42_HTMLTagTidiedUp.1b27fa2c4dc65c3f1a7151abcf6e388f64cb83745b10cd22769c1f9af3421fc6.de.png)

1. Klicken Sie nach dem Text `Zusätzliche Kommentare von` vor dem Doppelpunkt und wählen Sie das **Blitzsymbol** oder das **fx-Symbol** rechts aus.

    ![Benutzerparameter hinzufügen](../../../../../translated_images/9.1_43_AddUserInput.6f0d26739c1b9039383aa37cc46fa1149a269bd4268fb54b897d144afc49c515.de.png)

1. Geben Sie im Tab **Dynamische Inhalte** des Flyout-Panels Folgendes in das Suchfeld ein,

    ```text
    user
    ```

    Wählen Sie den **Benutzer**-Parameter aus dem Trigger und klicken Sie auf **Hinzufügen**.

    ![Benutzerparameter als dynamischen Inhalt hinzufügen](../../../../../translated_images/9.1_44_AddUserDynamicContent.bb7c76e92650001207712b3447d3275d584f3ebf739034369869c3facf38eacf.de.png)

1. Wir werden jetzt einen Ausdruck einfügen, der den Wert von Zusätzlichen Kommentaren anzeigt, wenn der Benutzer im Knoten **Adaptive Karte anfordern** Kommentare bereitgestellt hat, andernfalls wird "Keine" angezeigt, wenn keine Kommentare bereitgestellt wurden.

    Klicken Sie nach dem Doppelpunkt und wählen Sie das **Blitzsymbol** oder das **fx-Symbol** rechts aus.

    ![Ausdruck hinzufügen](../../../../../translated_images/9.1_45_AddExpression.c4c92dc4a56fab75c78ec2c5087682521e562264c1710c8dfaa24134adc3a112.de.png)

1. Geben Sie im Tab **Funktion** des Flyout-Panels und im Ausdrucksfeld oben Folgendes ein,

    ```text
    if(empty())
    ```

    Dieser Ausdruck verwendet die Funktion `if` für eine if-else-Anweisung.

    Die nächste verwendete Funktion ist `empty`, die überprüft, ob ein Wert in einem Zeichenfolgenparameter vorhanden ist oder nicht. Der zu referenzierende Zeichenfolgenparameter ist der Wert des Eingabeparameters `ZusätzlicheKommentare` aus dem Trigger.

    ![Wenn leer](../../../../../translated_images/9.1_46_IfEmptyFunctions.95d21ad01f6f7c290cb8d5a57ccbca9c9532df7ce57f800554dea541d503ddc6.de.png)

1. Klicken Sie als Nächstes **innerhalb der Klammern** nach der Funktion `empty`. Wir werden den Eingabeparameter `ZusätzlicheKommentare` aus dem Trigger einfügen.

    Wählen Sie den Tab **Dynamische Inhalte**. Geben Sie Folgendes in das Suchfeld ein,

    ```text
    Additional
    ```

    Scrollen Sie im Panel nach unten und wählen Sie den Eingabeparameter **ZusätzlicheKommentare** aus dem Trigger. Der Parameter wird jetzt als Zeichenfolgenparameter im Ausdruck hinzugefügt.

    ![ZusätzlicheKommentare als dynamischen Inhalt hinzufügen](../../../../../translated_images/9.1_47_AdditionalCommentsDynamicContent.f9632f09779888c18a58df8e97ef677ed885b0eaa88c252b13b22c0e4c67495b.de.png)

1. Als Nächstes definieren wir die **_true_**-Logik, bei der, wenn der Zeichenfolgenparameter `ZusätzlicheKommentare` leer ist, ein Text `Keine` angezeigt werden soll.

    Geben Sie nach der Klammer, die den Zeichenfolgenparameter umschließt, Folgendes ein,

    ```text
    , 'None',
    ```

    ![True-Logik](../../../../../translated_images/9.1_48_None.31978299f29e07ef3257eedd5dcee09c8675f8b3f61aea8102900118e0b6ca70.de.png)

1. Schließlich definieren wir die **_false_**-Logik, bei der, wenn der Zeichenfolgenparameter `ZusätzlicheKommentare` nicht leer ist, der Wert des Eingabeparameters **ZusätzlicheKommentare** aus unserem Trigger angezeigt werden soll.

    > Zur Erinnerung: Dieser Wert stammt aus dem Feld Zusätzliche Kommentare der adaptiven Karte im Knoten **Mit adaptiver Karte anfordern** im Thema **Gerät anfordern**.

    Geben Sie nach dem Komma nach unserer **_true_**-Logik Folgendes ein, wählen Sie den Tab **Dynamische Inhalte**. Geben Sie Folgendes in das Suchfeld ein,

    ```text
    Additional
    ```

    Scrollen Sie im Panel nach unten und wählen Sie den Eingabeparameter **ZusätzlicheKommentare** aus dem Trigger. Der Parameter wird jetzt als Zeichenfolgenparameter im Ausdruck hinzugefügt.

    Fügen Sie ihn jetzt unserem **Body**-Parameter hinzu, indem Sie **Hinzufügen** auswählen.

    ![False-Logik](../../../../../translated_images/9.1_49_AdditionalCommentsDynamicContent.d42c7fc29f65d901bb26dcbc13408c387633ea185cdd79c35d6439231b7363d5.de.png)

1. Hervorragend, unser Ausdruck ist fertig! Der Ausdruck wurde jetzt dem **Body**-Parameter hinzugefügt. Formatieren Sie abschließend die letzte Zeile kursiv.

    ![Kursiv](../../../../../translated_images/9.1_50_Italics.a0c01aa33ef4e83167e1fbc21c1d833f95addd60c8f531411cf9c58a96a31b02.de.png)

1. Wir werden jetzt die Aktion **Antwort an den Agenten** aktualisieren, um den Wert des Parameters **Modellwert** aus der Aktion **Element abrufen** an den Agenten zurückzusenden.

    Halten Sie die linke Maustaste gedrückt und bewegen Sie sich im Designer nach oben, um die Aktion **Antwort an den Agenten** anzuzeigen.

    Wählen Sie die Aktion **Antwort an den Agenten** und wählen Sie den **Text**-Ausgabetyp aus.

    ![Textausgabe auswählen](../../../../../translated_images/9.1_51_RespondToTheAgentAction.4c682a440e19a0fcd6d6f51ef9cdbfe76f482a39d635b8905d9b0cbbf33d945f.de.png)

1. Geben Sie Folgendes als Namen der Ausgabe ein.

    ```text
    ModelValue
    ```

    ![Modellwert-Ausgabe](../../../../../translated_images/9.1_52_ModelValueInput.20609429eb323281051607b090319adc5315c0245c7d61158eb119714fe4318f.de.png)

1. Wählen Sie das Wertefeld aus und klicken Sie auf das **Blitzsymbol** oder das **fx-Symbol** rechts.

    ![Ausdruck einfügen](../../../../../translated_images/9.1_53_InsertDynamicContent.108ba565696f9f52d742323e0f4c46c308f322ac4bd67802e3196430155c7443.de.png)

1. Geben Sie im Tab **Dynamische Inhalte** des Flyout-Panels Folgendes in das Suchfeld ein,

    ```text
    model
    ```

    Wählen Sie den Parameter **Modell** aus der Aktion **Element abrufen** und klicken Sie auf **Hinzufügen**.

    ![Modellparameter als dynamischen Inhalt hinzufügen](../../../../../translated_images/9.1_54_ModelParameter.f231fd0ec089ac6b9ac1b7fd2e6a60a35b08484ed10b0098cff6b3ce0c7760cb.de.png)

1. Der Parameter **Modell** ist jetzt der Wert der Textausgabe. Wählen Sie **Entwurf speichern**, um unseren Agentenfluss zu speichern.

    Wir haben unseren Agentenfluss abgeschlossen 👏🏻

    ![Entwurf speichern auswählen](../../../../../translated_images/9.1_55_SaveDraftAgentFlow.5ab97895a901458362881fc9ee576762bdb0883b37a6cbd7a631ddc2750705af.de.png)

1. Lassen Sie uns eine weitere Aktualisierung unseres Agentenflusses vornehmen, bevor wir ihn veröffentlichen. Wählen Sie den Tab **Übersicht** und klicken Sie auf **Bearbeiten**.

    ![Bearbeiten auswählen](../../../../../translated_images/9.1_56_EditAgentFlowDetails.023e8149284b9ae79dd3d95f574ff90bbcc1cc4a9fff4be56664ccbe0698f310.de.png)

1. Kopieren und fügen Sie Folgendes als **Flow-Name** ein.

    ```text
    Send device request email
    ```

    Für die **Beschreibung** wählen Sie das **Aktualisierungssymbol**, um eine Beschreibung automatisch mithilfe von KI basierend auf dem Trigger und den Aktionen im Agentenfluss zu generieren.

    Wählen Sie **Speichern**, um den aktualisierten Namen und die Beschreibung des Agentenflusses zu speichern.

    ![Umbenennen, Beschreibung hinzufügen und Details speichern](../../../../../translated_images/9.1_57_RenameAndDescription.57a190396550bf998d62c49ca359b66211ae50042ac5f8739b32f8b9bc292607.de.png)

1. Wählen Sie den Tab **Designer** und klicken Sie auf **Veröffentlichen**, um den Agentenfluss zu veröffentlichen, damit er als Knoten im Thema **Gerät anfordern** hinzugefügt werden kann.

    ![Veröffentlichen](../../../../../translated_images/9.1_58_Publish.8f43271718c662deee7afea6fb283f64005b277b3a62086e6d91cc0c3ac4f79c.de.png)

1. Eine Bestätigungsmeldung wird in Kürze angezeigt, um zu bestätigen, dass der Agentenfluss veröffentlicht wurde.

    ![Bestätigungsmeldung](../../../../../translated_images/9.1_59_Confirmation.d406bde76c31b27f794d5742c992b8c84283f46b2e54524f1e500d0688a33716.de.png)

### 9.2 Agentenfluss zum Thema hinzufügen

Fügen wir nun den Agentenfluss zum Thema **Gerät anfordern** hinzu.

1. Wählen Sie **Agenten** im Menü auf der linken Seite und klicken Sie auf den **Contoso Helpdesk Agent**.

    ![Agenten auswählen](../../../../../translated_images/9.2_01_SelectAgent.b8a6fd3a8970d6b0c8e78bf0a5411257206612d53acdf9b44f78b2c9c2fe91fc.de.png)

1. Wählen Sie den Tab **Themen**.

    ![Themen-Tab auswählen](../../../../../translated_images/9.2_02_SelectTopics.3e8618aba5f4a1ddf3dee726b6da9a66ed89d04a2e8ca36b52112a6675c2885c.de.png)

1. Wählen Sie das Thema **Gerät anfordern**.

    ![Thema Gerät anfordern auswählen](../../../../../translated_images/9.2_03_SelectRequestDevice.df10472702258708b3d069e718e695b9fcabc61d42901d524dc302a03b3fa4a9.de.png)

1. Scrollen Sie zum Knoten **Mit adaptiver Karte anfordern** und fügen Sie einen neuen Knoten hinzu.

    Wählen Sie **Ein Tool hinzufügen** und im Tab **Basis-Tools** des Flyout-Panels wählen Sie den Agentenfluss **E-Mail-Anfrage für Gerät senden**, den wir kürzlich erstellt und veröffentlicht haben.

    ![Agentenfluss auswählen](../../../../../translated_images/9.2_04_SelectAgentFlow.15deca87db95fff1c9d904855d237d22a72c260adf3343d9e78695f07c42a8e0.de.png)

1. Für die Trigger-Eingaben unseres Agentenflusses müssen wir die Variablen-Ausgaben aus dem Knoten **Mit adaptiver Karte anfordern** auswählen.

    Wählen Sie das **Ellipsen-Symbol (...)** für die Eingabe **DeviceSharePointId**.

    ![Variable auswählen](../../../../../translated_images/9.2_05_SelectVariable.8fe53cbc0f950f732b9e9002b21d8762ddfe74fb601d61c2a5119e32383450a2.de.png)

1. Wählen Sie die Variable **deviceSelectionId**, die eine der Ausgaben ist, die im Knoten **Mit adaptiver Karte anfordern** definiert wurde.

    ![Variable deviceSelectionId auswählen](../../../../../translated_images/9.2_06_SelectdeviceSelectionIdVariable.67c0091e0de9442d3cffbfe3b2cace8d76be37ea67815ddfc99af03ae4b37391.de.png)

1. Wählen Sie als Nächstes das **Ellipsen-Symbol (...)** für die Eingabe **Benutzer**.

    ![Variable auswählen](../../../../../translated_images/9.2_07_SelectVariable.bf851128bec5e0255c6cf361a837ce9701d0afac84ed3d5b89665d111a098386.de.png)

1. Wählen Sie den Tab **System** im Flyout-Variablen-Panel und klicken Sie auf **User.DisplayName**. Diese Variable speichert den Anzeigenamen des internen Benutzers, der mit dem Agenten interagiert.

    ![Systemvariable User.DisplayName auswählen](../../../../../translated_images/9.2_08_SelectUser.DisplayNameVariable.926a2a7560402fbd7b224e2bf0ff11df9e5612803b7ce51e36f58201a09bbfd7.de.png)

1. Wählen Sie als Nächstes das **größer als Symbol** für **Erweiterte Eingaben**, um die Eingabe **ZusätzlicheKommentare** anzuzeigen.

    ![Erweiterte Eingaben erweitern](../../../../../translated_images/9.2_09_ExpandAdvancedInputs.bded22f83fe4eb21237daa254725e12a81ea75be34bcb0e8ab322037a4e6f418.de.png)

1. Wählen Sie das **Ellipsen-Symbol (...)** für die Eingabe ZusätzlicheKommentare.

    ![Variable auswählen](../../../../../translated_images/9.2_10_SelectVariable.86286cc06323e65fb3874b9fd0ea62d140b9e9b9a2b5116d667192a6dca3815f.de.png)

1. Wählen Sie den Tab **Formel** und das Erweiterungssymbol im Flyout-Variablen-Panel, da wir einen Power Fx-Ausdruck verwenden werden.

    ![Formel-Tab](../../../../../translated_images/9.2_11_SelectFormulaAndExpandIcon.3fcd07bfccc4f0779a5d26313b571e60be792da7fd28e937b3e888f8aaeda7e0.de.png)

1. Ähnlich wie der Ausdruck im Agentenfluss, der eine bedingte Überprüfung mit der Funktion _if_ durchführt, aber diesmal
    - mit Power Fx-Funktionen,
    - und entweder keinen Wert oder den Wert der `commentsId`-Ausgabevariable aus dem Knoten **Mit adaptiver Karte anfordern** einfügt.

    Geben Sie die folgenden Funktionen in das Power Fx-Feld ein,

    ```text
    If(IsBlank())
    ```

Dieser Ausdruck verwendet die Funktion `If` für eine If-Else-Anweisung.

Die nächste Funktion, die verwendet wird, ist `IsBlank`, die überprüft, ob ein Wert in einem Zeichenfolgenparameter existiert oder nicht. Der zu referenzierende Zeichenfolgenparameter ist die Ausgabewariable `commentsId` aus dem **Ask with adaptive card**-Knoten.

![If- und IsBlank-Funktionen](../../../../../translated_images/9.2_12_IfIsBlank.07f7516c7e1f7579239a8b3833d64a14eb88dc245cae714b3e07d6298e907d51.de.png)

1. Klicken Sie als Nächstes **innerhalb der Klammern** nach der Funktion `IsBlank`. Wir werden die Ausgabewariable `commentsId` aus dem **Ask with adaptive card**-Knoten einfügen.

Geben Sie Folgendes innerhalb der Klammern ein,

    ```text
    Topic.commentsId
    ```

Und fügen Sie ein Komma nach der Klammer hinzu.

![Referenzieren der commentsId-Ausgabe](../../../../../translated_images/9.2_13_Topic.commentsId.1a04dc190dac334ebf6c4dbc1b6df1aad2e4bbdeeb3ef960871e93614381f079.de.png)

1. Als Nächstes definieren wir die Logik:

   - wenn **_true_** - falls der Zeichenfolgenparameter `Topic.commentsId` leer ist, möchten wir keinen Wert einfügen.
   - wenn **_false_** - falls der Zeichenfolgenparameter `Topic.commentsId` nicht leer ist, fügen wir den Wert der Variable commentsId ein.

Nach der Klammer, die den Zeichenfolgenparameter umschließt, geben Sie Folgendes ein,

    ```text
    "", Topic.commentsId)
    ```

Der Power Fx-Ausdruck sollte wie folgt aussehen,

    ```text
    If(IsBlank(Topic.commentsId), "", Topic.commentsId)
    ```

Super Arbeit, unser Ausdruck ist fertig! 🙌🏻 Wählen Sie nun **Insert**, um den Eingabeparameter des Agentenflusses auf den Power Fx-Ausdruck festzulegen.

![Power Fx-Ausdruck](../../../../../translated_images/9.2_14_PowerFxExpression.80e76ea59bdb8f131d26edf2657923f4af9000768d44b06c0947115fd218698e.de.png)

1. **Speichern** Sie das Thema.

### 9.3 Aktualisieren Sie das Thema "Request device" mit mehreren Knoten für eine bessere Benutzererfahrung

Als Nächstes fügen wir zwei weitere Knoten hinzu:

- **Send a message** - dies dient als Bestätigungsnachricht, die das ausgewählte Gerät referenziert und bestätigt, dass die Anfrage eingereicht wurde.

- **Topic management** - um das Gespräch zu beenden, leiten wir zum Knoten **End of conversation** weiter.

Legen wir los!

1. Wählen Sie das **Plus-Symbol +** unterhalb des Agentenfluss-Knotens und wählen Sie den Knoten **Send a message**.

![Send a message-Knoten hinzufügen](../../../../../translated_images/9.3_01_AddSendAMessageNode.ac4111729a2602f8301ecffbcb263d692ecb43478aa9da63cae0dd58160f56c8.de.png)

1. Geben Sie Folgendes in das Nachrichtenfeld ein,

    ```text
    Thanks
    ```

Wählen Sie dann **Insert variable**, da wir den Namen des Benutzers referenzieren werden.

![Variable einfügen](../../../../../translated_images/9.3_02_InsertVariable.c5c9ebce61d1f442413d05f4437f74ee1d9c3a8c2ab696244937c56b5171f310.de.png)

1. Wählen Sie die Registerkarte **System** und suchen Sie im Suchfeld nach `User`. Wählen Sie die Variable **User.DisplayName**.

![Systemvariable auswählen](../../../../../translated_images/9.3_03_SelectSystemVariable.47cfac2f3a727dbaf32ae960cbafe43ce9ed00f73edf01ac6d48e5b2b167e5fc.de.png)

1. Geben Sie Folgendes in das Nachrichtenfeld ein,

    ```text
    . Your selected device,
    ```

Wählen Sie dann **Insert variable** und dieses Mal in der Registerkarte **Custom** die Variable **ModelValue**.

Geben Sie anschließend Folgendes ein, um die Nachricht zu vervollständigen.

    ```text
    , has been submitted and will be reviewed by your manager.
    ```

Die Nachricht sollte wie folgt aussehen.

![Nachricht senden](../../../../../translated_images/9.3_04_SendAMessage.3f6c4b5e53da9c7f9fcf9d0c453a9b65e44e35ea4c1124947fb638d0b682d96d.de.png)

1. Wählen Sie abschließend das **Plus-Symbol +** unterhalb des Knotens **Send a message** und wählen Sie **Topic management**, gefolgt von **Go to another topic** und wählen Sie **End of Conversation**.

![Topic management](../../../../../translated_images/9.3_05_EndOfConversation.3c6c96d03b29a4d0904dea09d96c62d6ad450fe60dd8d6b2fe9d31681d6cb147.de.png)

1. **Speichern** Sie das Thema.

![Speichern](../../../../../translated_images/9.3_06_SaveTopic.8c9201fabce9f41af03d9f1beb9ce321e4ee9880a94edabe58b592bffebda80a.de.png)

### 9.4 Testen Sie den Agenten mit mehreren Szenarien

Super Arbeit!!! 😁 Wir können jetzt unseren Agenten testen.

#### 9.4.1 Gerät anfordern und einen Kommentar in der adaptiven Karte eingeben

1. **Aktualisieren** Sie das Testfenster, wählen Sie das **Aktivitätskarten-Symbol** und geben Sie Folgendes als Nachricht an den Agenten ein.

    ```text
    I need a laptop
    ```

![Agent testen](../../../../../translated_images/9.4_01_TestAgent_RequestDevice_Yes.e73a5076dcd7179901dc0536624a039e372e405a6aac7ab89a632ce81bacdc2e.de.png)

1. Der Agent löst **Available devices** aus und antwortet mit der Liste der verfügbaren Geräte. Geben Sie Folgendes als Antwort auf die Frage ein, ob Sie ein Gerät anfordern möchten.

    ```text
    Yes
    ```

![Ja](../../../../../translated_images/9.4_02_RequestDevice_Yes.25c34743bc168fde33f91743316e7bad87ee0e47150c93e9b82c4662404dcaba.de.png)

1. Beachten Sie, wie der Agent gemäß den Anweisungen **Request device** aufgerufen hat und dass die adaptive Karte jetzt in der Agentennachricht angezeigt wird.

Wählen Sie das Gerät **Surface Laptop 15** aus und fügen Sie Folgendes als Kommentar hinzu.

    ```text
    I need 16GB of RAM please
    ```

![Gerät auswählen und Kommentar eingeben](../../../../../translated_images/9.4_03_SelectDeviceAndEnterComment.570ea590309bf97edc40c6f7b53dbdc1174365860d8e8a4c32cfb7f1837621c2.de.png)

1. Scrollen Sie nach unten, bis Sie die Schaltfläche **Submit Request** sehen, und wählen Sie diese aus, um die adaptive Karte an den Agenten zu übermitteln.

![Anfrage übermitteln](../../../../../translated_images/9.4_04_SubmitRequest.ce3f4f44b90243a18dbfb401548b9b3cefd3ea17d8293a1bc3377323e3449da9.de.png)

1. Wählen Sie **Allow**, damit der Agent Ihre Anmeldedaten für die Verbindungsauthentifizierung der beiden Connector-Aktionen verwenden kann.

![Erlauben](../../../../../translated_images/9.4_05_SelectAllow.f7b5bda068fbaee83dcb1cff03a52c946fb4d879137c55f4e5f9eb3953985e0e.de.png)

1. Der Agent zeigt dann die Bestätigungsnachricht an, die das ausgewählte Modell enthält, und leitet anschließend zum Thema **End of Conversation** weiter. Cool!

![Anfrage übermittelt](../../../../../translated_images/9.4_06_RequestSubmitted.1d4d2e9afbc222a5ba79a4c254e7b2364d6eafc1a200ad6ac0aa142f9f10642d.de.png)

1. Wählen Sie **Ja**, um den Rest des Themas **End of Conversation** zu überprüfen.

![Ja auswählen](../../../../../translated_images/9.4_07_RedirectNode.e7b1390e4eafe8c2c815fc8ce7fdda56617d9fbeccb0d59423ad2899a8e5f897.de.png)

1. Bewerten Sie als Nächstes die Erfahrung, indem Sie einen der Sterne in der Bewertungsskala-Karte auswählen.

Der Agent fährt dann mit dem letzten **Question**-Knoten im Thema **End of Conversation** fort. Wählen Sie **Nein**.

![Thema End of Conversation](../../../../../translated_images/9.4_08_EndOfConversation.b35507f7f561633c0cb3b6c15dc007ae4197a72d58afd8ae616bea439bd6e148.de.png)

1. Das Thema wird dann abgeschlossen, da eine abschließende Nachricht im Testfenster angezeigt wird.

![Thema End of Conversation](../../../../../translated_images/9.4_09_EndOfConversation.438891b82e322b8a2648533200fbcd01c660ab049223b0920cdd0fbfcdeeb888.de.png)

1. Überprüfen Sie Ihr E-Mail-Postfach, um die vom Agentenfluss an den Manager gesendete E-Mail zu überprüfen. Sie können die Details des ausgewählten Geräts und die in der adaptiven Karte eingegebene Notiz sehen.

![E-Mail erhalten](../../../../../translated_images/9.4_10_ReviewEmailMessageWithComment.b0138b0bb9d08aacbd8bbb02fdb633a6796b4131cf8d83212adeabaa1ce04a18.de.png)

1. Klicken Sie auf den Hyperlink, und der Browser sollte das SharePoint-Element des Geräts laden. Super!

![Hyperlink in E-Mail anklicken](../../../../../translated_images/9.4_11_SelectLinkInEmail.2179f17165b61ba1e8aee68e8de4c752d64b0780ad86e0fe9054580d9c24e208.de.png)

#### 9.4.2 Gerät anfordern und keinen Kommentar in der adaptiven Karte eingeben

Testen wir nun das Szenario, in dem kein Kommentar eingegeben wird.

1. Wiederholen Sie die gleichen Schritte:

   - **Aktualisieren** Sie das Testfenster und wählen Sie das **Aktivitätskarten-Symbol**
   - Geben Sie die Nachricht `I need a laptop` ein
   - Antworten Sie mit `Yes` auf die Frage, ob Sie ein Gerät anfordern möchten

![Gerät anfordern](../../../../../translated_images/9.4_12_RequestDevice_Yes.1e369b8a52547fade4b84a4e36b399ee0692c6edbaa778ba90fe9c15cae75c5c.de.png)

1. Wählen Sie dieses Mal **Surface Laptop 13** als Gerät aus und geben Sie keinen Kommentar ein.

![Gerät auswählen](../../../../../translated_images/9.4_13_SelectDevice.d9ad15d17de3f06fd948bd529f116f7c05bedf79c016180d8a1dd7e378322b0e.de.png)

1. **Übermitteln** Sie die Anfrage, indem Sie die Schaltfläche **Submit Request** auswählen.

![Anfrage übermitteln](../../../../../translated_images/9.4_14_SubmitRequest.a783ad8460bfb4485cfd2e97db2c065d9d6bf803279e3bd1569fe3e93548a578.de.png)

1. Dieses Mal zeigt die E-Mail, die Sie in Ihrem Postfach erhalten, **None** als Kommentar an.

![E-Mail erhalten](../../../../../translated_images/9.4_15_ReviewEmailMessage.137f35152c9da4b4a02bebec5f0cc9e55cfa25679770ace003aa19482ed0f3eb.de.png)

#### 9.4.3 Kein Gerät anfordern

Testen wir das letzte Szenario, bei dem kein Gerät angefordert wird, und das Thema **Goodbye** gemäß den Agentenanweisungen aufgerufen werden sollte.

1. Wiederholen Sie die gleichen Schritte:

   - **Aktualisieren** Sie das Testfenster und wählen Sie das **Aktivitätskarten-Symbol**
   - Geben Sie die Nachricht `I need a laptop` ein
   - Antworten Sie dieses Mal mit `No` auf die Frage, ob Sie ein Gerät anfordern möchten

![Agent testen](../../../../../translated_images/9.4_16_TestAgent_RequestDevice_No.85f205968f1d4083f20cc890a707748f8e06c01a19536cd299a13bdde2350de7.de.png)

1. Der Agent hat das Thema **Goodbye** aufgerufen, und die im Thema definierte Frage wird gestellt.

![Thema Goodbye aufgerufen](../../../../../translated_images/9.4_17_Goodbye.05ee598a987237e02866647a9699b0efa7ac58d1f448497f956af2ee815cb961.de.png)

## ✅ Mission abgeschlossen

Herzlichen Glückwunsch! 👏🏻 Sie haben gelernt, wie Sie Ihren Agentenfluss erstellen und ihn in unser bestehendes Thema **Request device** einfügen können, sowie wie Sie den Agenten zu einem anderen Thema weiterleiten.

Dies ist das Ende von **Lab 09 - Add an agent flow for automation and enhance topic capabilities**, wählen Sie den untenstehenden Link, um zur nächsten Lektion zu wechseln. Wir werden den Anwendungsfall in diesem Lab in der nächsten Lektion weiter ausbauen.

⏭️ [Weiter zur Lektion **Add Event Triggers - Enable autonomous agent capabilities**](../10-add-event-triggers/README.md)

## 📚 Taktische Ressourcen

🔗 [Introducing agent flows: Transforming automation with AI-first workflows](https://www.microsoft.com/microsoft-copilot/blog/copilot-studio/introducing-agent-flows-transforming-automation-with-ai-first-workflows/)

🔗 [Agent flows overview](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview?WT.mc_id=power-172621-ebenitez)

🔗 [Use agent flows with your agent](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-172621-ebenitez)

🔗 [List of functions in the reference guide](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez)

📺 [Agent Flows in Copilot Studio](https://www.youtube.com/watch?v=VJTKyk3Pr7s)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/09-add-an-agent-flow" alt="Analytics" />

---

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.