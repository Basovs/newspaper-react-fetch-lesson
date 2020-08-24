import React from "react";
import styled from "styled-components";

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <LayoutShell>
      <Header />
      {children}
    </LayoutShell>
  );
};

export default Layout;

const LayoutShell = styled.div``;
