import styled from "@emotion/styled";
import { Link } from "gatsby";

const Logo = () => {
  return <StyledLogo to="/">seokkamoni.blog</StyledLogo>;
};

export default Logo;

const StyledLogo = styled(Link)`
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;
