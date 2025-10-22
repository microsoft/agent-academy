<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8e2c64a7f9303e58329ec8bb468c80b4",
  "translation_date": "2025-10-22T00:46:19+00:00",
  "source_file": "docs/recruit/05-using-prebuilt-agents/README.md",
  "language_code": "pl"
}
-->
# 🧰 Misja 05: Korzystanie z gotowego agenta  

## 🕵️‍♂️ KOD OPERACJI: `BEZPIECZNE PODRÓŻE`

> **⏱️ Czas trwania operacji:** `~30 minut`

🎥 **Obejrzyj instruktaż**

[![Miniatura wideo gotowego agenta](../../../../../translated_images/video-thumbnail.234ee62d2e4e837a7401776b5f092e5d5819f46a2e2859a92654b38f1381789f.pl.jpg)](https://www.youtube.com/watch?v=NmXsx8WjWuM "Obejrzyj instruktaż na YouTube")

## 🎯 Cel misji

Witamy w kolejnej misji w Akademii Agentów Copilot Studio. Za chwilę poznasz świat **gotowych agentów**—inteligentnych, ukierunkowanych agentów stworzonych przez Microsoft, aby przyspieszyć wdrożenie i skrócić czas osiągnięcia wartości.

Zamiast budować od podstaw, gotowe agenty (zwane również **szablonami agentów**) dają Ci przewagę, oferując gotowe scenariusze, które możesz dostosować i wdrożyć w kilka minut.

W tej misji wdrożysz agenta **Bezpieczne Podróże**—agenta, który pomaga użytkownikom przygotować się do podróży służbowych, zrozumieć polityki firmy i usprawnić planowanie.

---

## 🧭 Cele

Twoje zadania w tej misji to:

1. Zrozumieć, czym są gotowe agenty i dlaczego są ważne  
1. Wdrożyć szablon agenta **Bezpieczne Podróże**  
1. Dostosować odpowiedzi i treści agenta  
1. Przetestować i opublikować agenta  

---

## 🧠 Czym są gotowe agenty?

Gotowe agenty to gotowe do użycia agenty AI stworzone przez Microsoft, które:

- Rozwiązują typowe potrzeby biznesowe (np. podróże, HR, wsparcie IT)
- Zawierają w pełni funkcjonujące tematy, frazy wyzwalające, instrukcje i przykładową wiedzę.
- Mogą być edytowane, rozszerzane i osadzone w Twoich danych

Te agenty są idealne, aby szybko rozpocząć pracę lub nauczyć się, jak są skonstruowane.

---

## 🧪 Laboratorium 05: Szybki start z gotowym agentem

Teraz nauczymy się, jak wybrać gotowego agenta i dostosować go.

- [5.1 Uruchom Copilot Studio](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.2 Wybierz szablon agenta Bezpieczne Podróże](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.3 Dostosuj agenta](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.4 Przetestuj i opublikuj](../../../../../docs/recruit/05-using-prebuilt-agents)

Pozostaniemy przy wcześniejszym przykładzie, gdzie stworzymy rozwiązanie w dedykowanym środowisku Copilot Studio, aby zbudować naszego agenta wsparcia IT.

Zaczynajmy!

### 5.1 Uruchom Copilot Studio

1. Przejdź do [https://copilotstudio.microsoft.com](https://copilotstudio.microsoft.com)

1. Zaloguj się za pomocą konta Microsoft 365 dla pracy lub szkoły

!!! warning
    Musisz być w dzierżawie, gdzie Copilot Studio jest włączone. Jeśli nie widzisz Copilot Studio, wróć do [Misji 00](../00-course-setup/README.md), aby ukończyć konfigurację.

### 5.2 Wybierz szablon agenta Bezpieczne Podróże

1. Na stronie głównej Copilot Studio kliknij **+ Utwórz**
    ![Utwórz agenta](../../../../../translated_images/create.ef22dd3e758823e9f17d69ef07c7db6fef8cbc00dd944ac65842bd3bd9f16efd.pl.png)

1. Przewiń w dół do sekcji **Rozpocznij od szablonu agenta**

1. Znajdź i wybierz **Bezpieczne Podróże**

    ![Wybierz szablon Bezpieczne Podróże](../../../../../translated_images/choose_template.01c90e72076da7f14a9c93120dec6932b57a109a506823dd3b195d8f610afb07.pl.png)

1. Zauważ, że szablon jest wstępnie załadowany opisem, instrukcjami i wiedzą.

    ![Przejrzyj szablon](../../../../../translated_images/template-setup.0b2f5a8dd8c3e7e305d24461df3065a4ec435d3300df75287891830a9b91b974.pl.png)

1. Kliknij **Utwórz**

    ![Utwórz agenta](../../../../../translated_images/create-agent-setup.3383d353508b5e33593bd2961c1fbea29568a49868356844ab4cffdad584a655.pl.png)

To utworzy nowego agenta w Twoim środowisku na podstawie konfiguracji Bezpieczne Podróże.

### 5.3 Dostosuj agenta

Teraz, gdy agent został utworzony, dostosujmy go do Twojej organizacji:

1. Wybierz **Włącz generatywne AI**, aby aktywować funkcję generatywnego AI, dzięki której będzie korzystać z instrukcji zawartych w szablonie.

    ![Włącz generatywne odpowiedzi](../../../../../translated_images/gen-answers.7e91d692123771a60b0b944956472a1323857f61ffa2c32231f12eeb9bec341c.pl.png)

1. Teraz wyposażymy agenta w dodatkowe źródło wiedzy, aby mógł odpowiadać na pytania dotyczące podróży po Europie. Aby to zrobić, przewiń w dół do sekcji **wiedza** i wybierz **Dodaj wiedzę**

    ![Dodaj wiedzę](../../../../../translated_images/knowledge.d85f70ad6cffe8700b2f33f76633c1c37ce45a960a33e42b3b48eca2759449b5.pl.png)

1. Wybierz **Publiczne strony internetowe**

    ![Dodaj publiczną stronę internetową](../../../../../translated_images/public-website.cb547b2284c409058bbe7e0a46e503f2368911b0781eec530b9ae63cd174e0b9.pl.png)

1. W polu tekstowym wklej **<https://european-union.europa.eu/>** i wybierz **Dodaj**

    ![Dodaj stronę internetową](../../../../../translated_images/paste-add.bb80b0f0f9bcd47dfbf00ebcb0a5386fa892be795c2eee74a8348c0d2a6ab5ae.pl.png)

1. Wybierz **Dodaj do agenta**

    ![Dodaj do agenta](../../../../../translated_images/add-to-agent.f139c87c5a79ddaa1eef244a93f76c6451c1374dbbf189c23ce24c49a65d6073.pl.png)

### 5.4 Przetestuj i opublikuj

1. Kliknij **Testuj** w prawym górnym rogu, aby uruchomić okno testowe  

1. Wypróbuj frazy takie jak:

    - `“Czy potrzebuję wizy, aby podróżować z USA do Amsterdamu?”`
    - `“Jak długo trwa uzyskanie paszportu USA?”`
    - `“Gdzie znajduje się najbliższa ambasada USA w Walencji, Hiszpania?”`

1. Potwierdź, że agent odpowiada dokładnie i pomocnie, oraz obserwuj Mapę Aktywności, aby zobaczyć, skąd pobiera informacje.

    ![Dodaj do agenta](../../../../../translated_images/response-passport.e91b05c561f49cf5edbbdc6d7a61fffdcc4ad3d413bd17b09cca3f521a578be8.pl.png)

1. Gdy będziesz gotowy, kliknij **Opublikuj**

    ![Dodaj do agenta](../../../../../translated_images/publish-1.0685cfdf10e365ee58a8d0160c5bab81aef8fa5fbd2eb65535d568f611532637.pl.png)

1. W oknie dialogowym ponownie wybierz **Opublikuj**
    ![Dodaj do agenta](../../../../../translated_images/publish-2.9c3964d72347088eeaaf8c137921d5b67c9962bce0ad067f89e8999f75299aa2.pl.png)

1. Opcjonalnie dodaj agenta do Microsoft Teams za pomocą wbudowanej funkcji **Kanały**.

!!! note "🧳 Dodatkowy cel"
    Spróbuj osadzić agenta Bezpieczne Podróże na stronie SharePoint lub w pliku FAQ, aby uczynić go bardziej odpowiednim dla polityk podróży Twojej firmy.

## ✅ Misja zakończona

Udało Ci się:

- Wdrożyć gotowego agenta Microsoft  
- Dostosować agenta  
- Przetestować i opublikować własną wersję szablonu agenta **Bezpieczne Podróże**

⏭️ [Przejdź do lekcji **Tworzenie własnego agenta od podstaw**](../06-create-agent-from-conversation/README.md).

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/05-using-prebuilt-agents" alt="Analiza" />

---

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się zapewnić dokładność, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za autorytatywne źródło. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.