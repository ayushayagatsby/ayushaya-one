import React, {useState} from 'react'
import MaskGateShape from "../assets/MaskGateShape.svg"
import BrandType from "../assets/BrandType.svg"
import DownScrollIcon from "./DownScrollIcon.js"
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import {CSSTransition} from 'react-transition-group'
import "./HomeAnimation.css"

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

    const [fadeOut, setFadeOut] = useState(false);
    


    return (
        <Wrapper>
            <SideWrapper>
                <BrandType css={css ` width: 60%; max-width: 440px; margin-left: 50px;`}/>
            </SideWrapper>

            <CentralWrapper>
                <CSSTransition timeout={1000} in={slideOneOn} classNames="slide-one-scale" onEnter={() => setFadeOut(true)}>
                    <MaskGateShape css={css `margin-bottom: 50px; width: 18vw; max-width: 500px;`}/>
                </CSSTransition>

                <CSSTransition timeout={3000} in={fadeOut} classNames="slide-one-fade-up">
                    <DownScrollIcon size={"6vw"} click={() => setSlideOneOn(true)}/>
                </CSSTransition>
            </CentralWrapper>

            <SideWrapper>
                <h3>A path to full life by the art of holistic healthcare.</h3>
                <p className='p-small'>Professional Ayurvedic consultations for human and their
                    animal friends by Dr. Juliane Merckens, MD.</p>
            </SideWrapper>
        </Wrapper>
    )
}
