import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Routes } from "../config/Routing/routes";
import { Colors } from "../assets/styles";
const MainView: React.FC = () => {
  return (
    <>
      <Title>Banking like login system</Title>
      <List>
        <li>Create account</li>
        <li>Login</li>
      </List>
      <Links>
        <Redirect to={Routes.REGISTER}>Register</Redirect>
        <Redirect to={Routes.LOGIN}>Login</Redirect>
        <Redirect to={Routes.SUCCESS}>Success</Redirect>
      </Links>
    </>
  );
};
const Title = styled.h1`
  font-size: 30px;
  text-align: center;
`;
const List = styled.ol`
  margin: 15px 0;
  display: flex;
  width: 280px;
  justify-content: space-around;
`;
const Links = styled.div`
  margin-top: 20px;
  display: flex;
  width: 280px;
  justify-content: space-around;
`;
const Redirect = styled(Link)`
  display: block;
  background-color: ${Colors.BACKGROUND};
  padding: 10px 15px;
  color: ${Colors.TEXT_DARK};
  transition: 0.2s ease-in-out;
  :hover {
    background-color: ${Colors.BUTTON};
  }
`;
export default MainView;
