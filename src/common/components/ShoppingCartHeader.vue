<template>
    <div class="header-right">
        <ul>
            <li class="shoping-cart">
                <router-link class="cursor" :to="{ name: 'cart'}">
                    <i class="flaticon-shop"></i>
                    <span>{{_.sumBy(_.cloneDeep(cart.cartList), 'quantity')}}</span>
                </router-link>
                <div class="add-to-cart-product">
                    <cart-item/>
                    <div class="total-cart-price">
                        <div class="cart-product-line fast-line">
                            <span>Shipping</span>
                            <span class="free-shiping">
                                <span>€</span>
                                {{ cart.totalPrice - cart.bestOffer.proposedOffer || 0 | numeral('0,0.00')}}
                            </span>
                        </div>
                        <div class="cart-product-line">
                            <span>Total</span>
                            <span class="total">
                                <span>€</span>
                                {{cart.bestOffer.proposedOffer || 0 | numeral('0,0.00')}}
                            </span>
                        </div>
                    </div>
                    <div class="cart-checkout">
                        <router-link class="cursor" :to="{ name: 'cart'}">
                            Check out
                            <i class="fa fa-chevron-right"></i>
                        </router-link>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import CartItem from './CartItem';

    export default {
        components: {CartItem},
        name: 'shopping-cart-header',
        computed: {
            ...mapState('cartStore', [
                'cart'
            ])
        }
    };
</script>

<style scoped>

</style>