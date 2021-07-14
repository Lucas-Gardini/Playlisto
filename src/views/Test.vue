<template>
	<div>
		<button @click="play">oh yes</button>
	</div>
</template>

<script>
import ytdl from "ytdl-core";
import fs from "fs";
// import path from "path";
// import arrayBufferToAudioBuffer from "arraybuffer-to-audiobuffer";

export default {
	data: function() {
		return {
			ctx: new AudioContext(),
		};
	},
	methods: {
		play() {
			let file;
			ytdl("https://www.youtube.com/watch?v=TUVcZfQe-Kw", {
				filter: "audioonly",
			}).pipe((file = fs.createWriteStream("musica.mp3")));
			file.on("open", () => {
				// const play = require("audio-play");
				// const load = require("audio-loader");
				// load("musica.mp3").then(play);
			});

			// const ass = new Audio();
			// const ms = new MediaSource();

			// ass.src = URL.createObjectURL(ms);

			// console.log(ms.readyState);

			// ms.onsourceopen = function() {
			// 	console.log("ABRIL CARALHO!");

			// 	const download = ytdl("https://www.youtube.com/watch?v=TUVcZfQe-Kw", {
			// 		filter: "audioonly",
			// 	});

			// 	//as soon as the first chunk of data is available in the stream, it should just start playing

			// 	const sb = ms.addSourceBuffer("audio/mpeg");

			// 	sb.onupdateend = function() {
			// 		console.log("Cabô de atualizar!");
			// 	};

			// 	download.on("data", (chunk) => {
			// 		const blobArr = [];

			// 		for (const k in Object.keys(chunk)) {
			// 			blobArr[k] = chunk[k];
			// 		}

			// 		if (!sb.updating) {
			// 			sb.appendBuffer(blobArr);
			// 		}
			// 		ass.play();
			// 	});
			// };
		},
	},
	async mounted() {
		// // ytdl("https://www.youtube.com/watch?v=TUVcZfQe-Kw", { filter: "audioonly" }).pipe(
		// // 	fs.createWriteStream("./musica.mp3")
		// // );
		// // const play = require("audio-play");
		// const audioCtx = new AudioContext();
		// ytdl("https://www.youtube.com/watch?v=TUVcZfQe-Kw").on("data", (chunk) => {
		// 	console.log(audioCtx.destination);
		// 	const source = audioCtx.createBufferSource();
		// 	source.buffer = audioCtx.decodeAudioData(chunk.data);
		// 	source.connect(audioCtx.destination);
		// 	source.start();
		// });
		// // let playback = play(ytdl("https://www.youtube.com/watch?v=TUVcZfQe-Kw")._read());
		// // playback.pause();
		// // playback.play();
	},
};
</script>

<style></style>
