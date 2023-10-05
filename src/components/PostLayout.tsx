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
  max-width: 900px;
  margin: auto;
  padding: 60px 0;
`;
