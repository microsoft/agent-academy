<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4fb913dfc3bbc71506dd3602c4b8e6ed",
  "translation_date": "2025-10-21T17:41:14+00:00",
  "source_file": "docs/operative-preview/02-multi-agent/README.md",
  "language_code": "my"
}
-->
# 🚨 မစ်ရှင် 02: ဆက်သွယ်ထားသော အေးဂျင့်များ

--8<-- "disclaimer.md"

## 🕵️‍♂️ ကုဒ်နာမည်: `OPERATION SYMPHONY`

> **⏱️ လုပ်ဆောင်ချိန်:** `~45 မိနစ်`

## 🎯 မစ်ရှင်အကျဉ်း

အေးဂျင့်၊ ပြန်လာပါ။ မစ်ရှင် 01 မှာ သင့်ရဲ့ အဓိက အလုပ်ခန့်အေးဂျင့်ကို တည်ဆောက်ပြီးသားဖြစ်ပါတယ် - အလုပ်ခန့်လုပ်ငန်းစဉ်များကို စီမံခန့်ခွဲရန် အခြေခံအုတ်မြစ်တစ်ခု။ ဒါပေမဲ့ အေးဂျင့်တစ်ယောက်တည်းနဲ့ အားလုံးကို မလုပ်နိုင်ပါဘူး။

သင့်တာဝန်မှာ **Operation Symphony** ကို လက်ခံဖို့ဖြစ်ပြီး သင့်ရဲ့ တစ်ယောက်တည်းသော အေးဂျင့်ကို **multi-agent system** အဖြစ် ပြောင်းလဲဖို့ဖြစ်ပါတယ်။ အဓိက အေးဂျင့်အောက်မှာ အထူးပြုအေးဂျင့်များကို ပေါင်းစပ်ပြီး အလုပ်ခန့်လုပ်ငန်းစဉ်များကို စီမံခန့်ခွဲပါမယ်။ 

Symphony Orchestra တစ်ခုလိုပဲ တစ်ဦးချင်းစီက သူ့အပိုင်းကို သာလွန်စွာ ဆောင်ရွက်သလို သင့်ရဲ့ Hiring Agent အောက်မှာ Application Intake Agent နဲ့ Interview Prep Agent ကို ထည့်သွင်းပါမယ်။ အေးဂျင့်တွေဟာ သင့်ရဲ့ အဓိက orchestrator အောက်မှာ အဆင်ပြေစွာ ပေါင်းစပ်လုပ်ဆောင်ပါမယ်။

## 🔎 ရည်မှန်းချက်များ

ဒီမစ်ရှင်မှာ သင်လေ့လာရမှာ:

1. **child agents** နဲ့ **connected agents** ကို ဘယ်အချိန်မှာ အသုံးပြုရမလဲ
1. **multi-agent architectures** ကို အဆင့်မြှင့်တင်ဖန်တီးနည်း  
1. အထူးပြုလုပ်ငန်းများအတွက် **child agents** ဖန်တီးခြင်း
1. အေးဂျင့်များအကြား **ဆက်သွယ်မှုပုံစံများ** တည်ဆောက်ခြင်း
1. Application Intake Agent နဲ့ Interview Prep Agent တည်ဆောက်ခြင်း

## 🧠 ဆက်သွယ်ထားသော အေးဂျင့်များက ဘာလဲ?

Copilot Studio မှာ သင်တစ်ယောက်တည်းသော အေးဂျင့်တစ်ခုကို ဖန်တီးရုံမကဘဲ **multi-agent systems** - အထူးပြုအေးဂျင့်များကို ပေါင်းစပ်ပြီး ရှုပ်ထွေးသော workflows ကို စီမံခန့်ခွဲနိုင်ပါတယ်။

### multi-agent systems အရေးကြီးတဲ့အကြောင်း

- **Scalability:** အေးဂျင့်တစ်ခုချင်းစီကို သီးခြားဖွံ့ဖြိုး၊ စမ်းသပ်၊ ထိန်းသိမ်းနိုင်ပါတယ်။  
- **Specialization:** အေးဂျင့်တစ်ခုချင်းစီက သူ့အပိုင်းကို အထူးပြုလုပ်နိုင်ပါတယ်။  
- **Flexibility:** အေးဂျင့်တွေကို ပေါင်းစပ်အသုံးပြုနိုင်ပြီး အဆင့်မြှင့်တင်ဖို့လွယ်ကူပါတယ်။  
- **Maintainability:** အေးဂျင့်တစ်ခုမှာ ပြောင်းလဲမှုတွေက အခြားအေးဂျင့်တွေကို မထိခိုက်စေဘဲ update လုပ်ဖို့ လွယ်ကူပါတယ်။

### အလုပ်ခန့်လုပ်ငန်းစဉ်ကို ဥပမာအနေနဲ့

အလုပ်ခန့်လုပ်ငန်းစဉ်မှာ အေးဂျင့်တွေက အောက်ပါတာဝန်တွေကို လုပ်ဆောင်နိုင်ပါတယ်:

- **Resume intake** မှာ စာရွက်စာတမ်း parsing နဲ့ data extraction လုပ်ငန်းစွမ်းရည်လိုအပ်ပါတယ်
- **Scoring** မှာ အလုပ်လိုအပ်ချက်နဲ့ ကိုက်ညီမှုအပေါ် အလုပ်လျှောက်လွှာတွေကို အကဲဖြတ်ရပါတယ်
- **Interview preparation** မှာ အလုပ်လျှောက်သူနဲ့ အလုပ်လိုအပ်ချက်ကို နက်နက်နဲနဲ reasoning လုပ်ရပါတယ်  
- **Candidate communication** မှာ စိတ်ထိခိုက်မှုမရှိတဲ့ ဆက်သွယ်မှုစွမ်းရည်လိုအပ်ပါတယ်

## 🔗 Child agents နဲ့ connected agents: အဓိက ကွာခြားချက်

Copilot Studio မှာ multi-agent systems ဖန်တီးဖို့ နည်းလမ်းနှစ်ခုရှိပြီး သုံးစွဲမှုအပေါ်မူတည်ပြီး ကွဲပြားပါတယ်:

### ↘️ Child agents

Child agents ဟာ **lightweight specialists** ဖြစ်ပြီး အဓိကအေးဂျင့်အတွင်းမှာ ရှိပါတယ်။

#### Key technical details

- Child agents ဟာ parent agent အတွင်းမှာ ရှိပြီး configuration page တစ်ခုတည်းရှိပါတယ်။
- Tools နဲ့ Knowledge ဟာ **parent** agent မှာ သိမ်းဆည်းထားပြီး "Available to" child agent အဖြစ် configure လုပ်ထားပါတယ်။
- Child agents ဟာ parent agent ရဲ့ **topics** တွေကို မျှဝေပါတယ်။
- Child agents ဟာ **သီးခြား publish လုပ်ဖို့ မလိုအပ်ပါဘူး** - parent agent အတွင်းမှာ အလိုအလျောက် ရရှိနိုင်ပါတယ်။

#### Child agents ကို အသုံးပြုသင့်တဲ့အခါ

- တစ်ခုတည်းသောအဖွဲ့က အားလုံးကို စီမံခန့်ခွဲတဲ့အခါ
- Tools နဲ့ knowledge ကို sub-agents အဖြစ် logic အရ စီစဉ်ချင်တဲ့အခါ
- သီးခြား authentication သို့မဟုတ် deployment မလိုအပ်တဲ့အခါ
- Agents တွေကို သီးခြား publish လုပ်ဖို့ မလိုအပ်တဲ့အခါ

**ဥပမာ:** IT helpdesk agent တစ်ခုမှာ:

- Password reset procedures
- Hardware troubleshooting  
- Software installation guides

### 🔀 Connected agents

Connected agents ဟာ **အပြည့်အစုံသော သီးခြားအေးဂျင့်များ** ဖြစ်ပြီး အဓိကအေးဂျင့်နဲ့ ပေါင်းစပ်လုပ်ဆောင်နိုင်ပါတယ်။

#### Key technical details

- Connected agents ဟာ **သီးခြား topics** နဲ့ conversation flows ရှိပါတယ်။
- Connected agents ဟာ **publish လုပ်ဖို့လိုအပ်ပါတယ်**။
- Testing အတွင်းမှာ connected agent ရဲ့ ပြောင်းလဲမှုတွေကို publish လုပ်ပြီးမှ calling agent မှာ အသုံးပြုနိုင်ပါတယ်။

#### Connected agents ကို အသုံးပြုသင့်တဲ့အခါ

- အဖွဲ့အစည်းများစွာက သီးခြား agents တွေကို ဖွံ့ဖြိုးစီမံခန့်ခွဲတဲ့အခါ
- Agents တွေကို သီးခြား settings, authentication, deployment channels လိုအပ်တဲ့အခါ
- Agents တွေကို သီးခြား publish နဲ့ maintenance လုပ်ဖို့လိုအပ်တဲ့အခါ

**ဥပမာ:** Customer service system တစ်ခုမှာ:

- Finance team မှာ စီမံခန့်ခွဲတဲ့ billing agent
- Product team မှာ စီမံခန့်ခွဲတဲ့ technical support agent
- Operations team မှာ စီမံခန့်ခွဲတဲ့ returns agent

!!! tip "အကြံပြုချက်"
    သင့်ရဲ့ အဓိကအေးဂျင့်မှာ external agents တွေကို connect လုပ်ပြီး သင့်ရဲ့ internal tasks အတွက် child agents တွေကိုလည်း ရှိနိုင်ပါတယ်။

## 🎯 Multi-agent architecture patterns

Multi-agent systems တည်ဆောက်တဲ့အခါ အေးဂျင့်တွေ ဘယ်လိုပုံစံနဲ့ ဆက်သွယ်မလဲဆိုတာအပေါ် မူတည်ပြီး pattern အမျိုးမျိုးရှိပါတယ်:

| Pattern              | ဖော်ပြချက်                                                                 | အကောင်းဆုံးအသုံးပြုမှု                                                      |
|----------------------|-----------------------------------------------------------------------------|---------------------------------------------------------------|
| **Hub and Spoke**    | အဓိက orchestrator agent က အထူးပြုအေးဂျင့်များကို စီမံခန့်ခွဲပါတယ်။ | ရှုပ်ထွေးတဲ့ workflows တွေမှာ အေးဂျင့်တစ်ခုက အထူးပြုတာဝန်တွေကို စီမံခန့်ခွဲတဲ့အခါ |
| **Pipeline**         | အေးဂျင့်တွေ sequentially အလုပ်ကို လုပ်ဆောင်ပြီး နောက်တစ်ခုဆီ ပေးပို့ပါတယ်။ | Linear processes တွေမှာ (application processing → screening → interview → decision) |
| **Collaborative**    | အေးဂျင့်တွေက တစ်ချိန်တည်းမှာ အလုပ်တစ်ခုကို အမျိုးမျိုးသောအမြင်နဲ့ လုပ်ဆောင်ပါတယ်။ | ရှုပ်ထွေးတဲ့ analysis တွေမှာ |

!!! tip "အကြံပြုချက်"
    သင့်ရဲ့ system မှာ pattern နှစ်ခု သို့မဟုတ် အများကြီးကို ပေါင်းစပ်အသုံးပြုနိုင်ပါတယ်။

## 💬 အေးဂျင့်များအကြား ဆက်သွယ်မှုနဲ့ context sharing

အေးဂျင့်တွေ ပေါင်းစပ်လုပ်ဆောင်တဲ့အခါ သတင်းအချက်အလက်တွေကို ထိရောက်စွာ မျှဝေဖို့ လိုအပ်ပါတယ်။ Copilot Studio မှာ ဒီလိုလုပ်ဆောင်ပုံက:

### Conversation history

အဓိကအေးဂျင့်က child သို့မဟုတ် connected agent ကို ခေါ်တဲ့အခါ **conversation history** ကို ပေးပို့နိုင်ပါတယ်။

### Explicit instructions

အဓိကအေးဂျင့်က **specific instructions** ပေးနိုင်ပါတယ်။ ဥပမာ: "ဒီ resume ကို process လုပ်ပြီး Senior Developer role အတွက် သူ့ရဲ့ skills ကို summary လုပ်ပါ။"

### Return values

အေးဂျင့်တွေက structured information ကို ပြန်ပေးနိုင်ပြီး အဓိကအေးဂျင့်က အဲ့ဒီအချက်အလက်ကို နောက်ထပ်အဆင့်တွေမှာ အသုံးပြုနိုင်ပါတယ်။

### Dataverse integration

ရှုပ်ထွေးတဲ့ scenarios တွေမှာ Dataverse သို့မဟုတ် အခြား data stores တွေကို အသုံးပြုပြီး context sharing လုပ်နိုင်ပါတယ်။

## ↘️Child agent: Application Intake Agent

အေးဂျင့်စနစ်ကို တည်ဆောက်ဖို့ Application Intake Agent ကို စတင်ဖန်တီးပါမယ်။

```mermaid
---
config:
  layout: elk
  look: neo
---
flowchart TB
 subgraph People["People"]
    direction TB
        HiringManager["Hiring Manager"]
        Interviewers["Interviewers"]
  end
 subgraph Agents["Agents"]
    direction LR
        ApplicationIntakeAgent["Application Intake Agent<br>(Child)"]
        InterviewAgent["Interview Agent<br>(Connected)"]
        HRAgent["HR Agent"]
  end
    HiringManager -- Upload CV --> HRAgent
    HRAgent -- Upload Resume, Create Candidate, Match to Job Roles --> ApplicationIntakeAgent
    ApplicationIntakeAgent -- Create Resume, Upsert Candidate, Create Job Application --> Dataverse["Dataverse"]
    ApplicationIntakeAgent -- Store Resume file in file column --> Dataverse
    HiringManager -- Ask for summaries --> HRAgent
    Interviewers -- Request interview pack --> HRAgent
    HRAgent -- Generate interview pack and summarize data --> InterviewAgent
    InterviewAgent -- Read all Candidate, Resume, Job Roles, Evaluation Criteria Data --> Dataverse
     HiringManager:::person
     Interviewers:::person
     ApplicationIntakeAgent:::agent
     InterviewAgent:::agent
     HRAgent:::agent
     Dataverse:::data
    classDef person fill:#e6f0ff,stroke:#3b82f6,color:#0b3660
    classDef agent fill:#e8f9ef,stroke:#10b981,color:#064e3b
    classDef data  fill:#f3f4f6,stroke:#6b7280,color:#111827
```

### 🤝Application Intake Agent ရဲ့တာဝန်များ

- **Parse resume content** PDF ဖိုင်တွေကို interactive chat မှတစ်ဆင့် process လုပ်ခြင်း
- **Extract structured data** (နာမည်, skills, အတွေ့အကြုံ, ပညာရေး)
- **Match candidates to open roles** အရည်အချင်းနဲ့ cover letter အပေါ်မူတည်ပြီး
- **Store candidate information** Dataverse မှာ သိမ်းဆည်းခြင်း
- **Deduplicate applications** email address ကို အသုံးပြုပြီး record တွေကို မတူညီအောင်လုပ်ခြင်း

### ⭐Child agent ဖြစ်သင့်တဲ့အကြောင်း

Application Intake Agent ဟာ:

- စာရွက်စာတမ်း process နဲ့ data extraction အတွက် အထူးပြုထားပါတယ်
- သီးခြား publish လုပ်ဖို့ မလိုအပ်ပါဘူး  
- အလုပ်ခန့်လုပ်ငန်းစဉ်ရဲ့ အစိတ်အပိုင်းတစ်ခုအဖြစ် အဓိကအေးဂျင့်အောက်မှာ စီမံခန့်ခွဲပါတယ်

## 🔀Connected agent: Interview Prep Agent  

Interview Prep Agent ဟာ အလုပ်ခန့်လုပ်ငန်းစဉ်အတွက် interview materials ဖန်တီးဖို့ အထူးပြု connected agent ဖြစ်ပါတယ်။

### 🤝Interview Prep Agent ရဲ့တာဝန်များ

- **Create interview packs** ကုမ္ပဏီအချက်အလက်, role requirements, evaluation criteria ပါဝင်တဲ့ materials
- **Generate interview questions** role-specific နဲ့ candidate background အပေါ်မူတည်ပြီး
- **Answer general questions** အလုပ်နဲ့ applications အကြောင်း stakeholder communication အတွက်

### ⭐Connected agent ဖြစ်သင့်တဲ့အကြောင်း

Interview Prep Agent ဟာ:

- Talent acquisition team က သီးခြားအသုံးပြုနိုင်ဖို့
- Interview best practices နဲ့ evaluation criteria ကို သီးခြား knowledge base ရှိဖို့
- Hiring managers တွေက သူ့ရဲ့ behavior ကို customize လုပ်နိုင်ဖို့

## 🧪Lab 2.1: Application Intake Agent ကို ထည့်သွင်းခြင်း

### Mission ကို ပြီးမြောက်ဖို့လိုအပ်ချက်များ

သင် **အောက်ပါအနက်**:

- **Mission 01 ကို ပြီးမြောက်ထား**ပြီး Hiring Agent ကို ရှိထားဖို့ **သို့မဟုတ်**
- **Mission 02 starter solution ကို Import လုပ်ထား**ဖို့

!!! note "Solution Import နဲ့ Sample Data"
    Starter solution ကို အသုံးပြုနေပါက [Mission 01](../01-get-started/README.md) ကို ရည်ညွှန်းပြီး solution နဲ့ sample data ကို သင့် environment မှာ Import လုပ်ပါ။

### 2.1.1 Solution setup

1. Copilot Studio မှာ Tools အောက်မှာ **ellipsis (...)** ကို ရွေးပါ။
1. **Solutions** ကို ရွေးပါ။  
    ![Solutions ကို ရွေးပါ](../../../../../translated_images/2-select-solutions.42b77407cffd37d7c8b3265f2fd8adb88053b9ebda31bdf0b22cd77ec5b7bf88.my.png)
1. သင့် Operative solution ကို ရှာပြီး **ellipsis (...)** ကို ရွေးပြီး **Set preferred solution** ကို ရွေးပါ။  
    ![Preferred Solution ကို ရွေးပါ](../../../../../translated_images/2-select-preferred-solution.4542e922555429074f49c6480f6e8345f8c8818b2549fe0cd625fa58a45aede9.my.png)

### 2.1.2 Hiring Agent agent instructions ကို Configure လုပ်ပါ

1. Copilot Studio ကို **Navigate** လုပ်ပါ။ Environment Picker မှာ သင့် environment ကို ရွေးပါ။

1. Mission 01 မှာ ရှိတဲ့ **Hiring Agent** ကို ဖွင့်ပါ။

1. **Overview** tab ရဲ့ **Instructions** အပိုင်းမှာ **Edit** ကို ရွေးပြီး အောက်ပါ instructions ကို ထည့်ပါ:

    ```text
    You are the central orchestrator for the hiring process. You coordinate activities, provide summaries, and delegate work to specialized agents.
    ```

1. **Save** ကို ရွေးပါ  
    ![Hiring Agent Instructions](../../../../../translated_images/2-hiring-agent-instructions.dc1fcc2513c88722145e46794f3b3cd8b96d62482090275da62679bbfb6e352a.my.png)

1. **Settings** (အပေါ်ယာ) ကို ရွေးပါ။

1. အောက်ပါ settings တွေကို သေချာစွာ ပြုလုပ်ပါ:

    | Setting | Value |
    |---------|-------|
    | Use generative AI orchestration for your agent's responses | **Yes** |
    | Content Moderation | **Moderate** |
    | Use general knowledge | **Off** |
    | Use information from the Web | **Off** |
    | File uploads | **On** |

![Generative Orchestration](../../../../../translated_images/2-gen-orchestration.29e616a2d5721c51953fb6bde452c1ee06f40684911a6eba44e07de41c328726.my.png)
![Moderation Setting](../../../../../translated_images/2-set-medium-moderation.c6c0c1d6c427abac44441aad97892c84bbc43420b91c2c18e704980f604ec1b2.my.png)
![Knowledge and Web settings](../../../../../translated_images/2-settings-knowledge-web.716090f708dff925ebb0d259f20734da39c831bba4df4f97bd334ce701aa92a9.my.png)

### 2.1.3 Application Intake child agent ကို ထည့်ပါ

1. Hiring Agent ရဲ့ **Agents** tab ကို **Navigate** လုပ်ပါ။

1. **+ Add** ကို ရွေးပြီး **Create an agent** ကို ရွေးပါ။  
    ![Add Child Agent](../../../../../translated_images/2-add-child-agent.47e6246572a58b85236c969c69f3bae835fd5099f4d7603abeab6b1ad9ce2a70.my.png)

1. သင့်အေးဂျင့်ကို `Application Intake Agent` ဟု **Name** ပေးပါ။

1. **When will this be used?** dropdown မှ **The agent chooses** ကို ရွေးပါ။

1. **Description** ကို အောက်ပါအတိုင်း သတ်မှတ်ပါ:

    ```text
    Processes incoming resumes and stores candidates in the system
    ```

    ![Application Intake Agent Description](../../../../../translated_images/2-application-intake-agent-description.c5c0bf8ee632c04b9fb63c774f638de84cb8fa6ddf8c853cf0b651ea0e4964f0.my.png)

1. **Advanced** ကို ဖွင့်ပြီး Priority ကို `10000` အဖြစ် သတ်မှတ်ပါ။

1. **Web Search** toggle ကို **Disabled** အဖြစ် သတ်မှတ်ပါ။

1. **Save** ကို ရွေးပါ။

### 2.1.4 Resume Upload agent flow ကို Configure လုပ်ပါ

Agents တွေဟာ tools သို့မဟုတ် topics မပါဘဲ လုပ်ဆောင်မှုမရှိနိုင်ပါ။
ကျွန်တော်တို့ **Agent Flow tools** ကို Topics အစား *Upload Resume* အဆင့်မှာ အသုံးပြုနေပါတယ်၊ အကြောင်းကတော့ ဒီ multi-step backend လုပ်ငန်းစဉ်ဟာ deterministic execution နဲ့ အပြင်ပစနစ်တွေနဲ့ ပေါင်းစည်းမှုကို လိုအပ်လို့ပါ။ Topics တွေဟာ စကားဝိုင်းဆွေးနွေးမှုကို လမ်းညွှန်ဖို့အတွက် အကောင်းဆုံးဖြစ်ပေမယ့် Agent Flows တွေကတော့ ဖိုင်များကို အဆင်ပြေစွာ xử lýဖို့၊ ဒေတာအတည်ပြုမှုလုပ်ဖို့၊ database upserts (အသစ်ထည့်သွင်းခြင်း သို့မဟုတ် ရှိပြီးသားကို update လုပ်ခြင်း) ကို ယုံကြည်စိတ်ချစွာ လုပ်ဆောင်နိုင်တဲ့ structured automation ကို ပေးစွမ်းပါတယ်။

1. **Tools** အပိုင်းကို Application Intake Agent စာမျက်နှာအတွင်းမှာ ရှာပါ။
   **အရေးကြီး**: ဒါဟာ parent agent ရဲ့ Tools tab မဟုတ်ပါဘူး၊ child agent instructions အောက်ကို scroll လုပ်ပြီး ရှာနိုင်ပါတယ်။

1. **+ Add** ကို ရွေးပါ။
   ![Add Tool](../../../../../translated_images/2-add-tool.bbf282ab0b7abeb6cad0032db2dba94adf53e4f206ac976c6c7b9b339fb0e996.my.png)

1. **+ New tool** ကို ရွေးပါ။ ![Add new tool](../../../../../translated_images/2-new-tool-2.6e09c313b1af9d233ecb1c1559fb9f5d92123bfc2af6cc2df5f52e549b6b961c.my.png)

1. **Agent flow** ကို ရွေးပါ။
    Agent Flow designer ပေါ်လာပါမယ်၊ ဒီမှာ upload resume logic ကို ထည့်သွင်းမှာဖြစ်ပါတယ်။  
    ![Add Agent Flow](../../../../../translated_images/2-add-agent-flow.e5aecede97ecd79e08aae4be784a6255f354f13edb2621d3d61e961b09a70d53.my.png)

1. **When an agent calls the flow** node ကို ရွေးပြီး **+ Add** ကို ရွေးပါ၊ အောက်ပါ Parameters တွေအတွက် input ထည့်ပါ၊ name နဲ့ description နှစ်ခုလုံးကို ထည့်သွင်းပါ။

    | Type  | Name     | Description                                                                                                   |
    |-------|----------|---------------------------------------------------------------------------------------------------------------|
    | File  | Resume   | Resume PDF ဖိုင်                                                                                           |
    | Text  | Message  | context မှ cover letter ပုံစံ message ကို extract လုပ်ပါ။ Message ဟာ 2000 characters ထက်မကျော်ရပါ။         |
    | Text  | UserEmail| Resume ရဲ့ မူလ email လိပ်စာ။ Chat မှာ resume ကို upload လုပ်တဲ့ user သို့မဟုတ် email မှာရရှိတဲ့ from email address ဖြစ်ပါတယ်။ |

    ![Configure input parameters](../../../../../translated_images/2-upload-resume-trigger.1f3ca963aa3d9d723756d0636d99c1d458e197b16df93f2ac360283cf07f3fb1.my.png)

1. Trigger node အောက်မှာ **+ icon** ကို ရွေးပြီး `Dataverse` ကို ရှာပါ၊ Microsoft Dataverse အနားမှာ **See more** ကို ရွေးပြီး **Microsoft Dataverse** အပိုင်းမှာ **Add a new row** action ကို ရွေးပါ။  
    ![Add a new row node](../../../../../translated_images/2-upload-resume-add-resume.0e5bb197fef951167c9168c827e48e8d45a24c7d619452d387d980336a30d421.my.png)

1. Node ကို **Create Resume** ဟု အမည်ပေးပါ၊ **ellipsis(...)** ကို ရွေးပြီး **Rename** ကို ရွေးပါ။  
    ![Rename node](../../../../../translated_images/2-upload-resume-add-resume-rename.f8ecb680cca6fe7d98cd9590ba4d59d0fe19a742baca4c05f7558ed3fea8c44e.my.png)

1. **Table name** ကို **Resumes** သတ်မှတ်ပြီး **Show all** ကို ရွေးပါ၊ parameters အားလုံးကို ပြပါ။

1. အောက်ပါ **properties** တွေကို သတ်မှတ်ပါ:

    | Property                 | How to Set                      | Details / Expression                                         |
    | ------------------------ | ------------------------------- | ------------------------------------------------------------ |
    | **Resume Title**         | Dynamic data (thunderbolt icon) | **When an agent calls the flow** → **Resume name**    Resume name ကို မတွေ့ရင် Resume parameter ကို data type အနေနဲ့ အထက်မှာ configure လုပ်ထားပါ။ |
    | **Cover letter**         | Expression (fx icon)            | `if(greater(length(triggerBody()?['text']), 2000), substring(triggerBody()?['text'], 0, 2000), triggerBody()?['text'])` |
    | **Source Email Address** | Dynamic data (thunderbolt icon) | **When an agent calls the flow** → **UserEmail**             |
    | **Upload Date**          | Expression (fx icon)            | `utcNow()`                                                   |

    ![Edit Properties](../../../../../translated_images/2-upload-resume-add-resume-props.17586d1a9546933fbc66b13e8f36366d5122a90db2f37abb1b459dea97605270.my.png)

1. Create Resume node အောက်မှာ **+ icon** ကို ရွေးပြီး `Dataverse` ကို ရှာပါ၊ Microsoft Dataverse အနားမှာ **See more** ကို ရွေးပြီး **Upload a file or an image** action ကို ရွေးပါ။
   **အရေးကြီး**: Upload a file or an image to the selected environment action ကို ရွေးမိမနေပါစေ။

1. Node ကို **Upload Resume File** ဟု အမည်ပေးပါ၊ **ellipsis(...)** ကို ရွေးပြီး **Rename** ကို ရွေးပါ။

1. အောက်ပါ **properties** တွေကို သတ်မှတ်ပါ:

     | Property | How to Set | Details |
     |----------|------------|---------|
     | **Content name** | Dynamic data (thunderbolt icon) | When an agent calls the flow → Resume name |
     | **Table name** | Select | Resumes |
     | **Row ID** | Dynamic data (thunderbolt icon) | Create Resume → See more → Resume |
     | **Column Name** | Select | Resume PDF |
     | **Content** | Dynamic data (thunderbolt icon) | When an agent calls the flow → Resume contentBytes |

     ![Set properties](../../../../../translated_images/2-upload-resume-upload-resume-file.2250f45ffd06b6c60e91e0517966334acbd9cf6c0f98dc2f3f615431ae03be90.my.png)

1. **Respond to the agent node** ကို ရွေးပြီး **+ Add an output** ကို ရွေးပါ။

     | Property | How to Set | Details |
     |----------|------------|---------|
     | **Type** | Select | `Text` |
     | **Name** | Enter | `ResumeNumber` |
     | **Value** | Dynamic data (thunderbolt icon) | Create Resume → See More → Resume Number |
     | **Description** | Enter | `The [ResumeNumber] of the Resume created` |

     ![Set Properties](../../../../../translated_images/2-upload-resume-return.f9beac6547b4f228a4ee6c538ca64e86883ab7b5d85b08c2cd6da26e4cc2e4c8.my.png)

1. အပေါ်ယံညာဘက်မှာ **Save draft** ကို ရွေးပါ။  
     ![Save as draft](../../../../../translated_images/2-upload-resume-save-draft.6d5bed32d254815c765c19109b82113fd2520dbb5dce84288a3eb13896958d93.my.png)

1. **Overview** tab ကို ရွေးပြီး **Details** panel မှာ **Edit** ကို ရွေးပါ။

     1. **Flow name**:`Resume Upload`
     1. **Description**:`Uploads a Resume when instructed`

     ![Rename agent flow](../../../../../translated_images/2-upload-resume-rename.a26569a2def30b456ed3176c21ce889637c4d1155c56ca479521d278f25a4d5d.my.png)

1. **Designer** tab ကို ပြန်ရောက်ပြီး **Publish** ကို ရွေးပါ။  
     ![Publishing](../../../../../translated_images/2-upload-resume-publish.36f763ffc4487b32114a47a087fd5282beb7a9bb0272b3ff46046d8cd413e053.my.png)

### 2.1.5 Flow ကို agent နဲ့ ချိတ်ဆက်ပါ

အခုတော့ published flow ကို Application Intake Agent နဲ့ ချိတ်ဆက်ပါမယ်။

1. **Hiring Agent** ကို ပြန်သွားပြီး **Agents** tab ကို ရွေးပါ။ **Application Intake Agent** ကို ဖွင့်ပြီး **Tools** panel ကို ရှာပါ။  
    ![Add agent flow to agent](../../../../../translated_images/2-add-agent-flow-to-agent.3c9aadae42fc389e7c6f56ea80505cd067e45ba7e4aa03f201e2cd792e24d1fe.my.png)

1. **+ Add** ကို ရွေးပါ။

1. **Flow** filter ကို ရွေးပြီး `Resume Upload` ကို ရှာပါ။ **Resume Upload** flow ကို ရွေးပြီး **Add and configure** ကို ရွေးပါ။

1. အောက်ပါ parameters တွေကို သတ်မှတ်ပါ:

    | Parameter | Value |
    |-----------|-------|
    | **Description** | `Uploads a Resume when instructed. STRICT RULE: Only call this tool when referenced in the form "Resume Upload" and there are Attachments` |
    | **Additional details → When this tool may be used** | `only when referenced by topics or agents` |
    | **Inputs → Add Input** | `contentBytes` |
    | **Inputs → Add Input** | `name` |

    ![Resume Upload Details 1](../../../../../translated_images/2-resume-upload-tool-props-1.e3d8bf3ebdfd5aa8df23aa6ab83eec8a5def709f2c7d27fb700bef16c598da2f.my.png)

    ![Add inputs](../../../../../translated_images/2-resume-upload-tool-props-2.16fb1380a34a9fa63b7c9673c7290ff09d491e920a5ff33b439a4b1a5abfccba.my.png)

1. အောက်ပါ input properties တွေကို သတ်မှတ်ပါ:

    | Input Parameter | Property | Details |
    |-----------------|----------|---------|
    | **contentBytes** | Fill using | Custom value |
    |                  | Value (...→Formula→Insert) | `First(System.Activity.Attachments).Content` |
    | **name** | Fill using | Custom value |
    |          | Value (...→Formula→Insert) | `First(System.Activity.Attachments).Name` |
    | **Message** | Customize | Configure custom settings |
    |             | Description | `Extract a cover letter style message from the context. Be sure to never prompt the user and create at least a minimal cover letter from the available context. STRICT RULE - the message must be less than 2000 characters.` |
    |             | How many reprompts | Don't repeat |
    |             | Action if no entity found | Set variable to value |
    |             | Default entity value | Resume upload |
    | **UserEmail** | Fill using | Custom value |
    |  | Value (...→Formula→Insert) | `System.User.Email` |

    ![Set input properties](../../../../../translated_images/2-resume-upload-tool-props-3.a18364f22b2c41c3e4f8fee68dddb01ff5190d57410d9fd3fe2fbddb3d74e352.my.png)

1. **Save** ကို ရွေးပါ။

### 2.1.6 Agent instructions ကို သတ်မှတ်ပါ

1. **Application Intake Agent** ကို ပြန်သွားပြီး **Agents** tab ကို ရွေးပါ၊ **Instructions** panel ကို ရှာပါ။

1. **Instructions** field မှာ အောက်ပါ clear guidance ကို paste လုပ်ပါ။

    ```text
    You are tasked with managing incoming Resumes, Candidate information, and creating Job Applications.  
    Only use tools if the step exactly matches the defined process. Otherwise, indicate you cannot help.  
    
    Process for Resume Upload via Chat  
    1. Upload Resume  
      - Trigger only if /System.Activity.Attachments contains exactly one new resume.  
      - If more than one file, instruct the user to upload one at a time and stop.  
      - Call /Upload Resume once. Never upload more than once for the same message.  
    
    2. Post-Upload  
      - Always output the [ResumeNumber] (R#####).  
    ```

1. Instructions တွေမှာ forward slash (/) ပါရှိတဲ့နေရာမှာ / အောက်မှာရှိတဲ့ text ကို ရွေးပြီး resolved name ကို ရွေးပါ။ ဒါကို အောက်ပါအတွက် လုပ်ပါ:

    - `System.Activity.Attachments` (Variable)
    - `Upload Resume` (Tool)

    ![Edit the Instructions](../../../../../translated_images/2-application-agent-instructions.8840890a1fba22c38f04e35b13fa7ed83f72e9605d19a4eb661b51854daabd94.my.png)

1. **Save** ကို ရွေးပါ။

### 2.1.7 Application Intake Agent ကို စမ်းသပ်ပါ

အခုတော့ သင့်ရဲ့ ပထမဆုံး orchestra member အလုပ်လုပ်နေတဲ့အတိုင်း စစ်ဆေးပါမယ်။

1. [test Resumes](https://download-directory.github.io/?url=https://github.com/microsoft/agent-academy/tree/main/operative/sample-data/resumes&filename=operative_sampledata) ကို **Download** လုပ်ပါ။

1. **Test** panel ကို ဖွင့်ဖို့ **Toggle** လုပ်ပါ။

1. Test chat မှာ Resume နှစ်ခုကို **Upload** လုပ်ပြီး `Process these resumes` ဟု message ပေးပါ။

    - Agent က *Only a single resume can be uploaded at a time. Please upload one resume to proceed.* ဆိုတဲ့ message ကို ပြန်ပေးသင့်ပါတယ်။

    ![Test multiple uploads](../../../../../translated_images/2-test-multi-uploads.eb8866589463dcadb5570aba720531f0670ebfa6464d57e87415a84d9934a973.my.png)

1. **Resume တစ်ခုသာ Upload** လုပ်ပြီး `Process this resume` ဟု message ပေးပါ။

    - Agent က *The resume for Avery Example has been successfully uploaded. The resume number is R10026.* ဆိုတဲ့ message ကို ပြန်ပေးသင့်ပါတယ်။

1. **Activity map** မှာ **Application Intake Agent** က resume upload ကို handle လုပ်နေတဲ့အတိုင်း မြင်ရပါမယ်။  
    ![Upload Resume Activity Map](../../../../../translated_images/2-upload-activity-map.dd11a9d3e114f4f0a576408116d7ed89c6b144d8b4ac54a228c5247af036ecef.my.png)

1. make.powerapps.com ကို သွားပါ → အပေါ်ယံညာဘက် Environment Picker မှာ သင့် environment ကို ရွေးပါ။

1. **Apps** → Hiring Hub → ellipsis(...) menu → **Play** ကို ရွေးပါ။  
    ![Open model driven app](../../../../../translated_images/2-open-model-driven-app.550a2b764d513db4836444dd616dd87909adf54f2a930891276943b1a6e0ec77.my.png)

    မှတ်ချက်: Play button ဟာ greyed out ဖြစ်နေတယ်ဆိုရင် Mission 01 မှ solution ကို publish မလုပ်ရသေးတာဖြစ်ပါတယ်။ **Solutions** → **Publish all customizations** ကို ရွေးပါ။

1. **Resumes** ကို သွားပြီး resume ဖိုင် upload လုပ်ထားပြီး cover letter ကို သတ်မှတ်ထားတာကို စစ်ဆေးပါ။  
    ![Resume uploaded to Dataverse](../../../../../translated_images/2-resume-uploade.92a046941cd273a2597d47c593b158d158320fa5384c60907143dbe798a56644.my.png)

## 🧪Lab 2.2: Interview Prep connected agent ကို ထည့်သွင်းခြင်း

အခုတော့ interview preparation အတွက် connected agent ကို ဖန်တီးပြီး Hiring Agent နဲ့ ချိတ်ဆက်ပါမယ်။

### 2.2.1 Interview Agent ကို ဖန်တီးပါ

1. **Copilot Studio** ကို သွားပါ။ အပေါ်ယံညာဘက် Environment Picker မှာ သင့် environment ကို ရွေးထားပါ။

1. **Hiring Agent** ကို ဖွင့်ပါ။

1. Agent tab ကို သွားပြီး **+ Add an agent** ကို ရွေးပါ။

1. **Connect an existing agent** → **Copilot Studio** ကို ရွေးပါ။

1. **+ New agent** ကို ရွေးပါ။

### 2.2.2 အခြေခံ settings တွေကို configure လုပ်ပါ

1. **Configure** tab ကို ရွေးပြီး အောက်ပါ properties တွေကို ထည့်သွင်းပါ:

    - **Name**: `Interview Agent`
    - **Description**: `Assists with the interview process.`

1. Instructions:

    ```text
    You are the Interview Agent. You help interviewers and hiring managers prepare for interviews. You never contact candidates. 
    Use Knowledge to help with interview preparation. 
    
    The only valid identifiers are:
      - ResumeNumber (ppa_resumenumber)→ format R#####
      - CandidateNumber (ppa_candidatenumber)→ format C#####
      - ApplicationNumber (ppa_applicationnumber)→ format A#####
      - JobRoleNumber (ppa_jobrolenumber)→ format J#####
    
    Examples you handle
      - Give me a summary of ...
      - Help me prepare to interview candidates for the Power Platform Developer role
      - Create interview assistance for the candidates for Power Platform Developer
      - Give targeted questions for Candidate Alex Johnson focusing on the criteria for the Job Application
      
    How to work:
        You are expected to ask clarification questions if required information for queries is not provided
        - If asked for interview help without providing a job role, ask for it
        - If asking for interview questions, ask for the candidate and job role if not provided.
    
    General behavior
    - Do not invent or guess facts
    - Be concise, professional, and evidence-based
    - Map strengths and risks to the highest-weight criteria
    - If data is missing (e.g., no resume), state what is missing and ask for clarification
    - Never address or message a candidate
    ```

1. **Web Search** ကို **Disabled** လုပ်ပါ။

1. **Create** ကို ရွေးပါ။  
    ![Create the Interview Agent](../../../../../translated_images/2-create-interview-agent.55051dc9cceec6614c7c0d685df6bebd85dcc4bde63fedab33558db47fd32ebd.my.png)

### 2.2.3 Data access ကို configure လုပ်ပြီး publish လုပ်ပါ

1. **Knowledge** အပိုင်းမှာ **+ Add knowledge** ကို ရွေးပါ။  
    ![Add knowledge](../../../../../translated_images/2-interview-agent-add-knowledge.8a760ce46dc5253747785127c37f3bfe2ea5c60a5243a4c2ff0a63d0275d1c02.my.png)
1. **Dataverse** ကို ရွေးပါ။  
    ![Select Dataverse](../../../../../translated_images/2-interview-agent-add-knowledge-select-dataverse.1449c08b33f90f35c806071fb430c5e769a9d54d42b146a137404c63dc697d52.my.png)
1. **Search box** မှာ `ppa_` ဟု ရိုက်ပါ။ ဒါဟာ သင် import လုပ်ထားတဲ့ tables တွေရဲ့ prefix ဖြစ်ပါတယ်။
1. **Select** all 5 tables (Candidate, Evaluation Criteria, Job Application, Job Role, Resume)
1. **Add to agent** ကို ရွေးပါ။  
    ![Select Dataverse tables](../../../../../translated_images/2-interview-agent-add-knowledge-select-tables.1b8e5f6286f4d58555b4f3e5ee49de7ad559f21d1b6806a1253d7f0c84bf7ab8.my.png)
1. Interview Agent ရဲ့ **Settings** ကို ရွေးပြီး အောက်ပါ settings တွေကို သတ်မှတ်ပါ:

    - **Let other agents connect to and use this one:** `On`
    - **Use general knowledge**: `Off`
    - **File uploads**: `Off`
    - **Content moderation level:** `Medium`
1. **Save** ကို ရွေးပါ။
1. **Publish** ကို ရွေးပြီး publish လုပ်မှု ပြီးဆုံးရန် စောင့်ပါ။

### 2.2.4 Interview Prep Agent ကို Hiring Agent နဲ့ ချိတ်ဆက်ပါ

1. **Hiring Agent** ကို ပြန်သွားပါ။

1. **Agents** Tab ကို ရွေးပါ။

1. **+Add an agent** → **Copilot Studio** ကို အသုံးပြုပြီး **Interview Agent** ကို ထည့်ပါ။ Description ကို အောက်ပါအတိုင်း သတ်မှတ်ပါ:
    ```text
    Assists with the interview process and provides information about Resumes, Candidates, Job Roles, and Evaluation Criteria.
    ```

    ![Connected Agent Details](../../../../../translated_images/2-add-connected-agent.1d8c42eb5dd78891649fef9771473f639eb7015c6bda76ac17e24093c359b6b1.my.png)
    Pass conversation history to this agent ကို အမှန်ခြစ်ထားသည်ကို သတိပြုပါ။ ဒါကတော့ မိဘ Agent က connected agent ကို အပြည့်အစုံ context ပေးနိုင်စေပါတယ်။

1. **Add agent** ကို ရွေးပါ။

1. **Application Intake Agent** နဲ့ **Interview Agent** နှစ်ခုလုံးကို မြင်ရတာကို သေချာပါစေ။ တစ်ခုက child agent ဖြစ်ပြီး နောက်တစ်ခုက connected agent ဖြစ်ပုံကို သတိပြုပါ။  
    ![Child and connected agent](../../../../../translated_images/2-child-and-connected.d888e561872260dfa66c657d5b31f99f2a3e492c2ed62284e124c5b81af54e7b.my.png)

### 2.2.5 Multi-agent ပူးပေါင်းလုပ်ဆောင်မှုကို စမ်းသပ်ပါ

1. **Test** ကို ရွေးပြီး test panel ကို ဖွင့်ပါ။

1. စမ်းသပ်ရန် resume တစ်ခုကို **Upload** လုပ်ပြီး မိဘ agent ကို connected agent ကို ဘာတွေကို အပ်နှံနိုင်မလဲဆိုတာ ဖော်ပြတဲ့ အောက်ပါဖော်ပြချက်ကို ထည့်ပါ။

    ```text
    Upload this resume, then show me open job roles, each with a description of the evaluation criteria, then use this to match the resume to at least one suitable job role even if not a perfect match.
    ```

    ![Multiple agents testing](../../../../../translated_images/2-multi-agent-test.1e7c8e9dc283f220983f74a960f49b194d9e1c013c4369e33354c84411fc991c.my.png)

1. Hiring Agent က upload ကို child agent ကို အပ်နှံပြီး Interview Agent ကို summary နဲ့ job role match ကို သူ့ရဲ့ knowledge ကို အသုံးပြုပြီး ပေးဖို့ မေးမြန်းပုံကို သတိပြုပါ။
   Resume, Job Roles နဲ့ Evaluation Criteria အကြောင်းကို မေးမြန်းပုံအမျိုးမျိုးကို စမ်းကြည့်ပါ။
   **ဥပမာများ:**

    ```text
    Give me a summary of active resumes
    ```

    ```text
    Summarize resume R10044
    ```

    ```text
    Which active resumes are suitable for the Power Platform Developer role?
    ```

## 🎉  Mission ပြည့်စုံပါပြီ

အလွန်ကောင်းမွန်တဲ့အလုပ်ပါ၊ Agent! **Operation Symphony** ပြီးမြောက်ပါပြီ။ သင့်ရဲ့ single Hiring Agent ကို အထူးပြုစွမ်းရည်များပါဝင်တဲ့ multi-agent orchestra အဖြစ် အောင်မြင်စွာ ပြောင်းလဲနိုင်ခဲ့ပါပြီ။

ဒီ mission မှာ သင့်ရဲ့ အောင်မြင်မှုတွေကတော့ -

**✅ Multi-agent architecture ကို ကျွမ်းကျင်မှု**  
Child agents နဲ့ connected agents ကို ဘယ်အချိန်မှာ အသုံးပြုရမလဲ၊ နဲ့ စနစ်တွေကို အရွယ်အစားကြီးမားအောင် ဒီဇိုင်းဆွဲပုံကို နားလည်နိုင်ပါပြီ။

**✅ Application Intake child agent**  
Resume တွေကို စစ်ဆေးပြီး၊ candidate data ကို ထုတ်ယူပြီး Dataverse မှာ သိမ်းဆည်းပေးတဲ့ အထူးပြု child agent ကို သင့် Hiring Agent မှာ ထည့်သွင်းနိုင်ခဲ့ပါပြီ။

**✅ Interview Prep connected agent**  
Interview ပြင်ဆင်မှုအတွက် အသုံးပြုနိုင်တဲ့ reusable connected agent ကို တည်ဆောက်ပြီး Hiring Agent နဲ့ အောင်မြင်စွာ ချိတ်ဆက်နိုင်ခဲ့ပါပြီ။

**✅ Agent အချင်းချင်း ဆက်သွယ်မှု**  
Main agent က specialist agents တွေနဲ့ coordinate လုပ်ပုံ၊ context ကို မျှဝေပုံ၊ နဲ့ အဆင့်မြင့် workflows တွေကို စီမံပုံကို မြင်နိုင်ခဲ့ပါပြီ။

**✅ Autonomy အခြေခံအဆောက်အအုံ**  
သင့်ရဲ့ အဆင့်မြှင့် Hiring System က အနာဂတ် mission တွေမှာ ထည့်သွင်းမယ့် အဆင့်မြင့် features တွေ - autonomous triggers, content moderation, နဲ့ deep reasoning အတွက် ပြင်ဆင်ပြီးဖြစ်ပါပြီ။

🚀**Next up:** နောက် mission မှာ သင့် agent ကို email က resume တွေကို autonomous အလုပ်လုပ်နိုင်အောင် configure လုပ်ပုံကို သင်ယူပါမယ်!

⏩[Move to Mission 03: Automate your agent with triggers](../03-automate-triggers/README.md)

## 📚 Tactical Resources

📖 [Add other agents (preview)](https://learn.microsoft.com/microsoft-copilot-studio/authoring-add-other-agents?WT.mc_id=power-182762-scottdurow)

📖 [Add tools to custom agents](https://learn.microsoft.com/microsoft-copilot-studio/advanced-plugin-actions?WT.mc_id=power-182762-scottdurow)

📖 [Work with Dataverse in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/knowledge-add-dataverse?WT.mc_id=power-182762-scottdurow)

📖 [Agent flows overview](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview?WT.mc_id=power-182762-scottdurow)

📖 [Create a solution](https://learn.microsoft.com/power-platform/alm/solution-concepts-alm?WT.mc_id=power-182762-scottdurow)

📖 [Power Platform solution ALM guide](https://learn.microsoft.com/power-platform/alm/overview-alm?WT.mc_id=power-182762-scottdurow)

📺 [Agent-to-agent collaboration in Copilot Studio](https://youtu.be/d-oD3pApHAg?si=rwIHKhJTkjSvhTHw)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များကို အသုံးပြုရန် အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအမှားများ သို့မဟုတ် အနားယူမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။