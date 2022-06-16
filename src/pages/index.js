import React, {useContext, useEffect} from "react"
import HomeContent from '../content/HomeContent.json';
import LanguageContext from '../context/LanguageContext';
import Seo from "../components/seo"
import HomeAnimation from "../components/HomeAnimation"
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import MobileHome from "../components/MobileHome"






const Home = () => {
    useEffect(() => {
        const layout = document.getElementById("layout-wrapper");
        layout.scrollTo(0, 0)
    }, [])
    const breakpoints = useBreakpoint();
    const {language} = useContext(LanguageContext)

    const englishContent = HomeContent.content.en;
    const italianContent = HomeContent.content.it;
    const germanContent = HomeContent.content.de;

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
            <Seo title="Home page"/>
            
            {breakpoints.sm && 
                <MobileHome currentLanguage={currentLanguage}/>
            }



            {(!breakpoints.md) && <HomeAnimation currentLanguage={currentLanguage}/>}
        

        </>
    )
}

export default Home

