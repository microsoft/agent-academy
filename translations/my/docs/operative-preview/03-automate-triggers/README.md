<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "75efaf515d5694d4fd549bfd6518901a",
  "translation_date": "2025-10-21T18:09:01+00:00",
  "source_file": "docs/operative-preview/03-automate-triggers/README.md",
  "language_code": "my"
}
-->
# Mission 03: အလုပ်လုပ်နိုင်စွမ်းရှိသော Event Triggers ထည့်သွင်းပါ

--8<-- "disclaimer.md"

## 🕵️‍♂️ CODENAME: `OPERATION SIGNAL POINT`

> **⏱️ လုပ်ဆောင်ချိန်:** `~45 မိနစ်`

## 🎯 Mission Brief

အေးချမ်းစွာ ပြန်လည်ကြိုဆိုပါတယ်၊ အေးဂျင့်။ [Mission 02](../02-multi-agent/README.md) တွင် - Application Intake child agent နှင့် Interview Prep connected agent တို့ကို တည်ဆောက်ပြီး သင်၏ Hiring Agent ၏ စွမ်းရည်များကို တိုးချဲ့ပေးနိုင်ခဲ့ပါသည်။

သင်၏တာဝန်မှာ **Operation Signal Point** ဖြစ်ပြီး **event triggers** ကို ပိုမိုနက်နက်ရှိုင်းရှိုင်း လေ့လာရန်ဖြစ်သည် - သင်၏ agent system ကို လူ့အင်ပွတ်ကို စောင့်နေသောအနေအထားမှ **အလုပ်လုပ်နိုင်စွမ်းရှိသော လုပ်ဆောင်မှု** သို့ မြှင့်တင်ရန်ဖြစ်သည်။ သင်၏ agents များကို လူ့အင်ပွတ်ကို ဖြေကြားပေးသောအနေအထားမှ လိုအပ်ချက်များကို ကြိုတင်ခန့်မှန်းပြီး ကိုယ်တိုင်အလုပ်လုပ်နိုင်သောအနေအထားသို့ ပြောင်းလဲပေးပါမည်။

ဤအရာသည် အေးဂျင့်များကို _မေးခွန်းများကို ဖြေကြားပေးသော_ အနေအထားမှ _လိုအပ်ချက်များကို ကြိုတင်ခန့်မှန်းပြီး ကိုယ်တိုင်အလုပ်လုပ်နိုင်သော_ အေးဂျင့်များသို့ မြှင့်တင်ပေးခြင်းဖြစ်သည်။ Event triggers နှင့် automated workflows များကို အသုံးပြုခြင်းအားဖြင့် သင်၏ Hiring Agent သည် လာရောက်သော ရာဇဝင်အီးမေးလ်များကို သိရှိပြီး၊ attachments များကို အလိုအလျောက် process လုပ်ပြီး၊ Dataverse တွင် data များကို သိမ်းဆည်းပြီး၊ Microsoft Teams မှတဆင့် သင်၏ HR recruitment အဖွဲ့ကို အသိပေးမည် - သင်သည် အရေးကြီးသောအလုပ်များကို အာရုံစိုက်နိုင်စေရန်။

automation နှင့် intelligence တွေ့ဆုံရာကမ္ဘာသို့ ကြိုဆိုပါသည်။

## 🔎 Objectives

ဤ mission တွင် သင်လေ့လာရမည့်အရာများမှာ -

1. Event triggers များသည် user interaction မရှိဘဲ autonomous agent behavior ကို ဘယ်လို enable လုပ်ပေးနိုင်သည်ကို
1. Copilot Studio တွင် interactive agents နှင့် autonomous agents များ၏ ကွာခြားချက်များ
1. Email attachments များကို အလိုအလျောက် process လုပ်ပြီး Dataverse သို့ upload လုပ်ပေးသော event triggers များကို ဘယ်လိုတည်ဆောက်ရမည်ကို
1. Notifications များအတွက် adaptive cards များကို Teams channels တွင် post လုပ်ပေးသော agent flows များကို ဘယ်လိုတည်ဆောက်ရမည်ကို
1. Event triggers နှင့် agent flows များအကြား data များကို pass လုပ်ပေးခြင်းအားဖြင့် end-to-end automation ကို ဘယ်လိုလုပ်ဆောင်ရမည်ကို

## 🤔 Event trigger ဆိုတာဘာလဲ?

[Recruit](../../recruit/10-add-event-triggers/README.md) တွင် event triggers များအကြောင်းကို သင်လေ့လာခဲ့ပါသည်။ မသိခဲ့ရင်လည်း အောက်တွင် အကျဉ်းချုပ်ပြန်လည်လေ့လာနိုင်ပါသည်။

**Event triggers** သည် agent ကို user message မလိုအပ်ဘဲ _ကိုယ်တိုင်_ အလုပ်လုပ်နိုင်စေသည်။ Configured event တစ်ခုဖြစ်ပေါ်လာသောအခါ - “new SharePoint item,” “new email,” “Planner task assigned,” သို့မဟုတ် time‑based recurrence တစ်ခုဖြစ်ပေါ်လာသောအခါ connector တစ်ခုသည် trigger payload ကို သင်၏ agent သို့ ပို့ပေးသည်။ ထို့နောက် agent သည် သင်၏ညွှန်ကြားချက်များကို လိုက်နာပြီး ဘာလုပ်ဆောင်ရမည်ကို ဆုံးဖြတ်သည်။

### အဓိကလက္ခဏာများ

- **Autonomous activation:**
      - User message ဖြင့် agent ကို စတင်သော topic triggers များနှင့် မတူဘဲ၊ event triggers များသည် အပြင်ပန်းဖြစ်ရပ်များမှ စတင်ပြီး proactive behavior ကို enable လုပ်ပေးသည်။

- **Payload-driven:**
      - Event တစ်ခုစီသည် connector မှတဆင့် payload (variables + optional instructions) ကို ပေးပို့သည်။ Agent သည် သင်၏ညွှန်ကြားချက်များနှင့် payload ကို အသုံးပြု၍ ဘာလုပ်ဆောင်ရမည်ကို ဆုံးဖြတ်သည်။
      - ဥပမာ _call a topic_ သို့မဟုတ် _execute actions defined by Tools_။

- **Examples out-of-the-box:**
      - SharePoint/OneDrive file or item created
      - Planner task completed/assigned
      - Microsoft Forms response submitted
      - Recurrence/schedule

    Availability သည် Power Automate တွင် သင်၏အဖွဲ့အစည်း၏ data policies များအပေါ်မူတည်သည်။

- **Requires generative orchestration:**
      - Event triggers များသည် agent အတွက် generative orchestration enable လုပ်ထားသောအခါတွင်သာ ရရှိနိုင်သည်။

- **Billing/usage:**
      - Trigger delivery တစ်ခုစီသည် Copilot Studio capacity အတွက် message အဖြစ်တွက်ချက်သည်။
      - ဥပမာ 10‑minute recurrence သည် 10 မိနစ်တိုင်း message တစ်ခု ပို့ပေးသည်။

- **Auth model and setup:**
      - Triggers များကို agent Overview တွင် _Triggers_ အောက်တွင် ထည့်သွင်းနိုင်သည်။ Trigger connector အတွက် authentication သည် agent maker ၏ account (“agent author authentication”) ကို အသုံးပြုသည်။
      - Trigger parameters နှင့် payload ကို Power Automate maker portal တွင် edit လုပ်နိုင်သည်။

- **Testing & observability:**
      - Agent ၏ test pane တွင် triggers များကို စမ်းသပ်နိုင်ပြီး publish လုပ်မည့်အခါမတိုင်မီ activity map ဖြင့် အပြုအမူကို စစ်ဆေးနိုင်သည်။

!!! info "TL;DR for developers"

    Event triggers ကို **webhook-like signals** အဖြစ် စဉ်းစားပါ။ Structured payload ကို agent သို့ push လုပ်ပေးပြီး user message မလိုအပ်ဘဲ _အလုပ်လုပ်နိုင်စေ_ပြီး system များအကြား actions များကို ချိတ်ဆက်ပေးနိုင်သည်။

### Topic triggers - ကွာခြားချက်

[Recruit](../../recruit/07-add-new-topic-with-trigger/README.md) တွင် topic triggers များအကြောင်းကို သင်လေ့လာခဲ့ပြီးဖြစ်သော်လည်း _Topic_ triggers နှင့် _Event_ triggers များ၏ ကွာခြားချက်များကို နားလည်ရန် အခက်အခဲရှိနိုင်သည်။

Topic triggers များသည် user message ကို ဖြေကြားရန်အတွက် topic တစ်ခု run လုပ်ရန် control လုပ်ပေးသည်။

- Generative orchestration တွင် default trigger သည် **By agent** ဖြစ်ပြီး planner သည် user message နှင့် အကောင်းဆုံးကိုက်ညီသော topic ကို ရွေးချယ်ပေးသည်။
- Classic orchestration တွင် default သည် **Phrases** ဖြစ်ပြီး planner သည် user message နှင့် trigger phrases များကိုက်ညီသော topic ကို ရွေးချယ်ပေးသည်။

!!! info "Core difference"

    Topic triggers များသည် chat အတွင်း conversation activity များကို စတင်ပေးသည်။
    
    Event triggers များသည် system event များကို connectors မှတဆင့် စတင်ပေးပြီး conversation မရှိဘဲ agent ကို run လုပ်နိုင်သည်။

### Topic trigger vs Event trigger အကျဉ်းချုပ်

- **Topic trigger:** User (သို့ chat activity) X ကို ပြော/လုပ် → Topic T run လုပ်။
- **Event trigger:** SharePoint/Planner/Email/Timer P ကို fire လုပ် → agent သည် instructions ကို အကဲဖြတ် → Actions/Topics ကို ခေါ်။

## 🏓 Interactive agent vs Autonomous agent - ကွာခြားချက်

Event triggers နှင့် topics triggers များ၏ ကွာခြားချက်ကို သိရှိပြီးနောက်၊ interactive agent နှင့် autonomous agent တို့၏ ကွာခြားချက်ကို လေ့လာကြမည်။

Copilot Studio တွင် "interactive" သည် chat သို့ channel တွင် **topics** ကို အသုံးပြုသော agents များကို ရည်ညွှန်းသည်။ "autonomous" သည် **event triggers** ကို leverage လုပ်ပြီး user input မလိုအပ်ဘဲ run လုပ်နိုင်သော agents များကို ရည်ညွှန်းသည်။

| Dimension                           | Interactive agent     | Autonomous agent                                                                                              |
|-------------------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------|
| ဘယ်လိုစတင်သည်                     | User (သို့ chat activity) topic ကို trigger လုပ်သည်။ ဥပမာ: By agent, Phrases, Message received.   | External event trigger သည် connector မှတဆင့် payload ကို agent သို့ ပို့ပေးသည်။ ဥပမာ: SharePoint, Planner, email, schedule, စသည်တို့။ |
| အဓိကအသုံးပြုမှု                   | Q&A, guided workflows, chat အတွင်း request-driven actions - Teams, web, စသည်တို့။  | Proactive operations နှင့် background automation - system changes များကို တုံ့ပြန်ပြီး၊ notify, file, သို့ orchestrate tasks များကို လုပ်ဆောင်သည်။ |
| Trigger surface                     | Topic triggers: By agent / Phrases / Message received / Activity types / Invoke / Inactivity / Plan complete | Event triggers library via connectors; payload includes event data + optional instructions. |
| Planner (generative orchestration)  | By agent နှင့် Plan complete triggers များအတွက် topics များကို ရွေးချယ်/စဉ်ဆက်ပေးရန် အလွန်အရေးကြီးသည်။ | Event triggers များအတွက်လိုအပ်သည်; agent သည် instructions + payload ကို အသုံးပြု၍ ဘာလုပ်ဆောင်ရမည်ကို ဆုံးဖြတ်သည်။ |
| Typical example                     | User က "What's our refund policy?" ဟုမေး → Topic run လုပ်, knowledge ကို query လုပ်, response ပေး။ | New Planner task assigned → Event trigger fire → Agent သည် Teams message post လုပ်, record update လုပ်, သို့ topic ကို ခေါ်။ |
| Setup path                          | Topics များကို တည်ဆောက်ပြီး၊ trigger type ကို သတ်မှတ်၊ dialog/actions များကို author လုပ်၊ channels တွင် publish လုပ်။ | Event trigger ကို ထည့်သွင်း (Overview → Triggers), connector ကို agent author credentials ဖြင့် authenticate လုပ်, payload/instructions ကို configure လုပ်, test pane တွင် စမ်းသပ်, publish လုပ်။ |
| Auth and governance                 | Channel/auth context အောက်တွင် run လုပ်သည်; topic triggers များသည် allowed channels တွင် chat activities များကို တုံ့ပြန်သည်။ | Trigger availability သည် Power Automate data policies အပေါ်မူတည်သည်; connectors များသည် agent maker ၏ account အောက်တွင် run လုပ်သည်။ |
| Observability                       | Copilot Studio တွင် topics များကို စမ်းသပ်, conversation transcripts/activities ကို စစ်ဆေးနိုင်သည်။ | Test trigger နှင့် activity map ကို အသုံးပြု၍ publish မလုပ်မီ execution ကို validate လုပ်, publish လုပ်ပြီးနောက် activity ကို စောင့်ကြည့်နိုင်သည်။ |
| Capacity impact                     | User message/agent response တစ်ခုစီသည် capacity ကိုစားသုံးသည်။ | Event delivery တစ်ခုစီသည် message တစ်ခုဖြစ်ပြီး၊ subsequent actions များကိုလည်း message အဖြစ်တွက်ချက်သည်။ ဥပမာ: 10‑minute recurrence = 6 messages/hour |

### ဘယ်အခါမှာ ဘာကို အသုံးပြုမလဲ?

- **Topic triggers (interactive)** ကို အသုံးပြုပါ၊ user များသည် agent conversation ကို စတင်သောအခါ - FAQ, guided intake, သို့ command‑style tasks များ chat အတွင်းတွင်။ Planner ၏ By agent trigger သည် manual phrase curation ကို လျှော့ချပေးသည်။
- **Event triggers (autonomous)** ကို ထည့်သွင်းပါ၊ agent သည် conversation ကို စတင်ရန် သို့မဟုတ် ကိုယ်တိုင်အလုပ်လုပ်ရန် - SharePoint/Dataverse တွင် updates, incoming email, သို့ schedule အပေါ်မူတည်၍။ ဤအရာသည် reactive operations မှ proactive operations သို့ ရွှေ့ပြောင်းပေးသည်။

## Developer tips & gotchas

1. **Generative orchestration ကို enable လုပ်ပါ** autonomous ဖြစ်စေလိုသော agent များအတွက်။ Event triggers များသည် otherwise မပေါ်လာပါ။

1. **Payload ကို စောင့်ရှောက်ပါ။** Trigger မှ agent အတွက်လိုအပ်သော minimal fields များကို ဆုံးဖြတ်ပါ၊ ဥပမာ `itemId`, `assignedTo`, `dueDate` နှင့် concise instructions များကို ထည့်သွင်းပါ။

1. **Auth scope အရေးကြီးသည်။** Triggers များသည် agent maker ၏ account ကို authenticate လုပ်သည်။ Account သည် connector permissions များနှင့် Power Automate data policies များကို လိုက်နာရမည်။

1. **Cost နှင့် noise ကို ထိန်းချုပ်ပါ။** High‑frequency recurrences သို့ chatty sources များသည် message consumption ကို မြင့်တက်စေသည် - throttle လုပ်နိုင်သည့်နေရာတွင် throttle လုပ်ပါ သို့မဟုတ် trigger တွင် conditions များထည့်သွင်းပါ။

1. **Publish မလုပ်မီ စမ်းသပ်ပါ။** **Test trigger** နှင့် activity map ကို အသုံးပြု၍ plan နှင့် called actions များကို စစ်ဆေးပါ - instructions/payload ကို iterate လုပ်ပါ၊ behavior သည် တည်ငြိမ်သည်အထိ။

## 🧪 Lab 03 - Candidate application emails များကို အလိုအလျောက်လုပ်ဆောင်ခြင်း

အောက်တွင် **Hiring Agent** တွင် event trigger တစ်ခုထည့်သွင်းပြီး child **Application Intake Agent** တွင် agent flow တစ်ခုတည်ဆောက်ကာ autonomy အတွက် အလုပ်လုပ်ပါမည်။

### ✨ Use case scenario

!!! info ""

    **HR Recruiter အနေဖြင့်**

    **အီးမေးလ် Inbox သို့ ရာဇဝင်နှင့်အတူ အီးမေးလ်ရောက်ရှိလာသောအခါ Dataverse သို့ အလိုအလျောက် upload လုပ်ထားသည်ကို သိရှိလိုပါသည်**

    **ဒါကြောင့်** အီးမေးလ်မှ application အတွက် ရာဇဝင်များကို Dataverse သို့ upload လုပ်ထားသည်ကို အမြဲသိရှိနိုင်ရန်

ဤအရာကို နည်းလမ်းနှစ်ခုဖြင့် ပြုလုပ်မည်

1. အီးမေးလ်ရောက်ရှိသောအခါအတွက် event trigger တစ်ခု
    1. File ၏ `contentType` သည် `PDF` format type ဖြစ်ကြောင်း စစ်ဆေးပါ။
    1. File ကို extract လုပ်ပြီး Dataverse သို့ upload လုပ်ပါ။
    1. Dataverse actions မှ input parameters များကို pass လုပ်ကာ agent prompt ကို ပေးပါ။

1. Child **Application Intake Agent** တွင် agent flow တစ်ခုထည့်သွင်းပါ၊ event trigger ၏ prompt မှ invoke လုပ်ပါ။
    1. Event trigger ၏ prompt မှ pass လုပ်ထားသော input parameters များကို Microsoft Teams channel တွင် adaptive card အဖြစ် post လုပ်ကာ HR Recruitment team ကို notify လုပ်ပါ။ Adaptive card တွင် Dataverse row link ပါဝင်ပြီး **Hiring Agent** တွင် ကြည့်ရှုနိုင်ပါမည်။

စတင်လိုက်ပါစို့!

### ✨ Mission ကို ပြီးမြောက်ရန်လိုအပ်သောအရာများ

သင်သည် **အောက်ပါအနက် တစ်ခုခုကို** လိုအပ်ပါမည် -

- **Mission 01 နှင့် Mission 02 ကို ပြီးမြောက်ထားပြီး Hiring Agent ကို အသင့်ရှိထားပါ၊** **သို့မဟုတ်**
- **Mission 03 starter solution ကို Import လုပ်ပါ** သင်စတင်လိုပါက သို့မဟုတ် catch up လုပ်လိုပါက။ [Mission 03 Starter Solution ကို Download လုပ်ပါ](https://aka.ms/agent-academy)

!!! note "Solution Import နှင့် Sample Data"
    Starter solution ကို အသုံးပြုပါက [Mission 01](../01-get-started/README.md) တွင် solutions နှင့် sample data များကို သင်၏ environment သို့ Import လုပ်ရန် အသေးစိတ်ညွှန်ကြားချက်များကို ရှာဖွေပါ။

Microsoft Teams သို့ adaptive card ကို post လုပ်ရန် **Microsoft Teams** ကိုလည်း အသုံးပြုနိုင်ရမည်။

### Lab 3.1 - အီးမေးလ်မှ ရာဇဝင်များကို Dataverse သို့ upload လုပ်ခြင်းကို အလိုအလျောက်လုပ်ဆောင်ပါ

1. Hiring Agent တွင် **Overview tab** တွင် scroll လုပ်ပြီး **+ Add trigger** ကို ရွေးပါ။

       ![Add trigger to agent](../../../../../translated_images/3.1_01_AddTrigger.4d5f4d13a4a6b19fe9ff89e3a483601199d7643236d6df65ff81dfea76d1d443.my.png)

1. Triggers များ၏ စာရင်းတစ်ခု ပေါ်လာပါမည်။ **When a new email arrives (V3)** ကို ရွေးပြီး **Next** ကို ရွေးပါ။

       ![Select When a new email arrives (V3) trigger](../../../../../translated_images/3.1_02_WhenANewEmailArrives.a250875915165d97c1af6eebba70f16fbfc845a37d4d354c9f35a55aa459035e.my.png)

1. **Trigger name** နှင့် **Sign in** connection references များကို တွေ့ရပါမည်။

       Trigger name
အခုတော့ အဖြစ်အပျက် trigger ကို update လုပ်ပြီး automation စွမ်းဆောင်ရည်များကို ပိုမိုထည့်သွင်းဖို့ လုပ်ပါမယ်။ Trigger ရဲ့ **ellipsis (...)** ကိုရွေးပြီး **Edit in Power Automate** ကိုရွေးပါ။

![Select Edit in Power Automate](../../../../../translated_images/3.1_05_SelectEditInPowerAutomate.d298b51d7980cf2fd20a9d8193745aef4ce8097a4a2d33341e2dc159b9bfc099.my.png)

1. Trigger ကို Power Automate maker portal မှာ flow အနေနဲ့ load လုပ်ပါမယ်။ သင်မြင်နေရတာက Power Automate maker portal ရဲ့ flow designer ဖြစ်ပါတယ်။ ဒီနေရာမှာ automation ပိုမိုလုပ်ဆောင်နိုင်ဖို့ logic နဲ့ actions တွေထည့်နိုင်ပါတယ်။ Trigger က အပေါ်မှာပေါ်လာပြီး flow ရဲ့ နောက်ဆုံး action အနေနဲ့ **Sends a prompt to the specified copilot for processing** ပေါ်လာပါမယ်။

![Flow designer in Power Automate maker portal](../../../../../translated_images/3.1_06_EditInPowerAutomate.f8967ace56354224574517f31a2a2ce0a5b5d3ab85bfb9ec6cf70e83ab1b8e6d.my.png)

1. Power Automate ရဲ့ **When a new email arrives** trigger က default အနေဖြင့် အီးမေးလ်များစွာကို တစ်ခါတည်း process လုပ်နိုင်ပါတယ်၊ အီးမေးလ်များစွာ တစ်ချိန်တည်းရောက်လာရင် flow ကို batch အနေနဲ့ တစ်ခါသာ run လုပ်ပါမယ်။

Flow ကို အီးမေးလ်တစ်ခုချင်းစီအတွက် သီးသန့် run လုပ်စေဖို့ trigger ရဲ့ settings မှာ **Split On** ကို enable လုပ်ပြီး dropdown array field မှာ `@triggerOutputs()?['body/value']` ကိုရွေးပါ။

**Split On** ကိုဖွင့်ထားပြီး array field ကို `@triggerOutputs()?['body/value']` သတ်မှတ်ထားတဲ့အခါ flow က message တစ်ခုချင်းစီအတွက် run လုပ်ပါမယ်၊ အီးမေးလ်များစွာ တစ်ချိန်တည်းရောက်လာရင်တောင်။

![Turn on Split On settings in the trigger](../../../../../translated_images/3.1_07_UpdateTriggerSettings.0f363c4f4655276732575fa795bf1ad1568df34d34b703c85073591cc8585609.my.png)

1. Attachment ရဲ့ file type ကိုစစ်ဆေးဖို့ logic တစ်ခုထည့်ပါမယ်၊ .PDF file attachments ကိုသာ upload လုပ်ချင်ပြီး images မ upload လုပ်ချင်ပါဘူး (အဲဒါတွေက email signature ကနေလာနိုင်ပါတယ်)။ Trigger အောက်မှာ **+** icon ကိုရွေးပြီး **Built in tools** အပိုင်းက **Control** ကိုရွေးပါ။

![Select Control](../../../../../translated_images/3.1_08_Control.2fa6987b64ae20d5c8343d1b15937432ab6c893750c4b1427df56067023fd437.my.png)

1. **Condition** action ကိုရွေးပါ။

![Select Condition action](../../../../../translated_images/3.1_09_AddConditionAction.a7eec0b2a42d4a7c54bd305f0c480b72e3feec155a4e2468e12279082257f21f.my.png)

1. Attachment ရဲ့ file type က .PDF ဖြစ်မဖြစ်စစ်ဆေးဖို့ condition ကို configure လုပ်ပါမယ်။ **Choose a value** field မှာ **lightning bolt icon** သို့မဟုတ် **fx icon** ကိုညာဘက်မှာရွေးပါ။

1. **Search** field မှာ အောက်ပါကိုရိုက်ပါ၊

```text
content type
```

1. Trigger မှ **Attachments Content-Type** parameter ကိုရွေးပါ။

1. Dynamic content input ကို action ရဲ့ **Id** parameter ထဲထည့်ဖို့ **Add** ကိုရွေးပါ။

![Configure Condition action](../../../../../translated_images/3.1_10_SetDynamicContentValue_V2.23c3d0438146a5ff0d695077e65a3b1c8b230b54c51ded8a099c6e99a948e9ed.my.png)

1. **For each** action အလိုအလျောက်ပေါ်လာတာကို သတိထားမိလား။

**For each** action ကိုရွေးပါ။ ဒီ action က email ရဲ့ attachment တစ်ခုချင်းစီကို loop လုပ်တာကို ကိုယ်စားပြုပါတယ်၊ Trigger မှ **Attachments Content-Type** parameter က attachment တစ်ခုချင်းစီနဲ့ဆက်စပ်နေပါတယ်။

အောက်မှာ array ဖြစ်ပြီး **For each** action ကို **Condition** action မှာ **Attachments Content-Type** parameter ကိုရွေးတဲ့အခါ အလိုအလျောက်ထည့်လိုက်တာပါ။

ပိုမိုလေ့လာချင်ရင် အောက်ပါ learning block ကိုဖွင့်ပါ။

??? info "Additional Learning: For each action automatically appearing"

🤔 **"Apply to each" သို့မဟုတ် "For each" အလိုအလျောက်ပေါ်လာတာဘာလဲ?**

Dynamic content (parameter) တစ်ခုကိုရွေးတဲ့အခါ - ဥပမာ attachment, email, rows စတဲ့ list သို့မဟုတ် array ကို ကိုယ်စားပြုတဲ့ parameter - Power Automate က item တစ်ခုချင်းစီကို process လုပ်ချင်တယ်လို့သိပါတယ်။

ဒီလိုလုပ်ဖို့ Power Automate က action အပေါ်မှာ **“Apply to each”** (သို့မဟုတ် **For each**) loop ကို အလိုအလျောက်ထည့်လိုက်ပါတယ်။ ဒါက list တစ်ခုလုံးကိုတစ်ခါတည်း process လုပ်တာမဟုတ်ဘဲ item တစ်ခုချင်းစီအတွက် action ကို run လုပ်စေပါတယ်။

🦋 **ဥပမာ**

- Attachment list (array) ကိုရွေးပြီး single file ကို process လုပ်ဖို့ action တစ်ခုကိုသုံးတဲ့အခါ Power Automate က action ကို **"Apply to each"** (သို့မဟုတ် **For each**) loop ထဲမှာထည့်လိုက်ပါတယ်။
- ဒီလိုနဲ့ action က attachment တစ်ခုချင်းစီအတွက် run လုပ်ပါမယ်။

💡 **Key Points**

- **Automatic:** Loop က item collection တစ်ခုချင်းစီကို process လုပ်ဖို့ အလိုအလျောက်ပေါ်လာပါတယ်။
- **Prevents errors:** Loop မပါဘဲ item များစွာကိုတစ်ခါတည်း handle လုပ်ဖို့ action ကို run လုပ်ရင် error ဖြစ်နိုင်ပါတယ်။
- **Visual cue:** Loop က list ရဲ့ item တစ်ခုချင်းစီအတွက် action ကို repeat လုပ်မယ်ဆိုတာကို visual အနေနဲ့ပြသပါတယ်။

![For Each action explained](../../../../../translated_images/3.1_11_ForEach.82bd7b62b815fdbcd67acff0a633137cf03175940c670361ea8669b0df892927.my.png)

1. အခြား **Choose a value** field မှာ အောက်ပါကိုရိုက်ပါ၊

```text
application/pdf
```

ဒီလိုနဲ့ file attachment တစ်ခုချင်းစီအတွက် file extension format က .PDF ဖြစ်မဖြစ်စစ်ဆေးပါမယ်။

![EqualToValue](../../../../../translated_images/3.1_12_EqualToValue.66c107cb8105c1cd3d166b8a5bf690b8dfc30aa2bd2af83c438a9e44d1b544b0.my.png)

1. **True** path ကို configure လုပ်ပြီး email က file ကို extract လုပ်ပြီး **Resume** Dataverse table ထဲကို upload လုပ်ပါမယ်။

**True** path အောက်မှာ action အသစ်တစ်ခုထည့်ပြီး `html to text` ကိုရှာပါ။ **Html to text** action ကိုရွေးပါ။

ပိုမိုလေ့လာချင်ရင် **Html to text** action အကြောင်း learning block ကိုဖွင့်ပါ။

??? info "Additional Learning: Html to text action"

🤔 **"HTML to text" Action ဆိုတာဘာလဲ?**

Power Automate ရဲ့ **HTML to text** action က HTML format content ကို plain text အဖြစ်ပြောင်းဖို့အသုံးပြုပါတယ်။ HTML tags ပါတဲ့ data (ဥပမာ email, web content, API response) ကို readable text အဖြစ် extract လုပ်ချင်တဲ့အခါ အသုံးဝင်ပါတယ်။

⚙️ **ဘယ်လိုအလုပ်လုပ်သလဲ?**

- **Input:** HTML content string (ဥပမာ email body) ကိုထည့်ပါ။
- **Output:** HTML tags အားလုံးကိုဖယ်ရှားပြီး plain text ကိုပေးပါမယ်။

👍🏻 **ဘယ်အခါအသုံးပြုသင့်သလဲ?**

- HTML tags ပါတဲ့ email, web page, API response က readable text ကို extract လုပ်ချင်တဲ့အခါ။
- HTML format ကို support မလုပ်တဲ့ systems (ဥပမာ SMS, Teams messages, databases) ကို content ပို့မယ့်အခါ။
- Data cleaning သို့မဟုတ် analysis အတွက် content ကိုပြင်ဆင်ချင်တဲ့အခါ။

🔭 **ဘယ်မှာရှာနိုင်မလဲ?**

- Power Automate ရဲ့ Agent Flows မှာ `HTML to text` action ကိုရှာပါ။ **Data Operations** connector အောက်မှာရှိပါတယ်။

💡 **Key Points**

- HTML tags အားလုံးကိုဖယ်ရှားပြီး text ကိုပေးပါမယ်။
- Scripts/styles ကို interpret သို့မဟုတ် execute မလုပ်ပါဘူး - tags ကိုဖယ်ရှားပါမယ်။
- Data cleaning နဲ့ plain-text outputs အတွက်အသုံးဝင်ပါတယ်။

![Add HTML to text action](../../../../../translated_images/3.1_13_AddHTMLToTextAction.2aa9468b87dbeb847c083f24da0fe99438b39f826b13a70982ec255a97c2aa80.my.png)

1. **Html to text** action အတွက် connection reference အသစ်တစ်ခုဖန်တီးဖို့ **Add new** ကိုရွေးပါ။

![Add new connection reference](../../../../../translated_images/3.1_14_AddNewConnection.4a23546976b62e7f0e882ac1379950e5bfdcaa702070313cb84a1d22b06a79a7.my.png)

1. Action ကို configure လုပ်ပါမယ်။ Trigger မှ **Body** parameter ကိုထည့်ပါ။ **Content** field မှာ **lightning bolt icon** သို့မဟုတ် **fx icon** ကိုညာဘက်မှာရွေးပါ။

![Add Dynamic Content](../../../../../translated_images/3.1_15_AddDynamicContent.0624a9808f55b993efb6d00bf941a88389655e2ab9970ba2b9a1538272fe9643.my.png)

1. **Dynamic content** tab မှာ `body` ကိုရှာပြီး **Body** parameter ကိုရွေးပါ၊ **Add** ကိုရွေးပါ။

![Add Body parameter](../../../../../translated_images/3.1_16_AddDynamicContent.40b7eccc080c20513eed5663062b2a63d40d6482eaf2d42fe4e29cb94797f098.my.png)

1. Action ကို configure လုပ်ပြီး panel ကိုပိတ်ဖို့ ဘယ်ဘက်ကိုညွှန်းနေတဲ့ angle brackets («) ကိုရွေးပါ။

![Collapse action panel](../../../../../translated_images/3.1_17_CollapseAction.ca2c346efb58f8240372c3d145fa10ba609cab1c2075d7df1a9388c82fab79f5.my.png)

1. **Html to text** action အောက်မှာ **+ icon** ကိုရွေးပြီး action အသစ်ထည့်ပါ။ Panel ကို load လုပ်ပြီး actions တွေထည့်ပါ။ **Microsoft Dataverse** connector ကိုရွေးပါ။

![Add new action](../../../../../translated_images/3.1_18_AddDataverseAction.5f4be9eb96e22dac239e5545bab5ad9d08b138c2cbcbc700680f33445e132506.my.png)

1. **Add a new row** action ကိုရွေးပါ။

![Add a new row action](../../../../../translated_images/3.1_19_AddANewRow.48e0a3868821e59ed2a299ccb6a521af27b2430082381d48be38087be62c7c15.my.png)

1. Action ကို rename လုပ်ဖို့ **Ellipsis (...)** ကိုရွေးပြီး အောက်ပါကို copy လုပ်ပြီး paste လုပ်ပါ၊

```text
Add a new Resume row
```

**Table name** parameter အတွက် `res` ကိုရှာပြီး **Resumes** table ကိုရွေးပါ။

![Rename action and configure Table name parameter](../../../../../translated_images/3.1_20_RenameAndSelectResumesTable.89f8485653abb7fda1d6eb44210951f05a05ed6f7450a51895079dfd8e72c8bf.my.png)

1. **Resume Title** field ကိုရွေးပြီး **lightning bolt icon** သို့မဟုတ် **fx icon** ကိုညာဘက်မှာရွေးပါ။

![Configure Resume Title parameter](../../../../../translated_images/3.1_21_AddDynamicContent.9ee1f89420d5a4aa56797944166208f6e9b0ec67116625168fbcefb907850224.my.png)

1. **Function tab** မှာ `item()` function ကိုအသုံးပြုတဲ့ expression ကိုရိုက်ပါ။

```text
item()?['name']
```

ပိုမိုလေ့လာချင်ရင် `item()` function အကြောင်း learning block ကိုဖွင့်ပါ။

??? info "Additional Learning: `item()` function"

🤔 **`item()` function ဆိုတာဘာလဲ?**

- **Apply to each** action ကိုအသုံးပြုတဲ့အခါ Power Automate က collection (array) ထဲက element တစ်ခုချင်းစီကို process လုပ်ပါတယ်။
- Loop သို့ array operation ထဲမှာ `item()` function က current item ကိုပြန်ပေးပါတယ်။

⚙️ **ဘယ်လိုအလုပ်လုပ်သလဲ?**

- Loop ထဲမှာ `item()` က current element ကိုပြန်ပေးပါတယ်။

📌 **ဘယ်မှာအသုံးပြုသင့်သလဲ?**

- **Apply to each:** current item ရဲ့ properties ကို access လုပ်ဖို့။
- **Select:** array ထဲက item တစ်ခုချင်းစီကို transform လုပ်ဖို့။
- **Filter array:** current item ကိုစစ်ဆေးဖို့။

🦋 **ဥပမာ**

- Loop ထဲမှာ expression:
```text
item()?['Email']
```
- Current item ရဲ့ `Email` property ကိုရယူပါမယ်။

💡 **Key Points**

- `item()` function က loop သို့ array operation ထဲမှာ current item ကိုကိုယ်စားပြုပါတယ်။
- Nested loops တွေမှာ `items('LoopName')` ကိုအသုံးပြုနိုင်ပါတယ်။

**Resume Title** parameter မှာ expression ကိုထည့်ဖို့ **Add** ကိုရွေးပါ။

![Add expression for Resume Title parameter](../../../../../translated_images/3.1_22_ResumeTitleParameter.9e4fa71a5251cb899e7b09bcc3052eeda1e512841f929118eb9e2b1d232ecb07.my.png)

1. **Cover Letter** field ကို configure လုပ်ဖို့ **Show all** ကိုရွေးပါ၊ **lightning bolt icon** သို့မဟုတ် **fx icon** ကိုညာဘက်မှာရွေးပါ။

**Function tab** မှာ အောက်ပါ expression ကိုရိုက်ပါ၊

```text
if(greater(length(body('Html_to_text')), 2000), substring(body('Html_to_text'), 0, 2000), body('Html_to_text'))
```

ဒီ expression က **Html to text** action မှ text ရဲ့အရှည်က 2000 characters ထက်ပိုရင် ပထမ 2000 characters ကိုပေးပြီး၊ မဟုတ်ရင် text အပြည့်ကိုပေးပါမယ်။

![Add expression for Cover Letter parameter](../../../../../translated_images/3.1_23_CoverLetterParameter.d2b521d6b37d05ac4760c91de2964b6d062585a333af6989d9ac0794a4139463.my.png)

1. Expression ကို **Cover Letter** field မှာထည့်ပြီး configure လုပ်ပါ။

![Expression added to the Cover Letter parameter](../../../../../translated_images/3.1_24_ExpressionForCoverLetter.3d18124b10b76bad92db61c529ae395b0bb05f3215e3b783771e76ef7677664e.my.png)

1. **Source Email Address** field အတွက် `from` ကိုရှာပြီး trigger မှ **From** parameter ကိုရွေးပါ၊ အဲဒါက email address value ပါ။

![Source Email Address parameter](../../../../../translated_images/3.1_25_FromParameter.1ed1be46711f6705fb807996f6f1e873adc22e285186a851272e0cf3855487ef.my.png)

1. **Upload Date** field အတွက် **lightning bolt icon** သို့မဟုတ် **fx icon** ကိုညာဘက်မှာရွေးပါ။ **Function tab** မှာ `utcNow()` function ကိုအသုံးပြုတဲ့ expression ကိုရိုက်ပါ။

```text
utcNow()
```

ပိုမိုလေ့လာချင်ရင် `utcNow` function အကြောင်း learning block ကိုဖွင့်ပါ။

??? info "Additional Learning: `utcNow` function"

🤔 **`utcNow()` function ဆိုတာဘာလဲ?**

- Power Automate ရဲ့ `utcNow()` function က current date နဲ့ time ကို Coordinated Universal Time (UTC) အနေနဲ့ ISO 8601 format (ဥပမာ `2025-09-23T04:32:14Z`) အနေနဲ့ပြန်ပေးပါတယ်။

🦋 **ဥပမာ**

- Expression:
```text
concat('Report generated on ', utcnow())
```
- Output:
```text
Report generated on 2025-09-23T04:32:14Z
```

💡 **Key Points**

- `utcNow()` function က current date နဲ့ time ကို UTC format အနေနဲ့ပြန်ပေးပါတယ်။
- **အကြောင်းအရာများ (input parameters) မလိုအပ်ပါ:** ယခုအချိန် UTC timestamp ကို အမြဲပေးပါသည်။
   - **အသုံးပြုမှုများ**
       - log များ သို့မဟုတ် ဖိုင်နာမည်များတွင် timestamp ထည့်ခြင်း
       - ယခုအချိန်ကို အခြားရက်စွဲများနှင့် နှိုင်းယှဉ်ခြင်း
       - အချိန်အခြေခံ အခြေအနေများ သို့မဟုတ် အချိန်ဇယားများ

![Upload Date Parameter](../../../../../translated_images/3.1_26_UploadDateParameter.21b0afc9807bf680c1c432066f1644d4d018cb4988ad0c0788b5186cea285e02.my.png)

1. **Add a new Resume row** လုပ်ဆောင်ချက်ကို ပြင်ဆင်ပြီးပါပြီ။ အခု panel ကို ပိတ်ပြီး ထွက်ပါ။

![Exit from action panel](../../../../../translated_images/3.1_27_CollapseAction.c033a86e4d8501b10fc454ba7f9c5e08d71d6d881fc72f58011152e1c5d7a7bb.my.png)

1. **Add a new Resume row** လုပ်ဆောင်ချက်အောက်မှာ **+ icon** ကို ရွေးပြီး လုပ်ဆောင်ချက်များ ထည့်ရန် panel ကို ဖွင့်ပါ။ **Microsoft Dataverse** connector ကို ထပ်မံရွေးပါ။

![Add Dataverse action](../../../../../translated_images/3.1_28_AddDataverseAction.1af4dedc95001bfb56b0a642231e9c82b57459b10c68bf6fc177382339a0a221.my.png)

1. **Upload a file or an image** လုပ်ဆောင်ချက်ကို ရွေးပါ။

![Add the Upload a file or an image action](../../../../../translated_images/3.1_29_AddUploadAFileOrAnImage.e40ab21b735e37bd1fdb5020b7433d1a2f01d6e387bc43a437e970c6e20ee779.my.png)

1. **Ellipsis (...)** ကိုရွေးပြီး လုပ်ဆောင်ချက်ကို အမည်ပြောင်းပါ။ အောက်ပါအတိုင်း အမည်ကို ကူးယူပြီး paste လုပ်ပါ။

```text
Upload Resume File
```

![Rename action](../../../../../translated_images/3.1_30_RenameAction.c316fdf225f88e5c3ee26649e672472829c3372c804b544a1372b0455937c204.my.png)

1. **Content name** field ကို ရွေးပြီး **lightning bolt icon** သို့မဟုတ် **fx icon** ကိုညာဘက်တွင် ရွေးပါ။

**Function tab** တွင် အောက်ပါ expression ကို ထည့်ပါ။ ၎င်းသည် `item()` function ကို အသုံးပြုပြီး ယခု item (attachment file) ၏ `name` property ကို ရယူပါသည်။

```text
item()?['name']
```

![Configure Content name parameter](../../../../../translated_images/3.1_31_ContentNameParameter.c6606773f1e82dbcea93d7c2f52dff7a2168f9f04d6b865f699f56d62a41d4ec.my.png)

1. **Table name** parameter အတွက် `res` ကို ရှာပြီး **Resumes** table ကို ရွေးပါ။

![Configure Table name parameter](../../../../../translated_images/3.1_32_SelectResumesTable.6a00bf6d585002219003da47f6e1042dc67cbdb3fbaf7d959253550035e27520.my.png)

1. **Row ID** field ကို ရွေးပြီး **lightning bolt icon** သို့မဟုတ် **fx icon** ကိုညာဘက်တွင် ရွေးပါ။

`ID` ကို ရှာပြီး _Add a new row_ Dataverse လုပ်ဆောင်ချက်မှ **Resume** parameter ကို ရွေးပါ။ ၎င်းသည် PDF ဖိုင်ကို upload လုပ်ရန် row ID value ကို ပါဝင်သည်။

**Add** ကို ရွေးပါ။

![Select Row ID](../../../../../translated_images/3.1_33_RowIDParameter.9824c6b5ea5edf0ce018140c20431a97c2e750d61bcb787f67da260acb6a3838.my.png)

1. **Column name** field ကို ရွေးပြီး **Resume PDF** option ကို ရွေးပါ။

![Configure Column name parameter](../../../../../translated_images/3.1_34_ColumnNameParameter.ef4f770cbd84cae5c15cfe06d1bdbe028d0c6d54a2286dab30769fa01c948b71.my.png)

1. **Content** field ကို ရွေးပြီး **lightning bolt icon** သို့မဟုတ် **fx icon** ကိုညာဘက်တွင် ရွေးပါ။

**Function tab** တွင် အောက်ပါ expression ကို ထည့်ပါ။ ၎င်းသည် `item()` function ကို အသုံးပြုပြီး ယခု item (attachment file) ၏ `contentBytes` property ကို ရယူပါသည်။ `contentBytes` သည် ဖိုင် သို့မဟုတ် attachment ၏ raw binary data ဖြစ်ပြီး Base64 string အဖြစ် encode လုပ်ထားသည်။

```text
item()?['contentBytes']
```

1. လုပ်ဆောင်ချက်ကို ပြင်ဆင်ပြီးပါပြီ။ panel ကို ပိတ်ရန် ဘယ်ဘက်ကို ဦးတည်ထားသော angle brackets («) ကို ရွေးပါ။

![Collapse action panel](../../../../../translated_images/3.1_36_CollapseAction.1813a7219f0f37b87f80c2cd9f5a9626c3a320858d08a0e62cf14736f97db4c6.my.png)

1. **Sends a prompt to the specified copilot for processing** ကို ရွေးပြီး **Upload Resume File** လုပ်ဆောင်ချက်အောက်တွင် _True_ path တွင် drag and drop လုပ်ပါ။

![Drag and drop action in True path](../../../../../translated_images/3.1_37_DragAndDropAction.57dc2e9f9d25ed892a4fc072a72c55eca6c38e313ab48fb9db37e9371995440f.my.png)

1. **Sends a prompt to the specified copilot for processing** ကို ရွေးပြီး ပြင်ဆင်ပါ။

![Select action](../../../../../translated_images/3.1_38_SelectAction.d125bdf661f66b6397542c75efbc6a78b8c4862e03dce4002776c251f1c48382.my.png)

1. **Body/message** field တွင် field content အားလုံးကို ရွေးပြီး ဖျက်ပါ။

![Clear Body parameter](../../../../../translated_images/3.1_39_ClearBodyParameter.6a345b2e5dbe5510184d7bae7cd406b8cec72c714f34bb40e30741e445a491c0.my.png)

1. အောက်ပါစာသားကို **Body/message** field တွင် ကူးယူပြီး paste လုပ်ပါ။ `RESUME ID PLACEHOLDER` ကို highlight လုပ်ပါ။

```text
Send [ResumeId (text)] = "RESUME ID PLACEHOLDER" and [ResumeTitle (text_1)] = "RESUME TITLE PLACEHOLDER" and [ResumeNumber (text_2)]= "RESUME NUMBER PLACEHOLDER" to the Tool "Notify Teams Applicant channel" in the child agent "Application Intake Agent"
```

![Replace Resume ID Placeholder text](../../../../../translated_images/3.1_40_ReplaceResumeIDPlaceholder.eb61590503cb37d89121aaed6d979a4272aa30c87700206e04db8005e60b294f.my.png)

1. **lightning bolt icon** သို့မဟုတ် **fx icon** ကိုညာဘက်တွင် ရွေးပါ။

`resume` ကို ရှာပြီး _Add a new row Dataverse_ လုပ်ဆောင်ချက်မှ **Resume** parameter ကို ရွေးပါ။ ၎င်းသည် Resume row တွင် ဖန်တီးထားသော `ID` value ကို ပါဝင်သည်။

**Add** ကို ရွေးပါ။

![Select Resume parameter](../../../../../translated_images/3.1_41_SelectResumeParameter.61c4457c33e5d1b596169857535bfc560ef677264f8798e9148ceac999eeaeb9.my.png)

1. `RESUME TITLE PLACEHOLDER` ကို highlight လုပ်ပါ။ **lightning bolt icon** သို့မဟုတ် **fx icon** ကိုညာဘက်တွင် ရွေးပါ။

`title` ကို ရှာပြီး _Add a new row Dataverse_ လုပ်ဆောင်ချက်မှ **Resume Title** parameter ကို ရွေးပါ။ ၎င်းသည် Resume row တွင် ဖန်တီးထားသော `resume title` value ကို ပါဝင်သည်။

**Add** ကို ရွေးပါ။

![Select Resume parameter](../../../../../translated_images/3.1_42_SelectResumeTitleParameter.6c887607128f928da15c4cf6c22254d0473bc22514aa883462fd812bf14245e0.my.png)

1. `RESUME NUMBER PLACEHOLDER` ကို highlight လုပ်ပါ။ **lightning bolt icon** သို့မဟုတ် **fx icon** ကိုညာဘက်တွင် ရွေးပါ။

`resume number` ကို ရှာပြီး _Add a new row Dataverse_ လုပ်ဆောင်ချက်မှ **Resume Number** parameter ကို ရွေးပါ။ ၎င်းသည် Resume row တွင် ဖန်တီးထားသော `Resume Number` value ကို ပါဝင်သည်။

**Add** ကို ရွေးပါ။

![Select Resume parameter](../../../../../translated_images/3.1_43_SelectResumeNumberParameter.ca19197525250483a7e94598b621072b47ebdf5deb939e1387c979e807ddc554.my.png)

1. လုပ်ဆောင်ချက်ကို ပြင်ဆင်ပြီးပါပြီ။ 🙌🏻 အရမ်းကောင်းပါတယ်! အခု **Save draft** ကို ရွေးပြီး event trigger flow ကို save လုပ်ပါ။

![Save draft](../../../../../translated_images/3.1_44_SaveDraft.0c9eee19f0c7cb8483b8d31bc17e1dd54075352d22f0f44603a9d52b52429188.my.png)

1. အခု agent flow ၏ အသေးစိတ်ကို ပြင်ဆင်ရန် **Back** ကို ရွေးပါ။

![Select Back](../../../../../translated_images/3.1_45_Back.3f85535977bdb02231a0fdb8465e0e8b7d86fd5342ff933e4ae8bf9610279989.my.png)

1. **Details** အပိုင်းတွင် **Edit** ကို ရွေးပြီး **Plan** ကို **Copilot Studio** option သို့ update လုပ်ပါ။

**Save** ကို ရွေးပါ။

![Change Copilot Studio plan](../../../../../translated_images/3.1_46_ChangePlanDetails.6ab15f1f8bd9ebe55b2c1576c3495f47d1a29d7435e343d4c590e46647601269.my.png)

1. Copilot Studio plan သို့ ပြောင်းရန် အတည်ပြုရန် modal တစ်ခု ပေါ်လာပါမည်။ **Confirm** ကို ရွေးပါ။

![Confirm Copilot Studio plan change](../../../../../translated_images/3.1_47_ConfirmCopilotStudioPlan.bc6ab52e7c982127154b0fb743f85ff9cc05dcab944dffc9485bdbcbe0811397.my.png)

1. Plan ကို **Copilot Studio** သို့ update လုပ်ပြီးပါပြီ။ Agent ၏ event trigger flow ကို publish လုပ်ရန် **Edit** ကို ရွေးပါ။

![Edit flow](../../../../../translated_images/3.1_48_PlanChangedAndEdit.3c3207766a648817f7a7878c3a6f684cf41cdceea4dca8f6fc43b7315c8dd648.my.png)

1. **Publish** ကို ရွေးပါ။

![Publish](../../../../../translated_images/3.1_49_Publish.38ff814cfce6b3be1076cafb0c28e4e344f75d8cd4117fabed13ad361d4fde3f.my.png)

ဟူရေး! Event trigger flow ကို Publish လုပ်ပြီးပါပြီ 😃

![Published](../../../../../translated_images/3.1_50_Published.449e7867f7b027ae8a524c749357a1b931955062828bacc3b5a51e979755ef4a.my.png)

အခု **Intake Application Agent** ဆိုသော child agent မှ ခေါ်ယူမည့် agent flow အသစ်တစ်ခု ဖန်တီးလိုက်ကြစို့။

### Lab 3.2 - Adaptive card ကို အသုံးပြု၍ Teams channel ကို အသိပေးခြင်း

အခု event trigger မှ ပေးပို့သော values ကို အသုံးပြု၍ Teams channel တွင် adaptive card ကို post လုပ်မည့် **Intake Application Agent** ဆိုသော child agent အတွက် agent flow အသစ်တစ်ခု ဖန်တီးမည်ဖြစ်သည်။ ၎င်း adaptive card သည် PDF ကို auto-upload လုပ်ထားသောအကြောင်း HR recruitment အဖွဲ့ကို အသိပေးမည်ဖြစ်ပြီး ၎င်းကို ပြန်လည်သုံးသပ်နိုင်ရန် ဖြစ်သည်။

စတင်လိုက်ကြစို့!

1. **Hiring Agent** တွင် **Agents** tab ကို ရွေးပြီး **Application Intake Agent** ကို ရွေးပါ။

![Select Application Intake Agent](../../../../../translated_images/3.2_01_SelectApplicationIntakeAgent.0e9dd3da5c52e9f59ab3a4545c01897ad830853b650ec42f7f8424aa530e0409.my.png)

1. **Tools** အပိုင်းကို အောက်သို့ scroll လုပ်ပြီး **+ Add** ကို ရွေးပါ။

![Add Tool](../../../../../translated_images/3.2_02_AddNewTool.7c62275fd9f28cdc1923ea056a148171048dc568ff78056958fd54862133f90e.my.png)

1. **Add tool** modal ပေါ်လာပါမည်။ **+ New tool** ကို ရွေးပါ။

![Select New Tool](../../../../../translated_images/3.2_03_SelectNewTool.215e7637a9f065a3799a1ecf248eed1e859f201d2dfdfab71a7c1dc18e454e2d.my.png)

1. **Agent flow** ကို ရွေးပါ။

![Select Agent flow](../../../../../translated_images/3.2_04_SelectAgentFlow.7bc12b3435efccc0cfee8f563640562f87d173b436b3313a3d1256fe35024907.my.png)

1. **agent flow designer** ပေါ်လာပါမည်။ **When an agent calls the flow** trigger တွင် **+ Add an input** ကို ရွေးပါ။

![Select add an input](../../../../../translated_images/3.2_05_SelectAddAnInput.f3dc8465f490929baccb0f2dc72b50629b1435ff8a3861f7974885d1d36cdeb1.my.png)

1. User input အမျိုးအစားအဖြစ် **Text** ကို ရွေးပါ။

![Select Text](../../../../../translated_images/3.2_06_SelectText.93585b4af8c4e277c11c2052b638e249508a24a075987026a6ec346e75184217.my.png)

1. Input text field တွင် အောက်ပါအတိုင်း input parameter name ကို ကူးယူပြီး paste လုပ်ပါ။

```text
ResumeId
```

![ResumeId input](../../../../../translated_images/3.2_07_ResumeIdInput.a9e127e343856d6c6d45dd1251cade0503bad9484bc563c02155390951b1faa5.my.png)

1. ဒုတိယ text input ကို ထပ်မံထည့်ပါ။ Input parameter name အဖြစ် အောက်ပါအတိုင်း ကူးယူပြီး paste လုပ်ပါ။

```text
ResumeTitle
```

![ResumeTitle input](../../../../../translated_images/3.2_08_ResumeTitleInput.c71ecd364a974a93abb0de876807c2e9bde59fcea6df317babeb20764b636f26.my.png)

1. တတိယ text input ကို ထပ်မံထည့်ပါ။ Input parameter name အဖြစ် အောက်ပါအတိုင်း ကူးယူပြီး paste လုပ်ပါ။

```text
ResumeNumber
```

![ResumeNumber input](../../../../../translated_images/3.2_09_ResumeNumberInput.a6c060000354deab51dffef3c1ad9f13378cfeabdafdb7a33c2a591bfd044709.my.png)

1. [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request) တွင် Topic အတွင်း adaptive card ကို ထည့်ခဲ့သလို၊ အခု agent flow အတွင်း adaptive card ကို ထည့်မည်ဖြစ်သည်။ Agent flow အတွင်း Teams channel တွင် adaptive card ကို post လုပ်မည့် action တစ်ခု ထည့်လိုက်ပါ။

Trigger အောက်တွင် **+ icon** ကို ရွေးပါ။

![Add new action](../../../../../translated_images/3.2_10_AddNewAction.4474a2150991cac246d5e4091a74ba91e76e1c5bafa34ad985a8567c09dcdd35.my.png)

1. **Post card in a chat or channel** လုပ်ဆောင်ချက်ကို ရွေးပါ။

![Select post card in a chat or channel action](../../../../../translated_images/3.2_11_SelectPostCardInAChatOrChannel.97de43ed1c883b14d0150ae65efaa90f53f0815bdf57ec10e0e22cbd3e22ce06.my.png)

1. Microsoft Teams သို့ connection reference တစ်ခုကို သင့် account ဖြင့် ဖန်တီးရန် လိုအပ်ပါသည်။ **Sign in** ကို ရွေးပါ။

![Select sign in](../../../../../translated_images/3.2_12_SignInToCreateConnectionReference.2297f8b702d71508f1b21a3ed4046df4846dc03b13932a20e5c445403559ac1f.my.png)

1. သင့် account ကို ရွေးပြီး **Allow access** ကို ရွေးပါ။

![Select Allow access](../../../../../translated_images/3.2_13_AllowAccess.31cbf82606d75231108bd4f2bfeafffda3cd7e7e760cd46004c2705afe050aaf.my.png)

1. အောက်ပါ input parameters အတွက် -

| Parameter | How to Set | Details |
|----------|------------|---------|
| **Post as** | Dropdown | `Flow bot` option ကို ရွေးပါ |
| **Post in** | Dropdown | `Channel` option ကို ရွေးပါ |
| **Team** | Dropdown | သင့် environment တွင် ရရှိနိုင်သော team ကို ရွေးပါ |
| **Channel** | Dropdown | သင့် environment တွင် ရရှိနိုင်သော channel ကို ရွေးပါ |

![Configure input parameters](../../../../../translated_images/3.2_14_ConfigureParameters.8c21924f90db3acaa33d4e35ef43c70556ba4cc37207a195ac654e55a43400a6.my.png)

1. **Adaptive Card** field ကို ပြင်ဆင်ရန် **Adaptive Card** field ကို ရွေးပါ။

![Select Adaptive Card field](../../../../../translated_images/3.2_15_SelectAdaptiveCardParameter.65323056be6174d2eed7422650aaa70fc16396148f90b8af1801110d7a30d66f.my.png)

1. [Resume Table Updated JSON file](../../../../../docs/operative-preview/03-automate-triggers/assets/3.2_ResumeTableUpdated.json) ကို ဖွင့်ပြီး ၎င်း၏ အကြောင်းအရာအားလုံးကို ကူးယူပြီး Adaptive Card field တွင် paste လုပ်ပါ။

![Copy and paste JSON](../../../../../translated_images/3.2_16_JSON.f022097fb7139bd12514abb8fdc518309ea940f005cc94a11ba159359cde784b.my.png)

1. [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request) တွင် JSON payload တွင် existing values ကို dynamic content သို့ ပြောင်းခဲ့သလို၊ အခု JSON payload တွင် dynamic content သို့ ပြောင်းပါ။

ပထမဦးဆုံး `selectAction` property အတွင်း `url` property အတွက် URL ကို update လုပ်ပါ။ ၎င်း URL ကို **Hiring Hub** model-driven app တွင် Resumes system view URL ဖြင့် အစားထိုးပါ။ ၎င်းသည် Recruiter ကို Resumes system view သို့ redirect လုပ်ရန် ဖြစ်သည်။

URL value ကို highlight လုပ်ပြီး ဖျက်ပါ။

![Select URL value](../../../../../translated_images/3.2_17_SystemViewURL.5e51fd894ac916f436107c7b668d66ca87ca8bdfd7affeb7dae1b10fa8ff5afb.my.png)

1. **Hiring Hub** model-driven app တွင် **Resumes** system view သို့ left hand side menu ကို အသုံးပြု၍ သွားပါ။ URL ကို ကူးယူပြီး agent flow တွင် ပြန်သွားပြီး `selectAction` property အတွင်း **url** property တွင် paste လုပ်ပါ။

![Copy Resumes system view URL](../../../../../translated_images/3.2_18_CopyResumesSystemViewURL.14d9f55c7db15977a12dfe2a5df95aab5cf241e646b08f9838cff31aaa27a381.my.png)
1. သင်သည် အောက်ပါအရာများကို မြင်ရမည်ဖြစ်ပြီး အဝါရောင်ဖြင့် အထောက်အထားပြထားသော **Hiring Hub** model-driven app ၏ ပတ်ဝန်းကျင်အသေးစိတ်ကို တွေ့ရမည်။

     | Parameter | Value | Explanation |
     |----------|------------|---------|
     | **Organization URI** | GUID | Dataverse/Dynamics 365 ပတ်ဝန်းကျင်၏ အဖွဲ့ URL |
     | **appid** | GUID | သတ်မှတ်ထားသော model-driven app ကို ဖွင့်ရန် appid သို့မဟုတ် appname query parameter ကို အသုံးပြုသည်။ ဤကိစ္စတွင် appid ကို အသုံးပြုသည် |
     | **viewid** | GUID | view ၏ id ဖြစ်သော query parameter |

       ![Paste URL](../../../../../translated_images/3.2_19_PasteURL.41f3fdd66190c8ba478857f91c90eb05ee9621243bda7b7ad26eb5802b8e970d.my.png)

1. နောက်တစ်ဆင့်တွင် properties အတော်များများအတွက် dynamic content values များကို ထည့်သွင်းပါမည်။ အစအနမှာ event trigger မှ အလိုအလျောက် ဖန်တီးထားသော row ၏ Resume Number reference ကို ပြသမည့် text ကို စတင်ပါမည်။

      **panel** icon ကို ရွေးချယ်၍ action panel ကို load လုပ်ပါ။

       ![Select panel icon](../../../../../translated_images/3.2_20_SelectPannelIcon.786a4147ba12e0e62648c66f14fb2b9a7f89b27c3a610f43420e31cb0c9fb5da.my.png)

1. `RESUME NUMBER PLACEHOLDER` ၏ `text` property တွင် ရှိသော line ကို အောက်သို့ ဆွဲချပြီး placeholder value ကို highlight လုပ်ပြီး ဖျက်ပါ။

       ![Delete placeholder](../../../../../translated_images/3.2_21_DeleteResumeNumberPlaceholder.6ffd7a5a073f9d9a11e0e119c87e827243de237f70ebc3ab37dfdd36de615130.my.png)

1. နှစ်ခုသော quotation marks အကြားတွင် click လုပ်ပြီး **lightning bolt icon** သို့မဟုတ် **fx icon** ကို ညာဘက်တွင် ရွေးချယ်ပါ။

      **Dynamic Content** tab တွင် **ResumeNumber** parameter ကို ရွေးချယ်ပြီး **Add** ကို ရွေးပါ။

       ![SAdd ResumeNumber parameter](../../../../../translated_images/3.2_22_SelectResumeNumberParameter.de5a6eecb3ee092441d841ad137dfecd9f8d503a370ff60eb5ccdc0267e37df0.my.png)

1. **ResumeNumber** parameter သည် dynamic content အဖြစ် `text` property တွင် ထည့်သွင်းထားမည်ဖြစ်သည်။

       ![ResumeNumber dynamic content](../../../../../translated_images/3.2_23_ResumeNumberDynamicContent.129a566ac6e9d448b268b828da5766a7056779ac167f65b498e2ca21d703b7f0.my.png)

1. အတူတူသော အဆင့်များကို `RESUME NAME PLACEHOLDER` အတွက် ပြန်လုပ်ပါမည်။ `RESUME NAME PLACEHOLDER` ၏ `text` property တွင် ရှိသော line ကို အောက်သို့ ဆွဲချပြီး placeholder value ကို highlight လုပ်ပြီး ဖျက်ပါ။

       ![Resume Name Placeholder](../../../../../translated_images/3.2_24_ResumeNamePlaceholder.6c879b99ae375892f7e0a511bfedd5fa9e60a8dea71ea2a44c2a7a04c8389f43.my.png)

1. နှစ်ခုသော quotation marks အကြားတွင် click လုပ်ပြီး **lightning bolt icon** သို့မဟုတ် **fx icon** ကို ညာဘက်တွင် ရွေးချယ်ပါ။

      **Dynamic Content** tab တွင် **ResumeTitle** parameter ကို ရွေးချယ်ပြီး **Add** ကို ရွေးပါ။

       ![SAdd ResumeNumber parameter](../../../../../translated_images/3.2_25_SelectResumeTitleParameter.18c769bbd2c60e362a56f6055e151ed6287903cb625addcdfbb43044828d7378.my.png)

1. **ResumeTitle** parameter သည် dynamic content အဖြစ် `text` property တွင် ထည့်သွင်းထားမည်ဖြစ်သည်။

       ![ResumeNumber dynamic content](../../../../../translated_images/3.2_26_ResumeTitleDynamicContent.7219e078f71fc0d5d4a6bb228ba2d53f0898ba26a27c5eb859df90d12dd52c70.my.png)

1. Recruiter သည် resume ကို ပြန်လည်သုံးသပ်ရမည့် **Due Date** value အတွက် အတူတူသော အဆင့်များကို ပြန်လုပ်ပါမည်။ `May 21, 2023` ၏ `text` property တွင် ရှိသော line ကို အောက်သို့ ဆွဲချပါ။

       ![Select Allow access](../../../../../translated_images/3.2_27_DueDatePlaceholder.17c6003cc9ec1141b0aeb5cde203098a7f5534fa11f01a3cbffb66206ed1633a.my.png)

1. date placeholder value ကို ဖျက်ပြီး နှစ်ခုသော quotation marks အကြားတွင် click လုပ်ပါ။

       ![Delete](../../../../../translated_images/3.2_28_DeleteDueDatePlaceholder.9a3df55fb3c9ed72e61e0a60dc3344335b0444ff537c9fb51036b0442a85d268.my.png)

1. **lightning bolt icon** သို့မဟုတ် **fx icon** ကို ညာဘက်တွင် ရွေးချယ်ပြီး **Function** tab တွင် အောက်ပါ expression ကို ထည့်သွင်းပြီး **Add** ကို ရွေးပါ။

       ```text
       addDays(utcNow(), 3, 'MMM dd, yyyy')
       ```

      ဤ expression သည် function နှစ်ခုကို အသုံးပြုသည်။

     | Function | Explanation |
     |----------|------------|
     | **addDays** | သတ်မှတ်ထားသော ရက်များကို ပေးထားသော ရက်စွဲတွင် ထည့်သွင်းပြီး string format အဖြစ် ရလဒ်ရက်စွဲကို ပြန်ပေးသည် |
     | **utcNow** | Coordinated Universal Time (UTC) format အဖြစ် string အနေဖြင့် လက်ရှိရက်စွဲနှင့် အချိန်ကို ပြန်ပေးသည် |

      utcNow value အတွက် ရက်စွဲကို လစဉ်နှင့် ရက်စဉ်၊ နှင့်နှစ်စဉ်အတိုင်း format ပြုလုပ်ထားသည်။

       ![Expression Due Date](../../../../../translated_images/3.2_29_01_ExpressionDueDate.a4fa31985f5500971f2fc6da0e81e008af12be19d54a30a240764b74a4b2dbcb.my.png)

      expression သည် `text` property တွင် ထည့်သွင်းထားမည်ဖြစ်သည်။

       ![Expression Due Date](../../../../../translated_images/3.2_29_02_ExpressionDueDate.6159288450731c7b09628af70f0c9a6d92590ca7c7e39e8a524ae8af7c511f2c.my.png)

1. နောက်ဆုံးတွင် JSON payload ၏ `actions` array property ၏ `url` property အတွက် URL ကို update လုပ်ပါမည်။ ယခု placeholder URL ကို **Hiring Hub** model-driven app ၏ Resume row URL ဖြင့် အစားထိုးပါမည်။ ဤအရာသည် Recruiter ကို adaptive card ၏ `Action.OpenURL` action ကို ရွေးချယ်ပြီး model-driven app တွင် Resume သို့ ဦးတည်စေမည်။

       ![Delete View Resume URL placeholder](../../../../../translated_images/3.2_30_ViewResumeURLPlaceholder.f27af6cadfb54fb977f0b46ea3ec42ee0638d38ebc5d294eff5da52abf9d4a1b.my.png)

1. **Hiring Hub** model-driven app တွင် **Resumes** system view တွင် row တစ်ခုကို ဘယ်ဘက် menu ကို အသုံးပြု၍ ဖွင့်ပါ။ resume row သည် model-driven app တွင် form အဖြစ် load လုပ်မည်ဖြစ်သည်။

      Resume row URL ကို copy လုပ်ပါ။

    ??? info "သင်သည် **Hiring Hub** model-driven app သို့ ပြန်သွားရန်"

        1. [https://make.powerapps.com](https://make.powerapps.com) သို့ browse လုပ်ပြီး သင်၏ developer environment တွင် ရှိနေကြောင်း သေချာပါ။ မဟုတ်လျှင် switch လုပ်ပါ။
        
        ![Browse to make.powerapps.com](../../../../../translated_images/3.2_31_Note_01_BrowseToURL.a13dfc8b05a0b34f3a4c853f3d3e418864176b52b1b40c069da7712af5562aa5.my.png)

        1. ဘယ်ဘက် menu pane တွင် **Apps** ကို ရွေးချယ်ပြီး **Hiring Hub** model-driven app အတွက် **Play** icon ကို ရွေးချယ်၍ browser တွင် load လုပ်ပါ။
        
        ![Select Hiring Hub model-driven app](../../../../../translated_images/3.2_31_Note_02_HiringHubApp.a09b6ea28b4fea8932809cb847cb0ea3d8faeb7b7b5604852de1f46ab1e9741b.my.png)

       ![Copy Resume row URL](../../../../../translated_images/3.2_31_CopyResumeURL.f6156f8792526129c2613922f0137221b2944fa8ffe7c04766d710521ad8765b.my.png)

1. agent flow သို့ ပြန်သွားပြီး placeholder URL value ကို highlight လုပ်ပြီး ဖျက်ပါ။

       ![Delete Resume row URL placeholder](../../../../../translated_images/3.2_32_SelectResumeURLPlaceHolder.8db783de292428eaa8937242eba4a54ebb1df7bf4c1bc9391b016ee545fb2b9f.my.png)

1. ထို့နောက် copy လုပ်ထားသော URL ကို `url` property ၏ **url property** တွင် paste လုပ်ပါ။

       ![Paste the copied Resume row URL](../../../../../translated_images/3.2_33_PasteResumeRowURL.d7ba92493d7597b89f75e2f17f76846ac17a9ba89c2e36729dc6b5dc1599b047.my.png)

1. သင်သည် အောက်ပါအရာများကို မြင်ရမည်။ အဆုံးတွင် ရှိသော `GUID` id value ကို ဖျက်ပါ။ dynamic content - **ResumeId** parameter ကို အစားထိုးပါမည်။

       ![Delete View Resume URL placeholder](../../../../../translated_images/3.2_34_DeleteViewResumePlaceholderURL.7b26209eaeef6dc0a21b16140d05fe2f0e38de5f714575edd24d21dded58102a.my.png)

1. **lightning bolt icon** သို့မဟုတ် **fx icon** ကို ညာဘက်တွင် ရွေးချယ်ပါ။

      **Dynamic Content** tab တွင် **ResumeId** parameter ကို ရွေးချယ်ပြီး **Add** ကို ရွေးပါ။

       ![ResumeId parameter](../../../../../translated_images/3.2_35_ResumeIdParameter.3dc710a7f5216944387f4d5f82c0a372eee23ee5259dec04147ad00e9c454d7d.my.png)

1. **ResumeId** သည် dynamic content အဖြစ် ထည့်သွင်းထားမည်ဖြစ်သည်။ အဝါရောင်ဖြင့် အထောက်အထားပြထားသော **Hiring Hub** model-driven app ၏ ပတ်ဝန်းကျင်အသေးစိတ်ကို တွေ့ရမည်။

     | Parameter | Value | Explanation |
     |----------|------------|---------|
     | **Organization URI** | GUID | Dataverse/Dynamics 365 ပတ်ဝန်းကျင်၏ အဖွဲ့ URL |
     | **appid** | GUID | သတ်မှတ်ထားသော model-driven app ကို ဖွင့်ရန် appid သို့မဟုတ် appname query parameter ကို အသုံးပြုသည်။ ဤကိစ္စတွင် appid ကို အသုံးပြုသည် |
     | **id** | GUID | Resume row ၏ id ဖြစ်သော query parameter |

       ![ResumeId dynamic content](../../../../../translated_images/3.2_36_ResumeIdDynamicContent.a1a40dfb4a83b60f1b75b02160890e3fec41c2c7df8adf32e02d652a57c1ee87.my.png)

1. **Post card in a chat or channel** action ကို configure ပြုလုပ်ပြီးပါပြီ 👏🏻 **x** icon ကို ရွေးချယ်၍ action configuration panel မှ ထွက်ပါ။

       ![Close panel](../../../../../translated_images/3.2_37_CloseActionPanel.23d07107381411aa9494ef36fb240682a0727a63e6f15082074b34a1defd517b.my.png)

1. နောက်ဆုံးတွင် **Respond to the agent** action ကို configure ပြုလုပ်ပြီး text ကို agent သို့ ပြန်ပို့၍ process ကို အဆုံးသတ်ပါမည်။

      **Respond to the agent** action တွင် **+Add an output** ကို ရွေးပါ။

       ![Select Add an output](../../../../../translated_images/3.2_38_AddAnOutput.de1a0e49033cb077eb5d2c226152bbb06dc12fb95d0496c69d469eecdb46c0ae.my.png)

1. output အမျိုးအစားအဖြစ် **Text** ကို ရွေးပါ။

       ![Select test as the type output](../../../../../translated_images/3.2_39_SelectText.4e1e82c35fe9d1b569b668092d405aa9b0c81fbe67e7de68a660f2083ed3afdd.my.png)

1. output အမည်အဖြစ် အောက်ပါအတိုင်း ထည့်သွင်းပါ။

       ![End Conversation Output](../../../../../translated_images/3.2_40_EndConversationOutput.e392b58847d8439443c89459fccbbd88d4ea5e5fa562749b77407c46b9ff4ca4.my.png)

1. output value အဖြစ် အောက်ပါအတိုင်း ထည့်သွင်းပါ။

       ```text
       Finished
       ```

       ![End Conversation Output value](../../../../../translated_images/3.2_41_EndConversationOutputValue.2cb836900ee9fca802926676e613b077938f1106cc16e77ddd77af64ce92dcc8.my.png)

1. agent flow ကို configure ပြုလုပ်ပြီးပါပြီ။ **Save draft** ကို ရွေးချယ်၍ agent flow ကို save လုပ်ပါ။ save ပြုလုပ်ပြီး message တစ်ခု ပေါ်လာမည်။

       ![Save draft](../../../../../translated_images/3.2_42_SaveDraft.1bb26eec40faf5d2c244d93f869344915e90423623e07e02cac2c1f8c73d1a4a.my.png)

1. agent flow ကို publish ပြုလုပ်ရန်မတိုင်မီ agent flow ၏ အသေးစိတ်ကို update ပြုလုပ်ရန်လိုအပ်သည်။ **Overview** tab ကို ရွေးချယ်ပြီး **Edit** ကို ရွေးပါ။

      flow name field တွင် အောက်ပါအတိုင်း ထည့်သွင်းပါ။

       ```text
       Notify Teams Applicant channel
       ```      

      ထို့နောက် **Refresh** icon ကို ရွေးချယ်၍ AI ကို အသုံးပြု၍ agent flow ၏ ဖော်ပြချက်ကို update ပြုလုပ်ပါ။

      ထို့နောက် **Save** ကို ရွေးချယ်၍ agent flow ၏ အသေးစိတ်ကို save ပြုလုပ်ပါ။

       ![Edit and save details](../../../../../translated_images/3.2_43_EditDetails.f0c9b53a9c1b29e4aa3c34774680559ae9173f77b3a37817bab2296b77ffcca7.my.png)

1. **Designer** tab သို့ ပြန်သွားပြီး **Publish** ကို ရွေးချယ်၍ agent flow ကို publish ပြုလုပ်ပါ။ save ပြုလုပ်ပြီး message တစ်ခု ပေါ်လာမည်။

       ![Publish agent flow](../../../../../translated_images/3.2_44_PublishAgentFlow.3014e6de5e53aa5fc2021bf6e11b901c4990b4fbb4d4cee33cc6d5b6cc641ed8.my.png)

1. agent flow ကို **Application Intake Agent** တွင် tool အဖြစ် ထည့်သွင်းရန်လိုအပ်သည်။ **Hiring Agent** သို့ ပြန်သွားပြီး **Agents** tab ကို ရွေးချယ်ပါ၊ ထို့နောက် **Application Intake Agent** ကို ရွေးပါ။

       ![Select Application Intake Agent](../../../../../translated_images/3.2_45_ApplicationIntakeAgent.0446b1762d0f499e880e7984f59669639193566f72539cd4fba5c62cd1fe8726.my.png)

1. agent ၏ **Details** အပိုင်းတွင် **Description** field ကို update ပြုလုပ်ပါ။ အောက်ပါကို copy လုပ်ပြီး ဖော်ပြချက် text ၏ အဆုံးတွင် paste လုပ်ပါ။

       ```text
       and also notify the Teams Applicant channel
       ```

       ![Update Agent Description](../../../../../translated_images/3.2_46_UpdateAgentDescription.56344699cd3cc5e417e8f95362ed2288d0c0391f33bd98872e7e008a545175f0.my.png)

1. နောက်တစ်ဆင့်တွင် agent flow ကို tool အဖြစ် ထည့်သွင်းပါမည်။ အောက်သို့ ဆွဲချပြီး **+ Add** ကို ရွေးပါ။

       ![Select Add](../../../../../translated_images/3.2_47_AddTools.c7557e272bd731129dffe9edebba3b04170d27806aaa14fffbe3d66b7b61808b.my.png)

1. အရင်က ဖန်တီးထားသော agent flow ကို ရွေးပါ၊ **Notify Teams Applicant Channel**။

       ![Select agent flow](../../../../../translated_images/3.2_48_NotifyTeamsApplicantChannelAgentFlow.5985f570786edef4eac93455f7a07978c0daf54e1371660bfd56a4c16b6aaf79.my.png)

1. ထို့နောက် **Add and configure** ကို ရွေးပါ။

       ![Select Add and configure](../../../../../translated_images/3.2_49_AddAndConfigure.c2d6cccfa9e4bb23ff58b615ad16d0b3ade4ef867b73b9196a45df6990d8072f.my.png)

1. agent flow ၏ **Inputs** အပိုင်းတွင် အရင်က agent flow တွင် configure ပြုလုပ်ထားသော inputs သုံးခုကို တွေ့ရမည်။ ပုံမှန်အားဖြင့် **Fill using** configuration သည် **Dynamically fill with AI** အဖြစ် သတ်မှတ်ထားသည်။ ဤ setting ကို အတိုင်းထားမည်ဖြစ်သည်။ event trigger (နောက်ဆုံး action တွင် **Sends a prompt to the specified copilot for processing** - ဤသည်မှာ **Lab 3.1 - Automate uploading resumes to Dataverse received by email** ၏ အဆင့် 38-44 ဖြစ်သည်) မှ AI သည် parameter values များကို extract ပြုလုပ်မည်။

       ![Tool agent flow inputs](../../../../../translated_images/3.2_50_Inputs.9fbb57b83b533d5a60f957505bb1e5430886ec9e6c70c10ed1c641d6b33fcc21.my.png)

1. tool ကို **Application Intake Agent** တွင် ထည့်သွင်းပြီးနောက် agent ၏ instructions ကို update ပြုလုပ်ရန်လိုအပ်သည်။ **back arrow** icon ကို ရွေးချယ်၍ agents စာရင်းသို့ ပြန်သွားပါ။

       ![Select back arrow icon](../../../../../translated_images/3.2_51_SelectBack.6a9a55176d931895777822d3f9276d5d12ffe379a8860dd521e1c895e8188bba.my.png)

1. **Hiring Agent** ၏ **Agents** tab တွင် **Application Intake Agent** ကို ရွေးပါ။

       ![Select Application Intake Agent](../../../../../translated_images/3.2_52_SelectApplicationIntakeAgent.039140313422e833389fd134b3a70a0eed11ba175ede5dbdc4abcce6004c7d2d.my.png)

1. **Instructions** field တွင် `2.Post-Upload` instructions အပြီးတွင် အတန်းအသစ်ထည့်ပါ။ အောက်ပါ instructions ကို copy လုပ်ပြီး paste လုပ်ပါ။

       ```text
       Process for Resume Upload via Email
       1. When you receive a message, **Send [ResumeId (text)] = "1680265f-5793-f011-b41b-7c1e525be9f7" and [ResumeTitle (text_1)] = "TAYLOR TESTPERSON (FICTITIOUS).pdf" and [ResumeNumber (text_2)]= "R01026" to the Tool "Notify Teams Applicant channel"** in the child agent "Application Intake Agent", call [AGENT FLOW PLACEHOLDER]
       ```

       ![Update instructions of Application Intake Agent](../../../../../translated_images/3.2_53_PasteCopiedInstructions.f24ed715e907cf023449a54b894354ca1252b198e9be694eec2875f7f647f9c2.my.png)

1. `[AGENT FLOW PLACEHOLDER` text ကို highlight လုပ်ပါ။

       ![Highlight placeholder](../../../../../translated_images/3.2_54_HighlightPlaceholder.6c3fcac3c8f4fb6e5cce2dbd6b6548b84652d009e20fa4a01183a9a1b42b24fb.my.png)

1. forward slash character `/` ကို ထည့်သွင်းပြီး **Notify Teams Applicant Channel** tool ကို ရွေးပါ။

       ![Select Notify Teams Applicant Channel tool](../../../../../translated_images/3.2_55_NotifyTeamsApplicatnChannelTool.2e3dd1e9ee9b2dfe10e1f2feb7e3b74b08856ce3afb16dafae1f2c4b73da904f.my.png)
1. အေးဂျင့်ဖလိုးကို **Application Intake Agent** မှ အညွှန်းများအတိုင်း အကောင်အထည်ဖော်မည်ဖြစ်ပြီး၊ အဖြစ်အပျက်ကို အစပြုသောအချိန်တွင် **Sends a prompt to the specified copilot for processing** လုပ်ဆောင်မှုပြီးဆုံးပြီးနောက် parameter values ပါဝင်သော prompt ကို အေးဂျင့်ထံပြန်ပို့ပါမည်။

      **Save** ကိုရွေးချယ်ပြီး **Application Intake Agent** အတွက် အညွှန်းများကို သိမ်းဆည်းပါ။

       ![Select Save](../../../../../translated_images/3.2_56_Save.6abb0131f96b20d3753b5990313eaea6a237bef2bf0e2103a2ee5ba570fd7c04.my.png)

1. အေးဂျင့်ကို သိမ်းဆည်းပြီးနောက် အညွှန်းများကို အပ်ဒိတ်လုပ်ပါမည်။

       ![Instructions updated](../../../../../translated_images/3.2_57_InstructionsUpdated.5bfbfe2ca1da16284358a9917246bd8676cd6c095839ed1c69361d992cacd2b3.my.png)

1. **Hiring Agent** ကို **Publish** လုပ်ရန်လိုအပ်ပါသည်။ အပေါ်ယံညာဘက်ရှိ **Publish** ကိုရွေးချယ်ပြီး _Publish this agent modal_ တွင် **Publish** ကိုရွေးချယ်ပါ။

       ![Publish Hiring Agent](../../../../../translated_images/3.2_58_PublishAgent.e7ec81c81b735de0cd11516aa944c759ea510e2b0bc9acf9f00d42d788896991.my.png)

1. Publish လုပ်ပြီးနောက် အေးဂျင့် Publish လုပ်ပြီးကြောင်း အတည်ပြုချက်မက်ဆေ့ချ်တစ်ခု ပေါ်လာပါမည်။

       ![Confirmation message](../../../../../translated_images/3.2_59_AgentPublished.d15e01232544cf08943260dfbf61c92339dbd187620349e7c5a43add4796ed12.my.png)

အေးဂျင့်ကို စမ်းသပ်နိုင်ပါပြီ!

### Lab 3.3 - အဖြစ်အပျက်ကို စမ်းသပ်ခြင်း

1. အဖြစ်အပျက်ကို အကောင်အထည်ဖော်ရန် Resume pdf ဖိုင်ပါဝင်သော အီးမေးလ်တစ်ခု ပို့ရန်လိုအပ်ပါသည်။ Outlook တွင် အီးမေးလ်မက်ဆေ့ချ်အသစ်တစ်ခုရေးသားပါ။

     | အီးမေးလ်အစိတ်အပိုင်း | အသေးစိတ် |
     |----------|------------|
     | **To recipient** | သင်၏လက်မှတ်ထိုးထားသော user account ကို အသုံးပြုပါ |
     | **File attachment** | [TAYLOR TESTPERSON (FICTITIOUS)](../../../../../docs/operative-preview/test-data/resumes/TAYLOR%20TESTPERSON%20(FICTITIOUS).pdf) ဖိုင်ကို upload လုပ်ပါ |
     | **Body** | အီးမေးလ် body အဖြစ် အောက်ပါစာသားကို ကူးယူကပ်ပါ  |

       ```text
       Hiring Manager ခင်ဗျား/ရှင်မ,

       Senior Power Platform Engineer ရာထူးအတွက် ကျွန်ုပ်၏စိတ်ဝင်စားမှုကို ဖော်ပြရန် ရေးသားပါသည်။ Microsoft cloud platforms တွင် လုံခြုံပြီး scalable ဖြစ်သော solution များကို ၉ နှစ်ကျော်အတွေ့အကြုံရှိပြီး သင့်အဖွဲ့အတွက် ထိရောက်စွာ အထောက်အကူဖြစ်စေမည်ဟု ယုံကြည်ပါသည်။

       Lead Power Platform Engineer အဖြစ် ကျွန်ုပ်၏နောက်ဆုံးရာထူးတွင် automated resume-intake pipeline တစ်ခု ဖွံ့ဖြိုးခဲ့ပြီး လက်ဖြင့်လုပ်ဆောင်မှုများကို လျှော့ချကာ ရှာဖွေရန်အဆင်ပြေမှုကို တိုးတက်စေခဲ့ပါသည်။ HR case management applications များကို တင်ပို့ခဲ့ပြီး solution-aware flows များကို မိတ်ဆက်ကာ deployment lead times ကို တိုးတက်စေခဲ့ပါသည်။ ကျွန်ုပ်၏ကျွမ်းကျင်မှုများတွင် Power Apps, Power Automate, Power Pages, Dataverse နှင့် Microsoft 365 services များအပြင် Graph/REST APIs နှင့် Azure Functions တို့နှင့် ပေါင်းစည်းမှုများပါဝင်ပါသည်။

       ယခင်က Teams approvals များကို adaptive cards ဖြင့် ဖွံ့ဖြိုးခဲ့ပြီး အတည်ပြုချိန်ကို တစ်နေ့အတွင်းဖြစ်စေခဲ့ပါသည်။ error-handling frameworks များကို ဖန်တီးခဲ့ပြီး legacy workflows များကို Power Automate သို့ ပြောင်းလဲခဲ့ပါသည်။ self-service portals များကို ဖန်တီးခဲ့ပြီး ရာနှင့်ချီသော ဝန်ထမ်းများ အသုံးပြုခဲ့ပါသည်။

       ကျွန်ုပ်သည် Computer Science ဘွဲ့ရရှိထားပြီး Power Platform Developer (PL-400) နှင့် Solution Architect (PL-600) အဖြစ်လက်မှတ်ရရှိထားပါသည်။ mentoring ကို စိတ်ဝင်စားပြီး ဒေသခံ maker groups များနှင့် volunteer လုပ်ခဲ့ပါသည်။

       ကျေးဇူးပြု၍ ကျွန်ုပ်၏ CV ကို သင့်အတွေးအခေါ်အတွက် ထည့်သွင်းပါ။ ကျွန်ုပ်၏ကျွမ်းကျင်မှုများနှင့် သင့်လိုအပ်ချက်များကို အညီအမျှဖြစ်စေရန် ဆွေးနွေးရန် အခွင့်အရေးကို ကြိုဆိုပါသည်။

       သင့်အချိန်နှင့် အတွေးအခေါ်အတွက် ကျေးဇူးတင်ပါသည်။

       အထူးဂုဏ်ပြုလျက်,
       Taylor Testperson
       ```

       **Send** ကိုနှိပ်ပြီး အီးမေးလ်ကို ပို့ပါ။

       ![Compose email with PDF file attachment](../../../../../translated_images/3.3_01_ComposeEmailWithAttachment.eccba1bbcc276b4373277b193a66d8818b712c6ab9468ee12902545522b670f7.my.png)

1. Power Automate maker portal တွင် အဖြစ်အပျက်ကို အကောင်အထည်ဖော်သော flow အတွက် **Refresh** icon ကိုရွေးချယ်ပြီး ပို့ထားသော အီးမေးလ်အတွက် အောင်မြင်သော flow run ကို ကြည့်ရှုပါ။

       ![Select refresh icon to view flow run](../../../../../translated_images/3.3_02_FlowRun.0e99756ebc5fba371dc72719b0619736626934461e58db2dc153535cbabcc1e8.my.png)

1. Copilot Studio တွင် **Hiring Agent** အတွက် **Activity** tab ကိုရွေးချယ်ပါ။

       ![Select Activity tab](../../../../../translated_images/3.3_03_SelectActivity.11d78735a8a2a1f64443d285deb47f2bacc5bd53ded039791215f9465dbc3f76.my.png)

1. **Activity** tab ကို load လုပ်ပြီး **Hiring Agent** ၏ activity များအားလုံးကို ပြသပါမည်။ **Automated** ဟု အမည်ရှိပြီး **Complete** ဟု status ရှိသော activity တစ်ခုရှိပါမည်။ ဤ activity သည် အဖြစ်အပျက်ကို အကောင်အထည်ဖော်ခြင်းနှင့် အေးဂျင့်ဖလိုးကို ဖော်ပြသည်။

       ![Activity completed](../../../../../translated_images/3.3_04_StatusComplete.dbe14ffb9414b0f4d869841426c4ca595d7a664bf13f4b5e2e29a4e251b9064c.my.png)

1. activity ကိုရွေးချယ်ပြီး activity map တွင် အဖြစ်အပျက်ကိုရွေးချယ်ပါ။ ညာဘက် panel တွင် prompt ၏ input parameters တွင် **Dataverse** row မှ `Resume Id`, `Resume Title` နှင့် `Resume Number` parameter values ပါဝင်သည်ကို သတိပြုပါ။ ဤအချက်များသည် **Lab 3.1 - Automate uploading resumes to Dataverse received by email** ၏ အဆင့် 18 - 27 တွင် dynamic content values များကို configure လုပ်ထားသောအချက်များဖြစ်သည်။

       ![Event trigger](../../../../../translated_images/3.3_05_EventTrigger.cbd73cd43a79e88e782d1e47ac8ddacdbe30d582a4da61a31010f44a9dacdd12.my.png)

1. **Hiring Hub** model-driven app သို့ ပြန်သွားပြီး **Resumes system view** တွင် **Refresh** ကိုရွေးချယ်ပါ။ အီးမေးလ်ဖြင့် ပို့ထားသော resume အတွက် အသစ်ဖန်တီးထားသော row ကို အဖြစ်အပျက်မှဖန်တီးထားသောအတိုင်း ပြသပါမည်။

       ![Resume row created](../../../../../translated_images/3.3_06_ResumeRowCreated.9ab850d8d7c066aad8531409b00a4de5f214b4d8d209d39fa0d493d5c55e041d.my.png)

1. Copilot Studio သို့ ပြန်သွားပြီး **Application Intake Agent** ၏ activity map တွင် **Notify Teams Applicant Channel** အေးဂျင့်ဖလိုးကိုရွေးချယ်ပါ။ ညာဘက် panel တွင် input များတွင် Dataverse row မှ value များပါဝင်သည်ကို သတိပြုပါ။ ဤအချက်များသည် အဖြစ်အပျက်၏ နောက်ဆုံးလုပ်ဆောင်မှု **Sends a prompt to the specified copilot for processing** မှ Dataverse row အသစ်မှ parameter values ပါဝင်သော prompt ကို ပို့ထားသောအချက်များဖြစ်သည်။ ဤနည်းဖြင့် အဖြစ်အပျက်များမှ parameter values များကို အေးဂျင့်ဖလိုးများသို့ ပို့နိုင်ပါသည်။

       ![Select agent flow](../../../../../translated_images/3.3_07_NotifyTeamsApplicantChannel.9b6c4654197efca9c88dde72cfb38812038ef5f6bdce8c309046c02643092bb6.my.png)

1. နောက်ဆုံးတွင် **Microsoft Teams** ၏ channel တွင် adaptive card ကို ကြည့်ရှုပါ။ channel တွင် Dataverse တွင် အသစ်ဖန်တီးထားသော Resume row အကြောင်းကို ပြသသော adaptive card ကို တွေ့ပါမည်။ adaptive card ၏အစတွင် hyperlink ကို hover လုပ်ပါ။ URL သည် JSON (steps 15 - 19 of **Lab 3.2 - Notify a Teams channel using an adaptive card**) payload တွင် configure လုပ်ထားသော Resumes system view URL ဖြစ်သည်ကို သတိပြုပါ။

       ![Adaptive Card Resume Table system view URL](../../../../../translated_images/3.3_08_AdaptiveCardResumeTableURL.5a59821d60c8698e5c9e4746806b975bbdf3c4400dc0bb02a53f350bdea569e9.my.png)

1. hyperlink ကိုရွေးချယ်ပြီး **Hiring Hub** model-driven app ၏ browser တွင် Resumes system view သို့ သွားပါ။

       ![Resume system view in Hiring Hub model-driven app](../../../../../translated_images/3.3_09_ResumeTableSystemView.81f52ab85aadda7d9131ced31d024fb4b411ccf600dd230d9d7e931c476e271c.my.png)

1. Microsoft Teams ၏ channel တွင် adaptive card သို့ ပြန်သွားပါ။ ဤအကြိမ်တွင် **View Resume** ကို hover လုပ်ပါ။ ဤသည်မှာ adaptive card ၏ `Action.OpenURL` လုပ်ဆောင်မှုဖြစ်သည်။ URL သည် JSON (steps 30 - 36 of **Lab 3.2 - Notify a Teams channel using an adaptive card**) payload တွင် configure လုပ်ထားသော Resumes row URL ဖြစ်သည်ကို သတိပြုပါ။

       ![Adaptive Card Resume row URL](../../../../../translated_images/3.3_10_AdaptiveCardResumeRowURL.2063a075c2d4adec27dfcc2ea4c01a385d791e0c4fc127caba912bde14bf77d6.my.png)

1. action ကိုရွေးချယ်ပြီး **Hiring Hub** model-driven app ၏ browser တွင် Resume row form သို့ သွားပါ။

       ![Resume row in Hiring Hub model-driven app](../../../../../translated_images/3.3_11_ResumeRow.6f051ed512d396712a04ee98319d6643516e0bbfbf8a9de07d3df7d264563b9c.my.png)

## ✅ Mission Complete

ဂုဏ်ယူပါတယ်! 👏🏻 အလွန်ကောင်းမွန်သောအလုပ်ပါ၊ Operative။

✅ အဖြစ်အပျက်ကို အကောင်အထည်ဖော်ခြင်း - Dataverse parameter values များကို အေးဂျင့်ဖလိုးသို့ ပို့သော အဖြစ်အပျက်ကို ဖန်တီးခဲ့ပါသည်။  
✅ အေးဂျင့်ဖလိုးတစ်ခုကို ဖန်တီးခဲ့ပါသည် - Dataverse parameter values များကို အသုံးပြုကာ Microsoft Teams channel တွင် adaptive card ကို post လုပ်ပြီး HR recruitment team ကို အသိပေးခဲ့ပါသည်။  
✅ child agent အညွှန်းများကို အပ်ဒိတ်လုပ်ခဲ့ပါသည် - အဖြစ်အပျက်ပြီးဆုံးပြီးနောက် ဖလိုးကို အကောင်အထည်ဖော်ရန်။

ဤသည်သည် **Hiring Agent** ကို အီးမေးလ် attachment အဖြစ် ရရှိသော resumes များကို အလိုအလျောက်လုပ်ဆောင်ပြီး HR recruitment team ကို လက်ဖြင့် ပြန်လည်သုံးသပ်ရန် အသိပေးနိုင်စေပါသည်။

ဤသည်သည် **Lab 03 - Automating candidate application emails** ၏ အဆုံးဖြစ်ပြီး၊ အောက်ပါလင့်ခ်ကိုရွေးချယ်ကာ နောက်ဆုံးသင်ခန်းစာသို့ ရွှေ့ပါ။

⏭️ [Move to **Authoring Agent Instructions** lesson](../04-agent-instructions/README.md)

## 📚 Tactical Resources

📖 [Make your agent autonomous in Copilot Studio](https://learn.microsoft.com/training/modules/autonomous-agents-online-workshop/?WT.mc_id=power-188561-ebenitez)  

📖 [Add an event trigger](https://learn.microsoft.com/microsoft-copilot-studio/authoring-trigger-event?WT.mc_id=power-188561-ebenitez)  

📖 [Use agent flows with your agent](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-188561-ebenitez)  

📖 [Power Automate triggers introduction](https://learn.microsoft.com/power-automate/triggers-introduction?WT.mc_id=power-188561-ebenitez)  

📖 [Using Power Automate flows with agents](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create?WT.mc_id=power-188561-ebenitez)  

📖 [Data loss prevention for Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention?WT.mc_id=power-188561-ebenitez)  

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှန်ကန်မှုအတွက် ကြိုးစားနေသော်လည်း အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များကို အသုံးပြုရန် အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအမှားများ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။