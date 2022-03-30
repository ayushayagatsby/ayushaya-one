import React from 'react'
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'


const Wrapper = styled("div")`
  width: 30vw;
  max-width: 500px;
  display: flex;
  flex-direction: column;
`

const Button = styled("button")`
height: 6vh;
`

export default function TextAndButton({heading, text, buttonText, alignSelf}) {
    return (
        <Wrapper css={css`align-self: ${alignSelf};`}>
            <h3 css={css`margin-bottom: 40px;`}>
                {heading}
            </h3>
            <p className="p-small" css={css`margin-bottom: 40px;`}>{text}</p>
            <Button>{buttonText}</Button>
        </Wrapper>
    )
}
