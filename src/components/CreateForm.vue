<template>
  <div>
    <div class="create-form">
      <div class="create-form__header">Создание публикации</div>
      <div class="create-form__action">
        <SvgIcon class="create-form__media" name="media"/>
        <label class="input-file">
          <input v-on:change="setImage" type="file" name="file">
          <span class="input-file-btn">Выбрать на компьютере</span>
        </label>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>

import SvgIcon from "@/components/SvgIcon.vue";
import { mapStores } from "pinia";
import { usePostStore } from "@/stores/posts";

export default {
  components: {
    SvgIcon
  },

  computed: {
    ...mapStores(usePostStore),
  },

  methods: {
    setImage(element) {
      const file = element.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        this.createPost(reader);
      }
    },

    createPost(reader) {
      this.postsStore.addPost(reader.result);
    }
  }
}
</script>

<style lang="scss" scoped>
.create-form {
  width: 850px;
  height: 880px;
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 10px 0;
  background-color: #ffffff;
  transform: translate(-50%, -50%);
  border-radius: 10px;

  &__action {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__header {
    color: #3d3d3d;
    text-align: center;
    font-weight: 500;
    padding-bottom: 10px;
    border-bottom: 1px solid #c0c0c0;
  }

  &__media {
    display: block;
    width: 96px;
    height: 77px;
    margin: 0 auto 20px;
  }
}

.input-file {
  position: relative;
  display: inline-block;
}
.input-file span {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  color: rgb(255 255 255);
  text-align: center;
  border-radius: 6px;
  background-color: #0095f6;
  padding: 7px 20px;
  border: none;
}
.input-file input[type=file] {
  position: absolute;
  z-index: -1;
  opacity: 0;
  display: block;
  width: 0;
  height: 0;
}

.input-file:hover span {
  background-color: #0087dc;
}
</style>