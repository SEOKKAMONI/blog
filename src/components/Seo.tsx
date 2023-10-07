import React, { ReactNode } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

type SeoProps = {
  title: string;
  description?: string;
};

const Seo = ({ title, description }: SeoProps) => {
  const { site } = useStaticQuery(
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

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata.title;
  const name = site.siteMetadata.author.name;

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
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
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: "og:author",
          content: name,
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
