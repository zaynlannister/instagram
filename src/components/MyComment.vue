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
              2 ч.
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
      this.$emit("deleteComment", this.comment.id);
    }
  },

  computed: {
    currentLikeIcon() {
      return this.comment.isLiked ? "likeFilled" : "like";
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