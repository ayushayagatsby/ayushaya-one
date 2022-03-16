import React from 'react';
import BrandMark from "../assets/BrandMark.svg"
import {css, jsx} from '@emotion/react'

export default function Logo() {
  return (
    <BrandMark css={css ` width: 3vw; max-width: 70px; min-width: 50px;`}/>
  )
}
