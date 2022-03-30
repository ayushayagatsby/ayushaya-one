import React from 'react'
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import LogoIllustrationBig from "../../assets/LogoIllustrationBig.svg"
import {StaticImage} from "gatsby-plugin-image"

const OuterWrapper = styled("div")`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const MainHeader = styled("h2")`
margin-bottom: 5%;
`

const TopTextbox = styled("div")`
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
`

const FirstInnerWrapper = styled("div")`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`

const FirstInnerWrapperTextbox = styled("div")`
width: 28%;
`

const SecondInnerWrapper = styled("div")`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
position: relative;
bottom: 50px;
`
const ValueProposition = styled("h2")`
margin: 7% auto;
text-align: center;
width: 56%;
`

const BottomText = styled("div")`
width: 42%;
text-align: center;
margin-bottom: 15%;
`

export default function BottomSection() {
    return (
        <OuterWrapper>
            <TopTextbox>
                <MainHeader children="After graduation"/>
                <p css={css `width: 42%; margin-bottom: 5%;`}>I started working in the Italian
                    speaking part of Switzerland. My initial idea was to work in palliative
                    medicine. But working in the field, I started doubting about this choice.
                    Experiences in different other fields led me eventually to become a family
                    doctor and to help people change their habits of smoking tobacco.</p>
            </TopTextbox>

            <FirstInnerWrapper>
                <FirstInnerWrapperTextbox>
                    <h3 children="Complementary approaches" css={css ` margin-bottom: 5%;`}/>
                    <p>Alongside, my interest in complementary approaches grew and led me to learn
                        about possible ways to connect emotions and disease (Metamedicina®), and to
                        start training in Ayurveda. Always curious to learn new things, I decided to
                        spend a year learning about nutrition for health and disease prevention (ETH
                        Zurich), and then started to train in naturopathy, with focus on animal
                        wellbeing.</p>
                </FirstInnerWrapperTextbox>

                <LogoIllustrationBig css={css `width: 45%; height: auto;`}/>
            </FirstInnerWrapper>

            <SecondInnerWrapper>
                <StaticImage
                    src="../../images/JulianeAndDog.png"
                    alt="Juliane with a dog"
                    layout="constrained"
                    width={950}
                    height={711}
                    css={css `width: 48%; margin-right: 5%;`}/>
                <p css={css `width: 21%;`}>As time went by, I realized that I am much more
                    interested in sustaining health rather than treating diseases. Thanks to the
                    naturopathic training, I rediscovered my passion for animals. So, while
                    preparing the final thesis, I started to think seriously about changing
                    profession. The final decision came when I discovered an institute in Germany
                    which offers a training to become an ayurvedic therapist for animals.</p>

            </SecondInnerWrapper>

            <ValueProposition>I want to help people optimize lifestyle
                <br/>
                – theirs or for their animal friends –<br/>
                in order to maintain health</ValueProposition>

            <StaticImage
                src="../../images/JulianeAndTwoDogs.png"
                alt="Juliane with two dogs"
                layout="constrained"
                width={1364}
                height={911}
                css={css `width: 71%; margin-bottom: 5%;`}/>

            <BottomText>
                <p className="p-big">Presently, I am living in a small place in Northern Italy, with
                    my husband, two old cats and 2 dogs. I enjoy nature, reading books on various
                    topics and writing.</p>
            </BottomText>

        </OuterWrapper>
    )
}
