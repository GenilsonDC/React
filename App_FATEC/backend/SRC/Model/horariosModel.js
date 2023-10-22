const mongoose = require("../Config/database");
const schema = mongoose.Schema;

const horariosSchema = new schema({
  id_curso: { type: String, required: true },
  materia: { type: String, required: true },
  professor: { type: String, required: true },
  semestre: { type: Number, required: true },
  dia_semana: { type: Number, required: true },
  predio: { type: String, require: true },
  sala_lab: { type: String, require: true },
  horario: { type: String, require: true },
});

module.exports = mongoose.model("horarios", horariosSchema);
