import styled from "@emotion/styled";
import { Link } from "gatsby";
import { Fields, Frontmatter } from "../types/types";

type PostNavigatorProps = {
  prevPost: { fields: Fields; frontmatter: Frontmatter };
  nextPost: { fields: Fields; frontmatter: Frontmatter };
};

const PostNavigator = ({ prevPost, nextPost }: PostNavigatorProps) => {
  const prevPostSlug = prevPost?.fields.slug;
  const prevPostTitle = prevPost?.frontmatter.title;

  const nextPostSlug = nextPost?.fields.slug;
  const nextPostTitle = nextPost?.frontmatter.title;

  return (
    <StyledPostNavigator>
      {prevPost && (
        <StyledPostCard to={prevPostSlug}>
          <StyledDirection>Previous Post</StyledDirection>
          <StyledTitle>{prevPostTitle}</StyledTitle>
        </StyledPostCard>
      )}
      {nextPost && (
        <StyledPostCard to={nextPostSlug}>
          <StyledDirection>Next Post</StyledDirection>
          <StyledTitle>{nextPostTitle}</StyledTitle>
        </StyledPostCard>
      )}
    </StyledPostNavigator>
  );
};

export default PostNavigator;

const StyledPostNavigator = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 49.3% 49.3%;
  column-gap: 1.4%;
`;

const StyledPostCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  height: 105px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.lightGray};

  &:hover {
    background-color: ${({ theme }) => theme.colors.mediumGray};
  }
`;

const StyledDirection = styled.span`
  font-size: 16px;
  font-weight: medium;
  color: ${({ theme }) => theme.colors.gray};
`;

const StyledTitle = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 18px;
  font-weight: medium;
  color: ${({ theme }) => theme.colors.black};
`;
