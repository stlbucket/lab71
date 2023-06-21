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
  const currentSearchTerm = ref()
  const currentPageOffset = ref(0)
  const currentTotalPages = ref(0)

  const queryProducts = async () => {
    const options = {
      searchTerm: currentSearchTerm.value,
      pageOffset: currentPageOffset.value
    }
    try {
      let url = functionURL
      const params = []
      for (const [k, v] of Object.entries(options)) {
        params.push(`${k}=${v}`)
      }
      if (params.length > 0) {
        url = `${url}?${params.join('&')}`
      }

      const request = new Request(url);
      const response = await fetch(request)
      const data = (await response.json()).data

      products.value = data.products.slice(0,3)
      currentPageOffset.value = data.pageOffset
      currentTotalPages.value = data.totalPages
    } catch (e:any) {
      alert(e.message)
    }
  }

  const searchProducts = async (searchTerm: string) => {
    currentSearchTerm.value = searchTerm
    await queryProducts()
  }

  const nextProductPage = async () => {
    if (currentPageOffset.value < currentTotalPages.value-1) {
      currentPageOffset.value = currentPageOffset.value + 1
    } else {
      currentPageOffset.value = 0
    }
    await queryProducts()
  }

  const previousProductPage = async () => {
    if (currentPageOffset.value > 0) {
      currentPageOffset.value = currentPageOffset.value - 1
    } else {
      currentPageOffset.value = currentTotalPages.value -1
    }
    await queryProducts()
  }

  return { products, searchProducts, nextProductPage, previousProductPage }
})
