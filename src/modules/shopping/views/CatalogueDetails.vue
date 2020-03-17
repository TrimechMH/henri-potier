<template>
    <div class="single-product-area section-padding" v-if="bookDetails">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-7">
                    <div class="single-product-image-inner">
                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="one">
                                <a class="venobox" data-gall="gallery" :title="bookDetails.title">
                                    <img :alt="bookDetails.title" :src="bookDetails.cover">
                                </a>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="two">
                                <a class="venobox" data-gall="gallery" :title="bookDetails.title">
                                    <img :alt="bookDetails.title" :src="bookDetails.cover">
                                </a>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="three">
                                <a class="venobox" data-gall="gallery" :title="bookDetails.title">
                                    <img :alt="bookDetails.title" :src="bookDetails.cover">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-5">
                    <div class="single-product-details">
                        <div class="list-pro-rating">
                            <i class="fa fa-star icolor"></i>
                            <i class="fa fa-star icolor"></i>
                            <i class="fa fa-star icolor"></i>
                            <i class="fa fa-star icolor"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <h2>{{bookDetails.title}}</h2>
                        <div class="availability">
                            <span>In stock</span>
                        </div>
                        <p v-for="(description, index) in bookDetails.synopsis" :key="index">{{description}}</p>
                        <div class="single-product-price">
                            <h2>{{bookDetails.price}} €</h2>
                        </div>
                        <div class="product-attributes clearfix">
                                <span class="pull-left" id="quantity-wanted-p">
									<span @click="handleDecreaseQuantity()" class="dec qtybutton">-</span>
									<input type="number" v-model="quantity" class="cart-plus-minus-box">
									<span @click="quantity++" class="inc qtybutton">+</span>
								</span>
                            <span>
                                    <a class="cursor cart-btn btn-default" @click="addToCart()">
                                        <i class="flaticon-shop"></i> Add to cart
                                    </a>
                               </span>
                        </div>
                        <div class="single-product-categories">
                            <label>Categories:</label>
                            <span>e-book, biological, business</span>
                        </div>
                        <div class="social-share">
                            <label>Share: </label>
                            <ul class="social-share-icon">
                                <li><a><i class="flaticon-social"></i></a></li>
                                <li><a><i class="flaticon-social-1"></i></a></li>
                                <li><a><i class="flaticon-social-2"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'catalogue-details',
        computed: {
            ...mapState('shoppingStore', [
                'bookListResult'
            ])
        },
        data() {
            return {
                bookDetails: null,
                quantity: 1
            };
        },
        async created() {
            if (this.bookListResult.length === 0) {
                try {
                    this.bookList = await this.getBooksAction();
                } catch (e) {
                    this.$router.push({name: 'catalogue'});
                }
            }
            this.bookDetails = this._.find(this.bookListResult, {isbn: this.$route.query.bookIsbn});

        },
        methods: {
            ...mapActions('shoppingStore', [
                'getBooksAction'
            ]),
            ...mapActions('cartStore', [
                'updateCart'
            ]),
            /**
             * Handle decrease number of product to be added into cart
             */
            handleDecreaseQuantity() {
                if (this.quantity > 1) {
                    this.quantity--;
                }
            },
            addToCart() {
                const cart = this._.merge(this.bookDetails, {quantity: this.quantity});
                this.updateCart({cart, purpose: 'add'});
            }
        },
        destroyed() {
        }
    };
</script>

<style scoped>

</style>