<script setup>
import { RouterView } from 'vue-router'
import './style/global.css'
import headerComponent from './components/headerComponent.vue';
import footerComponent from './components/footerComponent.vue';
</script>

<template>
  <headerComponent />
  <RouterView />
  <footerComponent />
</template>

<style scoped>
main {
  width: 80%;
  margin: auto;
}

</style>


