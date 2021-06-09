class youtubeSearcher {
	async start() {
		this.requireModules();
	}

	requireModules() {
		this.ytsr = require("ytsr");
	}

	async search(args) {
		this.searchResults = await this.ytsr(args, {
			limit: 30,
		});
		return this.searchResults;
	}

	get videos() {
		return this.searchResults;
	}
}

module.exports = { youtubeSearcher };
