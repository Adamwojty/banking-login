import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Routes } from "./routes";
import ProtectedRoute from "./ProtectedRoute";
import LoginView from "../../views/Login";
import RegisterView from "../../views/Register";
import MainView from "../../views/Main";
import SuccesView from "../../views/Success";

const Routing: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute path={Routes.SUCCESS} component={SuccesView} exact />
        <Route path={Routes.LOGIN} component={LoginView} exact />
        <Route path={Routes.REGISTER} component={RegisterView} exact />
        <Route path={Routes.MAIN} component={MainView} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routing;
