<template>
  <div>
    <div class="presentation">
      <div class="container">
        <div class="presentation-wrapper">
          <div class="presentation-section">
            <stories-content/>
            <div class="presentation-publications">
              <my-post
                v-for="post in posts"
                :key="post.id"
                :post="post"
              />
            </div>
          </div>
          <account-recommendation />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyPost from "@/components/MyPost.vue";
import AccountRecommendation from "@/components/AccountRecommendation.vue";
import StoriesContent from "@/components/StoriesContent.vue";

import { mapStores } from "pinia";
import { usePostStore } from "@/stores/posts";
import { watch } from "vue";

export default {
  setup() {
    const storedPosts = localStorage.getItem("posts");

    let posts;

    if (storedPosts) {
      usePostStore().setNewValue()
      posts = usePostStore().postsArray;
    } else {
      posts = usePostStore().postsArray;
    }

    watch(
        () => posts,
        (posts) => {
          localStorage.setItem("posts", JSON.stringify(posts));
        }, { deep: true }
    )

    return { posts }
  },

  components: {
    StoriesContent,
    MyPost,
    AccountRecommendation
  },

  computed: {
    ...mapStores(usePostStore)
  }
}
</script>

<style lang="scss" scoped>
.presentation {
  width: fit-content;
  margin: 0 auto;
  padding-top: 60px;

  &-wrapper {
    display: flex;
    justify-content: space-between;
  }

  &-section {
    width: 470px;
  }

  &__stories {
    width: 100vh;
    padding: 10px 0 10px 10px;
    display: flex;
    background-color: #fff;
    border: 1px solid rgb(219, 219, 219);
    border-radius: 8px;
    box-sizing: border-box;

    &-name {
      font-weight: 500;
      padding-top: 6px;
    }

    &-img {
      padding: 4px;
      position: relative;
      border-radius: 50%;
      background-color: #fff;

      &::after {
        position: absolute;
        top: -2px; bottom: -2px;
        left: -2px; right: -2px;
        background: linear-gradient(60deg, rgba(255,221,77,1) 0%, rgba(234,10,152,1) 100%);
        content: '';
        z-index: -1;
        border-radius: 50%;
      }

      & img {
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    &-acc {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      margin-right: 20px;
      color: rgb(85, 85, 85);
      font-size: 12px;
    }
  }
}
</style>