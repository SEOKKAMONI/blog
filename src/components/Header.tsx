import styled from "@emotion/styled";
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

  const openContactOverlay = () =>{
    overlay.open(({ isOpen, close }) => (
      <ContactOverlay isOpen={isOpen} onClose={close} />
    ));
  }

  return (
    <StyledHeader isSticky={isSticky}>
      <Logo />
      <StyledContactButton onClick={openContactOverlay}>
        Contact
      </StyledContactButton>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header<{ isSticky: boolean }>`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  z-index: 1;
  padding-left: 60px;
  padding-right: 60px;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid
    ${({ theme, isSticky }) => (isSticky ? theme.colors.lightGray : "none")};

  @media screen and (max-width: 1100px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (max-width: 650px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const StyledContactButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 20px 20px 20px 0;
  font-size: 16px;
  font-weight: medium;
  padding: 0 16px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.lightGray};

  &:hover {
    background-color: ${({ theme }) => theme.colors.mediumGray};
  }
`;
