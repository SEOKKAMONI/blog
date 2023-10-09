import React from "react";
import { graphql } from "gatsby";

import styled from "@emotion/styled";
import { getImage } from "gatsby-plugin-image";
import Bio from "../components/Bio";
import MainLayout from "../components/MainLayout";
import PostCard from "../components/PostCard";
import Seo from "../components/Seo";
import { AllMarkdownRemark, SiteMetadata } from "../types/types";

type AllPostPageProps = {
  data: {
    site: { siteMetadata: SiteMetadata };
    allMarkdownRemark: AllMarkdownRemark;
  };
};

const AllPostPage = ({ data }: AllPostPageProps) => {
  const siteTitle = data.site.siteMetadata?.title;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <MainLayout title={siteTitle}>
      <Seo title="Bbang Blog" />
      <Bio />
      <StyledPostList>
        {posts.map((post) => {
          const thumbnail = getImage(post.frontmatter.thumbnail);
          const title = post.frontmatter.title || post.fields.slug;
          const date = post.frontmatter.date;
          const slug = post.fields.slug;

          return (
            <PostCard
              key={slug}
              thumbnail={thumbnail}
              slug={slug}
              title={title}
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
  width: 100%;
  padding: 40px 0;
`;

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
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
          title
          date(formatString: "YYYY-MM-DD")
        }
      }
    }
  }
`;
