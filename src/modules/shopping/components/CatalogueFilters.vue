<template>
    <div class="shop-widget">
        <div class="shop-widget-top">
            <aside class="widget shop-filter">
                <h2 class="sidebar-title text-center">BOOK SEARCH</h2>
                <div class="info-widget">
                    <div class="price-filter">
                        <div id="slider-range"></div>
                        <div class="price-slider-amount">
                            <input @input="setSearchValue(search)" v-model="search" type="text" id="search"
                                   name="search" placeholder="Search for a book by title"/>
                            <div class="widget-buttom">
                                <input @click="clearSearch()" type="reset" value="CLEAR"/>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
        <div class="shop-widget-bottom">
            <aside class="widget widget-tag">
                <h2 class="sidebar-title">POPULAR TAG</h2>
                <ul class="tag-list">
                    <li>
                        <a>e-book</a>
                    </li>
                    <li>
                        <a>writer</a>
                    </li>
                    <li>
                        <a>book’s</a>
                    </li>
                    <li>
                        <a>eassy</a>
                    </li>
                    <li>
                        <a>nice</a>
                    </li>
                    <li>
                        <a>author</a>
                    </li>
                </ul>
            </aside>
            <aside class="widget widget-seller">
                <h2 class="sidebar-title">TOP SELLERS</h2>
                <div class="single-seller">
                    <div class="seller-img">
                        <img src="img/shop/1.jpg" alt=""/>
                    </div>
                    <div class="seller-details">
                        <a href="shop.html"><h5>Cold mountain</h5></a>
                        <h5>$ 50.00</h5>
                        <ul>
                            <li><i class="fa fa-star icolor"></i></li>
                            <li><i class="fa fa-star icolor"></i></li>
                            <li><i class="fa fa-star icolor"></i></li>
                            <li><i class="fa fa-star icolor"></i></li>
                            <li><i class="fa fa-star icolor"></i></li>
                        </ul>
                    </div>
                </div>
                <div class="single-seller">
                    <div class="seller-img">
                        <img src="img/shop/2.jpg" alt=""/>
                    </div>
                    <div class="seller-details">
                        <a href=""><h5>The historian</h5></a>
                        <h5>$ 50.00</h5>
                        <ul>
                            <li><i class="fa fa-star icolor"></i></li>
                            <li><i class="fa fa-star icolor"></i></li>
                            <li><i class="fa fa-star icolor"></i></li>
                            <li><i class="fa fa-star icolor"></i></li>
                            <li><i class="fa fa-star icolor"></i></li>
                        </ul>
                    </div>
                </div>
            </aside>
        </div>
    </div>
</template>

<script>

    import { mapMutations } from 'vuex';

    export default {
        name: 'catalogue-filters',
        data() {
            return {
                search: null,
            };
        },
        methods: {
            ...mapMutations('shoppingStore', [
                'setSearchValue'
            ]),
            clearSearch() {
                this.search = '';
                this.setSearchValue(this.search);
            }
        },
    };
</script>

<style scoped>

</style>