import React from 'react'
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
width: 43%;
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

export default function AnimalsDesktop() {
    return (
        <React.Fragment>
            <HeroOuterWrapper>
                <Spacer/>

                <HeroInnerWrapper>
                    <HeroTextbox>
                        <HeroHeader>They are not our whole life, but they make our lives whole.</HeroHeader>
                        <p className="p-big">Treating them right leads to a long and fulfilling life for them and for you.</p>
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
                <h2 css={css `margin:5% 0 5% 0;`}>The best life we can offer them.</h2>
                <ParagraphWrapper>
                    <p className="p-big">For animals, my offer includes optimizing lifestyle and
                        supporting them in specific situations of unease or old age.</p>
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
                    <TextImageHeader>Specific situations</TextImageHeader>
                    <TextImageParagraphBox>
                        <p className="p-big">In some instances, an animal needs just some support to tackle
                            a particular situation, such as recovering from surgery, changing home or
                            adapting to the arrival of a new family member.</p>
                    </TextImageParagraphBox>
                </TextImageTextbox>
            </TextImageWrapper>

            <TextImageWrapper css={css `margin-top: -10%;`}>
                <TextImageTextbox>
                    <TextImageHeader>General health</TextImageHeader>
                    <TextImageParagraphBox>
                        <p className="p-big">At any point of their life, animals can benefit from
                            nutritional supplements, suggestions about ideal living according to Ayurveda,
                            and manual treatments such as massage</p>
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

                <h2 css={css `margin-bottom: 3%;`}>My offer for animals</h2>
                <h3 css={css `margin-bottom: 4%;`}>Consultaions in person or online</h3>
                <CtaParagraph>
                    <p className="p-big">At first contact, I’ll get to know your animal friend. This can
                        be done online or meeting personally.</p>
                </CtaParagraph>

                <h3>Prices:</h3>

                <OfferColumns>
                    <OfferTitleBox>
                        <h4 css={css `margin-bottom: 2%;`}>First encounter</h4>
                        <p className="p-big">For general health issues</p>
                    </OfferTitleBox>
                    <OfferDescriptionBox>
                        <p className="p-small">Includes sending you a treatment plan afterwards, answering
                            questions about it and keeping in touch on how the health issue is evolving</p>
                    </OfferDescriptionBox>
                    <PriceBox>
                        <h3>60 €</h3>
                    </PriceBox>
                </OfferColumns>

                <OfferColumns>
                    <OfferTitleBox>
                        <h4 css={css `margin-bottom: 2%;`}>Additional Animal</h4>
                        <p className="p-big">In the same first encounter</p>
                    </OfferTitleBox>
                    <OfferDescriptionBox>
                        <p className="p-small">40 € for each supplementary animal in the same first
                            encounter (includes sending you a treatment plan afterwards, answering any
                            question about it and keeping in touch for 3 months on how the health issue is
                            evolving)</p>
                    </OfferDescriptionBox>
                    <PriceBox>
                        <h3>40 € each</h3>
                    </PriceBox>
                </OfferColumns>

                <OfferColumns>
                    <OfferTitleBox>
                        <h4 css={css `margin-bottom: 2%;`}>New health issue</h4>
                        <p className="p-big">Of known Animals</p>
                    </OfferTitleBox>
                    <OfferDescriptionBox>
                        <p className="p-small">For every new health issue of an animal friend already known
                            to me: 30 € (includes sending you a treatment plan afterwards, answering any
                            question about it and keeping in touch for 3 months on how the health issue is
                            evolving)</p>
                    </OfferDescriptionBox>
                    <PriceBox>
                        <h3>30 €</h3>
                    </PriceBox>
                </OfferColumns>

                <OfferColumns>
                    <OfferTitleBox>
                        <h4 css={css `margin-bottom: 2%;`}>Specific treatments</h4>
                        <p className="p-big">Massage, sustaining recovery, etc.</p>
                    </OfferTitleBox>
                    <OfferDescriptionBox>
                        <p className="p-small">For specific treatments (such as massage, sustaining
                            recovery, etc.): 40 € per hour plus material costs (for example: ayurvedic oils
                            or bandages)</p>
                    </OfferDescriptionBox>
                    <PriceBox>
                        <h3>40 €/hour</h3>
                    </PriceBox>
                </OfferColumns>

                <OfferColumns>
                    <OfferTitleBox>
                        <h4 css={css `margin-bottom: 2%;`}>Meeting in person</h4>
                        <p className="p-big">Personally in your place</p>
                    </OfferTitleBox>
                    <OfferDescriptionBox>
                        <p className="p-small">Meeting personally in your place:
                            <br/>Travel costs for the province of Varese prices as calculated by
                                ViaMichelin; for outside the province of Varese we will agree on the price for
                                travel</p>
                    </OfferDescriptionBox>
                    <PriceBox>
                        <h3>individual</h3>
                    </PriceBox>
                </OfferColumns>
                <OfferColumns>
                    <OfferTitleBox>
                        <h4 css={css `margin-bottom: 2%;`}>First encounter</h4>
                        <p className="p-big">For general health issues</p>
                    </OfferTitleBox>
                    <OfferDescriptionBox>
                        <p className="p-small">Includes sending you a treatment plan afterwards, answering
                            questions about it and keeping in touch on how the health issue is evolving</p>
                    </OfferDescriptionBox>
                    <PriceBox>
                        <h3>60 €</h3>
                    </PriceBox>
                </OfferColumns>

                <DisclaimerBox>
                    <p className="p-small">For every bill exceeding 77,47 € a single supplementary tax
                        (“marca da bollo”) of 2€ has to be charged, as required by Italian law</p>
                </DisclaimerBox>

                <ObersvationParagraph>
                    <p className="p-big">You can help me a lot by filling in and sending me the general
                        observation form, and the informed consent sheets beforehand.</p>
                </ObersvationParagraph>

                <OutlineButton>GENERAL OBSERVATION</OutlineButton>

                <OutlineButton>CONSENT SHEET</OutlineButton>

                <ContactButton>GET IN CONTACT</ContactButton>

            </WhiteWrapper>

        </React.Fragment>
    )
}
