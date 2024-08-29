<script setup>
    import navBar from './navBar.vue';
</script>

<template>
    <header>
    <h1><img src="https://upload.wikimedia.org/wikipedia/fr/0/00/Logo_de_la_SPA_%28France%29.png" alt="Logo SPA"></h1>
    <div>
        <navBar />
    </div>
</header>
</template>

<style scoped>
:root{
    --main-color : #FF7D29;
    --secondary-color : #FFBF78;
    --tertiary-color : #FEFFD2;
    --font : '"Poppins", sans-serif;'
}
img {
    width: 10vw;
    height: 10vh;
    box-sizing: border-box;
}
header {
width: 100%;
    color: var(--secondary-color)
}
</style>