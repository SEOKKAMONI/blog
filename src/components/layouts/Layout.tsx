import type { PropsWithChildren } from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center max-w-[940px] min-h-screen h-full m-auto py-[64px] max-1100:max-w-full max-1100:px-[32px] max-650:py-[25px] max-650:px-[20px]">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
