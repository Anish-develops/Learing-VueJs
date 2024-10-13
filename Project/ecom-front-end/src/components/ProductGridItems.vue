<template>
    <div class="product-item">
        <img :src="pro.imageUrl" alt="image" />
        <h3 class="product-name">{{ pro.name }}</h3>
        <p>${{ pro.price }}</p>
        <router-link :to="'/products/' + pro.id">
            <button>view details</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "product-grid-items",
    props: ["pro"],
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
