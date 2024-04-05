<script setup lang="ts">
import { inject } from "vue";
import { twMerge } from "tailwind-merge";
import { cartContext } from "../../types/contextTypes";
import { ICartItem } from "../../types/cart";
import sliceProductTitle from "../../utils/sliceProductTitle";
import QuantityComponent from "./QuantityComponent.vue";

type Props = {
  cartItem: ICartItem;
  isLast?: boolean;
};

const { cartItem, isLast } = defineProps<Props>();

const cart: cartContext | undefined = inject("cartContext");
</script>

<template>
  <!-- desktop -->
  <div
    :class="
      twMerge(
        'hidden md:flex border-r border-white col-span-2 py-4 px-5 items-center gap-2',
        !isLast && 'border-b-2'
      )
    "
  >
    <button
      class="h-full rounded-full btn btn-error text-white min-w-0 w-fit px-0"
      @click="cart?.removeCartItem(cartItem.product.id)"
    >
      <v-icon name="bi-trash" class="size-5" />
    </button>
    <div
      class="size-24 bg-clip-border bg-contain bg-white rounded-xl bg-no-repeat bg-center"
      :style="{ backgroundImage: `url(${cartItem.product.image})` }"
    ></div>
    <p>{{ cartItem.product.title }}</p>
  </div>
  <div
    :class="
      twMerge(
        'hidden md:flex border-x border-white items-center justify-center',
        !isLast && 'border-b-2'
      )
    "
  >
    <p>$ {{ cartItem.product.price.toFixed(2) }}</p>
  </div>
  <div
    :class="
      twMerge(
        'hidden md:flex border-x border-white py-2 justify-center items-center',
        !isLast && 'border-b-2'
      )
    "
  >
    <QuantityComponent
      :cartItemId="cartItem.product.id"
      :quantity="cartItem.quantity"
    />
  </div>
  <div
    :class="
      twMerge(
        'hidden md:flex border-x border-white items-center justify-center',
        !isLast && 'border-b-2'
      )
    "
  >
    <p>$ {{ (cartItem.product.price * cartItem.quantity).toFixed(2) }}</p>
  </div>

  <!-- Mobile -->
  <div class="md:hidden grid grid-cols-2 border-2 p-2 rounded-xl">
    <div class="flex gap-2 items-center">
      <button
        class="h-full rounded-full btn btn-error text-white min-w-0 w-fit px-0"
        @click="cart?.removeCartItem(cartItem.product.id)"
      >
        <v-icon name="bi-trash" class="size-5" />
      </button>
      <div
        class="h-16 w-24 bg-contain bg-white rounded-xl bg-no-repeat bg-center"
        :style="{ backgroundImage: `url(${cartItem.product.image})` }"
      ></div>
      <h1 class="text-xs">
        {{ sliceProductTitle(cartItem.product.title, 20) }}
      </h1>
    </div>
    <div class="grid grid-cols-2 justify-content-center place-items-center">
      <div class="flex justify-self-end">
        <QuantityComponent
          :cartItemId="cartItem.product.id"
          :quantity="cartItem.quantity"
        />
      </div>
      <p>$ {{ (cartItem.product.price * cartItem.quantity).toFixed(2) }}</p>
    </div>
  </div>
</template>
