<script setup lang="ts">
import { RouterLink } from 'vue-router';
import {v4} from "uuid";
import { inject } from 'vue';
  const {categoryValue,setSelected} = inject("categoriesContext");
</script>

<template>
    <div class="navbar-center">
        <RouterLink :to="{path:'/'}" class="flex md:hidden btn btn-ghost text-xl" role="button" @click="setSelected(null)" >Mini-Ecommerce</RouterLink>
        <ul class="hidden md:flex menu menu-horizontal px-1">
            <li v-if="categoryValue" v-for="cat in categoryValue.categories" :key="v4()">
              <RouterLink :to="{path:'/'}" role="button" @click="setSelected(cat)">{{cat}}</RouterLink>
            </li>
        </ul>
      </div>
</template>