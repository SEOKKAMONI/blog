"use client";

import { OverlayProvider } from "overlay-kit";
import type { PropsWithChildren } from "react";

const Providers = ({ children }: PropsWithChildren) => {
  return <OverlayProvider>{children}</OverlayProvider>;
};

export default Providers;
