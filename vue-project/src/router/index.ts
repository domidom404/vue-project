import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // Define o tipo de histórico (sem hash na URL -> mais profissional mas precisa ser configurado pra retornar ao index sempre)
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/servicos',
      name: 'servicos',
      component: () => import('../views/ServicesView.vue')
    },
    {
      //rota dinamica pra usuario
      path:'/usuarios/:id',
      name: 'usuarios-editar',
      component: () => import('../views/UserEditView.vue')
    }
  ],
  
})
// Exporta o roteador para ser usado na aplicação principal
export default router
