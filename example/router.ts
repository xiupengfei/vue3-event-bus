/*
 * @Descripttion: router
 * @Version: v0.1
 * @Author: pengfei.xiu
 * @Date: 2022-01-23 12:40:17
 * @LastEditors: pengfei.xiu
 * @LastEditTime: 2022-01-23 12:44:05
 */
import type { RouteRecordRaw } from 'vue-router'

import { createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('./views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./views/About.vue'),
  },
]
// app router
const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router
