---
name: agent-academy-stargazers
description: >
  Look up who has starred the microsoft/agent-academy repository on GitHub. Use this skill whenever
  the user wants to check stargazers, see if a specific GitHub user has starred the repo, or
  retrieve an up-to-date list of stargazers. Trigger whenever the user says "who starred agent
  academy", "check stargazers", "has <user> starred the repo", or asks anything about the
  repository's stargazer list. This skill uses the GitHub CLI to fetch stargazers via the GitHub
  API and saves the results to a local JSON file. It will install prerequisites if needed.
argument-hint: Optionally provide a GitHub username to check if they have starred the repository.
---

# Agent Academy Stargazers

This skill fetches the list of users who have starred the `microsoft/agent-academy` repository on GitHub. If the user provides a GitHub username, it also checks whether that specific user has starred the repo.

## 🏁 Prerequisites

Before running, verify the `gh` CLI is installed and authenticated:

1. Run `gh --version` to confirm it is installed. If not, install it (e.g., `brew install gh` on macOS, or the appropriate package manager for the user's OS).
2. Run `gh auth status` to confirm it is authenticated. If not, run `gh auth login` and guide the user through the interactive authentication flow.

Do not proceed with the rest of the skill until both checks pass.

## 🛠️ Skill Flow

1. Verify the `gh` CLI is installed and authenticated (see Prerequisites above).
2. Fetch the full list of stargazers for the `microsoft/agent-academy` repository using `gh api` with the `--paginate` flag to automatically retrieve all pages (the API returns at most 100 results per page, so pagination is required for repos with more than 100 stargazers). Use `--jq` to select only the `login`, `type`, and `url` fields from each stargazer object.
3. Save the filtered list to `temp/stargazers.json` in the repository root.
4. Tell the user how many stargazers were found and that the list was saved to `temp/stargazers.json`.
5. If the user provided a GitHub username, check whether that username appears in the stargazer list and tell the user the result (e.g., "✅ @username has starred the repo" or "❌ @username has not starred the repo").

## 📜 Rules

- Always use `gh api --paginate` to fetch stargazers for `microsoft/agent-academy`, ensuring all pages are retrieved (use `per_page=100` for efficiency).
- Always use `--jq '[.[] | {login, type, url}]'` to limit the response to only the `login`, `type`, and `url` fields. Do not store any other fields.
- Always save the result to `temp/stargazers.json` relative to the repository root, creating the `temp` directory if it does not exist.
- Always fetch fresh data from GitHub — never rely on previously fetched results or conversation history.
- If the `gh` CLI is not installed, install it using the appropriate package manager for the user's OS (e.g., `brew install gh` on macOS) before proceeding.
- If the `gh` CLI is not authenticated, run `gh auth login` and guide the user through authentication before proceeding.
- If the API request fails (e.g., network error, repo not found), report the error clearly to the user and do not write a partial or empty file.
