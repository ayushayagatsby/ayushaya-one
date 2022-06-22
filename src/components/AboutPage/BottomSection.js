import React from 'react'
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import LogoIllustrationBig from "../../assets/LogoIllustrationBig.svg"
import {StaticImage} from "gatsby-plugin-image"

const OuterWrapper = styled("div")`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const MainHeader = styled("h2")`
margin-bottom: 5%;
`

const TopTextbox = styled("div")`
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
`

const FirstInnerWrapper = styled("div")`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`

const FirstInnerWrapperTextbox = styled("div")`
width: 28%;
margin-right: 5%;
margin-top: -10%;
`

const SecondInnerWrapper = styled("div")`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
position: relative;
bottom: 50px;
`
const ValueProposition = styled("h2")`
margin: 7% auto;
text-align: center;
width: 56%;
`

const BottomText = styled("div")`
width: 42%;
text-align: center;
margin-bottom: 15%;
`

export default function BottomSection({currentLanguage}) {
    return (
        <OuterWrapper>
            <TopTextbox>
                <MainHeader children={currentLanguage.agHeader}/>
                <p css={css `width: 42%; margin-bottom: 5%;`}>{currentLanguage.agText}</p>
            </TopTextbox>

            <FirstInnerWrapper>
                <FirstInnerWrapperTextbox>
                    <h3 css={css ` margin-bottom: 5%;`}>{currentLanguage.complementarySubHeader}</h3>
                    <p>{currentLanguage.complementaryTextOne}</p>
                </FirstInnerWrapperTextbox>

                <LogoIllustrationBig css={css `width: 45%; height: auto;`}/>
            </FirstInnerWrapper>

            <SecondInnerWrapper>
                <StaticImage
                    src="../../images/JulianeAndDog.png"
                    alt="Juliane with a dog"
                    layout="constrained"               
                    width={950}
                    height={711}
                    css={css `width: 48%; margin-right: 5%;`}/>
                <p css={css `width: 21%; margin-top: 5%;`}>{currentLanguage.complementaryTextTwo}</p>

            </SecondInnerWrapper>

            <ValueProposition>{currentLanguage.valueProp}</ValueProposition>

            <StaticImage
                src="../../images/JulianeAndTwoDogs.png"
                alt="Juliane with two dogs"
                layout="constrained"               
                width={1364}
                height={911}
                css={css `width: 71%; margin-bottom: 5%;`}/>

            <BottomText>
                <p className="p-big">{currentLanguage.bottomText}</p>
            </BottomText>

        </OuterWrapper>
    )
}
