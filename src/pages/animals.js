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
            <Seo title="Animals page"/> {breakpoints.sm && <AnimalsMobile currentLanguage={currentLanguage}/>
}

            {(!breakpoints.sm && breakpoints.md) && <h1>Prova</h1>
}

            {(!breakpoints.md && breakpoints.l) && <AnimalsDesktop currentLanguage={currentLanguage}/>}

        </>
    )
}