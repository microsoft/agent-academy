<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "66d1f5ea2cc33dc690a5fc4a8e2a666e",
  "translation_date": "2025-10-22T00:06:55+00:00",
  "source_file": "docs/operative-preview/04-agent-instructions/README.md",
  "language_code": "pl"
}
-->
# 🕵️‍♂️ Misja 04: Tworzenie instrukcji dla agentów

--8<-- "disclaimer.md"

## 🕵️‍♂️ KODOWA NAZWA: `OPERACJA TAJNA DYREKTYWA`

> **⏱️ Czas trwania operacji:** `~45 minut`

## 🎯 Opis Misji

Agencie, Twoje kolejne zadanie to **Operacja Tajna Dyrektywa** - opanowanie sztuki komunikacji i kontroli agentów poprzez precyzyjne instrukcje i opisy.

Twoja misja, jeśli zdecydujesz się ją przyjąć, polega na nauce kluczowych umiejętności pisania jasnych, wykonalnych instrukcji, które poprowadzą Twoich agentów do podejmowania inteligentnych decyzji, korzystania z odpowiednich narzędzi i źródeł wiedzy oraz współpracy z innymi agentami. Opanujesz również sztukę tworzenia wysokiej jakości opisów, które pomogą agentom zrozumieć ich zasoby i odpowiadać z chirurgiczną precyzją na zapytania użytkowników.

Traktuj to jako zaawansowane szkolenie w zakresie psychologii agentów i modyfikacji ich zachowań. Tak jak operacyjny agent potrzebuje jasnych parametrów misji, aby odnieść sukces, Twoi agenci AI wymagają mistrzowsko opracowanych instrukcji, aby działać z klarownością, precyzją i dostarczać wartościowe informacje w rzeczywistych scenariuszach.

---

## 🔎 Cele

Po ukończeniu tej misji będziesz:

- **Mistrzem Instrukcji**: Rozumiał sztukę i naukę pisania instrukcji dla agentów w Copilot Studio  
- **Strategicznym Przewodnikiem**: Wiedział, jak kierować agentami w korzystaniu z narzędzi, źródeł wiedzy i współpracy z innymi agentami  
- **Operacyjną Klarownością**: Zapewniał, że Twoi agenci działają z precyzją, przejrzystością i efektywnością  

---

## 📝 Pisanie Instrukcji dla Agentów

Pisanie skutecznych instrukcji dla agentów jest kluczem do ich właściwego zachowania. Instrukcje są wykorzystywane przez agentów do:

- Decydowania, które narzędzie, temat lub źródło wiedzy użyć w odpowiedzi na zapytanie użytkownika lub autonomiczny wyzwalacz  
- Wypełniania danych wejściowych dla narzędzi na podstawie dostępnego kontekstu  
- Generowania odpowiedzi dla użytkownika końcowego  

### Jak działają instrukcje

Instrukcje muszą być oparte na narzędziach, tematach i źródłach wiedzy skonfigurowanych dla Twojego agenta. Agenci nie mogą działać na podstawie instrukcji dotyczących zasobów, których nie posiadają. Na przykład, jeśli polecisz agentowi przeszukać FAQ strony internetowej, musisz dodać to FAQ jako źródło wiedzy.

Możesz odwoływać się do konkretnych narzędzi, tematów, zmiennych lub wyrażeń Power Fx, używając `/` w swoich instrukcjach. Pomaga to agentowi dokładnie wiedzieć, czego użyć i kiedy.

### Co uwzględnić w instrukcjach

- Dodaj instrukcje w przypadkach, gdy chcesz poprowadzić wybory agenta, szczególnie gdy możliwa jest niejasność.  
- Używaj instrukcji do ustawiania ograniczeń, takich jak ograniczenie tematów lub określenie formatów odpowiedzi.  
- Podawaj wskazówki dotyczące wypełniania danych wejściowych narzędzi, np. "Użyj adresu e-mail z pola kontaktowego leadu, pomagając użytkownikowi w tworzeniu e-maila."  
- Określ, jak powinny być formatowane odpowiedzi, np. "Zawsze podawaj odpowiedzi dotyczące statusu zamówienia w formacie tabeli."  
- Używaj ograniczeń, aby ograniczyć działania agenta, np. "Odpowiadaj tylko na zapytania dotyczące świadczeń pracowniczych."  

### Praktyczne przykłady

- "Używaj dokumentów FAQ tylko wtedy, gdy pytanie nie dotyczy godzin, wizyt lub rozliczeń."  
- "Używaj tematu tworzenia zgłoszeń tylko do tworzenia zgłoszeń; w przypadku innych zapytań dotyczących rozwiązywania problemów, używaj tematu rozwiązywania problemów."  
- "Zawsze podawaj odpowiedzi dotyczące statusu zamówienia w formacie tabeli."  

### Testowanie i doskonalenie

- Po edycji instrukcji użyj panelu testowego, aby zweryfikować zachowanie agenta.  
- Aktualizuj i publikuj zmiany w razie potrzeby.  

### Zaawansowane wskazówki

- Numeruj lub używaj list punktowanych w instrukcjach i określ, że muszą być przestrzegane w kolejności.  
- Używaj formatowania markdown dla czytelności i aby pomóc generatywnemu AI w przetwarzaniu instrukcji.  
- Jeśli chcesz, aby Twój agent był bardzo precyzyjny, rozważ stworzenie tematu dla tego przypadku użycia.  
- Używaj dokładnych nazw narzędzi i tematów w instrukcjach, aby uniknąć nieporozumień.  

### Bezpieczeństwo i moderacja

- Ogranicz, jakie narzędzia agent powinien używać, odwołując się do źródeł wiedzy.  
- Ogranicz, jakie parametry powinny być używane dla narzędzi (np. wysyłaj e-maile tylko do określonej listy osób).  
- Używaj instrukcji, aby chronić przed niepożądanym zachowaniem lub problemami z filtrowaniem treści.  

---

## ✍️ Tworzenie opisów dla narzędzi, tematów i agentów

Wysokiej jakości opisy są kluczowe dla generatywnej orkiestracji. Twój agent używa tych opisów, aby wybrać odpowiednie narzędzia, tematy i agentów do odpowiedzi na zapytania użytkowników i wyzwalacze. Przestrzegaj tych najlepszych praktyk:

- **Używaj prostego, bezpośredniego języka**: Unikaj żargonu, slangu lub nadmiernie technicznych terminów. Pisz w stronie czynnej i czasie teraźniejszym.  
- **Bądź konkretny i trafny**: Uwzględnij słowa kluczowe związane z funkcjonalnością i zamiarem użytkownika. Upewnij się, że opisy jasno różnicują podobne narzędzia lub tematy, aby uniknąć niejasności.  
- **Zachowaj zwięzłość i informacyjność**: Ogranicz opisy do jednego lub dwóch zdań. Podsumuj, co robi narzędzie, temat lub agent i jak to przynosi korzyści użytkownikowi.  
- **Używaj unikalnych, opisowych nazw**: Unikaj ogólnych nazw. Na przykład użyj "Prognoza pogody na jutro" zamiast "Pogoda".  
- **Wymień działania lub uwagi**: Używaj list punktowanych lub numerowanych dla jasności przy opisywaniu wielu funkcji lub kroków.  
- **Testuj pod kątem nakładania się**: Jeśli wiele tematów ma podobne opisy, Twój agent może wywołać je wszystkie. Testuj i poprawiaj, aby zapobiec nakładaniu się.  

!!! example "Przykłady dobrych i złych opisów"
    **Dobry:** Ten temat dostarcza informacji o pogodzie dla dowolnej lokalizacji na świecie na następny dzień. Podaje temperaturę. Nie dostarcza aktualnej pogody na dziś.  
    **Zły:** To narzędzie może odpowiadać na pytania. *(Zbyt ogólne)*  

---

## 🛠️ Najlepsze praktyki dla instrukcji i opisów

Aby Twoje instrukcje i opisy były naprawdę skuteczne, pamiętaj o tych zasadach:

- Używaj strony czynnej i czasu teraźniejszego (np. "To narzędzie dostarcza informacji o pogodzie").  
- Unikaj żargonu, slangu lub zbędnych terminów technicznych, chyba że są konieczne dla odbiorcy.  
- Używaj list punktowanych lub numerowanych, aby oddzielić działania, funkcje lub uwagi.  
- Uwzględnij słowa kluczowe, które odpowiadają intencji użytkownika i funkcjonalności narzędzia lub tematu.  
- Zapewnij unikalne nazwy i opisy dla podobnych zasobów, aby uniknąć nieporozumień i nakładania się.  

---

## 🗂️ Przykładowa struktura instrukcji

Pisząc instrukcje, rozważ następującą strukturę dla jasności i kompletności:

1. **Przegląd**: Krótko opisz misję i rolę agenta  
1. **Kroki procesu**: Wymień główne kroki, które agent powinien wykonać  
1. **Punkty współpracy**: Wskaż, kiedy należy wezwać innych agentów lub użyć konkretnych narzędzi  
1. **Bezpieczeństwo i moderacja**: Uwzględnij wszelkie wymagania dotyczące zgodności lub bezpieczeństwa  
1. **Pętla feedbacku**: Określ, jak agent powinien zbierać opinie lub eskalować problemy  

---

## 🧪 Laboratorium: Tworzenie instrukcji dla agentów

*Treść laboratorium wkrótce...*

---

## 🎉 Misja zakończona

Misja 04 zakończona! Teraz masz:

✅ **Mistrzostwo w instrukcjach**: Nauczyłeś się pisać jasne, wykonalne instrukcje dla agentów  
✅ **Strategiczne wskazówki**: Poprowadziłeś agentów do korzystania z narzędzi i efektywnej współpracy  
✅ **Operacyjną klarowność**: Zapewniłeś, że agenci działają z precyzją i przejrzystością  

Następna misja to [Misja 05](../05-agent-responses/README.md): Dostosowywanie odpowiedzi agentów dla maksymalnego efektu.

---

## 📚 Zasoby taktyczne

📖 [Microsoft Copilot Studio - Tworzenie instrukcji](https://learn.microsoft.com/microsoft-copilot-studio/authoring-instructions)  
📖 [Wskazówki dla trybu generatywnego](https://learn.microsoft.com/microsoft-copilot-studio/guidance/generative-mode-guidance)  

---

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się zapewnić dokładność, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za autorytatywne źródło. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.