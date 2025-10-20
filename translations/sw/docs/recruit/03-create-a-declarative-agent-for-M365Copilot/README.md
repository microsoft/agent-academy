<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-20T00:32:38+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "sw"
}
-->
# 🚨 Kazi 03: Kusambaza Wakala wa Maelezo kwa Microsoft 365 Copilot

## 🕵️‍♂️ JINA LA KODI: `OPERESHENI YA KUPANUA COPILOT`

> **⏱️ Muda wa Operesheni:** `~dakika 60`

🎥 **Tazama Mwongozo**

[![Picha ya video ya kuunda Wakala wa Maelezo](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.sw.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "Tazama mwongozo kwenye YouTube")

## 🎯 Maelezo ya Kazi

Karibu kwenye jukumu lako la kwanza la uwanja, Mtengenezaji Wakala. Umechaguliwa kubuni, kuandaa, na kusambaza Wakala wa Maelezo—mtaalamu maalum aliyejumuishwa moja kwa moja katika Microsoft 365 Copilot na Microsoft Teams.

Tofauti na mawakala wa jadi, mawakala wa maelezo hufanya kazi na misheni iliyofafanuliwa (maelekezo), zana (vidokezo/viunganishi), na ufikiaji wa kimkakati wa akili ya ndani (vyanzo vya maarifa kama SharePoint, Dataverse, na zaidi). Kazi yako ni kujenga wakala huyu kwa kutumia Microsoft Copilot Studio—kituo cha amri kisicho na programu ambapo ujuzi na madhumuni ya wakala wako huja hai.

Twende.

## 🔎 Malengo

Katika kazi hii, utajifunza:

1. Kuelewa mawakala wa maelezo ni nini na jinsi wanavyopanua Microsoft 365 Copilot kwa uwezo maalum
1. Kulinganisha Microsoft Copilot Studio na Copilot Studio agent builder kwa ajili ya kujenga mawakala wa maelezo
1. Kuunda wakala wa maelezo kwa kutumia lugha ya asili kupitia uzoefu wa uundaji wa mazungumzo
1. Kuongeza vidokezo vya AI kama zana za kuboresha maarifa maalum ya wakala wako na uwezo wa kutatua matatizo
1. Kuchapisha na kujaribu wakala wako wa maelezo katika Microsoft 365 Copilot na Microsoft Teams

## 🕵🏻‍♀️ Wakala wa maelezo kwa Microsoft 365 Copilot ni nini?

Mawakala wa maelezo ni matoleo yaliyobinafsishwa ya Microsoft 365 Copilot. Unaweza kubinafsisha Microsoft 365 Copilot ili kukidhi mahitaji maalum ya biashara kwa kuipatia maelekezo ya kusaidia mchakato fulani, kuipa maarifa ya biashara, na kutumia zana kwa upanuzi mpana. Hii inaruhusu mashirika kuunda uzoefu wa kibinafsi wenye utendaji bora kwa watumiaji wao.

## 🤔 Kwa nini nitumie Microsoft Copilot Studio kujenga wakala wa maelezo?

Kama mtengenezaji, kuna uwezekano tayari umechunguza [Copilot Studio agent builder](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez) katika Microsoft 365 Copilot na labda unajiuliza _kwa nini ujenge wakala wa maelezo katika Microsoft Copilot Studio?_

Microsoft Copilot Studio inatoa seti kamili ya zana na vipengele kwa mawakala wa maelezo ambavyo vinazidi mipaka ya Copilot Studio agent builder. Sawa na Copilot Studio agent builder, huhitaji kujua programu au maendeleo ya programu kujenga katika Microsoft Copilot Studio. Hebu tuchambue zaidi ili kuelewa tofauti kati ya Copilot Studio Agent Builder na Copilot Studio kwa ajili ya kujenga mawakala wa maelezo.

### Ulinganisho wa Vipengele

Jedwali lifuatalo linaonyesha tofauti wakati wa kujenga wakala wa maelezo katika Copilot Studio agent builder na Copilot Studio.

| Kipengele                   | Copilot Studio agent builder katika Microsoft 365 Copilot                          | Panua Microsoft 365 Copilot katika Copilot Studio                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **Maarifa**       | Wavuti, SharePoint, mazungumzo ya Microsoft Teams, barua pepe za Outlook, viunganishi vya Copilot     | Utafutaji wa wavuti (kupitia Bing), SharePoint, Dataverse, Dynamics 365, viunganishi vya Copilot  |
| **Zana**       | Mfasiri wa msimbo, jenereta ya picha     | Viunganishi 1400+ vya Power Platform, viunganishi maalum, vidokezo, matumizi ya kompyuta, REST API, Itifaki ya Muktadha wa Mfano   |
| **Vidokezo vya kuanza**         | Sanidi vidokezo kwa watumiaji kuanza haraka   | Sanidi vidokezo kwa watumiaji kuanza haraka  |
| **Njia ya usambazaji**           | Wakala anachapishwa tu kwa Microsoft 365 Copilot     | Wakala anachapishwa kwa Microsoft 365 Copilot na Microsoft Teams      |
| **Ruhusa za kushiriki**         | Watumiaji ni watazamaji tu    | Watumiaji wanaweza kuwa wahariri au watazamaji   |

Kuna uwezo zaidi unaotolewa kwa mawakala wa maelezo waliyojengwa katika Microsoft Copilot Studio ambao tutajifunza zaidi baadaye.

!!! tip
    - Ili kujifunza zaidi kuhusu Copilot Studio agent builder, tembelea [Copilot Developer Camp: Lab MAB1 - Jenga wakala wako wa kwanza](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/)
    - Kwa maendeleo ya kitaalamu ya kupanua wakala wa maelezo zaidi ya Copilot Studio agent builder kwa Microsoft 365 Copilot, tembelea [Copilot Developer Camp: Lab MAB1 - Jenga wakala wako wa kwanza](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/)

### Kupanua Microsoft 365 Copilot na mawakala wa maelezo waliyojengwa katika Copilot Studio

Hebu tuendelee na kile tulichojifunza kutoka kwenye jedwali la ulinganisho wa vipengele.

#### Ubinafsishaji

- **Maelekezo ya Kina**: Unaweza kutoa maelekezo ya kina na uwezo wa kufafanua madhumuni na tabia ya wakala kwa usahihi.
  - Hii inajumuisha kutumia zana kwa urahisi kwa kutumia lugha ya asili.

- **Ufikiaji wa Maarifa ya Biashara**: Inaruhusu ufikiaji wa maarifa ya biashara yanayoheshimu ruhusa za mtumiaji.
  - Ushirikiano wa SharePoint
  - Ushirikiano wa Dataverse
  - Ushirikiano wa Dynamics 365
  - Viunganishi vya Microsoft 365 Copilot vilivyowezeshwa na msimamizi wa shirika lako

   ![Ubinafsishaji](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.sw.png)

#### Uwezo wa Juu

- **Ushirikiano na Huduma za Nje**: Inakuruhusu kuchagua kutoka kwa viunganishi 1400+ vya Power Platform vinavyoshirikiana na huduma za nje, kutoa utendaji kazi wa hali ya juu zaidi.
  - Mifano ni pamoja na [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez), [ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez), [Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez), [SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) na zaidi
  - Vinginevyo, unaweza pia kutumia seva za Itifaki ya Muktadha wa Mfano na REST APIs moja kwa moja ndani ya wakala wako wa maelezo

- **Vidokezo vya AI**: Tumia kidokezo kuchambua na kubadilisha maandishi, nyaraka, picha na data kwa kutumia lugha ya asili na uamuzi wa AI.
  - Chagua mfano wa mazungumzo, chagua kati ya Msingi (Chaguo-msingi), Kawaida, Premium
  - Chaguo la kuleta mfano wako wa Azure AI Foundry ili kuimarisha kidokezo chako

- **Chaguo zaidi za usanidi wa usambazaji**: Chagua njia na fafanua ruhusa za watumiaji.
  - Chapisha kwa Microsoft Teams, kiolesura cha mtumiaji kinachofahamika kwa watumiaji wako kwa kupitishwa haraka
  - Ruhusa za kuhariri watumiaji zinaweza kushirikiwa ili kuzuia utegemezi wa mtu mmoja kwa mmiliki wa wakala

   ![Ubinafsishaji](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.sw.png)

Kwa muhtasari, mawakala wa maelezo katika Microsoft Copilot Studio huruhusu ubinafsishaji wa Microsoft 365 Copilot ili kufaa mahitaji ya biashara kupitia ushirikiano wa mifumo ya maarifa ya biashara, zana za kuunganishwa na huduma za nje au mifano ya AI GPT.

## 🧪 Maabara 03: Jenga wakala wa maelezo katika Microsoft Copilot Studio kwa Microsoft 365 Copilot

Tutajifunza jinsi ya kujenga wakala wa maelezo kwa matumizi ya "Biashara-kwa-Mfanyakazi" ambayo yatakuwa wakala wa **kitengo cha msaada wa IT**.

- [3.1 Unda wakala wa maelezo](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 Unda na ongeza kidokezo kwa wakala wako wa maelezo](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 Sasisha maelekezo na jaribu wakala wako wa maelezo](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 Chapisha wakala wako wa maelezo kwa Microsoft 365 Copilot na Microsoft Teams](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    Maabara hii itaelezea hatua za kuongeza Kidokezo kama zana. Masomo yafuatayo yatachunguza kuongeza vyanzo vya maarifa na kuongeza zana nyingine zinazopatikana. Kuifanya rahisi kwa kujifunza kwako 😊

### 👩🏻‍💼 Kuelewa Biashara-kwa-Mfanyakazi (B2E)

Biashara-kwa-Mfanyakazi (B2E) inahusu mwingiliano na huduma ambazo biashara hutoa moja kwa moja kwa wafanyakazi wake. Katika muktadha wa wakala, inamaanisha kutumia uwezo wa hali ya juu wa Copilot Studio kusaidia na kuboresha uzoefu wa kazi wa wafanyakazi ndani ya shirika.

### ✨ Muktadha wa matumizi

**Kama** mfanyakazi

**Ninataka** kupata msaada wa haraka na sahihi kutoka kwa wakala wa kitengo cha msaada wa IT kwa masuala kama matatizo ya kifaa, utatuzi wa mtandao, usanidi wa printer

**Ili niweze** kuwa na tija na kutatua masuala ya kiufundi bila kuchelewa

Tuanzishe!

### Mahitaji ya awali

- Watengenezaji lazima wawe na ruhusa za kuunda na kuwa na ufikiaji wa mazingira ya Copilot Studio.

!!! note "Kumbuka kuhusu leseni"
    Maabara hii itaelezea hatua za kuongeza Kidokezo kama zana. Masomo yafuatayo yatachunguza kuongeza vyanzo vya maarifa na kuongeza zana nyingine zinazopatikana. Kuifanya rahisi kwa kujifunza kwako 😊
  
    Huhitaji leseni ya mtumiaji wa Microsoft 365 Copilot kuchapisha wakala wako wa maelezo uliyojengwa katika Copilot Studio kwa Microsoft 365 Copilot. Hata hivyo **watumiaji** wa _wakala wa maelezo uliyochapishwa_ katika Microsoft 365 Copilot wanahitaji leseni ya mtumiaji wa Microsoft 365 Copilot.

### 3.1 Unda wakala wa maelezo

!!! warning "Maswali ya Copilot yanaweza kutofautiana kati ya vipindi"

    Uzoefu wa uundaji wa mazungumzo wa Copilot unaweza kutofautiana kila wakati ambapo maswali yaliyotolewa kwa mwongozo yanaweza kuwa tofauti kidogo na yale ya awali.

1. Tembelea [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/) na uingie kwa kutumia maelezo yako ya kuingia. Hakikisha umebadilisha mazingira unayotumia kwa maabara haya.

1. Chagua **Mawakala** kutoka kwenye menyu na chagua **Copilot kwa Microsoft 365**.

       ![Copilot kwa Microsoft 365](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.sw.png)

1. Kisha, tunakwenda kuunda wakala wa maelezo kwa kuchagua **+ Ongeza** wakala.

       ![Ongeza Wakala](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.sw.png)

1. Tutashuhudia uzoefu wa uundaji wa mazungumzo ukijitokeza ambapo tunaweza kuzungumza kwa lugha ya asili na Copilot kuelezea wakala wa maelezo tunayotaka kujenga, na kutumia maswali yaliyotolewa kwa mwongozo.

       Hebu tuingize maelezo ya kina yanayofafanua yafuatayo,  
       - kazi ya wakala  
       - aina ya maswali inaweza kushughulikia  
       - muundo wa majibu yake  
       - lengo la wakala  
    
       ```text
       Wewe ni mtaalamu wa IT mwenye ujuzi mkubwa na uzoefu katika mifumo mbalimbali ya kompyuta, mitandao, na usalama wa mtandao. Una uwezo wa kugundua na kutatua masuala ya kiufundi, kuelezea suluhisho kwa njia rahisi na inayoweza kueleweka kwa watumiaji wa viwango vyote vya kiufundi, na kutoa mwongozo juu ya mbinu bora. Unapaswa kuwa mfupi na wa kuelimisha, ukitumia maelekezo ya hatua kwa hatua na alama za risasi inapofaa. Lengo lako ni kusaidia mtumiaji kuelewa tatizo na jinsi ya kulitatua kwa ufanisi.
       ```
    
       ![Unda Kidokezo](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.sw.png)

1. Baada ya kuwasilisha kidokezo, sasisho linaloonekana litaonekana kwenye paneli ya upande wa kulia na maelezo na maelekezo ya wakala kama ilivyofafanuliwa na kidokezo. Kisha utaulizwa kuthibitisha jina la wakala wako na Copilot itakuwa imependekeza jina.

       Ama ingiza `ndiyo` kukubali jina lililopendekezwa au ingiza jina tofauti kama ifuatavyo,
    
       ```text
       Contoso Tech Support Pro
       ```
    
       ![Maelekezo yamesasishwa](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.sw.png)

    !!! warning "Kumbuka: Maswali ya Copilot yanaweza kutofautiana kati ya vipindi"

        Uzoefu wa uundaji wa mazungumzo wa Copilot unaweza kutofautiana kila wakati ambapo maswali yaliyotolewa kwa mwongozo yanaweza kuwa tofauti kidogo na yale ya awali.

1. Jina la wakala sasa limebadilishwa kama inavyoonekana kwenye paneli ya upande wa kulia. Sasa tunaulizwa kuboresha maelekezo ya wakala. Kile ambacho Copilot ilipendekeza kinaonekana kuwa kizuri kwa hivyo tutaiomba itumie mapendekezo yake. Tutaingiza yafuatayo,

      ```text
      Focus on the IT issues and scenarios you've identified
      ```

      ![Jina limesasishwa](../../../../../translated_images/3.1_06_NameUpdated.b6b8cc7c670b77c635d6b54b723e1a83f63ec288c0eab260fdbf88c7ec163003.sw.png)

1. Kisha tutaulizwa ikiwa tunataka kuongeza tovuti yoyote inayopatikana kwa umma au maarifa. Tutajibu `Hapana` kwa kuwa tutaongeza tu kidokezo kwa wakala wetu wa maelezo katika maabara hii. Maabara ya baadaye katika masomo yajayo yataangazia vyanzo vya maarifa.

      ![Hakuna tovuti au vyanzo vya maarifa vilivyoongezwa](../../../../../translated_images/3.1_07_KnowledgeSources.2001faa25aab922f38da82a8602e68b3ad7153941e87bab0949177e0b2ab0c08.sw.png)

1. Kisha tutaona jibu kutoka kwa Copilot kwamba sasa tumemaliza kusanidi wakala wetu kwa kutumia uzoefu wa uundaji wa mazungumzo wa Copilot. Hata hivyo, hebu tuiboreshe zaidi kwa kufafanua kwamba inapaswa kuwa mfupi na wa kuelimisha na alama za risasi, kutumia huruma katika mawasiliano, na kuomba maoni baada ya kutoa suluhisho.

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

      ![Sasisha maelekezo ya wakala](../../../../../translated_images/3.1_08_FurtherRefinements.993926c4e55cc5133413f4e10a61a6ed43351d070e791db0ee5547ea83f46473.sw.png)

1. Copilot inathibitisha maelekezo yamesasishwa. Bonyeza **Unda** ili kuanzisha wakala wa maelezo kwa Microsoft 365 Copilot.

      ![Unda wakala](../../../../../translated_images/3.1_09_CreateDeclarativeAgent.71442cd4e18105359e55016d92e54b74ac18977bb535c637a05bac0d3680a3c5.sw.png)

    !!! warning "Kumbuka: Maswali ya Copilot yanaweza kutofautiana kati ya vipindi"

        Uzoefu wa uundaji wa mazungumzo wa Copilot unaweza kutofautiana kila wakati ambapo maswali yaliyotolewa kwa mwongozo yanaweza kuwa tofauti kidogo na yale ya awali.

1. Mara wakala utakapokuwa umeanzishwa, utaona maelezo ya wakala ambayo yana maelezo na maelekezo yaliyofafanuliwa wakati wa uzoefu wa uundaji wa mazungumzo wa Copilot.
      ![Maelezo ya Wakala](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.sw.png)

      Shuka chini kwenye paneli na utaona uwezo wa kuongeza maarifa, kuwezesha utafutaji wa mtandao (kupitia Bing), maelekezo ya kuanza, na maelezo ya kuchapisha wakala wa maelezo kwa Microsoft 365 Copilot. Maelekezo ya kuanza pia yataonyeshwa kwenye paneli ya majaribio upande wa kulia. Watumiaji wanaweza kuchagua maelekezo haya ya kuanza ili kuanza kuwasiliana na wakala.

      ![Maelekezo yaliyopendekezwa](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.sw.png)

1. Katika sehemu ya Maelezo ya wakala, una uwezo wa kubadilisha ikoni ya wakala pia. Chagua **Hariri**.

      ![Hariri maelezo](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.sw.png)

      Hapa unaweza kubadilisha ikoni na rangi ya mandharinyuma. Chagua **Hifadhi** na kisha chagua **Hifadhi** tena ili kusasisha maelezo ya wakala.

      ![Badilisha ikoni](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.sw.png)

1. Hebu tufanye jaribio la haraka la wakala tuliyeunda. Chagua moja ya **Maelekezo ya Kuanza** kwenye paneli ya majaribio upande wa kulia.

      ![Jaribu maelekezo ya kuanza](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.sw.png)

1. Wakala wetu kisha atajibu. Angalia jinsi alivyofuata maelekezo kwa kutoa pointi za risasi katika sehemu zinazoweza kueleweka, na kutumia huruma katika majibu yake.

    Ukishuka chini ya ujumbe, angalia jinsi pia aliuliza maoni baada ya kutoa suluhisho kama ilivyoelekezwa.

      ![Majibu kutoka kwa majaribio](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.sw.png)

Kwa dakika chache tu umeongeza wakala wa maelezo kwa Microsoft 365 Copilot katika Copilot Studio 🙌🏻

Sasa tutajifunza jinsi ya kuongeza zana kwa wakala wetu, tutaunda maelekezo.

### 3.2 Unda na ongeza maelekezo kwa wakala wako wa maelezo

1. Shuka chini kwenye sehemu ya **Zana** na chagua **+ Ongeza zana**

      ![Ongeza zana](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.sw.png)

1. Modal ya Zana itaonekana na orodha ya viunganishi vya Power Platform itaonyeshwa. Ili kuongeza Maelekezo, chagua **+ Zana mpya**.

      ![Zana mpya](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.sw.png)

1. Orodha ya zana nyingine itaonyeshwa - Maelekezo, Kiunganishi cha kawaida, REST API na Itifaki ya Muktadha wa Mfano. Ikiwa shirika lako linakidhi [mahitaji ya Matumizi ya Kompyuta](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez), hii pia itaonekana kwenye orodha. Chagua **Maelekezo**.

      ![Chagua maelekezo](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.sw.png)

1. Ingiza jina kwa maelekezo. Hebu tuitwe maelekezo yetu `Mtaalam wa IT`.

      ![Ingiza jina](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.sw.png)

1. Chagua **ikoni ya mshale** karibu na **Mfano** ili kuona mifano tofauti ya mazungumzo unayoweza kuchagua. Kwa default, mfano wa **Basic GPT-4.1 mini** umechaguliwa na pia una chaguo la kuleta-mfano-wako mwenyewe kwa kutumia Azure AI Foundry Models. Tutabaki na mfano wa default uliyochaguliwa.

      ![Badilisha mfano](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.sw.png)

1. Kisha, tutatoa maelekezo kwa maelekezo yetu. Kuna njia 3 unazoweza kuchagua

      - Tumia Copilot kuunda maelekezo kwa ajili yako kulingana na maelezo yako ya kile unachotaka maelekezo yafanye.
      - Tumia template ya preset kutoka maktaba ya maelekezo kuunda maelekezo.
      - Ingiza maelekezo yako mwenyewe kwa mikono.

1. Hebu kwanza tujaribu kutumia Copilot kuunda maelekezo kulingana na maelezo yaliyoingizwa. Ingiza yafuatayo kwenye uwanja wa Copilot na uwasilishe.

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

      ![Anza na Copilot](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.sw.png)

1. Copilot kisha itaanza kuunda maelekezo kwa ajili yetu.

      ![Copilot inaunda maelekezo](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.sw.png)

1. Maelekezo ya rasimu yaliyozalishwa na Copilot kisha yataonekana.

      ![Maelekezo ya rasimu yaliyozalishwa na Copilot](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.sw.png)

1. Shuka chini kwenye maelekezo na utaona parameter ya pembejeo ya mtumiaji tayari imefafanuliwa na Copilot. Kisha una chaguo la
    - Kuhifadhi maelekezo ya rasimu yaliyozalishwa.
    - Kusasisha maelekezo ya rasimu kwa kutumia Copilot.
    - Kufuta maelekezo ya rasimu.

        Futa maelekezo ya rasimu kwa kuchagua ikoni ya **takataka** na tutajaribu maktaba ya maelekezo.

        ![Maelekezo ya maelekezo](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.sw.png)

1. Chagua kiungo cha **template ya maelekezo**.

    ![Chagua template ya maelekezo](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.sw.png)

1. Utaona orodha ya templates za maelekezo za kuchagua. Hizi ni kutoka [Maktaba ya Maelekezo ya Power Platform](https://aka.ms/power-prompts).

    ![Maktaba ya maelekezo](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.sw.png)

1. Tafuta maelekezo ya `Mtaalam wa IT` na uchague.

    ![Chagua maelekezo ya Mtaalam wa IT](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.sw.png)

1. Maelekezo kisha yataongezwa kama maelekezo na parameter ya pembejeo kama ilivyofafanuliwa na template ya maelekezo. Sawa na mbinu tuliyotumia wakati wa kutoa maelekezo kwa wakala wetu wakati wa uzoefu wa uundaji wa mazungumzo na Copilot, template hii ya maelekezo inaelezea
    - kazi,
    - aina ya maswali inaweza kushughulikia,
    - na muundo wa majibu yake na lengo la maelekezo.

    ![Maelekezo ya maelekezo](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.sw.png)

1. Futa maelekezo na tutajaribu kuingiza maelekezo kwa mikono. Tutatumia [maelekezo ya Mtaalam wa IT](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/) kutoka [Maktaba ya Maelekezo ya Power Platform](https://aka.ms/power-prompts). Nakili na ubandike maelekezo.

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

    ![Maelekezo ya maelekezo](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.sw.png)

1. Kisha, tunaweza kufafanua parameter za pembejeo za mtumiaji wa maelekezo yetu. Hizi zinaweza kuwa maandishi na picha, na data ya sampuli ya kujaribu nayo. Pia kuna uwezo wa kuimarisha maelekezo kwa maarifa kutoka meza za Dataverse. Kwa zoezi hili, tuna parameter moja tu ya pembejeo ya kufafanua ambayo ni pembejeo ya tatizo. Hii kwa sasa ni placeholder katika maelekezo yetu kama `[Tatizo]`. Sasa tutasanidi pembejeo hii kwa kuingiza tabia ya `/` au kuchagua **+Ongeza maudhui** na kisha chagua **Maandishi**.

    ![Pembejeo ya maandishi](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.sw.png)

1. Sasa tunaweza kuingiza jina kwa parameter yetu ya pembejeo na data ya sampuli.

    Ingiza yafuatayo kama jina

    ```text
    problem input
    ```

    Ingiza yafuatayo kama data ya sampuli

    ```text
    My laptop gets an error with a blue screen
    ```

    Kisha chagua **Funga**.

    ![Sanidi pembejeo ya tatizo](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.sw.png)

1. Parameter ya pembejeo ya tatizo sasa itaongezwa kwenye maelekezo na data ya sampuli iliyosanidiwa. Sasa tunaweza kujaribu maelekezo yetu!

    ![Pembejeo ya tatizo imeongezwa](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.sw.png)

1. Chagua **Jaribu** ili kujaribu maelekezo.

    ![Maelekezo ya jaribio](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.sw.png)

1. Majibu kisha yataonyeshwa. Angalia jinsi majibu yanavyotoa vichwa vya habari na pointi za risasi kulingana na maelekezo. Shuka chini na pitia sehemu nyingine ya majibu ya mfano.

    ![Majibu ya mfano](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.sw.png)

1. Kabla ya kuhifadhi maelekezo yetu, hebu tujifunze kuhusu mipangilio inayoweza kusanidiwa kwa maelekezo haya. Chagua ikoni ya **alama za ellipsis (...)**.

    ![Mipangilio ya maelekezo](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.sw.png)

1. Hapa tutaona mipangilio mitatu inayoweza kusanidiwa.

    - **Joto**: Joto la chini husababisha matokeo yanayotarajiwa, wakati joto la juu huruhusu majibu tofauti au ya ubunifu.
    - **Urejeshaji wa rekodi**: Eleza idadi ya rekodi zilizorejeshwa kwa vyanzo vyako vya maarifa.
    - **Jumuisha viungo katika majibu**: Wakati imechaguliwa, majibu yanajumuisha viungo vya nukuu kwa rekodi zilizorejeshwa.

    Chagua ikoni ya **X** ili kutoka kwenye Mipangilio.

    ![Sanidi mipangilio](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.sw.png)

1. Chagua **Hifadhi** ili kuhifadhi maelekezo.

    ![Hifadhi maelekezo](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.sw.png)

1. Kisha, chagua **Ongeza kwa wakala** ili kuongeza maelekezo kwa wakala wetu wa maelezo.

    ![Maelekezo ya maelekezo](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.sw.png)

1. Maelekezo sasa yataonekana chini ya Zana 🙌🏻

    ![Maelekezo yameongezwa](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.sw.png)

Sasa tutasasisha maelekezo yetu ili kuamsha maelekezo na kujaribu wakala wetu wa maelezo.

### 3.3 Sasisha maelekezo na jaribu wakala wako wa maelezo

1. Shuka juu kwenye sehemu ya **Maelezo** na chagua **Hariri**. Hii itafanya sehemu ziweze kuhaririwa.

      ![Chagua Hariri](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.sw.png)

1. Sasa tunaweza kusasisha maelekezo yetu ili kuamsha maelekezo yetu kwa kurejelea jina la maelekezo. Futa maelekezo, kisha nakili na ubandike yafuatayo.

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

      Angalia jinsi sentensi ya mwisho inavyoelekeza wakala kutumia swali lililoulizwa na mtumiaji kama thamani ya parameter ya pembejeo ya tatizo. Wakala atatumia swali kama pembejeo ya tatizo kwa maelekezo. Kisha, chagua **Hifadhi**.

      ![Sasisha maelekezo ili kuamsha maelekezo](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.sw.png)

1. Sasa tuko tayari kujaribu maelekezo yetu yaliyosasishwa ya wakala wetu wa maelezo. Chagua ikoni ya **refresh** kwenye paneli ya majaribio.

      ![Chagua ikoni ya refresh](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.sw.png)

1. Kisha, ingiza maelekezo yafuatayo hapa chini na uwasilishe.

       ```text
       Unaweza kunisaidia, kompyuta yangu inakutana na skrini ya bluu
       ```

      ![Fanya jaribio](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.sw.png)

1. Wakala anaamsha maelekezo na kujibu.

      ![Maelekezo ya maelekezo](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.sw.png)

Sasa hebu tuchapishe wakala wetu wa maelezo 😃

### 3.4 Chapisha wakala wako wa maelezo kwa Microsoft 365 Copilot na Microsoft Teams

1. Chagua **Chapisha**.

      ![Chapisha wakala](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.sw.png)

1. Modal itaonekana ambayo inaonyesha Mifumo na maelezo ya kuchapisha ambayo yanaweza kusasishwa.

   - Mifumo: Wakala atachapishwa kwa Microsoft 365 Copilot na Microsoft Teams.
   - Maelezo ya programu ya wakala: Hii ndiyo itakayoonyeshwa wakati mtumiaji anaongeza wakala kwa Microsoft 365 Copilot au katika Microsoft Teams. Hizi ni sehemu zinazoweza kusasishwa kama inavyohitajika.

      ![Maelezo ya programu ya wakala](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.sw.png)

1. Kwa mfano, unaweza kusasisha **Maelezo mafupi**, **Maelezo marefu**, **Jina la msanidi programu** na jina lako.

    !!! tip
        Ikiwa huoni sehemu zote zinazoonyeshwa kwenye kivinjari chako, jaribu kupunguza zoom mfano 75%

    Chagua **Chapisha**. Copilot Studio kisha itaanza kuchapisha wakala.

      ![Kuchapisha wakala](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.sw.png)

1. Wakati kuchapisha kumekamilika, tutaona [Chaguo za Upatikanaji](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez) za wakala.

      | Chaguo la Upatikanaji    | Maelezo |
      | ---------- | ---------- |
      | Shiriki Kiungo | Nakili kiungo ili kusambaza kwa watumiaji waliogawanyika kufungua wakala katika Microsoft 365 Copilot |
      | Onyesha kwa wenzangu na watumiaji waliogawanyika  | Inakuruhusu kutoa ufikiaji kwa wengine kushiriki katika kuunda wakala, au kwa vikundi vya usalama kuwapa ufikiaji wa kutumia wakala katika Microsoft 365 Chat au Microsoft Teams.  |
      | Onyesha kwa kila mtu katika shirika langu   | Tuma kwa msimamizi wa tenant ili kuongeza kwenye katalogi ya shirika kwa watumiaji wote wa tenant kuongeza wakala. Wakala utaonyeshwa chini ya Imetengenezwa na shirika lako katika Microsoft 365 Copilot na katika Microsoft Teams    |
      | Pakua kama .zip    | Pakua kama faili ya zip ili kupakia kama programu maalum katika Microsoft Teams    |

      ![Chaguo za Upatikanaji](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.sw.png)

1. Hebu tuangalie kushiriki wakala. Chagua **Onyesha kwa wenzangu na watumiaji waliogawanyika**. Paneli itaonekana ambapo unaweza kutafuta watumiaji unaotaka kushiriki wakala nao kwa kuingiza jina lao, barua pepe au kikundi cha usalama. Unaweza kupitia orodha hii wakati wowote kuhariri nani ana ufikiaji wa wakala.

      Pia kuna visanduku viwili vya tiki:
      - _Tuma mwaliko wa barua pepe kwa watumiaji wapya_ - watumiaji wapya watapokea mwaliko wa barua pepe.
      - _Inayoonekana Imetengenezwa na Power Platform_ - wakala unapatikana katika sehemu ya Imetengenezwa na Power Platform ya duka la programu la Teams.
Kwa maelezo zaidi, rejelea [Unganisha na usanidi wakala kwa Teams na Microsoft 365](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez).

Chagua **Cancel** au ikoni ya **X** ili kutoka kwenye paneli.

![Shiriki wakala](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.sw.png)

1. Chagua **Copy** na kwenye tab mpya ya kivinjari, bandika kiungo.

![Nakili kiungo](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.sw.png)

1. Microsoft 365 Copilot itapakia na dirisha la modal litaonekana likiwa na maelezo ya programu ya wakala. Angalia jinsi jina la msanidi programu, maelezo mafupi na maelezo marefu yanavyoonyeshwa. Haya yanatoka kwenye maelezo ya uchapishaji yaliyosasishwa katika hatua ya awali.

Chagua **Add**.

![Chaguo za upatikanaji](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.sw.png)

1. Wakala wetu wa maelezo utapakia baadaye. Tunaweza kuona maelezo ya kuanzia ya kuchagua ambayo yanawawezesha watumiaji kutafuta msaada wa haraka.

Chagua moja ya maelezo ya kuanzia. Katika maelezo yangu ya kuanzia, nitachagua maelezo ya **Msaada wa Usakinishaji wa Programu** ambayo yataweka ujumbe wa Copilot kiotomatiki. Tuma swali kwa Copilot.

![Chagua maelezo ya kuanzia](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.sw.png)

1. Chagua **Always allow** ili kumpa wakala wako wa maelezo ruhusa ya kuanzisha maelezo ya Mtaalam wa IT.

![Chagua always allow](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.sw.png)

1. Wakala kisha ataanzisha maelezo yetu ya **Mtaalam wa IT** na tutaona majibu ya modeli yakirudishwa kama ujumbe kwenye wakala wetu wa maelezo.

![Majibu](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.sw.png)

Shuka chini ili kuona maelezo kamili ya majibu.

![Majibu](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.sw.png)

1. Lakini _tutajuaje_ wakala wa maelezo aliwasha maelezo? 👀 Naam, hapa kuna dokezo!

!!! tip
Unaweza kujaribu na kurekebisha wakala katika Microsoft 365 Copilot kwa kuwezesha [hali ya msanidi programu](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez).

Ingiza yafuatayo kwenye uwanja wa ujumbe wa Copilot na tuma.

    ```text
    -developer on
    ```

Ujumbe wa uthibitisho utaonekana kukujulisha kuwa hali ya msanidi programu sasa imewezeshwa.

![Hali ya msanidi programu imewezeshwa](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.sw.png)

1. Tuma swali lifuatalo ili kuanzisha maelezo.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Ingiza swali](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.sw.png)

1. Tutaona majibu ya modeli kutoka kwa maelezo yetu ya **Mtaalam wa IT** tena yakirudishwa kama ujumbe. Shuka chini hadi mwisho wa ujumbe na kadi yenye maelezo ya kurekebisha itaonyeshwa.

Panua **Agent Debug Info** kwa kuichagua.

![Maelezo ya kurekebisha wakala](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.sw.png)

1. Hapa utapata maelezo kuhusu metadata ya wakala yaliyotokea wakati wa utekelezaji.

![Maelezo ya kurekebisha wakala yamepanuliwa](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.sw.png)

Katika matumizi yetu, tutazingatia sehemu ya _Actions_

- **Matched actions** inaonyesha hali ya sasa ya kazi zilizopatikana wakati wa utafutaji wa programu.
- **Selected actions** inaonyesha hali ya sasa ya kazi zilizochaguliwa kuendeshwa kulingana na mchakato wa maamuzi wa programu.

![Maelezo ya kurekebisha wakala yamepanuliwa](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.sw.png)

Hivyo hapa tunaweza kuona mratibu wa wakala alichagua kuanzisha maelezo ya Mtaalam wa IT kulingana na maelekezo ya wakala wetu wa maelezo. Hii imeelezwa zaidi katika sehemu ya _Executed Actions_ ambayo pia inatuambia kuwa ilifanikiwa kuanzisha maelezo.

![Kagua maelezo ya kurekebisha wakala](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.sw.png)

1. Ili kuzima hali ya msanidi programu, ingiza yafuatayo kwenye uwanja wa ujumbe wa Copilot na tuma.

    ```text
    -developer off
    ```

Ujumbe wa uthibitisho utaonekana kukujulisha kuwa hali ya msanidi programu imezimwa. Safi, sasa unajua jinsi ya kuthibitisha ikiwa wakala wako wa maelezo katika Microsoft 365 Copilot umeanzisha maelezo yako 🌞

![Hali ya msanidi programu imezimwa](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.sw.png)

1. Sasa tutajaribu wakala wetu katika Microsoft Teams. Nenda kwenye **Apps** ukitumia menyu ya upande wa kushoto na uchague **Teams** chini ya sehemu ya _Apps_.

![Chagua Teams katika Apps](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.sw.png)

1. Microsoft Teams kisha itapakia kwenye tab mpya ya kivinjari na tutawasilishwa na masharti ya matumizi ya Microsoft 365 Copilot, chagua **Agree**.

![Chagua Agree](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.sw.png)

1. Microsoft 365 Copilot kisha itapakia kwa chaguo-msingi, na paneli ya upande wa kulia ikiorodhesha wakala wako wote waliopo, ikiwa ni pamoja na wakala wa maelezo wa **Contoso Tech Support Pro**.

![Microsoft 365 Copilot katika Teams](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.sw.png)

1. Chagua **ikoni ya ellipsis (...)** kwenye menyu ya upande wa kushoto. Ama tafuta **Contoso Tech Support Pro** kwenye uwanja wa utafutaji au ikiwa unaona wakala, chagua.

Unaweza pia kubofya kulia kwenye panya yako ili **Pin** wakala kwa ufikiaji wa haraka kwenye menyu ya upande wa kushoto katika Microsoft Teams.

![Chagua na pin wakala](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.sw.png)

1. Kisha tutaona wakala wetu ukipakia. 1. Hebu sasa tujaribu wakala wetu. Ingiza maelezo yafuatayo na tuma.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Pin wakala](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.sw.png)

1. Majibu ya modeli kutoka kwa maelezo yetu kisha yataonyeshwa.

![Majibu katika Teams](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.sw.png)

Kwa dakika chache, umejifunza jinsi ya kuchapisha wakala wako wa maelezo na kuujaribu katika Microsoft 365 Copilot na Microsoft Teams 😊

## ✅ Kazi Imekamilika

Hongera! 👏🏻 Umeunda wakala wa maelezo katika Copilot Studio ambapo umeongeza Prompt, ukaelekeza wakala kutumia Prompt na jinsi ya kujaribu + kuchapisha wakala wako kwa Microsoft 365 Copilot na Microsoft Teams.

Wakala wako sasa yuko tayari—tayari kusaidia, kutatua matatizo, na kuhudumia watumiaji wa ndani papo hapo.

Hii ni mwisho wa **Lab 03 - Unda wakala wa maelezo katika Microsoft Copilot Studio kwa Microsoft 365 Copilot**, chagua kiungo hapa chini ili kuendelea na somo linalofuata.

⏭️ [Endelea na somo la **Kuunda Suluhisho Mpya**](../04-creating-a-solution/README.md)

Mpaka wakati mwingine, endelea kuwa makini. Hatima ya kazi za biashara inategemea mawakala—na sasa unajua jinsi ya kuunda mmoja.

## 📚 Rasilimali za Kimbinu

🔗 [Unda wakala wa maelezo katika Microsoft Copilot Studio kwa Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Ongeza prompts](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Shiriki mawakala na watumiaji wengine](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [Unda prompts kwa wakala wako](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="Takwimu za uchambuzi" />

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati asilia katika lugha yake ya asili inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.