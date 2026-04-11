#!/usr/bin/env python3
"""Export a single combined PDF report with cover page, management summary, and analysis.

Usage: python3 export_pdf.py <workspace-path> "<Report Title>"

Downloads badge images if needed, builds a combined HTML with cover page,
converts markdown sections to HTML with embedded charts, and exports to PDF
using headless Microsoft Edge (or Chrome).
"""

import base64
import json
import os
import re
import subprocess
import sys
import urllib.request


BADGE_FILES = {
    'logo': 'logo.png',
    'recruit': 'mcs-agent-academy-recruit-badge.png',
    'operative': 'mcs-agent-academy-operative-badge.png',
    'commander': 'mcs-agent-academy-commander-badge.png',
    'yaml': 'YAML_Specialist_Badge.png',
    'learn_mcp': 'Academy_LearnMCP_Badge.png',
    'cli': 'CommandLine_Badge.png',
    'badge_bandit': 'BadgeBandit-badge.png',
    'audit_ace': 'AuditAce-badge.png',
    'vacay': 'Vacay-badge.png',
    'mcp_joker': 'MCP_Joker_Badge.png',
}

BADGE_BASE_URL = "https://raw.githubusercontent.com/microsoft/agent-academy/main/docs/public/images"

BROWSER_PATHS = [
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    "/usr/bin/microsoft-edge",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
]


def find_browser():
    for path in BROWSER_PATHS:
        if os.path.exists(path):
            return path
    return None


def img_to_b64(path):
    with open(path, 'rb') as f:
        return base64.b64encode(f.read()).decode()


def download_badges(badges_dir):
    """Download badge images from GitHub if not already present."""
    os.makedirs(badges_dir, exist_ok=True)
    for key, fname in BADGE_FILES.items():
        path = os.path.join(badges_dir, fname)
        if not os.path.exists(path):
            url = f"{BADGE_BASE_URL}/{fname}"
            print(f"  Downloading {fname}...")
            urllib.request.urlretrieve(url, path)


def embed_md_images(html, base_dir):
    """Replace markdown image refs with base64-embedded images."""
    def replacer(match):
        alt = match.group(1)
        src = match.group(2)
        full = os.path.join(base_dir, src) if not os.path.isabs(src) else src
        if os.path.exists(full):
            b64 = img_to_b64(full)
            return f'<img src="data:image/png;base64,{b64}" alt="{alt}" style="max-width:100%; margin:15px 0;">'
        return match.group(0)
    return re.sub(r'!\[([^\]]*)\]\(([^)]+)\)', replacer, html)


def md_to_html(md_text, base_dir):
    """Convert markdown to HTML."""
    html = md_text

    # Embed images first
    html = embed_md_images(html, base_dir)

    # Headings
    html = re.sub(r'^#### (.+)$', r'<h4>\1</h4>', html, flags=re.MULTILINE)
    html = re.sub(r'^### (.+)$', r'<h3>\1</h3>', html, flags=re.MULTILINE)
    html = re.sub(r'^## (.+)$', r'<h2>\1</h2>', html, flags=re.MULTILINE)
    html = re.sub(r'^# (.+)$', r'<h1>\1</h1>', html, flags=re.MULTILINE)

    # Bold
    html = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', html)

    # Italic
    html = re.sub(r'(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)', r'<em>\1</em>', html)

    # Tables
    lines = html.split('\n')
    new_lines = []
    in_table = False
    for line in lines:
        stripped = line.strip()
        if '|' in stripped and stripped.startswith('|') and stripped.endswith('|'):
            cells = [c.strip() for c in stripped.split('|')[1:-1]]
            if all(re.match(r'^[-:]+$', c) for c in cells):
                continue
            if not in_table:
                new_lines.append('<table>')
                tag = 'th'
                in_table = True
            else:
                tag = 'td'
            row_cells = ''.join(f'<{tag}>{c}</{tag}>' for c in cells)
            new_lines.append(f'<tr>{row_cells}</tr>')
        else:
            if in_table:
                new_lines.append('</table>')
                in_table = False
            new_lines.append(line)
    if in_table:
        new_lines.append('</table>')
    html = '\n'.join(new_lines)

    # Horizontal rules
    html = re.sub(r'\n---\n', '\n<hr>\n', html)

    # Blockquotes
    lines = html.split('\n')
    new_lines = []
    in_bq = False
    bq_buf = []
    for line in lines:
        if line.startswith('> '):
            bq_buf.append(line[2:])
            in_bq = True
        elif line == '>' and in_bq:
            bq_buf.append('')
        else:
            if in_bq:
                new_lines.append('<blockquote>' + '<br>'.join(bq_buf) + '</blockquote>')
                bq_buf = []
                in_bq = False
            new_lines.append(line)
    if in_bq:
        new_lines.append('<blockquote>' + '<br>'.join(bq_buf) + '</blockquote>')
    html = '\n'.join(new_lines)

    # List items
    html = re.sub(r'^- (.+)$', r'<li>\1</li>', html, flags=re.MULTILINE)
    html = re.sub(r'^(\d+)\. (.+)$', r'<li>\2</li>', html, flags=re.MULTILINE)

    # URLs
    html = re.sub(r'<(https?://[^>]+)>', r'<a href="\1">\1</a>', html)

    # Paragraphs
    html = re.sub(r'\n\n(?!<)', '\n<p>\n', html)

    # Wrap chart images + surrounding text in keep-together blocks
    # Pattern: a paragraph/text followed by an <img>, optionally followed by italic/emphasis text
    html = re.sub(
        r'(<p>\s*(?:<strong>[^<]*</strong>[^<]*)?\s*<img [^>]+>\s*(?:<p>\s*)?(?:<em>[^<]*</em>)?)',
        r'<div class="chart-block">\1</div>',
        html
    )

    # Wrap each h3 + its content until next h3/h2/hr as a course-spotlight
    def wrap_spotlights(html_text):
        parts = re.split(r'(?=<h3>)', html_text)
        result = []
        for part in parts:
            if part.startswith('<h3>'):
                result.append(f'<div class="course-spotlight">{part}</div>')
            else:
                result.append(part)
        return ''.join(result)

    html = wrap_spotlights(html)

    return html


def build_html(workspace, title):
    """Build the combined HTML report."""
    badges_dir = os.path.join(workspace, "badges")
    md_dir = os.path.join(workspace, "markdown")

    # Load badge images
    badges_b64 = {}
    for key, fname in BADGE_FILES.items():
        path = os.path.join(badges_dir, fname)
        if os.path.exists(path):
            badges_b64[key] = img_to_b64(path)

    # Read markdown files
    with open(os.path.join(md_dir, 'management-summary.md')) as f:
        mgmt_md = f.read()
    with open(os.path.join(md_dir, 'feedback-analysis.md')) as f:
        analysis_md = f.read()

    # Strip H1 titles (we use our own)
    mgmt_md = re.sub(r'^# .+\n', '', mgmt_md).strip()
    analysis_md = re.sub(r'^# .+\n', '', analysis_md).strip()

    # Convert to HTML (resolve image paths relative to markdown/)
    mgmt_html = md_to_html(mgmt_md, md_dir)
    analysis_html = md_to_html(analysis_md, md_dir)

    # Badge row
    badge_row_keys = ['recruit', 'operative', 'commander', 'yaml', 'learn_mcp', 'cli', 'badge_bandit', 'audit_ace', 'vacay', 'mcp_joker']
    badge_imgs = '\n'.join(
        f'<img src="data:image/png;base64,{badges_b64[k]}" alt="{k}" class="badge-img">'
        for k in badge_row_keys if k in badges_b64
    )
    logo_img = f'<img src="data:image/png;base64,{badges_b64["logo"]}" alt="Agent Academy Logo" class="cover-logo">' if 'logo' in badges_b64 else ''

    # Parse title for display
    title_parts = title.split(' - ', 1)
    main_title = title_parts[0]
    subtitle = title_parts[1] if len(title_parts) > 1 else ''

    return f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800;900&family=JetBrains+Mono:wght@400;600&display=swap');

@page {{ margin: 0; size: A4; }}
:root {{
    --navy-deep: #0a0e1a;
    --navy: #111827;
    --navy-mid: #1a2332;
    --teal: #2dd4bf;
    --teal-dim: rgba(45,212,191,0.15);
    --gold: #fbbf24;
    --gold-dim: rgba(251,191,36,0.12);
    --slate: #94a3b8;
    --brand-blue: #0078d4;
}}
body {{
    font-family: 'Outfit', -apple-system, 'Segoe UI', Helvetica, sans-serif;
    color: #334155; line-height: 1.65; margin: 0; padding: 0;
}}

/* ═══ COVER PAGE ═══ */
.cover-page {{
    width: 100%; height: 100vh; position: relative; overflow: hidden;
    background: var(--navy-deep);
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;
    page-break-after: always; box-sizing: border-box;
    padding: 50px 40px;
}}
/* Radial glow behind mascot */
.cover-page::before {{
    content: ''; position: absolute;
    width: 600px; height: 600px;
    top: 50%; left: 50%; transform: translate(-50%, -55%);
    background: radial-gradient(circle, rgba(45,212,191,0.08) 0%, rgba(45,212,191,0.03) 40%, transparent 70%);
    border-radius: 50%;
}}
/* Grid overlay — faded via transparent gradient stop (mask-image breaks in headless PDF) */
.cover-page::after {{
    content: ''; position: absolute; inset: 0;
    background-image:
        linear-gradient(rgba(45,212,191,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(45,212,191,0.03) 1px, transparent 1px);
    background-size: 48px 48px;
    opacity: 0.5;
}}

/* Top accent bar */
.cover-accent-top {{
    position: absolute; top: 0; left: 0; right: 0; height: 4px;
    background: linear-gradient(90deg, var(--teal), var(--gold), var(--teal));
}}

/* Classification tag */
.cover-classification {{
    position: absolute; top: 28px; right: 40px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px; letter-spacing: 3px; text-transform: uppercase;
    color: var(--teal); opacity: 0.5;
    border: 1px solid rgba(45,212,191,0.2); padding: 4px 14px;
    border-radius: 2px;
}}

/* Logo */
.cover-logo {{
    width: 140px; height: auto;
    filter: drop-shadow(0 0 30px rgba(45,212,191,0.2)) drop-shadow(0 6px 16px rgba(0,0,0,0.4));
    position: relative; z-index: 2;
    margin-bottom: 16px;
}}

/* Title group */
.cover-titles {{
    position: relative; z-index: 2; text-align: center;
    margin-bottom: 12px;
}}
.cover-pretitle {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px; letter-spacing: 5px; text-transform: uppercase;
    color: var(--teal); margin-bottom: 12px; opacity: 0.8;
}}
.cover-title {{
    font-size: 46px; font-weight: 900; margin: 0;
    color: var(--teal);
    letter-spacing: -1.5px; line-height: 1.05;
    text-shadow: 0 0 40px rgba(45,212,191,0.3), 0 2px 12px rgba(0,0,0,0.4);
}}
.cover-divider {{
    width: 60px; height: 2px; margin: 14px auto 14px;
    background: var(--gold);
}}
.cover-subtitle {{
    font-size: 19px; font-weight: 300; color: var(--slate);
    margin: 0; letter-spacing: 0.5px;
}}

/* Badge showcase */
.badge-shelf {{
    position: relative; z-index: 2;
    display: flex; flex-wrap: wrap; justify-content: center;
    gap: 8px; max-width: 420px;
    margin-top: 28px; padding: 18px 20px 14px;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(45,212,191,0.1);
    border-radius: 14px;
}}
.badge-shelf-label {{
    position: absolute; top: -9px; left: 50%; transform: translateX(-50%);
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
    color: var(--gold); background: var(--navy-deep);
    padding: 2px 16px; white-space: nowrap;
}}
.badge-img {{
    width: 68px; height: 68px; object-fit: contain;
    filter: drop-shadow(0 2px 6px rgba(0,0,0,0.4));
    border-radius: 8px;
}}

/* Footer */
.cover-footer {{
    position: absolute; bottom: 32px; left: 0; right: 0;
    text-align: center; z-index: 2;
}}
.cover-footer-text {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px; letter-spacing: 1.5px;
    color: var(--slate); opacity: 0.4;
}}
.cover-footer-line {{
    width: 140px; height: 1px; margin: 8px auto 0;
    background: linear-gradient(90deg, transparent, rgba(45,212,191,0.2), transparent);
}}

/* ═══ CONTENT PAGES ═══ */
.content {{ max-width: 850px; margin: 0 auto; padding: 40px 50px; }}
h1 {{
    font-family: 'Outfit', sans-serif; font-weight: 800;
    color: var(--navy); font-size: 28px; margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 3px solid var(--brand-blue);
}}
h2 {{
    font-family: 'Outfit', sans-serif; font-weight: 700;
    color: var(--brand-blue); margin-top: 35px; font-size: 22px;
    border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;
}}
h3 {{ color: #1e293b; font-size: 17px; margin-top: 25px; font-weight: 600; }}
h4 {{ color: #475569; font-size: 15px; font-weight: 600; }}
table {{ border-collapse: collapse; margin: 15px 0; width: 100%; font-size: 13px; }}
th {{ background: var(--navy); color: white; font-weight: 600; padding: 8px 12px; text-align: left; border: 1px solid #1e293b; }}
td {{ border: 1px solid #e2e8f0; padding: 7px 12px; text-align: left; }}
tr:nth-child(even) td {{ background: #f8fafc; }}
img {{ display: block; margin: 20px auto; max-width: 100%; border-radius: 8px; box-shadow: 0 1px 8px rgba(0,0,0,0.06); }}
blockquote {{
    border-left: 4px solid var(--brand-blue); margin: 12px 0; padding: 8px 16px;
    background: #f8fafc; color: #475569; font-size: 13px; line-height: 1.55;
    border-radius: 0 6px 6px 0;
}}
hr {{ border: none; border-top: 1px solid #e2e8f0; margin: 20px 0; }}
li {{ margin: 4px 0; margin-left: 20px; font-size: 14px; }}
em {{ color: #64748b; }}
a {{ color: var(--brand-blue); text-decoration: none; }}
.section-divider {{ page-break-before: always; border-top: 4px solid var(--brand-blue); margin-top: 40px; padding-top: 20px; }}
/* Keep-together blocks */
.keep-together {{ page-break-inside: avoid; break-inside: avoid; }}
.chart-block {{ page-break-inside: avoid; break-inside: avoid; margin: 10px 0; }}
.course-spotlight {{ page-break-inside: avoid; break-inside: avoid; margin-bottom: 10px; }}
@media print {{
    .cover-page {{ height: 100vh; }}
    .content {{ padding: 30px 40px; }}
    img {{ max-width: 100% !important; page-break-inside: avoid; break-inside: avoid; }}
    h2, h3, h4 {{ page-break-after: avoid; break-after: avoid; }}
    blockquote {{ page-break-inside: avoid; break-inside: avoid; }}
    table {{ page-break-inside: avoid; break-inside: avoid; }}
    .keep-together {{ page-break-inside: avoid; break-inside: avoid; }}
    .chart-block {{ page-break-inside: avoid; break-inside: avoid; }}
    .course-spotlight {{ page-break-inside: avoid; break-inside: avoid; }}
}}
</style>
</head>
<body>
<div class="cover-page">
    <div class="cover-accent-top"></div>
    <div class="cover-classification">Mission Report</div>
    {logo_img}
    <div class="cover-titles">
        <div class="cover-pretitle">Microsoft Copilot Studio</div>
        <div class="cover-title">{main_title}</div>
        <div class="cover-divider"></div>
        <div class="cover-subtitle">{subtitle}</div>
    </div>
    <div class="badge-shelf">
        <span class="badge-shelf-label">Earned Badges</span>
        {badge_imgs}
    </div>
    <div class="cover-footer">
        <div class="cover-footer-text">microsoft/agent-academy &bull; Comprehensive Feedback &amp; Completion Analysis</div>
        <div class="cover-footer-line"></div>
    </div>
</div>
<div class="content">
    <h1>Management Summary</h1>
    {mgmt_html}
</div>
<div class="content section-divider">
    <h1>Detailed Feedback Analysis</h1>
    {analysis_html}
</div>
</body>
</html>"""


def main():
    if len(sys.argv) < 3:
        print('Usage: python3 export_pdf.py <workspace-path> "<Report Title>"')
        sys.exit(1)

    workspace = sys.argv[1]
    title = sys.argv[2]

    browser = find_browser()
    if not browser:
        print("ERROR: No supported browser found (Edge or Chrome).")
        sys.exit(1)
    print(f"Using browser: {browser}")

    badges_dir = os.path.join(workspace, "badges")
    print("Checking badge images...")
    download_badges(badges_dir)

    print("Building combined HTML...")
    html = build_html(workspace, title)

    html_path = os.path.join(workspace, "_report.html")
    with open(html_path, 'w') as f:
        f.write(html)

    pdf_dir = os.path.join(workspace, "pdf")
    os.makedirs(pdf_dir, exist_ok=True)
    pdf_path = os.path.join(pdf_dir, f"{title}.pdf")

    print(f"Exporting PDF: {pdf_path}")
    result = subprocess.run([
        browser,
        "--headless", "--disable-gpu", "--no-sandbox",
        f"--print-to-pdf={pdf_path}",
        "--no-pdf-header-footer",
        f"file://{html_path}",
    ], capture_output=True, text=True)

    # Clean up temp HTML
    os.remove(html_path)

    if os.path.exists(pdf_path):
        # Remove macOS quarantine attribute (headless Edge adds it)
        if sys.platform == 'darwin':
            subprocess.run(['xattr', '-d', 'com.apple.quarantine', pdf_path],
                           capture_output=True)
        size_mb = os.path.getsize(pdf_path) / (1024 * 1024)
        print(f"PDF generated: {pdf_path} ({size_mb:.1f} MB)")
    else:
        print(f"ERROR: PDF not created. Browser stderr: {result.stderr}")
        sys.exit(1)


if __name__ == "__main__":
    main()
