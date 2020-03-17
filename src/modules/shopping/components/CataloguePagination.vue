<template>
    <div class="shop-tab-list">
        <div class="shop-tab-pill pull-left">
            <ul>
                <li class="active" id="left"><a data-toggle="pill" href="#home"><i
                        class="fa fa-th"></i><span>Grid</span></a></li>
                <li><a data-toggle="pill" href="#menu1"><i class="fa fa-th-list"></i><span>List</span></a></li>
            </ul>
        </div>
        <div class="shop-tab-pill pull-right">
            <ul>
                <li class="product-size-deatils">
                    <div class="show-label">
                        <label>{{bookList.length }} book(s)</label>
                    </div>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'catalogue-pagination',
        props: ['bookList'],
    };
</script>

<style scoped>

</style>