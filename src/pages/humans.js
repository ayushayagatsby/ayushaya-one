import React, {useContext, useEffect} from 'react'
import HumansDesktop from '../components/HumansDesktop'
import HumansMobile from '../components/HumansMobile'
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import Seo from '../components/seo';
import HumansContent from '../content/HumansContent.json';
import LanguageContext from '../context/LanguageContext';



export default function Humans() {
    const breakpoints = useBreakpoint();

    const {language} = useContext(LanguageContext)

    const englishContent = HumansContent.content.en;
    const italianContent = HumansContent.content.it;
    const germanContent = HumansContent.content.de;

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
        <>
            <Seo title="Humans page"/> {breakpoints.sm && <HumansMobile currentLanguage={currentLanguage}/>
}

           

            {!breakpoints.md  && <HumansDesktop currentLanguage={currentLanguage}/>}

        </>

    )
}
