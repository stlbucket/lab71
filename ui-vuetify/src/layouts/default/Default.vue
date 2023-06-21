<template>
  <v-app>
    <div class="app-container">
      <default-bar />
      <default-view />      
    </div>
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  gap: 0rem;
}
</style>