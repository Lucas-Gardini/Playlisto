import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

import "boxicons/css/boxicons.min.css";
import "@mdi/font/css/materialdesignicons.min.css";

const app = createApp(App);

app.use(router);
app.use(ElementPlus);

app.mount("#app");
