const { response } = require("express");
const horariosModel = require("../Model/horariosModel");

class horariosController {
  async create(req, res) {
    const horarios = new horariosModel(req.body);
    await horarios
      .save()
      .then((response) => {
        return res
          .status(200)
          .json({ response: "✅ Sucesso - Horário criado" });
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ error: "⚠️ Não foi possível criar o Horário! " });
      });
  }
  async updated(req, res) {
    await horariosModel
      .findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })

      .then((response) => {
        return res.status(200).json({ response: "✅ Horário atualizado" });
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ error: "⚠️ Não foi possível atualizar o horário! " });
      });
  }

  async delete(req, res) {
    await horariosModel
      .deleteOne({ _id: req.params.id })

      .then((response) => {
        if (response)
          return res.status(200).json({ response: "✅ Horario deletado " });
        else
          return res
            .status(404)
            .json({ error: "⚠️ Não foi possível encontrar o horário! " });
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ error: "⚠️ Não foi possível excluir o horário! " });
      });
  }

  async all(req, res) {
    await horariosModel
      .find({ fatec: { $in: req.query.fatec } })
      .sort("abrevia_curso") //Organiza
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ error: "⚠️ Não foi possível mostrar todos os horário! " });
      });
  }

  async show(req, res) {
    await horariosModel
      .findById(req.params.id)

      .then((response) => {
        if (response) return res.status(200).json(response);
        else
          return res
            .status(404)
            .json({ error: "⚠️ Não foi possível encontrar o horário! " });
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ error: "⚠️ Não foi possível mostrar horário! " });
      });
  }
  async filtered(req, res) {
    await horariosModel
      .find({
        id_curso: req.query.id_curso,
        semestre: req.query.semestre,
        dia_semana: req.query.dia_semana,
      })

      .then((response) => {
        if (response) return res.status(200).json(response);
        else
          return res
            .status(404)
            .json({ error: "⚠️ Não foi possível encontrar os Horarios! " });
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ error: "⚠️ Não foi possível mostrar os Horarios! " });
      });
  }
}

module.exports = new horariosController();
