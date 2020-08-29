import { ReactNode } from "react";

export interface IPageProps {
  children: any;
  pageIndex: number;
}
export interface IWrapperProps {
  children: ReactNode;
}
export interface IContext {
  currentPage: number;
  changePage: (x: number) => void;
  pageIndexes: number[];
  updatePageIndexes: (x: number) => void;
}
