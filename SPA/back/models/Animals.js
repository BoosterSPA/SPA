const connection = require('../config/db.js')

const animals = {
    getAllAnimals: (callback) => {
        connection.query("SELECT * FROM animal", callback)
    },
    // addAnimals: (nouveauLivre, callback) => {
    //     connection.query("INSERT INTO livres SET ?", nouveauLivre, callback)
    // },
    // updateAnimals: (id, livreModifie, callback) => {
    //     connection.query("UPDATE livres SET ? WHERE id = ?",
    //         [livreModifie, id], 
    //         callback
    //         )
    // },
    // deleteAnimals: (id, callback) => {
    //     connection.query("DELETE FROM livres WHERE id = ?", id ,callback)
    // }
}

module.exports = animals;