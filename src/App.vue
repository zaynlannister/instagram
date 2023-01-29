<template>
  <my-sidebar/>
  <post-presentation
    :posts="posts"
  />
</template>

<script>

import MySidebar from "@/components/MySidebar.vue";
import PostPresentation from "@/components/PostPresentation.vue";
import { responseFromServer } from "@/posts";

export default {
  components: {
    MySidebar,
    PostPresentation
  },

  data() {
    return {
      posts: responseFromServer
    }
  }
}
</script>

<style lang="scss">

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