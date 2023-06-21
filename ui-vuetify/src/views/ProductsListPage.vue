<script setup lang="ts">
  import ProductsDisplay from '@/components/ProductsDisplay.vue'
</script>

<template>
  <main>
    <products-display></products-display>
  </main>
</template>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
}
</style>