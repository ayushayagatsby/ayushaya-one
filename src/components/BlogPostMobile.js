import React, { useEffect, useState, useContext } from "react"
import { graphql, Link } from "gatsby"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"
import Seo from "./seo"
import LanguageContext from "../context/LanguageContext"
import IcArrowDown from "../assets/IcArrowDown.svg"
import LanguageSelect from "./LanguageSelect/LanguageSelect"
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share"
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="p-small">{children}</p>

const Wrapper = styled("div")`
  min-height: 100vh;
  width: calc(100% + 10%);
  margin: 0 -5%;
  padding: 0 20px;
  background-color: #faf5f1;
  position: relative;
  z-index: 15;
`

const ProgressBarContainer = styled("div")`
  position: sticky;
  top: 0;
  background-color: #fff;
  height: 9.5vh;
  align-self: flex-start;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 5;
  display: flex;
  align-items: center;
`

const ProgressBar = styled("div")`
  height: 6px;
  width: 0;
  min-width: 10px;
  max-width: 100%;
  background-color: #d4c1ba;
  position: absolute;
  top: 0;
`

const Spacer = styled("div")`
  width: 100%;
  height: 1200px;
`

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (node.content[0].value === "") {
        return <br />
      } else return <Text>{children}</Text>
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return (
        <h3
          css={css`
            margin: 5% 0 0 0;
          `}
        >
          {children}
        </h3>
      )
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return (
        <h4
          css={css`
            margin-bottom: 3%;
          `}
        >
          {children}
        </h4>
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
      const { gatsbyImageData } = node.data.target
      if (!gatsbyImageData) {
        // asset is not an image
        return null
      }
      return (
        <GatsbyImage
          image={getImage(gatsbyImageData)}
          css={css`
            margin: 5% 0;
          `}
        />
      )
    },
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data
      return (
        <a href={uri} className="underline">
          {children}
        </a>
      )
    },
  },
}

export default function BlogPostTemplate({ data, shareUrl }) {
  const { language } = useContext(LanguageContext)

  const englishContent = data.contentfulBlogPost.englishBody
  const italianContent = data.contentfulBlogPost.italianBody
  const germanContent = data.contentfulBlogPost.germanBody
  const englishTitle = data.contentfulBlogPost.englishTitle
  const italianTitle = data.contentfulBlogPost.italianTitle
  const germanTitle = data.contentfulBlogPost.germanTitle

  let handleCurrentLanguage = (language, type) => {
    switch (type) {
      case "body":
        switch (language) {
          case "it":
            return italianContent
          case "en":
            return englishContent

          case "de":
            return germanContent

          default:
            break
        }
        break

      case "title":
        switch (language) {
          case "it":
            return italianTitle
          case "en":
            return englishTitle

          case "de":
            return germanTitle

          default:
            break
        }
        break
    }
  }

  let currentLanguage = handleCurrentLanguage(language, "body")
  let currentLanguageTitle = handleCurrentLanguage(language, "title")

  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const wrapper = document.getElementById("layout-wrapper")
    const blogWrapper = document.getElementById("blogWrapper")
    const progressBar = document.getElementById("progress-bar")

    const handleScroll = () => {
      const footerSpace = blogWrapper.scrollHeight - window.innerHeight / 2

      let barWidth = (wrapper.scrollTop / footerSpace) * 100

      progressBar.style.width = `${barWidth}%`
    }

    wrapper.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const wordToCount = renderRichText(currentLanguage, options)

  const lengthArray = []

  Object.keys(wordToCount).map(_ => {
    if (wordToCount[_]) {
      if (
        wordToCount[_].props.children &&
        typeof wordToCount[_].props.children[0] === "string"
      ) {
        lengthArray.push(wordToCount[_].props.children[0].split(" ").length)
      }
    }
  })

  const wordSum = lengthArray.reduce((p, c) => p + c, 0)

  const date = data.contentfulBlogPost.createdAt

  const formatDate = d => {
    const dateArray = d.slice(0, 10).split("-")
    const sortedAndFormatted = `${dateArray[2]}.${dateArray[1]}.${dateArray[0]}`
    return sortedAndFormatted
  }

  const formattedDate = formatDate(date)

  return (
    <Wrapper id="blogWrapper">
      <Seo
        title={currentLanguageTitle}
        image={data.contentfulBlogPost.headerImage.url}
      />
      <GatsbyImage
        image={data.contentfulBlogPost.headerImage.gatsbyImageData}
        css={css`
          display: flex;
          justify-content: center;
        `}
      />

      <ProgressBarContainer id="blog-bar">
        <ProgressBar id="progress-bar" />

        <div
          css={css`
            display: flex;
            align-items: center;
            & > * {
              margin-right: 20px;
            }
          `}
        >
          <Link to="/publications">
            <div
              css={css`
                display: flex;
                justify-content: center;
                align-items: center;
                width: 10vw;
                height: 10vw;
                background-color: #f9f5f1;
                border-radius: 50%;
                margin-left: 10px;
              `}
            >
              <IcArrowDown
                css={css`
                  width: 22%;
                  height: auto;
                  transform: rotate(90deg);
                `}
              />
            </div>
          </Link>
          <FacebookShareButton url={shareUrl} className="facebook-share">
            <FacebookIcon size={32} round iconFillColor={"#FAF5F1"} />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl} className="facebook-share">
            <TwitterIcon size={32} round iconFillColor={"#FAF5F1"} />
          </TwitterShareButton>
          <WhatsappShareButton url={shareUrl} className="facebook-share">
            <WhatsappIcon size={32} round iconFillColor={"#FAF5F1"} />
          </WhatsappShareButton>
          {/* <h5 css={css `color: #D4C1BA; font-size: 18px;`}>{`${wordSum} WORDS`}</h5> */}
          <LanguageSelect w={"25vw"} minW={"50px"} superSmall={true} />
        </div>
      </ProgressBarContainer>

      {currentLanguage && (
        <div id="mobile-blog-post-body" css={css``}>
          {renderRichText(currentLanguage, options)}
        </div>
      )}
      {data.contentfulBlogPost.mixedReferences && (
        <div
          id="mobile-blog-post-footer"
          css={css`
            width: 100%;
            overflow-wrap: break-word;
            border-top: 2px dashed #d4c1ba;
            margin-top: 40px;
            padding-top: 30px;
          `}
        >
          {renderRichText(data.contentfulBlogPost.mixedReferences, options)}
        </div>
      )}
    </Wrapper>
  )
}
