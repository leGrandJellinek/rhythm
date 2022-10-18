<template>
  <nav class="header__nav" :class="{active: burger}">
    <div class="header__nav-left">
      <img src="@/assets/images/logo.png" alt="" />
      <h2 class="header__nav-title">Rhythm</h2>
    </div>
    <ul class="header__nav-menu" :class="{ active: burger }">
      <li v-for="item in menuList" :key="item.id">
        <a :href="`#${item.id}`" class="header__nav-link">{{ item.name }}</a>
      </li>
      <li class="header__nav-close" @click="burgerClose">
        <a href="#!">
          <img src="@/assets/images/icons/close.svg" alt="">
        </a>
      </li>
    </ul>
    <button class="header__nav-burger" @click="burgerOpen" >
      <img src="@/assets/images/icons/burger.svg" alt="" />
    </button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      burger: false,
    };
  },
    props:{
        menuList: Array
    },
  methods: {
    burgerOpen(){
      this.burger = !this.burger;
      const body = document.querySelector("body")
      body.style = `overflow:hidden;`
    },
    burgerClose(){
      this.burger = !this.burger;
      const body = document.querySelector("body")
      body.style = `overflow:visible;`
    }
  }
};
</script>