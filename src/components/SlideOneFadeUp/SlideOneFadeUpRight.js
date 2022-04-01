import React from 'react'
import SlideOneFadeUp from './SlideOneFadeUp'
import {css, jsx} from '@emotion/react'



export default function SlideOneFadeUpRight(props) {
    return (
        <SlideOneFadeUp in={props.in}>
            <h3 css={css `margin-bottom: 5%;`}>{props.currentLanguage.slideOneHeader}</h3>
            <p className='p'>{props.currentLanguage.slideOnesubheader}</p>
        </SlideOneFadeUp>

    )
}
