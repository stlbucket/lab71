<template>
  <div class="products-display p-20">
    <v-icon
      start
      icon="mdi-chevron-left"
      size="x-large"
      @click="previousPage"
    ></v-icon>
    <div v-for="p in products" class="product">
      <div>
        <v-img
          contain
          width="100px"
          height="100px"
          :src="p.colors[0].productImages[0]"
        ></v-img>

      </div>
      <div>{{ p.name }}</div>
    </div>
    <v-icon
      start
      icon="mdi-chevron-right"
      size="x-large"
      @click="nextPage"
    ></v-icon>
  </div>
</template>

<style scoped>
.products-display {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<script lang="ts" setup>
  import { useProductsStore } from '@/store/products';
  import { storeToRefs } from 'pinia';
  import { computed } from 'vue';
  const store = useProductsStore()
  const { products } = storeToRefs(store)

  const previousPage = async () => {
    await store.previousProductPage()
  }
  const nextPage = async () => {
    await store.nextProductPage()
  }
</script>