<template>
  <div :class="{ active: showComments }" class="wrapper">
    <div @click="this.$emit('close')" class="close-btn">
      <SvgIcon name="close" />
    </div>
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
          <div class="comments__content-comment">
            <div class="comments__content-image">
              <img src="src/assets/user__image.png">
            </div>
            <div class="comments__content-wrapper">
              <div class="comments-user">
                <div class="comments-user__details">
                  <div class="comments-user__name">
                    {{ post.username }}
                  </div>
                  <div class="comments-user__text">
                    some text
                  </div>
                </div>
                <div class="comments-user__info">
                  <div class="comments-user__data">
                    2 ч.
                  </div>
                  <div class="comments-user__likes">
                    Нравится: <span>{{ post.likes }}</span>
                  </div>
                  <div class="comments-user__reply-btn">
                    <button class="btn">
                      Ответить
                    </button>
                  </div>
                </div>
                <div class="comments-user__reply-answers">
                  <button class="btn">
                    Посмотреть ответы (0)
                  </button>
                </div>
              </div>
              <div class="comments-like">
                <SvgIcon name="like" />
              </div>
            </div>
          </div>
        </div>

        <div class="comments__action">
          <div class="comments-wrapper">
            <div class="comments__action-emoji">
              <SvgIcon name="smile" />
            </div>
            <div class="comments__action-input">
              <input
                type="text"
                placeholder="Добавьте комментарий..."
              >
            </div>
            <div class="comments__action-button">
              <button class="btn">
                Опубликовать
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon.vue";
export default {
  components: {
    SvgIcon
  },

  props: {
    post: Object,
    showComments: Boolean
  }
}
</script>

<style lang="scss" scoped>
input {
  outline: none;
  border: none;
}

.close-btn {
  position: fixed;
  z-index: 100;
  right: 37px;
  top: 27px;

  & svg {
    display: inline-block;
    width: 26px;
    height: 26px;
    cursor: pointer;
    color: #ffff;
  }
}

.wrapper {
  display: none;

  &.active {
    display: block;
  }
}

.comments-container {
  display: flex;
  z-index: 99;
  position: fixed;
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
    background-color: rgba(0, 0, 0, 0.63);
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

  &-like svg {
    width: 14px;
    height: 14px;
  }

  &__action {
    width: 30%;
    position: absolute;
    bottom: 0;

    &-emoji {
      padding-right: 6px;
      margin-top: 3px;

      & svg {
        width: 24px;
        height: 24px;
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