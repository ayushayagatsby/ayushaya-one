import React from 'react'
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import {StaticImage
placeholder:"blurred"} from "gatsby-plugin-image"
import {Link} from "gatsby"


const Wrapper = styled("div")`
width: 100%;
margin-top: 20%;
display: flex;
flex-direction: column;
justify-content: center;
z-index: 0;
margin-bottom: 15%;
`

const SectionHeading = styled("h3")`
margin-bottom: 50%;
text-align: center;
`

const InnerWrapper = styled("div")`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

const CardContainer = styled("div")`
width: 80%;
height: 37vh;
background-color: #fff;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`

const CardHeading = styled("h3")`
margin-bottom: 5%;
padding: 0 10%;
text-align: center;
font-size: 30px;
`

const CardButton = styled("button")`
background-color: #F5EEE9;
width: 100%;
height: 8vh;;
text-transform: uppercase;
margin-bottom: 10%;
text-transform: uppercase;
`

export default function AboutCta({currentLanguage}) {
    return (
        <Wrapper>
            <SectionHeading>{currentLanguage.CtaHeader}</SectionHeading>
            <InnerWrapper>
                <CardContainer css={css `margin-bottom: 50%;`}>
                    <StaticImage
placeholder:"blurred"
                        src="../../images/HumanSide.png"
                        alt="A human face"
                        layout="constrained"               
                        width={378}
                        height={511}
                        css={css `width: 50%; margin-top: -50%;`}/>
                    <CardHeading>{currentLanguage.CtaHumansText}</CardHeading>
                    <Link to="/humans" css={css`width: 80%;`}>
                        <CardButton>{currentLanguage.CtaHumansButton}</CardButton>
                    </Link>
                </CardContainer>

                <CardContainer>
                    <StaticImage
placeholder:"blurred"
                        src="../../images/DogSide.png"
                        alt="A dog face"
                        layout="constrained"               
                        width={489}
                        height={488}
                        css={css `width: 65%; margin-top: -50%;`}/>
                    <CardHeading>{currentLanguage.CtaAnimalsText}</CardHeading>
                    <Link to="/animals" css={css `width: 80%;`}>
                        <CardButton>{currentLanguage.CtaAnimalsButton}</CardButton>
                    </Link>
                </CardContainer>
            </InnerWrapper>
        </Wrapper>
    )
}
