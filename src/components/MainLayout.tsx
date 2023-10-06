import React from "react";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type MainLayoutProps = {
  title: string;
  children: ReactNode;
};

const MainLayout = ({ title, children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <StyledMainSection>{children}</StyledMainSection>
      <Footer />
    </>
  );
};

export default MainLayout;

const StyledMainSection = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 940px;
  margin: auto;
  padding-top: 76px;
  padding-bottom: 76px;

  @media screen and (max-width: 1100px) {
    max-width: 100%;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (max-width: 650px) {
    max-width: 100%;
    padding: 25px 20px;
  }
`;
