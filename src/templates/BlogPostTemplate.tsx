import React from "react";
import { graphql } from "gatsby";
import {
  Fields,
  Frontmatter,
  MarkdownRemark,
  SiteMetadata,
} from "../types/types";
import styled from "@emotion/styled";
import PostLayout from "../components/PostLayout";

type BlogPostTemplateProps = {
  data: {
    previous: { fields: Fields; frontmatter: Frontmatter };
    next: { fields: Fields; frontmatter: Frontmatter };
    site: { siteMetadata: SiteMetadata };
    markdownRemark: MarkdownRemark;
  };
  location: string;
};

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
}: BlogPostTemplateProps) => {
  const siteTitle = site.siteMetadata?.title;
  const title = post.frontmatter.title;

  return (
    <PostLayout title={siteTitle}>
      <StyledTitle>{title}</StyledTitle>
    </PostLayout>
  );
};

export default BlogPostTemplate;

const StyledTitle = styled.span`
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray900};
`;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
