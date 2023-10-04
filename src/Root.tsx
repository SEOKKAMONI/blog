import { GlobalStyle, theme } from "./styles";
import { ReactNode } from "react";
import { ThemeProvider } from "@emotion/react";

type RootProps = {
  children: ReactNode;
};

const Root = ({ children }: RootProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Root;
