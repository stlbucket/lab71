<template>
  <v-app>
    <div class="app-container">
      <default-bar />
      <nav-bar />
      <store-bar />
      <default-view />      
    </div>
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultBar from './AppBar.vue'
  import NavBar from './NavBar.vue'
  import DefaultView from './View.vue'
  import StoreBar from './StoreBar.vue'
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  gap: 0rem;
}
</style>