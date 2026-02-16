---
name: analytics-report
description: Generate an Agent Academy analytics report using Microsoft Clarity data and GitHub badge statistics. Use this skill to create HTML dashboard reports showing session trends, user metrics, and badge completion stats for Recruit, Operative, and Commander courses.
---

# Agent Academy Analytics Report Generator

This skill generates a comprehensive HTML analytics dashboard for Agent Academy, pulling data from Microsoft Clarity and GitHub issue statistics.

## Report Overview

The report includes:
- **Agent Academy (Overall)**: Total sessions, weekly trends, interactive weekly graph with week selector, daily trends with projections
- **Performance by Course**: Bar chart comparing all courses (Recruit, Operative, Commander)
- **Recruit Section**: Sessions, users, interactive weekly graph with week selector, daily charts, badge statistics
- **Operative Section**: Sessions, users, interactive weekly graph with week selector, daily charts, badge statistics

### Interactive Weekly Graph

All sections (Agent Academy Overall, Recruit, and Operative) include an **interactive weekly graph** with:
- **Week selector dropdown**: Allows switching between the current week and previous weeks (up to 4-5 weeks back)
- **Daily breakdown**: Shows sessions and users for each day of the selected week (Monday-Sunday)
- **Current week projections**: If the current week is incomplete, project the remaining days using patterns from previous weeks (same day of week averages)
- **Visual distinction**: Projected days shown with dotted lines and reduced opacity fill

## Data Sources

### Microsoft Clarity
Use the Clarity MCP tools to query analytics data:
- `mcp_clarity_mcp_query-analytics-dashboard` for session and user counts

### GitHub Issues
Use the GitHub MCP tools to count badge requests:
- `mcp_github_mcp_search_issues` for counting issues with specific labels

## Step-by-Step Generation Process

### 1. Query Overall Agent Academy Stats

```
Query: Total sessions and unique users for Agent Academy for the last 4 complete weeks
```

### 2. Query Weekly Breakdown (Last 4-5 Weeks)

For each section (overall, recruit, operative):
```
Query: Sessions and unique users per week for pages containing "/[section]/" for the last 4 complete weeks
```

### 3. Query Daily Data (Last 4-5 Weeks)

For each section, query daily data to support the interactive weekly graph:
```
Query: Daily sessions and unique users for pages containing "/[section]/" for the last 4 complete weeks plus current partial week
```

This data is used to:
- Populate the interactive weekly graph for each selectable week
- Calculate projections for the current incomplete week (averaging same day-of-week from historical data)

### 4. Query Badge Statistics from GitHub

**Recruit Badges:**
- Requested (pending): `repo:microsoft/agent-academy label:recruit-completed is:open`
- Awarded via Credly: `repo:microsoft/agent-academy label:recruit-completed label:recruit-badge-issued is:closed`
- Awarded via Global AI Community: `repo:microsoft/agent-academy label:recruit-completed label:recruit-badge-issued-gaic is:closed`

**Operative Badges:**
- Requested (pending): `repo:microsoft/agent-academy label:operative-completed is:open`
- Awarded: `repo:microsoft/agent-academy label:operative-completed label:operative-badge-issued is:closed`

**Commander Badges** (when available):
- Requested (pending): `repo:microsoft/agent-academy label:commander-completed is:open`
- Awarded: `repo:microsoft/agent-academy label:commander-completed label:commander-badge-issued is:closed`

## Report Structure

### File Location
```
reports/YYYYMMDD-analytics-overview.html
```

### Required Sections

1. **Header**: Title and generation date
2. **Agent Academy Section**:
   - Stats cards (Total Sessions, Last 4 Weeks Sessions, Last 4 Weeks Users)
   - Weekly Trend line chart (overview of all weeks)
   - **Interactive Weekly Graph** with week selector dropdown (see below)
   - Performance by Course bar chart
   - Weekly data table
3. **Tabbed Courses Section**:
   - Tab buttons for each course
   - Each course panel includes:
     - Stats cards (Sessions, Users, Share of Total)
     - Weekly Trend line chart (overview of all weeks)
     - **Interactive Weekly Graph** with week selector dropdown (see below)
     - Weekly data table
     - Badge stats (Total Requests, Awarded, Pending)

### Interactive Weekly Graph Component

Each section (Agent Academy, Recruit, Operative) must include an interactive weekly graph with:

**UI Elements:**
- Week selector dropdown showing: "Week X (Current)", "Week X-1", "Week X-2", etc.
- Previous/Next navigation buttons for quick week switching
- Display of selected week's date range (e.g., "Jan 27 - Feb 2, 2026")

**Chart Display:**
- X-axis: Days of the week (Mon, Tue, Wed, Thu, Fri, Sat, Sun)
- Y-axis: Sessions and Users (dual axis or stacked)
- Solid lines for actual data
- Dotted lines for projected data (current week only)

**Projection Logic:**
- Only applies when viewing the current (incomplete) week
- Calculate projections for remaining days using:
  - Average of same day-of-week from previous 2-4 weeks
  - Apply trend adjustment if there's consistent growth/decline
- Show projection confidence by reducing opacity

**JavaScript Implementation:**
```javascript
// Week selector change handler
function updateWeeklyChart(section, weekOffset) {
    const weekData = getWeekData(section, weekOffset);
    const isCurrentWeek = (weekOffset === 0);
    
    if (isCurrentWeek && weekData.incomplete) {
        // Add projections for remaining days
        weekData.projected = calculateProjections(section, weekData);
    }
    
    renderChart(section, weekData);
}

// Projection calculation
function calculateProjections(section, currentWeekData) {
    const historicalData = getHistoricalDayAverages(section);
    return remainingDays.map(day => historicalData[day]);
}
```

### Theme: GitHub Dark Dimmed

Use these colors:
- Background: `#22272e`
- Surface/Cards: `#2d333b`
- Border: `#444c56`
- Primary Text: `#adbac7`
- Muted Text: `#768390`

Chart colors by section:
- **Agent Academy**: Blue `#539bf5`, Purple `#986ee2`
- **Recruit**: Green `#57ab5a`, Teal `#96d0ff`
- **Operative**: Red `#f47067`, Blue `#539bf5`
- **Commander**: Purple `#986ee2`, Green `#57ab5a` (when added)

### Chart Configuration

Use Chart.js from CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

Chart options:
- Line charts with `fill: true` for area effect
- Remove point markers: `point: { radius: 0, hoverRadius: 4 }`
- Projection lines: `borderDash: [5, 5]`
- Hide projection entries from legend using filter function

### Projection Calculation

**For Interactive Weekly Graphs:**
- Only show projections when viewing the current (incomplete) week
- Start projections from the first incomplete day (today if partial, or next day)
- Calculate projected values using average of same day-of-week from previous 2-4 weeks
- Show as dotted lines with reduced opacity fill (`borderDash: [5, 5]`, `backgroundColor` with alpha 0.1)
- Update projections dynamically when user switches weeks (projections only appear for current week)

**For Weekly Trend Charts:**
- If current week is incomplete, show projected week total as dotted segment
- Calculate weekly projection by summing: actual days + projected remaining days

## Sample Clarity Queries

### Overall Sessions
```
Total sessions for agent-academy.github.io for the last 4 complete weeks
```

### Weekly by Section
```
Sessions and unique users per week for pages containing "/recruit/" for the last 4 complete weeks
```

### Daily by Section (for Interactive Weekly Graph)
```
Daily sessions and unique users for pages containing "/operative/" for the last 4 complete weeks plus current partial week
```

**Note**: Query 4+ weeks of daily data to support:
1. Interactive week selector (switch between weeks)
2. Accurate projections for current week (need historical same-day averages)

## Badge Stats Display

Each course section should show:
```
Total Badge Requests: [awarded + pending]
Badges Awarded: [closed issues with badge-issued label]
Badges Requested (pending): [open issues with completed label]
```

## Footer

Include data source attribution:
```html
<footer>
    <p>Data sourced from Microsoft Clarity | Agent Academy</p>
</footer>
```

## Example Prompt

Use this prompt to generate a new report:

---

**Generate an Agent Academy analytics report for today.**

Please create an HTML report at `reports/YYYYMMDD-analytics-overview.html` with:

1. **Microsoft Clarity data** for Agent Academy:
   - Overall sessions and users (all time and last 4 complete weeks)
   - Weekly breakdown for overall, `/recruit/`, and `/operative/` paths (last 4 complete weeks)
   - Daily breakdown for last 4 complete weeks plus current partial week (to support interactive weekly graph and projections)

2. **GitHub badge statistics** from microsoft/agent-academy:
   - Recruit: count issues with `recruit-completed` label (open = pending, closed with `recruit-badge-issued` or `recruit-badge-issued-gaic` = awarded)
   - Operative: count issues with `operative-completed` label (open = pending, closed with `operative-badge-issued` = awarded)

3. **Report features**:
   - GitHub Dark Dimmed theme
   - Line charts with area fill for trends
   - **Interactive weekly graphs** with week selector dropdown in all sections (Agent Academy, Recruit, Operative)
   - Previous/Next week navigation buttons
   - Projections for incomplete current week (dotted lines)
   - Bar chart comparing course performance
   - Tabbed interface for Recruit/Operative sections
   - Badge statistics with Total/Awarded/Pending breakdown

---

## Adding New Courses

When Commander (or other courses) launch:

1. Add a new tab button in the tabs-header
2. Create a new tab-panel with the same structure as Recruit/Operative
3. Query Clarity for `/commander/` path data
4. Query GitHub for commander badge labels
5. Update the Performance by Course chart with real data (remove "coming soon")
6. Choose a new color pair for the course charts

## Maintenance Notes

- Clarity API requires the `CLARITY_AUTH_TOKEN` environment variable
- GitHub MCP tools use authenticated access via VS Code
- Week numbers are ISO week numbers (Week 1 starts first Monday of year)
- Projections are estimates based on historical patterns, not guarantees
