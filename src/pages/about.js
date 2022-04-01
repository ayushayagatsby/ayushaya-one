import React, { useContext } from 'react';
import Seo from "../components/seo"
import LanguageContext from "../context/LanguageContext"
import AboutDesktop from '../components/AboutDesktop';
import AboutMobile from '../components/AboutMobile';
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import AboutContent from '../content/AboutContent.json'


const About = () => {
    const breakpoints = useBreakpoint();

    const {language} = useContext(LanguageContext)

    const englishContent = AboutContent.content.en;
    const italianContent = AboutContent.content.it;
    const germanContent = AboutContent.content.de;

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



            {!breakpoints.sm && <AboutDesktop currentLanguage={currentLanguage} />}

        </>
    )
}

export default About
