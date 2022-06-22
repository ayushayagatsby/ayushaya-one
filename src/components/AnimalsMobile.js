import React from 'react'
import {StaticImage
placeholder:"blurred"} from "gatsby-plugin-image"
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import DownScrollIcon from './DownScrollIcon'
import InternalLink from './InternalLink'
import DownloadImage from './DownloadImage'

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
margin-bottom: 5%;
`

const OfferDescriptionBox = styled("div")`
width: 90%;
`

const OfferColumnParagraphContainer = styled("div")`
width: 75%;
`

const PriceBox = styled("div")`
margin-top: 5%;
margin-bottom: 8%;
width: 80%;
background-color: rgba(209, 194, 187, .1);
display: flex;
justify-content: center;
align-items: center;
height: 12vh;
border-radius: 10px;
padding: 50px;
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
margin-bottom: 5%;
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
margin-bottom: 10%;
`

export default function AnimalsMobile({currentLanguage}) {
    return (
        <React.Fragment>
            <HeroOuterWrapper>
                <Spacer/>

                <HeroInnerWrapper>
                    <HeroTextbox>
                        <HeroHeader>{currentLanguage.heroHeader}</HeroHeader>
                        <p className="p">{currentLanguage.heroText}</p>
                    </HeroTextbox>

                    <StaticImage
placeholder:"blurred"
                        src="../images/ShapeDogGradient.png"
                        alt="A dog face"
                        layout="constrained"
                        width={954}
                        height={1365}
                        css={css `width: 80%; position: absolute; z-index: -1; transform: translateY(-20%);`}/>
                </HeroInnerWrapper>

                <DownScrollIcon size="15vw" mt="10%"/>

            </HeroOuterWrapper>

            <WhiteWrapper>
                <h3 css={css `margin: 5% 0 5% 0; width: 90%;`}>{currentLanguage.imgHeader}</h3>
                <ParagraphWrapper>
                    <p className="p">{currentLanguage.imgText}</p>
                </ParagraphWrapper>

                <StaticImage
placeholder:"blurred"
                    src="../images/DogBeach.png"
                    alt="A dog in the beach"
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

                <StaticImage
placeholder:"blurred"
                    src="../images/JulianeCat.png"
                    alt="Juliane with a cat"
                    layout="constrained"
                    width={811}
                    height={811}
                    css={css `width: 100%; margin: 10% 0;`}/>
            </TextImageWrapper>

            <TextImageWrapper css={css ``}>
                <TextImageTextbox>
                    <TextImageHeader>{currentLanguage.bottomSubheaderTwo}</TextImageHeader>
                    <TextImageParagraphBox>
                        <p className="p">{currentLanguage.bottomTextTwo}</p>
                    </TextImageParagraphBox>
                </TextImageTextbox>

            </TextImageWrapper>

            <WhiteWrapper css={css `margin-top: 50%;`}>
                <StaticImage
placeholder:"blurred"
                    src="../images/DogSide.png"
                    alt="A humane face sideways"
                    layout="constrained"
                    width={489}
                    height={488}
                    css={css `width: 50%; margin-top: -30%; margin-bottom: 4%;`}/>

                <h3 css={css `margin: 10% 0 5% 0; padding: 0 3%;`}>{currentLanguage.offerMainHeader}</h3>
                <h4 css={css `margin-bottom: 10%; width: 90%;`}>{currentLanguage.offerSubHeader}</h4>
                <CtaParagraph>
                    <p className="p">{currentLanguage.offerMainHeaderText}</p>
                </CtaParagraph>

                <h3 css={css `margin: 10% 0 5% 0;`}>{currentLanguage.prices}</h3>

                {currentLanguage
                    .offerList
                    .map(offer => (
                        <OfferColumns>
                            <OfferTitleBox>
                                <h4 css={css `margin-bottom: 2%;`}>{offer.offerHeader}</h4>
                                <p className="p">{offer.offerSubheader}</p>
                            </OfferTitleBox>
                            <OfferDescriptionBox>
                                <p className="p-small">{offer.offerText}</p>
                            </OfferDescriptionBox>
                            <PriceBox>
                                <h3 css={css `font-size: 30px;`}>{offer.offerPrice}</h3>
                            </PriceBox>
                        </OfferColumns>
                    ))}

                <DisclaimerBox>
                    <p className="p-small">{currentLanguage.disclaimerText}</p>
                    <br/>
                    <p className="p-small">{currentLanguage.legal}</p>
                </DisclaimerBox>

                <ObersvationParagraph>
                    <p className="p">{currentLanguage.consentText}</p>
                </ObersvationParagraph>

                <OutlineButton>
                    <DownloadImage
                        linkText={currentLanguage.goButton}
                        title={currentLanguage.goButton}
                        image={false}
                        url={currentLanguage.observations}></DownloadImage>
                </OutlineButton>

                <OutlineButton>
                    <DownloadImage
                        linkText={currentLanguage.csButton}
                        title={currentLanguage.csButton}
                        image={false}
                        url={currentLanguage.observations}></DownloadImage>
                </OutlineButton>

                <InternalLink href="/contact" w="85%">
                    <ContactButton>{currentLanguage.gicButton}</ContactButton>
                </InternalLink>

            </WhiteWrapper>

        </React.Fragment>
    )
}
