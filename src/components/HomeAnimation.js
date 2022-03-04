import React, {useState} from 'react'
import MaskGateShape from "../assets/MaskGateShape.svg"
import BrandType from "../assets/BrandType.svg"
import LogoIllustrationBig from "../assets/LogoIllustrationBig.svg"
import DownScrollIcon from "./DownScrollIcon.js"
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import "./HomeAnimation.css"
import SlideOneFadeUpLeft from './SlideOneFadeUp/SlideOneFadeUpLeft'
import SlideOneFadeUpRight from './SlideOneFadeUp/SlideOneFadeUpRight'
import SlideOneScale from './SlideOneScale/SlideOneScale'
import SlideOneFade from './SlideOneFade/SlideOneFade'
import SlideTwoFade from './SlideTwoFade/SlideTwoFade'
import SlideTwoFadeUp from './SlideTwoFadeUp/SlideTwoFadeUp'
import AllOffers from './OfferComponent/AllOffers'

const Wrapper = styled("div")`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
  position: absolute;
`
const CentralWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  text-align: center;
`

const SideWrapper = styled("div")`

  display: flex;
  flex-direction: column;
  width: 40%;
  margin-top: -10%;
`

export default function HomeAnimation() {
    const [slideOneOn,
        setSlideOneOn] = useState(false);

    const [slideThreeOn,
        setSlideThreeOn] = useState(false)

    const [fadeOut,
        setFadeOut] = useState(false);

    const [secondFade, setSecondFade] = useState(false);

    const [slideTwoOff,
        setSlideTwoOff] = useState(false);

    const animatioHelper = () => {
        setSlideOneOn(false);
        setSecondFade(false);

    }

    const animatioHelperTwo = () => {
        setSecondFade(true);

    }

    return (
        <TransitionGroup>
            <Wrapper>

                <SlideOneFadeUpLeft in={fadeOut}/>

                <CentralWrapper>

                    <SlideOneScale in={slideOneOn} onEnter={setFadeOut} onExited={setSlideThreeOn}/>

                    <SlideOneFade in={fadeOut} scrollDown={setSlideOneOn} onEnter={animatioHelperTwo}/>

                    <SlideTwoFade in={secondFade} scrollDown={animatioHelper}/>

                    <SlideTwoFadeUp in={secondFade}/>

                </CentralWrapper>

                <SlideOneFadeUpRight in={fadeOut}/>

            </Wrapper>

            {slideThreeOn && <Wrapper css={css `flex-direction: column`}>
                <CSSTransition
                    timeout={2000}
                    in={slideThreeOn}
                    classNames="slide-three-zoom-in"
                    mountOnEnter>
                    <CentralWrapper css={css `margin-top: -20%;`}>
                        <LogoIllustrationBig css={css `width: 25vw; max-width: 600px; height: auto;`}/>
                        <AllOffers/>
                    </CentralWrapper>
                </CSSTransition>

                <CSSTransition
                    timeout={2000}
                    in={slideThreeOn}
                    classNames="slide-three-slide-down"
                    mountOnEnter>
                    <CentralWrapper css={css`margin-top: 5%;`}>
                        <h2>The offer of Ayurveda</h2>
                        <p className='p-small' css={css `width: 50%;`}>a holistic approach to health and wellbeing by caring about the way of living.</p>
                        <div onClick={() => console.log("hello")}>
                            <DownScrollIcon size={"4vw"}/>
                        </div>
                    </CentralWrapper>
                </CSSTransition>
            </Wrapper>}
        </TransitionGroup>
    )
}
