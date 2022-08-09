<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__block">
                <div class="footer__block-info">
                    <div class="footer__block-logo">
                        <a href=""><img src="@/assets/images/logo.png" alt=""></a>
                        <h2 class="footer__logo-title">Rhythm</h2>
                    </div>
                    <div class="footer__info-data">
                    <div class="footer__info-mail">
                        <img src="@/assets/images/icons/gmail.svg" alt="">
                        <a href="mailto:Enquiry@Rhythm.com" class="footer__info-text">Enquiry@Rhythm.com</a>
                    </div>
                    <div class="footer__info-location">
                        <img src="@/assets/images/icons/location.svg" alt="">
                        <a href="https://goo.gl/maps/vhsvYfjxtkMtNDQ86" class="footer__info-text">San Francisco</a>
                    </div>
                    </div>
                </div>
                <div class="footer__block-pages">
                    <div class="footer__menu-block">
                        <h2 class="footer__menu-title">Pages</h2>
                        <ul class="footer__menu-pages">
                            <li v-for="page in menuList" :key="page.id"><a href="#!" class="footer__menu-link">{{page.name}}</a></li>
                        </ul>
                    </div>
                    <div class="footer__menu-block">
                        <h2 class="footer__menu-title">Product</h2>
                        <ul class="footer__menu-pages">
                            <li v-for="page in productList" :key="page.id"><a href="#!" class="footer__menu-link">{{page.name}}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer__block-socnetworks">
                    <div class="footer__menu-block">
                        <h2 class="footer__menu-title">Follow us</h2>
                        <div class="footer__menu-icons">
                            <a href="https://www.facebook.com/" class="footer__menu-icon"><img src="@/assets/images/icons/facebook.svg" alt=""></a>
                            <a href="https://twitter.com/" class="footer__menu-icon"><img src="@/assets/images/icons/twitter.svg" alt=""></a>
                            <a href="https://www.instagram.com/" class="footer__menu-icon"><img src="@/assets/images/icons/instagram.svg" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
            <h3 class="footer-copyright">© 2022 Copyright.Rhythm</h3>
        </div>
    </footer>
</template>

<script>


export default {
    props:{
        menuList: Array,
    },
    data(){
        return {
            productList: [{
                id:1,
                name: "Terms"
            },
            {
                id:2,
                name: "Privacy Policy"
            },
            {
                id:3,
                name: "Copyright"
            }]
        }
    }
}

</script>