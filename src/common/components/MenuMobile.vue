<template>
    <!-- Mobile Menu Start -->
    <div class="mobile-menu-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="mobile-menu">
                        <nav id="dropdown">
                            <ul>
                                <li>
                                    <router-link class="cursor" :to="{ name: 'catalogue'}">>HOME</router-link>
                                </li>
                                <li>
                                    <router-link class="cursor" :to="{ name: 'cart'}">Cart</router-link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Mobile Menu End -->
</template>

<script>
    export default {
        name: 'menu-mobile-component'
    };
</script>

<style scoped>

</style>