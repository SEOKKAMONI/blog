import { graphql } from "gatsby";
import MainLayout from "../components/MainLayout";
import { SiteMetadata } from "../types/types";

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

type PageQuery = { site: { siteMetadata: { title: SiteMetadata["title"] } } };

type NotFoundPageProps = {
  data: PageQuery;
};

const NotFoundPage = ({ data }: NotFoundPageProps) => {
  const siteTitle = data.site.siteMetadata.title;

  return <MainLayout title={siteTitle}>404: Not Found</MainLayout>;
};

export default NotFoundPage;
