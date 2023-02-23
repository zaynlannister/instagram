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
          <SvgIcon name="like" />
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
  }
}
</script>

<style lang="scss" scoped>
.comments {
  &-like svg {
    width: 14px;
    height: 14px;
  }
}
</style>