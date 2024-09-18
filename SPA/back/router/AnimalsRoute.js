const express = require('express')
const AnimalsController = require('../controllers/AnimalsController')

const router = express.Router();

router.get("/", AnimalsController.getAllAnimals)
// router.post("/add-books",LivreController.addBook)
// router.put("/update/:id", LivreController.updateBook)
// router.delete("/delete/:id", LivreController.deleteBook)

module.exports = router