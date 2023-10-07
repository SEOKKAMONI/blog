import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import IconClose from "./icons/IconClose";

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
      <IconClose
        onClick={onClose}
        style={{ position: "absolute", top: "10px", right: "70px" }}
        cursor="pointer"
        width={72}
        height={72}
        color="#D9D9D9"
      />
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
`;

const StyledContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 700px;
  max-height: 780px;
  padding-top: 120px;
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
  color: #fff;
  font-size: 32px;
  font-weight: 600;
  background-color: rgba(255, 255, 255, 0.2);
`;
