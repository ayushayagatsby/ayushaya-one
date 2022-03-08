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
import CtaSection from './CtaSection/CtaSection'
import QuoteSection from './QuoteSection/QuoteSection'
import AboutSection from "./AboutSection/AboutSection"

const OuterWrapper = styled("div")`


`
const Spacer = styled("div")`
  height: ${props => props.h}
`

const Wrapper = styled("div")`
  height: 100%;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  padding: 0 10%;
  width: 100vw;
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

    const [secondFade,
        setSecondFade] = useState(false);

    const [slideTwoOff,
        setSlideTwoOff] = useState(false);

    const [staticScroll,
        setStaticScroll] = useState(false);

    const [lastSlide,
        setLastSlide] = useState(false);

    const animatioHelper = () => {
        setSlideOneOn(false);
        setSecondFade(false);

    }

    const animatioHelperTwo = () => {
        setSecondFade(true);

    }

    const animationHelperThree = () => {
        setSlideThreeOn(true);
        setLastSlide(true);
    }

    return (
        <OuterWrapper>
            <TransitionGroup>
                <Wrapper>

                    <SlideOneFadeUpLeft in={fadeOut}/>

                    <CentralWrapper css={css `transform: translateY(50px);`}>

                        <SlideOneScale
                            in={slideOneOn}
                            onEnter={setFadeOut}
                            onExited={animationHelperThree}/>

                        <SlideOneFade
                            in={fadeOut}
                            scrollDown={setSlideOneOn}
                            onEnter={animatioHelperTwo}/>

                        <SlideTwoFade in={secondFade} scrollDown={animatioHelper}/>

                        <SlideTwoFadeUp in={secondFade}/>

                    </CentralWrapper>

                    <SlideOneFadeUpRight in={fadeOut}/>

                </Wrapper>

                {slideThreeOn && <Wrapper
                    css={css `flex-direction: column; justify-content: flex-start; padding-top: 50px;`}>
                    <CSSTransition
                        timeout={2000}
                        in={lastSlide}
                        classNames="slide-three-zoom-in"
                        mountOnEnter>
                        <CentralWrapper>
                            <LogoIllustrationBig css={css `width: 30vw; max-width: 600px; height: auto;`}/>
                            <CSSTransition
                                timeout={2000}
                                in={!lastSlide}
                                classNames="slide-three-fade-in"
                                mountOnEnter>
                                <AllOffers/>
                            </CSSTransition>
                        </CentralWrapper>
                    </CSSTransition>

                    <CSSTransition
                        timeout={{
                        enter: 2000,
                        exit: 500
                    }}
                        onExited={() => setStaticScroll(true)}
                        in={lastSlide}
                        classNames="slide-three-slide-down"
                        mountOnEnter>
                        <CentralWrapper css={css `margin-top: 5%;`}>
                            <h2>The offer of Ayurveda</h2>
                            <p className='p-small' css={css `width: 50%;`}>a holistic approach to health and wellbeing by caring about the way of living.</p>
                            <div onClick={() => setLastSlide(false)}>
                                <DownScrollIcon size={"4vw"}/>
                            </div>
                        </CentralWrapper>
                    </CSSTransition>

                </Wrapper>}
            </TransitionGroup>

            {staticScroll && <React.Fragment>

                <Spacer h="100vh"/>
                <CtaSection />
                <Spacer h="20vh"/>
                <QuoteSection />
                <AboutSection />
            </React.Fragment>}
        </OuterWrapper>
    )
}
