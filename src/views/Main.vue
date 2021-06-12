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
										@click="changeCurrentMusic(i)"
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
			/>
		</div>
	</div>
</template>

<script>
import PlayerBar from "../components/PlayerBar.vue";
import { youtubeSearcher } from "../utils/ytsr";
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
		changeCurrentMusic(videoIndex) {
			const chosenVideo = this.ytSearchResults[videoIndex];
			this.music = {
				name: chosenVideo.title,
				channel: chosenVideo.author.name,
				musicThumb: chosenVideo.bestThumbnail.url,
				link: chosenVideo.url,
				duration: chosenVideo.duration,
			};
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
