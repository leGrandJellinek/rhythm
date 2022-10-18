<template>
    <main class="main">
        <Store />
        <Categories/>
        <Brands/>
        <Company/>
        <Customers/>
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
    }
}
</script>