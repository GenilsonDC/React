const mongoose = require("../Config/database");
const schema = mongoose.Schema;

const taskSchema = new schema({
  fatec: { type: String, required: true },
  img_curso: { type: Number, required: true },
  abrevia_curso: { type: String, required: true },
  periodo: { type: String, required: true },
  nome_curso: { type: String, require: true },
  materia: { type: String, required: true },
  professor: { type: String, required: true },
  semestre: { type: Number, required: true },
  dia_semana: { type: Number, required: true },
  predio: { type: String, require: true },
  sala_lab: { type: String, require: true },
  horario: { type: String, require: true },
});

module.exports = mongoose.model("task", taskSchema);
