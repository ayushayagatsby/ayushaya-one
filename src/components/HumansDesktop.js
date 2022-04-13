import React from 'react'
import {StaticImage} from "gatsby-plugin-image"
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import DownScrollIcon from './DownScrollIcon'
import IcCalendar from '../assets/IcCalendar.svg'
import IcConsultations from '../assets/IcConsultations.svg'
import IcConsent from '../assets/IcConsent.svg'

const HeroOuterWrapper = styled("div")`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
`

const HeroInnerWrapper = styled("div")`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`

const HeroTextbox = styled("div")`
width: 56%;
position: relative;
right: 10%;
`

const HeroHeader = styled("h2")`
margin-bottom: 5%;
`

const Spacer = styled("div")`
width: 100%;
height: 10vh;
`

const WhiteWrapper = styled("div")`
background-color: #fff;
display: flex;
flex-direction: column;
align-items: center;
margin:10% 0;
`

const TwoColumnTextbox = styled("div")`
display: flex;
align-items: center;
justify-content: space-around;
width: 80%;
margin-bottom: 10%;
`

const ShiftedHeader = styled("h3")`
width: 34%;
margin-top: -10%;`

const ParagraphWrapper = styled("div")`
width: 44%;
display: flex;
justify-content: center;`

const TextImageWrapper = styled("div")`
display: flex;
justify-content: space-around;
align-items: center;
`

const TextImageTextbox = styled("div")`
width: 43%;
`

const TextImageHeader = styled("h2")`
margin-bottom: 10%;
`

const TextImageParagraphBox = styled("h2")`
padding-right: 5%;
`

const TextImageCtaTextbox = styled("div")`
width: 34%;
`

const TextImageCtaParagraphBox = styled("h2")`
padding-right: 20%;
`

const TextImageCtaButton = styled("button")`
width: 66%;
height: 5vh;
align-self: flex-start;
margin-top: 10%;
`

const OfferColumns = styled("div")`
display: flex;
align-items: center;
justify-content: space-between;
width: 60%;
margin-bottom: 5%;
`

const OfferColumnParagraphContainer = styled("div")`
width: 75%;
`

const PriceBox = styled("div")`
margin-top: 2%;
margin-bottom: 3%;
width: 35%;
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
width: 42%;
text-align: center;
margin-bottom: 5%;
`

const OutlineButton = styled("button")`
background-color: transparent;
border: 1px solid #D1C2BB;
color: #D1C2BB;
width: 23%;
height: 6vh;
margin-bottom: 3%;
`

const ContactButton = styled("button")`
width: 23%;
height: 6vh;
background-color: #F5EEE9;
margin-bottom: 10%;
`

export default function HumansDesktop({currentLanguage}) {
    return (
        <React.Fragment>
            <HeroOuterWrapper>
                <Spacer/>

                <HeroInnerWrapper>
                    <StaticImage
                        src="../images/ShapeHumanGradient.png"
                        alt="A human face"
                        layout="constrained"               
                        width={1110}
                        height={1400}
                        css={css `width: 36%; position: relative; left: 10%;`}/>
                    <HeroTextbox>
                        <HeroHeader>{currentLanguage.heroHeader}</HeroHeader>
                        <p className="p-big">{currentLanguage.heroText}</p>
                    </HeroTextbox>
                </HeroInnerWrapper>

                <DownScrollIcon size="6vw" mt="2%"/>

            </HeroOuterWrapper>

            <WhiteWrapper>
                <h2 css={css `margin:5% 0 10% 0;`}>{currentLanguage.imgHeader}</h2>
                <TwoColumnTextbox>
                    <ShiftedHeader>{currentLanguage.imgSubheader}</ShiftedHeader>
                    <ParagraphWrapper>
                        <p className="p-big">{currentLanguage.imgText}</p>
                    </ParagraphWrapper>
                </TwoColumnTextbox>
                <StaticImage
                    src="../images/JulianeComputer.png"
                    alt="Juliane in front of a computer"
                    layout="constrained"               
                    width={1364}
                    height={909}
                    css={css `width: 88%; margin-bottom: 10%;`}/>
            </WhiteWrapper>

            <TextImageWrapper>
                <TextImageTextbox>
                    <TextImageHeader>{currentLanguage.bottomSubheaderOne}</TextImageHeader>
                    <TextImageParagraphBox>
                        <p className="p-big">{currentLanguage.bottomTextOne}</p>
                    </TextImageParagraphBox>
                </TextImageTextbox>
                <StaticImage
                    src="../images/JulianeFront.png"
                    alt="A photo of Juliane"
                    layout="constrained"               
                    width={674}
                    height={674}
                    css={css `width: 43%; margin-bottom: -30%; z-index: 1;`}/>
            </TextImageWrapper>

            <TextImageWrapper css={css ` margin-top: 20%;`}>
                <StaticImage
                    src="../images/JulianeBack.png"
                    alt="A photo of Juliane"
                    layout="constrained"               
                    width={948}
                    height={948}
                    css={css `width: 61%; z-index: 0;`}/>
                <TextImageCtaTextbox>
                    <TextImageHeader>
                        {currentLanguage.bottomSubheaderTwo}
                    </TextImageHeader>
                    <TextImageCtaParagraphBox>
                        <p className="p-big">{currentLanguage.bottomTextTwo}</p>
                    </TextImageCtaParagraphBox>
                    <TextImageCtaButton>{currentLanguage.bottomCta}</TextImageCtaButton>
                </TextImageCtaTextbox>

            </TextImageWrapper>

            <WhiteWrapper css={css `margin-top: 30%;`}>
                <StaticImage
                    src="../images/HumanSide.png"
                    alt="A humane face sideways"
                    layout="constrained"               
                    width={378}
                    height={511}
                    css={css `width: 24%; margin-top: -20%; margin-bottom: 7%;`}/>

                <h2 css={css `margin-bottom: 5%;`}>{currentLanguage.offerMainHeader}</h2>
                <h3 css={css `margin-bottom: 5%;`}>{currentLanguage.offerSubHeader}</h3>
                <OfferColumns>
                    <IcConsultations css={css `width: 17%; height: auto;`}/>
                    <OfferColumnParagraphContainer>
                        <p className="p-big">{currentLanguage.offerList[0].offerText}</p>
                    </OfferColumnParagraphContainer>
                </OfferColumns>

                <OfferColumns>
                    <IcCalendar css={css `width: 14%; height: auto;`}/>
                    <OfferColumnParagraphContainer>
                        <p className="p-big">{currentLanguage.offerList[1].offerText}</p>
                    </OfferColumnParagraphContainer>
                </OfferColumns>

                <OfferColumns>
                    <IcConsent css={css `width: 16%; height: auto;`}/>
                    <OfferColumnParagraphContainer>
                        <p className="p-big">{currentLanguage.offerList[2].offerText}</p>
                    </OfferColumnParagraphContainer>
                </OfferColumns>

                <PriceBox>
                    <h3>{currentLanguage.offerPrice}</h3>
                </PriceBox>

                <DisclaimerBox>
                    <p className="p-small">{currentLanguage.disclaimerText}</p>
                </DisclaimerBox>

                <OutlineButton>{currentLanguage.csButton}</OutlineButton>

                <ContactButton>{currentLanguage.gicButton}</ContactButton>

            </WhiteWrapper>

        </React.Fragment>
    )
}
