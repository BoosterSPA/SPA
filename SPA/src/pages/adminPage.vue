<script setup>

</script>

<template>
	<div class="cards-container">
		<div class="animal-card">
			<div class="card-header">
				<h3>Chien</h3>
			</div>
			<img src="https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2021-04/races-de-chiens-pr-f-r-s-regions-francaises.jpg"
				alt="Chien">
		</div>

		<div class="animal-card">
			<div class="card-header">
				<h3>Chat</h3>
			</div>
			<img src="https://th.bing.com/th/id/OIP.UuJfYnHRR9SNOUL4FrYLmAHaEK?rs=1&pid=ImgDetMain" alt="Chat">
		</div>

		<div class="animal-card add-category-card">
		
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4c.552 0 1 .448 1 1v6h6c.552 0 1 .448 1 1s-.448 1-1 1h-6v6c0 .552-.448 1-1 1s-1-.448-1-1v-6H5c-.552 0-1-.448-1-1s.448-1 1-1h6V5c0-.552.448-1 1-1z"/>
            </svg>
        </div>
	</div>

</template>

<style scoped>
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
</style>