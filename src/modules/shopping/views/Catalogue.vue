<template>
    <section>
        <div class="home shopping-area section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-3 col-xs-12">
                        <catalogue-filters />
                    </div>
                    <div class="col-md-9 col-sm-9 col-xs-12">
                        <div class="shop-tab-area">
                            <catalogue-pagination :bookList="bookList"/>
                            <div class="tab-content">
                                <div class="row tab-pane fade in active" id="home">
                                    <catalogue-grid-block :bookList="bookList"/>
                                </div>
                                <div id="menu1" class="tab-pane fade">
                                    <catalogue-list-block :bookList="bookList"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Quickview Product Start -->
        <div id="quickview-wrapper">
            <!-- Modal -->
            <product-modal/>
        </div>
        <!--End of Quickview Product-->
    </section>
</template>

<script>
    import CatalogueFilters from '../components/CatalogueFilters';
    import CataloguePagination from '../components/CataloguePagination';

    import { mapActions, mapState } from 'vuex';
    import CatalogueGridBlock from '../components/CatalogueGridBlock';
    import CatalogueListBlock from '../components/CatalogueListBlock';
    import ProductModal from '../components/ProductModal';

    export default {
        components: {
            ProductModal,
            CatalogueListBlock,
            CatalogueGridBlock,
            CataloguePagination,
            CatalogueFilters
        },
        name: 'catalogue',
        data() {
            return {
                bookList: []
            };
        },
        computed: {
            ...mapState('shoppingStore', [
                'searchValue',
                'bookListResult'
            ])
        },
        async created() {
            try {
                this.bookList = await this.getBooksAction();
            } catch (e) {
                console.log(e);
            }
        },
        methods: {
            ...mapActions('shoppingStore', [
                'getBooksAction'
            ])
        },
        watch: {
            searchValue: {
                handler() {
                    this.bookList = this.bookListResult.filter(book => {
                        return book.title.toLowerCase().includes(this.searchValue.toLowerCase());
                    });
                }
            }
        }
    };
</script>

<style scoped>

</style>