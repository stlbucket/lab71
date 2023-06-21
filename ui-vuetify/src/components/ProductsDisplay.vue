<template>
  <div class="products-display">
    <v-icon
      start
      icon="mdi-chevron-left"
      size="x-large"
      @click="lastPage"
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
  justify-content: space-around;
  align-items: center;
}
.product {
  display: flex;
  flex-direction: column;
}
</style>

<script lang="ts" setup>
  import { useProductsStore } from '@/store/products';
  import { storeToRefs } from 'pinia';
  import { computed } from 'vue';
  const store = useProductsStore()
  const { products } = storeToRefs(store)
  console.log(store)

  const lastPage = async () => {
    alert('not implemented')
  }
  const nextPage = async () => {
    alert('not implemented')
  }
</script>