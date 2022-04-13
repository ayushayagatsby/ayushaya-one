import React from 'react'
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import DownScrollIcon from './DownScrollIcon'

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
left: 10%;
z-index: 1;
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
margin-bottom: 5%;
display: flex;
justify-content: center;`

const TextImageWrapper = styled("div")`
display: flex;
justify-content: space-around;
align-items: center;
`

const TextImageTextbox = styled("div")`
width: 35%;
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
width: 66%;
height: 5vh;
align-self: flex-start;
margin-top: 10%;
`

const OfferColumns = styled("div")`
display: flex;
align-items: center;
justify-content: space-between;
width: 85%;
margin-bottom: 5%;
`
const OfferTitleBox = styled("div")`
width: 21%;
`

const OfferDescriptionBox = styled("div")`
width: 39%;
`

const OfferColumnParagraphContainer = styled("div")`
width: 75%;
`

const PriceBox = styled("div")`
margin-top: 2%;
margin-bottom: 3%;
width: 22%;
background-color: rgba(209, 194, 187, .1);
display: flex;
justify-content: center;
align-items: center;
height: 10vh;
border-radius: 10px;
text-align: center;
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
width: 100%;
height: 6vh;
background-color: #F5EEE9;
margin-bottom: 10%;
`

const CtaParagraph = styled("div")`
width: 52%;
text-align: center;
margin-bottom: 5%;
`

const ObersvationParagraph = styled("div")`
width: 52%;
text-align: center;
margin-bottom: 5%;
`

export default function AnimalsDesktop({currentLanguage}) {
    return (
        <React.Fragment>
            <HeroOuterWrapper>
                <Spacer/>

                <HeroInnerWrapper>
                    <HeroTextbox>
                        <HeroHeader>{currentLanguage.heroHeader}</HeroHeader>
                        <p className="p-big">{currentLanguage.heroText}</p>
                    </HeroTextbox>

                    <StaticImage
                        src="../images/ShapeDogGradient.png"
                        alt="A dog face"
                        layout="constrained"
                        width={954}
                        height={1365}
                        css={css `width: 31%; position: relative; right: 10%; z-index: 0;`}/>
                </HeroInnerWrapper>

                <DownScrollIcon size="6vw" mt="2%"/>

            </HeroOuterWrapper>

            <WhiteWrapper>
                <h2 css={css `margin:5% 0 5% 0;`}>{currentLanguage.imgHeader}</h2>
                <ParagraphWrapper>
                    <p className="p-big">{currentLanguage.imgText}</p>
                </ParagraphWrapper>

                <StaticImage
                    src="../images/DogBeach.png"
                    alt="A dog in the beach"
                    layout="constrained"
                    width={1364}
                    height={909}
                    css={css `width: 88%; margin-bottom: 10%;`}/>
            </WhiteWrapper>

            <TextImageWrapper>
                <StaticImage
                    src="../images/DogSitting.png"
                    alt="A dog sitting"
                    layout="constrained"
                    width={812}
                    height={812}
                    css={css `width: 53%; max-width: 812px; z-index: 0;`}/>
                <TextImageTextbox>
                    <TextImageHeader>{currentLanguage.bottomSubheaderOne}</TextImageHeader>
                    <TextImageParagraphBox>
                        <p className="p-big">{currentLanguage.bottomTextOne}</p>
                    </TextImageParagraphBox>
                </TextImageTextbox>
            </TextImageWrapper>

            <TextImageWrapper css={css `margin-top: -10%;`}>
                <TextImageTextbox>
                    <TextImageHeader>{currentLanguage.bottomSubheaderTwo}</TextImageHeader>
                    <TextImageParagraphBox>
                        <p className="p-big">{currentLanguage.bottomTextTwo}</p>
                    </TextImageParagraphBox>
                </TextImageTextbox>
                <StaticImage
                    src="../images/JulianeCat.png"
                    alt="Juliane with a cat"
                    layout="constrained"
                    width={811}
                    height={811}
                    css={css `width: 53%; max-width: 811px; z-index: 1;`}/>
            </TextImageWrapper>

            <WhiteWrapper css={css `margin-top: 30%;`}>
                <StaticImage
                    src="../images/DogSide.png"
                    alt="A humane face sideways"
                    layout="constrained"
                    width={489}
                    height={488}
                    css={css `width: 32%; margin-top: -20%; margin-bottom: 4%;`}/>

                <h2 css={css `margin-bottom: 3%;`}>{currentLanguage.offerMainHeader}</h2>
                <h3 css={css `margin-bottom: 4%; width: 60%; text-align: center;`}>{currentLanguage.offerSubHeader}</h3>
                <CtaParagraph>
                    <p className="p-big">{currentLanguage.offerMainHeaderText}</p>
                </CtaParagraph>

                <h3>{currentLanguage.prices}</h3>

                {currentLanguage
                    .offerList
                    .map(offer => (
                        <OfferColumns>
                            <OfferTitleBox>
                                <h4 css={css `margin-bottom: 2%;`}>{offer.offerHeader}</h4>
                                <p className="p-big">{offer.offerSubheader}</p>
                            </OfferTitleBox>
                            <OfferDescriptionBox>
                                <p className="p-small">{offer.offerText}</p>
                            </OfferDescriptionBox>
                            <PriceBox>
                                <h3>{offer.offerPrice}</h3>
                            </PriceBox>
                        </OfferColumns>
                    ))}

                <DisclaimerBox>
                    <p className="p-small">{currentLanguage.disclaimerText}</p>
                </DisclaimerBox>

                <ObersvationParagraph>
                    <p className="p-big">{currentLanguage.consentText}</p>
                </ObersvationParagraph>

                <OutlineButton>{currentLanguage.goButton}</OutlineButton>

                <OutlineButton>{currentLanguage.csButton}</OutlineButton>

                <Link to="/contact" css={css `width: 23%;`}>
                    <ContactButton>{currentLanguage.gicButton}</ContactButton>
                </Link>

            </WhiteWrapper>

        </React.Fragment>
    )
}
