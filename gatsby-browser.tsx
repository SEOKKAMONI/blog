import type { WrapPageElementBrowserArgs } from "gatsby";
import "./src/styles/markdown.css";
import Root from "./src/Root";

export const wrapPageElement = ({ element }: WrapPageElementBrowserArgs) => {
  return <Root>{element}</Root>;
};
