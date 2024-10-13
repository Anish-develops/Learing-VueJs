<template>
    <div id="page-wrap" v-if="product">
        <div id="img-wrap">
            <img :src="product.imageUrl" alt="" />
        </div>
        <div id="product-details">
            <h1>{{ product.name }}</h1>
            <h3 id="price">{{ product.price }}</h3>
            <p>Average rating : {{ product.averageRating }}</p>
            <button id="add-to-cart">Add to cart</button>

            <h4>Description</h4>
            <p>{{ product.description }}</p>
        </div>
    </div>
    <not-found v-else />
</template>

<script>

import axios from "axios";
//import { products } from "@/fake-data";
import NotFound from "./NotFound.vue";

export default {
    components: { NotFound },
    name: "product-details-page",
    data() {
        return {
            // product: products.find((p) => p.id == this.$route.params.id),

            product: null,
        };
    },

    async created() {
        const id = this.$route.params.id;
        const response = await axios.get(
            `http://localhost:3000/api/get-product/${id}`
        );

        const data = response.data.data;
        this.product = data;

    },
};
</script>

<style scoped>
#page-wrap {
    margin-top: 16px;
    padding: 16px;
    max-width: 600px;
}

#img-wrap {
    text-align: center;
}

img {
    width: 400px;
}

#product-details {
    padding: 16px;
    position: relative;
}

#add-to-cart {
    width: 100%;
}

#price {
    position: absolute;
    top: 24px;
    right: 16px;
}
</style>
