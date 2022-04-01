import React from 'react'
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import {StaticImage} from "gatsby-plugin-image"

const Wrapper = styled("div")`
width: 100%;
min-height: 100vh;
`
const FirstInnerWrapper = styled("div")`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
margin-top: 15%;
margin-bottom: 5%;
`
const SecodInnerWrapper = styled("div")`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: auto;
`

const FirstTextbox = styled("div")`
text-align: center;
width: 42%;
margin-bottom: 10%;
`
const SecondTextbox = styled("div")`
width: 28%;
margin-left: 12%;
`

export default function EducationSection({currentLanguage}) {
    return (
        <Wrapper>
            <FirstInnerWrapper>
                <FirstTextbox>
                    <h2 css={css `margin-bottom: 5%;`}>{currentLanguage.educationHeader}</h2>
                    <p className="p-big">{currentLanguage.educationTextOne}</p>
                </FirstTextbox>

                <StaticImage
                    src="../../images/CityImageOne.png"
                    alt="The facade of a Church"
                    layout="constrained"               
                    width={950}
                    height={633}
                    css={css `width: 50%; align-self: flex-start; position: relative; left: 12%;`}/>

            </FirstInnerWrapper>

            <SecodInnerWrapper>
                <SecondTextbox>
                    <p className="p-big">{currentLanguage.educationTextTwo}</p>
                </SecondTextbox>

                <StaticImage
                    src="../../images/CityImageTwo.png"
                    alt="Another facade of a Church"
                    layout="constrained"               
                    width={950}
                    height={633}
                    css={css `width: 35%; position: relative; bottom: 25vh; right: 12%;`}/>
            </SecodInnerWrapper>
        </Wrapper>
    )
}
