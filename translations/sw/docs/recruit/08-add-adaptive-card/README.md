<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "dcbcd9396b076da0a0f5d389e9ec1b12",
  "translation_date": "2025-10-20T00:48:07+00:00",
  "source_file": "docs/recruit/08-add-adaptive-card/README.md",
  "language_code": "sw"
}
-->
# 🚨 Misheni 08: Boresha mwingiliano wa watumiaji katika Mada kwa kutumia Kadi za Adaptive

## 🕵️‍♂️ JINA LA KODI: `OPERATION INTERFACE UPLIFT`

> **⏱️ Muda wa Operesheni:** `~Dakika 45`

🎥 **Tazama Mwongozo**

[![Picha ya video ya kadi za Adaptive](../../../../../translated_images/video-thumbnail.3fb3463f411ef1f440a0fd0e67d217a67bcca1d39a98b2c2bff4e13cbc1b6f4e.sw.jpg)](https://www.youtube.com/watch?v=RhIlzYHPCXo "Tazama mwongozo kwenye YouTube")

## 🎯 Maelezo ya Misheni

Wakala, misheni yenu ni kuingilia uzoefu wa mtumiaji wa kawaida na kuubadilisha kuwa mwingiliano wa hali ya juu, wa kuvutia, na wa vitendo kwa kutumia Kadi za Adaptive. Mtatumia payload za JSON na fomula za Power Fx kubadilisha mazungumzo ya Copilot Studio kutoka maswali na majibu ya kawaida kuwa mwingiliano kamili. Lengo lenu ni kukusanya maoni ya watumiaji, kuwasilisha data kwa uzuri, na kuelekeza mazungumzo kwa usahihi na mtindo. Mkishindwa kubadilika, watumiaji wenu wanaweza kuhamia kwenye interface zisizo na akili.

## 🔎 Malengo

Katika misheni hii, mtajifunza:

1. Kuelewa Kadi za Adaptive ni nini na jinsi zinavyoboresha mwingiliano wa watumiaji katika Copilot Studio
1. Kujifunza kujenga kadi za mwingiliano kwa kutumia JSON na fomula za Power Fx kwa maudhui ya hali ya juu
1. Kuchunguza Muundaji wa Kadi za Adaptive na vipengele vyake muhimu kwa ajili ya uundaji wa kadi za kuona
1. Kuunda fomu za hali ya juu, za mwingiliano na uzoefu wa kukusanya data ndani ya mada za wakala
1. Kutekeleza mbinu bora za kubuni kadi za adaptive zinazojibadilisha na zinazofaa kwa watumiaji

## 🤔 Kadi ya Adaptive ni nini?

**Kadi ya Adaptive** ni njia ya kuunda vipengele vya UI vya mwingiliano, vyenye mvuto wa kuona ambavyo vinaweza kuingizwa kwenye programu kama Microsoft Teams, Microsoft Outlook au wakala. Ni kitu kilichopangwa cha JSON kinachofafanua mpangilio na maudhui ya kadi:

- Vipengele vinavyoonekana kwenye kadi - maandishi, picha, vifungo
- Jinsi vipengele hivyo vinavyopangwa
- Hatua ambazo watumiaji wanaweza kuchukua kama vile kuwasilisha fomu au kufungua kiungo

    ![Kadi ya Adaptive](../../../../../translated_images/8.0_01_AdaptiveCard.3ae99605ab7ef4b35ee0d00649ba0fc1a8166620183f82f20258c32fbef2bb3e.sw.png)

### Kwa nini Kadi za Adaptive ni muhimu katika Copilot Studio

Fikiria unajenga wakala ambaye anauliza watumiaji majina yao, barua pepe, au maoni yao. Ikiwa utatumia maandishi ya kawaida tu, mazungumzo yanaweza kuhisi kuwa ya kuchosha au magumu kufuatilia. Hapo ndipo Kadi za Adaptive zinapokuja!

1. **Hufanya mazungumzo kuwa ya mwingiliano** - badala ya kutuma maandishi kama ujumbe kwa mtumiaji, unaweza kuonyesha vifungo, fomu, picha na zaidi.
    - Mfano: kadi inaweza kumwomba mtumiaji kujaza jina lake na barua pepe katika fomu safi.

1. **Huonekana vizuri kila mahali** - Kadi za Adaptive zinajibadilisha moja kwa moja na mtindo wa programu ziko ndani, kama vile mazungumzo ya Microsoft 365 Copilot au Microsoft Teams. Huna haja ya kuwa na wasiwasi kuhusu hali ya giza, fonti, au mpangilio - inajibadilisha.

1. **Rahisi kujenga kwa JSON** - unafafanua kadi kwa kutumia msimbo wa JSON (fikiria _mapishi_ ya UI). Copilot Studio hukusaidia kuona kadi yako kabla ya kuiongeza kwenye mada.

1. **Kukusanya na kutumia data** - unaweza kutumia kadi kuuliza maswali, kukusanya majibu, na kutumia data hiyo katika mtiririko wa mazungumzo.
    - Mfano: Uliza namba ya simu ya mtumiaji, kisha onyesha kadi ya uthibitisho na namba yao ya simu.

1. **Boresha uzoefu wa mtumiaji** - kadi hufanya wakala wako kuhisi kuwa wa mwingiliano zaidi. Ni interface safi, inayoweza kubofya, na inayofaa kwa mtumiaji.

## 🐱 Je, _JSON_ ni mtu?

Inatamkwa kama "Jason," si mtu 😅

JSON, inayojulikana kama _JavaScript Object Notation_ ni muundo mwepesi unaotumika kupanga data. Ni rahisi kusoma na kuandika, na inaonekana kama mfululizo wa jozi za funguo-thamani ndani ya mabano ya curly {}.

Hii ni mojawapo ya chaguo za kutumia wakati wa kuongeza kadi ya adaptive kwenye mada yako.

![Mali za nodi ya kadi ya Adaptive](../../../../../translated_images/8.0_02_AdaptiveCardPropertiesPane.cf6bde2350f83ac84bf3fe5c077b2b01ee707af19a8d2f417b1ecc658318fe45.sw.png)

## 👀 Ninaona chaguo lingine la kujenga kadi ya adaptive kwa kutumia _fomula_

Kumbuka jinsi tulivyojifunza kuhusu Power Fx katika [Misheni 07 - Kutumia Power Fx katika nodi zako](../07-add-new-topic-with-trigger/README.md#what-power-fx-can-do-in-topics) Hilo hilo linaweza kutumika katika Kadi za Adaptive ndani ya Copilot Studio.

Kama muhtasari,

!!! note
    Power Fx ni lugha ya programu ya kiwango cha chini inayotumika kuongeza mantiki na tabia ya hali ya juu kwa wakala wako. Ni lugha ile ile inayotumika katika Microsoft Power Apps, na imeundwa kuwa rahisi na kama fomula za Excel, ikifanya iwe rahisi kwa watengenezaji na wasio watengenezaji.

### Jinsi Power Fx inavyofanya kazi katika Kadi za Adaptive

Unapobuni Kadi ya Adaptive katika Copilot Studio, unaweza kutumia fomula za Power Fx ili:

- Kuingiza maadili kwa njia ya hali ya juu kama majina ya watumiaji, tarehe au hali.
- Kuunda maandishi au namba kama vile kuonyesha sarafu au kuzungusha namba.
- Kuonyesha au kuficha vipengele kulingana na masharti.
- Kubinafsisha majibu kulingana na maoni ya mtumiaji, vigezo, matokeo kutoka kwa nodi za mazungumzo.

Kwa mfano,

"`Hello`" & `System.User.DisplayName`

Fomula hii inaunganisha neno "Hello" na jina la mtumiaji kwa njia ya hali ya juu.

### Kwa nini ni muhimu

1. **Ubinafsishaji**

    Unaweza kubadilisha ujumbe kwa kila mtumiaji, na kufanya mwingiliano uhisi wa asili na muhimu.

1. **Maudhui ya hali ya juu**

    Kadi zinaweza kuonyesha data halisi kutoka kwa vigezo na matokeo kutoka kwa nodi za mazungumzo.

1. **Mantiki ya akili**

    Unaweza kudhibiti kile watumiaji wanachoona au kuingiliana nacho kulingana na masharti, kuboresha matumizi na kupunguza makosa.

1. **Rafiki kwa kiwango cha chini cha msimbo**

    Power Fx ni lugha ya programu ya kiwango cha chini. Kama ilivyotajwa awali, ni rahisi kusoma, ya angavu na sawa na fomula za Excel.

## 👷🏻‍♀️ Kujenga na Muundaji wa Kadi za Adaptive

**Muundaji wa Kadi za Adaptive** ni zana ya kuona inayokuruhusu kujenga kadi za ujumbe za mwingiliano kwa kutumia vipengele vya kuburuta na kuachia kama maandishi, picha, vifungo, na maingizo. Kusudi lake ni kukusaidia kuunda ujumbe wa hali ya juu, wa mwingiliano bila kuandika msimbo mgumu, na kufanya iwe rahisi kubuni interface zinazofaa kwa watumiaji.

Zana ya muundaji hukusaidia kujenga kadi kwa njia ya kuona, lakini nyuma ya pazia, inazalisha kitu cha JSON kwa ajili yako. Unaweza pia kubadilisha hadi _fomula_ ambayo inaruhusu maonyesho ya Power Fx kutumika katika kadi kuonyesha data kutoka sehemu nyingine.

## 🎨 Kuelewa Muundaji wa Kadi za Adaptive

![Muundaji wa Kadi za Adaptive](../../../../../translated_images/8.0_03_AdaptiveCardPropertiesPane.e97dad10daf78959c15acb61ca17f0178f2716a75bb85c491c80866720cb1e99.sw.png)

### A) Vipengele vya Kadi

Hivi ni vipengele vya msingi vya kadi yako ya adaptive. Unaweza kuburuta na kuachia vipengele kama vile:

- **TextBlock** kuonyesha maandishi.
- **Image** kuonyesha picha.
- **FactSet** kwa jozi za funguo-thamani.
- **Sehemu za maingizo** kuonyesha masanduku ya maandishi, chaguo za tarehe, swichi.
- **Hatua** kuonyesha vifungo kama _Submit_, _Open URL_, au _Show Card_.

Kila kipengele kina kusudi lake na kinaweza kubadilishwa au kusanidiwa.

### B) Mtazamaji wa Kadi

Hii ni eneo la **Muonekano wa awali** ambapo unaona jinsi kadi yako itakavyoonekana kwa wakati halisi. Unapoongeza au kuhariri vipengele, mtazamaji husasisha mara moja kuonyesha mabadiliko. Hii inakuwezesha kufanya mabadiliko ya mara kwa mara na kuona matokeo ya muundo kwa wakati mmoja.

### C) Muundo wa Kadi

Hii inaonyesha **hierakia na mpangilio** wa kadi yako. Kwa mfano:

- Kadi inaweza kuanza na **TextBlock** kwa kichwa.
- Kisha **ColumnSet** na picha upande mmoja na maandishi upande mwingine.
- Ikifuatiwa na **FactSet** na baadhi ya vifungo vya **Hatua**.

Inakusaidia kuelewa jinsi vipengele vinavyopangwa na kuandaliwa.

### D) Mali za Kipengele

Unapobofya kipengele chochote kwenye kadi, paneli hii hukuruhusu **kubadilisha mipangilio yake**:

- Badilisha ukubwa wa maandishi, uzito, au rangi.
- Weka URL za picha au maandishi mbadala.
- Sanidi chaguo za maingizo kama maandishi ya nafasi au maadili ya msingi.

Hapa ndipo unapoboresha kila kipengele.

### E) Mhariri wa Payload ya Kadi

Hii ni **msimbo wa JSON mbichi** nyuma ya kadi yako. Watumiaji wa hali ya juu wanaweza kuhariri hii moja kwa moja ili:

- Kutumia vipengele vya kiolezo.
- Nakili/bandika ufafanuzi wa kadi.

Hata kama wewe ni mgeni kwa muundaji wa Kadi za Adaptive, ni muhimu kuona jinsi muundo wa kuona unavyotafsiriwa kuwa msimbo.

!!! tip "Kidokezo - Angalia sampuli za Kadi za Adaptive"

    1. Tembelea [https://adaptivecards.microsoft.com/designer](https://adaptivecards.microsoft.com/designer).
    2. Chagua **Kadi mpya** ili kuona orodha ya sampuli unazoweza kuchagua na kurekebisha.
    3. Kumbuka kuwa muundaji huyu ni wa nje (unaotegemea wavuti). Unapojenga kadi yako katika Muundaji wa Kadi za Adaptive wa wavuti, nakili JSON kutoka kwa Mhariri wa Payload ya Kadi.
    4. Bandika JSON kwenye kadi yako ya adaptive katika wakala wako ndani ya Copilot Studio.

    ![Sampuli za Muundaji wa Kadi za Adaptive](../../../../../translated_images/8.0_04_AdaptiveCardDesignerSamples.c003b545de5ccfd72ca0c5fa4607addb19d265e8f7105393c652249182754ba9.sw.png)

## 🌵 Matumizi ya kawaida

Yafuatayo ni matumizi ya kawaida ya Kadi za Adaptive katika Copilot Studio zinapotumika katika nodi za **Tuma ujumbe** au **Uliza swali**.

1. **Fomu na ukusanyaji wa data**

    Tumia kadi za adaptive kukusanya maingizo yaliyopangwa kutoka kwa watumiaji, kama vile:

    - Maombi ya likizo
    - Fomu za maoni
    - Taarifa za mawasiliano
    - Ratiba ya miadi

1. **Kuonyesha taarifa za hali ya juu**

    Onyesha watumiaji data ya kibinafsi au ya wakati halisi kwa muundo safi, unaosomeka kutoka vyanzo vya biashara kama ServiceNow, SAP, Dynamics 365, SharePoint nk.

    - Muhtasari wa oda
    - Salio la akaunti
    - Hali ya tiketi au kesi
    - Matukio au tarehe za mwisho zijazo

1. **Chaguo za mwingiliano**

    Waruhusu watumiaji kufanya uchaguzi moja kwa moja katika mazungumzo:

    - Chagua kutoka kwa orodha ya chaguo, kwa mfano, kategoria za bidhaa, mada za msaada.
    - Thibitisha au ghairi hatua.
    - Pima huduma au uzoefu.

1. **Kuchochea hatua**

    Jumuisha vifungo vinavyosababisha hatua zaidi katika mazungumzo ndani au nje.

    - "Wasilisha ombi"
    - "Tazama maelezo"

## ⭐ Mbinu bora

Hizi ni mbinu bora za kuunda Kadi za Adaptive kwa mawakala katika Copilot Studio.

1. **Iwe rahisi na yenye lengo**

    - Buni kadi zenye kusudi wazi, usizidishe na vipengele vingi.
    - Tumia maandishi mafupi na mpangilio wa angavu kuongoza watumiaji kupitia mwingiliano.

1. **Kuwa makini na maingizo**

    - Jumuisha tu vipengele vya maingizo vinavyohitajika kama maandishi, chaguo za tarehe, ili kuepuka kuwachosha watumiaji.
    - Tumia lebo kufanya maingizo yawe rahisi kueleweka.

1. **Panga kwa usomekaji**

    - Tumia **TextBlocks** kwa vichwa na maelekezo.
    - Panga vipengele vinavyohusiana kwa kutumia **Containers** au **ColumnSets** ili kuboresha mtiririko wa kuona.

1. **Fanya vipengele vya Hatua viwe wazi**

    - Tumia **Action.Submit** na au **Action.OpenUrl** na majina ya vifungo wazi kama "Wasilisha Ombi" au "Tazama Maelezo"
    - Epuka lebo zisizoeleweka kama "Bonyeza hapa"

1. **Buni kwa kubadilika**

    - Fikiria kadi inaweza kuonekana kwenye ukubwa tofauti wa skrini.
    - Epuka upana uliowekwa na tumia mpangilio rahisi kama **ColumnSets** kwa kujibadilisha.

1. **Tumia maudhui ya hali ya juu inapowezekana**

    - Funga vipengele vya kadi kwa vigezo au matokeo kutoka kwa nodi kwa kutumia Power Fx kubinafsisha uzoefu wa mtumiaji.
    - Kwa mfano, onyesha jina la mtumiaji au hali ya sasa kwa njia ya hali ya juu.

## 🧪 Maabara 08 - Ongeza kadi za adaptive na boresha uwezo wa mada

Sasa tunakwenda kujifunza jinsi ya kuboresha mada yetu kwa kadi za adaptive na kutumia utendaji wa hali ya juu wa mada na nodi.

- [8.1 Unda mada mpya na kadi ya adaptive kwa mtumiaji kuwasilisha ombi lake](../../../../../docs/recruit/08-add-adaptive-card)
- [8.2 Sasisha maelekezo ya wakala ili kuanzisha mada ya Ombi la kifaa](../../../../../docs/recruit/08-add-adaptive-card)

### ✨ Matumizi

**Kama** mfanyakazi

**Nataka** kuomba kifaa

**Ili** niweze kuomba kifaa kutoka kwenye orodha ya vifaa vilivyopo

Tuanzishe!

### Mahitaji ya awali

1. **Orodha ya SharePoint**

    Tutatumia orodha ya **Vifaa** ya SharePoint kutoka [Somo 00 - Usanidi wa Kozi - Hatua ya 3: Unda tovuti mpya ya SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Ikiwa hujaweka orodha ya **Vifaa** ya SharePoint, tafadhali rudi kwenye [Somo 00 - Usanidi wa Kozi - Hatua ya 3: Unda tovuti mpya ya SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. **Contoso Helpdesk Copilot**

    Tutatumia wakala yule yule aliyeundwa hapo awali katika [Somo 06 - Unda wakala maalum kwa kutumia lugha ya asili na Copilot na kuimarisha kwa data yako](../06-create-agent-from-conversation/README.md).

### 8.1 Unda mada mpya na kadi ya adaptive kwa mtumiaji kuwasilisha ombi lake

Tutaunda mada mpya ambayo itashughulikia ombi la kifaa la mtumiaji. Mada hii mpya itakuwa na nodi ya **Uliza kwa kadi ya adaptive** ili kuwezesha mwingiliano wa mtumiaji na wakala.

Tuanzishe!

1. Chagua kichupo cha **Mada**, kisha chagua **+ Ongeza mada kutoka mwanzo**.

    ![Chagua kichupo cha Mada](../../../../../translated_images/8.1_01_NewTopic.f16b94d274f8a7f561f257d9e15483fa56f6fc451a194f26bed03fceb24beb14.sw.png)

1. Peana jina kwa mada kama ifuatavyo,

    ```text
    Request device
    ```

    Weka maelezo yafuatayo kama maelezo ya kichocheo.

    ```text
    This topic helps users request a device when they answer yes to the question that asks the user if they would like to request one of these devices.
    ```

    ![Jina la Mada na Maelezo ya Kichocheo](../../../../../translated_images/8.1_02_TopicNameAndTriggerDescription.3cdbb3ea9a3a480b8cdb23faa47d3a607273c79cbd406ae82dbb100603233879.sw.png)
1. Kisha, ongeza nodi ya **Uliza kwa kadi ya kubadilika**. Nodi hii itaonyesha kadi ya maingiliano kwa mtumiaji kuchagua kifaa wanachotaka kuomba.

    ![Chagua nodi ya Uliza kwa kadi ya kubadilika](../../../../../translated_images/8.1_03_AddAskWithAdaptiveCard.4b8e29223fbce16e4440152c0e7f6827fb88097e2a819a489878cf6254f215a4.sw.png)

1. Chagua nodi na paneli ya **Mali za Nodi ya Kadi ya Kubadilika** itaonekana. Sasa tutaedit JSON. Chagua **Hariri kadi ya kubadilika**. Chagua **Hariri kadi ya kubadilika**.

    ![Hariri kadi ya kubadilika](../../../../../translated_images/8.1_04_EditAdaptiveCard.40d31318a2300d467838b0126d72d336a9abb58ba5fd6f62f51170dfb9760992.sw.png)

1. Hii ni **Mbunifu wa Kadi ya Kubadilika** ambapo unaweza kubuni kadi yako na kuona muundo wa kadi papo hapo.

    Jaribu kuburuta na kuachia vipengele vya kadi vya **TextBlock** na **FactSet** kwenye eneo la kuandika, eneo la mtazamaji wa kadi. Angalia jinsi muundo wa kadi na mhariri wa mzigo wa kadi unavyosasishwa wakati vipengele viwili vya kadi vinaongezwa. Unaweza kusasisha moja kwa moja mhariri wa mzigo wa kadi na paneli ya mali za kipengele.

    ![Buruta na uachie vipengele vya kadi](../../../../../translated_images/8.1_05_DragAndDropCardElements.a9fea2dcf7ec6d235ef7b4f717bdc4fee6536a04a3bdb26fb458678fba79acb9.sw.png)

1. Chagua **Onyesho la awali** ili kuona kadi katika upana tofauti.

    ![Chagua onyesho la awali](../../../../../translated_images/8.1_06_PreviewAdaptiveCard.647091529c1fd44ed5eff21738c780bc3bf07e1cbe6434695d206a4aca9b4b25.sw.png)

1. Onyesho la awali litaonyesha ambapo utaona matokeo tofauti ya kadi kulingana na upana.

    ![Onyesho la awali la kadi kwa upana tofauti](../../../../../translated_images/8.1_07_PreviewCardWidths.bf9059b79ef07c1c108308e904bbfaa6742db99fcb30cb18004086f3c7fed086.sw.png)

1. Toka kwenye **Onyesho la awali** kwa kuchagua **ikoni ya x** na chagua **Rudisha nyuma** kwenye mbunifu ili kuondoa vipengele viwili vya kadi vilivyoongezwa awali.

    ![Rudisha nyuma](../../../../../translated_images/8.1_08_Undo.ddcce9dbb87d876e47a932c73229d4fdc98e182d602af256275e2456cd9054eb.sw.png)

1. Bofya kwenye **Mhariri wa mzigo wa kadi** na chagua mistari yote kwa kutumia njia ya mkato ya kibodi ya Windows _Ctrl + A_ au njia ya mkato ya Mac _Command + A_, kisha futa mistari. **Bandika** JSON kutoka kwa [Faili ya .JSON ya Maombi ya vifaa](../../../../../docs/recruit/08-add-adaptive-card/assets/8.1_RequestDevice.json).

    ![Futa mhariri wa mzigo wa kadi](../../../../../translated_images/8.1_09_SelectAll.6aaf936d81c3356870679a7ae5b6fd1298812cc492ca3250fa01179164483e1e.sw.png)

1. Angalia jinsi **Onyesho la awali la Kadi** sasa linajumuisha vipengele vinavyoonyesha maandishi fulani na orodha ya vifaa vilivyopo.

    JSON hii kwa sasa ni kielelezo na onyesho la awali la kile tutakachotumia kama msingi wa kadi yetu lakini kwa mfumo wa fomula badala ya JSON kwa kuwa tutarejelea **kigezo cha kimataifa**, `Global.VarDevices.value`, ambacho huhifadhi majibu ya hatua ya kiunganishi cha SharePoint cha **Pata vitu**.

    Chagua **Hifadhi** na chagua **Funga** ili kutoka kwenye modal ya mbunifu wa kadi ya kubadilika.

    ![Chagua Hifadhi](../../../../../translated_images/8.1_10_DeviceRequestCard.711ce0bdfbfecf2f221cb7fc4c6aecdefd7467afcfad43f2414e8230fc0d8470.sw.png)

1. Funga paneli ya **Mali za Nodi ya Kadi ya Kubadilika** kwa kuchagua **ikoni ya X**.

    ![Funga paneli ya Mali za Nodi ya Kadi ya Kubadilika](../../../../../translated_images/8.1_11_ExitAdaptiveCardNodeProperties.fe8760d8df1c22f9a73b7860e9473a4f350e0cb0d83824e9f55a143593ca9c58.sw.png)

1. Katika eneo la kuandika la mada, utaona kadi ya kubadilika.

    ![Kadi ya maombi ya kifaa](../../../../../translated_images/8.1_12_DeviceRequestCard.f4e3961a0fd282aeb37017f8cb49018c839805d375e2fc5a1220321156012b48.sw.png)

1. Shuka chini ya nodi na utaona vigezo vya matokeo. `commentsId` na `deviceSelectionId` vilifafanuliwa katika mali za kipengele. Vigezo hivi viwili vitahifadhi maadili kutoka kwa vipengele vya kadi ambavyo watumiaji wanashirikiana navyo. Maadili haya yatatumika baadaye katika mada, ambayo tutajifunza kuhusu katika maabara ya somo linalofuata.

    ![Matokeo ya vigezo vya nodi](../../../../../translated_images/8.1_13_DeviceRequestCardOutputs.d4580e9384b74e4273f83b52e1fd256a893c49b0cf398e33ac244906edd44b35.sw.png)

1. Sasa wacha tusasishe kadi kutoka JSON hadi fomula kwa kuwa tutatumia tena Power Fx kuzunguka vitu vilivyorudishwa katika hatua ya kiunganishi cha SharePoint cha **Pata vitu**, iliyohifadhiwa katika **kigezo cha kimataifa**, `Global.VarDevices.value`, kupitia mali ya `value` ya majibu ya JSON.

    > Tulitengeneza kigezo hiki cha kimataifa katika [Maabara ya 07 - Ongeza mada mpya na nodi za mazungumzo, 7.3 Ongeza zana kwa kutumia kiunganishi](../07-add-new-topic-with-trigger/README.md#73-add-a-tool-using-a-connector).

    Chagua kadi katika nodi ya **Uliza kwa Kadi ya Kubadilika**, kisha chagua **ikoni ya chevron** na chagua **Fomula**.

    ![Badilisha hadi fomula](../../../../../translated_images/8.1_14_ChangeToFormula.03acaccb20320557926f0854e006a2e6a6475eb06ecdb031f429e50d0303f0cf.sw.png)

1. Bofya kwenye **ikoni ya kupanua** ili kupanua uwanja wa Fomula.

    ![Bofya kwenye ikoni ya kupanua](../../../../../translated_images/8.1_15_SelectExpand.65dcefe6ec10e6b8c9741c254d303a47f5c0fae7bf586facbf768f820786c839.sw.png)

1. Bofya kwenye **Mhariri wa mzigo wa kadi** na chagua mistari yote kwa kutumia njia ya mkato ya kibodi ya Windows _Ctrl + A_ au njia ya mkato ya Mac _Command + A_, kisha futa mistari.

    ![Bofya kwenye mhariri wa mzigo wa kadi](../../../../../translated_images/8.1_16_SelectAll.689cea259e1541f21e87df32ce271bb478c7f88f8e96ba7e02329cc0015a037c.sw.png)

    Bandika Fomula kutoka kwa [Faili ya fomula ya Maombi ya Vifaa](../../../../../docs/recruit/08-add-adaptive-card/assets/8.1_RequestDeviceFormula.txt).

1. Katika fomula, tutazunguka kila kipengele cha orodha ya SharePoint kwa kutumia kazi ya `For All` kuonyesha maadili ya `Model` katika kichwa cha chaguo la uchaguzi, na kipengele cha orodha ya SharePoint `ID` kinarejelewa kama thamani. Pia tunafunika maadili na kazi ya `If(IsBlank()` kwa kuwa fomula inatarajia thamani ili kuonyesha kadi ya kubadilika katika eneo la kuandika la mada. Vinginevyo utaona ujumbe ukionekana, "Mali haiwezi kuwa tupu."

    **Funga** modal ya kadi.

    ![Fomula ya Power Fx](../../../../../translated_images/8.1_17_PowerFxFormula.c68848b0af594819636bf70aa6b03c7ec8f4190b285e798fdcb02232be0ca146.sw.png)

1. **Funga** paneli ya **Mali za Nodi ya Kadi ya Kubadilika**.

1. **Hifadhi** mada.

    ![Hifadhi mada](../../../../../translated_images/8.1_18_SaveTopic.da41cfc240e80d46f7f1379f271be8dafa0c3060868b862535bb4bec87591f6c.sw.png)

### 8.2 Sasisha maelekezo ya wakala kuanzisha mada ya Maombi ya kifaa

Sasa kwa kuwa tumeunda mada mpya inayoshughulikia maombi ya vifaa, tunahitaji kusasisha **maelekezo ya wakala** kuanzisha mada.

1. Chagua kichupo cha **Muhtasari** na katika **maelekezo ya wakala** chagua **Hariri**.

    ![Hariri maelekezo](../../../../../translated_images/8.2_01_EditInstructions.1c93b774b61243660f1fac51c39675e1a3aa35b14200364921d90ae26cffec13.sw.png)

1. Ongeza mstari mpya chini ya maelekezo ya awali kutoka [Maabara ya 07 - Ongeza mada mpya na nodi za mazungumzo, 7.3 Ongeza zana kwa kutumia kiunganishi](../07-add-new-topic-with-trigger/README.md#73-add-a-tool-using-a-connector).

    ```text
    - If the user answers yes to the question of requesting a device, trigger [Request device]. Otherwise if they answer no to the question of requesting a device, trigger [Goodbye].
    ```

    Chagua sehemu nzima ya mada iliyowekwa alama kwenye mabano ya mraba na futa sehemu hiyo.

    ![Sehemu ya maombi ya kifaa](../../../../../translated_images/8.2_02_ReplaceRequestDevicePlaceholder.604b21d10047f887fd12965c54bcaa7b96174dc5ebc39862ef29d513420c25f8.sw.png)

1. Andika `/Req` na chagua mada ya **Maombi ya vifaa**.

    ![Mada ya Maombi ya vifaa](../../../../../translated_images/8.2_03_ReferenceRequestDeviceTopic.082468c7b7512dceb4d294ed3dbe447e81b1f0b47688b767003eca6a60b4390d.sw.png)

1. Rudia hatua hizo kwa sehemu ya mada inayofuata, **[Kwaheri]**. Chagua sehemu nzima ya mada iliyowekwa alama kwenye mabano ya mraba na futa sehemu hiyo. Andika `/Goodbye` na chagua mada ya **Kwaheri**.

    - Wakati mtumiaji anajibu **Ndio** kwa wakala akiuliza kama wanataka kuomba kifaa, wakala atahamisha kutoka mada ya **Vifaa vilivyopo** kwenda kwenye mada ya **Maombi ya vifaa**.

    - Vinginevyo, ikiwa mtumiaji atajibu **Hapana**, wakala atahamisha kutoka mada ya **Vifaa vilivyopo** kwenda kwenye mada ya **Kwaheri**.

    **Hifadhi** maelekezo yaliyosasishwa.

    ![Hamisha kwenda mada ya Maombi ya kifaa](../../../../../translated_images/8.2_04_ReferenceGoodbyeTopic.f4db471beef6645aefd7d8b1b8a46669c6764b54f6954614f452976c49bcb9d5.sw.png)

1. Sasa wacha tujaribu uhamishaji kutoka mada ya _Vifaa vilivyopo_ kwenda kwenye mada ya _Maombi ya vifaa_. Chagua **Jaribu** ili kupakia paneli ya majaribio kisha chagua **Refresh**.

    Kisha chagua ikoni ya **Ramani ya Shughuli** katika paneli ya majaribio, kisha wezesha **Fuata kati ya mada**. Hii itatuwezesha kuona mada ya _Vifaa vilivyopo_ imehamishwa kwenda kwenye mada ya _Maombi ya vifaa_.

    Sawa, tuko tayari kujaribu! Weka yafuatayo katika paneli ya majaribio.

    ```text
    I need a laptop
    ```

    ![Jaribu wakala](../../../../../translated_images/8.2_05_TestAgent.21b4ed7f831866736edc0b35def2856066bf61082487a6d63952e8635eae8c99.sw.png)

1. Wakala atajibu na orodha ya vifaa vilivyopo ikifuatiwa na swali la kuuliza mtumiaji kama wanataka kuomba kifaa. Nakili na ubandike yafuatayo,

    ```text
    yes please
    ```

    ![Jaribu Maombi ya kifaa](../../../../../translated_images/8.2_06_TestRequestDeviceTopic.60f161f89dc2793bc4b40a6d29a06a7cffe156c50e8517de242f1dacbadf5682.sw.png)

1. Kisha tutaona kwamba wakala amehamishwa kwenda kwenye mada ya **Maombi ya kifaa**. Wakala ameanzisha mada hii kulingana na maelekezo tuliyoongeza.

    Kadi ya kubadilika yenye vipengele vya maingiliano sasa itaonyeshwa kama ujumbe kwa mtumiaji.

    ![Nodi ya swali](../../../../../translated_images/8.2_07_AdaptiveCardQuestion.f07775130cfea9a75c5842c48a56bf506e0b5967e4349571b682266c85c02748.sw.png)

1. Sasa tumefanikiwa kujaribu 😄 mada yetu ya _Vifaa vilivyopo_ ikihamishwa kwenda kwenye mada ya _Maombi ya vifaa_. Tutaongeza maboresho zaidi kwenye mada hii katika maabara ya somo linalofuata.

    Refresh paneli ya majaribio.

    ![Refresh paneli ya majaribio](../../../../../translated_images/8.2_08_RefreshTestPane.84d8c1174a9e6cc28a87f2663fb72838e8c6fd216df46153bd4f995b8527227a.sw.png)

## ✅ Kazi Imekamilika

Hongera! 👏🏻 Umejifunza jinsi ya kuongeza kadi za kubadilika kwa kutumia fomula za Power Fx kuonyesha data kutoka kwa vigezo, na pia umejifunza jinsi ya kuhamisha kutoka mada moja kwenda nyingine. Kuunda mada ndogo ndogo hufanya wakala wako kuwa na mpangilio mzuri, lakini pia husaidia kuwaongoza watumiaji kupitia sehemu tofauti za mtiririko wa mazungumzo na wakala.

Hii ni mwisho wa **Maabara ya 08 - Boresha maingiliano ya mtumiaji na Kadi za Kubadilika**, chagua kiungo hapa chini ili kuendelea na somo linalofuata. Tutapanua matumizi ya maabara hii katika maabara ya somo linalofuata.

⏭️ [Endelea na somo la **Ongeza mtiririko wa wakala kwenye Mada yako kwa ajili ya otomatiki**](../09-add-an-agent-flow/README.md)

## 📚 Rasilimali za Kimbinu

🔗 [Kutumia Kadi za Kubadilika katika Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/guidance/adaptive-cards-overview?WT.mc_id=power-172619-ebenitez)

🔗 [Ongeza kadi ya kubadilika katika nodi ya Tuma ujumbe](https://learn.microsoft.com/microsoft-copilot-studio/authoring-send-message#add-an-adaptive-card?WT.mc_id=power-172619-ebenitez)

🔗 [Tengeneza maelezo kwa kutumia Power Fx](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172619-ebenitez)

📺 [Kutengeneza Kadi za Kubadilika na Power FX](https://aka.ms/ai-in-action/copilot-studio/ep8)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/08-add-adaptive-card" alt="Takwimu za Uchambuzi" />

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.