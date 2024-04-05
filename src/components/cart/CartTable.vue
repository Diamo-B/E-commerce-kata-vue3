<script setup lang="ts">
import { inject } from "vue";
import CartItem from "./CartItem.vue";
import { cartContext } from "../../types/contextTypes";
const cart: cartContext|undefined = inject("cartContext");
</script>

<template>
  <div class="overflow-x-auto py-5 w-full" v-if="cart">
    <h1 class="px-5 md:px-0 font-bold text-xl mb-5">Cart</h1>
    <!-- Desktop -->
    <div
      class="hidden md:block text-center border border-white rounded-lg font-semibold mx-auto"
    >
      <div class="grid grid-cols-5 justify-items-stretch border-b w-full">
        <div class="border-r border-white col-span-2 py-2">
          <p>Product</p>
        </div>
        <div class="border-x border-white py-2">
          <p>Unit price</p>
        </div>
        <div class="border-x border-white py-2">
          <p>Quantity</p>
        </div>
        <div class="border-x border-white py-2">
          <p>Subtotal</p>
        </div>
      </div>
      <div
        v-if="cart.items.length > 0"
        class="grid grid-cols-5 justify-items-stretch overflow-x-auto w-full"
      >
        <CartItem
          v-for="(item, index) in cart.items"
          :cartItem="item"
          :key="item.product.id"
          :isLast="index === cart.items.length - 1"
        />
      </div>
      <div v-else class="w-full py-10">
        <p class="text-center font-semibold">
          No items were added to your cart
        </p>
      </div>
    </div>
    <!-- mobile -->
    <div class="flex flex-col gap-2 md:hidden w-full py-5 px-2">
      <CartItem
        v-if="cart.items.length > 0"
        v-for="item in cart.items"
        :cartItem="item"
        :key="item.product.id"
      />

      <div v-else class="flex-1 h-full"></div>
    </div>
  </div>
</template>
