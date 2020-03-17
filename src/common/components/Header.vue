<template>
    <div id="header">
        <!--Header Area Start-->
        <div class="header-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-2 col-sm-6 col-xs-6">
                        <div class="header-logo">
                            <router-link class="cursor" :to="{ name: 'catalogue'}">
                                <img src="@/assets/img/logo.png" alt="">
                            </router-link>
                        </div>
                    </div>
                    <div class="col-md-1 col-sm-6 visible-sm  col-xs-6">
                        <shopping-cart-header/>
                    </div>
                    <menu-component/>
                </div>
            </div>
        </div>
        <!--Header Area End-->
        <menu-mobile-component/>
    </div>
</template>

<script>
    import ShoppingCartHeader from './ShoppingCartHeader';
    import MenuComponent from './Menu';
    import MenuMobileComponent from './MenuMobile';

    export default {
        components: {
            MenuMobileComponent,
            MenuComponent,
            ShoppingCartHeader
        },
        name: 'headerComponent',
        mounted() {
            /*eslint no-undef: "error"*/
            $('nav#dropdown').meanmenu({});
        }
    };
</script>

<style scoped>
    .header-logo {
        width: 175px;
        height: 45px;
    }
</style>