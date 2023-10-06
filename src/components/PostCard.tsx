import styled from "@emotion/styled";
import { Link } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

type PostCardProps = {
  thumbnail?: IGatsbyImageData;
  title: string;
  description: string;
  slug: string;
  date: string;
};

const PostCard = ({
  thumbnail,
  title,
  description,
  slug,
  date,
}: PostCardProps) => {
  return (
    <Link to={slug} style={{ width: "100%" }}>
      <StyledPostCard>
        <StyledInfoWrapper>
          <StyledTitle>{title}</StyledTitle>
          <StyledDate>{date}</StyledDate>
        </StyledInfoWrapper>
        {thumbnail && (
          <GatsbyImage
            image={thumbnail}
            style={{
              width: "300px",
              height: "180px",
              borderRadius: "36px 36px 36px 0",
            }}
            alt={`${slug} Thumbnail Image`}
          />
        )}
      </StyledPostCard>
    </Link>
  );
};

export default PostCard;

const StyledPostCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 180px;
  transition: all 0.3s ease-in-out 0s;

  &:hover {
    transform: translateY(-8px);
  }
`;

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const StyledTitle = styled.p`
  color: #222;
  font-size: 24px;
  font-weight: medium;
  max-width: 80%;
`;

const StyledDate = styled.span`
  color: #666;
  font-size: 16px;
  font-weight: normal;
`;
