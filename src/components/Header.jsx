import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <HeaderShell>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Retro Newspapers
      </motion.h1>
    </HeaderShell>
  );
};

export default Header;

const HeaderShell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  inline-size: 100vw;
  block-size: 100px;
  background: linear-gradient(145deg, #72f, #c1b);
  box-shadow: 0px 10px 40px -16px rgba(0, 0, 0, 0.75);

  h1 {
    color: #fff;
  }
`;
