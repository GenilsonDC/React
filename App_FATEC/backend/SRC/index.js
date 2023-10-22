// const setCors = require("cors");
const express = require("express");
const cors = require("cors");
const server = express();
server.use(cors());
server.use(express.json());

const routes = require("./Router/routes");
server.use("/", routes);

server.listen(7001, () => {
  console.log("\n\t 📡  .:APi ONLINE:.  ✅");
  console.log(`
  .       .    ))        .           .
  .       *            .         .
                .                      ..       *             .         .
                .        *              .
  .       .       .'          .
                 '.              *        .     .   '        .'     .              .
  .       .       .'          .
                 '.              *        .     .   '        .'     .              .
             _.---._   .            .     *
   *       .'       '.         *  . ,        ,       .
       _.-~===========~-._
      (___________________)       .   *
  '         |_______|   
  .       *             .         ..       *             .         .
  .                      .
.       .       .'          .
   '.              *        .
.   '        .'     .              .  .                      .
.       .       .'          .   '.              *        .
.   '        .'     .              .

  __                         ______        __
   |          _____________ |      |      |  |
   |     ____//__][__][___| |      |      |  |
   |   (o  _|  -|     _ o | |      |   ___|  |_
 __|___ '-(_)--------(_)-'   __________________|__
 ..--~~~~ GenilsonDC   ~--.
            
`);
});
