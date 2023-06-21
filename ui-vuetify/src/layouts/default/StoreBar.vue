<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <div class="nav">
        <div class="menus text-xl">
          <div>Shop All</div>
          <div>Trending</div>
          <div>T-Shirts</div>
          <div>Sweatshirts</div>
          <div>Bottoms</div>
          <div>Polos</div>
          <div>Outerwear</div>
          <div>Accessories</div>
          <div>Decorating Supplies</div>
          <div>Women</div>
          <div>Men & Unisex</div>
          <div>Kids</div>
        </div>
      </div>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
  //
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-around;
  color: blueviolet;
  background-color: yellow;
  align-items: center;
}
.menus {
  display: flex;
  justify-content: space-around;
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