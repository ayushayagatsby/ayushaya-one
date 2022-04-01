import React, {useContext} from 'react'
import ApproachDesktop from '../components/ApproachDesktop'
import Layout from '../components/layout'
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
            <Seo title="Approach page"/> {breakpoints.sm && <ApproachMobile currentLanguage={currentLanguage}/>
}

            


            {!breakpoints.sm && <ApproachDesktop currentLanguage={currentLanguage}/>}

        </>
    )
}
