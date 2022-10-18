<template> 
<div class="main__store-titles">
    <h2 class="main__store-title">NEW ON THE BOARD</h2>
    <a href="#!" class="main__store-view">view all</a>
</div>
<div class="main__store-block">
    <StoreItem 
    v-for="item in arr" 
    :key="item.id"
    :item="item"/>
</div>
</template>

<script>
import StoreItem from "@/components/main/StoreItem.vue";

export default {
    props: {
        arr : Array,
    },
    components: {
        StoreItem,
    }
}
</script>
