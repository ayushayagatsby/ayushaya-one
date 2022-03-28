import React, { useContext } from 'react';
import {Link, graphql} from "gatsby"
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutTopSection from "../components/AboutPage/AboutTopSection"
import CurriculumSection from "../components/AboutPage/CurriculumSection"
import MaskGateShape from "../assets/MaskGateShape.svg"
import bgGradient from "../images/bgGradient.jpeg"
import Door from "../components/SlideOneScale/Door"
import WorkingSection from "../components/AboutPage/WorkingSection"
import EducationSection from "../components/AboutPage/EducationSection"
import QuoteSection from "../components/QuoteSection/QuoteSection"
import BottomSection from "../components/AboutPage/BottomSection"
import AboutCta from "../components/AboutPage/AboutCta"
import LanguageContext from "../context/LanguageContext"

const About = () => {
    const {language} = useContext(LanguageContext)
    return (
        <>
            <Seo title="About page"/>
            <AboutTopSection lan={language}/>
            <CurriculumSection lan={language}/>
            <WorkingSection lan={language}/>
            <EducationSection lan={language}/>
            <QuoteSection quote="Rather sustaining health than treating diseases." small={false} lan={language}/>
            <BottomSection lan={language}/>
            <AboutCta lan={language}/>
        </>
    )
}

export default About
