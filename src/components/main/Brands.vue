<template>
    <section class="main__brands">
        <div class="main__brands-container">
            <h2 class="title wow bounce">Featuring the <span>Best Brands</span></h2>
            <div class="main__brands-block ">
                <div class="main__brands-item wow fadeInLeft">
                    <div class="main__brands-img"><img src="@/assets/images/main/brands/main__brands-img1.png" alt=""></div>
                    <div class="main__brands-img"><img src="@/assets/images/main/brands/main__brands-img5.png" alt=""></div>
                </div>
                <div class="main__brands-item wow fadeInLeft">
                    <div class="main__brands-img"><img src="@/assets/images/main/brands/main__brands-img2.png" alt=""></div>
                    <div class="main__brands-img"><img src="@/assets/images/main/brands/main__brands-img6.png" alt=""></div>
                </div>
                <div class="main__brands-item wow fadeInRight">
                    <div class="main__brands-img"><img src="@/assets/images/main/brands/main__brands-img3.png" alt=""></div>
                    <div class="main__brands-img"><img src="@/assets/images/main/brands/main__brands-img7.png" alt=""></div>
                </div>
                <div class="main__brands-item wow fadeInRight">
                    <div class="main__brands-img"><img src="@/assets/images/main/brands/main__brands-img4.png" alt=""></div>
                    <div class="main__brands-img"><img src="@/assets/images/main/brands/main__brands-img8.png" alt=""></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {WOW} from "wowjs"
export default {
    mounted(){
        new WOW({live: false}).init() 
    }
}
</script>