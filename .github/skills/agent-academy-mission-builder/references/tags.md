# Agent Academy Tag Taxonomy

Used for Special Ops missions to help learners discover relevant content by technology or industry.

---

## Technology Tags

Use 1-3 tags. Pick the most specific ones that apply.

| Tag | When to Use |
|-----|-------------|
| `adaptive-cards` | Mission involves building or using Adaptive Cards in Copilot Studio |
| `agent-flows` | Mission uses Agent Flows (Power Automate integrated into an agent) |
| `ai-builder` | Mission uses AI Builder models (document processing, classification, etc.) |
| `ai-safety` | Mission covers content moderation, safety settings, or responsible AI |
| `azure` | Mission requires Azure resources (Container Apps, Azure OpenAI, etc.) |
| `connectors` | Mission uses Power Platform connectors (not MCP) |
| `dataverse` | Mission reads/writes Dataverse tables |
| `declarative-agent` | Mission builds a declarative agent for M365 Copilot |
| `document-generation` | Mission generates Word/PDF documents from agent output |
| `event-triggers` | Mission uses event-based triggers (Dataverse, Teams, etc.) |
| `generative-ai` | Mission focuses on generative answers, prompt engineering, or LLM behavior |
| `knowledge` | Mission primarily focuses on knowledge sources (SharePoint, URLs, files) |
| `mcp` | Mission integrates MCP servers |
| `m365-copilot` | Mission deploys to or extends Microsoft 365 Copilot |
| `multi-agent` | Mission involves connected agents or orchestration patterns |
| `multimodal` | Mission processes images, PDFs, or other non-text inputs |
| `power-automate` | Mission uses Power Automate flows (classic, not agent flows) |
| `prompts` | Mission is primarily about AI prompt authoring or prompt nodes |
| `sharepoint` | Mission uses SharePoint as a knowledge source or data target |
| `teams` | Mission publishes to or integrates with Microsoft Teams |
| `topics` | Mission builds or extends conversation Topics in Copilot Studio |

---

## Industry Tags

Use 1-3 tags. "General" is fine if there's no specific industry focus.

| Tag | Example Scenarios |
|-----|-------------------|
| `education` | Student onboarding agents, campus help desks, course advisor bots |
| `finance` | Expense approvals, financial report generation, compliance Q&A agents |
| `government` | Constituent services agents, permit processing, policy lookup |
| `healthcare` | Patient intake, appointment scheduling, clinical documentation agents |
| `hr` | Onboarding agents, policy Q&A, leave management, hiring automation |
| `it-ops` | IT help desk, incident management, infrastructure Q&A agents |
| `legal` | Contract Q&A, compliance tracking, document review agents |
| `manufacturing` | Equipment maintenance, safety compliance, inventory management |
| `retail` | Product recommendations, order tracking, customer service agents |
| `real-estate` | Property search, lease management, tenant communication agents |
| `nonprofits` | Volunteer coordination, donor engagement, program eligibility agents |
| `general` | No specific industry — the scenario works universally |

---

## Difficulty Rating Guide

Stars on the badge = difficulty level.

| Stars | Level | Criteria |
|-------|-------|---------|
| ⭐☆☆ | Beginner | Single feature demonstrated. Follows a clear linear guide. Minimal environment setup. Completable in under 30 minutes. No admin permissions required. |
| ⭐⭐☆ | Intermediate | 2-3 concepts combined. Some configuration or troubleshooting expected. Requires a specific license or feature flag. 30-60 minutes. |
| ⭐⭐⭐ | Advanced | Multi-step scenario. Requires Azure resources, admin permissions, or Frontier/preview access. External dependencies. 60+ minutes. Significant troubleshooting possible. |

---

## Grouping Special Ops

When multiple Special Ops share a tag, they can be grouped in the nav or a "Related Ops" section.

Suggested grouping themes (for future nav organization):

- **Integration Ops**: `mcp`, `connectors`, `azure`, `sharepoint`, `teams`
- **Data Ops**: `dataverse`, `document-generation`, `multimodal`, `ai-builder`
- **Orchestration Ops**: `multi-agent`, `event-triggers`, `agent-flows`
- **Industry Playbooks**: `healthcare`, `retail`, `hr`, `finance`, etc.
