import React, { useState, useEffect } from "react"
import LogoIllustrationBig from "../assets/LogoIllustrationBig.svg"
import DownScrollIcon from "./DownScrollIcon.js"
import styled from "@emotion/styled"
import { css, jsx } from "@emotion/react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import "./HomeAnimation.css"
import SlideOneFadeUpLeft from "./SlideOneFadeUp/SlideOneFadeUpLeft"
import SlideOneFadeUpRight from "./SlideOneFadeUp/SlideOneFadeUpRight"
import SlideOneScale from "./SlideOneScale/SlideOneScale"
import SlideOneFade from "./SlideOneFade/SlideOneFade"
import SlideTwoFade from "./SlideTwoFade/SlideTwoFade"
import SlideTwoFadeUp from "./SlideTwoFadeUp/SlideTwoFadeUp"
import AllOffers from "./OfferComponent/AllOffers"
import CtaSection from "./CtaSection/CtaSection"
import QuoteSection from "./QuoteSection/QuoteSection"
import AboutSection from "./AboutSection/AboutSection"
import FirstPlantShadow from "../images/FirstPlantShadow.svg"

const OuterWrapper = styled("div")`
  min-height: 100vh;
  height: auto;
  width: 100%;
`
const Spacer = styled("div")`
  height: ${props => props.h};
`

const Wrapper = styled("div")`
  height: 100%;
  overflow-y: hidden;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
`
const InnerWrapper = styled("div")`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`

const PlantShadow = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${FirstPlantShadow});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: -50px -100px;
  pointer-events: none;
  opacity: 0.1;
  filter: blur(12px);
`

const CentralWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  text-align: center;
`

const SideWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-top: -10%;
`

export default function HomeAnimation({ currentLanguage }) {
  const [slideOneOn, setSlideOneOn] = useState(false)

  const [slideThreeOn, setSlideThreeOn] = useState(false)

  const [fadeOut, setFadeOut] = useState(false)

  const [secondFade, setSecondFade] = useState(false)

  const [slideTwoOff, setSlideTwoOff] = useState(false)

  const [staticScroll, setStaticScroll] = useState(false)

  const [lastSlide, setLastSlide] = useState(false)

  const [footerVisibility, setFooterVisibility] = useState(true)

  useEffect(() => {
    const firstChild = document.getElementById("layout-wrapper")
    const ft = document.getElementById("prova")

    if (footerVisibility) {
      firstChild.style.height = "auto"
      firstChild.style.overflow = "scroll"
      ft.style.display = "flex"
    } else {
      firstChild.style.height = `100vh `
      firstChild.style.overflow = "hidden"
      ft.style.display = "none"
    }
  }, [footerVisibility])

  useEffect(() => {
    setFooterVisibility(false)
  }, [])

  const animatioHelper = () => {
    setSlideOneOn(false)
    setSecondFade(false)
  }

  const animatioHelperTwo = () => {
    setSecondFade(true)
  }

  const animationHelperThree = () => {
    setSlideThreeOn(true)
    setLastSlide(true)
  }

  const staticScrollHelper = () => {
    setStaticScroll(true)
    setFooterVisibility(true)
  }

  const animationHelperFour = () => {
    setLastSlide(false)
  }

  const animationHelperFive = () => {
    setSlideOneOn(true)

    setTimeout(() => {
      setSlideTwo(true)
    }, "1000")
  }

  const handleWhichSlide = () => {}

  const [slideOne, setSlideOne] = useState(true)
  const [slideTwo, setSlideTwo] = useState(false)
  const [slideThree, setSlideThree] = useState(false)

  useEffect(() => {
    const handleScroll = event => {
      let delta = event.deltaY
      if (delta > 0) {
        if (slideOne && !slideTwo && !slideThree) {
          animationHelperFive()
        } else if (slideOne && slideTwo && !slideThree) {
          animatioHelper()
        } else {
          animationHelperFour()
        }
      }
    }

    window.addEventListener("wheel", handleScroll)

    return () => window.removeEventListener("wheel", handleScroll)
  }, [slideOne, slideTwo, slideThree])

  const handleSlideOne = () => {
    setSlideOne(true)
  }

  return (
    <OuterWrapper>
      <TransitionGroup>
        <Wrapper>
          <InnerWrapper>
            <SlideOneFadeUpLeft in={fadeOut} />

            <CentralWrapper
              css={css`
                transform: translateY(50px);
              `}
            >
              <SlideOneScale
                in={slideOneOn}
                onEnter={setFadeOut}
                onExited={animationHelperThree}
              />

              <SlideOneFade
                in={fadeOut}
                scrollDown={animationHelperFive}
                onEnter={animatioHelperTwo}
              />

              <SlideTwoFade in={secondFade} scrollDown={animatioHelper} />

              <SlideTwoFadeUp
                in={secondFade}
                currentLanguage={currentLanguage}
              />
            </CentralWrapper>

            <SlideOneFadeUpRight
              in={fadeOut}
              currentLanguage={currentLanguage}
            />

            <CSSTransition
              timeout={2000}
              in={fadeOut}
              classNames="plant-shadow"
            >
              <PlantShadow />
            </CSSTransition>
          </InnerWrapper>
        </Wrapper>

        {slideThreeOn && (
          <Wrapper>
            <InnerWrapper
              css={css`
                flex-direction: column;
                justify-content: flex-start;
                padding-top: 50px;
              `}
            >
              <CSSTransition
                timeout={2000}
                in={lastSlide}
                classNames="slide-three-zoom-in"
                mountOnEnter
              >
                <CentralWrapper>
                  <LogoIllustrationBig
                    css={css`
                      width: 30vw;
                      max-width: 600px;
                      height: auto;
                    `}
                  />
                  <CSSTransition
                    timeout={2000}
                    in={!lastSlide}
                    classNames="slide-three-fade-in"
                    mountOnEnter
                  >
                    <AllOffers currentLanguage={currentLanguage} />
                  </CSSTransition>
                </CentralWrapper>
              </CSSTransition>

              <CSSTransition
                timeout={{
                  enter: 2000,
                  exit: 500,
                }}
                onExited={() => staticScrollHelper()}
                onEntered={() => setSlideThree(true)}
                in={lastSlide}
                classNames="slide-three-slide-down"
                mountOnEnter
              >
                <CentralWrapper>
                  <h2
                    css={css`
                      margin-bottom: 3%;
                    `}
                  >
                    {currentLanguage.slideThreeHeader}
                  </h2>
                  <p
                    css={css`
                      width: 70%;
                      margin-bottom: 5%;
                    `}
                  >
                    {currentLanguage.slideThreeText}
                  </p>

                  <DownScrollIcon
                    click={animationHelperFour}
                    size={"4vw"}
                    staticScroll={staticScroll}
                  />
                </CentralWrapper>
              </CSSTransition>
            </InnerWrapper>
          </Wrapper>
        )}
      </TransitionGroup>

      {staticScroll && (
        <React.Fragment>
          <Spacer h="100vh" />
          <h2
            css={css`
              text-align: center;
              max-width: 500px;
              width: 50%;
              margin: 5% auto;
            `}
          >
            {currentLanguage.firstHeaderstatic}
          </h2>
          <CtaSection currentLanguage={currentLanguage} />
          <Spacer h="20vh" />
          <QuoteSection
            quote={currentLanguage.quote}
            small="true"
            shadow="true"
          />
          <AboutSection currentLanguage={currentLanguage} />
        </React.Fragment>
      )}
    </OuterWrapper>
  )
}
