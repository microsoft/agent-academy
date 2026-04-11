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

    total_completions = len(records)
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

        # Pick quotes proportional to grade (grade 9.1 → 91% positive → ~5 pos out of 5)
        total_quotes = 5
        num_pos_q = min(total_quotes, max(1, int(total_quotes * grade / 10 + 0.5)))
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


def build_feedback_analysis(data, workspace):
    """Generate feedback-analysis.md with full detailed analysis."""
    summary = data['summary']
    course_stats = data['course_stats']
    records = data['records']
    feedback = [r for r in records if r['type'] == 'feedback']

    total = summary['total_feedback']
    pos = summary['positive']
    neu = summary['neutral']
    neg = summary['negative']

    lines = []
    lines.append(f"# Agent Academy Feedback Analysis\n")
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

    # Per-course sections
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

        # Themes
        if s.get('themes'):
            lines.append("### Common Themes\n")
            pos_themes = [(th, cnt) for th, cnt in s['themes'].items()
                          if any(r['sentiment'] == 'positive' and th in r.get('themes', []) for r in items)]
            neg_themes = [(th, cnt) for th, cnt in s['themes'].items()
                          if any(r['sentiment'] == 'negative' and th in r.get('themes', []) for r in items)]

            if pos_themes:
                lines.append("**👍 Positive themes:**\n")
                for th, cnt in sorted(s['themes'].items(), key=lambda x: -x[1]):
                    lines.append(f"- {th} ({cnt} mentions)")
            if neg_themes:
                lines.append("\n**👎 Negative themes:**\n")
                for th, _ in neg_themes:
                    neg_count = sum(1 for r in items if r['sentiment'] == 'negative' and th in r.get('themes', []))
                    lines.append(f"- {th} ({neg_count} mentions)")

        # Feedback items sorted: positive → neutral → negative
        lines.append("\n### Feedback\n")
        sort_order = {'positive': 0, 'neutral': 1, 'negative': 2}
        sorted_items = sorted(items, key=lambda r: sort_order.get(r.get('sentiment', 'neutral'), 1))

        for i, r in enumerate(sorted_items):
            text = r.get('text', '')
            if not text:
                continue

            emoji = {'positive': '👍', 'neutral': '➖', 'negative': '👎'}.get(r.get('sentiment', 'neutral'), '➖')
            name = r.get('name', 'Anonymous') or 'Anonymous'

            # Format as blockquote (prefix every line with >)
            quoted = '\n'.join(f'> {line}' for line in f'{emoji} "{text}" — {name}'.split('\n'))
            lines.append(quoted)

            if i < len(sorted_items) - 1:
                lines.append("\n---\n")

        lines.append("\n---\n")

    md_dir = os.path.join(workspace, "markdown")
    os.makedirs(md_dir, exist_ok=True)
    path = os.path.join(md_dir, "feedback-analysis.md")
    with open(path, 'w') as f:
        f.write('\n'.join(lines))
    print(f"  Written: {path}")


def build_positive_feedback(data, workspace):
    """Generate feedback.md with curated positive-only feedback."""
    records = data['records']
    feedback = [r for r in records if r['type'] == 'feedback' and r.get('sentiment') == 'positive']

    # Exclude entries mentioning errors
    filtered = []
    for r in feedback:
        text = r.get('text', '')
        if any(re.search(p, text, re.IGNORECASE) for p in ERROR_PATTERNS):
            continue
        filtered.append(r)

    lines = ["# Agent Academy Feedback\n"]
    for i, r in enumerate(filtered):
        text = r.get('text', '')
        name = r.get('name', 'Anonymous') or 'Anonymous'
        course = r.get('course', '')

        quoted = '\n'.join(f'> {line}' for line in f'👍 "{text}" — {name} ({course})'.split('\n'))
        lines.append(quoted)

        if i < len(filtered) - 1:
            lines.append("\n---\n")

    md_dir = os.path.join(workspace, "markdown")
    os.makedirs(md_dir, exist_ok=True)
    path = os.path.join(md_dir, "feedback.md")
    with open(path, 'w') as f:
        f.write('\n'.join(lines))
    print(f"  Written: {path} ({len(filtered)} items)")


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
