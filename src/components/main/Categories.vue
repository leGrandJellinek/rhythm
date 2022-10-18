<template>
    <section class="main__categories">
        <div class="main__categories-container">
            <h2 class="title main__categories-h2">Choose based on <span>Categories</span></h2>
            <div class="main__categories-block">
                <CategoriesItem 
                v-for="item in categoriesItems" 
                :key="item.id"
                :item="item"/>
            </div>
        </div>
    </section>
</template>

<script>

import CategoriesItem from "@/components/main/CategoriesItem.vue"

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
    }
}
</script>
