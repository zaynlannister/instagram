<template>
  <div>
    <div class="presentation">
      <div class="container">
        <div class="presentation-wrapper">
          <div class="presentation-section">
            <div class="presentation-publications">
              <my-posts
                v-for="post in posts"
                :key="post.id"
                :post="post"
                @likePost="likePost"
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
import MyPosts from "./MyPost.vue";
import AccountRecommendation from "./AccountRecommendation.vue";

import { responseFromServer } from "@/posts";

export default {
  components: {
    MyPosts,
    AccountRecommendation
  },

  data() {
    return {
      posts: responseFromServer
    }
  },

  methods: {
    likePost(post, isLiked) {
      const postId = this.posts.findIndex(item => item.id === post.id);
      const needPost = this.posts[postId];

      if (isLiked) {
        needPost.likes++
      } else {
        needPost.likes--
      }
    }
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