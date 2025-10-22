<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "180f9cc0b40527f61be092c9b0f72aba",
  "translation_date": "2025-10-22T00:39:44+00:00",
  "source_file": "docs/recruit/06-create-agent-from-conversation/README.md",
  "language_code": "pl"
}
-->
# 🚨 Misja 06: Stwórz własnego agenta za pomocą języka naturalnego z Copilot i połącz go z danymi

## 🕵️‍♂️ KOD OPERACJI: `OPERACJA KUŹNIA AGENTÓW`

> **⏱️ Czas trwania operacji:** `~75 minut`

🎥 **Obejrzyj przewodnik**

[![Miniatura wideo tworzenia własnego agenta](../../../../../translated_images/video-thumbnail.9d5fddc1190fd4a04537488795821ac2f88fdcfe00e017f6e575a33f724e39cb.pl.jpg)](https://www.youtube.com/watch?v=qZTtQVncGFg "Obejrzyj przewodnik na YouTube")

## 🎯 Cel misji

Witaj ponownie, Twórco Agentów. W tej misji przejmujesz stery najpotężniejszej funkcji w Copilot Studio - tworzenia własnego agenta od podstaw za pomocą języka naturalnego… i wzbogacania go o własne dane.

To nie jest zwykły chatbot. Tworzysz cyfrowego współpracownika, który potrafi rozumować, odpowiadać i korzystać z rzeczywistych informacji przedsiębiorstwa.

Twoje narzędzie? Język naturalny. Twoja misja? Zaprojektowanie, przeszkolenie i przetestowanie w pełni spersonalizowanego agenta helpdesku, który odpowiada na pytania dotyczące IT, korzystając z SharePoint, przesłanych plików lub adresów URL firmy.

Zbudujmy Twojego agenta od podstaw.

## 🔎 Cele

W tej misji nauczysz się:

1. Zrozumienia, czym są własne agenty i jak różnią się od gotowych szablonów.
1. Tworzenia agentów za pomocą naturalnych poleceń i projektowania rozmów z Copilot.
1. Łączenia agentów z zasobami wiedzy przedsiębiorstwa, w tym SharePoint, dokumentami i stronami internetowymi.
1. Poznania generatywnej orkiestracji i sposobu, w jaki agenci dynamicznie wyszukują i odpowiadają, korzystając z wielu źródeł danych.
1. Budowania i testowania w pełni funkcjonalnego agenta helpdesku IT, który odpowiada na pytania na podstawie Twoich danych.

## 🤔 Czym jest _własny_ agent?

Własny agent to chatbot lub wirtualny asystent, którego tworzysz i projektujesz w Copilot Studio, aby pomagać użytkownikom w określonych zadaniach lub odpowiadać na pytania. Nazywa się go własnym, ponieważ:

- **Ty decydujesz o jego celu** - pomaga użytkownikom w składaniu wniosków urlopowych, sprawdzaniu statusu zamówienia, udzielaniu pomocy w kwestiach IT.
- **Ty definiujesz rozmowę** - co agent mówi i jak powinien odpowiadać.
- **Ty łączysz go z własnymi danymi** - podłączasz do danych przedsiębiorstwa za pomocą wbudowanych zasobów wiedzy.
- **Ty łączysz go z własnymi systemami lub aplikacjami** - wybierasz spośród konektorów, przepływów, REST API i serwerów protokołu kontekstu modelu.

!!! note
    Pomyśl o tym w ten sposób: budujesz własnego cyfrowego pomocnika, który może rozmawiać z użytkownikami i wykonywać dla nich zadania, takie jak odpowiadanie na pytania, zbieranie informacji potrzebnych do realizacji procesu lub łączenie się z danymi przedsiębiorstwa.

### 🤖 Co potrafi własny agent?

Własny agent może wykonywać następujące zadania:

- Pytać użytkowników o informacje, takie jak imiona, daty czy preferencje.
- Zapisywać te informacje w bazie danych lub tabeli.
- Wyszukiwać dane na podstawie zadanych pytań i udzielać odpowiedzi.
- Działać autonomicznie, bez bezpośredniej interakcji z użytkownikiem.
- Wywoływać działania na żądanie poprzez bezpośrednią interakcję z użytkownikiem lub autonomicznie, np. wysyłanie e-maili czy tworzenie rekordów.

### 👩🏻‍💻 Dlaczego warto korzystać z własnego agenta?

- Oszczędza czas, automatyzując powtarzalne zadania.
- Zapewnia użytkownikom przyjazne, prowadzone doświadczenie.
- Można go dostosować do potrzeb firmy lub projektu.

### ✨ Przykład

Tworzysz własnego agenta, który pomaga pracownikom w składaniu wniosków urlopowych.

Agent pyta o ich imię, daty urlopu oraz imię przełożonego, a następnie zapisuje te informacje w wyznaczonym systemie zarządzania wnioskami urlopowymi, takim jak lista SharePoint.

Teraz, zamiast nawigować po liście SharePoint i tworzyć nowy element, pracownicy po prostu rozmawiają z agentem.

## 🗣️ Tworzenie agentów za pomocą języka naturalnego

W poprzedniej lekcji nauczyłeś się, jak szybko tworzyć agentów w Copilot Studio, korzystając z gotowych szablonów agentów w [Lekcji 05 - Rozpocznij szybko z gotowymi agentami](../05-using-prebuilt-agents/README.md). W tej lekcji zagłębimy się w doświadczenie tworzenia rozmów z Copilot. Copilot Studio ułatwia budowanie agentów poprzez rozmowę z Copilot, tak jakbyś prowadził konwersację.

W Copilot Studio nie musisz pisać kodu, aby stworzyć agenta. Zamiast tego opisujesz, co chcesz, aby Twój agent robił, w prostym języku, a Copilot pomaga Ci go zbudować krok po kroku w formie rozmowy.

## 🌱 Ale jestem nowy w "opisywaniu tego, czego chcę" - co robić?

Opisywanie w języku naturalnym, aby stworzyć własnego agenta, może być dla Ciebie nowym konceptem. Za każdym razem, gdy korzystasz z Copilot w produktach i usługach Microsoft, używasz języka naturalnego w formie _promptu_.

Prompt to wiadomość lub instrukcja, którą przekazujesz agentowi AI, aby powiedzieć mu, co chcesz, aby zrobił. Pomyśl o tym jak o dawaniu wskazówek asystentowi. Im bardziej klarowne są Twoje instrukcje, tym łatwiej asystentowi zrozumieć i działać zgodnie z nimi.

### 🪄 Dlaczego prompty są ważne

- Kierują zachowaniem agenta.
- Pomagają agentowi zrozumieć, jaki rodzaj rozmowy powinien prowadzić.
- Dobry prompt sprawia, że agent jest bardziej pomocny i dokładny.

### 📝 Wskazówki dotyczące pisania dobrego promptu

- Bądź jasny i konkretny - powiedz dokładnie, co chcesz, aby agent zrobił.
- Myśl jak użytkownik - co użytkownik powie? Jak agent powinien odpowiedzieć?
- Dodaj przykłady - jeśli to możliwe, podaj przykładową interakcję.

### ✨ Przykład

Załóżmy, że zespół HR potrzebuje agenta do pomocy w składaniu wniosków urlopowych.

Prompt mógłby brzmieć:

    „Chcę stworzyć agenta, który pomaga użytkownikom w składaniu wniosków urlopowych. Gdy użytkownik powie, że chce wziąć urlop, agent powinien zapytać o jego imię, datę rozpoczęcia urlopu, datę zakończenia urlopu oraz imię przełożonego. Po podaniu tych informacji przez użytkownika, agent powinien zapisać je na liście SharePoint o nazwie ‘Wnioski Urlopowe’ i opublikować powiadomienie w dedykowanym kanale Microsoft Teams.”

Dlaczego ten prompt działa:

- **Jasno określa cel** - składanie wniosków urlopowych.
- **Opisuje interakcję użytkownika** - co użytkownik mówi i co agent powinien zapytać.
- **Wymienia wymagane dane** - imię, daty urlopu, przełożony.
- **Wskazuje, gdzie dane mają być zapisane** - lista SharePoint o nazwie Wnioski Urlopowe.

## 🔮 OK, stworzyłem swojego agenta... jak teraz połączyć go z wiedzą?

W Copilot Studio źródła wiedzy to miejsca, w których Twój agent może znaleźć informacje, aby udzielać lepszych odpowiedzi. Dodając te źródła, Twój agent może korzystać z danych przedsiębiorstwa z takich miejsc jak Power Platform, Dynamics 365, strony internetowe i inne systemy lub usługi używane przez Twoją firmę.

Te źródła współpracują z AI, aby pomóc Twojemu agentowi odpowiadać bardziej precyzyjnie na pytania użytkowników, co jest osiągane dzięki temu, co nazywa się **generatywną orkiestracją**.

### 🌿 Czym jest generatywna orkiestracja w kontekście agentów?

Generatywna orkiestracja oznacza, że agent używa AI, aby dynamicznie zdecydować, jak odpowiedzieć na pytanie, łącząc swoje wbudowane umiejętności językowe z informacjami z dodanych źródeł wiedzy.

Gdy użytkownik zadaje pytanie, agent:

- Rozumie pytanie za pomocą AI.
- Może zapytać użytkownika o brakujące informacje, generując pytania na bieżąco.
- Wybiera najbardziej odpowiednie źródła wiedzy.
- Przeszukuje te źródła w poszukiwaniu odpowiedzi.
- Generuje naturalną, pomocną odpowiedź na podstawie znalezionych informacji.

### 🏦 Dlaczego źródła wiedzy są ważne?

1. **Mądrzejsze odpowiedzi** - dodając źródła wiedzy, Twój agent może udzielać lepszych, bardziej precyzyjnych odpowiedzi, korzystając z rzeczywistych danych Twojej organizacji.

1. **Mniej pracy ręcznej** - nie musisz pisać każdej możliwej odpowiedzi. Agent może przeszukiwać dodane źródła i odpowiadać automatycznie.

1. **Korzystanie z zaufanych informacji** - Twój agent może pobierać odpowiedzi z systemów, których już używasz, takich jak Dataverse, SharePoint czy strony internetowe firmy, dzięki czemu użytkownicy otrzymują wiarygodne informacje z zaufanych źródeł.

1. **Współpraca z generatywną AI** - źródła wiedzy i AI pomagają Twojemu agentowi zrozumieć pytania i odpowiadać naturalnie, nawet jeśli pytanie nie zostało wcześniej zaprogramowane lub dodane jako początkowy prompt.

1. **Elastyczność i możliwość rozbudowy** - możesz dodawać źródła wiedzy w dowolnym momencie podczas konfiguracji lub później, dzięki czemu Twój agent staje się coraz mądrzejszy wraz ze zmianą Twoich potrzeb.

### ✨ Przykład

Wyobraź sobie, że tworzysz agenta, który pomaga pracownikom w kwestiach HR. Dodajesz dokument z polityką HR Twojej firmy oraz stronę SharePoint jako źródła wiedzy.

Gdy pracownik pyta, _„Ile dni urlopu mi przysługuje?”_, agent używa generatywnej orkiestracji, aby przeszukać te źródła i odpowiedzieć zgodnie z obowiązującą polityką, bez konieczności ręcznego pisania tej odpowiedzi. Oszczędza to czas, który musiałbyś poświęcić na uwzględnienie każdego możliwego pytania, jakie pracownik mógłby zadać na temat swoich uprawnień.

## Rodzaje źródeł wiedzy, które można dodać

1. **Publiczne strony internetowe**
    - **Co robi:** Przeszukuje określone strony internetowe (np. stronę Twojej firmy) za pomocą Bing.
    - **Dlaczego jest przydatne:** Świetne do pobierania informacji publicznych, takich jak FAQ czy szczegóły produktów.

1. **Dokumenty**
    - **Co robi:** Korzysta z dokumentów przesłanych bezpośrednio do agenta, takich jak pliki PDF czy Word. Przesłane pliki są bezpiecznie przechowywane w Dataverse.
    - **Dlaczego jest przydatne:** Umożliwia agentowi odpowiadanie na pytania na podstawie wewnętrznych przewodników, instrukcji czy polityk.

1. **SharePoint**
    - **Co robi:** Łączy się z folderami lub plikami SharePoint za pomocą Microsoft Graph Search.
    - **Dlaczego jest przydatne:** Idealne do uzyskiwania dostępu do dokumentów zespołowych, polityk HR czy plików projektowych przechowywanych w SharePoint.

1. **Dataverse**
    - **Co robi:** Korzysta ze strukturalnych danych z tabel i wierszy środowiska Dataverse, może stosować synonimy i definicje słownikowe dla tabel i kolumn, aby poprawić odpowiedzi agenta.
    - **Dlaczego jest przydatne:** Gdy potrzebujesz wyszukiwać dane przedsiębiorstwa przechowywane w Dataverse, takie jak informacje o klientach.

1. **Wiedza w czasie rzeczywistym dzięki konektorom**
    - **Co robi:** Pozwala Twojemu agentowi na dostęp do aktualnych danych z innych systemów przedsiębiorstwa, takich jak Salesforce, ServiceNow, Dynamics 365, AzureSQL, Databricks i inne, podczas rozmowy, korzystając z uprawnień użytkownika.
    - **Dlaczego jest przydatne:** Zapewnia aktualne, bezpieczne i precyzyjne odpowiedzi bez przechowywania lub duplikowania danych, czyniąc Twojego agenta mądrzejszym i bezpieczniejszym.

1. **Azure AI Search**
    - **Co robi:** Pozwala Twojemu agentowi przeszukiwać duże zestawy dokumentów przechowywanych w Azure za pomocą wyszukiwania semantycznego i wektorowego, aby zrozumieć pytania użytkowników.
    - **Dlaczego jest przydatne:** Dostarcza precyzyjne, wiarygodne odpowiedzi z złożonych źródeł danych, wspiera cytowania i dobrze się skaluje dla dużych kolekcji dokumentów z kontrolą dostępu.

## 🔒 Uwagi dotyczące bezpieczeństwa

### Uwierzytelnianie źródeł wiedzy

Niektóre źródła, takie jak SharePoint i Dataverse, wymagają uwierzytelnienia użytkownika. Oznacza to, że agent będzie odnosił się w odpowiedziach tylko do danych, które użytkownik ma prawo zobaczyć. Inne źródła mogą wymagać dodatkowej konfiguracji, aby agent mógł się z nimi połączyć, na przykład Azure AI Search, które wymaga konta Azure i określenia typu uwierzytelnienia.

## Poprawa odpowiedzi agenta w Copilot Studio

Po utworzeniu agenta w procesie konwersacyjnym, warto przetestować jego działanie w oparciu o instrukcje wygenerowane przez Copilot na podstawie Twojego promptu. Poprawa odpowiedzi agenta w Copilot Studio polega na upewnieniu się, że rozumie on Twoje cele i ma dostęp do odpowiednich informacji.

1. **Doprecyzowanie instrukcji dla agenta** - tutaj określasz, jak agent powinien się zachowywać. Używaj jasnego, konkretnego języka.

    Na przykład:

    ✅ „Zachowuj się jak przyjazny agent obsługi klienta, który tłumaczy rzeczy w prosty sposób.”

    ❌ „Bądź pomocny.” (Zbyt ogólne)

1. **Sprawdź ton i język** - upewnij się, że ton agenta pasuje do Twojej grupy odbiorców.

    Możesz ustawić go jako:

    - Przyjazny i swobodny.
    - Profesjonalny i zwięzły.
    - Wspierający i cierpliwy.

1. **Dodaj lub zaktualizuj źródła wiedzy** - jeśli Twój agent musi odpowiadać na pytania dotyczące konkretnego tematu, upewnij się, że ma dostęp do odpowiednich informacji.

    - Dodaj linki do stron internetowych, dokumentów lub FAQ.
    - Aktualizuj treści na bieżąco.
    - Używaj jasnych, dobrze zorganizowanych informacji.

1. **Używaj tematów i wyzwalaczy** - jeśli Twój agent musi obsługiwać konkretne zadania lub rozmowy, możesz tworzyć tematy z frazami wyzwalającymi. To pomaga precyzyjniej kierować rozmową. Więcej na ten temat dowiemy się w kolejnej lekcji.

1. **Testuj prawdziwe pytania** - spróbuj zadać swojemu agentowi pytania, które mogą zadawać użytkownicy.

    Jeśli odpowiedzi nie są zadowalające:

    - Dostosuj instrukcje systemowe.
    - Dodaj więcej przykładów lub wiedzy.
    - Przeformułuj pytania, aby zobaczyć, jak agent odpowiada.

1. **Przeglądaj i iteruj** - poprawa agenta to proces ciągły!

    Po opublikowaniu:

    - Zbieraj opinie od użytkowników.
    - Obserwuj często zadawane pytania lub niejasności.
    - Kontynuuj udoskonalanie konfiguracji agenta.

## 🧪 Laboratorium 06: Tworzenie własnego agenta w Copilot Studio

Teraz nauczymy się, jak stworzyć własnego agenta, który będzie mógł rozmawiać na podstawie Twoich danych.

- [6.1 Tworzenie agenta za pomocą języka naturalnego w Copilot](../../../../../docs/recruit/06-create-agent-from-conversation)
- [6.2 Dodanie we
Użyjemy tego samego przypadku użycia z [Lekcja 03 - Tworzenie deklaratywnego agenta dla Microsoft 365 Copilot](../03-create-a-declarative-agent-for-M365Copilot/README.md#use-case-scenario)

**Jako** pracownik

**Chcę** szybko i dokładnie uzyskać pomoc od agenta pomocy technicznej IT w sprawach takich jak problemy z urządzeniami, rozwiązywanie problemów z siecią, konfiguracja drukarki

**Aby móc** być produktywnym i rozwiązywać problemy techniczne bez opóźnień

Zaczynajmy!

### ✨ Wymagania wstępne

- **Witryna SharePoint**

Będziemy korzystać z witryny SharePoint **Contoso IT** z [Lekcja 00 - Konfiguracja kursu - Krok 3: Tworzenie nowej witryny SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

Jeśli nie skonfigurowałeś witryny SharePoint **Contoso IT**, wróć do [Lekcja 00 - Konfiguracja kursu - Krok 3: Tworzenie nowej witryny SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

- **Rozwiązanie**

Będziemy korzystać z rozwiązania **Contoso Helpdesk Agent** z [Lekcja 04 - Tworzenie rozwiązania dla Twojego agenta](../04-creating-a-solution/README.md#41-create-a-solution-publisher).

Jeśli nie skonfigurowałeś rozwiązania **Contoso Agent**, wróć do [Lekcja 04 - Tworzenie rozwiązania dla Twojego agenta](../04-creating-a-solution/README.md#41-create-a-solution-publisher).

### 6.1 Tworzenie agenta za pomocą języka naturalnego w Copilot

!!! warning "Pytania Copilot mogą się różnić w zależności od sesji"

    Doświadczenie konwersacyjne w Copilot może się różnić za każdym razem, a dostarczone pytania mogą być nieco inne niż wcześniej.

1. Przejdź do strony głównej Copilot Studio i w polu wpisz następujący prompt opisujący agenta pomocy technicznej IT. Prompt zawiera cel agenta, kontekst, oczekiwane zadania i format odpowiedzi agenta.

    ```text
    You are an IT help desk agent. Your goal is to assist users with their IT issues. You can access information from our company's knowledge base at https://support.microsoft.com/en-us. Your responses should be polite and helpful. If a user reports a slow computer, ask about the age of the device, current software versions, and if they've recently installed any new programs. If a user is experiencing trouble logging into their email, guide them through password reset procedures. You should be concise and informative, using step-by-step instructions with bullet points when appropriate.
    ```

      ![Wpisz prompt](../../../../../translated_images/6.1_01_Prompt.c4be2ff2cac9fde3659f2e7016e48f01860b55523d3320b3b8450ef2fcb1f51a.pl.png)

1. Następnie załaduje się doświadczenie konwersacyjne w Copilot. Zobaczysz, że Copilot przetwarza Twoje zapytanie.

      ![Doświadczenie konwersacyjne w Copilot](../../../../../translated_images/6.1_02_ConversationalCreationExperienceLoads.115eaf4e5a15c1b60bc0d25c97a0d97d462d6c740cfed5de369b2bd8fd1cc8bc.pl.png)

1. Copilot potwierdza, że agent został skonfigurowany zgodnie z dostarczonymi instrukcjami i pyta o potwierdzenie nazwy agenta. Poprosimy Copilot o nazwę naszego agenta jako:

       ```text
       Contoso Helpdesk Agent
       ```

      ![Zmień nazwę agenta](../../../../../translated_images/6.1_03_AgentName.a848acea10cd1d3d6ba68fea2b0e094ecbd130a124413e3c8134198c81654833.pl.png)

1. Copilot wykonuje żądanie i zobaczymy, że nazwa agenta została zaktualizowana w panelu agenta. Następnie Copilot pyta nas o doprecyzowanie instrukcji. Pyta, jak powinniśmy odpowiadać na konkretne problemy, a my poprosimy, aby potwierdzał problem, podawał przykłady tematów do odpowiedzi i formatował odpowiedź w punktach.

    Skopiuj i wklej poniższe, a następnie wyślij żądanie do Copilot.

       ```text
       Priorytetowo traktuj pilne zgłoszenia. Przykłady problemów IT lub scenariuszy do pomocy: problemy z urządzeniami, łączność sieciowa, problemy z logowaniem. Podczas rozwiązywania problemów najpierw potwierdź ich problem i odpowiedz z empatią, następnie podaj instrukcje krok po kroku w formie punktów i zapytaj, czy potrzebują dalszej pomocy.
       ```

      ![Doprecyzowanie instrukcji agenta](../../../../../translated_images/6.1_04_RefineInstructions.9575407dbc12e0399691068d20e0d0252bb8b8f839cf53ee9d715fe2c16afa70.pl.png)

1. Instrukcje agenta zostaną zaktualizowane po otrzymaniu żądania przez Copilot. Zauważ, że w panelu po prawej stronie pojawiły się teraz początkowe prompty. Zostały one utworzone na podstawie naszych instrukcji.

    Następnie Copilot pyta o publiczne strony internetowe, które mogą być źródłem wiedzy dla agenta.

    Skopiuj i wklej poniższe, a następnie wyślij żądanie do Copilot.

      ```text
      https://support.microsoft.com
      ```

      ![Dodaj publicznie dostępne strony internetowe](../../../../../translated_images/6.1_05_KnowledgeSource.3aec8d869b73d273f88c62cf99bb2f731df83a83c1ca54d92d6e96b86a570637.pl.png)

1. Publiczna strona internetowa zostanie dodana jako źródło wiedzy. Copilot pyta, czy należy dodać dodatkowe źródła wiedzy. Nie musimy dodawać dodatkowych publicznych stron internetowych.

    Skopiuj i wklej poniższe, a następnie wyślij żądanie do Copilot.

      ```text
      Proceed with setup
      ```

      ![Kontynuuj konfigurację](../../../../../translated_images/6.1_06_ProceedWithSetup.11ceb9ccccccd19418711681d42b602ee223ebd017d6bf300088de84d1d35f1d.pl.png)

1. Copilot potwierdza, że konfiguracja naszego agenta Contoso Helpdesk Agent została zakończona, ale dodamy jeszcze jedną modyfikację. Poprosimy, aby nasz agent nie odpowiadał na pytania związane z HR. Dzięki temu nasz agent będzie wiedział, że nie powinien odpowiadać na pytania użytkowników dotyczące HR.

    Skopiuj i wklej poniższe, a następnie wyślij żądanie do Copilot.

       ```text
       Nie udzielaj pomocy w pytaniach związanych z HR, przykłady to: Jaki jest mój bilans urlopów? Ile dni chorobowych mi przysługuje? Jaki jest URL do naszego portalu płacowego?
       ```

      ![Nie odpowiadaj na pytania związane z HR](../../../../../translated_images/6.1_07_DoNotTalkAbout.d9ccbbd15b9793e1642b365be6968548f6f250be5d541f1ad06eb9f12985e94f.pl.png)

1. Instrukcje zostaną zaktualizowane, aby nie udzielać pomocy w pytaniach związanych z HR. Nie musimy wprowadzać dalszych aktualizacji, nasz agent jest gotowy do utworzenia.

      ![Instrukcje agenta zaktualizowane](../../../../../translated_images/6.1_08_AgentInstructionsUpdated.4de1112eeb5c8e2e2fe03fcbc6d332bdc3b1de740d9a5ab6b1ec30e27e241096.pl.png)

1. Zanim utworzymy naszego agenta, wykonajmy kilka rzeczy.

    Najpierw wybierz kartę **Configure**, aby zobaczyć szczegóły agenta zdefiniowane podczas naszej rozmowy z Copilot. Tutaj zobaczysz nazwę, opis, instrukcje, wiedzę i sugerowane/początkowe prompty.

      ![Zobacz szczegóły agenta](../../../../../translated_images/6.1_09_ViewAgentDetails.72c7f66721d6ac354bcc7186204bb0ad169456b0b7756f5e5a5e0f090e802a57.pl.png)

1. Po drugie, przetestujmy naszego agenta. Skopiuj i wklej poniższe, a następnie wyślij pytanie do naszego agenta.

       ```text
       Jak mogę sprawdzić status gwarancji mojego Surface?
       ```

      ![Testuj agenta](../../../../../translated_images/6.1_10_TestAgent.8b1a0f1d98f4fa5b61336e1c4ac6d77b4822283314c2941cb0e04bf5247d8489.pl.png)

1. Odpowiedź na pytanie zostanie wyświetlona, gdzie odpowiedzi są w formacie przewodnika krok po kroku w punktach. Świetnie, nasz agent działa! 🙌🏻

      ![Odpowiedź agenta](../../../../../translated_images/6.1_11_AgentResponse.c5fb305335b8e9b456b0f75ec9e237d4abbc3e9a1a6976e14bb656f1adffb14a.pl.png)

1. Na koniec sprawdzimy, czy rozwiązanie, w którym nasz agent zostanie utworzony, jest rozwiązaniem, które utworzyliśmy i wybraliśmy jako preferowane rozwiązanie w [Lekcja 04 - Tworzenie nowego rozwiązania](../04-creating-a-solution/README.md#42-create-a-new-solution).

    Wybierz ikonę **trzech kropek (...)** i wybierz **Update Advanced Settings**.

      ![Zaktualizuj ustawienia zaawansowane](../../../../../translated_images/6.1_12_UpdateAdvancedSettings.5943949ae7c9f492fb90779b0284283deb4186f14cd6588c46920f8e50d8d6d0.pl.png)

1. Pojawi się modal **Advanced Settings**, gdzie możemy zobaczyć, że nasze rozwiązanie utworzone wcześniej jest domyślnie wybrane. Jest to wynikiem wybrania naszego rozwiązania jako preferowanego w [Lekcja 04 - Tworzenie nowego rozwiązania](../04-creating-a-solution/README.md#42-create-a-new-solution).

    Wybierz **Cancel.**

      ![Widok ustawień zaawansowanych](../../../../../translated_images/6.1_13_AdvancedSettings.fff0861831346d5bef4e7731fed83073aca6d17aa940633040f65b1f300aee15.pl.png)

1. Teraz utwórzmy naszego niestandardowego agenta! Wybierz **Create**.

      ![Wybierz Create](../../../../../translated_images/6.1_14_CreateAgent.7330a5fbe44a0664f35c5b5502e499f6dd3bad55d13094ef6c22608e8f8831b1.pl.png)

1. Copilot Studio rozpocznie tworzenie naszego agenta.

      ![Tworzenie agenta](../../../../../translated_images/6.1_15_SettingUpAgent.34028a37bc2922eae13d0a18bb468bd738608b4de948192d89c3a2680fff2496.pl.png)

1. Po utworzeniu agenta możemy zobaczyć szczegóły agenta odzwierciedlające to, o co prosiliśmy podczas doświadczenia konwersacyjnego w Copilot. Przewiń w dół, aby przejrzeć agenta, gdzie zobaczysz nazwę, opis, instrukcje, źródła wiedzy i sugerowane prompty. Tryb orkiestracji jest domyślnie włączony, a domyślny model jest używany jako model odpowiedzi agenta.

      ![Agent utworzony](../../../../../translated_images/6.1_16_AgentCreated.91edb1939b33d158930cd385c0d97c320958504e224ffc163ed5030b0cdc72a7.pl.png)

      ![Źródła wiedzy](../../../../../translated_images/6.1_17_KnowledgeSources.00f1ed0b7f405e4820971834fb75e39a80659cf1b9eeeee42d861bfc4656240f.pl.png)

      ![Sugerowane prompty](../../../../../translated_images/6.1_18_SuggestedPrompts.20b84b9420858de8485460cc50a8e73798b08bb2022c946899adcbf9b484e0f0.pl.png)

1. Teraz przetestujmy naszego nowo utworzonego agenta. W panelu **Test** po prawej stronie wybierz ikonę **Activity Map**.

      ![Wybierz Activity Map](../../../../../translated_images/6.1_19_ActivityMap.b2e6c77c69fd953818dc73b4dbe2e6d46529cf105d7a4a18c590d15c0b717cf4.pl.png)

1. Wpisz następujące pytanie w panelu **Test**.

       ```text
       Jak znaleźć klucz produktu Windows 11?
       ```

      ![Testuj nowo utworzonego agenta](../../../../../translated_images/6.1_20_TestAgent.a9d3a761477c9b79facd132c173ec886d808320ad2cbc0347066a20c0f9dd669.pl.png)

1. Następnie załaduje się mapa aktywności, która pokazuje w czasie rzeczywistym, jaką ścieżkę przetwarza agent. W tym scenariuszu nasz agent zrozumiał pytanie i przeszukuje źródła wiedzy. Obecnie mamy jedno źródło, którym jest publiczna strona internetowa dodana wcześniej za pomocą Copilot, którą agent przegląda.

      ![Przeglądanie źródeł wiedzy](../../../../../translated_images/6.1_21_ReviewingSources.78068042898e2960667393c931e120dbe80f6b74c9af222b79446f7a82d5c757.pl.png)

1. Nasz agent odpowiada następnie odpowiedziami w formie punktów, zgodnie z instrukcjami. Odpowiedź zawiera odniesienia do stron internetowych, z których agent utworzył swoją odpowiedź. Umożliwia to użytkownikom weryfikację źródła odpowiedzi.

      ![Odwołania w odpowiedzi](../../../../../translated_images/6.1_22_Response.44a088e80f2a9fac74bcd364571f1ebb900b43e9e647089ef51d39b809b0f0e9.pl.png)

1. Możesz również przejrzeć odpowiedź i jej źródła, przewijając w dół modal **Knowledge** w mapie aktywności.

      ![Źródła odniesień](../../../../../translated_images/6.1_23_ReferencedSources.ca8e41855284446d121a34fd9d8d667e05016f5eda741adcf7f356ac2c59c559.pl.png)

Gratulacje! Utworzyłeś swojego pierwszego niestandardowego agenta za pomocą Copilot w Copilot Studio 🙌🏻

### 6.2 Dodanie wewnętrznego źródła wiedzy za pomocą witryny SharePoint

Wcześniej w Copilot dodaliśmy publiczną stronę internetową jako zewnętrzne źródło wiedzy dla naszego agenta podczas doświadczenia konwersacyjnego. Teraz dodamy wewnętrzne źródło wiedzy za pomocą witryny SharePoint. Będzie to witryna SharePoint, którą utworzyłeś podczas [Lekcja 00 - Konfiguracja kursu](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. Wybierz **+ Add knowledge**.

      ![Wybierz Add knowledge](../../../../../translated_images/6.2_01_AddKnowledge.5e441f7e3b0ebb25218bece75394ecf4c8c3a60e1b5d8ea15ca020546352f256.pl.png)

1. Wybierz **SharePoint**.

      ![Wybierz SharePoint](../../../../../translated_images/6.2_02_SelectSharePoint.5bd29d31cc76f581db3eef474731fc2dfce4ef1dab86d9cc11716323ba726408.pl.png)

1. Wklej **adres witryny SharePoint** utworzonej w [Lekcja 00 - Konfiguracja kursu](../00-course-setup/README.md#step-4-create-new-sharepoint-site) w polu URL witryny SharePoint i wybierz **Add**.

      ![Wpisz URL witryny SharePoint](../../../../../translated_images/6.2_03_AddSharePointURL.974c251d9690524a8bfa4c9dd930af3d834245749fb9f1fda508c3b1f9773827.pl.png)

1. Zaktualizuj **nazwę** witryny SharePoint na `Contoso IT` i wybierz **Add**.

      ![Zaktualizuj nazwę witryny SharePoint i dodaj do agenta](../../../../../translated_images/6.2_04_UpdateNameAddToAgent.46a814c09586fe135bffb77814ba13d0593f25feaaa989174c97e80345f03866.pl.png)

1. Witryna SharePoint została teraz dodana jako źródło wiedzy ze statusem _Ready_. Kolumna Status pokaże, czy źródło wiedzy zostało pomyślnie załadowane/podłączone, czy wystąpił problem.

      ![Status witryny SharePoint](../../../../../translated_images/6.2_05_SharePointStatus.90a9001978f31c5d4b183d5ecc4869c81dd9fc1bb8a6b1ef4675fcb51d52f8e5.pl.png)

### 6.3 Dodanie wewnętrznego źródła wiedzy przez przesłanie dokumentu

Teraz dodamy kolejne wewnętrzne źródło wiedzy, przesyłając dokument bezpośrednio do naszego agenta.

1. Wybierz **Add knowledge**.

      ![Wybierz Add knowledge](../../../../../translated_images/6.3_01_AddKnowledge.d93caa805efb7e2a433d9777f8eb1789dc5daf4f9ebe95da2a74a2b57cffdd33.pl.png)

1. Wybierz **Upload file** lub **Select to browse**.

      ![Wybierz przesyłanie plików](../../../../../translated_images/6.3_02_UploadFile.662de4f3916bfa3f34a6699a9a45846e64e71a70dfecbc656fb5b511792de6b6.pl.png)

1. Pobierz ten [przykładowy plik](../../../../../docs/recruit/06-create-agent-from-conversation/assets/Contoso_Guest_WiFi_Connection_Guide.docx "download") i wybierz go w Eksploratorze plików. Wybierz **Open**.

      ![Wybierz dokument](../../../../../translated_images/6.3_03_SelectFile.077d73491dc6ff1f6114d259261ee68334c4da182c3b55233468637d1989f14c.pl.png)

1. Plik został wybrany do przesłania. Następnie wybierz **Add to agent**.

      ![Wybierz Add to Agent](../../../../../translated_images/6.3_04_AddToAgent.1eec469d6d28c22959c8d7f3ad39aa0df5e07adfdb85ce1e21c0c4fe31c27db5.pl.png)

1. Dokument będzie w trakcie dodawania do agenta. Poczekaj, aż przesyłanie zostanie zakończone, nie zamykaj okna przeglądarki. Status dokumentu początkowo będzie wyświetlany jako _In progress_, poczekaj, aż status zostanie zaktualizowany na **Ready**, zanim przetestujesz swojego agenta.

      ![Status pliku](../../../../../translated_images/6.3_05_FileStatus.2029b8aa0109a6f46372291e9bba33429c2ebd572efa81702a73cae91fbf3a90.pl.png)

Teraz przetestujmy naszego agenta!

### 6.4 Testowanie agenta

Przetestujemy nasze trzy źródła wiedzy, zadając pytania naszemu agentowi Contoso Helpdesk Agent.

1. Wybierz ikonę **refresh** w panelu testowym, a następnie wybierz ikonę **activity map**.

      ![Ikona odświeżania](../../../../../translated_images/6.4_01_RefreshAndActivityMap.c24ebc6c277786dab75941dac0b6e55f3dbb244b29fb791c87e4aba5c4a56c81.pl.png)

1. Wpisz następujące pytanie, aby przetestować nasze publiczne źródło wiedzy (zewnętrzne).

      ```text
      How can I find the serial number on my Surface device?
      ```

      ![Wpisz prompt, aby przetestować źródło wiedzy z witryny internetowej](../../../../../translated_images/6.4_02_TestQuestion1.3a5aeaaa72a9578a05edd4575275e1ba60ecaf8c7377ab13872619580e0309f9.pl.png)

1. Następnie zobaczysz, jak agent przegląda źródła wiedzy i udziela odpowiedzi, korzystając ze źródła wiedzy z witryny internetowej.
![Strona internetowa odniesiona w odpowiedzi](../../../../../translated_images/6.4_03_ReviewingSources.a56742505402eab51b423b543c814242728ff7947e443360740b3e5dac82ba65.pl.png)

1. Odpowiedź zostanie zwrócona i zauważysz, że są odniesienia do strony internetowej, z której została utworzona odpowiedź. Jeśli przewiniesz w dół modal wiedzy w mapie aktywności, zobaczysz inne źródła wiedzy, które agent przeszukiwał, czyli witrynę SharePoint i przesłany plik.

    Jednak nie zostały one użyte, ponieważ w sekcji **Źródła odniesione** odniesiono się tylko do źródła wiedzy ze strony internetowej. Odpowiedź została oparta na źródle wiedzy ze strony internetowej. Jeśli wybierzesz odniesienia, zostaniesz przekierowany na stronę internetową.

![Źródła wiedzy odniesione i przeszukane](../../../../../translated_images/6.4_04_ReferencedSources.2fb91e8ed7cac8196c3cc1e43006512d4138adb4f240bdab66cd2af5fd1ec7c6.pl.png)

1. Przetestujmy teraz zarówno źródło wiedzy z witryny SharePoint, jak i źródło wiedzy z dokumentu w jednej wiadomości. Wprowadź następujące pytanie.

      ```text
      How can I access our company Contoso VPN? How do guests connect to the Contoso Guest wifi?
      ```

![Testowanie źródeł wiedzy z SharePoint i dokumentu](../../../../../translated_images/6.4_05_TestQuestion2.f77ce87578b59386ec5491716996aff9247c5e5ad458a51226276238adb282f3.pl.png)

1. Ponownie zobaczysz, jak agent przegląda trzy źródła wiedzy, aby wygenerować odpowiedź na pytania zawarte w naszej pojedynczej wiadomości. Agent odpowiada na oba pytania w jednej wiadomości i osobno odnosi się do strony SharePoint oraz dokumentu, z których wygenerował odpowiedź.

    W modal wiedzy w mapie aktywności zobaczysz, że witryna SharePoint i dokument zostały użyte jako źródła odniesienia. Masz pełną widoczność, jakie źródła wiedzy zostały użyte do odpowiedzi na oba pytania.

![Źródła wiedzy odniesione](../../../../../translated_images/6.4_06_ReferencedSources.caf049dac28b4317c39b074b481f5d7d5b1b92fd792fc4b796fec0c1575f9581.pl.png)

1. Zawsze warto zweryfikować, czy wygenerowana odpowiedź jest poprawna. Wybierz odniesienie do witryny SharePoint, a załaduje się strona FAQ witryny SharePoint, gdzie możesz przewinąć w dół, aby przejrzeć instrukcje dotyczące VPN.

![Przeglądanie strony SharePoint](../../../../../translated_images/6.4_07_VerifySharePoint.6ee48515fedf37a62564ddc388c2452751ed5777cda321d887c315c2de78d293.pl.png)

1. Następnie wybierz odniesienie do dokumentu, a pojawi się modal z tekstem z dokumentu, który odzwierciedla odpowiedź.

![Przeglądanie dokumentu](../../../../../translated_images/6.4_08_VerifyDocument.0f0680b63e6bdd0b558eb287e85965b87ab820e12b25b1e0965f8ebbde795222.pl.png)

Agent może odpowiadać na wiele pytań w jednej wiadomości, przeszukiwać źródła wiedzy i odnosić się do nich w swojej odpowiedzi. Zawsze upewnij się, że odpowiedź jest poprawna, przeglądając odniesienia.

## ✅ Misja zakończona

Gratulacje! 👏🏻 Nauczyłeś się, jak używać języka naturalnego do stworzenia własnego agenta, który potrafi rozmawiać na podstawie danych z trzech różnych źródeł wiedzy 🙌🏻

To koniec **Lab 06 - Tworzenie agenta z Copilot**, wybierz poniższy link, aby przejść do następnej lekcji. Twój niestandardowy agent stworzony w tym laboratorium będzie używany w laboratorium następnej lekcji.

⏭️ [Przejdź do lekcji **Dodaj nowy temat z wyzwalaczem**](../07-add-new-topic-with-trigger/README.md)

Witaj w elicie. Teraz wiesz, jak tworzyć cyfrowych agentów, którzy mówią Twoim językiem, odwołują się do Twoich danych i wspierają Twój zespół. Kontynuuj—Twoja misja dopiero się zaczyna.

## 📚 Zasoby taktyczne

🔗 [Szybki start: Tworzenie i wdrażanie agenta](https://learn.microsoft.com/microsoft-copilot-studio/fundamentals-get-started?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172617-ebenitez)

🔗 [Tworzenie i usuwanie agentów](https://learn.microsoft.com/microsoft-copilot-studio/authoring-first-bot?WT.mc_id=power-172617-ebenitez)

🔗 [Kluczowe pojęcia - Tworzenie agentów](https://learn.microsoft.com/microsoft-copilot-studio/authoring-fundamentals/?WT.mc_id=power-172617-ebenitez)

📺 [Tworzenie niestandardowego agenta za pomocą języka naturalnego](https://aka.ms/ai-in-action/copilot-studio/ep1)

📺 [Dodawanie wiedzy do swoich agentów](https://aka.ms/ai-in-action/copilot-studio/ep2)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/06-create-agent-from-conversation" alt="Analiza" />

---

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się zapewnić dokładność, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za wiarygodne źródło. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.