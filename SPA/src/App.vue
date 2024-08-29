<script setup>
import { RouterView } from 'vue-router'
import './style/global.css'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/testpage">Test Page</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>

  </header>

  <RouterView />
</template>

<style scoped>
main {
  width: 80%;
  margin: auto;
}

</style>