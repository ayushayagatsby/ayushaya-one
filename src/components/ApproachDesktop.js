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

export default function ApproachDesktop({currentLanguage}) {
    return (
        <React.Fragment>
            <HeroOuterWrapper>
                <Spacer/>
                <HeroInnerWrapper>
                    <HeroTextbox>
                        <h2 css={css `margin-bottom: 5%;`}>{currentLanguage.heroHeader}</h2>
                        <p className="p-big">{currentLanguage.heroText}</p>
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
                <h2 css={css `margin:5% 0 5% 0;`}>{currentLanguage.imgHeader}</h2>
                <ParagraphWrapper>
                    <p className="p-big">{currentLanguage.imgText}</p>
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

                <h3 css={css `margin-bottom: 3%;`}>{currentLanguage.midSubheaderOne}</h3>
                <AboutParagraph>

                    <p className="p-big">{currentLanguage.midTextOne}</p>
                </AboutParagraph>

                <ElementsWrapper css={css `margin-top: 3%;`}>
                    <SingleElement css={css `margin-top: 10%;`}><IcEther css={css `width: 100%; height: auto; margin-bottom: 7%;`}/>
                        <ElementName>{currentLanguage.EtherElement}</ElementName>
                    </SingleElement>

                    <SingleElement css={css `margin-top: 4%; margin-right: 3%;`}><IcWind css={css `width: 100%; height: auto; margin-bottom: 7%;`}/>
                        <ElementName>{currentLanguage.AirElement}</ElementName>
                    </SingleElement>

                    <SingleElement><IcFire css={css `width: 100%; height: auto; margin-bottom: 7%;`}/>
                        <ElementName>{currentLanguage.FireElement}</ElementName>
                    </SingleElement>

                    <SingleElement css={css `margin-top: 4%; margin-left: 3%;`}><IcWater css={css `width: 100%; height: auto; margin-bottom: 7%;`}/>
                        <ElementName>{currentLanguage.WaterElement}</ElementName>
                    </SingleElement>

                    <SingleElement css={css `margin-top: 10%;`}><IcEarth css={css `width: 100%; height: auto; margin-bottom: 7%;`}/>
                        <ElementName>{currentLanguage.EarthElement}</ElementName>
                    </SingleElement>
                </ElementsWrapper>

                <h3 css={css `margin-bottom: 3%; width: 50%;`}>{currentLanguage.midSubheaderTwo}</h3>

                <ThreeQualities css={css `width: 27%; height: auto; margin-bottom: 4%;`}/>

                <p css={css `width: 35%; height: 8vh; margin-bottom: 5%;`}>{currentLanguage.midTextTwo}</p>

                <QualityWrapper css={css `margin-top: -8vh; margin-bottom: 4%;`}>
                    <SingleQuality>
                        <IcSattva css={css `width: 50%; height: auto; margin-bottom: 12%;`}/>
                        <h3 css={css `margin-bottom: 12%;`}>{currentLanguage.qualities[0].qualityHeader}</h3>
                        <p className="p-big">{currentLanguage.qualities[0].qualityText}</p>
                    </SingleQuality>

                    <SingleQuality css={css `margin-top: 10vh;`}>
                        <IcRajas css={css `width: 50%; height: auto; margin-bottom: 12%;`}/>
                        <h3 css={css `margin-bottom: 12%;`}>{currentLanguage.qualities[1].qualityHeader}</h3>
                        <p className="p-big">{currentLanguage.qualities[1].qualityText}</p>
                    </SingleQuality>

                    <SingleQuality>
                        <IcTamas css={css `width: 50%; height: auto; margin-bottom: 12%;`}/>
                        <h3 css={css `margin-bottom: 12%;`}>{currentLanguage.qualities[2].qualityHeader}</h3>
                        <p className="p-big">{currentLanguage.qualities[2].qualityText}</p>
                    </SingleQuality>
                </QualityWrapper>

                <IcLiveFlower css={css `width: 22%; height: auto; margin-bottom: 2%;`}/>

                <VerticalLine css={css `margin-bottom: 2%;`}/>

                <LastAboutParagraph css={css `margin-bottom: 4%;`}>

                    <p className="p-big">{currentLanguage.qualityClosingText}</p>
                </LastAboutParagraph>

            </AboutWrapper>

            <QuoteSection
                small={true}
                signature={false}
                quote={currentLanguage.quote}
                css={css `margin-bottom: 4%;`}/>

            <TextImageWrapper css={css `margin-bottom: 4%;`}>
                <TextImageTextbox>
                    <h4 css={css `margin-bottom: 5%;`}>{currentLanguage.bottomSubheaderOne}</h4>
                    <p className="p-big">{currentLanguage.bottomTextOne}</p>
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
                        <h4>{currentLanguage.doorTopText}</h4>
                        <h1>{currentLanguage.doorHeader}</h1>
                        <DoorParagraph>
                            <p className="p-big">{currentLanguage.doorBottomText}</p>
                        </DoorParagraph>
                    </DoorContent>

                </DoorContainer>

            </BottomSection>

            <AboutCta currentLanguage={currentLanguage}/>

        </React.Fragment>
    )
}
