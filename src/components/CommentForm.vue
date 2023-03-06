<template>
  <div>
    <div class="comments__action">
      <div class="comments-wrapper">
        <div class="comments__action-emoji">
          <SvgIcon name="smile" />
        </div>
        <div class="comments__action-input">
          <input @keydown.enter="addComment" v-model="value" type="text" placeholder="Добавьте комментарий...">
        </div>
        <div class="comments__action-button">
          <button @click="addComment" class="btn">Опубликовать</button>
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

  data() {
    return {
      value: "",
    }
  },

  methods: {
    addComment() {
      if (this.isValidInput()) {
        this.$emit("comment", this.value);
        this.value = "";
      }
    },

    isValidInput() {
      return this.value.trim().length !== 0;
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  outline: none;
  border: none;
}

.comments {
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
}
</style>