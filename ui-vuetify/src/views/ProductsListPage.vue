<script setup lang="ts">
  import ProductsDisplay from '@/components/ProductsDisplay.vue'
  import NavBar from '@/components/NavBar.vue'
  import StoreBar from '@/components/StoreBar.vue'
</script>

<template>
  <main>
    <nav-bar />
    <store-bar />
    <products-display />
  </main>
</template>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
}
</style>