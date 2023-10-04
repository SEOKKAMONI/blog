import type { WrapPageElementBrowserArgs } from "gatsby";
import RootLayout from "./src/RootLayout";

export const WrapPageElement = ({ element }: WrapPageElementBrowserArgs) => {
  return <RootLayout>{element}</RootLayout>;
};
