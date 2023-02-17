import { createApp } from "vue"
import App from "./App.vue"

import "./assets/main.css"

import "virtual:svg-icons-register"



const app = createApp(App);
app.config.globalProperties.$likedPosts = new Set();

app.config.globalProperties.$storeLikedPost = function (postId: number) {
    app.config.globalProperties.$likedPosts.add(postId)
    const arrayOfLiked = Array.from(app.config.globalProperties.$likedPosts)
    localStorage.setItem("likedPosts", JSON.stringify(arrayOfLiked));
}
app.config.globalProperties.$removeLikedPost = function (postId: number) {
    app.config.globalProperties.$likedPosts.delete(postId)
    const arrayOfLiked = Array.from(app.config.globalProperties.$likedPosts)
    localStorage.setItem("likedPosts", JSON.stringify(arrayOfLiked));
}

const likedPosts = localStorage.getItem("likedPosts")

if (likedPosts) {
    app.config.globalProperties.$likedPosts = new Set(JSON.parse(likedPosts))
}

app.mount("#app")
