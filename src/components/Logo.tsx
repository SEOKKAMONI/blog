import styled from "@emotion/styled";
import { Link } from "gatsby";

const Logo = () => {
  return (
    <Link to="/">
      <StyledLogo>Bbang Blog</StyledLogo>
    </Link>
  );
};

export default Logo;

const StyledLogo = styled.span`
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray800};
`;
