import React from 'react'
import {StaticImage
placeholder:"blurred"} from "gatsby-plugin-image"
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
import QuoteSectionMobile from './QuoteSection/QuoteSectionMobile'
import Door from './SlideOneScale/Door'
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
`

const HeroTextbox = styled("div")`
width: 90%;
text-align: center;
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
margin-bottom: 5%;
display: flex;
justify-content: center;
`

const Spacer = styled("div")`
width: 100%;
height: 20vh;
`

const AboutWrapper = styled("div")`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`

const AboutParagraph = styled("div")`
width: 80%;
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
width: 40%;
`

const ElementName = styled("p")`
font-weight: 600;
`

const SingleQuality = styled("div")`
display: inline-flex;
flex-direction: column;
align-items: center;
width: 80%;
margin-bottom: 12%;
`

const VerticalLine = styled("div")`
width: 2px;
background-color: #D1C2BB;
height: 10vh;
border-radius: 30px;
`

const LastAboutParagraph = styled("div")`
width: 80%;
`

const TextImageWrapper = styled("div")`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
text-align: center;
`

const TextImageTextbox = styled("div")`
width: 80%;
`

const DoorContainer = styled("div")`
width: 100%;
position: relative;
`

const DoorContent = styled("div")`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
height: 50vh;
text-align: center;
`

const DoorParagraph = styled("div")`
width: 77%;
text-align: center;
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
bottom: 0;
display: flex;
justify-content: center;
`

export default function ApproachDesktop({currentLanguage}) {
    return (
        <React.Fragment>
            <HeroOuterWrapper>
                <Spacer/>
                <HeroInnerWrapper>
                    <HeroTextbox>
                        <h3 css={css `margin-bottom: 5%;`}>{currentLanguage.heroHeader}</h3>
                        <p className="p">{currentLanguage.heroText}</p>
                    </HeroTextbox>
                    <StaticImage
placeholder:"blurred"
                        src="../images/ShapeStonesGradient.png"
                        alt="Some stones in balance"
                        layout="constrained"
                        width={951}
                        height={1434}
                        css={css `width: 80%; position: absolute; z-index: -1;`}/>
                </HeroInnerWrapper>

                <DownScrollIcon size="15vw" mt="20%"/>
            </HeroOuterWrapper>

            <WhiteWrapper>
                <h3 css={css `margin:5% 0 5% 0;`}>{currentLanguage.imgHeader}</h3>
                <ParagraphWrapper>
                    <p className="p">{currentLanguage.imgText}</p>
                </ParagraphWrapper>

                <StaticImage
placeholder:"blurred"
                    src="../images/SomeSpices.png"
                    alt="Some spices on a table"
                    layout="constrained"
                    width={1640}
                    height={1093}
                    css={css `width: 88%; margin-bottom: 10%;`}/>
            </WhiteWrapper>

            <AboutWrapper>

                <h3 css={css `margin: 15% 0 10% 0;`}>{currentLanguage.midSubheaderOne}</h3>
                <AboutParagraph>

                    <p className="p">{currentLanguage.midTextOne}</p>
                </AboutParagraph>

                <ElementsWrapper css={css `margin-top: 10%;`}>
                    <SingleElement><IcEther css={css `width: 100%; height: auto; margin-bottom: 7%;`}/>
                        <ElementName>{currentLanguage.EtherElement}</ElementName>
                    </SingleElement>

                    <SingleElement css={css ``}><IcWind css={css `width: 100%; height: auto; margin-bottom: 7%;`}/>
                        <ElementName>{currentLanguage.AirElement}</ElementName>
                    </SingleElement>

                </ElementsWrapper>

                <ElementsWrapper css={css `margin-top: 15%;`}>
                    <SingleElement css={css ``}><IcFire css={css `width: 100%; height: auto; margin-bottom: 7%;`}/>
                        <ElementName>{currentLanguage.FireElement}</ElementName>
                    </SingleElement>

                    <SingleElement css={css ``}><IcWater css={css `width: 100%; height: auto; margin-bottom: 7%;`}/>
                        <ElementName>{currentLanguage.WaterElement}</ElementName>
                    </SingleElement>

                </ElementsWrapper>

                <ElementsWrapper css={css `margin-top: 10%;`}>
                    <SingleElement css={css ``}><IcEarth css={css `width: 100%; height: auto; margin-bottom: 7%;`}/>
                        <ElementName>{currentLanguage.EarthElement}</ElementName>
                    </SingleElement>

                </ElementsWrapper>

                <h3 css={css `margin: 15% 0 20% 0;`}>{currentLanguage.midSubheaderTwo}</h3>

                <ThreeQualities css={css `width: 75%; height: auto; margin-bottom: 12%;`}/>

                <p css={css `width: 75%; margin-bottom: 15%;`}>{currentLanguage.midTextTwo}</p>

                <SingleQuality>
                    <IcSattva css={css `width: 40%; height: auto; margin-bottom: 12%;`}/>
                    <h3 css={css `margin-bottom: 8%;`}>{currentLanguage.qualities[0].qualityHeader}</h3>
                    <p className="p">{currentLanguage.qualities[0].qualityText}</p>
                </SingleQuality>

                <SingleQuality>
                    <IcRajas css={css `width: 40%; height: auto; margin-bottom: 12%;`}/>
                    <h3 css={css `margin-bottom: 8%;`}>{currentLanguage.qualities[1].qualityHeader}</h3>
                    <p className="p">{currentLanguage.qualities[1].qualityText}</p>
                </SingleQuality>

                <SingleQuality>
                    <IcTamas css={css `width: 40%; height: auto; margin-bottom: 12%;`}/>
                    <h3 css={css `margin-bottom: 8%;`}>{currentLanguage.qualities[2].qualityHeader}</h3>
                    <p className="p">{currentLanguage.qualities[2].qualityText}</p>
                </SingleQuality>

                <IcLiveFlower css={css `width: 75%; height: auto; margin: 15% 0 10% 0;`}/>

                <VerticalLine css={css `margin-bottom: 10%;`}/>

                <LastAboutParagraph css={css `margin-bottom: 4%;`}>

                    <p className="p">{currentLanguage.qualityClosingText}</p>
                </LastAboutParagraph>

            </AboutWrapper>

            <QuoteSectionMobile signature={false} quote={currentLanguage.quote}/>

            <TextImageWrapper css={css `margin: 20% 0 20% 0;`}>
                <TextImageTextbox>
                    <h4 css={css `margin-bottom: 5%;`}>{currentLanguage.bottomSubheaderOne}</h4>
                    <p className="p">{currentLanguage.bottomTextOne}</p>
                </TextImageTextbox>

                <StaticImage
placeholder:"blurred"
                    src="../images/DogBeachTwo.png"
                    alt="A dog at the beach"
                    layout="constrained"
                    width={810}
                    height={672}
                    css={css `width: 100%; margin-top: 10%;`}/>
            </TextImageWrapper>

            <BottomSection>
                <h4 css={css `margin-bottom: 10%; text-align: center;`}>{currentLanguage.doorTopText}</h4>
                <DoorContainer>
                    <AbsoluteDoor>
                        <Door width="80%"/>
                    </AbsoluteDoor>
                    <DoorContent>
                        <h3>{currentLanguage.doorHeader}</h3>

                    </DoorContent>

                </DoorContainer>
                <DoorParagraph>
                    <p>{currentLanguage.doorBottomText}</p>
                </DoorParagraph>
            </BottomSection>

            <AboutCtaMobile currentLanguage={currentLanguage}/>

        </React.Fragment>
    )
}
