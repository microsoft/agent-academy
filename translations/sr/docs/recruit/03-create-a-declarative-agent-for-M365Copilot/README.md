<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-20T23:43:40+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "sr"
}
-->
# 🚨 Мисија 03: Размештање декларативног агента за Microsoft 365 Copilot

## 🕵️‍♂️ КОДНО ИМЕ: `ОПЕРАЦИЈА ПРОШИРЕЊЕ COPILOT-А`

> **⏱️ Време трајања операције:** `~60 минута`

🎥 **Погледајте видео водич**

[![Слика видео водича за креирање декларативног агента](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.sr.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "Погледајте водич на YouTube-у")

## 🎯 Опис мисије

Добродошли на ваш први теренски задатак, Агенте Креаторе. Изабрани сте да дизајнирате, опремите и разместите Декларативног Агента—специјализованог оперативца директно уграђеног у Microsoft 365 Copilot и Microsoft Teams.

За разлику од традиционалних агената, декларативни агенти функционишу са дефинисаном мисијом (упутствима), алатима (упитима/конекторима) и стратешким приступом унутрашњој интелигенцији (изворима знања као што су SharePoint, Dataverse и други). Ваш задатак је да изградите овог агента користећи Microsoft Copilot Studio—командни центар без потребе за програмирањем, где вештине и сврха вашег агента оживљавају.

Кренимо.

## 🔎 Циљеви

У овој мисији ћете научити:

1. Шта су декларативни агенти и како проширују Microsoft 365 Copilot са прилагођеним могућностима
1. Поређење Microsoft Copilot Studio и Copilot Studio алата за креирање агената за изградњу декларативних агената
1. Креирање декларативног агента користећи природни језик кроз искуство конверзацијског креирања
1. Додавање AI упита као алата за побољшање специјализованог знања и способности решавања проблема вашег агента
1. Објављивање и тестирање вашег декларативног агента у Microsoft 365 Copilot и Microsoft Teams

## 🕵🏻‍♀️ Шта је декларативни агент за Microsoft 365 Copilot?

Декларативни агенти су прилагођене верзије Microsoft 365 Copilot-а. Можете прилагодити Microsoft 365 Copilot да задовољи специфичне пословне потребе пружајући му упутства за подршку одређеном процесу, повезујући га са знањем предузећа и користећи алате за ширу проширивост. Ово омогућава организацијама да креирају персонализована искуства са већом функционалношћу за своје кориснике.

## 🤔 Зашто бих користио Microsoft Copilot Studio за изградњу декларативног агента?

Као креатор, постоји шанса да сте већ истражили [Copilot Studio алат за креирање агената](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez) у Microsoft 365 Copilot-у и вероватно се питате _зашто градити декларативног агента у Microsoft Copilot Studio?_

Microsoft Copilot Studio нуди свеобухватан сет алата и функција за декларативне агенте који превазилазе ограничења Copilot Studio алата за креирање агената. Слично као и Copilot Studio алат за креирање агената, не морате знати програмирање или развој софтвера да бисте градили у Microsoft Copilot Studio. Хајде да детаљније размотримо разлике између Copilot Studio алата за креирање агената и Copilot Studio за изградњу декларативних агената.

### Поређење функција

Следећа табела истиче разлике приликом изградње декларативног агента у Copilot Studio алату за креирање агената и Copilot Studio.

| Функција                   | Copilot Studio алат за креирање агената у Microsoft 365 Copilot                          | Проширење Microsoft 365 Copilot-а у Copilot Studio                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **Знање**       | Веб, SharePoint, Microsoft Teams четови, Outlook имејлови, Copilot конектори     | Претрага веба (преко Bing-а), SharePoint, Dataverse, Dynamics 365, Copilot конектори  |
| **Алатке**       | Интерпретер кода, генератор слика     | 1400+ Power Platform конектора, прилагођени конектори, упити, коришћење рачунара, REST API, Model Context Protocol   |
| **Почетни упити**         | Конфигуришите упите за кориснике да брзо започну   | Конфигуришите упите за кориснике да брзо започну  |
| **Канал**           | Агенти се објављују само у Microsoft 365 Copilot     | Агенти се објављују у Microsoft 365 Copilot и Microsoft Teams      |
| **Дозволе за дељење**         | Корисници су само гледаоци    | Корисници могу бити уредници или гледаоци   |

Постоје додатне могућности које се нуде за декларативне агенте изграђене у Microsoft Copilot Studio, о којима ћемо више научити у наставку.

!!! tip
    - Да бисте сазнали више о Copilot Studio алату за креирање агената, посетите [Copilot Developer Camp: Lab MAB1 - Изградите ваш први агент](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/)
    - За професионални развој проширења декларативног агента изван Copilot Studio алата за креирање агената за Microsoft 365 Copilot, посетите [Copilot Developer Camp: Lab MAB1 - Изградите ваш први агент](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/)

### Проширење Microsoft 365 Copilot-а са декларативним агентима изграђеним у Copilot Studio

Хајде да проширимо оно што смо научили из табеле поређења функција.

#### Прилагођавање

- **Детаљна упутства**: Можете пружити детаљна упутства и могућности да прецизно дефинишете сврху и понашање агента.
  - Ово укључује коришћење алата једноставно кроз природни језик.

- **Приступ знању предузећа**: Омогућава приступ знању предузећа уз поштовање дозвола корисника.
  - Интеграција са SharePoint-ом
  - Интеграција са Dataverse-ом
  - Интеграција са Dynamics 365
  - Microsoft 365 Copilot конектори омогућени од стране администратора ваше организације

   ![Прилагођавање](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.sr.png)

#### Напредне могућности

- **Интеграција са спољним услугама**: Омогућава вам да изаберете између 1400+ Power Platform конектора који се интегришу са спољним услугама, пружајући сложеније и моћније функционалности.
  - Примери укључују [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez), [ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez), [Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez), [SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) и други
  - Алтернативно, можете користити сервере Model Context Protocol и REST API директно у вашем декларативном агенту

- **AI упити**: Користите упит за анализу и трансформацију текста, докумената, слика и података уз природни језик и AI резоновање.
  - Изаберите модел за чет, изаберите између Basic (Default), Standard, Premium
  - Опција да користите сопствени Azure AI Foundry модел за подршку вашем упиту

- **Више опција за конфигурацију објављивања**: Изаберите канале и дефинишите дозволе за кориснике.
  - Објавите у Microsoft Teams, познатом корисничком интерфејсу за ваше кориснике ради брже усвајања
  - Дозволе за уређивање могу се делити како би се избегла зависност од једног власника агента

   ![Прилагођавање](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.sr.png)

Укратко, декларативни агенти у Microsoft Copilot Studio омогућавају прилагођавање Microsoft 365 Copilot-а како би одговарали пословним потребама кроз интеграцију система знања предузећа, алата за повезивање са спољним услугама или AI GPT моделима.

## 🧪 Лабораторија 03: Изградња декларативног агента у Microsoft Copilot Studio за Microsoft 365 Copilot

У наставку ћемо научити како да изградимо декларативног агента за случај употребе "Бизнис-за-запослене", који ће деловати као **агент за помоћ у IT сектору**.

- [3.1 Креирање декларативног агента](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 Креирање и додавање упита за ваш декларативни агент](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 Ажурирање упутстава и тестирање вашег декларативног агента](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 Објављивање вашег декларативног агента у Microsoft 365 Copilot и Microsoft Teams](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    Ова лабораторија ће приказати кораке за додавање упита као алата. Следеће лекције ће се бавити додавањем извора знања и других доступних алата. Олакшавамо ваше учење 😊

### 👩🏻‍💼 Разумевање Бизнис-за-запослене (B2E)

Бизнис-за-запослене (B2E) односи се на интеракције и услуге које предузеће директно пружа својим запосленима. У контексту агента, то значи коришћење напредних могућности Copilot Studio-а за подршку и побољшање радног искуства запослених унутар организације.

### ✨ Сценарио употребе

**Као** запослени

**Желим да** добијем брзу и тачну помоћ од агента за IT помоћ при решавању проблема као што су проблеми са уређајима, решавање проблема са мрежом, подешавање штампача

**Како бих могао** да останем продуктиван и решим техничке проблеме без одлагања

Кренимо!

### Предуслови

- Креатори морају имати дозволе за креирање и приступ Copilot Studio окружењу.

!!! note "Напомена о лиценцирању"
    Ова лабораторија ће приказати кораке за додавање упита као алата. Следеће лекције ће се бавити додавањем извора знања и других доступних алата. Олакшавамо ваше учење 😊
  
    Не треба вам лиценца за коришћење Microsoft 365 Copilot-а да бисте објавили ваш декларативни агент изграђен у Copilot Studio-у за Microsoft 365 Copilot. Међутим, **корисници** _објављеног декларативног агента_ у Microsoft 365 Copilot-у захтевају лиценцу за коришћење Microsoft 365 Copilot-а.

### 3.1 Креирање декларативног агента

!!! warning "Питања Copilot-а могу се разликовати у различитим сесијама"

    Искуство конверзацијског креирања у Copilot-у може се разликовати сваки пут, где понуђена питања за смернице могу бити мало другачија него раније.

1. Идите на [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/) и пријавите се користећи ваше акредитиве. Уверите се да сте прешли на окружење које користите за ове лабораторије.

1. Изаберите **Агенти** из менија и изаберите **Copilot за Microsoft 365**.

       ![Copilot за Microsoft 365](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.sr.png)

1. Затим ћемо креирати декларативног агента тако што ћемо изабрати **+ Додај** агента.

       ![Додај агента](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.sr.png)

1. Затим ће се учитати искуство конверзацијског креирања где можемо разговарати природним језиком са Copilot-ом како бисмо описали декларативног агента ког желимо да изградимо и користимо понуђена питања за смернице.

       Унесимо детаљан опис који обухвата следеће,  
       - задатак агента  
       - које врсте упита може да обради  
       - формат његовог одговора  
       - циљ агента  
    
       ```text
       Ви сте високо квалификован и искусан IT професионалац специјализован за широк спектар рачунарских система, мрежа и сајбер безбедности. У стању сте да дијагностикујете и решавате техничке проблеме, објашњавате решења на јасан и разумљив начин за кориснике свих техничких нивоа и пружате смернице о најбољим праксама. Треба да будете концизни и информативни, користећи упутства корак по корак са тачкама када је то прикладно. Ваш циљ је да помогнете кориснику да разуме проблем и како да га ефикасно реши.
       ```
    
       ![Креирај упит](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.sr.png)

1. Након што пошаљете упит, приметна ажурирања ће се појавити на десној страни панела са детаљима и упутствима агента како је дефинисано упитом. Затим ће вам бити затражено да потврдите име вашег агента, а Copilot ће предложити име.

       Унесите `да` да прихватите предложено име или унесите друго име, као што је следеће,
    
       ```text
       Contoso Tech Support Pro
       ```
    
       ![Упутства ажурирана](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.sr.png)

    !!! warning "Подсетник: Питања Copilot-а могу се разликовати у различитим сесијама"

        Искуство конверзацијског креирања у Copilot-у може се разликовати сваки пут, где понуђена питања за смернице могу бити мало другачија него раније.

1. Име агента је сада ажурирано, што се види на десној страни панела. Сада нам је затражено да прецизирамо упутства за агента. Оно што је Copilot предложио звучи одлично, па ћемо га замолити да користи своје предлоге. Унећемо следеће,

      ```text
      Focus on the IT issues and scenarios you've identified
      ```

      ![Име ажурирано](../../../../../translated_images/3.1_06_NameUpdated.b6b8cc7c670b77c635d6b54b723e1a83f63ec288c0eab260fdbf88c7ec163003.sr.png)

1. Затим ће нам бити постављено питање да ли желимо да додамо било које јавно доступне веб странице или знање. Одговорићемо са `Не` јер ћемо у овој лабораторији додати само упит за наш декларативни агент. Наредне лабораторије у будућим лекцијама ће покрити изворе знања.

      ![Нису додате веб странице или извори знања](../../../../../translated_images/3.1_07_KnowledgeSources.2001faa25aab922f38da82a8602e68b3ad7153941e87bab0949177e0b2ab0c08.sr.png)

1. Затим ћемо видети одговор од Copilot-а да смо сада завршили конфигурисање нашег агента користећи искуство конверзацијског креирања у Copilot-у. Међутим, хајде да га још мало прецизирамо тако што ћемо навести да треба да буде концизан и информативан са тачкама, да користи емпатију у комуникацији и да тражи повратне информације након пружања
![Детаљи агента](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.sr.png)

Померите се надоле кроз панел и видећете могућности додавања знања, омогућавања претраге на вебу (преко Bing-а), почетних упита и детаља о објављивању декларативног агента за Microsoft 365 Copilot. Почетни упити ће такође бити приказани у панелу за тестирање са десне стране. Корисници могу изабрати ове почетне упите да започну интеракцију са агентом.

![Предложени упити](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.sr.png)

1. У одељку Детаљи агента, имате могућност да промените икону агента. Изаберите **Edit**.

![Измена детаља](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.sr.png)

Овде можете променити икону и боју позадине. Изаберите **Save**, а затим поново **Save** да ажурирате детаље агента.

![Промена иконе](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.sr.png)

1. Хајде да брзо тестирамо агента који смо креирали. Изаберите један од **Starter Prompts** у панелу за тестирање са десне стране.

![Тестирање почетног упита](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.sr.png)

1. Наш агент ће затим одговорити. Приметите како је следио упутства пружајући одговоре у облику тачака, и користио емпатију у свом одговору.

Ако се померите на дно поруке, приметићете како је такође затражио повратну информацију након пружања решења, како је и било упућено.

![Одговор након тестирања](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.sr.png)

За само неколико минута додали сте декларативног агента за Microsoft 365 Copilot у Copilot Studio 🙌🏻

Следеће ћемо научити како да додамо алатку нашем агенту, креираћемо упит.

### 3.2 Креирање и додавање упита вашем декларативном агенту

1. Померите се надоле до одељка **Tools** и изаберите **+ Add tool**

![Додавање алатке](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.sr.png)

1. Појавиће се модални прозор са листом Power Platform конектора. Да бисте додали упит, изаберите **+ New tool**.

![Нова алатка](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.sr.png)

1. Приказаће се листа других алатки - Prompt, Custom connector, REST API и Model Context Protocol. Ако ваша организација испуњава [захтеве за коришћење рачунара](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez), то ће се такође појавити на листи. Изаберите **Prompt**.

![Избор упита](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.sr.png)

1. Унесите име за упит. Назовимо наш упит `IT Expert`.

![Унос имена](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.sr.png)

1. Изаберите **chevron icon** поред **Model** да бисте видели различите моделе за ћаскање које можете изабрати. Подразумевано је изабран модел **Basic GPT-4.1 mini**, а такође имате опцију да користите сопствени модел преко Azure AI Foundry Models. Остаћемо при подразумеваном моделу.

![Промена модела](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.sr.png)

1. Затим ћемо нашем упиту пружити упутства. Постоје три методе које можете изабрати:

   - Користите Copilot да генерише упутства за вас на основу вашег описа шта желите да упит ради.
   - Користите унапред дефинисан шаблон из библиотеке упита за креирање упита.
   - Ручно унесите своја упутства.

1. Прво ћемо пробати да користимо Copilot за генерисање упутстава на основу унетог описа. Унесите следеће у поље Copilot и пошаљите.

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

![Почетак са Copilot-ом](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.sr.png)

1. Copilot ће затим почети да генерише упит за нас.

![Copilot генерише упите](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.sr.png)

1. Генерисана упутства од стране Copilot-а ће се затим појавити.

![Генерисана упутства од Copilot-а](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.sr.png)

1. Померите се до дна упутстава и видећете параметар корисничког уноса који је већ дефинисао Copilot. Затим имате опцију да:
   - Задржите генерисана упутства.
   - Освежите генерисана упутства користећи Copilot.
   - Обришете генерисана упутства.

Обришите генерисана упутства тако што ћете изабрати икону **trash bin**, а затим ћемо пробати библиотеку упита.

![Упутства за упит](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.sr.png)

1. Изаберите линк **prompt template**.

![Избор шаблона упита](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.sr.png)

1. Приказаће се листа шаблона упита које можете изабрати. Ово су из [Power Platform Prompt библиотеке](https://aka.ms/power-prompts).

![Библиотека упита](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.sr.png)

1. Потражите упит `IT expert` и изаберите га.

![Избор IT expert упита](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.sr.png)

1. Упит ће бити додат као упутства са параметром уноса дефинисаним шаблоном упита. Слично приступу који смо користили приликом пружања упутстава за нашег агента током искуства креирања разговора са Copilot-ом, овај шаблон упита дефинише:
   - задатак,
   - врсте упита које може обрадити,
   - формат одговора и циљ упита.

![Упутства за упит](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.sr.png)

1. Обришите упутства и следеће ћемо ручно унети упутства. Користићемо [IT Expert упит](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/) из [Power Platform Prompt библиотеке](https://aka.ms/power-prompts). Копирајте и налепите упит.

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

![Упутства за упит](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.sr.png)

1. Затим можемо дефинисати параметре корисничког уноса за наш упит. Они могу бити текст и слике, као и пример података за тестирање. Постоји и могућност да се упит заснује на знању из Dataverse табела. За ову вежбу, имамо само један кориснички унос који треба дефинисати, а то је унос проблема. Тренутно је то резервисано место у нашем упиту као `[Problem]`. Сада ћемо конфигурисати овај унос тако што ћемо унети карактер `/` или изабрати **+Add content**, а затим изабрати **Text**.

![Текстуални унос](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.sr.png)

1. Сада можемо унети име за наш параметар уноса и пример података.

Унесите следеће као име

    ```text
    problem input
    ```

Унесите следеће као пример података

    ```text
    My laptop gets an error with a blue screen
    ```

Затим изаберите **Close**.

![Конфигурисање уноса проблема](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.sr.png)

1. Параметар уноса проблема ће сада бити додат у упутства са конфигурисаним примером података. Сада можемо тестирати наш упит!

![Додат унос проблема](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.sr.png)

1. Изаберите **Test** да тестирате упит.

![Тестирање упутстава](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.sr.png)

1. Одговор ће се затим приказати. Приметите како одговор пружа наслове са тачкама у складу са упутствима. Померите се надоле и прегледајте остатак одговора модела.

![Одговор модела](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.sr.png)

1. Пре него што сачувамо наш упит, хајде да научимо о подешавањима која се могу конфигурисати за овај упит. Изаберите икону **ellipsis (...)**.

![Подешавања упита](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.sr.png)

1. Овде ћемо видети три подешавања која се могу конфигурисати.

   - **Temperature**: Ниже температуре доводе до предвидљивих резултата, док више температуре омогућавају разноврсније или креативније одговоре.
   - **Record retrieval**: Наведите број записа који се преузимају за ваше изворе знања.
   - **Include links in the response**: Када је изабрано, одговор укључује цитате линкова за преузете записе.

Изаберите икону **X** да изађете из Подешавања.

![Конфигурисање подешавања](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.sr.png)

1. Изаберите **Save** да сачувате упит.

![Чување упита](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.sr.png)

1. Затим изаберите **Add to agent** да додате упит нашем декларативном агенту.

![Упутства за упит](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.sr.png)

1. Упит ће се сада појавити у одељку Tools 🙌🏻

![Додат упит](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.sr.png)

Следеће ћемо ажурирати наша упутства да позовемо упит и тестирати наш декларативни агент.

### 3.3 Ажурирање упутстава и тестирање вашег декларативног агента

1. Померите се до одељка **Details** и изаберите **Edit**. Ово ће омогућити да поља буду уређива.

![Избор Edit](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.sr.png)

1. Сада можемо ажурирати наша упутства да позовемо наш упит референцирањем имена упита. Обришите упутства, затим копирајте и налепите следеће.

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

Приметите како последња реченица упућује агента да користи питање које је корисник поставио као вредност за параметар уноса проблема. Агент ће користити питање као унос проблема за упит. Затим изаберите **Save**.

![Ажурирање упутстава за позивање упита](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.sr.png)

1. Сада смо спремни да тестирамо наша ажурирана упутства нашег декларативног агента. Изаберите **refresh icon** у панелу за тестирање.

![Избор иконе за освежавање](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.sr.png)

1. Затим унесите следећи упит испод и пошаљите.

```text
Можете ли ми помоћи, мој лаптоп има плави екран
```

![Извршење теста](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.sr.png)

1. Агент позива упит и одговара.

![Упутства за упит](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.sr.png)

Сада хајде да објавимо наш декларативни агент 😃

### 3.4 Објављивање вашег декларативног агента за Microsoft 365 Copilot и Microsoft Teams

1. Изаберите **Publish**.

![Објављивање агента](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.sr.png)

1. Појавиће се модални прозор који приказује Канале и детаље објављивања који се могу ажурирати.

   - Канали: Агент ће бити објављен за Microsoft 365 Copilot и Microsoft Teams.
   - Информације о апликацији агента: Ово је оно што ће бити приказано када корисник дода агента у Microsoft 365 Copilot или у Microsoft Teams. Ово су поља која се могу ажурирати по потреби.

![Детаљи апликације агента](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.sr.png)

1. На пример, можете ажурирати **Short description**, **Long description**, **Developer name** са вашим именом.

!!! tip
Ако не видите сва поља приказана у вашем прегледачу, пробајте да смањите зум, нпр. на 75%.

Изаберите **Publish**. Copilot Studio ће затим започети објављивање агента.

![Објављивање агента](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.sr.png)

1. Када објављивање буде завршено, видећемо [Опције доступности](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez) агента.

| Опција доступности | Опис |
| ---------- | ---------- |
| Share Link | Копирајте линк да га поделите са корисницима који ће отворити агента у Microsoft 365 Copilot |
| Show to my teammates and shared users | Омогућава вам да дате приступ другима да учествују у креирању агента, или безбедносним групама да им омогућите приступ за коришћење агента у Microsoft 365 Chat или Microsoft Teams. |
| Show to everyone in my org | Пошаљите администратору тенанта да дода у организациони каталог за све кориснике тенанта да додају агента. Агент ће се приказати под Built by your org у Microsoft 365 Copilot и у Microsoft Teams |
| Download as a .zip | Преузмите као zip фајл да га отпремите као прилагођену апликацију у Microsoft Teams |

![Опције доступности](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.sr.png)

1. Хајде да погледамо дељење агента. Изаберите **Show to my teammates and shared users**. Појавиће се панел где можете претражити кориснике са којима желите да поделите агента, било уношењем њиховог имена, емаил адресе или безбедносне групе. Можете прегледати ову листу у било ком тренутку да бисте уредили ко има приступ агенту.

Постоје и две опције за потврду:
- _Send an email invitation to new users_ - нови корисници ће добити позивницу путем емаила.
- _Visible Built with Power Platform_ - агент постаје доступан у одељку Built with Power Platform у продавници апликација Teams.
Za više detalja, pogledajte [Povezivanje i konfiguracija agenta za Teams i Microsoft 365](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez).

Izaberite **Cancel** ili ikonu **X** da izađete iz panela.

![Podeli agenta](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.sr.png)

1. Izaberite **Copy** i u novom tabu pretraživača nalepite link.

![Kopiraj link](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.sr.png)

1. Microsoft 365 Copilot će se učitati i pojaviće se modal sa detaljima aplikacije agenta. Obratite pažnju na ime programera, kratki opis i dugi opis. Ovo su detalji iz publikacije ažurirani u prethodnom koraku.

Izaberite **Add**.

![Opcije dostupnosti](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.sr.png)

1. Naš deklarativni agent će se sledeće učitati. Možemo videti početne predloge za izbor koji brzo omogućavaju korisnicima da dobiju trenutnu pomoć.

Izaberite jedan od početnih predloga. U mojim početnim predlozima, izabraću predlog **Pomoć pri instalaciji softvera** koji će automatski unapred popuniti polje poruke Copilot. Pošaljite pitanje Copilot-u.

![Izaberite početni predlog](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.sr.png)

1. Izaberite **Always allow** da biste dali svom deklarativnom agentu dozvolu da pozove predlog IT stručnjaka.

![Izaberite uvek dozvoli](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.sr.png)

1. Agent će zatim pozvati naš **IT Expert** predlog i videćemo odgovor modela vraćen kao poruku u našem deklarativnom agentu.

![Odgovor](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.sr.png)

Pomaknite se dole da biste videli sve detalje odgovora.

![Odgovor](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.sr.png)

1. Ali _kako znamo_ da je deklarativni agent pozvao predlog? 👀 Evo saveta!

!!! tip
Možete testirati i otklanjati greške agenata u Microsoft 365 Copilot-u omogućavanjem [načina rada za programere](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez).

Unesite sledeće u polje poruke Copilot-a i pošaljite.

    ```text
    -developer on
    ```

Pojaviće se poruka potvrde koja će vas obavestiti da je način rada za programere sada omogućen.

![Način rada za programere omogućen](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.sr.png)

1. Pošaljite sledeće pitanje da biste pozvali predlog.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Unesite pitanje](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.sr.png)

1. Ponovo ćemo videti odgovor modela iz našeg **IT Expert** predloga vraćen kao poruka. Pomaknite se na dno poruke i prikazaće se kartica sa informacijama o otklanjanju grešaka.

Proširite **Agent Debug Info** tako što ćete je izabrati.

![Informacije o otklanjanju grešaka agenta](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.sr.png)

1. Ovde ćete pronaći informacije o metapodacima agenta koji su se dogodili tokom izvršavanja.

![Proširene informacije o otklanjanju grešaka agenta](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.sr.png)

U našem slučaju, fokusiraćemo se na odeljak _Actions_.

- **Matched actions** ističe trenutni status funkcija pronađenih tokom pretrage aplikacije.
- **Selected actions** ističe trenutni status funkcija izabranih za izvršavanje na osnovu procesa donošenja odluka aplikacije.

![Proširene informacije o otklanjanju grešaka agenta](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.sr.png)

Ovde možemo videti da je orkestrator agenta odlučio da pozove predlog IT stručnjaka prema instrukcijama našeg deklarativnog agenta. Ovo je dodatno objašnjeno u odeljku _Executed Actions_ koji nam takođe govori da je uspešno pozvao predlog.

![Pregled informacija o otklanjanju grešaka agenta](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.sr.png)

1. Da biste isključili način rada za programere, unesite sledeće u polje poruke Copilot-a i pošaljite.

    ```text
    -developer off
    ```

Pojaviće se poruka potvrde koja će vas obavestiti da je način rada za programere onemogućen. Sjajno, sada znate kako da proverite da li je vaš deklarativni agent u Microsoft 365 Copilot-u pozvao vaš predlog 🌞

![Način rada za programere onemogućen](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.sr.png)

1. Sada ćemo testirati našeg agenta u Microsoft Teams-u. Idite na **Apps** koristeći meni sa leve strane i izaberite **Teams** u odeljku _Apps_.

![Izaberite Teams u Apps](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.sr.png)

1. Microsoft Teams će se zatim učitati u novom tabu pretraživača i biće vam predstavljeni uslovi korišćenja za Microsoft 365 Copilot, izaberite **Agree**.

![Izaberite Agree](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.sr.png)

1. Microsoft 365 Copilot će se zatim učitati po default-u, sa desne strane panela biće prikazani svi vaši dostupni agenti, uključujući deklarativnog agenta **Contoso Tech Support Pro**.

![Microsoft 365 Copilot u Teams-u](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.sr.png)

1. Izaberite **ikonu sa tri tačke (...)** na meniju sa leve strane. Ili potražite **Contoso Tech Support Pro** u polju za pretragu ili, ako vidite agenta, izaberite ga.

Takođe možete kliknuti desnim tasterom miša da biste **Pin** agenta za brzi pristup na meniju sa leve strane u Microsoft Teams-u.

![Izaberite i zakačite agenta](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.sr.png)

1. Zatim ćemo videti da se naš agent učitava. 1. Sledeće ćemo testirati našeg agenta. Unesite sledeći predlog i pošaljite.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Zakačite agenta](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.sr.png)

1. Model odgovora iz našeg predloga će se zatim prikazati.

![Odgovor u Teams-u](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.sr.png)

Za nekoliko minuta, naučili ste kako da objavite svog deklarativnog agenta i testirate ga u Microsoft 365 Copilot-u i u Microsoft Teams-u 😊

## ✅ Misija završena

Čestitamo! 👏🏻 Napravili ste deklarativnog agenta u Copilot Studio gde ste dodali predlog, dali instrukcije agentu da koristi predlog i kako da testirate + objavite svog agenta u Microsoft 365 Copilot-u i Microsoft Teams-u.

Vaš agent je sada u aktivnoj službi—spreman da pomaže, rešava probleme i služi internim korisnicima na zahtev.

Ovo je kraj **Lab 03 - Kreiranje deklarativnog agenta u Microsoft Copilot Studio za Microsoft 365 Copilot**, izaberite link ispod da pređete na sledeću lekciju.

⏭️ [Pređite na lekciju **Kreiranje novog rešenja**](../04-creating-a-solution/README.md)

Do sledećeg puta, budite oštri. Budućnost poslovanja u preduzećima prolazi kroz agente—a sada znate kako da ga napravite.

## 📚 Taktički resursi

🔗 [Kreiranje deklarativnog agenta u Microsoft Copilot Studio za Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Dodavanje predloga](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Deljenje agenata sa drugim korisnicima](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [Kreiranje predloga za vašeg agenta](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="Analitika" />

---

**Одрицање од одговорности**:  
Овај документ је преведен помоћу услуге за превођење вештачке интелигенције [Co-op Translator](https://github.com/Azure/co-op-translator). Иако се трудимо да обезбедимо тачност, молимо вас да имате у виду да аутоматски преводи могу садржати грешке или нетачности. Оригинални документ на његовом изворном језику треба сматрати ауторитативним извором. За критичне информације препоручује се професионални превод од стране људи. Не преузимамо одговорност за било каква погрешна тумачења или неспоразуме који могу настати услед коришћења овог превода.