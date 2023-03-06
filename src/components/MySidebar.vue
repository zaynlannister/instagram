<template>
  <div class="sidebar">
    <div class="sidebar__logo">
      <img
        src="@/assets/instagram_logo.png"
        alt="logo"
      >
    </div>
    <div class="sidebar__nav">
      <div
        v-for="item in navList"
        :key="item.label"
        @click="activePage = item.label"
        class="sidebar__nav-link"
        :class="{
          active: item.label === activePage
        }"
      >
        <SvgIcon
          v-if="item.icon"
          :name="item.icon"
        />
        <a
          data-id="nav-link"
          :href="item.route"
        >{{ item.label }}</a>
      </div>
    </div>
  </div>
  <PostForm v-if="postFormActive"/>
</template>

<script>
import SvgIcon from "@/components/SvgIcon.vue"
import PostForm from "@/components/PostForm.vue";

export default {
  components: {
    PostForm,
    SvgIcon
  },

  data() {
    return {
      postFormActive: false,
      activePage: "Главная",
      navList: [
        {
          label: "Главная",
          route: "#",
          icon: "home",
        },

        {
          label: "Поисковый запрос",
          route: "#",
          icon: "search"
        },

        {
          label: "Интересное",
          route: "#",
          icon: "compass"
        },

        {
          label: "Сообщения",
          route: "#",
          icon: "message"
        },

        {
          label: "Уведомления",
          route: "#",
          icon: "like"
        },

        {
          label: "Создать",
          route: "#",
          icon: "plus"
        },

        {
          label: "Профиль",
          route: "#",
          icon: "profile"
        },

        {
          label: "Еще",
          route: "#",
          icon: "burger"
        },
      ]
    }
  },

  methods: {
    showPostForm() {
      this.postFormActive = true;
    },

    closePostForm() {
      this.postFormActive = false;
    }
  },

  watch: {
    activePage(label) {
      if (label === "Создать") {
        this.showPostForm();
      } else {
        this.closePostForm();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .sidebar {
    position: fixed;
    width: 340px;
    border-right: 1px solid #dbdbdb;
    padding: 8px 12px 20px;
    box-sizing: border-box;
    height: 100vh;
    background-color: #fff;

    &__logo {
      padding: 25px 12px;

      & img {
        cursor: pointer;
        width: 114px;
        height: 44px;
      }
    }

    &__nav {
      display: flex;
      flex-direction: column;
      height: 100vh;
      & div {
        cursor: pointer;
        padding: 12px;
        margin: 5px 0;
        border-radius: 20px;
        transition: 200ms all;

        &:hover {
          background-color: #fafafa;
        }
      }

      svg {
        width: 24px;
        height: 24px;
        margin-right: 10px;
      }

      a {
        text-decoration: none;
        color: #1f1f1f;
      }
    }
  }

  .sidebar__nav-link {
    display: flex;
    align-items: center;

    &.active {
      font-weight: bold;
    }
  }
</style>