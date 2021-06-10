class youtubeDownloader {
	async start() {
		this.requireModules();
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
		this.deleteMusics();

		musicName = this.slugify(musicName, "");
		let file;
		return new Promise((resolve) => {
			this.ytdl(url, {
				filter: "audioonly",
			}).pipe((file = this.fs.createWriteStream(`musics/${musicName}.mp3`)));
			file.on("finish", () => {
				console.log("Downloaded...");
				resolve(this.path.resolve(`musics/${musicName}.mp3`));
			});
			file.on("error", (err) => {
				console.log(err);
				resolve(false);
			});
		});
	}

	deleteMusics() {
		this.fs.readdirSync(`music`, (err, files) => {
			if (err) throw err;

			for (const file of files) {
				this.fs.unlinkSync(this.path.join(`music`, file), (err) => {
					if (err) throw err;
				});
			}
		});
	}
}

module.exports = { youtubeDownloader };
