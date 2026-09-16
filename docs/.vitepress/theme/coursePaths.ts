import { recruitExperienceSwitcherEnabled } from "../featureFlags";

export type CoursePath = {
  label: string;
  description: string;
  /** Landing page for the path. */
  home: string;
  /** URL prefix shared by every page in the path. */
  root: string;
  /** Short selling points shown on the chooser cards. */
  highlights: string[];
  /** Optional ribbon text shown on the chooser cards. */
  tag?: string;
};

export type CoursePathGroup = {
  course: string;
  /** Chooser page that sits above the paths. */
  hub: string;
  paths: CoursePath[];
};

export const coursePathGroups: CoursePathGroup[] = [
  {
    course: "Recruit",
    hub: "/recruit/",
    paths: [
      {
        label: "Standard harness",
        description:
          "Build conversation logic with topics, triggers, nodes, and agent flows",
        // Until the switcher launches, the standard course still owns /recruit/.
        home: recruitExperienceSwitcherEnabled
          ? "/recruit/standard/"
          : "/recruit/",
        root: "/recruit/",
        tag: "Topic-based",
        highlights: [
          "13 missions",
          "Topics, Adaptive Cards, and agent flows",
          "Best for rule-based, predictable conversations",
        ],
      },
      {
        label: "GitHub Copilot harness",
        description:
          "Guide agent behavior with instructions, skills, tools, and workflows",
        home: "/recruit-nextgen/",
        root: "/recruit-nextgen/",
        tag: "Instruction-driven",
        highlights: [
          "10 missions",
          "Instructions, Skills, Tools, and Workflows",
          "Best for reasoning-heavy, multi-step work",
        ],
      },
    ],
  },
  {
    course: "Operative",
    hub: "/operative/",
    paths: [
      {
        label: "Standard Harness",
        description:
          "Build a multi-agent hiring system with the Standard Harness in Copilot Studio",
        home: "/operative/standard/",
        root: "/operative/",
        tag: "Topic-based",
        highlights: [
          "12 missions",
          "Connected agents, prompts, and agent flows",
          "Best for structured hiring workflows with authored logic",
        ],
      },
      {
        label: "GitHub Copilot harness",
        description:
          "Build the hiring system with instructions, skills, tools, and workflows",
        home: "/operative-nextgen/",
        root: "/operative-nextgen/",
        tag: "Instruction-driven",
        highlights: [
          "12 missions",
          "Dataverse MCP, connected agents, and Python skills",
          "Best for reasoning-heavy, multi-step hiring workflows",
        ],
      },
    ],
  },
];

export function findGroupForPath(relativePath: string) {
  return coursePathGroups.find(
    (group) =>
      relativePath === group.hub ||
      group.paths.some((path) => relativePath.startsWith(path.root))
  );
}

export function isPathActive(
  group: CoursePathGroup,
  path: CoursePath,
  relativePath: string
) {
  // The hub shares its URL prefix with the standard path, so match it explicitly.
  if (relativePath === group.hub) return false;
  return relativePath.startsWith(path.root);
}
