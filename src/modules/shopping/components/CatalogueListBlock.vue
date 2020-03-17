<template>
    <div class="row">
        <list-item v-for="(book, index) in bookList" :book="book" :key="index"/>
    </div>
</template>

<script>
    import ListItem from './ListItem';

    export default {
        components: {ListItem},
        name: 'catalogue-list-block',
        props: ['bookList']
    };
</script>

<style scoped>

</style>