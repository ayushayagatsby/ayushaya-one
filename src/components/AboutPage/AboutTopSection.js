import React from 'react'
import styled from "@emotion/styled"
import bgGradient from "./bgGradient.jpeg"
import {css, jsx} from '@emotion/react'
import AboutSection from '../../content/AboutContent.json'
import LanguageSelect from '../LanguageSelect/LanguageSelect'

const TopSectionWrapper = styled("div")`
width: 100%;
height:100vh;
display: flex;
justify-content: center;
align-items: center;
`

const CircleWrapper = styled("div")`
width: 50%;
display: flex;
justify-content: flex-end;
`

const GradientCircle = styled("div")`
  background-image: url(${bgGradient}); 
  background-size: cover; overflow: hidden; 
  height: 25vw; 
  width: 25vw;
  max-width: 549px; 
  max-height: 549px;
  border-radius: 50%;
`

const InnerTextWrapper = styled("div")`
margin-left: 5%;
width: 50%;
display: flex;
flex-direction: column;
`

export default function AboutTopSection({lan}) {

    const englishContent = AboutSection.content.en;
    const italianContent = AboutSection.content.it;
    const germanContent = AboutSection.content.de;

    let handleCurrentLanguage = (language) => {
        switch (language) {
            case 'it':
                return italianContent
                break;
            case 'en':
                return englishContent
                break;

            case 'de':
                return germanContent
                break;

            default:
                break;
        }
    }

    let currentLanguage = handleCurrentLanguage(lan)

    return (
        <TopSectionWrapper>
            <CircleWrapper><GradientCircle/></CircleWrapper>
            <InnerTextWrapper>
                <h1 css={css `position: relative; right: 60%; margin-bottom: 8%;`}>{currentLanguage.heroHeader}</h1>
                <h3 css={css `margin-bottom: 8%; width: 70%;`}>{currentLanguage.heroSubHeader}</h3>
                <p className="p-big" css={css `width: 70%;`}>{currentLanguage.heroText}</p>
            </InnerTextWrapper>
        </TopSectionWrapper>
    )
}
