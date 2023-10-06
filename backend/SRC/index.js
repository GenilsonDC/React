// const setCors = require("cors");
const express = require("express");
const server = express();
server.use(express.json());

const taskRoutes = require("./Router/taskRoutes");
server.use("/task", taskRoutes); //  injetando o arquivo de routas

// server.get("/teste", (req, res) => {
//   res.send("OK - Online ✅");
// });

server.listen(7001, () => {
  console.log(" 📡 ✅");
});
