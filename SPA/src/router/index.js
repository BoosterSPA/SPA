import { createRouter, createWebHistory } from 'vue-router'
import testPage from "@/pages/testPage.vue";
import Contact from "@/pages/Contact.vue";
import HomePage from '@/pages/HomePage.vue';

const router = createRouter({
	routes: [
		{ path: '/testpage', component: testPage },
		{ path: '/contact', component: Contact },
    {path : '/accueil', component : HomePage}],
	history: createWebHistory()
    
})

export default router
