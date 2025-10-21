<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-21T18:43:58+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "my"
}
-->
# 🚨 မစ်ရှင် 03: Microsoft 365 Copilot အတွက် Declarative Agent တစ်ခုကို Deploy လုပ်ပါ

## 🕵️‍♂️ ကုဒ်နာမည်: `OPERATION COPILOT EXTENSION`

> **⏱️ လုပ်ဆောင်ချိန်:** `~60 မိနစ်`

🎥 **လမ်းညွှန်ဗီဒီယိုကြည့်ရန်**

[![Declarative Agent ဖန်တီးရန် ဗီဒီယို thumbnail](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.my.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "YouTube တွင် လမ်းညွှန်ကို ကြည့်ပါ")

## 🎯 မစ်ရှင်အကျဉ်းချုပ်

Agent Maker အဖြစ် သင့်ရဲ့ ပထမဆုံး လုပ်ငန်းတာဝန်ကို ကြိုဆိုပါတယ်။ Microsoft 365 Copilot နှင့် Microsoft Teams တွင် တိုက်ရိုက် ထည့်သွင်းထားသော အထူးလုပ်ဆောင်နိုင်စွမ်းရှိ Declarative Agent တစ်ခုကို ဒီဇိုင်းဆွဲရန်၊ ပစ္စည်းများထည့်သွင်းရန်နှင့် Deploy လုပ်ရန် သင့်ကို ရွေးချယ်ထားပါသည်။

ရိုးရာ Agent များနှင့် မတူဘဲ Declarative Agent များသည် သတ်မှတ်ထားသော မစ်ရှင် (ညွှန်ကြားချက်များ)၊ Tools (Prompts/Connectors) နှင့် အတွင်း Intelligence (Knowledge Sources များကဲ့သို့ SharePoint, Dataverse စသည်တို့) ကို ရယူနိုင်စွမ်းရှိသည်။ Microsoft Copilot Studio ကို အသုံးပြု၍ Agent ၏ ကျွမ်းကျင်မှုနှင့် ရည်ရွယ်ချက်ကို ဖန်တီးရန် သင့်တာဝန်ဖြစ်သည်။

စတင်လိုက်ကြစို့။

## 🔎 ရည်မှန်းချက်များ

ဒီမစ်ရှင်တွင် သင်လေ့လာရမည့်အရာများမှာ-

1. Declarative Agent များသည် Microsoft 365 Copilot ကို Custom လုပ်နိုင်စွမ်းဖြင့် ဘယ်လိုတိုးချဲ့ပေးနိုင်သည်ကို နားလည်ခြင်း
1. Microsoft Copilot Studio နှင့် Copilot Studio Agent Builder တို့ကို နှိုင်းယှဉ်၍ Declarative Agent များကို ဖန်တီးခြင်း
1. သဘာဝဘာသာစကားကို အသုံးပြု၍ Conversational Creation Experience မှတစ်ဆင့် Declarative Agent တစ်ခုကို ဖန်တီးခြင်း
1. AI Prompts များကို Tools အဖြစ် ထည့်သွင်း၍ Agent ၏ အထူးကျွမ်းကျင်မှုနှင့် ပြဿနာဖြေရှင်းနိုင်စွမ်းကို တိုးမြှင့်ခြင်း
1. Microsoft 365 Copilot နှင့် Microsoft Teams တွင် Declarative Agent ကို Publish လုပ်ပြီး စမ်းသပ်ခြင်း

## 🕵🏻‍♀️ Microsoft 365 Copilot အတွက် Declarative Agent ဆိုတာဘာလဲ?

Declarative Agent များသည် Microsoft 365 Copilot ၏ Tailored Version များဖြစ်သည်။ Microsoft 365 Copilot ကို သတ်မှတ်ထားသော လုပ်ငန်းလိုအပ်ချက်များနှင့် ကိုက်ညီစေရန် Process တစ်ခုကို ပံ့ပိုးရန် ညွှန်ကြားချက်များပေးခြင်း၊ Enterprise Knowledge ဖြင့် Ground လုပ်ခြင်းနှင့် Tools များကို အသုံးပြု၍ တိုးချဲ့နိုင်စွမ်းရှိသည်။ ဒါဟာ အဖွဲ့အစည်းများအတွက် အသုံးပြုသူများအတွက် ပိုမို Functionality ရှိသော Personalize လုပ်ထားသော အတွေ့အကြုံများကို ဖန်တီးနိုင်စေသည်။

## 🤔 Microsoft Copilot Studio ကို အသုံးပြု၍ Declarative Agent တစ်ခုကို ဘာကြောင့် ဖန်တီးရမလဲ?

Maker အဖြစ် သင်သည် [Copilot Studio Agent Builder](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez) ကို Microsoft 365 Copilot တွင် ရှာဖွေပြီးသားဖြစ်နိုင်ပြီး _Microsoft Copilot Studio တွင် Declarative Agent တစ်ခုကို ဘာကြောင့် ဖန်တီးရမလဲ?_ ဆိုတာကို စဉ်းစားနေဖြစ်နိုင်သည်။

Microsoft Copilot Studio သည် Declarative Agent များအတွက် Copilot Studio Agent Builder ၏ ကန့်သတ်ချက်များကို ကျော်လွှားသော Tools နှင့် Features များကို ပေးသည်။ Copilot Studio Agent Builder ကဲ့သို့ပင် Microsoft Copilot Studio တွင် ဖန်တီးရန် Programming သို့မဟုတ် Software Development ကို မသိထားဖို့ မလိုအပ်ပါ။ Copilot Studio Agent Builder နှင့် Copilot Studio တို့၏ ကွာခြားချက်များကို နက်နက်ရှိုင်းရှိုင်း နားလည်ရန် ဆက်လက်ရှင်းပြပါမည်။

### Feature နှိုင်းယှဉ်ခြင်း

Copilot Studio Agent Builder နှင့် Copilot Studio တွင် Declarative Agent တစ်ခုကို ဖန်တီးခြင်းအခါ Feature များ၏ ကွာခြားချက်များကို အောက်ပါဇယားတွင် ဖော်ပြထားသည်။

| Feature                   | Microsoft 365 Copilot တွင် Copilot Studio Agent Builder                          | Copilot Studio တွင် Microsoft 365 Copilot ကို တိုးချဲ့ခြင်း                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **Knowledge**       | Web, SharePoint, Microsoft Teams chats, Outlook emails, Copilot connectors     | Web search (via Bing), SharePoint, Dataverse, Dynamics 365, Copilot connectors  |
| **Tools**       | Code interpreter, image generator     | 1400+ Power Platform connectors, custom connectors, prompt, computer use, REST API, Model Context Protocol   |
| **Starter prompts**         | အသုံးပြုသူများအတွက် Prompt များကို အလွယ်တကူ စတင်ရန် Configure လုပ်ခြင်း   | အသုံးပြုသူများအတွက် Prompt များကို အလွယ်တကူ စတင်ရန် Configure လုပ်ခြင်း  |
| **Channel**           | Agent ကို Microsoft 365 Copilot တွင်သာ Publish လုပ်နိုင်သည်     | Agent ကို Microsoft 365 Copilot နှင့် Microsoft Teams တွင် Publish လုပ်နိုင်သည်      |
| **Sharing permissions**         | အသုံးပြုသူများသည် Viewer များသာဖြစ်သည်    | အသုံးပြုသူများသည် Editor သို့မဟုတ် Viewer များဖြစ်နိုင်သည်   |

Microsoft Copilot Studio တွင် ဖန်တီးထားသော Declarative Agent များအတွက် ပိုမိုများပြားသော လုပ်ဆောင်နိုင်စွမ်းများရှိသည်။ အောက်တွင် ဆက်လက်လေ့လာကြပါမည်။

!!! tip
    - Copilot Studio Agent Builder အကြောင်း ပိုမိုလေ့လာရန် [Copilot Developer Camp: Lab MAB1 - Build your first agent](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/) သို့ သွားပါ။
    - Microsoft 365 Copilot အတွက် Copilot Studio Agent Builder ကို ကျော်လွှား၍ Declarative Agent တစ်ခုကို တိုးချဲ့ဖန်တီးရန် [Copilot Developer Camp: Lab MAB1 - Build your first agent](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/) သို့ သွားပါ။

### Copilot Studio တွင် ဖန်တီးထားသော Declarative Agent များဖြင့် Microsoft 365 Copilot ကို တိုးချဲ့ခြင်း

Feature နှိုင်းယှဉ်ဇယားမှ သင်လေ့လာခဲ့သောအရာများကို တိုးချဲ့ကြည့်ပါ။

#### Customization

- **အသေးစိတ်ညွှန်ကြားချက်များ**: Agent ၏ ရည်ရွယ်ချက်နှင့် အပြုအမူကို တိကျစွာ သတ်မှတ်ရန် အသေးစိတ်ညွှန်ကြားချက်များပေးနိုင်သည်။
  - သဘာဝဘာသာစကားကို အသုံးပြု၍ Tools များကို အလွယ်တကူ ခေါ်ယူနိုင်သည်။

- **Enterprise Knowledge Access**: အသုံးပြုသူ၏ အခွင့်အာဏာများကို လေးစားသော Enterprise Knowledge ကို ရယူနိုင်စွမ်းရှိသည်။
  - SharePoint အတူတကွပေါင်းစည်းမှု
  - Dataverse အတူတကွပေါင်းစည်းမှု
  - Dynamics 365 အတူတကွပေါင်းစည်းမှု
  - Microsoft 365 Copilot connectors များကို အဖွဲ့အစည်း၏ အုပ်ချုပ်သူက Enabled လုပ်ထားသည်

   ![Customization](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.my.png)

#### အဆင့်မြင့် လုပ်ဆောင်နိုင်စွမ်းများ

- **အပြင်ပ ဝန်ဆောင်မှုများနှင့် ပေါင်းစည်းမှု**: အပြင်ပ ဝန်ဆောင်မှုများနှင့် ပေါင်းစည်းနိုင်သော 1400+ Power Platform connectors များကို ရွေးချယ်နိုင်ပြီး ပိုမိုရှုပ်ထွေးသော လုပ်ဆောင်နိုင်စွမ်းများကို ပေးစွမ်းနိုင်သည်။
  - ဥပမာများမှာ [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez), [ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez), [Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez), [SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) စသည်တို့ဖြစ်သည်။
  - အခြားနည်းလမ်းအဖြစ် Model Context Protocol servers နှင့် REST APIs များကို တိုက်ရိုက် အသုံးပြုနိုင်သည်။

- **AI Prompts**: သဘာဝဘာသာစကားနှင့် AI Reasoning ကို အသုံးပြု၍ Text, Documents, Images နှင့် Data များကို Analysis လုပ်ခြင်းနှင့် Transform လုပ်ခြင်း။
  - Chat Model ကို ရွေးချယ်ပါ၊ Basic (Default), Standard, Premium တို့အနက်မှ ရွေးချယ်ပါ။
  - Prompt ကို Ground လုပ်ရန် သင့်ကိုယ်ပိုင် Azure AI Foundry Model ကို အသုံးပြုနိုင်သည်။

- **Deployment Configuration Options ပိုမိုများပြားခြင်း**: Channels များကို ရွေးချယ်ပြီး အသုံးပြုသူ အခွင့်အာဏာများကို သတ်မှတ်နိုင်သည်။
  - Microsoft Teams တွင် Publish လုပ်ခြင်း၊ အသုံးပြုသူများအတွက် အလွယ်တကူ အသုံးပြုနိုင်သော Interface
  - Agent ၏ ပိုင်ရှင်တစ်ဦးအပေါ် မူတည်မှုကို ကာကွယ်ရန် Edit User Permissions များကို မျှဝေနိုင်သည်။

   ![Customization](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.my.png)

အကျဉ်းချုပ်အားဖြင့် Microsoft Copilot Studio တွင် Declarative Agent များသည် Enterprise Knowledge Systems, အပြင်ပ ဝန်ဆောင်မှုများနှင့် Tools များကို ပေါင်းစည်းခြင်းမှတစ်ဆင့် လုပ်ငန်းလိုအပ်ချက်များနှင့် ကိုက်ညီစေရန် Microsoft 365 Copilot ကို Custom လုပ်နိုင်စွမ်းရှိသည်။

## 🧪 Lab 03: Microsoft Copilot Studio တွင် Microsoft 365 Copilot အတွက် Declarative Agent တစ်ခုကို ဖန်တီးခြင်း

"Business-to-Employee" အသုံးပြုမှုအတွက် **IT Helpdesk Agent** အဖြစ် လုပ်ဆောင်မည့် Declarative Agent တစ်ခုကို ဖန်တီးရန် လေ့လာပါမည်။

- [3.1 Declarative Agent တစ်ခုကို ဖန်တီးခြင်း](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 Declarative Agent အတွက် Prompt တစ်ခုကို ဖန်တီးပြီး ထည့်သွင်းခြင်း](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 Instruction များကို Update လုပ်ပြီး Declarative Agent ကို စမ်းသပ်ခြင်း](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 Microsoft 365 Copilot နှင့် Microsoft Teams တွင် Declarative Agent ကို Publish လုပ်ခြင်း](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    ဒီ Lab မှာ Prompt ကို Tool အဖြစ် ထည့်သွင်းခြင်းအဆင့်များကို ရှင်းပြပါမည်။ နောက်ထပ် သင်ခန်းစာများတွင် Knowledge Sources ထည့်သွင်းခြင်းနှင့် အခြား Tools များ ထည့်သွင်းခြင်းကို လေ့လာပါမည်။ သင့်လေ့လာမှုအတွက် ရိုးရှင်းစေရန် 😊

### 👩🏻‍💼 Business-to-Employee (B2E) ကို နားလည်ခြင်း

Business-to-Employee (B2E) သည် လုပ်ငန်းတစ်ခုမှ ၎င်း၏ ဝန်ထမ်းများကို တိုက်ရိုက်ပေးသော အဆက်အသွယ်များနှင့် ဝန်ဆောင်မှုများကို ဆိုလိုသည်။ Agent ၏ အနေနဲ့ဆိုရင် Copilot Studio ၏ အဆင့်မြင့်လုပ်ဆောင်နိုင်စွမ်းများကို အသုံးပြု၍ အဖွဲ့အစည်းတွင်း ဝန်ထမ်းများ၏ အလုပ်အတွေ့အကြုံကို ပိုမိုကောင်းမွန်စေရန် ပံ့ပိုးပေးခြင်းကို ဆိုလိုသည်။

### ✨ အသုံးပြုမှုအခြေအနေ

**အဖြစ်** ဝန်ထမ်းတစ်ဦးအနေဖြင့်

**လိုချင်သည်** IT Helpdesk Agent မှ စက်ပစ္စည်းပြဿနာများ၊ Network Troubleshooting၊ Printer Setup ကဲ့သို့သော ပြဿနာများအတွက် အကောင်းဆုံးနှင့် အတိအကျ အကူအညီရရှိရန်

**ဒါကြောင့်** ထိရောက်မှုရှိစွာ အလုပ်လုပ်နိုင်ပြီး နည်းပညာဆိုင်ရာ ပြဿနာများကို အချိန်မကုန်ဘဲ ဖြေရှင်းနိုင်ရန်

စတင်လိုက်ကြစို့!

### လိုအပ်ချက်များ

- Makers သည် Copilot Studio Environment တွင် ဖန်တီးရန် အခွင့်အာဏာရှိရမည်။

!!! note "Licensing note"
    ဒီ Lab မှာ Prompt ကို Tool အဖြစ် ထည့်သွင်းခြင်းအဆင့်များကို ရှင်းပြပါမည်။ နောက်ထပ် သင်ခန်းစာများတွင် Knowledge Sources ထည့်သွင်းခြင်းနှင့် အခြား Tools များ ထည့်သွင်းခြင်းကို လေ့လာပါမည်။ သင့်လေ့လာမှုအတွက် ရိုးရှင်းစေရန် 😊
  
    Microsoft Copilot Studio တွင် ဖန်တီးထားသော Declarative Agent ကို Microsoft 365 Copilot တွင် Publish လုပ်ရန် Microsoft 365 Copilot User License မလိုအပ်ပါ။ သို့သော် **အသုံးပြုသူများ**သည် _Published Declarative Agent_ ကို Microsoft 365 Copilot တွင် အသုံးပြုရန် Microsoft 365 Copilot User License လိုအပ်ပါသည်။

### 3.1 Declarative Agent တစ်ခုကို ဖန်တီးခြင်း

!!! warning "Copilot မေးခွန်းများ Session အလိုက် ကွဲပြားနိုင်သည်"

    Copilot Conversational Creation Experience သည် Session တစ်ခုစီတွင် Guidance မေးခွန်းများ အနည်းငယ် ကွဲပြားနိုင်သည်။

1. [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/) သို့ သွားပြီး သင့်ရဲ့ credentials ဖြင့် Sign In လုပ်ပါ။ ဒီ Lab များအတွက် သုံးနေသော Environment ကို Switch လုပ်ပါ။

1. Menu မှ **Agents** ကို ရွေးပြီး **Copilot for Microsoft 365** ကို ရွေးပါ။

       ![Copilot for Microsoft 365](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.my.png)

1. နောက်တစ်ဆင့်မှာ **+ Add** Agent ကို ရွေးပြီး Declarative Agent တစ်ခုကို ဖန်တီးပါ။

       ![Add Agent](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.my.png)

1. Copilot Conversational Creation Experience ကို Load လုပ်ပြီး သဘာဝဘာသာစကားဖြင့် Agent ကို ဖော်ပြရန် Chat လုပ်နိုင်သည်။ Guidance မေးခွန်းများကို အသုံးပြုပါ။

       အောက်ပါအချက်များကို ဖော်ပြထားသော Prompt ကို ထည့်သွင်းပါ၊  
       - Agent ၏ လုပ်ငန်းတာဝန်  
       - Handle လုပ်နိုင်သော မေးခွန်းအမျိုးအစား  
       - Response Format  
       - Agent ၏ ရည်မှန်းချက်  
    
       ```text
       သင်သည် Computer Systems, Networking, Cybersecurity အမျိုးမျိုးတွင် ကျွမ်းကျင်သော IT Professional တစ်ဦးဖြစ်သည်။ နည်းပညာဆိုင်ရာ ပြဿနာများကို Diagnostic လုပ်ပြီး ဖြေရှင်းနိုင်သည်။ အသုံးပြုသူများ၏ နည်းပညာအဆင့်အလိုက် ဖြေရှင်းချက်များကို ရှင်းလင်းစွာ ရှင်းပြနိုင်သည်။ သင်၏ရည်မှန်းချက်မှာ အသုံးပြုသူများကို ပြဿနာကို နားလည်စေပြီး ထိရောက်စွာ ဖြေရှင်းနိုင်စေခြင်းဖြစ်သည်။
       ```
    
       ![Create Prompt](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.my.png)

1. Prompt ကို Submit လုပ်ပြီးနောက် Agent ၏ Instruction များကို Right-hand Side Pane တွင် Update လုပ်ထားသည်ကို တွေ့ရမည်။ Agent ၏ နာမည်ကို Confirm လုပ်ရန် မေးမြန်းမည်။

       Copilot က အကြံပြုထားသော နာမည်ကို လက်ခံရန် `yes` ထည့်သွင်းပါ၊ သို့မဟုတ် အောက်ပါနာမည်ကို ထည့်သွ
      ![Agent details](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.my.png)

      ပန်းကိုအောက်သို့လှိမ့်ပြီး သင် Microsoft 365 Copilot အတွက် declarative agent ရဲ့ publish အသေးစိတ်အချက်အလက်များ၊ knowledge ထည့်သွင်းခြင်း၊ Bing မှတဆင့် web search ကိုဖွင့်ခြင်း၊ starter prompts တွေကိုလည်းတွေ့နိုင်ပါမယ်။ Starter prompts တွေကိုလည်းညာဘက် test pane မှာပြသထားပါမယ်။ အသုံးပြုသူတွေက agent နဲ့စတင်ပြောဆိုဖို့အတွက် starter prompts တွေကိုရွေးချယ်နိုင်ပါတယ်။

      ![Suggested prompts](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.my.png)

1. Agent ရဲ့ Details အပိုင်းမှာ သင် agent icon ကိုလည်းပြောင်းလဲနိုင်ပါတယ်။ **Edit** ကိုရွေးချယ်ပါ။

      ![Edit details](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.my.png)

      ဒီနေရာမှာ icon နဲ့နောက်ခံအရောင်ကိုပြောင်းလဲနိုင်ပါတယ်။ **Save** ကိုရွေးချယ်ပြီး agent ရဲ့အသေးစိတ်အချက်အလက်တွေကို update လုပ်ပါ။

      ![Change icon](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.my.png)

1. အခုတော့ ကျွန်တော်တို့ဖန်တီးထားတဲ့ agent ကိုအမြန်စမ်းသပ်ကြည့်ရအောင်။ ညာဘက် test pane မှာ **Starter Prompts** တစ်ခုကိုရွေးချယ်ပါ။

      ![Test starter prompt](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.my.png)

1. ကျွန်တော်တို့ရဲ့ agent ကတုံ့ပြန်ပါမယ်။ Bullet points တွေကိုအသုံးပြုပြီး အချက်အလက်တွေကိုအပိုင်းပိုင်းခွဲပြီးတုံ့ပြန်ပေးထားတာကိုသတိထားပါ။ 

    Message ရဲ့အောက်ဆုံးကိုလှိမ့်ကြည့်ပါ။ Solution ပေးပြီးနောက် feedback တောင်းထားတာကိုလည်းသတိထားပါ။

      ![Response from testing](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.my.png)

အချိန်အနည်းငယ်အတွင်းမှာ Microsoft 365 Copilot အတွက် declarative agent ကို Copilot Studio မှာထည့်သွင်းပြီးပါပြီ 🙌🏻

အခုတော့ agent ကို tool တစ်ခုထည့်သွင်းပြီး prompt တစ်ခုဖန်တီးဖို့လေ့လာကြမယ်။

### 3.2 Declarative agent အတွက် prompt တစ်ခုဖန်တီးခြင်းနှင့်ထည့်သွင်းခြင်း

1. **Tools** အပိုင်းကိုအောက်သို့လှိမ့်ပြီး **+ Add tool** ကိုရွေးချယ်ပါ။

      ![Add tool](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.my.png)

1. Tools modal ပေါ်လာပြီး Power Platform connectors တွေကိုပြသပါမယ်။ Prompt တစ်ခုထည့်သွင်းဖို့ **+ New tool** ကိုရွေးချယ်ပါ။

      ![New tool](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.my.png)

1. Prompt, Custom connector, REST API နဲ့ Model Context Protocol တို့ပါဝင်တဲ့ tools စာရင်းကိုပြသပါမယ်။ သင့်အဖွဲ့အစည်းက [Computer Use အတွက်လိုအပ်ချက်များ](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez) ကိုဖြည့်ဆည်းထားလျှင် ဒီစာရင်းမှာလည်းပါဝင်ပါမယ်။ **Prompt** ကိုရွေးချယ်ပါ။

      ![Select prompt](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.my.png)

1. Prompt အတွက်နာမည်တစ်ခုထည့်သွင်းပါ။ Prompt ကို `IT Expert` လို့နာမည်ပေးကြမယ်။

      ![Enter name](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.my.png)

1. **Model** ရဲ့ **chevron icon** ကိုရွေးချယ်ပြီး chat models များကိုကြည့်ပါ။ Default အနေဖြင့် **Basic GPT-4.1 mini** model ကိုရွေးထားပြီး Azure AI Foundry Models ကိုအသုံးပြုနိုင်တဲ့ option လည်းရှိပါတယ်။ Default model ကိုပဲသုံးပါမယ်။

      ![Change model](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.my.png)

1. Prompt ကိုအညွှန်းများဖြင့်ပံ့ပိုးပေးပါမယ်။ အညွှန်းပေးဖို့နည်းလမ်း ၃ မျိုးရှိပါတယ်။

      - Prompt ကိုဘာလုပ်စေချင်သလဲဆိုတာကိုဖော်ပြပြီး Copilot ကိုအသုံးပြုပြီးအညွှန်းများကို auto generate လုပ်ပါ။
      - Prompt library မှ preset template ကိုအသုံးပြုပြီး prompt တစ်ခုဖန်တီးပါ။
      - ကိုယ်တိုင်အညွှန်းများကို manually ထည့်သွင်းပါ။

1. အရင်ဆုံး Copilot ကိုအသုံးပြုပြီးအညွှန်းများကို auto generate လုပ်ကြည့်ပါမယ်။ Copilot field မှာအောက်ပါအကြောင်းအရာကိုထည့်သွင်းပြီး submit လုပ်ပါ။

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

      ![Get started with Copilot](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.my.png)

1. Copilot က prompt ကို generate လုပ်ပါမယ်။

      ![Copilot drafts prompts](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.my.png)

1. Copilot generated draft instructions တွေကိုပြသပါမယ်။

      ![Copilot generated draft instructions](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.my.png)

1. အညွှန်းများရဲ့အောက်ဆုံးကိုလှိမ့်ကြည့်ပါ။ Copilot က user input parameter ကိုသတ်မှတ်ထားတာကိုတွေ့ပါမယ်။ သင်မှာအောက်ပါရွေးချယ်မှုများရှိပါတယ်။
    - Copilot generated draft instructions ကိုထားရှိပါ။
    - Copilot ကိုအသုံးပြုပြီး draft instructions ကို refresh လုပ်ပါ။
    - Draft instructions ကိုဖျက်ပါ။

        **trash bin** icon ကိုရွေးချယ်ပြီး prompt library ကိုစမ်းကြည့်ပါမယ်။

        ![Prompt instructions](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.my.png)

1. **prompt template** link ကိုရွေးချယ်ပါ။

    ![Select prompt template](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.my.png)

1. Prompt templates စာရင်းကိုရွေးချယ်နိုင်ပါမယ်။ [Power Platform Prompt library](https://aka.ms/power-prompts) မှာပါဝင်ပါတယ်။

    ![Prompt library](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.my.png)

1. `IT expert` prompt ကိုရှာပြီးရွေးချယ်ပါ။

    ![Select IT expert prompt](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.my.png)

1. Prompt template မှာသတ်မှတ်ထားတဲ့ input parameter နဲ့အညွှန်းများအဖြစ် prompt ကိုထည့်သွင်းပါမယ်။ Copilot နဲ့ conversational creation experience မှာ agent အတွက်အညွှန်းများပေးတဲ့နည်းလမ်းနဲ့တူတဲ့အတိုင်း ဒီ prompt template က
    - တာဝန်တစ်ခုကိုဖော်ပြထားပြီး
    - ဘယ်လိုမေးခွန်းတွေကိုဖြေရှင်းနိုင်မလဲဆိုတာဖော်ပြထားပြီး
    - တုံ့ပြန်မှုရဲ့ format နဲ့ prompt ရဲ့ရည်ရွယ်ချက်ကိုဖော်ပြထားပါတယ်။

    ![Prompt instructions](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.my.png)

1. အညွှန်းများကိုဖျက်ပြီး manually အညွှန်းများကိုထည့်သွင်းကြည့်ပါမယ်။ [Power Platform Prompt library](https://aka.ms/power-prompts) မှ [IT Expert prompt](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/) ကိုအသုံးပြုပါ။ Prompt ကို copy လုပ်ပြီး paste လုပ်ပါ။

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

    ![Prompt instructions](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.my.png)

1. Prompt ရဲ့ user input parameters ကိုသတ်မှတ်နိုင်ပါတယ်။ Text နဲ့ images တွေ၊ test လုပ်ဖို့ sample data တွေကိုထည့်သွင်းနိုင်ပါတယ်။ Dataverse tables မှ knowledge နဲ့ prompt ကို ground လုပ်နိုင်တဲ့စွမ်းရည်လည်းရှိပါတယ်။ ဒီ exercise မှာ user input တစ်ခုသာရှိပြီး problem input ကိုသတ်မှတ်ရပါမယ်။ Prompt မှာ placeholder အနေဖြင့် `[Problem]` လို့ရှိပါတယ်။ Input ကို configure လုပ်ဖို့ `/` character ကိုထည့်သွင်းပါ၊ ဒါမှမဟုတ် **+Add content** ကိုရွေးချယ်ပြီး **Text** ကိုရွေးချယ်ပါ။

    ![Text input](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.my.png)

1. Input parameter အတွက်နာမည်နဲ့ sample data ကိုထည့်သွင်းနိုင်ပါမယ်။

    နာမည်အဖြစ်အောက်ပါအကြောင်းအရာကိုထည့်သွင်းပါ

    ```text
    problem input
    ```

    Sample data အဖြစ်အောက်ပါအကြောင်းအရာကိုထည့်သွင်းပါ

    ```text
    My laptop gets an error with a blue screen
    ```

    ပြီးရင် **Close** ကိုရွေးချယ်ပါ။

    ![Configure problem input](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.my.png)

1. Problem input parameter ကို configured sample data နဲ့အညွှန်းများထဲမှာထည့်သွင်းပါမယ်။ Prompt ကိုစမ်းသပ်နိုင်ပါပြီ!

    ![Problem input added](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.my.png)

1. Prompt ကိုစမ်းသပ်ဖို့ **Test** ကိုရွေးချယ်ပါ။

    ![Test instructions](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.my.png)

1. Response ကိုပြသပါမယ်။ Response မှာအညွှန်းများအတိုင်း headings နဲ့ bullet points တွေကိုအသုံးပြုပြီးတုံ့ပြန်ထားတာကိုသတိထားပါ။ Model response ရဲ့အခြားအပိုင်းကိုလှိမ့်ကြည့်ပြီးဆန်းစစ်ပါ။

    ![Model response](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.my.png)

1. Prompt ကို save လုပ်မယ့်အခါ settings တွေကိုလေ့လာကြည့်ပါမယ်။ **ellipsis (...) icon** ကိုရွေးချယ်ပါ။

    ![Prompt settings](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.my.png)

1. ဒီနေရာမှာ configure လုပ်နိုင်တဲ့ settings သုံးခုကိုတွေ့ပါမယ်။

    - **Temperature**: Temperature ပိုနိမ့်ရင်ရလဒ်တွေကိုခိုင်မာစေပြီး Temperature ပိုမြင့်ရင် response တွေကိုပိုမိုဖန်တီးနိုင်စေပါတယ်။
    - **Record retrieval**: Knowledge sources အတွက် record retrieval အရေအတွက်ကိုသတ်မှတ်ပါ။
    - **Include links in the response**: Response မှာ retrieved records အတွက် link citations တွေပါဝင်စေပါတယ်။

    **X** icon ကိုရွေးချယ်ပြီး Settings မှထွက်ပါ။

    ![Configure settings](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.my.png)

1. Prompt ကို save လုပ်ဖို့ **Save** ကိုရွေးချယ်ပါ။

    ![Save prompt](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.my.png)

1. Prompt ကို declarative agent မှာထည့်သွင်းဖို့ **Add to agent** ကိုရွေးချယ်ပါ။

    ![Prompt instructions](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.my.png)

1. Prompt ကို Tools အောက်မှာပြသပါမယ် 🙌🏻

    ![Prompt added](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.my.png)

အခုတော့ prompt ကို invoke လုပ်ဖို့အညွှန်းများကို update လုပ်ပြီး declarative agent ကိုစမ်းသပ်ကြည့်ပါမယ်။

### 3.3 Declarative agent ရဲ့အညွှန်းများကို update လုပ်ပြီးစမ်းသပ်ခြင်း

1. **Details** အပိုင်းကိုအပေါ်သို့လှိမ့်ပြီး **Edit** ကိုရွေးချယ်ပါ။ Fields တွေကို editable ဖြစ်စေပါမယ်။

      ![Select Edit](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.my.png)

1. Prompt ကို invoke လုပ်ဖို့အညွှန်းများကို update လုပ်နိုင်ပါပြီ။ အညွှန်းများကိုဖျက်ပြီးအောက်ပါအကြောင်းအရာကို copy လုပ်ပြီး paste လုပ်ပါ။

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

      နောက်ဆုံးစာကြောင်းမှာ user ရဲ့မေးခွန်းကို problem input parameter အတွက် value အဖြစ်အသုံးပြုဖို့ agent ကိုအညွှန်းပေးထားတာကိုသတိထားပါ။ Agent က user ရဲ့မေးခွန်းကို prompt ရဲ့ problem input အဖြစ်အသုံးပြုပါမယ်။ **Save** ကိုရွေးချယ်ပါ။

      ![Update instructions to invoke prompt](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.my.png)

1. Declarative agent ရဲ့ updated instructions ကိုစမ်းသပ်ဖို့အဆင်သင့်ဖြစ်ပါပြီ။ Test pane မှာ **refresh icon** ကိုရွေးချယ်ပါ။

      ![Select refresh icon](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.my.png)

1. အောက်ပါ prompt ကိုထည့်သွင်းပြီး submit လုပ်ပါ။

       ```text
       Can you help me, my laptop is encountering a blue screen
       ```

      ![Perform test](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.my.png)

1. Agent က prompt ကို invoke လုပ်ပြီးတုံ့ပြန်ပါမယ်။

      ![Prompt instructions](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.my.png)

အခုတော့ declarative agent ကို publish လုပ်ကြည့်ရအောင် 😃

### 3.4 Declarative agent ကို Microsoft 365 Copilot နဲ့ Microsoft Teams မှာ publish လုပ်ခြင်း

1. **Publish** ကိုရွေးချယ်ပါ။

      ![Publish agent](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.my.png)

1. Modal တစ်ခုပေါ်လာပြီး Channels နဲ့ publishing details တွေကို update လုပ်နိုင်ပါတယ်။

   - Channels: Agent ကို Microsoft 365 Copilot နဲ့ Microsoft Teams မှာ publish လုပ်ပါမယ်။
   - Agent app information: Microsoft 365 Copilot ဒါမှမဟုတ် Microsoft Teams မှာ user က agent ကိုထည့်သွင်းတဲ့အခါပြသမယ့်အချက်အလက်တွေပါဝင်ပါတယ်။ လိုအပ်သလို update လုပ်နိုင်ပါတယ်။

      ![Agent app details](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.my.png)

1. ဥပမာအားဖြင့် **Short description**, **Long description**, **Developer name** ကိုသင့်နာမည်နဲ့ update လုပ်နိုင်ပါတယ်။

    !!! tip
        Browser မှာ field အားလုံးကိုမမြင်ရလျှင် zoom out လုပ်ပါ (ဥပမာ 75%)

    **Publish** ကိုရွေးချယ်ပါ။ Copilot Studio က agent ကို publish လုပ်ပါမယ်။

      ![Publishing agent](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.my.png)

1. Publish လုပ်ပြီးပါက agent ရဲ့ [Availability options](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez) ကိုတွေ့ပါမယ်။

      | Availability option    | Description |
      | ---------- | ---------- |
      | Share Link | Shared users တွေ Microsoft 365 Copilot မှာ agent ကိုဖွင့်ဖို့ link ကို copy လုပ်ပြီးဖြန့်ဝေပါ |
      | Show to my teammates and shared users  | Agent ကိုဖန်တီးဖို့အတွက်အခြားသူတွေကို access ပေးနိုင်ပါတယ်၊ ဒါမှမဟုတ် security groups တွေကို Microsoft 365 Chat ဒါမှမဟုတ် Microsoft Teams မှာ agent ကိုအသုံးပြုဖို့ access ပေးနိုင်ပါတယ်။  |
      | Show to everyone in my org   | Tenant admin ကို organizational catalog မှာထည့်သွင်းဖို့ submit လုပ်ပါ၊ tenant user အားလုံး Microsoft 365 Copilot နဲ့ Microsoft Teams မှာ agent ကိုထည့်သွင်းနိုင်ပါမယ်။ Agent ကို Microsoft 365 Copilot နဲ့ Microsoft Teams မှာ Built by your org အောက်မှာပြသပါမယ်။    |
      | Download as a .zip    | Microsoft Teams မှာ custom app အဖြစ် upload လုပ်ဖို့ zip file အဖြစ် download လုပ်ပါ    |

      ![Availability options](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.my.png)

1. Agent ကို share လုပ်တာကိုကြည့်ရအောင်။ **Show to my teammates and shared users** ကိုရွေးချယ်ပါ။ Pane တစ်ခုပေါ်လာပြီး agent ကို share လုပ်ချင်တဲ့ user တွေကိုနာမည်၊ email ဒါမှမဟုတ် security group ထည့်သွင်းပြီးရှာနိုင်ပါတယ်။ Access ရှိတဲ့သူတွေကို edit လုပ်ဖို့ဒီစာရင်းကိုအချိန်မရွေးပြန်လည်ကြည့်နိုင်ပါတယ်။

      Checkbox နှစ်ခုလည်းရှိပါတယ်။
      - _Send an email invitation to new users_ - အသစ် user တွေ email invitation ရရှိပါမယ်။
      - _Visible Built with Power Platform_ - Agent ကို Teams app store ရဲ့ Built with Power Platform အပိုင်းမှာရရှိနိုင်စေပါတယ်။
အသေးစိတ်အချက်အလက်များကို [Connect and configure an agent for Teams and Microsoft 365](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez) ကိုရောက်လေ့လာပါ။

**Cancel** သို့မဟုတ် **X** အိုင်ကွန်ကိုရွေးပြီး pane မှထွက်ပါ။

![Share agent](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.my.png)

1. **Copy** ကိုရွေးပြီး browser tab အသစ်တွင် link ကို paste လုပ်ပါ။

![Copy link](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.my.png)

1. Microsoft 365 Copilot ကို load လုပ်ပြီး modal တစ်ခုထွက်လာပြီး agent app အချက်အလက်များကိုပြသပါမည်။
   Developer name, short description နှင့် long description များကိုကြည့်ပါ။ ၎င်းတို့သည် ယခင်အဆင့်တွင် update လုပ်ထားသော publishing details ဖြစ်သည်။

   **Add** ကိုရွေးပါ။

![Availability options](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.my.png)

1. Declarative agent သည် load လုပ်ပါမည်။ Starter prompts များကိုရွေးချယ်နိုင်ရန်ပြသပါမည်။ ၎င်းသည်အသုံးပြုသူများကိုချက်ချင်းအကူအညီရရှိရန်အလွယ်တကူစတင်နိုင်စေသည်။

   Starter prompt တစ်ခုကိုရွေးပါ။ ကျွန်ုပ်၏ starter prompts တွင် **Software Installation Help** prompt ကိုရွေးပါမည်။ ၎င်းသည် Copilot field တွင် message ကိုအလိုအလျောက်ဖြည့်စွက်ပါမည်။ Copilot ကိုမေးခွန်းတင်ပါ။

![Select starter prompt](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.my.png)

1. **Always allow** ကိုရွေးပြီး declarative agent ကို IT Expert prompt ကို invoke လုပ်ရန်ခွင့်ပြုပါ။

![Select always allow](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.my.png)

1. Agent သည် **IT Expert** prompt ကို invoke လုပ်ပြီး declarative agent တွင် message အဖြစ် model response ပြန်လာပါမည်။

![Response](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.my.png)

Response ၏အသေးစိတ်ကိုကြည့်ရန် scroll down လုပ်ပါ။

![Response](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.my.png)

1. Declarative agent သည် prompt ကို invoke လုပ်သည်ကို _ဘယ်လိုသိနိုင်မလဲ_ 👀 အကူအညီတစ်ခုရှိပါတယ်!

!!! tip
    Microsoft 365 Copilot တွင် developer mode ကို enable လုပ်ခြင်းအားဖြင့် agent များကိုစမ်းသပ်ပြီး debug လုပ်နိုင်သည်။ [developer mode](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez) ကို enable လုပ်ပါ။

Message Copilot field တွင်အောက်ပါကိုရိုက်ထည့်ပြီး submit လုပ်ပါ။

    ```text
    -developer on
    ```

Confirmation message တစ်ခုထွက်လာပြီး developer mode ကို enable လုပ်ထားသည်ကိုသိရှိစေပါမည်။

![Developer mode enabled](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.my.png)

1. Prompt ကို invoke လုပ်ရန်အောက်ပါမေးခွန်းကို submit လုပ်ပါ။

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Enter question](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.my.png)

1. **IT Expert** prompt မှ model response ကို message အဖြစ်ပြန်လာပါမည်။ Message ၏အောက်ဆုံးကို scroll down လုပ်ပြီး debug information ပါသော card ကိုကြည့်နိုင်ပါသည်။

**Agent Debug Info** ကိုရွေးပြီး expand လုပ်ပါ။

![Agent debug info](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.my.png)

1. Runtime တွင်ဖြစ်ပျက်ခဲ့သော agent metadata အချက်အလက်များကိုရှာတွေ့နိုင်ပါသည်။

![Agent debug info expanded](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.my.png)

ဤအခါတွင် _Actions_ အပိုင်းကိုအဓိကထားပြီးကြည့်ပါ။

- **Matched actions** သည် app ရှာဖွေမှုအတွင်းတွေ့ရှိသော functions များ၏လက်ရှိအခြေအနေကိုဖော်ပြသည်။
- **Selected actions** သည် app ၏ဆုံးဖြတ်ချက်အပေါ်အခြေခံ၍ run လုပ်ရန်ရွေးချယ်ထားသော functions များ၏လက်ရှိအခြေအနေကိုဖော်ပြသည်။

![Agent debug info expanded](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.my.png)

ဤနေရာတွင် agent orchestrator သည် declarative agent ၏ညွှန်ကြားချက်များအတိုင်း IT Expert prompt ကို invoke လုပ်ရန်ရွေးချယ်ခဲ့သည်ကိုမြင်နိုင်ပါသည်။ ၎င်းကို _Executed Actions_ အပိုင်းတွင်လည်းဖော်ပြထားပြီး prompt ကိုအောင်မြင်စွာ invoke လုပ်ခဲ့သည်ကိုပြောပြထားသည်။

![Review agent debug info](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.my.png)

1. Developer mode ကိုပိတ်ရန် Message Copilot field တွင်အောက်ပါကိုရိုက်ထည့်ပြီး submit လုပ်ပါ။

    ```text
    -developer off
    ```

Confirmation message တစ်ခုထွက်လာပြီး developer mode ကို disable လုပ်ထားသည်ကိုသိရှိစေပါမည်။ အေးပါတယ်၊ Microsoft 365 Copilot တွင်သင်၏ declarative agent သည် prompt ကို invoke လုပ်ထားသည်ကို verify လုပ်နည်းကိုသိရှိပြီးပါပြီ 🌞

![Developer mode disabled](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.my.png)

1. Microsoft Teams တွင် agent ကိုစမ်းသပ်ပါမည်။ **Apps** ကို left hand side menu မှတဆင့်သွားပြီး _Apps_ အပိုင်းအောက်ရှိ **Teams** ကိုရွေးပါ။

![Select Teams in Apps](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.my.png)

1. Microsoft Teams သည် browser tab အသစ်တွင် load လုပ်ပြီး Microsoft 365 Copilot ၏ terms of use ကိုပြသပါမည်။ **Agree** ကိုရွေးပါ။

![Select Agree](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.my.png)

1. Microsoft 365 Copilot သည် default အနေဖြင့် load လုပ်ပြီး right hand side pane တွင်သင့်ရဲ့ available agents များအားလုံးကိုပြသပါမည်။ ၎င်းတွင် **Contoso Tech Support Pro** declarative agent ပါဝင်သည်။

![Microsoft 365 Copilot in Teams](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.my.png)

1. Left hand side menu တွင် **ellipsis icon (...)** ကိုရွေးပါ။ **Contoso Tech Support Pro** ကို search field တွင်ရှာရန် သို့မဟုတ် agent ကိုတွေ့ပါကရွေးပါ။

Mouse ကို right-click လုပ်ပြီး Microsoft Teams ၏ left hand side menu တွင် agent ကို **Pin** လုပ်၍ အလွယ်တကူရောက်နိုင်ရန်လုပ်ပါ။

![Select and pin agent](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.my.png)

1. Agent ကို load လုပ်ပါမည်။ 1. Agent ကိုစမ်းသပ်ပါမည်။ အောက်ပါ prompt ကိုရိုက်ထည့်ပြီး submit လုပ်ပါ။

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Pin agent](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.my.png)

1. Prompt မှ model response ကိုပြသပါမည်။

![Response in Teams](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.my.png)

မိနစ်အနည်းငယ်အတွင်း သင်သည် Microsoft 365 Copilot နှင့် Microsoft Teams တွင် declarative agent ကို publish လုပ်ပြီးစမ်းသပ်နည်းကိုလေ့လာပြီးပါပြီ 😊

## ✅ Mission Complete

ဂုဏ်ယူပါတယ်! 👏🏻 သင်သည် Copilot Studio တွင် declarative agent တစ်ခုကိုတည်ဆောက်ပြီး Prompt တစ်ခုထည့်သွင်းခြင်း၊ agent ကို Prompt ကိုအသုံးပြုရန်ညွှန်ကြားခြင်းနှင့် Microsoft 365 Copilot နှင့် Microsoft Teams တွင် agent ကိုစမ်းသပ် + publish လုပ်နည်းကိုသင်ယူပြီးပါပြီ။

သင့် agent သည်အလုပ်လုပ်ရန်အဆင်သင့်ဖြစ်ပြီး အတွင်းပိုင်းအသုံးပြုသူများကိုလိုအပ်သောအကူအညီပေးရန်၊ ပြဿနာများကိုဖြေရှင်းရန်နှင့် on-demand အကူအညီပေးရန်အဆင်သင့်ဖြစ်ပါသည်။

ဤသည်မှာ **Lab 03 - Build a declarative agent in Microsoft Copilot Studio for Microsoft 365 Copilot** ၏အဆုံးဖြစ်သည်၊ အောက်ပါ link ကိုရွေးပြီးနောက်ဆုံးသင်ခန်းစာသို့သွားပါ။

⏭️ [Move to **Creating a new Solution** lesson](../04-creating-a-solution/README.md)

နောက်တစ်ကြိမ်အထိ sharp ဖြစ်နေပါစေ။ အလုပ်လုပ်ပုံ၏အနာဂတ်သည် agents များမှတဆင့်ဖြတ်သန်းပြီး—ယခုသင်သည် agent တစ်ခုကိုတည်ဆောက်နည်းကိုသိရှိပြီးပါပြီ။

## 📚 Tactical Resources

🔗 [Build declarative agent in Microsoft Copilot Studio for Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Add prompts](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Share agents with other users](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [Build prompts for your agent](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="Analytics" />

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူပညာရှင် ဘာသာပြန်မှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအမှားများ သို့မဟုတ် အနားယူမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။