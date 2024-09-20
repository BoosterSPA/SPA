<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const animals = ref([]);
const selectedAnimal = ref(null);

function openModal(animal) {
	selectedAnimal.value = animal;
}

function closeModal() {
	selectedAnimal.value = null;
}

onMounted(async () => {
	try {
		const response = await axios.get('http://localhost:3000/animal/getAnimal');
		animals.value = await response.data;
		console.log(animals)
	} catch (error) {
		console.error('Erreur lors de la récupération des animaux :', error);
	}
});

</script>

<template>
	<div class="animals">
		<div v-for="animal in animals" :key="animal.id" class="animalCard">
			<img :src="animal.profile_image" :alt="animal.name" class="animalImage" />
			<h1>{{ animal.name }}</h1>
			<button @click="openModal(animal)">En savoir plus sur moi</button>

			<!-- Modal -->
			<div v-if="selectedAnimal && selectedAnimal.id === animal.id" class="modal" @click.self="closeModal">
				<div class="modalContent">
					<div class="modalInfo">
						<h2>{{ selectedAnimal.name }}</h2>
						<div class="info">
							<p><strong>Âge:</strong> {{ selectedAnimal.age }}</p>
							<p><strong>Sexe:</strong> {{ selectedAnimal.sexe }}</p>
							<p><strong>Santé générale:</strong> {{ selectedAnimal.medical }}</p>
							<p><strong>Caractère:</strong> {{ selectedAnimal.caractere }}</p>
							<p><strong>Activité:</strong> {{ selectedAnimal.activite }}</p>
							<p><strong>Description:</strong> {{ selectedAnimal.description }}</p>
						</div>
						<button class="closeButton" @click.stop="closeModal">&times;</button>
					</div>
					<div class="modalImages">
						<img :src="selectedAnimal.image" :alt="selectedAnimal.name" class="modalImage" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>





<style scoped>
.animals {
	display: flex;
	flex-wrap: wrap;
	gap: 32px;
	justify-content: center;
}

.animalCard {
	border: 1px solid #ddd;
	padding: 24px;
	border-radius: 8px;
	text-align: center;
	position: relative;
	width: 400px;
	background: #f9f9f9;
	/* Couleur de fond plus douce */
	transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.animalCard:hover {
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	transform: translateY(-5px);
}

.animalImage {
	width: 100%;
	height: 300px;
	object-fit: cover;
	border-radius: 8px;
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
}

button:hover {
	background-color: #FFBF78;
	transform: scale(1.05);
}

button:active {
	background-color: #FFEEA9;
	transform: scale(0.98);
}

.modalContent {
	background: #fff;
	padding: 40px;
	border-radius: 12px;
	/* Coins arrondis */
	text-align: left;
	position: relative;
	max-width: 800px;
	/* Ajustez la largeur max de la modal */
	width: 90%;
	height: auto;
	/* Ajustement de la hauteur pour s'adapter au contenu */
	display: flex;
	flex-direction: column;
	/* Empilement vertical */
}

.modalInfo {
	flex: 1;
	/* Prend l'espace disponible */
	font-size: 18px;
	display: flex;
	flex-direction: column;
	/* Empile les informations */
}

.modalInfo h2 {
	font-size: 32px;
	/* Titre plus grand */
	margin-bottom: 20px;
	color: #FF7D29;
}

.modalInfo p {
	font-size: 20px;
	/* Ajustement de la taille de texte */
	margin-bottom: 15px;
	line-height: 1.5;
	/* Espace entre les lignes */
}

.modalImages {
	margin-top: 20px;
	/* Ajout d'un espace au-dessus des images */
	display: flex;
	flex-direction: column;
	/* Empilement vertical */
	gap: 10px;
}

.modalImage {
	width: 100%;
	height: auto;
	/* Ajustement pour garder le rapport d'aspect */
	border-radius: 8px;
	max-height: 300px;
	/* Hauteur max pour l'image */
}

.closeButton {
	position: absolute;
	top: 15px;
	right: 15px;
	background: transparent;
	border: none;
	font-size: 36px;
	color: #FF7D29;
	cursor: pointer;
}

.closeButton:hover {
	color: #FFBF78;
	/* Couleur au survol */
}


@media (max-width: 768px) {
	.animalCard {
		width: 100%;
		margin: 0 16px;
	}

	.modalContent {
		flex-direction: column;
		padding: 20px;
		height: auto;
	}

	.modalImage {
		height: auto;
		max-height: 300px;
	}

	.modalInfo {
		font-size: 16px;
	}

	.modalInfo h2 {
		font-size: 28px;
	}

	.modalInfo p {
		font-size: 16px;
	}
}

@media (max-width: 480px) {
	.animalImage {
		height: 200px;
	}

	.modalContent {
		max-width: 90%;
		padding: 20px;
	}

	.modalImage {
		max-height: 200px;
	}
}
</style>