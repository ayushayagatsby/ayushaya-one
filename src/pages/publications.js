import React, {useContext, useState, useEffect} from 'react'
import {graphql, Link} from "gatsby"
import {BLOCKS, MARKS} from "@contentful/rich-text-types"
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import LanguageContext from '../context/LanguageContext';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import {renderRichText} from "gatsby-source-contentful/rich-text";
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import {StaticImage} from "gatsby-plugin-image"

const ArticleWrapper = styled("div")`
background-color: white;
width: 30vw;
height: 70vh;
display: flex;
flex-direction: column; 
margin-bottom: 20px;
overflow: hidden;
position: relative;
`

const ArticleWrapperMobile = styled("div")`
background-color: white;
width: 100%;
height: 90vh;
display: flex;
flex-direction: column; 
margin-bottom: 20px;
overflow: hidden;
position: relative;
`

const GradientOverlay = styled("div")`
height: 40%;
width: 100%;
position: absolute;
display: flex;
justify-content: center;
align-items: end;
bottom: 0;
background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
`

const ArticlesGrid = styled("div")`
display: grid;
grid-template-columns: 40% 40%;
justify-content: center;
`
const ArticlesGridMobile = styled("div")`
display: flex;
flex-direction: column;
`

export default function TestBlog({data}) {

    const Bold = ({children}) => <span className="bold">{children}</span>
    const Text = ({children}) => <p css={css `margin-top: -2%;`}>{children}</p>

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
                    <h3 css={css `margin: 5% 0 1% 0;`}>{children}</h3>
                )
            },
            [BLOCKS.HEADING_3]: (node, children) => {
                return (
                    <h3 css={css `margin-bottom: 3%; display: none;`}>{children}</h3>
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

    const {language} = useContext(LanguageContext)

    const englishContent = "englishBody";
    const italianContent = "italianBody";
    const germanContent = "germanBody";

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

    const breakpoints = useBreakpoint();

    const [openArticle,
        setOpenArticle] = useState(false);

    useEffect(() => {

        let layoutWrapper = document.getElementById("layout-wrapper")
        if (openArticle) {
            layoutWrapper.scrollTo({top: 0, behavior: 'smooth'});
        }
    }, [openArticle])

    const articlesMapped = data
        .allContentfulBlogPost
        .edges
        .map((_) => {

            return (
                <ArticleWrapper key={_.node.id} onClick={() => setOpenArticle(true)}>
                    <Link to={`/publications/${_.node.id}`} css={css `text-decoration: none;`}>
                        <div><GatsbyImage image={_.node.headerImage.gatsbyImageData}/>
                        </div>
                        <div css={css `padding: 0 5%;`}>{renderRichText(_.node[currentLanguage], options)}</div>
                        <GradientOverlay>
                            <button css={css `margin-bottom: 5%;`}>READ</button>
                        </GradientOverlay>

                    </Link>
                </ArticleWrapper>
            )

        })

    const articlesMappedMobile = data
        .allContentfulBlogPost
        .edges
        .map((_) => {

            return (
                <ArticleWrapperMobile key={_.node.id} onClick={() => setOpenArticle(true)}>
                    <Link to={`/publications/${_.node.id}`} css={css `text-decoration: none;`}>
                        <div><GatsbyImage image={_.node.headerImage.gatsbyImageData}/>
                        </div>
                        <div css={css `padding: 0 5%;`}>{renderRichText(_.node[currentLanguage], options)}</div>
                        <GradientOverlay>
                            <button css={css `margin-bottom: 5%; width: 60%;`}>READ</button>
                        </GradientOverlay>

                    </Link>
                </ArticleWrapperMobile>
            )

        })

    return (
        <div >
            {!breakpoints.md && <div
                css={css `display: flex; flex-direction: column; align-items: center; margin: 100px 0 80px;`}>
                <StaticImage
                    src="../images/AboutPicture.png"
                    alt="Dr. Juliane Merckens"
                    layout="constrained"
                    width={623}
                    height={670}
                    css={css `width: 30%; margin: 0 auto;`}/>

                <h1 css={css `margin: 50px 0;`}>Publications</h1>

                <p class="p-big">Posts and articles of Dr. Juliane Merckens, ND</p>
            </div>}

            {breakpoints.sm && <div
                css={css `display: flex; flex-direction: column; align-items: center; margin: 30px 0 50px;`}>
                <StaticImage
                    src="../images/AboutPicture.png"
                    alt="Dr. Juliane Merckens"
                    layout="constrained"
                    width={623}
                    height={670}
                    css={css `width: 60%; margin: 0 auto;`}/>

                <h3 css={css `margin: 30px 0;`}>Publications</h3>

                <p css={css `text-align: center;`}>Posts and articles of Dr. Juliane Merckens, ND</p>
            </div>}

            <div>
                {breakpoints.sm && <ArticlesGridMobile>{articlesMappedMobile}</ArticlesGridMobile>}
                {!breakpoints.md && <ArticlesGrid>{articlesMapped}</ArticlesGrid>}</div>
        </div>
    )
}

export const pageQuery = graphql `
query PublicationsQuery {
    allContentfulBlogPost(sort: {order: ASC, fields: createdAt}) {
      edges {
        node {
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
    }
  }
  
  
`