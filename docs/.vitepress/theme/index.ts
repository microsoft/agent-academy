import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import VitePressMermaid from "../plugins/vitepress-mermaid/index.vue";
import Missions from "../plugins/missions/Missions.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("vitepress-mermaid", VitePressMermaid);
    app.component("missions", Missions);
  },
} satisfies Theme;
