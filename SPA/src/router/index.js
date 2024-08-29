import { createRouter, createWebHistory } from 'vue-router'
import testPage from "@/pages/testPage.vue";
import Contact from "@/pages/Contact.vue";

const router = createRouter({
	routes: [
		{ path: '/testpage', component: testPage },
		{ path: '/contact', component: Contact }],
	history: createWebHistory()
})

export default router
