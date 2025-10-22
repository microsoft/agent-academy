<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-21T23:40:48+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "pl"
}
-->
# Wkład w MCS Agent Academy

Dziękujemy za zainteresowanie wkładem w MCS Agent Academy! Ten przewodnik pomoże Ci skonfigurować środowisko programistyczne i zrozumieć nasze standardy dokumentacji.

## Standardy dokumentacji

Stosujemy standardy dokumentacji Microsoftu, aby zapewnić spójność i wysoką jakość treści. Aby uzyskać szczegółowe wskazówki dotyczące pisania skutecznej dokumentacji, zapoznaj się z:

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - Kompletny przewodnik po pisaniu dokumentacji zgodnej ze stylem i standardami Microsoftu.

Ten zasób obejmuje:

- Pisanie jasnych, zwięzłych treści
- Używanie właściwej składni markdown
- Stosowanie spójnej terminologii
- Efektywne strukturyzowanie dokumentacji
- Najlepsze praktyki w zakresie dostępności

## Lintowanie Markdown

Używamy markdownlint, aby zapewnić spójne formatowanie i jakość w całej naszej dokumentacji. Pomaga to utrzymać czytelność i profesjonalne standardy w repozytorium.

### Instalacja markdownlint-cli2

Aby uruchomić markdownlint lokalnie i dopasować się do naszego workflow na GitHubie, zainstaluj markdownlint-cli2:

```powershell
npm install -g markdownlint-cli2
```

### Uruchamianie markdownlint lokalnie

Po zainstalowaniu możesz uruchomić markdownlint na wszystkich plikach markdown w repozytorium:

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### Konfiguracja

Nasza konfiguracja markdownlint jest zdefiniowana w `.markdownlint.jsonc` w katalogu głównym repozytorium. Ta konfiguracja:

- Wyłącza sprawdzanie długości linii (MD013), ponieważ nie zdefiniowaliśmy standardu
- Pozwala na powtarzające się nagłówki tylko w sekcjach rodzeństwa (MD024) dla typowych szablonów
- Wyłącza globalnie walidację prefiksów list numerowanych (MD029) z powodu zagnieżdżonej treści resetującej numerację
- Pozwala na używanie bloków kodu dla tekstu (MD046)

### Dodawanie wyjątków inline dla reguł markdownlint

Chociaż nasza globalna konfiguracja obsługuje większość typowych scenariuszy, możesz napotkać sytuacje, w których konieczne będzie dodanie wyjątków inline dla konkretnych reguł markdownlint w poszczególnych plikach. Oto przykłady, jak to zrobić:

#### Opcja 1: Ignorowanie dla następnej linii

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### Opcja 2: Ignorowanie dla określonego zakresu

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

#### Opcja 3: Ignorowanie dla całego pliku

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> Umieść te wyjątki na samym początku pliku markdown, aby wyłączyć określone reguły dla całego dokumentu.

### Kiedy używać wyjątków inline

Możesz potrzebować wyjątków dla różnych reguł markdownlint, gdy:

1. **MD029 (Numerowanie list)**: Kontynuowanie numerowanych list po innej treści, celowe numerowanie, które nie zaczyna się od 1, lub złożona zagnieżdżona treść
2. **MD013 (Długość linii)**: Przykłady kodu, URL-e lub treści techniczne, które nie mogą być sensownie podzielone na linie
3. **MD033 (HTML inline)**: Gdy potrzebujesz konkretnych elementów HTML do formatowania, których nie można osiągnąć za pomocą markdown
4. **MD041 (Nagłówek na pierwszej linii)**: Pliki szablonów lub dokumenty, które celowo nie zaczynają się od nagłówka

### Najlepsze praktyki

1. **Używaj wyjątków oszczędnie**: Dodawaj wyjątki tylko wtedy, gdy są konieczne dla jasności dokumentacji
2. **Komentuj swoje wyjątki**: Dodaj krótki komentarz wyjaśniający powód użycia wyjątku
3. **Preferuj `markdownlint-disable-next-line`**: Jest to bardziej precyzyjne niż wyłączanie dla całych sekcji
4. **Uruchamiaj linter przed zatwierdzeniem**: Zawsze uruchamiaj `markdownlint-cli2 "**/*.md"` przed przesłaniem zmian

> **Wskazówka:** Możesz szybko uruchomić zarówno markdownlint, jak i cSpell na swoich plikach markdown za pomocą dostarczonego skryptu PowerShell `scripts/validate-markdown.ps1`. Ten skrypt automatyzuje typowe kontrole formatowania i pisowni, aby upewnić się, że Twój wkład spełnia nasze wytyczne.

Uruchom go z katalogu głównego repozytorium za pomocą PowerShell:

```powershell
./scripts/validate-markdown.ps1
```

### Typowe błędy markdownlint i ich poprawki

- **MD036**: Używaj właściwych nagłówków (`## Nagłówek`) zamiast wyróżnień (`**Pogrubiony tekst**`)
- **MD007**: Popraw wcięcia list nieuporządkowanych (używaj 2 spacji, nie 4)
- **MD022**: Dodaj puste linie przed i po nagłówkach
- **MD032**: Dodaj puste linie przed i po listach
- **MD009**: Usuń końcowe spacje na końcu linii

### Workflow na GitHubie

Nasze repozytorium zawiera workflow na GitHubie, który automatycznie uruchamia markdownlint na wszystkich pull requestach. Workflow:

- Używa tego samego narzędzia markdownlint-cli2, które możesz uruchomić lokalnie
- Wyklucza pliki `SUPPORT.md`, `SECURITY.md` i `CODE_OF_CONDUCT.md`
- Korzysta z naszej konfiguracji `.markdownlint.jsonc`
- Zgłasza problemy jako ostrzeżenia, pozwalając na scalanie PR-ów, jednocześnie wskazując możliwości poprawy formatowania

### Rozszerzenie markdownlint dla VS Code

Jeśli używasz VS Code, zalecamy zainstalowanie [rozszerzenia markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) dla lintowania markdown w czasie rzeczywistym:

1. **Zainstaluj rozszerzenie** - Wyszukaj "markdownlint" autorstwa Davida Ansona w marketplace rozszerzeń VS Code
2. **Automatyczna konfiguracja** - Rozszerzenie automatycznie użyje Twojego pliku konfiguracyjnego `.markdownlint.jsonc`
3. **Informacje w czasie rzeczywistym** - Zobacz podkreślenia na błędach formatowania markdown podczas pisania
4. **Szybkie poprawki** - Użyj `Ctrl+.` (Cmd+. na Macu), aby zobaczyć dostępne automatyczne poprawki dla wielu problemów
5. **Panel problemów** - Zobacz wszystkie problemy markdown w panelu Problemów w VS Code

To zapewnia natychmiastową informację zwrotną podczas pisania, ułatwiając przestrzeganie standardów markdown przed zatwierdzeniem zmian.

## Sprawdzanie pisowni

Używamy cSpell (Code Spell Checker), aby utrzymać spójną pisownię w całej naszej dokumentacji. Pomaga to zapewnić profesjonalną jakość i zmniejszyć liczbę literówek w repozytorium.

### Instalacja cSpell

Aby uruchomić cSpell lokalnie, zainstaluj go globalnie:

```powershell
npm install -g cspell
```

### Uruchamianie cSpell lokalnie

Po zainstalowaniu możesz uruchomić cSpell, aby sprawdzić pisownię w dokumentacji:

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

### Konfiguracja

Nasza konfiguracja cSpell jest zdefiniowana w `cspell.json` w katalogu głównym repozytorium. Ta konfiguracja:

- Zawiera niestandardowe słowa specyficzne dla naszej domeny (Copilot, SharePoint, Dataverse itp.)
- Ignoruje typowe typy plików, które nie wymagają sprawdzania pisowni (obrazy, pliki budowy)
- Ustawia język na angielski dla sprawdzania pisowni

### Dodawanie nowych słów

Jeśli napotkasz słowo, które cSpell oznacza jako błędnie napisane, ale jest poprawne (np. nazwy produktów, terminy techniczne lub nazwy własne), możesz dodać je do tablicy `words` w `cspell.json`:

```json
{
  "words": [
    "Contoso",
    "Dataverse",
    "YourNewWord"
  ]
}
```

### Rozszerzenie cSpell dla VS Code

Jeśli używasz VS Code z [rozszerzeniem Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker), możesz szybko dodawać słowa do swojej konfiguracji:

1. **Zobacz błędy pisowni** - Szukaj podkreśleń na błędnie napisanych słowach
1. **Użyj szybkiej poprawki** - Kliknij prawym przyciskiem myszy na podkreślonym słowie lub użyj `Ctrl+.` (Cmd+. na Macu)
1. **Dodaj do konfiguracji** - Wybierz "Spelling -> Add to cSpell configuration" z menu kontekstowego
1. **Wybierz lokalizację** - Rozszerzenie automatycznie doda słowo do Twojego pliku `cspell.json`

To jest znacznie szybsze niż ręczne edytowanie pliku konfiguracyjnego dla pojedynczych słów.

### Najlepsze praktyki dotyczące pisowni

1. **Uruchamiaj sprawdzanie pisowni przed zatwierdzeniem**: Zawsze uruchamiaj `cspell "docs/**/*.md"` przed przesłaniem zmian
1. **Popraw literówki zamiast ignorowania**: Jeśli to możliwe, popraw rzeczywiste błędy pisowni zamiast dodawania ich do listy słów
1. **Używaj spójnej terminologii**: Trzymaj się ustalonych nazw produktów i terminów technicznych

## Lokalny podgląd dokumentacji z MkDocs

Używamy MkDocs z motywem Material do generowania naszej strony dokumentacyjnej. Możesz uruchomić ją lokalnie, aby zobaczyć swoje zmiany przed przesłaniem pull requesta.

📖 **Dowiedz się więcej**: [Dokumentacja MkDocs](https://www.mkdocs.org/) | [Material dla MkDocs](https://squidfunk.github.io/mkdocs-material/)

### Konfiguracja środowiska Python w VS Code

Zalecamy użycie wirtualnego środowiska do izolowania zależności dla tego projektu. VS Code sprawia, że ten proces jest prosty i automatycznie obsłuży instalację Pythona, jeśli to konieczne.

> **GitHub Codespaces**: Te instrukcje działają idealnie w GitHub Codespaces, które mają preinstalowanego Pythona i gotowe środowisko VS Code.

📖 **Dowiedz się więcej**: [Python w VS Code](https://code.visualstudio.com/docs/languages/python) | [Środowiska Python w VS Code](https://code.visualstudio.com/docs/python/environments)

#### Wymagania wstępne

**Zainstaluj rozszerzenie Python**: Zainstaluj [rozszerzenie Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) autorstwa Microsoftu z marketplace rozszerzeń VS Code, jeśli jeszcze tego nie zrobiłeś.

#### Konfiguracja w VS Code

1. **Utwórz wirtualne środowisko**:
   - Otwórz paletę poleceń (`Ctrl+Shift+P` na Windows/Linux, `Cmd+Shift+P` na Macu)
   - Wpisz "Python: Create Environment" i wybierz tę opcję
   - Wybierz "Venv" (wirtualne środowisko)
   - Jeśli nie ma dostępnych interpreterów Pythona, VS Code poprowadzi Cię przez instalację Pythona
   - Wybierz swój interpreter Pythona (Python 3.8+)
   - VS Code utworzy folder `.venv` i automatycznie go aktywuje

2. **Zweryfikuj konfigurację**:
   - Otwórz nowy zintegrowany terminal (`` Ctrl+Shift+` `` na Windows/Linux, `` Cmd+Shift+` `` na Macu lub `Widok > Terminal`)
   - Powinieneś zobaczyć `(.venv)` w promptcie terminala
   - Uruchom: `python --version`, aby zweryfikować

> **Uwaga**: Otwieranie nowego terminala zapewnia, że środowisko Python jest poprawnie aktywowane. Jeśli wolisz użyć istniejącego środowiska Python zamiast tworzenia nowego wirtualnego środowiska, możesz użyć "Python: Select Interpreter" z palety poleceń i wybrać preferowane środowisko.

### Instalacja MkDocs w VS Code

Po skonfigurowaniu środowiska Python w VS Code, zainstaluj MkDocs i motyw Material:

1. **Otwórz zintegrowany terminal VS Code** (`Ctrl+`` ` lub `Widok > Terminal`)
2. **Upewnij się, że Twoje wirtualne środowisko jest aktywne** (powinieneś zobaczyć `(.venv)` w promptcie)
3. **Zainstaluj pakiety**:

   ```bash
   pip install mkdocs mkdocs-material
   ```

### Uruchamianie MkDocs w VS Code

Aby uruchomić lokalny serwer deweloperski z automatycznym odświeżaniem:

1. **W zintegrowanym terminalu VS Code**, uruchom:

   ```bash
   mkdocs serve
   ```

2. **Strona będzie dostępna pod adresem**: `http://127.0.0.1:8000/agent-academy/`

### Podgląd w prostym przeglądarce VS Code

Dla najlepszego doświadczenia deweloperskiego bez opuszczania VS Code:

1. **Uruchom serwer MkDocs** w zintegrowanym terminalu (jak pokazano powyżej)
2. **Otwórz prostą przeglądarkę**:
   - **Metoda 1**: Otwórz paletę poleceń (`Ctrl+Shift+P` / `Cmd+Shift+P`)
   - Wpisz "Simple Browser: Show" i wybierz tę opcję
   - Wprowadź URL: `http://127.0.0.1:8000/agent-academy/`

   - **Metoda 2**: Kliknij prawym przyciskiem myszy na URL w wyjściu terminala i wybierz "Follow Link"

   - **Metoda 3**: Użyj `Ctrl+Click` (Windows) lub `Cmd+Click` (Mac) na URL w terminalu

3. **Ustawienie przeglądarki**: Możesz zadokować prostą przeglądarkę obok swojego edytora, aby mieć podgląd i edycję obok siebie.

### Korzyści z pracy w przestrzeni roboczej VS Code

Praca całkowicie w VS Code zapewnia następujące korzyści:

- **Zintegrowany terminal**: Nie musisz przełączać się między aplikacjami
- **Podgląd obok siebie**: Edytuj markdown i jednocześnie zobacz zmiany  
- **Nawigacja po linkach**: Klikaj URL-e w terminalu, aby otworzyć prostą przeglądarkę
- **Integracja rozszerzeń**: Rozszerzenia Python, markdownlint i cSpell współpracują ze sobą
- **Integracja Git**: Wbudowany panel kontroli źródła dla commitów i pull requestów

### Funkcje automatycznego odświeżania

Podczas uruchamiania `mkdocs serve` otrzymujesz:

- **Automatyczne odświeżanie**: Zmiany w dowolnym pliku `.md` w folderze `docs/` automatycznie odświeżają przeglądarkę
- **Aktualizacje konfiguracji**: Zmiany w `mkdocs.yml` również wywołują przebudowy
- **Podgląd w czasie rzeczywistym**: Zobacz swoje formatowanie, linki i zmiany treści natychmiast
- **Walidacja linków**: MkDocs ostrzeże Cię o uszkodzonych linkach wewnętrznych

### Przydatne polecenia MkDocs w VS Code

Uruchom te polecenia w zintegrowanym terminalu VS Code:

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

> **Wskazówka:** Aby lokalnie zobaczyć dokumentację z wszystkimi zależnościami sprawdzonymi, użyj skryptu PowerShell `scripts/serve-docs.ps1`.

### Korzyści z lokalnego podglądu

- **Natychmiastowa informacja zwrotna**: Zobacz, jak Twój markdown renderuje się z motywem Material
- **Walidacja linków**: Wykryj uszkodzone linki przed ich publikacją
- **Testowanie nawigacji**: Upewnij się, że Twoja treść pojawia się w odpowiednich sekcjach
- **Podgląd mobilny**: Sprawdź, jak Twoja treść wygląda na różnych rozmiarach ekranu
- **Kontrola wydajności**: Upewnij się, że obrazy i zasoby ładują się poprawnie

## Pytania?

Jeśli masz pytania dotyczące formatowania markdown lub wytycznych dotyczących wkładu, prosimy:

1. Przejrzyj ten przewodnik dotyczący wkładu

---

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się zapewnić dokładność, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za autorytatywne źródło. W przypadku informacji krytycznych zaleca się profesjonalne tłumaczenie przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.