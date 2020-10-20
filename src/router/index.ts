import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import {routes as authModuleRoutes, ROUTES as AUTH_MODULE_ROUTES} from '../modules/auth/routes';

const routes: Array<RouteRecordRaw> = [
  ...authModuleRoutes,
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

export const ROUTES = {
  ...AUTH_MODULE_ROUTES
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
