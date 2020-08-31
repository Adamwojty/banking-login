import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Formik } from "formik";
import { Colors, Media } from "../assets/styles";
import { Routes } from "../config/Routing/routes";
import MultiStep from "../components/MultiStep";
import { PasswordInput, EmailInput } from "../components/LoginInputs";
import { useLogin } from "../hooks/useLogin";
import { store, setAuthUser } from "../config/Store";

interface IEmailFormValues {
  email: string;
}
interface IPass {
  id: number;
  value: string | undefined;
  isBlocked: number | undefined;
}

const LoginView: React.FC<{}> = () => {
  const initialEmail: IEmailFormValues = { email: "" };
  const initialPassword: string[] = [];
  const history = useHistory();
  const { disabled, checkEmail, password } = useLogin();
  const { dispatch } = React.useContext(store);

  const handlePasswordCheck = (values: string[], password: IPass[]) => {
    const inputs = values.join("");
    const pass = password.map((x) => x.value).join("");
    if (inputs !== pass) {
      return;
    } else {
      dispatch(setAuthUser(true));
      history.push(Routes.SUCCESS);
    }
  };
  return (
    <>
      <h1>Login</h1>
      <Wrapper>
        <MultiStep.Wrapper>
          <MultiStep.Page pageIndex={1}>
            <Section>
              <Formik
                initialValues={initialEmail}
                onSubmit={(values) => {
                  checkEmail(values);
                }}>
                {(props) => <EmailInput {...props} />}
              </Formik>
            </Section>
          </MultiStep.Page>
          <MultiStep.Page pageIndex={2}>
            <Section>
              <Formik
                initialValues={initialPassword}
                onSubmit={(values) => {
                  handlePasswordCheck(values, password);
                }}>
                {(props) => <PasswordInput {...props} password={password} />}
              </Formik>
            </Section>
          </MultiStep.Page>
          <MultiStep.Controls disabled={disabled} />
          <MultiStep.ProgressBar />
        </MultiStep.Wrapper>
      </Wrapper>
      <Redirect to={Routes.MAIN}>Back</Redirect>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  min-height: 300px;
  background-color: ${Colors.BACKGROUND};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
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
const Redirect = styled(Link)`
  color: ${Colors.TEXT_DARK};
  margin: 10px 0;
  &:hover {
    border-bottom: 1px solid ${Colors.TEXT_DARK};
  }
`;

export default LoginView;
