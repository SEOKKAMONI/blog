import { PropsWithChildren, ReactNode } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="kr">
      <body>{children}</body>
    </html>
  );
}
