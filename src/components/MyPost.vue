<template>
  <div>
    <div class="user-post">
      <div class="user-post__details">
        <div class="user-post__acc-image"><img src="@/assets/user__image.png"></div>
        <div class="user-post__username">{{ post.username }}</div>
        <svg class="user-post__details-additionally" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
      </div>
      <div class="user-post__content">
        <img :src="post.src" alt="content">
      </div>
      <div class="user-post__actions">
        <div class="user-post__like">
          <svg @click="like(post); toggleLike($el)" class="like-btn" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
          <svg @click="dislike(post); toggleLike($el)" class="dislike-btn" color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
        </div>
        <div @click="toggleComment" class="user-post__comment">
          <svg class="comment-btn" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path class="comment-btn" d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
        </div>
        <div class="user-post__share">
          <svg fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
        </div>
        <div class="user-post__save">
          <svg fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
        </div>
      </div>
      <div class="user-post__info">
        <div class="user-post__likes-quantity"><b><span>{{ post.likes }}</span> отметок "Нравится"</b></div>
        <div class="user-post__description"><b><span>{{ post.username }}</span></b> {{ post.description }}</div>
      </div>
      <div class="user-post__comments-quantity comments-quantity-${this.id} comment-btn">Посмотреть все комментарии <span>0</span></div>
      <div class="user-post__date">20 часов назад</div>
    </div>
    <post-comments
      :post="post"
      :isActive="isActive"
      @close="toggleComment"
    />
  </div>
</template>

<script>

import PostComments from "@/components/PostComments.vue";

export default {
  components: {
    PostComments
  },

  props: {
    post: Object
  },

  data() {
    return {
      isActive: false
    }
  },

  methods: {
    like(post) {
      post.likes++
    },

    dislike(post) {
      post.likes--
    },

    toggleLike(element) {
      element.querySelector(".like-btn").classList.toggle("hide");
      element.querySelector(".dislike-btn").classList.toggle("active");
    },

    toggleComment() {
      if (this.isActive) {
        this.isActive = false
      } else {
        this.isActive = true
      }
    }
  },
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