import { createRouter, createWebHistory } from "vue-router";

import Cart from "@/views/Cart.vue";
import ProductDetails from "@/views/ProductDetails.vue";
import ProductsPage from "../views/ProductsPage.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/products",
    name: "Products",
    component: ProductsPage,
  },
  {
    path: "/products/:id",
    name: "details",
    component: ProductDetails,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/",
    redirect: "/products",
  },
  { path: '/:catchAll(.*)', 
    component: NotFound 
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
