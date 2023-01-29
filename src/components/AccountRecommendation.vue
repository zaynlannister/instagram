<template>
  <div class="presentation-recommendation">
    <div class="rec__account">
      <img src="@/assets/user__image.png">
      <div class="rec__account-name">username</div>
      <div class="rec__account-button">
        <button class="btn">Переключиться</button>
      </div>
    </div>
    <div class="rec__text">Рекомендации для вас</div>
    <div class="presentation-container">
      <div class="rec__user">
        <div class="rec__user-image"><img src="@/assets/user__image.png"></div>
        <div class="rec__user-name">username</div>
        <div class="rec__user-subscribe">
          <button class="btn">Подписаться</button>
        </div>
      </div>
      <div class="rec__user">
        <div class="rec__user-image"><img src="@/assets/user__image.png"></div>
        <div class="rec__user-name">username</div>
        <div class="rec__user-subscribe">
          <button class="btn">Подписаться</button>
        </div>
      </div>
      <div class="rec__user">
        <div class="rec__user-image"><img src="@/assets/user__image.png"></div>
        <div class="rec__user-name">username</div>
        <div class="rec__user-subscribe">
          <button class="btn">Подписаться</button>
        </div>
      </div>
      <div class="rec__user">
        <div class="rec__user-image"><img src="@/assets/user__image.png"></div>
        <div class="rec__user-name">username</div>
        <div class="rec__user-subscribe">
          <button class="btn">Подписаться</button>
        </div>
      </div>
      <div class="rec__user">
        <div class="rec__user-image"><img src="@/assets/user__image.png"></div>
        <div class="rec__user-name">username</div>
        <div class="rec__user-subscribe">
          <button class="btn">Подписаться</button>
        </div>
      </div>
    </div>
    <div class="presentation-rec__links">
      <a href="#">Информация</a>
      <a href="#">Помощь</a>
      <a href="#">Пресса</a>
      <a href="#">API</a>
      <a href="#">Вакансии</a>
      <a href="#">Конфиденциальность</a>
      <a href="#">Условия</a>
      <a href="#">Места</a>
      <a href="#">Язык</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.presentation {
  &-recommendation {
    width: 300px;
    font-size: 14px;
  }

  &-rec__links a {
    font-size: 12px;
    display: inline-block;
    margin-bottom: 5px;

    &:hover {
      text-decoration: underline;
    }

    &::after {
      content: '\00B7';
      margin: 0 0.25em 0 0.25em;
    }
  }
}

.rec {
  &__account {
    margin-bottom: 20px;
    font-weight: 500;
    color: rgb(38, 38, 38);
    display: flex;
    align-items: center;

    & img {
      width: 46px;
      height: 46px;
      border-radius: 30px;
      object-fit: cover;
    }

    &-name {
      margin-left: 10px;
    }

    &-button {
      margin-left: auto;
    }
  }

  &__text {
    font-weight: bold;
    color: rgb(142, 142, 142);
    padding-bottom: 12px;
  }

  &__user {
    display: flex;
    align-items: center;
    margin-bottom: 13px;

    &-image img {
      width: 32px;
      height: 32px;
      border-radius: 20px;
      object-fit: cover;
    }

    &-name {
      margin-left: 10px;
      font-weight: 500;
    }

    &-subscribe {
      margin-left: auto;
    }
  }
}
</style>