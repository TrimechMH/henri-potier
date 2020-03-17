<template>
    <div class="col-md-4">
        <div class="single-banner">
            <div class="product-wrapper">
                <a @click="redirectToDetailsPage()" class="cursor single-banner-image-wrapper">
                    <img :alt="book.title" :src="book.cover">
                    <div class="price"><span>€</span>{{book.price}}</div>
                </a>
                <div class="product-description">
                    <div class="functional-buttons">
                        <a @click="addToCart()" class="cursor" title="Add to Cart">
                            <i class="fa fa-shopping-cart"></i>
                        </a>
                        <a class="cursor" @click="setSelectedBook()" title="Quick view" data-toggle="modal"
                           data-target="#productModal">
                            <i class="fa fa-compress"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="banner-bottom text-center">
                <div class="banner-bottom-title">
                    <a class="cursor" @click="redirectToDetailsPage()">{{book.title}}</a>
                </div>
                <div class="rating-icon">
                    <i class="fa fa-star icolor"></i>
                    <i class="fa fa-star icolor"></i>
                    <i class="fa fa-star icolor"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations, mapActions } from 'vuex';

    export default {
        name: 'grid-item',
        props: ['book'],
        methods: {
            ...mapMutations('shoppingStore', [
                'setBookSelected',
                'setBookDetails'
            ]),
            ...mapActions('cartStore', [
                'updateCart'
            ]),
            /**
             * set selected book to be showed in product modal
             */
            setSelectedBook() {
                this.setBookSelected(this.book);
            },
            /**
             * redirect to details page
             */
            redirectToDetailsPage() {
                const {
                    isbn: bookIsbn
                } = this.book;
                this.$router.push({
                    name: 'details',
                    query: {
                        bookIsbn
                    }
                });
            },
            addToCart() {
                const cart = this._.merge(this.book, {quantity: 1});
                this.updateCart({cart, purpose: 'add'});
            }
        }
    };
</script>

<style scoped>
    .single-banner {
        max-width: 345px;
    }
    .single-banner-image-wrapper::before {
        left: 0;
        top: 0;
    }

</style>