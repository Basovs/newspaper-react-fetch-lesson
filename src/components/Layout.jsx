import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <LayoutShell>{children}</LayoutShell>;
};

export default Layout;

const LayoutShell = styled.div``;
