<template>
      <div class="main__store-item">
        <img :src="require(`@/assets/images/main/store/${item.img}`)" alt="">
        <h3 class="main__store-item-title">{{item.title}}</h3>
        <p class="main__store-item-price">{{item.price}}</p>
    </div>
</template>

<script>
export default {
    props:{
      item: Object
    }
}
</script>