import { ReactNode } from "react";

export interface IUser {
  email: string;
  password: string;
}

export interface IState {
  user: IUser[];
  authUser: boolean;
}

export interface IActions {
  type: string;
  payload: any;
}

export enum actionTypes {
  SET_USER = "SET_USER",
  AUTH_USER = "AUTH_USER",
}

export interface IContext {
  user: IUser[];
  dispatch: ({ type, payload }: { type: string; payload: Object }) => void;
  authUser: boolean;
}
export interface IWrapperProps {
  children: ReactNode;
}
