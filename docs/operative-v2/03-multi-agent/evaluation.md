# Lab Rewrite Evaluation — operative/03-multi-agent

**Original lab:** Mission 03: Multi-Agent Systems (codename OPERATION SYMPHONY)
**Date evaluated:** 2026-06-29
**Environment:** Surfaces first verified in `4375273f-…` (`new-recruit-test`); **end-to-end build validated live** in `aab8f8eb-e060-e28b-958f-2ea6fd0ab517` (`April (Preview)`), which **has the Operative solution** imported. New experience = ON in both.
**Reference:** `files/operative-classic-vs-new-ui-report.md` (classic-vs-new gap analysis)

## Summary

| Metric | Count |
|---|---|
| Total step groups | 23 |
| Unchanged | 3 |
| Modified (UI changes) | 11 |
| New flow required | 7 |
| Removed/Not possible | 3 |
| Blocked | 0 |

> **Headline change:** The new experience has **no "child agents."** The Application Intake child
> agent is re-authored as a **Skill** (Build → *Skills* → *Add skill* → *Create from blank* = Name +
> Description + step-by-step Instructions). Tools no longer belong to a child agent — they live on the
> **agent** (Build → *Tools*) and are referenced from the Skill's instructions. The Interview Prep
> **connected agent** still exists (Build → *Connected agents* → *Add connected agent*).

<!-- -->

> **Validation note (updated):** The full lab was **built live** in env `aab8f8eb` (which has the
> Operative solution + Hiring Hub + `ppa_` tables). Created the **Hiring Agent** with an
> **`application-intake`** skill, created and **published** the **Interview Agent**, gave it Dataverse
> access via **Tools**, and **connected** it back to the Hiring Agent end-to-end. Three findings that
> were previously *needs-validation* are now **confirmed live** (see below): (1) skill **Name must be
> kebab-case**; (2) **Dataverse is no longer a Knowledge source** — it is added as a **Tool**
> (Microsoft Dataverse connector); (3) the connect dialog has **no "Pass conversation history" toggle**
> — only a required **Description**. The only remaining *needs-validation* item is the **Resume Upload
> workflow** node-by-node internals (logic unchanged; designer chrome differs).

## ⚠️ Removed Capabilities

### Child agents (entire construct)

- **Status:** removed
- **Reason:** The new agent editor is a single **Build** canvas (Model · Microsoft IQ · Skills ·
  Tools · Knowledge · Connected agents · Memory). There is no **Agents** tab inside an agent and no
  **New child agent** command.
- **Alternative:** Use a **Skill** for in‑agent specialization (instructions + description), with any
  required tools added at the agent level. Use a **Connected agent** when you need an independently
  published/owned agent.
- **Impact:** Learners lose the "child agent owns its own tools / priority / web‑search toggle"
  model. Skills don't have *Priority* or a per‑skill *Web Search* toggle; tool scoping is expressed
  through instructions instead of the child‑agent boundary.
- **Screenshot:** ![Screenshot of skill create from blank real](./assets/validation/skill-create-from-blank-real.png)

### Per‑child "Priority" and "Web Search" toggles

- **Status:** removed
- **Reason:** These lived on the child‑agent config page, which no longer exists.
- **Alternative:** Express precedence/guardrails in the Skill **Description** and **Instructions**
  (e.g., "only use this skill when an attachment is present"). Web access is now controlled globally
  via the **Knowledge → Search all websites** item, not a per‑sub‑agent toggle.
- **Impact:** The classic "Priority = 10000" trick to order intake vs. interview no longer applies;
  ordering is guided by skill/connected‑agent descriptions.

### Dataverse as a **Knowledge** source

- **Status:** removed (relocated)
- **Reason:** Confirmed live — the **Add knowledge** dialog only offers *Public websites*, *SharePoint*,
  and *OneDrive* (Featured), plus Confluence/Azure DevOps/Jira shown as unavailable. Searching
  `Dataverse` or `ppa_` in **Add knowledge** returns **"No results."** **Microsoft IQ** offers only
  *Foundry IQ (Preview)*, not Dataverse.
- **Alternative:** Add the **Microsoft Dataverse** connector as a **Tool** (Build → *Tools* → *Add
  tool* → *Connectors* → *Microsoft Dataverse*) and use read actions (e.g., *List rows*, *Get a row by
  ID*) against the `ppa_` tables. The agent reads rows on demand instead of indexing them as knowledge.
- **Impact:** Learners no longer "ground" the agent on tables as a knowledge index; they grant
  tool-based, on-demand data access. Instructions must name the exact tables/identifiers to query.
- **Screenshot:** ![Screenshot of dataverse tool actions](./assets/validation/dataverse-tool-actions.png)

### "Pass conversation history to this agent" toggle (connected agents)

- **Status:** removed
- **Reason:** Confirmed live — the **Add a connected agent** dialog requires only a **Description**
  (placeholder *Describe this connected agent*) plus a read-only **Agent details** preview. There is
  **no conversation-history toggle**.
- **Alternative:** None needed — generative orchestration passes context automatically.
- **Impact:** One fewer setting to configure; hand-off behavior is governed entirely by the Description.
- **Screenshot:** ![Screenshot of connected agent add real](./assets/validation/connected-agent-add-real.png)

## Step-by-Step Comparison

### Concept section — "Child agents vs connected agents"

- **Original:** Teaches *child agents* (live within the parent, share parent topics/tools) vs
  *connected agents*.
- **Status:** new_flow
- **New instruction:** Re‑framed as **Skills vs connected agents**. Skills = structured instruction
  sets inside one agent (no separate publish, no own tools); connected agents = independently
  published agents handed tasks. Removed the "child agents share parent **topics**" point (Topics no
  longer exist in the new experience).
- **What changed:** Conceptual model replaced child agents with Skills.

### 3.1.1 Solution setup (Set preferred solution)

- **Original:** Left‑nav ellipsis under **Tools** → **Solutions** → *Set preferred solution* → *Apply*.
- **Status:** modified
- **New instruction:** Solutions are not in the Copilot Studio left nav (Home · Agent Ops · Agents ·
  Workflows). Set the preferred solution from **make.powerapps.com → Solutions**, or confirm the
  agent's solution under **Settings → Agent details**.
- **What changed:** Solutions surface moved out of the Copilot Studio nav.

### 3.1.2 Hiring Agent instructions

- **Original:** **Overview** tab → **Instructions** → **Edit** → paste → **Save**.
- **Status:** modified
- **New instruction:** On the **Build** tab, edit the **Instructions** box directly (no Overview tab,
  no Edit button) → **Save** (top right).
- **Screenshot:** ![Screenshot of build canvas cards](./assets/validation/build-canvas-cards.png)

### 3.1.2 Settings table (10 toggles)

- **Original:** **Settings** button → 10‑row toggle table (generative orchestration, deep reasoning,
  let other agents connect, retired models, content moderation, reactions, general knowledge, web,
  file uploads, code interpreter).
- **Status:** new_flow
- **New instruction:** **More options (…) → Settings**. Only a subset exists, across tabs:
  **AI & behavior** → *Allow other agents to connect* = **On**, *Moderation level* = **Medium**;
  **Safety & access** → *User feedback* = **On**. The other classic toggles are gone or defaulted:
  generative orchestration is always on; *Use information from the Web* is now the **Knowledge →
  Search all websites** item; deep reasoning, retired models, general knowledge, file uploads, and
  code interpreter toggles are not present.
- **Screenshot:** ![Screenshot of settings ai behavior real](./assets/validation/settings-ai-behavior-real.png)

### 3.1.3 Add the Application Intake child agent

- **Original:** **Agents** tab → **Add** → **New child agent** → Name/Description → *When will this be
  used?* → **Advanced → Priority 10000** → **Web Search Disabled** → **Save**.
- **Status:** new_flow
- **New instruction:** Build → **Skills** → **Add skill** → **Create from blank**. Enter **Name**
  (**`application-intake`** — *must be kebab-case*; a name with spaces keeps **Create** disabled),
  **Description** (when to use it), and **Instructions** (the step‑by‑step process) → **Create**. No
  *When will this be used?* dropdown, no *Priority*, no per‑skill *Web Search* (see removed
  capabilities). **Confirmed live.**
- **Screenshot:** ![Screenshot of skill create from blank real](./assets/validation/skill-create-from-blank-real.png)

### 3.1.4 Build the Resume Upload agent flow

- **Original:** Child agent **Tools → + Add → + New tool → Agent flow**, then build the flow inline.
- **Status:** modified (entry) + needs‑validation (internals)
- **New instruction:** Agent flows are now **Workflows**. Create the flow in the **Workflows** hub
  (left nav → **Workflows → New Workflow**) with trigger **When an agent calls the workflow**, build
  the Dataverse steps, **Save** and **Publish**. The flow *logic* (inputs Resume/Message/UserEmail →
  Create Resume row → Upload file → Respond) is unchanged, but the designer chrome differs (step
  types: Connector, Function, Variable, If/Else, Loop…). Node‑level labels/screenshots need
  validation against the Operative solution.
- **What changed:** Flow authored as a standalone Workflow, new designer.

### 3.1.5 Connect the flow to your agent

- **Original:** Child agent **Tools → + Add → Flow filter → Resume Upload → Add and configure** →
  inputs/formulas.
- **Status:** modified
- **New instruction:** Build → **Tools → Add a tool → Workflows** tab → select **Resume Upload** →
  **Add**. Then configure inputs exactly as before (contentBytes/name/Message/UserEmail with the same
  Power Fx formulas). The tool is added at the **agent** level (not a child agent); the **Application
  Intake** skill's instructions tell the agent when to call it.
- **What changed:** Tool added to the agent and governed by the Skill, not a child agent.

### 3.1.6 Application Intake instructions

- **Original:** Child agent **Instructions** panel → paste → resolve `/` references → **Save**.
- **Status:** modified
- **New instruction:** Put this guidance in the **Application Intake** *Skill* **Instructions**.
  Tool/variable `/` references are written in‑line in the skill instructions.

### 3.1.7 Test the Application Intake

- **Original:** **Test** panel → upload resumes; check **Activity map**.
- **Status:** modified
- **New instruction:** Use the **Preview** tab (replaces the Test pane). Inspect the agent's
  reasoning/activity in **Preview**; full run analytics are under the **Monitor** tab after
  publishing. Power Apps **Hiring Hub** verification is unchanged.

### 3.2.1 Create the connected Interview Agent

- **Original:** **Agents** tab → **New Agent** → *Configure* tab → Name/Description/Instructions →
  **Web Search Disabled** → **… → Update advanced settings → Solution → Operative → Update → Create**.
- **Status:** modified
- **New instruction:** Left nav → **Agents → New Agent**; in the Build canvas set **Name**,
  **Instructions**, and **Model**. Web access is controlled via **Knowledge** (leave *Search all
  websites* off). Confirm the **solution** under **Settings → Agent details**.
- **What changed:** No separate *Configure* tab; settings split across Build + Settings.

### 3.2.2 Configure data access and publish

- **Original:** **Knowledge → + Add knowledge → Dataverse →** `ppa_` → select 5 tables → **Add to
  agent**; **Settings**: let other agents connect On, general knowledge Off, file uploads Off,
  moderation Medium; **Publish**.
- **Status:** new_flow
- **New instruction:** **Dataverse is no longer a Knowledge source** (confirmed live — not in *Add
  knowledge*; `ppa_`/`Dataverse` search returns no results). Instead, Build → **Tools → Add tool →
  Connectors → Microsoft Dataverse**, create a connection if prompted, and add read actions (*List
  rows*, *Get a row by ID*) for the `ppa_` tables. In **Settings → AI & behavior** set *Allow other
  agents to connect* = **On** and *Moderation level* = **Medium**. **Publish** (confirmed: publish
  completes and the agent then appears in the connect list).
- **What changed:** Table grounding moved from Knowledge (indexed) to a connector **Tool** (on-demand).
- **Screenshot:** ![Screenshot of dataverse tool actions](./assets/validation/dataverse-tool-actions.png) · ![Screenshot of settings ai behavior real](./assets/validation/settings-ai-behavior-real.png)

### 3.2.3 Connect the Interview Prep Agent

- **Original:** Hiring Agent → **Agents** tab → **+Add an agent** → select **Interview Agent** →
  Description → note *Pass conversation history* → **Add agent**; see one child + one connected.
- **Status:** modified
- **New instruction:** Hiring Agent → Build → **Connected agents → Add connected agent** → pick the
  published **Interview Agent** (only published agents appear) → set the required hand‑off
  **Description** → **Connect**. Result shows one **Skill** (`application-intake`) and one **Connected
  agent** (Interview). **Confirmed live: there is NO "Pass conversation history" toggle** — the dialog
  exposes only the Description and a read-only Agent-details preview.
- **Screenshot:** ![Screenshot of connected agent add real](./assets/validation/connected-agent-add-real.png) · ![Screenshot of hiring agent connected](./assets/validation/hiring-agent-connected.png)

### 3.2.4 Test multi-agent collaboration

- **Original:** **Test** panel → upload resume + delegation prompt.
- **Status:** modified
- **New instruction:** Use the **Preview** tab; same prompts. Observe the agent invoking the
  Application Intake **skill** and handing off to the Interview **connected agent**.

### Mission Brief / Objectives / Mission Complete copy

- **Status:** modified
- **New instruction:** Replace "child agent" wording with "Skill" where it refers to the Application
  Intake specialist; keep "connected agent" for the Interview agent. Update the classic‑experience
  banner to a new‑experience note.

### Unchanged

- Power Apps solution import context, Dataverse table names/prefix (`ppa_`), and the **Hiring Hub**
  model‑driven app verification (3.1.7 / Power Apps) are unchanged.
- All agent **instruction text** (the prompt content) is reused verbatim.
- The Power Fx formulas for the Resume Upload tool inputs are unchanged.
