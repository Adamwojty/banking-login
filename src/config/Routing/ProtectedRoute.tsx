import React, { Component, ReactType } from "react";
import { Route, Redirect } from "react-router-dom";
import { Routes } from "./routes";

interface ProtectedProps {
  component: ReactType;
  path?: string;
  exact?: boolean;
}

const ProtectedRoute = ({ component: Component, ...rest }: ProtectedProps) => {
  const token = sessionStorage.getItem("token");
  const handleTokenCheck = () => {
    if (token) return <Component />;
    else return <Redirect to={Routes.LOGIN} />;
  };
  return <Route {...rest} render={() => handleTokenCheck()} />;
};
export default ProtectedRoute;
