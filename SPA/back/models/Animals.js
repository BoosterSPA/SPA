const connection = require('../config/db.js')

const animals = {
    getAllAnimals: (callback) => {
        connection.query("SELECT * FROM animal", callback)
    },
    
    addAnimal: (newAnimal, callback) => {
        const query = "INSERT INTO animal (name, age, sexe, activite, caractere, profile_image, image_desc, medical, id_category) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        // Appelle correctement connection.query avec les valeurs et le callback
        connection.query(query, [
            newAnimal.name, 
            newAnimal.age, 
            newAnimal.sexe, 
            newAnimal.activite, 
            newAnimal.caractere, 
            newAnimal.profile_image, 
            newAnimal.image_desc, 
            newAnimal.medical, 
            newAnimal.id_category
        ], callback);
    
    },





    updateAnimal: (id, AnimalUpdated, callback) => {
        connection.query("UPDATE animal SET ? WHERE id = ?",
            [AnimalUpdated, id],
            callback
        )
    },

    deleteAnimal: (id, callback) => {
        connection.query("DELETE FROM animal WHERE id = ?", id, callback)
    },

    getAllCategries: (callback) => {
        connection.query("SELECT * FROM category", callback)
    },

    addCategory: (newCategory, callback) => {
        const values = Object.values(newCategory);

        connection.query("INSERT INTO category (name) VALUES (?)", values, callback);
    },

    updateCategory: (id, categoryUpdated, callback) => {
        connection.query("UPDATE category SET ? WHERE id = ?", [categoryUpdated,id], callback
        )
    },

    deleteCategory: (id, callback) => {
        connection.query("DELETE FROM category WHERE id = ?", id, callback)
    }
}

module.exports = animals;