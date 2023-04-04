<template>
  <div class="dialog" v-if="show" @click="closeDialog">
    <div @click.stop class="dialog-content">
      <div class="dialog-content__close-btn">
        <SvgIcon @click="closeDialog" name="close"/>
      </div>
      <slot></slot>
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
    show: Boolean
  },

  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog {
  z-index: 6;
  position: fixed;
  background-color: rgba(58, 58, 58, 0.8);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  & svg {
    position: absolute;
    display: inline-block;
    width: 26px;
    height: 26px;
    cursor: pointer;
    color: #ffff;
    right: 20px;
    top: 20px;
  }
}
</style>