<template>
  <div>
    <my-sidebar/>
    <post-content/>
  </div>
</template>

<script>

import MySidebar from "@/components/MySidebar.vue";
import PostContent from "@/components/PostContent.vue";

export default {
  components: {
    MySidebar,
    PostContent
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

a {
  color: rgb(199, 199, 199);
  text-decoration: none;
}

.container {
  width: 830px;
  margin: 0 auto;
}

.btn {
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0;
  font-weight: bold;
  font-size: 12px;
  color: #0095f6;
}
</style>