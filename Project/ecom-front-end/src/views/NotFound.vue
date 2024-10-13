<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for doesn't exist.</p>
    <router-link to="/products">Go to Products Page</router-link>
  </div>
</template>


<script>
export default {
name:'NotFoundPage'
};
</script>



<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
}
</style>