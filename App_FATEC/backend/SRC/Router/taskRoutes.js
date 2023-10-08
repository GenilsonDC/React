const express = require("express");
const router = express.Router();
const taskController = require("../Controller/taskController");
const TaskValidation = require("../Middlewares/taskValidation");

router.post("/", TaskValidation, taskController.create);
router.put("/:id", TaskValidation, taskController.updated);
router.get("/:id", taskController.show);
router.delete("/:id", taskController.delete);

router.get("/filter/home", taskController.all);
router.get("/filter/ads_manha", taskController.ads_m);
router.get("/filter/ads_noturno", taskController.ads_nt);
router.get("/filter/eletronica_auto", taskController.ea);
router.get("/filter/fabri_mec_Manha", taskController.fm_m);
router.get("/filter/fabri_Mec_Noturno_A", taskController.fm_na);
router.get("/filter/fabri_Mec_Noturno_B", taskController.fm_nb);
router.get("/filter/gestao_Qualidade", taskController.gq);
router.get("/filter/logistica", taskController.log);
router.get("/filter/manufatura_avanc", taskController.ma);
router.get("/filter/polimeros", taskController.po);
router.get("/filter/processos_metalurgicos", taskController.metal);
router.get("/filter/projetos_mecanicos_manha", taskController.pm_m);
router.get("/filter/projetos_mecanicos_noturno", taskController.pm_n);
router.get("/filter/sistemas_biomedicos", taskController.sb);

module.exports = router;
