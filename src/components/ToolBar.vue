<template>
	<div class="ToolBar">
		<span style="width: 27px; height: 25px">PLAYLISTO</span>
		<button @click="manageWindow('MINIMIZE')" class="tb-minimize">
			<i class="bx bx-minus"></i>
		</button>
		<button @click="manageWindow('MAXIMIZE')" class="tb-maximize">
			<i class="bx bx-checkbox"></i>
		</button>
		<button @click="manageWindow('CLOSE')" class="tb-close">
			<i class="bx bx-x"></i>
		</button>
	</div>
</template>

<script>
const { ipcRenderer } = require("electron");
export default {
	methods: {
		async manageWindow(method) {
			await ipcRenderer.invoke("ManageWindow", {
				method,
			});
		},
	},
};
</script>

<style>
@font-face {
	font-family: "Infinite Justice";
	src: url("../assets/font/InfiniteJustice.eot");
	src: url("../assets/font/InfiniteJustice.eot?#iefix") format("embedded-opentype"),
		url("../assets/font/InfiniteJustice.woff2") format("woff2"),
		url("../assets/font/InfiniteJustice.woff") format("woff"),
		url("../assets/font/InfiniteJustice.ttf") format("truetype"),
		url("../assets/font/InfiniteJustice.svg#InfiniteJustice") format("svg");
	font-weight: normal;
	font-style: normal;
	font-display: swap;
}

.ToolBar {
	position: fixed;
	top: 0%;
	right: 0%;
	min-width: 100%;
	max-width: 100%;
	text-align: right;
	background-color: #202020;
	-webkit-app-region: drag;
	z-index: 9;
}

.ToolBar span {
	position: absolute;
	top: 0%;
	left: 0%;
	margin-top: 5px;
	margin-left: 5px;
	font-family: "Infinite Justice", sans-serif;
}

.ToolBar img {
	position: absolute;
	top: 0%;
	left: 0%;
}

.ToolBar button {
	background-color: none;
	border: 0px;
	background-color: #202020;
	color: white;
	-webkit-app-region: none !important;
	outline: none !important;
	font-size: larger;
}

.ToolBar button.tb-minimize:hover {
	background-color: #303030;
}

.ToolBar button.tb-maximize:hover {
	background-color: #303030;
}

.ToolBar button.tb-close:hover {
	background-color: red;
}

.ToolBar button i {
	margin-top: 3px;
}
</style>
