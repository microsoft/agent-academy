import { defineConfig } from "vitepress";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { mermaidPlugin } from "./plugins/vitepress-mermaid";
import { missionsPlugin } from "./plugins/missions";
import { previewBannerPlugin } from "./plugins/preview-banner";
import { downloadFilesPlugin } from "./plugins/download-files";
import { recruitExperienceSwitcherEnabled } from "./featureFlags";
import { coursePathGroups } from "./theme/coursePaths";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.resolve(__dirname, "..");

const recruitGroup = coursePathGroups.find(
  (group) => group.hub === "/recruit/"
);
const recruitStandardHome =
  recruitGroup?.paths.find((coursePath) => coursePath.root === "/recruit/")
    ?.home ?? "/recruit/";
const recruitNextGenHome =
  recruitGroup?.paths.find(
    (coursePath) => coursePath.root === "/recruit-nextgen/"
  )?.home ?? "/recruit-nextgen/";

export default defineConfig({
  title: "Agent Academy",
  base: "/agent-academy/",
  cleanUrls: true,
  ignoreDeadLinks: [/\.docx$/],
  // While the switcher is off the standard course keeps /recruit/ and the chooser stays parked.
  rewrites: recruitExperienceSwitcherEnabled
    ? {
        "recruit/index.md": "recruit/standard/index.md",
        "recruit/choose/index.md": "recruit/index.md",
      }
    : {},
  head: [
    ["link", { rel: "icon", href: "/agent-academy/logo.png" }],
    [
      "script",
      { text: "text/javascript" },
      `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "u32wbf0qvv");`,
    ],
  ],
  description:
    "Welcome to Copilot Studio Agent Academy. Curated lessons on getting started building agents with Copilot Studio.",
  themeConfig: {
    logo: "/logo.png",
    nav: [
      {
        text: "Home",
        items: [
          { text: "Home", link: "/" },
          { text: "Our Team", link: "/our-team/" },
          { text: "Recent Changes", link: "/recent-changes/" },
          { text: "Videos", link: "/videos/" },
        ],
      },
      {
        text: "Courses",
        items: [
          { text: "Recruit", link: "/recruit/" },
          { text: "Operative", link: "/operative/" },
          { text: "Commander (Coming Soon)", link: "/commander/" },
        ],
      },
      {
        text: "Labs",
        items: [
          { text: "Special Ops", link: "/special-ops/" },
          { text: "Cowork Collective", link: "/cowork-collective/" },
        ],
      },
      {
        text: "Events",
        items: [
          { text: "Live Event", link: "/events/live/" },
          { text: "Hackathon", link: "/events/hackathon/" },
          { text: "Workshops", link: "/events/workshops/" },
        ],
      },
    ],
    search: {
      provider: "local",
    },
    sidebar: [
      { text: "Home", link: "/" },
      { text: "Our Team", link: "/our-team/" },
      { text: "Recent Changes", link: "/recent-changes/" },
      { text: "Videos", link: "/videos/" },
      {
        text: "Courses",
        items: [
          {
            text: "Recruit",
            link: "/recruit/",
            collapsed: true,
            items: [
              {
                text: "Standard harness",
                link: recruitStandardHome,
                collapsed: true,
                items: [
                  { text: "Course Setup", link: "/recruit/00-course-setup/" },
                  {
                    text: "Introduction to Agents",
                    link: "/recruit/01-introduction-to-agents/",
                  },
                  {
                    text: "Copilot Studio Fundamentals",
                    link: "/recruit/02-copilot-studio-fundamentals/",
                  },
                  {
                    text: "Create A Declarative Agent For M365 Copilot",
                    link: "/recruit/03-create-a-declarative-agent-for-M365Copilot/",
                  },
                  {
                    text: "Creating A Solution",
                    link: "/recruit/04-creating-a-solution/",
                  },
                  {
                    text: "Using Prebuilt Agents",
                    link: "/recruit/05-using-prebuilt-agents/",
                  },
                  {
                    text: "Create Agent From Conversation",
                    link: "/recruit/06-create-agent-from-conversation/",
                  },
                  {
                    text: "Add New Topic With Trigger",
                    link: "/recruit/07-add-new-topic-with-trigger/",
                  },
                  {
                    text: "Add Adaptive Cards",
                    link: "/recruit/08-add-adaptive-card/",
                  },
                  {
                    text: "Add An Agent Flow",
                    link: "/recruit/09-add-an-agent-flow/",
                  },
                  {
                    text: "Add Event Triggers",
                    link: "/recruit/10-add-event-triggers/",
                  },
                  {
                    text: "Publish Your Agents",
                    link: "/recruit/11-publish-your-agent/",
                  },
                  {
                    text: "Understanding Licensing",
                    link: "/recruit/12-understanding-licensing/",
                  },
                  {
                    text: "Course Completion Badge",
                    link: "/recruit/course-completion-badges-recruit/",
                  },
                ],
              },
              {
                text: "GitHub Copilot harness",
                link: recruitNextGenHome,
                collapsed: true,
                items: [
                  {
                    text: "Course Setup",
                    link: "/recruit-nextgen/00-course-setup/",
                  },
                  {
                    text: "Introduction to Agents",
                    link: "/recruit-nextgen/01-introduction-to-agents/",
                  },
                  {
                    text: "Copilot Studio Fundamentals",
                    link: "/recruit-nextgen/02-copilot-studio-fundamentals/",
                  },
                  {
                    text: "Creating A Solution",
                    link: "/recruit-nextgen/03-creating-a-solution/",
                  },
                  {
                    text: "Build with the GitHub Copilot Harness",
                    link: "/recruit-nextgen/04-build-a-custom-agent/",
                  },
                  {
                    text: "Add a Tool",
                    link: "/recruit-nextgen/05-add-tools/",
                  },
                  {
                    text: "Add Skills",
                    link: "/recruit-nextgen/06-add-skills/",
                  },
                  {
                    text: "Automate with Workflows",
                    link: "/recruit-nextgen/07-automate-with-workflows/",
                  },
                  {
                    text: "Publish Your Agent",
                    link: "/recruit-nextgen/08-publish-your-agent/",
                  },
                  {
                    text: "Understanding Licensing",
                    link: "/recruit-nextgen/09-understanding-licensing/",
                  },
                  {
                    text: "Course Completion Badge",
                    link: "/recruit-nextgen/course-completion-badges-recruit/",
                  },
                ],
              },
            ].flatMap((group, index) =>
              recruitExperienceSwitcherEnabled
                ? [group]
                : index === 0
                  ? group.items
                  : []
            ),
          },
          {
            text: "Operative",
            link: "/operative/",
            collapsed: true,
            items: [
              {
                text: "Get started with the Hiring Agent",
                link: "/operative/01-get-started/",
              },
              {
                text: "Authoring Agent Instructions",
                link: "/operative/02-agent-instructions/",
              },
              {
                text: "Make your agent multi-agent ready",
                link: "/operative/03-multi-agent/",
              },
              {
                text: "Automate your agent with Triggers",
                link: "/operative/04-automate-triggers/",
              },
              {
                text: "Understanding Agent Models",
                link: "/operative/05-model-selection/",
              },
              {
                text: "Content Moderation and AI Safety",
                link: "/operative/06-ai-safety/",
              },
              {
                text: "Extracting Resume Contents",
                link: "/operative/07-multimodal-prompts/",
              },
              {
                text: "Prompts - Dataverse Grounding",
                link: "/operative/08-dataverse-grounding/",
              },
              {
                text: "Generating an Interview Prep Document",
                link: "/operative/09-document-generation/",
              },
              {
                text: "Integrate with MCP Servers",
                link: "/operative/10-mcp/",
              },
              {
                text: "Obtain User Feedback with Adaptive Cards",
                link: "/operative/11-obtain-user-feedback/",
              },
              {
                text: "Course Completion Badge",
                link: "/operative/course-completion-badges-operative/",
              },
            ],
          },
          { text: "Commander (Coming Soon)", link: "/commander/" },
        ],
      },
      {
        text: "Labs",
        items: [
          {
            text: "Special Ops",
            link: "/special-ops/",
            collapsed: true,
            items: [
              {
                text: "Marketing Agent with Skills",
                link: "/special-ops/ghostwriter/",
              },
              {
                text: "MCS + Docusign MCP",
                link: "/special-ops/docusign-mcp/",
              },
              { text: "MCS ❤️ MCP", link: "/special-ops/mcs-mcp/" },
              {
                text: "Microsoft Learn Docs MCP",
                link: "/special-ops/ms-learn-mcp/",
              },
              {
                text: "Power Platform CLI MCP",
                link: "/special-ops/pac-cli-mcp/",
              },
              {
                text: "RAG with Azure AI Search",
                link: "/special-ops/azure-ai-search-rag/",
              },
              {
                text: "Secure MCP with OAuth 2.0",
                link: "/special-ops/mcp-oauth/",
              },
              {
                text: "Use Case Qualifier",
                link: "/special-ops/use-case-qualifier/",
              },
              {
                text: "YAML Specialist",
                link: "/special-ops/yaml-specialist/",
              },
            ],
          },
          {
            text: "Cowork Collective",
            link: "/cowork-collective/",
            collapsed: true,
            items: [
              { text: "Badge Check", link: "/cowork-collective/badge-check/" },
              {
                text: "Out of Office Vacation Handoff",
                link: "/cowork-collective/out-of-office-prep/",
              },
              {
                text: "The Compliance Packet",
                link: "/cowork-collective/compliance-packet/",
              },
            ],
          },
        ],
      },
      {
        text: "Events",
        items: [
          { text: "Live Event", link: "/events/live/" },
          { text: "Hackathon", link: "/events/hackathon/" },
          { text: "Workshops", link: "/events/workshops/" },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/microsoft/agent-academy/",
      },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(mermaidPlugin);
      md.use(previewBannerPlugin);
    },
  },
  vite: {
    plugins: [missionsPlugin(docsDir), downloadFilesPlugin(docsDir)],
  },
});
