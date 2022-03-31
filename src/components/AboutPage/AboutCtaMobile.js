import React from 'react'
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import {StaticImage} from "gatsby-plugin-image"

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
height: 40vh;
background-color: #fff;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`

const CardHeading = styled("h4")`
margin-bottom: 5%;
padding: 0 10%;
text-align: center;
`

const CardButton = styled("button")`
background-color: #F5EEE9;
width: 70%;
height: 13%;
`

export default function AboutCta() {
    return (
        <Wrapper>
            <SectionHeading>Holistic healthcare</SectionHeading>
            <InnerWrapper>
                <CardContainer css={css `margin-bottom: 50%;`}>
                    <StaticImage
                        src="../../images/HumanSide.png"
                        alt="A human face"
                        layout="constrained"               
                        width={378}
                        height={511}
                        css={css `width: 50%; margin-top: -50%;`}/>
                    <CardHeading>My offer for yourself</CardHeading>
                    <CardButton>HUMAN BEINGS</CardButton>
                </CardContainer>

                <CardContainer>
                    <StaticImage
                        src="../../images/DogSide.png"
                        alt="A dog face"
                        layout="constrained"               
                        width={489}
                        height={488}
                        css={css `width: 65%; margin-top: -50%;`}/>
                    <CardHeading>My offer for your companion</CardHeading>
                    <CardButton>ANIMALS</CardButton>
                </CardContainer>
            </InnerWrapper>
        </Wrapper>
    )
}
