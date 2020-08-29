import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../config/Routing/routes";
const MainView: React.FC = () => {
  return (
    <>
      <h1>Main</h1>
      <Link to={Routes.REGISTER}>Register</Link>
      <Link to={Routes.LOGIN}>Login</Link>
    </>
  );
};
export default MainView;
