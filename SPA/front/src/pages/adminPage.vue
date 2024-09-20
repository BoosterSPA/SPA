<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

// Données de départ ou récupérées depuis localStorage
const animals = ref([]);

const showCategoryForm = ref(false);
const showUpdateCategoryForm = ref(false);

const showAnimalForm = ref(false);
const showStatistics = ref(false);
const showAllAnimals = ref(true);

const selectedCategory = ref(null);

const searchQuery = ref('');

const filteredAnimals = computed(() => {
  if (!selectedCategory.value) return animals.value;
  return animals.value.filter(animal => animal.categoryId === selectedCategory.value.id);
});

const filteredAnimalsBySearch = computed(() => {
  const search = searchQuery.value.toLowerCase();
  return filteredAnimals.value.filter(animal => animal.name.toLowerCase().includes(search));
});



const categories = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/animal/getAllCategories');
    categories.value = await response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des animaux :', error);
  }
});

async function deleteCategorie(category) {
  try {
    await axios.delete(`http://localhost:3000/animal//deleteCategory/${category.id}`);

    // const response = await axios.get('http://localhost:3000/animal/getAllCategories');
    // categories.value = response.data;

  const index = categories.value.indexOf(category)
  categories.value.splice(index,1)

  } catch (error) {
    console.error('Erreur lors de la suppression des animaux :', error);
  }
};


const newCategory = ref({
  name: '', 
  image:null
});


async function addCategory() {
  try {
    const response = await axios.post(`http://localhost:3000/animal//addCategory`, newCategory.value);
    newCategory.value = await response.data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout des animaux :', error);
  }
};


let putCategory = ref({});


async function updateCategory(id) {
  try {
    await axios.put(`http://localhost:3000/animal//updateCategory/${id}`, putCategory.value);
  } catch (error) {
    console.error('Erreur lors de la modification de la catégorie:', error);
  }
};



// function addCategory() {

function openCategoryModal(category) {
  selectedCategory.value = category;
}

function closeCategoryModal() {
  selectedCategory.value = null;
}

// Fonction pour ouvrir le modal d'animaux
function openAnimalModal(animal) {
  selectedAnimal.value = animal;
  showAnimalModal.value = true;
}

// Fonction pour fermer le modal d'animaux
function closeAnimalModal() {
  selectedAnimal.value = null;
  showAnimalModal.value = false;
}

const categoryStats = computed(() => {
  return categories.value.map(category => ({
    ...category,
    animalCount: animals.value.filter(animal => animal.categoryId === category.id).length
  }));
});



</script>

<template>
  <div class="admin-page">
    <!-- Buttons to toggle sections -->
    <div class="buttons">
      <button @click="showAllAnimals = true; showCategoryForm = false; showAnimalForm = false; showStatistics = false"
        class="btn">Tous les Animaux</button>
      <button @click="showAllAnimals = false; showCategoryForm = true; showAnimalForm = false; showStatistics = false"
        class="btn">Ajouter Catégorie</button>
      <button @click="showAllAnimals = false; showCategoryForm = false; showAnimalForm = true; showStatistics = false"
        class="btn">Ajouter Animal</button>
      <button @click="showAllAnimals = false; showCategoryForm = false; showAnimalForm = false; showStatistics = true"
        class="btn">Statistiques</button>
    </div>

    <!-- Category Form -->
    <div v-if="showCategoryForm" class="section">
      <h2>Ajouter une Catégorie</h2>
      <form @submit.prevent="addCategory">
        <label>
          Nom :
          <input v-model="newCategory.name" type="text" />
        </label>
        <label>
          Image :
          <input @change="handleCategoryImageUpload" type="file" accept="image/*" />
          <img v-if="newCategory.image" :src="newCategory.image" alt="Image de la catégorie"
            class="category-image-preview" />
        </label>
        <button type="submit" class="btn">Ajouter Catégorie</button>
      </form>
    </div>



    <div v-if="showUpdateCategoryForm" class="section">
      <h2>Modifier la Catégorie</h2>
      <form @submit.prevent="updateCategory(putCategory.id)">
        <label>
          Nom :
          <input v-model="putCategory.name" type="text" />
        </label>
        <label>
          Image :
          <input @change="handleCategoryImageUpload" type="file" accept="image/*" />
          <img v-if="putCategory.image" :src="put.image" alt="Image de la catégorie"
            class="category-image-preview" />
        </label>
        <button type="submit" class="btn">Ajouter Catégorie</button>
      </form>
    </div>

    <!-- Animal Form -->
    <div v-if="showAnimalForm" class="section">
      <h2>Ajouter un Animal</h2>
      <form @submit.prevent="addAnimal">
        <label>
          Nom :
          <input type="text" />
        </label>
        <label>
          Âge :
          <input type="text" />
        </label>
        <label>
          Sexe :
          <input type="text" />
        </label>
        <label>
          Activité :
          <input type="text" />
        </label>
        <label>
          Caractère :
          <input type="text" />
        </label>
        <label>
          Image principale :
          <input @change="e => handleAnimalImageUpload(e, true)" type="file" accept="image/*" />
          <img alt="Image principale de l'animal" class="animal-image-preview" />
        </label>
        <label>
          Deuxième image (optionnel) :
          <input @change="e => handleAnimalImageUpload(e, false)" type="file" accept="image/*" />
          <img alt="Deuxième image de l'animal" class="animal-image-preview" />
        </label>
        <label>
          Description :
          <textarea></textarea>
        </label>
        <label>
          Situation médicale :
          <textarea></textarea>
        </label>
        <label>
          Catégorie :
          <select>
            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
          </select>
        </label>
        <button type="submit" class="btn">Ajouter Animal</button>
      </form>
    </div>

    <!-- Animal Statistics Section -->
    <div v-if="showStatistics" class="section">
      <h2>Statistiques des Catégories</h2>
      <ul>
        <li v-for="category in categoryStats" :key="category.id">
          {{ category.name }}: {{ category.animalCount }} animaux
        </li>
      </ul>
    </div>

    <!-- Animal List with Filter -->
    <div v-if="showAllAnimals" class="section">
      <h2>Liste des Animaux</h2>
      <label>
        Rechercher :
        <input v-model="searchQuery" type="text" placeholder="Rechercher par nom" />
      </label>



      <div class="category-list">
        <div v-for="category in categories" :key="category.id" class="category-card">
          <img :src="category.image" :alt="category.name" class="category-image" />
          <h3>{{ category.name }}</h3>
          <button @click="openCategoryModal(category)">Voir Détails</button>
          <button type="submit" @click="deleteCategorie(category)" class="btn btn-delete">Supprimer</button>
          <button type="submit" @click="showUpdateCategoryForm= true ; putCategory = category" class="btn btn-edit">Modifier</button>
        </div>
      </div>


      <div class="animal-list">
        <div v-for="animal in filteredAnimalsBySearch" :key="animal.id" class="animal-card">
          <img :src="animal.image" :alt="animal.name" class="animal-image" />
          <h3>{{ animal.name }}</h3>
          <!-- <button @click="openAnimalModal(animal)">Voir Détails</button> -->
          <button @click="updateCategory(category)">Voir Détails</button>
        </div>
      </div>
    </div>

  
  </div>
</template>


<style scoped>
.admin-page {
  padding: 20px;
}

.buttons {
  margin-bottom: 20px;
}

.btn {
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #FF7D29;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.btn:hover {
  background-color: #FFBF78;
}

.btn-delete {
  background-color: #FF3D3D;
}

.btn-delete:hover {
  background-color: #FF8C8C;
}

.section {
  margin-bottom: 40px;
}

.category-list,
.animal-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.category-card,
.animal-card {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  width: 200px;
  text-align: center;
  cursor: pointer;
}

.category-image,
.animal-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.category-image-preview,
.animal-image-preview {
  width: 100%;
  height: auto;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  object-fit: cover;
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

.modal-content {
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  max-width: 800px;
  width: 90%;
  position: relative;
}

.modal-info {
  margin-bottom: 20px;
}

.modal-images {
  display: flex;
  gap: 10px;
}

.modal-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 36px;
  color: #FF7D29;
  cursor: pointer;
}

.close-button:hover {
  color: #FFBF78;
}
</style>
