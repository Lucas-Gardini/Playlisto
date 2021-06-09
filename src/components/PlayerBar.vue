<template>
	<div class="PlayerBar">
		<div class="track-container">
			<div style="width: 99%; height: 100px; ">
				<img v-if="musicThumb.length > 0" :src="musicThumb" style="height: 99px;" />
			</div>
			<div style="display: flex">
				<p style="margin: auto; margin-left: 10px">{{ name }}</p>
			</div>
		</div>
		<div class="controller-container"></div>
		<div class="volume">
			<div style="width: 50%">
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
	data() {
		return {
			volume: Number(localStorage.volume) || 100,
		};
	},
	methods: {
		changeVolume() {
			localStorage.volume = this.volume;
			console.log(this.volume);
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
	grid-template-columns: 40% 60%;
	grid-template-rows: auto;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	grid-area: 1 / 1 / 2 / 2;
}
.controller-container {
	grid-area: 1 / 2 / 2 / 3;
}
.volume {
	grid-area: 1 / 3 / 2 / 4;
	display: grid;
	place-items: center;
}
</style>
