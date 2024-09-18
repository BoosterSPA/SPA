import { createRouter, createWebHistory } from 'vue-router'
import adoptionPage from "../pages/adoptionPage.vue";
import allAnimalsPage from "../pages/allAnimalsPage.vue";
import adminPage from "../pages/adminPage.vue";
import catPage from "../pages/catPage.vue";
import Contact from "../pages/Contact.vue";
import HomePage from '../pages/HomePage.vue';
import dogPage from "../pages/dogPage.vue";

const router = createRouter({
	routes: [

		{ path: '/contact', component: Contact },
		{ path: '/accueil', component: HomePage },
		{ path: '/adoptionPage', component: adoptionPage },
		{ path: '/adminPage', component: adminPage },
		{ path: '/allAnimalsPage', component: allAnimalsPage },
		{ path: '/catPage', component: catPage },
		{ path: '/dogPage', component: dogPage }
	],

	history: createWebHistory()

})

export default router