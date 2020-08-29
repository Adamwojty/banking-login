import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../config/Routing/routes";
const LoginView: React.FC<{}> = () => {
  return (
    <>
      <h1>Login</h1>
      <Link to={Routes.REGISTER}>Register</Link>
      <Link to={Routes.MAIN}>Main</Link>
    </>
  );
};
export default LoginView;
