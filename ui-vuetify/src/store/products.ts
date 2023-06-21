import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'
const functionURL = 'https://us-central1-fnb-lab-71.cloudfunctions.net/plp-search'

export const useProductsStore = defineStore('products', () => {
  const products: Ref<any[]> = ref([])

  const queryProducts = async (searchTerm?: string) => {
    try {
      // const url = `${functionURL}${searchTerm && searchTerm.length > 3 ? `?searchTerm=${searchTerm}` : ''}`
      const url = functionURL
      const request = new Request(url);
      const response = await fetch(request)
      products.value = (await response.json()).data.slice(0,3)
    } catch (e:any) {
      alert(e.message)
    }
  }

  return { products, queryProducts }
})
