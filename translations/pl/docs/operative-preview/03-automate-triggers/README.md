<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "75efaf515d5694d4fd549bfd6518901a",
  "translation_date": "2025-10-22T00:16:27+00:00",
  "source_file": "docs/operative-preview/03-automate-triggers/README.md",
  "language_code": "pl"
}
-->
# Misja 03: Dodaj wyzwalacze zdarzeń, aby działać autonomicznie

--8<-- "disclaimer.md"

## 🕵️‍♂️ KODOWA NAZWA: `OPERACJA PUNKT SYGNAŁOWY`

> **⏱️ Czas trwania operacji:** `~45 minut`

## 🎯 Opis Misji

Witaj ponownie, Agencie. W [Misji 02](../02-multi-agent/README.md) nauczyłeś się, jak stworzyć agenta ds. przyjmowania aplikacji oraz agenta ds. przygotowania do rozmowy kwalifikacyjnej, aby poszerzyć możliwości swojego głównego agenta ds. rekrutacji.

Twoim zadaniem, jeśli zdecydujesz się je przyjąć, jest **Operacja Punkt Sygnałowy** - zgłębianie tematu **wyzwalaczy zdarzeń**, aby podnieść system agentów z poziomu reaktywnego na **autonomiczne działanie**. Przekształcisz swoich agentów z czekających na dane od człowieka w takich, którzy proaktywnie reagują na zdarzenia zewnętrzne i podejmują inteligentne działania bez nadzoru.

Pomyśl o tym jak o przejściu od agentów, którzy _odpowiadają na pytania_, do agentów, którzy _przewidują potrzeby_ i _działają niezależnie_. Dzięki wyzwalaczom zdarzeń i zautomatyzowanym przepływom pracy Twój agent ds. rekrutacji będzie wykrywał przychodzące e-maile z CV, automatycznie przetwarzał załączniki, przechowywał dane w Dataverse i powiadamiał zespół rekrutacyjny HR za pośrednictwem Microsoft Teams - wszystko to, podczas gdy Ty skupisz się na zadaniach o wyższej wartości.

Witaj w świecie, gdzie automatyzacja spotyka się z inteligencją.

## 🔎 Cele

W tej misji nauczysz się:

1. Jak wyzwalacze zdarzeń umożliwiają autonomiczne zachowanie agenta bez interakcji użytkownika
1. Różnic między interaktywnymi a autonomicznymi agentami w Copilot Studio
1. Jak tworzyć wyzwalacze zdarzeń, które automatycznie przetwarzają załączniki e-mail i przesyłają pliki do Dataverse
1. Jak budować przepływy agentów, które publikują adaptacyjne karty w kanałach Teams w celu powiadamiania
1. Jak przekazywać dane między wyzwalaczami zdarzeń a przepływami agentów dla pełnej automatyzacji

## 🤔 Co to jest wyzwalacz zdarzeń?

Wcześniej w [Recruit](../../recruit/10-add-event-triggers/README.md) poznaliśmy wyzwalacze zdarzeń. Zróbmy szybkie podsumowanie na wypadek, gdybyś to przegapił.

**Wyzwalacze zdarzeń** pozwalają agentowi _działać_ samodzielnie, gdy coś dzieje się w innym systemie - bez potrzeby wiadomości od użytkownika. Gdy skonfigurowane zdarzenie zostanie uruchomione - na przykład „nowy element SharePoint”, „nowy e-mail”, „przypisane zadanie w Plannerze” lub nawet zdarzenie oparte na czasie, konektor wysyła ładunek wyzwalacza do Twojego agenta. Agent następnie wykonuje Twoje instrukcje, aby zdecydować, które działania lub tematy wywołać.

### Kluczowe cechy

- **Autonomiczne uruchamianie:**
      - W przeciwieństwie do wyzwalaczy tematów, które zaczynają się, gdy użytkownik pisze do agenta, wyzwalacze zdarzeń uruchamiają się na podstawie zdarzeń zewnętrznych, umożliwiając proaktywne zachowanie.

- **Sterowanie ładunkiem:**
      - Każde zdarzenie dostarcza ładunek (zmienne + opcjonalne instrukcje) za pośrednictwem konektora. Agent wykorzystuje zdefiniowane przez Ciebie instrukcje i ładunek, aby zdecydować, co zrobić dalej.
      - Na przykład _wywołać temat_ lub _wykonać działania zdefiniowane przez narzędzia_.

- **Przykłady gotowe do użycia:**
      - Plik lub element utworzony w SharePoint/OneDrive
      - Zadanie w Plannerze ukończone/przypisane
      - Odpowiedź w Microsoft Forms przesłana
      - Powtarzalność/harmonogram

    Dostępność zależy od polityk danych Twojej organizacji skonfigurowanych w Power Automate.

- **Wymaga generatywnej orkiestracji:**
      - Wyzwalacze zdarzeń są dostępne tylko wtedy, gdy generatywna orkiestracja jest włączona dla agenta.

- **Koszty/użycie:**
      - Każde dostarczenie wyzwalacza liczy się jako wiadomość w ramach pojemności Copilot Studio.
      - Na przykład powtarzalność co 10 minut wysyła wiadomość co 10 minut.

- **Model uwierzytelniania i konfiguracja:**
      - Dodajesz wyzwalacze w zakładce _Przegląd_ agenta, w sekcji _Wyzwalacze_. Uwierzytelnianie konektora wyzwalacza wykorzystuje konto twórcy agenta („uwierzytelnianie autora agenta”).
      - Możesz edytować parametry wyzwalacza i ładunek w portalu twórcy Power Automate.

- **Testowanie i obserwowalność:**
      - Możesz testować wyzwalacze z poziomu panelu testowego agenta i sprawdzać zachowanie na mapie aktywności przed publikacją.

!!! info "TL;DR dla programistów"

    Pomyśl o wyzwalaczach zdarzeń jak o **sygnałach podobnych do webhooków**, które przesyłają strukturalny ładunek do Twojego agenta, pozwalając mu _rozpocząć_ pracę i łączyć działania między systemami - bez czekania na zapytanie użytkownika.

### Wyzwalacze tematów - czym się różnią

Wcześniej nauczyłeś się o wyzwalaczach tematów w [Recruit](../../recruit/07-add-new-topic-with-trigger/README.md), jednak możesz się zastanawiać, jak _Wyzwalacze tematów_ różnią się od _Wyzwalaczy zdarzeń_ i dlaczego to rozróżnienie ma znaczenie dla zrozumienia, co czyni agenta autonomicznym.

Wyzwalacze tematów kontrolują _kiedy temat jest uruchamiany_, zazwyczaj w odpowiedzi na wiadomość użytkownika.

- W generatywnej orkiestracji domyślnym wyzwalaczem jest **Przez agenta** - planista wybiera temat, którego nazwa/opis najlepiej pasuje do wiadomości użytkownika.
- W klasycznej orkiestracji domyślnym wyzwalaczem są **Frazy** - planista wybiera temat, gdy jedna lub kilka fraz wyzwalających najlepiej pasuje do wiadomości użytkownika.

Inne typy wyzwalaczy obejmują `Otrzymano wiadomość`, `Otrzymano zdarzenie`, `Otrzymano aktywność`, `Aktualizacja rozmowy`, `Otrzymano wywołanie`, `Brak aktywności` i `Plan ukończony`.

!!! info "Podstawowa różnica"

    Wyzwalacze tematów są _rozpoczęciem aktywności rozmowy_ w czacie.
    
    Wyzwalacze zdarzeń są _rozpoczęciem zdarzenia systemowego_ dostarczonego przez konektory, które mogą uruchomić agenta bez żadnej rozmowy.

### Szybki przewodnik: Wyzwalacz tematów vs Wyzwalacz zdarzeń

- **Wyzwalacz tematów:** Użytkownik (lub aktywność czatu) powiedział/zrobił X ➡️ uruchom Temat T.
- **Wyzwalacz zdarzeń:** SharePoint/Planner/E-mail/Timer uruchomił zdarzenie z ładunkiem P ➡️ agent ocenia instrukcje ➡️ wywołuje Działania/Tematy zgodnie z tym.

## 🏓 Agent interaktywny vs Agent autonomiczny - porównanie

Teraz, gdy znasz różnicę między wyzwalaczami zdarzeń a wyzwalaczami tematów, przejdźmy do nauki różnic między agentem interaktywnym a autonomicznym.

W terminologii Copilot Studio „interaktywny” odnosi się do agentów, którzy głównie angażują się za pomocą **tematów** w czacie lub kanale. „Autonomiczny” odnosi się do agentów, którzy również wykorzystują **wyzwalacze zdarzeń**, aby działać bez danych od użytkownika.

Poniższa tabela podsumowuje ich różnice i podobieństwa.

| Wymiar                              | Agent interaktywny    | Agent autonomiczny                                                                                           |
|-------------------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------|
| Jak się uruchamia                   | Użytkownik (lub aktywność czatu) wyzwala temat. Przykład: Przez agenta, Frazy, Otrzymano wiadomość. | Zewnętrzny wyzwalacz zdarzenia wysyła ładunek przez konektor do agenta. Przykład: SharePoint, Planner, e-mail, harmonogram, itp. |
| Główne zastosowanie                 | Pytania i odpowiedzi, prowadzone przepływy pracy, działania na żądanie w czacie - Teams, web, itp. | Proaktywne operacje i automatyzacja w tle - reakcja na zmiany w systemie, a następnie powiadamianie, archiwizacja lub organizacja zadań. |
| Powierzchnia wyzwalacza             | Wyzwalacze tematów: Przez agenta / Frazy / Otrzymano wiadomość / Typy aktywności / Wywołanie / Brak aktywności / Plan ukończony | Biblioteka wyzwalaczy zdarzeń przez konektory; ładunek zawiera dane zdarzenia + opcjonalne instrukcje. |
| Planista (generatywna orkiestracja) | Silnie wykorzystywany dla wyzwalaczy Przez agenta i Plan ukończony do wyboru/sekwencji tematów. | Wymagany dla wyzwalaczy zdarzeń; agent wykorzystuje instrukcje + ładunek, aby zdecydować, które działania/tematy wywołać. |
| Typowy przykład                     | Użytkownik pyta „Jaka jest nasza polityka zwrotów?” → Temat uruchamia się, wyszukuje informacje, odpowiada. | Przypisano nowe zadanie w Plannerze → Wyzwalacz zdarzenia uruchamia się → Agent publikuje wiadomość w Teams, aktualizuje rekord lub wywołuje temat. |
| Ścieżka konfiguracji                | Tworzenie tematów, definiowanie typu wyzwalacza, tworzenie dialogów/działań; publikacja w kanałach. | Dodanie wyzwalacza zdarzenia (Przegląd → Wyzwalacze), uwierzytelnienie konektora za pomocą danych autora agenta, konfiguracja ładunku/instrukcji; testowanie w panelu testowym; publikacja. |
| Uwierzytelnianie i zarządzanie      | Działa w kontekście kanału/uwierzytelnienia; wyzwalacze tematów reagują na aktywności czatu w dozwolonych kanałach. | Dostępność wyzwalaczy zależy od polityk danych Power Automate; konektory działają na koncie twórcy agenta. |
| Obserwowalność                      | Testowanie tematów w Copilot Studio, analiza transkrypcji rozmów/aktywności. | Użyj Test trigger i mapy aktywności, aby zweryfikować wykonanie przed publikacją, monitoruj aktywność po publikacji. |
| Wpływ na pojemność                  | Każda wiadomość użytkownika/odpowiedź agenta to wiadomość zużywająca pojemność. | Każde dostarczenie zdarzenia to również wiadomość, plus wszelkie kolejne działania. Przykład: powtarzalność co 10 minut = 6 wiadomości/godzinę |

### Kiedy używać którego?

- Wybierz **wyzwalacze tematów (interaktywne)**, gdy użytkownicy inicjują rozmowę z agentem - FAQ, prowadzone przyjmowanie, lub zadania w stylu poleceń w czacie. Wyzwalacz Przez agenta planisty zmniejsza konieczność ręcznego tworzenia fraz.
- Dodaj **wyzwalacze zdarzeń (autonomiczne)**, gdy agent powinien rozpocząć rozmowę lub podjąć działanie samodzielnie - na podstawie aktualizacji w SharePoint/Dataverse, przychodzącego e-maila lub harmonogramu. To przenosi Cię z operacji reaktywnych do proaktywnych.

## Wskazówki dla programistów i pułapki

1. **Włącz generatywną orkiestrację** dla każdego agenta, którego chcesz uczynić autonomicznym. Wyzwalacze zdarzeń nie będą widoczne inaczej.

1. **Modeluj ładunek na wczesnym etapie.** Zdecyduj, jakie minimalne pola Twój agent potrzebuje od wyzwalacza, takie jak `itemId`, `assignedTo`, `dueDate` i dodaj zwięzłe instrukcje, które powiedzą agentowi, jakie działanie/temat wywołać na podstawie wartości ładunku.

1. **Zakres uwierzytelniania ma znaczenie.** Wyzwalacze uwierzytelniają się za pomocą konta twórcy agenta. Upewnij się, że konto ma odpowiednie uprawnienia konektora i jest zgodne z politykami danych Power Automate.

1. **Kontroluj koszty i hałas.** Częste powtarzalności lub bardzo „gadatliwe” źródła mogą szybko zwiększyć zużycie wiadomości - ograniczaj tam, gdzie to możliwe, lub dodaj warunki w wyzwalaczu, aby filtrować zdarzenia.

1. **Testuj przed publikacją.** Użyj **Test trigger** i mapy aktywności, aby obserwować plan i wywoływane działania - iteruj instrukcje/ładunek, aż zachowanie będzie stabilne.

## 🧪 Laboratorium 03 - Automatyzacja e-maili z aplikacjami kandydatów

Następnie dodamy wyzwalacz zdarzenia do **Agenta ds. rekrutacji** i zbudujemy przepływ agenta w podrzędnym **Agencie ds. przyjmowania aplikacji**, aby obsłużyć dalsze przetwarzanie dla autonomii.

### ✨ Scenariusz użycia

!!! info ""

    **Jako** Rekruter HR

    **Chcę** być powiadamiany, gdy e-mail z CV dotrze do mojej skrzynki odbiorczej i zostanie automatycznie przesłany do Dataverse

    **Aby móc** być na bieżąco z CV przesyłanymi e-mailem dla aplikacji automatycznie przesłanych do Dataverse

Osiągniemy to za pomocą dwóch technik:

1. Wyzwalacza zdarzenia, gdy e-mail dotrze,
    1. Sprawdź, czy `contentType` pliku równa się `PDF` jako typ formatu.
    1. Wyodrębnij plik i prześlij do Dataverse za pomocą działań przez konektor Dataverse.
    1. Następnie wyślij polecenie do agenta do dalszego przetwarzania, przekazując parametry wejściowe z działań Dataverse.

1. Przepływ agenta zostanie dodany do podrzędnego **Agenta ds. przyjmowania aplikacji**, który zostanie wywołany przez polecenie w wyzwalaczu zdarzenia.
    1. Użyj parametrów wejściowych przekazanych z polecenia wyzwalacza zdarzenia w adaptacyjnej karcie opublikowanej w kanale Microsoft Teams, aby powiadomić zespół rekrutacyjny HR. Adaptacyjna karta będzie zawierała link do wiersza w Dataverse, który będzie widoczny w **Agencie ds. rekrutacji**.

Zaczynajmy!

### ✨ Wymagania wstępne do ukończenia tej misji

Musisz **albo**:

- **Ukończyć Misję 01 i Misję 02** i mieć gotowego Agenta ds. rekrutacji, **ALBO**
- **Zaimportować rozwiązanie startowe Misji 03**, jeśli zaczynasz od zera lub potrzebujesz nadrobić zaległości. [Pobierz rozwiązanie startowe Misji 03](https://aka.ms/agent-academy)

!!! note "Importowanie rozwiązania i danych przykładowych"
    Jeśli korzystasz z rozwiązania startowego, zapoznaj się z [Misją 01](../01-get-started/README.md) w celu uzyskania szczegółowych instrukcji dotyczących importowania rozwiązań i danych przykładowych do swojego środowiska.

Będziesz także potrzebować dostępu do **Microsoft Teams**, aby ukończyć drugie ćwiczenie laboratoryjne dotyczące publikowania adaptacyjnej karty w Microsoft Teams.

###
Teraz zaktualizujemy wyzwalacz zdarzenia, aby dodać więcej funkcji automatyzacji. Wybierz **trzy kropki (...)** przy wyzwalaczu i wybierz **Edytuj w Power Automate**.

![Wybierz Edytuj w Power Automate](../../../../../translated_images/3.1_05_SelectEditInPowerAutomate.d298b51d7980cf2fd20a9d8193745aef4ce8097a4a2d33341e2dc159b9bfc099.pl.png)

1. Wyzwalacz załaduje się jako przepływ w portalu twórcy Power Automate. To, co widzisz, to projektant przepływów w portalu twórcy Power Automate. Tutaj możemy dodać dodatkową logikę i akcje dla większej automatyzacji. Wyzwalacz pojawi się na górze, a **Wysyła zapytanie do określonego copilot do przetworzenia** jako ostatnia akcja w przepływie.

![Projektant przepływów w portalu twórcy Power Automate](../../../../../translated_images/3.1_06_EditInPowerAutomate.f8967ace56354224574517f31a2a2ce0a5b5d3ab85bfb9ec6cf70e83ab1b8e6d.pl.png)

1. Domyślnie wyzwalacz **Gdy nadejdzie nowy e-mail** w Power Automate może przetwarzać wiele e-maili razem, jeśli kilka nadejdzie jednocześnie, uruchamiając przepływ tylko raz dla całej grupy.

Aby upewnić się, że przepływ działa osobno dla każdego e-maila, włącz ustawienie **Split On** w ustawieniach wyzwalacza i wybierz `@triggerOutputs()?['body/value']` w polu tablicy rozwijanej.

Po włączeniu **Split On** i ustawieniu pola tablicy na `@triggerOutputs()?['body/value']`, przepływ będzie działał indywidualnie dla każdej wiadomości, nawet jeśli wiele nadejdzie jednocześnie.

![Włącz ustawienia Split On w wyzwalaczu](../../../../../translated_images/3.1_07_UpdateTriggerSettings.0f363c4f4655276732575fa795bf1ad1568df34d34b703c85073591cc8585609.pl.png)

1. Następnie dodamy logikę sprawdzającą typ pliku załącznika. Chcemy przesyłać tylko załączniki w formacie .PDF, a nie obrazy (mogą pochodzić z podpisów e-mail). Wybierz ikonę **+** poniżej wyzwalacza i wybierz **Kontrola** w sekcji **Wbudowane narzędzia**.

![Wybierz Kontrola](../../../../../translated_images/3.1_08_Control.2fa6987b64ae20d5c8343d1b15937432ab6c893750c4b1427df56067023fd437.pl.png)

1. Wybierz akcję **Warunek**.

![Wybierz akcję Warunek](../../../../../translated_images/3.1_09_AddConditionAction.a7eec0b2a42d4a7c54bd305f0c480b72e3feec155a4e2468e12279082257f21f.pl.png)

1. Teraz skonfigurujemy warunek, aby sprawdzić, czy typ pliku załącznika to .PDF. W polu **Wybierz wartość** wybierz ikonę **błyskawicy** lub **fx** po prawej stronie.

1. W polu **Szukaj** wpisz następujące:

```text
content type
```

1. Następnie wybierz parametr **Attachments Content-Type** z wyzwalacza.

1. Następnie wybierz **Dodaj**, aby dodać dynamiczne wejście treści do parametru **Id** akcji.

![Skonfiguruj akcję Warunek](../../../../../translated_images/3.1_10_SetDynamicContentValue_V2.23c3d0438146a5ff0d695077e65a3b1c8b230b54c51ded8a099c6e99a948e9ed.pl.png)

1. Zatrzymajmy się tutaj na chwilę, prawdopodobnie zauważyłeś, że akcja **Dla każdego** automatycznie się pojawiła.

Wybierz akcję **Dla każdego**. Ta akcja reprezentuje iterację przez każdy załącznik w e-mailu, ponieważ parametr **Attachments Content-Type** z wyzwalacza jest powiązany z każdym załącznikiem.

Pod spodem jest to tablica, dlatego akcja **Dla każdego** została automatycznie dodana, gdy wybraliśmy parametr **Attachments Content-Type** w akcji **Warunek**.

Aby dowiedzieć się więcej na ten temat, rozwiń poniższy blok dodatkowej nauki.

??? info "Dodatkowa nauka: Automatyczne pojawianie się akcji Dla każdego"

🤔 **Dlaczego "Zastosuj do każdego" lub "Dla każdego" pojawia się automatycznie?**

Kiedy wybierasz parametr (dynamiczną treść), który reprezentuje listę lub tablicę elementów - na przykład listę załączników, e-maili lub wierszy - Power Automate rozpoznaje, że możesz chcieć przetworzyć każdy element indywidualnie.

Aby Ci w tym pomóc, Power Automate automatycznie dodaje pętlę **"Zastosuj do każdego"** (lub **Dla każdego**) wokół Twojej akcji. Zapewnia to, że Twoja akcja będzie działać raz dla każdego elementu na liście, zamiast próbować przetworzyć całą listę naraz (co mogłoby spowodować błędy).

🦋 **Przykład**

- Jeśli wybierzesz "Załączniki" z poprzedniej akcji (które są tablicą) i spróbujesz użyć ich w akcji, która oczekuje pojedynczego pliku, Power Automate otacza Twoją akcję pętlą **"Zastosuj do każdego"** (lub **Dla każdego**).
- W ten sposób Twoja akcja będzie działać dla **każdego załącznika** - jeden po drugim.

💡 **Kluczowe punkty**

- **Automatyczne:** Pętla pojawia się automatycznie, aby pomóc Ci przetworzyć każdy element w kolekcji.
- **Zapobiega błędom:** Bez pętli Twoja akcja mogłaby się nie powieść, ponieważ nie może obsłużyć wielu elementów naraz.
- **Wizualna wskazówka:** To wizualny sposób pokazania, że Twój przepływ będzie powtarzał akcję dla każdego elementu na liście.

![Wyjaśnienie akcji Dla każdego](../../../../../translated_images/3.1_11_ForEach.82bd7b62b815fdbcd67acff0a633137cf03175940c670361ea8669b0df892927.pl.png)

1. Następnie w drugim polu **Wybierz wartość** wpisz następujące:

```text
application/pdf
```

To zapewni, że dla każdego załącznika plikowego sprawdzany będzie format rozszerzenia pliku jako .PDF.

![EqualToValue](../../../../../translated_images/3.1_12_EqualToValue.66c107cb8105c1cd3d166b8a5bf690b8dfc30aa2bd2af83c438a9e44d1b544b0.pl.png)

1. Teraz skonfigurujemy ścieżkę **True**, aby wyodrębnić plik z e-maila i przesłać go do tabeli Dataverse **Resume**.

Dodaj nową akcję poniżej w ścieżce **True** i wyszukaj `html to text`. Wybierz akcję **Html to text**.

Aby dowiedzieć się więcej o akcji **Html to text**, rozwiń poniższy blok dodatkowej nauki.

??? info "Dodatkowa nauka: Akcja Html to text"

🤔 **Co to jest akcja "HTML to text"?**

Akcja **HTML to text** w Power Automate służy do konwersji treści sformatowanej w HTML na zwykły tekst. Jest to szczególnie przydatne, gdy otrzymujesz dane (np. e-maile, treści internetowe lub odpowiedzi API), które zawierają tagi HTML, a chcesz wyodrębnić tylko czytelny tekst bez formatowania lub kodu.

⚙️ **Jak to działa?**

- **Wejście:** Podajesz ciąg treści HTML (na przykład treść e-maila).
- **Wyjście:** Akcja usuwa wszystkie tagi HTML i zwraca tylko zwykły tekst.

👍🏻 **Kiedy warto używać?**

- Gdy chcesz wyodrębnić czytelny tekst z e-maili, stron internetowych lub odpowiedzi API zawierających HTML.
- Przed wysłaniem treści do systemów, które nie obsługują formatowania HTML (np. SMS, wiadomości Teams lub bazy danych).
- Aby oczyścić dane do dalszego przetwarzania lub analizy.

🔭 **Gdzie to znaleźć?**

- W Power Automate w Agent Flows, wyszukaj akcję o nazwie `HTML to text`. Znajduje się w konektorze **Data Operations**.

💡 **Kluczowe punkty**

- Usuwa wszystkie tagi HTML i pozostawia tylko tekst.
- Nie interpretuje ani nie wykonuje skryptów/stylów - tylko usuwa tagi.
- Przydatne do czyszczenia danych i przygotowywania treści do wyjść w formacie zwykłego tekstu.

![Dodaj akcję HTML to text](../../../../../translated_images/3.1_13_AddHTMLToTextAction.2aa9468b87dbeb847c083f24da0fe99438b39f826b13a70982ec255a97c2aa80.pl.png)

1. Następnie musimy utworzyć nowe odniesienie do połączenia dla akcji **Html to text**, wybierając **Dodaj nowe**.

![Dodaj nowe odniesienie do połączenia](../../../../../translated_images/3.1_14_AddNewConnection.4a23546976b62e7f0e882ac1379950e5bfdcaa702070313cb84a1d22b06a79a7.pl.png)

1. Akcja może teraz zostać skonfigurowana. Dodaj parametr **Body** z wyzwalacza. W polu **Treść** wybierz ikonę **błyskawicy** lub **fx** po prawej stronie.

![Dodaj dynamiczną treść](../../../../../translated_images/3.1_15_AddDynamicContent.0624a9808f55b993efb6d00bf941a88389655e2ab9970ba2b9a1538272fe9643.pl.png)

1. W zakładce **Dynamiczna treść** wyszukaj `body` i wybierz parametr **Body**, a następnie wybierz **Dodaj**.

![Dodaj parametr Body](../../../../../translated_images/3.1_16_AddDynamicContent.40b7eccc080c20513eed5663062b2a63d40d6482eaf2d42fe4e29cb94797f098.pl.png)

1. Zakończyliśmy konfigurację tej akcji, więc wyjdź z akcji, wybierając dwie strzałki («) skierowane w lewo, aby zwinąć panel.

![Zwiń panel akcji](../../../../../translated_images/3.1_17_CollapseAction.ca2c346efb58f8240372c3d145fa10ba609cab1c2075d7df1a9388c82fab79f5.pl.png)

1. Dodamy nową akcję, wybierając **+ ikonę** poniżej akcji **Html to text**, co załaduje panel do dodawania akcji. Wybierz konektor **Microsoft Dataverse**.

![Dodaj nową akcję](../../../../../translated_images/3.1_18_AddDataverseAction.5f4be9eb96e22dac239e5545bab5ad9d08b138c2cbcbc700680f33445e132506.pl.png)

1. Wybierz akcję **Dodaj nowy wiersz**.

![Dodaj akcję Dodaj nowy wiersz](../../../../../translated_images/3.1_19_AddANewRow.48e0a3868821e59ed2a299ccb6a521af27b2430082381d48be38087be62c7c15.pl.png)

1. Zmień nazwę akcji, wybierając **Trzy kropki (...)**, skopiuj i wklej następującą nazwę:

```text
Dodaj nowy wiersz Resume
```

Dla parametru **Nazwa tabeli** wyszukaj `res` i wybierz tabelę **Resumes**.

![Zmień nazwę akcji i skonfiguruj parametr Nazwa tabeli](../../../../../translated_images/3.1_20_RenameAndSelectResumesTable.89f8485653abb7fda1d6eb44210951f05a05ed6f7450a51895079dfd8e72c8bf.pl.png)

1. Wybierz pole **Tytuł CV**, a następnie wybierz ikonę **błyskawicy** lub **fx** po prawej stronie.

![Skonfiguruj parametr Tytuł CV](../../../../../translated_images/3.1_21_AddDynamicContent.9ee1f89420d5a4aa56797944166208f6e9b0ec67116625168fbcefb907850224.pl.png)

1. W zakładce **Funkcja** wpisz następujące wyrażenie, które używa funkcji `item()`:

```text
item()?['name']
```

Aby dowiedzieć się więcej o funkcji `item()`, rozwiń poniższy blok dodatkowej nauki.

??? info "Dodatkowa nauka: Funkcja `item()`"

🤔 **Co to jest funkcja `item()`?**

- Gdy używasz akcji **Zastosuj do każdego**, Power Automate przechodzi przez każdy element w kolekcji (tablicy).
- Najczęściej używana jest w akcjach takich jak **Zastosuj do każdego** (lub **Dla każdego**), **Wybierz** lub **Filtruj tablicę**.

⚙️ **Jak to działa?**

- `item()` to funkcja, która zwraca aktualnie przetwarzany element w pętli lub operacji na tablicy.
- W tej pętli `item()` odnosi się do _bieżącego elementu_ przetwarzanego.

📌 **Gdzie się jej używa?**

- **Zastosuj do każdego:** aby uzyskać właściwości bieżącego elementu.
- **Wybierz:** aby przekształcić każdy element w tablicy.
- **Filtruj tablicę:** aby odwołać się do bieżącego elementu ocenianego.

🦋 **Przykład**

- Wyrażenie w pętli:
       -  `item()?['Email']`
- Pobiera właściwość `Email` bieżącego elementu.

💡 **Kluczowe punkty**

- `item()` jest _kontekstowo zależne_: zawsze odnosi się do bieżącego elementu w pętli lub operacji na tablicy.
- Jeśli zagnieżdżasz pętle, możesz użyć `items('LoopName')`, aby odwołać się do elementów w konkretnej pętli.

Wybierz **Dodaj**, aby dodać wyrażenie do parametru **Tytuł CV**.

![Dodaj wyrażenie dla parametru Tytuł CV](../../../../../translated_images/3.1_22_ResumeTitleParameter.9e4fa71a5251cb899e7b09bcc3052eeda1e512841f929118eb9e2b1d232ecb07.pl.png)

1. Nadal musimy skonfigurować kilka parametrów. Wybierz **Pokaż wszystko**, a w polu **List motywacyjny** wybierz ikonę **błyskawicy** lub **fx** po prawej stronie.

W zakładce **Funkcja** wpisz następujące wyrażenie, które używa tego samego wyrażenia co w poprzedniej [misji](../02-multi-agent/README.md).

```text
if(greater(length(body('Html_to_text')), 2000), substring(body('Html_to_text'), 0, 2000), body('Html_to_text'))
```

To wyrażenie sprawdza, czy _tekst_ z akcji **Html to text** jest dłuższy niż 2000 znaków, a jeśli tak, zwraca tylko pierwsze 2000 znaków; w przeciwnym razie zwraca pełny tekst.

![Dodaj wyrażenie dla parametru List motywacyjny](../../../../../translated_images/3.1_23_CoverLetterParameter.d2b521d6b37d05ac4760c91de2964b6d062585a333af6989d9ac0794a4139463.pl.png)

1. Wyrażenie zostanie teraz dodane do pola **List motywacyjny**.

![Wyrażenie dodane do parametru List motywacyjny](../../../../../translated_images/3.1_24_ExpressionForCoverLetter.3d18124b10b76bad92db61c529ae395b0bb05f3215e3b783771e76ef7677664e.pl.png)

1. Dla pola **Adres e-mail źródła** wyszukaj `from` i wybierz parametr **From** z wyzwalacza, ponieważ zawiera on wartość adresu e-mail.

![Parametr Adres e-mail źródła](../../../../../translated_images/3.1_25_FromParameter.1ed1be46711f6705fb807996f6f1e873adc22e285186a851272e0cf3855487ef.pl.png)

1. Dla pola **Data przesłania** wybierz ikonę **błyskawicy** lub **fx** po prawej stronie. W zakładce **Funkcja** wpisz następujące wyrażenie, które używa funkcji `utcNow()`.

```text
utcNow()
```

Aby dowiedzieć się więcej o funkcji `utcNow`, rozwiń poniższy blok dodatkowej nauki.

??? info "Dodatkowa nauka: Funkcja `utcNow`"

🤔 **Co to jest funkcja `utcNow()`?**

- Funkcja utcnow() w Power Automate zwraca bieżącą datę i czas w uniwersalnym czasie koordynowanym (UTC) w formacie ISO 8601, na przykład: `2025-09-23T04:32:14Z`

🦋 **Przykład**

- Wyrażenie:
       -  `concat('Raport wygenerowany dnia ', utcnow())`
- Wynik to:
       - Raport wygenerowany dnia `2025-09-23T04:32:14Z`

💡 **Kluczowe punkty**
- **Nie wymaga argumentów (parametrów wejściowych):** zawsze zwraca aktualny znacznik czasu UTC.
   - **Przykłady użycia**
       - Dodawanie znaczników czasu do logów lub nazw plików
       - Porównywanie bieżącego czasu z innymi datami
       - Planowanie lub warunki oparte na czasie

![Parametr daty przesłania](../../../../../translated_images/3.1_26_UploadDateParameter.21b0afc9807bf680c1c432066f1644d4d018cb4988ad0c0788b5186cea285e02.pl.png)

1. Zakończyliśmy konfigurację akcji **Dodaj nowy wiersz CV**, więc wyjdźmy z panelu, zwijając go.

![Wyjście z panelu akcji](../../../../../translated_images/3.1_27_CollapseAction.c033a86e4d8501b10fc454ba7f9c5e08d71d6d881fc72f58011152e1c5d7a7bb.pl.png)

1. Dodamy nową akcję, wybierając **+ ikonę** poniżej akcji **Dodaj nowy wiersz CV**, co załaduje panel do dodawania akcji. Wybierz ponownie konektor **Microsoft Dataverse**.

![Dodaj akcję Dataverse](../../../../../translated_images/3.1_28_AddDataverseAction.1af4dedc95001bfb56b0a642231e9c82b57459b10c68bf6fc177382339a0a221.pl.png)

1. Wybierz akcję **Prześlij plik lub obraz**.

![Dodaj akcję Prześlij plik lub obraz](../../../../../translated_images/3.1_29_AddUploadAFileOrAnImage.e40ab21b735e37bd1fdb5020b7433d1a2f01d6e387bc43a437e970c6e20ee779.pl.png)

1. Zmień nazwę akcji, wybierając **Elipsę (...)**, skopiuj i wklej poniższe jako nazwę:

```text
Prześlij plik CV
```

![Zmień nazwę akcji](../../../../../translated_images/3.1_30_RenameAction.c316fdf225f88e5c3ee26649e672472829c3372c804b544a1372b0455937c204.pl.png)

1. Następnie wybierz pole **Nazwa zawartości** i kliknij **ikona pioruna** lub **ikona fx** po prawej stronie.

W zakładce **Funkcja** wprowadź następujące wyrażenie, które używa funkcji `item ()`. Pobiera ono właściwość `name` bieżącego elementu (plik załącznika).

```text
item()?['name']
```

![Skonfiguruj parametr nazwy zawartości](../../../../../translated_images/3.1_31_ContentNameParameter.c6606773f1e82dbcea93d7c2f52dff7a2168f9f04d6b865f699f56d62a41d4ec.pl.png)

1. Dla parametru **Nazwa tabeli** wyszukaj `res` i wybierz tabelę **CV**.

![Skonfiguruj parametr nazwy tabeli](../../../../../translated_images/3.1_32_SelectResumesTable.6a00bf6d585002219003da47f6e1042dc67cbdb3fbaf7d959253550035e27520.pl.png)

1. Następnie wybierz pole **ID wiersza** i kliknij **ikona pioruna** lub **ikona fx** po prawej stronie.

Wyszukaj `ID` i wybierz parametr **CV** z akcji _Dodaj nowy wiersz_ Dataverse, ponieważ zawiera on wartość ID wiersza, do którego należy przesłać plik PDF.

Wybierz **Dodaj**.

![Wybierz parametr ID wiersza](../../../../../translated_images/3.1_33_RowIDParameter.9824c6b5ea5edf0ce018140c20431a97c2e750d61bcb787f67da260acb6a3838.pl.png)

1. Wybierz pole **Nazwa kolumny** i wybierz opcję **CV PDF**.

![Skonfiguruj parametr nazwy kolumny](../../../../../translated_images/3.1_34_ColumnNameParameter.ef4f770cbd84cae5c15cfe06d1bdbe028d0c6d54a2286dab30769fa01c948b71.pl.png)

1. Wybierz pole **Zawartość** i kliknij **ikona pioruna** lub **ikona fx** po prawej stronie.

W zakładce **Funkcja** wprowadź następujące wyrażenie, które używa funkcji `item ()`. Pobiera ono właściwość `contentBytes` bieżącego elementu (plik załącznika). `contentBytes` odnosi się do surowych danych binarnych pliku lub załącznika, zakodowanych jako ciąg Base64.

```text
item()?['contentBytes']
```

1. Zakończyliśmy konfigurację tej akcji, więc wyjdźmy z akcji, wybierając podwójne nawiasy («) skierowane w lewo, aby zwinąć panel.

![Zwiń panel akcji](../../../../../translated_images/3.1_36_CollapseAction.1813a7219f0f37b87f80c2cd9f5a9626c3a320858d08a0e62cf14736f97db4c6.pl.png)

1. Następnie wybierz **Wyślij zapytanie do określonego copilota do przetworzenia**, a następnie przeciągnij i upuść tę akcję poniżej akcji **Prześlij plik CV** w ścieżce _True_ warunku.

![Przeciągnij i upuść akcję w ścieżce True](../../../../../translated_images/3.1_37_DragAndDropAction.57dc2e9f9d25ed892a4fc072a72c55eca6c38e313ab48fb9db37e9371995440f.pl.png)

1. Wybierz **Wyślij zapytanie do określonego copilota do przetworzenia**, aby skonfigurować.

![Wybierz akcję](../../../../../translated_images/3.1_38_SelectAction.d125bdf661f66b6397542c75efbc6a78b8c4862e03dce4002776c251f1c48382.pl.png)

1. W polu **Treść/wiadomość** wybierz całą zawartość pola i wyczyść/usuń ją.

![Wyczyść parametr Treść](../../../../../translated_images/3.1_39_ClearBodyParameter.6a345b2e5dbe5510184d7bae7cd406b8cec72c714f34bb40e30741e445a491c0.pl.png)

1. Skopiuj i wklej poniższy tekst do pola **Treść/wiadomość** i zaznacz `RESUME ID PLACEHOLDER`.

```text
Wyślij [ResumeId (text)] = "RESUME ID PLACEHOLDER" oraz [ResumeTitle (text_1)] = "RESUME TITLE PLACEHOLDER" oraz [ResumeNumber (text_2)]= "RESUME NUMBER PLACEHOLDER" do narzędzia "Notify Teams Applicant channel" w agencie podrzędnym "Application Intake Agent"
```

![Zastąp tekst Placeholder ID CV](../../../../../translated_images/3.1_40_ReplaceResumeIDPlaceholder.eb61590503cb37d89121aaed6d979a4272aa30c87700206e04db8005e60b294f.pl.png)

1. Wybierz **ikona pioruna** lub **ikona fx** po prawej stronie.

Wyszukaj `resume` i wybierz parametr **CV** z akcji _Dodaj nowy wiersz Dataverse_, ponieważ zawiera wartość `ID` wiersza CV utworzonego.

Wybierz **Dodaj**.

![Wybierz parametr CV](../../../../../translated_images/3.1_41_SelectResumeParameter.61c4457c33e5d1b596169857535bfc560ef677264f8798e9148ceac999eeaeb9.pl.png)

1. Zaznacz `RESUME TITLE PLACEHOLDER`. Wybierz **ikona pioruna** lub **ikona fx** po prawej stronie.

Wyszukaj `title` i wybierz parametr **Tytuł CV** z akcji _Dodaj nowy wiersz Dataverse_, ponieważ zawiera wartość `tytuł CV` wiersza CV utworzonego.

Wybierz **Dodaj**.

![Wybierz parametr Tytuł CV](../../../../../translated_images/3.1_42_SelectResumeTitleParameter.6c887607128f928da15c4cf6c22254d0473bc22514aa883462fd812bf14245e0.pl.png)

1. Zaznacz `RESUME NUMBER PLACEHOLDER`. Wybierz **ikona pioruna** lub **ikona fx** po prawej stronie.

Wyszukaj `resume number` i wybierz parametr **Numer CV** z akcji _Dodaj nowy wiersz Dataverse_, ponieważ zawiera wartość `Numer CV` wiersza CV utworzonego.

Wybierz **Dodaj**.

![Wybierz parametr Numer CV](../../../../../translated_images/3.1_43_SelectResumeNumberParameter.ca19197525250483a7e94598b621072b47ebdf5deb939e1387c979e807ddc554.pl.png)

1. Zakończyliśmy konfigurację tej akcji i naszego przepływu agenta 🙌🏻 Świetna robota! Teraz zapiszmy nasz przepływ wyzwalacza zdarzenia, wybierając **Zapisz wersję roboczą**.

![Zapisz wersję roboczą](../../../../../translated_images/3.1_44_SaveDraft.0c9eee19f0c7cb8483b8d31bc17e1dd54075352d22f0f44603a9d52b52429188.pl.png)

1. Teraz musimy edytować szczegóły przepływu agenta, wybierz **Wstecz**.

![Wybierz Wstecz](../../../../../translated_images/3.1_45_Back.3f85535977bdb02231a0fdb8465e0e8b7d86fd5342ff933e4ae8bf9610279989.pl.png)

1. W sekcji **Szczegóły** wybierz **Edytuj** i zaktualizuj **Plan** na opcję **Copilot Studio**.

Wybierz **Zapisz**.

![Zmień plan Copilot Studio](../../../../../translated_images/3.1_46_ChangePlanDetails.6ab15f1f8bd9ebe55b2c1576c3495f47d1a29d7435e343d4c590e46647601269.pl.png)

1. Pojawi się modal z prośbą o potwierdzenie przełączenia na plan Copilot Studio. Wybierz **Potwierdź**.

![Potwierdź zmianę planu Copilot Studio](../../../../../translated_images/3.1_47_ConfirmCopilotStudioPlan.bc6ab52e7c982127154b0fb743f85ff9cc05dcab944dffc9485bdbcbe0811397.pl.png)

1. Plan został zaktualizowany na **Copilot Studio**. Wybierz **Edytuj**, ponieważ musimy opublikować przepływ wyzwalacza zdarzenia dla naszego agenta.

![Edytuj przepływ](../../../../../translated_images/3.1_48_PlanChangedAndEdit.3c3207766a648817f7a7878c3a6f684cf41cdceea4dca8f6fc43b7315c8dd648.pl.png)

1. Wybierz **Opublikuj**.

![Opublikuj](../../../../../translated_images/3.1_49_Publish.38ff814cfce6b3be1076cafb0c28e4e344f75d8cd4117fabed13ad361d4fde3f.pl.png)

Hurra! Przepływ wyzwalacza zdarzenia został opublikowany 😃

![Opublikowano](../../../../../translated_images/3.1_50_Published.449e7867f7b027ae8a524c749357a1b931955062828bacc3b5a51e979755ef4a.pl.png)

Przejdźmy teraz do tworzenia nowego przepływu agenta, który będzie wywoływany przez podrzędnego **Application Intake Agent**.

### Laboratorium 3.2 - Powiadom kanał Teams za pomocą karty adaptacyjnej

Teraz stworzymy nowy przepływ agenta dla podrzędnego **Application Intake Agent**, który wykorzysta wartości przekazane przez wyzwalacz zdarzenia, aby opublikować kartę adaptacyjną na kanale Teams. Ta karta adaptacyjna powiadomi zespół rekrutacyjny HR o automatycznie przesłanym pliku PDF, aby mogli go przejrzeć.

Zaczynajmy!

1. W **Hiring Agent** wybierz kartę **Agenci** i wybierz **Application Intake Agent**.

![Wybierz Application Intake Agent](../../../../../translated_images/3.2_01_SelectApplicationIntakeAgent.0e9dd3da5c52e9f59ab3a4545c01897ad830853b650ec42f7f8424aa530e0409.pl.png)

1. Przewiń w dół do **Narzędzia** i wybierz **+ Dodaj**.

![Dodaj narzędzie](../../../../../translated_images/3.2_02_AddNewTool.7c62275fd9f28cdc1923ea056a148171048dc568ff78056958fd54862133f90e.pl.png)

1. Pojawi się modal **Dodaj narzędzie**. Wybierz **+ Nowe narzędzie**.

![Wybierz Nowe narzędzie](../../../../../translated_images/3.2_03_SelectNewTool.215e7637a9f065a3799a1ecf248eed1e859f201d2dfdfab71a7c1dc18e454e2d.pl.png)

1. Wybierz **Przepływ agenta**.

![Wybierz Przepływ agenta](../../../../../translated_images/3.2_04_SelectAgentFlow.7bc12b3435efccc0cfee8f563640562f87d173b436b3313a3d1256fe35024907.pl.png)

1. Następnie załaduje się **projektant przepływu agenta**. W wyzwalaczu **Gdy agent wywołuje przepływ**, wybierz **+ Dodaj dane wejściowe**.

![Wybierz dodaj dane wejściowe](../../../../../translated_images/3.2_05_SelectAddAnInput.f3dc8465f490929baccb0f2dc72b50629b1435ff8a3861f7974885d1d36cdeb1.pl.png)

1. Wybierz **Tekst** jako typ danych wejściowych użytkownika.

![Wybierz Tekst](../../../../../translated_images/3.2_06_SelectText.93585b4af8c4e277c11c2052b638e249508a24a075987026a6ec346e75184217.pl.png)

1. W polu tekstowym danych wejściowych skopiuj i wklej poniższe jako nazwę parametru wejściowego.

```text
ResumeId
```

![Dane wejściowe ResumeId](../../../../../translated_images/3.2_07_ResumeIdInput.a9e127e343856d6c6d45dd1251cade0503bad9484bc563c02155390951b1faa5.pl.png)

1. Powtórz te same kroki, aby dodać drugie dane wejściowe tekstowe. Skopiuj i wklej poniższe jako nazwę parametru wejściowego.

```text
ResumeTitle
```

![Dane wejściowe ResumeTitle](../../../../../translated_images/3.2_08_ResumeTitleInput.c71ecd364a974a93abb0de876807c2e9bde59fcea6df317babeb20764b636f26.pl.png)

1. Powtórz te same kroki, aby dodać trzecie dane wejściowe tekstowe. Skopiuj i wklej poniższe jako nazwę parametru wejściowego.

```text
ResumeNumber
```

![Dane wejściowe ResumeNumber](../../../../../translated_images/3.2_09_ResumeNumberInput.a6c060000354deab51dffef3c1ad9f13378cfeabdafdb7a33c2a591bfd044709.pl.png)

1. Pamiętasz, jak w [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request) dodaliśmy kartę adaptacyjną w ramach Tematu dla naszego agenta? Tym razem dodamy kartę adaptacyjną w przepływie agenta. Teraz dodamy kolejną akcję do naszego przepływu agenta, która opublikuje kartę adaptacyjną na kanale Teams.

Wybierz **+ ikonę** poniżej wyzwalacza.

![Dodaj nową akcję](../../../../../translated_images/3.2_10_AddNewAction.4474a2150991cac246d5e4091a74ba91e76e1c5bafa34ad985a8567c09dcdd35.pl.png)

1. Wybierz akcję **Opublikuj kartę w czacie lub kanale**.

![Wybierz akcję Opublikuj kartę w czacie lub kanale](../../../../../translated_images/3.2_11_SelectPostCardInAChatOrChannel.97de43ed1c883b14d0150ae65efaa90f53f0815bdf57ec10e0e22cbd3e22ce06.pl.png)

1. Referencja połączenia z Microsoft Teams musi zostać utworzona za pomocą Twojego zalogowanego konta użytkownika. Wybierz **Zaloguj się**.

![Wybierz Zaloguj się](../../../../../translated_images/3.2_12_SignInToCreateConnectionReference.2297f8b702d71508f1b21a3ed4046df4846dc03b13932a20e5c445403559ac1f.pl.png)

1. Wybierz swoje konto użytkownika, a następnie wybierz **Zezwól na dostęp**.

![Wybierz Zezwól na dostęp](../../../../../translated_images/3.2_13_AllowAccess.31cbf82606d75231108bd4f2bfeafffda3cd7e7e760cd46004c2705afe050aaf.pl.png)

1. Dla następujących parametrów wejściowych:

| Parametr | Jak ustawić | Szczegóły |
|----------|------------|---------|
| **Opublikuj jako** | Lista rozwijana | Wybierz opcję `Flow bot` |
| **Opublikuj w** | Lista rozwijana | Wybierz opcję `Kanał` |
| **Zespół** | Lista rozwijana | Wybierz zespół dostępny w Twoim środowisku, do którego masz dostęp w celu ukończenia tego ćwiczenia |
| **Kanał** | Lista rozwijana | Wybierz kanał dostępny w Twoim środowisku, do którego masz dostęp w celu ukończenia tego ćwiczenia |

![Skonfiguruj parametry wejściowe](../../../../../translated_images/3.2_14_ConfigureParameters.8c21924f90db3acaa33d4e35ef43c70556ba4cc37207a195ac654e55a43400a6.pl.png)

1. Następnie skonfigurujemy pole **Karta adaptacyjna**. Wybierz pole **Karta adaptacyjna**.

![Wybierz pole Karta adaptacyjna](../../../../../translated_images/3.2_15_SelectAdaptiveCardParameter.65323056be6174d2eed7422650aaa70fc16396148f90b8af1801110d7a30d66f.pl.png)

1. Otwórz [Plik JSON zaktualizowanej tabeli CV](../../../../../docs/operative-preview/03-automate-triggers/assets/3.2_ResumeTableUpdated.json), skopiuj jego całą zawartość i wklej ją do pola Karta adaptacyjna.

![Skopiuj i wklej JSON](../../../../../translated_images/3.2_16_JSON.f022097fb7139bd12514abb8fdc518309ea940f005cc94a11ba159359cde784b.pl.png)

1. Podobnie jak zrobiliśmy w [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request), zamienimy istniejące wartości w ładunku JSON na rzeczywiste wartości lub dynamiczną zawartość.

Najpierw zaktualizujmy URL dla właściwości `url` w ramach właściwości `selectAction`. Ten URL zostanie zastąpiony URL-em widoku systemowego CV w aplikacji model-driven **Hiring Hub**. Pozwoli to Rekruterowi wybrać akcję i zostać przekierowanym do widoku systemowego CV w aplikacji model-driven.

Zaznacz bieżącą wartość URL i usuń ją.

![Wybierz wartość URL](../../../../../translated_images/3.2_17_SystemViewURL.5e51fd894ac916f436107c7b668d66ca87ca8bdfd7affeb7dae1b10fa8ff5afb.pl.png)

1. W aplikacji model-driven **Hiring Hub** przejdź do widoku systemowego **CV** za pomocą menu po lewej stronie i skopiuj URL. Następnie wróć do przepływu agenta i wklej skopiowany URL do właściwości **url** w ramach właściwości `selectAction`.

![Skopiuj URL widoku systemowego CV](../../../../../translated_images/3.2_18_CopyResumesSystemViewURL.14d9f55c7db15977a12dfe2a5df95aab5cf241e646b08f9838cff31aaa27a381.pl.png)
1. Powinieneś zobaczyć poniższe, gdzie na żółto zaznaczone są szczegóły środowiska aplikacji modelowej **Hiring Hub**.

     | Parametr | Wartość | Wyjaśnienie |
     |----------|------------|---------|
     | **Organization URI** | GUID | URL organizacji środowiska Dataverse/Dynamics 365 |
     | **appid** | GUID | Aby otworzyć konkretną aplikację modelową, używany jest parametr zapytania appid lub appname. W tym przypadku używany jest appid |
     | **viewid** | GUID | Parametr zapytania, który jest identyfikatorem widoku |

       ![Wklej URL](../../../../../translated_images/3.2_19_PasteURL.41f3fdd66190c8ba478857f91c90eb05ee9621243bda7b7ad26eb5802b8e970d.pl.png)

1. Następnie dodamy wartości dynamicznej zawartości dla kilku właściwości. Zacznijmy od tekstu, który wyświetli odniesienie do numeru CV wiersza utworzonego automatycznie przez wyzwalacz zdarzenia.

      Wybierz ikonę **panelu**, aby załadować panel akcji.

       ![Wybierz ikonę panelu](../../../../../translated_images/3.2_20_SelectPannelIcon.786a4147ba12e0e62648c66f14fb2b9a7f89b27c3a610f43420e31cb0c9fb5da.pl.png)

1. Przewiń w dół do linii, gdzie widzisz właściwość `text` dla `RESUME NUMBER PLACEHOLDER`. Zaznacz wartość zastępczą i usuń ją.

       ![Usuń wartość zastępczą](../../../../../translated_images/3.2_21_DeleteResumeNumberPlaceholder.6ffd7a5a073f9d9a11e0e119c87e827243de237f70ebc3ab37dfdd36de615130.pl.png)

1. Kliknij między cudzysłowami i wybierz ikonę **błyskawicy** lub **fx** po prawej stronie.

      W zakładce **Dynamic Content** wybierz parametr **ResumeNumber** i kliknij **Add**.

       ![Dodaj parametr ResumeNumber](../../../../../translated_images/3.2_22_SelectResumeNumberParameter.de5a6eecb3ee092441d841ad137dfecd9f8d503a370ff60eb5ccdc0267e37df0.pl.png)

1. Parametr **ResumeNumber** zostanie teraz dodany jako dynamiczna zawartość do właściwości `text`.

       ![Dynamiczna zawartość ResumeNumber](../../../../../translated_images/3.2_23_ResumeNumberDynamicContent.129a566ac6e9d448b268b828da5766a7056779ac167f65b498e2ca21d703b7f0.pl.png)

1. Powtórzymy te same kroki dla `RESUME NAME PLACEHOLDER`. Przewiń w dół do linii, gdzie widzisz właściwość `text` dla `RESUME NAME PLACEHOLDER`. Zaznacz wartość zastępczą i usuń ją.

       ![Wartość zastępcza nazwy CV](../../../../../translated_images/3.2_24_ResumeNamePlaceholder.6c879b99ae375892f7e0a511bfedd5fa9e60a8dea71ea2a44c2a7a04c8389f43.pl.png)

1. Kliknij między cudzysłowami i wybierz ikonę **błyskawicy** lub **fx** po prawej stronie.

      W zakładce **Dynamic Content** wybierz parametr **ResumeTitle** i kliknij **Add**.

       ![Dodaj parametr ResumeTitle](../../../../../translated_images/3.2_25_SelectResumeTitleParameter.18c769bbd2c60e362a56f6055e151ed6287903cb625addcdfbb43044828d7378.pl.png)

1. Parametr **ResumeTitle** zostanie teraz dodany jako dynamiczna zawartość do właściwości `text`.

       ![Dynamiczna zawartość ResumeTitle](../../../../../translated_images/3.2_26_ResumeTitleDynamicContent.7219e078f71fc0d5d4a6bb228ba2d53f0898ba26a27c5eb859df90d12dd52c70.pl.png)

1. Powtórzymy te same kroki dla wartości **Due Date**, która reprezentuje termin, do którego rekruter powinien przejrzeć CV. Przewiń w dół do linii, gdzie widzisz właściwość `text` dla `May 21, 2023`.

       ![Wybierz Zezwól na dostęp](../../../../../translated_images/3.2_27_DueDatePlaceholder.17c6003cc9ec1141b0aeb5cde203098a7f5534fa11f01a3cbffb66206ed1633a.pl.png)

1. Usuń wartość zastępczą daty i kliknij między cudzysłowami.

       ![Usuń](../../../../../translated_images/3.2_28_DeleteDueDatePlaceholder.9a3df55fb3c9ed72e61e0a60dc3344335b0444ff537c9fb51036b0442a85d268.pl.png)

1. Wybierz ikonę **błyskawicy** lub **fx** po prawej stronie i w zakładce **Function** wpisz następujące wyrażenie i kliknij **Add**.

       ```text
       addDays(utcNow(), 3, 'MMM dd, yyyy')
       ```

      To wyrażenie wykorzystuje dwie funkcje.

     | Funkcja | Wyjaśnienie |
     |----------|------------|
     | **addDays** | Dodaje określoną liczbę dni do podanej daty i zwraca wynikową datę w formacie tekstowym |
     | **utcNow** | Zwraca bieżącą datę i czas w formacie czasu uniwersalnego (UTC) jako ciąg znaków. |

      Dla wartości utcNow formatujemy datę jako miesiąc i dzień, a następnie rok.

       ![Wyrażenie Due Date](../../../../../translated_images/3.2_29_01_ExpressionDueDate.a4fa31985f5500971f2fc6da0e81e008af12be19d54a30a240764b74a4b2dbcb.pl.png)

      Wyrażenie zostanie teraz dodane do właściwości `text`.

       ![Wyrażenie Due Date](../../../../../translated_images/3.2_29_02_ExpressionDueDate.6159288450731c7b09628af70f0c9a6d92590ca7c7e39e8a524ae8af7c511f2c.pl.png)

1. Na koniec zaktualizujemy URL dla właściwości `url` w ramach właściwości `actions` w dolnej części ładunku JSON. Obecny URL zastępczy zostanie zastąpiony URL-em wiersza CV w aplikacji modelowej **Hiring Hub**. Pozwoli to rekruterowi wybrać akcję `Action.OpenURL` na karcie adaptacyjnej i zostać przekierowanym do CV w aplikacji modelowej.

       ![Usuń wartość zastępczą URL widoku CV](../../../../../translated_images/3.2_30_ViewResumeURLPlaceholder.f27af6cadfb54fb977f0b46ea3ec42ee0638d38ebc5d294eff5da52abf9d4a1b.pl.png)

1. W aplikacji modelowej **Hiring Hub** otwórz wiersz w widoku systemowym **Resumes** za pomocą menu po lewej stronie. Wiersz CV załaduje się jako formularz w aplikacji modelowej.

      Skopiuj URL wiersza CV.

    ??? info "Jak wrócić do aplikacji modelowej **Hiring Hub**, jeśli ją zamknąłeś"

        1. Przejdź do [https://make.powerapps.com](https://make.powerapps.com) i upewnij się, że jesteś w środowisku deweloperskim, którego używasz do tych ćwiczeń, w przeciwnym razie przełącz się na nie.
        
        ![Przejdź do make.powerapps.com](../../../../../translated_images/3.2_31_Note_01_BrowseToURL.a13dfc8b05a0b34f3a4c853f3d3e418864176b52b1b40c069da7712af5562aa5.pl.png)

        1. Wybierz **Apps** w menu po lewej stronie i dla aplikacji modelowej **Hiring Hub** wybierz ikonę **Play**, aby załadować ją w przeglądarce.
        
        ![Wybierz aplikację modelową Hiring Hub](../../../../../translated_images/3.2_31_Note_02_HiringHubApp.a09b6ea28b4fea8932809cb847cb0ea3d8faeb7b7b5604852de1f46ab1e9741b.pl.png)

       ![Skopiuj URL wiersza CV](../../../../../translated_images/3.2_31_CopyResumeURL.f6156f8792526129c2613922f0137221b2944fa8ffe7c04766d710521ad8765b.pl.png)

1. Następnie wróć do przepływu agenta, zaznacz obecny URL zastępczy i usuń go.

       ![Usuń wartość zastępczą URL wiersza CV](../../../../../translated_images/3.2_32_SelectResumeURLPlaceHolder.8db783de292428eaa8937242eba4a54ebb1df7bf4c1bc9391b016ee545fb2b9f.pl.png)

1. Następnie wklej skopiowany URL do właściwości **url** w ramach właściwości `url`.

       ![Wklej skopiowany URL wiersza CV](../../../../../translated_images/3.2_33_PasteResumeRowURL.d7ba92493d7597b89f75e2f17f76846ac17a9ba89c2e36729dc6b5dc1599b047.pl.png)

1. Powinieneś zobaczyć poniższe. Usuń wartość identyfikatora `GUID` na końcu. Zastąpimy ją dynamiczną zawartością - parametrem **ResumeId**.

       ![Usuń wartość zastępczą URL widoku CV](../../../../../translated_images/3.2_34_DeleteViewResumePlaceholderURL.7b26209eaeef6dc0a21b16140d05fe2f0e38de5f714575edd24d21dded58102a.pl.png)

1. Wybierz ikonę **błyskawicy** lub **fx** po prawej stronie.

      W zakładce **Dynamic Content** wybierz parametr **ResumeId** i kliknij **Add**.

       ![Parametr ResumeId](../../../../../translated_images/3.2_35_ResumeIdParameter.3dc710a7f5216944387f4d5f82c0a372eee23ee5259dec04147ad00e9c454d7d.pl.png)

1. Parametr **ResumeId** zostanie dodany jako dynamiczna zawartość. Poniższe, zaznaczone na żółto, to szczegóły środowiska aplikacji modelowej **Hiring Hub**.

     | Parametr | Wartość | Wyjaśnienie |
     |----------|------------|---------|
     | **Organization URI** | GUID | URL organizacji środowiska Dataverse/Dynamics 365 |
     | **appid** | GUID | Aby otworzyć konkretną aplikację modelową, używany jest parametr zapytania appid lub appname. W tym przypadku używany jest appid |
     | **id** | GUID | Parametr zapytania, który jest identyfikatorem wiersza CV |

       ![Dynamiczna zawartość ResumeId](../../../../../translated_images/3.2_36_ResumeIdDynamicContent.a1a40dfb4a83b60f1b75b02160890e3fec41c2c7df8adf32e02d652a57c1ee87.pl.png)

1. Zakończyliśmy konfigurację akcji **Post card in a chat or channel** 👏🏻 Wyjdź z panelu konfiguracji akcji, wybierając ikonę **x**.

       ![Zamknij panel](../../../../../translated_images/3.2_37_CloseActionPanel.23d07107381411aa9494ef36fb240682a0727a63e6f15082074b34a1defd517b.pl.png)

1. Na koniec skonfigurujemy ostatnią akcję, **Respond to the agent**, wysyłając tekst z powrotem do agenta, aby zakończyć przetwarzanie.

      W akcji **Respond to the agent** wybierz **+Add an output**.

       ![Wybierz Dodaj wyjście](../../../../../translated_images/3.2_38_AddAnOutput.de1a0e49033cb077eb5d2c226152bbb06dc12fb95d0496c69d469eecdb46c0ae.pl.png)

1. Wybierz **Text** jako typ wyjścia.

       ![Wybierz tekst jako typ wyjścia](../../../../../translated_images/3.2_39_SelectText.4e1e82c35fe9d1b569b668092d405aa9b0c81fbe67e7de68a660f2083ed3afdd.pl.png)

1. Wprowadź następujące jako nazwę wyjścia.

       ![Wyjście zakończenia rozmowy](../../../../../translated_images/3.2_40_EndConversationOutput.e392b58847d8439443c89459fccbbd88d4ea5e5fa562749b77407c46b9ff4ca4.pl.png)

1. Wprowadź następujące jako wartość wyjścia.

       ```text
       Finished
       ```

       ![Wartość wyjścia zakończenia rozmowy](../../../../../translated_images/3.2_41_EndConversationOutputValue.2cb836900ee9fca802926676e613b077938f1106cc16e77ddd77af64ce92dcc8.pl.png)

1. Zakończyliśmy konfigurację przepływu agenta. Wybierz **Save draft**, aby zapisać przepływ agenta. Po zapisaniu pojawi się komunikat potwierdzający.

       ![Zapisz wersję roboczą](../../../../../translated_images/3.2_42_SaveDraft.1bb26eec40faf5d2c244d93f869344915e90423623e07e02cac2c1f8c73d1a4a.pl.png)

1. Przed opublikowaniem przepływu agenta musimy zaktualizować szczegóły przepływu agenta. Wybierz zakładkę **Overview** i kliknij **Edit**.

      W polu nazwy przepływu wprowadź następujące.

       ```text
       Notify Teams Applicant channel
       ```      

      Następnie wybierz ikonę **Refresh**, aby zaktualizować opis przepływu agenta za pomocą AI.

      Następnie wybierz **Save**, aby zapisać zaktualizowane szczegóły przepływu agenta.

       ![Edytuj i zapisz szczegóły](../../../../../translated_images/3.2_43_EditDetails.f0c9b53a9c1b29e4aa3c34774680559ae9173f77b3a37817bab2296b77ffcca7.pl.png)

1. Wróć do zakładki **Designer** i wybierz **Publish**, aby opublikować przepływ agenta. Po zapisaniu pojawi się komunikat potwierdzający.

       ![Opublikuj przepływ agenta](../../../../../translated_images/3.2_44_PublishAgentFlow.3014e6de5e53aa5fc2021bf6e11b901c4990b4fbb4d4cee33cc6d5b6cc641ed8.pl.png)

1. Przepływ agenta musi teraz zostać dodany jako narzędzie w **Application Intake Agent**. Wróć do **Hiring Agent** i wybierz zakładkę **Agents**, a następnie wybierz **Application Intake Agent**.

       ![Wybierz Application Intake Agent](../../../../../translated_images/3.2_45_ApplicationIntakeAgent.0446b1762d0f499e880e7984f59669639193566f72539cd4fba5c62cd1fe8726.pl.png)

1. W sekcji **Details** agenta zaktualizujemy pole **Description**. Skopiuj poniższe i wklej na końcu tekstu opisu.

       ```text
       and also notify the Teams Applicant channel
       ```

       ![Zaktualizuj opis agenta](../../../../../translated_images/3.2_46_UpdateAgentDescription.56344699cd3cc5e417e8f95362ed2288d0c0391f33bd98872e7e008a545175f0.pl.png)

1. Następnie dodamy przepływ agenta jako narzędzie. Przewiń w dół i wybierz **+ Add**.

       ![Wybierz Dodaj](../../../../../translated_images/3.2_47_AddTools.c7557e272bd731129dffe9edebba3b04170d27806aaa14fffbe3d66b7b61808b.pl.png)

1. Wybierz wcześniej utworzony przepływ agenta, **Notify Teams Applicant Channel**.

       ![Wybierz przepływ agenta](../../../../../translated_images/3.2_48_NotifyTeamsApplicantChannelAgentFlow.5985f570786edef4eac93455f7a07978c0daf54e1371660bfd56a4c16b6aaf79.pl.png)

1. Następnie wybierz **Add and configure**.

       ![Wybierz Dodaj i skonfiguruj](../../../../../translated_images/3.2_49_AddAndConfigure.c2d6cccfa9e4bb23ff58b615ad16d0b3ade4ef867b73b9196a45df6990d8072f.pl.png)

1. W sekcji **Inputs** przepływu agenta widoczne są trzy wejścia, które skonfigurowaliśmy wcześniej w przepływie agenta. Domyślnie konfiguracja **Fill using** jest ustawiona na **Dynamically fill with AI**. Pozostawimy to ustawienie bez zmian, ponieważ prompt z wyzwalacza zdarzenia (w ostatniej akcji, **Sends a prompt to the specified copilot for processing** - to kroki 38-44 z **Lab 3.1 - Automate uploading resumes to Dataverse received by email**) będzie zawierał wartości parametrów, które AI wyodrębni.

       ![Wejścia narzędzia przepływu agenta](../../../../../translated_images/3.2_50_Inputs.9fbb57b83b533d5a60f957505bb1e5430886ec9e6c70c10ed1c641d6b33fcc21.pl.png)

1. Teraz, gdy narzędzie zostało dodane do **Application Intake Agent**, instrukcje agenta muszą zostać zaktualizowane. Wybierz ikonę **strzałki wstecz**, aby wrócić do listy agentów.

       ![Wybierz ikonę strzałki wstecz](../../../../../translated_images/3.2_51_SelectBack.6a9a55176d931895777822d3f9276d5d12ffe379a8860dd521e1c895e8188bba.pl.png)

1. Wybierz **Application Intake Agent** w zakładce **Agents** w **Hiring Agent**.

       ![Wybierz Application Intake Agent](../../../../../translated_images/3.2_52_SelectApplicationIntakeAgent.039140313422e833389fd134b3a70a0eed11ba175ede5dbdc4abcce6004c7d2d.pl.png)

1. W polu **Instructions** wprowadź nową linię po instrukcjach `2.Post-Upload`. Skopiuj i wklej poniższe instrukcje.

       ```text
       Process for Resume Upload via Email
       1. When you receive a message, **Send [ResumeId (text)] = "1680265f-5793-f011-b41b-7c1e525be9f7" and [ResumeTitle (text_1)] = "TAYLOR TESTPERSON (FICTITIOUS).pdf" and [ResumeNumber (text_2)]= "R01026" to the Tool "Notify Teams Applicant channel"** in the child agent "Application Intake Agent", call [AGENT FLOW PLACEHOLDER]
       ```

       ![Zaktualizuj instrukcje Application Intake Agent](../../../../../translated_images/3.2_53_PasteCopiedInstructions.f24ed715e907cf023449a54b894354ca1252b198e9be694eec2875f7f647f9c2.pl.png)

1. Zaznacz tekst `[AGENT FLOW PLACEHOLDER`.

       ![Zaznacz wartość zastępczą](../../../../../translated_images/3.2_54_HighlightPlaceholder.6c3fcac3c8f4fb6e5cce2dbd6b6548b84652d009e20fa4a01183a9a1b42b24fb.pl.png)

1. Wprowadź znak ukośnika, `/`, i wybierz narzędzie **Notify Teams Applicant Channel**.

       ![Wybierz narzędzie Notify Teams Applicant Channel](../../../../../translated_images/3.2_55_NotifyTeamsApplicatnChannelTool.2e3dd1e9ee9b2dfe10e1f2feb7e3b74b08856ce3afb16dafae1f2c4b73da904f.pl.png)
1. Przepływ agenta będzie teraz wywoływany przez **Application Intake Agent** zgodnie z instrukcjami, po ostatnim działaniu (**Wysyła zapytanie do określonego copilota do przetworzenia**) w wyzwalaczu zdarzenia, które przesyła zapytanie zawierające wartości parametrów z powrotem do agenta.

      Wybierz **Zapisz**, aby zapisać zaktualizowane instrukcje dla **Application Intake Agent**.

       ![Wybierz Zapisz](../../../../../translated_images/3.2_56_Save.6abb0131f96b20d3753b5990313eaea6a237bef2bf0e2103a2ee5ba570fd7c04.pl.png)

1. Instrukcje zostaną teraz zaktualizowane po zapisaniu agenta.

       ![Instrukcje zaktualizowane](../../../../../translated_images/3.2_57_InstructionsUpdated.5bfbfe2ca1da16284358a9917246bd8676cd6c095839ed1c69361d992cacd2b3.pl.png)

1. Teraz musimy **Opublikować** **Hiring Agent**. Wybierz **Opublikuj** w prawym górnym rogu, a w oknie modalnym _Publish this agent_, które się pojawi, wybierz **Opublikuj**.

       ![Opublikuj Hiring Agent](../../../../../translated_images/3.2_58_PublishAgent.e7ec81c81b735de0cd11516aa944c759ea510e2b0bc9acf9f00d42d788896991.pl.png)

1. Po opublikowaniu pojawi się wiadomość potwierdzająca, że agent został opublikowany.

       ![Wiadomość potwierdzająca](../../../../../translated_images/3.2_59_AgentPublished.d15e01232544cf08943260dfbf61c92339dbd187620349e7c5a43add4796ed12.pl.png)

Teraz możemy przetestować agenta!

### Lab 3.3 - Testowanie wyzwalacza zdarzenia

1. Aby uruchomić wyzwalacz zdarzenia, należy wysłać e-mail z załączonym plikiem PDF CV. W Outlooku utwórz nową wiadomość e-mail.

     | Składnik e-maila | Szczegóły |
     |----------|------------|
     | **Do odbiorcy** | Użyj swojego zalogowanego konta jako wartości |
     | **Załącznik pliku** | Prześlij plik [TAYLOR TESTPERSON (FICTITIOUS)](../../../../../docs/operative-preview/test-data/resumes/TAYLOR%20TESTPERSON%20(FICTITIOUS).pdf) |
     | **Treść** | Skopiuj i wklej poniższy tekst jako treść wiadomości e-mail  |

       ```text
       Szanowny Kierowniku ds. Rekrutacji,

       Piszę, aby wyrazić swoje zainteresowanie stanowiskiem Starszego Inżyniera Power Platform w Państwa organizacji. Mając ponad dziewięcioletnie doświadczenie w dostarczaniu bezpiecznych i skalowalnych rozwiązań na platformach chmurowych Microsoft, jestem przekonany, że mogę skutecznie przyczynić się do rozwoju Państwa zespołu.

       W mojej ostatniej roli jako Główny Inżynier Power Platform opracowałem zautomatyzowany system przyjmowania CV, który zmniejszył ilość ręcznej pracy i poprawił wyszukiwalność. Dostarczyłem aplikacje do zarządzania sprawami HR, wprowadziłem przepływy zorientowane na rozwiązania oraz wdrożyłem kontrole PR, aby skrócić czas wdrażania. Moja ekspertyza obejmuje Power Apps, Power Automate, Power Pages, Dataverse oraz szereg usług Microsoft 365, a także integrację z Graph/REST API i funkcjami Azure.

       Wcześniej opracowałem procesy zatwierdzania w Teams z kartami adaptacyjnymi, skracając czas zatwierdzania do tego samego dnia, oraz stworzyłem solidne ramy obsługi błędów. Moje doświadczenie obejmuje również migrację starszych przepływów pracy do Power Automate oraz budowanie portali samoobsługowych, które zostały zaadoptowane przez setki pracowników.

       Posiadam tytuł licencjata z informatyki oraz certyfikaty Power Platform Developer (PL-400) i Solution Architect (PL-600). Pasjonuję się również mentoringiem i udzielam się jako wolontariusz w lokalnych grupach twórców.

       W załączniku znajdą Państwo moje CV do rozważenia. Chętnie omówię, w jaki sposób moje umiejętności i doświadczenie odpowiadają Państwa potrzebom.

       Dziękuję za poświęcony czas i uwagę.

       Z poważaniem,
       Taylor Testperson
       ```

       **Wyślij** wiadomość e-mail po jej napisaniu.

       ![Utwórz e-mail z załącznikiem PDF](../../../../../translated_images/3.3_01_ComposeEmailWithAttachment.eccba1bbcc276b4373277b193a66d8818b712c6ab9468ee12902545522b670f7.pl.png)

1. W portalu Power Automate dla przepływu wyzwalacza zdarzenia wybierz ikonę **Odśwież**, aby zobaczyć przebieg przepływu, który zakończył się sukcesem dla wysłanego e-maila.

       ![Wybierz ikonę odświeżania, aby zobaczyć przebieg przepływu](../../../../../translated_images/3.3_02_FlowRun.0e99756ebc5fba371dc72719b0619736626934461e58db2dc153535cbabcc1e8.pl.png)

1. Wróć do Copilot Studio w **Hiring Agent** i wybierz zakładkę **Aktywność**.

       ![Wybierz zakładkę Aktywność](../../../../../translated_images/3.3_03_SelectActivity.11d78735a8a2a1f64443d285deb47f2bacc5bd53ded039791215f9465dbc3f76.pl.png)

1. Zakładka **Aktywność** załaduje się, wyświetlając wszystkie aktywności **Hiring Agent**. Będzie tam aktywność o nazwie **Automated** ze statusem **Complete**. Ta aktywność reprezentuje wyzwalacz zdarzenia i przepływ agenta, który został wywołany.

       ![Aktywność zakończona](../../../../../translated_images/3.3_04_StatusComplete.dbe14ffb9414b0f4d869841426c4ca595d7a664bf13f4b5e2e29a4e251b9064c.pl.png)

1. Wybierz aktywność i wybierz wyzwalacz zdarzenia na mapie aktywności. Na panelu po prawej stronie zauważ, jak parametry wejściowe w zapytaniu zawierają wartości parametrów `Resume Id`, `Resume Title` i `Resume Number` z wiersza **Dataverse**, który został utworzony. To pochodzi z wartości dynamicznych skonfigurowanych wcześniej w krokach 18 - 27 **Lab 3.1 - Automatyzacja przesyłania CV do Dataverse otrzymanych e-mailem**.

       ![Wyzwalacz zdarzenia](../../../../../translated_images/3.3_05_EventTrigger.cbd73cd43a79e88e782d1e47ac8ddacdbe30d582a4da61a31010f44a9dacdd12.pl.png)

1. Przejdź z powrotem do aplikacji model-driven **Hiring Hub** i w widoku systemowym **Resumes**, wybierz **Odśwież**, aby odświeżyć widok. Nowo utworzony wiersz dla CV przesłanego e-mailem będzie teraz widoczny, ponieważ został utworzony przez wyzwalacz zdarzenia.

       ![Wiersz CV utworzony](../../../../../translated_images/3.3_06_ResumeRowCreated.9ab850d8d7c066aad8531409b00a4de5f214b4d8d209d39fa0d493d5c55e041d.pl.png)

1. Wróć do Copilot Studio i wybierz przepływ agenta **Notify Teams Applicant Channel** w ramach **Application Intake Agent** na mapie aktywności. Na panelu po prawej stronie zauważ, jak dane wejściowe mają wartości z wiersza Dataverse. To pochodzi z zapytania wysłanego przez ostatnie działanie (**Wysyła zapytanie do określonego copilota do przetworzenia**) w wyzwalaczu zdarzenia, które zawiera wartości parametrów z nowo utworzonego wiersza Dataverse. W ten sposób możemy przekazywać wartości parametrów z wyzwalaczy zdarzeń do przepływów agentów.

       ![Wybierz przepływ agenta](../../../../../translated_images/3.3_07_NotifyTeamsApplicantChannel.9b6c4654197efca9c88dde72cfb38812038ef5f6bdce8c309046c02643092bb6.pl.png)

1. Na koniec spójrzmy na kartę adaptacyjną opublikowaną w kanale **Microsoft Teams**. W kanale zobaczymy kartę adaptacyjną, która wyświetla informacje o nowo utworzonym wierszu CV w Dataverse. Najedź kursorem na hiperłącze na początku karty adaptacyjnej, zauważ, jak URL to URL widoku systemowego Resumes, który skonfigurowaliśmy wcześniej w JSON (kroki 15 - 19 **Lab 3.2 - Powiadamianie kanału Teams za pomocą karty adaptacyjnej**) payload karty adaptacyjnej.

       ![URL widoku systemowego tabeli CV na karcie adaptacyjnej](../../../../../translated_images/3.3_08_AdaptiveCardResumeTableURL.5a59821d60c8698e5c9e4746806b975bbdf3c4400dc0bb02a53f350bdea569e9.pl.png)

1. Wybierz hiperłącze, a zostaniesz przekierowany do widoku systemowego Resumes w aplikacji model-driven **Hiring Hub** w przeglądarce.

       ![Widok systemowy CV w aplikacji Hiring Hub model-driven](../../../../../translated_images/3.3_09_ResumeTableSystemView.81f52ab85aadda7d9131ced31d024fb4b411ccf600dd230d9d7e931c476e271c.pl.png)

1. Wróć do karty adaptacyjnej opublikowanej w kanale Microsoft Teams. Tym razem najedź kursorem na **View Resume**, które jest akcją `Action.OpenURL` karty adaptacyjnej. Zauważ, jak URL to wiersz CV, który skonfigurowaliśmy wcześniej w JSON (kroki 30 - 36 **Lab 3.2 - Powiadamianie kanału Teams za pomocą karty adaptacyjnej**) payload karty adaptacyjnej.

       ![URL wiersza CV na karcie adaptacyjnej](../../../../../translated_images/3.3_10_AdaptiveCardResumeRowURL.2063a075c2d4adec27dfcc2ea4c01a385d791e0c4fc127caba912bde14bf77d6.pl.png)

1. Wybierz akcję, a zostaniesz przekierowany do formularza wiersza CV w aplikacji model-driven **Hiring Hub** w przeglądarce.

       ![Wiersz CV w aplikacji Hiring Hub model-driven](../../../../../translated_images/3.3_11_ResumeRow.6f051ed512d396712a04ee98319d6643516e0bbfbf8a9de07d3df7d264563b9c.pl.png)

## ✅ Misja zakończona

Gratulacje! 👏🏻 Świetna robota, Operative.

✅ Wyzwalacz zdarzenia: stworzyłeś wyzwalacz zdarzenia, który przekazuje wartości parametrów Dataverse do przepływu agenta.  
✅ Zbudowano przepływ agenta: wykorzystuje wartości parametrów Dataverse do publikowania karty adaptacyjnej w kanale Microsoft Teams, aby powiadomić zespół rekrutacyjny HR.  
✅ Zaktualizowano instrukcje agenta podrzędnego: aby wywołać przepływ po zakończeniu wyzwalacza zdarzenia.

To umożliwia **Hiring Agent** autonomiczne działanie za każdym razem, gdy CV są otrzymywane jako załączniki e-mailowe i powiadamianie zespołu rekrutacyjnego HR o ręcznym przeglądzie.

To koniec **Lab 03 - Automatyzacja e-maili aplikacyjnych kandydatów**, wybierz poniższy link, aby przejść do następnej lekcji.

⏭️ [Przejdź do lekcji **Tworzenie instrukcji agenta**](../04-agent-instructions/README.md)

## 📚 Zasoby taktyczne

📖 [Uczyń swojego agenta autonomicznym w Copilot Studio](https://learn.microsoft.com/training/modules/autonomous-agents-online-workshop/?WT.mc_id=power-188561-ebenitez)

📖 [Dodaj wyzwalacz zdarzenia](https://learn.microsoft.com/microsoft-copilot-studio/authoring-trigger-event?WT.mc_id=power-188561-ebenitez)

📖 [Używaj przepływów agentów ze swoim agentem](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-188561-ebenitez)

📖 [Wprowadzenie do wyzwalaczy Power Automate](https://learn.microsoft.com/power-automate/triggers-introduction?WT.mc_id=power-188561-ebenitez)

📖 [Używanie przepływów Power Automate z agentami](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create?WT.mc_id=power-188561-ebenitez)

📖 [Zapobieganie utracie danych dla Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention?WT.mc_id=power-188561-ebenitez)

---

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się zapewnić dokładność, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za autorytatywne źródło. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.