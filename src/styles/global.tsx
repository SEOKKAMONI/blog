import React from "react";
import { css, Global } from "@emotion/react";
import { ResetCSS } from "./reset";

const globalStyle = css`
  * {
    font-family: Pretendard;
    line-height: 120%;
    box-sizing: border-box;
  }

  body {
    font-weight: normal;
  }
`;

export const GlobalStyle = () => {
  return (
    <>
      <Global styles={ResetCSS} />
      <Global styles={globalStyle} />
    </>
  );
};
