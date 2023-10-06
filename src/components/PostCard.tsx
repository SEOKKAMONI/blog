import styled from "@emotion/styled";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

type PostCardProps = {
  title: string;
  description: string;
  slug: string;
  date: string;
};

const PostCard = ({ title, description, slug, date }: PostCardProps) => {
  return (
    <Link to={slug} style={{ width: "100%" }}>
      <StyledPostCard>
        <StyledInfoWrapper>
          <StyledTitle>{title}</StyledTitle>
          <StyledDate>{date}</StyledDate>
        </StyledInfoWrapper>
        <StaticImage
          src="../assets/profile.png"
          style={{ borderRadius: "36px 36px 36px 0" }}
          width={300}
          height={180}
          alt="Thumbnail Image"
        />
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
`;

const StyledTitle = styled.span`
  color: #222;
  font-size: 24px;
  font-weight: medium;
`;

const StyledDate = styled.span`
  color: #666;
  font-size: 16px;
  font-weight: normal;
`;
