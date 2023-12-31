import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/table',
      name:'tab',
      component: ()=> import('../views/TableView.vue')
    },{
      path:'/age',
      name:'age',
      component: ()=> import('../views/AgeView.vue')
    },{
      path:'/stu',
      name:'student',
      component: ()=> import('../views/StuView.vue')
    },{
      path:'/product',
      name:'product',
      component: ()=> import('../views/ProductsView.vue')
    }
  ]
})

export default router
