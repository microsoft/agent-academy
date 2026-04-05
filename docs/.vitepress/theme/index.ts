import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import VitePressMermaid from "../plugins/vitepress-mermaid/index.vue";
import Missions from "../plugins/missions/Missions.vue";
import MissionMeta from "../plugins/mission-meta/MissionMeta.vue";
import CourseMeta from "../plugins/course-meta/CourseMeta.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("vitepress-mermaid", VitePressMermaid);
    app.component("missions", Missions);
    app.component("mission-meta", MissionMeta);
    app.component("course-meta", CourseMeta);
  },
} satisfies Theme;
