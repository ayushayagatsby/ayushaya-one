import React, { useContext } from 'react';
import {Link, graphql} from "gatsby"
import styled from "@emotion/styled"
import {css, jsx} from '@emotion/react'
import Layout from "./layout"
import Seo from "./seo"
import AboutTopSection from "./AboutPage/AboutTopSection"
import CurriculumSection from "./AboutPage/CurriculumSection"
import MaskGateShape from "../assets/MaskGateShape.svg"
import bgGradient from "../images/bgGradient.jpeg"
import Door from "./SlideOneScale/Door"
import WorkingSection from "./AboutPage/WorkingSection"
import EducationSection from "./AboutPage/EducationSection"
import QuoteSection from "./QuoteSection/QuoteSection"
import BottomSection from "./AboutPage/BottomSection"
import AboutCta from "./AboutPage/AboutCta"

export default function AboutDesktop({currentLanguage}) {
  return (
    <>
            <Seo title="About page"/>
            <AboutTopSection currentLanguage={currentLanguage}/>
            <CurriculumSection currentLanguage={currentLanguage}/>
            <WorkingSection currentLanguage={currentLanguage}/>
            <EducationSection currentLanguage={currentLanguage}/>
            <QuoteSection quote={currentLanguage.quote} small={false} />
            <BottomSection currentLanguage={currentLanguage}/>
            <AboutCta currentLanguage={currentLanguage}/>
        </>
  )
}
