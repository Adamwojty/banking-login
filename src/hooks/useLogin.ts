import * as React from "react";
import { store } from "../config/Store";
interface IValues {
  email?: string;
  password?: string;
}

interface IUser {
  email: string;
  password: string;
}
interface IPass {
  id: number;
  value: string | undefined;
  isBlocked: number | undefined;
}

export const useLogin = () => {
  const { user } = React.useContext(store);
  const [disabled, setDisabled] = React.useState<boolean>(true);
  const [activeUser, setActiveUser] = React.useState<IUser[] | null>(null);
  const [password, setPassword] = React.useState<IPass[]>([]);

  const generatePassword = React.useCallback(() => {
    if (activeUser && !password.length) {
      const disabledInputs: number[] = []; // Disabled inputs array

      const passLength = activeUser[0].password.length; // User's password length
      const length = Math.floor(Math.random() * 15) + passLength; // Generate password length
      for (let i: number = 0; i < length; i++) {
        const randomNumber: number = Math.floor(Math.random() * 15); // Generate random number to decide if field is disabled
        if (!disabledInputs.includes(randomNumber) && disabledInputs.length < length / 3 && randomNumber < length) {
          disabledInputs.push(randomNumber);
        }
      }
      const blockedInputs = disabledInputs.sort(function (a, b) {
        return a - b;
      }); // Create Array of blocked inputs
      const splittedPass = activeUser[0].password.split(""); // Split user's password

      Array.apply(null, Array(length)).map(function (_, idx) {
        let value: string | undefined = undefined;
        const isBlocked = blockedInputs.find((x) => x === idx);
        if (isBlocked || isBlocked === 0) {
          value = undefined;
        } else value = splittedPass[idx];

        return setPassword((prevState: IPass[]) => [...prevState, { value, id: idx, isBlocked }]);
      }); // Create Password Array
    }
  }, [activeUser, password]);

  const checkEmail = (values: IValues) => {
    const account = user.filter((x) => x.email === values.email);
    if (account[0]?.email === values.email) {
      setActiveUser(account);
      return setDisabled(false);
    } else return setDisabled(true);
  };
  React.useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return { checkEmail, disabled, password };
};
