import type { PropsWithChildren } from "react";
import Providers from "./providers";

import "@/styles/globals.css";

export const metadata = {
  title: "SEOKKAMONI.blog",
  description: "blog.seokkamoni.me",
  openGraph: {
    title: "SEOKKAMONI.blog",
    description: "blog.seokkamoni.me",
    url: "https://blog.seokkamoni.me",
    siteName: "SEOKKAMONI.blog",
  },
  metadataBase: new URL("https://blog.seokkamoni.me"),
};

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
