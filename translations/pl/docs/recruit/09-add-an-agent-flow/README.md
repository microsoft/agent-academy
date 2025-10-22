<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cc4afa4a5a11c9d03896decfbcbd4060",
  "translation_date": "2025-10-22T00:29:19+00:00",
  "source_file": "docs/recruit/09-add-an-agent-flow/README.md",
  "language_code": "pl"
}
-->
# 🚨 Misja 09: Dodaj przepływ agenta do swojego Tematu w celu automatyzacji

## 🕵️‍♂️ KODOWA NAZWA: `OPERACJA AUTOMATYCZNA MOC`

> **⏱️ Czas trwania operacji:** `~30 minut`  

🎥 **Obejrzyj przewodnik**

[![Miniatura wideo przepływu agenta](../../../../../translated_images/video-thumbnail.ede12df9aaebcc8996680c8b6555d309b53bdf33d1b0165cae3b5173a6bcdd73.pl.jpg)](https://www.youtube.com/watch?v=vtLZJT3eBXg "Obejrzyj przewodnik na YouTube")

## 🎯 Krótki opis misji

Twój agent potrafi już rozmawiać z użytkownikami i dostarczać informacje, ale prawdziwa doskonałość operacyjna wymaga, aby Twój agent podejmował działania. Ta misja przekształci Twojego agenta konwersacyjnego w potężne narzędzie automatyzacji, wyposażając go w przepływy agenta.

Na koniec misji stworzysz kompleksową automatyzację zgłoszeń urządzeń, która zbiera dane od użytkownika za pomocą adaptacyjnej karty, pobiera dane z SharePoint, wysyła powiadomienia do menedżerów za pomocą e-maila i zapewnia płynne informacje zwrotne użytkownikowi - wszystko to zorganizowane przez Twojego agenta dzięki inteligentnej automatyzacji przepływów pracy.

## 🔎 Cele

W tej misji nauczysz się:

1. Zrozumienia, czym są przepływy agenta i jak różnią się od przepływów w chmurze Power Automate w kontekście automatyzacji.
1. Poznania kluczowych funkcji, które sprawiają, że przepływy agenta są potężne, w tym działań AI i tworzenia w języku naturalnym.
1. Eksploracji projektanta przepływów agenta i korzystania z wyrażeń do dynamicznego zarządzania danymi.
1. Tworzenia kompletnej automatyzacji zgłoszeń urządzeń, integrującej dane z SharePoint i powiadomienia e-mail.

## 🤔 Czym jest przepływ agenta?

Przepływy agenta to potężny sposób na automatyzację powtarzalnych zadań i integrację Twoich aplikacji oraz usług. Można je traktować jako uporządkowane, krok po kroku przepływy pracy, które Twój agent może wykonywać, aby automatyzować zadania lub łączyć się z innymi aplikacjami i usługami. Można je porównać do mini przepływów pracy, które pomagają Twojemu agentowi wykonywać takie czynności jak wysyłanie powiadomień, aktualizowanie rekordów czy reagowanie na zdarzenia.

W przeciwieństwie do autonomicznych agentów, które wykorzystują AI do podejmowania decyzji na bieżąco, przepływy agenta to **deterministyczne przepływy pracy** - oznacza to, że zawsze podążają tą samą ścieżką, zapewniając spójne i niezawodne wyniki.

W prostych słowach:

- Pomagają Twojemu agentowi _robić rzeczy_, a nie tylko _mówić rzeczy_ użytkownikom.
- Są wielokrotnego użytku w różnych tematach i agentach, i mogą być uruchamiane przez wiadomości użytkownika, zdarzenia lub inne aplikacje i usługi.

## 🙋🏽 Tak, ale czym różnią się od przepływów w chmurze Power Automate?

Zarówno przepływy agenta, jak i przepływy w chmurze Power Automate pomagają w automatyzacji zadań. Są zaprojektowane do różnych celów i działają w różny sposób.

### 🤖 Przepływy agenta w Copilot Studio

**Do czego służą:**

- Stworzone dla konwersacyjnych i autonomicznych agentów (poprzez instrukcje agenta) w Copilot Studio.
- Skupione na inteligentnej, opartej na AI automatyzacji, która współdziała z systemami biznesowymi.

**Dlaczego są przydatne:**

- Łatwe do tworzenia i zarządzania bezpośrednio w Copilot Studio.
- Idealne do automatyzacji zadań, które odbywają się _podczas rozmowy_ z użytkownikami, takich jak składanie wniosku o urlop.
- Nie potrzebujesz osobnej licencji Power Automate, ponieważ rozliczenie opiera się na wykorzystaniu w Copilot Studio. Może to zaoszczędzić czas i koszty dla zespołów korporacyjnych.

**Ograniczenia:**

- Nie można ich udostępniać, kopiować ani przypisywać współwłaścicieli.
- Przepływy agenta są widoczne i używane tylko w Copilot Studio.
- Obecnie wyzwalacze zdarzeń dla agentów można edytować w portalu twórców Power Automate.

### ☁️ Przepływy w chmurze Power Automate

**Do czego służą:**

- Zaprojektowane do ogólnej automatyzacji w wielu aplikacjach i usługach.
- Mogą działać niezależnie lub współpracować z przepływami agenta.

**Dlaczego są przydatne:**

- Oferują szeroką gamę konektorów.
- Idealne do automatyzacji procesów poza agentami.
- Mogą być udostępniane, ponownie używane i zarządzane w zespołach.

**Wymagania:**

- Potrzebujesz licencji Power Automate, aby z nich korzystać.

### 📗 Podsumowanie

| Użyj tego | Kiedy chcesz |
| :- | :- |
| Przepływy agenta | Automatyzować zadania wewnątrz agenta, korzystać z AI i trzymać wszystko w Copilot Studio |  
| Przepływy w chmurze Power Automate | Automatyzować w aplikacjach i usługach lub budować przepływy poza agentami |

## 👍🏻 Dlaczego warto korzystać z przepływów agenta

Przepływy agenta zawsze podążają ustaloną ścieżką - robią to samo za każdym razem, gdy otrzymują te same dane wejściowe.

To sprawia, że są:

- **Niezawodne** - możesz być pewien, że będą działać tak samo za każdym razem.
- **Przewidywalne** - wiesz, jaki wynik uzyskasz po uruchomieniu przepływu.
- **Oparte na regułach** - podążają za krokami, które definiujesz.

Inne korzyści to:

- **Automatyzacja** - umożliwia Twojemu agentowi obsługę powtarzalnych zadań, takich jak składanie formularzy czy wysyłanie powiadomień.
- **Połączenie** - łączenie z ponad 1400 konektorami, takimi jak ServiceNow, SharePoint, Salesforce. Możesz również stworzyć własny niestandardowy konektor.
- **Ścisła integracja** - przepływy agenta są częścią logiki agenta, są uruchamiane bezpośrednio przez wiadomości użytkownika lub działania w rozmowie.
- **Skalowalność** - możliwość ponownego użycia przepływów w wielu agentach lub scenariuszach.
- **Bez kodu lub mało kodu** - możesz budować przepływy za pomocą języka naturalnego lub wizualnego projektanta.
- **Platforma all-in-one** - możesz projektować, testować i wdrażać przepływy agenta w jednym miejscu - Copilot Studio. Nie ma potrzeby przełączania się między platformami.

## 🏄🏻‍♂️ Jak przepływy agenta ulepszają Twojego agenta?

Przepływy agenta rozszerzają możliwości Twojego agenta poza "rozmowę" z użytkownikami. Pozwalają mu podejmować działania i współdziałać z systemami.

Załóżmy, że pracujesz w dziale finansowym i otrzymujesz wiele faktur od dostawców. Zwykle ktoś musi przeczytać każdą fakturę, wyciągnąć ważne szczegóły - kwotę, datę, od kogo pochodzi - i sprawdzić, czy wszystko zgadza się z Twoimi zapisami. Następnie wysłać ją do odpowiedniej osoby do zatwierdzenia. To zajmuje czas i wymaga wysiłku.

Dzięki przepływom agenta w Copilot Studio możesz zautomatyzować ten proces. Gdy tylko faktura wpłynie, agent:

1. Odczytuje dokument za pomocą inteligentnego przetwarzania dokumentów, aby znaleźć kluczowe informacje.
1. Sprawdza szczegóły w danych przedsiębiorstwa, aby upewnić się, że wszystko wygląda poprawnie.
1. Przekazuje ją do zatwierdzenia odpowiedniej osobie/osobom.

To oszczędza czas, zmniejsza liczbę błędów i sprawia, że cały proces jest znacznie płynniejszy.

### Pomyśl o tym w ten sposób

- **Agenci**: inteligentni decydenci
- **Przepływy agenta**: niezawodni wykonawcy

### Dlaczego to ma znaczenie

- Otrzymujesz najlepsze z obu światów: niezawodną automatyzację i elastyczne AI.
- Łatwo jest budować i aktualizować przepływy w miarę zmieniających się potrzeb biznesowych.
- Możesz skalować automatyzację w zespołach.

## 🔌 Kluczowe funkcje, które sprawiają, że przepływy agenta są potężne

1. **Tworzenie w języku naturalnym**
    - Możesz opisać, co chcesz, aby przepływ robił, w prostym języku.
    - Copilot rozumie Twoje zamiary i buduje przepływ za Ciebie.
    - Nie musisz pisać kodu - wystarczy wyjaśnić swój pomysł.

1. **Działania AI**

    Wykorzystaj AI do:

    - Odczytywania i rozumienia dokumentów lub obrazów.
    - Podsumowywania długich treści w krótkie, użyteczne odpowiedzi.
    - Tworzenia inteligentnych rekomendacji lub decyzji.

1. **Działania generatywne**
    - Pozwalają przepływowi dostosowywać się w czasie rzeczywistym.
    - Agent może planować i dostosowywać kroki na podstawie zmieniających się informacji.

1. **Działania integracyjne**
    - Połącz swój przepływ z innymi narzędziami, takimi jak Outlook, Microsoft Teams, ServiceNow, SharePoint i inne aplikacje oraz usługi, korzystając z ponad 1400 wbudowanych konektorów lub własnego niestandardowego konektora.
    - To pomaga Twojemu agentowi współpracować z aplikacjami, których Twój zespół już używa.

1. **Człowiek w pętli**
    - Dodaj kroki zatwierdzania, w których osoba musi coś przejrzeć lub potwierdzić.
    - [Zaawansowane zatwierdzenia](https://learn.microsoft.com/microsoft-copilot-studio/flows-advanced-approvals?WT.mc_id=power-172621-ebenitez) wspierają przypomnienia, delegowanie i zatwierdzenia wieloetapowe.

## ⚙️ Jak działają

1. **Wyzwalacz**

    Zdarzenie rozpoczyna przepływ - na przykład użytkownik zadaje pytanie, uruchamia przepływ z tematu, ustalony czas lub zdarzenie w innym systemie.

1. **Działania**

    Są to kroki, które agent wykonuje następnie - wysyłanie e-maila, wywoływanie API, aktualizowanie zgłoszenia w ServiceNow.

## 🧶 Jak stworzyć przepływ agenta

1. **Język naturalny**: opisz, co chcesz, aby agent zrobił, a Copilot zbuduje to za Ciebie.
1. **Płótno projektanta**: przeciągaj i upuszczaj działania, warunki i pętle w projektancie przepływów agenta, aby stworzyć swój przepływ.

## 🎨 Czym jest projektant przepływów agenta?

To narzędzie wizualne w Copilot Studio, które pomaga budować, edytować i zarządzać przepływami agenta, które dostarczają instrukcje krok po kroku, które Twój agent wykonuje, aby zrealizować zadania. Jest zaprojektowane tak, aby było łatwe w użyciu, nawet jeśli jesteś nowicjuszem w przepływach agenta.

### Kluczowe funkcje projektanta przepływów agenta

1. **Wizualne płótno**
    - Możesz zobaczyć cały swój przepływ rozłożony jak diagram.
    - Łatwo powiększać/pomniejszać, dopasowywać widok lub korzystać z minimapy, aby nawigować po dużych przepływach.

1. **Dodawanie i usuwanie działań**
    - Kliknij przycisk _plus (+)_, aby dodać nowe działanie, takie jak wysłanie wiadomości lub zaktualizowanie elementu na liście SharePoint.
    - Możesz wyszukiwać działania z konektorów i konfigurować je za pomocą ustawień.
    - Aby usunąć działanie, kliknij _trzy kropki (⋮)_ i wybierz _Usuń_.

1. **Sprawdzanie parametrów**
    - Kliknij dowolne działanie, aby wyświetlić lub edytować jego ustawienia, zwane _parametrami_.
    - Możesz wprowadzać wartości ręcznie lub używać _wyrażeń_, aby uczynić je dynamicznymi.

1. **Historia wersji**
    - Za każdym razem, gdy zapisujesz swój przepływ, zapisywana jest jego wersja.
    - Możesz wrócić i przejrzeć lub przywrócić poprzednią wersję, jeśli zajdzie taka potrzeba.

1. **Sprawdzanie błędów**
    - _Flow Checker_ wskazuje wszelkie błędy.
    - Wszystkie błędy muszą zostać rozwiązane przed opublikowaniem przepływu.

1. **Publikowanie i testowanie**
    - Gdy Twój przepływ jest wolny od błędów, opublikuj go, aby stał się aktywny.
    - Użyj funkcji _Test_, aby uruchomić przepływ ręcznie lub automatycznie i sprawdzić, czy działa zgodnie z oczekiwaniami.

### Dlaczego warto korzystać z projektanta przepływów agenta?

- **Wizualny i intuicyjny** - możesz budować przepływy, przeciągając i klikając.
- **Bezpieczne eksperymentowanie** - historia wersji pozwala cofnąć zmiany.
- **Wbudowane testowanie** - pomaga upewnić się, że wszystko działa przed uruchomieniem.

## 🔤 Wspomniałeś o _wyrażeniach_ - czym są wyrażenia?

Wyrażenia to małe formuły lub polecenia, które pomagają przepływowi agenta pracować z danymi. Używasz ich do obliczania wartości, formatowania tekstu, podejmowania decyzji lub wyciągania konkretnych informacji z danych wejściowych.

### Dlaczego warto używać wyrażeń?

Wyrażenia pozwalają:

- **Dostosować sposób obsługi danych** - łączyć nazwy, formatować daty.
- **Podejmować decyzje** - jeśli wartość jest większa niż 10, wykonaj coś.
- **Przekształcać dane** - zmieniać tekst na małe litery, wyciągać część ciągu znaków.
- **Automatyzować logikę** - bez pisania pełnego kodu.

### Jak wyglądają wyrażenia?

Wyrażenia używają funkcji. Posłużę się wyjaśnieniem funkcji od byłego MVP Microsoft, Jerry'ego Weinstocka.

!!! cytat
    Funkcje to wbudowana logika do przekształcania danych, zarówno poprzez proste, jak i złożone operacje w Twoim wyrażeniu.

Funkcje umożliwiają budowanie wyrażeń bez konieczności pisania kodu.

Lubię opisywać funkcję w przepływach agenta jako coś podobnego do funkcji w Excelu. Możesz wykonać operację na danych, aby przekształcić je w pożądany wynik. Tworząc formułę w Excelu, wybierasz wartość wejściową z komórek w tabeli lub zakresu, a następnie stosujesz funkcje, aby manipulować wynikiem danych. Przykładem jest użycie funkcji `COUNT`, aby obliczyć liczbę komórek zawierających liczby w zakresie.

W przepływach agenta, zamiast odwoływać się do danych z komórek w tabeli, odwołujesz się do wyników danych z wyzwalacza lub działań podczas budowania swoich wyrażeń. Kontynuując poprzedni przykład, użyj funkcji `length`, aby uzyskać liczbę elementów zwróconych z działania konektora _Get items_ w SharePoint.

### Dlaczego funkcje mają znaczenie?

Używanie funkcji sprawia, że przepływy agenta są:

- **Inteligentniejsze** - mogą reagować na różne dane wejściowe lub warunki.
- **Elastyczne** - możesz dostosować sposób obsługi danych.
- **Efektywne** - unikasz ręcznych kroków, automatyzując logikę.

### Najbardziej przydatne funkcje

Poniżej znajdują się najczęściej używane funkcje w przepływach agenta. Pełną listę funkcji znajdziesz w [pr
- Przykład: `addDays(utcNow(), 7)` wynik to 7 dni od teraz.

- `formatDateTime()` - Formatuje datę w czytelny ciąg znaków.
      - Przykład: Poniedziałek, 7 lipca 2025

#### ✅ Logiczne

- `if()` - Wykonuje jedną wartość, jeśli warunek jest prawdziwy, inną jeśli fałszywy.
      - Przykład: `if(score > 50, 'Pass', 'Fail')`

- `equals()` - Sprawdza, czy dwie wartości są takie same.

- `and()`, `or()`, `not()` - Łączy wiele warunków.

#### 🪣 Inne przydatne funkcje

- `coalesce()` - Zwraca pierwszą niepustą wartość.
      - Przydatne jako wartości domyślne lub zapasowe.

- `guid()` - Generuje unikalny identyfikator.
      - Przydatne do śledzenia lub logowania.

- `length()` - Liczy, ile znaków lub elementów znajduje się w ciągu znaków lub tablicy.

## ⭐ Najlepsze praktyki

Oto kilka najlepszych praktyk dotyczących budowania przepływów agentów w Copilot Studio.

1. **Zacznij od prostych rzeczy i buduj stopniowo**

    - Rozpocznij od małego, jasnego zadania, takiego jak wysłanie wiadomości.
    - Dodawaj kolejne kroki po przetestowaniu podstaw automatyzacji.

1. **Używaj jasnych i opisowych nazw akcji**

    - Oznaczaj każdy krok w sposób jasny, abyś Ty i Twój zespół wiedzieli, co robi.
    - Przykład: zamiast domyślnej nazwy "Update item" dla akcji w konektorze SharePoint, zmień nazwę na to, co aktualizuje, np. "Update device status."

1. **Sprawdź błędy przed publikacją**

    - Użyj **flow checker**, aby znaleźć i naprawić problemy.
    - Nie możesz opublikować przepływów, jeśli są błędy, więc spróbuj je rozwiązać, gdy się pojawią.

1. **Dokładnie przetestuj swój przepływ**

    - To, że zapisuje się i publikuje, nie oznacza, że działa zgodnie z oczekiwaniami.
    - Użyj funkcji _Test_, aby uruchomić przepływ ręcznie lub automatycznie i sprawdzić wyniki.

1. **Używaj historii wersji**

    - Często zapisuj swój przepływ, aby móc wrócić do wcześniejszych wersji, jeśli zajdzie taka potrzeba.
    - Możesz przeglądać i przywracać poprzednie wersje za pomocą panelu _Version History_.

1. **Mądrze korzystaj z parametrów i wyrażeń**

    - Konfigurując akcje, używaj parametrów, aby uczynić przepływ dynamicznym.
    - Możesz wprowadzać wartości ręcznie, używać wyrażeń do ich obliczania lub łączyć je z wartościami z wcześniejszych akcji za pomocą narzędzia _dynamic content_.

1. **Usuń nieużywane akcje**

    - Jeśli dodasz akcję i później zdecydujesz, że jej nie potrzebujesz, usuń ją, aby utrzymać przepływ w czystości.

## 🧪 Laboratorium 09 - Dodaj przepływ agenta do automatyzacji i ulepsz możliwości tematu

Teraz nauczymy się, jak ulepszyć nasz temat za pomocą adaptacyjnych kart oraz wykorzystać zaawansowane funkcje tematów i węzłów.

- [9.1 Utwórz przepływ agenta](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.2 Dodaj przepływ agenta do tematu](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.3 Zaktualizuj temat "Request device" o kilka węzłów dla lepszego doświadczenia użytkownika](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.4 Przetestuj agenta w kilku scenariuszach](../../../../../docs/recruit/09-add-an-agent-flow)

### ✨ Przypadek użycia

**Jako** menedżer pracownika

**Chcę** otrzymywać prośby o urządzenia

**Aby** móc przeglądać urządzenia zamówione przez pracownika.

Zaczynajmy!

### Wymagania wstępne

1. **Lista SharePoint**

    Będziemy korzystać z listy **Devices** w SharePoint z [Lekcji 00 - Konfiguracja kursu - Krok 3: Utwórz nową witrynę SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Jeśli nie skonfigurowałeś listy **Devices** w SharePoint, wróć do [Lekcji 00 - Konfiguracja kursu - Krok 3: Utwórz nową witrynę SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. **Agent pomocy technicznej Contoso**

    Użyjemy tego samego agenta, który został utworzony wcześniej w [Lekcji 06 - Utwórz niestandardowego agenta za pomocą języka naturalnego z Copilot i powiąż go z Twoimi danymi](../06-create-agent-from-conversation/README.md).

### 9.1 Utwórz przepływ agenta

W tym ćwiczeniu utworzymy przepływ agenta, który pobierze element SharePoint wybranego urządzenia i wyśle e-mail do menedżera z szczegółami urządzenia.

1. W temacie **Request device** przewiń w dół do węzła **Ask with adaptive card** i dodaj nowy węzeł. Wybierz **Add a tool**, a następnie w zakładce **Basic tools** w wysuwanym panelu wybierz **New Agent flow**.

    ![Dodaj nowy przepływ agenta](../../../../../translated_images/9.1_01_AddNewAgentFlow.2b9078604a054d1f022f9c73adaf10fe430e81875ec8717a7f70ef7b05f11c15.pl.png)

1. Załaduje się **Designer** przepływów agentów z wyzwalaczem i akcją.

    - **Trigger** - Gdy agent wywoła przepływ
        - Wyzwala przepływ z agenta Copilot Studio.

    - **Action** - Odpowiedz agentowi
        - Wysyła odpowiedź, która może zawierać wartości wyjściowe z powrotem do agenta Copilot Studio.

    Wybierz wyzwalacz.

    ![Wybierz wyzwalacz](../../../../../translated_images/9.1_02_SelectTrigger.92dc20442add764c8aa4b7f737f28416a3223e4471562462ed6dcba2dc7c7936.pl.png)

1. Następnie dodamy kilka wejść dla przepływu agenta.

    - `DeviceSharePointId` - będzie przechowywać wartość, ID, elementu SharePoint. Ta wartość ID jest wynikiem węzła Ask with adaptive card, w którym użytkownik wybrał urządzenie.

    - `User` - będzie to nazwa użytkownika, która pochodzi z zmiennej systemowej agenta.

    - `AdditionalComments` - będzie to komentarz wprowadzony przez użytkownika, który jest wynikiem węzła Ask with adaptive card.

    Najpierw dodamy `DeviceSharePointId` jako wejście dla naszego wyzwalacza. Wybierz **+ Add an input**.

    ![Dodaj wejście](../../../../../translated_images/9.1_03_AddInput.fd1e0a99ecb5e20f3a518cb23fc0d22c6db1435c5ffb2e183fce3b8a056287bb.pl.png)

1. Dla typu wejścia użytkownika wybierz **Text**.

    ![Wybierz Text](../../../../../translated_images/9.1_04_SelectText.47ca776822ec5a6c1339c012d51e0eb6eac6bf8315d4ac6f25498b10ada16df9.pl.png)

1. Dla nazwy wejścia wprowadź następujące.

    ```text
    DeviceSharePointId
    ```

    ![Wejście DeviceSharePointId](../../../../../translated_images/9.1_05_DeviceSharePointIdInput.caf77f8eb60a1b8649ea8b0abf05dfce9fa4bef9d9c465cd8906395e5b44842e.pl.png)

1. Teraz dodamy drugie wejście, `User`. Powtórz te same kroki, wybierz **+ Add an input** i wybierz **Text**.

    ![Dodaj wejście](../../../../../translated_images/9.1_06_AddInput.3ca4bff9991b6e8a331bd909ff58038387696ce7b6ee7a932a88316aff41bc57.pl.png)

1. Dla nazwy wejścia wprowadź następujące.

    ```text
    User
    ```

    ![Wejście User](../../../../../translated_images/9.1_07_UserInput.16b2405f2d5744ea14a6a67b69539ba24719aaf642ddfc2b281e784d74d8c1ea.pl.png)

1. Teraz dodamy trzecie wejście, `AdditionalComments`. Powtórz te same kroki, wybierz **+ Add an input** i wybierz **Text**.

    ![Dodaj wejście](../../../../../translated_images/9.1_08_AddInput.4685bb77618e6d9cfca7a42a0945d10f59825b1ca42de372dcf07c9170451680.pl.png)

1. Dla nazwy wejścia wprowadź następujące.

    ```text
    AdditionalComments
    ```

    ![Wejście AdditionalComments](../../../../../translated_images/9.1_09_AdditionalComments.a4587b59b85450ca0566615c9473132dd6447e6c7513e4926942655aa0e80195.pl.png)

1. Dla wejścia `AdditionalComments` zaktualizujemy je, aby było opcjonalne. Wybierz **ikonę wielokropka (...)** i wybierz **Make the field optional**.

    ![Ustaw pole jako opcjonalne](../../../../../translated_images/9.1_10_Optional.753bd03817c2eb37bb44a7bfd7d29314aa7109cde02e3f619c01c42bc9170b71.pl.png)

1. Świetna robota! Wyzwalacz został skonfigurowany, kontynuujmy. Wybierz **ikonę plus +** pod wyzwalaczem, aby wstawić nową akcję.

    ![Dodaj akcję](../../../../../translated_images/9.1_11_AddAction.86c14acd1ce22e99b7244e0001f0039362ff6ac3efafe03956788aaa31e705af.pl.png)

1. Pojawi się **Actions pane**, gdzie możesz zobaczyć akcje z ponad 1400 wbudowanych konektorów do usług Microsoft i zewnętrznych. W polu wyszukiwania wprowadź następujące,

    ```text
    Get item
    ```

    Na liście wyników wyszukiwania pojawią się akcje. Wybierz akcję **Get item** z konektora **SharePoint**.

    ![Akcja Get item](../../../../../translated_images/9.1_12_AddGetItemAction.434cdcb822e1f72993fc4a0c0ad753e1220456f9dab8fc307d42f5711071d45b.pl.png)

1. Teraz możemy rozpocząć konfigurację akcji **Get item**.

    Wybierz **ikonę wielokropka (...)** w akcji **Get item**.

    ![Wybierz ikonę wielokropka](../../../../../translated_images/9.1_13_SelectEllipsis.88bf304067f3103825f183f8962634af831460541290533e5670f4c014a97c46.pl.png)

1. Wybierz **Rename**.

    ![Wybierz Rename](../../../../../translated_images/9.1_14_SelectRename.74d99c883418b7dbf58758304976cac1d0f2afd30e4cd1992830f00775a46b18.pl.png)

1. Zmień nazwę akcji na,

    ```text
    Get Device
    ```

    ![Zmień nazwę akcji](../../../../../translated_images/9.1_15_RenameAction.ff64b79f6e6603ae89f272f91d84ff4432c04ba103c401a2808a767e3ceb5617.pl.png)

1. W polu **Site Address** wybierz **adres witryny** witryny SharePoint Contoso IT utworzonej w [Lekcji 00 - Konfiguracja kursu - Krok 3: Utwórz nową witrynę SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    W polu **List Name** wybierz listę **Devices** w SharePoint.

    ![Parametry wejściowe](../../../../../translated_images/9.1_16_SharePointSiteAndListParameters.af6e0b112eb4bfb210f9259da02b459097a06307afa6ca269cb33aa9ecc1c1e4.pl.png)

1. W polu **Id** wybierz **ikonę błyskawicy** lub **ikonę fx** po prawej stronie.

    ![Dynamic content picker](../../../../../translated_images/9.1_17_InsertExpressionIcon.6e250bb84e7b8884de7b2052005f7ff3cd95f2c28671d2da7965001b3f621902.pl.png)

1. W zakładce **Dynamic content** wysuwanego panelu wprowadź następujące,

    ```text
    sharepoint
    ```

    Wyniki wyszukiwania pokażą parametry wejściowe pasujące do wyszukiwanej wartości. Wybierz parametr **DeviceSharePointId** z wyzwalacza.

    Następnie wybierz **Add**, aby dodać dynamiczny parametr wejściowy do pola **Id** akcji.

    ![Wybierz wejście DeviceSharePointId](../../../../../translated_images/9.1_18_DeviceSharePointId.b9be8e7c3c6b0ab710a8f662e62a0ec0133a530f6877b6cea3c48acc8022fec5.pl.png)

1. Dynamiczny parametr wejściowy z wyzwalacza jest teraz odniesiony w polu **Id** akcji. Następnie zaktualizujemy jeden z zaawansowanych parametrów. Wybierz **Show all**, aby zobaczyć zaawansowane parametry.

    ![Wyświetl zaawansowane parametry](../../../../../translated_images/9.1_19_AdvancedParameters.4bb8e0c11e7864625ad6c30ab1b9021d367cd77374c56985df7b3d43845a1883.pl.png)

1. Parametr **Limit Columns by View** zostanie wyświetlony i domyślnie ustawiony na **Use all columns (Do not limit)**. Zaktualizujemy tę wartość na widok, aby ograniczyć kolumny zwracane w odpowiedzi akcji. Wybierz parametr **Limit Columns by View**, aby zobaczyć listę widoków.

    ![Wybierz parametr](../../../../../translated_images/9.1_20_LimitColumnsByView.4d30f532f1e1033323d39df5c9b8e803788ea785ed58de2efca2faa5df4b26fc.pl.png)

1. Wybierz widok **All Items**.

    ![Wybierz widok All Items](../../../../../translated_images/9.1_21_SelectView.d180e83d5e62f5fb6994a7071d5e6ce8f88143d8cc833cb55b208c6fee41bc02.pl.png)

1. Wybierz **ikonę plus +** pod akcją _Get Device_, aby wstawić nową akcję.

    ![Dodaj nową akcję](../../../../../translated_images/9.1_22_AddAnAction.904b79142347fe927168036ade55d842fa088deef53710944272c681421e0e84.pl.png)

1. W polu wyszukiwania wprowadź następujące,

    ```text
    send an email
    ```

    Na liście wyników wyszukiwania pojawią się akcje. Wybierz akcję **Send an email (V2)** z konektora **Office 365 Outlook**.

    ![Akcja Send an email](../../../../../translated_images/9.1_23_SendAnEmail.f1019365131658b0e71b5b58b57d7d8b3f3a0c670ddb3cca0838bf0b4f8cd354.pl.png)

1. Następnie musimy utworzyć połączenie dla akcji konektora. Wybierz **Sign in**.

    ![Utwórz połączenie](../../../../../translated_images/9.1_24_CreateConnection.9e968ad4de9d13d81e95779c4fa60809fd40de5f65dbd014f1dc39663c935806.pl.png)

1. Wybierz swoje zalogowane konto użytkownika.

    ![Wybierz konto użytkownika](../../../../../translated_images/9.1_25_SelectUserAccount.f3c96ac1a377c4b42a6301ba38c21469eb7bd3f48633f04200f1610902f8bdbe.pl.png)

1. Wybierz **Allow access**. Połączenie zostało teraz utworzone.

    ![Wybierz Allow access](../../../../../translated_images/9.1_26_AllowAccess.1abcaea31b9846279cafafd7160baea6bec60cdfac8224df7082ceee3ef22a26.pl.png)

1. Zmień nazwę akcji na następującą,

    ```text
    Send an email to manager
    ```

    Następnie zdefiniuj parametry wejściowe dla naszej akcji.

    Dla parametru wejściowego **To** wybierz siebie. Zazwyczaj byłby to Twój menedżer lub używalibyśmy innej akcji, która pobiera dane Twojego menedżera na podstawie Twojego profilu Entra ID, ale na potrzeby tej lekcji wybierz siebie.

    Dla parametru wejściowego **Subject** wprowadź następujące,

    ```text
    Request type: new device
    ```

    Dla parametru wejściowego **Body** wprowadź następujące,

    ```text
    Hi,

    New device requested from

    Manufacturer:
    Model:
    Link to item in SharePoint
    Additional comments from:

    This is an automated email from Contoso Helpdesk Copilot
    ```

    ![Zmień nazwę akcji i skonfiguruj parametry wejściowe](../../../../../translated_images/9.1_27_RenameAndConfigureParameters.c3d29a3481fb5c0240cca85db4119387e6b750546ed12e2af4a9ac62d7454f89.pl.png)

1. Następnie zaktualizujemy parametr wejściowy **Body**, dodając odniesienia do dynamicznych parametrów wejściowych z **wyzwalacza** lub akcji **Get item**. Wprowadź spację po drugiej linii, ponieważ wstawimy nazwę użytkownika z wejścia wyzwalacza, **User**.

    Wybierz **ikonę błyskawicy** lub **ikonę fx** po prawej stronie.

    ![Dodaj wejście User jako dynamiczny parametr](../../../../../translated_images/9.1_28_AddUserInput.f38d3df648faef75f1985bdcc23db16e197ccb1ddc015210c43bbb2569fcf654.pl.png)

1. W zakładce **Dynamic content** wysuwanego panelu wybierz wejście **User** z wyzwalacza.

    Wybierz **Add**, aby dodać dynamiczny parametr wejściowy **User** do parametru **Body** akcji.

    ![Wybierz wejście User](../../../../../translated_images/9.1_29_SelectUserInput.4efc79f52d74fa7ae13132ea13f7d51b3f4aab6413afc41a8354c5e59852b9fc.pl.png)
1. Dynamiczne dane wejściowe z wyzwalacza są teraz odwoływane w parametrze **Body** akcji. Powtórzymy to samo dla pozostałych linii w treści wiadomości e-mail.

    ![Dodano dane wejściowe użytkownika](../../../../../translated_images/9.1_30_UserInputAdded.905ec0489e4f1bbe7cc071826050834aa1e5acf53f8a65ad59532ea13b81c607.pl.png)

1. Kliknij w przestrzeń obok `Manufacturer:`. Wybierz ikonę **pioruna** lub **fx** po prawej stronie.

    W zakładce **Dynamic content** w wysuwanym panelu, wpisz następujące w polu wyszukiwania,

    ```text
    manufacturer
    ```

    Wybierz dane wejściowe **Manufacturer value** z wyzwalacza i kliknij **Add**.

    ![Dodaj dane wejściowe Manufacturer value jako dynamiczną zawartość](../../../../../translated_images/9.1_31_ManufacturerValueAdded.db2cf35a35a20590d80d7f0191d771a045bf55e40ce98982d0e099588e260712.pl.png)

1. Kliknij w przestrzeń obok `Model:`. Wybierz ikonę **pioruna** lub **fx** po prawej stronie.

    W zakładce **Dynamic content** w wysuwanym panelu, wpisz następujące w polu wyszukiwania,

    ```text
    model
    ```

    Wybierz dane wejściowe **Model** z akcji **Get item** i kliknij **Add**.

    ![Dodaj dane wejściowe Model jako dynamiczną zawartość](../../../../../translated_images/9.1_32_ModelAdded.ff9d858648ddb85fe70eaaafa6e23d0560500e7327ccb29ee56ecac0d8d36cab.pl.png)

1. Dla tekstu `Link to item in SharePoint` zaktualizujemy go, aby był hiperłączem w treści wiadomości e-mail. Kliknij na początku linii i wybierz ikonę **pioruna** lub **fx** po prawej stronie.

    ![Dodaj dynamiczną zawartość](../../../../../translated_images/9.1_33_AddDynamicContent.c662d682377af82adc52de18e05baf9b6aa5a972882dcf6274f3979f14641627.pl.png)

1. Kliknij po tagu HTML anchor i wybierz ikonę **pioruna** lub **fx** po prawej stronie.

    W zakładce **Dynamic content** w wysuwanym panelu, wpisz następujące w polu wyszukiwania,

    ```text
    link to item
    ```

    Wybierz dane wejściowe **Link to item** z akcji **Get item** i kliknij **Add**.

    ![Dodaj Link to item jako dynamiczną zawartość](../../../../../translated_images/9.1_34_AddLinkToItem.6827bd3bad484f7382d060435bb0ef45e9bb1c3ad4774529559bb4c5f9bbca8c.pl.png)

1. Musimy przełączyć się na edytor HTML, wybierając ikonę **&lt;/&gt;**.

    ![Dodaj dane wejściowe użytkownika](../../../../../translated_images/9.1_35_ToggleCodeView.ae3a9caf213f2c6366487e10092ad1fad3494f110936219258d842c23e7f46d9.pl.png)

1. Edytor HTML jest teraz włączony. Kliknij przed tekstem `Link to item in SharePoint`, dodaj tag HTML anchor, aby utworzyć hiperłącze. Skopiuj i wklej następujące.

    ```text
    <a href="
    ```

    ![Tag HTML](../../../../../translated_images/9.1_36_AddHTMLTag.146220ae5c33eaf9915c393c37d62b9d4b258413e9f4dc42a1ab005437669443.pl.png)

1. Dynamiczne dane wejściowe **Link to item** są teraz odwoływane w parametrze **Body**. Kliknij po danych wejściowych **Link to item**, skopiuj i wklej następujące.

    ```text
    ">
    ```

    ![Tag HTML](../../../../../translated_images/9.1_37_AddHTMLTag.48f73b302f6a84bb6a51e0666fd30baf1f8d9d906947d44dc4095ededed18a2d.pl.png)

1. Kliknij po tekście `Link to item in SharePoint`, zamknij tag HTML anchor. Skopiuj i wklej następujące.

    ```text
    </a>
    ```

    ![Tag HTML](../../../../../translated_images/9.1_38_AddHTMLTag.47d2f0521e6aba9d609bfe65d86ebae5786e4ad5465fefb7ae0370db6e924c96.pl.png)

1. Wybierz ikonę **&lt;/&gt;**, aby przełączyć widok kodu.

    ![Wyłącz widok kodu](../../../../../translated_images/9.1_39_ToggleCodeView.88606eb37d702a686904b2dd8943fcf144cec462b37ee781e8ee0415e62bd951.pl.png)

1. Następnie ponownie wybierz ikonę **&lt;/&gt;**, aby przełączyć widok kodu.

    ![Przełącz z powrotem na widok kodu](../../../../../translated_images/9.1_40_ToggleCodeViewAgain.32da9b9804adbbfaf8d85bdaa6fa51d2ae5fc1fbb97f75084813972c66d0c4d9.pl.png)

1. Zauważ, że pojawiło się kilka dodatkowych znaków `&lt;br&gt;`. Usuń te znaki.

    ![Usuń znaki](../../../../../translated_images/9.1_41_DeleteCharacters.f1ef3830b186c2cd9974ea05e336c83c0706d72ab1010d06283716dc4e982875.pl.png)

1. Skończyliśmy dodawanie hiperłącza do treści wiadomości e-mail 😎 Wybierz ikonę **&lt;/&gt;**, aby przełączyć widok kodu.

    ![Tag HTML uporządkowany](../../../../../translated_images/9.1_42_HTMLTagTidiedUp.1b27fa2c4dc65c3f1a7151abcf6e388f64cb83745b10cd22769c1f9af3421fc6.pl.png)

1. Kliknij po tekście `Additional comments from` przed znakiem dwukropka i wybierz ikonę **pioruna** lub **fx** po prawej stronie.

    ![Dodaj parametr użytkownika](../../../../../translated_images/9.1_43_AddUserInput.6f0d26739c1b9039383aa37cc46fa1149a269bd4268fb54b897d144afc49c515.pl.png)

1. W zakładce **Dynamic content** w wysuwanym panelu, wpisz następujące w polu wyszukiwania,

    ```text
    user
    ```

    Wybierz parametr **User** z wyzwalacza i kliknij **Add**.

    ![Dodaj parametr User jako dynamiczną zawartość](../../../../../translated_images/9.1_44_AddUserDynamicContent.bb7c76e92650001207712b3447d3275d584f3ebf739034369869c3facf38eacf.pl.png)

1. Teraz wstawimy wyrażenie, które wyświetli wartość Additional Comments, jeśli została podana przez użytkownika w węźle **Ask an adaptive card**, w przeciwnym razie wyświetli "None", jeśli użytkownik nie podał żadnych komentarzy.

    Kliknij po dwukropku i wybierz ikonę **pioruna** lub **fx** po prawej stronie.

    ![Dodaj wyrażenie](../../../../../translated_images/9.1_45_AddExpression.c4c92dc4a56fab75c78ec2c5087682521e562264c1710c8dfaa24134adc3a112.pl.png)

1. W zakładce **Function** w wysuwanym panelu i w polu wyrażenia powyżej, wpisz następujące,

    ```text
    if(empty())
    ```

    To wyrażenie używa funkcji `if` dla instrukcji if-else.

    Następna funkcja to `empty`, która sprawdza, czy wartość istnieje, czy nie w parametrze string. Parametr string, do którego się odwołujemy, to wartość parametru wejściowego `AdditionalComments` z wyzwalacza.

    ![Jeśli puste](../../../../../translated_images/9.1_46_IfEmptyFunctions.95d21ad01f6f7c290cb8d5a57ccbca9c9532df7ce57f800554dea541d503ddc6.pl.png)

1. Następnie kliknij **wewnątrz nawiasów** po funkcji `empty`. Wstawimy parametr wejściowy `AdditionalComments` z wyzwalacza.

    Wybierz zakładkę **Dynamic content**. Wpisz następujące w polu wyszukiwania,

    ```text
    Additional
    ```

    Przewiń w dół panelu i wybierz dane wejściowe **AdditionalComments** z wyzwalacza. Parametr zostanie teraz dodany jako parametr string w wyrażeniu.

    ![Dodaj AdditionalComments jako dynamiczną zawartość](../../../../../translated_images/9.1_47_AdditionalCommentsDynamicContent.f9632f09779888c18a58df8e97ef677ed885b0eaa88c252b13b22c0e4c67495b.pl.png)

1. Następnie zdefiniujemy logikę **_true_**, gdzie jeśli parametr string `AdditionalComments` jest pusty, chcemy wyświetlić tekst `None`.

    Po nawiasie zamykającym parametr string, wpisz następujące,

    ```text
    , 'None',
    ```

    ![Logika true](../../../../../translated_images/9.1_48_None.31978299f29e07ef3257eedd5dcee09c8675f8b3f61aea8102900118e0b6ca70.pl.png)

1. Na koniec zdefiniujemy logikę **_false_**, gdzie jeśli parametr string `AdditionalComments` nie jest pusty, chcemy wyświetlić wartość parametru wejściowego **AdditionalComments** z naszego wyzwalacza.

    > Przypomnienie: ta wartość pochodzi z pola Additional Comments w adaptacyjnej karcie w węźle **Ask with adaptive card** w temacie **Request device**.

    Po przecinku po naszej logice **_true_**, wybierz zakładkę **Dynamic content**. Wpisz następujące w polu wyszukiwania,

    ```text
    Additional
    ```

    Przewiń w dół panelu i wybierz dane wejściowe **AdditionalComments** z wyzwalacza. Parametr zostanie teraz dodany jako parametr string w wyrażeniu.

    Teraz dodaj go do naszego parametru **Body**, wybierając **Add**.

    ![Logika false](../../../../../translated_images/9.1_49_AdditionalCommentsDynamicContent.d42c7fc29f65d901bb26dcbc13408c387633ea185cdd79c35d6439231b7363d5.pl.png)

1. Świetnie, nasze wyrażenie jest kompletne! Wyrażenie zostało teraz dodane do parametru **Body**. Na koniec sformatuj ostatnią linię kursywą.

    ![Kursywa](../../../../../translated_images/9.1_50_Italics.a0c01aa33ef4e83167e1fbc21c1d833f95addd60c8f531411cf9c58a96a31b02.pl.png)

1. Teraz zaktualizujemy akcję **Respond to the agent**, aby przesłać wartość parametru **Model value** z akcji **Get item** z powrotem do agenta.

    Przytrzymaj lewy klawisz myszy i przesuń w górę w projektancie, aby zobaczyć akcję **Respond to the agent**.

    Wybierz akcję **Respond to the agent** i wybierz **Text** jako typ wyjścia.

    ![Wybierz wyjście Text](../../../../../translated_images/9.1_51_RespondToTheAgentAction.4c682a440e19a0fcd6d6f51ef9cdbfe76f482a39d635b8905d9b0cbbf33d945f.pl.png)

1. Wpisz następujące jako nazwę wyjścia.

    ```text
    ModelValue
    ```

    ![Wyjście ModelValue](../../../../../translated_images/9.1_52_ModelValueInput.20609429eb323281051607b090319adc5315c0245c7d61158eb119714fe4318f.pl.png)

1. Wybierz pole wartości i wybierz ikonę **pioruna** lub **fx** po prawej stronie.

    ![Wstaw wyrażenie](../../../../../translated_images/9.1_53_InsertDynamicContent.108ba565696f9f52d742323e0f4c46c308f322ac4bd67802e3196430155c7443.pl.png)

1. W zakładce **Dynamic content** w wysuwanym panelu, wpisz następujące w polu wyszukiwania,

    ```text
    model
    ```

    Wybierz parametr **Model** z akcji **Get item** i kliknij **Add**.

    ![Dodaj parametr Model jako dynamiczną zawartość](../../../../../translated_images/9.1_54_ModelParameter.f231fd0ec089ac6b9ac1b7fd2e6a60a35b08484ed10b0098cff6b3ce0c7760cb.pl.png)

1. Parametr **Model** jest teraz wartością wyjścia tekstowego. Wybierz **Save draft**, aby zapisać nasz przepływ agenta.

    Skończyliśmy nasz przepływ agenta 👏🏻

    ![Wybierz Save draft](../../../../../translated_images/9.1_55_SaveDraftAgentFlow.5ab97895a901458362881fc9ee576762bdb0883b37a6cbd7a631ddc2750705af.pl.png)

1. Zróbmy jeszcze jedną aktualizację naszego przepływu agenta przed publikacją. Wybierz zakładkę **Overview** i kliknij **Edit**.

    ![Wybierz Edit](../../../../../translated_images/9.1_56_EditAgentFlowDetails.023e8149284b9ae79dd3d95f574ff90bbcc1cc4a9fff4be56664ccbe0698f310.pl.png)

1. Dla **Flow name**, skopiuj i wklej następujące.

    ```text
    Send device request email
    ```

    Dla **Description**, wybierz ikonę **refresh**, aby użyć AI do automatycznego wygenerowania opisu na podstawie wyzwalacza i akcji w przepływie agenta.

    Wybierz **Save**, aby zapisać zaktualizowaną nazwę i opis przepływu agenta.

    ![Zmień nazwę, dodaj opis i zapisz szczegóły](../../../../../translated_images/9.1_57_RenameAndDescription.57a190396550bf998d62c49ca359b66211ae50042ac5f8739b32f8b9bc292607.pl.png)

1. Wybierz zakładkę **Designer** i kliknij **Publish**, aby opublikować przepływ agenta, aby mógł być dodany jako węzeł w temacie **Request device**.

    ![Publikuj](../../../../../translated_images/9.1_58_Publish.8f43271718c662deee7afea6fb283f64005b277b3a62086e6d91cc0c3ac4f79c.pl.png)

1. Wkrótce pojawi się komunikat potwierdzający, że przepływ agenta został opublikowany.

    ![Komunikat potwierdzający](../../../../../translated_images/9.1_59_Confirmation.d406bde76c31b27f794d5742c992b8c84283f46b2e54524f1e500d0688a33716.pl.png)

### 9.2 Dodaj przepływ agenta do tematu

Teraz dodajmy przepływ agenta do tematu **Request device**.

1. Wybierz **Agents** w menu po lewej stronie i kliknij **Contoso Helpdesk Agent**.

    ![Wybierz Agents](../../../../../translated_images/9.2_01_SelectAgent.b8a6fd3a8970d6b0c8e78bf0a5411257206612d53acdf9b44f78b2c9c2fe91fc.pl.png)

1. Wybierz zakładkę **Topics**.

    ![Wybierz zakładkę Topics](../../../../../translated_images/9.2_02_SelectTopics.3e8618aba5f4a1ddf3dee726b6da9a66ed89d04a2e8ca36b52112a6675c2885c.pl.png)

1. Wybierz temat **Request device**.

    ![Wybierz temat Request device](../../../../../translated_images/9.2_03_SelectRequestDevice.df10472702258708b3d069e718e695b9fcabc61d42901d524dc302a03b3fa4a9.pl.png)

1. Przewiń w dół do węzła **Ask with adaptive card** i dodaj nowy węzeł.

    Wybierz **Add a tool** i w zakładce **Basic tools** w wysuwanym panelu, wybierz przepływ agenta **Send device request email**, który niedawno utworzyliśmy i opublikowaliśmy.

    ![Wybierz przepływ agenta](../../../../../translated_images/9.2_04_SelectAgentFlow.15deca87db95fff1c9d904855d237d22a72c260adf3343d9e78695f07c42a8e0.pl.png)

1. Dla danych wejściowych wyzwalacza naszego przepływu agenta musimy wybrać zmienne wyjściowe z węzła **Ask with adaptive card**.

    Wybierz ikonę **ellipsis (...)** dla danych wejściowych **DeviceSharePointId**.

    ![Wybierz zmienną](../../../../../translated_images/9.2_05_SelectVariable.8fe53cbc0f950f732b9e9002b21d8762ddfe74fb601d61c2a5119e32383450a2.pl.png)

1. Wybierz zmienną **deviceSelectionId**, która jest jednym z wyjść zdefiniowanych w węźle **Ask with adaptive card**.

    ![Wybierz zmienną deviceSelectionId](../../../../../translated_images/9.2_06_SelectdeviceSelectionIdVariable.67c0091e0de9442d3cffbfe3b2cace8d76be37ea67815ddfc99af03ae4b37391.pl.png)

1. Następnie wybierz ikonę **ellipsis (...)** dla danych wejściowych **User**.

    ![Wybierz zmienną](../../../../../translated_images/9.2_07_SelectVariable.bf851128bec5e0255c6cf361a837ce9701d0afac84ed3d5b89665d111a098386.pl.png)

1. Wybierz zakładkę **System** w wysuwanym panelu zmiennych i kliknij **User.DisplayName**. Ta zmienna przechowuje nazwę wyświetlaną wewnętrznego użytkownika, który wchodzi w interakcję z agentem.

    ![Wybierz zmienną systemową User.DisplayName](../../../../../translated_images/9.2_08_SelectUser.DisplayNameVariable.926a2a7560402fbd7b224e2bf0ff11df9e5612803b7ce51e36f58201a09bbfd7.pl.png)

1. Następnie wybierz ikonę **greater than** dla **Advanced inputs**, aby rozwinąć i zobaczyć dane wejściowe **AdditionalComments**.

    ![Rozwiń zaawansowane dane wejściowe](../../../../../translated_images/9.2_09_ExpandAdvancedInputs.bded22f83fe4eb21237daa254725e12a81ea75be34bcb0e8ab322037a4e6f418.pl.png)

1. Wybierz ikonę **ellipsis (...)** dla danych wejściowych AdditionalComments.

    ![Wybierz zmienną](../../../../../translated_images/9.2_10_SelectVariable.86286cc06323e65fb3874b9fd0ea62d140b9e9b9a2b5116d667192a6dca3815f.pl.png)

1. Wybierz zakładkę **Formula** i ikonę rozwijania w wysuwanym panelu zmiennych, ponieważ użyjemy wyrażenia Power Fx.

    ![Zakładka Formula](../../../../../translated_images/9.2_11_SelectFormulaAndExpandIcon.3fcd07bfccc4f0779a5d26313b571e60be792da7fd28e937b3e888f8aaeda7e0.pl.png)

1. Podobnie jak wyrażenie w przepływie agenta, które wykonuje warunkowe sprawdzenie za pomocą funkcji _if_, ale tym razem
    - używając funkcji Power Fx,
    - i wstawiając albo brak wartości, albo wartość zmiennej wyjściowej `commentsId` z węzła **Ask with adaptive card**.

    Wpisz następujące funkcje w polu Power Fx,

    ```text
    If(IsBlank())
    ```

To wyrażenie używa funkcji `If` do instrukcji warunkowej if-else.

Kolejną funkcją używaną jest `IsBlank`, która sprawdza, czy wartość istnieje, czy nie istnieje w parametrze typu string. Parametrem typu string, do którego się odwołujemy, jest zmienna wyjściowa `commentsId` z węzła **Ask with adaptive card**.

![Funkcje If i IsBlank](../../../../../translated_images/9.2_12_IfIsBlank.07f7516c7e1f7579239a8b3833d64a14eb88dc245cae714b3e07d6298e907d51.pl.png)

1. Następnie kliknij **wewnątrz nawiasów** po funkcji `IsBlank`. Wstawimy zmienną wyjściową `commentsId` z węzła **Ask with adaptive card**.

    Wprowadź następujące dane wewnątrz nawiasów,

    ```text
    Topic.commentsId
    ```

    I dodaj przecinek po nawiasie.

    ![Odwołanie do zmiennej wyjściowej commentsId](../../../../../translated_images/9.2_13_Topic.commentsId.1a04dc190dac334ebf6c4dbc1b6df1aad2e4bbdeeb3ef960871e93614381f079.pl.png)

1. Teraz zdefiniujemy logikę:

    - gdy **_true_** - jeśli parametr typu string `Topic.commentsId` jest pusty, nie chcemy wstawiać żadnej wartości.
    - gdy **_false_** - jeśli parametr typu string `Topic.commentsId` nie jest pusty, wstawiamy wartość zmiennej commentsId.

    Po nawiasie zamykającym parametr typu string wprowadź następujące dane,

    ```text
    "", Topic.commentsId)
    ```

    Wyrażenie Power Fx powinno wyglądać następująco,

    ```text
    If(IsBlank(Topic.commentsId), "", Topic.commentsId)
    ```

    Świetna robota, nasze wyrażenie jest gotowe! 🙌🏻 Teraz wybierz **Insert**, aby ustawić parametr wejściowy przepływu agenta na wyrażenie Power Fx.

    ![Wyrażenie Power Fx](../../../../../translated_images/9.2_14_PowerFxExpression.80e76ea59bdb8f131d26edf2657923f4af9000768d44b06c0947115fd218698e.pl.png)

1. **Zapisz** temat.

### 9.3 Zaktualizuj temat Request device, dodając kilka węzłów dla lepszego doświadczenia użytkownika

Dodamy teraz dwa dodatkowe węzły:

- **Send a message** - będzie działać jako wiadomość potwierdzająca, odwołująca się do wybranego urządzenia i informująca, że ich żądanie zostało przesłane.

- **Topic management** - aby zakończyć rozmowę, przekierujemy do węzła **End of conversation**.

Zaczynajmy!

1. Wybierz **ikonę plus +** poniżej węzła przepływu agenta i wybierz węzeł **Send a message**.

    ![Dodaj węzeł send a message](../../../../../translated_images/9.3_01_AddSendAMessageNode.ac4111729a2602f8301ecffbcb263d692ecb43478aa9da63cae0dd58160f56c8.pl.png)

1. Wprowadź poniższe dane w polu wiadomości,

    ```text
    Thanks
    ```

    Następnie wybierz **Insert variable**, ponieważ odwołamy się do imienia użytkownika.

    ![Wstaw zmienną](../../../../../translated_images/9.3_02_InsertVariable.c5c9ebce61d1f442413d05f4437f74ee1d9c3a8c2ab696244937c56b5171f310.pl.png)

1. Wybierz zakładkę **System** i wyszukaj `User` w polu wyszukiwania. Wybierz zmienną **User.DisplayName**.

    ![Wybierz zmienną systemową](../../../../../translated_images/9.3_03_SelectSystemVariable.47cfac2f3a727dbaf32ae960cbafe43ce9ed00f73edf01ac6d48e5b2b167e5fc.pl.png)

1. Wprowadź poniższe dane w polu wiadomości,

    ```text
    . Your selected device,
    ```

    Następnie wybierz **Insert variable**, a tym razem w zakładce **Custom** wybierz zmienną **ModelValue**.

    Następnie wprowadź poniższe dane, aby zakończyć wiadomość.

    ```text
    , has been submitted and will be reviewed by your manager.
    ```

    Wiadomość powinna wyglądać następująco.

    ![Wyślij wiadomość](../../../../../translated_images/9.3_04_SendAMessage.3f6c4b5e53da9c7f9fcf9d0c453a9b65e44e35ea4c1124947fb638d0b682d96d.pl.png)

1. Na koniec wybierz **ikonę plus +** poniżej węzła **Send a message** i wybierz **Topic management**, a następnie **Go to another topic** i wybierz **End of Conversation**.

    ![Topic management](../../../../../translated_images/9.3_05_EndOfConversation.3c6c96d03b29a4d0904dea09d96c62d6ad450fe60dd8d6b2fe9d31681d6cb147.pl.png)

1. **Zapisz** temat.

    ![Zapisz](../../../../../translated_images/9.3_06_SaveTopic.8c9201fabce9f41af03d9f1beb9ce321e4ee9880a94edabe58b592bffebda80a.pl.png)

### 9.4 Przetestuj agenta w różnych scenariuszach

Świetna robota!!! 😁 Teraz możemy przetestować naszego agenta.

#### 9.4.1 Poproś o urządzenie i wprowadź komentarz w adaptive card

1. **Odśwież** panel testowy, wybierz ikonę **activity map** i wprowadź następującą wiadomość do agenta.

    ```text
    I need a laptop
    ```

    ![Test agenta](../../../../../translated_images/9.4_01_TestAgent_RequestDevice_Yes.e73a5076dcd7179901dc0536624a039e372e405a6aac7ab89a632ce81bacdc2e.pl.png)

1. Agent uruchamia **Available devices** i odpowiada listą dostępnych urządzeń. Wprowadzimy następującą odpowiedź na pytanie, czy chcemy poprosić o urządzenie.

    ```text
    Yes
    ```

    ![Tak](../../../../../translated_images/9.4_02_RequestDevice_Yes.25c34743bc168fde33f91743316e7bad87ee0e47150c93e9b82c4662404dcaba.pl.png)

1. Zauważ, jak agent wywołał **Request device** zgodnie z instrukcjami agenta i jak adaptive card jest teraz wyświetlana w wiadomości agenta.

    Wybierz urządzenie **Surface Laptop 15** i dodaj następujący komentarz.

    ```text
    I need 16GB of RAM please
    ```

    ![Wybierz urządzenie i wprowadź komentarz](../../../../../translated_images/9.4_03_SelectDeviceAndEnterComment.570ea590309bf97edc40c6f7b53dbdc1174365860d8e8a4c32cfb7f1837621c2.pl.png)

1. Przewiń w dół, aż zobaczysz przycisk **Submit Request** i wybierz go, aby przesłać adaptive card do agenta.

    ![Prześlij żądanie](../../../../../translated_images/9.4_04_SubmitRequest.ce3f4f44b90243a18dbfb401548b9b3cefd3ea17d8293a1bc3377323e3449da9.pl.png)

1. Wybierz **Allow**, aby agent mógł użyć Twoich danych uwierzytelniających do uwierzytelnienia połączenia dla dwóch akcji konektora.

    ![Zezwól](../../../../../translated_images/9.4_05_SelectAllow.f7b5bda068fbaee83dcb1cff03a52c946fb4d879137c55f4e5f9eb3953985e0e.pl.png)

1. Agent wyświetli wiadomość potwierdzającą, która zawiera wybrany model, a następnie przekieruje do tematu **End of Conversation**. Super!

    ![Żądanie przesłane](../../../../../translated_images/9.4_06_RequestSubmitted.1d4d2e9afbc222a5ba79a4c254e7b2364d6eafc1a200ad6ac0aa142f9f10642d.pl.png)

1. Wybierz **Tak**, aby zweryfikować resztę tematu **End of Conversation**.

    ![Wybierz Tak](../../../../../translated_images/9.4_07_RedirectNode.e7b1390e4eafe8c2c815fc8ce7fdda56617d9fbeccb0d59423ad2899a8e5f897.pl.png)

1. Następnie oceń doświadczenie, wybierając dowolną gwiazdkę na karcie oceny.

    Agent przejdzie do ostatniego węzła **Question** w temacie **End of Conversation**. Wybierz **Nie**.

    ![Temat End of conversation](../../../../../translated_images/9.4_08_EndOfConversation.b35507f7f561633c0cb3b6c15dc007ae4197a72d58afd8ae616bea439bd6e148.pl.png)

1. Temat zakończy się, a w panelu testowym zostanie wyświetlona ostateczna wiadomość.

    ![Temat End of conversation](../../../../../translated_images/9.4_09_EndOfConversation.438891b82e322b8a2648533200fbcd01c660ab049223b0920cdd0fbfcdeeb888.pl.png)

1. Sprawdź swoją skrzynkę odbiorczą w swoim koncie e-mail, aby przejrzeć e-mail wysłany do menedżera przez przepływ agenta. Możesz zobaczyć szczegóły wybranego urządzenia i notatkę wprowadzoną w adaptive card.

    ![Otrzymany e-mail](../../../../../translated_images/9.4_10_ReviewEmailMessageWithComment.b0138b0bb9d08aacbd8bbb02fdb633a6796b4131cf8d83212adeabaa1ce04a18.pl.png)

1. Kliknij hiperłącze, a przeglądarka powinna załadować element SharePoint dotyczący urządzenia. Super!

    ![Kliknij hiperłącze w e-mailu](../../../../../translated_images/9.4_11_SelectLinkInEmail.2179f17165b61ba1e8aee68e8de4c752d64b0780ad86e0fe9054580d9c24e208.pl.png)

#### 9.4.2 Poproś o urządzenie i nie wprowadzaj komentarza w adaptive card

Teraz przetestujmy scenariusz, w którym nie wprowadzamy komentarza.

1. Powtórz te same kroki:

    - **Odśwież** panel testowy i wybierz ikonę **activity map**
    - Wprowadź wiadomość, `I need a laptop`
    - Odpowiedz `Yes` na pytanie o żądanie urządzenia

    ![Poproś o urządzenie](../../../../../translated_images/9.4_12_RequestDevice_Yes.1e369b8a52547fade4b84a4e36b399ee0692c6edbaa778ba90fe9c15cae75c5c.pl.png)

1. Tym razem wybierz urządzenie **Surface Laptop 13** i nie wprowadzaj komentarza.

    ![Wybierz urządzenie](../../../../../translated_images/9.4_13_SelectDevice.d9ad15d17de3f06fd948bd529f116f7c05bedf79c016180d8a1dd7e378322b0e.pl.png)

1. **Prześlij** żądanie, wybierając przycisk **Submit Request**.

    ![Prześlij żądanie](../../../../../translated_images/9.4_14_SubmitRequest.a783ad8460bfb4485cfd2e97db2c065d9d6bf803279e3bd1569fe3e93548a578.pl.png)

1. Tym razem e-mail otrzymany w Twojej skrzynce odbiorczej wyświetli **None** jako komentarz.

    ![Otrzymany e-mail](../../../../../translated_images/9.4_15_ReviewEmailMessage.137f35152c9da4b4a02bebec5f0cc9e55cfa25679770ace003aa19482ed0f3eb.pl.png)

#### 9.4.3 Nie proś o urządzenie

Przetestujmy ostatni scenariusz, w którym nie prosimy o urządzenie, a temat **Goodbye** powinien zostać wywołany zgodnie z instrukcjami agenta.

1. Powtórz te same kroki:

    - **Odśwież** panel testowy i wybierz ikonę **activity map**
    - Wprowadź wiadomość, `I need a laptop`
    - Tym razem odpowiedz `No` na pytanie o żądanie urządzenia

    ![Test agenta](../../../../../translated_images/9.4_16_TestAgent_RequestDevice_No.85f205968f1d4083f20cc890a707748f8e06c01a19536cd299a13bdde2350de7.pl.png)

1. Agent wywołał temat **Goodbye**, a pytanie zdefiniowane w temacie zostało zadane.

    ![Wywołano temat Goodbye](../../../../../translated_images/9.4_17_Goodbye.05ee598a987237e02866647a9699b0efa7ac58d1f448497f956af2ee815cb961.pl.png)

## ✅ Misja zakończona

Gratulacje! 👏🏻 Nauczyłeś się, jak zbudować przepływ agenta i dodać go do naszego istniejącego tematu **Request device**, a także jak przekierować agenta do innego tematu.

To koniec **Lab 09 - Add an agent flow for automation and enhance topic capabilities**, wybierz poniższy link, aby przejść do następnej lekcji. Rozwiniemy przypadek użycia z tego laboratorium w kolejnej lekcji.

⏭️ [Przejdź do lekcji **Add Event Triggers - Enable autonomous agent capabilities**](../10-add-event-triggers/README.md)

## 📚 Zasoby taktyczne

🔗 [Wprowadzenie do przepływów agentów: Transformacja automatyzacji za pomocą przepływów opartych na AI](https://www.microsoft.com/microsoft-copilot/blog/copilot-studio/introducing-agent-flows-transforming-automation-with-ai-first-workflows/)

🔗 [Przegląd przepływów agentów](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview?WT.mc_id=power-172621-ebenitez)

🔗 [Użyj przepływów agentów z Twoim agentem](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-172621-ebenitez)

🔗 [Lista funkcji w przewodniku referencyjnym](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez)

📺 [Przepływy agentów w Copilot Studio](https://www.youtube.com/watch?v=VJTKyk3Pr7s)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/09-add-an-agent-flow" alt="Analiza" />

---

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się zapewnić dokładność, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za autorytatywne źródło. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.