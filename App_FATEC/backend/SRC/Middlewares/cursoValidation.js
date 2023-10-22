const cursoModel = require("../Model/cursoModel");

const cursoValidation = async (req, res, next) => {
  const {
    fatec,
    img_curso,
    abrevia_curso,
    periodo,
    nome_curso,
    qtd_semestres,
  } = req.body;
  if (!fatec)
    return res
      .status(400)
      .json({ error: "⚠️ Cidade da Faculdade é obrigatório ⚠️" });
  else if (!img_curso)
    return res
      .status(400)
      .json({ error: "⚠️ Imagem do curso é obrigatório ⚠️" });
  else if (!abrevia_curso)
    return res
      .status(400)
      .json({ error: "⚠️ Abreviação/nome do curso é obrigatório ⚠️" });
  else if (!periodo)
    return res.status(400).json({ error: "⚠️ Periodo é obrigatório ⚠️" });
  else if (!nome_curso)
    return res.status(400).json({ error: "⚠️ Nome do curso é obrigatório ⚠️" });
  else if (!qtd_semestres)
    return res
      .status(400)
      .json({ error: "⚠️ A quantidade de semestre é obrigatório ⚠️" });
  if (qtd_semestres && qtd_semestres > 8) {
    return res.status(400).json({ error: "⚠️ Máximo 8 semestres ⚠️" });
  } else {
    let exists;

    if (req.params.id) {
      exists = await cursoModel.findOne({
        _id: { $ne: req.params.id },
        abrevia_curso: { $eq: abrevia_curso },
        periodo: { $eq: periodo },
        nome_curso: { $eq: nome_curso },
      });
    } else {
      exists = await cursoModel.findOne({
        abrevia_curso: { $eq: abrevia_curso },
        periodo: { $eq: periodo },
        nome_curso: { $eq: nome_curso },
      });
    }

    if (exists) {
      return res.status(400).json({
        error: "⚠️ Já existe curso com esses dados ⚠️",
      });
    }
    next();
  }
};
module.exports = cursoValidation;
