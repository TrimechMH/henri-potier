<template>
    <div>
        <div class="col-md-9 col-sm-12 hidden-xs">
            <div class="mainmenu text-center">
                <nav>
                    <ul id="nav">
                        <li>
                            <router-link class="cursor" :to="{ name: 'catalogue'}">HOME</router-link>
                        </li>
                        <li>
                            <router-link class="cursor" :to="{ name: 'cart'}">Cart</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="col-md-1 hidden-sm">
            <shopping-cart-header/>
        </div>
    </div>
</template>

<script>
    import ShoppingCartHeader from './ShoppingCartHeader';

    export default {
        components: {ShoppingCartHeader},
        name: 'menu-component'
    };
</script>

<style scoped>
    .mainmenu nav ul#nav li .cursor {
        display: block;
        font-weight: 500;
        margin: 0;
        padding: 40px 16px 40px 11px;
        text-transform: uppercase;
    }

</style>