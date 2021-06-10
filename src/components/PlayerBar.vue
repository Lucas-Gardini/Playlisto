<template>
	<div class="PlayerBar">
		<div class="track-container">
			<div style="width: 99%; height: 100px; display: grid; place-items: center">
				<!-- <img  style="height: 80px; width: 80px" /> -->
				<el-image
					style="width: 100px; height: 100px"
					:src="musicThumb"
					fit="cover"
					v-if="musicThumb.length > 0"
				></el-image>
			</div>
			<div style="display: flex; flex-direction: column">
				<p
					style="margin: auto; margin-left: 10px; margin-bottom: 5px"
					:title="name"
					v-if="name.length > 0"
				>
					{{ isWindowSizeSmall ? `${name.substring(0, 22)}...` : name }}
				</p>
				<p style="margin: auto; margin-left: 10px; margin-top: 5px">{{ channel }}</p>
			</div>
		</div>
		<div class="controller-container">
			<div>
				<el-button size="mini" icon="bx bx-shuffle" circle></el-button>
				<el-button size="mini" icon="bx bx-skip-previous" circle></el-button>
				<el-button type="success" icon="bx bx-play" circle></el-button>
				<el-button size="mini" icon="bx bx-skip-next" circle></el-button>
				<el-button size="mini" icon="bx bx-repeat" circle></el-button>
			</div>
		</div>
		<div class="volume">
			<div style="width: 100%; text-align: right; margin-right: 10px">
				<i v-if="volume >= 50" class="bx bxs-volume-full"></i>
				<i v-else-if="volume >= 30 && volume <= 49" class="bx bxs-volume-low"></i>
				<i v-else-if="volume > 0 && volume <= 29" class="bx bxs-volume"></i>
				<i v-else class="bx bxs-volume-mute"></i>
				<input @change="changeVolume()" v-model="volume" type="range" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		name: String,
		channel: String,
		musicThumb: String,
		link: String,
	},
	mounted() {
		this.manageWordSize();
		window.addEventListener("resize", this.manageWordSize);
	},
	data() {
		return {
			volume: Number(localStorage.volume) || 100,
			isWindowSizeSmall: false,
		};
	},
	methods: {
		changeVolume() {
			localStorage.volume = this.volume;
			console.log(this.volume);
		},
		manageWordSize() {
			if (window.innerWidth < 1000) {
				this.isWindowSizeSmall = true;
			} else {
				this.isWindowSizeSmall = false;
			}
		},
	},
};
</script>

<style>
.PlayerBar {
	background-color: #303133;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: auto;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
}

.track-container {
	display: grid;
	grid-template-columns: 100px auto;
	grid-template-rows: auto;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	grid-area: 1 / 1 / 2 / 2;
}
.controller-container {
	grid-area: 1 / 2 / 2 / 3;
	display: grid;
	place-items: center;
}
.volume {
	grid-area: 1 / 3 / 2 / 4;
	display: grid;
	place-items: center;
}

.controller-button {
	background-color: transparent;
	border: none;
	outline: none;
}
.controller-button.primary {
	background-color: #fbfbfb;
	border-radius: 100%;
	font-size: larger;
}
</style>
