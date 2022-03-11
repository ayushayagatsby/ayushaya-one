import React from 'react'
import styled from "@emotion/styled"
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

export default function QuoteSection() {
    return (
        <OuterWrapper>
            <MiddleWrapper>
                <InnerWrapper>
                    <h3 css={css`padding-bottom: 30px; text-align: center;`}>Much can be done by choosing how to nurture body, mind and soul.</h3>
                    <Signature>DR. Juliane Merckens</Signature>
                </InnerWrapper>
            </MiddleWrapper>
        </OuterWrapper>
    )
}
