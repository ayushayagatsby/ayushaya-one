import React from 'react'
import styled from "@emotion/styled"
import {StaticImage
placeholder:"blurred"} from "gatsby-plugin-image"
import {css, jsx} from '@emotion/react'
import IcLocation from '../assets/IcLocation.svg'

const Wrapper = styled("div")`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

& > * {
   margin-bottom: 10%;
}
`

const MapWrapper = styled("div")`
position: relative;
display: flex;
justify-content: center;
`

const MapContent = styled("div")`
position: absolute;
text-align: center;
top: 35%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const IconWrapper = styled("div")`
width: 16vw; 
height: 16vw; 
background-color: white; 
display: flex;
justify-content: center;
align-items: center;
border-radius: 8vw; 
box-shadow: 0px 10px 20px #D1C2BB4D;
`

export default function ContactInfo({currentLanguage}) {
    return (
        <Wrapper>
            <StaticImage
placeholder:"blurred"
                src="../images/AboutPicture.png"
                alt="Dr. Juliane Merckens"
                layout="constrained"
                width={623}
                height={670}
                css={css `width: 80%;`}/>

            <h2 css={css`text-align: center;`}>{currentLanguage.jM}</h2>

            <h3>+39 345 723 30 90</h3>

            <h4 css={css`font-family: "Reckless-Medium", "Georgia", Cambria, "Times New Roman", Times, serif;`}>juliane@ayushaya.coach</h4>

            <MapWrapper>
                <StaticImage
placeholder:"blurred"
                    src="../images/MapBg.png"
                    alt="An aerial photograph"
                    layout="constrained"
                    width={909}
                    height={909}
                    css={css `width: 90%;`}/>

                <MapContent>
                    <h3 css={css `margin-bottom: 15%;`}>Castelveccana VA
                        <br/>
                        21010 Italy</h3>
                    <IconWrapper><IcLocation css={css `width: 30%; height: auto;`}/></IconWrapper>

                </MapContent>
            </MapWrapper>

            <h2>{currentLanguage.contact}</h2>
        </Wrapper>
    )
}
