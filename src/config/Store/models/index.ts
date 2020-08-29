import { ReactNode } from "react";
export interface IActions {
  type: string;
  payload: any;
}

export enum actionTypes {
  SET_USER = "SET_USER",
}
export interface IUser {
  email: string;
  password: string;
}
export interface IContextProps {
  user: IUser;
  dispatch: ({ type, payload }: { type: string; payload: Object }) => void;
}
export interface IWrapperProps {
  children: ReactNode;
}
