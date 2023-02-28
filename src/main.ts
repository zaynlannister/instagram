import { createApp } from "vue"
import App from "./App.vue"

import "./assets/main.css"

import "virtual:svg-icons-register"



const app = createApp(App);
app.config.globalProperties.$likedPosts = [];

app.config.globalProperties.$storeLikedPost = function (post: any) {
    this.$likedPosts.push(post)
    localStorage.setItem("likedPosts", JSON.stringify(this.$likedPosts));
}
app.config.globalProperties.$removeLikedPost = function (post: any) {
    // @ts-ignore
    const postIndex = this.$likedPosts.findIndex(item => item.id === post.id);
    this.$likedPosts.splice(postIndex, 1)
    localStorage.setItem("likedPosts", JSON.stringify(this.$likedPosts));
}

const likedPosts = localStorage.getItem("likedPosts")

if (likedPosts) {
    app.config.globalProperties.$likedPosts = JSON.parse(likedPosts)
}

app.mount("#app")
