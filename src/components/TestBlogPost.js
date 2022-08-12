import React from 'react'
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import BlogPostDesktop from './BlogPostDesktop';
import {graphql, Link} from "gatsby"
import BlogPostMobile from "./BlogPostMobile"

export default function TestBlogPost({location, data}) {

    const breakpoints = useBreakpoint();

    const canonicalUrl = "https://www.ayushaya.coach/" + location.pathname

    console.log(canonicalUrl)

    return (
        <React.Fragment>
            {breakpoints.md && <BlogPostMobile data={data} shareUrl={canonicalUrl}/>}
            {!breakpoints.md && <BlogPostDesktop data={data} shareUrl={canonicalUrl}/>}
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
