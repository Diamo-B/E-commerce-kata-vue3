<script setup lang="ts">
import { provide, ref, watchEffect } from "vue";
import Navbar from "./components/layout/Navbar.vue";
import Footer from "./components/layout/Footer.vue"
import useStoreInit from "./composables/useStoreInit";
const { fetchData, initializeValues } = useStoreInit();
const productsValues = ref();
const cartValues = ref();
const categoryValue = ref();
let setSelected = (cat: string) => {
  categoryValue.value.selected = cat;
};
watchEffect(() => {
  fetchData().then(() => {
    // Todo: optimize this. there must be a better way!!
    const values = initializeValues();
    productsValues.value = values.productsValue.value;
    cartValues.value = values.cartValues.value;
    categoryValue.value = values.categoryValue.value;
  });
});
provide("productsContext", productsValues);
provide("cartContext", cartValues);
provide("categoriesContext", { categoryValue, setSelected });
</script>

<template>
  <div class="h-full w-full flex flex-col" data-theme="dark">
    <Navbar />
    <div class="flex-1">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>
