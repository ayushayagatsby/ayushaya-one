import React from 'react'
import {css, jsx} from '@emotion/react'

export default function SingleOffer({children, text, margin}) {
    return (
        <div css={css `display: flex; flex-direction: column; align-items: center; margin: ${margin}`}>
            <div>{children}</div>
            <h5>{text}</h5>
        </div>
    )
}
