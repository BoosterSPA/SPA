import { createRouter, createWebHistory } from 'vue-router'
import adoptionPage from "@/pages/adoptionPage.vue";
import allAnimalsPage from "@/pages/allAnimalsPage.vue";
import adminPage from "@/pages/adminPage.vue";
import catPage from "@/pages/catPage.vue";
import dogPage from "@/pages/dogPage.vue";

const router = createRouter({
	routes: [
		{ path: '/adoptionPage', component: adoptionPage },
		{ path: '/adminPage', component: adminPage },
		{ path: '/allAnimalsPage', component: allAnimalsPage },
		{ path: '/catPage', component: catPage },
		{ path: '/dogPage', component: dogPage }
	],

	history: createWebHistory()
})

export default router
