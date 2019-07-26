import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/layout",
      name: "layout",
      component: () => import("@/views/Layout.vue"),
      children: [
        { path: "/articles", component: () => import("@/views/article/List.vue"), name: "articlesList" },
        { path: "/blacklists", component: () => import("@/views/black-list/List.vue"), name: "blacklistsList" },
        { path: "/books", component: () => import("@/views/book/List.vue"), name: "booksList" },
        { path: "/articles/add", component: () => import("@/views/article/Create.vue"), name: "articlesCreate" }
      ]
    }
  ]
});
