import React from "react";
import styled from "styled-components";
import Portfolio from "./Portfolio";
import Promos from "./Promos";

const MainPage = (props) => {
  return (
    <Wrapper>
      <Portfolio {...props} />
      <Promos />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh - 64px);
  overflow: auto;

  & div {
    border-radius: 0.4rem;
  }
`;
export default MainPage;
