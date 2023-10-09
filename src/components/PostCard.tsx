import styled from "@emotion/styled";
import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

type PostCardProps = {
  thumbnail?: IGatsbyImageData;
  title: string;
  slug: string;
  date: string;
};

const PostCard = ({ thumbnail, title, slug, date }: PostCardProps) => {
  return (
    <StyledPostCard to={slug}>
      <StyledInfoWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledDate>{date}</StyledDate>
      </StyledInfoWrapper>
      {thumbnail && (
        <StyledThumbnailImage
          image={thumbnail}
          alt={`${slug} Thumbnail Image`}
        />
      )}
    </StyledPostCard>
  );
};

export default PostCard;

const StyledPostCard = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 180px;
  transition: all 0.3s ease-in-out 0s;

  &:hover {
    transform: translateY(-8px);
  }

  @media screen and (max-width: 1100px) {
    height: 144px;
  }

  @media screen and (max-width: 650px) {
    height: 88px;
  }
`;

const StyledThumbnailImage = styled(GatsbyImage)`
  width: 300px;
  height: 100%;
  border-radius: 36px 36px 36px 0;

  @media screen and (max-width: 1100px) {
    width: 240px;
  }

  @media screen and (max-width: 650px) {
    width: 180px;
  }
`;

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const StyledTitle = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 24px;
  font-weight: medium;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (max-width: 650px) {
    -webkit-line-clamp: 1;
  }
`;

const StyledDate = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
  font-weight: normal;
`;
