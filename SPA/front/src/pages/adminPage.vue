<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

import { ref, computed, onMounted } from "vue";
import axios from "axios";
// Données de départ ou récupérées depuis localStorage
let showForm = false;
const categories = ref([]);
let animals = ref([]);
const animals = ref([]);

const showCategoryForm = ref(false);
const showUpdateCategoryForm = ref(false);

const showAnimalForm = ref(false);
const showStatistics = ref(false);
const showAllAnimals = ref(true);

const showUpdateForm = ref(false);

const newAnimal = ref({
  name: "",
  age: "",
  sexe: "",
  activite: "",
  caractere: "",
  profile_image: "",
  image_desc: "",
  medical: "",
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

//   alert("La catégorie existe déjà.");
// }


// const newCategory = { id: categories.value.length + 1, ...newCategoryData.value };
// categories.value.push(newCategory);
// newCategoryData.value = { name: '', image: null };
// showCategoryForm.value = false;
// saveData();


// function addAnimal() {
//   showAnimalForm.value = false;
//   alert('Animal ajouté avec succès!');
//   showAllAnimals.value = true;
//   showCategoryForm.value = false;
//   showStatistics.value = false;
// }

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



// Fonction pour supprimer une catégorie
// function deleteCategory(category) {
//   if (confirm(`Êtes-vous sûr de vouloir supprimer la catégorie "${category.name}" et tous les animaux associés ?`)) {
//     // Filtrer les catégories pour exclure la catégorie à supprimer
//     categories.value = categories.value.filter(cat => cat.id !== category.id);

//     // Filtrer les animaux pour exclure ceux associés à la catégorie supprimée
//     animals.value = animals.value.filter(animal => animal.categoryId !== category.id);

//     // Sauvegarder les données mises à jour
//     saveData();

//     // Optionnel : Fermer le modal de catégorie si ouvert
//     closeCategoryModal();
//   }
// }

// Chargement des données à l'initialisation
// onMounted(() => {
//   categories.value = loadCategories();
//   animals.value = loadAnimals();
// });


function deleteCategory(category) {}
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
      <button
        @click="
          showAllAnimals = true;
          showCategoryForm = false;
          showAnimalForm = false;
          showStatistics = false;
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
        "
        class="btn"
      >
        Statistiques
      </button>
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
          <input
            @change="handleCategoryImageUpload"
            type="file"
            accept="image/*"
          />
          <img
            v-if="putCategory.image"
            :src="put.image"
            alt="Image de la catégorie"
           
            class="category-image-preview"
          />
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
          <input type="text" v-model="newAnimal.name" />
        </label>
        <label>
          Âge :
          <input type="text" v-model="newAnimal.age" />
        </label>
        <label>
          Sexe :
          <input type="text" v-model="newAnimal.sexe" />
        </label>
        <label>
          Activité :
          <input type="text" v-model="newAnimal.activite" />
        </label>
        <label>
          Caractère :
          <input type="text" v-model="newAnimal.caractere" />
        </label>
        <label>
          Image principale :
          <input type="text" v-model="newAnimal.profile_image" />
        </label>
        <label>
          Deuxième image (optionnel) :
          <input type="text" v-model="newAnimal.image_desc" />
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
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
            >
              {{ category.name }}
            </option>
          </select>
        </label>
        <button type="submit" @click="">Ajouter Animal</button>
      </form>
    </div>

    <div v-if="showUpdateForm" class="section">
      <h2>Modifier un Animal</h2>

      <form @submit.prevent="updateAnimal(updatedAnimal.id)">
        <label>
          Nom :
          <input type="text" v-model="updatedAnimal.name" />
          <input type="text" />
        </label>
        <label>
          Âge :
          <input type="text" />
          <input type="text" v-model="updatedAnimal.age" />
        </label>
        <label>
          Sexe :
          <input type="text" />
          <input type="text" v-model="updatedAnimal.sexe" />
        </label>
        <label>
          Activité :
          <input type="text" />
          <input type="text" v-model="updatedAnimal.activite" />
        </label>
        <label>
          Caractère :
          <input type="text" />
          <input type="text" v-model="updatedAnimal.caractere" />
        </label>
        <label>
          Image principale :
          <input @change="e => handleAnimalImageUpload(e, true)" type="file" accept="image/*" />
          <img alt="Image principale de l'animal" class="animal-image-preview" />
          <input type="text" v-model="updatedAnimal.profile_image" />
        </label>
        <label>
          Deuxième image (optionnel) :
          <input @change="e => handleAnimalImageUpload(e, false)" type="file" accept="image/*" />
          <img alt="Deuxième image de l'animal" class="animal-image-preview" />
          <input type="text" v-model="updatedAnimal.image_desc" />
        </label>
        <label>
          Description :
          <textarea v-model="updatedAnimal.description"></textarea>
          <textarea></textarea>
        </label>
        <label>
          Situation médicale :
          <textarea v-model="updatedAnimal.medical"></textarea>
          <textarea></textarea>
        </label>
        <label>
          Catégorie :
          <select>
            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
          <select>
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
            >
              {{ category.name }}
            </option>
          </select>
        </label>
        <button type="submit">Ajouter Animal</button>
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
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Rechercher par nom"
        />
      </label>



      <div class="category-list">
        <div
          v-for="category in categories"
          :key="category.id"
          class="category-card"
        >
          <img
            :src="category.image"
            :alt="category.name"
            class="category-image"
          />
          <h3>{{ category.name }}</h3>
          <button @click="openCategoryModal(category)">Voir Détails</button>
          <button type="submit" @click="deleteCategorie(category)" class="btn btn-delete">
            Supprimer
          </button>
          <button type="submit" @click="showUpdateCategoryForm= true ; putCategory = category" class="btn btn-edit">Modifier</button>
        </div>
      </div>


      <div class="animal-list">
        <div
          v-for="animal in filteredAnimalsBySearch"
          :key="animal.id"
          class="animal-card"
        >
          <img
            :src="animal.profile_image"
            :alt="animal.name"
            class="animal-image"
          />
          <h3>{{ animal.name }}</h3>
          <!-- <button class="btn" @click="openAnimalModal(animal)">
            Voir Détails
          </button>
          <button class="btn" @click="deleteAnimal(animal.id)">Delete</button>
          <button
            class="btn"
            @click="
              showUpdateForm = true;
              updatedAnimal = animal;
              console.log(updatedAnimal);
            "
          >
            Modifier
          </button> -->
          <button @click="updateCategory(category)">Voir Détails</button>
        </div>
      </div>
    </div>

    <!-- Modal for Animal Details -->
    <!-- <div v-if="selectedAnimal" class="modal" @click.self="closeAnimalModal">
      <div class="modal-content">
        <button class="close-button" @click="closeAnimalModal">&times;</button>
        <h2>{{ selectedAnimal.name }}</h2>
        <div class="modal-info">
          <p><strong>Âge:</strong> {{ selectedAnimal.age }}</p>
          <p><strong>Sexe:</strong> {{ selectedAnimal.sexe }}</p>
          <p><strong>Activité:</strong> {{ selectedAnimal.activite }}</p>
          <p><strong>Caractère:</strong> {{ selectedAnimal.caractere }}</p>
          <p><strong>Description:</strong> {{ selectedAnimal.description }}</p>
          <p>
            <strong>Situation médicale:</strong>
            {{ selectedAnimal.situationMedicale }}
          </p>
        </div>
        <div class="modal-images">
          <img
            :src="selectedAnimal.image"
            :alt="selectedAnimal.name"
            class="modal-image"
          />
          <img
            v-if="selectedAnimal.image2"
            :src="selectedAnimal.image2"
            :alt="selectedAnimal.name + ' - 2'"
           
            class="modal-image"
          />
        </div>
      </div>
    </div> -->
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

.category-list,
.animal-list {
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
  color: #ff7d29;
  cursor: pointer;
}

.close-button:hover {
  color: #ffbf78;
}
</style>
