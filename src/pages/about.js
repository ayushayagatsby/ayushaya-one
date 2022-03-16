import * as React from "react"
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

const About = () => {

    return (
        <Layout>
            <Seo title="About page"/>
            <AboutTopSection/>
            <CurriculumSection/>
            <WorkingSection />
            <EducationSection />
            <QuoteSection quote="Rather sustaining health than treating diseases." small={false}/>
            <BottomSection />
        </Layout>
    )
}

export default About
