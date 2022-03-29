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
width: 80%;
height: 7vh;
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
`

const PriceBox = styled("div")`
margin-top: 10%;
margin-bottom: 8%;
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
height: 6vh;
margin-bottom: 5%;
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

export default function HumansMobile() {
    return (
        <React.Fragment>
            <HeroOuterWrapper>
                <Spacer/>

                <HeroInnerWrapper>
                    <HeroTextbox>
                        <HeroHeader>Life is not merely to be alive, but to be well.</HeroHeader>
                        <p class="p-big">Mastering life means mastering it yourself. There are many
                            possibilities to support you along the way.</p>
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
                <h3 css={css `margin: 5% 0 5% 0;`}>Small changes, big results.</h3>
                <h4 css={css `margin: 5% 0 7% 0; padding: 0 5%;`}>Step by step towards your goals with the wisdom of Ayurveda.</h4>
                <ParagraphWrapper>
                    <p class="p-big">Improving areas like nutrition and body weight, daily routine
                        and sleep, tobacco and alcohol use, and physical activity to achieve overall
                        wellness can be supported by natural remedies.</p>
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
                    <TextImageHeader>Non-judging is allowing real change.</TextImageHeader>
                    <TextImageParagraphBox>
                        <p class="p-big">An in-depth initial interview, a personalized program, and
                            subsequent regular follow-up can help a lot to improve various aspects of life,
                            health and wellbeing. Some suggestions regarding nutritional supplements or
                            energetic support through flower essences can be part of the individual program.</p>
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
                    <TextImageHeader>Consultations</TextImageHeader>
                    <TextImageParagraphBox>
                        <p class="p-big">They can be done online via the common video call services.</p>
                    </TextImageParagraphBox>
                </TextImageTextbox>
                
                <TextImageCtaButton>GET IN CONTACT</TextImageCtaButton>

            </TextImageWrapper>

            <WhiteWrapper css={css `margin-top: 50%;`}>
                <StaticImage
                    src="../images/HumanSide.png"
                    alt="A humane face sideways"
                    layout="constrained"
                    width={378}
                    height={511}
                    css={css `width: 50%; margin-top: -30%; margin-bottom: 4%;`}/>

                <h3 css={css `margin: 10% 0 5% 0; padding: 0 3%;`}>My offer for humans</h3>
                <h4 css={css `margin-bottom: 10%;`}>Online consultations</h4>
                <OfferColumns>
                    <IcConsultations css={css `margin-bottom: 10%; width: 40%; height: auto;`}/>
                    <OfferColumnParagraphContainer>
                        <p class="p-big">At first contact, we will identify together the areas of your
                            life that might benefit from optimization, and then define priorities.</p>
                    </OfferColumnParagraphContainer>
                </OfferColumns>

                <OfferColumns>
                    <IcCalendar css={css `margin: 8% 0 10% 0; width: 40%; height: auto;`}/>
                    <OfferColumnParagraphContainer>
                        <p class="p-big">“Meeting” again online every other week is often a good choice
                            to favor implementation of changes, but we can define together what suits best
                            for you.</p>
                    </OfferColumnParagraphContainer>
                </OfferColumns>

                <OfferColumns>
                    <IcConsent css={css `margin: 8% 0 10% 0; width: 40%; height: auto;`}/>
                    <OfferColumnParagraphContainer>
                        <p class="p-big">Please note that the informed consent sheet has to be filled in
                            and sent to me before the first consultation.</p>
                    </OfferColumnParagraphContainer>
                </OfferColumns>

                <PriceBox>
                    <h3>Price: 60 €/hour</h3>
                </PriceBox>

                <DisclaimerBox>
                    <p class="p-small">For every bill exceeding 77,47 € a single supplementary tax
                        (“marca da bollo”) of 2€ has to be charged, as required by Italian law</p>
                </DisclaimerBox>

                <OutlineButton>CONSENT SHEET</OutlineButton>

                <ContactButton>GET IN CONTACT</ContactButton>

            </WhiteWrapper>

        </React.Fragment>
    )
}
