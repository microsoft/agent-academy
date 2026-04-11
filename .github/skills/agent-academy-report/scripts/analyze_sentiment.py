#!/usr/bin/env python3
"""Analyze sentiment for extracted feedback records.

Usage: python3 analyze_sentiment.py <workspace-path>

Reads <workspace>/data/_all_feedback.json (or _extracted.json if _all_feedback
doesn't exist), scores sentiment, detects themes, computes per-course grades.
Outputs <workspace>/data/_analyzed.json.
"""

import json
import os
import re
import sys
from collections import defaultdict


POSITIVE_WORDS = [
    r'\b(great|excellent|amazing|awesome|fantastic|wonderful|love[ds]?|enjoy|enjoyed)\b',
    r'\b(helpful|useful|informative|well done|good job|thank|thanks|appreciate|impressive)\b',
    r'\b(learned|learning|eye.?opening|recommend|looking forward|fun|excited|brilliant)\b',
    r'\b(clear|intuitive|practical|hands.?on|well.?structured|well.?organized)\b',
    r'\b(good|nice|cool|neat|super|stellar|outstanding|perfect|phenomenal)\b',
    r'\b(beginner.?friendly|easy to follow|straightforward|engaging|interesting)\b',
    r'\b(valuable|insightful|comprehensive|thorough|solid|smooth)\b',
    r'👍|🎉|🙌|❤️|🔥|💯|⭐|✨|😍|😊|🤩|💪',
]

NEGATIVE_WORDS = [
    r'\b(error|errors)\b', r'\b(issue|issues)\b', r'\b(problem|problems)\b',
    r'\b(bug|bugs|buggy)\b', r'\b(broke|broken|crash|crashed)\b',
    r'\b(fail|failed|failure)\b', r'\bdidn.t work\b', r'\bnot work\b',
    r'\bcouldn.t\b', r'\bstuck\b', r'\bstruggl\w*\b', r'\bmissing\b',
    r'\btrouble\b', r'\bdifficult\w*\b', r'\bcumbersome\b', r'\bchallenges?\b',
    r'\btroubleshoot\w*\b', r'\bconfus\w*\b', r'\bfrustrat\w*\b', r'\bslow\b',
    r'\bcomplex\b', r'\bunclear\b', r'\bimprove\w*\b', r'\bwish\b',
    r'\black\w*\b', r'\bdisappoint\w*\b',
]

THEME_KEYWORDS = {
    'Hands-on & Practical Learning': [r'hands.?on', r'practical', r'interactive', r'step.?by.?step', r'real.?world', r'exercise'],
    'Clear Instructions & Documentation': [r'clear', r'well.?document', r'well.?explain', r'easy to follow', r'straightforward', r'step.?by.?step', r'instructions?'],
    'MCP & Agent Development Skills': [r'mcp', r'copilot studio', r'agent', r'connector', r'power automate', r'topic', r'action'],
    'Setup & Configuration Challenges': [r'setup', r'install', r'config', r'environment', r'prerequisite', r'authentication', r'credentials?'],
    'VS Code Integration': [r'vs ?code', r'visual studio code', r'extension', r'editor', r'debug'],
    'Valuable Learning Experience': [r'learn', r'knowledge', r'understand', r'skill', r'experience', r'educational', r'insight'],
    'Course Quality & Engagement': [r'well.?design', r'engag', r'interest', r'quality', r'structure', r'organized', r'professional'],
    'Errors & Technical Issues': [r'error', r'bug', r'crash', r'broke', r'fail', r'fix', r'workaround'],
    'Improvement Suggestions': [r'improv', r'suggest', r'would be nice', r'could be', r'hope', r'wish', r'add more', r'future'],
    'Real-World Applicability': [r'real.?world', r'production', r'business', r'enterprise', r'workplace', r'appl'],
}


def score_sentiment(text):
    if not text:
        return "neutral"
    pos = sum(1 for p in POSITIVE_WORDS if re.search(p, text, re.IGNORECASE))
    neg = sum(1 for p in NEGATIVE_WORDS if re.search(p, text, re.IGNORECASE))
    if neg > pos:
        return "negative"
    elif pos > 0:
        return "positive"
    elif neg > 0:
        return "negative"
    return "neutral"


def detect_themes(text):
    if not text:
        return []
    themes = []
    for theme, keywords in THEME_KEYWORDS.items():
        if any(re.search(kw, text, re.IGNORECASE) for kw in keywords):
            themes.append(theme)
    return themes


def compute_grade(items):
    if not items:
        return 0
    scores = {'positive': 10, 'neutral': 6, 'negative': 2}
    return round(sum(scores.get(r['sentiment'], 6) for r in items) / len(items), 1)


def main():
    if len(sys.argv) < 2:
        print("Usage: python3 analyze_sentiment.py <workspace-path>")
        sys.exit(1)

    workspace = sys.argv[1]
    data_dir = os.path.join(workspace, "data")

    # Prefer _all_feedback.json (includes GitHub issues), fall back to _extracted.json
    input_path = os.path.join(data_dir, "_all_feedback.json")
    if not os.path.exists(input_path):
        input_path = os.path.join(data_dir, "_extracted.json")
    if not os.path.exists(input_path):
        print(f"No input file found. Run extract_feedback.py first.")
        sys.exit(1)

    with open(input_path) as f:
        records = json.load(f)

    print(f"Loaded {len(records)} records from {os.path.basename(input_path)}")

    # Score sentiment and detect themes
    for r in records:
        if r.get('text') and r['type'] == 'feedback':
            r['sentiment'] = score_sentiment(r['text'])
            r['themes'] = detect_themes(r['text'])
        elif r['sentiment'] is None:
            r['sentiment'] = None  # completions without feedback
            r['themes'] = []

    feedback = [r for r in records if r['type'] == 'feedback']
    pos = sum(1 for r in feedback if r['sentiment'] == 'positive')
    neu = sum(1 for r in feedback if r['sentiment'] == 'neutral')
    neg = sum(1 for r in feedback if r['sentiment'] == 'negative')

    print(f"\nOverall sentiment ({len(feedback)} feedback items):")
    print(f"  Positive: {pos} ({pos/len(feedback)*100:.0f}%)")
    print(f"  Neutral:  {neu} ({neu/len(feedback)*100:.0f}%)")
    print(f"  Negative: {neg} ({neg/len(feedback)*100:.0f}%)")
    print(f"  Grade: {compute_grade(feedback)}/10")

    # Per-course stats
    courses = sorted(set(r['course'] for r in feedback))
    course_stats = {}
    for course in courses:
        items = [r for r in feedback if r['course'] == course]
        grade = compute_grade(items)
        stats = {
            'total': len(items),
            'positive': sum(1 for r in items if r['sentiment'] == 'positive'),
            'neutral': sum(1 for r in items if r['sentiment'] == 'neutral'),
            'negative': sum(1 for r in items if r['sentiment'] == 'negative'),
            'grade': grade,
        }
        # Theme counts
        theme_counts = defaultdict(int)
        for r in items:
            for t in r.get('themes', []):
                theme_counts[t] += 1
        stats['themes'] = dict(sorted(theme_counts.items(), key=lambda x: -x[1]))
        course_stats[course] = stats
        print(f"  {course}: {stats['total']} items, grade {grade}/10")

    # Save analyzed data
    output = {
        'records': records,
        'summary': {
            'total_records': len(records),
            'total_feedback': len(feedback),
            'positive': pos,
            'neutral': neu,
            'negative': neg,
            'overall_grade': compute_grade(feedback),
        },
        'course_stats': course_stats,
    }

    output_path = os.path.join(data_dir, "_analyzed.json")
    with open(output_path, 'w') as f:
        json.dump(output, f, indent=2, default=str)

    print(f"\nSaved to {output_path}")


if __name__ == "__main__":
    main()
