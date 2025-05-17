import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TestSwiper from "../views/TestSwiper.vue";
import NavBar from "../views/NavBar.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/test",
    name: "test",
    component: TestSwiper,
  },
  {
    path: "/navbar",
    name: "navbar",
    component: NavBar,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
