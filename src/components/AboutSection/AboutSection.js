import React from 'react'
import styled from "@emotion/styled"
import {StaticImage} from "gatsby-plugin-image"

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

export default function QuoteSection() {
    return (
        <OuterWrapper>
            <MiddleWrapper>
                <TextWrapper>
                    <h4 css={css `margin-bottom: 3%`}>The best approach to health is prevention</h4>
                    <h2 css={css `margin-bottom: 6%`}>Dr. Juliane Merckens, MD</h2>
                    <p class="p-big" css={css `margin-bottom: 5%`}> Optimizing lifestyle in areas such as nutrition, living
                        conditions, daily routine, physical activity, support in specific situations of
                        unease or old age.</p>
                    <button>ABOUT</button>
                </TextWrapper>
                <ImageWrapper>
                    <StaticImage
                        src="../../images/AboutPicture.png"
                        alt="Dr. Juliane Merckens"
                        placeholder="blurred"
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