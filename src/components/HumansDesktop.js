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

export default function HumansDesktop() {
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
                        <HeroHeader>Life is not merely to be alive, but to be well.</HeroHeader>
                        <p className="p-big">Mastering life means mastering it yourself. There are many
                            possibilities to support you along the way.</p>
                    </HeroTextbox>
                </HeroInnerWrapper>

                <DownScrollIcon size="6vw" mt="2%"/>

            </HeroOuterWrapper>

            <WhiteWrapper>
                <h2 css={css `margin:5% 0 10% 0;`}>Small changes, big results.</h2>
                <TwoColumnTextbox>
                    <ShiftedHeader>Step by step towards your goals with the wisdom of Ayurveda.</ShiftedHeader>
                    <ParagraphWrapper>
                        <p className="p-big">Improving areas like nutrition and body weight, daily routine
                            and sleep, tobacco and alcohol use, and physical activity to achieve overall
                            wellness can be supported by natural remedies.</p>
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
                    <TextImageHeader>Non-judging is allowing real change.</TextImageHeader>
                    <TextImageParagraphBox>
                        <p className="p-big">An in-depth initial interview, a personalized program, and
                            subsequent regular follow-up can help a lot to improve various aspects of life,
                            health and wellbeing. Some suggestions regarding nutritional supplements or
                            energetic support through flower essences can be part of the individual program.</p>
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
                        Consultations
                    </TextImageHeader>
                    <TextImageCtaParagraphBox>
                        <p className="p-big">They can be done online via the common video call services.</p>
                    </TextImageCtaParagraphBox>
                    <TextImageCtaButton>GET IN CONTACT</TextImageCtaButton>
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

                <h2 css={css `margin-bottom: 5%;`}>My offer for humans</h2>
                <h3 css={css `margin-bottom: 5%;`}>Online consultations</h3>
                <OfferColumns>
                    <IcConsultations css={css `width: 17%; height: auto;`}/>
                    <OfferColumnParagraphContainer>
                        <p className="p-big">At first contact, we will identify together the areas of your
                            life that might benefit from optimization, and then define priorities.</p>
                    </OfferColumnParagraphContainer>
                </OfferColumns>

                <OfferColumns>
                    <IcCalendar css={css `width: 14%; height: auto;`}/>
                    <OfferColumnParagraphContainer>
                        <p className="p-big">“Meeting” again online every other week is often a good choice
                            to favor implementation of changes, but we can define together what suits best
                            for you.</p>
                    </OfferColumnParagraphContainer>
                </OfferColumns>

                <OfferColumns>
                    <IcConsent css={css `width: 16%; height: auto;`}/>
                    <OfferColumnParagraphContainer>
                        <p className="p-big">Please note that the informed consent sheet has to be filled in
                            and sent to me before the first consultation.</p>
                    </OfferColumnParagraphContainer>
                </OfferColumns>

                <PriceBox>
                    <h3>Price: 60 €/hour</h3>
                </PriceBox>

                <DisclaimerBox>
                    <p className="p-small">For every bill exceeding 77,47 € a single supplementary tax
                        (“marca da bollo”) of 2€ has to be charged, as required by Italian law</p>
                </DisclaimerBox>

                <OutlineButton>CONSENT SHEET</OutlineButton>

                <ContactButton>GET IN CONTACT</ContactButton>

            </WhiteWrapper>

        </React.Fragment>
    )
}
