import React from "react";
import { Link, graphql } from "gatsby";

import MainLayout from "../components/MainLayout";
import { AllMarkdownRemark, SiteMetadata } from "../types/types";
import styled from "@emotion/styled";
import PostCard from "../components/PostCard";

type AllPostPageProps = {
  data: {
    site: { siteMetadata: SiteMetadata };
    allMarkdownRemark: AllMarkdownRemark;
  };
  location: Location;
};

const AllPostPage = ({ data }: AllPostPageProps) => {
  const siteTitle = data.site.siteMetadata?.title;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <MainLayout title={siteTitle}>
      <StyledPostList>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug;
          const description = post.frontmatter.description || post.excerpt;
          const date = post.frontmatter.date;
          const slug = post.fields.slug;

          return (
            <PostCard
              key={slug}
              slug={slug}
              title={title}
              description={description}
              date={date}
            />
          );
        })}
      </StyledPostList>
    </MainLayout>
  );
};

export default AllPostPage;

const StyledPostList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding: 60px 0;
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
