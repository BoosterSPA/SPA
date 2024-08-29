<script setup>
import { RouterView } from 'vue-router'
import './style/global.css'
import headerComponent from './components/headerComponent.vue';
</script>

<template>
  <headerComponent />
  <RouterView />
</template>

<style scoped>
main {
  width: 80%;
  margin: auto;
}

</style>