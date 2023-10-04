import type { WrapPageElementBrowserArgs } from "gatsby";
import RootLayout from "./src/RootLayout";

export const wrapPageElement = ({ element }: WrapPageElementBrowserArgs) => {
  return <RootLayout>{element}</RootLayout>;
};
