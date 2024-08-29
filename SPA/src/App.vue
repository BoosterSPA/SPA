<script setup>
import { RouterLink, RouterView } from 'vue-router'
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