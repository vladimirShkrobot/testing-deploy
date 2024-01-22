import React, { FC } from "react";
import Counter from "../components/Counter/Counter";

interface MainProps {}

const Main: FC<MainProps> = ({}) => {
  return (
    <div data-testid="main-page">
      MAIN
      <Counter />
    </div>
  );
};

export default Main;
