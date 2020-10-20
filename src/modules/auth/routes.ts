import { RouteRecordRaw } from "vue-router";
import AuthModule from "./AuthModule.vue";
import SignIn from "./views/AuthModule.SignIn.vue";

export const ROUTES = {
  AUTH_MODULE: {
    $: "auth",
    SIGN_IN: "auth.sign-in",
  },
};

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/auth",
    name: ROUTES.AUTH_MODULE.$,
    component: AuthModule,
    children: [
      {
        path: "/auth/sign-in/:action",
        name: ROUTES.AUTH_MODULE.SIGN_IN,
        component: SignIn,
      },
    ],
  },
];
