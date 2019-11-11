import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue'),

    children:[{
      path: '/home/ll',
      name: 'll',
      component: () => import('../views/ll.vue')
    }]
  },{
    path:'*',
    redirect:'/home/ll'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
