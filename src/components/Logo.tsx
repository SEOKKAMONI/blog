import styled from "@emotion/styled";

const Logo = () => {
  return <StyledLogo>Seokjin.dev</StyledLogo>;
};

export default Logo;

const StyledLogo = styled.span`
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray800};
`;
