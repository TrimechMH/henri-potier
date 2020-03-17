<template>
    <div class="wrapper">
        <header-component/>
        <breadcrumbs-component/>
        <router-view></router-view>
    </div>
</template>

<script>
    import {
        HeaderComponent,
        BreadcrumbsComponent,
    } from '../components/index';

    export default {
        name: 'mainLayout',
        components: {
            HeaderComponent,
            BreadcrumbsComponent,
        }
    };
</script>

<style scoped>

</style>