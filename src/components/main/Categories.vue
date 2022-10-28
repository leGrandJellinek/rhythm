<template>
    <section class="main__categories">
        <div class="main__categories-container">
            <h2 class="title main__categories-h2 wow swing">Choose based on <span>Categories</span></h2>
            <div class="main__categories-block">
                <CategoriesItem 
                v-for="item in categoriesItems" 
                :key="item.id"
                :item="item"
                class="wow"
                :class="categoriesAnimSide(item.id)"/>
            </div>
        </div>
    </section>
</template>

<script>

import CategoriesItem from "@/components/main/CategoriesItem.vue"
import {WOW} from "wowjs"

export default {
    components: {
        CategoriesItem,
    },
    data(){
        return{
        categoriesItems: [{
                id:1,
                title: 'Acoustic',
                img: 'main__categories-img1.png'
            },
            {   
                id:2,
                title: 'Electric',
                img: 'main__categories-img2.png'
            },
            {
                id:3,
                title: 'Basses',
                img: 'main__categories-img3.png'
            },
            {   
                id:4,
                title: 'Collections',
                img: 'main__categories-img4.png'
            }],
        }
    },
    mounted(){
        new WOW({live: false}).init() 
    },
    methods: {
        categoriesAnimSide(id){
            if(id === 1 || id === 2){
                return "flipInX"
            }
            if(id === 3 || id === 4){
                return "flipInX"
            }
        }
    }
}
</script>
