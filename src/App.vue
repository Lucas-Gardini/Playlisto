<template>
	<tool-bar />
	<router-view v-slot="{ Component }">
		<transition name="transition">
			<component :is="Component" />
		</transition>
	</router-view>
</template>

<script>
import { ipcRenderer } from "electron";
import ToolBar from "./components/ToolBar.vue";
export default {
	components: {
		ToolBar,
	},
	mounted() {
		ipcRenderer.send("app-loaded");
	},
};
</script>

<style>
body {
	background-color: #191819;
	padding: 0 !important;
	margin: 0 !important;
}

#app {
	margin-top: 30px;
	color: #fbfbfb;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.transition-fade-enter-active {
	transition: all 0.3s ease;
}
.transition-fade-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.transition-fade-enter, .transition-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
	transform: translateX(10px);
	opacity: 0;
}
</style>
