import React from "react";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type PostLayoutProps = {
  title: string;
  children: ReactNode;
};

const PostLayout = ({ title, children }: PostLayoutProps) => {
  return (
    <>
      <Header />
      <StyledMainSection>{children}</StyledMainSection>
      <Footer />
    </>
  );
};

export default PostLayout;

const StyledMainSection = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  margin: auto;
  padding: 60px 0;
`;
