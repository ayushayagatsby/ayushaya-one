import React from 'react'
import {css, jsx} from '@emotion/react'

export default function SingleOffer({children, text, margin, scale, spacing}) {
    return (
        <div css={css `display: flex; flex-direction: column; align-items: center; margin: ${margin}; transform: scale(${scale ?? "1"});`}>
            <div css={css`margin-bottom: ${spacing};`}>{children}</div>
            <h5 css={css`margin: 5px;`}>{text}</h5>
        </div>
    )
}
