<template> 
<div class="main__store-titles">
    <h2 class="main__store-title wow slideInLeft" data-wow-duration="1s">NEW ON THE BOARD</h2>
    <a href="#!" class="main__store-view wow slideInRight" data-wow-duration="1s">view all</a>
</div>
<div class="main__store-block">
    <StoreItem 
    v-for="item in arr" 
    :key="item.id"
    :item="item"
    class="wow"
    :class="storeAnimationSide(item.id)"
    data-wow-duration="1s"
    data-wow-delay="1s"/>
</div>
</template>

<script>
import StoreItem from "@/components/main/StoreItem.vue";
import {WOW} from "wowjs"
export default {
    props: {
        arr : Array,
    },
    components: {
        StoreItem,
    },
    data(){
        return {
        }
    },
    mounted(){
        new WOW({live: false}).init() 
    },
    methods:{
        storeAnimationSide(id){
            if(!id) return ""
            if(id === 1 || id === 4){
                return "fadeInLeft"
            }
            if(id === 3 || id === 6){
                return "fadeInRight"
            }
            if(id === 2 || id === 5){
                return "fadeInUp"
            }
        }
    }
}
</script>
