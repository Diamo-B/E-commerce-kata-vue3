<script setup lang="ts">
    import { inject } from "vue";
import {Product} from "../types/Product";
    import sliceProductTitle from "../utils/sliceProductTitle";
    import ProductRating from "./ProductRating.vue"
    type Props = {
        product: Product
    }
    const {product} = defineProps<Props>()

    const { categoryValue } = inject("categoriesContext");
</script>

<template>
    <div class="w-56 py-5 px-5 border rounded-lg border-neutral flex flex-col gap-2 hover:shadow-xl hover:cursor-pointer">
            <img :src="product.image" alt="product's image" class="size-40 rounded-lg bg-contain mx-auto" />
            <div class="flex flex-col gap-1">
                <h1 class="font-semibold text-center">
                    {{sliceProductTitle(product.title)}}
                </h1>
                <p class="text-center text-xs badge badge-accent badge-outline mx-auto">
                    {{product.category}}
                </p>
            </div>
            <div class="flex justify-between items-center w-full px-2">
                <ProductRating :productRating="product.rating.rate"/>
                <p class="text-sm font-semibold">{{product.rating.count}}</p>
            </div>
            <div class="flex justify-between items-center">
                <p class="text-center font-bold text-lg">$ {{product.price}}</p>
                <button class="btn btn-outline btn-primary !min-h-0 h-fit py-1 rounded-full group" @click="categoryValue.addCartItem(product)">
                    <v-icon name="bi-cart3" class="size-5"/>
                </button>
            </div>
        </div>
</template>