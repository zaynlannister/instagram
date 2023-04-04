import { createApp } from "vue"
import App from "./App.vue"

import "./assets/main.css"

import "virtual:svg-icons-register"
import router from "@/router/router";
import { createPinia } from "pinia";

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");