import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import VitePressMermaid from "../plugins/vitepress-mermaid/index.vue";
import Missions from "../plugins/missions/Missions.vue";
import MissionMeta from "../plugins/mission-meta/MissionMeta.vue";
import ProductsIndex from "../plugins/products-index/ProductsIndex.vue";
import TagsIndex from "../plugins/tags-index/TagsIndex.vue";
import IndustriesIndex from "../plugins/industries-index/IndustriesIndex.vue";
import Breadcrumb from "../plugins/breadcrumb/Breadcrumb.vue";
import PageDates from "../plugins/page-dates/PageDates.vue";
import PreviewBanner from "../plugins/preview-banner/PreviewBanner.vue";
import AnalyticsTag from "../plugins/analytics-tag/AnalyticsTag.vue";
import DownloadFiles from "../plugins/download-files/DownloadFiles.vue";
import ActionButton from "../plugins/action-button/ActionButton.vue";
import CourseCredits from "../plugins/credits/CourseCredits.vue";
import MissionCredits from "../plugins/credits/MissionCredits.vue";
import SessionSchedule from "./components/SessionSchedule.vue";
import VideoLibrary from "./components/VideoLibrary.vue";
import WorkshopsPage from "./components/WorkshopsPage.vue";
import HackathonPrizes from "./components/HackathonPrizes.vue";
import CoursePathSwitcher from "./components/CoursePathSwitcher.vue";
import CoursePathCards from "./components/CoursePathCards.vue";

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "doc-before": () => h(CoursePathSwitcher),
      "doc-footer-before": () => h(PageDates),
    });
  },
  enhanceApp({ app }) {
    app.component("vitepress-mermaid", VitePressMermaid);
    app.component("missions", Missions);
    app.component("mission-meta", MissionMeta);
    app.component("preview-banner", PreviewBanner);
    app.component("products-index", ProductsIndex);
    app.component("tags-index", TagsIndex);
    app.component("industries-index", IndustriesIndex);
    app.component("breadcrumb", Breadcrumb);
    app.component("analytics-tag", AnalyticsTag);
    app.component("download-files", DownloadFiles);
    app.component("action-button", ActionButton);
    app.component("course-credits", CourseCredits);
    app.component("mission-credits", MissionCredits);
    app.component("SessionSchedule", SessionSchedule);
    app.component("VideoLibrary", VideoLibrary);
    app.component("WorkshopsPage", WorkshopsPage);
    app.component("HackathonPrizes", HackathonPrizes);
    app.component("CoursePathSwitcher", CoursePathSwitcher);
    app.component("course-path-cards", CoursePathCards);
  },
} satisfies Theme;
