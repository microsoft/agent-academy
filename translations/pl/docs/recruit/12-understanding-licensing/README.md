<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6f05e50f132514dcd264bd48fae3f1ef",
  "translation_date": "2025-10-22T01:00:59+00:00",
  "source_file": "docs/recruit/12-understanding-licensing/README.md",
  "language_code": "pl"
}
-->
# 🚨 Misja 12: Zrozumienie licencjonowania

## 🕵️‍♂️ KOD OPERACJI: `OPERACJA WIEDZ CO WINIEN`

> **⏱️ Okno czasowe operacji:** `~15 minut`

## 🎯 Krótki opis misji

Witaj, Rekrucie. Zanim wyślesz swoich agentów w teren, musisz wiedzieć, **jak mierzone, licencjonowane i rozliczane jest użycie**. Ta misja wyjaśnia model rozliczania oparty na wiadomościach, opisuje, co obejmują licencje Microsoft 365 Copilot, oraz pokazuje, jak planować za pomocą narzędzia do szacowania.

---

## 🎯 Cel: Zrozumienie modelu opartego na wiadomościach

Copilot Studio nie nalicza opłat za użytkownika ani za funkcję — rozlicza Cię na podstawie **liczby wiadomości zużywanych przez Twoich agentów**. „Wiadomość” to interakcja między Twoim agentem a użytkownikiem (lub systemem).

- 💬 Każda interakcja użytkownika z Twoim agentem liczy się jako co najmniej **1 wiadomość**
- 🔄 Złożone interakcje (takie jak grounding, generatywna AI czy przepływy) zużywają **wiele wiadomości**
- 💼 Płacisz za wiadomości albo poprzez **przedpłacone pakiety**, albo **pay-as-you-go (PAYGO)**

---

## Opcje licencjonowania

### 1. **Pakiety wiadomości Copilot Studio**

- Przedpłata: **25 000 wiadomości/miesiąc za 200 USD**
- Najlepsze dla przewidywalnego użycia — pojemność jest współdzielona w ramach dzierżawy

### 2. **Pay-As-You-Go (PAYGO)**

- Płatność po użyciu: **0,01 USD za wiadomość**
- Brak zobowiązań z góry; użycie rozliczane na koniec miesiąca przez Azure

---

## Co jeśli masz licencje M365 Copilot?

Jeśli Twój zespół posiada **licencje Microsoft 365 Copilot**, Twoi agenci **mogą działać bez dodatkowych opłat w kluczowych scenariuszach**:

- Klasyczne odpowiedzi, generatywne odpowiedzi, wiadomości oparte na grafie oraz podstawowe działania agenta są **nieodpłatne** dla uwierzytelnionych użytkowników M365 Copilot w aplikacjach takich jak Teams i Outlook  
- Jednakże: jeśli włączysz zaawansowane funkcje, takie jak autonomiczne wyzwalacze, przepływy agenta wykraczające poza podstawowe działania lub użyjesz zewnętrznych kanałów/API, te **zużywają płatne wiadomości**

| Scenariusz                                  | Dodatkowe wiadomości rozliczane?             |
|---------------------------------------------|----------------------------------------------|
| Użytkownik M365 Copilot pyta agenta w Teams | ❌ Nie rozliczane                              |
| Agent wywołuje zewnętrzne API lub przepływ  | ✅ Rozliczane (5 + wiadomości)                |
| Agent używa autonomicznego wyzwalacza lub grounding | ✅ Rozliczane                             |

---

## 🧮 Planuj precyzyjnie: użyj narzędzia do szacowania

Przed uruchomieniem swojego agenta, skorzystaj z naszego **Copilot Studio Usage Estimator**, aby oszacować zużycie wiadomości w realistycznych scenariuszach:

[👉 Użyj Copilot Studio Usage Estimator](https://aka.ms/mcs-estimator){ .md-button .md-button--primary }

Pozwala na:

- 🔢 Określenie liczby **użytkowników**
- ⚙️ Wybór **funkcji agenta** (grounding, działania, przepływy, pamięć)
- 📈 Oszacowanie **całkowitej liczby wiadomości na agenta miesięcznie**
- 🧠 Optymalizację projektu i unikanie niespodzianek w rozliczeniach

!!! tip
    ✅ Uruchom narzędzie wcześnie — i ponownie po zbudowaniu — aby porównać oczekiwane vs. rzeczywiste użycie.

---

## 💼 Przykładowy scenariusz

**Środowisko**: Agent pomocy IT z grounding + jeden przepływ Power Automate  
**Sesje**: 5 interakcji użytkownika na sesję  
**Założenia**: grounding (10 wiadomości) + działanie (5 wiadomości) + 5 generatywnych odpowiedzi (10 wiadomości)  
**Razem**: ~25 wiadomości na sesję  
**Skala**: 500 sesji/miesiąc = ~12 500 wiadomości (½ pakietu wiadomości)

---

## 🧠 Wskazówki dotyczące kontroli kosztów

- Monitoruj użycie w Power Platform Admin Center
- Rozpocznij w środowisku deweloperskim/testowym przed uruchomieniem na żywo
- Wyłącz nieużywane działania i konektory
- Korzystaj z **licencji Microsoft 365 Copilot**, gdy to możliwe, do użytku wewnętrznego
- Wybieraj pakiety wiadomości, gdy skala staje się przewidywalna
- Używaj **Copilot Studio Usage Estimator**, aby prognozować użycie

---

## 🏁 Misja zakończona

Teraz rozumiesz:

- Jak obliczane i rozliczane jest użycie
- Kiedy M365 Copilot pokrywa użycie — a kiedy nie
- Jak prognozować i zarządzać zużyciem wiadomości

🎓 Z tą wiedzą możesz przejść dalej i wdrażać swoich agentów **efektywnie i inteligentnie**

---

## 📚 Zasoby taktyczne

Dowiedz się więcej o licencjonowaniu i rozliczaniu w Copilot Studio

- 📄 [Licencjonowanie Copilot Studio i stawki za wiadomości](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing?WT.mc_id=power-170631-apdunnam)
- 📘 [Przewodnik po licencjonowaniu Power Platform (lipiec 2025)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp//microsoft/bade/documents/products-and-services/en-us/bizapps/Power-Platform-Licensing-Guide-July-2025.pdf?WT.mc_id=power-170631-apdunnam)
- 📊 [Zarządzanie wiadomościami i monitorowanie pojemności](https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity?WT.mc_id=power-170631-apdunnam)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/12-understanding-licensing" alt="Analiza" />

---

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się zapewnić dokładność, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za wiarygodne źródło. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.