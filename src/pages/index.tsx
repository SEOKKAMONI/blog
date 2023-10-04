import React from "react";
import { Link, graphql } from "gatsby";

import MainLayout from "../components/MainLayout";
import { AllMarkdownRemark, SiteMetadata } from "../types/type";
import styled from "@emotion/styled";
import PostCard from "../components/PostCard";

type PostPageProps = {
  data: {
    site: { siteMetadata: SiteMetadata };
    allMarkdownRemark: AllMarkdownRemark;
  };
  location: Location;
};

const PostPage = ({ data, location }: PostPageProps) => {
  const siteTitle = data.site.siteMetadata?.title;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <MainLayout title={siteTitle}>
      <StyledPostList>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug;
          const description = post.frontmatter.description || post.excerpt;

          return (
            <PostCard
              key={post.fields.slug}
              title={title}
              description={description}
            />
          );
        })}
      </StyledPostList>
    </MainLayout>
  );
};

export default PostPage;

const StyledPostList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// export const Head = () => <Seo title="All posts" />;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
