<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-17T05:15:18+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "he"
}
-->
# תרומה ל-MCS Agent Academy

תודה על התעניינותך בתרומה ל-MCS Agent Academy! מדריך זה יעזור לך להגדיר את סביבת הפיתוח שלך ולהבין את הסטנדרטים שלנו לתיעוד.

## סטנדרטים לתיעוד

אנו פועלים לפי הסטנדרטים של Microsoft לתיעוד כדי להבטיח תוכן עקבי ואיכותי. לקבלת הנחיות מקיפות לכתיבת תיעוד אפקטיבי, אנא עיין ב:

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - מדריך מלא לכתיבת תיעוד בהתאם לסגנון ולסטנדרטים של Microsoft.

משאב זה מכסה:

- כתיבת תוכן ברור ותמציתי
- שימוש נכון בסינטקס של Markdown
- שמירה על טרמינולוגיה עקבית
- מבנה תיעוד אפקטיבי
- שיטות עבודה מומלצות לנגישות

## בדיקת תקינות Markdown

אנו משתמשים ב-markdownlint כדי להבטיח פורמט ואיכות עקביים בכל התיעוד שלנו. זה עוזר לשמור על קריאות וסטנדרטים מקצועיים לאורך כל המאגר.

### התקנת markdownlint-cli2

כדי להריץ markdownlint באופן מקומי ולהתאים את זרימת העבודה שלנו ב-GitHub, התקן את markdownlint-cli2:

```powershell
npm install -g markdownlint-cli2
```

### הרצת markdownlint באופן מקומי

לאחר ההתקנה, תוכל להריץ markdownlint על כל קבצי ה-Markdown במאגר:

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### תצורה

תצורת markdownlint שלנו מוגדרת בקובץ `.markdownlint.jsonc` שנמצא בשורש המאגר. תצורה זו:

- מבטלת בדיקות אורך שורות (MD013) מכיוון שלא הגדרנו סטנדרט
- מאפשרת כותרות כפולות רק באחים (MD024) עבור חלקי תבנית נפוצים
- מבטלת אימות קידומת רשימה מסודרת (MD029) באופן גלובלי בשל תוכן עם הזחה שמאפס את המספור
- מאפשרת שימוש בבלוקים של קוד לטקסט (MD046)

### הוספת חריגות מקומיות לכללי markdownlint

למרות שהתצורה הגלובלית שלנו מטפלת ברוב התרחישים הנפוצים, ייתכן שתיתקל במצבים שבהם תצטרך להוסיף חריגות מקומיות לכללי markdownlint בקבצים בודדים. הנה דוגמאות כיצד לעשות זאת:

#### אפשרות 1: התעלם מהשורה הבאה

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### אפשרות 2: התעלם מטווח ספציפי

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

#### אפשרות 3: התעלם מכל הקובץ

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> מקם את אלה בראש קובץ ה-Markdown שלך כדי לבטל כללים ספציפיים לכל המסמך

### מתי להשתמש בחריגות מקומיות

ייתכן שתצטרך חריגות עבור כללי markdownlint שונים כאשר:

1. **MD029 (מספור רשימה מסודרת)**: המשך רשימות ממוספרות לאחר תוכן אחר, מספור מכוון שאינו מתחיל מ-1, או תוכן מורכב עם הזחה
2. **MD013 (אורך שורה)**: דוגמאות קוד, כתובות URL, או תוכן טכני שלא ניתן לשבור באופן סביר על פני שורות
3. **MD033 (HTML מוטמע)**: כאשר אתה צריך אלמנטים HTML ספציפיים לעיצוב שלא ניתן להשיג עם Markdown
4. **MD041 (כותרת בשורה הראשונה)**: קבצי תבנית או מסמכים שמכוון לא מתחילים עם כותרת

### שיטות עבודה מומלצות

1. **השתמש בחריגות באופן חסכוני**: הוסף חריגות רק כאשר יש צורך בהבהרת התיעוד
2. **הוסף הערות לחריגות שלך**: כאשר אתה משתמש בחריגות, שקול להוסיף הערה קצרה שמסבירה מדוע
3. **העדף `markdownlint-disable-next-line`**: זה מדויק יותר מאשר ביטול עבור קטעים שלמים
4. **הרץ את הבודק לפני ההתחייבות**: תמיד הרץ `markdownlint-cli2 "**/*.md"` לפני הגשת שינויים

> **טיפ:** תוכל להריץ במהירות גם markdownlint וגם בדיקות איות של cSpell על קבצי ה-Markdown שלך באמצעות סקריפט PowerShell `scripts/validate-markdown.ps1` המסופק. סקריפט זה עוזר לאוטומט בדיקות פורמט ואיות נפוצות כדי להבטיח שהתרומות שלך עומדות בהנחיות שלנו.

תוכל להריץ אותו משורש המאגר באמצעות PowerShell:

```powershell
./scripts/validate-markdown.ps1
```

### שגיאות markdownlint נפוצות ותיקונים

- **MD036**: השתמש בכותרות נכונות (`## כותרת`) במקום הדגשה (`**טקסט מודגש**`)
- **MD007**: תקן הזחת רשימה לא מסודרת (השתמש ב-2 רווחים, לא 4)
- **MD022**: הוסף שורות ריקות לפני ואחרי כותרות
- **MD032**: הוסף שורות ריקות לפני ואחרי רשימות
- **MD009**: הסר רווחים מיותרים בסוף שורות

### זרימת עבודה ב-GitHub

המאגר שלנו כולל זרימת עבודה ב-GitHub שמריצה אוטומטית markdownlint על כל בקשות המשיכה. זרימת העבודה:

- משתמשת באותו כלי markdownlint-cli2 שתוכל להריץ באופן מקומי
- לא כוללת את הקבצים `SUPPORT.md`, `SECURITY.md`, ו-`CODE_OF_CONDUCT.md`
- משתמשת בתצורת `.markdownlint.jsonc` שלנו
- מדווחת על בעיות כאזהרות, ומאפשרת למזג PRs תוך הדגשת הזדמנויות לשיפור פורמט

### הרחבת markdownlint ל-VS Code

אם אתה משתמש ב-VS Code, אנו ממליצים להתקין את [הרחבת markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) לבדיקת Markdown בזמן אמת:

1. **התקן את ההרחבה** - חפש "markdownlint" מאת David Anson בשוק ההרחבות של VS Code
2. **תצורה אוטומטית** - ההרחבה תשתמש אוטומטית בקובץ התצורה `.markdownlint.jsonc` שלך
3. **משוב בזמן אמת** - ראה קווים מתחת לבעיות פורמט Markdown בזמן שאתה מקליד
4. **תיקונים מהירים** - השתמש ב-`Ctrl+.` (Cmd+. ב-Mac) כדי לראות תיקונים אוטומטיים זמינים עבור בעיות רבות
5. **לוח בעיות** - צפה בכל בעיות Markdown בלוח הבעיות של VS Code

זה מספק משוב מיידי בזמן כתיבה, מה שמקל על שמירה על סטנדרטים של Markdown לפני התחייבות השינויים שלך.

## בדיקת איות

אנו משתמשים ב-cSpell (בודק איות קוד) כדי לשמור על עקביות איות בכל התיעוד שלנו. זה עוזר להבטיח איכות מקצועית ולהפחית שגיאות כתיב לאורך כל המאגר.

### התקנת cSpell

כדי להריץ cSpell באופן מקומי, התקן אותו באופן גלובלי:

```powershell
npm install -g cspell
```

### הרצת cSpell באופן מקומי

לאחר ההתקנה, תוכל להריץ cSpell כדי לבדוק איות בתיעוד:

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

תצורת cSpell שלנו מוגדרת בקובץ `cspell.json` שנמצא בשורש המאגר. תצורה זו:

- כוללת מילים מותאמות אישית ספציפיות לתחום שלנו (Copilot, SharePoint, Dataverse וכו')
- מתעלמת מסוגי קבצים נפוצים שאין צורך לבדוק איות (תמונות, קבצי בנייה)
- מגדירה את השפה לאנגלית לבדיקת איות

### הוספת מילים חדשות

אם אתה נתקל במילה ש-cSpell מסמן כלא נכונה אך היא למעשה נכונה (כמו שמות מוצרים, מונחים טכניים או שמות פרטיים), תוכל להוסיף אותה למערך `words` בקובץ `cspell.json`:

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

1. **צפה בשגיאות איות** - חפש קווים מתחת למילים עם שגיאות איות
1. **השתמש בתיקון מהיר** - לחץ לחיצה ימנית על המילה המסומנת או השתמש ב-`Ctrl+.` (Cmd+. ב-Mac)
1. **הוסף לתצורה** - בחר "Spelling -> Add to cSpell configuration" מתפריט ההקשר
1. **בחר מיקום** - ההרחבה תוסיף את המילה באופן אוטומטי לקובץ `cspell.json` שלך

זה הרבה יותר מהיר מאשר לערוך את קובץ התצורה באופן ידני עבור מילים בודדות.

### שיטות עבודה מומלצות לאיות

1. **הרץ בדיקת איות לפני התחייבות**: תמיד הרץ `cspell "docs/**/*.md"` לפני הגשת שינויים
1. **תקן שגיאות כתיב במקום להתעלם**: כאשר אפשרי, תקן שגיאות כתיב אמיתיות במקום להוסיף אותן לרשימת המילים
1. **השתמש בטרמינולוגיה עקבית**: דבק בשמות מוצרים ומונחים טכניים מבוססים

## תצוגה מקומית של תיעוד עם MkDocs

אנו משתמשים ב-MkDocs עם ערכת הנושא Material כדי ליצור את אתר התיעוד שלנו. תוכל להריץ אותו באופן מקומי כדי להציג את השינויים שלך לפני הגשת בקשת משיכה.

📖 **למידע נוסף**: [תיעוד MkDocs](https://www.mkdocs.org/) | [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)

### הגדרת סביבת Python ב-VS Code

אנו ממליצים להשתמש בסביבה וירטואלית כדי לבודד תלות עבור פרויקט זה. VS Code הופך את התהליך הזה לפשוט ויטפל בהתקנת Python אם יש צורך.

> **GitHub Codespaces**: ההוראות הללו פועלות בצורה מושלמת ב-GitHub Codespaces, שמגיע עם Python מותקן מראש וסביבת VS Code מוכנה לשימוש.

📖 **למידע נוסף**: [Python ב-VS Code](https://code.visualstudio.com/docs/languages/python) | [סביבות Python ב-VS Code](https://code.visualstudio.com/docs/python/environments)

#### דרישות מוקדמות

**התקן את הרחבת Python**: התקן את [הרחבת Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) מאת Microsoft משוק ההרחבות של VS Code אם עדיין לא עשית זאת.

#### הגדרה ב-VS Code

1. **צור סביבה וירטואלית**:
   - פתח את Command Palette (`Ctrl+Shift+P` ב-Windows/Linux, `Cmd+Shift+P` ב-Mac)
   - הקלד "Python: Create Environment" ובחר זאת
   - בחר "Venv" (סביבה וירטואלית)
   - אם אין פרשני Python זמינים, VS Code ידריך אותך בהתקנת Python
   - בחר את פרשן Python שלך (Python 3.8+)
   - VS Code ייצור תיקיית `.venv` ויפעיל אותה באופן אוטומטי

2. **אמת את ההגדרה**:
   - פתח מסוף משולב חדש (`` Ctrl+Shift+` `` ב-Windows/Linux, `` Cmd+Shift+` `` ב-Mac, או `View > Terminal`)
   - אתה אמור לראות `(.venv)` בהנחיית המסוף
   - הרץ: `python --version` כדי לאמת

> **הערה**: פתיחת מסוף חדש מבטיחה שסביבת Python מופעלת כראוי. אם אתה מעדיף להשתמש בסביבת Python קיימת במקום ליצור סביבה וירטואלית חדשה, תוכל להשתמש ב-"Python: Select Interpreter" מ-Command Palette ולבחור את הסביבה המועדפת עליך.

### התקנת MkDocs ב-VS Code

עם סביבת Python שלך מוגדרת ב-VS Code, התקן את MkDocs וערכת הנושא Material:

1. **פתח את המסוף המשולב של VS Code** (`Ctrl+`` ` או `View > Terminal`)
2. **וודא שסביבתך הווירטואלית פעילה** (אתה אמור לראות `(.venv)` בהנחיית המסוף)
3. **התקן את החבילות**:

   ```bash
   pip install mkdocs mkdocs-material
   ```

### הרצת MkDocs ב-VS Code

כדי להתחיל את שרת הפיתוח המקומי עם טעינה אוטומטית:

1. **במסוף המשולב של VS Code**, הרץ:

   ```bash
   mkdocs serve
   ```

2. **האתר יהיה זמין בכתובת**: `http://127.0.0.1:8000/agent-academy/`

### תצוגה מקדימה בדפדפן הפשוט של VS Code

לחוויית פיתוח הטובה ביותר מבלי לעזוב את VS Code:

1. **הפעל את שרת MkDocs** במסוף המשולב (כפי שמוצג לעיל)
2. **פתח את הדפדפן הפשוט**:
   - **שיטה 1**: פתח את Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
   - הקלד "Simple Browser: Show" ובחר זאת
   - הזן כתובת URL: `http://127.0.0.1:8000/agent-academy/`

   - **שיטה 2**: לחץ לחיצה ימנית על כתובת ה-URL בפלט המסוף ובחר "Follow Link"

   - **שיטה 3**: השתמש ב-`Ctrl+Click` (Windows) או `Cmd+Click` (Mac) על כתובת ה-URL במסוף

3. **מקם את הדפדפן**: תוכל לעגן את הדפדפן הפשוט לצד העורך שלך לעריכה ותצוגה מקדימה בו-זמנית

### יתרונות סביבת העבודה של VS Code

עבודה כולה בתוך VS Code מספקת את היתרונות הבאים:

- **מסוף משולב**: אין צורך לעבור בין יישומים
- **תצוגה מקדימה לצד עריכה**: ערוך Markdown וצפה בשינויים בו-זמנית  
- **ניווט קישורים**: לחץ על כתובות URL במסוף כדי לפתוח את הדפדפן הפשוט
- **אינטגרציה של הרחבות**: הרחבות Python, markdownlint, ו-cSpell פועלות יחד
- **אינטגרציה עם Git**: לוח בקרת מקור מובנה להתחייבויות ובקשות משיכה

### תכונות טעינה אוטומטית

כאשר מריצים `mkdocs serve`, אתה מקבל:

- **רענון אוטומטי**: שינויים בכל קובץ `.md` בתיקיית `docs/` טוענים מחדש את הדפדפן באופן אוטומטי
- **עדכוני תצורה**: שינויים ב-`mkdocs.yml` גם מפעילים בניות מחדש
- **תצוגה מקדימה בזמן אמת**: ראה את העיצוב, הקישורים ושינויים בתוכן שלך באופן מיידי
- **אימות קישורים**: MkDocs יתריע על קישורים פנימיים שבורים

### פקודות MkDocs שימושיות ב-VS Code

הרץ את הפקודות הללו במסוף המשולב של VS Code:

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

### יתרונות תצוגה מקומית

- **משוב מיידי**: ראה כיצד ה-Markdown שלך מוצג עם ערכת הנושא Material
- **אימות קישורים**: גלה קישורים שבורים לפני שהם עולים לאוויר
- **בדיקת ניווט**: וודא שהתוכן שלך מופיע בקטעים הנכונים
- **תצוגה מקדימה לנייד**: בדוק כיצד התוכן שלך נראה על גדלי מסך שונים
- **בדיקת ביצועים**: וודא שהתמונות והנכסים נטענים כראוי

## שאלות?

אם יש לך שאלות על פורמט Markdown או הנחיות לתרומה, אנא:

1. עיין במדריך התרומה הזה
1. בדוק בעיות קיימות לשאלות דומות
1. פתח בעיה חדשה

תרומה נעימה! 🚀

---

**הצהרת אחריות**:  
מסמך זה תורגם באמצעות שירות תרגום AI [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור סמכותי. עבור מידע קריטי, מומלץ להשתמש בתרגום מקצועי אנושי. אנו לא נושאים באחריות לאי הבנות או לפרשנויות שגויות הנובעות משימוש בתרגום זה.