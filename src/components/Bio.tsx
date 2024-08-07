import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Author, SiteMetadata } from "../types/types";

type BioQuery = {
  site: {
    siteMetadata: {
      author: Author;
    };
  };
};

const Bio = () => {
  const data = useStaticQuery<BioQuery>(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
            position
          }
        }
      }
    }
  `);

  const { name, summary, position } = data.site.siteMetadata?.author;

  return (
    <StyledBio>
      <StaticImage
        src="https://github.com/SEOKKAMONI.png"
        width={150}
        height={150}
        style={{ borderRadius: "36px 36px 36px 0" }}
        alt="Profile"
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
  gap: 14px;
`;

const StyledNamePositionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const StyledName = styled.span`
  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (max-width: 650px) {
    font-size: 32px;
  }
`;

const StyledPosition = styled.span`
  font-size: 20px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (max-width: 650px) {
    font-size: 16px;
  }
`;

const StyledSummary = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
  font-weight: normal;

  @media screen and (max-width: 650px) {
    font-size: 12px;
    text-align: center;
  }
`;
