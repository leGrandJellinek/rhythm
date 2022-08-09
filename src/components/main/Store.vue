<template>
    <section class="main__store" id="Store">
        <div class="main__store-container">
            <h2 class="title">Check out the <span>Store</span></h2>
            <div class="main__store-titles">
                <h2 class="main__store-title">NEW ON THE BOARD</h2>
                <a href="#!" class="main__store-view">view all</a>
            </div>
            <div class="main__store-block">
                <div class="main__store-item" v-for="(item,index) in firstArr" :key="item.id">
                        <img :src="require(`@/assets/images/main/store/main__store-img${index+1}.jpg`)" alt="">
                        <h3 class="main__store-item-title">{{item.title}}</h3>
                        <p class="main__store-item-price">{{item.price}}</p>
                </div>
            </div>
            <div class="main__store-titles">
                <h2 class="main__store-title">NEW ON THE BOARD</h2>
                <a href="#!" class="main__store-view">view all</a>
            </div>
            <div class="main__store-block">
                <div class="main__store-item" v-for="(item,index) in secondArr" :key="item.id">
                    <img :src="require(`@/assets/images/main/store/main__store-img${index+3}.jpg`)" alt="">
                    <h3 class="main__store-item-title">{{item.title}}</h3>
                    <p class="main__store-item-price">{{item.price}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            firstArr: [{
                id:1,
                title: 'The Essential Les Paul',
                price: '$1,299.00',
            },
            {   
                id:2,
                title: 'J-45 Standard',
                price: '$1,699.00',
            },
            {   
                id:3,
                title: 'Hummingbird Standard',
                price: '$2,099.00',
            },],
            secondArr:[{
                id:4,
                title: 'Active Precision Bass® PH V',
                price: '$4,199.00',
            },
            {
                id:5,
                title: 'Redondo Special',
                price: '$2,800.00',
            },
            {
                id:6,
                title: 'Professional II Stratocaster®',
                price: '$3,199.00',
            },]
        }
    },
    methods:{
    }
}
</script>

<style>

</style>