import React from 'react'
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import BrandType from '../assets/BrandType.svg'
import Door from './SlideOneScale/Door'
import DownScrollIcon from './DownScrollIcon'
import LogoIllustrationBig from "../assets/LogoIllustrationBig.svg"
import SingleOffer from './OfferComponent/SingleOffer'
import IcRoutine from '../assets/IcRoutine.svg'
import IcLifestyle from '../assets/IcLifestyle.svg'
import IcNutrition from '../assets/IcNutrition.svg'
import IcUnease from '../assets/IcUnease.svg'
import IcActivity from '../assets/IcActivity.svg'
import {StaticImage} from "gatsby-plugin-image"

const MainWrapper = styled("div")`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const HeroOuterWrapper = styled("div")`
width: 100%;
height: 80vh;
padding-top: 20%;
display: flex;
flex-direction: column;
align-items: center;
`

const HeroInnerWrapper = styled("div")`
width: 90%;
display: flex;
flex-direction: column;
align-items: center;
position: relative;
text-align: center;`

const HeroSubHeader = styled("h4")`
`

const DoorAndButton = styled("div")`
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
top: -40%;
z-index: -1;
`

const HeroParagraphContainer = styled("div")`
width: 66%;
margin-top: 55%;
text-align: center;
`

const OfferHeader = styled("h4")`
margin-bottom: 5%;
`

const OfferTextbox = styled("div")`
width: 66%;
text-align: center;
margin-bottom: 5%;
`

const OfferContainer = styled("div")`
position: relative;
bottom: 70px;
`

const OfferRow = styled("div")`
display: flex;
`

const OfferSecondHeader = styled("h4")`
margin: 10% 0;
text-align: center;
width: 100%;
`

const CtaTextbox = styled("h4")`
width: 37%;
text-align: center;
margin-bottom: 10%;
width: 100%;
`

const CtaHeading = styled("h4")`
margin: 10% 0;
`

const CtaButton = styled("button")`
background-color: #F5EEE9;
height: 8vh;
width: 100%;
`

const QuoteOuterWrapper = styled("div")`
display: flex;
flex-direction: column;
width: 100%;
border-radius: 10px;
height: 100vh;
display: flex;
justify-content: space-around;
align-items: center;
background-color: #F5EEE9;
margin-top: 30%;
`

const QuoteInnerWrapper = styled("div")`
display: flex;
flex-direction: column;
width: 90%;
border-radius: 10px;
height: 50%;
display: flex;
justify-content: center;
padding: 0 3% ;
align-items: center;
background-color: white;
text-align: center;
`

const Signature = styled("div")`
font-family: "Open Sans";
font-style: italic;
font-size: 1.875rem;
color: #D4C1BA;
margin-top: 5% ;
`

export default function MobileHome() {
    return (
        <MainWrapper>
            <HeroOuterWrapper>
                <HeroInnerWrapper>
                    <BrandType css={css ` width: 100%; height: auto; margin-bottom: 5%;`}/>
                    <HeroSubHeader>
                        Ayurvedic coaching for humans and animals
                    </HeroSubHeader>
                    <DoorAndButton>
                        <Door width="85%"/>
                        <DownScrollIcon mt="-9vw" size={"18vw"}/>
                    </DoorAndButton>
                </HeroInnerWrapper>

                <HeroParagraphContainer>
                    <p class="p-small">A path to full life by the art of holistic healthcare.</p>
                </HeroParagraphContainer>
            </HeroOuterWrapper>

            <OfferTextbox>
                <OfferHeader>The offer of Ayurveda</OfferHeader>
                <p class="p-small">a holistic approach to health and wellbeing by caring about the way of living.</p>
            </OfferTextbox>

            <LogoIllustrationBig css={css `width: 89%; height: auto;`}/>

            <OfferContainer>
                <OfferRow>
                    <SingleOffer text="routine" scale=".7" spacing="5%"><IcRoutine css={css `width: 130px; height: auto;`}/></SingleOffer>
                    <SingleOffer text="lifestyle" scale=".7" spacing="5%"><IcLifestyle css={css `width: 130px; height: auto;`}/></SingleOffer>
                </OfferRow>
                <OfferRow>
                    <SingleOffer text="nutrition" scale=".7" spacing="5%"><IcNutrition css={css `width: 130px; height: auto;`}/></SingleOffer>
                    <SingleOffer text="unease" scale=".7" spacing="5%"><IcUnease css={css `width: 130px; height: auto;`}/></SingleOffer>
                </OfferRow>
                <SingleOffer text="activity" scale=".7" spacing="5%"><IcActivity css={css `width: 130px; height: auto;`}/></SingleOffer>

            </OfferContainer>

            <OfferSecondHeader>Professional consultations by Dr. Juliane Merckens</OfferSecondHeader>

            <StaticImage
                src="../../images/HumanSide.png"
                alt="A human face"
                layout="constrained"
                width={378}
                height={511}
                css={css `width: 52%; margin-top: 30%;`}/>

            <CtaTextbox>
                <CtaHeading>For yourself</CtaHeading>
                <p class="p-small">Focused on optimizing lifestyle, in areas such as nutrition
                    and optimizing body weight, daily routine and sleep, tobacco and alcohol use,
                    and physical activity.</p>
            </CtaTextbox>

            <CtaButton>HUMAN BEINGS</CtaButton>

            <StaticImage
                src="../../images/DogSide.png"
                alt="A dog face"
                layout="constrained"
                width={489}
                height={488}
                css={css `width: 66%; margin-top: 50%;`}/>

            <CtaTextbox>
                <CtaHeading>For your companion</CtaHeading>
                <p class="p-small">Focused on optimizing lifestyle to support wellbeing and on
                    helping in specific situations of unease and old age.</p>
            </CtaTextbox>

            <CtaButton>ANIMALS</CtaButton>

            <QuoteOuterWrapper>
                <QuoteInnerWrapper>
                    <h4>Much can be done by choosing how to nurture body, mind and soul.</h4>
                    <Signature>
                        Juliane Merckens
                    </Signature>
                </QuoteInnerWrapper>

                <DownScrollIcon size={"18vw"}/>
            </QuoteOuterWrapper>
        </MainWrapper>
    )
}
