const path = require('path')

exports.createSchemaCustomization = ({actions}) => {
    const {createTypes} = actions

    // Explicitly define the siteMetadata {} object This way those will always be
    // defined even if removed from gatsby-config.js Also explicitly define the
    // Markdown frontmatter This way the "MarkdownRemark" queries will return `null`
    // even when no blog posts are stored inside "content/blog" instead of
    // returning an error
    createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}

exports.createPages = ({graphql, actions}) => {
    const path = require(`path`);
    const {createPage} = actions;
    return new Promise((resolve, reject) => {
        const blogTemplate = path.resolve('./src/components/TestBlogPost.js')
        resolve(graphql(`{
          allContentfulBlogPost(sort: {fields: createdAt, order: ASC}) {
            edges {
              node {
                createdAt
                id
              }
            }
          }
        }
        
        `).then((result) => {
            if (result.errors) {
                reject(result.errors)
            }
            result
                .data
                .allContentfulBlogPost
                .edges
                .forEach((edge) => {
                    createPage({
                        path: `publications/${edge.node.id}`,
                        component: blogTemplate,
                        context: {
                            id: edge.node.id
                        }
                    })
                })
            return
        }))
    })
}