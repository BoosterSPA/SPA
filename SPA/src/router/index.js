import { createRouter, createWebHistory } from 'vue-router'
import testPage from "@/pages/testPage.vue";

const router = createRouter({
	routes: [
		{ path: '/testpage', component: testPage }],
	history: createWebHistory()
})

export default router
