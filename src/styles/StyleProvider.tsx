import { ThemeProvider } from "@emotion/react";
import { ReactNode } from "react";
import { GlobalStyle } from "./global";
import { theme } from "./themes";

type StyleProviderProps = {
  children: ReactNode;
};

export const StyleProvider = ({ children }: StyleProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
