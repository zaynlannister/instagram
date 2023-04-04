<template>
  <div>
    <div class="comments__content-comment">
      <div class="comments__content-image">
        <img src="src/assets/user__image.png">
      </div>
      <div class="comments__content-wrapper">
        <div class="comments-user">
          <div class="comments-user__details">
            <div class="comments-user__name">
              {{ comment.username }}
            </div>
            <div class="comments-user__text">
              {{ comment.text }}
            </div>
          </div>
          <div class="comments-user__info">
            <div class="comments-user__data">
              {{ getTimeAgo }}
            </div>
            <div class="comments-user__likes">
              Нравится: <span>{{ comment.likes }}</span>
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
          <SvgIcon
            @click="this.$emit('likeComment', comment)"
            :name="currentLikeIcon"
          />
        </div>
        <div class="comments__details">
          <SvgIcon @click="toggleDeleteButton" name="dots"/>
        </div>
        <div v-if="deleteBtnVisibility" class="comments__delete">
          <div class="comments__delete-button">
            <button @click="deleteComment">Удалить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon.vue";
export default {
  props: {
    comment: Object
  },

  components: {
    SvgIcon
  },

  data() {
    return {
      deleteBtnVisibility: false
    }
  },

  methods: {
    toggleDeleteButton() {
      this.deleteBtnVisibility = !this.deleteBtnVisibility;
    },

    deleteComment() {
      this.$emit("deleteComment", this.comment);
    }
  },

  computed: {
    currentLikeIcon() {
      return this.comment.isLiked ? "likeFilled" : "like";
    },

    getTimeAgo() {
      const currentDate = new Date();
      const seconds = Math.floor((currentDate.getTime() - this.comment.date) / 1000);

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
            label = "мес"
          }
          if (interval.label === "неделю") {
            label = "нед.";
          }
          if (interval.label === "день") {
            if (count < 4) {
              label = "дня"
            } else if (count > 4) {
              label = "дней"
            } else {
              label = "день"
            }
          }
          if (interval.label === "час") {
            label = "ч."
          }
          if (interval.label === "минуту") {
            label = "мин";
          }
          if (interval.label === "секунду") {
            label = "сек";
          }

          return `${count} ${label}`;
        }
      }

      return "только что";
    }
  }
}
</script>

<style lang="scss" scoped>
.comments {
  &__content-comment {
    position: relative;

    &:hover {
      .comments__details {
        display: block;
      }
    }
  }

  &-like svg {
    width: 14px;
    height: 14px;
  }

  &__details {
    display: none;
    position: absolute;
    right: 0;
    bottom: 10px;

    & svg {
      width: 26px;
      height: 26px;
      opacity: .7;
      cursor: pointer;
    }
  }

  &__delete {
    position: absolute;
    bottom: -8px;
    right: 0;

    &-button button {
      cursor: pointer;
      color: #3a3a3a;
      border: none;
      background-color: #eeeeee;
      padding: 5px 10px;

      &:hover {
        color: red;
      }
    }
  }
}
</style>