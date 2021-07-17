class youtubePlaylist {
	async start() {}

	async searchPlaylist(args) {
		this.ytpl = require("ytpl");
		this.searchResults = await this.ytpl(args);
		console.log(this.searchResults);
		this.returnedValues = {
			name: this.searchResults.title,
			items: this.searchResults,
		};
		return this.returnedValues;
	}

	get videos() {
		return this.searchResults;
	}
}

module.exports = { youtubePlaylist };
