import React, { Component, ReactType, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Routes } from "./routes";
import { store } from "../Store";

interface ProtectedProps {
  component: ReactType;
  path?: string;
  exact?: boolean;
}

const ProtectedRoute = ({ component: Component, ...rest }: ProtectedProps) => {
  const { authUser } = useContext(store);
  const handleTokenCheck = () => {
    if (authUser) return <Component />;
    else return <Redirect to={Routes.MAIN} />;
  };
  return <Route {...rest} render={() => handleTokenCheck()} />;
};
export default ProtectedRoute;
