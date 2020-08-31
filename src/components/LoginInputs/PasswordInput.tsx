import React from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
interface IProps {
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  values: any;
  errors: any;
  password: any;
}
interface IPassword {
  id: number;
  isBlocked: number | undefined;
  value: string;
}

const PasswordInput: React.FC<IProps> = ({ password, handleChange, handleSubmit, values }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        {password.map((x: IPassword) => (
          <LetterInput
            name={`${x.id}`}
            type='password'
            maxLength={1}
            key={x.id}
            disabled={x.id === x.isBlocked}
            value={values[x.id]}
            onChange={handleChange}
            required={values[x.id] === undefined ? false : true}
          />
        ))}
      </Wrapper>
      <Button type='submit'>submit</Button>
    </Form>
  );
};
const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 30px);
  grid-gap: 10px;
`;
const LetterInput = styled.input`
  width: 20px;
  height: 20px;
  padding: 5px;
  text-align: center;
  border: 1px solid black;
`;
const Button = styled.button`
  width: 50%;
  padding: 5px 15px;
  border-radius: 5px;
  margin: 10px auto;
  color: ${Colors.TEXT};
  background-color: ${Colors.BUTTON};
  transition: 0.2s ease-in;
  &:hover {
    background-color: ${Colors.BUTTON_PROGRESS};
    color: ${Colors.BUTTON};
  }
`;
export default PasswordInput;
