import React from 'react'
import {CSSTransition} from 'react-transition-group'
import DownScrollIcon from '../DownScrollIcon'
import "./SlideTwoFade.css"

export default function SlideTwoFade(props) {

    return (

        <CSSTransition
            timeout={3000}
            in={props. in}
            classNames="slide-two-fade"
            mountOnEnter>
            <DownScrollIcon click={props.scrollDown} size={"4vw"}/>

        </CSSTransition>
    )
}
