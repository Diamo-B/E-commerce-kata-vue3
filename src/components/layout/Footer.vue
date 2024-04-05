<script setup lang="ts">
import { v4 } from "uuid";
import { inject } from "vue";
const { categoryValue, setSelected } = inject("categoriesContext");

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <footer class="footer px-10 py-5 2xl:py-10 bg-base-200 text-base-content">
    <aside>
      <v-icon name="fa-slack-hash" class="size-20 stroke-white"/>
      <p>Mini-Ecommerce Kata Ltd.<br />Providing reliable service since 1992</p>
    </aside>
    <nav>
      <h6 class="footer-title">Categories</h6>
      <a
        v-if="categoryValue"
        v-for="cat in categoryValue.categories"
        role="button"
        @click="
          () => {
            scrollToTop();
            setSelected(cat);
          }
        "
        class="link link-hover"
        :key="v4()"
        >{{cat}}</a
      >
    </nav>
    <nav>
      <h6 class="footer-title">Legal</h6>
      <a class="link link-hover">Terms of use</a>
      <a class="link link-hover">Privacy policy</a>
      <a class="link link-hover">Cookie policy</a>
    </nav>
  </footer>
</template>
