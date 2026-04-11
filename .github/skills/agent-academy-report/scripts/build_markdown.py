#!/usr/bin/env python3
"""Build markdown report files from analyzed feedback data.

Usage: python3 build_markdown.py <workspace-path>

Reads <workspace>/data/_analyzed.json and generates three markdown files
in <workspace>/markdown/:
  - management-summary.md
  - feedback-analysis.md
  - feedback.md (positive-only curated)
"""

import json
import os
import re
import sys
from collections import defaultdict

COURSE_ORDER = [
    "Recruit", "Operative",
    "Special Ops: YAML Specialist", "Special Ops: Microsoft Copilot Studio MCP",
    "Special Ops: Microsoft Learn Docs MCP Server", "Special Ops: Power Platform CLI MCP Server",
    "Cowork Collective: Badge Check", "Cowork Collective: Compliance Packet", "Cowork Collective: Out of Office",
]

ERROR_PATTERNS = [
    r'\berror\b', r'\bfail\b', r'\bcrash\b', r'\bbroke\b', r'\bbug\b',
    r'\bstuck\b', r'\bdidn.t work\b', r'\bnot work\b',
]


def build_management_summary(data, workspace):
    """Generate management-summary.md."""
    summary = data['summary']
    course_stats = data['course_stats']
    records = data['records']

    total_completions = sum(1 for r in records if r.get('source') != 'github_issue')
    total_feedback = summary['total_feedback']
    overall_grade = summary['overall_grade']
    pos_pct = round(summary['positive'] / total_feedback * 100)
    neu_pct = round(summary['neutral'] / total_feedback * 100)
    neg_pct = round(summary['negative'] / total_feedback * 100)

    highest_course = max(course_stats, key=lambda c: course_stats[c]['grade'])
    lowest_course = min(course_stats, key=lambda c: course_stats[c]['grade'])
    num_courses = len(course_stats)

    dates = sorted(r['date'] for r in records if r.get('date'))
    date_start = dates[0] if dates else "N/A"
    date_end = dates[-1] if dates else "N/A"

    recruit_count = sum(1 for r in records if r['course'] == 'Recruit')
    operative_count = sum(1 for r in records if r['course'] == 'Operative')

    md = f"""# Management Summary

**Report Period:** {date_start} to {date_end}

---

## Key Metrics at a Glance

| Metric | Value |
|--------|-------|
| Total Course Completions | **{total_completions:,}** |
| Feedback Responses Collected | **{total_feedback}** |
| Courses Tracked | **{num_courses}** |
| Overall Satisfaction Grade | **{overall_grade}/10** |
| Positive Sentiment | **{pos_pct}%** |
| Neutral Sentiment | **{neu_pct}%** |
| Negative Sentiment | **{neg_pct}%** |

### Highlights

- **{recruit_count:,}** Recruit completions — the largest program by volume
- **{operative_count}** Operative completions — strong advanced engagement
- **Highest rated:** {highest_course} ({course_stats[highest_course]['grade']}/10)
- **Lowest rated:** {lowest_course} ({course_stats[lowest_course]['grade']}/10) — still above average

---

## Overall Sentiment

![Overall Feedback Sentiment](../charts/sentiment_pie.png)

Across all {total_feedback} feedback responses, **{pos_pct}%** of participants expressed positive sentiment. Only **{neg_pct}%** reported negative experiences, primarily around setup challenges and tooling errors.

---

## Completions Over Time

![Completions Over Time](../charts/completions_over_time.png)

Weekly completion volumes show strong sustained engagement. The Recruit program launched first and continues to drive the majority of completions. Operative and Special Ops courses launched later and show healthy growth patterns.

---

## Cumulative Growth

![Cumulative Completions](../charts/cumulative_completions.png)

Cumulative completion curves demonstrate consistent growth across all program tiers. The Recruit program shows the steepest growth curve with **{recruit_count:,}** total completions.

---

## Feedback Volume by Month

![Monthly Feedback Volume](../charts/monthly_feedback.png)

Feedback collection ramps up as new courses are introduced, with sentiment remaining overwhelmingly positive across all months.

---

## Sentiment by Course

![Sentiment Distribution](../charts/sentiment_by_course.png)

All courses maintain majority positive sentiment. The Cowork Collective courses consistently show the highest satisfaction rates. Special Ops courses, being more technical, show slightly higher neutral/negative ratios due to tooling complexity.

---

## Course Grades

![Course Grades](../charts/grades_by_course.png)

All courses score between **{course_stats[lowest_course]['grade']}/10** and **{course_stats[highest_course]['grade']}/10**. The grade is a weighted average where positive=10, neutral=6, and negative=2.

---

"""

    # --- Per-course spotlight section ---
    feedback = [r for r in records if r['type'] == 'feedback']

    md += "## Course Spotlights\n\n"

    for course in COURSE_ORDER:
        if course not in course_stats:
            continue
        s = course_stats[course]
        t = s['total']
        pos_pct_c = round(s['positive'] / t * 100)
        neg_pct_c = round(s['negative'] / t * 100)
        grade = s['grade']

        items = [r for r in feedback if r['course'] == course]
        pos_items = [r for r in items if r.get('sentiment') == 'positive']
        neg_items = [r for r in items if r.get('sentiment') == 'negative']

        # Top themes
        themes = s.get('themes', {})
        top_themes = sorted(themes.items(), key=lambda x: -x[1])[:3]

        # Grade explanation
        if grade >= 9.0:
            grade_note = "Exceptional satisfaction — one of the top-rated courses."
        elif grade >= 8.5:
            grade_note = "Strong satisfaction with consistently positive feedback."
        elif grade >= 8.0:
            grade_note = "Good satisfaction, though some participants encountered challenges."
        else:
            grade_note = "Solid course, but a higher neutral/negative ratio pulls the grade down."

        # Pick quotes proportional to grade (grade 8.0 → 80% positive → 8 pos out of 10)
        total_quotes = 10
        num_pos_q = min(total_quotes, max(1, round(total_quotes * grade / 10)))
        num_neg_q = total_quotes - num_pos_q
        # Ensure we don't exceed available quotes
        num_pos_q = min(num_pos_q, len(pos_items))
        num_neg_q = min(num_neg_q, len(neg_items))
        # Fill remaining slots from the other side
        if num_pos_q + num_neg_q < total_quotes:
            extra = total_quotes - num_pos_q - num_neg_q
            if len(pos_items) > num_pos_q:
                add = min(extra, len(pos_items) - num_pos_q)
                num_pos_q += add
                extra -= add
            if extra and len(neg_items) > num_neg_q:
                num_neg_q += min(extra, len(neg_items) - num_neg_q)
        best_pos = sorted(pos_items, key=lambda r: abs(len(r.get('text', '')) - 250))[:num_pos_q]
        best_neg = sorted(neg_items, key=lambda r: abs(len(r.get('text', '')) - 200))[:num_neg_q]

        md += f"### {course}\n\n"
        md += f"**{t} responses** · Grade: **{grade}/10** · "
        md += f"👍 {pos_pct_c}% positive · 👎 {neg_pct_c}% negative\n\n"
        md += f"{grade_note}\n\n"

        if top_themes:
            md += "**Top themes:** "
            md += ", ".join(f"{th} ({cnt})" for th, cnt in top_themes)
            md += "\n\n"

        # Highlight
        if pos_pct_c >= 85:
            md += f"**Standout:** {pos_pct_c}% of respondents were positive — learners particularly valued "
            if top_themes:
                md += f"the {top_themes[0][0].lower()}.\n\n"
            else:
                md += "the course content.\n\n"
        elif neg_pct_c >= 15:
            md += f"**Watch area:** {neg_pct_c}% reported negative experiences, "
            neg_themes = [(th, cnt) for th, cnt in themes.items()
                         if any(r['sentiment'] == 'negative' and th in r.get('themes', []) for r in neg_items)]
            if neg_themes:
                top_neg_theme = sorted(neg_themes, key=lambda x: -x[1])[0][0]
                md += f"primarily around {top_neg_theme.lower()}.\n\n"
            else:
                md += "primarily around technical challenges.\n\n"

        def clean_quote(text, max_len=200):
            """Clean up a quote for display."""
            text = text.replace('\n', ' ').replace('\r', ' ')
            text = re.sub(r'\*\*[^*]+\*\*\s*', '', text)  # Remove bold headers
            text = re.sub(r'#+\s+[^\n]+\s*', '', text)  # Remove markdown headers
            text = re.sub(r'- \[.\][^-]*', '', text)  # Remove checkbox lines
            text = re.sub(r'^\s*-\s+', '', text)  # Remove leading list dash
            text = re.sub(r'\s+-\s+', '. ', text)  # Convert list dashes to periods
            text = re.sub(r'&#39;', "'", text)  # Fix HTML entities
            text = re.sub(r'&amp;', '&', text)
            text = re.sub(r'\s+', ' ', text).strip()
            if len(text) > max_len:
                # Cut at sentence boundary
                cut = text[:max_len].rfind('.')
                if cut > 100:
                    text = text[:cut + 1]
                else:
                    text = text[:max_len].rsplit(' ', 1)[0] + '...'
            return text

        for q in best_pos:
            quote = clean_quote(q.get('text', ''))
            name = q.get('name', 'Anonymous')
            md += f"> 👍 *\"{quote}\"* — {name}\n\n"

        for q in best_neg:
            quote = clean_quote(q.get('text', ''), 180)
            name = q.get('name', 'Anonymous')
            md += f"> 👎 *\"{quote}\"* — {name}\n\n"

        md += "---\n\n"

    md += """## Recommendations

1. **Address Setup Challenges** — The most common negative theme across technical courses is setup difficulty. Consider providing pre-configured environments or improved setup documentation.
2. **Expand Cowork Collective** — These courses have the highest satisfaction; consider adding more missions in this format.
3. **Scale Special Ops** — Technical courses show strong engagement; the slightly lower grades present an opportunity for targeted improvements.
4. **Continue Monitoring** — The feedback pipeline provides ongoing insights; consider monthly reviews to track sentiment trends.

---

*Report generated from {total_completions:,} course completions and {total_feedback} feedback responses across the Agent Academy program.*
"""

    md_dir = os.path.join(workspace, "markdown")
    os.makedirs(md_dir, exist_ok=True)
    path = os.path.join(md_dir, "management-summary.md")
    with open(path, 'w') as f:
        f.write(md)
    print(f"  Written: {path}")


def _monthly_table(items):
    """Build a monthly submissions & sentiment table from feedback items (excludes non-badge GitHub issues)."""
    months = defaultdict(lambda: {'total': 0, 'positive': 0, 'neutral': 0, 'negative': 0})
    for r in items:
        if r.get('source') == 'github_issue':
            continue
        m = r.get('month')
        if not m:
            continue
        months[m]['total'] += 1
        s = r.get('sentiment', 'neutral')
        if s in months[m]:
            months[m][s] += 1

    if not months:
        return ""

    rows = ["| Month | Submissions | 👍 Positive | ➖ Neutral | 👎 Negative | Grade |",
            "|-------|----------:|------------:|-----------:|------------:|------:|"]
    for m in sorted(months):
        d = months[m]
        t = d['total']
        grade = round((d['positive'] * 10 + d['neutral'] * 6 + d['negative'] * 2) / t, 1) if t else 0
        rows.append(
            f"| {m} | {t} | {d['positive']} ({d['positive']*100//t}%) "
            f"| {d['neutral']} ({d['neutral']*100//t}%) "
            f"| {d['negative']} ({d['negative']*100//t}%) "
            f"| {grade}/10 |"
        )
    return '\n'.join(rows) + '\n'


def _pick_quotes(items, num=10, max_len=200, grade=None):
    """Pick a balanced set of representative quotes, optionally grade-based."""
    pos_items = [r for r in items if r.get('sentiment') == 'positive' and r.get('text')]
    neg_items = [r for r in items if r.get('sentiment') == 'negative' and r.get('text')]

    if grade is not None:
        # Grade-based: grade 8/10 → 8 positive, 2 negative
        num_pos = min(len(pos_items), max(1, round(num * grade / 10)))
        num_neg = min(len(neg_items), num - num_pos)
        num_pos = min(len(pos_items), num - num_neg)
    else:
        total = len(items) or 1
        pos_ratio = len(pos_items) / total
        num_pos = min(len(pos_items), max(1, round(num * pos_ratio)))
        num_neg = min(len(neg_items), num - num_pos)
        num_pos = min(len(pos_items), num - num_neg)  # fill remainder

    def clean(text):
        text = text.replace('\n', ' ').replace('\r', ' ')
        text = re.sub(r'\*\*[^*]+\*\*\s*', '', text)
        text = re.sub(r'#+\s+[^\n]+\s*', '', text)
        text = re.sub(r'- \[.\][^-]*', '', text)
        text = re.sub(r'^\s*-\s+', '', text)
        text = re.sub(r'\s+-\s+', '. ', text)
        text = re.sub(r'&#39;', "'", text)
        text = re.sub(r'&amp;', '&', text)
        text = re.sub(r'\s+', ' ', text).strip()
        if len(text) > max_len:
            cut = text[:max_len].rfind('.')
            text = text[:cut + 1] if cut > 80 else text[:max_len].rsplit(' ', 1)[0] + '...'
        return text

    best_pos = sorted(pos_items, key=lambda r: abs(len(r['text']) - 250))[:num_pos]
    best_neg = sorted(neg_items, key=lambda r: abs(len(r['text']) - 200))[:num_neg]

    lines = []
    for q in best_pos:
        lines.append(f"> 👍 *\"{clean(q['text'])}\"* — {q.get('name') or 'Anonymous'}\n")
    for q in best_neg:
        lines.append(f"> 👎 *\"{clean(q['text'])}\"* — {q.get('name') or 'Anonymous'}\n")
    return '\n'.join(lines)


def _course_slug(course):
    """Generate a filesystem-safe slug for a course name."""
    return course.lower().replace(' ', '_').replace(':', '').replace('&', 'and')


def _build_comparison_table(records):
    """Build Recruit & Operative funnel-style comparison."""
    rows = ["## Recruit & Operative: Submission Pipeline\n"]
    rows.append("| Stage | Recruit | Operative |")
    rows.append("|-------|--------:|----------:|")

    # Gather per-course numbers
    data = {}
    for course in ['Recruit', 'Operative']:
        gh = sum(1 for r in records if r['course'] == course and r.get('source') == 'github_completed')
        excel = sum(1 for r in records if r['course'] == course and r.get('source') == 'excel')
        badges = sum(1 for r in records if r['course'] == course and r.get('source') == 'github_completed' and r.get('is_closed'))
        issues = sum(1 for r in records if r['course'] == course and r.get('source') == 'github_issue')
        data[course] = {'gh': gh, 'excel': excel, 'badges': badges, 'issues': issues}

    r, o = data['Recruit'], data['Operative']

    # Funnel rows with indentation showing flow
    rows.append(f"| **1. GitHub Badge Submissions** | **{r['gh']:,}** | **{o['gh']:,}** |")
    rows.append(
        f"| &nbsp;&nbsp;&nbsp;↳ Badges Awarded ✅ | {r['badges']:,} ({r['badges']*100//r['gh']}%) "
        f"| {o['badges']:,} ({o['badges']*100//o['gh']}%) |"
    )
    r_open, o_open = r['gh'] - r['badges'], o['gh'] - o['badges']
    rows.append(
        f"| &nbsp;&nbsp;&nbsp;↳ Pending Review ⏳ | {r_open:,} ({r_open*100//r['gh']}%) "
        f"| {o_open:,} ({o_open*100//o['gh']}%) |"
    )
    rows.append(f"| **2. Excel Survey Responses** | **{r['excel']:,}** | **{o['excel']:,}** |")
    rows.append(f"| **3. Other GitHub Issues** | **{r['issues']:,}** | **{o['issues']:,}** |")

    rows.append("")
    rows.append(
        f"> **Note:** GitHub badge submissions and Excel survey responses are **independent channels**. "
        f"Learners open a GitHub issue to claim their badge, and separately fill out a Forms survey. "
        f"Not all badge recipients complete the survey, which is why Recruit has more badges awarded "
        f"({r['badges']:,}) than Excel submissions ({r['excel']:,}).\n"
    )
    return '\n'.join(rows)


def _generate_next_steps(course, stats, items):
    """Generate up to 5 prioritized next steps for a course."""
    steps = []
    grade = stats['grade']
    neg_pct = round(stats['negative'] / stats['total'] * 100) if stats['total'] else 0

    # Identify top negative themes
    neg_themes = defaultdict(int)
    for r in items:
        if r.get('sentiment') == 'negative':
            for th in r.get('themes', []):
                neg_themes[th] += 1
    top_neg = sorted(neg_themes.items(), key=lambda x: -x[1])

    advice_map = {
        'Setup & Configuration Challenges': 'Simplify setup — provide a pre-configured environment or improved quick-start guide to reduce setup friction.',
        'Errors & Technical Issues': 'Fix reported bugs — audit the most common failure points and add troubleshooting guidance.',
        'Improvement Suggestions': 'Act on improvement suggestions — review and prioritize the most-requested changes from participants.',
        'Clear Instructions & Documentation': 'Improve documentation clarity — review step-by-step guides for completeness and add screenshots where helpful.',
        'VS Code Integration': 'Improve VS Code experience — ensure extensions and tooling work seamlessly with clear debugging guides.',
        'MCP & Agent Development Skills': 'Strengthen MCP/agent content — review labs where participants reported MCP-related issues and clarify common pitfalls.',
        'Valuable Learning Experience': 'Enhance learning depth — some participants felt the content could go deeper. Consider adding advanced optional sections.',
        'Course Quality & Engagement': 'Refine course structure — address pacing and engagement issues reported by participants.',
        'Hands-on & Practical Learning': 'Improve hands-on exercises — ensure lab environments are reliable and exercises match real-world scenarios.',
        'Real-World Applicability': 'Add more real-world examples — participants want to see how skills apply to production scenarios.',
    }

    # Priority 1–2: Top negative themes (skip themes with fewer than 3 negative mentions)
    for th, cnt in top_neg[:2]:
        if cnt >= 3:
            advice = advice_map.get(th, f'Address "{th}" — {cnt} negative mentions suggest this needs attention.')
            steps.append(f'{advice} ({cnt} negative mentions)')

    # Priority 3: Grade-based advice
    if grade < 8.0:
        steps.append(f'Boost course quality — current grade ({grade}/10) is below the 8.0 target. Focus on reducing the {neg_pct}% negative feedback rate.')
    elif grade < 8.5:
        steps.append(f'Target grade improvement — at {grade}/10, small refinements could push this above 8.5.')

    # Priority 4: Leverage top positive theme
    pos_themes = defaultdict(int)
    for r in items:
        if r.get('sentiment') == 'positive':
            for th in r.get('themes', []):
                pos_themes[th] += 1
    top_pos = sorted(pos_themes.items(), key=lambda x: -x[1])
    if top_pos:
        steps.append(f'Double down on "{top_pos[0][0]}" — most praised aspect ({top_pos[0][1]} positive mentions). Ensure this remains strong.')

    # Priority 5: Engagement / monitoring
    if stats['total'] < 50:
        steps.append(f'Increase feedback volume — only {stats["total"]} responses collected. Consider adding in-course feedback prompts.')
    else:
        steps.append('Continue monitoring — maintain the feedback loop and review sentiment trends monthly.')

    return steps[:5]


def build_feedback_analysis(data, workspace):
    """Generate feedback-analysis.md — concise per-course analysis (max ~30 pages)."""
    summary = data['summary']
    course_stats = data['course_stats']
    records = data['records']
    feedback = [r for r in records if r['type'] == 'feedback']

    total = summary['total_feedback']
    pos = summary['positive']
    neu = summary['neutral']
    neg = summary['negative']

    lines = []
    lines.append(f"# Detailed Feedback Analysis\n")
    lines.append(f"**{total} feedback responses** across {len(course_stats)} courses\n")
    lines.append(f"| Sentiment | Count | Percentage |")
    lines.append(f"|-----------|------:|-----------:|")
    lines.append(f"| 👍 Positive | {pos} | {pos*100//total}% |")
    lines.append(f"| ➖ Neutral | {neu} | {neu*100//total}% |")
    lines.append(f"| 👎 Negative | {neg} | {neg*100//total}% |")
    lines.append(f"| **Total** | **{total}** | **100%** |")
    lines.append(f"\n**Overall Grade: {summary['overall_grade']}/10**\n")

    # Course overview table
    lines.append("## Course Overview\n")
    lines.append("| Course | Responses | 👍 Positive | ➖ Neutral | 👎 Negative | Grade |")
    lines.append("|--------|----------:|------------:|-----------:|------------:|------:|")
    for course in COURSE_ORDER:
        if course not in course_stats:
            continue
        s = course_stats[course]
        t = s['total']
        lines.append(
            f"| {course} | {t} | {s['positive']} ({s['positive']*100//t}%) "
            f"| {s['neutral']} ({s['neutral']*100//t}%) "
            f"| {s['negative']} ({s['negative']*100//t}%) "
            f"| **{s['grade']}/10** |"
        )

    lines.append("\n---\n")

    # Recruit & Operative comparison table (if source data available)
    has_sources = any(r.get('source') for r in records)
    if has_sources:
        lines.append(_build_comparison_table(records))
        lines.append("---\n")

    # Per-course sections — monthly trend, chart, themes, 10 grade-based quotes, next steps
    for course in COURSE_ORDER:
        if course not in course_stats:
            continue
        s = course_stats[course]
        t = s['total']
        items = [r for r in feedback if r['course'] == course]

        lines.append(f"## {course}\n")
        lines.append(
            f"**{t} responses** — 👍 {s['positive']} ({s['positive']*100//t}%) "
            f"· ➖ {s['neutral']} ({s['neutral']*100//t}%) "
            f"· 👎 {s['negative']} ({s['negative']*100//t}%) "
            f"· **Grade: {s['grade']}/10**\n"
        )

        # Per-course submission chart
        slug = _course_slug(course)
        chart_path = os.path.join(workspace, "charts", f"course_{slug}.png")
        if os.path.exists(chart_path):
            lines.append(f"### Submissions Over Time\n")
            lines.append(f"![{course} Submissions](../charts/course_{slug}.png)\n")

        # Monthly trend table
        lines.append("### Monthly Trend\n")
        monthly = _monthly_table(items)
        if monthly:
            lines.append(monthly)
        else:
            lines.append("*No monthly data available.*\n")

        # Themes
        if s.get('themes'):
            lines.append("### Top Themes\n")
            top_themes = sorted(s['themes'].items(), key=lambda x: -x[1])[:5]
            for th, cnt in top_themes:
                neg_count = sum(1 for r in items if r['sentiment'] == 'negative' and th in r.get('themes', []))
                pos_count = sum(1 for r in items if r['sentiment'] == 'positive' and th in r.get('themes', []))
                if neg_count > pos_count:
                    lines.append(f"- 👎 {th} ({cnt} mentions)")
                else:
                    lines.append(f"- 👍 {th} ({cnt} mentions)")
            lines.append("")

        # Representative quotes (10 per course, grade-based balance)
        lines.append("### Representative Quotes\n")
        quotes = _pick_quotes(items, num=10, grade=s['grade'])
        if quotes:
            lines.append(quotes)
        else:
            lines.append("*No feedback text available.*\n")

        # Next steps (up to 5 prioritized recommendations)
        lines.append("### Next Steps\n")
        next_steps = _generate_next_steps(course, s, items)
        for i, step in enumerate(next_steps, 1):
            lines.append(f"{i}. **{step.split(' — ')[0]}** — {' — '.join(step.split(' — ')[1:])}" if ' — ' in step else f"{i}. {step}")
        lines.append("")

        lines.append("---\n")

    md_dir = os.path.join(workspace, "markdown")
    os.makedirs(md_dir, exist_ok=True)
    path = os.path.join(md_dir, "feedback-analysis.md")
    with open(path, 'w') as f:
        f.write('\n'.join(lines))
    print(f"  Written: {path}")


def build_positive_feedback(data, workspace):
    """Generate feedback.md with curated positive-only feedback (max 5 per course)."""
    records = data['records']
    feedback = [r for r in records if r['type'] == 'feedback' and r.get('sentiment') == 'positive']

    # Exclude entries mentioning errors
    filtered = []
    for r in feedback:
        text = r.get('text', '')
        if any(re.search(p, text, re.IGNORECASE) for p in ERROR_PATTERNS):
            continue
        filtered.append(r)

    # Group by course and pick best 5 per course (closest to 250 chars)
    by_course = defaultdict(list)
    for r in filtered:
        by_course[r.get('course', 'Unknown')].append(r)

    selected = []
    for course in COURSE_ORDER:
        items = by_course.get(course, [])
        best = sorted(items, key=lambda r: abs(len(r.get('text', '')) - 250))[:5]
        selected.extend(best)

    lines = ["# Agent Academy Feedback\n"]
    for i, r in enumerate(selected):
        text = r.get('text', '')
        name = r.get('name', 'Anonymous') or 'Anonymous'
        course = r.get('course', '')

        quoted = '\n'.join(f'> {line}' for line in f'👍 "{text}" — {name} ({course})'.split('\n'))
        lines.append(quoted)

        if i < len(selected) - 1:
            lines.append("\n---\n")

    md_dir = os.path.join(workspace, "markdown")
    os.makedirs(md_dir, exist_ok=True)
    path = os.path.join(md_dir, "feedback.md")
    with open(path, 'w') as f:
        f.write('\n'.join(lines))
    print(f"  Written: {path} ({len(selected)} items)")


def main():
    if len(sys.argv) < 2:
        print("Usage: python3 build_markdown.py <workspace-path>")
        sys.exit(1)

    workspace = sys.argv[1]
    data_path = os.path.join(workspace, "data", "_analyzed.json")
    if not os.path.exists(data_path):
        print("No analyzed data found. Run analyze_sentiment.py first.")
        sys.exit(1)

    with open(data_path) as f:
        data = json.load(f)

    print("Building markdown files...")
    build_management_summary(data, workspace)
    build_feedback_analysis(data, workspace)
    build_positive_feedback(data, workspace)
    print("Done!")


if __name__ == "__main__":
    main()
