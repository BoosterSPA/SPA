import { createRouter, createWebHistory } from 'vue-router'
import adoptionPage from "@/pages/adoptionPage.vue";
import adminPage from "@/pages/adminPage.vue";

const router = createRouter({
	routes: [
		{ path: '/adoptionPage', component: adoptionPage },
		{ path: '/adminPage', component: adminPage }],

	history: createWebHistory()
})

export default router
