<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-22T18:42:54+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "ar"
}
-->
# المساهمة في أكاديمية MCS Agent

شكرًا لاهتمامك بالمساهمة في أكاديمية MCS Agent! سيساعدك هذا الدليل في إعداد بيئة التطوير وفهم معايير التوثيق لدينا.

## معايير التوثيق

نتبع معايير التوثيق الخاصة بـ Microsoft لضمان محتوى عالي الجودة ومتسق. للحصول على إرشادات شاملة حول كتابة التوثيق الفعّال، يرجى الرجوع إلى:

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - دليل كامل لكتابة التوثيق وفقًا لأسلوب ومعايير Microsoft.

يغطي هذا المورد:

- كتابة محتوى واضح وموجز
- استخدام صيغة Markdown بشكل صحيح
- اتباع مصطلحات متسقة
- هيكلة التوثيق بشكل فعّال
- أفضل الممارسات للوصول

## تدقيق Markdown

نستخدم أداة markdownlint لضمان تنسيق وجودة متسقة عبر جميع التوثيقات. يساعد ذلك في الحفاظ على قابلية القراءة والمعايير المهنية في المستودع.

### تثبيت markdownlint-cli2

لتشغيل markdownlint محليًا ومطابقة سير العمل في GitHub، قم بتثبيت markdownlint-cli2:

```powershell
npm install -g markdownlint-cli2
```

### تشغيل markdownlint محليًا

بمجرد التثبيت، يمكنك تشغيل markdownlint على جميع ملفات Markdown في المستودع:

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### التكوين

يتم تعريف تكوين markdownlint في `.markdownlint.jsonc` في جذر المستودع. هذا التكوين:

- يعطل فحص طول السطر (MD013) حيث لم يتم تحديد معيار
- يسمح بتكرار العناوين في الأقسام الفرعية فقط (MD024) لأقسام القوالب الشائعة
- يعطل التحقق من بادئة القوائم المرتبة (MD029) عالميًا بسبب إعادة تعيين الترقيم للمحتوى المتداخل
- يسمح باستخدام كتل التعليمات البرمجية للنصوص (MD046)

### إضافة استثناءات داخلية لقواعد markdownlint

بينما يتعامل التكوين العام مع معظم السيناريوهات الشائعة، قد تواجه حالات تحتاج فيها إلى إضافة استثناءات داخلية لقواعد markdownlint في ملفات فردية. إليك أمثلة على كيفية القيام بذلك:

#### الخيار 1: تجاهل السطر التالي

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### الخيار 2: تجاهل نطاق محدد

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

#### الخيار 3: تجاهل الملف بالكامل

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> ضع هذه في أعلى ملف Markdown لتعطيل قواعد محددة للوثيقة بأكملها

### متى تستخدم الاستثناءات الداخلية

قد تحتاج إلى استثناءات لقواعد markdownlint المختلفة عندما:

1. **MD029 (ترقيم القوائم المرتبة)**: متابعة القوائم المرقمة بعد محتوى آخر، الترقيم المقصود الذي لا يبدأ من 1، أو المحتوى المتداخل المعقد
2. **MD013 (طول السطر)**: أمثلة التعليمات البرمجية، الروابط، أو المحتوى الفني الذي لا يمكن تقسيمه بشكل معقول عبر الأسطر
3. **MD033 (HTML الداخلي)**: عندما تحتاج إلى عناصر HTML محددة للتنسيق الذي لا يمكن تحقيقه باستخدام Markdown
4. **MD041 (العنوان في السطر الأول)**: ملفات القوالب أو الوثائق التي لا تبدأ عمدًا بعنوان

### أفضل الممارسات

1. **استخدام الاستثناءات بحذر**: أضف الاستثناءات فقط عند الضرورة لتوضيح التوثيق
2. **قم بتعليق استثناءاتك**: عند استخدام الاستثناءات، أضف تعليقًا موجزًا يشرح السبب
3. **يفضل `markdownlint-disable-next-line`**: هذا أكثر دقة من التعطيل لأقسام كاملة
4. **قم بتشغيل المدقق قبل الالتزام**: قم دائمًا بتشغيل `markdownlint-cli2 "**/*.md"` قبل تقديم التغييرات

> **نصيحة:** يمكنك تشغيل markdownlint و cSpell بسرعة على ملفات Markdown باستخدام برنامج PowerShell `scripts/validate-markdown.ps1`. يساعد هذا البرنامج في أتمتة الفحوصات الشائعة للتنسيق والإملاء لضمان أن مساهماتك تتوافق مع إرشاداتنا.

يمكنك تشغيله من جذر المستودع باستخدام PowerShell:

```powershell
./scripts/validate-markdown.ps1
```

### أخطاء markdownlint الشائعة وإصلاحاتها

- **MD036**: استخدم العناوين المناسبة (`## العنوان`) بدلاً من التأكيد (`**النص الغامق**`)
- **MD007**: إصلاح تداخل القوائم غير المرتبة (استخدم مسافتين، وليس أربع)
- **MD022**: أضف أسطر فارغة قبل وبعد العناوين
- **MD032**: أضف أسطر فارغة قبل وبعد القوائم
- **MD009**: إزالة المسافات الزائدة في نهاية الأسطر

### سير العمل في GitHub

يتضمن مستودعنا سير عمل GitHub الذي يقوم تلقائيًا بتشغيل markdownlint على جميع طلبات السحب. يقوم سير العمل بـ:

- استخدام نفس أداة markdownlint-cli2 التي يمكنك تشغيلها محليًا
- استبعاد ملفات `SUPPORT.md` و `SECURITY.md` و `CODE_OF_CONDUCT.md`
- استخدام تكوين `.markdownlint.jsonc` الخاص بنا
- الإبلاغ عن المشكلات كتحذيرات، مما يسمح بدمج طلبات السحب مع تسليط الضوء على فرص تحسين التنسيق

### إضافة امتداد markdownlint في VS Code

إذا كنت تستخدم VS Code، نوصي بتثبيت [امتداد markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) للحصول على تدقيق Markdown في الوقت الفعلي:

1. **تثبيت الامتداد** - ابحث عن "markdownlint" بواسطة David Anson في سوق امتدادات VS Code
2. **التكوين التلقائي** - سيستخدم الامتداد تلقائيًا ملف تكوين `.markdownlint.jsonc` الخاص بك
3. **التغذية الراجعة في الوقت الفعلي** - شاهد الخطوط المتعرجة على مشكلات تنسيق Markdown أثناء الكتابة
4. **الإصلاحات السريعة** - استخدم `Ctrl+.` (Cmd+. على Mac) لرؤية الإصلاحات التلقائية المتاحة للعديد من المشكلات
5. **لوحة المشكلات** - عرض جميع مشكلات Markdown في لوحة المشكلات في VS Code

يوفر هذا تغذية راجعة فورية أثناء الكتابة، مما يسهل اتباع معايير Markdown قبل الالتزام بتغييراتك.

## التدقيق الإملائي

نستخدم cSpell (مدقق الإملاء البرمجي) للحفاظ على تناسق الإملاء عبر جميع التوثيقات لدينا. يساعد ذلك في ضمان الجودة المهنية وتقليل الأخطاء الإملائية في المستودع.

### تثبيت cSpell

لتشغيل cSpell محليًا، قم بتثبيته عالميًا:

```powershell
npm install -g cspell
```

### تشغيل cSpell محليًا

بمجرد التثبيت، يمكنك تشغيل cSpell للتحقق من الإملاء في التوثيق:

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

### التكوين

يتم تعريف تكوين cSpell في `cspell.json` في جذر المستودع. هذا التكوين:

- يتضمن كلمات مخصصة خاصة بمجالنا (Copilot، SharePoint، Dataverse، إلخ)
- يتجاهل أنواع الملفات الشائعة التي لا تحتاج إلى تدقيق إملائي (الصور، ملفات البناء)
- يحدد اللغة الإنجليزية للتدقيق الإملائي

### إضافة كلمات جديدة

إذا واجهت كلمة يشير إليها cSpell على أنها مكتوبة بشكل خاطئ ولكنها صحيحة بالفعل (مثل أسماء المنتجات أو المصطلحات التقنية أو الأسماء الصحيحة)، يمكنك إضافتها إلى مصفوفة `words` في `cspell.json`:

```json
{
  "words": [
    "Contoso",
    "Dataverse",
    "YourNewWord"
  ]
}
```

### إضافة امتداد cSpell في VS Code

إذا كنت تستخدم VS Code مع [امتداد Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)، يمكنك إضافة الكلمات بسرعة إلى تكوينك:

1. **عرض الأخطاء الإملائية** - ابحث عن الخطوط المتعرجة على الكلمات المكتوبة بشكل خاطئ
1. **استخدام الإصلاح السريع** - انقر بزر الماوس الأيمن على الكلمة تحتها خط أو استخدم `Ctrl+.` (Cmd+. على Mac)
1. **إضافة إلى التكوين** - اختر "Spelling -> Add to cSpell configuration" من قائمة السياق
1. **اختيار الموقع** - سيضيف الامتداد الكلمة تلقائيًا إلى ملف `cspell.json` الخاص بك

هذا أسرع بكثير من تحرير ملف التكوين يدويًا للكلمات الفردية.

### أفضل الممارسات للإملاء

1. **قم بتشغيل التدقيق الإملائي قبل الالتزام**: قم دائمًا بتشغيل `cspell "docs/**/*.md"` قبل تقديم التغييرات
1. **إصلاح الأخطاء الإملائية بدلاً من تجاهلها**: عند الإمكان، قم بإصلاح الأخطاء الإملائية الفعلية بدلاً من إضافتها إلى قائمة الكلمات
1. **استخدام المصطلحات المتسقة**: التزم بأسماء المنتجات والمصطلحات التقنية المعتمدة

## معاينة التوثيق محليًا باستخدام MkDocs

نستخدم MkDocs مع موضوع Material لإنشاء موقع التوثيق الخاص بنا. يمكنك تشغيله محليًا لمعاينة تغييراتك قبل تقديم طلب السحب.

📖 **تعرف على المزيد**: [MkDocs Documentation](https://www.mkdocs.org/) | [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)

### إعداد بيئة Python في VS Code

نوصي باستخدام بيئة افتراضية لعزل التبعيات لهذا المشروع. يجعل VS Code هذه العملية سلسة وسيتعامل مع تثبيت Python إذا لزم الأمر.

> **GitHub Codespaces**: تعمل هذه التعليمات بشكل مثالي في GitHub Codespaces، الذي يأتي مع Python مثبت مسبقًا وبيئة VS Code جاهزة للاستخدام.

📖 **تعرف على المزيد**: [Python in VS Code](https://code.visualstudio.com/docs/languages/python) | [Python environments in VS Code](https://code.visualstudio.com/docs/python/environments)

#### المتطلبات الأساسية

**تثبيت امتداد Python**: قم بتثبيت [امتداد Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) بواسطة Microsoft من سوق امتدادات VS Code إذا لم تكن قد قمت بذلك بالفعل.

#### الإعداد في VS Code

1. **إنشاء بيئة افتراضية**:
   - افتح لوحة الأوامر (`Ctrl+Shift+P` على Windows/Linux، `Cmd+Shift+P` على Mac)
   - اكتب "Python: Create Environment" واختره
   - اختر "Venv" (بيئة افتراضية)
   - إذا لم تكن هناك مفسرات Python متاحة، سيوجهك VS Code لتثبيت Python
   - اختر مفسر Python الخاص بك (Python 3.8+)
   - سيقوم VS Code بإنشاء مجلد `.venv` وتفعيله تلقائيًا

2. **التحقق من الإعداد**:
   - افتح نافذة طرفية مدمجة جديدة (`` Ctrl+Shift+` `` على Windows/Linux، `` Cmd+Shift+` `` على Mac، أو `View > Terminal`)
   - يجب أن ترى `(.venv)` في موجه الطرفية
   - قم بتشغيل: `python --version` للتحقق

> **ملاحظة**: فتح نافذة طرفية جديدة يضمن تنشيط بيئة Python بشكل صحيح. إذا كنت تفضل استخدام بيئة Python موجودة بدلاً من إنشاء بيئة افتراضية جديدة، يمكنك استخدام "Python: Select Interpreter" من لوحة الأوامر واختيار البيئة المفضلة لديك.

### تثبيت MkDocs في VS Code

مع إعداد بيئة Python الخاصة بك في VS Code، قم بتثبيت MkDocs وموضوع Material:

1. **افتح الطرفية المدمجة في VS Code** (`Ctrl+`` ` أو `View > Terminal`)
2. **تأكد من تنشيط بيئتك الافتراضية** (يجب أن ترى `(.venv)` في الموجه)
3. **قم بتثبيت الحزم**:

   ```bash
   pip install mkdocs mkdocs-material
   ```

### تشغيل MkDocs في VS Code

لتشغيل خادم التطوير المحلي مع التحديث التلقائي:

1. **في الطرفية المدمجة في VS Code**، قم بتشغيل:

   ```bash
   mkdocs serve
   ```

2. **سيكون الموقع متاحًا على**: `http://127.0.0.1:8000/agent-academy/`

### المعاينة في متصفح VS Code البسيط

لأفضل تجربة تطوير دون مغادرة VS Code:

1. **ابدأ خادم MkDocs** في الطرفية المدمجة (كما هو موضح أعلاه)
2. **افتح المتصفح البسيط**:
   - **الطريقة 1**: افتح لوحة الأوامر (`Ctrl+Shift+P` / `Cmd+Shift+P`)
   - اكتب "Simple Browser: Show" واختره
   - أدخل الرابط: `http://127.0.0.1:8000/agent-academy/`

   - **الطريقة 2**: انقر بزر الماوس الأيمن على الرابط في إخراج الطرفية واختر "Follow Link"

   - **الطريقة 3**: استخدم `Ctrl+Click` (Windows) أو `Cmd+Click` (Mac) على الرابط في الطرفية

3. **ضع المتصفح**: يمكنك تثبيت المتصفح البسيط بجانب المحرر للحصول على تحرير ومعاينة جنبًا إلى جنب

### فوائد مساحة العمل في VS Code

العمل بالكامل داخل VS Code يوفر هذه المزايا:

- **طرفية مدمجة**: لا حاجة للتبديل بين التطبيقات
- **معاينة جنبًا إلى جنب**: تحرير Markdown ورؤية التغييرات في نفس الوقت  
- **تنقل الروابط**: انقر على الروابط في الطرفية مباشرة لفتح المتصفح البسيط
- **تكامل الامتدادات**: تعمل امتدادات Python و markdownlint و cSpell معًا
- **تكامل Git**: لوحة التحكم المدمجة للمصدر للالتزامات وطلبات السحب

### ميزات التحديث التلقائي

عند تشغيل `mkdocs serve`، تحصل على:

- **التحديث التلقائي**: تغييرات أي ملف `.md` في مجلد `docs/` تعيد تحميل المتصفح تلقائيًا
- **تحديثات التكوين**: تغييرات `mkdocs.yml` تؤدي أيضًا إلى إعادة البناء
- **معاينة في الوقت الفعلي**: شاهد تنسيقك، الروابط، وتغييرات المحتوى فورًا
- **تحقق الروابط**: سيحذرك MkDocs من الروابط الداخلية المكسورة

### أوامر MkDocs المفيدة في VS Code

قم بتشغيل هذه الأوامر في الطرفية المدمجة في VS Code:

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

> **نصيحة:** لمعاينة التوثيق محليًا مع التحقق من جميع التبعيات، استخدم برنامج PowerShell `scripts/serve-docs.ps1`.

### فوائد المعاينة المحلية

- **التغذية الراجعة الفورية**: شاهد كيف يتم عرض Markdown الخاص بك مع موضوع Material
- **تحقق الروابط**: اكتشف الروابط المكسورة قبل أن تصبح مباشرة
- **اختبار التنقل**: تحقق من ظهور المحتوى الخاص بك في الأقسام الصحيحة
- **معاينة الجوال**: اختبر كيف يبدو المحتوى الخاص بك على أحجام شاشات مختلفة
- **فحص الأداء**: تأكد من تحميل الصور والأصول بشكل صحيح

## أسئلة؟

إذا كانت لديك أسئلة حول تنسيق Markdown أو إرشادات المساهمة، يرجى:

1. مراجعة دليل المساهمة هذا
1. التحقق من المشكلات الموجودة للحصول على أسئلة مشابهة
1. فتح مشكلة جديدة

نتمنى لك مساهمة ممتعة! 🚀

---

**إخلاء المسؤولية**:  
تم ترجمة هذا المستند باستخدام خدمة الترجمة بالذكاء الاصطناعي [Co-op Translator](https://github.com/Azure/co-op-translator). بينما نسعى لتحقيق الدقة، يرجى العلم أن الترجمات الآلية قد تحتوي على أخطاء أو عدم دقة. يجب اعتبار المستند الأصلي بلغته الأصلية المصدر الرسمي. للحصول على معلومات حاسمة، يُوصى بالترجمة البشرية الاحترافية. نحن غير مسؤولين عن أي سوء فهم أو تفسير خاطئ ينشأ عن استخدام هذه الترجمة.