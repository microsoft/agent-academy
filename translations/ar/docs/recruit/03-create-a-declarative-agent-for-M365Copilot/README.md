<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-22T19:38:57+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "ar"
}
-->
# 🚨 المهمة 03: نشر وكيل تصريحي لـ Microsoft 365 Copilot

## 🕵️‍♂️ الاسم الرمزي: `عملية تمديد Copilot`

> **⏱️ مدة العملية:** `~60 دقيقة`

🎥 **شاهد الفيديو التوضيحي**

[![صورة مصغرة لفيديو إنشاء وكيل تصريحي](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.ar.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "شاهد الفيديو التوضيحي على YouTube")

## 🎯 ملخص المهمة

مرحبًا بك في أول مهمة ميدانية لك، صانع الوكلاء. لقد تم اختيارك لتصميم وتجهيز ونشر وكيل تصريحي - وهو عميل متخصص مدمج مباشرة في Microsoft 365 Copilot وMicrosoft Teams.

على عكس الوكلاء التقليديين، يعمل الوكلاء التصريحيون بمهمة محددة (تعليمات)، أدوات (مطالبات/موصلات)، ووصول استراتيجي إلى الذكاء الداخلي (مصادر المعرفة مثل SharePoint، Dataverse، والمزيد). مهمتك هي بناء هذا الوكيل باستخدام Microsoft Copilot Studio - مركز قيادة بدون كود حيث تظهر مهارات وهدف وكيلك إلى الحياة.

لنبدأ.

## 🔎 الأهداف

في هذه المهمة، ستتعلم:

1. فهم ماهية الوكلاء التصريحيين وكيفية توسيع Microsoft 365 Copilot بقدرات مخصصة
1. مقارنة بين Microsoft Copilot Studio وCopilot Studio agent builder لبناء الوكلاء التصريحيين
1. إنشاء وكيل تصريحي باستخدام اللغة الطبيعية من خلال تجربة إنشاء محادثة
1. إضافة مطالبات الذكاء الاصطناعي كأدوات لتعزيز معرفة وكيلك المتخصصة وقدراته على حل المشكلات
1. نشر واختبار وكيلك التصريحي في Microsoft 365 Copilot وMicrosoft Teams

## 🕵🏻‍♀️ ما هو الوكيل التصريحي لـ Microsoft 365 Copilot؟

الوكلاء التصريحيون هم نسخ مخصصة من Microsoft 365 Copilot. يمكنك تخصيص Microsoft 365 Copilot لتلبية احتياجات العمل المحددة من خلال تزويده بتعليمات لدعم عملية معينة، وتزويده بمعرفة المؤسسة، واستخدام الأدوات لتوسيع نطاقه. يتيح ذلك للمؤسسات إنشاء تجارب مخصصة بوظائف أكبر لمستخدميها.

## 🤔 لماذا أستخدم Microsoft Copilot Studio لبناء وكيل تصريحي؟

كمُصنِّع، ربما تكون قد استكشفت بالفعل [Copilot Studio agent builder](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez) في Microsoft 365 Copilot وربما تتساءل _لماذا بناء وكيل تصريحي في Microsoft Copilot Studio؟_

يقدم Microsoft Copilot Studio مجموعة شاملة من الأدوات والميزات للوكلاء التصريحيين التي تتجاوز حدود Copilot Studio agent builder. مثل Copilot Studio agent builder، لا تحتاج إلى معرفة البرمجة أو تطوير البرمجيات للبناء في Microsoft Copilot Studio. دعونا نوضح الفرق بين Copilot Studio Agent Builder وCopilot Studio لبناء الوكلاء التصريحيين.

### مقارنة الميزات

الجدول التالي يبرز الفروقات عند بناء وكيل تصريحي في Copilot Studio agent builder وCopilot Studio.

| الميزة                   | Copilot Studio agent builder في Microsoft 365 Copilot                          | توسيع Microsoft 365 Copilot في Copilot Studio                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **المعرفة**       | الويب، SharePoint، محادثات Microsoft Teams، رسائل Outlook، موصلات Copilot     | بحث الويب (عبر Bing)، SharePoint، Dataverse، Dynamics 365، موصلات Copilot  |
| **الأدوات**       | مترجم الكود، مولد الصور     | 1400+ موصلات Power Platform، موصلات مخصصة، مطالبات، استخدام الكمبيوتر، REST API، بروتوكول سياق النموذج   |
| **مطالبات البداية**         | تكوين مطالبات للمستخدمين للبدء بسرعة   | تكوين مطالبات للمستخدمين للبدء بسرعة  |
| **القناة**           | الوكيل منشور فقط في Microsoft 365 Copilot     | الوكيل منشور في Microsoft 365 Copilot وMicrosoft Teams      |
| **أذونات المشاركة**         | المستخدمون مشاهدون فقط    | يمكن للمستخدمين أن يكونوا محررين أو مشاهدين   |

هناك المزيد من القدرات المقدمة للوكلاء التصريحيين الذين يتم بناؤهم في Microsoft Copilot Studio والتي سنتعلم عنها لاحقًا.

!!! tip
    - لمعرفة المزيد عن Copilot Studio agent builder، توجه إلى [Copilot Developer Camp: Lab MAB1 - Build your first agent](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/)
    - لتطوير الوكيل التصريحي بشكل احترافي خارج Copilot Studio agent builder لـ Microsoft 365 Copilot، توجه إلى [Copilot Developer Camp: Lab MAB1 - Build your first agent](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/)

### توسيع Microsoft 365 Copilot باستخدام الوكلاء التصريحيين المبنيين في Copilot Studio

دعونا نوسع ما تعلمناه من جدول مقارنة الميزات.

#### التخصيص

- **تعليمات مفصلة**: يمكنك تقديم تعليمات وقدرات مفصلة لتحديد هدف وسلوك الوكيل بدقة.
  - يشمل ذلك استدعاء الأدوات ببساطة باستخدام اللغة الطبيعية.

- **الوصول إلى معرفة المؤسسة**: يتيح الوصول إلى معرفة المؤسسة التي تحترم أذونات المستخدم.
  - تكامل SharePoint
  - تكامل Dataverse
  - تكامل Dynamics 365
  - موصلات Microsoft 365 Copilot التي يتم تمكينها بواسطة مسؤول المؤسسة

   ![التخصيص](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.ar.png)

#### القدرات المتقدمة

- **التكامل مع الخدمات الخارجية**: يتيح لك الاختيار من بين 1400+ موصلات Power Platform التي تتكامل مع الخدمات الخارجية، مما يوفر وظائف أكثر تعقيدًا وقوة.
  - أمثلة تشمل [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez)، [ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez)، [Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez)، [SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) والمزيد
  - بدلاً من ذلك، يمكنك أيضًا الاستفادة من خوادم بروتوكول سياق النموذج وREST APIs مباشرة داخل وكيلك التصريحي

- **مطالبات الذكاء الاصطناعي**: استخدم مطالبة لتحليل وتحويل النصوص، المستندات، الصور والبيانات باستخدام اللغة الطبيعية واستنتاجات الذكاء الاصطناعي.
  - اختر نموذج المحادثة، اختر من بين أساسي (افتراضي)، قياسي، متميز
  - خيار استخدام نموذج Azure AI Foundry الخاص بك لتأسيس مطالبتك

- **خيارات تكوين النشر الأكثر تقدمًا**: اختر القنوات وحدد أذونات المستخدم.
  - النشر إلى Microsoft Teams، واجهة مستخدم مألوفة لمستخدميك لتبني أسرع
  - يمكن مشاركة أذونات التحرير لمنع نقطة الاعتماد الوحيدة على مالك الوكيل

   ![القدرات المتقدمة](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.ar.png)

باختصار، تتيح الوكلاء التصريحيين في Microsoft Copilot Studio تخصيص Microsoft 365 Copilot لتلبية احتياجات العمل من خلال دمج أنظمة معرفة المؤسسة، أدوات الاتصال بالخدمات الخارجية أو نماذج الذكاء الاصطناعي GPT.

## 🧪 المختبر 03: بناء وكيل تصريحي في Microsoft Copilot Studio لـ Microsoft 365 Copilot

سنتعلم بعد ذلك كيفية بناء وكيل تصريحي لحالة استخدام "من الأعمال إلى الموظف" والذي سيعمل كوكيل دعم فني لتكنولوجيا المعلومات.

- [3.1 إنشاء وكيل تصريحي](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 إنشاء وإضافة مطالبة لوكيلك التصريحي](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 تحديث التعليمات واختبار وكيلك التصريحي](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 نشر وكيلك التصريحي إلى Microsoft 365 Copilot وMicrosoft Teams](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    هذا المختبر سيحدد خطوات إضافة مطالبة كأداة. الدروس التالية ستتناول إضافة مصادر المعرفة وأدوات أخرى متاحة. نبقي الأمور بسيطة لتسهيل التعلم 😊

### 👩🏻‍💼 فهم الأعمال إلى الموظف (B2E)

يشير مصطلح الأعمال إلى الموظف (B2E) إلى التفاعلات والخدمات التي تقدمها الأعمال مباشرة لموظفيها. في سياق الوكيل، يعني استخدام القدرات المتقدمة لـ Copilot Studio لدعم وتعزيز تجربة العمل للموظفين داخل المؤسسة.

### ✨ سيناريو حالة الاستخدام

**بصفتي** موظفًا

**أريد** الحصول على مساعدة سريعة ودقيقة من وكيل دعم تكنولوجيا المعلومات لمشاكل مثل مشاكل الأجهزة، استكشاف أخطاء الشبكة، إعداد الطابعة

**حتى أتمكن من** البقاء منتجًا وحل المشكلات التقنية دون تأخير

لنبدأ!

### المتطلبات الأساسية

- يجب أن يكون لدى المصنّعين أذونات لإنشاء والوصول إلى بيئة Copilot Studio.

!!! note "ملاحظة الترخيص"
    هذا المختبر سيحدد خطوات إضافة مطالبة كأداة. الدروس التالية ستتناول إضافة مصادر المعرفة وأدوات أخرى متاحة. نبقي الأمور بسيطة لتسهيل التعلم 😊
  
    لا تحتاج إلى ترخيص مستخدم Microsoft 365 Copilot لنشر وكيلك التصريحي المبني في Copilot Studio إلى Microsoft 365 Copilot. ومع ذلك، **المستخدمون** للوكيل التصريحي المنشور في Microsoft 365 Copilot يحتاجون إلى ترخيص مستخدم Microsoft 365 Copilot.

### 3.1 إنشاء وكيل تصريحي

!!! warning "قد تختلف أسئلة Copilot عبر الجلسات"

    قد تختلف تجربة إنشاء المحادثة في Copilot في كل مرة حيث قد تكون الأسئلة المقدمة للإرشاد مختلفة قليلاً عن السابق.

1. انتقل إلى [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/) وقم بتسجيل الدخول باستخدام بيانات اعتمادك. تأكد من التبديل إلى البيئة التي تستخدمها لهذه المختبرات.

1. اختر **Agents** من القائمة ثم اختر **Copilot for Microsoft 365**.

       ![Copilot for Microsoft 365](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.ar.png)

1. بعد ذلك، سنقوم بإنشاء وكيل تصريحي عن طريق اختيار **+ Add** agent.

       ![Add Agent](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.ar.png)

1. سنرى بعد ذلك تجربة إنشاء المحادثة حيث يمكننا التحدث بلغة طبيعية مع Copilot لوصف الوكيل التصريحي الذي نريد بناؤه، واستخدام الأسئلة المقدمة للإرشاد.

       دعونا ندخل وصفًا مفصلًا يحدد ما يلي،  
       - مهمة الوكيل  
       - نوع الاستفسارات التي يمكنه التعامل معها  
       - شكل استجابته  
       - هدف الوكيل  
    
       ```text
       أنت محترف في تكنولوجيا المعلومات ذو مهارات وخبرة عالية متخصص في مجموعة واسعة من أنظمة الكمبيوتر، الشبكات، والأمن السيبراني. يمكنك تشخيص وحل المشكلات التقنية، شرح الحلول بطريقة واضحة ومفهومة للمستخدمين من جميع المستويات التقنية، وتقديم إرشادات حول أفضل الممارسات. يجب أن تكون موجزًا وغنيًا بالمعلومات، باستخدام تعليمات خطوة بخطوة مع نقاط عند الاقتضاء. هدفك هو مساعدة المستخدم على فهم المشكلة وكيفية حلها بفعالية.
       ```
    
       ![Create Prompt](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.ar.png)

1. بعد إرسال المطالبة، سيظهر تحديث ملحوظ على اللوحة الجانبية اليمنى مع التفاصيل والتعليمات الخاصة بالوكيل كما هو محدد في المطالبة. بعد ذلك سيتم سؤالك لتأكيد اسم وكيلك وسيقترح Copilot اسمًا.

       إما أن تدخل `yes` لقبول الاسم المقترح أو تدخل اسمًا مختلفًا مثل التالي،
    
       ```text
       Contoso Tech Support Pro
       ```
    
       ![Instructions updated](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.ar.png)

    !!! warning "تذكير: قد تختلف أسئلة Copilot عبر الجلسات"

        قد تختلف تجربة إنشاء المحادثة في Copilot في كل مرة حيث قد تكون الأسئلة المقدمة للإرشاد مختلفة قليلاً عن السابق.

1. تم الآن تحديث اسم الوكيل كما هو موضح على اللوحة الجانبية اليمنى. يتم الآن سؤالك لتعديل التعليمات الخاصة بالوكيل. ما اقترحه Copilot يبدو رائعًا لذا سنطلب منه استخدام اقتراحاته الخاصة. سنكتب التالي،

      ```text
      Focus on the IT issues and scenarios you've identified
      ```

      ![Name updated](../../../../../translated_images/3.1_06_NameUpdated.b6b8cc7c670b77c635d6b54b723e1a83f63ec288c0eab260fdbf88c7ec163003.ar.png)

1. بعد ذلك سيتم سؤالك إذا كنت تريد إضافة أي مواقع ويب أو معرفة يمكن الوصول إليها علنًا. سنرد بـ `No` حيث سنضيف فقط مطالبة لوكيلنا التصريحي في هذا المختبر. المختبرات اللاحقة في الدروس المستقبلية ستغطي مصادر المعرفة.

      ![No websites or knowledge sources added](../../../../../translated_images/3.1_07_KnowledgeSources.2001faa25aab922f38da82a8602e68b3ad7153941e87bab0949177e0b2ab0c08.ar.png)

1. سنرى بعد ذلك ردًا من Copilot بأننا قد انتهينا الآن من تكوين وكيلنا باستخدام تجربة إنشاء المحادثة في Copilot. ومع ذلك، دعونا نعدله أكثر من خلال تحديد أنه يجب أن يكون موجزًا وغنيًا بالمعلومات مع نقاط، يستخدم التعاطف في التواصل، ويطلب ردود الفعل بعد تقديم الحلول.

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

      ![Update agent instructions](../../../../../translated_images/3.1_08_FurtherRefinements.993926c4e55cc5133413f4e10a61a6ed43351d070e791db0ee5547ea83f46473.ar.png)

1. يؤكد Copilot أن التعليمات قد تم تحديثها. انقر على **Create** لتوفير الوكيل التصريحي لـ Microsoft 365 Copilot.

      ![Create agent](../../../../../translated_images/3.1_09_CreateDeclarativeAgent.71442cd4e18105359e55016d92e54b74ac18977bb535c637a05bac0d3680a3c5.ar.png)

    !!! warning "تذكير: قد تختلف أسئلة Copilot عبر الجلسات"

        قد تختلف تجربة إنشاء المحادثة في Copilot في كل مرة حيث قد تكون الأسئلة المقدمة للإرشاد مختلفة قليلاً عن السابق.

1. بمجرد توفير الوكيل، سترى تفاصيل الوكيل التي تحتوي على الوصف والتعليمات المحددة أثناء تجربة إنشاء المحادثة في Copilot.
![تفاصيل الوكيل](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.ar.png)

قم بالتمرير لأسفل اللوحة وسترى أيضًا إمكانيات إضافة المعرفة، تمكين البحث عبر الإنترنت (عبر Bing)، مطالبات البداية وتفاصيل نشر الوكيل التصريحي لـ Microsoft 365 Copilot. ستظهر مطالبات البداية أيضًا في لوحة الاختبار على الجانب الأيمن. يمكن للمستخدمين اختيار هذه المطالبات لبدء التفاعل مع الوكيل.

![مطالبات مقترحة](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.ar.png)

1. في قسم التفاصيل الخاص بالوكيل، لديك القدرة على تغيير رمز الوكيل أيضًا. اختر **تحرير**.

![تحرير التفاصيل](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.ar.png)

هنا يمكنك تغيير الرمز ولون الخلفية. اختر **حفظ** ثم اختر **حفظ** مرة أخرى لتحديث تفاصيل الوكيل.

![تغيير الرمز](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.ar.png)

1. دعونا نجري اختبارًا سريعًا للوكيل الذي قمنا بإنشائه. اختر أحد **مطالبات البداية** في لوحة الاختبار على الجانب الأيمن.

![اختبار مطالبة البداية](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.ar.png)

1. سيستجيب الوكيل بعد ذلك. لاحظ كيف التزم بالتعليمات من خلال تقديم نقاط رئيسية في أجزاء سهلة الفهم، واستخدم التعاطف في استجابته.

إذا قمت بالتمرير إلى أسفل الرسالة، لاحظ كيف طلب أيضًا ملاحظات بعد تقديم الحل كما هو مطلوب.

![استجابة من الاختبار](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.ar.png)

في غضون دقائق قليلة، قمت بإضافة وكيل تصريحي لـ Microsoft 365 Copilot في Copilot Studio 🙌🏻

بعد ذلك سنتعلم كيفية إضافة أداة إلى وكيلنا، وسنقوم بإنشاء مطالبة.

### 3.2 إنشاء وإضافة مطالبة لوكيلك التصريحي

1. قم بالتمرير لأسفل إلى قسم **الأدوات** واختر **+ إضافة أداة**

![إضافة أداة](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.ar.png)

1. ستظهر نافذة الأدوات وسيتم عرض قائمة بوصلات Power Platform. لإضافة مطالبة، اختر **+ أداة جديدة**.

![أداة جديدة](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.ar.png)

1. ستظهر قائمة بالأدوات الأخرى - مطالبة، موصل مخصص، REST API وبروتوكول سياق النموذج. إذا كانت مؤسستك تستوفي [متطلبات استخدام الكمبيوتر](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez)، فستظهر أيضًا في القائمة. اختر **مطالبة**.

![اختيار مطالبة](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.ar.png)

1. أدخل اسمًا للمطالبة. دعونا نسمي مطالبتنا `خبير تكنولوجيا المعلومات`.

![إدخال الاسم](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.ar.png)

1. اختر **رمز السهم** بجانب **النموذج** لرؤية نماذج الدردشة المختلفة التي يمكنك الاختيار منها. بشكل افتراضي، يتم اختيار نموذج **Basic GPT-4.1 mini** ويمكنك أيضًا استخدام النموذج الخاص بك باستخدام نماذج Azure AI Foundry. سنلتزم بالنموذج الافتراضي المختار.

![تغيير النموذج](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.ar.png)

1. بعد ذلك، سنوفر تعليمات لمطالبتنا. هناك 3 طرق يمكنك الاختيار منها:

- استخدام Copilot لإنشاء تعليمات بناءً على وصفك لما تريد أن تفعله المطالبة.
- استخدام قالب مسبق من مكتبة المطالبات لإنشاء مطالبة.
- إدخال تعليماتك يدويًا.

1. دعونا نجرب أولاً استخدام Copilot لإنشاء تعليمات بناءً على وصف تم إدخاله. أدخل ما يلي في حقل Copilot وقم بالإرسال.

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

![البدء مع Copilot](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.ar.png)

1. سيبدأ Copilot بعد ذلك في إنشاء مطالبة لنا.

![Copilot يصيغ المطالبات](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.ar.png)

1. ستظهر تعليمات المسودة التي أنشأها Copilot.

![تعليمات المسودة التي أنشأها Copilot](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.ar.png)

1. قم بالتمرير لأسفل إلى نهاية التعليمات وسترى معلمة إدخال المستخدم التي تم تعريفها بالفعل بواسطة Copilot. لديك الخيار:
- الاحتفاظ بتعليمات المسودة التي تم إنشاؤها.
- تحديث تعليمات المسودة باستخدام Copilot.
- مسح تعليمات المسودة.

قم بمسح تعليمات المسودة عن طريق اختيار رمز **سلة المهملات** وسنجرب بعد ذلك مكتبة المطالبات.

![تعليمات المطالبة](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.ar.png)

1. اختر رابط **قالب المطالبة**.

![اختيار قالب المطالبة](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.ar.png)

1. سترى قائمة بقوالب المطالبات للاختيار منها. هذه القوالب من [مكتبة مطالبات Power Platform](https://aka.ms/power-prompts).

![مكتبة المطالبات](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.ar.png)

1. ابحث عن مطالبة `خبير تكنولوجيا المعلومات` واخترها.

![اختيار مطالبة خبير تكنولوجيا المعلومات](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.ar.png)

1. ستتم إضافة المطالبة كتعليمات مع معلمة الإدخال كما هو محدد بواسطة قالب المطالبة. مشابهًا للطريقة التي اتبعناها عند توفير تعليمات لوكيلنا أثناء تجربة إنشاء المحادثة مع Copilot، يحدد قالب المطالبة هذا:
- مهمة،
- نوع الاستفسارات التي يمكنه التعامل معها،
- وصيغة استجابته وهدف المطالبة.

![تعليمات المطالبة](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.ar.png)

1. قم بمسح التعليمات وسنجرب بعد ذلك إدخال التعليمات يدويًا. سنستخدم [مطالبة خبير تكنولوجيا المعلومات](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/) من [مكتبة مطالبات Power Platform](https://aka.ms/power-prompts). انسخ والصق المطالبة.

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

![تعليمات المطالبة](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.ar.png)

1. بعد ذلك، يمكننا تعريف معلمات إدخال المستخدم لمطالبتنا. يمكن أن تكون هذه نصوص وصور، وبيانات نموذجية للاختبار. هناك أيضًا إمكانية ربط المطالبة بمعرفة من جداول Dataverse. في هذا التمرين، لدينا فقط إدخال مستخدم واحد لتعريفه وهو إدخال المشكلة. هذا حاليًا عنصر نائب في مطالبتنا كـ `[Problem]`. سنقوم الآن بتكوين هذا الإدخال إما عن طريق إدخال الحرف `/` أو اختيار **+إضافة محتوى** ثم اختيار **نص**.

![إدخال النص](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.ar.png)

1. يمكننا الآن إدخال اسم لمعلمة الإدخال وبيانات نموذجية.

أدخل ما يلي كاسم:

    ```text
    problem input
    ```

أدخل ما يلي كبيانات نموذجية:

    ```text
    My laptop gets an error with a blue screen
    ```

ثم اختر **إغلاق**.

![تكوين إدخال المشكلة](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.ar.png)

1. ستتم إضافة معلمة إدخال المشكلة إلى التعليمات مع البيانات النموذجية التي تم تكوينها. يمكننا الآن اختبار مطالبتنا!

![إضافة إدخال المشكلة](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.ar.png)

1. اختر **اختبار** لاختبار المطالبة.

![اختبار التعليمات](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.ar.png)

1. ستظهر الاستجابة بعد ذلك. لاحظ كيف توفر الاستجابة عناوين مع نقاط رئيسية وفقًا للتعليمات. قم بالتمرير لأسفل وراجع بقية استجابة النموذج.

![استجابة النموذج](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.ar.png)

1. قبل أن نحفظ مطالبتنا، دعونا نتعرف على الإعدادات التي يمكن تكوينها لهذه المطالبة. اختر رمز **النقاط الثلاث (...)**.

![إعدادات المطالبة](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.ar.png)

1. هنا سنرى ثلاثة إعدادات يمكن تكوينها:

- **درجة الحرارة**: درجات الحرارة المنخفضة تؤدي إلى نتائج متوقعة، بينما تسمح درجات الحرارة العالية باستجابات أكثر تنوعًا أو إبداعًا.
- **استرجاع السجلات**: تحديد عدد السجلات المسترجعة لمصادر المعرفة الخاصة بك.
- **تضمين الروابط في الاستجابة**: عند التحديد، تتضمن الاستجابة روابط استشهاد للسجلات المسترجعة.

اختر رمز **X** للخروج من الإعدادات.

![تكوين الإعدادات](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.ar.png)

1. اختر **حفظ** لحفظ المطالبة.

![حفظ المطالبة](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.ar.png)

1. بعد ذلك، اختر **إضافة إلى الوكيل** لإضافة المطالبة إلى وكيلنا التصريحي.

![تعليمات المطالبة](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.ar.png)

1. ستظهر المطالبة الآن تحت الأدوات 🙌🏻

![إضافة المطالبة](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.ar.png)

سنقوم بعد ذلك بتحديث تعليماتنا لاستدعاء المطالبة واختبار وكيلنا التصريحي.

### 3.3 تحديث التعليمات واختبار وكيلك التصريحي

1. قم بالتمرير لأعلى إلى قسم **التفاصيل** واختر **تحرير**. سيتيح ذلك تحرير الحقول.

![اختيار تحرير](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.ar.png)

1. يمكننا الآن تحديث تعليماتنا لاستدعاء المطالبة بالإشارة إلى اسم المطالبة. قم بمسح التعليمات، ثم انسخ والصق ما يلي.

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

لاحظ كيف أن الجملة النهائية توجه الوكيل لاستخدام السؤال الذي طرحه المستخدم كقيمة لمعلمة إدخال المشكلة. سيستخدم الوكيل السؤال كإدخال المشكلة للمطالبة. بعد ذلك، اختر **حفظ**.

![تحديث التعليمات لاستدعاء المطالبة](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.ar.png)

1. نحن الآن جاهزون لاختبار التعليمات المحدثة لوكيلنا التصريحي. اختر رمز **التحديث** في لوحة الاختبار.

![اختيار رمز التحديث](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.ar.png)

1. بعد ذلك، أدخل المطالبة التالية أدناه وقم بالإرسال.

```text
هل يمكنك مساعدتي، جهاز الكمبيوتر المحمول الخاص بي يواجه شاشة زرقاء
```

![إجراء الاختبار](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.ar.png)

1. يستدعي الوكيل المطالبة ويستجيب.

![تعليمات المطالبة](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.ar.png)

دعونا الآن ننشر وكيلنا التصريحي 😃

### 3.4 نشر وكيلك التصريحي إلى Microsoft 365 Copilot وMicrosoft Teams

1. اختر **نشر**.

![نشر الوكيل](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.ar.png)

1. ستظهر نافذة تعرض القنوات وتفاصيل النشر التي يمكن تحديثها.

- القنوات: سيتم نشر الوكيل إلى Microsoft 365 Copilot وMicrosoft Teams.
- معلومات تطبيق الوكيل: هذه هي المعلومات التي ستظهر عندما يضيف المستخدم الوكيل إلى Microsoft 365 Copilot أو في Microsoft Teams. هذه الحقول يمكن تحديثها حسب الحاجة.

![تفاصيل تطبيق الوكيل](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.ar.png)

1. على سبيل المثال، يمكنك تحديث **الوصف القصير**، **الوصف الطويل**، **اسم المطور** باسمك.

!!! tip
إذا لم تظهر جميع الحقول على متصفحك، حاول التصغير مثلًا إلى 75%.

اختر **نشر**. سيبدأ Copilot Studio بعد ذلك في نشر الوكيل.

![نشر الوكيل](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.ar.png)

1. عند اكتمال النشر، سنرى [خيارات التوفر](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez) للوكيل.

| خيار التوفر | الوصف |
| ---------- | ---------- |
| رابط المشاركة | انسخ الرابط لتوزيعه مع المستخدمين المشتركين لفتح الوكيل في Microsoft 365 Copilot |
| إظهاره لزملائي والمستخدمين المشتركين | يتيح لك منح الوصول للآخرين للمشاركة في إنشاء الوكيل، أو لمجموعات الأمان لمنحهم الوصول لاستخدام الوكيل في Microsoft 365 Chat أو Microsoft Teams. |
| إظهاره للجميع في مؤسستي | إرسال إلى مسؤول المستأجر لإضافته إلى الكتالوج التنظيمي لجميع مستخدمي المستأجر لإضافة الوكيل. سيظهر الوكيل تحت "تم إنشاؤه بواسطة مؤسستك" في Microsoft 365 Copilot وفي Microsoft Teams |
| تنزيل كملف .zip | تنزيل كملف مضغوط لتحميله كتطبيق مخصص في Microsoft Teams |

![خيارات التوفر](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.ar.png)

1. دعونا نلقي نظرة على مشاركة الوكيل. اختر **إظهاره لزملائي والمستخدمين المشتركين**. ستظهر لوحة حيث يمكنك البحث عن المستخدمين الذين تريد مشاركة الوكيل معهم إما عن طريق إدخال اسمهم، بريد إلكتروني أو مجموعة أمان. يمكنك مراجعة هذه القائمة في أي وقت لتعديل من لديه حق الوصول إلى الوكيل.

هناك أيضًا خانتان:
- _إرسال دعوة عبر البريد الإلكتروني للمستخدمين الجدد_ - سيحصل المستخدمون الجدد على دعوة عبر البريد الإلكتروني.
- _مرئي "تم إنشاؤه باستخدام Power Platform"_ - يصبح الوكيل متاحًا في قسم "تم إنشاؤه باستخدام Power Platform" في متجر تطبيقات Teams.
للمزيد من التفاصيل، راجع [الاتصال وتكوين وكيل لـ Teams و Microsoft 365](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez).

اختر **إلغاء** أو رمز **X** للخروج من اللوحة.

![مشاركة الوكيل](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.ar.png)

1. اختر **نسخ** وفي علامة تبويب جديدة في المتصفح، قم بلصق الرابط.

![نسخ الرابط](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.ar.png)

1. سيتم تحميل Microsoft 365 Copilot وستظهر نافذة تحتوي على تفاصيل تطبيق الوكيل. لاحظ كيف يتم عرض اسم المطور والوصف القصير والوصف الطويل. هذه التفاصيل مأخوذة من معلومات النشر التي تم تحديثها في خطوة سابقة.

اختر **إضافة**.

![خيارات التوفر](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.ar.png)

1. سيتم تحميل وكيلنا التصريحي بعد ذلك. يمكننا رؤية مطالبات البداية للاختيار منها والتي تمكن المستخدمين بسرعة من طلب المساعدة الفورية.

اختر إحدى مطالبات البداية. في مطالبي البداية، سأختار مطالبة **مساعدة تثبيت البرامج** والتي ستملأ تلقائيًا حقل رسالة Copilot. قم بإرسال السؤال إلى Copilot.

![اختيار مطالبة البداية](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.ar.png)

1. اختر **السماح دائمًا** لمنح وكيلك التصريحي الإذن لاستدعاء مطالبة خبير تكنولوجيا المعلومات.

![اختيار السماح دائمًا](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.ar.png)

1. سيقوم الوكيل بعد ذلك باستدعاء مطالبة **خبير تكنولوجيا المعلومات** وسنرى استجابة النموذج تظهر كرسالة في وكيلنا التصريحي.

![الاستجابة](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.ar.png)

قم بالتمرير لأسفل لرؤية التفاصيل الكاملة للاستجابة.

![الاستجابة](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.ar.png)

1. ولكن _كيف نعرف_ أن الوكيل التصريحي استدعى المطالبة؟ 👀 حسنًا، إليك نصيحة!

!!! tip
يمكنك اختبار وتصحيح الوكلاء في Microsoft 365 Copilot عن طريق تمكين [وضع المطور](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez).

أدخل ما يلي في حقل رسالة Copilot وقم بالإرسال.

    ```text
    -developer on
    ```

ستظهر رسالة تأكيد لتخبرك أن وضع المطور قد تم تمكينه.

![تم تمكين وضع المطور](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.ar.png)

1. قم بإرسال السؤال التالي لاستدعاء المطالبة.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![إدخال السؤال](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.ar.png)

1. سنرى استجابة النموذج من مطالبة **خبير تكنولوجيا المعلومات** مرة أخرى تظهر كرسالة. قم بالتمرير لأسفل إلى أسفل الرسالة وستظهر بطاقة تحتوي على معلومات التصحيح.

قم بتوسيع **معلومات تصحيح الوكيل** عن طريق اختيارها.

![معلومات تصحيح الوكيل](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.ar.png)

1. هنا ستجد معلومات حول بيانات الوكيل التي حدثت أثناء وقت التشغيل.

![معلومات تصحيح الوكيل الموسعة](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.ar.png)

في حالتنا، سنركز على قسم _الإجراءات_

- **الإجراءات المطابقة** تسلط الضوء على حالة الوظائف الحالية التي تم العثور عليها أثناء بحث التطبيق.
- **الإجراءات المختارة** تسلط الضوء على حالة الوظائف الحالية التي تم اختيارها للتنفيذ بناءً على عملية اتخاذ القرار للتطبيق.

![معلومات تصحيح الوكيل الموسعة](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.ar.png)

هنا يمكننا أن نرى أن منسق الوكيل اختار استدعاء مطالبة خبير تكنولوجيا المعلومات وفقًا لتعليمات وكيلنا التصريحي. يتم توضيح ذلك بشكل أكبر في قسم _الإجراءات المنفذة_ الذي يخبرنا أيضًا أنه تم استدعاء المطالبة بنجاح.

![مراجعة معلومات تصحيح الوكيل](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.ar.png)

1. لإيقاف تشغيل وضع المطور، أدخل ما يلي في حقل رسالة Copilot وقم بالإرسال.

    ```text
    -developer off
    ```

ستظهر رسالة تأكيد لتخبرك أن وضع المطور قد تم تعطيله. رائع، الآن تعرف كيفية التحقق مما إذا كان وكيلك التصريحي في Microsoft 365 Copilot قد استدعى مطالبتك 🌞

![تم تعطيل وضع المطور](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.ar.png)

1. سنقوم الآن باختبار وكيلنا في Microsoft Teams. انتقل إلى **التطبيقات** باستخدام القائمة الجانبية اليسرى واختر **Teams** ضمن قسم _التطبيقات_.

![اختيار Teams في التطبيقات](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.ar.png)

1. سيتم تحميل Microsoft Teams بعد ذلك في علامة تبويب جديدة في المتصفح وسنُعرض بعد ذلك شروط الاستخدام لـ Microsoft 365 Copilot، اختر **موافق**.

![اختيار موافق](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.ar.png)

1. سيتم تحميل Microsoft 365 Copilot افتراضيًا، مع عرض اللوحة الجانبية اليمنى جميع الوكلاء المتاحين لديك، بما في ذلك الوكيل التصريحي **Contoso Tech Support Pro**.

![Microsoft 365 Copilot في Teams](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.ar.png)

1. اختر **رمز النقاط الثلاث (...)** في القائمة الجانبية اليسرى. إما أن تبحث عن **Contoso Tech Support Pro** في حقل البحث أو إذا رأيت الوكيل، اختره.

يمكنك أيضًا النقر بزر الماوس الأيمن لاختيار **تثبيت** الوكيل للوصول السريع في القائمة الجانبية اليسرى في Microsoft Teams.

![اختيار وتثبيت الوكيل](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.ar.png)

1. سنرى بعد ذلك تحميل وكيلنا. 1. دعونا نختبر وكيلنا. أدخل المطالبة التالية وقم بالإرسال.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![تثبيت الوكيل](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.ar.png)

1. سيتم عرض استجابة النموذج من مطالبتنا.

![الاستجابة في Teams](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.ar.png)

في غضون دقائق قليلة، تعلمت كيفية نشر وكيلك التصريحي واختباره في Microsoft 365 Copilot وفي Microsoft Teams 😊

## ✅ المهمة مكتملة

تهانينا! 👏🏻 لقد قمت ببناء وكيل تصريحي في Copilot Studio حيث أضفت مطالبة، وأعطيت تعليمات للوكيل لاستخدام المطالبة وكيفية اختبار + نشر وكيلك إلى Microsoft 365 Copilot وMicrosoft Teams.

وكيلك الآن في الخدمة—جاهز للمساعدة، وحل المشكلات، وخدمة المستخدمين الداخليين عند الطلب.

هذا هو نهاية **المختبر 03 - بناء وكيل تصريحي في Microsoft Copilot Studio لـ Microsoft 365 Copilot**، اختر الرابط أدناه للانتقال إلى الدرس التالي.

⏭️ [الانتقال إلى درس **إنشاء حل جديد**](../04-creating-a-solution/README.md)

حتى المرة القادمة، كن حاد الذهن. مستقبل العمل المؤسسي يعتمد على الوكلاء—والآن تعرف كيفية بناء واحد.

## 📚 موارد تكتيكية

🔗 [بناء وكيل تصريحي في Microsoft Copilot Studio لـ Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [إضافة مطالبات](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [مشاركة الوكلاء مع مستخدمين آخرين](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [بناء مطالبات لوكيلك](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="تحليلات" />

---

**إخلاء المسؤولية**:  
تم ترجمة هذا المستند باستخدام خدمة الترجمة بالذكاء الاصطناعي [Co-op Translator](https://github.com/Azure/co-op-translator). بينما نسعى لتحقيق الدقة، يرجى العلم أن الترجمات الآلية قد تحتوي على أخطاء أو عدم دقة. يجب اعتبار المستند الأصلي بلغته الأصلية المصدر الرسمي. للحصول على معلومات حاسمة، يُوصى بالترجمة البشرية الاحترافية. نحن غير مسؤولين عن أي سوء فهم أو تفسيرات خاطئة تنشأ عن استخدام هذه الترجمة.