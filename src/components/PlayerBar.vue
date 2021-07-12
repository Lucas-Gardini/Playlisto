<template>
	<div class="PlayerBar" v-loading="true" element-loading-text=" ">
		<audio ref="musicPlayer" :src="musicUrl"></audio>
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
					<a class="link2" @click="openVideoUrl()" href="javascript:void(0)"
						><strong>{{
							isWindowSizeSmall ? `${name.substring(0, 22)}...` : name
						}}</strong></a
					>
				</p>
				<p
					v-if="channel.length > 0"
					style="margin: auto; margin-left: 10px; margin-top: 5px"
				>
					<a class="link" @click="openChannelUrl()" href="javascript:void(0)"
						><strong>{{
							isWindowSizeSmall ? `${channel.substring(0, 6)}...` : channel
						}}</strong></a
					>
				</p>
			</div>
		</div>
		<div class="controller-container">
			<div style="width: 100%; display: flex; margin-top: 20px;">
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
						:disabled="!canPlay"
						size="mini"
						icon="bx bx-skip-previous"
						@click="previousMusic()"
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
						:disabled="!canPlay"
						@click="$emit('nextMusic')"
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
						@mousedown="stopBar()"
						@mouseup="continueBar()"
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
				<el-popover
					v-if="this.name.length > 0"
					placement="top-start"
					:width="10"
					trigger="hover"
					content="Ver a letra"
				>
					<template #reference>
						<i
							:class="
								gettingLyrics
									? 'bx bx-loader-alt getLyrics loading'
									: 'bx bxs-microphone getLyrics'
							"
							@click="getLyrics()"
						></i>
					</template> </el-popover
				>&nbsp;
				<i
					@click="mute()"
					style="cursor: pointer"
					v-if="volume >= 50"
					class="bx bxs-volume-full"
				></i>
				<i
					@click="mute()"
					style="cursor: pointer"
					v-else-if="volume >= 30 && volume <= 49"
					class="bx bxs-volume-low"
				></i>
				<i
					@click="mute()"
					style="cursor: pointer"
					v-else-if="volume > 0 && volume <= 29"
					class="bx bxs-volume"
				></i>
				<i @click="mute()" style="cursor: pointer" v-else class="bx bxs-volume-mute"></i>
				<input v-model="volume" type="range" />
			</div>
		</div>
		<div :class="lyricsClass">
			<el-page-header
				@back="lyricsClass = `lyrics`"
				:content="`Letra da música: ${this.name}`"
				style="border-bottom: 1px solid black; margin-right: 40px"
			>
			</el-page-header>
			<div>
				<p v-html="lyrics"></p>
			</div>
		</div>
	</div>
</template>

<script>
import { youtubeDownloader } from "../utils/ytdl";
import lyrics from "../utils/lyrics";

export default {
	props: {
		name: String,
		channel: String,
		channelUrl: String,
		musicThumb: String,
		link: String,
		duration: String,
		playlist: Array,
	},
	mounted() {
		const loaderMask = document.querySelector(".el-loading-mask");
		loaderMask.className = "el-loading-mask hidden";
		loaderMask.innerHTML = `<div class="har-loader">
									<div class="har-sound-1"></div>
									<div class="har-sound-2"></div>
									<div class="har-sound-3"></div>
									<div class="har-sound-4"></div>
									<div class="har-sound-5"></div>
									<div class="har-sound-6"></div>
									<div class="har-sound-7"></div>
									<div class="har-sound-8"></div>
									<div class="har-sound-9"></div>
								</div>`;

		this.ytDownloader.start();
		this.ytDownloader.deleteMusics();
		this.manageWordSize();
		window.addEventListener("resize", this.manageWordSize);
		this.verifyMusicDuration = setInterval(() => {
			this.currentDuration = this.musicAudio.currentTime;
		}, 1000);
	},
	data() {
		return {
			ytDownloader: new youtubeDownloader(),
			musicUrl: "",
			musicAudio: new Audio(),
			volume: Number(localStorage.volume) || 100,
			durationInSeconds: 0,
			verifyMusicDuration: null,
			fixedDuration: "",
			currentMusic: 0,
			currentDuration: 0,
			isPlaying: false,
			isWindowSizeSmall: false,
			canPlay: false,
			lyrics: "",
			lyricsClass: "lyrics",
			sameMusic: false,
			gettingLyrics: false,
		};
	},
	watch: {
		async name() {
			document.querySelector(".el-loading-mask.hidden").className = "el-loading-mask";
			this.sameMusic = false;
			this.canPlay = false;
			setTimeout(() => {
				this.canPlay = true;
			}, 800);
			this.musicUrl = "";
			if (this.musicAudio !== null) {
				this.musicAudio.pause();
			}
			const returnedUrl = await this.ytDownloader.download(this.link, this.name);
			this.musicAudio = new Audio(returnedUrl);
			this.musicAudio.volume = this.volume / 100;
			this.musicAudio.play();
			this.musicAudio.onended = () => {
				this.sameMusic = false;
				this.stopBar();
				this.isPlaying = false;
				if (this.playlist.length > 0 && this.currentMusic <= this.playlist.length) {
					this.isPlaying = true;
					this.continueBar();
					this.$emit("musicFinished");
				}
			};
			this.isPlaying = true;
			this.durationInSeconds = 0;
			this.fixedDuration = "";
			this.currentDuration = this.musicAudio.currentTime;
			this.convertDuration();
			document.querySelector(".el-loading-mask").className = "el-loading-mask hidden";
		},
		async playlist() {
			console.log("Playlist changed");
		},
		volume() {
			this.musicAudio.volume = this.volume / 100;
			localStorage.volume = this.volume;
		},
	},
	methods: {
		openChannelUrl() {
			require("electron").shell.openExternal(this.channelUrl);
		},
		openVideoUrl() {
			require("electron").shell.openExternal(this.link);
		},
		openLyricsUrl(url) {
			require("electron").shell.openExternal(url);
		},
		previousMusic() {
			this.$emit("previousMusic");
			this.currentDuration = 0;
			this.changeCurrentDuration();
		},
		stopBar() {
			clearInterval(this.verifyMusicDuration);
		},
		continueBar() {
			this.verifyMusicDuration = setInterval(() => {
				this.currentDuration = this.musicAudio.currentTime;
			}, 1000);
		},
		mute() {
			if (this.volume <= 0) {
				this.volume = 10;
			} else {
				this.volume = 0;
			}
		},
		async getLyrics() {
			this.gettingLyrics = true;
			if (!this.sameMusic) {
				this.sameMusic = true;
				this.lyrics = await lyrics(this.name);
				if (this.lyrics === "No Lyrics Found.") {
					this.lyrics = `<strong>Não encontrei a letra :(, tente aqui: <button id="goToLyrics">google</button></strong>`;
					setTimeout(() => {
						document.getElementById("goToLyrics").addEventListener(
							"click",
							() => {
								this.openLyricsUrl(
									`https://www.google.com/search?q=letra+m%C3%BAsica+${this.name}`
								);
							},
							500
						);
					});
				}
			}
			this.gettingLyrics = false;
			this.lyricsClass = "lyrics active";
		},
		async pausePlayMusic() {
			if (this.musicAudio.paused) {
				this.continueBar();
				this.isPlaying = true;
				this.musicAudio.play();
			} else {
				this.stopBar();
				this.isPlaying = false;
				this.musicAudio.pause();
			}
		},
		changeCurrentDuration() {
			this.musicAudio.currentTime = this.currentDuration;
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
			var ret = "";
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
	/* z-index: 5; */
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

.el-loading-mask {
	background-color: rgba(18, 18, 18, 0.9) !important;
}

.har-loader {
	height: 100%;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 10px;
}
.har-loader div {
	margin: 0 1.5px;
	background-color: #333;
	height: 100%;
	width: 6px;
	background: #f56c6c;
	vertical-align: middle;
	border-radius: 10px;
	display: inline-block;
	-webkit-animation: har-loader-stretch 2s infinite ease-in-out;
	animation: har-loader-stretch 2s infinite ease-in-out;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.har-loader .har-sound-5 {
	-webkit-animation-delay: -1.1s;
	animation-delay: -1.1s;
}
.har-loader .har-sound-4,
.har-loader .har-sound-6 {
	-webkit-animation: har-loader-stretch-twice 2s infinite ease-in-out;
	animation: har-loader-stretch-twice 2s infinite ease-in-out;
	-webkit-animation-delay: -0.9s;
	animation-delay: -0.9s;
}
.har-loader .har-sound-2,
.har-loader .har-sound-8 {
	-webkit-animation-delay: -0.7s;
	animation-delay: -0.7s;
}
.har-loader .har-sound-1,
.har-loader .har-sound-9 {
	-webkit-animation-delay: -0.5s;
	animation-delay: -0.5s;
}
.har-loader .har-sound-3,
.har-loader .har-sound-7 {
	-webkit-animation-delay: -0.4s;
	animation-delay: -0.4s;
}

@keyframes har-loader-stretch-twice {
	0%,
	35%,
	70%,
	100% {
		height: 15px;
	}
	20%,
	50% {
		height: 60px;
	}
}
@-webkit-keyframes har-loader-stretch {
	0%,
	40%,
	100% {
		height: 15px;
	}
	20% {
		height: 60px;
	}
}
@keyframes har-loader-stretch {
	0%,
	40%,
	100% {
		height: 15px;
	}
	20% {
		height: 60px;
	}
}

.hidden {
	opacity: 0;
	display: none;
}

.link {
	color: #fff;
	text-decoration: bold;
}
.link:hover {
	text-align: bold;
}

.link2 {
	color: #fff;
	text-decoration: none;
}
.link2:hover {
	text-decoration: underline;
}

.lyrics {
	transition: all 1s;
	position: fixed;
	top: 101%;
	left: 0%;
	background-color: #fff;
	color: black;
	min-width: 99%;
	max-width: 99%;
	min-height: 38vw;
	max-height: 38vw;
	z-index: -5;
	padding: 40px;
	overflow: scroll;
}

.lyrics.active {
	transition: all 1s;
	top: 25px;
}
.getLyrics {
	transition: all 0.4s;
	color: #fff;
}
.getLyrics:hover {
	transition: all 0.6s;
	color: #f56c6c;
	cursor: pointer;
}
.loading {
	animation: load 1s infinite;
}
@keyframes load {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

.el-popover--plain {
	z-index: 129491235492493592349623946 !important;
}
</style>
