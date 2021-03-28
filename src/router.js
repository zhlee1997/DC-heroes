import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home";
import DcHeroes from "./pages/DcHeroes";
import Calendar from "./pages/Calendar";

const routes = [
  { path: "/", component: Home },
  { path: "/dc-heroes", component: DcHeroes },
  { path: "/calendar", component: Calendar },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
