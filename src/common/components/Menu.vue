<template>
    <div>
        <div class="col-md-9 col-sm-12 hidden-xs">
            <div class="mainmenu text-center">
                <nav>
                    <ul id="nav">
                        <li><a href="index.html">HOME</a></li>
                        <li><a href="shop.html">FEATURED</a></li>
                        <li><a href="shop.html">REVIEW BOOK</a></li>
                        <li><a href="about.html">ABOUT AUTHOR</a></li>
                        <li><a href="#">pages</a>
                            <ul class="sub-menu">
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="cart.html">Cart Page</a></li>
                                <li><a href="checkout.html">Check Out</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li><a href="login.html">Login</a></li>
                                <li><a href="my-account.html">My Account</a></li>
                                <li><a href="shop.html">Shopping Page</a></li>
                                <li><a href="single-product.html">Single Shop Page</a></li>
                                <li><a href="wishlist.html">Wishlist Page</a></li>
                                <li><a href="404.html">404 Page</a></li>
                            </ul>
                        </li>
                        <li><a href="contact.html">CONTACT</a></li>
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

</style>