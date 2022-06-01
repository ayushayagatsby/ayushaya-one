import React, {useContext} from 'react'
import ApproachDesktop from '../components/ApproachDesktop'
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import Seo from '../components/seo'
import ApproachMobile from '../components/ApproachMobile';
import LanguageContext from '../context/LanguageContext';
import ApproachContent from '../content/ApproachContent.json';


export default function Approach() {

    const breakpoints = useBreakpoint();

    const {language} = useContext(LanguageContext)

    const englishContent = ApproachContent.content.en;
    const italianContent = ApproachContent.content.it;
    const germanContent = ApproachContent.content.de;

    let handleCurrentLanguage = (language) => {
        switch (language) {
            case 'it':
                return italianContent
            case 'en':
                return englishContent

            case 'de':
                return germanContent

            default:
                break;
        }
    }

    let currentLanguage = handleCurrentLanguage(language);

    return (
        <>
            <Seo title="Approach page"/> {breakpoints.sm && <ApproachMobile currentLanguage={currentLanguage}/>
}

            


            {!breakpoints.md && <ApproachDesktop currentLanguage={currentLanguage}/>}

        </>
    )
}
