<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-22T19:42:17+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "tl"
}
-->
# 🚨 Misyon 03: Mag-deploy ng Declarative Agent para sa Microsoft 365 Copilot

## 🕵️‍♂️ CODENAME: `OPERATION COPILOT EXTENSION`

> **⏱️ Oras ng Operasyon:** `~60 minuto`

🎥 **Panoorin ang Walkthrough**

[![Thumbnail ng video para sa Create a Declarative Agent](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.tl.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "Panoorin ang walkthrough sa YouTube")

## 🎯 Misyon Brief

Maligayang pagdating sa iyong unang field assignment, Agent Maker. Napili kang magdisenyo, magbigay ng kagamitan, at mag-deploy ng Declarative Agent—isang espesyal na operative na direktang naka-embed sa Microsoft 365 Copilot at Microsoft Teams.

Hindi tulad ng tradisyunal na mga agent, ang declarative agents ay gumagana gamit ang isang tinukoy na misyon (mga instruksyon), mga tool (mga prompt/konektor), at estratehikong access sa internal na intelligence (mga knowledge source tulad ng SharePoint, Dataverse, at iba pa). Ang iyong trabaho ay buuin ang agent na ito gamit ang Microsoft Copilot Studio—isang no-code command center kung saan nabubuo ang mga kakayahan at layunin ng iyong agent.

Simulan na natin.

## 🔎 Mga Layunin

Sa misyon na ito, matutunan mo:

1. Ang pag-unawa kung ano ang declarative agents at kung paano nila pinapalawak ang Microsoft 365 Copilot gamit ang mga custom na kakayahan
1. Ang pagkukumpara ng Microsoft Copilot Studio vs. Copilot Studio agent builder para sa paggawa ng declarative agents
1. Ang paggawa ng declarative agent gamit ang natural na wika sa pamamagitan ng conversational creation experience
1. Ang pagdaragdag ng AI prompts bilang mga tool upang mapahusay ang espesyal na kaalaman at kakayahan sa paglutas ng problema ng iyong agent
1. Ang pag-publish at pagsubok ng iyong declarative agent sa Microsoft 365 Copilot at Microsoft Teams

## 🕵🏻‍♀️ Ano ang declarative agent para sa Microsoft 365 Copilot?

Ang declarative agents ay mga customized na bersyon ng Microsoft 365 Copilot. Maaari mong i-customize ang Microsoft 365 Copilot upang matugunan ang partikular na pangangailangan ng negosyo sa pamamagitan ng pagbibigay nito ng mga instruksyon para suportahan ang isang partikular na proseso, pag-ground nito gamit ang enterprise knowledge, at paggamit ng mga tool para sa mas malawak na extensibility. Pinapayagan nito ang mga organisasyon na lumikha ng personalized na mga karanasan na may mas mataas na functionality para sa kanilang mga user.

## 🤔 Bakit gagamitin ang Microsoft Copilot Studio para gumawa ng declarative agent?

Bilang isang maker, maaaring nasubukan mo na ang [Copilot Studio agent builder](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez) sa Microsoft 365 Copilot at maaaring iniisip mo _bakit gagawa ng declarative agent sa Microsoft Copilot Studio?_

Nag-aalok ang Microsoft Copilot Studio ng mas komprehensibong set ng mga tool at feature para sa declarative agents na lampas sa limitasyon ng Copilot Studio agent builder. Katulad ng Copilot Studio agent builder, hindi mo kailangang malaman ang programming o software development para magtayo sa Microsoft Copilot Studio. Tingnan natin ang pagkakaiba ng Copilot Studio Agent Builder at Copilot Studio para sa paggawa ng declarative agents.

### Paghahambing ng mga Feature

Ang sumusunod na talahanayan ay nagha-highlight ng mga pagkakaiba sa paggawa ng declarative agent sa Copilot Studio agent builder at Copilot Studio.

| Feature                   | Copilot Studio agent builder sa Microsoft 365 Copilot                          | Palawakin ang Microsoft 365 Copilot sa Copilot Studio                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **Knowledge**       | Web, SharePoint, Microsoft Teams chats, Outlook emails, Copilot connectors     | Web search (via Bing), SharePoint, Dataverse, Dynamics 365, Copilot connectors  |
| **Tools**       | Code interpreter, image generator     | 1400+ Power Platform connectors, custom connectors, prompt, computer use, REST API, Model Context Protocol   |
| **Starter prompts**         | I-configure ang mga prompt para sa mabilis na pagsisimula ng mga user   | I-configure ang mga prompt para sa mabilis na pagsisimula ng mga user  |
| **Channel**           | Agent na na-publish lamang sa Microsoft 365 Copilot     | Agent na na-publish sa Microsoft 365 Copilot at Microsoft Teams      |
| **Sharing permissions**         | Ang mga user ay viewers lamang    | Ang mga user ay maaaring maging editors o viewers   |

May mas maraming kakayahan ang mga declarative agents na ginawa sa Microsoft Copilot Studio na matututunan natin sa susunod.

!!! tip
    - Para matuto pa tungkol sa Copilot Studio agent builder, pumunta sa [Copilot Developer Camp: Lab MAB1 - Build your first agent](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/)
    - Para sa pro-development ng pagpapalawak ng declarative agent lampas sa Copilot Studio agent builder para sa Microsoft 365 Copilot, pumunta sa [Copilot Developer Camp: Lab MAB1 - Build your first agent](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/)

### Pagpapalawak ng Microsoft 365 Copilot gamit ang declarative agents na ginawa sa Copilot Studio

Palawakin natin ang natutunan mula sa talahanayan ng paghahambing ng mga feature.

#### Customization

- **Detalyadong Instruksyon**: Maaari kang magbigay ng detalyadong instruksyon at kakayahan upang tiyak na tukuyin ang layunin at pag-uugali ng agent.
  - Kasama dito ang paggamit ng mga tool gamit ang natural na wika.

- **Access sa Enterprise Knowledge**: Pinapagana ang access sa enterprise knowledge na sumusunod sa mga user permissions.
  - SharePoint integration
  - Dataverse integration
  - Dynamics 365 integration
  - Microsoft 365 Copilot connectors na pinagana ng iyong administrator ng organisasyon

   ![Customization](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.tl.png)

#### Advanced Capabilities

- **Integration sa External Services**: Pinapayagan kang pumili mula sa 1400+ Power Platform connectors na nag-iintegrate sa mga external services, na nagbibigay ng mas kumplikado at makapangyarihang mga functionality.
  - Halimbawa ay [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez), [ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez), [Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez), [SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) at iba pa
  - Bilang alternatibo, maaari mo ring gamitin ang Model Context Protocol servers at REST APIs direkta sa iyong declarative agent

- **AI prompts**: Gumamit ng prompt upang suriin at baguhin ang text, dokumento, imahe, at data gamit ang natural na wika at AI reasoning.
  - Piliin ang chat model, pumili mula sa Basic (Default), Standard, Premium
  - Opsyon na magdala ng sarili mong Azure AI Foundry model upang i-ground ang iyong prompt

- **Mas maraming opsyon sa deployment configuration**: Piliin ang mga channel at tukuyin ang mga user permissions.
  - I-publish sa Microsoft Teams, isang pamilyar na user interface para sa mas mabilis na pag-aampon ng mga user
  - Ang mga edit user permissions ay maaaring ibahagi upang maiwasan ang isang solong punto ng dependency sa may-ari ng agent

   ![Customization](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.tl.png)

Sa kabuuan, ang declarative agents sa Microsoft Copilot Studio ay nagbibigay-daan sa customization ng Microsoft 365 Copilot upang umangkop sa mga pangangailangan ng negosyo sa pamamagitan ng integration ng enterprise knowledge systems, mga tool upang kumonekta sa mga external services o AI GPT models.

## 🧪 Lab 03: Gumawa ng declarative agent sa Microsoft Copilot Studio para sa Microsoft 365 Copilot

Susunod nating matututunan kung paano gumawa ng declarative agent para sa isang "Business-to-Employee" use case na magsisilbing **IT helpdesk agent**.

- [3.1 Gumawa ng declarative agent](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 Gumawa at magdagdag ng prompt para sa iyong declarative agent](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 I-update ang mga instruksyon at subukan ang iyong declarative agent](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 I-publish ang iyong declarative agent sa Microsoft 365 Copilot at Microsoft Teams](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    Ang lab na ito ay magbabalangkas ng mga hakbang upang magdagdag ng Prompt bilang isang tool. Ang mga susunod na aralin ay magpapaliwanag sa pagdaragdag ng mga knowledge sources at iba pang mga tool na magagamit. Pinadali para sa iyong pag-aaral 😊

### 👩🏻‍💼 Pag-unawa sa Business-to-Employee (B2E)

Ang Business-to-Employee (B2E) ay tumutukoy sa mga interaksyon at serbisyo na direktang ibinibigay ng isang negosyo sa mga empleyado nito. Sa konteksto ng isang agent, nangangahulugan ito ng paggamit ng advanced na kakayahan ng Copilot Studio upang suportahan at mapabuti ang karanasan sa trabaho ng mga empleyado sa loob ng organisasyon.

### ✨ Use case scenario

**Bilang isang** empleyado

**Gusto kong** makakuha ng mabilis at tamang tulong mula sa IT helpdesk agent para sa mga isyu tulad ng problema sa device, troubleshooting ng network, pag-set up ng printer

**Upang** manatiling produktibo at malutas ang mga teknikal na isyu nang walang pagkaantala

Simulan na natin!

### Mga Kinakailangan

- Ang mga maker ay dapat may pahintulot na gumawa at may access sa isang Copilot Studio environment.

!!! note "Tala sa Lisensya"
    Ang lab na ito ay magbabalangkas ng mga hakbang upang magdagdag ng Prompt bilang isang tool. Ang mga susunod na aralin ay magpapaliwanag sa pagdaragdag ng mga knowledge sources at iba pang mga tool na magagamit. Pinadali para sa iyong pag-aaral 😊
  
    Hindi mo kailangan ng Microsoft 365 Copilot user license upang i-publish ang iyong declarative agent na ginawa sa Copilot Studio sa Microsoft 365 Copilot. Gayunpaman, **ang mga user** ng _published declarative agent_ sa Microsoft 365 Copilot ay nangangailangan ng Microsoft 365 Copilot user license.

### 3.1 Gumawa ng declarative agent

!!! warning "Maaaring mag-iba ang mga tanong ng Copilot sa bawat session"

    Ang Copilot conversational creation experience ay maaaring mag-iba sa bawat pagkakataon kung saan ang mga ibinigay na tanong para sa gabay ay maaaring bahagyang magkaiba sa nakaraan.

1. Pumunta sa [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/) at mag-sign in gamit ang iyong mga kredensyal. Siguraduhing lumipat sa iyong environment na ginagamit para sa mga lab na ito.

1. Piliin ang **Agents** mula sa menu at piliin ang **Copilot for Microsoft 365**.

       ![Copilot for Microsoft 365](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.tl.png)

1. Susunod, gagawa tayo ng declarative agent sa pamamagitan ng pagpili sa **+ Add** agent.

       ![Add Agent](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.tl.png)

1. Makikita natin ang conversational creation experience na maglo-load kung saan maaari tayong makipag-chat gamit ang natural na wika sa Copilot upang ilarawan ang declarative agent na nais nating gawin, at gamitin ang mga ibinigay na tanong para sa gabay.

       Maglagay ng detalyadong paglalarawan na nagbabalangkas ng mga sumusunod,  
       - ang gawain ng agent  
       - anong uri ng mga tanong ang kaya nitong sagutin  
       - ang format ng sagot nito  
       - ang layunin ng agent  
    
       ```text
       Ikaw ay isang bihasang IT professional na dalubhasa sa iba't ibang computer systems, networking, at cybersecurity. Kaya mong mag-diagnose at mag-solve ng mga teknikal na isyu, magpaliwanag ng mga solusyon sa malinaw at madaling maintindihan na paraan para sa mga user na may iba't ibang antas ng teknikal na kaalaman, at magbigay ng gabay sa mga best practices. Dapat kang maging maikli at nagbibigay ng impormasyon, gamit ang step-by-step na mga instruksyon na may bullet points kung kinakailangan. Ang layunin mo ay tulungan ang user na maunawaan ang problema at kung paano ito epektibong malulutas.
       ```
    
       ![Create Prompt](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.tl.png)

1. Pagkatapos isumite ang prompt, makikita ang kapansin-pansing update sa kanang bahagi ng pane na may mga detalye at instruksyon ng agent ayon sa prompt. Susunod, hihilingin sa iyo na kumpirmahin ang pangalan ng iyong agent at magmumungkahi ang Copilot ng pangalan.

       Maglagay ng `yes` upang tanggapin ang mungkahing pangalan o maglagay ng ibang pangalan tulad ng sumusunod,
    
       ```text
       Contoso Tech Support Pro
       ```
    
       ![Instructions updated](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.tl.png)

    !!! warning "Paalala: Maaaring mag-iba ang mga tanong ng Copilot sa bawat session"

        Ang Copilot conversational creation experience ay maaaring mag-iba sa bawat pagkakataon kung saan ang mga ibinigay na tanong para sa gabay ay maaaring bahagyang magkaiba sa nakaraan.

1. Ang pangalan ng agent ay na-update na ngayon na makikita sa kanang bahagi ng pane. Hihilingin sa atin na i-refine ang mga instruksyon para sa agent. Ang mungkahi ng Copilot ay mukhang maganda kaya hihilingin natin na gamitin ang sarili nitong mga mungkahi. Maglagay ng sumusunod,

      ```text
      Focus on the IT issues and scenarios you've identified
      ```

      ![Name updated](../../../../../translated_images/3.1_06_NameUpdated.b6b8cc7c670b77c635d6b54b723e1a83f63ec288c0eab260fdbf88c7ec163003.tl.png)

1. Susunod, tatanungin tayo kung nais nating magdagdag ng anumang pampublikong accessible na mga website o kaalaman. Sasagot tayo ng `No` dahil magdadagdag lamang tayo ng prompt para sa ating declarative agent sa lab na ito. Ang mga susunod na lab sa mga darating na aralin ay magpapaliwanag sa mga knowledge sources.

      ![No websites or knowledge sources added](../../../../../translated_images/3.1_07_KnowledgeSources.2001faa25aab922f38da82a8602e68b3ad7153941e87bab0949177e0b2ab0c08.tl.png)

1. Makikita natin ang sagot mula sa Copilot na natapos na natin ang pag-configure ng ating agent gamit ang Copilot conversational creation experience. Gayunpaman, i-refine pa natin ito sa pamamagitan ng pag-outline na dapat itong maging maikli at nagbibigay ng impormasyon gamit ang bullet points, gumamit ng empathy sa komunikasyon, at humingi ng feedback pagkatapos magbigay ng mga solusyon.

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

      ![Update agent instructions](../../../../../translated_images/3.1_08_FurtherRefinements.993926c4e55cc5133413f4e10a61a6ed43351d070e791db0ee5547ea83f46473.tl.png)

1. Kinukumpirma ng Copilot na na-update na ang mga instruksyon. I-click ang **Create** upang i-provision ang declarative agent para sa Microsoft 365 Copilot.

      ![Create agent](../../../../../translated_images/3.1_09_CreateDeclarativeAgent.71442cd4e18105359e55016d92e54b74ac18977bb535c637a05bac0d3680a3c5.tl.png)

    !!! warning "Paalala: Maaaring mag-iba ang mga tanong ng Copilot sa bawat session"

        Ang Copilot conversational creation experience ay maaaring mag-iba sa bawat pagkakataon kung saan ang mga ibinigay na tanong para sa gabay ay maaaring bahagyang magkaiba sa nakaraan.

1. Kapag na-provision na ang agent, makikita mo ang mga detalye ng agent na naglalaman ng paglalarawan at mga instruksyon na tinukoy sa panahon ng Copilot conversational creation experience.
![Detalye ng Ahente](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.tl.png)

Mag-scroll pababa sa pane at makikita mo rin ang mga kakayahan tulad ng pagdaragdag ng kaalaman, pag-enable ng web search (sa pamamagitan ng Bing), mga panimulang prompt, at ang mga detalye ng pag-publish ng declarative agent para sa Microsoft 365 Copilot. Ang mga panimulang prompt ay ipapakita rin sa test pane sa kanang bahagi. Maaaring piliin ng mga user ang mga panimulang prompt upang simulan ang pakikipag-ugnayan sa ahente.

![Mga Iminungkahing Prompt](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.tl.png)

1. Sa seksyon ng Detalye ng ahente, mayroon kang kakayahang baguhin ang icon ng ahente. Piliin ang **Edit**.

![I-edit ang mga Detalye](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.tl.png)

Dito maaari mong baguhin ang icon at ang kulay ng background. Piliin ang **Save** at pagkatapos ay piliin muli ang **Save** upang i-update ang mga detalye ng ahente.

![Baguhin ang Icon](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.tl.png)

1. Subukan natin ang ahenteng ginawa natin. Piliin ang isa sa mga **Starter Prompts** sa test pane sa kanang bahagi.

![Subukan ang Panimulang Prompt](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.tl.png)

1. Ang ating ahente ay magbibigay ng tugon. Pansinin kung paano ito sumunod sa mga tagubilin sa pamamagitan ng pagbibigay ng mga bullet point sa mas madaling maunawaan na bahagi, at ginamit ang empatiya sa tugon nito.

Kapag nag-scroll ka sa ibaba ng mensahe, pansinin kung paano rin ito humingi ng feedback pagkatapos magbigay ng solusyon ayon sa tagubilin.

![Tugon mula sa Pagsubok](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.tl.png)

Sa loob ng ilang minuto, nakapagdagdag ka ng declarative agent para sa Microsoft 365 Copilot sa Copilot Studio 🙌🏻

Susunod, matutunan natin kung paano magdagdag ng tool sa ating ahente, gagawa tayo ng prompt.

### 3.2 Gumawa at magdagdag ng prompt para sa iyong declarative agent

1. Mag-scroll pababa sa seksyong **Tools** at piliin ang **+ Add tool**

![Magdagdag ng Tool](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.tl.png)

1. Lalabas ang Tools modal at ipapakita ang listahan ng mga Power Platform connectors. Upang magdagdag ng Prompt, piliin ang **+ New tool**.

![Bagong Tool](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.tl.png)

1. Ipapakita ang listahan ng iba pang mga tool - Prompt, Custom connector, REST API, at Model Context Protocol. Kung ang iyong organisasyon ay nakakatugon sa [mga kinakailangan para sa Computer Use](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez), ito ay lalabas din sa listahan. Piliin ang **Prompt**.

![Piliin ang Prompt](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.tl.png)

1. Maglagay ng pangalan para sa prompt. Pangalanan natin ang ating prompt na `IT Expert`.

![Maglagay ng Pangalan](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.tl.png)

1. Piliin ang **chevron icon** sa tabi ng **Model** upang makita ang iba't ibang chat models na maaari mong piliin. Sa default, ang **Basic GPT-4.1 mini** model ay napili at mayroon ka ring opsyon na magdala ng sarili mong model gamit ang Azure AI Foundry Models. Mananatili tayo sa napiling default model.

![Baguhin ang Model](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.tl.png)

1. Susunod, magbibigay tayo ng mga tagubilin para sa ating prompt. Mayroong 3 paraan na maaari mong piliin:

   - Gumamit ng Copilot upang bumuo ng mga tagubilin para sa iyo batay sa iyong paglalarawan ng gusto mong gawin ng prompt.
   - Gumamit ng preset template mula sa prompt library upang gumawa ng prompt.
   - Manu-manong maglagay ng sarili mong mga tagubilin.

1. Subukan muna natin ang paggamit ng Copilot upang bumuo ng mga tagubilin batay sa isang paglalarawan na inilagay. Ilagay ang sumusunod sa Copilot field at isumite.

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

![Simulan gamit ang Copilot](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.tl.png)

1. Ang Copilot ay magsisimulang bumuo ng prompt para sa atin.

![Copilot Gumagawa ng Prompt](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.tl.png)

1. Lalabas ang draft instructions na ginawa ng Copilot.

![Draft Instructions ng Copilot](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.tl.png)

1. Mag-scroll pababa sa ibaba ng mga tagubilin at makikita mo ang user input parameter na na-define na ng Copilot. Mayroon kang opsyon na:
   - Panatilihin ang draft instructions na ginawa.
   - I-refresh ang draft instructions gamit ang Copilot.
   - I-clear ang draft instructions.

I-clear ang draft instructions sa pamamagitan ng pagpili sa **trash bin** icon at susunod nating susubukan ang prompt library.

![Mga Tagubilin ng Prompt](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.tl.png)

1. Piliin ang link na **prompt template**.

![Piliin ang Prompt Template](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.tl.png)

1. Makikita mo ang listahan ng mga prompt template na maaari mong piliin. Ang mga ito ay mula sa [Power Platform Prompt library](https://aka.ms/power-prompts).

![Prompt Library](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.tl.png)

1. Hanapin ang prompt na `IT expert` at piliin ito.

![Piliin ang IT Expert Prompt](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.tl.png)

1. Ang prompt ay idadagdag bilang mga tagubilin na may input parameter na na-define ng prompt template. Katulad ng approach na ginawa natin sa pagbibigay ng mga tagubilin para sa ating ahente sa conversational creation experience gamit ang Copilot, ang prompt template na ito ay naglalarawan ng:
   - isang gawain,
   - anong uri ng mga tanong ang kaya nitong sagutin,
   - at ang format ng tugon nito at ang layunin ng prompt.

![Mga Tagubilin ng Prompt](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.tl.png)

1. I-clear ang mga tagubilin at susunod nating subukan ang manu-manong paglalagay ng mga tagubilin. Gagamitin natin ang [IT Expert prompt](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/) mula sa [Power Platform Prompt library](https://aka.ms/power-prompts). Kopyahin at i-paste ang prompt.

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

![Mga Tagubilin ng Prompt](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.tl.png)

1. Susunod, maaari nating i-define ang user input parameters ng ating prompt. Ang mga ito ay maaaring text at images, at sample data para sa testing. May kakayahan din na i-ground ang prompt gamit ang kaalaman mula sa Dataverse tables. Para sa exercise na ito, mayroon lamang tayong isang user input na kailangang i-define na ang problem input. Sa kasalukuyan, ito ay placeholder sa ating prompt bilang `[Problem]`. I-configure natin ang input na ito sa pamamagitan ng paglalagay ng `/` character o pagpili sa **+Add content** at pagkatapos piliin ang **Text**.

![Text Input](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.tl.png)

1. Maaari na nating ilagay ang pangalan para sa ating input parameter at sample data.

Ilagay ang sumusunod bilang pangalan:

    ```text
    problem input
    ```

Ilagay ang sumusunod bilang sample data:

    ```text
    My laptop gets an error with a blue screen
    ```

Pagkatapos, piliin ang **Close**.

![I-configure ang Problem Input](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.tl.png)

1. Ang problem input parameter ay idadagdag na sa mga tagubilin kasama ang na-configure na sample data. Maaari na nating subukan ang ating prompt!

![Nagdagdag ng Problem Input](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.tl.png)

1. Piliin ang **Test** upang subukan ang prompt.

![Subukan ang Mga Tagubilin](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.tl.png)

1. Lalabas ang tugon. Pansinin kung paano nagbibigay ang tugon ng mga heading na may bullet points ayon sa mga tagubilin. Mag-scroll pababa at suriin ang natitirang bahagi ng tugon ng model.

![Tugon ng Model](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.tl.png)

1. Bago natin i-save ang ating prompt, alamin natin ang tungkol sa mga settings na maaaring i-configure para sa prompt na ito. Piliin ang **ellipsis (...) icon**.

![Mga Setting ng Prompt](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.tl.png)

1. Dito makikita natin ang tatlong setting na maaaring i-configure:

   - **Temperature**: Ang mas mababang temperatura ay nagdudulot ng predictable na resulta, habang ang mas mataas na temperatura ay nagbibigay-daan sa mas diverse o creative na tugon.
   - **Record retrieval**: Tukuyin ang bilang ng mga record na nakuha para sa iyong mga knowledge sources.
   - **Include links in the response**: Kapag napili, ang tugon ay may kasamang link citations para sa mga nakuha na record.

Piliin ang **X** icon upang lumabas mula sa Settings.

![I-configure ang Settings](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.tl.png)

1. Piliin ang **Save** upang i-save ang prompt.

![I-save ang Prompt](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.tl.png)

1. Susunod, piliin ang **Add to agent** upang idagdag ang prompt sa ating declarative agent.

![Mga Tagubilin ng Prompt](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.tl.png)

1. Ang prompt ay lalabas na sa ilalim ng Tools 🙌🏻

![Nagdagdag ng Prompt](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.tl.png)

Susunod nating i-update ang ating mga tagubilin upang i-invoke ang prompt at subukan ang ating declarative agent.

### 3.3 I-update ang mga tagubilin at subukan ang iyong declarative agent

1. Mag-scroll pataas sa seksyong **Details** at piliin ang **Edit**. Papayagan nito ang mga field na maging editable.

![Piliin ang Edit](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.tl.png)

1. Maaari na nating i-update ang ating mga tagubilin upang i-invoke ang ating prompt sa pamamagitan ng pag-refer sa pangalan ng prompt. I-clear ang mga tagubilin, pagkatapos ay kopyahin at i-paste ang sumusunod.

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

Pansinin kung paano ang huling pangungusap ay nag-uutos sa ahente na gamitin ang tanong na tinanong ng user bilang value para sa problem input parameter. Gagamitin ng ahente ang tanong bilang problem input para sa prompt. Susunod, piliin ang **Save**.

![I-update ang Mga Tagubilin upang I-invoke ang Prompt](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.tl.png)

1. Handa na tayong subukan ang na-update na mga tagubilin ng ating declarative agent. Piliin ang **refresh icon** sa test pane.

![Piliin ang Refresh Icon](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.tl.png)

1. Susunod, ilagay ang sumusunod na prompt sa ibaba at isumite.

```text
Can you help me, my laptop is encountering a blue screen
```

![Gawin ang Pagsubok](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.tl.png)

1. Ang ahente ay mag-iinvoke ng prompt at magbibigay ng tugon.

![Mga Tagubilin ng Prompt](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.tl.png)

Ngayon, i-publish na natin ang ating declarative agent 😃

### 3.4 I-publish ang iyong declarative agent sa Microsoft 365 Copilot at Microsoft Teams

1. Piliin ang **Publish**.

![I-publish ang Ahente](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.tl.png)

1. Lalabas ang isang modal na nagpapakita ng Channels at mga detalye ng pag-publish na maaaring i-update.

   - Channels: Ang ahente ay ipo-publish sa Microsoft 365 Copilot at Microsoft Teams.
   - Agent app information: Ito ang ipapakita kapag idinagdag ng user ang ahente sa Microsoft 365 Copilot o sa Microsoft Teams. Ang mga ito ay mga field na maaaring i-update kung kinakailangan.

![Mga Detalye ng Agent App](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.tl.png)

1. Halimbawa, maaari mong i-update ang **Short description**, **Long description**, **Developer name** gamit ang iyong pangalan.

!!! tip
Kung hindi mo nakikita ang lahat ng field na ipinapakita sa iyong browser, subukang mag-zoom out e.g. 75%

Piliin ang **Publish**. Ang Copilot Studio ay magsisimulang i-publish ang ahente.

![Nag-publish ng Ahente](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.tl.png)

1. Kapag natapos ang pag-publish, makikita natin ang [Availability options](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez) ng ahente.

| Availability option    | Deskripsyon |
| ---------- | ---------- |
| Share Link | Kopyahin ang link upang ipamahagi ito sa mga shared users upang buksan ang ahente sa Microsoft 365 Copilot |
| Show to my teammates and shared users  | Pinapayagan kang magbigay ng access sa iba upang makilahok sa pag-aayos ng ahente, o sa mga security groups upang bigyan sila ng access na gamitin ang ahente sa Microsoft 365 Chat o Microsoft Teams.  |
| Show to everyone in my org   | Ipasa sa tenant admin upang idagdag sa organizational catalog para sa lahat ng tenant users na idagdag ang ahente. Ang ahente ay magpapakita sa ilalim ng Built by your org sa Microsoft 365 Copilot at sa Microsoft Teams    |
| Download as a .zip    | I-download bilang zip file upang i-upload bilang custom app sa Microsoft Teams    |

![Mga Opsyon sa Availability](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.tl.png)

1. Tingnan natin ang pagbabahagi ng ahente. Piliin ang **Show to my teammates and shared users**. Lalabas ang isang pane kung saan maaari kang maghanap ng mga user na gusto mong ibahagi ang ahente sa pamamagitan ng paglalagay ng kanilang pangalan, email, o security group. Maaari mong suriin ang listahan na ito anumang oras upang i-edit kung sino ang may access sa ahente.

Mayroon ding dalawang checkbox:
- _Send an email invitation to new users_ - ang mga bagong user ay makakatanggap ng email invitation.
- _Visible Built with Power Platform_ - ang ahente ay magiging available sa Built with Power Platform section ng Teams app store.
Para sa karagdagang detalye, bisitahin ang [Connect and configure an agent for Teams and Microsoft 365](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez).

Pindutin ang **Cancel** o ang **X** icon upang lumabas sa pane.

![Ibahagi ang agent](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.tl.png)

1. Pindutin ang **Copy** at i-paste ang link sa bagong tab ng browser.

![Kopyahin ang link](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.tl.png)

1. Maglo-load ang Microsoft 365 Copilot at lilitaw ang isang modal na may mga detalye ng agent app. Pansinin kung paano ipinapakita ang pangalan ng developer, maikling deskripsyon, at mahabang deskripsyon. Ang mga ito ay mula sa mga detalye ng pag-publish na na-update sa naunang hakbang.

Pindutin ang **Add**.

![Mga opsyon sa availability](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.tl.png)

1. Maglo-load ang ating declarative agent. Makikita natin ang mga starter prompt na maaaring piliin upang mabilis na makakuha ng tulong.

Piliin ang isa sa mga starter prompt. Sa aking mga starter prompt, pipiliin ko ang **Software Installation Help** prompt na awtomatikong maglalagay ng mensahe sa Copilot field. I-submit ang tanong sa Copilot.

![Piliin ang starter prompt](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.tl.png)

1. Pindutin ang **Always allow** upang bigyan ng pahintulot ang iyong declarative agent na gamitin ang IT Expert prompt.

![Piliin ang always allow](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.tl.png)

1. Ang agent ay gagamit ng **IT Expert** prompt at makikita natin ang model response na ibinalik bilang mensahe sa ating declarative agent.

![Response](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.tl.png)

Mag-scroll pababa upang makita ang buong detalye ng response.

![Response](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.tl.png)

1. Pero _paano natin malalaman_ na ginamit ng declarative agent ang prompt? 👀 Narito ang isang tip!

!!! tip
    Maaari mong i-test at i-debug ang mga agent sa Microsoft 365 Copilot sa pamamagitan ng pag-enable ng [developer mode](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez).

Ilagay ang sumusunod sa message Copilot field at i-submit.

    ```text
    -developer on
    ```

Lilitaw ang isang confirmation message upang ipaalam sa iyo na naka-enable na ang developer mode.

![Developer mode enabled](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.tl.png)

1. I-submit ang sumusunod na tanong upang gamitin ang prompt.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Ilagay ang tanong](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.tl.png)

1. Makikita natin ang model response mula sa **IT Expert** prompt na ibinalik bilang mensahe. Mag-scroll pababa sa dulo ng mensahe at makikita ang isang card na may debug information.

I-expand ang **Agent Debug Info** sa pamamagitan ng pagpili nito.

![Agent debug info](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.tl.png)

1. Dito makikita ang impormasyon tungkol sa metadata ng agent na nangyari sa runtime.

![Agent debug info expanded](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.tl.png)

Sa ating use case, magpo-focus tayo sa _Actions_ section.

- Ang **Matched actions** ay nagpapakita ng kasalukuyang status ng mga function na natagpuan sa paghahanap ng app.
- Ang **Selected actions** ay nagpapakita ng kasalukuyang status ng mga function na napili upang patakbuhin base sa proseso ng desisyon ng app.

![Agent debug info expanded](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.tl.png)

Dito makikita natin na pinili ng agent orchestrator na gamitin ang IT Expert prompt ayon sa mga instruksyon ng ating declarative agent. Ito ay mas detalyado sa _Executed Actions_ section na nagsasabi rin na matagumpay nitong ginamit ang prompt.

![Review agent debug info](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.tl.png)

1. Upang i-turn off ang developer mode, ilagay ang sumusunod sa message Copilot field at i-submit.

    ```text
    -developer off
    ```

Lilitaw ang isang confirmation message upang ipaalam sa iyo na naka-disable na ang developer mode. Ayos, ngayon alam mo na kung paano i-verify kung ginamit ng iyong declarative agent sa Microsoft 365 Copilot ang iyong prompt 🌞

![Developer mode disabled](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.tl.png)

1. Susunod, i-test natin ang ating agent sa Microsoft Teams. Pumunta sa **Apps** gamit ang menu sa kaliwang bahagi at piliin ang **Teams** sa ilalim ng _Apps_ section.

![Piliin ang Teams sa Apps](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.tl.png)

1. Maglo-load ang Microsoft Teams sa bagong tab ng browser at ipapakita ang terms of use para sa Microsoft 365 Copilot, piliin ang **Agree**.

![Piliin ang Agree](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.tl.png)

1. Maglo-load ang Microsoft 365 Copilot bilang default, na may pane sa kanang bahagi na nagpapakita ng lahat ng iyong available na agents, kabilang ang **Contoso Tech Support Pro** declarative agent.

![Microsoft 365 Copilot sa Teams](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.tl.png)

1. Piliin ang **ellipsis icon (...)** sa kaliwang bahagi ng menu. Hanapin ang **Contoso Tech Support Pro** sa search field o kung nakikita mo ang agent, piliin ito.

Maaari mo ring i-right-click ang iyong mouse upang **Pin** ang agent para sa mabilisang pag-access sa kaliwang bahagi ng menu sa Microsoft Teams.

![Piliin at i-pin ang agent](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.tl.png)

1. Maglo-load ang ating agent. Susunod, i-test natin ang ating agent. Ilagay ang sumusunod na prompt at i-submit.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Pin agent](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.tl.png)

1. Ang model response mula sa ating prompt ay ipapakita.

![Response sa Teams](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.tl.png)

Sa loob ng ilang minuto, natutunan mo kung paano i-publish ang iyong declarative agent at i-test ito sa Microsoft 365 Copilot at sa Microsoft Teams 😊

## ✅ Misyon Kumpleto

Binabati kita! 👏🏻 Naitayo mo na ang isang declarative agent sa Copilot Studio kung saan nagdagdag ka ng Prompt, inutusan ang agent na gamitin ang Prompt, at natutunan kung paano i-test + i-publish ang iyong agent sa Microsoft 365 Copilot at Microsoft Teams.

Ang iyong agent ay handa na—handa nang tumulong, mag-troubleshoot, at magbigay serbisyo sa mga internal na user anumang oras.

Ito na ang katapusan ng **Lab 03 - Build a declarative agent in Microsoft Copilot Studio for Microsoft 365 Copilot**, piliin ang link sa ibaba upang magpatuloy sa susunod na aralin.

⏭️ [Pumunta sa araling **Creating a new Solution**](../04-creating-a-solution/README.md)

Hanggang sa muli, manatiling matalas. Ang hinaharap ng enterprise work ay dumadaan sa mga agent—at ngayon alam mo na kung paano gumawa ng isa.

## 📚 Mga Taktikal na Resources

🔗 [Build declarative agent in Microsoft Copilot Studio for Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Add prompts](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Share agents with other users](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [Build prompts for your agent](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="Analytics" />

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, pakatandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.