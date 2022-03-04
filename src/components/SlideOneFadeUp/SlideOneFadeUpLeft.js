import React from 'react'
import {css, jsx} from '@emotion/react'

import SlideOneFadeUp from './SlideOneFadeUp'
import BrandType from "../../assets/BrandType.svg"


export default function SlideOneFadeUpLeft(props) {
    return (
        <SlideOneFadeUp in={props.in}>
            <BrandType css={css ` width: 60%; max-width: 440px; margin-left: 50px;`}/>
        </SlideOneFadeUp>

    )
}
