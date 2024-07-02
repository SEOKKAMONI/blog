import { IGatsbyImageData } from "gatsby-plugin-image";

export type Socials = {
  phoneNumber: string;
  gmail: string;
  github: string;
  instagram: string;
};

export type Author = { name: string; summary: string; position: string };

export type SiteMetadata = {
  title: string;
  description: string;
  author: Author;
};

export type AllMarkdownRemark = {
  nodes: { fields: Fields; frontmatter: Frontmatter }[];
};

export type MarkdownRemark = {
  html: string;
  frontmatter: Frontmatter;
};

export type Frontmatter = {
  thumbnail: IGatsbyImageData;
  date: string;
  title: string;
  description: string;
};

export type Fields = {
  slug: string;
};
