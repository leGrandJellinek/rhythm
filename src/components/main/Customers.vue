<template>
    <section class="main__customers">
        <div class="main__customers-container">
            <h2 class="title">What <span>our customer’s</span> say</h2>
            <div class="main__customers-block">
                <div class="main__customers-left">
                    <img src="@/assets/images/main/customers/avatar.png" alt="" class="main__customers-img">
                </div>
                <div class="main__customers-right">
                    <p class="main__customers-descr">
                        “The Quality and Delivery is always on time, being a professional guitarist myself I love the customer service the brand provides, highly recommend Rhythm anytime.”
                    </p>
                    <div class="main__customers-right-block">
                        <div class="main__customers-names">
                            <h3 class="main__customers-name">Ryan Wels</h3>
                            <h3 class="main__customers-job">PROFESSIONAL GUITARIST</h3>
                        </div>
                        <div class="main__customers-dots">
                            <div class="main__customers-dot" v-for="n in 4" :key="n" 
                            @click="isActive = !isActive" 
                            v-bind:class="{active: isActive}"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            isActive: false,
        }
    },
    methods: {
        addActive(){
            
        }
    }
}
</script>