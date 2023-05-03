import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      icon: "mdi-home",
    },
  },
  {
    path: "/timings",
    name: "TimingsCalc",
    meta: {
      icon: "mdi-timer-outline",
      showInHome: true,
    },
    component: () => import(/* webpackChunkName: "timings" */ "../views/TimingsCalc.vue"),
  },
  {
    path: "/fun",
    name: "FunCalc",
    meta: {
      icon: "mdi-calculator",
      showInHome: true,
    },
    component: () => import(/* webpackChunkName: "fun" */ "../views/FunCalc.vue"),
  },

  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    meta: {
      hidden: true,
    },
    component: () => import(/* webpackChunkName: "notfound" */ "../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
