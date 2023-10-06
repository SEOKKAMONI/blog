import styled from "@emotion/styled";
import { Link } from "gatsby";
import { useEffect, useState } from "react";
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

  return (
    <StyledHeader isSticky={isSticky}>
      <Logo />
      <StyledContactButton>Contact</StyledContactButton>
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
  padding: 0 60px;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid
    ${({ theme, isSticky }) => (isSticky ? theme.colors.gray200 : "none")};
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
  color: #222;
  background-color: "#F6F6F6";
`;
