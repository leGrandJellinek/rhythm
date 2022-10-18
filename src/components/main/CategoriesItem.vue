<template>
<div class="main__categories-item">
    <img :src="require(`@/assets/images/main/categories/${item.img}`)" alt="" class="main__categories-img">
    <h2 class="main__categories-title">{{item.title}}</h2>
</div>
</template>

<script>

export default {
    props: {
        item: Object,
    }
}
</script>