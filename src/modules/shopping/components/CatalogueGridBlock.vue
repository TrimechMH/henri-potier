<template>
    <div>
        <div class="row shop-single-product-area" v-for="(spitedBook, spitedIndex) in _.chunk(this.bookList, 3)"
             :key="spitedIndex">
            <grid-item v-for="(book, index) in spitedBook" :book="book" :key="index"/>
        </div>
    </div>
</template>

<script>
    import GridItem from './GridItem';

    export default {
        components: {GridItem},
        name: 'catalogue-grid-block',
        props: ['bookList'],
    };
</script>

<style scoped>

</style>