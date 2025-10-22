<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "180f9cc0b40527f61be092c9b0f72aba",
  "translation_date": "2025-10-22T19:36:50+00:00",
  "source_file": "docs/recruit/06-create-agent-from-conversation/README.md",
  "language_code": "tl"
}
-->
# 🚨 Misyon 06: Gumawa ng custom na ahente gamit ang natural na wika sa Copilot at i-ground ito gamit ang iyong data

## 🕵️‍♂️ CODENAME: `OPERATION AGENT FORGE`

> **⏱️ Oras ng Operasyon:** `~75 minuto`

🎥 **Panoorin ang Walkthrough**

[![Thumbnail ng video para sa paggawa ng custom na ahente](../../../../../translated_images/video-thumbnail.9d5fddc1190fd4a04537488795821ac2f88fdcfe00e017f6e575a33f724e39cb.tl.jpg)](https://www.youtube.com/watch?v=qZTtQVncGFg "Panoorin ang walkthrough sa YouTube")

## 🎯 Misyon Brief

Maligayang pagbabalik, Tagalikha ng Ahente. Sa misyon na ito, ikaw ang nasa kontrol ng pinakamakapangyarihang kakayahan sa Copilot Studio - ang paggawa ng custom na ahente mula sa simula gamit lamang ang natural na wika… at pagpapalakas nito gamit ang iyong sariling data.

Hindi lang ito basta chatbot. Gumagawa ka ng digital na katrabaho na may kaalaman - isang ahente na kayang mag-isip, tumugon, at mag-refer sa totoong impormasyon ng enterprise.

Ang iyong sandata? Natural na wika. Ang iyong misyon? Magdisenyo, mag-train, at mag-test ng ganap na customized na helpdesk agent na sumasagot sa mga tanong sa IT gamit ang SharePoint, mga na-upload na file, o mga URL ng kumpanya.

Simulan natin ang paggawa ng iyong ahente mula sa simula.

## 🔎 Mga Layunin

Sa misyon na ito, matututunan mo:

1. Pag-unawa kung ano ang mga custom na ahente at paano ito naiiba sa mga pre-built na template
1. Paggawa ng mga ahente gamit ang natural na wika at disenyo ng pag-uusap sa Copilot
1. Pag-ground ng mga ahente gamit ang mga mapagkukunan ng kaalaman ng enterprise kabilang ang SharePoint, mga dokumento, at mga website
1. Pag-aaral tungkol sa generative orchestration at kung paano dinamikong naghahanap at tumutugon ang mga ahente gamit ang maraming mapagkukunan ng data
1. Paggawa at pag-test ng ganap na functional na IT helpdesk agent na kayang sumagot sa mga tanong mula sa iyong sariling data

## 🤔 Ano ang _custom_ na ahente?

Ang custom na ahente ay isang chatbot o virtual assistant na ikaw ang gumagawa at nagdidisenyo sa Copilot Studio upang tumulong sa mga user sa mga partikular na gawain o tanong. Tinatawag itong custom dahil:

- **Ikaw ang nagtatakda ng layunin** - tumulong sa mga user na mag-request ng bakasyon, mag-check ng status ng order, magbigay ng tulong sa mga tanong na may kaugnayan sa IT.
- **Ikaw ang nagdidisenyo ng pag-uusap** - kung ano ang sasabihin ng ahente at kung paano ito dapat tumugon.
- **Ikaw ang nag-ground nito gamit ang iyong sariling data** - ikonekta ito sa data ng iyong enterprise sa pamamagitan ng built-in na mga suportadong mapagkukunan ng kaalaman.
- **Ikaw ang nagkokonekta nito sa iyong sariling mga sistema o aplikasyon** - pumili mula sa mga connector, flow, REST API, at model context protocol server.

!!! note
    Isipin mo ito: gumagawa ka ng sarili mong digital na katulong na kayang makipag-usap sa mga user at magkumpleto ng mga gawain para sa kanila tulad ng pagsagot sa mga tanong, pagkolekta ng impormasyon na kinakailangan ng isang proseso, o pagkonekta sa data ng iyong enterprise.

### 🤖 Ano ang kayang gawin ng isang custom na ahente?

Ang isang custom na ahente ay kayang:

- Magtanong sa mga user ng impormasyon tulad ng pangalan, petsa, o mga preference.
- I-save ang impormasyong iyon sa isang database o table.
- Maghanap ng data batay sa mga tanong na itinatanong at sumagot sa mga ito.
- Magtrabaho nang autonomously nang hindi direktang nakikipag-ugnayan ang mga user sa ahente.
- Mag-trigger ng mga aksyon alinman sa on-demand sa pamamagitan ng direktang pakikipag-ugnayan ng user o autonomously tulad ng pagpapadala ng email o paggawa ng mga record.

### 👩🏻‍💻 Bakit gumamit ng custom na ahente?

- Nakakatipid ng oras sa pamamagitan ng pag-automate ng mga paulit-ulit na gawain.
- Nagbibigay sa mga user ng friendly at guided na karanasan.
- Naaangkop sa iyong negosyo o pangangailangan ng proyekto.

### ✨ Halimbawa

Gumawa ka ng custom na ahente na tumutulong sa mga empleyado na mag-request ng bakasyon.

Tatanungin nito ang kanilang pangalan, mga petsa ng bakasyon, at pangalan ng kanilang manager, pagkatapos ay ise-save ang impormasyon sa itinalagang sistema na namamahala sa mga request ng bakasyon, tulad ng isang SharePoint list.

Ngayon, sa halip na mag-navigate sa SharePoint list at gumawa ng bagong item, makikipag-chat na lang ang mga empleyado sa ahente.

## 🗣️ Gumamit ng natural na wika upang gumawa ng mga ahente

Dati, natutunan mo kung paano mabilis na gumawa ng mga ahente sa Copilot Studio gamit ang mga prebuilt na template ng ahente sa [Lesson 05 - Magsimula nang mabilis gamit ang mga pre-built na ahente](../05-using-prebuilt-agents/README.md). Sa lesson na ito, mas malalim nating tatalakayin ang karanasan sa conversational creation gamit ang Copilot. Ginagawang madali ng Copilot Studio ang paggawa ng mga ahente sa pamamagitan ng pakikipag-chat sa Copilot, parang may kausap ka lang.

Sa Copilot Studio, hindi mo kailangang magsulat ng code upang gumawa ng ahente. Sa halip, ilarawan mo kung ano ang gusto mong gawin ng iyong ahente sa simpleng wika, at tutulungan ka ng Copilot na buuin ito hakbang-hakbang sa pamamagitan ng isang chat-like na karanasan.

## 🌱 Pero bago ako sa "paglalarawan ng gusto ko" - ano ang gagawin ko?

Ang paglalarawan gamit ang natural na wika upang gumawa ng custom na ahente ay maaaring bagong konsepto para sa iyo. Tuwing ginagamit mo ang Copilot sa mga produkto at serbisyo ng Microsoft, gumagamit ka ng natural na wika sa anyo ng isang _prompt_.

Ang prompt ay ang mensahe o instruksyon na ibinibigay mo sa isang AI agent upang sabihin kung ano ang gusto mong gawin nito. Isipin mo ito bilang pagbibigay ng direksyon sa isang katulong. Kapag mas malinaw ang iyong mga instruksyon, mas madali itong maunawaan ng iyong katulong at maisagawa.

### 🪄 Bakit mahalaga ang mga Prompt

- Ginagabayan nito ang pag-uugali ng ahente.
- Tinutulungan nito ang ahente na maunawaan kung anong uri ng pag-uusap ang dapat gawin.
- Ang magandang prompt ay ginagawang mas kapaki-pakinabang at tumpak ang ahente.

### 📝 Mga Tip sa Pagsulat ng Magandang Prompt

- Maging malinaw at tiyak - sabihin nang eksakto kung ano ang gusto mong gawin ng ahente.
- Mag-isip tulad ng user - ano ang sasabihin ng user? Ano ang dapat sagutin ng ahente?
- Magbigay ng mga halimbawa - kung maaari, magbigay ng sample na interaksyon.

### ✨ Halimbawa

Sabihin nating kailangan ng HR team ng ahente upang tumulong sa mga request ng bakasyon.

Ang prompt ay maaaring:

    “Gusto kong gumawa ng ahente na tumutulong sa mga user na magsumite ng request para sa bakasyon. Kapag sinabi ng user na gusto nilang mag-request ng time off, dapat tanungin ng ahente ang kanilang pangalan, ang petsa ng simula ng kanilang bakasyon, ang petsa ng pagtatapos ng kanilang bakasyon, at ang pangalan ng kanilang manager. Kapag naibigay na ng user ang impormasyong ito, dapat itong i-save ng ahente sa isang SharePoint list na tinatawag na ‘Vacation Requests’ at mag-post ng notification sa isang dedikadong Microsoft Teams channel.”

Bakit gumagana ang prompt na ito:

- **Malinaw na inilalahad ang layunin** - magsumite ng request para sa bakasyon
- **Inilalarawan ang interaksyon ng user** - ano ang sasabihin ng user at ano ang dapat itanong ng ahente
- **Inililista ang kinakailangang data** - pangalan, petsa ng simula, petsa ng pagtatapos, manager
- **Binabanggit kung saan pupunta ang data** - isang SharePoint list na tinatawag na Vacation Requests

## 🔮 OK, nagawa ko na ang aking ahente... paano ko ito i-ground gamit ang kaalaman?

Sa Copilot Studio, ang mga mapagkukunan ng kaalaman ay mga lugar kung saan makakahanap ng impormasyon ang iyong ahente upang makapagbigay ng mas mahusay na sagot. Kapag idinagdag mo ang mga mapagkukunang ito, maaaring kunin ng iyong ahente ang data ng iyong enterprise mula sa mga lugar tulad ng Power Platform, Dynamics 365, mga website, at iba pang mga sistema o serbisyo na ginagamit ng iyong kumpanya.

Ang mga mapagkukunang ito ay nagtutulungan kasama ang AI upang matulungan ang iyong ahente na tumugon nang mas tumpak sa mga tanong ng user, na nakamit sa pamamagitan ng tinatawag na **generative orchestration**.

### 🌿 Ano ang generative orchestration sa konteksto ng mga ahente?

Ang generative orchestration ay nangangahulugan na ang ahente ay gumagamit ng AI upang dinamikong magpasya kung paano sasagutin ang isang tanong sa pamamagitan ng pagsasama ng built-in na kakayahan sa wika nito sa impormasyon mula sa iyong mga idinagdag na mapagkukunan ng kaalaman.

Kapag nagtanong ang isang user, ang ahente:

- Nauunawaan ang tanong gamit ang AI.
- Maaaring magtanong sa mga user ng nawawalang impormasyon sa pamamagitan ng pagbuo ng mga tanong sa oras ng pangangailangan.
- Pinipili ang pinaka-nauugnay na mapagkukunan ng kaalaman.
- Hinahanap ang mga mapagkukunang iyon para sa mga sagot.
- Bumubuo ng natural at kapaki-pakinabang na tugon gamit ang impormasyong nahanap.

### 🏦 Bakit mahalaga ang mga mapagkukunan ng kaalaman?

1. **Mas matalinong mga sagot** - kapag nagdagdag ka ng mga mapagkukunan ng kaalaman, mas makakapagbigay ang iyong ahente ng mas mahusay at tumpak na sagot gamit ang totoong data mula sa iyong organisasyon.

1. **Mas kaunting manual na trabaho** - hindi mo kailangang isulat ang bawat posibleng sagot. Maaaring maghanap ang ahente sa iyong mga idinagdag na mapagkukunan at tumugon nang awtomatiko.

1. **Gumamit ng pinagkakatiwalaang impormasyon** - maaaring kunin ng iyong ahente ang mga sagot mula sa mga sistemang ginagamit mo na tulad ng Dataverse, SharePoint, o mga website ng kumpanya upang magkaroon ng maaasahang impormasyon mula sa pinagkukunan ng katotohanan.

1. **Gumagana kasama ang generative AI** - ang mga mapagkukunan ng kaalaman at AI ay tumutulong sa iyong ahente na maunawaan ang mga tanong at tumugon nang natural, kahit na ang tanong ay hindi pre-programmed o idinagdag bilang starter prompt.

1. **Flexible at expandable** - maaari kang magdagdag ng mga mapagkukunan ng kaalaman anumang oras sa panahon ng setup o sa susunod na panahon, mas nagiging matalino ang iyong ahente habang nagbabago ang iyong mga pangangailangan.

### ✨ Halimbawa

Isipin mong gumawa ka ng ahente upang tumulong sa mga empleyado sa mga tanong sa HR. Idinagdag mo ang dokumento ng patakaran sa HR ng iyong kumpanya at ang site ng SharePoint bilang mga mapagkukunan ng kaalaman.

Kapag tinanong ng isang empleyado, _“Ilang araw ng bakasyon ang pwede kong makuha?”_, gagamitin ng ahente ang generative orchestration upang hanapin ang mga mapagkukunang iyon at sumagot ng tamang patakaran nang hindi mo kailangang isulat ang sagot na iyon nang manu-mano. Nakakatipid ito ng oras sa pag-aaccount para sa bawat posibleng tanong na maaaring itanong ng isang empleyado tungkol sa kanilang mga benepisyo.

## Mga Uri ng Mapagkukunan ng Kaalaman na Maaaring Idagdag

1. **Mga Pampublikong Website**
    - **Ano ang ginagawa nito:** Hinahanap ang mga partikular na website (tulad ng site ng iyong kumpanya) gamit ang Bing.
    - **Bakit ito kapaki-pakinabang:** Magaling para sa pagkuha ng pampublikong impormasyon tulad ng FAQs o mga detalye ng produkto.

1. **Mga Dokumento**
    - **Ano ang ginagawa nito:** Gumagamit ng mga dokumento na direktang ina-upload mo sa iyong ahente, tulad ng mga PDF o Word file. Ang mga na-upload na file ay ligtas na naka-store sa Dataverse.
    - **Bakit ito kapaki-pakinabang:** Pinapayagan ang iyong ahente na sumagot sa mga tanong batay sa mga panloob na gabay, manual, o patakaran.

1. **SharePoint**
    - **Ano ang ginagawa nito:** Kumokonekta sa mga folder o file ng SharePoint gamit ang Microsoft Graph Search.
    - **Bakit ito kapaki-pakinabang:** Perpekto para sa pag-access sa mga dokumento ng team, mga patakaran sa HR, o mga file ng proyekto na naka-store sa SharePoint.

1. **Dataverse**
    - **Ano ang ginagawa nito:** Gumagamit ng structured na data mula sa iyong Dataverse environment tables at rows, at maaaring mag-apply ng mga synonym at glossary definition para sa mga table at column upang mapabuti ang mga sagot ng ahente.
    - **Bakit ito kapaki-pakinabang:** Kapag kailangan mong maghanap ng enterprise data na naka-store sa Dataverse tulad ng impormasyon ng customer.

1. **Real-time na kaalaman gamit ang mga connector**
    - **Ano ang ginagawa nito:** Pinapayagan ang iyong ahente na ma-access ang live na data mula sa ibang mga enterprise system tulad ng Salesforce, ServiceNow, Dynamics 365, AzureSQL, Databricks, at iba pa sa panahon ng pag-uusap, gamit ang sariling mga pahintulot ng user.
    - **Bakit ito kapaki-pakinabang:** Nagbibigay ng up-to-date, secure, at tumpak na mga sagot nang hindi nag-i-store o nagdu-duplicate ng data, ginagawa ang iyong ahente na mas matalino at mas ligtas.

1. **Azure AI Search**
    - **Ano ang ginagawa nito:** Pinapayagan ang iyong ahente na maghanap sa malalaking set ng dokumento na naka-store sa Azure gamit ang semantic at vector search upang maunawaan ang mga tanong ng user.
    - **Bakit ito kapaki-pakinabang:** Nagbibigay ng tumpak, maaasahang mga sagot mula sa mga kumplikadong mapagkukunan ng data, sumusuporta sa mga citation, at mahusay na gumagana para sa malalaking koleksyon ng dokumento na may secure na access control.

## 🔒 Paalala sa seguridad

### Authentication ng mapagkukunan ng kaalaman

Ang ilang mga mapagkukunan tulad ng SharePoint at Dataverse ay nangangailangan ng authentication ng user. Nangangahulugan ito na ang ahente ay magre-refer lamang ng data sa kanyang sagot na pinapayagan ng user na makita. Samantalang ang ibang mga mapagkukunan ay maaaring may karagdagang configuration na kinakailangan para sa ahente na makakonekta dito tulad ng Azure AI Search na nangangailangan ng Azure account at pagtukoy ng uri ng authentication.

## Pagpapabuti ng mga sagot ng iyong ahente sa Copilot Studio

Pagkatapos ma-provision ang iyong ahente mula sa conversational creation experience, gugustuhin mong i-test ang iyong ahente laban sa mga instruksyon na ginawa ng Copilot mula sa iyong prompt. Ang pagpapabuti ng mga sagot ng iyong ahente sa Copilot Studio ay tungkol sa pagtiyak na nauunawaan nito nang malinaw ang iyong mga layunin at may tamang impormasyon upang magamit.

1. **Pagpapino ng mga instruksyon ng ahente** - dito mo sasabihin sa iyong ahente kung paano ito dapat kumilos. Gumamit ng malinaw at tiyak na wika.

    Halimbawa:

    ✅ “Kumilos bilang isang friendly na customer support agent na nagpapaliwanag ng mga bagay nang simple.”

    ❌ “Maging kapaki-pakinabang.” (Masyadong malabo)

1. **Suriin ang tono at wika** - tiyakin na ang tono ng ahente ay tumutugma sa iyong audience.

    Maaari mo itong itakda bilang:

    - Friendly at casual.
    - Propesyonal at concise.
    - Supportive at patient.

1. **Magdagdag o mag-update ng mga mapagkukunan ng kaalaman** - kung kailangan ng iyong ahente na sumagot sa mga tanong tungkol sa isang paksa, tiyakin na may access ito sa tamang impormasyon.

    - Magdagdag ng mga link sa mga website, dokumento, o FAQs.
    - Panatilihing up-to-date ang content.
    - Gumamit ng malinaw at maayos na impormasyon.

1. **Gumamit ng Topics at Triggers** - Kung kailangan ng iyong ahente na mag-handle ng partikular na mga gawain o pag-uusap, maaari kang gumawa ng mga topic na may trigger phrases. Nakakatulong ito upang mas gabayan ang pag-uusap. Matututunan natin ito sa susunod na lesson.

1. **Mag-test gamit ang totoong mga tanong** - subukang magtanong sa iyong ahente ng mga uri ng tanong na maaaring itanong ng mga user.

    Kung hindi maganda ang mga sagot:

    - Ayusin ang system instructions.
    - Magdagdag ng mas maraming halimbawa o kaalaman.
    - I-rephrase ang iyong mga tanong upang makita kung paano ito tumutugon.

1. **Review at iterate** - ang pagpapabuti ng ahente ay isang tuloy-tuloy na proseso!

    Pagkatapos ma-publish:

    - Mangolekta ng feedback mula sa mga user.
    - Magbantay para sa mga karaniwang tanong o kalituhan.
    - Patuloy na i-refine ang setup ng ahente
Gagamitin natin ang parehong use case mula sa [Lesson 03 - Gumawa ng deklaratibong ahente para sa Microsoft 365 Copilot](../03-create-a-declarative-agent-for-M365Copilot/README.md#use-case-scenario)

**Bilang isang** empleyado

**Gusto kong** makakuha ng mabilis at tamang tulong mula sa IT helpdesk agent para sa mga isyu tulad ng problema sa device, pag-troubleshoot ng network, pag-setup ng printer

**Upang** manatiling produktibo at malutas ang mga teknikal na isyu nang walang pagkaantala

Simulan na natin!

### ✨ Mga Kinakailangan

- **SharePoint site**

Gagamitin natin ang **Contoso IT** SharePoint site mula sa [Lesson 00 - Course Setup - Step 3: Gumawa ng bagong SharePoint site](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

Kung hindi mo pa na-set up ang **Contoso IT** SharePoint site, bumalik sa [Lesson 00 - Course Setup - Step 3: Gumawa ng bagong SharePoint site](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

- **Solusyon**

Gagamitin natin ang **Contoso Helpdesk Agent** solution mula sa [Lesson 04 - Paglikha ng Solusyon para sa iyong ahente](../04-creating-a-solution/README.md#41-create-a-solution-publisher).

Kung hindi mo pa na-set up ang **Contoso Agent** solution, bumalik sa [Lesson 04 - Paglikha ng Solusyon para sa iyong ahente](../04-creating-a-solution/README.md#41-create-a-solution-publisher).

### 6.1 Gumamit ng natural na wika upang gumawa ng ahente gamit ang Copilot

!!! warning "Maaaring magkaiba ang mga tanong ng Copilot sa bawat sesyon"

    Ang karanasan sa paglikha ng pag-uusap gamit ang Copilot ay maaaring mag-iba sa bawat pagkakataon kung saan ang mga ibinigay na tanong para sa gabay ay maaaring bahagyang magkaiba kaysa sa dati.

1. Pumunta sa Home page ng Copilot Studio at sa field, ilagay ang sumusunod na prompt na naglalarawan sa IT help desk agent. Ang prompt ay naglalaman ng layunin ng ahente, ang konteksto, ang inaasahang mga gawain, at ang format ng tugon ng ahente.

    ```text
    You are an IT help desk agent. Your goal is to assist users with their IT issues. You can access information from our company's knowledge base at https://support.microsoft.com/en-us. Your responses should be polite and helpful. If a user reports a slow computer, ask about the age of the device, current software versions, and if they've recently installed any new programs. If a user is experiencing trouble logging into their email, guide them through password reset procedures. You should be concise and informative, using step-by-step instructions with bullet points when appropriate.
    ```

      ![Ilagay ang prompt](../../../../../translated_images/6.1_01_Prompt.c4be2ff2cac9fde3659f2e7016e48f01860b55523d3320b3b8450ef2fcb1f51a.tl.png)

1. Ang karanasan sa paglikha ng pag-uusap gamit ang Copilot ay susunod na maglo-load. Makikita mo na ang Copilot ay nasa proseso ng pagtugon sa iyo.

      ![Karanasan sa paglikha ng pag-uusap gamit ang Copilot](../../../../../translated_images/6.1_02_ConversationalCreationExperienceLoads.115eaf4e5a15c1b60bc0d25c97a0d97d462d6c740cfed5de369b2bd8fd1cc8bc.tl.png)

1. Kinukumpirma ng Copilot na ang ahente ay na-set up gamit ang mga ibinigay na tagubilin, at nagtatanong para sa kumpirmasyon sa pangalan ng ahente. Sasabihin natin sa Copilot na pangalanan ang ating ahente bilang,

       ```text
       Contoso Helpdesk Agent
       ```

      ![Palitan ang pangalan ng ahente](../../../../../translated_images/6.1_03_AgentName.a848acea10cd1d3d6ba68fea2b0e094ecbd130a124413e3c8134198c81654833.tl.png)

1. Ginagawa ng Copilot ang kahilingan at makikita natin na ang pangalan ng ahente ay na-update sa agent pane. Susunod na nagtatanong ang Copilot upang pinuhin ang mga tagubilin. Nagtatanong ito kung paano tayo dapat tumugon sa mga partikular na isyu at hihilingin natin na kilalanin nito ang isyu, magbigay ng mga halimbawa ng mga paksa na sasagutin, at i-format ang tugon bilang mga bullet points.

    Kopyahin at i-paste ang sumusunod, at isumite ang kahilingan sa Copilot.

       ```text
       Bigyang-priyoridad ang mga agarang kahilingan. Mga halimbawa ng mga isyu sa IT o mga senaryo na matutulungan: mga problema sa device, koneksyon sa network, mga isyu sa pag-login. Kapag nag-troubleshoot, kilalanin muna ang kanilang isyu at tumugon nang may empatiya, pagkatapos ay magbigay ng sunud-sunod na gabay gamit ang mga bullet points at tanungin kung kailangan nila ng karagdagang tulong.
       ```

      ![Pinuhin ang mga tagubilin ng ahente](../../../../../translated_images/6.1_04_RefineInstructions.9575407dbc12e0399691068d20e0d0252bb8b8f839cf53ee9d715fe2c16afa70.tl.png)

1. Ang mga tagubilin ng ahente ay maa-update pagkatapos matanggap ng Copilot ang kahilingan. Pansinin kung paano sa kanang bahagi ng pane, lumitaw na ang mga starter prompts. Ang mga ito ay nabuo batay sa ating mga tagubilin.

    Susunod, nagtatanong ang Copilot para sa mga pampublikong website upang maging basehan ng kaalaman ng ahente.

    Kopyahin at i-paste ang sumusunod, at isumite ang kahilingan sa Copilot.

      ```text
      https://support.microsoft.com
      ```

      ![Magdagdag ng pampublikong website](../../../../../translated_images/6.1_05_KnowledgeSource.3aec8d869b73d273f88c62cf99bb2f731df83a83c1ca54d92d6e96b86a570637.tl.png)

1. Ang pampublikong website ay idadagdag bilang isang source ng kaalaman. Nagtatanong ang Copilot kung may karagdagang mga source ng kaalaman na dapat idagdag. Hindi natin kailangang magdagdag ng karagdagang pampublikong website.

    Kopyahin at i-paste ang sumusunod, at isumite ang kahilingan sa Copilot.

      ```text
      Proceed with setup
      ```

      ![Magpatuloy sa setup](../../../../../translated_images/6.1_06_ProceedWithSetup.11ceb9ccccccd19418711681d42b602ee223ebd017d6bf300088de84d1d35f1d.tl.png)

1. Kinukumpirma ng Copilot ang setup ng ating Contoso Helpdesk Agent ngunit magdadagdag tayo ng isang pagbabago, hihilingin natin na ang ating ahente ay hindi sumagot sa mga tanong na may kaugnayan sa HR. Ito ay magpapabatid sa ating ahente na hindi ito dapat sumagot sa mga tanong na may kaugnayan sa HR na tinatanong ng mga user.

    Kopyahin at i-paste ang sumusunod, at isumite ang kahilingan sa Copilot.

       ```text
       Huwag magbigay ng tulong sa mga tanong na may kaugnayan sa HR, mga halimbawa ay: Ano ang balanse ng aking bakasyon? Ilang araw ng sick leave ang mayroon ako? Ano ang URL ng ating payroll portal?
       ```

      ![Huwag sumagot sa mga tanong na may kaugnayan sa HR](../../../../../translated_images/6.1_07_DoNotTalkAbout.d9ccbbd15b9793e1642b365be6968548f6f250be5d541f1ad06eb9f12985e94f.tl.png)

1. Ang mga tagubilin ay maa-update upang hindi magbigay ng tulong sa mga tanong na may kaugnayan sa HR. Hindi na natin kailangang gumawa ng karagdagang mga update, handa na ang ating ahente na likhain.

      ![Na-update ang mga tagubilin ng ahente](../../../../../translated_images/6.1_08_AgentInstructionsUpdated.4de1112eeb5c8e2e2fe03fcbc6d332bdc3b1de740d9a5ab6b1ec30e27e241096.tl.png)

1. Bago natin likhain ang ating ahente, gawin natin ang ilang bagay.

    Una, piliin ang **Configure** tab upang makita ang mga detalye ng ahente na tinukoy mula sa ating pag-uusap sa Copilot. Dito mo makikita ang Pangalan, Deskripsyon, Mga Tagubilin, Kaalaman, at Mga Iminungkahing/Starter prompts.

      ![Tingnan ang mga detalye ng ahente](../../../../../translated_images/6.1_09_ViewAgentDetails.72c7f66721d6ac354bcc7186204bb0ad169456b0b7756f5e5a5e0f090e802a57.tl.png)

1. Pangalawa, subukan natin ang ating ahente. Kopyahin at i-paste ang sumusunod, at isumite ang tanong sa ating ahente.

       ```text
       Paano ko masusuri ang warranty status ng aking Surface?
       ```

      ![Subukan ang ahente](../../../../../translated_images/6.1_10_TestAgent.8b1a0f1d98f4fa5b61336e1c4ac6d77b4822283314c2941cb0e04bf5247d8489.tl.png)

1. Ang tugon sa tanong ay magpapakita kung saan ang mga sagot ay nasa format ng isang sunud-sunod na gabay gamit ang mga bullet points. Mahusay, gumagana ang ating ahente! 🙌🏻

      ![Tugon ng Ahente](../../../../../translated_images/6.1_11_AgentResponse.c5fb305335b8e9b456b0f75ec9e237d4abbc3e9a1a6976e14bb656f1adffb14a.tl.png)

1. Panghuli, i-double check natin ang solusyon kung saan ang ating ahente ay malilikha, ito ang solusyon na ginawa at pinili bilang ang preferred solution sa [Lesson 04 - Gumawa ng bagong solusyon](../04-creating-a-solution/README.md#42-create-a-new-solution).

    Piliin ang **ellipsis icon (...)** at piliin ang **Update Advanced Settings**.

      ![I-update ang Advanced Settings](../../../../../translated_images/6.1_12_UpdateAdvancedSettings.5943949ae7c9f492fb90779b0284283deb4186f14cd6588c46920f8e50d8d6d0.tl.png)

1. Lalabas ang **Advanced Settings** modal at makikita natin na ang ating solusyon na ginawa mula sa mas maaga ay napili bilang default. Ito ay dahil sa pagpili ng ating solusyon bilang ang preferred solution sa [Lesson 04 - Gumawa ng bagong solusyon](../04-creating-a-solution/README.md#42-create-a-new-solution).

    Piliin ang **Cancel.**

      ![View ng Advanced Settings](../../../../../translated_images/6.1_13_AdvancedSettings.fff0861831346d5bef4e7731fed83073aca6d17aa940633040f65b1f300aee15.tl.png)

1. Ngayon, likhain na natin ang ating custom na ahente! Piliin ang **Create**.

      ![Piliin ang Create](../../../../../translated_images/6.1_14_CreateAgent.7330a5fbe44a0664f35c5b5502e499f6dd3bad55d13094ef6c22608e8f8831b1.tl.png)

1. Ang Copilot Studio ay magsisimulang mag-provision ng ating ahente.

      ![Pag-setup ng ahente](../../../../../translated_images/6.1_15_SettingUpAgent.34028a37bc2922eae13d0a18bb468bd738608b4de948192d89c3a2680fff2496.tl.png)

1. Kapag ang ating ahente ay na-provision na, makikita natin ang mga detalye ng ahente na sumasalamin sa ating mga kahilingan sa panahon ng karanasan sa paglikha ng pag-uusap gamit ang Copilot. Mag-scroll pababa upang suriin ang ahente kung saan makikita mo ang pangalan, deskripsyon, mga tagubilin, ang mga source ng kaalaman, at ang mga iminungkahing prompts. Ang orchestration mode ay naka-enable bilang default at ang default na modelo ay ginagamit para sa response model ng ahente.

      ![Nilikha ang ahente](../../../../../translated_images/6.1_16_AgentCreated.91edb1939b33d158930cd385c0d97c320958504e224ffc163ed5030b0cdc72a7.tl.png)

      ![Mga source ng kaalaman](../../../../../translated_images/6.1_17_KnowledgeSources.00f1ed0b7f405e4820971834fb75e39a80659cf1b9eeeee42d861bfc4656240f.tl.png)

      ![Mga iminungkahing prompts](../../../../../translated_images/6.1_18_SuggestedPrompts.20b84b9420858de8485460cc50a8e73798b08bb2022c946899adcbf9b484e0f0.tl.png)

1. Subukan na natin ang ating bagong likhang ahente. Sa **Test** pane sa kanang bahagi, piliin ang **Activity Map** icon.

      ![Piliin ang Activity Map](../../../../../translated_images/6.1_19_ActivityMap.b2e6c77c69fd953818dc73b4dbe2e6d46529cf105d7a4a18c590d15c0b717cf4.tl.png)

1. Ilagay ang sumusunod na tanong sa **Test** pane.

       ```text
       Paano ko mahahanap ang product key ng aking Windows 11?
       ```

      ![Subukan ang bagong likhang ahente](../../../../../translated_images/6.1_20_TestAgent.a9d3a761477c9b79facd132c173ec886d808320ad2cbc0347066a20c0f9dd669.tl.png)

1. Ang Activity map ay maglo-load na nagpapakita sa atin nang real-time kung anong path ang pinoproseso ng ahente. Sa senaryong ito, naintindihan ng ating ahente ang tanong at hinahanap ang mga source ng kaalaman. Sa kasalukuyan, mayroon tayong isang source na pampublikong website na idinagdag natin kanina gamit ang Copilot, na siyang nire-review ng ahente.

      ![Nire-review ang mga source ng kaalaman](../../../../../translated_images/6.1_21_ReviewingSources.78068042898e2960667393c931e120dbe80f6b74c9af222b79446f7a82d5c757.tl.png)

1. Ang ating ahente ay tumutugon sa mga sagot na naka-outline bilang mga bullet points, tulad ng tinukoy sa mga tagubilin. Ang tugon ay may mga reference sa mga web page kung saan nabuo ang sagot ng ahente. Pinapayagan nito ang mga user na i-verify ang source ng sagot.

      ![Mga reference sa tugon](../../../../../translated_images/6.1_22_Response.44a088e80f2a9fac74bcd364571f1ebb900b43e9e647089ef51d39b809b0f0e9.tl.png)

1. Maaari mo ring suriin ang tugon at ang mga source nito sa pamamagitan ng pag-scroll pababa sa **Knowledge modal** sa Activity map.

      ![Mga source na may reference](../../../../../translated_images/6.1_23_ReferencedSources.ca8e41855284446d121a34fd9d8d667e05016f5eda741adcf7f356ac2c59c559.tl.png)

Binabati kita! Nilikha mo na ang iyong unang custom na ahente gamit ang Copilot sa Copilot Studio 🙌🏻

### 6.2 Magdagdag ng internal na source ng kaalaman gamit ang SharePoint site

Noong nakaraan gamit ang Copilot, nagdagdag tayo ng pampublikong website bilang external na source ng kaalaman para sa ating ahente sa panahon ng karanasan sa paglikha ng pag-uusap. Ngayon, magdadagdag tayo ng internal na source ng kaalaman gamit ang SharePoint site. Ito ang SharePoint site na ginawa mo sa [Lesson 00 - Course Setup](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. Piliin ang **+ Add knowledge**.

      ![Piliin ang Add knowledge](../../../../../translated_images/6.2_01_AddKnowledge.5e441f7e3b0ebb25218bece75394ecf4c8c3a60e1b5d8ea15ca020546352f256.tl.png)

1. Piliin ang **SharePoint**.

      ![Piliin ang SharePoint](../../../../../translated_images/6.2_02_SelectSharePoint.5bd29d31cc76f581db3eef474731fc2dfce4ef1dab86d9cc11716323ba726408.tl.png)

1. I-paste ang **address ng SharePoint site** na ginawa sa [Lesson 00 - Course Setup](../00-course-setup/README.md#step-4-create-new-sharepoint-site) sa SharePoint URL field at piliin ang **Add**.

      ![Ilagay ang URL ng SharePoint site](../../../../../translated_images/6.2_03_AddSharePointURL.974c251d9690524a8bfa4c9dd930af3d834245749fb9f1fda508c3b1f9773827.tl.png)

1. I-update ang **pangalan** ng SharePoint site sa `Contoso IT` at piliin ang **Add**.

      ![I-update ang pangalan ng SharePoint site at idagdag sa ahente](../../../../../translated_images/6.2_04_UpdateNameAddToAgent.46a814c09586fe135bffb77814ba13d0593f25feaaa989174c97e80345f03866.tl.png)

1. Ang SharePoint site ay idinagdag na bilang isang source ng kaalaman na may status na _Ready_. Ang Status column ay magpapakita kung ang source ng kaalaman ay na-load/nakonekta nang matagumpay, o kung may isyu.

      ![Status ng SharePoint site](../../../../../translated_images/6.2_05_SharePointStatus.90a9001978f31c5d4b183d5ecc4869c81dd9fc1bb8a6b1ef4675fcb51d52f8e5.tl.png)

### 6.3 Magdagdag ng internal na source ng kaalaman sa pamamagitan ng pag-upload ng dokumento

Magdadagdag tayo ng isa pang internal na source ng kaalaman sa pamamagitan ng pag-upload ng dokumento nang direkta sa ating ahente.

1. Piliin ang **Add knowledge**.

      ![Piliin ang Add knowledge](../../../../../translated_images/6.3_01_AddKnowledge.d93caa805efb7e2a433d9777f8eb1789dc5daf4f9ebe95da2a74a2b57cffdd33.tl.png)

1. Piliin ang **Upload file** o **Select to browse**.

      ![Piliin ang upload files](../../../../../translated_images/6.3_02_UploadFile.662de4f3916bfa3f34a6699a9a45846e64e71a70dfecbc656fb5b511792de6b6.tl.png)

1. I-download ang [sample file](../../../../../docs/recruit/06-create-agent-from-conversation/assets/Contoso_Guest_WiFi_Connection_Guide.docx "download") at piliin ito sa iyong File Explorer. Piliin ang **Open**.

      ![Piliin ang dokumento](../../../../../translated_images/6.3_03_SelectFile.077d73491dc6ff1f6114d259261ee68334c4da182c3b55233468637d1989f14c.tl.png)

1. Ang file ay napili na para sa upload. Piliin ang **Add to agent** susunod.

      ![Piliin ang Add to Agent](../../../../../translated_images/6.3_04_AddToAgent.1eec469d6d28c22959c8d7f3ad39aa0df5e07adfdb85ce1e21c0c4fe31c27db5.tl.png)

1. Ang dokumento ay nasa proseso ng pagdaragdag sa ahente. Maghintay hanggang ang upload ay makumpleto, huwag isara ang browser window. Ang status ng dokumento ay unang magpapakita bilang _In progress_, maghintay hanggang ang status ay ma-update sa **Ready** bago subukan ang iyong ahente.

      ![Status ng file](../../../../../translated_images/6.3_05_FileStatus.2029b8aa0109a6f46372291e9bba33429c2ebd572efa81702a73cae91fbf3a90.tl.png)

Subukan na natin ang ating ahente!

### 6.4 Subukan ang ahente

Susubukan natin ang tatlong source ng kaalaman sa pamamagitan ng pagtatanong sa ating Contoso Helpdesk Agent.

1. Piliin ang **refresh** icon sa test pane, kasunod ng pagpili sa **activity map** icon.

      ![Refresh icon](../../../../../translated_images/6.4_01_RefreshAndActivityMap.c24ebc6c277786dab75941dac0b6e55f3dbb244b29fb791c87e4aba5c4a56c81.tl.png)

1. Ilagay ang sumusunod na tanong upang subukan ang ating pampublikong website (external) na source ng kaalaman.

      ```text
      How can I find the serial number on my Surface device?
      ```

      ![Ilagay ang prompt upang subukan ang website knowledge source](../../../../../translated_images/6.4_02_TestQuestion1.3a5aeaaa72a9578a05edd4575275e1ba60ecaf8c7377ab13872619580e0309f9.tl.png)

1. Susunod mong makikita ang ahente na nire-review ang mga source ng kaalaman at nagbibigay ng tugon gamit ang website knowledge source.
![Web page referenced in response](../../../../../translated_images/6.4_03_ReviewingSources.a56742505402eab51b423b543c814242728ff7947e443360740b3e5dac82ba65.tl.png)

1. Isang sagot ang ibabalik at mapapansin mo kung paano may mga reference sa web page na pinanggalingan ng sagot. Kung mag-scroll ka pababa sa knowledge modal sa activity map, makikita mo ang iba pang knowledge sources na hinanap ng agent, tulad ng SharePoint site at ang na-upload na file.

    Gayunpaman, hindi ito ginamit dahil sa seksyon ng **Referenced sources**, ang website knowledge source lamang ang na-refer. Ang sagot ay nakabase sa website knowledge source. Kung pipiliin mo ang mga reference, dadalhin ka nito sa web page.

![Knowledge sources referenced and searched](../../../../../translated_images/6.4_04_ReferencedSources.2fb91e8ed7cac8196c3cc1e43006512d4138adb4f240bdab66cd2af5fd1ec7c6.tl.png)

1. Subukan naman natin ang parehong SharePoint site knowledge source at document knowledge source sa isang mensahe. Ipasok ang sumusunod na tanong.

      ```text
      How can I access our company Contoso VPN? How do guests connect to the Contoso Guest wifi?
      ```

![Test SharePoint and document knowledge sources](../../../../../translated_images/6.4_05_TestQuestion2.f77ce87578b59386ec5491716996aff9247c5e5ad458a51226276238adb282f3.tl.png)

1. Muli, makikita mo ang agent na nire-review ang tatlong knowledge sources upang makabuo ng sagot sa mga tanong sa ating iisang mensahe. Ang agent ay sumasagot sa parehong tanong sa isang mensahe, at hiwalay na nire-refer ang SharePoint page at dokumento kung saan nagmula ang sagot.

    Sa knowledge modal sa activity map, makikita mo ang SharePoint site at dokumento na ginamit bilang mga reference sources. Mayroon kang buong visibility kung anong knowledge sources ang ginamit upang sagutin ang parehong tanong.

![Knowledge sources referenced](../../../../../translated_images/6.4_06_ReferencedSources.caf049dac28b4317c39b074b481f5d7d5b1b92fd792fc4b796fec0c1575f9581.tl.png)

1. Palaging magandang ideya na i-verify kung tama ang generated response. Piliin ang SharePoint site reference at maglo-load ang FAQs SharePoint page kung saan maaari kang mag-scroll pababa upang i-review ang VPN instructions.

![Review SharePoint page](../../../../../translated_images/6.4_07_VerifySharePoint.6ee48515fedf37a62564ddc388c2452751ed5777cda321d887c315c2de78d293.tl.png)

1. Susunod, piliin ang dokumento reference at lilitaw ang isang modal na may teksto mula sa dokumento na sumasalamin sa sagot.

![Review document](../../../../../translated_images/6.4_08_VerifyDocument.0f0680b63e6bdd0b558eb287e85965b87ab820e12b25b1e0965f8ebbde795222.tl.png)

Ang agent ay maaaring sumagot ng maraming tanong sa isang mensahe, at maghanap sa knowledge sources + mag-refer sa knowledge sources sa kanyang sagot. Siguraduhing palaging i-verify kung tama ang sagot sa pamamagitan ng pag-review sa mga reference.

## ✅ Misyon Kumpleto

Binabati kita! 👏🏻 Natutunan mo kung paano gumamit ng natural na wika upang lumikha ng sarili mong custom agent na maaaring makipag-usap gamit ang iyong data mula sa tatlong magkaibang knowledge sources 🙌🏻

Ito ang katapusan ng **Lab 06 - Gumawa ng agent gamit ang Copilot**, piliin ang link sa ibaba upang lumipat sa susunod na aralin. Ang custom agent na ginawa mo sa lab na ito ay gagamitin sa susunod na lab ng aralin.

⏭️ [Lumipat sa aralin na **Magdagdag ng bagong Topic na may trigger**](../07-add-new-topic-with-trigger/README.md)

Maligayang pagdating sa elite. Alam mo na ngayon kung paano lumikha ng digital agents na nagsasalita ng iyong wika, nagre-refer sa iyong data, at sumusuporta sa iyong team. Magpatuloy—kakaumpisa pa lang ng iyong misyon.

## 📚 Mga Taktikal na Resources

🔗 [Quickstart: Gumawa at mag-deploy ng agent](https://learn.microsoft.com/microsoft-copilot-studio/fundamentals-get-started?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172617-ebenitez)

🔗 [Gumawa at mag-delete ng agents](https://learn.microsoft.com/microsoft-copilot-studio/authoring-first-bot?WT.mc_id=power-172617-ebenitez)

🔗 [Mga pangunahing konsepto - Paglikha ng agents](https://learn.microsoft.com/microsoft-copilot-studio/authoring-fundamentals/?WT.mc_id=power-172617-ebenitez)

📺 [Gumawa ng custom agent gamit ang natural na wika](https://aka.ms/ai-in-action/copilot-studio/ep1)

📺 [Magdagdag ng kaalaman sa iyong mga agents](https://aka.ms/ai-in-action/copilot-studio/ep2)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/06-create-agent-from-conversation" alt="Analytics" />

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na mapagkakatiwalaang pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.