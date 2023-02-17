<template>
  <div class="sidebar">
    <div class="sidebar__logo">
      <img src="@/assets/instagram_logo.png" alt="logo">
    </div>
    <div class="sidebar__nav">
      <div @click="toggleNav($event.target)" data-id="nav-link" class="sidebar__nav-link">
        <svg aria-label="Главная" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"></path></svg>
        <a data-id="nav-link" href="#">Главная</a>
      </div>
      <div @click="toggleNav($event.target)" data-id="nav-link" class="sidebar__nav-link">
        <a data-id="nav-link" href="#">Поисковый запрос</a>
      </div>
      <div @click="toggleNav($event.target)" data-id="nav-link" class="sidebar__nav-link">
        <a data-id="nav-link" href="#">Интересные</a>
      </div>
      <div @click="toggleNav($event.target)" data-id="nav-link" class="sidebar__nav-link">
        <a data-id="nav-link" href="#">Reels</a>
      </div>
      <div @click="toggleNav($event.target)" data-id="nav-link" class="sidebar__nav-link">
        <a data-id="nav-link" href="#">Сообщения</a>
      </div>
      <div @click="toggleNav($event.target)" data-id="nav-link" class="sidebar__nav-link">
        <a data-id="nav-link" href="#">Уведомления</a>
      </div>
      <div @click="toggleNav($event.target)" data-id="nav-link" class="sidebar__nav-link">
        <a data-id="nav-link" href="#">Создать</a>
      </div>
      <div @click="toggleNav($event.target)" data-id="nav-link" class="sidebar__nav-link">
        <a data-id="nav-link" href="#">Профиль</a>
      </div>
      <div @click="toggleNav($event.target)" data-id="nav-link" class="sidebar__nav-link">
        <a data-id="nav-link" href="#">Ещё</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleNav(clickedItem) {
      console.log(clickedItem)
      if (clickedItem.getAttribute("nav-link")) {
        const navLinks = document.querySelectorAll(".sidebar__nav-link");

        navLinks.forEach(item => {
          console.log('sd')
        })
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