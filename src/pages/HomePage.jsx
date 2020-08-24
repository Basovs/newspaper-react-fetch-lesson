import React from "react";
import CardList from "../components/CardList";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Page>
      <Wrapper>
        <h1>Homepage</h1>
        <CardList />
      </Wrapper>
    </Page>
  );
};

export default HomePage;

const Page = styled.div`
  padding: 100px 0 0;
`;
const Wrapper = styled.div`
  inline-size: 100%;
  max-inline-size: 1200px;
  margin: 0 auto;
  h1 {
    margin: 20px 0 50px;
    color: #fff;
  }
`;
