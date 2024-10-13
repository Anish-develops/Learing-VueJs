<template>
    <div id="page-wrap">
        <product-grid :products="products" />
    </div>
</template>

<script>
//import axios from "axios";

//import { products } from "@/fake-data";

import axios from "axios";

import ProductGrid from "@/components/ProductGrid.vue";

export default {
    name: "product-page",

    components: {
        ProductGrid,
    },

    data() {
        return {
            products: [],
        };
    },

    async created() {
        const response = await axios.get(
            "http://localhost:3000/api/get-products"
        );

        console.log(response.data);

        const products = response.data ;
        this.products = products.data;
    },
};
</script>

<style scoped>
.grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
}

.product-item {
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 2px 5px #888;
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;
    padding: 20px;
    position: relative;
    width: 32%;
}

.product-name {
    margin-bottom: 0;
}

img {
    height: 200px;
    width: 200px;
}

a {
    width: 100%;
}

button {
    width: 100%;
}
</style>
