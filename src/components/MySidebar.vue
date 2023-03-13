<template>
  <div class="sidebar">
    <div class="sidebar__logo">
      <img
        src="@/assets/instagram_logo.png"
        alt="logo"
      >
    </div>
    <div class="sidebar__nav">
      <router-link
        v-for="item in navList"
        :to="item.route"
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
        <label>{{ item.label }}</label>
      </router-link>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon.vue"

export default {
  components: {
    SvgIcon
  },

  data() {
    return {
      activePage: "Главная",
      navList: [
        {
          label: "Главная",
          route: "/",
          icon: "home",
        },

        {
          label: "Поисковый запрос",
          route: "/search",
          icon: "search"
        },

        {
          label: "Интересное",
          route: "/explore",
          icon: "compass"
        },

        {
          label: "Сообщения",
          route: "/messages",
          icon: "message"
        },

        {
          label: "Уведомления",
          route: "/notifications",
          icon: "like"
        },

        {
          label: "Создать",
          route: "/create",
          icon: "plus"
        },

        {
          label: "Профиль",
          route: "/profile",
          icon: "profile"
        },

        {
          label: "Еще",
          route: "/more",
          icon: "burger"
        },
      ]
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
      & a {
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