import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "../pages/inicio";
import Registro from "../pages/registro";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/registro" component={Registro} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
