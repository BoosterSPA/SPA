const Animals = require('../models/Animals.js')

const animalsController = {


    getAllAnimals: (req, res) => {
        Animals.getAllAnimals((err, result) => {
            if (err) throw err;
            res.json(result)
        })
    },

    addAnimal: (req, res) => {
        const newAnimal = req.body
        Animals.addAnimal(newAnimal, (err) => {
            if (err) throw err;
            res.json({ message: "Animal ajouté avec succès" })
        })
    },


    updateAnimal: (req, res) => {
        const id = req.params.id
        const AnimalUpdated = req.body
        Animals.updateAnimal(id, AnimalUpdated, (err) => {
            if (err) throw err;
            res.json({ message: "Animal modifié avec succès" })
        })
    },

    deleteAnimal: (req, res) => {
        const id = req.params.id
        Animals.deleteAnimal(id, (err) => {
            if (err) throw err;
            res.json({ message: "Animal supprimé avec succès" })
        })
    },

    getAllCategries: (req, res) => {
        Animals.getAllCategries((err, result) => {
            if (err) throw err;
            res.json(result)
        })
    },

    addCategory: (req, res) => {
        const newCategory = req.body
        Animals.addCategory(newCategory, (err) => {
            if (err) throw err;
            res.json({ message: "Categorie ajoutée avec succès" })
        })
    }, 

    updateCategory: (req, res) => {
        const id = req.params.id;
        const categoryUpdated = req.body
        Animals.updateCategory(id, categoryUpdated, (err) => {
            if (err) throw err;
            res.json({ message: "Categorie modifiée avec succès" })
        })
    },

    deleteCategory: (req, res) => {
        const id = req.params.id
        Animals.deleteCategory(id, (err) => {
            if (err) throw err;
            res.json({ message: "Categorie supprimée avec succès" })
        })
    },



}

module.exports = animalsController