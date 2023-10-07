import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
            position
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  const { name, summary, position } = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;

  return (
    <StyledBio>
      <StaticImage
        src="../../assets/profile.png"
        width={150}
        height={150}
        style={{ borderRadius: "36px 36px 36px 0" }}
        alt="Profile Image"
      />
      <StyledInfoWrapper>
        <StyledNamePositionWrapper>
          <StyledName>{name}</StyledName>
          <StyledPosition>{position}</StyledPosition>
        </StyledNamePositionWrapper>
        <StyledSummary>{summary}</StyledSummary>
      </StyledInfoWrapper>
    </StyledBio>
  );
};

export default Bio;

const StyledBio = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 190px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e9e9e9;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    gap: 24px;
    height: 100%;
  }
`;

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;

  @media screen and (max-width: 650px) {
    gap: 24px;
  }
`;

const StyledNamePositionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const StyledName = styled.span`
  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray900};

  @media screen and (max-width: 650px) {
    font-size: 32px;
  }
`;

const StyledPosition = styled.span`
  font-size: 20px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.gray900};

  @media screen and (max-width: 650px) {
    font-size: 16px;
  }
`;

const StyledSummary = styled.p`
  color: #666;
  font-size: 16px;
  font-weight: normal;

  @media screen and (max-width: 650px) {
    font-size: 12px;
  }
`;
