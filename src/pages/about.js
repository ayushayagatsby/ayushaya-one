import React, { useContext } from 'react';
import Seo from "../components/seo"
import LanguageContext from "../context/LanguageContext"
import AboutDesktop from '../components/AboutDesktop';
import AboutMobile from '../components/AboutMobile';
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import AboutSection from '../content/AboutContent.json'


const About = () => {
    const breakpoints = useBreakpoint();

    const {language} = useContext(LanguageContext)

    const englishContent = AboutSection.content.en;
    const italianContent = AboutSection.content.it;
    const germanContent = AboutSection.content.de;

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
            <Seo title="About page"/> {breakpoints.sm && <AboutMobile currentLanguage={currentLanguage}/>
}

            {(!breakpoints.sm && breakpoints.md) && <h1>Prova</h1>
}

            {(!breakpoints.md && breakpoints.l) && <AboutDesktop currentLanguage={currentLanguage} />}

        </>
    )
}

export default About
