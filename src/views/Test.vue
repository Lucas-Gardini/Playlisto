<template>
	<div>
		ass
	</div>
</template>

<script>
import ytdl from "ytdl-core";
import fs from "fs";
// import path from "path";
export default {
	data: function() {
		return {
			ctx: new AudioContext(),
		};
	},
	async mounted() {
		ytdl("https://www.youtube.com/watch?v=TUVcZfQe-Kw", { filter: "audioonly" }).pipe(
			fs.createWriteStream("./musica.mp3")
		);
		setTimeout(() => {
			new Audio("file:///D:/Programming/playlisto/musica.mp3").play();
		}, 200);
	},
};
</script>

<style></style>
