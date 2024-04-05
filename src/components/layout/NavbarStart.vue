<script setup lang="ts">
import { v4 } from "uuid";
import { inject } from "vue";
import { RouterLink } from "vue-router";

const { categoryValue, setSelected } = inject("categoriesContext");
</script>

<template>
  <div class="navbar-start">
    <RouterLink
      :to="{ path: '/' }"
      class="hidden md:flex btn btn-ghost text-xl"
      role="button"
      @click="
        {
          setSelected(null);
        }
      "
      >Mini-Ecommerce</RouterLink
    >
    <div class="dropdown md:hidden">
      <div tabIndex="{0}" role="button" class="btn btn-ghost btn-circle">
        <v-icon name="hi-menu" class="size-5"/>
      </div>
      <ul
        tabIndex="{0}"
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li
          v-if="categoryValue"
          v-for="cat in categoryValue.categories"
          :key="v4()"
        >
          <RouterLink
            :to="{ path: '/' }"
            role="button"
            @click="setSelected(cat)"
            >{{ cat }}</RouterLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>
