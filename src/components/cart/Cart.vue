<script setup lang="ts">
import { inject, ref, watchEffect } from "vue";
import CartTable from "./CartTable.vue";
import CartTotal from "./CartTotal.vue";
import { cartContext } from "../../types/contextTypes";
const cart: cartContext | undefined = inject("cartContext");
const subTotal = ref(0);
watchEffect(() => {
  subTotal.value = 0;
  cart?.value.items.map((item) => {
    subTotal.value += item.product.price * item.quantity;
  });
});
</script>

<template>
  <div
    class="overflow-x-auto h-full flex flex-col justify-center items-center gap-5 md:w-3/4 mx-auto"
  >
    <CartTable />
    <div class="border-2 !border-gray-100 w-full"></div>
    <CartTotal :subTotal="subTotal" />
  </div>
</template>
