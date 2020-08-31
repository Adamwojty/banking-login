import React, { createContext, useReducer } from "react";
import { IState, IActions, actionTypes, IContext, IWrapperProps } from "./models";

const store = createContext({} as IContext);

const initialState = {
  user: [
    {
      email: "john@doe.com",
      password: "johndoe123456",
    },
  ],
  authUser: false,
};
const setUser = (payload: Object) => {
  return {
    type: actionTypes.SET_USER,
    payload,
  };
};
const setAuthUser = (payload: Object) => {
  return {
    type: actionTypes.AUTH_USER,
    payload,
  };
};

const reducer = (state: IState, action: IActions) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    case actionTypes.AUTH_USER:
      return {
        ...state,
        authUser: action.payload,
      };
    default:
      throw new Error();
  }
};

const StateProvider: React.FC<IWrapperProps> = ({ children }) => {
  const { Provider } = store;
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
};
export default StateProvider;
export { store, actionTypes, setUser, setAuthUser };
