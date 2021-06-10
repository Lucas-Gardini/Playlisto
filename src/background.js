"use strict";

import { app, protocol, BrowserWindow, ipcMain } from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
const isDevelopment = process.env.NODE_ENV !== "production";
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
	{ scheme: "app", privileges: { secure: true, standard: true } },
]);

var load, main;

async function createWindow() {
	// Create the browser window.
	const win = new BrowserWindow({
		titleBarStyle: "hidden",
		width: 800,
		height: 600,
		webPreferences: {
			// Use pluginOptions.nodeIntegration, leave this alone
			// See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
			nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
			contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
		},
		frame: false,
		show: false,
		backgroundColor: "#191819",
	});

	if (process.env.WEBPACK_DEV_SERVER_URL) {
		// Load the url of the dev server if in development mode
		await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
	} else {
		createProtocol("app");
		// Load the index.html when not in development
		win.loadURL("app://./index.html");
	}

	// Create the splash screen
	const splash = new BrowserWindow({
		width: 300,
		height: 300,
		frame: false,
		resizable: false,
		center: true,
		darkTheme: true,
		maximizable: false,
		minimizable: false,
		movable: false,
		backgroundColor: "#121212",
	});
	splash.webContents.on("devtools-opened", () => {
		splash.webContents.closeDevTools();
	});
	if (process.env.WEBPACK_DEV_SERVER_URL) {
		// Load the url of the dev server if in development mode
		await splash.loadURL(`${process.env.WEBPACK_DEV_SERVER_URL}/loading.html`);
	} else {
		createProtocol("app");
		// Load the index.html when not in development
		splash.loadURL("app://./loading.html");
	}

	main = win;
	load = splash;
	if (typeof win == "undefined" || typeof load == "undefined") {
		console.log("Algo deu errado, PUTA QUE PARIU EM");
		app.quit();
		return;
	}
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
app.on("ready", async () => {
	await createWindow();
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
