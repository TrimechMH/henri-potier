<template>
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog" v-if="bookSelected">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button @click="clearSelectedBook()" type="button" class="close" data-dismiss="modal"
                            aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <div class="modal-body">
                    <div class="modal-product">
                        <div class="product-images">
                            <div class="main-image images">
                                <img :alt="bookSelected.title" :src="bookSelected.cover">
                            </div>
                        </div>
                        <div class="product-info">
                            <h1>{{bookSelected.title}}</h1>
                            <div class="price-box">
                                <p class="s-price">
                                    <span class="special-price">
                                        <span class="amount">{{bookSelected.price}} €</span>
                                    </span>
                                </p>
                            </div>
                            <div class="quick-add-to-cart">
                                <form method="post" class="cart">
                                    <div class="numbers-row">
                                        <input type="number" id="french-hens" v-model="quantity">
                                    </div>
                                    <a @click="addToCart()" class="single_add_to_cart_button">Add to cart</a>
                                </form>
                            </div>
                            <div class="quick-desc">
                                <p v-for="(description, index) in bookSelected.synopsis" :key="index">
                                    {{description}}</p>
                            </div>
                            <div class="social-sharing">
                                <div class="widget widget_socialsharing_widget">
                                    <h3 class="widget-title-modal">Share this product</h3>
                                    <ul class="social-icons">
                                        <li><a target="_blank" title="Facebook" href="#" class="facebook social-icon"><i
                                                class="fa fa-facebook"></i></a></li>
                                        <li><a target="_blank" title="Twitter" href="#" class="twitter social-icon"><i
                                                class="fa fa-twitter"></i></a></li>
                                        <li><a target="_blank" title="Pinterest" href="#" class="pinterest social-icon"><i
                                                class="fa fa-pinterest"></i></a></li>
                                        <li><a target="_blank" title="Google +" href="#" class="gplus social-icon"><i
                                                class="fa fa-google-plus"></i></a></li>
                                        <li><a target="_blank" title="LinkedIn" href="#" class="linkedin social-icon"><i
                                                class="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div><!-- .product-info -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapActions } from 'vuex';

    export default {
        name: 'product-modal',
        data() {
            return {
                quantity: 1
            };
        },
        computed: {
            ...mapState('shoppingStore', [
                'bookSelected'
            ])
        },
        methods: {
            ...mapMutations('shoppingStore', [
                'setBookSelected'
            ]),
            ...mapActions('cartStore', [
                'updateCart'
            ]),
            clearSelectedBook() {
                this.setBookSelected(undefined);
            },
            addToCart() {
                const cart = this._.merge(this.bookSelected, {quantity: this.quantity});
                this.updateCart({cart, purpose: 'add'});
            }
        },
        destroyed() {
            this.setBookSelected(undefined);
        }
    };
</script>

<style scoped>
    a.single_add_to_cart_button {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        -webkit-appearance: button;
        cursor: pointer;
        overflow: visible;
        color: inherit;
        margin: 0;
    }


</style>