import React from 'react'
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import {StaticImage} from "gatsby-plugin-image"
import {Link} from "gatsby"

const Wrapper = styled("div")`
width: 100%;
height: 100vh;
background-color: rgba(212, 193, 186, .1);
display: flex;
flex-direction: column;
justify-content: center;
`

const SectionHeading = styled("h2")`
margin-bottom: 20%;
text-align: center;
`

const InnerWrapper = styled("div")`
display: flex;
justify-content: center;
align-items: center;
`

const CardContainer = styled("div")`
width: 22%;
height: 37vh;
background-color: #fff;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
margin:0 5%;
`

const CardHeading = styled("h4")`
margin-bottom: 5%;
padding: 0 10%;
text-align: center;
`

const CardButton = styled("button")`
background-color: #F5EEE9;
width: 100%;
height: 100%;
text-transform: uppercase;
`

export default function AboutCta({currentLanguage}) {
    return (
        <Wrapper>
            <SectionHeading>{currentLanguage.CtaHeader}</SectionHeading>
            <InnerWrapper>
                <CardContainer>
                    <StaticImage
                        src="../../images/HumanSide.png"
                        alt="A human face"
                        layout="constrained"
                        width={378}
                        height={511}
                        css={css `width: 50%; margin-top: -50%;`}/>
                    <CardHeading>{currentLanguage.CtaHumansText}</CardHeading>
                    <Link to="/humans" css={css `width: 70%; height: 13%;`}>
                        <CardButton>{currentLanguage.CtaHumansButton}</CardButton>
                    </Link>
                </CardContainer>

                <CardContainer>
                    <StaticImage
                        src="../../images/DogSide.png"
                        alt="A dog face"
                        layout="constrained"
                        width={489}
                        height={488}
                        css={css `width: 65%; margin-top: -50%;`}/>
                    <CardHeading>{currentLanguage.CtaAnimalsText}</CardHeading>
                    <Link to="/animals" css={css `width: 70%; height: 13%;`}>
                        <CardButton>{currentLanguage.CtaAnimalsButton}</CardButton>
                    </Link>
                </CardContainer>
            </InnerWrapper>
        </Wrapper>
    )
}
