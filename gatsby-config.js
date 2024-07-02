const SITE_METADATA = Object.freeze({
  author: {
    name: "김석진",
    position: "Frontend Developer",
    summary: "세상에 긍정적인 영향을 주고 싶은 개발자 김석진입니다.",
  },
  siteUrl: "https://github.com/SEOKKAMONI/SEOKKAMONI.blog",
  socials: {
    phoneNumber: "010-4826-0279",
    gmail: "sj01048260279@gmail.com",
    github: "github.com/SEOKKAMONI",
    instagram: "instagram.com/sj20060706",
  },
});

module.exports = {
  siteMetadata: SITE_METADATA,
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/assets`,
      },
    },
    {
      resolve: "gatsby-plugin-gtag",
      options: {
        trackingId: "G-ZCQ9YSRPSY",
        head: true,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Pretendard"],
          urls: [
            "https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css",
          ],
        },
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 630,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-plugin-emotion",
          "gatsby-plugin-image",
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  title: node.frontmatter.title,
                  description: node.frontmatter.description,
                  date: new Date(node.frontmatter.date),
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                });
              });
            },
            query: `{
              allMarkdownRemark(sort: { frontmatter: { date: DESC }}) {
                nodes {
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    description
                    date
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "SEOKKAMONI Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "SEOKKAMONI BLOG",
        short_name: "BLOG",
        start_url: "/",
        background_color: "#FFFFFF",
        icon: `${__dirname}/assets/icon.png`,
      },
    },
  ],
};
