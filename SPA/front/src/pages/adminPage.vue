<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
let animals = ref([]);


const showCategoryForm = ref(false);
const showUpdateCategoryForm = ref(false);

const showAnimalForm = ref(false);
const showStatistics = ref(false);
const showAllAnimals = ref(true);
const showUpdateForm = ref(false);



const showCategories = ref(true);


const newAnimal = ref({
  name: "",
  age: "",
  sexe: "",
  activite: "",
  caractere: "",
  profile_image: "",
  image_desc: "",
  medical: "",
  id_category :"",
});

let updatedAnimal = ref({});
const selectedCategory = ref(null);

const searchQuery = ref("");

const filteredAnimals = computed(() => {
  if (!selectedCategory.value) return animals.value;
  return animals.value.filter(
    (animal) => animal.categoryId === selectedCategory.value.id
  );
});

const filteredAnimalsBySearch = computed(() => {
  const search = searchQuery.value.toLowerCase();
  return filteredAnimals.value.filter((animal) =>
    animal.name.toLowerCase().includes(search)
  );
});



let categories = ref([]);


onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/animal/getAllCategories');
    categories.value = await response.data;
    // console.log(categories.value.target);
  } catch (error) {
    console.error('Erreur lors de la récupération des animaux :', error);
  }
});


async function getAllCategories() {
  try {
    const response = await axios.get('http://localhost:3000/animal/getAllCategories');
    categories.value = await response.data;
    console.log(categories.value)
  } catch (error) {
    console.error('Erreur lors de la récupération des animaux :', error);
  }
};


async function deleteCategorie(category) {
  try {
    await axios.delete(`http://localhost:3000/animal//deleteCategory/${category.id}`);


    const index = categories.value.indexOf(category)
    categories.value.splice(index, 1)

  } catch (error) {
    console.error('Erreur lors de la suppression des animaux :', error);
  }
};


const newCategory = ref({
  name: '',
  image: '',
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



async function addAnimal() {
  try {
    await axios.post("http://localhost:3000/animal/addAnimal", newAnimal.value);
    
  } catch (error) {
    console.error(error);
  }
}
async function deleteAnimal(id) {
  try {
    await axios.delete(`http://localhost:3000/animal/delete/${id}`);
    const response = await axios.get("http://localhost:3000/animal/getAnimal");
    animals.value = await response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getAnimal(id) {
  if (id === undefined) {
    id = " ";
  }

  try {
    const response = await axios.get(
      `http://localhost:3000/animal/getAnimal/${id}`
    );
    animals.value = await response.data;
    console.log(animals);
  } catch (error) {
    console.error(error);
  }
}

async function updateAnimal(id) {
  try {
    await axios.put(
      `http://localhost:3000/animal/update/${id}`,
      updatedAnimal.value
    );
  } catch (error) {
    console.error(error);
  }
}
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
  return categories.value.map((category) => ({
    ...category,
    animalCount: animals.value.filter(
      (animal) => animal.categoryId === category.id
    ).length,
  }));
});

</script>

<template>

  <div class="admin-page">
    <!-- Buttons to toggle sections -->
    <div class="buttons">
      <button
        @click="showAllAnimals = true; showCategoryForm = false; showAnimalForm = false; showCategories = false; showStatistics = false; getAnimal();"
        class="btn">Tous les Animaux</button>
      <button
        @click="
          showAllAnimals = true;
          showCategoryForm = false;
          showAnimalForm = false;
          showStatistics = false;
          showUpdateForm = false;
          getAnimal();
        "
        class="btn"
      >
        Tous les Animaux
      </button>
      <button
        @click="
          showAllAnimals = false;
          showCategoryForm = true;
          showAnimalForm = false;
          showStatistics = false;
          showUpdateForm = false;
        "
        class="btn"
      >
        Ajouter Catégorie
      </button>
      <button
        @click="
          showAllAnimals = false;
          showCategoryForm = false;
          showAnimalForm = true;
          showStatistics = false;
          showUpdateForm = false;
        "
        class="btn"
      >
        Ajouter Animal
      </button>
      <button
        @click="
          showAllAnimals = false;
          showCategoryForm = false;
          showAnimalForm = false;
          showStatistics = true;
          showUpdateForm = false;
        "
        class="btn"
      >
        Statistiques
      </button>
    </div>

    <!-- Formulaire d'ajout de catégorie dans une modale -->
    <div v-if="showCategoryForm" class="modal">
      <div class="modal-content">
        <button class="close-button" @click="showCategoryForm = false">&times;</button>
        <h2>Ajouter une Catégorie</h2>
        <form @submit.prevent="addCategory">
          <label>
            Nom :
            <input v-model="newCategory.name" type="text" />
          </label>
          <label>
            Image (URL) :
            <input v-model="newCategory.image" type="text" placeholder="Entrez l'URL de l'image" />
          </label>
          <img v-if="newCategory.image" :src="newCategory.image" alt="Image de la catégorie"
            class="category-image-preview" />
          <button type="submit" class="btn">Ajouter Catégorie</button>
        </form>
      </div>
    </div>

    <!-- Formulaire de modification de catégorie dans une modale -->
    <div v-if="showUpdateCategoryForm" class="modal">
      <div class="modal-content">
        <button class="close-button" @click="showUpdateCategoryForm = false">&times;</button>
        <h2>Modifier la Catégorie</h2>
        <form @submit.prevent="updateCategory(putCategory.id)">
          <label>
            Nom :
            <input v-model="putCategory.name" type="text" />
          </label>
          <label>
            Image (URL) :
            <input v-model="putCategory.image" type="text" placeholder="Entrez l'URL de l'image" />
          </label>
          <img v-if="putCategory.image" :src="putCategory.image" alt="Image de la catégorie"
            class="category-image-preview" />
          <button type="submit" class="btn">Mettre à jour la Catégorie</button>
        </form>
      </div>
    </div>


    <!-- Formulaire d'ajout d'animal dans une modale -->
    <div v-if="showAnimalForm" class="modal">
      <div class="modal-content">
        <button class="close-button" @click="showAnimalForm = false">&times;</button>
        <h2>Ajouter un Animal</h2>
        <form @submit.prevent="addAnimal">
          <label>
            Nom :
            <input v-model="newAnimal.name" type="text" />
          </label>
          <label>
            Âge :
            <input v-model="newAnimal.age" type="text" />
          </label>
          <label>
            Sexe :
            <input v-model="newAnimal.sexe" type="text" />
          </label>
          <label>
            Activité :
            <input v-model="newAnimal.activite" type="text" />
          </label>
          <label>
            Caractère :
            <input v-model="newAnimal.caractere" type="text" />
          </label>
          <label>
            Image principale :
            <input v-model="newAnimal.profile_image" type="text" />
          </label>
          <label>
            Deuxième image (optionnel) :
            <input v-model="newAnimal.image_desc" type="text" />
          </label>
          <label>
            Description :
            <textarea v-model="newAnimal.description"></textarea>
          </label>
          <label>
            Situation médicale :
            <textarea v-model="newAnimal.medical"></textarea>
          </label>
          <label>
            Catégorie :
            <select>
              <option v-for="category in categories" :key="category.id" :value="category.id">
                {{ category.name }}
              </option>
            </select>
          </label>
          <button type="submit" class="btn">Ajouter Animal</button>
        </form>
      </div>
    </div>

    <!-- Formulaire de modification d'animal dans une modale -->
    <div v-if="showUpdateForm" class="modal">
      <div class="modal-content">
        <button class="close-button" @click="showUpdateForm = false">&times;</button>
        <h2>Modifier un Animal</h2>
        <form @submit.prevent="updateAnimal(updatedAnimal.id)">
          <label>
            Nom :
            <input v-model="updatedAnimal.name" type="text" />
          </label>
          <label>
            Âge :
            <input v-model="updatedAnimal.age" type="text" />
          </label>
          <label>
            Sexe :
            <input v-model="updatedAnimal.sexe" type="text" />
          </label>
          <label>
            Activité :
            <input v-model="updatedAnimal.activite" type="text" />
          </label>
          <label>
            Caractère :
            <input v-model="updatedAnimal.caractere" type="text" />
          </label>
          <label>
            Image principale :
            <input type="text" v-model="updatedAnimal.profile_image" />
          </label>
          <label>
            Deuxième image (optionnel) :
            <input type="text" v-model="updatedAnimal.image_desc" />
          </label>
          <label>
            Description :
            <textarea v-model="updatedAnimal.description"></textarea>
          </label>
          <label>
            Situation médicale :
            <textarea v-model="updatedAnimal.medical"></textarea>
          </label>
          <label>
            Catégorie :
            <select>
              <option v-for="category in categories" :key="category.id" :value="category.id">
                {{ category.name }}
              </option>
            </select>
          </label>
          <button type="submit" class="btn">Mettre à jour Animal</button>
        </form>
      </div>
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



      <div v-if="showCategories" class="category-list">
        <div v-for="category in categories" :key="category.id" class="category-card">
          <img :src="category.image" :alt="category.name" class="category-image" />
          <h3>{{ category.name }}</h3>
          <p @click="openCategoryModal(category)" class="view-details">Voir Détails</p>
          <div class="button-container">
            <button type="submit" @click="deleteCategorie(category)" class="btn btn-delete">Supprimer</button>
            <button type="submit" @click="showUpdateCategoryForm = true; putCategory = category"
              class="btn btn-edit">Modifier</button>
          </div>
        </div>
      </div>



      <div class="animal-list">
        <div v-for="animal in filteredAnimalsBySearch" :key="animal.id" class="animal-card">
          <img :src="animal.profile_image" :alt="animal.name" class="animal-image" />
          <h3>{{ animal.name }}</h3>
          <button class="btn">Voir Détails</button>
          <button  class="btn" @click="deleteAnimal(animal.id)">Supprimer</button>
          <button class="btn" @click="showUpdateForm = true; updatedAnimal = animal ">Modifier</button>
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
  background-color: #ff7d29;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.btn:hover {
  background-color: #ffbf78;
}

.btn-delete {
  background-color: #ff3d3d;
}

.btn-delete:hover {
  background-color: #ff8c8c;
}

.section {
  margin-bottom: 40px;
}

.category-list {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

.category-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 250px;
  /* Ajuster la taille */
  text-align: center;
  cursor: pointer;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.category-card:hover {
  transform: scale(1.05);
}

.category-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.view-details {
  text-align: center;
  text-decoration: underline;
  color: black;
  cursor: pointer;
  margin: 10px 0; 
}

.view-details:hover {
  color: #ff7d29;
}

.button-container {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  padding: 10px 0;
}

.btn {
  padding: 8px 12px;
  background-color: #ff7d29;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #ffbf78;
}

.btn-delete {
  background-color: #ff3d3d;
}

.btn-delete:hover {
  background-color: #ff8c8c;
}

.btn-edit {
  background-color: #29a745;
}

.btn-edit:hover {
  background-color: #78d88f;
}

/* Affichage en modale pour les formulaires */
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
  max-width: 600px;
  width: 90%;
  position: relative;
}

.modal-content h2 {
  margin-top: 0;
  color: #333;
}

.modal-content label {
  display: block;
  margin-bottom: 15px;
}

.modal-content input,
.modal-content select,
.modal-content textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.modal-content button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff7d29;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.modal-content button:hover {
  background-color: #ffbf78;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: #333;
  cursor: pointer;
}

.close-button:hover {
  color: #ff7d29;
}



/* Alignement des boutons Supprimer et Modifier en ligne */
.category-card .btn-delete,
.category-card .btn-edit {
  display: inline-block;
  margin-right: 10px;
}

.animal-card .btn-delete,
.animal-card .btn-edit {
  display: inline-block;
  margin-right: 10px;
}


.animal-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.animal-card {
  border: 1px solid #ddd;
  border-radius: 12px; /* Coins arrondis */
  width: 250px; /* Largeur plus grande */
  text-align: center;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre légère */
  transition: transform 0.3s; /* Transition douce */
}

.animal-card:hover {
  transform: translateY(-5px); /* Léger effet de soulèvement au survol */
}

.animal-image {
  width: 100%;
  height: 180px; /* Hauteur ajustée */
  object-fit: cover; /* Rendre l'image responsive */
  border-radius: 12px; /* Coins arrondis pour l'image */
}

.animal-buttons {
  margin-top: 10px; /* Espace entre le nom et les boutons */
  display: flex;
  justify-content: space-between; /* Espacement entre les boutons */
}

.btn {
  background-color: #ff7d29; /* Couleur du bouton */
  color: white;
  padding: 8px 12px; /* Taille du bouton */
  border: none;
  border-radius: 5px; /* Coins arrondis */
  cursor: pointer;
  transition: background-color 0.3s; /* Transition de couleur */
}

.btn:hover {
  background-color: #ffbf78; /* Couleur au survol */
}

.btn-delete {
  background-color: #ff3d3d; /* Couleur pour le bouton supprimer */
}

.btn-delete:hover {
  background-color: #ff8c8c; /* Couleur au survol pour supprimer */
}

</style>
