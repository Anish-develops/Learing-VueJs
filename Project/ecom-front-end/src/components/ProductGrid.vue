<template>
    <div class="grid-wrap">
        <product-grid-items v-for="pro in products" :key="pro.id" :pro="pro" />
    </div>
</template>

<script>
import ProductGridItems from './ProductGridItems.vue';

export default {
    name: "product-grid",
    components: {  ProductGridItems },

    props: ["products"],
   
}
</script>

<style scoped>
.grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
}
</style>