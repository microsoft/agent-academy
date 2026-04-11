---
name: agent-academy-report
description: "Generate a full Agent Academy feedback report — extracting feedback from Excel files and GitHub issues, analyzing sentiment, generating charts, and producing a single styled PDF with a cover page, management summary, and detailed analysis. Use this skill when the user asks to generate an Agent Academy report, create a feedback analysis, build a course completion report, or wants to analyze Agent Academy survey data. Also triggers when the user mentions Agent Academy feedback, course grades, sentiment analysis of Agent Academy data, or exporting Agent Academy results to PDF."
---

# Agent Academy Report Generator

Generate a comprehensive feedback analysis report for Agent Academy. The report combines data from Excel survey exports and GitHub issues, analyzes sentiment, generates charts, and produces a single styled PDF.

## Folder Structure

The workspace folder should be organized as follows:

```
<workspace>/report/
├── data/            ← Excel files (.xlsx) with survey responses
├── badges/          ← Badge PNG images (downloaded from GitHub)
├── charts/          ← Generated chart PNG images (output)
├── markdown/        ← Generated markdown files (output)
└── pdf/             ← Generated PDF files (output)
```

If the user provides a workspace path, use it. Otherwise, ask for it.

## Overview

The report generation has 5 phases:

1. **Extract feedback** from Excel files and GitHub issues
2. **Analyze sentiment** using keyword-based scoring
3. **Generate charts** with matplotlib
4. **Build markdown** files (management summary + detailed analysis)
5. **Export a single PDF** with cover page, management summary, and full analysis

Run the bundled Python scripts in order. Each script is self-contained and reads/writes to the folder structure above.

---

## Phase 1: Extract Feedback

Run `scripts/extract_feedback.py`:

```bash
python3 <skill-path>/scripts/extract_feedback.py "<workspace-path>/report"
```

This script:

- Reads all `.xlsx` files from `<workspace>/report/data/`
- Maps filenames to human-readable course names
- Extracts feedback text, completion dates, and respondent names/emails
- **Name normalization**: If only an email address is available, it converts it to a display name — e.g. `john.doe@example.com` → `"John Doe"` (split on dots/underscores, title-cased). If neither a name nor email is found, the name defaults to `"Anonymous"`.
- Skips trivial feedback entries (e.g. "no", "none", "n/a", "ok", single punctuation)
- For files without a feedback column (Operative, Recruit), it extracts completion dates only — their feedback comes from GitHub issues
- Outputs `<workspace>/report/data/_extracted.json`

### GitHub Issues (Operative & Recruit)

After running the extract script, fetch feedback from GitHub issues. **Do not use `mcp_github_mcp_search_issues`** — the search API caps results at 1,000, which is insufficient for Recruit (1,390+ issues). Instead, use `mcp_github_mcp_list_issues` which supports full GraphQL cursor pagination:

**Recruit issues:**

```
owner: "microsoft", repo: "agent-academy", labels: ["recruit-completed"], state: "all", perPage: 100
```

**Operative issues:**

```
owner: "microsoft", repo: "agent-academy", labels: ["operative-completed"], state: "all", perPage: 100
```

Paginate through **all** pages using the `endCursor` from each response until `hasNextPage` is false. The API returns max 100 per page — Recruit requires ~14 pages, Operative ~4 pages. Do not stop early; collect every issue.

For each issue, parse the body for structured sections:

- `### Key Learnings and Takeaways`
- `### Challenges Faced`
- `### Final Thoughts`

Combine these sections as the feedback text. The `name` field should be a plain string (the GitHub username) — if the API returns a `user` object like `{"login": "username"}`, extract just the `login` value.

Save the combined data (Excel + GitHub) to `<workspace>/report/data/_all_feedback.json`.

Each record should have: `{course, date, month, sentiment, text, name, type, source, is_closed}`.

- `source`: `"excel"` (set automatically by extract script), `"github_completed"` (badge submission issues), or `"github_issue"` (non-badge issues)
- `is_closed`: `true`/`false` — for GitHub records only; indicates whether the issue is closed (closed = badge awarded for completed issues)

### Non-Badge GitHub Issues

After collecting badge submission issues, also fetch **all other open issues** that are NOT badge submissions. These are bug reports, questions, and general feedback that should be classified into the correct course.

Fetch issues without the completed labels:

```
owner: "microsoft", repo: "agent-academy", state: "all", perPage: 100
```

Filter out issues that already have `recruit-completed` or `operative-completed` labels. For each remaining issue, classify it to a course using this keyword map (match against issue title and labels, case-insensitive):

| Keywords in title/labels           | Course                                       |
| ---------------------------------- | -------------------------------------------- |
| `recruit`                          | Recruit                                      |
| `operative`                        | Operative                                    |
| `commander`                        | Commander                                    |
| `yaml`, `yaml specialist`          | Special Ops: YAML Specialist                 |
| `copilot studio` AND `mcp`         | Special Ops: Microsoft Copilot Studio MCP    |
| `learn docs`, `learn mcp`          | Special Ops: Microsoft Learn Docs MCP Server |
| `cli`, `power platform cli`, `pac` | Special Ops: Power Platform CLI MCP Server   |
| `badge check`                      | Cowork Collective: Badge Check               |
| `compliance`                       | Cowork Collective: Compliance Packet         |
| `out of office`, `vacay`           | Cowork Collective: Out of Office             |

If no match is found, skip the issue. Set `source: "github_issue"` and `type: "feedback"` for these records. Use the issue title + body as the feedback text.

### How Non-Badge Issues Are Used

Non-badge GitHub issues (`source: "github_issue"`) are **included** in:

- Sentiment analysis (scored and themed)
- Course grades (affect positive/negative percentages)
- Top themes (feed into per-course theme detection)
- Representative quotes (can appear as selected quotes)
- Next steps (negative themes from these issues drive recommendations)

Non-badge GitHub issues are **excluded** from:

- Submission/completion charts (completions over time, cumulative, monthly, per-course)
- Monthly trend tables (submission counts)
- Total completions count in the management summary

This is because they are feedback and bug reports, not actual course completions.

### Recruit & Operative Comparison Data

The combined `_all_feedback.json` will contain records with different `source` values. The build script uses these to generate a **Submission Pipeline** comparison table for Recruit and Operative:

| Metric                   | How to count                                                       |
| ------------------------ | ------------------------------------------------------------------ |
| GitHub Badge Submissions | Records where `source = "github_completed"`                        |
| Excel Form Submissions   | Records where `source = "excel"`                                   |
| Badges Awarded           | Records where `source = "github_completed"` AND `is_closed = true` |
| Other GitHub Issues      | Records where `source = "github_issue"`                            |

---

## Phase 2: Analyze Sentiment

Run `scripts/analyze_sentiment.py`:

```bash
python3 <skill-path>/scripts/analyze_sentiment.py "<workspace-path>/report"
```

This script:

- Reads `<workspace>/report/data/_all_feedback.json`
- Scores each feedback item using regex-based sentiment analysis (word-boundary `\b` matching, case-insensitive)
- Detects common themes and adds a `themes` array to each record (list of matched theme names, e.g. `["Hands-on & Practical Learning", "MCP & Agent Development Skills"]`)
- Computes per-course grades using weighted average (positive=10, neutral=6, negative=2)
- Outputs `<workspace>/report/data/_analyzed.json` with sentiment labels, themes, and course stats

### Output Structure

The `_analyzed.json` file contains:

```json
{
  "records": [ ... ],        // All records with added "sentiment" and "themes" fields
  "summary": { "total_records", "total_feedback", "positive", "neutral", "negative", "overall_grade" },
  "course_stats": {           // Per-course: total, positive, neutral, negative, grade, themes (with counts)
    "Recruit": { "total": 123, "positive": 100, ..., "themes": { "Hands-on & Practical Learning": 45, ... } }
  }
}
```

### Sentiment Keywords

All patterns use `\b` word boundaries for precise matching (e.g. `\bgreat\b` matches "great" but not "greater").

**Positive** patterns include: great, excellent, amazing, awesome, fantastic, wonderful, love/loved, enjoy/enjoyed, helpful, useful, informative, well done, good job, thank/thanks, appreciate, impressive, learned, learning, eye-opening, recommend, looking forward, fun, excited, brilliant, clear, intuitive, practical, hands-on, well-structured, well-organized, good, nice, cool, neat, super, stellar, outstanding, perfect, phenomenal, beginner-friendly, easy to follow, straightforward, engaging, interesting, valuable, insightful, comprehensive, thorough, solid, smooth.

**Positive emojis** (also scored as positive): 👍 🎉 🙌 ❤️ 🔥 💯 ⭐ ✨ 😍 😊 🤩 💪

**Negative** patterns include: error(s), issue(s), problem(s), bug(s)/buggy, broke/broken/crash/crashed, fail/failed/failure, didn't work, not work, couldn't, stuck, struggling/struggle, missing, trouble, difficult/difficulties, cumbersome, challenge(s), troubleshoot, confusing/confused, frustrating/frustrated, slow, complex, unclear, improve/improvement, wish, lack/lacking, disappoint/disappointed.

**Scoring rule:** If negative matches > positive matches → negative. Else if positive > 0 → positive. Else if negative > 0 → negative. Else → neutral.

### Theme Detection

The analyzer detects 10 predefined themes by matching regex keywords against feedback text:

| Theme                              | Keywords (regex)                                                                  |
| ---------------------------------- | --------------------------------------------------------------------------------- |
| Hands-on & Practical Learning      | hands-on, practical, interactive, step-by-step, real-world, exercise              |
| Clear Instructions & Documentation | clear, well-document, well-explain, easy to follow, straightforward, instructions |
| MCP & Agent Development Skills     | mcp, copilot studio, agent, connector, power automate, topic, action              |
| Setup & Configuration Challenges   | setup, install, config, environment, prerequisite, authentication, credentials    |
| VS Code Integration                | vs code, visual studio code, extension, editor, debug                             |
| Valuable Learning Experience       | learn, knowledge, understand, skill, experience, educational, insight             |
| Course Quality & Engagement        | well-design, engag, interest, quality, structure, organized, professional         |
| Errors & Technical Issues          | error, bug, crash, broke, fail, fix, workaround                                   |
| Improvement Suggestions            | improv, suggest, would be nice, could be, hope, wish, add more, future            |
| Real-World Applicability           | real-world, production, business, enterprise, workplace, appl                     |

A feedback item can match multiple themes. Themes are stored as `r['themes'] = [...]` on each record.

---

## Phase 3: Generate Charts

Run `scripts/generate_charts.py`:

```bash
python3 <skill-path>/scripts/generate_charts.py "<workspace-path>/report"
```

Requires `matplotlib` and `numpy`. Install if needed: `pip3 install matplotlib numpy`.

This generates overview charts plus individual per-course charts in `<workspace>/report/charts/` at 180 DPI.

**Note:** Submission/completion charts only count actual submissions (`source: "excel"` and `source: "github_completed"`). Non-badge GitHub issues (`source: "github_issue"`) are excluded from these charts — they are only used for sentiment analysis.

### Course Grouping & Colors

Charts group courses into 4 categories, each with a consistent color:

| Group             | Color  | Hex     | Courses                        |
| ----------------- | ------ | ------- | ------------------------------ |
| Recruit           | Blue   | #3b82f6 | Recruit                        |
| Operative         | Teal   | #14b8a6 | Operative                      |
| Special Ops       | Orange | #f59e0b | All Special Ops missions       |
| Cowork Collective | Purple | #a78bfa | All Cowork Collective missions |

**Display order** (used in all charts): Recruit, Operative, Special Ops: YAML Specialist, Special Ops: Microsoft Copilot Studio MCP, Special Ops: Microsoft Learn Docs MCP Server, Special Ops: Power Platform CLI MCP Server, Cowork Collective: Badge Check, Cowork Collective: Compliance Packet, Cowork Collective: Out of Office.

**Short names** used on chart axes (where full names are too long):

| Full Name                                    | Short Name         |
| -------------------------------------------- | ------------------ |
| Special Ops: YAML Specialist                 | YAML Specialist    |
| Special Ops: Microsoft Copilot Studio MCP    | Copilot Studio MCP |
| Special Ops: Microsoft Learn Docs MCP Server | Learn Docs MCP     |
| Special Ops: Power Platform CLI MCP Server   | PP CLI MCP         |
| Cowork Collective: Badge Check               | Badge Check        |
| Cowork Collective: Compliance Packet         | Compliance Packet  |
| Cowork Collective: Out of Office             | Out of Office      |

### Overview Charts

| Chart                   | Filename                     | Description                                            |
| ----------------------- | ---------------------------- | ------------------------------------------------------ |
| Weekly completions      | `completions_over_time.png`  | Stacked area chart by course group                     |
| Sentiment by course     | `sentiment_by_course.png`    | Horizontal stacked bar with positive/negative % labels |
| Course grades           | `grades_by_course.png`       | Lollipop chart sorted by grade (best → worst)          |
| Cumulative completions  | `cumulative_completions.png` | Line chart with gradient fills and endpoint markers    |
| Overall sentiment       | `sentiment_pie.png`          | Donut chart with total count in center                 |
| Monthly feedback volume | `monthly_feedback.png`       | Stacked bar by month and course group                  |

### Per-Course Charts

For each course, a `course_{slug}.png` file is generated (e.g. `course_recruit.png`, `course_operative.png`, `course_special_ops_yaml_specialist.png`). Each shows:

- **Weekly submissions** as an area chart (primary axis)
- **Cumulative total** as a dashed line (secondary axis)

The slug is the course name lowercased with spaces → underscores, colons removed, and ampersands → `"and"` (e.g. `"Cowork Collective: Badge Check"` → `course_cowork_collective_badge_check.png`).

Color scheme (navy/teal theme matching cover): Blue (#3b82f6), Green (#22c55e), Red (#ef4444), Orange (#f59e0b), Purple (#a78bfa), Teal (#14b8a6). Charts use a consistent light background (#fafbfc), subtle grid (#e2e8f0), and navy (#111827) text.

---

## Phase 4: Build Markdown

Run `scripts/build_markdown.py`:

```bash
python3 <skill-path>/scripts/build_markdown.py "<workspace-path>/report"
```

This generates three markdown files in `<workspace>/report/markdown/`:

### management-summary.md

- Title: "Management Summary"
- Key metrics table (total completions, feedback count, courses, overall grade, sentiment percentages)
  - **Total completions** excludes `source: "github_issue"` records (only counts actual submissions)
- Highlights section (Recruit/Operative counts, highest/lowest rated courses)
- Chart references (one per section with narrative text)
- **Course Spotlights** section — for each course:
  - Grade, response count, positive/negative percentages
  - Grade explanation — contextual note based on score range:
    - ≥ 9.0: "Exceptional satisfaction — one of the top-rated courses."
    - ≥ 8.5: "Strong satisfaction with consistently positive feedback."
    - ≥ 8.0: "Good satisfaction, though some participants encountered challenges."
    - < 8.0: "Solid course, but a higher neutral/negative ratio pulls the grade down."
  - Top 3 themes with mention counts
  - **Standout callout** — appears when positive % ≥ 85%: highlights most-praised theme
  - **Watch area callout** — appears when negative % ≥ 15%: highlights top negative theme
  - Representative quotes — **10 total**, split proportionally to the grade using formula: `num_positive = round(10 × grade / 10)`. Grade 8.0/10 → 8 positive, 2 negative. Quotes are selected by closest to ideal length (positive: ~250 chars, negative: ~200 chars).
- Recommendations section (4 static recommendations: address setup challenges, expand Cowork Collective, scale Special Ops, continue monitoring)

#### Quote Cleaning

All quotes in the report go through a cleaning pipeline before display:

1. Newlines → spaces
2. **Bold headers** (`**text**`) removed
3. Markdown headers (`# ...`) removed
4. Checkbox lines (`- [ ] ...`) removed
5. Leading list dashes removed, inline dashes → periods
6. HTML entities decoded (`&#39;` → `'`, `&amp;` → `&`)
7. Collapsed whitespace
8. Truncated at sentence boundary — positive quotes target ~250 chars max, negative quotes ~200 chars max (falls back to word boundary + `...` if no sentence break found above 80–100 chars)

### feedback-analysis.md

- Title: "Detailed Feedback Analysis"
- Overall summary table (sentiment counts + percentages)
- Course overview table (responses, sentiment breakdown, grade per course)
- **Recruit & Operative: Submission Pipeline** — comparison table showing GitHub badge submissions, Excel form submissions, badges awarded (closed issues), and other GitHub issues for Recruit and Operative
- Per-course sections (multiple pages per course are fine) with:
  - Response counts and sentiment percentages
  - **Submissions Over Time** chart (per-course chart reference)
  - **Monthly trend table** showing submissions, sentiment breakdown, and grade per month
  - **Top 5 themes** with mention counts and positive/negative indicator
  - **10 representative quotes** — balanced on grade using same formula as management summary (`round(10 × grade / 10)` positive, remainder negative); each cleaned by the quote pipeline (see above); positive truncated to ~200 chars, negative to ~180 chars
  - **Next Steps** — up to 5 prioritized, actionable recommendations generated algorithmically:

#### Next Steps Algorithm

Each course gets up to 5 next steps, generated in priority order:

1. **Priority 1–2: Top negative themes** — The top 2 themes with the most negative mentions, but only if each has ≥ 3 negative mentions. Uses a theme→advice mapping:

   | Theme                              | Advice                                                                                       |
   | ---------------------------------- | -------------------------------------------------------------------------------------------- |
   | Setup & Configuration Challenges   | Simplify setup — provide a pre-configured environment or improved quick-start guide...       |
   | Errors & Technical Issues          | Fix reported bugs — audit the most common failure points and add troubleshooting guidance.   |
   | Improvement Suggestions            | Act on improvement suggestions — review and prioritize the most-requested changes...         |
   | Clear Instructions & Documentation | Improve documentation clarity — review step-by-step guides for completeness...               |
   | VS Code Integration                | Improve VS Code experience — ensure extensions and tooling work seamlessly...                |
   | MCP & Agent Development Skills     | Strengthen MCP/agent content — review labs where participants reported MCP-related issues... |
   | Valuable Learning Experience       | Enhance learning depth — some participants felt the content could go deeper...               |
   | Course Quality & Engagement        | Refine course structure — address pacing and engagement issues...                            |
   | Hands-on & Practical Learning      | Improve hands-on exercises — ensure lab environments are reliable...                         |
   | Real-World Applicability           | Add more real-world examples — participants want to see how skills apply to production...    |

2. **Priority 3: Grade-based advice** — If grade < 8.0: "Boost course quality — current grade is below the 8.0 target." If grade < 8.5: "Target grade improvement — small refinements could push this above 8.5."
3. **Priority 4: Leverage strengths** — Highlights the top positive theme: "Double down on [theme] — most praised aspect ([count] positive mentions)."
4. **Priority 5: Engagement** — If < 50 responses: "Increase feedback volume — consider adding in-course feedback prompts." Otherwise: "Continue monitoring — maintain the feedback loop and review sentiment trends monthly."

### feedback.md

- Curated positive-only feedback (excludes error-mentioning entries)
- **Max 5 quotes per course** (~45 total), selected for ideal length (~250 chars)
- Each item as a blockquote: `> 👍 "text" — Name (Course)`

---

## Phase 5: Export PDF

Run `scripts/export_pdf.py`:

```bash
python3 <skill-path>/scripts/export_pdf.py "<workspace-path>/report" "<report-title>"
```

Example: `python3 scripts/export_pdf.py "/path/to/workspace/report" "Agent Academy - Report April 2026"`

This script:

1. Downloads badge images from `https://raw.githubusercontent.com/microsoft/agent-academy/main/docs/public/images/` to `<workspace>/report/badges/` (if not already present)
2. Builds a single HTML file with:
   - **Cover page**: Dark navy gradient background with teal accent, grid overlay, Agent Academy logo, report title, all badge images
     - **Title splitting**: The report title is split on `" - "` — the part before becomes the main title (large teal text), the part after becomes the subtitle (smaller slate text). E.g. `"Agent Academy - Report April 2026"` → main: `"Agent Academy"`, subtitle: `"Report April 2026"`.
     - **Hardcoded elements**: "Mission Report" tag (top-right classification label), "Microsoft Copilot Studio" pre-title above the main title, "Earned Badges" label on the badge shelf, "microsoft/agent-academy • Comprehensive Feedback & Completion Analysis" footer text.
   - **Management summary**: Converted from markdown with charts embedded as base64 images (H1 title stripped — the HTML provides its own)
   - **Detailed analysis**: Concise per-course analysis with monthly trends, themes, and representative quotes (H1 title stripped)
3. Exports to PDF using headless Microsoft Edge:
   ```bash
   "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge" \
     --headless --disable-gpu --no-sandbox \
     --print-to-pdf="<workspace>/report/pdf/<title>.pdf" \
     --no-pdf-header-footer \
     "file://<workspace>/report/_report.html"
   ```
4. Cleans up the temporary HTML file
5. On macOS, automatically removes the `com.apple.quarantine` extended attribute so the PDF opens without a Gatekeeper warning

The output PDF lands in `<workspace>/report/pdf/`.

### Page Break Rules

The HTML includes CSS rules to prevent content from splitting across pages:

- Charts + their descriptions are wrapped in `.chart-block` divs with `page-break-inside: avoid`
- Course spotlight sections (h3 + content) are wrapped in `.course-spotlight` divs
- Headings (`h2`, `h3`, `h4`) use `page-break-after: avoid`
- Tables, blockquotes, and images all have `page-break-inside: avoid`

### Badge Images

Downloaded from `microsoft/agent-academy` repo at `docs/public/images/`:

- `logo.png` — Cover page logo
- `mcs-agent-academy-recruit-badge.png`, `mcs-agent-academy-operative-badge.png`, `mcs-agent-academy-commander-badge.png` — Level badges
- `YAML_Specialist_Badge.png`, `Academy_LearnMCP_Badge.png`, `CommandLine_Badge.png` — Special Ops badges
- `BadgeBandit-badge.png`, `AuditAce-badge.png`, `Vacay-badge.png`, `MCP_Joker_Badge.png` — Cowork Collective badges

### Edge Fallback

The script checks these browser paths in order and uses the first one found:

1. `/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge` (macOS)
2. `/usr/bin/microsoft-edge` (Linux)
3. `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome` (macOS)
4. `/usr/bin/google-chrome` (Linux)

---

## Course Name Mapping

Excel filenames map to display names as follows:

| Filename Pattern                                                                 | Course Name                                  |
| -------------------------------------------------------------------------------- | -------------------------------------------- |
| `Agent Academy - Special Ops_ YAML Specialist`                                   | Special Ops: YAML Specialist                 |
| `Agent Academy - Special Ops_Microsoft Copilot Studio ❤️ MCP Mission Completion` | Special Ops: Microsoft Copilot Studio MCP    |
| `Agent Academy - Special Ops_ Microsoft Learn Docs MCP Server`                   | Special Ops: Microsoft Learn Docs MCP Server |
| `Agent Academy - Special Ops_⚡ Power Platform CLI MCP Server`                   | Special Ops: Power Platform CLI MCP Server   |
| `Copilot Studio Agent Academy - Operative`                                       | Operative                                    |
| `Copilot Studio Agent Academy - Recruit`                                         | Recruit                                      |
| `Cowork Collective_ Badge Check Mission Completion`                              | Cowork Collective: Badge Check               |
| `Cowork Collective_ Compliance Packet Mission Completion`                        | Cowork Collective: Compliance Packet         |
| `Cowork Collective_ Out of Office Mission Completion`                            | Cowork Collective: Out of Office             |

Note: filenames may contain non-breaking spaces (`\xa0`) — normalize these to regular spaces before matching.

---

## Running the Full Pipeline

To generate a complete report in one go:

```bash
# 1. Extract from Excel
python3 <skill-path>/scripts/extract_feedback.py "<workspace>/report"

# 2. Fetch GitHub issues via MCP tools:
#    a. Badge submissions: recruit-completed + operative-completed labels (paginate ALL pages)
#    b. Non-badge issues: all other issues, classified to courses by keyword
#    c. Add source/is_closed fields, combine with Excel → _all_feedback.json

# 3. Analyze sentiment
python3 <skill-path>/scripts/analyze_sentiment.py "<workspace>/report"

# 4. Generate charts
python3 <skill-path>/scripts/generate_charts.py "<workspace>/report"

# 5. Build markdown
python3 <skill-path>/scripts/build_markdown.py "<workspace>/report"

# 6. Export PDF
python3 <skill-path>/scripts/export_pdf.py "<workspace>/report" "Agent Academy - Report April 2026"
```

Step 2 requires the GitHub MCP tools and should be done interactively by the agent between steps 1 and 3.
