<template>
    <section class="main__about">
        <div class="main__about-container">
            <h2 class="title main__about-h2 wow animate__tada">Why try <span>Rhythm?</span></h2>
            <div class="main__about-block">
                <CompanyItem 
                v-for="item in aboutList" 
                :key="item.id"
                :item="item"
                class="wow animate__fadeInUp"
                :data-wow-delay="companyAnimDelay(item.id)"/>
            </div>
        </div>
    </section>
</template>

<script>

import CompanyItem from "@/components/main/CompanyItem.vue";
import {WOW} from "wowjs"
export default {
    components: {
        CompanyItem,
    },
    data(){
        return {
            aboutList: [{
                id: 1,
                title: 'Smooth Browsing',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                icon: 'group.svg'
            },
            {   
                id:2,
                title: 'EASY Delivery',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                icon: 'car.svg'
            },
            {
                id:3,
                title: 'SwiFT PAYMENTS',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                icon: 'wallet.svg'
            }]
        }
    },
    mounted(){
        new WOW({live: false}).init() 
    },
    methods:{
        companyAnimDelay(id){
            if(!id) return ""
            if(id === 1){
                return "0.8s"
            }
            if(id === 2){
                return "1s"
            }
            if(id === 3){
                return "1.2s"
            }
        }
    }
}

</script>