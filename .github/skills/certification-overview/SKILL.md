# Certification Overview Skill

This skill will retrieve all open issues related to a specific course from the GitHub repository. It will then analyze the status of these issues and provide a summary report that highlights key metrics such as the number of open issues, their priority levels, and any blockers that may affect the certification process. The report will help stakeholders understand the current state of the course's certification readiness and identify areas that need attention.

## Template

The HTML report template is located at `.github/skills/certification-overview/assets/template.html`. This template contains placeholder values and example table rows that must be **removed and replaced** with actual data during report generation.

### Template Placeholders

The following placeholders appear in the template and must be replaced with actual values:

| Placeholder | Location | Replace with |
|-------------|----------|-------------|
| `{course}` | `<title>`, `#courseName`, `#courseNameFooter`, badge image URL, JS `course` variable | Course name: `Recruit`, `Operative`, or `Commander` |
| Example table rows | All `<tbody>` sections | Remove example rows and insert actual issue data |

## Steps to follow

1. **Start Skill**: Initialize the skill session with the provided course name argument (e.g., `recruit`, `operative`, or `commander`) and the date of today, e.g. `YYYYMMDD-Recruit`, `YYYYMMDD-Operative`, or `YYYYMMDD-Commander`.
1. **Fetch Issues**: Use the GitHub MCP `mcp_github_mcp_search_issues` to search for all issues for the specified course in the `microsoft/agent-academy` repository. Use a query with the appropriate label filter, for example:
   - Recruit: `repo:microsoft/agent-academy label:recruit-completed`
   - Operative: `repo:microsoft/agent-academy label:operative-completed`
   - Commander: `repo:microsoft/agent-academy label:commander-completed`
   
   Iterate through paginated results to retrieve all matching issues.
1. **Analyze Issues**: For each issue retrieved, use `mcp_github_mcp_issue_read` to get detailed information about the issue, including its status, priority, and any comments or updates that may indicate blockers.
1. **Summarize Findings**: Compile the data into a summary report that includes: 
   - Total number of open issues
   - Breakdown of issues by priority (e.g., high, medium, low)
   - Identification of any blockers or critical issues that need immediate attention
   - Create color coding for different priority levels for better visualization.
1. **Generate Report**: Use the HTML template located at `.github/skills/certification-overview/assets/template.html` as the base for the report. Fill in the template with the collected data by replacing the placeholder values and populating the table rows. Key placeholders and elements to update:
   - **Course name and badge**: Replace all `{course}` placeholders with the course name (e.g., `Recruit`, `Operative`, or `Commander`). This includes the `<title>` tag, `#courseName`, `#courseNameFooter`, the badge image URL, and the JS `course` variable. For the badge URL, use lowercase: `mcs-agent-academy-recruit-badge.png`.
   - **Generated date**: The template auto-fills the current date, but verify `#generatedDate` and `#generatedDateFooter` are correct.
   - **KPI values**: Populate `#kpiOpen`, `#kpiHigh`, `#kpiClosedClean`, `#kpiBlockers`, `#kpiOpen2`, `#kpiOldestDays`, `#kpiClosedClean2`, and `#kpiMissingBadges` with actual counts.
   - **Issue Summary table**: Fill in the priority breakdown table with counts for P0-P3 across Open, Closed (clean), Closed (with unanswered questions), and Missing badge columns.
   - **Successfully Closed Issues table**: Remove example rows and add rows for issues that were resolved without follow-up questions.
   - **Open Issues table**: Remove example rows and add rows for all open issues, sorted by days open (oldest first). Include ID, title, priority tag, opened date, days open (with `data-days` attribute), last activity, owner, and follow-up action.
   - **Closed Issue Problems table**: Remove example rows and add rows for issues closed but with later unanswered questions.
   - **Missing Badges table**: Remove example rows and add rows for issues where badge was reportedly not received.
   - **Blockers table**: Remove example rows and add rows for any critical blockers affecting certification. If none, add a single row stating "No blockers identified".
   - **Recommendations table**: Remove example rows and add actionable recommendations based on observed patterns.
1. **Output the Report**: Present the completed HTML report as the output for review and further action.
1. **Save Report**: Save the filled-in HTML report to the `reports` folder within the repository. Name it according to the date and course, e.g., `YYYYMMDD-recruit-overview.html`, `YYYYMMDD-operative-overview.html`, or `YYYYMMDD-commander-overview.html`.
