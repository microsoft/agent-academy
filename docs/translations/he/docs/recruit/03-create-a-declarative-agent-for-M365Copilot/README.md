<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-17T01:17:13+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "he"
}
-->
# 🚨 משימה 03: פריסת סוכן דקלרטיבי עבור Microsoft 365 Copilot

## 🕵️‍♂️ שם קוד: `מבצע הרחבת קופיילוט`

> **⏱️ חלון זמן המבצע:** `~60 דקות`

🎥 **צפו בהדרכה**

[![תמונה ממוזערת של וידאו יצירת סוכן דקלרטיבי](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.he.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "צפו בהדרכה ביוטיוב")

## 🎯 תדריך משימה

ברוכים הבאים למשימה הראשונה שלכם בשטח, יוצרי סוכנים. נבחרתם לעצב, לצייד ולפרוס סוכן דקלרטיבי—אופרטיבי מיוחד המוטמע ישירות ב-Microsoft 365 Copilot וב-Microsoft Teams.

בניגוד לסוכנים מסורתיים, סוכנים דקלרטיביים פועלים עם משימה מוגדרת (הוראות), כלים (הנחיות/מחברים) וגישה אסטרטגית למודיעין פנימי (מקורות ידע כמו SharePoint, Dataverse ועוד). תפקידכם הוא לבנות את הסוכן הזה באמצעות Microsoft Copilot Studio—מרכז פיקוד ללא קוד שבו הכישורים והמטרה של הסוכן מתעוררים לחיים.

בואו נתחיל.

## 🔎 מטרות

במשימה זו תלמדו:

1. להבין מה הם סוכנים דקלרטיביים וכיצד הם מרחיבים את Microsoft 365 Copilot עם יכולות מותאמות אישית
1. להשוות בין Microsoft Copilot Studio לבין בונה הסוכנים של Copilot Studio לבניית סוכנים דקלרטיביים
1. ליצור סוכן דקלרטיבי באמצעות שפה טבעית דרך חוויית יצירה שיחתית
1. להוסיף הנחיות AI ככלים לשיפור הידע המיוחד ויכולות פתרון הבעיות של הסוכן
1. לפרסם ולבדוק את הסוכן הדקלרטיבי שלכם ב-Microsoft 365 Copilot וב-Microsoft Teams

## 🕵🏻‍♀️ מהו סוכן דקלרטיבי עבור Microsoft 365 Copilot?

סוכנים דקלרטיביים הם גרסאות מותאמות אישית של Microsoft 365 Copilot. ניתן להתאים את Microsoft 365 Copilot לצרכים עסקיים ספציפיים על ידי מתן הוראות לתמיכה בתהליך מסוים, חיבורו לידע ארגוני ושימוש בכלים להרחבה רחבה יותר. זה מאפשר לארגונים ליצור חוויות מותאמות אישית עם פונקציונליות רבה יותר עבור המשתמשים שלהם.

## 🤔 למה להשתמש ב-Microsoft Copilot Studio לבניית סוכן דקלרטיבי?

כמפתח, ייתכן שכבר חקרתם את [בונה הסוכנים של Copilot Studio](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez) ב-Microsoft 365 Copilot ולכן אתם כנראה תוהים _למה לבנות סוכן דקלרטיבי ב-Microsoft Copilot Studio?_

Microsoft Copilot Studio מציע סט כלים ותכונות מקיף עבור סוכנים דקלרטיביים שמרחיב מעבר למגבלות של בונה הסוכנים של Copilot Studio. בדומה לבונה הסוכנים של Copilot Studio, אין צורך לדעת תכנות או פיתוח תוכנה כדי לבנות ב-Microsoft Copilot Studio. בואו נפרט את ההבדלים בין בונה הסוכנים של Copilot Studio לבין Copilot Studio לבניית סוכנים דקלרטיביים.

### השוואת תכונות

הטבלה הבאה מדגישה את ההבדלים בבניית סוכן דקלרטיבי ב-Copilot Studio agent builder וב-Copilot Studio.

| תכונה                   | בונה הסוכנים של Copilot Studio ב-Microsoft 365 Copilot                          | הרחבת Microsoft 365 Copilot ב-Copilot Studio                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **ידע**       | אינטרנט, SharePoint, צ'אטים ב-Microsoft Teams, מיילים ב-Outlook, מחברי Copilot     | חיפוש באינטרנט (דרך Bing), SharePoint, Dataverse, Dynamics 365, מחברי Copilot  |
| **כלים**       | מפרש קוד, יוצר תמונות     | 1400+ מחברים של Power Platform, מחברים מותאמים אישית, הנחיות, שימוש במחשב, REST API, Model Context Protocol   |
| **הנחיות התחלתיות**         | הגדרת הנחיות למשתמשים להתחלה מהירה   | הגדרת הנחיות למשתמשים להתחלה מהירה  |
| **ערוץ**           | סוכן מפורסם רק ל-Microsoft 365 Copilot     | סוכן מפורסם ל-Microsoft 365 Copilot ול-Microsoft Teams      |
| **הרשאות שיתוף**         | משתמשים הם רק צופים    | משתמשים יכולים להיות עורכים או צופים   |

ישנן יכולות נוספות המוצעות עבור סוכנים דקלרטיביים שנבנו ב-Microsoft Copilot Studio עליהן נלמד בהמשך.

!!! tip
    - למידע נוסף על בונה הסוכנים של Copilot Studio, בקרו ב-[מחנה המפתחים של Copilot: מעבדה MAB1 - בניית הסוכן הראשון שלכם](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/)
    - לפיתוח מתקדם של הרחבת סוכן דקלרטיבי מעבר לבונה הסוכנים של Copilot Studio עבור Microsoft 365 Copilot, בקרו ב-[מחנה המפתחים של Copilot: מעבדה MAB1 - בניית הסוכן הראשון שלכם](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/)

### הרחבת Microsoft 365 Copilot עם סוכנים דקלרטיביים שנבנו ב-Copilot Studio

בואו נרחיב את מה שלמדנו מטבלת השוואת התכונות.

#### התאמה אישית

- **הוראות מפורטות**: ניתן לספק הוראות מפורטות ויכולות כדי להגדיר את מטרת הסוכן והתנהגותו בדיוק.
  - זה כולל הפעלת כלים פשוט באמצעות שפה טבעית.

- **גישה לידע ארגוני**: מאפשר גישה לידע ארגוני שמכבד הרשאות משתמשים.
  - אינטגרציה עם SharePoint
  - אינטגרציה עם Dataverse
  - אינטגרציה עם Dynamics 365
  - מחברי Microsoft 365 Copilot מופעלים על ידי מנהל הארגון שלכם

   ![התאמה אישית](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.he.png)

#### יכולות מתקדמות

- **אינטגרציה עם שירותים חיצוניים**: מאפשר לבחור מתוך 1400+ מחברים של Power Platform שמתחברים לשירותים חיצוניים, ומספקים פונקציונליות מורכבת ועוצמתית יותר.
  - דוגמאות כוללות [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez), [ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez), [Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez), [SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) ועוד
  - לחלופין, ניתן גם להשתמש בשרתי Model Context Protocol וב-REST APIs ישירות בתוך הסוכן הדקלרטיבי שלכם

- **הנחיות AI**: השתמשו בהנחיה לניתוח והמרת טקסט, מסמכים, תמונות ונתונים באמצעות שפה טבעית והסקת AI.
  - בחרו את מודל הצ'אט, בחרו בין Basic (ברירת מחדל), Standard, Premium
  - אפשרות להביא מודל Azure AI Foundry משלכם כדי להטמיע את ההנחיה

- **אפשרויות תצורת פריסה נוספות**: בחרו ערוצים והגדירו הרשאות משתמשים.
  - פרסום ל-Microsoft Teams, ממשק משתמש מוכר למשתמשים שלכם לאימוץ מהיר יותר
  - הרשאות עריכה יכולות להיות משותפות כדי למנוע תלות בנקודה אחת בבעל הסוכן

   ![התאמה אישית](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.he.png)

לסיכום, סוכנים דקלרטיביים ב-Microsoft Copilot Studio מאפשרים התאמה אישית של Microsoft 365 Copilot לצרכים עסקיים באמצעות אינטגרציה של מערכות ידע ארגוניות, כלים לחיבור לשירותים חיצוניים או מודלי GPT של AI.

## 🧪 מעבדה 03: בניית סוכן דקלרטיבי ב-Microsoft Copilot Studio עבור Microsoft 365 Copilot

נלמד כעת כיצד לבנות סוכן דקלרטיבי עבור מקרה שימוש "עסק לעובד" שישמש כסוכן **שירות IT**.

- [3.1 יצירת סוכן דקלרטיבי](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 יצירת והוספת הנחיה לסוכן הדקלרטיבי שלכם](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 עדכון הוראות ובדיקת הסוכן הדקלרטיבי שלכם](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 פרסום הסוכן הדקלרטיבי שלכם ל-Microsoft 365 Copilot ול-Microsoft Teams](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    מעבדה זו תפרט את השלבים להוספת הנחיה ככלי. השיעורים הבאים יעמיקו בהוספת מקורות ידע והוספת כלים נוספים זמינים. שומרים על פשטות ללמידה שלכם 😊

### 👩🏻‍💼 הבנת עסק לעובד (B2E)

עסק לעובד (B2E) מתייחס לאינטראקציות ושירותים שעסק מספק ישירות לעובדיו. בהקשר של סוכן, זה אומר שימוש ביכולות המתקדמות של Copilot Studio כדי לתמוך ולשפר את חוויית העבודה של העובדים בתוך הארגון.

### ✨ תרחיש שימוש

**כ** עובד

**אני רוצה** לקבל עזרה מהירה ומדויקת מסוכן שירות IT עבור בעיות כמו בעיות במכשירים, פתרון בעיות רשת, הגדרת מדפסת

**כדי שאוכל** להישאר פרודוקטיבי ולפתור בעיות טכניות ללא עיכובים

בואו נתחיל!

### דרישות מוקדמות

- על היוצרים להיות בעלי הרשאות ליצור ולהיות בעלי גישה לסביבת Copilot Studio.

!!! note "הערת רישוי"
    מעבדה זו תפרט את השלבים להוספת הנחיה ככלי. השיעורים הבאים יעמיקו בהוספת מקורות ידע והוספת כלים נוספים זמינים. שומרים על פשטות ללמידה שלכם 😊
  
    אינכם זקוקים לרישיון משתמש Microsoft 365 Copilot כדי לפרסם את הסוכן הדקלרטיבי שלכם שנבנה ב-Copilot Studio ל-Microsoft 365 Copilot. עם זאת, **משתמשים** של _הסוכן הדקלרטיבי שפורסם_ ב-Microsoft 365 Copilot דורשים רישיון משתמש Microsoft 365 Copilot.

### 3.1 יצירת סוכן דקלרטיבי

!!! warning "שאלות קופיילוט עשויות להשתנות בין מפגשים"

    חוויית יצירת השיחה של קופיילוט עשויה להשתנות בכל פעם, כאשר השאלות המוצעות להכוונה עשויות להיות מעט שונות מהפעם הקודמת.

1. נווטו ל-[https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/) והתחברו באמצעות האישורים שלכם. ודאו שאתם מחוברים לסביבה שבה אתם משתמשים עבור מעבדות אלו.

1. בחרו **סוכנים** מהתפריט ובחרו **Copilot עבור Microsoft 365**.

       ![Copilot עבור Microsoft 365](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.he.png)

1. כעת, ניצור סוכן דקלרטיבי על ידי בחירת **+ הוספת** סוכן.

       ![הוספת סוכן](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.he.png)

1. נראה את חוויית יצירת השיחה נטענת, שם נוכל לשוחח בשפה טבעית עם קופיילוט כדי לתאר את הסוכן הדקלרטיבי שאנחנו רוצים לבנות, ולהשתמש בשאלות המוצעות להכוונה.

       בואו נכניס תיאור מפורט שמפרט את הדברים הבאים,  
       - משימת הסוכן  
       - סוג השאלות שהוא יכול לטפל בהן  
       - פורמט התגובה שלו  
       - מטרת הסוכן  
    
       ```text
       אתה איש מקצוע IT מיומן ומנוסה המתמחה במגוון רחב של מערכות מחשב, רשתות ואבטחת סייבר. אתה מסוגל לאבחן ולפתור בעיות טכניות, להסביר פתרונות בצורה ברורה ומובנת למשתמשים בכל הרמות הטכניות, ולספק הנחיות על שיטות עבודה מומלצות. עליך להיות תמציתי ואינפורמטיבי, להשתמש בהוראות שלב אחר שלב עם נקודות כאשר מתאים. מטרתך היא לעזור למשתמש להבין את הבעיה וכיצד לפתור אותה בצורה יעילה.
       ```
    
       ![יצירת הנחיה](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.he.png)

1. לאחר שליחת ההנחיה, תופיע עדכון בולט בצד ימין של המסך עם הפרטים וההוראות של הסוכן כפי שהוגדרו בהנחיה. לאחר מכן תתבקשו לאשר את שם הסוכן וקופיילוט יציע שם.

       הכניסו `כן` כדי לקבל את השם המוצע או הכניסו שם אחר כמו הבא,
    
       ```text
       Contoso Tech Support Pro
       ```
    
       ![הוראות מעודכנות](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.he.png)

    !!! warning "תזכורת: שאלות קופיילוט עשויות להשתנות בין מפגשים"

        חוויית יצירת השיחה של קופיילוט עשויה להשתנות בכל פעם, כאשר השאלות המוצעות להכוונה עשויות להיות מעט שונות מהפעם הקודמת.

1. שם הסוכן עודכן כעת כפי שנראה בצד ימין של המסך. כעת מתבקשים לעדן את ההוראות עבור הסוכן. מה שקופיילוט הציע נשמע מצוין, אז נבקש ממנו להשתמש בהצעות שלו. נכניס את הדברים הבאים,

      ```text
      Focus on the IT issues and scenarios you've identified
      ```

      ![שם מעודכן](../../../../../translated_images/3.1_06_NameUpdated.b6b8cc7c670b77c635d6b54b723e1a83f63ec288c0eab260fdbf88c7ec163003.he.png)

1. לאחר מכן נשאל אם אנחנו רוצים להוסיף אתרים ציבוריים או מקורות ידע. נענה `לא` מכיוון שנוסיף רק הנחיה לסוכן הדקלרטיבי שלנו במעבדה זו. מעבדות נוספות בשיעורים הבאים יכסו מקורות ידע.

      ![לא נוספו אתרים או מקורות ידע](../../../../../translated_images/3.1_07_KnowledgeSources.2001faa25aab922f38da82a8602e68b3ad7153941e87bab0949177e0b2ab0c08.he.png)

1. נראה תגובה מקופיילוט שסיימנו כעת להגדיר את הסוכן שלנו באמצעות חוויית יצירת השיחה של קופיילוט. עם זאת, בואו נעשה עוד כמה שיפורים על ידי פירוט שהוא צריך להיות תמציתי ואינפורמטיבי עם נקודות, להשתמש באמפתיה בתקשורת ולבקש משוב לאחר מתן פתרונות.

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

      ![עדכון הוראות הסוכן](../../../../../translated_images/3.1_08_FurtherRefinements.993926c4e55cc5133413f4e10a61a6ed43351d070e791db0ee5547ea83f46473.he.png)

1. קופיילוט מאשר שההוראות עודכנו. לחצו על **יצירה** כדי להקצות את הסוכן הדקלרטיבי עבור Microsoft 365 Copilot.

      ![יצירת סוכן](../../../../../translated_images/3.1_09_CreateDeclarativeAgent.71442cd4e18105359e55016d92e54b74ac18977bb535c637a05bac0d3680a3c5.he.png)

    !!! warning "תזכורת: שאלות קופיילוט עשויות להשתנות בין מפגשים"

        חוויית יצירת השיחה של קופיילוט עשויה להשתנות בכל פעם, כאשר השאלות המוצעות להכוונה עשויות להיות מעט שונות מהפעם הקודמת.

1. לאחר שהסוכן הוקצה, תראו את פרטי הסוכן הכוללים את התיאור וההוראות שהוגדרו במהלך חוויית יצירת השיחה של קופיילוט.
![פרטי הסוכן](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.he.png)

גלול מטה בלוח ותראה גם את האפשרויות להוספת ידע, הפעלת חיפוש באינטרנט (דרך Bing), הנחיות התחלה ופרטי פרסום של הסוכן ההצהרתי עבור Microsoft 365 Copilot. הנחיות ההתחלה יוצגו גם בלוח הבדיקה בצד ימין. משתמשים יכולים לבחור בהנחיות ההתחלה כדי להתחיל אינטראקציה עם הסוכן.

![הנחיות מוצעות](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.he.png)

1. בחלק הפרטים של הסוכן, יש לך אפשרות לשנות גם את סמל הסוכן. בחר **ערוך**.

![ערוך פרטים](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.he.png)

כאן תוכל לשנות את הסמל ואת צבע הרקע. בחר **שמור** ואז בחר **שמור** שוב כדי לעדכן את פרטי הסוכן.

![שנה סמל](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.he.png)

1. בוא נעשה בדיקה מהירה של הסוכן שיצרנו. בחר אחת מהנחיות ההתחלה בלוח הבדיקה בצד ימין.

![בדוק הנחיית התחלה](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.he.png)

1. הסוכן שלנו יגיב. שים לב כיצד הוא פעל לפי ההוראות על ידי מתן נקודות עיקריות בצורה מובנת, והשתמש באמפתיה בתשובתו.

אם תגלול לתחתית ההודעה, שים לב כיצד הוא גם ביקש משוב לאחר שסיפק פתרון כפי שהונחה.

![תגובה מבדיקה](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.he.png)

תוך כמה דקות הוספת סוכן הצהרתי עבור Microsoft 365 Copilot ב-Copilot Studio 🙌🏻

בהמשך נלמד כיצד להוסיף כלי לסוכן שלנו, ניצור הנחיה.

### 3.2 יצירת והוספת הנחיה לסוכן ההצהרתי שלך

1. גלול מטה לחלק **כלים** ובחר **+ הוסף כלי**

![הוסף כלי](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.he.png)

1. יופיע חלון כלים ורשימה של מחברים של Power Platform תוצג. כדי להוסיף הנחיה, בחר **+ כלי חדש**.

![כלי חדש](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.he.png)

1. תוצג רשימה של כלים אחרים - הנחיה, מחבר מותאם אישית, REST API ו-Model Context Protocol. אם הארגון שלך עומד ב[דרישות לשימוש במחשב](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez), זה גם יופיע ברשימה. בחר **הנחיה**.

![בחר הנחיה](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.he.png)

1. הזן שם להנחיה. נקרא להנחיה שלנו `מומחה IT`.

![הזן שם](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.he.png)

1. בחר את **סמל החץ** ליד **מודל** כדי לראות את מודלי הצ'אט השונים שתוכל לבחור מהם. כברירת מחדל, מודל **Basic GPT-4.1 mini** נבחר ויש לך גם אפשרות להשתמש במודל משלך באמצעות Azure AI Foundry Models. נשאר עם המודל שנבחר כברירת מחדל.

![שנה מודל](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.he.png)

1. כעת, נספק להנחיה שלנו הוראות. ישנן 3 שיטות שתוכל לבחור מהן:

- להשתמש ב-Copilot כדי ליצור הוראות עבורך על סמך תיאור של מה שאתה רוצה שההנחיה תעשה.
- להשתמש בתבנית מוכנה מספריית ההנחיות כדי ליצור הנחיה.
- להזין ידנית את ההוראות שלך.

1. קודם כל ננסה להשתמש ב-Copilot כדי ליצור הוראות על סמך תיאור שהוזן. הזן את הטקסט הבא לשדה של Copilot ושלח.

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

![התחל עם Copilot](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.he.png)

1. Copilot יתחיל ליצור הנחיה עבורנו.

![Copilot יוצר הנחיות](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.he.png)

1. טיוטת ההוראות שנוצרה על ידי Copilot תופיע.

![טיוטת ההוראות שנוצרה על ידי Copilot](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.he.png)

1. גלול לתחתית ההוראות ותראה את פרמטר הקלט של המשתמש שכבר הוגדר על ידי Copilot. יש לך אפשרות:
- לשמור את טיוטת ההוראות שנוצרה.
- לרענן את טיוטת ההוראות באמצעות Copilot.
- לנקות את טיוטת ההוראות.

נקה את טיוטת ההוראות על ידי בחירת סמל **פח האשפה** וננסה את ספריית ההנחיות.

![הוראות הנחיה](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.he.png)

1. בחר את הקישור **תבנית הנחיה**.

![בחר תבנית הנחיה](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.he.png)

1. תראה רשימה של תבניות הנחיה לבחירה. אלו מתוך [ספריית ההנחיות של Power Platform](https://aka.ms/power-prompts).

![ספריית הנחיות](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.he.png)

1. חפש את ההנחיה `מומחה IT` ובחר בה.

![בחר הנחיית מומחה IT](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.he.png)

1. ההנחיה תתווסף כהוראות עם פרמטר הקלט כפי שהוגדר על ידי תבנית ההנחיה. בדומה לגישה שנקטנו כאשר סיפקנו הוראות לסוכן שלנו במהלך חוויית יצירת השיחה עם Copilot, תבנית ההנחיה הזו מפרטת:
- משימה,
- איזה סוג של שאלות היא יכולה לטפל,
- ואת פורמט התגובה והמטרה של ההנחיה.

![הוראות הנחיה](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.he.png)

1. נקה את ההוראות וננסה להזין ידנית את ההוראות. נשתמש ב[הנחיית מומחה IT](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/) מתוך [ספריית ההנחיות של Power Platform](https://aka.ms/power-prompts). העתק והדבק את ההנחיה.

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

![הוראות הנחיה](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.he.png)

1. כעת, נוכל להגדיר את פרמטרי הקלט של המשתמש עבור ההנחיה שלנו. אלו יכולים להיות טקסט ותמונות, ונתוני דוגמה לבדיקה. יש גם אפשרות לקשר את ההנחיה לידע מתוך טבלאות Dataverse. בתרגיל זה, יש לנו רק קלט משתמש אחד להגדיר שהוא קלט הבעיה. זה כרגע מציין מקום בהנחיה שלנו כ-[Problem]. כעת נגדיר את הקלט הזה על ידי הזנת התו `/` או בחירת **+הוסף תוכן** ואז לבחור **טקסט**.

![קלט טקסט](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.he.png)

1. כעת נוכל להזין שם לפרמטר הקלט שלנו ונתוני דוגמה.

הזן את הטקסט הבא כשם

    ```text
    problem input
    ```

הזן את הטקסט הבא כנתוני דוגמה

    ```text
    My laptop gets an error with a blue screen
    ```

לאחר מכן, בחר **סגור**.

![הגדר קלט בעיה](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.he.png)

1. פרמטר קלט הבעיה יתווסף להוראות עם נתוני הדוגמה שהוגדרו. כעת נוכל לבדוק את ההנחיה שלנו!

![קלט בעיה נוסף](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.he.png)

1. בחר **בדוק** כדי לבדוק את ההנחיה.

![בדוק הוראות](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.he.png)

1. התגובה תוצג. שים לב כיצד התגובה מספקת כותרות עם נקודות עיקריות בהתאם להוראות. גלול מטה ובדוק את שאר תגובת המודל.

![תגובה של המודל](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.he.png)

1. לפני שנשמור את ההנחיה שלנו, בואו נלמד על ההגדרות שניתן להגדיר עבור ההנחיה הזו. בחר את **סמל שלוש הנקודות (...).**

![הגדרות הנחיה](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.he.png)

1. כאן נראה שלוש הגדרות שניתן להגדיר.

- **טמפרטורה**: טמפרטורות נמוכות מובילות לתוצאות צפויות, בעוד שטמפרטורות גבוהות מאפשרות תגובות מגוונות או יצירתיות יותר.
- **שליפת רשומות**: ציין את מספר הרשומות שנשלפות עבור מקורות הידע שלך.
- **הכללת קישורים בתגובה**: כאשר נבחר, התגובה כוללת ציטוטי קישורים עבור הרשומות שנשלפו.

בחר את סמל **X** כדי לצאת מההגדרות.

![הגדר הגדרות](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.he.png)

1. בחר **שמור** כדי לשמור את ההנחיה.

![שמור הנחיה](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.he.png)

1. לאחר מכן, בחר **הוסף לסוכן** כדי להוסיף את ההנחיה לסוכן ההצהרתי שלנו.

![הוראות הנחיה](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.he.png)

1. ההנחיה תופיע כעת תחת כלים 🙌🏻

![הנחיה נוספה](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.he.png)

בהמשך נעדכן את ההוראות שלנו כדי להפעיל את ההנחיה ונבדוק את הסוכן ההצהרתי שלנו.

### 3.3 עדכון הוראות ובדיקת הסוכן ההצהרתי שלך

1. גלול למעלה לחלק **פרטים** ובחר **ערוך**. זה יאפשר לערוך את השדות.

![בחר ערוך](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.he.png)

1. כעת נוכל לעדכן את ההוראות שלנו כדי להפעיל את ההנחיה על ידי התייחסות לשם ההנחיה. נקה את ההוראות, ואז העתק והדבק את הטקסט הבא.

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

שים לב כיצד המשפט האחרון מנחה את הסוכן להשתמש בשאלה שנשאלה על ידי המשתמש כערך עבור פרמטר קלט הבעיה. הסוכן ישתמש בשאלה כקלט הבעיה עבור ההנחיה. לאחר מכן, בחר **שמור**.

![עדכן הוראות להפעלת הנחיה](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.he.png)

1. כעת אנחנו מוכנים לבדוק את ההוראות המעודכנות של הסוכן ההצהרתי שלנו. בחר את **סמל הרענון** בלוח הבדיקה.

![בחר סמל רענון](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.he.png)

1. לאחר מכן, הזן את ההנחיה הבאה למטה ושלח.

```text
האם תוכל לעזור לי, המחשב הנייד שלי נתקל במסך כחול
```

![בצע בדיקה](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.he.png)

1. הסוכן מפעיל את ההנחיה ומגיב.

![הוראות הנחיה](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.he.png)

כעת נפרסם את הסוכן ההצהרתי שלנו 😃

### 3.4 פרסם את הסוכן ההצהרתי שלך ל-Microsoft 365 Copilot ול-Microsoft Teams

1. בחר **פרסם**.

![פרסם סוכן](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.he.png)

1. יופיע חלון שמציג את הערוצים ופרטי הפרסום שניתן לעדכן.

- ערוצים: הסוכן יפורסם ל-Microsoft 365 Copilot ול-Microsoft Teams.
- מידע על אפליקציית הסוכן: זה מה שיוצג כאשר המשתמש מוסיף את הסוכן ל-Microsoft 365 Copilot או ל-Microsoft Teams. אלו שדות שניתן לעדכן לפי הצורך.

![פרטי אפליקציית הסוכן](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.he.png)

1. לדוגמה, תוכל לעדכן את **תיאור קצר**, **תיאור ארוך**, **שם המפתח** עם שמך.

!!! tip
אם אינך רואה את כל השדות מוצגים בדפדפן שלך, נסה להקטין את הזום לדוגמה ל-75%.

בחר **פרסם**. Copilot Studio יתחיל לפרסם את הסוכן.

![פרסום סוכן](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.he.png)

1. כאשר הפרסום יושלם, נראה את [אפשרויות הזמינות](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez) של הסוכן.

| אפשרות זמינות | תיאור |
| ---------- | ---------- |
| קישור שיתוף | העתק את הקישור כדי לשתף אותו עם משתמשים משותפים לפתיחת הסוכן ב-Microsoft 365 Copilot |
| הצג לחברי הצוות שלי ולמשתמשים משותפים | מאפשר לך להעניק גישה לאחרים להשתתף ביצירת הסוכן, או לקבוצות אבטחה כדי להעניק להם גישה להשתמש בסוכן ב-Microsoft 365 Chat או ב-Microsoft Teams. |
| הצג לכולם בארגון שלי | שלח למנהל הדיירים להוסיף לקטלוג הארגוני עבור כל משתמשי הדיירים להוסיף את הסוכן. הסוכן יופיע תחת נבנה על ידי הארגון שלך ב-Microsoft 365 Copilot וב-Microsoft Teams |
| הורד כקובץ .zip | הורד כקובץ zip להעלאה כאפליקציה מותאמת אישית ב-Microsoft Teams |

![אפשרויות זמינות](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.he.png)

1. בואו נסתכל על שיתוף הסוכן. בחר **הצג לחברי הצוות שלי ולמשתמשים משותפים**. יופיע לוח שבו תוכל לחפש משתמשים שברצונך לשתף איתם את הסוכן על ידי הזנת שמם, דוא"ל או קבוצת אבטחה. תוכל לעיין ברשימה זו בכל עת כדי לערוך מי יש לו גישה לסוכן.

יש גם שתי תיבות סימון:
- _שלח הזמנה בדוא"ל למשתמשים חדשים_ - משתמשים חדשים יקבלו הזמנה בדוא"ל.
- _זמין נבנה עם Power Platform_ - הסוכן הופך לזמין בחלק נבנה עם Power Platform בחנות האפליקציות של Teams.
למידע נוסף, עיינו ב-[חיבור והגדרת סוכן עבור Teams ו-Microsoft 365](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez).

בחרו **ביטול** או באייקון **X** כדי לצאת מהחלון.

![שיתוף סוכן](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.he.png)

1. בחרו **העתק** ובטאב חדש בדפדפן, הדביקו את הקישור.

![העתקת קישור](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.he.png)

1. Microsoft 365 Copilot ייטען וחלון מודאלי יופיע עם פרטי אפליקציית הסוכן. שימו לב כיצד שם המפתח, התיאור הקצר והתיאור הארוך מוצגים. אלו נלקחו מפרטי הפרסום שעודכנו בשלב קודם.

בחרו **הוסף**.

![אפשרויות זמינות](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.he.png)

1. הסוכן ההצהרתי שלנו ייטען לאחר מכן. נוכל לראות את ההנחיות ההתחלתיות לבחירה, שמאפשרות למשתמשים לקבל עזרה מיידית במהירות.

בחרו אחת מההנחיות ההתחלתיות. בהנחיות ההתחלתיות שלי, אבחר בהנחיית **עזרה בהתקנת תוכנה**, שתמלא אוטומטית את שדה ההודעה של Copilot. שלחו את השאלה ל-Copilot.

![בחירת הנחיה התחלתית](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.he.png)

1. בחרו **תמיד אפשר** כדי לתת לסוכן ההצהרתי שלכם הרשאה להפעיל את הנחיית מומחה ה-IT.

![בחירת תמיד אפשר](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.he.png)

1. הסוכן יפעיל את הנחיית **מומחה ה-IT** שלנו ונראה את תגובת המודל חוזרת כהודעה בסוכן ההצהרתי שלנו.

![תגובה](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.he.png)

גללו מטה כדי לראות את כל פרטי התגובה.

![תגובה](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.he.png)

1. אבל _איך אנחנו יודעים_ שהסוכן ההצהרתי הפעיל את ההנחיה? 👀 הנה טיפ!

!!! tip
    ניתן לבדוק ולבצע דיבוג לסוכנים ב-Microsoft 365 Copilot על ידי הפעלת [מצב מפתח](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez).

הכניסו את הטקסט הבא לשדה ההודעה של Copilot ושלחו.

    ```text
    -developer on
    ```

הודעת אישור תופיע כדי להודיע לכם שמצב המפתח הופעל.

![מצב מפתח הופעל](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.he.png)

1. שלחו את השאלה הבאה כדי להפעיל את ההנחיה.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![הכנסת שאלה](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.he.png)

1. נראה תגובת מודל מהנחיית **מומחה ה-IT** שלנו שוב חוזרת כהודעה. גללו מטה לתחתית ההודעה וכרטיס עם מידע דיבוג מוצג.

הרחיבו את **מידע דיבוג סוכן** על ידי לחיצה עליו.

![מידע דיבוג סוכן](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.he.png)

1. כאן תמצאו מידע על המטא-נתונים של הסוכן שהתרחש בזמן הריצה.

![מידע דיבוג סוכן מורחב](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.he.png)

במקרה שלנו, נתמקד בסעיף _פעולות_.

- **פעולות תואמות** מדגישות את הסטטוס הנוכחי של הפונקציות שנמצאו במהלך חיפוש האפליקציה.
- **פעולות נבחרות** מדגישות את הסטטוס הנוכחי של הפונקציות שנבחרו לפעול בהתבסס על תהליך קבלת ההחלטות של האפליקציה.

![מידע דיבוג סוכן מורחב](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.he.png)

כאן ניתן לראות שהמתזמן של הסוכן בחר להפעיל את הנחיית מומחה ה-IT בהתאם להוראות הסוכן ההצהרתי שלנו. זה מפורט עוד יותר בסעיף _פעולות שבוצעו_ שמראה גם שההנחיה הופעלה בהצלחה.

![סקירת מידע דיבוג סוכן](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.he.png)

1. כדי לכבות את מצב המפתח, הכניסו את הטקסט הבא לשדה ההודעה של Copilot ושלחו.

    ```text
    -developer off
    ```

הודעת אישור תופיע כדי להודיע לכם שמצב המפתח כבוי. מעולה, עכשיו אתם יודעים איך לבדוק אם הסוכן ההצהרתי שלכם ב-Microsoft 365 Copilot הפעיל את ההנחיה שלכם 🌞

![מצב מפתח כבוי](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.he.png)

1. עכשיו נבדוק את הסוכן שלנו ב-Microsoft Teams. נווטו ל-**אפליקציות** באמצעות התפריט בצד שמאל ובחרו **Teams** תחת סעיף _אפליקציות_.

![בחירת Teams באפליקציות](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.he.png)

1. Microsoft Teams ייטען בטאב חדש בדפדפן ואז יוצגו תנאי השימוש עבור Microsoft 365 Copilot, בחרו **מסכים**.

![בחירת מסכים](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.he.png)

1. Microsoft 365 Copilot ייטען כברירת מחדל, עם חלון בצד ימין שמציג את כל הסוכנים הזמינים שלכם, כולל הסוכן ההצהרתי **Contoso Tech Support Pro**.

![Microsoft 365 Copilot ב-Teams](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.he.png)

1. בחרו **אייקון שלוש נקודות (...)** בתפריט בצד שמאל. חפשו את **Contoso Tech Support Pro** בשדה החיפוש או אם אתם רואים את הסוכן, בחרו בו.

ניתן גם ללחוץ לחיצה ימנית בעכבר כדי **לנעוץ** את הסוכן לגישה מהירה בתפריט בצד שמאל ב-Microsoft Teams.

![בחירת ונעיצת סוכן](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.he.png)

1. הסוכן שלנו ייטען. 1. עכשיו נבדוק את הסוכן שלנו. הכניסו את ההנחיה הבאה ושלחו.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![נעיצת סוכן](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.he.png)

1. תגובת מודל מההנחיה שלנו תוצג לאחר מכן.

![תגובה ב-Teams](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.he.png)

תוך כמה דקות, למדתם איך לפרסם את הסוכן ההצהרתי שלכם ולבדוק אותו ב-Microsoft 365 Copilot וב-Microsoft Teams 😊

## ✅ משימה הושלמה

ברכות! 👏🏻 יצרתם סוכן הצהרתי ב-Copilot Studio שבו הוספתם הנחיה, הנחיתם את הסוכן להשתמש בהנחיה ולמדתם איך לבדוק ולפרסם את הסוכן שלכם ל-Microsoft 365 Copilot ול-Microsoft Teams.

הסוכן שלכם עכשיו מוכן לפעולה—מוכן לסייע, לפתור בעיות ולשרת משתמשים פנימיים לפי דרישה.

זהו סוף **מעבדה 03 - יצירת סוכן הצהרתי ב-Copilot Studio עבור Microsoft 365 Copilot**, בחרו את הקישור למטה כדי לעבור לשיעור הבא.

⏭️ [מעבר לשיעור **יצירת פתרון חדש**](../04-creating-a-solution/README.md)

עד הפעם הבאה, הישארו חדים. העתיד של עבודה ארגונית עובר דרך סוכנים—ועכשיו אתם יודעים איך ליצור אחד.

## 📚 משאבים טקטיים

🔗 [יצירת סוכן הצהרתי ב-Copilot Studio עבור Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [הוספת הנחיות](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [שיתוף סוכנים עם משתמשים אחרים](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [יצירת הנחיות עבור הסוכן שלכם](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="Analytics" />

---

**הצהרת אחריות**:  
מסמך זה תורגם באמצעות שירות תרגום AI [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור סמכותי. עבור מידע קריטי, מומלץ להשתמש בתרגום מקצועי אנושי. איננו אחראים לאי הבנות או לפרשנויות שגויות הנובעות משימוש בתרגום זה.