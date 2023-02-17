<template>
  <div>
    <div class="user-post">
      <div class="user-post__details">
        <div class="user-post__acc-image">
          <img src="@/assets/user__image.png">
        </div>
        <div class="user-post__username">
          {{ post.username }}
        </div>
        <svg
          class="user-post__details-additionally"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        ><circle
          cx="12"
          cy="12"
          r="1.5"
        /><circle
          cx="6"
          cy="12"
          r="1.5"
        /><circle
          cx="18"
          cy="12"
          r="1.5"
        /></svg>
      </div>
      <div class="user-post__content">
        <img
          :src="post.src"
          alt="content"
        >
      </div>
      <div class="user-post__actions">
        <div class="user-post__like">
          <SvgIcon
            @click="toggleLike()"
            :name="currentLikeIcon"
          />
        </div>
        <div
          @click="toggleComment"
          class="user-post__comment"
        >
          <SvgIcon name="comment" />
        </div>
        <div class="user-post__share">
          <SvgIcon name="share" />
        </div>
        <div class="user-post__save">
          <SvgIcon name="featured" />
        </div>
      </div>
      <div class="user-post__info">
        <div class="user-post__likes-quantity">
          <b><span>{{ post.likes }}</span> отметок "Нравится"</b>
        </div>
        <div class="user-post__description">
          <b><span>{{ post.username }}</span></b> {{ post.description }}
        </div>
      </div>
      <div class="user-post__comments-quantity comments-quantity-${this.id} comment-btn">
        Посмотреть все комментарии <span>0</span>
      </div>
      <div class="user-post__date">
        20 часов назад
      </div>
    </div>
    <post-comments
      :post="post"
      :show-comments="showComments"
      @close="toggleComment"
    />
  </div>
</template>

<script>
import PostComments from "@/components/PostComments.vue";
import SvgIcon from "@/components/SvgIcon.vue";

export default {
  components: {
    SvgIcon,
    PostComments
  },

  props: {
    post: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      isLiked: false,
      showComments: false
    }
  },

  methods: {
    toggleLike() {
      this.isLiked = !this.isLiked

      if (this.isLiked) {
        this.post.likes++
        this.$storeLikedPost(this.post.id)
      } else {
        this.post.likes--
        this.$removeLikedPost(this.post.id)
      }
    },

    toggleComment() {
      this.showComments = !this.showComments;
    }
  },

  computed: {
    currentLikeIcon() {
      return this.isLiked ? "likeFilled" : "like"
    }
  },

  mounted() {
    if (this.$likedPosts.has(this.post.id)) {
      this.isLiked = true
    }

    console.log(this.$likedPosts);
  }
}
</script>

<style lang="scss">

.user-post {
  font-size: 14px;
  background-color: #fff;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 8px;
  padding: 8px 0;
  margin-bottom: 25px;

  &__actions, &__info, &__comments-quantity, &__date {
    padding: 0 12px;
  }

  & svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  &__details {
    padding: 4px 12px;
    display: flex;
    align-items: center;

    &-additionally {
      margin-left: auto;
      cursor: pointer;
    }

    & div {
      cursor: pointer;
    }
  }

  &__acc-image img {
    width: 32px;
    height: 32px;
    border-radius: 20px;
    object-fit: cover;
  }

  &__username {
    margin-left: 10px;
  }

  &__content  {
    width: 100%;
    height: 470px;
    background-color: #eee;

    & img {
      width: 100%;
      height: 470px;
      object-fit: cover;
    }
  }

  &__actions {
    display: flex;
    padding-top: 8px;
    margin-bottom: 12px;

    & div {
      margin-right: 15px;

      &:last-child {
        margin-right: 0;
        margin-left: auto;
      }

      & svg:hover {
        fill: #8e8e8e;
        color: #8e8e8e;
      }
    }
  }

  &__description {
    margin: 6px 0;
  }

  &__comments-quantity {
    cursor: pointer;
    color: rgb(142, 142, 142);
    margin-bottom: 6px;
  }

  &__date {
    font-size: 12px;
    color: rgb(142, 142, 142);
  }
}

.like-btn {
  &.hide {
    display: none;
  }
}

.dislike-btn {
  display: none;

  &.active {
    display: block;
  }
}

input {
  outline: none;
  border: none;
}

.active {
  display: block;
}

.comments-container {
  display: flex;
  z-index: 99;
  position: absolute;
  background-color: #ffffff;
  width: 65%;
  height: 90%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  &::after {
    z-index: -1;
    content: '';
    background-color: rgba(0, 0, 0, 0.31);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
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

  &__action {
    width: 30%;
    position: absolute;
    bottom: 0;

    &-emoji {
      padding-right: 6px;
      margin-top: 3px;

      & svg {
        cursor: pointer;
      }
    }

    &-input {
      width: 100%;

      & input {
        box-sizing: border-box;
        padding: 0 10px;
        width: 100%;
      }
    }

    &-button button {
      font-size: 14px;
    }
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