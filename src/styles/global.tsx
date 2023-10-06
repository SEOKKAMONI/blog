import React from "react";
import { css, Global } from "@emotion/react";
import { ResetCSS } from "./reset";

const globalStyle = css`
  * {
    font-family: Pretendard;
    box-sizing: border-box;
  }

  body {
    font-weight: normal;
  }
`;

export const GlobalStyle = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <Global styles={ResetCSS} />
    </>
  );
};
