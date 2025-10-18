<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "66d1f5ea2cc33dc690a5fc4a8e2a666e",
  "translation_date": "2025-10-17T19:27:12+00:00",
  "source_file": "docs/operative-preview/04-agent-instructions/README.md",
  "language_code": "de"
}
-->
# 🕵️‍♂️ Mission 04: Anweisungen für Agenten verfassen

--8<-- "disclaimer.md"

## 🕵️‍♂️ CODENAME: `OPERATION SECRET DIRECTIVE`

> **⏱️ Zeitfenster der Operation:** `~45 Minuten`

## 🎯 Missionsbeschreibung

Agent, Ihr nächster Auftrag ist **Operation Secret Directive** - die Kunst der Kommunikation und Steuerung von Agenten durch präzise Anweisungen und Beschreibungen zu meistern.

Ihre Mission, sollten Sie sich dazu entschließen, besteht darin, die entscheidenden Fähigkeiten zu erlernen, klare und umsetzbare Anweisungen zu schreiben, die Ihre Agenten dazu bringen, intelligente Entscheidungen zu treffen, die richtigen Werkzeuge und Wissensquellen zu nutzen und nahtlos mit anderen Agenten zusammenzuarbeiten. Außerdem werden Sie die Kunst des Verfassens hochwertiger Beschreibungen meistern, die den Agenten helfen, ihre Ressourcen zu verstehen und mit chirurgischer Präzision auf Benutzeranfragen zu reagieren.

Betrachten Sie dies als Ihre fortgeschrittene Ausbildung in Agentenpsychologie und Verhaltensmodifikation. Genau wie ein Einsatzagent klare Missionsparameter benötigt, um erfolgreich zu sein, benötigen Ihre KI-Agenten fachmännisch formulierte Anweisungen, um mit Klarheit und Präzision zu handeln und wertvolle Informationen in realen Szenarien zu liefern.

---

## 🔎 Ziele

Durch das Abschließen dieser Mission werden Sie:

- **Meister der Anweisungen**: Die Kunst und Wissenschaft des Verfassens von Agentenanweisungen in Copilot Studio verstehen  
- **Strategische Führung**: Lernen, wie man Agenten anleitet, Werkzeuge, Wissensquellen zu nutzen und mit anderen Agenten zusammenzuarbeiten  
- **Operative Klarheit**: Sicherstellen, dass Ihre Agenten präzise, transparent und effizient handeln  

---

## 📝 Anweisungen für Agenten verfassen

Effektive Anweisungen für Agenten zu schreiben, ist der Schlüssel zu erfolgreichem Agentenverhalten. Anweisungen werden von Agenten verwendet, um:

- Zu entscheiden, welches Werkzeug, Thema oder welche Wissensquelle für eine Benutzeranfrage oder einen autonomen Auslöser verwendet werden soll  
- Eingaben für ein Werkzeug basierend auf dem verfügbaren Kontext auszufüllen  
- Eine Antwort für den Endbenutzer zu generieren  

### Wie Anweisungen funktionieren

Anweisungen müssen auf den Werkzeugen, Themen und Wissensquellen basieren, die für Ihren Agenten konfiguriert sind. Agenten können keine Anweisungen für Ressourcen ausführen, die sie nicht haben. Wenn Sie beispielsweise Ihrem Agenten anweisen, eine FAQ-Seite zu durchsuchen, müssen Sie diese FAQ als Wissensquelle hinzufügen.

Sie können spezifische Werkzeuge, Themen, Variablen oder Power Fx-Ausdrücke mit `/` in Ihren Anweisungen referenzieren. Dies hilft dem Agenten, genau zu wissen, was er wann verwenden soll.

### Was in Anweisungen enthalten sein sollte

- Fügen Sie Anweisungen für Fälle hinzu, in denen Sie die Entscheidungen des Agenten lenken möchten, insbesondere wenn Unklarheiten möglich sind.  
- Verwenden Sie Anweisungen, um Leitplanken zu setzen, wie z. B. Themen einzuschränken oder Antwortformate festzulegen.  
- Geben Sie Hinweise zum Ausfüllen von Werkzeugeingaben, z. B. "Verwenden Sie die E-Mail-Adresse aus dem Kontaktfeld des Leads, wenn Sie dem Benutzer helfen, eine E-Mail zu verfassen."  
- Geben Sie an, wie Antworten formatiert werden sollen, z. B. "Geben Sie Antworten zum Bestellstatus immer in Tabellenform."  
- Verwenden Sie Einschränkungen, um die Aktionen des Agenten zu begrenzen, z. B. "Antworten Sie nur auf Anfragen zu Mitarbeiterleistungen."  

### Praktische Beispiele

- "Verwenden Sie die FAQ-Dokumente nur, wenn die Frage nicht relevant für Öffnungszeiten, Termine oder Abrechnungen ist."  
- "Verwenden Sie das Thema Ticket-Erstellung nur für das Erstellen von Tickets; für andere Anfragen zur Fehlerbehebung verwenden Sie das Thema Troubleshooting."  
- "Geben Sie Antworten zum Bestellstatus immer in Tabellenform."  

### Testen und Verfeinern

- Nach dem Bearbeiten von Anweisungen verwenden Sie das Testfeld, um das Verhalten des Agenten zu validieren.  
- Aktualisieren und veröffentlichen Sie Änderungen nach Bedarf.  

### Erweiterte Anleitung

- Nummerieren oder listen Sie Ihre Anweisungen auf und geben Sie an, dass sie in der Reihenfolge befolgt werden müssen.  
- Verwenden Sie Markdown-Formatierung für bessere Lesbarkeit und um generative KI bei der Verarbeitung Ihrer Anweisungen zu unterstützen.  
- Wenn Sie möchten, dass Ihr Agent sehr spezifisch ist, sollten Sie ein Thema für diesen Anwendungsfall erstellen.  
- Verwenden Sie genaue Namen für Werkzeuge und Themen in den Anweisungen, um Verwirrung zu vermeiden.  

### Sicherheit und Moderation

- Begrenzen Sie, welche Werkzeuge der Agent verwenden soll, wenn er Wissensquellen referenziert.  
- Begrenzen Sie, welche Parameter für Werkzeuge verwendet werden sollen (z. B. nur E-Mails an eine bestimmte Liste von Personen senden).  
- Verwenden Sie Anweisungen, um unerwünschtes Verhalten oder Probleme mit Inhaltsfilterung zu verhindern.  

---

## ✍️ Beschreibungen für Werkzeuge, Themen und Agenten verfassen

Hochwertige Beschreibungen sind entscheidend für generative Orchestrierung. Ihr Agent verwendet diese Beschreibungen, um die richtigen Werkzeuge, Themen und Agenten auszuwählen, um auf Benutzeranfragen und Auslöser zu reagieren. Befolgen Sie diese Best Practices:

- **Verwenden Sie einfache, direkte Sprache**: Vermeiden Sie Fachjargon, Umgangssprache oder übermäßig technische Begriffe. Schreiben Sie in aktiver Stimme und Präsens.  
- **Seien Sie spezifisch und relevant**: Fügen Sie Schlüsselwörter hinzu, die sich auf die Funktionalität und die Benutzerabsicht beziehen. Stellen Sie sicher, dass Beschreibungen ähnliche Werkzeuge oder Themen klar unterscheiden, um Unklarheiten zu vermeiden.  
- **Halten Sie es kurz und informativ**: Begrenzen Sie Beschreibungen auf ein oder zwei Sätze. Fassen Sie zusammen, was das Werkzeug, Thema oder der Agent tut und wie es dem Benutzer zugutekommt.  
- **Verwenden Sie eindeutige, beschreibende Namen**: Vermeiden Sie generische Namen. Zum Beispiel "Wettervorhersage für morgen" statt einfach "Wetter".  
- **Listen Sie Aktionen oder Überlegungen auf**: Verwenden Sie Aufzählungszeichen oder nummerierte Listen für Klarheit, wenn Sie mehrere Funktionen oder Schritte beschreiben.  
- **Testen Sie auf Überschneidungen**: Wenn mehrere Themen ähnliche Beschreibungen haben, könnte Ihr Agent sie alle aufrufen. Testen und überarbeiten Sie, um Überschneidungen zu vermeiden.  

!!! example "Gute und schlechte Beschreibungsbeispiele"
    **Gut:** Dieses Thema bietet Wetterinformationen für jeden Ort weltweit für den nächsten Tag. Es liefert die Temperatur. Es ruft nicht das aktuelle Wetter für heute ab.  
    **Schlecht:** Dieses Werkzeug kann Fragen beantworten. *(Zu vage)*  

---

## 🛠️ Best Practices für Anweisungen und Beschreibungen

Um Ihre Anweisungen und Beschreibungen wirklich effektiv zu machen, beachten Sie diese Prinzipien:

- Verwenden Sie aktive Stimme und Präsens (z. B. "Dieses Werkzeug liefert Wetterinformationen").  
- Vermeiden Sie Fachjargon, Umgangssprache oder unnötige technische Begriffe, es sei denn, sie sind für die Zielgruppe erforderlich.  
- Verwenden Sie Aufzählungszeichen oder nummerierte Listen, um Aktionen, Funktionen oder Überlegungen zu trennen.  
- Fügen Sie Schlüsselwörter hinzu, die der Benutzerabsicht und der Funktionalität des Werkzeugs oder Themas entsprechen.  
- Stellen Sie sicher, dass ähnliche Ressourcen eindeutige Namen und Beschreibungen haben, um Verwirrung und Überschneidungen zu vermeiden.  

---

## 🗂️ Beispielstruktur für Anweisungen

Beim Verfassen von Anweisungen sollten Sie die folgende Struktur für Klarheit und Vollständigkeit berücksichtigen:

1. **Übersicht**: Beschreiben Sie kurz die Mission und Rolle des Agenten  
1. **Prozessschritte**: Listen Sie die Hauptschritte auf, die der Agent befolgen soll  
1. **Kooperationspunkte**: Geben Sie an, wann andere Agenten oder spezifische Werkzeuge aufgerufen werden sollen  
1. **Sicherheit und Moderation**: Fügen Sie alle Compliance- oder Sicherheitsanforderungen hinzu  
1. **Feedback-Schleife**: Geben Sie an, wie der Agent Feedback sammeln oder Probleme eskalieren soll  

---

## 🧪 Labor: Anweisungen für Agenten verfassen

*Lab-Inhalte folgen in Kürze...*

---

## 🎉 Mission abgeschlossen

Mission 04 ist abgeschlossen! Sie haben jetzt:

✅ **Meister der Anweisungen**: Gelernt, wie man klare, umsetzbare Anweisungen für Agenten schreibt  
✅ **Strategische Führung**: Agenten effektiv angeleitet, Werkzeuge zu nutzen und zusammenzuarbeiten  
✅ **Operative Klarheit**: Sichergestellt, dass Agenten präzise und transparent handeln  

Als Nächstes folgt [Mission 05](../05-agent-responses/README.md): Anpassung von Agentenantworten für maximale Wirkung.

---

## 📚 Taktische Ressourcen

📖 [Microsoft Copilot Studio - Anweisungen verfassen](https://learn.microsoft.com/microsoft-copilot-studio/authoring-instructions)  
📖 [Leitfaden für den generativen Modus](https://learn.microsoft.com/microsoft-copilot-studio/guidance/generative-mode-guidance)  

---

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.