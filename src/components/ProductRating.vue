<script setup lang="ts">
type Props = {
  productRating: number;
};

const { productRating } = defineProps<Props>();
const ratings = [1, 2, 3, 4, 5];
const starFilling = (starIndex: number, rate: number) => {
  let className = "star-icon ";
  const difference = rate - starIndex;

  if (difference === 0.5) {
    className += "filled half-filled";
  } else if (difference >= 0.3) {
    className += "filled";
  } else {
    className += "outlined";
  }

  return className;
};
</script>

<template>
  <div class="stars">
    <v-icon name="fa-star" v-for="i in ratings"
      :key="i"
      :class="starFilling(i, productRating)+' size-5'"/>
  </div>
</template>
