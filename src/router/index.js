import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import my from '@/pages/my'
// import news from '@/pages/news'
import noFound from '@/pages/404'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is_active',/*导航激活项_自定义class*/
  scrollBehavior: (to, from, savePosition) => {
    // console.log(to, from, savePosition);
  },
  routes: [
    {
      path: '/',
      component: home,
      meta: {
        index: 0
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/news',
      // name: 'news',
      component: resolve => require([ '@/pages/news' ], resolve)
      ,
      children: [
        {
          path: '',              /*path为空,则设置成子路由的默认选中项*/
          name: '体育新闻_默认',
          component: resolve => require([ '@/pages/all_news/sports' ], resolve),
          meta: {
            index: 1
          }
        },
        {
          path: 'social',
          // path: '/social',   /*不显示根路径名称*/
          name: '社会新闻',
          component: resolve => require([ '@/pages/all_news/social' ], resolve)
        },
        {
          path: 'entertainment',
          // path: '/entertainment',   /*不显示根路径名称*/
          name: '娱乐新闻',
          component: resolve => require([ '@/pages/all_news/entertainment' ], resolve)
        }
      ]
    },
    {
      path: '/my',
      name: 'my',
      meta: {
        index: 2
      },
      components: {
        default: my,
        slider: resolve => require([ '@/pages/my_slider' ], resolve)
      }
    },
    {
      path: '/user/:user_tip?/:user_Id?',
      name: 'user',
      meta: {
        index: 3
      },
      component: resolve => require([ '@/pages/user' ], resolve)
    }
    ,
    /*无效路径处理*/
    {
      path: '*',
      // component:noFound
      redirect: home
    }
  ]
});
/*router.beforeEach((to,from,next)=>{
  console.log(to, from, next);
  next()
});*/
export default router
