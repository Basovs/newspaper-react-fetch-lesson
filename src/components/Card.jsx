import React from "react";
// import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = ({ pdfUrl, title }) => {
  return (
    <CardShell>
      <Link to="/newspaper-detail-page/">
        <h3>Title: {title}</h3>
      </Link>

      <Iframe src={pdfUrl} frameBorder="0" loading="lazy" />
    </CardShell>
  );
};

export default Card;

const CardShell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  block-size: 500px;
  a {
    text-decoration: none;
    color: #fff;
  }
`;
const Iframe = styled.embed`
  inline-size: 100%;
  block-size: 100%;
  cursor: pointer;
  background: #fff;
`;
