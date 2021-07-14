import { createRouter, createWebHashHistory } from "vue-router";
import Main from "../views/Test.vue";

const routes = [
	{
		path: "/",
		name: "Main",
		component: Main,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
