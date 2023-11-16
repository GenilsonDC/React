const { response } = require("express");
const cursoModel = require("../Model/cursoModel");

class cursoController {
  async create(req, res) {
    const curso = new cursoModel(req.body);
    await curso
      .save()
      .then((response) => {
        return res.status(200).json({ response: "✅ Sucesso - curso criado" });
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ error: "⚠️ Não foi possível criar o curso! " });
      });
  }
  async updated(req, res) {
    await cursoModel
      .findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })

      .then((response) => {
        return res.status(200).json({ response: "✅ Curso atualizado" });
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ error: "⚠️ Não foi possível atualizar! " });
      });
  }

  async delete(req, res) {
    await cursoModel
      .deleteOne({ _id: req.params.id })

      .then((response) => {
        if (response)
          return res.status(200).json({ response: "✅ Curso deletado " });
        else
          return res
            .status(404)
            .json({ error: "⚠️ Não foi possível encontrar o curso! " });
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ error: "⚠️ Não foi possível excluir o curso! " });
      });
  }

  async all(req, res) {
    await cursoModel

      .find({ fatec: { $in: req.query.fatec } })
      .sort("abrevia_curso")
      .sort("periodo")
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ error: "⚠️ Não foi possível mostrar todos os cursos! " });
      });
  }

  async show(req, res) {
    await cursoModel
      .findById(req.params.id)

      .then((response) => {
        if (response) return res.status(200).json(response);
        else
          return res
            .status(404)
            .json({ error: "⚠️ Não foi possível encontrar o curso! " });
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ error: "⚠️ Não foi possível mostrar o curso! " });
      });
  }
}

module.exports = new cursoController();
