<template>
    <div class="wrapper">
        <Header :menuList="menuList"/>
        <Main />
        <Footer :menuList="menuList"/>
    </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import Footer from "@/components/Footer.vue";
import {scrollAnimation} from "@/assets/scripts/scrollAnimation.js"

export default {
    components:{
        Header,
        Main,
        Footer
    },
    data() {
        return {
            menuList:[{
                id: 'Store',
                name: 'Store'
            },
            {
                id: 'Collections',
                name: 'Collections'
            },
            {
                id: 'Support',
                name: 'Support'
            }]
        }
    },
    created(){
        window.addEventListener("scroll", scrollAnimation);
    },
    mounted(){
        scrollAnimation()
    }
}
</script>

<style>

</style>