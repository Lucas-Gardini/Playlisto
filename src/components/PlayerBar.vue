<template>
	<div class="PlayerBar">
		<audio :src="musicUrl" controls></audio>
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
			<div style="width: 100%; display: flex; margin-top: 20px">
				<div style="margin: auto">
					<el-button
						style="background-color: transparent; color: #fbfbfb"
						:disabled="duration.length > 0 ? false : true"
						size="mini"
						icon="bx bx-shuffle"
						circle
					></el-button>
					<el-button
						style="background-color: transparent; color: #fbfbfb"
						:disabled="duration.length > 0 ? false : true"
						size="mini"
						icon="bx bx-skip-previous"
						circle
					></el-button>
					<el-button
						:disabled="duration.length > 0 ? false : true"
						@click="pausePlayMusic"
						type="danger"
						:icon="isPlaying ? 'bx bx-pause' : 'bx bx-play'"
						circle
					></el-button>
					<el-button
						style="background-color: transparent; color: #fbfbfb"
						:disabled="duration.length > 0 ? false : true"
						size="mini"
						icon="bx bx-skip-next"
						circle
					></el-button>
					<el-button
						style="background-color: transparent; color: #fbfbfb"
						:disabled="duration.length > 0 ? false : true"
						size="mini"
						icon="bx bx-repeat"
						circle
					></el-button>
				</div>
			</div>
			<div style="display: flex; flex-direction: row; width: 100%; margin-top: 10px">
				<div
					v-if="duration.length > 0"
					style="display: flex; flex-direction: row; margin: auto"
				>
					<div>{{ toMinSecTime(currentDuration) }}</div>
					<input
						style="width: 200px"
						type="range"
						@change="changeCurrentDuration()"
						v-model="currentDuration"
						:max="durationInSeconds"
						:maxlength="durationInSeconds"
						:min="0"
						:minlength="0"
					/>
					<div>{{ fixedDuration }}</div>
				</div>
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
import { youtubeDownloader } from "../utils/ytdl";

export default {
	props: {
		name: String,
		channel: String,
		musicThumb: String,
		link: String,
		duration: String,
	},
	mounted() {
		this.ytDownloader.start();
		this.manageWordSize();
		window.addEventListener("resize", this.manageWordSize);
	},
	data() {
		return {
			ytDownloader: new youtubeDownloader(),
			musicUrl: "",
			volume: Number(localStorage.volume) || 100,
			durationInSeconds: 0,
			fixedDuration: "",
			currentDuration: 0,
			isPlaying: false,
			isWindowSizeSmall: false,
		};
	},
	watch: {
		async name() {
			this.musicUrl = "";
			const returnedUrl = await this.ytDownloader.download(this.link, this.name);
			this.musicUrl = `file:///${returnedUrl}`;
			console.log(this.musicUrl);
			this.isPlaying = true;
			this.durationInSeconds = 0;
			this.fixedDuration = "";
			this.currentDuration = 0;
			this.convertDuration();
		},
	},
	methods: {
		async pausePlayMusic() {
			// this.isPlaying = true;
		},
		changeVolume() {
			localStorage.volume = this.volume;
			console.log(this.volume);
		},
		changeCurrentDuration() {
			console.log(this.currentDuration);
		},
		manageWordSize() {
			if (window.innerWidth < 1000) {
				this.isWindowSizeSmall = true;
			} else {
				this.isWindowSizeSmall = false;
			}
		},
		convertDuration() {
			let durationSplitted = this.duration.split(":");
			durationSplitted = Number(durationSplitted[0]) * 60 + Number(durationSplitted[1]);
			this.durationInSeconds = durationSplitted;
			if (this.duration.length === 4) {
				this.fixedDuration = `0${this.duration}`;
			} else {
				this.fixedDuration = this.duration;
			}
		},
		toMinSecTime(time) {
			var mins = ~~((time % 3600) / 60);
			var secs = ~~time % 60;

			// Output like "1:01" or "4:03:59" or "123:03:59"
			var ret = "";
			// if (hrs > 0) {
			// 	ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
			// }
			ret += (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "");
			ret += "" + secs;
			return ret;
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
	/* display: grid;
	place-items: center; */
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
