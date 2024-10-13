<template>
    <div v-if="products.length > 0">
        <div id="page-wrap">
            <h1>Shopping Cart</h1>
            <product-list-item
                v-for="pro in products"
                :key="pro.id"
                :pro="pro"
            />

            
        </div>
    </div>
    <p v-else>You haven't added anything in the cart.</p>
</template>

<script>
import ProductListItem from "./ProductListItem.vue";
export default {
    name: "product-list",
    props: ["products"],
    components: { ProductListItem },

    computed: {
        totalPrice() {
            return this.products.reduce(
                (sum, item) => sum + Number(item.price),
                0
            );
        },
    },
};
</script>

<style scoped>
h1 {
    border-bottom: 1px solid black;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
}

#total-price {
    padding: 16px;
    text-align: right;
}

#checkout-button {
    width: 100%;
}
</style>
