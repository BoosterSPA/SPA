const express = require('express')
const AnimalsController = require('../controllers/AnimalsController')

const router = express.Router();

router.get("/", AnimalsController.getAllAnimals)
router.post("/addAnimal",AnimalsController.addAnimal)
router.put("/update/:id", AnimalsController.updateAnimal)
router.delete("/delete/:id", AnimalsController.deleteAnimal)

module.exports = router