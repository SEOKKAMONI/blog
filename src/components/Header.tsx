"use client";

import { cn } from "@/utils/twMerge";
import { overlay } from "overlay-kit";
import { useEffect, useState } from "react";
import ContactOverlay from "./ContactOverlay";
import Logo from "./Logo";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenContactOverlay = () => {
    overlay.open(({ isOpen, close }) => (
      <ContactOverlay isOpen={isOpen} onClose={close} />
    ));
  };

  return (
    <header
      className={cn(
        "sticky top-0 flex items-center justify-between w-full h-[64px] z-10 px-[60px] bg-white max-1100:px-[32px] max-650:px-[20px]",
        isSticky ? "border-[1px] border-lightGray" : null,
      )}
    >
      <Logo />
      <button
        type="button"
        onClick={handleOpenContactOverlay}
        className="flex justify-center items-center h-[40px] rounded-[20px_20px_20px_0] text-[16px] font-medium px-[16px] color-black bg-lightGray hover:bg-mediumGray"
      >
        Contact
      </button>
    </header>
  );
};

export default Header;
