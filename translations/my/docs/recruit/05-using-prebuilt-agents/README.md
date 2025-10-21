<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8e2c64a7f9303e58329ec8bb468c80b4",
  "translation_date": "2025-10-21T18:47:48+00:00",
  "source_file": "docs/recruit/05-using-prebuilt-agents/README.md",
  "language_code": "my"
}
-->
# 🧰 မစ်ရှင် ၀၅: ကြိုတင်တည်ဆောက်ထားသော Agent ကို အသုံးပြုခြင်း  

## 🕵️‍♂️ ကုဒ်နာမည်: `လုံခြုံစွာ ခရီးသွားရေး လုပ်ငန်းစဉ်`

> **⏱️ လုပ်ငန်းစဉ် အချိန်အကွာအဝေး:** `~၃၀ မိနစ်`

🎥 **လမ်းညွှန်မှုကို ကြည့်ရှုပါ**

[![ကြိုတင်တည်ဆောက်ထားသော Agent ဗီဒီယို thumbnail](../../../../../translated_images/video-thumbnail.234ee62d2e4e837a7401776b5f092e5d5819f46a2e2859a92654b38f1381789f.my.jpg)](https://www.youtube.com/watch?v=NmXsx8WjWuM "YouTube တွင် လမ်းညွှန်မှုကို ကြည့်ရှုပါ")

## 🎯 မစ်ရှင် အကျဉ်းချုပ်

Microsoft မှ ဖန်တီးထားသော **ကြိုတင်တည်ဆောက်ထားသော Agent** များကို သင်လေ့လာမည်ဖြစ်ပြီး၊ အချိန်ကုန်သက်သာစေပြီး deployment ကို မြန်ဆန်စေသော အာရုံစိုက် Agent များဖြစ်သည်။

အခြေခံမှ စတင်တည်ဆောက်ရန်မလိုဘဲ၊ ကြိုတင်တည်ဆောက်ထားသော Agent များ (**Agent Template** ဟုလည်းခေါ်သည်) သည် အသုံးပြုရန် အဆင်သင့်ဖြစ်သော အခွင့်အရေးများကို ပေးပြီး customization နှင့် deployment ကို မိနစ်အနည်းငယ်အတွင်း ပြုလုပ်နိုင်သည်။

ဤမစ်ရှင်တွင် သင်သည် **Safe Travels** Agent ကို deploy ပြုလုပ်မည်ဖြစ်ပြီး၊ သုံးစွဲသူများအတွက် လုပ်ငန်းခရီးစဉ်များကို ပြင်ဆင်ရန်၊ ကုမ္ပဏီမူဝါဒများကို နားလည်ရန်နှင့် အစီအစဉ်များကို လွယ်ကူစွာ ပြုလုပ်ရန် အကူအညီပေးမည်ဖြစ်သည်။

---

## 🧭 ရည်မှန်းချက်များ

ဤမစ်ရှင်အတွက် သင်၏ ရည်မှန်းချက်များမှာ:

1. ကြိုတင်တည်ဆောက်ထားသော Agent များအကြောင်း နားလည်ခြင်းနှင့် အရေးကြီးမှု  
1. **Safe Travels** Agent Template ကို deploy ပြုလုပ်ခြင်း  
1. Agent ၏ အဖြေများနှင့် အကြောင်းအရာများကို customize ပြုလုပ်ခြင်း  
1. Agent ကို စမ်းသပ်ပြီး ထုတ်ဝေခြင်း  

---

## 🧠 ကြိုတင်တည်ဆောက်ထားသော Agent များက ဘာလဲ?

ကြိုတင်တည်ဆောက်ထားသော Agent များသည် Microsoft မှ ဖန်တီးထားသော turnkey AI Agent များဖြစ်ပြီး:

- လုပ်ငန်းလိုအပ်ချက်များ (ခရီးသွားရေး၊ HR၊ IT အထောက်အပံ့) ကို ဖြေရှင်းပေးသည်  
- အပြည့်အစုံဖြစ်သော topics, trigger phrases, လမ်းညွှန်ချက်များနှင့် နမူနာ knowledge များပါဝင်သည်  
- သင်၏ data ဖြင့် ပြင်ဆင်၊ တိုးချဲ့နှင့် အခြေခံနိုင်သည်  

ဤ Agent များသည် အလွယ်တကူ စတင်ရန် သို့မဟုတ် Agent များကို ဘယ်လိုဖွဲ့စည်းရမည်ကို လေ့လာရန် အကောင်းဆုံးဖြစ်သည်။

---

## 🧪 Lab ၀၅: ကြိုတင်တည်ဆောက်ထားသော Agent ကို အလွယ်တကူ စတင်အသုံးပြုခြင်း

ကြိုတင်တည်ဆောက်ထားသော Agent ကို ရွေးချယ်ပြီး customize ပြုလုပ်ပုံကို လေ့လာမည်ဖြစ်သည်။

- [၅.၁ Copilot Studio ကို စတင်ရန်](../../../../../docs/recruit/05-using-prebuilt-agents)
- [၅.၂ Safe Travels Agent Template ကို ရွေးချယ်ရန်](../../../../../docs/recruit/05-using-prebuilt-agents)
- [၅.၃ Agent ကို customize ပြုလုပ်ရန်](../../../../../docs/recruit/05-using-prebuilt-agents)
- [၅.၄ စမ်းသပ်ပြီး ထုတ်ဝေရန်](../../../../../docs/recruit/05-using-prebuilt-agents)

ယခင်နမူနာအတိုင်း သင်၏ IT helpdesk agent ကို ဖန်တီးရန် Copilot Studio ပတ်ဝန်းကျင်တွင် ဖြေရှင်းချက်တစ်ခုကို ဖန်တီးမည်ဖြစ်သည်။

စတင်လိုက်ပါ!

### ၅.၁ Copilot Studio ကို စတင်ရန်

1. [https://copilotstudio.microsoft.com](https://copilotstudio.microsoft.com) သို့ သွားပါ  

1. Microsoft 365 work သို့မဟုတ် school account ဖြင့် လက်မှတ်ထိုးပါ  

!!! warning
    သင်သည် Copilot Studio ကို enabled လုပ်ထားသော tenant တွင် ရှိရမည်။ Copilot Studio ကို မမြင်ရပါက [Mission 00](../00-course-setup/README.md) သို့ ပြန်သွားပြီး သင်၏ setup ကို ပြီးစီးပါ။

### ၅.၂ Safe Travels Agent Template ကို ရွေးချယ်ရန်

1. Copilot Studio homepage မှ **+ Create** ကို click လုပ်ပါ  
    ![Agent တစ်ခု ဖန်တီးပါ](../../../../../translated_images/create.ef22dd3e758823e9f17d69ef07c7db6fef8cbc00dd944ac65842bd3bd9f16efd.my.png)

1. **Start with an agent template** အပိုင်းသို့ scroll လုပ်ပါ  

1. **Safe Travels** ကို ရှာပြီး ရွေးချယ်ပါ  

    ![Safe Travels Template ကို ရွေးချယ်ပါ](../../../../../translated_images/choose_template.01c90e72076da7f14a9c93120dec6932b57a109a506823dd3b195d8f610afb07.my.png)

1. Template တွင် ဖော်ပြချက်၊ လမ်းညွှန်ချက်များနှင့် knowledge များ ပါဝင်ပြီးသားဖြစ်သည်ကို သတိပြုပါ။  

    ![Template ကို ပြန်လည်သုံးသပ်ပါ](../../../../../translated_images/template-setup.0b2f5a8dd8c3e7e305d24461df3065a4ec435d3300df75287891830a9b91b974.my.png)

1. **Create** ကို click လုပ်ပါ  

    ![Agent တစ်ခု ဖန်တီးပါ](../../../../../translated_images/create-agent-setup.3383d353508b5e33593bd2961c1fbea29568a49868356844ab4cffdad584a655.my.png)

ဤအဆင့်တွင် Safe Travels configuration အပေါ် အခြေခံပြီး သင်၏ပတ်ဝန်းကျင်တွင် Agent အသစ်တစ်ခု ဖန်တီးမည်ဖြစ်သည်။

### ၅.၃ Agent ကို customize ပြုလုပ်ရန်

Agent ကို ဖန်တီးပြီးနောက် သင်၏အဖွဲ့အစည်းအတွက် ပြင်ဆင်ပါ:

1. **Enabled generative AI** ကို ရွေးချယ်ပြီး template တွင် ပါဝင်သော လမ်းညွှန်ချက်များကို အသုံးပြုနိုင်ရန် generative AI feature ကို ဖွင့်ပါ။  

    ![Generative Answers ကို ဖွင့်ပါ](../../../../../translated_images/gen-answers.7e91d692123771a60b0b944956472a1323857f61ffa2c32231f12eeb9bec341c.my.png)

1. Agent ကို Europe ခရီးသွားရေးအကြောင်းကို ဖြေရှင်းနိုင်ရန် knowledge source တစ်ခု ထည့်သွင်းပါ။ ဤအတွက် **knowledge** အပိုင်းသို့ scroll လုပ်ပြီး **Add knowledge** ကို ရွေးချယ်ပါ။  

    ![Knowledge ကို ထည့်ပါ](../../../../../translated_images/knowledge.d85f70ad6cffe8700b2f33f76633c1c37ce45a960a33e42b3b48eca2759449b5.my.png)

1. **Public websites** ကို ရွေးချယ်ပါ  

    ![Public website ကို ထည့်ပါ](../../../../../translated_images/public-website.cb547b2284c409058bbe7e0a46e503f2368911b0781eec530b9ae63cd174e0b9.my.png)

1. Text input တွင် **<https://european-union.europa.eu/>** ကို paste လုပ်ပြီး **Add** ကို ရွေးချယ်ပါ  

    ![Website ကို ထည့်ပါ](../../../../../translated_images/paste-add.bb80b0f0f9bcd47dfbf00ebcb0a5386fa892be795c2eee74a8348c0d2a6ab5ae.my.png)

1. **Add to agent** ကို ရွေးချယ်ပါ  

    ![Agent သို့ ထည့်ပါ](../../../../../translated_images/add-to-agent.f139c87c5a79ddaa1eef244a93f76c6451c1374dbbf189c23ce24c49a65d6073.my.png)

### ၅.၄ စမ်းသပ်ပြီး ထုတ်ဝေရန်

1. အပေါ်ဘက်-ညာဘက်ရှိ **Test** ကို click လုပ်ပြီး စမ်းသပ် window ကို ဖွင့်ပါ  

1. အောက်ပါစကားများကို စမ်းသပ်ပါ:

    - `“Do I need a visa to travel from the US to Amsterdam?”`
    - `“How long does it take to get a US Passport?”`
    - `“Where is the closest US embassy in Valencia, Spain?”`

1. Agent သည် တိကျပြီး အကျိုးရှိသော အချက်အလက်များဖြင့် ဖြေကြားသည်ကို အတည်ပြုပါ။ Activity Map တွင် အချက်အလက်ကို ရယူထားသောနေရာကို ကြည့်ရှုပါ။  

    ![Agent သို့ ထည့်ပါ](../../../../../translated_images/response-passport.e91b05c561f49cf5edbbdc6d7a61fffdcc4ad3d413bd17b09cca3f521a578be8.my.png)

1. ပြင်ဆင်ပြီးပါက **Publish** ကို click လုပ်ပါ  

    ![Agent သို့ ထည့်ပါ](../../../../../translated_images/publish-1.0685cfdf10e365ee58a8d0160c5bab81aef8fa5fbd2eb65535d568f611532637.my.png)

1. Dialog box တွင် **Publish** ကို ထပ်မံ ရွေးချယ်ပါ  
    ![Agent သို့ ထည့်ပါ](../../../../../translated_images/publish-2.9c3964d72347088eeaaf8c137921d5b67c9962bce0ad067f89e8999f75299aa2.my.png)

1. အလိုအလျောက် Microsoft Teams တွင် Agent ကို ထည့်သွင်းရန် built-in **Channels** feature ကို အသုံးပြုပါ။

!!! note "🧳 အပို ရည်မှန်းချက်"
    Safe Travels Agent ကို SharePoint site သို့မဟုတ် FAQ ဖိုင်ဖြင့် အခြေခံပြီး သင်၏ကုမ္ပဏီ၏ ခရီးသွားမူဝါဒများနှင့် ပိုမိုသက်ဆိုင်အောင် ပြုလုပ်ကြည့်ပါ။

## ✅ မစ်ရှင် ပြီးစီး

သင်သည် ယခုအခါ:

- Microsoft ကြိုတင်တည်ဆောက်ထားသော Agent ကို deploy ပြုလုပ်ပြီး  
- Agent ကို customize ပြုလုပ်ပြီး  
- **Safe Travels** Agent Template ၏ သင်၏ version ကို စမ်းသပ်ပြီး ထုတ်ဝေခဲ့ပါပြီ  

⏭️ [**အခြေခံမှ စတင်တည်ဆောက် Agent ဖန်တီးခြင်း** သင်ခန်းစာသို့ ရွှေ့ပါ](../06-create-agent-from-conversation/README.md)။

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/05-using-prebuilt-agents" alt="Analytics" />

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း အလိုအလျောက် ဘာသာပြန်ခြင်းတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်ခြင်းကို အကြံပြုပါသည်။ ဤဘာသာပြန်ကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအမှားများ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။