import {createRouter, createWebHashHistory} from 'vue-router'

import home from './views/Home'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})

export default router
