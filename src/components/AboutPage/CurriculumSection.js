import React from 'react'
import styled from "@emotion/styled"
import curriculumPicture from "./curriculumPicture.png"
import {css, jsx} from '@emotion/react'
import CurriculumTimeline from './CurriculumTimeline'

const Wrapper = styled("div")`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
border-radius: 10px;
`

const ImageContainer = styled("div")`
  background-image: url(${curriculumPicture}); 
  background-size: cover; overflow: hidden; 
  width: 90%;
  height: 80vh;
  margin-top: 50px;
  margin-bottom: 10%;
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
  border-radius: 10px;
  display:flex;
  justify-content: flex-start;
  align-items: center;
`

const ImageContainerText = styled("div")`
width: 45%;
padding-left: 10%;
display: flex;
flex-direction: column;
color: white;
`



export default function CurriculumSection({currentLanguage}) {
    return (
        <Wrapper>
            <ImageContainer>
                <ImageContainerText>
                    <h1 css={css `margin-bottom: 6%;`}>{currentLanguage.imgHeader}</h1>
                    <h4 css={css `color: white;`}>{currentLanguage.imgText}</h4>
                </ImageContainerText>
            </ImageContainer>

            <CurriculumTimeline currentLanguage={currentLanguage}/>
        </Wrapper>
    )
}
