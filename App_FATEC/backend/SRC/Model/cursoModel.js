const mongoose = require("../Config/database");
const schema = mongoose.Schema;

const cursoSchema = new schema({
  fatec: { type: String, required: true },
  img_curso: { type: Number, required: true },
  abrevia_curso: { type: String, required: true },
  periodo: { type: String, required: true },
  nome_curso: { type: String, require: true },
  qtd_semestres: { type: Number, required: true },
});

module.exports = mongoose.model("cursos", cursoSchema);
