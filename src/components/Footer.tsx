import styled from "@emotion/styled";

const Footer = () => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()}. SEOKKAMONI all rights reserved.
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 72px;
  overflow: hidden;
  font-size: 18px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.gray};
`;
