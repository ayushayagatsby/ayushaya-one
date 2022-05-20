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

const Bold = ({children}) => <span className="bold">{children}</span>
const Text = ({children}) => <p className="p-big">{children}</p>

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
                <h1 css={css `margin: 5% 0 3% 0;`}>{children}</h1>
            )
        },
        [BLOCKS.HEADING_3]: (node, children) => {
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

export default function BlogPostTemplate({data}) {

    const {language} = useContext(LanguageContext)

    const englishContent = data.contentfulBlogPost.englishBody;
    const italianContent = data.contentfulBlogPost.italianBody;
    const germanContent = data.contentfulBlogPost.germanBody;

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

    const [scrollPosition,
        setScrollPosition] = useState(0);

    useEffect(() => {

        const wrapper = document.getElementById("layout-wrapper");
        const blogWrapper = document.getElementById("blogWrapper");
        const progressBar = document.getElementById("progress-bar");

        const handleScroll = () => {
            const footerSpace = (blogWrapper.scrollHeight - window.innerHeight / 2)

            let barWidth = wrapper.scrollTop / footerSpace * 100;

            progressBar.style.width = `${barWidth}%`;
        }

        wrapper.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    });

    const wordToCount = renderRichText(currentLanguage, options)

    const lengthArray = []

    Object
        .keys(wordToCount)
        .map((_) => {
            if (wordToCount[_]) {
                if (wordToCount[_].props.children) {
                    lengthArray.push(wordToCount[_].props.children[0].split(" ").length)
                }
            }

        })

    const wordSum = lengthArray.reduce((p, c) => p + c, 0)

    const date = data.contentfulBlogPost.createdAt

    const formatDate = (d) => {
        const dateArray = d
            .slice(0, 10)
            .split("-");
        const sortedAndFormatted = `${dateArray[2]}.${dateArray[1]}.${dateArray[0]}`
        return sortedAndFormatted
    }

    const formattedDate = formatDate(date);

    return (

        <Wrapper id="blogWrapper">
            <Seo title="Blog Post"/>
            <GatsbyImage
                image={data.contentfulBlogPost.headerImage.gatsbyImageData}
                css={css `display: flex; justify-content: center;`}/>

            <ProgressBarContainer id="blog-bar">
                <ProgressBar id="progress-bar"/>

                <div css={css `display: flex; align-items: center; &>*{margin-right: 20px;}`}>
                    <Link to="/publications">
                        <div
                            css={css `display: flex; justify-content: center; align-items: center; width: 3vw; height: 3vw; background-color: #F9F5F1; border-radius: 50%; margin-left: 10px;`}>
                            <IcArrowDown css={css ` width: 22%; height:auto; transform: rotate(90deg);`}/>
                        </div>
                    </Link>

                    <h5 css={css `color: #D4C1BA;`}>{formattedDate}</h5>
                    <h5 css={css `color: #D4C1BA;`}>{`${wordSum} WORDS`}</h5>

                </div>
            </ProgressBarContainer>

            {currentLanguage && <div css={css `padding: 0 5%;`}>{renderRichText(currentLanguage, options)}</div>}
            {data.contentfulBlogPost.mixedReferences && <div css={css `padding: 0 5%;`}>{renderRichText(data.contentfulBlogPost.mixedReferences, options)}</div>}
        </Wrapper>
    )
}

