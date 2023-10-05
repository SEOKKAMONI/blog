import { graphql } from "gatsby";
import MainLayout from "../components/MainLayout";
import { SiteMetadata } from "../types/types";

type NotFoundPageProps = {
  data: {
    site: { siteMetadata: SiteMetadata };
  };
  location: string;
};

const NotFoundPage = ({ data, location }: NotFoundPageProps) => {
  const siteTitle = data.site.siteMetadata.title;

  return <MainLayout title={siteTitle}>404: Not Found</MainLayout>;
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
