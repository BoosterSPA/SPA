<script setup>
import { ref } from 'vue';
import PetCard from "@/components//PetCard.vue"

// État pour suivre la catégorie sélectionnée
const selectedCategory = ref(null);

// État pour afficher ou cacher la modale des statistiques
const showStatisticsModal = ref(false);

// Gestion des affichages conditionnels
const displayAllAnimals = () => {
    selectedCategory.value = 'all'; // "all" signifie tous les animaux
};

const selectCategory = (category) => {
    selectedCategory.value = category;
};

const toggleStatisticsModal = () => {
    showStatisticsModal.value = !showStatisticsModal.value;
};
</script>

<template>
    <div class="dashboard">
        <!-- Boutons d'action -->
        <div class="buttons-container">

            <button @click="displayAllAnimals" class="btn all-animals-btn">Tous les Animaux</button>
            <button @click="toggleStatisticsModal" class="btn stats-btn">Statistiques</button>
        </div>

        <!-- Section des catégories existantes (Cards Chien et Chat) -->
        <div class="cards-container">
            <div class="animal-card" @click="selectCategory('chien')">
                <h3>Chien</h3>
                <img src="https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2021-04/races-de-chiens-pr-f-r-s-regions-francaises.jpg" alt="Chien">
            </div>
            <div class="animal-card" @click="selectCategory('chat')">
                <h3>Chat</h3>
                <img src="https://th.bing.com/th/id/OIP.UuJfYnHRR9SNOUL4FrYLmAHaEK?rs=1&pid=ImgDetMain" alt="Chat">
            </div>
            <div class="animal-card add-category-card">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4c.552 0 1 .448 1 1v6h6c.552 0 1 .448 1 1s-.448 1-1 1h-6v6c0 .552-.448 1-1 1s-1-.448-1-1v-6H5c-.552 0-1-.448-1-1s.448-1 1-1h6V5c0-.552.448-1 1-1z" />
                </svg>
            </div>
        </div>

        <!-- Affichage du composant PetCard en fonction de la catégorie sélectionnée -->
        <div v-if="selectedCategory">
            <PetCard :category="selectedCategory" />
        </div>

        <!-- Modale des statistiques -->
        <div v-if="showStatisticsModal" class="modal">
            <div class="modal-content">
                <span class="close" @click="toggleStatisticsModal">&times;</span>
                <h2>Statistiques</h2>
                <div class="statistics-container-modal">
                    <div class="stat-card-modal">
                        <h3>Total des Animaux</h3>
                        <p>150</p>
                    </div>
                    <div class="stat-card-modal">
                        <h3>Animaux Adoptés</h3>
                        <p>75</p>
                    </div>
                    <div class="stat-card-modal">
                        <h3>Animaux en Attente</h3>
                        <p>75</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
/* Mise en page principale */
.dashboard {
    padding: 20px;
    font-family: 'Arial', sans-serif;
}

/* Conteneur des boutons */
.buttons-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;
}

/* Style général pour les boutons */
.btn {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 12px 30px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-weight: bold;
}

.btn:hover {
    background-color: #0056b3;
}

/* Style bouton Statistiques */
.stats-btn {
    background-color: #ffc107;
}

.stats-btn:hover {
    background-color: #e0a800;
}

/* Bouton Tous les Animaux */
.all-animals-btn {
    background-color: #6c757d;
}

.all-animals-btn:hover {
    background-color: #5a6268;
}

/* Bouton Adoption */
.adoption-btn {
    background-color: #28a745;
}

.adoption-btn:hover {
    background-color: #218838;
}

/* Conteneur des catégories (Cards) */
.cards-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100vh;
}

.animal-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    padding: 15px;
    text-align: center;
    width: 350px;
    height: 400px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.animal-card:hover {
    transform: translateY(-5px);
}

.animal-card img {
    border-radius: 5px;
    margin-top: 10px;
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.add-category-card {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F0F0F0;
    color: #000000;
}

.add-category-card svg {
    width: 50px;
    height: 50px;
    fill: #000000;
}

/* Modale Statistiques */
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    width: 500px;
    text-align: center;
    position: relative;
}

.close {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 24px;
    cursor: pointer;
}

.statistics-container-modal {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.stat-card-modal {
    background-color: #f8f9fa;
    border: 1px solid #ced4da;
    border-radius: 10px;
    padding: 20px;
    width: 150px;
    text-align: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
}

.stat-card-modal:hover {
    transform: translateY(-5px);
}

.stat-card-modal h3 {
    font-size: 16px;
    margin-bottom: 5px;
    color: #343a40;
}

.stat-card-modal p {
    font-size: 20px;
    font-weight: bold;
    color: #007bff;
}
</style>
