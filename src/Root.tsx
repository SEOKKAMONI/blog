import { GlobalStyle, theme } from "./styles";
import { ReactNode } from "react";
import { ThemeProvider } from "@emotion/react";
import { OverlayProvider } from "@toss/use-overlay";

type RootProps = {
  children: ReactNode;
};

const Root = ({ children }: RootProps) => {
  return (
    <ThemeProvider theme={theme}>
      <OverlayProvider>
        <GlobalStyle />
        {children}
      </OverlayProvider>
    </ThemeProvider>
  );
};

export default Root;
