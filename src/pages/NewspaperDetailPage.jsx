import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NewspaperDetailPage = () => {
  return (
    <Page>
      <h1>NewspaperDetailPage</h1>
      <Link to="/">Go back to Home</Link>
    </Page>
  );
};

export default NewspaperDetailPage;

const Page = styled.div`
  padding: 100px 0 0;
`;
