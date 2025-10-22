<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-22T19:41:05+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "ur"
}
-->
# 🚨 مشن 03: Microsoft 365 Copilot کے لیے ایک Declarative Agent تعینات کریں

## 🕵️‍♂️ کوڈ نام: `آپریشن کوپائلٹ ایکسٹینشن`

> **⏱️ آپریشن کا وقت:** `~60 منٹ`

🎥 **واچ واک تھرو**

[![Declarative Agent بنانے کی ویڈیو تھمبنیل](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.ur.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "یوٹیوب پر واک تھرو دیکھیں")

## 🎯 مشن کا خلاصہ

ایجنٹ میکر، آپ کا پہلا فیلڈ اسائنمنٹ مبارک ہو۔ آپ کو ایک Declarative Agent ڈیزائن، تیار اور تعینات کرنے کے لیے منتخب کیا گیا ہے—ایک خاص آپریٹو جو Microsoft 365 Copilot اور Microsoft Teams میں براہ راست شامل ہوتا ہے۔

روایتی ایجنٹس کے برعکس، Declarative Agents ایک واضح مشن (ہدایات)، ٹولز (پرومپٹس/کنیکٹرز)، اور اندرونی انٹیلیجنس (جیسے SharePoint، Dataverse وغیرہ) تک اسٹریٹجک رسائی کے ساتھ کام کرتے ہیں۔ آپ کا کام Microsoft Copilot Studio کا استعمال کرتے ہوئے اس ایجنٹ کو بنانا ہے—ایک نو کوڈ کمانڈ سینٹر جہاں آپ کے ایجنٹ کی مہارت اور مقصد زندگی میں آتے ہیں۔

چلیں شروع کریں۔

## 🔎 مقاصد

اس مشن میں، آپ سیکھیں گے:

1. Declarative Agents کیا ہیں اور وہ Microsoft 365 Copilot کو کس طرح اپنی مرضی کے مطابق صلاحیتوں کے ساتھ بڑھاتے ہیں
1. Microsoft Copilot Studio اور Copilot Studio Agent Builder کا موازنہ Declarative Agents بنانے کے لیے
1. قدرتی زبان کے ذریعے ایک Declarative Agent بنانا، بات چیت کے تخلیقی تجربے کے ذریعے
1. AI پرومپٹس کو ٹولز کے طور پر شامل کرنا تاکہ آپ کے ایجنٹ کی خصوصی معلومات اور مسئلہ حل کرنے کی صلاحیتوں کو بڑھایا جا سکے
1. Microsoft 365 Copilot اور Microsoft Teams میں اپنے Declarative Agent کو شائع کرنا اور جانچنا

## 🕵🏻‍♀️ Microsoft 365 Copilot کے لیے Declarative Agent کیا ہے؟

Declarative Agents Microsoft 365 Copilot کے حسب ضرورت ورژن ہیں۔ آپ Microsoft 365 Copilot کو مخصوص کاروباری ضروریات کو پورا کرنے کے لیے اپنی مرضی کے مطابق بنا سکتے ہیں، اسے کسی خاص عمل کی حمایت کرنے کے لیے ہدایات فراہم کر سکتے ہیں، اسے انٹرپرائز نالج کے ساتھ گراؤنڈ کر سکتے ہیں، اور وسیع تر توسیع کے لیے ٹولز کا فائدہ اٹھا سکتے ہیں۔ یہ تنظیموں کو اپنے صارفین کے لیے زیادہ فعالیت کے ساتھ ذاتی نوعیت کے تجربات تخلیق کرنے کی اجازت دیتا ہے۔

## 🤔 Microsoft Copilot Studio کو Declarative Agent بنانے کے لیے کیوں استعمال کریں؟

ایک میکر کے طور پر، امکان ہے کہ آپ نے پہلے ہی Microsoft 365 Copilot میں [Copilot Studio Agent Builder](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez) کو دریافت کیا ہو اور آپ شاید سوچ رہے ہوں کہ _Microsoft Copilot Studio میں ایک Declarative Agent کیوں بنائیں؟_

Microsoft Copilot Studio Declarative Agents کے لیے ٹولز اور خصوصیات کا ایک جامع سیٹ پیش کرتا ہے جو Copilot Studio Agent Builder کی حدود سے آگے بڑھتا ہے۔ Copilot Studio Agent Builder کی طرح، Microsoft Copilot Studio میں بنانے کے لیے آپ کو پروگرامنگ یا سافٹ ویئر ڈویلپمنٹ جاننے کی ضرورت نہیں ہے۔ آئیے مزید سمجھنے کے لیے Copilot Studio Agent Builder اور Copilot Studio کے درمیان فرق کو مزید تفصیل سے دیکھتے ہیں۔

### خصوصیات کا موازنہ

ذیل میں دی گئی جدول Copilot Studio Agent Builder اور Copilot Studio میں Declarative Agent بنانے کے وقت کے فرق کو اجاگر کرتی ہے۔

| خصوصیت                   | Microsoft 365 Copilot میں Copilot Studio Agent Builder                          | Copilot Studio میں Microsoft 365 Copilot کو بڑھائیں                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **علم**       | ویب، SharePoint، Microsoft Teams چیٹس، Outlook ای میلز، Copilot کنیکٹرز     | ویب سرچ (بنگ کے ذریعے)، SharePoint، Dataverse، Dynamics 365، Copilot کنیکٹرز  |
| **ٹولز**       | کوڈ انٹرپریٹر، امیج جنریٹر     | 1400+ پاور پلیٹ فارم کنیکٹرز، کسٹم کنیکٹرز، پرومپٹ، کمپیوٹر استعمال، REST API، ماڈل کانٹیکسٹ پروٹوکول   |
| **اسٹارٹر پرومپٹس**         | صارفین کے لیے جلدی شروع کرنے کے لیے پرومپٹس کو ترتیب دیں   | صارفین کے لیے جلدی شروع کرنے کے لیے پرومپٹس کو ترتیب دیں  |
| **چینل**           | ایجنٹ صرف Microsoft 365 Copilot پر شائع ہوا     | ایجنٹ Microsoft 365 Copilot اور Microsoft Teams پر شائع ہوا      |
| **شیئرنگ اجازتیں**         | صارفین صرف ناظرین ہیں    | صارفین ایڈیٹرز یا ناظرین ہو سکتے ہیں   |

Microsoft Copilot Studio میں بنائے گئے Declarative Agents کے لیے مزید صلاحیتیں پیش کی جاتی ہیں جن کے بارے میں ہم اگلے حصے میں سیکھیں گے۔

!!! tip
    - Copilot Studio Agent Builder کے بارے میں مزید جاننے کے لیے، [Copilot Developer Camp: Lab MAB1 - اپنا پہلا ایجنٹ بنائیں](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/) پر جائیں۔
    - Microsoft 365 Copilot کے لیے Copilot Studio Agent Builder سے آگے ایک Declarative Agent کو بڑھانے کی پرو ڈویلپمنٹ کے لیے، [Copilot Developer Camp: Lab MAB1 - اپنا پہلا ایجنٹ بنائیں](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/) پر جائیں۔

### Microsoft 365 Copilot کو Copilot Studio میں بنائے گئے Declarative Agents کے ساتھ بڑھانا

آئیے اس فیچر کمپیریزن ٹیبل سے جو ہم نے سیکھا ہے اسے مزید وسعت دیں۔

#### حسب ضرورت

- **تفصیلی ہدایات**: آپ ایجنٹ کے مقصد اور رویے کو بالکل درست طریقے سے بیان کرنے کے لیے تفصیلی ہدایات اور صلاحیتیں فراہم کر سکتے ہیں۔
  - اس میں قدرتی زبان کا استعمال کرتے ہوئے ٹولز کو شامل کرنا شامل ہے۔

- **انٹرپرائز نالج تک رسائی**: صارف کی اجازتوں کا احترام کرتے ہوئے انٹرپرائز نالج تک رسائی کو فعال کرتا ہے۔
  - SharePoint انٹیگریشن
  - Dataverse انٹیگریشن
  - Dynamics 365 انٹیگریشن
  - Microsoft 365 Copilot کنیکٹرز جو آپ کے تنظیمی ایڈمنسٹریٹر کے ذریعے فعال کیے گئے ہیں

   ![حسب ضرورت](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.ur.png)

#### جدید صلاحیتیں

- **بیرونی خدمات کے ساتھ انٹیگریشن**: آپ کو بیرونی خدمات کے ساتھ انٹیگریٹ کرنے والے 1400+ پاور پلیٹ فارم کنیکٹرز میں سے انتخاب کرنے کی اجازت دیتا ہے، جو زیادہ پیچیدہ اور طاقتور فعالیت فراہم کرتے ہیں۔
  - مثالیں شامل ہیں [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez)، [ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez)، [Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez)، [SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) اور مزید
  - متبادل طور پر، آپ اپنے Declarative Agent میں براہ راست ماڈل کانٹیکسٹ پروٹوکول سرورز اور REST APIs کا فائدہ اٹھا سکتے ہیں

- **AI پرومپٹس**: قدرتی زبان اور AI ریزننگ کے ساتھ متن، دستاویزات، تصاویر اور ڈیٹا کا تجزیہ اور تبدیلی کرنے کے لیے پرومپٹ کا استعمال کریں۔
  - چیٹ ماڈل منتخب کریں، Basic (Default)، Standard، Premium میں سے انتخاب کریں
  - اپنے Azure AI Foundry ماڈل کو لانے کا آپشن تاکہ آپ کے پرومپٹ کو گراؤنڈ کیا جا سکے

- **زیادہ تعیناتی کنفیگریشن کے اختیارات**: چینلز کا انتخاب کریں اور صارف کی اجازتوں کی وضاحت کریں۔
  - Microsoft Teams پر شائع کریں، آپ کے صارفین کے لیے ایک مانوس یوزر انٹرفیس تاکہ جلدی اپنانے میں مدد ملے
  - ایجنٹ کے مالک پر انحصار کے ایک واحد نقطہ کو روکنے کے لیے ایڈیٹ صارف کی اجازتیں شیئر کی جا سکتی ہیں

   ![جدید صلاحیتیں](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.ur.png)

خلاصہ یہ کہ، Microsoft Copilot Studio میں Declarative Agents کاروباری ضروریات کے مطابق Microsoft 365 Copilot کو اپنی مرضی کے مطابق بنانے کی اجازت دیتے ہیں، انٹرپرائز نالج سسٹمز، بیرونی خدمات یا AI GPT ماڈلز سے جڑنے کے لیے ٹولز کے انضمام کے ذریعے۔

## 🧪 لیب 03: Microsoft Copilot Studio میں Microsoft 365 Copilot کے لیے ایک Declarative Agent بنائیں

ہم اگلے حصے میں "Business-to-Employee" استعمال کے کیس کے لیے ایک Declarative Agent بنانا سیکھیں گے جو ایک **IT ہیلپ ڈیسک ایجنٹ** کے طور پر کام کرے گا۔

- [3.1 ایک Declarative Agent بنائیں](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 اپنے Declarative Agent کے لیے ایک پرومپٹ بنائیں اور شامل کریں](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 ہدایات کو اپ ڈیٹ کریں اور اپنے Declarative Agent کی جانچ کریں](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 اپنے Declarative Agent کو Microsoft 365 Copilot اور Microsoft Teams پر شائع کریں](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    یہ لیب ایک ٹول کے طور پر پرومپٹ شامل کرنے کے اقدامات کو بیان کرے گا۔ درج ذیل اسباق میں نالج سورسز شامل کرنے اور دستیاب دیگر ٹولز شامل کرنے پر بات کی جائے گی۔ آپ کی سیکھنے کے لیے اسے آسان رکھنا 😊

### 👩🏻‍💼 Business-to-Employee (B2E) کو سمجھنا

Business-to-Employee (B2E) ان تعاملات اور خدمات کو ظاہر کرتا ہے جو ایک کاروبار براہ راست اپنے ملازمین کو فراہم کرتا ہے۔ ایجنٹ کے سیاق و سباق میں، اس کا مطلب ہے کہ تنظیم کے اندر ملازمین کے کام کے تجربے کو سپورٹ اور بڑھانے کے لیے Copilot Studio کی جدید صلاحیتوں کا استعمال۔

### ✨ استعمال کے کیس کا منظر

**بطور** ملازم

**میں چاہتا ہوں** کہ IT ہیلپ ڈیسک ایجنٹ سے جلدی اور درست مدد حاصل کروں جیسے ڈیوائس کے مسائل، نیٹ ورک ٹربل شوٹنگ، پرنٹر سیٹ اپ

**تاکہ میں** پیداواریت برقرار رکھ سکوں اور تکنیکی مسائل کو بغیر کسی تاخیر کے حل کر سکوں

چلیں شروع کریں!

### ضروریات

- میکرز کو Copilot Studio ماحول میں تخلیق کرنے اور رسائی حاصل کرنے کی اجازت ہونی چاہیے۔

!!! note "لائسنسنگ نوٹ"
    یہ لیب ایک ٹول کے طور پر پرومپٹ شامل کرنے کے اقدامات کو بیان کرے گا۔ درج ذیل اسباق میں نالج سورسز شامل کرنے اور دستیاب دیگر ٹولز شامل کرنے پر بات کی جائے گی۔ آپ کی سیکھنے کے لیے اسے آسان رکھنا 😊
  
    آپ کو Microsoft 365 Copilot صارف لائسنس کی ضرورت نہیں ہے تاکہ آپ کے Declarative Agent کو Copilot Studio میں Microsoft 365 Copilot پر شائع کیا جا سکے۔ تاہم **صارفین** کو _شائع شدہ Declarative Agent_ کے Microsoft 365 Copilot میں استعمال کے لیے Microsoft 365 Copilot صارف لائسنس کی ضرورت ہوگی۔

### 3.1 ایک Declarative Agent بنائیں

!!! warning "Copilot سوالات مختلف ہو سکتے ہیں"

    Copilot بات چیت کے تخلیقی تجربے میں ہر بار مختلف سوالات فراہم کیے جا سکتے ہیں جو پہلے سے تھوڑے مختلف ہو سکتے ہیں۔

1. [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/) پر جائیں اور اپنے اسناد کا استعمال کرتے ہوئے سائن ان کریں۔ اس بات کو یقینی بنائیں کہ آپ اپنے لیبز کے لیے استعمال کیے جانے والے ماحول میں سوئچ کریں۔

1. مینو سے **Agents** منتخب کریں اور **Copilot for Microsoft 365** منتخب کریں۔

       ![Microsoft 365 کے لیے Copilot](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.ur.png)

1. اگلا، ہم **+ Add** ایجنٹ منتخب کرکے ایک Declarative Agent بنائیں گے۔

       ![ایجنٹ شامل کریں](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.ur.png)

1. اس کے بعد ہم دیکھیں گے کہ بات چیت کے تخلیقی تجربے کا آغاز ہو رہا ہے جہاں ہم قدرتی زبان میں Copilot کے ساتھ بات چیت کر سکتے ہیں تاکہ ہم جس Declarative Agent کو بنانا چاہتے ہیں اس کی وضاحت کریں، اور رہنمائی کے لیے فراہم کردہ سوالات کا استعمال کریں۔

       آئیے ایک تفصیلی وضاحت درج کریں جو درج ذیل کو بیان کرے،  
       - ایجنٹ کا کام  
       - وہ کس قسم کی انکوائری کو ہینڈل کر سکتا ہے  
       - اس کے جواب کی شکل  
       - ایجنٹ کا مقصد  
    
       ```text
       آپ ایک انتہائی ماہر اور تجربہ کار IT پروفیشنل ہیں جو کمپیوٹر سسٹمز، نیٹ ورکنگ، اور سائبر سیکیورٹی کے وسیع میدان میں مہارت رکھتے ہیں۔ آپ تکنیکی مسائل کی تشخیص اور حل کرنے، تمام تکنیکی سطحوں کے صارفین کے لیے حل کو واضح اور قابل فہم انداز میں بیان کرنے، اور بہترین طریقوں پر رہنمائی فراہم کرنے کے قابل ہیں۔ آپ کو مختصر اور معلوماتی ہونا چاہیے، جب مناسب ہو تو بلٹ پوائنٹس کے ساتھ مرحلہ وار ہدایات کا استعمال کریں۔ آپ کا مقصد صارف کو مسئلہ کو سمجھنے اور مؤثر طریقے سے حل کرنے میں مدد فراہم کرنا ہے۔
       ```
    
       ![پرومپٹ بنائیں](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.ur.png)

1. پرومپٹ جمع کرانے کے بعد، دائیں طرف کے پین پر ایجنٹ کی تفصیلات اور ہدایات کے ساتھ ایک نمایاں اپ ڈیٹ ظاہر ہوگا جیسا کہ پرومپٹ میں بیان کیا گیا ہے۔ اگلا آپ سے اپنے ایجنٹ کے نام کی تصدیق کرنے کے لیے کہا جائے گا اور Copilot ایک نام تجویز کرے گا۔

       یا تو تجویز کردہ نام کو قبول کرنے کے لیے `yes` درج کریں یا درج ذیل جیسے مختلف نام درج کریں،
    
       ```text
       Contoso Tech Support Pro
       ```
    
       ![ہدایات اپ ڈیٹ ہوئیں](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.ur.png)

    !!! warning "یاد دہانی: Copilot سوالات مختلف ہو سکتے ہیں"

        Copilot بات چیت کے تخلیقی تجربے میں ہر بار مختلف سوالات فراہم کیے جا سکتے ہیں جو پہلے سے تھوڑے مختلف ہو سکتے ہیں۔

1. ایجنٹ کا نام اب دائیں طرف کے پین پر اپ ڈیٹ ہو گیا ہے۔ اب ہم سے ایجنٹ کی ہدایات کو بہتر بنانے کے لیے کہا جا رہا ہے۔ جو Copilot نے تجویز کیا وہ بہت اچھا لگتا ہے، اس لیے ہم اس سے کہیں گے کہ وہ اپنی تجاویز کا استعمال کرے۔ ہم درج ذیل درج کریں گے،

      ```text
      Focus on the IT issues and scenarios you've identified
      ```

      ![نام اپ ڈیٹ ہوا](../../../../../translated_images/3.1_06_NameUpdated.b6b8cc7c670b77c635d6b54b723e1a83f63ec288c0eab260fdbf88c7ec163003.ur.png)

1. اگلا ہم سے پوچھا جائے گا کہ کیا ہم کوئی عوامی طور پر قابل رسائی ویب سائٹس یا علم شامل کرنا چاہتے ہیں۔ ہم `No` کے ساتھ جواب دیں گے کیونکہ ہم اس لیب میں صرف اپنے Declarative Agent کے لیے ایک پرومپٹ شامل کریں گے۔ مستقبل کے اسباق میں نالج سورسز کا احاطہ کیا جائے گا۔

      ![کوئی ویب سائٹس یا نالج سورسز شامل نہیں کیے گئے](../../../../../translated_images/3.1_07_KnowledgeSources.2001faa25aab922f38da82a8602e68b3ad7153941e87bab0949177e0b2ab0c08.ur.png)

1. اس کے بعد ہمیں Copilot سے ایک جواب نظر آئے گا کہ ہم نے اب Copilot بات چیت کے تخلیقی تجربے کا استعمال کرتے ہوئے اپنے ایجنٹ کی تشکیل مکمل کر لی ہے۔ تاہم، آئیے اسے مزید بہتر بنائیں اور یہ بتائیں کہ اسے مختصر اور معلوماتی ہونا چاہیے، بلٹ پوائنٹس کے ساتھ، ہمدردی کے ساتھ بات چیت کریں، اور حل فراہم کرنے کے بعد تاثرات طلب کریں۔

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

      ![ایجنٹ کی ہدایات کو اپ ڈیٹ کریں](../../../../../translated_images/3.1_08_FurtherRefinements.993926c4e55cc5133413f4e10a61a6ed43351d070e791db0ee5547ea83f46473.ur.png)

1. Copilot تصدیق کرتا ہے کہ ہدایات کو اپ ڈیٹ کر دیا گیا ہے۔ Microsoft 365 Copilot کے لیے Declarative Agent کو پروویژن کرنے کے لیے **Create** پر کلک کریں۔

      ![ایجنٹ بنائیں](../../../../../translated_images/3.1_09_CreateDeclarativeAgent.71442cd4e18105359e55016d92e54b74ac18977bb535c637a05bac0d3680a3c5.ur.png)

    !!! warning "یاد دہانی: Copilot سوالات مختلف ہو سکتے ہیں"

        Copilot بات چیت کے تخلیقی تجربے میں ہر بار مختلف سوالات فراہم کیے جا سکتے ہیں جو پہلے سے تھوڑے مختلف ہو سکتے ہیں۔

1. ایک بار جب ایجنٹ کو پروویژن کر دیا جائے گا، آپ ایجنٹ کی تفصیلات دیکھیں گے جس میں Copilot بات چیت کے تخلیقی تجربے کے دوران بیان کردہ وضاحت اور ہدایات شامل ہوں گی۔
![ایجنٹ کی تفصیلات](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.ur.png)

پین کو نیچے اسکرول کریں اور آپ کو علم شامل کرنے، ویب سرچ کو فعال کرنے (بنگ کے ذریعے)، اسٹارٹر پرامپٹس اور مائیکروسافٹ 365 کوپائلٹ کے لیے ڈیکلریٹو ایجنٹ کی پبلش تفصیلات کے اختیارات بھی نظر آئیں گے۔ اسٹارٹر پرامپٹس ٹیسٹ پین میں دائیں جانب بھی دکھائی دیں گے۔ صارفین ان اسٹارٹر پرامپٹس کو منتخب کر کے ایجنٹ کے ساتھ بات چیت شروع کر سکتے ہیں۔

![تجویز کردہ پرامپٹس](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.ur.png)

1. ایجنٹ کے تفصیلات سیکشن میں، آپ کے پاس ایجنٹ آئیکن کو تبدیل کرنے کی صلاحیت بھی ہے۔ **Edit** کو منتخب کریں۔

![تفصیلات میں ترمیم کریں](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.ur.png)

یہاں آپ آئیکن اور پس منظر کا رنگ تبدیل کر سکتے ہیں۔ **Save** کو منتخب کریں اور پھر ایجنٹ کی تفصیلات کو اپ ڈیٹ کرنے کے لیے دوبارہ **Save** کو منتخب کریں۔

![آئیکن تبدیل کریں](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.ur.png)

1. آئیے ہم نے جو ایجنٹ بنایا ہے اس کا ایک مختصر ٹیسٹ کریں۔ ٹیسٹ پین میں دائیں جانب ایک **Starter Prompt** منتخب کریں۔

![اسٹارٹر پرامپٹ ٹیسٹ کریں](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.ur.png)

1. ہمارا ایجنٹ پھر جواب دے گا۔ نوٹ کریں کہ اس نے ہدایات پر عمل کرتے ہوئے بلٹ پوائنٹس میں جواب دیا اور اپنے جواب میں ہمدردی کا مظاہرہ کیا۔

پیغام کے آخر میں اس نے حل فراہم کرنے کے بعد فیڈبیک مانگنے کا بھی ذکر کیا۔

![ٹیسٹنگ سے جواب](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.ur.png)

چند منٹوں میں آپ نے کوپائلٹ اسٹوڈیو میں مائیکروسافٹ 365 کوپائلٹ کے لیے ایک ڈیکلریٹو ایجنٹ شامل کر لیا 🙌🏻

اب ہم سیکھیں گے کہ اپنے ایجنٹ میں ایک ٹول کیسے شامل کریں، ہم ایک پرامپٹ بنائیں گے۔

### 3.2 اپنے ڈیکلریٹو ایجنٹ کے لیے ایک پرامپٹ بنائیں اور شامل کریں

1. **Tools** سیکشن میں نیچے اسکرول کریں اور **+ Add tool** کو منتخب کریں۔

![ٹول شامل کریں](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.ur.png)

1. Tools موڈل ظاہر ہوگا اور پاور پلیٹ فارم کنیکٹرز کی فہرست دکھائی دے گی۔ پرامپٹ شامل کرنے کے لیے **+ New tool** کو منتخب کریں۔

![نیا ٹول](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.ur.png)

1. دیگر ٹولز کی فہرست ظاہر ہوگی - پرامپٹ، کسٹم کنیکٹر، REST API اور Model Context Protocol۔ اگر آپ کی تنظیم [کمپیوٹر استعمال کے تقاضے](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez) پورے کرتی ہے، تو یہ فہرست میں بھی ظاہر ہوگا۔ **Prompt** کو منتخب کریں۔

![پرامپٹ منتخب کریں](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.ur.png)

1. پرامپٹ کے لیے ایک نام درج کریں۔ آئیے اپنے پرامپٹ کا نام `IT Expert` رکھیں۔

![نام درج کریں](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.ur.png)

1. **Model** کے ساتھ **chevron icon** کو منتخب کریں تاکہ مختلف چیٹ ماڈلز دیکھ سکیں جنہیں آپ منتخب کر سکتے ہیں۔ ڈیفالٹ طور پر، **Basic GPT-4.1 mini** ماڈل منتخب ہوتا ہے اور آپ کے پاس Azure AI Foundry Models کا استعمال کرتے ہوئے اپنا ماڈل لانے کا آپشن بھی ہوتا ہے۔ ہم منتخب کردہ ڈیفالٹ ماڈل کے ساتھ رہیں گے۔

![ماڈل تبدیل کریں](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.ur.png)

1. اگلا، ہم اپنے پرامپٹ کو ہدایات فراہم کریں گے۔ آپ تین طریقے منتخب کر سکتے ہیں:

   - کوپائلٹ کا استعمال کریں تاکہ آپ کی وضاحت کی بنیاد پر ہدایات تیار کی جائیں کہ آپ پرامپٹ سے کیا چاہتے ہیں۔
   - پرامپٹ لائبریری سے ایک پری سیٹ ٹیمپلیٹ کا استعمال کریں۔
   - اپنی ہدایات دستی طور پر درج کریں۔

1. پہلے کوپائلٹ کا استعمال کرتے ہوئے وضاحت کی بنیاد پر ہدایات تیار کرنے کی کوشش کریں۔ کوپائلٹ فیلڈ میں درج کریں اور جمع کرائیں۔

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

![کوپائلٹ کے ساتھ شروع کریں](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.ur.png)

1. کوپائلٹ ہمارے لیے پرامپٹ تیار کرنا شروع کرے گا۔

![کوپائلٹ پرامپٹس تیار کرتا ہے](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.ur.png)

1. کوپائلٹ کے تیار کردہ ڈرافٹ ہدایات ظاہر ہوں گی۔

![کوپائلٹ کے تیار کردہ ڈرافٹ ہدایات](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.ur.png)

1. ہدایات کے آخر میں نیچے اسکرول کریں اور آپ دیکھیں گے کہ صارف ان پٹ پیرامیٹر پہلے ہی کوپائلٹ کے ذریعے متعین کیا گیا ہے۔ آپ کے پاس یہ آپشن ہوگا:
   - تیار کردہ ڈرافٹ ہدایات کو برقرار رکھیں۔
   - کوپائلٹ کا استعمال کرتے ہوئے ڈرافٹ ہدایات کو ریفریش کریں۔
   - ڈرافٹ ہدایات کو صاف کریں۔

   ڈرافٹ ہدایات کو **trash bin** آئیکن منتخب کر کے صاف کریں اور ہم اگلے پرامپٹ لائبریری کو آزمائیں گے۔

![پرامپٹ ہدایات](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.ur.png)

1. **prompt template** لنک کو منتخب کریں۔

![پرامپٹ ٹیمپلیٹ منتخب کریں](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.ur.png)

1. آپ کو پرامپٹ ٹیمپلیٹس کی ایک فہرست نظر آئے گی۔ یہ [پاور پلیٹ فارم پرامپٹ لائبریری](https://aka.ms/power-prompts) سے ہیں۔

![پرامپٹ لائبریری](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.ur.png)

1. `IT expert` پرامپٹ تلاش کریں اور اسے منتخب کریں۔

![IT expert پرامپٹ منتخب کریں](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.ur.png)

1. پرامپٹ کو ہدایات کے طور پر شامل کیا جائے گا جس میں پرامپٹ ٹیمپلیٹ کے ذریعے متعین کردہ ان پٹ پیرامیٹر ہوگا۔ اسی طرح جیسے ہم نے کوپائلٹ کے ساتھ بات چیت کے تخلیقی تجربے کے دوران اپنے ایجنٹ کے لیے ہدایات فراہم کی تھیں، یہ پرامپٹ ٹیمپلیٹ درج ذیل کو واضح کرتا ہے:
   - ایک کام،
   - کس قسم کی انکوائری کو سنبھال سکتا ہے،
   - اور اس کے جواب کی فارمیٹ اور پرامپٹ کا مقصد۔

![پرامپٹ ہدایات](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.ur.png)

1. ہدایات کو صاف کریں اور ہم اگلے دستی طور پر ہدایات درج کرنے کی کوشش کریں گے۔ ہم [پاور پلیٹ فارم پرامپٹ لائبریری](https://aka.ms/power-prompts) سے [IT Expert پرامپٹ](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/) استعمال کریں گے۔ پرامپٹ کو کاپی کریں اور پیسٹ کریں۔

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

![پرامپٹ ہدایات](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.ur.png)

1. اگلا، ہم اپنے پرامپٹ کے صارف ان پٹ پیرامیٹرز کو متعین کر سکتے ہیں۔ یہ متن اور تصاویر ہو سکتے ہیں، اور ٹیسٹ کرنے کے لیے نمونہ ڈیٹا۔ پرامپٹ کو Dataverse ٹیبلز کے علم سے جوڑنے کی صلاحیت بھی موجود ہے۔ اس مشق کے لیے، ہمارے پاس صرف ایک صارف ان پٹ کو متعین کرنا ہے جو مسئلہ ان پٹ ہے۔ یہ فی الحال ہمارے پرامپٹ میں `[Problem]` کے طور پر ایک پلیس ہولڈر ہے۔ ہم اب اس ان پٹ کو `/` کردار درج کر کے یا **+Add content** کو منتخب کر کے اور پھر **Text** کو منتخب کر کے ترتیب دیں گے۔

![متن انپٹ](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.ur.png)

1. ہم اب اپنے انپٹ پیرامیٹر کے لیے ایک نام اور نمونہ ڈیٹا درج کر سکتے ہیں۔

   درج کریں:

    ```text
    problem input
    ```

   نمونہ ڈیٹا درج کریں:

    ```text
    My laptop gets an error with a blue screen
    ```

   پھر **Close** کو منتخب کریں۔

![مسئلہ انپٹ ترتیب دیں](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.ur.png)

1. مسئلہ انپٹ پیرامیٹر کو اب ترتیب دیے گئے نمونہ ڈیٹا کے ساتھ ہدایات میں شامل کیا جائے گا۔ ہم اب اپنے پرامپٹ کو ٹیسٹ کر سکتے ہیں!

![مسئلہ انپٹ شامل کیا گیا](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.ur.png)

1. پرامپٹ کو ٹیسٹ کرنے کے لیے **Test** کو منتخب کریں۔

![ٹیسٹ ہدایات](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.ur.png)

1. جواب ظاہر ہوگا۔ نوٹ کریں کہ جواب ہدایات کے مطابق بلٹ پوائنٹس کے ساتھ سرخیاں فراہم کرتا ہے۔ نیچے اسکرول کریں اور ماڈل کے جواب کا باقی حصہ دیکھیں۔

![ماڈل جواب](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.ur.png)

1. پرامپٹ کو محفوظ کرنے سے پہلے، آئیے ان سیٹنگز کے بارے میں جانتے ہیں جنہیں اس پرامپٹ کے لیے ترتیب دیا جا سکتا ہے۔ **ellipsis (...) icon** کو منتخب کریں۔

![پرامپٹ سیٹنگز](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.ur.png)

1. یہاں ہم تین سیٹنگز دیکھیں گے جنہیں ترتیب دیا جا سکتا ہے:

   - **Temperature**: کم درجہ حرارت سے پیش گوئی کے نتائج حاصل ہوتے ہیں، جبکہ زیادہ درجہ حرارت متنوع یا تخلیقی جوابات کی اجازت دیتا ہے۔
   - **Record retrieval**: اپنے علم کے ذرائع کے لیے حاصل کردہ ریکارڈز کی تعداد کی وضاحت کریں۔
   - **Include links in the response**: جب منتخب کیا جائے، جواب میں حاصل کردہ ریکارڈز کے لیے لنک حوالہ جات شامل ہوتے ہیں۔

   **X** آئیکن کو منتخب کر کے سیٹنگز سے باہر نکلیں۔

![سیٹنگز ترتیب دیں](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.ur.png)

1. پرامپٹ کو محفوظ کرنے کے لیے **Save** کو منتخب کریں۔

![پرامپٹ محفوظ کریں](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.ur.png)

1. اگلا، **Add to agent** کو منتخب کریں تاکہ پرامپٹ کو ہمارے ڈیکلریٹو ایجنٹ میں شامل کیا جا سکے۔

![پرامپٹ ہدایات](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.ur.png)

1. پرامپٹ اب Tools کے تحت ظاہر ہوگا 🙌🏻

![پرامپٹ شامل کیا گیا](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.ur.png)

ہم اپنے ایجنٹ کو پرامپٹ کو استعمال کرنے کی ہدایات کو اپ ڈیٹ کریں گے اور اپنے ڈیکلریٹو ایجنٹ کو ٹیسٹ کریں گے۔

### 3.3 ہدایات کو اپ ڈیٹ کریں اور اپنے ڈیکلریٹو ایجنٹ کو ٹیسٹ کریں

1. **Details** سیکشن میں اوپر اسکرول کریں اور **Edit** کو منتخب کریں۔ یہ فیلڈز کو قابل تدوین بنائے گا۔

![Edit کو منتخب کریں](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.ur.png)

1. ہم اب اپنے پرامپٹ کو استعمال کرنے کے لیے ہدایات کو اپ ڈیٹ کر سکتے ہیں۔ ہدایات کو صاف کریں، پھر درج ذیل کو کاپی کریں اور پیسٹ کریں۔

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

   نوٹ کریں کہ آخری جملہ ایجنٹ کو ہدایت دے رہا ہے کہ صارف کے پوچھے گئے سوال کو مسئلہ انپٹ پیرامیٹر کے لیے قدر کے طور پر استعمال کرے۔ ایجنٹ سوال کو پرامپٹ کے لیے مسئلہ انپٹ کے طور پر استعمال کرے گا۔ اگلا، **Save** کو منتخب کریں۔

![پرامپٹ کو استعمال کرنے کے لیے ہدایات کو اپ ڈیٹ کریں](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.ur.png)

1. ہم اب اپنے ڈیکلریٹو ایجنٹ کی اپ ڈیٹ شدہ ہدایات کو ٹیسٹ کرنے کے لیے تیار ہیں۔ ٹیسٹ پین میں **refresh icon** کو منتخب کریں۔

![refresh icon کو منتخب کریں](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.ur.png)

1. اگلا، درج ذیل پرامپٹ درج کریں اور جمع کرائیں۔

   ```text
   کیا آپ میری مدد کر سکتے ہیں، میرا لیپ ٹاپ نیلا اسکرین دکھا رہا ہے
   ```

![ٹیسٹ کریں](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.ur.png)

1. ایجنٹ پرامپٹ کو استعمال کرتا ہے اور جواب دیتا ہے۔

![پرامپٹ ہدایات](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.ur.png)

آئیے اب اپنے ڈیکلریٹو ایجنٹ کو پبلش کریں 😃

### 3.4 اپنے ڈیکلریٹو ایجنٹ کو مائیکروسافٹ 365 کوپائلٹ اور مائیکروسافٹ ٹیمز پر پبلش کریں

1. **Publish** کو منتخب کریں۔

![ایجنٹ پبلش کریں](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.ur.png)

1. ایک موڈل ظاہر ہوگا جو چینلز اور پبلشنگ تفصیلات کو دکھاتا ہے جنہیں اپ ڈیٹ کیا جا سکتا ہے۔

   - چینلز: ایجنٹ مائیکروسافٹ 365 کوپائلٹ اور مائیکروسافٹ ٹیمز پر پبلش کیا جائے گا۔
   - ایجنٹ ایپ کی معلومات: یہ وہ معلومات ہیں جو صارف کو مائیکروسافٹ 365 کوپائلٹ یا مائیکروسافٹ ٹیمز میں ایجنٹ شامل کرتے وقت دکھائی دیں گی۔ یہ فیلڈز ضرورت کے مطابق اپ ڈیٹ کیے جا سکتے ہیں۔

![ایجنٹ ایپ کی تفصیلات](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.ur.png)

1. مثال کے طور پر، آپ **Short description**, **Long description**, **Developer name** کو اپنے نام سے اپ ڈیٹ کر سکتے ہیں۔

!!! tip
   اگر آپ کے براؤزر پر تمام فیلڈز ظاہر نہیں ہو رہے ہیں، تو زوم آؤٹ کرنے کی کوشش کریں جیسے 75%

   **Publish** کو منتخب کریں۔ کوپائلٹ اسٹوڈیو ایجنٹ کو پبلش کرنا شروع کر دے گا۔

![ایجنٹ پبلش کرنا](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.ur.png)

1. جب پبلشنگ مکمل ہو جائے گی، تو ہم ایجنٹ کے [Availability options](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez) دیکھیں گے۔

   | دستیابی کا آپشن    | وضاحت |
   | ---------- | ---------- |
   | Share Link | لنک کو کاپی کریں تاکہ اسے مشترکہ صارفین کے ساتھ تقسیم کیا جا سکے تاکہ وہ مائیکروسافٹ 365 کوپائلٹ میں ایجنٹ کھول سکیں |
   | Show to my teammates and shared users  | آپ کو دوسروں کو ایجنٹ کی تخلیق میں حصہ لینے کی اجازت دینے یا سیکیورٹی گروپس کو مائیکروسافٹ 365 چیٹ یا مائیکروسافٹ ٹیمز میں ایجنٹ استعمال کرنے کی اجازت دینے کے لیے رسائی دینے کی اجازت دیتا ہے۔  |
   | Show to everyone in my org   | ٹیننٹ ایڈمن کو تنظیمی کیٹلاگ میں شامل کرنے کے لیے جمع کرائیں تاکہ تمام ٹیننٹ صارفین ایجنٹ کو شامل کر سکیں۔ ایجنٹ مائیکروسافٹ 365 کوپائلٹ اور مائیکروسافٹ ٹیمز میں Built by your org کے تحت ظاہر ہوگا۔    |
   | Download as a .zip    | مائیکروسافٹ ٹیمز میں کسٹم ایپ کے طور پر اپ لوڈ کرنے کے لیے زپ فائل کے طور پر ڈاؤن لوڈ کریں۔    |

![دستیابی کے آپشنز](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.ur.png)

1. آئیے ایجنٹ کو شیئر کرنے پر نظر ڈالیں۔ **Show to my teammates and shared users** کو منتخب کریں۔ ایک پین ظاہر ہوگا جہاں آپ ان صارفین کو تلاش کر سکتے ہیں جن کے ساتھ آپ ایجنٹ شیئر کرنا چاہتے ہیں، چاہے ان کا نام، ای میل یا سیکیورٹی گروپ درج کریں۔ آپ کسی بھی وقت اس فہرست کا جائزہ لے سکتے ہیں تاکہ یہ دیکھ سکیں کہ ایجنٹ تک کس کو رسائی حاصل ہے۔

   دو چیک باکسز بھی ہیں:
   - _Send an email invitation to new users_ - نئے صارفین کو ای میل دعوت موصول ہوگی۔
   - _Visible Built with Power Platform_ - ایجنٹ ٹیمز ایپ اسٹور کے Built with Power Platform سیکشن میں دستیاب ہو جاتا ہے۔
مزید تفصیلات کے لیے، [Teams اور Microsoft 365 کے لیے ایجنٹ کو کنیکٹ اور کنفیگر کریں](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez) پر رجوع کریں۔

**Cancel** یا **X** آئیکن کو منتخب کریں تاکہ پین سے باہر نکل سکیں۔

![ایجنٹ شیئر کریں](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.ur.png)

1. **Copy** کو منتخب کریں اور ایک نئے براؤزر ٹیب میں لنک پیسٹ کریں۔

![لنک کاپی کریں](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.ur.png)

1. Microsoft 365 Copilot لوڈ ہوگا اور ایک موڈل ظاہر ہوگا جس میں ایجنٹ ایپ کی تفصیلات ہوں گی۔ نوٹ کریں کہ ڈیولپر کا نام، مختصر تفصیل اور طویل تفصیل کیسے دکھائی گئی ہیں۔ یہ وہ تفصیلات ہیں جو پہلے مرحلے میں اپ ڈیٹ کی گئی تھیں۔

**Add** کو منتخب کریں۔

![دستیابی کے اختیارات](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.ur.png)

1. ہمارا ڈیکلریٹو ایجنٹ اگلے مرحلے میں لوڈ ہوگا۔ ہم دیکھ سکتے ہیں کہ اسٹارٹر پرامپٹس منتخب کرنے کے لیے موجود ہیں جو صارفین کو فوری مدد حاصل کرنے میں آسانی فراہم کرتے ہیں۔

ایک اسٹارٹر پرامپٹ منتخب کریں۔ میرے اسٹارٹر پرامپٹس میں، میں **Software Installation Help** پرامپٹ منتخب کروں گا جو خود بخود Copilot فیلڈ میں پیغام کو پریپاپولیٹ کرے گا۔ سوال کو Copilot پر جمع کریں۔

![اسٹارٹر پرامپٹ منتخب کریں](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.ur.png)

1. **Always allow** کو منتخب کریں تاکہ آپ کے ڈیکلریٹو ایجنٹ کو IT Expert پرامپٹ کو انووک کرنے کی اجازت دی جا سکے۔

![ہمیشہ اجازت دیں منتخب کریں](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.ur.png)

1. ایجنٹ پھر ہمارے **IT Expert** پرامپٹ کو انووک کرے گا اور ہم ماڈل کا جواب دیکھیں گے جو ہمارے ڈیکلریٹو ایجنٹ میں پیغام کے طور پر واپس آئے گا۔

![جواب](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.ur.png)

جواب کی مکمل تفصیلات دیکھنے کے لیے نیچے سکرول کریں۔

![جواب](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.ur.png)

1. لیکن _ہم کیسے جانیں_ کہ ڈیکلریٹو ایجنٹ نے پرامپٹ انووک کیا؟ 👀 تو، یہاں ایک ٹپ ہے!

!!! tip
    آپ Microsoft 365 Copilot میں ایجنٹس کو ٹیسٹ اور ڈیبگ کر سکتے ہیں [ڈیولپر موڈ](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez) کو فعال کر کے۔

پیغام Copilot فیلڈ میں درج کریں اور جمع کریں۔

    ```text
    -developer on
    ```

تصدیقی پیغام ظاہر ہوگا جو آپ کو بتائے گا کہ ڈیولپر موڈ اب فعال ہے۔

![ڈیولپر موڈ فعال](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.ur.png)

1. پرامپٹ انووک کرنے کے لیے درج ذیل سوال جمع کریں۔

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![سوال درج کریں](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.ur.png)

1. ہم دوبارہ اپنے **IT Expert** پرامپٹ سے ماڈل کا جواب دیکھیں گے جو پیغام کے طور پر واپس آئے گا۔ پیغام کے نیچے تک سکرول کریں اور ایک کارڈ ڈیبگ معلومات کے ساتھ ظاہر ہوگا۔

**Agent Debug Info** کو منتخب کر کے وسعت دیں۔

![ایجنٹ ڈیبگ معلومات](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.ur.png)

1. یہاں آپ کو ایجنٹ میٹا ڈیٹا کی معلومات ملے گی جو رن ٹائم پر ہوئی۔

![ایجنٹ ڈیبگ معلومات وسعت دی گئی](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.ur.png)

ہمارے کیس میں، ہم _Actions_ سیکشن پر توجہ مرکوز کریں گے۔

- **Matched actions** ان فنکشنز کی موجودہ حیثیت کو نمایاں کرتے ہیں جو ایپ کی تلاش کے دوران پائے گئے۔
- **Selected actions** ان فنکشنز کی موجودہ حیثیت کو نمایاں کرتے ہیں جو ایپ کے فیصلہ سازی کے عمل کی بنیاد پر چلانے کے لیے منتخب کیے گئے۔

![ایجنٹ ڈیبگ معلومات وسعت دی گئی](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.ur.png)

تو یہاں ہم دیکھ سکتے ہیں کہ ایجنٹ آرکیسٹریٹر نے ہمارے ڈیکلریٹو ایجنٹ کی ہدایات کے مطابق IT Expert پرامپٹ کو انووک کرنے کا انتخاب کیا۔ یہ مزید _Executed Actions_ سیکشن میں بیان کیا گیا ہے جو ہمیں یہ بھی بتاتا ہے کہ اس نے پرامپٹ کو کامیابی سے انووک کیا۔

![ایجنٹ ڈیبگ معلومات کا جائزہ](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.ur.png)

1. ڈیولپر موڈ کو بند کرنے کے لیے، پیغام Copilot فیلڈ میں درج کریں اور جمع کریں۔

    ```text
    -developer off
    ```

تصدیقی پیغام ظاہر ہوگا جو آپ کو بتائے گا کہ ڈیولپر موڈ غیر فعال ہے۔ زبردست، اب آپ جانتے ہیں کہ آپ کا ڈیکلریٹو ایجنٹ Microsoft 365 Copilot میں آپ کے پرامپٹ کو انووک کرتا ہے یا نہیں 🌞

![ڈیولپر موڈ غیر فعال](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.ur.png)

1. اب ہم اپنے ایجنٹ کو Microsoft Teams میں ٹیسٹ کریں گے۔ **Apps** پر جائیں اور بائیں جانب مینو سے **Teams** کو _Apps_ سیکشن کے تحت منتخب کریں۔

![Apps میں Teams منتخب کریں](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.ur.png)

1. Microsoft Teams ایک نئے براؤزر ٹیب میں لوڈ ہوگا اور پھر ہمیں Microsoft 365 Copilot کے استعمال کی شرائط پیش کی جائیں گی، **Agree** کو منتخب کریں۔

![Agree منتخب کریں](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.ur.png)

1. Microsoft 365 Copilot ڈیفالٹ کے طور پر لوڈ ہوگا، دائیں جانب پین میں آپ کے تمام دستیاب ایجنٹس کی فہرست ہوگی، بشمول **Contoso Tech Support Pro** ڈیکلریٹو ایجنٹ۔

![Microsoft 365 Copilot in Teams](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.ur.png)

1. بائیں جانب مینو میں **ellipsis icon (...)** کو منتخب کریں۔ یا تو **Contoso Tech Support Pro** کو سرچ فیلڈ میں تلاش کریں یا اگر آپ ایجنٹ کو دیکھتے ہیں تو اسے منتخب کریں۔

آپ اپنے ماؤس پر دائیں کلک کر کے ایجنٹ کو بائیں جانب مینو میں جلدی رسائی کے لیے **Pin** بھی کر سکتے ہیں۔

![ایجنٹ منتخب کریں اور پن کریں](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.ur.png)

1. پھر ہم اپنا ایجنٹ لوڈ کریں گے۔ اگلے مرحلے میں، ہم اپنے ایجنٹ کو ٹیسٹ کریں گے۔ درج ذیل پرامپٹ درج کریں اور جمع کریں۔

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![ایجنٹ پن کریں](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.ur.png)

1. ہمارے پرامپٹ سے ماڈل کا جواب پھر ظاہر ہوگا۔

![Teams میں جواب](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.ur.png)

چند منٹوں میں، آپ نے سیکھا کہ اپنے ڈیکلریٹو ایجنٹ کو کیسے پبلش کریں اور اسے Microsoft 365 Copilot اور Microsoft Teams میں ٹیسٹ کریں 😊

## ✅ مشن مکمل

مبارک ہو! 👏🏻 آپ نے Copilot Studio میں ایک ڈیکلریٹو ایجنٹ بنایا جہاں آپ نے ایک پرامپٹ شامل کیا، ایجنٹ کو پرامپٹ استعمال کرنے کی ہدایت دی اور اپنے ایجنٹ کو Microsoft 365 Copilot اور Microsoft Teams میں ٹیسٹ + پبلش کرنے کا طریقہ سیکھا۔

آپ کا ایجنٹ اب فعال ہے—تیار ہے مدد فراہم کرنے، مسائل حل کرنے، اور اندرونی صارفین کی خدمت کرنے کے لیے۔

یہ **Lab 03 - Microsoft Copilot Studio میں Microsoft 365 Copilot کے لیے ڈیکلریٹو ایجنٹ بنائیں** کا اختتام ہے، اگلے سبق پر جانے کے لیے نیچے دیے گئے لنک کو منتخب کریں۔

⏭️ [**نئے حل بنانے** کے سبق پر جائیں](../04-creating-a-solution/README.md)

اگلی بار تک، ہوشیار رہیں۔ انٹرپرائز کام کا مستقبل ایجنٹس کے ذریعے چلتا ہے—اور اب آپ جانتے ہیں کہ ایک کیسے بنانا ہے۔

## 📚 حکمت عملی وسائل

🔗 [Microsoft 365 Copilot کے لیے Copilot Studio میں ڈیکلریٹو ایجنٹ بنائیں](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [پرامپٹس شامل کریں](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [ایجنٹس کو دوسرے صارفین کے ساتھ شیئر کریں](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [اپنے ایجنٹ کے لیے پرامپٹس بنائیں](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="تجزیات" />

---

**ڈسکلیمر**:  
یہ دستاویز AI ترجمہ سروس [Co-op Translator](https://github.com/Azure/co-op-translator) کا استعمال کرتے ہوئے ترجمہ کی گئی ہے۔ ہم درستگی کے لیے کوشش کرتے ہیں، لیکن براہ کرم آگاہ رہیں کہ خودکار ترجمے میں غلطیاں یا غیر درستیاں ہو سکتی ہیں۔ اصل دستاویز کو اس کی اصل زبان میں مستند ذریعہ سمجھا جانا چاہیے۔ اہم معلومات کے لیے، پیشہ ور انسانی ترجمہ کی سفارش کی جاتی ہے۔ ہم اس ترجمے کے استعمال سے پیدا ہونے والی کسی بھی غلط فہمی یا غلط تشریح کے ذمہ دار نہیں ہیں۔