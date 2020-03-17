<template>
    <section>
        <div class="cart-product" v-for="(cartDetails, index) in cart.cartList" :key="index">
            <div class="cart-product-image">
                <router-link class="cursor" :to="{ name: 'details', query: {bookIsbn: cartDetails.isbn}}">
                    <img :alt="cartDetails.title" :src="cartDetails.cover">
                </router-link>
            </div>
            <div class="cart-product-info">
                <p>
                    <span>{{cartDetails.quantity}}</span>
                    <span>x</span>
                    <router-link class="cursor" :to="{ name: 'details', query: {bookIsbn: cartDetails.isbn}}">
                        {{cartDetails.title}}
                    </router-link>
                </p>
                <span class="cart-price"><span>€</span>{{cartDetails.price}}</span>
            </div>
            <div @click="removeCart(cartDetails)" class="cursor cart-product-remove">
                <i class="fa fa-times"></i>
            </div>
        </div>

    </section>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'cart-item',
        computed: {
            ...mapState('cartStore', [
                'cart'
            ])
        },
        methods: {
            ...mapActions('cartStore', [
                'updateCart'
            ]),
            removeCart(cart) {
                this.updateCart({cart, purpose: 'remove'});
            }
        }
    };
</script>

<style scoped>

</style>