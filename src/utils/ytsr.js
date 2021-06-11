class youtubeSearcher {
	async start() {
		this.requireModules();
	}

	requireModules() {
		this.ytsr = require("ytsr");
	}

	async search(args) {
		let refinedSearch = {
			items: [],
		};
		this.searchResults = await this.ytsr(args, {
			limit: 30,
		});
		for (let video of this.searchResults.items) {
			if (video.type === "video") {
				refinedSearch.items.push(video);
			}
		}
		return refinedSearch;
	}

	get videos() {
		return this.searchResults;
	}
}

module.exports = { youtubeSearcher };
