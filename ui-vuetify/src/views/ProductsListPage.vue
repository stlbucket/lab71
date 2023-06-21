<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  const products = ref()
  const queryProducts = async () => {
    try {
      const request = new Request('https://us-central1-fnb-lab-71.cloudfunctions.net/plp-search');
      const response = await fetch(request)
      products.value = (await response.json()).data
    } catch (e:any) {
      alert(e.message)
    }
  }
  
  onMounted(async ()=> {
    await queryProducts()
  })
</script>

<template>
  <main>
    
    <pre>{{ JSON.stringify(products,null,2) }}</pre>
  </main>
</template>
