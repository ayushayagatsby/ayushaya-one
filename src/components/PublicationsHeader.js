import React, {useContext} from 'react'
import LanguageContext from '../context/LanguageContext';
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import PublicationsContent from '../content/PublicationsContent.json';
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import {StaticImage} from "gatsby-plugin-image"

export default function PublicationsHeader() {
    const breakpoints = useBreakpoint();

    const {language} = useContext(LanguageContext)

    const englishContent = PublicationsContent.content.en;
    const italianContent = PublicationsContent.content.it;
    const germanContent = PublicationsContent.content.de;

    let handleCurrentLanguage = (language) => {
        switch (language) {
            case 'it':
                return italianContent
                break;
            case 'en':
                return englishContent
                break;

            case 'de':
                return germanContent
                break;

            default:
                break;
        }
    }

    let currentLanguage = handleCurrentLanguage(language);

    return (
        <div>{!breakpoints.md && <div
                css={css `display: flex; flex-direction: column; align-items: center; margin: 100px 0 80px;`}>
                <StaticImage
                    src="../images/AboutPicture.png"
                    alt="Dr. Juliane Merckens"
                    layout="constrained"
                    width={623}
                    height={670}
                    css={css `width: 30%; margin: 0 auto;`}/>

                <h1 css={css `margin: 50px 0;`}>{currentLanguage.header}</h1>

                <p class="p-big">{currentLanguage.paragraph}</p>
            </div>} {breakpoints.sm && <div
                css={css `display: flex; flex-direction: column; align-items: center; margin: 30px 0 50px;`}>
                <StaticImage
                    src="../images/AboutPicture.png"
                    alt="Dr. Juliane Merckens"
                    layout="constrained"
                    width={623}
                    height={670}
                    css={css `width: 60%; margin: 0 auto;`}/>

                <h3 css={css `margin: 30px 0;`}>{currentLanguage.header}</h3>

                <p css={css `text-align: center;`}>{currentLanguage.paragraph}</p>
            </div>}</div>
    )
}
