import React from 'react'
import styled from "@emotion/styled"
import bgGradient from "./bgGradient.jpeg"
import {css, jsx} from '@emotion/react'

const TopSectionWrapper = styled("div")`
width: 100%;
display: flex;
`

const CircleWrapper = styled("div")`
width: 50%;
display: flex;
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
width: 50%;
display: flex;
flex-direction: column;
`

export default function AboutTopSection() {
    return (
        <TopSectionWrapper>
            <CircleWrapper><GradientCircle/></CircleWrapper>
            <InnerTextWrapper>
                <h1>Dr. Juliane Merckens, MD</h1>
                <h3>Specialist for health and disease prevention</h3>
                <p class="p-big">With the Experience of almost 20 years as a medical doctor, I
                    have an in-depth comprehension of health and disease.</p>
            </InnerTextWrapper>

        </TopSectionWrapper>
    )
}
