import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import IconClose from "./Icons/Close";

type ContactOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ContactOverlay = ({ isOpen, onClose }: ContactOverlayProps) => {
  const data = useStaticQuery(graphql`
    query ContactOverlayQuery {
      site {
        siteMetadata {
          social {
            phoneNumber
            gmail
            github
            instagram
          }
        }
      }
    }
  `);

  const social = data.site.siteMetadata?.social;

  return (
    <StyledContactOverlay isOpen={isOpen}>
      <CloseButton onClick={onClose} />
      <StyledContactWrapper>
        {social.phoneNumber && (
          <StyledContact>{social.phoneNumber}</StyledContact>
        )}
        {social.gmail && (
          <StyledContact>{social.gmail}@gmail.com</StyledContact>
        )}
        {social.github && (
          <StyledContact>github.com/{social.github}</StyledContact>
        )}
        {social.instagram && (
          <StyledContact>instagram.com/{social.instagram}</StyledContact>
        )}
      </StyledContactWrapper>
    </StyledContactOverlay>
  );
};

export default ContactOverlay;

const StyledContactOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 2;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.8);

  @media screen and (max-width: 1100px) {
    width: 100%;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (max-width: 650px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const StyledContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 700px;
  max-height: 780px;
  padding-top: 120px;

  @media screen and (max-width: 1100px) {
    gap: 24px;
    width: 100%;
  }

  @media screen and (max-width: 650px) {
    gap: 16px;
  }
`;

const StyledContact = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  height: 100px;
  padding: 21px 37px;
  border-radius: 36px 36px 36px 0px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  color: ${({ theme }) => theme.colors.white};
  font-size: 32px;
  font-weight: 600;
  background-color: rgba(255, 255, 255, 0.2);

  @media screen and (max-width: 1100px) {
    height: 80px;
    font-size: 28px;
  }

  @media screen and (max-width: 650px) {
    height: 56px;
    font-size: 16px;
  }
`;

const CloseButton = styled(IconClose)`
  position: absolute;
  top: 20px;
  right: 70px;
  width: 72px;
  height: 72px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.mediumGray};

  @media screen and (max-width: 1100px) {
    right: 32px;
    width: 48px;
    height: 48px;
  }

  @media screen and (max-width: 650px) {
    right: 20px;
  }
`;
