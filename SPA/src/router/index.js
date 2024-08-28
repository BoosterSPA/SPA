import { createRouter, createWebHistory } from 'vue-router'
import CarouselComponent from '@/components/carouselComponent.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path : '/accueil', component : CarouselComponent}
  ]
})

export default router
