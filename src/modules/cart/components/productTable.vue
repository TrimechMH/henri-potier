<template>
    <div class="row">
        <div class="col-md-12">
            <div class="wishlist-table-area table-responsive">
                <table>
                    <thead>
                    <tr>
                        <th class="product-remove">Remove</th>
                        <th class="product-image">Image</th>
                        <th class="t-product-name">Product Name</th>
                        <th class="product-unit-price">Unit Price</th>
                        <th class="product-quantity">Quantity</th>
                        <th class="product-subtotal">Subtotal</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(cartDetails, index) in cart.cartList" :key="index">
                        <td class="product-remove">
                            <a @click="removeCart(cartDetails)" class="cursor">
                                <i class="flaticon-delete"></i>
                            </a>
                        </td>
                        <td class="product-image">
                            <router-link class="cursor" :to="{ name: 'details', query: {bookIsbn: cartDetails.isbn}}">
                                <img :alt="cartDetails.title" :src="cartDetails.cover">
                            </router-link>
                        </td>
                        <td class="t-product-name">
                            <h3>
                                <router-link class="cursor"
                                             :to="{ name: 'details', query: {bookIsbn: cartDetails.isbn}}">
                                    {{cartDetails.title}}
                                </router-link>
                            </h3>
                        </td>
                        <td class="product-unit-price">
                            <p>€ {{cartDetails.price}}</p>
                        </td>
                        <td class="product-quantity product-cart-details">
                            <p>{{cartDetails.quantity}}</p>
                        </td>
                        <td class="product-quantity">
                            <p>€ {{cartDetails.price * cartDetails.quantity || 0 | numeral('0,0.00')}}</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="shopingcart-bottom-area">
                <a class="left-shoping-cart cursor">CONTINUE SHOPPING</a>
                <div class="shopingcart-bottom-area pull-right">
                    <a class="right-shoping-cart cursor">CLEAR SHOPPING CART</a>
                    <a class="right-shoping-cart cursor">UPDATE SHOPPING CART</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'product-table',
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