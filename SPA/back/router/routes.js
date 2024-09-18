import { createRouter, createWebHistory } from 'vue-router'
// import adoptionPage from "@../pages/adoptionPage.vue";
import adoptionPage from "@../../front/src/pages/adoptionPage.vue";
import allAnimalsPage from "@../../front/src/pages/allAnimalsPage.vue";
import adminPage from "@../../front/src/pages/adminPage.vue";
import catPage from "@../../front/src/pages/catPage.vue";
import Contact from "@../../front/src/pages/Contact.vue";
import HomePage from '@../../front/src/pages/HomePage.vue';
import dogPage from "@../../front/src/pages/dogPage.vue";

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