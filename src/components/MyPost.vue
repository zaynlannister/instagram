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
        <SvgIcon class="user-post__details-additionally" name="dots" />
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
          @click="openCommentWindow"
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
      <div @click="openCommentWindow" class="user-post__comments-quantity comment-btn">
        Посмотреть все комментарии <span>{{ post.comments.length }}</span>
      </div>
      <div class="user-post__date">
        {{ getTimeAgo }}
      </div>
    </div>

    <my-dialog
      v-model:show="showComments"
      @closeDialog="closeCommentMenu"
    >
      <post-comments
          v-if="showComments"
          :post="post"
          :comments="post.comments"
      />
    </my-dialog>

  </div>
</template>

<script>
import PostComments from "@/components/PostComments.vue";
import SvgIcon from "@/components/SvgIcon.vue";
import { mapStores } from "pinia";
import { usePostStore } from "@/stores/posts";
import MyDialog from "@/components/MyDialog.vue";

export default {
  components: {
    MyDialog,
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
      showComments: false
    }
  },

  methods: {
    closeCommentMenu() {
      this.showComments = false;
    },

    openCommentWindow() {
      this.showComments = true;
    },

    toggleLike() {
      if (!this.post.isLiked) {
        this.postsStore.like(this.post);
      } else {
        this.postsStore.dislike(this.post);
      }
    }
  },

  computed: {
    ...mapStores(usePostStore),

    currentLikeIcon() {
      return this.post.isLiked ? "likeFilled" : "like";
    },

    getTimeAgo() {
      const currentDate = new Date();
      const seconds = Math.floor((currentDate.getTime() - this.post.date) / 1000);

      const intervals = [
        { label: "год", seconds: 31536000 },
        { label: "месяц", seconds: 2592000 },
        { label: "неделю", seconds: 604800 },
        { label: "день", seconds: 86400 },
        { label: "час", seconds: 3600 },
        { label: "минуту", seconds: 60 },
        { label: "секунду", seconds: 1 }
      ];

      for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];
        const count = Math.floor(seconds / interval.seconds);

        if (count >= 1) {
          let label = interval.label;
          if (interval.label === "год") {
            if (count === 1) {
              label = "год"
            } else if (count > 4) {
              label = "лет"
            } else {
              label = "года"
            }
          }
          if (interval.label === "месяц") {
            if (count > 4) {
              label = "месяцев"
            } else {
              label = "месяц"
            }
          }
          if (interval.label === "неделю") {
            if (count > 4) {
              label = "недель"
            } else {
              label = "неделю"
            }
          }
          if (interval.label === "день") {
            if (count < 4 && count !== 1) {
              label = "дня"
            } else if (count > 4) {
              label = "дней"
            } else {
              label = "день"
            }
          }
          if (interval.label === "час") {
            if (count > 1 && count < 5) {
              label = "часа"
            } else if (count > 5) {
              label = "часов"
            } else {
              label = "час"
            }
          }
          if (interval.label === "минуту") {
            label = "мин";
          }
          if (interval.label === "секунду") {
            label = "сек";
          }

          return `${count} ${label} назад`;
        }
      }

      return "только что";
    }
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
      width: 24px;
      height: 24px;
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