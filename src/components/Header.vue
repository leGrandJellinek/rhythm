<template>
  <header class="header">
    <div class="header__container">
      <div class="header__left">
        <Navbar :menuList="menuList" />
        <div class="header__content animation-item mobile">
          <h1 class="header__content-title">
            Browse top quality <span>Guitars</span> online
          </h1>
          <p class="header__content-descr">
            Explore 50k+ latest collections of branded guitars online with
            Rhythm.
          </p>
          <div class="header__content-block">
            <a href="" class="header__content-btn">Get the App</a>
            <div class="header__content-icons">
              <img src="@/assets/images/icons/google_play_grey.svg" alt="" />
              <img src="@/assets/images/icons/apple_logo_grey.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="header__right">
        <img
          src="@/assets/images/header/header__img.png"
          alt=""
          class="header__right-bg"
        />
        <div class="header__right-img">
          <img src="@/assets/images/logo.png" alt="" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  props: {
    menuList: Array,
  },
};
</script>