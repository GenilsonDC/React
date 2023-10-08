const { response } = require("express");
const taskModel = require("../Model/taskModel");

class taskController {
  async create(req, res) {
    const task = new taskModel(req.body);
    await task
      .save()
      .then((response) => {
        return res
          .status(200)
          .json({ response: "✅ Sucesso - Horario criado" });
      })
      .catch((error) => {
        return res.status(500).json({ error: "⚠️ Não foi possível criar ! " });
      });
  }
  async updated(req, res) {
    await taskModel
      .findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })

      .then((response) => {
        return res.status(200).json({ response: "✅ Horario atualizado" });
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ error: "⚠️ Não foi possível atualizar! " });
      });
  }

  async delete(req, res) {
    await taskModel
      .deleteOne({ _id: req.params.id })

      .then((response) => {
        if (response)
          return res
            .status(200)
            .json({ response: "✅ Curso e Horario deletado " });
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
    await taskModel
      .find({ fatec: { $in: req.body.fatec } })
      .sort("abrevia_curso") //Organiza
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ error: "⚠️ Não foi possível mostrar todas os cursos! " });
      });
  }

  async show(req, res) {
    await taskModel
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
  async ads_m(req, res) {
    await taskModel
      .find({
        abrevia_curso: "ADS",
        periodo: "Diurno",
        semestre: req.body.semestre,
        dia_semana: req.body.dia_semana,
      })

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
  async ads_nt(req, res) {
    await taskModel
      .find({
        abrevia_curso: "ADS",
        periodo: "Noturno",
        semestre: req.body.semestre,
        dia_semana: req.body.dia_semana,
      })

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
  async ea(req, res) {
    await taskModel
      .find({
        abrevia_curso: "Eletrônica Automotiva",
        periodo: "Vespertino",
        semestre: req.body.semestre,
        dia_semana: req.body.dia_semana,
      })

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
  async fm_m(req, res) {
    await taskModel
      .find({
        abrevia_curso: "Fabricarão Mecânica",
        periodo: "Diurno",
        semestre: req.body.semestre,
        dia_semana: req.body.dia_semana,
      })

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
  async fm_na(req, res) {
    await taskModel
      .find({
        abrevia_curso: "Fabricarão Mecânica",
        periodo: "Noturno A",
        semestre: req.body.semestre,
        dia_semana: req.body.dia_semana,
      })

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
  async fm_nb(req, res) {
    await taskModel
      .find({
        abrevia_curso: "Fabricarão Mecânica",
        periodo: "Noturno B",
        semestre: req.body.semestre,
        dia_semana: req.body.dia_semana,
      })

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
  async gq(req, res) {
    await taskModel
      .find({
        abrevia_curso: "Gestão da Qualidade",
        periodo: "Diurno",
        semestre: req.body.semestre,
        dia_semana: req.body.dia_semana,
      })

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
  async log(req, res) {
    await taskModel
      .find({
        abrevia_curso: "Logística",
        periodo: "Vespertino",
        semestre: req.body.semestre,
        dia_semana: req.body.dia_semana,
      })

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
  async ma(req, res) {
    await taskModel
      .find({
        abrevia_curso: "Manufatura Avançada",
        periodo: "Diurno",
        semestre: req.body.semestre,
        dia_semana: req.body.dia_semana,
      })

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
  async po(req, res) {
    await taskModel
      .find({
        abrevia_curso: "Polímeros",
        periodo: "Noturno",
        semestre: req.body.semestre,
        dia_semana: req.body.dia_semana,
      })

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
  async metal(req, res) {
    await taskModel
      .find({
        abrevia_curso: "Processos Metalúrgicos",
        periodo: "Diurno",
        semestre: req.body.semestre,
        dia_semana: req.body.dia_semana,
      })

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
  async pm_m(req, res) {
    await taskModel
      .find({
        abrevia_curso: "Projetos Mecânicos",
        periodo: "Diurno",
        semestre: req.body.semestre,
        dia_semana: req.body.dia_semana,
      })

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
  async pm_n(req, res) {
    await taskModel
      .find({
        abrevia_curso: "Projetos Mecânicos",
        periodo: "Noturno",
        semestre: req.body.semestre,
        dia_semana: req.body.dia_semana,
      })

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
  async sb(req, res) {
    await taskModel
      .find({
        abrevia_curso: "Sistemas Biomédicos",
        periodo: "Diurno",
        semestre: req.body.semestre,
        dia_semana: req.body.dia_semana,
      })

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

module.exports = new taskController();
