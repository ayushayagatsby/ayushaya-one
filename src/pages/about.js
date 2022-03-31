import React, { useContext } from 'react';
import Seo from "../components/seo"
import LanguageContext from "../context/LanguageContext"
import AboutDesktop from '../components/AboutDesktop';
import AboutMobile from '../components/AboutMobile';
import {useBreakpoint} from 'gatsby-plugin-breakpoints';



const About = () => {
    const breakpoints = useBreakpoint();

    const {language} = useContext(LanguageContext)
    return (
        


        <>
            <Seo title="About page"/> {breakpoints.sm && <AboutMobile/>
}

            {(!breakpoints.sm && breakpoints.md) && <h1>Prova</h1>
}

            {(!breakpoints.md && breakpoints.l) && <AboutDesktop language={language} />}

        </>
    )
}

export default About
