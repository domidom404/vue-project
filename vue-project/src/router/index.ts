import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // Define o tipo de histórico (hash mode)
  history: createWebHashHistory(),
  routes: [
    {
      // Rota para a página inicial
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      // Rota para a página "About"
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      // Rota para a página "Serviços"
      path: '/servicos',
      name: 'servicos',
      component: () => import('../views/ServicesView.vue')
    }
  ],
  
})
// Exporta o roteador para ser usado na aplicação principal
export default router
