---
search: false
hide: true
preview: 'This course uses Business Applications in Work IQ and workshop preview capabilities.'
prev:
  text: 'Intelligence Officer Overview'
  link: /intelligence-officer/
next:
  text: 'Understand Business Applications in Work IQ'
  link: /intelligence-officer/01-business-applications-work-iq/
short-description: 'Prepare a safe development environment and connect GitHub Copilot to Dataverse.'
difficulty: 2
codename: OPERATION FIELD READY
time: 45
tags:
  - setup
  - mcp
products:
  - dataverse
  - github-copilot
  - visual-studio-code
industries:
  - retail
created-date: 2026-10-25
last-edited-date: 2026-10-25
---

# Mission 00: Prepare Your Environment {#mission-00-course-setup}

<mission-meta />

## Mission Brief

Welcome, Intelligence Officer. Before an agent can help with customer recovery, you need to know whose data it can reach and where its changes will land.

**Operation Field Ready** establishes a nonproduction workspace, the local development tools, and a verified connection to Dataverse. Unlike the conference workshop, this course uses your organization's approved accounts and environment. No temporary workshop credentials are supplied.

Treat your environment URL like a destination on a mission order: verify it before every deployment or data load. A correct command against the wrong environment is still the wrong operation.

## Objectives

In this mission, you'll learn:

1. Which permissions and preview capabilities the course requires.
1. How Work IQ feature availability differs from data participation and application access.
1. How to prepare the Windows development toolchain.
1. How to verify a Dataverse connection without changing records.

## Access Before Installation

The course has two kinds of prerequisites. **Development prerequisites** let you build the application and plugin. **Experience prerequisites** let agents discover skills and reason over the application.

Enabling Work IQ features in an environment does not, by itself, authorize every agent to access that environment. Administrators separately manage environment data participation, app participation, and AI experience access. Dataverse permissions still govern the records a user can access.

| Checkpoint | Required access |
| --- | --- |
| Tables and app | Environment Maker or System Customizer, with appropriate Dataverse privileges |
| Work IQ configuration | Power Platform Administrator assistance |
| Security roles and plugin registration | Appropriate administrative/customization privileges in the development environment |
| Copilot CLI | GitHub account with Copilot CLI entitlement |
| Business skills and semantic model | Work IQ-enabled environment and the required preview capabilities |
| Skill Builder evaluation, multi-skill editing, and history | The newer preview experience shown in the workshop |
| Cowork | Cowork entitlement and an administrator-permitted Business apps connection |

> [!IMPORTANT]
> The workshop's Skill Builder experience is newer than the manual business-skills editor described in some public documentation. Mission 08 identifies the differences. Confirm access now; a missing preview feature is not fixed by granting broader security roles.

## Lab 0: Prepare Your Workspace

### Lab 0.1: Confirm the environment

1. Open [Power Apps](https://make.powerapps.com) with your approved work or school account.
1. Select the environment picker and choose a dedicated **nonproduction** environment with Dataverse.
1. Open **Settings** > **Session details**.
1. Record the environment name, environment ID, and **Instance URL** in your private lab notes.
1. Confirm with your administrator that you can create solutions, tables, apps, security roles, and a sandbox plugin.

If you need an environment, follow [Create a Power Platform developer environment](https://learn.microsoft.com/power-platform/developer/create-developer-environment). A developer environment is not a substitute for the service entitlements listed above.

Use a separate browser profile if you work with multiple tenants. Store credentials only in your organization's approved credential manager, never in a project file or agent prompt.

### Lab 0.2: Enable the required experiences

1. Ask your administrator to open [Power Platform admin center](https://admin.powerplatform.microsoft.com).
1. Select **Manage**, then your development environment.
1. Open **Settings** > **Product** > **Features**.
1. Review **Dataverse search** and enable search indexing using the available search setting.
1. Review **Work IQ** and enable it for the development environment if approved.
1. Select **Save** if settings changed.
1. Review [environment data participation and application participation](https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation) with your administrator.
1. Review [AI experience access](https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access) for the clients used in this course.
1. Confirm that **Semantic Model (preview)** and **Business skills (preview)** are available in Power Apps, including the workshop Skill Builder experience needed in Mission 08.

The Zava app does not exist yet; you will configure its app-level participation after creating it. A direct Dataverse MCP connection has its own [environment configuration](https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable). Do not confuse it with a Work IQ MCP connection.

> [!WARNING]
> If your organization blocks a feature or connection, ask its administrator for an approved path. Do not switch tenants, bypass a policy, or give a tool broader access to get past the restriction.

### Lab 0.3: Install and verify local tools

Use a Windows development machine for the supplied loader and .NET Framework plugin build. The loader explicitly launches `powershell`; the plugin targets Dataverse's supported .NET Framework runtime, not .NET 8.

| Tool | Installation reference | Verification |
| --- | --- | --- |
| PowerShell 7 | [Install PowerShell](https://learn.microsoft.com/powershell/scripting/install/installing-powershell-on-windows) | `$PSVersionTable.PSVersion` |
| Windows PowerShell | Included with Windows; required by the supplied loader | `powershell -NoProfile -Command '$PSVersionTable.PSVersion'` |
| Visual Studio Code | [VS Code setup](https://code.visualstudio.com/docs/setup/windows) | `code --version` |
| Python 3 | [Python on Windows](https://learn.microsoft.com/windows/python/beginners) | `python --version` |
| .NET SDK 8 or later | [.NET installation](https://learn.microsoft.com/dotnet/core/install/windows) | `dotnet --list-sdks` |
| .NET Framework 4.6.2 Developer Pack | [.NET Framework developer packs](https://learn.microsoft.com/dotnet/framework/install/guide-for-developers) | Confirm the 4.6.2 targeting pack is installed before Mission 05 |
| GitHub Copilot CLI | [Install Copilot CLI](https://docs.github.com/copilot/how-tos/copilot-cli/install-copilot-cli) | `copilot --version` |

1. Install missing tools using the references above and your organization's software policy.
1. Open VS Code and select **Terminal** > **New Terminal**.
1. Run each verification command in the table.
1. Enter `copilot` to start GitHub Copilot CLI.
1. Complete its GitHub authentication flow with your own approved account.
1. Enter the following command **inside Copilot CLI**, not at the PowerShell prompt:

    ```text
    /plugin install dataverse@awesome-copilot
    ```

1. Review the plugin's requested access before approving installation.
1. Ask Copilot to identify and verify the Dataverse CLI required by its plugin:

    ```text
    Check the Dataverse plugin's installed guidance and prerequisites.
    Verify the Dataverse CLI used by this plugin is installed and show its
    version and API request help. If missing, show the documented installation
    command and obtain my approval before installing it. Do not connect to or
    modify an environment yet.
    ```

> [!NOTE]
> The supplied data loader uses `dataverse api request`. The Power Platform CLI command `pac` is a different tool and does not satisfy this dependency. GitHub Desktop, Azure CLI, and Agent 365 CLI appeared in the workshop's general setup list but are not required by these missions.

### Lab 0.4: Verify a read-only connection

1. Enter this prompt in Copilot CLI, replacing both placeholders:

    ```text
    Connect to my Dataverse development environment:
    https://<your-environment>.crm.dynamics.com
    using <your-work-or-school-account>.

    Use the plugin's supported Microsoft sign-in flow. On Windows, prefer
    the native sign-in window when available. I will enter credentials only
    in Microsoft's sign-in interface, never in this conversation.

    After authentication, report the connected environment URL and name,
    environment ID, signed-in account, and user ID. Compare them with the
    target I supplied. Stop if they differ. Do not change any records.
    ```

1. Compare the returned environment information with your private notes.
1. Enter this second prompt:

    ```text
    Using only read-only metadata queries in the confirmed environment,
    list a few existing Dataverse tables with display and logical names.
    Verify that the Dataverse CLI can call WhoAmI in this same environment.
    Do not create, update, delete, or repair anything.
    ```

1. Confirm the table query and CLI identity check succeed.

An agent can recover from a transient tooling error, but its final response must identify unresolved failures. Ask for the exact error and fix the prerequisite rather than continue on a success-shaped summary.

## Mission Complete

You have established:

- **A verified destination:** your development environment and account match your notes.
- **A working toolchain:** Copilot CLI, the Dataverse plugin, and its CLI are available.
- **An access boundary:** you know which preview experiences and administrator decisions are required.

Next: [Mission 01: Understand Business Applications in Work IQ](../01-business-applications-work-iq/).

## Tactical Resources

- [Business Applications in Work IQ](https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/overview)
- [Manage participation](https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation)
- [Create and use business skills](https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skills)
- [Write a Dataverse plugin](https://learn.microsoft.com/power-apps/developer/data-platform/write-plug-in)

<analytics-tag section="intelligence-officer" mission="00-course-setup" />
