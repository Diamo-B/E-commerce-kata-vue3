<script setup lang="ts">
type Props = {
    subTotal: number;
};
const { subTotal } = defineProps<Props>()
</script>

<template>
  <div class="w-full px-5">
    <div class="flex justify-between">
      <p class="text-base font-semibold">Subtotal</p>
      <p class="text-base font-semibold">$ {{subTotal.toFixed(2)}}</p>
    </div>
    <div class="flex justify-between">
      <p class="text-sm font-semibold">Tax (10%)</p>
      <p class="text-sm font-semibold">
        $ {{((subTotal * 10) / 100).toFixed(2)}}
      </p>
    </div>
  </div>
  <div class="border-2 !border-gray-100 w-full"></div>
  <div class="flex justify-evenly items-center w-full mb-5">
    <div class="text-lg font-bold">
      <p class="text-white">
        Total: $ {{(subTotal + (subTotal * 10) / 100).toFixed(2)}}
      </p>
    </div>
    <button
      class="min-h-0 !h-fit border-2 py-2 px-5 rounded-full btn btn-success text-white"
    >
      Checkout
    </button>
  </div>
</template>
