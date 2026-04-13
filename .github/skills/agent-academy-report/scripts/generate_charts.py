#!/usr/bin/env python3
"""Generate charts from analyzed feedback data.

Usage: python3 generate_charts.py <workspace-path>

Reads <workspace>/data/_analyzed.json and generates 6 chart PNGs
in <workspace>/charts/.
"""

import json
import os
import sys
from datetime import datetime, timedelta
from collections import defaultdict

import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
import matplotlib.patheffects as pe
from matplotlib.patches import FancyBboxPatch

# Modern color palette (navy/teal theme matching the cover)
NAVY = '#111827'
NAVY_LIGHT = '#1e293b'
TEAL = '#2dd4bf'
TEAL_DARK = '#14b8a6'
BLUE = '#3b82f6'
GREEN = '#22c55e'
RED = '#ef4444'
ORANGE = '#f59e0b'
PURPLE = '#a78bfa'
SLATE = '#94a3b8'
SLATE_LIGHT = '#cbd5e1'
BG_COLOR = '#fafbfc'
GRID_COLOR = '#e2e8f0'

COURSE_GROUPS = {
    'Recruit': BLUE,
    'Operative': TEAL_DARK,
    'Special Ops': ORANGE,
    'Cowork Collective': PURPLE,
}

SHORT_NAMES = {
    "Special Ops: YAML Specialist": "YAML Specialist",
    "Special Ops: Microsoft Copilot Studio MCP": "Copilot Studio MCP",
    "Special Ops: Microsoft Learn Docs MCP Server": "Learn Docs MCP",
    "Special Ops: Power Platform CLI MCP Server": "PP CLI MCP",
    "Cowork Collective: Badge Check": "Badge Check",
    "Cowork Collective: Compliance Packet": "Compliance Packet",
    "Cowork Collective: Out of Office": "Out of Office",
}

COURSE_ORDER = [
    "Recruit", "Operative",
    "Special Ops: YAML Specialist", "Special Ops: Microsoft Copilot Studio MCP",
    "Special Ops: Microsoft Learn Docs MCP Server", "Special Ops: Power Platform CLI MCP Server",
    "Cowork Collective: Badge Check", "Cowork Collective: Compliance Packet", "Cowork Collective: Out of Office",
]


def setup_style():
    plt.rcParams.update({
        'font.family': 'sans-serif',
        'font.sans-serif': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'font.size': 11,
        'axes.spines.top': False,
        'axes.spines.right': False,
        'axes.spines.left': True,
        'axes.spines.bottom': True,
        'axes.edgecolor': SLATE_LIGHT,
        'axes.linewidth': 0.8,
        'axes.facecolor': BG_COLOR,
        'figure.facecolor': 'white',
        'axes.grid': True,
        'grid.color': GRID_COLOR,
        'grid.linewidth': 0.5,
        'grid.alpha': 0.7,
        'axes.axisbelow': True,
        'xtick.color': SLATE,
        'ytick.color': SLATE,
        'text.color': NAVY,
    })


def chart_completions_over_time(records, charts_dir):
    """Area chart of weekly completions by course group."""
    weekly = defaultdict(lambda: defaultdict(int))
    for r in records:
        if r.get('date'):
            dt = datetime.strptime(r['date'], '%Y-%m-%d')
            week_start = dt - timedelta(days=dt.weekday())
            weekly[week_start.strftime('%Y-%m-%d')][r['course']] += 1

    weeks_sorted = sorted(weekly.keys())
    week_dates = [datetime.strptime(w, '%Y-%m-%d') for w in weeks_sorted]

    group_data = {g: [] for g in COURSE_GROUPS}
    for w in weeks_sorted:
        for group in COURSE_GROUPS:
            count = sum(v for k, v in weekly[w].items() if k.startswith(group) or k == group)
            group_data[group].append(count)

    fig, ax = plt.subplots(figsize=(12, 5))

    # Stacked area chart
    values_list = [np.array(group_data[g]) for g in COURSE_GROUPS]
    colors = list(COURSE_GROUPS.values())
    labels = list(COURSE_GROUPS.keys())
    ax.stackplot(week_dates, *values_list, labels=labels, colors=colors, alpha=0.75, edgecolor='white', linewidth=0.5)

    ax.set_title('Course Completions Over Time', fontsize=16, fontweight='bold', pad=15, color=NAVY)
    ax.set_ylabel('Weekly Completions', fontsize=11, color=SLATE)
    ax.legend(loc='upper left', framealpha=0.95, edgecolor=GRID_COLOR, fancybox=True)
    ax.xaxis.set_major_formatter(mdates.DateFormatter('%b %d'))
    ax.xaxis.set_major_locator(mdates.WeekdayLocator(interval=2))
    plt.xticks(rotation=45, ha='right')
    ax.set_xlim(week_dates[0], week_dates[-1])
    plt.tight_layout()
    plt.savefig(os.path.join(charts_dir, 'completions_over_time.png'), dpi=180, bbox_inches='tight', facecolor='white')
    plt.close()
    print("  completions_over_time.png")


def chart_sentiment_by_course(feedback, course_stats, charts_dir):
    """Modern horizontal stacked bar of sentiment percentages per course with rounded styling."""
    courses_with_data = [c for c in COURSE_ORDER if c in course_stats]
    labels = [SHORT_NAMES.get(c, c) for c in courses_with_data]

    pos_vals, neu_vals, neg_vals = [], [], []
    for c in courses_with_data:
        s = course_stats[c]
        t = s['total']
        pos_vals.append(s['positive'] / t * 100)
        neu_vals.append(s['neutral'] / t * 100)
        neg_vals.append(s['negative'] / t * 100)

    fig, ax = plt.subplots(figsize=(10, 5.5))
    y = np.arange(len(labels))
    bar_height = 0.55

    # Draw bars with slight rounded look
    bars_pos = ax.barh(y, pos_vals, height=bar_height, color=GREEN, label='Positive', zorder=3, edgecolor='white', linewidth=0.5)
    bars_neu = ax.barh(y, neu_vals, left=pos_vals, height=bar_height, color=SLATE_LIGHT, label='Neutral', zorder=3, edgecolor='white', linewidth=0.5)
    bars_neg = ax.barh(y, neg_vals, left=[p + n for p, n in zip(pos_vals, neu_vals)], height=bar_height, color=RED, label='Negative', zorder=3, edgecolor='white', linewidth=0.5)

    ax.set_yticks(y)
    ax.set_yticklabels(labels, fontsize=11)
    ax.set_xlabel('Percentage (%)', fontsize=11, color=SLATE)
    ax.set_title('Sentiment Distribution by Course', fontsize=16, fontweight='bold', pad=15, color=NAVY)
    ax.legend(loc='lower right', framealpha=0.95, edgecolor=GRID_COLOR, fancybox=True, fontsize=10)
    ax.set_xlim(0, 105)
    ax.invert_yaxis()
    ax.spines['left'].set_visible(False)
    ax.tick_params(axis='y', length=0)

    for i, (p, n) in enumerate(zip(pos_vals, neg_vals)):
        ax.text(p / 2, i, f'{p:.0f}%', ha='center', va='center', fontsize=9, fontweight='bold', color='white')
        if n >= 5:
            left = pos_vals[i] + neu_vals[i] + n / 2
            ax.text(left, i, f'{n:.0f}%', ha='center', va='center', fontsize=8, fontweight='bold', color='white')

    plt.tight_layout()
    plt.savefig(os.path.join(charts_dir, 'sentiment_by_course.png'), dpi=180, bbox_inches='tight', facecolor='white')
    plt.close()
    print("  sentiment_by_course.png")


def chart_grades(course_stats, charts_dir):
    """Lollipop chart of course grades, sorted best to worst."""
    courses_with_data = [c for c in COURSE_ORDER if c in course_stats]
    # Sort by grade descending (best at top)
    courses_with_data.sort(key=lambda c: course_stats[c]['grade'], reverse=True)
    labels = [SHORT_NAMES.get(c, c) for c in courses_with_data]
    grade_vals = [course_stats[c]['grade'] for c in courses_with_data]
    colors = [GREEN if g >= 9 else (BLUE if g >= 8 else (ORANGE if g >= 7 else RED)) for g in grade_vals]

    fig, ax = plt.subplots(figsize=(10, 5.5))
    y = np.arange(len(labels))

    # Draw stems
    for i, (grade, color) in enumerate(zip(grade_vals, colors)):
        ax.plot([0, grade], [i, i], color=color, linewidth=2, alpha=0.4, zorder=2)

    # Draw dots
    ax.scatter(grade_vals, y, c=colors, s=120, zorder=3, edgecolors='white', linewidth=1.5)

    # Reference line at 8.0
    ax.axvline(x=8, color=SLATE_LIGHT, linestyle='--', linewidth=1, zorder=1)
    ax.text(8.02, -0.6, 'Target: 8.0', fontsize=9, color=SLATE, ha='left')

    ax.set_yticks(y)
    ax.set_yticklabels(labels, fontsize=11)
    ax.set_xlabel('Grade (1–10)', fontsize=11, color=SLATE)
    ax.set_title('Course Grades', fontsize=16, fontweight='bold', pad=15, color=NAVY)
    ax.set_xlim(5, 10.5)
    ax.invert_yaxis()
    ax.spines['left'].set_visible(False)
    ax.tick_params(axis='y', length=0)

    for i, (v, c) in enumerate(zip(grade_vals, colors)):
        ax.text(v + 0.12, i, f'{v}', ha='left', va='center', fontsize=12, fontweight='bold', color=c)

    plt.tight_layout()
    plt.savefig(os.path.join(charts_dir, 'grades_by_course.png'), dpi=180, bbox_inches='tight', facecolor='white')
    plt.close()
    print("  grades_by_course.png")


def chart_cumulative(records, charts_dir):
    """Line chart with gradient fill of cumulative completions over time."""
    all_dates = sorted(set(r['date'] for r in records if r.get('date')))
    date_objs = [datetime.strptime(d, '%Y-%m-%d') for d in all_dates]

    fig, ax = plt.subplots(figsize=(12, 5))
    for group, color in COURSE_GROUPS.items():
        running = 0
        cum = []
        for d in all_dates:
            running += sum(1 for r in records if r.get('date') == d and (r['course'].startswith(group) or r['course'] == group))
            cum.append(running)
        line, = ax.plot(date_objs, cum, label=group, color=color, linewidth=2.5, zorder=3)
        ax.fill_between(date_objs, cum, alpha=0.08, color=color, zorder=2)
        if cum:
            ax.scatter([date_objs[-1]], [cum[-1]], color=color, s=50, zorder=4, edgecolors='white', linewidth=1.5)
            ax.text(date_objs[-1], cum[-1], f'  {cum[-1]:,}', va='center', fontsize=10, color=color, fontweight='bold')

    ax.set_title('Cumulative Course Completions', fontsize=16, fontweight='bold', pad=15, color=NAVY)
    ax.set_ylabel('Total Completions', fontsize=11, color=SLATE)
    ax.legend(loc='upper left', framealpha=0.95, edgecolor=GRID_COLOR, fancybox=True)
    ax.xaxis.set_major_formatter(mdates.DateFormatter('%b %Y'))
    ax.xaxis.set_major_locator(mdates.MonthLocator())
    plt.xticks(rotation=45, ha='right')
    ax.set_xlim(date_objs[0], date_objs[-1])
    plt.tight_layout()
    plt.savefig(os.path.join(charts_dir, 'cumulative_completions.png'), dpi=180, bbox_inches='tight', facecolor='white')
    plt.close()
    print("  cumulative_completions.png")


def chart_sentiment_pie(feedback, charts_dir):
    """Donut chart of overall sentiment distribution."""
    total_pos = sum(1 for r in feedback if r['sentiment'] == 'positive')
    total_neu = sum(1 for r in feedback if r['sentiment'] == 'neutral')
    total_neg = sum(1 for r in feedback if r['sentiment'] == 'negative')
    total = total_pos + total_neu + total_neg

    fig, ax = plt.subplots(figsize=(4.5, 4.5))
    sizes = [total_pos, total_neu, total_neg]
    labels = ['Positive', 'Neutral', 'Negative']
    colors = [GREEN, SLATE_LIGHT, RED]

    wedges, texts, autotexts = ax.pie(
        sizes, labels=None, colors=colors, autopct='%1.0f%%',
        startangle=90, pctdistance=0.82,
        wedgeprops=dict(width=0.35, edgecolor='white', linewidth=2),
        textprops={'fontsize': 10, 'fontweight': 'bold'}
    )
    for at in autotexts:
        at.set_color('white')
        at.set_fontsize(10)
        at.set_fontweight('bold')

    # Center text
    ax.text(0, 0.06, f'{total:,}', ha='center', va='center', fontsize=20, fontweight='bold', color=NAVY)
    ax.text(0, -0.14, 'responses', ha='center', va='center', fontsize=9, color=SLATE)

    # Legend
    legend_labels = [f'{l} ({s:,})' for l, s in zip(labels, sizes)]
    ax.legend(wedges, legend_labels, loc='lower center', bbox_to_anchor=(0.5, -0.06),
              framealpha=0.95, edgecolor=GRID_COLOR, fancybox=True, fontsize=9, ncol=3)

    ax.set_title('Overall Feedback Sentiment', fontsize=13, fontweight='bold', pad=10, color=NAVY)
    plt.tight_layout()
    plt.savefig(os.path.join(charts_dir, 'sentiment_pie.png'), dpi=180, bbox_inches='tight', facecolor='white')
    plt.close()
    print("  sentiment_pie.png")


def chart_monthly_feedback(records, charts_dir):
    """Modern stacked bar of monthly submissions by course group."""
    monthly = defaultdict(lambda: defaultdict(int))
    for r in records:
        if r.get('date'):
            month = r['date'][:7]
            for group in COURSE_GROUPS:
                if r['course'].startswith(group) or r['course'] == group:
                    monthly[month][group] += 1
                    break

    months_sorted = sorted(monthly.keys())
    month_labels = [datetime.strptime(m + '-01', '%Y-%m-%d').strftime('%b %Y') for m in months_sorted]

    fig, ax = plt.subplots(figsize=(12, 6))
    x = np.arange(len(months_sorted))
    bar_width = 0.55
    bottom = np.zeros(len(months_sorted))

    for group, color in COURSE_GROUPS.items():
        values = np.array([monthly[m][group] for m in months_sorted])
        bars = ax.bar(x, values, bar_width, bottom=bottom, label=group, color=color,
                      edgecolor='white', linewidth=0.5, zorder=3)
        for i, (bar, val) in enumerate(zip(bars, values)):
            if val >= 15:
                ax.text(bar.get_x() + bar.get_width() / 2, bottom[i] + val / 2,
                        str(val), ha='center', va='center', fontsize=8, fontweight='bold', color='white')
        bottom += values

    # Total labels on top
    for i, total in enumerate(bottom):
        if total > 0:
            ax.text(x[i], total + 3, f'{int(total):,}', ha='center', va='bottom', fontsize=9, fontweight='bold', color=NAVY)

    ax.set_title('Monthly Submissions by Course', fontsize=16, fontweight='bold', pad=15, color=NAVY)
    ax.set_ylabel('Submissions', fontsize=11, color=SLATE)
    ax.set_xticks(x)
    ax.set_xticklabels(month_labels, rotation=45, ha='right')
    ax.legend(loc='upper left', framealpha=0.95, edgecolor=GRID_COLOR, fancybox=True)
    ax.spines['bottom'].set_visible(False)
    ax.tick_params(axis='x', length=0)
    plt.tight_layout()
    plt.savefig(os.path.join(charts_dir, 'monthly_feedback.png'), dpi=180, bbox_inches='tight', facecolor='white')
    plt.close()
    print("  monthly_feedback.png")


def _course_slug(course):
    """Generate a filesystem-safe slug for a course name."""
    return course.lower().replace(' ', '_').replace(':', '').replace('&', 'and')


def chart_per_course(records, charts_dir):
    """Generate individual submission timeline charts for each course."""
    for course in COURSE_ORDER:
        course_records = [r for r in records if r['course'] == course and r.get('date')]
        if not course_records:
            continue

        # Weekly aggregation
        weekly = defaultdict(int)
        for r in course_records:
            dt = datetime.strptime(r['date'], '%Y-%m-%d')
            week_start = dt - timedelta(days=dt.weekday())
            weekly[week_start.strftime('%Y-%m-%d')] += 1

        weeks_sorted = sorted(weekly.keys())
        week_dates = [datetime.strptime(w, '%Y-%m-%d') for w in weeks_sorted]
        counts = [weekly[w] for w in weeks_sorted]

        # Determine color from course group
        color = BLUE
        for group, c in COURSE_GROUPS.items():
            if course.startswith(group) or course == group:
                color = c
                break

        fig, ax = plt.subplots(figsize=(10, 4))
        ax.fill_between(week_dates, counts, alpha=0.15, color=color)
        ax.plot(week_dates, counts, color=color, linewidth=2)

        # Cumulative on second axis
        ax2 = ax.twinx()
        cum = list(np.cumsum(counts))
        ax2.plot(week_dates, cum, color=NAVY, linewidth=1.5, linestyle='--', alpha=0.5)
        ax2.set_ylabel('Cumulative', fontsize=10, color=SLATE)
        ax2.spines['right'].set_color(SLATE_LIGHT)
        ax2.spines['top'].set_visible(False)

        short = SHORT_NAMES.get(course, course)
        ax.set_title(f'{short} — Submissions Over Time', fontsize=14, fontweight='bold', pad=12, color=NAVY)
        ax.set_ylabel('Weekly Submissions', fontsize=10, color=SLATE)
        ax.xaxis.set_major_formatter(mdates.DateFormatter('%b %d'))
        ax.xaxis.set_major_locator(mdates.WeekdayLocator(interval=2))
        plt.xticks(rotation=45, ha='right')
        ax.set_xlim(week_dates[0], week_dates[-1])

        slug = _course_slug(course)
        plt.tight_layout()
        plt.savefig(os.path.join(charts_dir, f'course_{slug}.png'), dpi=180, bbox_inches='tight', facecolor='white')
        plt.close()
        print(f"  course_{slug}.png")


def main():
    if len(sys.argv) < 2:
        print("Usage: python3 generate_charts.py <workspace-path>")
        sys.exit(1)

    workspace = sys.argv[1]
    charts_dir = os.path.join(workspace, "charts")
    os.makedirs(charts_dir, exist_ok=True)

    data_path = os.path.join(workspace, "data", "_analyzed.json")
    if not os.path.exists(data_path):
        print(f"No analyzed data found. Run analyze_sentiment.py first.")
        sys.exit(1)

    with open(data_path) as f:
        data = json.load(f)

    records = data['records']
    course_stats = data['course_stats']
    feedback = [r for r in records if r['type'] == 'feedback']
    # Submissions = actual course completions (Excel forms + GitHub badge submissions), not bug reports
    submissions = [r for r in records if r.get('source') != 'github_issue']

    setup_style()
    print("Generating charts...")
    chart_completions_over_time(submissions, charts_dir)
    chart_sentiment_by_course(feedback, course_stats, charts_dir)
    chart_grades(course_stats, charts_dir)
    chart_cumulative(submissions, charts_dir)
    chart_sentiment_pie(feedback, charts_dir)
    chart_monthly_feedback(submissions, charts_dir)
    chart_per_course(submissions, charts_dir)
    print(f"\nAll charts saved to {charts_dir}")


if __name__ == "__main__":
    main()
