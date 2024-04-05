<script setup lang="ts">

import { inject } from "vue";
import { cartContext } from "../../types/contextTypes";

type Props = {
  quantity: number;
  cartItemId: number;
};

const cart: cartContext | undefined = inject("cartContext");
const { cartItemId, quantity } = defineProps<Props>();

</script>

<template>
  <button
    class="border border-r-0 border-primary px-1 md:px-2 rounded-l-lg py-3 min-h-0 h-2 flex justify-center items-center disabled:cursor-not-allowed"
    @click="cart?.decrementQuantity(cartItemId)"
    :disabled="quantity===1"
  >
    <v-icon name="fa-minus" class="size-3 md:size-5" />
  </button>
  <input
    type="text"
    class="text-center rounded-none border-y border-primary bg-transparent h-2 py-3 !w-5 text-base font-normal focus:outline-none"
    readOnly
    :value="quantity"
  />
  <button
    class="border border-l-0 border-primary px-1 md:px-2 rounded-r-lg py-3 min-h-0 h-2 flex justify-center items-center"
    @click="cart?.incrementQuantity(cartItemId)"
  >
    <v-icon name="fa-plus" class="size-3 md:size-5" />
  </button>
</template>
