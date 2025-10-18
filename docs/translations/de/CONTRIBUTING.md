<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-17T18:51:37+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "de"
}
-->
# Beitrag zur MCS Agent Academy

Vielen Dank für Ihr Interesse, zur MCS Agent Academy beizutragen! Dieser Leitfaden hilft Ihnen, Ihre Entwicklungsumgebung einzurichten und unsere Dokumentationsstandards zu verstehen.

## Dokumentationsstandards

Wir folgen den Dokumentationsstandards von Microsoft, um konsistente und qualitativ hochwertige Inhalte sicherzustellen. Für umfassende Anleitungen zum Verfassen effektiver Dokumentationen besuchen Sie bitte:

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - Umfassender Leitfaden zum Verfassen von Dokumentationen, die den Stil und die Standards von Microsoft einhalten.

Dieses Ressourcenpaket behandelt:

- Klar und prägnant schreiben
- Korrekte Markdown-Syntax verwenden
- Konsistente Terminologie einhalten
- Dokumentationen effektiv strukturieren
- Best Practices für Barrierefreiheit

## Markdown-Linting

Wir verwenden markdownlint, um eine konsistente Formatierung und Qualität in all unseren Dokumentationen sicherzustellen. Dies trägt dazu bei, die Lesbarkeit und professionelle Standards im gesamten Repository zu wahren.

### Installation von markdownlint-cli2

Um markdownlint lokal auszuführen und mit unserem GitHub-Workflow übereinzustimmen, installieren Sie markdownlint-cli2:

```powershell
npm install -g markdownlint-cli2
```

### Markdownlint lokal ausführen

Nach der Installation können Sie markdownlint auf alle Markdown-Dateien im Repository anwenden:

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### Konfiguration

Unsere markdownlint-Konfiguration ist in `.markdownlint.jsonc` im Stammverzeichnis des Repositorys definiert. Diese Konfiguration:

- Deaktiviert die Überprüfung der Zeilenlänge (MD013), da wir keinen Standard definiert haben
- Erlaubt doppelte Überschriften nur bei Geschwistern (MD024) für häufige Vorlagenabschnitte
- Deaktiviert die Validierung des Präfixes für nummerierte Listen (MD029) global aufgrund von eingerücktem Inhalt, der die Nummerierung zurücksetzt
- Erlaubt die Verwendung von Codeblöcken für Text (MD046)

### Hinzufügen von Inline-Ausnahmen für markdownlint-Regeln

Obwohl unsere globale Konfiguration die meisten gängigen Szenarien abdeckt, können Sie auf Situationen stoßen, in denen Sie Inline-Ausnahmen für bestimmte markdownlint-Regeln in einzelnen Dateien hinzufügen müssen. Hier sind Beispiele, wie Sie dies tun können:

#### Option 1: Ignorieren für die nächste Zeile

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### Option 2: Ignorieren für einen bestimmten Bereich

```markdown
<!-- markdownlint-disable MD029 -->
1. First item
5. Fifth item (skips numbers but won't trigger MD029)
10. Tenth item
<!-- markdownlint-enable MD029 -->

<!-- markdownlint-disable MD013 -->
Multiple very long lines that exceed the character limit
can be placed between disable and enable comments
<!-- markdownlint-enable MD013 -->
```

#### Option 3: Ignorieren für die gesamte Datei

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> Platzieren Sie diese ganz oben in Ihrer Markdown-Datei, um bestimmte Regeln für das gesamte Dokument zu deaktivieren.

### Wann Inline-Ausnahmen verwendet werden sollten

Sie könnten Ausnahmen für verschiedene markdownlint-Regeln benötigen, wenn:

1. **MD029 (Nummerierung von Listen)**: Fortsetzung nummerierter Listen nach anderem Inhalt, absichtliche Nummerierung, die nicht bei 1 beginnt, oder komplexer verschachtelter Inhalt
2. **MD013 (Zeilenlänge)**: Codebeispiele, URLs oder technischer Inhalt, der nicht sinnvoll über mehrere Zeilen aufgeteilt werden kann
3. **MD033 (Inline-HTML)**: Wenn Sie bestimmte HTML-Elemente für Formatierungen benötigen, die mit Markdown nicht erreicht werden können
4. **MD041 (Erste Zeile Überschrift)**: Vorlagendateien oder Dokumente, die absichtlich nicht mit einer Überschrift beginnen

### Best Practices

1. **Ausnahmen sparsam verwenden**: Fügen Sie Ausnahmen nur hinzu, wenn dies für die Klarheit der Dokumentation erforderlich ist
2. **Kommentieren Sie Ihre Ausnahmen**: Fügen Sie bei der Verwendung von Ausnahmen eine kurze Erklärung hinzu
3. **Bevorzugen Sie `markdownlint-disable-next-line`**: Dies ist präziser als das Deaktivieren für ganze Abschnitte
4. **Führen Sie den Linter vor dem Commit aus**: Führen Sie immer `markdownlint-cli2 "**/*.md"` aus, bevor Sie Änderungen einreichen

> **Tipp:** Sie können markdownlint und cSpell-Checks schnell auf Ihre Markdown-Dateien anwenden, indem Sie das bereitgestellte PowerShell-Skript `scripts/validate-markdown.ps1` verwenden. Dieses Skript automatisiert gängige Formatierungs- und Rechtschreibprüfungen, um sicherzustellen, dass Ihre Beiträge unseren Richtlinien entsprechen.

Sie können es aus dem Stammverzeichnis des Repositorys mit PowerShell ausführen:

```powershell
./scripts/validate-markdown.ps1
```

### Häufige markdownlint-Fehler und deren Behebung

- **MD036**: Verwenden Sie richtige Überschriften (`## Überschrift`) anstelle von Hervorhebungen (`**Fettgedruckter Text**`)
- **MD007**: Korrigieren Sie die Einrückung von ungeordneten Listen (verwenden Sie 2 Leerzeichen, nicht 4)
- **MD022**: Fügen Sie Leerzeilen vor und nach Überschriften hinzu
- **MD032**: Fügen Sie Leerzeilen vor und nach Listen hinzu
- **MD009**: Entfernen Sie Leerzeichen am Ende von Zeilen

### GitHub-Workflow

Unser Repository enthält einen GitHub-Workflow, der markdownlint automatisch auf alle Pull Requests ausführt. Der Workflow:

- Verwendet dasselbe markdownlint-cli2-Tool, das Sie lokal ausführen können
- Schließt die Dateien `SUPPORT.md`, `SECURITY.md` und `CODE_OF_CONDUCT.md` aus
- Verwendet unsere `.markdownlint.jsonc`-Konfigurationsdatei
- Meldet Probleme als Warnungen, sodass PRs zusammengeführt werden können, während Formatierungsprobleme hervorgehoben werden

### VS Code markdownlint-Erweiterung

Wenn Sie VS Code verwenden, empfehlen wir die Installation der [markdownlint-Erweiterung](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) für Echtzeit-Markdown-Linting:

1. **Installieren Sie die Erweiterung** - Suchen Sie im VS Code-Erweiterungsmarkt nach "markdownlint" von David Anson
2. **Automatische Konfiguration** - Die Erweiterung verwendet automatisch Ihre `.markdownlint.jsonc`-Konfigurationsdatei
3. **Echtzeit-Feedback** - Sehen Sie geschwungene Unterstreichungen bei Markdown-Formatierungsproblemen, während Sie tippen
4. **Schnelle Korrekturen** - Verwenden Sie `Strg+.` (Cmd+. auf Mac), um verfügbare automatische Korrekturen für viele Probleme anzuzeigen
5. **Probleme-Panel** - Sehen Sie alle Markdown-Probleme im Probleme-Panel von VS Code

Dies bietet sofortiges Feedback während des Schreibens und erleichtert das Einhalten der Markdown-Standards vor dem Einreichen Ihrer Änderungen.

## Rechtschreibprüfung

Wir verwenden cSpell (Code Spell Checker), um eine konsistente Rechtschreibung in all unseren Dokumentationen sicherzustellen. Dies trägt dazu bei, professionelle Qualität zu gewährleisten und Tippfehler im gesamten Repository zu reduzieren.

### Installation von cSpell

Um cSpell lokal auszuführen, installieren Sie es global:

```powershell
npm install -g cspell
```

### cSpell lokal ausführen

Nach der Installation können Sie cSpell verwenden, um die Rechtschreibung in der Dokumentation zu überprüfen:

```powershell
# Check all markdown files in the docs folder
cspell "docs/**/*.md"

# Check all markdown files in the repository
cspell "**/*.md"

# Check a specific file
cspell "docs/recruit/README.md"

# Show suggestions for misspelled words
cspell --show-suggestions "docs/**/*.md"

# Check with minimal output (cleaner display)
cspell --no-progress --no-summary "docs/**/*.md"
```

### Konfiguration

Unsere cSpell-Konfiguration ist in `cspell.json` im Stammverzeichnis des Repositorys definiert. Diese Konfiguration:

- Enthält benutzerdefinierte Wörter, die spezifisch für unser Fachgebiet sind (Copilot, SharePoint, Dataverse usw.)
- Ignoriert gängige Dateitypen, die keine Rechtschreibprüfung benötigen (Bilder, Build-Dateien)
- Legt die Sprache für die Rechtschreibprüfung auf Englisch fest

### Hinzufügen neuer Wörter

Wenn Sie auf ein Wort stoßen, das von cSpell als falsch geschrieben markiert wird, aber tatsächlich korrekt ist (wie Produktnamen, Fachbegriffe oder Eigennamen), können Sie es dem `words`-Array in `cspell.json` hinzufügen:

```json
{
  "words": [
    "Contoso",
    "Dataverse",
    "YourNewWord"
  ]
}
```

### VS Code cSpell-Erweiterung

Wenn Sie VS Code mit der [Code Spell Checker-Erweiterung](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) verwenden, können Sie Wörter schnell zu Ihrer Konfiguration hinzufügen:

1. **Rechtschreibfehler anzeigen** - Suchen Sie nach geschwungenen Unterstreichungen bei falsch geschriebenen Wörtern
1. **Schnelle Korrektur verwenden** - Klicken Sie mit der rechten Maustaste auf das unterstrichene Wort oder verwenden Sie `Strg+.` (Cmd+. auf Mac)
1. **Zur Konfiguration hinzufügen** - Wählen Sie "Spelling -> Add to cSpell configuration" im Kontextmenü
1. **Ort auswählen** - Die Erweiterung fügt das Wort automatisch Ihrer `cspell.json`-Datei hinzu

Dies ist viel schneller als das manuelle Bearbeiten der Konfigurationsdatei für einzelne Wörter.

### Best Practices für die Rechtschreibung

1. **Rechtschreibprüfung vor dem Commit ausführen**: Führen Sie immer `cspell "docs/**/*.md"` aus, bevor Sie Änderungen einreichen
1. **Tippfehler beheben statt ignorieren**: Wenn möglich, beheben Sie tatsächliche Rechtschreibfehler, anstatt sie der Wortliste hinzuzufügen
1. **Konsistente Terminologie verwenden**: Halten Sie sich an etablierte Produktnamen und Fachbegriffe

## Lokale Dokumentationsvorschau mit MkDocs

Wir verwenden MkDocs mit dem Material-Theme, um unsere Dokumentationsseite zu erstellen. Sie können es lokal ausführen, um Ihre Änderungen vor dem Einreichen eines Pull Requests zu überprüfen.

📖 **Mehr erfahren**: [MkDocs Dokumentation](https://www.mkdocs.org/) | [Material für MkDocs](https://squidfunk.github.io/mkdocs-material/)

### Einrichtung der Python-Umgebung in VS Code

Wir empfehlen die Verwendung einer virtuellen Umgebung, um Abhängigkeiten für dieses Projekt zu isolieren. VS Code macht diesen Prozess nahtlos und installiert Python bei Bedarf.

> **GitHub Codespaces**: Diese Anweisungen funktionieren perfekt in GitHub Codespaces, die mit vorinstalliertem Python und einer einsatzbereiten VS Code-Umgebung ausgestattet sind.

📖 **Mehr erfahren**: [Python in VS Code](https://code.visualstudio.com/docs/languages/python) | [Python-Umgebungen in VS Code](https://code.visualstudio.com/docs/python/environments)

#### Voraussetzungen

**Python-Erweiterung installieren**: Installieren Sie die [Python-Erweiterung](https://marketplace.visualstudio.com/items?itemName=ms-python.python) von Microsoft aus dem VS Code Marketplace, falls Sie dies noch nicht getan haben.

#### Einrichtung in VS Code

1. **Erstellen Sie eine virtuelle Umgebung**:
   - Öffnen Sie die Befehlspalette (`Strg+Shift+P` unter Windows/Linux, `Cmd+Shift+P` auf Mac)
   - Geben Sie "Python: Create Environment" ein und wählen Sie es aus
   - Wählen Sie "Venv" (virtuelle Umgebung)
   - Wenn keine Python-Interpreter verfügbar sind, führt Sie VS Code durch die Installation von Python
   - Wählen Sie Ihren Python-Interpreter (Python 3.8+)
   - VS Code erstellt den Ordner `.venv` und aktiviert ihn automatisch

2. **Einrichtung überprüfen**:
   - Öffnen Sie ein neues integriertes Terminal (`` Strg+Shift+` `` unter Windows/Linux, `` Cmd+Shift+` `` auf Mac oder `View > Terminal`)
   - Sie sollten `(.venv)` in der Terminal-Eingabeaufforderung sehen
   - Führen Sie aus: `python --version`, um dies zu überprüfen

> **Hinweis**: Das Öffnen eines neuen Terminals stellt sicher, dass die Python-Umgebung ordnungsgemäß aktiviert ist. Wenn Sie lieber eine vorhandene Python-Umgebung verwenden möchten, anstatt eine neue virtuelle Umgebung zu erstellen, können Sie "Python: Select Interpreter" aus der Befehlspalette verwenden und Ihre bevorzugte Umgebung auswählen.

### Installation von MkDocs in VS Code

Nachdem Ihre Python-Umgebung in VS Code eingerichtet ist, installieren Sie MkDocs und das Material-Theme:

1. **Öffnen Sie das integrierte Terminal von VS Code** (`Strg+`` ` oder `View > Terminal`)
2. **Stellen Sie sicher, dass Ihre virtuelle Umgebung aktiv ist** (Sie sollten `(.venv)` in der Eingabeaufforderung sehen)
3. **Installieren Sie die Pakete**:

   ```bash
   pip install mkdocs mkdocs-material
   ```

### MkDocs in VS Code ausführen

Um den lokalen Entwicklungsserver mit automatischer Aktualisierung zu starten:

1. **Führen Sie im integrierten Terminal von VS Code aus**:

   ```bash
   mkdocs serve
   ```

2. **Die Seite ist verfügbar unter**: `http://127.0.0.1:8000/agent-academy/`

### Vorschau im VS Code Simple Browser

Für die beste Entwicklungserfahrung, ohne VS Code zu verlassen:

1. **Starten Sie den MkDocs-Server** im integrierten Terminal (wie oben gezeigt)
2. **Öffnen Sie den Simple Browser**:
   - **Methode 1**: Öffnen Sie die Befehlspalette (`Strg+Shift+P` / `Cmd+Shift+P`)
   - Geben Sie "Simple Browser: Show" ein und wählen Sie es aus
   - Geben Sie die URL ein: `http://127.0.0.1:8000/agent-academy/`

   - **Methode 2**: Klicken Sie mit der rechten Maustaste auf die URL in der Terminalausgabe und wählen Sie "Link folgen"

   - **Methode 3**: Verwenden Sie `Strg+Klick` (Windows) oder `Cmd+Klick` (Mac) auf die URL im Terminal

3. **Positionieren Sie den Browser**: Sie können den Simple Browser neben Ihrem Editor andocken, um Bearbeitung und Vorschau nebeneinander zu sehen.

### Vorteile der VS Code-Arbeitsumgebung

Das Arbeiten vollständig in VS Code bietet folgende Vorteile:

- **Integriertes Terminal**: Kein Wechsel zwischen Anwendungen erforderlich
- **Vorschau nebeneinander**: Bearbeiten Sie Markdown und sehen Sie die Änderungen gleichzeitig  
- **Link-Navigation**: Klicken Sie direkt auf Terminal-URLs, um den Simple Browser zu öffnen
- **Erweiterungsintegration**: Python-, markdownlint- und cSpell-Erweiterungen arbeiten zusammen
- **Git-Integration**: Integriertes Quellcode-Kontrollpanel für Commits und Pull Requests

### Funktionen der automatischen Aktualisierung

Beim Ausführen von `mkdocs serve` erhalten Sie:

- **Automatische Aktualisierung**: Änderungen an einer `.md`-Datei im `docs/`-Ordner aktualisieren den Browser automatisch
- **Konfigurationsaktualisierungen**: Änderungen an `mkdocs.yml` lösen ebenfalls einen Neuaufbau aus
- **Echtzeitvorschau**: Sehen Sie Ihre Formatierungs-, Link- und Inhaltsänderungen sofort
- **Link-Validierung**: MkDocs warnt Sie vor fehlerhaften internen Links

### Nützliche MkDocs-Befehle in VS Code

Führen Sie diese Befehle im integrierten Terminal von VS Code aus:

```bash
# Start development server
mkdocs serve

# Build static site (for production)
mkdocs build

# Serve with strict mode (treats warnings as errors)
mkdocs serve --strict

# Show version
mkdocs --version
```

> **Tipp:** Um die Dokumentation lokal mit allen überprüften Abhängigkeiten vorzuschauen, verwenden Sie das PowerShell-Skript `scripts/serve-docs.ps1`.

### Vorteile der lokalen Vorschau

- **Sofortiges Feedback**: Sehen Sie, wie Ihr Markdown mit dem Material-Theme gerendert wird
- **Link-Validierung**: Erkennen Sie fehlerhafte Links, bevor sie live gehen
- **Navigationstests**: Überprüfen Sie, ob Ihr Inhalt in den richtigen Abschnitten erscheint
- **Mobile Vorschau**: Testen Sie, wie Ihr Inhalt auf verschiedenen Bildschirmgrößen aussieht
- **Leistungsprüfung**: Stellen Sie sicher, dass Bilder und Ressourcen ordnungsgemäß geladen werden

## Fragen?

Wenn Sie Fragen zur Markdown-Formatierung oder zu den Beitragsrichtlinien haben, können Sie:

1. Diesen Leitfaden durchlesen
1. Bestehende Issues auf ähnliche Fragen überprüfen
1. Ein neues Issue eröffnen

Viel Spaß beim Mitwirken! 🚀

---

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.