<template>
<div class="main__about-item">
    <img :src="require(`@/assets/images/icons/${item.icon}`)" alt="" class="main__about-icon">
    <h2 class="main__about-title">{{item.title}}</h2>
    <p class="main__about-descr">{{item.descr}}</p>
</div>
</template>

<script>
export default {
    props: {
        item: Object,
    }
}
</script>
