import React from "react";
import styled from "styled-components";
import MultiStep from "../MultiStep";
import { Media, Colors } from "../../assets/styles";
interface IRegisterProps {
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  values: {
    email: string;
    password: string;
    passwordConfirmation: string;
  };
  errors: {
    email?: string;
    password?: string;
    passwordConfirmation?: string;
  };
}

const RegisterInputs: React.FC<IRegisterProps> = ({ handleSubmit, handleChange, values, errors }) => {
  return (
    <Wrapper onSubmit={handleSubmit}>
      <MultiStep.Wrapper>
        <MultiStep.Page pageIndex={1}>
          <Section>
            <Label htmlFor='email'>What's your email adress</Label>
            <Input type='text' name='email' placeholder='email' onChange={handleChange} value={values.email} />
          </Section>
        </MultiStep.Page>
        <MultiStep.Page pageIndex={2}>
          <Section>
            <Label htmlFor='password'>What's your password</Label>
            <Input type='text' name='password' placeholder='password' onChange={handleChange} value={values.password} />
          </Section>
        </MultiStep.Page>
        <MultiStep.Page pageIndex={3}>
          <Section>
            <Label htmlFor='passwordConfirm'>Confirm your password</Label>
            <Input
              type='text'
              name='passwordConfirmation'
              placeholder='confirm password'
              onChange={handleChange}
              value={values.passwordConfirmation}
            />
          </Section>
        </MultiStep.Page>
        <MultiStep.Page pageIndex={4}>
          <Section>
            <UserInfo>
              <h2>Confirm your login data</h2>
              {!errors.email || !errors.password ? (
                <>
                  <p>email: {values.email}</p>
                  <p>password: {values.password}</p>
                </>
              ) : (
                <>
                  <ErrorMsg>{errors.email}</ErrorMsg>
                  <ErrorMsg>{errors.password}</ErrorMsg>
                </>
              )}
            </UserInfo>
            <Button type='submit'>Submit</Button>
          </Section>
        </MultiStep.Page>
        <MultiStep.Controls />
        <MultiStep.ProgressBar />
      </MultiStep.Wrapper>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 300px;
  background-color: ${Colors.BACKGROUND};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  @media ${Media.MOBILE_L} {
    width: 450px;
  }
`;
const Section = styled.section`
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
  margin-bottom: 40px;
`;
const Label = styled.label`
  font-size: 16px;
  text-align: center;
  margin-bottom: 5px;
`;
const Button = styled.button`
  width: 50%;
  padding: 5px 15px;
  border-radius: 5px;
  margin-bottom: 10px;
  color: ${Colors.TEXT};
  background-color: ${Colors.BUTTON};
  transition: 0.2s ease-in;
  &:hover {
    background-color: ${Colors.BUTTON_PROGRESS};
    color: ${Colors.BUTTON};
  }
`;
const UserInfo = styled.div`
  margin: 10px 0;
  h2 {
    font-size: 18px;
    font-weight: 400;
  }
  p {
    margin: 3px 0;
    font-size: 12px;
    text-align: center;
  }
`;
const ErrorMsg = styled.p`
  color: ${Colors.ERROR};
`;
export default RegisterInputs;
