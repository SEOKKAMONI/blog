import React from "react";
import { graphql } from "gatsby";

import styled from "@emotion/styled";
import { getImage } from "gatsby-plugin-image";
import Bio from "../components/Bio";
import MainLayout from "../components/MainLayout";
import PostCard from "../components/PostCard";
import Seo from "../components/Seo";
import { Fields, Frontmatter, SiteMetadata } from "../types/types";

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
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
          description
          date(formatString: "YYYY-MM-DD")
        }
      }
    }
  }
`;

type PageQuery = {
  site: { siteMetadata: { title: SiteMetadata["title"] } };
  allMarkdownRemark: {
    nodes: {
      fields: Fields;
      frontmatter: Frontmatter;
    }[];
  };
};

type AllPostPageProps = {
  data: PageQuery;
};

const AllPostPage = ({ data }: AllPostPageProps) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <MainLayout title={siteTitle}>
      <Seo title="김석진 블로그" />
      <Bio />
      <StyledPostList>
        {posts.map((post) => {
          const thumbnail = post.frontmatter?.thumbnail
            ? getImage(post.frontmatter.thumbnail)
            : null;
          const title = post.frontmatter.title || post.fields.slug;
          const description = post.frontmatter?.description;
          const date = post.frontmatter.date;
          const slug = post.fields.slug;

          return (
            <PostCard
              key={slug}
              title={title}
              description={description}
              thumbnail={thumbnail}
              slug={slug}
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
