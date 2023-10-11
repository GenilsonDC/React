import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./views/Home";
import reportWebVitals from "./reportWebVitals";
import EditaHorarios from "./views/EditaHorario";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Home /> */}
    <EditaHorarios />
  </React.StrictMode>
);

reportWebVitals();
