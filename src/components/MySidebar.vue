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
          route: "#",
          icon: "comment",
        },

        {
          label: "Поисковый запрос",
          route: "#",
          icon: "comment"
        },

        {
          label: "Интересное",
          route: "#",
          icon: "comment"
        },

        {
          label: "Сообщения",
          route: "#",
          icon: "comment"
        },

        {
          label: "Уведомления",
          route: "#",
          icon: "comment"
        },

        {
          label: "Создать",
          route: "#",
          icon: "comment"
        },

        {
          label: "Профиль",
          route: "#",
          icon: "comment"
        },

        {
          label: "Еще",
          route: "#",
          icon: "comment"
        },
      ]
    }
  },
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
        width: 28px;
        height: 28px;
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