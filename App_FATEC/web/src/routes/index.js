import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../views/Home";
import EditaHorario from "../views/EditaHorario";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/horario" element={EditaHorario} />
        <Route path="/horario/:id" element={EditaHorario} />
      </Routes>
    </BrowserRouter>
  );
}
