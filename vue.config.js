module.exports = {
	pluginOptions: {
		electronBuilder: {
			nodeIntegration: true,
			builderOptions: {
				appId: "com.playlisto.kowalskijr",
				win: {
					icon: "public/favicon.ico",
				},
				asar: false,
				asarUnpack: "./",
			},
		},
	},
};
