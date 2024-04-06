<script setup lang="ts">
import { ComputedRef, computed, inject } from "vue";
import ProductCard from "./ProductCard.vue";
import { Product } from "../types/Product";
import { destructuredCategoryContext, productContext } from "../types/contextTypes";


const { categoryValue, setSelected } = inject("categoriesContext") as destructuredCategoryContext
const productsContext:productContext|undefined = inject("productsContext");
const filteredProducts: ComputedRef<Product[]|undefined> = computed(() => {
  if (categoryValue.value.selected) {
    return productsContext?.value.products.filter(
      (item: Product) => item.category === categoryValue.value.selected
    );
  } else {
    return productsContext?.value.products
  }
});


const removeFilter = () => {
  setSelected(null);
};
</script>

<template>
  <div class="bg-base-100 h-full py-5 px-10 flex flex-col">
    <div class="flex justify-between items-center">
      <p class="font-semibold text-lg capitalize">
        {{categoryValue.selected || "All Products"}}
      </p>
      <button
        class="btn btn-error btn-outline rounded-full min-h-0 h-fit py-2 px-5 hover:!text-white"
        :disabled="!categoryValue.selected"
        @click="removeFilter"
      >
        remove filter
        <v-icon name="fc-cancel" class="size-5"/>
      </button>
    </div>
    <div
      class="w-full h-full py-5 flex-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-items-center place-content-center"
    >
      <div
        v-if="filteredProducts && filteredProducts.length>0"
        v-for="prod in filteredProducts"
        class="m-5"
        :key="prod.id"
      >
        <ProductCard :product="prod" />
      </div>

      <div v-else class="flex justify-center items-center col-span-full">
        <span class="loading loading-spinner loading-lg"></span>
      </div>
    </div>
  </div>
</template>
