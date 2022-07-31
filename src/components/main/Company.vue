<template>
    <section class="main__about">
        <div class="main__about-container">
            <h2 class="title main__about-h2">Why try <span>Rhythm?</span></h2>
            <div class="main__about-block">
                <div class="main__about-item" v-for="(item, index) in aboutList" :key="index">
                    <img :src="require(`@/assets/images/icons/${item.icon}`)" alt="" class="main__about-icon">
                    <h2 class="main__about-title">{{item.title}}</h2>
                    <p class="main__about-descr">{{item.descr}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    props:{
        aboutList: Array
    }
}

</script>