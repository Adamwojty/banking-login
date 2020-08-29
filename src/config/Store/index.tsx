import React, { createContext, useReducer } from "react";
import { IActions, actionTypes, IUser, IContextProps, IWrapperProps } from "./models";
const store = createContext({} as IContextProps);
const initialState = {
  user: null,
};
const setUser = (payload: Object) => {
  return {
    type: actionTypes.SET_USER,
    payload,
  };
};

const reducer = (state: Object, action: IActions) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
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
export { store, actionTypes, setUser };
