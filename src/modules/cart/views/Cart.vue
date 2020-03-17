<template>
    <section>
        <div v-if="cart.cartList.length > 0">
            <!-- Cart Area Start -->
            <div class="shopping-cart-area section-padding">
                <div class="container">
                    <product-table/>
                </div>
            </div>
            <!-- Cart Area End -->
            <!-- Discount Area Start -->
            <div class="discount-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <div class="discount-main-area">
                                <div class="discount-top">
                                    <h3>DISCOUNT CODE</h3>
                                    <p>Enter your coupon code if have one</p>
                                </div>
                                <div class="discount-middle">
                                    <input type="text" placeholder="">
                                    <a class="cursor">APPLY COUPON</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="subtotal-main-area">
                                <div class="subtotal-area">
                                    <h2>SUBTOTAL<span>€</span>
                                        {{ cart.totalPrice - cart.bestOffer.proposedOffer || 0 | numeral('0,0.00')}}
                                    </h2>
                                </div>
                                <div class="subtotal-area">
                                    <h2>GRAND TOTAL
                                        <span>€</span>
                                        {{cart.bestOffer.proposedOffer || 0 | numeral('0,0.00')}}
                                    </h2>
                                </div>
                                <a class="cursor">CHECKOUT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Discount Area End -->
        </div>
        <div class="cart-checkout floatleft margT25" v-else>
            <h3>There is no book in your cart</h3>
            <router-link class="cursor" :to="{ name: 'catalogue'}">
                Back to shopping list !
                <i class="fa fa-chevron-left"></i>
            </router-link>
        </div>
    </section>
</template>

<script>
    import { mapState } from 'vuex';
    import ProductTable from '../components/productTable';

    export default {
        components: {ProductTable},
        name: 'cart',
        computed: {
            ...mapState('cartStore', [
                'cart'
            ])
        }
    };
</script>

<style scoped>
    .cart-checkout {
        margin: 25px;
        padding: 25px;
    }
</style>