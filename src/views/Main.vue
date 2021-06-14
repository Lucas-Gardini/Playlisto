<template>
	<div class="container">
		<div class="side-bar" style="background-color: purple">
			<el-menu
				style="border-right: none transparent; min-height: 100%"
				background-color="#121212"
				text-color="#fff"
				active-text-color="#F56C6C"
				default-active="1"
				class="el-menu-vertical-demo"
			>
				<el-menu-item index="1">
					<i style="margin-right: 5px; font-size: larger" class="bx bx-home-alt"></i>
					<span>Início</span>
				</el-menu-item>
				<el-menu-item index="2">
					<i style="margin-right: 5px; font-size: larger" class="bx bxs-playlist"></i>
					<span>Suas músicas</span>
				</el-menu-item>
				<el-menu-item index="3">
					<i style="margin-right: 5px; font-size: larger" class="bx bxs-cog"></i>
					<span>Configurações</span>
				</el-menu-item>
			</el-menu>
		</div>
		<div class="content">
			<el-dropdown style="position: fixed; top: 5%; right: 2.5%; z-index: 999;">
				<el-button type="text"><i class="bx bxs-playlist el-icon--right"></i></el-button>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item v-for="(music, i) in playlist" :key="i">
							<el-row :gutter="20" style="margin-bottom: 5px !important">
								<el-col :span="20">{{
									`${String(music.title).substring(0, 40)}...`
								}}</el-col>
								<el-col :span="2">
									<el-button
										type="text"
										style="color: red"
										icon="el-icon-delete"
										circle
										@click="removeFromPlaylist(i)"
									></el-button>
								</el-col>
							</el-row>
						</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
			<div
				:class="typeof ytSearchResults[0] === 'undefined' ? 'fullsize-hidden' : ''"
				style="display: grid; width: 100%; place-items: left; padding-left: 10px; padding-top: 10px; margin-bottom: 20px"
			>
				<el-row :gutter="1" style="width: 600px;">
					<el-col :span="12"
						><el-input
							placeholder="Type something"
							prefix-icon="el-icon-search"
							v-model="args"
							@keypress.enter="search()"
							clearable
						>
						</el-input
					></el-col>
					<el-col :span="6" style="margin-left: 5px">
						<el-button @click="search()" icon="el-icon-search" circle></el-button>
					</el-col>
				</el-row>
			</div>
			<div>
				<el-container
					v-for="(video, i) in ytSearchResults"
					:key="i"
					style="padding: 0 !important"
				>
					<el-aside width="200px">
						<el-image
							style="width: 200px; height: auto"
							:src="video.bestThumbnail.url"
							fit="cover"
						></el-image>
					</el-aside>
					<el-main
						><div style="padding: 0 !important; padding-left: 10px">
							<span>{{ video.title }} | {{ video.duration }}</span>
							<div class="bottom">
								<time class="time">{{ video.author.name }}</time
								><br />
								<div style="margin-top: 10px">
									<el-button
										type="danger"
										icon="bx bx-play"
										circle
										size="mini"
										@click="changeCurrentMusic(i)"
									></el-button>
									<el-button
										type="text"
										icon="bx bx-list-plus"
										circle
										@click="addToPlaylist(i)"
									></el-button>
									<el-button
										type="text"
										icon="bx bxs-download"
										circle
										@click="selectSaveLocation(video.url, video.title)"
									></el-button>
								</div>
							</div></div
					></el-main>
				</el-container>
				<!-- <ul>
					<li>{{ video.title }}</li>
					<li>{{ video.author.name }}</li>
					<li><img :src="video.bestThumbnail.url" width="32" height="32" /></li>
					<li>{{ video.description }}</li>
					<li>{{ video.duration }}</li>
					<li><a :href="video.url" target="_blank">ass</a></li>
					<li>{{ video.views }}</li>
					<li><button @click="changeCurrentMusic(i)">play</button></li>
				</ul> -->
			</div>
		</div>
		<div class="player" style="background-color: whitesmoke">
			<player-bar
				:name="music.name"
				:channel="music.channel"
				:musicThumb="music.musicThumb"
				:link="music.link"
				:duration="music.duration"
				:playlist="playlist"
				@musicFinished="nextMusic()"
				@nextMusic="nextMusic()"
				@previousMusic="previousMusic()"
			/>
		</div>
	</div>
</template>

<script>
import PlayerBar from "../components/PlayerBar.vue";
import { youtubeSearcher } from "../utils/ytsr";
import { ipcRenderer } from "electron";
import ytdl from "ytdl-core";
import slugify from "slugify";
import fs from "fs";
export default {
	components: {
		PlayerBar,
	},
	data() {
		return {
			ytSearcher: new youtubeSearcher(),
			ytSearchResults: [],
			args: "",
			music: {
				name: "",
				channel: "",
				musicThumb: "",
				link: "",
				duration: "",
			},
			playlist: [],
			currentMusic: 0,
		};
	},
	async mounted() {
		await this.ytSearcher.start();
	},
	methods: {
		async search() {
			const loading = this.$loading({
				lock: false,
				text: "Buscando Vídeos",
				spinner: "bx bx-loader-alt loading",
				background: "rgba(0, 0, 0, 0.7)",
			});
			this.loading = true;
			this.ytSearchResults = (await this.ytSearcher.search(this.args)).items;
			loading.close();
			this.loading = false;
		},
		changeCurrentMusic(videoIndex, isPlaylist = false) {
			let chosenVideo = null;
			let okToContinue = false;
			if (isPlaylist) {
				// console.log(videoIndex);
				// console.log(this.playlist.length);
				if (
					videoIndex > this.playlist.length ||
					videoIndex <= -1 ||
					videoIndex === this.playlist.length
				) {
					okToContinue = false;
				} else {
					okToContinue = true;
				}
				// console.log(okToContinue);
				chosenVideo = this.playlist[videoIndex];
			} else {
				okToContinue = true;
				chosenVideo = this.ytSearchResults[videoIndex];
				this.playlist = [chosenVideo];
			}
			if (okToContinue) {
				this.music = {
					name: chosenVideo.title,
					channel: chosenVideo.author.name,
					musicThumb: chosenVideo.bestThumbnail.url,
					link: chosenVideo.url,
					duration: chosenVideo.duration,
				};
				return true;
			} else {
				return false;
			}
		},
		previousMusic() {
			const okToContinue = this.changeCurrentMusic(this.currentMusic - 1, true);
			if (okToContinue) {
				this.currentMusic = this.currentMusic - 1;
			}
		},
		nextMusic() {
			const okToContinue = this.changeCurrentMusic(this.currentMusic + 1, true);
			if (okToContinue) {
				this.currentMusic = this.currentMusic + 1;
			}
		},
		addToPlaylist(videoIndex) {
			this.playlist.push(this.ytSearchResults[videoIndex]);
			this.playlist = [...this.playlist];
		},
		removeFromPlaylist(videoIndex) {
			this.playlist.splice(videoIndex, 1);
			this.playlist = [...this.playlist];
		},
		async selectSaveLocation(videoUrl, musicName) {
			await ipcRenderer.send("saveFileLocation");
			await ipcRenderer.once("returnedSaveLocation", (sender, response) => {
				if (response[0]) {
					console.log("User has cancelled");
				} else {
					musicName = musicName.replaceAll("*", "");
					const downloadPath = `${response[1]}/${slugify(musicName)}.mp3`;
					this.downloadMusic(videoUrl, downloadPath);
				}
			});
		},
		async downloadMusic(videoUrl, path) {
			const loading = this.$loading({
				lock: false,
				text: "Fazendo Download...",
				spinner: "bx bxs-download",
				background: "rgba(0, 0, 0, 0.7)",
			});
			let file;
			ytdl(videoUrl, {
				filter: "audioonly",
			}).pipe((file = fs.createWriteStream(path)));
			file.on("finish", () => {
				loading.close();
				console.log("Downloaded");
			});
		},
	},
	name: "Home",
};
</script>

<style>
.container {
	display: grid;
	grid-template-areas:
		"sidebar content"
		"player player";

	grid-template-rows: auto auto;
	grid-template-columns: 20% auto;

	height: calc(100vh - 30px);
}

.side-bar {
	grid-area: sidebar;
}

.content {
	grid-area: content;
	overflow-y: auto;
	height: 95vh;
	overflow-x: hidden;
}

.player {
	grid-area: player;
	position: absolute;
	bottom: 0%;
	width: 100%;
	min-height: 100px;
}

.loading {
	color: red;
	animation: spin 1s infinite;
}
@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	50% {
		transform: rotate(360deg);
	}
	100% {
		transform: rotate(0deg);
	}
}

.el-loading-spinner i {
	color: #f56c6c !important;
}

.el-loading-text {
	color: #f56c6c !important;
}

.fullsize-hidden {
	overflow-y: hidden !important;
}

.playBtn {
	position: absolute;
	top: 60%;
	left: 50%;
	transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	opacity: 0;
}
</style>
