<template>
  <div>
    <div class="swiper">
      <div class="presentation__stories swiper-wrapper">
        <div v-for="user in users" class="presentation__stories-acc swiper-slide">
          <div class="presentation__stories-img">
            <img src="@/assets/user__image.png" alt="user-image">
          </div>
          <div class="presentation__stories-name">{{ user.username }}</div>
        </div>
      </div>

      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export default {
  data() {
    return {
      users: [
        { username: "john" },
        { username: "maria_123" },
        { username: "Simon543" },
        { username: "laura_fow2" },
        { username: "sarah" },
        { username: "lll1op" },
        { username: "lolol_rtym" },
        { username: "keeeti232" },
        { username: "popillq_q" },
        { username: "qwerty5656" }
      ]
    }
  },

  mounted() {
    new Swiper(".swiper", {
      slidesPerView: 5,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}
</script>

<style lang="scss" scoped>
.presentation__stories {
  position: relative;
  z-index: -1;
  padding: 10px 0 10px 10px;
  margin-bottom: 25px;
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
      z-index: -1;
      position: absolute;
      top: -2px;
      bottom: -2px;
      left: -2px;
      right: -2px;
      background: linear-gradient(60deg, rgba(255,221,77,1) 0%, rgba(234,10,152,1) 100%);
      content: '';
      border-radius: 50%;
    }

    & img {
      z-index: 1;
      position: relative;
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

.swiper {
  &-wrapper {
    width: 100vh;
  }

  &-slide {
    flex-shrink: unset;
  }

  &-button {
    &-next, &-prev {
      position: absolute;
      top: 50px;
    }
  }
}
</style>