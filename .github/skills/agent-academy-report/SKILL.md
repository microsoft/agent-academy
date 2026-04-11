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

Each record should have: `{course, date, month, sentiment, text, name, type}`.

---

## Phase 2: Analyze Sentiment

Run `scripts/analyze_sentiment.py`:

```bash
python3 <skill-path>/scripts/analyze_sentiment.py "<workspace-path>/report"
```

This script:
- Reads `<workspace>/report/data/_all_feedback.json`
- Scores each feedback item using keyword-based sentiment analysis
- Detects common themes (Hands-on Learning, Setup Challenges, MCP Skills, etc.)
- Computes per-course grades using weighted average (positive=10, neutral=6, negative=2)
- Outputs `<workspace>/report/data/_analyzed.json` with sentiment labels, themes, and course stats

### Sentiment Keywords

**Positive** patterns include: great, excellent, amazing, awesome, helpful, useful, learned, clear, intuitive, practical, hands-on, well-structured, engaging, valuable, insightful, comprehensive, etc.

**Negative** patterns include: error, issue, problem, bug, broke, crash, fail, stuck, struggle, missing, trouble, difficult, confusing, frustrating, unclear, improve, wish, lack, disappoint, etc.

**Scoring rule:** If negative matches > positive matches → negative. Else if positive > 0 → positive. Else if negative > 0 → negative. Else → neutral.

---

## Phase 3: Generate Charts

Run `scripts/generate_charts.py`:

```bash
python3 <skill-path>/scripts/generate_charts.py "<workspace-path>/report"
```

Requires `matplotlib` and `numpy`. Install if needed: `pip3 install matplotlib numpy`.

This generates 6 charts in `<workspace>/report/charts/` at 180 DPI:

| Chart | Filename | Description |
|-------|----------|-------------|
| Weekly completions | `completions_over_time.png` | Stacked area chart by course group |
| Sentiment by course | `sentiment_by_course.png` | Horizontal stacked bar with positive/negative % labels |
| Course grades | `grades_by_course.png` | Lollipop chart sorted by grade (best → worst) |
| Cumulative completions | `cumulative_completions.png` | Line chart with gradient fills and endpoint markers |
| Overall sentiment | `sentiment_pie.png` | Donut chart with total count in center |
| Monthly feedback volume | `monthly_feedback.png` | Stacked bar by month and course group |

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
- Highlights section
- Chart references (one per section with narrative text)
- **Course Spotlights** section — for each course:
  - Grade, response count, positive/negative percentages
  - Grade explanation (contextual note based on score range)
  - Top 3 themes with mention counts
  - Standout/watch area callout for notably high positive or negative rates
  - Representative quotes — 5 total, split proportionally to the grade (e.g., grade 9.1 → 5 positive, 0 negative; grade 7.7 → 4 positive, 1 negative)
- Recommendations section

### feedback-analysis.md
- Title: "Detailed Feedback Analysis"
- Overall summary table (sentiment counts + percentages)
- Course overview table (responses, sentiment breakdown, grade per course)
- Per-course sections with:
  - Response counts and sentiment percentages
  - Common themes (positive and negative)
  - Individual feedback items sorted positive → neutral → negative
  - Each item as a blockquote with sentiment emoji, quoted text, and attribution
  - Horizontal rules between items

### feedback.md
- Curated positive-only feedback (excludes error-mentioning entries)
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
   - **Cover page**: Blue gradient background, Agent Academy logo, report title, all badge images
   - **Management summary**: Converted from markdown with charts embedded as base64 images
   - **Detailed analysis**: Full feedback analysis with all blockquotes and tables
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

If Microsoft Edge is not available at the default macOS path, check:
- `/usr/bin/microsoft-edge` (Linux)
- `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe` (Windows)
- Google Chrome as an alternative (`/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`)

---

## Course Name Mapping

Excel filenames map to display names as follows:

| Filename Pattern | Course Name |
|-----------------|-------------|
| `Agent Academy - Special Ops_ YAML Specialist` | Special Ops: YAML Specialist |
| `Agent Academy - Special Ops_Microsoft Copilot Studio...MCP` | Special Ops: Microsoft Copilot Studio MCP |
| `Agent Academy - Special Ops_ Microsoft Learn Docs MCP Server` | Special Ops: Microsoft Learn Docs MCP Server |
| `Agent Academy - Special Ops_⚡ Power Platform CLI MCP Server` | Special Ops: Power Platform CLI MCP Server |
| `Copilot Studio Agent Academy - Operative` | Operative |
| `Copilot Studio Agent Academy - Recruit` | Recruit |
| `Cowork Collective_ Badge Check` | Cowork Collective: Badge Check |
| `Cowork Collective_ Compliance Packet` | Cowork Collective: Compliance Packet |
| `Cowork Collective_ Out of Office` | Cowork Collective: Out of Office |

Note: filenames may contain non-breaking spaces (`\xa0`) — normalize these to regular spaces before matching.

---

## Running the Full Pipeline

To generate a complete report in one go:

```bash
# 1. Extract from Excel
python3 <skill-path>/scripts/extract_feedback.py "<workspace>/report"

# 2. (Manually fetch GitHub issues via MCP tools and append to _extracted.json → _all_feedback.json)

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
