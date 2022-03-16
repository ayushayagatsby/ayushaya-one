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

export default function EducationSection() {
    return (
        <Wrapper>
            <FirstInnerWrapper>
                <FirstTextbox>
                    <h2 css={css `margin-bottom: 5%;`}>Education</h2>
                    <p class="p-big">For different reasons, at the end of school, I decided to study
                        human medicine. Having part of my family in Switzerland, I ended up going to the
                        university of Lausanne.</p>
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
                    <p class="p-big">In the following years, I knew people from various parts of the
                        world and travelled to different countries. I started to learn italian and also
                        spent a lot of time in Great Britain including several months of internship and
                        a year of research.</p>
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
