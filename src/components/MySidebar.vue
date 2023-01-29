<template>
  <div class="sidebar">
    <div class="sidebar__logo">
      <img src="@/assets/instagram_logo.png" alt="logo">
    </div>
    <div class="sidebar__nav">
      <div><a href="#">Главная</a></div>
      <div><a href="#">Поисковый запрос</a></div>
      <div><a href="#">Интересные</a></div>
      <div><a href="#">Reels</a></div>
      <div><a href="#">Сообщения</a></div>
      <div><a href="#">Уведомления</a></div>
      <div><a href="#">Создать</a></div>
      <div><a href="#">Профиль</a></div>
      <div><a href="#">Ещё</a></div>
    </div>
  </div>
</template>

<script>
export default {

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
</style>