import React, {useEffect, useState, useContext} from 'react'
import {graphql, Link} from "gatsby"
import {BLOCKS, MARKS} from "@contentful/rich-text-types"
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import {renderRichText} from "gatsby-source-contentful/rich-text"
import {css, jsx} from '@emotion/react'
import styled from "@emotion/styled"
import Seo from './seo'
import LanguageContext from '../context/LanguageContext';
import IcArrowDown from '../assets/IcArrowDown.svg'
import LanguageSelect from './LanguageSelect/LanguageSelect'

const Bold = ({children}) => <span className="bold">{children}</span>
const Text = ({children}) => <p className="p-small">{children}</p>

const Wrapper = styled("div")`
min-height: 100vh;
width: 80%;
margin: 0 auto;
`

const ProgressBarContainer = styled("div")`
position: sticky;
top: 0;
background-color: #fff;
height: 9.5vh;
align-self: flex-start;
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
z-index: 3;
display: flex;
align-items: center;
`

const ProgressBar = styled("div")`
height: 6px;
width: 0;
min-width: 10px;
max-width: 100%;
background-color: #D4C1BA;
position: absolute;
top: 0;
`

const Spacer = styled("div")`
width: 100%;
height: 1200px;`

const options = {
    renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => {
            if (node.content[0].value === "") {
                return (<br/>)
            } else 
                return (
                    <Text>{children}</Text>
                )
        },
        [BLOCKS.HEADING_1]: (node, children) => {
            return (
                <h2 css={css `margin: 5% 0 3% 0;`}>{children}</h2>
            )
        },
        [BLOCKS.HEADING_2]: (node, children) => {
            return (
                <h3 css={css `margin-bottom: 3%;`}>{children}</h3>
            )
        },

        [BLOCKS.EMBEDDED_ASSET]: node => {
            return (
                <React.Fragment>
                    <h2>Embedded Asset</h2>
                    <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
                </React.Fragment>
            )
        },
        [BLOCKS.EMBEDDED_ASSET]: node => {
            const {gatsbyImageData} = node.data.target
            if (!gatsbyImageData) {
                // asset is not an image
                return null
            }
            return <GatsbyImage image={getImage(gatsbyImageData)} css={css `margin: 5% 0;`}/>
        }
    }
}

export default function MetaPageMobile({data}) {

    const {language} = useContext(LanguageContext)

    const englishContent = data.contentfulMetaPage.englishBody;
    const italianContent = data.contentfulMetaPage.italianBody;
    const germanContent = data.contentfulMetaPage.germanBody;

    let handleCurrentLanguage = (language) => {
        switch (language) {
            case 'it':
                return italianContent
            case 'en':
                return englishContent

            case 'de':
                return germanContent

            default:
                break;
        }
    }

    let currentLanguage = handleCurrentLanguage(language);

    let title = data.contentfulMetaPage.englishTitle;

    return (

        <Wrapper>
            <Seo title={title}/> 
            {currentLanguage && <div css={css `padding: 10% 5%;`}>{renderRichText(currentLanguage, options)}</div>}
        </Wrapper>
    )
}
