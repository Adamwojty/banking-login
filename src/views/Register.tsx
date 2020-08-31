import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { Routes } from "../config/Routing/routes";
import { Colors } from "../assets/styles";
import RegisterInputs from "../components/RegisterInputs";
import { validationSchema } from "../actions/validationSchema";
import { store, setUser } from "../config/Store";

interface IFormValues {
  email: string;
  password: string;
  passwordConfirmation: string;
}

const RegisterView: React.FC<{}> = () => {
  const data = React.useContext(store);
  const history = useHistory<History>();
  const [succes, setSucces] = React.useState<boolean>(false);
  const initialValues: IFormValues = { email: "", password: "", passwordConfirmation: "" };
  return (
    <>
      <h1>Register</h1>
      {succes ? <p>Account created</p> : null}
      <Formik
        initialValues={initialValues}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          setSucces(!succes);
          data.dispatch(
            setUser({
              email: values.email,
              password: values.password,
            })
          );
          setTimeout(() => {
            setSucces(!succes);
            actions.setSubmitting(false);
            history.push(Routes.MAIN);
          }, 3000);
        }}>
        {(props) => <RegisterInputs {...props} />}
      </Formik>
      <Redirect to={Routes.MAIN}>Back</Redirect>
    </>
  );
};
const Redirect = styled(Link)`
  color: ${Colors.TEXT_DARK};
  margin: 10px 0;
  &:hover {
    border-bottom: 1px solid ${Colors.TEXT_DARK};
  }
`;
export default RegisterView;
