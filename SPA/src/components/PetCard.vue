<script setup>
import { ref } from 'vue';

const animals = ref([
	{
		id: 1,
		name: 'Lacy',
		age: '2 ans',
		sexe: "Mâle",
		activite: "Courir",
		caractere: "sociable",
		image: 'https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2021-04/races-de-chiens-pr-f-r-s-regions-francaises.jpg',
		image2: 'https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2021-04/races-de-chiens-pr-f-r-s-regions-francaises.jpg',
		description: 'lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor, sit amet consectetur, sed do eiusmod temporlorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor, sit amet consectetur, sed do eiusmod tempor',
		situationMedicale: 'En bonne santé'
	},
	{
		id: 2,
		name: 'Daizy',
		age: '3 ans',
		sexe: "Mâle",
		activite: "Courir",
		caractere: "Sociable",
		image: 'https://th.bing.com/th/id/OIP.UuJfYnHRR9SNOUL4FrYLmAHaEK?rs=1&pid=ImgDetMain',
		image2: 'https://th.bing.com/th/id/OIP.UuJfYnHRR9SNOUL4FrYLmAHaEK?rs=1&pid=ImgDetMain',
		description: 'lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor, sit amet consectetur, sed do eiusmod temporlorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor, sit amet consectetur, sed do eiusmod tempor',
		situationMedicale: 'Vacciné et stérilisé'
	},
	{
		id: 1,
		name: 'Lacy',
		age: '2 ans',
		sexe: "Mâle",
		activite: "Courir",
		caractere: "sociable",
		image: 'https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2021-04/races-de-chiens-pr-f-r-s-regions-francaises.jpg',
		image2: 'https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2021-04/races-de-chiens-pr-f-r-s-regions-francaises.jpg',
		description: 'lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor, sit amet consectetur, sed do eiusmod temporlorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor, sit amet consectetur, sed do eiusmod tempor',
		situationMedicale: 'En bonne santé'
	},
	{
		id: 2,
		name: 'Daizy',
		age: '3 ans',
		sexe: "Mâle",
		activite: "Courir",
		caractere: "sociable",
		image: 'https://th.bing.com/th/id/OIP.UuJfYnHRR9SNOUL4FrYLmAHaEK?rs=1&pid=ImgDetMain',
		image2: 'https://th.bing.com/th/id/OIP.UuJfYnHRR9SNOUL4FrYLmAHaEK?rs=1&pid=ImgDetMain',
		description: 'lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor, sit amet consectetur, sed do eiusmod temporlorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor, sit amet consectetur, sed do eiusmod tempor',
		situationMedicale: 'Vacciné et stérilisé'
	},
	{
		id: 1,
		name: 'Lacy',
		age: '2 ans',
		sexe: "Mâle",
		activite: "Courir",
		caractere: "sociable",
		image: 'https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2021-04/races-de-chiens-pr-f-r-s-regions-francaises.jpg',
		image2: 'https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2021-04/races-de-chiens-pr-f-r-s-regions-francaises.jpg',
		description: 'lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor, sit amet consectetur, sed do eiusmod temporlorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor, sit amet consectetur, sed do eiusmod tempor',
		situationMedicale: 'En bonne santé'
	},
	{
		id: 2,
		name: 'Daizy',
		age: '3 ans',
		sexe: "Femelle",
		activite: "Dormir",
		caractere: "Affectueuse",
		image: 'https://th.bing.com/th/id/OIP.UuJfYnHRR9SNOUL4FrYLmAHaEK?rs=1&pid=ImgDetMain',
		image2: 'https://th.bing.com/th/id/OIP.UuJfYnHRR9SNOUL4FrYLmAHaEK?rs=1&pid=ImgDetMain',
		description: 'lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor, sit amet consectetur, sed do eiusmod temporlorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor, sit amet consectetur, sed do eiusmod tempor',
		situationMedicale: 'Vacciné et stérilisé'
	},
	{
		id: 1,
		name: 'Lacy',
		age: '2 ans',
		sexe: "Femelle",
		activite: "Dormir",
		caractere: "Affectueuse",
		image: 'https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2021-04/races-de-chiens-pr-f-r-s-regions-francaises.jpg',
		image2: 'https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2021-04/races-de-chiens-pr-f-r-s-regions-francaises.jpg',
		description: 'lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor, sit amet consectetur, sed do eiusmod temporlorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor, sit amet consectetur, sed do eiusmod tempor',
		situationMedicale: 'En bonne santé'
	},
	{
		id: 2,
		name: 'Daizy',
		age: '3 ans',
		sexe: "Femelle",
		Activite: "Dormir",
		Caractere: "Affectueuse",
		image: 'https://th.bing.com/th/id/OIP.UuJfYnHRR9SNOUL4FrYLmAHaEK?rs=1&pid=ImgDetMain',
		image2: 'https://th.bing.com/th/id/OIP.UuJfYnHRR9SNOUL4FrYLmAHaEK?rs=1&pid=ImgDetMain',
		description: 'lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor, sit amet consectetur, sed do eiusmod temporlorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor, sit amet consectetur, sed do eiusmod tempor',
		situationMedicale: 'Vacciné et stérilisé'
	},
	{
		id: 1,
		name: 'Lacy',
		age: '2 ans',
		sexe: "Femelle",
		activite: "Dormir",
		caractere: "Affectueuse",
		image: 'https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2021-04/races-de-chiens-pr-f-r-s-regions-francaises.jpg',
		image2: 'https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2021-04/races-de-chiens-pr-f-r-s-regions-francaises.jpg',
		description: 'lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor, sit amet consectetur, sed do eiusmod temporlorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor, sit amet consectetur, sed do eiusmod tempor',
		situationMedicale: 'En bonne santé'
	},
	{
		id: 2,
		name: 'Daizy',
		age: '3 ans',
		sexe: "Femelle",
		activite: "Dormir",
		caractere: "Affectueuse",
		image: 'https://th.bing.com/th/id/OIP.UuJfYnHRR9SNOUL4FrYLmAHaEK?rs=1&pid=ImgDetMain',
		image2: 'https://th.bing.com/th/id/OIP.UuJfYnHRR9SNOUL4FrYLmAHaEK?rs=1&pid=ImgDetMain',
		description: 'lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor, sit amet consectetur, sed do eiusmod temporlorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor, sit amet consectetur, sed do eiusmod tempor',
		situationMedicale: 'Vacciné et stérilisé'
	},
	{
		id: 1,
		name: 'Lacy',
		age: '2 ans',
		sexe: "Femelle",
		activite: "Dormir",
		caractere: "Affectueuse",
		image: 'https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2021-04/races-de-chiens-pr-f-r-s-regions-francaises.jpg',
		image2: 'https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2021-04/races-de-chiens-pr-f-r-s-regions-francaises.jpg',
		description: 'lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor, sit amet consectetur, sed do eiusmod tempor,lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor, sit amet consectetur, sed do eiusmod tempor',
		situationMedicale: 'En bonne santé'
	},
	{
		id: 2,
		name: 'Daizy',
		age: '3 ans',
		sexe: "Femelle",
		activite: "Dormir",
		caractere: "Affectueuse",
		image: 'https://th.bing.com/th/id/OIP.UuJfYnHRR9SNOUL4FrYLmAHaEK?rs=1&pid=ImgDetMain',
		image2: 'https://th.bing.com/th/id/OIP.UuJfYnHRR9SNOUL4FrYLmAHaEK?rs=1&pid=ImgDetMain',
		description: 'lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor, sit amet consectetur, sed do eiusmod temporlorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor, sit amet consectetur, sed do eiusmod tempor',
		situationMedicale: 'Vacciné et stérilisé'
	},
]);

const selectedAnimal = ref(null);

function openModal(animal) {
	selectedAnimal.value = animal;
}

function closeModal() {
	selectedAnimal.value = null;
}
</script>

<template>
	<div class="animals">
		<div v-for="animal in animals" :key="animal.id" class="animalCard">
			<img :src="animal.image" :alt="animal.name" class="animalImage" />
			<h1>{{ animal.name }}</h1>
			<button @click="openModal(animal)">En savoir plus sur moi </button>

			<!-- Modal -->
			<div v-if="selectedAnimal && selectedAnimal.id === animal.id" class="modal" @click.self="closeModal">
				<div class="modalContent">
					<div class="modalInfo">
						<h2>{{ selectedAnimal.name }}</h2>
						<div class="info">
							<p><strong>Âge:</strong> {{ selectedAnimal.age }}</p>
							<p><strong>Sexe:</strong> {{ selectedAnimal.sexe }}</p>
							<p><strong>Santé générale:</strong> {{ selectedAnimal.situationMedicale }}</p>
							<p><strong>Caractère:</strong> {{ selectedAnimal.caractere }}</p>
							<p><strong>Activité:</strong> {{ selectedAnimal.activite }}</p>
							<p><strong>Description:</strong> {{ selectedAnimal.description }}</p>

						</div>
						<button class="closeButton" @click.stop="closeModal">&times;</button>
					</div>
					<div class="modalImages">
						<img :src="selectedAnimal.image" :alt="selectedAnimal.name" class="modalImage" />
						<img :src="selectedAnimal.image2" :alt="selectedAnimal.name" class="modalImage" />
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

.modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
}

.modalContent {
	background: #fff;
	padding: 40px;
	border-radius: 8px;
	text-align: left;
	position: relative;
	max-width: 1200px;
	width: 90%;
	height: 80%;
	display: flex;
	gap: 40px;
}

.info {
	display: flex;
	flex-direction: column;
	margin-top: 50px;
}

.closeButton {
	position: absolute;
	top: 10px;
	right: 10px;
	background: transparent;
	border: none;
	font-size: 36px;
	color: #FF7D29;
	cursor: pointer;
}

.closeButton:hover {
	background-color: #FFBF78;
}


.modalInfo {
	flex: 1;
	font-size: 18px;
}

.modalInfo h2 {
	font-size: 36px;
	margin-bottom: 20px;
	color: #FF7D29;
}

.modalInfo p {
	font-size: 24px;
	margin-bottom: 10px;
	line-height: 2;
}

.modalImages {
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.modalImage {
	width: 100%;
	height: 50%;
	object-fit: cover;
	border-radius: 8px;
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
