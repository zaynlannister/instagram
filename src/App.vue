<template>
  <div>
    <my-sidebar/>
    <post-content
        :posts="posts"
    />
  </div>
</template>

<script>

import MySidebar from "@/components/MySidebar.vue";
import PostContent from "@/components/PostContent.vue";
import { responseFromServer } from "@/posts";

export default {
  components: {
    MySidebar,
    PostContent
  },

  data() {
    return {
      posts: responseFromServer,
    }
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