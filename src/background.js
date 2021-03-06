"use strict";
import {
	app,
	protocol,
	BrowserWindow,
	ipcMain,
	dialog,
	globalShortcut,
	Notification,
} from "electron";
import DiscordRPC from "discord-rpc";
import express from "express";
import ws from "ws";
const fetch = require("electron-fetch").default;
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
const isDevelopment = process.env.NODE_ENV !== "production";
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
	{
		scheme: "app",
		privileges: {
			secure: true,
			standard: true,
			corsEnabled: true,
			supportFetchAPI: false,
			stream: false,
			bypassCSP: false,
			allowServiceWorkers: false,
		},
	},
]);

var main;
var richPresence = false;

async function createWindow() {
	let sockets = [];
	try {
		const clientId = "842568729551700028";
		const rpc = new DiscordRPC.Client({ transport: "ipc" });
		rpc.on("ready", async () => {
			if (richPresence) {
				const startTimestamp = new Date();
				await rpc.setActivity({
					details: "Escolhendo uma música...",
					state: "    ",
					// buttons: [
					// 	{ label: "Baixar", url: "https://github.com/Lucas-Gardini/Playlisto/releases" },
					// ],
					startTimestamp,
					// smallImageKey: "playlisto",
					largeImageKey: "playlisto",
					spectateSecret: "",
					instance: false,
				});
			}
		});

		rpc.login({ clientId })
			.then(() => {
				console.log("App running!");
			})
			.catch((err) => {
				console.log(err);
			});

		const expressApplication = express();
		expressApplication.use("/", express.static("./resources/app"));
		expressApplication.listen(7089);
		const webSocket = new ws.Server({
			port: 7090,
		});
		let changeActivity = 0;
		let timeout = setTimeout(() => {});
		let timeout2 = setTimeout(() => {});
		webSocket.on("connection", (socket) => {
			sockets.push(socket);
			socket.on("message", async (message) => {
				const jsonfyMessage = JSON.parse(message);
				// DISCORD RICH PRESENCE
				if (richPresence) {
					clearTimeout(timeout);
					clearTimeout(timeout2);
					timeout = setTimeout(async () => {
						await rpc.clearActivity();
						rpc.setActivity({
							details: jsonfyMessage.title,
							state: "Escutando",
							buttons: [{ label: "Ouvir", url: `${jsonfyMessage.url}` }],
							// startTimestamp,
							// smallImageKey: "playlisto",
							largeImageKey: "playlisto",
							spectateSecret: "",
							instance: false,
						}).catch((err) => {
							console.log(err);
						});
						changeActivity = 15000;
						timeout2 = setTimeout(() => {
							changeActivity = 0;
						}, 15000);
					}, changeActivity);
				} else {
					rpc.clearActivity();
				}

				// ENDOF DISCORD RICH PRESENCE
			});
		});
	} catch (err) {
		console.log(err);
		new Notification({
			title: "Falha ao Iniciar!",
			body:
				"Tenha certeza de que as portas 7089 e 7090 estejam disponíveis em seu computador! Para mais detalhes, contate o desenvolvedor",
			urgency: "critical",
		}).show();
		app.quit();
	}
	// Create the browser window.
	const win = new BrowserWindow({
		titleBarStyle: "hidden",
		width: 800,
		height: 600,
		minWidth: 760,
		minHeight: 460,
		webPreferences: {
			// Use pluginOptions.nodeIntegration, leave this alone
			// See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
			nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
			contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
			webSecurity: false,
		},
		frame: false,
		show: false,
		backgroundColor: "#191819",
	});

	if (process.env.WEBPACK_DEV_SERVER_URL) {
		// Load the url of the dev server if in development mode
		await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
	} else {
		// createProtocol("app");
		// Load the index.html when not in development
		win.loadURL("http://localhost:7089");
	}

	main = win;
	if (typeof win == "undefined" || typeof load == "undefined") {
		console.log("Algo deu errado, PUTA QUE PARIU EM");
		app.quit();
		return;
	}

	globalShortcut.register("MediaPlayPause", () => {
		sockets.forEach((socket) => {
			socket.send("MediaPlayPause");
		});
	});
	globalShortcut.register("MediaNextTrack", () => {
		sockets.forEach((socket) => {
			socket.send("MediaNextTrack");
		});
	});
	globalShortcut.register("MediaPreviousTrack", () => {
		sockets.forEach((socket) => {
			socket.send("MediaPreviousTrack");
		});
	});
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
var load;
app.on("ready", async () => {
	// Create the splash screen
	load = new BrowserWindow({
		width: 300,
		height: 300,
		frame: false,
		thickFrame: false,
		resizable: false,
		center: true,
		darkTheme: true,
		maximizable: false,
		minimizable: false,
		movable: false,
		backgroundColor: "#121212",
		closable: true,
	});
	load.webContents.on("devtools-opened", () => {
		load.webContents.closeDevTools();
	});
	if (process.env.WEBPACK_DEV_SERVER_URL) {
		// Load the url of the dev server if in development mode
		await load.loadURL(`${process.env.WEBPACK_DEV_SERVER_URL}/loading.html`);
	} else {
		createProtocol("app");
		// Load the index.html when not in development
		load.loadURL("app://./loading.html");
	}
	await createWindow();
});

app.on("will-quit", () => {
	// Unregister all shortcuts.
	globalShortcut.unregisterAll();
});

ipcMain.once("app-loaded", () => {
	try {
		setTimeout(() => {
			load.close();
			setTimeout(() => {
				main.show();
			}, 100);
		}, 2000);
	} catch (error) {
		console.log(error);
		app.quit();
	}
});

ipcMain.on("richPresence", (event, isRichPresence) => {
	richPresence = isRichPresence;
});

ipcMain.handle("ManageWindow", async (event, args) => {
	switch (args.method) {
		case "MINIMIZE":
			main.minimize();
			main.break;
			break;
		case "MAXIMIZE":
			if (main.isMaximized()) {
				main.unmaximize();
				break;
			}
			main.maximize();
			break;
		case "CLOSE":
			main.close();
			break;
		default:
			break;
	}
});

ipcMain.on("saveFileLocation", (event) => {
	dialog
		.showOpenDialog({
			properties: ["openDirectory"],
		})
		.then((file) => {
			event.reply("returnedSaveLocation", [file.canceled, file.filePaths]);
		});
});

ipcMain.handle("getLyrics", async (event, args) => {
	const delimiter1 =
		'</div></div></div></div><div class="hwc"><div class="BNeawe tAd8D AP7Wnd"><div><div class="BNeawe tAd8D AP7Wnd">';
	const delimiter2 =
		'</div></div></div></div></div><div><span class="hwc"><div class="BNeawe uEec3 AP7Wnd">';
	const url = "https://www.google.com/search?q=";

	async function parse(title = "", author = "") {
		if (!title && !author) throw new TypeError("Both title and author cannot be null");

		var lyrics;

		try {
			lyrics = await fetch(`${url}${encodeURIComponent(author + " " + title)}+lyrics`);
			lyrics = await lyrics.textConverted();
			[, lyrics] = lyrics.split(delimiter1);
			[lyrics] = lyrics.split(delimiter2);
		} catch (e) {
			console.log(`erro: ${e}`);
			try {
				lyrics = await fetch(
					`${url}${encodeURIComponent(author + " " + title)}+song+lyrics`
				);
				lyrics = await lyrics.textConverted();
				[, lyrics] = lyrics.split(delimiter1);
				[lyrics] = lyrics.split(delimiter2);
			} catch {
				try {
					lyrics = await fetch(`${url}${encodeURIComponent(author + " " + title)}+song`);
					lyrics = await lyrics.textConverted();
					[, lyrics] = lyrics.split(delimiter1);
					[lyrics] = lyrics.split(delimiter2);
				} catch {
					try {
						lyrics = await fetch(`${url}${encodeURIComponent(author + " " + title)}`);
						lyrics = await lyrics.textConverted(); // Convert to text
						[, lyrics] = lyrics.split(delimiter1); // Split it by the first delimiter
						[lyrics] = lyrics.split(delimiter2); // Split it by the second delimiter
					} catch {
						lyrics = ""; // Give up, couldn't find lyrics
					}
				}
			}
		}

		const split = lyrics.split("\n");
		var final = "";
		for (var i = 0; i < split.length; i++) {
			final = `${final}${split[i]}\n`;
		}
		return final.trim() || false; // Return false if no lyrics were found
	}

	const lyrics = await parse(args.title);
	return lyrics ? lyrics : "Nenhuma letra encontrada.";
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
	if (process.platform === "win32") {
		process.on("message", (data) => {
			if (data === "graceful-exit") {
				app.quit();
			}
		});
	} else {
		process.on("SIGTERM", () => {
			app.quit();
		});
	}
}
