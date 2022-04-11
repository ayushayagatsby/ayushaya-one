import React from 'react'
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import {Link} from "gatsby"

const Wrapper = styled("div")`
  width: 30vw;
  max-width: 500px;
  display: flex;
`

const InnerWrapper = styled("div")`
width: 80%;
display: flex;
flex-direction: column;
justify-content: center;
`

const ParagraphWrapper = styled("div")`
  margin-bottom: 10%;
`

const Button = styled("button")`
height: 6vh;
text-transform: uppercase;
`

export default function TextAndButton({heading, text, buttonText, alignSelf, to, jContent}) {
    return (
        <Wrapper css={css ` justify-content: ${jContent};`}>

            <InnerWrapper>
                <h3 css={css `margin-bottom: 7%;`}>
                    {heading}
                </h3>
                <ParagraphWrapper>
                    <p className="p-small">{text}</p>
                </ParagraphWrapper>
                <Link to={to}>
                    <Button>{buttonText}</Button>
                </Link>

            </InnerWrapper>
        </Wrapper>
    )
}
