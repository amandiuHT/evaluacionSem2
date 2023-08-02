import { createRouter, createWebHistory } from 'vue-router'
import RegistroViewVue from '../views/RegistroView.vue'
import LoginViewVue from '../views/LoginView.vue'
import ContenidoViewVue from '../views/ContenidoView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/registro',
      name: 'registro',
      component: () => import('../views/RegistroView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
    ,{
      path: '/contenido',
      name: 'contenido',
      component: () => import('../views/ContenidoView.vue')
    },
    
  ]
})

export default router
