<template>
    <main class="main">
        <Store />
        <Categories :categoriesItems="categoriesItems" />
        <Brands :brands="brands"/>
        <Company :aboutList="aboutList"/>
        <Customers />
    </main>
</template>

<script>

import Store from '@/components/main/Store.vue';
import Categories from '@/components/main/Categories.vue';
import Brands from '@/components/main/Brands.vue';
import Company from '@/components/main/Company.vue';
import Customers from '@/components/main/Customers.vue';

export default {
    components:{
        Store,
        Categories,
        Brands,
        Company,
        Customers
    },
    data(){
        return {
            categoriesItems: [{
                id:1,
                title: 'Acoustic',
                img: '@/assets/images/main/categories/main__categories-img1.png'
            },
            {   
                id:2,
                title: 'Electric',
                img: '@/assets/images/main/categories/main__categories-img2.png'
            },
            {
                id:3,
                title: 'Basses',
                img: '@/assets/images/main/categories/main__categories-img3.png'
            },
            {   
                id:4,
                title: 'Collections',
                img: '@/assets/images/main/categories/main__categories-img4.png'
            }],
            aboutList: [{
                title: 'Smooth Browsing',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                icon: 'group.svg'
            },
            {
                title: 'EASY Delivery',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                icon: 'car.svg'
            },
            {
                title: 'SwiFT PAYMENTS',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                icon: 'wallet.svg'
            }]
        }
    }
}
</script>