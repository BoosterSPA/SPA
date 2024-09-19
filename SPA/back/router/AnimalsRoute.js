const express = require('express')
const AnimalsController = require('../controllers/AnimalsController')

const router = express.Router();

router.get("/getAllAnimals", AnimalsController.getAllAnimals)
router.post("/addAnimal",AnimalsController.addAnimal)
router.put("/update/:id", AnimalsController.updateAnimal)
router.delete("/delete/:id", AnimalsController.deleteAnimal)

router.get("/getAllCategories", AnimalsController.getAllCategries)
router.post("/addCategory",AnimalsController.addCategory)
router.put("/updateCategory/:id",AnimalsController.updateCategory)
router.delete("/deleteCategory/:id",AnimalsController.deleteCategory)

module.exports = router