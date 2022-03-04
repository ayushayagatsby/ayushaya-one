import React from 'react'
import {CSSTransition} from 'react-transition-group'
import DownScrollIcon from '../DownScrollIcon'
import "./SlideOneFade.css"

export default function SlideOneFade(props) {
    return (
        <CSSTransition timeout={200} in={props.in} classNames="slide-one-fade" onEnter={props.onEnter}>
            <div onClick={() => props.scrollDown(true)}>
                <DownScrollIcon size={"6vw"}/>
            </div>
        </CSSTransition>
    )
}
