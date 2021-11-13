import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


// 公共路由
export const publicRouter = [
  {
    path:'/',
    component: () => import('@/views/home')
  },
  {
    path:'/numberChange',
    component: () => import('@/views/numberChange'),
    name:'numberChange'
  },
  {
    path: '/waibuChange',
    component: () => import('@/views/waibuChange'),
    name: 'waibuChange'
  },
  {
    path: '/flexCss',
    component: () => import('@/views/flexCss'),
    name: 'flexCss'
  },
  {
    path: '/upload',
    component: () => import('@/views/upload'),
    name: 'upload'
  },
  {
    path: '/changeNumer',
    component: () => import('@/views/changeNumer'),
    name:'changeNumer'
  }
  // {
  //   path: '/redirect',
  //   component: Layout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: '/redirect/:path(.*)',
  //       component: (resolve) => require(['@/views/redirect'], resolve)
  //     }
  //   ]
  // }
]

export default new Router({
  mode:'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: publicRouter
})
