import React from 'react'
import {CSSTransition} from 'react-transition-group'
import {css, jsx} from '@emotion/react'
import "./SlideTwoFadeUp.css"

export default function SlideTwoFadeUp(props) {
    return (

        <CSSTransition
        timeout={2000}
        in={props.in}
        classNames="slide-two-fade-up"
        mountOnEnter>
        <div
            css={css `display: flex; flex-direction: column; justify-content: center; align-items: center; position: absolute; text-align: center; width: 50%; min-width: 600px; max-width: 750px;`}>

            <h1>Sustaining the body’s innate intelligence to get to health through balance</h1>

        </div>
    </CSSTransition>
    )
}
