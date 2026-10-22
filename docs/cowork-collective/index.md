---
lastUpdated: false
---
# Cowork Collective

![Copilot Studio Agent Academy Cowork Collective](../images/banner_cowork.png)

Cowork Collective missions are hands-on labs focused on **Copilot Cowork** which provides a new way to delegate work to Copilot so it can take action on your behalf across your Microsoft 365 environment.

> [!NOTE]
> Copilot Cowork for **work or school accounts is generally available**. These labs use work or school accounts and don't require Frontier enrollment. Individual features can have separate requirements: the built-in **App** skill still requires Frontier access. See the [Cowork overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/) and [getting-started requirements](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/get-started).

You describe a task, Copilot Cowork breaks it into steps, and you approve each action before it happens, sending emails, scheduling meetings, creating documents, posting in Teams, and more.

## Access and billing prerequisites {#access-and-billing}

Before starting a mission, confirm you have:

- An active **Microsoft 365 Copilot license** assigned to your work or school account, plus access to the Microsoft 365 services used in the mission.
- **Usage-based billing enabled for Cowork** and coverage under a spending policy that selects **Cowork**. A Copilot license alone isn't enough; lab activity consumes Copilot Credits.
- An **organization-permitted model**. Anthropic models are optional. If your organization disables Anthropic, you can still use Cowork with its permitted non-Anthropic models. Model settings control model availability, not Cowork access.

See [Get started with Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/get-started) and [Manage Copilot Cowork for your organization](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-admin-governance) for current requirements.

### Admin readiness checklist {#admin-readiness}

Ask your Microsoft 365 administrator to confirm the following before the lab:

1. Verify the learner's **Microsoft 365 Copilot** license and access to the services listed in the mission prerequisites.
1. Complete [initial usage-based billing setup](https://learn.microsoft.com/en-us/microsoft-365/copilot/usage-based-billing-copilot-credits-setup), including activation of the default spending policy.
1. Open **Copilot > Cost Management > Configuration** in the [Microsoft 365 admin center](https://admin.microsoft.com/). Confirm a spending policy covers the learner and selects **Cowork**. For a lab group, scope the policy to its security group. Review the billing method, available credits, spending limits, alerts, and model profile using the [spending-policy guide](https://learn.microsoft.com/en-us/microsoft-365/copilot/usage-based-billing-manage-copilot-credits).
1. Confirm Cowork is [discoverable to the learner](https://learn.microsoft.com/en-us/microsoft-365/copilot/discovery-setting-ai-experiences). Making Cowork visible doesn't grant access without the required billing and spending-policy coverage.
1. Confirm the learner can use the organization's permitted models. Don't enable Anthropic solely to grant Cowork access.
1. Have the learner open [Microsoft Copilot](https://copilot.cloud.microsoft), select **Cowork** in the top toggle next to **Chat**, and submit a harmless text-only request such as `Write a three-item checklist for organizing a desk. Don't access files or take actions.` Confirm it completes before starting the mission. This check can consume credits.

> [!IMPORTANT]
> The legacy **Agents > All Agents > Cowork** entry no longer controls access. A small credit limit is a budget control, not an access-denial mechanism. To deny access, exclude the user from **every spending policy that selects Cowork**. Follow the [current access guidance](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-admin-governance#allow-access-to-cowork), rather than the old Frontier allowlist.

## Missions

<!-- markdownlint-disable MD033 -->
<missions section="cowork-collective" sort="first-added" order="descending" />
<!-- markdownlint-enable MD033 -->

More Cowork Collective missions will be added here soon!

## 📖 Official documentation

Everything you need to understand Cowork's capabilities, requirements, and current feature set straight from Microsoft.

<action-button href="https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/" label="Read the Docs" icon="🚀" />

## 🎬 Videos

Watch Copilot Cowork in action before you start the missions.

<!-- markdownlint-disable-next-line MD033 -->
<VideoLibrary track="cowork" />

<analytics-tag section="cowork-collective" />
