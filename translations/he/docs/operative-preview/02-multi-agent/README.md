<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4fb913dfc3bbc71506dd3602c4b8e6ed",
  "translation_date": "2025-10-17T01:47:05+00:00",
  "source_file": "docs/operative-preview/02-multi-agent/README.md",
  "language_code": "he"
}
-->
# 🚨 משימה 02: סוכנים מחוברים

--8<-- "disclaimer.md"

## 🕵️‍♂️ שם קוד: `מבצע סימפוניה`

> **⏱️ חלון זמן המבצע:** `~45 דקות`

## 🎯 תדריך משימה

ברוך שובך, סוכן. במשימה 01, בנית את סוכן הגיוס הראשי שלך - בסיס מוצק לניהול תהליכי גיוס. אבל סוכן אחד יכול לעשות רק כל כך הרבה.

המשימה שלך, אם תבחר לקבל אותה, היא **מבצע סימפוניה** - להפוך את הסוכן היחיד שלך למערכת **רב-סוכנים**: צוות מתוזמר של סוכנים מומחים שעובדים יחד כדי להתמודד עם אתגרי גיוס מורכבים. תחשוב על זה כמו לשדרג ממפעיל יחיד לפיקוד על כוח משימה מיוחד.

כמו תזמורת סימפונית שבה כל מוזיקאי מנגן את חלקו בהרמוניה מושלמת, תוסיף שני מומחים קריטיים לסוכן הגיוס הקיים שלך: סוכן קליטת בקשות לעיבוד קורות חיים באופן אוטומטי, וסוכן הכנת ראיונות ליצירת חומרי ראיונות מקיפים. סוכנים אלו יעבדו יחד בצורה חלקה תחת המנצח הראשי שלך.

## 🔎 מטרות

במשימה זו תלמד:

1. מתי להשתמש ב**סוכנים ילדים** לעומת **סוכנים מחוברים**
1. כיצד לעצב **ארכיטקטורות רב-סוכנים** שמסוגלות להתרחב  
1. יצירת **סוכנים ילדים** למשימות ממוקדות
1. יצירת **דפוסי תקשורת** בין סוכנים
1. בניית סוכן קליטת בקשות וסוכן הכנת ראיונות

## 🧠 מה הם סוכנים מחוברים?

ב-Copilot Studio, אינך מוגבל לבניית סוכנים יחידים ומונוליתיים. אתה יכול ליצור **מערכות רב-סוכנים** - רשתות של סוכנים מומחים שעובדים יחד כדי להתמודד עם תהליכים מורכבים.

תחשוב על זה כמו ארגון בעולם האמיתי: במקום שאדם אחד יעשה הכל, יש לך מומחים שמצטיינים במשימות ספציפיות ומשתפים פעולה כשצריך.

### למה מערכות רב-סוכנים חשובות

- **יכולת להתרחב:** כל סוכן יכול להיות מפותח, נבדק ומתוחזק באופן עצמאי על ידי צוותים שונים.  
- **התמחות:** סוכנים יכולים להתמקד במה שהם עושים הכי טוב. אולי אחד לעיבוד נתונים, אחר לאינטראקציה עם משתמשים, ואחר לקבלת החלטות.  
- **גמישות:** ניתן לשלב ולהתאים סוכנים, להשתמש בהם מחדש בפרויקטים שונים, ולפתח את המערכת באופן הדרגתי.  
- **תחזוקה:** שינויים בסוכן אחד לא בהכרח משפיעים על אחרים, מה שהופך עדכונים לבטוחים וקלים יותר.

### דוגמה מהעולם האמיתי: תהליך גיוס

תחשוב על תהליך הגיוס שלנו - סוכנים מרובים עשויים לעבוד יחד עם תחומי אחריות הבאים:

- **קליטת קורות חיים** דורשת מיומנויות עיבוד מסמכים והפקת נתונים
- **ציון** כולל הערכת קורות חיים של מועמדים והתאמתם לדרישות התפקיד
- **הכנת ראיונות** דורשת ניתוח מעמיק של התאמת המועמד  
- **תקשורת עם מועמדים** דורשת יכולות תקשורת אמפתיות

במקום לבנות סוכן אחד ענק שמנסה להתמודד עם כל הכישורים השונים הללו, אתה יכול ליצור סוכנים מומחים לכל תחום ולתזמר אותם יחד.

## 🔗 סוכנים ילדים לעומת סוכנים מחוברים: ההבדל המרכזי

Copilot Studio מציע שתי דרכים לבנות מערכות רב-סוכנים, כל אחת עם שימושים שונים:

### ↘️ סוכנים ילדים

סוכנים ילדים הם **מומחים קלים** שחיים בתוך הסוכן הראשי שלך. תחשוב עליהם כצוותים מומחים בתוך אותו מחלקה.

#### פרטים טכניים מרכזיים

- סוכנים ילדים חיים בתוך הסוכן הראשי ויש להם דף תצורה יחיד.
- כלים וידע **מאוחסנים בסוכן הראשי**, אך מוגדרים כ"זמינים ל" סוכן הילד.
- סוכנים ילדים **משתפים את הנושאים** של הסוכן הראשי. ניתן להתייחס לנושאים בהוראות סוכן הילד.
- סוכנים ילדים **לא צריכים פרסום נפרד** - הם זמינים אוטומטית בתוך הסוכן הראשי ברגע שנוצרו. זה הופך את הבדיקות לקלות יותר מכיוון ששינויים בסוכן הראשי ובסוכנים הילדים יכולים להתבצע ב**אותו סביבת עבודה משותפת**.

#### השתמש בסוכנים ילדים כאשר

- צוות אחד מנהל את כל הפתרון
- אתה רוצה לארגן כלים וידע באופן לוגי לסוכנים תת-סוגיים
- אינך זקוק לאימות או פריסה נפרדים לכל סוכן
- הסוכנים לא יפורסמו בנפרד או ישמשו באופן עצמאי
- אינך זקוק לשימוש חוזר בסוכנים במגוון פתרונות

**דוגמה:** סוכן תמיכה טכנית עם סוכנים ילדים עבור:

- נהלי איפוס סיסמאות
- פתרון בעיות חומרה  
- מדריכי התקנת תוכנה

### 🔀 סוכנים מחוברים

סוכנים מחוברים הם **סוכנים עצמאיים לחלוטין** שהסוכן הראשי שלך יכול לשתף פעולה איתם. תחשוב עליהם כמחלקות נפרדות שעובדות יחד על פרויקט.

#### פרטים טכניים מרכזיים

- לסוכנים מחוברים יש **נושאים משלהם** וזרימות שיחה. הם פועלים באופן עצמאי עם הגדרות, לוגיקה ומחזור חיים פריסה משלהם.
- סוכנים מחוברים **חייבים להיות מפורסמים** לפני שניתן להוסיף אותם ולהשתמש בהם על ידי סוכנים אחרים.
- במהלך הבדיקות, שינויים בסוכן המחובר חייבים להיות מפורסמים לפני שניתן להשתמש בהם על ידי הסוכן הקורא.

#### השתמש בסוכנים מחוברים כאשר

- צוותים מרובים מפתחים ומתחזקים סוכנים שונים באופן עצמאי
- סוכנים זקוקים להגדרות, אימות וערוצי פריסה משלהם
- אתה רוצה לפרסם ולתחזק סוכנים בנפרד עם ניהול מחזור חיים יישומי (ALM) עצמאי לכל סוכן
- סוכנים צריכים להיות ניתנים לשימוש חוזר במגוון פתרונות

**דוגמה:** מערכת שירות לקוחות שמתחברת ל:

- סוכן חיוב נפרד שמנוהל על ידי צוות הכספים
- סוכן תמיכה טכנית נפרד שמנוהל על ידי צוות המוצר
- סוכן החזרות נפרד שמנוהל על ידי צוות התפעול

!!! tip "טיפ"
    ניתן לשלב את שתי הגישות! לדוגמה, הסוכן הראשי שלך יכול להתחבר לסוכנים חיצוניים מצוותים אחרים תוך כדי שיש לו סוכנים ילדים למשימות פנימיות מיוחדות.

## 🎯 דפוסי ארכיטקטורה רב-סוכנים

בעת עיצוב מערכות רב-סוכנים, מתגלים מספר דפוסים בהתבסס על אופן האינטראקציה בין הסוכנים:

| דפוס                | תיאור                                                                 | מתאים ל                                                      |
|----------------------|------------------------------------------------------------------------|---------------------------------------------------------------|
| **מרכז ודוברים**    | סוכן מנצח ראשי מתאם עם סוכנים מומחים מרובים. המנצח מטפל באינטראקציה עם המשתמש ומעביר משימות לסוכנים ילדים או מחוברים. | תהליכים מורכבים שבהם סוכן אחד מתאם משימות מיוחדות |
| **צינור**           | סוכנים מעבירים עבודה באופן רציף מאחד לשני, כל אחד מוסיף ערך לפני העברה לשלב הבא. | תהליכים ליניאריים כמו עיבוד בקשות (קליטה → סינון → ראיון → החלטה) |
| **שיתופי פעולה**    | סוכנים עובדים יחד בו זמנית על היבטים שונים של אותה בעיה, משתפים הקשר ותוצאות. | ניתוח מורכב הדורש פרספקטיבות או תחומי מומחיות שונים |

!!! tip "טיפ"
    ייתכן שתשלב אפילו שניים או יותר מהדפוסים הללו.

## 💬 תקשורת בין סוכנים ושיתוף הקשר

כאשר סוכנים עובדים יחד, הם צריכים לשתף מידע בצורה יעילה. כך זה עובד ב-Copilot Studio:

### היסטוריית שיחה

כברירת מחדל, כאשר סוכן ראשי קורא לסוכן ילד או מחובר, הוא יכול להעביר את **היסטוריית השיחה**. זה נותן לסוכן המומחה הקשר מלא לגבי מה שהמשתמש דיבר עליו.

ניתן להשבית זאת מסיבות אבטחה או ביצועים - לדוגמה, אם סוכן המומחה צריך רק להשלים משימה ספציפית מבלי להזדקק להקשר השיחה המלא. זה יכול להיות הגנה טובה מפני **דליפת נתונים**.

### הוראות מפורשות

הסוכן הראשי שלך יכול לתת **הוראות ספציפיות** לסוכנים ילדים או מחוברים. לדוגמה: "עבד את קורות החיים האלה וסכם את הכישורים שלהם לתפקיד מפתח בכיר."

### ערכי החזרה

סוכנים יכולים להחזיר מידע מובנה לסוכן הקורא, מה שמאפשר לסוכן הראשי להשתמש במידע זה בשלבים הבאים או לשתף אותו עם סוכנים אחרים.

### אינטגרציה עם Dataverse

למצבים מורכבים יותר, סוכנים יכולים לשתף מידע דרך **Dataverse** או מאגרי נתונים אחרים, מה שמאפשר שיתוף הקשר מתמשך בין אינטראקציות מרובות.

## ↘️ סוכן ילד: סוכן קליטת בקשות

בוא נתחיל לבנות את מערכת הגיוס הרב-סוכנים שלנו. המומחה הראשון שלנו יהיה **סוכן קליטת בקשות** - סוכן ילד שאחראי על עיבוד קורות חיים ומידע מועמדים נכנסים.

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

### 🤝 תחומי אחריות של סוכן קליטת בקשות

- **עיבוד תוכן קורות חיים** מקבצים PDF שסופקו דרך צ'אט אינטראקטיבי (במשימה עתידית תלמד כיצד לעבד קורות חיים באופן אוטונומי).
- **הפקת נתונים מובנים** (שם, כישורים, ניסיון, השכלה)
- **התאמת מועמדים לתפקידים פתוחים** בהתבסס על כישורים ומכתב מקדים
- **אחסון מידע מועמדים** ב-Dataverse לעיבוד מאוחר יותר
- **מניעת כפילויות בקשות** כדי להימנע מיצירת אותו מועמד פעמיים, התאמה לרשומות קיימות באמצעות כתובת האימייל שהופקה מקורות החיים.

### ⭐ למה זה צריך להיות סוכן ילד

סוכן קליטת בקשות מתאים באופן מושלם כסוכן ילד מכיוון ש:

- הוא מתמחה בעיבוד מסמכים והפקת נתונים
- הוא לא זקוק לפרסום נפרד  
- הוא חלק מפתרון הגיוס הכולל שלנו שמנוהל על ידי אותו צוות
- הוא מתמקד בהדק ספציפי (קורות חיים חדשים שהתקבלו) ומופעל מהסוכן הראשי.

## 🔀 סוכן מחובר: סוכן הכנת ראיונות  

המומחה השני שלנו יהיה **סוכן הכנת ראיונות** - סוכן מחובר שעוזר ליצור חומרי ראיונות מקיפים ומעריך תגובות מועמדים.

### 🤝 תחומי אחריות של סוכן הכנת ראיונות

- **יצירת חבילות ראיונות** עם מידע על החברה, דרישות התפקיד וקריטריוני הערכה
- **יצירת שאלות ראיונות** מותאמות לתפקידים ספציפיים ורקע מועמדים
- **מענה על שאלות כלליות** על תפקידי עבודה ובקשות לתקשורת עם בעלי עניין

### ⭐ למה זה צריך להיות סוכן מחובר

סוכן הכנת ראיונות עובד טוב יותר כסוכן מחובר מכיוון ש:

- צוות רכישת הכישרונות עשוי לרצות להשתמש בו באופן עצמאי בתהליכי גיוס מרובים
- הוא זקוק לבסיס ידע משלו של שיטות ראיונות וקריטריוני הערכה
- מנהלי גיוס שונים עשויים לרצות להתאים את התנהגותו לצוותים שלהם
- ניתן להשתמש בו מחדש לתפקידים פנימיים, לא רק לגיוס חיצוני

## 🧪 מעבדה 2.1: הוספת סוכן קליטת בקשות

מוכן ליישם את התיאוריה בפועל? בוא נוסיף את סוכן הילד הראשון שלנו לסוכן הגיוס הקיים שלך.

### דרישות מוקדמות להשלמת המשימה

תצטרך **או**:

- **להשלים את משימה 01** ולהכין את סוכן הגיוס שלך, **או**
- **לייבא את פתרון ההתחלה של משימה 02** אם אתה מתחיל מאפס או צריך להשלים. [הורד פתרון התחלה למשימה 02](https://aka.ms/agent-academy)

!!! note "ייבוא פתרון ונתוני דוגמה"
    אם אתה משתמש בפתרון ההתחלה, עיין ב-[משימה 01](../01-get-started/README.md) להוראות מפורטות כיצד לייבא פתרונות ונתוני דוגמה לסביבתך.

### 2.1.1 הגדרת פתרון

1. בתוך Copilot Studio, בחר את שלוש הנקודות (...) מתחת לכלים בניווט השמאלי.
1. בחר **פתרונות**.  
    ![בחר פתרונות](../../../../../translated_images/2-select-solutions.42b77407cffd37d7c8b3265f2fd8adb88053b9ebda31bdf0b22cd77ec5b7bf88.he.png)
1. מצא את פתרון Operative שלך, בחר את **שלוש הנקודות (...)** לידו, ובחר **הגדר פתרון מועדף**. זה יבטיח שכל העבודה שלך תתווסף לפתרון זה.  
    ![הגדר פתרון מועדף](../../../../../translated_images/2-select-preferred-solution.4542e922555429074f49c6480f6e8345f8c8818b2549fe0cd625fa58a45aede9.he.png)

### 2.1.2 הגדר הוראות סוכן הגיוס שלך

1. **נווט** ל-Copilot Studio. ודא שסביבתך נבחרה בפינה הימנית העליונה **בחירת סביבה**.

1. פתח את **סוכן הגיוס** שלך ממשימה 01

1. בחר **ערוך** בסעיף **הוראות** בלשונית **סקירה כללית**, והוסף את ההוראות הבאות לראש:

    ```text
    You are the central orchestrator for the hiring process. You coordinate activities, provide summaries, and delegate work to specialized agents.
    ```

1. בחר **שמור**  
    ![הוראות סוכן גיוס](../../../../../translated_images/2-hiring-agent-instructions.dc1fcc2513c88722145e46794f3b3cd8b96d62482090275da62679bbfb6e352a.he.png)

1. בחר **הגדרות** (למעלה מימין)

1. ודא את ההגדרות הבאות:

    | הגדרה | ערך |
    |---------|-------|
    | השתמש באורקסטרציה AI גנרטיבית לתגובות הסוכן שלך | **כן** |
    | מתינות תוכן | **מתון** |
    | השתמש בידע כללי | **כבוי** |
    | השתמש במידע מהאינטרנט | **כבוי** |
    | העלאות קבצים | **פעיל** |

![השתמש באורקסטרציה גנרטיבית](../../../../../translated_images/2-gen-orchestration.29e616a2d5721c51953fb6bde452c1ee06f40684911a6eba44e07de41c328726.he.png)
![הגדרת מתינות](../../../../../translated_images/2-set-medium-moderation.c6c0c1d6c427abac44441aad97892c84bbc43420b91c2c18e704980f604ec1b2.he.png)
![הגדרות ידע ואינטרנט](../../../../../translated_images/2-settings-knowledge-web.716090f708dff925ebb0d259f20734da39c831bba4df4f97bd334ce701aa92a9.he.png)

### 2.1.3 הוסף את סוכן הילד של קליטת בקשות

1. **נווט** ללשונית **סוכנים** בתוך סוכן הגיוס שלך - כאן תוסיף סוכנים מומחים.

1. בחר **+ הוסף** ואז **צור סוכן**. שים לב שזה מסומן כ"*צור סוכן קל שחי בתוך הסוכן הנוכחי שלך ויורש את הגדרותיו. אידיאלי לפירוק לוגיקה מורכבת* "  
    ![הוסף סוכן ילד](../../../../../translated_images/2-add-child-agent.47e6246572a58b85236c969c69f3bae835fd5099f4d7603abeab6b1ad9ce2a70.he.png)

1. **תן שם** לסוכן שלך `סוכן קליטת בקשות`

1. בחר **הסוכן בוחר** - בהתבסס על תיאור בתפריט הנפתח **מתי זה ישמש?**. אפשרויות אלו דומות להדקים שניתן להגדיר לנושאים.

1. הגדר את **התיאור** להיות:

    ```text
    Processes incoming resumes and stores candidates in the system
    ```

    ![תיאור סוכן קליטת בקשות](../../../../../translated_images/2-application-intake-agent-description.c5c0bf8ee632c04b9fb63c774f638de84cb8fa6ddf8c853cf0b651ea0e4964f0.he.png)

1. הרחב **מתקדם**, והגדר את העדיפות להיות `10000`. זה יבטיח שבהמשך סוכן הראיונות ישמש למענה על שאלות כלליות לפני זה. ניתן להגדיר כאן גם תנאי כמו לוודא שיש לפחות קובץ מצורף אחד.

1. ודא שהמתג **חיפוש באינטרנט** מוגדר ל**מושבת**. זאת מכיוון שאנחנו רוצים להשתמש רק במידע שסופק על ידי הסוכן הראשי.

1. בחר **שמור**

### 2.1.4 הגדר זרימת סוכן העלאת קורות חיים

סוכנים לא יכולים לבצע שום פעולה מבלי לקבל כלים או נושאים.
אנחנו משתמשים בכלי **Agent Flow** במקום נושאים עבור שלב *העלאת קורות חיים* מכיוון שתהליך backend רב-שלבי זה דורש ביצוע דטרמיניסטי ואינטגרציה עם מערכות חיצוניות. בעוד שנושאים מתאימים יותר להנחיית דיאלוג שיחתי, Agent Flows מספקים את האוטומציה המובנית הנדרשת לטיפול אמין בעיבוד קבצים, אימות נתונים ועדכונים בבסיסי נתונים (הוספה חדשה או עדכון קיים) ללא תלות באינטראקציה עם המשתמש.

1. מצאו את סעיף **Tools** בתוך דף Application Intake Agent.
   **חשוב:** זה לא לשונית Tools של הסוכן הראשי, אלא ניתן למצוא אותו אם תגללו למטה מתחת להוראות הסוכן המשני.

1. בחרו **+ Add**
   ![Add Tool](../../../../../translated_images/2-add-tool.bbf282ab0b7abeb6cad0032db2dba94adf53e4f206ac976c6c7b9b339fb0e996.he.png)

1. בחרו **+ New tool** ![Add new tool](../../../../../translated_images/2-new-tool-2.6e09c313b1af9d233ecb1c1559fb9f5d92123bfc2af6cc2df5f52e549b6b961c.he.png)

1. בחרו **Agent flow**.
    מעצב Agent Flow ייפתח, כאן נוסיף את הלוגיקה להעלאת קורות חיים.  
    ![Add Agent Flow](../../../../../translated_images/2-add-agent-flow.e5aecede97ecd79e08aae4be784a6255f354f13edb2621d3d61e961b09a70d53.he.png)

1. בחרו את הצומת **When an agent calls the flow**, ובחרו **+ Add** קלט עבור הפרמטרים הבאים, תוך הקפדה להוסיף גם את השם וגם את התיאור.

    | סוג  | שם       | תיאור                                                                                                   |
    |------|----------|-------------------------------------------------------------------------------------------------------|
    | קובץ | Resume   | קובץ PDF של קורות החיים                                                                               |
    | טקסט | Message  | חילוץ הודעה בסגנון מכתב מקדים מההקשר. ההודעה חייבת להיות פחות מ-2000 תווים.                             |
    | טקסט | UserEmail| כתובת האימייל שממנה הגיעו קורות החיים. זו תהיה כתובת האימייל של המשתמש שמעלה את הקובץ בצ'אט, או כתובת השולח אם התקבל באימייל. |

    ![Configure input parameters](../../../../../translated_images/2-upload-resume-trigger.1f3ca963aa3d9d723756d0636d99c1d458e197b16df93f2ac360283cf07f3fb1.he.png)

1. בחרו את **+ icon** מתחת לצומת ההפעלה, חפשו `Dataverse`, בחרו **See more** ליד Microsoft Dataverse, ואז בחרו את הפעולה **Add a new row** בסעיף **Microsoft Dataverse**  
    ![Add a new row node](../../../../../translated_images/2-upload-resume-add-resume.0e5bb197fef951167c9168c827e48e8d45a24c7d619452d387d980336a30d421.he.png)

1. תנו שם לצומת **Create Resume**, על ידי בחירת **ellipsis(...)**, ובחירת **Rename**  
    ![Rename node](../../../../../translated_images/2-upload-resume-add-resume-rename.f8ecb680cca6fe7d98cd9590ba4d59d0fe19a742baca4c05f7558ed3fea8c44e.he.png)

1. הגדירו את **Table name** ל-**Resumes**, ואז בחרו **Show all**, כדי להציג את כל הפרמטרים.

1. הגדירו את **properties** הבאים:

    | מאפיין                 | איך להגדיר                  | פרטים / ביטוי                                             |
    |------------------------|-----------------------------|-----------------------------------------------------------|
    | **Resume Title**       | נתונים דינמיים (אייקון ברק) | **When an agent calls the flow** → **Resume name** אם אינכם רואים את שם הקובץ, ודאו שהגדרתם את הפרמטר Resume לעיל כטיפוס נתונים. |
    | **Cover letter**       | ביטוי (אייקון fx)          | `if(greater(length(triggerBody()?['text']), 2000), substring(triggerBody()?['text'], 0, 2000), triggerBody()?['text'])` |
    | **Source Email Address** | נתונים דינמיים (אייקון ברק) | **When an agent calls the flow** → **UserEmail**             |
    | **Upload Date**        | ביטוי (אייקון fx)          | `utcNow()`                                                   |

    ![Edit Properties](../../../../../translated_images/2-upload-resume-add-resume-props.17586d1a9546933fbc66b13e8f36366d5122a90db2f37abb1b459dea97605270.he.png)

1. בחרו את **+ icon** מתחת לצומת Create Resume, חפשו `Dataverse`, בחרו **See more** ליד Microsoft Dataverse, ואז בחרו את הפעולה **Upload a file or an image**.
   **חשוב:** ודאו שלא בחרתם את הפעולה Upload a file or an image to the selected environment.

1. תנו שם לצומת **Upload Resume File**, על ידי בחירת **ellipsis(...)**, ובחירת **Rename**

1. הגדירו את **properties** הבאים:

     | מאפיין | איך להגדיר | פרטים |
     |--------|------------|-------|
     | **Content name** | נתונים דינמיים (אייקון ברק) | When an agent calls the flow → Resume name |
     | **Table name** | בחרו | Resumes |
     | **Row ID** | נתונים דינמיים (אייקון ברק) | Create Resume → See more → Resume |
     | **Column Name** | בחרו | Resume PDF |
     | **Content** | נתונים דינמיים (אייקון ברק) | When an agent calls the flow → Resume contentBytes |

     ![Set properties](../../../../../translated_images/2-upload-resume-upload-resume-file.2250f45ffd06b6c60e91e0517966334acbd9cf6c0f98dc2f3f615431ae03be90.he.png)

1. בחרו את הצומת **Respond to the agent**, ואז בחרו **+ Add an output**

     | מאפיין | איך להגדיר | פרטים |
     |--------|------------|-------|
     | **Type** | בחרו | `Text` |
     | **Name** | הזינו | `ResumeNumber` |
     | **Value** | נתונים דינמיים (אייקון ברק) | Create Resume → See More → Resume Number |
     | **Description** | הזינו | `The [ResumeNumber] of the Resume created` |

     ![Set Properties](../../../../../translated_images/2-upload-resume-return.f9beac6547b4f228a4ee6c538ca64e86883ab7b5d85b08c2cd6da26e4cc2e4c8.he.png)

1. בחרו **Save draft** בפינה הימנית העליונה  
     ![Save as draft](../../../../../translated_images/2-upload-resume-save-draft.6d5bed32d254815c765c19109b82113fd2520dbb5dce84288a3eb13896958d93.he.png)

1. בחרו את לשונית **Overview**, בחרו **Edit** בפאנל **Details**

     1. **Flow name**:`Resume Upload`
     1. **Description**:`Uploads a Resume when instructed`

     ![Rename agent flow](../../../../../translated_images/2-upload-resume-rename.a26569a2def30b456ed3176c21ce889637c4d1155c56ca479521d278f25a4d5d.he.png)

1. בחרו שוב את לשונית **Designer**, ובחרו **Publish**.  
     ![Publishing](../../../../../translated_images/2-upload-resume-publish.36f763ffc4487b32114a47a087fd5282beb7a9bb0272b3ff46046d8cd413e053.he.png)

### 2.1.5 חיבור הזרימה לסוכן שלכם

עכשיו תחברו את הזרימה שפורסמה לסוכן Application Intake שלכם.

1. חזרו ל-**Hiring Agent** ובחרו את לשונית **Agents**. פתחו את **Application Intake Agent**, ואז מצאו את פאנל **Tools**.  
    ![Add agent flow to agent](../../../../../translated_images/2-add-agent-flow-to-agent.3c9aadae42fc389e7c6f56ea80505cd067e45ba7e4aa03f201e2cd792e24d1fe.he.png)

1. בחרו **+ Add**

1. בחרו את המסנן **Flow**, וחפשו `Resume Upload`. בחרו את זרימת **Resume Upload**, ואז **Add and configure**.

1. הגדירו את הפרמטרים הבאים:

    | פרמטר | ערך |
    |-------|-----|
    | **Description** | `Uploads a Resume when instructed. STRICT RULE: Only call this tool when referenced in the form "Resume Upload" and there are Attachments` |
    | **Additional details → When this tool may be used** | `only when referenced by topics or agents` |
    | **Inputs → Add Input** | `contentBytes` |
    | **Inputs → Add Input** | `name` |

    ![Resume Upload Details 1](../../../../../translated_images/2-resume-upload-tool-props-1.e3d8bf3ebdfd5aa8df23aa6ab83eec8a5def709f2c7d27fb700bef16c598da2f.he.png)

    ![Add inputs](../../../../../translated_images/2-resume-upload-tool-props-2.16fb1380a34a9fa63b7c9673c7290ff09d491e920a5ff33b439a4b1a5abfccba.he.png)

1. לאחר מכן הגדירו את מאפייני הקלטים כך:

    | פרמטר קלט | מאפיין | פרטים |
    |-----------|--------|-------|
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

    ![Set input properties](../../../../../translated_images/2-resume-upload-tool-props-3.a18364f22b2c41c3e4f8fee68dddb01ff5190d57410d9fd3fe2fbddb3d74e352.he.png)

1. בחרו **Save**

### 2.1.6 הגדרת הוראות לסוכן

1. חזרו ל-**Application Intake Agent** על ידי בחירת לשונית **Agents**, ואז מצאו את פאנל **Instructions**.

1. בשדה **Instructions**, הדביקו את ההנחיות הברורות הבאות עבור הסוכן המשני שלכם:

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

1. כאשר ההוראות כוללות קו נטוי (/), בחרו את הטקסט אחרי הקו הנטוי ובחרו את השם המיושב. עשו זאת עבור:

    - `System.Activity.Attachments` (Variable)
    - `Upload Resume` (Tool)

    ![Edit the Instructions](../../../../../translated_images/2-application-agent-instructions.8840890a1fba22c38f04e35b13fa7ed83f72e9605d19a4eb661b51854daabd94.he.png)

1. בחרו **Save**

### 2.1.7 בדיקת סוכן Application Intake שלכם

עכשיו נוודא שחבר התזמורת הראשון שלכם עובד כראוי.

1. **הורידו** את [קורות החיים לבדיקה.](https://download-directory.github.io/?url=https://github.com/microsoft/agent-academy/tree/main/operative/sample-data/resumes&filename=operative_sampledata)

1. **הפעילו** את פאנל הבדיקה על ידי בחירת **Test**.

1. **העלו** שני קורות חיים בצ'אט הבדיקה, ותנו את ההודעה `Process these resumes`

    - הסוכן אמור להחזיר הודעה דומה ל-*ניתן להעלות רק קובץ קורות חיים אחד בכל פעם. אנא העלו קובץ אחד כדי להמשיך.*

    ![Test multiple uploads](../../../../../translated_images/2-test-multi-uploads.eb8866589463dcadb5570aba720531f0670ebfa6464d57e87415a84d9934a973.he.png)

1. נסו להעלות **רק קובץ קורות חיים אחד**, עם ההודעה `Process this resume`

    - הסוכן אמור להחזיר הודעה דומה ל-*הקובץ של Avery Example הועלה בהצלחה. מספר הקובץ הוא R10026.*

1. במפת **Activity map**, אתם אמורים לראות את **Application Intake Agent** מטפל בהעלאת הקובץ.  
    ![Upload Resume Activity Map](../../../../../translated_images/2-upload-activity-map.dd11a9d3e114f4f0a576408116d7ed89c6b144d8b4ac54a228c5247af036ecef.he.png)

1. נווטו ל-make.powerapps.com → ודאו שהסביבה שלכם נבחרה בפינה הימנית העליונה של בורר הסביבה.

1. בחרו **Apps** → Hiring Hub → תפריט ellipsis(...) → **Play**  
    ![Open model driven app](../../../../../translated_images/2-open-model-driven-app.550a2b764d513db4836444dd616dd87909adf54f2a930891276943b1a6e0ec77.he.png)

    הערה: אם כפתור ההפעלה אפור, זה אומר שלא פרסמתם את הפתרון שלכם ממשימה 01. בחרו **Solutions** → **Publish all customizations**.

1. נווטו ל-**Resumes**, ובדקו שהקובץ הועלה ומכתב הכיסוי הוגדר בהתאם.  
    ![Resume uploaded to Dataverse](../../../../../translated_images/2-resume-uploade.92a046941cd273a2597d47c593b158d158320fa5384c60907143dbe798a56644.he.png)

## 🧪מעבדה 2.2: הוספת סוכן מחובר להכנה לראיון

עכשיו ניצור את הסוכן המחובר להכנה לראיון ונוסיף אותו לסוכן Hiring Agent הקיים שלכם.

### 2.2.1 יצירת סוכן ראיון מחובר

1. **נווטו** ל-Copilot Studio. ודאו שהסביבה שלכם עדיין נבחרה בפינה הימנית העליונה של בורר הסביבה.

1. פתחו את **Hiring Agent**

1. נווטו ללשונית Agent, ובחרו **+ Add an agent**

1. בחרו **Connect an existing agent** → **Copilot Studio**

1. בחרו **+ New agent**

### 2.2.2 הגדרת הגדרות בסיסיות

1. בחרו בלשונית **Configure**, והזינו את המאפיינים הבאים:

    - **Name**: `Interview Agent`
    - **Description**: `Assists with the interview process.`

1. הוראות:

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

1. החליפו **Web Search** ל-**Disabled**

1. בחרו **Create**  
    ![Create the Interview Agent](../../../../../translated_images/2-create-interview-agent.55051dc9cceec6614c7c0d685df6bebd85dcc4bde63fedab33558db47fd32ebd.he.png)

### 2.2.3 הגדרת גישה לנתונים ופרסום

1. בסעיף **Knowledge**, בחרו **+ Add knowledge**  
    ![Add knowledge](../../../../../translated_images/2-interview-agent-add-knowledge.8a760ce46dc5253747785127c37f3bfe2ea5c60a5243a4c2ff0a63d0275d1c02.he.png)
1. בחרו **Dataverse**  
    ![Select Dataverse](../../../../../translated_images/2-interview-agent-add-knowledge-select-dataverse.1449c08b33f90f35c806071fb430c5e769a9d54d42b146a137404c63dc697d52.he.png)
1. בתיבת החיפוש, הקלידו `ppa_`. זהו הקידומת לטבלאות שייבאתם קודם.
1. **בחרו** את כל 5 הטבלאות (Candidate, Evaluation Criteria, Job Application, Job Role, Resume)
1. בחרו **Add to agent**  
    ![Select Dataverse tables](../../../../../translated_images/2-interview-agent-add-knowledge-select-tables.1b8e5f6286f4d58555b4f3e5ee49de7ad559f21d1b6806a1253d7f0c84bf7ab8.he.png)
1. בחרו את **Settings**, בסוכן הראיון, והגדירו את ההגדרות הבאות:

    - **Let other agents connect to and use this one:** `On`
    - **Use general knowledge**: `Off`
    - **File uploads**: `Off`
    - **Content moderation level:** `Medium`
1. בחרו **Save**
1. בחרו **Publish**, והמתינו לסיום הפרסום.

### 2.2.4 חיבור סוכן ההכנה לראיון לסוכן Hiring שלכם

1. חזרו ל-**Hiring Agent**

1. בחרו בלשונית **Agents**

1. השתמשו ב-**+Add an agent** → **Copilot Studio**, כדי להוסיף את **Interview Agent**. הגדירו את התיאור להיות:
    ```text
    Assists with the interview process and provides information about Resumes, Candidates, Job Roles, and Evaluation Criteria.
    ```

    ![פרטי סוכן מחובר](../../../../../translated_images/2-add-connected-agent.1d8c42eb5dd78891649fef9771473f639eb7015c6bda76ac17e24093c359b6b1.he.png)
    שימו לב שהאפשרות להעביר את היסטוריית השיחה לסוכן זה מסומנת. זה מאפשר לסוכן ההורה לספק הקשר מלא לסוכן המחובר.

1. בחרו **הוסף סוכן**

1. ודאו שאתם רואים את **סוכן קליטת הבקשות** ואת **סוכן הראיונות**. שימו לב כיצד אחד מהם הוא סוכן ילד והשני הוא סוכן מחובר.  
    ![סוכן ילד וסוכן מחובר](../../../../../translated_images/2-child-and-connected.d888e561872260dfa66c657d5b31f99f2a3e492c2ed62284e124c5b81af54e7b.he.png)

### 2.2.5 בדיקת שיתוף פעולה בין סוכנים

1. **פתחו** את לוח הבדיקה על ידי בחירת **בדיקה**.

1. **העלו** אחד מקורות החיים לבדיקה, והזינו את התיאור הבא שמסביר לסוכן ההורה מה ניתן להאציל לסוכן המחובר:

    ```text
    Upload this resume, then show me open job roles, each with a description of the evaluation criteria, then use this to match the resume to at least one suitable job role even if not a perfect match.
    ```

    ![בדיקת סוכנים מרובים](../../../../../translated_images/2-multi-agent-test.1e7c8e9dc283f220983f74a960f49b194d9e1c013c4369e33354c84411fc991c.he.png)

1. שימו לב כיצד סוכן הגיוס האציל את ההעלאה לסוכן הילד, ולאחר מכן ביקש מסוכן הראיונות לספק סיכום והתאמה לתפקיד באמצעות הידע שלו.  
   נסו דרכים שונות לשאול שאלות על קורות חיים, תפקידים ומדדי הערכה.  
   **דוגמאות:**

    ```text
    Give me a summary of active resumes
    ```

    ```text
    Summarize resume R10044
    ```

    ```text
    Which active resumes are suitable for the Power Platform Developer role?
    ```

## 🎉 משימה הושלמה

עבודה מצוינת, סוכן! **מבצע סימפוניה** הושלם. הצלחתם להפוך את סוכן הגיוס היחיד שלכם לתזמורת רב-סוכנים מתוחכמת עם יכולות מתמחות.

הנה מה שהשגתם במשימה זו:

**✅ שליטה בארכיטקטורה רב-סוכנים**  
כעת אתם מבינים מתי להשתמש בסוכנים ילדים מול סוכנים מחוברים וכיצד לעצב מערכות שמתרחבות.

**✅ סוכן ילד לקליטת בקשות**  
הוספתם סוכן ילד מתמחה לסוכן הגיוס שלכם שמטפל בקורות חיים, מוציא נתוני מועמדים ושומר מידע ב-Dataverse.

**✅ סוכן מחובר להכנת ראיונות**  
יצרתם סוכן מחובר לשימוש חוזר להכנת ראיונות וחיברתם אותו בהצלחה לסוכן הגיוס שלכם.

**✅ תקשורת בין סוכנים**  
ראיתם כיצד הסוכן הראשי שלכם יכול לתאם עם סוכנים מתמחים, לשתף הקשר ולנהל תהליכים מורכבים.

**✅ בסיס לאוטונומיה**  
מערכת הגיוס המשופרת שלכם מוכנה כעת לתכונות מתקדמות שנוסיף במשימות הבאות: טריגרים אוטונומיים, ניהול תוכן וחשיבה מעמיקה.

🚀**הבא בתור:** במשימה הבאה תלמדו כיצד להגדיר את הסוכן שלכם לעיבוד אוטונומי של קורות חיים מתוך מיילים!

⏩[עברו למשימה 03: אוטומציה של הסוכן עם טריגרים](../03-automate-triggers/README.md)

## 📚 משאבים טקטיים

📖 [הוספת סוכנים אחרים (תצוגה מקדימה)](https://learn.microsoft.com/microsoft-copilot-studio/authoring-add-other-agents?WT.mc_id=power-182762-scottdurow)

📖 [הוספת כלים לסוכנים מותאמים אישית](https://learn.microsoft.com/microsoft-copilot-studio/advanced-plugin-actions?WT.mc_id=power-182762-scottdurow)

📖 [עבודה עם Dataverse ב-Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/knowledge-add-dataverse?WT.mc_id=power-182762-scottdurow)

📖 [סקירה כללית של זרימות סוכנים](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview?WT.mc_id=power-182762-scottdurow)

📖 [יצירת פתרון](https://learn.microsoft.com/power-platform/alm/solution-concepts-alm?WT.mc_id=power-182762-scottdurow)

📖 [מדריך ALM לפתרונות Power Platform](https://learn.microsoft.com/power-platform/alm/overview-alm?WT.mc_id=power-182762-scottdurow)

📺 [שיתוף פעולה בין סוכנים ב-Copilot Studio](https://youtu.be/d-oD3pApHAg?si=rwIHKhJTkjSvhTHw)

---

**הצהרת אחריות**:  
מסמך זה תורגם באמצעות שירות תרגום AI [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור סמכותי. עבור מידע קריטי, מומלץ להשתמש בתרגום מקצועי אנושי. איננו אחראים לאי הבנות או לפרשנויות שגויות הנובעות משימוש בתרגום זה.