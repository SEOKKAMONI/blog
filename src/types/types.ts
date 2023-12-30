import { IGatsbyImageData } from "gatsby-plugin-image";

export type SiteMetadata = {
  title: string;
};

export type AllMarkdownRemark = {
  nodes: { excerpt: string; fields: Fields; frontmatter: Frontmatter }[];
};

export type MarkdownRemark = {
  excerpt: string;
  html: string;
  frontmatter: Frontmatter;
};

export type Frontmatter = {
  thumbnail?: IGatsbyImageData;
  date: string;
  title: string;
  description?: string;
};

export type Fields = {
  slug: string;
};
