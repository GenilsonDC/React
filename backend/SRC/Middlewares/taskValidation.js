const taskModel = require("../Model/taskModel");

const taskValidation = async (req, res, next) => {
  const {
    fatec,
    img_curso,
    abrevia_curso,
    periodo,
    nome_curso,
    materia,
    professor,
    semestre,
    dia_semana,
    predio,
    sala_lab,
    horario,
  } = req.body;

  if (!fatec)
    return res
      .status(400)
      .json({ error: "⚠️ Cidade da Faculdade é obrigatório ⚠️" });
  else if (!img_curso)
    return res
      .status(400)
      .json({ error: "⚠️ Imagem do curso é obrigatório ⚠️ " });
  else if (!abrevia_curso)
    return res
      .status(400)
      .json({ error: "⚠️ Abreviacao do curso é obrigatório ⚠️ " });
  else if (!periodo)
    return res.status(400).json({ error: "⚠️ Periodo é obrigatório ⚠️ " });
  else if (!nome_curso)
    return res
      .status(400)
      .json({ error: "⚠️ Nome do Curso é obrigatório ⚠️ " });
  else if (!materia)
    return res.status(400).json({ error: "⚠️ Matéria é obrigatória ⚠️ " });
  else if (!professor)
    return res.status(400).json({ error: "⚠️ Professor é obrigatório ⚠️ " });
  else if (!semestre)
    return res.status(400).json({ error: "⚠️ Semestre é obrigatório ⚠️ " });
  else if (!dia_semana)
    return res
      .status(400)
      .json({ error: "⚠️ Dia da Semanda é obrigatório ⚠️ " });
  else if (!predio)
    return res.status(400).json({ error: "⚠️ Prédio é obrigatório ⚠️ " });
  else if (!sala_lab)
    return res
      .status(400)
      .json({ error: "⚠️ Sala ou laboratório é obrigatório ⚠️ " });
  else if (!horario)
    return res.status(400).json({ error: "⚠️ Horarios é obrigatório ⚠️ " });
  else {
    let exists;

    if (req.params.id) {
      exists = await taskModel.findOne({
        _id: { $ne: req.params.id },
        abrevia_curso: { $eq: abrevia_curso },
        semestre: { $eq: semestre },
        dia_semana: { $eq: dia_semana },
        predio: { $eq: predio },
        sala_lab: { $eq: sala_lab },
        horario: { $eq: horario },
      });
    } else {
      exists = await taskModel.findOne({
        abrevia_curso: { $eq: abrevia_curso },
        semestre: { $eq: semestre },
        dia_semana: { $eq: dia_semana },
        predio: { $eq: predio },
        sala_lab: { $eq: sala_lab },
        horario: { $eq: horario },
      });
    }

    if (exists) {
      return res.status(400).json({
        error: "⚠️ Já existe ⚠️",
      });
    }
    next();
  }
};
module.exports = taskValidation;