import styled from "@emotion/styled";
import {
  GatsbyImage,
  IGatsbyImageData,
  StaticImage,
} from "gatsby-plugin-image";

type PostCardProps = {
  title: string;
  description: string;
  slug: string;
  date: string;
};

const PostCard = ({ title, description, slug, date }: PostCardProps) => {
  return (
    <StyledPostCard>
      <StyledThumbnailImage />
      <PostInfoWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledDate>{date}</StyledDate>
      </PostInfoWrapper>
    </StyledPostCard>
  );
};

export default PostCard;

const StyledPostCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 440px;
  height: 400px;
  cursor: pointer;
  transition: all 0.3s ease-in-out 0s;

  &:hover {
    transform: translateY(-8px);
  }
`;

const StyledThumbnailImage = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.gray200};
`;

const PostInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const StyledTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray900};
`;

const StyledDescription = styled.span`
  font-size: 16px;
  font-weight: medium;
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.gray700};
`;

const StyledDate = styled.span`
  font-size: 12px;
  font-weight: medium;
  color: ${({ theme }) => theme.colors.gray700};
`;
