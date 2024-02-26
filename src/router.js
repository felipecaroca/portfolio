import {createRouter, createWebHashHistory} from 'vue-router'

import home from './views/Home'
import tcu from './views/legal/tcu.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/tcu',
      name: 'tcu',
      component: tcu
    }
  ]
})

export default router
