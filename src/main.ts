import { createApp } from "vue"
import App from "./App.vue"

import "./assets/main.css"

import "virtual:svg-icons-register"



const app = createApp(App);

// store liked posts
app.config.globalProperties.$likedPosts = [];

app.config.globalProperties.$storeLikedPost = function (post: any) {
    this.$likedPosts.push(post);
    localStorage.setItem("likedPosts", JSON.stringify(this.$likedPosts));
}
app.config.globalProperties.$removeLikedPost = function (post: any) {
    // @ts-ignore
    const postIndex = this.$likedPosts.findIndex(item => item.id === post.id);
    this.$likedPosts.splice(postIndex, 1);
    localStorage.setItem("likedPosts", JSON.stringify(this.$likedPosts));
}

const likedPosts = localStorage.getItem("likedPosts")

if (likedPosts) {
    app.config.globalProperties.$likedPosts = JSON.parse(likedPosts);
}

// store comments

app.config.globalProperties.$comments = [];

app.config.globalProperties.$storeComment = function (comment: any) {
    // @ts-ignore
    const commentIndex = this.$comments.findIndex(item => item.comment.id === comment.comment.id);

    // repeating comment check
    if (commentIndex !== -1) {
        this.$comments.splice(commentIndex, 1, comment);
    } else {
        this.$comments.push(comment);
    }

    localStorage.setItem("comments", JSON.stringify(this.$comments));
}

app.config.globalProperties.$removeComment = function (comment: any) {
    // @ts-ignore
    const commentIndex = this.$comments.findIndex(item => item.id === comment.id);
    this.$comments.splice(commentIndex, 1);
    localStorage.setItem("comments", JSON.stringify(this.$comments));
}

const comments = localStorage.getItem("comments");

if (comments) {
    app.config.globalProperties.$comments = JSON.parse(comments);
}

app.mount("#app");
