import React from 'react'
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import BlogPostDesktop from './BlogPostDesktop';
import {graphql, Link} from "gatsby"
import BlogPostMobile from "./BlogPostMobile"


export default function TestBlogPost({data}) {

    const breakpoints = useBreakpoint();

    return (
        <React.Fragment>
            {breakpoints.sm && <BlogPostMobile data={data}/>}
            {(!breakpoints.md && breakpoints.l) && <BlogPostDesktop data={data}/>}
        </React.Fragment>
    )
}

export const pageQuery = graphql `
  query BlogPostBySlug(
    $id: String!
  ) {
    contentfulBlogPost(id: {eq: $id}) {
        createdAt
            id
            englishBody {
              raw
              references {
                contentful_id
                gatsbyImageData
                __typename
              }
            }
            englishTitle
            germanBody {
              raw
              references {
                contentful_id
                gatsbyImageData
                __typename
              }
            }
            germanTitle
            italianBody {
              raw
              references {
                contentful_id
                gatsbyImageData
                __typename
              }
            }
            italianTitle
            mixedReferences {
              raw
            }
            headerImage {
              contentful_id
              gatsbyImageData
              __typename
            }
      }
  }
`

