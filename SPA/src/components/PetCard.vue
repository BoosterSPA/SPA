<template>
	<!-- Card -->
	<div class="animals">
		<div v-for="animal in animals" :key="animal.id" class="animalCard">
			<img :src="animal.image" :alt="animal.name" class="animalImage" />
			<h3>{{ animal.name }}</h3>
			<button @click="openModal(animal)">Voir plus</button>

			<!-- Modal -->
			<div v-if="selectedAnimal && selectedAnimal.id === animal.id" class="modal" @click.self="closeModal">
				<div class="modalContent">
					<h2>{{ selectedAnimal.name }}</h2>
					<img :src="selectedAnimal.image" :alt="selectedAnimal.name" class="modalImage" />
					<p>{{ selectedAnimal.description }}</p>
					<button @click="closeModal">Fermer</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const animals = ref([
	{
		id: 1,
		name: 'Lacy',
		image: 'https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2021-04/races-de-chiens-pr-f-r-s-regions-francaises.jpg',
		description: 'Un gentil chien'
	},
	{
		id: 2,
		name: 'Daizy',
		image: 'https://th.bing.com/th/id/OIP.UuJfYnHRR9SNOUL4FrYLmAHaEK?rs=1&pid=ImgDetMain',
		description: 'Un adorable chat'
	},
	{
		id: 3,
		name: 'Bella',
		image: 'https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2021-04/races-de-chiens-pr-f-r-s-regions-francaises.jpg',
		description: 'Un gentil chien'
	},
	{
		id: 4,
		name: 'Kitty',
		image: 'https://th.bing.com/th/id/OIP.UuJfYnHRR9SNOUL4FrYLmAHaEK?rs=1&pid=ImgDetMain',
		description: 'Un adorable chat'
	},
	{
		id: 1,
		name: 'Lacy',
		image: 'https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2021-04/races-de-chiens-pr-f-r-s-regions-francaises.jpg',
		description: 'Un gentil chien'
	},
	{
		id: 2,
		name: 'Daizy',
		image: 'https://th.bing.com/th/id/OIP.UuJfYnHRR9SNOUL4FrYLmAHaEK?rs=1&pid=ImgDetMain',
		description: 'Un adorable chat'
	},
	{
		id: 3,
		name: 'Bella',
		image: 'https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2021-04/races-de-chiens-pr-f-r-s-regions-francaises.jpg',
		description: 'Un gentil chien'
	},
	{
		id: 4,
		name: 'Kitty',
		image: 'https://th.bing.com/th/id/OIP.UuJfYnHRR9SNOUL4FrYLmAHaEK?rs=1&pid=ImgDetMain',
		description: 'Un adorable chat'
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
	padding: 20px;
	border-radius: 8px;
	text-align: center;
	position: relative;
	max-width: 600px;
	width: 100%;
}

.modalImage {
	width: 100%;
	height: auto;
	max-height: 300px;
	object-fit: cover;
	border-radius: 8px;
}

@media (max-width: 768px) {
	.animalCard {
		width: 100%;
		margin: 0 16px;
	}
}

@media (max-width: 480px) {
	.animalImage {
		height: 200px;
	}

	.modalContent {
		max-width: 90%;
	}
}
</style>