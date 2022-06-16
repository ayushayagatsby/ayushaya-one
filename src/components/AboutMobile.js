import React from 'react'
import {StaticImage} from "gatsby-plugin-image"
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import DownScrollIcon from './DownScrollIcon'
import bgGradient from "./AboutPage/bgGradient.jpeg"
import CurriculumTimelineMobile from './AboutPage/CurriculumTimelineMobile'
import LogoIllustrationBig from "../assets/LogoIllustrationBig.svg"
import WorkingSectionMobile from './AboutPage/WorkingSectionMobile'
import AboutCtaMobile from './AboutPage/AboutCtaMobile'

const HeroOuterWrapper = styled("div")`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 80vh;
`

const HeroInnerWrapper = styled("div")`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-top: -20%;
`

const HeroTextbox = styled("div")`
width: 90%;
text-align: center;
`

const HeroHeader = styled("h3")`
margin-bottom: 5%;
`

const Spacer = styled("div")`
width: 100%;
height: 20vh;
`

const WhiteWrapper = styled("div")`
background-color: #fff;
display: flex;
flex-direction: column;
align-items: center;
margin: 10% 0;
text-align: center;
`

const ParagraphWrapper = styled("div")`
width: 90%;
margin-bottom: 8%;
display: flex;
justify-content: center;
`

const TextImageWrapper = styled("div")`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
padding-top: 10%;
`

const TextImageTextbox = styled("div")`
width: 90%;
text-align: center;
`

const TextImageHeader = styled("h3")`
margin-bottom: 5%;
`

const TextImageParagraphBox = styled("div")`
padding-right: 5%;
text-align: center;
`

const TextImageCtaTextbox = styled("div")`
width: 34%;
`



const OfferColumns = styled("div")`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 85%;
margin-bottom: 5%;
`
const OfferTitleBox = styled("div")`
width: 80%;
`

const OfferDescriptionBox = styled("div")`
width: 90%;
`

const OfferColumnParagraphContainer = styled("div")`
width: 75%;
`

const PriceBox = styled("div")`
margin-top: 2%;
margin-bottom: 3%;
width: 80%;
background-color: rgba(209, 194, 187, .1);
display: flex;
justify-content: center;
align-items: center;
height: 10vh;
border-radius: 10px;
`

const DisclaimerBox = styled("div")`
color: #6C665A;
opacity: 50%;
width: 90%;
text-align: center;
margin-bottom: 5%;
`

const OutlineButton = styled("button")`
background-color: transparent;
border: 1px solid #D1C2BB;
color: #D1C2BB;
width: 85%;
height: 6vh;
margin-bottom: 3%;
`

const ContactButton = styled("button")`
width: 85%;
height: 6vh;
background-color: #F5EEE9;
margin-bottom: 10%;
`

const CtaParagraph = styled("div")`
width: 80%;
text-align: center;
margin-bottom: 5%;
`

const ObersvationParagraph = styled("div")`
width: 90%;
text-align: center;
margin-bottom: 5%;
`

const GradientCircle = styled("div")`
  background-image: url(${bgGradient}); 
  background-size: cover; overflow: hidden; 
  height: 90vw; 
  width: 90vw;
  max-width: 549px; 
  max-height: 549px;
  border-radius: 50%;
  position: absolute; 
  z-index: -1; 
  transform: translateY(-20%);
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

const ValueProposition = styled("h3")`
margin: 14% auto;
text-align: center;
width: 100%;
`

const BottomText = styled("div")`
width: 100%;
text-align: center;
margin-bottom: 15%;
`

export default function AboutMobile({currentLanguage}) {
    return (
        <React.Fragment>
            <HeroOuterWrapper>
                <Spacer/>

                <HeroInnerWrapper>
                    <HeroTextbox>
                        <HeroHeader>{currentLanguage.heroHeader}</HeroHeader>
                        <h4>{currentLanguage.heroSubHeader}</h4>
                        <p className="p">{currentLanguage.heroText}</p>
                    </HeroTextbox>

                    <GradientCircle/>
                </HeroInnerWrapper>

                <DownScrollIcon size="15vw" mt="5%"/>

            </HeroOuterWrapper>

            <WhiteWrapper>
                <h3 css={css `margin: 5% 0 5% 0;`}>{currentLanguage.imgHeader}</h3>
                <ParagraphWrapper>
                    <p className="p">{currentLanguage.imgText}</p>
                </ParagraphWrapper>

                <StaticImage
                    src="../images/curriculumPicture.png"
                    alt="A dog in the beach"
                    layout="constrained"               
                    width={1640}
                    height={1093}
                    css={css `width: 88%; margin-bottom: 10%;`}/>

                <CurriculumTimelineMobile currentLanguage={currentLanguage}/>
            </WhiteWrapper>

            <WhiteWrapper><WorkingSectionMobile currentLanguage={currentLanguage}/></WhiteWrapper>

            <TextImageWrapper>
                <TextImageTextbox>
                    <TextImageHeader>{currentLanguage.educationHeader}</TextImageHeader>
                    <TextImageParagraphBox>
                        <p className="p">{currentLanguage.educationTextOne}</p>
                    </TextImageParagraphBox>

                </TextImageTextbox>

                <StaticImage
                    src="../images/CityImageOne.png"
                    alt="Another facade of a Church"
                    layout="constrained"               
                    width={950}
                    height={633}
                    css={css `width: 100%; margin: 10% 0;`}/>

                <TextImageParagraphBox>
                    <p className="p">{currentLanguage.educationTextTwo}</p>
                </TextImageParagraphBox>
            </TextImageWrapper>

            <QuoteOuterWrapper>
                <QuoteInnerWrapper>
                    <h4>{currentLanguage.quote}
                    </h4>
                    <Signature>
                    {currentLanguage.quoteSignature}
                    </Signature>
                </QuoteInnerWrapper>
            </QuoteOuterWrapper>

            <TextImageWrapper>
                <TextImageTextbox>
                    <TextImageHeader>{currentLanguage.agHeader}
                    </TextImageHeader>
                    <TextImageParagraphBox>
                        <p className="p">{currentLanguage.agText}
                        </p>
                    </TextImageParagraphBox>

                </TextImageTextbox>

                <LogoIllustrationBig css={css `width: 100%; height:auto; margin: 10% 0;`}/>
                <h4 css={css `text-align: center; margin-bottom: 5%;`}>{currentLanguage.complementarySubHeader}
                </h4>
                <TextImageParagraphBox>
                    <p className="p">{currentLanguage.complementaryTextOne}</p>
                </TextImageParagraphBox>

                <StaticImage
                    src="../images/JulianeAndDog.png"
                    alt="Juliane with a dog"
                    layout="constrained"               
                    width={950}
                    height={711}
                    css={css `width: 100%; margin: 10% 0;`}/>

                <TextImageParagraphBox>
                    <p className="p">{currentLanguage.complementaryTextTwo}</p>
                </TextImageParagraphBox>

                <ValueProposition>{currentLanguage.valueProp}</ValueProposition>

                <StaticImage
                    src="../images/JulianeAndTwoDogs.png"
                    alt="Juliane with two dogs"
                    layout="constrained"               
                    width={1364}
                    height={911}
                    css={css `width: 100%; margin: 10%;`}/>

                <BottomText>
                    <p className="p-small">{currentLanguage.bottomText}</p>
                </BottomText>
            </TextImageWrapper>

           <AboutCtaMobile currentLanguage={currentLanguage} />

        </React.Fragment>
    )
}
