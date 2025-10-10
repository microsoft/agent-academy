# Collecting feedback from users

--8<-- "disclaimer.md"

## 🕵️‍♂️ CODENAME: `OPERATION ECHO`

> **⏱️ Operation Time Window:** `~45 minutes`

## 🎯 Mission Brief

Welcome back, Agent. In [Mission 10](../04-agent-instructions/README.md) - you learnt how to build an effective prompt to generate documents.

Your assignment, should you choose to accept it, is **Operation Echo** - focusing on collecting feedback to understand user satisfaction towards the agents you develop. This feedback loop allows you to make iterative enhancements to your agent to ensure end user satisfaction.

TBC

Listen, modify, repeat - this is the mission when reviewing user feedback.

## 🔎 Objectives

In this mission, you'll learn:

1. TBC
1. TBC
1. TBC
1. TBC
1. TBC

## The importance of user feedback

Collecting user feedback is critical for improving a conversational agent's performance and user satisfaction. In Microsoft Copilot Studio, there are two primary mechanisms to gather feedback from users after they receive an AI-generated response:

- **Built-in Thumbs Up/Down Reactions** – a default, out-of-the-box feature where users can click 👍 or 👎 on each response.
- **Custom Feedback via Adaptive Cards** – a customizable approach where developers insert an Adaptive Card in the conversation to solicit feedback (e.g. a rating or comment).

### Why gather feedback?

Collecting user feedback after agent responses is important for continuous improvement. It helps quantify satisfaction, identify knowledge gaps, and directly informs how you can refine your Copilot agent's answers. By analyzing feedback trends and comments, you can prioritize enhancements that lead to a better user experience.

## Built-in Thumbs Up/Down Reactions

Copilot Studio provides a built-in reactions feature that lets end-users react to each agent response with a thumbs-up or thumbs-down. This feature is enabled by default for all new and existing Copilot Studio custom agents, and appears across the common channels where your agent is used:

- Test Chat (in Copilot Studio’s authoring canvas)
- Web (demo or embedded website)
- Microsoft Teams (if the agent is deployed as a Teams app)
- Custom Web chat SDK integrations
- Power Apps/Dynamics 365 channels (e.g. a live chat widget)

After each AI response, users will see a small UI with 👍/👎 icons. They can simply click to give feedback. Optionally, after reacting, the user may be prompted to add a comment explaining their rating (for example, why they gave a thumbs down). These comments provide qualitative insight and are stored in the conversation transcripts (Dataverse) for review.

- The Copilot Studio Analytics page aggregates total reactions and the breakdown of positive vs. negative feedback.
- If a user provides a comment with their rating, it's saved to the conversation transcript. You can view these comments for context (for example, what was "not useful") via the analytics UI or directly from Dataverse records.

## Purpose and value of thumbs reactions

The thumbs up/down system's primary purpose is to measure user satisfaction at the response level. It provides immediate, granular feedback on whether each answer fulfilled the user's needs or not. Key benefits include:

- **Quick Sentiment Signal**: A thumbs-up means the user was satisfied, while thumbs-down flags dissatisfaction. This binary signal is easy for users to provide and easy for developers to interpret at scale.
- **Aggregated “Satisfaction” Metric**: In _Copilot Studio Analytics_, a "Reactions" section (under the broader Satisfaction analytics) tallies all feedback received. You can quickly see how many responses were marked positive or negative over time. This serves as a satisfaction scorecard for your agent's responses.
- **Identify Improvement Areas**: By filtering or reviewing thumbs-down instances and their comments, developers can spot patterns. For example, specific topics or questions that often get negative feedback. These are prime candidates for improving your knowledge base or refining your prompts.
- **No Coding Required**: Since it's built-in, makers do not need to configure anything to start collecting this feedback (the setting is on by default). The data is automatically available in the Copilot Studio analytics dashboard.

### Why it matters

This reaction mechanism gives immediate, objective insight into how well the AI is performing from the user's perspective. Reviewing user feedback helps identify new user scenarios and issues, and make improvements based on what users are asking for. In short, thumbs feedback is a quick pulse-check on each answer's usefulness

## Viewing and Interpreting Feedback Analytics

Copilot Studio provides a dedicated analytics view to make sense of the collected reactions:

- **Reactions Chart**: On the agent's **Analytics** tab, the **Satisfaction** section includes a **Reactions** chart counting how many times users clicked 👍 vs 👎 for the selected time period. This gives an at-a-glance ratio of positive to negative feedback. For example, you might see that out of 100 total reactions, 78 were thumbs-up and 22 thumbs-down, indicating a 78% per-response satisfaction rate.
- **Filter and Details**: You can drill down by selecting "See details" on the Reactions chart. This typically lets you filter feedback by type (all/thumbs-up/thumbs-down) and view the list of user comments associated with each feedback. Comments are extremely useful – a thumbs-down by itself signals a problem, but the user's comment might explain why `"The answer was incorrect"` or `"Didn't address my question"` etc.
- **Trend Over Time**: The analytics can be viewed for different date ranges (last 7 days, 30 days, etc., up to 90 days). Monitoring trends helps see if recent changes to the agent improved satisfaction - for example, an increase in thumbs-up percentage after adding a new knowledge source.
- **Session CSAT vs Per-Response Reactions**: The **Satisfaction** analytics also include a **Survey results** section for end-of-session customer satisfaction (CSAT) surveys. Don't confuse this with the per-response thumbs reactions:
      - _Reactions_: feedback on individual answers (our focus here)
      - _Survey Results_: an optional overall rating at the end of a conversation (a 1–5 star survey). Both appear under **Satisfaction** analytics, but thumbs reactions specifically populate the **Reactions** chart.

Interpreting the data: A high ratio of 👍 vs 👎 means most answers are on target. A spike in 👎 for certain questions might reveal a knowledge gap or a misunderstanding by the AI. For instance, if many users give a thumbs down after asking about "pricing" it signals the agent's answer on pricing is unsatisfactory – perhaps outdated or incomplete. Developers should investigate those chat transcripts and improve content for that topic.

!!! tip "Best Practice"
    Regularly review thumbs-down feedback comments. They often contain direct clues `"The agent gave the wrong definition"` or `"It didn't cite a source"` that you can address by updating your knowledge base or refining prompts.

## Managing the Reactions Feature

Because this feature is on by default, makers should be aware of how to manage it:

- You can disable user feedback reactions in case you don't want to gather this data (or during testing phases). In the agent's **Settings**, under **User feedback**, there is a toggle `Let users give feedback when using this agent` which can be turned `Off` or `On`. By default it's `On`.
- You can also provide a **disclaimer** to users about feedback usage. For example, you might add a note like `"Your feedback will be used to improve the service. Please do not include sensitive information in comments."` This is especially important in a public-facing agent for transparency and compliance.
- **Data Storage**: All feedback records (including any user comments) are stored in the agent's Dataverse environment, tied to conversation sessions. If needed, advanced users can query the Dataverse directly - for instance, to export all feedback data for offline analysis. For most purposes, however, the built-in analytics UI is sufficient.

## Lab

- Build feedback into the Hiring agent so that people using that can give feedback for the user experience.

[Obtain feedback for every response - Microsoft Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/guidance/adaptive-card-add-feedback-for-every-response)
