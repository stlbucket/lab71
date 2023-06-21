<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <div class="nav">
        <div class="menus text-2xl m-3">
          <div>
            <v-img
              contain
              width="60px"
              height="60px"
              src="https://images.contentstack.io/v3/assets/blt4b794b355e4225a8/blt4dcd32049f22bcdc/623cb609811c13262b56cda8/_PRESSHALL_LOGO_LOCKUP_2.png"
            ></v-img>
          </div>
          <div>About Us</div>
          <div>Community</div>
          <div>Inspiration</div>
          <div>Education</div>
        </div>
        <div class="search">
          <v-text-field
            class="search-input"
            placeholder="Search"
            v-model="searchTerm"
            @input="searchProducts"
          >
            <v-icon aria-hidden="false" size="large" @click="searchProducts" :disabled="searchTerm.length < 3">
              mdi-magnify
            </v-icon>
          </v-text-field>
        </div>
        <div class="actions">
          <span>
            Sign In
            <v-icon aria-hidden="false" size="large">
              mdi-account
            </v-icon>
          </span>
          <v-icon aria-hidden="false" size="large">
            mdi-heart
          </v-icon>
          <v-icon aria-hidden="false" size="large">
            mdi-cart
          </v-icon>
        </div>
      </div>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { useProductsStore } from '@/store/products'
  
  const searchTerm = ref('')
  onMounted(async ()=> {
    await useProductsStore().searchProducts(searchTerm.value)
  })

  const searchProducts = async () => {
    await useProductsStore().searchProducts(searchTerm.value)
  }  
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-around;
  color: blueviolet;
  background-color: lightpink;
  align-items: center;
}
.menus {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  align-items: center;
}
.search {
  display: flex;
  width: 300px;
  align-items: stretch;
  flex-grow: 1;
  /* flex-grow: 1; */
}
.search-input {
  background: white;
}
.actions {
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
}
</style>