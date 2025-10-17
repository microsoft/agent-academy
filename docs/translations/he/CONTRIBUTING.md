<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-17T01:12:29+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "he"
}
-->
# תרומה ל-MCS Agent Academy

תודה על התעניינותך בתרומה ל-MCS Agent Academy! מדריך זה יסייע לך להגדיר את סביבת הפיתוח שלך ולהבין את הסטנדרטים שלנו לתיעוד.

## סטנדרטים לתיעוד

אנו פועלים לפי הסטנדרטים של Microsoft לתיעוד כדי להבטיח תוכן עקבי ואיכותי. לקבלת הדרכה מקיפה על כתיבת תיעוד אפקטיבי, אנא עיין ב:

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - מדריך מלא לכתיבת תיעוד בהתאם לסגנון ולסטנדרטים של Microsoft.

משאב זה מכסה:

- כתיבת תוכן ברור ותמציתי
- שימוש נכון בתחביר Markdown
- שמירה על טרמינולוגיה עקבית
- מבנה תיעוד אפקטיבי
- שיטות עבודה מומלצות לנגישות

## בדיקת תקינות Markdown

אנו משתמשים ב-markdownlint כדי להבטיח פורמט ואיכות עקביים בכל התיעוד שלנו. זה מסייע לשמור על קריאות וסטנדרטים מקצועיים לאורך כל המאגר.

### התקנת markdownlint-cli2

כדי להפעיל את markdownlint באופן מקומי ולהתאים לזרימת העבודה שלנו ב-GitHub, התקן markdownlint-cli2:

```powershell
npm install -g markdownlint-cli2
```

### הפעלת markdownlint באופן מקומי

לאחר ההתקנה, תוכל להפעיל markdownlint על כל קבצי Markdown במאגר:

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### תצורה

תצורת markdownlint שלנו מוגדרת בקובץ `.markdownlint.jsonc` בשורש המאגר. תצורה זו:

- מבטלת בדיקות אורך שורות (MD013) מכיוון שלא הגדרנו סטנדרט
- מאפשרת כותרות כפולות רק באחים (MD024) עבור חלקי תבנית נפוצים
- מבטלת אימות קידומת רשימה מסודרת (MD029) באופן גלובלי עקב תוכן משונן שמאפס את המספור
- מאפשרת שימוש בבלוקים של קוד לטקסט (MD046)

### הוספת חריגות מקומיות לכללי markdownlint

למרות שהתצורה הגלובלית שלנו מטפלת ברוב התרחישים הנפוצים, ייתכן שתיתקל במצבים שבהם תצטרך להוסיף חריגות מקומיות לכללי markdownlint בקבצים בודדים. הנה דוגמאות כיצד לעשות זאת:

#### אפשרות 1: התעלמות מהשורה הבאה

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### אפשרות 2: התעלמות מטווח ספציפי

```markdown
<!-- markdownlint-disable MD029 -->
1. First item
5. Fifth item (skips numbers but won't trigger MD029)
10. Tenth item
<!-- markdownlint-enable MD029 -->

<!-- markdownlint-disable MD013 -->
Multiple very long lines that exceed the character limit
can be placed between disable and enable comments
<!-- markdownlint-enable MD013 -->
```

#### אפשרות 3: התעלמות מכל הקובץ

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> יש למקם את אלה בראש קובץ ה-Markdown שלך כדי לבטל כללים ספציפיים עבור המסמך כולו

### מתי להשתמש בחריגות מקומיות

ייתכן שתצטרך חריגות עבור כללי markdownlint שונים כאשר:

1. **MD029 (מספור רשימה מסודרת)**: המשך רשימות ממוספרות לאחר תוכן אחר, מספור מכוון שאינו מתחיל מ-1, או תוכן מורכב משונן
2. **MD013 (אורך שורה)**: דוגמאות קוד, כתובות URL, או תוכן טכני שלא ניתן לשבור באופן סביר על פני שורות
3. **MD033 (HTML מוטמע)**: כאשר אתה זקוק לאלמנטים HTML ספציפיים לעיצוב שלא ניתן להשיג עם Markdown
4. **MD041 (כותרת בשורה הראשונה)**: קבצי תבנית או מסמכים שלא מתחילים בכוונה עם כותרת

### שיטות עבודה מומלצות

1. **השתמש בחריגות במשורה**: הוסף חריגות רק כאשר הדבר נחוץ לצורך בהירות התיעוד
2. **הוסף הערות לחריגות שלך**: כאשר אתה משתמש בחריגות, שקול להוסיף הערה קצרה המסבירה מדוע
3. **העדף `markdownlint-disable-next-line`**: זה מדויק יותר מאשר ביטול עבור קטעים שלמים
4. **הפעל את הבודק לפני שליחה**: תמיד הפעל `markdownlint-cli2 "**/*.md"` לפני שליחת שינויים

> **טיפ:** תוכל להפעיל במהירות גם את markdownlint וגם את בדיקות האיות של cSpell על קבצי Markdown שלך באמצעות סקריפט PowerShell המסופק `scripts/validate-markdown.ps1`. סקריפט זה מסייע באוטומציה של בדיקות פורמט ואיות נפוצות כדי להבטיח שהתרומות שלך עומדות בהנחיות שלנו.

תוכל להפעיל אותו משורש המאגר באמצעות PowerShell:

```powershell
./scripts/validate-markdown.ps1
```

### שגיאות markdownlint נפוצות ותיקונים

- **MD036**: השתמש בכותרות נכונות (`## כותרת`) במקום הדגשה (`**טקסט מודגש**`)
- **MD007**: תקן הזחה של רשימה לא מסודרת (השתמש ב-2 רווחים, לא 4)
- **MD022**: הוסף שורות ריקות לפני ואחרי כותרות
- **MD032**: הוסף שורות ריקות לפני ואחרי רשימות
- **MD009**: הסר רווחים מיותרים בסוף שורות

### זרימת עבודה ב-GitHub

המאגר שלנו כולל זרימת עבודה ב-GitHub שמפעילה markdownlint באופן אוטומטי על כל בקשות המשיכה. זרימת העבודה:

- משתמשת באותו כלי markdownlint-cli2 שתוכל להפעיל באופן מקומי
- אינה כוללת את הקבצים `SUPPORT.md`, `SECURITY.md`, ו-`CODE_OF_CONDUCT.md`
- משתמשת בתצורת `.markdownlint.jsonc` שלנו
- מדווחת על בעיות כאזהרות, ומאפשרת למזג PRs תוך הדגשת הזדמנויות לשיפור פורמט

### הרחבת markdownlint ל-VS Code

אם אתה משתמש ב-VS Code, אנו ממליצים להתקין את [הרחבת markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) לבדיקת Markdown בזמן אמת:

1. **התקן את ההרחבה** - חפש "markdownlint" מאת David Anson בשוק ההרחבות של VS Code
2. **תצורה אוטומטית** - ההרחבה תשתמש אוטומטית בקובץ התצורה `.markdownlint.jsonc` שלך
3. **משוב בזמן אמת** - ראה קווים מתחת לבעיות פורמט Markdown בזמן ההקלדה
4. **תיקונים מהירים** - השתמש ב-`Ctrl+.` (Cmd+. ב-Mac) כדי לראות תיקונים אוטומטיים זמינים עבור בעיות רבות
5. **לוח בעיות** - צפה בכל בעיות Markdown בלוח הבעיות של VS Code

זה מספק משוב מיידי בזמן הכתיבה, מה שמקל על שמירה על סטנדרטים של Markdown לפני שליחת השינויים שלך.

## בדיקת איות

אנו משתמשים ב-cSpell (בודק איות קוד) כדי לשמור על עקביות האיות בכל התיעוד שלנו. זה מסייע להבטיח איכות מקצועית ולהפחית שגיאות כתיב לאורך כל המאגר.

### התקנת cSpell

כדי להפעיל cSpell באופן מקומי, התקן אותו באופן גלובלי:

```powershell
npm install -g cspell
```

### הפעלת cSpell באופן מקומי

לאחר ההתקנה, תוכל להפעיל cSpell כדי לבדוק איות בתיעוד:

```powershell
# Check all markdown files in the docs folder
cspell "docs/**/*.md"

# Check all markdown files in the repository
cspell "**/*.md"

# Check a specific file
cspell "docs/recruit/README.md"

# Show suggestions for misspelled words
cspell --show-suggestions "docs/**/*.md"

# Check with minimal output (cleaner display)
cspell --no-progress --no-summary "docs/**/*.md"
```

### תצורה

תצורת cSpell שלנו מוגדרת בקובץ `cspell.json` בשורש המאגר. תצורה זו:

- כוללת מילים מותאמות אישית ספציפיות לתחום שלנו (Copilot, SharePoint, Dataverse וכו')
- מתעלמת מסוגי קבצים נפוצים שאין צורך לבדוק בהם איות (תמונות, קבצי בנייה)
- מגדירה את השפה לאנגלית לבדיקה איות

### הוספת מילים חדשות

אם אתה נתקל במילה ש-cSpell מסמן כשגויה אך היא למעשה נכונה (כמו שמות מוצרים, מונחים טכניים או שמות פרטיים), תוכל להוסיף אותה למערך `words` בקובץ `cspell.json`:

```json
{
  "words": [
    "Contoso",
    "Dataverse",
    "YourNewWord"
  ]
}
```

### הרחבת cSpell ל-VS Code

אם אתה משתמש ב-VS Code עם [הרחבת Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker), תוכל להוסיף מילים במהירות לתצורה שלך:

1. **צפה בשגיאות איות** - חפש קווים מתחת למילים שגויות
1. **השתמש בתיקון מהיר** - לחץ לחיצה ימנית על המילה המסומנת או השתמש ב-`Ctrl+.` (Cmd+. ב-Mac)
1. **הוסף לתצורה** - בחר "Spelling -> Add to cSpell configuration" מתפריט ההקשר
1. **בחר מיקום** - ההרחבה תוסיף את המילה באופן אוטומטי לקובץ `cspell.json` שלך

זה מהיר יותר מאשר לערוך את קובץ התצורה באופן ידני עבור מילים בודדות.

### שיטות עבודה מומלצות לאיות

1. **הפעל בדיקת איות לפני שליחה**: תמיד הפעל `cspell "docs/**/*.md"` לפני שליחת שינויים
1. **תקן שגיאות כתיב במקום להתעלם**: כאשר אפשרי, תקן שגיאות איות אמיתיות במקום להוסיף אותן לרשימת המילים
1. **השתמש בטרמינולוגיה עקבית**: דבק בשמות מוצרים ומונחים טכניים מבוססים

## תצוגה מקדימה מקומית של תיעוד עם MkDocs

אנו משתמשים ב-MkDocs עם ערכת הנושא Material כדי ליצור את אתר התיעוד שלנו. תוכל להפעיל אותו באופן מקומי כדי לצפות בשינויים שלך לפני שליחת בקשת משיכה.

📖 **למידע נוסף**: [MkDocs Documentation](https://www.mkdocs.org/) | [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)

### הגדרת סביבת Python ב-VS Code

אנו ממליצים להשתמש בסביבה וירטואלית כדי לבודד את התלויות עבור פרויקט זה. VS Code הופך את התהליך הזה לפשוט ויטפל בהתקנת Python אם יש צורך.

> **GitHub Codespaces**: ההוראות הללו פועלות בצורה מושלמת ב-GitHub Codespaces, שמגיע עם Python מותקן מראש וסביבת VS Code מוכנה לשימוש.

📖 **למידע נוסף**: [Python ב-VS Code](https://code.visualstudio.com/docs/languages/python) | [סביבות Python ב-VS Code](https://code.visualstudio.com/docs/python/environments)

#### דרישות מוקדמות

**התקן את הרחבת Python**: התקן את [הרחבת Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) מאת Microsoft משוק ההרחבות של VS Code אם עדיין לא עשית זאת.

#### הגדרה ב-VS Code

1. **צור סביבה וירטואלית**:
   - פתח את Command Palette (`Ctrl+Shift+P` ב-Windows/Linux, `Cmd+Shift+P` ב-Mac)
   - הקלד "Python: Create Environment" ובחר באפשרות זו
   - בחר "Venv" (סביבה וירטואלית)
   - אם אין פרשני Python זמינים, VS Code ידריך אותך בהתקנת Python
   - בחר את פרשן Python שלך (Python 3.8+)
   - VS Code ייצור תיקיית `.venv` ויפעיל אותה באופן אוטומטי

2. **אמת את ההגדרה**:
   - פתח מסוף משולב חדש (`` Ctrl+Shift+` `` ב-Windows/Linux, `` Cmd+Shift+` `` ב-Mac, או `View > Terminal`)
   - עליך לראות `(.venv)` בהנחיית המסוף
   - הפעל: `python --version` כדי לוודא

> **הערה**: פתיחת מסוף חדש מבטיחה שהסביבה של Python מופעלת כראוי. אם אתה מעדיף להשתמש בסביבת Python קיימת במקום ליצור סביבה וירטואלית חדשה, תוכל להשתמש ב-"Python: Select Interpreter" מ-Command Palette ולבחור את הסביבה המועדפת עליך.

### התקנת MkDocs ב-VS Code

עם סביבת Python שלך מוגדרת ב-VS Code, התקן את MkDocs ואת ערכת הנושא Material:

1. **פתח את המסוף המשולב של VS Code** (`Ctrl+`` ` או `View > Terminal`)
2. **וודא שהסביבה הווירטואלית שלך פעילה** (עליך לראות `(.venv)` בהנחיה)
3. **התקן את החבילות**:

   ```bash
   pip install mkdocs mkdocs-material
   ```

### הפעלת MkDocs ב-VS Code

כדי להפעיל את שרת הפיתוח המקומי עם טעינה חמה:

1. **במסוף המשולב של VS Code**, הפעל:

   ```bash
   mkdocs serve
   ```

2. **האתר יהיה זמין בכתובת**: `http://127.0.0.1:8000/agent-academy/`

### תצוגה מקדימה בדפדפן הפשוט של VS Code

לחוויית פיתוח הטובה ביותר מבלי לצאת מ-VS Code:

1. **הפעל את שרת MkDocs** במסוף המשולב (כפי שמוצג לעיל)
2. **פתח את הדפדפן הפשוט**:
   - **שיטה 1**: פתח את Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
   - הקלד "Simple Browser: Show" ובחר באפשרות זו
   - הזן כתובת URL: `http://127.0.0.1:8000/agent-academy/`

   - **שיטה 2**: לחץ לחיצה ימנית על כתובת ה-URL בפלט המסוף ובחר "Follow Link"

   - **שיטה 3**: השתמש ב-`Ctrl+Click` (Windows) או `Cmd+Click` (Mac) על כתובת ה-URL במסוף

3. **מקם את הדפדפן**: תוכל לעגן את הדפדפן הפשוט לצד העורך שלך לצורך עריכה ותצוגה מקבילה

### יתרונות סביבת העבודה של VS Code

עבודה כולה בתוך VS Code מספקת את היתרונות הבאים:

- **מסוף משולב**: אין צורך לעבור בין יישומים
- **תצוגה מקבילה**: ערוך Markdown וצפה בשינויים בו זמנית  
- **ניווט בקישורים**: לחץ על כתובות URL במסוף כדי לפתוח את הדפדפן הפשוט
- **אינטגרציה עם הרחבות**: הרחבות Python, markdownlint ו-cSpell פועלות יחד
- **אינטגרציה עם Git**: לוח בקרת מקור מובנה עבור התחייבויות ובקשות משיכה

### תכונות טעינה חמה

בעת הפעלת `mkdocs serve`, תוכל ליהנות מ:

- **רענון אוטומטי**: שינויים בכל קובץ `.md` בתיקיית `docs/` טוענים מחדש את הדפדפן באופן אוטומטי
- **עדכוני תצורה**: שינויים ב-`mkdocs.yml` גם מפעילים בנייה מחדש
- **תצוגה מקדימה בזמן אמת**: ראה את העיצוב, הקישורים ושינויים בתוכן שלך באופן מיידי
- **אימות קישורים**: MkDocs יתריע על קישורים פנימיים שבורים

### פקודות MkDocs שימושיות ב-VS Code

הפעל את הפקודות הללו במסוף המשולב של VS Code:

```bash
# Start development server
mkdocs serve

# Build static site (for production)
mkdocs build

# Serve with strict mode (treats warnings as errors)
mkdocs serve --strict

# Show version
mkdocs --version
```

> **טיפ:** כדי להציג את התיעוד באופן מקומי עם כל התלויות שנבדקו, השתמש בסקריפט PowerShell `scripts/serve-docs.ps1`.

### יתרונות התצוגה המקדימה המקומית

- **משוב מיידי**: ראה כיצד ה-Markdown שלך מוצג עם ערכת הנושא Material
- **אימות קישורים**: תפס קישורים שבורים לפני שהם עולים לאוויר
- **בדיקת ניווט**: ודא שהתוכן שלך מופיע בקטעים הנכונים
- **תצוגה מקדימה לנייד**: בדוק כיצד התוכן שלך נראה על גדלי מסך שונים
- **בדיקת ביצועים**: ודא שהתמונות והמשאבים נטענים כראוי

## שאלות?

אם יש לך שאלות לגבי פורמט Markdown או הנחיות לתרומה, אנא:

1. עיין במדריך התרומה הזה
1. בדוק בעיות קיימות עבור שאלות דומות
1. פתח בעיה חדשה

תרומה נעימה! 🚀

---

**הצהרת אחריות**:  
מסמך זה תורגם באמצעות שירות תרגום AI [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור סמכותי. עבור מידע קריטי, מומלץ להשתמש בתרגום מקצועי אנושי. איננו אחראים לאי הבנות או לפרשנויות שגויות הנובעות משימוש בתרגום זה.