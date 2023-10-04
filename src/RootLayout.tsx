import { StyleProvider } from "./styles";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return <StyleProvider>{children}</StyleProvider>;
};

export default RootLayout;
