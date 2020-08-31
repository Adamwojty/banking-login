import * as React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { Routes } from "../config/Routing/routes";
import { Colors } from "../assets/styles";
import { store, setAuthUser } from "../config/Store";

const SuccessView: React.FC = () => {
  const { dispatch } = React.useContext(store);
  const handleRedirect = () => {
    dispatch(setAuthUser(false));
    return <Redirect to={Routes.MAIN} />;
  };
  return (
    <>
      <h1>Congratulations</h1>
      <Button onClick={handleRedirect}>Log out</Button>
    </>
  );
};
const Button = styled.button`
  margin-top: 15px;
  background-color: ${Colors.BACKGROUND};
  padding: 10px 15px;
  color: ${Colors.TEXT_DARK};
  transition: 0.2s ease-in-out;
  :hover {
    background-color: ${Colors.BUTTON};
  }
`;
export default SuccessView;
