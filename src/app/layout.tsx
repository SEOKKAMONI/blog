import type { PropsWithChildren } from "react";
import Providers from "./providers";

import "@/styles/globals.css";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
