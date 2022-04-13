import React from 'react'
import styled from "@emotion/styled"



const QuoteOuterWrapper = styled("div")`
display: flex;
flex-direction: column;
width: 100%;
border-radius: 20px;
height: 100vh;
display: flex;
justify-content: space-around;
align-items: center;
background-color: #F5EEE9;
margin-top: 30%;
`

const QuoteInnerWrapper = styled("div")`
display: flex;
flex-direction: column;
width: 90%;
border-radius: 10px;
height: 50%;
display: flex;
justify-content: center;
padding: 0 3% ;
align-items: center;
background-color: white;
text-align: center;
`

const Signature = styled("div")`
font-family: "Open Sans";
font-style: italic;
font-size: 1.875rem;
color: #D4C1BA;
margin-top: 5% ;
`

export default function QuoteSectionMobile({quote, signature = true}) {
  return (
    <QuoteOuterWrapper>
                <QuoteInnerWrapper>
                    <h3>Much can be done by choosing how to nurture body, mind and soul.</h3>
                    {signature && <Signature>
                        Juliane Merckens
                    </Signature>}
                </QuoteInnerWrapper>
            </QuoteOuterWrapper>
  )
}
