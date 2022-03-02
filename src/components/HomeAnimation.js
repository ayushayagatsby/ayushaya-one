import React, {useState} from 'react'
import MaskGateShape from "../assets/MaskGateShape.svg"
import BrandType from "../assets/BrandType.svg"
import DownScrollIcon from "./DownScrollIcon.js"
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import "./HomeAnimation.css"
import bgGradient from "./bgGradient.jpeg"

const Wrapper = styled("div")`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
`
const CentralWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
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

    const [slideTwoOn,
        setSlideTwoOn] = useState(false)

    const [fadeOut,
        setFadeOut] = useState(false);

    return (
        <TransitionGroup>
            <Wrapper>
                <CSSTransition timeout={1000} in={fadeOut} classNames="slide-one-fade-up">
                    <SideWrapper>
                        <BrandType css={css ` width: 60%; max-width: 440px; margin-left: 50px;`}/>
                    </SideWrapper>
                </CSSTransition>

                <CentralWrapper>
                    <CSSTransition
                        timeout={1500}
                        in={slideOneOn}
                        classNames="slide-one-scale"
                        onEnter={() => setFadeOut(true)}>
                        {/* <MaskGateShape css={css `margin-bottom: 50px; width: 18vw; max-width: 500px;`}/> */}
                        <div
                            css={css `background-image: url(${bgGradient}); background-size: cover; overflow: hidden; margin-bottom: 50px; height: 300px; width: 18vw; max-width: 500px; border-top-left-radius: 48%; border-top-right-radius: 48%;`}></div>
                    </CSSTransition>

                    <CSSTransition timeout={200} in={fadeOut} classNames="slide-one-fade">
                        <div onClick={() => setSlideOneOn(true)}>
                            <DownScrollIcon size={"6vw"}/>
                        </div>
                    </CSSTransition>

                    <CSSTransition
                        timeout={3000}
                        in={fadeOut}
                        classNames="slide-two-fade"
                        mountOnEnter>
                        <div onClick={() => setSlideTwoOn(true)}>
                            <DownScrollIcon size={"4vw"}/>
                        </div>
                    </CSSTransition>

                    <CSSTransition
                        timeout={2000}
                        in={fadeOut}
                        classNames="slide-two-fade-up"
                        mountOnEnter>
                        <div
                            css={css `display: flex; flex-direction: column; justify-content: center; align-items: center; position: absolute; text-align: center; width: 50%;`}>

                            <h1>Sustaining the body’s innate intelligence to get to health through balance</h1>

                        </div>
                    </CSSTransition>
                </CentralWrapper>

                <CSSTransition timeout={1000} in={fadeOut} classNames="slide-one-fade-up">
                    <SideWrapper>
                        <h3>A path to full life by the art of holistic healthcare.</h3>
                        <p className='p-small'>Professional Ayurvedic consultations for human and their
                            animal friends by Dr. Juliane Merckens, MD.</p>
                    </SideWrapper>
                </CSSTransition>

            </Wrapper>
        </TransitionGroup>
    )
}
