import { defineStore } from "pinia";

export const usePostStore = defineStore("posts", {
    state: () => {
        return {
            postsArray: [
                {
                    username: "jonny123",
                    id: 0,
                    src: "https://img2.akspic.ru/previews/4/8/5/9/6/169584/169584-malenkie_koshmary_2-malo_koshmary-dolgopyatnye_studii-mono_malenkie_koshmary-igra_uzhasov-x750.jpg",
                    likes: 124,
                    description: "замечатльное фото...",
                    comments: [],
                    isLiked: false,
                    date: 1680427689454
                },

                {
                    username: "Lara_queen",
                    id: 1,
                    src: "https://img2.akspic.ru/previews/6/7/5/1/7/171576/171576-oblako-rastenie-gora-dnevnoe_vremya-ekoregion-500x.jpg",
                    likes: 12,
                    description: "ууу",
                    comments: [],
                    isLiked: false,
                    date: 1680487699454
                },

                {
                    username: "oleg1mazelov",
                    id: 2,
                    src: "https://img2.akspic.ru/previews/1/7/5/1/7/171571/171571-rastitelnost-rastenie-gora-zelenyj-oblako-x750.jpg",
                    likes: 566,
                    description: "spectacular view!",
                    comments: [],
                    isLiked: false,
                    date: 1680487699454
                }
            ]
        }
    },

    actions: {
        addPost(mediaUrl: any) {
            const newPost = {
                username: "username",
                id: Date.now(),
                src: mediaUrl,
                likes: 0,
                description: "",
                comments: [],
                isLiked: false,
                date: Date.now()
            }

            this.postsArray.push(newPost);
        },

        like(post: object) {
            // @ts-ignore
            const requiredPost = this.getPost(post.id);
            // @ts-ignore
            requiredPost.likes++
            // @ts-ignore
            requiredPost.isLiked = true
        },

        dislike(post: object) {
            // @ts-ignore
            const requiredPost = this.getPost(post.id);
            // @ts-ignore
            requiredPost.likes--
            // @ts-ignore
            requiredPost.isLiked = false
        },

        addComment(post: any, comment: any) {
            const requiredPost = this.getPost(post.id);
            // @ts-ignore
            requiredPost.comments.push(comment);
        },

        removeComment(post: object, comment: object) {
            // @ts-ignore
            const requiredPost = this.getPost(post.id);
            // @ts-ignore
            const commentIndex = post.comments.findIndex(item => item.id === comment.id);
            // @ts-ignore
            requiredPost.comments.splice(commentIndex, 1);
        },

        likeComment(post: object, comment: object) {
            // @ts-ignore
            const requiredPost = this.getPost(post.id);
            // @ts-ignore
            const requiredComment = requiredPost.comments.find(item => item.id === comment.id);

            // @ts-ignore
            requiredComment.likes++;
            // @ts-ignore
            requiredComment.isLiked = true;
        },

        dislikeComment(post: object, comment: object) {
            // @ts-ignore
            const requiredPost = this.getPost(post.id);
            // @ts-ignore
            const requiredComment = requiredPost.comments.find(item => item.id === comment.id);
            // @ts-ignore
            requiredComment.likes--;
            // @ts-ignore
            requiredComment.isLiked = false;
        },

        getPost(id: number) {
            return this.postsArray.find(item => item.id === id)
        },

        setNewValue() {
            // @ts-ignore
            this.postsArray = JSON.parse(localStorage.getItem("posts"));
        }
    }
})