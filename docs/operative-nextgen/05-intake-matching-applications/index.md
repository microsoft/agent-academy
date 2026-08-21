---
prev:
  text: "Model, Response and Safety"
  link: "/operative-nextgen/04-model-response-and-safety"
next:
  text: "Generate Documents with a Python Skill"
  link: "/operative-nextgen/06-document-skill"
hide: true
preview: true
short-description: Read resumes, create linked Dataverse records, match candidates to open roles, and create Job Applications
difficulty: 3
codename: OPERATION SHORTLIST
time: 60
tags:
  - multimodal
  - mcp
products: [copilot-studio, dataverse]
industries:
  - hr
created-date: 2026-01-14
last-edited-date: 2026-08-12
---

# 🚨 Mission 05: Resume Intake, Matching and Applications {#mission-05-resume-intake-matching-and-applications}

<mission-meta />

## 🎯 Mission Brief {#mission-brief}

Welcome, Operative. In this mission you'll run the hiring pipeline from resume intake to job application.

You'll use the `resume-intake` skill from Mission 02 to create linked **Candidate** and **Resume** records. Then you'll build a **`role-matching`** skill that scores each open role against its live, weighted evaluation criteria. An **`application-handling`** skill creates **Job Applications** for the roles you confirm.

Everything happens in one conversation, where the agent reads the resume, reads the live criteria through the **Dataverse MCP server**, and writes the records back through the same server.

## 🔎 Objectives {#objectives}

In this mission, you'll learn:

1. How **native multimodal** reading turns a resume into linked Dataverse records
1. How to verify records, confirm **email-based deduplication**, and handle invalid files
1. How to build a **`role-matching` skill** with a **scoring rubric** - a fixed set of rules for how points are awarded - so every score is justified and repeatable
1. How to create **Job Applications** for confirmed roles via the Dataverse MCP server
1. How to test the skill's **error handling and observability** with a not-found identifier

## 🧠 Native multimodal reading {#native-multimodal-reading}

The model behind your agent is **multimodal**, which means it reads the files a person attaches - a PDF resume, a scanned image, or a screenshot - as well as text. When a document arrives, the agent loads its built-in **`analyzing-pdf`** skill to extract the content. Your **`resume-intake`** skill then decides which fields and records to create, and the **Dataverse MCP server** performs the writes.

> [!NOTE] The agent's built-in skills
> `analyzing-pdf` is one of several **built-in skills** every agent ships with - small, pre-packaged
> behaviors the orchestrator loads automatically when they're relevant. You don't add or configure
> these skills, because the agent loads them when it needs them.

Whenever an agent handles files, decide which types you accept and how large they can be. Copilot Studio reads many file types, but this mission accepts **PDF** only. Two size limits are important to know, because a file attached in chat can be roughly **15 MB**, while a resume stored against a record later in Mission 07 has a **5 MB** default - which can be increased by updating the maximum attachment size in the environment settings.

## 🧠 Matching on live data {#matching-on-live-data}

The matching skill tells the agent to read Dataverse before every recommendation. It calls the MCP `read_query` and `describe` actions to pull the open **Job Roles** and their weighted **Evaluation Criteria**, compares the resume with each criterion, and writes confirmed **Job Applications** with `create_record`.

> [!NOTE] This is different from "Knowledge"
> The platform's **Knowledge** feature (what the *Add knowledge* dialog offers) means public websites, SharePoint, OneDrive, or uploaded files - ideal for policy documents, but read-only and snapshot-based. This mission does something different, working with **structured Dataverse records through the MCP tool**, so the agent can both **read** the current roles and criteria and **write** new applications. Use **Knowledge** when an agent should answer from documents, and the **Dataverse MCP server** when it needs live records it can query and update.

## 🧮 Why matching needs a rubric {#why-matching-needs-a-rubric}

If you tell an agent *"match this candidate to the best role,"* it **will** answer - confidently, with a percentage and a recommendation. But with no rules for *how* to score, the model invents them on the spot. Ask twice and you can get two different numbers, with no way to explain why a role scored 88% and not 81%. An agent left to its own devices optimizes for a plausible reply without showing how it calculated the score.

We fix this the way we would brief a human reviewer, by giving it a **scoring rubric**. A rubric turns a vague "estimate the fit" into a repeatable calculation:

- Read each of the role's **evaluation criteria** and its **weight** (these live in Dataverse - you imported them in Mission 01, and each role's weights add up to 100).
- For every criterion, judge how well the resume evidences it and assign an **evidence level**:

  | Evidence level | Meaning | Factor |
  | --- | --- | --- |
  | **Strong** | Clear, direct, repeated evidence | **1.0** |
  | **Moderate** | Some evidence, or implied | **0.6** |
  | **Weak** | Thin or tangential evidence | **0.3** |
  | **Missing** | No evidence in the resume | **0.0** |

- Score each criterion as **factor × weight**, then **add them up** for the role's percentage.

The **weights** come from data and the **arithmetic** is fixed, so what the model still decides is narrow: for each criterion it judges the **evidence level** on a four-point scale. That evaluation is still an AI judgment, so a borderline criterion can move between levels on another run. The output shows the evidence sources, level, weight, and points for every criterion, which lets a reviewer find the source of any change. Mission 06 uses the same four evidence levels in the interview-prep document.

### A worked example {#a-worked-example}

Suppose a resume shows strong hands-on development and communication, a couple of years of experience, and no certifications. Scored against **J1004 Power Platform Developer** (Technical Skills 40, Experience 30, Communication 15, Certifications 10, Problem Solving 5):

| Criterion | Weight | Evidence found | Level | Points (factor × weight) |
| --- | --- | --- | --- | --- |
| Technical Skills | 40 | Built Power Apps + Automate solutions | Strong (1.0) | **40.0** |
| Experience | 30 | ~2 years, just under the 3+ asked for | Moderate (0.6) | **18.0** |
| Communication | 15 | Led demos, wrote documentation | Strong (1.0) | **15.0** |
| Certifications | 10 | None listed | Missing (0.0) | **0.0** |
| Problem Solving | 5 | Debugged complex flows | Strong (1.0) | **5.0** |
| **Role total** | **100** | | | **78%** |

Anyone can check that arithmetic. The weights and the sum are **deterministic** - they come from the data and always produce the same number. Only the evidence level for each criterion is a **judgment** the model makes, and that is the one part that can vary between runs.

::: details 🔄 Coming from the classic Operative course?
The classic course extracted resume content with a **Summarize Resume** AI Builder prompt and pushed every Dataverse operation through an agent flow. In the Powered by GitHub Copilot experience the model reads an attached resume **natively**, loads its built-in `analyzing-pdf` skill, follows the focused intake and matching skills you write here, and uses the **Dataverse MCP server** for live reads and writes. What you do differently is build no prompt asset and no extraction flow at all - the whole process starts the moment you attach a resume in **Preview**.
:::

## 🧪 Lab 05 - Intake, match, and apply {#lab-05-intake-match-and-apply}

### Prerequisites

Before you start this lab you need:

- The **Hiring Agent** carrying the `resume-intake` skill and the **Dataverse MCP server** from [Mission 02](../02-instructions-skills-dataverse-mcp/index.md)
- The **Job Roles** and **Evaluation Criteria** sample data loaded, so a role has criteria to score against
- The **Hiring Hub** app open in a second tab, for checking the records the agent writes
- The two sample resume PDFs, which you download in Lab 5.1 below

The Hiring Agent already has the intake procedure, but it cannot yet score role fit or create an application. We'll add those two procedures as separate skills, then test the records they create and the paths that stop without writing.

### 5.1 Read a resume and create records

Let's start by running the `resume-intake` skill from Mission 02 against a real PDF. This establishes the Candidate and Resume records that matching and application creation need later in the mission.

1. Open the **Hiring Hub** (see [Mission 01](../01-get-started/index.md#lab-01-set-up-the-hiring-hub) if you need the route), go to **Candidates**, and confirm there are no Avery or Taylor intake records. This gives you a clean baseline for the writes that follow:

   ![Hiring Hub Candidates grid with no Avery or Taylor records](../assets/screenshot-placeholder.png)

1. Download the two sample resumes. You'll use them here and again in Missions 07, 08 and 09.

   <action-button href="https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/operative/test-data/resumes/AVERY%20EXAMPLE%20(FICTITIOUS).pdf" label="Download Avery Example resume" icon="📄" />

   <action-button href="https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/operative/test-data/resumes/TAYLOR%20TESTPERSON%20(FICTITIOUS).pdf" label="Download Taylor Testperson resume" icon="📄" />

1. In the left navigation select **Agents**, open the **Hiring Agent**, and go to **Preview**. Ensure the `resume-intake` skill and the **Dataverse MCP server** tool are present from Mission 02. Start a new chat, select **Attach file** (📎), and upload `AVERY EXAMPLE (FICTITIOUS).pdf`:

   ![Avery Example resume attached in a clean Preview chat](../assets/screenshot-placeholder.png)

1. Send a **natural** message. You don't spell out the steps because the **`resume-intake` skill** already contains them:

   ```text
   Here's a candidate's resume - please take it in.
   ```

   The agent loads `analyzing-pdf`, extracts the name and email, calls the Dataverse MCP `describe` / `read_query` / `create_record` tools, and reports the linked records:

   ![Hiring Agent reports the linked Candidate and Resume](../assets/screenshot-placeholder.png)

1. Open **Hiring Hub**, **Resumes** and verify the saved row, including its Resume number, linked Candidate, upload date, title, and source email:

   ![Hiring Hub Resumes grid after the first intake](../assets/screenshot-placeholder.png)

   The agent produces a **Candidate** (C#####, *Avery Example*, `avery.example@example.com`) and a **Resume** (R#####), **linked** to each other, with an extracted cover-letter summary - using only the skill and the Dataverse MCP server. Your record numbers may differ, so check the *shape* of the result rather than the values.

### 5.2 Verify and deduplicate

Before adding more records, check the first intake in the Hiring Hub and repeat it with the same email. The second run should reuse the Candidate and create only another linked Resume.

1. Start a new Preview chat and attach the **same** Avery PDF again.

   ![The same Avery resume attached a second time](../assets/screenshot-placeholder.png)

1. Send the same natural prompt you used in Lab 5.1 - don't tell the agent what to do about the duplicate, because the point is to find out whether the skill handles it:

   ```text
   Here's a candidate's resume - please take it in.
   ```

   The reply should report a **reused** Candidate and a **newly created** Resume. If it creates a second Candidate, the skill's deduplication rule is not doing its job. Telling the agent to reuse the record would only prove it follows instructions.

   ![Hiring Agent reuses Avery's Candidate and creates a new Resume](../assets/screenshot-placeholder.png)

1. Open **Hiring Hub**, **Resumes**. Confirm there is still one Avery Candidate identity but now two Resume rows with the same source email:

   ![Two Avery Resume rows linked to one Candidate](../assets/screenshot-placeholder.png)

1. Start another new chat and attach both the Avery and Taylor PDFs:

   ![Avery and Taylor resumes attached together](../assets/screenshot-placeholder.png)

1. Send `Process these resumes.` The skill processes one file at a time, reuses Avery, and creates Taylor as a new Candidate:

   ![Sequential intake reports Avery reused and Taylor created](../assets/screenshot-placeholder.png)

1. Return to **Hiring Hub**, **Resumes** and confirm the two-file run leaves two Candidates and four Resume rows in total:

   ![Four Resume rows after the two-file intake](../assets/screenshot-placeholder.png)

> [!TIP] Intake rules encoded in the skill
> The skill enforces *one resume at a time*, a *2000-char* cover-letter cap, and *never inventing
> identifiers*. These rules are present whenever the orchestrator loads the skill.

### 5.3 File limits & error handling

Before the agent opens an attachment, it should reject an unsupported type or oversized file.

1. Start a new Preview chat and attach an unsupported ZIP, such as the Operative solution archive:

   ![Unsupported ZIP attached before the pre-flight request](../assets/screenshot-placeholder.png)

1. Ask the agent to process the attachment. The `resume-intake` skill runs its **pre-flight check** before reading anything, names the unsupported type, lists the accepted types, and states the size limit:

   ![Unsupported ZIP rejected before intake](../assets/screenshot-placeholder.png)

1. Open **Hiring Hub**, **Resumes** and confirm the rejected file created no records, leaving the grid at the same four rows:

   ![Resume grid unchanged after the unsupported ZIP](../assets/screenshot-placeholder.png)

> [!IMPORTANT] The skill's File-handling rule
> The `resume-intake` skill includes a **File handling** section with two **pre-flight checks** that run
> *before* the file is opened: *the extension must be PDF/PNG/JPG/DOCX, and the size must be under
> ~15 MB. If either fails, stop immediately, name the failing check, and ask for a re-upload - never
> read the file and never create a record from it.* Without this rule the model tries to open the file
> first and only discovers the problem after several slow diagnostic attempts.

### 5.4 Build the role-matching skill, then run it

The **`role-matching` skill** applies the rubric above to every open role and shows how it calculates each score.

1. Before the skill exists, open **two separate** chats in **Hiring Agent**, **Preview** and ask each one the same unconstrained question:

   ```text
   Match Avery to the best open job role and give each role a score out of 100.
   ```

   Compare the second result with the first. The numbers and reasoning can drift between runs, and that inconsistency is exactly what the rubric constrains:

   ![Second unconstrained role match ready for comparison](../assets/screenshot-placeholder.png)

To fix the weights, arithmetic, and output structure, continue building the `role-matching` skill:

1. Create the skill the same way you built `resume-intake` in [Mission 02 Lab 2.1](../02-instructions-skills-dataverse-mcp/index.md#lab-02-author-the-skill-and-connect-the-data-layer)
   - **Hiring Agent**, **Build**, **Skills**, **➕ Add skill**, **Create from blank**. Set the **Name** to
   `role-matching` and a **Description** that scopes it to *scoring only* (so the orchestrator loads it for "which roles fit?" but not for intake or creating applications):

   ```text
   Use to score how well a candidate (given a resume or candidate/resume number)
   fits the open Job Roles, using each role's weighted evaluation criteria and a
   fixed scoring rubric. Read-only: it produces a ranked, justified match but
   does not create Job Applications.
   ```

   ![Creating the role-matching skill - Name and scoping Description](../assets/screenshot-placeholder.png)

1. Set the **Instructions** to the rubric procedure below. It requires every criterion, shows the evidence for each level, and defines the calculation:

   ```text
   Use this skill to score how well a candidate fits the open Job Roles. It only
   reads and scores - it never creates or changes records.

   1. Identify the candidate. Use the resume or candidate the user names (for
      example a ResumeNumber R#####), or the candidate most recently taken in
      during the conversation. Read that Resume's summary / cover letter
      (ppa_coverletter) for the evidence.

   2. Read the roles and criteria live. Read the Active Job Roles (ppa_jobrole)
      and, for each role, ALL of its related Evaluation Criteria
      (ppa_evaluationcriteria, related by ppa_jobrole) including each
      criterion's ppa_weighting.

   3. Score each role with the rubric. For EACH role, read and list EVERY one of
      its criteria (their weights sum to 100 - never omit one). For each
      criterion, assign an evidence level from the resume
      and convert it to a factor: Strong = 1.0, Moderate = 0.6, Weak = 0.3, Missing = 0.0. Criterion
      points = factor x weighting. Role score (percent) = the sum of the
      criterion points.

   4. Show your work. For the top role(s), present a per-criterion table with
      columns Criterion, Weight, Evidence found (a short phrase from the
      resume), Level, and Points, ending with the role total. Then rank ALL
      roles by score and recommend the best fit, naming the one or two points it
      lost. Never assign a level without stating the evidence (or its absence)
      that justifies it.

   ## Guidelines
   - Always apply the rubric; never estimate a match score without the
     per-criterion table.
   - Read live data every time; do not cache or guess criteria or weights.
   - This skill does not write anything. If the user wants to apply the
     candidate to a role, say so and let the application-handling skill create
     the Job Application.

   ## Error handling
   - If a candidate/resume identifier is not found, say so and ask the user to
     confirm; do not invent data.
   - If a Dataverse read fails (permission, connection, timeout), STOP and say
     which step failed and why.

   Identifiers: Resume = R#####, Candidate = C#####, Job Role = J#####.
   ```

   ![The role-matching skill's rubric instructions pasted into the editor](../assets/screenshot-placeholder.png)

1. Select **Create**, then **Save** the agent. The Skills list now shows `role-matching` beside `resume-intake`:

   ![The saved role-matching skill beside resume-intake](../assets/screenshot-placeholder.png)

1. Run the match with a natural prompt. You don't describe the rubric because the `role-matching` skill does. In **Hiring Agent**, **Preview**, ask:

   ```text
   Which open job roles best fit the candidate on resume R#####? Show your
   scoring.
   ```

   Replace `R#####` with the Resume number returned by your intake run. The orchestrator loads **`role-matching`**, reads all five roles' criteria and weights through Dataverse MCP, and returns per-criterion evidence, points, totals, and a ranked recommendation:

   ![Rubric match with weighted criteria and ranking](../assets/screenshot-placeholder.png)

   What is reproducible is the *structure*, not the exact percentages - those depend on the resume:
   - A table **per role** with one row per criterion, each showing an **evidence phrase**, an **evidence level**, and **points = factor × weight**.
   - A **role total** equal to the sum of its points (each role's weights total 100).
   - A **ranking** naming the recommended role and the points it lost.
   - The weights, arithmetic, and table structure stay fixed. The model still judges each evidence level, so a borderline criterion and the resulting percentage can change on another run.

> [!TIP] What the rubric fixes
> The rubric fixes the criteria, weights, factors, arithmetic, and table columns. A reviewer can inspect
> the evidence phrase behind each model-assigned level and recalculate the total. Borderline evidence can
> still receive a different level on another run.

### 5.5 Create the application-handling skill and apply

The **role-matching** skill is a read-only skill. Creating the actual **Job Applications** is a *separate* concern, so it's a *separate* skill.

1. Create the third skill the same way - **Hiring Agent**, **Build**, **Skills**, **➕ Add skill**, **Create from blank** - setting the **Name** to `application-handling` and a **Description**:

   ```text
   Use to create Job Applications for a candidate for one or more confirmed Job
   Roles, and to list a candidate's applications. Links the Candidate, Resume,
   and Job Role. Only creates applications for roles the user has explicitly
   confirmed.
   ```

   ![Creating the application-handling skill - Name and Description](../assets/screenshot-placeholder.png)

1. Set the **Instructions**:

   ```text
   Use this skill to create or list Job Applications once the user has confirmed
   which role(s) a candidate should apply for. This skill writes application
   records; it does not score or rank roles.

   1. Confirm the inputs. Identify the Candidate and Resume (by number or from
      the conversation) and the Job Role(s) the user named. If any identifier is
      missing or cannot be found, ask ONE focused clarifying question; do not
      invent data.

   2. Create the applications. For EACH confirmed Job Role, create a row in Job
      Applications (ppa_jobapplication) linking ppa_candidate, ppa_resume, and
      ppa_jobrole, and set ppa_applicationdate to today (UTC). Set
      ppa_applicationtitle to the candidate's name, a hyphen, and the job title,
      for example "Avery Example (Fictitious) - Power Platform Developer". Do
      not create a duplicate for the same candidate and role: check for an
      existing one first and, if found, reuse it and say so. The
      ppa_applicationnumber field is Dataverse-managed. Omit
      ppa_applicationnumber entirely from create_record; never send null or text
      for this field.

   3. Report each Application number (A#####) with the role it is for. Re-read
      every created row until Dataverse returns an Application number matching A
      followed by five digits. If it does not match, STOP and report the invalid
      value instead of presenting it as a successful application.

   4. Listing. If asked to list a candidate's applications, read
      ppa_jobapplication filtered by that candidate and return each Application
      number, its role, and status.

   ## Guidelines
   - Never invent identifiers or record numbers; always read them from tool
     results.
   - Only create applications for roles the user explicitly confirmed. Do not
     decide which roles to apply for - that is the role-matching skill's job.

   ## Error handling & observability
   - If a lookup returns no rows for an identifier the user gave (for example a
     ResumeNumber that does not exist), say it was not found and ask them to
     confirm. Do not fabricate an application.
   - If a Dataverse write fails (permission, connection, timeout), STOP and say
     which step failed and why. End with a one-line summary of the applications
     created.

   Identifiers: Application = A#####, Candidate = C#####, Resume = R#####, Job Role = J#####.
   ```

   ![Application-handling instructions with confirmed-role and failure safeguards](../assets/screenshot-placeholder.png)

1. Select **Create**, then **Save**. Confirm all three focused skills now appear together:

   ![Hiring Agent with intake, matching, and application-handling skills](../assets/screenshot-placeholder.png)

1. Apply the candidate with a **natural** prompt. The skill supplies the procedure:

   ```text
   Apply Avery using resume R##### to the Power Automate Specialist and Power
   Platform Developer roles.
   ```

   Replace `R#####` with the exact Resume number you matched in Lab 5.4. The agent loads **`application-handling`**, checks for duplicates, and handles only the two roles you confirmed.

   ![Creating two confirmed Job Applications](../assets/screenshot-placeholder.png)

1. Open **Hiring Hub**, **Job Applications** and verify exactly two valid `A#####` rows link Avery's Candidate and Resume to the two confirmed roles:

   ![Two valid Job Application rows for Avery](../assets/screenshot-placeholder.png)

1. Ask the agent to read the records back:

   ```text
   List the Job Applications for candidate C##### with their role and status.
   ```

   Replace `C#####` with Avery's Candidate number from Lab 5.1.

   The response should list both Application numbers, roles, dates, and statuses without another write:

   ![Hiring Agent lists Avery's two saved applications](../assets/screenshot-placeholder.png)

### 5.6 Error handling & observability (test it)

The `application-handling` skill tells the agent to stop when a tool fails, ask for correction when an identifier is **not found**, and report every record number it touches. Test the not-found path before you rely on it for real applications.

1. In **Hiring Agent**, **Preview**, ask to apply a resume that doesn't exist:

   ```text
   Create a job application for resume R99999 for the Power Platform Developer
   role.
   ```

   The agent looks up the identifiers through MCP, finds no matching resume, and refuses to fabricate an application. It reports exactly what's missing and asks a focused clarifying question:

   ![R99999 refused without creating an application](../assets/screenshot-placeholder.png)

1. Open **Hiring Hub**, **Job Applications** and confirm the failed request wrote nothing, leaving the same two valid applications:

   ![Job Applications grid unchanged after the not-found request](../assets/screenshot-placeholder.png)

> [!TIP] Check the identifiers and tool calls
> The reply names the identifier it did not find (*R99999*), while the **tool
> trace** shows every `search` / `describe` / `read_query` call it made. In
> **Mission 10** you'll see those same calls - and any failures - in the **Monitor** tab for published
> runs.

### 5.7 Re-run your evaluations with the new skills

We gave the Hiring Agent two new skills - **role-matching** and **application-handling**. Next we keep the set **green** by testing them the same way as before: ask the agent to **describe** what it does. A live match depends on current Dataverse rows, while application creation is a real write repeated on every run. We check those effects in **Preview**, as we did in Labs 5.4–5.6.

1. On **Hiring Agent**, **Evaluate**, open the **Hiring Agent baseline** set you created in [Mission 02](../02-instructions-skills-dataverse-mcp/index.md). Add this fifth case to it - you're extending the existing set, not building a new one:

   | # | Question | Reference answer |
   | --- | --- | --- |
   | 5 | What do you do if you're asked to act on a candidate or resume that doesn't exist? | Report that the candidate or resume cannot be found and ask the user to confirm the identifier. Never fabricate a candidate, resume, application, or record number. |

   Select the connected evaluation profile and **Save**. Verify the set now contains all five conversations:

   ![Saved five-case Hiring Agent baseline set](../assets/screenshot-placeholder.png)

1. Select **Evaluate** to run the whole set. It stays **green** because every case is answerable from the agent's own skills and rules, with no live lookup:

   ![Five-case regression at 100 percent](../assets/screenshot-placeholder.png)

## ✅ Mission Complete {#mission-complete}

Mission 05 is complete. You can now:

✅ **Native multimodal intake**: You read resumes directly and created linked **Candidate** and **Resume** records with a skill and Dataverse MCP.

✅ **Deduplication and file limits**: You confirmed **email-based** deduplication, and saw an unsupported file type refused with a request to re-upload rather than being processed.

✅ **Justified matching**: You constrained the skill with a **scoring rubric**, produced a **per-criterion weighted match** from live criteria, and created **Job Applications** via MCP.

✅ **Resilience**: You verified the skill's **error handling and observability**, so an identifier that cannot be found is reported back to the user instead of being invented.

⏭️ [Move to **Generate Documents with a Python Skill** mission](../06-document-skill/index.md)

## 📚 Tactical Resources {#tactical-resources}

🔗 [Knowledge and file inputs in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio)

🔗 [Microsoft Dataverse documentation](https://learn.microsoft.com/power-apps/maker/data-platform)

🔗 [Extend agents with MCP](https://learn.microsoft.com/microsoft-copilot-studio/agent-extend-action-mcp)

<analytics-tag section="operative-nextgen" mission="05-intake-matching-applications" />
