const horariosModel = require("../Model/horariosModel");

const horariosValidation = async (req, res, next) => {
  const {
    id_curso,
    materia,
    professor,
    semestre,
    dia_semana,
    predio,
    sala_lab,
    horario,
  } = req.body;

  if (!materia)
    return res.status(400).json({ error: "⚠️ Matéria é obrigatória ⚠️ " });
  if (materia && materia.length > 27) {
    return res
      .status(400)
      .json({ error: "⚠️ Matéria: Máximo 27 caracteres ⚠️ " });
  } else if (!professor)
    return res.status(400).json({ error: "⚠️ Professor é obrigatório ⚠️ " });
  if (professor && professor.length > 17) {
    return res
      .status(400)
      .json({ error: "⚠️ Professor: Máximo 17 caracteres ⚠️ " });
  } else if (!semestre)
    return res.status(400).json({ error: "⚠️ Semestre é obrigatório ⚠️ " });
  else if (!dia_semana)
    return res
      .status(400)
      .json({ error: "⚠️ Dia da Semanda é obrigatório ⚠️ " });
  else if (!predio)
    return res.status(400).json({ error: "⚠️ Prédio é obrigatório ⚠️ " });
  if (predio && predio.length > 9) {
    return res.status(400).json({ error: "⚠️ Prédio: Máximo 9 caracteres ⚠️" });
  } else if (!sala_lab)
    return res
      .status(400)
      .json({ error: "⚠️ Sala ou laboratório é obrigatório ⚠️" });
  if (sala_lab && sala_lab.length > 10) {
    return res
      .status(400)
      .json({ error: "⚠️ Sala/Lab: Máximo 10 caracteres ⚠️" });
  } else if (!horario)
    return res.status(400).json({ error: "⚠️ Horarios é obrigatório ⚠️" });
  if (horario && horario.length > 13) {
    return res
      .status(400)
      .json({ error: "⚠️ Horários: Máximo 13 caracteres ⚠️" });
  } else {
    let exists;

    if (req.params.id) {
      exists = await horariosModel.findOne({
        _id: { $ne: req.params.id },
        id_curso: { $eq: id_curso },
        semestre: { $eq: semestre },
        dia_semana: { $eq: dia_semana },
        predio: { $eq: predio },
        sala_lab: { $eq: sala_lab },
        horario: { $eq: horario },
      });
    } else {
      exists = await horariosModel.findOne({
        id_curso: { $eq: id_curso },
        semestre: { $eq: semestre },
        dia_semana: { $eq: dia_semana },
        predio: { $eq: predio },
        sala_lab: { $eq: sala_lab },
        horario: { $eq: horario },
      });
    }

    if (exists) {
      return res.status(400).json({
        error: "⚠️ Já existe horario com esses dados ⚠️",
      });
    }
    next();
  }
};
module.exports = horariosValidation;
