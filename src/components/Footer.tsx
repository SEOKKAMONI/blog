import styled from "@emotion/styled";

const Footer = () => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()}. Kimseokjin all rights reserved.
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.gray700};
`;
