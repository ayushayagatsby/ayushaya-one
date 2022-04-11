import React from 'react'
import styled from "@emotion/styled"
import {StaticImage} from "gatsby-plugin-image"
import { Link } from "gatsby"


import {css, jsx} from '@emotion/react'

const OuterWrapper = styled("div")`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const MiddleWrapper = styled("div")`
width: 80%;
height: 80%;
background-color: white;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
`

const TextWrapper = styled("div")`
width: 50%;
padding: 5% 0 5% 8%;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: center;
`

const ImageWrapper = styled("div")`
width: 50%;
display: flex;
justify-content: center;
align-items: center;
`

const Button = styled("button")`
height: 6vh;
text-transform: uppercase;
`

export default function AboutSectiom({currentLanguage}) {
    return (
        <OuterWrapper>
            <MiddleWrapper>
                <TextWrapper>
                    <h4 css={css `margin-bottom: 3%;`}>{currentLanguage.aboutPreHeader}</h4>
                    <h2 css={css `margin-bottom: 6%;`}>{currentLanguage.aboutHeader}</h2>
                    <p className="p-big" css={css `margin-bottom: 5%;`}>{currentLanguage.aboutText}</p>
                    <Link to="/about"><Button>{currentLanguage.aboutButton}</Button></Link>
                </TextWrapper>
                <ImageWrapper>
                    <StaticImage
                        src="../../images/AboutPicture.png"
                        alt="Dr. Juliane Merckens"
                        layout="constrained"               
                        width={623}
                        height={670}
                        css={css `width: 60%;`}
                        />
                </ImageWrapper>
            </MiddleWrapper>
        </OuterWrapper>
    )
}
