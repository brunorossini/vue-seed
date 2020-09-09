import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";

import Home from "./views/Home";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Forgot from "./views/Forgot";
import Action from "./views/Action";
import ConfirmMail from "./views/ConfirmMail";

Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: "/signin",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/forgot",
    name: "forgot",
    component: Forgot,
  },
  {
    path: "/action",
    name: "action",
    component: Action,
  },
  {
    path: "/mail",
    name: "mail",
    component: ConfirmMail,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new Router({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  console.log(currentUser);

  if (requiresAuth && currentUser) {
    if (currentUser.emailVerified && to.name === "mail") next("home");
    if (!currentUser.emailVerified && to.name !== "mail") next("mail");
  }

  if (requiresAuth && !currentUser) next("signin");
  else if (!requiresAuth && currentUser) {
    if (to.name === "action") next();
    else next("home");
  } else next();
});

export default router;
