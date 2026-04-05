import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import VitePressMermaid from "../plugins/vitepress-mermaid/index.vue";
import Missions from "../plugins/missions/Missions.vue";
import MissionMeta from "../plugins/mission-meta/MissionMeta.vue";
import ProductsIndex from "../plugins/products-index/ProductsIndex.vue";
import TagsIndex from "../plugins/tags-index/TagsIndex.vue";
import Breadcrumb from "../plugins/breadcrumb/Breadcrumb.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("vitepress-mermaid", VitePressMermaid);
    app.component("missions", Missions);
    app.component("mission-meta", MissionMeta);
    app.component("products-index", ProductsIndex);
    app.component("tags-index", TagsIndex);
    app.component("breadcrumb", Breadcrumb);
  },
} satisfies Theme;
