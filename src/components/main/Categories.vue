<template>
    <section class="main__categories">
        <div class="main__categories-container">
            <h2 class="title main__categories-h2">Choose based on <span>Categories</span></h2>
            <div class="main__categories-block">
                <div class="main__categories-item" v-for="(item,index) in categoriesItems" :key="item.id">
                    <img :src="require(`@/assets/images/main/categories/main__categories-img${index+1}.png`)" alt="" class="main__categories-img">
                    <h2 class="main__categories-title">{{item.title}}</h2>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        categoriesItems: Array
    }
}
</script>
