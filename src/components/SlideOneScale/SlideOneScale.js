import React from 'react'
import styled from "@emotion/styled"
import {CSSTransition} from 'react-transition-group'
import "./SlideOneScale.css"
import bgGradient from "./bgGradient.jpeg"

const DoorShape = styled("div")`
  background-image: url(${bgGradient}); 
  background-size: cover; overflow: hidden; 
  margin-bottom: 50px; 
  height: 25vw; 
  width: 18vw; 
  max-width: 500px; 
  border-top-left-radius: 50%; 
  border-top-right-radius: 50%;
`

export default function SlideOneScale(props) {
    return (
        <CSSTransition
            timeout={1500}
            in={props.in}
            classNames="slide-one-scale"
            onEnter={() => props.onEnter(true)}
            onExited={() => props.onExited()}>
            {/* <MaskGateShape css={css `margin-bottom: 50px; width: 18vw; max-width: 500px;`}/> */}
            <DoorShape/>
        </CSSTransition>
    )
}
