<template>
  <div>
    <div class="comments-container">
      <div class="comments__image">
        <img
          :src="post.src"
          alt="image"
        >
      </div>
      <div class="comments">
        <div class="user-post__details comments__user-details">
          <div class="user-post__acc-image">
            <img src="src/assets/user__image.png">
          </div>
          <div class="user-post__username">
            username
          </div>
          <SvgIcon class="user-post__details-additionally" name="dots" />
        </div>

        <div class="comments__content">
          <MyComment
            v-for="comment in comments"
            :key="comment.username"
            :comment="comment"
            @likeComment="likeComment"
            @deleteComment="removeComment"
          />
        </div>

        <CommentForm
          @comment="addComment"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon.vue";
import CommentForm from "@/components/CommentForm.vue";
import MyComment from "@/components/MyComment.vue";
import { mapStores } from "pinia";
import { usePostStore } from "@/stores/posts";

export default {
  components: {
    MyComment,
    CommentForm,
    SvgIcon
  },

  props: {
    post: Object,
    showComments: Boolean,
    comments: Object
  },

  computed: {
    ...mapStores(usePostStore)
  },

  methods: {
    addComment(comment) {
      const commentData = {
        id: Date.now(),
        date: Date.now(),
        username: "username",
        text: comment,
        likes: 0,
        isLiked: false
      }

      this.postsStore.addComment(this.post, commentData);
    },

    removeComment(comment) {
      this.postsStore.removeComment(this.post, comment);
    },

    likeComment(comment) {
      if (!comment.isLiked) {
        this.postsStore.likeComment(this.post, comment);
      } else {
        this.postsStore.dislikeComment(this.post, comment);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.comments-container {
  display: flex;
  position: absolute;
  width: 65%;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.comments__image {
  position: relative;
  width: 70%;
  height: 100%;
  background-color: #000;

  & img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding: 20px 0;
  }
}

.comments {
  width: 30%;
  background-color: #fff;

  &__user-details {
    border-bottom: 1px solid rgb(219, 219, 219);
    padding: 10px 12px;
  }

  &-wrapper {
    box-sizing: border-box;
    width: 100%;
    padding: 10px 12px;
    display: flex;
    align-items: center;
    border-top: 1px solid rgb(219, 219, 219);
  }

  &__content {
    height: 87%;
    overflow-x: hidden;
    overflow-y: scroll;
    font-size: 15px;
    padding: 0 12px;

    &-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    & button {
      color: rgb(142, 142, 142);
    }

    &-comment {
      display: flex;
      padding: 15px 0;
    }

    &-image {
      margin-right: 10px;

      & img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }

  &-like svg {
    cursor: pointer;
  }

  &-user {
    &__info {
      display: flex;
      font-size: 13px;
      color: rgb(142, 142, 142);
      margin: 5px 0 8px;
    }

    &__data {
      margin-right: 10px;
    }

    &__name {
      margin-right: 10px;
      font-weight: 500;
      float: left;
    }

    &__text {
      word-break: break-all;
    }

    &__likes {
      margin-right: 10px;
      font-weight: bold;
    }

    &__reply-answers {
      position: relative;
      font-size: 13px;
      color: rgb(142, 142, 142);
      padding-left: 40px;

      &::before {
        position: absolute;
        content: '';
        width: 24px;
        height: 1px;
        background-color: rgb(142, 142, 142);
        left: 0;
        top: 7px;
      }
    }
  }
}
</style>