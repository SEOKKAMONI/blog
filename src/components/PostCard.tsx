import styled from "@emotion/styled";

type PostCardProps = {
  title: string;
  description: string;
};

const PostCard = ({ title, description }: PostCardProps) => {
  return (
    <StyledPostCard>
      <h1>
        <strong>{title}</strong>
      </h1>
      <h3>{description}</h3>
    </StyledPostCard>
  );
};

export default PostCard;

const StyledPostCard = styled.div``;
