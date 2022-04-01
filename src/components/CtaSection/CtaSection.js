import React from 'react'
import {StaticImage} from "gatsby-plugin-image"
import styled from "@emotion/styled"
import TextAndButton from "./TextAndButton"
import {css, jsx} from '@emotion/react'

const InnerWrapper = styled("div")`
    display: flex;
    justify-content: center;
  `

const OuterWrapper = styled("div")`
width: 100%;
`

const content = {
    humans: {
        heading: "For yourself",
        text: "Focused on optimizing lifestyle, in areas such as nutrition and optimizing body " +
                "weight, daily routine and sleep, tobacco and alcohol use, and physical activity.",
        buttonText: "HUMAN BEINGS"
    },
    animals: {
        heading: "For your companion",
        text: "Focused on optimizing lifestyle to support wellbeing and on helping in specific " +
                "situations of unease and old age.",
        buttonText: "ANIMALS"
    }
}

export default function CtaSection({currentLanguage}) {
    return (
        <OuterWrapper>
            <InnerWrapper css={css `position: relative; right: 12%;`}>
                <TextAndButton
                    heading={currentLanguage.ctaHeaderOne}
                    text={currentLanguage.ctaTextOne}
                    buttonText={currentLanguage.ctaButtonOne}
                    to="/humans"
                    />
                <StaticImage
                    src="../../images/HumanSide.png"
                    alt="A human face"
                    layout="constrained"               
                    width={378}
                    height={511}
                    css={css `width: 25%; position: relative; top: 50px; max-width: 378px; margin-left: 5%; `}/>

            </InnerWrapper>

            <InnerWrapper css={css `position: relative; left: 12%;`}>
                <StaticImage
                    src="../../images/DogSide.png"
                    alt="A dog face"
                    layout="constrained"               
                    width={489}
                    height={488}
                    css={css `width: 32%; position: relative; bottom: 50px; max-width: 489px; margin-right: 5%;`}/>
                <TextAndButton
                    heading={currentLanguage.ctaHeaderTwo}
                    text={currentLanguage.ctaTextTwo}
                    buttonText={currentLanguage.ctaButtonTwo}
                    to="/animals"
                    alignSelf={"flex-end"}
                    />
            </InnerWrapper>
        </OuterWrapper>
    )
}