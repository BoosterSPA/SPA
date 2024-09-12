<script setup>
    import navBar from './navBar.vue';
</script>

<template>
    <header>
    <div class="container">
        <RouterLink to="/accueil"><h1><img src="https://upload.wikimedia.org/wikipedia/fr/0/00/Logo_de_la_SPA_%28France%29.png" alt="SPA"></h1></RouterLink>
    <div class="nav">
        <navBar />
    </div>
</div>
</header>
</template>

<style scoped>
:root {
    --main-color: #FF6F3C; /* Orange moderne */
    --secondary-color: #FFBF78;
    --tertiary-color: #FEFFD2;
    --font-family: 'Poppins', sans-serif;
    --font-size-base: 16px;
    --font-size-large: 1.5rem;
    --font-size-medium: 1.2rem;
    --font-size-small: 0.9rem;
    --header-height: 20vh;
    --container-width: 80%;
    --transition-duration: 0.4s;
}

/* Global Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-family);
}

body {
    font-size: var(--font-size-base);
    color: var(--main-color);
    background-color: #f5f5f5;
}

img {
    width: 8vw;
    max-width: 120px;
    height: auto;
    object-fit: contain;
    margin: 0 auto;
}

/* Header Styling */
header {
    width: 100%;
    height: var(--header-height);
    color: var(--tertiary-color);
    background-color: #f8f9fa;
    display: flex;
    align-items: center;
    padding: 1rem 0;
    margin-bottom: 2rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    transition: background-color var(--transition-duration) ease-in-out;
}

/* Container inside Header */
.container {
    width: var(--container-width);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Navigation */
.nav {
    display: flex;
    gap: 1.5rem;
    align-items: center;
}

.nav a {
    color: var(--tertiary-color);
    text-decoration: none;
    font-size: var(--font-size-medium);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: color var(--transition-duration), background-color var(--transition-duration);
}

.nav a:hover {
    background-color: var(--tertiary-color);
    color: var(--main-color);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: 400ms ease;
}

/* Hover effect for Header
header:hover {
    background-color: #FF5722; 
} */

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
    header {
        height: 15vh;
        padding: 0.5rem 0;
    }

    .container {
        width: 90%;
        flex-direction: column;
    }

    .nav {
        flex-direction: column;
        gap: 0.8rem;
        margin-top: 1rem;
    }

    img {
        width: 15vw;
    }
}

@media (max-width: 480px) {
    .nav a {
        font-size: var(--font-size-small);
        padding: 0.3rem 0.8rem;
    }

    img {
        width: 20vw;
    }
}
</style>
