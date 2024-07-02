import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { Author, SiteMetadata } from "../types/types";

type SeoQuery = {
  site: {
    siteMetadata: {
      title: SiteMetadata["title"];
      description: SiteMetadata["description"];
      author: Author;
    };
  };
};

type SeoProps = {
  title: string;
  description?: string;
};

const Seo = ({ title, description }: SeoProps) => {
  const data = useStaticQuery<SeoQuery>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              name
            }
          }
        }
      }
    `
  );

  const defaultTitle = data.site.siteMetadata.title;
  const metaDescription = description || data.site.siteMetadata.description;
  const author = data.site.siteMetadata.author.name;

  return (
    <Helmet
      htmlAttributes={{ lang: "kr" }}
      title={title}
      defaultTitle={defaultTitle}
      meta={[
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:site_title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: "og:author",
          content: author,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ]}
    />
  );
};

export default Seo;
