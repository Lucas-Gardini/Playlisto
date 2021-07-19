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
				<el-menu-item index="1" @click="page = 'main'">
					<i style="margin-right: 5px; font-size: larger" class="bx bx-home-alt"></i>
					<span>Início</span>
				</el-menu-item>
				<el-menu-item index="2" @click="page = 'playlists'">
					<i style="margin-right: 5px; font-size: larger" class="bx bxs-playlist"></i>
					<span>Suas músicas</span>
				</el-menu-item>
				<el-menu-item index="3" @click="page = 'config'">
					<i style="margin-right: 5px; font-size: larger" class="bx bxs-cog"></i>
					<span>Configurações</span>
				</el-menu-item>
			</el-menu>
		</div>
		<transition name="slide-fade">
			<!-- MAIN-PAGE -->
			<div class="content" v-if="page === 'main'">
				<el-button
					v-if="navWidth === '0' && playlist.length > 0"
					@click="openNav()"
					type="text"
					style="position: fixed; top: 5%; right: 2.5%; z-index: 1; color: #f56c6c"
					><i class="bx bxs-playlist el-icon--right"></i
				></el-button>
				<div :style="`width: ${navWidth}`" :class="sidenav">
					<a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
					<span style="font-size: larger; margin-left: 20px"
						><i class="bx bxs-playlist el-icon--right"></i> Lista de Reprodução</span
					>
					<el-row
						v-for="(playlistMusic, i) in playlist"
						:key="i"
						:gutter="20"
						style="margin-bottom: 5px !important; margin-top: 20px !important; vertical-align: middle;"
					>
						<table style="width: 100%; margin-left: 15px; margin-right: 15px">
							<td>
								<span
									v-html="
										playlistMusic.title === this.music.name
											? `<strong style='color: #f56c6c'>Tocando agora: </strong>`
											: ''
									"
								></span>
								{{ `${String(playlistMusic.title).substring(0, 40)}...` }}
							</td>
							<td style="text-align: right">
								<el-button
									type="text"
									style="color: red"
									icon="el-icon-delete"
									circle
									@click="removeFromPlaylist(i)"
								></el-button>
							</td>
						</table>
					</el-row>
				</div>
				<div
					:class="typeof ytSearchResults[0] === 'undefined' ? 'fullsize-hidden' : ''"
					style="display: grid; width: 100%; place-items: left; padding-left: 10px; padding-top: 10px; margin-bottom: 20px"
				>
					<el-row :gutter="1" style="width: 600px;">
						<el-col :span="12"
							><el-input
								placeholder="Procure aqui"
								prefix-icon="el-icon-search"
								v-model="args"
								@keypress.enter="search()"
								clearable
							>
							</el-input
						></el-col>
						<el-col :span="6" style="margin-left: 5px">
							<el-button
								class="searchButton grow-rotate box-shadow-outset"
								@click="search()"
								icon="el-icon-search"
								circle
							></el-button>
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
								@click="openChannelUrl(video.url)"
								style="width: 200px; height: auto"
								:src="video.bestThumbnail.url"
								fit="cover"
							></el-image>
						</el-aside>
						<el-main
							><div style="padding: 0 !important; padding-left: 10px; height: 100%">
								<span @click="openChannelUrl(video.url)"
									>{{ video.title }} | {{ video.duration }}</span
								>
								<div class="bottom">
									<time class="time" @click="openChannelUrl(video.author.url)">{{
										video.author.name
									}}</time
									><br />
									<div style="margin-top: 10px">
										<el-button
											type="danger"
											icon="bx bx-play"
											circle
											size="mini"
											@click="changeCurrentMusic(i)"
										></el-button>
										<el-popover
											placement="top-start"
											:width="200"
											trigger="hover"
											content="Adicionar a fila"
										>
											<template #reference>
												<el-button
													type="text"
													icon="bx bxs-add-to-queue"
													circle
													@click="addToPlaylist(i)"
												></el-button>
											</template>
										</el-popover>
										<el-dropdown>
											<el-button type="text" icon="bx bx-list-plus" circle></el-button>
											<template #dropdown style="text-align: center">
												<el-dropdown-menu>
													<el-dropdown-item
														v-for="(playlist, ii) in playlists"
														:key="ii"
														@click="addToPlaylist([i, ii], true)"
														>{{ playlist.name }}</el-dropdown-item
													>
													<el-dropdown-item @click="newPlaylist()">
														<i class="bx bxs-playlist"></i> Criar playlist
													</el-dropdown-item>
												</el-dropdown-menu>
											</template>
										</el-dropdown>
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
				</div>
			</div>
		</transition>
		<transition name="slide-fade">
			<!-- PLAYLISTS -->
			<div class="content" v-if="page === 'playlists'">
				<el-empty
					v-if="playlists.length < 1"
					description="Ué, aqui está vazio... Estranho"
				></el-empty>
				<div v-else style="display: flex;">
					<el-collapse
						style="width: 100%; margin-top: 20px; margin-left: 20px; margin-right: 20px; border-bottom: 0px transparent"
					>
						<el-collapse-item
							v-for="(playlist, i) in playlists"
							:key="i"
							:title="
								`&nbsp;&nbsp;&nbsp;&nbsp;${playlist.name}`.length > 20 && isWindowSizeSmall
									? `${`&nbsp;&nbsp;&nbsp;&nbsp;${playlist.name}`.substring(0, 39)}...`
									: `&nbsp;&nbsp;&nbsp;&nbsp;${playlist.name}`
							"
							style="margin-bottom: 20px;"
						>
							<el-button
								style="margin-left: 20px"
								type="danger"
								icon="bx bx-play"
								circle
								size="medium"
								@click="playPlaylist(i)"
							></el-button>
							<el-button
								style="margin-left: 20px; color: #f56c6c !important"
								icon="bx bxs-trash-alt"
								class="playlistName"
								circle
								size="medium"
								@click="deletePlaylist(i)"
							></el-button>
							<hr />
							<div
								style="padding-left: 20px"
								v-for="(music, ii) in playlist.musics"
								:key="ii"
								:name="ii"
							>
								<el-button
									class="playlistDelete"
									type="text"
									icon="bx bxs-trash"
									circle
									size="medium"
									@click="removeFromPlaylist([i, ii], true)"
								></el-button
								><el-button
									class="playlistName"
									type="text"
									size="medium"
									@click="openChannelUrl(music.url)"
									>{{
										isWindowSizeSmall ? `${music.title.substring(0, 50)}...` : music.title
									}}</el-button
								>
							</div>
						</el-collapse-item>
					</el-collapse>
				</div>
			</div>
		</transition>
		<transition name="slide-fade">
			<!-- CONFIGS -->
			<div class="content" v-if="page === 'config'">
				<span style="margin-right: 5px">Presença no Discord</span>
				<el-button v-if="richPresence === false" @click="changeRichPresence(true)" type="danger"
					>Ativar</el-button
				>
				<el-button v-else @click="changeRichPresence(false)" type="danger">Desativar</el-button>
			</div></transition
		>
		<div class="player" style="background-color: whitesmoke">
			<player-bar
				:name="music.name"
				:channel="music.channel"
				:channelUrl="music.channelUrl"
				:musicThumb="music.musicThumb"
				:link="music.link"
				:duration="music.duration"
				:playlist="playlist"
				@musicFinished="nextMusic()"
				@nextMusic="nextMusic()"
				@previousMusic="previousMusic()"
				@shufflePlaylist="shufflePlaylist()"
			/>
		</div>
	</div>
</template>

<script>
import PlayerBar from "../components/PlayerBar.vue";
import { youtubeSearcher } from "../utils/ytsr";
import { youtubePlaylist } from "../utils/ytpl";
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
			page: "main",
			ytSearcher: new youtubeSearcher(),
			ytPlaylist: new youtubePlaylist(),
			ytSearchResults: [],
			args: "",
			music: {
				name: "",
				channel: "",
				channelUrl: "",
				musicThumb: "",
				link: "",
				duration: "",
			},
			playlist: [],
			playlists: [],
			currentMusic: 0,
			isWindowSizeSmall: false,
			navWidth: "0",
			sidenav: "sidenav",
			richPresence: null,
		};
	},
	async mounted() {
		this.richPresence = localStorage.getItem("richPresence");

		if (!fs.existsSync("musics")) {
			fs.mkdirSync("musics");
		}
		if (!fs.existsSync("musics/playlists.json")) {
			fs.openSync("musics/playlists.json", "w");
			fs.writeFileSync("musics/playlists.json", "[]");
		}
		this.playlists = JSON.parse(fs.readFileSync("musics/playlists.json"));
		if (
			localStorage.getItem("richPresence") === null ||
			typeof localStorage.getItem("richPresence") === "undefined"
		) {
			this.$confirm(
				"Deseja que o Playlisto mostre o que você está ouvindo no Discord?",
				"Rich Presence",
				{
					confirmButtonText: "Sim",
					confirmButtonClass: "el-button el-button--default el-button--small el-button--danger",
					cancelButtonText: "Não",
					type: "info",
				}
			)
				.then(() => {
					localStorage.setItem("richPresence", true);
					ipcRenderer.send("richPresence", true);

					this.$message({
						type: "success",
						message: "Sucesso! A função 'Rich Presence' está ativada!",
					});
				})
				.catch(() => {
					localStorage.setItem("richPresence", false);
					ipcRenderer.send("richPresence", false);

					this.$message({
						type: "info",
						message: "Você pode ativar esta função no menu 'Opções'!",
					});
				});
		}
		await this.ytSearcher.start();
		await this.ytSearcher.start();
		this.manageWordSize();
		window.addEventListener("resize", this.manageWordSize);
		ipcRenderer.send("richPresence", this.richPresence);
	},
	methods: {
		openNav() {
			this.sidenav = "sidenav hiddennav";
			setTimeout(() => {
				this.navWidth = "400px";
				setTimeout(() => {
					this.sidenav = "sidenav";
				}, 400);
			}, 200);
		},

		closeNav() {
			this.sidenav = "sidenav hiddennav";
			setTimeout(() => {
				this.navWidth = "0";
				setTimeout(() => {
					this.sidenav = "sidenav";
				}, 1000);
			}, 50);
		},
		manageWordSize() {
			if (window.innerWidth < 1000) {
				this.isWindowSizeSmall = true;
			} else {
				this.isWindowSizeSmall = false;
			}
		},
		openChannelUrl(url) {
			require("electron").shell.openExternal(url);
		},
		changeRichPresence(presence) {
			this.richPresence = presence;
			localStorage.setItem("richPresence", presence);
			ipcRenderer.send("richPresence", presence);
		},
		async search() {
			if (this.args.length > 0) {
				const loading = this.$loading({
					lock: false,
					text: "Buscando Vídeos",
					spinner: "bx bx-loader-alt loading",
					background: "rgba(0, 0, 0, 0.7)",
				});
				this.loading = true;
				if (this.args.includes("playlist")) {
					const playlist = await this.ytPlaylist.searchPlaylist(this.args);
					this.ytSearchResults = playlist.items.items;
					this.$confirm("Salvar playlist?", "Playlist", {
						confirmButtonText: "Salvar",
						confirmButtonClass: "el-button el-button--default el-button--small el-button--danger",
						cancelButtonText: "Não Salvar",
						type: "info",
					})
						.then(() => {
							this.newPlaylist(playlist.name);
							this.$message({
								type: "success",
								message: "Playlist Salva!",
							});
						})
						.catch(() => {
							this.$message({
								type: "info",
								message: "Ok, ação cancelada",
							});
							this.$confirm("Adicionar a fila de reprodução?", "Playlist", {
								confirmButtonText: "Adicionar",
								confirmButtonClass:
									"el-button el-button--default el-button--small el-button--danger",
								cancelButtonText: "Não Adicionar",
								type: "info",
							})
								.then(() => {
									for (let c in this.ytSearchResults) {
										// i = video, ii = playlist
										this.addToPlaylist(c);
									}
									this.changeCurrentMusic(0, true);
									this.$message({
										type: "success",
										message: "Adicionado a fila!",
									});
								})
								.catch(() => {
									this.$message({
										type: "info",
										message: "Ok, ação cancelada",
									});
								});
						});
				} else {
					this.ytSearchResults = (await this.ytSearcher.search(this.args)).items;
				}
				loading.close();
				this.loading = false;
			} else {
				this.$message({
					dangerouslyUseHTMLString: true,
					showClose: true,
					message: "A pesquisa <strong style='color: red'>não</strong> pode estar vazia!",
				});
				this.ytSearchResults = [];
			}
		},
		changeCurrentMusic(videoIndex, isPlaylist = false, rawMusic = false) {
			let chosenVideo = null;
			let okToContinue = false;
			if (!rawMusic) {
				if (isPlaylist) {
					if (
						videoIndex > this.playlist.length ||
						videoIndex <= -1 ||
						videoIndex === this.playlist.length
					) {
						okToContinue = false;
					} else {
						okToContinue = true;
					}
					chosenVideo = this.playlist[videoIndex];
				} else {
					okToContinue = true;
					chosenVideo = this.ytSearchResults[videoIndex];
					this.playlist = [chosenVideo];
				}
			} else {
				chosenVideo = videoIndex;
				okToContinue = true;
			}

			if (okToContinue) {
				this.music = {
					name: chosenVideo.title,
					channel: chosenVideo.author.name,
					channelUrl: chosenVideo.author.url,
					musicThumb: chosenVideo.bestThumbnail.url,
					link: chosenVideo.url.split("&list")[0],
					duration: chosenVideo.duration,
				};
				return true;
			} else {
				return false;
			}
		},
		shuffle(array) {
			var currentIndex = array.length,
				randomIndex;

			// While there remain elements to shuffle...
			while (0 !== currentIndex) {
				// Pick a remaining element...
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex--;

				// And swap it with the current element.
				[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
			}

			return array;
		},
		shufflePlaylist() {
			this.$confirm("Deseja continuar?", "Essa função irá embaralhar e resetar a fila!", {
				confirmButtonText: "OK",
				confirmButtonClass: "el-button el-button--default el-button--small el-button--danger",
				cancelButtonText: "Cancelar",
				type: "info",
			})
				.then(() => {
					this.playlist = this.shuffle(this.playlist);
					this.changeCurrentMusic(this.playlist[0], false, true);
				})
				.catch(() => {
					this.$message({
						type: "info",
						message: "Embaralhar cancelado!",
					});
				});
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
		newPlaylist(name = null) {
			if (name) {
				try {
					this.playlists.push({ name, musics: [] });
					const playlistIndexBefore = this.playlists.filter((b) => b.name === name);
					if (!playlistIndexBefore) {
						this.playlists.push({ name, musics: [] });
					}
					const playlistIndex = this.playlists.findIndex((b) => b.name === name);
					for (let c in this.ytSearchResults) {
						// i = video, ii = playlist

						if (this.ytSearchResults.length === Number(c) + 1) {
							this.addToPlaylist([c, playlistIndex], true, true);
						} else {
							this.addToPlaylist([c, playlistIndex], true, false);
						}
					}
					fs.writeFileSync("musics/playlists.json", JSON.stringify(this.playlists));
					return true;
				} catch (err) {
					this.$message({
						type: "error",
						message: "Erro ao criar playlist!",
					});
					return false;
				}
			} else {
				this.$prompt("Insira o nome da playlist: ", "Nova Playlist", {
					confirmButtonText: "Salvar",
					cancelButtonText: "Cancelar",
					iconClass: "bx bxs-playlist",
					confirmButtonClass: "el-button el-button--default el-button--small el-button--danger",
				})
					.then(({ value }) => {
						this.playlists.push({ name: value, musics: [] });
						fs.writeFileSync("musics/playlists.json", JSON.stringify(this.playlists));
						this.$message({
							type: "success",
							message: "Salvo com sucesso",
						});
					})
					.catch(() => {
						this.$message({
							type: "info",
							message: "Ação cancelada",
						});
					});
			}
		},
		playPlaylist(playlistIndex) {
			this.playlist = [...this.playlists[playlistIndex].musics];
			this.changeCurrentMusic(this.playlist[0], false, true);
		},
		deletePlaylist(playlistIndex) {
			this.playlists.splice(playlistIndex, 1);
			fs.writeFileSync("musics/playlists.json", JSON.stringify(this.playlists));
		},
		addToPlaylist(videoIndex, addLiterallyToAPlaylist = false, removeNotifications = false) {
			if (addLiterallyToAPlaylist) {
				try {
					this.playlists[videoIndex[1]].musics.push(this.ytSearchResults[videoIndex[0]]);
					fs.writeFileSync("musics/playlists.json", JSON.stringify(this.playlists));
					if (removeNotifications) {
						this.$message({
							type: "success",
							message: "Adicionado com sucesso",
						});
					}
				} catch (err) {
					this.$message({
						type: "error",
						message: err,
					});
				}
			} else {
				this.playlist.push(this.ytSearchResults[videoIndex]);
				this.playlist = [...this.playlist];
			}
		},
		removeFromPlaylist(videoIndex, literallyAPlaylist = false) {
			if (literallyAPlaylist) {
				this.playlists[videoIndex[0]].musics.splice(videoIndex[1], 1);
				fs.writeFileSync("musics/playlists.json", JSON.stringify(this.playlists));
			} else {
				this.playlist.splice(videoIndex, 1);
				this.playlist = [...this.playlist];
			}
		},
		async selectSaveLocation(videoUrl, musicName) {
			await ipcRenderer.send("saveFileLocation");
			await ipcRenderer.once("returnedSaveLocation", (sender, response) => {
				if (response[0]) {
					this.$message({
						type: "info",
						message: "Ação cancelada!",
					});
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
			});
		},
	},
	name: "Home",
};
</script>

<style>
.el-container {
	max-height: 125px;
	margin-bottom: 20px;
}

.el-main {
	padding: 0 !important;
	height: 100%;
}

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
	height: calc(100vh - 130px);
	overflow-x: hidden;
}

.player {
	grid-area: player;
	position: absolute;
	bottom: 0%;
	width: 100%;
	min-height: 100px;
	background-color: #121212;
	z-index: 99999;
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

.searchButton {
	border: 1px solid #fff !important;
}

.searchButton:hover {
	background-color: #f56c6c !important;
	border: 1px solid #f56c6c !important;
	color: #fff !important;
}

.searchButton:nth-child(0):hover {
	color: #fff !important;
}

.confirmButton {
	background-color: #f56c6c !important;
	border: 1px solid #f56c6c !important;
	color: #fff !important;
}

.el-button.el-button--text.el-button--medium.is-circle:hover {
	color: #f56c6c !important;
}
.el-button.el-button--text.el-button--medium.is-circle:focus {
	color: #f56c6c !important;
}

/* Grow Rotate */
.grow-rotate {
	display: inline-block;
	transition-duration: 0.3s;
	transition-property: transform;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	transform: translateZ(9);
	box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.grow-rotate:hover {
	transform: scale(1.05);
}
/* Outline Inward */
.outline-inward {
	display: inline-block;
	position: relative;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	transform: translateZ(0);
	box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.outline-inward:before {
	content: "";
	position: absolute;
	border: #ececec solid 4px;
	top: -16px;
	right: -16px;
	bottom: -16px;
	left: -16px;
	opacity: 0;
	transition-duration: 0.3s;
	transition-property: top right bottom left;
}
.outline-inward:hover:before {
	top: -8px;
	right: -8px;
	bottom: -8px;
	left: -8px;
	opacity: 1;
}
/* Box Shadow Outset */
.box-shadow-outset {
	display: inline-block;
	transition-duration: 0.3s;
	transition-property: box-shadow;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	transform: translateZ(0);
	box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.box-shadow-outset:hover {
	box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
}

.playlistName {
	color: #121212 !important;
}

.playlistDelete {
	color: red !important;
}

.sidenav.hiddennav * {
	opacity: 0;
}

/* The side navigation menu */
.sidenav {
	transition: opacity 1s;
	opacity: 1;
	height: 74.5%; /* 100% Full-height */
	max-height: 74.5%;
	width: 0; /* 0 width - change this with JavaScript */
	position: fixed; /* Stay in place */
	top: 0; /* Stay at the top */
	right: 0;
	background-color: #121212; /* Black*/
	overflow-x: hidden; /* Disable horizontal scroll */
	overflow-y: scroll;
	padding-top: 60px; /* Place content 60px from the top */
	transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
	z-index: 1;
	padding-top: 50px !important;
}

/* The navigation menu links */
.sidenav a {
	padding: 8px 8px 8px 32px;
	text-decoration: none;
	font-size: 25px;
	color: #818181;
	display: block;
	transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
	color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
	position: absolute;
	top: 25px;
	right: 25px;
	font-size: 36px;
	margin-left: 50px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 800px) {
	.sidenav {
		padding-top: 15px;
		height: 77.5%; /* 100% Full-height */
		max-height: 77.5%;
	}
	.sidenav a {
		font-size: 18px;
	}
}

.el-collapse-item__header {
	font-size: x-large !important;
}
</style>
