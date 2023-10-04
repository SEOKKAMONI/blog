import styled from "@emotion/styled";
import { Link } from "gatsby";
import { useEffect, useState } from "react";

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
      <h1>Seokjin.dev</h1>
      <StyledMenuWrapper>
        <StyledMenuLink to="/">Portfolio</StyledMenuLink>
        <StyledMenuLink to="/">안녕</StyledMenuLink>
        <StyledMenuLink to="/">안녕</StyledMenuLink>
        <StyledMenuLink to="/">안녕</StyledMenuLink>
      </StyledMenuWrapper>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header<{ isSticky: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 54px;
  padding: 0 64px;
  border-bottom: 1px solid
    ${({ theme, isSticky }) => (isSticky ? theme.colors.gray200 : "none")};
`;

const StyledMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const StyledMenuLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;
