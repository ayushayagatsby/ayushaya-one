import React from 'react'
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import SecondPlantShadow from './SecondPlantShadow.svg'

const OuterWrapper = styled("div")`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`

const MiddleWrapper = styled("div")`
width: 100%;
height: 80%;
background-color: #F5EEE9;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
`

const InnerWrapper = styled("div")`
width: 50%;
max-width: 812px;
height: 50%;
max-height: 481px;
background-color: white;
padding: 5% 5%;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Signature = styled("div")`
font-family: "Open Sans";
font-style: italic;
font-size: 1.875rem;
color: #D4C1BA;
`

const PlantShadow = styled("div")`
position: absolute;
top: -40%;
left: 0;
right: -40%;
bottom: 0;
background-image: url(${SecondPlantShadow});
background-size: contain;
background-repeat: no-repeat;
pointer-events: none;
opacity: .03;
transform: rotate(30deg);
filter: blur(12px);

`

export default function QuoteSection({
    small,
    quote,
    signature = true,
    shadow = false
}) {
    return (
        <OuterWrapper>
            <MiddleWrapper>
                <InnerWrapper>
                    {small
                        ? <h3
                                css={css `padding-bottom: ${signature
                                ? "30px"
                                : "0"}; text-align: center;`}>{quote}</h3>
                        : <h2
                            css={css `padding-bottom: ${signature
                            ? "30px"
                            : "0"}; text-align: center;`}>{quote}</h2>}
                    {signature
                        ? <Signature>DR. Juliane Merckens</Signature>
                        : ""}
                </InnerWrapper>
            </MiddleWrapper>
            {shadow && <PlantShadow/>}
        </OuterWrapper>
    )
}
