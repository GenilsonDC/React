const express = require("express");
const router = express.Router();
const horariosController = require("../Controller/horariosController");
const horariosValidation = require("../Middlewares/horariosValidation");
const cursoValidation = require("../Middlewares/cursoValidation");
const cursoController = require("../Controller/cursoController");

router.post("/curso", cursoValidation, cursoController.create);
router.put("/curso/:id", cursoValidation, cursoController.updated);
router.get("/curso/filter", cursoController.all);
router.delete("/curso/:id", cursoController.delete);
router.get("/curso/:id", cursoController.show);
// -------------------------------------------------------------
router.get("/horarios/filtered", horariosController.filtered);
router.post("/horario", horariosValidation, horariosController.create);
router.put("/horario/:id", horariosValidation, horariosController.updated);
router.delete("/horario/:id", horariosController.delete);
router.get("/horario/:id", horariosController.show);

module.exports = router;
