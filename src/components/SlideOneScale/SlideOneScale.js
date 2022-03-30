import React from 'react'
import styled from "@emotion/styled"
import {CSSTransition} from 'react-transition-group'
import "./SlideOneScale.css"
import bgGradient from "./bgGradient.jpeg"
import Door from './Door'
import {css, jsx} from '@emotion/react'

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
            timeout={{
            enter: 1500,
            exit: 1000
        }}
            in={props.in}
            classNames="slide-one-scale"
            onEnter={() => props.onEnter(true)}
            onExited={() => props.onExited()}>
            {/* <MaskGateShape css={css `margin-bottom: 50px; width: 18vw; max-width: 500px;`}/> */}
            <Door width="22vw" mb="50px"/>
        </CSSTransition>
    )
}
