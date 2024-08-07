import React from "react";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type PostLayoutProps = {
  title: string;
  children: ReactNode;
};

const PostLayout = ({ children }: PostLayoutProps) => {
  return (
    <>
      <Header />
      <StyledPostSection>{children}</StyledPostSection>
      <Footer />
    </>
  );
};

export default PostLayout;

const StyledPostSection = styled.main`
  display: flex;
  flex-direction: column;
  gap: 72px;
  max-width: 720px;
  min-height: 100vh;
  height: 100%;
  margin: auto;
  padding-top: 64px;
  padding-bottom: 64px;

  @media screen and (max-width: 1100px) {
    max-width: 100%;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (max-width: 650px) {
    padding: 25px 20px;
  }
`;
