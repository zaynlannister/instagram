<template>
  <div
    :class="{ active: showComments }"
    class="wrapper"
  >
    <div
      @click="this.$emit('close')"
      class="close-btn"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-x-lg"
        viewBox="0 0 16 16"
      >
        <path d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
        <path d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
      </svg>
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
          />
          </svg>
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
                <svg
                  height="12"
                  role="img"
                  viewBox="0 0 24 24"
                  width="12"
                ><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z" /></svg>
              </div>
            </div>
          </div>
        </div>

        <div class="comments__action">
          <div class="comments-wrapper">
            <div class="comments__action-emoji">
              <svg
                aria-label="Смайлик"
                class="_ab6-"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              ><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z" /></svg>
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
export default {
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
    fill: #ffff;
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