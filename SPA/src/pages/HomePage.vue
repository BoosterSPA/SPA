<script setup>
import carouselComponent from '@/components/carouselComponent.vue';
</script>

<template>
    <div class="container">
        <aside>
            <div>
            <h3>Horaire d'ouverture</h3>
            <p>Du lundi au vendredi de 10h à 12h et de 14 h à 17 h 30</p>
            <p>Le samedi matin : de 10 h à 12 h</p>
            <p>Fermée le dimanche et les jours fériés</p>
            <p>
                <strong>N'oubliez pas prendre rendez-vous !
                </strong>
            </p>
            </div>
            <div>
                
            </div>
        </aside>
        <carouselComponent />
        <RouterLink to="/testpage"><button>Voir tous les animaux</button></Routerlink>
    </div>
</template>

<style scoped>
a {
    text-decoration: none;
}

.container {
    width: 80%;
    margin: 0 auto;
}

button {
    background-color: #FF7D29;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    display: flex;
}
aside {
    margin: 1rem 0;
}
button:hover {
    background-color: #FFBF78;
    transform: scale(1.05);
}

button:active {
    background-color: #FFEEA9;
    transform: scale(0.98);
}
aside p {
    margin: 0.7rem 0;
}
</style>