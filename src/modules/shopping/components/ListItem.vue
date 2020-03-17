<template>
    <div class="single-shop-product">
        <div class="col-xs-12 col-sm-5 col-md-4">
            <div class="left-item">
                <router-link class="cursor" :title="book.title"
                             :to="{ name: 'details', query: {bookIsbn: book.isbn}}">
                    <img :alt="book.title" :src="book.cover">
                </router-link>
            </div>
        </div>
        <div class="col-xs-12 col-sm-7 col-md-8">
            <div class="deal-product-content">
                <h4>
                    <router-link class="cursor" :title="book.title"
                                 :to="{ name: 'details', query: {bookIsbn: book.isbn}}">
                        {{book.title}}
                    </router-link>
                </h4>
                <div class="product-price">
                    <span class="new-price"><span>€</span>{{book.price}}</span>
                </div>
                <div class="list-rating-icon">
                    <i class="fa fa-star icolor"></i>
                    <i class="fa fa-star icolor"></i>
                    <i class="fa fa-star icolor"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <p>{{book.synopsis[0]}}</p>
                <div class="availability">
                    <span>In stock</span>
                    <span><a @click="addToCart()" class="cursor">Add to cart</a></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'list-item',
        props: ['book'],
        methods: {
            ...mapActions('cartStore', [
                'updateCart'
            ]),
            addToCart() {
                const cart = this._.merge(this.book, {quantity: 1});
                this.updateCart({cart, purpose: 'add'});
            }
        }
    };
</script>

<style scoped>

</style>