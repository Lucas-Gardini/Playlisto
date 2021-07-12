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
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
* {
	font-family: "Open Sans", sans-serif;
}

body {
	background-color: #191819;
	padding: 0 !important;
	margin: 0 !important;
}

#app {
	margin-top: 30px;
	color: #fbfbfb;
}

::-webkit-scrollbar {
	width: 5px;
	height: 5px;
}
::-webkit-scrollbar-thumb {
	background: linear-gradient(13deg, #f56c6c 14%, #f56c6c 64%);
	border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
	background: linear-gradient(13deg, #f04d4d 14%, #f04d4d 64%);
}
::-webkit-scrollbar-track {
	background: #ffffff;
	border-radius: 5px;
	box-shadow: inset 7px 10px 12px #f0f0f0;
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
