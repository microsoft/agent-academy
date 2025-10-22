<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-22T00:43:46+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "pl"
}
-->
# 🚨 Misja 03: Wdrażanie Deklaratywnego Agenta dla Microsoft 365 Copilot

## 🕵️‍♂️ KODOWA NAZWA: `OPERACJA ROZSZERZENIE COPILOT`

> **⏱️ Okno czasowe operacji:** `~60 minut`

🎥 **Obejrzyj przewodnik**

[![Miniatura wideo Tworzenie Deklaratywnego Agenta](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.pl.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "Obejrzyj przewodnik na YouTube")

## 🎯 Opis Misji

Witaj w swojej pierwszej misji terenowej, Twórco Agentów. Zostałeś wybrany do zaprojektowania, wyposażenia i wdrożenia Deklaratywnego Agenta — specjalistycznego operacyjnego narzędzia wbudowanego bezpośrednio w Microsoft 365 Copilot i Microsoft Teams.

W przeciwieństwie do tradycyjnych agentów, agenci deklaratywni działają zgodnie z określoną misją (instrukcjami), narzędziami (podpowiedziami/konektorami) oraz mają strategiczny dostęp do wewnętrznej inteligencji (źródeł wiedzy takich jak SharePoint, Dataverse i inne). Twoim zadaniem jest zbudowanie tego agenta za pomocą Microsoft Copilot Studio — centrum dowodzenia bez kodu, w którym umiejętności i cel Twojego agenta nabierają życia.

Do dzieła.

## 🔎 Cele

W tej misji nauczysz się:

1. Zrozumieć, czym są agenci deklaratywni i jak rozszerzają możliwości Microsoft 365 Copilot dzięki niestandardowym funkcjom
1. Porównać Microsoft Copilot Studio z narzędziem Copilot Studio agent builder w celu budowy agentów deklaratywnych
1. Tworzyć deklaratywnego agenta za pomocą języka naturalnego w ramach konwersacyjnego doświadczenia tworzenia
1. Dodawać podpowiedzi AI jako narzędzia, aby zwiększyć specjalistyczną wiedzę i zdolności rozwiązywania problemów agenta
1. Publikować i testować deklaratywnego agenta w Microsoft 365 Copilot i Microsoft Teams

## 🕵🏻‍♀️ Czym jest deklaratywny agent dla Microsoft 365 Copilot?

Deklaratywni agenci to dostosowane wersje Microsoft 365 Copilot. Możesz dostosować Microsoft 365 Copilot do specyficznych potrzeb biznesowych, dostarczając mu instrukcje wspierające określony proces, opierając go na wiedzy przedsiębiorstwa i wykorzystując narzędzia do szerszego rozszerzenia funkcjonalności. Pozwala to organizacjom na tworzenie spersonalizowanych doświadczeń z większą funkcjonalnością dla użytkowników.

## 🤔 Dlaczego warto używać Microsoft Copilot Studio do budowy deklaratywnego agenta?

Jako twórca, istnieje szansa, że już eksplorowałeś [Copilot Studio agent builder](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez) w Microsoft 365 Copilot i zastanawiasz się _dlaczego warto budować deklaratywnego agenta w Microsoft Copilot Studio?_

Microsoft Copilot Studio oferuje kompleksowy zestaw narzędzi i funkcji dla deklaratywnych agentów, które wykraczają poza ograniczenia narzędzia Copilot Studio agent builder. Podobnie jak w przypadku Copilot Studio agent builder, nie musisz znać programowania ani rozwoju oprogramowania, aby budować w Microsoft Copilot Studio. Rozbijmy to na części, aby lepiej zrozumieć różnice między Copilot Studio Agent Builder a Copilot Studio w kontekście budowy deklaratywnych agentów.

### Porównanie funkcji

Poniższa tabela przedstawia różnice w budowie deklaratywnego agenta w Copilot Studio agent builder i Copilot Studio.

| Funkcja                   | Copilot Studio agent builder w Microsoft 365 Copilot                          | Rozszerzanie Microsoft 365 Copilot w Copilot Studio                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **Wiedza**       | Web, SharePoint, czaty Microsoft Teams, e-maile Outlook, konektory Copilot     | Wyszukiwanie w sieci (przez Bing), SharePoint, Dataverse, Dynamics 365, konektory Copilot  |
| **Narzędzia**       | Interpreter kodu, generator obrazów     | 1400+ konektorów Power Platform, niestandardowe konektory, podpowiedzi, użycie komputera, REST API, Model Context Protocol   |
| **Podpowiedzi startowe**         | Konfiguracja podpowiedzi dla użytkowników, aby szybko rozpocząć   | Konfiguracja podpowiedzi dla użytkowników, aby szybko rozpocząć  |
| **Kanał**           | Agent publikowany tylko w Microsoft 365 Copilot     | Agent publikowany w Microsoft 365 Copilot i Microsoft Teams      |
| **Uprawnienia do udostępniania**         | Użytkownicy są tylko widzami    | Użytkownicy mogą być edytorami lub widzami   |

Istnieje więcej możliwości oferowanych przez deklaratywnych agentów zbudowanych w Microsoft Copilot Studio, o których dowiemy się w dalszej części.

!!! tip
    - Aby dowiedzieć się więcej o Copilot Studio agent builder, przejdź do [Copilot Developer Camp: Lab MAB1 - Zbuduj swojego pierwszego agenta](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/)
    - W celu zaawansowanego rozwoju i rozszerzenia deklaratywnego agenta poza Copilot Studio agent builder dla Microsoft 365 Copilot, przejdź do [Copilot Developer Camp: Lab MAB1 - Zbuduj swojego pierwszego agenta](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/)

### Rozszerzanie Microsoft 365 Copilot za pomocą deklaratywnych agentów zbudowanych w Copilot Studio

Rozwińmy to, czego nauczyliśmy się z tabeli porównawczej funkcji.

#### Dostosowanie

- **Szczegółowe instrukcje**: Możesz dostarczyć szczegółowe instrukcje i funkcje, aby precyzyjnie określić cel i zachowanie agenta.
  - Obejmuje to wywoływanie narzędzi za pomocą języka naturalnego.

- **Dostęp do wiedzy przedsiębiorstwa**: Umożliwia dostęp do wiedzy przedsiębiorstwa, która respektuje uprawnienia użytkownika.
  - Integracja z SharePoint
  - Integracja z Dataverse
  - Integracja z Dynamics 365
  - Konektory Microsoft 365 Copilot aktywowane przez administratora organizacji

   ![Dostosowanie](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.pl.png)

#### Zaawansowane możliwości

- **Integracja z usługami zewnętrznymi**: Umożliwia wybór spośród 1400+ konektorów Power Platform, które integrują się z usługami zewnętrznymi, zapewniając bardziej złożone i potężne funkcjonalności.
  - Przykłady obejmują [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez), [ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez), [Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez), [SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) i inne
  - Alternatywnie, możesz również wykorzystać serwery Model Context Protocol i REST API bezpośrednio w swoim deklaratywnym agencie

- **Podpowiedzi AI**: Użyj podpowiedzi do analizy i transformacji tekstu, dokumentów, obrazów i danych za pomocą języka naturalnego i rozumowania AI.
  - Wybierz model czatu, wybierz spośród Basic (Domyślny), Standard, Premium
  - Opcja wykorzystania własnego modelu Azure AI Foundry do osadzenia podpowiedzi

- **Więcej opcji konfiguracji wdrożenia**: Wybierz kanały i zdefiniuj uprawnienia użytkowników.
  - Publikuj w Microsoft Teams, znanym interfejsie użytkownika dla szybszej adopcji
  - Edytowanie uprawnień użytkowników może być udostępniane, aby zapobiec zależności od jednego właściciela agenta

   ![Zaawansowane możliwości](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.pl.png)

Podsumowując, deklaratywni agenci w Microsoft Copilot Studio pozwalają na dostosowanie Microsoft 365 Copilot do potrzeb biznesowych poprzez integrację systemów wiedzy przedsiębiorstwa, narzędzi do łączenia się z usługami zewnętrznymi lub modeli AI GPT.

## 🧪 Laboratorium 03: Budowa deklaratywnego agenta w Microsoft Copilot Studio dla Microsoft 365 Copilot

Następnie nauczymy się, jak zbudować deklaratywnego agenta dla przypadku użycia "Business-to-Employee", który będzie działał jako **agent pomocy technicznej IT**.

- [3.1 Utwórz deklaratywnego agenta](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 Utwórz i dodaj podpowiedź dla swojego deklaratywnego agenta](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 Zaktualizuj instrukcje i przetestuj swojego deklaratywnego agenta](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 Opublikuj swojego deklaratywnego agenta w Microsoft 365 Copilot i Microsoft Teams](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    To laboratorium przedstawi kroki dodawania podpowiedzi jako narzędzia. Kolejne lekcje zagłębią się w dodawanie źródeł wiedzy i innych dostępnych narzędzi. Upraszczamy naukę 😊

### 👩🏻‍💼 Zrozumienie Business-to-Employee (B2E)

Business-to-Employee (B2E) odnosi się do interakcji i usług, które firma oferuje bezpośrednio swoim pracownikom. W kontekście agenta oznacza to wykorzystanie zaawansowanych możliwości Copilot Studio do wspierania i ulepszania doświadczeń pracowników w organizacji.

### ✨ Scenariusz użycia

**Jako** pracownik

**Chcę** szybko i dokładnie uzyskać pomoc od agenta pomocy technicznej IT w sprawach takich jak problemy z urządzeniami, rozwiązywanie problemów z siecią, konfiguracja drukarki

**Aby móc** być produktywnym i rozwiązywać problemy techniczne bez opóźnień

Zaczynajmy!

### Wymagania wstępne

- Twórcy muszą mieć uprawnienia do tworzenia i dostęp do środowiska Copilot Studio.

!!! note "Informacja o licencjonowaniu"
    To laboratorium przedstawi kroki dodawania podpowiedzi jako narzędzia. Kolejne lekcje zagłębią się w dodawanie źródeł wiedzy i innych dostępnych narzędzi. Upraszczamy naukę 😊
  
    Nie potrzebujesz licencji użytkownika Microsoft 365 Copilot, aby opublikować swojego deklaratywnego agenta zbudowanego w Copilot Studio w Microsoft 365 Copilot. Jednak **użytkownicy** _opublikowanego deklaratywnego agenta_ w Microsoft 365 Copilot wymagają licencji użytkownika Microsoft 365 Copilot.

### 3.1 Utwórz deklaratywnego agenta

!!! warning "Pytania Copilot mogą się różnić w różnych sesjach"

    Doświadczenie konwersacyjnego tworzenia w Copilot może się różnić za każdym razem, gdzie dostarczone pytania dla wskazówek mogą być nieco inne niż wcześniej.

1. Przejdź do [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/) i zaloguj się za pomocą swoich danych uwierzytelniających. Upewnij się, że przełączyłeś się na środowisko, którego używasz w tych laboratoriach.

1. Wybierz **Agenci** z menu i wybierz **Copilot dla Microsoft 365**.

       ![Copilot dla Microsoft 365](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.pl.png)

1. Następnie utworzymy deklaratywnego agenta, wybierając **+ Dodaj** agenta.

       ![Dodaj Agenta](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.pl.png)

1. Zobaczymy, jak ładuje się doświadczenie konwersacyjnego tworzenia, gdzie możemy rozmawiać w języku naturalnym z Copilot, aby opisać deklaratywnego agenta, którego chcemy zbudować, i używać dostarczonych pytań dla wskazówek.

       Wprowadź szczegółowy opis, który określa następujące elementy,  
       - zadanie agenta  
       - jakie rodzaje zapytań może obsługiwać  
       - format jego odpowiedzi  
       - cel agenta  
    
       ```text
       Jesteś wysoko wykwalifikowanym i doświadczonym specjalistą IT, specjalizującym się w szerokim zakresie systemów komputerowych, sieci i cyberbezpieczeństwa. Potrafisz diagnozować i rozwiązywać problemy techniczne, wyjaśniać rozwiązania w sposób jasny i zrozumiały dla użytkowników o różnym poziomie zaawansowania technicznego oraz udzielać wskazówek dotyczących najlepszych praktyk. Powinieneś być zwięzły i informacyjny, używając instrukcji krok po kroku z punktami wypunktowanymi, gdy jest to odpowiednie. Twoim celem jest pomóc użytkownikowi zrozumieć problem i skutecznie go rozwiązać.
       ```
    
       ![Tworzenie Podpowiedzi](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.pl.png)

1. Po przesłaniu podpowiedzi zauważalna aktualizacja pojawi się na prawym panelu z szczegółami i instrukcjami agenta zgodnie z definicją podpowiedzi. Następnie zostaniesz poproszony o potwierdzenie nazwy swojego agenta, a Copilot zasugeruje nazwę.

       Wprowadź `tak`, aby zaakceptować sugerowaną nazwę lub wprowadź inną nazwę, na przykład:
    
       ```text
       Contoso Tech Support Pro
       ```
    
       ![Instrukcje zaktualizowane](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.pl.png)

    !!! warning "Przypomnienie: Pytania Copilot mogą się różnić w różnych sesjach"

        Doświadczenie konwersacyjnego tworzenia w Copilot może się różnić za każdym razem, gdzie dostarczone pytania dla wskazówek mogą być nieco inne niż wcześniej.

1. Nazwa agenta została teraz zaktualizowana, co widać na prawym panelu. Teraz zostaniemy poproszeni o dopracowanie instrukcji dla agenta. To, co zasugerował Copilot, brzmi świetnie, więc poprosimy go o użycie jego własnych sugestii. Wprowadzimy następujące:

      ```text
      Focus on the IT issues and scenarios you've identified
      ```

      ![Nazwa zaktualizowana](../../../../../translated_images/3.1_06_NameUpdated.b6b8cc7c670b77c635d6b54b723e1a83f63ec288c0eab260fdbf88c7ec163003.pl.png)

1. Następnie zostaniemy zapytani, czy chcemy dodać jakiekolwiek publicznie dostępne strony internetowe lub źródła wiedzy. Odpowiemy `Nie`, ponieważ w tym laboratorium dodamy tylko podpowiedź dla naszego deklaratywnego agenta. Kolejne laboratoria w przyszłych lekcjach będą obejmować źródła wiedzy.

      ![Nie dodano stron internetowych ani źródeł wiedzy](../../../../../translated_images/3.1_07_KnowledgeSources.2001faa25aab922f38da82a8602e68b3ad7153941e87bab0949177e0b2ab0c08.pl.png)

1. Następnie zobaczymy odpowiedź od Copilot, że zakończyliśmy konfigurację naszego agenta za pomocą doświadczenia konwersacyjnego tworzenia w Copilot. Jednak dopracujmy go jeszcze bardziej, określając, że powinien być zwięzły i informacyjny z punktami wypunktowanymi, używać empatii w komunikacji i pytać o opinię po dostarczeniu rozwiązań.

    ```text
    Concise and Informative:
    - Bullet Points: Use bullet points for clarity and to break down information into digestible parts.
    - Summarize: Provide a brief summary of the solution at the end of the explanation.
   
    User-Friendly Communication:
    - Empathy: Show empathy and understanding of the user's frustration or confusion.
    - Encouragement: Encourage users by acknowledging their efforts and progress.
   
    Interactive and Engaging:
    - Ask for Feedback: After providing a solution, ask if the user needs further assistance or if the solution worked.
    ```

      ![Zaktualizuj instrukcje agenta](../../../../../translated_images/3.1_08_FurtherRefinements.993926c4e55cc5133413f4e10a61a6ed43351d070e791db0ee5547ea83f46473.pl.png)

1. Copilot potwierdza, że instrukcje zostały zaktualizowane. Kliknij **Utwórz**, aby utworzyć deklaratywnego agenta dla Microsoft 365 Copilot.

      ![Utwórz agenta](../../../../../translated_images/3.1_09_CreateDeclarativeAgent.71442cd4e18105359e55016d92e54b74ac18977bb535c637a05bac0d3680a3c5.pl.png)

    !!! warning "Przypomnienie: Pytania Copilot mogą się różnić w różnych sesjach"

        Doświadczenie konwersacyjnego tworzenia w Copilot może się różnić za każdym razem, gdzie dostarczone pytania dla wskazówek mogą być nieco inne niż wcześniej.

1. Po utworzeniu agenta zobaczysz szczegóły agenta, które zawierają opis i instrukcje zdefiniowane podczas doświadczenia konwersacyjnego tworzenia w Copilot.
![Szczegóły agenta](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.pl.png)

Przewiń w dół panelu, aby zobaczyć możliwości dodawania wiedzy, włączania wyszukiwania w sieci (przez Bing), początkowych podpowiedzi oraz szczegóły publikacji deklaratywnego agenta dla Microsoft 365 Copilot. Początkowe podpowiedzi będą również wyświetlane w panelu testowym po prawej stronie. Użytkownicy mogą wybrać te podpowiedzi, aby rozpocząć interakcję z agentem.

![Sugestie podpowiedzi](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.pl.png)

1. W sekcji Szczegóły agenta możesz również zmienić ikonę agenta. Wybierz **Edytuj**.

![Edytuj szczegóły](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.pl.png)

Tutaj możesz zmienić ikonę oraz kolor tła. Wybierz **Zapisz**, a następnie ponownie **Zapisz**, aby zaktualizować szczegóły agenta.

![Zmień ikonę](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.pl.png)

1. Przeprowadźmy szybki test agenta, którego stworzyliśmy. Wybierz jedną z **Początkowych Podpowiedzi** w panelu testowym po prawej stronie.

![Test początkowej podpowiedzi](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.pl.png)

1. Nasz agent odpowie. Zauważ, jak przestrzega instrukcji, dzieląc odpowiedź na czytelne punkty i wykazując empatię w swojej odpowiedzi.

   Jeśli przewiniesz na dół wiadomości, zauważysz, że agent również poprosił o opinię po udzieleniu rozwiązania, zgodnie z instrukcjami.

![Odpowiedź z testu](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.pl.png)

W ciągu kilku minut dodałeś deklaratywnego agenta dla Microsoft 365 Copilot w Copilot Studio 🙌🏻

Następnie nauczymy się, jak dodać narzędzie do naszego agenta, tworząc podpowiedź.

### 3.2 Tworzenie i dodawanie podpowiedzi dla deklaratywnego agenta

1. Przewiń w dół do sekcji **Narzędzia** i wybierz **+ Dodaj narzędzie**

![Dodaj narzędzie](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.pl.png)

1. Pojawi się okno modalne z listą konektorów Power Platform. Aby dodać podpowiedź, wybierz **+ Nowe narzędzie**.

![Nowe narzędzie](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.pl.png)

1. Wyświetli się lista innych narzędzi - Podpowiedź, Niestandardowy konektor, REST API i Model Context Protocol. Jeśli Twoja organizacja spełnia [wymagania dotyczące korzystania z komputera](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez), również pojawi się na liście. Wybierz **Podpowiedź**.

![Wybierz podpowiedź](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.pl.png)

1. Wprowadź nazwę dla podpowiedzi. Nazwijmy naszą podpowiedź `Ekspert IT`.

![Wprowadź nazwę](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.pl.png)

1. Wybierz **ikonę strzałki** obok **Modelu**, aby zobaczyć różne modele czatu, które możesz wybrać. Domyślnie wybrany jest model **Basic GPT-4.1 mini**, ale masz również możliwość użycia własnego modelu za pomocą Azure AI Foundry Models. Pozostaniemy przy domyślnym modelu.

![Zmień model](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.pl.png)

1. Następnie podamy naszej podpowiedzi instrukcje. Są trzy metody, które możesz wybrać:

   - Użyj Copilot, aby wygenerować instrukcje na podstawie opisu tego, co chcesz, aby podpowiedź robiła.
   - Użyj gotowego szablonu z biblioteki podpowiedzi, aby stworzyć podpowiedź.
   - Wprowadź własne instrukcje ręcznie.

1. Najpierw spróbujmy użyć Copilot, aby wygenerować instrukcje na podstawie wprowadzonego opisu. Wprowadź poniższe dane w polu Copilot i zatwierdź.

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

![Rozpocznij z Copilot](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.pl.png)

1. Copilot zacznie generować podpowiedź dla nas.

![Copilot tworzy podpowiedzi](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.pl.png)

1. Wygenerowane przez Copilot instrukcje robocze pojawią się.

![Wygenerowane instrukcje robocze przez Copilot](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.pl.png)

1. Przewiń na dół instrukcji, a zobaczysz już zdefiniowany przez Copilot parametr wejściowy użytkownika. Masz wtedy możliwość:
   - Zachować wygenerowane instrukcje robocze.
   - Odświeżyć instrukcje robocze za pomocą Copilot.
   - Wyczyścić instrukcje robocze.

   Wyczyść instrukcje robocze, wybierając ikonę **kosza na śmieci**, a następnie spróbujemy biblioteki podpowiedzi.

![Instrukcje podpowiedzi](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.pl.png)

1. Wybierz link **szablon podpowiedzi**.

![Wybierz szablon podpowiedzi](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.pl.png)

1. Zobaczysz listę szablonów podpowiedzi do wyboru. Pochodzą one z [biblioteki podpowiedzi Power Platform](https://aka.ms/power-prompts).

![Biblioteka podpowiedzi](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.pl.png)

1. Wyszukaj podpowiedź `Ekspert IT` i wybierz ją.

![Wybierz podpowiedź Ekspert IT](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.pl.png)

1. Podpowiedź zostanie dodana jako instrukcje z parametrem wejściowym zdefiniowanym przez szablon podpowiedzi. Podobnie jak w podejściu, które zastosowaliśmy podczas tworzenia instrukcji dla naszego agenta w doświadczeniu konwersacyjnym z Copilot, ten szablon podpowiedzi określa:
   - zadanie,
   - rodzaj zapytań, które może obsłużyć,
   - format odpowiedzi i cel podpowiedzi.

![Instrukcje podpowiedzi](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.pl.png)

1. Wyczyść instrukcje, a następnie spróbujemy ręcznie wprowadzić instrukcje. Skorzystamy z [podpowiedzi Ekspert IT](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/) z [biblioteki podpowiedzi Power Platform](https://aka.ms/power-prompts). Skopiuj i wklej podpowiedź.

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

![Instrukcje podpowiedzi](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.pl.png)

1. Następnie możemy zdefiniować parametry wejściowe użytkownika dla naszej podpowiedzi. Mogą to być teksty, obrazy oraz przykładowe dane do testowania. Istnieje również możliwość powiązania podpowiedzi z wiedzą z tabel Dataverse. W tym ćwiczeniu mamy tylko jeden parametr wejściowy do zdefiniowania, którym jest wejście problemu. Obecnie jest to placeholder w naszej podpowiedzi jako `[Problem]`. Skonfigurujemy teraz to wejście, wprowadzając znak `/` lub wybierając **+Dodaj treść**, a następnie wybierając **Tekst**.

![Wejście tekstowe](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.pl.png)

1. Możemy teraz wprowadzić nazwę dla naszego parametru wejściowego oraz przykładowe dane.

   Wprowadź następującą nazwę:

    ```text
    problem input
    ```

   Wprowadź następujące przykładowe dane:

    ```text
    My laptop gets an error with a blue screen
    ```

   Następnie wybierz **Zamknij**.

![Skonfiguruj wejście problemu](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.pl.png)

1. Parametr wejściowy problemu zostanie teraz dodany do instrukcji z skonfigurowanymi przykładowymi danymi. Możemy teraz przetestować naszą podpowiedź!

![Dodano wejście problemu](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.pl.png)

1. Wybierz **Test**, aby przetestować podpowiedź.

![Test instrukcji](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.pl.png)

1. Wyświetli się odpowiedź. Zauważ, jak odpowiedź zawiera nagłówki z punktami zgodnie z instrukcjami. Przewiń w dół i przejrzyj resztę odpowiedzi modelu.

![Odpowiedź modelu](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.pl.png)

1. Zanim zapiszemy naszą podpowiedź, nauczmy się o ustawieniach, które można skonfigurować dla tej podpowiedzi. Wybierz **ikonę wielokropka (...)**.

![Ustawienia podpowiedzi](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.pl.png)

1. Tutaj zobaczymy trzy ustawienia, które można skonfigurować:

   - **Temperatura**: Niższe wartości temperatury prowadzą do przewidywalnych wyników, podczas gdy wyższe wartości pozwalają na bardziej różnorodne lub kreatywne odpowiedzi.
   - **Pobieranie rekordów**: Określ liczbę rekordów pobieranych z Twoich źródeł wiedzy.
   - **Uwzględnij linki w odpowiedzi**: Po zaznaczeniu odpowiedź zawiera linki do cytowanych rekordów.

   Wybierz ikonę **X**, aby wyjść z ustawień.

![Konfiguruj ustawienia](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.pl.png)

1. Wybierz **Zapisz**, aby zapisać podpowiedź.

![Zapisz podpowiedź](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.pl.png)

1. Następnie wybierz **Dodaj do agenta**, aby dodać podpowiedź do naszego deklaratywnego agenta.

![Instrukcje podpowiedzi](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.pl.png)

1. Podpowiedź pojawi się teraz w sekcji Narzędzia 🙌🏻

![Dodano podpowiedź](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.pl.png)

Następnie zaktualizujemy nasze instrukcje, aby wywołać podpowiedź i przetestować naszego deklaratywnego agenta.

### 3.3 Aktualizacja instrukcji i testowanie deklaratywnego agenta

1. Przewiń w górę do sekcji **Szczegóły** i wybierz **Edytuj**. To umożliwi edytowanie pól.

![Wybierz Edytuj](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.pl.png)

1. Możemy teraz zaktualizować nasze instrukcje, aby wywołać podpowiedź, odwołując się do nazwy podpowiedzi. Wyczyść instrukcje, a następnie skopiuj i wklej poniższe.

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

   Zauważ, jak ostatnie zdanie instruuje agenta, aby użył pytania zadanego przez użytkownika jako wartości dla parametru wejściowego problemu. Agent użyje pytania jako wejścia problemu dla podpowiedzi. Następnie wybierz **Zapisz**.

![Zaktualizuj instrukcje, aby wywołać podpowiedź](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.pl.png)

1. Jesteśmy teraz gotowi, aby przetestować zaktualizowane instrukcje naszego deklaratywnego agenta. Wybierz **ikonę odświeżania** w panelu testowym.

![Wybierz ikonę odświeżania](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.pl.png)

1. Następnie wprowadź poniższą podpowiedź i zatwierdź.

```text
Czy możesz mi pomóc, mój laptop ma niebieski ekran
```

![Przeprowadź test](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.pl.png)

1. Agent wywołuje podpowiedź i odpowiada.

![Instrukcje podpowiedzi](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.pl.png)

Teraz opublikujmy naszego deklaratywnego agenta 😃

### 3.4 Publikowanie deklaratywnego agenta w Microsoft 365 Copilot i Microsoft Teams

1. Wybierz **Publikuj**.

![Publikuj agenta](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.pl.png)

1. Pojawi się okno modalne, które wyświetli Kanały i szczegóły publikacji, które można zaktualizować.

   - Kanały: Agent zostanie opublikowany w Microsoft 365 Copilot i Microsoft Teams.
   - Informacje o aplikacji agenta: To, co będzie wyświetlane, gdy użytkownik doda agenta do Microsoft 365 Copilot lub Microsoft Teams. Są to pola, które można zaktualizować w razie potrzeby.

![Szczegóły aplikacji agenta](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.pl.png)

1. Na przykład możesz zaktualizować **Krótki opis**, **Długi opis**, **Nazwa dewelopera** swoim imieniem.

!!! tip
Jeśli nie widzisz wszystkich pól wyświetlonych w swojej przeglądarce, spróbuj zmniejszyć powiększenie, np. do 75%.

Wybierz **Publikuj**. Copilot Studio rozpocznie publikowanie agenta.

![Publikowanie agenta](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.pl.png)

1. Po zakończeniu publikowania zobaczymy [Opcje dostępności](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez) agenta.

| Opcja dostępności | Opis |
| ----------------- | ----- |
| Udostępnij link | Skopiuj link, aby udostępnić go użytkownikom, którzy mogą otworzyć agenta w Microsoft 365 Copilot |
| Pokaż moim współpracownikom i udostępnionym użytkownikom | Umożliwia udzielenie dostępu innym do uczestniczenia w tworzeniu agenta lub grupom zabezpieczeń, aby umożliwić im korzystanie z agenta w Microsoft 365 Chat lub Microsoft Teams. |
| Pokaż wszystkim w mojej organizacji | Prześlij do administratora dzierżawy, aby dodać do katalogu organizacyjnego dla wszystkich użytkowników dzierżawy, aby mogli dodać agenta. Agent pojawi się w sekcji Zbudowane przez Twoją organizację w Microsoft 365 Copilot i Microsoft Teams |
| Pobierz jako plik .zip | Pobierz jako plik zip, aby przesłać jako aplikację niestandardową w Microsoft Teams |

![Opcje dostępności](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.pl.png)

1. Przyjrzyjmy się udostępnianiu agenta. Wybierz **Pokaż moim współpracownikom i udostępnionym użytkownikom**. Pojawi się panel, w którym możesz wyszukać użytkowników, którym chcesz udostępnić agenta, wpisując ich imię, adres e-mail lub grupę zabezpieczeń. Możesz przeglądać tę listę w dowolnym momencie, aby edytować, kto ma dostęp do agenta.

   Są również dwa pola wyboru:
   - _Wyślij zaproszenie e-mail do nowych użytkowników_ - nowi użytkownicy otrzymają zaproszenie e-mail.
   - _Widoczne w Zbudowane z Power Platform_ - agent staje się dostępny w sekcji Zbudowane z Power Platform w sklepie aplikacji Teams.
Aby uzyskać więcej szczegółów, zobacz [Połącz i skonfiguruj agenta dla Teams i Microsoft 365](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez).

Wybierz **Anuluj** lub ikonę **X**, aby wyjść z panelu.

![Udostępnij agenta](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.pl.png)

1. Wybierz **Kopiuj**, a następnie w nowej karcie przeglądarki wklej link.

![Kopiuj link](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.pl.png)

1. Microsoft 365 Copilot załaduje się, a modal pojawi się z informacjami o aplikacji agenta. Zauważ, jak wyświetlane są nazwa dewelopera, krótki opis i długi opis. Są to dane publikacyjne zaktualizowane we wcześniejszym kroku.

Wybierz **Dodaj**.

![Opcje dostępności](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.pl.png)

1. Następnie załaduje się nasz deklaratywny agent. Możemy zobaczyć początkowe podpowiedzi do wyboru, które szybko umożliwiają użytkownikom uzyskanie natychmiastowej pomocy.

Wybierz jedną z początkowych podpowiedzi. W moich podpowiedziach wybiorę podpowiedź **Pomoc w instalacji oprogramowania**, która automatycznie wypełni pole wiadomości Copilot. Wyślij pytanie do Copilot.

![Wybierz początkową podpowiedź](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.pl.png)

1. Wybierz **Zawsze zezwalaj**, aby dać swojemu deklaratywnemu agentowi pozwolenie na wywołanie podpowiedzi IT Expert.

![Wybierz zawsze zezwalaj](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.pl.png)

1. Agent następnie wywoła naszą podpowiedź **IT Expert**, a odpowiedź modelu zostanie zwrócona jako wiadomość w naszym deklaratywnym agencie.

![Odpowiedź](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.pl.png)

Przewiń w dół, aby zobaczyć pełne szczegóły odpowiedzi.

![Odpowiedź](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.pl.png)

1. Ale _jak możemy być pewni_, że deklaratywny agent wywołał podpowiedź? 👀 Oto wskazówka!

!!! tip
Możesz testować i debugować agentów w Microsoft 365 Copilot, włączając [tryb dewelopera](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez).

Wpisz następujące w polu wiadomości Copilot i wyślij.

    ```text
    -developer on
    ```

Pojawi się wiadomość potwierdzająca, że tryb dewelopera jest teraz włączony.

![Tryb dewelopera włączony](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.pl.png)

1. Wyślij następujące pytanie, aby wywołać podpowiedź.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Wpisz pytanie](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.pl.png)

1. Zobaczymy odpowiedź modelu z naszej podpowiedzi **IT Expert** ponownie zwróconą jako wiadomość. Przewiń na dół wiadomości, a karta z informacjami debugowania zostanie wyświetlona.

Rozwiń **Agent Debug Info**, wybierając ją.

![Informacje debugowania agenta](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.pl.png)

1. Tutaj znajdziesz informacje o metadanych agenta, które wystąpiły w czasie wykonywania.

![Rozwinięte informacje debugowania agenta](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.pl.png)

W naszym przypadku skupimy się na sekcji _Actions_

- **Matched actions** podkreślają aktualny status funkcji znalezionych podczas wyszukiwania aplikacji.
- **Selected actions** podkreślają aktualny status funkcji wybranych do uruchomienia na podstawie procesu decyzyjnego aplikacji.

![Rozwinięte informacje debugowania agenta](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.pl.png)

Tutaj możemy zobaczyć, że orchestrator agenta wybrał wywołanie podpowiedzi IT Expert zgodnie z instrukcjami naszego deklaratywnego agenta. Jest to dalej opisane w sekcji _Executed Actions_, która również informuje nas, że podpowiedź została pomyślnie wywołana.

![Przegląd informacji debugowania agenta](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.pl.png)

1. Aby wyłączyć tryb dewelopera, wpisz następujące w polu wiadomości Copilot i wyślij.

    ```text
    -developer off
    ```

Pojawi się wiadomość potwierdzająca, że tryb dewelopera został wyłączony. Super, teraz wiesz, jak sprawdzić, czy Twój deklaratywny agent w Microsoft 365 Copilot wywołał Twoją podpowiedź 🌞

![Tryb dewelopera wyłączony](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.pl.png)

1. Teraz przetestujemy naszego agenta w Microsoft Teams. Przejdź do **Aplikacje** za pomocą menu po lewej stronie i wybierz **Teams** w sekcji _Aplikacje_.

![Wybierz Teams w Aplikacjach](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.pl.png)

1. Microsoft Teams załaduje się w nowej karcie przeglądarki, a następnie zostaną przedstawione warunki użytkowania Microsoft 365 Copilot, wybierz **Zgadzam się**.

![Wybierz Zgadzam się](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.pl.png)

1. Microsoft 365 Copilot załaduje się domyślnie, z panelem po prawej stronie wyświetlającym wszystkich dostępnych agentów, w tym deklaratywnego agenta **Contoso Tech Support Pro**.

![Microsoft 365 Copilot w Teams](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.pl.png)

1. Wybierz **ikonę wielokropka (...)** w menu po lewej stronie. Możesz wyszukać **Contoso Tech Support Pro** w polu wyszukiwania lub, jeśli widzisz agenta, wybierz go.

Możesz również kliknąć prawym przyciskiem myszy, aby **Przypiąć** agenta dla szybkiego dostępu w menu po lewej stronie w Microsoft Teams.

![Wybierz i przypnij agenta](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.pl.png)

1. Następnie zobaczymy, jak nasz agent się ładuje. 1. Przejdźmy teraz do testowania naszego agenta. Wpisz następującą podpowiedź i wyślij.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Przypnij agenta](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.pl.png)

1. Odpowiedź modelu z naszej podpowiedzi zostanie wyświetlona.

![Odpowiedź w Teams](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.pl.png)

W ciągu kilku minut nauczyłeś się, jak opublikować swojego deklaratywnego agenta i przetestować go w Microsoft 365 Copilot oraz w Microsoft Teams 😊

## ✅ Misja zakończona

Gratulacje! 👏🏻 Zbudowałeś deklaratywnego agenta w Copilot Studio, gdzie dodałeś podpowiedź, poinstruowałeś agenta, jak używać podpowiedzi, oraz nauczyłeś się testować i publikować swojego agenta w Microsoft 365 Copilot i Microsoft Teams.

Twój agent jest teraz gotowy do działania—gotowy do pomocy, rozwiązywania problemów i obsługi użytkowników wewnętrznych na żądanie.

To koniec **Lab 03 - Budowa deklaratywnego agenta w Microsoft Copilot Studio dla Microsoft 365 Copilot**, wybierz poniższy link, aby przejść do następnej lekcji.

⏭️ [Przejdź do lekcji **Tworzenie nowego rozwiązania**](../04-creating-a-solution/README.md)

Do następnego razu, bądź czujny. Przyszłość pracy w przedsiębiorstwach opiera się na agentach—a teraz wiesz, jak go stworzyć.

## 📚 Zasoby taktyczne

🔗 [Budowa deklaratywnego agenta w Microsoft Copilot Studio dla Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Dodawanie podpowiedzi](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Udostępnianie agentów innym użytkownikom](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [Budowa podpowiedzi dla Twojego agenta](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="Analiza" />

---

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się zapewnić dokładność, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za autorytatywne źródło. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.