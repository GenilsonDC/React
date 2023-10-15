import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../views/Home";
import EditaHorario from "../views/EditaHorario";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/task" element={EditaHorario} />
        <Route path="/task/:id" element={EditaHorario} />
      </Routes>
    </BrowserRouter>
  );
}
