import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../views/Home";
import EditaHorario from "../views/EditaHorario";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/task" exact component={EditaHorario} />
      </Switch>
    </BrowserRouter>
  );
}
