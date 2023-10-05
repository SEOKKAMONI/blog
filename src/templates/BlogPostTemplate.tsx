import React from "react";
import { Link, graphql } from "gatsby";
import MainLayout from "../components/MainLayout";
import {
  Fields,
  Frontmatter,
  MarkdownRemark,
  SiteMetadata,
} from "../types/types";

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
  const siteTitle = site.siteMetadata?.title || `Title`;

  return (
    <MainLayout title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </MainLayout>
  );
};

export default BlogPostTemplate;

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
