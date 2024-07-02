import styled from "@emotion/styled";
import { Link } from "gatsby";
import { Fields, Frontmatter } from "../types/types";

type PostNavigatorProps = {
  prevPost?: {
    fields: { slug: Fields["slug"] };
    frontmatter: { title: Frontmatter["title"] };
  };
  nextPost?: {
    fields: { slug: Fields["slug"] };
    frontmatter: { title: Frontmatter["title"] };
  };
};

const PostNavigator = ({ prevPost, nextPost }: PostNavigatorProps) => {
  const prevPostSlug = prevPost?.fields.slug;
  const prevPostTitle = prevPost?.frontmatter.title;
  const nextPostSlug = nextPost?.fields.slug;
  const nextPostTitle = nextPost?.frontmatter.title;

  const isPrevPost = prevPostSlug && prevPostTitle;
  const isNextPost = nextPostSlug && nextPostTitle;

  return (
    <StyledPostNavigator>
      {isPrevPost && (
        <StyledPrevPostLink to={prevPostSlug}>
          <StyledDirection>Previous Post</StyledDirection>
          <StyledTitle>{prevPostTitle}</StyledTitle>
        </StyledPrevPostLink>
      )}
      {isNextPost && (
        <StyledNextPostLink to={nextPostSlug}>
          <StyledDirection>Next Post</StyledDirection>
          <StyledTitle>{nextPostTitle}</StyledTitle>
        </StyledNextPostLink>
      )}
    </StyledPostNavigator>
  );
};

export default PostNavigator;

const StyledPostNavigator = styled.div`
  position: relative;
  display: flex;
  gap: 12px;
  width: 100%;
  height: 105px;
`;

const StyledPrevPostLink = styled(Link)`
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: calc(50% - 6px);
  height: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.lightGray};

  &:hover {
    background-color: ${({ theme }) => theme.colors.mediumGray};
  }
`;

const StyledNextPostLink = styled(Link)`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: calc(50% - 6px);
  height: 100%;
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

  @media screen and (max-width: 650px) {
    -webkit-line-clamp: 1;
  }
`;
