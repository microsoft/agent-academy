<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9dceeba2eae2bb73e328602a060eddab",
  "translation_date": "2025-10-17T01:28:38+00:00",
  "source_file": "docs/recruit/11-publish-your-agent/README.md",
  "language_code": "he"
}
-->
# 🚨 משימה 11: פרסם את הסוכן שלך

## 🕵️‍♂️ שם קוד: `מבצע פרסם פרסם פרסם`

> **⏱️ חלון זמן המבצע:** `~30 דקות`  

🎥 **צפו בהדרכה**

[![תמונה ממוזערת של סרטון פרסום סוכן](../../../../../translated_images/video-thumbnail.cb69abce792f4bd310436e8b46ebbfcada62f60c636bb894e4077046131f7023.he.jpg)](https://www.youtube.com/watch?v=eVZmljhYlSI "צפו בהדרכה ביוטיוב")

## 🎯 תקציר המשימה

לאחר שסיימת סדרת מודולים מאתגרת, יוצר הסוכנים, אתה מוכן כעת לשלב הקריטי ביותר: פרסום הסוכן שלך. הגיע הזמן להפוך את היצירה שלך לזמינה למשתמשים ב-Microsoft Teams וב-Microsoft 365 Copilot.

הסוכן שלך—מצויד במשימה ברורה, כלים חזקים וגישה למקורות ידע מרכזיים—מוכן לשרת. באמצעות Microsoft Copilot Studio, תוכל לפרוס את הסוכן שלך כך שיתחיל לסייע למשתמשים אמיתיים, בדיוק במקום שבו הם עובדים.

בואו נשגר את הסוכן שלכם לפעולה.

## 🔎 מטרות

📖 השיעור הזה מכסה:

1. למה חשוב לפרסם את הסוכן שלך
1. מה קורה כשאתה מפרסם את הסוכן שלך
1. איך להוסיף ערוץ (Microsoft Teams ו-Microsoft 365 Copilot)
1. איך להוסיף את הסוכן ב-Microsoft Teams
1. איך להפוך את הסוכן לזמין ב-Microsoft Teams לכל הארגון שלך

## 🚀 פרסם סוכן

בכל פעם שאתה עובד על סוכן ב-Copilot Studio, ייתכן שתעדכן אותו על ידי הוספת ידע או כלים. כשאתה מוכן עם כל השינויים ובדקת אותם היטב, אתה מוכן לפרסם אותו. פרסום מבטיח שהעדכונים האחרונים יהיו זמינים. אם תעדכן את הסוכן שלך בכלים חדשים ולא תלחץ על כפתור הפרסום, הם עדיין לא יהיו זמינים למשתמשי הקצה.

תמיד וודא שאתה לוחץ על כפתור הפרסום כשאתה רוצה לדחוף את העדכונים למשתמשי הסוכן שלך. ייתכן שלסוכן שלך יש ערוצים שהוספת לו, וכשתלחץ על פרסום, העדכונים יהיו זמינים לכל הערוצים שהוספת לסוכן.

## ⚙️ הגדר ערוצים

ערוצים קובעים היכן המשתמשים שלך יכולים לגשת ולתקשר עם הסוכן שלך. לאחר שתפרסם את הסוכן שלך, תוכל להפוך אותו לזמין במספר ערוצים. כל ערוץ עשוי להציג את תוכן הסוכן שלך בצורה שונה.

תוכל להוסיף את הסוכן שלך לערוצים הבאים:

- **Microsoft Teams ו-Microsoft 365 Copilot** - הפוך את הסוכן שלך לזמין בצ'אטים ובפגישות ב-Teams, ובחוויות Microsoft 365 Copilot ([למידע נוסף](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams))
- **אתר הדגמה** - בדוק את הסוכן שלך באתר הדגמה שמסופק על ידי Copilot Studio ([למידע נוסף](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-web-channels))
- **אתר מותאם אישית** - הטמע את הסוכן שלך ישירות באתר שלך ([למידע נוסף](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-web-channels))
- **אפליקציה לנייד** - שלב את הסוכן שלך באפליקציה מותאמת אישית לנייד ([למידע נוסף](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-custom-application))
- **SharePoint** - הוסף את הסוכן שלך לאתרי SharePoint לצורך סיוע במסמכים ובאתרים ([למידע נוסף](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-sharepoint))
- **Facebook Messenger** - התחבר עם משתמשים דרך פלטפורמת ההודעות של Facebook ([למידע נוסף](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-facebook))
- **Power Pages** - שלב את הסוכן שלך באתרים של Power Pages ([למידע נוסף](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-power-pages))
- **ערוצי Azure Bot Service** - גש לערוצים נוספים כולל Slack, Telegram, Twilio SMS ועוד ([למידע נוסף](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-azure-bot-service-channels))

כדי להוסיף ערוץ, נווט ללשונית **Channels** בסוכן שלך ובחר את הערוץ שברצונך להגדיר. לכל ערוץ יש דרישות הגדרה ספציפיות וייתכן שידרשו צעדי אימות או הגדרות נוספים.

![לשונית ערוצים בסוכן](../../../../../translated_images/channels.01b4185735e1147c56dd9c6a9d33a751cdf45e44b3b8515b21e2c57a9c1fe9b8.he.png)

## 📺 חוויות ערוץ

לערוצים שונים יש חוויות משתמש שונות. כשאתה בונה סוכן למספר ערוצים, וודא שאתה מודע להבדלים בין הערוצים. תמיד מומלץ לבדוק את הסוכן שלך במספר ערוצים כדי לראות אם הוא באמת עושה את מה שהתכוונת.

| חוויה                            | אתר           | Teams ו-Microsoft 365 Copilot           | Facebook                 | Dynamics Omnichannel for Customer Service                   |
| --------------------------------- | ------------- | --------------------------------------- | ------------------------ | ----------------------------------------------------------- |
| [סקר שביעות רצון לקוחות][1]      | כרטיס אדפטיבי | טקסט בלבד                              | טקסט בלבד               | טקסט בלבד                                                   |
| [אפשרויות בחירה מרובות][1]       | נתמך         | [נתמך עד שש (ככרטיס Hero)][4]          | [נתמך עד 13][6]         | [נתמך חלקית][8]                                             |
| [Markdown][2]                    | נתמך         | [נתמך חלקית][5]                        | [נתמך חלקית][7]         | [נתמך חלקית][9]                                             |
| [הודעת ברוך הבא][1]              | נתמך         | נתמך                                   | לא נתמך                 | נתמך עבור [צ'אט][10]. לא נתמך עבור ערוצים אחרים.           |
| [Did-You-Mean][3]                | נתמך         | נתמך                                   | נתמך                    | נתמך עבור [Microsoft Teams][11], [צ'אט][10], Facebook, וערוצי טקסט בלבד (SMS דרך [TeleSign][12] ו-[Twilio][13], [WhatsApp][14], [WeChat][15], ו-[Twitter][16]). פעולות מוצעות מוצגות כרשימה טקסטואלית בלבד; משתמשים חייבים להקליד מחדש אפשרות כדי להגיב. |

[1]: https://learn.microsoft.com/microsoft-copilot-studio/authoring-create-edit-topics  
[2]: https://daringfireball.net/projects/markdown/  
[3]: https://learn.microsoft.com/microsoft-copilot-studio/advanced-ai-features  
[4]: https://learn.microsoft.com/microsoftteams/platform/concepts/cards/cards-reference#hero-card  
[5]: https://learn.microsoft.com/microsoftteams/platform/bots/how-to/format-your-bot-messages#text-only-messages  
[6]: https://developers.facebook.com/docs/messenger-platform/send-messages/quick-replies/  
[7]: https://www.facebook.com/help/147348452522644?helpref=related  
[8]: https://learn.microsoft.com/dynamics365/customer-service/asynchronous-channels#suggested-actions-support  
[9]: https://learn.microsoft.com/dynamics365/customer-service/asynchronous-channels#preview-support-for-formatted-messages  
[10]: https://learn.microsoft.com/dynamics365/customer-service/set-up-chat-widget  
[11]: https://learn.microsoft.com/dynamics365/customer-service/configure-microsoft-teams  
[12]: https://learn.microsoft.com/dynamics365/customer-service/configure-sms-channel  
[13]: https://learn.microsoft.com/dynamics365/customer-service/configure-sms-channel-twilio  
[14]: https://learn.microsoft.com/dynamics365/customer-service/configure-whatsapp-channel  
[15]: https://learn.microsoft.com/dynamics365/customer-service/configure-wechat-channel  
[16]: https://learn.microsoft.com/dynamics365/customer-service/configure-twitter-channel  

> [!NOTE]  
> ישנם כמה דוגמאות שבהן ניתן להשתמש בלוגיקה שונה עבור ערוצים שונים. דוגמה לכך ניתן למצוא במאגר Power Platform Snippets:  
>  
> הנרי ג'יימס שיתף דוגמה כיצד להציג כרטיס אדפטיבי שונה כאשר הערוץ הוא Microsoft Teams. ([קישור לדוגמה](https://github.com/pnp/powerplatform-snippets/blob/main/copilot-studio/multiple-topics-matched-topic/source/multiple-topics-matched.yaml#L40))

## 🧪 מעבדה 11: פרסם את הסוכן שלך ל-Teams ול-Microsoft 365 Copilot

### 🎯 מקרה שימוש

סוכן התמיכה הטכנית של Contoso שלך כעת מוגדר לחלוטין עם יכולות חזקות—הוא יכול לגשת למקורות ידע ב-SharePoint, ליצור כרטיסי תמיכה, לשלוח התראות יזומות ולהגיב בצורה חכמה לשאלות משתמשים. עם זאת, כל התכונות הללו זמינות כרגע רק בסביבת הפיתוח שבה בנית אותם.

**האתגר:** משתמשי הקצה לא יכולים ליהנות מיכולות הסוכן שלך עד שהוא יפורסם כראוי ויהפוך לנגיש בערוצים שבהם הם עובדים בפועל.

**הפתרון:** פרסום הסוכן שלך מבטיח שהגרסה האחרונה—עם כל העדכונים האחרונים, הנושאים החדשים, מקורות הידע המשופרים והזרימות המוגדרות—תהיה זמינה למשתמשים אמיתיים. ללא פרסום, המשתמשים עדיין יתקשרו עם גרסה ישנה של הסוכן שלך שעשויה להיות חסרה פונקציונליות קריטית.

הוספת ערוץ Teams ו-Microsoft 365 Copilot חשובה באותה מידה מכיוון:

- **אינטגרציה עם Teams**: העובדים בארגון שלך מבלים את רוב יומם ב-Microsoft Teams לצורך שיתוף פעולה, פגישות ותקשורת. על ידי הוספת הסוכן ל-Teams, משתמשים יכולים לקבל תמיכה טכנית מבלי לעזוב את סביבת העבודה הראשית שלהם.

- **Microsoft 365 Copilot**: משתמשים יכולים לגשת לסוכן התמיכה הטכנית המיוחד שלך ישירות בתוך חוויית Microsoft 365 Copilot שלהם, מה שהופך אותו לאינטגרלי לזרימת העבודה היומית שלהם באפליקציות Office.

- **גישה מרכזית**: במקום לזכור אתרים או אפליקציות נפרדות, משתמשים יכולים לגשת לתמיכה טכנית דרך הפלטפורמות שבהן הם כבר משתמשים, מה שמפחית חיכוכים ומגביר את האימוץ.

המשימה הזו הופכת את עבודת הפיתוח שלך לפתרון מוכן לייצור שמספק ערך אמיתי למשתמשי הקצה בארגון שלך.

### דרישות מוקדמות

לפני שתתחיל במעבדה זו, וודא שיש לך:

- ✅ סיימת את המעבדות הקודמות ויש לך סוכן תמיכה טכנית של Contoso מוגדר לחלוטין
- ✅ הסוכן שלך נבדק ומוכן לשימוש בייצור
- ✅ הרשאות בסביבת Copilot Studio שלך לפרסום סוכנים
- ✅ גישה ל-Microsoft Teams בארגון שלך

### 11.1 פרסם את הסוכן שלך

כעת, לאחר שסיימנו את כל העבודה על הסוכן, עלינו לוודא שכל העבודה שלנו זמינה למשתמשי הקצה שעתידים להשתמש בסוכן שלנו. כדי לוודא שהתוכן זמין לכל המשתמשים, עלינו לפרסם את הסוכן שלנו.

1. עבור לסוכן התמיכה הטכנית של Contoso ב-Copilot Studio (דרך [פורטל היוצר של Copilot Studio](https://copilotstudio.microsoft.com))

    ב-Copilot Studio, קל לפרסם את הסוכן שלך. פשוט בחר בכפתור הפרסום בראש סקירת הסוכן.

    ![סקירת פרסום סוכן](../../../../../translated_images/publish.0ea13d92c5642af915bb3340c95d21fc560314f4df9de212039a9bfc90b91789.he.png)

1. בחר בכפתור **Publish** בסוכן שלך

    ייפתח חלון קופץ לאישור שאתה באמת רוצה לפרסם את הסוכן שלך.

    ![אישור פרסום](../../../../../translated_images/publish-popup.5c81be18b2a810270303f4020b0469152a40e006d26cb4aa50373ecaf5033777.he.png)

1. בחר **Publish** כדי לאשר את פרסום הסוכן שלך

    כעת מופיעה הודעה שהסוכן שלך מתפרסם. אין צורך להשאיר את החלון הקופץ פתוח. תקבל הודעה כשהסוכן יפורסם.

    ![הסוכן מתפרסם](../../../../../translated_images/publishing.a459aaf38bc05b77198534174dc726b598c5270c5474227933f6a0f1a1efb299.he.png)

    כשהסוכן סיים להתפרסם, תראה את ההודעה בראש דף הסוכן.

    ![הודעת פרסום הושלמה](../../../../../translated_images/publish-notification.19af02a64b396fb845fa86917f97f165bb2098b76de97cb039c6a9547323eee1.he.png)

אבל - רק פרסמנו את הסוכן, עדיין לא הוספנו אותו לערוץ, אז בואו נתקן את זה עכשיו!

### 11.2 הוסף את ערוץ Teams ו-Microsoft 365 Copilot

1. כדי להוסיף את ערוץ Teams ו-Microsoft 365 Copilot לסוכן שלנו, עלינו לבחור **Channel** בניווט העליון של הסוכן

    ![לשונית ערוצים](../../../../../translated_images/channels-tab.c0e6f94aec1578072eee8efd47e461d58cd685799de84a4ddc18cb418886f834.he.png)

    כאן נוכל לראות את כל הערוצים שניתן להוסיף לסוכן הזה.

1. בחר **Teams ו-Microsoft 365**

    ![בחר Teams ו-Microsoft 365](../../../../../translated_images/teams-m365-copilot.f0893e75ed6cfa7e41d8beb6b0131114d29a1b71dab2b2d888bde406d30fcff0.he.png)

1. בחר **Add channel** כדי להשלים את האשף ולהוסיף את הערוץ לסוכן

    ![בחר הוסף ערוץ](../../../../../translated_images/add-channel.5fd407ac747e713cea43d87cfdc015c5d203a70e729619ca01a67e6868afdb03.he.png)

    זה ייקח קצת זמן עד שזה יתווסף. לאחר שזה יתווסף, תופיע הודעה ירוקה בראש הסרגל הצדדי.

    ![ערוץ נוסף](../../../../../translated_images/channel-added.ce9c58eff88524ba2a74c37c7939350303e650d93f34c753dfe9636226e197f1.he.png)

1. בחר **See agent in Teams** כדי לפתוח כרטיסייה חדשה

    ![ראה סוכן ב-Teams](../../../../../translated_images/see-agent-teams.5f265c0babfccbe4ef18fbe6259df04ec8649d48fed94d42b3c330e37ca0a9d5.he.png)

1. בחר **Add** כדי להוסיף את סוכן התמיכה הטכנית של Contoso ל-Teams

    ![הוסף סוכן ל-Teams](../../../../../translated_images/add-teams.645ddf3b6719bd7edfcf453d77481c18afb7df478a4f655ef2452a0b77ab6944.he.png)

    זה ייקח קצת זמן. לאחר מכן תופיע המסך הבא:

    ![הסוכן נוסף בהצלחה](../../../../../translated_images/teams-added.3cafc77c56381bdd977ea80a117795c6ea677b2d86568cd5da24338e3958f7ce.he.png)

1. בחר **Open** כדי לפתוח את הסוכן ב-Teams

    זה יפתח את הסוכן ב-Teams כאפליקציה של Teams

    ![הסוכן פתוח ב-Microsoft Teams](../../../../../translated_images/agent-teams-open.5a83151f38b31ebeccf7cabf36f2bfd03e7045bb902b4103f1d2126c6aec9498.he.png)

כעת פרסמנו את הסוכן לעבודה עבורך ב-Microsoft Teams, אבל ייתכן שתרצה להפוך אותו לזמין עבור יותר אנשים.

### 11.3 הפוך את הסוכן לזמין לכל המשתמשים בדייר

1. סגור את כרטיסיית הדפדפן שבה סוכן התמיכה הטכנית של Contoso פתוח

    זה אמור להחזיר אותך ל-Copilot Studio שבו עדיין פתוח לוח הצד של Teams ו-Microsoft 365 Copilot. כרגע רק פתחנו את הסוכן ב-Teams, אבל אנחנו יכולים לעשות הרבה יותר כאן. אנחנו יכולים לערוך את פרטי הסוכן, לפרוס את הסוכן ליותר משתמשים ועוד.

1. בחר **Edit details**

    ![ערוך פרטים](../../../../../translated_images/m365-teams-edit-details.317ee562b1b2aa75c093f2833b793610c3445f69dada7163f164674bad173ab5.he.png)
זה יפתח חלון שבו נוכל לשנות מגוון פרטים והגדרות של הסוכן. ניתן לשנות פרטים בסיסיים כמו האייקון, צבע הרקע של האייקון והתיאורים. בנוסף, ניתן לשנות הגדרות של Teams (לדוגמה, לאפשר למשתמש להוסיף את הסוכן לצוות או להשתמש בסוכן בצ'אטים קבוצתיים ובפגישות) כאן. כאשר תבחרו *עוד*, תוכלו גם לשנות פרטים של המפתח כמו שם המפתח, האתר, הצהרת הפרטיות ותנאי השימוש.

![חלון עריכת פרטים](../../../../../translated_images/edit-details.216f5c77105e190ca504c4c21152f32b0965450427d7cc175df370935b715510.he.png)

1. בחרו **ביטול** כדי לסגור את חלון עריכת הפרטים.

1. בחרו **אפשרויות זמינות**

    ![אפשרויות זמינות](../../../../../translated_images/m365-teams-availability-options.0ab161ab446293ef5c8f877df3457b87c8a02f5c9df21dc735fb9cddc6b58ed1.he.png)

    זה יפתח את חלון אפשרויות הזמינות, שבו תוכלו להעתיק קישור לשליחה למשתמשים כדי להשתמש בסוכן (שימו לב, יש לשתף את הסוכן עם המשתמש גם כן) ותוכלו להוריד קובץ להוספת הסוכן לחנות Microsoft Teams או Microsoft 365. כדי להציג את הסוכן בחנות, יש לכם אפשרויות נוספות: תוכלו להציג אותו לחברי הצוות ולמשתמשים משותפים (להצגה בקטגוריית *נבנה עם Power Platform*) או להציג אותו לכל המשתמשים בארגון (זה דורש אישור מנהל).

1. בחרו **הצג לכולם בארגון שלי**

    ![אפשרויות זמינות](../../../../../translated_images/availability-options.a7043460dcbbcdbb6981c86cae687b0d4ecd3d7a8ef709dd267684b17d4a7b8e.he.png)

1. בחרו **שלח לאישור מנהל**

    ![שלח לאישור](../../../../../translated_images/submit-for-approval.6c7cfa08ed2637c8e0219dde1d69ac7e62e81b32289e77ff5b6cdeb730ab5e0b.he.png)

    עכשיו, המנהל שלכם צריך לאשר את הגשת הסוכן. הוא יכול לעשות זאת על ידי כניסה למרכז הניהול של Teams וחיפוש אחר Contoso Helpdesk Agent באפליקציות. בתמונה ניתן לראות מה המנהל יראה במרכז הניהול של Teams.

    ![אפליקציית Teams ממתינה לאישור](../../../../../translated_images/pending-approval.ec9b6ebcdd1c9a8ca8f9bf20148ffa97e40d16720779c14f106dc3ddda170202.he.png)

    המנהל צריך לבחור את Contoso Helpdesk Agent ולבחור *פרסם* כדי לפרסם את הסוכן לכל המשתמשים.

    ![פרסום אפליקציית Teams](../../../../../translated_images/teams-apps-publish.cccbf85984750c60cc7cc27fc20c152ef14d21e3dacb6fa3df01c024ac5fe7ad.he.png)

    כאשר המנהל פרסם את הגשת הסוכן, תוכלו לרענן את Copilot Studio ותראו את הבאנר *זמין בחנות האפליקציות* באפשרויות הזמינות.

    ![זמין בחנות האפליקציות](../../../../../translated_images/available-in-app-store.aeb2a875a164b537ee62d0ece51399e94986393837a1c6eec544b81c673e23b0.he.png)

יש כאן אפילו יותר אפשרויות. המנהל שלכם יכול לשנות את מדיניות ההגדרה הגלובלית ולהתקין אוטומטית את Contoso Helpdesk Agent לכל המשתמשים בדייר. בנוסף לכך - אתם יכולים להצמיד את Contoso Helpdesk Agent לסרגל השמאלי כך שלכולם תהיה גישה נוחה אליו.

## ✅ משימה הושלמה

🎉 **מזל טוב!** הצלחתם לפרסם את הסוכן שלכם ולהוסיף אותו ל-Teams ול-Microsoft 365 Copilot! המשימה הבאה היא המשימה האחרונה בקורס: הבנת רישוי.

⏭️ [עברו לשיעור **הבנת רישוי**](../12-understanding-licensing/README.md)

## 📚 משאבים טקטיים

🔗 [תיעוד ערוצי פרסום](https://learn.microsoft.com/microsoft-copilot-studio/publication-fundamentals-publish-channels)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/11-publish-your-agent" alt="סטטיסטיקות אנליטיות" />

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום AI [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש להיות מודעים לכך שתרגומים אוטומטיים עשויים להכיל שגיאות או אי דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור סמכותי. עבור מידע קריטי, מומלץ להשתמש בתרגום מקצועי אנושי. איננו אחראים לאי הבנות או לפרשנויות שגויות הנובעות משימוש בתרגום זה.