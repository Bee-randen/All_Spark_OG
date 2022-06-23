import { createRouter, createWebHistory } from "vue-router";

// Default Pages
import Dashboard from "../views/Dashboard.vue";
// Component Pages
import Temp from "../views/components/Templates.vue";
import ViB from "../views/components/ViewInBrowser.vue";
import Banner from "../views/components/Banner.vue";
import Body from "../views/components/Body.vue";
import Social from "../views/components/Social.vue";
import Apps from "../views/components/Apps.vue";
import CR from "../views/components/CopyRight.vue";
import Legal from "../views/components/Legal.vue";
import CS from "../views/components/CanSpam.vue";
import Saved from "../views/components/SavedEmails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
    },

    // Components based Routes
    {
      path: "/component/Template",
      name: "VTemp",
      component: Temp,
    },
    {
      path: "/component/ViewInBrowser",
      name: "VViB",
      component: ViB,
    },
    {
      path: "/component/Banner",
      name: "VBanner",
      component: Banner,
    },
    {
      path: "/component/Body",
      name: "VBody",
      component: Body,
    },
    {
      path: "/component/Social",
      name: "VSocial",
      component: Social,
    },
    {
      path: "/component/Apps",
      name: "VApps",
      component: Apps,
    },
    {
      path: "/component/CopyRight",
      name: "VCR",
      component: CR,
    },
    {
      path: "/component/Legal",
      name: "VLegal",
      component: Legal,
    },
    {
      path: "/component/CanSpam",
      name: "VCS",
      component: CS,
    },
    {
      path: "/component/SavedEmails",
      name: "VSaved",
      component: Saved,
    },
  ],
});

export default router;
