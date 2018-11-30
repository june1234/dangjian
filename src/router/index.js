/*
* @Author: xiaju
* @Date:   2018-09-17 14:21:56
* @Last Modified by:   xiaju
* @Last Modified time: 2018-10-23 14:51:17
*/
import Vue from 'vue'
import Router from 'vue-router'
// import { getToken } from '@/utils/auth'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'index',
      component: () => import('@/components/1.vue'),
      children: [{
        path: 'index',
        component: () => import('@/components/index.vue')
      },
      {
        path: 'content',
        redirect: 'speech',
        component: () => import('@/components/Layout.vue'),
        children: [
          {
            path: 'speech',
            component: () => import('@/components/content/Speech.vue')
          },
          {
            path: 'specialEducation',
            component: () => import('@/components/content/SpecialEducation.vue')
          },
          {
            path: 'learningDocuments',
            component: () => import('@/components/content/LearningDocuments.vue')
          },
          {
            path: 'policies',
            component: () => import('@/components/content/Policies.vue')
          }, {
            path: 'counselingMaterials',
            component: () => import('@/components/content/CounselingMaterials.vue')
          }, {
            path: 'interactivePlatform',
            component: () => import('@/components/content/InteractivePlatform.vue')
          }
        ]
      }
      ]
    },
    {
      path: '/BackgroundManagement',
      component: () => import('@/components/backgroundIndex/BackgroundIndex.vue'),
      redirect: 'index',
      meta: {
        requireAuth: true
      },
      children: [{
        path: 'index',
        component: () => import('@/components/backgroundManagement/index.vue')
      }, {
        path: 'moudle',
        component: () => import('@/components/backgroundManagement/moudle.vue')
      }
      ]
    },
    {
      path: '/login',
      component: () => import('@/components/index/Login.vue')
    },
    {
      path: '/PDf',
      name: 'PDF',
      component: () => import('@/components/PDf.vue')
    }
  ]
})
export default router

// router.beforeEach((to, from, next) => {
//   // next()
//   if (getToken()) {
//     next()
//   } else {
//     next('/login')
//   }
// if (getToken()) {
//   if (to.path === '/login') {
//     next('/BackgroundManagement')
//   } else {
//     next()
//   }
// } else {
//   // if (whiteList.indexOf(to.path) !== -1) {
//   //   next()
//   // } else {
//   //   next('/login')
//   // }
// }
// })
// router.afterEach(() => {
// })
