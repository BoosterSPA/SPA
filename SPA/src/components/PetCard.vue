<script setup>
import { ref } from 'vue';

const animals = ref([
	{
		id: 1,
		name: 'Lacy',
		age: '2 ans',
		image: 'https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2021-04/races-de-chiens-pr-f-r-s-regions-francaises.jpg',
		image2: 'https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2021-04/races-de-chiens-pr-f-r-s-regions-francaises.jpg',
		description: 'Un gentil chien',
		situationMedicale: 'En bonne santé'
	},
	{
		id: 2,
		name: 'Daizy',
		age: '3 ans',
		image: 'https://th.bing.com/th/id/OIP.UuJfYnHRR9SNOUL4FrYLmAHaEK?rs=1&pid=ImgDetMain',
		image2: 'https://th.bing.com/th/id/OIP.UuJfYnHRR9SNOUL4FrYLmAHaEK?rs=1&pid=ImgDetMain',
		description: 'Un adorable chat',
		situationMedicale: 'Vacciné et stérilisé'
	},
	{
		id: 1,
		name: 'Lacy',
		age: '2 ans',
		image: 'https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2021-04/races-de-chiens-pr-f-r-s-regions-francaises.jpg',
		image2: 'https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2021-04/races-de-chiens-pr-f-r-s-regions-francaises.jpg',
		description: 'Un gentil chien',
		situationMedicale: 'En bonne santé'
	},
	{
		id: 2,
		name: 'Daizy',
		age: '3 ans',
		image: 'https://th.bing.com/th/id/OIP.UuJfYnHRR9SNOUL4FrYLmAHaEK?rs=1&pid=ImgDetMain',
		image2: 'https://th.bing.com/th/id/OIP.UuJfYnHRR9SNOUL4FrYLmAHaEK?rs=1&pid=ImgDetMain',
		description: 'Un adorable chat',
		situationMedicale: 'Vacciné et stérilisé'
	},
	{
		id: 1,
		name: 'Lacy',
		age: '2 ans',
		image: 'https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2021-04/races-de-chiens-pr-f-r-s-regions-francaises.jpg',
		image2: 'https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2021-04/races-de-chiens-pr-f-r-s-regions-francaises.jpg',
		description: 'Un gentil chien',
		situationMedicale: 'En bonne santé'
	},
	{
		id: 2,
		name: 'Daizy',
		age: '3 ans',
		image: 'https://th.bing.com/th/id/OIP.UuJfYnHRR9SNOUL4FrYLmAHaEK?rs=1&pid=ImgDetMain',
		image2: 'https://th.bing.com/th/id/OIP.UuJfYnHRR9SNOUL4FrYLmAHaEK?rs=1&pid=ImgDetMain',
		description: 'Un adorable chat',
		situationMedicale: 'Vacciné et stérilisé'
	},
	{
		id: 1,
		name: 'Lacy',
		age: '2 ans',
		image: 'https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2021-04/races-de-chiens-pr-f-r-s-regions-francaises.jpg',
		image2: 'https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2021-04/races-de-chiens-pr-f-r-s-regions-francaises.jpg',
		description: 'Un gentil chien',
		situationMedicale: 'En bonne santé'
	},
	{
		id: 2,
		name: 'Daizy',
		age: '3 ans',
		image: 'https://th.bing.com/th/id/OIP.UuJfYnHRR9SNOUL4FrYLmAHaEK?rs=1&pid=ImgDetMain',
		image2: 'https://th.bing.com/th/id/OIP.UuJfYnHRR9SNOUL4FrYLmAHaEK?rs=1&pid=ImgDetMain',
		description: 'Un adorable chat',
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
			<h3>{{ animal.name }}</h3>
			<button @click="openModal(animal)">Voir plus</button>

			<!-- Modal -->
			<div v-if="selectedAnimal && selectedAnimal.id === animal.id" class="modal" @click.self="closeModal">
				<div class="modalContent">
					<div class="modalInfo">
						<h2>{{ selectedAnimal.name }}</h2>
						<p><strong>Description:</strong> {{ selectedAnimal.description }}</p>
						<p><strong>Âge:</strong> {{ selectedAnimal.age }}</p>
						<p><strong>Situation Médicale:</strong> {{ selectedAnimal.situationMedicale }}</p>
						<button @click="closeModal">Fermer</button>
					</div>
					<img :src="selectedAnimal.image" :alt="selectedAnimal.name" class="modalImage" />
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
}

.animalImage {
	width: 100%;
	height: 300px;
	object-fit: cover;
	border-radius: 8px;
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

.modalInfo {
	flex: 1;
	font-size: 24px;
}

.modalInfo h2 {
	font-size: 40px;
	margin-bottom: 20px;
}

.modalInfo p {
	font-size: 24px;
	margin-bottom: 20px;
}

.modalImage {
	width: 50%;
	height: 100%;
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
		width: 100%;
		height: auto;
		max-height: 300px;
	}

	.modalInfo {
		font-size: 20px;
	}

	.modalInfo h2 {
		font-size: 32px;
	}

	.modalInfo p {
		font-size: 20px;
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
