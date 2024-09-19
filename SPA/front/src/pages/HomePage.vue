<script setup>
import carouselComponent from '@/components/carouselComponent.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="home">
        <aside class="opening-hours">
            <div>
                <h3>Horaire d'ouverture</h3>
                <p>Du lundi au vendredi de 10h à 12h et de 14 h à 17 h 30</p>
                <p>Le samedi matin : de 10 h à 12 h</p>
                <p>Fermée le dimanche et les jours fériés</p>
                <p class="important">N'oubliez pas de prendre rendez-vous !</p>
            </div>
        </aside>
        <carouselComponent />
        <RouterLink to="/adoptionPage">
            <button class="view-animals-button">Voir tous les animaux</button>

        </RouterLink>
        <div class="locaux">
            <h3>Nos locaux</h3>
            <img src="https://phrnleng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2021/11/23/node_130498/3132443/public/2021/11/23/B9729095435Z.1_20211123155520_000%2BGQEJCQG47.1-0.jpg?itok=C_Cbn0n_1638722245" alt="Nos locaux">
        </div>
    </div>
</template>

<style scoped>
router-link {
    text-decoration: none; /* Éviter le soulignement */
}
/* Pour s'assurer que les liens ne sont pas soulignés */
.router-link-active, .router-link-exact-active {
    text-decoration: none;
}
.home {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 0;
    font-family: 'Arial', sans-serif;
}

.opening-hours {
    background: #f8f8f8;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
}

.opening-hours h3 {
    margin-top: 0;
    font-size: 1.5rem;
    color: #333;
}

.opening-hours p {
    margin: 0.5rem 0;
    color: #666;
}

.opening-hours .important {
    font-weight: bold;
    color: #FF7D29;
}

.view-animals-button {
    background-color: #FF7D29;
    color: white;
    width: 20%;
    padding: 12px 24px;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: block;
    margin: 2rem auto;
    text-align: center;
    text-decoration: none;
}

.view-animals-button:hover {
    background-color: #E86F1D;
    transform: scale(1.05);
    text-decoration: none;
}

.view-animals-button:active {
    background-color: #FFEEA9;
    transform: scale(0.98);
}

.locaux {
    margin-top: 2rem;
    text-align: center;
}

.locaux img {
    width: 100%;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.locaux h3 {
    margin-bottom: 1rem;
    font-size: 1.75rem;
    color: #333;
}
</style>
