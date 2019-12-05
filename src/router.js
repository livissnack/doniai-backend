import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: { isLogin: false, title: '登录页' }
    },
    {
      path: '/',
      component: () => import('@/views/Layout.vue'),
      children: [
        {
          path: '/',
          component: Home,
          name: 'home',
          meta: { isLogin: true, title: '首页' }
        },
        {
          path: '/articles',
          component: () => import('@/views/doniai/article/List.vue'),
          name: 'articles',
          meta: { isLogin: false, title: '文章页' }
        },
        {
          path: '/blacklists',
          component: () => import('@/views/doniai/black-list/List.vue'),
          name: 'blacklists',
          meta: { isLogin: true, title: '黑名单页' }
        },
        {
          path: '/books',
          component: () => import('@/views/doniai/book/List.vue'),
          name: 'books',
          meta: { isLogin: true, title: '书籍页' }
        },
        {
          path: '/test',
          component: () => import('@/components/NoticeMsg.vue'),
          name: 'Timer',
          meta: { isLogin: false, title: '测试页' }
        },

        {
          path: '/hspx/accesslog',
          component: () => import('@/views/hspx/AccessLog.vue'),
          name: 'pxAccessLog',
          meta: { isLogin: true, title: '品信访问日志页' }
        },
        {
          path: '/hspx/article',
          component: () => import('@/views/hspx/Article.vue'),
          name: 'pxArticle',
          meta: { isLogin: true, title: '品信文章页' }
        },
        {
          path: '/hspx/article/edit/:id',
          component: () => import('@/views/hspx/ArticleEdit.vue'),
          name: 'pxArticleEdit',
          meta: { isLogin: true, title: '品信文章编辑页' }
        },
        {
          path: '/hspx/product',
          component: () => import('@/views/hspx/Product.vue'),
          name: 'pxProduct',
          meta: { isLogin: true, title: '品信产品页' }
        },
        {
          path: '/hspx/product/add',
          component: () => import('@/views/hspx/ProductAdd.vue'),
          name: 'pxProductAdd',
          meta: { isLogin: true, title: '品信产品添加页' }
        },
        {
          path: '/hspx/product/edit/:id',
          component: () => import('@/views/hspx/ProductEdit.vue'),
          name: 'pxProductEdit',
          meta: { isLogin: true, title: '品信产品编辑页' }
        },
        {
          path: '/hspx/product/preview/:id',
          component: () => import('@/views/hspx/ProductPreview.vue'),
          name: 'pxProductPreview',
          meta: { isLogin: true, title: '品信产品预览页' }
        },
        {
          path: '/hspx/inquiry',
          component: () => import('@/views/hspx/Inquiry.vue'),
          name: 'pxInquiry',
          meta: { isLogin: true, title: '品信咨询页' }
        },
        {
          path: '/hspx/user',
          component: () => import('@/views/hspx/User.vue'),
          name: 'pxUser',
          meta: { isLogin: false, title: '品信用户页' }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isLogin =
    localStorage.getItem('access_token') && localStorage.getItem('login_status')
  if (to.meta.isLogin) {
    if (isLogin) {
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    next()
  }
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
