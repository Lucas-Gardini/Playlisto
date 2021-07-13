export default async function(name) {
	name = name.split("(")[0];
	try {
		const Genius = require("genius-lyrics");
		const Client = new Genius.Client();
		const searches = await Client.songs.search(name);
		const firstSong = searches[0];

		const lyricsPath = await firstSong.raw.url;
		const lyricsRawPage = await (await fetch(lyricsPath)).text();
		const divider1 = `<div class="lyrics">`;
		const divider2 = "</div>";

		let lyrics = lyricsRawPage.split(divider1)[1];
		lyrics = lyrics.split(divider2)[0];
		lyrics = lyrics.replaceAll("<a", "<span");
		lyrics = lyrics.replaceAll("</a", "</span");
		return [lyrics, 0];
	} catch (err) {
		try {
			const ipcRenderer = require("electron").ipcRenderer;
			return [
				await ipcRenderer.invoke("getLyrics", {
					title: name,
				}),
				1,
			];
		} catch (err2) {
			console.log(err2);
		}
	}
}
