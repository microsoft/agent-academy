<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "75efaf515d5694d4fd549bfd6518901a",
  "translation_date": "2025-10-17T19:30:56+00:00",
  "source_file": "docs/operative-preview/03-automate-triggers/README.md",
  "language_code": "de"
}
-->
# Mission 03: Ereignistrigger hinzufügen, um autonom zu handeln

--8<-- "disclaimer.md"

## 🕵️‍♂️ CODENAME: `OPERATION SIGNAL POINT`

> **⏱️ Zeitfenster der Operation:** `~45 Minuten`

## 🎯 Missionsbeschreibung

Willkommen zurück, Agent. In [Mission 02](../02-multi-agent/README.md) - haben Sie gelernt, wie Sie einen Application Intake Child-Agent und einen Interview Prep Connected-Agent erstellen, um die Fähigkeiten Ihres Haupt-Hiring-Agent zu erweitern.

Ihr Auftrag, falls Sie ihn annehmen, ist **Operation Signal Point** - ein tieferer Einstieg in **Ereignistrigger**, um Ihr Agentensystem von reaktiv zu **autonomem Betrieb** zu transformieren. Sie werden Ihre Agenten von der Abhängigkeit menschlicher Eingaben befreien und sie dazu bringen, proaktiv auf externe Ereignisse zu reagieren und intelligente Aktionen ohne Aufsicht auszuführen.

Stellen Sie sich das als ein Upgrade von Agenten vor, die _Fragen beantworten_, zu Agenten, die _Bedürfnisse antizipieren_ und _selbstständig handeln_. Durch Ereignistrigger und automatisierte Workflows wird Ihr Hiring-Agent eingehende Lebenslauf-E-Mails erkennen, Anhänge automatisch verarbeiten, Daten in Dataverse speichern und Ihr HR-Rekrutierungsteam über Microsoft Teams benachrichtigen - während Sie sich auf Aufgaben mit höherem Wert konzentrieren.

Willkommen in der Welt, in der Automatisierung auf Intelligenz trifft.

## 🔎 Ziele

In dieser Mission lernen Sie:

1. Wie Ereignistrigger autonomes Agentenverhalten ohne Benutzerinteraktion ermöglichen
1. Die Unterschiede zwischen interaktiven und autonomen Agenten in Copilot Studio
1. Wie man Ereignistrigger erstellt, die E-Mail-Anhänge automatisch verarbeiten und Dateien in Dataverse hochladen
1. Wie man Agenten-Flows erstellt, die adaptive Karten in Teams-Kanälen für Benachrichtigungen posten
1. Wie man Daten zwischen Ereignistriggern und Agenten-Flows für eine End-to-End-Automatisierung übergibt

## 🤔 Was ist ein Ereignistrigger?

In [Recruit](../../recruit/10-add-event-triggers/README.md) haben wir bereits über Ereignistrigger gelernt. Lassen Sie uns dies kurz wiederholen, falls Sie es verpasst haben.

**Ereignistrigger** ermöglichen es einem Agenten, _selbstständig zu handeln_, wenn etwas in einem anderen System passiert - ohne dass eine Benutzernachricht erforderlich ist. Wenn das konfigurierte Ereignis ausgelöst wird - wie „neues SharePoint-Element“, „neue E-Mail“, „Planner-Aufgabe zugewiesen“ oder sogar eine zeitbasierte Wiederholung, sendet ein Connector eine Trigger-Nutzlast an Ihren Agenten. Der Agent folgt dann Ihren Anweisungen, um zu entscheiden, welche Aktionen oder Themen aufgerufen werden sollen.

### Hauptmerkmale

- **Autonome Aktivierung:**
      - Im Gegensatz zu Themen-Triggern, die starten, wenn ein Benutzer mit dem Agenten interagiert, werden Ereignistrigger durch externe Ereignisse ausgelöst und ermöglichen proaktives Verhalten.

- **Nutzlast-gesteuert:**
      - Jedes Ereignis liefert eine Nutzlast (Variablen + optionale Anweisungen) über einen Connector. Der Agent verwendet Ihre definierten Anweisungen und die Nutzlast, um zu entscheiden, was als Nächstes zu tun ist.
      - Zum Beispiel _ein Thema aufrufen_ oder _Aktionen ausführen, die durch Tools definiert sind_.

- **Beispiele direkt verfügbar:**
      - SharePoint/OneDrive-Datei oder -Element erstellt
      - Planner-Aufgabe abgeschlossen/zugewiesen
      - Microsoft Forms-Antwort eingereicht
      - Wiederholung/Planung

    Die Verfügbarkeit hängt von den Datenrichtlinien Ihrer Organisation ab, die in Power Automate konfiguriert sind.

- **Erfordert generative Orchestrierung:**
      - Ereignistrigger sind nur verfügbar, wenn generative Orchestrierung für den Agenten aktiviert ist.

- **Abrechnung/Nutzung:**
      - Jede Trigger-Lieferung zählt als Nachricht im Rahmen der Kapazität von Copilot Studio.
      - Zum Beispiel sendet eine 10-minütige Wiederholung alle 10 Minuten eine Nachricht.

- **Authentifizierungsmodell und Einrichtung:**
      - Sie fügen Trigger im Agenten-Übersicht unter _Triggers_ hinzu. Die Authentifizierung für den Trigger-Connector verwendet das Konto des Agenten-Erstellers („Agenten-Autor-Authentifizierung“).
      - Sie können Trigger-Parameter und Nutzlast im Power Automate Maker-Portal bearbeiten.

- **Testen & Beobachtbarkeit:**
      - Sie können Trigger aus dem Testbereich des Agenten testen und das Verhalten mit der Aktivitätskarte vor der Veröffentlichung überprüfen.

!!! info "TL;DR für Entwickler"

    Denken Sie an Ereignistrigger als **webhook-ähnliche Signale**, die eine strukturierte Nutzlast in Ihren Agenten pushen, sodass er _Arbeit initiieren_ und Aktionen über Systeme hinweg verketten kann - ohne darauf zu warten, dass ein Benutzer eine Anfrage stellt.

### Themen-Trigger - Unterschiede

Zuvor haben Sie in [Recruit](../../recruit/07-add-new-topic-with-trigger/README.md) über Themen-Trigger gelernt, aber Sie fragen sich vielleicht immer noch, wie sich _Themen_-Trigger von _Ereignis_-Triggern unterscheiden und warum diese Unterscheidung wichtig ist, um zu verstehen, was einen Agenten autonom macht.

Themen-Trigger steuern, _wann ein Thema ausgeführt wird_, normalerweise als Reaktion auf eine Benutzernachricht.

- In der generativen Orchestrierung ist der Standard-Trigger **By agent** - der Planer wählt ein Thema aus, dessen Name/Beschreibung am besten zur Nachricht des Benutzers passt.
- In der klassischen Orchestrierung ist der Standard **Phrases** - der Planer wählt ein Thema aus, wenn ein oder mehrere Trigger-Phrasen am besten zur Nachricht des Benutzers passen.

Andere Trigger-Typen umfassen `Message received`, `Event received`, `Activity received`, `Conversation update`, `Invoke received`, `On redirect`, `Inactivity` und `Plan complete`.

!!! info "Wesentlicher Unterschied"

    Themen-Trigger sind _Gesprächsaktivitätsstarter_ innerhalb des Chats.
    
    Ereignistrigger sind _Systemereignisstarter_, die über Connectors geliefert werden und den Agenten ganz ohne Gespräch ausführen können.

### Schnellübersicht: Themen-Trigger vs Ereignistrigger

- **Themen-Trigger:** Benutzer (oder Chat-Aktivität) sagt/tut X ➡️ Thema T ausführen.
- **Ereignistrigger:** SharePoint/Planner/E-Mail/Timer löst mit Nutzlast P aus ➡️ Agent bewertet Anweisungen ➡️ ruft entsprechend Aktionen/Themen auf.

## 🏓 Interaktiver Agent vs Autonomer Agent - Vergleich

Jetzt, da Sie den Unterschied zwischen Ereignistriggern und Themen-Triggern kennen, lernen wir als Nächstes den Unterschied zwischen einem interaktiven Agenten und einem autonomen Agenten.

In Copilot Studio bedeutet "interaktiv", dass Agenten hauptsächlich über **Themen** in einem Chat oder Kanal interagieren. "Autonom" bedeutet, dass Agenten auch **Ereignistrigger** nutzen, um ohne Benutzereingabe zu arbeiten.

Die folgende Tabelle fasst ihre Unterschiede und Gemeinsamkeiten zusammen.

| Dimension                           | Interaktiver Agent     | Autonomer Agent                                                                                              |
|-------------------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------|
| Wie es startet                      | Benutzer (oder Chat-Aktivität) löst ein Thema aus. Beispiel: By agent, Phrases, Message received.   | Externer Ereignistrigger sendet eine Nutzlast über einen Connector an den Agenten. Beispiel: SharePoint, Planner, E-Mail, Zeitplan, etc. |
| Hauptanwendung                      | Q&A, geführte Workflows, anfragegesteuerte Aktionen im Chat - Teams, Web, etc.  | Proaktive Operationen und Hintergrundautomatisierung - auf Systemänderungen reagieren und dann benachrichtigen, speichern oder Aufgaben orchestrieren. |
| Trigger-Oberfläche                  | Themen-Trigger: By agent / Phrases / Message received / Activity types / Invoke / Inactivity / Plan complete | Ereignistrigger-Bibliothek über Connectors; Nutzlast enthält Ereignisdaten + optionale Anweisungen. |
| Planer (generative Orchestrierung)  | Stark genutzt für By agent und Plan complete Trigger, um Themen auszuwählen/zu sequenzieren. | Erforderlich für Ereignistrigger; der Agent verwendet Anweisungen + Nutzlast, um zu entscheiden, welche Aktionen/Themen aufgerufen werden sollen. |
| Typisches Beispiel                  | Benutzer fragt "Was ist unsere Rückerstattungsrichtlinie?" → Thema wird ausgeführt, Abfrage der Wissensdatenbank, Antwort. | Neue Planner-Aufgabe zugewiesen → Ereignistrigger wird ausgelöst → Agent postet eine Teams-Nachricht, aktualisiert einen Datensatz oder ruft ein Thema auf. |
| Einrichtungsweg                     | Themen erstellen, Trigger-Typ definieren, Dialog/Aktionen verfassen; in Kanälen veröffentlichen. | Ereignistrigger hinzufügen (Übersicht → Triggers), Connector mit Agenten-Autor-Anmeldedaten authentifizieren, Nutzlast/Anweisungen konfigurieren; im Testbereich testen; veröffentlichen. |
| Authentifizierung und Governance    | Läuft im Kanal-/Authentifizierungskontext; Themen-Trigger reagieren auf Chat-Aktivitäten in erlaubten Kanälen. | Trigger-Verfügbarkeit hängt von Power Automate-Datenrichtlinien ab; Connectors laufen unter dem Konto des Agenten-Erstellers. |
| Beobachtbarkeit                     | Themen innerhalb von Copilot Studio testen, Gesprächsprotokolle/Aktivitäten überprüfen. | Test-Trigger und Aktivitätskarte verwenden, um die Ausführung vor der Veröffentlichung zu validieren, Aktivität nach der Veröffentlichung überwachen. |
| Kapazitätsauswirkung                | Jede Benutzernachricht/Agentenantwort ist eine Nachricht, die Kapazität verbraucht. | Jede Ereignislieferung ist ebenfalls eine Nachricht, plus alle nachfolgenden Aktionen. Beispiel: eine 10-minütige Wiederholung = 6 Nachrichten/Stunde |

### Wann sollte was verwendet werden?

- Wählen Sie **Themen-Trigger (interaktiv)**, wenn Benutzer die Agenten-Konversation initiieren - FAQ, geführte Intake oder Aufgaben im Befehlsstil innerhalb des Chats. Der By agent-Trigger des Planers reduziert den manuellen Aufwand bei der Phrasenerstellung.
- Fügen Sie **Ereignistrigger (autonom)** hinzu, wenn der Agent die Konversation starten oder selbstständig handeln soll - bei Updates in SharePoint/Dataverse, eingehenden E-Mails oder nach einem Zeitplan. Dies bringt Sie von reaktiven zu proaktiven Operationen.

## Entwicklertipps & Stolperfallen

1. **Generative Orchestrierung aktivieren** für jeden Agenten, den Sie autonom machen möchten. Ereignistrigger werden sonst nicht angezeigt.

1. **Modellieren Sie die Nutzlast frühzeitig.** Entscheiden Sie, welche minimalen Felder Ihr Agent vom Trigger benötigt, wie `itemId`, `assignedTo`, `dueDate`, und fügen Sie prägnante Anweisungen hinzu, die dem Agenten sagen, welche Aktion/welches Thema basierend auf den Nutzlastwerten aufgerufen werden soll.

1. **Authentifizierungsbereich beachten.** Trigger authentifizieren sich über das Konto des Agenten-Erstellers. Stellen Sie sicher, dass dieses Konto die richtigen Connector-Berechtigungen hat und den Power Automate-Datenrichtlinien entspricht.

1. **Kosten und Lärm kontrollieren.** Hochfrequente Wiederholungen oder sehr gesprächige Quellen können den Nachrichtenverbrauch schnell erhöhen - drosseln Sie, wo möglich, oder fügen Sie Bedingungen im Trigger hinzu, um Ereignisse zu filtern.

1. **Vor der Veröffentlichung testen.** Verwenden Sie **Test-Trigger** und die Aktivitätskarte, um den Plan und die aufgerufenen Aktionen zu beobachten - iterieren Sie Anweisungen/Nutzlast, bis das Verhalten stabil ist.

## 🧪 Lab 03 - Automatisierung von Bewerbungs-E-Mails

Als Nächstes werden wir einen Ereignistrigger zum **Hiring Agent** hinzufügen und einen Agenten-Flow im Child-Agent **Application Intake Agent** erstellen, um die weitere Verarbeitung für Autonomie zu ermöglichen.

### ✨ Anwendungsfall-Szenario

!!! info ""

    **Als** HR-Recruiter

    **möchte ich** benachrichtigt werden, wenn eine E-Mail mit einem Lebenslauf in meinem Posteingang angekommen ist, die automatisch in Dataverse hochgeladen wurde

    **damit ich** über Lebensläufe, die per E-Mail für Bewerbungen gesendet und automatisch in Dataverse hochgeladen wurden, informiert bleibe

Wir werden dies mit zwei Techniken erreichen:

1. Ein Ereignistrigger für den Eingang der E-Mail,
    1. Überprüfen, ob der `contentType` der Datei `PDF` als Formattyp entspricht.
    1. Datei extrahieren und mit Aktionen über den Dataverse-Connector in Dataverse hochladen.
    1. Anschließend einen Prompt an den Agenten senden, um die weitere Verarbeitung durch Übergabe von Eingabeparametern aus den Dataverse-Aktionen zu starten.

1. Ein Agenten-Flow wird dem Child-Agent **Application Intake Agent** hinzugefügt, der durch den Prompt im Ereignistrigger aufgerufen wird.
    1. Die Eingabeparameter, die vom Prompt des Ereignistriggers übergeben werden, in einer adaptiven Karte verwenden, die in einem Kanal in Microsoft Teams gepostet wird, um das HR-Rekrutierungsteam zu benachrichtigen. Die adaptive Karte enthält einen Link zur Zeile in Dataverse, die im **Hiring Agent** angezeigt wird.

Legen wir los!

### ✨ Voraussetzungen für die Durchführung dieser Mission

Sie benötigen **entweder**:

- **Mission 01 und Mission 02 abgeschlossen** und Ihren Hiring Agent bereit, **ODER**
- **Die Starterlösung für Mission 03 importieren**, falls Sie neu beginnen oder aufholen müssen. [Mission 03 Starterlösung herunterladen](https://aka.ms/agent-academy)

!!! note "Lösungsimport und Beispieldaten"
    Wenn Sie die Starterlösung verwenden, lesen Sie [Mission 01](../01-get-started/README.md) für detaillierte Anweisungen zum Importieren von Lösungen und Beispieldaten in Ihre Umgebung.

Sie benötigen außerdem Zugriff auf **Microsoft Teams**, um die zweite Übung des Labs abzuschließen, bei der eine adaptive Karte in Microsoft Teams gepostet wird.

### Lab 3.1 - Automatisches Hochladen von Lebensläufen in Dataverse, die per E-Mail empfangen werden

1. Im Hiring Agent scrollen Sie im **Übersicht-Tab** nach unten und wählen **+ Trigger hinzufügen**.

       ![Trigger zum Agenten hinzufügen](../../../../../translated_images/3.1_01_AddTrigger.4d5f4d13a4a6b19fe9ff89e3a483601199d7643236d6df65ff81dfea76d1d443.de.png)

1. Eine Liste von Triggern wird angezeigt. Wählen Sie **Wenn eine neue E-Mail eingeht (V3)** und klicken Sie auf **Weiter**.

       ![Trigger "Wenn eine neue E-Mail eingeht (V3)" auswählen](../../../../../translated_images/3.1_02_WhenANewEmailArrives.a250875915165d97c1af6eebba70f16fbfc845a37d4d354c9f35a55aa459035e.de.png)

1. Nun sehen Sie den **Trigger-Namen** und die **Anmeldeverbindungen** für die aufgeführten Apps.

       Benennen Sie den Trigger wie folgt um:
    
       ```text
       Wenn eine neue E-Mail von einem Bewerber eingeht
       ```

       Stellen Sie sicher, dass Sie ein grünes Häkchen bei jeder der aufgeführten Verbindungen sehen. Falls nicht, melden Sie sich über die Ellipse (...) an und wählen **+ Neue Verbindungsreferenz**, um eine neue Verbindungsreferenz zu erstellen.

       ![Details für Trigger-Namen aktualisieren und Verbindungsreferenzen überprüfen](../../../../../translated_images/3.1_03_RenameTriggerName.3eb80b25bea5f874a51aab600ffd333359de3a981e41eed1b4fc7c8f27eef323.de.png)

1. Der letzte Schritt besteht darin, die Eingabeeigenschaften des Triggers festzulegen. Aktualisieren Sie die folgenden Eigenschaften wie angegeben:

     | Eigenschaft | Einstellung | Details |
     |-------------|-------------|---------|
     | **Anhänge einbeziehen (optional)** | Dropdown | Ja |
     | **Betreff-Filter (optional)** | Mit Tastatur eingeben | Bewerbung |
     | **Nur mit Anhängen (optional)** | Dropdown | Ja |

       Wählen Sie **Trigger erstellen**.

       ![Trigger-Eingaben konfigurieren](../../../../../translated_images/3.1_04_ConfigureTriggerInputs.2151044f4953b31b40402c2a94fd63fb71fe8eede27a5cbf1d124d4300318446.de.png)

1. Nach der Erstellung erscheint eine Bestätigungsmeldung, dass der Trigger dem Agenten hinzugefügt wurde. Wählen Sie **Schließen**, und der Trigger wird im Abschnitt **Triggers** aufgelistet.
Wir werden nun den Ereignisauslöser aktualisieren, um weitere Automatisierungsfunktionen hinzuzufügen. Wählen Sie die **Ellipsen (...)** beim Auslöser und dann **In Power Automate bearbeiten** aus.

![In Power Automate bearbeiten auswählen](../../../../../translated_images/3.1_05_SelectEditInPowerAutomate.d298b51d7980cf2fd20a9d8193745aef4ce8097a4a2d33341e2dc159b9bfc099.de.png)

1. Der Auslöser wird dann als Flow im Power Automate Maker-Portal geladen. Was Sie sehen, ist der Flow-Designer im Power Automate Maker-Portal. Hier können wir weitere Logik und Aktionen für mehr Automatisierung hinzufügen. Der Auslöser erscheint oben, gefolgt von **Sendet eine Eingabeaufforderung an den angegebenen Copilot zur Verarbeitung** als letzte Aktion im Flow.

![Flow-Designer im Power Automate Maker-Portal](../../../../../translated_images/3.1_06_EditInPowerAutomate.f8967ace56354224574517f31a2a2ce0a5b5d3ab85bfb9ec6cf70e83ab1b8e6d.de.png)

1. Standardmäßig kann der Auslöser **Wenn eine neue E-Mail eintrifft** in Power Automate mehrere E-Mails gleichzeitig verarbeiten, wenn mehrere E-Mails auf einmal eintreffen, und den Flow nur einmal für die gesamte Gruppe ausführen.

Um sicherzustellen, dass der Flow für jede E-Mail separat ausgeführt wird, aktivieren Sie die Einstellung **Split On** in den Einstellungen des Auslösers und wählen Sie `@triggerOutputs()?['body/value']` im Dropdown-Feld für Arrays aus.

Mit aktivierter **Split On**-Einstellung und dem Array-Feld auf `@triggerOutputs()?['body/value']` gesetzt, wird der Flow individuell für jede Nachricht ausgeführt, auch wenn viele gleichzeitig eintreffen.

![Split On-Einstellungen im Auslöser aktivieren](../../../../../translated_images/3.1_07_UpdateTriggerSettings.0f363c4f4655276732575fa795bf1ad1568df34d34b703c85073591cc8585609.de.png)

1. Als Nächstes fügen wir eine Logik hinzu, um den Dateityp des Anhangs zu überprüfen. Wir möchten nur .PDF-Dateianhänge hochladen und keine Bilder (diese könnten aus E-Mail-Signaturen stammen). Wählen Sie das **+**-Symbol unterhalb des Auslösers und dann **Steuerung** im Abschnitt **Integrierte Tools** aus.

![Steuerung auswählen](../../../../../translated_images/3.1_08_Control.2fa6987b64ae20d5c8343d1b15937432ab6c893750c4b1427df56067023fd437.de.png)

1. Wählen Sie die Aktion **Bedingung** aus.

![Bedingung-Aktion auswählen](../../../../../translated_images/3.1_09_AddConditionAction.a7eec0b2a42d4a7c54bd305f0c480b72e3feec155a4e2468e12279082257f21f.de.png)

1. Konfigurieren Sie nun die Bedingung, um zu überprüfen, ob der Dateityp des Anhangs .PDF ist. Im Feld **Wert auswählen** wählen Sie das **Blitzsymbol** oder das **fx-Symbol** rechts aus.

1. Geben Sie im **Suchfeld** Folgendes ein:

```text
content type
```

1. Wählen Sie dann den Parameter **Attachments Content-Type** aus dem Auslöser aus.

1. Wählen Sie anschließend **Hinzufügen**, um den dynamischen Inhalt in den **Id**-Parameter der Aktion einzufügen.

![Bedingung-Aktion konfigurieren](../../../../../translated_images/3.1_10_SetDynamicContentValue_V2.23c3d0438146a5ff0d695077e65a3b1c8b230b54c51ded8a099c6e99a948e9ed.de.png)

1. Lassen Sie uns hier kurz innehalten. Sie haben wahrscheinlich bemerkt, dass die Aktion **Für jedes** automatisch erschienen ist.

Wählen Sie die Aktion **Für jedes** aus. Diese Aktion stellt das Durchlaufen jedes Anhangs in der E-Mail dar, da der Parameter **Attachments Content-Type** aus dem Auslöser mit jedem Anhang verknüpft ist.

Im Hintergrund handelt es sich um ein Array, und deshalb wurde die Aktion **Für jedes** automatisch hinzugefügt, als wir den Parameter **Attachments Content-Type** in der Aktion **Bedingung** ausgewählt haben.

Um mehr darüber zu erfahren, erweitern Sie den folgenden zusätzlichen Lernblock.

??? info "Zusätzliches Lernen: Für jedes-Aktion erscheint automatisch"

🤔 **Warum erscheint "Für jedes" automatisch?**

Wenn Sie einen Parameter (dynamischen Inhalt) auswählen, der eine Liste oder ein Array von Elementen darstellt – zum Beispiel eine Liste von Anhängen, E-Mails oder Zeilen – erkennt Power Automate, dass Sie möglicherweise jedes Element einzeln verarbeiten möchten.

Um Ihnen dabei zu helfen, fügt Power Automate automatisch eine **"Für jedes"**-Schleife um Ihre Aktion hinzu. Dies stellt sicher, dass Ihre Aktion einmal für jedes Element in der Liste ausgeführt wird, anstatt zu versuchen, die gesamte Liste auf einmal zu verarbeiten (was zu Fehlern führen könnte).

🦋 **Beispiel**

- Wenn Sie "Anhänge" aus einer vorherigen Aktion auswählen (was ein Array ist) und versuchen, es in einer Aktion zu verwenden, die eine einzelne Datei erwartet, umschließt Power Automate Ihre Aktion in einer **"Für jedes"**-Schleife.
- Auf diese Weise wird Ihre Aktion für **jeden Anhang** ausgeführt – einzeln.

💡 **Wichtige Punkte**

- **Automatisch:** Die Schleife erscheint automatisch, um Ihnen zu helfen, jedes Element in einer Sammlung zu verarbeiten.
- **Verhindert Fehler:** Ohne die Schleife könnte Ihre Aktion fehlschlagen, da sie möglicherweise nicht mit mehreren Elementen gleichzeitig umgehen kann.
- **Visueller Hinweis:** Es ist eine visuelle Darstellung, dass Ihr Flow die Aktion für jedes Element in der Liste wiederholt.

![Für jedes-Aktion erklärt](../../../../../translated_images/3.1_11_ForEach.82bd7b62b815fdbcd67acff0a633137cf03175940c670361ea8669b0df892927.de.png)

1. Geben Sie im anderen Feld **Wert auswählen** Folgendes ein:

```text
application/pdf
```

Dies stellt sicher, dass für jeden Dateianhang überprüft wird, ob das Dateiformat .PDF ist.

![EqualToValue](../../../../../translated_images/3.1_12_EqualToValue.66c107cb8105c1cd3d166b8a5bf690b8dfc30aa2bd2af83c438a9e44d1b544b0.de.png)

1. Nun konfigurieren wir den **Wahr**-Pfad, um die Datei aus der E-Mail zu extrahieren und sie in die **Lebenslauf**-Dataverse-Tabelle hochzuladen.

Fügen Sie eine neue Aktion im **Wahr**-Pfad hinzu und suchen Sie nach `html to text`. Wählen Sie die Aktion **Html to text** aus.

Um mehr über die Aktion **Html to text** zu erfahren, erweitern Sie den folgenden zusätzlichen Lernblock.

??? info "Zusätzliches Lernen: Html to text-Aktion"

🤔 **Was ist die "HTML to text"-Aktion?**

Die **HTML to text**-Aktion in Power Automate wird verwendet, um HTML-formatierte Inhalte in reinen Text umzuwandeln. Dies ist besonders nützlich, wenn Sie Daten (wie E-Mails, Webinhalte oder API-Antworten) erhalten, die HTML-Tags enthalten, und Sie nur den lesbaren Text ohne Formatierung oder Code extrahieren möchten.

⚙️ **Wie funktioniert es?**

- **Eingabe:** Sie geben eine Zeichenfolge mit HTML-Inhalt an (zum Beispiel den Textkörper einer E-Mail).
- **Ausgabe:** Die Aktion entfernt alle HTML-Tags und gibt nur den reinen Text zurück.

👍🏻 **Wann sollten Sie es verwenden?**

- Wenn Sie lesbaren Text aus E-Mails, Webseiten oder API-Antworten extrahieren möchten, die HTML enthalten.
- Bevor Sie Inhalte an Systeme senden, die keine HTML-Formatierung unterstützen (wie SMS, Teams-Nachrichten oder Datenbanken).
- Um Daten für die weitere Verarbeitung oder Analyse zu bereinigen.

🔭 **Wo finden Sie es?**

- In Power Automate für Agenten-Flows, suchen Sie nach der Aktion `HTML to text`. Sie befindet sich unter dem **Datenoperationen**-Konnektor.

💡 **Wichtige Punkte**

- Es entfernt alle HTML-Tags und lässt nur den Text übrig.
- Es interpretiert oder führt keine Skripte/Styles aus – es entfernt nur die Tags.
- Nützlich zur Datenbereinigung und zur Vorbereitung von Inhalten für reine Textausgaben.

![HTML to text-Aktion hinzufügen](../../../../../translated_images/3.1_13_AddHTMLToTextAction.2aa9468b87dbeb847c083f24da0fe99438b39f826b13a70982ec255a97c2aa80.de.png)

1. Als Nächstes müssen wir eine neue Verbindungsreferenz für die Aktion **Html to text** erstellen, indem wir **Neu hinzufügen** auswählen.

![Neue Verbindungsreferenz hinzufügen](../../../../../translated_images/3.1_14_AddNewConnection.4a23546976b62e7f0e882ac1379950e5bfdcaa702070313cb84a1d22b06a79a7.de.png)

1. Die Aktion kann nun konfiguriert werden. Fügen Sie den **Body**-Parameter aus dem Auslöser hinzu. Wählen Sie im Feld **Inhalt** das **Blitzsymbol** oder **fx-Symbol** rechts aus.

![Dynamischen Inhalt hinzufügen](../../../../../translated_images/3.1_15_AddDynamicContent.0624a9808f55b993efb6d00bf941a88389655e2ab9970ba2b9a1538272fe9643.de.png)

1. Suchen Sie im Tab **Dynamischer Inhalt** nach `body` und wählen Sie den **Body**-Parameter aus, gefolgt von **Hinzufügen**.

![Body-Parameter hinzufügen](../../../../../translated_images/3.1_16_AddDynamicContent.40b7eccc080c20513eed5663062b2a63d40d6482eaf2d42fe4e29cb94797f098.de.png)

1. Wir haben die Konfiguration dieser Aktion abgeschlossen, also verlassen wir die Aktion, indem wir auf die beiden nach links zeigenden Winkelklammern («) klicken, um das Panel zu minimieren.

![Aktionspanel minimieren](../../../../../translated_images/3.1_17_CollapseAction.ca2c346efb58f8240372c3d145fa10ba609cab1c2075d7df1a9388c82fab79f5.de.png)

1. Fügen Sie eine neue Aktion hinzu, indem Sie auf das **+ Symbol** unterhalb der Aktion **Html to text** klicken, wodurch das Panel zum Hinzufügen von Aktionen geladen wird. Wählen Sie den **Microsoft Dataverse**-Konnektor aus.

![Neue Aktion hinzufügen](../../../../../translated_images/3.1_18_AddDataverseAction.5f4be9eb96e22dac239e5545bab5ad9d08b138c2cbcbc700680f33445e132506.de.png)

1. Wählen Sie die Aktion **Neue Zeile hinzufügen** aus.

![Neue Zeile hinzufügen-Aktion](../../../../../translated_images/3.1_19_AddANewRow.48e0a3868821e59ed2a299ccb6a521af27b2430082381d48be38087be62c7c15.de.png)

1. Benennen Sie die Aktion um, indem Sie die **Ellipsen (...)** auswählen, und kopieren und fügen Sie den folgenden Namen ein:

```text
Neuen Lebenslauf hinzufügen
```

Für den Parameter **Tabellenname** suchen Sie nach `res` und wählen die Tabelle **Lebensläufe** aus.

![Aktion umbenennen und Tabellenname konfigurieren](../../../../../translated_images/3.1_20_RenameAndSelectResumesTable.89f8485653abb7fda1d6eb44210951f05a05ed6f7450a51895079dfd8e72c8bf.de.png)

1. Wählen Sie das Feld **Lebenslauftitel** aus und klicken Sie auf das **Blitzsymbol** oder **fx-Symbol** rechts.

![Lebenslauftitel-Parameter konfigurieren](../../../../../translated_images/3.1_21_AddDynamicContent.9ee1f89420d5a4aa56797944166208f6e9b0ec67116625168fbcefb907850224.de.png)

1. Geben Sie im **Funktion-Tab** den folgenden Ausdruck ein, der die Funktion `item()` verwendet:

```text
item()?['name']
```

Um mehr über die Funktion `item()` zu erfahren, erweitern Sie den folgenden zusätzlichen Lernblock.

??? info "Zusätzliches Lernen: `item()`-Funktion"

🤔 **Was ist die `item()`-Funktion?**

- Wenn Sie eine **Für jedes**-Aktion verwenden, durchläuft Power Automate jedes Element in einer Sammlung (Array).
- Sie wird am häufigsten in Aktionen wie **Für jedes**, **Auswählen** oder **Array filtern** verwendet.

⚙️ **Wie funktioniert es?**

- `item()` ist eine Funktion, die das aktuelle Element zurückgibt, das in einer Schleife oder Array-Operation verarbeitet wird.
- Innerhalb dieser Schleife bezieht sich `item()` auf das _aktuelle Element_, das verarbeitet wird.

📌 **Wo wird sie verwendet?**

- **Für jedes:** Um auf Eigenschaften des aktuellen Elements zuzugreifen.
- **Auswählen:** Um jedes Element in einem Array zu transformieren.
- **Array filtern:** Um auf das aktuelle Element zuzugreifen, das ausgewertet wird.

🦋 **Beispiel**

- Ausdruck innerhalb einer Schleife:
       -  `item()?['Email']`
- Dies ruft die Eigenschaft `Email` des aktuellen Elements ab.

💡 **Wichtige Punkte**

- `item()` ist _kontextabhängig_: Es bezieht sich immer auf das aktuelle Element in der Schleife oder Array-Operation, in der Sie sich befinden.
- Wenn Sie verschachtelte Schleifen haben, können Sie `items('LoopName')` verwenden, um auf Elemente in einer bestimmten Schleife zu verweisen.

Wählen Sie **Hinzufügen**, um den Ausdruck in den Parameter **Lebenslauftitel** einzufügen.

![Ausdruck für Lebenslauftitel-Parameter hinzufügen](../../../../../translated_images/3.1_22_ResumeTitleParameter.9e4fa71a5251cb899e7b09bcc3052eeda1e512841f929118eb9e2b1d232ecb07.de.png)

1. Wir müssen noch mehrere Parameter konfigurieren. Wählen Sie **Alle anzeigen** und im Feld **Anschreiben** das **Blitzsymbol** oder **fx-Symbol** rechts aus.

Geben Sie im **Funktion-Tab** den folgenden Ausdruck ein, der denselben Ausdruck wie in der vorherigen [Mission](../02-multi-agent/README.md) verwendet:

```text
if(greater(length(body('Html_to_text')), 2000), substring(body('Html_to_text'), 0, 2000), body('Html_to_text'))
```

Dieser Ausdruck überprüft, ob der _Text_ aus der Aktion **Html to text** länger als 2000 Zeichen ist, und gibt, falls ja, nur die ersten 2000 Zeichen zurück; andernfalls gibt er den vollständigen Text zurück.

![Ausdruck für Anschreiben-Parameter hinzufügen](../../../../../translated_images/3.1_23_CoverLetterParameter.d2b521d6b37d05ac4760c91de2964b6d062585a333af6989d9ac0794a4139463.de.png)

1. Der Ausdruck wird nun dem Feld **Anschreiben** hinzugefügt.

![Ausdruck zum Anschreiben-Parameter hinzugefügt](../../../../../translated_images/3.1_24_ExpressionForCoverLetter.3d18124b10b76bad92db61c529ae395b0bb05f3215e3b783771e76ef7677664e.de.png)

1. Für das Feld **E-Mail-Adresse der Quelle** suchen Sie nach `from` und wählen den Parameter **Von** aus dem Auslöser aus, da dieser den Wert der E-Mail-Adresse enthält.

![Parameter E-Mail-Adresse der Quelle](../../../../../translated_images/3.1_25_FromParameter.1ed1be46711f6705fb807996f6f1e873adc22e285186a851272e0cf3855487ef.de.png)

1. Für das Feld **Hochladedatum** wählen Sie das **Blitzsymbol** oder **fx-Symbol** rechts aus. Geben Sie im **Funktion-Tab** den folgenden Ausdruck ein, der die Funktion `utcNow()` verwendet:

```text
utcNow()
```

Um mehr über die Funktion `utcNow` zu erfahren, erweitern Sie den folgenden zusätzlichen Lernblock.

??? info "Zusätzliches Lernen: `utcNow`-Funktion"

🤔 **Was ist die `utcNow()`-Funktion?**

- Die Funktion `utcNow()` in Power Automate gibt das aktuelle Datum und die Uhrzeit in koordinierter Weltzeit (UTC) im ISO 8601-Format zurück, z. B.: `2025-09-23T04:32:14Z`.

🦋 **Beispiel**

- Ausdruck:
       -  `concat('Bericht erstellt am ', utcNow())`
- Ausgabe ist:
       - Bericht erstellt am `2025-09-23T04:32:14Z`.

💡 **Wichtige Punkte**
- **Keine Argumente (Eingabeparameter) erforderlich:** Gibt immer den aktuellen UTC-Zeitstempel zurück.
   - **Anwendungsfälle**
       - Hinzufügen von Zeitstempeln zu Protokollen oder Dateinamen
       - Vergleich der aktuellen Zeit mit anderen Daten
       - Planung oder zeitbasierte Bedingungen

![Upload-Datum-Parameter](../../../../../translated_images/3.1_26_UploadDateParameter.21b0afc9807bf680c1c432066f1644d4d018cb4988ad0c0788b5186cea285e02.de.png)

1. Wir haben nun die Konfiguration der Aktion **Neue Lebenslaufzeile hinzufügen** abgeschlossen, also verlassen wir das Panel, indem wir es einklappen.

![Aus Aktion-Panel aussteigen](../../../../../translated_images/3.1_27_CollapseAction.c033a86e4d8501b10fc454ba7f9c5e08d71d6d881fc72f58011152e1c5d7a7bb.de.png)

1. Wir fügen eine neue Aktion hinzu, indem wir das **+ Symbol** unter der Aktion **Neue Lebenslaufzeile hinzufügen** auswählen, wodurch das Panel zum Hinzufügen von Aktionen geladen wird. Wählen Sie erneut den **Microsoft Dataverse**-Connector aus.

![Dataverse-Aktion hinzufügen](../../../../../translated_images/3.1_28_AddDataverseAction.1af4dedc95001bfb56b0a642231e9c82b57459b10c68bf6fc177382339a0a221.de.png)

1. Wählen Sie die Aktion **Eine Datei oder ein Bild hochladen** aus.

![Aktion "Eine Datei oder ein Bild hochladen" hinzufügen](../../../../../translated_images/3.1_29_AddUploadAFileOrAnImage.e40ab21b735e37bd1fdb5020b7433d1a2f01d6e387bc43a437e970c6e20ee779.de.png)

1. Benennen Sie die Aktion um, indem Sie die **Ellipsis (...)** auswählen, und kopieren und fügen Sie den folgenden Namen ein:

```text
Upload Resume File
```

![Aktion umbenennen](../../../../../translated_images/3.1_30_RenameAction.c316fdf225f88e5c3ee26649e672472829c3372c804b544a1372b0455937c204.de.png)

1. Wählen Sie als Nächstes das Feld **Content name** aus und klicken Sie auf das **Blitzsymbol** oder **fx-Symbol** rechts.

Im **Funktions-Tab** geben Sie den folgenden Ausdruck ein, der die Funktion `item()` verwendet. Dies ruft die Eigenschaft `name` des aktuellen Elements (der Anhangsdatei) ab.

```text
item()?['name']
```

![Content name-Parameter konfigurieren](../../../../../translated_images/3.1_31_ContentNameParameter.c6606773f1e82dbcea93d7c2f52dff7a2168f9f04d6b865f699f56d62a41d4ec.de.png)

1. Für den Parameter **Table name** suchen Sie nach `res` und wählen die Tabelle **Resumes** aus.

![Table name-Parameter konfigurieren](../../../../../translated_images/3.1_32_SelectResumesTable.6a00bf6d585002219003da47f6e1042dc67cbdb3fbaf7d959253550035e27520.de.png)

1. Wählen Sie als Nächstes das Feld **Row ID** aus und klicken Sie auf das **Blitzsymbol** oder **fx-Symbol** rechts.

Suchen Sie nach `ID` und wählen Sie den Parameter **Resume** aus der Aktion _Neue Zeile hinzufügen_ im Dataverse aus, da dieser den ID-Wert der Zeile enthält, in die die PDF-Datei hochgeladen werden soll.

Wählen Sie **Hinzufügen**.

![Row ID auswählen](../../../../../translated_images/3.1_33_RowIDParameter.9824c6b5ea5edf0ce018140c20431a97c2e750d61bcb787f67da260acb6a3838.de.png)

1. Wählen Sie das Feld **Column name** aus und wählen Sie die Option **Resume PDF**.

![Column name-Parameter konfigurieren](../../../../../translated_images/3.1_34_ColumnNameParameter.ef4f770cbd84cae5c15cfe06d1bdbe028d0c6d54a2286dab30769fa01c948b71.de.png)

1. Wählen Sie das Feld **Content** aus und klicken Sie auf das **Blitzsymbol** oder **fx-Symbol** rechts.

Im **Funktions-Tab** geben Sie den folgenden Ausdruck ein, der die Funktion `item()` verwendet. Dies ruft die Eigenschaft `contentBytes` des aktuellen Elements (der Anhangsdatei) ab. `contentBytes` bezieht sich auf die rohen Binärdaten einer Datei oder eines Anhangs, codiert als Base64-String.

```text
item()?['contentBytes']
```

1. Wir haben die Konfiguration dieser Aktion abgeschlossen, also verlassen wir die Aktion, indem wir die beiden nach links zeigenden Winkelklammern («) auswählen, um das Panel einzuklappen.

![Aktion-Panel einklappen](../../../../../translated_images/3.1_36_CollapseAction.1813a7219f0f37b87f80c2cd9f5a9626c3a320858d08a0e62cf14736f97db4c6.de.png)

1. Wählen Sie als Nächstes die Aktion **Sendet eine Eingabeaufforderung an den angegebenen Copilot zur Verarbeitung** aus und ziehen Sie diese Aktion unter die Aktion **Upload Resume File** im _True_-Pfad der Bedingung.

![Aktion im True-Pfad ziehen und ablegen](../../../../../translated_images/3.1_37_DragAndDropAction.57dc2e9f9d25ed892a4fc072a72c55eca6c38e313ab48fb9db37e9371995440f.de.png)

1. Wählen Sie die Aktion **Sendet eine Eingabeaufforderung an den angegebenen Copilot zur Verarbeitung** aus, um sie zu konfigurieren.

![Aktion auswählen](../../../../../translated_images/3.1_38_SelectAction.d125bdf661f66b6397542c75efbc6a78b8c4862e03dce4002776c251f1c48382.de.png)

1. Im Feld **Body/message** wählen Sie den gesamten Feldinhalt aus und löschen Sie ihn.

![Body-Parameter löschen](../../../../../translated_images/3.1_39_ClearBodyParameter.6a345b2e5dbe5510184d7bae7cd406b8cec72c714f34bb40e30741e445a491c0.de.png)

1. Kopieren und fügen Sie den folgenden Text in das Feld **Body/message** ein und markieren Sie den Platzhalter `RESUME ID PLACEHOLDER`.

```text
Send [ResumeId (text)] = "RESUME ID PLACEHOLDER" and [ResumeTitle (text_1)] = "RESUME TITLE PLACEHOLDER" and [ResumeNumber (text_2)]= "RESUME NUMBER PLACEHOLDER" to the Tool "Notify Teams Applicant channel" in the child agent "Application Intake Agent"
```

![Resume ID Placeholder-Text ersetzen](../../../../../translated_images/3.1_40_ReplaceResumeIDPlaceholder.eb61590503cb37d89121aaed6d979a4272aa30c87700206e04db8005e60b294f.de.png)

1. Wählen Sie das **Blitzsymbol** oder **fx-Symbol** rechts aus.

Suchen Sie nach `resume` und wählen Sie den Parameter **Resume** aus der Aktion _Neue Zeile hinzufügen_ im Dataverse aus, da dieser den `ID`-Wert der erstellten Lebenslaufzeile enthält.

Wählen Sie **Hinzufügen**.

![Resume-Parameter auswählen](../../../../../translated_images/3.1_41_SelectResumeParameter.61c4457c33e5d1b596169857535bfc560ef677264f8798e9148ceac999eeaeb9.de.png)

1. Markieren Sie den Platzhalter `RESUME TITLE PLACEHOLDER`. Wählen Sie das **Blitzsymbol** oder **fx-Symbol** rechts aus.

Suchen Sie nach `title` und wählen Sie den Parameter **Resume Title** aus der Aktion _Neue Zeile hinzufügen_ im Dataverse aus, da dieser den Wert `resume title` der erstellten Lebenslaufzeile enthält.

Wählen Sie **Hinzufügen**.

![Resume-Parameter auswählen](../../../../../translated_images/3.1_42_SelectResumeTitleParameter.6c887607128f928da15c4cf6c22254d0473bc22514aa883462fd812bf14245e0.de.png)

1. Markieren Sie den Platzhalter `RESUME NUMBER PLACEHOLDER`. Wählen Sie das **Blitzsymbol** oder **fx-Symbol** rechts aus.

Suchen Sie nach `resume number` und wählen Sie den Parameter **Resume Number** aus der Aktion _Neue Zeile hinzufügen_ im Dataverse aus, da dieser den Wert `Resume Number` der erstellten Lebenslaufzeile enthält.

Wählen Sie **Hinzufügen**.

![Resume-Parameter auswählen](../../../../../translated_images/3.1_43_SelectResumeNumberParameter.ca19197525250483a7e94598b621072b47ebdf5deb939e1387c979e807ddc554.de.png)

1. Wir haben die Konfiguration dieser Aktion und unseres Agentenflusses abgeschlossen 🙌🏻 Sie machen das großartig! Speichern Sie nun den Ereignisauslöser-Flow, indem Sie **Entwurf speichern** auswählen.

![Entwurf speichern](../../../../../translated_images/3.1_44_SaveDraft.0c9eee19f0c7cb8483b8d31bc17e1dd54075352d22f0f44603a9d52b52429188.de.png)

1. Jetzt müssen wir die Details des Agentenflusses bearbeiten. Wählen Sie **Zurück**.

![Zurück auswählen](../../../../../translated_images/3.1_45_Back.3f85535977bdb02231a0fdb8465e0e8b7d86fd5342ff933e4ae8bf9610279989.de.png)

1. Wählen Sie **Bearbeiten** im Abschnitt **Details** und aktualisieren Sie den **Plan** auf die Option **Copilot Studio**.

Wählen Sie **Speichern**.

![Copilot Studio-Plan ändern](../../../../../translated_images/3.1_46_ChangePlanDetails.6ab15f1f8bd9ebe55b2c1576c3495f47d1a29d7435e343d4c590e46647601269.de.png)

1. Ein Modal wird angezeigt, um Sie zu bitten, den Wechsel zum Copilot Studio-Plan zu bestätigen. Wählen Sie **Bestätigen**.

![Copilot Studio-Planänderung bestätigen](../../../../../translated_images/3.1_47_ConfirmCopilotStudioPlan.bc6ab52e7c982127154b0fb743f85ff9cc05dcab944dffc9485bdbcbe0811397.de.png)

1. Der Plan wurde nun auf **Copilot Studio** aktualisiert. Wählen Sie **Bearbeiten**, da wir den Ereignisauslöser-Flow für unseren Agenten veröffentlichen müssen.

![Flow bearbeiten](../../../../../translated_images/3.1_48_PlanChangedAndEdit.3c3207766a648817f7a7878c3a6f684cf41cdceea4dca8f6fc43b7315c8dd648.de.png)

1. Wählen Sie **Veröffentlichen**.

![Veröffentlichen](../../../../../translated_images/3.1_49_Publish.38ff814cfce6b3be1076cafb0c28e4e344f75d8cd4117fabed13ad361d4fde3f.de.png)

Hurra! Der Ereignisauslöser-Flow ist jetzt veröffentlicht 😃

![Veröffentlicht](../../../../../translated_images/3.1_50_Published.449e7867f7b027ae8a524c749357a1b931955062828bacc3b5a51e979755ef4a.de.png)

Lassen Sie uns einen neuen Agentenfluss erstellen, der vom untergeordneten **Intake Application Agent** aufgerufen wird.

### Lab 3.2 - Benachrichtigen eines Teams-Kanals mit einer adaptiven Karte

Wir werden nun einen neuen Agentenfluss für den untergeordneten **Intake Application Agent** erstellen, der die vom Ereignisauslöser übergebenen Werte verwendet, um eine adaptive Karte in einem Teams-Kanal zu posten. Diese adaptive Karte wird das HR-Rekrutierungsteam über die automatisch hochgeladene PDF-Datei informieren, damit sie diese überprüfen können.

Legen wir los!

1. Wählen Sie im **Hiring Agent** die Registerkarte **Agents** aus und wählen Sie den **Application Intake Agent**.

![Application Intake Agent auswählen](../../../../../translated_images/3.2_01_SelectApplicationIntakeAgent.0e9dd3da5c52e9f59ab3a4545c01897ad830853b650ec42f7f8424aa530e0409.de.png)

1. Scrollen Sie zu **Tools** und wählen Sie **+ Hinzufügen**.

![Tool hinzufügen](../../../../../translated_images/3.2_02_AddNewTool.7c62275fd9f28cdc1923ea056a148171048dc568ff78056958fd54862133f90e.de.png)

1. Das Modal **Tool hinzufügen** wird angezeigt. Wählen Sie **+ Neues Tool**.

![Neues Tool auswählen](../../../../../translated_images/3.2_03_SelectNewTool.215e7637a9f065a3799a1ecf248eed1e859f201d2dfdfab71a7c1dc18e454e2d.de.png)

1. Wählen Sie **Agentenfluss**.

![Agentenfluss auswählen](../../../../../translated_images/3.2_04_SelectAgentFlow.7bc12b3435efccc0cfee8f563640562f87d173b436b3313a3d1256fe35024907.de.png)

1. Der **Agentenfluss-Designer** wird geladen. Wählen Sie im Trigger **Wenn ein Agent den Flow aufruft** **+ Eingabe hinzufügen**.

![Eingabe hinzufügen auswählen](../../../../../translated_images/3.2_05_SelectAddAnInput.f3dc8465f490929baccb0f2dc72b50629b1435ff8a3861f7974885d1d36cdeb1.de.png)

1. Wählen Sie **Text** als Typ der Benutzereingabe.

![Text auswählen](../../../../../translated_images/3.2_06_SelectText.93585b4af8c4e277c11c2052b638e249508a24a075987026a6ec346e75184217.de.png)

1. Kopieren und fügen Sie den folgenden Text in das Eingabefeld für den Parametername ein.

```text
ResumeId
```

![ResumeId-Eingabe](../../../../../translated_images/3.2_07_ResumeIdInput.a9e127e343856d6c6d45dd1251cade0503bad9484bc563c02155390951b1faa5.de.png)

1. Wiederholen Sie die gleichen Schritte, um eine zweite Texteingabe hinzuzufügen. Kopieren und fügen Sie den folgenden Text für den Parametername ein.

```text
ResumeTitle
```

![ResumeTitle-Eingabe](../../../../../translated_images/3.2_08_ResumeTitleInput.c71ecd364a974a93abb0de876807c2e9bde59fcea6df317babeb20764b636f26.de.png)

1. Wiederholen Sie die gleichen Schritte, um eine dritte Texteingabe hinzuzufügen. Kopieren und fügen Sie den folgenden Text für den Parametername ein.

```text
ResumeNumber
```

![ResumeNumber-Eingabe](../../../../../translated_images/3.2_09_ResumeNumberInput.a6c060000354deab51dffef3c1ad9f13378cfeabdafdb7a33c2a591bfd044709.de.png)

1. Erinnern Sie sich daran, wie wir in [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request) eine adaptive Karte innerhalb eines Themas für unseren Agenten hinzugefügt haben? Diesmal fügen wir eine adaptive Karte in einem Agentenfluss hinzu. Wir werden nun eine weitere Aktion zu unserem Agentenfluss hinzufügen, die eine adaptive Karte in einem Teams-Kanal postet.

Wählen Sie das **+ Symbol** unterhalb des Triggers.

![Neue Aktion hinzufügen](../../../../../translated_images/3.2_10_AddNewAction.4474a2150991cac246d5e4091a74ba91e76e1c5bafa34ad985a8567c09dcdd35.de.png)

1. Wählen Sie die Aktion **Karte in einem Chat oder Kanal posten**.

![Aktion "Karte in einem Chat oder Kanal posten" auswählen](../../../../../translated_images/3.2_11_SelectPostCardInAChatOrChannel.97de43ed1c883b14d0150ae65efaa90f53f0815bdf57ec10e0e22cbd3e22ce06.de.png)

1. Eine Verbindungsreferenz zu Microsoft Teams muss mit Ihrem angemeldeten Benutzerkonto erstellt werden. Wählen Sie **Anmelden**.

![Anmelden auswählen](../../../../../translated_images/3.2_12_SignInToCreateConnectionReference.2297f8b702d71508f1b21a3ed4046df4846dc03b13932a20e5c445403559ac1f.de.png)

1. Wählen Sie Ihr Benutzerkonto aus und klicken Sie auf **Zugriff erlauben**.

![Zugriff erlauben auswählen](../../../../../translated_images/3.2_13_AllowAccess.31cbf82606d75231108bd4f2bfeafffda3cd7e7e760cd46004c2705afe050aaf.de.png)

1. Für die folgenden Eingabeparameter:

| Parameter | Wie einstellen | Details |
|----------|----------------|---------|
| **Posten als** | Dropdown | Wählen Sie die Option `Flow bot` |
| **Posten in** | Dropdown | Wählen Sie die Option `Channel` |
| **Team** | Dropdown | Wählen Sie ein Team aus, das in Ihrer Umgebung verfügbar ist und auf das Sie für diese Übung Zugriff haben |
| **Kanal** | Dropdown | Wählen Sie einen Kanal aus, der in Ihrer Umgebung verfügbar ist und auf den Sie für diese Übung Zugriff haben |

![Eingabeparameter konfigurieren](../../../../../translated_images/3.2_14_ConfigureParameters.8c21924f90db3acaa33d4e35ef43c70556ba4cc37207a195ac654e55a43400a6.de.png)

1. Als Nächstes konfigurieren wir das Feld **Adaptive Card**. Wählen Sie das Feld **Adaptive Card** aus.

![Adaptive Card-Feld auswählen](../../../../../translated_images/3.2_15_SelectAdaptiveCardParameter.65323056be6174d2eed7422650aaa70fc16396148f90b8af1801110d7a30d66f.de.png)

1. Öffnen Sie die [Resume Table Updated JSON-Datei](../../../../../docs/operative-preview/03-automate-triggers/assets/3.2_ResumeTableUpdated.json), kopieren Sie den gesamten Inhalt und fügen Sie ihn in das Feld Adaptive Card ein.

![JSON kopieren und einfügen](../../../../../translated_images/3.2_16_JSON.f022097fb7139bd12514abb8fdc518309ea940f005cc94a11ba159359cde784b.de.png)

1. Ähnlich wie wir es in [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request) gemacht haben, werden wir bestehende Werte im JSON-Payload durch tatsächliche Werte oder dynamische Inhalte ersetzen.

Zuerst aktualisieren wir die URL für die Eigenschaft `url` innerhalb der Eigenschaft `selectAction`. Diese URL wird durch die URL der Resumes-Systemansicht in der **Hiring Hub**-Modellgesteuerten App ersetzt. Dadurch kann der Recruiter die Aktion auswählen und zur Resumes-Systemansicht in der modellgesteuerten App weitergeleitet werden.

Markieren Sie den aktuellen URL-Wert und löschen Sie ihn.

![URL-Wert auswählen](../../../../../translated_images/3.2_17_SystemViewURL.5e51fd894ac916f436107c7b668d66ca87ca8bdfd7affeb7dae1b10fa8ff5afb.de.png)

1. Navigieren Sie in der **Hiring Hub**-Modellgesteuerten App zur **Resumes**-Systemansicht über das Menü auf der linken Seite und kopieren Sie die URL. Navigieren Sie dann zurück zum Agentenfluss und fügen Sie die kopierte URL in die Eigenschaft **url** innerhalb der Eigenschaft `selectAction` ein.

![Resumes-Systemansicht-URL kopieren](../../../../../translated_images/3.2_18_CopyResumesSystemViewURL.14d9f55c7db15977a12dfe2a5df95aab5cf241e646b08f9838cff31aaa27a381.de.png)
1. Sie sollten Folgendes sehen, wobei die in Gelb hervorgehobenen Details Ihre Umgebungsinformationen der **Hiring Hub** modellgesteuerten App sind.

     | Parameter | Wert | Erklärung |
     |----------|------------|---------|
     | **Organization URI** | GUID | Die URL der Dataverse/Dynamics 365-Umgebungsorganisation |
     | **appid** | GUID | Um eine spezifische modellgesteuerte App zu öffnen, wird der Abfrageparameter entweder appid oder appname verwendet. In diesem Fall wird appid verwendet |
     | **viewid** | GUID | Der Abfrageparameter, der die ID der Ansicht ist |

       ![URL einfügen](../../../../../translated_images/3.2_19_PasteURL.41f3fdd66190c8ba478857f91c90eb05ee9621243bda7b7ad26eb5802b8e970d.de.png)

1. Als Nächstes fügen wir dynamische Inhaltswerte für mehrere Eigenschaften hinzu. Beginnen wir mit dem Text, der die Referenznummer des Lebenslaufs anzeigt, die durch den Ereignisauslöser autonom erstellt wurde.

      Wählen Sie das **Panel**-Symbol aus, um das Aktionspanel zu laden.

       ![Panel-Symbol auswählen](../../../../../translated_images/3.2_20_SelectPannelIcon.786a4147ba12e0e62648c66f14fb2b9a7f89b27c3a610f43420e31cb0c9fb5da.de.png)

1. Scrollen Sie nach unten zu der Zeile, in der Sie die `text`-Eigenschaft für `RESUME NUMBER PLACEHOLDER` sehen. Markieren Sie den Platzhalterwert und löschen Sie ihn.

       ![Platzhalter löschen](../../../../../translated_images/3.2_21_DeleteResumeNumberPlaceholder.6ffd7a5a073f9d9a11e0e119c87e827243de237f70ebc3ab37dfdd36de615130.de.png)

1. Klicken Sie zwischen die Anführungszeichen und wählen Sie das **Blitzsymbol** oder **fx-Symbol** rechts aus.

      Wählen Sie im Tab **Dynamischer Inhalt** den Parameter **ResumeNumber** aus und klicken Sie auf **Hinzufügen**.

       ![ResumeNumber-Parameter hinzufügen](../../../../../translated_images/3.2_22_SelectResumeNumberParameter.de5a6eecb3ee092441d841ad137dfecd9f8d503a370ff60eb5ccdc0267e37df0.de.png)

1. Der Parameter **ResumeNumber** wird nun als dynamischer Inhalt zur `text`-Eigenschaft hinzugefügt.

       ![ResumeNumber dynamischer Inhalt](../../../../../translated_images/3.2_23_ResumeNumberDynamicContent.129a566ac6e9d448b268b828da5766a7056779ac167f65b498e2ca21d703b7f0.de.png)

1. Wiederholen Sie die gleichen Schritte für den `RESUME NAME PLACEHOLDER`. Scrollen Sie nach unten zu der Zeile, in der Sie die `text`-Eigenschaft für `RESUME NAME PLACEHOLDER` sehen. Markieren Sie den Platzhalterwert und löschen Sie ihn.

       ![Resume Name Placeholder](../../../../../translated_images/3.2_24_ResumeNamePlaceholder.6c879b99ae375892f7e0a511bfedd5fa9e60a8dea71ea2a44c2a7a04c8389f43.de.png)

1. Klicken Sie zwischen die Anführungszeichen und wählen Sie das **Blitzsymbol** oder **fx-Symbol** rechts aus.

      Wählen Sie im Tab **Dynamischer Inhalt** den Parameter **ResumeTitle** aus und klicken Sie auf **Hinzufügen**.

       ![ResumeTitle-Parameter hinzufügen](../../../../../translated_images/3.2_25_SelectResumeTitleParameter.18c769bbd2c60e362a56f6055e151ed6287903cb625addcdfbb43044828d7378.de.png)

1. Der Parameter **ResumeTitle** wird nun als dynamischer Inhalt zur `text`-Eigenschaft hinzugefügt.

       ![ResumeTitle dynamischer Inhalt](../../../../../translated_images/3.2_26_ResumeTitleDynamicContent.7219e078f71fc0d5d4a6bb228ba2d53f0898ba26a27c5eb859df90d12dd52c70.de.png)

1. Wiederholen Sie die gleichen Schritte für den Wert **Fälligkeitsdatum**, der angibt, wann ein Recruiter den Lebenslauf überprüfen sollte. Scrollen Sie nach unten zu der Zeile, in der Sie die `text`-Eigenschaft für `May 21, 2023` sehen.

       ![Zugriff erlauben auswählen](../../../../../translated_images/3.2_27_DueDatePlaceholder.17c6003cc9ec1141b0aeb5cde203098a7f5534fa11f01a3cbffb66206ed1633a.de.png)

1. Löschen Sie diesen Platzhalterwert für das Datum und klicken Sie zwischen die Anführungszeichen.

       ![Löschen](../../../../../translated_images/3.2_28_DeleteDueDatePlaceholder.9a3df55fb3c9ed72e61e0a60dc3344335b0444ff537c9fb51036b0442a85d268.de.png)

1. Wählen Sie das **Blitzsymbol** oder **fx-Symbol** rechts aus und geben Sie im Tab **Funktion** den folgenden Ausdruck ein und klicken Sie auf **Hinzufügen**.

       ```text
       addDays(utcNow(), 3, 'MMM dd, yyyy')
       ```

      Dieser Ausdruck verwendet zwei Funktionen.

     | Funktion | Erklärung |
     |----------|------------|
     | **addDays** | Fügt einem angegebenen Datum eine bestimmte Anzahl von Tagen hinzu und gibt das resultierende Datum im String-Format zurück |
     | **utcNow** | Gibt das aktuelle Datum und die Uhrzeit im UTC-Format als String zurück. |

      Für den Wert utcNow formatieren wir das Datum als Monat und Tag, gefolgt vom Jahr.

       ![Ausdruck Fälligkeitsdatum](../../../../../translated_images/3.2_29_01_ExpressionDueDate.a4fa31985f5500971f2fc6da0e81e008af12be19d54a30a240764b74a4b2dbcb.de.png)

      Der Ausdruck wird nun zur `text`-Eigenschaft hinzugefügt.

       ![Ausdruck Fälligkeitsdatum](../../../../../translated_images/3.2_29_02_ExpressionDueDate.6159288450731c7b09628af70f0c9a6d92590ca7c7e39e8a524ae8af7c511f2c.de.png)

1. Zum Schluss aktualisieren wir die URL für die `url`-Eigenschaft innerhalb der `actions`-Array-Eigenschaft am Ende der JSON-Nutzlast. Diese aktuelle Platzhalter-URL wird durch die URL der Lebenslaufzeile in der **Hiring Hub** modellgesteuerten App ersetzt. Dadurch kann der Recruiter die Aktion `Action.OpenURL` der adaptiven Karte auswählen und wird zur Lebenslaufzeile in der modellgesteuerten App weitergeleitet.

       ![Platzhalter-URL für Lebenslaufansicht löschen](../../../../../translated_images/3.2_30_ViewResumeURLPlaceholder.f27af6cadfb54fb977f0b46ea3ec42ee0638d38ebc5d294eff5da52abf9d4a1b.de.png)

1. Öffnen Sie in der **Hiring Hub** modellgesteuerten App eine Zeile in der Systemansicht **Resumes** über das Menü auf der linken Seite. Die Lebenslaufzeile wird als Formular in der modellgesteuerten App geladen.

      Kopieren Sie die URL für die Lebenslaufzeile.

    ??? info "Wie Sie zur **Hiring Hub** modellgesteuerten App zurückkehren, falls Sie diese verlassen/geschlossen haben"

        1. Gehen Sie zu [https://make.powerapps.com](https://make.powerapps.com) und stellen Sie sicher, dass Sie sich in Ihrer Entwicklerumgebung befinden, die Sie für diese Lab-Übungen verwenden, andernfalls wechseln Sie zu dieser.
        
        ![Zu make.powerapps.com navigieren](../../../../../translated_images/3.2_31_Note_01_BrowseToURL.a13dfc8b05a0b34f3a4c853f3d3e418864176b52b1b40c069da7712af5562aa5.de.png)

        1. Wählen Sie **Apps** im Menü auf der linken Seite und klicken Sie bei der **Hiring Hub** modellgesteuerten App auf das **Play**-Symbol, um sie in Ihrem Browser zu laden.
        
        ![Hiring Hub modellgesteuerte App auswählen](../../../../../translated_images/3.2_31_Note_02_HiringHubApp.a09b6ea28b4fea8932809cb847cb0ea3d8faeb7b7b5604852de1f46ab1e9741b.de.png)

       ![URL der Lebenslaufzeile kopieren](../../../../../translated_images/3.2_31_CopyResumeURL.f6156f8792526129c2613922f0137221b2944fa8ffe7c04766d710521ad8765b.de.png)

1. Navigieren Sie zurück zum Agentenfluss, markieren Sie den aktuellen Platzhalterwert der URL und löschen Sie ihn.

       ![Platzhalter-URL der Lebenslaufzeile löschen](../../../../../translated_images/3.2_32_SelectResumeURLPlaceHolder.8db783de292428eaa8937242eba4a54ebb1df7bf4c1bc9391b016ee545fb2b9f.de.png)

1. Fügen Sie die kopierte URL in die **url**-Eigenschaft innerhalb der `url`-Eigenschaft ein.

       ![Kopierte URL der Lebenslaufzeile einfügen](../../../../../translated_images/3.2_33_PasteResumeRowURL.d7ba92493d7597b89f75e2f17f76846ac17a9ba89c2e36729dc6b5dc1599b047.de.png)

1. Sie sollten Folgendes sehen. Löschen Sie den `GUID`-ID-Wert am Ende. Wir ersetzen diesen durch dynamischen Inhalt - den Parameter **ResumeId**.

       ![Platzhalter-URL für Lebenslaufansicht löschen](../../../../../translated_images/3.2_34_DeleteViewResumePlaceholderURL.7b26209eaeef6dc0a21b16140d05fe2f0e38de5f714575edd24d21dded58102a.de.png)

1. Wählen Sie das **Blitzsymbol** oder **fx-Symbol** rechts aus.

      Wählen Sie im Tab **Dynamischer Inhalt** den Parameter **ResumeId** aus und klicken Sie auf **Hinzufügen**.

       ![ResumeId-Parameter](../../../../../translated_images/3.2_35_ResumeIdParameter.3dc710a7f5216944387f4d5f82c0a372eee23ee5259dec04147ad00e9c454d7d.de.png)

1. Der **ResumeId** wird als dynamischer Inhalt hinzugefügt. Die in Gelb hervorgehobenen Details sind Ihre Umgebungsinformationen der **Hiring Hub** modellgesteuerten App.

     | Parameter | Wert | Erklärung |
     |----------|------------|---------|
     | **Organization URI** | GUID | Die URL der Dataverse/Dynamics 365-Umgebungsorganisation |
     | **appid** | GUID | Um eine spezifische modellgesteuerte App zu öffnen, wird der Abfrageparameter entweder appid oder appname verwendet. In diesem Fall wird appid verwendet |
     | **id** | GUID | Der Abfrageparameter, der die ID der Lebenslaufzeile ist |

       ![ResumeId dynamischer Inhalt](../../../../../translated_images/3.2_36_ResumeIdDynamicContent.a1a40dfb4a83b60f1b75b02160890e3fec41c2c7df8adf32e02d652a57c1ee87.de.png)

1. Wir haben die Konfiguration der Aktion **Post card in a chat or channel** abgeschlossen 👏🏻 Verlassen Sie das Aktionskonfigurationspanel, indem Sie das **x**-Symbol auswählen.

       ![Panel schließen](../../../../../translated_images/3.2_37_CloseActionPanel.23d07107381411aa9494ef36fb240682a0727a63e6f15082074b34a1defd517b.de.png)

1. Schließlich konfigurieren wir die letzte Aktion, **Respond to the agent**, indem wir eine Textnachricht zurück an den Agenten senden, um die Verarbeitung zu beenden.

      Wählen Sie in der Aktion **Respond to the agent** **+Add an output** aus.

       ![Ausgabe hinzufügen auswählen](../../../../../translated_images/3.2_38_AddAnOutput.de1a0e49033cb077eb5d2c226152bbb06dc12fb95d0496c69d469eecdb46c0ae.de.png)

1. Wählen Sie **Text** als Ausgabetyp aus.

       ![Text als Ausgabetyp auswählen](../../../../../translated_images/3.2_39_SelectText.4e1e82c35fe9d1b569b668092d405aa9b0c81fbe67e7de68a660f2083ed3afdd.de.png)

1. Geben Sie Folgendes als Namen der Ausgabe ein.

       ![Ende der Konversation Ausgabe](../../../../../translated_images/3.2_40_EndConversationOutput.e392b58847d8439443c89459fccbbd88d4ea5e5fa562749b77407c46b9ff4ca4.de.png)

1. Geben Sie Folgendes als Wert für die Ausgabe ein.

       ```text
       Finished
       ```

       ![Ende der Konversation Ausgabewert](../../../../../translated_images/3.2_41_EndConversationOutputValue.2cb836900ee9fca802926676e613b077938f1106cc16e77ddd77af64ce92dcc8.de.png)

1. Wir haben die Konfiguration des Agentenflusses abgeschlossen. Wählen Sie **Save draft**, um den Agentenfluss zu speichern. Eine Bestätigungsmeldung erscheint nach dem Speichern.

       ![Entwurf speichern](../../../../../translated_images/3.2_42_SaveDraft.1bb26eec40faf5d2c244d93f869344915e90423623e07e02cac2c1f8c73d1a4a.de.png)

1. Bevor der Agentenfluss veröffentlicht wird, müssen die Details des Agentenflusses aktualisiert werden. Wählen Sie den Tab **Overview** und klicken Sie auf **Edit**.

      Geben Sie im Feld für den Flussnamen Folgendes ein.

       ```text
       Notify Teams Applicant channel
       ```      

      Danach wählen Sie das **Aktualisieren**-Symbol, um die Beschreibung des Agentenflusses mithilfe von KI zu aktualisieren.

      Wählen Sie anschließend **Save**, um die aktualisierten Details des Agentenflusses zu speichern.

       ![Details bearbeiten und speichern](../../../../../translated_images/3.2_43_EditDetails.f0c9b53a9c1b29e4aa3c34774680559ae9173f77b3a37817bab2296b77ffcca7.de.png)

1. Navigieren Sie zurück zum Tab **Designer** und wählen Sie **Publish**, um den Agentenfluss zu veröffentlichen. Eine Bestätigungsmeldung erscheint nach dem Speichern.

       ![Agentenfluss veröffentlichen](../../../../../translated_images/3.2_44_PublishAgentFlow.3014e6de5e53aa5fc2021bf6e11b901c4990b4fbb4d4cee33cc6d5b6cc641ed8.de.png)

1. Der Agentenfluss muss nun als Tool im **Application Intake Agent** hinzugefügt werden. Navigieren Sie zurück zum **Hiring Agent** und wählen Sie den Tab **Agents**, dann wählen Sie den **Application Intake Agent**.

       ![Application Intake Agent auswählen](../../../../../translated_images/3.2_45_ApplicationIntakeAgent.0446b1762d0f499e880e7984f59669639193566f72539cd4fba5c62cd1fe8726.de.png)

1. Im Abschnitt **Details** des Agenten aktualisieren wir das Feld **Description**. Kopieren Sie Folgendes und fügen Sie es am Ende des Beschreibungstextes ein.

       ```text
       und benachrichtigt auch den Teams Applicant-Kanal
       ```

       ![Agentenbeschreibung aktualisieren](../../../../../translated_images/3.2_46_UpdateAgentDescription.56344699cd3cc5e417e8f95362ed2288d0c0391f33bd98872e7e008a545175f0.de.png)

1. Als Nächstes fügen wir den Agentenfluss als Tool hinzu. Scrollen Sie nach unten und wählen Sie **+ Add**.

       ![Hinzufügen auswählen](../../../../../translated_images/3.2_47_AddTools.c7557e272bd731129dffe9edebba3b04170d27806aaa14fffbe3d66b7b61808b.de.png)

1. Wählen Sie den zuvor erstellten Agentenfluss **Notify Teams Applicant Channel** aus.

       ![Agentenfluss auswählen](../../../../../translated_images/3.2_48_NotifyTeamsApplicantChannelAgentFlow.5985f570786edef4eac93455f7a07978c0daf54e1371660bfd56a4c16b6aaf79.de.png)

1. Wählen Sie anschließend **Add and configure**.

       ![Hinzufügen und konfigurieren auswählen](../../../../../translated_images/3.2_49_AddAndConfigure.c2d6cccfa9e4bb23ff58b615ad16d0b3ade4ef867b73b9196a45df6990d8072f.de.png)

1. Im Abschnitt **Inputs** des Agentenflusses sind die drei Eingaben sichtbar, die wir zuvor im Agentenfluss konfiguriert haben. Standardmäßig ist die Konfiguration **Fill using** auf **Dynamically fill with AI** eingestellt. Wir behalten diese Einstellung bei, da die Eingabeaufforderung des Ereignisauslösers (in der letzten Aktion, **Sends a prompt to the specified copilot for processing** - dies sind die Schritte 38-44 von **Lab 3.1 - Automate uploading resumes to Dataverse received by email**) die Parameterwerte enthält, die von der KI extrahiert werden.

       ![Tool-Agentenfluss-Eingaben](../../../../../translated_images/3.2_50_Inputs.9fbb57b83b533d5a60f957505bb1e5430886ec9e6c70c10ed1c641d6b33fcc21.de.png)

1. Jetzt, da das Tool dem **Application Intake Agent** hinzugefügt wurde, müssen die Anweisungen des Agenten aktualisiert werden. Wählen Sie das **Zurück-Pfeil**-Symbol, um zur Liste der Agenten zurückzukehren.

       ![Zurück-Pfeil-Symbol auswählen](../../../../../translated_images/3.2_51_SelectBack.6a9a55176d931895777822d3f9276d5d12ffe379a8860dd521e1c895e8188bba.de.png)

1. Wählen Sie den **Application Intake Agent** im Tab **Agents** des **Hiring Agent** aus.

       ![Application Intake Agent auswählen](../../../../../translated_images/3.2_52_SelectApplicationIntakeAgent.039140313422e833389fd134b3a70a0eed11ba175ede5dbdc4abcce6004c7d2d.de.png)

1. Geben Sie im Feld **Instructions** eine neue Zeile nach den Anweisungen `2.Post-Upload` ein. Kopieren und fügen Sie die folgenden Anweisungen ein.

       ```text
       Prozess für Lebenslauf-Upload per E-Mail
       1. Wenn Sie eine Nachricht erhalten, **Senden Sie [ResumeId (text)] = "1680265f-5793-f011-b41b-7c1e525be9f7" und [ResumeTitle (text_1)] = "TAYLOR TESTPERSON (FIKTIV).pdf" und [ResumeNumber (text_2)]= "R01026" an das Tool "Notify Teams Applicant channel"** im Unteragenten "Application Intake Agent", rufen Sie [AGENT FLOW PLACEHOLDER] auf.
       ```

       ![Anweisungen des Application Intake Agent aktualisieren](../../../../../translated_images/3.2_53_PasteCopiedInstructions.f24ed715e907cf023449a54b894354ca1252b198e9be694eec2875f7f647f9c2.de.png)

1. Markieren Sie den Text `[AGENT FLOW PLACEHOLDER`.

       ![Platzhalter markieren](../../../../../translated_images/3.2_54_HighlightPlaceholder.6c3fcac3c8f4fb6e5cce2dbd6b6548b84652d009e20fa4a01183a9a1b42b24fb.de.png)

1. Geben Sie das Zeichen für den Schrägstrich `/` ein und wählen Sie das Tool **Notify Teams Applicant Channel** aus.

       ![Tool Notify Teams Applicant Channel auswählen](../../../../../translated_images/3.2_55_NotifyTeamsApplicatnChannelTool.2e3dd1e9ee9b2dfe10e1f2feb7e3b74b08856ce3afb16dafae1f2c4b73da904f.de.png)
1. Der Agentenfluss wird nun gemäß den Anweisungen vom **Application Intake Agent** ausgelöst, nachdem die letzte Aktion (**Sendet eine Eingabeaufforderung an den angegebenen Copilot zur Verarbeitung**) im Ereignisauslöser die Eingabeaufforderung mit den Parameterwerten zurück an den Agenten sendet.

      Wählen Sie **Speichern**, um die aktualisierten Anweisungen für den **Application Intake Agent** zu speichern.

       ![Speichern auswählen](../../../../../translated_images/3.2_56_Save.6abb0131f96b20d3753b5990313eaea6a237bef2bf0e2103a2ee5ba570fd7c04.de.png)

1. Die Anweisungen werden nun aktualisiert, sobald der Agent gespeichert wurde.

       ![Anweisungen aktualisiert](../../../../../translated_images/3.2_57_InstructionsUpdated.5bfbfe2ca1da16284358a9917246bd8676cd6c095839ed1c69361d992cacd2b3.de.png)

1. Jetzt müssen wir den **Hiring Agent** **veröffentlichen**. Wählen Sie **Veröffentlichen** oben rechts aus, und wählen Sie im _Modal zum Veröffentlichen dieses Agenten_ **Veröffentlichen**.

       ![Hiring Agent veröffentlichen](../../../../../translated_images/3.2_58_PublishAgent.e7ec81c81b735de0cd11516aa944c759ea510e2b0bc9acf9f00d42d788896991.de.png)

1. Nach der Veröffentlichung erscheint eine Bestätigungsmeldung, dass der Agent veröffentlicht wurde.

       ![Bestätigungsmeldung](../../../../../translated_images/3.2_59_AgentPublished.d15e01232544cf08943260dfbf61c92339dbd187620349e7c5a43add4796ed12.de.png)

Wir können den Agenten jetzt testen!

### Lab 3.3 - Ereignisauslöser testen

1. Um den Ereignisauslöser auszuführen, muss eine E-Mail mit einer Lebenslauf-PDF-Datei gesendet werden. Verfassen Sie in Outlook eine neue E-Mail-Nachricht.

     | E-Mail-Komponente | Details |
     |----------|------------|
     | **An Empfänger** | Verwenden Sie Ihr angemeldetes Benutzerkonto als Wert |
     | **Dateianhang** | Laden Sie die Datei [TAYLOR TESTPERSON (FICTITIOUS)](../../../../../docs/operative-preview/test-data/resumes/TAYLOR%20TESTPERSON%20(FICTITIOUS).pdf) hoch |
     | **Textkörper** | Kopieren und fügen Sie den folgenden Text als E-Mail-Textkörper ein |

       ```text
       Sehr geehrte/r Personalverantwortliche/r,

       ich möchte mein Interesse an der Position des Senior Power Platform Engineer in Ihrem Unternehmen bekunden. Mit über neun Jahren Erfahrung in der Bereitstellung sicherer und skalierbarer Lösungen auf Microsoft-Cloud-Plattformen bin ich überzeugt, dass ich effektiv zu Ihrem Team beitragen kann.

       In meiner letzten Position als Lead Power Platform Engineer habe ich eine automatisierte Lebenslauf-Pipeline entwickelt, die die manuelle Bearbeitung reduziert und die Durchsuchbarkeit verbessert. Ich habe HR-Fallmanagement-Anwendungen geliefert, lösungsbewusste Flows eingeführt und PR-Checks implementiert, um die Bereitstellungszeiten zu verkürzen. Meine Expertise umfasst Power Apps, Power Automate, Power Pages, Dataverse und eine Reihe von Microsoft 365-Diensten sowie die Integration mit Graph/REST-APIs und Azure Functions.

       Zuvor habe ich Genehmigungen in Teams mit adaptiven Karten entwickelt, wodurch Genehmigungszeiten auf denselben Tag verkürzt wurden, und robuste Fehlerbehandlungsframeworks erstellt. Mein Hintergrund umfasst auch die Migration von Legacy-Workflows zu Power Automate und den Aufbau von Self-Service-Portalen, die von Hunderten von Mitarbeitern genutzt werden.

       Ich habe einen B.Sc. in Informatik und bin zertifiziert als Power Platform Developer (PL-400) und Solution Architect (PL-600). Außerdem engagiere ich mich leidenschaftlich für Mentoring und habe mich bei lokalen Maker-Gruppen ehrenamtlich engagiert.

       Bitte finden Sie meinen Lebenslauf im Anhang zu Ihrer Prüfung. Ich würde mich freuen, die Möglichkeit zu haben, mit Ihnen zu besprechen, wie meine Fähigkeiten und Erfahrungen Ihren Anforderungen entsprechen.

       Vielen Dank für Ihre Zeit und Aufmerksamkeit.

       Mit freundlichen Grüßen,
       Taylor Testperson
       ```

       **Senden** Sie die E-Mail, sobald sie verfasst ist.

       ![E-Mail mit PDF-Dateianhang verfassen](../../../../../translated_images/3.3_01_ComposeEmailWithAttachment.eccba1bbcc276b4373277b193a66d8818b712c6ab9468ee12902545522b670f7.de.png)

1. Wählen Sie im Power Automate Maker-Portal für den Ereignisauslöser-Flow das **Aktualisieren**-Symbol aus, um den Flow-Lauf anzuzeigen, der für die gesendete E-Mail erfolgreich war.

       ![Aktualisieren-Symbol auswählen, um Flow-Lauf anzuzeigen](../../../../../translated_images/3.3_02_FlowRun.0e99756ebc5fba371dc72719b0619736626934461e58db2dc153535cbabcc1e8.de.png)

1. Gehen Sie zurück zu Copilot Studio und wählen Sie im **Hiring Agent** die Registerkarte **Aktivität** aus.

       ![Registerkarte Aktivität auswählen](../../../../../translated_images/3.3_03_SelectActivity.11d78735a8a2a1f64443d285deb47f2bacc5bd53ded039791215f9465dbc3f76.de.png)

1. Die Registerkarte **Aktivität** wird geladen und zeigt alle Aktivitäten des **Hiring Agent** an. Es wird eine Aktivität mit dem Namen **Automated** und dem Status **Complete** angezeigt. Diese Aktivität repräsentiert den Ereignisauslöser und den ausgelösten Agentenfluss.

       ![Aktivität abgeschlossen](../../../../../translated_images/3.3_04_StatusComplete.dbe14ffb9414b0f4d869841426c4ca595d7a664bf13f4b5e2e29a4e251b9064c.de.png)

1. Wählen Sie die Aktivität aus und wählen Sie den Ereignisauslöser in der Aktivitätskarte. Im rechten Seitenbereich sehen Sie, wie die Eingabeparameter in der Eingabeaufforderung die Parameterwerte `Resume Id`, `Resume Title` und `Resume Number` aus der **Dataverse**-Zeile enthalten, die erstellt wurde. Dies stammt aus den dynamischen Inhaltswerten, die zuvor in den Schritten 18 - 27 von **Lab 3.1 - Automatisches Hochladen von Lebensläufen in Dataverse, die per E-Mail empfangen wurden** konfiguriert wurden.

       ![Ereignisauslöser](../../../../../translated_images/3.3_05_EventTrigger.cbd73cd43a79e88e782d1e47ac8ddacdbe30d582a4da61a31010f44a9dacdd12.de.png)

1. Navigieren Sie zurück zur modellgesteuerten App **Hiring Hub** und wählen Sie in der **Resumes Systemansicht** **Aktualisieren**, um die Ansicht zu aktualisieren. Die neu erstellte Zeile für den Lebenslauf, der per E-Mail gesendet wurde, wird nun angezeigt, da sie durch den Ereignisauslöser erstellt wurde.

       ![Lebenslaufzeile erstellt](../../../../../translated_images/3.3_06_ResumeRowCreated.9ab850d8d7c066aad8531409b00a4de5f214b4d8d209d39fa0d493d5c55e041d.de.png)

1. Navigieren Sie zurück zu Copilot Studio und wählen Sie den Agentenfluss **Notify Teams Applicant Channel** innerhalb des **Application Intake Agent** in der Aktivitätskarte aus. Im rechten Seitenbereich sehen Sie, wie die Eingaben Werte aus der Dataverse-Zeile enthalten. Dies stammt aus der Eingabeaufforderung, die von der letzten Aktion (**Sendet eine Eingabeaufforderung an den angegebenen Copilot zur Verarbeitung**) im Ereignisauslöser gesendet wurde und die Parameterwerte aus der neu erstellten Dataverse-Zeile enthält. So können wir Parameterwerte von Ereignisauslösern an Agentenflüsse übergeben.

       ![Agentenfluss auswählen](../../../../../translated_images/3.3_07_NotifyTeamsApplicantChannel.9b6c4654197efca9c88dde72cfb38812038ef5f6bdce8c309046c02643092bb6.de.png)

1. Schauen wir uns schließlich die adaptive Karte an, die im Kanal in **Microsoft Teams** gepostet wurde. Im Kanal sehen wir die adaptive Karte, die Informationen über die neu erstellte Lebenslaufzeile in Dataverse anzeigt. Bewegen Sie den Mauszeiger über den Hyperlink am Anfang der adaptiven Karte und beachten Sie, wie die URL die Resumes Systemansicht-URL ist, die wir zuvor in der JSON-Payload (Schritte 15 - 19 von **Lab 3.2 - Benachrichtigen eines Teams-Kanals mit einer adaptiven Karte**) der adaptiven Karte konfiguriert haben.

       ![Adaptive Karte Resumes Systemansicht-URL](../../../../../translated_images/3.3_08_AdaptiveCardResumeTableURL.5a59821d60c8698e5c9e4746806b975bbdf3c4400dc0bb02a53f350bdea569e9.de.png)

1. Wählen Sie den Hyperlink aus, und Sie werden zur Resumes Systemansicht in der modellgesteuerten App **Hiring Hub** in Ihrem Browser weitergeleitet.

       ![Resumes Systemansicht in der modellgesteuerten App Hiring Hub](../../../../../translated_images/3.3_09_ResumeTableSystemView.81f52ab85aadda7d9131ced31d024fb4b411ccf600dd230d9d7e931c476e271c.de.png)

1. Navigieren Sie zurück zur adaptiven Karte, die im Kanal in Microsoft Teams gepostet wurde. Bewegen Sie diesmal den Mauszeiger über **Lebenslauf anzeigen**, was die `Action.OpenURL`-Aktion der adaptiven Karte ist. Beachten Sie, wie die URL die Lebenslaufzeile ist, die wir zuvor in der JSON-Payload (Schritte 30 - 36 von **Lab 3.2 - Benachrichtigen eines Teams-Kanals mit einer adaptiven Karte**) der adaptiven Karte konfiguriert haben.

       ![Adaptive Karte Lebenslaufzeilen-URL](../../../../../translated_images/3.3_10_AdaptiveCardResumeRowURL.2063a075c2d4adec27dfcc2ea4c01a385d791e0c4fc127caba912bde14bf77d6.de.png)

1. Wählen Sie die Aktion aus, und Sie werden zum Formular der Lebenslaufzeile in der modellgesteuerten App **Hiring Hub** in Ihrem Browser weitergeleitet.

       ![Lebenslaufzeile in der modellgesteuerten App Hiring Hub](../../../../../translated_images/3.3_11_ResumeRow.6f051ed512d396712a04ee98319d6643516e0bbfbf8a9de07d3df7d264563b9c.de.png)

## ✅ Mission abgeschlossen

Herzlichen Glückwunsch! 👏🏻 Hervorragende Arbeit, Operative/r.

✅ Ereignisauslöser: Sie haben einen Ereignisauslöser erstellt, der Dataverse-Parameterwerte an einen Agentenfluss übergibt.  
✅ Agentenfluss erstellt: Verarbeitet die Dataverse-Parameterwerte, um eine adaptive Karte in einem Kanal in Microsoft Teams zu posten und das HR-Rekrutierungsteam zu benachrichtigen.  
✅ Anweisungen für untergeordnete Agenten aktualisiert: Um den Fluss auszulösen, sobald der Ereignisauslöser abgeschlossen ist.

Dies ermöglicht es dem **Hiring Agent**, autonom zu arbeiten, wenn Lebensläufe als E-Mail-Anhänge empfangen werden, und das HR-Rekrutierungsteam für eine manuelle Überprüfung zu benachrichtigen.

Dies ist das Ende von **Lab 03 - Automatisierung von Bewerbungs-E-Mails**, wählen Sie den untenstehenden Link, um zur nächsten Lektion zu gelangen.

⏭️ [Zur Lektion **Agentenanweisungen erstellen** wechseln](../04-agent-instructions/README.md)

## 📚 Taktische Ressourcen

📖 [Machen Sie Ihren Agenten autonom in Copilot Studio](https://learn.microsoft.com/training/modules/autonomous-agents-online-workshop/?WT.mc_id=power-188561-ebenitez)  

📖 [Einen Ereignisauslöser hinzufügen](https://learn.microsoft.com/microsoft-copilot-studio/authoring-trigger-event?WT.mc_id=power-188561-ebenitez)  

📖 [Agentenflüsse mit Ihrem Agenten verwenden](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-188561-ebenitez)  

📖 [Einführung in Power Automate-Auslöser](https://learn.microsoft.com/power-automate/triggers-introduction?WT.mc_id=power-188561-ebenitez)  

📖 [Power Automate-Flows mit Agenten verwenden](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create?WT.mc_id=power-188561-ebenitez)  

📖 [Datenschutzrichtlinien für Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention?WT.mc_id=power-188561-ebenitez)  

---

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.