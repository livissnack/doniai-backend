import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/user/Login.vue")
    },
    {
      path: "/",
      component: () => import("@/views/Layout.vue"),
      children: [
        { path: "/", component: Home, name: "home" },
        { path: "/articles", component: () => import("@/views/article/List.vue"), name: "articles" },
        { path: "/blacklists", component: () => import("@/views/black-list/List.vue"), name: "blacklists" },
        { path: "/books", component: () => import("@/views/book/List.vue"), name: "booksList" },
        { path: "/articles/add", component: () => import("@/views/article/Create.vue"), name: "articlesAdd" },
        { path: "/test", component: () => import("@/components/NoticeMsg.vue"), name: "Timer" },
      ]
    }
  ]
});
