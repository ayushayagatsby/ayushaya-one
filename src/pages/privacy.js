import React, {useContext} from 'react';
import {css, jsx} from '@emotion/react';
import {graphql} from 'gatsby';
import MetaPageDesktop from '../components/MetaPageDesktop';
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import MetaPageMobile from '../components/MetaPageMobile';

export default function Privacy({data}) {
    const breakpoints = useBreakpoint();

    return (
        <React.Fragment>
            {breakpoints.sm && <MetaPageMobile data={data}/>}
            {!breakpoints.md  && <MetaPageDesktop data={data}/>}
        </React.Fragment>
    )
}

export const query = graphql `
  query PrivacyQuery {
    contentfulMetaPage(slug: {eq: "data-protection"}) {
      id
      slug
      italianBody {
        raw
      }
      germanBody {
        raw
      }
      englishBody {
        raw
      }
      englishTitle
      germanTitle
      italianTitle
    }
  }
`
