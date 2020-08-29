import React from "react";
import styled from "styled-components";
import Routing from "./config/Routing/Routing";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const App: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Routing />
    </Wrapper>
  );
};

export default App;
