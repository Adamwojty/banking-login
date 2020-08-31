import React from "react";
import styled from "styled-components";

interface IProps {
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  values: {
    email: string;
  };
  errors: {
    email?: string;
  };
}

const LoginInputs: React.FC<IProps> = ({ handleChange, values, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor='email'>What's your email adress</Label>
      <Input type='text' name='email' placeholder='email' onChange={handleChange} value={values.email} />
      <Msg>Press enter to confirm</Msg>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  width: 60%;
  height: 20px;
  padding: 5px 5px;
  border-radius: 10px;
  margin-bottom: 5px;
`;
const Label = styled.label`
  font-size: 16px;
  text-align: center;
  margin-bottom: 5px;
`;
const Msg = styled.p`
  font-size: 10px;
  margin-bottom: 20px;
`;
export default LoginInputs;
