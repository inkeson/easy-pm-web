import {createRouter, createWebHistory} from 'vue-router'
import apps from './app-routes'  //收集的功能页面路由

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: () => import('@/layout/user-layout.vue'),
			children: [
				{
					path: '',
					redirect: '/flow'
				},
				...apps
			]
		}
	],
	scrollBehavior() {
		return {top: 0};
	},
});

export default router;
