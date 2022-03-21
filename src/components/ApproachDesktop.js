import React from 'react'
import {StaticImage} from "gatsby-plugin-image"
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import DownScrollIcon from './DownScrollIcon'
import IcFire from '../assets/IcFire.svg'
import IcEarth from '../assets/IcEarth.svg'
import IcEther from '../assets/IcEther.svg'
import IcWind from '../assets/IcWind.svg'
import IcWater from '../assets/IcWater.svg'
import ThreeQualities from '../assets/ThreeQualities.svg'
import IcSattva from '../assets/IcSattva.svg'
import IcRajas from '../assets/IcRajas.svg'
import IcTamas from '../assets/IcTamas.svg'
import IcLiveFlower from '../assets/IcLiveFlower.svg'
import QuoteSection from './QuoteSection/QuoteSection'
import Door from './SlideOneScale/Door'
import AboutCta from './AboutPage/AboutCta'

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
width: 35%;
`

const WhiteWrapper = styled("div")`
background-color: #fff;
display: flex;
flex-direction: column;
align-items: center;
margin:10% 0;
`

const ParagraphWrapper = styled("div")`
width: 44%;
margin-bottom: 5%;
display: flex;
justify-content: center;
`

const Spacer = styled("div")`
width: 100%;
height: 10vh;
`

const AboutWrapper = styled("div")`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`

const AboutParagraph = styled("div")`
width: 71%;
`

const ElementsWrapper = styled("div")`
display: flex;
width: 80%;
margin: 0 auto ;
justify-content: space-evenly;
`

const SingleElement = styled("div")`
display: inline-flex;
flex-direction: column;
align-items: center;
width: 13%;
`

const ElementName = styled("p")`
font-weight: 600;
`

const SingleQuality = styled("div")`
display: inline-flex;
flex-direction: column;
align-items: center;
width: 26%;
`

const QualityWrapper = styled("div")`
display: flex;
justify-content: space-between;
width: 80%;
margin: 0 auto ;
`

const VerticalLine = styled("div")`
width: 2px;
background-color: #D1C2BB;
height: 10vh;
border-radius: 30px;
`

const LastAboutParagraph = styled("div")`
width: 35%;
`

const TextImageWrapper = styled("div")`
display: flex;
align-items: center;
justify-content: space-between;
`

const TextImageTextbox = styled("div")`
width: 35%;
`

const DoorContainer = styled("div")`
height: 85vh;
width: 45%;
position: relative;
`

const DoorContent = styled("div")`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
height: 100%;
text-align: center;
`

const DoorParagraph = styled("div")`
width: 77%;
`

const BottomSection = styled("div")`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10%;
`

const AbsoluteDoor = styled("div")`
position: absolute; 
z-index: -1;
top: 0;
left: 0;
right: 0;
display: flex;
justify-content: center;`

export default function ApproachDesktop() {
    return (
        <React.Fragment>
            <HeroOuterWrapper>
                <Spacer/>
                <HeroInnerWrapper>
                    <HeroTextbox>
                        <h2 css={css `margin-bottom: 5%;`}>The science of life</h2>
                        <p class="p-big">A scientific and modern approach to a thousand year old tradition.</p>
                    </HeroTextbox>
                    <StaticImage
                        src="../images/ShapeStonesGradient.png"
                        alt="Some stones in balance"
                        layout="constrained"
                        width={951}
                        height={1434}
                        css={css `width: 31%;`}/>
                </HeroInnerWrapper>

                <DownScrollIcon size="6vw" mt="2%"/>
            </HeroOuterWrapper>

            <WhiteWrapper>
                <h2 css={css `margin:5% 0 5% 0;`}>Insights by the observation of Nature.</h2>
                <ParagraphWrapper>
                    <p class="p-big">Ayurveda is the traditional Indian medicine system which has
                        developed over several thousands of years. As other traditional systems, it is
                        based on a philosophical framework and on the observation of Nature.</p>
                </ParagraphWrapper>

                <StaticImage
                    src="../images/SomeSpices.png"
                    alt="Some spices on a table"
                    layout="constrained"
                    width={1640}
                    height={1093}
                    css={css `width: 88%; margin-bottom: 10%;`}/>
            </WhiteWrapper>

            <AboutWrapper>

                <h2 css={css `margin-bottom: 3%;`}>About Ayuverda</h2>
                <AboutParagraph>

                    <p class="p-big">Ayurveda basically holds that the Universe develops out of pure
                        consciousness which combines with primordial material energy, to form
                        bioenergetic principles allegorized as 5 Elements: Space (or Ether) represents
                        the principle of expansion and of providing a recipient to hold the Universe.
                        Air represents the principle of movement. Fire represents the principle of
                        transformation. Water represents the principle of nutrition and cohesion. Earth
                        represents the principle of support and solidity. These principles can be
                        observed everywhere in the universe, in proportions that vary between a human
                        being, a bird, a tree or a rock.</p>
                </AboutParagraph>

                <ElementsWrapper css={css `margin-top: 3%;`}>
                    <SingleElement css={css `margin-top: 10%;`}><IcFire css={css `width: 100%; height: auto; margin-bottom: 7%;`}/>
                        <ElementName>FIRE</ElementName>
                    </SingleElement>

                    <SingleElement css={css `margin-top: 4%; margin-right: 3%;`}><IcWater css={css `width: 100%; height: auto; margin-bottom: 7%;`}/>
                        <ElementName>WATER</ElementName>
                    </SingleElement>

                    <SingleElement><IcEther css={css `width: 100%; height: auto; margin-bottom: 7%;`}/>
                        <ElementName>ETHER</ElementName>
                    </SingleElement>

                    <SingleElement css={css `margin-top: 4%; margin-left: 3%;`}><IcEarth css={css `width: 100%; height: auto; margin-bottom: 7%;`}/>
                        <ElementName>EARTH</ElementName>
                    </SingleElement>

                    <SingleElement css={css `margin-top: 10%;`}><IcWind css={css `width: 100%; height: auto; margin-bottom: 7%;`}/>
                        <ElementName>WIND</ElementName>
                    </SingleElement>
                </ElementsWrapper>

                <h3 css={css `margin-bottom: 3%;`}>The five elements
                    <br/>
                    combine with the “3 qualities”</h3>

                <ThreeQualities css={css `width: 27%; height: auto; margin-bottom: 4%;`}/>

                <p css={css `width: 35%; height: 8vh;`}>these are described by sanscrit terms which have a whole range of significations</p>

                <QualityWrapper css={css `margin-top: -8vh; margin-bottom: 4%;`}>
                    <SingleQuality>
                        <IcSattva css={css `width: 50%; height: auto; margin-bottom: 12%;`}/>
                        <h3 css={css `margin-bottom: 12%;`}>Sattva</h3>
                        <p class="p-big">Describes pure consciousness, daytime, being awake, and a balanced state.</p>
                    </SingleQuality>

                    <SingleQuality css={css `margin-top: 10vh;`}>
                        <IcRajas css={css `width: 50%; height: auto; margin-bottom: 12%;`}/>
                        <h3 css={css `margin-bottom: 12%;`}>Rajas</h3>
                        <p class="p-big">Describes the energy that moves sattva and tamas, but also dusk
                            and dawn, dreams, and an imbalanced state.</p>
                    </SingleQuality>

                    <SingleQuality>
                        <IcTamas css={css `width: 50%; height: auto; margin-bottom: 12%;`}/>
                        <h3 css={css `margin-bottom: 12%;`}>Tamas</h3>
                        <p class="p-big">Describes unconsciousness, nighttime, sleep, and inertia.</p>
                    </SingleQuality>
                </QualityWrapper>

                <IcLiveFlower css={css `width: 22%; height: auto; margin-bottom: 2%;`}/>

                <VerticalLine css={css `margin-bottom: 2%;`}/>

                <LastAboutParagraph css={css `margin-bottom: 4%;`}>

                    <p class="p-big">Though all three qualities are important in life, Ayurveda
                        holds that the human being should develop mainly sattva, as this allows to
                        evolve spiritually.</p>
                </LastAboutParagraph>

            </AboutWrapper>

            <QuoteSection
                small={true}
                signature={false}
                quote="In fact, the aim of Ayurveda is to help live a long and healthy
                life as a basic prerequisite for the best possible spiritual evolution."
                css={css `margin-bottom: 4%;`}/>

            <TextImageWrapper css={css `margin-bottom: 4%;`}>
                <TextImageTextbox>
                    <h4 css={css `margin-bottom: 5%;`}>Ayurveda is known in the Western countries as
                        an approach to beauty, wellbeing and health for humans.</h4>
                    <p class="p-big">However, it has been classically used also for animals. Though
                        most classical texts are about the human being, there are a few written sources
                        on horses, cows, and elephants (which were of high value in ancient India).
                        Besides the written tradition, there is also the practical experience of the
                        traditional healers in the villages, passed on from one generation to the next,
                        for many kinds of living beings.</p>
                </TextImageTextbox>

                <StaticImage
                    src="../images/DogBeachTwo.png"
                    alt="A dog at the beach"
                    layout="constrained"
                    width={810}
                    height={672}
                    css={css `width: 53%;`}/>
            </TextImageWrapper>

            <BottomSection>

                <DoorContainer>
                    <AbsoluteDoor>
                        <Door width="90%"/>
                    </AbsoluteDoor>
                    <DoorContent>
                        <h4>One of the classics, the Charaka Samhita, states:</h4>
                        <h1>“Ogni sé vivente unisce sé stesso alla vita in tutte le specie”</h1>
                        <DoorParagraph>
                            <p class="p-big">Ayurvedic concepts are applicable to all living beings (even
                                though some therapeutical principles might not apply to all of them).</p>
                        </DoorParagraph>
                    </DoorContent>

                </DoorContainer>

            </BottomSection>

            <AboutCta />

        </React.Fragment>
    )
}
