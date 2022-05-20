import React from 'react'
import {CSSTransition} from 'react-transition-group'
import SideWrapperComponent from '../SlidesHelpers/SideWrapperComponent'
import "./SlideOneFadeUp.css"


export default function SlideOneFadeUp(props) {
    return (
        <CSSTransition timeout={1000} in={props.in} classNames="slide-one-fade-up">
            <SideWrapperComponent p = {props.p}>
                {props.children}
            </SideWrapperComponent>
        </CSSTransition>
    )
}
