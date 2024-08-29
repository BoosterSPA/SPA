<script setup>
    import navBar from './navBar.vue';
</script>

<template>
    <header>
    <div class="container">
        <RouterLink to="/accueil"><h1><img src="https://upload.wikimedia.org/wikipedia/fr/0/00/Logo_de_la_SPA_%28France%29.png" alt="Logo SPA"></h1></RouterLink>
    <div class="nav">
        <navBar />
    </div>
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
    aspect-ratio: 1/1;
    box-sizing: border-box;
    margin: 0 auto;
}
header {
    width: 100vw;
    color: var(--secondary-color);
    background: rgb(255,125,41);
    background: linear-gradient(180deg, rgba(255,125,41,1) 0%, rgba(254,255,210,1) 100%);
    margin:0 0 1rem 0;
    padding: 1rem 0;

}
.container{
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav {
    background-color: #feffd200;
}


</style>