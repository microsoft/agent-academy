import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import VitePressMermaid from "../plugins/vitepress-mermaid/index.vue";
import Missions from "../plugins/missions/Missions.vue";
import MissionMeta from "../plugins/mission-meta/MissionMeta.vue";
import ProductsIndex from "../plugins/products-index/ProductsIndex.vue";
import TagsIndex from "../plugins/tags-index/TagsIndex.vue";
import Breadcrumb from "../plugins/breadcrumb/Breadcrumb.vue";
import PageDates from "../plugins/page-dates/PageDates.vue";
import AnalyticsTag from "../plugins/analytics-tag/AnalyticsTag.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "doc-footer-before": () => h(PageDates),
    });
  },
  enhanceApp({ app }) {
    app.component("vitepress-mermaid", VitePressMermaid);
    app.component("missions", Missions);
    app.component("mission-meta", MissionMeta);
    app.component("products-index", ProductsIndex);
    app.component("tags-index", TagsIndex);
    app.component("breadcrumb", Breadcrumb);
    app.component("analytics-tag", AnalyticsTag);
  },
} satisfies Theme;
