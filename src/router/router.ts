import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";

import Main from "@/router/pages/Main.vue"
import Search from "@/router/pages/Search.vue";
import Explore from "@/router/pages/Explore.vue";
import Messages from "@/router/pages/Messages.vue";
import Notifications from "@/router/pages/Notifications.vue";
import Create from "@/router/pages/Create.vue";
import Profile from "@/router/pages/Profile.vue";
import More from "@/router/pages/More.vue";

const routes = [
    { path: "/", component: Main },
    { path: "/search", component: Search },
    { path: "/explore", component: Explore },
    { path: "/messages", component: Messages },
    { path: "/notifications", component: Notifications },
    { path: "/create", component: Create },
    { path: "/profile", component: Profile },
    { path: "/more", component: More },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;