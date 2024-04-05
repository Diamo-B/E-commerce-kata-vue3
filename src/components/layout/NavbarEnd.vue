<script setup lang="ts">
import { inject } from 'vue';
import { cartContext } from '../../types/contextTypes';
    const cart:cartContext|undefined = inject("cartContext");
</script>

<template>
    <div class="navbar-end">
      <div v-if="cart" class="dropdown dropdown-end">
        <RouterLink
          role="button"
          class="mr-5 group hover:text-orange-500"
          :to="{path:'/cart'}"
        >
          <div class="indicator">
            <v-icon name="bi-cart3" class="size-5"/>
            <span class="badge badge-sm indicator-item bg-base-300 group-hover:text-orange-500">
              {{cart.items.length}}
            </span>
          </div>
        </RouterLink>
      </div>
    </div>
</template>