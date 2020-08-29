import * as React from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import { IPageProps, IWrapperProps, IContext } from "./MultiStep.types";

const MultiStepContext = React.createContext<IContext>({
  currentPage: 1,
  changePage: () => {},
  pageIndexes: [],
  updatePageIndexes: () => {},
});

const ProgressBar: React.FC<{}> = () => {
  const { currentPage, pageIndexes } = React.useContext(MultiStepContext);

  return (
    <ProgressBarWrapper>
      <ProgressBarInner currentPage={currentPage} pageIndexes={pageIndexes.length} />
    </ProgressBarWrapper>
  );
};

const Page: React.FC<IPageProps> = ({ children, pageIndex = 1 }) => {
  const { currentPage, updatePageIndexes } = React.useContext(MultiStepContext);

  React.useEffect(() => {
    updatePageIndexes(pageIndex);
  });

  return currentPage === pageIndex ? children : null;
};

const Controls: React.FC<{}> = () => {
  const { changePage, currentPage, pageIndexes } = React.useContext(MultiStepContext);
  return (
    <ButtonWrapper>
      <Button type='button' disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)}>
        Previous
      </Button>
      <Button type='button' disabled={currentPage === pageIndexes.length} onClick={() => changePage(currentPage + 1)}>
        Next
      </Button>
    </ButtonWrapper>
  );
};

const Wrapper: React.FC<IWrapperProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [pageIndexes, setPageIndexes] = React.useState<number[]>([]);

  const updatePageIndexes = (pageIndex: number) => {
    if (pageIndexes.includes(pageIndex)) return;

    setPageIndexes([...pageIndexes, pageIndex]);
  };

  const changePage = (newPageIndex: number) => {
    setCurrentPage(newPageIndex);
  };

  return (
    <MultiStepContext.Provider
      value={{
        currentPage,
        changePage,
        pageIndexes,
        updatePageIndexes,
      }}>
      {children}
    </MultiStepContext.Provider>
  );
};
const ProgressBarWrapper = styled.div`
  margin-top: 20px;
  width: 80%;
  height: 10px;
  background-color: ${Colors.BUTTON_PROGRESS};
  border-radius: 10px;
`;
const ProgressBarInner = styled.div<{ currentPage: number; pageIndexes: number }>`
  width: 100%;
  height: 10px;
  background-color: ${Colors.PROGRESSBAR};
  border-radius: 10px;
  transition: transform 0.5s ease-out;
  transform: ${({ currentPage, pageIndexes }) => `scaleX(${currentPage / pageIndexes})`};
  transform-origin: 0% 50%;
`;

const ButtonWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  padding: 5px 15px;
  border-radius: 5px;
  background-color: ${Colors.BUTTON_PROGRESS};
`;

export { ProgressBar, Page, Controls, Wrapper };
