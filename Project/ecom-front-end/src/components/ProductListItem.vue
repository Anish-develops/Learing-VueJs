<template>
    <div class="product-container">
        <img :src="pro.imageUrl" class="product-image" />
        <div class="details-wrap">
          <h3>{{ pro.name }}</h3>
          <p>${{ pro.price }}</p>
        </div>
        <button class="remove-buttom">Remove from cart</button>
      </div>
</template>


<script>
export default{
    name: "product-list-item",
    props: ["pro"],

}

</script >

<style  scoped>
.product-image {
  flex: 1;
  height: 100px;
  max-width: 100px;
}

.details-wrap {
  padding: 0 16px;
  flex: 3;
}

.remove-button {
  flex: 1;
  margin: auto;
}

.product-container {
  align-content: "center";
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  width: 100%;
}
</style>