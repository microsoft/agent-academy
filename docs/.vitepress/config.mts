import { defineConfig } from "vitepress";
import { mermaidPlugin } from "./plugins/vitepress-mermaid";

export default defineConfig({
  title: "Agent Academy",
  base: "/agent-academy/",
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
      { text: "Home", link: "/" },
      { text: "Our Team", link: "/our-team/" },
      {
        text: "Courses",
        items: [
          { text: "Recruit", link: "/recruit/" },
          { text: "Operative", link: "/operative/" },
          { text: "Commander (Coming Soon)", link: "/commander/" },
        ],
      },
      {
        text: "Special Ops (Labs)",
        items: [
          { text: "Overview", link: "/special-ops/" },
          { text: "MCS ❤️ MCP", link: "/special-ops/mcs-mcp/" },
          { text: "Power Platform CLI MCP", link: "/special-ops/pac-cli-mcp/" },
        ],
      },
    ],
    lastUpdated: {
      text: 'Last updated at',
      formatOptions: {
        dateStyle: 'long'
      }
    },
    sidebar: [
      { text: "Home", link: "/" },
      { text: "Our Team", link: "/our-team/" },
      {
        text: "Courses",
        items: [
          {
            text: "Recruit",
            link: "/recruit/",
            collapsed: true,
            items: [
              {
                text: "Course Setup",
                link: "/recruit/00-course-setup/",
              },
              {
                text: "Introduction to Agents",
                link: "/recruit/01-introduction-to-agents/",
              },
              {
                text: "Copilot Studio Fundamentals",
                link: "/recruit/02-copilot-studio-fundamentals/",
              },
              {
                text: "Create A Declarative Agent For Microsoft 365 Copilot",
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
                text: "Course Completion Badge Recruit",
                link: "/recruit/course-completion-badges-recruit/",
              },
            ],
          },
          {
            text: "Operative",
            collapsed: true,
            link: "/operative/",
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
                text: "Make your agent multi-agent ready with connected agents",
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
                text: "Content Moderation and AI Safety Essentials",
                link: "/operative/06-ai-safety/",
              },
              {
                text: "Extracting Resume Contents with Multi-Modal Prompts",
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
                text: "Course Completion Badge Operative",
                link: "/operative/course-completion-badges-operative",
              },
            ],
          },
          { text: "Commander (Coming Soon)", link: "/commander/" },
        ],
      },
      {
        text: "Special Ops (Labs)",
        link: "/special-ops/",
        collapsed: true,
        items: [
          { text: "MCS ❤️ MCP", link: "/special-ops/mcs-mcp/" },
          { text: "Power Platform CLI MCP", link: "/special-ops/pac-cli-mcp/" },
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
    },
  },
});
