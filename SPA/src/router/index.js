import { createRouter, createWebHistory } from 'vue-router'
import CarouselComponent from '@/components/carouselComponent.vue'
import testPage from "@/pages/testPage.vue";
import Contact from "@/pages/Contact.vue";

const router = createRouter({
	routes: [
		{ path: '/testpage', component: testPage },
		{ path: '/contact', component: Contact }],
    {path : '/accueil', component : CarouselComponent},
	history: createWebHistory()
    
})

export default router
