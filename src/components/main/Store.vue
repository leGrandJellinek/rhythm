<template>
    <section class="main__store" id="Store">
        <div class="main__store-container">
            <h2 class="title">Check out the <span>Store</span></h2>
            <StoreBlock 
            v-for="(arr,index) in storeProducts" 
            :key="index"
            :arr="arr"/>
        </div>
    </section>
</template>

<script>
import StoreBlock from "@/components/main/StoreBlock.vue";
export default {
    components: {
        StoreBlock,
    },
    data(){
        return {
            storeProducts:[
            [{
                id:1,
                title: 'The Essential Les Paul',
                price: '$1,299.00',
                img: 'main__store-img1.jpg',
            },
            {   
                id:2,
                title: 'J-45 Standard',
                price: '$1,699.00',
                img: 'main__store-img2.jpg'
            },
            {   
                id:3,
                title: 'Hummingbird Standard',
                price: '$2,099.00',
                img: 'main__store-img3.jpg'
            },],
            [{
                id:4,
                title: 'Active Precision Bass® PH V',
                price: '$4,199.00',
                img: 'main__store-img4.jpg'
            },
            {
                id:5,
                title: 'Redondo Special',
                price: '$2,800.00',
                img: 'main__store-img5.jpg'
            },
            {
                id:6,
                title: 'Professional II Stratocaster®',
                price: '$3,199.00',
                img: 'main__store-img6.jpg'
            },]
            ]
        }
    },
    methods:{
    }
}
</script>

<style>

</style>