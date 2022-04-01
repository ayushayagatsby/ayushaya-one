import React from 'react';
import BrandMark from "../assets/BrandMark.svg"
import {css, jsx} from '@emotion/react'
import InternalLink from './InternalLink'

export default function Logo({menuState, toggleMenuState}) {
const closeMenuHandler = ()=> {
  if (menuState) {
    toggleMenuState()
  }
}

    return (
        <div onClick={closeMenuHandler}>
            <InternalLink href="/demo-home">
                <BrandMark css={css ` width: 3vw; max-width: 70px; min-width: 50px;`}/></InternalLink>
        </div>
    )
}
