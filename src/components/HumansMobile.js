import React from 'react'
import {StaticImage} from "gatsby-plugin-image"
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import DownScrollIcon from './DownScrollIcon'
import IcCalendar from '../assets/IcCalendar.svg'
import IcConsultations from '../assets/IcConsultations.svg'
import IcConsent from '../assets/IcConsent.svg'
import InternalLink from './InternalLink'
import DownloadImage from './DownloadImage'
import { Link } from "gatsby"

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
width: 85%;
height: 10vh;
align-self: center;
margin-top: 10%;

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
margin-bottom: 10%;
`

const PriceBox = styled("div")`
margin-top: 10%;
margin-bottom: 15%;
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
margin-bottom: 10%;
`

const OutlineButton = styled("button")`
background-color: transparent;
border: 1px solid #D1C2BB;
color: #D1C2BB;
width: 85%;
height: 10vh;
margin-bottom: 10%;
`

const ContactButton = styled("button")`
width: 100%;
height: 10vh;
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

export default function HumansMobile({currentLanguage}) {
    return (
        <React.Fragment>
            <HeroOuterWrapper>
                <Spacer/>

                <HeroInnerWrapper>
                    <HeroTextbox>
                        <HeroHeader>{currentLanguage.heroHeader}</HeroHeader>
                        <p classNameName="p">{currentLanguage.heroText}</p>
                    </HeroTextbox>

                    <StaticImage
                        src="../images/ShapeHumanGradient.png"
                        alt="A human face"
                        layout="constrained"
                        width={1110}
                        height={1400}
                        css={css `width: 80%; position: absolute; z-index: -1; transform: translateY(-20%);`}/>
                </HeroInnerWrapper>

                <DownScrollIcon size="15vw" mt="20%"/>

            </HeroOuterWrapper>

            <WhiteWrapper>
                <h3 css={css `margin: 5% 0 5% 0;`}>{currentLanguage.imgHeader}</h3>
                <h4 css={css `margin: 5% 0 7% 0; padding: 0 5%;`}>{currentLanguage.imgSubheader}</h4>
                <ParagraphWrapper>
                    <p className="p">{currentLanguage.imgText}</p>
                </ParagraphWrapper>

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
                        <p className="p">{currentLanguage.bottomTextOne}</p>
                    </TextImageParagraphBox>
                </TextImageTextbox>

                {/* <StaticImage
                    src="../images/JulianeFront.png"
                    alt="A photo of Juliane"
                    layout="constrained"
                    width={674}
                    height={674}
                    css={css `width: 100%;`}/> */}
                <StaticImage
                    src="../images/JulianeBack.png"
                    alt="A photo of Juliane"
                    layout="constrained"
                    width={948}
                    height={948}
                    css={css `width: 100%; margin-top: 10%;`}/>
            </TextImageWrapper>

            <TextImageWrapper css={css `margin-top: 8%;`}>
                <TextImageTextbox>
                    <TextImageHeader>{currentLanguage.bottomSubheaderTwo}</TextImageHeader>
                    <TextImageParagraphBox>
                        <p className="p">{currentLanguage.bottomTextTwo}</p>
                    </TextImageParagraphBox>
                </TextImageTextbox>

                <TextImageCtaButton><Link to="/contact" css={css`text-decoration: none !important;`}>{currentLanguage.bottomCta}</Link></TextImageCtaButton>

            </TextImageWrapper>

            <WhiteWrapper css={css `margin-top: 50%;`}>
                <StaticImage
                    src="../images/HumanSide.png"
                    alt="A humane face sideways"
                    layout="constrained"
                    width={378}
                    height={511}
                    css={css `width: 50%; margin-top: -30%; margin-bottom: 4%;`}/>

                <h3 css={css `margin: 10% 0 5% 0; padding: 0 3%;`}>{currentLanguage.offerMainHeader}</h3>
                <h4 css={css `margin-bottom: 20%;`}>{currentLanguage.offerSubHeader}</h4>
                <OfferColumns>
                    <IcConsultations css={css `margin-bottom: 10%; width: 40%; height: auto;`}/>
                    <OfferColumnParagraphContainer>
                        <p className="p">{currentLanguage.offerList[0].offerText}</p>
                    </OfferColumnParagraphContainer>
                </OfferColumns>

                <OfferColumns>
                    <IcCalendar css={css `margin: 8% 0 10% 0; width: 40%; height: auto;`}/>
                    <OfferColumnParagraphContainer>
                        <p className="p">{currentLanguage.offerList[1].offerText}</p>
                    </OfferColumnParagraphContainer>
                </OfferColumns>

                <OfferColumns>
                    <IcConsent css={css `margin: 8% 0 10% 0; width: 40%; height: auto;`}/>
                    <OfferColumnParagraphContainer>
                        <p className="p">{currentLanguage.offerList[2].offerText}</p>
                    </OfferColumnParagraphContainer>
                </OfferColumns>

                <PriceBox>
                    <h3>Price: 60 €/hour</h3>
                </PriceBox>

                <DisclaimerBox>
                    <p className="p-small">{currentLanguage.disclaimerText}</p>
                    <br/>
                    <p className="p-small">{currentLanguage.legal}</p>
                </DisclaimerBox>

                <OutlineButton>
                    <DownloadImage
                        linkText={currentLanguage.csButton}
                        title={currentLanguage.csButton}
                        image={false}
                        url={currentLanguage.consensoUmani}></DownloadImage>
                </OutlineButton>

                <InternalLink href="/contact" w="85%">

                    <ContactButton>{currentLanguage.gicButton}</ContactButton>
                </InternalLink>

            </WhiteWrapper>

        </React.Fragment>
    )
}
