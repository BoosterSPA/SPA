<script setup>
import { Slide } from 'vue-burger-menu'
</script>

<template>
    <div>
        <nav>
            <RouterLink to="/">Accueil</RouterLink>
            <RouterLink to="/adoptionPage">Adoption</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
            <RouterLink to="/donation">Donation</RouterLink>
            <RouterLink to="/partenaires">Partenaires</RouterLink>
        </nav>
    </div>
</template>

<style scoped>
a {
    color: black; /* Couleur du texte avant le survol */
    text-decoration: none;
    padding: 0.7rem;
    margin: 0 1rem;
    border-radius: 20px;
    font-size: 1.2rem;
    position: relative; /* Required for the pseudo-element */
    overflow: hidden; /* Ensures the underline doesn't overflow */
}

/* Pseudo-element for the underline effect */
a::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0; /* Start from the right */
    width: 100%;
    height: 2px; /* Thickness of the underline */
    background-color: #030303; /* Color of the underline */
    transform: scaleX(0); /* Start with no width */
    transform-origin: bottom left; /* Animate from left to right */
    transition: transform 400ms ease; /* Smooth transition for the underline effect */
}

/* Hover effect for links */
a:hover::after {
    transform: scaleX(1); /* Expand the underline to full width */
}

a:hover {
    color: #030303; /* Change the text color to white on hover */
    transition: color 0.4s ease;
}
</style>
