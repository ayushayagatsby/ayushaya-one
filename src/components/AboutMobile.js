import React from 'react'
import {StaticImage} from "gatsby-plugin-image"
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import DownScrollIcon from './DownScrollIcon'
import bgGradient from "./AboutPage/bgGradient.jpeg"
import CurriculumTimelineMobile from './AboutPage/CurriculumTimelineMobile'
import EducationSection from './AboutPage/EducationSection'
import WorkingSection from './AboutPage/WorkingSection'
import LogoIllustrationBig from "../assets/LogoIllustrationBig.svg"
import WorkingSectionMobile from './AboutPage/WorkingSectionMobile'
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
margin-top: -20%;
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
text-align: center;
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
margin-top: 2%;
margin-bottom: 3%;
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
margin-bottom: 5%;
`

const OutlineButton = styled("button")`
background-color: transparent;
border: 1px solid #D1C2BB;
color: #D1C2BB;
width: 85%;
height: 6vh;
margin-bottom: 3%;
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

const GradientCircle = styled("div")`
  background-image: url(${bgGradient}); 
  background-size: cover; overflow: hidden; 
  height: 90vw; 
  width: 90vw;
  max-width: 549px; 
  max-height: 549px;
  border-radius: 50%;
  position: absolute; 
  z-index: -1; 
  transform: translateY(-20%);
`

const QuoteOuterWrapper = styled("div")`
display: flex;
flex-direction: column;
width: 100%;
border-radius: 20px;
height: 100vh;
display: flex;
justify-content: space-around;
align-items: center;
background-color: #F5EEE9;
margin-top: 30%;
`

const QuoteInnerWrapper = styled("div")`
display: flex;
flex-direction: column;
width: 90%;
border-radius: 10px;
height: 50%;
display: flex;
justify-content: center;
padding: 0 3% ;
align-items: center;
background-color: white;
text-align: center;
`

const Signature = styled("div")`
font-family: "Open Sans";
font-style: italic;
font-size: 1.875rem;
color: #D4C1BA;
margin-top: 5% ;
`

const ValueProposition = styled("h3")`
margin: 7% auto;
text-align: center;
width: 100%;
`

const BottomText = styled("div")`
width: 100%;
text-align: center;
margin-bottom: 15%;
`

export default function AboutMobile() {
    return (
        <React.Fragment>
            <HeroOuterWrapper>
                <Spacer/>

                <HeroInnerWrapper>
                    <HeroTextbox>
                        <HeroHeader>They are not our whole life, but they make our lives whole.</HeroHeader>
                        <h4>Provolone scientifico</h4>
                        <p className="p">Treating them right leads to a long and fulfilling life for them and for you.</p>
                    </HeroTextbox>

                    <GradientCircle/>
                </HeroInnerWrapper>

                <DownScrollIcon size="15vw" mt="5%"/>

            </HeroOuterWrapper>

            <WhiteWrapper>
                <h3 css={css `margin: 5% 0 5% 0;`}>About myself</h3>
                <ParagraphWrapper>
                    <p className="p">Born in Berlin, I grew up in different parts of Germany,
                        but mainly in Düren, a town halfway between Köln and Aachen. As a child, I
                        dreamed of working with animals.</p>
                </ParagraphWrapper>

                <StaticImage
                    src="../images/curriculumPicture.png"
                    alt="A dog in the beach"
                    layout="constrained"               
                    width={1640}
                    height={1093}
                    css={css `width: 88%; margin-bottom: 10%;`}/>

                <CurriculumTimelineMobile/>
            </WhiteWrapper>

            <WhiteWrapper><WorkingSectionMobile/></WhiteWrapper>

            <TextImageWrapper>
                <TextImageTextbox>
                    <TextImageHeader>Education</TextImageHeader>
                    <TextImageParagraphBox>
                        <p className="p">For different reasons, at the end of school, I decided to
                            study human medicine. Having part of my family in Switzerland, I ended up going
                            to the university of Lausanne.</p>
                    </TextImageParagraphBox>

                </TextImageTextbox>

                <StaticImage
                    src="../images/CityImageTwo.png"
                    alt="Another facade of a Church"
                    layout="constrained"               
                    width={950}
                    height={633}
                    css={css `width: 100%; margin: 10% 0;`}/>

                <TextImageParagraphBox>
                    <p className="p">In the following years, I knew people from various parts of
                        the world and travelled to different countries. I started to learn italian and
                        also spent a lot of time in Great Britain including several months of internship
                        and a year of research.</p>
                </TextImageParagraphBox>
            </TextImageWrapper>

            <QuoteOuterWrapper>
                <QuoteInnerWrapper>
                    <h4>Rather sustaining health than treating diseases.
                    </h4>
                    <Signature>
                        Juliane Merckens
                    </Signature>
                </QuoteInnerWrapper>
            </QuoteOuterWrapper>

            <TextImageWrapper>
                <TextImageTextbox>
                    <TextImageHeader>After graduation
                    </TextImageHeader>
                    <TextImageParagraphBox>
                        <p className="p">I started working in the Italian speaking part of
                            Switzerland. My initial idea was to work in palliative medicine. But working in
                            the field, I started doubting about this choice. Experiences in different other
                            fields led me eventually to become a family doctor and to help people change
                            their habits of smoking tobacco.
                        </p>
                    </TextImageParagraphBox>

                </TextImageTextbox>

                <LogoIllustrationBig css={css `width: 100%; height:auto; margin: 10% 0;`}/>
                <h4 css={css `text-align: center; margin-bottom: 5%;`}>Complementary approaches
                </h4>
                <TextImageParagraphBox>
                    <p className="p">Alongside, my interest in complementary approaches grew and
                        led me to learn about possible ways to connect emotions and disease
                        (Metamedicina®), and to start training in Ayurveda. Always curious to learn new
                        things, I decided to spend a year learning about nutrition for health and
                        disease prevention (ETH Zurich), and then started to train in naturopathy, with
                        focus on animal wellbeing.</p>
                </TextImageParagraphBox>

                <StaticImage
                    src="../images/JulianeAndDog.png"
                    alt="Juliane with a dog"
                    layout="constrained"               
                    width={950}
                    height={711}
                    css={css `width: 100%; margin: 10% 0;`}/>

                <TextImageParagraphBox>
                    <p className="p">As time went by, I realized that I am much more interested
                        in sustaining health rather than treating diseases. Thanks to the naturopathic
                        training, I rediscovered my passion for animals. So, while preparing the final
                        thesis, I started to think seriously about changing profession. The final
                        decision came when I discovered an institute in Germany which offers a training
                        to become an ayurvedic therapist for animals.</p>
                </TextImageParagraphBox>

                <ValueProposition>I want to help people optimize lifestyle
                    <br/>
                    – theirs or for their animal friends –<br/>
                    in order to maintain health</ValueProposition>

                <StaticImage
                    src="../images/JulianeAndTwoDogs.png"
                    alt="Juliane with two dogs"
                    layout="constrained"               
                    width={1364}
                    height={911}
                    css={css `width: 100%; margin: 10%;`}/>

                <BottomText>
                    <p className="p-small">Presently, I am living in a small place in Northern Italy,
                        with my husband, two old cats and 2 dogs. I enjoy nature, reading books on
                        various topics and writing.</p>
                </BottomText>
            </TextImageWrapper>

           <AboutCtaMobile />

        </React.Fragment>
    )
}
