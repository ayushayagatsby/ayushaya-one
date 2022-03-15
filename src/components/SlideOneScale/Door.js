import React from 'react'
import bgGradient from "../../images/bgGradient.jpeg"
import {css, jsx} from '@emotion/react'


export default function Door() {
    return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 944.78 1277.58" css={css `width: 22vw; margin-bottom: 50px;`}>
                <defs>
                    <clipPath id="door">
                        <path
                            d="M944.09,1276.9H.69V471.24A479.07,479.07,0,0,1,3.2,423.11c1.62-15.64,4.05-31.37,7.22-46.73A468.37,468.37,0,0,1,81.53,208.11,473.18,473.18,0,0,1,289,37.65,468.77,468.77,0,0,1,424.21,3.12a478.85,478.85,0,0,1,96.36,0,470.68,470.68,0,0,1,421,420,476.14,476.14,0,0,1,2.52,48.13V1276.9Z"/>
                    </clipPath>
                </defs>

                <image clip-path="url(#door)" href={bgGradient}/>
            </svg>
    )
}
