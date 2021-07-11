class youtubeDownloader {
	async start() {
		this.requireModules();
		this.deleteMusics();
	}

	requireModules() {
		this.fs = require("fs");
		this.path = require("path");
		this.ytdl = require("ytdl-core");
		this.slugify = require("slugify");
	}

	async download(url, musicName) {
		if (!this.fs.existsSync("musics")) {
			this.fs.mkdirSync("musics");
		}

		musicName = this.slugify(musicName, "");
		musicName = String(musicName).replaceAll("*", "");
		let file;
		return new Promise((resolve) => {
			this.ytdl(url, {
				filter: "audioonly",
			}).pipe((file = this.fs.createWriteStream(`musics/${musicName}.mp3`)));
			file.on("finish", () => {
				resolve(this.path.resolve(`musics/${musicName}.mp3`));
			});
			file.on("error", (err) => {
				console.log(err);
				resolve(false);
			});
		});
	}

	deleteMusics() {
		try {
			if (this.fs.existsSync("musics")) {
				const files = this.fs.readdirSync("musics");
				for (const file of files) {
					if (!(file === "playlists.json")) {
						try {
							this.fs.unlinkSync(this.path.join(`musics`, file), (err) => {
								if (err) throw err;
							});
						} catch (error) {
							console.log("Failed to delete file. I'll try next time");
						}
					}
				}
			}
		} catch (err) {
			console.log("Tem erro na merda do ytdl");
		}
	}
}

module.exports = { youtubeDownloader };
