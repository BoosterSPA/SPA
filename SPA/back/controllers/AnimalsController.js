const Animals = require('../models/Animals.js')

const animalsController = {
    getAllAnimals: (req, res) => {
        Animals.getAllAnimals((err, result) => {
            if (err) throw err;
            res.json(result)
        })
    },
    // addAnimals: (req, res) => {
    //     const nouveauAnimal = req.body
    //     Animals.addAnimals(nouveauLivre, (err) => {
    //         if (err) throw err;
    //         res.json({message: "Livre ajouté avec succès"})
    //     })
    // },
    // updateAnimals: (req, res) => {
    //     const id = req.params.id
    //     const AnimalsModifie = req.body
    //     Livre.updateAnimals(id, AnimalsModifie, (err) => {
    //         if (err) throw err;
    //         res.json({message: "Livre modifié avec succès"})
    //     })
    // },
    // deleteAnimals: (req, res) => {
    //     const id = req.params.id
    //     Livre.deleteAnimals(id, (err) => {
    //         if (err) throw err;
    //         res.json({message: "Livre supprimé avec succès"})
    //     })
    // }


}

module.exports = animalsController