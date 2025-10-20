<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "75efaf515d5694d4fd549bfd6518901a",
  "translation_date": "2025-10-20T01:13:04+00:00",
  "source_file": "docs/operative-preview/03-automate-triggers/README.md",
  "language_code": "sw"
}
-->
# Dhamira 03: Ongeza Vichochezi vya Matukio ili kutenda kwa uhuru

--8<-- "disclaimer.md"

## 🕵️‍♂️ JINA LA KODI: `OPERESHENI SIGNAL POINT`

> **⏱️ Muda wa Operesheni:** `~dakika 45`

## 🎯 Maelezo ya Dhamira

Karibu tena, Wakala. Katika [Dhamira 02](../02-multi-agent/README.md) - ulijifunza jinsi ya kujenga wakala mdogo wa Kupokea Maombi na wakala wa Kujiandaa kwa Mahojiano ili kupanua uwezo wa Wakala wako mkuu wa Kuajiri.

Kazi yako, ikiwa utaamua kuikubali, ni **Operesheni Signal Point** - kuchunguza kwa kina **vichochezi vya matukio** - kuinua mfumo wako wa wakala kutoka hali ya kujibu hadi **utendaji wa uhuru**. Utabadilisha mawakala wako kutoka kusubiri pembejeo za binadamu hadi kujibu kwa proakti matukio ya nje na kuchukua hatua za busara bila usimamizi.

Fikiria kama kuboresha kutoka kwa mawakala wanaojibu maswali hadi mawakala wanaotabiri mahitaji na kutenda kwa uhuru. Kupitia vichochezi vya matukio na mtiririko wa kazi otomatiki, Wakala wako wa Kuajiri atatambua barua pepe zinazoingia zenye wasifu, kushughulikia viambatisho kiotomatiki, kuhifadhi data kwenye Dataverse, na kuwajulisha timu yako ya HR kupitia Microsoft Teams - yote haya wakati unazingatia kazi za thamani ya juu.

Karibu katika ulimwengu ambapo otomatiki inakutana na akili.

## 🔎 Malengo

Katika dhamira hii, utajifunza:

1. Jinsi vichochezi vya matukio vinavyowezesha tabia ya wakala wa uhuru bila mwingiliano wa mtumiaji
1. Tofauti kati ya mawakala wa mazungumzo na mawakala wa uhuru katika Copilot Studio
1. Jinsi ya kuunda vichochezi vya matukio vinavyoshughulikia kiotomatiki viambatisho vya barua pepe na kupakia faili kwenye Dataverse
1. Jinsi ya kujenga mtiririko wa wakala unaotuma kadi za kubadilika kwenye njia za Teams kwa ajili ya arifa
1. Jinsi ya kupitisha data kati ya vichochezi vya matukio na mtiririko wa wakala kwa otomatiki ya mwisho hadi mwisho

## 🤔 Kichochezi cha Tukio ni nini?

Hapo awali katika [Recruit](../../recruit/10-add-event-triggers/README.md), tulijifunza kuhusu vichochezi vya matukio. Hebu tufanye muhtasari wa haraka kuhusu hili iwapo ulilikosa.

**Vichochezi vya matukio** vinamruhusu wakala _kutenda_ peke yake wakati kitu kinatokea katika mfumo mwingine - hakuna ujumbe wa mtumiaji unaohitajika. Wakati tukio lililowekwa linapotokea - kama vile “kipengee kipya cha SharePoint,” “barua pepe mpya,” “kazi ya Planner iliyotolewa,” au hata tukio la kurudiwa kwa muda, kiunganishi kinatuma mzigo wa kichochezi kwa wakala wako. Kisha wakala hufuata maagizo yako kuamua ni hatua gani au mada gani ya kuita.

### Sifa kuu

- **Uanzishaji wa uhuru:**
      - Tofauti na vichochezi vya mada vinavyoanza wakati mtumiaji anapoandika kwa wakala, vichochezi vya matukio vinatokea kutoka kwa matukio ya nje, kuwezesha tabia ya proakti.

- **Inayoendeshwa na mzigo:**
      - Kila tukio linatoa mzigo (vigezo + maagizo ya hiari) kupitia kiunganishi. Wakala hutumia maagizo uliyofafanua na mzigo kuamua cha kufanya baadaye.
      - Kwa mfano _kuita mada_ au _kutekeleza hatua zilizofafanuliwa na Zana_.

- **Mifano ya moja kwa moja:**
      - Faili au kipengee cha SharePoint/OneDrive kilichoundwa
      - Kazi ya Planner iliyokamilika/iliyotolewa
      - Jibu la Microsoft Forms lililowasilishwa
      - Kurudiwa/kupangwa

    Upatikanaji unategemea sera za data za shirika lako zilizowekwa katika Power Automate.

- **Inahitaji uratibu wa kizazi:**
      - Vichochezi vya matukio vinapatikana tu wakati uratibu wa kizazi umewezeshwa kwa wakala.

- **Malipo/matumizi:**
      - Kila utoaji wa kichochezi huhesabiwa kama ujumbe kuelekea uwezo wa Copilot Studio.
      - Kwa mfano kurudiwa kwa dakika 10 hutuma ujumbe kila dakika 10.

- **Mfano wa uthibitisho na usanidi:**
      - Unaongeza vichochezi ndani ya Muhtasari wa wakala, chini ya _Vichochezi_. Uthibitisho wa kiunganishi cha kichochezi hutumia akaunti ya mtengenezaji wa wakala (“uthibitisho wa mwandishi wa wakala”).
      - Unaweza kuhariri vigezo vya kichochezi na mzigo katika portal ya mtengenezaji wa Power Automate.

- **Upimaji na ufuatiliaji:**
      - Unaweza kupima vichochezi kutoka kwa paneli ya majaribio ya wakala na kuchunguza tabia kwa ramani ya shughuli kabla ya kuchapisha.

!!! info "Muhtasari kwa watengenezaji"

    Fikiria vichochezi vya matukio kama **ishara zinazofanana na webhook** zinazotuma mzigo ulio na muundo kwa wakala wako, zikimruhusu _kuanzisha_ kazi na kuunganisha hatua katika mifumo - bila kusubiri mtumiaji kuuliza.

### Vichochezi vya mada - jinsi vinavyotofautiana

Hapo awali ulijifunza kuhusu vichochezi vya mada katika [Recruit](../../recruit/07-add-new-topic-with-trigger/README.md), hata hivyo unaweza bado kushangaa jinsi _Vichochezi vya Mada_ vinavyotofautiana na _Vichochezi vya Matukio_, na kwa nini tofauti hiyo ni muhimu kwa kuelewa kinachofanya wakala kuwa wa uhuru.

Vichochezi vya mada vinadhibiti _wakati mada inakimbia_, kawaida kwa kujibu ujumbe wa mtumiaji.

- Katika uratibu wa kizazi, kichochezi cha chaguo-msingi ni **Na wakala** - mpangaji huchagua mada ambayo jina/maelezo yake yanalingana vyema na ujumbe wa mtumiaji.
- Katika uratibu wa kawaida, chaguo-msingi ni **Misemo** - mpangaji huchagua mada wakati moja au misemo kadhaa ya kichochezi inalingana vyema na ujumbe wa mtumiaji.

Aina nyingine za vichochezi ni `Ujumbe uliopokelewa`, `Tukio lililopokelewa`, `Shughuli iliyopokelewa`, `Sasisho la mazungumzo`, `Kuitwa kupokelewa`, `Kutokuwepo`, na `Mpango umekamilika`.

!!! info "Tofauti kuu"

    Vichochezi vya mada ni _vianzishaji vya shughuli za mazungumzo_ ndani ya mazungumzo.
    
    Vichochezi vya matukio ni _vianzishaji vya matukio ya mfumo_ vinavyotolewa kupitia viunganishi ambavyo vinaweza kuendesha wakala bila mazungumzo yoyote.

### Mwongozo wa haraka wa Kichochezi cha mada vs Kichochezi cha tukio

- **Kichochezi cha mada:** Mtumiaji (au shughuli ya mazungumzo) alisema/alifanya X ➡️ kimbia Mada T.
- **Kichochezi cha tukio:** SharePoint/Planner/Barua pepe/Kipima muda kilitokea na mzigo P ➡️ wakala anapima maagizo ➡️ kuita Hatua/Mada ipasavyo.

## 🏓 Wakala wa mazungumzo vs Wakala wa uhuru - kulinganisha

Sasa kwa kuwa unajua tofauti kati ya vichochezi vya matukio na vichochezi vya mada, hebu tujifunze tofauti kati ya wakala wa mazungumzo vs wakala wa uhuru.

Katika Copilot Studio, "mazungumzo" yanahusiana na mawakala wanaoshirikiana hasa kupitia **mada** katika mazungumzo ya njia. "Uhuru" unahusiana na mawakala wanaotumia pia **vichochezi vya matukio** kuendesha bila pembejeo za mtumiaji.

Jedwali lifuatalo linatoa muhtasari wa tofauti na kufanana kwao.

| Kipengele                           | Wakala wa mazungumzo  | Wakala wa uhuru                                                                                              |
|-------------------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------|
| Jinsi inavyoanza                    | Mtumiaji (au shughuli ya mazungumzo) huchochea mada. Mfano: Na wakala, Misemo, Ujumbe uliopokelewa.   | Kichochezi cha tukio cha nje hutuma mzigo kupitia kiunganishi kwa wakala. Mfano: SharePoint, Planner, barua pepe, ratiba, nk. |
| Matumizi ya msingi                  | Maswali na majibu, mtiririko wa kazi unaoongozwa, hatua zinazoendeshwa na maombi katika mazungumzo - Teams, wavuti, nk.  | Operesheni za proakti na otomatiki ya nyuma - kujibu mabadiliko ya mfumo na kisha kutoa taarifa, kuhifadhi, au kupanga kazi. |
| Uso wa kichochezi                   | Vichochezi vya mada: Na wakala / Misemo / Ujumbe uliopokelewa / Aina za shughuli / Kuitwa / Kutokuwepo / Mpango umekamilika | Maktaba ya vichochezi vya matukio kupitia viunganishi; mzigo unajumuisha data ya tukio + maagizo ya hiari. |
| Mpangaji (uratibu wa kizazi)        | Inatumika sana kwa vichochezi vya Na wakala na Mpango umekamilika kuchagua/kupanga mada. | Inahitajika kwa vichochezi vya matukio; wakala hutumia maagizo + mzigo kuamua ni hatua/mada gani ya kuita. |
| Mfano wa kawaida                    | Mtumiaji anauliza "Sera yetu ya kurejesha ni ipi?" → Mada inakimbia, inatafuta maarifa, inajibu. | Kazi mpya ya Planner imetolewa → Kichochezi cha tukio kinatokea → Wakala anachapisha ujumbe wa Teams, anasasisha rekodi, au anaita mada. |
| Njia ya usanidi                     | Unda mada, fafanua aina ya kichochezi, andika mazungumzo/hatua; chapisha kwa njia. | Ongeza kichochezi cha tukio (Muhtasari → Vichochezi), thibitisha kiunganishi na hati za mwandishi wa wakala, sanidi mzigo/maagizo; jaribu kupitia paneli ya majaribio; chapisha. |
| Uthibitisho na usimamizi            | Inaendeshwa chini ya muktadha wa njia/uthibitisho; vichochezi vya mada hujibu shughuli za mazungumzo katika njia zilizoidhinishwa. | Upatikanaji wa kichochezi unategemea sera za data za Power Automate; viunganishi vinaendeshwa chini ya akaunti ya mtengenezaji wa wakala. |
| Ufuatiliaji                         | Jaribu mada ndani ya Copilot Studio, chunguza nakala za mazungumzo/shughuli. | Tumia Jaribu kichochezi na ramani ya shughuli kuthibitisha utekelezaji kabla ya kuchapisha, fuatilia shughuli baada ya kuchapisha. |
| Athari ya uwezo                     | Kila ujumbe wa mtumiaji/jibu la wakala ni ujumbe unaotumia uwezo. | Kila utoaji wa tukio pia ni ujumbe, pamoja na hatua zozote zinazofuata. Mfano: kurudiwa kwa dakika 10 = ujumbe 6/saa |

### Wakati wa kutumia nini?

- Chagua **vichochezi vya mada (mazungumzo)** wakati watumiaji wananzisha mazungumzo ya wakala - FAQ, kupokea maombi kwa mwongozo, au kazi za mtindo wa amri ndani ya mazungumzo. Kichochezi cha Na wakala cha mpangaji hupunguza uundaji wa misemo kwa mikono.
- Ongeza **vichochezi vya matukio (uhuru)** wakati wakala anapaswa kuanzisha mazungumzo au kuchukua hatua yenyewe - juu ya masasisho katika SharePoint/Dataverse, barua pepe zinazoingia, au kwenye ratiba. Hii inakuhamisha kutoka operesheni za kujibu hadi operesheni za proakti.

## Vidokezo vya watengenezaji & tahadhari

1. **Wezesha uratibu wa kizazi** kwa wakala wowote unayotaka kufanya uhuru. Vichochezi vya matukio havitaonekana vinginevyo.

1. **Sanidi mzigo mapema.** Amua ni sehemu gani za chini zaidi ambazo wakala wako anahitaji kutoka kwa kichochezi kama vile `itemId`, `assignedTo`, `dueDate` na ongeza maagizo mafupi yanayoeleza wakala ni hatua/mada gani ya kuita kulingana na thamani za mzigo.

1. **Upeo wa uthibitisho ni muhimu.** Vichochezi vinathibitisha kwa kutumia akaunti ya mtengenezaji wa wakala. Hakikisha akaunti hiyo ina ruhusa sahihi za kiunganishi na inakubaliana na sera za data za Power Automate.

1. **Dhibiti gharama na kelele.** Kurudiwa kwa mara nyingi au vyanzo vyenye mazungumzo mengi vinaweza kuongeza matumizi ya ujumbe haraka - punguza pale inapowezekana au ongeza masharti katika kichochezi kuchuja matukio.

1. **Jaribu kabla ya kuchapisha.** Tumia **Jaribu kichochezi** na ramani ya shughuli kutazama mpango na hatua zilizoitwa - rudia maagizo/mzigo hadi tabia iwe thabiti.

## 🧪 Maabara 03 - Kuotomatisha barua pepe za maombi ya wagombea

Tutaanza kwa kuongeza kichochezi cha tukio kwa **Wakala wa Kuajiri** na kujenga mtiririko wa wakala katika wakala mdogo **Wakala wa Kupokea Maombi** kushughulikia usindikaji zaidi kwa uhuru.

### ✨ Hali ya matumizi

!!! info ""

    **Kama** Mtaalamu wa Kuajiri HR

    **Ninataka** kujulishwa wakati barua pepe yenye wasifu imefika kwenye Inbox yangu na kupakiwa kiotomatiki kwenye Dataverse

    **Ili** niweze kujulishwa kuhusu wasifu uliotumwa kwa barua pepe kwa maombi yaliyopakiwa kiotomatiki kwenye Dataverse

Tutafanikisha hili kwa kutumia mbinu mbili

1. Kichochezi cha tukio kwa wakati barua pepe inafika,
    1. Angalia `contentType` ya faili inalingana na `PDF` kama aina ya muundo.
    1. Toa faili na upakie kwenye Dataverse kwa kutumia hatua kupitia kiunganishi cha Dataverse.
    1. Kisha tuma maelekezo kwa wakala kwa usindikaji zaidi kwa kupitisha vigezo vya pembejeo kutoka kwa hatua za Dataverse.

1. Mtiririko wa wakala utaongezwa kwa wakala mdogo **Wakala wa Kupokea Maombi** ambao utaitwa na maelekezo katika kichochezi cha tukio.
    1. Tumia vigezo vya pembejeo vilivyopitishwa kutoka kwa maelekezo ya kichochezi cha tukio katika kadi ya kubadilika iliyochapishwa kwenye njia ya Microsoft Teams kuwajulisha timu ya Kuajiri ya HR. Kadi ya kubadilika itakuwa na kiungo cha safu katika Dataverse ambayo itaonekana katika **Wakala wa Kuajiri**.

Tuanzishe!

### ✨ Mahitaji ya kukamilisha dhamira hii

Utahitaji **ama**:

- **Kuwa umekamilisha Dhamira 01 na Dhamira 02** na kuwa na Wakala wako wa Kuajiri tayari, **AU**
- **Ingiza suluhisho la kuanzia la Dhamira 03** ikiwa unaanza upya au unahitaji kufikia hatua. [Pakua Suluhisho la Kuanzia la Dhamira 03](https://aka.ms/agent-academy)

!!! note "Uingizaji wa Suluhisho na Data ya Mfano"
    Ikiwa unatumia suluhisho la kuanzia, rejelea [Dhamira 01](../01-get-started/README.md) kwa maelezo ya kina kuhusu jinsi ya kuingiza suluhisho na data ya mfano katika mazingira yako.

Utahitaji pia ufikiaji wa **Microsoft Teams** kukamilisha zoezi la pili la maabara la kuchapisha kadi ya kubadilika kwenye Microsoft Teams.

### Maabara 3.1 - Kuotomatisha upakiaji wa wasifu kwenye Dataverse uliopokelewa kwa barua pepe

1. Katika Wakala wa Kuajiri, shuka chini kwenye **tab ya Muhtasari** na uchague **+ Ongeza kichochezi**.

       ![Ongeza kichochezi kwa wakala](../../../../../translated_images/3.1_01_AddTrigger.4d5f4d13a4a6b19fe9ff89e3a483601199d7643236d6df65ff81dfea76d1d443.sw.png)

1. Orodha ya vichochezi itaonekana. Chagua **Wakati barua pepe mpya inafika (V3)** na uchague **Inayofuata**.

       ![Chagua kichochezi cha Wakati barua pepe mpya inafika (V3)](../../../../../translated_images/3.1_02_WhenANewEmailArrives.a250875915165d97c1af6eebba70f16fbfc845a37d4d354c9f35a55aa459035e.sw.png)

1. Sasa tutaona **Jina la Kichochezi** na marejeleo ya mu
Sasa tutaenda kusasisha kichocheo cha tukio ili kuongeza uwezo zaidi wa kiotomatiki. Chagua **alama za nukta tatu (...)** kwenye kichocheo na uchague **Hariri katika Power Automate**.

![Chagua Hariri katika Power Automate](../../../../../translated_images/3.1_05_SelectEditInPowerAutomate.d298b51d7980cf2fd20a9d8193745aef4ce8097a4a2d33341e2dc159b9bfc099.sw.png)

1. Kichocheo kitasomeka kama mtiririko katika portal ya Power Automate maker. Unachokiona ni muundo wa mtiririko katika portal ya Power Automate maker. Hapa ndipo tunaweza kuongeza mantiki zaidi na hatua kwa ajili ya kiotomatiki zaidi. Kichocheo kitaonekana juu, kikifuatiwa na **Inatuma maelezo kwa copilot maalum kwa ajili ya usindikaji** kama hatua ya mwisho katika mtiririko.

![Muundo wa mtiririko katika portal ya Power Automate maker](../../../../../translated_images/3.1_06_EditInPowerAutomate.f8967ace56354224574517f31a2a2ce0a5b5d3ab85bfb9ec6cf70e83ab1b8e6d.sw.png)

1. Kwa default, kichocheo cha **Wakati barua pepe mpya inafika** katika Power Automate kinaweza kusindika barua pepe nyingi kwa pamoja ikiwa kadhaa zitafika mara moja, na kuendesha mtiririko mara moja tu kwa kundi hilo.

Ili kuhakikisha mtiririko unaendeshwa kando kwa kila barua pepe, wezesha mpangilio wa **Split On** katika mipangilio ya kichocheo na uchague `@triggerOutputs()?['body/value']` katika sehemu ya orodha ya kushuka.

Kwa kuwezesha **Split On** na kuweka sehemu ya orodha kwa `@triggerOutputs()?['body/value']`, mtiririko utaendeshwa kando kwa kila ujumbe, hata kama nyingi zitafika kwa wakati mmoja.

![Washa mipangilio ya Split On katika kichocheo](../../../../../translated_images/3.1_07_UpdateTriggerSettings.0f363c4f4655276732575fa795bf1ad1568df34d34b703c85073591cc8585609.sw.png)

1. Sasa tutaongeza mantiki ya kuangalia aina ya faili ya kiambatisho, tunataka tu kupakia viambatisho vya faili za .PDF na si picha (ambazo zinaweza kutoka kwa saini za barua pepe). Chagua ikoni ya **+** chini ya kichocheo na uchague **Udhibiti** chini ya sehemu ya **Zana za ndani**.

![Chagua Udhibiti](../../../../../translated_images/3.1_08_Control.2fa6987b64ae20d5c8343d1b15937432ab6c893750c4b1427df56067023fd437.sw.png)

1. Chagua hatua ya **Hali**.

![Chagua hatua ya Hali](../../../../../translated_images/3.1_09_AddConditionAction.a7eec0b2a42d4a7c54bd305f0c480b72e3feec155a4e2468e12279082257f21f.sw.png)

1. Sasa tunasanidi hali ya kuangalia kama aina ya kiambatisho cha faili ni .PDF. Katika sehemu ya **Chagua thamani**, chagua **ikoni ya radi** au **ikoni ya fx** upande wa kulia.

1. Katika sehemu ya **Tafuta**, andika yafuatayo,

```text
content type
```

1. Kisha chagua kipengele cha **Attachments Content-Type** kutoka kwa kichocheo.

1. Kisha, chagua **Ongeza** ili kuongeza maudhui ya nguvu kwenye kipengele cha **Id** cha hatua.

![Sanidi hatua ya Hali](../../../../../translated_images/3.1_10_SetDynamicContentValue_V2.23c3d0438146a5ff0d695077e65a3b1c8b230b54c51ded8a099c6e99a948e9ed.sw.png)

1. Tuweke kidogo hapa, labda uliona kwamba hatua ya **Kwa kila** ilionekana moja kwa moja.

Chagua hatua ya **Kwa kila**. Hatua hii inawakilisha kuzunguka kila kiambatisho katika barua pepe, kwa kuwa kipengele cha **Attachments Content-Type** kutoka kwa kichocheo kimeunganishwa na kila kiambatisho.

Chini ya hood, ni orodha na ndiyo sababu hatua ya **Kwa kila** iliongezwa moja kwa moja tulipochagua kipengele cha **Attachments Content-Type** katika hatua ya **Hali**.

Ili kujifunza zaidi kuhusu hili, panua kizuizi cha ziada cha kujifunza kilicho hapa chini.

??? info "Kujifunza Zaidi: Hatua ya Kwa kila inaonekana moja kwa moja"

🤔 **Kwa nini "Tumia kwa kila" au "Kwa kila" Inaonekana Moja kwa Moja?**

Unapochagua kipengele (maudhui ya nguvu) kinachowakilisha orodha au safu ya vitu - kwa mfano, orodha ya viambatisho, barua pepe, au safu - Power Automate inatambua kwamba unaweza kutaka kusindika kila kipengele kando.

Ili kukusaidia kufanya hivyo, Power Automate inaongeza moja kwa moja **“Tumia kwa kila”** (au **Kwa kila**) mzunguko karibu na hatua yako. Hii inahakikisha kwamba hatua yako itaendeshwa mara moja kwa kila kipengele katika orodha, badala ya kujaribu kusindika orodha nzima mara moja (ambayo inaweza kusababisha makosa).

🦋 **Mfano**

- Ikiwa unachagua "Viambatisho" kutoka kwa hatua ya awali (ambayo ni safu), na kujaribu kuitumia katika hatua inayotarajia faili moja, Power Automate inafunga hatua yako katika **"Tumia kwa kila"** (au **Kwa kila**) mzunguko. 
- Kwa njia hii, hatua yako itaendeshwa kwa **kila kiambatisho** - moja kwa moja.

💡 **Vidokezo Muhimu**

- **Moja kwa moja:** Mzunguko unaonekana moja kwa moja ili kukusaidia kusindika kila kipengele katika mkusanyiko.
- **Huzuia makosa:** Bila mzunguko, hatua yako inaweza kushindwa kwa sababu haiwezi kushughulikia vitu vingi mara moja.
- **Ishara ya kuona:** Ni njia ya kuona kuonyesha kwamba mtiririko wako utarudia hatua kwa kila kipengele katika orodha.

![Hatua ya Kwa Kila imeelezewa](../../../../../translated_images/3.1_11_ForEach.82bd7b62b815fdbcd67acff0a633137cf03175940c670361ea8669b0df892927.sw.png)

1. Kisha, katika sehemu nyingine ya **Chagua thamani**, andika yafuatayo,

```text
application/pdf
```

Hii itahakikisha kwamba kwa kila kiambatisho cha faili, itakagua kama muundo wa kiendelezi cha faili ni .PDF.

![Sawa na Thamani](../../../../../translated_images/3.1_12_EqualToValue.66c107cb8105c1cd3d166b8a5bf690b8dfc30aa2bd2af83c438a9e44d1b544b0.sw.png)

1. Sasa tutaweka njia ya **Kweli** ili kutoa faili kutoka kwa barua pepe na kuipakia kwenye jedwali la **Resume** la Dataverse.

Ongeza hatua mpya chini ya njia ya **Kweli** na tafuta `html to text`. Chagua hatua ya **Html to text**.

Ili kujifunza zaidi kuhusu hatua ya **Html to text**, panua kizuizi cha ziada cha kujifunza kilicho hapa chini.

??? info "Kujifunza Zaidi: Hatua ya Html to text"

🤔 **Hatua ya "HTML to text" ni nini?**

Hatua ya **HTML to text** katika Power Automate inatumika kubadilisha maudhui yaliyo na muundo wa HTML kuwa maandishi ya kawaida. Hii ni muhimu hasa unapopokea data (kama barua pepe, maudhui ya wavuti, au majibu ya API) yenye lebo za HTML, na unataka kutoa tu maandishi yanayosomeka bila muundo au msimbo wowote.

⚙️ **Inafanyaje kazi?**

- **Ingizo:** Unatoa mfululizo wa maudhui ya HTML (kwa mfano, mwili wa barua pepe).
- **Matokeo:** Hatua huondoa lebo zote za HTML na kurudisha tu maandishi ya kawaida.

👍🏻 **Ni lini unapaswa kuitumia?**

- Unapotaka kutoa maandishi yanayosomeka kutoka kwa barua pepe, kurasa za wavuti, au majibu ya API yenye HTML.
- Kabla ya kutuma maudhui kwa mifumo ambayo haiungi mkono muundo wa HTML (kama SMS, ujumbe wa Teams, au hifadhidata).
- Kusafisha data kwa usindikaji zaidi au uchambuzi.

🔭 **Wapi pa kuipata?**

- Katika Power Automate kwa mtiririko wa Wakala, tafuta hatua inayoitwa `HTML to text`. Iko chini ya kiunganishi cha **Data Operations**.

💡 **Vidokezo Muhimu**

- Inaondoa lebo zote za HTML na kuacha tu maandishi.
- Haiwezi kutafsiri au kutekeleza maandishi/muundo - inatoa tu lebo.
- Inafaa kwa kusafisha data na kuandaa maudhui kwa matokeo ya maandishi ya kawaida.

![Ongeza hatua ya HTML to text](../../../../../translated_images/3.1_13_AddHTMLToTextAction.2aa9468b87dbeb847c083f24da0fe99438b39f826b13a70982ec255a97c2aa80.sw.png)

1. Kisha, tunahitaji kuunda rejeleo jipya la muunganisho kwa hatua ya **Html to text** kwa kuchagua **Ongeza mpya**.

![Ongeza rejeleo jipya la muunganisho](../../../../../translated_images/3.1_14_AddNewConnection.4a23546976b62e7f0e882ac1379950e5bfdcaa702070313cb84a1d22b06a79a7.sw.png)

1. Hatua sasa inaweza kusanidiwa. Wacha tuongeze kipengele cha **Mwili** kutoka kwa kichocheo. Katika sehemu ya **Maudhui**, chagua **ikoni ya radi** au **ikoni ya fx** upande wa kulia.

![Ongeza Maudhui ya Nguvu](../../../../../translated_images/3.1_15_AddDynamicContent.0624a9808f55b993efb6d00bf941a88389655e2ab9970ba2b9a1538272fe9643.sw.png)

1. Katika tabo ya **Maudhui ya Nguvu**, tafuta `body` na uchague kipengele cha **Mwili**, kisha chagua **Ongeza**.

![Ongeza kipengele cha Mwili](../../../../../translated_images/3.1_16_AddDynamicContent.40b7eccc080c20513eed5663062b2a63d40d6482eaf2d42fe4e29cb94797f098.sw.png)

1. Tumekamilisha kusanidi hatua hii kwa hivyo wacha tutoke kwenye hatua kwa kuchagua mabano mawili ya pembe («) yanayoelekea kushoto ili kufunga paneli.

![Funga paneli ya hatua](../../../../../translated_images/3.1_17_CollapseAction.ca2c346efb58f8240372c3d145fa10ba609cab1c2075d7df1a9388c82fab79f5.sw.png)

1. Tutaongeza hatua mpya kwa kuchagua **ikoni ya +** chini ya hatua ya **Html to text** ambayo itapakia paneli ya kuongeza hatua. Chagua kiunganishi cha **Microsoft Dataverse**.

![Ongeza hatua mpya](../../../../../translated_images/3.1_18_AddDataverseAction.5f4be9eb96e22dac239e5545bab5ad9d08b138c2cbcbc700680f33445e132506.sw.png)

1. Chagua hatua ya **Ongeza safu mpya**.

![Ongeza hatua ya safu mpya](../../../../../translated_images/3.1_19_AddANewRow.48e0a3868821e59ed2a299ccb6a521af27b2430082381d48be38087be62c7c15.sw.png)

1. Badilisha jina la hatua kwa kuchagua **Nukta tatu (...)**, nakili na ubandike yafuatayo kama jina,

```text
Ongeza safu mpya ya Resume
```

Kwa kipengele cha **Jina la Jedwali**, tafuta `res` na uchague jedwali la **Resumes**.

![Badilisha jina la hatua na sanidi kipengele cha Jina la Jedwali](../../../../../translated_images/3.1_20_RenameAndSelectResumesTable.89f8485653abb7fda1d6eb44210951f05a05ed6f7450a51895079dfd8e72c8bf.sw.png)

1. Chagua sehemu ya **Kichwa cha Resume** kisha uchague **ikoni ya radi** au **ikoni ya fx** upande wa kulia.

![Sanidi kipengele cha Kichwa cha Resume](../../../../../translated_images/3.1_21_AddDynamicContent.9ee1f89420d5a4aa56797944166208f6e9b0ec67116625168fbcefb907850224.sw.png)

1. Katika tabo ya **Kazi**, ingiza usemi ufuatao unaotumia kazi ya `item()`.

```text
item()?['name']
```

Ili kujifunza zaidi kuhusu kazi ya `item ()`, panua kizuizi cha ziada cha kujifunza kilicho hapa chini.

??? info "Kujifunza Zaidi: Kazi ya `item()`"

🤔 **Kazi ya `item()` ni nini?**

- Unapotumia hatua ya **Tumia kwa kila**, Power Automate hupitia kila kipengele katika mkusanyiko (safu).
- Mara nyingi hutumika ndani ya hatua kama **Tumia kwa kila** (au **Kwa kila**), **Chagua**, au **Chuja safu**.

⚙️ **Inafanyaje kazi?**

- `item()` ni kazi inayorudisha kipengele cha sasa kinachosindika katika mzunguko au operesheni ya safu.
- Ndani ya mzunguko huo, `item()` inahusu _kipengele cha sasa_ kinachosindika.

📌 **Wapi pa kuitumia?**

- **Tumia kwa kila:** kufikia mali za kipengele cha sasa.
- **Chagua:** kubadilisha kila kipengele katika safu.
- **Chuja safu:** kurejelea kipengele cha sasa kinachotathminiwa.

🦋 **Mfano**

- Usemi ndani ya mzunguko:
       -  `item()?['Email']`
- Hii inapata mali ya `Email` ya kipengele cha sasa.

💡 **Vidokezo Muhimu**

- `item()` ni _inayohusiana na muktadha_: kila wakati inahusu kipengele cha sasa katika mzunguko au operesheni ya safu unayofanya.
- Ikiwa unazungusha mizunguko, unaweza kutumia `items('LoopName')` kurejelea vitu katika mzunguko maalum.

Chagua **Ongeza** ili kuongeza usemi kwenye kipengele cha **Kichwa cha Resume**.

![Ongeza usemi kwa kipengele cha Kichwa cha Resume](../../../../../translated_images/3.1_22_ResumeTitleParameter.9e4fa71a5251cb899e7b09bcc3052eeda1e512841f929118eb9e2b1d232ecb07.sw.png)

1. Bado tunahitaji kusanidi vigezo kadhaa zaidi, chagua **Onyesha yote** na katika sehemu ya **Barua ya Maombi**, chagua **ikoni ya radi** au **ikoni ya fx** upande wa kulia.

Katika tabo ya **Kazi**, ingiza usemi ufuatao unaotumia usemi sawa na ule wa [kazi ya awali](../02-multi-agent/README.md).

```text
if(greater(length(body('Html_to_text')), 2000), substring(body('Html_to_text'), 0, 2000), body('Html_to_text'))
```

Usemi huu unakagua ikiwa _maandishi_ kutoka kwa hatua ya **Html to text** ni marefu zaidi ya herufi 2000, na ikiwa ni hivyo, unarudisha herufi 2000 za kwanza; vinginevyo, unarudisha maandishi kamili.

![Ongeza usemi kwa kipengele cha Barua ya Maombi](../../../../../translated_images/3.1_23_CoverLetterParameter.d2b521d6b37d05ac4760c91de2964b6d062585a333af6989d9ac0794a4139463.sw.png)

1. Usemi sasa utaongezwa kwenye sehemu ya **Barua ya Maombi**.

![Usemi umeongezwa kwenye kipengele cha Barua ya Maombi](../../../../../translated_images/3.1_24_ExpressionForCoverLetter.3d18124b10b76bad92db61c529ae395b0bb05f3215e3b783771e76ef7677664e.sw.png)

1. Kwa sehemu ya **Anwani ya Barua Pepe ya Chanzo**, tafuta `from` na uchague kipengele cha **From** kutoka kwa kichocheo kwa kuwa kina thamani ya anwani ya barua pepe.

![Kipengele cha Anwani ya Barua Pepe ya Chanzo](../../../../../translated_images/3.1_25_FromParameter.1ed1be46711f6705fb807996f6f1e873adc22e285186a851272e0cf3855487ef.sw.png)

1. Kwa sehemu ya **Tarehe ya Kupakia**, chagua **ikoni ya radi** au **ikoni ya fx** upande wa kulia. Katika tabo ya **Kazi**, ingiza usemi ufuatao unaotumia kazi ya `utcNow()`.

```text
utcNow()
```

Ili kujifunza zaidi kuhusu kazi ya `utcNow`, panua kizuizi cha ziada cha kujifunza kilicho hapa chini.

??? info "Kujifunza Zaidi: Kazi ya `utcNow`"

🤔 **Kazi ya `utcNow()` ni nini?**

- Kazi ya utcnow() katika Power Automate inarudisha tarehe na muda wa sasa katika Muda wa Ulimwengu wa Kuratibu (UTC) katika muundo wa ISO 8601, kama: `2025-09-23T04:32:14Z`

🦋 **Mfano**

- Usemi:
       -  `concat('Ripoti imetolewa mnamo ', utcnow())`
- Matokeo ni:
       - Ripoti imetolewa mnamo `2025-09-23T04:32:14Z`

💡 **Vidokezo Muhimu**
- **Hakuna hoja (vigezo vya pembejeo) vinavyohitajika:** kila wakati inatoa alama ya muda ya sasa ya UTC.
   - **Matumizi**
       - Kuongeza alama za muda kwenye kumbukumbu au majina ya faili
       - Kulinganisha muda wa sasa na tarehe nyingine
       - Kupanga ratiba au masharti yanayohusiana na muda

![Parameter ya Tarehe ya Kupakia](../../../../../translated_images/3.1_26_UploadDateParameter.21b0afc9807bf680c1c432066f1644d4d018cb4988ad0c0788b5186cea285e02.sw.png)

1. Sasa tumekamilisha kusanidi hatua ya **Ongeza safu mpya ya Resume**, basi tuondoke kwenye paneli kwa kuifunga.

![Ondoka kwenye paneli ya hatua](../../../../../translated_images/3.1_27_CollapseAction.c033a86e4d8501b10fc454ba7f9c5e08d71d6d881fc72f58011152e1c5d7a7bb.sw.png)

1. Tutaongeza hatua mpya kwa kuchagua **ikoni ya +** chini ya hatua ya **Ongeza safu mpya ya Resume** ambayo itafungua paneli ya kuongeza hatua. Chagua tena kiunganishi cha **Microsoft Dataverse**.

![Ongeza hatua ya Dataverse](../../../../../translated_images/3.1_28_AddDataverseAction.1af4dedc95001bfb56b0a642231e9c82b57459b10c68bf6fc177382339a0a221.sw.png)

1. Chagua hatua ya **Pakia faili au picha**.

![Ongeza hatua ya Pakia faili au picha](../../../../../translated_images/3.1_29_AddUploadAFileOrAnImage.e40ab21b735e37bd1fdb5020b7433d1a2f01d6e387bc43a437e970c6e20ee779.sw.png)

1. Badilisha jina la hatua kwa kuchagua **Ellipsis (...)**, nakili na ubandike yafuatayo kama jina,

```text
Pakia Faili ya Resume
```

![Badilisha jina la hatua](../../../../../translated_images/3.1_30_RenameAction.c316fdf225f88e5c3ee26649e672472829c3372c804b544a1372b0455937c204.sw.png)

1. Chagua sehemu ya **Jina la Maudhui** kisha uchague **ikoni ya radi** au **ikoni ya fx** upande wa kulia.

Katika **tab ya Kazi**, ingiza usemi ufuatao unaotumia kazi ya `item ()`. Hii inapata mali ya `name` ya kipengele cha sasa (faili ya kiambatisho).

```text
item()?['name']
```

![Sanidi parameter ya Jina la Maudhui](../../../../../translated_images/3.1_31_ContentNameParameter.c6606773f1e82dbcea93d7c2f52dff7a2168f9f04d6b865f699f56d62a41d4ec.sw.png)

1. Kwa parameter ya **Jina la Jedwali**, tafuta `res` na uchague jedwali la **Resumes**.

![Sanidi parameter ya Jina la Jedwali](../../../../../translated_images/3.1_32_SelectResumesTable.6a00bf6d585002219003da47f6e1042dc67cbdb3fbaf7d959253550035e27520.sw.png)

1. Chagua sehemu ya **ID ya Safu** kisha uchague **ikoni ya radi** au **ikoni ya fx** upande wa kulia.

Tafuta `ID` na uchague parameter ya **Resume** kutoka hatua ya _Ongeza safu mpya ya Dataverse_ kwani hii ina thamani ya ID ya safu ya kupakia faili ya PDF.

Chagua **Ongeza**.

![Chagua ID ya Safu](../../../../../translated_images/3.1_33_RowIDParameter.9824c6b5ea5edf0ce018140c20431a97c2e750d61bcb787f67da260acb6a3838.sw.png)

1. Chagua sehemu ya **Jina la Safu** na uchague chaguo la **Resume PDF**.

![Sanidi parameter ya Jina la Safu](../../../../../translated_images/3.1_34_ColumnNameParameter.ef4f770cbd84cae5c15cfe06d1bdbe028d0c6d54a2286dab30769fa01c948b71.sw.png)

1. Chagua sehemu ya **Maudhui** na uchague **ikoni ya radi** au **ikoni ya fx** upande wa kulia.

Katika **tab ya Kazi**, ingiza usemi ufuatao unaotumia kazi ya `item ()`. Hii inapata mali ya `contentBytes` ya kipengele cha sasa (faili ya kiambatisho). `contentBytes` inahusu data ghafi ya binary ya faili au kiambatisho, iliyosimbwa kama kamba ya Base64.

```text
item()?['contentBytes']
```

1. Tumekamilisha kusanidi hatua hii basi tuondoke kwenye hatua kwa kuchagua mabano mawili ya pembe («) yanayoelekea kushoto ili kufunga paneli.

![Funga paneli ya hatua](../../../../../translated_images/3.1_36_CollapseAction.1813a7219f0f37b87f80c2cd9f5a9626c3a320858d08a0e62cf14736f97db4c6.sw.png)

1. Kisha, chagua **Inatuma maoni kwa copilot maalum kwa usindikaji**, kisha buruta na uweke hatua hii chini ya hatua ya **Pakia Faili ya Resume** katika njia ya _True_ ya hali.

![Buruta na uweke hatua katika njia ya True](../../../../../translated_images/3.1_37_DragAndDropAction.57dc2e9f9d25ed892a4fc072a72c55eca6c38e313ab48fb9db37e9371995440f.sw.png)

1. Chagua **Inatuma maoni kwa copilot maalum kwa usindikaji** ili kuisanidi.

![Chagua hatua](../../../../../translated_images/3.1_38_SelectAction.d125bdf661f66b6397542c75efbc6a78b8c4862e03dce4002776c251f1c48382.sw.png)

1. Katika sehemu ya **Mwili/ujumbe**, chagua maudhui yote ya sehemu na uyafute.

![Futa parameter ya Mwili](../../../../../translated_images/3.1_39_ClearBodyParameter.6a345b2e5dbe5510184d7bae7cd406b8cec72c714f34bb40e30741e445a491c0.sw.png)

1. Nakili na ubandike maandishi yafuatayo katika sehemu ya **Mwili/ujumbe** na uweke alama `RESUME ID PLACEHOLDER`.

```text
Tuma [ResumeId (text)] = "RESUME ID PLACEHOLDER" na [ResumeTitle (text_1)] = "RESUME TITLE PLACEHOLDER" na [ResumeNumber (text_2)]= "RESUME NUMBER PLACEHOLDER" kwa Zana "Arifu Timu ya Waajiriwa ya Teams" katika wakala mdogo "Wakala wa Kupokea Maombi"
```

![Badilisha maandishi ya Resume ID Placeholder](../../../../../translated_images/3.1_40_ReplaceResumeIDPlaceholder.eb61590503cb37d89121aaed6d979a4272aa30c87700206e04db8005e60b294f.sw.png)

1. Chagua **ikoni ya radi** au **ikoni ya fx** upande wa kulia.

Tafuta `resume` na uchague parameter ya **Resume** kutoka hatua ya _Ongeza safu mpya ya Dataverse_ kwani hii ina thamani ya `ID` ya safu ya Resume iliyoundwa.

Chagua **Ongeza**.

![Chagua parameter ya Resume](../../../../../translated_images/3.1_41_SelectResumeParameter.61c4457c33e5d1b596169857535bfc560ef677264f8798e9148ceac999eeaeb9.sw.png)

1. Weka alama `RESUME TITLE PLACEHOLDER`. Chagua **ikoni ya radi** au **ikoni ya fx** upande wa kulia.

Tafuta `title` na uchague parameter ya **Resume Title** kutoka hatua ya _Ongeza safu mpya ya Dataverse_ kwani hii ina thamani ya `resume title` ya safu ya Resume iliyoundwa.

Chagua **Ongeza**.

![Chagua parameter ya Resume](../../../../../translated_images/3.1_42_SelectResumeTitleParameter.6c887607128f928da15c4cf6c22254d0473bc22514aa883462fd812bf14245e0.sw.png)

1. Weka alama `RESUME NUMBER PLACEHOLDER`. Chagua **ikoni ya radi** au **ikoni ya fx** upande wa kulia.

Tafuta `resume number` na uchague parameter ya **Resume Number** kutoka hatua ya _Ongeza safu mpya ya Dataverse_ kwani hii ina thamani ya `Resume Number` ya safu ya Resume iliyoundwa.

Chagua **Ongeza**.

![Chagua parameter ya Resume](../../../../../translated_images/3.1_43_SelectResumeNumberParameter.ca19197525250483a7e94598b621072b47ebdf5deb939e1387c979e807ddc554.sw.png)

1. Tumekamilisha kusanidi hatua hii na mtiririko wa wakala wetu 🙌🏻 Unafanya kazi nzuri! Sasa tuhifadhi mtiririko wa tukio letu kwa kuchagua **Hifadhi rasimu**.

![Hifadhi rasimu](../../../../../translated_images/3.1_44_SaveDraft.0c9eee19f0c7cb8483b8d31bc17e1dd54075352d22f0f44603a9d52b52429188.sw.png)

1. Sasa tunahitaji kuhariri maelezo ya mtiririko wa wakala, chagua **Rudi**.

![Chagua Rudi](../../../../../translated_images/3.1_45_Back.3f85535977bdb02231a0fdb8465e0e8b7d86fd5342ff933e4ae8bf9610279989.sw.png)

1. Chagua **Hariri** katika sehemu ya **Maelezo** na sasisha **Mpango** kuwa chaguo la **Copilot Studio**.

Chagua **Hifadhi**.

![Badilisha mpango wa Copilot Studio](../../../../../translated_images/3.1_46_ChangePlanDetails.6ab15f1f8bd9ebe55b2c1576c3495f47d1a29d7435e343d4c590e46647601269.sw.png)

1. Modal itaonekana kukuuliza uthibitishe kubadilisha mpango kuwa Copilot Studio. Chagua **Thibitisha**.

![Thibitisha mabadiliko ya mpango wa Copilot Studio](../../../../../translated_images/3.1_47_ConfirmCopilotStudioPlan.bc6ab52e7c982127154b0fb743f85ff9cc05dcab944dffc9485bdbcbe0811397.sw.png)

1. Mpango sasa umesasishwa kuwa **Copilot Studio**. Chagua **Hariri** kwani tunahitaji kuchapisha mtiririko wa tukio kwa wakala wetu.

![Hariri mtiririko](../../../../../translated_images/3.1_48_PlanChangedAndEdit.3c3207766a648817f7a7878c3a6f684cf41cdceea4dca8f6fc43b7315c8dd648.sw.png)

1. Chagua **Chapisha**.

![Chapisha](../../../../../translated_images/3.1_49_Publish.38ff814cfce6b3be1076cafb0c28e4e344f75d8cd4117fabed13ad361d4fde3f.sw.png)

Hongera! Mtiririko wa tukio sasa umechapishwa 😃

![Imechapishwa](../../../../../translated_images/3.1_50_Published.449e7867f7b027ae8a524c749357a1b931955062828bacc3b5a51e979755ef4a.sw.png)

Tuendelee kuunda mtiririko mpya wa wakala ambao utaanzishwa na wakala mdogo **Wakala wa Kupokea Maombi**.

### Maabara 3.2 - Arifu kituo cha Teams kwa kutumia kadi ya kubadilika

Sasa tutaunda mtiririko mpya wa wakala kwa wakala mdogo **Wakala wa Kupokea Maombi** ambao utatumia maadili yaliyopitishwa na mtiririko wa tukio, kutuma kadi ya kubadilika kwenye kituo cha Teams. Kadi hii ya kubadilika itaarifu timu ya HR ya uajiri kuhusu PDF iliyopakiwa kiotomatiki ili waweze kuikagua.

Tuanzishe!

1. Katika **Wakala wa Kuajiri** chagua tabo ya **Mawakala** na uchague **Wakala wa Kupokea Maombi**.

![Chagua Wakala wa Kupokea Maombi](../../../../../translated_images/3.2_01_SelectApplicationIntakeAgent.0e9dd3da5c52e9f59ab3a4545c01897ad830853b650ec42f7f8424aa530e0409.sw.png)

1. Shuka chini hadi **Zana** na uchague **+ Ongeza**.

![Ongeza Zana](../../../../../translated_images/3.2_02_AddNewTool.7c62275fd9f28cdc1923ea056a148171048dc568ff78056958fd54862133f90e.sw.png)

1. Modal ya **Ongeza zana** itaonekana. Chagua **+ Zana mpya**.

![Chagua Zana Mpya](../../../../../translated_images/3.2_03_SelectNewTool.215e7637a9f065a3799a1ecf248eed1e859f201d2dfdfab71a7c1dc18e454e2d.sw.png)

1. Chagua **Mtiririko wa wakala**.

![Chagua Mtiririko wa Wakala](../../../../../translated_images/3.2_04_SelectAgentFlow.7bc12b3435efccc0cfee8f563640562f87d173b436b3313a3d1256fe35024907.sw.png)

1. Kisha **mbunifu wa mtiririko wa wakala** utapakia. Katika kichochezi cha **Wakati wakala anapoitisha mtiririko**, chagua **+ Ongeza pembejeo**.

![Chagua ongeza pembejeo](../../../../../translated_images/3.2_05_SelectAddAnInput.f3dc8465f490929baccb0f2dc72b50629b1435ff8a3861f7974885d1d36cdeb1.sw.png)

1. Chagua **Maandishi** kama aina ya pembejeo ya mtumiaji.

![Chagua Maandishi](../../../../../translated_images/3.2_06_SelectText.93585b4af8c4e277c11c2052b638e249508a24a075987026a6ec346e75184217.sw.png)

1. Katika sehemu ya maandishi ya pembejeo, nakili na ubandike yafuatayo kwa jina la parameter ya pembejeo.

```text
ResumeId
```

![Pembejeo ya ResumeId](../../../../../translated_images/3.2_07_ResumeIdInput.a9e127e343856d6c6d45dd1251cade0503bad9484bc563c02155390951b1faa5.sw.png)

1. Rudia hatua hizo hizo kuongeza pembejeo ya pili ya maandishi. Nakili na ubandike yafuatayo kwa jina la parameter ya pembejeo.

```text
ResumeTitle
```

![Pembejeo ya ResumeTitle](../../../../../translated_images/3.2_08_ResumeTitleInput.c71ecd364a974a93abb0de876807c2e9bde59fcea6df317babeb20764b636f26.sw.png)

1. Rudia hatua hizo hizo kuongeza pembejeo ya tatu ya maandishi. Nakili na ubandike yafuatayo kwa jina la parameter ya pembejeo.

```text
ResumeNumber
```
![Pembejeo ya ResumeNumber](../../../../../translated_images/3.2_09_ResumeNumberInput.a6c060000354deab51dffef3c1ad9f13378cfeabdafdb7a33c2a591bfd044709.sw.png)

1. Unakumbuka jinsi tulivyofanya katika [Kuajiri](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request) tulipoongeza kadi ya kubadilika ndani ya Mada kwa wakala wetu? Wakati huu, tutaongeza kadi ya kubadilika katika mtiririko wa wakala. Sasa tutaongeza hatua nyingine kwa mtiririko wa wakala wetu ambayo itatuma kadi ya kubadilika kwenye kituo cha Teams.

Chagua **ikoni ya +** chini ya kichochezi.

![Ongeza hatua mpya](../../../../../translated_images/3.2_10_AddNewAction.4474a2150991cac246d5e4091a74ba91e76e1c5bafa34ad985a8567c09dcdd35.sw.png)

1. Chagua hatua ya **Tuma kadi katika mazungumzo au kituo**.

![Chagua hatua ya tuma kadi katika mazungumzo au kituo](../../../../../translated_images/3.2_11_SelectPostCardInAChatOrChannel.97de43ed1c883b14d0150ae65efaa90f53f0815bdf57ec10e0e22cbd3e22ce06.sw.png)

1. Marejeleo ya muunganisho kwa Microsoft Teams yanahitaji kuundwa na akaunti yako ya kuingia. Chagua **Ingia**.

![Chagua ingia](../../../../../translated_images/3.2_12_SignInToCreateConnectionReference.2297f8b702d71508f1b21a3ed4046df4846dc03b13932a20e5c445403559ac1f.sw.png)

1. Chagua akaunti yako kisha uchague **Ruhusu ufikiaji**.

![Chagua Ruhusu ufikiaji](../../../../../translated_images/3.2_13_AllowAccess.31cbf82606d75231108bd4f2bfeafffda3cd7e7e760cd46004c2705afe050aaf.sw.png)

1. Kwa vigezo vya pembejeo vifuatavyo,

| Parameter | Jinsi ya Kuweka | Maelezo |
|----------|------------|---------|
| **Tuma kama** | Chaguo la kushuka | Chagua chaguo la `Flow bot` |
| **Tuma katika** | Chaguo la kushuka | Chagua chaguo la `Channel` |
| **Timu** | Chaguo la kushuka | Chagua timu inayopatikana katika mazingira yako ambayo una ufikiaji wa kukamilisha zoezi hili la maabara |
| **Kituo** | Chaguo la kushuka | Chagua kituo kinachopatikana katika mazingira yako ambacho una ufikiaji wa kukamilisha zoezi hili la maabara |

![Sanidi vigezo vya pembejeo](../../../../../translated_images/3.2_14_ConfigureParameters.8c21924f90db3acaa33d4e35ef43c70556ba4cc37207a195ac654e55a43400a6.sw.png)

1. Kisha, tutaweka sehemu ya **Kadi ya Kubadilika**. Chagua sehemu ya **Kadi ya Kubadilika**.

![Chagua sehemu ya Kadi ya Kubadilika](../../../../../translated_images/3.2_15_SelectAdaptiveCardParameter.65323056be6174d2eed7422650aaa70fc16396148f90b8af1801110d7a30d66f.sw.png)

1. Fungua faili ya [Resume Table Updated JSON](../../../../../docs/operative-preview/03-automate-triggers/assets/3.2_ResumeTableUpdated.json), nakili maudhui yake yote, na uyabandike kwenye sehemu ya Kadi ya Kubadilika.

![Nakili na ubandike JSON](../../../../../translated_images/3.2_16_JSON.f022097fb7139bd12514abb8fdc518309ea940f005cc94a11ba159359cde784b.sw.png)

1. Kama tulivyofanya katika [Kuajiri](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request), sasa tutabadilisha maadili yaliyopo kwenye mzigo wa JSON na maadili halisi au maudhui ya nguvu.

Kwanza, wacha tusasishe URL kwa mali ya `url` ndani ya mali ya `selectAction`. URL hii itabadilishwa na URL ya mtazamo wa mfumo wa Resumes katika programu ya **Hiring Hub** inayotegemea modeli. Hii itamruhusu Mtaalamu wa Uajiri kuchagua hatua na kuelekezwa kwenye mtazamo wa mfumo wa Resumes katika programu inayotegemea modeli.

Weka alama thamani ya URL ya sasa na uifute.

![Chagua thamani ya URL](../../../../../translated_images/3.2_17_SystemViewURL.5e51fd894ac916f436107c7b668d66ca87ca8bdfd7affeb7dae1b10fa8ff5afb.sw.png)

1. Katika programu ya **Hiring Hub** inayotegemea modeli, nenda kwenye mtazamo wa mfumo wa **Resumes** ukitumia menyu ya upande wa kushoto na nakili URL. Kisha rudi kwenye mtiririko wa wakala, na ubandike URL iliyokopiwa kwenye mali ya **url** ndani ya mali ya `selectAction`.

![Nakili URL ya mtazamo wa mfumo wa Resumes](../../../../../translated_images/3.2_18_CopyResumesSystemViewURL.14d9f55c7db15977a12dfe2a5df95aab5cf241e646b08f9838cff31aaa27a381.sw.png)
1. Unapaswa kuona yafuatayo ambapo sehemu iliyotolewa kwa rangi ya Njano ni maelezo ya mazingira yako ya programu ya **Hiring Hub** inayotumia modeli.

     | Kipengele | Thamani | Maelezo |
     |----------|------------|---------|
     | **Organization URI** | GUID | URL ya shirika la mazingira ya Dataverse/Dynamics 365 |
     | **appid** | GUID | Ili kufungua programu maalum inayotumia modeli, kipengele cha swali cha appid au appname kinatumika. Katika kesi hii, appid inatumika |
     | **viewid** | GUID | Kipengele cha swali ambacho ni kitambulisho cha mtazamo |

       ![Bandika URL](../../../../../translated_images/3.2_19_PasteURL.41f3fdd66190c8ba478857f91c90eb05ee9621243bda7b7ad26eb5802b8e970d.sw.png)

1. Kisha, tutaongeza maadili ya maudhui ya nguvu kwa mali kadhaa. Wacha tuanze na maandishi yatakayoonyesha rejeleo la Nambari ya Resume ya safu iliyoundwa na kichocheo cha tukio kwa uhuru.

      Chagua ikoni ya **paneli** ili kupakia paneli ya hatua.

       ![Chagua ikoni ya paneli](../../../../../translated_images/3.2_20_SelectPannelIcon.786a4147ba12e0e62648c66f14fb2b9a7f89b27c3a610f43420e31cb0c9fb5da.sw.png)

1. Shuka chini hadi mstari ambapo unaona mali ya `text` kwa `RESUME NUMBER PLACEHOLDER`. Toa thamani ya placeholder na uifute.

       ![Futa placeholder](../../../../../translated_images/3.2_21_DeleteResumeNumberPlaceholder.6ffd7a5a073f9d9a11e0e119c87e827243de237f70ebc3ab37dfdd36de615130.sw.png)

1. Bonyeza kati ya alama za nukuu mbili na uchague ikoni ya **radi** au ikoni ya **fx** upande wa kulia.

      Katika kichupo cha **Dynamic Content** chagua kipengele cha **ResumeNumber** na uchague **Add**.

       ![Ongeza kipengele cha ResumeNumber](../../../../../translated_images/3.2_22_SelectResumeNumberParameter.de5a6eecb3ee092441d841ad137dfecd9f8d503a370ff60eb5ccdc0267e37df0.sw.png)

1. Kipengele cha **ResumeNumber** sasa kitaongezwa kama maudhui ya nguvu kwa mali ya `text`.

       ![Maudhui ya nguvu ya ResumeNumber](../../../../../translated_images/3.2_23_ResumeNumberDynamicContent.129a566ac6e9d448b268b828da5766a7056779ac167f65b498e2ca21d703b7f0.sw.png)

1. Tutarudia hatua hizo hizo kwa `RESUME NAME PLACEHOLDER`. Shuka chini hadi mstari ambapo unaona mali ya `text` kwa `RESUME NAME PLACEHOLDER`. Toa thamani ya placeholder na uifute.

       ![Resume Name Placeholder](../../../../../translated_images/3.2_24_ResumeNamePlaceholder.6c879b99ae375892f7e0a511bfedd5fa9e60a8dea71ea2a44c2a7a04c8389f43.sw.png)

1. Bonyeza kati ya alama za nukuu mbili na uchague ikoni ya **radi** au ikoni ya **fx** upande wa kulia.

      Katika kichupo cha **Dynamic Content** chagua kipengele cha **ResumeTitle** na uchague **Add**.

       ![Ongeza kipengele cha ResumeTitle](../../../../../translated_images/3.2_25_SelectResumeTitleParameter.18c769bbd2c60e362a56f6055e151ed6287903cb625addcdfbb43044828d7378.sw.png)

1. Kipengele cha **ResumeTitle** sasa kitaongezwa kama maudhui ya nguvu kwa mali ya `text`.

       ![Maudhui ya nguvu ya ResumeTitle](../../../../../translated_images/3.2_26_ResumeTitleDynamicContent.7219e078f71fc0d5d4a6bb228ba2d53f0898ba26a27c5eb859df90d12dd52c70.sw.png)

1. Tutarudia hatua hizo hizo kwa thamani ya **Due Date** inayowakilisha wakati mwajiri anapaswa kukagua resume. Shuka chini hadi mstari ambapo unaona mali ya `text` kwa `May 21, 2023`.

       ![Chagua Ruhusu ufikiaji](../../../../../translated_images/3.2_27_DueDatePlaceholder.17c6003cc9ec1141b0aeb5cde203098a7f5534fa11f01a3cbffb66206ed1633a.sw.png)

1. Futa thamani ya placeholder ya tarehe hii na bonyeza kati ya alama za nukuu mbili.

       ![Futa](../../../../../translated_images/3.2_28_DeleteDueDatePlaceholder.9a3df55fb3c9ed72e61e0a60dc3344335b0444ff537c9fb51036b0442a85d268.sw.png)

1. Chagua ikoni ya **radi** au ikoni ya **fx** upande wa kulia na katika kichupo cha **Function**, ingiza usemi ufuatao na uchague **Add**.

       ```text
       addDays(utcNow(), 3, 'MMM dd, yyyy')
       ```

      Usemi huu unatumia kazi mbili.

     | Kazi | Maelezo |
     |----------|------------|
     | **addDays** | Huongeza idadi maalum ya siku kwa tarehe iliyotolewa na kurudisha tarehe inayotokana katika muundo wa maandishi |
     | **utcNow** | Hurejesha tarehe na wakati wa sasa katika muundo wa Universal Time (UTC) kama maandishi. |

      Kwa thamani ya utcNow, tunaunda tarehe kuwa mwezi na tarehe, ikifuatiwa na mwaka.

       ![Usemi wa Due Date](../../../../../translated_images/3.2_29_01_ExpressionDueDate.a4fa31985f5500971f2fc6da0e81e008af12be19d54a30a240764b74a4b2dbcb.sw.png)

      Usemi sasa utaongezwa kwa mali ya `text`.

       ![Usemi wa Due Date](../../../../../translated_images/3.2_29_02_ExpressionDueDate.6159288450731c7b09628af70f0c9a6d92590ca7c7e39e8a524ae8af7c511f2c.sw.png)

1. Mwisho, tutasasisha URL kwa mali ya `url` ndani ya mali ya safu ya `actions` chini ya mzigo wa JSON. URL ya placeholder ya sasa itabadilishwa na URL ya safu ya Resume katika programu ya **Hiring Hub** inayotumia modeli. Hii itamruhusu Mwajiri kuchagua hatua ya `Action.OpenURL` ya kadi ya adaptive na kuelekezwa kwenye Resume katika programu inayotumia modeli.

       ![Futa placeholder ya URL ya View Resume](../../../../../translated_images/3.2_30_ViewResumeURLPlaceholder.f27af6cadfb54fb977f0b46ea3ec42ee0638d38ebc5d294eff5da52abf9d4a1b.sw.png)

1. Katika programu ya **Hiring Hub** inayotumia modeli, fungua safu katika mtazamo wa mfumo wa **Resumes** ukitumia menyu ya upande wa kushoto. Safu ya resume itapakiwa kama fomu katika programu inayotumia modeli.

      Nakili URL ya safu ya Resume.

    ??? info "Jinsi ya kurudi kwenye programu ya **Hiring Hub** inayotumia modeli ikiwa ulitoka/kufunga"

        1. Tembelea [https://make.powerapps.com](https://make.powerapps.com) na hakikisha uko katika mazingira yako ya msanidi programu unayotumia kwa mazoezi haya ya maabara, vinginevyo badilisha kwenda kwake.
        
        ![Tembelea make.powerapps.com](../../../../../translated_images/3.2_31_Note_01_BrowseToURL.a13dfc8b05a0b34f3a4c853f3d3e418864176b52b1b40c069da7712af5562aa5.sw.png)

        1. Chagua **Apps** katika paneli ya menyu ya upande wa kushoto na kwa programu ya **Hiring Hub** inayotumia modeli, chagua ikoni ya **Play** ili kuipakia kwenye kivinjari chako.
        
        ![Chagua programu ya Hiring Hub inayotumia modeli](../../../../../translated_images/3.2_31_Note_02_HiringHubApp.a09b6ea28b4fea8932809cb847cb0ea3d8faeb7b7b5604852de1f46ab1e9741b.sw.png)

       ![Nakili URL ya safu ya Resume](../../../../../translated_images/3.2_31_CopyResumeURL.f6156f8792526129c2613922f0137221b2944fa8ffe7c04766d710521ad8765b.sw.png)

1. Kisha rudi kwenye mtiririko wa wakala, toa thamani ya placeholder ya URL ya sasa na uifute.

       ![Futa placeholder ya URL ya safu ya Resume](../../../../../translated_images/3.2_32_SelectResumeURLPlaceHolder.8db783de292428eaa8937242eba4a54ebb1df7bf4c1bc9391b016ee545fb2b9f.sw.png)

1. Kisha bandika URL iliyokopiwa kwenye mali ya **url** ndani ya mali ya `url`.

       ![Bandika URL ya safu ya Resume iliyokopiwa](../../../../../translated_images/3.2_33_PasteResumeRowURL.d7ba92493d7597b89f75e2f17f76846ac17a9ba89c2e36729dc6b5dc1599b047.sw.png)

1. Unapaswa kuona yafuatayo. Futa thamani ya kitambulisho cha `GUID` mwishoni. Tutabadilisha maudhui haya ya nguvu - kipengele cha **ResumeId**.

       ![Futa placeholder ya URL ya View Resume](../../../../../translated_images/3.2_34_DeleteViewResumePlaceholderURL.7b26209eaeef6dc0a21b16140d05fe2f0e38de5f714575edd24d21dded58102a.sw.png)

1. Chagua ikoni ya **radi** au ikoni ya **fx** upande wa kulia.

      Katika kichupo cha **Dynamic Content** chagua kipengele cha **ResumeId** na uchague **Add**..

       ![Kipengele cha ResumeId](../../../../../translated_images/3.2_35_ResumeIdParameter.3dc710a7f5216944387f4d5f82c0a372eee23ee5259dec04147ad00e9c454d7d.sw.png)

1. Kipengele cha **ResumeId** kitaongezwa kama maudhui ya nguvu. Yafuatayo yaliyotolewa kwa rangi ya Njano ni maelezo ya mazingira yako ya programu ya **Hiring Hub** inayotumia modeli.

     | Kipengele | Thamani | Maelezo |
     |----------|------------|---------|
     | **Organization URI** | GUID | URL ya shirika la mazingira ya Dataverse/Dynamics 365 |
     | **appid** | GUID | Ili kufungua programu maalum inayotumia modeli, kipengele cha swali cha appid au appname kinatumika. Katika kesi hii, appid inatumika |
     | **id** | GUID | Kipengele cha swali ambacho ni kitambulisho cha safu ya Resume |

       ![Maudhui ya nguvu ya ResumeId](../../../../../translated_images/3.2_36_ResumeIdDynamicContent.a1a40dfb4a83b60f1b75b02160890e3fec41c2c7df8adf32e02d652a57c1ee87.sw.png)

1. Tumekamilisha kusanidi hatua ya **Post card in a chat or channel** 👏🏻 Toka kwenye paneli ya usanidi wa hatua kwa kuchagua ikoni ya **x**.

       ![Funga paneli](../../../../../translated_images/3.2_37_CloseActionPanel.23d07107381411aa9494ef36fb240682a0727a63e6f15082074b34a1defd517b.sw.png)

1. Mwisho, tutasanidi hatua ya mwisho, **Respond to the agent** kwa kutuma maandishi kurudi kwa wakala kumaliza usindikaji.

      Katika hatua ya **Respond to the agent**, chagua **+Add an output**.

       ![Chagua Ongeza matokeo](../../../../../translated_images/3.2_38_AddAnOutput.de1a0e49033cb077eb5d2c226152bbb06dc12fb95d0496c69d469eecdb46c0ae.sw.png)

1. Chagua **Text** kama aina ya matokeo.

       ![Chagua maandishi kama aina ya matokeo](../../../../../translated_images/3.2_39_SelectText.4e1e82c35fe9d1b569b668092d405aa9b0c81fbe67e7de68a660f2083ed3afdd.sw.png)

1. Ingiza yafuatayo kama jina la matokeo.

       ![Matokeo ya Kumaliza Mazungumzo](../../../../../translated_images/3.2_40_EndConversationOutput.e392b58847d8439443c89459fccbbd88d4ea5e5fa562749b77407c46b9ff4ca4.sw.png)

1. Ingiza yafuatayo kama thamani ya matokeo.

       ```text
       Finished
       ```

       ![Thamani ya Matokeo ya Kumaliza Mazungumzo](../../../../../translated_images/3.2_41_EndConversationOutputValue.2cb836900ee9fca802926676e613b077938f1106cc16e77ddd77af64ce92dcc8.sw.png)

1. Sasa tumekamilisha kusanidi mtiririko wa wakala. Chagua **Save draft** kuhifadhi mtiririko wa wakala. Ujumbe wa uthibitisho utaonekana mara baada ya kuhifadhiwa.

       ![Hifadhi rasimu](../../../../../translated_images/3.2_42_SaveDraft.1bb26eec40faf5d2c244d93f869344915e90423623e07e02cac2c1f8c73d1a4a.sw.png)

1. Kabla ya kuchapisha mtiririko wa wakala, tunahitaji kusasisha maelezo ya mtiririko wa wakala. Chagua kichupo cha **Overview** na uchague **Edit**.

      Katika sehemu ya jina la mtiririko, ingiza yafuatayo.

       ```text
       Notify Teams Applicant channel
       ```      

      Baadaye, chagua ikoni ya **Refresh** ili kusasisha maelezo ya mtiririko wa wakala ukitumia AI.

      Kisha chagua **Save** kuhifadhi maelezo yaliyosasishwa ya mtiririko wa wakala.

       ![Hariri na hifadhi maelezo](../../../../../translated_images/3.2_43_EditDetails.f0c9b53a9c1b29e4aa3c34774680559ae9173f77b3a37817bab2296b77ffcca7.sw.png)

1. Rudi kwenye kichupo cha **Designer** na chagua **Publish** kuchapisha mtiririko wa wakala. Ujumbe wa uthibitisho utaonekana mara baada ya kuhifadhiwa.

       ![Chapisha mtiririko wa wakala](../../../../../translated_images/3.2_44_PublishAgentFlow.3014e6de5e53aa5fc2021bf6e11b901c4990b4fbb4d4cee33cc6d5b6cc641ed8.sw.png)

1. Mtiririko wa wakala sasa unahitaji kuongezwa kama zana katika **Application Intake Agent**. Rudi kwenye **Hiring Agent** na chagua kichupo cha **Agents**, kisha chagua **Application Intake Agent**.

       ![Chagua Application Intake Agent](../../../../../translated_images/3.2_45_ApplicationIntakeAgent.0446b1762d0f499e880e7984f59669639193566f72539cd4fba5c62cd1fe8726.sw.png)

1. Katika sehemu ya **Details** ya wakala, tutasasisha sehemu ya **Description**. Nakili yafuatayo na bandika mwishoni mwa maandishi ya maelezo.

       ```text
       na pia kuarifu chaneli ya Teams Applicant
       ```

       ![Sasisha Maelezo ya Wakala](../../../../../translated_images/3.2_46_UpdateAgentDescription.56344699cd3cc5e417e8f95362ed2288d0c0391f33bd98872e7e008a545175f0.sw.png)

1. Kisha, tutaongeza mtiririko wa wakala kama zana. Shuka chini na chagua **+ Add**.

       ![Chagua Ongeza](../../../../../translated_images/3.2_47_AddTools.c7557e272bd731129dffe9edebba3b04170d27806aaa14fffbe3d66b7b61808b.sw.png)

1. Chagua mtiririko wa wakala ulioundwa awali, **Notify Teams Applicant Channel**.

       ![Chagua mtiririko wa wakala](../../../../../translated_images/3.2_48_NotifyTeamsApplicantChannelAgentFlow.5985f570786edef4eac93455f7a07978c0daf54e1371660bfd56a4c16b6aaf79.sw.png)

1. Chagua **Add and configure** kisha.

       ![Chagua Ongeza na usanidi](../../../../../translated_images/3.2_49_AddAndConfigure.c2d6cccfa9e4bb23ff58b615ad16d0b3ade4ef867b73b9196a45df6990d8072f.sw.png)

1. Katika sehemu ya **Inputs** ya mtiririko wa wakala, pembejeo tatu tulizosanidi awali katika mtiririko wa wakala zinaonekana. Kwa chaguo-msingi, usanidi wa **Fill using** umewekwa kwa **Dynamically fill with AI**. Tutahifadhi mpangilio huu kama ulivyo kwa kuwa maelekezo kutoka kwa kichocheo cha tukio (katika hatua ya mwisho, **Sends a prompt to the specified copilot for processing** - hii ni hatua za 38-44 za **Lab 3.1 - Automate uploading resumes to Dataverse received by email**) yatakuwa na maadili ya kipengele ambacho AI itachambua.

       ![Pembejeo za mtiririko wa wakala wa zana](../../../../../translated_images/3.2_50_Inputs.9fbb57b83b533d5a60f957505bb1e5430886ec9e6c70c10ed1c641d6b33fcc21.sw.png)

1. Sasa kwa kuwa zana imeongezwa kwenye **Application Intake Agent**, maelekezo ya wakala yanahitaji kusasishwa. Chagua ikoni ya **back arrow** kurudi kwenye orodha ya mawakala.

       ![Chagua ikoni ya mshale wa kurudi](../../../../../translated_images/3.2_51_SelectBack.6a9a55176d931895777822d3f9276d5d12ffe379a8860dd521e1c895e8188bba.sw.png)

1. Chagua **Application Intake Agent** katika kichupo cha **Agents** cha **Hiring Agent**.

       ![Chagua Application Intake Agent](../../../../../translated_images/3.2_52_SelectApplicationIntakeAgent.039140313422e833389fd134b3a70a0eed11ba175ede5dbdc4abcce6004c7d2d.sw.png)

1. Katika sehemu ya **Instructions**, ingiza mstari mpya baada ya maelekezo ya `2.Post-Upload`. Nakili na bandika maelekezo yafuatayo.

       ```text
       Mchakato wa Kupakia Resume kupitia Barua Pepe
       1. Unapopokea ujumbe, **Tuma [ResumeId (text)] = "1680265f-5793-f011-b41b-7c1e525be9f7" na [ResumeTitle (text_1)] = "TAYLOR TESTPERSON (FICTITIOUS).pdf" na [ResumeNumber (text_2)]= "R01026" kwa Zana "Notify Teams Applicant channel"** katika wakala wa mtoto "Application Intake Agent", piga [AGENT FLOW PLACEHOLDER]
       ```

       ![Sasisha maelekezo ya Application Intake Agent](../../../../../translated_images/3.2_53_PasteCopiedInstructions.f24ed715e907cf023449a54b894354ca1252b198e9be694eec2875f7f647f9c2.sw.png)

1. Toa mwangaza kwa maandishi `[AGENT FLOW PLACEHOLDER`.

       ![Toa mwangaza kwa placeholder](../../../../../translated_images/3.2_54_HighlightPlaceholder.6c3fcac3c8f4fb6e5cce2dbd6b6548b84652d009e20fa4a01183a9a1b42b24fb.sw.png)

1. Ingiza herufi ya mbele, `/`, na uchague zana ya **Notify Teams Applicant Channel**.

       ![Chagua zana ya Notify Teams Applicant Channel](../../../../../translated_images/3.2_55_NotifyTeamsApplicatnChannelTool.2e3dd1e9ee9b2dfe10e1f2feb7e3b74b08856ce3afb16dafae1f2c4b73da904f.sw.png)
1. Mtiririko wa wakala sasa utaanzishwa na **Application Intake Agent** kulingana na maelekezo, baada ya hatua ya mwisho (**Kutuma maelekezo kwa copilot maalum kwa ajili ya usindikaji**) katika kichocheo cha tukio kutuma maelekezo yanayojumuisha thamani za vigezo kurudi kwa wakala.

      Chagua **Hifadhi** ili kuhifadhi maelekezo yaliyosasishwa kwa **Application Intake Agent**.

       ![Chagua Hifadhi](../../../../../translated_images/3.2_56_Save.6abb0131f96b20d3753b5990313eaea6a237bef2bf0e2103a2ee5ba570fd7c04.sw.png)

1. Maelekezo sasa yatasasishwa mara tu wakala atakapohifadhiwa.

       ![Maelekezo yamesasishwa](../../../../../translated_images/3.2_57_InstructionsUpdated.5bfbfe2ca1da16284358a9917246bd8676cd6c095839ed1c69361d992cacd2b3.sw.png)

1. Sasa tunahitaji **Kuchapisha** **Hiring Agent**. Chagua **Chapisha** kwenye kona ya juu kulia, na kwenye _modal ya Chapisha wakala huyu_ itakayoonekana, chagua **Chapisha**.

       ![Chapisha Hiring Agent](../../../../../translated_images/3.2_58_PublishAgent.e7ec81c81b735de0cd11516aa944c759ea510e2b0bc9acf9f00d42d788896991.sw.png)

1. Mara tu imechapishwa, ujumbe wa uthibitisho utaonekana kwamba wakala amechapishwa.

       ![Ujumbe wa uthibitisho](../../../../../translated_images/3.2_59_AgentPublished.d15e01232544cf08943260dfbf61c92339dbd187620349e7c5a43add4796ed12.sw.png)

Sasa tunaweza kujaribu wakala!

### Maabara 3.3 - Jaribu kichocheo cha tukio

1. Ili kutekeleza kichocheo cha tukio, barua pepe inahitaji kutumwa ikiwa na faili ya pdf ya Wasifu. Katika Outlook, andika ujumbe mpya wa barua pepe.

     | Sehemu ya Barua Pepe | Maelezo |
     |----------|------------|
     | **Kwa mpokeaji** | Tumia akaunti yako uliyoingia kama thamani |
     | **Kiambatisho cha Faili** | Pakia faili ya [TAYLOR TESTPERSON (FICTITIOUS)](../../../../../docs/operative-preview/test-data/resumes/TAYLOR%20TESTPERSON%20(FICTITIOUS).pdf)  |
     | **Mwili** | Nakili na ubandike maandishi yafuatayo kama mwili wa barua pepe  |

       ```text
       Mheshimiwa Meneja wa Ajira,

       Ninaandika kuelezea nia yangu ya kujiunga na nafasi ya Mhandisi Mwandamizi wa Power Platform katika shirika lako. Kwa uzoefu wa zaidi ya miaka tisa wa kutoa suluhisho salama na linaloweza kupanuka kwenye majukwaa ya wingu ya Microsoft, nina uhakika wa uwezo wangu wa kuchangia kwa ufanisi katika timu yako.

       Katika jukumu langu la hivi karibuni kama Mhandisi Kiongozi wa Power Platform, nilitengeneza mfumo wa kiotomatiki wa kuchakata wasifu, kupunguza kazi za mikono na kuboresha uwezo wa kutafuta. Nimewasilisha programu za usimamizi wa kesi za HR, kuanzisha mtiririko wa suluhisho, na kutekeleza ukaguzi wa PR ili kuboresha muda wa utekelezaji. Utaalamu wangu unajumuisha Power Apps, Power Automate, Power Pages, Dataverse, na huduma mbalimbali za Microsoft 365, pamoja na ujumuishaji na Graph/REST APIs na Azure Functions.

       Hapo awali, nilitengeneza idhini za Timu kwa kutumia kadi za adaptive, kupunguza muda wa idhini hadi siku hiyo hiyo, na kuunda mifumo thabiti ya kushughulikia makosa. Historia yangu pia inajumuisha kuhamisha mtiririko wa kazi wa zamani kwenda Power Automate na kujenga milango ya huduma binafsi iliyopokelewa na mamia ya wafanyakazi.

       Nina shahada ya B.Sc. katika Sayansi ya Kompyuta na nimeidhinishwa kama Mendelezaji wa Power Platform (PL-400) na Mbunifu wa Suluhisho (PL-600). Pia nina shauku ya kufundisha na nimejitolea na vikundi vya watengenezaji wa ndani.

       Tafadhali pata CV yangu imeambatanishwa kwa ajili ya kuzingatia kwako. Ningependa fursa ya kujadili jinsi ujuzi na uzoefu wangu unavyolingana na mahitaji yako.

       Asante kwa muda wako na kuzingatia.

       Kwa heshima,
       Taylor Testperson
       ```

       **Tuma** barua pepe mara tu unapomaliza kuiandika.

       ![Andika barua pepe na kiambatisho cha faili ya PDF](../../../../../translated_images/3.3_01_ComposeEmailWithAttachment.eccba1bbcc276b4373277b193a66d8818b712c6ab9468ee12902545522b670f7.sw.png)

1. Katika lango la Power Automate maker kwa mtiririko wa kichocheo cha tukio, chagua ikoni ya **Sasisha** ili kuona mtiririko wa mtiririko uliofanikiwa kwa barua pepe iliyotumwa.

       ![Chagua ikoni ya sasisha ili kuona mtiririko wa mtiririko](../../../../../translated_images/3.3_02_FlowRun.0e99756ebc5fba371dc72719b0619736626934461e58db2dc153535cbabcc1e8.sw.png)

1. Rudi kwenye Copilot Studio katika **Hiring Agent** chagua kichupo cha **Shughuli**.

       ![Chagua kichupo cha Shughuli](../../../../../translated_images/3.3_03_SelectActivity.11d78735a8a2a1f64443d285deb47f2bacc5bd53ded039791215f9465dbc3f76.sw.png)

1. Kichupo cha **Shughuli** kitajitokeza ambacho kitaonyesha shughuli zote za **Hiring Agent**. Kutakuwa na shughuli yenye jina la **Automated** ambayo ina hali ya **Imekamilika**. Shughuli hii inawakilisha kichocheo cha tukio na mtiririko wa wakala uliyoanzishwa.

       ![Shughuli imekamilika](../../../../../translated_images/3.3_04_StatusComplete.dbe14ffb9414b0f4d869841426c4ca595d7a664bf13f4b5e2e29a4e251b9064c.sw.png)

1. Chagua shughuli, na chagua kichocheo cha tukio kwenye ramani ya shughuli. Kwenye paneli ya upande wa kulia, angalia jinsi vigezo vya pembejeo kwenye maelekezo vinavyoshikilia thamani za `Resume Id`, `Resume Title` na `Resume Number` kutoka safu ya **Dataverse** iliyoundwa. Hii ilitokana na thamani za maudhui ya nguvu zilizosanidiwa awali katika hatua za 18 - 27 za **Lab 3.1 - Automate uploading resumes to Dataverse received by email**.

       ![Kichocheo cha tukio](../../../../../translated_images/3.3_05_EventTrigger.cbd73cd43a79e88e782d1e47ac8ddacdbe30d582a4da61a31010f44a9dacdd12.sw.png)

1. Nenda tena kwenye programu ya **Hiring Hub** inayotegemea modeli na katika **Muonekano wa mfumo wa Wasifu**, chagua **Sasisha** ili kusasisha muonekano. Safu mpya ya wasifu iliyotumwa kwa barua pepe sasa itakuwa imeorodheshwa kwani iliundwa kupitia kichocheo cha tukio.

       ![Safu ya wasifu imeundwa](../../../../../translated_images/3.3_06_ResumeRowCreated.9ab850d8d7c066aad8531409b00a4de5f214b4d8d209d39fa0d493d5c55e041d.sw.png)

1. Rudi kwenye Copilot Studio na chagua mtiririko wa wakala wa **Notify Teams Applicant Channel** ndani ya **Application Intake Agent** kwenye ramani ya shughuli. Kwenye paneli ya upande wa kulia, angalia jinsi pembejeo zilivyo na thamani kutoka safu ya Dataverse. Hii ilitokana na maelekezo yaliyotumwa na hatua ya mwisho (**Kutuma maelekezo kwa copilot maalum kwa ajili ya usindikaji**) katika kichocheo cha tukio ambacho kina thamani za vigezo kutoka safu mpya ya Dataverse. Hivi ndivyo tunavyoweza kupitisha thamani za vigezo kutoka kwa vichocheo vya tukio kwenda kwa mtiririko wa wakala.

       ![Chagua mtiririko wa wakala](../../../../../translated_images/3.3_07_NotifyTeamsApplicantChannel.9b6c4654197efca9c88dde72cfb38812038ef5f6bdce8c309046c02643092bb6.sw.png)

1. Hatimaye, hebu tuangalie kadi ya adaptive iliyochapishwa kwenye chaneli katika **Microsoft Teams**. Kwenye chaneli, tutaona kadi ya adaptive inayoonyesha taarifa kuhusu safu mpya ya Wasifu iliyoundwa katika Dataverse. Peleka kipanya juu ya kiungo mwanzoni mwa kadi ya adaptive, angalia jinsi URL ilivyo URL ya muonekano wa mfumo wa Wasifu ambayo tuliisanidi awali katika payload ya JSON (hatua za 15 - 19 za **Lab 3.2 - Notify a Teams channel using an adaptive card**).

       ![Kadi ya Adaptive URL ya Muonekano wa Mfumo wa Jedwali la Wasifu](../../../../../translated_images/3.3_08_AdaptiveCardResumeTableURL.5a59821d60c8698e5c9e4746806b975bbdf3c4400dc0bb02a53f350bdea569e9.sw.png)

1. Chagua kiungo, na utaelekezwa kwenye muonekano wa mfumo wa Wasifu katika programu ya **Hiring Hub** inayotegemea modeli kwenye kivinjari chako.

       ![Muonekano wa mfumo wa Wasifu katika programu ya Hiring Hub inayotegemea modeli](../../../../../translated_images/3.3_09_ResumeTableSystemView.81f52ab85aadda7d9131ced31d024fb4b411ccf600dd230d9d7e931c476e271c.sw.png)

1. Rudi kwenye kadi ya adaptive iliyochapishwa kwenye chaneli katika Microsoft Teams. Wakati huu, peleka kipanya juu ya **View Resume** ambayo ni hatua ya `Action.OpenURL` ya kadi ya adaptive. Angalia jinsi URL ilivyo safu ya Wasifu ambayo tuliisanidi awali katika payload ya JSON (hatua za 30 - 36 za **Lab 3.2 - Notify a Teams channel using an adaptive card**).

       ![Kadi ya Adaptive URL ya safu ya Wasifu](../../../../../translated_images/3.3_10_AdaptiveCardResumeRowURL.2063a075c2d4adec27dfcc2ea4c01a385d791e0c4fc127caba912bde14bf77d6.sw.png)

1. Chagua hatua hiyo, na utaelekezwa kwenye fomu ya safu ya Wasifu katika programu ya **Hiring Hub** inayotegemea modeli kwenye kivinjari chako.

       ![Safu ya Wasifu katika programu ya Hiring Hub inayotegemea modeli](../../../../../translated_images/3.3_11_ResumeRow.6f051ed512d396712a04ee98319d6643516e0bbfbf8a9de07d3df7d264563b9c.sw.png)

## ✅ Kazi Imekamilika

Hongera! 👏🏻 Kazi nzuri, Operative.

✅ Kichocheo cha tukio: umeunda kichocheo cha tukio kinachopitisha thamani za vigezo vya Dataverse kwa mtiririko wa wakala.  
✅ Umeunda mtiririko wa wakala: unatumia thamani za vigezo vya Dataverse kuchapisha kadi ya adaptive kwenye chaneli katika Microsoft Teams kuwajulisha timu ya uajiri ya HR.  
✅ Umesasisha maelekezo ya wakala wa mtoto: kuanzisha mtiririko mara tu kichocheo cha tukio kinapokamilika.  

Hii inamwezesha **Hiring Agent** kufanya kazi kwa uhuru kila wakati wasifu unapopokelewa kama viambatisho vya barua pepe na kuwajulisha timu ya uajiri ya HR kwa ukaguzi wa mikono.

Hii ni mwisho wa **Lab 03 - Kuendesha barua pepe za maombi ya mgombea kiotomatiki**, chagua kiungo hapa chini ili kuendelea na somo linalofuata.

⏭️ [Nenda kwenye somo la **Kuandika Maelekezo ya Wakala**](../04-agent-instructions/README.md)

## 📚 Rasilimali za Kimbinu

📖 [Fanya wakala wako kuwa wa kujitegemea katika Copilot Studio](https://learn.microsoft.com/training/modules/autonomous-agents-online-workshop/?WT.mc_id=power-188561-ebenitez)  

📖 [Ongeza kichocheo cha tukio](https://learn.microsoft.com/microsoft-copilot-studio/authoring-trigger-event?WT.mc_id=power-188561-ebenitez)  

📖 [Tumia mitiririko ya wakala na wakala wako](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-188561-ebenitez)  

📖 [Utangulizi wa vichocheo vya Power Automate](https://learn.microsoft.com/power-automate/triggers-introduction?WT.mc_id=power-188561-ebenitez)  

📖 [Kutumia mitiririko ya Power Automate na mawakala](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create?WT.mc_id=power-188561-ebenitez)  

📖 [Kuzuia upotevu wa data kwa Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention?WT.mc_id=power-188561-ebenitez)  

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.