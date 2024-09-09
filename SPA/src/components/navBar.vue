<script setup>
import { Slide } from 'vue-burger-menu'
</script>

<template>
    <div>
        <nav>
            <RouterLink to="/accueil">Accueil</RouterLink>
            <RouterLink to="/testpage">Adoption</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
            <RouterLink to="/contact">Donation</RouterLink>
            <RouterLink to="/contact">Partenaires</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
        </nav>
    </div>
</template>

<style scoped>
a:link,
a:visited {
    text-decoration: none;
    color: black;
    padding: 0.7rem;
    margin: 0 1rem;
    border-radius: 20px;
    font-size: 1.2rem;
}


a:hover {
    color: var(--main-color);
    background-color: aliceblue;

    transition: 0.5s;
}
</style>