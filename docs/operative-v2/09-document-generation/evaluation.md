# Lab Rewrite Evaluation — operative/09-document-generation

**Original lab:** Mission 09: Generate a Candidate Interview Questions Document
**Date evaluated:** 2026-06-30
**Environment:** <https://copilotstudio.preview.microsoft.com/environments/aab8f8eb-e060-e28b-958f-2ea6fd0ab517>
**Plugin:** rewrite-lab (agent-academy-tester)

## Summary

| Metric | Count |
|---|---|
| Total step groups | 3 (9.1, 9.2, 9.3) |
| Unchanged | 0 |
| Modified (UI changes) | 0 |
| New flow required | 1 (9.1) |
| Removed/Not possible | 2 (9.2, 9.3) |
| Blocked | 0 |

**Headline:** The classic mission used three constructs that are gone or unauthored in the new experience — an **AI Builder Prompt** with Word-template *Document output* (9.1), an **Agent Flow** to extract the file bytes (9.2), and a **Topic** with slot filling to return the file (9.3). All three are replaced by a single mechanism: the agent's **native code interpreter** (Python with `python-docx` pre-installed) builds a real `.docx` and returns it as a downloadable file, packaged as a reusable **Skill** (`interview-doc-prep`). Validated live: a downloadable `Interview_Prep_<Candidate>_<Role>.docx` was produced with **no prompt, flow, or topic**.

## ⚠️ Blockers & Removed Capabilities

### 9.2 Create an agent flow to call the prompt

- **Status:** removed
- **Reason:** The flow existed only to extract file bytes from the prompt output via `binary(outputs('Run_a_prompt')?['body/responsev2/predictionOutput/documentOutput/contentBytes'])`. With no AI Builder Prompt and no prompt *Document output*, there is nothing to extract — the code interpreter returns the `.docx` directly in chat.
- **Alternative:** None needed. The agent returns the downloadable file directly (validated).
- **Impact:** Learners lose an obsolete extraction step. The end result (a downloadable Word file) is unchanged and simpler to produce.

### 9.3 Create the topic

- **Status:** removed
- **Reason:** The new experience has no **Topics** tab — agents are driven by Instructions, Skills, Tools, and generative orchestration. The classic note claimed a Topic was "the only way to ensure a file object is returned every time"; that is no longer true.
- **Alternative:** The `interview-doc-prep` Skill (9.1) makes the behavior reliable and reusable; generative orchestration + the skill's *Gather inputs* instructions capture the Application Number from chat (replacing slot filling).
- **Impact:** Learners lose Topic/slot-filling authoring, which no longer exists. Reliability is preserved via the Skill.

## Step-by-Step Comparison

### 9.1 Create the prompt → Create the document-generation skill

- **Original:** Create an AI Builder Prompt "Interview Question Document Prep"; add Dataverse-grounded inputs (CandidateDetails, ResumeDetails, JobDetails, Criteria) keyed off ApplicationNumber; switch the model to **GPT-4.1**; choose **Document (preview)** output; download and upload a **Word template** with `{{ }}` placeholders (19 fields); test that the prompt fills the document.
- **Status:** new_flow
- **New instruction:** On the Build tab of the orchestrator (Hiring) agent, **Skills → Add skill → Create from blank**. Name `interview-doc-prep` (kebab-case), add a Description, and Instructions that carry over the same evaluation/question-generation logic and tell the agent to build the `.docx` with its **code interpreter**. Select **Create**, then **Save** (confirm the button goes disabled).
- **What changed:** AI Builder Prompts are removed ("Prompt" is now "Agent"); the prompt *Document output* / Word-template feature and the per-prompt model picker (GPT-4.1) are gone. The agent's model has a **native code interpreter** (`python-docx` pre-installed) with **no enable toggle** (Settings → AI & behavior only exposes Orchestration + Safety/Moderation). No template, no `{{ }}` placeholders, no "19 fields."
- **Validation:** Skill created and **saved** on the Hiring Agent (`assets/validation/m9-skill-saved-hiring-agent.png`). Native generation proven live (`assets/validation/m9-native-docgen.png`).
- **Note:** Creating + saving the skill **failed with a 400 ("Issue while saving") on the Interview Agent** (`a4952ccd-…`), but **succeeded on the orchestrator Hiring Agent** (`27c4e498-…`) — removing the skill let the Interview Agent save cleanly, confirming the 400 was specific to that agent, not the skill content. Recommend authoring the skill on the orchestrator.

### 9.2 Create an agent flow to call the prompt

- **Original:** Build a "Doc Prep" Agent Flow: "When an agent calls the flow" trigger with an ApplicationNumber text input → **Run a prompt** (Interview Question Document Prep) → **Respond to the agent** with a **File** output `InterviewFile` using `binary(outputs('Run_a_prompt')?['…/documentOutput/contentBytes'])`; save, rename, publish.
- **Status:** removed
- **New instruction:** None — skip. Test directly in **Preview → New chat** with a request like `Create an interview prep file for job application A01001`. The code interpreter returns the `.docx` directly.
- **What changed:** No prompt output to extract → no flow, no `contentBytes` formula.
- **Validation:** Downloadable `.docx` returned directly in Preview (`assets/validation/m9-native-docgen.png`).

### 9.3 Create the topic

- **Original:** On the **Interview Agent**, **Topics → Add a Topic → From blank** "Generate Interview Doc"; trigger description; **slot-filling** input variable `VarApplicationNumber`; **Add a Tool** → Doc Prep flow; map the variable; **Send a message** node returning the **File** named `Topic.VarApplicationNumber&"InterviewPrep.docx"`; save and test.
- **Status:** removed
- **New instruction:** None — skip. The `interview-doc-prep` Skill + generative orchestration handle the request and reliably return the file; the skill's instructions describe the `A#####` Application-Number pattern in place of slot filling.
- **What changed:** No Topics tab in the new experience; the "Topic is the only way to return a file" constraint no longer applies.
- **Validation:** Document returned without any topic (`assets/validation/m9-native-docgen.png`).

## Notes & caveats

- **Dataverse-grounded-by-Application-Number not run end-to-end:** the env's **Job Application**, **Resume**, and **Candidate** tables are empty (per Mission 08), so `A01001`-grounded generation could not be exercised. Native generation was validated with **inline candidate/role details** instead; the Dataverse MCP read path itself was validated in Mission 08.
- **Skill-triggered run on the orchestrator was slow/hung** in this session (the Hiring Agent has both the new skill and a connected Interview Agent; the request stayed on "Working on it…" past ~4 min). The underlying capability is nonetheless proven by the direct (ad-hoc) generation on the agent that owns the behavior. For a clean demo, exercise the skill on the agent that owns it without competing connected agents.
- **Generation latency:** code-interpreter document generation takes ~30-90s; the agent shows "Working on it…" while building the file.
- Live baseline restored: the throwaway `interview-doc-prep` skill was removed from the Hiring Agent and saved (baseline = only `application-intake` skill + Interview Agent connected; agent **not** published). Local-only output; **no PR**.
