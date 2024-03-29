require("dotenv").config({path: `.env.${process.env.NODE_ENV}`})

module.exports = {
    siteMetadata: {
        title: `Ayushaya`,
        author: {
            name: `Juliana Merckes`,
            summary: `Specialist for health and disease prevention`
        },
        description: `Ayurvedic coaching for humans and animals`,
        siteUrl: `https://www.ayushaya.coach/`,
        social: {}
    },
    plugins: [
        {
            resolve: `gatsby-source-formium`,
            options: {
                // Get your projectId from https://dashboard.formium.io
                projectId: "6245f8c70a00c500016f28ec",
                // Generate a personal access token by going to
                // https://dashboard.formium.io/account#tokens and put it into a .env file
                // (learn more about Gatsby environment variables here:
                // https://gatsby.dev/env-vars).
                accessToken: "SXfgU3ZmSUblFkj5CcVJTx49fevm9HReklJ4PPfLF57xCBa26bgHPXfIb1pMGYiE"
            }
        }, {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /assets/ // See below to configure properly
                }
            }
        },
        'gatsby-plugin-breakpoints',
        `gatsby-plugin-emotion`,
        `gatsby-plugin-image`, {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        }, {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 630
                        }
                    }, {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`
                        }
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`
                ]
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`, {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: "w7gregob2bmw",
                accessToken: "2wzxdFuJr0c0vDb1RWkVOQbF2yIHLrqoAGVAmz07WtM"
            }
        }, {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
                feeds: [
                    {
                        serialize: ({
                            query: {
                                site,
                                allMarkdownRemark
                            }
                        }) => {
                            return allMarkdownRemark
                                .nodes
                                .map(node => {
                                    return Object.assign({}, node.frontmatter, {
                                        description: node.excerpt,
                                        date: node.frontmatter.date,
                                        url: site.siteMetadata.siteUrl + node.fields.slug,
                                        guid: site.siteMetadata.siteUrl + node.fields.slug,
                                        custom_elements: [
                                            {
                                                "content:encoded": node.html
                                            }
                                        ]
                                    })
                                })
                        },
                        query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
                        output: "/rss.xml",
                        title: "Gatsby Starter Blog RSS Feed"
                    }
                ]
            }
        }, {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Ayushaya`,
                short_name: `Ayushaya`,
                start_url: `/`,
                background_color: `#ffffff`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/ theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/assets/BrandMark.svg`, // This path is relative to the root of the site.
            }
        },
        `gatsby-plugin-react-helmet`,
        // this (optional) plugin enables Progressive Web App + Offline functionality To
        // learn more, visit: https://gatsby.dev/offline `gatsby-plugin-offline`,

    ]
}