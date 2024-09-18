<script setup>
import { RouterView } from 'vue-router'
import '../../front/src/style/global.css'
import headerComponent from '../../front/src/components/headerComponent.vue';
import footerComponent from '../../front/src/components/footerComponent.vue';
</script>

<template>
  <headerComponent/>
  <RouterView/>
  <footerComponent/>
</template>

<style scoped>
main {
  width: 80%;
  margin: auto;
}

</style>


// app.js ou index.js

import express from 'express';
import db from './config/db.js'; // Assure-toi que le chemin est correct

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Définis tes routes ici

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



