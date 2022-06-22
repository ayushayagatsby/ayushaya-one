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
import {Link} from "gatsby"

const MainWrapper = styled("div")`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 50px;
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
margin-top: 65%;
text-align: center;
`

const OfferHeader = styled("h4")`
margin-bottom: 10%;
`

const OfferTextbox = styled("div")`
width: 66%;
text-align: center;
margin-bottom: 5%;
`

const OfferContainer = styled("div")`
position: relative;
bottom: 70px;
width: 100%;
`

const OfferRow = styled("div")`
display: flex;
justify-content: center;

& > * {
    width: 40vw;

    & > h5 {
        width: 200%;
        text-align: center;
    }
    
}


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

const CtaHeading = styled("h3")`
font-size: 30px;
margin: 10% 0;
`

const CtaButton = styled("button")`
background-color: #F5EEE9;
height: 8vh;
width: 100%;
text-transform: uppercase;
`

const QuoteOuterWrapper = styled("div")`
display: flex;
flex-direction: column;
width: 100%;
border-radius: 20px;
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

const AboutContainer = styled("div")`
display: flex;
flex-direction: column;
width: 100%;
padding:0 5%;
border-radius: 20px;
justify-content: space-around;
align-items: center;
background-color: white;
text-align: center;
margin-top: 20%;
`

const AboutSpecialHeader = styled('h4')`
margin-bottom: 12%;
`

const AboutSignature = styled("h3")`
margin-bottom: 8%;
`

const AboutButton = styled("button")`
margin: 12% 0;
width: 90%;`

export default function MobileHome({currentLanguage}) {
    return (
        <MainWrapper>
            <HeroOuterWrapper>
                <HeroInnerWrapper>
                    <BrandType css={css ` width: 100%; height: auto; margin-bottom: 5%;`}/>
                    <HeroSubHeader>
                        {currentLanguage.slideOneHeader}
                    </HeroSubHeader>
                    <DoorAndButton>
                        <Door width="85%"/>
                        <DownScrollIcon mt="-9vw" size={"18vw"}/>
                    </DoorAndButton>
                </HeroInnerWrapper>

                <HeroParagraphContainer>
                    <p className="p-small">{currentLanguage.slideOnesubheader}</p>
                </HeroParagraphContainer>
            </HeroOuterWrapper>

            <h3 css={css `text-align: center; width: 90%; margin: 15% auto;`}>{currentLanguage.firstHeaderstatic}</h3>

            <OfferTextbox>
                <OfferHeader>{currentLanguage.slideThreeHeader}</OfferHeader>
                <p className="p-small">{currentLanguage.slideThreeText}</p>
            </OfferTextbox>

            <LogoIllustrationBig css={css `width: 89%; height: auto;`}/>

            <OfferContainer>
                <OfferRow>
                    <SingleOffer text={currentLanguage.routine} scale=".7" spacing="5%"><IcRoutine css={css `width: 130px; height: auto;`}/></SingleOffer>
                    <SingleOffer text={currentLanguage.lifestyle} scale=".7" spacing="5%"><IcLifestyle css={css `width: 130px; height: auto;`}/></SingleOffer>
                </OfferRow>
                <OfferRow>
                    <SingleOffer text={currentLanguage.nutrition} scale=".7" spacing="5%"><IcNutrition css={css `width: 130px; height: auto;`}/></SingleOffer>
                    <SingleOffer text={currentLanguage.unease} scale=".7" spacing="5%"><IcUnease css={css `width: 130px; height: auto;`}/></SingleOffer>
                </OfferRow>
                <SingleOffer text={currentLanguage.activity} scale=".7" spacing="5%"><IcActivity css={css `width: 130px; height: auto;`}/></SingleOffer>

            </OfferContainer>

            <div css={css`display: flex; flex-direction: column; align-items: center;`}>

                <StaticImage
                    src="../images/HumanSide.png"
                    alt="A human face"
                    layout="constrained"
                    width={378}
                    height={511}
                    css={css `width: 52%; margin-top: 15%;`}/>

                <CtaTextbox>
                    <CtaHeading>{currentLanguage.ctaHeaderOne}</CtaHeading>
                    <p className="p-small">{currentLanguage.ctaTextOne}</p>
                </CtaTextbox>

                <Link to="/humans" css={css `width: 100%;`}>
                    <CtaButton>{currentLanguage.ctaButtonOne}</CtaButton>
                </Link>

                <StaticImage
                    src="../images/DogSide.png"
                    alt="A dog face"
                    layout="constrained"
                    width={489}
                    height={488}
                    css={css `width: 66%; margin-top: 50%;`}/>

                <CtaTextbox>
                    <CtaHeading>{currentLanguage.ctaHeaderTwo}</CtaHeading>
                    <p className="p-small">{currentLanguage.ctaTextTwo}</p>
                </CtaTextbox>

                <Link to='/animals' css={css `width: 100%;`}>
                    <CtaButton>{currentLanguage.ctaButtonTwo}</CtaButton>
                </Link>

            </div>

            <QuoteOuterWrapper>
                <QuoteInnerWrapper>
                    <h4>{currentLanguage.quote}</h4>
                    <Signature>
                        Juliane Merckens
                    </Signature>
                </QuoteInnerWrapper>

                <DownScrollIcon size={"18vw"}/>
            </QuoteOuterWrapper>

            <AboutContainer>
                <StaticImage
                    src="../images/AboutPicture.png"
                    alt="Dr. Juliane Merckens"
                    layout="constrained"
                    width={623}
                    height={670}
                    css={css `width: 75%; margin-top: -10%; margin-bottom: 20%;`}/>
                <AboutSpecialHeader>{currentLanguage.aboutPreHeader}</AboutSpecialHeader>
                <AboutSignature>{currentLanguage.aboutHeader}</AboutSignature>
                <p>{currentLanguage.aboutText}</p>
                <Link to="/about" css={css `width: 100%;`}>
                    <AboutButton>{currentLanguage.aboutButton}</AboutButton>
                </Link>
            </AboutContainer>
        </MainWrapper>
    )
}
