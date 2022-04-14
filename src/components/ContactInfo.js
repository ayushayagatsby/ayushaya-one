import React from 'react'
import styled from "@emotion/styled"
import {StaticImage} from "gatsby-plugin-image"
import {css, jsx} from '@emotion/react'

const Wrapper = styled("div")`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

& > * {
   margin-bottom: 4%;
}

`

export default function ContactInfo({currentLanguage}) {
    return (
        <Wrapper>
            <StaticImage
                src="../../images/AboutPicture.png"
                alt="Dr. Juliane Merckens"
                layout="constrained"
                width={623}
                height={670}
                css={css `width: 21%;`}/>

            <h1>{currentLanguage.jM}</h1>

            <h3>+39 345 723 30 90</h3>

            <h3>juliane@ayushaya.coach</h3>

            <h2>{currentLanguage.contact}</h2>
        </Wrapper>
    )
}
