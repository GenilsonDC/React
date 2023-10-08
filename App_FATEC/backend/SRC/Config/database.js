const mongoose = require("mongoose");
const ulr = "mongodb://localhost:27017/horario_aula";
mongoose.connect(ulr, { useNewUrlParser: true });

module.exports = mongoose;
