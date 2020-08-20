import React from "react";
import styled from "@emotion/styled";

const PageContainerRoot = styled.div`
  display: flex;
  background-color: #f5f5f5;
  flex: 1;
  flex-direction: column;
  padding: 24px 10%;
`;

const PageContainer = ({ children }) => {
  return <PageContainerRoot>{children}</PageContainerRoot>;
};

export default PageContainer;
