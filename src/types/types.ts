export type SiteMetadata = {
  title: string;
};

export type Post = {
  excerpt: string;
  fields: Fields;
  frontmatter: Frontmatter;
};

export type AllMarkdownRemark = {
  nodes: Post[];
};

export type Frontmatter = {
  date: string;
  title: string;
  description: string;
};

export type Fields = {
  slug: string;
};
