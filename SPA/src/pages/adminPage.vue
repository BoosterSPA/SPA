<script setup>
import { ref, computed, onMounted } from 'vue';

// Chargement des données depuis localStorage
const loadCategories = () => {
  const savedCategories = localStorage.getItem('categories');
  return savedCategories ? JSON.parse(savedCategories) : [
    { id: 1, name: 'Chiens', image: 'src/assets/images/chien.webp' },
    { id: 2, name: 'Chats', image: 'src/assets/images/chat.webp' }
  ];
};

const loadAnimals = () => {
  const savedAnimals = localStorage.getItem('animals');
  return savedAnimals ? JSON.parse(savedAnimals) : [];
};

// Données de départ ou récupérées depuis localStorage
const categories = ref(loadCategories());
const animals = ref(loadAnimals());

const showCategoryForm = ref(false);
const showAnimalForm = ref(false);
const showStatistics = ref(false);
const showAllAnimals = ref(true);

const newCategoryData = ref({ name: '', image: null });
const newAnimalData = ref({ name: '', age: '', sexe: '', activite: '', caractere: '', image: null, image2: null, description: '', situationMedicale: '', categoryId: null });

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

function saveData() {
  localStorage.setItem('categories', JSON.stringify(categories.value));
  localStorage.setItem('animals', JSON.stringify(animals.value));
}

function addCategory() {
  if (!newCategoryData.value.name || !newCategoryData.value.image) return;
  if (categories.value.some(cat => cat.name.toLowerCase() === newCategoryData.value.name.toLowerCase())) {
    alert("La catégorie existe déjà.");
    return;
  }
  const newCategory = { id: categories.value.length + 1, ...newCategoryData.value };
  categories.value.push(newCategory);
  newCategoryData.value = { name: '', image: null };
  showCategoryForm.value = false;
  saveData();
}

function addAnimal() {
  if (!newAnimalData.value.name || !newAnimalData.value.image || newAnimalData.value.categoryId === null) return;
  const newAnimal = { id: animals.value.length + 1, ...newAnimalData.value };
  animals.value.push(newAnimal);
  newAnimalData.value = { name: '', age: '', sexe: '', activite: '', caractere: '', image: null, image2: null, description: '', situationMedicale: '', categoryId: null };
  showAnimalForm.value = false;
  saveData();
  alert('Animal ajouté avec succès!');
  showAllAnimals.value = true;
  showCategoryForm.value = false;
  showStatistics.value = false;
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
  return categories.value.map(category => ({
    ...category,
    animalCount: animals.value.filter(animal => animal.categoryId === category.id).length
  }));
});

// Fonction pour gérer le chargement des images de catégorie
function handleCategoryImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      newCategoryData.value.image = reader.result;
    };
    reader.readAsDataURL(file);
  }
}

// Fonction pour gérer le chargement des images d'animaux
function handleAnimalImageUpload(event, isPrimary) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      if (isPrimary) {
        newAnimalData.value.image = reader.result;
      } else {
        newAnimalData.value.image2 = reader.result;
      }
    };
    reader.readAsDataURL(file);
  }
}

// Fonction pour supprimer une catégorie
function deleteCategory(category) {
  if (confirm(`Êtes-vous sûr de vouloir supprimer la catégorie "${category.name}" et tous les animaux associés ?`)) {
    // Filtrer les catégories pour exclure la catégorie à supprimer
    categories.value = categories.value.filter(cat => cat.id !== category.id);
    
    // Filtrer les animaux pour exclure ceux associés à la catégorie supprimée
    animals.value = animals.value.filter(animal => animal.categoryId !== category.id);
    
    // Sauvegarder les données mises à jour
    saveData();
    
    // Optionnel : Fermer le modal de catégorie si ouvert
    closeCategoryModal();
  }
}

// Chargement des données à l'initialisation
onMounted(() => {
  categories.value = loadCategories();
  animals.value = loadAnimals();
});
</script>

<template>
  <div class="admin-page">
    <!-- Buttons to toggle sections -->
    <div class="buttons">
      <button @click="showAllAnimals = true; showCategoryForm = false; showAnimalForm = false; showStatistics = false" class="btn">Tous les Animaux</button>
      <button @click="showAllAnimals = false; showCategoryForm = true; showAnimalForm = false; showStatistics = false" class="btn">Ajouter Catégorie</button>
      <button @click="showAllAnimals = false; showCategoryForm = false; showAnimalForm = true; showStatistics = false" class="btn">Ajouter Animal</button>
      <button @click="showAllAnimals = false; showCategoryForm = false; showAnimalForm = false; showStatistics = true" class="btn">Statistiques</button>
    </div>

    <!-- Category Form -->
    <div v-if="showCategoryForm" class="section">
      <h2>Ajouter une Catégorie</h2>
      <form @submit.prevent="addCategory">
        <label>
          Nom :
          <input v-model="newCategoryData.name" type="text" />
        </label>
        <label>
          Image :
          <input @change="handleCategoryImageUpload" type="file" accept="image/*" />
          <img v-if="newCategoryData.image" :src="newCategoryData.image" alt="Image de la catégorie" class="category-image-preview" />
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
          <input v-model="newAnimalData.name" type="text" />
        </label>
        <label>
          Âge :
          <input v-model="newAnimalData.age" type="text" />
        </label>
        <label>
          Sexe :
          <input v-model="newAnimalData.sexe" type="text" />
        </label>
        <label>
          Activité :
          <input v-model="newAnimalData.activite" type="text" />
        </label>
        <label>
          Caractère :
          <input v-model="newAnimalData.caractere" type="text" />
        </label>
        <label>
          Image principale :
          <input @change="e => handleAnimalImageUpload(e, true)" type="file" accept="image/*" />
          <img v-if="newAnimalData.image" :src="newAnimalData.image" alt="Image principale de l'animal" class="animal-image-preview" />
        </label>
        <label>
          Deuxième image (optionnel) :
          <input @change="e => handleAnimalImageUpload(e, false)" type="file" accept="image/*" />
          <img v-if="newAnimalData.image2" :src="newAnimalData.image2" alt="Deuxième image de l'animal" class="animal-image-preview" />
        </label>
        <label>
          Description :
          <textarea v-model="newAnimalData.description"></textarea>
        </label>
        <label>
          Situation médicale :
          <textarea v-model="newAnimalData.situationMedicale"></textarea>
        </label>
        <label>
          Catégorie :
          <select v-model="newAnimalData.categoryId">
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
          <button @click="deleteCategory(category)" class="btn btn-delete">Supprimer</button>
        </div>
      </div>
      <div class="animal-list">
        <div v-for="animal in filteredAnimalsBySearch" :key="animal.id" class="animal-card">
          <img :src="animal.image" :alt="animal.name" class="animal-image" />
          <h3>{{ animal.name }}</h3>
          <button @click="openAnimalModal(animal)">Voir Détails</button>
        </div>
      </div>
    </div>

    <!-- Modal for Animal Details -->
    <div v-if="selectedAnimal" class="modal" @click.self="closeAnimalModal">
      <div class="modal-content">
        <button class="close-button" @click="closeAnimalModal">&times;</button>
        <h2>{{ selectedAnimal.name }}</h2>
        <div class="modal-info">
          <p><strong>Âge:</strong> {{ selectedAnimal.age }}</p>
          <p><strong>Sexe:</strong> {{ selectedAnimal.sexe }}</p>
          <p><strong>Activité:</strong> {{ selectedAnimal.activite }}</p>
          <p><strong>Caractère:</strong> {{ selectedAnimal.caractere }}</p>
          <p><strong>Description:</strong> {{ selectedAnimal.description }}</p>
          <p><strong>Situation médicale:</strong> {{ selectedAnimal.situationMedicale }}</p>
        </div>
        <div class="modal-images">
          <img :src="selectedAnimal.image" :alt="selectedAnimal.name" class="modal-image" />
          <img v-if="selectedAnimal.image2" :src="selectedAnimal.image2" :alt="selectedAnimal.name + ' - 2'" class="modal-image" />
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

.category-list, .animal-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.category-card, .animal-card {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  width: 200px;
  text-align: center;
  cursor: pointer;
}

.category-image, .animal-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.category-image-preview, .animal-image-preview {
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
