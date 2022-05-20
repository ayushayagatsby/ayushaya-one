import React, {useContext} from 'react'
import AnimalsDesktop from '../components/AnimalsDesktop'
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import Seo from '../components/seo'
import AnimalsMobile from '../components/AnimalsMobile'
import AnimalsContent from '../content/AnimalsContent.json'
import LanguageContext from '../context/LanguageContext';


export default function Animals() {
    const breakpoints = useBreakpoint();

    const {language} = useContext(LanguageContext)

    const englishContent = AnimalsContent.content.en;
    const italianContent = AnimalsContent.content.it;
    const germanContent = AnimalsContent.content.de;

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
            <Seo title="Animals page"/> {breakpoints.sm && <AnimalsMobile currentLanguage={currentLanguage}/>
}

          


            {!breakpoints.sm && <AnimalsDesktop currentLanguage={currentLanguage}/>}

        </>
    )
}