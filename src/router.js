import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/user/Login.vue"),
      meta: {isLogin: false, title: '登录页'}
    },
    {
      path: "/",
      component: () => import("@/views/Layout.vue"),
      children: [
        { path: "/", component: Home, name: "home", meta: {isLogin: true, title: '首页'} },
        { path: "/articles", component: () => import("@/views/article/List.vue"), name: "articles", meta: {isLogin: true, title: '文章页'} },
        { path: "/blacklists", component: () => import("@/views/black-list/List.vue"), name: "blacklists", meta: {isLogin: true, title: '黑名单页'} },
        { path: "/books", component: () => import("@/views/book/List.vue"), name: "books", meta: {isLogin: true, title: '书籍页'} },
        { path: "/test", component: () => import("@/components/NoticeMsg.vue"), name: "Timer", meta: {isLogin: false, title: '测试页'} },
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem('access_token') && localStorage.getItem('login_status');
  if(to.meta.isLogin) {
    if(isLogin) {
      next();
    }else{
      next({ path: '/login'});
    }
  }else{
    next();
  }
  if(to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
