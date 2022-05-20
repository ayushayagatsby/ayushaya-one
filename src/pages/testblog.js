import React from 'react'
import {graphql} from "gatsby"
import BlogPostTemplate from '../components/TestBlogPost'

export default function TestBlog({data}) {

    return (<BlogPostTemplate data={data}/>)
}

export const pageQuery = graphql `
query MyQuery {
    contentfulBlogPost {
      italianTitle
      italianBody {
        raw
        references {
          contentful_id
          gatsbyImageData
          __typename
        }
      }
      germanTitle
      germanBody {
        raw
        references {
          contentful_id
          gatsbyImageData
          __typename
        }
      }
      englishTitle
      englishBody {
        raw
        references {
          contentful_id
          gatsbyImageData
          __typename
        }
      }
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