import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'
const functionURL = 'https://us-central1-fnb-lab-71.cloudfunctions.net/plp-search'

export type SortDirection = 'asc' | 'desc'
export interface SearchProductsOptions {
  searchTerm?: string
  pageOffset?: Number
  pageSize?: Number
  sortKey?: string
  sortDirection?: SortDirection
}

export const useProductsStore = defineStore('products', () => {
  const products: Ref<any[]> = ref([])

  const queryProducts = async (options: SearchProductsOptions) => {
    try {
      let url = functionURL
      const params = []
      for (const [k, v] of Object.entries(options)) {
        console.log(k, v)
        // console.log(k, v)
        params.push(`${k}=${v}`)
      }
      if (params.length > 0) {
        url = `${url}?${params.join('&')}`
      }

      const request = new Request(url);
      const response = await fetch(request)
      products.value = (await response.json()).data.slice(0,3)
    } catch (e:any) {
      alert(e.message)
    }
  }

  return { products, queryProducts }
})
