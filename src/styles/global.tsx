import React from "react";
import { css, Global } from "@emotion/react";
import { FontCSS } from "./font";
import { ResetCSS } from "./reset";

const globalStyle = css`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Pretendard;
    font-weight: normal;
  }
`;

export const GlobalStyle = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <Global styles={FontCSS} />
      <Global styles={ResetCSS} />
    </>
  );
};
