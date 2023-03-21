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
                    comments: []
                },

                {
                    username: "Lara_queen",
                    id: 1,
                    src: "https://img2.akspic.ru/previews/6/7/5/1/7/171576/171576-oblako-rastenie-gora-dnevnoe_vremya-ekoregion-500x.jpg",
                    likes: 12,
                    description: "ууу",
                    comments: []
                },

                {
                    username: "oleg1mazelov",
                    id: 2,
                    src: "https://img2.akspic.ru/previews/1/7/5/1/7/171571/171571-rastitelnost-rastenie-gora-zelenyj-oblako-x750.jpg",
                    likes: 566,
                    description: "spectacular view!",
                    comments: []
                }
            ]
        }
    },

    actions: {
        like(post: object) {
            // @ts-ignore
            const requiredPost = this.getPost(post.id);
            // @ts-ignore
            requiredPost.likes++
        },

        dislike(post: object) {
            // @ts-ignore
            const requiredPost = this.getPost(post.id);
            // @ts-ignore
            requiredPost.likes--
        },

        addComment(post: object, comment: object) {
            // @ts-ignore
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
        }
    }
})